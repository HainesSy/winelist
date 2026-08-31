import {
  WINE_REGIONS,
  CHAMPAGNE_GRAND_CRUS,
  CHAMPAGNE_PREMIER_CRUS,
  CHAMPAGNE_SUBREGIONS,
  CHAMPAGNE_TECHNICAL_REGULATIONS,
  CHAMPAGNE_PRESTIGE_CUVEES,
  CHAMPAGNE_ICONIC_GROWERS
} from '../src/data/wineRegions.js';

let passed = 0;
let failed = 0;
const errors = [];

function assert(condition, testName, details = '') {
  if (condition) {
    passed++;
    console.log(`  ✓ PASS: ${testName}`);
  } else {
    failed++;
    const msg = `  ✗ FAIL: ${testName} ${details ? `(${details})` : ''}`;
    console.error(msg);
    errors.push(msg);
  }
}

function assertInRange(val, min, max, name) {
  assert(
    typeof val === 'number' && !isNaN(val) && val >= min && val <= max,
    `${name} (${val}) within [${min}, ${max}]`
  );
}

function assertNonEmptyString(val, name) {
  assert(
    typeof val === 'string' && val.trim().length > 0,
    `${name} is a non-empty string`,
    `got: ${typeof val === 'string' ? `"${val}"` : typeof val}`
  );
}

function assertArrayOfNonEmptyStrings(arr, name, minLength = 1) {
  const isArr = Array.isArray(arr);
  const validLen = isArr && arr.length >= minLength;
  const validItems = isArr && arr.every(item => typeof item === 'string' && item.trim().length > 0);
  assert(
    isArr && validLen && validItems,
    `${name} is array of non-empty strings (len >= ${minLength})`,
    `len: ${isArr ? arr.length : 'not array'}, valid: ${validItems}`
  );
}

// Deep scanner for unexpected undefined, null, NaN, or whitespace-only strings
function deepScanData(obj, path = 'root') {
  if (obj === null || obj === undefined) {
    assert(false, `No null/undefined at ${path}`);
    return;
  }
  if (typeof obj === 'number') {
    assert(!isNaN(obj), `Number at ${path} is not NaN`);
    return;
  }
  if (typeof obj === 'string') {
    assert(obj.trim().length > 0, `String at ${path} is not empty or whitespace-only`);
    return;
  }
  if (typeof obj === 'boolean' || typeof obj === 'function') {
    return;
  }
  if (Array.isArray(obj)) {
    assert(obj.length > 0, `Array at ${path} is not empty`);
    obj.forEach((item, idx) => deepScanData(item, `${path}[${idx}]`));
    return;
  }
  if (typeof obj === 'object') {
    const keys = Object.keys(obj);
    assert(keys.length > 0, `Object at ${path} has keys`);
    for (const key of keys) {
      deepScanData(obj[key], `${path}.${key}`);
    }
  }
}

console.log('================================================================');
console.log('RUNNING EMPIRICAL VALIDATION: Champagne CMS Level 3 Dataset');
console.log('================================================================\n');

// 1. WINE_REGIONS.champagne exists and is properly wired
console.log('--- 1. Testing WINE_REGIONS.champagne Export Structure ---');
const ch = WINE_REGIONS.champagne;
assert(!!ch, 'WINE_REGIONS.champagne exists');
assert(ch?.id === 'champagne', 'WINE_REGIONS.champagne.id is "champagne"');
assert(ch?.grandCrus === CHAMPAGNE_GRAND_CRUS, 'WINE_REGIONS.champagne.grandCrus matches CHAMPAGNE_GRAND_CRUS');
assert(ch?.premierCrus === CHAMPAGNE_PREMIER_CRUS, 'WINE_REGIONS.champagne.premierCrus matches CHAMPAGNE_PREMIER_CRUS');
assert(ch?.subRegions === CHAMPAGNE_SUBREGIONS, 'WINE_REGIONS.champagne.subRegions matches CHAMPAGNE_SUBREGIONS');
assert(ch?.technicalRegulations === CHAMPAGNE_TECHNICAL_REGULATIONS, 'WINE_REGIONS.champagne.technicalRegulations matches CHAMPAGNE_TECHNICAL_REGULATIONS');
assert(ch?.prestigeCuvees === CHAMPAGNE_PRESTIGE_CUVEES, 'WINE_REGIONS.champagne.prestigeCuvees matches CHAMPAGNE_PRESTIGE_CUVEES');
assert(ch?.iconicGrowers === CHAMPAGNE_ICONIC_GROWERS, 'WINE_REGIONS.champagne.iconicGrowers matches CHAMPAGNE_ICONIC_GROWERS');

// 2. Grand Crus Count & Subregion breakdown
console.log('\n--- 2. Testing 17 Grand Crus Invariants ---');
assert(CHAMPAGNE_GRAND_CRUS.length === 17, `Total Grand Crus count == 17 (got ${CHAMPAGNE_GRAND_CRUS.length})`);

const grandCrusBySubregion = {
  'Montagne de Reims': 0,
  'Vallée de la Marne': 0,
  'Côte des Blancs': 0
};

const grandCruIds = new Set();
const grandCruNames = new Set();

const expectedMontagneCruIds = [
  'ambonnay', 'bouzy', 'verzenay', 'mailly-champagne', 'verzy',
  'beaumont-sur-vesle', 'sillery', 'puisieulx', 'louvois'
];
const expectedValleeCruIds = ['ay', 'tours-sur-marne'];
const expectedCoteDesBlancsCruIds = ['avize', 'chouilly', 'cramant', 'le-mesnil-sur-oger', 'oger', 'oiry'];

for (const cru of CHAMPAGNE_GRAND_CRUS) {
  if (grandCrusBySubregion[cru.subregion] !== undefined) {
    grandCrusBySubregion[cru.subregion]++;
  } else {
    assert(false, `Grand Cru ${cru.name} has unexpected subregion "${cru.subregion}"`);
  }

  // Unique IDs and names
  assert(!grandCruIds.has(cru.id), `Grand Cru ID "${cru.id}" is unique`);
  grandCruIds.add(cru.id);
  assert(!grandCruNames.has(cru.name), `Grand Cru Name "${cru.name}" is unique`);
  grandCruNames.add(cru.name);

  // String properties
  assertNonEmptyString(cru.id, `cru[${cru.name}].id`);
  assertNonEmptyString(cru.name, `cru[${cru.name}].name`);
  assertNonEmptyString(cru.subregion, `cru[${cru.name}].subregion`);
  assertNonEmptyString(cru.subregionId, `cru[${cru.name}].subregionId`);
  assertNonEmptyString(cru.aspect, `cru[${cru.name}].aspect`);
  assertNonEmptyString(cru.dominantGrape, `cru[${cru.name}].dominantGrape`);
  assertNonEmptyString(cru.grapeRatio, `cru[${cru.name}].grapeRatio`);
  assertNonEmptyString(cru.soil, `cru[${cru.name}].soil`);
  assertNonEmptyString(cru.character, `cru[${cru.name}].character`);

  // Numeric and GPS bounds (~47.5-49.8 lat, 3.0-5.0 lng)
  assert(cru.echelleRating === 100, `cru[${cru.name}].echelleRating == 100`);
  assertInRange(cru.lat, 47.5, 49.8, `cru[${cru.name}].lat`);
  assertInRange(cru.lng, 3.0, 5.0, `cru[${cru.name}].lng`);

  // Arrays
  assertArrayOfNonEmptyStrings(cru.benchmarkProducers, `cru[${cru.name}].benchmarkProducers`, 1);
  assertArrayOfNonEmptyStrings(cru.iconicVineyards, `cru[${cru.name}].iconicVineyards`, 1);
}

assert(grandCrusBySubregion['Montagne de Reims'] === 9, `Montagne de Reims Grand Crus == 9 (got ${grandCrusBySubregion['Montagne de Reims']})`);
assert(grandCrusBySubregion['Vallée de la Marne'] === 2, `Vallée de la Marne Grand Crus == 2 (got ${grandCrusBySubregion['Vallée de la Marne']})`);
assert(grandCrusBySubregion['Côte des Blancs'] === 6, `Côte des Blancs Grand Crus == 6 (got ${grandCrusBySubregion['Côte des Blancs']})`);

for (const id of expectedMontagneCruIds) {
  assert(grandCruIds.has(id), `Montagne de Reims contains expected Cru ID "${id}"`);
}
for (const id of expectedValleeCruIds) {
  assert(grandCruIds.has(id), `Vallée de la Marne contains expected Cru ID "${id}"`);
}
for (const id of expectedCoteDesBlancsCruIds) {
  assert(grandCruIds.has(id), `Côte des Blancs contains expected Cru ID "${id}"`);
}

// 3. Premier Crus
console.log('\n--- 3. Testing Premier Crus Invariants ---');
assert(CHAMPAGNE_PREMIER_CRUS.length >= 10, `Premier Crus count >= 10 (got ${CHAMPAGNE_PREMIER_CRUS.length})`);
for (const pc of CHAMPAGNE_PREMIER_CRUS) {
  assertNonEmptyString(pc.id, `premierCru[${pc.name}].id`);
  assertNonEmptyString(pc.name, `premierCru[${pc.name}].name`);
  assertNonEmptyString(pc.subregion, `premierCru[${pc.name}].subregion`);
  assertNonEmptyString(pc.dominantGrape, `premierCru[${pc.name}].dominantGrape`);
  assertNonEmptyString(pc.soil, `premierCru[${pc.name}].soil`);
  assertNonEmptyString(pc.character, `premierCru[${pc.name}].character`);
  assertInRange(pc.echelleRating, 90, 99, `premierCru[${pc.name}].echelleRating (90-99)`);
  assertInRange(pc.lat, 47.5, 49.8, `premierCru[${pc.name}].lat`);
  assertInRange(pc.lng, 3.0, 5.0, `premierCru[${pc.name}].lng`);
  assertArrayOfNonEmptyStrings(pc.benchmarkProducers, `premierCru[${pc.name}].benchmarkProducers`, 1);
}

// 4. Subregions
console.log('\n--- 4. Testing Subregions Invariants ---');
assert(CHAMPAGNE_SUBREGIONS.length >= 6, `Subregions count >= 6 (got ${CHAMPAGNE_SUBREGIONS.length})`);
for (const sr of CHAMPAGNE_SUBREGIONS) {
  assertNonEmptyString(sr.id, `subregion[${sr.name}].id`);
  assertNonEmptyString(sr.name, `subregion[${sr.name}].name`);
  assertNonEmptyString(sr.district, `subregion[${sr.name}].district`);
  assertNonEmptyString(sr.terroir, `subregion[${sr.name}].terroir`);
  assertNonEmptyString(sr.focus, `subregion[${sr.name}].focus`);
  assertNonEmptyString(sr.geology, `subregion[${sr.name}].geology`);
  assertNonEmptyString(sr.dominantGrapes, `subregion[${sr.name}].dominantGrapes`);
  assertNonEmptyString(sr.description, `subregion[${sr.name}].description`);
  assertInRange(sr.lat, 47.5, 49.8, `subregion[${sr.name}].lat`);
  assertInRange(sr.lng, 3.0, 5.0, `subregion[${sr.name}].lng`);
  assert(Array.isArray(sr.microTerroirs) && sr.microTerroirs.length >= 1, `subregion[${sr.name}].microTerroirs has entries`);
  for (const mt of sr.microTerroirs) {
    assertNonEmptyString(mt.name, `subregion[${sr.name}].microTerroir.name`);
    assertNonEmptyString(mt.focus, `subregion[${sr.name}].microTerroir.focus`);
  }
}

// 5. Technical Regulations: Grapes (7 varieties: 3 major + 4 heritage)
console.log('\n--- 5. Testing Authorized Grapes (7 varieties) ---');
const grapes = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes;
assert(!!grapes, 'technicalRegulations.grapes exists');
assert(Array.isArray(grapes.major), 'grapes.major is an array');
assert(Array.isArray(grapes.heritage), 'grapes.heritage is an array');
assert(grapes.major.length === 3, `Major grapes count == 3 (got ${grapes.major.length})`);
assert(grapes.heritage.length === 4, `Heritage grapes count == 4 (got ${grapes.heritage.length})`);
assert(grapes.major.length + grapes.heritage.length === 7, `Total authorized grapes == 7 (got ${grapes.major.length + grapes.heritage.length})`);

const majorGrapeNames = grapes.major.map(g => g.name.toLowerCase());
assert(majorGrapeNames.some(n => n.includes('pinot noir')), 'Major grapes include Pinot Noir');
assert(majorGrapeNames.some(n => n.includes('chardonnay')), 'Major grapes include Chardonnay');
assert(majorGrapeNames.some(n => n.includes('meunier')), 'Major grapes include Meunier');

const heritageGrapeNames = grapes.heritage.map(g => g.name.toLowerCase());
assert(heritageGrapeNames.some(n => n.includes('pinot blanc')), 'Heritage grapes include Pinot Blanc');
assert(heritageGrapeNames.some(n => n.includes('arbane')), 'Heritage grapes include Arbane');
assert(heritageGrapeNames.some(n => n.includes('petit meslier')), 'Heritage grapes include Petit Meslier');
assert(heritageGrapeNames.some(n => n.includes('pinot gris')), 'Heritage grapes include Pinot Gris');

for (const g of [...grapes.major, ...grapes.heritage]) {
  assertNonEmptyString(g.id, `grape[${g.name}].id`);
  assertNonEmptyString(g.name, `grape[${g.name}].name`);
  assertNonEmptyString(g.type, `grape[${g.name}].type`);
  assertNonEmptyString(g.epicenter, `grape[${g.name}].epicenter`);
  assertNonEmptyString(g.profile, `grape[${g.name}].profile`);
  assertNonEmptyString(g.role, `grape[${g.name}].role`);
}

// 6. Technical Regulations: CIVC Pressing Numbers
console.log('\n--- 6. Testing CIVC Pressing Regulations Invariants ---');
const pressing = CHAMPAGNE_TECHNICAL_REGULATIONS.pressing;
assert(!!pressing, 'technicalRegulations.pressing exists');
assert(pressing.marcKg === 4000, `pressing.marcKg == 4000 (got ${pressing.marcKg})`);
assert(pressing.cuveeL === 2050 || pressing.cuveeLiters === 2050, `pressing.cuveeL == 2050 (got ${pressing.cuveeL || pressing.cuveeLiters})`);
assert(pressing.tailleL === 500 || pressing.tailleLiters === 500, `pressing.tailleL == 500 (got ${pressing.tailleL || pressing.tailleLiters})`);
const cuveeVal = pressing.cuveeL || pressing.cuveeLiters;
const tailleVal = pressing.tailleL || pressing.tailleLiters;
assert(cuveeVal + tailleVal === 2550, `cuvee + taille == 2550 L AOC must limit (got ${cuveeVal + tailleVal})`);
assert(pressing.rebecheMinPct === 7, `pressing.rebecheMinPct == 7 (got ${pressing.rebecheMinPct})`);
assertArrayOfNonEmptyStrings(pressing.rules, 'pressing.rules', 3);
assert(Array.isArray(pressing.fractions) && pressing.fractions.length === 3, 'pressing.fractions has 3 fractions (Cuvée, Taille, Rebêche)');

// 7. Technical Regulations: Aging Laws
console.log('\n--- 7. Testing Aging Laws Invariants ---');
const aging = CHAMPAGNE_TECHNICAL_REGULATIONS.aging;
assert(!!aging, 'technicalRegulations.aging exists');
assert(aging.nonVintage?.minTotalMonths === 15, `NV minTotalMonths == 15 (got ${aging.nonVintage?.minTotalMonths})`);
assert(aging.nonVintage?.minLeesMonths === 12, `NV minLeesMonths == 12 (got ${aging.nonVintage?.minLeesMonths})`);
assert(aging.vintage?.minTotalMonths === 36, `Vintage minTotalMonths == 36 (got ${aging.vintage?.minTotalMonths})`);
assert(aging.vintage?.declarationCapPct === 80, `Vintage declarationCapPct == 80 (got ${aging.vintage?.declarationCapPct})`);

// 8. Technical Regulations: Dosage Sweetness Tiers (7 tiers)
console.log('\n--- 8. Testing 7 Official Dosage Sweetness Tiers ---');
const dosageTiers = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers;
assert(Array.isArray(dosageTiers), 'dosageTiers is an array');
assert(dosageTiers.length === 7, `dosageTiers count == 7 (got ${dosageTiers.length})`);

const expectedTiers = [
  { tier: 'Brut Nature', gPerLMin: 0, gPerLMax: 3, sugarAddedAllowed: false },
  { tier: 'Extra Brut', gPerLMin: 0, gPerLMax: 6, sugarAddedAllowed: true },
  { tier: 'Brut', gPerLMin: 0, gPerLMax: 12, sugarAddedAllowed: true },
  { tier: 'Extra Dry', gPerLMin: 12, gPerLMax: 17, sugarAddedAllowed: true },
  { tier: 'Sec', gPerLMin: 17, gPerLMax: 32, sugarAddedAllowed: true },
  { tier: 'Demi-Sec', gPerLMin: 32, gPerLMax: 50, sugarAddedAllowed: true },
  { tier: 'Doux', gPerLMin: 50, sugarAddedAllowed: true }
];

for (let i = 0; i < expectedTiers.length; i++) {
  const exp = expectedTiers[i];
  const act = dosageTiers[i];
  assert(act?.tier === exp.tier, `Tier [${i}] name is "${exp.tier}" (got "${act?.tier}")`);
  assert(act?.gPerLMin === exp.gPerLMin, `Tier [${exp.tier}] gPerLMin is ${exp.gPerLMin} (got ${act?.gPerLMin})`);
  if (exp.gPerLMax !== undefined) {
    assert(act?.gPerLMax === exp.gPerLMax, `Tier [${exp.tier}] gPerLMax is ${exp.gPerLMax} (got ${act?.gPerLMax})`);
  } else {
    assert(act?.gPerLMin >= 50, `Tier [${exp.tier}] gPerLMin >= 50 (got ${act?.gPerLMin})`);
  }
  assert(act?.sugarAddedAllowed === exp.sugarAddedAllowed, `Tier [${exp.tier}] sugarAddedAllowed is ${exp.sugarAddedAllowed}`);
  assertNonEmptyString(act?.rule, `Tier [${exp.tier}].rule`);
  assertNonEmptyString(act?.profile, `Tier [${exp.tier}].profile`);
  assertNonEmptyString(act?.foodPairing, `Tier [${exp.tier}].foodPairing`);
}

// 9. Technical Regulations: Producer Matriculation Codes (7 codes)
console.log('\n--- 9. Testing 7 CIVC Producer Matriculation Codes ---');
const producerCodes = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes;
assert(Array.isArray(producerCodes), 'producerCodes is an array');
assert(producerCodes.length === 7, `producerCodes count == 7 (got ${producerCodes.length})`);

const expectedCodes = ['NM', 'RM', 'CM', 'RC', 'SR', 'ND', 'MA'];
const actualCodes = producerCodes.map(pc => pc.code);
for (const code of expectedCodes) {
  assert(actualCodes.includes(code), `Producer code "${code}" is present`);
}

for (const pc of producerCodes) {
  assertNonEmptyString(pc.code, `producerCode[${pc.code}].code`);
  assertNonEmptyString(pc.title, `producerCode[${pc.code}].title`);
  assertNonEmptyString(pc.frenchName, `producerCode[${pc.code}].frenchName`);
  assertNonEmptyString(pc.description, `producerCode[${pc.code}].description`);
  assertNonEmptyString(pc.operationalModel, `producerCode[${pc.code}].operationalModel`);
  assertNonEmptyString(pc.shareOfProduction, `producerCode[${pc.code}].shareOfProduction`);
  assertArrayOfNonEmptyStrings(pc.exampleProducers, `producerCode[${pc.code}].exampleProducers`, 1);
}

// 10. Technical Regulations: Geology and Ancillary AOCs
console.log('\n--- 10. Testing Geology & Ancillary AOCs ---');
const geology = CHAMPAGNE_TECHNICAL_REGULATIONS.geology;
assert(Array.isArray(geology?.formations) && geology.formations.length >= 4, 'geology.formations has at least 4 formations');
for (const f of geology.formations) {
  assertNonEmptyString(f.id, `formation[${f.name}].id`);
  assertNonEmptyString(f.name, `formation[${f.name}].name`);
  assertNonEmptyString(f.period, `formation[${f.name}].period`);
  assertNonEmptyString(f.fossil, `formation[${f.name}].fossil`);
  assertNonEmptyString(f.characteristics, `formation[${f.name}].characteristics`);
  assertNonEmptyString(f.wineImpact, `formation[${f.name}].wineImpact`);
  assertArrayOfNonEmptyStrings(f.keyAreas, `formation[${f.name}].keyAreas`, 1);
}

const ancillaryAocs = CHAMPAGNE_TECHNICAL_REGULATIONS.ancillaryAocs;
assert(Array.isArray(ancillaryAocs) && ancillaryAocs.length === 2, 'ancillaryAocs has 2 AOCs');
const coteaux = ancillaryAocs.find(a => a.id === 'coteaux-champenois');
const rose = ancillaryAocs.find(a => a.id === 'rose-des-riceys');
assert(!!coteaux, 'Coteaux Champenois AOC present');
assert(!!rose, 'Rosé des Riceys AOC present');
assert(coteaux?.establishedYear === 1974 || coteaux?.established === 1974, 'Coteaux Champenois established 1974');
assert(rose?.establishedYear === 1947 || rose?.established === 1947, 'Rosé des Riceys established 1947');

// 11. Prestige Cuvées & Iconic Growers
console.log('\n--- 11. Testing Prestige Cuvées & Iconic Growers ---');
assert(CHAMPAGNE_PRESTIGE_CUVEES.length >= 10, `prestigeCuvees count >= 10 (got ${CHAMPAGNE_PRESTIGE_CUVEES.length})`);
for (const cuvee of CHAMPAGNE_PRESTIGE_CUVEES) {
  assertNonEmptyString(cuvee.id, `prestigeCuvee[${cuvee.name}].id`);
  assertNonEmptyString(cuvee.name, `prestigeCuvee[${cuvee.name}].name`);
  assertNonEmptyString(cuvee.houseOrGrower, `prestigeCuvee[${cuvee.name}].houseOrGrower`);
  assertNonEmptyString(cuvee.type, `prestigeCuvee[${cuvee.name}].type`);
  assertNonEmptyString(cuvee.grapeComposition, `prestigeCuvee[${cuvee.name}].grapeComposition`);
  assertNonEmptyString(cuvee.sourcing, `prestigeCuvee[${cuvee.name}].sourcing`);
  assertNonEmptyString(cuvee.winemaking, `prestigeCuvee[${cuvee.name}].winemaking`);
  assertNonEmptyString(cuvee.character, `prestigeCuvee[${cuvee.name}].character`);
  assertNonEmptyString(cuvee.iconicStatus, `prestigeCuvee[${cuvee.name}].iconicStatus`);
}

assert(CHAMPAGNE_ICONIC_GROWERS.length >= 3, `iconicGrowers count >= 3 (got ${CHAMPAGNE_ICONIC_GROWERS.length})`);
for (const grower of CHAMPAGNE_ICONIC_GROWERS) {
  assertNonEmptyString(grower.id, `grower[${grower.name}].id`);
  assertNonEmptyString(grower.name, `grower[${grower.name}].name`);
  assertNonEmptyString(grower.village, `grower[${grower.name}].village`);
  assertNonEmptyString(grower.vigneron, `grower[${grower.name}].vigneron`);
  assertNonEmptyString(grower.philosophy, `grower[${grower.name}].philosophy`);
  assertArrayOfNonEmptyStrings(grower.keyCuvees, `grower[${grower.name}].keyCuvees`, 1);
}

// 12. Deep recursive scan of all Champagne data objects
console.log('\n--- 12. Deep Data Integrity Scan of Champagne Dataset ---');
deepScanData(WINE_REGIONS.champagne, 'WINE_REGIONS.champagne');

// 13. Integrity of All Other Regions in WINE_REGIONS
console.log('\n--- 13. Testing All Wine Regions Integrity ---');
const allRegionKeys = Object.keys(WINE_REGIONS);
assert(allRegionKeys.length >= 10, `WINE_REGIONS has >= 10 regions (got ${allRegionKeys.length})`);
for (const regId of allRegionKeys) {
  const reg = WINE_REGIONS[regId];
  assert(!!reg, `Region "${regId}" exists`);
  assertNonEmptyString(reg.name, `WINE_REGIONS[${regId}].name`);
  assert(Array.isArray(reg.center) && reg.center.length === 2, `WINE_REGIONS[${regId}].center is [lat, lng]`);
}

// Summary
console.log('\n================================================================');
console.log(`VALIDATION RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================\n');

if (failed > 0) {
  console.error('FAILURES:');
  errors.forEach(err => console.error(err));
  globalThis.process?.exit(1);
} else {
  console.log('ALL INVARIANTS EMPIRICALLY VERIFIED! VERDICT: APPROVE');
  globalThis.process?.exit(0);
}
