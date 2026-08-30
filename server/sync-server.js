import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Shared Cross-Device Service State Store
const STATE_DIR = path.resolve('server/data');
const STATE_FILE = path.join(STATE_DIR, 'service_state.json');

if (!fs.existsSync(STATE_DIR)) {
  fs.mkdirSync(STATE_DIR, { recursive: true });
}

let serviceState = {
  history: [],
  counts: {},
  bins: {},
  username: ''
};

try {
  if (fs.existsSync(STATE_FILE)) {
    serviceState = { ...serviceState, ...JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8')) };
  }
} catch (e) {
  console.log('[Sync Server] Initializing fresh service state');
}

function saveServiceState() {
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify(serviceState, null, 2), 'utf-8');
  } catch (e) {
    console.error('[Sync Server] Error saving service state to disk:', e);
  }
}

app.get('/api/service-state', (req, res) => {
  res.json(serviceState);
});

app.post('/api/service-state', (req, res) => {
  const { history, counts, bins, username } = req.body;
  if (history !== undefined) serviceState.history = history;
  if (counts !== undefined) serviceState.counts = counts;
  if (bins !== undefined) serviceState.bins = bins;
  if (username !== undefined && username.trim()) serviceState.username = username.trim();
  saveServiceState();
  res.json({ success: true, state: serviceState });
});

app.delete('/api/service-state', (req, res) => {
  serviceState = { history: [], counts: {}, bins: {}, username: serviceState.username };
  saveServiceState();
  res.json({ success: true, message: 'Service state cleared across devices' });
});

// Proxy for reading CellarTracker inventory CSV
app.use('/api/cellartracker', async (req, res) => {
  try {
    const targetPath = req.originalUrl.replace(/^\/api\/cellartracker/, '');
    const targetUrl = `https://www.cellartracker.com${targetPath}`;
    
    const fetchOptions = {
      method: req.method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/csv,text/plain,application/csv,application/json,*/*'
      }
    };

    if (req.method === 'POST') {
      fetchOptions.body = JSON.stringify(req.body);
      fetchOptions.headers['Content-Type'] = req.headers['content-type'] || 'application/json';
    }

    const response = await fetch(targetUrl, fetchOptions);
    const contentType = response.headers.get('content-type') || 'text/csv';
    res.set('Content-Type', contentType);
    
    const buffer = await response.arrayBuffer();
    res.status(response.status).send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).send(`Proxy Error: ${err.message}`);
  }
});

// Serve frontend build if dist exists (for production container)
app.use(express.static('dist'));

// Maintain browser instances / cookies if possible for fast response
let browserInstance = null;

async function getBrowser() {
  if (!browserInstance || !browserInstance.isConnected()) {
    browserInstance = await chromium.launch({
      headless: true,
      args: [
        '--disable-blink-features=AutomationControlled',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ]
    });
  }
  return browserInstance;
}

app.get('/api/status', (req, res) => {
  res.json({ status: 'online', engine: 'playwright-headless', sharedState: true });
});

app.post('/api/consume', async (req, res) => {
  const { username, password, iBottle, iWine, reason = 'Drank from my cellar', action = 'Drink', note = '' } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, error: 'Missing username or password' });
  }

  if (!iBottle && !iWine) {
    return res.status(400).json({ success: false, error: 'Missing bottle or wine ID' });
  }

  console.log(`[Sync Server] Processing consumption request for user: ${username}, bottle: ${iBottle || iWine}, action: ${action}`);

  let context = null;
  try {
    const browser = await getBrowser();
    context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      viewport: { width: 1280, height: 800 }
    });

    const page = await context.newPage();
    await page.addInitScript(() => {
      delete Object.getPrototypeOf(navigator).webdriver;
    });

    // Step 1: Login to CellarTracker
    console.log('[Sync Server] Step 1: Navigating to CellarTracker home for login...');
    await page.goto('https://www.cellartracker.com/', { waitUntil: 'networkidle', timeout: 25000 });
    console.log('[Sync Server] Home page loaded. Title:', await page.title(), 'URL:', page.url());

    // Check if already signed in or click Sign In
    const signInBtn = page.locator('button:has-text("Sign In"), a:has-text("Sign In")').first();
    if (await signInBtn.isVisible({ timeout: 4000 }).catch(() => false)) {
      console.log('[Sync Server] Clicking Sign In button...');
      await signInBtn.click();
      await page.waitForTimeout(1000);
    }

    // Fill credentials
    const userField = page.locator('input#handle, input[name="szUser"]').first();
    const passField = page.locator('input#password, input[name="szPassword"]').first();
    const submitBtn = page.locator('input#sign_in, input[type="submit"][value="Sign In"], button:has-text("Sign In")').first();

    if (await userField.isVisible({ timeout: 5000 }).catch(() => false)) {
      console.log('[Sync Server] Filling credentials for user:', username);
      await userField.fill(username);
      await passField.fill(password);
      await submitBtn.click();
      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      console.log('[Sync Server] Post-login page URL:', page.url(), 'Title:', await page.title());
    } else {
      console.log('[Sync Server] Login fields not visible, checking current state...');
    }

    // Step 2: Navigate directly to the bottle action page
    let actionUrl = '';
    if (iBottle) {
      actionUrl = `https://www.cellartracker.com/bottle.asp?iBottle=${encodeURIComponent(iBottle)}&Action=${encodeURIComponent(action)}`;
    } else {
      actionUrl = `https://www.cellartracker.com/wine.asp?iWine=${encodeURIComponent(iWine)}&Action=${encodeURIComponent(action)}`;
    }

    console.log(`[Sync Server] Step 2: Navigating to action URL: ${actionUrl}`);
    await page.goto(actionUrl, { waitUntil: 'networkidle', timeout: 25000 });
    console.log('[Sync Server] Bottle page loaded. Title:', await page.title(), 'URL:', page.url());

    // Inspect interactive buttons and forms on bottle page
    const pageInspect = await page.evaluate(() => {
      const forms = Array.from(document.querySelectorAll('form')).map(f => ({
        id: f.id,
        name: f.name,
        action: f.action,
        method: f.method
      }));
      const buttons = Array.from(document.querySelectorAll('button, input[type="submit"], input[type="button"]')).map(b => ({
        tag: b.tagName,
        type: b.type,
        id: b.id,
        name: b.name,
        value: b.value,
        text: (b.innerText || '').trim()
      }));
      return { forms, buttons, bodyText: document.body.innerText.slice(0, 300) };
    });
    console.log('[Sync Server] Bottle page inspection:\n', JSON.stringify(pageInspect, null, 2));

    // Step 3: Handle consumption form submission
    // CellarTracker bottle drink form usually has a submit button or specific action button
    const drinkSubmit = page.locator('form:not(#search_form) input[type="submit"], form:not(#search_form) button[type="submit"], input[value*="Drink" i], input[value*="Consume" i], input[value*="Save" i], button:has-text("Drink"), button:has-text("Save")').first();

    let submitted = false;
    if (await drinkSubmit.isVisible({ timeout: 5000 }).catch(() => false)) {
      console.log('[Sync Server] Found drink/save submit button. Clicking...');
      await drinkSubmit.click();
      await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
      console.log('[Sync Server] Post-submit URL:', page.url(), 'Title:', await page.title());
      submitted = true;
    } else {
      console.log('[Sync Server] WARNING: Drink submit button not found on page!');
    }

    await context.close();

    if (submitted) {
      console.log('[Sync Server] Bottle consumption completed successfully in background!');
      return res.json({
        success: true,
        message: `Successfully consumed bottle ${iBottle || iWine} on CellarTracker`
      });
    } else {
      return res.status(400).json({
        success: false,
        error: `Could not find drink confirmation form on CellarTracker for bottle ${iBottle || iWine}. Page title: "${pageInspect.bodyText.slice(0, 80)}"`
      });
    }
  } catch (err) {
    console.error('[Sync Server] Error during automated consumption:', err);
    if (context) await context.close().catch(() => {});
    return res.status(500).json({
      success: false,
      error: err.message || 'Automated background consumption encountered an error'
    });
  }
});

app.use((req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🍷 [Sync Server] Running on http://0.0.0.0:${PORT}`);
});
