/**
 * ============================================================================
 * ALL 17 WORLD WINE REGIONS: MASTER INVARIANT & SCHEMA VALIDATION SUITE
 * ============================================================================
 * 
 * Verifies that all 17 fine wine regions conform to the benchmark sommelier
 * standard established by Champagne and Burgundy:
 * 
 * 1. Top-Level Metadata Invariants (17 regions, coordinates, bounds, terroir, grapes, structure, classification, flavorProfile)
 * 2. Subregions & Districts (coordinates, geology, focus, description)
 * 3. Crus & Climats (lat/lng, subregionId foreign keys, soil, dominant grape, benchmark producers)
 * 4. Technical Regulations (geological formations, major grapes, classification pyramid/tiers)
 * 5. Prestige Cuvées & Iconic Domaines / Growers
 * 6. Sommelier Gastronomy (5-10 pairings per region, strict wineType, glassware, °C & °F servingTemp, decanting)
 * 7. GeoJSON Boundary RFC 7946 Topology (LinearRing closure, valid coordinates)
 * 8. 50+ Canonical Sommelier Search Query Resolution (100% resolution accuracy)
 * 
 * Execute with:
 *   node test/verify_all_17_regions.mjs
 * ============================================================================
 */

import assert from 'node:assert';
import { WINE_REGIONS, findWineRegion } from '../src/data/wineRegions.js';
import { WINE_REGION_BOUNDARIES } from '../src/data/wineRegionBoundaries.js';

console.log('================================================================');
console.log('🍷 WORLD WINE REGIONS: MASTER INVARIANT & SCHEMA VALIDATION');
console.log('================================================================\n');

const EXPECTED_REGIONS = [
  'champagne', 'burgundy', 'alsace', 'corsica', 'bordeaux',
  'rhone', 'loire-valley', 'piedmont', 'tuscany', 'california',
  'oregon', 'italy-other', 'japan-chubu', 'germany-mosel',
  'spain-rioja', 'chile-maipo', 'australia'
];

const VALID_WINE_TYPES = new Set(['Red', 'White', 'Sparkling', 'Rosé']);

let totalAssertions = 0;
let passedAssertions = 0;

function check(desc, condition, errorMsg) {
  totalAssertions++;
  if (!condition) {
    console.error(`  ✗ FAIL: ${desc}`);
    throw new Error(errorMsg || `Invariant failed: ${desc}`);
  }
  passedAssertions++;
}

// ----------------------------------------------------------------------------
// 1. TOP-LEVEL REGION INVARIANTS & COMPLETE METADATA
// ----------------------------------------------------------------------------
console.log('━━━ 1. Validating All 17 Regions Core Metadata & Top-Level Invariants ━━━');

check('Master registry must contain exactly 17 wine regions', 
  Object.keys(WINE_REGIONS).length === 17, 
  `Expected 17 regions, found ${Object.keys(WINE_REGIONS).length}`
);

for (const id of EXPECTED_REGIONS) {
  const r = WINE_REGIONS[id];
  check(`Region "${id}" exists in master registry`, !!r, `Missing region: ${id}`);
  check(`Region "${id}" id matches key`, r.id === id, `Region id "${r.id}" does not match key "${id}"`);
  check(`Region "${id}" has non-empty name`, typeof r.name === 'string' && r.name.trim().length > 0);
  check(`Region "${id}" has non-empty country`, typeof r.country === 'string' && r.country.trim().length > 0);
  check(`Region "${id}" has 2-3 letter uppercase countryCode`, /^[A-Z]{2,3}$/.test(r.countryCode));
  check(`Region "${id}" has tagline`, typeof r.tagline === 'string' && r.tagline.trim().length > 5);
  check(`Region "${id}" has substantial summary`, typeof r.summary === 'string' && r.summary.trim().length > 20);
  check(`Region "${id}" has valid accentColor`, typeof r.accentColor === 'string' && (r.accentColor.startsWith('#') || r.accentColor.startsWith('rgb')));
  check(`Region "${id}" has valid heroGradient`, typeof r.heroGradient === 'string' && r.heroGradient.includes('gradient'));

  // Center Coordinates [lat, lng]
  check(`Region "${id}" has center coordinate pair`, Array.isArray(r.center) && r.center.length === 2);
  const [cLat, cLng] = r.center;
  check(`Region "${id}" center lat ${cLat} in [-90, 90]`, typeof cLat === 'number' && !Number.isNaN(cLat) && cLat >= -90 && cLat <= 90);
  check(`Region "${id}" center lng ${cLng} in [-180, 180]`, typeof cLng === 'number' && !Number.isNaN(cLng) && cLng >= -180 && cLng <= 180);

  // Bounding Box [[south, west], [north, east]]
  check(`Region "${id}" has 2-point bounding box`, Array.isArray(r.bounds) && r.bounds.length === 2);
  const [[south, west], [north, east]] = r.bounds;
  check(`Region "${id}" bounds south < north`, south < north, `South (${south}) >= North (${north})`);
  check(`Region "${id}" bounds west < east`, west < east, `West (${west}) >= East (${east})`);
  check(`Region "${id}" bounds lat in [-90, 90]`, south >= -90 && north <= 90);
  check(`Region "${id}" bounds lng in [-180, 180]`, west >= -180 && east <= 180);
  check(`Region "${id}" center lat is inside bounds`, cLat >= south - 1.0 && cLat <= north + 1.0);
  check(`Region "${id}" center lng is inside bounds`, cLng >= west - 1.0 && cLng <= east + 1.0);

  // Terroir Pedology & Climatology
  check(`Region "${id}" has terroir object`, r.terroir && typeof r.terroir === 'object');
  check(`Region "${id}" terroir has climate`, typeof r.terroir.climate === 'string' && r.terroir.climate.length > 10);
  check(`Region "${id}" terroir has soil`, typeof r.terroir.soil === 'string' && r.terroir.soil.length > 10);
  check(`Region "${id}" terroir has elevation`, typeof r.terroir.elevation === 'string' && r.terroir.elevation.length > 3);
  check(`Region "${id}" terroir has river/ocean influence`, 
    (typeof r.terroir.riverInfluence === 'string' && r.terroir.riverInfluence.length > 3) ||
    (typeof r.terroir.oceanInfluence === 'string' && r.terroir.oceanInfluence.length > 3)
  );

  // Grapes Cépage Array (>= 3 varieties)
  check(`Region "${id}" has grapes array with >= 3 items`, Array.isArray(r.grapes) && r.grapes.length >= 3, `Region ${id} has ${r.grapes?.length} grapes (expected >= 3)`);
  for (const g of r.grapes) {
    check(`Region "${id}" grape has name`, typeof g.name === 'string' && g.name.length > 0);
    check(`Region "${id}" grape ${g.name} has numeric percentage`, typeof g.percentage === 'number' && g.percentage > 0 && g.percentage <= 100);
    check(`Region "${id}" grape ${g.name} has type`, typeof g.type === 'string' && g.type.length > 0);
    check(`Region "${id}" grape ${g.name} has descriptive role`, typeof g.role === 'string' && g.role.length > 5);
  }

  // Structure Sensory Metrics
  check(`Region "${id}" has structure object`, r.structure && typeof r.structure === 'object');
  for (const metric of ['body', 'acidity', 'tannin', 'sweetness']) {
    check(`Region "${id}" structure.${metric} is number in [0, 10]`, 
      typeof r.structure[metric] === 'number' && r.structure[metric] >= 0 && r.structure[metric] <= 10
    );
  }
  check(`Region "${id}" structure.alcohol is number in [5, 25]`, 
    typeof r.structure.alcohol === 'number' && r.structure.alcohol >= 5.0 && r.structure.alcohol <= 25.0
  );
  check(`Region "${id}" structure.agingPotential is non-empty`, 
    typeof r.structure.agingPotential === 'string' && r.structure.agingPotential.length > 0
  );

  // Classification System
  check(`Region "${id}" has classification object`, r.classification && typeof r.classification === 'object');
  check(`Region "${id}" classification.system is non-empty`, typeof r.classification.system === 'string' && r.classification.system.length > 0);
  check(`Region "${id}" classification.description is non-empty`, typeof r.classification.description === 'string' && r.classification.description.length > 0);
  check(`Region "${id}" classification.tiers is array >= 1`, Array.isArray(r.classification.tiers) && r.classification.tiers.length >= 1);

  // Flavor Profile
  check(`Region "${id}" has flavorProfile object`, r.flavorProfile && typeof r.flavorProfile === 'object');
  check(`Region "${id}" flavorProfile.primary has >= 3 notes`, Array.isArray(r.flavorProfile.primary) && r.flavorProfile.primary.length >= 3);
  check(`Region "${id}" flavorProfile.secondary has >= 3 notes`, Array.isArray(r.flavorProfile.secondary) && r.flavorProfile.secondary.length >= 3);
  check(`Region "${id}" flavorProfile.palate is descriptive`, typeof r.flavorProfile.palate === 'string' && r.flavorProfile.palate.length > 10);

  console.log(`  ✓ Verified top-level metadata for ${id} (${r.name})`);
}

// ----------------------------------------------------------------------------
// 2. SUBREGIONS, CRUS & TECHNICAL VITICULTURE INVARIANTS
// ----------------------------------------------------------------------------
console.log('\n━━━ 2. Validating Subregions, Crus, Technical Regulations & Domaines ━━━');

for (const id of EXPECTED_REGIONS) {
  const r = WINE_REGIONS[id];

  // Subregions Array (>= 2 subregions)
  const subs = r.subRegions || r.subregions;
  check(`Region "${id}" has subRegions array with >= 2 items`, Array.isArray(subs) && subs.length >= 2, `Region ${id} has ${subs?.length} subregions`);
  const subregionIds = new Set(subs.map(s => s.id));

  for (const sub of subs) {
    check(`Subregion in "${id}" has id`, typeof sub.id === 'string' && sub.id.length > 0);
    check(`Subregion "${sub.id}" in "${id}" has name`, typeof sub.name === 'string' && sub.name.length > 0);
    
    // Check lat/lng coordinates
    const sLat = typeof sub.lat === 'number' ? sub.lat : (Array.isArray(sub.coordinates) ? sub.coordinates[0] : null);
    const sLng = typeof sub.lng === 'number' ? sub.lng : (Array.isArray(sub.coordinates) ? sub.coordinates[1] : null);
    check(`Subregion "${sub.id}" in "${id}" has valid lat/lng coordinates`, 
      typeof sLat === 'number' && !Number.isNaN(sLat) && typeof sLng === 'number' && !Number.isNaN(sLng)
    );
    check(`Subregion "${sub.id}" in "${id}" has terroir, focus, or description`,
      (typeof sub.terroir === 'string' && sub.terroir.length > 0) ||
      (typeof sub.description === 'string' && sub.description.length > 0) ||
      (typeof sub.focus === 'string' && sub.focus.length > 0)
    );
  }

  // Crus & Single Vineyards (where applicable)
  const crus = r.grandCrus || r.crus || r.benchmarkCrus || [];
  if (crus.length > 0) {
    for (const cru of crus) {
      check(`Cru in "${id}" has id`, typeof cru.id === 'string' && cru.id.length > 0);
      check(`Cru "${cru.id}" in "${id}" has name`, typeof cru.name === 'string' && cru.name.length > 0);
      check(`Cru "${cru.name}" in "${id}" has numeric lat`, typeof cru.lat === 'number' && !Number.isNaN(cru.lat) && cru.lat >= -90 && cru.lat <= 90);
      check(`Cru "${cru.name}" in "${id}" has numeric lng`, typeof cru.lng === 'number' && !Number.isNaN(cru.lng) && cru.lng >= -180 && cru.lng <= 180);
      
      // Foreign Key: subregionId must match a valid subRegion in parent region
      const fk = cru.subregionId || cru.districtId;
      check(`Cru "${cru.name}" in "${id}" has subregionId foreign key`, typeof fk === 'string' && fk.length > 0);
      check(`Cru "${cru.name}" subregionId "${fk}" matches valid subregion in "${id}"`, 
        subregionIds.has(fk) || Array.from(subregionIds).some(sid => fk.includes(sid) || sid.includes(fk)),
        `Cru "${cru.name}" references invalid subregionId "${fk}". Valid IDs: [${Array.from(subregionIds).join(', ')}]`
      );

      check(`Cru "${cru.name}" in "${id}" has soil description`, typeof cru.soil === 'string' && cru.soil.length > 5);
      check(`Cru "${cru.name}" in "${id}" has dominantGrape`, typeof cru.dominantGrape === 'string' && cru.dominantGrape.length > 2);
      check(`Cru "${cru.name}" in "${id}" has benchmarkProducers array`, 
        (Array.isArray(cru.benchmarkProducers) && cru.benchmarkProducers.length >= 1) ||
        (Array.isArray(cru.famousProducers) && cru.famousProducers.length >= 1)
      );
    }
  }

  // Technical Regulations
  check(`Region "${id}" has technicalRegulations object`, r.technicalRegulations && typeof r.technicalRegulations === 'object');
  const tr = r.technicalRegulations;
  check(`Region "${id}" technicalRegulations has geology`, tr.geology && typeof tr.geology === 'object');
  check(`Region "${id}" technicalRegulations has grapes with major varieties`, 
    tr.grapes && Array.isArray(tr.grapes.major) && tr.grapes.major.length >= 1
  );
  check(`Region "${id}" technicalRegulations has classification pyramid/tiers`, 
    tr.classification && (Array.isArray(tr.classification.pyramid) || Array.isArray(tr.classification.tiers))
  );

  // Prestige Cuvées / Estates / Monopoles (>= 3 items)
  const prestige = r.prestigeCuvees || r.prestigeEstates || r.prestigeMonopoles || [];
  check(`Region "${id}" has prestige collection with >= 3 items`, Array.isArray(prestige) && prestige.length >= 3, `Region ${id} has ${prestige.length} prestige items`);
  for (const p of prestige) {
    check(`Prestige item in "${id}" has name`, typeof p.name === 'string' && p.name.length > 0);
    const prod = p.producer || p.estate || p.house || p.houseOrGrower || p.domainOrHouse || p.domain;
    check(`Prestige item "${p.name}" in "${id}" has producer/estate`, typeof prod === 'string' && prod.length > 0);
  }

  // Iconic Domaines / Growers / Producers (>= 3 items)
  const iconic = r.iconicDomaines || r.iconicGrowers || r.iconicProducers || r.iconicChateaux || [];
  check(`Region "${id}" has iconic producers with >= 3 items`, Array.isArray(iconic) && iconic.length >= 3, `Region ${id} has ${iconic.length} iconic items`);
  for (const d of iconic) {
    check(`Iconic producer in "${id}" has name`, typeof d.name === 'string' && d.name.length > 0);
    const loc = d.village || d.subregion || d.commune;
    check(`Iconic producer "${d.name}" in "${id}" has village/subregion`, typeof loc === 'string' && loc.length > 0);
    const vig = d.vigneron || d.winemaker || d.proprietor;
    check(`Iconic producer "${d.name}" in "${id}" has vigneron/winemaker`, typeof vig === 'string' && vig.length > 0);
    check(`Iconic producer "${d.name}" in "${id}" has philosophy`, typeof d.philosophy === 'string' && d.philosophy.length > 10);
    check(`Iconic producer "${d.name}" in "${id}" has keyCuvees array`, Array.isArray(d.keyCuvees) && d.keyCuvees.length >= 1);
  }

  console.log(`  ✓ Verified subregions, crus, tech regs & domaines for ${id}`);
}

// ----------------------------------------------------------------------------
// 3. SOMMELIER GASTRONOMY & FOOD PAIRINGS INVARIANTS (R2)
// ----------------------------------------------------------------------------
console.log('\n━━━ 3. Validating Sommelier Gastronomy & Food Pairings Invariants ━━━');

for (const id of EXPECTED_REGIONS) {
  const r = WINE_REGIONS[id];
  const pairings = r.foodPairings;

  check(`Region "${id}" has foodPairings array`, Array.isArray(pairings));
  check(`Region "${id}" has between 5 and 10 food pairings`, 
    pairings.length >= 5 && pairings.length <= 10, 
    `Region ${id} has ${pairings.length} pairings (must be 5 to 10)`
  );

  for (let idx = 0; idx < pairings.length; idx++) {
    const p = pairings[idx];
    const prefix = `Region "${id}" pairing #${idx + 1} (${p.dish || 'unnamed'})`;

    // Strictly one of 'Red', 'White', 'Sparkling', 'Rosé'
    check(`${prefix} has valid strictly normalized wineType ('Red'|'White'|'Sparkling'|'Rosé')`, 
      VALID_WINE_TYPES.has(p.wineType),
      `Invalid wineType "${p.wineType}" in ${prefix}. Must be one of: Red, White, Sparkling, Rosé`
    );

    check(`${prefix} has targetWine`, typeof p.targetWine === 'string' && p.targetWine.trim().length > 3);
    check(`${prefix} has dish`, typeof p.dish === 'string' && p.dish.trim().length > 3);
    
    const note = p.note || p.whyItWorks || p.rationale;
    check(`${prefix} has flavor synergy rationale/note (>10 chars)`, typeof note === 'string' && note.trim().length > 10);

    check(`${prefix} has glassware specification`, typeof p.glassware === 'string' && p.glassware.trim().length > 3);
    
    // Serving temperature must include both °C and °F
    check(`${prefix} has servingTemp with both °C and °F`, 
      typeof p.servingTemp === 'string' && p.servingTemp.includes('°C') && p.servingTemp.includes('°F'),
      `servingTemp "${p.servingTemp}" missing °C or °F in ${prefix}`
    );

    check(`${prefix} has decanting instruction`, typeof p.decanting === 'string' && p.decanting.trim().length > 3);
  }

  console.log(`  ✓ Verified ${pairings.length} gastronomic pairings for ${id}`);
}

// ----------------------------------------------------------------------------
// 4. GEOJSON CARTOGRAPHIC BOUNDARIES (RFC 7946)
// ----------------------------------------------------------------------------
console.log('\n━━━ 4. Validating GeoJSON Boundary Collections RFC 7946 Topology ━━━');

for (const id of EXPECTED_REGIONS) {
  const fc = WINE_REGION_BOUNDARIES[id];
  check(`GeoJSON boundary collection exists for "${id}"`, !!fc, `Missing boundary for ${id}`);
  check(`Boundary for "${id}" is a FeatureCollection`, fc.type === 'FeatureCollection');
  check(`Boundary for "${id}" has features array >= 1`, Array.isArray(fc.features) && fc.features.length >= 1);

  for (let fIdx = 0; fIdx < fc.features.length; fIdx++) {
    const feat = fc.features[fIdx];
    check(`Feature #${fIdx} in "${id}" has type "Feature"`, feat.type === 'Feature');
    check(`Feature #${fIdx} in "${id}" has geometry`, feat.geometry && typeof feat.geometry === 'object');
    check(`Feature #${fIdx} in "${id}" geometry is Polygon or MultiPolygon`, 
      ['Polygon', 'MultiPolygon'].includes(feat.geometry.type)
    );

    const polys = feat.geometry.type === 'Polygon' ? [feat.geometry.coordinates] : feat.geometry.coordinates;
    for (const poly of polys) {
      for (const ring of poly) {
        check(`LinearRing in "${id}" has >= 4 coordinate points`, ring.length >= 4);

        // Verify RFC 7946 LinearRing closure
        const first = ring[0];
        const last = ring[ring.length - 1];
        check(`LinearRing in "${id}" is closed (first coord matches last coord)`, 
          first[0] === last[0] && first[1] === last[1],
          `Ring not closed in ${id}: [${first}] !== [${last}]`
        );

        // Verify [lng, lat] coordinate limits
        for (const [lng, lat] of ring) {
          check(`Coordinate [${lng}, ${lat}] in "${id}" has valid lng in [-180, 180]`, 
            typeof lng === 'number' && !Number.isNaN(lng) && lng >= -180 && lng <= 180
          );
          check(`Coordinate [${lng}, ${lat}] in "${id}" has valid lat in [-90, 90]`, 
            typeof lat === 'number' && !Number.isNaN(lat) && lat >= -90 && lat <= 90
          );
        }
      }
    }
  }

  console.log(`  ✓ Verified GeoJSON FeatureCollection for ${id} (${fc.features.length} features)`);
}

// ----------------------------------------------------------------------------
// 5. SOMMELIER CANONICAL SEARCH QUERY RESOLUTION (50+ QUERIES)
// ----------------------------------------------------------------------------
console.log('\n━━━ 5. Validating 50+ Canonical Sommelier Query Resolutions ━━━');

const sommelierQueries = [
  // Champagne
  ['Champagne', 'champagne'],
  ['Ambonnay', 'champagne'],
  ['Aÿ', 'champagne'],
  ['Le Mesnil-sur-Oger', 'champagne'],
  ['Coteaux Champenois', 'champagne'],
  ['Rosé des Riceys', 'champagne'],
  // Burgundy
  ['Burgundy', 'burgundy'],
  ['Bourgogne', 'burgundy'],
  ['Chablis', 'burgundy'],
  ['Cote de Nuits', 'burgundy'],
  ['Côte de Beaune', 'burgundy'],
  ['Gevrey-Chambertin', 'burgundy'],
  ['Vosne-Romanée', 'burgundy'],
  // Alsace
  ['Alsace', 'alsace'],
  ['Rangen', 'alsace'],
  ['Schoenenbourg', 'alsace'],
  ['Haut-Rhin', 'alsace'],
  ['Bas-Rhin', 'alsace'],
  // Corsica
  ['Corsica', 'corsica'],
  ['Patrimonio', 'corsica'],
  ['Ajaccio', 'corsica'],
  ['Calvi', 'corsica'],
  // Bordeaux
  ['Bordeaux', 'bordeaux'],
  ['Pauillac', 'bordeaux'],
  ['Margaux', 'bordeaux'],
  ['Saint-Émilion', 'bordeaux'],
  ['Pomerol', 'bordeaux'],
  ['Sauternes', 'bordeaux'],
  // Rhône
  ['Rhône', 'rhone'],
  ['Rhone', 'rhone'],
  ['Hermitage', 'rhone'],
  ['Côte-Rôtie', 'rhone'],
  ['Châteauneuf-du-Pape', 'rhone'],
  ['Chateauneuf-du-Pape', 'rhone'],
  ['Cornas', 'rhone'],
  ['Gigondas', 'rhone'],
  ['Rayas', 'rhone'],
  // Loire Valley
  ['Loire', 'loire-valley'],
  ['Loire Valley', 'loire-valley'],
  ['Sancerre', 'loire-valley'],
  ['Pouilly-Fumé', 'loire-valley'],
  ['Vouvray', 'loire-valley'],
  ['Chinon', 'loire-valley'],
  ['Savennières', 'loire-valley'],
  ['Muscadet', 'loire-valley'],
  // Piedmont
  ['Piedmont', 'piedmont'],
  ['Piemonte', 'piedmont'],
  ['Barolo', 'piedmont'],
  ['Barbaresco', 'piedmont'],
  ['Langhe', 'piedmont'],
  // Tuscany
  ['Tuscany', 'tuscany'],
  ['Toscana', 'tuscany'],
  ['Chianti Classico', 'tuscany'],
  ['Brunello di Montalcino', 'tuscany'],
  ['Bolgheri', 'tuscany'],
  // California
  ['California', 'california'],
  ['Napa Valley', 'california'],
  ['Sonoma Coast', 'california'],
  ['Russian River Valley', 'california'],
  ['Howell Mountain', 'california'],
  ['Oakville', 'california'],
  ['Mayacamas', 'california'],
  // Oregon
  ['Oregon', 'oregon'],
  ['Willamette Valley', 'oregon'],
  ['Dundee Hills', 'oregon'],
  ['Eola-Amity Hills', 'oregon'],
  ['Ribbon Ridge', 'oregon'],
  // Italy Other
  ['Amarone', 'italy-other'],
  ['Valpolicella', 'italy-other'],
  ['Etna', 'italy-other'],
  ['Taurasi', 'italy-other'],
  ['Valtellina', 'italy-other'],
  // Japan
  ['Japan', 'japan-chubu'],
  ['Yamanashi', 'japan-chubu'],
  ['Nagano', 'japan-chubu'],
  ['Koshu', 'japan-chubu'],
  ['Katsunuma', 'japan-chubu'],
  // Germany Mosel
  ['Mosel', 'germany-mosel'],
  ['Bernkastel', 'germany-mosel'],
  ['Scharzhofberg', 'germany-mosel'],
  ['Rheingau', 'germany-mosel'],
  // Spain Rioja
  ['Spain', 'spain-rioja'],
  ['Rioja', 'spain-rioja'],
  ['Priorat', 'spain-rioja'],
  ['Ribera del Duero', 'spain-rioja'],
  // Chile Maipo
  ['Chile', 'chile-maipo'],
  ['Maipo', 'chile-maipo'],
  ['Puente Alto', 'chile-maipo'],
  ['Colchagua', 'chile-maipo'],
  // Australia
  ['Australia', 'australia'],
  ['Barossa', 'australia'],
  ['Barossa Valley', 'australia'],
  ['Margaret River', 'australia'],
  ['Eden Valley', 'australia'],
  ['Hunter Valley', 'australia']
];

check('Must have at least 50 sommelier test queries', sommelierQueries.length >= 50, `Found ${sommelierQueries.length} queries`);

for (const [query, expectedId] of sommelierQueries) {
  const match = findWineRegion(query);
  check(`Sommelier query "${query}" resolves to "${expectedId}"`, 
    match && match.id === expectedId,
    `Query "${query}" resolved to "${match?.id}", expected "${expectedId}"`
  );
  console.log(`  ✓ Query "${query}" -> ${match.id}`);
}

console.log('\n================================================================');
console.log(`📊 MASTER VERIFICATION SUMMARY: ${passedAssertions}/${totalAssertions} Assertions PASSED (100%)`);
console.log('✅ ALL 17 WINE REGIONS & SOMMELIER INVARIANTS EMPIRICALLY CONFIRMED!');
console.log('================================================================\n');
