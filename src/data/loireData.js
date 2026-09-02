// Authoritative Loire Valley Wine Knowledge Base & Master Sommelier Datasets
// CMS Level 3 (Advanced Sommelier) & Master Sommelier Standards
// Comprehensive catalog: 4 Major Sectors (Pays Nantais, Anjou-Saumur, Touraine, Centre-Loire),
// Muscadet Sèvre-et-Maine Sur Lie & Crus Communaux (Clisson, Gorges, Le Pallet, Château-Thébaud, Monnières),
// Savennières (Coulée de Serrant Monopole AOC, Roche aux Moines), Quarts de Chaume Grand Cru,
// Saumur-Champigny, Chinon (Varennes Gravel vs. Cravant Tuffeau), Bourgueil, Vouvray & Montlouis-sur-Loire,
// Cour-Cheverny (Romorantin), Sancerre & Pouilly-Fumé on Terres Blanches, Caillottes, and Silex,
// Armorican Massif Schist/Orthogneiss vs. Paris Basin Turonian Tuffeau & Kimmeridgian Marl,
// Prestige Cuvées (Clos Rougeard, Dagueneau Silex, Huet, Nicolas Joly, Cotat, Vacheron), and Iconic Vignerons.

// ============================================================================
// 1. LOIRE VALLEY SUBREGIONS & VITICULTURAL SECTORS
// ============================================================================

export const LOIRE_SUBREGIONS = [
  {
    id: 'pays-nantais',
    name: "Pays Nantais (Atlantic Coast)",
    lat: 47.1500,
    lng: -1.3500,
    appellations: ["Muscadet Sèvre-et-Maine AOC", "Muscadet Sèvre-et-Maine Sur Lie", "Cru Communal Clisson", "Cru Communal Gorges", "Cru Communal Le Pallet", "Cru Communal Monnières-Saint-Fiacre", "Cru Communal Château-Thébaud", "Cru Communal Goulaine", "Muscadet Coteaux de la Loire AOC", "Muscadet Côtes de Grandlieu AOC", "Gros Plant du Pays Nantais AOC"],
    grapeVarieties: ["Melon de Bourgogne (Muscadet)", "Folle Blanche (Gros Plant)"],
    soilTypes: ["Armorican Massif Metamorphic Bedrock", "Orthogneiss", "Clisson Granite", "Gorges Gabbro & Amphibolite", "Mica-Schist"],
    climate: "Pure maritime oceanic climate with high humidity, mild winters, cool summers, and regular Atlantic rain showers.",
    terroir: "Located at the western terminus of the Loire River where it empties into the Atlantic Ocean. Ancient eroded crystalline bedrock of the Armorican Massif (Orthogneiss, Granite, and Gabbro). Shallow, well-draining soils rich in minerals force vine roots deep into fractured granite and gabbro.",
    focus: "Crystalline, bone-dry, saline white wines: Melon de Bourgogne aged Sur Lie for 18-36 months in Crus Communaux (Clisson, Gorges); lemon zest, green apple, oyster shell, sea spray, struck flint, and fine yeast texture.",
    description: "The Atlantic gateway to the Loire Valley, centered around the Sèvre and Maine rivers south of Nantes. Home to France's most iconic oyster wine (Muscadet Sèvre-et-Maine) and celebrated 18-36 month lees-aged Crus Communaux."
  },
  {
    id: 'anjou-saumur',
    name: "Anjou-Saumur (Middle Loire)",
    lat: 47.3000,
    lng: -0.4000,
    appellations: ["Savennières AOC", "Savennières Coulée de Serrant AOC", "Savennières Roche aux Moines AOC", "Quarts de Chaume Grand Cru AOC", "Coteaux du Layon AOC", "Coteaux du Layon Premier Cru Chaume AOC", "Bonnezeaux AOC", "Saumur-Champigny AOC", "Saumur Blanc AOC", "Saumur Brut AOC", "Anjou Blanc AOC", "Anjou Rouge AOC", "Cabernet d'Anjou AOC", "Coteaux de l'Aubance AOC"],
    grapeVarieties: ["Chenin Blanc (Pineau de la Loire)", "Cabernet Franc (Breton)", "Cabernet Sauvignon", "Grolleau", "Pineau d'Aunis"],
    soilTypes: ["Anjou Noir (Dark Armorican Schist, Volcanic Spilite, Rhyolite)", "Anjou Blanc (White Turonian Tuffeau Limestone)", "Sandstone & Siliceous Gravel"],
    climate: "Maritime transitional climate with microclimatic shelter provided by the Mauges hills and autumn river mists from the Layon River.",
    terroir: "Geological crossroads: The dark metamorphic Schist and volcanic spilite of 'Anjou Noir' in the west transitions into the soft white Cretaceous tuffeau limestone of 'Anjou Blanc' and Saumur in the east.",
    focus: "Dry mineral Chenin Blanc masterworks (Savennières), celestial noble rot botrytized dessert wines (Quarts de Chaume Grand Cru), and aristocratic, floral Cabernet Franc (Saumur-Champigny / Clos Rougeard).",
    description: "The historical viticultural engine of the Middle Loire, encompassing dramatic schist slopes overlooking the Loire River, the botrytis-nurturing Layon Valley, and the tuffeau limestone caves of Saumur."
  },
  {
    id: 'touraine',
    name: "Touraine (The Garden of France)",
    lat: 47.3500,
    lng: 0.7000,
    appellations: ["Chinon AOC", "Bourgueil AOC", "Saint-Nicolas-de-Bourgueil AOC", "Vouvray AOC", "Montlouis-sur-Loire AOC", "Cheverny AOC", "Cour-Cheverny AOC", "Touraine AOC", "Touraine-Amboise AOC", "Touraine-Mesland AOC", "Jasnières AOC", "Coteaux du Loir AOC"],
    grapeVarieties: ["Cabernet Franc (Breton)", "Chenin Blanc", "Romorantin", "Pineau d'Aunis", "Gamay", "Côt (Malbec)", "Sauvignon Blanc"],
    soilTypes: ["Craie Tuffeau (Turonian Chalk Limestone)", "Varennes (Alluvial Sand and Gravel Terraces)", "Perruches (Siliceous Clay with Flint/Silex)", "Aubuis (Calcareous Clay over Tuffeau)"],
    climate: "Temperate semi-oceanic with continental warmth in summer and protective river valley slopes.",
    terroir: "The heartland of Turonian chalk (tuffeau). Porous white limestone cliffs into which magnificent châteaux and subterranean wine cellars are carved. Gravel terraces along the Vienne River provide early-ripening warmth.",
    focus: "Benchmark red Cabernet Franc expressions (Chinon, Bourgueil), versatile Chenin Blanc across all sweetness levels (Vouvray, Montlouis), and the ultra-rare ancient Romorantin grape (Cour-Cheverny).",
    description: "The Renaissance center of the Loire, celebrated by François Rabelais. Famous for the gravel terraces and tuffeau slopes of Chinon, Bourgueil, Vouvray, and the royal forests of Cheverny."
  },
  {
    id: 'centre-loire',
    name: "Centre-Loire (Upper Loire)",
    lat: 47.3300,
    lng: 2.8300,
    appellations: ["Sancerre AOC", "Pouilly-Fumé AOC", "Menetou-Salon AOC", "Quincy AOC", "Reuilly AOC", "Coteaux du Giennois AOC", "Châteaumeillant AOC", "Pouilly-sur-Loire AOC"],
    grapeVarieties: ["Sauvignon Blanc", "Pinot Noir", "Chasselas"],
    soilTypes: ["Terres Blanches (Upper Jurassic Kimmeridgian Marl rich in Exogyra virgula oysters)", "Caillottes & Griottes (Oxfordian Pebbly Hard Limestone)", "Silex (Cretaceous Flint & Quartz Stones on Hilltops)"],
    climate: "Continental climate with severe winter frosts, warm summers, and substantial diurnal temperature swings.",
    terroir: "Rolling hillside amphitheaters perched above the upper Loire River on the geological rim of the Paris Basin. Direct continuation of the Kimmeridgian and Oxfordian limestone strata found in Chablis: Terres Blanches (Kimmeridgian marl), Caillottes (pebbly limestone), and Silex (flint).",
    focus: "The global summit of Sauvignon Blanc: laser mineral tension, gunflint smoke, pink grapefruit, lemongrass, crushed oyster shell, and refined Pinot Noir reds and rosés.",
    description: "The easternmost sector of the Loire Valley, perched 200 km south of Paris. World capital of flint-driven Sauvignon Blanc in Sancerre and Pouilly-Fumé."
  }
];

// ============================================================================
// 2. LOIRE VALLEY CRUS & TOP TERROIRS (AOC)
// ============================================================================

export const LOIRE_GRAND_CRUS = [
  // --------------------------------------------------------------------------
  // ANJOU-SAUMUR GRAND CRUS & PRESTIGE MONOPOLES
  // --------------------------------------------------------------------------
  {
    id: 'quarts-de-chaume-grand-cru',
    name: "Quarts de Chaume Grand Cru (AOC)",
    village: "Rochefort-sur-Loire",
    commune: "Rochefort-sur-Loire",
    subregion: "Anjou-Saumur (Middle Loire)",
    district: "Layon Valley",
    subregionId: 'anjou-saumur',
    districtId: 'layon-valley',
    lat: 47.3361,
    lng: -0.6556,
    areaHa: 43.00,
    aocDecreeYear: 2011,
    establishedYear: 1400,
    elevationRange: "40m – 95m",
    aspect: "Steep south-facing natural amphitheater sheltered from northern winds",
    dominantGrape: "Chenin Blanc (100%)",
    grapeRatio: "Chenin Blanc 100%",
    wineType: "Sweet",
    tier: "grandCru",
    badge: "👑 1st Grand Cru of the Loire",
    baseYield: "25 hl/ha (strictest yield cap in the Loire)",
    minPotentialAbv: "14.5% vol. (min. 298 g/L must sugar; min. 85 g/L residual sugar)",
    soil: "Precambrian Brioverian schist, sandstone (poudingue), and volcanic spilite on steep hillsides overlooking the Layon River.",
    character: "Celestial golden nectar of botrytized noble rot Chenin: dried apricot, candied ginger, saffron, lime blossom, quince paste, beeswax, and piercing, crystalline natural acidity that provides 50-100+ year longevity.",
    legalNotes: "Officially decreed as the very first and only official 'Grand Cru' appellation in the entire Loire Valley by INAO in November 2011. Cryoextraction and chaptalization are strictly prohibited.",
    historicalSignificance: "Named after the historic 'quarts' (best fourth part) of the harvest delivered to the Abbots of Ronceray d'Angers in the Middle Ages.",
    benchmarkProducers: ["Domaine des Baumard", "Domaine FL", "Château Pierre-Bise", "Château de Plaisance", "Domaine Belargus (Ronceray)"],
    famousProducers: ["Domaine des Baumard", "Château Pierre-Bise", "Domaine Belargus"],
    iconicVineyards: ["Amphithéâtre de Chaume (43 ha south-facing bowl)", "Les Quarts"]
  },
  {
    id: 'savennieres-coulee-de-serrant',
    name: "Savennières Coulée de Serrant (AOC Monopole)",
    village: "Savennières",
    commune: "Savennières",
    subregion: "Anjou-Saumur (Middle Loire)",
    district: "Savennières",
    subregionId: 'anjou-saumur',
    districtId: 'savennieres',
    lat: 47.3889,
    lng: -0.6417,
    areaHa: 7.00,
    aocDecreeYear: 1952,
    establishedYear: 1130,
    elevationRange: "50m – 90m",
    aspect: "Steep south / south-east facing hillside ravine sloping directly to the Loire River",
    dominantGrape: "Chenin Blanc (100%)",
    grapeRatio: "Chenin Blanc 100%",
    wineType: "White",
    tier: "grandCru",
    badge: "👑 Biodynamic Monopole Cru",
    baseYield: "30 hl/ha",
    minPotentialAbv: "12.5% vol.",
    soil: "Ancient metamorphic blue schist (schistes pourprés), volcanic spilite, and phtanite on a dramatic south-facing ravine.",
    character: "Uncompromising, intellectual, sovereign dry Chenin: beeswax, dried yellow fruits, chamomile, crushed slate, bitter almond, and monumental mineral grip that demands 10-15 years of bottle age.",
    legalNotes: "A single-estate Monopole AOC owned 100% by the Joly family (Nicolas Joly); certified 100% biodynamic (Demeter / Biodyvin) since 1984.",
    historicalSignificance: "Planted by Cistercian monks in 1130; celebrated as one of France's greatest dry white vineyards for over 800 years.",
    benchmarkProducers: ["Nicolas Joly (Château de la Roche aux Moines)"],
    famousProducers: ["Nicolas Joly"],
    iconicVineyards: ["Coulée de Serrant Ravine (7 ha continuous parcel)"]
  },
  {
    id: 'savennieres-roche-aux-moines',
    name: "Savennières Roche aux Moines (AOC)",
    village: "Savennières",
    commune: "Savennières",
    subregion: "Anjou-Saumur (Middle Loire)",
    district: "Savennières",
    subregionId: 'anjou-saumur',
    districtId: 'savennieres',
    lat: 47.3861,
    lng: -0.6389,
    areaHa: 33.00,
    aocDecreeYear: 2011,
    establishedYear: 1130,
    elevationRange: "40m – 80m",
    aspect: "South-facing rocky promontory overlooking the Loire River",
    dominantGrape: "Chenin Blanc (100%)",
    grapeRatio: "Chenin Blanc 100%",
    wineType: "White",
    tier: "grandCru",
    badge: "👑 Grand Cru Equivalent",
    baseYield: "30 hl/ha",
    minPotentialAbv: "12.5% vol.",
    soil: "Hard volcanic spilite, sandstone, and purple schists with thin stony topsoil.",
    character: "Piercing, aristocratic dry Chenin: candied lemon, crushed stones, flint smoke, dried herbs, and intense saline tension.",
    legalNotes: "Promoted to standalone communal AOC status in 2011 with yield caps equivalent to Grand Cru.",
    benchmarkProducers: ["Domaine aux Moines (Tessa Laroche)", "Domaine Belargus", "Domaine FL", "Château de Plaisance"],
    famousProducers: ["Domaine aux Moines", "Domaine Belargus"],
    iconicVineyards: ["Roche aux Moines Ridge"]
  },
  {
    id: 'saumur-champigny-clos-rougeard',
    name: "Saumur-Champigny 'Le Bourg' (Clos Rougeard)",
    village: "Chacé / Varrains",
    commune: "Chacé",
    subregion: "Anjou-Saumur (Middle Loire)",
    district: "Saumur-Champigny",
    subregionId: 'anjou-saumur',
    districtId: 'saumur-champigny',
    lat: 47.2189,
    lng: -0.0639,
    areaHa: 1.00,
    aocDecreeYear: 1957,
    establishedYear: 1664,
    elevationRange: "35m – 45m",
    aspect: "Flat, gently sloping parcel directly over porous Turonian tuffeau limestone",
    dominantGrape: "Cabernet Franc (100%)",
    grapeRatio: "Cabernet Franc 100%",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Cult Grand Cru Benchmark",
    baseYield: "25 hl/ha",
    minPotentialAbv: "12.5% vol.",
    soil: "Ancient 80-year-old Cabernet Franc vines rooted directly into pure porous Turonian white tuffeau chalk with clay topsoil.",
    character: "The undisputed summit of Cabernet Franc in the world: dark cassis, wild raspberries, crushed limestone, violets, graphite, dried herbs, and silken, seamless, aristocratic tannins of 40+ year longevity.",
    legalNotes: "Aged for 24 months in 100% new French oak barriques inside deep subterranean tuffeau cellars at a constant 11°C.",
    historicalSignificance: "Masterminded by brothers Charly and Nady Foucault across eight generations of organic farming; acquired in 2017 by Martin and Olivier Bouygues (Château Montrose).",
    benchmarkProducers: ["Clos Rougeard (Famille Foucault / Bouygues)"],
    famousProducers: ["Clos Rougeard"],
    iconicVineyards: ["Le Bourg (1.0 ha ancient parcel in Chacé)", "Les Poyeux (2.8 ha)", "Le Clos (3.0 ha)"]
  },

  // --------------------------------------------------------------------------
  // TOURAINE & CENTRE-LOIRE BENCHMARK CLIMATS
  // --------------------------------------------------------------------------
  {
    id: 'chinon-clos-de-l-echo',
    name: "Chinon 'Clos de l'Écho' (Cravant-les-Coteaux)",
    village: "Cravant-les-Coteaux",
    commune: "Chinon",
    subregion: "Touraine (The Garden of France)",
    district: "Chinon",
    subregionId: 'touraine',
    districtId: 'chinon',
    lat: 47.1950,
    lng: 0.3120,
    areaHa: 17.00,
    aocDecreeYear: 1937,
    establishedYear: 1400,
    elevationRange: "50m – 80m",
    aspect: "South-facing hillside overlooking the Vienne River",
    dominantGrape: "Cabernet Franc (100%)",
    grapeRatio: "Cabernet Franc 100%",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Historic Cru Climat",
    baseYield: "38 hl/ha",
    minPotentialAbv: "12.0% vol.",
    soil: "Argilo-silicieux and calcareous clay over dense Turonian tuffeau limestone bedrock.",
    character: "Noble, aristocratic Cabernet Franc: black cherry, crushed violets, pencil lead, dark chocolate, and muscular, age-worthy tannins built for 20-30 years.",
    historicalSignificance: "Celebrated by François Rabelais in Gargantua (1534). Owned and farmed by the Couly-Dutheil family since the early 20th century.",
    benchmarkProducers: ["Couly-Dutheil", "Domaine Bernard Baudry (La Croix Boissée)", "Domaine Olga Raffault (Les Picasses)", "Domaine de la Noblaie"],
    famousProducers: ["Couly-Dutheil", "Bernard Baudry", "Olga Raffault"],
    iconicVineyards: ["Clos de l'Écho", "La Croix Boissée", "Les Picasses (Cravant-les-Coteaux)"]
  },
  {
    id: 'vouvray-clos-du-bourg',
    name: "Vouvray 'Clos du Bourg' (Domaine Huet)",
    village: "Vouvray",
    commune: "Vouvray",
    subregion: "Touraine (The Garden of France)",
    district: "Vouvray",
    subregionId: 'touraine',
    districtId: 'vouvray',
    lat: 47.4117,
    lng: 0.7986,
    areaHa: 6.00,
    aocDecreeYear: 1936,
    establishedYear: 1400,
    elevationRange: "60m – 90m",
    aspect: "Walled south-facing plateau above the Vouvray church",
    dominantGrape: "Chenin Blanc (100%)",
    grapeRatio: "Chenin Blanc 100%",
    wineType: "White",
    tier: "grandCru",
    badge: "👑 Historic Walled Monopole",
    baseYield: "35 hl/ha",
    minPotentialAbv: "12.5% vol.",
    soil: "Thin clay topsoil (only 1 meter) directly over hard Turonian tuffeau limestone (Première Côte de Vouvray).",
    character: "Depending on the vintage, vinified as Sec, Demi-Sec, Moelleux, or Moelleux 1ère Goutte: quince, candied citrus, white truffle, honeyed ginger, and monumental mineral tension of 50+ year longevity.",
    legalNotes: "100% certified biodynamic (Biodyvin / Demeter) since 1990 under the visionary direction of Noël Pinguet.",
    historicalSignificance: "Walled vineyard dating to the 7th century; documented in medieval monastic cartularies as one of the oldest crus in Touraine.",
    benchmarkProducers: ["Domaine Huet", "Domaine Champalou", "François Chidaine", "Domaine Pichot", "Vincent Carême"],
    famousProducers: ["Domaine Huet", "François Chidaine"],
    iconicVineyards: ["Clos du Bourg (6 ha walled clos)", "Le Mont (8 ha)", "Le Haut-Lieu (9 ha)"]
  },
  {
    id: 'sancerre-les-monts-damnes',
    name: "Sancerre 'Les Monts Damnés' (Chavignol)",
    village: "Chavignol",
    commune: "Sancerre",
    subregion: "Centre-Loire (Upper Loire)",
    district: "Sancerre",
    subregionId: 'centre-loire',
    districtId: 'sancerre',
    lat: 47.3389,
    lng: 2.8028,
    areaHa: 28.00,
    aocDecreeYear: 1936,
    establishedYear: 1100,
    elevationRange: "220m – 340m",
    aspect: "Precipitous 45° to 55° south and south-west facing hillside (the 'Damned Mountains')",
    dominantGrape: "Sauvignon Blanc (100%)",
    grapeRatio: "Sauvignon Blanc 100%",
    wineType: "White",
    tier: "grandCru",
    badge: "👑 Sancerre Grand Cru Climat",
    baseYield: "45 hl/ha",
    minPotentialAbv: "12.0% vol.",
    soil: "Pure Terres Blanches: Upper Jurassic Kimmeridgian limestone marl densely packed with fossilized Exogyra virgula oysters.",
    character: "Monumental, chiseled, power and tension: crushed oyster shell, pink grapefruit, lemongrass, gunsmoke, white peach, and laser-like limestone acidity built for 20+ years.",
    historicalSignificance: "Celebrated since the Middle Ages as the supreme cru of Sancerre; nicknamed 'damned' because the slope was so steep that pickers had to harvest on their knees.",
    benchmarkProducers: ["François Cotat", "Pascal Cotat", "Domaine Henri Bourgeois", "Domaine Vacheron", "Edmond Vatan (Clos la Néore)", "Gérard Boulay"],
    famousProducers: ["François Cotat", "Pascal Cotat", "Edmond Vatan", "Gérard Boulay"],
    iconicVineyards: ["Les Monts Damnés (Chavignol's steepest Kimmeridgian face)", "La Grande Côte", "Cul de Beaujeu", "Clos la Néore"]
  },
  {
    id: 'pouilly-fume-silex',
    name: "Pouilly-Fumé 'Silex' (Domaine Didier Dagueneau)",
    village: "Saint-Andelain",
    commune: "Pouilly-sur-Loire",
    subregion: "Centre-Loire (Upper Loire)",
    district: "Pouilly-Fumé",
    subregionId: 'centre-loire',
    districtId: 'pouilly-fume',
    lat: 47.3106,
    lng: 2.9606,
    areaHa: 5.00,
    aocDecreeYear: 1937,
    establishedYear: 1982,
    elevationRange: "200m – 270m",
    aspect: "Highest hill of Saint-Andelain overlooking the Loire",
    dominantGrape: "Sauvignon Blanc (100%)",
    grapeRatio: "Sauvignon Blanc 100%",
    wineType: "White",
    tier: "grandCru",
    badge: "👑 Cult Grand Cru Benchmark",
    baseYield: "35 hl/ha",
    minPotentialAbv: "12.5% vol.",
    soil: "Pure Cretaceous Silex (flint rock and yellow clay over limestone on the summit of the Saint-Andelain hill).",
    character: "Global summit of flinty minerality: struck match, gunmetal smoke, laser citrus, iodine, white peach, wild herbs, and piercing, electric structural tension.",
    legalNotes: "Vinified and matured in custom cigar-shaped oak barrels (barriques cigare) to maximize fine lees contact; farmed biodynamically with draft horses.",
    historicalSignificance: "Created by the visionary, iconoclastic Didier Dagueneau (1956–2008); now masterminded by his son Louis-Benjamin Dagueneau.",
    benchmarkProducers: ["Domaine Didier Dagueneau", "Château de Tracy", "Domaine de Ladoucette (Baron de L)", "Domaine Serge Dagueneau"],
    famousProducers: ["Domaine Didier Dagueneau", "Domaine de Ladoucette"],
    iconicVineyards: ["Colline de Saint-Andelain (Silex hilltop)", "Pur Sang", "Astéroïde (ungrafted pre-phylloxera franc de pied parcel)"]
  }
];

// ============================================================================
// 3. LOIRE VALLEY CRUS COMMUNAUX & PREMIER CRUS
// ============================================================================

export const LOIRE_PREMIER_CRUS = [
  // --------------------------------------------------------------------------
  // PAYS NANTAIS CRUS COMMUNAUX
  // --------------------------------------------------------------------------
  {
    id: 'muscadet-cru-clisson',
    name: "Muscadet Sèvre-et-Maine 'Cru Clisson'",
    village: "Clisson",
    commune: "Clisson",
    subregion: "Pays Nantais (Atlantic Coast)",
    district: "Sèvre-et-Maine",
    subregionId: 'pays-nantais',
    districtId: 'sevre-et-maine',
    lat: 47.0872,
    lng: -1.2828,
    areaHa: 45.00,
    aocDecreeYear: 2011,
    establishedYear: 2000,
    elevationRange: "30m – 65m",
    aspect: "Gentle granite hillsides bordering the Sèvre River",
    dominantGrape: "Melon de Bourgogne (100%)",
    grapeRatio: "Melon de Bourgogne 100%",
    wineType: "White",
    tier: "premierCru",
    badge: "🌟 Cru Communal (24m Lees)",
    baseYield: "45 hl/ha",
    minPotentialAbv: "11.5% vol.",
    soil: "Clisson Granite: coarse-grained, fractured Hercynian granite covered by quartz gravel and sandy-clay topsoil.",
    character: "Rich, powerful, structured Muscadet: dried fruits, ripe quince, candied lemon, crushed gravel, and broad, savory textural weight.",
    legalNotes: "Aged for a mandatory minimum of 24 months on fine lees without racking prior to bottling.",
    benchmarkProducers: ["Domaine de la Pépière (Marc Ollivier & Rémi Branger)", "Domaine de l'Écu (Guy Bossard / Fred Niger)", "Domaine Michel Delhommeau"],
    famousProducers: ["Domaine de la Pépière", "Domaine de l'Écu"],
    iconicVineyards: ["Gras Moutons", "Clos des Briords"]
  },
  {
    id: 'muscadet-cru-gorges',
    name: "Muscadet Sèvre-et-Maine 'Cru Gorges'",
    village: "Gorges",
    commune: "Gorges",
    subregion: "Pays Nantais (Atlantic Coast)",
    district: "Sèvre-et-Maine",
    subregionId: 'pays-nantais',
    districtId: 'sevre-et-maine',
    lat: 47.1017,
    lng: -1.3042,
    areaHa: 38.00,
    aocDecreeYear: 2011,
    establishedYear: 2000,
    elevationRange: "25m – 60m",
    aspect: "Steep amphitheaters along the Sèvre Nantaise",
    dominantGrape: "Melon de Bourgogne (100%)",
    grapeRatio: "Melon de Bourgogne 100%",
    wineType: "White",
    tier: "premierCru",
    badge: "🌟 Cru Communal (24m Lees)",
    baseYield: "45 hl/ha",
    minPotentialAbv: "11.5% vol.",
    soil: "Gabbro de Gorges: dense, altered greenish-black igneous rock rich in pyroxene, magnesium, and iron over deep blue-green clay.",
    character: "Chiseled, austere, hyper-mineral: smoky flint, gunsmoke, preserved lemon, sea salt, and electric, mouth-watering natural acidity built for 15+ years.",
    legalNotes: "Aged for a minimum of 24 months on fine lees; often cellared for 36-48 months before commercial release.",
    benchmarkProducers: ["Domaine Damien Rineau", "Domaine Martin-Luneau", "Domaine Brégeon"],
    famousProducers: ["Domaine Damien Rineau", "Domaine Brégeon"],
    iconicVineyards: ["Coteaux de la Sèvre"]
  },
  {
    id: 'muscadet-cru-le-pallet',
    name: "Muscadet Sèvre-et-Maine 'Cru Le Pallet'",
    village: "Le Pallet",
    commune: "Le Pallet",
    subregion: "Pays Nantais (Atlantic Coast)",
    district: "Sèvre-et-Maine",
    subregionId: 'pays-nantais',
    districtId: 'sevre-et-maine',
    lat: 47.1378,
    lng: -1.3347,
    areaHa: 40.00,
    aocDecreeYear: 2011,
    establishedYear: 2000,
    elevationRange: "20m – 55m",
    aspect: "Sunny south-facing slopes at the confluence of the Sèvre and Sanguèze rivers",
    dominantGrape: "Melon de Bourgogne (100%)",
    grapeRatio: "Melon de Bourgogne 100%",
    wineType: "White",
    tier: "premierCru",
    badge: "🌟 Cru Communal (18m Lees)",
    baseYield: "45 hl/ha",
    minPotentialAbv: "11.5% vol.",
    soil: "Orthogneiss and quartz gravel with amphibolite subsoil.",
    character: "Aromatic, floral, supple, and delicate: white flowers, almond blossom, pear, citrus curd, and silken saline texture.",
    legalNotes: "Aged for a mandatory minimum of 18 months on fine lees.",
    benchmarkProducers: ["Domaine Les Hautes Noëlles", "Château de la Galissonnière"],
    famousProducers: ["Domaine Les Hautes Noëlles"],
    iconicVineyards: ["Sanguèze Slopes"]
  },
  {
    id: 'cour-cheverny-romorantin',
    name: "Cour-Cheverny (100% Romorantin AOC)",
    village: "Cour-Cheverny / Cheverny",
    commune: "Cour-Cheverny",
    subregion: "Touraine (The Garden of France)",
    district: "Cheverny",
    subregionId: 'touraine',
    districtId: 'cour-cheverny',
    lat: 47.5000,
    lng: 1.4500,
    areaHa: 60.00,
    aocDecreeYear: 1993,
    establishedYear: 1519,
    elevationRange: "70m – 120m",
    aspect: "Gentle silica-clay terraces bordering the Sologne royal forests",
    dominantGrape: "Romorantin (100%)",
    grapeRatio: "Romorantin 100%",
    wineType: "White",
    tier: "premierCru",
    badge: "🌟 Historic Heritage Monovarietal",
    baseYield: "45 hl/ha",
    minPotentialAbv: "11.5% vol.",
    soil: "Siliceous sand, clay, and flint gravel over limestone bedrock (Perruches).",
    character: "Ancient, singular, highly original profile: chamomile tea, beeswax, dried white pear, bitter honey, struck stone, and high, bracing natural acidity of remarkable 20+ year aging power.",
    legalNotes: "The only AOC in the world legally dedicated to 100% Romorantin.",
    historicalSignificance: "Introduced to the Loire Valley in 1519 by King François I who ordered 80,000 vines from Burgundy planted around the Château de Romorantin and Chambord.",
    benchmarkProducers: ["Domaine de la Garrelière", "Domaine de la Pagerie", "Philippe Tessier (Les Cocus)", "Hervé Villemade (Domaine du Moulin)", "François Cazin (Le Petit Chambord)"],
    famousProducers: ["Philippe Tessier", "Hervé Villemade", "François Cazin"],
    iconicVineyards: ["Les Cocus (old-vine parcel in Cour-Cheverny)"]
  }
];

// ============================================================================
// 4. LOIRE TECHNICAL REGULATIONS & MASTER SOMMELIER SPECIFICATIONS
// ============================================================================

export const LOIRE_TECHNICAL_REGULATIONS = {
  geology: {
    system: "Armorican Metamorphic Massif vs. Paris Sedimentary Basin",
    description: "The 1,000 km course of the Loire River traverses two completely distinct geological universes: the ancient, eroded crystalline and metamorphic basement of the Armorican Massif in the west (Pays Nantais, Anjou Noir) and the Mesozoic marine sedimentary limestone formations of the Paris Basin in the east (Saumur, Touraine, Centre-Loire).",
    formations: [
      {
        name: "Craie Tuffeau (Turonian Chalk Limestone)",
        period: "Upper Cretaceous (Turonian, approx. 90 Million Years BP)",
        keyAreas: ["Saumur-Champigny", "Chinon", "Bourgueil", "Vouvray", "Montlouis"],
        wineImpact: "Soft, highly porous white marine limestone composed of microscopic bryozoan and foraminifera fossils. Acts as an enormous sponge, absorbing winter rains and feeding vine roots with consistent moisture throughout dry summers. Imparts vibrant acidity, floral delicacy, and fine mineral tannins to Chenin Blanc and Cabernet Franc."
      },
      {
        name: "Terres Blanches (Kimmeridgian Limestone Marl)",
        period: "Upper Jurassic (Kimmeridgian, approx. 150 Million Years BP)",
        keyAreas: ["Sancerre (Chavignol - Les Monts Damnés)", "Menetou-Salon"],
        wineImpact: "Dense white limestone clay densely fossilized with the ancient comma-shaped oyster Exogyra virgula. Produces muscular, structured, age-worthy Sauvignon Blanc with deep mid-palate weight and crushed-shell minerality."
      },
      {
        name: "Silex (Cretaceous Flint)",
        period: "Upper Cretaceous (approx. 85 Million Years BP)",
        keyAreas: ["Pouilly-Fumé (Colline de Saint-Andelain)", "Sancerre (Eastern Hillsides)"],
        wineImpact: "Nodules of pure cryptocrystalline quartz embedded in clay on hilltop crests. Highly reflective, heating grape clusters while imparting the unmistakable 'pierre à fusil' (struck gunflint) aroma, razor-sharp acidity, and laser precision."
      },
      {
        name: "Caillottes & Griottes (Oxfordian Limestone)",
        period: "Upper Jurassic (Oxfordian, approx. 160 Million Years BP)",
        keyAreas: ["Sancerre (Bué, Verdigny, Sury-en-Vaux)"],
        wineImpact: "Shallow, stony, chalky soils covered with small, weathered limestone pebbles. Fast-draining and warm, producing aromatic, floral, fresh, and immediately charming Sauvignon Blanc."
      },
      {
        name: "Armorican Schist & Volcanic Spilite (Anjou Noir)",
        period: "Precambrian / Paleozoic (approx. 500+ Million Years BP)",
        keyAreas: ["Savennières", "Coulée de Serrant", "Quarts de Chaume"],
        wineImpact: "Dark purple and blue metamorphic schists, phtanite, and volcanic spilite. Heat-retentive and acidic, producing monumental, bone-dry, phenolic Chenin Blanc and ultra-concentrated botrytized sweet wines."
      }
    ]
  },

  climatology: {
    system: "Maritime Oceanic to Semi-Continental",
    description: "The Loire acts as a climatic highway. The Atlantic west enjoys mild oceanic moderation, while the interior Upper Loire experiences true continental temperature extremes with severe spring frost threats.",
    winds: [
      {
        name: "Le Vent d'Ouest (Atlantic Westerly Winds)",
        effect: "Moist oceanic air that moderates coastal temperatures and provides humidity for sweet botrytis development along the Layon and Ciron tributaries."
      },
      {
        name: "River Valley Microthermal Funnel",
        effect: "The broad expanse of the Loire River reflects solar radiation and generates gentle thermal air currents that warm steep hillside vineyards and ward off early autumn frosts."
      }
    ]
  },

  grapes: {
    system: "Loire Valley Ampelographic Taxonomy & Authorized Cépages",
    description: "The Loire is world-renowned for pure, single-varietal winemaking. Melon de Bourgogne rules the coast, Chenin Blanc and Cabernet Franc dominate the central river valleys, and Sauvignon Blanc reigns in the continental east.",
    major: [
      {
        id: 'chenin-blanc',
        name: "Chenin Blanc (Pineau de la Loire)",
        percentage: 100,
        type: "White",
        epicenter: "Anjou-Saumur & Touraine (Vouvray, Savennières, Quarts de Chaume)",
        profile: "Naturally high tartaric acidity, extraordinary versatility across dry (Sec), off-dry (Demi-Sec), sweet (Moelleux), botrytized (Doux), and sparkling (Brut). Aromas of quince, green apple, chamomile, beeswax, lanolin, honey, saffron, and crushed stones.",
        role: "The noble shapeshifter of the Loire Valley with unmatched 50-100+ year aging potential.",
        benchmarkCuvees: ["Domaine Huet Vouvray Clos du Bourg", "Nicolas Joly Coulée de Serrant", "Quarts de Chaume Grand Cru"]
      },
      {
        id: 'sauvignon-blanc',
        name: "Sauvignon Blanc",
        percentage: 100,
        type: "White",
        epicenter: "Centre-Loire (Sancerre, Pouilly-Fumé)",
        profile: "High natural acidity, pyrazines, mineral salinity. Aromas of pink grapefruit, lemongrass, gooseberry, gunsmoke (pierre à fusil), flint, crushed chalk, and boxwood.",
        role: "Global benchmark for pure, unoaked or lightly-oaked mineral white wine.",
        benchmarkCuvees: ["Didier Dagueneau Silex", "François Cotat Les Monts Damnés", "Domaine Vacheron Les Romains"]
      },
      {
        id: 'cabernet-franc',
        name: "Cabernet Franc (Breton)",
        percentage: 100,
        type: "Red",
        epicenter: "Touraine & Anjou-Saumur (Chinon, Bourgueil, Saumur-Champigny)",
        profile: "Medium body, vibrant acidity, fine-grained chalky tannins. Aromas of fresh violets, wild raspberry, blackcurrant, graphite, bell pepper, tobacco leaf, and forest floor.",
        role: "The undisputed monarch of Loire red wines.",
        benchmarkCuvees: ["Clos Rougeard Le Bourg", "Bernard Baudry La Croix Boissée", "Olga Raffault Les Picasses"]
      },
      {
        id: 'melon-de-bourgogne',
        name: "Melon de Bourgogne (Muscadet)",
        percentage: 100,
        type: "White",
        epicenter: "Pays Nantais (Muscadet Sèvre-et-Maine)",
        profile: "Subtle aromatics, high natural acidity, saline minerality. Aromas of green apple, lemon peel, sea spray, oyster shell, and bready yeast texture.",
        role: "Single-varietal master of Atlantic seafood pairing.",
        benchmarkCuvees: ["Domaine de la Pépière Clos des Briords", "Domaine de l'Écu Orthogneiss"]
      }
    ],
    heritage: [
      {
        name: "Romorantin",
        type: "White",
        epicenter: "Cour-Cheverny AOC",
        role: "Rare ancient variety introduced by King François I in 1519; produces long-lived dry whites with aromas of chamomile, beeswax, and quince."
      },
      {
        name: "Pineau d'Aunis (Chenin Noir)",
        type: "Red",
        epicenter: "Coteaux du Loir & Touraine",
        role: "Ancient red variety producing pale, light-bodied reds and rosés with intense white pepper, wild strawberry, and spice."
      },
      {
        name: "Gros Plant (Folle Blanche)",
        type: "White",
        epicenter: "Pays Nantais",
        role: "Ultra-crisp, high-acid white grape traditionally paired with raw shellfish."
      }
    ]
  },

  classification: {
    system: "Loire Valley Quality Hierarchy & Sweetness Classifications",
    description: "The Loire Valley features strict statutory production standards:",
    pyramid: [
      {
        tier: "Grand Cru Appellation (Quarts de Chaume Grand Cru)",
        frenchTerm: "Grand Cru de la Loire",
        criteria: "Sole Grand Cru in the Loire Valley (decreed 2011). 100% noble rot / passerillage Chenin Blanc, yield capped at 25 hl/ha, min. 298 g/L must sugar.",
        aging: "Minimum 12–18 months",
        yield: "Max 25 hl/ha",
        examples: ["Quarts de Chaume Grand Cru"]
      },
      {
        tier: "Premier Cru Appellations & Monopoles",
        frenchTerm: "Premiers Crus & Monopoles",
        criteria: "Top delimited terroirs: Savennières Coulée de Serrant (Monopole AOC), Savennières Roche aux Moines AOC, Coteaux du Layon Premier Cru Chaume AOC.",
        aging: "12–24 months",
        yield: "Max 30–35 hl/ha",
        examples: ["Coulée de Serrant", "Roche aux Moines", "Premier Cru Chaume"]
      },
      {
        tier: "Crus Communaux du Muscadet",
        frenchTerm: "Crus Communaux du Vignoble Nantais",
        criteria: "10 officially recognized communal crus in Muscadet Sèvre-et-Maine (Clisson, Gorges, Le Pallet, Monnières-Saint-Fiacre, Château-Thébaud, Goulaine, Mouzillon-Tillières, Vallet, La Haye-Fouassière, Champtoceaux). Mandatory extended aging on fine lees for 18 to 36 months without racking.",
        aging: "18 to 36 months sur lie",
        yield: "Max 45 hl/ha",
        examples: ["Cru Clisson", "Cru Gorges", "Cru Le Pallet"]
      },
      {
        tier: "Communal & Village AOCs",
        frenchTerm: "Appellations Communales",
        criteria: "Sancerre, Pouilly-Fumé, Vouvray, Chinon, Saumur-Champigny, Bourgueil.",
        aging: "6–18 months",
        yield: "Max 45–55 hl/ha",
        examples: ["Sancerre", "Vouvray", "Chinon", "Saumur-Champigny"]
      }
    ],
    sweetnessRules: [
      {
        style: "Sec (Dry)",
        sugarLevel: "< 4 g/L residual sugar (or up to 8 g/L if total acidity is within 2 g/L of sugar)",
        character: "Bone-dry, mineral tension."
      },
      {
        style: "Demi-Sec (Off-Dry / Semi-Dry)",
        sugarLevel: "4 g/L to 12 g/L residual sugar (or up to 18 g/L)",
        character: "Subtle fruit sweetness balanced by brisk acidity."
      },
      {
        style: "Moelleux (Sweet)",
        sugarLevel: "12 g/L to 45 g/L residual sugar",
        character: "Rich, luscious, honeyed yellow fruits."
      },
      {
        style: "Doux / Sélection de Grains Nobles (Very Sweet / Botrytized)",
        sugarLevel: "> 45 g/L (often 80–150+ g/L)",
        character: "Unctuous noble rot nectar with celestial longevity."
      }
    ]
  },

  vinification: {
    system: "Sur Lie Maturation, Neutral Cask Aging & Biodynamics",
    description: "Loire enology emphasizes terroir purity:",
    traditions: [
      {
        name: "Sur Lie Maturation (Muscadet)",
        frenchTerm: "Élevage Sur Lie",
        description: "Wine remains on its fine fermentation lees throughout the entire winter following harvest. Bottled directly off the lees without racking or filtration between March 1 and November 30 (or up to 36 months for Crus Communaux).",
        sommelierImpact: "Imparts a subtle pétillance (natural carbon dioxide prickle), creamy mid-palate roundness, and autolytic bread dough aromatics."
      },
      {
        name: "Subterranean Tuffeau Cellar Aging",
        frenchTerm: "Caves Troglodytiques",
        description: "Subterranean cellars carved directly into Turonian chalk limestone maintain a constant year-round temperature of 10–12°C and high humidity (90%), providing ideal conditions for multi-year barrel aging of Cabernet Franc and Chenin Blanc.",
        sommelierImpact: "Promotes slow, flawless phenolic maturation without thermal shock."
      }
    ]
  },

  aging: {
    vintage: {
      minTotalMonths: 6,
      minWoodMonths: 0,
      declarationCapPct: 100,
      rule: "Top Savennières, Vouvray Moelleux, and Clos Rougeard require 10-20 years to reveal their full complexity and can age for 50-100 years.",
      description: "Chenin Blanc is virtually immortal in the cellar, evolving from crisp citrus into white truffles, honey, and beeswax."
    }
  }
};

// ============================================================================
// 5. LOIRE PRESTIGE CUVÉES & BENCHMARK VIGNERONS
// ============================================================================

export const LOIRE_PRESTIGE_CUVEES = [
  {
    id: 'clos-rougeard-le-bourg',
    name: "Clos Rougeard Saumur-Champigny 'Le Bourg'",
    producer: "Clos Rougeard",
    estate: "Domaine Clos Rougeard (Chacé)",
    debutVintage: "1664 Historic Roots / 1960s Cult",
    vintageDebut: "1960",
    appellation: "Saumur-Champigny AOC",
    village: "Chacé",
    subregion: "Anjou-Saumur (Middle Loire)",
    areaHa: 1.00,
    wineType: "Red",
    dominantGrape: "Cabernet Franc (100%)",
    grapeComposition: "Cabernet Franc 100%",
    blend: "Cabernet Franc 100%",
    classification: "The Sovereign Cult Benchmark of Cabernet Franc",
    status: "The Romanée-Conti of the Loire Valley",
    terroir: "Centenarian 80-year-old vines planted directly on porous Turonian white tuffeau limestone in Chacé.",
    winemaking: "Aged 24 months in 100% new French oak barriques inside deep, cold subterranean tuffeau cellars.",
    historicalLore: "Farmed organically for eight generations by the Foucault family (Charly and Nady). Acquired in 2017 by the Bouygues brothers.",
    character: "Aristocratic, silken, sublime cassis, crushed violets, graphite, truffle, cigar box, and seamless, gossamer tannins of 40+ year longevity.",
    iconicStatus: "The most legendary and sought-after Cabernet Franc on Earth.",
    prominenceRank: 1
  },
  {
    id: 'dagueneau-silex',
    name: "Domaine Didier Dagueneau Pouilly-Fumé 'Silex'",
    producer: "Domaine Didier Dagueneau",
    estate: "Domaine Didier Dagueneau (Saint-Andelain)",
    debutVintage: "1985",
    vintageDebut: "1985",
    appellation: "Pouilly-Fumé AOC",
    village: "Saint-Andelain",
    subregion: "Centre-Loire (Upper Loire)",
    areaHa: 5.00,
    wineType: "White",
    dominantGrape: "Sauvignon Blanc (100%)",
    grapeComposition: "Sauvignon Blanc 100%",
    blend: "Sauvignon Blanc 100%",
    classification: "Cult Benchmark Sauvignon Blanc",
    status: "The supreme global benchmark of flint-driven Sauvignon",
    terroir: "Pure Cretaceous flint (silex) atop the highest hill of Saint-Andelain overlooking the Loire.",
    winemaking: "Fermented and aged in custom cigar-shaped oak barrels; biodynamic farming with horses.",
    historicalLore: "Created by the iconoclastic genius Didier Dagueneau (1956–2008); now carried forward by Louis-Benjamin Dagueneau.",
    character: "Laser-focused gunsmoke, struck match, pink grapefruit, iodine, white peach, crushed rocks, and electric, diamond-pure mineral tension.",
    iconicStatus: "The world's most revered expression of Sauvignon Blanc.",
    prominenceRank: 2
  },
  {
    id: 'huet-clos-du-bourg-moelleux-premiere-goutte',
    name: "Domaine Huet Vouvray 'Clos du Bourg' Moelleux 1ère Goutte",
    producer: "Domaine Huet",
    estate: "Domaine Huet (Vouvray)",
    debutVintage: "1928",
    vintageDebut: "1928",
    appellation: "Vouvray AOC",
    village: "Vouvray",
    subregion: "Touraine (The Garden of France)",
    areaHa: 6.00,
    wineType: "White",
    dominantGrape: "Chenin Blanc (100%)",
    grapeRatio: "Chenin Blanc 100%",
    blend: "Chenin Blanc 100%",
    classification: "Immortal Masterwork of Chenin Blanc",
    status: "Ancient 7th-century walled clos on the Première Côte de Vouvray",
    terroir: "Thin clay topsoil directly over deep Turonian chalk (tuffeau) on a south-facing walled plateau.",
    winemaking: "100% biodynamic; fermented in neutral demi-muids; harvested in successive selective passes (tries).",
    historicalLore: "Gaston Huet (1910–2002) survived WWII POW camp and crafted legendary centenarian vintages (1947, 1959, 1989, 1990).",
    character: "Candied quince, honeysuckle, dried apricot, saffron, white truffle, ginger, and immortal, electric acidity of 100+ year longevity.",
    iconicStatus: "The sovereign benchmark of sweet Chenin Blanc.",
    prominenceRank: 3
  },
  {
    id: 'nicolas-joly-coulee-de-serrant',
    name: "Nicolas Joly Savennières 'Coulée de Serrant'",
    producer: "Nicolas Joly",
    estate: "Château de la Roche aux Moines",
    debutVintage: "1130 Monastic Legacy",
    vintageDebut: "1130",
    appellation: "Savennières Coulée de Serrant AOC",
    village: "Savennières",
    subregion: "Anjou-Saumur (Middle Loire)",
    areaHa: 7.00,
    wineType: "White",
    dominantGrape: "Chenin Blanc (100%)",
    grapeComposition: "Chenin Blanc 100%",
    blend: "Chenin Blanc 100%",
    classification: "Biodynamic Monopole Cru",
    status: "The philosophical cathedral of biodynamic Chenin Blanc",
    terroir: "Steep south-facing schist ravine with volcanic spilite sloping directly to the Loire River.",
    winemaking: "100% biodynamic pioneer (Demeter / Renaissance des Appellations); aged in neutral oak casks.",
    historicalLore: "Planted by Cistercian monks in 1130; farmed as an independent single-estate AOC by Nicolas and Virginie Joly.",
    character: "Beeswax, bruised apple, chamomile, crushed slate, orange peel, bitter almond, and monumental phenolic grip that evolves over days.",
    iconicStatus: "The intellectual monument of dry Chenin Blanc.",
    prominenceRank: 4
  },
  {
    id: 'francois-cotat-les-monts-damnes',
    name: "François Cotat Sancerre 'Les Monts Damnés'",
    producer: "François Cotat",
    estate: "Domaine François Cotat (Chavignol)",
    debutVintage: "1940s Historic Chavignol",
    vintageDebut: "1940",
    appellation: "Sancerre AOC",
    village: "Chavignol",
    subregion: "Centre-Loire (Upper Loire)",
    areaHa: 1.50,
    wineType: "White",
    dominantGrape: "Sauvignon Blanc (100%)",
    grapeComposition: "Sauvignon Blanc 100%",
    blend: "Sauvignon Blanc 100%",
    classification: "Artisanal Cult Benchmark of Sancerre",
    status: "Unfiltered, late-harvested Kimmeridgian marl perfection",
    terroir: "Precipitous 50° slope of pure Kimmeridgian limestone marl (Terres Blanches) in Chavignol.",
    winemaking: "Harvested exceptionally late; fermented with native yeasts in ancient, neutral wooden demi-muids; bottled unfined and unfiltered.",
    historicalLore: "Crafted by cousins François and Pascal Cotat; defies standard green Sancerre tropes with monumental aging power.",
    character: "Crushed oyster shell, pink grapefruit, white peach, beeswax, gunflint smoke, and colossal, textured mineral tension.",
    iconicStatus: "The artisanal summit of traditional Sancerre.",
    prominenceRank: 5
  }
];

// ============================================================================
// 6. LOIRE ICONIC VIGNERONS & BENCHMARK ESTATES
// ============================================================================

export const LOIRE_ICONIC_DOMAINES = [
  {
    id: 'clos-rougeard',
    name: "Clos Rougeard",
    commune: "Chacé",
    village: "Chacé",
    subregion: "Anjou-Saumur",
    vigneron: "Cyril Chirouze & Nady Foucault (Historic Legacy)",
    proprietor: "Martin & Olivier Bouygues",
    wineType: "Dual",
    philosophy: "Organic viticulture for centuries; 24 months in barriques in cold tuffeau cellars; the global summit of Cabernet Franc.",
    keyCuvees: [
      "Saumur-Champigny 'Le Bourg'",
      "Saumur-Champigny 'Les Poyeux'",
      "Saumur-Champigny 'Le Clos'",
      "Saumur Blanc 'Brézé' (100% Chenin Blanc)"
    ],
    iconicVineyards: ["Le Bourg (1.0 ha)", "Les Poyeux (2.8 ha)", "Le Clos (3.0 ha)", "Brézé Hillside"]
  },
  {
    id: 'domaine-didier-dagueneau',
    name: "Domaine Didier Dagueneau",
    commune: "Saint-Andelain",
    village: "Saint-Andelain",
    subregion: "Centre-Loire",
    vigneron: "Louis-Benjamin Dagueneau",
    proprietor: "Famille Dagueneau",
    wineType: "White",
    philosophy: "Pure silex terroir expression, ultra-low yields, custom cigar-shaped barrels, and uncompromising biodynamic precision.",
    keyCuvees: [
      "Pouilly-Fumé 'Silex'",
      "Pouilly-Fumé 'Pur Sang'",
      "Pouilly-Fumé 'Buisson Renard'",
      "Pouilly-Fumé 'Astéroïde' (Ungrafted Pre-Phylloxera)",
      "Sancerre 'Le Mont Damné'"
    ],
    iconicVineyards: ["Colline de Saint-Andelain", "La Folie", "Les Monts Damnés"]
  },
  {
    id: 'domaine-huet',
    name: "Domaine Huet",
    commune: "Vouvray",
    village: "Vouvray",
    subregion: "Touraine",
    vigneron: "Benjamin Joliveau",
    proprietor: "Hwang Family",
    wineType: "White",
    philosophy: "Biodynamic pioneer since 1990; single-climat expressions of Chenin Blanc across all sweetness levels (Sec, Demi-Sec, Moelleux).",
    keyCuvees: [
      "Vouvray 'Clos du Bourg' (Sec, Demi-Sec, Moelleux)",
      "Vouvray 'Le Mont'",
      "Vouvray 'Le Haut-Lieu'",
      "Vouvray 'Cuvée Constance' (Ultra-Rare Botrytis Essence)"
    ],
    iconicVineyards: ["Clos du Bourg (6 ha)", "Le Mont (8 ha)", "Le Haut-Lieu (9 ha)"]
  },
  {
    id: 'domaine-vacheron',
    name: "Domaine Vacheron",
    commune: "Sancerre",
    village: "Sancerre",
    subregion: "Centre-Loire",
    vigneron: "Jean-Laurent & Jean-Dominique Vacheron",
    proprietor: "Famille Vacheron",
    wineType: "Dual",
    philosophy: "Certified 100% biodynamic (Biodyvin); single-vineyard parcel bottlings on flint (silex) and Kimmeridgian marl.",
    keyCuvees: [
      "Sancerre 'Les Romains' (Pure Silex)",
      "Sancerre 'Le Pavé'",
      "Sancerre 'Le Paradis'",
      "Sancerre 'Belle Dame' (100% Pinot Noir on Silex)"
    ],
    iconicVineyards: ["Les Romains (Silex)", "Le Pavé", "Belle Dame"]
  },
  {
    id: 'domaine-bernard-baudry',
    name: "Domaine Bernard Baudry",
    commune: "Cravant-les-Coteaux",
    village: "Cravant-les-Coteaux",
    subregion: "Touraine",
    vigneron: "Matthieu Baudry & Bernard Baudry",
    proprietor: "Famille Baudry",
    wineType: "Red",
    philosophy: "Geological masterclass in Chinon: separate bottlings on gravel (Les Granges), tuffeau (Le Clos Guillot), and limestone crests.",
    keyCuvees: [
      "Chinon 'La Croix Boissée' (Tuffeau Chalk Summit)",
      "Chinon 'Le Clos Guillot'",
      "Chinon 'Les Grézeaux' (Old Vines on Gravel)",
      "Chinon 'Les Granges'"
    ],
    iconicVineyards: ["La Croix Boissée (Limestone Amphitheater)", "Le Clos Guillot", "Les Grézeaux"]
  },
  {
    id: 'domaine-de-la-pepiere',
    name: "Domaine de la Pépière",
    commune: "Maisdon-sur-Sèvre",
    village: "Maisdon-sur-Sèvre",
    subregion: "Pays Nantais",
    vigneron: "Rémi Branger & Gwénaëlle Croix",
    proprietor: "Branger & Croix",
    wineType: "White",
    philosophy: "Biodynamic pioneer in Muscadet; single-terroir bottlings on Clisson granite and Gabbro; unhurried sur lie aging.",
    keyCuvees: [
      "Muscadet Sèvre-et-Maine 'Clos des Briords' (Old Vine Granite)",
      "Muscadet Cru Communal 'Clisson'",
      "Muscadet Cru Communal 'Gorges'",
      "Muscadet 'Gras Moutons'"
    ],
    iconicVineyards: ["Clos des Briords (1930s ungrafted granite parcel)", "Gras Moutons"]
  }
];

// ============================================================================
// 7. LOIRE GASTRONOMIC FOOD PAIRINGS (COLOR-CODED)
// ============================================================================

export const LOIRE_FOOD_PAIRINGS = [
  {
    category: "Fresh Shellfish & Oysters",
    wineType: "White",
    targetWine: "Muscadet Sèvre-et-Maine Sur Lie (Domaine de la Pépière Clos des Briords)",
    dish: "Raw Brittany Belon & Fine de Claire Oysters with Mignonette & Fresh Lemon",
    note: "The quintessential pairing of the Atlantic coast: briny, iodine oyster liquor is refreshed by the electric saline acidity and yeast texture of sur lie Muscadet.",
    glassware: "Bordeaux White stem (400-450ml)",
    servingTemp: "8–10°C (46–50°F)",
    decanting: "Not required; serve cold."
  },
  {
    category: "Goat Cheese & Flinty Sauvignon",
    wineType: "White",
    targetWine: "Sancerre or Pouilly-Fumé on Silex (Didier Dagueneau Silex / Vacheron)",
    dish: "Warm Baked Crottin de Chavignol Goat Cheese on Toasted Walnut Brioche with Mâche Salad",
    note: "The quintessential regional pairing: the tangy lactic acidity and creamy richness of artisanal Crottin de Chavignol goat cheese finds its soulmate in the piercing citrus, chalky tension, and gunflint smoke of Kimmeridgian/Silex Sancerre Sauvignon Blanc.",
    glassware: "White Wine / Sauvignon stem (400-500ml)",
    servingTemp: "10–11°C (50–52°F)",
    decanting: "Not required."
  },
  {
    category: "River Fish & Dry Chenin",
    wineType: "White",
    targetWine: "Savennières or Dry Vouvray (Nicolas Joly Coulée de Serrant / Domaine Huet)",
    dish: "Pan-Seared Loire Pike (Brochet) with Beurre Blanc & Steamed Fingerling Potatoes",
    note: "The rich, buttery shallot reduction of classic Beurre Blanc cuts through the monumental mineral tension, beeswax, and phenolic grip of dry Chenin Blanc.",
    glassware: "Burgundy White stem (450-550ml)",
    servingTemp: "11–13°C (52–55°F)",
    decanting: "Decant 30 minutes for Savennières."
  },
  {
    category: "Roasted Game & Cabernet Franc",
    wineType: "Red",
    targetWine: "Mature Chinon or Saumur-Champigny (Clos Rougeard / Bernard Baudry)",
    dish: "Herb-Roasted Saddle of Young Lamb with Rosemary, Garlic Confit & Flageolet Beans",
    note: "Tender lamb fat softens the chalky tuffeau tannins of Cabernet Franc, while the wine's fresh violet and graphite notes elevate savory roasted garlic.",
    glassware: "Large Burgundy or Bordeaux stem (650-750ml)",
    servingTemp: "15–17°C (59–63°F)",
    decanting: "Decant 1 hour for young vintages."
  },
  {
    category: "Foie Gras & Botrytis Chenin",
    wineType: "White",
    targetWine: "Quarts de Chaume Grand Cru (Domaine des Baumard / Belargus)",
    dish: "Pan-Seared Duck Foie Gras with Caramelized Quince & Toasted Brioche",
    note: "The decadent richness of seared foie gras is effortlessly lifted by the crystalline, racy acidity and candied ginger nectar of botrytized Quarts de Chaume Grand Cru.",
    glassware: "Dessert / Tulip stem (300-350ml)",
    servingTemp: "9–11°C (48–52°F)",
    decanting: "Not required."
  }
];
