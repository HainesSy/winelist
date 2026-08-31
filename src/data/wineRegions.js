// Comprehensive Wine Region Knowledge Base & Cartographic Data
import {
  BURGUNDY_GRAND_CRUS,
  BURGUNDY_PREMIER_CRUS,
  BURGUNDY_SUBREGIONS,
  BURGUNDY_TECHNICAL_REGULATIONS,
  BURGUNDY_PRESTIGE_MONOPOLES,
  BURGUNDY_ICONIC_DOMAINES
} from './burgundyData';

export {
  BURGUNDY_GRAND_CRUS,
  BURGUNDY_PREMIER_CRUS,
  BURGUNDY_SUBREGIONS,
  BURGUNDY_TECHNICAL_REGULATIONS,
  BURGUNDY_PRESTIGE_MONOPOLES,
  BURGUNDY_ICONIC_DOMAINES
};

// ============================================================================
// CHAMPAGNE DATASETS (Grand Crus, Premier Crus, Terroirs, Specs)
// ============================================================================

export const CHAMPAGNE_GRAND_CRUS = [
  // ==========================================
  // MONTAGNE DE REIMS (9 Grand Cru Communes)
  // ==========================================
  {
    id: 'ambonnay',
    name: "Ambonnay",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.0772,
    lng: 4.1722,
    aspect: "South / South-East",
    dominantGrape: "Pinot Noir",
    grapeRatio: "Pinot Noir (~80%), Chardonnay (~20%)",
    soil: "Upper Campanian Belemnite chalk (Belemnitella quadrata) covered with warm calcareous clay topsoil",
    echelleRating: 100,
    character: "Rich, vinous, structural Pinot Noir with red berry depth, black truffle notes, warm mid-palate power, and profound elegance.",
    benchmarkProducers: ["Egly-Ouriet", "Krug (Clos d’Ambonnay)", "Eric Rodez", "Paul Déthune", "Marguet", "Marie-Noëlle Ledru"],
    famousProducers: ["Egly-Ouriet", "Krug (Clos d’Ambonnay)", "Eric Rodez", "Paul Déthune", "Marguet", "Marie-Noëlle Ledru"],
    iconicVineyards: ["Clos d’Ambonnay (0.68 ha)", "Les Crayères", "Les Beurys", "Le Bout du Clos", "Les Bermonts"]
  },
  {
    id: 'bouzy',
    name: "Bouzy",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.0803,
    lng: 4.1481,
    aspect: "Full South facing natural amphitheater",
    dominantGrape: "Pinot Noir",
    grapeRatio: "Pinot Noir (~87%), Chardonnay (~13%)",
    soil: "Deep Belemnite chalk subsoil with rich, sun-baked calcareous clay topsoil",
    echelleRating: 100,
    character: "Muscular, broad-shouldered, intensely aromatic Pinot Noir; global benchmark for Bouzy Rouge still red wine.",
    benchmarkProducers: ["Pierre Paillard", "Camille Savès", "Antoine Bouvet", "Benoît Lahaye", "Paul Bara", "Georges Vesselle"],
    famousProducers: ["Pierre Paillard", "Camille Savès", "Antoine Bouvet", "Benoît Lahaye", "Paul Bara", "Georges Vesselle"],
    iconicVineyards: ["Les Maillerettes", "Les Mottelettes", "Les Loges", "Clos de Bouveries", "Les Voies"]
  },
  {
    id: 'verzenay',
    name: "Verzenay",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1586,
    lng: 4.1464,
    aspect: "North / North-East facing steep slope",
    dominantGrape: "Pinot Noir",
    grapeRatio: "Pinot Noir (~86%), Chardonnay (~14%)",
    soil: "Pure Belemnitella quadrata chalk with cool northern exposure and Atlantic airflow",
    echelleRating: 100,
    character: "Chiseled tension, laser-like acidity, flinty minerality, and iron backbone forming the structural core of Grandes Marques.",
    benchmarkProducers: ["Louis Roederer", "Bollinger", "Michel Arnould", "J.M. Labruyère", "Pehu-Simonet", "Godmé"],
    famousProducers: ["Louis Roederer", "Bollinger", "Michel Arnould", "J.M. Labruyère", "Pehu-Simonet", "Godmé"],
    iconicVineyards: ["Les Corettes", "Les Perthois", "Moulin de Verzenay", "Les Noues", "Les Champs Saint-Martin"]
  },
  {
    id: 'mailly-champagne',
    name: "Mailly-Champagne",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1575,
    lng: 4.1139,
    aspect: "North / North-West facing slopes",
    dominantGrape: "Pinot Noir",
    grapeRatio: "Pinot Noir (~87%), Chardonnay (~13%)",
    soil: "Porous Belemnite chalk beds with cool Atlantic airflow and high diurnal shifts",
    echelleRating: 100,
    character: "High-toned red fruits, crystalline mineral precision, lean aristocratic elegance, and racy freshness.",
    benchmarkProducers: ["Mailly Grand Cru (Cooperative founded 1929)", "Ernest Remy", "Taittinger"],
    famousProducers: ["Mailly Grand Cru (Cooperative founded 1929)", "Ernest Remy", "Taittinger"],
    iconicVineyards: ["Les Echalas", "Les Crayères", "Les Challois", "Les Coutures"]
  },
  {
    id: 'verzy',
    name: "Verzy",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1483,
    lng: 4.1611,
    aspect: "East / North-East facing hillsides",
    dominantGrape: "Pinot Noir",
    grapeRatio: "Pinot Noir (~78%), Chardonnay (~22%)",
    soil: "Belemnite chalk mixed with pockets of clay marl and flint (silex)",
    echelleRating: 100,
    character: "Perfumed, floral-tinged Pinot Noir and mineral Chardonnay with refined tension and herbal citrus complexity.",
    benchmarkProducers: ["Veuve Clicquot", "Adrien Renoir", "Mouzon-Leroux", "Penet-Chardonnet", "Louis Roederer"],
    famousProducers: ["Veuve Clicquot", "Adrien Renoir", "Mouzon-Leroux", "Penet-Chardonnet", "Louis Roederer"],
    iconicVineyards: ["Les Epinettes", "Les Champs Saint Martin", "Les Terres Blanches", "Les Vignes Saint-Benoît"]
  },
  {
    id: 'beaumont-sur-vesle',
    name: "Beaumont-sur-Vesle",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1747,
    lng: 4.1869,
    aspect: "East / North-East gentle slopes",
    dominantGrape: "Pinot Noir",
    grapeRatio: "Pinot Noir (~88%), Chardonnay (~12%)",
    soil: "Chalk with gravelly alluvial sand deposits near the Vesle river (~28 ha total)",
    echelleRating: 100,
    character: "Delicate, light-to-medium bodied Pinot Noir adding aromatic lift and freshness in grand cuvée blends.",
    benchmarkProducers: ["Paul Bara", "Louis Roederer", "Pol Roger", "Grandes Marques blenders"],
    famousProducers: ["Paul Bara", "Louis Roederer", "Pol Roger", "Grandes Marques blenders"],
    iconicVineyards: ["Les Vignes Saint-Benoît", "Les Grèves"]
  },
  {
    id: 'sillery',
    name: "Sillery",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1983,
    lng: 4.1336,
    aspect: "Gentle Northeast plain slopes",
    dominantGrape: "Pinot Noir",
    grapeRatio: "Pinot Noir (~56%), Chardonnay (~44%)",
    soil: "Deep Belemnite chalk overlain with silty alluvial loam",
    echelleRating: 100,
    character: "Historically the most renowned Champagne cru of the 18th century (\"Vins de Sillery\"); refined, subtle elegance.",
    benchmarkProducers: ["François Secondé", "Veuve Clicquot", "Taittinger"],
    famousProducers: ["François Secondé", "Veuve Clicquot", "Taittinger"],
    iconicVineyards: ["Les Champs Saint-Hilaire", "Les Basse-Crayères"]
  },
  {
    id: 'puisieulx',
    name: "Puisieulx",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1889,
    lng: 4.1167,
    aspect: "North / East facing gentle knolls",
    dominantGrape: "Pinot Noir",
    grapeRatio: "Pinot Noir (~65%), Chardonnay (~35%)",
    soil: "Pure white chalk under shallow topsoil (~19 ha, Champagne’s smallest Grand Cru)",
    echelleRating: 100,
    character: "Racy, mineral-dusted, pristine acidity, highly sought-after component for prestigious assemblage bottlings.",
    benchmarkProducers: ["François Secondé", "Mailly Grand Cru", "Veuve Clicquot", "Lanson"],
    famousProducers: ["François Secondé", "Mailly Grand Cru", "Veuve Clicquot", "Lanson"],
    iconicVineyards: ["Les Graviers", "Le Mont de Puisieulx", "Les Clos"]
  },
  {
    id: 'louvois',
    name: "Louvois",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1008,
    lng: 4.1158,
    aspect: "South / South-West facing amphitheater",
    dominantGrape: "Pinot Noir",
    grapeRatio: "Pinot Noir (~75%), Chardonnay (~25%)",
    soil: "Belemnite chalk with higher clay marl fraction situated on southern mountain slopes",
    echelleRating: 100,
    character: "Supple, generous, textured red fruit expression balancing Bouzy and Tauxières.",
    benchmarkProducers: ["Billecart-Salmon", "Guy de Chassey", "Laurent-Perrier"],
    famousProducers: ["Billecart-Salmon", "Guy de Chassey", "Laurent-Perrier"],
    iconicVineyards: ["Les Clos", "Les Chenevières", "La Pierre aux Lignettes"]
  },

  // ==========================================
  // VALLÉE DE LA MARNE (2 Grand Cru Communes)
  // ==========================================
  {
    id: 'ay',
    name: "Aÿ (Aÿ-Champagne)",
    subregion: "Vallée de la Marne",
    district: "Vallée de la Marne",
    subregionId: 'vallee-de-la-marne',
    districtId: 'vallee-de-la-marne',
    lat: 49.0558,
    lng: 4.0044,
    aspect: "Full South facing steep hillside overlooking the Marne River",
    dominantGrape: "Pinot Noir",
    grapeRatio: "Pinot Noir (~88%), Chardonnay (~10%), Meunier (~2%)",
    soil: "Deep Belemnitella quadrata chalk with rich alluvial silt and exceptional solar heat retention",
    echelleRating: 100,
    character: "The global benchmark for Pinot Noir in Champagne: powerful, opulent, truffle-laced, spicy, hazelnut, and majestic architecture.",
    benchmarkProducers: ["Bollinger", "Henri Giraud", "Gosset", "Deutz", "Gatinois", "Marc Hébrart", "Ayala"],
    famousProducers: ["Bollinger", "Henri Giraud", "Gosset", "Deutz", "Gatinois", "Marc Hébrart", "Ayala"],
    iconicVineyards: ["La Côte aux Enfants (Bollinger)", "Chaudes Terres (VVF)", "Clos Saint-Jacques", "Le Léon", "Vaurevals", "Pruche"]
  },
  {
    id: 'tours-sur-marne',
    name: "Tours-sur-Marne",
    subregion: "Vallée de la Marne",
    district: "Vallée de la Marne",
    subregionId: 'vallee-de-la-marne',
    districtId: 'vallee-de-la-marne',
    lat: 49.0489,
    lng: 4.1206,
    aspect: "South / South-East facing river plain and terrace",
    dominantGrape: "Pinot Noir (100% Grand Cru for Pinot Noir; 90% Premier Cru for Chardonnay)",
    grapeRatio: "Pinot Noir (~70%), Chardonnay (~30%)",
    soil: "Chalk covered with sand and river gravels along the Marne confluence",
    echelleRating: 100, // 100% PN / 90% Chard
    character: "Silky, aromatic Pinot Noir. Global headquarters of Champagne Laurent-Perrier.",
    benchmarkProducers: ["Laurent-Perrier", "Lamiable", "Guy Charbaut"],
    famousProducers: ["Laurent-Perrier", "Lamiable", "Guy Charbaut"],
    iconicVineyards: ["Le Clos Laurent-Perrier", "Les Mesneux"]
  },

  // ==========================================
  // CÔTE DES BLANCS (6 Grand Cru Communes)
  // ==========================================
  {
    id: 'avize',
    name: "Avize",
    subregion: "Côte des Blancs",
    district: "Côte des Blancs",
    subregionId: 'cote-des-blancs',
    districtId: 'cote-des-blancs',
    lat: 48.9725,
    lng: 4.0092,
    aspect: "Pure East facing concave amphitheater slope",
    dominantGrape: "Chardonnay (100%)",
    grapeRatio: "Chardonnay (100%)",
    soil: "Pure Belemnitella quadrata chalk with exceptionally thin, well-drained topsoil",
    echelleRating: 100,
    character: "The epicenter of Blanc de Blancs balance: intense chalky minerality, white flowers, citrus oil, brioche, and fleshy mid-palate richness.",
    benchmarkProducers: ["Jacques Selosse", "Agrapart & Fils", "De Sousa", "Franck Bonville", "Varnier-Fannière", "Michel Fallon"],
    famousProducers: ["Jacques Selosse", "Agrapart & Fils", "De Sousa", "Franck Bonville", "Varnier-Fannière", "Michel Fallon"],
    iconicVineyards: ["Les Chantereines (Selosse)", "Les Robarts", "Les Maladries", "La Fosse", "Avizoise (Agrapart)", "Les Chemins d’Avize"]
  },
  {
    id: 'chouilly',
    name: "Chouilly",
    subregion: "Côte des Blancs",
    district: "Côte des Blancs",
    subregionId: 'cote-des-blancs',
    districtId: 'cote-des-blancs',
    lat: 49.0039,
    lng: 4.0150,
    aspect: "East / North-East gentle rolling slopes at northern gateway",
    dominantGrape: "Chardonnay (100% Grand Cru for Chardonnay; 90% Premier Cru for Pinot Noir)",
    grapeRatio: "Chardonnay (~99%), Pinot Noir (~1%)",
    soil: "Deep porous Belemnite chalk beds with open solar exposure",
    echelleRating: 100, // 100% Chard / 90% PN
    character: "Creamy, generous, exotic stone fruit, white peach, acacia honey, round texture, and accessible silky minerality.",
    benchmarkProducers: ["Legras & Haas", "AR Lenoble", "R&L Legras", "Vazart-Coquart", "Pierre Gimonnet"],
    famousProducers: ["Legras & Haas", "AR Lenoble", "R&L Legras", "Vazart-Coquart", "Pierre Gimonnet"],
    iconicVineyards: ["Mont Aigu (AR Lenoble)", "Les Partelaines", "Les Aventures", "Les Ruelle"]
  },
  {
    id: 'cramant',
    name: "Cramant",
    subregion: "Côte des Blancs",
    district: "Côte des Blancs",
    subregionId: 'cote-des-blancs',
    districtId: 'cote-des-blancs',
    lat: 48.9897,
    lng: 3.9939,
    aspect: "East / South-East facing curved hillside (the \"Chalk Mount\")",
    dominantGrape: "Chardonnay (100%)",
    grapeRatio: "Chardonnay (100%)",
    soil: "Pure outcropping of Upper Cretaceous Belemnite chalk",
    echelleRating: 100,
    character: "Creamy, silky texture, delicate mousse, brioche, toasted hazelnut, and refined saline elegance (historic Crémant de Cramant).",
    benchmarkProducers: ["Diebolt-Vallois", "Suenen", "Bérêche & Fils", "Pertois-Moriset", "Philippe Glavier", "Mumm (Mumm de Cramant)"],
    famousProducers: ["Diebolt-Vallois", "Suenen", "Bérêche & Fils", "Pertois-Moriset", "Philippe Glavier", "Mumm (Mumm de Cramant)"],
    iconicVineyards: ["Les Bourys", "Les Chets", "Les Buzons", "Le Bateau", "Les Briquettes", "Les Pimonts"]
  },
  {
    id: 'le-mesnil-sur-oger',
    name: "Le Mesnil-sur-Oger",
    subregion: "Côte des Blancs",
    district: "Côte des Blancs",
    subregionId: 'cote-des-blancs',
    districtId: 'cote-des-blancs',
    lat: 48.9464,
    lng: 4.0222,
    aspect: "Pure East facing steep chalk amphitheater",
    dominantGrape: "Chardonnay (100%)",
    grapeRatio: "Chardonnay (100%)",
    soil: "Exposed, pristine Belemnitella quadrata chalk with virtually zero organic topsoil",
    echelleRating: 100,
    character: "The most austere, steely, razor-sharp, hyper-mineral, crushed oyster shell, and extraordinarily long-lived Blanc de Blancs in the world.",
    benchmarkProducers: ["Salon", "Krug (Clos du Mesnil)", "Pierre Péters", "Delamotte", "Pascal Doquet", "Guy Charlemagne", "Michel Turgy"],
    famousProducers: ["Salon", "Krug (Clos du Mesnil)", "Pierre Péters", "Delamotte", "Pascal Doquet", "Guy Charlemagne", "Michel Turgy"],
    iconicVineyards: ["Clos du Mesnil (1.84 ha)", "Les Chétillons (Pierre Péters)", "Les Carelles", "Les Coullemets", "Les Mussets"]
  },
  {
    id: 'oger',
    name: "Oger",
    subregion: "Côte des Blancs",
    district: "Côte des Blancs",
    subregionId: 'cote-des-blancs',
    districtId: 'cote-des-blancs',
    lat: 48.9589,
    lng: 4.0097,
    aspect: "East facing sheltered warm basin",
    dominantGrape: "Chardonnay (100%)",
    grapeRatio: "Chardonnay (100%)",
    soil: "Belemnite chalk with slightly higher heat retention and clay sediment than Le Mesnil",
    echelleRating: 100,
    character: "Broad, opulent, exotic citrus, yellow orchard fruits, spicy warmth, candied lemon peel, and mineral density.",
    benchmarkProducers: ["Pascal Agrapart", "Jean Milan", "Chapuy", "Gimonnet-Gonet", "Paul Clouet", "Vincent Charlot"],
    famousProducers: ["Pascal Agrapart", "Jean Milan", "Chapuy", "Gimonnet-Gonet", "Paul Clouet", "Vincent Charlot"],
    iconicVineyards: ["Les Terres de Noël (Jean Milan)", "Les Chenevats", "Les Babillottes", "Les Beignets"]
  },
  {
    id: 'oiry',
    name: "Oiry",
    subregion: "Côte des Blancs",
    district: "Côte des Blancs",
    subregionId: 'cote-des-blancs',
    districtId: 'cote-des-blancs',
    lat: 48.9786,
    lng: 4.0517,
    aspect: "Gentle East plain and lower foothills",
    dominantGrape: "Chardonnay (100%)",
    grapeRatio: "Chardonnay (~99%), Pinot Noir (~1%)",
    soil: "Belemnite chalk with alluvial clay-sand overlay (~88 ha total)",
    echelleRating: 100,
    character: "Light-footed, ethereal, chalk-driven Blanc de Blancs with delicate saline lift, white florals, and crisp citrus.",
    benchmarkProducers: ["Suenen", "Agrapart & Fils", "Françoise Bedel"],
    famousProducers: ["Suenen", "Agrapart & Fils", "Françoise Bedel"],
    iconicVineyards: ["Les Hauts d’Oiry", "La Croix", "Les Crayères"]
  }
];

export const CHAMPAGNE_PREMIER_CRUS = [
  {
    id: 'mareuil-sur-ay',
    name: "Mareuil-sur-Aÿ",
    subregion: "Vallée de la Marne",
    district: "Vallée de la Marne",
    subregionId: 'vallee-de-la-marne',
    districtId: 'vallee-de-la-marne',
    lat: 49.0461,
    lng: 4.0381,
    echelleRating: 99,
    dominantGrape: "Pinot Noir (~75%), Chardonnay (~25%)",
    aspect: "Steep South-facing 45° pure chalk slope",
    soil: "Steep south-facing pure Belemnite chalk escarpment rising directly above the Marne canal",
    character: "Profoundly muscular, vinous, black fruit and intense chalk structure; home to the legendary Clos des Goisses.",
    historicalSignificance: "Highest rated Premier Cru commune at 99%; home to Philipponnat Clos des Goisses and Billecart-Salmon.",
    benchmarkProducers: ["Philipponnat", "Billecart-Salmon", "Marc Hébrart"],
    famousProducers: ["Philipponnat", "Billecart-Salmon", "Marc Hébrart"],
    iconicVineyards: ["Clos des Goisses (5.5 ha, 45° slope)", "Le Léon", "Les Faubourgs"]
  },
  {
    id: 'tauxieres-mutry',
    name: "Tauxières-Mutry",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.0917,
    lng: 4.1042,
    echelleRating: 99,
    dominantGrape: "Pinot Noir (~85%), Chardonnay (~15%)",
    aspect: "South-facing gentle slopes",
    soil: "Calcareous clay over Belemnite chalk directly bordering Grand Cru Bouzy",
    character: "Supple, round, red-cherry Pinot Noir with gentle spice and refined structure.",
    historicalSignificance: "Tied with Mareuil-sur-Aÿ as the highest-rated Premier Cru commune at 99%.",
    benchmarkProducers: ["Pierre Paillard", "Benoît Lahaye", "Vilmart & Cie"],
    famousProducers: ["Pierre Paillard", "Benoît Lahaye", "Vilmart & Cie"],
    iconicVineyards: ["Les Tourolles"]
  },
  {
    id: 'bisseuil',
    name: "Bisseuil",
    subregion: "Vallée de la Marne",
    district: "Vallée de la Marne",
    subregionId: 'vallee-de-la-marne',
    districtId: 'vallee-de-la-marne',
    lat: 49.0442,
    lng: 4.0886,
    echelleRating: 99,
    dominantGrape: "Pinot Noir (~60%), Chardonnay (~40%)",
    aspect: "South / South-East slopes",
    soil: "Deep chalk and gravel terraces east of Mareuil-sur-Aÿ",
    character: "Structured, mineral-driven Pinot Noir and Blanc de Blancs component prized by prestigious houses.",
    historicalSignificance: "99% rated Premier Cru commune along the Marne canal terrace.",
    benchmarkProducers: ["Champagne Besserat de Bellefon", "Grandes Marques blenders"],
    famousProducers: ["Champagne Besserat de Bellefon", "Grandes Marques blenders"],
    iconicVineyards: ["Les Vignes de Bisseuil"]
  },
  {
    id: 'vertus',
    name: "Vertus",
    subregion: "Côte des Blancs",
    district: "Côte des Blancs",
    subregionId: 'cote-des-blancs',
    districtId: 'cote-des-blancs',
    lat: 48.9056,
    lng: 4.0044,
    echelleRating: 95,
    dominantGrape: "Chardonnay (~90%), Pinot Noir (~10%)",
    aspect: "East / South-East rolling slopes",
    soil: "Thick Belemnite chalk escarpment with sandy, clay-limestone colluvial deposits at base",
    character: "Generous, saline, white blossom, chalky tension with richer fruit than Le Mesnil; benchmark for non-dosé single-terroir cuvées.",
    historicalSignificance: "Southern anchor of the Côte des Blancs; epicenter of biodynamic grower mastery.",
    benchmarkProducers: ["Larmandier-Bernier", "Duval-Leroy", "Pascal Doquet", "Paul Goerg"],
    famousProducers: ["Larmandier-Bernier", "Duval-Leroy", "Pascal Doquet", "Paul Goerg"],
    iconicVineyards: ["Terre de Vertus", "Les Poteaux", "Les Barillers", "Clos Notre Dame"]
  },
  {
    id: 'trepail',
    name: "Trépail",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1086,
    lng: 4.1797,
    echelleRating: 95,
    dominantGrape: "Chardonnay (~90%), Pinot Noir (~10%)",
    aspect: "East-facing slopes",
    soil: "East-facing Upper Cretaceous Belemnite chalk with silex flint nodules",
    character: "The isolated \"white pearl\" of the Montagne de Reims; steely, mineral, electric Chardonnay with smoky tension.",
    historicalSignificance: "Renowned Chardonnay enclave on the eastern flank of the Pinot Noir-dominated Montagne de Reims.",
    benchmarkProducers: ["David Léclapart", "A. Margaine", "Pascal Doquet"],
    famousProducers: ["David Léclapart", "A. Margaine", "Pascal Doquet"],
    iconicVineyards: ["L’Apôtre (1946 parcel)", "L’Artiste", "Les Monts de Trépail"]
  },
  {
    id: 'villers-marmery',
    name: "Villers-Marmery",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1350,
    lng: 4.1950,
    echelleRating: 95,
    dominantGrape: "Chardonnay (~98%)",
    aspect: "East-facing slopes",
    soil: "Deep chalk hillside facing east on the eastern flank of the mountain",
    character: "Chiseled, citrus-driven, chalky Blanc de Blancs possessing high natural acidity and longevity.",
    historicalSignificance: "Second major Chardonnay enclave on the Montagne de Reims along with Trépail.",
    benchmarkProducers: ["Henriet-Bazin", "A. Margaine", "Boutillez-Guer"],
    famousProducers: ["Henriet-Bazin", "A. Margaine", "Boutillez-Guer"],
    iconicVineyards: ["Les Alouettes", "Les Ronces", "Le Brun Fief"]
  },
  {
    id: 'dizy',
    name: "Dizy",
    subregion: "Vallée de la Marne",
    district: "Vallée de la Marne",
    subregionId: 'vallee-de-la-marne',
    districtId: 'vallee-de-la-marne',
    lat: 49.0664,
    lng: 3.9678,
    echelleRating: 95,
    dominantGrape: "Chardonnay (~40%), Pinot Noir (~35%), Meunier (~25%)",
    aspect: "South / South-West facing slopes",
    soil: "Deep calcareous marl and Belemnite chalk hillsides",
    character: "Complex, structured, hazelnut, citrus, and stone fruit expression; home to legendary Jacquesson parcel bottlings.",
    historicalSignificance: "Historic winemaking base of Champagne Jacquesson and Gaston Chiquet.",
    benchmarkProducers: ["Jacquesson", "Gaston Chiquet"],
    famousProducers: ["Jacquesson", "Gaston Chiquet"],
    iconicVineyards: ["Corne Bautray", "Champ Caïn", "Terres Rouges"]
  },
  {
    id: 'cuis',
    name: "Cuis",
    subregion: "Côte des Blancs",
    district: "Côte des Blancs",
    subregionId: 'cote-des-blancs',
    districtId: 'cote-des-blancs',
    lat: 48.9950,
    lng: 3.9667,
    echelleRating: 95,
    dominantGrape: "Chardonnay (~98%)",
    aspect: "North / North-East facing chalk amphitheater",
    soil: "North-facing pure Belemnite chalk amphitheater",
    character: "Razor-sharp, high-acid, citrus-driven, intensely refreshing Blanc de Blancs.",
    historicalSignificance: "Northern gateway to Côte des Blancs known for high-acid base wines; home to Pierre Gimonnet.",
    benchmarkProducers: ["Pierre Gimonnet & Fils"],
    famousProducers: ["Pierre Gimonnet & Fils"],
    iconicVineyards: ["Les Bionnes", "Croix-Blanche"]
  },
  {
    id: 'chigny-les-roses',
    name: "Chigny-les-Roses",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1558,
    lng: 4.0628,
    echelleRating: 94,
    dominantGrape: "Meunier (~45%), Pinot Noir (~35%), Chardonnay (~20%)",
    aspect: "North / North-East facing slopes",
    soil: "Chalk-limestone with clay-sand deposits",
    character: "Aromatic red fruits, supple mid-palate, floral lift, and balanced freshness.",
    historicalSignificance: "Named in honor of Madame Louise Pommery’s rose gardens; home of J. Lassalle and Cattier.",
    benchmarkProducers: ["Cattier (Armand de Brignac)", "J. Lassalle", "Guy Charbaut"],
    famousProducers: ["Cattier (Armand de Brignac)", "J. Lassalle", "Guy Charbaut"],
    iconicVineyards: ["Clos du Moulin (2.2 ha historical clos)"]
  },
  {
    id: 'rilly-la-montagne',
    name: "Rilly-la-Montagne",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1656,
    lng: 4.0456,
    echelleRating: 94,
    dominantGrape: "Pinot Noir (~40%), Meunier (~35%), Chardonnay (~25%)",
    aspect: "North-facing gentle slopes",
    soil: "Belemnite chalk with sandy-clay topsoil on the northern mountain slope",
    character: "Refined, structured, oak-worthy Pinot Noir and Chardonnay blends of aristocratic poise.",
    historicalSignificance: "One of the oldest documented viticultural villages in Champagne; home of Vilmart & Cie.",
    benchmarkProducers: ["Vilmart & Cie", "Bérêche & Fils", "Roger Brun"],
    famousProducers: ["Vilmart & Cie", "Bérêche & Fils", "Roger Brun"],
    iconicVineyards: ["Coeur de Cuvée", "Les Blanches Voies", "Grand Cellier d’Or"]
  },
  {
    id: 'ludes',
    name: "Ludes",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1542,
    lng: 4.0792,
    echelleRating: 94,
    dominantGrape: "Meunier (~45%), Pinot Noir (~35%), Chardonnay (~20%)",
    aspect: "North-facing Belemnite chalk slopes",
    soil: "North-facing Belemnite chalk slopes flanked by forested summit",
    character: "Crisp, mineral-backed Meunier and Pinot Noir with racy acidity and tension.",
    historicalSignificance: "Heart of the northern slopes of Montagne de Reims; home to Bérêche & Fils and Canard-Duchêne.",
    benchmarkProducers: ["Bérêche & Fils", "Canard-Duchêne", "Huré Frères"],
    famousProducers: ["Bérêche & Fils", "Canard-Duchêne", "Huré Frères"],
    iconicVineyards: ["Le Cran", "Les Beaux Regards"]
  },
  {
    id: 'cumieres',
    name: "Cumières",
    subregion: "Vallée de la Marne",
    district: "Vallée de la Marne",
    subregionId: 'vallee-de-la-marne',
    districtId: 'vallee-de-la-marne',
    lat: 49.0719,
    lng: 3.9239,
    echelleRating: 93,
    dominantGrape: "Pinot Noir (~50%), Meunier (~35%), Chardonnay (~15%)",
    aspect: "South-facing riverside amphitheater",
    soil: "Warm, south-facing clay-limestone amphitheater over shallow chalk near the Marne River",
    character: "Early ripening, voluptuous, opulent red fruits, spicy depth; celebrated for still Cumières Rouge Coteaux Champenois.",
    historicalSignificance: "One of the warmest microclimates in Champagne, famous for early harvesting and historic Coteaux Champenois reds.",
    benchmarkProducers: ["Georges Laval", "Geoffroy", "Vadin-Plateau"],
    famousProducers: ["Georges Laval", "Geoffroy", "Vadin-Plateau"],
    iconicVineyards: ["Les Chênes", "Les Hauts Meuniers", "Les Baries"]
  },
  {
    id: 'hautvillers',
    name: "Hautvillers",
    subregion: "Vallée de la Marne",
    district: "Vallée de la Marne",
    subregionId: 'vallee-de-la-marne',
    districtId: 'vallee-de-la-marne',
    lat: 49.0817,
    lng: 3.9439,
    echelleRating: 93,
    dominantGrape: "Meunier (~40%), Pinot Noir (~35%), Chardonnay (~25%)",
    aspect: "South / South-East hillsides",
    soil: "Chalk-marl and Sparnacian clay slopes overlooking the river",
    character: "Spiritual cradle of Champagne (Dom Pérignon at Abbaye Saint-Pierre); rounded, harmonious, floral, and supple.",
    historicalSignificance: "Spiritual birthplace of Champagne at Abbaye Saint-Pierre d’Hautvillers where Dom Pierre Pérignon was cellar master (1668–1715).",
    benchmarkProducers: ["Dom Pérignon (Moët & Chandon)", "J.M. Gobillard", "Marion-Bosser"],
    famousProducers: ["Dom Pérignon (Moët & Chandon)", "J.M. Gobillard", "Marion-Bosser"],
    iconicVineyards: ["Les Terres Rouges", "Abbaye Saint-Pierre", "Les Prières"]
  },
  {
    id: 'pierry',
    name: "Pierry",
    subregion: "Coteaux Sud d’Épernay",
    district: "Coteaux Sud d’Épernay",
    subregionId: 'coteaux-sud-epernay',
    districtId: 'coteaux-sud-epernay',
    lat: 49.0194,
    lng: 3.9372,
    echelleRating: 90,
    dominantGrape: "Meunier (~40%), Chardonnay (~35%), Pinot Noir (~25%)",
    aspect: "East / South-East hillsides",
    soil: "Flint stones (meulière) embedded in Sparnacian clay over Campanian chalk",
    character: "Tense, mineral, smoky, flint-inflected Meunier and Chardonnay of striking purity.",
    historicalSignificance: "Historic 18th-century cellar master Frère Jean Oudart developed early sparkling techniques here; home to Jean-Marc Sélèque.",
    benchmarkProducers: ["JM Sélèque", "Paul Clouet", "Vincent Charlot"],
    famousProducers: ["JM Sélèque", "Paul Clouet", "Vincent Charlot"],
    iconicVineyards: ["Les Gouttes d’Or", "Les Tartières", "Les Frileux", "Partition"]
  },
  {
    id: 'ecueil',
    name: "Écueil",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.1833,
    lng: 3.9667,
    echelleRating: 90,
    dominantGrape: "Pinot Noir (~85%), Chardonnay (~15%)",
    aspect: "East-facing gentle slopes",
    soil: "Sandy Thanetian clay over deep chalk bedrock on the Petite Montagne",
    character: "Vibrant, crystalline, energetic, wild-strawberry Pinot Noir celebrated in modern cult grower Champagne.",
    historicalSignificance: "Epicenter of artisanal Petite Montagne grower movement; home to Frédéric Savart.",
    benchmarkProducers: ["Frédéric Savart", "Lacourte-Godbillon", "Brocard Pierre"],
    famousProducers: ["Frédéric Savart", "Lacourte-Godbillon", "Brocard Pierre"],
    iconicVineyards: ["Le Mont Benoit", "Les Noues", "L’Ouverture"]
  },
  {
    id: 'vrigny',
    name: "Vrigny",
    subregion: "Montagne de Reims",
    district: "Montagne de Reims",
    subregionId: 'montagne-de-reims',
    districtId: 'montagne-de-reims',
    lat: 49.2333,
    lng: 3.9167,
    echelleRating: 90,
    dominantGrape: "Meunier (~85%), Pinot Noir (~10%), Chardonnay (~5%)",
    aspect: "East / North-East slopes",
    soil: "Sandy Thanetian silt and soft chalk on gentle rolling hills",
    character: "World benchmark for single-variety 100% Meunier showing incredible floral aromatics, round stone fruit, and saline finish.",
    historicalSignificance: "Petite Montagne village made legendary by Francis Egly’s 100% Meunier single-vineyard bottling.",
    benchmarkProducers: ["Egly-Ouriet (Les Vignes de Vrigny)", "Roger Coulon"],
    famousProducers: ["Egly-Ouriet (Les Vignes de Vrigny)", "Roger Coulon"],
    iconicVineyards: ["Les Vignes de Vrigny", "Les Champs Chevalier"]
  }
];

export const CHAMPAGNE_SUBREGIONS = [
  {
    id: 'montagne-de-reims',
    name: "Montagne de Reims",
    district: "Montagne de Reims",
    lat: 49.16,
    lng: 4.10,
    terroir: "Forested plateau capped with Tertiary clays and sands, with steep Upper Cretaceous Belemnite chalk escarpments on mid-slopes.",
    focus: "Pinot Noir Grand Crus: Ambonnay, Bouzy, Verzenay, Mailly, Verzy, Sillery, Puisieulx, Beaumont-sur-Vesle, Louvois.",
    geology: "Thick Belemnite chalk escarpment facing north, east, and south with gravelly alluvial topsoils.",
    dominantGrapes: "Pinot Noir (primary), Chardonnay (Trépail, Villers-Marmery), Meunier",
    microTerroirs: [
      { name: "Grande Montagne", focus: "Muscular Grand Cru Pinot Noir on southern slopes (Ambonnay, Bouzy, Louvois) and northern slopes (Verzenay, Mailly, Verzy)" },
      { name: "Monts de Berne", focus: "Sandy-clay chalk hills northwest of Reims (Saint-Thierry, Merfy, Cauroy-lès-Hermonville)" },
      { name: "Massif de Saint-Thierry", focus: "Cool sandy-limestone terroirs for Meunier and crisp Pinot Noir" },
      { name: "Vesle & Ardre Valleys", focus: "Frost-susceptible valleys dominated by resilient, late-budding Meunier" }
    ],
    description: "A horseshoe-shaped forested mountain dominating northern Champagne. Renowned for power, structure, and 9 of the 17 Grand Crus."
  },
  {
    id: 'vallee-de-la-marne',
    name: "Vallée de la Marne",
    district: "Vallée de la Marne",
    lat: 49.07,
    lng: 3.90,
    terroir: "Sparnacian sedimentary clays, limestone marls, sand, and alluvial silt along the Marne riverbanks.",
    focus: "Meunier & Pinot Noir: Aÿ (Grand Cru), Tours-sur-Marne (Grand Cru), Mareuil-sur-Aÿ (1er Cru), Dizy, Hautvillers, Cumières.",
    geology: "Sparnacian illite clays, calcareous marls, and river gravels buffering against spring frosts.",
    dominantGrapes: "Meunier (primary across the valley), Pinot Noir (Grand Cru Aÿ), Chardonnay",
    microTerroirs: [
      { name: "Grande Vallée", focus: "Steep south-facing amphitheaters of Aÿ, Dizy, Hautvillers, Cumières, Mareuil-sur-Aÿ, Bisseuil" },
      { name: "Rive Droite (Right Bank)", focus: "North of Marne (Damery, Venteuil, Dormans) - clay-limestone Meunier" },
      { name: "Rive Gauche (Left Bank)", focus: "South of Marne (Festigny, Leuvrigny, Mareuil-le-Port, Œuilly) - rich Illite clay Meunier" },
      { name: "Confluence / Marne Ouest", focus: "Western extension towards Château-Thierry and the Aisne department" }
    ],
    description: "Stretching 100km along the Marne River. The world capital of Meunier, yielding generous, round, fruit-forward wines alongside legendary Pinot Noir in Aÿ."
  },
  {
    id: 'cote-des-blancs',
    name: "Côte des Blancs",
    district: "Côte des Blancs",
    lat: 48.97,
    lng: 4.02,
    terroir: "Pure outcropping of Upper Cretaceous Belemnitella quadrata chalk escarpment facing east, providing peerless drainage and solar warmth.",
    focus: "Chardonnay Grand Crus: Avize, Chouilly, Cramant, Le Mesnil-sur-Oger, Oger, Oiry, plus Vertus (1er Cru).",
    geology: "Upper Campanian Belemnite chalk escarpment with 35-40% microporosity.",
    dominantGrapes: "Chardonnay (97%+ of vineyard surface)",
    microTerroirs: [
      { name: "Northern Gateway (Chouilly, Cramant)", focus: "Creamy, rich, blossom-fragrant Blanc de Blancs" },
      { name: "Central Core (Avize, Oger)", focus: "Benchmark tension, yellow citrus, and crystalline chalk balance" },
      { name: "Southern Amphitheater (Le Mesnil-sur-Oger)", focus: "Austere, razor-sharp, hyper-mineral, decades-long cellaring" },
      { name: "Eastern Plain (Oiry)", focus: "Airy, delicate, saline chalk expressions" }
    ],
    description: "The global benchmark for Blanc de Blancs Chardonnay. A 20-kilometer cliff of pure chalk yielding wines of peerless precision, steeliness, and laser-like minerality."
  },
  {
    id: 'cote-de-sezanne',
    name: "Côte de Sézanne",
    district: "Côte de Sézanne",
    lat: 48.72,
    lng: 3.75,
    terroir: "Chalk bedrock with heavier topsoils of clay, marl, and sand; warmer south/southeast orientation.",
    focus: "Chardonnay: Sézanne, Bethon, Villenauxe-la-Grande, Barbonne-Fayel.",
    geology: "Cretaceous chalk overlaid with warm Thanetian sands and clay-marl topsoils.",
    dominantGrapes: "Chardonnay (primary), Pinot Noir, Meunier",
    microTerroirs: [
      { name: "Sézanne & Bethon", focus: "Sun-drenched south-facing chalk slopes producing round, fruity Chardonnays" },
      { name: "Villenauxe-la-Grande", focus: "Clay-rich western sector favoring early ripening" }
    ],
    description: "Located south of Côte des Blancs. Warmer microclimate producing fleshier, rounder, tropical stone-fruit-driven Chardonnays with immediate approachability."
  },
  {
    id: 'cote-des-bar',
    name: "Côte des Bar (Aube)",
    district: "Côte des Bar (Aube)",
    lat: 48.10,
    lng: 4.40,
    terroir: "Upper Jurassic Kimmeridgian marls and limestone beds packed with Exogyra virgula marine fossils (geologically identical to Chablis).",
    focus: "Artisanal Grower Pinot Noir: Les Riceys, Urville, Celles-sur-Ource, Buxeuil, Bar-sur-Aube.",
    geology: "Kimmeridgian and Portlandian limestone-marl alternating strata.",
    dominantGrapes: "Pinot Noir (85%+), Pinot Blanc (Blanc Vrai), Chardonnay",
    microTerroirs: [
      { name: "Barséquanais (Seine, Ource, Laignes valleys)", focus: "Les Riceys, Celles-sur-Ource, Buxeuil - Kimmeridgian marl Pinot Noir & Pinot Blanc" },
      { name: "Bar-sur-Aubois (Aube valley)", focus: "Bar-sur-Aube, Urville, Champignol - Oxfordian/Kimmeridgian higher elevation slopes" }
    ],
    description: "The southern frontier of Champagne in the Aube department. Epicenter of the artisanal grower revolution focusing on organic viticulture, single parcels, and vinous Pinot Noir."
  },
  {
    id: 'coteaux-sud-epernay',
    name: "Coteaux Sud d’Épernay",
    district: "Coteaux Sud d’Épernay",
    lat: 49.00,
    lng: 3.94,
    terroir: "Transitional geology featuring Sparnacian clays, flint gravels (meulière), and chalk pockets south of Épernay.",
    focus: "Meunier & Chardonnay: Pierry (Premier Cru), Chavot-Courcourt, Moussy, Monthelon, Brugny-Vaudancourt.",
    geology: "Complex mosaic of flint (silex), clay-limestone marls, and shallow chalk beds.",
    dominantGrapes: "Meunier, Chardonnay, Pinot Noir",
    microTerroirs: [
      { name: "Chavot-Courcourt & Moussy", focus: "Flint and clay-limestone hillsides yielding tense, mineral Meunier" },
      { name: "Pierry (1er Cru) & Monthelon", focus: "Chalk-marl slopes yielding structured Meunier and Blanc de Blancs" }
    ],
    description: "Rolling hills south of Épernay acting as a bridge between Vallée de la Marne and Côte des Blancs. Home to dynamic young terroir-focused vignerons."
  },
  {
    id: 'vitryat',
    name: "Vitryat (Côtes de Vitry)",
    district: "Vitryat",
    lat: 48.80,
    lng: 4.55,
    terroir: "Turonian and Senonian chalk hillsides surrounding Vitry-le-François.",
    focus: "Vibrant Blanc de Blancs Chardonnay: Vitry-en-Perthois, Bassuet, Saint-Amand-sur-Fion.",
    geology: "Pure white Turonian chalk escarpment.",
    dominantGrapes: "Chardonnay (98%+)",
    microTerroirs: [
      { name: "Vitryat Hillsides", focus: "15 small communes producing vibrant, crisp, high-tension mineral Chardonnay" }
    ],
    description: "An isolated eastern chalk enclave producing pristine, floral, high-acid Chardonnays prized for freshness in house blends."
  }
];

export const CHAMPAGNE_TECHNICAL_REGULATIONS = {
  geology: {
    summary: "The Champagne basin is shaped by thick Mesozoic marine sedimentary formations, predominantly Upper Cretaceous chalk and Upper Jurassic Kimmeridgian marls.",
    formations: [
      {
        id: 'belemnite-chalk',
        name: "Belemnite Chalk",
        frenchName: "Craie à Bélemnites",
        period: "Upper Cretaceous (Campanian stage, ~75-80 Ma)",
        fossil: "Belemnitella quadrata (fossilized cephalopod guards)",
        characteristics: "Ultra-porous (35-40% capillary water retention) pure calcium carbonate acting as natural sponge and solar radiator.",
        porosity: "35% to 40% capillary porosity, holding 300–400 liters of water per cubic meter.",
        keyAreas: ["Montagne de Reims mid/upper slopes", "Côte des Blancs hillside escarpments"],
        wineImpact: "Imparts chiseled tension, laser-sharp acidity, flinty/saline minerality, and unmatched aging longevity."
      },
      {
        id: 'micraster-chalk',
        name: "Micraster Chalk",
        frenchName: "Craie à Micraster",
        period: "Upper Cretaceous (Turonian/Santonian, ~85-90 Ma)",
        fossil: "Micraster (fossilized heart sea urchins)",
        characteristics: "Denser, less porous chalk mixed with silty and clay alluvial deposits.",
        porosity: "25% to 30% porosity.",
        keyAreas: ["Lower slopes of the Marne Valley", "Valley plains of Sillery, Puisieulx, and Oiry", "Vitryat"],
        wineImpact: "Yields lighter-bodied, delicate, saline, and ethereal floral expressions."
      },
      {
        id: 'kimmeridgian-marl',
        name: "Kimmeridgian Marl & Limestone",
        frenchName: "Marnes Kimméridgiennes",
        period: "Upper Jurassic (Kimmeridgian stage, ~150-155 Ma)",
        fossil: "Exogyra virgula (comma-shaped fossil oysters)",
        characteristics: "Alternating strata of calcareous marl and hard limestone; geologically contiguous with Chablis and Sancerre.",
        porosity: "Moderate porosity with high clay moisture-retention.",
        keyAreas: ["Côte des Bar / Aube (Barséquanais and Bar-sur-Aubois)"],
        wineImpact: "Yields deeply vinous, structured, and earthy Pinot Noir and textured Pinot Blanc."
      },
      {
        id: 'sparnacian-clay',
        name: "Sparnacian Clays & Sands",
        frenchName: "Argiles et Sables Sparnaciens",
        period: "Lower Eocene (Tertiary era, ~53-56 Ma)",
        fossil: "Lignite beds, quartz sands, and siliceous millstone flint (meulière)",
        characteristics: "Cool, heavy, nutrient-retentive illite clays and sand pockets.",
        porosity: "Dense, water-retentive, cold soils buffering against drought.",
        keyAreas: ["Vallée de la Marne slopes and banks", "Coteaux Sud d’Épernay", "Massif de Saint-Thierry"],
        wineImpact: "Provides moisture buffer for Meunier, yielding round, juicy, and expressive orchard-fruit profiles."
      },
      {
        id: 'alluvial-gravels',
        name: "Quaternary Alluvial Silts & Gravels",
        frenchName: "Alluvions Anciennes et Récentes",
        period: "Quaternary (Recent)",
        fossil: "River terrace gravels and siliceous loam",
        characteristics: "Well-drained sand, gravel, and silt benches along river corridors.",
        porosity: "Freely draining upper topsoil over chalk bedrock.",
        keyAreas: ["Marne, Vesle, and Aisne riverbanks (Tours-sur-Marne, Beaumont-sur-Vesle)"],
        wineImpact: "Encourages supple aromatic lift and delicate, silky textures."
      }
    ]
  },

  grapes: {
    major: [
      {
        id: 'pinot-noir',
        name: "Pinot Noir",
        frenchSynonym: "Noirien / Salvagnin",
        percentage: 38,
        type: "Red",
        epicenter: "Montagne de Reims, Côte des Bar, Aÿ",
        profile: "Red berries (raspberry, red cherry), muscular structure, palate weight, savoriness, aging backbone",
        role: "Forms the structural backbone and vinous architecture of classic Champagne assemblages; sole grape for Blanc de Noirs.",
        benchmarkCuvees: ["Bollinger Vieilles Vignes Françaises (VVF)", "Egly-Ouriet Blanc de Noirs Les Crayères"]
      },
      {
        id: 'chardonnay',
        name: "Chardonnay",
        frenchSynonym: "Morillon Blanc / Epinette",
        percentage: 31,
        type: "White",
        epicenter: "Côte des Blancs, Sézanne, Vitryat",
        profile: "Citrus (lemon, lime), white blossom, flint, brioche, laser-like acidity, decades-long cellaring",
        role: "Provides freshness, linear tension, chalk minerality, and extended aging dynamics; sole grape for Blanc de Blancs.",
        benchmarkCuvees: ["Salon Le Mesnil", "Pierre Péters Les Chétillons", "Taittinger Comtes de Champagne"]
      },
      {
        id: 'meunier',
        name: "Meunier",
        frenchSynonym: "Pinot Meunier / Dusty Miller",
        percentage: 31,
        type: "Red",
        epicenter: "Vallée de la Marne, Ardre Valley",
        profile: "Orchard fruit (apple, pear, mirabelle plum), roundness, floral lift, early accessibility",
        role: "Adds roundness, lush orchard fruit forwardness, and early drinkability especially on clay-dominant valley soils.",
        benchmarkCuvees: ["Jérôme Prévost La Closerie Les Béguines", "Egly-Ouriet Les Vignes de Vrigny"]
      }
    ],
    heritage: [
      {
        id: 'pinot-blanc',
        name: "Pinot Blanc (Blanc Vrai)",
        frenchSynonym: "Blanc Vrai",
        percentage: "<0.25%",
        type: "White",
        epicenter: "Côte des Bar (Celles-sur-Ource, Buxeuil)",
        profile: "Round, white peach, melon, moderate acidity, textured waxy floral perfume",
        role: "White mutation of Pinot Noir; offers textural softness and generous stone fruit without sharp acidity.",
        status: "Authorized heritage variety under INAO Champagne AOC regulations.",
        benchmarkCuvees: ["Cédric Bouchard Roses de Jeanne La Bolorée", "Pierre Gerbais L’Originale"]
      },
      {
        id: 'arbane',
        name: "Arbane",
        frenchSynonym: "Arbanne / Darbanne",
        percentage: "<0.05%",
        type: "White",
        epicenter: "Aube (Bar-sur-Aube, Buxeuil)",
        profile: "Electric high acidity, rustic citrus verbena, green apple, white pepper",
        role: "Ancient indigenous Aube white variety renowned for electric high acidity and rustic floral lift.",
        status: "Authorized heritage variety; extremely low-yielding and scarce.",
        benchmarkCuvees: ["Moutard Cépage Arbane", "Olivier Horiot 5 Sens"]
      },
      {
        id: 'petit-meslier',
        name: "Petit Meslier",
        frenchSynonym: "Meslier Saint-François",
        percentage: "<0.05%",
        type: "White",
        epicenter: "Vallée de la Marne / Aube pockets",
        profile: "Piercing acidity, lime zest, herbal tea, green pear, crisp mineral bite",
        role: "Rare Gouais Blanc × Savagnin heritage crossing with piercing acidity and herbal tension.",
        status: "Authorized heritage variety.",
        benchmarkCuvees: ["Duval-Leroy Petit Meslier Authentis", "Champagne Aubry Le Nombre d’Or"]
      },
      {
        id: 'pinot-gris',
        name: "Pinot Gris (Fromenteau)",
        frenchSynonym: "Fromenteau / Pinot Beurot",
        percentage: "<0.05%",
        type: "White (Gris)",
        epicenter: "Aube / Marne historic plots",
        profile: "Honeyed apricot, smoke, baked apple, supple texture, moderate acidity",
        role: "Historic pink-grey grape producing honeyed apricot, smoky richness, and supple texture.",
        status: "Authorized heritage variety.",
        benchmarkCuvees: ["Drappier Trop m’en Faut (100% Pinot Gris)"]
      }
    ],
    iconicComplantee: {
      name: "Laherte Frères \"Les 7\"",
      location: "Chavot-Courcourt (Coteaux Sud d’Épernay)",
      description: "Single parcel co-planted with all 7 authorized varieties: 18% Pinot Noir, 18% Meunier, 18% Chardonnay, 17% Pinot Blanc, 15% Arbane, 10% Petit Meslier, 4% Pinot Gris; vinified in oak casks with zero dosage."
    }
  },

  pressing: {
    marcKg: 4000,
    maxAocMustLiters: 2550,
    maxAocMustL: 2550,
    extractionRatePct: 63.75,
    cuveeLiters: 2050,
    cuveeL: 2050,
    tailleLiters: 500,
    tailleL: 500,
    rebecheMinPct: 7,
    rebecheMaxPct: 10,
    rebecheDistillationMandatory: true,
    traditionalPressType: "Pressoir vertical traditionnel (4,000 kg wooden basket) and pneumatic membrane press",
    rules: [
      "1 Marc is legally defined as exactly 4,000 kg of whole-cluster grapes loaded into the press.",
      "Whole-cluster pressing without destemming is legally mandatory (stems act as natural drainage channels).",
      "Maximum permitted juice extraction is 2,550 Liters per 4,000 kg marc (63.75% extraction yield).",
      "La Cuvée (2,050 L / 10.25 pièces of 205 L): The first free-run and gentle extraction, highest in tartaric/malic acid and lowest in pH and phenolics; reserved for prestige cuvées and vintage wines.",
      "La Taille (500 L / 2.5 pièces of 205 L): The secondary press, lower in acidity, higher in potassium, pH, and pigments; adds forward fruitiness and roundness to NV blends.",
      "La Rebêche (7-10% of total volume / 200-400 L): Compulsory waste extraction sent exclusively to certified distilleries for industrial or spirit alcohol (Ratafia de Champagne, Marc de Champagne); strictly illegal for Champagne wine production."
    ],
    fractions: [
      {
        fraction: "La Cuvée (First Pressing)",
        volumeL: 2050,
        piecesEquivalent: "10.25 pièces (205 L each)",
        chemicalProfile: "Highest sugar concentration, highest tartaric/malic acidity, lowest pH (2.95–3.10), minimal skin phenolics and potassium.",
        destination: "Used exclusively for Prestige Cuvées, Vintage (Millésimé) Champagnes, and top-tier Non-Vintage blends."
      },
      {
        fraction: "La Taille (Second Pressing)",
        volumeL: 500,
        piecesEquivalent: "2.5 pièces (205 L each)",
        chemicalProfile: "Higher pH (3.15–3.30), lower total acidity, higher potassium, increased polyphenols, tannins, and pigment.",
        destination: "Blended in small portions into entry-level NV cuvées for immediate fruit appeal, or sold off."
      },
      {
        fraction: "La Rebêche (Distillation Residue)",
        volumeL: "200 to 400 L (7% to 10% mandatory)",
        piecesEquivalent: "1 to 2 pièces",
        chemicalProfile: "High pH, bitter skin phenolics, oxidized matter, heavy astringency.",
        destination: "MANDATORY DISTILLATION: Sent under customs supervision to registered distilleries for Marc de Champagne, Fine de Champagne, Ratafia, or biofuel."
      }
    ]
  },

  aging: {
    nonVintage: {
      minTotalMonths: 15,
      minLeesMonths: 12,
      rule: "Minimum 15 months total aging from bottling (tirage) to commercial release, including at least 12 months uninterrupted aging on the lees (sur lattes) before disgorgement.",
      description: "Ensures essential yeast autolysis compounds (mannoproteins, amino acids) are integrated into the wine."
    },
    vintage: {
      minTotalMonths: 36,
      minLeesMonths: 36,
      declarationCapPct: 80,
      rule: "Minimum 36 months (3 years) total maturation from tirage to commercial release; maximum 80% of a single harvest may be declared vintage.",
      description: "Requires 100% of fruit to come from the single stated harvest year; remaining 20% minimum must be retained for reserve wines (vins de réserve)."
    }
  },

  dosageTiers: [
    {
      id: 'brut-nature',
      tier: "Brut Nature",
      frenchTerms: "Pas Dosé / Zero Dosage / Non Dosé",
      frenchDesignation: "Pas Dosé / Zero Dosage / Non Dosé",
      gPerLMin: 0,
      gPerLMax: 3,
      range: "0 – 3 g/L",
      sugarRange: "0–3 g/L",
      sugarAddedAllowed: false,
      rule: "Residual sugar 0–3 g/L with NO added sugar in the liqueur d’expédition (natural grape residual only).",
      profile: "Chiseled, bone-dry, laser-sharp chalk minerality and saline tension.",
      foodPairing: "Raw oysters (Belon, Gillardeau), caviar, sashimi, hamachi crudo, sea urchin."
    },
    {
      id: 'extra-brut',
      tier: "Extra Brut",
      frenchTerms: "Extra Brut",
      frenchDesignation: "Extra Brut",
      gPerLMin: 0,
      gPerLMax: 6,
      range: "0 – 6 g/L",
      sugarRange: "0–6 g/L",
      sugarAddedAllowed: true,
      rule: "Residual sugar 0–6 g/L (dosage added or natural).",
      profile: "Crisp, tense, pristine mineral drive with subtle roundness.",
      foodPairing: "Lobster carpaccio, langoustines, goat cheeses, sushi, pan-seared sea scallops."
    },
    {
      id: 'brut',
      tier: "Brut",
      frenchTerms: "Brut",
      frenchDesignation: "Brut",
      gPerLMin: 0,
      gPerLMax: 12,
      range: "0 – 12 g/L",
      sugarRange: "0–12 g/L",
      sugarAddedAllowed: true,
      rule: "Residual sugar 0–12 g/L (the global benchmark commercial style).",
      profile: "Harmonious equilibrium between vibrant acidity and supple texture.",
      foodPairing: "Roast poultry, fried chicken, gougères, turbot with beurre blanc, triple-cream cheeses."
    },
    {
      id: 'extra-dry',
      tier: "Extra Dry",
      frenchTerms: "Extra Sec",
      frenchDesignation: "Extra Sec",
      gPerLMin: 12,
      gPerLMax: 17,
      range: "12 – 17 g/L",
      sugarRange: "12–17 g/L",
      sugarAddedAllowed: true,
      rule: "Residual sugar 12–17 g/L.",
      profile: "Gentle orchard fruit sweetness, softer acidity, rounded mouthfeel.",
      foodPairing: "Spicy Asian dishes, charcuterie, creamy seafood pasta, soft goat cheeses."
    },
    {
      id: 'sec',
      tier: "Sec",
      frenchTerms: "Sec (Dry)",
      frenchDesignation: "Sec / Dry",
      gPerLMin: 17,
      gPerLMax: 32,
      range: "17 – 32 g/L",
      sugarRange: "17–32 g/L",
      sugarAddedAllowed: true,
      rule: "Residual sugar 17–32 g/L (medium-sweet on modern palate).",
      profile: "Noticeable stone fruit sweetness, rich texture, pastry cream notes.",
      foodPairing: "Foie gras, mild soft cheeses, fruit tarts, spicy curries."
    },
    {
      id: 'demi-sec',
      tier: "Demi-Sec",
      frenchTerms: "Demi-Sec (Semi-Dry)",
      frenchDesignation: "Demi-Sec / Semi-Dry",
      gPerLMin: 32,
      gPerLMax: 50,
      range: "32 – 50 g/L",
      sugarRange: "32–50 g/L",
      sugarAddedAllowed: true,
      rule: "Residual sugar 32–50 g/L.",
      profile: "Luscious, honeyed orchard fruits, candied citrus, dessert sweetness.",
      foodPairing: "Brioche french toast, tarte Tatin, fruit soufflés, blue cheeses."
    },
    {
      id: 'doux',
      tier: "Doux",
      frenchTerms: "Doux (Sweet)",
      frenchDesignation: "Doux / Sweet",
      gPerLMin: 50,
      gPerLMax: 100,
      range: "50+ g/L",
      sugarRange: "50+ g/L",
      sugarAddedAllowed: true,
      rule: "Residual sugar exceeding 50 g/L (historic 19th-century Tsarist Russian palate).",
      profile: "Intensely sweet, opulent, syrupy nectar balanced by core acidity.",
      foodPairing: "Crêpes Suzette, Roquefort, chocolate and fruit-based desserts."
    }
  ],

  producerCodes: [
    {
      code: "NM",
      title: "Négociant-Manipulant",
      frenchName: "Négociant-Manipulant",
      englishTranslation: "Merchant-Producer / Commercial House",
      description: "A commercial house or négociant that purchases grapes, must, or base wine from external growers to vinify, blend, and market under its own brand label. May also own estate vineyards.",
      operationalModel: "Purchases large percentage of fruit from hundreds of growers across diverse crus to craft consistent house styles.",
      shareOfProduction: "~70% of total production, >85% of exports",
      exampleProducers: ["Moët & Chandon", "Veuve Clicquot", "Bollinger", "Krug", "Louis Roederer", "Taittinger", "Pol Roger", "Laurent-Perrier", "Billecart-Salmon", "Salon"]
    },
    {
      code: "RM",
      title: "Récoltant-Manipulant",
      frenchName: "Récoltant-Manipulant",
      englishTranslation: "Grower-Producer",
      description: "An independent winegrower who cultivates their own vines, vinifies, ages, and bottles exclusively on-site (maximum 5% outside grape purchase allowed by law).",
      operationalModel: "Terroir-focused grower Champagne reflecting specific parcels, single vineyards, and artisan viticulture.",
      shareOfProduction: "~20% of French domestic market, ~10% of exports",
      exampleProducers: ["Jacques Selosse", "Pierre Péters", "Egly-Ouriet", "Cédric Bouchard (Roses de Jeanne)", "Agrapart & Fils", "Larmandier-Bernier", "Ulysse Collin", "David Léclapart"]
    },
    {
      code: "CM",
      title: "Coopérative de Manipulation",
      frenchName: "Coopérative de Manipulation",
      englishTranslation: "Cooperative Winery",
      description: "A cooperative winemaking union that pools harvested grapes from hundreds of member growers, vinifies the collective must, and markets finished Champagne under the co-op's proprietary brand names.",
      operationalModel: "Economies of scale, centralized state-of-the-art pressing and aging facilities.",
      shareOfProduction: "~9% of total production",
      exampleProducers: ["Nicolas Feuillatte (CV-CNF)", "Mailly Grand Cru", "De Saint-Gall (Union Champagne)", "Palmer & Co", "Jacquart", "Castelnau"]
    },
    {
      code: "RC",
      title: "Récoltant-Coopérateur",
      frenchName: "Récoltant-Coopérateur",
      englishTranslation: "Grower-Cooperator",
      description: "A grape grower who delivers their harvest to a cooperative for pressing and vinification, then receives back finished, disgorged, and bottled Champagne to market under their own private family label.",
      operationalModel: "Grower-owned brand vinified with shared cooperative equipment and cellar facilities.",
      shareOfProduction: "~1% of total production",
      exampleProducers: ["Independent family growers across the Marne, Aisne, and Aube valleys"]
    },
    {
      code: "SR",
      title: "Société de Récoltants",
      frenchName: "Société de Récoltants",
      englishTranslation: "Growers' Union / Family Association",
      description: "A legally registered entity formed by multiple family growers who pool their estate vineyards, share pressing and vinification facilities, and market wine under a single shared brand.",
      operationalModel: "Family partnership structure pooling vineyard assets while maintaining grower autonomy.",
      shareOfProduction: "<0.5% of total production",
      exampleProducers: ["Champagne Jean Milan (Oger)", "Champagne Aubry (Jouy-lès-Reims)"]
    },
    {
      code: "ND",
      title: "Négociant-Distributeur",
      frenchName: "Négociant-Distributeur",
      englishTranslation: "Merchant-Distributor",
      description: "A wine merchant or distributor who buys finished, bottled, and disgorged Champagne from other houses or cooperatives, applies their own proprietary label, and distributes it.",
      operationalModel: "Commercial distributor brand with no direct involvement in pressing or primary vinification.",
      shareOfProduction: "<0.5% of total production",
      exampleProducers: ["Commercial wine wholesale labels, luxury hotel private bottlings"]
    },
    {
      code: "MA",
      title: "Marque d'Acheteur",
      frenchName: "Marque d'Acheteur",
      englishTranslation: "Buyer's Own Brand",
      description: "A proprietary private label owned by an external third-party customer (supermarket chain, department store, restaurant group, celebrity) produced under contract by a Champagne house or cooperative.",
      operationalModel: "Private label contract packaging customized for retail clients.",
      shareOfProduction: "~1% of total production",
      exampleProducers: ["Kirkland Signature Champagne (Costco)", "Marks & Spencer Champagne", "Fauchon", "Harrods"]
    }
  ],

  ancillaryAocs: [
    {
      id: 'coteaux-champenois',
      name: "Coteaux Champenois AOC",
      established: 1974,
      establishedYear: 1974,
      type: "Still Dry Wine (Rouge, Blanc, Rosé)",
      permittedGrapes: ["Pinot Noir", "Meunier", "Chardonnay", "Arbane", "Petit Meslier", "Pinot Blanc", "Pinot Gris"],
      rules: [
        "Must be 100% still wine (carbonation or secondary fermentation is strictly prohibited).",
        "Delimited across the entire Champagne AOC production zone.",
        "Yield limits are strictly lower than for sparkling base wines, requiring higher natural sugar ripeness (min. 10.5% potential alcohol)."
      ],
      description: "Still (non-sparkling / vin tranquille) dry wines produced from designated parcels within the Champagne appellation boundaries. Most famous for historic red Pinot Noirs from warm Grand Cru slopes.",
      benchmarkCruCommunes: ["Bouzy (Bouzy Rouge)", "Ambonnay (Egly-Ouriet Cuvée des Grands Côtés)", "Aÿ (Bollinger La Côte aux Enfants)", "Cumières", "Verzenay", "Sillery (Selosse Sous le Mont Blanc)"],
      winemaking: "Red wines are macerated and aged in oak casks for 1-2 years; white and rosé styles express pure chalk acidity without carbonation."
    },
    {
      id: 'rose-des-riceys',
      name: "Rosé des Riceys AOC",
      established: 1947,
      establishedYear: 1947,
      type: "Still Saignée Rosé",
      permittedGrapes: ["100% Pinot Noir"],
      rules: [
        "Must be 100% Pinot Noir produced strictly within the 3 hillside villages of Les Riceys (Ricey-Haut, Ricey-Haute-Rive, Ricey-Bas) in the Aube department.",
        "Must be produced via traditional semi-carbonic saignée maceration (3 to 6 days in open wooden vats).",
        "Blending white and red wine (assemblage) is strictly prohibited (unlike sparkling Rosé Champagne)."
      ],
      description: "An ultra-rare still rosé wine produced exclusively within the 3 hillside villages of Les Riceys (Ricey-Haut, Ricey-Haute-Rive, Ricey-Bas) in the Barséquanais (Aube department / Côte des Bar).",
      historicalLore: "Historically favored by King Louis XIV, who discovered it during the construction of the Palace of Versailles.",
      winemaking: "Strictly 100% Pinot Noir crafted via whole-cluster semi-carbonic maceration and saignée bleeding in open oak vats. Only produced in warm, fully ripe harvest years.",
      sensoryProfile: "Deep salmon-ruby hue, intense bouquet of wild woodland strawberries, bergamot, crushed almonds, dried herbs, and a savory earthy finish (goût de terroir).",
      benchmarkProducers: ["Olivier Horiot (En Barmont / Valingrain)", "Alexandre Bonnet", "Jacques Defrance", "Guy de Forez", "Chassenay d’Arce"]
    }
  ]
};

export const CHAMPAGNE_PRESTIGE_CUVEES = [
  {
    id: 'dom-perignon',
    name: "Dom Pérignon",
    houseOrGrower: "Moët & Chandon",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: 1921, // Released commercially in 1935/1936
    grapeComposition: "Vintage Assemblage (~50% Chardonnay, ~50% Pinot Noir)",
    sourcing: "100% Grand Cru villages of Montagne de Reims, Côte des Blancs, Vallée de la Marne + Hautvillers Premier Cru (historic Abbey)",
    winemaking: "Minimum 8-10 years on lees (Plénitude P2 at 15+ years, P3 at 25-30+ years); reductive vinification in stainless steel.",
    character: "Smoky reduction, toasted brioche, dried citrus, white peach, jasmine floral notes, seamless silken mousse, and immense longevity.",
    iconicStatus: "The world's first commercial prestige cuvée, conceived by Robert-Jean de Vogüé in 1935."
  },
  {
    id: 'cristal',
    name: "Cristal",
    houseOrGrower: "Louis Roederer",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: "1876 / 1945 commercial",
    grapeComposition: "Vintage (~60% Pinot Noir, ~40% Chardonnay)",
    sourcing: "100% Estate-owned Grand Cru parcels across Verzenay, Verzy, Beaumont-sur-Vesle, Aÿ, Avize, Cramant, and Le Mesnil-sur-Oger",
    winemaking: "Biodynamic estate vineyards, partial oak cask aging (approx. 20%), minimum 6 years sur lattes + 8 months post-disgorgement rest; packaged in clear flat-bottomed crystal bottle with UV cellophane wrap.",
    character: "Laser-like chalk tension, candied citrus, toasted hazelnut, white flowers, crystalline mineral purity, and vibrating finish.",
    iconicStatus: "Created in 1876 for Tsar Alexander II of Russia; the ultimate expression of biodynamic Grand Cru terroir."
  },
  {
    id: 'comtes-de-champagne',
    name: "Comtes de Champagne",
    houseOrGrower: "Taittinger",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: 1952,
    grapeComposition: "100% Chardonnay (Blanc de Blancs)",
    sourcing: "Exclusively from 5 Côte des Blancs Grand Crus: Avize, Chouilly, Cramant, Le Mesnil-sur-Oger, and Oger",
    winemaking: "100% first press cuvée juice; 5% aged for 4 months in new toasted French oak barrels; minimum 10 years cellar aging in Saint-Nicaise Gallo-Roman chalk crayères.",
    character: "Creamy white peach, toasted brioche, lemon curd, candied ginger, saline chalk minerality, and silky aristocratic texture.",
    iconicStatus: "Benchmark prestige Blanc de Blancs created in tribute to the Counts of Champagne."
  },
  {
    id: 'grand-siecle',
    name: "Grand Siècle",
    houseOrGrower: "Laurent-Perrier",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: "1959 (Iterative MV)",
    grapeComposition: "Multi-Vintage Iteration (~55% Chardonnay, ~45% Pinot Noir)",
    sourcing: "100% Grand Cru fruit selected from 11 of the 17 Grand Crus (Ambonnay, Bouzy, Mailly, Tours-sur-Marne, Avize, Cramant, Le Mesnil, etc.)",
    winemaking: "Iterated blend of 3 declared standout complementary vintage years (e.g., Itération No. 26: 2012, 2008, 2005); aged minimum 10-12 years on lees.",
    character: "Perfect harmony of richness, candied citrus peel, roasted hazelnut, acacia honey, silkiness, and vibrant mineral acidity.",
    iconicStatus: "Conceived by Bernard de Nonancourt in 1959 to 'recreate the perfect year' through assemblage."
  },
  {
    id: 'sir-winston-churchill',
    name: "Cuvée Sir Winston Churchill",
    houseOrGrower: "Pol Roger",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: 1975, // Released 1984
    grapeComposition: "Vintage Pinot Noir Dominant (Secret family assemblage proportion)",
    sourcing: "Grand Cru old-vine Pinot Noir from Montagne de Reims and Grand Cru Chardonnay from Côte des Blancs",
    winemaking: "Vinified in stainless steel at cool temperatures, hand-riddled in Pol Roger's deep subterranean chalk cellars; minimum 10 years aging on lees.",
    character: "Robust, vinous, powerful, full-bodied architecture with roasted nuts, dried fruits, gingerbread, and majestic finish.",
    iconicStatus: "Crafted in tribute to Winston Churchill's favorite robust and mature Champagne style (\"My tastes are simple: I am easily satisfied with the best\")."
  },
  {
    id: 'clos-des-goisses',
    name: "Clos des Goisses",
    houseOrGrower: "Philipponnat",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: 1935,
    grapeComposition: "Single-Vineyard Vintage (~70% Pinot Noir, ~30% Chardonnay)",
    sourcing: "5.5-hectare walled vineyard with pure south-facing 45° steep chalk slope in Mareuil-sur-Aÿ (Premier Cru 99%)",
    winemaking: "Partial oak cask vinification (approx. 50%), no malolactic fermentation, minimum 8-10 years aging on lees, low dosage.",
    character: "Monumental power, black cherry, graphite smoke, chalk bedrock, opulent structure, and extraordinary aging capacity (30-50+ years).",
    iconicStatus: "Champagne's first and most famous single-vineyard clos cuvée, pioneering single-terroir expression in 1935."
  },
  {
    id: 'clos-du-mesnil',
    name: "Clos du Mesnil",
    houseOrGrower: "Krug",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: 1979,
    grapeComposition: "Single-Vineyard 100% Chardonnay (Blanc de Blancs)",
    sourcing: "1.84-hectare walled vineyard within the heart of Le Mesnil-sur-Oger (Grand Cru), enclosed by stone walls since 1698",
    winemaking: "Fermented parcel-by-parcel in small neutral oak casks (205 L), extended 10-15 years aging in Krug cellars before release.",
    character: "Electrifying chalk tension, lemon zest, crushed oyster shell, toasted almond, white truffle, and infinite mineral finish.",
    iconicStatus: "The undisputed holy grail of single-vineyard Blanc de Blancs."
  },
  {
    id: 'clos-d-ambonnay',
    name: "Clos d’Ambonnay",
    houseOrGrower: "Krug",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: 1995,
    grapeComposition: "Single-Vineyard 100% Pinot Noir (Blanc de Noirs)",
    sourcing: "Tiny 0.68-hectare walled vineyard within the village of Ambonnay (Grand Cru)",
    winemaking: "Fermented in small oak barrels, aged over 12-15 years on lees; extremely limited production (approx. 3,000 bottles).",
    character: "Heady red currant, black truffle, roasted sweet spices, praline, vinous majesty, and immense structural depth.",
    iconicStatus: "The rarest and most prestigious single-vineyard Blanc de Noirs in the world."
  },
  {
    id: 'vieilles-vignes-francaises',
    name: "Vieilles Vignes Françaises (VVF)",
    houseOrGrower: "Bollinger",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: 1969,
    grapeComposition: "100% Ungrafted Pinot Noir (Blanc de Noirs)",
    sourcing: "Ungrafted, phylloxera-free old vines grown en foule in tiny walled parcels in Aÿ (Chaudes Terres and Clos Saint-Jacques)",
    winemaking: "100% vinified in seasoned oak casks, aged under natural cork for 8-10+ years on lees; minute production (~2,000-3,000 bottles).",
    character: "Living historical time capsule of pre-phylloxera Champagne: profound concentration, black cherry, exotic spices, leather, and velvet texture.",
    iconicStatus: "World-renowned benchmark for pre-phylloxera ungrafted French viticulture."
  },
  {
    id: 'la-grande-dame',
    name: "La Grande Dame",
    houseOrGrower: "Veuve Clicquot",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: 1966, // Released 1972
    grapeComposition: "Vintage (~90% Pinot Noir, ~10% Chardonnay)",
    sourcing: "Historical Grand Cru parcels acquired by Madame Clicquot (Aÿ, Bouzy, Ambonnay, Verzy, Verzenay, Avize, Le Mesnil)",
    winemaking: "Aged minimum 8 years in the limestone crayères of Reims; showcase for Pinot Noir authority and elegance.",
    character: "Pinot Noir authority, red fruits, smoky minerality, dried fig, candied citrus, and refined velvety structure.",
    iconicStatus: "Tribute to Barbe-Nicole Ponsardin (Madame Clicquot), the \"Grande Dame de la Champagne\"."
  },
  {
    id: 'belle-epoque',
    name: "Belle Époque / Fleur de Champagne",
    houseOrGrower: "Perrier-Jouët",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: 1964,
    grapeComposition: "Vintage (~50% Chardonnay, ~45% Pinot Noir, ~5% Meunier)",
    sourcing: "Chardonnay from Cramant Grand Cru + Montagne de Reims Pinot Noir",
    winemaking: "Vinified in stainless steel, aged over 6 years on lees; encased in the iconic 1902 Emile Gallé Japanese anemone enameled bottle.",
    character: "White peach, hawthorn blossom, candied ginger, subtle brioche, refined silken mousse, and elegant floral lift.",
    iconicStatus: "Icon of Belle Époque art and floral Champagne finesse."
  },
  {
    id: 'cuvee-nicolas-francois',
    name: "Cuvée Nicolas François",
    houseOrGrower: "Billecart-Salmon",
    type: "Maison",
    status: "NM",
    producerCode: "NM",
    debutVintage: 1964,
    grapeComposition: "Vintage (~60% Pinot Noir, ~40% Chardonnay)",
    sourcing: "Grand Crus of Montagne de Reims and Côte des Blancs + Mareuil-sur-Aÿ Premier Cru",
    winemaking: "Partial oak vinification (approx. 20%), cold settling (débourbage à froid), extended 10+ years aging on lees.",
    character: "Vinous harmony, hawthorn blossom, yellow orchard peach, brioche, toasted almond, and pristine balance.",
    iconicStatus: "Created in tribute to the founder of Champagne Billecart-Salmon in Mareuil-sur-Aÿ."
  }
];

export const CHAMPAGNE_ICONIC_GROWERS = [
  {
    id: 'jacques-selosse',
    name: "Jacques Selosse",
    village: "Avize (Côte des Blancs)",
    subregion: "Côte des Blancs",
    vigneron: "Anselme & Guillaume Selosse",
    status: "RM",
    producerCode: "RM",
    philosophy: "Pioneer of the grower Champagne movement. Solera maturation (Substance), parcel-specific lieux-dits, biodynamic farming, indigenous yeasts, wood vinification with controlled oxidative nuance.",
    keyCuvees: ["Substance (Solera from 1986)", "Initial Blanc de Blancs", "Version Originale (V.O.)", "Lieux-dits: Les Carelles (Le Mesnil), La Côte Faron (Aÿ), Le Bout du Clos (Ambonnay), Sous le Mont (Mareuil), Chemin de Châlons (Cramant), Les Chantereines (Avize)"]
  },
  {
    id: 'pierre-peters',
    name: "Pierre Péters",
    village: "Le Mesnil-sur-Oger (Côte des Blancs)",
    subregion: "Côte des Blancs",
    vigneron: "Rodolphe Péters",
    status: "RM",
    producerCode: "RM",
    philosophy: "Master of crystalline, laser-pure Blanc de Blancs exclusively from Grand Cru chalk vineyards. Utilizes a perpetual reserve dating back to 1988.",
    keyCuvees: ["Cuvée Spéciale Les Chétillons (Single-vineyard benchmark)", "Cuvée de Réserve Blanc de Blancs", "L’Étonnant Monsieur Victor", "Rosé for Albane"]
  },
  {
    id: 'egly-ouriet',
    name: "Egly-Ouriet",
    village: "Ambonnay (Montagne de Reims)",
    subregion: "Montagne de Reims",
    vigneron: "Francis Egly",
    status: "RM",
    producerCode: "RM",
    philosophy: "The titan of Pinot Noir grower Champagne. Ultra-ripe harvesting, low yields, barrel fermentation in Dominique Laurent casks, extended lees aging (36 to 96+ months), bottled with minimal or zero dosage.",
    keyCuvees: ["Grand Cru Millésimé", "Blanc de Noirs Les Crayères Vieilles Vignes (100% Ambonnay Pinot Noir planted 1946)", "Grand Cru V.P. (Vieillissement Prolongé - 84 months on lees)", "Grand Cru Brut Tradition", "Les Vignes de Vrigny (100% Meunier 1er Cru)", "Coteaux Champenois Cuvée des Grands Côtés (Red)"]
  },
  {
    id: 'cedric-bouchard',
    name: "Cédric Bouchard / Roses de Jeanne",
    village: "Celles-sur-Ource (Côte des Bar / Aube)",
    subregion: "Côte des Bar (Aube)",
    vigneron: "Cédric Bouchard",
    status: "RM",
    producerCode: "RM",
    philosophy: "Radical purism: Single vineyard, single grape variety, single vintage, zero dosage, native yeasts, single press, bottled at lower pressure (4.5 atmospheres for delicate vinous pearl).",
    keyCuvees: ["Les Ursules (100% Pinot Noir)", "La Bolorée (100% Pinot Blanc from 1935 vines)", "La Haute-Lemblée (100% Chardonnay)", "Côte de Val Vilaine (100% Pinot Noir)", "Le Creux d’Enfer (100% Pinot Noir Rosé de Saignée)"]
  },
  {
    id: 'agrapart-et-fils',
    name: "Agrapart & Fils",
    village: "Avize (Côte des Blancs)",
    subregion: "Côte des Blancs",
    vigneron: "Pascal & Fabrice Agrapart",
    status: "RM",
    producerCode: "RM",
    philosophy: "Hyper-terroir focused Blanc de Blancs. Natural vineyard management, horse-plowed soils, demi-muid fermentation, zero filtration, low dosage.",
    keyCuvees: ["Minéral (Avize & Cramant chalk)", "Avizoise (Clay-chalk Avize)", "Vénus Brut Nature (Horse-plowed single plot planted 1959)", "Complantée (Co-planted 6 heritage & main varieties in Avize)", "Terroirs Extra Brut"]
  },
  {
    id: 'houette-et-sorbee',
    name: "Vouette & Sorbée",
    village: "Buxeuil (Côte des Bar / Aube)",
    subregion: "Côte des Bar (Aube)",
    vigneron: "Bertrand & Hélène Gautherot",
    status: "RM",
    producerCode: "RM",
    philosophy: "Demeter-certified biodynamic farming on Jurassic Kimmeridgian and Portlandian soils. Native yeast fermentation in used oak and Spanish clay amphorae, zero dosage, zero sulfur at bottling.",
    keyCuvees: ["Fidèle (100% Pinot Noir from Kimmeridgian marl)", "Blanc d’Argile (100% Chardonnay from Kimmeridgian clay)", "Textures (100% Pinot Blanc vinified in amphora)", "Saignée de Sorbée (100% Pinot Noir Saignée Rosé)"]
  },
  {
    id: 'jerome-prevost',
    name: "Jérôme Prévost / La Closerie",
    village: "Gueux (Montagne de Reims Northwest)",
    subregion: "Montagne de Reims",
    vigneron: "Jérôme Prévost (protégé of Anselme Selosse)",
    status: "RC / RM",
    producerCode: "RC",
    philosophy: "World benchmark for 100% Meunier from a single 2-hectare parcel ('Les Béguines') rich in Thanetian sandy-clay calcareous soils packed with fossilized seashells.",
    keyCuvees: ["Les Béguines (100% Meunier)", "& (Extra parcel blend)", "Fac-Simile (Rosé de Saignée Meunier)"]
  },
  {
    id: 'ulysse-collin',
    name: "Ulysse Collin",
    village: "Congy (Coteaux du Petit Morin)",
    subregion: "Coteaux Sud d’Épernay",
    vigneron: "Olivier Collin (protégé of Anselme Selosse)",
    status: "RM",
    producerCode: "RM",
    philosophy: "Single-parcel micro-cuvées aged for years in oak casks, highlighting isolated limestone and flint terroirs south of the Côte des Blancs.",
    keyCuvees: ["Les Enfers (100% Chardonnay)", "Les Roises (100% Chardonnay)", "Les Pierrières (100% Chardonnay)", "Les Maillons (100% Pinot Noir)"]
  },
  {
    id: 'david-leclapart',
    name: "David Léclapart",
    village: "Trépail (Montagne de Reims)",
    subregion: "Montagne de Reims",
    vigneron: "David Léclapart",
    status: "RM",
    producerCode: "RM",
    philosophy: "Biodynamic purist on the Premier Cru slopes of Trépail. Spiritual, zero-dosage Blanc de Blancs expressing pure chalk and flint.",
    keyCuvees: ["L’Amateur (Blanc de Blancs)", "L’Artiste (Old vines)", "L’Apôtre (1946 parcel)", "L’Alchimiste (Rosé de Saignée)"]
  },
  {
    id: 'laherte-freres',
    name: "Laherte Frères",
    village: "Chavot-Courcourt (Coteaux Sud d’Épernay)",
    subregion: "Coteaux Sud d’Épernay",
    vigneron: "Aurélien Laherte",
    status: "RM",
    producerCode: "RM",
    philosophy: "Dynamic champion of heritage cépages and single-parcel Meuniers. Biodynamic viticulture and oak barrel vinification.",
    keyCuvees: ["Les 7 (Co-planted 7 varieties)", "Les Empreintes", "Les Vignes d’Autrefois (Old-vine Meunier)", "Blanc de Blancs Brut Nature"]
  }
];

export const WINE_REGIONS = {
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
    
    // Terroir & Climate
    terroir: {
      climate: "Cool Continental (Köppen Cfb) with maritime oceanic currents. High annual precipitation, persistent morning mists, and marginal northern temperatures (average growing season ~10-11°C) that preserve searing natural acidity and slow phenolic maturation.",
      soil: "Upper Cretaceous Belemnite chalk (Belemnitella quadrata) on hillside mid-slopes, Micraster chalk on valley plains, Upper Jurassic Kimmeridgian limestone and fossil oyster marls in the Aube, and Sparnacian sedimentary clays in the Marne Valley.",
      elevation: "90m to 300m above sea level along undulating hillside slopes offering optimal solar radiation angles and thermal frost drainage.",
      riverInfluence: "The Marne, Vesle, Ardre, and Aube river valleys create crucial microclimatic corridors that channel cold air away from hillside vineyard amphitheaters."
    },

    // 7 Authorized Grape Varieties (3 Major + 4 Heritage)
    grapes: [
      { name: 'Pinot Noir', percentage: 38, type: 'Red', role: "Provides structural backbone, palate weight, red berry aromatics (raspberry, red cherry), and mid-palate vinous power; dominant in Montagne de Reims and Côte des Bar." },
      { name: 'Chardonnay', percentage: 31, type: 'White', role: "Yields elegance, laser-sharp acidity, delicate white floral and citrus aromas, saline chalk minerality, and immense longevity; dominant in Côte des Blancs." },
      { name: 'Meunier', percentage: 31, type: 'Red', role: "Adds roundness, lush orchard fruit (apple, pear, mirabelle plum) forwardness, and early drinkability; cold-hardy for frost-prone clay soils in the Vallée de la Marne." },
      { name: 'Pinot Blanc (Blanc Vrai)', percentage: 0.25, type: 'White', role: "White mutation of Pinot Noir yielding round stone fruit, white peach, melon, and textured floral mouthfeel; historical stronghold in Côte des Bar (Celles-sur-Ource)." },
      { name: 'Arbane', percentage: 0.05, type: 'White', role: "Ancient indigenous Aube white variety renowned for electric high acidity, rustic floral lift, green apple, and lemon verbena nuances." },
      { name: 'Petit Meslier', percentage: 0.05, type: 'White', role: "Rare Gouais Blanc × Savagnin heritage crossing with piercing acidity, lime zest, herbal tea, and crisp vegetal-citrus bite." },
      { name: 'Pinot Gris (Fromenteau)', percentage: 0.05, type: 'White', role: "Historic pink-grey grape producing honeyed apricot, smoky, baked apple richness, and supple texture." }
    ],

    // Structural Metrics (1-10)
    structure: {
      body: 5.5,
      acidity: 9.8,
      tannin: 1.5,
      sweetness: 2.0, // Brut style baseline
      alcohol: 12.0,
      agingPotential: "5 - 40+ Years"
    },

    // Classification Hierarchy
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

    // Tasting Notes / Flavor Profile
    flavorProfile: {
      primary: ['Green Apple', 'Lemon Zest', 'White Peach', 'Brioche', 'Chalk / Saline Minerality'],
      secondary: ['Toasted Hazelnuts', 'Crushed Oyster Shell', 'Honeysuckle', 'Fresh Dough', 'Candied Ginger', 'Black Truffle'],
      palate: "Vibrant, persistent mousse with crystalline acidity, chalky tension, tactile salinity, and an extraordinarily long, expansive finish."
    },

    // Curated Food & Dining Pairings
    foodPairings: [
      { category: 'Raw Bar & Seafood', dish: "Fresh Oysters (Belon, Gillardeau), Oscietra Caviar, Hamachi Crudo, Pan-seared Hokkaido Scallops", note: "The wine's searing acidity and saline chalk finish effortlessly harmonize with the briny sweetness of raw shellfish." },
      { category: 'Rich & Crispy Bites', dish: "Truffle French Fries, Southern Fried Chicken, Warm Gougères, Tempura Langoustines", note: "The high effervescence and brisk acidity cleanse the palate after every rich, buttery or crispy bite." },
      { category: 'Fine Dining Main Courses', dish: "Roast Bresse Duck (Rosé), Butter-Poached Maine Lobster, Roast Turbot with Caviar Beurre Blanc", note: "Fuller-bodied Blanc de Noirs, Vintage, and Prestige Cuvées possess the textural weight for poultry and butter sauces." },
      { category: 'Artisanal Cheeses', dish: "Triple-cream Chaource, Brillat-Savarin, 24-Month Comté, Langres AOP", note: "Creamy bloomy-rind and washed-rind regional cheeses are cut by Champagne's mousse and acidity." }
    ],

    // 7 Sub-Regions & Micro-Terroirs
    subRegions: CHAMPAGNE_SUBREGIONS,

    // Complete CMS Level 3 17 Grand Cru Communes Catalog
    grandCrus: CHAMPAGNE_GRAND_CRUS,

    // Essential Premier Crus Catalog
    premierCrus: CHAMPAGNE_PREMIER_CRUS,

    // Technical CMS Level 3 Viticulture, Geology & AOC Regulations
    technicalRegulations: CHAMPAGNE_TECHNICAL_REGULATIONS,

    // Benchmark Prestige Cuvées Compendium
    prestigeCuvees: CHAMPAGNE_PRESTIGE_CUVEES,

    // Compendium of Revolutionary Cult Grower-Producers
    iconicGrowers: CHAMPAGNE_ICONIC_GROWERS
  },

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

    foodPairings: [
      { category: 'Poultry & Game Bird', dish: "Roast Duck Breast with Cherry Glaze, Roasted Guinea Fowl, Coq au Vin", note: "Red Burgundy's delicate red fruit and savory sous-bois elevate game birds without overpowering them." },
      { category: 'Beef & Earthy Stews', dish: "Boeuf Bourguignon, Dry-aged Ribeye with Morel Butter, Seared Venison Loin", note: "Tannins in Premier/Grand Cru Pinot soften beautifully against rich beef fat and wild mushrooms." },
      { category: 'Seafood & White Meat', dish: "Pan-Roasted Dover Sole, Butter-Basted Turbot, Veal Chop with Chanterelles", note: "Chardonnay from Meursault or Puligny-Montrachet matches the richness of butter sauces with striking minerality." },
      { category: 'Classic Cheeses', dish: "Époisses de Bourgogne, Soumaintrain, Delice de Bourgogne, Aged Comté", note: "The pungent, washed-rind Époisses is the ultimate historic partner for mature red Burgundy." }
    ],

    // 6 Subregions & Micro-Terroirs
    subRegions: BURGUNDY_SUBREGIONS,

    // All 33 Grand Crus
    grandCrus: BURGUNDY_GRAND_CRUS,

    // Benchmark Premier Crus
    premierCrus: BURGUNDY_PREMIER_CRUS,

    // Technical Geology & Winemaking Regulations
    technicalRegulations: BURGUNDY_TECHNICAL_REGULATIONS,

    // Benchmark Monopoles & Estates
    prestigeMonopoles: BURGUNDY_PRESTIGE_MONOPOLES,
    prestigeCuvees: BURGUNDY_PRESTIGE_MONOPOLES,

    // Iconic Domaines & Cult Producers
    iconicDomaines: BURGUNDY_ICONIC_DOMAINES,
    iconicGrowers: BURGUNDY_ICONIC_DOMAINES
  },

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

    foodPairings: [
      { category: 'Prime Red Meats', dish: "Prime Ribeye Steak with Bordelaise Sauce, Rack of Lamb with Rosemary, Chateaubriand", note: "Rich animal protein and fat bind seamlessly with Bordeaux's dense, youthful tannins." },
      { category: 'Game & Roasted Meats', dish: "Roast Duck with Blackberry Reduction, Venison Tenderloin, Braised Short Ribs", note: "Mature Bordeaux develops cedar, leather, and truffle notes that harmonize with wild game." },
      { category: 'Dessert Pairing (Sauternes)', dish: "Foie Gras Terrine, Roquefort Blue Cheese, Lemon Tart, Crème Brûlée", note: "Sauternes botrytized sweet wines create iconic contrasts with salty blue cheese and rich foie gras." }
    ],

    subRegions: [
      {
        id: 'left-bank-medoc',
        name: "Left Bank (Médoc & Haut-Médoc)",
        lat: 45.18,
        lng: -0.75,
        terroir: "Gravel outcrops along the western Gironde. The global cathedral of Cabernet Sauvignon.",
        focus: "Pauillac, Margaux, Saint-Julien, Saint-Estèphe, Haut-Médoc.",
        description: "Home to the legendary First Growths. Powerful, structured wines built for half a century in the cellar." },
      {
        id: 'right-bank-libournais',
        name: "Right Bank (Saint-Émilion & Pomerol)",
        lat: 44.89,
        lng: -0.19,
        terroir: "Limestone plateaus and blue clay pockets east of the Dordogne River.",
        focus: "Saint-Émilion Grand Cru, Pomerol, Lalande-de-Pomerol, Fronsac.",
        description: "Merlot and Cabernet Franc supremacy. Opulent, velvety, truffle-laced wines of sublime texture (Château Pétrus, Cheval Blanc)." },
      {
        id: 'graves-pessac',
        name: "Graves & Pessac-Léognan",
        lat: 44.75,
        lng: -0.60,
        terroir: "Ancient gravel beds just south of Bordeaux city, birthplace of claret.",
        focus: "Pessac-Léognan (Château Haut-Brion), Graves AOC.",
        description: "Produces smoky, mineral-drenched reds and world-class oaked Sauvignon Blanc/Sémillon whites." },
      {
        id: 'sauternais',
        name: "Sauternes & Barsac",
        lat: 44.53,
        lng: -0.34,
        terroir: "Cold Ciron spring waters meet warm Garonne, generating morning mist and noble rot (Botrytis cinerea).",
        focus: "Sémillon, Sauvignon Blanc: Château d'Yquem, Rieussec, Suduiraut, Climens.",
        description: "Golden nectar shimmering with apricot, honey, saffron, candied citrus, and buoyant acidity." }
    ]
  },

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

    foodPairings: [
      { category: 'Goat Cheeses', dish: "Crottin de Chavignol, Sainte-Maure de Touraine, Valençay with baguette", note: "The quintessential pairing: tangy goat cheese acidity matches Sancerre Sauvignon Blanc line-for-line." },
      { category: 'Shellfish & Seafood', dish: "Atlantic Oysters on the Half Shell, Pan-Seared Trout with Lemon Herbs, Moules Marinières", note: "Muscadet and dry Chenin Blanc provide crisp mineral cleansing for fresh shellfish." },
      { category: 'Poultry & Pork Charcuterie', dish: "Rillettes de Tours, Roast Pork Loin with Apples, Roasted Quail with Herbs", note: "Chinon and Saumur Cabernet Franc cut through rich rillettes and pork with bright red fruit and herbal freshness." }
    ],

    subRegions: [
      {
        id: 'upper-loire-sancerre',
        name: "Upper Loire (Sancerre & Pouilly-Fumé)",
        lat: 47.33,
        lng: 2.84,
        terroir: "Three soils: Terres Blanches (Kimmeridgian chalk), Caillottes (limestone pebbles), and Silex (flint).",
        focus: "Sauvignon Blanc & Pinot Noir: Sancerre, Pouilly-Fumé.",
        description: "Benchmark Sauvignon Blanc expressing laser precision, citrus oil, white flowers, and smoky flint." },
      {
        id: 'touraine-chinon',
        name: "Touraine & Chinon",
        lat: 47.16,
        lng: 0.24,
        terroir: "Tuffeau chalk cliffs and alluvial gravel terraces along the Vienne River.",
        focus: "Cabernet Franc (Chinon, Bourgueil) & Chenin Blanc (Vouvray).",
        description: "Silky, aromatic reds packed with raspberry and pencil lead alongside legendary dry-to-sweet Vouvray Chenin." },
      {
        id: 'anjou-saumur',
        name: "Anjou-Saumur & Savennières",
        lat: 47.38,
        lng: -0.65,
        terroir: "Schist and volcanic sandstone in Anjou; pure tuffeau limestone in Saumur.",
        focus: "Savennières (dry Chenin powerhouse), Saumur-Champigny (Cab Franc).",
        description: "Produces dry Chenin Blancs of immense longevity, electric acidity, and profound mineral depth." },
      {
        id: 'pays-nantais-muscadet',
        name: "Pays Nantais (Muscadet)",
        lat: 47.15,
        lng: -1.35,
        terroir: "Gneiss, granite, and gabbro metamorphic soils kissed by Atlantic ocean breezes.",
        focus: "Melon de Bourgogne: Muscadet Sèvre-et-Maine Sur Lie.",
        description: "Crisp, saline, yeasty and refreshing white wines handcrafted for seafood dining." }
    ]
  },

  'rhone': {
    id: 'rhone',
    name: "Rhône Valley",
    country: 'France',
    countryCode: 'FR',
    aliases: ['rhone', 'rhône', 'northern rhone', 'northern rhône', 'southern rhone', 'southern rhône', 'cote-rotie', 'côte-rôtie', 'hermitage', 'crozes-hermitage', 'cornas', 'saint-joseph', 'chateauneuf-du-pape', 'châteauneuf-du-pape', 'gigondas', 'vacqueyras', 'cotes du rhone'],
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

    foodPairings: [
      { category: 'Grilled & Braised Lamb', dish: "Herb-Crusted Rack of Lamb, Braised Lamb Shank with Rosemary, Slow-roasted Pork Shoulder", note: "Syrah's black pepper and Grenache's garrigue herb aromas are born to be enjoyed with lamb." },
      { category: 'Game & Barbecue', dish: "Venison Stew, Wood-Fired Ribeye, Charred Sausages with Polenta, Duck Confit", note: "The smoky, savory undertones of Northern Rhône Syrah harmonize with grilled, charred meats." },
      { category: 'Provencal Dishes', dish: "Ratatouille with Goat Cheese, Beef Daube, Mushroom Risotto with Truffle Oil", note: "Herbes de Provence and Mediterranean vegetable stews share the soul of Southern Rhône wines." }
    ],

    subRegions: [
      {
        id: 'northern-rhone',
        name: "Northern Rhône (Septentrionale)",
        lat: 45.45,
        lng: 4.80,
        terroir: "Perilously steep granite terraces overlooking the river, worked by hand.",
        focus: "Syrah: Côte-Rôtie (The Roasted Slope), Hermitage, Cornas, Saint-Joseph; Viognier: Condrieu.",
        description: "Aristocratic, savory, smoked-meat and peppery Syrah wines of breathtaking precision and focus." },
      {
        id: 'southern-rhone-cdp',
        name: "Châteauneuf-du-Pape & Southern Rhône",
        lat: 44.05,
        lng: 4.83,
        terroir: "Plateaus covered with large smooth quartz stones (galets roulés) that radiate heat into the night.",
        focus: "Grenache-led blends (up to 13 permitted grape varieties): Châteauneuf-du-Pape, Gigondas, Vacqueyras.",
        description: "Sun-drenched, opulent, warming reds brimming with kirsch, wild lavender, and baking spices." }
    ]
  },

  'piedmont': {
    id: 'piedmont',
    name: "Piedmont (Piemonte)",
    country: 'Italy',
    countryCode: 'IT',
    aliases: ['piedmont', 'piemonte', 'barolo', 'barbaresco', 'langhe', 'roero', 'alba', 'asti', 'valtellina', 'nebbiolo', 'barbera'],
    tagline: "The Land of Fog, Nebbiolo Kings & White Truffles",
    summary: "Nestled at the foot of the Italian Alps in northwestern Italy, Piedmont is Italy's culinary and fine-wine crown jewel. Famous for its autumn fog (nebbia) and limestone hillsides of the Langhe, Piedmont produces Barolo (\"The King of Wines and Wine of Kings\") and Barbaresco from the noble Nebbiolo grape.",
    center: [44.6500, 7.9500],
    zoom: 10,
    bounds: [[44.30, 7.50], [45.20, 8.80]],
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

    foodPairings: [
      { category: 'Truffles & Fresh Pasta', dish: "Tajarin Pasta with Butter and Shaved Alba White Truffles, Agnolotti del Plin", note: "Nebbiolo's natural earthy, mushroom, and truffle aromatics create an ethereal harmony with fresh truffles." },
      { category: 'Braised & Rich Meats', dish: "Brasato al Barolo (Beef braised in Barolo), Osso Buco with Polenta, Wild Boar Ragu", note: "Heavy collagen and meat fat are effortlessly sliced through by Barolo's formidable tannins and high acidity." },
      { category: 'Piedmontese Cheeses', dish: "Castelmagno DOP, Robiola di Roccaverano, Taleggio, Aged Parmigiano-Reggiano", note: "Crumbly, intense Castelmagno cheese paired with a glass of mature Nebbiolo is a legendary northern Italian tradition." }
    ],

    subRegions: [
      {
        id: 'barolo-langhe',
        name: "Barolo (The 11 Communes)",
        lat: 44.61,
        lng: 7.94,
        terroir: "Limestone marls and sandstone hills southwest of Alba.",
        focus: "Communes: La Morra, Barolo, Castiglione Falletto, Monforte d'Alba, Serralunga d'Alba.",
        description: "The King of Wines. Monforte and Serralunga produce powerhouse age-worthy monuments; La Morra offers silky rose elegance." },
      {
        id: 'barbaresco',
        name: "Barbaresco",
        lat: 44.72,
        lng: 8.08,
        terroir: "Calcareous blue-grey marls along the Tanaro River northeast of Alba.",
        focus: "Communes: Barbaresco, Neive, Treiso, San Rocco Seno d'Elvio.",
        description: "The Queen to Barolo's King. Warmer soils bring forward silky perfumes, refined tannins, and earlier charm." },
      {
        id: 'roero-alto-piemonte',
        name: "Roero & Alto Piemonte",
        lat: 45.60,
        lng: 8.25,
        terroir: "Sandy cliffs in Roero; volcanic porphyry and Alpine foothills in Gattinara/Ghemme.",
        focus: "Arneis, Nebbiolo (Spanna): Gattinara DOCG, Ghemme DOCG, Roero DOCG.",
        description: "Northern Alpine Nebbiolo displaying high-altitude mineral crunch, alpine herbs, and vibrant cranberry fruit." }
    ]
  },

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
    bounds: [[42.40, 10.00], [44.10, 12.10]],
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
        { name: 'Chianti Classico DOCG (Gran Selezione / Riserva)', detail: "The historic heartland between Florence and Siena with new UGA sub-zones (e.g. Panzano, Radda, Gaiole, Castellina)." },
        { name: 'Bolgheri DOC & Bolgheri Sassicaia DOCG', detail: "Tuscan coast home of Bordeaux blends (Sassicaia, Ornellaia, Masseto)." },
        { name: 'Vino Nobile di Montepulciano DOCG', detail: "Sangiovese (Prugnolo Gentile) aged in large Slavonian oak casks." }
      ]
    },

    flavorProfile: {
      primary: ['Tart Red Cherry', 'Blood Orange', 'Dried Oregano / Rosemary', 'Leather', 'Ripe Plum'],
      secondary: ['Balsamic Reduction', 'Sun-Dried Tomatoes', 'Cured Tobacco', 'Cacao', 'Crushed Clay / Terra Cotta'],
      palate: "Energetic, savory, and structured with mouth-watering acidity, rustic fine tannins, and a long herb-tinged finish."
    },

    foodPairings: [
      { category: 'Iconic Tuscan Steaks', dish: "Bistecca alla Fiorentina (Thick-cut Florentine T-Bone grilled over wood embers)", note: "Sangiovese's high acidity and firm tannins slice cleanly through the rich, rare beef." },
      { category: 'Pasta with Game Ragu', dish: "Pappardelle al Cinghiale (Broad pasta ribbons with wild boar sauce), Pici al Ragu", note: "Rich tomato, rosemary, and wild boar savory sauce harmonizes with Tuscan herbal spice." },
      { category: 'Aged Cheeses & Truffles', dish: "Pecorino Toscano Stagionato with honey, White Bean and Cavolo Nero Soup (Ribollita)", note: "Earthy sheep's milk Pecorino and classic Tuscan olive oils sing alongside Chianti Classico." }
    ],

    subRegions: [
      {
        id: 'chianti-classico',
        name: "Chianti Classico (Gallo Nero)",
        lat: 43.55,
        lng: 11.30,
        terroir: "Stony Galestro schist and Alberese limestone hills between Florence and Siena.",
        focus: "Sangiovese: Gran Selezione, Riserva; UGAs: Panzano, Radda, Gaiole, Castellina, Greve.",
        description: "Vibrant, perfumed, high-altitude Sangiovese with bright red cherry, floral violet, and chiseled limestone acidity." },
      {
        id: 'montalcino',
        name: "Montalcino (Brunello)",
        lat: 43.05,
        lng: 11.48,
        terroir: "Sun-drenched hill crowned by medieval fortress with varied microclimates and rocky soils.",
        focus: "100% Sangiovese Grosso: Brunello di Montalcino, Rosso di Montalcino.",
        description: "Power and longevity. Darker cherry, leather, dried tobacco, and balsamic depth built for decades in the cellar." },
      {
        id: 'bolgheri-coast',
        name: "Bolgheri & Tuscan Coast",
        lat: 43.23,
        lng: 10.60,
        terroir: "Maritime gravel beds and clay plains facing the Mediterranean breezes.",
        focus: "Super Tuscans: Cabernet Sauvignon, Merlot, Cabernet Franc (Sassicaia, Ornellaia, Guado al Tasso).",
        description: "Lush, Mediterranean sunshine meets Bordeaux aristocrats. Velvet tannins, cassis, cedar, and sage." }
    ]
  },

  'california': {
    id: 'california',
    name: "California (Napa & Sonoma)",
    country: 'USA',
    countryCode: 'US',
    aliases: ['california', 'napa valley', 'napa', 'sonoma', 'sonoma county', 'sonoma coast', 'russian river valley', 'santa cruz mountains', 'central coast', 'paso robles', 'oakville', 'rutherford', 'stags leap', 'howell mountain', 'mt. veeder', 'washington', 'columbia valley'],
    tagline: "Sun-Kissed Valleys, Coastal Fogs & Cult Cabernets",
    summary: "Blessed with brilliant Mediterranean sunshine and cooling marine fogs drawn from the Pacific Ocean, California produces some of the most opulent, opulent, and globally revered wines. Napa Valley stands as the world capital for plush, powerful Cabernet Sauvignon, while Sonoma Coast, Russian River, and the Santa Cruz Mountains craft ethereal Pinot Noir and Chardonnay.",
    center: [38.4500, -122.3500],
    zoom: 9,
    bounds: [[36.80, -123.50], [39.20, -121.80]],
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

    foodPairings: [
      { category: 'Prime Steaks & Wagyu', dish: "Charbroiled Prime Porterhouse Steak, A5 Miyazaki Wagyu with Truffle Jus, Grilled Ribeye", note: "Napa Cabernet's immense fruit weight and polished tannins match the intensity of marbled prime beef." },
      { category: 'Braised Dishes & Short Ribs', dish: "Slow-Braised Cabernet Short Ribs with Polenta, Rack of Lamb with Blackberry Glaze", note: "Rich reduction sauces and tender meats complement the wine's dark berry and mocha notes." },
      { category: 'Salmon & Duck (Sonoma Pinot)', dish: "Pan-Seared King Salmon with Morel Mushrooms, Crispy Duck Breast with Cherry Demi-Glace", note: "Russian River and Sonoma Coast Pinot Noir pairs flawlessly with fatty salmon and duck." }
    ],

    subRegions: [
      {
        id: 'napa-valley-floor',
        name: "Napa Valley (Valley Floor AVAs)",
        lat: 38.43,
        lng: -122.38,
        terroir: "Alluvial gravel fans along the valley floor between the Mayacamas and Vaca ranges.",
        focus: "Cabernet Sauvignon: Oakville (Screaming Eagle, Harlan, Opus One), Rutherford, Stags Leap District.",
        description: "The golden epicenter of American wine. Opulent, decadent, cassis-drenched Cabernets of legendary stature." },
      {
        id: 'napa-mountain-avas',
        name: "Napa Valley Mountain AVAs",
        lat: 38.56,
        lng: -122.45,
        terroir: "Steep volcanic mountain slopes elevated high above the valley fog line.",
        focus: "Cabernet Sauvignon: Howell Mountain, Mt. Veeder, Spring Mountain, Diamond Mountain.",
        description: "Intense sun exposure and sparse mountain soils create brooding, inky, iron-inflected Cabernets of immense aging power." },
      {
        id: 'sonoma-coast-rrv',
        name: "Sonoma Coast & Russian River Valley",
        lat: 38.48,
        lng: -122.85,
        terroir: "Cool ocean winds and Goldridge sandy loam kissed by dense Pacific morning fogs.",
        focus: "Pinot Noir & Chardonnay: Russian River Valley, Sonoma Coast, Fort Ross-Seaview.",
        description: "Ethereal, ocean-cooled Pinot Noir bursting with wild berries and vibrant, mineral-laced Chardonnay." },
      {
        id: 'santa-cruz-mountains',
        name: "Santa Cruz Mountains",
        lat: 37.15,
        lng: -122.05,
        terroir: "Rugged forested coastal ridge (up to 800m elevation) above Silicon Valley.",
        focus: "Cabernet Sauvignon & Chardonnay: Ridge Monte Bello, Mount Eden.",
        description: "Historic, cool-climate mountain terroir yielding structured, European-style Cabernets that age for half a century." }
    ]
  },

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
    bounds: [[44.50, -123.60], [45.60, -122.60]],
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

    foodPairings: [
      { category: 'Wild Pacific Salmon', dish: "Cedar-Planked Wild Chinook Salmon, Pan-Crisped Steelhead Trout with Pinot Butter", note: "The quintessential Pacific Northwest pairing: salmon's rich omega-3 oils marry Oregon Pinot Noir's bright acidity." },
      { category: 'Wild Mushrooms & Duck', dish: "Seared Duck Breast with Marionberry Demi, Morel and Chanterelle Risotto, Roasted Pork Chop", note: "Earth-driven Oregon Pinot highlights wild chanterelle mushrooms and tender duck meat." },
      { category: 'Cheeses', dish: "Rogue River Blue (Oregon), Cowgirl Creamery Mt Tam, Aged Gruyère", note: "Artisanal Pacific Northwest cheeses shine alongside both Oregon Pinot Noir and Chardonnay." }
    ],

    subRegions: [
      {
        id: 'dundee-hills',
        name: "Dundee Hills AVA",
        lat: 45.28,
        lng: -123.01,
        terroir: "Red volcanic Jory clay loam, the birthplace of Oregon fine wine.",
        focus: "Pinot Noir: Domaine Drouhin, Eyrie Vineyards, Beaux Frères.",
        description: "Silky, elegant, floral Pinot Noir filled with bright red cherries and warm baking spices." },
      {
        id: 'ribbon-ridge-yamhill',
        name: "Ribbon Ridge & Yamhill-Carlton",
        lat: 45.33,
        lng: -123.13,
        terroir: "Ancient ocean floor marine sedimentary sandstone (Willakenzie soils).",
        focus: "Pinot Noir & Chardonnay: Beaux Frères, Shea Vineyard, Ken Wright.",
        description: "Darker, broody, brambly black fruits, iron minerality, and fine-grained muscular tannins." },
      {
        id: 'eola-amity-hills',
        name: "Eola-Amity Hills AVA",
        lat: 45.05,
        lng: -123.10,
        terroir: "Volcanic basalt and marine sediment cooled by daily Pacific Ocean gales.",
        focus: "Pinot Noir & Chardonnay: Cristom, Walter Scott, Lingua Franca.",
        description: "Electric acidity, intense structure, citrus oil, and saline tension." }
    ]
  },

  'germany-mosel': {
    id: 'germany-mosel',
    name: "Mosel (Mosel-Saar-Ruwer)",
    country: 'Germany',
    countryCode: 'DE',
    aliases: ['mosel', 'mosel saar ruwer', 'mosel-saar-ruwer', 'saar', 'ruwer', 'bernkastel', 'piesport', 'wehlen', 'urzig', 'ürzig', 'nahe', 'pfalz', 'rheingau', 'württemberg', 'alsace'],
    tagline: "Perilous Blue Slate Slopes & Liquid Crystal Riesling",
    summary: "Carving a dizzying, winding path through southwestern Germany, the Mosel River valley features some of the steepest vineyard slopes in the world (up to 70-degree gradients). Here, blue, red, and grey Devonian slate soils produce Riesling of featherweight lightness, electric acidity, and profound mineral complexity.",
    center: [49.9500, 7.0500],
    zoom: 10,
    bounds: [[49.60, 6.40], [50.40, 7.60]],
    heroGradient: 'linear-gradient(135deg, #102636 0%, #1e3f57 50%, #d4af37 100%)',
    accentColor: '#3a759e',

    terroir: {
      climate: "Cool Northern Continental moderated by the deep Mosel, Saar, and Ruwer river valleys, capturing and reflecting sunlight.",
      soil: "Blue, Red, and Grey Devonian Slate. The slate absorbs daytime heat and radiates it back to vines overnight.",
      elevation: "100m to 350m on vertigo-inducing amphitheatre slopes worked entirely by hand on single stakes.",
      riverInfluence: "The winding river acts as a giant heat-storing mirror protecting against frost."
    },

    grapes: [
      { name: 'Riesling', percentage: 90, type: 'White', role: "The supreme grape: green apple, lime blossom, white peach, slate minerality, petrol, and laser-like acidity." },
      { name: 'Pinot Noir (Spätburgunder)', percentage: 7, type: 'Red', role: "Delicate, cool-climate red wines of aromatic red cherry and spice." },
      { name: 'Elbling & Müller-Thurgau', percentage: 3, type: 'White', role: "Historic, high-acid local varieties." }
    ],

    structure: {
      body: 3.5,
      acidity: 10.0,
      tannin: 1.0,
      sweetness: 4,
      alcohol: 8.5,
      agingPotential: "5 - 50+ Years"
    },

    classification: {
      system: "Prädikatswein (Ripeness Levels) & VDP Grosse Lage",
      description: 'Combines traditional grape sugar ripeness with elite single-vineyard terroir rankings.',
      tiers: [
        { name: 'VDP.Grosse Lage (Grand Cru)', detail: "Top vineyard sites producing dry Grosses Gewächs (GG) and sublime noble sweet wines (e.g. Wehlener Sonnenuhr, Ürziger Würzgarten, Scharzhofberger)." },
        { name: 'Kabinett', detail: "Light, delicate, low alcohol (7-10%), crystalline acidity, off-dry or dry (Trocken)." },
        { name: 'Spätlese & Auslese', detail: "Late harvest and selected bunches offering richer peach, honey, and slate complexity." },
        { name: 'Beerenauslese (BA) & Trockenbeerenauslese (TBA)', detail: "Botrytized noble dessert wines of immortal longevity." }
      ]
    },

    flavorProfile: {
      primary: ['Green Apple', 'Key Lime', 'White Peach', 'Jasmine / Elderflower', 'Crushed Slate / Gunflint'],
      secondary: ['Honeycomb', 'Candied Ginger', 'Petrol / Kerosene (Mature)', 'Pink Grapefruit', 'Beeswax'],
      palate: "Weightless, dancing acidity with a miraculous tension between natural sweetness and diamond-cut slate minerality."
    },

    foodPairings: [
      { category: 'Spicy & Asian Cuisines', dish: "Thai Green Curry with Prawns, Sichuan Spicy Dumplings, Vietnamese Pork Belly Pho", note: "Riesling's residual sweetness and high acidity are the world's best pairing for spicy chili heat." },
      { category: 'Pork & Charcuterie', dish: "Crisp Roast Pork Knuckle, Smoked Sausages with Sauerkraut, Prosciutto and Melon", note: "High natural acidity effortlessly cuts through rich pork fat and salt." },
      { category: 'Spiced Cheeses & Desserts', dish: "Washed-Rind Munster Cheese with Caraway, Apple Tarte Tatin, Foie Gras", note: "Spätlese and Auslese Riesling provide rich fruit and bright acid lift for soft cheeses." }
    ],

    subRegions: [
      {
        id: 'middle-mosel-bernkastel',
        name: "Middle Mosel (Mittelmosel)",
        lat: 49.91,
        lng: 7.07,
        terroir: "Deep blue Devonian slate on famous south-facing river bends.",
        focus: "Wehlener Sonnenuhr, Ürziger Würzgarten, Bernkasteler Doctor, Piesporter Goldtröpfchen.",
        description: "The historic heart of Mosel: opulent white peach, exotic spice, and pure slate electricity." },
      {
        id: 'saar-ruwer',
        name: "Saar & Ruwer Valleys",
        lat: 49.63,
        lng: 6.55,
        terroir: "Cooler tributary valleys with grey slate soils.",
        focus: "Scharzhofberger (Egon Müller), Karthauserhofberg.",
        description: "Laser-focused, steely, crystalline Riesling of unbelievable precision, green apple, and lime minerality." }
    ]
  },

  'spain-rioja': {
    id: 'spain-rioja',
    name: "Spain (Rioja & Catalunya)",
    country: 'Spain',
    countryCode: 'ES',
    aliases: ['spain', 'rioja', 'catalunya', 'catalonia', 'priorat', 'galicia', 'rias baixas', 'rías baixas', 'ribera del duero', 'penedes', 'penedès'],
    tagline: "Old-Vine Tempranillo, Llicorella Schist & Atlantic Albariño",
    summary: "From the historic oak-aged Tempranillo cellars of Rioja and Ribera del Duero to the terraced black llicorella slate of Priorat and the breezy granite coast of Rías Baixas in Galicia, Spain offers an incredible spectrum of soulful, food-friendly wines steeped in centuries of heritage.",
    center: [42.4500, -2.5000],
    zoom: 9,
    bounds: [[41.00, -8.80], [43.50, 3.00]],
    heroGradient: 'linear-gradient(135deg, #2b1111 0%, #4a1919 50%, #d4af37 100%)',
    accentColor: '#962d2d',

    terroir: {
      climate: "Continental with Atlantic cooling in Rioja Alta and Galicia; Mediterranean heat in Catalunya/Priorat.",
      soil: "Clay-limestone (arcillo-calcáreo) and ferrous clay in Rioja; black quartzite slate (Llicorella) in Priorat; decomposed granite in Galicia.",
      elevation: "300m to 800m on plateau terraces along the Ebro River.",
      riverInfluence: "The Ebro River provides life-giving hydration across northern Spain."
    },

    grapes: [
      { name: 'Tempranillo', percentage: 60, type: 'Red', role: "The king of Spanish reds: red cherry, leather, dill, vanilla, tobacco leaf, and fine savory tannins." },
      { name: 'Garnacha & Cariñena', percentage: 22, type: 'Red', role: "Old-vine power, wild herbs, black slate minerality, and liquorice in Priorat." },
      { name: 'Albariño & Godello', percentage: 12, type: 'White', role: "Vibrant, saline, peach-and-citrus whites in Galicia (Rías Baixas)." },
      { name: 'Graciano & Mazuelo', percentage: 6, type: 'Red', role: "Aromatic lift and deep color in Rioja Gran Reserva blends." }
    ],

    structure: {
      body: 8.0,
      acidity: 7.5,
      tannin: 7.5,
      sweetness: 1,
      alcohol: 14.0,
      agingPotential: "5 - 35+ Years"
    },

    classification: {
      system: "DOCa / DO Oak Aging Classifications (Crianza, Reserva, Gran Reserva)",
      description: 'Famous for mandatory cellar aging in oak casks and bottle prior to market release.',
      tiers: [
        { name: 'Gran Reserva', detail: "Aged minimum 5 years (at least 2 in oak casks and 2 in bottle) for sublime leather, tobacco, and dried fruit complexity." },
        { name: 'Reserva', detail: "Aged minimum 3 years (at least 1 in oak casks and 6 months in bottle)." },
        { name: 'Crianza', detail: "Aged minimum 2 years (at least 1 in oak)." },
        { name: 'Priorat DOCa (Vi de Vila / Gran Vinya Classificada)', detail: "Terroir-driven village and single vineyard classifications on steep llicorella slate." }
      ]
    },

    flavorProfile: {
      primary: ['Ripe Red Cherry', 'Black Plum', 'Leather / Saddle Leather', 'Vanilla & Coconut (American Oak)', 'Tobacco Leaf'],
      secondary: ['Dried Figs', 'Cacao', 'Dill / Cedar', 'Crushed Slate Minerality', 'Balsamic / Roasted Herbs'],
      palate: "Harmonious, savory, and supple with polished tannins, dried fruit complexity, and a long, warm, leather-and-spice finish."
    },

    foodPairings: [
      { category: 'Spanish Jamón & Tapas', dish: "Jamón Ibérico de Bellota, Manchego Cheese, Patatas Bravas, Croquetas de Jamón", note: "The rich nutty fat of acorn-fed Jamón Ibérico pairs seamlessly with oak-aged Rioja Reserva." },
      { category: 'Roast Lamb & Suckling Pig', dish: "Cordero Asado (Slow-roasted milk-fed lamb), Cochinillo Asado, Grilled Chorizo", note: "Tempranillo's savory acidity and leather notes balance roasted lamb and crispy suckling pig." },
      { category: 'Seafood (Albariño)', dish: "Grilled Octopus with Paprika (Pulpo a la Gallega), Garlic Shrimp (Gambas al Ajillo), Paella", note: "Rías Baixas Albariño's bracing saline minerality and citrus cut through garlic and seafood oils." }
    ],

    subRegions: [
      {
        id: 'rioja-alta-alavesa',
        name: "Rioja (Alta & Alavesa)",
        lat: 42.48,
        lng: -2.75,
        terroir: "Clay-limestone slopes on the foothills of the Sierra de Cantabria.",
        focus: "Tempranillo: Haro, San Vicente de la Sonsierra, Laguardia.",
        description: "The premier classic sub-zones of Rioja. Elegance, red fruit purity, fine acidity, and iconic American/French oak aging." },
      {
        id: 'priorat-catalunya',
        name: "Priorat & Catalunya (Llicorella Slate)",
        lat: 41.18,
        lng: 0.80,
        terroir: "Black and brown slate (Llicorella) on steep mountain terraces.",
        focus: "Garnacha & Cariñena (Old Vines): Gratallops, Porrera, Escaladei.",
        description: "Monumental, concentrated, inky reds packed with crushed slate, black fruits, and wild Mediterranean herbs." },
      {
        id: 'galicia-rias-baixas',
        name: "Galicia (Rías Baixas)",
        lat: 42.45,
        lng: -8.70,
        terroir: "Granitic soils pergolas overlooking the cool Atlantic estuaries (Rías).",
        focus: "Albariño: Val do Salnés, O Rosal, Condado do Tea.",
        description: "Vibrant, saline, crisp white wines glistening with peach, grapefruit, sea spray, and oyster-shell minerality." }
    ]
  },

  'chile-maipo': {
    id: 'chile-maipo',
    name: "Chile (Maipo Valley)",
    country: 'Chile',
    countryCode: 'CL',
    aliases: ['chile', 'maipo valley', 'maipo', 'puente alto', 'pirque', 'alto maipo'],
    tagline: "Andean Mountain Breezes & Aristocratic Cabernet Sauvignon",
    summary: "Resting immediately south of Santiago between the towering Andes Mountains and the Coastal Range, the Maipo Valley is the historic heart of Chilean fine wine. In particular, the gravelly terraces of Alto Maipo (Puente Alto, Pirque) craft world-class Cabernet Sauvignon and Bordeaux blends (Almaviva, Don Melchor, Seña) marked by eucalyptus, mint, cassis, and silky tannins.",
    center: [-33.7000, -70.7000],
    zoom: 10,
    bounds: [[-34.10, -71.20], [-33.30, -70.20]],
    heroGradient: 'linear-gradient(135deg, #1b1626 0%, #2f2240 50%, #d4af37 100%)',
    accentColor: '#523a78',

    terroir: {
      climate: "Mediterranean with warm, dry, luminous summers and cool nighttime breezes descending from the snow-capped Andes.",
      soil: "Porous alluvial gravel, clay, and sand terraces along the Maipo River with extraordinary natural drainage.",
      elevation: "400m to 850m in Alto Maipo against the Andean foothills.",
      riverInfluence: "The Maipo River channels glacier meltwater and cooling thermal currents."
    },

    grapes: [
      { name: 'Cabernet Sauvignon', percentage: 65, type: 'Red', role: "The benchmark: pure cassis, black plum, eucalyptus, mint, tobacco, and polished tannins." },
      { name: 'Carménère', percentage: 20, type: 'Red', role: "Chile's signature variety: lush blueberry, cocoa, roasted red pepper, and silky spice." },
      { name: 'Cabernet Franc & Syrah', percentage: 15, type: 'Red', role: "Adds floral violet lift, graphite, and savory structure to top blends." }
    ],

    structure: {
      body: 8.5,
      acidity: 7.0,
      tannin: 8.0,
      sweetness: 1,
      alcohol: 14.5,
      agingPotential: "8 - 30+ Years"
    },

    classification: {
      system: "DO Denominación de Origen with Viticultural Distinctions",
      description: 'Classified into Andes (Andean slopes), Entre Cordilleras (Central valley), and Costa (Coastal breezes).',
      tiers: [
        { name: 'Alto Maipo (Puente Alto & Pirque)', detail: "The premier terroir for icon wines including Almaviva, Don Melchor, and Chadwicks." },
        { name: 'Central Maipo', detail: "Warmer alluvial plains yielding generous, approachable Carménère and Cabernet." },
        { name: 'Maipo Bajo (Isla de Maipo)', detail: "Coastal-influenced sector with fresher, aromatic profiles." }
      ]
    },

    flavorProfile: {
      primary: ['Cassis (Blackcurrant)', 'Blackberry Jam', 'Eucalyptus / Fresh Mint', 'Dark Cocoa', 'Cedarwood'],
      secondary: ['Graphite / Pencil Shavings', 'Tobacco Leaf', 'Espresso Bean', 'Roasted Bell Pepper', 'Baking Spices'],
      palate: "Generous, full-bodied with refined, polished tannins, intense black fruit, a distinct herbal-minty lift, and a long, savory finish."
    },

    foodPairings: [
      { category: 'Grilled Steaks & Asado', dish: "Chilean Asado (Grilled Skirt Steak / Entraña with Chimichurri), Wood-Fired Ribeye", note: "The herbal freshness and mint notes of Maipo Cabernet pair brilliantly with fresh chimichurri and grilled beef." },
      { category: 'Lamb & Savory Pies', dish: "Pastel de Choclo (Chilean Corn & Beef Casserole), Braised Lamb Shank with Herbs", note: "Sweet-savory beef casseroles and slow-cooked lamb harmonize with Carménère and Cabernet blends." },
      { category: 'Aged Cheeses', dish: "Aged Manchego, Gouda, Roquefort Blue Cheese", note: "Dense, nutty cheeses are elevated by Maipo's concentrated cassis fruit." }
    ],

    subRegions: [
      {
        id: 'alto-maipo-puente-alto',
        name: "Alto Maipo (Puente Alto & Pirque)",
        lat: -33.60,
        lng: -70.58,
        terroir: "Alluvial gravel terraces at the foot of the Andes Mountains.",
        focus: "Cabernet Sauvignon & Bordeaux Blends: Almaviva, Don Melchor, Viña Almaviva.",
        description: "The Grand Cru terroir of South America. Iconic elegance, cassis, mint, and aristocratic structure." }
    ]
  },

  'australia': {
    id: 'australia',
    name: "Australia (Margaret River & Barossa)",
    country: 'Australia',
    countryCode: 'AU',
    aliases: ['australia', 'western australia', 'margaret river', 'new south wales', 'hunter valley', 'barossa', 'barossa valley', 'mclaren vale', 'yarra valley', 'adelaide hills'],
    tagline: "Old-Vine Shiraz, Maritime Cabernet & Ethereal Semillon",
    summary: "Australia spans a vast continent of extraordinary winemaking diversity: from the ancient ungrafted centenarian Shiraz vines of the Barossa Valley and the maritime, Bordeaux-like elegance of Margaret River in Western Australia, to the razor-sharp, age-defying Hunter Valley Semillon in New South Wales.",
    center: [-33.9500, 115.0500],
    zoom: 9,
    bounds: [[-35.00, 114.50], [-31.00, 152.00]],
    heroGradient: 'linear-gradient(135deg, #1b1c2b 0%, #2f304d 50%, #d4af37 100%)',
    accentColor: '#3a4b7c',

    terroir: {
      climate: "Mediterranean in Margaret River and McLaren Vale; warm Continental in Barossa; humid subtropical in Hunter Valley.",
      soil: "Ironstone gravel (Gravelly loam) over clay in Margaret River; red-brown earth and terra rossa in South Australia; alluvial sand in Hunter.",
      elevation: "50m to 500m.",
      riverInfluence: "Surrounded by the Indian and Southern Oceans, delivering consistent cooling maritime breezes (the Fremantle Doctor)."
    },

    grapes: [
      { name: 'Shiraz (Syrah)', percentage: 40, type: 'Red', role: "Rich blackberry, dark plum, cracked black pepper, mocha, and eucalyptus in Barossa and McLaren Vale." },
      { name: 'Cabernet Sauvignon', percentage: 30, type: 'Red', role: "Maritime precision, cassis, dried bay leaf, and fine structural tannins in Margaret River." },
      { name: 'Chardonnay', percentage: 18, type: 'White', role: "World-class Gingin clone Chardonnays in Margaret River brimming with grapefruit, lime, and flint." },
      { name: 'Semillon', percentage: 12, type: 'White', role: "Laser-sharp, low-alcohol (10-11%) white that ages into toasted brioche, beeswax, and lemon curd in Hunter Valley." }
    ],

    structure: {
      body: 8.5,
      acidity: 7.5,
      tannin: 8.0,
      sweetness: 1,
      alcohol: 14.2,
      agingPotential: "5 - 30+ Years"
    },

    classification: {
      system: "Geographical Indications (GI) & Langton's Classification of Australian Wine",
      description: 'Strict geographical boundaries with prestige market rankings (Exceptional, Outstanding, Excellent).',
      tiers: [
        { name: 'Margaret River GI (Western Australia)', detail: "Bordeaux-like climate producing benchmark Cabernet Sauvignon and complex Chardonnays (Leeuwin Estate, Cullen, Moss Wood)." },
        { name: 'Hunter Valley GI (New South Wales)', detail: "Australia's oldest wine region famous for iconic age-worthy Hunter Semillon (Tyrrell's Vat 1) and medium-bodied savory Shiraz." },
        { name: 'Barossa Valley GI (South Australia)', detail: "Home to some of the world's oldest living pre-phylloxera Shiraz vines dating back to 1843." }
      ]
    },

    flavorProfile: {
      primary: ['Blackberry & Plum Jam', 'Crème de Cassis', 'Grapefruit & Lime Zest', 'Eucalyptus / Mint', 'Toasted Hazelnut'],
      secondary: ['Black Pepper', 'Dark Chocolate / Espresso', 'Bay Leaf', 'Graphite', 'Beeswax (Hunter Semillon)'],
      palate: "Opulent fruit depth balanced by coastal freshness, fine-grained tannins, and an explosive, savory finish."
    },

    foodPairings: [
      { category: 'Grilled Beef & Lamb', dish: "Grilled Wagyu Sirloin with Pepper Sauce, Barbecued Lamb Chops with Rosemary", note: "Bold Australian Shiraz and Cabernet match the intensity of char and rich meat." },
      { category: 'Rich Seafood & Lobster', dish: "Butter-Poached Australian Marron / Lobster, Pan-Seared Barramundi, Kingfish Sashimi", note: "Margaret River Chardonnay and Hunter Semillon provide citrus tension and rich textural harmony." },
      { category: 'Cheeses', dish: "Aged Cheddar, Smoked Gouda, Blue Stilton", note: "Strong mature cheeses hold up brilliantly against ripe Australian reds." }
    ],

    subRegions: [
      {
        id: 'margaret-river-wa',
        name: "Margaret River (Western Australia)",
        lat: -33.95,
        lng: 115.07,
        terroir: "Ancient granitic and ironstone gravel ridge between the Indian and Southern Oceans.",
        focus: "Cabernet Sauvignon & Chardonnay: Cullen, Leeuwin Estate, Moss Wood, Vasse Felix.",
        description: "A Mediterranean paradise crafting maritime Cabernet Sauvignon and world-beating Chardonnays." },
      {
        id: 'hunter-valley-nsw',
        name: "Hunter Valley (New South Wales)",
        lat: -32.80,
        lng: 151.30,
        terroir: "Alluvial loam and red volcanic clay north of Sydney.",
        focus: "Semillon & Shiraz: Tyrrell's, Mount Pleasant, Brokenwood.",
        description: "Legendary, low-alcohol Semillon that transforms over 20 years into honeyed, toasty perfection." }
    ]
  },

  'italy-other': {
    id: 'italy-other',
    name: "Italy (Veneto, Lombardia & Sicily)",
    country: 'Italy',
    countryCode: 'IT',
    aliases: ['lombardia', 'valtellina', 'veneto', 'valpolicella', 'amarone', 'sicily', 'sicilia', 'etna', 'campania', 'fiano'],
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

    foodPairings: [
      { category: 'Rich Stews & Braises', dish: "Braised Beef Short Ribs in Amarone, Osso Buco with Saffron Risotto alla Milanese", note: "Amarone's rich dried-fruit concentration and high alcohol match decadent beef and marrow." },
      { category: 'Alpine & Cured Meats', dish: "Bresaola della Valtellina with Arugula & Shaved Bitto Cheese, Pizzoccheri Pasta", note: "Valtellina Nebbiolo pairs naturally with bresaola, buckwheat pizzoccheri, and Alpine cheeses." },
      { category: 'Mediterranean Seafood & Grilled Meats', dish: "Swordfish with Capers and Olives, Grilled Lamb Chops with Oregano", note: "Etna Rosso's volcanic salinity and red berry crunch elevate Mediterranean seafood and lamb." }
    ],

    subRegions: [
      {
        id: 'lombardia-valtellina',
        name: "Valtellina (Lombardia Alpine Nebbiolo)",
        lat: 46.17,
        lng: 9.87,
        terroir: "Perilous south-facing granite terraces overlooking the Adda River in the Alps.",
        focus: "Nebbiolo (Chiavennasca): AR.PE.PE., Grumello, Inferno, Sassella, Sfursat.",
        description: "Alpine Nebbiolo of astonishing purity, dried flowers, alpine herbs, and granite minerality." },
      {
        id: 'veneto-valpolicella',
        name: "Valpolicella & Amarone (Veneto)",
        lat: 45.52,
        lng: 10.92,
        terroir: "Limestone valleys stretching north toward the Lessini Mountains.",
        focus: "Amarone della Valpolicella Classico, Valpolicella Superiore, Ripasso: Quintarelli, Dal Forno.",
        description: "The ancient art of Appassimento. Opulent, dark chocolate, dried fig, and velvet power." },
      {
        id: 'sicily-etna',
        name: "Sicily & Mount Etna (Etna DOC)",
        lat: 37.75,
        lng: 15.00,
        terroir: "High-altitude volcanic ash, black pumice, and ancient lava flows up to 1,000m elevation.",
        focus: "Nerello Mascalese (Etna Rosso) & Carricante (Etna Bianco): Contrade crus.",
        description: "Volcanic Mediterranean elegance with wild strawberries, smoky iron, and vibrant acidity." }
    ]
  },

  'japan-chubu': {
    id: 'japan-chubu',
    name: "Japan (Chūbu / Yamanashi & Nagano)",
    country: 'Japan',
    countryCode: 'JP',
    aliases: ['japan', 'chubu', 'chūbu', 'yamanashi', 'nagano', 'koshu', 'katsunuma'],
    tagline: "Mount Fuji Foothills, Delicate Koshu & Alpine Precision",
    summary: "Surrounded by the majestic Japanese Alps and Mount Fuji in central Japan (Chūbu region), Yamanashi and Nagano are the historical cradle of Japanese viticulture. Yamanashi is world-famous for Koshu, an ancient pale pink-skinned grape producing ethereal, delicate white wines of yuzu citrus, white peach, and subtle salinity that pair impeccably with Japanese gastronomy.",
    center: [35.6667, 138.5667],
    zoom: 10,
    bounds: [[35.20, 137.80], [36.70, 139.20]],
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
        { name: 'GI Nagano (Shinshu)', detail: "Higher altitude Alpine valleys specializing in Chardonnay, Merlot, and Pinot Noir." }
      ]
    },

    flavorProfile: {
      primary: ['Yuzu & Sudachi Citrus', 'White Peach', 'Jasmine Flower', 'Green Apple', 'Wet River Stone'],
      secondary: ['Subtle White Pepper', 'Rice Koji / Umami notes', 'Ginger', 'Grapefruit Pith', 'Fresh Linen'],
      palate: "Whisper-light, delicate, and pure with refreshing citrus acidity, soft textural salinity, and an umami-friendly, clean finish."
    },

    foodPairings: [
      { category: 'Sashimi & Sushi', dish: "Tuna Sashimi, Sea Bream (Tai), Uni (Sea Urchin), Nigiri Sushi", note: "Koshu's subtle profile and low iron content never clash with delicate raw fish, preserving pure ocean flavors." },
      { category: 'Tempura & Yakitori', dish: "Crispy Vegetable & Prawn Tempura, Salted Yakitori (Yakitori Shio), Chawanmushi", note: "Bright citrus acidity cuts through light frying tempura batter with effortless elegance." },
      { category: 'Subtle Seafood Dishes', dish: "Steamed Black Cod with Ginger, Crab with Yuzu Ponzu, Dashi Broth Dishes", note: "The gentle umami structure of Koshu resonates harmoniously with dashi and ponzu." }
    ],

    subRegions: [
      {
        id: 'yamanashi-katsunuma',
        name: "Katsunuma & Yamanashi Basin",
        lat: 35.66,
        lng: 138.73,
        terroir: "Volcanic alluvial foothills beneath Mount Fuji with overhead pergola trellising.",
        focus: "Koshu: Grace Wine, Katsunuma Jozo, Chateau Mercian.",
        description: "The spiritual birthplace of Japanese wine, crafting laser-pure, mineral-kissed Koshu." }
    ]
  }
};

// Helper: Normalize region query to find the best matching region data
export function findWineRegion(regionQuery, countryQuery = '') {
  if (!regionQuery) return null;
  const cleanReg = String(regionQuery).toLowerCase().trim();
  const cleanCountry = String(countryQuery || '').toLowerCase().trim();

  // 1. Direct match by ID
  if (WINE_REGIONS[cleanReg]) {
    return WINE_REGIONS[cleanReg];
  }

  // 2. Match by aliases
  for (const regKey of Object.keys(WINE_REGIONS)) {
    const r = WINE_REGIONS[regKey];
    if (r.name.toLowerCase() === cleanReg || r.id === cleanReg) return r;
    if (r.aliases && r.aliases.some(alias => cleanReg.includes(alias) || alias.includes(cleanReg))) {
      return r;
    }
  }

  // 3. Country / Region combinations
  if (cleanCountry === 'france') {
    if (cleanReg.includes('champagne') || cleanReg.includes('coteaux champenois') || cleanReg.includes('riceys')) return WINE_REGIONS['champagne'];
    if (cleanReg.includes('burgundy') || cleanReg.includes('bourgogne') || cleanReg.includes('chablis') || cleanReg.includes('beaune') || cleanReg.includes('nuits') || cleanReg.includes('macon') || cleanReg.includes('mâcon') || cleanReg.includes('beaujolais')) return WINE_REGIONS['burgundy'];
    if (cleanReg.includes('bordeaux') || cleanReg.includes('medoc') || cleanReg.includes('pauillac') || cleanReg.includes('margaux') || cleanReg.includes('saint-emilion') || cleanReg.includes('pomerol') || cleanReg.includes('sauternes')) return WINE_REGIONS['bordeaux'];
    if (cleanReg.includes('loire') || cleanReg.includes('sancerre') || cleanReg.includes('chinon') || cleanReg.includes('vouvray') || cleanReg.includes('saumur')) return WINE_REGIONS['loire-valley'];
    if (cleanReg.includes('rhone') || cleanReg.includes('rhône') || cleanReg.includes('cornas') || cleanReg.includes('hermitage') || cleanReg.includes('cote-rotie') || cleanReg.includes('chateauneuf') || cleanReg.includes('gigondas')) return WINE_REGIONS['rhone'];
  }

  if (cleanCountry === 'italy' || cleanCountry === 'italia') {
    if (cleanReg.includes('piedmont') || cleanReg.includes('piemonte') || cleanReg.includes('barolo') || cleanReg.includes('barbaresco') || cleanReg.includes('langhe')) return WINE_REGIONS['piedmont'];
    if (cleanReg.includes('tuscany') || cleanReg.includes('toscana') || cleanReg.includes('chianti') || cleanReg.includes('montalcino') || cleanReg.includes('bolgheri')) return WINE_REGIONS['tuscany'];
    if (cleanReg.includes('lombardia') || cleanReg.includes('valtellina') || cleanReg.includes('veneto') || cleanReg.includes('valpolicella') || cleanReg.includes('sicily') || cleanReg.includes('etna') || cleanReg.includes('campania')) return WINE_REGIONS['italy-other'];
  }

  if (cleanCountry === 'usa' || cleanCountry === 'united states') {
    if (cleanReg.includes('california') || cleanReg.includes('napa') || cleanReg.includes('sonoma') || cleanReg.includes('santa cruz') || cleanReg.includes('paso robles') || cleanReg.includes('washington') || cleanReg.includes('columbia valley')) return WINE_REGIONS['california'];
    if (cleanReg.includes('oregon') || cleanReg.includes('willamette')) return WINE_REGIONS['oregon'];
  }

  if (cleanCountry === 'germany') {
    return WINE_REGIONS['germany-mosel'];
  }

  if (cleanCountry === 'spain') {
    return WINE_REGIONS['spain-rioja'];
  }

  if (cleanCountry === 'chile') {
    return WINE_REGIONS['chile-maipo'];
  }

  if (cleanCountry === 'australia') {
    return WINE_REGIONS['australia'];
  }

  if (cleanCountry === 'japan') {
    return WINE_REGIONS['japan-chubu'];
  }

  // 4. Default fallback
  return {
    id: cleanReg.replace(/\s+/g, '-'),
    name: regionQuery,
    country: countryQuery || 'World Wine Region',
    countryCode: 'INT',
    tagline: 'Renowned Wine Terroir of ' + (countryQuery || 'Fine Wine'),
    summary: "A distinguished wine-producing area in ' + (countryQuery || 'the world') + ' celebrated for its unique microclimates, historic vineyards, and terroir-expressive grape varieties.",
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
