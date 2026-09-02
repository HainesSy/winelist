/**
 * test/challenger2_gastronomy_domain_audit.mjs
 * Challenger 2: Independent Empirical Audit for Gastronomy & Domain Rigor
 */

import assert from 'node:assert/strict';
import { WINE_REGIONS } from '../src/data/wineRegions.js';

console.log('================================================================');
console.log('🔬 CHALLENGER 2: DEEP GASTRONOMY & DOMAIN RIGOR AUDIT');
console.log('================================================================\n');

const EXPECTED_REGIONS = [
  'champagne', 'burgundy', 'bordeaux', 'rhone', 'loire-valley', 'alsace', 'corsica',
  'piedmont', 'tuscany', 'italy-other',
  'california', 'oregon',
  'germany-mosel', 'spain-rioja', 'chile-maipo', 'australia', 'japan-chubu'
];

const VALID_WINE_TYPES = new Set(['Red', 'White', 'Sparkling', 'Rosé']);

let totalChecks = 0;
let passedChecks = 0;
const failureLog = [];

function check(label, condition, detail = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
  } else {
    failureLog.push({ label, detail });
    console.error(`  ❌ [FAIL] ${label}: ${detail}`);
  }
}

// 1. Check all 17 regions present
check('Master registry has 17 regions', Object.keys(WINE_REGIONS).length === 17, `Count: ${Object.keys(WINE_REGIONS).length}`);

for (const regionId of EXPECTED_REGIONS) {
  const r = WINE_REGIONS[regionId];
  check(`Region "${regionId}" exists in master registry`, !!r, `Missing region ${regionId}`);
  if (!r) continue;

  console.log(`\n━━━ Region: ${r.name} (${regionId}) ━━━`);

  // ==========================================
  // A. FOOD PAIRINGS & GASTRONOMY CHECKS
  // ==========================================
  const pairings = r.foodPairings;
  check(`[${regionId}] has foodPairings array`, Array.isArray(pairings), `foodPairings type: ${typeof pairings}`);
  if (Array.isArray(pairings)) {
    check(
      `[${regionId}] has 5 to 10 food pairings (Actual: ${pairings.length})`,
      pairings.length >= 5 && pairings.length <= 10,
      `Pairing count: ${pairings.length}`
    );

    pairings.forEach((p, idx) => {
      const pId = `${regionId} pairing #${idx + 1} ("${p.dish || 'unnamed'}")`;

      // 1. wineType
      check(
        `${pId} has strictly valid wineType ('Red'|'White'|'Sparkling'|'Rosé')`,
        VALID_WINE_TYPES.has(p.wineType),
        `Found wineType: "${p.wineType}"`
      );

      // 2. targetWine
      check(
        `${pId} has non-empty targetWine`,
        typeof p.targetWine === 'string' && p.targetWine.trim().length > 2,
        `targetWine: "${p.targetWine}"`
      );

      // 3. dish
      check(
        `${pId} has non-empty dish`,
        typeof p.dish === 'string' && p.dish.trim().length > 2,
        `dish: "${p.dish}"`
      );

      // 4. deep flavor synergy rationale
      const rationale = p.note || p.rationale || p.whyItWorks;
      check(
        `${pId} has deep flavor synergy rationale (>15 chars)`,
        typeof rationale === 'string' && rationale.trim().length >= 15,
        `Rationale length: ${rationale ? rationale.length : 0}`
      );

      // 5. granular glassware with geometry/volume
      check(
        `${pId} has glassware specification (>3 chars)`,
        typeof p.glassware === 'string' && p.glassware.trim().length >= 3,
        `Glassware: "${p.glassware}"`
      );

      // Check if glassware contains volume/geometry cues
      const hasGeometryOrVolume = /ml|oz|bowl|tulip|flute|taper|rim|balloon|burgundy|bordeaux|stem|glass|chalice|coupe|mouth|aperture|narrow|wide|flare|chimney|riesling|copa|iso/i.test(p.glassware || '');
      check(
        `${pId} glassware includes geometry, volume, or specific stemware type`,
        hasGeometryOrVolume,
        `Glassware: "${p.glassware}"`
      );

      // 6. dual-unit temperature containing both °C and °F
      const temp = p.servingTemp || '';
      const hasC = temp.includes('°C') || temp.includes('C');
      const hasF = temp.includes('°F') || temp.includes('F');
      check(
        `${pId} servingTemp has dual units (°C and °F)`,
        hasC && hasF,
        `servingTemp: "${temp}"`
      );

      // 7. decanting directives
      check(
        `${pId} has decanting directive`,
        typeof p.decanting === 'string' && p.decanting.trim().length >= 3,
        `decanting: "${p.decanting}"`
      );
    });
  }

  // ==========================================
  // B. TECHNICAL REGULATIONS
  // ==========================================
  const tr = r.technicalRegulations;
  check(`[${regionId}] has technicalRegulations`, !!tr && typeof tr === 'object', `Type: ${typeof tr}`);
  if (tr) {
    // Geology
    check(`[${regionId}] technicalRegulations has geology`, !!tr.geology, `Missing geology`);
    if (tr.geology) {
      const formations = tr.geology.formations || tr.geology.soils || tr.geology.strata || tr.geology.keyFormations;
      check(`[${regionId}] geology has formations/soils/strata description or array`, 
        (Array.isArray(formations) && formations.length > 0) || typeof tr.geology.summary === 'string' || typeof tr.geology.description === 'string' || typeof tr.geology === 'string',
        `Geology content: ${JSON.stringify(tr.geology).slice(0, 100)}`
      );
    }

    // Grapes
    check(`[${regionId}] technicalRegulations has grapes`, !!tr.grapes, `Missing grapes`);
    if (tr.grapes) {
      const majorGrapes = tr.grapes.major || tr.grapes.authorized || tr.grapes.permitted || tr.grapes.varieties;
      check(`[${regionId}] grapes has major/authorized varieties array`, 
        Array.isArray(majorGrapes) && majorGrapes.length >= 1,
        `Major grapes: ${JSON.stringify(majorGrapes)}`
      );
    }

    // Classification
    check(`[${regionId}] technicalRegulations has classification`, !!tr.classification, `Missing classification`);
    if (tr.classification) {
      const tiers = tr.classification.tiers || tr.classification.pyramid || tr.classification.hierarchy || tr.classification.levels;
      check(`[${regionId}] classification has pyramid/tiers/hierarchy`, 
        (Array.isArray(tiers) && tiers.length >= 1) || typeof tr.classification.system === 'string',
        `Classification: ${JSON.stringify(tr.classification).slice(0, 100)}`
      );
    }
  }

  // ==========================================
  // C. PRESTIGE CUVÉES & MONOPOLES & DEBUT VINTAGES
  // ==========================================
  const prestige = r.prestigeCuvees || r.prestigeMonopoles || r.prestigeEstates || [];
  check(`[${regionId}] has prestige cuvées / monopoles collection (>= 3 items, actual: ${prestige.length})`, 
    Array.isArray(prestige) && prestige.length >= 3,
    `Count: ${prestige.length}`
  );

  prestige.forEach((p, pIdx) => {
    const pName = p.name || `Prestige item #${pIdx + 1}`;
    check(`[${regionId}] prestige item "${pName}" has name`, typeof p.name === 'string' && p.name.length > 0);
    const prod = p.producer || p.estate || p.house || p.domainOrHouse || p.houseOrGrower || p.domain;
    check(`[${regionId}] prestige item "${pName}" has producer`, typeof prod === 'string' && prod.length > 0, `Producer: "${prod}"`);
    
    // Check debut vintage
    const debut = p.debutVintage || p.firstVintage || p.inauguralVintage;
    check(`[${regionId}] prestige item "${pName}" has debut vintage`, 
      debut !== undefined && debut !== null && `${debut}`.length >= 4,
      `debutVintage: ${debut}`
    );
  });

  // ==========================================
  // D. ICONIC BENCHMARK DOMAINES & PRODUCERS
  // ==========================================
  const iconic = r.iconicDomaines || r.iconicGrowers || r.iconicProducers || r.iconicChateaux || [];
  check(`[${regionId}] has iconic domaines collection (>= 3 items, actual: ${iconic.length})`, 
    Array.isArray(iconic) && iconic.length >= 3,
    `Count: ${iconic.length}`
  );

  iconic.forEach((d, dIdx) => {
    const dName = d.name || `Iconic item #${dIdx + 1}`;
    check(`[${regionId}] iconic producer "${dName}" has name`, typeof d.name === 'string' && d.name.length > 0);
    const loc = d.village || d.subregion || d.commune || d.district;
    check(`[${regionId}] iconic producer "${dName}" has village/subregion`, typeof loc === 'string' && loc.length > 0, `Location: "${loc}"`);
    const vig = d.vigneron || d.winemaker || d.proprietor || d.director;
    check(`[${regionId}] iconic producer "${dName}" has vigneron/winemaker`, typeof vig === 'string' && vig.length > 0, `Vigneron: "${vig}"`);
    check(`[${regionId}] iconic producer "${dName}" has philosophy (>10 chars)`, typeof d.philosophy === 'string' && d.philosophy.trim().length >= 10, `Philosophy: "${d.philosophy}"`);
    check(`[${regionId}] iconic producer "${dName}" has keyCuvees array (>= 1)`, Array.isArray(d.keyCuvees) && d.keyCuvees.length >= 1, `keyCuvees: ${JSON.stringify(d.keyCuvees)}`);
  });
}

console.log('\n================================================================');
console.log(`AUDIT RESULTS: ${passedChecks}/${totalChecks} assertions passed.`);
if (failureLog.length > 0) {
  console.log(`\n❌ FAILURES FOUND (${failureLog.length}):`);
  failureLog.forEach((f, i) => {
    console.log(` ${i + 1}. ${f.label} -> ${f.detail}`);
  });
} else {
  console.log('✅ 100% SUCCESS: ALL 17 REGIONS FULLY CONFORM TO DOMAIN RIGOR!');
}
console.log('================================================================\n');

if (failureLog.length > 0) {
  process.exitCode = 1;
}
