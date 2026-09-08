/**
 * ============================================================================
 * SPAIN SOMMELIER DATASET (CMS LEVEL 3 / MASTER SOMMELIER STANDARD)
 * ============================================================================
 * 
 * Comprehensive Spanish fine wine catalog:
 *   - 5 Key Viticultural Subregions:
 *     (Rioja Alta & Alavesa, Ribera del Duero, Priorat, Rías Baixas / Galicia, Rioja Oriental)
 *   - DO Rías Baixas 5 Delimited Sub-zones:
 *     (Val do Salnés, O Rosal, Condado do Tea, Soutomaior, Ribeira do Ulla)
 *   - Geological Pedology:
 *     (Devonian Llicorella Slate, Calcareous Clay-Limestone, Günzian Alluvial Gravels,
 *      Decomposed Granite Xabre, Ancient River Terraces)
 *   - Ampelography & Viticulture:
 *     (Tempranillo / Tinto Fino, Garnacha Tinta, Albariño, Graciano, Mazuelo / Cariñena,
 *      Viura / Macabeo, Godello, Loureira, Treixadura; Granite Emparrado Pergolas)
 *   - Classification Frameworks:
 *     (DOCa / DO Aging Hierarchy: Crianza, Reserva, Gran Reserva; Viñedo Singular,
 *      Vino de Pago, Vins de Finca Qualificada)
 *   - Benchmark Prestige Cuvées & Iconic Domaines
 *   - Authentic Regional Food Pairings & Service Directives
 * ============================================================================
 */

export const SPAIN_SUBREGIONS = [
  {
    id: 'rioja-alta-alavesa',
    name: "Rioja Alta & Rioja Alavesa",
    district: "Northern Ebro River Basin",
    lat: 42.5800,
    lng: -2.7500,
    terroir: "High-altitude Atlantic-continental slopes sheltered by the dramatic Sierra de Cantabria wall. Step-terraced calcareous clay-limestone (arcillo-calcárea) soils at 450m–750m elevation with high calcium content that preserves searing acidity and fine structure in Tempranillo.",
    focus: "Aristocratic, long-lived Tempranillo Gran Reservas, single-parcel Viñedos Singulares, and cellar-worthy oak-aged Viura whites.",
    geology: "Cretaceous and Tertiary calcareous clay-limestone strata, white chalk marls, and iron-rich ferruginous clay terraces.",
    dominantGrapes: "Tempranillo (80%), Graciano (10%), Mazuelo (5%), Viura (5%)",
    microTerroirs: [
      { name: "Sonsierra & San Vicente", focus: "Extreme limestone terraces beneath the cliffs producing high-toned, chalky Tempranillo." },
      { name: "Haro & Barrio de la Estación", focus: "The historic cradle of 19th-century bodegas producing classical American and French oak-aged Gran Reservas." },
      { name: "Labastida & Laguardia", focus: "Medieval hilltop communes in Rioja Alavesa famous for pure floral elegance and freshness." }
    ],
    description: "The historical heart of Spanish fine wine. Cool Atlantic ocean breezes meet continental sunshine, crafting wines of noble restraint, spicy cedar complexity, and decades-long cellaring capacity."
  },
  {
    id: 'ribera-del-duero',
    name: "Ribera del Duero",
    district: "Castilian High Meseta",
    lat: 41.6500,
    lng: -3.8000,
    terroir: "Extreme high-altitude continental plateau (Meseta Central) along the Duero River at 750m to 1,000m+ elevation. Harsh winters, scorching summer days, and drastic nighttime drops of up to 25°C (45°F) that preserve vibrant malic acidity while building thick, polyphenol-dense grape skins.",
    focus: "Monumental, muscular, inky Tinto Fino (Tempranillo) displaying blackberry, graphite, balsamic freshness, and noble aging potential.",
    geology: "Quaternary alluvial gravel terraces, limestone chalk layers (páramos), and alternating sedimentary marl-clay beds.",
    dominantGrapes: "Tinto Fino / Tempranillo (90%), Cabernet Sauvignon (5%), Merlot (3%), Malbec & Albillo Mayor (2%)",
    microTerroirs: [
      { name: "Milla de Oro (Valbuena & Pesquera)", focus: "The golden mile of benchmark estates (Vega Sicilia, Pingus, Alión) along riverbed gravels and chalk benches." },
      { name: "Soria High Altitude", focus: "Extreme eastern frontier at 950m–1,050m with pre-phylloxera ungrafted bush vines yielding electric mineral freshness." },
      { name: "Páramos of Burgos", focus: "High barren limestone plateaus producing chiseled, structured, tightly wound wines." }
    ],
    description: "The fortress of Castilian viticulture. Extreme altitude and diurnal swings forge Tempranillo of legendary power, concentration, and aristocratic grandeur."
  },
  {
    id: 'priorat',
    name: "Priorat (DOQ)",
    district: "Tarragona Coastal Mountains",
    lat: 41.2000,
    lng: 0.8200,
    terroir: "A savage amphitheater of steep terraced mountain slopes (costers) in southern Catalonia. The soil is the legendary 'Llicorella'—ancient Devonian black slate and quartz flakes with virtually zero organic matter, forcing vine roots 15 meters deep in search of water.",
    focus: "Intense, inky old-vine Garnacha Tinta and Cariñena (Samsó) marked by crushed slate minerality, wild scrub herbs (garrique), and immense palate presence.",
    geology: "Devonian metamorphic black and reddish slate plates (llicorella) with quartz veins, highly reflective and thermal-retentive.",
    dominantGrapes: "Garnacha Tinta (45%), Cariñena / Samsó (40%), Syrah (10%), Cabernet Sauvignon (5%)",
    microTerroirs: [
      { name: "Gratallops", focus: "Warm central village where the 'Clos' pioneers (René Barbier, Álvaro Palacios) founded the modern Priorat revolution." },
      { name: "Porrera", focus: "Cooler, higher-elevation valley renowned for profound old-vine Cariñena with searing acidity and crushed graphite notes." },
      { name: "Escaladei", focus: "High northern slopes beneath the Montsant cliff face, birthplace of Carthusian monastic winemaking in the 12th century." }
    ],
    description: "One of only two DOQ/DOCa regions in Spain. Extreme mountain slopes and black slate create wines of primordial mineral intensity, dark fruit liqueur, and unforgettable tension."
  },
  {
    id: 'rias-baixas',
    name: "Rías Baixas (Galicia)",
    district: "Atlantic Coastal Fjords",
    lat: 42.4500,
    lng: -8.7000,
    terroir: "A dramatic network of sunken Atlantic river valleys (rías) in lush green southwestern Galicia. Hyper-maritime Atlantic climate with high rainfall (over 1,600mm), ocean mists, and morning sea breezes. Vines are trained high on traditional granite pergolas (emparrado) to promote air circulation and prevent fungal disease over poor, decomposed granite soils (xabre).",
    focus: "The world benchmark for Albariño: crystalline, saline, citrus-driven dry whites with tactile granite minerality, white floral perfume, and immense longevity when aged on lees (sobre lías).",
    geology: "Pre-Cambrian and Hercynian decomposed granite sand (xabre), quartz, alluvial silts, and marine coastal deposits.",
    dominantGrapes: "Albariño (96%+), Loureira (2%), Treixadura (1%), Caiño Blanco (1%)",
    microTerroirs: [
      { name: "Val do Salnés", focus: "The coastal ground-zero around Cambados on granite xabre; the coolest, wettest, and most saline, chiseled expression of 100% Albariño." },
      { name: "O Rosal", focus: "Lower basin of the Miño River bordering Portugal; warmer climate producing lush, aromatic blends of Albariño with Loureira and Treixadura." },
      { name: "Condado do Tea", focus: "Warmer inland mountainous sector along the Tea River; granite and slate soils yielding richer, softer, stone-fruit driven whites." },
      { name: "Soutomaior", focus: "Microscopic sub-zone at the head of the Ría de Vigo with steep sandy hillside slopes on granite." },
      { name: "Ribeira do Ulla", focus: "Northern inland zone along the Ulla River on alluvial soils, producing fresh, high-acid Albariño and red Galician heritage varieties." }
    ],
    description: "Spain's green Atlantic paradise. Decomposed granite soils, perpetual ocean breezes, and ancient pergolas craft the world's most electrifying, saline-mineral white wines from indigenous Albariño."
  },
  {
    id: 'rioja-oriental',
    name: "Rioja Oriental (Baja)",
    district: "Southeastern Ebro Plain",
    lat: 42.3000,
    lng: -2.0000,
    terroir: "Warmer, sunnier Mediterranean-influenced sector of Rioja along the southeastern Ebro plain. Lower altitude, ferruginous clay and alluvial silt soils producing lush, generous, ripe Garnacha and deeply colored blending wines.",
    focus: "Warm, spicy, succulent Garnacha Tinta and structured, dark-fruited Graciano.",
    geology: "Ferruginous clay, alluvial pebbles, and limestone silts on river terraces.",
    dominantGrapes: "Garnacha Tinta (55%), Tempranillo (35%), Graciano (10%)",
    microTerroirs: [
      { name: "Monte Yerga", focus: "High-altitude slopes at 600m–800m producing profound, mineral-driven Garnacha (Álvaro Palacios Quiñón de Valmira)." },
      { name: "Aldeanueva de Ebro", focus: "Traditional center of warm, spicy Garnacha." }
    ],
    description: "The sun-kissed Mediterranean gateway of Rioja, undergoing a massive quality renaissance through high-altitude Garnacha single-vineyard bottlings."
  }
];

export const SPAIN_GRAND_CRUS = [
  // Rioja & Ribera & Priorat Icons
  {
    id: 'las-beatas',
    name: "Las Beatas (Telmo Rodríguez)",
    village: "Labastida",
    subregion: "Rioja Alta & Rioja Alavesa",
    district: "Rioja Alavesa",
    subregionId: 'rioja-alta-alavesa',
    districtId: 'rioja-alta-alavesa',
    classification: 'Viñedo Singular',
    badge: 'Viñedo Singular Icon',
    lat: 42.5900,
    lng: -2.8000,
    areaHa: 1.9,
    aocDecreeYear: 2017,
    elevationRange: "500m – 620m",
    aspect: "Steep terraced amphitheater facing northwest and southwest",
    dominantGrape: "Field Blend (Tempranillo, Graciano, Garnacha, Blasco, Viura)",
    wineType: "Red",
    baseYield: "25 hl/ha",
    minPotentialAbv: "14.0% vol.",
    soil: "Alternating shallow sandstone and calcareous clay-limestone terraces",
    character: "Ethereal, Burgundy-like purity and weightless concentration with notes of rose petal, wild red berry, graphite, and seamless fine tannins.",
    benchmarkProducers: ["Compañía de Vinos Telmo Rodríguez"],
    famousProducers: ["Telmo Rodríguez"],
    iconicVineyards: ["Las Beatas Single Vineyard"]
  },
  {
    id: 'vega-sicilia-unico',
    name: "Vega Sicilia 'Único'",
    village: "Valbuena de Duero",
    subregion: "Ribera del Duero",
    district: "Ribera del Duero",
    subregionId: 'ribera-del-duero',
    districtId: 'ribera-del-duero',
    classification: 'Vino de Pago / Grand Cru Benchmark',
    badge: 'Legendary First Growth',
    lat: 41.6300,
    lng: -4.2600,
    areaHa: 40,
    aocDecreeYear: 1982,
    elevationRange: "750m – 800m",
    aspect: "Gentle northern slopes rising from the Duero River",
    dominantGrape: "Tinto Fino (94%) & Cabernet Sauvignon (6%)",
    wineType: "Red",
    baseYield: "22 hl/ha",
    minPotentialAbv: "14.0% vol.",
    soil: "Alluvial river gravels with limestone colluvium on the hillside slopes",
    character: "A monumental legend aged a minimum of 10 years in barrel and bottle before release. Dried black cherry, balsamic cedar, cigar box, leather, hazelnut, and immortal acidity.",
    benchmarkProducers: ["Bodegas Vega Sicilia"],
    famousProducers: ["Vega Sicilia"],
    iconicVineyards: ["Pago Único"]
  },
  {
    id: 'dominio-de-pingus',
    name: "Dominio de Pingus",
    village: "Quintanilla de Onésimo",
    subregion: "Ribera del Duero",
    district: "Ribera del Duero",
    subregionId: 'ribera-del-duero',
    districtId: 'ribera-del-duero',
    classification: 'Cult Single-Vineyard',
    badge: 'Pre-Phylloxera Cult Icon',
    lat: 41.6200,
    lng: -4.2200,
    areaHa: 4.5,
    aocDecreeYear: 1995,
    elevationRange: "840m – 880m",
    aspect: "South-facing gentle slopes of La Horra and Quintanilla",
    dominantGrape: "Tinto Fino (100% Ungrafted Centenary Vines)",
    wineType: "Red",
    baseYield: "12 hl/ha",
    minPotentialAbv: "14.5% vol.",
    soil: "Deep gravelly sand mixed with chalky clay over hard limestone bedrock",
    character: "Peter Sisseck's cult benchmark. Saturated midnight-purple, crème de cassis, wild mountain herbs, roasted mineral graphite, and colossal yet seamless structural tannins.",
    benchmarkProducers: ["Dominio de Pingus (Peter Sisseck)"],
    famousProducers: ["Peter Sisseck"],
    iconicVineyards: ["Barroso & San Cristóbal Parcels"]
  },
  {
    id: 'l-ermita',
    name: "L'Ermita (Álvaro Palacios)",
    village: "Gratallops",
    subregion: "Priorat",
    district: "Priorat",
    subregionId: 'priorat',
    districtId: 'priorat',
    classification: 'Gran Vinya Classificada (DOQ)',
    badge: 'Grand Cru Slate Icon',
    lat: 41.1900,
    lng: 0.7700,
    areaHa: 1.4,
    aocDecreeYear: 2000,
    elevationRange: "400m – 500m",
    aspect: "Precipitous northeast-facing natural amphitheater crowned by a hermitage chapel",
    dominantGrape: "Old-Vine Garnacha (92%), Cariñena (7%), White Grapes (1%)",
    wineType: "Red",
    baseYield: "10 hl/ha",
    minPotentialAbv: "14.5% vol.",
    soil: "Pure Devonian black slate flakes (llicorella) with quartz veins",
    character: "The spiritual zenith of Spanish Garnacha. Crushed slate, wild blood orange, violet pastille, pomegranate, white pepper, and an almost weightless, crystalline mineral tension.",
    benchmarkProducers: ["Álvaro Palacios"],
    famousProducers: ["Álvaro Palacios"],
    iconicVineyards: ["L'Ermita Parcel"]
  },
  // Rías Baixas Grand Crus / Single Terroirs
  {
    id: 'val-do-salnes-cepas-vellas',
    name: "Do Ferreiro 'Cepas Vellas' (Val do Salnés)",
    village: "Meaño / Cambados",
    subregion: "Rías Baixas",
    district: "Val do Salnés",
    subregionId: 'rias-baixas',
    districtId: 'rias-baixas',
    classification: 'Single Vineyard Pre-Phylloxera Cru',
    badge: '200+ Year Ungrafted Albariño',
    lat: 42.4500,
    lng: -8.7400,
    areaHa: 1.8,
    aocDecreeYear: 1988,
    elevationRange: "50m – 120m",
    aspect: "Gentle Atlantic-facing hillside slopes",
    dominantGrape: "Albariño (100% Pre-phylloxera ungrafted vines planted in the 1780s)",
    wineType: "White",
    baseYield: "32 hl/ha",
    minPotentialAbv: "13.0% vol.",
    soil: "Decomposed pink and grey Hercynian granite sand (xabre) with high quartz content",
    character: "One of the greatest white wines on Earth. Intensely concentrated, displaying saline sea spray, preserved Meyer lemon, white peach, green apple, wet granite stone, and electrifying natural acidity with decades of aging capacity.",
    benchmarkProducers: ["Bodegas Gerardo Méndez (Do Ferreiro)"],
    famousProducers: ["Gerardo Méndez"],
    iconicVineyards: ["Finca Cepas Vellas (Planted 1780s)"]
  },
  {
    id: 'pazo-senorans-seleccion',
    name: "Pazo de Señorans 'Selección de Añada'",
    village: "Vilanova de Arousa",
    subregion: "Rías Baixas",
    district: "Val do Salnés",
    subregionId: 'rias-baixas',
    districtId: 'rias-baixas',
    classification: 'Extended Lees-Aged Cru',
    badge: '36-Month Sur Lie Benchmark',
    lat: 42.5400,
    lng: -8.7600,
    areaHa: 12,
    aocDecreeYear: 1988,
    elevationRange: "40m – 90m",
    aspect: "Granite amphitheater near the sea",
    dominantGrape: "Albariño (100%)",
    wineType: "White",
    baseYield: "35 hl/ha",
    minPotentialAbv: "13.0% vol.",
    soil: "Shallow decomposed granite (xabre) over solid granite bedrock",
    character: "Aged a minimum of 36 months in stainless steel on fine lees without malolactic fermentation, followed by extensive bottle aging. Displays miraculous tertiary complexity: dried chamomile, lemon curd, beeswax, crushed oyster shell, and laser-like saline acidity.",
    benchmarkProducers: ["Pazo de Señorans (Marisol Bueno)"],
    famousProducers: ["Pazo de Señorans"],
    iconicVineyards: ["Los Bancales Old Vines"]
  },
  {
    id: 'forjas-del-salnes-leirana',
    name: "Leirana 'Finca Genoveva' Albariño",
    producer: "Forjas del Salnés",
    village: "Meaño",
    subregion: "Rías Baixas",
    district: "Val do Salnés",
    subregionId: 'rias-baixas',
    districtId: 'rias-baixas',
    classification: 'Centenary Single-Vineyard Cru',
    badge: 'Artisanal Granite Cru',
    lat: 42.4400,
    lng: -8.7300,
    areaHa: 2.2,
    aocDecreeYear: 1988,
    elevationRange: "60m – 110m",
    aspect: "Terraced granite hillside",
    dominantGrape: "Albariño (100% Centenary vines)",
    wineType: "White",
    baseYield: "30 hl/ha",
    minPotentialAbv: "13.0% vol.",
    soil: "Pure granite sand (xabre) with rich marine organic topsoil",
    character: "Crafted by Rodrigo Méndez in collaboration with Raúl Pérez. Fermented and aged in ancient neutral oak foudres. Salty, chiseled, un-oaked in flavor, showing green citrus, white flowers, gunflint, and intense Atlantic tension.",
    benchmarkProducers: ["Forjas del Salnés (Rodrigo Méndez & Raúl Pérez)"],
    famousProducers: ["Raúl Pérez", "Rodrigo Méndez"],
    iconicVineyards: ["Finca Genoveva (1860s vines)"]
  },
  {
    id: 'o-rosal-terras-gauda',
    name: "Terras Gauda 'O Rosal' Black Label",
    village: "O Rosal",
    subregion: "Rías Baixas",
    district: "O Rosal",
    subregionId: 'rias-baixas',
    districtId: 'rias-baixas',
    classification: 'Sub-zone Terroir Blend',
    badge: 'Historic O Rosal Blend',
    lat: 41.9300,
    lng: -8.8400,
    areaHa: 160,
    aocDecreeYear: 1988,
    elevationRange: "50m – 150m",
    aspect: "South-facing terrace on the banks of the Miño River facing Portugal",
    dominantGrape: "Albariño (70%), Loureira (20%), Caiño Blanco (10%)",
    wineType: "White",
    baseYield: "45 hl/ha",
    minPotentialAbv: "12.5% vol.",
    soil: "Alluvial slate and river stones overlaid on granite bedrock",
    character: "The classic historical blend of O Rosal. The tropical, peach fruit of Albariño marries with the laurel, orange blossom aromatics of Loureira and the razor-sharp, mineral backbone of Caiño Blanco.",
    benchmarkProducers: ["Bodegas Terras Gauda", "Quinta de Couselo"],
    famousProducers: ["Terras Gauda"],
    iconicVineyards: ["O Rosal River Terraces"]
  }
];

export const SPAIN_TECHNICAL_REGULATIONS = {
  geology: {
    title: "Iberian Craton, Devonian Llicorella & Galician Granite Stratigraphy",
    formations: [
      { name: "Devonian Llicorella Slate (Priorat)", desc: "Metamorphic black and copper-colored slate plates layered with quartz crystals dating back over 300 million years to the Paleozoic era; forces roots to burrow deeply through fractured rock." },
      { name: "Cretaceous Calcareous Clay-Limestone (Rioja Alta & Alavesa)", desc: "Sedimentary marine limestone and white chalk marls rich in active calcium that moderate vine vigor and preserve vibrant natural acidity in Tempranillo." },
      { name: "Galician Hercynian Granite (Xabre in Rías Baixas)", desc: "Ancient crystalline granite plutons weathered into coarse, acidic granite sand (xabre) that drains rapidly and imparts a tactile, saline, electric minerality to Albariño." }
    ]
  },
  grapes: {
    major: [
      { name: "Tempranillo (Tinto Fino / Tinta del País)", desc: "Spain's undisputed noble red variety: dried cherry, red plum, dill, cedar, tobacco leaf, and fine melted tannins." },
      { name: "Albariño", desc: "The aristocratic white queen of Rías Baixas: thick-skinned, golden-berried, bursting with saline sea spray, white peach, lime zest, and crystalline acidity." },
      { name: "Garnacha Tinta (Grenache)", desc: "Ancient Mediterranean variety yielding opulent red fruit, wild strawberry, white pepper, and stony minerality on mountain slopes." },
      { name: "Cariñena (Mazuelo / Samsó)", desc: "Late-ripening, structured variety providing inky color, high natural acidity, and deep structural backbone." }
    ],
    heritage: [
      { name: "Loureira & Caiño Blanco", desc: "Rare indigenous Galician white varieties blended in O Rosal to contribute intense floral laurel, orange blossom, and piercing acidity." },
      { name: "Graciano", desc: "Aromatic black variety in Rioja providing intense color, perfume, and long-term aging power." },
      { name: "Viura (Macabeo)", desc: "Versatile white grape capable of legendary oxidation-resistant longevity in oak-aged Gran Reserva whites (Viña Tondonia, Murrieta Capellanía)." }
    ]
  },
  classification: {
    system: "DOCa / DO Statutory Aging Hierarchy & Single-Vineyard Classifications",
    description: "Governed by Royal Decree and regional Consellos Reguladores, featuring strict barrel and bottle aging requirements alongside modern terroir classifications.",
    pyramid: [
      { name: "Viñedo Singular / Gran Vinya Classificada", desc: "Single vineyard designated parcels certified for low yields, manual harvest, minimum 35-year-old vines, and blind panel tasting (e.g. Las Beatas, L'Ermita, Finca Dofí)." },
      { name: "Gran Reserva", desc: "Minimum 5 years total aging for reds (min 2 years in oak barricas, 2 years in bottle); min 4 years for whites (6 months in oak)." },
      { name: "Reserva", desc: "Minimum 3 years total aging for reds (min 1 year in oak barricas, 6 months in bottle); min 2 years for whites (6 months in oak)." },
      { name: "Crianza", desc: "Minimum 2 years total aging for reds (min 1 year in oak in Rioja/Ribera); min 18 months for whites (6 months in oak)." }
    ]
  },
  viticulture: {
    emparradoPergola: "In Rías Baixas, vines are traditionally trained on 1.8m to 2m high granite post pergolas (emparrado or parral). This lifts the canopy above the damp, humid ground, maximizing ocean breeze circulation and sun exposure to prevent botrytis in an area receiving over 1,600mm of rain.",
    sobreLias: "Extended lees aging in stainless steel or large neutral oak foudres without malolactic fermentation, building creamy texture, brioche, and hazelnut complexities that buffer the grape's searing natural acidity."
  }
};

export const SPAIN_PRESTIGE_ESTATES = [
  {
    id: 'vina-tondonia-gran-reserva',
    name: "Viña Tondonia Gran Reserva",
    producer: "R. López de Heredia",
    subregion: "Rioja Alta",
    district: "Haro",
    debutVintage: 1890,
    grapeComposition: "75% Tempranillo, 15% Garnacha, 5% Graciano, 5% Mazuelo",
    sourcing: "Historic 100-hectare alluvial limestone shell-shaped vineyard on the banks of the Ebro River in Haro.",
    winemaking: "Aged 10 years in neutral American oak barricas made in their own cooperage, racked twice yearly by hand by candlelight, bottled unfined and unfiltered.",
    character: "The immortal pinnacle of traditional Rioja. Pale garnet, dried red cherries, cedar, leather, cigar ash, tea leaf, and seamless silky acidity that endures for 50+ years.",
    iconicStatus: "The world's foremost temple of traditional, non-interventionist classical winemaking."
  },
  {
    id: 'marques-de-murrieta-castillo-ygay',
    name: "Castillo Ygay Gran Reserva Especial",
    producer: "Marqués de Murrieta",
    subregion: "Rioja Alta",
    district: "Logroño / Rioja Alta",
    debutVintage: 1852,
    grapeComposition: "85% Tempranillo, 15% Mazuelo",
    sourcing: "La Plana single parcel at 485m elevation on the highest plateau of the 300-hectare Ygay Estate.",
    winemaking: "Aged 28–30 months in 225L French and American oak barriques, followed by 5 years of bottle aging prior to commercial debut.",
    character: "Repeated 100-point icon. Scented with black truffles, dried red berries, sandalwood, tobacco leaf, and fine velvety tannins with astonishing freshness.",
    iconicStatus: "The founder of commercial fine Rioja bottling in the 19th century."
  },
  {
    id: 'do-ferreiro-cepas-vellas-cuvee',
    name: "Do Ferreiro 'Cepas Vellas' Albariño",
    producer: "Bodegas Gerardo Méndez",
    subregion: "Rías Baixas",
    district: "Val do Salnés",
    debutVintage: 1989,
    grapeComposition: "100% Albariño (200+ year ungrafted vines)",
    sourcing: "Microscopic ungrafted vineyard parcel in Meaño planted in the late 18th century on decomposed granite xabre.",
    winemaking: "Spontaneous fermentation with ambient indigenous yeasts, aged 11 months on fine lees in stainless steel with zero malolactic fermentation.",
    character: "Multiple 98-point benchmark. Piercing saline sea spray, white peach, crushed lime, wet granite, oyster shell, and an electrifying, endless finish.",
    iconicStatus: "The benchmark white wine of Spain, demonstrating that pre-phylloxera Albariño achieves Grand Cru status."
  },
  {
    id: 'pazo-senorans-seleccion-cuvee',
    name: "Pazo de Señorans 'Selección de Añada' Albariño",
    producer: "Pazo de Señorans",
    subregion: "Rías Baixas",
    district: "Val do Salnés",
    debutVintage: 1995,
    grapeComposition: "100% Albariño",
    sourcing: "Old hillside pergola vines in Vilanova de Arousa on granite xabre.",
    winemaking: "Aged 36 to 40 months on fine lees in small stainless steel tanks, followed by 12+ months in bottle.",
    character: "Beeswax, white truffle, preserved lemon, honeysuckle, and razor-sharp acidity wrapped in a creamy, velvety texture.",
    iconicStatus: "Proved to the international sommelier community that Albariño is one of the world's most noble, age-worthy white grapes."
  }
];

export const SPAIN_ICONIC_DOMAINES = [
  {
    id: 'vega-sicilia',
    name: "Bodegas Vega Sicilia",
    village: "Valbuena de Duero (Ribera del Duero)",
    vigneron: "Gonzalo Iturriaga (Owner: Álvarez Family)",
    philosophy: "The timeless aristocrat of Spanish fine wine since 1864, aging their legendary Único for a minimum of a decade before release.",
    keyCuvees: ["Vega Sicilia Único", "Único Reserva Especial (Multi-Vintage)", "Valbuena 5°", "Alión"]
  },
  {
    id: 'lopez-de-heredia',
    name: "R. López de Heredia Viña Tondonia",
    village: "Haro (Rioja Alta)",
    vigneron: "María José López de Heredia",
    philosophy: "The ultimate living museum of classical winemaking. Ancient 140-year-old wooden vats, cobwebbed cellars, native yeasts, and decade-long barrel aging.",
    keyCuvees: ["Viña Tondonia Gran Reserva", "Viña Bosconia Gran Reserva", "Viña Tondonia Gran Reserva Blanco"]
  },
  {
    id: 'gerardo-mendez-do-ferreiro',
    name: "Bodegas Gerardo Méndez (Do Ferreiro)",
    village: "Meaño (Val do Salnés, Rías Baixas)",
    vigneron: "Gerardo Méndez & Manuel Méndez",
    philosophy: "The master grower of Val do Salnés, farming 200+ year-old ungrafted vines on decomposed granite with non-interventionist, lees-focused precision.",
    keyCuvees: ["Cepas Vellas", "Do Ferreiro Albariño", "Adina (Red Galician)"]
  },
  {
    id: 'pazo-de-senorans',
    name: "Pazo de Señorans",
    village: "Vilanova de Arousa (Val do Salnés, Rías Baixas)",
    vigneron: "Marisol Bueno & Ana Quintela",
    philosophy: "The visionary estate that pioneered extended lees aging in Albariño, transforming fresh seaside wine into world-class vin de garde.",
    keyCuvees: ["Selección de Añada", "Tras Los Cestos", "Pazo de Señorans Colección"]
  },
  {
    id: 'alvaro-palacios',
    name: "Álvaro Palacios",
    village: "Gratallops (Priorat) & Alfaro (Rioja Oriental)",
    vigneron: "Álvaro Palacios",
    philosophy: "The visionary leader of the Priorat revolution and modern Rioja renaissance, crafting mythical low-yield single-vineyard wines from steep slate costers.",
    keyCuvees: ["L'Ermita (Priorat)", "Finca Dofí (Priorat)", "Quiñón de Valmira (Rioja)"]
  },
  {
    id: 'forjas-del-salnes',
    name: "Forjas del Salnés",
    village: "Meaño (Val do Salnés, Rías Baixas)",
    vigneron: "Rodrigo Méndez & Raúl Pérez",
    philosophy: "Artisanal, low-sulfur viticulture in century-old pergola parcels, utilizing neutral French oak foudres to express pure salty granite tension.",
    keyCuvees: ["Leirana Finca Genoveva", "Leirana Albariño", "Goliardo Caiño"]
  }
];

export const SPAIN_FOOD_PAIRINGS = [
  {
    category: "Fresh Seafood & Shellfish",
    wineType: "White",
    targetWine: "Val do Salnés Albariño (Do Ferreiro or Albamar)",
    dish: "Pulpo á Feira con Pimentón de la Vera y Patatas Gallegas",
    note: "Tender Galician octopus boiled in copper cauldrons, drizzled with virgin olive oil, coarse sea salt, and smoked pimentón is the quintessential pairing for saline, citrus-driven Salnés Albariño. The wine's crystalline acidity and granite salinity cut through the gelatinous octopus texture while echoing the smoked paprika and sea salt.",
    glassware: "Universal White Glass",
    servingTemp: "9–11°C (48–52°F)",
    decanting: "No decanting required; serve well-chilled"
  },
  {
    category: "Rare Shellfish & Crudos",
    wineType: "White",
    targetWine: "Extended Lees-Aged Albariño (Pazo de Señorans Selección de Añada)",
    dish: "Percebes de la Costa da Morte y Ostras de Cambados al Natural",
    note: "Wild Atlantic goose barnacles and flat oysters taste of pure, unadulterated ocean brine. An extended lees-aged Albariño mirrors this profound oceanic iodine with its tactile saline minerality, oyster-shell reduction, and rich beeswax-lemon curd mouthfeel.",
    glassware: "Burgundy White Glass",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Aeration 15 minutes before service"
  },
  {
    category: "Roasted & Braised Meats",
    wineType: "Red",
    targetWine: "Classical Rioja Gran Reserva (Viña Tondonia or Castillo Ygay)",
    dish: "Lechazo Asado al Horno de Leña (Wood-Fired Roast Suckling Milk-Fed Lamb)",
    note: "Crisp-skinned, tender milk-fed suckling lamb fat dissolves into the melted fine-grained tannins, dried cherry fruit, cedar, and bright balsamic acidity of traditional aged Rioja Gran Reserva.",
    glassware: "Bordeaux Grand Cru Glass",
    servingTemp: "16–18°C (61–64°F)",
    decanting: "Decant 60–90 minutes before service"
  },
  {
    category: "Grilled Prime Beef",
    wineType: "Red",
    targetWine: "Ribera del Duero (Vega Sicilia Único or Pingus)",
    dish: "Chuletón de Buey a la Brasa con Pimientos de Padrón",
    note: "Dry-aged, charcoal-grilled Castilian beef steak with blistered Padrón peppers requires the formidable structural backbone, inky black fruit, and noble oak cedar of Ribera del Duero Tinto Fino to match its rich savor.",
    glassware: "Bordeaux Grand Cru Glass",
    servingTemp: "16–18°C (61–64°F)",
    decanting: "Decant 90 minutes before service"
  },
  {
    category: "Wild Game & Stews",
    wineType: "Red",
    targetWine: "Old-Vine Priorat (L'Ermita or Finca Dofí)",
    dish: "Civet de Jabalí con Castañas y Chocolate Negro (Braised Wild Boar Stew)",
    note: "Rich, gamey wild boar stewed with dark chocolate, juniper, and wild chestnuts is elevated by the primordial black slate (llicorella) minerality, wild garrique herbs, and concentrated dark Garnacha fruit of Priorat.",
    glassware: "Bordeaux Glass",
    servingTemp: "16–17°C (61–63°F)",
    decanting: "Decant 60 minutes before service"
  },
  {
    category: "Cured Meats & Tapas",
    wineType: "Red",
    targetWine: "Rioja Reserva or High-Altitude Garnacha",
    dish: "Jamón Ibérico de Bellota con Pan con Tomate",
    note: "Acorn-fed 100% Ibérico ham with its nutty, melting fat finds perfect balance in the vibrant acidity, red cherry fruit, and subtle American oak vanilla of a classical Rioja Reserva.",
    glassware: "Universal Red Glass",
    servingTemp: "15–16°C (59–61°F)",
    decanting: "No decanting required"
  }
];

export const SPAIN_DATA = {
  id: 'spain-rioja',
  name: "Spain (Rioja, Ribera, Priorat & Rías Baixas)",
  country: 'Spain',
  countryCode: 'ES',
  aliases: [
    'spain', 'rioja', 'ribera del duero', 'ribera', 'priorat', 'rias baixas', 'rías baixas',
    'galicia', 'albarino', 'albariño', 'salnes', 'val do salnes', 'val do salnés', 'o rosal',
    'condado do tea', 'soutomaior', 'ribeira do ulla', 'cambados', 'do ferreiro', 'pazo senorans',
    'pazo de señorans', 'vega sicilia', 'pingus', 'l-ermita', 'alvaro palacios', 'haro', 'labastida',
    'tondonia', 'lopez de heredia', 'castillo ygay', 'murrieta', 'unico', 'único'
  ],
  tagline: "Noble Tempranillo, High-Altitude Slate & Atlantic Granite Albariño",
  summary: "Spanning from the historic oak-lined cellars of Haro in Rioja and the high-altitude Castilian plateau of Ribera del Duero to the savage black slate terraces of Priorat and the misty, granite-carved Atlantic fjords of Rías Baixas in Galicia, Spain represents one of the world's most dynamic fine wine cultures. Noble Tempranillo, old-vine Garnacha, and saline Albariño yield wines of monumental longevity, crystalline minerality, and profound gastronomic soul.",
  center: [42.3000, -3.5000],
  zoom: 7,
  bounds: [[40.80, -9.20], [43.50, 1.20]],
  heroGradient: 'linear-gradient(135deg, #3d0c11 0%, #681822 50%, #d4af37 100%)',
  accentColor: '#8b0000',

  terroir: {
    climate: "Diverse tripartite macroclimate: Atlantic-Continental in Rioja Alta and Alavesa; Extreme high-altitude Continental in Ribera del Duero with massive diurnal swings; Mountain Mediterranean in Priorat; and Hyper-Atlantic Oceanic in Rías Baixas with high rainfall, dense morning sea mists, and cooling maritime breezes.",
    soil: "Rich geological mosaic: White calcareous clay-limestone and alluvial terraces in Rioja; deep alluvial sand, gravel, and limestone páramos in Ribera del Duero; ancient Devonian black slate and quartz plates (Llicorella) in Priorat; and decomposed Hercynian granite sands (Xabre) in coastal Rías Baixas.",
    elevation: "50m along the Galician Atlantic fjords up to 1,050m across the Castilian high plateau.",
    riverInfluence: "The Ebro, Duero, and Sil-Miño river systems provide vital air drainage corridors, mitigate winter and spring frosts, and channel moisture across diverse microclimates."
  },

  grapes: [
    {
      name: 'Tempranillo (Tinto Fino)',
      percentage: 55.0,
      type: 'Red',
      role: "Spain's premier noble red variety: dried red cherry, dark plum, tobacco leaf, vanilla bean, cedar, and fine velvety tannins capable of half-century aging."
    },
    {
      name: 'Albariño',
      percentage: 20.0,
      type: 'White',
      role: "The noble white jewel of Rías Baixas: thick-skinned, bursting with saline sea spray, white peach, green apple, citrus zest, and electric natural acidity."
    },
    {
      name: 'Garnacha Tinta',
      percentage: 15.0,
      type: 'Red',
      role: "Opulent, floral, red-berried grape achieving profound mineral expression on the black slate terraces of Priorat and high-altitude slopes of Monte Yerga."
    },
    {
      name: 'Cariñena & Graciano',
      percentage: 5.0,
      type: 'Red',
      role: "High-acid, deeply colored, structured blending varieties providing longevity and firm backbone."
    },
    {
      name: 'Viura & Loureira',
      percentage: 5.0,
      type: 'White',
      role: "Viura crafts oxidative, complex oak-aged white Rioja; Loureira and Treixadura contribute floral laurel and orange blossom aromatics in Galician blends."
    }
  ],

  structure: {
    body: 7.8,
    acidity: 8.0,
    tannin: 7.6,
    sweetness: 1.0,
    alcohol: 13.8,
    agingPotential: "5 - 50+ Years"
  },

  classification: {
    system: "DOCa / DO Statutory Aging Hierarchy & Viñedo Singular (2017)",
    description: "Strict national and regional quality architecture governing wood aging (Crianza, Reserva, Gran Reserva) alongside cutting-edge single-vineyard terroirs (Viñedo Singular in Rioja, Gran Vinya Classificada in Priorat).",
    tiers: [
      {
        name: "Viñedo Singular & Pagos",
        detail: "Strictly delimited single vineyard parcels certified for low yields, manual harvest, and blind tasting panels (e.g. Las Beatas, Do Ferreiro Cepas Vellas, Vega Sicilia Único, L'Ermita)."
      },
      {
        name: "Gran Reserva",
        detail: "Aged a minimum of 5 years (min 2 in oak barricas, 2 in bottle) for reds; 4 years for whites. Legendary tertiary complexity."
      },
      {
        name: "Reserva",
        detail: "Aged a minimum of 3 years (min 1 in oak barricas, 6 months in bottle) for reds; 2 years for whites."
      },
      {
        name: "Crianza",
        detail: "Aged a minimum of 2 years (min 1 in oak barricas) for reds; 18 months for whites."
      }
    ],
    styles: [
      {
        name: "Traditional Gran Reserva Red",
        desc: "Aged extensively in American and French oak casks, showing dried fruit, cedar, balsamic leather, and melted tannins."
      },
      {
        name: "Atlantic Albariño (Sobre Lías)",
        desc: "Aged on fine lees in stainless steel or neutral oak without malolactic fermentation; saline, chiseled, and long-lived."
      },
      {
        name: "Mineral Llicorella Priorat",
        desc: "Old-vine Garnacha and Cariñena grown on steep black slate terraces; inky, concentrated, and intensely stony."
      },
      {
        name: "Castilian High-Plateau Tinto Fino",
        desc: "Monumental, dark blackberry, espresso, and graphite-scented Ribera del Duero reds."
      }
    ]
  },

  flavorProfile: {
    primary: ['Dried Red Cherry & Damson Plum', 'Saline Sea Spray & Meyer Lemon', 'White Peach & Crisp Green Apple', 'Wild Mountain Thyme & Rosemary', 'Crushed Slate & Granite Minerality'],
    secondary: ['Cigar Box & Virginia Cedar', 'Balsamic Fig & Leather', 'Dark Cocoa & Roasted Hazelnut', 'Dill & Sweet Vanilla (American Oak)', 'Gunflint & Crushed Oyster Shell'],
    palate: "Vibrant, dynamic palate tension ranging from the razor-sharp, saline-mineral crunch of coastal Albariño to the aristocratic, melted velvet tannins and savory balsamic depth of mature Rioja and Ribera del Duero."
  },

  foodPairings: SPAIN_FOOD_PAIRINGS,
  subRegions: SPAIN_SUBREGIONS,
  grandCrus: SPAIN_GRAND_CRUS,
  crus: SPAIN_GRAND_CRUS,
  technicalRegulations: SPAIN_TECHNICAL_REGULATIONS,
  prestigeCuvees: SPAIN_PRESTIGE_ESTATES,
  prestigeMonopoles: SPAIN_PRESTIGE_ESTATES,
  iconicDomaines: SPAIN_ICONIC_DOMAINES,
  iconicGrowers: SPAIN_ICONIC_DOMAINES
};
