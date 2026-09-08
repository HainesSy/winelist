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
    title: "Andean Orogeny, Calcareous Pedology & Quaternary Alluvial Stratigraphy",
    summary: "Mendoza's vineyards span the piedmont of the Cordillera Principal and Frontal Andes. Soil stratigraphy is dictated by torrential post-glacial flash floods (aluviones) depositing granite and metamorphic gravels, combined with arid desert weathering that coats subterranean pebbles in brilliant white calcium carbonate (caliche).",
    formations: [
      {
        id: 'andean-uplift',
        name: "Cenozoic Andean Uplift (Cordillera Principal & Frontal)",
        spanishName: "Levantamiento Andino Cenozoico",
        period: "Neogene to Quaternary (Miocene Uplift, ~20–5 Ma)",
        fossil: "High cordillera marine limestones & Ammonites",
        characteristics: "Subduction of the oceanic Nazca Plate beneath the continental South American Plate forced the Andes upward to 6,961m (Mount Aconcagua). Blocks Pacific maritime moisture completely, creating a hyper-arid continental desert with under 200mm annual rainfall.",
        keyAreas: ["Entire Mendoza viticultural corridor", "Uco Valley", "Luján de Cuyo"],
        wineImpact: "Guarantees intense solar irradiance (300+ days/year), low disease pressure, dry vine canopies, and massive diurnal thermal swings up to 22°C (40°F) that preserve vibrant malic acidity."
      },
      {
        id: 'calcium-carbonate-caliche',
        name: "Pedogenic Calcium Carbonate (Caliche / Caliza Superficial)",
        spanishName: "Costras de Carbonato de Calcio (Caliche)",
        period: "Late Pleistocene to Holocene (Pedogenic Evaporitic Crusts)",
        fossil: "Rhizosphere microbiomes & rhizobacteria fossil coats (Bacillus)",
        characteristics: "Arid desert evaporation draws calcium-rich subterranean water upward, precipitating dense, chalky white calcium carbonate (CaCO3) coatings on granite, rhyolite, and schist pebbles between 30cm and 120cm depth.",
        keyAreas: ["Gualtallary (Monasterio & Tupungato Winelands)", "Paraje Altamira alluvial cone", "San Pablo IG", "El Cepillo"],
        wineImpact: "Restricts root depth, limits vegetative vigor, lowers berry pH (3.45–3.60), and imparts an electric, tactile, chalky-saline textural grip to high-altitude Malbec and Cabernet Franc."
      },
      {
        id: 'alluvial-cones-aluviones',
        name: "Quaternary Alluvial Cones & Glacial Wash (Aluviones)",
        spanishName: "Abanicos Aluviales Cuaternarios del Río Tunuyán y Mendoza",
        period: "Pleistocene to Holocene (<1.8 Ma)",
        fossil: "None (Fluvio-glacial and torrential alluvium)",
        characteristics: "Torrential melting of Andean glaciers and episodic summer mountain flash floods (aluviones) deposited immense debris fans of rounded granite boulders, metamorphic gravels, and coarse quartz sand.",
        keyAreas: ["Tunuyán River Basin (Los Chacayes, Vista Flores)", "Mendoza River Alluvial Plain (Las Compuertas, Perdriel, Agrelo)"],
        wineImpact: "Exceptional free drainage forcing vine taproots deep into subterranean gravels, preventing waterlogging and producing concentrated, thick-skinned berries rich in anthocyanins."
      },
      {
        id: 'aeolian-loess-silt',
        name: "Aeolian Sand & Fine Desert Loess (Arenas Eólicas)",
        spanishName: "Depósitos Eólicos y Limos Finos",
        period: "Holocene (<10,000 years)",
        fossil: "None (Windblown volcanic dust and quartz sands)",
        characteristics: "Fine sandy and silty topsoils blown from the Patagonian steppe and Andean foothills, layered over rocky gravel subsoils.",
        keyAreas: ["Central Luján de Cuyo", "Maipú (Barrancas)", "Eastern Plain (Santa Rosa)"],
        wineImpact: "Enhances aromatic fruit forwardness, sweet ripe tannins, and generous plush mid-palate texture in classic Mendoza Malbec and Bonarda."
      },
      {
        id: 'precordillera-volcanic-tuff',
        name: "Precordillera Metamorphic Basement & Volcanic Tuff",
        spanishName: "Basamento Metamórfico y Cenizas Volcánicas Andinas",
        period: "Paleozoic to Tertiary (~300–15 Ma)",
        fossil: "Paleozoic marine trilobites in Precordillera marine sediments",
        characteristics: "Ancient metamorphic schist, phyllite, and volcanic rhyolite tufts forming the foothills of the Frontal Cordillera.",
        keyAreas: ["Las Compuertas", "Cacheuta", "Ugarteche foothill benches"],
        wineImpact: "Yields structured, mineral-laden wines with firm savory backbone, graphite notes, and lingering iron-like tension."
      }
    ]
  },

  climatology: {
    system: "High-Altitude Semi-Arid Desert Climatology (Winkler Region III to IV / Helvitia Zones)",
    description: "Located between 32° and 34° South latitude in the extreme rain shadow of the 6,000m Andes, Mendoza receives a mere 180–250mm of annual precipitation. Vineyards thrive between 650m and 1,650m elevation, where solar ultraviolet (UV-B) radiation is intense, stimulating the vine to synthesize thick skins rich in anthocyanins, resveratrol, and supple tannins. Diurnal temperature variations regularly exceed 15–22°C (27–40°F), allowing nights to cool down to 10–14°C, locking in brisk natural acidity.",
    winds: [
      {
        name: "El Viento Zonda (Andean Foehn Wind)",
        effect: "A violent, hot, hyper-dry foehn wind descending from the Pacific over the 6,000m Andean crest into the western valleys in spring and early summer. Air compresses and heats adiabatically, driving temperatures over 38°C (100°F) while relative humidity plunges below 10%. Cleanses the vineyard atmosphere, eliminates fungal rot entirely, but requires careful canopy shading and irrigation during spring flowering to prevent coulure (shatter)."
      },
      {
        name: "El Pampero (Polar Cold Front)",
        effect: "A frigid, dry southwesterly wind blowing up from Antarctica and the Patagonian ice fields. Sweeps through Mendoza following autumn cold fronts, plummeting night temperatures and bringing severe risks of spring frosts (heladas tardías) in low-lying valley bottoms, necessitating active wind machines, vineyard sprinklers, and higher-altitude hillside planting."
      },
      {
        name: "La Sudestada (Southeasterly Maritime Infusion)",
        effect: "A cool, moist air mass pushing inland from the South Atlantic and Río de la Plata estuary. Moderates mid-summer heatwaves, introduces refreshing evening breezes into Eastern Mendoza and Maipú, and provides temporary cloud cover that shields ripening grape skins from sunburn during veraison."
      }
    ]
  },

  grapes: {
    title: "Argentine Ampelography: Malbec Massale Selections, High-Altitude Cabernet Franc & Heritage Varieties",
    description: "Argentina holds the world's most valuable genetic repository of pre-phylloxera French massale cuttings imported before the 1870s European phylloxera epidemic. Malbec reigns supreme alongside thrilling high-altitude Cabernet Franc, indigenous Torrontés, and ancient Criolla varieties:",
    major: [
      {
        id: 'malbec',
        name: "Malbec (Côt / Auxerrois)",
        frenchSynonym: "Côt de Cahors / Pressac",
        percentage: 58.0,
        type: "Red",
        epicenter: "Uco Valley (Gualtallary, Paraje Altamira) & Luján de Cuyo (Las Compuertas, Perdriel, Agrelo)",
        profile: "Argentina's crowning glory. Sourced from pre-phylloxera massale selections featuring small tight clusters and minuscule berries. Shows intoxicating aromas of fresh violets, black cherries, blueberries, plums, dark cocoa, and graphite. At high altitude on caliche soils, it develops an electric mineral tension, saline chalkiness, and vibrant natural acidity without herbaceous greenness.",
        role: "Primary noble variety forming single-varietal icons and the structural core of prestige Andean blends.",
        clones: ["Catena Massale Selections (1898)", "INRA 595", "INRA 598", "Mendoza Pre-Phylloxera Massale"],
        benchmarkCuvees: ["Catena Zapata Adrianna Vineyard Mundus Bacillus Terrae", "Zuccardi Finca Piedra Infinita", "Achaval-Ferrer Finca Bella Vista", "Cobos Chañares Estate"]
      },
      {
        id: 'cabernet-franc',
        name: "Cabernet Franc",
        frenchSynonym: "Bouchet / Breton",
        percentage: 14.0,
        type: "Red",
        epicenter: "Gualtallary, San Pablo & Paraje Altamira (Valle de Uco)",
        profile: "The critical darling and stylistic vanguard of the high-altitude Uco Valley. Yields crystalline redcurrant, wild raspberry, pink peppercorn, bell pepper nuances, crushed stone, and laser-like acidity with chiseled, linear tannins.",
        role: "Key standalone superstar variety and vital structural partner in Bordeaux-style prestige cuvées.",
        clones: ["Clone 214", "Clone 327", "Massale Uco Valley"],
        benchmarkCuvees: ["El Enemigo Gran Enemigo Gualtallary Single Vineyard", "Zorzal Eggo Franco", "Catena Zapata Angélica Zapata Alta"]
      },
      {
        id: 'bonarda',
        name: "Bonarda (Corbeau / Douce Noire)",
        frenchSynonym: "Charbono / Corbeau de Savoie",
        percentage: 12.0,
        type: "Red",
        epicenter: "Eastern Mendoza (Rivadavia, San Martín) & Maipú (Ugarteche)",
        profile: "Historically Argentina's most planted red grape before being surpassed by Malbec. Originating in Savoie (Douce Noire), it produces deep ruby wines with ripe black cherry, wild plum, fig, sweet baking spice, supple tannins, and bright natural acidity.",
        role: "Essential food-friendly red, historic workhorse, and increasingly crafted into artisanal old-vine single-cru cuvées.",
        clones: ["Historic Mendoza Criolla Field Selections"],
        benchmarkCuvees: ["Passionate Wine 'Vía Revolucionaria' Bonarda Pura", "Catena Zapata La Marchigiana Bonarda Tinaja", "Colomé / Altocedro Reserva"]
      },
      {
        id: 'torrontes-riojano',
        name: "Torrontés Riojano",
        frenchSynonym: "Torrontés Argentino",
        percentage: 8.0,
        type: "White",
        epicenter: "Cafayate (Salta) & Uco Valley high terraces (1,200m+)",
        profile: "Argentina's only indigenous noble grape variety, a historic natural cross of Criolla Chica (Listán Prieto) × Muscat of Alexandria. Exuberantly aromatic with orange blossom, jasmine, white peach, lychee, and rosewater, yet surprises on the palate with a bone-dry, refreshing citrus finish.",
        role: "Argentina's signature white wine, perfected in high-altitude sandy vineyards.",
        benchmarkCuvees: ["Susana Balbo Signature Torrontés", "Colomé Torrontés Calchaquí", "Catena Zapata White Stones"]
      },
      {
        id: 'chardonnay',
        name: "Chardonnay",
        frenchSynonym: "Beaunois",
        percentage: 5.0,
        type: "White",
        epicenter: "Gualtallary (Adrianna Vineyard 1,450m) & San Pablo (1,400m)",
        profile: "At extreme Andean elevations (1,300m–1,600m), Chardonnay thrives in limestone-rich soils. Explodes with aromas of Meyer lemon, white peach, flint, crushed chalk, hazelnut, and intense saline minerality with Burgundian tension and zero flabbiness.",
        role: "The leading white variety for world-class, age-worthy single-terroir whites and traditional method sparkling wines.",
        benchmarkCuvees: ["Catena Zapata Adrianna Vineyard White Stones", "Catena Zapata White Bones", "Zuccardi Botánico Chardonnay"]
      },
      {
        id: 'semillon',
        name: "Semillon",
        frenchSynonym: "Sémillon de Bordeaux",
        percentage: 3.0,
        type: "White",
        epicenter: "Historic La Consulta, Perdriel & Tupungato old vines",
        profile: "Planted heavily in the late 19th and early 20th centuries. Centenarian ungrafted bush vines yield textured, waxy, lemon curd, chamomile, lanolin, and beeswax-laced dry whites with sensational 20+ year cellaring capacity.",
        role: "Historic white treasure experiencing a profound artisanal sommelier revival.",
        benchmarkCuvees: ["Matias Riccitelli Old Vines from Patagonia & Uco Semillon", "Mendel Semillon", "Finca Suarez Semillon"]
      }
    ],
    heritage: [
      {
        id: 'criolla-chica',
        name: "Criolla Chica (Listán Prieto / Mission)",
        frenchSynonym: "País (Chile) / Mission (California)",
        percentage: "<1.0",
        type: "Red",
        epicenter: "Lavalle, Maipú & Santa Rosa old pergolas",
        profile: "Brought to Argentina by Jesuit missionaries and Spanish conquistadors in the 16th century. Pale ruby, bursting with wild strawberries, sour cherries, hibiscus tea, dry oregano, and crunchy low-tannin freshness.",
        role: "Ancestral genetic heritage variety now championed in minimal-intervention, whole-cluster natural wines.",
        benchmarkCuvees: ["El Esteco Old Vines Criolla", "Polígonos del Valle de Uco Criolla", "Passionate Wine Criolla"]
      },
      {
        id: 'petit-verdot',
        name: "Petit Verdot",
        percentage: "<1.0",
        type: "Red",
        epicenter: "Luján de Cuyo & Eastern Uco Valley",
        profile: "Late-ripening Bordeaux grape that struggles in cold climates but achieves breathtaking physiological maturity under Mendoza's 300+ days of mountain sun. Deep violet-black, black pepper, leather, and immense structural tannins.",
        role: "Crucial blending agent for color and backbone; occasionally bottled as rare, cult single-varietal wines.",
        benchmarkCuvees: ["Finca Decero Mini Ediciones Petit Verdot", "Ruca Malen Petit Verdot Terroir Series"]
      },
      {
        id: 'cabernet-sauvignon',
        name: "Cabernet Sauvignon",
        percentage: "<1.0",
        type: "Red",
        epicenter: "Perdriel & Agrelo (Luján de Cuyo)",
        profile: "Ripens to perfection in the warmer gravel benches of Luján de Cuyo. Cassis, tobacco leaf, roasted red pepper, cedar box, and structured, ripe muscular tannins.",
        role: "Historic staple of classic Argentine Bordeaux-style blends.",
        benchmarkCuvees: ["Cobos Marchiori Vineyard Cabernet Sauvignon", "Catena Zapata Nicolás Catena Zapata"]
      }
    ]
  },

  classification: {
    system: "INV (Instituto Nacional de Vitivinicultura) & Appellation Law (Ley 25.163)",
    description: "Argentine wine law is administered federally by the Instituto Nacional de Vitivinicultura (INV) under Law 25.163 (enacted 1999). It establishes an official three-tier geographical hierarchy, while also codifying strict statutory barrel/bottle aging decrees (Reserva and Gran Reserva) and grape varietal labeling purity laws (minimum 85% rule).",
    pyramid: [
      {
        tier: "DOC (Denominación de Origen Controlada)",
        sharePct: "2.5%",
        aocCount: "2 Recognized DOCs",
        yieldLimits: "Max 70–80 hl/ha (Luján de Cuyo DOC)",
        minAbv: "13.5% vol.",
        criteria: "Strict legal boundaries, certified grape varieties (min 85% Malbec in Luján de Cuyo), maximum yields, and mandatory wood aging (minimum 12 months in oak barrels followed by 12 months in bottle prior to release).",
        description: "The traditional top statutory tier created by visionary producers: Luján de Cuyo DOC (established 1989, recognized internationally in 1991) and San Rafael DOC (established 1993 in southern Mendoza for Malbec/Cabernet)."
      },
      {
        tier: "Indicación Geográfica (IG / Terroir Appellations)",
        sharePct: "22.5%",
        aocCount: "112 Delimited IGs",
        yieldLimits: "Max 100 hl/ha for certified estate wines",
        minAbv: "12.5% – 14.5% vol.",
        criteria: "Delimited strictly according to rigorous geopedological, topographical, and climatic criteria based on extensive soil pit (calicata) analysis and electrical conductivity terroir mapping.",
        description: "The dynamic engine of fine Argentine viticulture. World-renowned terroir IGs include Paraje Altamira, Gualtallary, Los Chacayes, San Pablo, Pampa El Cepillo, and Las Compuertas."
      },
      {
        tier: "Indicación de Procedencia (IP / Regional Indications)",
        sharePct: "75.0%",
        aocCount: "Province & Regional Zones",
        yieldLimits: "No statutory maximum limit",
        minAbv: "11.5% vol.",
        criteria: "Broad geographical origin certifying that at least 80% of the grapes originated within the stated province or political territory.",
        description: "Regional classifications identifying broad wine origins such as Mendoza, Valle de Uco, Cuyo, or Patagonia, providing reliable geographic tracing for everyday and entry-level wines."
      }
    ],
    agingRules: [
      { tier: "Reserva (INV Statutory Decree)", rule: "Minimum 12 months aging for red wines (min 6 months in wood); minimum 6 months aging for white and rosé wines (no wood minimum mandatory). Must be made from 100% noble recognized vinifera varieties with restricted yields." },
      { tier: "Gran Reserva (INV Statutory Decree)", rule: "Minimum 24 months total aging for red wines (at least 12 months in oak barrels); minimum 12 months aging for white and rosé wines (at least 6 months in oak barrels). Represents the pinnacle of estate wood-aged cuvées." },
      { tier: "DOC Luján de Cuyo Maturation Mandate", rule: "Minimum 24 months aging from harvest, including a mandatory minimum of 12 months in oak barrels (barricas de roble) followed by 12 months of maturation in glass bottle prior to commercial release." },
      { tier: "Varietal Purity Law (85% Rule)", rule: "To state a single grape variety, vintage year, or geographic IG on the front label, Argentine federal law requires that a minimum of 85% of the wine must be derived strictly from that stated cépage, harvest, or IG." }
    ]
  },

  vinification: {
    title: "Modern Andean Cellar Craft: Uncoated Concrete Eggs, Calicatas & Large Neutral Oak",
    summary: "The contemporary Argentine winemaking philosophy has undergone a radical terroir-driven evolution away from heavy new 225L American oak barriques and high-extraction fruit bombs toward unadorned expression of high-altitude mountain minerality, tension, and native floral freshness:",
    traditions: [
      {
        practice: "Uncoated Concrete Eggs & Epoxyless Vats (Huevos de Hormigón)",
        details: "Pioneered in Mendoza by Zuccardi, Matías Michelini, and Sebastian Zuccardi. Oval concrete vessels induce continuous natural vortex convection currents during fermentation without electricity. The raw microporous concrete allows gentle micro-oxygenation while imparting zero wood flavoring, accentuating pure fruit aromatics and chalky caliche mineral salinity."
      },
      {
        practice: "Whole-Cluster & Stem Inclusion Fermentation",
        details: "Elite high-altitude winemakers ferment with 20% to 100% whole clusters (racimos enteros). The ripe lignified green stems absorb heat during vigorous fermentations, lower overall alcohol levels slightly, supply natural potassium, and infuse high-toned herbal spice, white pepper, and grippy vertical tannins."
      },
      {
        practice: "Calicatas (Soil Pits) & Electrical Conductivity Terroir Mapping",
        details: "Vineyards are dissected into micro-parcels using mechanical backhoe soil pits (calicatas) and EM38 electromagnetic soil conductivity scanners. Grapes from patches with high calcium carbonate (caliche) coating are harvested, fermented, and aged completely independently in separate concrete vats."
      },
      {
        practice: "Large Neutral Oak Foudres (Fudres) & Stockinger Casks",
        details: "A wholesale migration from 225L small new barriques to large 2,500L to 5,000L untoasted Austrian and French oak foudres (Stockinger). Allows slow oxidative evolution and polymerizes tannins without masking delicate floral violet and mountain thyme notes under vanilla or toast."
      },
      {
        practice: "Acequia Snowmelt Canal Irrigation & Controlled Deficit Regimes",
        details: "Centuries-old canal networks (acequias) originally engineered by the pre-Columbian Huarpe people channel pure mineral-rich Andean snowmelt from the Mendoza and Tunuyán rivers. Modern estates combine traditional flood irrigation (surco) with precision drip systems (goteo) using regulated deficit irrigation (RDI) to limit vine canopy size and concentrate polyphenol development."
      },
      {
        practice: "Parral (Pergola) vs. Espaldera (VSP) Canopy Architecture",
        details: "Historic vineyards utilize overhead pergola training (parral) at 1.8m height, shielding grapes from extreme solar UV radiation and violent summer hailstorms (granizo). Modern high-density vineyards favor Vertical Shoot Positioned (espaldera) trellising, often covered with anti-hail protective netting (malla antigranizo)."
      }
    ]
  },

  businessModels: {
    title: "Production Models & The Argentine Viticultural Landscape",
    models: [
      {
        type: "Historic Dynasty Bodegas & Centennial Estancias",
        frenchTerm: "Grandes Bodegas Históricas",
        description: "Established in the late 19th and early 20th centuries by visionary European immigrant families (Catena, Peñaflor, Trapiche, Norton, Luigi Bosca). These landmark estates control thousands of hectares across multiple elevations and pioneered the modern global export boom of Argentine Malbec.",
        examples: ["Bodega Catena Zapata", "Bodega Norton", "Luigi Bosca", "Trapiche"]
      },
      {
        type: "Franco-Argentine Joint Ventures & Cult Collaborations",
        frenchTerm: "Partenariats Franco-Argentins",
        description: "Prestigious collaborations between Bordeaux/Burgundian icons and Mendoza pioneers, fusing Old World assemblage craft and centuries of cellar tradition with extreme high-altitude Andean terroir.",
        examples: ["Cheval des Andes (Château Cheval Blanc × Terrazas de los Andes)", "Caro (Château Lafite Rothschild × Catena)", "Clos de los Siete (Michel Rolland)"]
      },
      {
        type: "Artisanal Terroirists & Minimal-Intervention Micro-Vignerons",
        frenchTerm: "Vignerons Artisans & Vins Vivants",
        description: "A dynamic vanguard of young vignerons leading the organic, biodynamic, and low-intervention revolution in Uco Valley. Utilizing raw concrete eggs, amphorae, flor yeast maturation, and ancient field blends to redefine South American wine.",
        examples: ["Zuccardi Valle de Uco", "Matías Riccitelli", "SuperUco (Michelini Brothers)", "Per Se", "El Enemigo"]
      }
    ]
  },

  aging: {
    title: "Statutory INV & DOC Barrel and Bottle Aging Requirements",
    summary: "Argentine wine law decrees rigorous statutory maturation thresholds for wines bearing the prestigious Reserva and Gran Reserva quality designations:",
    vintage: {
      title: "Gran Reserva & DOC Statutory Maturation",
      minTotalMonths: 24,
      minWoodMonths: 12,
      rule: "Red Gran Reserva wines require a minimum of 24 months total aging, with at least 12 months spent maturing in oak barrels (barricas de roble). DOC Luján de Cuyo requires 24 months total aging including 12 months in oak and 12 months in bottle prior to commercial release.",
      description: "Guarantees complete integration of anthocyanins, wood ellagitannins, and velvety polymerization, ensuring bottles possess 15 to 30 years of graceful cellar potential."
    },
    nonVintage: {
      title: "Reserva Quality Designation",
      minTotalMonths: 12,
      minLeesMonths: 6,
      rule: "Red Reserva wines require a minimum of 12 months aging with mandatory oak contact (typically 6 to 12 months in barriques or foudres). White and Rosé Reserva wines require 6 months aging with restricted vineyard yields.",
      description: "Provides elevated structural complexity, rich spice, and supple fruit balance compared to youthful entry-level young wines."
    }
  },

  ancillaryAocs: [
    {
      name: "Patagonia IG (Río Negro & Neuquén)",
      establishedYear: 2002,
      type: "Cool-Climate Southern Frontier IG",
      permittedGrapes: ["Pinot Noir", "Malbec", "Merlot", "Semillon", "Chardonnay"],
      description: "Located 1,000 km south of Mendoza at lower elevations (250m–400m) along the 39th parallel South. Extreme howling Patagonian winds, long daylight hours, and cool nights produce diaphanous, earthy Pinot Noir and mineral-driven, crunchy Malbec.",
      benchmarkProducers: ["Bodega Chacra (Piero Incisa della Rocchetta)", "Bodega Noemía", "Humberto Canale"]
    },
    {
      name: "Cafayate & Calchaquí Valleys IG (Salta & Catamarca)",
      establishedYear: 2003,
      type: "Extreme Ultra-High Altitude IG",
      permittedGrapes: ["Torrontés Riojano", "Malbec", "Tannat", "Cabernet Sauvignon"],
      description: "Among the highest commercial vineyards on Earth, ascending from 1,700m to an astonishing 3,111m elevation at Colomé (Altura Máxima). Intense UV rays generate nearly black, inky Malbec and Tannat with monumental tannins and floral Torrontés of unmatched intensity.",
      benchmarkProducers: ["Bodega Colomé (Altura Máxima)", "El Esteco", "San Pedro de Yacochuya"]
    },
    {
      name: "Pedernal Valley IG (San Juan)",
      establishedYear: 2013,
      type: "High-Altitude Limestone Valley IG",
      permittedGrapes: ["Malbec", "Syrah", "Cabernet Sauvignon", "Chardonnay"],
      description: "A secluded high mountain valley at 1,400m in San Juan province, resting on genuine geological limestone and flint gravels rather than just caliche coatings. Yields piercingly fresh Malbec and Syrah with cool herbal notes and razor-sharp acidity.",
      benchmarkProducers: ["Pyros Wines", "Fuego Blanco", "Graffigna"]
    }
  ],

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
