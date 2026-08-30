import { chromium } from 'playwright-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';

async function testStealth() {
  chromium.use(stealthPlugin());
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  console.log("Navigating to https://www.cellartracker.com/ with stealth...");
  await page.goto('https://www.cellartracker.com/', { waitUntil: 'networkidle', timeout: 30000 });
  console.log("Stealth Page Title:", await page.title());
  console.log("Stealth URL:", page.url());

  const signInBtn = page.locator('button:has-text("Sign In"), a:has-text("Sign In")').first();
  const isVisible = await signInBtn.isVisible({ timeout: 5000 }).catch(() => false);
  console.log("Is Sign In visible:", isVisible);

  await browser.close();
}

testStealth().catch(console.error);
