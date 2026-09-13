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
    terroir: "Steep rolling hills composed of ancient Hercynian crystalline pink granite (gore), blue volcanic diorite schist, and manganese-rich quartz veins, sheltered by the Monts du Beaujolais.",
    focus: "The 10 Cru communal appellations: Morgon, Moulin-à-Vent, Fleurie, Brouilly, Côte de Brouilly, Chénas, Chiroubles, Juliénas, Régnié, Saint-Amour.",
    geology: "Weathered Hercynian pink granite (gore and arène), blue diorite (côrnes vertes), and metamorphic schists.",
    dominantGrapes: "Gamay Noir à Jus Blanc (100% for Cru red wines)",
    microTerroirs: [
      { name: "Mont Brouilly Volcano", focus: "Pre-Cambrian and Paleozoic blue metadiorite basalt slopes (Côte de Brouilly)" },
      { name: "Morgon Schist Ridge", focus: "Decayed blue schist and iron-rich manganiferous saprolite (Côte du Py, Javernières)" },
      { name: "Moulin-à-Vent Manganese Plateau", focus: "Friable pink granite crisscrossed by toxic manganese quartz veins (Champ de Cour, Les Vérillats)" },
      { name: "Fleurie Granite Amphitheater", focus: "Ultra-fine, friable acidic pink granite sand (La Madone, Grille-Midi, Poncié)" }
    ],
    description: "The elite viticultural northern sector encompasses 10 distinct Cru communes—Morgon, Moulin-à-Vent, Fleurie, Brouilly, Côte de Brouilly, Chénas, Chiroubles, Juliénas, Régnié, and Saint-Amour—planted on steep rolling hills of ancient Hercynian pink granite, blue volcanic diorite schist, and manganese-rich quartz veins. These acidic, nutrient-poor crystalline soils naturally restrict yields and force Gamay Noir à Jus Blanc vines to root deeply into bedrock fractures. Traditional semi-carbonic maceration produces vivid, aromatic fruit, while an increasing number of vignerons employ Burgundian whole-cluster or destemmed fermentation to craft structured, age-worthy vins de garde. The finest crus—particularly Morgon Côte du Py and Moulin-à-Vent—develop truffle and forest-floor complexity with 10–25 years of cellaring, rivaling top Burgundy Pinot Noir."
  },
  {
    id: 'beaujolais-villages',
    name: "Beaujolais-Villages (Central Rolling Hills)",
    district: "Central Beaujolais",
    lat: 46.1200,
    lng: 4.6200,
    terroir: "38 hillside communes nestled around and between the 10 crus, featuring transitional soils of granite, schist, clay, and alluvial gravels at 200m–400m elevation.",
    focus: "Higher-altitude Gamay reds and structured Beaujolais-Villages Blanc (Chardonnay) produced on hillside slopes.",
    geology: "Transitional granite-clay formations, siliceous sands, and river gravel deposits.",
    dominantGrapes: "Gamay Noir (~95%), Chardonnay (~5%)",
    microTerroirs: [
      { name: "Vaux-en-Beaujolais & Saint-Étienne-des-Oullières", focus: "High granite hillside amphitheaters producing taut, peppery Gamay" },
      { name: "Lantignié", focus: "Granite soils directly west of Régnié, seeking official Cru status" },
      { name: "Beaujeu Hillsides", focus: "The historic capital of the Beaujolais province on steep granitic slopes" }
    ],
    description: "A band of 38 designated communes occupying prime hillside exposures at 200–400 m elevation directly adjacent to and interleaved among the 10 Crus in northern and central Beaujolais. The geology is transitional, shifting from weathered Hercynian granite and schist in the north toward siliceous sands, clay, and the first outcrops of Pierre Dorée golden limestone in the south. This mosaic of soils produces Gamay of greater concentration and spice than basic Beaujolais AOC, with crunchy cherry fruit, floral lift, and a refreshing mineral spine. Communes such as Lantignié, Beaujeu, and Le Perréon are increasingly recognized for site-specific quality, with Lantignié actively pursuing promotion to Cru status."
  },
  {
    id: 'bas-beaujolais',
    name: "Bas-Beaujolais / Pierres Dorées (Southern Limestone)",
    district: "Southern Beaujolais",
    lat: 45.9200,
    lng: 4.6800,
    terroir: "Gentle rolling hills framed by warm ochre limestone villages built from the legendary 'Pierres Dorées' (golden stones), with fertile Middle Jurassic Bajocian clay-limestone soils.",
    focus: "Supple, fruit-forward Beaujolais Rouge, vibrant Beaujolais Rosé, and mineral Beaujolais Blanc (Chardonnay).",
    geology: "Bajocian sedimentary limestone, calcareous clay marls, and iron-tinted golden stone beds.",
    dominantGrapes: "Gamay Noir (~85%), Chardonnay (~15%)",
    microTerroirs: [
      { name: "Châtillon d'Azergues & Theize", focus: "Clay-limestone hills producing expressive, chalky Chardonnay and floral Gamay" },
      { name: "Bagnols & Jarnioux", focus: "Golden stone terroirs yielding juicy, strawberry-driven early drinking reds" }
    ],
    description: "The southern district, often dubbed 'the French Tuscany,' is characterized by gentle rolling hills of Middle Jurassic Bajocian limestone and calcareous clay marls, geologically distinct from the granite-dominated north. Its picturesque villages—Theizé, Oingt, Bagnols, and Châtillon d'Azergues—are built from the warm ochre 'Pierres Dorées' (golden stones) that give the area its iconic appearance. These fertile, calcium-rich soils yield supple, fruit-forward Gamay bursting with fresh strawberry and redcurrant, as well as crisp, mineral Beaujolais Blanc from Chardonnay. Bas-Beaujolais is also the historic heartland of the Beaujolais Nouveau phenomenon, the annual release on the third Thursday of November that became a global cultural event in the 1970s and 1980s."
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
    soil: "Rotten rock (roche pourrie) of decomposed schist, friable blue volcanic diorite, and manganiferous clay rich in iron oxides",
    character: "Muscular, structured, deeply concentrated red wine with ripe black cherry, damson plum, kirsch, and wild peach. Celebrated for its unique ability to 'morgonner'—developing truffle, forest floor, and Pinot Noir-like complexity with 10–20 years of aging.",
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
    soil: "Friable pink granulite and granite (gore) penetrated by subterranean quartz veins rich in toxic manganese that stunts vine vigor",
    character: "The 'King of Beaujolais' and most age-worthy cru. Deep ruby-purple, muscular and aristocratic, showing black currant, roasted violet, dried rose, graphite, and noble structural tannins requiring 5–7 years to unfold and cellaring for 20–30+ years.",
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
    soil: "Ultra-fine, highly acidic, friable pink granite sand (arène granitique) with clay intrusions in the lower sectors",
    character: "The 'Queen of Beaujolais'. Celebrated for its intoxicating floral perfume of crushed iris, violet, fresh rose petals, and wild woodland red berries. Silky, weightless, lace-textured palate with seamless acidity and refined elegance.",
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
    character: "The largest, most accessible Cru. Bursting with joyous red berry fruit—ripe raspberry, red cherry, wild redcurrant—accented by subtle floral violet notes. Round, fleshy, and welcoming in its youth.",
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
    character: "Electrifying tension, chiselled dark berry fruit, gunflint minerality, and savory wild herbs. The hard blue volcanic diorite imparts firmer structural tannins, energetic acidity, and exceptional verticality.",
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
    character: "The rarest and smallest Cru of Beaujolais. Aristocratic and structured with spicy peony, black pepper, woodland underbrush, and black plum notes. Balances the floral perfume of Fleurie with the structural spine of neighboring Moulin-à-Vent.",
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
    character: "The coolest, most alpine Cru. Laser-sharp acidity, crystalline purity, crunchy red currant, wild mountain strawberry, and delicate violet blossom. The quintessence of refreshing, vivacious, low-tannin Gamay.",
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
    character: "Named after Julius Caesar. Rustic, robust, and spicy, showing deep dark cherry, blackberry, black pepper, cinnamon, and savory earthy undertones. Substantial tannins that reward cellar maturation.",
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
    character: "The youngest Cru, elevated in 1988 as the 10th Cru. Early ripening and aromatic, delivering succulent red blackberry, raspberry, cracked red peppercorn, and lavender floral lift backed by supple, supple tannins.",
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
    soil: "Fascinating geological transition between clay-siliceous limestone, alluvial gravels, and pink granite",
    character: "The northernmost Cru. Famed for its dual expressions: a delicate, floral, kirsch and peach-blossom style macerated short for Valentine's Day, alongside serious, structured, spiced plum and peppery vin de garde cuvées that age gracefully.",
    benchmarkProducers: ["Domaine des Billards", "Domaine de la Pirolette", "Georges Le Roy", "Domaine Spay"],
    famousProducers: ["Domaine des Billards", "Domaine de la Pirolette", "Georges Le Roy", "Domaine Spay"],
    iconicVineyards: ["Côte de Besset", "Le Châtelet", "Clos de la Pirolette", "Les Champs Grillés", "A la Folie"]
  }
];

export const BEAUJOLAIS_TECHNICAL_REGULATIONS = {
  geology: {
    summary: "Beaujolais is geologically severed along a prominent fault line: the northern crus and villages rest on ancient crystalline Hercynian granite, metamorphic schists, and blue volcanic diorite, while the southern Bas-Beaujolais sits on Middle Jurassic Bajocian sedimentary golden limestone.",
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
        wineImpact: "Imparts floral high-toned aromatics (violet, iris), crystalline red fruit, refreshing malic acidity, and signature electric mineral tension."
      },
      {
        id: 'cornes-vertes-diorite',
        name: "Blue Volcanic Diorite (Côrnes Vertes)",
        frenchName: "Métadiorite et Roches Bleues (Côrnes Vertes)",
        period: "Paleozoic / Upper Devonian (~370-400 Ma)",
        fossil: "None (Sub-volcanic intrusive basic igneous rock)",
        characteristics: "Extremely dense, dark greenish-blue metadiorite and microdiorite with high plagioclase feldspar and hornblende content.",
        porosity: "Low porosity, shallow stony lithic soils on steep slopes.",
        keyAreas: ["Mont Brouilly cone (Côte de Brouilly)", "Morgon Côte du Py eastern flank", "Juliénas (Beauvernay)"],
        wineImpact: "Yields darker, brooding black fruit, gunflint and wild herbal nuances, chiseled verticality, and firmer structural tannins."
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
        wineImpact: "Manganese toxicity stunts vine vegetative vigor and dramatically reduces berry size, naturally concentrating anthocyanins, tannins, and giving 20+ year aging longevity."
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
        wineImpact: "Produces round, juicy, approachable Gamay bursting with succulent strawberry fruit, as well as mineral, chalky, citrus-driven Chardonnay (Beaujolais Blanc)."
      },
      {
        id: 'roche-pourrie-schist',
        name: "Rotten Rock (Roche Pourrie / Weathered Schist)",
        frenchName: "Roche Pourrie de Schistes et Tufs",
        period: "Early Paleozoic (Cambro-Ordovician, ~450 Ma)",
        fossil: "None (Metamorphic pelitic schists)",
        characteristics: "Friable, highly weathered greenish-grey schist and weathered volcanic tuff, rich in iron hydroxide.",
        porosity: "High fissuring allowing roots to penetrate 3–5 meters into the rock.",
        keyAreas: ["Morgon Côte du Py peak", "Javernières bench"],
        wineImpact: "Provides dense palate weight, savory meaty notes, and triggers the classic 'morgonner' transition to forest floor, truffle, and cherry kirsch."
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
        profile: "Naturally thin-skinned, anthocyanin-rich grape derived from Pinot Noir × Gouais Blanc. High malic acidity, low harsh seed tannins, vibrant aromatics of wild strawberry, redcurrant, dark cherry, violet, and peony. On granite, it achieves dense mid-palate structure and remarkable 10-25 year aging capacity.",
        role: "The absolute signature variety of Beaujolais, accounting for virtually all red wine production.",
        benchmarkCuvees: ["Jean Foillard Morgon Côte du Py", "Marcel Lapierre Cuvée MMX", "Château Thivin Cuvée Zaccharie"]
      },
      {
        id: 'chardonnay',
        name: "Chardonnay",
        frenchSynonym: "Beaunois / Aubaine",
        percentage: 1.5,
        type: "White",
        epicenter: "Southern Pierres Dorées and northern border with Mâconnais",
        profile: "Crisp, energetic white wines with aromas of green apple, white peach, honeysuckle, and crushed limestone minerality.",
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
        role: "Ancient Burgundian heritage grape authorized up to 15% in field co-fermentations, bringing electric natural acidity and citrus bite."
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
    description: "Established under French INAO regulations, Beaujolais features an official three-tier quality hierarchy anchored by the 10 standalone Cru communal AOCs in the north, followed by Beaujolais-Villages across 38 communes, and regional Beaujolais / Beaujolais Supérieur spanning the entire production zone.",
    pyramid: [
      {
        tier: "Cru Beaujolais (10 Communal AOCs)",
        sharePct: "26.0%",
        count: "10 Appellations",
        yieldLimits: "Max 56 hl/ha",
        minAbv: "10.5% vol.",
        aging: "Released in spring following harvest; top vignerons age 12–24 months in foudres/pièces",
        criteria: "Strictly estate-grown within the 10 delimited communal boundaries on granite, schist, and volcanic diorite soils.",
        description: "The elite apex: Morgon, Moulin-à-Vent, Fleurie, Brouilly, Côte de Brouilly, Chénas, Chiroubles, Juliénas, Régnié, and Saint-Amour."
      },
      {
        tier: "Beaujolais-Villages AOC (38 Communes)",
        sharePct: "24.0%",
        count: "38 Communes",
        yieldLimits: "Max 58 hl/ha",
        minAbv: "10.0% vol.",
        aging: "Immediate for Nouveau; 6–12 months for standard cuvées",
        criteria: "Sourced exclusively from 38 hillside communes in northern and central Beaujolais on transitional granite/clay slopes.",
        description: "Mid-slope terraced vineyards offering deeper concentration, floral spice, and structure than basic regional AOC."
      },
      {
        tier: "Beaujolais AOC & Beaujolais Supérieur AOC",
        sharePct: "50.0%",
        count: "96 Communes",
        yieldLimits: "Max 60 hl/ha (AOC), 58 hl/ha (Supérieur)",
        minAbv: "10.0% vol. (AOC), 10.5% vol. (Supérieur)",
        aging: "Nouveau released on the third Thursday of November; standard cuvées aged in tank",
        criteria: "Delimited across all 96 communes, centered primarily in the southern Pierres Dorées / Bas-Beaujolais clay-limestone rolling hills.",
        description: "Fruit-forward, joyful, early-drinking wines renowned globally through the Beaujolais Nouveau phenomenon."
      }
    ],
    tiers: [
      { name: "Cru Beaujolais (10 AOCs)", detail: "Morgon, Moulin-à-Vent, Fleurie, Brouilly, Côte de Brouilly, Chénas, Chiroubles, Juliénas, Régnié, Saint-Amour" },
      { name: "Beaujolais-Villages AOC", detail: "38 hillside communes in the northern and central sectors on granite/schist" },
      { name: "Beaujolais AOC / Supérieur", detail: "Regional appellation across 96 communes, centered in southern Pierres Dorées" }
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

  aging: {
    nouveauRelease: {
      rule: "Beaujolais Nouveau and Beaujolais-Villages Nouveau may legally be released to commercial consumers no earlier than 00:01 hours on the third Thursday of November following the harvest.",
      mandate: "Strict legal embargo enforced globally."
    },
    cruMaturation: {
      rule: "Cru Beaujolais appellations are not eligible for Nouveau release. Commercial release is permitted beginning in the spring following harvest (typically March/April). Elite producers mature Cru bottlings for 10 to 24 months in wooden foudres or neutral Burgundian pièces before bottling.",
      potential: "Top crus (Morgon, Moulin-à-Vent, Côte de Brouilly) improve steadily for 10 to 25+ years."
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
    character: "Legendary cult red: black cherry, wild peach, blood orange, crushed granite, black tea, and velvety textural grip with 20+ year aging potential.",
    iconicStatus: "The archetypal benchmark for natural fine wine globally."
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
    character: "Breathtaking purity of wild raspberry, crushed violets, incense, graphite, and seamless silky tannins.",
    iconicStatus: "Crafted in exceptional vintages in honor of natural wine pioneer Marcel Lapierre."
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
    character: "Formidable, aristocratic power: blackcurrant, dark chocolate, tobacco leaf, roasted spice, and dense structural tannins built for 25-35 years of maturation.",
    iconicStatus: "Pioneered the revival of historic Burgundian barrel-aged Cru Beaujolais."
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
    character: "Gunflint reduction, wild blackberry, juniper, cracked pepper, firm volcanic mineral spine, and extraordinary structural precision.",
    iconicStatus: "The definitive masterwork of Mont Brouilly volcanic viticulture."
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
    character: "Ethereal, floral lace: crushed peony, dried rose petal, wild strawberry liqueur, blood orange, and weightless mineral elegance.",
    iconicStatus: "One of the rarest, most sought-after cult natural wines in the world."
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
    character: "Decidedly uncharacteristic for Fleurie: dark, brooding, mineral, spiced blackberry, wet slate, and deep age-worthy tannins.",
    iconicStatus: "Named 'Tardive' because it is harvested late and built for decades of cellaring."
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
    philosophy: "The spiritual founding father of the modern natural wine movement. Mentored by Jules Chauvet in 1973, Marcel abandoned synthetic herbicides and chemical additives in 1981. Old-vine massale selection, organic farming, whole-cluster semi-carbonic fermentation, zero added sulfur (N-bottling), and neutral oak barrel aging.",
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
    philosophy: "Gang of Four titan renowned for unmatched precision in natural vinification. Cultivates ancient vines on the volcanic schist slopes of Côte du Py and Corcelette. Meticulous sorting, extended cool carbonic maceration (3–4 weeks), aging in used DRC barrels, unfined and unfiltered.",
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
    philosophy: "Gang of Four member celebrated for crafting the most ethereal, delicate, and low-alcohol expressions among the group. Focuses on centenarian vines in Morgon and Régnié, picking early for freshness, cold carbonic maceration, and old wood barrel maturation.",
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
    philosophy: "The smallest estate of the Gang of Four (5 hectares). Artisanal biodynamic practices, ancient vines (average 70+ years), natural yeasts, no sulfur at bottling, and extended aging in seasoned Burgundy barrels.",
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
    philosophy: "Enigmatic, reclusive master of natural Gamay. Works isolated, steep parcels of century-old bush vines by hand and horse. Radical zero-intervention philosophy with cold, month-long carbonic fermentations in ancient cellar tunnels.",
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
    philosophy: "Historical 9-hectare clos situated directly on the border with Moulin-à-Vent. Features deep clay-granite soils that yield dark, masculine, structured Fleurie fermented in open wooden tanks with submerged cap (grillage) and neutral foudre maturation.",
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
    philosophy: "Dynamic vanguard leaders revitalizing Chénas. 100% certified organic and biodynamic viticulture, horse-plowed hillside vineyards, semi-carbonic cold vinification, and native yeasts.",
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
    philosophy: "The aristocratic standard-bearer for traditional Burgundian vinification in Beaujolais. Fully destemmed fruit, long macerations with pigeage, parcel-by-parcel vinification of historic climats, and aging in fine French oak casks.",
    keyCuvees: ["Moulin-à-Vent Clos de Rochegrès", "Moulin-à-Vent Clos du Grand Carquelin", "Moulin-à-Vent Champ de Cour", "Morgon Côte du Py"]
  }
];

export const BEAUJOLAIS_FOOD_PAIRINGS = [
  {
    category: "Bistrot & Lyonnais Bouchon",
    wineType: "Red",
    targetWine: "Beaujolais-Villages & Chiroubles (Cru Beaujolais)",
    dish: "Saucisson Chaud de Lyon à la Pistache, Salade Lyonnaise with Poached Egg and Lardons, Terrine de Canard",
    note: "The vibrant, high-toned malic acidity and crunchy red berry fruits of Chiroubles slice through the unctuous pork fat, cured richness, and runny egg yolk, refreshing the palate without heavy tannins.",
    glassware: "Bourgogne Red / Large Tulip Stem (550ml)",
    servingTemp: "13–15°C (55–59°F)",
    decanting: "30 minutes gentle aeration or open directly."
  },
  {
    category: "Poultry & Game Birds",
    wineType: "Red",
    targetWine: "Fleurie & Chénas (Cru Beaujolais)",
    dish: "Roasted Poulet de Bresse with Morel Cream Sauce, Pan-Seared Squab with Redcurrant Reduction",
    note: "The delicate floral peony perfume and silky, weightless tannins of Fleurie complement the succulent tenderness of Bresse poultry, while the earthy morel mushrooms echo Gamay's forest floor nuances.",
    glassware: "Burgundy Pinot Noir Stem (650ml)",
    servingTemp: "14–16°C (57–61°F)",
    decanting: "30 to 45 minutes decanting recommended."
  },
  {
    category: "Roasted Meats & Game",
    wineType: "Red",
    targetWine: "Moulin-à-Vent & Morgon Côte du Py (Old Vines / Vin de Garde)",
    dish: "Slow-Braised Daube de Bœuf Bourguignonne, Roasted Rack of Lamb with Rosemary, Seared Duck Breast",
    note: "With 8–15 years of cellaring, Morgon and Moulin-à-Vent develop profound 'morgonné' sous-bois, black truffle, and dark fruit complexity; their resolved granitic tannins effortlessly bind to the rich proteins of braised beef and duck.",
    glassware: "Large Burgundy Stem (700ml)",
    servingTemp: "15–17°C (59–63°F)",
    decanting: "1 to 2 hours decanting for mature bottlings."
  },
  {
    category: "Artisanal Charcuterie & Pork",
    wineType: "Red",
    targetWine: "Côte de Brouilly (Mont Brouilly Blue Diorite)",
    dish: "Roasted Porchetta with Fennel and Rosemary, Andouillette de Troyes with Dijon Mustard, Blood Pudding (Boudin Noir)",
    note: "The gunflint minerality, wild thyme aromatics, and savory volcanic grip of Mont Brouilly's blue diorite provide structural foil to rich, peppery pork roasts and savory offal specialties.",
    glassware: "Burgundy Stem (600ml)",
    servingTemp: "14–16°C (57–61°F)",
    decanting: "45 minutes decanting."
  },
  {
    category: "Artisanal Cheeses",
    wineType: "Red",
    targetWine: "Juliénas & Régnié (Cru Beaujolais)",
    dish: "Saint-Marcellin AOP, Saint-Félicien, Morbier, 18-Month Comté AOP",
    note: "Unlike aggressive tannic red wines which clash with bloomy rinds, the supple, fine-grained tannins and brambly blackberry fruit of Juliénas and Régnié seamlessly integrate with the creamy, mushroom-scented paste of regional cow's milk cheeses.",
    glassware: "Burgundy Red Stem (550ml)",
    servingTemp: "14–16°C (57–61°F)",
    decanting: "Not required; 15 minutes in glass."
  },
  {
    category: "Fish & Shellfish",
    wineType: "White",
    targetWine: "Beaujolais Blanc (Chardonnay - Pierres Dorées)",
    dish: "Quenelles de Brochet with Sauce Nantua (Pike Quenelles in Crayfish Sauce), Pan-Fried Saône River Perch with Lemon Butter",
    note: "The crisp, limestone-driven acidity and white peach orchard fruit of southern Pierres Dorées Chardonnay cuts the rich, velvety crayfish-butter cream of traditional Lyonnais quenelles.",
    glassware: "Burgundy White Wine Stem (450ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not recommended."
  },
  {
    category: "Goat Cheeses & Salads",
    wineType: "White",
    targetWine: "Beaujolais-Villages Blanc (Northern Granite/Clay Chardonnay)",
    dish: "Crottin de Chavignol, Fresh Chèvre Chaud on Sourdough, Asparagus Tart with Gruyère",
    note: "High natural acidity and vibrant citrus-flint minerality in high-altitude northern Beaujolais Chardonnay provide an electric match for the tangy, lactic chalkiness of artisanal goat cheeses.",
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
  tagline: "The Granite & Diorite Kingdom of Gamay: Artisanal Cru Terroir & Natural Wine Revolution",
  summary: "Situated directly south of Burgundy's Mâconnais and north of Lyon, Beaujolais is a historic French wine region defined by a dramatic geological divide. In the northern crus and villages, rolling hills of ancient Hercynian pink granite (gore/arène) and blue volcanic diorite (côrnes vertes) yield structured, mineral, age-worthy red wines from Gamay Noir à Jus Blanc. In the southern Bas-Beaujolais, undulating clay-limestone slopes of warm golden stones (Pierres Dorées) craft supple, vivacious, fruit-forward wines. Globally renowned as the cradle of the natural wine movement spearheaded by Jules Chauvet and the legendary 'Gang of Four', Beaujolais blends traditional whole-cluster semi-carbonic maceration with serious Burgundian barrel aging, proving that Cru Gamay rivals the noble longevity of the Côte d'Or.",
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
      role: "The undisputed noble soul of Beaujolais. An ancient natural cross of Pinot Noir × Gouais Blanc characterized by high malic acidity, thin anthocyanin-rich skins, low astringent tannins, and expressive aromatics of wild strawberry, crunchy red cherry, peony, violet, and granite minerality. In granitic and schist terroirs, it achieves immense phenolic depth, displaying 'morgonner' development into spiced cherry, truffle, and sous-bois with 10–25 years of age."
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
    palate: "Vibrant, energetic attack framed by refreshing natural acidity and fine-grained, chalky-granitic tannins. Youthful expressions dance with crunchy red berry and floral peony notes, while mature Cru bottlings evolve savory secondary layers of dark kirsch, wild game, black truffle, and stony gunflint minerality ('morgonner')."
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
