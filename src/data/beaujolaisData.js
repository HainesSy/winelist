/**
 * ============================================================================
 * BEAUJOLAIS SOMMELIER DATASET (CMS LEVEL 3 / MASTER SOMMELIER STANDARD)
 * ============================================================================
 * 
 * Standalone first-class French fine wine region:
 *   - 10 Cru Beaujolais Communes (Morgon, Moulin-à-Vent, Fleurie, Brouilly,
 *     Côte de Brouilly, Chénas, Chiroubles, Juliénas, Régnié, Saint-Amour)
 *   - 3 Viticultural Subregions (Crus, Villages, Bas-Beaujolais / Pierres Dorées)
 *   - Geological Stratigraphy (Pink Granite / Gore, Blue Diorite / Côrnes Vertes,
 *     Manganese Veins, Pierres Dorées Limestone)
 *   - Ampelography & Vinification (Gamay Noir à Jus Blanc, Semi-Carbonic Maceration,
 *     Burgundian Destemmed Aging, Thermovinification, Jules Chauvet Natural Movement)
 *   - Benchmark Prestige Cuvées & Single-Vineyard Bottlings
 *   - Iconic Cult Vignerons (The Gang of Four & Master Winemakers)
 *   - Gastronomic Food Pairings & Precision Service Guidelines
 * ============================================================================
 */

export const BEAUJOLAIS_SUBREGIONS = [
  {
    id: 'beaujolais-crus',
    name: "Beaujolais Crus (Northern Granite & Schist)",
    district: "Northern Beaujolais",
    lat: 46.1800,
    lng: 4.7000,
    terroir: "Steep slopes of decomposed pink granite (gore), blue diorite (côrnes vertes), and manganese veins at 250m to 450m elevation. Acidic, nutrient-poor granitic soils naturally limit Gamay's vine vigor, concentrating berry phenolics while maintaining high natural acidity. Producers practice either whole-cluster semi-carbonic maceration or traditional Burgundian destemming with pigéage and maturation in neutral foudres.",
    focus: "The 10 Cru communal appellations: Morgon, Moulin-à-Vent, Fleurie, Brouilly, Côte de Brouilly, Chénas, Chiroubles, Juliénas, Régnié, Saint-Amour.",
    geology: "Weathered Hercynian pink granite (gore and arène), blue diorite (côrnes vertes), and metamorphic schists.",
    dominantGrapes: "Gamay Noir à Jus Blanc (100% for Cru red wines)",
    microTerroirs: [
      { name: "Mont Brouilly Volcano", focus: "Pre-Cambrian and Paleozoic blue metadiorite basalt slopes (Côte de Brouilly)" },
      { name: "Morgon Schist Ridge", focus: "Decayed blue schist and iron-rich manganiferous saprolite (Côte du Py, Javernières)" },
      { name: "Moulin-à-Vent Manganese Plateau", focus: "Friable pink granite crisscrossed by toxic manganese quartz veins (Champ de Cour, Les Vérillats)" },
      { name: "Fleurie Granite Amphitheater", focus: "Ultra-fine, friable acidic pink granite sand (La Madone, Grille-Midi, Poncié)" }
    ],
    description: "The northern district comprises ten communal Crus spanning from Saint-Amour south to Brouilly along the western Saône Valley hills. In the 1970s, research chemist and winemaker Jules Chauvet conducted low-intervention enological trials in La Chapelle-de-Guinchay and Villié-Morgon. His findings inspired Marcel Lapierre, Jean Foillard, Guy Breton, and Jean-Paul Thévenet (the 'Gang of Four') to reject chemical fertilizers, synthetic pesticides, and sulfur additions. Preserving centenarian gobelet-trained bush vines and fermenting whole clusters with ambient yeasts, they demonstrated that Cru Gamay on granitic soils develops complex sous-bois, truffle, and savory spice notes over 10 to 25 years of cellaring."
  },
  {
    id: 'beaujolais-villages',
    name: "Beaujolais-Villages (Central Rolling Hills)",
    district: "Central Beaujolais",
    lat: 46.1200,
    lng: 4.6200,
    terroir: "Rolling hillside vineyards situated on decomposed granite sandy loam, schist, and alluvial clay gravels. Natural slope drainage and moderate soil fertility yield balanced cluster weights with vivid acidity, accentuating red cherry, redcurrant, and crushed stone notes. Vinification typically entails 8 to 12 days of whole-cluster semi-carbonic maceration in cement or stainless steel vats.",
    focus: "Higher-altitude Gamay reds and structured Beaujolais-Villages Blanc (Chardonnay) produced on hillside slopes.",
    geology: "Transitional granite-clay formations, siliceous sands, and river gravel deposits.",
    dominantGrapes: "Gamay Noir (~95%), Chardonnay (~5%)",
    microTerroirs: [
      { name: "Vaux-en-Beaujolais & Saint-Étienne-des-Oullières", focus: "High granite hillside amphitheaters producing taut, peppery Gamay" },
      { name: "Lantignié", focus: "Granite soils directly west of Régnié, seeking official Cru status" },
      { name: "Beaujeu Hillsides", focus: "The historic capital of the Beaujolais province on steep granitic slopes" }
    ],
    description: "The Beaujolais-Villages appellation comprises 38 designated communes surrounding the historic capital of Beaujeu, positioned between the northern Crus and the southern plains. Historically, these mid-slope vineyards supplied the bistros and traditional bouchons of Lyon with fresh Gamay via 46-centiliter 'pots lyonnais'. Communes such as Lantignié have formally petitioned for recognition as independent Crus based on detailed geological surveys of their granitic climats. The wines feature red raspberry, black pepper, violet, and lively acidity."
  },
  {
    id: 'bas-beaujolais',
    name: "Bas-Beaujolais / Pierres Dorées (Southern Limestone)",
    district: "Southern Beaujolais",
    lat: 45.9200,
    lng: 4.6800,
    terroir: "Undulating southern terrain underlain by Middle Jurassic Bajocian clay-limestone formations known as the Pierres Dorées. These alkaline, higher-fertility soils produce larger berries, moderate natural acidity, and supple tannins, resulting in approachable Gamay. Winemaking relies primarily on short semi-carbonic maceration (4 to 6 days) followed by temperature-controlled stainless steel aging.",
    focus: "Supple, fruit-forward Beaujolais Rouge, vibrant Beaujolais Rosé, and mineral Beaujolais Blanc (Chardonnay).",
    geology: "Bajocian sedimentary limestone, calcareous clay marls, and iron-tinted golden stone beds.",
    dominantGrapes: "Gamay Noir (~85%), Chardonnay (~15%)",
    microTerroirs: [
      { name: "Châtillon d'Azergues & Theize", focus: "Clay-limestone hills producing expressive, chalky Chardonnay and floral Gamay" },
      { name: "Bagnols & Jarnioux", focus: "Golden stone terroirs yielding juicy, strawberry-driven early drinking reds" }
    ],
    description: "Bas-Beaujolais spans the undulating terrain between Villefranche-sur-Saône and northern Lyon, known as the Pierres Dorées after the golden ochre limestone quarried in the region since the 15th century. The district produces regional Beaujolais AOC and Beaujolais Supérieur red wines, vibrant direct-press rosés, and crisp, mineral Chardonnay bottled as Beaujolais Blanc."
  }
];

export const BEAUJOLAIS_GRAND_CRUS = [
  {
    id: 'morgon',
    name: "Morgon",
    village: "Villié-Morgon",
    subregion: "Beaujolais Crus",
    district: "Northern Beaujolais",
    subregionId: 'beaujolais-crus',
    districtId: 'beaujolais-crus',
    classification: 'Cru Beaujolais (AOC)',
    badge: 'Cru Beaujolais',
    lat: 46.1600,
    lng: 4.6700,
    areaHa: 1110,
    aocDecreeYear: 1936,
    elevationRange: "250m – 450m",
    aspect: "South / South-East slopes facing the Saône Valley",
    dominantGrape: "Gamay Noir à Jus Blanc (100%)",
    wineType: "Red",
    baseYield: "56 hl/ha",
    minPotentialAbv: "10.5% vol.",
    soil: "Decomposed schist ('roche pourrie'), friable blue volcanic diorite, and manganiferous clay rich in iron oxides",
    character: "Dense and structured, characterized by dark cherry, damson plum, kirsch, and crushed schist. Renowned for its capacity to 'morgonner'—developing tertiary aromas of forest floor, black truffle, and cured spice after 5 to 15+ years of cellaring.",
    benchmarkProducers: ["Jean Foillard", "Marcel Lapierre", "Guy Breton", "Jean-Paul Thévenet", "Daniel Bouland", "Domaine Mee Godard"],
    famousProducers: ["Jean Foillard", "Marcel Lapierre", "Guy Breton", "Jean-Paul Thévenet", "Daniel Bouland", "Domaine Mee Godard"],
    iconicVineyards: ["Côte du Py (famous volcanic cone)", "Corcelette", "Javernières", "Grand Cras", "Les Charmes", "Douby"]
  },
  {
    id: 'moulin-a-vent',
    name: "Moulin-à-Vent",
    village: "Romanèche-Thorins & Chénas",
    subregion: "Beaujolais Crus",
    district: "Northern Beaujolais",
    subregionId: 'beaujolais-crus',
    districtId: 'beaujolais-crus',
    classification: 'Cru Beaujolais (AOC)',
    badge: 'Cru Beaujolais',
    lat: 46.2100,
    lng: 4.7400,
    areaHa: 655,
    aocDecreeYear: 1936,
    elevationRange: "220m – 390m",
    aspect: "East / South-East wind-swept rolling hill surrounding the historic 15th-century windmill",
    dominantGrape: "Gamay Noir à Jus Blanc (100%)",
    wineType: "Red",
    baseYield: "56 hl/ha",
    minPotentialAbv: "10.5% vol.",
    soil: "Friable pink granulite and granite (gore) penetrated by subterranean quartz veins rich in manganese that naturally limits vine vigor",
    character: "The most structured and tannic of the 10 Crus. Exhibits blackcurrant, dried rose petal, violet, and graphite, supported by firm tannins derived from manganese-veined granitic soils. Typically requires 3 to 5 years of cellaring to open and can age for 15 to 30+ years.",
    benchmarkProducers: ["Château des Jacques (Louis Jadot)", "Domaine Thibault Liger-Belair", "Éric Janin (Domaine Paul Janin & Fils)", "Domaine du Moulin-à-Vent (Jean-Jacques Parinet)", "Yvon Métras"],
    famousProducers: ["Château des Jacques (Louis Jadot)", "Domaine Thibault Liger-Belair", "Éric Janin (Domaine Paul Janin & Fils)", "Domaine du Moulin-à-Vent (Jean-Jacques Parinet)", "Yvon Métras"],
    iconicVineyards: ["Champ de Cour", "Les Vérillats", "La Roche", "Le Carquelin", "Les Thorins", "Chassignol"]
  },
  {
    id: 'fleurie',
    name: "Fleurie",
    village: "Fleurie",
    subregion: "Beaujolais Crus",
    district: "Northern Beaujolais",
    subregionId: 'beaujolais-crus',
    districtId: 'beaujolais-crus',
    classification: 'Cru Beaujolais (AOC)',
    badge: 'Cru Beaujolais',
    lat: 46.1900,
    lng: 4.7000,
    areaHa: 840,
    aocDecreeYear: 1936,
    elevationRange: "220m – 430m",
    aspect: "South / South-East amphitheater crowned by the Chapel of La Madone",
    dominantGrape: "Gamay Noir à Jus Blanc (100%)",
    wineType: "Red",
    baseYield: "56 hl/ha",
    minPotentialAbv: "10.5% vol.",
    soil: "Ultra-fine, acidic, friable pink granite sand (arène granitique) with clay intrusions in the lower sectors",
    character: "Distinguished by floral aromatics of violet, iris, and fresh rose petal, complemented by red raspberry and wild strawberry. The pink granite sands (arène) yield fine-grained tannins and bright acidity, producing an elegant, medium-bodied palate.",
    benchmarkProducers: ["Clos de la Roilette (Alain Coudert)", "Domaine de la Grand'Cour (Jean-Louis Dutraive)", "Yvon Métras", "Domaine Chignard", "Julien Sunier"],
    famousProducers: ["Clos de la Roilette (Alain Coudert)", "Domaine de la Grand'Cour (Jean-Louis Dutraive)", "Yvon Métras", "Domaine Chignard", "Julien Sunier"],
    iconicVineyards: ["La Madone", "Grille-Midi", "Poncié", "La Roilette", "Les Moriers", "Champagne"]
  },
  {
    id: 'brouilly',
    name: "Brouilly",
    village: "Cercié, Saint-Lager, Odenas, Charentay, Quincié, Saint-Étienne-la-Varenne",
    subregion: "Beaujolais Crus",
    district: "Northern Beaujolais",
    subregionId: 'beaujolais-crus',
    districtId: 'beaujolais-crus',
    classification: 'Cru Beaujolais (AOC)',
    badge: 'Cru Beaujolais',
    lat: 46.1200,
    lng: 4.6900,
    areaHa: 1260,
    aocDecreeYear: 1936,
    elevationRange: "180m – 350m",
    aspect: "Encircling the base of Mont Brouilly with diverse exposures",
    dominantGrape: "Gamay Noir à Jus Blanc (100%)",
    wineType: "Red",
    baseYield: "56 hl/ha",
    minPotentialAbv: "10.5% vol.",
    soil: "Heterogeneous mosaic of decomposed pink granite, blue diorite colluvium, clay-limestone marls, and alluvial river wash",
    character: "The largest Cru by surface area (1,260 ha), encircling the base of Mont Brouilly. Offers an approachable red-fruit profile dominated by ripe raspberry, red cherry, and redcurrant with soft tannins and moderate acidity, accessible in its youth.",
    benchmarkProducers: ["Château Thivin (Geoffray)", "Domaine Laurent Martray", "Georges Descombes", "Jean-Claude Lapalu", "Domaine de la Voûte des Crozes (Nicole Chanrion)"],
    famousProducers: ["Château Thivin (Geoffray)", "Domaine Laurent Martray", "Georges Descombes", "Jean-Claude Lapalu", "Domaine de la Voûte des Crozes (Nicole Chanrion)"],
    iconicVineyards: ["Pisse-Vieille", "La Chaize", "Saburin", "Briante", "Combiaty"]
  },
  {
    id: 'cote-de-brouilly',
    name: "Côte de Brouilly",
    village: "Saint-Lager & Odenas",
    subregion: "Beaujolais Crus",
    district: "Northern Beaujolais",
    subregionId: 'beaujolais-crus',
    districtId: 'beaujolais-crus',
    classification: 'Cru Beaujolais (AOC)',
    badge: 'Cru Beaujolais',
    lat: 46.1000,
    lng: 4.6500,
    areaHa: 310,
    aocDecreeYear: 1936,
    elevationRange: "250m – 484m",
    aspect: "Steep 360-degree hillside slopes of the extinct Mont Brouilly volcanic cone",
    dominantGrape: "Gamay Noir à Jus Blanc (100%)",
    wineType: "Red",
    baseYield: "56 hl/ha",
    minPotentialAbv: "10.5% vol.",
    soil: "Ancient Paleozoic blue metadiorite volcanic basalt known locally as 'côrnes vertes' (green horns) and schist",
    character: "Sited on the steep slopes of the extinct Mont Brouilly volcanic cone. The hard blue volcanic diorite (côrnes vertes) imparts dark berry fruit, savory thyme, gunflint reduction, firm structural tannins, and taut mineral acidity.",
    benchmarkProducers: ["Château Thivin (Cuvée Zaccharie / La Chapelle)", "Nicole & Romain Chanrion", "Domaine Cotton", "Guy Breton", "Alex Foillard"],
    famousProducers: ["Château Thivin (Cuvée Zaccharie / La Chapelle)", "Nicole & Romain Chanrion", "Domaine Cotton", "Guy Breton", "Alex Foillard"],
    iconicVineyards: ["Zaccharie", "L'Héronde", "Le Pavillon", "Brulhié", "La Chapelle"]
  },
  {
    id: 'chenas',
    name: "Chénas",
    village: "Chénas & La Chapelle-de-Guinchay",
    subregion: "Beaujolais Crus",
    district: "Northern Beaujolais",
    subregionId: 'beaujolais-crus',
    districtId: 'beaujolais-crus',
    classification: 'Cru Beaujolais (AOC)',
    badge: 'Cru Beaujolais',
    lat: 46.2200,
    lng: 4.7200,
    areaHa: 245,
    aocDecreeYear: 1936,
    elevationRange: "220m – 380m",
    aspect: "East / South-East slopes historically shaded by ancient Roman oak forests (chênes)",
    dominantGrape: "Gamay Noir à Jus Blanc (100%)",
    wineType: "Red",
    baseYield: "56 hl/ha",
    minPotentialAbv: "10.5% vol.",
    soil: "Quaternary alluvial gravel terraces over deeply weathered pink granite and quartz-rich schist",
    character: "The smallest Cru by surface area (245 ha), historically situated among ancient oak woodlands. Delivers aromas of peony, cracked black pepper, dark plum, and underbrush. Balances the floral aromatics of Fleurie with the structural spine of neighboring Moulin-à-Vent.",
    benchmarkProducers: ["Domaine Thillardon (Chassignol)", "Domaine Piron", "Pascal Aufranc", "Domaine des Pierres Dorées", "Paul-Henri Thillardon"],
    famousProducers: ["Domaine Thillardon (Chassignol)", "Domaine Piron", "Pascal Aufranc", "Domaine des Pierres Dorées", "Paul-Henri Thillardon"],
    iconicVineyards: ["Chassignol (pre-phylloxera steep slope)", "En Rémont", "Les Blémonts", "Les Journets"]
  },
  {
    id: 'chiroubles',
    name: "Chiroubles",
    village: "Chiroubles",
    subregion: "Beaujolais Crus",
    district: "Northern Beaujolais",
    subregionId: 'beaujolais-crus',
    districtId: 'beaujolais-crus',
    classification: 'Cru Beaujolais (AOC)',
    badge: 'Cru Beaujolais',
    lat: 46.1800,
    lng: 4.6600,
    areaHa: 320,
    aocDecreeYear: 1936,
    elevationRange: "380m – 530m",
    aspect: "Highest elevation cru; steep amphitheater slopes facing east and south",
    dominantGrape: "Gamay Noir à Jus Blanc (100%)",
    wineType: "Red",
    baseYield: "56 hl/ha",
    minPotentialAbv: "10.5% vol.",
    soil: "Homogeneous, friable, pale pink granite sand and quartz arène with virtually no clay",
    character: "The highest-elevation Cru (380m to 530m), situated on steep, pure granite sands with minimal clay. Marked by brisk acidity, delicate floral aromas, wild redcurrant, and light tannins, creating a light-bodied, refreshing profile.",
    benchmarkProducers: ["Daniel Bouland", "Domaine Cheysson", "Guy Breton", "Karim Vionnet", "Domaine de la Grosse Pierre"],
    famousProducers: ["Daniel Bouland", "Domaine Cheysson", "Guy Breton", "Karim Vionnet", "Domaine de la Grosse Pierre"],
    iconicVineyards: ["La Scandelle", "Javernand", "Bel-Air", "Fontenelle", "Les Côtes"]
  },
  {
    id: 'julienas',
    name: "Juliénas",
    village: "Juliénas, Jullié, Émeringes, Pruzilly",
    subregion: "Beaujolais Crus",
    district: "Northern Beaujolais",
    subregionId: 'beaujolais-crus',
    districtId: 'beaujolais-crus',
    classification: 'Cru Beaujolais (AOC)',
    badge: 'Cru Beaujolais',
    lat: 46.2400,
    lng: 4.7100,
    areaHa: 580,
    aocDecreeYear: 1938,
    elevationRange: "230m – 430m",
    aspect: "South / South-West facing hillsides along the Monts du Beaujolais foothills",
    dominantGrape: "Gamay Noir à Jus Blanc (100%)",
    wineType: "Red",
    baseYield: "56 hl/ha",
    minPotentialAbv: "10.5% vol.",
    soil: "Complex geological mosaic: Blue schist and metadiorite, ancient sandstones, volcanic clay, and pink granite",
    character: "Cultivated since Roman antiquity and named after Julius Caesar. Characterized by dark cherry, blackberry, black pepper, cinnamon, and earthy undertones. Sits on a complex bedrock of diorite, sandstone, and granite, giving firm tannins suited to mid-term cellaring.",
    benchmarkProducers: ["Domaine du Clos du Fief (Michel & Sylvain Tête)", "Pascal Granger", "Domaine de la Bottière", "Vincent Audras (Château du Bois de la Salle)"],
    famousProducers: ["Domaine du Clos du Fief (Michel & Sylvain Tête)", "Pascal Granger", "Domaine de la Bottière", "Vincent Audras (Château du Bois de la Salle)"],
    iconicVineyards: ["Les Capitans", "Beauvernay", "En Bessay", "Les Chers", "La Bottière"]
  },
  {
    id: 'regnie',
    name: "Régnié",
    village: "Régnié-Durette",
    subregion: "Beaujolais Crus",
    district: "Northern Beaujolais",
    subregionId: 'beaujolais-crus',
    districtId: 'beaujolais-crus',
    classification: 'Cru Beaujolais (AOC)',
    badge: 'Cru Beaujolais',
    lat: 46.1400,
    lng: 4.6400,
    areaHa: 395,
    aocDecreeYear: 1988,
    elevationRange: "280m – 450m",
    aspect: "South / South-East rolling plateau framed by two distinct church spires",
    dominantGrape: "Gamay Noir à Jus Blanc (100%)",
    wineType: "Red",
    baseYield: "56 hl/ha",
    minPotentialAbv: "10.5% vol.",
    soil: "Weathered pink granite with coarse quartz sand and rounded river pebbles; warm and fast-draining",
    character: "Elevated to Cru status in 1988 as the 10th Cru. Sited on warm, fast-draining pink granite slopes, it ripens early and exhibits red blackberry, raspberry, pink peppercorn, and lavender, framed by supple tannins.",
    benchmarkProducers: ["Antoine Sunier", "Guy Breton", "Charly Thévenet", "Julien Sunier", "Domaine de Bel-Air"],
    famousProducers: ["Antoine Sunier", "Guy Breton", "Charly Thévenet", "Julien Sunier", "Domaine de Bel-Air"],
    iconicVineyards: ["Haute-Ronze", "Les Braves", "Vallières", "La Ronze", "Les Chastys"]
  },
  {
    id: 'saint-amour',
    name: "Saint-Amour",
    village: "Saint-Amour-Bellevue",
    subregion: "Beaujolais Crus",
    district: "Northern Beaujolais",
    subregionId: 'beaujolais-crus',
    districtId: 'beaujolais-crus',
    classification: 'Cru Beaujolais (AOC)',
    badge: 'Cru Beaujolais',
    lat: 46.2700,
    lng: 4.7400,
    areaHa: 320,
    aocDecreeYear: 1946,
    elevationRange: "240m – 420m",
    aspect: "East / South-East slopes directly bordering the limestone slopes of the Mâconnais",
    dominantGrape: "Gamay Noir à Jus Blanc (100%)",
    wineType: "Red",
    baseYield: "56 hl/ha",
    minPotentialAbv: "10.5% vol.",
    soil: "Geological transition zone between clay-siliceous limestone, alluvial gravels, and pink granite",
    character: "The northernmost Cru, bordering the limestone soils of the Mâconnais. Vignerons produce two distinct styles: an early-drinking expression via short semi-carbonic maceration with notes of peach blossom and red cherry, and a structured vin de garde macerated longer with spiced plum and peppery grip.",
    benchmarkProducers: ["Domaine des Billards", "Domaine de la Pirolette", "Georges Le Roy", "Domaine Spay"],
    famousProducers: ["Domaine des Billards", "Domaine de la Pirolette", "Georges Le Roy", "Domaine Spay"],
    iconicVineyards: ["Côte de Besset", "Le Châtelet", "Clos de la Pirolette", "Les Champs Grillés", "A la Folie"]
  }
];

export const BEAUJOLAIS_TECHNICAL_REGULATIONS = {
  geology: {
    title: "Hercynian Pink Granite, Blue Metadiorite & Bajocian Limestone Stratigraphy",
    summary: "Beaujolais is geologically delineated by a major fault line: the northern Crus and villages rest on crystalline Hercynian pink granite, metamorphic schists, and Paleozoic blue metadiorite, whereas southern Bas-Beaujolais is situated on Middle Jurassic Bajocian clay-limestone (Pierres Dorées).",
    formations: [
      {
        id: 'gore-pink-granite',
        name: "Pink Granite (Gore / Arène Granitique)",
        frenchName: "Granite Rose et Arène Granitique (Gore)",
        period: "Late Carboniferous (Hercynian Orogeny, ~330 Ma)",
        fossil: "None (Igneous plutonic crystalline basement)",
        characteristics: "Acidic, nutrient-poor, quartz-rich coarse sand and grus resulting from in-situ chemical weathering of potassium feldspar and biotite mica.",
        porosity: "Freely draining upper horizons forcing vine taproots deep into subterranean fissures for moisture.",
        keyAreas: ["Fleurie mid-slopes (La Madone)", "Moulin-à-Vent (Champ de Cour)", "Chiroubles amphitheaters", "Régnié plateau"],
        wineImpact: "Imparts floral aromatics (violet, iris), red fruit, refreshing malic acidity, and mineral tension."
      },
      {
        id: 'cornes-vertes-diorite',
        name: "Blue Volcanic Diorite (Côrnes Vertes)",
        frenchName: "Métadiorite et Roches Bleues (Côrnes Vertes)",
        period: "Paleozoic / Upper Devonian (~370-400 Ma)",
        fossil: "None (Sub-volcanic intrusive basic igneous rock)",
        characteristics: "Dense, dark greenish-blue metadiorite and microdiorite with high plagioclase feldspar and hornblende content.",
        porosity: "Low porosity, shallow stony lithic soils on steep slopes.",
        keyAreas: ["Mont Brouilly cone (Côte de Brouilly)", "Morgon Côte du Py eastern flank", "Juliénas (Beauvernay)"],
        wineImpact: "Yields darker fruit, gunflint, wild herbs, and firm structural tannins."
      },
      {
        id: 'manganese-veins',
        name: "Manganiferous Quartz & Saprolite Veins",
        frenchName: "Filons Hydrothermaux Manganésifères",
        period: "Late Carboniferous to Permian (~300 Ma)",
        fossil: "None (Hydrothermal mineral veins)",
        characteristics: "Subterranean quartz veins heavily enriched with pyrolusite and psilomelane manganese oxides.",
        porosity: "Dense mineral-rich fracture zones.",
        keyAreas: ["Moulin-à-Vent central plateau (Les Vérillats, Le Carquelin)", "Morgon Grand Cras"],
        wineImpact: "Manganese limits vine vegetative vigor and reduces berry size, naturally concentrating anthocyanins and tannins for extended aging potential."
      },
      {
        id: 'pierres-dorees-limestone',
        name: "Middle Jurassic Golden Limestone (Pierres Dorées)",
        frenchName: "Calcaire à Entroques des Pierres Dorées",
        period: "Middle Jurassic (Bajocian stage, ~170 Ma)",
        fossil: "Entrochites (fossilized crinoid stems) and marine mollusks",
        characteristics: "Warm, ochre-tinted limestone rich in iron oxides, intercalated with calcareous marls.",
        porosity: "Moderate porosity, fertile clay-limestone with high calcium carbonate.",
        keyAreas: ["Southern Bas-Beaujolais (Theizé, Bagnols, Jarnioux, Châtillon d'Azergues)"],
        wineImpact: "Produces approachable Gamay with strawberry and red fruit notes, alongside mineral, citrus-driven Chardonnay (Beaujolais Blanc)."
      },
      {
        id: 'roche-pourrie-schist',
        name: "Rotten Rock (Roche Pourrie / Weathered Schist)",
        frenchName: "Roche Pourrie de Schistes et Tufs",
        period: "Early Paleozoic (Cambro-Ordovician, ~450 Ma)",
        fossil: "None (Metamorphic pelitic schists)",
        characteristics: "Friable, weathered greenish-grey schist and volcanic tuff, rich in iron hydroxide.",
        porosity: "High fissuring allowing roots to penetrate 3–5 meters into bedrock fractures.",
        keyAreas: ["Morgon Côte du Py peak", "Javernières bench"],
        wineImpact: "Imparts mid-palate density, savory notes, and enables the 'morgonner' evolution toward forest floor, truffle, and kirsch."
      }
    ]
  },

  grapes: {
    major: [
      {
        id: 'gamay-noir',
        name: "Gamay Noir à Jus Blanc",
        frenchSynonym: "Gamay Beaujolais / Petit Bourguignon",
        percentage: 98.0,
        type: "Red",
        epicenter: "All 10 Crus, Beaujolais-Villages, and Beaujolais AOC",
        profile: "Thin-skinned variety derived from Pinot Noir × Gouais Blanc with high natural malic acidity, moderate tannins, and aromatics of wild strawberry, red cherry, violet, and crushed granite. On granitic and schistous soils, it achieves structural depth and develops secondary sous-bois and truffle notes with extended cellaring.",
        role: "Signature variety of Beaujolais, accounting for the vast majority of regional vineyard area.",
        benchmarkCuvees: ["Jean Foillard Morgon Côte du Py", "Marcel Lapierre Cuvée MMX", "Château Thivin Cuvée Zaccharie"]
      },
      {
        id: 'chardonnay',
        name: "Chardonnay",
        frenchSynonym: "Beaunois / Aubaine",
        percentage: 1.5,
        type: "White",
        epicenter: "Southern Pierres Dorées and northern border with Mâconnais",
        profile: "Dry white wines characterized by green apple, white peach, acacia, and limestone-driven acidity.",
        role: "Sole variety authorized for Beaujolais Blanc and Beaujolais-Villages Blanc. Also permitted as an accessory blending grape (up to 15%) in red vinification.",
        benchmarkCuvees: ["Domaine des Terres Dorées (Jean-Paul Brun) Beaujolais Blanc", "Château Thivin Beaujolais-Villages Blanc Clos de Rochebonne"]
      }
    ],
    heritage: [
      {
        id: 'aligote',
        name: "Aligoté",
        percentage: 0.3,
        type: "White",
        role: "Ancient Burgundian grape authorized up to 15% in field co-fermentations, bringing natural acidity and citrus character."
      },
      {
        id: 'melon-de-bourgogne',
        name: "Melon de Bourgogne",
        percentage: 0.2,
        type: "White",
        role: "Historic white variety originating in Burgundy before migrating to Muscadet; permitted in historical field plantings."
      }
    ]
  },

  classification: {
    system: "Beaujolais Appellation d'Origine Contrôlée (AOC) 3-Tier Hierarchy",
    description: "Beaujolais is organized into a three-tier quality hierarchy governed by INAO regulations: 10 communal Cru AOCs in the northern granitic hills, 38 hillside communes under Beaujolais-Villages AOC, and regional Beaujolais / Beaujolais Supérieur AOC centered in the southern clay-limestone plains.",
    pyramid: [
      {
        tier: "Cru Beaujolais (10 Communal AOCs)",
        sharePct: "26.0%",
        count: "10 Appellations",
        yieldLimits: "Max 56 hl/ha",
        minAbv: "10.5% vol.",
        aging: "Released in spring following harvest; top vignerons age 12–24 months in foudres/pièces",
        criteria: "Strictly estate-grown within the 10 delimited communal boundaries on granite, schist, and volcanic diorite soils.",
        description: "The apex tier comprising 10 communal Crus: Morgon, Moulin-à-Vent, Fleurie, Brouilly, Côte de Brouilly, Chénas, Chiroubles, Juliénas, Régnié, and Saint-Amour."
      },
      {
        tier: "Beaujolais-Villages AOC (38 Communes)",
        sharePct: "24.0%",
        count: "38 Communes",
        yieldLimits: "Max 58 hl/ha",
        minAbv: "10.0% vol.",
        aging: "Immediate for Nouveau; 6–12 months for standard cuvées",
        criteria: "Sourced exclusively from 38 hillside communes in northern and central Beaujolais on transitional granite/clay slopes.",
        description: "Mid-slope vineyards offering greater concentration, floral spice, and structure than the regional AOC."
      },
      {
        tier: "Beaujolais AOC & Beaujolais Supérieur AOC",
        sharePct: "50.0%",
        count: "96 Communes",
        yieldLimits: "Max 60 hl/ha (AOC), 58 hl/ha (Supérieur)",
        minAbv: "10.0% vol. (AOC), 10.5% vol. (Supérieur)",
        aging: "Nouveau released on the third Thursday of November; standard cuvées aged in tank",
        criteria: "Delimited across all 96 communes, centered primarily in the southern Pierres Dorées / Bas-Beaujolais clay-limestone rolling hills.",
        description: "Early-drinking, fruit-forward red, white, and rosé wines, as well as statutory Beaujolais Nouveau."
      }
    ],
    tiers: [
      { name: "Cru Beaujolais (10 AOCs)", detail: "Morgon, Moulin-à-Vent, Fleurie, Brouilly, Côte de Brouilly, Chénas, Chiroubles, Juliénas, Régnié, Saint-Amour" },
      { name: "Beaujolais-Villages AOC", detail: "38 hillside communes in the northern and central sectors on granite/schist" },
      { name: "Beaujolais AOC / Supérieur", detail: "Regional appellation across 96 communes, centered in southern Pierres Dorées" }
    ]
  },

  businessModels: {
    title: "Viticultural Business Models & Production Landscape",
    models: [
      {
        type: "Independent Domaines & Estate Vignerons",
        frenchTerm: "Vignerons Indépendants / Domaines",
        description: "Growers cultivating estate-owned vineyards, vinifying and bottling exclusively on the property. Championed by the low-intervention movement, these vignerons prioritize parcel-specific climats, old bush vines, and terroir distinction.",
        examples: ["Domaine Jean Foillard", "Domaine Marcel Lapierre", "Château Thivin", "Domaine Yvon Métras", "Domaine Thillardon"]
      },
      {
        type: "Historic Négociant Houses",
        frenchTerm: "Maisons de Négoce / Éleveurs",
        description: "Merchant houses that purchase grapes, must, or finished bulk wine across multiple communes, blending, maturing, and distributing wines globally. Many top négociants also maintain substantial flagship Cru domaine holdings.",
        examples: ["Maison Georges Duboeuf", "Château des Jacques (Louis Jadot)", "Maison Trénel", "Albert Bichot", "Maison Louis Latour"]
      },
      {
        type: "Cooperative Wineries",
        frenchTerm: "Caves Coopératives",
        description: "Grower-owned cooperative facilities established in the early-to-mid 20th century to provide shared vinification, technical infrastructure, and commercial distribution for smallholders.",
        examples: ["Cave du Château de Chénas", "Vignerons des Pierres Dorées", "Cave de Bel-Air"]
      }
    ]
  },

  vinification: {
    semiCarbonicMaceration: {
      name: "Traditional Whole-Cluster Semi-Carbonic Maceration",
      frenchName: "Macération Semi-Carbonique Traditionnelle",
      method: "Intact, whole grape clusters loaded into sealed vats under a blanket of carbon dioxide gas. The bottom clusters crush under weight, starting ambient yeast fermentation that saturates the tank with CO2. Within the upper unruptured grape berries, intracellular anaerobic enzymatic fermentation occurs, consuming malic acid and generating ethanol (1.5–2.5%) while synthesizing distinct fruity esters (kirsch, fresh raspberry, bubblegum, banana, cinnamon). After 5–14 days, the tank is drained (jus de goutte) and gently pressed (jus de presse), followed by standard yeast fermentation.",
      macerationTime: "4–6 days for Beaujolais Nouveau; 8–10 days for Beaujolais-Villages; 12–20 days for Cru Beaujolais vins de garde."
    },
    burgundianMaceration: {
      name: "Traditional Burgundian Destemmed Vinification",
      frenchName: "Vinification Traditionnelle Bourguignonne",
      method: "Hand-harvested fruit is 100% destemmed and gently crushed into open-top wooden or concrete vats. Fermentation is carried out with manual punch-downs (pigeage) and pump-overs (remontage), followed by 18–25 days of extended post-fermentation maceration. The wine is pressed and matured for 10–18 months in French oak barrels (pièces of 228L and 500L demi-muids), yielding deeply structured, age-worthy wines with firm noble tannins.",
      pioneers: ["Château des Jacques (Louis Jadot)", "Domaine Mee Godard", "Thibault Liger-Belair"]
    },
    thermovinification: {
      name: "Industrial Thermovinification (Flash-Détente)",
      frenchName: "Thermovinification / Flash-Détente",
      method: "Rapid heating of crushed grape must to 60–80°C for 30–60 minutes, followed by vacuum cooling or immediate pressing. Rapidly dissolves anthocyanins from grape skins into the juice without extracting astringent tannins. Extensively used in mass-market commercial Beaujolais Nouveau to produce fruity, low-tannin wines; universally rejected by high-quality artisanal vignerons.",
      status: "Commercial practice, not utilized in fine Cru Beaujolais."
    },
    naturalWineMovement: {
      name: "The Jules Chauvet Natural Wine Revolution",
      frenchName: "Le Mouvement des Vins Naturels (Jules Chauvet & Le Gang des Quatre)",
      method: "Pioneered in the 1970s and 1980s by chemist-winemaker Jules Chauvet in La Chapelle-de-Guinchay, alongside Marcel Lapierre, Jean Foillard, Guy Breton, and Jean-Paul Thévenet. Rejection of synthetic pesticides, herbicides, and chemical fertilizers; reliance on centenarian bush vines, wild ambient yeasts, zero chaptalization, unchaptalized whole-cluster semi-carbonic maceration, zero added sulfur during vinification and bottling (sans soufre ajouté), and bottling without fining or filtration.",
      legacy: "Sparked the global natural wine movement and restored worldwide critical prestige to authentic Cru Beaujolais."
    }
  },

  carbonicMacerationGuide: {
    title: "Carbonic & Semi-Carbonic Maceration Enology Guide",
    subtitle: "Biochemical Intracellular Fermentation, Malic Acid Degradation & 3-Zone Tank Dynamics",
    summary: "Carbonic and semi-carbonic maceration are specialized red winemaking methods fundamentally distinct from conventional crushed-grape fermentations. Rather than crushing berries to release juice for yeast fermentation, whole intact grape clusters are placed in an oxygen-free, carbon dioxide-saturated atmosphere, triggering intracellular enzymatic metabolism within each individual berry before external yeast activity commences.",
    biochemistry: {
      title: "Biochemical & Enzymatic Mechanics Inside the Berry",
      steps: [
        {
          phase: "1. Intracellular Enzymatic Metabolism (Anaerobic)",
          title: "Yeast-Free Cellular Ethanol Production",
          details: "Deprived of oxygen in a CO2 atmosphere, intact grape berries switch from aerobic respiration to anaerobic intracellular fermentation powered by internal plant enzymes. These endogenous enzymes convert glucose and fructose into ethanol, reaching 1.5% to 2.5% ABV before cellular membranes rupture."
        },
        {
          phase: "2. Enzymatic Degradation of Malic Acid",
          title: "Biological Deacidification (30%–50% Reduction)",
          details: "Endogenous enzymes degrade 30% to 50% of the berry's harsh malic acid, converting it into ethanol and succinic acid. This intracellular breakdown significantly softens perceived acidity before malolactic fermentation even begins."
        },
        {
          phase: "3. Selective Anthocyanin Diffusion",
          title: "Color Extraction Without Seed Tannins",
          details: "The alcohol formed internally dissolves anthocyanins (red pigments) from the hypodermal cells of the skin, allowing color to diffuse into the clear pulp without extracting astringent, bitter monomeric catechins from the seeds."
        },
        {
          phase: "4. Signature Ester & Aromatic Synthesis",
          title: "Formation of Ethyl Cinnamate & Isoamyl Acetate",
          details: "Intracellular enzymatic pathways synthesize distinctive aromatic esters: ethyl cinnamate (notes of cinnamon, spiced cherry, and kirsch) and isoamyl acetate (notes of fresh banana, pear drops, and raspberry). In parallel, green pyrazine compounds are degraded, enhancing pure floral and red fruit expression."
        }
      ]
    },
    tankDynamics: {
      title: "3-Zone Tank Stratification in Semi-Carbonic Maceration",
      description: "In classic Beaujolais semi-carbonic vinification, closed vats are filled with whole, uncrushed clusters without adding external carbon dioxide gas. The weight of the fruit naturally stratifies the tank into three active biochemical zones:",
      zones: [
        {
          zone: "Top Zone (~50%–60% of tank)",
          name: "Intact Cluster Blanket (Pure Intracellular Fermentation)",
          tag: "Anaerobic Enzymatic",
          color: "#7b1fa2",
          mechanism: "Clusters remain completely intact in the rising carbon dioxide blanket. Pure intracellular enzymatic fermentation takes place within unbroken skins, degrading malic acid and generating signature esters."
        },
        {
          zone: "Middle Zone (~20%–30% of tank)",
          name: "Crushed Cluster Transition Layer",
          tag: "Enzymatic + Yeast",
          color: "#ad1457",
          mechanism: "Clusters are partially crushed under the mechanical weight of the fruit above. Berries split, releasing juice that combines intracellular enzymatic products with initiating wild yeast fermentation."
        },
        {
          zone: "Bottom Zone (~15%–20% of tank)",
          name: "Free-Run Must Pool (Ambient Yeast Fermentation)",
          tag: "CO2 Generator",
          color: "#880e4f",
          mechanism: "Grapes are thoroughly crushed by hydrostatic pressure. Ambient wild yeasts (Saccharomyces cerevisiae) ferment this free-run juice, releasing large volumes of carbon dioxide that rise and blanket the middle and upper intact clusters."
        }
      ]
    },
    comparativeTable: {
      title: "Comparative Vinification Methods in Beaujolais",
      methods: [
        {
          name: "Traditional Semi-Carbonic",
          vessel: "Cement or stainless steel open/closed vats",
          externalCo2: "No (CO2 generated naturally by bottom must)",
          clusterIntegrity: "100% whole clusters, no destemming",
          macerationDuration: "4–6 days (Nouveau), 8–12 days (Villages), 12–20 days (Crus)",
          tanninExtraction: "Low to moderate; soft, fine-grained",
          aromaticProfile: "Fresh redcurrant, cherry, violet, subtle banana and kirsch ester lift",
          targetWines: "Beaujolais-Villages, traditional Crus (Lapierre, Foillard, Métras)"
        },
        {
          name: "Pure Carbonic Maceration",
          vessel: "Hermetically sealed pressurized tanks (Michel Flanzy, 1934)",
          externalCo2: "Yes (pre-purged and pressurized with gas cylinder CO2)",
          clusterIntegrity: "100% whole intact clusters placed on false bottom grid",
          macerationDuration: "5–10 days at 25–30°C",
          tanninExtraction: "Minimal; low total phenolics",
          aromaticProfile: "Confectionery, bubblegum, banana (isoamyl acetate), candied strawberry",
          targetWines: "Commercial early-drinking Beaujolais Nouveau"
        },
        {
          name: "Burgundian Destemmed Vinification",
          vessel: "Open-top wooden foudres or concrete vats",
          externalCo2: "No (exposed cap with air contact)",
          clusterIntegrity: "100% destemmed and crushed berries",
          macerationDuration: "18–25 days with daily manual pigéage and remontage",
          tanninExtraction: "High; firm structural tannins and anthocyanin-tannin polymers",
          aromaticProfile: "Blackcurrant, plum, leather, spice, tobacco; cellar potential 15–30+ years",
          targetWines: "Moulin-à-Vent & Morgon vins de garde (Château des Jacques, Mee Godard)"
        }
      ]
    }
  },

  beaujolaisNouveauGuide: {
    title: "Beaujolais Nouveau: Statutory Regulations, History & Enology",
    subtitle: "The Worldwide 00:01 Third-Thursday November Embargo, 1951 Decree & Modern Viticulture",
    summary: "Beaujolais Nouveau is a fresh, early-release wine produced from the current harvest, distributed worldwide on the third Thursday of November under strict French statutory and INAO regulations.",
    legalFramework: {
      title: "Statutory Embargo & Legal Release Mandate",
      embargoRule: "Released globally at 00:01 hours on the third Thursday of November",
      statutoryDecree: "Official INAO / French Ministry of Agriculture Decree of November 13, 1951",
      catchphrase: "« Le Beaujolais Nouveau est arrivé ! »",
      keyRegulations: [
        {
          rule: "Midnight Release Embargo",
          detail: "Wines may be pre-shipped under customs bond to global export destinations (such as Japan, the US, and the UK), but cannot legally be uncorked, served, or sold to retail consumers before 00:01 local time on the third Thursday of November."
        },
        {
          rule: "Appellation Restrictions (Crus Forbidden)",
          detail: "Only Beaujolais AOC and Beaujolais-Villages AOC are authorized to produce Nouveau or Primeur wines. All 10 Cru communal appellations (e.g., Morgon, Moulin-à-Vent, Fleurie) are strictly prohibited by AOC decree from producing Nouveau."
        },
        {
          rule: "Yield & Ripeness Limits",
          detail: "Maximum permitted yields are 60 hl/ha for Beaujolais AOC and 58 hl/ha for Beaujolais-Villages AOC, with a minimum required natural potential alcohol of 10.0% vol."
        },
        {
          rule: "Mandatory Primeur Labeling",
          detail: "Labels must explicitly designate the vintage year alongside the mention 'Nouveau' or 'Primeur'. The official sales authorization window ends on the following August 31."
        }
      ]
    },
    historicalEvolution: {
      title: "Historical Provenance & The Duboeuf Phenomenon",
      timeline: [
        {
          era: "19th Century",
          title: "The Lyonnais 'Vin de l'Année' & Canuts",
          details: "Origins date to the 19th century when Lyon silk weavers (les canuts) and traditional bouchons celebrated the end of the harvest with casks of fresh, unfinished wine ('vin de l'année') floated down the Saône River in flat-bottomed barges."
        },
        {
          era: "November 13, 1951",
          title: "Official INAO Decree & Authorization",
          details: "Following post-WWII administrative regulations requiring wines to age until December 15 before release, the Union Interprofessionnelle des Vins du Beaujolais (UIVB) lobbied successfully for a special decree allowing certain AOC wines to be sold immediately as 'primeur'."
        },
        {
          era: "1970s – 1980s",
          title: "Georges Duboeuf & The Global Race",
          details: "Négociant Georges Duboeuf transformed a regional French release into a global marketing phenomenon. The annual race to deliver the first bottles to Paris, London, New York, and Tokyo involved Concorde supersonic flights, speedboats, and parachutists, popularizing the phrase 'Le Beaujolais Nouveau est arrivé!' across more than 100 countries."
        },
        {
          era: "21st Century",
          title: "The Artisanal Natural Nouveau Counter-Movement",
          details: "Following consumer fatigue with industrialized, chaptalized, and artificial banana-flavored commercial releases in the late 1990s, low-intervention producers (Marcel Lapierre, Jean Foillard, Jean-Claude Lapalu, Julien Sunier) introduced artisanal unchaptalized 'Nouveau Nature'—estate-grown, native-yeast, unpasteurized, and bottled without sulfur additions."
        }
      ]
    },
    enologyAndStyles: {
      title: "Vinification Styles: Artisanal Natural vs. Commercial Industrial",
      comparison: [
        {
          attribute: "Harvest & Sorting",
          artisanal: "100% hand-harvested, rigorous sorting of intact bunches",
          industrial: "Machine-harvested or bulk manual picking; high percentage of ruptured fruit"
        },
        {
          attribute: "Maceration Technique",
          artisanal: "Whole-cluster cool semi-carbonic maceration (4–6 days), indigenous ambient yeasts",
          industrial: "Thermovinification / Flash-détente (heated to 60–80°C) or pure pressurized carbonic maceration"
        },
        {
          attribute: "Chaptalization & Additives",
          artisanal: "Zero chaptalization (natural ABV ~11.5–12%), zero commercial enzymes or coloring agents",
          industrial: "Routine chaptalization (+1.5% ABV), commercial cultured yeast strain 71B to boost isoamyl acetate"
        },
        {
          attribute: "Sulfur & Filtration",
          artisanal: "Sans soufre (0 mg/L added SO2) or minimal (<20 mg/L) at bottling; unfined, unfiltered",
          industrial: "Standard sterile filtration, synthetic stabilizers, and 80–120 mg/L total SO2"
        },
        {
          attribute: "Sensory Profile",
          artisanal: "Crunchy cranberry, wild strawberry, peony florals, raw energy, natural acidity",
          industrial: "Confectionery bubblegum, artificial banana ester, candied fruit, flat finish"
        }
      ]
    },
    serviceGuidelines: {
      servingTemp: "11–13°C (52–55°F) — chilled cellar temperature",
      glassware: "Bistro tumbler or tulip-shaped white wine stem",
      window: "Peak enjoyment from release day through spring following harvest (November to May)",
      pairings: "Lyonnais saucisson, charcuterie boards, roast turkey, grilled pork sausages, young Comté and Saint-Marcellin"
    }
  },

  aging: {
    title: "Maturation Decrees & Cellar Longevity Laws",
    summary: "Beaujolais winemaking regulations establish distinct statutory release dates and maturation rules separating early-consumption primeur wines from cellar-worthy Cru bottlings:",
    nouveauRelease: {
      title: "Third Thursday of November Embargo",
      rule: "Beaujolais Nouveau and Beaujolais-Villages Nouveau may legally be released to commercial consumers no earlier than 00:01 hours on the third Thursday of November following the harvest.",
      mandate: "Strict legal distribution and uncorking embargo enforced under French statutory decree."
    },
    cruMaturation: {
      title: "Cru Beaujolais Maturation (Vin de Garde)",
      rule: "Cru Beaujolais appellations are not eligible for Nouveau release. Commercial release is permitted beginning in the spring following harvest (typically March 15 or later). Top vignerons mature Cru bottlings for 10 to 24 months in wooden foudres or neutral Burgundian pièces before bottling.",
      potential: "Structured Crus (Morgon, Moulin-à-Vent, Côte de Brouilly) develop tertiary complexity for 10 to 25+ years."
    }
  }
};

export const BEAUJOLAIS_PRESTIGE_CUVEES = [
  {
    id: 'foillard-cote-du-py',
    name: "Morgon Côte du Py",
    producer: "Jean Foillard",
    estate: "Domaine Jean Foillard",
    type: "Domaine",
    status: "Artisanal Natural Benchmark",
    debutVintage: 1982,
    firstVintage: 1982,
    grapeComposition: "100% Gamay Noir à Jus Blanc",
    sourcing: "Centenarian vines on the volcanic schist slope of Côte du Py in Morgon",
    winemaking: "Whole-cluster cold semi-carbonic maceration for 3-4 weeks with native yeasts; matured 6-9 months in neutral Burgundian barrels sourced from Domaine de la Romanée-Conti; unfined, unfiltered, zero added sulfur.",
    character: "Pure expression of volcanic schist: black cherry, blood orange, crushed granite, and black tea with fine-grained tannins and 15–20+ year aging potential.",
    iconicStatus: "Benchmark reference for low-intervention whole-cluster Cru Beaujolais."
  },
  {
    id: 'lapierre-cuvee-marcel',
    name: "Morgon Cuvée Marcel Lapierre (Cuvée MMX)",
    producer: "Marcel Lapierre",
    estate: "Domaine Marcel Lapierre",
    type: "Domaine",
    status: "Artisanal Monopole / Old-Vine Cuvee",
    debutVintage: 1992,
    firstVintage: 1992,
    grapeComposition: "100% Gamay Noir à Jus Blanc",
    sourcing: "100+ year-old ungrafted and historic vines in the granitic parcels of Rocheleux and Côte du Py",
    winemaking: "Pure Jules Chauvet methodology: unchaptalized whole-cluster carbonic maceration at low temperature, aged 12 months in used 228L pièces, bottled strictly sans soufre.",
    character: "Old-vine depth displaying wild raspberry, violet, graphite, and fine-grained tannins without added sulfur.",
    iconicStatus: "Crafted in exceptional vintages from centenarian vines in honor of Marcel Lapierre."
  },
  {
    id: 'chateau-des-jacques-rochegres',
    name: "Moulin-à-Vent Clos de Rochegrès",
    producer: "Château des Jacques (Louis Jadot)",
    estate: "Château des Jacques",
    type: "Château / Négociant-Éleveur",
    status: "Historic Cru Benchmark",
    debutVintage: 1996,
    firstVintage: 1996,
    grapeComposition: "100% Gamay Noir à Jus Blanc",
    sourcing: "High-altitude 8-hectare single climat on sheer pink granite and manganese veins",
    winemaking: "Traditional Burgundian destemmed vinification with extended 20-day maceration, manual pigeage, and 10-12 months aging in French oak barrels (30% new oak) in historic 17th-century cellars.",
    character: "Full-bodied and structured: blackcurrant, tobacco leaf, dark spice, and firm tannins built for 20 to 30 years of maturation.",
    iconicStatus: "Benchmark for traditional Burgundian destemmed vinification and barrel aging in Moulin-à-Vent."
  },
  {
    id: 'thivin-cuvee-zaccharie',
    name: "Côte de Brouilly Cuvée Zaccharie",
    producer: "Château Thivin",
    estate: "Château Thivin (Famille Geoffray)",
    type: "Domaine",
    status: "Volcanic Cru Apex",
    debutVintage: 1997,
    firstVintage: 1997,
    grapeComposition: "100% Gamay Noir à Jus Blanc",
    sourcing: "Old vines (50-80 years) on steep 45° slopes of blue volcanic diorite on Mont Brouilly (climat La Chapelle and Godefroy)",
    winemaking: "Semi-carbonic whole-cluster maceration followed by 12-14 months maturation in French oak barrels (10% new); bottled unfined and lightly filtered.",
    character: "Volcanic metadiorite expression showing wild blackberry, juniper, cracked pepper, gunflint, and focused structural acidity.",
    iconicStatus: "Old-vine cuvée from the steep volcanic slopes of Mont Brouilly."
  },
  {
    id: 'metras-fleurie-printemps',
    name: "Fleurie Le Printemps & Vieilles Vignes",
    producer: "Yvon Métras",
    estate: "Domaine Yvon Métras",
    type: "Domaine",
    status: "Cult Natural Icon",
    debutVintage: 1988,
    firstVintage: 1988,
    grapeComposition: "100% Gamay Noir à Jus Blanc",
    sourcing: "Ancient bush vines (some planted in 1898) on decomposed pink granite sands in Grille-Midi and La Madone",
    winemaking: "Extremely cold, slow semi-carbonic maceration lasting up to one month; aged in seasoned neutral demi-muids and pièces without sulfur or temperature interference.",
    character: "Concentrated floral aromatics of peony and dried rose, wild strawberry, blood orange, and fine mineral tension from ancient vines.",
    iconicStatus: "Rare artisanal cuvée produced from century-old bush vines in Grille-Midi and La Madone."
  },
  {
    id: 'clos-de-la-roilette-cuvee-tardive',
    name: "Fleurie Cuvée Tardive",
    producer: "Clos de la Roilette (Alain Coudert)",
    estate: "Clos de la Roilette",
    type: "Domaine",
    status: "Historic Terroir Benchmark",
    debutVintage: 1989,
    firstVintage: 1989,
    grapeComposition: "100% Gamay Noir à Jus Blanc",
    sourcing: "80+ year-old vines bordering Moulin-à-Vent on clay-rich pink granite",
    winemaking: "Traditional semi-carbonic fermentation in open wooden vats with a submerged cap (grillage), followed by extended aging in ancient neutral oak foudres.",
    character: "Atypical Fleurie shaped by clay-rich granite: dark fruit, wet slate, black pepper, and firm age-worthy tannins.",
    iconicStatus: "Late-harvested old-vine cuvée bordering Moulin-à-Vent."
  }
];

export const BEAUJOLAIS_ICONIC_DOMAINES = [
  {
    id: 'domaine-marcel-lapierre',
    name: "Domaine Marcel Lapierre",
    village: "Villié-Morgon (Morgon)",
    subregion: "Beaujolais Crus",
    commune: "Villié-Morgon",
    vigneron: "Mathieu & Camille Lapierre (founded by Marcel Lapierre)",
    proprietor: "Famille Lapierre",
    philosophy: "Mentored by Jules Chauvet in 1973, Marcel Lapierre ceased using synthetic herbicides and chemical fertilizers in 1981. The domaine utilizes massale selection, organic viticulture, cold whole-cluster semi-carbonic fermentation, neutral oak barrels, and zero-sulfur bottlings.",
    keyCuvees: ["Morgon Sans Soufre", "Morgon Cuvée Marcel Lapierre", "Cuvée Camille", "Raisins Gaulois"]
  },
  {
    id: 'domaine-jean-foillard',
    name: "Domaine Jean Foillard",
    village: "Villié-Morgon (Morgon)",
    subregion: "Beaujolais Crus",
    commune: "Villié-Morgon",
    vigneron: "Jean & Agnès Foillard (and son Alex)",
    proprietor: "Jean Foillard",
    philosophy: "Foundational producer of low-intervention Beaujolais. Cultivates old vines on the weathered schist slopes of Côte du Py and Corcelette. Utilizes strict cluster sorting, extended cool semi-carbonic maceration (3–4 weeks), and aging in neutral 228-liter barrels without fining, filtration, or chaptalization.",
    keyCuvees: ["Morgon Côte du Py", "Morgon Cuvée 3.14", "Morgon Corcelette", "Fleurie"]
  },
  {
    id: 'guy-breton',
    name: "Guy Breton (P'tit Guy)",
    village: "Villié-Morgon (Morgon)",
    subregion: "Beaujolais Crus",
    commune: "Villié-Morgon",
    vigneron: "Guy Breton",
    proprietor: "Guy Breton",
    philosophy: "Founding member of the Gang of Four focused on old vines in Morgon, Régnié, and Chiroubles. Employs early harvest picking for freshness, low-temperature carbonic maceration, indigenous yeasts, and aging in neutral Burgundy barrels.",
    keyCuvees: ["Morgon Vieilles Vignes", "Morgon P'tit Max", "Régnié", "Côte de Brouilly", "Chiroubles"]
  },
  {
    id: 'domaine-jean-paul-thevenet',
    name: "Domaine Jean-Paul Thévenet",
    village: "Villié-Morgon (Morgon)",
    subregion: "Beaujolais Crus",
    commune: "Villié-Morgon",
    vigneron: "Jean-Paul & Charly Thévenet",
    proprietor: "Jean-Paul Thévenet",
    philosophy: "Smallest estate of the Gang of Four (5 ha), managed with biodynamic principles. Employs ancient vines (average 70+ years), ambient yeasts, no sulfur additions at bottling, and extended aging in seasoned barrels.",
    keyCuvees: ["Morgon Vieilles Vignes", "Régnié Grain & Granit"]
  },
  {
    id: 'yvon-metras',
    name: "Domaine Yvon Métras",
    village: "Fleurie",
    subregion: "Beaujolais Crus",
    commune: "Fleurie",
    vigneron: "Yvon & Jules Métras",
    proprietor: "Yvon Métras",
    philosophy: "Artisanal vigneron working steep parcels of century-old gobelet bush vines in Fleurie and Moulin-à-Vent by hand and draft horse. Employs cold, month-long carbonic fermentations without sulfur, temperature intervention, or filtration.",
    keyCuvees: ["Fleurie Le Printemps", "Fleurie Vieilles Vignes", "Moulin-à-Vent", "Beaujolais-Villages Madame Germaine"]
  },
  {
    id: 'clos-de-la-roilette',
    name: "Clos de la Roilette",
    village: "Fleurie",
    subregion: "Beaujolais Crus",
    commune: "Fleurie",
    vigneron: "Alain Coudert",
    proprietor: "Famille Coudert",
    philosophy: "Historical 9-hectare clos situated directly on the border with Moulin-à-Vent. Features deep clay-granite soils that yield structured Fleurie fermented in open wooden tanks with submerged cap (grillage) and neutral foudre maturation.",
    keyCuvees: ["Fleurie Cuvée Tardive", "Fleurie Griffe du Marquis (oak-aged)", "Fleurie Clos de la Roilette"]
  },
  {
    id: 'domaine-thillardon',
    name: "Domaine Thillardon",
    village: "Chénas",
    subregion: "Beaujolais Crus",
    commune: "Chénas",
    vigneron: "Paul-Henri & Charles Thillardon",
    proprietor: "Famille Thillardon",
    philosophy: "Pioneering estate revitalizing Chénas through certified organic and biodynamic viticulture, horse-plowed hillside vineyards, semi-carbonic cold vinification, and native yeasts.",
    keyCuvees: ["Chénas Chassignol", "Chénas Les Blémonts", "Chénas Les Carrières", "Chénas Les Vibrations"]
  },
  {
    id: 'chateau-des-jacques',
    name: "Château des Jacques (Louis Jadot)",
    village: "Romanèche-Thorins (Moulin-à-Vent)",
    subregion: "Beaujolais Crus",
    commune: "Romanèche-Thorins",
    vigneron: "Cyril Chirouze (Louis Jadot)",
    proprietor: "Maison Louis Jadot",
    philosophy: "Proponent of traditional Burgundian vinification in Beaujolais. Utilizes fully destemmed fruit, extended 20-day macerations with pigéage, climat-specific parcel vinification, and maturation in French oak barrels.",
    keyCuvees: ["Moulin-à-Vent Clos de Rochegrès", "Moulin-à-Vent Clos du Grand Carquelin", "Moulin-à-Vent Champ de Cour", "Morgon Côte du Py"]
  }
];

export const BEAUJOLAIS_FOOD_PAIRINGS = [
  {
    category: "Bistrot & Lyonnais Bouchon",
    wineType: "Red",
    targetWine: "Beaujolais-Villages & Chiroubles (Cru Beaujolais)",
    dish: "Saucisson Chaud de Lyon à la Pistache, Salade Lyonnaise with Poached Egg and Lardons, Terrine de Canard",
    note: "The vibrant malic acidity and red fruit of Chiroubles cut through cured pork fat and rich egg yolk, cleansing the palate without astringent tannins.",
    glassware: "Bourgogne Red / Large Tulip Stem (550ml)",
    servingTemp: "13–15°C (55–59°F)",
    decanting: "30 minutes gentle aeration or open directly."
  },
  {
    category: "Poultry & Game Birds",
    wineType: "Red",
    targetWine: "Fleurie & Chénas (Cru Beaujolais)",
    dish: "Roasted Poulet de Bresse with Morel Cream Sauce, Pan-Seared Squab with Redcurrant Reduction",
    note: "The floral peony perfume and fine tannins of Fleurie complement tender Bresse poultry, while morel mushrooms align with Gamay's subtle earthy undertones.",
    glassware: "Burgundy Pinot Noir Stem (650ml)",
    servingTemp: "14–16°C (57–61°F)",
    decanting: "30 to 45 minutes decanting recommended."
  },
  {
    category: "Roasted Meats & Game",
    wineType: "Red",
    targetWine: "Moulin-à-Vent & Morgon Côte du Py (Old Vines / Vin de Garde)",
    dish: "Slow-Braised Daube de Bœuf Bourguignonne, Roasted Rack of Lamb with Rosemary, Seared Duck Breast",
    note: "Mature Morgon and Moulin-à-Vent exhibit sous-bois, black truffle, and dark fruit complexity; their resolved granitic tannins bind to the savory proteins of braised beef and duck.",
    glassware: "Large Burgundy Stem (700ml)",
    servingTemp: "15–17°C (59–63°F)",
    decanting: "1 to 2 hours decanting for mature bottlings."
  },
  {
    category: "Artisanal Charcuterie & Pork",
    wineType: "Red",
    targetWine: "Côte de Brouilly (Mont Brouilly Blue Diorite)",
    dish: "Roasted Porchetta with Fennel and Rosemary, Andouillette de Troyes with Dijon Mustard, Blood Pudding (Boudin Noir)",
    note: "The gunflint minerality, wild herbs, and savory volcanic grip of Mont Brouilly's blue diorite provide structural foil to rich pork roasts and savory charcuterie.",
    glassware: "Burgundy Stem (600ml)",
    servingTemp: "14–16°C (57–61°F)",
    decanting: "45 minutes decanting."
  },
  {
    category: "Artisanal Cheeses",
    wineType: "Red",
    targetWine: "Juliénas & Régnié (Cru Beaujolais)",
    dish: "Saint-Marcellin AOP, Saint-Félicien, Morbier, 18-Month Comté AOP",
    note: "The supple tannins and brambly berry fruit of Juliénas and Régnié pair naturally with regional cow's milk cheeses without conflicting with bloomy rinds.",
    glassware: "Burgundy Red Stem (550ml)",
    servingTemp: "14–16°C (57–61°F)",
    decanting: "Not required; 15 minutes in glass."
  },
  {
    category: "Fish & Shellfish",
    wineType: "White",
    targetWine: "Beaujolais Blanc (Chardonnay - Pierres Dorées)",
    dish: "Quenelles de Brochet with Sauce Nantua (Pike Quenelles in Crayfish Sauce), Pan-Fried Saône River Perch with Lemon Butter",
    note: "The crisp limestone-driven acidity and orchard fruit of southern Pierres Dorées Chardonnay balance the rich crayfish butter sauce of traditional Lyonnais quenelles.",
    glassware: "Burgundy White Wine Stem (450ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not recommended."
  },
  {
    category: "Goat Cheeses & Salads",
    wineType: "White",
    targetWine: "Beaujolais-Villages Blanc (Northern Granite/Clay Chardonnay)",
    dish: "Crottin de Chavignol, Fresh Chèvre Chaud on Sourdough, Asparagus Tart with Gruyère",
    note: "Natural acidity and citrus-mineral drive in northern Beaujolais Chardonnay complement the tangy, lactic profile of artisanal goat cheeses.",
    glassware: "White Wine Tulip (400ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not recommended."
  }
];

export const BEAUJOLAIS_DATA = {
  id: 'beaujolais',
  name: "Beaujolais",
  country: 'France',
  countryCode: 'FR',
  aliases: [
    'beaujolais', 'beaujolais-villages', 'beaujolais villages', 'beaujolais superieur', 'beaujolais supérieur',
    'beaujolais nouveau', 'beaujolais primeur', 'beaujolais cru', 'crus du beaujolais', 'gamay', 'gamay noir',
    'morgon', 'moulin-a-vent', 'moulin-à-vent', 'moulin a vent', 'moulin à vent', 'fleurie', 'brouilly',
    'cote de brouilly', 'côte de brouilly', 'cote-de-brouilly', 'côte-de-brouilly',
    'chenas', 'chénas', 'chiroubles', 'julienas', 'juliénais', 'juliénas', 'regnie', 'régnié',
    'saint-amour', 'st-amour', 'saint amour', 'st amour', 'bas-beaujolais', 'bas beaujolais',
    'cote du py', 'côte du py', 'corcelette', 'champ de cour', 'les verillats', 'les vérillats',
    'grille-midi', 'la roilette', 'chassignol', 'javernand', 'les capitans', 'haute-ronze',
    'pierres dorees', 'pierres dorées'
  ],
  tagline: "Granite & Metamorphic Terroirs: Cru Communal Classification, Semi-Carbonic Vinification & Natural Wine Heritage",
  summary: "Bordered by Burgundy's Mâconnais to the north and Lyon to the south, Beaujolais is delineated by a clear geological transition. The northern communal crus and villages occupy rolling hills of Paleozoic crystalline pink granite (gore and arène) and metamorphic blue diorite (côrnes vertes), yielding focused, structured, and cellar-worthy red wines from Gamay Noir à Jus Blanc. Southern Bas-Beaujolais sits on Middle Jurassic Bajocian clay-limestone formations (Pierres Dorées), producing early-drinking, supple red, white, and rosé wines. Beaujolais was also the epicenter of the low-intervention natural wine movement initiated by enologist Jules Chauvet and adopted by Marcel Lapierre, Jean Foillard, Guy Breton, and Jean-Paul Thévenet. Cellar techniques range from traditional whole-cluster semi-carbonic maceration to Burgundian destemmed vinification with extended aging in oak foudres and pièces.",
  center: [46.1500, 4.6800],
  zoom: 10,
  bounds: [[45.75, 4.52], [46.35, 4.82]],
  heroGradient: 'linear-gradient(135deg, #2b0b1a 0%, #4a1228 50%, #d4af37 100%)',
  accentColor: '#8e24aa',

  terroir: {
    climate: "Semi-continental with temperate oceanic and Mediterranean influences. The Monts du Beaujolais shelter the eastern-facing hillside slopes from prevailing Atlantic rains (rain shadow effect), while warm southern winds ascending the Saône River plain accelerate ripening during late summer. Diurnal swings preserve vibrant malic acidity in Gamay.",
    soil: "Drastically bifurcated: The northern crus and upper villages rest upon weathered Hercynian crystalline pink granite (gore / arène granitique), manganese veins, and Paleozoic metamorphic blue diorite (côrnes vertes on Mont Brouilly). The southern Bas-Beaujolais rests upon Middle Jurassic Bajocian clay-limestone formations rich in iron oxide (Pierres Dorées).",
    elevation: "190m to 550m above sea level (peaking in Chiroubles at 400m–530m and Mont Brouilly summit at 484m) on 15% to 50% hillside slopes providing superior sunlight interception and thermal drainage.",
    riverInfluence: "The Saône River valley serves as a critical thermal buffer and air-drainage channel, pulling morning mist and mitigating spring frosts across the eastern-facing amphitheaters of the crus."
  },

  grapes: [
    {
      name: 'Gamay Noir à Jus Blanc',
      percentage: 98.0,
      type: 'Red',
      role: "Signature variety of Beaujolais, derived from Pinot Noir × Gouais Blanc, featuring high natural malic acidity, thin anthocyanin-rich skins, and expressive red fruit and floral aromatics. On granitic and schistous terroirs, it achieves structural depth and undergoes 'morgonner' development into spiced cherry, truffle, and sous-bois with 10–25 years of age."
    },
    {
      name: 'Chardonnay',
      percentage: 1.5,
      type: 'White',
      role: "Authorized white variety for Beaujolais Blanc and Beaujolais-Villages Blanc, cultivated primarily in the clay-limestone terroirs bordering the Mâconnais and in southern Pierres Dorées. Produces crisp, mineral white wines with notes of green apple, white peach, acacia blossom, and flinty limestone acidity. Also permitted as an accessory blending grape (up to 15%) in red vinification."
    },
    {
      name: 'Aligoté',
      percentage: 0.5,
      type: 'White',
      role: "Historic accessory white grape variety authorized up to 15% in field blends and traditional co-fermentations, delivering searing natural acidity, green apple crunch, citrus pith, and saline freshness to round out warm harvest cuvées."
    }
  ],

  structure: {
    body: 5.8,
    acidity: 7.8,
    tannin: 5.2,
    sweetness: 1.0,
    alcohol: 13.0,
    agingPotential: "3 - 25+ Years (Cru Beaujolais)"
  },

  classification: {
    system: "Beaujolais Appellation d'Origine Contrôlée (AOC) 3-Tier Hierarchy",
    description: "Beaujolais operates an official three-tier quality hierarchy established under French INAO regulations. The pinnacle is represented by the 10 standalone Cru Beaujolais communal AOCs in the north, followed by Beaujolais-Villages across 38 communes, and regional Beaujolais / Beaujolais Supérieur spanning the central and southern sectors.",
    tiers: [
      {
        name: "Grand Cru / Cru Beaujolais (10 Communal AOCs)",
        detail: "The 10 elite communal appellations situated exclusively in the northern granitic hills: Morgon, Moulin-à-Vent, Fleurie, Brouilly, Côte de Brouilly, Chénas, Chiroubles, Juliénas, Régnié, and Saint-Amour. Bottled exclusively under the cru name without requiring 'Beaujolais' on the label. Strict yields (max 56 hl/ha), higher natural alcohol (min 10.5% vol.), and defined lieu-dits."
      },
      {
        name: "Beaujolais-Villages AOC (38 Communes)",
        detail: "Covers 38 hillside communes surrounding the crus on transitional granite, schist, and clay soils. Represents roughly 25% of regional production. Maximum base yield 58 hl/ha, offering higher concentration, floral aromatics, and structure than standard regional AOC."
      },
      {
        name: "Beaujolais AOC & Beaujolais Supérieur AOC",
        detail: "Regional appellations encompassing 96 communes across the Rhône and Saône-et-Loire departments, predominantly in the southern Bas-Beaujolais / Pierres Dorées on clay-limestone. Supérieur requires lower yields and a minimum 10.5% potential alcohol."
      }
    ],
    styles: [
      {
        name: "Cru Beaujolais Rouge (Vin de Garde)",
        desc: "Structured, age-worthy red wines vinified via semi-carbonic or traditional Burgundian destemmed maceration, aged in large oak foudres or neutral barrels for 10–24 months."
      },
      {
        name: "Beaujolais-Villages & Beaujolais Nouveau",
        desc: "Vibrant, fruit-forward expressions crafted via rapid 4–6 day semi-carbonic maceration, bottled immediately and released on the third Thursday of November."
      },
      {
        name: "Beaujolais Blanc",
        desc: "100% Chardonnay grown on southern limestone or northern clay soils, fermented dry in stainless steel or neutral oak."
      },
      {
        name: "Beaujolais Rosé",
        desc: "Crisp, refreshing still rosé produced via direct pressing (pressurage direct) or short saignée of Gamay Noir."
      }
    ]
  },

  flavorProfile: {
    primary: ['Wild Strawberry', 'Crushed Cranberry', 'Dark Kirsch Cherry', 'Peony & Violet Florals', 'Granite & Crushed Slate Minerality'],
    secondary: ['Black Tea Leaf', 'White Pepper & Wood Smoke', 'Forest Floor (Sous-Bois)', 'Dried Damson Plum', 'Licorice & Truffle'],
    palate: "Bright, focused attack marked by pronounced natural acidity and fine-grained granitic tannins. Youthful bottlings emphasize red berry fruit, violet, and peony, while aged Cru wines develop secondary characteristics of kirsch, dried forest floor, black truffle, cured meat, and crushed stone."
  },

  foodPairings: BEAUJOLAIS_FOOD_PAIRINGS,
  subRegions: BEAUJOLAIS_SUBREGIONS,
  grandCrus: BEAUJOLAIS_GRAND_CRUS,
  crus: BEAUJOLAIS_GRAND_CRUS,
  technicalRegulations: BEAUJOLAIS_TECHNICAL_REGULATIONS,
  prestigeCuvees: BEAUJOLAIS_PRESTIGE_CUVEES,
  iconicDomaines: BEAUJOLAIS_ICONIC_DOMAINES,
  iconicGrowers: BEAUJOLAIS_ICONIC_DOMAINES
};
