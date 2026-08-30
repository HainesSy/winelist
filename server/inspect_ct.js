import { chromium } from 'playwright';

async function inspectBottlePage() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-blink-features=AutomationControlled']
  });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  await page.addInitScript(() => {
    delete Object.getPrototypeOf(navigator).webdriver;
  });

  console.log("Testing bottle page navigation...");
  // Using a sample public wine page or drink action
  await page.goto('https://www.cellartracker.com/wine.asp?iWine=1', { waitUntil: 'networkidle' });
  console.log("Wine page title:", await page.title());

  const buttons = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a, button, input')).map(el => ({
      tag: el.tagName,
      type: el.type,
      text: (el.innerText || el.value || '').trim(),
      href: el.href || el.getAttribute('href'),
      id: el.id
    })).filter(x => x.text && (x.text.toLowerCase().includes('drink') || x.text.toLowerCase().includes('consume') || x.text.toLowerCase().includes('remove') || x.text.toLowerCase().includes('log')));
  });
  console.log("Action buttons found:\n", JSON.stringify(buttons.slice(0, 10), null, 2));

  await browser.close();
}

inspectBottlePage().catch(console.error);
