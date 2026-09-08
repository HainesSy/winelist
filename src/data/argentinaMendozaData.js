/**
 * ============================================================================
 * MENDOZA & ARGENTINA SOMMELIER DATASET (CMS LEVEL 3 / MASTER SOMMELIER STANDARD)
 * ============================================================================
 * 
 * Standalone first-class Argentine fine wine region:
 *   - 4 Premier Viticultural Subregions (Uco Valley, Luján de Cuyo, Maipú, San Rafael)
 *   - 10 Delimited Indicaciones Geográficas (IGs) & Benchmark Terroirs:
 *     (Gualtallary, Paraje Altamira, San Pablo, Los Chacayes, Las Compuertas,
 *      Perdriel, Agrelo, Vista Flores, Barrancas, El Cepillo)
 *   - Geological Pedology (Andean Alluvial Fans, Decomposed Granitic Gravels,
 *     Calcium Carbonate / Caliche White Chalk Encrustations)
 *   - Climatology & Viticulture (Andean Rain Shadow, Zonda Foehn Winds, Extreme
 *     Diurnal Amplitudes, Acequia Snowmelt Canal Irrigation, High UV Polyphenol Synthesis)
 *   - Ampelography & Clonal Diversity (Pre-phylloxera French Massale Malbec,
 *     High-Altitude Cabernet Franc, Bonarda / Corbeau, Torrontés Riojano, Semillon)
 *   - Benchmark Prestige Cuvées & Cult Single-Vineyard Bottlings
 *   - Iconic Cult Winemakers & Terroir Pioneers
 *   - Gastronomic Food Pairings & Precision Service Guidelines
 * ============================================================================
 */

export const MENDOZA_SUBREGIONS = [
  {
    id: 'valle-de-uco',
    name: "Uco Valley (Valle de Uco)",
    district: "High-Altitude Andean Benchlands",
    lat: -33.5500,
    lng: -69.1500,
    terroir: "High-altitude alluvial benchlands tucked directly beneath the snow-capped Andes Mountains at 900m to 1,600m+ elevation. Features extreme diurnal temperature swings (up to 22°C / 40°F), cool alpine winds, intense UV solar radiation, and poor gravelly soils richly coated in calcium carbonate (caliche).",
    focus: "Chiseled, mineral-driven Malbec, aromatic high-acid Cabernet Franc, crystalline Chardonnay, and tense Pinot Noir from high-altitude IGs (Gualtallary, Paraje Altamira, San Pablo, Los Chacayes).",
    geology: "Quaternary alluvial cones formed by Andean glacial runoff, featuring metamorphic granite, basalt boulders, sand, and chalky white caliche limestone coatings.",
    dominantGrapes: "Malbec (65%), Cabernet Franc (15%), Chardonnay (10%), Pinot Noir (5%), Sauvignon Blanc (5%)",
    microTerroirs: [
      { name: "Tupungato (Gualtallary & San Pablo)", focus: "Extreme altitude (1,200m–1,600m) chalk and caliche yielding electric acidity, violet florality, and graphite minerality." },
      { name: "Tunuyán (Los Chacayes & Vista Flores)", focus: "Rocky gravelly piedmont at 1,000m–1,300m producing muscular, dark-fruited Malbec and wild herbal Cabernet Franc." },
      { name: "San Carlos (Paraje Altamira & El Cepillo)", focus: "Southern alluvial fan with shallow topsoil and dense limestone crusts producing chalky, saline-textured red wines." }
    ],
    description: "The crown jewel of modern South American viticulture. A pristine alpine corridor where extreme elevation and calcic limestone transform Malbec from sweet jamminess into chiseled, mineral, age-worthy fine wine."
  },
  {
    id: 'lujan-de-cuyo',
    name: "Luján de Cuyo (Primera Zona)",
    district: "Historical Valley Heartlands",
    lat: -33.0500,
    lng: -68.8800,
    terroir: "The historical cradle of Argentine fine wine along the Mendoza River terraces at 850m to 1,100m elevation. Gentle slopes of deep clay-loam over alluvial riverbed stones, with warm sunny days and cool nights regulated by mountain river breezes.",
    focus: "Rich, velvety, sensual Malbec with melted tannins, sweet black cherry, violet, and cocoa; classic Cabernet Sauvignon and aged Semillon.",
    geology: "Quaternary alluvial river terraces composed of silt, clay-loam, sand, and rounded riverbed cobbles (canto rodado).",
    dominantGrapes: "Malbec (70%), Cabernet Sauvignon (15%), Cabernet Franc (5%), Semillon (5%), Petit Verdot (5%)",
    microTerroirs: [
      { name: "Las Compuertas", focus: "Highest sector (1,050m) along the river canal headgate; centenary ungrafted Malbec vines on stony alluvial benches." },
      { name: "Perdriel & Vistalba", focus: "Terraced stony soils directly bordering the Mendoza River; legendary benchmark for structural elegance and violet aromatics." },
      { name: "Agrelo & Ugarteche", focus: "Slightly warmer clay-loam basin producing opulent, dark chocolate and damson plum-driven Malbec." }
    ],
    description: "Argentina's first official DOC (established 1989). A legendary terroir where century-old ungrafted vines produce the benchmark classical expression of Argentine Malbec: opulent, velvety, and deeply aromatic."
  },
  {
    id: 'maipu',
    name: "Maipú (Historical Cradle)",
    district: "Central Mendoza River Basin",
    lat: -33.0000,
    lng: -68.7500,
    terroir: "Warm central valley plain situated east of Luján de Cuyo at 650m to 850m elevation along the south bank of the Mendoza River. Long growing season, abundant sunshine, and fast-draining stony gravel soils.",
    focus: "Generous, full-bodied Malbec, spicy old-vine Bonarda, structured Cabernet Sauvignon, and rich Syrah.",
    geology: "Deep alluvial gravel beds, sand, and clay silt washed down by the Mendoza River.",
    dominantGrapes: "Malbec (60%), Bonarda (20%), Cabernet Sauvignon (15%), Syrah (5%)",
    microTerroirs: [
      { name: "Barrancas", focus: "Dry, sun-baked gravelly terrace producing ripe, dense, black-fruited Malbec and robust Syrah." },
      { name: "Lunlunta & Russell", focus: "Cooler river-adjacent alluvial benches producing perfumed, supple old-vine reds." }
    ],
    description: "The historical home of Mendoza winemaking where 19th-century Italian and Spanish immigrants planted pre-phylloxera massale selections. Produces deeply generous, round, and spicy red wines."
  },
  {
    id: 'san-rafael',
    name: "San Rafael (Southern Oasis)",
    district: "Southern Mendoza River Oasis",
    lat: -34.6000,
    lng: -68.3500,
    terroir: "Independent southern oasis situated 240km south of Mendoza City at 600m to 800m elevation along the Diamante and Atuel rivers. Cooler continental climate with milder summer peaks, sandy-clay soils, and stony volcanic gravels.",
    focus: "Crisp Chenin Blanc, fresh aromatic Bonarda, balanced Cabernet Sauvignon, and elegant Malbec.",
    geology: "Alluvial and colluvial sedimentary gravels with limestone and volcanic sand.",
    dominantGrapes: "Chenin Blanc (30%), Malbec (30%), Cabernet Sauvignon (25%), Bonarda (15%)",
    microTerroirs: [
      { name: "Valle del Atuel", focus: "Cooler riverbed valley producing crisp sparkling base wines and citrusy Chenin Blanc." },
      { name: "Cuadro Benegas", focus: "Stony volcanic gravel slopes producing refined, peppery Cabernet and balanced Malbec." }
    ],
    description: "A historic southern DOC oasis with a long winemaking pedigree dating to French engineer Rodolfo Iselín. Renowned for its balanced, lower-alcohol red wines and vibrant Chenin Blanc."
  }
];

export const MENDOZA_GRAND_CRUS = [
  {
    id: 'gualtallary',
    name: "Gualtallary (Tupungato)",
    village: "Tupungato",
    subregion: "Uco Valley",
    district: "Uco Valley",
    subregionId: 'valle-de-uco',
    districtId: 'valle-de-uco',
    classification: 'Indicación Geográfica (IG)',
    badge: 'High-Altitude Caliche Grand Cru',
    lat: -33.3800,
    lng: -69.2300,
    areaHa: 2250,
    aocDecreeYear: 2011,
    elevationRange: "1,200m – 1,600m",
    aspect: "Steep east-facing alluvial cone tilted toward the morning Andean sun",
    dominantGrape: "Malbec & Cabernet Franc",
    wineType: "Red",
    baseYield: "38 hl/ha",
    minPotentialAbv: "13.5% vol.",
    soil: "Sand and gravelly colluvial rocks densely encrusted with white calcium carbonate (caliche) over deep gravel beds",
    character: "Piercing chalky tension, wild mountain herbs (thyme, jarilla), crushed black fruit, violet floral perfume, and an intensely saline, laser-like mineral finish. Home to Catena's legendary Adrianna Vineyard.",
    benchmarkProducers: ["Catena Zapata (Adrianna Vineyard)", "El Enemigo (Alejandro Vigil)", "Domaine Bousquet", "Altos Las Hormigas", "Matias Riccitelli"],
    famousProducers: ["Catena Zapata", "El Enemigo", "Altos Las Hormigas", "Matias Riccitelli"],
    iconicVineyards: ["Adrianna Vineyard (Mundus Bacillus Terrae)", "Gran Enemigo Gualtallary Single Vineyard", "Aluvional Gualtallary"]
  },
  {
    id: 'paraje-altamira',
    name: "Paraje Altamira (San Carlos)",
    village: "San Carlos",
    subregion: "Uco Valley",
    district: "Uco Valley",
    subregionId: 'valle-de-uco',
    districtId: 'valle-de-uco',
    classification: 'Indicación Geográfica (IG)',
    badge: 'Limestone Calcic Cru',
    lat: -33.7800,
    lng: -69.1800,
    areaHa: 930,
    aocDecreeYear: 2013,
    elevationRange: "1,050m – 1,150m",
    aspect: "Gentle South-East alluvial slope on the Tunuyán River delta",
    dominantGrape: "Malbec (100%)",
    wineType: "Red",
    baseYield: "40 hl/ha",
    minPotentialAbv: "13.5% vol.",
    soil: "Shallow topsoil over immense granite and volcanic boulders heavily caked in bright white calcium carbonate (caliche)",
    character: "The gold standard for calcic mineral Malbec in Argentina. Inky purple color, intense red and black cherry, wet stone, chalky tactile tannins, and extraordinary savory freshness without oak interference.",
    benchmarkProducers: ["Zuccardi Valle de Uco (Finca Piedra Infinita)", "Achaval-Ferrer", "Catena Zapata", "Finca Beth", "Altocedro"],
    famousProducers: ["Zuccardi Valle de Uco", "Achaval-Ferrer", "Catena Zapata"],
    iconicVineyards: ["Finca Piedra Infinita", "Aluvional Paraje Altamira", "Finca Los Membrillos"]
  },
  {
    id: 'san-pablo',
    name: "San Pablo (Tunuyán)",
    village: "Tunuyán",
    subregion: "Uco Valley",
    district: "Uco Valley",
    subregionId: 'valle-de-uco',
    districtId: 'valle-de-uco',
    classification: 'Indicación Geográfica (IG)',
    badge: 'Alpine Cold-Climate Cru',
    lat: -33.4500,
    lng: -69.2800,
    areaHa: 450,
    aocDecreeYear: 2019,
    elevationRange: "1,350m – 1,650m",
    aspect: "High mountain valley flanked by the Viluco and Las Tunas streams",
    dominantGrape: "Chardonnay, Pinot Noir & Malbec",
    wineType: "White",
    baseYield: "35 hl/ha",
    minPotentialAbv: "12.5% vol.",
    soil: "Sandy loam intermixed with granitic boulders and fine calcareous silt",
    character: "One of Mendoza's coldest viticultural frontiers. Piercing natural acidity, citrus blossom, green apple, flinty reduction, and razor-sharp alpine tension in Chardonnay and Pinot Noir.",
    benchmarkProducers: ["Salentein", "Zuccardi Valle de Uco", "Bodega Tapiz"],
    famousProducers: ["Salentein", "Zuccardi"],
    iconicVineyards: ["Finca San Pablo", "Fosiles San Pablo"]
  },
  {
    id: 'los-chacayes',
    name: "Los Chacayes (Tunuyán)",
    village: "Tunuyán",
    subregion: "Uco Valley",
    district: "Uco Valley",
    subregionId: 'valle-de-uco',
    districtId: 'valle-de-uco',
    classification: 'Indicación Geográfica (IG)',
    badge: 'Wild Granite Piedmont Cru',
    lat: -33.5800,
    lng: -69.2100,
    areaHa: 1600,
    aocDecreeYear: 2017,
    elevationRange: "1,100m – 1,350m",
    aspect: "Eastern alluvial outwash slopes of the Cordillera Frontal",
    dominantGrape: "Malbec, Cabernet Franc & Syrah",
    wineType: "Red",
    baseYield: "42 hl/ha",
    minPotentialAbv: "14.0% vol.",
    soil: "Extremely stony colluvial soil packed with sharp angular metamorphic and volcanic rocks with low organic matter",
    character: "Wild, muscular, and deeply structured. Expresses dark blackberry, roasted thyme, crushed peppercorn, and grippy, powerful mountain tannins requiring bottle age.",
    benchmarkProducers: ["Piedra Negra (François Lurton)", "Corazón del Sol", "SuperUco (Michelini Brothers)", "Zuccardi"],
    famousProducers: ["Piedra Negra", "SuperUco", "Corazón del Sol"],
    iconicVineyards: ["Chacayes Gran Malbec", "Aluvional Los Chacayes"]
  },
  {
    id: 'las-compuertas',
    name: "Las Compuertas (Luján de Cuyo)",
    village: "Luján de Cuyo",
    subregion: "Luján de Cuyo",
    district: "Luján de Cuyo",
    subregionId: 'lujan-de-cuyo',
    districtId: 'lujan-de-cuyo',
    classification: 'Indicación Geográfica (IG)',
    badge: 'Centenary Ungrafted Malbec Cru',
    lat: -33.0400,
    lng: -68.9800,
    areaHa: 410,
    aocDecreeYear: 2002,
    elevationRange: "1,020m – 1,080m",
    aspect: "Highest elevation terrace on the north bank of the Mendoza River",
    dominantGrape: "Malbec (Centenary Ungrafted Vines)",
    wineType: "Red",
    baseYield: "35 hl/ha",
    minPotentialAbv: "14.0% vol.",
    soil: "Alluvial gravels and sand with rounded river stones and clay-loam topsoil",
    character: "Aristocratic elegance. Century-old ungrafted bush and trellis vines produce silky, perfumed red wines showing fresh violet, ripe black plum, damson cherry, and seamless cashmere tannins.",
    benchmarkProducers: ["Cheval des Andes", "Terrazas de los Andes", "Familia Deicas", "Matias Riccitelli"],
    famousProducers: ["Cheval des Andes", "Terrazas de los Andes", "Matias Riccitelli"],
    iconicVineyards: ["Cheval des Andes Parcel 1929", "Las Compuertas Old Vines 1913"]
  },
  {
    id: 'perdriel',
    name: "Perdriel (Luján de Cuyo)",
    village: "Luján de Cuyo",
    subregion: "Luján de Cuyo",
    district: "Luján de Cuyo",
    subregionId: 'lujan-de-cuyo',
    districtId: 'lujan-de-cuyo',
    classification: 'Indicación Geográfica (IG)',
    badge: 'Mendoza River Terraces Cru',
    lat: -33.0800,
    lng: -68.8800,
    areaHa: 1100,
    aocDecreeYear: 1989,
    elevationRange: "920m – 980m",
    aspect: "Flat to gently sloping south riverbank terraces",
    dominantGrape: "Malbec & Cabernet Sauvignon",
    wineType: "Red",
    baseYield: "40 hl/ha",
    minPotentialAbv: "14.0% vol.",
    soil: "Alluvial gravelly silt and rounded river rocks washed clean by centuries of Andean meltwater",
    character: "Home to Achaval-Ferrer's 1910 ungrafted Finca Bella Vista. Offers an intoxicating bouquet of violet pastille, dark cocoa, balsamic herbs, and velvety melted tannins with immense longevity.",
    benchmarkProducers: ["Achaval-Ferrer (Finca Bella Vista)", "Norton (Gernot Langes)", "Marchiori Vineyard", "Caelum"],
    famousProducers: ["Achaval-Ferrer", "Bodega Norton"],
    iconicVineyards: ["Finca Bella Vista (1910 ungrafted vines)", "Perdriel Single Vineyard"]
  },
  {
    id: 'agrelo',
    name: "Agrelo (Luján de Cuyo)",
    village: "Luján de Cuyo",
    subregion: "Luján de Cuyo",
    district: "Luján de Cuyo",
    subregionId: 'lujan-de-cuyo',
    districtId: 'lujan-de-cuyo',
    classification: 'Indicación Geográfica (IG)',
    badge: 'First Zone Cradle Cru',
    lat: -33.1200,
    lng: -68.8900,
    areaHa: 6200,
    aocDecreeYear: 1989,
    elevationRange: "950m – 1,050m",
    aspect: "Expansive valley floor amphitheater surrounded by low hills",
    dominantGrape: "Malbec & Cabernet Sauvignon",
    wineType: "Red",
    baseYield: "45 hl/ha",
    minPotentialAbv: "14.0% vol.",
    soil: "Deep alluvial clay-loam topsoil over subterranean gravel beds, retaining moisture during dry summer heat",
    character: "The opulent, voluptuous benchmark of classical Mendoza. Deep plum, dark blackberry liqueur, sweet spices, dark chocolate, and rounded, plush tannins with broad palate weight.",
    benchmarkProducers: ["Catena Zapata (Pyramid Winery)", "Viña Cobos (Paul Hobbs)", "Finca Decero", "Séptima"],
    famousProducers: ["Catena Zapata", "Viña Cobos", "Finca Decero"],
    iconicVineyards: ["Catena Zapata Agrelo Vineyard", "Cobos Marchiori Vineyard"]
  },
  {
    id: 'vista-flores',
    name: "Vista Flores (Tunuyán)",
    village: "Tunuyán",
    subregion: "Uco Valley",
    district: "Uco Valley",
    subregionId: 'valle-de-uco',
    districtId: 'valle-de-uco',
    classification: 'Indicación Geográfica (IG)',
    badge: 'French Pioneer Alluvial Cru',
    lat: -33.6200,
    lng: -69.1500,
    areaHa: 1950,
    aocDecreeYear: 2017,
    elevationRange: "1,000m – 1,150m",
    aspect: "Sloping gravel terraces bordered by mountain willow lines",
    dominantGrape: "Malbec & Syrah",
    wineType: "Red",
    baseYield: "40 hl/ha",
    minPotentialAbv: "14.0% vol.",
    soil: "Alluvial sand, clay loam, and rounded gravel cobbles",
    character: "Epicenter of the 'Clos de los Siete' Bordeaux pioneer project led by Michel Rolland. Dense, concentrated, and spicy red wines displaying floral iris, blackberry jam, and dark espresso.",
    benchmarkProducers: ["Clos de los Siete (Michel Rolland)", "Monteviejo", "Cuvelier Los Andes", "Flechas de los Andes"],
    famousProducers: ["Clos de los Siete", "Monteviejo"],
    iconicVineyards: ["Clos de los Siete Grand Vin", "Monteviejo La Violeta"]
  },
  {
    id: 'barrancas',
    name: "Barrancas (Maipú)",
    village: "Maipú",
    subregion: "Maipú",
    district: "Maipú",
    subregionId: 'maipu',
    districtId: 'maipu',
    classification: 'Indicación Geográfica (IG)',
    badge: 'Stony River Terrace Cru',
    lat: -33.0200,
    lng: -68.7000,
    areaHa: 2800,
    aocDecreeYear: 1993,
    elevationRange: "720m – 780m",
    aspect: "Elevated, warm river terrace along the southern bank of the Rio Mendoza",
    dominantGrape: "Malbec, Syrah & Cabernet Sauvignon",
    wineType: "Red",
    baseYield: "48 hl/ha",
    minPotentialAbv: "14.0% vol.",
    soil: "Extremely rocky alluvial gravel terraces with fast thermal release",
    character: "Warm, full-bodied, and deeply satisfying. Showcases dark blackberry, licorice, roasted cocoa bean, and chewy, ripe tannins with great early drinking appeal.",
    benchmarkProducers: ["Finca Flichman", "Pascual Toso", "Trapiche"],
    famousProducers: ["Finca Flichman", "Pascual Toso"],
    iconicVineyards: ["Dedicado Single Vineyard", "Magdalena Toso"]
  },
  {
    id: 'el-cepillo',
    name: "El Cepillo (San Carlos)",
    village: "San Carlos",
    subregion: "Uco Valley",
    district: "Uco Valley",
    subregionId: 'valle-de-uco',
    districtId: 'valle-de-uco',
    classification: 'Indicación Geográfica (IG)',
    badge: 'Southern Frontier Calcic Cru',
    lat: -33.8500,
    lng: -69.2200,
    areaHa: 680,
    aocDecreeYear: 2019,
    elevationRange: "980m – 1,100m",
    aspect: "Southernmost depression of the Uco Valley with cold air pooling",
    dominantGrape: "Malbec & Cabernet Franc",
    wineType: "Red",
    baseYield: "38 hl/ha",
    minPotentialAbv: "13.5% vol.",
    soil: "Alluvial gravels coated with thick white calcium carbonate and sandy silt",
    character: "The extreme frost-prone southern frontier. Extreme diurnal shifts generate intense pyrazine-free herbal complexity, wild black cherry, lavender, and a tight, chalky saline finish.",
    benchmarkProducers: ["Zuccardi Valle de Uco", "Bemberg Estate Wines", "Alfa Crux"],
    famousProducers: ["Zuccardi", "Bemberg Estate"],
    iconicVineyards: ["Finca El Tomillo", "Aluvional El Cepillo"]
  }
];

export const MENDOZA_TECHNICAL_REGULATIONS = {
  geology: {
    title: "Andean Orogeny & Calcium Carbonate (Caliche) Stratigraphy",
    formations: [
      { name: "Cenozoic Andean Uplift", desc: "Formed 20–5 million years ago as the Nazca oceanic plate subducted beneath the South American continental plate, elevating the Cordillera de los Andes to over 6,000 meters (Aconcagua 6,961m) and casting a profound rain shadow over Mendoza." },
      { name: "Quaternary Alluvial Cones (Abanicos Aluviales)", desc: "Violent post-glacial meltwater floods and summer mountain flash floods (aluviones) deposited massive gravel, boulder, and sand cones across the piedmont." },
      { name: "Calcium Carbonate / Caliche Encrustations", desc: "Arid desert weathering and microscopic evaporation in high-altitude Uco Valley soils caused subterranean calcium carbonate to precipitate, forming bright white chalk crusts (caliche) that coat granite gravels and impart tactile saline-chalk minerality to the wine." }
    ]
  },
  grapes: {
    major: [
      { name: "Malbec", desc: "Argentina's signature red grape, brought from Cahors and Bordeaux in 1853 by French agronomist Michel Aimé Pouget. Pre-phylloxera massale selections feature tight clusters, small berries, intense anthocyanin color, sweet floral violet aromas, dark plum fruit, and velvety round tannins." },
      { name: "Cabernet Franc", desc: "The rising superstar of high-altitude Uco Valley (Gualtallary and San Carlos). Displays vibrant red berry fruit, crushed red pepper, graphite, pencil shavings, and electric natural acidity." },
      { name: "Bonarda (Corbeau / Charbono)", desc: "Historic red variety of Savoie origin, widely planted in eastern Mendoza and Maipú. Delivers juicy black cherry, wild plum, low tannins, and vibrant food-friendly freshness." },
      { name: "Torrontés Riojano", desc: "Argentina's only indigenous noble white grape, a historic natural crossing of Criolla Chica (Mission) × Muscat of Alexandria. Exuberantly aromatic with notes of jasmine, white peach, rosewater, and refreshing dry citrus." }
    ],
    heritage: [
      { name: "Semillon", desc: "Old-vine white grape dating back to the late 19th century in Luján de Cuyo and Uco Valley; crafts waxy, honeyed, lanolin and lemon curd-scented dry whites of profound ageability." },
      { name: "Criolla Chica (Listán Prieto / Mission)", desc: "Centuries-old heritage variety brought by Spanish conquistadors and Jesuit missionaries in the 16th century, currently celebrated in artisanal, low-extraction natural wines." },
      { name: "Petit Verdot", desc: "Late-ripening Bordeaux variety that achieves complete phenolic ripeness in Mendoza's high-altitude sunshine, providing structural backbone, inkiness, and violet notes to prestige blends." }
    ]
  },
  classification: {
    system: "INV (Instituto Nacional de Vitivinicultura) Appellation & IG Law",
    description: "Governed nationally by Law 25.163, regulating Indicación de Procedencia (IP), Indicación Geográfica (IG), and Denominación de Origen Controlada (DOC).",
    pyramid: [
      { name: "DOC (Denominación de Origen Controlada)", desc: "Top statutory tier: Luján de Cuyo DOC (established 1989) and San Rafael DOC (established 1993). Requires strict yields, native grape standards (min 85% Malbec in Luján), and mandatory barrel aging (min 12 months in oak, 12 in bottle)." },
      { name: "Indicación Geográfica (IG)", desc: "Modern terroir-delimited appellations defined strictly by geopedological and climatic criteria (e.g. Paraje Altamira, Gualtallary, Los Chacayes, Las Compuertas, San Pablo). The primary driver of high-end single-terroir Argentine wine." },
      { name: "Indicación de Procedencia (IP)", desc: "Regional geographical indications identifying broad viticultural origin (e.g. Mendoza, Valle de Uco, Patagonia)." }
    ],
    agingRules: [
      { tier: "Reserva", rule: "Minimum 12 months aging for reds, 6 months for whites/rosés, with recognized quality grapes and restricted yields." },
      { tier: "Gran Reserva", rule: "Minimum 24 months aging for reds (min 12 in oak), 12 months for whites/rosés (min 6 in oak), demonstrating superior phenolic concentration." }
    ]
  },
  viticulture: {
    irrigation: "Ancient canal system (Acequias) originally engineered by the indigenous Huarpe people, transporting pure mineral-rich Andean snowmelt from the Mendoza, Tunuyán, and Diamante rivers to nourish the desert vineyards.",
    zondaWind: "A scorching, hyper-arid Foehn wind descending from the Pacific over the high Andean peaks into the western valleys in spring, desiccating vines and causing sudden humidity drops to below 10%, mitigating all fungal diseases naturally."
  }
};

export const MENDOZA_PRESTIGE_CUVEES = [
  {
    id: 'adrianna-mundus-bacillus',
    name: "Adrianna Vineyard 'Mundus Bacillus Terrae' Malbec",
    producer: "Catena Zapata",
    subregion: "Uco Valley",
    district: "Gualtallary (Tupungato)",
    debutVintage: 2011,
    grapeComposition: "100% Malbec (Ungrafted Massale Selection)",
    sourcing: "Adrianna Vineyard Parcel 6, Gualtallary at 1,450m elevation; limestone-caked alluvial river stones rich in beneficial rhizosphere rhizobacteria.",
    winemaking: "Co-fermentation in 225L and 500L oak barrels with 20% whole clusters using wild indigenous yeasts; aged 18 months in neutral French oak barrels.",
    character: "Multiple 100-point benchmark. Inky opaque purple, crushed violets, wild thyme, black tea, chalk dust, and laser-like saline minerality that lingers for over a minute.",
    iconicStatus: "The single wine that revolutionized South American viticulture, proving that high-altitude caliche terroir matches Grand Cru Burgundy in terroir precision."
  },
  {
    id: 'zuccardi-piedra-infinita',
    name: "Finca Piedra Infinita Malbec",
    producer: "Zuccardi Valle de Uco",
    subregion: "Uco Valley",
    district: "Paraje Altamira (San Carlos)",
    debutVintage: 2012,
    grapeComposition: "100% Malbec",
    sourcing: "Finca Piedra Infinita, Paraje Altamira at 1,100m elevation; soils containing over 1,000 truckloads of calcic boulders removed to plant the vines.",
    winemaking: "Fermented and aged exclusively in unlined concrete vats and amphorae with zero new oak contact to preserve absolute mineral transparency.",
    character: "Repeated 100-point masterpiece. Austere, chiseled, and crystalline with wild blackberry, wet limestone, sea salt, iron filings, and tactile chalk tannins.",
    iconicStatus: "The definitive benchmark for un-oaked, pure calcareous terroir expression in the southern hemisphere."
  },
  {
    id: 'cheval-des-andes',
    name: "Cheval des Andes Gran Vin",
    producer: "Château Cheval Blanc & Terrazas de los Andes",
    subregion: "Luján de Cuyo",
    district: "Las Compuertas",
    debutVintage: 1999,
    grapeComposition: "50% Malbec (1929 ungrafted), 45% Cabernet Sauvignon, 5% Petit Verdot",
    sourcing: "Historic 1929 ungrafted vineyard in Las Compuertas (1,050m) combined with high-altitude Uco Valley parcels.",
    winemaking: "Bordeaux Premier Grand Cru Classé vinification standards under Pierre Lurton; aged 16 months in 40% new French oak barriques.",
    character: "Seamless aristocratic harmony marrying Bordeaux structural restraint with Argentine fruit generosity: cassis, dried violet, cigar box, graphite, and velvety tannins.",
    iconicStatus: "The benchmark Argentine-French hybrid icon, uniting Saint-Émilion First Growth heritage with century-old Mendoza ungrafted vines."
  },
  {
    id: 'gran-enemigo-gualtallary',
    name: "Gran Enemigo Gualtallary Single Vineyard Cabernet Franc",
    producer: "El Enemigo (Alejandro Vigil)",
    subregion: "Uco Valley",
    district: "Gualtallary (Tupungato)",
    debutVintage: 2010,
    grapeComposition: "85% Cabernet Franc, 15% Malbec",
    sourcing: "Gualtallary at 1,470m elevation; caliche-rich limestone gravels harvested in 5 distinct passes across 40 days.",
    winemaking: "Fermented with 50% whole clusters in open-top vats; aged 15 months in 100-year-old Alsatian oak foudres.",
    character: "Historic 100-point Cabernet Franc. Piercing aromas of bell pepper reduction, wild sage, crushed blackberry, gunflint, and intense mineral tension.",
    iconicStatus: "The wine that established Argentina as one of the world's greatest terroirs for world-class Cabernet Franc."
  },
  {
    id: 'achaval-ferrer-finca-bella-vista',
    name: "Finca Bella Vista Malbec",
    producer: "Achaval-Ferrer",
    subregion: "Luján de Cuyo",
    district: "Perdriel",
    debutVintage: 1999,
    grapeComposition: "100% Malbec (Ungrafted vines planted 1910)",
    sourcing: "Century-old ungrafted vineyard on the south bank of the Rio Mendoza in Perdriel at 980m elevation.",
    winemaking: "Extremely low yields (under 18 hl/ha, two vines per bottle); aged 15 months in 100% new French oak barriques, bottled unfined and unfiltered.",
    character: "Lavish, hypnotic bouquet of dark cherry liqueur, violet oil, sandalwood, cocoa, and seamless melted tannins.",
    iconicStatus: "One of the founding cult single-vineyard bottlings of modern Argentina, preserving pre-phylloxera heritage vines."
  },
  {
    id: 'vina-cobos-marchiori',
    name: "Cobos 'Marchiori Vineyard' Malbec",
    producer: "Viña Cobos (Paul Hobbs)",
    subregion: "Luján de Cuyo",
    district: "Perdriel / Agrelo",
    debutVintage: 1999,
    grapeComposition: "100% Malbec (Old Vine Block C2)",
    sourcing: "Marchiori Estate, Perdriel at 990m elevation; deep clay-loam topsoil over deep rounded alluvial riverbed cobbles.",
    winemaking: "Wild yeast fermentation, gentle punch-downs, aged 18–20 months in new Taransaud French oak barrels.",
    character: "Monumental, opulent, and majestic. Saturated midnight-purple color, crème de cassis, mocha, crushed graphite, and sumptuous, velvety structure.",
    iconicStatus: "The benchmark cult luxury cuvée crafted by California master winemaker Paul Hobbs."
  }
];

export const MENDOZA_ICONIC_DOMAINES = [
  {
    id: 'catena-zapata',
    name: "Bodega Catena Zapata",
    village: "Agrelo (Luján de Cuyo)",
    vigneron: "Nicolás Catena & Dr. Laura Catena (Head Winemaker: Alejandro Vigil)",
    philosophy: "The undisputed visionary pioneer of modern Argentine fine wine. Nicolás Catena proved in the 1990s that extreme high-altitude mountain terroirs could rival the first growths of Bordeaux and Grand Crus of Burgundy.",
    keyCuvees: ["Adrianna Vineyard Mundus Bacillus Terrae", "Adrianna Vineyard White Stones", "Catena Zapata Malbec Argentino", "Nicolás Catena Zapata"]
  },
  {
    id: 'zuccardi-valle-de-uco',
    name: "Zuccardi Valle de Uco",
    village: "Paraje Altamira (San Carlos)",
    vigneron: "Sebastián Zuccardi",
    philosophy: "The vanguard of terroir-driven, un-oaked calcic purism in South America. Voted 'World's Best Vineyard' three consecutive years, focusing on concrete eggs, amphorae, and parcel-by-parcel soil pedology.",
    keyCuvees: ["Finca Piedra Infinita", "Finca Canal Uco", "Aluvional Paraje Altamira", "Aluvional Gualtallary"]
  },
  {
    id: 'el-enemigo',
    name: "El Enemigo / Bodega Aleanna",
    village: "Chachingo (Maipú) & Gualtallary",
    vigneron: "Alejandro Vigil (Catena Zapata Chief Winemaker) & Adrianna Catena",
    philosophy: "Rebel artisanal project dedicated to reviving traditional historical winemaking: 100-year-old oak foudres, whole-cluster fermentations, and obsessive micro-terroir harvest passes.",
    keyCuvees: ["Gran Enemigo Gualtallary Single Vineyard", "Gran Enemigo El Cepillo Single Vineyard", "El Enemigo Malbec", "El Enemigo Chardonnay"]
  },
  {
    id: 'achaval-ferrer',
    name: "Achaval-Ferrer",
    village: "Perdriel (Luján de Cuyo)",
    vigneron: "Roberto Cipresso & Manuel Ferrer",
    philosophy: "Devoted to preserving three ungrafted century-old single vineyards (Bella Vista 1910, Mirador 1921, Altamira 1950) with microscopic yields and extreme non-interventionist winemaking.",
    keyCuvees: ["Finca Bella Vista", "Finca Mirador", "Finca Altamira", "Quimera"]
  },
  {
    id: 'matias-riccitelli',
    name: "Matias Riccitelli",
    village: "Las Compuertas & Gualtallary",
    vigneron: "Matias Riccitelli",
    philosophy: "Dynamic leader of the new generation of Argentine vignerons, championing centenary bush vines in Las Compuertas and old-vine Semillon, fermented with whole clusters in concrete eggs and amphorae.",
    keyCuvees: ["Republica del Malbec (1927 Vines)", "Vinas Viejas Sobre Calcareo", "Riccitelli & Father", "Blanco de la Casa"]
  },
  {
    id: 'vina-cobos',
    name: "Viña Cobos",
    village: "Agrelo (Luján de Cuyo)",
    vigneron: "Paul Hobbs & Andrés Vignoni",
    philosophy: "Meticulous Napa-style precision viticulture applied to old-vine Mendoza terroirs, crafting monumental, opulent, and cellar-worthy cuvées.",
    keyCuvees: ["Cobos Marchiori Malbec", "Cobos Chañares Malbec", "Bramare Zingaretti Malbec"]
  }
];

export const MENDOZA_FOOD_PAIRINGS = [
  {
    category: "Red Meat",
    wineType: "Red",
    targetWine: "High-Altitude Uco Valley Malbec (Paraje Altamira or Gualtallary)",
    dish: "Bife de Chorizo a las Brasas con Chimichurri y Papas Aplastadas",
    note: "The intense char, caramelized exterior, and rich marbling of Argentine sirloin steak demand the chiseled chalky tannins, dark blackberry fruit, and cleansing natural acidity of high-altitude Uco Valley Malbec. Chimichurri's oregano and garlic echo the wild mountain herbal undertones (jarilla and thyme) of Gualtallary.",
    glassware: "Bordeaux Grand Cru Glass",
    servingTemp: "16–18°C (61–64°F)",
    decanting: "Decant 45–60 minutes before service"
  },
  {
    category: "Game & Roasted Meats",
    wineType: "Red",
    targetWine: "Old-Vine Luján de Cuyo Malbec (Las Compuertas or Perdriel)",
    dish: "Cordero Patagónico al Asador (Spit-Roasted Patagonian Whole Lamb)",
    note: "Wood-smoked Patagonian lamb fat dissolves into the velvety, melted tannins and sweet plum-violet perfume of centenary ungrafted Perdriel and Las Compuertas vines. Decades-old vine depth balances rich animal savor.",
    glassware: "Bordeaux Grand Cru Glass",
    servingTemp: "16–18°C (61–64°F)",
    decanting: "Decant 60 minutes before service"
  },
  {
    category: "Poultry & Herbal Dishes",
    wineType: "Red",
    targetWine: "Gualtallary Single-Vineyard Cabernet Franc",
    dish: "Chivo Lechal Asado al Horno de Barro (Clay-Oven Roasted Kid Goat with Wild Herbs)",
    note: "Tender, savory young goat roasted with mountain rosemary and roasted red peppers mirrors the graphite, crushed red peppercorn, and wild sage complexities of high-altitude Gualtallary Cabernet Franc.",
    glassware: "Bordeaux Glass",
    servingTemp: "15–17°C (59–63°F)",
    decanting: "Decant 30–45 minutes before service"
  },
  {
    category: "Traditional Savory Pastries",
    wineType: "Red",
    targetWine: "Old-Vine Maipú Bonarda or Luján de Cuyo Malbec",
    dish: "Empanadas Mendocinas de Carne Cortada a Cuchillo",
    note: "Hand-cut braised beef empanadas laced with sweet onions, cumin, pimentón, and green olives harmonize with the juicy blackberry fruit, vibrant acidity, and soft tannins of traditional Maipú Bonarda and approachable Malbec.",
    glassware: "Universal Red Glass",
    servingTemp: "15–16°C (59–61°F)",
    decanting: "No decanting required"
  },
  {
    category: "Fish & Alpine Seafood",
    wineType: "White",
    targetWine: "San Pablo High-Altitude Chardonnay or Old-Vine Semillon",
    dish: "Trucha Criolla Cordillerana a la Manteca Negra con Alcaparras (Andean Mountain Trout)",
    note: "Pan-seared river trout with brown butter, lemon juice, and capers finds an exquisite partner in electric, limestone-driven San Pablo Chardonnay. The wine's crystalline acidity cuts through the browned butter while wet stone minerality complements the sweet, delicate river fish.",
    glassware: "Burgundy White Glass",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Serve chilled; 15 minutes aeration"
  },
  {
    category: "Artisanal Cheeses & Starters",
    wineType: "White",
    targetWine: "Torrontés Riojano (High-Altitude Cafayate/Uco Valley)",
    dish: "Provoleta a la Parrilla con Tomates Secos, Orégano Fresco y Ají Molido",
    note: "Thick grilled provolone cheese crisped over the coals with dried chili and fresh oregano is balanced by the explosive floral bouquet (jasmine, orange blossom) and crisp citrus dryness of Torrontés, refreshing the palate between bites.",
    glassware: "Universal White Glass",
    servingTemp: "8–10°C (46–50°F)",
    decanting: "Serve chilled"
  }
];

export const MENDOZA_DATA = {
  id: 'argentina-mendoza',
  name: "Argentina (Mendoza & Uco Valley)",
  country: 'Argentina',
  countryCode: 'AR',
  aliases: [
    'argentina', 'mendoza', 'valle de uco', 'uco valley', 'uco', 'lujan de cuyo', 'luján de cuyo',
    'maipu', 'maipú', 'san rafael', 'gualtallary', 'altamira', 'paraje altamira', 'san pablo',
    'los chacayes', 'las compuertas', 'perdriel', 'agrelo', 'vista flores', 'barrancas', 'el cepillo',
    'catena zapata', 'catena', 'zuccardi', 'el enemigo', 'achaval-ferrer', 'achaval ferrer',
    'cheval des andes', 'vina cobos', 'viña cobos', 'riccitelli', 'salentein', 'aluvional'
  ],
  tagline: "High-Altitude Andean Benchlands, Caliche Limestone & Malbec Renaissance",
  summary: "Planted along the eastern foothills of the snow-capped Andes Mountains at altitudes ranging from 800 meters to over 1,600 meters above sea level, Mendoza is the undisputed global epicenter of fine Malbec and high-altitude viticulture. Arid desert climates, abundant sunshine, and pure Andean snowmelt combine with poor alluvial gravels caked in calcium carbonate (caliche) to produce red wines of thrilling mineral tension, vivid violet perfumes, and extraordinary aging potential.",
  center: [-33.5500, -69.0000],
  zoom: 9,
  bounds: [[-34.90, -69.60], [-32.60, -68.20]],
  heroGradient: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #d4af37 100%)',
  accentColor: '#3f51b5',

  terroir: {
    climate: "Semi-arid continental desert sheltered beneath the rain shadow of the Andes Cordillera. Extreme diurnal swings (up to 22°C / 40°F between day and night), over 300 days of annual sunshine, and intense high-altitude ultraviolet radiation that triggers grape skins to synthesize thick, polyphenol-dense skins with deep anthocyanin color. Occasional warm, dry Zonda Foehn winds in spring.",
    soil: "Young Quaternary alluvial cones deposited by glacial meltwater runoff. Characterized by deep gravel and boulder beds intermixed with coarse sand and limestone silt, prominently coated in white calcium carbonate encrustations (caliche) in the high Uco Valley.",
    elevation: "800m to 1,650m+ above sea level, placing Mendoza among the highest commercial fine wine regions on Earth.",
    riverInfluence: "The Mendoza, Tunuyán, and Diamante rivers carry mineral-rich glacial snowmelt channeled through the historical indigenous 'acequia' canal network to irrigate desert vineyards."
  },

  grapes: [
    {
      name: 'Malbec',
      percentage: 65.0,
      type: 'Red',
      role: "The undisputed flagship grape of Argentina, sourced from pre-phylloxera French massale selections. High-altitude mountain sites yield inky, dark cherry, blackberry, violet perfume, fine graphite minerality, and silky, structured tannins without excess weight."
    },
    {
      name: 'Cabernet Franc',
      percentage: 15.0,
      type: 'Red',
      role: "The superstar grape of high-altitude Uco Valley (Gualtallary and Altamira), delivering electric natural acidity, crushed red berries, bell pepper reduction, wild sage, and tight mineral tension."
    },
    {
      name: 'Cabernet Sauvignon',
      percentage: 10.0,
      type: 'Red',
      role: "Historic staple in Luján de Cuyo and Maipú; yields classical cassis, cedar, tobacco leaf, and firm structural tannins for long-lived blends."
    },
    {
      name: 'Bonarda (Corbeau)',
      percentage: 5.0,
      type: 'Red',
      role: "Traditional heritage red variety delivering succulent black cherry fruit, wild herbs, and low astringent tannins."
    },
    {
      name: 'Chardonnay & Semillon',
      percentage: 5.0,
      type: 'White',
      role: "High-altitude white wine revolution: San Pablo and Gualtallary produce crystalline, reductive Chardonnay and waxy, age-worthy old-vine Semillon with laser-like acidity."
    }
  ],

  structure: {
    body: 8.2,
    acidity: 7.8,
    tannin: 7.6,
    sweetness: 1.0,
    alcohol: 14.0,
    agingPotential: "5 - 35+ Years"
  },

  classification: {
    system: "INV (Instituto Nacional de Vitivinicultura) Appellation & IG Law",
    description: "Operates an official statutory framework defined by Law 25.163, incorporating DOCs (Luján de Cuyo and San Rafael) alongside terroir-delimited Indicaciones Geográficas (IGs) defined by soil and climate studies.",
    tiers: [
      {
        name: "Indicación Geográfica (IG)",
        detail: "Legally delimited single-terroir appellations (e.g. Gualtallary, Paraje Altamira, San Pablo, Los Chacayes, Las Compuertas) defined by geopedological boundaries and elevation criteria."
      },
      {
        name: "DOC (Denominación de Origen Controlada)",
        detail: "Statutory municipal classifications: Luján de Cuyo DOC (established 1989) and San Rafael DOC (established 1993), mandating approved grape varieties, strict maximum yields, and mandatory oak aging."
      },
      {
        name: "Indicación de Procedencia (IP)",
        detail: "Regional geographical indications identifying broad viticultural origin (e.g. Mendoza, Valle de Uco, Patagonia)."
      }
    ],
    styles: [
      {
        name: "High-Altitude Single-Vineyard Malbec",
        desc: "Precision terroir bottlings from caliche-rich Uco Valley benchlands, fermented in concrete eggs or neutral wood to highlight chalky minerality, violet florality, and natural acidity."
      },
      {
        name: "Classical Luján de Cuyo Malbec",
        desc: "Opulent, velvety, rich expressions from centenary ungrafted vines aged in French oak barrels, showing sweet black cherry, plum, and mocha."
      },
      {
        name: "High-Altitude Mountain Cabernet Franc",
        desc: "Aromatic, savory, and mineral-driven red wines displaying wild herbs, crushed stone, and vibrant energy."
      },
      {
        name: "Alpine Chardonnay & Semillon",
        desc: "Mineral, saline, and reductive white wines from the highest cold-climate vineyard terraces above 1,300m elevation."
      }
    ]
  },

  flavorProfile: {
    primary: ['Dark Black Cherry & Damson Plum', 'Crushed Violet Florals', 'Wild Mountain Thyme & Jarilla', 'Blackberry Liqueur', 'Chalk Dust & Saline Minerality'],
    secondary: ['Graphite & Pencil Lead', 'Dark Cocoa & Roasted Espresso', 'Tobacco Leaf & Cedar', 'Balsamic Fig', 'Crushed Gravel & Gunflint'],
    palate: "Explosive, energetic attack bursting with ripe black and blue fruits, immediately framed by tingling mountain acidity and fine-grained, chalky-limestone tannins. Expansive mid-palate exhibiting wild savory herbs and floral violets, culminating in an extraordinary, long, saline-mineral finish with zero heat or heaviness."
  },

  foodPairings: MENDOZA_FOOD_PAIRINGS,
  subRegions: MENDOZA_SUBREGIONS,
  grandCrus: MENDOZA_GRAND_CRUS,
  crus: MENDOZA_GRAND_CRUS,
  technicalRegulations: MENDOZA_TECHNICAL_REGULATIONS,
  prestigeCuvees: MENDOZA_PRESTIGE_CUVEES,
  iconicDomaines: MENDOZA_ICONIC_DOMAINES,
  iconicGrowers: MENDOZA_ICONIC_DOMAINES
};
