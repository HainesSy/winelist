import { WINE_REGIONS, findWineRegion } from '../src/data/wineRegions.js';
import { WINE_REGION_BOUNDARIES } from '../src/data/wineRegionBoundaries.js';
import assert from 'assert';

console.log('Testing 17 Regions Invariants...');
const expectedRegions = [
  'champagne', 'burgundy', 'alsace', 'corsica', 'bordeaux',
  'rhone', 'loire-valley', 'piedmont', 'tuscany', 'california',
  'oregon', 'italy-other', 'japan-chubu', 'germany-mosel',
  'spain-rioja', 'chile-maipo', 'australia'
];

assert.strictEqual(Object.keys(WINE_REGIONS).length, 17, 'Must have exactly 17 wine regions');

for (const id of expectedRegions) {
  const r = WINE_REGIONS[id];
  assert(r, 'Region missing: ' + id);
  assert(r.name && typeof r.name === 'string', 'Region name missing: ' + id);
  assert(Array.isArray(r.center) && r.center.length === 2, 'Center invalid: ' + id);
  assert(r.center[0] >= -90 && r.center[0] <= 90, 'Center lat invalid: ' + id);
  assert(r.center[1] >= -180 && r.center[1] <= 180, 'Center lng invalid: ' + id);
  const subs = r.subRegions || r.subregions;
  assert(Array.isArray(subs) && subs.length > 0, 'Subregions missing: ' + id);
  assert(Array.isArray(r.foodPairings) && r.foodPairings.length > 0, 'Food pairings missing: ' + id);
  for (const fp of r.foodPairings) {
    assert(fp.dish && fp.category && (fp.note || fp.rationale), 'Invalid food pairing item in ' + id);
  }
  assert(WINE_REGION_BOUNDARIES[id], 'Missing GeoJSON boundaries for ' + id);
  assert.strictEqual(WINE_REGION_BOUNDARIES[id].type, 'FeatureCollection', 'Boundary must be FeatureCollection: ' + id);
  console.log(`  ✓ Verified region ${id} (${r.name}) - Subregions: ${subs.length}, Pairings: ${r.foodPairings.length}, GeoFeatures: ${WINE_REGION_BOUNDARIES[id].features.length}`);
}

console.log('\nTesting Canonical Sommelier Queries for all 17 Regions...');
const sommelierQueries = [
  ['Champagne', 'champagne'],
  ['Ambonnay', 'champagne'],
  ['Chablis', 'burgundy'],
  ['Cote de Nuits', 'burgundy'],
  ['Alsace', 'alsace'],
  ['Patrimonio', 'corsica'],
  ['Pauillac', 'bordeaux'],
  ['Pomerol', 'bordeaux'],
  ['Hermitage', 'rhone'],
  ['Chateauneuf-du-Pape', 'rhone'],
  ['Rayas', 'rhone'],
  ['Sancerre', 'loire-valley'],
  ['Vouvray', 'loire-valley'],
  ['Chinon', 'loire-valley'],
  ['Barolo', 'piedmont'],
  ['Barbaresco', 'piedmont'],
  ['Brunello di Montalcino', 'tuscany'],
  ['Chianti Classico', 'tuscany'],
  ['Napa Valley', 'california'],
  ['Mayacamas', 'california'],
  ['Willamette Valley', 'oregon'],
  ['Dundee Hills', 'oregon'],
  ['Amarone', 'italy-other'],
  ['Etna', 'italy-other'],
  ['Taurasi', 'italy-other'],
  ['Yamanashi', 'japan-chubu'],
  ['Koshu', 'japan-chubu'],
  ['Bernkastel', 'germany-mosel'],
  ['Mosel', 'germany-mosel'],
  ['Rioja', 'spain-rioja'],
  ['Priorat', 'spain-rioja'],
  ['Puente Alto', 'chile-maipo'],
  ['Maipo', 'chile-maipo'],
  ['Barossa', 'australia'],
  ['Margaret River', 'australia']
];

for (const [q, exp] of sommelierQueries) {
  const match = findWineRegion(q);
  assert(match, 'Query failed to resolve: ' + q);
  assert.strictEqual(match.id, exp, `Query "${q}" resolved to ${match.id}, expected ${exp}`);
  console.log(`  ✓ Query "${q}" -> ${match.id}`);
}

console.log('\n================================================================');
console.log('✅ ALL 17 REGION AND SOMMELIER QUERIES EMPIRICALLY CONFIRMED!');
console.log('================================================================');
