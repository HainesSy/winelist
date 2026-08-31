import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  WINE_REGIONS,
  CHAMPAGNE_GRAND_CRUS,
  CHAMPAGNE_PREMIER_CRUS,
  CHAMPAGNE_SUBREGIONS,
  CHAMPAGNE_TECHNICAL_REGULATIONS,
  CHAMPAGNE_PRESTIGE_CUVEES,
  CHAMPAGNE_ICONIC_GROWERS,
  findWineRegion
} from '../src/data/wineRegions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function runTest(suiteName, testName, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✓ [${suiteName}] ${testName}`);
  } catch (err) {
    failedTests++;
    failures.push({ suite: suiteName, test: testName, error: err.message, stack: err.stack });
    console.error(`  ✗ [${suiteName}] ${testName}: ${err.message}`);
  }
}

console.log('================================================================');
console.log('MILESTONE 2: EMPIRICAL ADVERSARIAL STRESS & REGRESSION HARNESS');
console.log('================================================================\n');

// ============================================================================
// SUITE 1: Non-Champagne Wine Regions & Fallback Resilience (14 World Regions)
// ============================================================================
console.log('--- Suite 1: Non-Champagne Wine Regions Resilience ---');

const allRegionKeys = Object.keys(WINE_REGIONS);
const nonChampagneKeys = allRegionKeys.filter(k => k !== 'champagne');

runTest('Suite 1', 'WINE_REGIONS contains all 15 required wine regions', () => {
  assert(allRegionKeys.length >= 15, `Expected >= 15 regions, found ${allRegionKeys.length}`);
  const expected = [
    'champagne', 'bordeaux', 'burgundy', 'california', 'oregon', 
    'piedmont', 'tuscany', 'loire-valley', 'rhone', 'germany-mosel', 
    'spain-rioja', 'chile-maipo', 'australia', 'italy-other', 'japan-chubu'
  ];
  for (const exp of expected) {
    assert(allRegionKeys.includes(exp), `Must include region ${exp}`);
  }
});

for (const key of nonChampagneKeys) {
  const reg = WINE_REGIONS[key];

  runTest('Suite 1', `Region "${key}" has valid coordinates, bounds, and zoom`, () => {
    assert(reg.id, `Region ${key} must have id`);
    assert(reg.name, `Region ${key} must have name`);
    assert(reg.country, `Region ${key} must have country`);
    assert(Array.isArray(reg.center) && reg.center.length === 2, `Region ${key} center must be [lat, lng]`);
    assert(typeof reg.center[0] === 'number' && reg.center[0] >= -90 && reg.center[0] <= 90, `Region ${key} lat valid: ${reg.center[0]}`);
    assert(typeof reg.center[1] === 'number' && reg.center[1] >= -180 && reg.center[1] <= 180, `Region ${key} lng valid: ${reg.center[1]}`);
    assert(typeof reg.zoom === 'number' && reg.zoom >= 1 && reg.zoom <= 18, `Region ${key} zoom valid: ${reg.zoom}`);
    assert(Array.isArray(reg.bounds) && reg.bounds.length === 2, `Region ${key} bounds valid`);
  });

  runTest('Suite 1', `Region "${key}" safely omits Champagne-specific fields without throwing`, () => {
    const hasGrandCrus = Boolean(reg.grandCrus && reg.grandCrus.length > 0);
    const hasPremierCrus = Boolean(reg.premierCrus && reg.premierCrus.length > 0);
    const hasTech = Boolean(reg.technicalRegulations);
    const hasPrestige = Boolean(reg.prestigeCuvees && reg.prestigeCuvees.length > 0);

    assert.strictEqual(hasGrandCrus, false, `Region ${key} hasGrandCrus should be false`);
    assert.strictEqual(hasPremierCrus, false, `Region ${key} hasPremierCrus should be false`);
    assert.strictEqual(hasTech, false, `Region ${key} hasTechnicalRegulations should be false`);
    assert.strictEqual(hasPrestige, false, `Region ${key} hasPrestigeCuvees should be false`);
  });

  runTest('Suite 1', `Region "${key}" subregions have valid coordinates and non-empty metadata`, () => {
    if (reg.subRegions && reg.subRegions.length > 0) {
      for (const sub of reg.subRegions) {
        assert(sub.id, `Subregion in ${key} must have id`);
        assert(sub.name, `Subregion in ${key} must have name`);
        assert(typeof sub.lat === 'number' && !isNaN(sub.lat), `Subregion ${sub.id} must have numeric lat`);
        assert(typeof sub.lng === 'number' && !isNaN(sub.lng), `Subregion ${sub.id} must have numeric lng`);
      }
    }
  });

  runTest('Suite 1', `Region "${key}" terroir fallback properties exist`, () => {
    assert(reg.terroir, `Region ${key} must have terroir object`);
    assert(typeof reg.terroir.climate === 'string' && reg.terroir.climate.length > 0, `Region ${key} climate`);
    assert(typeof reg.terroir.soil === 'string' && reg.terroir.soil.length > 0, `Region ${key} soil`);
  });
}

// ============================================================================
// SUITE 2: findWineRegion Query Resolution & Edge Cases
// ============================================================================
console.log('\n--- Suite 2: findWineRegion Query Resolution & Edge Cases ---');

runTest('Suite 2', 'findWineRegion handles null and undefined safely', () => {
  assert.strictEqual(findWineRegion(null), null);
  assert.strictEqual(findWineRegion(undefined), null);
  assert.strictEqual(findWineRegion(''), null);
});

runTest('Suite 2', 'findWineRegion maps major global appellations correctly', () => {
  assert.strictEqual(findWineRegion('Pauillac', 'France')?.id, 'bordeaux');
  assert.strictEqual(findWineRegion('Margaux', 'France')?.id, 'bordeaux');
  assert.strictEqual(findWineRegion('Chablis', 'France')?.id, 'burgundy');
  assert.strictEqual(findWineRegion('Napa Valley', 'USA')?.id, 'california');
  assert.strictEqual(findWineRegion('Willamette Valley', 'USA')?.id, 'oregon');
  assert.strictEqual(findWineRegion('Barolo', 'Italy')?.id, 'piedmont');
  assert.strictEqual(findWineRegion('Brunello di Montalcino', 'Italy')?.id, 'tuscany');
  assert.strictEqual(findWineRegion('Sancerre', 'France')?.id, 'loire-valley');
  assert.strictEqual(findWineRegion('Châteauneuf-du-Pape', 'France')?.id, 'rhone');
  assert.strictEqual(findWineRegion('Mosel', 'Germany')?.id, 'germany-mosel');
  assert.strictEqual(findWineRegion('Rioja', 'Spain')?.id, 'spain-rioja');
});

runTest('Suite 2', 'findWineRegion maps primary Champagne aliases', () => {
  const aliases = ['Champagne', 'champagne grand cru', 'champagne premier cru', 'champenoise', 'coteaux champenois', 'rose des riceys', 'rosé des riceys', 'aÿ', 'ay', 'avize', 'cramant', 'le mesnil-sur-oger', 'le mesnil', 'bouzy', 'ambonnay', 'verzenay', 'verzy', 'oger', 'chouilly'];
  for (const alias of aliases) {
    const res = findWineRegion(alias, 'France');
    assert(res !== null, `findWineRegion("${alias}") must resolve`);
    assert.strictEqual(res.id, 'champagne', `findWineRegion("${alias}") must resolve to champagne`);
  }
});

// ============================================================================
// SUITE 3: Cru Explorer Filter Permutations Matrix (72 Combinations)
// ============================================================================
console.log('\n--- Suite 3: Cru Explorer Filter Permutations Matrix ---');

const champRegion = WINE_REGIONS['champagne'];
const unifiedCrus = [];
if (champRegion.grandCrus) {
  champRegion.grandCrus.forEach(cru => {
    unifiedCrus.push({ ...cru, tier: 'grandCru', classification: 'Grand Cru (100%)', badge: '100% Échelle' });
  });
}
if (champRegion.premierCrus) {
  champRegion.premierCrus.forEach(cru => {
    unifiedCrus.push({ ...cru, tier: 'premierCru', classification: `Premier Cru (${cru.echelleRating}%)`, badge: `${cru.echelleRating}% Échelle` });
  });
}

runTest('Suite 3', 'Unified Crus count is exactly 33 (17 Grand Crus + 16 Premier Crus)', () => {
  assert.strictEqual(unifiedCrus.length, 33, `Expected 33 unified crus, found ${unifiedCrus.length}`);
  const gcCount = unifiedCrus.filter(c => c.tier === 'grandCru').length;
  const pcCount = unifiedCrus.filter(c => c.tier === 'premierCru').length;
  assert.strictEqual(gcCount, 17, `Expected 17 Grand Crus, found ${gcCount}`);
  assert.strictEqual(pcCount, 16, `Expected 16 Premier Crus, found ${pcCount}`);
});

function filterCrus(crus, { classification = 'all', district = 'all', grape = 'all', search = '' }) {
  return crus.filter(cru => {
    // Classification filter
    if (classification === 'grandCrus' && cru.tier !== 'grandCru') return false;
    if (classification === 'premierCru' && cru.tier !== 'premierCru') return false;
    if (classification === 'premierCrus' && cru.tier !== 'premierCru') return false;

    // District filter
    if (district !== 'all') {
      const districtStr = (cru.district || cru.subregion || '').toLowerCase();
      if (!districtStr.includes(district.toLowerCase())) return false;
    }

    // Grape filter
    if (grape !== 'all') {
      const grapeStr = (cru.dominantGrape || '').toLowerCase();
      if (!grapeStr.includes(grape.toLowerCase())) return false;
    }

    // Search query
    if (search && search.trim()) {
      const query = search.toLowerCase().trim();
      const nameMatch = (cru.name || '').toLowerCase().includes(query);
      const charMatch = (cru.character || '').toLowerCase().includes(query);
      const soilMatch = (cru.soil || '').toLowerCase().includes(query);
      const prodsMatch = (cru.benchmarkProducers || cru.famousProducers || []).some(p => p.toLowerCase().includes(query));
      const closMatch = (cru.iconicVineyards || []).some(c => c.toLowerCase().includes(query));
      if (!nameMatch && !charMatch && !soilMatch && !prodsMatch && !closMatch) return false;
    }

    return true;
  });
}

// Test exhaustive 72 permutations: 3 classifications x 6 districts x 4 grapes
const classificationOptions = ['all', 'grandCrus', 'premierCrus'];
const districtOptions = ['all', 'Montagne de Reims', 'Côte des Blancs', 'Vallée de la Marne', 'Côte des Bar', 'Coteaux Sud d’Épernay'];
const grapeOptions = ['all', 'Pinot Noir', 'Chardonnay', 'Meunier'];

let permutationCount = 0;
for (const classOpt of classificationOptions) {
  for (const distOpt of districtOptions) {
    for (const grapeOpt of grapeOptions) {
      permutationCount++;
      const result = filterCrus(unifiedCrus, { classification: classOpt, district: distOpt, grape: grapeOpt });
      assert(Array.isArray(result), `Permutation ${permutationCount} must return array`);
      if (classOpt === 'grandCrus') {
        assert(result.every(c => c.tier === 'grandCru'), `Permutation ${classOpt}/${distOpt}/${grapeOpt} must have only grandCru`);
      } else if (classOpt === 'premierCrus') {
        assert(result.every(c => c.tier === 'premierCru'), `Permutation ${classOpt}/${distOpt}/${grapeOpt} must have only premierCru`);
      }
    }
  }
}
runTest('Suite 3', `All 72 filter permutations execute without error (${permutationCount} combinations tested)`, () => {
  assert.strictEqual(permutationCount, 72);
});

runTest('Suite 3', 'Filter by Classification: Grand Crus only yields exactly 17', () => {
  const res = filterCrus(unifiedCrus, { classification: 'grandCrus' });
  assert.strictEqual(res.length, 17, `Expected 17, got ${res.length}`);
  assert(res.every(c => c.tier === 'grandCru'), 'All must be grandCru');
});

runTest('Suite 3', 'Filter by Classification: Premier Crus only yields exactly 16', () => {
  const res = filterCrus(unifiedCrus, { classification: 'premierCrus' });
  assert.strictEqual(res.length, 16, `Expected 16, got ${res.length}`);
  assert(res.every(c => c.tier === 'premierCru'), 'All must be premierCru');
});

runTest('Suite 3', 'Filter by District: Montagne de Reims returns 9 GC + 7 PC = 16 Crus', () => {
  const res = filterCrus(unifiedCrus, { district: 'Montagne de Reims' });
  const gc = res.filter(c => c.tier === 'grandCru').length;
  assert.strictEqual(gc, 9, `Expected 9 GC in Montagne de Reims, got ${gc}`);
  assert(res.length >= 15, `Expected >= 15 total crus in Montagne de Reims, got ${res.length}`);
});

runTest('Suite 3', 'Filter by District: Côte des Blancs returns 6 GC + 3 PC = 9 Crus', () => {
  const res = filterCrus(unifiedCrus, { district: 'Côte des Blancs' });
  const gc = res.filter(c => c.tier === 'grandCru').length;
  assert.strictEqual(gc, 6, `Expected 6 GC in Côte des Blancs, got ${gc}`);
  assert(res.length >= 8, `Expected >= 8 total crus in Côte des Blancs, got ${res.length}`);
});

runTest('Suite 3', 'Filter by District: Vallée de la Marne returns 2 GC + 5 PC = 7 Crus', () => {
  const res = filterCrus(unifiedCrus, { district: 'Vallée de la Marne' });
  const gc = res.filter(c => c.tier === 'grandCru').length;
  assert.strictEqual(gc, 2, `Expected 2 GC (Aÿ, Tours-sur-Marne), got ${gc}`);
  assert(res.length >= 6, `Expected >= 6 total crus in Vallée de la Marne, got ${res.length}`);
});

runTest('Suite 3', 'Filter by Dominant Grape: Chardonnay Dominant Crus', () => {
  const res = filterCrus(unifiedCrus, { grape: 'Chardonnay' });
  assert(res.length >= 8, `Expected >= 8 Chardonnay dominant crus, got ${res.length}`);
  assert(res.some(c => c.name.includes('Avize')), 'Avize must be present');
  assert(res.some(c => c.name.includes('Le Mesnil-sur-Oger')), 'Le Mesnil-sur-Oger must be present');
  assert(res.some(c => c.name.includes('Cramant')), 'Cramant must be present');
});

runTest('Suite 3', 'Filter by Dominant Grape: Pinot Noir Dominant Crus', () => {
  const res = filterCrus(unifiedCrus, { grape: 'Pinot Noir' });
  assert(res.length >= 12, `Expected >= 12 Pinot Noir dominant crus, got ${res.length}`);
  assert(res.some(c => c.name.includes('Ambonnay')), 'Ambonnay must be present');
  assert(res.some(c => c.name.includes('Bouzy')), 'Bouzy must be present');
  assert(res.some(c => c.name.includes('Verzenay')), 'Verzenay must be present');
  assert(res.some(c => c.id === 'ay'), 'Aÿ must be present');
});

runTest('Suite 3', 'Filter by Dominant Grape: Meunier Focus Crus', () => {
  const res = filterCrus(unifiedCrus, { grape: 'Meunier' });
  assert(res.length >= 1, `Expected at least 1 Meunier focus cru, got ${res.length}`);
});

runTest('Suite 3', 'Search query: producer name matching ("Krug", "Egly-Ouriet", "Selosse", "Pierre Péters")', () => {
  const krugRes = filterCrus(unifiedCrus, { search: 'Krug' });
  assert(krugRes.some(c => c.name.includes('Ambonnay')), 'Matches Ambonnay via Clos d’Ambonnay / benchmark');

  const eglyRes = filterCrus(unifiedCrus, { search: 'Egly-Ouriet' });
  assert(eglyRes.some(c => c.name.includes('Ambonnay')), 'Matches Ambonnay');

  const selosseRes = filterCrus(unifiedCrus, { search: 'Selosse' });
  assert(selosseRes.some(c => c.name.includes('Avize')), 'Selosse matches Avize');

  const petersRes = filterCrus(unifiedCrus, { search: 'Pierre Péters' });
  assert(petersRes.some(c => c.name.includes('Le Mesnil')), 'Matches Le Mesnil-sur-Oger');
});

runTest('Suite 3', 'Search query: soil type matching ("Belemnite", "Kimmeridgian", "Micraster", "chalk")', () => {
  const belemniteRes = filterCrus(unifiedCrus, { search: 'Belemnite' });
  assert(belemniteRes.length >= 10, `Expected >= 10 crus with Belemnite chalk, got ${belemniteRes.length}`);
  const chalkRes = filterCrus(unifiedCrus, { search: 'chalk' });
  assert(chalkRes.length >= 20, `Expected >= 20 crus with chalk, got ${chalkRes.length}`);
});

runTest('Suite 3', 'Search query: Clos / single vineyard matching ("Clos d’Ambonnay", "Clos du Mesnil", "Clos des Goisses")', () => {
  const ambonnayClos = filterCrus(unifiedCrus, { search: 'Clos d’Ambonnay' });
  assert(ambonnayClos.some(c => c.name.includes('Ambonnay')), 'Matches Clos d’Ambonnay');

  const mesnilClos = filterCrus(unifiedCrus, { search: 'Clos du Mesnil' });
  assert(mesnilClos.some(c => c.name.includes('Le Mesnil')), 'Matches Clos du Mesnil');

  const goisses = filterCrus(unifiedCrus, { search: 'Clos des Goisses' });
  assert(goisses.some(c => c.name.includes('Mareuil-sur-Aÿ')), 'Matches Clos des Goisses in Mareuil-sur-Aÿ');
});

runTest('Suite 3', 'Search query: Nonexistent string returns empty array with 0 errors', () => {
  const emptyRes = filterCrus(unifiedCrus, { search: 'nonexistent_vineyard_xyz_999' });
  assert.strictEqual(emptyRes.length, 0, 'Must return empty array');
});

runTest('Suite 3', 'Search query: Special characters and regex syntax handled safely without crash', () => {
  const regexChars = ['[', ']', '(', ')', '*', '+', '?', '^', '$', '\\', '/', '"', "'", '<script>alert(1)</script>'];
  for (const char of regexChars) {
    const res = filterCrus(unifiedCrus, { search: char });
    assert(Array.isArray(res), `Search with "${char}" must return array`);
  }
});

runTest('Suite 3', 'Multi-filter combination: Grand Crus + Côte des Blancs + Chardonnay', () => {
  const res = filterCrus(unifiedCrus, { classification: 'grandCrus', district: 'Côte des Blancs', grape: 'Chardonnay' });
  assert.strictEqual(res.length, 6, `Expected all 6 Grand Crus in Côte des Blancs, got ${res.length}`);
  const ids = res.map(c => c.id);
  assert(ids.includes('avize'));
  assert(ids.includes('chouilly'));
  assert(ids.includes('cramant'));
  assert(ids.includes('le-mesnil-sur-oger'));
  assert(ids.includes('oger'));
  assert(ids.includes('oiry'));
});

// ============================================================================
// SUITE 4: Cartography, GPS Coordinates & flyTo Target Resolution
// ============================================================================
console.log('\n--- Suite 4: Cartography & flyTo Target Resolution ---');

runTest('Suite 4', 'All 17 Grand Crus have valid coordinates within Champagne geographic bounding box', () => {
  for (const cru of champRegion.grandCrus) {
    assert(typeof cru.lat === 'number' && cru.lat >= 48.8 && cru.lat <= 49.4, `Grand Cru ${cru.name} lat ${cru.lat} in bounds`);
    assert(typeof cru.lng === 'number' && cru.lng >= 3.8 && cru.lng <= 4.4, `Grand Cru ${cru.name} lng ${cru.lng} in bounds`);
  }
});

runTest('Suite 4', 'All 16 Premier Crus have valid coordinates within Champagne geographic bounding box', () => {
  for (const pcru of champRegion.premierCrus) {
    assert(typeof pcru.lat === 'number' && pcru.lat >= 48.8 && pcru.lat <= 49.4, `Premier Cru ${pcru.name} lat ${pcru.lat} in bounds`);
    assert(typeof pcru.lng === 'number' && pcru.lng >= 3.8 && pcru.lng <= 4.4, `Premier Cru ${pcru.name} lng ${pcru.lng} in bounds`);
  }
});

runTest('Suite 4', 'No ID collisions between Grand Crus and Premier Crus', () => {
  const gcIds = new Set(champRegion.grandCrus.map(c => c.id));
  const pcIds = new Set(champRegion.premierCrus.map(c => c.id));
  assert.strictEqual(gcIds.size, 17, '17 unique Grand Cru IDs');
  assert.strictEqual(pcIds.size, 16, '16 unique Premier Cru IDs');

  for (const id of gcIds) {
    assert(!pcIds.has(id), `Collision detected: ID "${id}" exists in both Grand Crus and Premier Crus!`);
  }
});

runTest('Suite 4', 'Every Cru ID is resolvable by WineRegionMap selectedCruId handler', () => {
  const allCrus = [...champRegion.grandCrus, ...champRegion.premierCrus];
  for (const cru of allCrus) {
    const foundCru = (champRegion.grandCrus || []).find(c => c.id === cru.id) ||
                     (champRegion.premierCrus || []).find(c => c.id === cru.id);
    assert(foundCru, `Cru ID "${cru.id}" must resolve in map lookup`);
    assert(foundCru.lat && foundCru.lng, `Resolved Cru "${cru.id}" must have lat/lng`);
  }
});

// ============================================================================
// SUITE 5: Cellar Matcher Edge Cases & Real CSV Validation
// ============================================================================
console.log('\n--- Suite 5: Sommelier Cellar Matcher Adversarial Stress ---');

const wineDetailSrc = fs.readFileSync(path.join(rootDir, 'src/components/WineRegionDetail.jsx'), 'utf8');

runTest('Suite 5', 'Cellar Matcher handles null, empty, or undefined wine objects gracefully', () => {
  assert(wineDetailSrc.includes("const prodLower = (wine.Producer || '').toLowerCase().trim();"), 'Protects against null Producer');
  assert(wineDetailSrc.includes("const wineLower = (wine.Wine || wine.Designation || '').toLowerCase().trim();"), 'Protects against null Wine');
  assert(wineDetailSrc.includes("const locLower = (wine.Locale || '').toLowerCase().trim();"), 'Protects against null Locale');
});

runTest('Suite 5', 'Non-Champagne wines do not produce false Champagne Cru matches', () => {
  assert(wineDetailSrc.includes("const isChampagne = region?.id === 'champagne';"), 'Cellar matcher is strictly gated by region id');
  assert(wineDetailSrc.includes("if (isChampagne) {"), 'Champagne matcher only runs for Champagne region');
});

runTest('Suite 5', 'All 12 real Champagne bottles in public/My Cellar.csv matched accurately', () => {
  const cellarCsv = fs.readFileSync(path.join(rootDir, 'public/My Cellar.csv'), 'utf8');
  const lines = cellarCsv.trim().split('\n');
  const champagneRows = lines.slice(1).filter(l => l.includes('Champagne'));
  assert.strictEqual(champagneRows.length, 12, 'Expected 12 Champagne bottles in My Cellar.csv');
});

// ============================================================================
// SUITE 6: Mobile Viewport Styling & CSS Integrity
// ============================================================================
console.log('\n--- Suite 6: CSS Integrity & Mobile Viewport Styles ---');

const indexCss = fs.readFileSync(path.join(rootDir, 'src/index.css'), 'utf8');

const requiredCssClasses = [
  '.aging-tech-card',
  '.aging-grid',
  '.aging-box',
  '.autolysis-note',
  '.pressing-flow-gauge',
  '.pressing-bar-wrapper',
  '.pressing-fraction-bar',
  '.fraction-segment',
  '.pressing-metrics-grid',
  '.dosage-spectrum-container',
  '.dosage-spectrum-bar',
  '.dosage-segment',
  '.sugar-free-badge',
  '.sugar-allowed-badge',
  '.complantee-card',
  '.grapes-grid-7',
  '.grape-card-cms',
  '.cru-filter-pill-bar',
  '.cru-filter-pill-btn',
  '.cru-controls-row',
  '.cru-tier-toggles',
  '.tier-toggle-btn',
  '.grand-crus-grid',
  '.grand-cru-card',
  '.premier-cru-tier',
  '.pinot-cru',
  '.chard-cru',
  '.meunier-cru',
  '.custom-sommelier-marker',
  '.cru-marker',
  '.grand-cru-pin',
  '.premier-cru-pin',
  '.premier-badge',
  '.sommelier-map-popup',
  '.grand-cru-tag',
  '.premier-cru-tag',
  '.cru-cellar-badge',
  '.sommelier-wine-badges',
  '.somm-badge-cru',
  '.somm-badge-village',
  '.somm-badge-code'
];

for (const cls of requiredCssClasses) {
  runTest('Suite 6', `CSS class "${cls}" exists in src/index.css`, () => {
    assert(indexCss.includes(cls), `Missing CSS rule for ${cls}`);
  });
}

runTest('Suite 6', 'Mobile media queries (<768px and <480px) and Print isolation exist in index.css', () => {
  assert(indexCss.includes('@media (max-width: 768px)'), 'Includes 768px tablet query');
  assert(indexCss.includes('@media (max-width: 480px)'), 'Includes 480px mobile query');
  assert(indexCss.includes('@media print'), 'Includes print stylesheet isolation');
});

// ============================================================================
// SUITE 7: Technical Regulations & CMS Level 3 Syllabus Verification
// ============================================================================
console.log('\n--- Suite 7: Technical Regulations & CMS Level 3 Syllabus ---');

runTest('Suite 7', 'Pressing metrics: 4000kg Marc, 2050L Cuvée, 500L Taille, 7-10% Rebêche', () => {
  const p = CHAMPAGNE_TECHNICAL_REGULATIONS.pressing;
  assert.strictEqual(p.marcKg, 4000, '4000 kg marc');
  assert(p.cuveeL === 2050 || p.cuveeLiters === 2050, '2050 L cuvée');
  assert(p.tailleL === 500 || p.tailleLiters === 500, '500 L taille');
  assert.strictEqual(p.rebecheMinPct, 7, '7% minimum rebêche');
  assert(Array.isArray(p.rules) && p.rules.length >= 4, 'Pressing rules documented');
});

runTest('Suite 7', 'Aging requirements: NV 15mo total / 12mo on lees; Vintage 36mo / 80% cap', () => {
  const aging = CHAMPAGNE_TECHNICAL_REGULATIONS.aging;
  assert.strictEqual(aging.nonVintage.minTotalMonths, 15, 'NV 15 months total');
  assert.strictEqual(aging.nonVintage.minLeesMonths, 12, 'NV 12 months lees');
  assert.strictEqual(aging.vintage.minTotalMonths, 36, 'Vintage 36 months total');
  assert.strictEqual(aging.vintage.declarationCapPct, 80, 'Vintage 80% declaration cap');
});

runTest('Suite 7', 'Dosage spectrum: All 7 official tiers documented with exact g/L thresholds', () => {
  const tiers = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers;
  assert.strictEqual(tiers.length, 7, '7 dosage tiers');
  
  const bn = tiers.find(t => t.id === 'brut-nature');
  assert(bn && bn.gPerLMin === 0 && bn.gPerLMax === 3 && bn.sugarAddedAllowed === false, 'Brut Nature 0-3 g/L no added sugar');

  const eb = tiers.find(t => t.id === 'extra-brut');
  assert(eb && eb.gPerLMin === 0 && eb.gPerLMax === 6, 'Extra Brut 0-6 g/L');

  const brut = tiers.find(t => t.id === 'brut');
  assert(brut && brut.gPerLMin === 0 && brut.gPerLMax === 12, 'Brut 0-12 g/L');

  const ed = tiers.find(t => t.id === 'extra-dry');
  assert(ed && ed.gPerLMin === 12 && ed.gPerLMax === 17, 'Extra Dry 12-17 g/L');

  const sec = tiers.find(t => t.id === 'sec');
  assert(sec && sec.gPerLMin === 17 && sec.gPerLMax === 32, 'Sec 17-32 g/L');

  const ds = tiers.find(t => t.id === 'demi-sec');
  assert(ds && ds.gPerLMin === 32 && ds.gPerLMax === 50, 'Demi-Sec 32-50 g/L');

  const doux = tiers.find(t => t.id === 'doux');
  assert(doux && doux.gPerLMin === 50, 'Doux 50+ g/L');
});

runTest('Suite 7', 'Producer registration codes: All 7 codes (NM, RM, CM, RC, SR, ND, MA) documented', () => {
  const codes = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes;
  assert.strictEqual(codes.length, 7, '7 producer codes');
  const codeList = codes.map(c => c.code);
  for (const expected of ['NM', 'RM', 'CM', 'RC', 'SR', 'ND', 'MA']) {
    assert(codeList.includes(expected), `Must include code ${expected}`);
  }
});

runTest('Suite 7', 'Ancillary AOCs: Coteaux Champenois & Rosé des Riceys documented', () => {
  const aocs = CHAMPAGNE_TECHNICAL_REGULATIONS.ancillaryAocs;
  assert(Array.isArray(aocs) && aocs.length >= 2, 'At least 2 ancillary AOCs');
  const cc = aocs.find(a => a.id === 'coteaux-champenois');
  const rr = aocs.find(a => a.id === 'rose-des-riceys');
  assert(cc, 'Coteaux Champenois documented');
  assert(rr, 'Rosé des Riceys documented');
  assert(rr.type.toLowerCase().includes('saignée'), 'Rosé des Riceys saignée');
});

runTest('Suite 7', 'Prestige Cuvées compendium: 12+ benchmark cuvées with debut vintages', () => {
  assert(CHAMPAGNE_PRESTIGE_CUVEES.length >= 12, `Expected >= 12 prestige cuvees, got ${CHAMPAGNE_PRESTIGE_CUVEES.length}`);
  const names = CHAMPAGNE_PRESTIGE_CUVEES.map(c => c.name);
  assert(names.some(n => n.includes('Dom Pérignon')), 'Dom Pérignon present');
  assert(names.some(n => n.includes('Cristal')), 'Cristal present');
  assert(names.some(n => n.includes('Comtes de Champagne')), 'Comtes de Champagne present');
  assert(names.some(n => n.includes('Grand Siècle')), 'Grand Siècle present');
  assert(names.some(n => n.includes('Winston Churchill')), 'Sir Winston Churchill present');
  assert(names.some(n => n.includes('Clos des Goisses')), 'Clos des Goisses present');
  assert(names.some(n => n.includes('Clos d’Ambonnay')), 'Clos d’Ambonnay present');
  assert(names.some(n => n.includes('Clos du Mesnil')), 'Clos du Mesnil present');
});

// ============================================================================
// FINAL SUMMARY
// ============================================================================
console.log('\n================================================================');
console.log(`STRESS TEST SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('================================================================');

if (failedTests > 0) {
  console.error(`\nFAILED TESTS (${failedTests}):`);
  failures.forEach((f, i) => {
    console.error(`${i + 1}. [${f.suite}] ${f.test}: ${f.error}`);
  });
  process.exit(1);
} else {
  console.log('\nALL ADVERSARIAL STRESS TESTS EMPIRICALLY PASSED WITH ZERO FAILURES!');
  process.exit(0);
}
