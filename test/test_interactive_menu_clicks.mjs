import { chromium } from 'playwright';
import path from 'path';

async function testMenuToSubregionInteractions() {
  console.log('🍷 Starting Interactive Menu Subregion Click Tests with sample_cellar.csv...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const results = [];

  try {
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Upload sample_cellar.csv
    console.log('Uploading sample_cellar.csv...');
    const fileInput = page.locator('input[type="file"]');
    const fixturePath = path.resolve('test/fixtures/sample_cellar.csv');
    await fileInput.setInputFiles(fixturePath);
    await page.waitForTimeout(1500);

    // Verify wine list loaded
    const menuTitle = await page.locator('.menu-title').innerText();
    console.log(`Menu loaded: "${menuTitle}"`);

    // 1. Click "Galicia" button under Spain
    console.log('\n--- Test 1: Clicking "Galicia" under Spain ---');
    const galiciaBtn = page.locator('button.region-label:has-text("Galicia")').first();
    await galiciaBtn.scrollIntoViewIfNeeded();
    await galiciaBtn.click();
    await page.waitForTimeout(2000);

    const hash1 = await page.evaluate(() => window.location.hash);
    const title1 = await page.locator('.region-hero-title').innerText();
    const activeSub1 = await page.locator('.appellation-card.is-focused .appellation-name').innerText().catch(() => null);
    console.log(`URL Hash: ${hash1}`);
    console.log(`Region Title: "${title1}", Active Subregion: "${activeSub1}"`);

    results.push({
      test: 'Click "Galicia" on Menu -> Spain with Rías Baixas zoomed',
      passed: hash1.includes('spain-rioja') && hash1.includes('rias-baixas') && activeSub1 && activeSub1.includes('Rías Baixas')
    });

    await page.screenshot({ path: 'C:/Users/haine/.gemini/antigravity/brain/99bbc3f0-a413-4f2e-b897-06ab5151a588/menu_click_galicia_zoomed.png' });
    console.log('📸 Saved menu_click_galicia_zoomed.png');

    // Go back to menu
    await page.locator('button:has-text("Back to Wine List")').click();
    await page.waitForTimeout(1000);

    // 2. Click "Western Australia" button under Australia
    console.log('\n--- Test 2: Clicking "Western Australia" under Australia ---');
    const waBtn = page.locator('button.region-label:has-text("Western Australia")').first();
    await waBtn.scrollIntoViewIfNeeded();
    await waBtn.click();
    await page.waitForTimeout(2000);

    const hash2 = await page.evaluate(() => window.location.hash);
    const title2 = await page.locator('.region-hero-title').innerText();
    const activeSub2 = await page.locator('.appellation-card.is-focused .appellation-name').innerText().catch(() => null);
    console.log(`URL Hash: ${hash2}`);
    console.log(`Region Title: "${title2}", Active Subregion: "${activeSub2}"`);

    results.push({
      test: 'Click "Western Australia" on Menu -> Australia with Margaret River zoomed',
      passed: hash2.includes('australia') && hash2.includes('margaret-river') && activeSub2 && activeSub2.includes('Margaret River')
    });

    await page.screenshot({ path: 'C:/Users/haine/.gemini/antigravity/brain/99bbc3f0-a413-4f2e-b897-06ab5151a588/menu_click_wa_zoomed.png' });
    console.log('📸 Saved menu_click_wa_zoomed.png');

    // Go back to menu
    await page.locator('button:has-text("Back to Wine List")').click();
    await page.waitForTimeout(1000);

    // 3. Click "Lombardia" button under Italy
    console.log('\n--- Test 3: Clicking "Lombardia" under Italy ---');
    const lombardiaBtn = page.locator('button.region-label:has-text("Lombardia")').first();
    await lombardiaBtn.scrollIntoViewIfNeeded();
    await lombardiaBtn.click();
    await page.waitForTimeout(2000);

    const hash3 = await page.evaluate(() => window.location.hash);
    const title3 = await page.locator('.region-hero-title').innerText();
    const activeSub3 = await page.locator('.appellation-card.is-focused .appellation-name').innerText().catch(() => null);
    console.log(`URL Hash: ${hash3}`);
    console.log(`Region Title: "${title3}", Active Subregion: "${activeSub3}"`);

    results.push({
      test: 'Click "Lombardia" on Menu -> Italy Other with Valtellina zoomed',
      passed: hash3.includes('italy-other') && hash3.includes('lombardia-valtellina') && activeSub3 && activeSub3.includes('Valtellina')
    });

    await page.screenshot({ path: 'C:/Users/haine/.gemini/antigravity/brain/99bbc3f0-a413-4f2e-b897-06ab5151a588/menu_click_lombardia_zoomed.png' });
    console.log('📸 Saved menu_click_lombardia_zoomed.png');

    // Go back to menu
    await page.locator('button:has-text("Back to Wine List")').click();
    await page.waitForTimeout(1000);

    // 4. Click "Catalunya" button under Spain
    console.log('\n--- Test 4: Clicking "Catalunya" under Spain ---');
    const catalunyaBtn = page.locator('button.region-label:has-text("Catalunya")').first();
    if (await catalunyaBtn.count() > 0) {
      await catalunyaBtn.scrollIntoViewIfNeeded();
      await catalunyaBtn.click();
      await page.waitForTimeout(2000);

      const hash4 = await page.evaluate(() => window.location.hash);
      const title4 = await page.locator('.region-hero-title').innerText();
      const activeSub4 = await page.locator('.appellation-card.is-focused .appellation-name').innerText().catch(() => null);
      console.log(`URL Hash: ${hash4}`);
      console.log(`Region Title: "${title4}", Active Subregion: "${activeSub4}"`);

      results.push({
        test: 'Click "Catalunya" on Menu -> Spain with Priorat zoomed',
        passed: hash4.includes('spain-rioja') && hash4.includes('priorat') && activeSub4 && activeSub4.includes('Priorat')
      });

      await page.screenshot({ path: 'C:/Users/haine/.gemini/antigravity/brain/99bbc3f0-a413-4f2e-b897-06ab5151a588/menu_click_catalunya_zoomed.png' });
      console.log('📸 Saved menu_click_catalunya_zoomed.png');
    }

  } catch (err) {
    console.error('❌ Error in interactive menu test:', err);
  } finally {
    await browser.close();
  }

  console.log('\n========================================');
  console.log('📊 INTERACTIVE MENU CLICK TEST REPORT');
  console.log('========================================');
  let allPassed = true;
  for (const r of results) {
    console.log(`${r.passed ? '✅' : '❌'} ${r.test}`);
    if (!r.passed) allPassed = false;
  }
  console.log('========================================');
  console.log(allPassed ? '🎉 ALL MENU CLICK TESTS PASSED!' : '❌ SOME TESTS FAILED');
  if (!allPassed) process.exit(1);
}

testMenuToSubregionInteractions();
