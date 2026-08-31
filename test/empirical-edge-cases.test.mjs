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

let passed = 0;
let failed = 0;
const results = [];

function assert(condition, testName, details = '') {
  if (condition) {
    passed++;
    results.push({ status: 'PASS', testName, details });
    console.log(`✓ PASS: ${testName}`);
  } else {
    failed++;
    results.push({ status: 'FAIL', testName, details });
    console.error(`✗ FAIL: ${testName} - ${details}`);
  }
}

console.log('====================================================');
console.log('M1 CHALLENGER 2: EMPIRICAL EDGE CASE TEST SUITE');
console.log('====================================================\n');

// ----------------------------------------------------
// 1. Asymmetric Grand Crus Verification
// ----------------------------------------------------
console.log('--- Suite 1: Asymmetric Grand Cru Rules ---');
const toursSurMarne = CHAMPAGNE_GRAND_CRUS.find(c => c.id === 'tours-sur-marne');
assert(!!toursSurMarne, 'Tours-sur-Marne exists in CHAMPAGNE_GRAND_CRUS');
assert(
  toursSurMarne && 
  (toursSurMarne.dominantGrape.includes('100%') && toursSurMarne.dominantGrape.includes('Pinot Noir') && toursSurMarne.dominantGrape.includes('90%') && toursSurMarne.dominantGrape.includes('Chardonnay')),
  'Tours-sur-Marne documents asymmetric 100% PN (Grand Cru) / 90% CH (Premier Cru)',
  `dominantGrape: "${toursSurMarne?.dominantGrape}"`
);
assert(
  toursSurMarne?.echelleRating === 100,
  'Tours-sur-Marne échelle rating is 100',
  `echelleRating: ${toursSurMarne?.echelleRating}`
);

const chouilly = CHAMPAGNE_GRAND_CRUS.find(c => c.id === 'chouilly');
assert(!!chouilly, 'Chouilly exists in CHAMPAGNE_GRAND_CRUS');
assert(
  chouilly && 
  (chouilly.dominantGrape.includes('100%') && chouilly.dominantGrape.includes('Chardonnay') && chouilly.dominantGrape.includes('90%') && chouilly.dominantGrape.includes('Pinot Noir')),
  'Chouilly documents asymmetric 100% CH (Grand Cru) / 90% PN (Premier Cru)',
  `dominantGrape: "${chouilly?.dominantGrape}"`
);
assert(
  chouilly?.echelleRating === 100,
  'Chouilly échelle rating is 100',
  `echelleRating: ${chouilly?.echelleRating}`
);

// ----------------------------------------------------
// 2. Brut Nature Zero Added Sugar Constraint
// ----------------------------------------------------
console.log('\n--- Suite 2: Brut Nature Sugar Constraint ---');
const dosageTiers = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers;
const brutNature = dosageTiers?.find(t => t.id === 'brut-nature' || t.tier === 'Brut Nature');
assert(!!brutNature, 'Brut Nature tier exists in dosageTiers');
assert(
  brutNature?.gPerLMin === 0 && brutNature?.gPerLMax === 3,
  'Brut Nature residual sugar range is strictly 0–3 g/L',
  `min: ${brutNature?.gPerLMin}, max: ${brutNature?.gPerLMax}`
);
assert(
  brutNature?.sugarAddedAllowed === false,
  'Brut Nature has sugarAddedAllowed === false (strictly no added sugar)',
  `sugarAddedAllowed: ${brutNature?.sugarAddedAllowed}`
);
assert(
  brutNature?.rule?.toLowerCase().includes('no added sugar') || brutNature?.rule?.toLowerCase().includes('sans sucre'),
  'Brut Nature rule text explicitly forbids added sugar',
  `rule: "${brutNature?.rule}"`
);
assert(
  brutNature?.frenchTerms?.includes('Pas Dosé') && brutNature?.frenchTerms?.includes('Zero Dosage'),
  'Brut Nature includes official French terms (Pas Dosé, Zero Dosage, Non Dosé)',
  `frenchTerms: "${brutNature?.frenchTerms}"`
);

// ----------------------------------------------------
// 3. Vintage 80% Harvest Declaration Cap & Aging
// ----------------------------------------------------
console.log('\n--- Suite 3: Vintage Harvest Cap & Aging ---');
const vintageAging = CHAMPAGNE_TECHNICAL_REGULATIONS.aging?.vintage;
assert(!!vintageAging, 'Vintage aging regulations exist');
assert(
  vintageAging?.declarationCapPct === 80,
  'Vintage declaration cap is strictly 80%',
  `declarationCapPct: ${vintageAging?.declarationCapPct}`
);
assert(
  vintageAging?.minTotalMonths === 36,
  'Vintage minimum total aging is 36 months',
  `minTotalMonths: ${vintageAging?.minTotalMonths}`
);
assert(
  vintageAging?.rule?.includes('80%'),
  'Vintage aging rule text explicitly mentions 80% harvest declaration cap',
  `rule: "${vintageAging?.rule}"`
);
assert(
  vintageAging?.description?.includes('20%') && vintageAging?.description?.toLowerCase().includes('reserve'),
  'Vintage aging description documents 20% minimum reserve wine retention',
  `description: "${vintageAging?.description}"`
);

// ----------------------------------------------------
// 4. RM 5% External Grape Purchase Limit & Producer Codes
// ----------------------------------------------------
console.log('\n--- Suite 4: Producer Codes & RM 5% Purchase Limit ---');
const producerCodes = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes;
assert(Array.isArray(producerCodes) && producerCodes.length === 7, 'All 7 official CIVC producer codes present (NM, RM, CM, RC, SR, ND, MA)');
const expectedCodes = ['NM', 'RM', 'CM', 'RC', 'SR', 'ND', 'MA'];
const presentCodes = producerCodes?.map(p => p.code);
assert(
  expectedCodes.every(c => presentCodes?.includes(c)),
  'Codes array contains NM, RM, CM, RC, SR, ND, MA exactly',
  `Present: ${presentCodes?.join(', ')}`
);

const rmCode = producerCodes?.find(p => p.code === 'RM');
assert(!!rmCode, 'RM code object exists');
assert(
  rmCode?.description?.includes('5%') && rmCode?.description?.toLowerCase().includes('purchase'),
  'RM description documents maximum 5% outside grape purchase allowed by law',
  `description: "${rmCode?.description}"`
);

// ----------------------------------------------------
// 5. Rosé des Riceys 100% Pinot Noir Saignée
// ----------------------------------------------------
console.log('\n--- Suite 5: Ancillary AOCs & Rosé des Riceys ---');
const ancillaryAocs = CHAMPAGNE_TECHNICAL_REGULATIONS.ancillaryAocs;
assert(Array.isArray(ancillaryAocs) && ancillaryAocs.length >= 2, 'Ancillary AOCs array contains at least Coteaux Champenois and Rosé des Riceys');
const roseDesRiceys = ancillaryAocs?.find(a => a.id === 'rose-des-riceys' || a.name?.includes('Riceys'));
assert(!!roseDesRiceys, 'Rosé des Riceys AOC object exists');
assert(
  roseDesRiceys?.type?.toLowerCase().includes('saignée') || roseDesRiceys?.rules?.some(r => r.toLowerCase().includes('saignée')),
  'Rosé des Riceys specifies saignée maceration method',
  `type: "${roseDesRiceys?.type}"`
);
assert(
  roseDesRiceys?.permittedGrapes?.some(g => g.includes('100% Pinot Noir') || g === 'Pinot Noir'),
  'Rosé des Riceys permitted grape is 100% Pinot Noir',
  `permittedGrapes: ${JSON.stringify(roseDesRiceys?.permittedGrapes)}`
);
assert(
  roseDesRiceys?.rules?.some(r => r.toLowerCase().includes('prohibited') && r.toLowerCase().includes('assemblage')),
  'Rosé des Riceys explicitly notes assemblage (blending white/red) is strictly prohibited',
  `rules: ${JSON.stringify(roseDesRiceys?.rules)}`
);

// ----------------------------------------------------
// 6. findWineRegion Helper Edge Case Matching
// ----------------------------------------------------
console.log('\n--- Suite 6: findWineRegion Query Matching ---');
const queryTestCases = [
  { query: 'Coteaux Champenois', country: '', expectedId: 'champagne' },
  { query: 'coteaux champenois', country: 'France', expectedId: 'champagne' },
  { query: 'Rose des Riceys', country: '', expectedId: 'champagne' },
  { query: 'Rosé des Riceys', country: '', expectedId: 'champagne' },
  { query: 'rose des riceys', country: 'france', expectedId: 'champagne' },
  { query: 'Ambonnay', country: '', expectedId: 'champagne' },
  { query: 'ambonnay', country: 'France', expectedId: 'champagne' },
  { query: 'Ay', country: '', expectedId: 'champagne' },
  { query: 'Aÿ', country: '', expectedId: 'champagne' },
  { query: 'Avize', country: '', expectedId: 'champagne' },
  { query: 'Bouzy', country: '', expectedId: 'champagne' },
  { query: 'Verzenay', country: '', expectedId: 'champagne' },
  { query: 'Verzy', country: '', expectedId: 'champagne' },
  { query: 'Cramant', country: '', expectedId: 'champagne' },
  { query: 'Le Mesnil-sur-Oger', country: '', expectedId: 'champagne' },
  { query: 'Le Mesnil', country: '', expectedId: 'champagne' },
  { query: 'Oger', country: '', expectedId: 'champagne' },
  { query: 'Chouilly', country: '', expectedId: 'champagne' },
  { query: 'Champagne', country: '', expectedId: 'champagne' },
  { query: 'champagne grand cru', country: '', expectedId: 'champagne' },
  { query: 'champagne premier cru', country: '', expectedId: 'champagne' },
  { query: 'Champenoise', country: '', expectedId: 'champagne' },
];

for (const tc of queryTestCases) {
  const result = findWineRegion(tc.query, tc.country);
  assert(
    result?.id === tc.expectedId,
    `findWineRegion("${tc.query}", "${tc.country}") -> "${tc.expectedId}"`,
    `Returned id: "${result?.id}" (name: "${result?.name}")`
  );
}

// ----------------------------------------------------
// 7. Additional Structural & Cru Completeness Invariants
// ----------------------------------------------------
console.log('\n--- Suite 7: Structural & Cru Invariants ---');
assert(CHAMPAGNE_GRAND_CRUS.length === 17, 'Exactly 17 Grand Crus in CHAMPAGNE_GRAND_CRUS', `Count: ${CHAMPAGNE_GRAND_CRUS.length}`);
assert(
  CHAMPAGNE_GRAND_CRUS.every(gc => gc.lat && gc.lng && gc.aspect && gc.dominantGrape && gc.soil && gc.character && gc.benchmarkProducers?.length > 0),
  'All 17 Grand Crus have complete lat/lng, aspect, dominantGrape, soil, character, and benchmarkProducers'
);

const mdrGcs = CHAMPAGNE_GRAND_CRUS.filter(gc => gc.subregionId === 'montagne-de-reims');
const vdmGcs = CHAMPAGNE_GRAND_CRUS.filter(gc => gc.subregionId === 'vallee-de-la-marne');
const cdbGcs = CHAMPAGNE_GRAND_CRUS.filter(gc => gc.subregionId === 'cote-des-blancs');
assert(mdrGcs.length === 9, '9 Grand Crus in Montagne de Reims', `Found: ${mdrGcs.length}`);
assert(vdmGcs.length === 2, '2 Grand Crus in Vallée de la Marne', `Found: ${vdmGcs.length}`);
assert(cdbGcs.length === 6, '6 Grand Crus in Côte des Blancs', `Found: ${cdbGcs.length}`);

assert(CHAMPAGNE_SUBREGIONS.length === 7, '7 Subregions in CHAMPAGNE_SUBREGIONS', `Count: ${CHAMPAGNE_SUBREGIONS.length}`);
assert(CHAMPAGNE_PREMIER_CRUS.length >= 15, 'At least 15 Premier Crus documented', `Count: ${CHAMPAGNE_PREMIER_CRUS.length}`);
assert(CHAMPAGNE_PRESTIGE_CUVEES.length >= 12, 'At least 12 Prestige Cuvées documented', `Count: ${CHAMPAGNE_PRESTIGE_CUVEES.length}`);
assert(CHAMPAGNE_ICONIC_GROWERS.length >= 3, 'At least 3 Iconic Growers documented', `Count: ${CHAMPAGNE_ICONIC_GROWERS.length}`);

// Pressing rules verification
const pressing = CHAMPAGNE_TECHNICAL_REGULATIONS.pressing;
assert(pressing?.marcKg === 4000, 'Marc is 4000 kg', `marcKg: ${pressing?.marcKg}`);
assert(pressing?.cuveeLiters === 2050 || pressing?.cuveeL === 2050, 'Cuvée is 2050 L', `cuvee: ${pressing?.cuveeLiters || pressing?.cuveeL}`);
assert(pressing?.tailleLiters === 500 || pressing?.tailleL === 500, 'Taille is 500 L', `taille: ${pressing?.tailleLiters || pressing?.tailleL}`);
assert(pressing?.rebecheMinPct === 7, 'Rebêche min is 7%', `rebecheMinPct: ${pressing?.rebecheMinPct}`);

// Non-Vintage Aging
const nvAging = CHAMPAGNE_TECHNICAL_REGULATIONS.aging?.nonVintage;
assert(nvAging?.minTotalMonths === 15, 'NV min total aging is 15 months', `minTotalMonths: ${nvAging?.minTotalMonths}`);
assert(nvAging?.minLeesMonths === 12, 'NV min lees aging is 12 months', `minLeesMonths: ${nvAging?.minLeesMonths}`);

console.log('\n====================================================');
console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED (TOTAL: ${passed + failed})`);
console.log('====================================================');

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
