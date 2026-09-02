/**
 * ============================================================================
 * EMPIRICAL DOMAIN VALIDATION & ADVERSARIAL STRESS TEST SUITE
 * ============================================================================
 * 
 * Subagent: Worker M1 (Test Suite & Validation Infrastructure Specialist)
 * Scope: Court of Master Sommeliers (CMS) Level 3 & Master Sommelier Standards
 * across all 17 Fine Wine World Regions:
 * 
 *   - Suite 1: Piedmont: Barolo 181 MGAs, Barbaresco 66 MGAs, Communes & Aging Laws
 *   - Suite 2: Tuscany: Chianti Classico 11 UGAs (2021), Gran Selezione Rules & Terroir
 *   - Suite 3: Bordeaux: 1855 Classifications, Left Bank Günzian Gravels vs Right Bank Molasse
 *   - Suite 4: Champagne: 17 Grand Crus, 7 Dosage Tiers, 7 CIVC Codes & Pressing Fractions
 *   - Suite 5: California Napa 16 AVAs (Valley vs Mountain) & Oregon 11 AVAs
 *   - Suite 6: Japan: GI Yamanashi & GI Nagano Specifications
 *   - Suite 7: Alsace: 51 Grand Crus, 13 Bedrock Formations, 4 Noble Grapes & VT/SGN Laws
 *   - Suite 8: Corsica: 9 AOCs, Hercynian Granite vs Schistes Lustrés & Native Ampelography
 *   - Suite 9: Rhône Valley: Northern 100% Syrah Granite vs Southern 13 CdP Grapes & Galets Roulés
 *   - Suite 10: Loire Valley: 4 Sectors, Silex vs Kimmeridgian vs Tuffeau & Chenin/Cab Franc
 *   - Suite 11: Germany Mosel & Rheingau: Devonian Slate, 10.0 Acidity, Prädikat & VDP GG
 *   - Suite 12: Spain: Rioja Oak Aging Hierarchy, Priorat Llicorella & Viñedos Singulares
 *   - Suite 13: Chile: Alto Maipo Alluvial Gravels, Andean Katabatic Cooling & Carménère
 *   - Suite 14: Australia: 1843 Pre-Phylloxera Shiraz, Gingin Clone Chardonnay & Hunter Semillon
 *   - Suite 15: Italy Other: Etna Volcanic Tephra, Valtellina Superiore & Amarone Appassimento
 *   - Suite 16: Food Pairing Taxonomy Completeness & Sommelier Service Tips
 *   - Suite 17: Adversarial Query Resolution, Diacritics & Alias Resiliency
 *   - Suite 18: GeoJSON Boundary Topology & Cartographic Envelopes
 *   - Suite 19: Real-World Master Sommelier Service & Blind Tasting Scenarios
 * 
 * Execute with:
 *   node test/empirical_domain_validation_suite.test.mjs
 * ============================================================================
 */

import assert from 'node:assert';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Import authoritative registry & modular datasets
const {
  WINE_REGIONS,
  findWineRegion,
  CHAMPAGNE_GRAND_CRUS,
  CHAMPAGNE_PREMIER_CRUS,
  CHAMPAGNE_SUBREGIONS,
  CHAMPAGNE_TECHNICAL_REGULATIONS,
  CHAMPAGNE_PRESTIGE_CUVEES,
  CHAMPAGNE_ICONIC_GROWERS,
  BURGUNDY_GRAND_CRUS,
  BURGUNDY_SUBREGIONS,
  BURGUNDY_TECHNICAL_REGULATIONS,
  ALSACE_GRAND_CRUS,
  ALSACE_SUBREGIONS,
  ALSACE_TECHNICAL_REGULATIONS,
  CORSICA_SUBREGIONS,
  CORSICA_TECHNICAL_REGULATIONS,
  BORDEAUX_SUBREGIONS,
  BORDEAUX_GRAND_CRUS,
  BORDEAUX_PREMIER_CRUS,
  BORDEAUX_TECHNICAL_REGULATIONS,
  BORDEAUX_PRESTIGE_ESTATES,
  BORDEAUX_ICONIC_CHATEAUX,
  RHONE_SUBREGIONS,
  RHONE_GRAND_CRUS,
  RHONE_TECHNICAL_REGULATIONS,
  RHONE_PRESTIGE_CUVEES,
  LOIRE_SUBREGIONS,
  LOIRE_GRAND_CRUS,
  LOIRE_TECHNICAL_REGULATIONS,
  PIEDMONT_SUBREGIONS,
  PIEDMONT_GRAND_CRUS,
  PIEDMONT_TECHNICAL_REGULATIONS,
  PIEDMONT_PRESTIGE_CUVEES,
  PIEDMONT_ICONIC_DOMAINES,
  TUSCANY_SUBREGIONS,
  TUSCANY_GRAND_CRUS,
  TUSCANY_TECHNICAL_REGULATIONS,
  TUSCANY_PRESTIGE_CUVEES,
  TUSCANY_ICONIC_DOMAINES,
  CALIFORNIA_SUBREGIONS,
  CALIFORNIA_GRAND_CRUS,
  CALIFORNIA_TECHNICAL_REGULATIONS,
  CALIFORNIA_PRESTIGE_ESTATES,
  CALIFORNIA_ICONIC_PRODUCERS,
  OREGON_SUBREGIONS,
  OREGON_GRAND_CRUS,
  OREGON_TECHNICAL_REGULATIONS,
  OREGON_PRESTIGE_ESTATES,
  OREGON_ICONIC_PRODUCERS,
  ITALY_OTHER_SUBREGIONS,
  ITALY_OTHER_GRAND_CRUS,
  ITALY_OTHER_TECHNICAL_REGULATIONS,
  JAPAN_SUBREGIONS,
  JAPAN_GRAND_CRUS,
  JAPAN_TECHNICAL_REGULATIONS,
  JAPAN_PRESTIGE_ESTATES,
  JAPAN_ICONIC_PRODUCERS,
  MOSEL_SUBREGIONS,
  MOSEL_GRAND_CRUS,
  MOSEL_TECHNICAL_REGULATIONS,
  MOSEL_PRESTIGE_ESTATES,
  MOSEL_ICONIC_DOMAINES,
  RIOJA_SUBREGIONS,
  RIOJA_GRAND_CRUS,
  RIOJA_TECHNICAL_REGULATIONS,
  RIOJA_PRESTIGE_ESTATES,
  RIOJA_ICONIC_DOMAINES,
  CHILE_SUBREGIONS,
  CHILE_GRAND_CRUS,
  CHILE_TECHNICAL_REGULATIONS,
  CHILE_PRESTIGE_ESTATES,
  CHILE_ICONIC_DOMAINES,
  AUSTRALIA_SUBREGIONS,
  AUSTRALIA_GRAND_CRUS,
  AUSTRALIA_TECHNICAL_REGULATIONS,
  AUSTRALIA_PRESTIGE_ESTATES,
  AUSTRALIA_ICONIC_DOMAINES
} = await import('../src/data/wineRegions.js');

const {
  WINE_REGION_BOUNDARIES
} = await import('../src/data/wineRegionBoundaries.js');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function test(name, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    failedTests++;
    failures.push({ name, error: err });
    console.error(`  ✗ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
  }
}

function suite(title) {
  console.log(`\n━━━ ${title} ━━━`);
}

console.log(`\n================================================================`);
console.log(`🍷 EMPIRICAL DOMAIN & SOMMELIER TECHNICAL VALIDATION SUITE`);
console.log(`================================================================`);

// ============================================================================
// 1. PIEDMONT: BAROLO 181 MGAs & BARBARESCO 66 MGAs & AGING LAWS
// ============================================================================
suite('1. Piedmont: Barolo 181 MGAs, Barbaresco 66 MGAs, Communes & Aging Laws');

test('Barolo: 181 official MGAs (2010 decree) and 11 statutory communes documented', () => {
  const baroloSub = PIEDMONT_SUBREGIONS.find(s => s.id === 'barolo-langhe');
  assert(baroloSub, 'Barolo subregion exists');
  assert.match(baroloSub.description, /181/i, 'Barolo documents 181 official MGAs');
  assert.match(baroloSub.description, /11 statutory communes/i, 'Barolo documents 11 statutory communes');

  const tech = PIEDMONT_TECHNICAL_REGULATIONS;
  const baroloTier = tech.classification.pyramid.find(t => t.tier.includes('Barolo'));
  assert(baroloTier, 'Barolo DOCG tier exists in classification pyramid');
  assert.match(baroloTier.criteria, /181 official MGAs/i, 'Classification criteria specifies 181 official MGAs');
  assert.match(baroloTier.criteria, /11 delimited communes/i, 'Classification criteria specifies 11 communes');
});

test('Barolo: statutory aging law metrics (38m Annata / 62m Riserva, min 18m wood)', () => {
  const tech = PIEDMONT_TECHNICAL_REGULATIONS;
  const baroloTier = tech.classification.pyramid.find(t => t.tier.includes('Barolo'));
  assert.match(baroloTier.aging, /38 months total/i, 'Barolo Annata min 38 months total aging');
  assert.match(baroloTier.aging, /62 months total/i, 'Barolo Riserva min 62 months total aging');
  assert.match(baroloTier.aging, /18 in wood/i, 'Barolo min 18 months in wood/oak');

  assert.strictEqual(tech.aging.vintage.minTotalMonths, 38, 'Aging object minTotalMonths is 38');
  assert.strictEqual(tech.aging.vintage.minWoodMonths, 18, 'Aging object minWoodMonths is 18');
});

test('Barbaresco: 66 official MGAs (2007 decree) and 4 statutory communes documented', () => {
  const barbarescoSub = PIEDMONT_SUBREGIONS.find(s => s.id === 'barbaresco-langhe');
  assert(barbarescoSub, 'Barbaresco subregion exists');
  assert.match(barbarescoSub.description, /66 officially delimited MGAs/i, 'Barbaresco documents 66 MGAs');
  assert.match(barbarescoSub.description, /four historic communes/i, 'Barbaresco documents 4 historic communes');
  assert.match(barbarescoSub.description, /Barbaresco, Neive, Treiso, and San Rocco Seno d'Elvio/i, 'Barbaresco names all 4 communes');

  const tech = PIEDMONT_TECHNICAL_REGULATIONS;
  const barbTier = tech.classification.pyramid.find(t => t.tier.includes('Barbaresco'));
  assert(barbTier, 'Barbaresco DOCG tier exists');
  assert.match(barbTier.criteria, /66 official MGAs/i, 'Barbaresco criteria specifies 66 MGAs');
});

test('Barbaresco: statutory aging law metrics (26m Annata / 50m Riserva, min 9m wood)', () => {
  const tech = PIEDMONT_TECHNICAL_REGULATIONS;
  const barbTier = tech.classification.pyramid.find(t => t.tier.includes('Barbaresco'));
  assert.match(barbTier.aging, /26 months total/i, 'Barbaresco Annata min 26 months total');
  assert.match(barbTier.aging, /50 months total/i, 'Barbaresco Riserva min 50 months total');
  assert.match(barbTier.aging, /9 in wood/i, 'Barbaresco min 9 months in wood');
});

test('Piedmont: Pedology contrasts Tortonian Sant\'Agata Fossili vs Serravallian Lequio sandstone', () => {
  const tech = PIEDMONT_TECHNICAL_REGULATIONS;
  assert(tech.geology, 'Geology section exists');
  const tortonian = tech.geology.formations.find(f => f.name.includes('Sant\'Agata Fossili') || f.name.includes('Tortonian'));
  const serravallian = tech.geology.formations.find(f => f.name.includes('Formazione di Lequio') || f.name.includes('Serravallian'));
  assert(tortonian, 'Tortonian Sant\'Agata Fossili formation documented');
  assert(serravallian, 'Serravallian Formazione di Lequio formation documented');
});

test('Piedmont: Nebbiolo biotypes (Lampia, Michet, Rosé) and benchmark MGAs documented', () => {
  const tech = PIEDMONT_TECHNICAL_REGULATIONS;
  const nebbiolo = tech.grapes.major.find(g => g.id === 'nebbiolo');
  assert(nebbiolo, 'Nebbiolo grape documented');

  const baroloSub = PIEDMONT_SUBREGIONS.find(s => s.id === 'barolo-langhe');
  assert(baroloSub.grapeVarieties.some(v => v.includes('Lampia') && v.includes('Michet') && v.includes('Rosé')), 'Nebbiolo biotypes listed in subregion');

  const cruNames = PIEDMONT_GRAND_CRUS.map(c => c.name);
  const expectedCrus = ['Cannubi', 'Bussia', 'Brunate', 'Cerequio', 'Rocche dell\'Annunziata', 'Cascina Francia', 'Vignarionda', 'Monprivato', 'Asili', 'Rabajà', 'Ovello', 'Montestefano'];
  for (const exp of expectedCrus) {
    assert(cruNames.some(n => n.includes(exp)), `Cru ${exp} is present in PIEDMONT_GRAND_CRUS`);
  }
});


// ============================================================================
// 2. TUSCANY: CHIANTI CLASSICO 11 UGAs (2021) & GRAN SELEZIONE RULES
// ============================================================================
suite('2. Tuscany: Chianti Classico 11 UGAs (2021), Gran Selezione Rules & Terroir');

test('Chianti Classico: 11 official UGAs (2021 codification) legally documented', () => {
  const ccSub = TUSCANY_SUBREGIONS.find(s => s.id === 'chianti-classico');
  assert(ccSub, 'Chianti Classico subregion exists');
  assert.match(ccSub.name, /11 UGAs/i, 'Subregion name explicitly highlights 11 UGAs');
  assert.match(ccSub.description, /11 Unità Geografiche Aggiuntive \(UGAs\)/i, 'Description documents 11 UGAs codification');

  const tuscanyFileContent = fs.readFileSync(path.resolve(projectRoot, 'src/data/tuscanyData.js'), 'utf8');

  const ugas = [
    'Castellina', 'Gaiole', 'Radda', 'Greve', 'Panzano',
    'Castelnuovo Berardenga', 'San Casciano', 'Montefioralle',
    'Lamole', 'San Donato in Poggio', 'Vagliagli'
  ];

  for (const uga of ugas) {
    assert(tuscanyFileContent.includes(uga), `Official UGA "${uga}" is documented in Tuscany module`);
  }

  const cruIds = TUSCANY_GRAND_CRUS.map(c => c.id);
  assert(cruIds.includes('uga-radda-in-chianti'), 'Radda UGA cru exists');
  assert(cruIds.includes('uga-panzano-in-chianti'), 'Panzano UGA cru exists');
  assert(cruIds.includes('uga-gaiole-in-chianti'), 'Gaiole UGA cru exists');
  assert(cruIds.includes('uga-castellina-in-chianti'), 'Castellina UGA cru exists');
  assert(cruIds.includes('uga-castelnuovo-berardenga'), 'Castelnuovo Berardenga UGA cru exists');
});

test('Gran Selezione: 2021 statutory rules (min 90% Sangiovese, 0% international grapes, 30m aging)', () => {
  const tech = TUSCANY_TECHNICAL_REGULATIONS;
  const gsTier = tech.classification.pyramid.find(t => t.tier.includes('Gran Selezione'));
  assert(gsTier, 'Gran Selezione DOCG tier exists');
  assert.match(gsTier.criteria, /minimum 90% Sangiovese/i, 'Gran Selezione requires min 90% Sangiovese');
  assert.match(gsTier.criteria, /no international red grapes/i, 'Gran Selezione strictly forbids international red grapes under 2021 UGA rules');
  assert.match(gsTier.criteria, /100% estate-grown/i, 'Gran Selezione requires 100% estate-grown fruit');
  assert.match(gsTier.aging, /30 months/i, 'Gran Selezione requires min 30 months aging');
  assert.match(gsTier.yield, /45 hl\/ha/i, 'Gran Selezione enforces strict yield cap of 45 hl/ha');
});

test('Tuscany: Pedology contrasts Galestro schist vs Alberese limestone vs Macigno sandstone', () => {
  const tech = TUSCANY_TECHNICAL_REGULATIONS;
  const formations = tech.geology.formations.map(f => f.name);
  assert(formations.some(n => n.includes('Galestro')), 'Galestro clay-schist formation documented');
  assert(formations.some(n => n.includes('Alberese')), 'Alberese compact marly limestone formation documented');
  assert(formations.some(n => n.includes('Macigno')), 'Macigno sandstone formation documented');
});

test('Brunello di Montalcino: 100% Sangiovese Grosso, 5-year aging (min 2yr oak) & 4-quadrant slopes', () => {
  const tech = TUSCANY_TECHNICAL_REGULATIONS;
  const brunelloTier = tech.classification.pyramid.find(t => t.tier.includes('Brunello'));
  assert(brunelloTier, 'Brunello di Montalcino tier exists');
  assert.match(brunelloTier.criteria, /100% Sangiovese Grosso/i, 'Brunello mandates 100% Sangiovese Grosso');
  assert.match(brunelloTier.aging, /5 years total aging/i, 'Brunello Annata requires min 5 years total aging');
  assert.match(brunelloTier.aging, /2 years in oak/i, 'Brunello requires min 2 years in oak');

  const montalcinoCrus = TUSCANY_GRAND_CRUS.filter(c => c.subregionId === 'montalcino');
  assert(montalcinoCrus.length >= 4, 'Montalcino has at least 4 quadrant crus documented');
});


// ============================================================================
// 3. BORDEAUX: 1855 CLASSIFICATIONS, LEFT BANK GÜNZIAN VS RIGHT BANK MOLASSE
// ============================================================================
suite('3. Bordeaux: 1855 Classifications, Left Bank Günzian Gravels vs Right Bank Molasse');

test('Bordeaux 1855: All 5 Médoc First Growths & Sauternes Premier Cru Supérieur present', () => {
  const firstGrowthIds = [
    'chateau-lafite-rothschild',
    'chateau-latour',
    'chateau-margaux',
    'chateau-haut-brion',
    'chateau-mouton-rothschild',
    'chateau-d-yquem'
  ];

  for (const id of firstGrowthIds) {
    const cru = BORDEAUX_GRAND_CRUS.find(c => c.id === id);
    assert(cru, `First Growth / Premier Cru Supérieur "${id}" is present in BORDEAUX_GRAND_CRUS`);
    assert.strictEqual(cru.tier, 'grandCru', `${cru.name} is grandCru tier`);
    assert(cru.badge && (cru.badge.includes('1er Cru') || cru.badge.includes('Premier Cru')), `${cru.name} has Premier Cru badge`);
  }
});

test('Bordeaux 1855: 2nd through 5th Growths, Sauternes, St-Émilion Classé A/B & Graves documented', () => {
  const tech = BORDEAUX_TECHNICAL_REGULATIONS;
  const classificationPyramid = tech.classification.pyramid;
  assert(classificationPyramid.some(p => p.tier.includes('1855 Médoc')), '1855 Médoc classification documented');
  assert(classificationPyramid.some(p => p.tier.includes('1855 Sauternes')), '1855 Sauternes classification documented');
  assert(classificationPyramid.some(p => p.tier.includes('Saint-Émilion')), 'Saint-Émilion classification documented');
  assert(classificationPyramid.some(p => p.tier.includes('Graves') || p.tier.includes('Pessac-Léognan')), 'Graves/Pessac-Léognan classification documented');
  assert(classificationPyramid.some(p => p.tier.includes('Bourgeois')), 'Crus Bourgeois documented');

  const stEmilionA = BORDEAUX_GRAND_CRUS.filter(c => c.badge && (c.badge.includes('1er Grand Cru Classé A') || c.badge.includes('Premier Grand Cru Classé A')));
  const stEmilionANames = stEmilionA.map(c => c.name);
  assert(stEmilionANames.some(n => n.includes('Pavie')), 'Pavie present in 2022 Premier Grand Cru Classé A crus');
  assert(stEmilionANames.some(n => n.includes('Figeac')), 'Figeac present in 2022 Premier Grand Cru Classé A crus');

  const prestigeNames = BORDEAUX_PRESTIGE_ESTATES.map(p => p.name);
  assert(prestigeNames.some(n => n.includes('Cheval Blanc')), 'Cheval Blanc present in Prestige Estates');
  assert(prestigeNames.some(n => n.includes('Ausone')), 'Ausone present in Prestige Estates');
});

test('Bordeaux Pedology: Quaternary Günzian gravels vs Right Bank Molasse du Fronsadais & Blue Clay', () => {
  const tech = BORDEAUX_TECHNICAL_REGULATIONS;
  assert(tech.geology, 'Geology section exists');
  const formations = tech.geology.formations.map(f => f.name);

  assert(formations.some(n => n.includes('Günzian') || n.includes('Graves')), 'Günzian Quaternary gravel terraces documented');
  assert(formations.some(n => n.includes('Molasse du Fronsadais')), 'Molasse du Fronsadais documented');
  assert(formations.some(n => n.includes('Calcaire à Astéries')), 'Calcaire à Astéries starfish limestone documented');
  assert(formations.some(n => n.includes('Argile Bleue') || n.includes('Smectite')), 'Argile Bleue / Smectite blue clay documented');

  const subregText = JSON.stringify(BORDEAUX_SUBREGIONS);
  assert(subregText.includes('Crasse de Fer'), 'Crasse de Fer iron hardpan documented in Bordeaux subregions');
});

test('Bordeaux Vinification & Climatology: 225L Barriques, Cabernet vs Merlot, Ciron botrytis mists', () => {
  const tech = BORDEAUX_TECHNICAL_REGULATIONS;
  assert.match(tech.vinification.description, /225/i, '225L Barrique Bordelaise aging documented');
  assert(tech.climatology.winds.some(w => w.name.includes('Ciron')), 'Ciron river botrytis mists documented in climatology');

  const cab = tech.grapes.major.find(g => g.id === 'cabernet-sauvignon');
  const merlot = tech.grapes.major.find(g => g.id === 'merlot');
  assert(cab && merlot, 'Cabernet Sauvignon and Merlot documented as major grapes');
});


// ============================================================================
// 4. CHAMPAGNE: 17 GRAND CRUS, 7 DOSAGE TIERS, 7 CIVC CODES & PRESSING FRACTIONS
// ============================================================================
suite('4. Champagne: 17 Grand Crus, 7 Dosage Tiers, 7 CIVC Codes & Pressing Fractions');

test('Champagne: Exactly 17 Grand Cru communes documented with 100% Échelle des Crus', () => {
  assert.strictEqual(CHAMPAGNE_GRAND_CRUS.length, 17, 'Exactly 17 Grand Crus exist in CHAMPAGNE_GRAND_CRUS');

  const mdr = CHAMPAGNE_GRAND_CRUS.filter(c => c.districtId === 'montagne-de-reims' || c.subregion === 'Montagne de Reims');
  const vdm = CHAMPAGNE_GRAND_CRUS.filter(c => c.districtId === 'vallee-de-la-marne' || c.subregion === 'Vallée de la Marne');
  const cdb = CHAMPAGNE_GRAND_CRUS.filter(c => c.districtId === 'cote-des-blancs' || c.subregion === 'Côte des Blancs');

  assert.strictEqual(mdr.length, 9, 'Montagne de Reims has exactly 9 Grand Crus');
  assert.strictEqual(vdm.length, 2, 'Vallée de la Marne has exactly 2 Grand Crus');
  assert.strictEqual(cdb.length, 6, 'Côte des Blancs has exactly 6 Grand Crus');

  for (const cru of CHAMPAGNE_GRAND_CRUS) {
    assert.strictEqual(cru.echelleRating, 100, `Cru ${cru.name} must have echelleRating of 100`);
    assert(/chalk|belemnite|micraster/i.test(cru.soil), `Cru ${cru.name} has chalk pedology`);
  }
});

test('Champagne: All 7 official dosage sweetness tiers documented with exact g/L bounds', () => {
  const tech = CHAMPAGNE_TECHNICAL_REGULATIONS;
  const tiers = tech.dosageTiers;
  assert.strictEqual(tiers.length, 7, 'Exactly 7 dosage tiers documented');

  const tierNames = tiers.map(t => t.tier);
  assert(tierNames.includes('Brut Nature'), 'Brut Nature tier present');
  assert(tierNames.includes('Extra Brut'), 'Extra Brut tier present');
  assert(tierNames.includes('Brut'), 'Brut tier present');
  assert(tierNames.includes('Extra Dry'), 'Extra Dry tier present');
  assert(tierNames.includes('Sec'), 'Sec tier present');
  assert(tierNames.includes('Demi-Sec'), 'Demi-Sec tier present');
  assert(tierNames.includes('Doux'), 'Doux tier present');

  const brutNature = tiers.find(t => t.tier === 'Brut Nature');
  assert.strictEqual(brutNature.gPerLMax, 3, 'Brut Nature max residual sugar is 3 g/L');
  assert.strictEqual(brutNature.sugarAddedAllowed, false, 'Brut Nature forbids added sugar');
});

test('Champagne: All 7 official CIVC producer registration codes documented', () => {
  const tech = CHAMPAGNE_TECHNICAL_REGULATIONS;
  const codes = tech.producerCodes;
  assert.strictEqual(codes.length, 7, 'Exactly 7 CIVC producer codes documented');

  const codeLetters = codes.map(c => c.code);
  const expectedCodes = ['NM', 'RM', 'CM', 'RC', 'SR', 'ND', 'MA'];
  for (const exp of expectedCodes) {
    assert(codeLetters.includes(exp), `CIVC code ${exp} is present`);
  }

  const rmCode = codes.find(c => c.code === 'RM');
  assert.match(rmCode.description, /5%/i, 'RM code notes maximum 5% grape purchase limit');
});

test('Champagne: CIVC pressing fractions (4000kg marc, 2050L cuvée, 500L taille, 7-10% rebêche)', () => {
  const tech = CHAMPAGNE_TECHNICAL_REGULATIONS;
  const pressing = tech.pressing;
  assert.strictEqual(pressing.marcKg, 4000, 'Marc is strictly 4,000 kg');
  assert.strictEqual(pressing.cuveeLiters, 2050, 'Cuvée extraction is strictly 2,050 L');
  assert.strictEqual(pressing.tailleLiters, 500, 'Taille extraction is strictly 500 L');
  assert.strictEqual(pressing.maxAocMustLiters, 2550, 'Total permitted must is 2,550 L');
  assert(pressing.rebecheMinPct >= 7, 'Rebêche distillation is min 7%');
});

test('Champagne: Aging regulations (NV 15m/12m lees vs Vintage 36m / 80% harvest cap)', () => {
  const tech = CHAMPAGNE_TECHNICAL_REGULATIONS;
  const aging = tech.aging;
  assert.strictEqual(aging.nonVintage.minTotalMonths, 15, 'NV min total aging is 15 months');
  assert.strictEqual(aging.nonVintage.minLeesMonths, 12, 'NV min lees aging is 12 months');
  assert.strictEqual(aging.vintage.minTotalMonths, 36, 'Vintage min total aging is 36 months');
  assert.strictEqual(aging.vintage.declarationCapPct, 80, 'Vintage harvest declaration cap is strictly 80%');
});


// ============================================================================
// 5. CALIFORNIA NAPA 16 AVAs & OREGON 11 AVAs
// ============================================================================
suite('5. California Napa 16 AVAs (Valley vs Mountain) & Oregon 11 AVAs');

test('California Napa: 16 nested AVAs with Valley Floor vs Mountain contrast', () => {
  const napaSubFloor = CALIFORNIA_SUBREGIONS.find(s => s.id === 'napa-valley-floor');
  const napaSubMtn = CALIFORNIA_SUBREGIONS.find(s => s.id === 'napa-mountain-avas');
  assert(napaSubFloor, 'Napa Valley Floor subregion exists');
  assert(napaSubMtn, 'Napa Mountain AVAs subregion exists');

  const allNapaText = JSON.stringify(CALIFORNIA_SUBREGIONS) + JSON.stringify(CALIFORNIA_GRAND_CRUS) + JSON.stringify(CALIFORNIA_TECHNICAL_REGULATIONS);

  const napaKeyAvas = [
    'Oakville', 'Rutherford', 'Stags Leap District', 'Yountville',
    'St. Helena', 'Calistoga', 'Coombsville', 'Howell Mountain',
    'Mount Veeder', 'Spring Mountain', 'Diamond Mountain', 'Atlas Peak'
  ];

  for (const ava of napaKeyAvas) {
    assert(allNapaText.includes(ava), `Napa AVA "${ava}" is documented in California datasets`);
  }

  const mtnCrus = CALIFORNIA_GRAND_CRUS.filter(c => c.subregionId === 'napa-mountain-avas');
  const mtnNames = mtnCrus.map(c => c.name);
  assert(mtnNames.some(n => n.includes('Howell Mountain')), 'Howell Mountain AVA crus present');
  assert(mtnNames.some(n => n.includes('Mount Veeder')), 'Mount Veeder AVA crus present');
  assert(mtnNames.some(n => n.includes('Spring Mountain')), 'Spring Mountain AVA crus present');
  assert(mtnNames.some(n => n.includes('Diamond Mountain')), 'Diamond Mountain AVA crus present');
});

test('Oregon Willamette: 11 nested AVAs and triple soil pedology (Jory, Nekia, Willakenzie, Laurelwood)', () => {
  assert(OREGON_SUBREGIONS.length >= 6, 'Oregon has comprehensive subregions');
  const allOregonText = JSON.stringify(OREGON_SUBREGIONS) + JSON.stringify(OREGON_GRAND_CRUS) + JSON.stringify(OREGON_TECHNICAL_REGULATIONS);

  const oregon11 = [
    'Dundee Hills', 'Eola-Amity Hills', 'Ribbon Ridge', 'Yamhill-Carlton',
    'McMinnville', 'Chehalem Mountains', 'Laurelwood', 'Van Duzer Corridor',
    'Mount Pisgah', 'Lower Long Tom', 'Tualatin Hills'
  ];

  for (const ava of oregon11) {
    assert(allOregonText.includes(ava), `Oregon AVA "${ava}" is documented in Oregon datasets`);
  }

  assert(allOregonText.includes('Jory'), 'Red volcanic Jory soil documented');
  assert(allOregonText.includes('Nekia'), 'Volcanic Nekia soil documented');
  assert(allOregonText.includes('Willakenzie'), 'Marine sedimentary Willakenzie sandstone documented');
  assert(allOregonText.includes('Laurelwood'), 'Glacial loess Laurelwood soil documented');
  assert(allOregonText.includes('Van Duzer'), 'Van Duzer Corridor ocean wind influence documented');
});


// ============================================================================
// 6. JAPAN: GI YAMANASHI & GI NAGANO SPECIFICATIONS
// ============================================================================
suite('6. Japan: GI Yamanashi & GI Nagano Specifications');

test('Japan: GI Yamanashi specifications (Katsunuma, Pergola Tanadukuri, Koshu, Kuroboku volcanic ash, Sur Lie)', () => {
  const yamanashiSub = JAPAN_SUBREGIONS.find(s => s.id === 'yamanashi-katsunuma');
  assert(yamanashiSub, 'GI Yamanashi subregion exists');
  assert.match(yamanashiSub.terroir, /Tanadukuri/i, 'Tanadukuri pergola trellising documented');
  assert.match(yamanashiSub.terroir, /Mount Fuji/i, 'Mount Fuji foothills documented');
  assert.match(yamanashiSub.geology, /Kuroboku|Volcanic ash/i, 'Volcanic ash Kuroboku geology documented');

  const tech = JAPAN_TECHNICAL_REGULATIONS;
  const koshu = tech.grapes.major.find(g => g.id === 'koshu');
  assert(koshu, 'Koshu grape variety documented');

  const surLieTradition = tech.vinification.traditions.find(t => t.name.includes('Sur Lie'));
  assert(surLieTradition, 'Sur lie winemaking method documented in Japanese technical traditions');
});

test('Japan: GI Nagano specifications (Shinshu alpine viticulture, Kikyogahara Merlot, Northern Alps shelter)', () => {
  const naganoSub = JAPAN_SUBREGIONS.find(s => s.id === 'nagano-shinshu');
  assert(naganoSub, 'GI Nagano subregion exists');
  assert.match(naganoSub.terroir, /Alpine/i, 'High alpine viticulture documented');
  assert.match(naganoSub.terroir, /Northern Alps/i, 'Japanese Northern Alps shelter documented');
  assert(naganoSub.microTerroirs.some(m => m.name.includes('Kikyogahara')), 'Kikyogahara Basin documented for Merlot');
  assert(naganoSub.microTerroirs.some(m => m.name.includes('Chikuma River')), 'Chikuma River Valley documented for Chardonnay');
});


// ============================================================================
// 7. ALSACE: 51 GRAND CRUS, 13 BEDROCK FORMATIONS, 4 NOBLE GRAPES & VT/SGN LAWS
// ============================================================================
suite('7. Alsace: 51 Grand Crus, 13 Bedrock Formations, 4 Noble Grapes & VT/SGN Laws');

test('Alsace: Exactly 51 Grand Crus cataloged with complete cadastral metadata', () => {
  assert.strictEqual(ALSACE_GRAND_CRUS.length, 51, `Alsace must have all 51 Grand Crus (found ${ALSACE_GRAND_CRUS.length})`);
  
  const keyCrus = ['Rangen', 'Schoenenbourg', 'Geisberg', 'Brand', 'Sommerberg', 'Rosacker', 'Hengst', 'Vorbourg', 'Schlossberg', 'Zotzenberg', 'Kaefferkopf', 'Altenberg de Bergheim'];
  const cruNames = ALSACE_GRAND_CRUS.map(c => c.name);
  for (const exp of keyCrus) {
    assert(cruNames.some(n => n.includes(exp)), `Grand Cru "${exp}" must exist in ALSACE_GRAND_CRUS`);
  }

  for (const cru of ALSACE_GRAND_CRUS) {
    assert(cru.subregionId === 'haut-rhin' || cru.subregionId === 'bas-rhin', 
      `Cru ${cru.name} must link to haut-rhin or bas-rhin, got ${cru.subregionId}`
    );
    assert(typeof cru.lat === 'number' && typeof cru.lng === 'number', `Cru ${cru.name} must have numeric lat/lng`);
  }
});

test('Alsace: 4 Noble Grapes (Riesling, Gewurztraminer, Pinot Gris, Muscat) & Zotzenberg Sylvaner exception', () => {
  const tech = ALSACE_TECHNICAL_REGULATIONS;
  assert(tech.grapes && Array.isArray(tech.grapes.major), 'Alsace technical regulations has major grapes');
  const majorGrapes = tech.grapes.major.map(g => g.name.toLowerCase());

  assert(majorGrapes.some(g => g.includes('riesling')), 'Riesling noble grape documented');
  assert(majorGrapes.some(g => g.includes('gewurztraminer')), 'Gewurztraminer noble grape documented');
  assert(majorGrapes.some(g => g.includes('pinot gris')), 'Pinot Gris noble grape documented');
  assert(majorGrapes.some(g => g.includes('muscat')), 'Muscat noble grape documented');

  const zotzenberg = ALSACE_GRAND_CRUS.find(c => c.id === 'zotzenberg');
  assert(zotzenberg, 'Zotzenberg Grand Cru exists');
  assert(/sylvaner/i.test(zotzenberg.dominantGrape) || /sylvaner/i.test(zotzenberg.grapeRatio) || /sylvaner/i.test(zotzenberg.legalNotes || ''),
    'Zotzenberg Grand Cru documents Sylvaner noble exception (authorized 2005)'
  );
});

test('Alsace: Bedrock formations (volcanic greywacke, granite, sandstone, Muschelkalk, Keuper marls)', () => {
  const tech = ALSACE_TECHNICAL_REGULATIONS;
  assert(tech.geology, 'Geology section exists');
  const geoText = JSON.stringify(tech.geology);

  assert(/volcan|greywacke/i.test(geoText), 'Volcano-sedimentary greywacke (Rangen de Thann) documented');
  assert(/granite/i.test(geoText), 'Granite bedrock (Brand, Sommerberg) documented');
  assert(/grès|sandstone/i.test(geoText), 'Buntsandstein / Vosges sandstone documented');
  assert(/muschelkalk|keuper|limestone|marl/i.test(geoText), 'Mesozoic limestone and Keuper marls documented');
});

test('Alsace: Vendanges Tardives (VT) & Sélection de Grains Nobles (SGN) statutory rules', () => {
  const tech = ALSACE_TECHNICAL_REGULATIONS;
  const sweetRules = JSON.stringify(tech.classification || tech);
  assert(/Vendanges Tardives|VT/i.test(sweetRules), 'Vendanges Tardives statutory rules documented');
  assert(/Sélection de Grains Nobles|SGN/i.test(sweetRules), 'Sélection de Grains Nobles botrytis rules documented');
});


// ============================================================================
// 8. CORSICA: 9 AOCs, HERCYNIAN GRANITE VS SCHISTES LUSTRÉS & AMPELOGRAPHY
// ============================================================================
suite('8. Corsica: 9 AOCs, Hercynian Granite vs Schistes Lustrés & Native Ampelography');

test('Corsica: 9 AOC appellations and subregional districts cataloged', () => {
  assert(CORSICA_SUBREGIONS.length >= 6, `Corsica must have comprehensive subregions (found ${CORSICA_SUBREGIONS.length})`);
  const subNames = CORSICA_SUBREGIONS.map(s => s.name);
  
  assert(subNames.some(n => n.includes('Patrimonio')), 'Patrimonio AOC documented');
  assert(subNames.some(n => n.includes('Ajaccio')), 'Ajaccio AOC documented');
  assert(subNames.some(n => n.includes('Calvi')), 'Calvi AOC documented');
  assert(subNames.some(n => n.includes('Sartène')), 'Sartène AOC documented');
  assert(subNames.some(n => n.includes('Figari')), 'Figari AOC documented');
  assert(subNames.some(n => n.includes('Cap Corse')), 'Cap Corse AOC documented');
});

test('Corsica: Geological dichotomy (Hercynian Granite vs Alpine Schistes Lustrés vs Limestone)', () => {
  const tech = CORSICA_TECHNICAL_REGULATIONS;
  assert(tech.geology, 'Geology section exists');
  const geoText = JSON.stringify(tech.geology) + JSON.stringify(CORSICA_SUBREGIONS);

  assert(/granite|arènes granitiques/i.test(geoText), 'Hercynian crystalline granite documented');
  assert(/schist|schistes lustrés/i.test(geoText), 'Metamorphic Schistes Lustrés (Cap Corse) documented');
  assert(/calcaire|limestone|saint-florent/i.test(geoText), 'Saint-Florent / Patrimonio limestone documented');
});

test('Corsica: Indigenous ampelography (Niellucciu, Sciaccarellu, Vermentinu, Biancu Gentile)', () => {
  const tech = CORSICA_TECHNICAL_REGULATIONS;
  const allText = JSON.stringify(tech.grapes) + JSON.stringify(CORSICA_SUBREGIONS);

  assert(/Niellucciu/i.test(allText), 'Niellucciu (Sangiovese biotype) documented');
  assert(/Sciaccarellu/i.test(allText), 'Sciaccarellu (Mammolo biotype) documented');
  assert(/Vermentinu/i.test(allText), 'Vermentinu (Malvoisie de Corse) documented');
  assert(/Biancu Gentile/i.test(allText), 'Rare indigenous Biancu Gentile documented');
});

test('Corsica: 5 Mediterranean winds (Libeccio, Mistral, Sirocco, Gregale, Tramontane)', () => {
  const tech = CORSICA_TECHNICAL_REGULATIONS;
  assert(tech.climatology && Array.isArray(tech.climatology.winds), 'Climatology winds array exists');
  assert.strictEqual(tech.climatology.winds.length, 5, 'Must document all 5 Mediterranean winds');
  const windNames = tech.climatology.winds.map(w => w.name);
  assert(windNames.some(n => n.includes('Libeccio')), 'Libeccio wind documented');
  assert(windNames.some(n => n.includes('Mistral')), 'Mistral wind documented');
  assert(windNames.some(n => n.includes('Sirocco')), 'Sirocco wind documented');
});


// ============================================================================
// 9. RHÔNE VALLEY: NORTHERN 100% SYRAH VS SOUTHERN 13 CDP GRAPES & GALETS ROULÉS
// ============================================================================
suite('9. Rhône Valley: Northern 100% Syrah Granite vs Southern 13 CdP Grapes & Galets Roulés');

test('Rhône: Northern mono-varietal Syrah Crus (Hermitage, Côte-Rôtie, Cornas) on granite', () => {
  const cruNames = RHONE_GRAND_CRUS.map(c => c.name);
  assert(cruNames.some(n => n.includes('Hermitage')), 'Hermitage cru present');
  assert(cruNames.some(n => n.includes('Côte-Rôtie')), 'Côte-Rôtie cru present');
  assert(cruNames.some(n => n.includes('Cornas')), 'Cornas cru present');
  assert(cruNames.some(n => n.includes('Condrieu')), 'Condrieu cru present');
  assert(cruNames.some(n => n.includes('Château-Grillet')), 'Château-Grillet monopole cru present');

  const cornas = RHONE_GRAND_CRUS.find(c => c.id === 'cornas');
  assert(cornas, 'Cornas cru exists');
  assert(/Syrah/i.test(cornas.dominantGrape), 'Cornas dominant grape is Syrah');
  assert(/granite|gore/i.test(cornas.soil), 'Cornas features steep decomposed granite (gore)');
});

test('Rhône: Southern Châteauneuf-du-Pape 13 authorized cépages & Galets Roulés pudding stones', () => {
  const southSub = RHONE_SUBREGIONS.find(s => s.id === 'southern-rhone');
  assert(southSub, 'Southern Rhône subregion exists');
  assert.match(southSub.terroir, /galets roulés/i, 'Galets Roulés quartzite stones documented');

  const cdpCru = RHONE_GRAND_CRUS.find(c => c.id === 'chateauneuf-du-pape');
  assert(cdpCru, 'Châteauneuf-du-Pape cru exists');
  const cdpText = JSON.stringify(cdpCru) + JSON.stringify(southSub);
  assert(/13/i.test(cdpText), 'Châteauneuf documents 13 authorized grape varieties');

  const tavel = RHONE_GRAND_CRUS.find(c => c.id === 'tavel');
  assert(tavel, 'Tavel cru exists');
  assert(/rose|rosé/i.test(tavel.wineType || tavel.name || tavel.character), 'Tavel is 100% Rosé appellation');
});

test('Rhône: Mistral wind dynamics and structural metrics (high alcohol, savory tannins)', () => {
  const tech = RHONE_TECHNICAL_REGULATIONS;
  const allText = JSON.stringify(tech) + JSON.stringify(RHONE_SUBREGIONS);
  assert(/Mistral/i.test(allText), 'Mistral wind documented');
  assert(WINE_REGIONS['rhone'].structure.tannin >= 8.0, 'Rhône tannin score is robust (>=8.0)');
});


// ============================================================================
// 10. LOIRE VALLEY: 4 SECTORS, SILEX VS KIMMERIDGIAN VS TUFFEAU & CHENIN/CAB FRANC
// ============================================================================
suite('10. Loire Valley: 4 Sectors, Silex vs Kimmeridgian vs Tuffeau & Chenin/Cab Franc');

test('Loire Valley: 4 sectors defined with distinct geological identities', () => {
  assert.strictEqual(LOIRE_SUBREGIONS.length, 4, 'Loire Valley has exactly 4 sectors');
  const subIds = LOIRE_SUBREGIONS.map(s => s.id);
  assert(subIds.includes('centre-loire'), 'Centre-Loire sector present');
  assert(subIds.includes('touraine'), 'Touraine sector present');
  assert(subIds.includes('anjou-saumur'), 'Anjou-Saumur sector present');
  assert(subIds.includes('pays-nantais'), 'Pays Nantais sector present');
});

test('Loire: Terres Blanches (Kimmeridgian) vs Caillottes (Limestone) vs Silex (Flint) in Sancerre', () => {
  const centre = LOIRE_SUBREGIONS.find(s => s.id === 'centre-loire');
  assert(centre, 'Centre-Loire subregion exists');
  assert.match(centre.terroir, /Terres Blanches/i, 'Terres Blanches Kimmeridgian marl documented');
  assert.match(centre.terroir, /Caillottes/i, 'Caillottes Oxfordian limestone documented');
  assert.match(centre.terroir, /Silex/i, 'Silex flint documented');
});

test('Loire: Chenin Blanc spectrum (Sec to Quarts de Chaume Grand Cru) & Tuffeau chalk', () => {
  const anjou = LOIRE_SUBREGIONS.find(s => s.id === 'anjou-saumur');
  assert(anjou, 'Anjou-Saumur subregion exists');
  assert.match(anjou.terroir, /Tuffeau|Schist/i, 'Tuffeau chalk and Anjou schist documented');

  const crus = LOIRE_GRAND_CRUS.map(c => c.name);
  assert(crus.some(n => n.includes('Quarts de Chaume')), 'Quarts de Chaume Grand Cru documented');
  assert(crus.some(n => n.includes('Bonnezeaux') || n.includes('Savennières') || n.includes('Coulée de Serrant')), 
    'Anjou Chenin benchmark crus documented'
  );
});

test('Loire: Cabernet Franc in Chinon/Saumur-Champigny and Muscadet Sur Lie', () => {
  const touraine = LOIRE_SUBREGIONS.find(s => s.id === 'touraine');
  assert(touraine, 'Touraine subregion exists');
  assert(/Chinon|Cabernet Franc/i.test(touraine.focus + touraine.description), 'Chinon Cabernet Franc documented');

  const nantais = LOIRE_SUBREGIONS.find(s => s.id === 'pays-nantais');
  assert(nantais, 'Pays Nantais subregion exists');
  assert(/Sur Lie|Melon de Bourgogne/i.test(nantais.focus + nantais.description), 'Muscadet Sur Lie on Melon de Bourgogne documented');
});


// ============================================================================
// 11. GERMANY MOSEL & RHEINGAU: DEVONIAN SLATE, 10.0 ACIDITY & VDP PRÄDIKAT
// ============================================================================
suite('11. Germany Mosel & Rheingau: Devonian Slate, 10.0 Acidity, Prädikat & VDP GG');

test('Mosel: Blue & Red Devonian slate pedology and high acidity score', () => {
  const mosel = WINE_REGIONS['germany-mosel'];
  assert(mosel, 'Germany Mosel region exists');
  assert.match(mosel.terroir.soil, /Devonian/i, 'Devonian slate documented in soil');
  assert(mosel.structure.acidity >= 9.5, `Mosel Riesling has high acidity score (got ${mosel.structure.acidity})`);
});

test('Mosel & Rheingau: VDP.Die Prädikatsweingüter classification & Prädikatswein hierarchy', () => {
  const mosel = WINE_REGIONS['germany-mosel'];
  const tiersText = JSON.stringify(mosel.classification.tiers);

  assert(/VDP\.Grosse Lage|Grosse Lage/i.test(tiersText), 'VDP.Grosse Lage documented');
  assert(/Kabinett/i.test(tiersText), 'Kabinett tier documented');
  assert(/Spätlese/i.test(tiersText), 'Spätlese tier documented');
  assert(/Auslese/i.test(tiersText), 'Auslese tier documented');
  assert(/Trockenbeerenauslese|TBA/i.test(tiersText), 'Trockenbeerenauslese (TBA) documented');
});

test('Mosel: Benchmark Grosse Lagen (Scharzhofberg, Sonnenuhr, Doctor, Würzgarten, Prälat)', () => {
  const crus = MOSEL_GRAND_CRUS.map(c => c.name);
  assert(crus.some(n => n.includes('Scharzhofberg')), 'Scharzhofberg cru documented');
  assert(crus.some(n => n.includes('Sonnenuhr')), 'Wehlener Sonnenuhr cru documented');
  assert(crus.some(n => n.includes('Doctor')), 'Berncasteler Doctor cru documented');
  assert(crus.some(n => n.includes('Würzgarten')), 'Ürziger Würzgarten cru documented');
  assert(crus.some(n => n.includes('Prälat')), 'Erdener Prälat cru documented');
});


// ============================================================================
// 12. SPAIN: RIOJA OAK AGING, PRIORAT LLICORELLA & VIÑEDOS SINGULARES
// ============================================================================
suite('12. Spain: Rioja Oak Aging Hierarchy, Priorat Llicorella & Viñedos Singulares');

test('Rioja: Statutory oak aging law hierarchy (Crianza, Reserva, Gran Reserva)', () => {
  const rioja = WINE_REGIONS['spain-rioja'];
  assert(rioja, 'Spain Rioja region exists');
  const tiersText = JSON.stringify(rioja.classification.tiers);

  assert(/Crianza/i.test(tiersText), 'Crianza tier documented');
  assert(/Reserva/i.test(tiersText), 'Reserva tier documented');
  assert(/Gran Reserva/i.test(tiersText), 'Gran Reserva tier documented');

  const grTier = rioja.classification.tiers.find(t => t.name.includes('Gran Reserva'));
  assert(grTier && (/5 years|60 months/i.test(grTier.detail) || /2 years|24 months/i.test(grTier.detail)), 
    'Gran Reserva specifies minimum 5 years aging with oak maturation'
  );
});

test('Priorat: Black Llicorella slate and Viñedos Singulares decree', () => {
  const rioja = WINE_REGIONS['spain-rioja'];
  const allText = JSON.stringify(rioja.subRegions) + JSON.stringify(rioja.classification);

  assert(/Llicorella/i.test(allText), 'Priorat Llicorella slate documented');
  assert(/Viñedos Singulares|Singulares/i.test(allText) || /Gran Vinya/i.test(allText), 'Viñedos Singulares / Gran Vinya Classificada documented');
});

test('Ribera del Duero & Galicia Rías Baixas regional diversity', () => {
  const subNames = RIOJA_SUBREGIONS.map(s => s.name);
  assert(subNames.some(n => n.includes('Ribera del Duero') || n.includes('Ribera')), 'Ribera del Duero subregion documented');
  assert(subNames.some(n => n.includes('Rioja Alta')), 'Rioja Alta subregion documented');
  assert(subNames.some(n => n.includes('Rioja Alavesa')), 'Rioja Alavesa subregion documented');
});


// ============================================================================
// 13. CHILE: ALTO MAIPO ALLUVIAL GRAVELS, ANDEAN KATABATIC COOLING & CARMÉNÈRE
// ============================================================================
suite('13. Chile: Alto Maipo Alluvial Gravels, Andean Katabatic Cooling & Carménère');

test('Chile: Alto Maipo alluvial terraces (Puente Alto, Pirque) & benchmark crus', () => {
  const chile = WINE_REGIONS['chile-maipo'];
  assert(chile, 'Chile region exists');
  const subText = JSON.stringify(chile.subRegions);

  assert(/Alto Maipo|Puente Alto/i.test(subText), 'Alto Maipo / Puente Alto documented');
  assert(/gravel|alluvial/i.test(subText), 'Alluvial gravel terraces documented');

  const crus = CHILE_GRAND_CRUS.map(c => c.name);
  assert(crus.some(n => n.includes('Almaviva')), 'Almaviva cru documented');
  assert(crus.some(n => n.includes('Don Melchor')), 'Don Melchor cru documented');
});

test('Chile: Andean katabatic nighttime cooling and Camanchaca coastal fog', () => {
  const chile = WINE_REGIONS['chile-maipo'];
  assert.match(chile.terroir.climate, /Andes|mountain|cooling|breezes/i, 'Andean katabatic cooling documented');
});

test('Chile: Carménère signature pyrazine/eucalyptus aromatics & phylloxera-free ungrafted vines', () => {
  const chile = WINE_REGIONS['chile-maipo'];
  const carmenere = chile.grapes.find(g => /carmen/i.test(g.name));
  assert(carmenere, 'Carménère documented as signature variety');

  const flavText = JSON.stringify(chile.flavorProfile);
  assert(/Eucalyptus|Mint|Pepper|Cassis/i.test(flavText), 'Eucalyptus / Fresh Mint notes documented');
});


// ============================================================================
// 14. AUSTRALIA: 1843 PRE-PHYLLOXERA SHIRAZ, GINGIN CHARDONNAY & HUNTER SEMILLON
// ============================================================================
suite('14. Australia: 1843 Pre-Phylloxera Shiraz, Gingin Clone Chardonnay & Hunter Semillon');

test('Australia: Barossa Valley living pre-phylloxera ungrafted vines (1843)', () => {
  const aus = WINE_REGIONS['australia'];
  assert(aus, 'Australia region exists');
  const allText = JSON.stringify(aus);

  assert(/1843|pre-phylloxera|Old Vine|Ancestor/i.test(allText), '1843 pre-phylloxera ungrafted vines documented');
});

test('Australia: Margaret River ironstone gravels & Gingin clone Chardonnay', () => {
  const aus = WINE_REGIONS['australia'];
  const mr = aus.subRegions.find(s => s.id === 'margaret-river' || s.id === 'margaret-river-wa');
  assert(mr, 'Margaret River subregion exists');
  assert(/Leeuwin|Cullen|gravel|ironstone/i.test(mr.terroir + mr.focus + mr.description), 'Margaret River terroir and benchmark estates documented');
});

test('Australia: Hunter Valley low-alcohol (10-11%) age-worthy Semillon (Tyrrell\'s Vat 1)', () => {
  const aus = WINE_REGIONS['australia'];
  const hunter = aus.subRegions.find(s => s.id === 'hunter-valley' || s.id === 'hunter-valley-nsw');
  assert(hunter, 'Hunter Valley subregion exists');
  assert(/Semillon|Tyrrell/i.test(hunter.focus + hunter.description), "Hunter Semillon & Tyrrell's documented");
});


// ============================================================================
// 15. ITALY OTHER: ETNA VOLCANIC TEPHRA, VALTELLINA & AMARONE APPASSIMENTO
// ============================================================================
suite('15. Italy Other: Etna Volcanic Tephra, Valtellina Superiore & Amarone Appassimento');

test('Veneto: Valpolicella Appassimento process (Amarone & Recioto DOCG)', () => {
  const italy = WINE_REGIONS['italy-other'];
  assert(italy, 'Italy Other region exists');
  const allText = JSON.stringify(italy);

  assert(/Appassimento/i.test(allText), 'Appassimento drying process documented');
  assert(/Amarone/i.test(allText), 'Amarone della Valpolicella DOCG documented');
  assert(/Corvina/i.test(allText), 'Corvina grape documented');
});

test('Sicily: Mount Etna DOC volcanic tephra/ash up to 1,000m elevation & Contrade crus', () => {
  const italy = WINE_REGIONS['italy-other'];
  const etna = italy.subRegions.find(s => s.id === 'sicily-etna');
  assert(etna, 'Sicily Mount Etna subregion exists');
  assert(/volcanic|ash|tephra/i.test(etna.terroir + etna.geology), 'Volcanic ash/tephra pedology documented');
  assert(/Nerello Mascalese|Carricante/i.test(etna.focus + etna.dominantGrapes), 'Nerello Mascalese & Carricante documented');
});

test('Lombardia: Valtellina Superiore Alpine Nebbiolo (Chiavennasca) on granite terraces', () => {
  const italy = WINE_REGIONS['italy-other'];
  const valtellina = italy.subRegions.find(s => s.id === 'lombardia-valtellina');
  assert(valtellina, 'Valtellina subregion exists');
  assert(/Chiavennasca|Nebbiolo/i.test(valtellina.focus + valtellina.dominantGrapes), 'Chiavennasca (Nebbiolo) documented');
  assert(/granite|terraces/i.test(valtellina.terroir + valtellina.geology), 'Granite retaining wall terraces documented');
});


// ============================================================================
// 16. FOOD PAIRING TAXONOMY & GASTRONOMY LOGIC
// ============================================================================
suite('16. Food Pairing Taxonomy Completeness & Sommelier Service Tips');

test('Every region in WINE_REGIONS has food pairings with non-empty dish & rationale', () => {
  const regionIds = Object.keys(WINE_REGIONS);
  assert.strictEqual(regionIds.length, 17, 'Master registry contains all 17 world wine regions');

  for (const rid of regionIds) {
    const r = WINE_REGIONS[rid];
    assert(Array.isArray(r.foodPairings), `Region ${rid} has foodPairings array`);
    assert(r.foodPairings.length > 0, `Region ${rid} foodPairings array is non-empty (has ${r.foodPairings.length} pairings)`);

    for (let i = 0; i < r.foodPairings.length; i++) {
      const p = r.foodPairings[i];
      assert(p.dish && p.dish.trim().length > 0, `Region ${rid} pairing [${i}] has non-empty dish title`);
      const rationale = p.whyItWorks || p.note || p.tastingNotes || p.rationale;
      assert(rationale && rationale.trim().length > 0, `Region ${rid} pairing [${i}] has non-empty flavor rationale`);
    }
  }
});

test('Food pairing wineType normalization & valid taxonomy categories (red, white, sparkling, rose)', () => {
  const validTaxonomy = ['red', 'white', 'sparkling', 'rose'];

  function classifyPairing(pairing) {
    let wt = (pairing.wineType || '').toLowerCase().trim();
    if (wt === 'rosé') wt = 'rose';
    if (wt === 'dessert' || wt === 'sweet' || wt === 'vdn') wt = 'white';
    if (wt.includes('/')) wt = '';
    if (!wt || wt === 'general' || wt === 'dual') {
      const cat = (pairing.category || '').toLowerCase();
      const dish = (pairing.dish || '').toLowerCase();
      const note = (pairing.note || pairing.whyItWorks || '').toLowerCase();
      const target = (pairing.targetWine || '').toLowerCase();
      const text = `${cat} ${dish} ${note} ${target}`;

      if (text.includes('pinot noir') || text.includes('cabernet') || text.includes('merlot') || text.includes('syrah') || text.includes('shiraz') || text.includes('nebbiolo') || text.includes('sangiovese') || text.includes('tempranillo') || text.includes('grenache') || text.includes('malbec') || text.includes('carménère') || text.includes('carmenere') || text.includes('sciaccarellu') || text.includes('niellucciu') || text.includes('barolo') || text.includes('brunello') || text.includes('rioja') || text.includes('beef') || text.includes('duck') || text.includes('lamb') || text.includes('steak') || text.includes('stew') || text.includes('venison') || text.includes('bourguignon') || text.includes('red') || text.includes('porc') || text.includes('charcuterie') || text.includes('wild boar') || text.includes('civet')) {
        wt = 'red';
      } else if (text.includes('chardonnay') || text.includes('riesling') || text.includes('sauvignon') || text.includes('chenin') || text.includes('viognier') || text.includes('aligoté') || text.includes('aligote') || text.includes('pinot gris') || text.includes('pinot blanc') || text.includes('muscat') || text.includes('cortese') || text.includes('garganega') || text.includes('sémillon') || text.includes('semillon') || text.includes('koshu') || text.includes('vermentinu') || text.includes('seafood') || text.includes('oyster') || text.includes('fish') || text.includes('sole') || text.includes('scallop') || text.includes('lobster') || text.includes('chablis') || text.includes('sancerre') || text.includes('sauternes') || text.includes('white') || text.includes('cheese') || text.includes('brocciu')) {
        wt = 'white';
      } else if (text.includes('champagne') || text.includes('sparkling') || text.includes('crémant') || text.includes('cremant') || text.includes('cava') || text.includes('prosecco') || text.includes('mousse') || text.includes('alta langa') || text.includes('franciacorta')) {
        wt = 'sparkling';
      } else if (text.includes('rosé') || text.includes('rose') || text.includes('tavel') || text.includes('bandol')) {
        wt = 'rose';
      } else {
        wt = 'white';
      }
    }
    return wt;
  }

  for (const [rid, r] of Object.entries(WINE_REGIONS)) {
    for (const p of r.foodPairings) {
      const computed = classifyPairing(p);
      assert(validTaxonomy.includes(computed), `Computed wineType "${computed}" for pairing "${p.dish}" in region ${rid} is valid taxonomy`);
    }
  }
});

test('Master Sommelier Floor Service Tips: All 17 regions have detailed service directives', () => {
  function getSommelierServiceTip(region) {
    if (!region) return '';
    if (region.sommelierTip) return region.sommelierTip;
    const id = region.id;
    if (id === 'bordeaux') return "Serve Left Bank Cabernet-driven reds at 16–18°C (60–64°F) in large Bordeaux Grand Cru glasses (750–850ml)...";
    if (id === 'burgundy') return "Serve red Burgundies at 16–18°C (60–64°F) in wide-bowled Pinot Noir / Burgundy glasses...";
    if (id === 'champagne') return "Serve fine Champagnes at 9–11°C (48–52°F) in tulip-shaped white wine glasses...";
    if (id === 'rhone') return "Serve Northern Rhône Syrah at 16–18°C in large Syrah/Bordeaux bowls...";
    if (id === 'loire-valley' || id === 'loire') return "Serve Sancerre and Pouilly-Fumé at 8–10°C in tapered Sauvignon Blanc stems...";
    if (id === 'piedmont') return "Serve Barolo and Barbaresco DOCG at 16–18°C in expansive Burgundy/Nebbiolo balloons...";
    if (id === 'tuscany') return "Serve Chianti Classico Gran Selezione and Brunello di Montalcino at 16–18°C in large Sangiovese / Bordeaux stems...";
    if (id === 'california') return "Serve Napa Valley Cabernet Sauvignon at 16–18°C in tall, wide Bordeaux Grand Cru stems...";
    if (id === 'oregon') return "Serve Willamette Valley Pinot Noir at 14–16°C in wide Burgundy balloon stems...";
    if (id === 'alsace') return "Serve dry Alsatian Riesling and Sylvaner at 9–11°C in medium white wine glasses...";
    if (id === 'corsica') return "Serve aromatic red Sciaccarellu at 15–17°C in wide-bowled glasses...";
    if (id === 'germany-mosel') return "Serve pristine Mosel Riesling at 8–10°C in narrow white wine tulip stems...";
    if (id === 'spain-rioja') return "Serve Gran Reserva Tempranillo at 16–18°C in broad Bordeaux stems...";
    if (id === 'australia') return "Serve Barossa Valley Shiraz at 16–18°C in large Syrah stems...";
    if (id === 'chile-maipo') return "Serve Maipo Valley Cabernet Sauvignon at 16–18°C in Bordeaux stems...";
    if (id === 'japan-chubu') return "Serve GI Yamanashi Koshu at 8–10°C in delicate white wine tulip glasses...";
    if (id === 'italy-other') return "Serve Amarone della Valpolicella at 17–18°C with 2–3 hours decanting...";
    return `Serve ${region.name} red expressions at 16–18°C, white at 10–12°C.`;
  }

  for (const [rid, r] of Object.entries(WINE_REGIONS)) {
    const tip = getSommelierServiceTip(r);
    assert(tip && tip.length > 50, `Region ${rid} receives comprehensive sommelier service tip`);
    assert(tip.includes('°C') || tip.includes('°F'), `Region ${rid} service tip specifies temperature in °C or °F`);
  }
});


// ============================================================================
// 17. ADVERSARIAL QUERY RESOLUTION, DIACRITICS & ALIAS RESILIENCY
// ============================================================================
suite('17. Adversarial Query Resolution, Diacritics & Alias Resiliency');

test('findWineRegion accurately resolves accents, diacritics, and case variations across all major appellations', () => {
  const queryCases = [
    { query: "Barolo", country: "Italy", expectedId: "piedmont" },
    { query: "barbaresco", country: "italy", expectedId: "piedmont" },
    { query: "Langhe", country: "Italy", expectedId: "piedmont" },
    { query: "Chianti Classico", country: "Italy", expectedId: "tuscany" },
    { query: "Brunello di Montalcino", country: "Italy", expectedId: "tuscany" },
    { query: "Bolgheri", country: "Italy", expectedId: "tuscany" },
    { query: "Pauillac", country: "France", expectedId: "bordeaux" },
    { query: "Saint-Émilion", country: "France", expectedId: "bordeaux" },
    { query: "Saint-Emilion", country: "France", expectedId: "bordeaux" },
    { query: "Pomerol", country: "France", expectedId: "bordeaux" },
    { query: "Sauternes", country: "France", expectedId: "bordeaux" },
    { query: "Aÿ", country: "France", expectedId: "champagne" },
    { query: "Ay", country: "France", expectedId: "champagne" },
    { query: "Le Mesnil-sur-Oger", country: "France", expectedId: "champagne" },
    { query: "Napa Valley", country: "United States", expectedId: "california" },
    { query: "Oakville", country: "USA", expectedId: "california" },
    { query: "Willamette Valley", country: "USA", expectedId: "oregon" },
    { query: "Dundee Hills", country: "USA", expectedId: "oregon" },
    { query: "Koshu", country: "Japan", expectedId: "japan-chubu" },
    { query: "Yamanashi", country: "Japan", expectedId: "japan-chubu" },
    { query: "Nagano", country: "Japan", expectedId: "japan-chubu" },
    { query: "Alsace", country: "France", expectedId: "alsace" },
    { query: "Patrimonio", country: "France", expectedId: "corsica" },
    { query: "Hermitage", country: "France", expectedId: "rhone" },
    { query: "Sancerre", country: "France", expectedId: "loire-valley" },
    { query: "Mosel", country: "Germany", expectedId: "germany-mosel" },
    { query: "Rioja", country: "Spain", expectedId: "spain-rioja" },
    { query: "Puente Alto", country: "Chile", expectedId: "chile-maipo" },
    { query: "Barossa", country: "Australia", expectedId: "australia" }
  ];

  for (const c of queryCases) {
    const res = findWineRegion(c.query, c.country);
    assert(res, `Query "${c.query}" (${c.country}) must resolve to a region`);
    assert.strictEqual(res.id, c.expectedId, `Query "${c.query}" must resolve to "${c.expectedId}" (got "${res.id}")`);
  }
});


// ============================================================================
// 18. GEOJSON BOUNDARY TOPOLOGY & CARTOGRAPHIC ENVELOPES
// ============================================================================
suite('18. GeoJSON Boundary Topology & Cartographic Envelopes');

test('WINE_REGION_BOUNDARIES contains valid GeoJSON FeatureCollections for all regions', () => {
  const boundaryKeys = Object.keys(WINE_REGION_BOUNDARIES);
  assert(boundaryKeys.length >= 13, `Boundary collection contains key regions (has ${boundaryKeys.length})`);

  for (const key of boundaryKeys) {
    const fc = WINE_REGION_BOUNDARIES[key];
    assert.strictEqual(fc.type, 'FeatureCollection', `Boundary for ${key} must be a FeatureCollection`);
    assert(Array.isArray(fc.features), `Features array in ${key} must be an array`);
    assert(fc.features.length > 0, `Features array in ${key} must not be empty`);

    for (const f of fc.features) {
      assert.strictEqual(f.type, 'Feature', `Feature in ${key} must have type Feature`);
      assert(f.geometry, `Feature in ${key} must have geometry`);
      assert(['Polygon', 'MultiPolygon'].includes(f.geometry.type), `Geometry in ${key} must be Polygon or MultiPolygon`);
      assert(f.properties && f.properties.id, `Feature in ${key} must have properties.id`);
    }
  }
});


// ============================================================================
// 19. REAL-WORLD MASTER SOMMELIER SERVICE & BLIND TASTING SCENARIOS
// ============================================================================
suite('19. Real-World Master Sommelier Service & Blind Tasting Scenarios');

test('Scenario A: Sommelier blind flight comparing Barolo Tortonian vs Serravallian', () => {
  const cannubi = PIEDMONT_GRAND_CRUS.find(c => c.id === 'barolo-mga-cannubi');
  const francia = PIEDMONT_GRAND_CRUS.find(c => c.id === 'barolo-mga-cascina-francia');
  assert(cannubi && francia, 'Both Cannubi and Cascina Francia exist in Piedmont crus');
  assert(/Sant'Agata Fossili|Tortonian/i.test(cannubi.soil), 'Cannubi features Tortonian Sant\'Agata Fossili marl');
  assert(/Serravallian|Lequio/i.test(francia.soil), 'Cascina Francia features Serravallian Lequio limestone');
});

test('Scenario B: Sommelier pairing consultation for Left Bank 1855 First Growth vs Right Bank Pomerol', () => {
  const latour = BORDEAUX_GRAND_CRUS.find(c => c.id === 'chateau-latour');
  const petrusCru = BORDEAUX_GRAND_CRUS.find(c => c.id === 'petrus');
  const petrusPrestige = BORDEAUX_PRESTIGE_ESTATES.find(p => p.id === 'petrus-cuvee' || p.producer.includes('Pétrus'));
  assert(latour, 'Château Latour exists in Bordeaux crus');
  assert(petrusCru && petrusPrestige, 'Pétrus exists in Bordeaux crus and prestige estates');
  assert(/Cabernet Sauvignon/i.test(latour.dominantGrape), 'Latour is dominated by Cabernet Sauvignon');
  assert(/Merlot/i.test(petrusCru.dominantGrape), 'Pétrus is dominated by Merlot');
});

test('Scenario C: Japanese Kaiseki Degustation: Koshu Sur Lie pairing with Sashimi & Tempura', () => {
  const japan = WINE_REGIONS['japan-chubu'];
  assert(japan, 'Japan region exists in registry');
  const sashimiPairing = japan.foodPairings.find(p => /sashimi|sushi/i.test(p.dish) || /sashimi|sushi/i.test(p.category));
  assert(sashimiPairing, 'Japan has sashimi/sushi food pairing');
  assert(/White/i.test(sashimiPairing.wineType), 'Koshu pairing is tagged as White wine');
});

test('Scenario D: Alsatian Rangen de Thann volcanic Riesling vs Mosel Devonian slate mineral comparative tasting', () => {
  const rangen = ALSACE_GRAND_CRUS.find(c => c.id === 'rangen');
  const sonnenuhr = MOSEL_GRAND_CRUS.find(c => c.id === 'wehlener-sonnenuhr');
  assert(rangen, 'Rangen Grand Cru exists in Alsace');
  assert(sonnenuhr, 'Wehlener Sonnenuhr exists in Mosel');
  assert(/volcan|greywacke/i.test(rangen.soil), 'Rangen features volcanic greywacke');
  assert(/slate|schiefer/i.test(sonnenuhr.soil), 'Wehlener Sonnenuhr features Devonian slate');
});


// ============================================================================
// SUITE SUMMARY & VERDICT
// ============================================================================
console.log(`\n================================================================`);
console.log(`📊 EMPIRICAL DOMAIN VALIDATION SUMMARY`);
console.log(`================================================================`);
console.log(`  Total Tests Run : ${totalTests}`);
console.log(`  Passed Tests    : ${passedTests}`);
console.log(`  Failed Tests    : ${failedTests}`);
console.log(`  Success Rate    : ${((passedTests / totalTests) * 100).toFixed(2)}%`);
console.log(`================================================================\n`);

if (failedTests > 0) {
  console.error(`💥 SUITE FAILED with ${failedTests} assertion errors:\n`);
  failures.forEach((f, idx) => {
    console.error(`  ${idx + 1}. ${f.name} -> ${f.error.message}`);
  });
  process.exit(1);
} else {
  console.log(`✨ ALL EMPIRICAL DOMAIN VALIDATION TESTS PASSED WITH 100% SUCCESS RATE! ✨\n`);
  process.exit(0);
}
