/**
 * test/challenger2_sommelier_depth_inspector.mjs
 * Challenger 2: Deep Sommelier Domain & Gastronomic Nuance Verification
 */

import { WINE_REGIONS } from '../src/data/wineRegions.js';

console.log('================================================================');
console.log('🍷 CHALLENGER 2: SOMMELIER DEPTH & GASTRONOMIC NUANCE REPORT');
console.log('================================================================\n');

let totalPairings = 0;
const pairingsByWineType = { Red: 0, White: 0, Sparkling: 0, 'Rosé': 0 };
const regionPairingCounts = {};
let temperatureMathPassed = 0;
let temperatureMathTotal = 0;

for (const [regionId, region] of Object.entries(WINE_REGIONS)) {
  console.log(`\n────────────────────────────────────────────────────────────────`);
  console.log(`📌 REGION: ${region.name} (${region.country}) [${regionId}]`);
  console.log(`────────────────────────────────────────────────────────────────`);

  // Subregions & Crus overview
  const subCount = (region.subRegions || []).length;
  const cruCount = (region.grandCrus || region.crus || region.benchmarkCrus || []).length;
  const prestigeCount = (region.prestigeCuvees || region.prestigeMonopoles || region.prestigeEstates || []).length;
  const domaineCount = (region.iconicDomaines || region.iconicGrowers || region.iconicProducers || []).length;

  console.log(`  • Subregions: ${subCount} | Crus/Vineyards: ${cruCount} | Prestige Bottlings: ${prestigeCount} | Iconic Producers: ${domaineCount}`);

  // Food Pairings
  const pairings = region.foodPairings || [];
  regionPairingCounts[regionId] = pairings.length;
  totalPairings += pairings.length;

  console.log(`  • Gastronomy Pairings (${pairings.length}):`);
  pairings.forEach((p, idx) => {
    pairingsByWineType[p.wineType] = (pairingsByWineType[p.wineType] || 0) + 1;
    console.log(`    [${p.wineType.toUpperCase()}] "${p.dish}"`);
    console.log(`       Target Wine: ${p.targetWine}`);
    console.log(`       Glassware:   ${p.glassware}`);
    console.log(`       Service:     ${p.servingTemp} | Decanting: ${p.decanting}`);
    console.log(`       Synergy:     ${(p.note || p.rationale || '').slice(0, 110)}...`);

    // Verify Temp Math
    const tempStr = p.servingTemp || '';
    const cMatch = tempStr.match(/(\d+)(?:[–-](\d+))?\s*°?C/i);
    const fMatch = tempStr.match(/(\d+)(?:[–-](\d+))?\s*°?F/i);
    if (cMatch && fMatch) {
      temperatureMathTotal++;
      const cLow = parseInt(cMatch[1], 10);
      const cHigh = cMatch[2] ? parseInt(cMatch[2], 10) : cLow;
      const fLow = parseInt(fMatch[1], 10);
      const fHigh = fMatch[2] ? parseInt(fMatch[2], 10) : fLow;

      const calcFLow = Math.round((cLow * 9) / 5 + 32);
      const calcFHigh = Math.round((cHigh * 9) / 5 + 32);

      // Check that F is within +/- 4 degrees of calculation
      if (Math.abs(calcFLow - fLow) <= 4 && Math.abs(calcFHigh - fHigh) <= 4) {
        temperatureMathPassed++;
      } else {
        console.warn(`       ⚠️ Temperature conversion discrepancy in ${regionId}: ${tempStr} (Calculated ~${calcFLow}-${calcFHigh}°F)`);
      }
    }
  });

  // Showcase Prestige Bottlings with Debut Vintages
  console.log(`  • Sample Prestige Bottlings & Debut Vintages:`);
  const prestige = (region.prestigeCuvees || region.prestigeMonopoles || region.prestigeEstates || []).slice(0, 3);
  prestige.forEach(p => {
    console.log(`    - ${p.name} (${p.producer || p.estate || p.house}) | Debut Vintage: ${p.debutVintage || p.firstVintage}`);
  });
}

console.log('\n================================================================');
console.log('📊 GASTRONOMY & DOMAIN RIGOR AGGREGATE METRICS');
console.log('================================================================');
console.log(`Total Food Pairings Across 17 Regions: ${totalPairings}`);
console.log(`Breakdown by Wine Type:`);
console.log(`  - Red:       ${pairingsByWineType.Red}`);
console.log(`  - White:     ${pairingsByWineType.White}`);
console.log(`  - Sparkling: ${pairingsByWineType.Sparkling}`);
console.log(`  - Rosé:      ${pairingsByWineType['Rosé']}`);
console.log(`Temperature Dual-Unit Consistency: ${temperatureMathPassed}/${temperatureMathTotal} mathematically accurate within ±4°F`);
console.log(`Every region has between 5 and 10 pairings: ${Object.values(regionPairingCounts).every(c => c >= 5 && c <= 10) ? 'YES ✅' : 'NO ❌'}`);
console.log('================================================================\n');
