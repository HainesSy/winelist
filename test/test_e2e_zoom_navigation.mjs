import { chromium } from 'playwright';

async function runE2ETests() {
  console.log('🚀 Starting Playwright E2E Zoom Navigation Tests...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const results = [];

  try {
    // 1. Test Direct Deep Links with Hash
    console.log('\n--- 1. Testing Deep-Links with Hash Navigation ---');

    // Test A: Direct link to Galicia (#region=spain-rioja&subregion=rias-baixas)
    console.log('Visiting #region=spain-rioja&subregion=rias-baixas...');
    await page.goto('http://localhost:5173/#region=spain-rioja&subregion=rias-baixas', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const titleA = await page.locator('.region-hero-title').innerText();
    const activeSubA = await page.locator('.appellation-card.is-focused .appellation-name').innerText().catch(() => null);
    console.log(`Region Title: "${titleA}", Focused Subregion: "${activeSubA}"`);

    results.push({
      test: 'Deep link #region=spain-rioja&subregion=rias-baixas',
      passed: titleA.includes('Spain') && activeSubA && activeSubA.includes('Rías Baixas')
    });

    // Take screenshot of Galicia zoomed
    await page.screenshot({ path: 'C:/Users/haine/.gemini/antigravity/brain/99bbc3f0-a413-4f2e-b897-06ab5151a588/menu_galicia_zoomed.png' });
    console.log('📸 Saved menu_galicia_zoomed.png');

    // Test B: Direct slug deep link (#region=galicia)
    console.log('Visiting #region=galicia...');
    await page.goto('http://localhost:5173/#region=galicia', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const titleB = await page.locator('.region-hero-title').innerText();
    const activeSubB = await page.locator('.appellation-card.is-focused .appellation-name').innerText().catch(() => null);
    console.log(`Region Title: "${titleB}", Focused Subregion: "${activeSubB}"`);

    results.push({
      test: 'Deep link #region=galicia (slug auto-resolution)',
      passed: titleB.includes('Spain') && activeSubB && activeSubB.includes('Rías Baixas')
    });

    // Test C: Western Australia slug (#region=western-australia)
    console.log('Visiting #region=western-australia...');
    await page.goto('http://localhost:5173/#region=western-australia', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const titleC = await page.locator('.region-hero-title').innerText();
    const activeSubC = await page.locator('.appellation-card.is-focused .appellation-name').innerText().catch(() => null);
    console.log(`Region Title: "${titleC}", Focused Subregion: "${activeSubC}"`);

    results.push({
      test: 'Deep link #region=western-australia',
      passed: titleC.includes('Australia') && activeSubC && activeSubC.includes('Margaret River')
    });

    await page.screenshot({ path: 'C:/Users/haine/.gemini/antigravity/brain/99bbc3f0-a413-4f2e-b897-06ab5151a588/menu_western_australia_zoomed.png' });
    console.log('📸 Saved menu_western_australia_zoomed.png');

    // Test D: Reset view button returns to macro view
    console.log('Clicking Map Reset Button...');
    const resetBtn = page.locator('.map-reset-btn');
    await resetBtn.click();
    await page.waitForTimeout(1500);

    const activeSubAfterReset = await page.locator('.appellation-card.is-focused').count();
    const hashAfterReset = await page.evaluate(() => window.location.hash);
    console.log(`Active subregions after reset: ${activeSubAfterReset}, Current hash: ${hashAfterReset}`);

    results.push({
      test: 'Map Reset Button resets active subregion and hash',
      passed: activeSubAfterReset === 0 && hashAfterReset === '#region=australia'
    });

    await page.screenshot({ path: 'C:/Users/haine/.gemini/antigravity/brain/99bbc3f0-a413-4f2e-b897-06ab5151a588/menu_australia_macro_reset.png' });
    console.log('📸 Saved menu_australia_macro_reset.png');

    // Test E: Lombardia under Italy Other
    console.log('Visiting #region=lombardia...');
    await page.goto('http://localhost:5173/#region=lombardia', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const titleE = await page.locator('.region-hero-title').innerText();
    const activeSubE = await page.locator('.appellation-card.is-focused .appellation-name').innerText().catch(() => null);
    console.log(`Region Title: "${titleE}", Focused Subregion: "${activeSubE}"`);

    results.push({
      test: 'Deep link #region=lombardia',
      passed: titleE.includes('Italy') && activeSubE && activeSubE.includes('Valtellina')
    });

    // Test F: Maipo Valley under Chile
    console.log('Visiting #region=maipo-valley...');
    await page.goto('http://localhost:5173/#region=maipo-valley', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const titleF = await page.locator('.region-hero-title').innerText();
    const activeSubF = await page.locator('.appellation-card.is-focused .appellation-name').innerText().catch(() => null);
    console.log(`Region Title: "${titleF}", Focused Subregion: "${activeSubF}"`);

    results.push({
      test: 'Deep link #region=maipo-valley',
      passed: titleF.includes('Chile') && activeSubF && activeSubF.includes('Alto Maipo')
    });

    // Test G: Nahe under Germany
    console.log('Visiting #region=nahe...');
    await page.goto('http://localhost:5173/#region=nahe', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const titleG = await page.locator('.region-hero-title').innerText();
    const activeSubG = await page.locator('.appellation-card.is-focused .appellation-name').innerText().catch(() => null);
    console.log(`Region Title: "${titleG}", Focused Subregion: "${activeSubG}"`);

    results.push({
      test: 'Deep link #region=nahe',
      passed: titleG.includes('Germany') && activeSubG && (activeSubG.includes('Nahe') || activeSubG.includes('Pfalz'))
    });

    // Test H: Back to menu button
    console.log('Clicking Back to Wine Menu button...');
    const backBtn = page.locator('button:has-text("Back to Wine List"), .back-btn, .back-to-menu-btn').first();
    if (await backBtn.count() > 0) {
      await backBtn.click();
      await page.waitForTimeout(1000);

      const currentHashH = await page.evaluate(() => window.location.hash);
      console.log(`Hash after back: "${currentHashH}"`);
      results.push({
        test: 'Back to Menu cleans hash',
        passed: currentHashH === '' || currentHashH === '#'
      });
    }

  } catch (err) {
    console.error('❌ Error during E2E testing:', err);
  } finally {
    await browser.close();
  }

  console.log('\n========================================');
  console.log('📊 E2E TEST REPORT');
  console.log('========================================');
  let allPassed = true;
  for (const r of results) {
    console.log(`${r.passed ? '✅' : '❌'} ${r.test}`);
    if (!r.passed) allPassed = false;
  }
  console.log('========================================');
  console.log(allPassed ? '🎉 ALL E2E TESTS PASSED!' : '❌ SOME TESTS FAILED');

  if (!allPassed) process.exit(1);
}

runE2ETests();
