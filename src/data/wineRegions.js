/**
 * ============================================================================
 * WORLD WINE REGIONS SOMMELIER MASTER REGISTRY
 * Court of Master Sommeliers (CMS) Level 3 & Master Sommelier Standards
 * ============================================================================
 * 
 * Aggregator and export hub for all 17 world wine regions in the sommelier
 * curriculum, composed cleanly from dedicated modular regional datasets.
 */

// 1. France: Champagne, Burgundy, Alsace, Corsica, Bordeaux, Rhône, Loire
import {
  CHAMPAGNE_GRAND_CRUS,
  CHAMPAGNE_PREMIER_CRUS,
  CHAMPAGNE_SUBREGIONS,
  CHAMPAGNE_TECHNICAL_REGULATIONS,
  CHAMPAGNE_PRESTIGE_CUVEES,
  CHAMPAGNE_ICONIC_GROWERS,
  CHAMPAGNE_FOOD_PAIRINGS
} from './champagneData.js';

import {
  BURGUNDY_GRAND_CRUS,
  BURGUNDY_PREMIER_CRUS,
  BURGUNDY_SUBREGIONS,
  BURGUNDY_TECHNICAL_REGULATIONS,
  BURGUNDY_PRESTIGE_MONOPOLES,
  BURGUNDY_WHITE_BENCHMARKS,
  BURGUNDY_ICONIC_DOMAINES,
  BURGUNDY_FOOD_PAIRINGS
} from './burgundyData.js';

import {
  ALSACE_GRAND_CRUS,
  ALSACE_SUBREGIONS,
  ALSACE_TECHNICAL_REGULATIONS,
  ALSACE_PRESTIGE_MONOPOLES,
  ALSACE_ICONIC_DOMAINES,
  ALSACE_FOOD_PAIRINGS
} from './alsaceData.js';

import {
  CORSICA_SUBREGIONS,
  CORSICA_TECHNICAL_REGULATIONS,
  CORSICA_BENCHMARK_ESTATES,
  CORSICA_ICONIC_DOMAINES,
  CORSICA_FOOD_PAIRINGS
} from './corsicaData.js';

import {
  BORDEAUX_SUBREGIONS,
  BORDEAUX_GRAND_CRUS,
  BORDEAUX_PREMIER_CRUS,
  BORDEAUX_TECHNICAL_REGULATIONS,
  BORDEAUX_PRESTIGE_ESTATES,
  BORDEAUX_ICONIC_CHATEAUX,
  BORDEAUX_FOOD_PAIRINGS
} from './bordeauxData.js';

import {
  RHONE_SUBREGIONS,
  RHONE_GRAND_CRUS,
  RHONE_TECHNICAL_REGULATIONS,
  RHONE_PRESTIGE_CUVEES,
  RHONE_ICONIC_DOMAINES,
  RHONE_FOOD_PAIRINGS
} from './rhoneData.js';

import {
  LOIRE_SUBREGIONS,
  LOIRE_GRAND_CRUS,
  LOIRE_PREMIER_CRUS,
  LOIRE_TECHNICAL_REGULATIONS,
  LOIRE_PRESTIGE_CUVEES,
  LOIRE_ICONIC_DOMAINES,
  LOIRE_FOOD_PAIRINGS
} from './loireData.js';

// 2. Italy: Piedmont, Tuscany, Italy Other
import {
  PIEDMONT_SUBREGIONS,
  PIEDMONT_GRAND_CRUS,
  PIEDMONT_TECHNICAL_REGULATIONS,
  PIEDMONT_PRESTIGE_CUVEES,
  PIEDMONT_ICONIC_DOMAINES,
  PIEDMONT_FOOD_PAIRINGS
} from './piedmontData.js';

import {
  TUSCANY_SUBREGIONS,
  TUSCANY_GRAND_CRUS,
  TUSCANY_TECHNICAL_REGULATIONS,
  TUSCANY_PRESTIGE_CUVEES,
  TUSCANY_ICONIC_DOMAINES,
  TUSCANY_FOOD_PAIRINGS
} from './tuscanyData.js';

export const TUSCANY_PRESTIGE_ESTATES = TUSCANY_PRESTIGE_CUVEES;

import {
  ITALY_OTHER_SUBREGIONS,
  ITALY_OTHER_GRAND_CRUS,
  ITALY_OTHER_TECHNICAL_REGULATIONS,
  ITALY_OTHER_PRESTIGE_ESTATES,
  ITALY_OTHER_ICONIC_PRODUCERS,
  ITALY_OTHER_FOOD_PAIRINGS
} from './italyOtherData.js';

// 3. New World & Asia: California, Oregon, Japan
import {
  CALIFORNIA_SUBREGIONS,
  CALIFORNIA_GRAND_CRUS,
  CALIFORNIA_TECHNICAL_REGULATIONS,
  CALIFORNIA_PRESTIGE_ESTATES,
  CALIFORNIA_ICONIC_PRODUCERS,
  CALIFORNIA_FOOD_PAIRINGS
} from './californiaData.js';

import {
  OREGON_SUBREGIONS,
  OREGON_GRAND_CRUS,
  OREGON_TECHNICAL_REGULATIONS,
  OREGON_PRESTIGE_ESTATES,
  OREGON_ICONIC_PRODUCERS,
  OREGON_FOOD_PAIRINGS
} from './oregonData.js';

import {
  JAPAN_SUBREGIONS,
  JAPAN_GRAND_CRUS,
  JAPAN_TECHNICAL_REGULATIONS,
  JAPAN_PRESTIGE_ESTATES,
  JAPAN_ICONIC_PRODUCERS,
  JAPAN_FOOD_PAIRINGS
} from './japanData.js';
import {
  MOSEL_SUBREGIONS,
  MOSEL_GRAND_CRUS,
  MOSEL_TECHNICAL_REGULATIONS,
  MOSEL_PRESTIGE_ESTATES,
  MOSEL_ICONIC_DOMAINES,
  MOSEL_FOOD_PAIRINGS
} from './moselData.js';

import {
  RIOJA_SUBREGIONS,
  RIOJA_GRAND_CRUS,
  RIOJA_TECHNICAL_REGULATIONS,
  RIOJA_PRESTIGE_ESTATES,
  RIOJA_ICONIC_DOMAINES,
  RIOJA_FOOD_PAIRINGS
} from './riojaData.js';

import {
  CHILE_SUBREGIONS,
  CHILE_GRAND_CRUS,
  CHILE_TECHNICAL_REGULATIONS,
  CHILE_PRESTIGE_ESTATES,
  CHILE_ICONIC_DOMAINES,
  CHILE_FOOD_PAIRINGS
} from './chileData.js';

import {
  AUSTRALIA_SUBREGIONS,
  AUSTRALIA_GRAND_CRUS,
  AUSTRALIA_TECHNICAL_REGULATIONS,
  AUSTRALIA_PRESTIGE_ESTATES,
  AUSTRALIA_ICONIC_DOMAINES,
  AUSTRALIA_FOOD_PAIRINGS
} from './australiaData.js';

// Re-export all modular constants for direct consumer access
export {
  CHAMPAGNE_GRAND_CRUS,
  CHAMPAGNE_PREMIER_CRUS,
  CHAMPAGNE_SUBREGIONS,
  CHAMPAGNE_TECHNICAL_REGULATIONS,
  CHAMPAGNE_PRESTIGE_CUVEES,
  CHAMPAGNE_ICONIC_GROWERS,
  CHAMPAGNE_FOOD_PAIRINGS,
  BURGUNDY_GRAND_CRUS,
  BURGUNDY_PREMIER_CRUS,
  BURGUNDY_SUBREGIONS,
  BURGUNDY_TECHNICAL_REGULATIONS,
  BURGUNDY_PRESTIGE_MONOPOLES,
  BURGUNDY_WHITE_BENCHMARKS,
  BURGUNDY_ICONIC_DOMAINES,
  BURGUNDY_FOOD_PAIRINGS,
  ALSACE_GRAND_CRUS,
  ALSACE_SUBREGIONS,
  ALSACE_TECHNICAL_REGULATIONS,
  ALSACE_PRESTIGE_MONOPOLES,
  ALSACE_ICONIC_DOMAINES,
  ALSACE_FOOD_PAIRINGS,
  CORSICA_SUBREGIONS,
  CORSICA_TECHNICAL_REGULATIONS,
  CORSICA_BENCHMARK_ESTATES,
  CORSICA_ICONIC_DOMAINES,
  CORSICA_FOOD_PAIRINGS,
  BORDEAUX_SUBREGIONS,
  BORDEAUX_GRAND_CRUS,
  BORDEAUX_PREMIER_CRUS,
  BORDEAUX_TECHNICAL_REGULATIONS,
  BORDEAUX_PRESTIGE_ESTATES,
  BORDEAUX_ICONIC_CHATEAUX,
  BORDEAUX_FOOD_PAIRINGS,
  RHONE_SUBREGIONS,
  RHONE_GRAND_CRUS,
  RHONE_TECHNICAL_REGULATIONS,
  RHONE_PRESTIGE_CUVEES,
  RHONE_ICONIC_DOMAINES,
  RHONE_FOOD_PAIRINGS,
  LOIRE_SUBREGIONS,
  LOIRE_GRAND_CRUS,
  LOIRE_PREMIER_CRUS,
  LOIRE_TECHNICAL_REGULATIONS,
  LOIRE_PRESTIGE_CUVEES,
  LOIRE_ICONIC_DOMAINES,
  LOIRE_FOOD_PAIRINGS,
  PIEDMONT_SUBREGIONS,
  PIEDMONT_GRAND_CRUS,
  PIEDMONT_TECHNICAL_REGULATIONS,
  PIEDMONT_PRESTIGE_CUVEES,
  PIEDMONT_ICONIC_DOMAINES,
  PIEDMONT_FOOD_PAIRINGS,
  TUSCANY_SUBREGIONS,
  TUSCANY_GRAND_CRUS,
  TUSCANY_TECHNICAL_REGULATIONS,
  TUSCANY_PRESTIGE_CUVEES,
  TUSCANY_ICONIC_DOMAINES,
  TUSCANY_FOOD_PAIRINGS,
  CALIFORNIA_SUBREGIONS,
  CALIFORNIA_GRAND_CRUS,
  CALIFORNIA_TECHNICAL_REGULATIONS,
  CALIFORNIA_PRESTIGE_ESTATES,
  CALIFORNIA_ICONIC_PRODUCERS,
  CALIFORNIA_FOOD_PAIRINGS,
  OREGON_SUBREGIONS,
  OREGON_GRAND_CRUS,
  OREGON_TECHNICAL_REGULATIONS,
  OREGON_PRESTIGE_ESTATES,
  OREGON_ICONIC_PRODUCERS,
  OREGON_FOOD_PAIRINGS,
  ITALY_OTHER_SUBREGIONS,
  ITALY_OTHER_GRAND_CRUS,
  ITALY_OTHER_TECHNICAL_REGULATIONS,
  ITALY_OTHER_PRESTIGE_ESTATES,
  ITALY_OTHER_ICONIC_PRODUCERS,
  ITALY_OTHER_FOOD_PAIRINGS,
  JAPAN_SUBREGIONS,
  JAPAN_GRAND_CRUS,
  JAPAN_TECHNICAL_REGULATIONS,
  JAPAN_PRESTIGE_ESTATES,
  JAPAN_ICONIC_PRODUCERS,
  JAPAN_FOOD_PAIRINGS,
  MOSEL_SUBREGIONS,
  MOSEL_GRAND_CRUS,
  MOSEL_TECHNICAL_REGULATIONS,
  MOSEL_PRESTIGE_ESTATES,
  MOSEL_ICONIC_DOMAINES,
  MOSEL_FOOD_PAIRINGS,
  RIOJA_SUBREGIONS,
  RIOJA_GRAND_CRUS,
  RIOJA_TECHNICAL_REGULATIONS,
  RIOJA_PRESTIGE_ESTATES,
  RIOJA_ICONIC_DOMAINES,
  RIOJA_FOOD_PAIRINGS,
  CHILE_SUBREGIONS,
  CHILE_GRAND_CRUS,
  CHILE_TECHNICAL_REGULATIONS,
  CHILE_PRESTIGE_ESTATES,
  CHILE_ICONIC_DOMAINES,
  CHILE_FOOD_PAIRINGS,
  AUSTRALIA_SUBREGIONS,
  AUSTRALIA_GRAND_CRUS,
  AUSTRALIA_TECHNICAL_REGULATIONS,
  AUSTRALIA_PRESTIGE_ESTATES,
  AUSTRALIA_ICONIC_DOMAINES,
  AUSTRALIA_FOOD_PAIRINGS,
};

export const WINE_REGIONS = {
  // ==========================================================================
  // 1. CHAMPAGNE
  // ==========================================================================
  'champagne': {
    id: 'champagne',
    name: "Champagne",
    country: 'France',
    countryCode: 'FR',
    aliases: [
      'champagne', 'champagne grand cru', 'champagne premier cru', 'champenoise',
      'coteaux champenois', 'rose des riceys', 'rosé des riceys',
      'aÿ', 'ay', 'avize', 'cramant', 'le mesnil-sur-oger', 'le mesnil', 'bouzy', 'ambonnay', 'verzenay', 'verzy', 'oger', 'chouilly'
    ],
    tagline: "The Pinnacle of Effervescence, Chalk Terroir & Timeless Craft",
    summary: "Located roughly 90 miles northeast of Paris, Champagne is the global pinnacle of sparkling winemaking. Its cool continental climate and deep Mesozoic chalk and limestone formations produce wines of electrifying tension, micro-fine effervescence, laser-like minerality, and legendary longevity.",
    center: [49.0333, 4.0333],
    zoom: 10,
    bounds: [[47.95, 3.40], [49.45, 4.70]],
    heroGradient: 'linear-gradient(135deg, #1c2833 0%, #2c3e50 50%, #b8860b 100%)',
    accentColor: '#d4af37',

    terroir: {
      climate: "Cool Continental (Köppen Cfb) with maritime oceanic currents. High annual precipitation, persistent morning mists, and marginal northern temperatures (average growing season ~10-11°C) that preserve searing natural acidity and slow phenolic maturation.",
      soil: "Upper Cretaceous Belemnite chalk (Belemnitella quadrata) on hillside mid-slopes, Micraster chalk on valley plains, Upper Jurassic Kimmeridgian limestone and fossil oyster marls in the Aube, and Sparnacian sedimentary clays in the Marne Valley.",
      elevation: "90m to 300m above sea level along undulating hillside slopes offering optimal solar radiation angles and thermal frost drainage.",
      riverInfluence: "The Marne, Vesle, Ardre, and Aube river valleys create crucial microclimatic corridors that channel cold air away from hillside vineyard amphitheaters."
    },

    grapes: [
      { name: 'Pinot Noir', percentage: 38, type: 'Red', role: "Provides structural backbone, palate weight, red berry aromatics (raspberry, red cherry), and mid-palate vinous power; dominant in Montagne de Reims and Côte des Bar." },
      { name: 'Chardonnay', percentage: 31, type: 'White', role: "Yields elegance, laser-sharp acidity, delicate white floral and citrus aromas, saline chalk minerality, and immense longevity; dominant in Côte des Blancs." },
      { name: 'Meunier', percentage: 31, type: 'Red', role: "Adds roundness, lush orchard fruit (apple, pear, mirabelle plum) forwardness, and early drinkability; cold-hardy for frost-prone clay soils in the Vallée de la Marne." },
      { name: 'Pinot Blanc (Blanc Vrai)', percentage: 0.25, type: 'White', role: "White mutation of Pinot Noir yielding round stone fruit, white peach, melon, and textured floral mouthfeel; historical stronghold in Côte des Bar (Celles-sur-Ource)." },
      { name: 'Arbane', percentage: 0.05, type: 'White', role: "Ancient indigenous Aube white variety renowned for electric high acidity, rustic floral lift, green apple, and lemon verbena nuances." },
      { name: 'Petit Meslier', percentage: 0.05, type: 'White', role: "Rare Gouais Blanc × Savagnin heritage crossing with piercing acidity, lime zest, herbal tea, and crisp vegetal-citrus bite." },
      { name: 'Pinot Gris (Fromenteau)', percentage: 0.05, type: 'White', role: "Historic pink-grey grape producing honeyed apricot, smoky, baked apple richness, and supple texture." }
    ],

    structure: {
      body: 5.5,
      acidity: 9.8,
      tannin: 1.5,
      sweetness: 2.0,
      alcohol: 12.0,
      agingPotential: "5 - 40+ Years"
    },

    classification: {
      system: "Échelle des Crus (17 Grand Crus 100%, 42 Premier Crus 90-99%, Autre Crus)",
      description: "Champagne historically classifies entire communes rather than individual parcels. 17 villages hold 100% Grand Cru standing, 42 villages hold Premier Cru (90-99%) standing, and roughly 260 communes are classified as Autre Crus (80-89%).",
      tiers: [
        { name: "Grand Cru (17 Villages - 100%)", detail: "The elite communes representing ~8.5% of vineyard area: Ambonnay, Bouzy, Verzenay, Mailly, Verzy, Beaumont-sur-Vesle, Sillery, Puisieulx, Louvois (Montagne de Reims); Aÿ, Tours-sur-Marne (Vallée de la Marne); Avize, Chouilly, Cramant, Le Mesnil-sur-Oger, Oger, Oiry (Côte des Blancs)." },
        { name: "Premier Cru (42 Villages - 90-99%)", detail: "Historic high-rated communes including Mareuil-sur-Aÿ (99%), Tauxières-Mutry (99%), Bisseuil (99%), Vertus (95%), Trépail (95%), Villers-Marmery (95%), Dizy (95%), Cuis (95%), Chigny-les-Roses (94%), Rilly-la-Montagne (94%), Ludes (94%), Cumières (93%), Hautvillers (93%), Pierry (90%), Écueil (90%), and Vrigny (90%)." },
        { name: "Autre Cru (80-89%)", detail: "Communes across the Marne, Aube, Aisne, Haute-Marne, and Seine-et-Marne departments that produce regional AOC Champagne." }
      ],
      styles: [
        { name: 'Blanc de Blancs', desc: "100% white grapes (predominantly Chardonnay, or heritage white varieties); pristine, chiseled, citrus, floral, and chalk-driven." },
        { name: 'Blanc de Noirs', desc: "100% black grapes (Pinot Noir and/or Meunier); vinous, structured, red berry profile with generous mid-palate weight." },
        { name: 'Rosé Champagne', desc: "Crafted via assemblage (blending 8-15% still Coteaux Champenois red wine into white base must) or saignée (short skin maceration)." },
        { name: 'Vintage (Millésimé)', desc: "Single harvest expression aged minimum 36 months total (max 80% of harvest declareable to preserve reserve wines)." },
        { name: 'Multi-Vintage / Non-Vintage', desc: "Signature house assemblage of the current year blended with extensive solera/perpetual reserve wines, aged min. 15 months (12 on lees)." },
        { name: 'Prestige Cuvée', desc: "Flagship luxury tête de cuvée representing the apex of a house or grower's winemaking, sourced from oldest Grand Cru vines." }
      ]
    },

    flavorProfile: {
      primary: ['Green Apple', 'Lemon Zest', 'White Peach', 'Brioche', 'Chalk / Saline Minerality'],
      secondary: ['Toasted Hazelnuts', 'Crushed Oyster Shell', 'Honeysuckle', 'Fresh Dough', 'Candied Ginger', 'Black Truffle'],
      palate: "Vibrant, persistent mousse with crystalline acidity, chalky tension, tactile salinity, and an extraordinarily long, expansive finish."
    },

    foodPairings: CHAMPAGNE_FOOD_PAIRINGS,

    subRegions: CHAMPAGNE_SUBREGIONS,
    grandCrus: CHAMPAGNE_GRAND_CRUS,
    premierCrus: CHAMPAGNE_PREMIER_CRUS,
    technicalRegulations: CHAMPAGNE_TECHNICAL_REGULATIONS,
    prestigeCuvees: CHAMPAGNE_PRESTIGE_CUVEES,
    iconicGrowers: CHAMPAGNE_ICONIC_GROWERS,
    iconicDomaines: CHAMPAGNE_ICONIC_GROWERS
  },

  // ==========================================================================
  // 2. BURGUNDY
  // ==========================================================================
  'burgundy': {
    id: 'burgundy',
    name: "Burgundy (Bourgogne)",
    country: 'France',
    countryCode: 'FR',
    aliases: ['burgundy', 'bourgogne', 'cote de nuits', 'cote de beaune', 'côte de nuits', 'côte de beaune', 'chablis', 'cote chalonnaise', 'maconnais', 'mâconnais', 'beaujolais'],
    tagline: "The World Benchmark for Pinot Noir & Chardonnay Terroir",
    summary: "Stretching from Chablis in the north down to the Mâconnais in the south, Burgundy is the spiritual home of terroir-driven winemaking. Here, microscopic variations in Jurassic limestone and clay soils produce the most sought-after Pinot Noir and Chardonnay on Earth.",
    center: [47.0500, 4.8333],
    zoom: 9,
    bounds: [[46.20, 3.70], [47.90, 5.20]],
    heroGradient: 'linear-gradient(135deg, #2b0914 0%, #4a1024 50%, #d4af37 100%)',
    accentColor: '#800020',

    terroir: {
      climate: "Semi-Continental with cold winters and warm, sunny summers. Susceptible to springtime frosts and localized summer hail storms.",
      soil: "Jurassic limestone (Bathonian and Bajocian) mixed with varying proportions of calcareous clay and marl. Iron-rich red soils favor Pinot Noir, while white limestone favors Chardonnay.",
      elevation: "200m to 400m along the east-southeast facing slopes of the limestone escarpment known as the Côte d'Or (Golden Slope).",
      riverInfluence: "The Saône River valley creates atmospheric warmth and breezes that gently ventilate the hillsides."
    },

    grapes: [
      { name: 'Pinot Noir', percentage: 51, type: 'Red', role: "Produces red Burgundies of haunting aromatics, silky tannins, earthy complexity, and profound transparency to soil." },
      { name: 'Chardonnay', percentage: 48, type: 'White', role: "Yields white Burgundies of unmatched balance between richness, hazelnut nuances, and electric limestone tension." },
      { name: 'Aligoté', percentage: 1, type: 'White', role: "Historic, high-acid white grape producing crisp, floral, and savory aperitif wines (notably in Bouzeron)." }
    ],

    structure: {
      body: 6.5,
      acidity: 8.5,
      tannin: 6.0,
      sweetness: 1,
      alcohol: 13.0,
      agingPotential: "5 - 40+ Years"
    },

    classification: {
      system: "AOC Appellation d'Origine Contrôlée (Climat-based Hierarchy)",
      description: 'Burgundy classifies specific parcels of vineyard land (Climats) rather than producers or châteaux.',
      tiers: [
        { name: 'Grand Cru (1-2% of production)', detail: "33 legendary single vineyards (e.g. Romanée-Conti, Chambertin, Musigny, Montrachet, Corton-Charlemagne, Clos de Vougeot)." },
        { name: 'Premier Cru (10% of production)', detail: "Over 640 designated premier climat parcels (e.g., Beaune Grèves, Gevrey-Chambertin Clos Saint-Jacques, Meursault Perrières)." },
        { name: 'Village Appellation (37% of production)', detail: "Named village communes like Vosne-Romanée, Puligny-Montrachet, Chambolle-Musigny, Volnay, Pommard, and Chablis." },
        { name: 'Regional AOC (50% of production)', detail: "Bourgogne Rouge, Bourgogne Blanc, Bourgogne Hautes-Côtes, and Crémant de Bourgogne." }
      ]
    },

    flavorProfile: {
      primary: ['Wild Raspberry', 'Red Cherry', 'Forest Floor (Sous-bois)', 'White Peach', 'Hazelnut / Crushed Chalk'],
      secondary: ['Black Truffle', 'Dried Rose Petals', 'Clove', 'Flint / Gunpowder', 'Warm Brioche'],
      palate: "Silken, weightless power with seamless acidity, supple tannins, and kaleidoscopic mineral length."
    },

    foodPairings: BURGUNDY_FOOD_PAIRINGS,

    subRegions: BURGUNDY_SUBREGIONS,
    grandCrus: BURGUNDY_GRAND_CRUS,
    premierCrus: BURGUNDY_PREMIER_CRUS,
    technicalRegulations: BURGUNDY_TECHNICAL_REGULATIONS,
    prestigeMonopoles: BURGUNDY_PRESTIGE_MONOPOLES,
    whiteBenchmarks: BURGUNDY_WHITE_BENCHMARKS,
    prestigeCuvees: BURGUNDY_PRESTIGE_MONOPOLES,
    iconicDomaines: BURGUNDY_ICONIC_DOMAINES,
    iconicGrowers: BURGUNDY_ICONIC_DOMAINES
  },

  // ==========================================================================
  // 3. ALSACE
  // ==========================================================================
  'alsace': {
    id: 'alsace',
    name: "Alsace",
    country: 'France',
    countryCode: 'FR',
    aliases: ['alsace', 'vin d\'alsace', 'haut-rhin', 'bas-rhin', 'riquewihr', 'ribeauville', 'ribeauvillé', 'colmar', 'kaysersberg', 'eguisheim', 'turckheim', 'thann', 'guebwiller', 'molsheim', 'barr', 'andlau', 'dambach', 'cremant d\'alsace', 'crémant d\'alsace'],
    tagline: "The European Kaleidoscope of Terroir & Noble White Varieties",
    summary: "Sheltered by the Vosges Mountains in northeast France, Alsace is one of the world's greatest cool-climate, aromatic white wine capitals. Blessed with a dry rain-shadow microclimate and 13 distinct bedrock formations, Alsace crafts dry, pure, and noble sweet expressions of Riesling, Gewurztraminer, Pinot Gris, and Muscat, alongside vibrant Crémant d'Alsace and rising Grand Cru Pinot Noir.",
    center: [48.1500, 7.3000],
    zoom: 10,
    bounds: [[47.70, 7.00], [48.75, 7.70]],
    heroGradient: 'linear-gradient(135deg, #1b3a24 0%, #2e5939 50%, #d4af37 100%)',
    accentColor: '#2e7d32',

    terroir: {
      climate: "Semi-continental with cold winters, hot sunny summers, and exceptionally dry autumns. Sheltered by the Vosges Mountains (Colmar is France's 2nd driest wine city with ~500mm rain/year).",
      soil: "The most complex geological mosaic in Europe: Paleozoic granite, volcanic rhyolite, pink Buntsandstein sandstone, marine Muschelkalk limestone, Keuper gypsiferous marls, and loess.",
      elevation: "200m to 470m (Rangen de Thann) on steep terraced slopes along the eastern fault line of the Vosges.",
      riverInfluence: "Rhine River valley and fast-flowing mountain streams (Thur, Weiss, Fecht, Lauch, Andlau) ventilate hillside parcels."
    },

    grapes: [
      { name: 'Riesling', percentage: 22, type: 'White', role: "The noble king of Alsace: bone-dry, laser-precise, citrus, petrol, and crushed-rock minerality." },
      { name: 'Pinot Blanc / Auxerrois', percentage: 21, type: 'White', role: "Fresh orchard fruit, soft acidity; cornerstone of Crémant d'Alsace." },
      { name: 'Gewurztraminer', percentage: 19, type: 'White', role: "Exotic lychee, rosewater, ginger, cardamom, and unctuous, opulent texture." },
      { name: 'Pinot Gris', percentage: 16, type: 'White', role: "Rich, smoky, honeyed stone fruit, mushrooms, and versatile gastronomic weight." },
      { name: 'Pinot Noir', percentage: 11, type: 'Red', role: "Fresh cherry, raspberry, forest floor; elevated to Grand Cru status in Hengst & Vorbourg in 2022!" },
      { name: 'Sylvaner', percentage: 5, type: 'White', role: "Crisp, floral, saline; world-class Grand Cru expression in Zotzenberg." },
      { name: 'Muscat', percentage: 3, type: 'White', role: "Dry, aromatic aperitif with fresh grape, orange blossom, and mint." }
    ],

    structure: {
      body: 6.5,
      acidity: 9.0,
      tannin: 2.5,
      sweetness: 2,
      alcohol: 13.0,
      agingPotential: "5 - 30+ Years"
    },

    classification: {
      system: "AOC Appellation d'Origine Contrôlée & 2021 Sweetness Scale",
      description: "Hierarchy spanning 51 Grand Crus, single Lieux-Dits, Communal designations, Regional varietal AOCs, and Crémant d'Alsace.",
      tiers: [
        { name: 'Alsace Grand Cru AOC (51 Crus)', detail: "Strictly delimited single vineyards (e.g. Rangen, Schlossberg, Clos Sainte Hune/Rosacker, Brand, Sommerberg, Hengst, Zotzenberg)." },
        { name: 'Alsace Communal & Lieu-Dit AOC', detail: "Designated village DGCs (e.g. Scherwiller, Blienschwiller, Côtes de Barr) and iconic walled single parcels." },
        { name: 'Alsace AOC (Regional Varietal)', detail: "100% single-varietal wines labeled by grape variety with mandatory sweetness scale (Sec, Demi-Sec, Moelleux, Doux)." },
        { name: 'Crémant d\'Alsace AOC', detail: "Traditional method sparkling wine; France's largest crémant AOC with elite 'Émotion' 24-month lees category." },
        { name: 'Vendanges Tardives (VT) & SGN', detail: "Prestigious late harvest and noble rot botrytis sweet wines with strict minimum natural must weights." }
      ]
    },

    flavorProfile: {
      primary: ['Meyer Lemon / Lime Zest', 'White Peach', 'Lychee & Rosewater', 'Jasmine Flower', 'Crushed Quartz / Flint'],
      secondary: ['Smoky Petrol / Kerosene', 'Ginger & Star Anise', 'Beeswax & Honey', 'Dried Apricot', 'Noble Botrytis Spice'],
      palate: "Vibrant, chiseled, highly aromatic attack with soaring crystalline acidity, kaleidoscopic bedrock minerality, and extraordinarily pure length."
    },

    foodPairings: ALSACE_FOOD_PAIRINGS,

    subRegions: ALSACE_SUBREGIONS,
    grandCrus: ALSACE_GRAND_CRUS,
    technicalRegulations: ALSACE_TECHNICAL_REGULATIONS,
    prestigeMonopoles: ALSACE_PRESTIGE_MONOPOLES,
    prestigeCuvees: ALSACE_PRESTIGE_MONOPOLES,
    iconicDomaines: ALSACE_ICONIC_DOMAINES,
    iconicGrowers: ALSACE_ICONIC_DOMAINES
  },

  // ==========================================================================
  // 4. CORSICA
  // ==========================================================================
  'corsica': {
    id: 'corsica',
    name: "Corsica (Corse)",
    country: 'France',
    countryCode: 'FR',
    aliases: ['corsica', 'corse', 'patrimonio', 'ajaccio', 'calvi', 'figari', 'porto-vecchio', 'sartene', 'sartène', 'cap corse', 'coteaux du cap corse', 'muscat du cap corse', 'ile de beaute', 'île de beauté'],
    tagline: "The Scented Mountain in the Sea: Granitic Power & Indigenous Soul",
    summary: "Rising dramatically from the Mediterranean like a fortress of granite and schist, Corsica (L'Île de Beauté) is one of Europe's most distinctive, untamed terroirs. Scented with the wild aromatic maquis shrub and swept by 5 Mediterranean winds, the island crafts singular wines from indigenous cépages: perfumed, red-berried Sciaccarellu on Hercynian granite, structured, age-worthy Niellucciu on Patrimonio's limestone, and crystalline, saline Vermentinu and Biancu Gentile.",
    center: [42.1500, 9.1000],
    zoom: 9,
    bounds: [[41.30, 8.50], [43.05, 9.60]],
    heroGradient: 'linear-gradient(135deg, #1b261b 0%, #2f4530 50%, #d4af37 100%)',
    accentColor: '#2e7d32',

    terroir: {
      climate: "Extreme Mediterranean climate with the highest annual sunshine in France (~2,750 hours/year), moderated by powerful maritime sea breezes and the cooling thermal downdrafts of the 2,700m high Monte Cinto mountain chain.",
      soil: "Two distinct geological realms: 'Corse Cristalline' (ancient Hercynian pink granite, porphyry, and volcanic tufa in the west and south) vs. 'Corse Schisteuse' (Alpine metamorphic schists, flysch, and pure Cretaceous limestone in the north and east).",
      elevation: "Sea level coastal coves up to 550m on steep mountain amphitheaters (e.g. Patrimonio and Sartène).",
      riverInfluence: "Torrents descending from snow-capped alpine peaks (Golo, Tavignano, Rizzanese) funnel brisk mountain drafts through coastal valleys."
    },

    grapes: [
      { name: 'Sciaccarellu', percentage: 32, type: 'Red', role: "The indigenous jewel of Corsican granite: pale ruby hue, wild strawberry, redcurrant, white pepper, maquis garrigue, and fine, crunchy tannins (dominant in Ajaccio and Sartène)." },
      { name: 'Niellucciu', percentage: 30, type: 'Red', role: "Corsica's noble power grape (genetic twin of Sangiovese): deep inky color, dark cherry, leather, dried herbs, scorched earth, and massive structural longevity (dominant in Patrimonio)." },
      { name: 'Vermentinu (Malvoisie de Corse)', percentage: 26, type: 'White', role: "World benchmark for dry aromatic whites: white peach, preserved lemon, wild chamomile, bitter almond finish, and intense crushed-stone marine salinity." },
      { name: 'Biancu Gentile & Minustellu', percentage: 7, type: 'White / Red', role: "Ancient recovered ancestral varieties: Biancu Gentile delivers unctuous apricot and beeswax richness; Minustellu (Graciano) adds dark spice and color." },
      { name: 'Muscat Blanc à Petits Grains', percentage: 5, type: 'White', role: "Crafts luscious, unctuous, sun-dried Vin Doux Naturel in Muscat du Cap Corse AOC." }
    ],

    structure: {
      body: 7.5,
      acidity: 7.5,
      tannin: 7.0,
      sweetness: 1,
      alcohol: 13.5,
      agingPotential: "5 - 25+ Years"
    },

    classification: {
      system: "AOC Appellation d'Origine Contrôlée (9 AOCs) & IGP Île de Beauté",
      description: "Appellation hierarchy spanning 1 Cru Appellation (Patrimonio), 1 Communal AOC (Ajaccio), 5 Regional DGC Sub-Appellations under Vin de Corse AOC, 1 Sweet VDN AOC, and IGP Île de Beauté.",
      tiers: [
        { name: 'Patrimonio AOC (Cru Appellation)', detail: "Northern limestone jewel established in 1968; France's 1st organic appellation benchmark (Niellucciu & Vermentinu)." },
        { name: 'Ajaccio AOC (Communal Appellation)', detail: "Historic granitic western amphitheater requiring min. 60% indigenous Sciaccarellu (Clos d'Alzon, Comte Peraldi)." },
        { name: 'Corse AOC & 5 DGC Sub-Appellations', detail: "Corse Calvi, Corse Sartène, Corse Figari (Europe's southernmost vineyards), Corse Porto-Vecchio, Corse Coteaux du Cap Corse." },
        { name: 'Muscat du Cap Corse AOC', detail: "Prestige sun-drenched Vin Doux Naturel produced on steep schist terraces." },
        { name: 'IGP Île de Beauté', detail: "Creative island denomination allowing ancient recovered varieties (Biancu Gentile, Genovese, Minustellu)." }
      ]
    },

    flavorProfile: {
      primary: ['Wild Maquis Herbs (Myrtle/Rosemary)', 'Wild Mountain Strawberry', 'Tart Redcurrant', 'Blood Orange / Bergamot', 'Crushed Granite / Saline Sea Spray'],
      secondary: ['Smoky Leather / Bresaola', 'White Pepper & Clove', 'Dried Fig', 'Beeswax & Almond', 'Scorched Earth'],
      palate: "Vibrant, sun-drenched attack with electric Mediterranean salinity, crunchy wild red fruit, savory herbal maquis grip, and a long, peppery, mineral finish."
    },

    foodPairings: CORSICA_FOOD_PAIRINGS,

    subRegions: CORSICA_SUBREGIONS,
    technicalRegulations: CORSICA_TECHNICAL_REGULATIONS,
    benchmarkEstates: CORSICA_BENCHMARK_ESTATES,
    prestigeEstates: CORSICA_BENCHMARK_ESTATES,
    prestigeCuvees: CORSICA_BENCHMARK_ESTATES,
    iconicDomaines: CORSICA_ICONIC_DOMAINES,
    iconicGrowers: CORSICA_ICONIC_DOMAINES
  },

  // ==========================================================================
  // 5. BORDEAUX
  // ==========================================================================
  'bordeaux': {
    id: 'bordeaux',
    name: "Bordeaux",
    country: 'France',
    countryCode: 'FR',
    aliases: ['bordeaux', 'medoc', 'médoc', 'haut-medoc', 'haut-médoc', 'pauillac', 'margaux', 'saint-julien', 'saint-estephe', 'saint-estèphe', 'graves', 'pessac-leognan', 'pessac-léognan', 'saint-emilion', 'saint-émilion', 'pomerol', 'sauternes'],
    tagline: "Aristocratic Left & Right Bank Châteaux",
    summary: "Surrounding the Gironde Estuary in southwest France, Bordeaux is the historical epicenter of fine wine commerce. Divided into the gravelly Left Bank (Cabernet Sauvignon dominant) and the clay-limestone Right Bank (Merlot & Cabernet Franc dominant), Bordeaux delivers power, structure, and centuries-long cellar life.",
    center: [44.8378, -0.5792],
    zoom: 9,
    bounds: [[44.20, -1.20], [45.50, 0.20]],
    heroGradient: 'linear-gradient(135deg, #190a12 0%, #380d22 50%, #d4af37 100%)',
    accentColor: '#4a0e17',

    terroir: {
      climate: "Temperate Maritime climate moderated by the Atlantic Ocean and the Gulf Stream current, shielded by the Landes pine forest.",
      soil: "Deep Quaternary gravel mounds (Left Bank) that retain heat and force vine roots deep; rich clay-limestone and iron-rich sand (Right Bank).",
      elevation: "Gently rolling hills from 5m to 100m above sea level.",
      riverInfluence: "The Garonne and Dordogne Rivers converge into the massive Gironde Estuary, buffering winter cold and nurturing botrytis in Sauternes."
    },

    grapes: [
      { name: 'Cabernet Sauvignon', percentage: 48, type: 'Red', role: "Provides authoritative tannins, cassis fruit, cedarwood nuances, and decades of aging potential." },
      { name: 'Merlot', percentage: 42, type: 'Red', role: "Imparts lush plum, velvety texture, rounded body, and early accessibility." },
      { name: 'Cabernet Franc', percentage: 7, type: 'Red', role: "Contributes fragrant violet florals, graphite, red berry brightness, and spicy lift." },
      { name: 'Petit Verdot', percentage: 3, type: 'Red', role: "Adds deep ink color, muscular tannin, and peppery backbone in small percentages." }
    ],

    structure: {
      body: 8.5,
      acidity: 7.0,
      tannin: 8.5,
      sweetness: 1,
      alcohol: 13.5,
      agingPotential: "10 - 50+ Years"
    },

    classification: {
      system: "Château-based Classifications (1855, Saint-Émilion, Graves, Crus Bourgeois)",
      description: 'Unlike Burgundy, Bordeaux classifies individual wine estates (Châteaux) rather than vineyard plots.',
      tiers: [
        { name: '1855 Classification (Left Bank Médoc & Sauternes)', detail: "Five Crus Classes headed by the First Growths (Lafite Rothschild, Latour, Margaux, Haut-Brion, Mouton Rothschild) and d'Yquem in Sauternes." },
        { name: 'Saint-Émilion Classification (Right Bank)', detail: "Ranked as Premier Grand Cru Classé (A & B) and Grand Cru Classé." },
        { name: 'Graves / Pessac-Léognan Classification', detail: "Classified for both Red and White wines since 1953/1959." },
        { name: 'Crus Bourgeois & Crus Artisans', detail: "High quality Médoc estates evaluated annually for exceptional value." }
      ]
    },

    flavorProfile: {
      primary: ['Blackcurrant (Cassis)', 'Dark Plum', 'Cedarwood', 'Graphite / Pencil Lead', 'Tobacco Leaf'],
      secondary: ['Cigar Box', 'Leather', 'Black Truffle', 'Dark Chocolate', 'Espresso'],
      palate: "Broad, commanding architecture with layered dark fruit, fine-grained aristocratic tannins, and aristocratic savory persistence."
    },

    foodPairings: BORDEAUX_FOOD_PAIRINGS,

    subRegions: BORDEAUX_SUBREGIONS,
    grandCrus: BORDEAUX_GRAND_CRUS,
    premierCrus: BORDEAUX_PREMIER_CRUS,
    technicalRegulations: BORDEAUX_TECHNICAL_REGULATIONS,
    prestigeEstates: BORDEAUX_PRESTIGE_ESTATES,
    prestigeCuvees: BORDEAUX_PRESTIGE_ESTATES,
    iconicChateaux: BORDEAUX_ICONIC_CHATEAUX,
    iconicDomaines: BORDEAUX_ICONIC_CHATEAUX
  },

  // ==========================================================================
  // 6. RHÔNE VALLEY
  // ==========================================================================
  'rhone': {
    id: 'rhone',
    name: "Rhône Valley",
    country: 'France',
    countryCode: 'FR',
    aliases: ['rhone', 'rhône', 'northern rhone', 'northern rhône', 'southern rhone', 'southern rhone', 'cote-rotie', 'côte-rôtie', 'hermitage', 'crozes-hermitage', 'cornas', 'saint-joseph', 'chateauneuf-du-pape', 'châteauneuf-du-pape', 'gigondas', 'vacqueyras', 'cotes du rhone', 'rayas'],
    tagline: "Granite Syrah Steep Slopes & Sun-Drenched Grenache Blends",
    summary: "Tracing the Rhône River south from Lyon to Avignon, the Rhône Valley is divided into two distinct worlds: the steep, granite terraces of the Northern Rhône, where Syrah reigns supreme, and the sun-soaked rolling hills of the Southern Rhône, famous for Grenache-led blends like Châteauneuf-du-Pape with its iconic galets roulés stones.",
    center: [44.7500, 4.8000],
    zoom: 9,
    bounds: [[44.00, 4.40], [45.60, 5.20]],
    heroGradient: 'linear-gradient(135deg, #1f0b18 0%, #3e1227 50%, #d4af37 100%)',
    accentColor: '#722f37',

    terroir: {
      climate: "Continental in the Northern Rhône with cold winters; Mediterranean in the Southern Rhône with warm, dry summers and intense sunshine.",
      soil: "Decomposed granite, schist, and clay in the north; large rounded quartz river stones (Galets Roulés), limestone, and sand in the south.",
      elevation: "100m to 450m on terraced hillside escarpments and plateau summits.",
      riverInfluence: "The Rhône River moderates temperatures, while the fierce Mistral wind dries vines, prevents disease, and concentrates berry flavors."
    },

    grapes: [
      { name: 'Syrah', percentage: 40, type: 'Red', role: "The sole red grape of the Northern Rhône: blackberry, cracked black pepper, smoked meat, olive tapenade, and violet." },
      { name: 'Grenache', percentage: 38, type: 'Red', role: "The king of the Southern Rhône: sweet kirsch, garrigue herbs, warmth, and plush mid-palate." },
      { name: 'Mourvèdre', percentage: 12, type: 'Red', role: "Adds gaminess, leather, dark color, and muscular aging tannins to southern blends." },
      { name: 'Viognier / Roussanne / Marsanne', percentage: 10, type: 'White', role: "Aromatic whites with apricot, honeysuckle, beeswax, and rich almond texture (Condrieu, Hermitage Blanc)." }
    ],

    structure: {
      body: 8.5,
      acidity: 6.5,
      tannin: 8.0,
      sweetness: 1,
      alcohol: 14.5,
      agingPotential: "5 - 35+ Years"
    },

    classification: {
      system: "AOC Cru System",
      description: 'Hierarchical pyramid from regional Côtes du Rhône up to the prestigious standalone Crus.',
      tiers: [
        { name: 'Northern Rhône Crus', detail: "Côte-Rôtie, Hermitage, Cornas, Saint-Joseph, Crozes-Hermitage, Condrieu, Château-Grillet, Saint-Péray." },
        { name: 'Southern Rhône Crus', detail: "Châteauneuf-du-Pape, Gigondas, Vacqueyras, Beaumes-de-Venise, Vinsobres, Rasteau, Tavel (legendary dry rosé)." },
        { name: 'Côtes du Rhône Villages', detail: "Designated villages (e.g., Cairanne, Plan de Dieu, Sablet) with higher quality standards." },
        { name: 'Côtes du Rhône AOC', detail: "The accessible regional base appellation across the entire valley." }
      ]
    },

    flavorProfile: {
      primary: ['Blackberry & Kirsch', 'Cracked Black Pepper', 'Garrigue (Wild Thyme/Rosemary)', 'Cured Meats', 'Violets'],
      secondary: ['Black Olive Tapenade', 'Smoked Bacon Fat', 'Leather', 'Licorice / Star Anise', 'Iron / Crushed Stone'],
      palate: "Heady, voluptuous, and spice-laden with muscular tannins, savory depth, and a warm, persistent herbal finish."
    },

    foodPairings: RHONE_FOOD_PAIRINGS,

    subRegions: RHONE_SUBREGIONS,
    grandCrus: RHONE_GRAND_CRUS,
    technicalRegulations: RHONE_TECHNICAL_REGULATIONS,
    prestigeCuvees: RHONE_PRESTIGE_CUVEES,
    iconicDomaines: RHONE_ICONIC_DOMAINES
  },

  // ==========================================================================
  // 7. LOIRE VALLEY
  // ==========================================================================
  'loire-valley': {
    id: 'loire-valley',
    name: "Loire Valley",
    country: 'France',
    countryCode: 'FR',
    aliases: ['loire', 'loire valley', 'sancerre', 'pouilly-fume', 'pouilly-fumé', 'chinon', 'bourgueil', 'saumur', 'saumur-champigny', 'vouvray', 'savennieres', 'savennières', 'muscadet'],
    tagline: "The Garden of France: Purity, Acidity & Diversity",
    summary: "Following France's longest river from central France to the Atlantic coast, the Loire Valley is a treasure trove of mineral-driven wines: flinty Sauvignon Blanc in Sancerre, honeyed Chenin Blanc in Vouvray, fragrant Cabernet Franc in Chinon, and saline Melon de Bourgogne in Muscadet.",
    center: [47.3500, 0.7000],
    zoom: 8,
    bounds: [[46.80, -1.80], [48.00, 3.20]],
    heroGradient: 'linear-gradient(135deg, #1b3b2b 0%, #2e5d44 50%, #d4af37 100%)',
    accentColor: '#2e5d44',

    terroir: {
      climate: "Oceanic Maritime in the west transitioning to Semi-Continental in the central and upper valley.",
      soil: "Tuffeau chalk (white porous limestone), Silex (flint), Kimmeridgian marl, and metamorphic schist.",
      elevation: "50m to 250m on slopes overlooking the Loire and its tributaries (Cher, Vienne, Indre).",
      riverInfluence: "The majestic Loire River acts as a thermal conductor, moderating temperature extremes."
    },

    grapes: [
      { name: 'Sauvignon Blanc', percentage: 30, type: 'White', role: "Pure, chiseled, gooseberry, citrus, and gunflint minerality in Sancerre and Pouilly-Fumé." },
      { name: 'Chenin Blanc', percentage: 28, type: 'White', role: "Incredible versatility from bone-dry to lusciously sweet and sparkling (Vouvray, Savennières)." },
      { name: 'Cabernet Franc', percentage: 25, type: 'Red', role: "Aromatic red wines of raspberry, violet, graphite, and bell pepper elegance (Chinon, Saumur-Champigny)." },
      { name: 'Melon de Bourgogne', percentage: 17, type: 'White', role: "Crisp, oyster-friendly, aged sur lie in Muscadet Sèvre-et-Maine." }
    ],

    structure: {
      body: 5.5,
      acidity: 9.0,
      tannin: 5.0,
      sweetness: 2,
      alcohol: 12.5,
      agingPotential: "3 - 25+ Years"
    },

    classification: {
      system: "AOC Appellation d'Origine Contrôlée with Premier & Grand Cru Cru Communaux",
      description: 'Regional and village AOCs celebrated for terroir fidelity.',
      tiers: [
        { name: 'Upper Loire (Centre-Loire)', detail: "Sancerre, Pouilly-Fumé, Menetou-Salon, Reuilly, Quincy." },
        { name: 'Touraine', detail: "Chinon, Bourgueil, Vouvray, Montlouis-sur-Loire, Cheverny." },
        { name: 'Anjou-Saumur', detail: "Saumur-Champigny, Savennières (Coulée de Serrant), Coteaux du Layon." },
        { name: 'Pays Nantais', detail: "Muscadet Sèvre-et-Maine with designated Crus Communaux (Clisson, Gorges)." }
      ]
    },

    flavorProfile: {
      primary: ['Crushed Flint / Silex', 'Lime Blossom', 'Green Pear', 'Red Currant', 'Chalky Mineral'],
      secondary: ['Chamomile', 'Beeswax', 'Graphite', 'Bell Pepper / Herbaceous', 'Honeyed Quince'],
      palate: "Racy, electric acidity with vibrant fruit purity, tension, and a long, saline, mineral-dusted finish."
    },

    foodPairings: LOIRE_FOOD_PAIRINGS,

    subRegions: LOIRE_SUBREGIONS,
    grandCrus: LOIRE_GRAND_CRUS,
    premierCrus: LOIRE_PREMIER_CRUS,
    technicalRegulations: LOIRE_TECHNICAL_REGULATIONS,
    prestigeCuvees: LOIRE_PRESTIGE_CUVEES,
    iconicDomaines: LOIRE_ICONIC_DOMAINES
  },

  // ==========================================================================
  // 8. PIEDMONT
  // ==========================================================================
  'piedmont': {
    id: 'piedmont',
    name: "Piedmont (Piemonte)",
    country: 'Italy',
    countryCode: 'IT',
    aliases: ['piedmont', 'piemonte', 'barolo', 'barbaresco', 'langhe', 'roero', 'alba', 'asti', 'nebbiolo', 'barbera'],
    tagline: "The Land of Fog, Nebbiolo Kings & White Truffles",
    summary: "Nestled at the foot of the Italian Alps in northwestern Italy, Piedmont is Italy's culinary and fine-wine crown jewel. Famous for its autumn fog (nebbia) and limestone hillsides of the Langhe, Piedmont produces Barolo (\"The King of Wines and Wine of Kings\") and Barbaresco from the noble Nebbiolo grape.",
    center: [44.6500, 7.9500],
    zoom: 10,
    bounds: [[44.00, 7.00], [45.50, 9.00]],
    heroGradient: 'linear-gradient(135deg, #240a14 0%, #461328 50%, #d4af37 100%)',
    accentColor: '#5c102a',

    terroir: {
      climate: "Continental with Alpine protection from cold north winds; hot sunny summers, foggy autumns, and cold winters.",
      soil: "Tortonian blue marl (producing fragrant, softer Barolo in La Morra/Barolo) and Helvetian / Serravallian sandstone-limestone (producing muscular, long-lived Barolo in Serralunga/Monforte).",
      elevation: "200m to 550m on steep south and southwest hillside amphitheatres.",
      riverInfluence: "The Tanaro River separates the Langhe hills from the Roero sandy cliffs, shaping cool nighttime airflow."
    },

    grapes: [
      { name: 'Nebbiolo', percentage: 45, type: 'Red', role: "Pale garnet in color yet packing ferocious tannins, soaring acidity, and hypnotic aromas of tar, roses, cherry, and truffles." },
      { name: 'Barbera', percentage: 35, type: 'Red', role: "Vibrant, juicy, low in tannin with mouthwatering acidity and rich black cherry fruit (Barbera d'Alba & d'Asti)." },
      { name: 'Dolcetto', percentage: 12, type: 'Red', role: "Deep purple, dry, plummy, with pleasant bitter almond notes suited for everyday dining." },
      { name: 'Cortese & Arneis', percentage: 8, type: 'White', role: "Crisp, mineral white wines (Gavi and Roero Arneis) brimming with citrus and almond blossom." }
    ],

    structure: {
      body: 8.5,
      acidity: 9.0,
      tannin: 9.5,
      sweetness: 1,
      alcohol: 14.5,
      agingPotential: "10 - 40+ Years"
    },

    classification: {
      system: "DOCG & DOC System with Menzione Geografica Aggiuntiva (MGA / Single Vineyards)",
      description: 'Piedmont boasts the highest number of DOCG appellations in Italy, with strict single-vineyard crus (MGAs).',
      tiers: [
        { name: 'Barolo DOCG (11 Communes)', detail: "Aged minimum 38 months (18 in wood); Riserva requires 62 months. Top crus: Cannubi, Brunate, Cerequio, Monprivato, Francia." },
        { name: 'Barbaresco DOCG (4 Communes)', detail: "Aged minimum 26 months (9 in wood); slightly warmer microclimate yields earlier elegance. Top crus: Asili, Rabajà, Martinenga." },
        { name: "Barbera d'Alba / d'Asti Superiore DOCG", detail: "High-elevation, oak-aged Barbera of rich concentration." },
        { name: 'Langhe Nebbiolo DOC', detail: "Declassified crus and younger vines offering brilliant Barolo-like character with early approachability." }
      ]
    },

    flavorProfile: {
      primary: ['Sour Red Cherry', 'Dried Rose Petals', 'Tar / Asphalt', 'Orange Peel', 'Anise'],
      secondary: ['White Truffle', 'Leather', 'Sweet Tobacco', 'Forest Floor', 'Balsamic / Dried Herbs'],
      palate: "Aristocratic translucence with high-octane acidity, gripping fine-grained tannins, and an infinite savory, floral finish."
    },

    foodPairings: PIEDMONT_FOOD_PAIRINGS,

    subRegions: PIEDMONT_SUBREGIONS,
    grandCrus: PIEDMONT_GRAND_CRUS,
    technicalRegulations: PIEDMONT_TECHNICAL_REGULATIONS,
    prestigeCuvees: PIEDMONT_PRESTIGE_CUVEES,
    iconicDomaines: PIEDMONT_ICONIC_DOMAINES,
    iconicProducers: PIEDMONT_ICONIC_DOMAINES
  },

  // ==========================================================================
  // 9. TUSCANY
  // ==========================================================================
  'tuscany': {
    id: 'tuscany',
    name: "Tuscany (Toscana)",
    country: 'Italy',
    countryCode: 'IT',
    aliases: ['tuscany', 'toscana', 'chianti', 'chianti classico', 'montalcino', 'brunello di montalcino', 'rosso di montalcino', 'bolgheri', 'montepulciano', 'vino nobile', 'maremma', 'super tuscan', 'toscana igt'],
    tagline: "Sun-Drenched Cypress Hills, Sangiovese & Super Tuscans",
    summary: "From the medieval cypress-lined hills of Chianti Classico and Montalcino to the sun-bathed coastal plains of Bolgheri, Tuscany is Italy's most iconic wine landscape. Here, Sangiovese produces wines of bright cherry, leather, and herbal vitality, while coastal estates craft world-famous Bordeaux-style Super Tuscans (Sassicaia, Ornellaia).",
    center: [43.4000, 11.2000],
    zoom: 9,
    bounds: [[42.00, 10.00], [44.50, 12.50]],
    heroGradient: 'linear-gradient(135deg, #1c150b 0%, #44280f 50%, #d4af37 100%)',
    accentColor: '#8b0000',

    terroir: {
      climate: "Mediterranean on the coast transitioning to warm Continental inland with high diurnal temperature swings that preserve acidity.",
      soil: "Galestro (crumbly clay schist), Alberese (hard limestone), and marine clay-sand in the interior; alluvial gravel and clay in coastal Bolgheri.",
      elevation: "150m to 600m on rolling Tuscan hillsides.",
      riverInfluence: "The Arno and Ombrone River valleys create airflow channels between the Apennine Mountains and the Tyrrhenian Sea."
    },

    grapes: [
      { name: 'Sangiovese', percentage: 65, type: 'Red', role: "The soul of Tuscany: tart red cherry, leather, dried oregano, savory tea, high acidity, and firm tannins." },
      { name: 'Cabernet Sauvignon & Merlot', percentage: 22, type: 'Red', role: "Super Tuscan components delivering plush dark fruit, cassis, and chocolate richness on coastal soils." },
      { name: 'Cabernet Franc & Syrah', percentage: 8, type: 'Red', role: "Spicy, floral aromatics in modern coastal blends." },
      { name: 'Trebbiano & Vermentino', percentage: 5, type: 'White', role: "Crisp, citrusy coastal whites and traditional sweet Vin Santo dessert wine." }
    ],

    structure: {
      body: 8.0,
      acidity: 8.5,
      tannin: 8.0,
      sweetness: 1,
      alcohol: 14.0,
      agingPotential: "5 - 35+ Years"
    },

    classification: {
      system: "DOCG, DOC & Toscana IGT (Super Tuscan)",
      description: 'Strict traditional DOCGs alongside innovative IGT categories.',
      tiers: [
        { name: 'Brunello di Montalcino DOCG', detail: "100% Sangiovese Grosso aged minimum 5 years (2 in oak) before release; Riserva requires 6 years." },
        { name: 'Chianti Classico DOCG (Gran Selezione / Riserva)', detail: "The historic heartland between Florence and Siena with new official UGAs (Panzano, Radda, Gaiole, Castellina, Greve)." },
        { name: 'Bolgheri DOC & Bolgheri Sassicaia DOCG', detail: "Tuscan coast home of Bordeaux blends (Sassicaia, Ornellaia, Masseto)." },
        { name: 'Vino Nobile di Montepulciano DOCG', detail: "Sangiovese (Prugnolo Gentile) aged in large Slavonian oak casks." }
      ]
    },

    flavorProfile: {
      primary: ['Tart Red Cherry', 'Blood Orange', 'Dried Oregano / Rosemary', 'Leather', 'Ripe Plum'],
      secondary: ['Balsamic Reduction', 'Sun-Dried Tomatoes', 'Cured Tobacco', 'Cacao', 'Crushed Clay / Terra Cotta'],
      palate: "Energetic, savory, and structured with mouth-watering acidity, rustic fine tannins, and a long herb-tinged finish."
    },

    foodPairings: TUSCANY_FOOD_PAIRINGS,

    subRegions: TUSCANY_SUBREGIONS,
    grandCrus: TUSCANY_GRAND_CRUS,
    technicalRegulations: TUSCANY_TECHNICAL_REGULATIONS,
    prestigeEstates: TUSCANY_PRESTIGE_ESTATES,
    prestigeCuvees: TUSCANY_PRESTIGE_ESTATES,
    iconicDomaines: TUSCANY_ICONIC_DOMAINES,
    iconicProducers: TUSCANY_ICONIC_DOMAINES
  },

  // ==========================================================================
  // 10. CALIFORNIA
  // ==========================================================================
  'california': {
    id: 'california',
    name: "California (Napa & Sonoma)",
    country: 'USA',
    countryCode: 'US',
    aliases: ['california', 'napa valley', 'napa', 'sonoma', 'sonoma county', 'sonoma coast', 'russian river valley', 'santa cruz mountains', 'central coast', 'paso robles', 'oakville', 'rutherford', 'stags leap', 'howell mountain', 'mt. veeder', 'mayacamas', 'washington', 'columbia valley'],
    tagline: "Sun-Kissed Valleys, Coastal Fogs & Cult Cabernets",
    summary: "Blessed with brilliant Mediterranean sunshine and cooling marine fogs drawn from the Pacific Ocean, California produces some of the most opulent, opulent, and globally revered wines. Napa Valley stands as the world capital for plush, powerful Cabernet Sauvignon, while Sonoma Coast, Russian River, and the Santa Cruz Mountains craft ethereal Pinot Noir and Chardonnay.",
    center: [38.4500, -122.3500],
    zoom: 9,
    bounds: [[34.00, -124.50], [39.50, -120.00]],
    heroGradient: 'linear-gradient(135deg, #1b261b 0%, #2f4530 50%, #d4af37 100%)',
    accentColor: '#c29b38',

    terroir: {
      climate: "Mediterranean with dry, sunny summers. Cooled by morning marine layer fog drawn through the Golden Gate and Petaluma Gap, burning off by midday.",
      soil: "Vastly diverse: volcanic tufa and basalt on mountain slopes; alluvial gravel fans (Rutherford Bench, Oakville) and sedimentary loam on the valley floor; goldridge sandy loam in Sonoma.",
      elevation: "Sea level in Carneros to over 800m (2,600ft) on Howell Mountain and Mt. Veeder above the fog line.",
      riverInfluence: "The Napa and Russian Rivers carve valley paths and provide morning drainage channels."
    },

    grapes: [
      { name: 'Cabernet Sauvignon', percentage: 42, type: 'Red', role: "The crown jewel: crème de cassis, blackberry liqueur, mocha, sweet French oak spice, and plush, fine-grained tannins." },
      { name: 'Chardonnay', percentage: 25, type: 'White', role: "From creamy, buttery golden styles to crisp, ocean-cooled, mineral-driven coastal bottlings." },
      { name: 'Pinot Noir', percentage: 18, type: 'Red', role: "Rich, luscious black cherry, cola, sassafras, and violet aromatics in Sonoma Coast and Russian River Valley." },
      { name: 'Zinfandel / Syrah', percentage: 15, type: 'Red', role: "Heritage old-vine Zinfandel with brambly blackberry, pepper, and velvet warmth." }
    ],

    structure: {
      body: 9.0,
      acidity: 6.5,
      tannin: 8.0,
      sweetness: 2,
      alcohol: 14.8,
      agingPotential: "5 - 30+ Years"
    },

    classification: {
      system: "AVA (American Viticultural Area)",
      description: 'Federally designated geographical boundaries defined by distinct climate, soil, and elevation.',
      tiers: [
        { name: 'Napa Valley AVAs (16 Sub-AVAs)', detail: "Valley Floor: Oakville, Rutherford, Stags Leap District, Yountville, Calistoga. Mountain: Howell Mountain, Mt. Veeder, Spring Mountain, Diamond Mountain, Atlas Peak." },
        { name: 'Sonoma County AVAs', detail: "Sonoma Coast, Russian River Valley, Alexander Valley, Dry Creek Valley, Moon Mountain, Fort Ross-Seaview." },
        { name: 'Santa Cruz Mountains AVA', detail: "High-elevation mountain ridge producing legendary balanced, mineral Cabernets (Ridge Monte Bello) and Chardonnays." },
        { name: 'Central Coast & Paso Robles', detail: "Paso Robles (Cabernet & Rhône varieties), Santa Barbara (Sta. Rita Hills Pinot Noir)." }
      ]
    },

    flavorProfile: {
      primary: ['Crème de Cassis', 'Ripe Blackberry', 'Dark Chocolate / Mocha', 'Vanilla Bean / French Oak', 'Black Cherry'],
      secondary: ['Rutherford Dust (Clay/Cocoa)', 'Espresso', 'Cedar / Cigar Box', 'Eucalyptus / Mint', 'Graphite'],
      palate: "Luxuriously full-bodied with seamless, velvety tannins, lavish black fruit concentration, and a lingering cocoa-spice finish."
    },

    foodPairings: CALIFORNIA_FOOD_PAIRINGS,

    subRegions: CALIFORNIA_SUBREGIONS,
    grandCrus: CALIFORNIA_GRAND_CRUS,
    technicalRegulations: CALIFORNIA_TECHNICAL_REGULATIONS,
    prestigeEstates: CALIFORNIA_PRESTIGE_ESTATES,
    prestigeCuvees: CALIFORNIA_PRESTIGE_ESTATES,
    iconicProducers: CALIFORNIA_ICONIC_PRODUCERS,
    iconicDomaines: CALIFORNIA_ICONIC_PRODUCERS
  },

  // ==========================================================================
  // 11. OREGON
  // ==========================================================================
  'oregon': {
    id: 'oregon',
    name: "Oregon (Willamette Valley)",
    country: 'USA',
    countryCode: 'US',
    aliases: ['oregon', 'willamette valley', 'willamette', 'dundee hills', 'ribbon ridge', 'yamhill-carlton', 'eola-amity hills', 'chehalem mountains', 'mcminnville', 'van duzer corridor'],
    tagline: "Pacific Northwest Pinot Noir Precision & Volcanic Soils",
    summary: "Located on the same 45th parallel north as Burgundy, Oregon's Willamette Valley is world-renowned for its cool-climate Pinot Noir and Chardonnay. Nestled between the Cascade Mountains and Coast Range, volcanic Jory soils and marine sedimentary beds produce wines of electric acidity, wild cranberry, and damp forest floor aromatics.",
    center: [45.2000, -123.1000],
    zoom: 10,
    bounds: [[44.00, -124.00], [46.00, -122.00]],
    heroGradient: 'linear-gradient(135deg, #13241b 0%, #223e30 50%, #d4af37 100%)',
    accentColor: '#30644b',

    terroir: {
      climate: "Cool Maritime / Mediterranean with wet, mild winters and warm, dry, luminous summers with long daylight hours.",
      soil: "Volcanic basalt (red Jory clay in Dundee Hills), ancient marine sedimentary sandstone (Willakenzie in Ribbon Ridge/Yamhill-Carlton), and windblown loess (Laurelwood).",
      elevation: "60m to 350m on gentle rolling hillsides.",
      riverInfluence: "The Willamette River flows northward, while the Van Duzer Corridor funnels cool Pacific ocean winds nightly."
    },

    grapes: [
      { name: 'Pinot Noir', percentage: 70, type: 'Red', role: "Vibrant red cherry, raspberry, pomegranate, earthy forest floor, truffle, and fine, mineral-etched tannins." },
      { name: 'Chardonnay', percentage: 20, type: 'White', role: "Chiseled, saline, citrus-driven, and hazelnut-scented whites rivaling the finest white Burgundies." },
      { name: 'Pinot Gris', percentage: 10, type: 'White', role: "Crisp, orchard-fruit forward, refreshing white wine." }
    ],

    structure: {
      body: 6.0,
      acidity: 8.5,
      tannin: 6.0,
      sweetness: 1,
      alcohol: 13.5,
      agingPotential: "5 - 25+ Years"
    },

    classification: {
      system: "Willamette Valley Nested AVAs",
      description: 'Recognized for precise geological sub-appellations.',
      tiers: [
        { name: 'Dundee Hills AVA', detail: "Famous iron-rich red volcanic Jory soils producing silky, perfumed red cherry and spice Pinot Noir." },
        { name: 'Ribbon Ridge & Yamhill-Carlton AVAs', detail: "Ancient marine sediment soils yielding darker, black fruit, structured, and savory/minerally Pinots." },
        { name: 'Eola-Amity Hills AVA', detail: "Direct path of the cool Van Duzer oceanic winds delivering piercing acidity, dark fruit, and thick skins." },
        { name: 'Chehalem Mountains & Laurelwood District', detail: "Highest elevation range with diverse loess and volcanic soils." }
      ]
    },

    flavorProfile: {
      primary: ['Wild Cranberry', 'Red Rainier Cherry', 'Pomegranate', 'Blood Orange', 'Crushed Wet Stone'],
      secondary: ['Damp Forest Floor (Pacific Conifer)', 'Chanterelle Mushrooms', 'Black Tea Leaf', 'Cardamom', 'Clove'],
      palate: "Silken, bright, and energetic with singing red fruit, crunchy acidity, and an authentic earthy, forest-floor finish."
    },

    foodPairings: OREGON_FOOD_PAIRINGS,

    subRegions: OREGON_SUBREGIONS,
    grandCrus: OREGON_GRAND_CRUS,
    technicalRegulations: OREGON_TECHNICAL_REGULATIONS,
    prestigeEstates: OREGON_PRESTIGE_ESTATES,
    prestigeCuvees: OREGON_PRESTIGE_ESTATES,
    iconicProducers: OREGON_ICONIC_PRODUCERS,
    iconicDomaines: OREGON_ICONIC_PRODUCERS
  },

  // ==========================================================================
  // 12. ITALY OTHER (VENETO, LOMBARDIA, SICILY, CAMPANIA, ALTO ADIGE, FRIULI)
  // ==========================================================================
  'italy-other': {
    id: 'italy-other',
    name: "Italy (Veneto, Lombardia & Sicily)",
    country: 'Italy',
    countryCode: 'IT',
    aliases: ['lombardia', 'valtellina', 'veneto', 'valpolicella', 'amarone', 'sicily', 'sicilia', 'etna', 'campania', 'taurasi', 'fiano', 'friuli', 'alto adige'],
    tagline: "Alpine Terraces, Dried Grape Amarone & Volcanic Mount Etna",
    summary: "Beyond Piedmont and Tuscany, Italy is a treasure trove of unique regional terroirs: the sheer granite Alpine terraces of Valtellina (mountain Nebbiolo/Chiavennasca), the appassimento dried-grape majesty of Amarone della Valpolicella in the Veneto, and the high-altitude volcanic ash slopes of Mount Etna in Sicily.",
    center: [45.4000, 11.0000],
    zoom: 8,
    bounds: [[37.00, 9.50], [46.50, 15.50]],
    heroGradient: 'linear-gradient(135deg, #24131b 0%, #472134 50%, #d4af37 100%)',
    accentColor: '#701c45',

    terroir: {
      climate: "Alpine Continental in Valtellina; Sub-alpine Mediterranean near Lake Garda in Veneto; Warm Mediterranean with high-altitude volcanic cooling on Mount Etna in Sicily.",
      soil: "Granite and sandy loam in Valtellina; limestone and basalt in Valpolicella; black volcanic basalt, pumice, and ash on Etna.",
      elevation: "200m to over 1,000m on mountain and volcano slopes.",
      riverInfluence: "Lake Garda, the Adige River, and the Adda River buffer temperature extremes."
    },

    grapes: [
      { name: 'Nebbiolo (Chiavennasca)', percentage: 30, type: 'Red', role: "Alpine Nebbiolo in Valtellina: mountain herbs, alpine cranberry, dry rose petals, and chiseled granite tension." },
      { name: 'Corvina & Rondinella', percentage: 35, type: 'Red', role: "The heart of Valpolicella and Amarone: dried cherry, fig, cocoa, and raisin richness from the appassimento process." },
      { name: 'Nerello Mascalese', percentage: 20, type: 'Red', role: "The \"Pinot Noir of the Mediterranean\" on Mount Etna: wild strawberry, volcanic ash, iron, and orange peel." },
      { name: 'Garganega & Fiano', percentage: 15, type: 'White', role: "Mineral, almond, and floral whites in Soave (Veneto) and Fiano di Avellino (Campania)." }
    ],

    structure: {
      body: 8.5,
      acidity: 8.0,
      tannin: 8.0,
      sweetness: 2,
      alcohol: 14.5,
      agingPotential: "8 - 35+ Years"
    },

    classification: {
      system: "DOCG & DOC System with Contrade (Single Vineyard Volcanic Plots)",
      description: 'Prestigious traditional Italian denominations.',
      tiers: [
        { name: 'Amarone della Valpolicella DOCG', detail: "Produced by drying harvested grapes for 3-4 months (Appassimento) before fermentation, yielding rich, unctuous 15-16% ABV wines." },
        { name: 'Valtellina Superiore DOCG (Lombardy)', detail: "Alpine Nebbiolo sub-zones: Grumello, Inferno, Sassella, Valgella, Maroggia, plus Sforzato (Sfursat) dried-grape style." },
        { name: 'Etna DOC (Sicily)', detail: "High-elevation volcanic crus (Contrade) on the slopes of active Mount Etna." },
        { name: 'Fiano di Avellino DOCG (Campania)', detail: "Volcanic, smoky, hazelnut-scented white wine with remarkable aging potential." }
      ]
    },

    flavorProfile: {
      primary: ['Dried Black Cherry', 'Mountain Cranberry', 'Dark Chocolate / Cocoa', 'Volcanic Ash / Iron', 'Orange Peel'],
      secondary: ['Dried Fig & Raisin', 'Alpine Herbs (Pine/Thyme)', 'Leather', 'Smoked Salt', 'Balsamic'],
      palate: "Deep, multi-dimensional, and savory with vibrant mountain acidity, layered dried fruits, and a lingering volcanic mineral finish."
    },

    foodPairings: ITALY_OTHER_FOOD_PAIRINGS,

    subRegions: ITALY_OTHER_SUBREGIONS,
    grandCrus: ITALY_OTHER_GRAND_CRUS,
    technicalRegulations: ITALY_OTHER_TECHNICAL_REGULATIONS,
    prestigeEstates: ITALY_OTHER_PRESTIGE_ESTATES,
    prestigeCuvees: ITALY_OTHER_PRESTIGE_ESTATES,
    iconicProducers: ITALY_OTHER_ICONIC_PRODUCERS,
    iconicDomaines: ITALY_OTHER_ICONIC_PRODUCERS
  },

  // ==========================================================================
  // 13. JAPAN (CHŪBU / YAMANASHI & NAGANO)
  // ==========================================================================
  'japan-chubu': {
    id: 'japan-chubu',
    name: "Japan (Chūbu / Yamanashi & Nagano)",
    country: 'Japan',
    countryCode: 'JP',
    aliases: ['japan', 'chubu', 'chūbu', 'yamanashi', 'nagano', 'koshu', 'katsunuma', 'hokkaido', 'yoichi'],
    tagline: "Mount Fuji Foothills, Delicate Koshu & Alpine Precision",
    summary: "Surrounded by the majestic Japanese Alps and Mount Fuji in central Japan (Chūbu region), Yamanashi and Nagano are the historical cradle of Japanese viticulture. Yamanashi is world-famous for Koshu, an ancient pale pink-skinned grape producing ethereal, delicate white wines of yuzu citrus, white peach, and subtle salinity that pair impeccably with Japanese gastronomy.",
    center: [35.6667, 138.5667],
    zoom: 10,
    bounds: [[35.00, 137.50], [43.50, 141.50]],
    heroGradient: 'linear-gradient(135deg, #182329 0%, #2b3a42 50%, #d4af37 100%)',
    accentColor: '#3d6175',

    terroir: {
      climate: "Temperate Alpine basin protected by surrounding mountain ranges, reducing annual rainfall compared to coastal Japan.",
      soil: "Volcanic ash loam (Kanto loam) and well-draining alluvial sand-gravel along mountain riverbeds.",
      elevation: "300m to 700m on sloping basin foothills.",
      riverInfluence: "Fuefuki and Kamanashi Rivers provide crisp alpine air drainage."
    },

    grapes: [
      { name: 'Koshu', percentage: 70, type: 'White', role: "Japan's indigenous icon: delicate yuzu citrus, white peach, jasmine floral, mild bitterness, and pristine salinity." },
      { name: 'Muscat Bailey A', percentage: 20, type: 'Red', role: "Light-bodied red wine with candied cherry, strawberry, and soft, silky tannins." },
      { name: 'Chardonnay & Merlot', percentage: 10, type: 'White', role: "Refined, cool-climate international varieties in high-altitude Nagano." }
    ],

    structure: {
      body: 4.0,
      acidity: 8.0,
      tannin: 2.0,
      sweetness: 1,
      alcohol: 11.5,
      agingPotential: "2 - 10 Years"
    },

    classification: {
      system: "GI Geographical Indication (GI Yamanashi & GI Nagano)",
      description: 'Strict standards ensuring 100% Japanese-grown grapes and authentic regional vinification.',
      tiers: [
        { name: 'GI Yamanashi (Katsunuma Basin)', detail: "The historic heartland of Koshu winemaking at the base of Mount Fuji." },
        { name: 'GI Nagano (Shinshu)', detail: "Higher altitude Alpine valleys specializing in Chardonnay and Merlot." }
      ]
    },

    flavorProfile: {
      primary: ['Yuzu & Sudachi Citrus', 'White Peach', 'Jasmine Flower', 'Green Apple', 'Wet River Stone'],
      secondary: ['Subtle White Pepper', 'Rice Koji / Umami notes', 'Ginger', 'Grapefruit Pith', 'Fresh Linen'],
      palate: "Whisper-light, delicate, and pure with refreshing citrus acidity, soft textural salinity, and an umami-friendly, clean finish."
    },

    foodPairings: JAPAN_FOOD_PAIRINGS,

    subRegions: JAPAN_SUBREGIONS,
    grandCrus: JAPAN_GRAND_CRUS,
    technicalRegulations: JAPAN_TECHNICAL_REGULATIONS,
    prestigeEstates: JAPAN_PRESTIGE_ESTATES,
    prestigeCuvees: JAPAN_PRESTIGE_ESTATES,
    iconicProducers: JAPAN_ICONIC_PRODUCERS,
    iconicDomaines: JAPAN_ICONIC_PRODUCERS
  },

  // ==========================================================================
  // 14. GERMANY (MOSEL)
  // ==========================================================================
  'germany-mosel': {
    id: 'germany-mosel',
    name: "Germany (Mosel & Rheingau)",
    country: 'Germany',
    countryCode: 'DE',
    aliases: ['germany', 'mosel', 'rheingau', 'nahe', 'pfalz', 'rheinhessen', 'bernkastel', 'wehlen', 'wiltingen', 'saar'],
    tagline: "The Zenith of Slate-Driven Riesling & Noble Prädikat Purity",
    summary: "From the dizzying 70-degree Devonian slate cliffs of the Mosel and Saar to the sun-drenched Rhine bends of the Rheingau and volcanic soils of the Nahe, Germany produces the world's most pristine, slate-mineral Rieslings spanning bone-dry Grosses Gewächs to legendary noble botrytis Trockenbeerenauslese.",
    center: [49.9167, 7.0667],
    zoom: 9,
    bounds: [[49.50, 6.40], [50.20, 8.30]],
    heroGradient: 'linear-gradient(135deg, #0d233a 0%, #1d4b68 50%, #d4af37 100%)',
    accentColor: '#1d4b68',

    terroir: {
      climate: "Marginal Cool Continental with Atlantic maritime moderations; extreme steep river gorge microclimates.",
      soil: "Devonian blue, gray, and red slate (Devonschiefer & Rotliegend), Taunus quartzite, tertiary limestone, and volcanic rhyolite.",
      elevation: "110m to 350m on steep south-facing river amphitheaters.",
      riverInfluence: "The Mosel, Saar, Ruwer, Rhine, and Nahe rivers provide critical solar reflection, thermal heat storage, and frost protection."
    },

    grapes: [
      { name: 'Riesling', percentage: 75, type: 'White', role: "The noble king of German terroir: crystalline lime, green apple, white peach, petrol, and wet slate minerality." },
      { name: 'Spätburgunder (Pinot Noir)', percentage: 15, type: 'Red', role: "Ethereal, perfumed, cool-climate red with wild cherry, forest floor, and silky fine tannins." },
      { name: 'Weissburgunder & Grauburgunder', percentage: 10, type: 'White', role: "Textured, gastronomic Pinot Blanc and Pinot Gris." }
    ],

    structure: {
      body: 4.5,
      acidity: 9.8,
      tannin: 2.0,
      sweetness: 2,
      alcohol: 11.5,
      agingPotential: "5 - 50+ Years"
    },

    classification: {
      system: "VDP.Classification (Grosse Lage) & German Wine Law Prädikat Scale",
      description: "Dual quality framework: VDP single-vineyard Grosses Gewächs (GG) dry classification alongside traditional sugar-based Prädikat scale (Kabinett to TBA).",
      tiers: [
        { name: 'VDP.Grosse Lage (Grand Cru)', detail: "Top single vineyard climats (e.g. Scharzhofberg, Wehlener Sonnenuhr, Berncasteler Doctor, Hermannshöhle, Keller G-Max)." },
        { name: 'VDP.Erste Lage (Premier Cru)', detail: "First-class historical sites expressing distinctive regional terroir." },
        { name: 'VDP.Ortswein & Gutswein', detail: "Village-level and estate entry bottlings setting the winery standard." },
        { name: 'Prädikatswein Hierarchy', detail: "Harvest must weight categories: Kabinett, Spätlese, Auslese, Beerenauslese (BA), Trockenbeerenauslese (TBA), and Eiswein." }
      ]
    },

    flavorProfile: {
      primary: ['Lime Zest & Green Apple', 'White Peach', 'Jasmine Blossom', 'Crushed Slate / Wet Stone', 'Grapefruit'],
      secondary: ['Smoky Petrol / Kerosene', 'Beeswax & Honey', 'Candied Ginger', 'Wild Mint', 'Noble Botrytis Saffron'],
      palate: "Weightless elegance, piercing crystalline acidity, gossamer texture, electric tension, and an endlessly reverberating slate mineral finish."
    },

    foodPairings: MOSEL_FOOD_PAIRINGS,
    subRegions: MOSEL_SUBREGIONS,
    grandCrus: MOSEL_GRAND_CRUS,
    technicalRegulations: MOSEL_TECHNICAL_REGULATIONS,
    prestigeMonopoles: MOSEL_PRESTIGE_ESTATES,
    prestigeCuvees: MOSEL_PRESTIGE_ESTATES,
    iconicDomaines: MOSEL_ICONIC_DOMAINES,
    iconicGrowers: MOSEL_ICONIC_DOMAINES
  },

  // ==========================================================================
  // 15. SPAIN (RIOJA & PRIORAT)
  // ==========================================================================
  'spain-rioja': {
    id: 'spain-rioja',
    name: "Spain (Rioja & Ribera del Duero)",
    country: 'Spain',
    countryCode: 'ES',
    aliases: ['spain', 'rioja', 'ribera del duero', 'priorat', 'rioja alta', 'rioja alavesa', 'haro', 'vega sicilia', 'pingus'],
    tagline: "The Noble Realm of Tempranillo, Gran Reserva & Ancient Slate",
    summary: "From the historic oak-lined bodegas of Haro in Rioja Alta and chalk terraces of Rioja Alavesa to the high-altitude Castilian plateau of Ribera del Duero and llicorella slate of Priorat, Spain crafts immortal Tempranillo and Garnacha balancing rich dark fruit, cedar, tobacco, and profound mineral depth.",
    center: [42.5000, -2.7500],
    zoom: 9,
    bounds: [[41.00, -4.50], [43.00, 0.50]],
    heroGradient: 'linear-gradient(135deg, #3d0c11 0%, #681822 50%, #d4af37 100%)',
    accentColor: '#8b0000',

    terroir: {
      climate: "Atlantic-Continental in Rioja Alta/Alavesa; Extreme High Continental in Ribera del Duero (750-1000m); Mediterranean in Priorat.",
      soil: "Calcareous clay-limestone (Arcillo-Calcarie), ferruginous clay, alluvial gravel terraces, white chalk marl, and Devonian Llicorella slate.",
      elevation: "400m to 1,000m across the Ebro valley and Castilian high plateau.",
      riverInfluence: "The Ebro and Duero rivers provide essential air drainage and diurnal temperature moderation."
    },

    grapes: [
      { name: 'Tempranillo (Tinto Fino)', percentage: 75, type: 'Red', role: "Spain's noble flagship: dried cherry, plum, tobacco, leather, vanilla, and cedar." },
      { name: 'Garnacha (Grenache)', percentage: 15, type: 'Red', role: "Lush wild strawberry, blood orange, white pepper, and opulent warmth." },
      { name: 'Graciano & Mazuelo', percentage: 5, type: 'Red', role: "Inky color, piercing acidity, and structured tannins for long-term aging." },
      { name: 'Viura (Macabeo)', percentage: 5, type: 'White', role: "Aristocratic oak-aged white Rioja with dried chamomile and hazelnut." }
    ],

    structure: {
      body: 7.5,
      acidity: 7.5,
      tannin: 7.5,
      sweetness: 1,
      alcohol: 14.0,
      agingPotential: "5 - 40+ Years"
    },

    classification: {
      system: "DOCa / DO Aging Hierarchy & Viñedo Singular (2017)",
      description: "Rigorous barrel and bottle aging requirements (Crianza, Reserva, Gran Reserva) alongside single-vineyard Viñedo Singular classification.",
      tiers: [
        { name: 'Viñedo Singular & Pagos', detail: "Strictly delimited single vineyard parcels (e.g. Las Beatas, Viña Tondonia, Vega Sicilia Único, Pingus, L'Ermita)." },
        { name: 'Gran Reserva', detail: "Minimum 5 years aging (2 in oak barricas, 2 in bottle) crafting legendary tertiary complexity." },
        { name: 'Reserva', detail: "Minimum 3 years aging (1 in oak barricas, 6 months in bottle) with harmonious fruit and oak balance." },
        { name: 'Crianza', detail: "Minimum 2 years aging (1 in oak barricas) emphasizing vibrant fruit and subtle spice." }
      ]
    },

    flavorProfile: {
      primary: ['Dried Red Cherry & Plum', 'Blackberry Liqueur', 'Vanilla Bean', 'Dill & Coconut (American Oak)', 'Tobacco Leaf'],
      secondary: ['Cigar Box & Leather', 'Balsamic Fig', 'Dark Cocoa', 'Crushed Slate', 'Roasted Hazelnuts'],
      palate: "Rich, velvety, and aristocratic with melted fine tannins, savory leather complexity, and enduring balsamic freshness."
    },

    foodPairings: RIOJA_FOOD_PAIRINGS,
    subRegions: RIOJA_SUBREGIONS,
    grandCrus: RIOJA_GRAND_CRUS,
    technicalRegulations: RIOJA_TECHNICAL_REGULATIONS,
    prestigeMonopoles: RIOJA_PRESTIGE_ESTATES,
    prestigeCuvees: RIOJA_PRESTIGE_ESTATES,
    iconicDomaines: RIOJA_ICONIC_DOMAINES,
    iconicGrowers: RIOJA_ICONIC_DOMAINES
  },

  // ==========================================================================
  // 16. CHILE (MAIPO VALLEY)
  // ==========================================================================
  'chile-maipo': {
    id: 'chile-maipo',
    name: "Chile (Maipo & Colchagua)",
    country: 'Chile',
    countryCode: 'CL',
    aliases: ['chile', 'maipo', 'colchagua', 'casablanca', 'peumo', 'puente alto', 'apalta', 'almaviva', 'don melchor', 'sena', 'chadwick'],
    tagline: "The Andean Sanctuary of Cabernet Sauvignon & Rescued Carmenère",
    summary: "Sheltered between the towering Andean Cordillera and the coastal Pacific range, Chile is a phylloxera-free paradise of ungrafted old vines. Renowned for aristocratic Andean Cabernet Sauvignon in Puente Alto, opulent Carmenère in Apalta and Peumo, and crystalline coastal whites in Casablanca.",
    center: [-33.6000, -70.7000],
    zoom: 8,
    bounds: [[-35.50, -72.00], [-32.50, -70.00]],
    heroGradient: 'linear-gradient(135deg, #1c2e24 0%, #2f4f3e 50%, #d4af37 100%)',
    accentColor: '#2f4f3e',

    terroir: {
      climate: "Mediterranean with semi-arid conditions, high solar radiation, and dramatic Andean katabatic night cooling.",
      soil: "Quaternary alluvial gravel terraces (Terraza 3) in Alto Maipo, decomposed pink granite in Apalta, and marine clay in Casablanca.",
      elevation: "200m to 850m along the Andean foothill benches and coastal bluffs.",
      riverInfluence: "The Maipo, Cachapoal, and Tinguiririca rivers carry nutrient-rich glacial meltwater and create ventilation corridors."
    },

    grapes: [
      { name: 'Cabernet Sauvignon', percentage: 60, type: 'Red', role: "South America's greatest Cabernet: cassis, wild mint, eucalyptus, cedar, and graphite." },
      { name: 'Carmenère', percentage: 20, type: 'Red', role: "Chile's signature rescued grape: black plum, sweet paprika, dark chocolate, and velvet tannins." },
      { name: 'Sauvignon Blanc & Chardonnay', percentage: 10, type: 'White', role: "Coastal Pacific whites with grapefruit, jalapeño, and saline minerality." },
      { name: 'Syrah & Cabernet Franc', percentage: 10, type: 'Red', role: "Opulent spice, dark berry concentration, and floral lift in luxury blends." }
    ],

    structure: {
      body: 8.0,
      acidity: 7.5,
      tannin: 8.0,
      sweetness: 1,
      alcohol: 14.5,
      agingPotential: "5 - 35+ Years"
    },

    classification: {
      system: "Chilean D.O. Hierarchy & Viticultural Designations (Costa, Entre Cordilleras, Andes)",
      description: "East-to-West geographical labeling based on proximity to the Andes or Pacific Ocean alongside D.O. subregions.",
      tiers: [
        { name: 'Andes (Andean Foothills)', detail: "High elevation gravel benches producing premier Cabernet Sauvignon (Puente Alto, Pirque)." },
        { name: 'Entre Cordilleras (Central Valleys)', detail: "Warm valley amphitheaters ideal for Carmenère and Syrah (Apalta, Peumo)." },
        { name: 'Costa (Pacific Coast)', detail: "Cool maritime valleys moderated by the Humboldt Current for Sauvignon Blanc and Pinot Noir (Casablanca, Leyda)." }
      ]
    },

    flavorProfile: {
      primary: ['Cassis & Black Cherry', 'Wild Mint & Eucalyptus', 'Black Plum', 'Dark Chocolate & Cocoa', 'Pencil Lead / Graphite'],
      secondary: ['Sweet Paprika', 'Cigar Box', 'Roasted Coffee Bean', 'Cedar', 'Crushed Gravel'],
      palate: "Dense, muscular, and aristocratic with bold dark fruit, refreshing herbal lift, silky fine tannins, and impressive length."
    },

    foodPairings: CHILE_FOOD_PAIRINGS,
    subRegions: CHILE_SUBREGIONS,
    grandCrus: CHILE_GRAND_CRUS,
    technicalRegulations: CHILE_TECHNICAL_REGULATIONS,
    prestigeMonopoles: CHILE_PRESTIGE_ESTATES,
    prestigeCuvees: CHILE_PRESTIGE_ESTATES,
    iconicDomaines: CHILE_ICONIC_DOMAINES,
    iconicGrowers: CHILE_ICONIC_DOMAINES
  },

  // ==========================================================================
  // 17. AUSTRALIA
  // ==========================================================================
  'australia': {
    id: 'australia',
    name: "Australia (Barossa & Margaret River)",
    country: 'Australia',
    countryCode: 'AU',
    aliases: ['australia', 'barossa', 'margaret river', 'eden valley', 'hunter valley', 'coonawarra', 'grange', 'penfolds', 'henschke'],
    tagline: "The Ancient Treasury of Pre-Phylloxera Shiraz & Maritime Elegance",
    summary: "Home to the world's oldest continually producing ungrafted Shiraz and Cabernet Sauvignon vines (planted 1843-1885) in the Barossa Valley and Eden Valley, alongside the maritime Cabernet and Chardonnay paradise of Margaret River and the ageworthy Semillons of the Hunter Valley.",
    center: [-34.5300, 138.9500],
    zoom: 8,
    bounds: [[-38.00, 114.00], [-32.00, 152.00]],
    heroGradient: 'linear-gradient(135deg, #2b1212 0%, #4a1c1c 50%, #d4af37 100%)',
    accentColor: '#800000',

    terroir: {
      climate: "Warm Mediterranean in Barossa; Cool Montane in Eden Valley; Maritime Mediterranean in Margaret River.",
      soil: "Deep red clay loam over limestone, ironstone gravel, laterite, ancient mica schist, and Coonawarra Terra Rossa.",
      elevation: "50m to 600m across coastal ridges and the Barossa Ranges.",
      riverInfluence: "Indian and Southern Oceans provide cool maritime breezes (the 'Fremantle Doctor') to Western Australia."
    },

    grapes: [
      { name: 'Shiraz (Syrah)', percentage: 55, type: 'Red', role: "Australia's national red jewel: blackberry, mocha, black pepper, and centuries-old vine power." },
      { name: 'Cabernet Sauvignon', percentage: 25, type: 'Red', role: "Gravelly maritime authority in Margaret River and cool terra rossa mint in Coonawarra." },
      { name: 'Chardonnay & Semillon', percentage: 15, type: 'White', role: "Burgundian-class Margaret River Chardonnay and ageworthy Hunter Valley Semillon." },
      { name: 'Riesling & Grenache', percentage: 5, type: 'White', role: "Electric, bone-dry Eden/Clare Riesling and old-vine Barossa Grenache." }
    ],

    structure: {
      body: 8.5,
      acidity: 7.5,
      tannin: 8.0,
      sweetness: 1,
      alcohol: 14.5,
      agingPotential: "5 - 50+ Years"
    },

    classification: {
      system: "Wine Australia Geographical Indications (GI) & Barossa Old Vine Charter",
      description: "Classification of historical old vines (Old Vine 35+ yrs, Survivor 70+ yrs, Centenarian 100+ yrs, Ancestor 125+ yrs) and Langton's Classification of Australian Wine.",
      tiers: [
        { name: 'Ancestor Vine (125+ Years)', detail: "Pre-phylloxera ungrafted single vineyards (e.g. Henschke Hill of Grace, Penfolds Block 42, Torbreck The Laird)." },
        { name: 'Centenarian Vine (100+ Years)', detail: "Historic century-old vines delivering profound natural depth." },
        { name: "Langton's First Classified", detail: "The pinnacle tier of Australian fine wine market collectibles (Penfolds Grange, Hill of Grace, Leeuwin Art Series, Mount Mary, Tyrrell's Vat 1)." }
      ]
    },

    flavorProfile: {
      primary: ['Blackberry & Dark Plum', 'Dark Chocolate & Mocha', 'Black Pepper & Five-Spice', 'Eucalyptus / Bay Leaf', 'Cassis'],
      secondary: ['Vanilla Bean & Coconut', 'Toasted Hazelnuts', 'Smoked Bacon Fat', 'Flint / Saline Reduction', 'Cigar Box'],
      palate: "Monumental, opulent, and velvety with explosive dark fruit, seamless oak integration, rich fine-grained tannins, and astounding length."
    },

    foodPairings: AUSTRALIA_FOOD_PAIRINGS,
    subRegions: AUSTRALIA_SUBREGIONS,
    grandCrus: AUSTRALIA_GRAND_CRUS,
    technicalRegulations: AUSTRALIA_TECHNICAL_REGULATIONS,
    prestigeMonopoles: AUSTRALIA_PRESTIGE_ESTATES,
    prestigeCuvees: AUSTRALIA_PRESTIGE_ESTATES,
    iconicDomaines: AUSTRALIA_ICONIC_DOMAINES,
    iconicGrowers: AUSTRALIA_ICONIC_DOMAINES
  }
};

/**
 * Normalizes query string by stripping punctuation, accents, and excessive whitespace.
 */
function normalizeText(text) {
  if (!text) return '';
  return String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

/**
 * Safely checks if query text matches alias or region name using exact match,
 * whole word boundary matching, or constrained substring matching.
 */
function isAliasOrNameMatch(cleanReg, normTarget) {
  if (!cleanReg || !normTarget) return false;
  if (cleanReg === normTarget) return true;

  const escaped = normTarget.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const wordBoundaryRegex = new RegExp(`\\b${escaped}\\b`, 'i');

  // For short strings (< 4 characters, e.g. 'ay'), require exact match or whole word boundary
  if (normTarget.length < 4) {
    return wordBoundaryRegex.test(cleanReg);
  }

  if (wordBoundaryRegex.test(cleanReg)) return true;
  if (cleanReg.includes(normTarget)) return true;
  if (cleanReg.length >= 4 && normTarget.includes(cleanReg)) return true;

  return false;
}

/**
 * Helper: Resolve wine region query with fuzzy matching, accent-insensitivity,
 * alias resolution, country context, and resilient safe fallback.
 */
export function findWineRegion(regionQuery, countryQuery = '') {
  if (regionQuery === '' || regionQuery === null || regionQuery === undefined) return null;
  if (typeof regionQuery !== 'string' && typeof regionQuery !== 'number') return null;

  const rawQuery = String(regionQuery);
  const cleanReg = normalizeText(rawQuery);
  const cleanCountry = normalizeText(countryQuery);

  // 1. Direct match by exact ID (safely check hasOwnProperty to avoid prototype pollution)
  if (cleanReg && Object.prototype.hasOwnProperty.call(WINE_REGIONS, cleanReg)) {
    return WINE_REGIONS[cleanReg];
  }

  // 2. Direct match by exact ID from raw string (kebab-case)
  const kebabRaw = cleanReg ? cleanReg.replace(/[\s_]+/g, '-') : '';
  if (kebabRaw && Object.prototype.hasOwnProperty.call(WINE_REGIONS, kebabRaw)) {
    return WINE_REGIONS[kebabRaw];
  }

  if (cleanReg) {
    // 3. Exact match by name or aliases across all regions
    for (const regKey of Object.keys(WINE_REGIONS)) {
      const r = WINE_REGIONS[regKey];
      const normName = normalizeText(r.name);
      if (normName === cleanReg) {
        return r;
      }
      if (r.aliases) {
        for (const alias of r.aliases) {
          if (normalizeText(alias) === cleanReg) {
            return r;
          }
        }
      }
    }

    // 3.5 Exact match on Grand Crus, Premier Crus, Subregions, and Appellations
    for (const regKey of Object.keys(WINE_REGIONS)) {
      const r = WINE_REGIONS[regKey];
      if (r.grandCrus) {
        for (const cru of r.grandCrus) {
          if (cru.name && normalizeText(cru.name) === cleanReg) return r;
          if (cru.id && normalizeText(cru.id) === cleanReg) return r;
          if (cru.village && normalizeText(cru.village) === cleanReg) return r;
          if (cru.commune && normalizeText(cru.commune) === cleanReg) return r;
        }
      }
      if (r.premierCrus) {
        for (const cru of r.premierCrus) {
          if (cru.name && normalizeText(cru.name) === cleanReg) return r;
          if (cru.id && normalizeText(cru.id) === cleanReg) return r;
          if (cru.village && normalizeText(cru.village) === cleanReg) return r;
          if (cru.commune && normalizeText(cru.commune) === cleanReg) return r;
        }
      }
      if (r.subRegions) {
        for (const sub of r.subRegions) {
          if (sub.name && normalizeText(sub.name) === cleanReg) return r;
          if (sub.id && normalizeText(sub.id) === cleanReg) return r;
          if (sub.appellations) {
            for (const app of sub.appellations) {
              const cleanApp = normalizeText(app);
              if (cleanApp === cleanReg) return r;
              if (cleanApp.replace(/\s+(aoc|docg|doc|gi|ava|qualitätswein|d\.o\.|do|doq)$/i, '') === cleanReg) return r;
            }
          }
        }
      }
    }

    // 4. Word boundary & constrained fuzzy match across all regions
    for (const regKey of Object.keys(WINE_REGIONS)) {
      const r = WINE_REGIONS[regKey];
      const normName = normalizeText(r.name);
      if (isAliasOrNameMatch(cleanReg, normName)) {
        return r;
      }
      if (r.aliases) {
        for (const alias of r.aliases) {
          const normAlias = normalizeText(alias);
          if (isAliasOrNameMatch(cleanReg, normAlias)) {
            return r;
          }
        }
      }
      if (r.subRegions) {
        for (const sub of r.subRegions) {
          const normSub = normalizeText(sub.name);
          if (isAliasOrNameMatch(cleanReg, normSub)) return r;
        }
      }
      if (r.grandCrus) {
        for (const cru of r.grandCrus) {
          const normCru = normalizeText(cru.name);
          if (isAliasOrNameMatch(cleanReg, normCru)) return r;
          if (cru.village && isAliasOrNameMatch(cleanReg, normalizeText(cru.village))) return r;
        }
      }
    }
  }

  // 4. Country & Regional combination lookup
  if (cleanCountry === 'france') {
    if (cleanReg.includes('champagne') || cleanReg.includes('coteaux champenois') || cleanReg.includes('riceys')) return WINE_REGIONS['champagne'];
    if (cleanReg.includes('burgundy') || cleanReg.includes('bourgogne') || cleanReg.includes('chablis') || cleanReg.includes('beaune') || cleanReg.includes('nuits') || cleanReg.includes('macon') || cleanReg.includes('beaujolais')) return WINE_REGIONS['burgundy'];
    if (cleanReg.includes('alsace') || cleanReg.includes('haut-rhin') || cleanReg.includes('bas-rhin') || cleanReg.includes('colmar') || cleanReg.includes('cremant d\'alsace')) return WINE_REGIONS['alsace'];
    if (cleanReg.includes('corsica') || cleanReg.includes('corse') || cleanReg.includes('patrimonio') || cleanReg.includes('ajaccio') || cleanReg.includes('figari') || cleanReg.includes('calvi')) return WINE_REGIONS['corsica'];
    if (cleanReg.includes('bordeaux') || cleanReg.includes('medoc') || cleanReg.includes('pauillac') || cleanReg.includes('margaux') || cleanReg.includes('saint-emilion') || cleanReg.includes('pomerol') || cleanReg.includes('sauternes') || cleanReg.includes('graves')) return WINE_REGIONS['bordeaux'];
    if (cleanReg.includes('loire') || cleanReg.includes('sancerre') || cleanReg.includes('chinon') || cleanReg.includes('vouvray') || cleanReg.includes('saumur') || cleanReg.includes('muscadet') || cleanReg.includes('savennieres')) return WINE_REGIONS['loire-valley'];
    if (cleanReg.includes('rhone') || cleanReg.includes('cornas') || cleanReg.includes('hermitage') || cleanReg.includes('cote-rotie') || cleanReg.includes('chateauneuf') || cleanReg.includes('gigondas')) return WINE_REGIONS['rhone'];
  }

  if (cleanCountry === 'italy' || cleanCountry === 'italia') {
    if (cleanReg.includes('piedmont') || cleanReg.includes('piemonte') || cleanReg.includes('barolo') || cleanReg.includes('barbaresco') || cleanReg.includes('langhe')) return WINE_REGIONS['piedmont'];
    if (cleanReg.includes('tuscany') || cleanReg.includes('toscana') || cleanReg.includes('chianti') || cleanReg.includes('montalcino') || cleanReg.includes('brunello') || cleanReg.includes('bolgheri')) return WINE_REGIONS['tuscany'];
    if (cleanReg.includes('lombardia') || cleanReg.includes('valtellina') || cleanReg.includes('veneto') || cleanReg.includes('valpolicella') || cleanReg.includes('amarone') || cleanReg.includes('sicily') || cleanReg.includes('sicilia') || cleanReg.includes('etna') || cleanReg.includes('campania') || cleanReg.includes('taurasi')) return WINE_REGIONS['italy-other'];
  }

  if (cleanCountry === 'usa' || cleanCountry === 'united states' || cleanCountry === 'america') {
    if (cleanReg.includes('california') || cleanReg.includes('napa') || cleanReg.includes('sonoma') || cleanReg.includes('santa cruz') || cleanReg.includes('paso robles') || cleanReg.includes('russian river') || cleanReg.includes('washington') || cleanReg.includes('columbia valley')) return WINE_REGIONS['california'];
    if (cleanReg.includes('oregon') || cleanReg.includes('willamette') || cleanReg.includes('dundee') || cleanReg.includes('ribbon ridge')) return WINE_REGIONS['oregon'];
  }

  if (cleanCountry === 'germany' || cleanCountry === 'deutschland') {
    return WINE_REGIONS['germany-mosel'];
  }

  if (cleanCountry === 'spain' || cleanCountry === 'espana' || cleanCountry === 'espana') {
    return WINE_REGIONS['spain-rioja'];
  }

  if (cleanCountry === 'chile') {
    return WINE_REGIONS['chile-maipo'];
  }

  if (cleanCountry === 'australia') {
    return WINE_REGIONS['australia'];
  }

  if (cleanCountry === 'japan' || cleanCountry === 'nippon' || cleanCountry === 'nihon') {
    return WINE_REGIONS['japan-chubu'];
  }

  // 5. Default structured fallback for unknown regions
  const fallbackId = cleanReg ? (cleanReg.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'unknown-wine-region') : 'unknown-wine-region';
  return {
    id: fallbackId,
    name: rawQuery.trim() || 'Unknown Wine Region',
    country: countryQuery || 'World Wine Region',
    countryCode: 'INT',
    aliases: [cleanReg || 'unknown'],
    tagline: `Renowned Terroir of ${countryQuery || 'Fine Wine'}`,
    summary: `A distinguished wine-producing area in ${countryQuery || 'the world'} celebrated for its unique microclimates, historic vineyards, and terroir-expressive grape varieties.`,
    center: [46.0000, 2.0000],
    zoom: 7,
    bounds: [[40.00, -5.00], [50.00, 10.00]],
    heroGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #d4af37 100%)',
    accentColor: '#d4af37',
    terroir: {
      climate: "Moderate temperate climate with well-defined seasonal cycles, sunny ripening periods, and cooling breezes.",
      soil: "Rich mineral-bearing sedimentary and alluvial soils providing optimal drainage and vine nourishment.",
      elevation: "Hillside slopes and river valley benches with excellent sun orientation.",
      riverInfluence: "Local river systems and valley breezes regulate diurnal temperatures and extend the hang time for optimal grape maturity."
    },
    grapes: [
      { name: 'Signature Varietals', percentage: 100, type: 'Selection', role: "Varieties expressing the distinct microclimates and soil qualities of this region." }
    ],
    structure: {
      body: 7.0,
      acidity: 7.5,
      tannin: 7.0,
      sweetness: 1,
      alcohol: 13.5,
      agingPotential: "3 - 15+ Years"
    },
    classification: {
      system: "Regional Appellation Quality System",
      description: 'Wines crafted according to strict regional yield, grape variety, and aging guidelines.',
      tiers: [
        { name: 'Estate & Single Vineyard', detail: "Bottlings originating from specific historical vineyards." },
        { name: 'Regional Denomination', detail: "Wines capturing the macro-terroir and quintessential style of the region." }
      ]
    },
    flavorProfile: {
      primary: ['Ripe Orchard & Berry Fruit', 'Fresh Floral Notes', 'Earthy Undertones', 'Subtle Oak Spice'],
      secondary: ['Crushed Stone Minerality', 'Fine Tannins', 'Savory Herbs'],
      palate: "Harmonious, food-friendly balance between fruit vibrancy, refreshing acidity, and structural elegance."
    },
    foodPairings: [
      { category: 'Chef Recommendations', dish: "Grilled Meats, Fresh Seafood, Artisanal Cheese Board, Seasonal Pasta", note: "Versatile regional profile that harmonizes with a wide spectrum of culinary dining selections." }
    ],
    subRegions: []
  };
}
