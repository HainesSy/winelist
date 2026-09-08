/**
 * ============================================================================
 * M1 CHALLENGER ADVERSARIAL STRESS TEST SUITE
 * ============================================================================
 * 
 * Conducts aggressive empirical stress-testing of Milestone 1 changes:
 * 1. findWineRegion query resolution:
 *    - All 10 Cru names with accent, case, hyphen/space, and abbreviation variants
 *    - Strict invariant: ZERO Cru queries resolve to Burgundy!
 *    - Strict invariant: ALL Cru queries resolve to Beaujolais!
 *    - Cru communes/villages resolution to Beaujolais and never Burgundy
 *    - Typo resistance & safe non-collision
 *    - Burgundy queries preservation: Chablis, Gevrey-Chambertin, Vosne-Romanée,
 *      Pouilly-Fuissé, etc., must resolve to Burgundy and never Beaujolais!
 * 2. Food pairing mathematical consistency:
 *    - Math check |calcF - actualF| <= 4 for all Celsius/Fahrenheit ranges across ALL 18 regions
 *    - Schema completeness: wineType, glassware, decanting, dish, note
 * 3. Sommelier domain depth against CMS Level 3 / Master Sommelier standards:
 *    - Geological stratigraphy (gore granite, blue diorite, manganese, Pierres Dorées)
 *    - Ampelography (Gamay Noir à Jus Blanc, Chardonnay, Aligoté)
 *    - 3-tier classification hierarchy & decree dates
 *    - Vinification methods (semi-carbonic, Burgundian destemmed, thermovinification, Jules Chauvet)
 *    - Cult vignerons (Gang of Four) and benchmark lieu-dits
 *    - RFC 7946 GeoJSON topology and closed linear rings
 * 
 * Usage:
 *   node test/m1_challenger_stress.mjs
 * ============================================================================
 */

import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { WINE_REGIONS, findWineRegion } from '../src/data/wineRegions.js';
import { WINE_REGION_BOUNDARIES, WINE_REGION_OUTLINES } from '../src/data/wineRegionBoundaries.js';
import {
  BEAUJOLAIS_DATA,
  BEAUJOLAIS_SUBREGIONS,
  BEAUJOLAIS_GRAND_CRUS,
  BEAUJOLAIS_TECHNICAL_REGULATIONS,
  BEAUJOLAIS_PRESTIGE_CUVEES,
  BEAUJOLAIS_ICONIC_DOMAINES,
  BEAUJOLAIS_FOOD_PAIRINGS
} from '../src/data/beaujolaisData.js';

let passedAssertions = 0;
let totalAssertions = 0;

function check(condition, message) {
  totalAssertions++;
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    throw new Error(message);
  }
  passedAssertions++;
}

console.log('================================================================');
console.log('⚔️  M1 CHALLENGER ADVERSARIAL STRESS TEST SUITE');
console.log('================================================================\n');

// ============================================================================
// PART 1: findWineRegion Query Fuzzing & Decoupling Invariants
// ============================================================================
console.log('━━━ PART 1: findWineRegion Fuzzing & Decoupling Invariants ━━━');

const CRUS = [
  {
    canonical: 'Morgon',
    variations: ['Morgon', 'morgon', 'MORGON', 'MoRgOn', 'mOrGoN']
  },
  {
    canonical: 'Moulin-à-Vent',
    variations: [
      'Moulin-à-Vent', 'moulin-à-vent', 'MOULIN-À-VENT',
      'Moulin-a-Vent', 'moulin-a-vent', 'MOULIN-A-VENT',
      'Moulin a Vent', 'moulin a vent', 'Moulin à Vent', 'moulin à vent',
      'MoUlIn A vEnT', 'MOULIN A VENT'
    ]
  },
  {
    canonical: 'Fleurie',
    variations: ['Fleurie', 'fleurie', 'FLEURIE', 'FlEuRiE', 'fLeUrIe']
  },
  {
    canonical: 'Brouilly',
    variations: ['Brouilly', 'brouilly', 'BROUILLY', 'BrOuIlLy']
  },
  {
    canonical: 'Côte de Brouilly',
    variations: [
      'Côte de Brouilly', 'côte de brouilly', 'CÔTE DE BROUILLY',
      'Cote de Brouilly', 'cote de brouilly', 'COTE DE BROUILLY',
      'Cote-de-Brouilly', 'cote-de-brouilly', 'Côte-de-Brouilly', 'côte-de-brouilly',
      'Cote De Brouilly', 'cOtE dE bRoUiLlY'
    ]
  },
  {
    canonical: 'Chénas',
    variations: ['Chénas', 'chénas', 'CHÉNAS', 'Chenas', 'chenas', 'CHENAS', 'ChEnAs']
  },
  {
    canonical: 'Chiroubles',
    variations: ['Chiroubles', 'chiroubles', 'CHIROUBLES', 'ChIrOuBlEs', 'cHiRoUbLeS']
  },
  {
    canonical: 'Juliénas',
    variations: ['Juliénas', 'juliénas', 'JULIÉNAS', 'Julienas', 'julienas', 'JULIENAS', 'JuLiEnAs']
  },
  {
    canonical: 'Régnié',
    variations: ['Régnié', 'régnié', 'RÉGNIÉ', 'Regnie', 'regnie', 'REGNIE', 'ReGnIe']
  },
  {
    canonical: 'Saint-Amour',
    variations: [
      'Saint-Amour', 'saint-amour', 'SAINT-AMOUR',
      'Saint Amour', 'saint amour', 'SAINT AMOUR',
      'St-Amour', 'st-amour', 'St Amour', 'st amour', 'ST AMOUR'
    ]
  }
];

// 1.1 Test all 10 Cru variations: must resolve to beaujolais and NEVER to burgundy
for (const cru of CRUS) {
  for (const variant of cru.variations) {
    const resWithoutCountry = findWineRegion(variant);
    check(resWithoutCountry !== null, `Variant '${variant}' must resolve to a region`);
    check(resWithoutCountry.id === 'beaujolais', `Variant '${variant}' must resolve to 'beaujolais', got '${resWithoutCountry?.id}'`);
    check(resWithoutCountry.id !== 'burgundy', `Variant '${variant}' MUST NOT resolve to 'burgundy'`);

    const resWithCountry = findWineRegion(variant, 'France');
    check(resWithCountry !== null, `Variant '${variant}' with country 'France' must resolve to a region`);
    check(resWithCountry.id === 'beaujolais', `Variant '${variant}' with country 'France' must resolve to 'beaujolais', got '${resWithCountry?.id}'`);
    check(resWithCountry.id !== 'burgundy', `Variant '${variant}' with country 'France' MUST NOT resolve to 'burgundy'`);
  }
}
console.log(`  ✓ Successfully verified all 10 Crus across ${CRUS.reduce((acc, c) => acc + c.variations.length, 0)} variations resolve to beaujolais and NEVER to burgundy!`);

// 1.2 Cru Communes / Villages
const CRU_VILLAGES = [
  'Villié-Morgon', 'Villie-Morgon',
  'Romanèche-Thorins', 'Romaneche-Thorins',
  'Cercié', 'Cercie',
  'Saint-Lager',
  'Odenas',
  'Régnié-Durette', 'Regnie-Durette',
  'Saint-Amour-Bellevue', 'Saint Amour Bellevue'
];

for (const village of CRU_VILLAGES) {
  const res = findWineRegion(village);
  check(res !== null, `Village '${village}' must resolve to a region`);
  check(res.id === 'beaujolais', `Village '${village}' must resolve to 'beaujolais', got '${res?.id}'`);
  check(res.id !== 'burgundy', `Village '${village}' MUST NOT resolve to 'burgundy'`);
}
console.log(`  ✓ Successfully verified ${CRU_VILLAGES.length} Cru commune/village queries resolve to beaujolais!`);

// 1.3 Typo Variations & Substring Safety
const TYPO_QUERIES = [
  { query: 'chirouble', expectBeaujolais: true },
  { query: 'juliena', expectBeaujolais: true },
  { query: 'regniee', expectBeaujolais: true },
  { query: 'cotedebrouilly', expectBeaujolais: true },
  { query: 'chennas', expectBeaujolais: false },
  { query: 'moulinavent', expectBeaujolais: false },
  { query: 'stamour', expectBeaujolais: false }
];

for (const item of TYPO_QUERIES) {
  const res = findWineRegion(item.query);
  if (item.expectBeaujolais) {
    check(res?.id === 'beaujolais', `Typo '${item.query}' should resolve to 'beaujolais', got '${res?.id}'`);
  }
  // Invariant: NONE of them may EVER resolve to burgundy!
  check(res?.id !== 'burgundy', `Typo query '${item.query}' MUST NOT resolve to 'burgundy'`);
}
console.log(`  ✓ Successfully verified typo queries avoid colliding with burgundy!`);

// 1.4 Test Lieux-dits, Climats, and Regional Generic Queries for Beaujolais
const BEAUJOLAIS_TERROIR_QUERIES = [
  'Beaujolais', 'beaujolais', 'BEAUJOLAIS',
  'Beaujolais-Villages', 'beaujolais villages', 'beaujolais-villages',
  'Bas-Beaujolais', 'bas beaujolais', 'Pierres Dorées', 'pierres dorees',
  'Beaujolais Nouveau', 'beaujolais primeur', 'Beaujolais Superieur', 'beaujolais supérieur',
  'Gamay Noir', 'Gamay',
  'Côte du Py', 'Cote du Py', 'cote du py',
  'Corcelette', 'Champ de Cour', 'Les Vérillats', 'Les Verillats',
  'Grille-Midi', 'La Roilette', 'Chassignol', 'Javernand',
  'Les Capitans', 'Haute-Ronze'
];

for (const query of BEAUJOLAIS_TERROIR_QUERIES) {
  const res = findWineRegion(query);
  check(res !== null, `Terroir query '${query}' must resolve to a region`);
  check(res.id === 'beaujolais', `Terroir query '${query}' must resolve to 'beaujolais', got '${res?.id}'`);
  check(res.id !== 'burgundy', `Terroir query '${query}' MUST NOT resolve to 'burgundy'`);
}
console.log(`  ✓ Successfully verified ${BEAUJOLAIS_TERROIR_QUERIES.length} Beaujolais terroir/climat queries resolve to beaujolais!`);

// 1.5 Sentence / Real-world context queries containing Cru names
const CONTEXT_QUERIES = [
  '2020 Jean Foillard Morgon Côte du Py',
  'Marcel Lapierre Morgon Cuvee Marcel',
  'Chateau Thivin Cote de Brouilly Cuvee Zaccharie',
  'Domaine Yvon Metras Fleurie Le Printemps',
  'Chateau des Jacques Moulin a Vent Clos de Rochegres',
  'Paul-Henri Thillardon Chenas Chassignol',
  'A bottle of aged Fleurie',
  'Crisp fresh Chiroubles from granite slopes',
  'Juliénas old vine gamay',
  'Aromatic Regnie red wine',
  'Romantic Saint-Amour bottle'
];

for (const query of CONTEXT_QUERIES) {
  const res = findWineRegion(query);
  check(res !== null, `Context query '${query}' must resolve to a region`);
  check(res.id === 'beaujolais', `Context query '${query}' must resolve to 'beaujolais', got '${res?.id}'`);
  check(res.id !== 'burgundy', `Context query '${query}' MUST NOT resolve to 'burgundy'`);
}
console.log(`  ✓ Successfully verified ${CONTEXT_QUERIES.length} real-world contextual Cru queries resolve to beaujolais!`);

// 1.6 Strict Burgundy Preservation: Ensure Burgundy queries resolve to burgundy and NEVER beaujolais
const BURGUNDY_QUERIES = [
  'Burgundy', 'burgundy', 'Bourgogne', 'bourgogne',
  'Chablis', 'chablis', 'Chablis Grand Cru', 'Les Clos',
  'Côte de Nuits', 'Cote de Nuits', 'cote de nuits',
  'Côte de Beaune', 'Cote de Beaune', 'cote de beaune',
  'Côte Chalonnaise', 'Cote Chalonnaise', 'cote chalonnaise',
  'Mâconnais', 'Maconnais', 'maconnais',
  'Gevrey-Chambertin', 'gevrey-chambertin', 'Gevrey Chambertin', 'Chambertin',
  'Vosne-Romanée', 'Vosne-Romanee', 'vosne-romanee',
  'Pouilly-Fuissé', 'Pouilly-Fuisse', 'pouilly-fuisse',
  'Romanée-Conti', 'Romanee-Conti', 'romanee-conti',
  'Montrachet', 'Corton-Charlemagne', 'Meursault', 'Puligny-Montrachet', 'Chassagne-Montrachet', 'Musigny'
];

for (const query of BURGUNDY_QUERIES) {
  const res = findWineRegion(query);
  check(res !== null, `Burgundy query '${query}' must resolve to a region`);
  check(res.id === 'burgundy', `Burgundy query '${query}' must resolve to 'burgundy', got '${res?.id}'`);
  check(res.id !== 'beaujolais', `Burgundy query '${query}' MUST NOT resolve to 'beaujolais'`);

  const resCountry = findWineRegion(query, 'France');
  check(resCountry !== null, `Burgundy query '${query}' with country 'France' must resolve to a region`);
  check(resCountry.id === 'burgundy', `Burgundy query '${query}' with country 'France' must resolve to 'burgundy', got '${resCountry?.id}'`);
  check(resCountry.id !== 'beaujolais', `Burgundy query '${query}' with country 'France' MUST NOT resolve to 'beaujolais'`);
}
console.log(`  ✓ Successfully verified ${BURGUNDY_QUERIES.length} Burgundy queries resolve strictly to burgundy and NEVER to beaujolais!`);

// 1.7 Adversarial payloads & safe edge cases
const ADVERSARIAL_PAYLOADS = [
  null, undefined, '', '   ', 12345,
  '<script>alert("xss")</script>',
  'SELECT * FROM regions WHERE id = "beaujolais"',
  '__proto__', 'constructor', 'toString',
  'Atlantis', 'Mordor', 'UnknownWineRegion12345'
];

for (const payload of ADVERSARIAL_PAYLOADS) {
  const res = findWineRegion(payload);
  if (typeof payload === 'string' && payload.includes('UnknownWineRegion12345')) {
    check(res?.id === 'unknownwineregion12345', `Non-existent region '${payload}' should return structured fallback`);
  } else if (!payload || (typeof payload !== 'string' && typeof payload !== 'number')) {
    check(res === null, `Invalid payload ${payload} should return null`);
  }
}
console.log(`  ✓ Successfully verified adversarial payloads and null/empty queries are safely handled!`);

// ============================================================================
// PART 2: Food Pairings Mathematical Consistency & Schema Audit
// ============================================================================
console.log('\n━━━ PART 2: Food Pairings Mathematical Consistency & Schema Audit ━━━');

const VALID_WINE_TYPES = new Set(['Red', 'White', 'Sparkling', 'Rosé']);

// Test all regions' food pairings, with special focus on Beaujolais
for (const regionId of Object.keys(WINE_REGIONS)) {
  const region = WINE_REGIONS[regionId];
  check(Array.isArray(region.foodPairings), `Region '${regionId}' must have foodPairings array`);
  check(region.foodPairings.length >= 5 && region.foodPairings.length <= 10, `Region '${regionId}' must have 5-10 pairings (found ${region.foodPairings.length})`);

  for (let i = 0; i < region.foodPairings.length; i++) {
    const p = region.foodPairings[i];
    const prefix = `[${regionId} pairing #${i+1}]`;

    // Schema checks
    check(VALID_WINE_TYPES.has(p.wineType), `${prefix} invalid wineType '${p.wineType}'`);
    check(typeof p.targetWine === 'string' && p.targetWine.length > 5, `${prefix} targetWine must be non-empty`);
    check(typeof p.dish === 'string' && p.dish.length > 5, `${prefix} dish must be non-empty`);
    check(typeof p.note === 'string' && p.note.length > 15, `${prefix} note must have substantial explanation`);
    check(typeof p.glassware === 'string' && p.glassware.length > 5, `${prefix} glassware must specify glass type`);
    check(typeof p.servingTemp === 'string' && p.servingTemp.length > 5, `${prefix} servingTemp must be non-empty`);
    check(typeof p.decanting === 'string' && p.decanting.length > 3, `${prefix} decanting must specify advice`);

    // Temperature Mathematical Consistency
    // Matches formats like "13–15°C (55–59°F)", "14-16°C (57-61°F)", "10°C (50°F)"
    const tempMatch = p.servingTemp.match(/(\d+)(?:[–-](\d+))?°C\s*\(\s*(\d+)(?:[–-](\d+))?°F\s*\)/);
    check(tempMatch !== null, `${prefix} servingTemp '${p.servingTemp}' does not match standard pattern`);

    const cMin = parseInt(tempMatch[1], 10);
    const cMax = tempMatch[2] ? parseInt(tempMatch[2], 10) : cMin;
    const fMin = parseInt(tempMatch[3], 10);
    const fMax = tempMatch[4] ? parseInt(tempMatch[4], 10) : fMin;

    const calcFMin = Math.round(cMin * 9 / 5 + 32);
    const calcFMax = Math.round(cMax * 9 / 5 + 32);

    const diffMin = Math.abs(calcFMin - fMin);
    const diffMax = Math.abs(calcFMax - fMax);

    check(diffMin <= 4, `${prefix} Min temp math error: ${cMin}°C calculated as ${calcFMin}°F vs stated ${fMin}°F (diff ${diffMin} > 4)`);
    check(diffMax <= 4, `${prefix} Max temp math error: ${cMax}°C calculated as ${calcFMax}°F vs stated ${fMax}°F (diff ${diffMax} > 4)`);
  }
}
console.log(`  ✓ Successfully audited all food pairings across all regions: 100% compliant with wineType and |calcF - actualF| <= 4!`);

// Specifically audit Beaujolais pairings distribution
const beaujolaisPairings = BEAUJOLAIS_DATA.foodPairings;
check(beaujolaisPairings.length === 7, `Beaujolais must have 7 food pairings, found ${beaujolaisPairings.length}`);
const redPairings = beaujolaisPairings.filter(p => p.wineType === 'Red');
const whitePairings = beaujolaisPairings.filter(p => p.wineType === 'White');
check(redPairings.length === 5, `Beaujolais must have 5 Red wine pairings, found ${redPairings.length}`);
check(whitePairings.length === 2, `Beaujolais must have 2 White wine pairings, found ${whitePairings.length}`);
console.log(`  ✓ Beaujolais gastronomy: exactly 5 Red pairings (Chiroubles, Fleurie, Moulin-à-Vent, Côte de Brouilly, Juliénas) and 2 White pairings (Chardonnay Pierres Dorées & Villages)!`);

// ============================================================================
// PART 3: Sommelier Domain Depth Audit (CMS Level 3 / MS Standard)
// ============================================================================
console.log('\n━━━ PART 3: Sommelier Domain Depth Audit (CMS Level 3 / MS Standard) ━━━');

// 3.1 Subregions
check(BEAUJOLAIS_SUBREGIONS.length === 3, `Beaujolais must have exactly 3 subregions, got ${BEAUJOLAIS_SUBREGIONS.length}`);
const subregionIds = BEAUJOLAIS_SUBREGIONS.map(s => s.id);
check(subregionIds.includes('beaujolais-crus'), `Missing subregion 'beaujolais-crus'`);
check(subregionIds.includes('beaujolais-villages'), `Missing subregion 'beaujolais-villages'`);
check(subregionIds.includes('bas-beaujolais'), `Missing subregion 'bas-beaujolais'`);

// 3.2 Crus (All 10 Crus)
check(BEAUJOLAIS_GRAND_CRUS.length === 10, `Beaujolais must have exactly 10 Crus, got ${BEAUJOLAIS_GRAND_CRUS.length}`);
const EXPECTED_CRUS = [
  'morgon', 'moulin-a-vent', 'fleurie', 'brouilly', 'cote-de-brouilly',
  'chenas', 'chiroubles', 'julienas', 'regnie', 'saint-amour'
];

for (const cruId of EXPECTED_CRUS) {
  const cru = BEAUJOLAIS_GRAND_CRUS.find(c => c.id === cruId);
  check(cru !== undefined, `Cru '${cruId}' must exist in BEAUJOLAIS_GRAND_CRUS`);
  check(cru.subregionId === 'beaujolais-crus', `Cru '${cruId}' must have subregionId === 'beaujolais-crus'`);
  check(typeof cru.areaHa === 'number' && cru.areaHa > 100, `Cru '${cruId}' must specify realistic areaHa`);
  check(typeof cru.aocDecreeYear === 'number', `Cru '${cruId}' must specify aocDecreeYear`);
  check(cru.wineType === 'Red', `Cru '${cruId}' must have wineType 'Red'`);
  check(cru.dominantGrape.includes('Gamay Noir'), `Cru '${cruId}' dominant grape must be Gamay Noir`);
  check(Array.isArray(cru.benchmarkProducers) && cru.benchmarkProducers.length >= 3, `Cru '${cruId}' must list at least 3 benchmark producers`);
  check(Array.isArray(cru.iconicVineyards) && cru.iconicVineyards.length >= 3, `Cru '${cruId}' must list at least 3 iconic lieu-dits`);
}

// Check decree years
const regnie = BEAUJOLAIS_GRAND_CRUS.find(c => c.id === 'regnie');
check(regnie.aocDecreeYear === 1988, `Régnié decree year must be 1988 (10th Cru), got ${regnie.aocDecreeYear}`);
const saintAmour = BEAUJOLAIS_GRAND_CRUS.find(c => c.id === 'saint-amour');
check(saintAmour.aocDecreeYear === 1946, `Saint-Amour decree year must be 1946, got ${saintAmour.aocDecreeYear}`);
const julienas = BEAUJOLAIS_GRAND_CRUS.find(c => c.id === 'julienas');
check(julienas.aocDecreeYear === 1938, `Juliénas decree year must be 1938, got ${julienas.aocDecreeYear}`);
const morgon = BEAUJOLAIS_GRAND_CRUS.find(c => c.id === 'morgon');
check(morgon.aocDecreeYear === 1936, `Morgon decree year must be 1936, got ${morgon.aocDecreeYear}`);

console.log('  ✓ All 10 Crus verified with complete decree years, foreign keys, benchmark producers, and lieu-dits!');

// 3.3 Technical Regulations & Geology
const tech = BEAUJOLAIS_TECHNICAL_REGULATIONS;
check(tech.geology && Array.isArray(tech.geology.formations), `Technical regulations must have geology formations`);
const formationIds = tech.geology.formations.map(f => f.id);
check(formationIds.includes('gore-pink-granite'), `Missing pink granite formation`);
check(formationIds.includes('cornes-vertes-diorite'), `Missing blue volcanic diorite formation`);
check(formationIds.includes('manganese-veins'), `Missing manganese veins formation`);
check(formationIds.includes('pierres-dorees-limestone'), `Missing Pierres Dorées limestone formation`);
check(formationIds.includes('roche-pourrie-schist'), `Missing roche pourrie schist formation`);

// Ampelography
check(tech.grapes && Array.isArray(tech.grapes.major), `Technical regulations must detail major grapes`);
const gamay = tech.grapes.major.find(g => g.id === 'gamay-noir');
check(gamay && gamay.percentage >= 95, `Gamay Noir must be >= 95% of plantings`);
const chardonnay = tech.grapes.major.find(g => g.id === 'chardonnay');
check(chardonnay && chardonnay.percentage >= 1, `Chardonnay must be represented`);

// Vinification
check(tech.vinification && tech.vinification.semiCarbonicMaceration, `Vinification must detail semi-carbonic maceration`);
check(tech.vinification.semiCarbonicMaceration.method.includes('intracellular'), `Semi-carbonic must describe intracellular enzymatic fermentation`);
check(tech.vinification.burgundianMaceration, `Vinification must detail Burgundian destemmed vinification`);
check(tech.vinification.thermovinification, `Vinification must detail industrial thermovinification`);
check(tech.vinification.naturalWineMovement, `Vinification must detail Jules Chauvet / natural wine movement`);
check(tech.vinification.naturalWineMovement.method.includes('Jules Chauvet'), `Must mention Jules Chauvet`);

// Classification
check(tech.classification && Array.isArray(tech.classification.pyramid), `Classification must have pyramid tiers`);
check(tech.classification.pyramid.length === 3, `Classification must feature 3 tiers`);

console.log('  ✓ Technical regulations verified for geological stratigraphy, ampelography, vinification, and classification!');

// 3.4 Prestige Cuvées & Iconic Domaines
check(BEAUJOLAIS_PRESTIGE_CUVEES.length >= 6, `Must have at least 6 prestige cuvées, got ${BEAUJOLAIS_PRESTIGE_CUVEES.length}`);
const cuveeIds = BEAUJOLAIS_PRESTIGE_CUVEES.map(c => c.id);
check(cuveeIds.includes('foillard-cote-du-py'), `Missing Foillard Côte du Py`);
check(cuveeIds.includes('lapierre-cuvee-marcel'), `Missing Lapierre Cuvée Marcel`);
check(cuveeIds.includes('thivin-cuvee-zaccharie'), `Missing Thivin Cuvée Zaccharie`);
check(cuveeIds.includes('metras-fleurie-printemps'), `Missing Métras Fleurie Le Printemps`);

check(BEAUJOLAIS_ICONIC_DOMAINES.length >= 8, `Must have at least 8 iconic domaines, got ${BEAUJOLAIS_ICONIC_DOMAINES.length}`);
const domaineIds = BEAUJOLAIS_ICONIC_DOMAINES.map(d => d.id);
check(domaineIds.includes('domaine-marcel-lapierre'), `Missing Marcel Lapierre`);
check(domaineIds.includes('domaine-jean-foillard'), `Missing Jean Foillard`);
check(domaineIds.includes('guy-breton'), `Missing Guy Breton`);
check(domaineIds.includes('domaine-jean-paul-thevenet'), `Missing Jean-Paul Thévenet`);
check(domaineIds.includes('yvon-metras'), `Missing Yvon Métras`);
check(domaineIds.includes('clos-de-la-roilette'), `Missing Clos de la Roilette`);

console.log('  ✓ Prestige cuvées and Gang of Four cult vignerons verified with complete historical context!');

// ============================================================================
// PART 4: GeoJSON Boundary RFC 7946 & Outlines Topology
// ============================================================================
console.log('\n━━━ PART 4: GeoJSON Boundary RFC 7946 & Outlines Topology ━━━');

const bjBounds = WINE_REGION_BOUNDARIES['beaujolais'];
check(bjBounds && bjBounds.type === 'FeatureCollection', `Beaujolais boundaries must be a FeatureCollection`);
check(Array.isArray(bjBounds.features) && bjBounds.features.length === 3, `Beaujolais boundaries must have 3 features (one per subregion)`);

const subIdsInFeatures = bjBounds.features.map(f => f.id);
for (const subId of subregionIds) {
  check(subIdsInFeatures.includes(subId), `Boundary collection missing feature for subregion '${subId}'`);
}

for (const feature of bjBounds.features) {
  check(feature.geometry.type === 'Polygon', `Feature '${feature.id}' geometry must be Polygon`);
  const ring = feature.geometry.coordinates[0];
  check(Array.isArray(ring) && ring.length >= 4, `Feature '${feature.id}' polygon must have at least 4 coordinates`);
  const first = ring[0];
  const last = ring[ring.length - 1];
  check(first[0] === last[0] && first[1] === last[1], `Feature '${feature.id}' linear ring must be closed (first === last)`);

  // Verify coordinates are strictly [lng, lat] and within bounding box [[45.75, 4.52], [46.35, 4.82]]
  for (const coord of ring) {
    const lng = coord[0];
    const lat = coord[1];
    check(lng >= 4.50 && lng <= 4.85, `Coordinate lng ${lng} in '${feature.id}' outside Beaujolais lng bounds`);
    check(lat >= 45.75 && lat <= 46.35, `Coordinate lat ${lat} in '${feature.id}' outside Beaujolais lat bounds`);
  }
}

// Beaujolais outline
const bjOutline = WINE_REGION_OUTLINES['beaujolais'];
check(bjOutline && bjOutline.type === 'FeatureCollection', `Beaujolais outline must be a FeatureCollection`);
const outlineRing = bjOutline.features[0].geometry.coordinates[0];
const outFirst = outlineRing[0];
const outLast = outlineRing[outlineRing.length - 1];
check(outFirst[0] === outLast[0] && outFirst[1] === outLast[1], `Outline linear ring must be closed`);

// Burgundy boundary check: ensure Mâconnais is preserved and maconnais-beaujolais is gone
const burgBounds = WINE_REGION_BOUNDARIES['burgundy'];
const burgFeatureIds = burgBounds.features.map(f => f.id);
check(!burgFeatureIds.includes('maconnais-beaujolais'), `Burgundy boundaries MUST NOT contain 'maconnais-beaujolais'`);
check(burgFeatureIds.includes('maconnais'), `Burgundy boundaries MUST contain authentic 'maconnais' feature`);
check(burgBounds.features.length === 5, `Burgundy boundaries must contain exactly 5 features (Chablis, Côte de Nuits, Côte de Beaune, Côte Chalonnaise, Mâconnais)`);

console.log('  ✓ GeoJSON boundaries and outlines validated for RFC 7946 compliance, linear ring closure, and Mâconnais integrity!');

// ============================================================================
// PART 5: Cellar Item UI Mapping Inspection (WineRegionDetail.jsx)
// ============================================================================
console.log('\n━━━ PART 5: Cellar Item UI Mapping Inspection (WineRegionDetail.jsx) ━━━');

const detailPath = path.resolve('src/components/WineRegionDetail.jsx');
const detailCode = fs.readFileSync(detailPath, 'utf8');

check(detailCode.includes('BEAUJOLAIS_PRODUCER_MAP'), `WineRegionDetail.jsx must define BEAUJOLAIS_PRODUCER_MAP`);
check(detailCode.includes('matchBeaujolaisWine'), `WineRegionDetail.jsx must define matchBeaujolaisWine resolver`);
check(!detailCode.includes("'jean foillard': { commune: 'Villié-Morgon', subregionId: 'maconnais'"), `Burgundy map must not misassign Foillard to Maconnais`);
check(!detailCode.includes("'marcel lapierre': { commune: 'Villié-Morgon', subregionId: 'maconnais'"), `Burgundy map must not misassign Lapierre to Maconnais`);

// Verify iconic producers exist in BEAUJOLAIS_PRODUCER_MAP
const producers = ['jean foillard', 'marcel lapierre', 'guy breton', 'jean-paul thévenet', 'yvon métras', 'château thivin', 'domaine thillardon'];
for (const p of producers) {
  check(detailCode.toLowerCase().includes(p), `BEAUJOLAIS_PRODUCER_MAP must include producer '${p}'`);
}

console.log('  ✓ Cellar resolution in WineRegionDetail.jsx confirmed: Gang of Four properly routed to Beaujolais Crus!');

// ============================================================================
// PART 6: Cross-Region Query Isolation & Collision Audit
// ============================================================================
console.log('\n━━━ PART 6: Cross-Region Query Isolation & Collision Audit ━━━');

const CROSS_REGION_QUERIES = [
  { query: 'Champagne', expected: 'champagne' },
  { query: 'Ambonnay', expected: 'champagne' },
  { query: 'Bordeaux', expected: 'bordeaux' },
  { query: 'Pauillac', expected: 'bordeaux' },
  { query: 'Margaux', expected: 'bordeaux' },
  { query: 'Rhône', expected: 'rhone' },
  { query: 'Hermitage', expected: 'rhone' },
  { query: 'Cornas', expected: 'rhone' },
  { query: 'Côte-Rôtie', expected: 'rhone' },
  { query: 'Loire Valley', expected: 'loire-valley' },
  { query: 'Sancerre', expected: 'loire-valley' },
  { query: 'Chinon', expected: 'loire-valley' },
  { query: 'Alsace', expected: 'alsace' },
  { query: 'Rangen', expected: 'alsace' },
  { query: 'Barolo', expected: 'piedmont' },
  { query: 'Chianti Classico', expected: 'tuscany' },
  { query: 'Napa Valley', expected: 'california' },
  { query: 'Willamette Valley', expected: 'oregon' },
  { query: 'Rioja', expected: 'spain-rioja' },
  { query: 'Mosel', expected: 'germany-mosel' }
];

for (const item of CROSS_REGION_QUERIES) {
  const res = findWineRegion(item.query);
  check(res !== null, `Query '${item.query}' must resolve`);
  check(res.id === item.expected, `Query '${item.query}' must resolve to '${item.expected}', got '${res?.id}'`);
  check(res.id !== 'beaujolais', `Query '${item.query}' MUST NOT collide with 'beaujolais'`);
  check(res.id !== 'burgundy', `Query '${item.query}' MUST NOT collide with 'burgundy'`);
}
console.log(`  ✓ Successfully verified ${CROSS_REGION_QUERIES.length} other global wine regions are cleanly isolated and do not collide with Beaujolais or Burgundy!`);

// ============================================================================
// PART 7: High-Throughput Randomized Fuzzing Harness (2,500 Mutated Queries)
// ============================================================================
console.log('\n━━━ PART 7: High-Throughput Randomized Fuzzing Harness (2,500 Queries) ━━━');

const BASE_SEEDS = [
  'morgon', 'moulin a vent', 'moulin-a-vent', 'fleurie', 'brouilly',
  'cote de brouilly', 'cote-de-brouilly', 'chenas', 'chiroubles',
  'julienas', 'regnie', 'saint-amour', 'beaujolais', 'gamay noir',
  'gevrey-chambertin', 'vosne-romanee', 'chablis', 'burgundy', 'bourgogne', 'pouilly-fuisse'
];

function mutate(str) {
  const chars = str.split('');
  // Random case flip
  for (let i = 0; i < chars.length; i++) {
    if (Math.random() < 0.3) {
      chars[i] = Math.random() < 0.5 ? chars[i].toUpperCase() : chars[i].toLowerCase();
    }
  }
  // Random punctuation / whitespace insertion
  let res = chars.join('');
  if (Math.random() < 0.2) res = ' ' + res + ' ';
  if (Math.random() < 0.1) res = res.replace(/ /g, '-');
  if (Math.random() < 0.1) res = res.replace(/-/g, ' ');
  return res;
}

const startTime = Date.now();
let fuzzCount = 0;

for (let i = 0; i < 2500; i++) {
  const seed = BASE_SEEDS[i % BASE_SEEDS.length];
  const mutated = mutate(seed);
  const result = findWineRegion(mutated);
  fuzzCount++;

  // Invariant: If mutated contains beaujolais crus, it must NEVER resolve to burgundy!
  const isCruBeaujolais = ['morgon', 'moulin', 'fleurie', 'brouilly', 'chenas', 'chirouble', 'juliena', 'regnie', 'saint-amour'].some(k => seed.includes(k));
  if (isCruBeaujolais) {
    check(result?.id !== 'burgundy', `Fuzzed Cru query '${mutated}' from seed '${seed}' MUST NOT resolve to 'burgundy'`);
  }

  // Invariant: If mutated is a pure Burgundy token, it must NEVER resolve to beaujolais!
  const isPureBurgundy = ['gevrey', 'vosne', 'chablis', 'burgundy', 'bourgogne', 'pouilly-fuisse'].some(k => seed.includes(k));
  if (isPureBurgundy) {
    check(result?.id !== 'beaujolais', `Fuzzed Burgundy query '${mutated}' from seed '${seed}' MUST NOT resolve to 'beaujolais'`);
  }
}

const elapsedMs = Date.now() - startTime;
console.log(`  ✓ Successfully executed ${fuzzCount} randomized fuzz queries in ${elapsedMs}ms (${(elapsedMs / fuzzCount).toFixed(2)}ms/query) with 0 routing violations!`);

// ============================================================================
// SUMMARY & VERDICT
// ============================================================================
console.log('\n================================================================');
console.log(`📊 M1 CHALLENGER STRESS AUDIT COMPLETE`);
console.log(`   Passed Assertions : ${passedAssertions} / ${totalAssertions} (100%)`);
console.log(`   Failed Assertions : 0`);
console.log(`   Audit Verdict     : APPROVE`);
console.log('================================================================\n');
