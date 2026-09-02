/**
 * ============================================================================
 * DEEP ADVERSARIAL VALIDATION & STRESS TEST HARNESS (CHALLENGER 1)
 * ============================================================================
 * 
 * Independent, exhaustive verification test harness:
 *   1. Spatial & Cartographic Coordinate Bounding Boxes (all 17 regions)
 *   2. Non-ASCII Diacritic Resolution, Normalization & Multilingual Aliases
 *   3. Relational Foreign Key Integrity (Crus ↔ Subregions, GeoJSON ↔ Subregions)
 *   4. RFC 7946 Linear Ring Closure & GeoJSON Axis Ordering ([lng, lat])
 *   5. Adversarial Fuzzy Query Matching, Collision Avoidance & Type Safety
 *   6. Sommelier Gastronomy Strict Schema & Service Specs (°C/°F dual temps)
 *   7. Stratigraphy, Ampelography & Classification Pyramid Completeness
 * 
 * Execute with:
 *   node test/deep_adversarial_validation.js
 * ============================================================================
 */

import assert from 'node:assert';
import { WINE_REGIONS, findWineRegion } from '../src/data/wineRegions.js';
import { WINE_REGION_BOUNDARIES } from '../src/data/wineRegionBoundaries.js';

console.log('================================================================');
console.log('🛡️  DEEP ADVERSARIAL VALIDATION & STRESS TEST HARNESS');
console.log('================================================================\n');

let passedAssertions = 0;
let totalAssertions = 0;

function assertCheck(description, condition, failureMessage) {
  totalAssertions++;
  if (!condition) {
    console.error(`  ❌ FAILED: ${description}`);
    if (failureMessage) console.error(`     Details: ${failureMessage}`);
    throw new Error(failureMessage || `Assertion failed: ${description}`);
  }
  passedAssertions++;
}

const REGION_IDS = [
  'champagne', 'burgundy', 'alsace', 'corsica', 'bordeaux',
  'rhone', 'loire-valley', 'piedmont', 'tuscany', 'california',
  'oregon', 'italy-other', 'japan-chubu', 'germany-mosel',
  'spain-rioja', 'chile-maipo', 'australia'
];

// Expected geographic hemisphere bounding boundaries
const EXPECTED_HEMISPHERES = {
  'champagne':     { latMin: 47, latMax: 51, lngMin: 2, lngMax: 6 },
  'burgundy':      { latMin: 45, latMax: 49, lngMin: 3, lngMax: 6 },
  'alsace':        { latMin: 47, latMax: 50, lngMin: 6, lngMax: 9 },
  'corsica':       { latMin: 41, latMax: 44, lngMin: 8, lngMax: 11 },
  'bordeaux':      { latMin: 44, latMax: 46, lngMin: -2, lngMax: 1 },
  'rhone':         { latMin: 43, latMax: 46.5, lngMin: 4, lngMax: 6 },
  'loire-valley':  { latMin: 46, latMax: 49, lngMin: -3, lngMax: 4 },
  'piedmont':      { latMin: 44, latMax: 46.5, lngMin: 6.5, lngMax: 9.5 },
  'tuscany':       { latMin: 42, latMax: 44.5, lngMin: 9.5, lngMax: 12.5 },
  'california':    { latMin: 32, latMax: 43, lngMin: -125, lngMax: -114 },
  'oregon':        { latMin: 42, latMax: 47, lngMin: -125, lngMax: -116 },
  'italy-other':   { latMin: 36, latMax: 47, lngMin: 8, lngMax: 19 },
  'japan-chubu':   { latMin: 34, latMax: 44.5, lngMin: 136, lngMax: 142 },
  'germany-mosel': { latMin: 48.5, latMax: 51.5, lngMin: 6, lngMax: 9 },
  'spain-rioja':   { latMin: 40, latMax: 44, lngMin: -4, lngMax: 2 },
  'chile-maipo':   { latMin: -36, latMax: -32, lngMin: -72, lngMax: -69 },
  'australia':     { latMin: -39, latMax: -30, lngMin: 114, lngMax: 153 }
};

// ----------------------------------------------------------------------------
// SUITE 1: GEOGRAPHIC BOUNDING BOXES & CARTOGRAPHIC ENVELOPES
// ----------------------------------------------------------------------------
console.log('━━━ SUITE 1: Geographic Bounding Boxes & Cartographic Envelopes ━━━');

for (const regionId of REGION_IDS) {
  const region = WINE_REGIONS[regionId];
  assertCheck(`Region ${regionId} exists in WINE_REGIONS`, Boolean(region));
  
  const [[south, west], [north, east]] = region.bounds;
  const expHemi = EXPECTED_HEMISPHERES[regionId];

  // Verify bounding box sanity
  assertCheck(`[${regionId}] bounds south < north`, south < north, `south: ${south}, north: ${north}`);
  assertCheck(`[${regionId}] bounds west < east`, west < east, `west: ${west}, east: ${east}`);
  assertCheck(`[${regionId}] bounds within hemisphere lat bounds`, south >= expHemi.latMin - 2 && north <= expHemi.latMax + 2);
  assertCheck(`[${regionId}] bounds within hemisphere lng bounds`, west >= expHemi.lngMin - 2 && east <= expHemi.lngMax + 2);

  // Verify center is strictly inside bounds
  const [cLat, cLng] = region.center;
  assertCheck(`[${regionId}] center lat inside bounds`, cLat >= south && cLat <= north, `center lat ${cLat} not in [${south}, ${north}]`);
  assertCheck(`[${regionId}] center lng inside bounds`, cLng >= west && cLng <= east, `center lng ${cLng} not in [${west}, ${east}]`);

  // Verify all subregion coordinates fall within region bounds (with 0.5 deg margin for cartographic projections)
  for (const sub of region.subRegions) {
    const sLat = typeof sub.lat === 'number' ? sub.lat : sub.coordinates?.[0];
    const sLng = typeof sub.lng === 'number' ? sub.lng : sub.coordinates?.[1];
    assertCheck(`[${regionId} -> Subregion ${sub.id}] has valid numeric lat`, typeof sLat === 'number' && !Number.isNaN(sLat));
    assertCheck(`[${regionId} -> Subregion ${sub.id}] has valid numeric lng`, typeof sLng === 'number' && !Number.isNaN(sLng));
    assertCheck(`[${regionId} -> Subregion ${sub.id}] lat ${sLat} within bounds margin`, sLat >= south - 0.75 && sLat <= north + 0.75);
    assertCheck(`[${regionId} -> Subregion ${sub.id}] lng ${sLng} within bounds margin`, sLng >= west - 0.75 && sLng <= east + 0.75);
  }

  // Verify all crus coordinates fall within region bounds
  const crus = region.grandCrus || [];
  for (const cru of crus) {
    assertCheck(`[${regionId} -> Cru ${cru.id}] has valid numeric lat`, typeof cru.lat === 'number' && !Number.isNaN(cru.lat));
    assertCheck(`[${regionId} -> Cru ${cru.id}] has valid numeric lng`, typeof cru.lng === 'number' && !Number.isNaN(cru.lng));
    assertCheck(`[${regionId} -> Cru ${cru.id}] lat ${cru.lat} within bounds margin`, cru.lat >= south - 0.75 && cru.lat <= north + 0.75);
    assertCheck(`[${regionId} -> Cru ${cru.id}] lng ${cru.lng} within bounds margin`, cru.lng >= west - 0.75 && cru.lng <= east + 0.75);
  }

  console.log(`  ✓ Verified bounding boxes and coordinates for ${regionId}`);
}

// ----------------------------------------------------------------------------
// SUITE 2: NON-ASCII DIACRITIC RESOLUTION & MULTILINGUAL ALIASES
// ----------------------------------------------------------------------------
console.log('\n━━━ SUITE 2: Non-ASCII Diacritic Resolution & Multilingual Aliases ━━━');

const diacriticTestCases = [
  // French diacritics (é, è, ê, ë, à, â, î, ï, ô, ù, û, ü, ç, ÿ)
  { query: 'Côte de Nuits', expected: 'burgundy' },
  { query: 'cote de nuits', expected: 'burgundy' },
  { query: 'COTE DE NUITS', expected: 'burgundy' },
  { query: 'Côte de Beaune', expected: 'burgundy' },
  { query: 'Vosne-Romanée', expected: 'burgundy' },
  { query: 'vosne-romanee', expected: 'burgundy' },
  { query: 'Gevrey-Chambertin', expected: 'burgundy' },
  { query: 'gevrey-chambertin', expected: 'burgundy' },
  { query: 'Chambolle-Musigny', expected: 'burgundy' },
  { query: 'chambolle-musigny', expected: 'burgundy' },
  { query: 'Bâtard-Montrachet', expected: 'burgundy' },
  { query: 'batard-montrachet', expected: 'burgundy' },
  { query: 'Aÿ', expected: 'champagne' },
  { query: 'ay', expected: 'champagne' },
  { query: 'AY', expected: 'champagne' },
  { query: 'Coteaux Champenois', expected: 'champagne' },
  { query: 'Rosé des Riceys', expected: 'champagne' },
  { query: 'rose des riceys', expected: 'champagne' },
  { query: 'Saint-Émilion', expected: 'bordeaux' },
  { query: 'saint-emilion', expected: 'bordeaux' },
  { query: 'Châteauneuf-du-Pape', expected: 'rhone' },
  { query: 'chateauneuf-du-pape', expected: 'rhone' },
  { query: 'Côte-Rôtie', expected: 'rhone' },
  { query: 'cote-rotie', expected: 'rhone' },
  { query: 'Hermitage', expected: 'rhone' },
  { query: 'Savennières', expected: 'loire-valley' },
  { query: 'savennieres', expected: 'loire-valley' },
  { query: 'Pouilly-Fumé', expected: 'loire-valley' },
  { query: 'pouilly-fume', expected: 'loire-valley' },
  // German umlauts (ä, ö, ü, ß)
  { query: 'Rheingau', expected: 'germany-mosel' },
  { query: 'Bernkastel-Kues', expected: 'germany-mosel' },
  { query: 'Bernkasteler Doctor', expected: 'germany-mosel' },
  { query: 'Scharzhofberg', expected: 'germany-mosel' },
  { query: 'Ürziger Würzgarten', expected: 'germany-mosel' },
  { query: 'Urziger Wurzgarten', expected: 'germany-mosel' },
  { query: 'Wehlener Sonnenuhr', expected: 'germany-mosel' },
  // Spanish diacritics (ñ, í, ó, é, ú)
  { query: 'Viñedo Singular Rioja Alta', expected: 'spain-rioja' },
  { query: 'vinedo singular rioja alta', expected: 'spain-rioja' },
  { query: 'Rioja', expected: 'spain-rioja' },
  { query: 'rioja', expected: 'spain-rioja' },
  { query: 'Ribera del Duero', expected: 'spain-rioja' },
  { query: 'ribera del duero', expected: 'spain-rioja' },
  { query: 'Priorat', expected: 'spain-rioja' },
  { query: 'priorat', expected: 'spain-rioja' },
  // Italian accents
  { query: 'Barolo', expected: 'piedmont' },
  { query: 'Piemonte', expected: 'piedmont' },
  { query: 'Toscana', expected: 'tuscany' },
  { query: 'Brunello di Montalcino', expected: 'tuscany' },
  { query: 'Valpolicella Ripasso', expected: 'italy-other' },
  { query: 'Amarone della Valpolicella', expected: 'italy-other' },
  // Japanese macrons (ū, ō)
  { query: 'Chūbu', expected: 'japan-chubu' },
  { query: 'chubu', expected: 'japan-chubu' },
  { query: 'Kōshū', expected: 'japan-chubu' },
  { query: 'koshu', expected: 'japan-chubu' },
  { query: 'Katsunuma', expected: 'japan-chubu' },
  { query: 'Yamanashi', expected: 'japan-chubu' },
  { query: 'Nagano', expected: 'japan-chubu' }
];

for (const { query, expected } of diacriticTestCases) {
  const result = findWineRegion(query);
  assertCheck(`Diacritic query "${query}" resolves to "${expected}"`, result && result.id === expected,
    `Query "${query}" resolved to "${result?.id}", expected "${expected}"`
  );
}
console.log(`  ✓ Successfully verified ${diacriticTestCases.length} multilingual diacritic test queries`);

// ----------------------------------------------------------------------------
// SUITE 3: RELATIONAL FOREIGN KEY INTEGRITY (CRUS & GEOJSON ↔ SUBREGIONS)
// ----------------------------------------------------------------------------
console.log('\n━━━ SUITE 3: Relational Foreign Key Integrity ━━━');

let totalCrusChecked = 0;
let totalGeoJSONFeaturesChecked = 0;

for (const regionId of REGION_IDS) {
  const region = WINE_REGIONS[regionId];
  const subregionMap = new Map(region.subRegions.map(s => [s.id, s]));
  const subregionIds = new Set(region.subRegions.map(s => s.id));

  // 1. Check all Crus point to valid subregions
  const crus = region.grandCrus || [];
  for (const cru of crus) {
    totalCrusChecked++;
    const fk = cru.subregionId;
    assertCheck(`Cru "${cru.id}" in "${regionId}" has defined subregionId`, Boolean(fk));
    assertCheck(`Cru "${cru.id}" in "${regionId}" subregionId "${fk}" matches valid subregion`,
      subregionIds.has(fk),
      `Cru "${cru.name}" (${cru.id}) in ${regionId} has invalid subregionId "${fk}". Valid IDs: [${Array.from(subregionIds).join(', ')}]`
    );
  }

  // 2. Check all GeoJSON features in WINE_REGION_BOUNDARIES point to valid subregions
  const boundaryFC = WINE_REGION_BOUNDARIES[regionId];
  assertCheck(`GeoJSON FeatureCollection exists for ${regionId}`, Boolean(boundaryFC));
  assertCheck(`GeoJSON for ${regionId} is FeatureCollection`, boundaryFC.type === 'FeatureCollection');
  
  for (const feat of boundaryFC.features) {
    totalGeoJSONFeaturesChecked++;
    const featId = feat.id || feat.properties?.id;
    const parentSubId = feat.properties?.parentSubregionId || feat.properties?.subregionId;
    assertCheck(`GeoJSON feature has id in ${regionId}`, Boolean(featId));
    assertCheck(`GeoJSON feature "${featId}" matches a valid subregion in ${regionId}`,
      subregionIds.has(featId) || (parentSubId && subregionIds.has(parentSubId)) || Array.from(subregionIds).some(sid => featId.includes(sid) || sid.includes(featId)),
      `GeoJSON feature "${featId}" in ${regionId} does not match any subregion in [${Array.from(subregionIds).join(', ')}]`
    );
  }

  console.log(`  ✓ Verified ${crus.length} crus FKs and ${boundaryFC.features.length} GeoJSON feature IDs for ${regionId}`);
}

console.log(`  → Total Crus Verified: ${totalCrusChecked}`);
console.log(`  → Total GeoJSON Features Verified: ${totalGeoJSONFeaturesChecked}`);

// ----------------------------------------------------------------------------
// SUITE 4: RFC 7946 LINEAR RING CLOSURE & GEOJSON TOPOLOGY
// ----------------------------------------------------------------------------
console.log('\n━━━ SUITE 4: RFC 7946 Linear Ring Closure & GeoJSON Coordinate Topology ━━━');

for (const regionId of REGION_IDS) {
  const boundaryFC = WINE_REGION_BOUNDARIES[regionId];
  const expHemi = EXPECTED_HEMISPHERES[regionId];

  for (const feat of boundaryFC.features) {
    assertCheck(`Feature in ${regionId} has geometry`, Boolean(feat.geometry));
    const gType = feat.geometry.type;
    assertCheck(`Geometry type is Polygon or MultiPolygon in ${regionId} (${feat.id})`, ['Polygon', 'MultiPolygon'].includes(gType));

    const polygonList = gType === 'Polygon' ? [feat.geometry.coordinates] : feat.geometry.coordinates;

    for (let pIdx = 0; pIdx < polygonList.length; pIdx++) {
      const rings = polygonList[pIdx];
      assertCheck(`Polygon #${pIdx} in ${regionId} (${feat.id}) has at least 1 ring`, Array.isArray(rings) && rings.length >= 1);

      for (let rIdx = 0; rIdx < rings.length; rIdx++) {
        const ring = rings[rIdx];
        assertCheck(`Ring #${rIdx} in ${regionId} (${feat.id}) has >= 4 vertices`, Array.isArray(ring) && ring.length >= 4);

        const first = ring[0];
        const last = ring[ring.length - 1];

        // RFC 7946 Section 3.1.6: First and last coordinates must be identical
        assertCheck(`RFC 7946 closure on ring #${rIdx} in ${regionId} (${feat.id})`,
          first[0] === last[0] && first[1] === last[1],
          `Ring not closed: first=[${first.join(', ')}], last=[${last.join(', ')}]`
        );

        // Verify coordinate ordering is strictly [longitude, latitude]
        for (let vIdx = 0; vIdx < ring.length; vIdx++) {
          const [lng, lat] = ring[vIdx];
          assertCheck(`Vertex #${vIdx} in ${regionId} (${feat.id}) has numeric lng`, typeof lng === 'number' && !Number.isNaN(lng));
          assertCheck(`Vertex #${vIdx} in ${regionId} (${feat.id}) has numeric lat`, typeof lat === 'number' && !Number.isNaN(lat));
          
          // Coordinate bounds
          assertCheck(`Vertex lng ${lng} in [-180, 180] in ${regionId} (${feat.id})`, lng >= -180 && lng <= 180);
          assertCheck(`Vertex lat ${lat} in [-90, 90] in ${regionId} (${feat.id})`, lat >= -90 && lat <= 90);

          // Verify longitude is NOT swapped with latitude by checking against expected hemisphere bounds
          assertCheck(`Vertex lng ${lng} within hemisphere lng bounds for ${regionId} (${feat.id})`,
            lng >= expHemi.lngMin - 2.5 && lng <= expHemi.lngMax + 2.5,
            `Longitude ${lng} outside expected range [${expHemi.lngMin - 2.5}, ${expHemi.lngMax + 2.5}] for ${regionId}. Coordinate swap suspected!`
          );
          assertCheck(`Vertex lat ${lat} within hemisphere lat bounds for ${regionId} (${feat.id})`,
            lat >= expHemi.latMin - 2.5 && lat <= expHemi.latMax + 2.5,
            `Latitude ${lat} outside expected range [${expHemi.latMin - 2.5}, ${expHemi.latMax + 2.5}] for ${regionId}. Coordinate swap suspected!`
          );
        }
      }
    }
  }
  console.log(`  ✓ Verified RFC 7946 linear rings and [lng, lat] coordinate ordering for ${regionId}`);
}

// ----------------------------------------------------------------------------
// SUITE 5: ADVERSARIAL FUZZY QUERY MATCHING & COLLISION RESISTANCE
// ----------------------------------------------------------------------------
console.log('\n━━━ SUITE 5: Adversarial Fuzzy Query Matching & Collision Resistance ━━━');

const mutatedQueryCases = [
  // Case insensitivity & leading/trailing whitespace variations
  { query: '  côte de nuits  ', country: '', expected: 'burgundy' },
  { query: '  CHAMPAGNE  ', country: 'France', expected: 'champagne' },
  { query: 'champagne', country: '  FRANCE  ', expected: 'champagne' },
  { query: 'napa-valley', country: 'USA', expected: 'california' },
  { query: '  NAPA VALLEY  ', country: '', expected: 'california' },
  { query: '  barolo  ', country: 'ITALY', expected: 'piedmont' },
  { query: 'chianti-classico', country: 'Italy', expected: 'tuscany' },
  { query: 'willamette valley', country: '', expected: 'oregon' },
  { query: 'barossa valley', country: '', expected: 'australia' },
  { query: 'puente alto', country: '', expected: 'chile-maipo' }
];

for (const { query, country, expected } of mutatedQueryCases) {
  const res = findWineRegion(query, country);
  assertCheck(`Mutated query "${query}" (country: "${country}") resolves to "${expected}"`, res && res.id === expected,
    `Query "${query}" resolved to "${res?.id}", expected "${expected}"`
  );
}

// Substring Collision Testing
// e.g. "Rio" should not match priorat or champagne or napa; searching specific subregions must not collide
const collisionTests = [
  { query: 'Pauillac', expected: 'bordeaux' },
  { query: 'Margaux', expected: 'bordeaux' },
  { query: 'Pomerol', expected: 'bordeaux' },
  { query: 'Sauternes', expected: 'bordeaux' },
  { query: 'Ambonnay', expected: 'champagne' },
  { query: 'Bouzy', expected: 'champagne' },
  { query: 'Avize', expected: 'champagne' },
  { query: 'Cramant', expected: 'champagne' },
  { query: 'Gevrey-Chambertin', expected: 'burgundy' },
  { query: 'Chambolle-Musigny', expected: 'burgundy' },
  { query: 'Vosne-Romanee', expected: 'burgundy' },
  { query: 'Chablis', expected: 'burgundy' },
  { query: 'Cornas', expected: 'rhone' },
  { query: 'Hermitage', expected: 'rhone' },
  { query: 'Gigondas', expected: 'rhone' },
  { query: 'Sancerre', expected: 'loire-valley' },
  { query: 'Pouilly-Fume', expected: 'loire-valley' },
  { query: 'Chinon', expected: 'loire-valley' },
  { query: 'Barolo', expected: 'piedmont' },
  { query: 'Barbaresco', expected: 'piedmont' },
  { query: 'Chianti Classico', expected: 'tuscany' },
  { query: 'Brunello di Montalcino', expected: 'tuscany' },
  { query: 'Bolgheri', expected: 'tuscany' },
  { query: 'Oakville', expected: 'california' },
  { query: 'Rutherford', expected: 'california' },
  { query: 'Dundee Hills', expected: 'oregon' },
  { query: 'Eola-Amity Hills', expected: 'oregon' },
  { query: 'Ribbon Ridge', expected: 'oregon' },
  { query: 'Etna', expected: 'italy-other' },
  { query: 'Valpolicella', expected: 'italy-other' },
  { query: 'Valtellina', expected: 'italy-other' },
  { query: 'Taurasi', expected: 'italy-other' },
  { query: 'Koshu', expected: 'japan-chubu' },
  { query: 'Yamanashi', expected: 'japan-chubu' },
  { query: 'Nagano', expected: 'japan-chubu' },
  { query: 'Bernkastel', expected: 'germany-mosel' },
  { query: 'Rheingau', expected: 'germany-mosel' },
  { query: 'Rioja', expected: 'spain-rioja' },
  { query: 'Priorat', expected: 'spain-rioja' },
  { query: 'Puente Alto', expected: 'chile-maipo' },
  { query: 'Colchagua', expected: 'chile-maipo' },
  { query: 'Barossa Valley', expected: 'australia' },
  { query: 'Margaret River', expected: 'australia' },
  { query: 'Eden Valley', expected: 'australia' }
];

for (const { query, expected } of collisionTests) {
  const res = findWineRegion(query);
  assertCheck(`Canonical query "${query}" accurately resolves to "${expected}"`, res && res.id === expected,
    `Query "${query}" resolved to "${res?.id}", expected "${expected}"`
  );
}

// Defensive Type Safety & Edge Cases (ensure zero crashes)
const defensiveEdgeCases = [
  null,
  undefined,
  '',
  '   ',
  0,
  42,
  {},
  [],
  true,
  false,
  '__proto__',
  'constructor',
  'toString',
  'valueOf',
  'hasOwnProperty',
  '<script>alert("xss")</script>',
  'SELECT * FROM regions WHERE 1=1;',
  'DROP TABLE wines; --',
  '.*+?^${}()|[]\\',
  '🍷🍇🍾'
];

for (const malformedInput of defensiveEdgeCases) {
  try {
    const res = findWineRegion(malformedInput);
    // Malformed inputs should either return null or safe fallback object without crashing
    assertCheck(`findWineRegion handles input ${JSON.stringify(malformedInput)} safely`, true);
  } catch (err) {
    assertCheck(`findWineRegion crashed on input ${JSON.stringify(malformedInput)}: ${err.message}`, false);
  }
}
// ----------------------------------------------------------------------------
// SUITE 5.5: HIGH-THROUGHPUT RANDOMIZED MUTATION FUZZING HARNESS (5,000 RUNS)
// ----------------------------------------------------------------------------
console.log('\n━━━ SUITE 5.5: High-Throughput Randomized Fuzzing Harness (5,000 Runs) ━━━');

const FUZZ_SEEDS = [
  'Champagne', 'Burgundy', 'Bordeaux', 'Rhone', 'Loire', 'Piedmont', 'Tuscany',
  'California', 'Oregon', 'Alsace', 'Corsica', 'Italy', 'Japan', 'Germany',
  'Spain', 'Chile', 'Australia', 'Barolo', 'Chianti', 'Napa', 'Sancerre',
  'Pauillac', 'Vosne-Romanee', 'Mosel', 'Rioja', 'Maipo', 'Barossa', 'Koshu'
];

const startTime = Date.now();
for (let i = 0; i < 5000; i++) {
  const seed = FUZZ_SEEDS[i % FUZZ_SEEDS.length];
  let mutated = seed;

  // Apply random mutation operations
  const mutationType = i % 5;
  if (mutationType === 0) {
    // Random casing
    mutated = mutated.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
  } else if (mutationType === 1) {
    // Punctuation injection
    mutated = `--- ${mutated} !!! (AOC/DOCG) ---`;
  } else if (mutationType === 2) {
    // Unicode & diacritic noise
    mutated = `${mutated} \u0301\u0300\u0302 🍷`;
  } else if (mutationType === 3) {
    // Code / SQL injection prefix
    mutated = `admin' OR '${mutated}'='${mutated}`;
  } else {
    // Whitespace / newline padding
    mutated = `\t\n  ${mutated}  \r\n`;
  }

  try {
    const res = findWineRegion(mutated);
    assertCheck(`Fuzzer iteration #${i} safely executed`, true);
  } catch (err) {
    assertCheck(`Fuzzer crashed on iteration #${i} with input "${mutated}": ${err.message}`, false);
  }
}
const duration = Date.now() - startTime;
console.log(`  ✓ 5,000 randomized mutated queries executed with 0 errors in ${duration}ms (${(duration / 5000 * 1000).toFixed(2)} µs/query)`);

// ----------------------------------------------------------------------------
// SUITE 6: SOMMELIER GASTRONOMY STRICT SCHEMA & SERVICE SPECS
// ----------------------------------------------------------------------------
console.log('\n━━━ SUITE 6: Sommelier Gastronomy Strict Schema & Service Specs ━━━');

const VALID_WINE_TYPES = new Set(['Red', 'White', 'Sparkling', 'Rosé']);
let totalPairingsChecked = 0;

for (const regionId of REGION_IDS) {
  const region = WINE_REGIONS[regionId];
  const pairings = region.foodPairings;
  assertCheck(`[${regionId}] has foodPairings array`, Array.isArray(pairings));
  assertCheck(`[${regionId}] foodPairings count between 5 and 10`, pairings.length >= 5 && pairings.length <= 10,
    `Region ${regionId} has ${pairings.length} pairings (must be between 5 and 10)`
  );

  for (let idx = 0; idx < pairings.length; idx++) {
    totalPairingsChecked++;
    const p = pairings[idx];
    const prefix = `[${regionId} -> Pairing #${idx + 1}: ${p.dish}]`;

    assertCheck(`${prefix} has category string`, typeof p.category === 'string' && p.category.trim().length > 0);
    assertCheck(`${prefix} wineType "${p.wineType}" is strictly in {'Red', 'White', 'Sparkling', 'Rosé'}`,
      VALID_WINE_TYPES.has(p.wineType),
      `Invalid wineType "${p.wineType}". Must be one of Red, White, Sparkling, Rosé`
    );
    assertCheck(`${prefix} has targetWine string`, typeof p.targetWine === 'string' && p.targetWine.trim().length > 0);
    assertCheck(`${prefix} has dish string`, typeof p.dish === 'string' && p.dish.trim().length > 0);
    
    const note = p.note || p.whyItWorks || p.rationale;
    assertCheck(`${prefix} has substantial note (>15 chars)`, typeof note === 'string' && note.trim().length > 15);
    assertCheck(`${prefix} has glassware string`, typeof p.glassware === 'string' && p.glassware.trim().length > 0);
    
    // Serving temperature must contain BOTH °C and °F
    assertCheck(`${prefix} servingTemp contains both °C and °F`,
      typeof p.servingTemp === 'string' && p.servingTemp.includes('°C') && p.servingTemp.includes('°F'),
      `servingTemp "${p.servingTemp}" does not contain both °C and °F`
    );

    assertCheck(`${prefix} has decanting instruction`, typeof p.decanting === 'string' && p.decanting.trim().length > 0);
  }
  console.log(`  ✓ Verified ${pairings.length} sommelier food pairings for ${regionId}`);
}
console.log(`  → Total Food Pairings Verified: ${totalPairingsChecked}`);

// ----------------------------------------------------------------------------
// SUITE 7: STRATIGRAPHY, AMPELOGRAPHY & CLASSIFICATION PYRAMID
// ----------------------------------------------------------------------------
console.log('\n━━━ SUITE 7: Stratigraphy, Ampelography & Classification Pyramid ━━━');

for (const regionId of REGION_IDS) {
  const region = WINE_REGIONS[regionId];
  const tr = region.technicalRegulations;
  assertCheck(`[${regionId}] has technicalRegulations object`, Boolean(tr) && typeof tr === 'object');

  // Geology
  assertCheck(`[${regionId}] has geology object`, Boolean(tr.geology) && typeof tr.geology === 'object');
  assertCheck(`[${regionId}] geology has formations array >= 1`, Array.isArray(tr.geology.formations) && tr.geology.formations.length >= 1);

  // Grapes
  assertCheck(`[${regionId}] has grapes object`, Boolean(tr.grapes) && typeof tr.grapes === 'object');
  assertCheck(`[${regionId}] grapes has major array >= 1`, Array.isArray(tr.grapes.major) && tr.grapes.major.length >= 1);

  // Classification
  assertCheck(`[${regionId}] has classification object`, Boolean(tr.classification) && typeof tr.classification === 'object');
  const tiers = tr.classification.pyramid || tr.classification.tiers;
  assertCheck(`[${regionId}] classification has pyramid or tiers array >= 1`, Array.isArray(tiers) && tiers.length >= 1);

  // Prestige bottlings
  const prestige = region.prestigeCuvees || region.prestigeEstates || region.prestigeMonopoles;
  assertCheck(`[${regionId}] has prestige collection with >= 3 items`, Array.isArray(prestige) && prestige.length >= 3);

  // Iconic producers
  const iconic = region.iconicDomaines || region.iconicGrowers || region.iconicProducers || region.iconicChateaux;
  assertCheck(`[${regionId}] has iconic producers with >= 3 items`, Array.isArray(iconic) && iconic.length >= 3);

  console.log(`  ✓ Verified technical regulations, prestige, and iconic producers for ${regionId}`);
}

// ----------------------------------------------------------------------------
// FINAL SUMMARY
// ----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`📊 DEEP ADVERSARIAL VALIDATION SUMMARY`);
console.log(`   Total Assertions Executed : ${totalAssertions}`);
console.log(`   Passed Assertions         : ${passedAssertions}`);
console.log(`   Failed Assertions         : 0`);
console.log(`   Success Rate              : 100.00%`);
console.log('================================================================');
console.log('🎉 ALL 17 WINE REGIONS PASS DEEP ADVERSARIAL STRESS TESTING WITH ZERO DEFECTS!');
console.log('================================================================\n');
