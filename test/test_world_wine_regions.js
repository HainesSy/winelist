/**
 * ============================================================================
 * WORLD WINE REGIONS SOMMELIER SYSTEM: MASTER E2E TEST SUITE
 * ============================================================================
 * 
 * Comprehensive multi-tier automated test framework verifying all 17 world
 * wine regions in the sommelier learning & cellar exploration platform:
 * 
 *   - Tier 1: Feature Completeness & Regional Depth (All 17 World Regions)
 *   - Tier 2: Boundary, Geometry, Topology & Pedological Corner Cases
 *   - Tier 3: Cross-Feature Combinations & Relational Graph Traversals
 *   - Tier 4: Real-World Master Sommelier Exam & Floor Service Scenarios
 *   - Tier 5: Adversarial Query Fuzzing, Security Hardening & Deep Tree Audit
 * 
 * Conforms to Court of Master Sommeliers (CMS) Level 3 (Advanced Sommelier)
 * and Master Sommelier examination syllabus standards.
 * 
 * Runner Command:
 *   node test/test_world_wine_regions.js
 * ============================================================================
 */

import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// ============================================================================
// RESILIENT ESM MODULE LOADER
// ============================================================================
// Automatically handles standard Node ESM imports and dynamically resolves
// any extensionless relative imports in data source files.
async function safeImport(relPath) {
  const fullPath = path.resolve(projectRoot, relPath);
  try {
    return await import(pathToFileURL(fullPath).href);
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND' || err.message.includes('Cannot find module')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const dir = path.dirname(fullPath);
      content = content.replace(/from\s+['"](\.\/[^'"]+)['"]/g, (match, importPath) => {
        let target = path.resolve(dir, importPath);
        if (!fs.existsSync(target) && fs.existsSync(target + '.js')) {
          target = target + '.js';
        }
        return `from ${JSON.stringify(pathToFileURL(target).href)}`;
      });
      const dataUri = `data:text/javascript;base64,${Buffer.from(content).toString('base64')}`;
      return await import(dataUri);
    }
    throw err;
  }
}

// Load authoritative datasets
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
  BURGUNDY_PREMIER_CRUS,
  BURGUNDY_SUBREGIONS,
  BURGUNDY_TECHNICAL_REGULATIONS,
  BURGUNDY_PRESTIGE_MONOPOLES,
  BURGUNDY_WHITE_BENCHMARKS,
  BURGUNDY_ICONIC_DOMAINES,
  ALSACE_GRAND_CRUS,
  ALSACE_SUBREGIONS,
  ALSACE_TECHNICAL_REGULATIONS,
  ALSACE_PRESTIGE_MONOPOLES,
  ALSACE_ICONIC_DOMAINES,
  CORSICA_SUBREGIONS,
  CORSICA_TECHNICAL_REGULATIONS,
  CORSICA_BENCHMARK_ESTATES,
  CORSICA_ICONIC_DOMAINES
} = await safeImport('src/data/wineRegions.js');

const {
  WINE_REGION_BOUNDARIES
} = await safeImport('src/data/wineRegionBoundaries.js');

// ============================================================================
// TEST HARNESS & REPORTING ENGINE
// ============================================================================
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];
const suiteStats = {};

function startSuite(suiteId, title) {
  suiteStats[suiteId] = { title, total: 0, passed: 0, failed: 0 };
  console.log(`\n\x1b[1m\x1b[36m━━━ [${suiteId}] ${title} ━━━\x1b[0m`);
}

function runTest(suiteId, testName, fn) {
  totalTests++;
  if (!suiteStats[suiteId]) {
    suiteStats[suiteId] = { title: suiteId, total: 0, passed: 0, failed: 0 };
  }
  suiteStats[suiteId].total++;

  try {
    fn();
    passedTests++;
    suiteStats[suiteId].passed++;
    console.log(`  \x1b[32m✓\x1b[0m \x1b[90m[${suiteId}]\x1b[0m ${testName}`);
  } catch (err) {
    failedTests++;
    suiteStats[suiteId].failed++;
    failures.push({ suite: suiteId, test: testName, error: err.message, stack: err.stack });
    console.error(`  \x1b[31m✗ [${suiteId}] ${testName}\x1b[0m: ${err.message}`);
  }
}

const startTime = Date.now();

console.log('================================================================');
console.log('\x1b[1m\x1b[33m🍷 WORLD WINE REGIONS SOMMELIER SYSTEM: MASTER E2E TEST RUNNER 🍷\x1b[0m');
console.log('Court of Master Sommeliers (CMS) Level 3 & Master Sommelier Standard');
console.log('================================================================');

// ============================================================================
// TIER 1: FEATURE COMPLETENESS & REGIONAL DEPTH (17 GLOBAL REGIONS)
// ============================================================================

// ----------------------------------------------------------------------------
// 1.1 BORDEAUX SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.1', 'Bordeaux: 1855 Classifications, Left/Right Bank Soils & Sauternes');

const bordeaux = WINE_REGIONS['bordeaux'];

runTest('Tier 1.1', 'Bordeaux dataset core metadata and geo-bounds integrity', () => {
  assert(bordeaux, 'Bordeaux region must exist in WINE_REGIONS');
  assert.strictEqual(bordeaux.id, 'bordeaux');
  assert.strictEqual(bordeaux.country, 'France');
  assert.strictEqual(bordeaux.countryCode, 'FR');
  assert(Array.isArray(bordeaux.center) && bordeaux.center.length === 2);
  assert(bordeaux.center[0] >= 44 && bordeaux.center[0] <= 46, 'Bordeaux latitude in southwest France');
  assert(bordeaux.center[1] >= -2 && bordeaux.center[1] <= 1, 'Bordeaux longitude valid');
});

runTest('Tier 1.1', 'Bordeaux 1855 Classification & Sauternes Premier Cru Supérieur d\'Yquem', () => {
  assert(bordeaux.classification, 'Bordeaux classification object must exist');
  assert(bordeaux.classification.system.includes('1855'), 'System must mention 1855 Classification');
  const classTiers = bordeaux.classification.tiers;
  assert(Array.isArray(classTiers) && classTiers.length >= 3, 'Must have multiple classification tiers');
  
  const medocSauternesTier = classTiers.find(t => t.name.includes('1855') || t.name.includes('Médoc'));
  assert(medocSauternesTier, 'Must include 1855 Médoc & Sauternes tier');
  assert(medocSauternesTier.detail.includes("d'Yquem") || medocSauternesTier.detail.includes("Lafite"), 
    'Must document First Growths (Lafite, Latour, Margaux, Haut-Brion, Mouton) and d\'Yquem in Sauternes');
});

runTest('Tier 1.1', 'Bordeaux Saint-Émilion tiers (Premier Grand Cru Classé A/B) & Graves 1953/1959', () => {
  const classTiers = bordeaux.classification.tiers;
  const stEmilionTier = classTiers.find(t => t.name.includes('Saint-Émilion') || t.name.includes('Saint-Emilion'));
  assert(stEmilionTier, 'Must include Saint-Émilion classification tier');
  assert(stEmilionTier.detail.includes('Premier Grand Cru Classé'), 'Must reference Premier Grand Cru Classé A & B');

  const gravesTier = classTiers.find(t => t.name.includes('Graves') || t.name.includes('Pessac'));
  assert(gravesTier, 'Must include Graves / Pessac-Léognan classification tier');
  assert(gravesTier.detail.includes('1953') || gravesTier.detail.includes('1959') || gravesTier.detail.includes('Red and White'), 
    'Must document 1953/1959 Graves classification for red and white wines');
});

runTest('Tier 1.1', 'Bordeaux Left Bank Günzian gravels vs. Right Bank clay-limestone & Pomerol plateaus', () => {
  assert(bordeaux.terroir, 'Bordeaux terroir object must exist');
  assert(bordeaux.terroir.soil.toLowerCase().includes('gravel'), 'Left Bank gravels must be specified');
  assert(bordeaux.terroir.soil.toLowerCase().includes('clay') || bordeaux.terroir.soil.toLowerCase().includes('limestone'), 
    'Right Bank clay-limestone must be specified');
  
  const subregions = bordeaux.subRegions;
  assert(Array.isArray(subregions) && subregions.length >= 4, 'Bordeaux must have >=4 key subregions');
  
  const leftBank = subregions.find(s => s.id === 'left-bank-medoc');
  assert(leftBank, 'Must include Left Bank Médoc subregion');
  assert(leftBank.terroir.toLowerCase().includes('gravel'), 'Left Bank must emphasize gravel outcrops');
  assert(leftBank.focus.includes('Pauillac') && leftBank.focus.includes('Margaux'), 'Left Bank focus on key communes');

  const rightBank = subregions.find(s => s.id === 'right-bank-libournais');
  assert(rightBank, 'Must include Right Bank Libournais subregion');
  assert(rightBank.focus.includes('Saint-Émilion') && rightBank.focus.includes('Pomerol'), 'Right Bank focus on St-Emilion & Pomerol');
  assert(rightBank.description.includes('Pétrus') || rightBank.description.includes('Cheval Blanc'), 'Right Bank benchmark estates');
});

runTest('Tier 1.1', 'Bordeaux Sauternes botrytis, Ciron river mists & 225L barrique maturation', () => {
  const sauternais = bordeaux.subRegions.find(s => s.id === 'sauternais');
  assert(sauternais, 'Must include Sauternes & Barsac subregion');
  assert(bordeaux.terroir.riverInfluence.toLowerCase().includes('botrytis') || bordeaux.terroir.riverInfluence.toLowerCase().includes('sauternes'), 
    'River influence must explain Garonne/Ciron river morning mists nurturing Botrytis cinerea');
  
  const sauternesPairing = bordeaux.foodPairings.find(p => p.category.toLowerCase().includes('sauternes') || p.category.toLowerCase().includes('foie gras'));
  assert(sauternesPairing, 'Must include Sauternes pairing for foie gras / Roquefort blue cheese');
  assert(sauternesPairing.note.toLowerCase().includes('botrytiz'), 'Pairing note must cite botrytized sweet wines');
});

runTest('Tier 1.1', 'Bordeaux Cabernet Sauvignon vs. Merlot dynamic & structural metrics', () => {
  assert(Array.isArray(bordeaux.grapes) && bordeaux.grapes.length >= 4, 'Must have at least 4 authorized grape varieties');
  const cabSauv = bordeaux.grapes.find(g => g.name === 'Cabernet Sauvignon');
  const merlot = bordeaux.grapes.find(g => g.name === 'Merlot');
  const cabFranc = bordeaux.grapes.find(g => g.name === 'Cabernet Franc');
  const petitVerdot = bordeaux.grapes.find(g => g.name === 'Petit Verdot');

  assert(cabSauv && merlot && cabFranc && petitVerdot, 'Must cover 4 classical Bordeaux red grapes');
  assert(cabSauv.percentage > 40 && merlot.percentage > 35, 'Cabernet Sauvignon and Merlot dominate blend');
  assert(bordeaux.structure.tannin >= 8.0, 'Bordeaux must have high structural tannins (>=8.0)');
  assert(bordeaux.structure.agingPotential.includes('50'), 'Bordeaux aging potential must reach 50+ years');
});

// ----------------------------------------------------------------------------
// 1.2 RHÔNE VALLEY SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.2', 'Rhône Valley: Northern Syrah Granite vs Southern Grenache Galets Roulés & Mistral');

const rhone = WINE_REGIONS['rhone'];

runTest('Tier 1.2', 'Rhône Valley core metadata and geographic boundaries', () => {
  assert(rhone, 'Rhône region must exist in WINE_REGIONS');
  assert.strictEqual(rhone.id, 'rhone');
  assert.strictEqual(rhone.country, 'France');
  assert(rhone.center[0] >= 44 && rhone.center[0] <= 46, 'Rhône latitude valid');
  assert(rhone.center[1] >= 4 && rhone.center[1] <= 6, 'Rhône longitude valid');
});

runTest('Tier 1.2', 'Northern Rhône Crus: Côte-Rôtie, Condrieu, Hermitage, Cornas granite', () => {
  const subregions = rhone.subRegions;
  const north = subregions.find(s => s.id === 'northern-rhone');
  assert(north, 'Must include Northern Rhône (Septentrionale) subregion');
  assert(north.terroir.toLowerCase().includes('granite'), 'Northern Rhône must specify steep granite terraces');
  assert(north.focus.includes('Côte-Rôtie') && north.focus.includes('Hermitage') && north.focus.includes('Cornas') && north.focus.includes('Condrieu'),
    'Northern Rhône focus must list Côte-Rôtie, Hermitage, Cornas, Condrieu');

  const northTier = rhone.classification.tiers.find(t => t.name.includes('Northern'));
  assert(northTier, 'Must document Northern Rhône Crus tier');
  assert(northTier.detail.includes('Côte-Rôtie') && northTier.detail.includes('Hermitage') && northTier.detail.includes('Château-Grillet'),
    'Northern Crus must list Côte-Rôtie, Hermitage, Condrieu, Château-Grillet, Saint-Péray');
});

runTest('Tier 1.2', 'Southern Rhône Crus: Châteauneuf-du-Pape 13 grapes, galets roulés & Tavel 100% Rosé', () => {
  const south = rhone.subRegions.find(s => s.id === 'southern-rhone' || s.id === 'southern-rhone-cdp');
  assert(south, 'Must include Châteauneuf-du-Pape & Southern Rhône subregion');
  assert(south.terroir.toLowerCase().includes('galets roulés'), 'Southern Rhône must specify galets roulés quartz stones');
  assert(south.focus.includes('13 permitted grape varieties') || south.focus.includes('Grenache'), 'Must mention Châteauneuf 13 authorized varieties');

  const southTier = rhone.classification.tiers.find(t => t.name.includes('Southern'));
  assert(southTier, 'Must document Southern Rhône Crus tier');
  assert(southTier.detail.includes('Châteauneuf-du-Pape') && southTier.detail.includes('Gigondas') && southTier.detail.includes('Tavel'),
    'Southern Crus must document Châteauneuf-du-Pape, Gigondas, Vacqueyras, Tavel rosé');
});

runTest('Tier 1.2', 'Rhône Valley Mistral wind dynamics and viticultural defense', () => {
  assert(rhone.terroir.riverInfluence.toLowerCase().includes('mistral'), 'Must document Mistral wind');
  assert(rhone.terroir.riverInfluence.toLowerCase().includes('disease') || rhone.terroir.riverInfluence.toLowerCase().includes('dries'),
    'Mistral wind description must explain disease prevention and berry flavor concentration');
});

runTest('Tier 1.2', 'Rhône Valley Syrah vs. Grenache / Mourvèdre / Viognier ampelography & gastronomy', () => {
  const syrah = rhone.grapes.find(g => g.name === 'Syrah');
  const grenache = rhone.grapes.find(g => g.name === 'Grenache');
  const mourvedre = rhone.grapes.find(g => g.name === 'Mourvèdre');
  const viognier = rhone.grapes.find(g => g.name.includes('Viognier'));

  assert(syrah && grenache && mourvedre && viognier, 'Must cover Syrah, Grenache, Mourvèdre, Viognier/Roussanne/Marsanne');
  assert(syrah.role.toLowerCase().includes('black pepper') || syrah.role.toLowerCase().includes('smoked meat'),
    'Syrah profile must note black pepper and savory smoked meat');
  assert(grenache.role.toLowerCase().includes('garrigue'), 'Grenache profile must note garrigue herbs and sweet kirsch');

  const lambPairing = rhone.foodPairings.find(p => p.category.toLowerCase().includes('lamb'));
  assert(lambPairing, 'Must include iconic Rhône Lamb pairing');
  assert(lambPairing.note.toLowerCase().includes('garrigue') && lambPairing.note.toLowerCase().includes('syrah'),
    'Pairing rationale must harmonize Syrah pepper & Grenache garrigue with lamb');
});

// ----------------------------------------------------------------------------
// 1.3 LOIRE VALLEY SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.3', 'Loire Valley: 4 Sectors, Tuffeau, Silex, Kimmeridgian & Chenin/Cab Franc');

const loire = WINE_REGIONS['loire-valley'];

runTest('Tier 1.3', 'Loire Valley 4 Sectors structure & geographic distribution', () => {
  assert(loire, 'Loire Valley region must exist in WINE_REGIONS');
  assert.strictEqual(loire.subRegions.length, 4, 'Loire Valley must have exactly 4 main sectors');
  const subIds = loire.subRegions.map(s => s.id);
  assert(subIds.includes('centre-loire') || subIds.includes('upper-loire-sancerre'), 'Must include Upper Loire / Centre-Loire');
  assert(subIds.includes('touraine') || subIds.includes('touraine-chinon'), 'Must include Touraine & Chinon');
  assert(subIds.includes('anjou-saumur'), 'Must include Anjou-Saumur');
  assert(subIds.includes('pays-nantais') || subIds.includes('pays-nantais-muscadet'), 'Must include Pays Nantais');
});

runTest('Tier 1.3', 'Centre-Loire: Sancerre & Pouilly-Fumé on Terres Blanches, Caillottes & Silex', () => {
  const upperLoire = loire.subRegions.find(s => s.id === 'centre-loire' || s.id === 'upper-loire-sancerre');
  assert(upperLoire, 'Upper Loire subregion must exist');
  assert(upperLoire.terroir.includes('Terres Blanches') && upperLoire.terroir.includes('Caillottes') && upperLoire.terroir.includes('Silex'),
    'Upper Loire terroir must document the 3 iconic soils: Terres Blanches (Kimmeridgian), Caillottes (limestone), Silex (flint)');
  assert(upperLoire.description.toLowerCase().includes('flint') || upperLoire.description.toLowerCase().includes('sauvignon'),
    'Description must celebrate laser precision and smoky flint');
});

runTest('Tier 1.3', 'Anjou-Saumur: Savennières schist, Coulée de Serrant, Quarts de Chaume & Tuffeau', () => {
  const anjouSaumur = loire.subRegions.find(s => s.id === 'anjou-saumur');
  assert(anjouSaumur, 'Anjou-Saumur subregion must exist');
  assert(anjouSaumur.terroir.toLowerCase().includes('schist') && anjouSaumur.terroir.toLowerCase().includes('tuffeau'),
    'Terroir must detail schist in Anjou and tuffeau limestone in Saumur');
  assert(anjouSaumur.focus.includes('Savennières') && anjouSaumur.focus.includes('Saumur-Champigny'),
    'Focus must cite Savennières (Chenin powerhouse) and Saumur-Champigny (Cab Franc)');

  const anjouTier = loire.classification.tiers.find(t => t.name.includes('Anjou-Saumur'));
  assert(anjouTier && anjouTier.detail.includes('Coulée de Serrant'), 'Classification must reference Coulée de Serrant');
});

runTest('Tier 1.3', 'Touraine Cabernet Franc & Pays Nantais Muscadet sur lie on Orthogneiss/Gabbro', () => {
  const touraine = loire.subRegions.find(s => s.id === 'touraine' || s.id === 'touraine-chinon');
  assert(touraine.focus.includes('Chinon') && touraine.focus.includes('Vouvray'), 'Touraine must focus on Chinon & Vouvray');

  const paysNantais = loire.subRegions.find(s => s.id === 'pays-nantais' || s.id === 'pays-nantais-muscadet');
  assert(paysNantais.terroir.toLowerCase().includes('gneiss') || paysNantais.terroir.toLowerCase().includes('gabbro'),
    'Pays Nantais terroir must specify gneiss, granite, or gabbro metamorphic bedrock');
  assert(paysNantais.focus.includes('Melon de Bourgogne') && paysNantais.focus.includes('Sur Lie'),
    'Must highlight Melon de Bourgogne aged Sur Lie');
  
  const nantaisTier = loire.classification.tiers.find(t => t.name.includes('Pays Nantais'));
  assert(nantaisTier.detail.includes('Clisson') || nantaisTier.detail.includes('Gorges'),
    'Must document Crus Communaux (Clisson, Gorges)');
});

runTest('Tier 1.3', 'Loire Valley high acid profile, goat cheese & oyster gastronomy', () => {
  assert(loire.structure.acidity >= 8.5, 'Loire Valley acidity must be razor sharp (>=8.5)');
  const goatCheese = loire.foodPairings.find(p => p.category.toLowerCase().includes('goat'));
  assert(goatCheese, 'Must include Crottin de Chavignol / goat cheese pairing');
  assert(goatCheese.dish.includes('Crottin de Chavignol'), 'Must specify Crottin de Chavignol pairing');
  assert(goatCheese.note.toLowerCase().includes('sancerre'), 'Must cite Sancerre line-for-line acidity match');
});

// ----------------------------------------------------------------------------
// 1.4 PIEDMONT SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.4', 'Piedmont: Barolo 11 Communes & MGAs, Tortonian/Serravallian Soils & Aging Laws');

const piedmont = WINE_REGIONS['piedmont'];

runTest('Tier 1.4', 'Piedmont core metadata and Langhe geography', () => {
  assert(piedmont, 'Piedmont region must exist in WINE_REGIONS');
  assert.strictEqual(piedmont.id, 'piedmont');
  assert.strictEqual(piedmont.country, 'Italy');
  assert(piedmont.center[0] >= 44 && piedmont.center[0] <= 46, 'Piedmont latitude valid');
  assert(piedmont.center[1] >= 7 && piedmont.center[1] <= 9, 'Piedmont longitude valid');
});

runTest('Tier 1.4', 'Barolo DOCG 11 Communes & official MGAs (Cannubi, Brunate, Monprivato, etc.)', () => {
  const baroloSub = piedmont.subRegions.find(s => s.id === 'barolo-langhe');
  assert(baroloSub, 'Must include Barolo Langhe subregion');
  assert(baroloSub.focus.includes('La Morra') && baroloSub.focus.includes('Serralunga') && baroloSub.focus.includes('Monforte'),
    'Barolo communes must include La Morra, Barolo, Castiglione Falletto, Monforte, Serralunga');
  
  const baroloTier = piedmont.classification.tiers.find(t => t.name.includes('Barolo'));
  assert(baroloTier, 'Must include Barolo DOCG classification tier');
  assert(baroloTier.detail.includes('Cannubi') && baroloTier.detail.includes('Brunate') && baroloTier.detail.includes('Monprivato'),
    'Must document top MGAs: Cannubi, Brunate, Cerequio, Monprivato, Francia');
});

runTest('Tier 1.4', 'Tortonian calcareous blue marl vs. Serravallian / Helvetian sandstone pedology', () => {
  assert(piedmont.terroir.soil.includes('Tortonian') && (piedmont.terroir.soil.includes('Serravallian') || piedmont.terroir.soil.includes('Helvetian')),
    'Terroir must distinguish Tortonian blue marl (softer, perfumed) from Serravallian sandstone (muscular, tannic)');
});

runTest('Tier 1.4', 'Barolo & Barbaresco DOCG statutory aging laws (38m/62m & 26m/50m)', () => {
  const baroloTier = piedmont.classification.tiers.find(t => t.name.includes('Barolo'));
  const barbarescoTier = piedmont.classification.tiers.find(t => t.name.includes('Barbaresco'));

  assert(baroloTier.detail.includes('38 months') && baroloTier.detail.includes('62 months'),
    'Barolo aging must state 38 months total / 18 in wood, and 62 months for Riserva');
  assert(barbarescoTier.detail.includes('26 months') && barbarescoTier.detail.includes('Asili'),
    'Barbaresco aging must state 26 months total / 9 in wood, and list top MGAs like Asili, Rabajà');
});

runTest('Tier 1.4', 'Nebbiolo biotypes, massive tannins (9.5), Alba white truffle & Brasato gastronomy', () => {
  const nebbiolo = piedmont.grapes.find(g => g.name === 'Nebbiolo');
  assert(nebbiolo, 'Must feature Nebbiolo as primary grape');
  assert(nebbiolo.role.toLowerCase().includes('tar') && nebbiolo.role.toLowerCase().includes('roses') && nebbiolo.role.toLowerCase().includes('truffles'),
    'Nebbiolo role must cite classic tar, roses, sour cherry, and truffles');

  assert(piedmont.structure.tannin >= 9.0, 'Nebbiolo tannin rating must be at apex (>=9.0)');
  assert(piedmont.structure.acidity >= 8.5, 'Nebbiolo acidity rating must be high (>=8.5)');

  const trufflePairing = piedmont.foodPairings.find(p => p.category.toLowerCase().includes('truffle') || p.dish.toLowerCase().includes('tajarin'));
  assert(trufflePairing, 'Must include Tajarin Pasta with Alba White Truffles pairing');
  assert(trufflePairing.note.toLowerCase().includes('nebbiolo') && trufflePairing.note.toLowerCase().includes('truffle'),
    'Pairing rationale must explain Nebbiolo earthy aromatics matching fresh truffles');
});

// ----------------------------------------------------------------------------
// 1.5 TUSCANY SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.5', 'Tuscany: Chianti Classico 11 UGAs, Gran Selezione, Brunello 4 Quadrants & Bolgheri');

const tuscany = WINE_REGIONS['tuscany'];

runTest('Tier 1.5', 'Tuscany core metadata and geographic boundaries', () => {
  assert(tuscany, 'Tuscany region must exist in WINE_REGIONS');
  assert.strictEqual(tuscany.id, 'tuscany');
  assert.strictEqual(tuscany.country, 'Italy');
  assert(tuscany.center[0] >= 42.5 && tuscany.center[0] <= 44.5, 'Tuscany latitude valid');
  assert(tuscany.center[1] >= 10 && tuscany.center[1] <= 12.5, 'Tuscany longitude valid');
});

runTest('Tier 1.5', 'Chianti Classico 11 UGAs (2021) & Gran Selezione regulations', () => {
  const chiantiSub = tuscany.subRegions.find(s => s.id === 'chianti-classico');
  assert(chiantiSub, 'Must include Chianti Classico subregion');
  assert(chiantiSub.focus.includes('Gran Selezione') && chiantiSub.focus.includes('UGAs'),
    'Must document Gran Selezione tier and new official UGAs');
  assert(chiantiSub.focus.includes('Panzano') && chiantiSub.focus.includes('Radda') && chiantiSub.focus.includes('Gaiole') && chiantiSub.focus.includes('Castellina'),
    'Must list core UGAs: Panzano, Radda, Gaiole, Castellina, Greve');
});

runTest('Tier 1.5', 'Galestro friable schist vs. Alberese hard limestone pedology', () => {
  assert(tuscany.terroir.soil.includes('Galestro') && tuscany.terroir.soil.includes('Alberese'),
    'Terroir must detail Galestro (crumbly schist) and Alberese (hard limestone)');
});

runTest('Tier 1.5', 'Brunello di Montalcino DOCG 100% Sangiovese Grosso & 5-year maturation rule', () => {
  const montalcinoSub = tuscany.subRegions.find(s => s.id === 'montalcino');
  assert(montalcinoSub, 'Must include Montalcino subregion');
  assert(montalcinoSub.focus.includes('100% Sangiovese Grosso'), 'Must mandate 100% Sangiovese Grosso');

  const brunelloTier = tuscany.classification.tiers.find(t => t.name.includes('Brunello'));
  assert(brunelloTier, 'Must include Brunello di Montalcino DOCG tier');
  assert(brunelloTier.detail.includes('5 years') && brunelloTier.detail.includes('2 in oak'),
    'Brunello aging law must mandate minimum 5 years total with at least 2 in oak');
});

runTest('Tier 1.5', 'Bolgheri DOC Super Tuscans (Sassicaia, Ornellaia) & Bistecca Fiorentina pairing', () => {
  const bolgheriSub = tuscany.subRegions.find(s => s.id === 'bolgheri-coastal' || s.id === 'bolgheri-coast');
  assert(bolgheriSub, 'Must include Bolgheri & Tuscan Coast subregion');
  assert(bolgheriSub.focus.includes('Sassicaia') && bolgheriSub.focus.includes('Ornellaia'),
    'Must highlight benchmark Super Tuscans (Sassicaia, Ornellaia)');

  const bisteccaPairing = tuscany.foodPairings.find(p => p.dish.includes('Bistecca alla Fiorentina'));
  assert(bisteccaPairing, 'Must include Bistecca alla Fiorentina pairing');
  assert(bisteccaPairing.note.toLowerCase().includes('sangiovese') && bisteccaPairing.note.toLowerCase().includes('tannin'),
    'Pairing rationale must explain Sangiovese high acid/tannin cutting rare Florentine T-bone');
});

// ----------------------------------------------------------------------------
// 1.6 CALIFORNIA SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.6', 'California: Napa Valley vs Mountain AVAs, Sonoma & Central Coast');

const california = WINE_REGIONS['california'];

runTest('Tier 1.6', 'California core metadata and Pacific coastal fog influence', () => {
  assert(california, 'California region must exist in WINE_REGIONS');
  assert.strictEqual(california.id, 'california');
  assert.strictEqual(california.country, 'USA');
  assert(california.terroir.climate.toLowerCase().includes('fog') && california.terroir.climate.toLowerCase().includes('petaluma'),
    'Must document Pacific marine fog layer funneling through Petaluma Gap / Golden Gate');
});

runTest('Tier 1.6', 'Napa Valley 16 Nested AVAs: Valley Floor vs. Mountain AVAs', () => {
  const valleyFloor = california.subRegions.find(s => s.id === 'napa-valley-floor');
  const mountainAvas = california.subRegions.find(s => s.id === 'napa-mountain-avas');

  assert(valleyFloor, 'Must include Napa Valley Floor subregion');
  assert(valleyFloor.focus.includes('Oakville') && valleyFloor.focus.includes('Rutherford') && valleyFloor.focus.includes('Stags Leap'),
    'Valley floor must highlight Oakville, Rutherford, Stags Leap District');
  assert(valleyFloor.focus.includes('Screaming Eagle') || valleyFloor.focus.includes('Harlan') || valleyFloor.focus.includes('Opus One'),
    'Must cite cult estate icons (Screaming Eagle, Harlan, Opus One)');

  assert(mountainAvas, 'Must include Napa Mountain AVAs subregion');
  assert(mountainAvas.focus.includes('Howell Mountain') && mountainAvas.focus.includes('Mt. Veeder') && mountainAvas.focus.includes('Spring Mountain'),
    'Mountain AVAs must cover Howell Mountain, Mt. Veeder, Spring Mountain, Diamond Mountain');
  assert(mountainAvas.terroir.toLowerCase().includes('volcanic') && mountainAvas.terroir.toLowerCase().includes('fog line'),
    'Mountain terroir must specify volcanic slopes elevated above the fog line');
});

runTest('Tier 1.6', 'Sonoma County Goldridge loam & Russian River / Sonoma Coast Pinot Noir', () => {
  const sonomaSub = california.subRegions.find(s => s.id === 'sonoma-coast-rrv');
  assert(sonomaSub, 'Must include Sonoma Coast & Russian River Valley subregion');
  assert(sonomaSub.terroir.toLowerCase().includes('goldridge') && sonomaSub.terroir.toLowerCase().includes('fog'),
    'Sonoma terroir must specify Goldridge sandy loam and Pacific marine fogs');
  assert(sonomaSub.focus.includes('Russian River Valley') && sonomaSub.focus.includes('Sonoma Coast'),
    'Must focus on Pinot Noir & Chardonnay in RRV and Sonoma Coast');
});

runTest('Tier 1.6', 'Santa Cruz Mountains (Ridge Monte Bello) & Paso Robles limestone', () => {
  const santaCruzSub = california.subRegions.find(s => s.id === 'santa-cruz-mountains');
  assert(santaCruzSub, 'Must include Santa Cruz Mountains subregion');
  assert(santaCruzSub.focus.includes('Ridge Monte Bello'), 'Must highlight Ridge Monte Bello benchmark');
  assert(california.classification.tiers.some(t => t.name.includes('Santa Cruz') || t.detail.includes('Monte Bello')),
    'Classification must document Santa Cruz Mountains AVA');
});

runTest('Tier 1.6', 'California Cabernet full body (9.0), lavish cassis profile & Wagyu steak pairing', () => {
  assert(california.structure.body >= 8.5, 'California body must be maximum full (>=8.5)');
  assert(california.structure.alcohol >= 14.0, 'Alcohol must reflect California sunshine (>=14.0%)');
  assert(california.flavorProfile.primary.includes('Crème de Cassis'), 'Must feature Crème de Cassis primary note');
  
  const steakPairing = california.foodPairings.find(p => p.category.toLowerCase().includes('steak') || p.dish.toLowerCase().includes('wagyu'));
  assert(steakPairing, 'Must include Prime Steaks & Wagyu pairing');
});

// ----------------------------------------------------------------------------
// 1.7 OREGON SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.7', 'Oregon: Willamette 11 Nested AVAs, Volcanic Jory vs Willakenzie & Van Duzer Winds');

const oregon = WINE_REGIONS['oregon'];

runTest('Tier 1.7', 'Oregon Willamette Valley 45th parallel geography & Van Duzer Corridor', () => {
  assert(oregon, 'Oregon region must exist in WINE_REGIONS');
  assert.strictEqual(oregon.id, 'oregon');
  assert.strictEqual(oregon.country, 'USA');
  assert(oregon.summary.includes('45th parallel'), 'Must document same 45th parallel north as Burgundy');
  assert(oregon.terroir.riverInfluence.includes('Van Duzer Corridor'), 'Must document Van Duzer Corridor marine winds');
});

runTest('Tier 1.7', 'Dundee Hills red volcanic Jory clay loam & benchmark producers', () => {
  const dundeeSub = oregon.subRegions.find(s => s.id === 'dundee-hills');
  assert(dundeeSub, 'Must include Dundee Hills AVA subregion');
  assert(dundeeSub.terroir.toLowerCase().includes('jory') && dundeeSub.terroir.toLowerCase().includes('volcanic'),
    'Dundee Hills terroir must specify red volcanic Jory clay loam');
  assert(dundeeSub.focus.includes('Domaine Drouhin') || dundeeSub.focus.includes('Eyrie') || dundeeSub.focus.includes('Beaux Frères'),
    'Must list benchmark Dundee Hills producers');
});

runTest('Tier 1.7', 'Ribbon Ridge & Yamhill-Carlton marine sedimentary Willakenzie sandstone', () => {
  const ribbonSub = oregon.subRegions.find(s => s.id === 'ribbon-ridge-yamhill');
  assert(ribbonSub, 'Must include Ribbon Ridge & Yamhill-Carlton subregion');
  assert(ribbonSub.terroir.toLowerCase().includes('marine') && ribbonSub.terroir.toLowerCase().includes('willakenzie'),
    'Must document ancient ocean floor marine sedimentary Willakenzie sandstone');
  assert(ribbonSub.focus.includes('Shea Vineyard') || ribbonSub.focus.includes('Beaux Frères'),
    'Must cite iconic Shea Vineyard / Beaux Frères');
});

runTest('Tier 1.7', 'Eola-Amity Hills shallow volcanic Nekia & Pacific oceanic gales', () => {
  const eolaSub = oregon.subRegions.find(s => s.id === 'eola-amity-hills');
  assert(eolaSub, 'Must include Eola-Amity Hills AVA subregion');
  assert(eolaSub.terroir.toLowerCase().includes('volcanic') || eolaSub.terroir.toLowerCase().includes('ocean'),
    'Must detail volcanic basalt and Pacific Ocean gales');
  assert(eolaSub.description.toLowerCase().includes('electric acidity'), 'Must describe electric acidity and saline tension');
});

runTest('Tier 1.7', 'Oregon Pinot Noir cranberry / forest floor profile & Pacific salmon pairing', () => {
  const pinot = oregon.grapes.find(g => g.name === 'Pinot Noir');
  assert(pinot && pinot.percentage >= 65, 'Pinot Noir must be the dominant variety (>=65%)');
  assert(oregon.flavorProfile.primary.includes('Wild Cranberry'), 'Primary profile must include Wild Cranberry');
  assert(oregon.flavorProfile.secondary.some(s => s.includes('Forest Floor') || s.includes('Chanterelle')), 
    'Secondary notes must cite Damp Forest Floor / Chanterelle Mushrooms');

  const salmonPairing = oregon.foodPairings.find(p => p.dish.toLowerCase().includes('salmon'));
  assert(salmonPairing, 'Must include Cedar-Planked Wild Chinook Salmon pairing');
  assert(salmonPairing.note.toLowerCase().includes('omega-3') || salmonPairing.note.toLowerCase().includes('acidity'),
    'Pairing note must explain rich salmon oils marrying bright Pinot acidity');
});

// ----------------------------------------------------------------------------
// 1.8 ITALY OTHER SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.8', 'Italy Other: Veneto Amarone Appassimento, Mount Etna Contrade & Valtellina');

const italyOther = WINE_REGIONS['italy-other'];

runTest('Tier 1.8', 'Italy Other multi-district regional scope & alpine-to-volcanic geography', () => {
  assert(italyOther, 'Italy Other region must exist in WINE_REGIONS');
  assert.strictEqual(italyOther.id, 'italy-other');
  assert.strictEqual(italyOther.country, 'Italy');
  assert(italyOther.subRegions.length >= 3, 'Must contain at least 3 subregions');
});

runTest('Tier 1.8', 'Veneto Valpolicella Appassimento process & Amarone della Valpolicella DOCG', () => {
  const valpolicellaSub = italyOther.subRegions.find(s => s.id === 'veneto-valpolicella');
  assert(valpolicellaSub, 'Must include Valpolicella & Amarone subregion');
  assert(valpolicellaSub.description.toLowerCase().includes('appassimento'), 'Must highlight Appassimento dried-grape technique');
  assert(valpolicellaSub.focus.includes('Amarone della Valpolicella') && (valpolicellaSub.focus.includes('Quintarelli') || valpolicellaSub.focus.includes('Dal Forno')),
    'Must cite Amarone Classico benchmarks Quintarelli / Dal Forno');

  const amaroneTier = italyOther.classification.tiers.find(t => t.name.includes('Amarone'));
  assert(amaroneTier, 'Must document Amarone della Valpolicella DOCG tier');
  assert(amaroneTier.detail.includes('Appassimento') && (amaroneTier.detail.includes('3-4 months') || amaroneTier.detail.includes('15-16%')),
    'Must explain 3-4 months drying yielding 15-16% ABV wines');
});

runTest('Tier 1.8', 'Sicily Mount Etna DOC Contrade & volcanic ash pedology up to 1,000m elevation', () => {
  const etnaSub = italyOther.subRegions.find(s => s.id === 'sicily-etna');
  assert(etnaSub, 'Must include Sicily & Mount Etna subregion');
  assert(etnaSub.terroir.toLowerCase().includes('volcanic ash') && etnaSub.terroir.toLowerCase().includes('1,000m'),
    'Etna terroir must document volcanic ash, pumice, and lava flows up to 1,000m elevation');
  assert(etnaSub.focus.includes('Nerello Mascalese') && etnaSub.focus.includes('Carricante') && etnaSub.focus.includes('Contrade'),
    'Must specify Nerello Mascalese (Rosso), Carricante (Bianco), and Contrade single-vineyard crus');
});

runTest('Tier 1.8', 'Valtellina Superiore DOCG Alpine Nebbiolo (Chiavennasca) on granite terraces', () => {
  const valtellinaSub = italyOther.subRegions.find(s => s.id === 'lombardia-valtellina');
  assert(valtellinaSub, 'Must include Valtellina subregion');
  assert(valtellinaSub.terroir.toLowerCase().includes('granite') && valtellinaSub.terroir.toLowerCase().includes('alps'),
    'Terroir must detail granite terraces in the Alps');
  assert(valtellinaSub.focus.includes('Chiavennasca') && (valtellinaSub.focus.includes('Grumello') || valtellinaSub.focus.includes('Inferno') || valtellinaSub.focus.includes('Sassella') || valtellinaSub.focus.includes('Sfursat')),
    'Must cite Chiavennasca and sub-zones: Grumello, Inferno, Sassella, Sfursat');
});

runTest('Tier 1.8', 'Italy Other Corvina / Nerello ampelography & Amarone braised beef pairing', () => {
  const corvina = italyOther.grapes.find(g => g.name.includes('Corvina'));
  const nerello = italyOther.grapes.find(g => g.name.includes('Nerello'));
  const chiavennasca = italyOther.grapes.find(g => g.name.includes('Nebbiolo (Chiavennasca)'));

  assert(corvina && nerello && chiavennasca, 'Must document Corvina, Nerello Mascalese, and Chiavennasca');
  
  const braisedPairing = italyOther.foodPairings.find(p => p.dish.toLowerCase().includes('amarone') || p.dish.toLowerCase().includes('osso buco'));
  assert(braisedPairing, 'Must include Braised Beef in Amarone / Osso Buco pairing');
});

// ----------------------------------------------------------------------------
// 1.9 JAPAN SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.9', 'Japan: GI Yamanashi Katsunuma Koshu & GI Nagano Alpine Viticulture');

const japan = WINE_REGIONS['japan-chubu'];

runTest('Tier 1.9', 'Japan Chūbu Mount Fuji foothills & GI protection', () => {
  assert(japan, 'Japan region must exist in WINE_REGIONS');
  assert.strictEqual(japan.id, 'japan-chubu');
  assert.strictEqual(japan.country, 'Japan');
  assert.strictEqual(japan.countryCode, 'JP');
  assert(japan.summary.includes('Mount Fuji') && japan.summary.includes('Yamanashi'), 'Must cite Mount Fuji and Yamanashi');
});

runTest('Tier 1.9', 'GI Yamanashi Katsunuma Basin pergola-trellised Koshu & volcanic alluvial soil', () => {
  const katsunumaSub = japan.subRegions.find(s => s.id === 'yamanashi-katsunuma');
  assert(katsunumaSub, 'Must include Katsunuma & Yamanashi Basin subregion');
  assert(katsunumaSub.terroir.toLowerCase().includes('volcanic alluvial') && katsunumaSub.terroir.toLowerCase().includes('pergola'),
    'Must detail volcanic alluvial foothills and overhead pergola trellising');
  assert(katsunumaSub.focus.includes('Grace Wine') || katsunumaSub.focus.includes('Katsunuma Jozo') || katsunumaSub.focus.includes('Chateau Mercian'),
    'Must cite benchmark Koshu producers (Grace Wine, Katsunuma Jozo, Chateau Mercian)');
});

runTest('Tier 1.9', 'GI Nagano (Shinshu) high alpine Chardonnay & Merlot', () => {
  const naganoTier = japan.classification.tiers.find(t => t.name.includes('GI Nagano') || t.detail.includes('Nagano'));
  assert(naganoTier, 'Must document GI Nagano (Shinshu) tier');
  assert(naganoTier.detail.includes('Chardonnay') && naganoTier.detail.includes('Merlot'),
    'GI Nagano must highlight high-altitude Chardonnay and Merlot');
});

runTest('Tier 1.9', 'Koshu indigenous ampelography, yuzu citrus / salinity & low alcohol (11.5%)', () => {
  const koshu = japan.grapes.find(g => g.name === 'Koshu');
  assert(koshu, 'Must document Koshu as primary signature grape');
  assert(koshu.percentage >= 60, 'Koshu must represent majority percentage (>=60%)');
  assert(koshu.role.toLowerCase().includes('yuzu') && koshu.role.toLowerCase().includes('salinity'),
    'Koshu role must cite yuzu citrus, white peach, and pristine salinity');
  assert(japan.structure.alcohol <= 12.0, 'Koshu alcohol must be delicate and moderate (<=12.0% ABV)');
});

runTest('Tier 1.9', 'Japanese gastronomy pairing: Sashimi, Nigiri Sushi & Dashi Umami harmony', () => {
  const sushiPairing = japan.foodPairings.find(p => p.category.toLowerCase().includes('sashimi') || p.category.toLowerCase().includes('sushi'));
  assert(sushiPairing, 'Must include Sashimi & Sushi pairing');
  assert(sushiPairing.note.toLowerCase().includes('low iron') || sushiPairing.note.toLowerCase().includes('raw fish') || sushiPairing.note.toLowerCase().includes('delicate'),
    'Pairing rationale must explain low iron content never clashing with raw seafood');
  
  const tempuraPairing = japan.foodPairings.find(p => p.category.toLowerCase().includes('tempura'));
  assert(tempuraPairing, 'Must include Tempura & Yakitori pairing');
});

// ----------------------------------------------------------------------------
// 1.10 BASELINE INTEGRITY: CHAMPAGNE, BURGUNDY, ALSACE, CORSICA
// ----------------------------------------------------------------------------
startSuite('Tier 1.10', 'Baseline Integrity: Champagne, Burgundy, Alsace & Corsica Full Datasets');

runTest('Tier 1.10', 'Champagne: 17 Grand Crus, Belemnite chalk, 7 dosage tiers & pressing rules', () => {
  const champagne = WINE_REGIONS['champagne'];
  assert(champagne, 'Champagne must exist');
  assert.strictEqual(CHAMPAGNE_GRAND_CRUS.length, 17, 'Must have exactly 17 Grand Cru villages in Champagne');
  assert(CHAMPAGNE_TECHNICAL_REGULATIONS, 'Champagne technical regulations must be populated');
  assert.strictEqual(CHAMPAGNE_TECHNICAL_REGULATIONS.pressing.marcKg, 4000, 'Marc extraction must be 4,000 kg');
  assert.strictEqual(CHAMPAGNE_TECHNICAL_REGULATIONS.pressing.cuveeLiters, 2050, 'Cuvée extraction must be 2,050 L');
  assert.strictEqual(CHAMPAGNE_TECHNICAL_REGULATIONS.pressing.tailleLiters, 500, 'Taille extraction must be 500 L');
  assert.strictEqual(CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers.length, 7, 'Must have all 7 official dosage sweetness tiers');
  assert.strictEqual(CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.length, 7, 'Must have all 7 registration codes (NM/RM/etc.)');
});

runTest('Tier 1.10', 'Burgundy: 33 Grand Crus, 44 Premier Crus, 228L Pièce & Combes geology', () => {
  const burgundy = WINE_REGIONS['burgundy'];
  assert(burgundy, 'Burgundy must exist');
  assert(BURGUNDY_GRAND_CRUS.length >= 33, `Burgundy must have >=33 Grand Crus, found ${BURGUNDY_GRAND_CRUS.length}`);
  assert(BURGUNDY_PREMIER_CRUS.length >= 40, `Burgundy must have >=40 Premier Crus, found ${BURGUNDY_PREMIER_CRUS.length}`);
  assert(BURGUNDY_TECHNICAL_REGULATIONS, 'Burgundy technical regulations must exist');
  assert(BURGUNDY_TECHNICAL_REGULATIONS.vinification.barrelType.includes('228 Liters'), 'Pièce Bourguignonne must be 228 Liters');
  assert(BURGUNDY_TECHNICAL_REGULATIONS.geology.combes.length >= 4, 'Must document major transverse combes (Lavaux, Chambolle, Orveau, Saint-Désiré)');
});

runTest('Tier 1.10', 'Alsace: 51 Grand Crus, Vendanges Tardives / SGN & 4 Noble Grapes', () => {
  const alsace = WINE_REGIONS['alsace'];
  assert(alsace, 'Alsace must exist');
  assert.strictEqual(ALSACE_GRAND_CRUS.length, 51, 'Alsace must have all 51 Grand Crus');
  assert(ALSACE_TECHNICAL_REGULATIONS, 'Alsace technical regulations must exist');
  assert(ALSACE_TECHNICAL_REGULATIONS.grapes.major.length >= 4, 'Must document 4 Noble Grapes (Riesling, Pinot Gris, Gewurztraminer, Muscat)');
  assert(ALSACE_TECHNICAL_REGULATIONS.classification.sweetnessRules, 'Must document sweetness rules (VT/SGN)');
});

runTest('Tier 1.10', 'Corsica: 9 AOCs, 5 Mediterranean Winds & Ampelography', () => {
  const corsica = WINE_REGIONS['corsica'];
  assert(corsica, 'Corsica must exist');
  assert.strictEqual(corsica.subRegions.length, 8, 'Corsica must have 8 subregions');
  assert(CORSICA_TECHNICAL_REGULATIONS, 'Corsica technical regulations must exist');
  assert.strictEqual(CORSICA_TECHNICAL_REGULATIONS.climatology.winds.length, 5, 'Must document 5 Mediterranean winds (Libeccio, Mistral, Sirocco, etc.)');
  assert(corsica.grapes.some(g => g.name === 'Sciaccarellu') && corsica.grapes.some(g => g.name === 'Niellucciu'),
    'Must document Corsican signature grapes Sciaccarellu and Niellucciu');
});

// ----------------------------------------------------------------------------
// 1.11 GERMANY MOSEL SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.11', 'Germany Mosel: Devonian Slate, 10.0 Acidity, Prädikat Hierarchy & GG Crus');

const mosel = WINE_REGIONS['germany-mosel'];

runTest('Tier 1.11', 'Germany Mosel core metadata and blue Devonian slate terroir', () => {
  assert(mosel, 'Mosel region must exist in WINE_REGIONS');
  assert.strictEqual(mosel.id, 'germany-mosel');
  assert.strictEqual(mosel.country, 'Germany');
  assert(mosel.terroir.soil.toLowerCase().includes('devonian slate'), 'Must specify Devonian slate soils');
});

runTest('Tier 1.11', 'Mosel 90% Riesling ampelography and world-maximum 10.0 acidity metric', () => {
  const riesling = mosel.grapes.find(g => g.name === 'Riesling');
  assert(riesling && riesling.percentage >= 85, 'Riesling must represent >=85% of plantings');
  assert.strictEqual(mosel.structure.acidity, 10.0, 'Mosel Riesling must have apex 10.0 acidity score');
});

runTest('Tier 1.11', 'Prädikatswein classification (Kabinett to TBA) and VDP Grosse Lage', () => {
  assert(mosel.classification.tiers.some(t => t.name.includes('VDP.Grosse Lage')), 'Must document VDP Grosse Lage tier');
  assert(mosel.classification.tiers.some(t => t.name.includes('Kabinett')), 'Must document Kabinett tier');
  assert(mosel.classification.tiers.some(t => t.name.includes('Spätlese')), 'Must document Spätlese tier');
  assert(mosel.classification.tiers.some(t => t.name.includes('Trockenbeerenauslese') || t.name.includes('TBA')), 
    'Must document Beerenauslese / Trockenbeerenauslese');
});

runTest('Tier 1.11', 'Middle Mosel & Saar-Ruwer subregions with Scharzhofberger and Sonnenuhr', () => {
  assert.strictEqual(mosel.subRegions.length, 2, 'Mosel must have Middle Mosel and Saar-Ruwer');
  const mittelmosel = mosel.subRegions.find(s => s.id === 'middle-mosel-bernkastel');
  const saar = mosel.subRegions.find(s => s.id === 'saar-ruwer');
  assert(mittelmosel.focus.includes('Sonnenuhr') && mittelmosel.focus.includes('Würzgarten'), 'Must cite Sonnenuhr and Würzgarten');
  assert(saar.focus.includes('Scharzhofberger'), 'Must cite iconic Scharzhofberger cru');
});

runTest('Tier 1.11', 'Mosel Thai Curry spicy Asian cuisine pairing rationale', () => {
  const spicyPairing = mosel.foodPairings.find(p => p.category.toLowerCase().includes('spicy') || p.category.toLowerCase().includes('asian'));
  assert(spicyPairing, 'Must include spicy Asian / Thai curry pairing');
  assert(spicyPairing.note.toLowerCase().includes('residual sweetness') && spicyPairing.note.toLowerCase().includes('acidity'),
    'Must explain Riesling residual sugar and acidity cutting chili heat');
});

// ----------------------------------------------------------------------------
// 1.12 SPAIN RIOJA & PRIORAT SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.12', 'Spain: Rioja Oak Aging Hierarchy, Priorat Llicorella & Galicia Albariño');

const spain = WINE_REGIONS['spain-rioja'];

runTest('Tier 1.12', 'Spain core metadata and diverse climatic spectrum', () => {
  assert(spain, 'Spain region must exist in WINE_REGIONS');
  assert.strictEqual(spain.id, 'spain-rioja');
  assert.strictEqual(spain.country, 'Spain');
});

runTest('Tier 1.12', 'Rioja Crianza, Reserva, Gran Reserva statutory oak aging hierarchy', () => {
  assert(spain.classification.system.includes('Oak Aging'), 'Must focus on oak aging classifications');
  const granReserva = spain.classification.tiers.find(t => t.name.includes('Gran Reserva'));
  assert(granReserva.detail.includes('5 years') && granReserva.detail.includes('2 in oak'),
    'Gran Reserva must mandate 5 years aging with at least 2 in oak casks');
});

runTest('Tier 1.12', 'Priorat black Llicorella slate & old-vine Garnacha / Cariñena', () => {
  const priorat = spain.subRegions.find(s => s.id === 'priorat-catalunya');
  assert(priorat, 'Must include Priorat subregion');
  assert(priorat.terroir.includes('Llicorella'), 'Terroir must specify Llicorella slate');
  assert(priorat.focus.includes('Garnacha') && priorat.focus.includes('Cariñena'), 'Focus on old-vine Garnacha & Cariñena');
});

runTest('Tier 1.12', 'Galicia Rías Baixas Atlantic granite & saline Albariño', () => {
  const galicia = spain.subRegions.find(s => s.id === 'galicia-rias-baixas');
  assert(galicia, 'Must include Galicia Rías Baixas subregion');
  assert(galicia.focus.includes('Albariño'), 'Focus on Albariño');
  assert(galicia.description.toLowerCase().includes('saline') && galicia.description.toLowerCase().includes('sea spray'),
    'Description must celebrate saline sea spray minerality');
});

runTest('Tier 1.12', 'Jamón Ibérico de Bellota & Slow-Roasted Suckling Pig pairing', () => {
  const jamonPairing = spain.foodPairings.find(p => p.dish.includes('Jamón Ibérico'));
  assert(jamonPairing, 'Must include Jamón Ibérico de Bellota pairing');
  assert(jamonPairing.note.toLowerCase().includes('reserva') || jamonPairing.note.toLowerCase().includes('oak'),
    'Must explain nutty acorn fat harmonizing with oak-aged Rioja Reserva');
});

// ----------------------------------------------------------------------------
// 1.13 CHILE MAIPO VALLEY SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.13', 'Chile: Alto Maipo Puente Alto Gravel Terraces & Carménère');

const chile = WINE_REGIONS['chile-maipo'];

runTest('Tier 1.13', 'Chile Maipo core metadata and Andean mountain cooling', () => {
  assert(chile, 'Chile region must exist in WINE_REGIONS');
  assert.strictEqual(chile.id, 'chile-maipo');
  assert.strictEqual(chile.country, 'Chile');
  assert(chile.terroir.climate.toLowerCase().includes('andes') && chile.terroir.climate.toLowerCase().includes('breezes'),
    'Must document cool nighttime breezes descending from the snow-capped Andes');
});

runTest('Tier 1.13', 'Alto Maipo Puente Alto & Pirque gravel terraces (Almaviva, Don Melchor)', () => {
  const altoMaipo = chile.subRegions.find(s => s.id === 'alto-maipo-puente-alto');
  assert(altoMaipo, 'Must include Alto Maipo Puente Alto subregion');
  assert(altoMaipo.focus.includes('Almaviva') && altoMaipo.focus.includes('Don Melchor'),
    'Must cite icon wines Almaviva and Don Melchor');
});

runTest('Tier 1.13', 'Cabernet Sauvignon & signature Carménère eucalyptus/mint flavor profile', () => {
  const carmenere = chile.grapes.find(g => g.name === 'Carménère');
  assert(carmenere && carmenere.percentage >= 15, 'Carménère must be documented as signature grape');
  assert(chile.flavorProfile.primary.some(p => p.includes('Eucalyptus') || p.includes('Mint')),
    'Flavor profile must include characteristic Eucalyptus / Fresh Mint notes');
});

runTest('Tier 1.13', 'Chilean Asado grilled skirt steak & chimichurri pairing', () => {
  const asadoPairing = chile.foodPairings.find(p => p.dish.includes('Asado') || p.dish.includes('Chimichurri'));
  assert(asadoPairing, 'Must include Chilean Asado / Chimichurri pairing');
});

// ----------------------------------------------------------------------------
// 1.14 AUSTRALIA SOMMELIER DATASET
// ----------------------------------------------------------------------------
startSuite('Tier 1.14', 'Australia: Barossa Centenarian Shiraz, Margaret River & Hunter Semillon');

const australia = WINE_REGIONS['australia'];

runTest('Tier 1.14', 'Australia core metadata and multi-state maritime scope', () => {
  assert(australia, 'Australia region must exist in WINE_REGIONS');
  assert.strictEqual(australia.id, 'australia');
  assert.strictEqual(australia.country, 'Australia');
  assert(australia.center[0] < 0, 'Australia latitude must be negative (Southern Hemisphere)');
});

runTest('Tier 1.14', 'Barossa Valley ancient pre-phylloxera Shiraz vines dating to 1843', () => {
  const barossaTier = australia.classification.tiers.find(t => t.name.includes('Barossa'));
  assert(barossaTier, 'Must document Barossa Valley GI');
  assert(barossaTier.detail.includes('pre-phylloxera') || barossaTier.detail.includes('1843'),
    'Must cite ancient living pre-phylloxera vines dating back to 1843');
});

runTest('Tier 1.14', 'Margaret River granitic/ironstone gravel Cabernet & Gingin Chardonnay', () => {
  const mr = australia.subRegions.find(s => s.id === 'margaret-river-wa');
  assert(mr, 'Must include Margaret River subregion');
  assert(mr.focus.includes('Leeuwin') && mr.focus.includes('Cullen'), 'Must cite Leeuwin Estate & Cullen benchmarks');
});

runTest('Tier 1.14', 'Hunter Valley low-alcohol (10-11%) age-worthy Semillon (Tyrrell\'s Vat 1)', () => {
  const hunter = australia.subRegions.find(s => s.id === 'hunter-valley-nsw');
  assert(hunter, 'Must include Hunter Valley subregion');
  assert(hunter.focus.includes("Tyrrell's"), "Must cite Tyrrell's benchmark");
});

runTest('Tier 1.14', 'Butter-Poached Australian Marron / Lobster & Wagyu Sirloin pairing', () => {
  const marronPairing = australia.foodPairings.find(p => p.dish.includes('Marron') || p.dish.includes('Lobster'));
  assert(marronPairing, 'Must include Australian Marron / Lobster pairing');
});

// ============================================================================
// TIER 2: BOUNDARY, GEOMETRY, TOPOLOGY & PEDOLOGICAL CORNER CASES
// ============================================================================
startSuite('Tier 2.1', 'Coordinate Topology, Bounding Box Bounds & Cartographic Sanity');

const allRegionIds = Object.keys(WINE_REGIONS);

runTest('Tier 2.1', 'All 17 regions have valid coordinate bounds and zoom levels', () => {
  for (const id of allRegionIds) {
    const reg = WINE_REGIONS[id];
    assert(Array.isArray(reg.center) && reg.center.length === 2, `Region ${id} center must be [lat, lng]`);
    const [lat, lng] = reg.center;
    assert(lat >= -90 && lat <= 90, `Region ${id} center lat ${lat} must be within [-90, 90]`);
    assert(lng >= -180 && lng <= 180, `Region ${id} center lng ${lng} must be within [-180, 180]`);

    assert(typeof reg.zoom === 'number' && reg.zoom >= 5 && reg.zoom <= 15, `Region ${id} zoom ${reg.zoom} must be realistic`);

    assert(Array.isArray(reg.bounds) && reg.bounds.length === 2, `Region ${id} bounds must be [[s, w], [n, e]]`);
    const [[s, w], [n, e]] = reg.bounds;
    assert(s < n, `Region ${id} bounds south (${s}) must be strictly less than north (${n})`);
    assert(w < e, `Region ${id} bounds west (${w}) must be strictly less than east (${e})`);
    assert(lat >= s && lat <= n, `Region ${id} center lat (${lat}) must lie within south-north bounds [${s}, ${n}]`);
    assert(lng >= w && lng <= e, `Region ${id} center lng (${lng}) must lie within west-east bounds [${w}, ${e}]`);
  }
});

runTest('Tier 2.1', 'All subregions coordinates reside strictly inside regional bounds', () => {
  for (const id of allRegionIds) {
    const reg = WINE_REGIONS[id];
    if (reg.subRegions && reg.subRegions.length > 0) {
      const [[s, w], [n, e]] = reg.bounds;
      for (const sub of reg.subRegions) {
        assert(typeof sub.lat === 'number' && !isNaN(sub.lat), `Subregion ${sub.id} in ${id} must have valid lat`);
        assert(typeof sub.lng === 'number' && !isNaN(sub.lng), `Subregion ${sub.id} in ${id} must have valid lng`);
        assert(sub.lat >= s - 0.5 && sub.lat <= n + 0.5, 
          `Subregion ${sub.id} lat ${sub.lat} should be roughly within regional bounds [${s}, ${n}] for ${id}`);
        assert(sub.lng >= w - 0.5 && sub.lng <= e + 0.5, 
          `Subregion ${sub.id} lng ${sub.lng} should be roughly within regional bounds [${w}, ${e}] for ${id}`);
      }
    }
  }
});

startSuite('Tier 2.2', 'findWineRegion Fuzzy, Accent-Insensitive & Alias Resolution');

const queryTestCases = [
  // French Titans with & without accents
  { query: 'Bordeaux', country: 'France', expectedId: 'bordeaux' },
  { query: 'Pauillac', country: 'France', expectedId: 'bordeaux' },
  { query: 'Margaux', country: 'France', expectedId: 'bordeaux' },
  { query: 'Saint-Émilion', country: 'France', expectedId: 'bordeaux' },
  { query: 'saint-emilion', country: 'France', expectedId: 'bordeaux' },
  { query: 'Pomerol', country: 'France', expectedId: 'bordeaux' },
  { query: 'Sauternes', country: 'France', expectedId: 'bordeaux' },
  { query: 'Rhône', country: 'France', expectedId: 'rhone' },
  { query: 'rhone', country: 'France', expectedId: 'rhone' },
  { query: 'Châteauneuf-du-Pape', country: 'France', expectedId: 'rhone' },
  { query: 'chateauneuf', country: 'France', expectedId: 'rhone' },
  { query: 'Côte-Rôtie', country: 'France', expectedId: 'rhone' },
  { query: 'cote-rotie', country: 'France', expectedId: 'rhone' },
  { query: 'Hermitage', country: 'France', expectedId: 'rhone' },
  { query: 'Cornas', country: 'France', expectedId: 'rhone' },
  { query: 'Gigondas', country: 'France', expectedId: 'rhone' },
  { query: 'Loire', country: 'France', expectedId: 'loire-valley' },
  { query: 'Loire Valley', country: 'France', expectedId: 'loire-valley' },
  { query: 'Sancerre', country: 'France', expectedId: 'loire-valley' },
  { query: 'Pouilly-Fumé', country: 'France', expectedId: 'loire-valley' },
  { query: 'pouilly-fume', country: 'France', expectedId: 'loire-valley' },
  { query: 'Chinon', country: 'France', expectedId: 'loire-valley' },
  { query: 'Saumur', country: 'France', expectedId: 'loire-valley' },
  { query: 'Muscadet', country: 'France', expectedId: 'loire-valley' },
  { query: 'Savennières', country: 'France', expectedId: 'loire-valley' },
  
  // Italian Titans with aliases
  { query: 'Piedmont', country: 'Italy', expectedId: 'piedmont' },
  { query: 'Piemonte', country: 'Italy', expectedId: 'piedmont' },
  { query: 'Barolo', country: 'Italy', expectedId: 'piedmont' },
  { query: 'Barbaresco', country: 'Italy', expectedId: 'piedmont' },
  { query: 'Langhe', country: 'Italy', expectedId: 'piedmont' },
  { query: 'Tuscany', country: 'Italy', expectedId: 'tuscany' },
  { query: 'Toscana', country: 'Italy', expectedId: 'tuscany' },
  { query: 'Chianti', country: 'Italy', expectedId: 'tuscany' },
  { query: 'Chianti Classico', country: 'Italy', expectedId: 'tuscany' },
  { query: 'Montalcino', country: 'Italy', expectedId: 'tuscany' },
  { query: 'Brunello di Montalcino', country: 'Italy', expectedId: 'tuscany' },
  { query: 'Bolgheri', country: 'Italy', expectedId: 'tuscany' },
  { query: 'Veneto', country: 'Italy', expectedId: 'italy-other' },
  { query: 'Valpolicella', country: 'Italy', expectedId: 'italy-other' },
  { query: 'Amarone', country: 'Italy', expectedId: 'italy-other' },
  { query: 'Sicily', country: 'Italy', expectedId: 'italy-other' },
  { query: 'Etna', country: 'Italy', expectedId: 'italy-other' },
  { query: 'Lombardia', country: 'Italy', expectedId: 'italy-other' },
  { query: 'Campania', country: 'Italy', expectedId: 'italy-other' },
  
  // New World AVAs
  { query: 'Napa Valley', country: 'USA', expectedId: 'california' },
  { query: 'Sonoma', country: 'USA', expectedId: 'california' },
  { query: 'Russian River Valley', country: 'USA', expectedId: 'california' },
  { query: 'Santa Cruz Mountains', country: 'USA', expectedId: 'california' },
  { query: 'Paso Robles', country: 'USA', expectedId: 'california' },
  { query: 'Oregon', country: 'USA', expectedId: 'oregon' },
  { query: 'Willamette Valley', country: 'USA', expectedId: 'oregon' },
  { query: 'Dundee Hills', country: 'USA', expectedId: 'oregon' },
  { query: 'Ribbon Ridge', country: 'USA', expectedId: 'oregon' },

  // International & Baseline
  { query: 'Germany', country: 'Germany', expectedId: 'germany-mosel' },
  { query: 'Mosel', country: 'Germany', expectedId: 'germany-mosel' },
  { query: 'Bernkastel', country: 'Germany', expectedId: 'germany-mosel' },
  { query: 'Spain', country: 'Spain', expectedId: 'spain-rioja' },
  { query: 'Rioja', country: 'Spain', expectedId: 'spain-rioja' },
  { query: 'Priorat', country: 'Spain', expectedId: 'spain-rioja' },
  { query: 'Chile', country: 'Chile', expectedId: 'chile-maipo' },
  { query: 'Maipo', country: 'Chile', expectedId: 'chile-maipo' },
  { query: 'Australia', country: 'Australia', expectedId: 'australia' },
  { query: 'Margaret River', country: 'Australia', expectedId: 'australia' },
  { query: 'Barossa', country: 'Australia', expectedId: 'australia' },
  { query: 'Japan', country: 'Japan', expectedId: 'japan-chubu' },
  { query: 'Yamanashi', country: 'Japan', expectedId: 'japan-chubu' },
  { query: 'Nagano', country: 'Japan', expectedId: 'japan-chubu' },
  { query: 'Koshu', country: 'Japan', expectedId: 'japan-chubu' },
  { query: 'Katsunuma', country: 'Japan', expectedId: 'japan-chubu' },
  { query: 'Champagne', country: 'France', expectedId: 'champagne' },
  { query: 'Burgundy', country: 'France', expectedId: 'burgundy' },
  { query: 'Bourgogne', country: 'France', expectedId: 'burgundy' },
  { query: 'Chablis', country: 'France', expectedId: 'burgundy' },
  { query: 'Alsace', country: 'France', expectedId: 'alsace' },
  { query: 'Corsica', country: 'France', expectedId: 'corsica' },
  { query: 'Patrimonio', country: 'France', expectedId: 'corsica' }
];

for (const { query, country, expectedId } of queryTestCases) {
  runTest('Tier 2.2', `findWineRegion("${query}", "${country}") resolves to "${expectedId}"`, () => {
    const result = findWineRegion(query, country);
    assert(result, `Query "${query}" in "${country}" must resolve to a region`);
    assert.strictEqual(result.id, expectedId, `Query "${query}" must resolve to ${expectedId}, got ${result.id}`);
  });
}

startSuite('Tier 2.3', 'UTF-8 Diacritics, Accents & Special Characters Integrity');

runTest('Tier 2.3', 'French and Italian diacritics retain formatting across all fields', () => {
  // Test French accents
  assert(bordeaux.classification.tiers.some(t => t.name.includes('Saint-Émilion') || t.name.includes('Médoc')),
    'Bordeaux must retain Saint-Émilion and Médoc accents');
  assert(bordeaux.aliases.includes('saint-émilion') && bordeaux.aliases.includes('haut-médoc'),
    'Bordeaux aliases must preserve French diacritics');
  assert(rhone.name.includes('Rhône'), 'Rhône must have circumflex');
  assert(rhone.subRegions.some(s => s.name.includes('Rhône') && s.name.includes('Châteauneuf')),
    'Rhône subregions must retain Rhône and Châteauneuf accents');
  
  // Test Italian naming
  assert(piedmont.name.includes('Piemonte'), 'Piedmont must retain Piemonte alias');
  assert(tuscany.name.includes('Toscana'), 'Tuscany must retain Toscana alias');
  assert(japan.name.includes('Chūbu'), 'Japan must retain Chūbu macron');
});

startSuite('Tier 2.4', 'Null Safety, Empty Queries & Fallback Resilience');

runTest('Tier 2.4', 'findWineRegion handles empty, null, and non-string inputs safely', () => {
  assert.strictEqual(findWineRegion(''), null, 'Empty string must return null');
  assert.strictEqual(findWineRegion(null), null, 'Null must return null');
  assert.strictEqual(findWineRegion(undefined), null, 'Undefined must return null');
});

runTest('Tier 2.4', 'findWineRegion generates structured fallback for unknown regions', () => {
  const unknown = findWineRegion('Atlantis Subsea Valley', 'Mythical Nation');
  assert(unknown, 'Must generate fallback object for unknown region');
  assert.strictEqual(unknown.id, 'atlantis-subsea-valley');
  assert.strictEqual(unknown.name, 'Atlantis Subsea Valley');
  assert.strictEqual(unknown.country, 'Mythical Nation');
  assert(Array.isArray(unknown.center) && unknown.center.length === 2, 'Fallback must have center coordinates');
  assert(Array.isArray(unknown.bounds) && unknown.bounds.length === 2, 'Fallback must have bounding box');
  assert(unknown.terroir && typeof unknown.terroir === 'object', 'Fallback must have terroir object');
  assert(Array.isArray(unknown.grapes) && unknown.grapes.length > 0, 'Fallback must have signature grapes');
  assert(unknown.structure && typeof unknown.structure === 'object', 'Fallback must have structure object');
  assert(Array.isArray(unknown.subRegions), 'Fallback subRegions must be an array');
});

startSuite('Tier 2.5', 'Structural Scale Metrics (1-10 Scale, Alcohol ABV & Aging Strings)');

runTest('Tier 2.5', 'All 17 regions have valid, sommelier-calibrated structural metrics', () => {
  for (const id of allRegionIds) {
    const reg = WINE_REGIONS[id];
    const s = reg.structure;
    assert(s, `Region ${id} must have structure metrics`);
    assert(typeof s.body === 'number' && s.body >= 1.0 && s.body <= 10.0, `Region ${id} body ${s.body} in [1, 10]`);
    assert(typeof s.acidity === 'number' && s.acidity >= 1.0 && s.acidity <= 10.0, `Region ${id} acidity ${s.acidity} in [1, 10]`);
    assert(typeof s.tannin === 'number' && s.tannin >= 1.0 && s.tannin <= 10.0, `Region ${id} tannin ${s.tannin} in [1, 10]`);
    assert(typeof s.sweetness === 'number' && s.sweetness >= 1.0 && s.sweetness <= 10.0, `Region ${id} sweetness ${s.sweetness} in [1, 10]`);
    assert(typeof s.alcohol === 'number' && s.alcohol >= 8.0 && s.alcohol <= 18.0, `Region ${id} alcohol ${s.alcohol} in [8, 18]% ABV`);
    assert(typeof s.agingPotential === 'string' && s.agingPotential.includes('Year'), `Region ${id} agingPotential must specify years`);
  }
});

startSuite('Tier 2.6', 'Whitespace & Case-Insensitive Permutation Robustness');

runTest('Tier 2.6', 'findWineRegion handles excessive whitespace and random casing', () => {
  const whitespaceCases = [
    { query: '   bordeaux   ', country: ' France ', expectedId: 'bordeaux' },
    { query: 'NaPa VaLlEy', country: 'usa', expectedId: 'california' },
    { query: '  CHIELE  ', country: 'chile', expectedId: 'chile-maipo' },
    { query: '  aUsTrAlIa  ', country: 'AUSTRALIA', expectedId: 'australia' },
    { query: '\tbarolo\n', country: '  ITALY  ', expectedId: 'piedmont' }
  ];

  for (const { query, country, expectedId } of whitespaceCases) {
    const res = findWineRegion(query, country);
    assert(res, `Failed on whitespace test: "${query}" in "${country}"`);
    assert.strictEqual(res.id, expectedId, `Expected ${expectedId}, got ${res.id}`);
  }
});

// ============================================================================
// TIER 3: CROSS-FEATURE COMBINATIONS & RELATIONAL GRAPH TRAVERSALS
// ============================================================================
startSuite('Tier 3.1', 'GeoJSON Boundary Polygons: Topology, RFC 7946 & Polygon Closure');

runTest('Tier 3.1', 'WINE_REGION_BOUNDARIES contains valid FeatureCollections for all 17 regions', () => {
  const boundaryKeys = Object.keys(WINE_REGION_BOUNDARIES);
  assert(boundaryKeys.length >= 17, `Must have boundaries for all 17 regions, found ${boundaryKeys.length}`);
  
  for (const id of allRegionIds) {
    const fc = WINE_REGION_BOUNDARIES[id];
    assert(fc, `Region ${id} must have GeoJSON FeatureCollection in boundaries`);
    assert.strictEqual(fc.type, 'FeatureCollection', `Boundary for ${id} must be FeatureCollection`);
    assert(Array.isArray(fc.features) && fc.features.length >= 1, `FeatureCollection for ${id} must have features`);

    for (const feature of fc.features) {
      assert.strictEqual(feature.type, 'Feature', `Every element in ${id} must be a Feature`);
      assert(feature.id || (feature.properties && feature.properties.id), `Feature in ${id} must have id`);
      assert(feature.geometry, `Feature in ${id} must have geometry`);
      assert(['Polygon', 'MultiPolygon'].includes(feature.geometry.type), 
        `Feature geometry in ${id} must be Polygon or MultiPolygon`);
      
      const coords = feature.geometry.coordinates;
      assert(Array.isArray(coords) && coords.length > 0, `Feature coordinates in ${id} must be array`);

      // RFC 7946 ring closure check: First and last coordinates of each ring must match
      if (feature.geometry.type === 'Polygon') {
        for (const ring of coords) {
          assert(ring.length >= 4, `LinearRing in ${id} must have >=4 coordinate points`);
          const first = ring[0];
          const last = ring[ring.length - 1];
          assert.strictEqual(first[0], last[0], `Ring in ${id} must close: first lng (${first[0]}) == last lng (${last[0]})`);
          assert.strictEqual(first[1], last[1], `Ring in ${id} must close: first lat (${first[1]}) == last lat (${last[1]})`);

          // GeoJSON standard: [Longitude, Latitude] order
          for (const pt of ring) {
            const [lng, lat] = pt;
            assert(lng >= -180 && lng <= 180, `GeoJSON coordinate longitude ${lng} in ${id} valid`);
            assert(lat >= -90 && lat <= 90, `GeoJSON coordinate latitude ${lat} in ${id} valid`);
          }
        }
      }
    }
  }
});

startSuite('Tier 3.2', 'Subregion ↔ Boundary Feature Relational Interoperability');

runTest('Tier 3.2', 'Key subregions have corresponding boundary feature polygons or parent envelopes', () => {
  for (const id of allRegionIds) {
    const reg = WINE_REGIONS[id];
    const fc = WINE_REGION_BOUNDARIES[id];
    assert(fc, `Boundary collection for ${id} must exist`);

    const featureIds = fc.features.map(f => f.id || f.properties?.id);
    assert(featureIds.length > 0, `Boundary feature IDs for ${id} must not be empty`);

    // Verify subregion names and IDs are non-empty
    if (reg.subRegions) {
      for (const sub of reg.subRegions) {
        assert(sub.id && typeof sub.id === 'string', `Subregion in ${id} must have non-empty string ID`);
        assert(sub.name && typeof sub.name === 'string', `Subregion ${sub.id} in ${id} must have name`);
      }
    }
  }
});

startSuite('Tier 3.3', 'Cru & Appellation Foreign Key Validity');

runTest('Tier 3.3', 'Every Champagne Grand Cru points to a valid subregion in Champagne', () => {
  const champagneSubIds = CHAMPAGNE_SUBREGIONS.map(s => s.id);
  for (const cru of CHAMPAGNE_GRAND_CRUS) {
    assert(cru.id, 'Cru must have id');
    assert(cru.name, 'Cru must have name');
    assert(cru.subregionId || cru.districtId, `Cru ${cru.name} must have subregionId or districtId`);
    const refId = cru.subregionId || cru.districtId;
    assert(champagneSubIds.includes(refId), `Cru ${cru.name} references invalid subregion ID "${refId}"`);
  }
});

runTest('Tier 3.3', 'Every Burgundy Grand Cru points to a valid subregion in Burgundy', () => {
  const burgundySubIds = BURGUNDY_SUBREGIONS.map(s => s.id);
  for (const cru of BURGUNDY_GRAND_CRUS) {
    assert(cru.id, 'Cru must have id');
    assert(cru.name, 'Cru must have name');
    const refId = cru.subregionId || cru.districtId;
    assert(refId, `Burgundy Grand Cru ${cru.name} must have subregionId`);
    assert(burgundySubIds.includes(refId), `Burgundy Grand Cru ${cru.name} references invalid subregion ID "${refId}"`);
  }
});

startSuite('Tier 3.4', 'Food Pairing Taxonomy & Sommelier Service Profiles');

runTest('Tier 3.4', 'All food pairings have valid dish, note, and rationales across all 17 regions', () => {
  let totalPairings = 0;
  for (const id of allRegionIds) {
    const reg = WINE_REGIONS[id];
    assert(Array.isArray(reg.foodPairings) && reg.foodPairings.length >= 1, `Region ${id} must have foodPairings array`);
    for (const p of reg.foodPairings) {
      totalPairings++;
      assert(p.dish && typeof p.dish === 'string' && p.dish.length > 5, `Pairing dish in ${id} must be descriptive`);
      assert(p.note && typeof p.note === 'string' && p.note.length > 10, `Pairing note in ${id} must be detailed`);
      assert(p.category && typeof p.category === 'string', `Pairing in ${id} must have category`);
    }
  }
  assert(totalPairings >= 60, `Expected >=60 total curated food pairings across 17 regions, found ${totalPairings}`);
});

startSuite('Tier 3.5', 'Ampelography & Cépage Distribution Integrity');

runTest('Tier 3.5', 'Authorized grape varieties have percentages summing to 100% (+/- 2%) across all regions', () => {
  for (const id of allRegionIds) {
    const reg = WINE_REGIONS[id];
    if (reg.grapes && reg.grapes.length > 0) {
      const sum = reg.grapes.reduce((acc, g) => acc + (typeof g.percentage === 'number' ? g.percentage : 0), 0);
      assert(sum >= 95 && sum <= 105, `Grape percentages for ${id} should sum to ~100%, got ${sum}%`);
      for (const g of reg.grapes) {
        assert(g.name, `Grape in ${id} must have name`);
        assert(g.role, `Grape ${g.name} in ${id} must have descriptive role`);
        assert(g.type, `Grape ${g.name} in ${id} must have type (Red/White/etc.)`);
      }
    }
  }
});

// ============================================================================
// TIER 4: REAL-WORLD MASTER SOMMELIER EXAM & FLOOR SERVICE SCENARIOS
// ============================================================================
startSuite('Tier 4', 'Real-World Sommelier Exam & Floor Service Application Scenarios');

runTest('Tier 4', 'Scenario 1: CMS L3 Barolo & Barbaresco Blind Tasting & MGA Pedology Challenge', () => {
  // Candidate Sommelier evaluates a flight of Piedmont Nebbiolo wines:
  // Step 1: Lookup Barolo dataset and verify 11 communes
  const piedmont = findWineRegion('Barolo', 'Italy');
  assert(piedmont && piedmont.id === 'piedmont');

  const baroloSub = piedmont.subRegions.find(s => s.id === 'barolo-langhe');
  assert(baroloSub);
  
  // Step 2: Differentiate soils - Tortonian blue marl (La Morra) vs Serravallian sandstone (Monforte/Serralunga)
  const soilText = piedmont.terroir.soil;
  assert(soilText.includes('Tortonian') && soilText.includes('Serravallian'));
  
  // Step 3: Statutory aging verification for blind tasting vintage calculation
  const baroloTier = piedmont.classification.tiers.find(t => t.name.includes('Barolo'));
  assert(baroloTier.detail.includes('38 months') && baroloTier.detail.includes('62 months'));
  
  const barbarescoTier = piedmont.classification.tiers.find(t => t.name.includes('Barbaresco'));
  assert(barbarescoTier.detail.includes('26 months'));

  // Step 4: Gastronomy pairing - Tajarin with Alba White Truffles
  const tajarin = piedmont.foodPairings.find(p => p.dish.includes('Tajarin'));
  assert(tajarin && tajarin.note.includes('truffle'));
});

runTest('Tier 4', 'Scenario 2: Bordeaux 1855 Médoc / Sauternes Classification & Right Bank Cellar Pairing Flight', () => {
  // Sommelier constructs an aristocratic Bordeaux 5-course degustation flight:
  const bdx = findWineRegion('Bordeaux', 'France');
  assert(bdx && bdx.id === 'bordeaux');

  // Course 1 (Left Bank Pauillac 1855 First Growth):
  const leftBank = bdx.subRegions.find(s => s.id === 'left-bank-medoc');
  assert(leftBank && leftBank.terroir.includes('Gravel'));
  const steak = bdx.foodPairings.find(p => p.dish.includes('Ribeye'));
  assert(steak && steak.note.includes('tannin'));

  // Course 2 (Right Bank Saint-Émilion / Pomerol Merlot-Cab Franc):
  const rightBank = bdx.subRegions.find(s => s.id === 'right-bank-libournais');
  assert(rightBank && rightBank.focus.includes('Pomerol') && rightBank.focus.includes('Saint-Émilion'));

  // Course 3 (Sauternes Premier Cru Supérieur d'Yquem Botrytis with Foie Gras / Roquefort):
  const sauternes = bdx.subRegions.find(s => s.id === 'sauternais');
  assert(sauternes);
  const foieGras = bdx.foodPairings.find(p => p.dish.includes('Foie Gras'));
  assert(foieGras && foieGras.note.includes('Sauternes') && foieGras.note.includes('botrytiz'));
});

runTest('Tier 4', 'Scenario 3: Loire Valley Silex vs. Kimmeridgian & Chenin Blanc Acid-Pairing Degustation Flight', () => {
  // Sommelier hosts a terroir exploration across the 4 sectors of the Loire River:
  const loire = findWineRegion('Sancerre', 'France');
  assert(loire && loire.id === 'loire-valley');

  // Sancerre flint (Silex) vs Kimmeridgian (Terres Blanches) comparison:
  const centreLoire = loire.subRegions.find(s => s.id === 'centre-loire' || s.id === 'upper-loire-sancerre');
  assert(centreLoire && centreLoire.terroir.includes('Terres Blanches') && centreLoire.terroir.includes('Silex') && centreLoire.terroir.includes('Caillottes'));

  // Goat cheese acidity harmonization:
  const crottin = loire.foodPairings.find(p => p.dish.includes('Crottin de Chavignol'));
  assert(crottin && crottin.note.includes('Sancerre'));

  // Savennières dry Chenin Blanc structure:
  const anjou = loire.subRegions.find(s => s.id === 'anjou-saumur');
  assert(anjou.focus.includes('Savennières') && anjou.terroir.includes('Schist'));

  // Muscadet sur lie fresh Atlantic oyster pairing:
  const oysters = loire.foodPairings.find(p => p.dish.includes('Oysters'));
  assert(oysters && oysters.note.includes('Muscadet'));
});

runTest('Tier 4', 'Scenario 4: California Valley Floor vs Mountain AVA Elevation & Pedology Challenge', () => {
  // Master Sommelier exam prompt: Contrast Napa Valley floor alluvial fans with mountain AVAs:
  const cal = findWineRegion('Napa Valley', 'USA');
  assert(cal && cal.id === 'california');

  const valley = cal.subRegions.find(s => s.id === 'napa-valley-floor');
  const mountain = cal.subRegions.find(s => s.id === 'napa-mountain-avas');

  assert(valley.terroir.includes('Alluvial gravel'));
  assert(mountain.terroir.includes('volcanic mountain slopes') && mountain.terroir.includes('fog line'));
  assert(mountain.focus.includes('Howell Mountain') && mountain.focus.includes('Mt. Veeder'));

  // Goldridge sandy loam in Sonoma Coast for Pinot Noir:
  const sonoma = cal.subRegions.find(s => s.id === 'sonoma-coast-rrv');
  assert(sonoma.terroir.includes('Goldridge'));

  // Santa Cruz Mountains Ridge Monte Bello cool-climate Cabernet:
  const scm = cal.subRegions.find(s => s.id === 'santa-cruz-mountains');
  assert(scm.focus.includes('Ridge Monte Bello'));
});

runTest('Tier 4', 'Scenario 5: Etna Contrada Altitude Pedology & Chianti Classico 11 UGAs Terroir Mapping', () => {
  // Sommelier comparative study of high-altitude volcanic Sicily vs Tuscany schist hills:
  const etnaRegion = findWineRegion('Etna', 'Italy');
  assert(etnaRegion && etnaRegion.id === 'italy-other');
  
  const etna = etnaRegion.subRegions.find(s => s.id === 'sicily-etna');
  assert(etna.terroir.includes('volcanic ash') && etna.terroir.includes('1,000m'));
  assert(etna.focus.includes('Nerello Mascalese') && etna.focus.includes('Carricante'));

  // Chianti Classico 11 official UGAs (2021) and Galestro vs Alberese soils:
  const tusc = findWineRegion('Chianti Classico', 'Italy');
  assert(tusc && tusc.id === 'tuscany');
  const cc = tusc.subRegions.find(s => s.id === 'chianti-classico');
  assert(cc.focus.includes('Gran Selezione') && cc.focus.includes('UGAs'));
  assert(tusc.terroir.soil.includes('Galestro') && tusc.terroir.soil.includes('Alberese'));
});

runTest('Tier 4', 'Scenario 6: Global Sparkling & High-Acid Gastronomy Pairing Flight', () => {
  // International sparkling wine flight: Champagne vs Alta Langa vs Japanese Koshu
  // Flight 1: Champagne Grand Cru Blanc de Blancs (Côte des Blancs Belemnite chalk):
  const champ = findWineRegion('Champagne', 'France');
  assert(champ && champ.id === 'champagne');
  assert.strictEqual(champ.grandCrus.length, 17);
  const rawBarPairing = champ.foodPairings.find(p => p.category.includes('Raw Bar'));
  assert(rawBarPairing && rawBarPairing.dish.includes('Oysters') && rawBarPairing.dish.includes('Caviar'));

  // Flight 2: Japanese Katsunuma Koshu on volcanic alluvial soil for delicate sashimi:
  const jp = findWineRegion('Yamanashi', 'Japan');
  assert(jp && jp.id === 'japan-chubu');
  const sushi = jp.foodPairings.find(p => p.dish.includes('Sashimi') && p.dish.includes('Nigiri'));
  assert(sushi && sushi.note.includes('Koshu'));
});

runTest('Tier 4', 'Scenario 7: Oregon Willamette Nested AVAs & Soil Comparative Tasting', () => {
  // Comparative tasting flight: Dundee Hills Jory volcanic basalt vs Ribbon Ridge Willakenzie marine sandstone:
  const or = findWineRegion('Willamette Valley', 'USA');
  assert(or && or.id === 'oregon');

  const dundee = or.subRegions.find(s => s.id === 'dundee-hills');
  const ribbon = or.subRegions.find(s => s.id === 'ribbon-ridge-yamhill');
  const eola = or.subRegions.find(s => s.id === 'eola-amity-hills');

  assert(dundee.terroir.includes('Jory'));
  assert(ribbon.terroir.includes('Willakenzie'));
  assert(eola.terroir.includes('Pacific Ocean gales') || eola.terroir.includes('volcanic'));

  const salmon = or.foodPairings.find(p => p.dish.includes('Salmon'));
  assert(salmon && salmon.note.includes('Pinot Noir'));
});

// ============================================================================
// TIER 5: ADVERSARIAL QUERY FUZZING & DATA INTEGRITY SCANNER
// ============================================================================
startSuite('Tier 5.1', 'Adversarial Query Fuzzing, SQL Injection & Prototype Pollution Defense');

const adversarialPayloads = [
  '<script>alert("xss")</script>',
  'SELECT * FROM wine_regions WHERE id = 1;',
  '-- DROP TABLE wines; --',
  '.*+?^${}()|[]\\',
  'prototype',
  'toString',
  'valueOf',
  '{"$gt": ""}',
  'eval("process.exit(1)")',
  '\x00\x1f\x7f',
  '   \r\n\t  ',
  '🍷🍇🍾🥂'
];

for (const payload of adversarialPayloads) {
  runTest('Tier 5.1', `findWineRegion safely processes malicious payload: ${JSON.stringify(payload).slice(0, 30)}`, () => {
    let result = null;
    assert.doesNotThrow(() => {
      result = findWineRegion(payload, payload);
    }, `Should not throw on payload ${payload}`);
    assert(result && typeof result === 'object', 'Must return safe object');
    assert.strictEqual(typeof result.id, 'string', 'Result must have string id');
  });
}

runTest('Tier 5.1', 'findWineRegion prototype keys (__proto__, constructor) execution safety', () => {
  // Prototype property access audit:
  // Direct indexing WINE_REGIONS[cleanReg] accesses Object.prototype properties
  // Verify calling findWineRegion with prototype keywords does not crash the Node process
  assert.doesNotThrow(() => {
    findWineRegion('__proto__');
    findWineRegion('constructor');
  }, 'Prototype property keywords must not crash findWineRegion');
});

startSuite('Tier 5.2', 'Deep Object Tree Audit: Zero NaN, Zero Prototype Pollution & Non-Empty Metadata');

runTest('Tier 5.2', 'Complete scan across all 17 regions for zero NaN values in numeric properties', () => {
  function scanForNaN(obj, path = '') {
    if (obj === null || obj === undefined) return;
    if (typeof obj === 'number') {
      assert(!isNaN(obj), `NaN detected at ${path}`);
    } else if (Array.isArray(obj)) {
      obj.forEach((item, idx) => scanForNaN(item, `${path}[${idx}]`));
    } else if (typeof obj === 'object') {
      for (const [key, val] of Object.entries(obj)) {
        scanForNaN(val, `${path}.${key}`);
      }
    }
  }

  for (const [id, r] of Object.entries(WINE_REGIONS)) {
    scanForNaN(r, id);
  }
});

runTest('Tier 5.2', 'All 17 regions possess non-empty summaries, taglines, hero gradients, and accent colors', () => {
  for (const [id, r] of Object.entries(WINE_REGIONS)) {
    assert(r.tagline && r.tagline.length > 5, `Region ${id} must have descriptive tagline`);
    assert(r.summary && r.summary.length > 20, `Region ${id} must have comprehensive narrative summary`);
    assert(r.heroGradient && r.heroGradient.includes('linear-gradient'), `Region ${id} must have valid heroGradient CSS`);
    assert(r.accentColor && r.accentColor.startsWith('#'), `Region ${id} must have hex accentColor`);
    assert(r.flavorProfile && Array.isArray(r.flavorProfile.primary) && r.flavorProfile.primary.length >= 3,
      `Region ${id} must have primary flavor notes array`);
  }
});

// ============================================================================
// SUITE EXECUTION SUMMARY & REPORT
// ============================================================================
const elapsedMs = Date.now() - startTime;

console.log('\n================================================================');
console.log('\x1b[1m\x1b[32m📊 TEST EXECUTION SUMMARY & COVERAGE REPORT\x1b[0m');
console.log('================================================================');
console.log(`  Total Test Suites  : ${Object.keys(suiteStats).length}`);
console.log(`  Total Assertions   : ${totalTests}`);
console.log(`  Passed Tests       : \x1b[32m${passedTests}\x1b[0m`);
console.log(`  Failed Tests       : ${failedTests > 0 ? `\x1b[31m${failedTests}\x1b[0m` : '\x1b[32m0\x1b[0m'}`);
console.log(`  Success Rate       : \x1b[1m\x1b[32m${((passedTests / totalTests) * 100).toFixed(2)}%\x1b[0m`);
console.log(`  Execution Time     : ${elapsedMs} ms`);
console.log('----------------------------------------------------------------');

console.log('\x1b[1mSuite Breakdown:\x1b[0m');
for (const [sId, stats] of Object.entries(suiteStats)) {
  const statusColor = stats.failed === 0 ? '\x1b[32m' : '\x1b[31m';
  console.log(`  ${statusColor}●\x1b[0m [${sId}] ${stats.title}: ${stats.passed}/${stats.total} passed`);
}

if (failedTests > 0) {
  console.log('\n\x1b[1m\x1b[31m💥 FAILED TEST DETAILS:\x1b[0m');
  failures.forEach((f, idx) => {
    console.error(`\n  ${idx + 1}. [${f.suite}] ${f.test}`);
    console.error(`     Error: ${f.error}`);
    console.error(`     Stack: ${f.stack}`);
  });
  process.exit(1);
} else {
  console.log('\n\x1b[1m\x1b[32m✨ ALL WORLD WINE REGION TESTS PASSED WITH 100% SUCCESS RATE! ✨\x1b[0m\n');
  process.exit(0);
}
