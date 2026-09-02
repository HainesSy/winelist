// Authoritative Spain (Rioja, Ribera del Duero, Priorat) Master Sommelier Dataset
// DOCa Rioja Consejo Regulador & DO Ribera del Duero Standards

export const RIOJA_SUBREGIONS = [
  {
    id: 'rioja-alta',
    name: "Rioja Alta (Western High Rioja)",
    district: "Rioja Alta",
    lat: 42.5000,
    lng: -2.8000,
    coordinates: [42.5000, -2.8000],
    elevation: "400m to 700m along the rolling Ebro plateau",
    soils: [
      "Calcareous Clay (Arcillo-Calcarie)",
      "Ferruginous Clay (Arcillo-Ferroso)",
      "Alluvial Terrace Gravel (Ebro River Benches)"
    ],
    grapes: [
      "Tempranillo (80%)",
      "Graciano (8%)",
      "Mazuelo / Cariñena (5%)",
      "Garnacha Tinta (4%)",
      "Viura / Macabeo (3%)"
    ],
    climate: "Atlantic Maritime with Continental influences; cool nights and protective Cantabrian mountain ridge.",
    riverInfluence: "The Ebro River and tributary valleys (Tirón, Oja, Najerilla) provide essential cold-air drainage, morning mists, and alluvial terrace gravels.",
    appellations: ["DOCa Rioja", "Viñedo Singular Rioja Alta", "Vino de Zona Rioja Alta"],
    terroir: "Elevated rolling plateau (400–700m) south of the Ebro River. Cool Atlantic winds preserve bracing acidity and fine tannins, yielding the most aristocratic, long-lived, and elegant classical Riojas.",
    focus: "The cathedral of Classical Gran Reserva Tempranillo: cedar, dried cherry, cigar box, leather, dill, and coconut from extended American oak aging (La Rioja Alta, López de Heredia, Marqués de Murrieta).",
    description: "Centering on the historic station district (Barrio de la Estación) in Haro, Rioja Alta is the heartland of historic centuries-old bodegas.",
    microTerroirs: [
      { name: "Haro & Barrio de la Estación", focus: "Historic 19th-century railway hub with deep alluvial gravel terraces along the Ebro River (Viña Tondonia)." },
      { name: "Sonsierra (San Vicente & Briones)", focus: "High-altitude south-facing limestone slopes beneath Cantabria producing structured, mineral-rich modern and classical Tempranillo." },
      { name: "Najerilla Valley (Badarán & Cárdenas)", focus: "Cool, elevated high-altitude old-vine Garnacha on red ferrous clay soils." }
    ]
  },
  {
    id: 'rioja-alavesa',
    name: "Rioja Alavesa (Basque Rioja)",
    district: "Rioja Alavesa",
    lat: 42.5500,
    lng: -2.6000,
    coordinates: [42.5500, -2.6000],
    elevation: "450m to 750m on terraced limestone slopes",
    soils: [
      "Pure White Calcareous Clay-Limestone (Arcillo-Calcarie)",
      "Chalky Sandstone Terraces (Sierra de Cantabria)"
    ],
    grapes: [
      "Tempranillo (85%)",
      "Graciano (6%)",
      "Viura (5%)",
      "Garnacha (4%)"
    ],
    climate: "Cool Atlantic microclimate protected from northern storms by the towering Sierra de Cantabria mountain wall.",
    riverInfluence: "Perched high above the north bank of the Ebro, benefiting from intense solar reflection and steady mountain breezes.",
    appellations: ["DOCa Rioja", "Viñedo Singular Rioja Alavesa", "Vino de Zona Rioja Alavesa"],
    terroir: "Steep terraced limestone parcels directly under the limestone cliffs of Cantabria. Highly alkaline, white chalk soils give Tempranillo electric freshness, chalky minerality, and vibrant floral perfume.",
    focus: "Modern single-vineyard and terroir-driven Tempranillo (Artadi, Telmo Rodríguez Las Beatas, Remelluri, Contador) showcasing pure fruit, mineral tension, and French oak refinement.",
    description: "Located within the Basque province of Álava, famous for dramatic medieval hilltop villages like Laguardia and iconic modern architecture.",
    microTerroirs: [
      { name: "Labastida Terraces", focus: "High-altitude ancient field-blend amphitheatres producing ethereal, Burgundian-weight wines (Las Beatas)." },
      { name: "Laguardia & Elciego", focus: "Chalk-white limestone terraces producing perfumed, structured Tempranillo with laser mineral focus." },
      { name: "Samaniego & Villabuena", focus: "High-elevation stepped parcels sheltered by limestone escarpments." }
    ]
  },
  {
    id: 'ribera-del-duero',
    name: "Ribera del Duero (Castilian High Plateau)",
    district: "Ribera del Duero",
    lat: 41.6500,
    lng: -3.7000,
    coordinates: [41.6500, -3.7000],
    elevation: "750m to 1,000m on the Meseta Central plateau",
    soils: [
      "White Limestone Marl (Yesos y Calizas)",
      "Chalky Calcareous Silt & Sand",
      "Quaternary Alluvial River Gravel (Duero Terraces)"
    ],
    grapes: [
      "Tinto Fino / Tinta del País (Tempranillo 95%+)",
      "Cabernet Sauvignon (3%)",
      "Merlot & Malbec (1%)",
      "Albillo Mayor (1%)"
    ],
    climate: "Extreme High Continental (Meseta Central); 750m–1,000m altitude with dramatic 20°C+ diurnal temperature shifts.",
    riverInfluence: "The Duero River carves a wide east-west valley, creating distinct alluvial gravel terraces and reflective microclimates across the Milla de Oro.",
    appellations: ["DO Ribera del Duero"],
    terroir: "High-altitude Castilian plateau bisected by the Duero River. Extreme thermal shifts lock in natural acidity while intense UV radiation produces thick-skinned Tempranillo with ink-black color and massive tannins.",
    focus: "Monumental, muscular, aristocratic reds of legendary depth: blackberry, espresso, dark chocolate, graphite, and formidable ageability (Vega Sicilia Único, Pingus, Alión).",
    description: "The 'Golden Mile' (Milla de Oro) of Spanish fine wine stretching through Valladolid and Burgos, home to Spain's most iconic first growth, Vega Sicilia.",
    microTerroirs: [
      { name: "Milla de Oro (Valbuena to Pesquera)", focus: "Historic gravel benches and limestone marls producing Spain's greatest first growths (Vega Sicilia Único, Alión)." },
      { name: "La Horra & Roa (Burgos High Plateau)", focus: "Extreme high-altitude sand and chalk plateau producing un-grafted, ink-black century-old bush vine Tinto Fino (Dominio de Pingus)." },
      { name: "Soria High Altitude Outposts", focus: "Pre-phylloxera limestone parcels at 950m+ with piercing acidity and wild floral perfume." }
    ]
  },
  {
    id: 'priorat',
    name: "Priorat (DOQ Priorat & Llicorella Slate)",
    district: "DOQ Priorat",
    lat: 41.2000,
    lng: 0.8000,
    coordinates: [41.2000, 0.8000],
    elevation: "250m to 750m on vertiginous terraced slopes",
    soils: [
      "Llicorella (Devonian Black & Silver Quartz-rich Schist Slate)",
      "Fractured Quartzite & Iron Schist"
    ],
    grapes: [
      "Garnacha Tinta (55%)",
      "Cariñena / Samsó (30%)",
      "Syrah & Cabernet Sauvignon (10%)",
      "Garnacha Blanca & Macabeo (5%)"
    ],
    climate: "Extreme Mediterranean Continental with hot, dry summers and cool mountain nights.",
    riverInfluence: "The Siurana River and Montsant mountain ridge form a dramatic microclimatic barrier, moderating extreme Mediterranean heat.",
    appellations: ["DOQ Priorat", "Gratallops Vi de Vila", "Gran Vinya Classificada"],
    terroir: "Vertiginous terraced amphitheaters of decomposing Llicorella slate. Ancient bush vines dig 15+ meters deep to access water, producing tiny yields (less than 1 kg per vine) of intense concentration.",
    focus: "Inky, mineral-soaked, heroic reds: crushed slate, black cherry, wild rosemary, dark chocolate, and iron power (Álvaro Palacios L'Ermita, Clos Mogador).",
    description: "One of only two Qualified DOCa/DOQ regions in Spain, rescued in the late 1980s by René Barbier and Álvaro Palacios.",
    microTerroirs: [
      { name: "Gratallops Amphitheater", focus: "Epicenter of the Priorat revolution; steep Llicorella slopes producing ethereal, iconic Garnacha (L'Ermita, Clos Mogador)." },
      { name: "Porrera & Escaladei", focus: "High, cool mountain valleys with ancient bush-vine Cariñena (Vall Llach) and historical Carthusian monastery terroirs." },
      { name: "Torroja & Poboleda", focus: "Stony, wind-exposed amphitheaters crafting mineral-drenched, high-tension red blends." }
    ]
  }
];

export const RIOJA_GRAND_CRUS = [
  {
    id: 'las-beatas',
    name: "Las Beatas (Viñedo Singular)",
    subregionId: "rioja-alavesa",
    subregion: "Rioja Alavesa (Basque Rioja)",
    district: "Rioja Alavesa",
    village: "Labastida",
    lat: 42.5600,
    lng: -2.8700,
    coordinates: [42.5600, -2.8700],
    areaHa: 1.90,
    dominantGrape: "Tempranillo & Field Blend",
    grapeRatio: "Field Blend: Tempranillo, Graciano, Garnacha, Rojal, and heritage white grapes",
    wineType: "Red",
    aspect: "South-Southeast terraced amphitheater (40% slope)",
    elevationRange: "500m – 620m",
    soil: "Tertiary Calcareous Clay (Arcillo-Calcarie) & Fractured Sandstone Terraces",
    tier: "grandCru",
    badge: "Viñedo Singular DOCa",
    classification: "Viñedo Singular (Single Vineyard DOCa)",
    aocDecreeYear: 2017,
    character: "Ethereal, weightless, crystalline red fruit, violet perfume, crushed chalk, and monumental Burgundian finesse.",
    benchmarkProducers: [
      "Compañía de Vinos Telmo Rodríguez"
    ],
    famousProducers: [
      "Compañía de Vinos Telmo Rodríguez"
    ],
    legalNotes: "A historic pre-phylloxera field blend vineyard co-planted with ancient heritage varieties."
  },
  {
    id: 'vina-tondonia',
    name: "Viña Tondonia (Historic Cru Climat)",
    subregionId: "rioja-alta",
    subregion: "Rioja Alta (Western High Rioja)",
    district: "Rioja Alta",
    village: "Haro",
    lat: 42.5800,
    lng: -2.8450,
    coordinates: [42.5800, -2.8450],
    areaHa: 100.00,
    dominantGrape: "Tempranillo",
    grapeRatio: "Tempranillo (75%), Garnacha (15%), Graciano (5%), Mazuelo (5%)",
    wineType: "Red",
    aspect: "Alluvial river loop amphitheater along the Ebro River",
    elevationRange: "430m – 490m",
    soil: "Alluvial Terrace Gravel over Deep Calcareous Clay-Limestone (Arcillo-Calcarie)",
    tier: "grandCru",
    badge: "Historic Grand Cru Climat",
    classification: "Historic Single Vineyard Climat",
    aocDecreeYear: 1913,
    character: "The immortal temple of classical Rioja: dried cherry, orange peel, autumn leaves, cigar tobacco, cedar, and silky melted tannins.",
    benchmarkProducers: [
      "R. López de Heredia Viña Tondonia"
    ],
    famousProducers: [
      "R. López de Heredia Viña Tondonia"
    ],
    legalNotes: "A continuous 100-hectare single vineyard cultivated uninterruptedly since 1877."
  },
  {
    id: 'vega-sicilia-unico',
    name: "Vega Sicilia Único (Historic Pago)",
    subregionId: "ribera-del-duero",
    subregion: "Ribera del Duero (Castilian High Plateau)",
    district: "Ribera del Duero",
    village: "Valbuena de Duero",
    lat: 41.6370,
    lng: -4.2670,
    coordinates: [41.6370, -4.2670],
    areaHa: 40.00,
    dominantGrape: "Tinto Fino (Tempranillo)",
    grapeRatio: "Tinto Fino / Tempranillo (95%), Cabernet Sauvignon (5%)",
    wineType: "Red",
    aspect: "North-facing hillside slopes above the Duero River",
    elevationRange: "700m – 800m",
    soil: "Limestone Marl, Chalk, and Clay colluvium over Quaternary Alluvial River Gravel",
    tier: "grandCru",
    badge: "Pago Histórico / First Growth",
    classification: "Pago Histórico / DO Ribera del Duero",
    aocDecreeYear: 1982,
    character: "Spain's undisputed first growth: black cherry, dried fig, espresso, cedar, truffle, and legendary 50–60 year aging power.",
    benchmarkProducers: [
      "Bodegas Vega Sicilia"
    ],
    famousProducers: [
      "Bodegas Vega Sicilia"
    ],
    legalNotes: "Aged for a minimum of 10 years in oak casks and bottle before release; only produced in exceptional vintages."
  },
  {
    id: 'pingus',
    name: "Dominio de Pingus (Historic Barroso & San Cristóbal Pagos)",
    subregionId: "ribera-del-duero",
    subregion: "Ribera del Duero (Castilian High Plateau)",
    district: "Ribera del Duero",
    village: "La Horra / Pesquera de Duero",
    lat: 41.6420,
    lng: -4.0150,
    coordinates: [41.6420, -4.0150],
    areaHa: 4.50,
    dominantGrape: "Tinto Fino (Tempranillo)",
    grapeRatio: "100% Tinto Fino / Tempranillo",
    wineType: "Red",
    aspect: "South-facing high plateau",
    elevationRange: "840m – 860m",
    soil: "Deep Calcareous Clay, Limestone Gravel, and Fine Sand over Hard Bedrock",
    tier: "grandCru",
    badge: "Cult Single Vineyard Terroir",
    classification: "Cult Single Vineyard Terroir",
    aocDecreeYear: 1995,
    character: "Monumental, opulent, ink-black concentration with pure blackberry, graphite, black olive tapenade, and ultra-fine velvet tannins.",
    benchmarkProducers: [
      "Dominio de Pingus (Peter Sisseck)"
    ],
    famousProducers: [
      "Dominio de Pingus (Peter Sisseck)"
    ],
    legalNotes: "Crafted from un-grafted, 90+ year-old bush vines farmed under strict biodynamics with minuscule yields of 12 hl/ha."
  },
  {
    id: 'l-ermita',
    name: "L'Ermita (Gran Vinya Classificada)",
    subregionId: "priorat",
    subregion: "Priorat (DOQ Priorat & Llicorella Slate)",
    district: "DOQ Priorat",
    village: "Gratallops",
    lat: 41.1920,
    lng: 0.8170,
    coordinates: [41.1920, 0.8170],
    areaHa: 2.70,
    dominantGrape: "Garnacha Tinta",
    grapeRatio: "Garnacha Tinta (92%), Cariñena (7%), White Grapes (1%)",
    wineType: "Red",
    aspect: "Northeast-facing vertiginous 60° amphitheater beneath the hermitage",
    elevationRange: "400m – 500m",
    soil: "Precambrian Llicorella (Black & Silver Devonian Slate with Quartz)",
    tier: "grandCru",
    badge: "Gran Vinya Classificada (DOQ Grand Cru)",
    classification: "Gran Vinya Classificada (Grand Cru DOQ Priorat)",
    aocDecreeYear: 2019,
    character: "The crown jewel of Priorat: crushed slate minerality, wild mountain herbs, black raspberry, blood orange, and weightless power.",
    benchmarkProducers: [
      "Álvaro Palacios"
    ],
    famousProducers: [
      "Álvaro Palacios"
    ],
    legalNotes: "Elevated to the top tier of Priorat's official 2019 vineyard classification (Gran Vinya Classificada)."
  }
];

export const RIOJA_TECHNICAL_REGULATIONS = {
  geology: {
    system: "Ebro Basin Limestone Terraces, Duero High Plateau & Priorat Llicorella Slate",
    summary: "Spain's premier red terroirs span three distinct geological formations: Tertiary calcareous clay-limestone along the Ebro River in Rioja, high-altitude Miocene limestone marls and alluvial gravels in Ribera del Duero, and ancient Paleozoic Devonian black quartz-schist (Llicorella) in Priorat.",
    formations: [
      {
        id: "arcillo-calcarie",
        name: "Arcillo-Calcarie (Calcareous Clay)",
        frenchName: "Argilo-Calcaire",
        localName: "Arcillo-Calcáreo",
        period: "Tertiary (~25 Ma)",
        fossil: "Marine Limestone Shells & Coral Formations",
        characteristics: "Alkaline white chalk and clay providing excellent water retention and fine particle structure.",
        porosity: "High moisture buffering capacity (25–30% volume) that tempers summer drought stress.",
        keyAreas: ["Rioja Alavesa (Labastida, Laguardia)", "Rioja Alta (San Vicente, Briones)"],
        wineImpact: "Gives Tempranillo bright, energetic acidity, floral violet perfume, chalky fine tannins, and aristocratic longevity."
      },
      {
        id: "duero-limestone-marl",
        name: "Duero Limestone & Marl Plateau",
        frenchName: "Calizas de la Ribera",
        localName: "Calizas y Margas de la Ribera",
        period: "Miocene (~15 Ma)",
        fossil: "Lacustrine Limestone & Gypsum Deposits",
        characteristics: "Dense white limestone marl interspersed with chalky silt and alluvial quartz river gravel.",
        porosity: "Moderate water retention with high mineral salinity that restricts vine vigor.",
        keyAreas: ["Valbuena de Duero", "Pesquera de Duero", "La Horra", "Roa"],
        wineImpact: "Produces thick-skinned, concentrated Tinto Fino with black fruit depth, iron structure, and graphite minerality."
      },
      {
        id: "llicorella-slate",
        name: "Llicorella Slate (Devonian Black Quartz Schist)",
        frenchName: "Schistes du Priorat",
        localName: "Llicorella",
        period: "Paleozoic (Devonian ~380 Ma)",
        fossil: "Foliated Quartz & Metamorphic Mica Schist",
        characteristics: "Brittle, dark slate flakes layered with glittering quartz crystals that reflect heat and force vine roots 15m deep.",
        porosity: "Extremely low moisture retention requiring dry-farmed bush vines to penetrate deep bedrock fissures.",
        keyAreas: ["Gratallops", "Porrera", "La Vilella Alta", "Escaladei"],
        wineImpact: "Creates intensely concentrated, mineral-drenched Garnacha and Cariñena with smoky, crushed-rock persistence."
      },
      {
        id: "arcillo-ferroso",
        name: "Arcillo-Ferroso (Ferruginous Red Clay)",
        frenchName: "Argile Ferrugineuse",
        localName: "Arcillo-Ferroso",
        period: "Quaternary Alluvial",
        fossil: "Iron oxide gravels",
        characteristics: "Iron-rich red clay with significant sand and cobble fractions.",
        porosity: "Heavy water retention producing full-bodied, structured wines.",
        keyAreas: ["Najerilla Valley", "Cenicero", "Rioja Oriental"],
        wineImpact: "Imparts warm red fruit, savory spice, and muscular tannin structure to Garnacha and Tempranillo."
      }
    ]
  },
  grapes: {
    major: [
      {
        id: "tempranillo",
        name: "Tempranillo (Tinto Fino / Tinta del País)",
        percentage: 78,
        type: "Red",
        epicenter: "Rioja Alta, Rioja Alavesa, Ribera del Duero, Toro",
        profile: "Dried red cherry, plum, tobacco leaf, leather, vanilla, cedar, and dill.",
        role: "Spain's noble flagship red variety; versatile conduit of extended oak aging and limestone terroir.",
        clones: ["Tinto Fino de la Ribera", "Tempranillo Riojano Massale Selection", "Tinta de Toro"],
        benchmarkCuvees: [
          "La Rioja Alta Gran Reserva 890",
          "Vega Sicilia Único",
          "Dominio de Pingus",
          "López de Heredia Viña Tondonia Gran Reserva"
        ]
      },
      {
        id: "garnacha-tinta",
        name: "Garnacha Tinta (Grenache)",
        percentage: 12,
        type: "Red",
        epicenter: "DOQ Priorat, Rioja Oriental, Gredos, Aragon",
        profile: "Wild strawberry, blood orange, garrigue herbs, white pepper, and juicy mid-palate roundness.",
        role: "Adds warmth, opulent red fruit, and alcoholic body to classical blends; single-varietal star in Priorat and Gredos.",
        clones: ["Garnacha Peluda", "Garnacha Paisana"],
        benchmarkCuvees: [
          "Álvaro Palacios L'Ermita",
          "Clos Mogador",
          "Telmo Rodríguez Las Beatas"
        ]
      },
      {
        id: "graciano-mazuelo",
        name: "Graciano & Mazuelo (Cariñena)",
        percentage: 5,
        type: "Red",
        epicenter: "Rioja Alta / Alavesa (Graciano), Priorat (Cariñena)",
        profile: "Inky dark color, piercing acidity, black pepper, and intense structural tannins.",
        role: "Essential seasoning grapes providing aromatic lift, deep color, and long-term aging backbone.",
        benchmarkCuvees: [
          "Marqués de Murrieta Castillo Ygay (Mazuelo component)",
          "Viña Tondonia Gran Reserva"
        ]
      },
      {
        id: "viura-macabeo",
        name: "Viura (Macabeo) & Malvasía Riojana",
        percentage: 5,
        type: "White",
        epicenter: "Rioja Alta, Penedès",
        profile: "Dried chamomile, beeswax, toasted almond, preserved lemon, and nutty oxidative complexity.",
        role: "Crafts aristocratic, oak-aged white Riojas aged 10–20+ years in barrel and bottle.",
        benchmarkCuvees: [
          "López de Heredia Viña Tondonia Gran Reserva Blanco",
          "Marqués de Murrieta Capellanía"
        ]
      }
    ],
    heritage: [
      {
        name: "Albariño",
        percentage: 5,
        type: "White",
        epicenter: "Galicia (DO Rías Baixas: Val do Salnés, O Rosal)",
        profile: "Saline sea spray, white peach, green apple, crushed granite, and mouthwatering lime acidity.",
        role: "Atlantic white benchmark from Galicia's coastal granite terroirs, renowned for marine freshness.",
        status: "Indigenous Galician noble white grape."
      }
    ]
  },
  classification: {
    system: "DOCa Rioja & DO Ribera del Duero Statutory Oak Aging Hierarchy & Viñedo Singular (2017)",
    description: "Rigorous statutory aging classification governed by the Consejo Regulador based on minimum time in 225-liter oak barricas and bottle, alongside single-vineyard terroir decrees.",
    pyramid: [
      {
        tier: "Gran Reserva",
        sharePct: "3%",
        aocCount: "Apex traditional category",
        yieldLimits: "Max 5,000 kg/ha",
        minAbv: "12.5% ABV",
        aging: "Minimum 5 years (60 months) total aging: at least 2 years (24 months) in 225L oak barricas and at least 2 years in bottle before commercial release.",
        description: "Red wines aged minimum 5 years total with at least 2 years in oak barricas and 2 years in bottle before release, developing legendary balsamic, cedar, and truffle tertiary complexity."
      },
      {
        tier: "Reserva",
        sharePct: "15%",
        aocCount: "Select harvest wines",
        yieldLimits: "Max 6,500 kg/ha",
        minAbv: "12.0% ABV",
        aging: "Minimum 3 years (36 months) total aging: at least 1 year (12 months) in 225L oak barricas and at least 6 months in bottle.",
        description: "Red wines aged minimum 3 years total with at least 1 year in oak barricas and 6 months in bottle, balancing ripe fruit with noble oak spice."
      },
      {
        tier: "Crianza",
        sharePct: "42%",
        aocCount: "Mainstream aged tier",
        yieldLimits: "Max 6,500 kg/ha",
        minAbv: "11.5% ABV",
        aging: "Minimum 2 years (24 months) total aging: at least 1 year (12 months) in 225L oak barricas (6 months oak in Ribera del Duero).",
        description: "Red wines aged minimum 2 years total with at least 1 year in oak barricas emphasizing vibrant red fruit and subtle vanilla nuances."
      },
      {
        tier: "Viñedo Singular (Single Vineyard DOCa)",
        sharePct: "1%",
        aocCount: "Delimited single parcels",
        yieldLimits: "Max 5,000 kg/ha (35 hl/ha)",
        minAbv: "12.5% ABV",
        aging: "Subject to Crianza/Reserva/Gran Reserva rules, plus blind tasting sensory committee certification.",
        description: "Strict single-vineyard designation introduced in 2017; vines must be 35+ years old, hand-harvested with maximum yields of 35 hl/ha and estate-bottled."
      },
      {
        tier: "DOQ Priorat Gran Vinya Classificada (Grand Cru)",
        sharePct: "0.5%",
        aocCount: "Pinnacle single vineyard tier",
        yieldLimits: "Max 3,000 kg/ha (15 hl/ha)",
        minAbv: "13.5% ABV",
        description: "Top tier of Priorat's 2019 Els Noms de la Terra classification, recognizing iconic single vineyards like Álvaro Palacios L'Ermita."
      }
    ]
  },
  vinification: {
    barrelType: "225-Liter Barrica Bordelesa (American Oak & French Allier Oak)",
    barrelDescription: "Classical Rioja relies on seasoned American oak (Quercus alba) imparting sweet vanilla, dill, coconut, and cigar box, whereas Ribera del Duero and modern Rioja employ tight-grain French oak (Quercus petraea) for graphite, cocoa, and fine-grained structure.",
    traditions: [
      { practice: "Trasiega (Racking by Candlelight)", details: "Traditional manual barrel-to-barrel racking every 6 months to clarify wine naturally without harsh filtration." },
      { practice: "Extended Bottle Maturation", details: "Decade-long bottle aging in subterranean stone cellars before commercial release (e.g. López de Heredia and Vega Sicilia)." }
    ]
  }
};

export const RIOJA_PRESTIGE_ESTATES = [
  {
    id: "castillo-ygay-gran-reserva",
    name: "Castillo Ygay Gran Reserva Especial",
    producer: "Marqués de Murrieta",
    type: "Bodega",
    village: "Logroño (Rioja Alta)",
    grape: "Tempranillo (85%), Mazuelo (15%)",
    cepage: "Tempranillo (85%), Mazuelo (15%)",
    grapeComposition: "Tempranillo (85%), Mazuelo (15%)",
    classification: "DOCa Rioja Gran Reserva",
    status: "DOCa Rioja Gran Reserva Especial",
    debutVintage: 1877,
    sourcing: "Single historic Pago Ygay vineyard at 485m on calcareous clay.",
    winemaking: "Aged 28 months in American and French oak barricas followed by 5+ years in bottle.",
    terroir: "Single historic Pago Ygay vineyard at 485m on calcareous clay.",
    character: "Truffle, black cherry, dried fig, exotic cedar, and velvety, regal architectural depth.",
    iconicStatus: "Consistently ranked among the greatest red wines in the world; named Wine of the Year globally."
  },
  {
    id: "gran-reserva-890",
    name: "Gran Reserva 890",
    producer: "La Rioja Alta S.A.",
    type: "Bodega",
    village: "Haro (Rioja Alta)",
    grape: "Tempranillo (95%), Graciano (3%), Mazuelo (2%)",
    cepage: "Tempranillo (95%), Graciano (3%), Mazuelo (2%)",
    grapeComposition: "Tempranillo (95%), Graciano (3%), Mazuelo (2%)",
    classification: "DOCa Rioja Gran Reserva",
    status: "DOCa Rioja Gran Reserva Selección Especial",
    debutVintage: 1890,
    sourcing: "Oldest estate parcels in Briñas, Labastida, and Villalba on calcareous clay.",
    winemaking: "Aged 6 years in custom-coopered American oak casks with 10 manual rackings by candlelight, followed by 6 years in bottle.",
    terroir: "Oldest vines in Briñas, Labastida, and Villalba on calcareous clay.",
    character: "Cigar smoke, vanilla bean, dried cherry, balsamic herbs, leather, and melted silk texture.",
    iconicStatus: "The flagship monument of classical Rioja winemaking, produced only in exceptional vintages."
  },
  {
    id: "vina-tondonia-gran-reserva-blanco",
    name: "Viña Tondonia Gran Reserva Blanco",
    producer: "R. López de Heredia",
    type: "Bodega",
    village: "Haro (Rioja Alta)",
    grape: "Viura (90%), Malvasía (10%)",
    cepage: "Viura (90%), Malvasía (10%)",
    grapeComposition: "Viura (90%), Malvasía (10%)",
    classification: "DOCa Rioja Gran Reserva Blanco",
    status: "DOCa Rioja Gran Reserva Blanco (Immortal White Icon)",
    debutVintage: 1913,
    sourcing: "Alluvial gravel loop along the Ebro River in Haro.",
    winemaking: "Aged for 10 years in seasoned American oak casks and 10 years in bottle before release.",
    terroir: "Alluvial gravel loop along the Ebro River.",
    character: "Beeswax, dried chamomile, toasted hazelnut, preserved lemon, dry sherry-like nuance, and shocking youthful acidity.",
    iconicStatus: "The world's most legendary aged dry white wine, showing virtually unlimited cellaring capacity."
  },
  {
    id: "vega-sicilia-unico-reserva-especial",
    name: "Vega Sicilia Único Reserva Especial",
    producer: "Bodegas Vega Sicilia",
    type: "Bodega",
    village: "Valbuena de Duero (Ribera del Duero)",
    grape: "Tinto Fino / Tempranillo (95%), Cabernet Sauvignon (5%)",
    cepage: "Tinto Fino / Tempranillo (95%), Cabernet Sauvignon (5%)",
    grapeComposition: "Tinto Fino (95%), Cabernet Sauvignon (5%)",
    classification: "Multi-Vintage Master Blend",
    status: "Historic First Growth (Multi-Vintage Reserva Especial)",
    debutVintage: 1864,
    sourcing: "Limestone, chalk, and gravel colluvium in the Milla de Oro.",
    winemaking: "A master assemblage of three distinct exceptional vintages of Vega Sicilia Único, aged over 10–15 years in oak and bottle.",
    terroir: "Limestone, clay, and gravel colluvium in the Milla de Oro.",
    character: "Aristocratic, multilayered, dark chocolate, tobacco leaf, black truffle, and endless aristocratic persistence.",
    iconicStatus: "Spain's supreme tribute to tradition, representing the highest pinnacle of Spanish winemaking."
  },
  {
    id: "pingus-cuvee",
    name: "Pingus",
    producer: "Dominio de Pingus",
    type: "Bodega",
    village: "Quintanilla de Onésimo (Ribera del Duero)",
    grape: "Tinto Fino (100%)",
    cepage: "100% Tinto Fino / Tempranillo",
    grapeComposition: "100% Tinto Fino / Tempranillo",
    classification: "Cult Single Vineyard",
    status: "Cult Single Vineyard Icon",
    debutVintage: 1995,
    sourcing: "Un-grafted, 90+ year old bush vines in the Barroso and San Cristóbal parcels in La Horra.",
    winemaking: "100% biodynamic farming, manual destemming, natural fermentation, and aging in custom French oak.",
    terroir: "High-altitude sand, clay, and gravel plateau at 850m elevation.",
    character: "Monumental, ink-black concentration, pure blackberry, graphite, black olive tapenade, and ultra-fine velvet tannins.",
    iconicStatus: "Spain's most sought-after cult red wine, creating an international sensation upon its inaugural 1995 release."
  },
  {
    id: "l-ermita-cuvee",
    name: "L'Ermita",
    producer: "Álvaro Palacios",
    type: "Bodega",
    village: "Gratallops (DOQ Priorat)",
    grape: "Garnacha Tinta (92%), Cariñena (7%), White Grapes (1%)",
    cepage: "Garnacha Tinta (92%), Cariñena (7%), White Grapes (1%)",
    grapeComposition: "Garnacha Tinta (92%), Cariñena (7%), White Grapes (1%)",
    classification: "Gran Vinya Classificada",
    status: "Gran Vinya Classificada (DOQ Grand Cru)",
    debutVintage: 1993,
    sourcing: "Steep northeast-facing 2.7-ha Llicorella amphitheater planted with 80+ year-old bush vines.",
    winemaking: "Farmed with mules and biodynamics, fermented in open wooden vats, and aged in French oak foudres.",
    terroir: "Precambrian black and silver Llicorella slate beneath the hermitage.",
    character: "Crushed slate minerality, wild rosemary, black raspberry, blood orange, and weightless aristocratic power.",
    iconicStatus: "The single wine that placed Priorat on the global luxury fine wine map."
  }
];

export const RIOJA_ICONIC_DOMAINES = [
  {
    id: "lopez-de-heredia",
    name: "R. López de Heredia Viña Tondonia",
    village: "Haro (Rioja Alta)",
    subregion: "Rioja Alta (Western High Rioja)",
    vigneron: "María José & Mercedes López de Heredia",
    wineType: "Dual",
    status: "Historic Family Bodega",
    philosophy: "Uncompromising classical artisanal traditionalism: native yeasts, ancient wooden vats, in-house cooperage, and decade-long American oak aging in mold-covered cellars.",
    keyCuvees: [
      "Viña Tondonia Gran Reserva (Red & White)",
      "Viña Bosconia Gran Reserva",
      "Viña Gravonia Blanco Crianza",
      "Viña Tondonia Rosado Gran Reserva"
    ]
  },
  {
    id: "la-rioja-alta",
    name: "La Rioja Alta S.A.",
    village: "Haro (Rioja Alta)",
    subregion: "Rioja Alta (Western High Rioja)",
    vigneron: "Julio Sáenz",
    wineType: "Red",
    status: "Centenary Classical Bodega",
    philosophy: "Mastery of extended American oak maturation, in-house cooperage, and meticulous racking by candlelight every six months without filtration.",
    keyCuvees: [
      "Gran Reserva 890",
      "Gran Reserva 904",
      "Viña Ardanza Reserva",
      "Viña Alberdi Crianza"
    ]
  },
  {
    id: "vega-sicilia",
    name: "Bodegas Vega Sicilia",
    village: "Valbuena de Duero (Ribera del Duero)",
    subregion: "Ribera del Duero (Castilian High Plateau)",
    vigneron: "Gonzalo Iturriaga de Juan",
    wineType: "Red",
    status: "Spanish National Monument / First Growth",
    philosophy: "Spain's historical first growth: obsessive viticultural parcel selection, customized cooperage, and legendary decade-long maturation in wood and bottle.",
    keyCuvees: [
      "Vega Sicilia Único",
      "Único Reserva Especial (Multi-Vintage)",
      "Valbuena 5°",
      "Alión"
    ]
  },
  {
    id: "dominio-de-pingus",
    name: "Dominio de Pingus",
    village: "Quintanilla de Onésimo (Ribera del Duero)",
    subregion: "Ribera del Duero (Castilian High Plateau)",
    vigneron: "Peter Sisseck",
    wineType: "Red",
    status: "Cult Biodynamic Domaine",
    philosophy: "Micro-cuvée biodynamics with century-old un-grafted bush vines, minuscule yields (12 hl/ha), and custom wooden fermenters.",
    keyCuvees: [
      "Pingus",
      "Flor de Pingus",
      "PSI"
    ]
  },
  {
    id: "alvaro-palacios",
    name: "Álvaro Palacios",
    village: "Gratallops (DOQ Priorat)",
    subregion: "Priorat (DOQ Priorat & Llicorella Slate)",
    vigneron: "Álvaro Palacios",
    wineType: "Red",
    status: "DOQ Priorat Grand Cru Pioneer",
    philosophy: "Visionary champion of old-vine Garnacha on vertiginous Llicorella slate terraces, farming with mules and crafting wines of spiritual mineral purity.",
    keyCuvees: [
      "L'Ermita (Gran Vinya Classificada)",
      "Finca Dofí",
      "Les Aubaguetes",
      "Gratallops Vi de Vila"
    ]
  },
  {
    id: "marques-de-murrieta",
    name: "Marqués de Murrieta",
    village: "Logroño (Rioja Alta)",
    subregion: "Rioja Alta (Western High Rioja)",
    vigneron: "María Vargas",
    wineType: "Dual",
    status: "Historic Founder Bodega (1852)",
    philosophy: "Combining the grandeur of single-estate terroir (Pago Ygay) with state-of-the-art precision, crafting immortal Gran Reservas and textured whites.",
    keyCuvees: [
      "Castillo Ygay Gran Reserva Especial",
      "Capellanía Blanco Reserva",
      "Marqués de Murrieta Reserva",
      "Dalmau"
    ]
  },
  {
    id: "bodegas-artadi",
    name: "Bodegas Artadi",
    village: "Laguardia (Rioja Alavesa)",
    subregion: "Rioja Alavesa (Basque Rioja)",
    vigneron: "Juan Carlos López de Lacalle",
    wineType: "Red",
    status: "Single-Vineyard Terroir Pioneer",
    philosophy: "Pioneering organic and biodynamic single-vineyard bottlings from pure limestone parcels in Rioja Alavesa, focusing on vibrant fruit, mineral tension, and French oak.",
    keyCuvees: [
      "Viña El Pisón",
      "El Carretil",
      "La Poza de Ballesteros",
      "Valdeginés"
    ]
  },
  {
    id: "telmo-rodriguez",
    name: "Compañía de Vinos Telmo Rodríguez",
    village: "Lanciego (Rioja Alavesa)",
    subregion: "Rioja Alavesa (Basque Rioja)",
    vigneron: "Telmo Rodríguez & Pablo Eguzkiza",
    wineType: "Red",
    status: "Ancient Terroir Rediscovery Pioneer",
    philosophy: "Recovering forgotten ancient field blends, stepped hillside terraces, and pre-phylloxera heritage vineyards in Rioja Alavesa with Burgundian parcel focus.",
    keyCuvees: [
      "Las Beatas (Viñedo Singular)",
      "Tabuérniga",
      "El Velado",
      "Altos de Lanzaga"
    ]
  }
];

export const RIOJA_FOOD_PAIRINGS = [
  {
    category: "Traditional Castilian Roasts",
    wineType: "Red",
    targetWine: "Rioja Gran Reserva (La Rioja Alta 890 / Castillo Ygay) & Ribera del Duero",
    dish: "Lechazo Asado (Wood-Fired Roast Suckling Lamb), Chuletillas al Sarmiento (Lamb Chops Grilled over Vine Shoots)",
    note: "The fine-grained, resolved tannins and cedar-tobacco complexity of mature Tempranillo dissolve rich lamb fat effortlessly while echoing charred vine shoot smoke.",
    glassware: "Bordeaux Grand Cru or Large Burgundy Stem (700ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1–2 hours before service for optimal aeration."
  },
  {
    category: "Artisanal Charcuterie & Cured Meats",
    wineType: "Red",
    targetWine: "Rioja Reserva & Crianza (Viña Tondonia / Viña Ardanza)",
    dish: "Jamón Ibérico de Bellota, Cecina de León, Chorizo Riojano & Aged Manchego AOP",
    note: "Bright natural acidity and savory red cherry fruit slice cleanly through the unctuous, nutty acorn fat of Jamón Ibérico de Bellota, while oak-aged Rioja Reserva vanilla and leather nuances mirror aged curing spices.",
    glassware: "Bordeaux Grand Cru or Large Burgundy Stem (700ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 45–60 minutes before service."
  },
  {
    category: "Wood-Fired Beef & Steaks",
    wineType: "Red",
    targetWine: "Ribera del Duero (Vega Sicilia Único / Pingus / Alión)",
    dish: "Chuletón de Buey (Charcoal-Grilled Dry-Aged Ribeye), Rabo de Toro (Braised Oxtail in Red Wine)",
    note: "The muscular, ink-black concentration, dense fruit core, and iron-driven tannins of high-altitude Ribera del Duero tame charbroiled dry-aged beef and rich collagen-laden braises.",
    glassware: "Bordeaux Grand Cru Stem (850ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 2 hours before service."
  },
  {
    category: "Wild Game & Mountain Stews",
    wineType: "Red",
    targetWine: "DOQ Priorat (Álvaro Palacios L'Ermita / Clos Mogador)",
    dish: "Civet de Sanglier (Braised Wild Boar with Juniper & Dark Chocolate), Roast Venison Loin with Wild Blackberry Jus",
    note: "Priorat's crushed Llicorella slate minerality, wild rosemary garrigue notes, and rich alcoholic warmth create an astonishing molecular synergy with gamey wild boar and dark savory sauces.",
    glassware: "Bordeaux Grand Cru Stem (850ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1.5–2 hours before service."
  },
  {
    category: "Spanish Seafood & Shellfish Tapas",
    wineType: "White",
    targetWine: "Aged White Rioja (López de Heredia Viña Tondonia Gran Reserva Blanco)",
    dish: "Gambas al Ajillo (Garlic Prawns), Grilled Turbot with Garlic-Chili Oil, Salt-Baked Sea Bass",
    note: "The waxy, nutty, oxidative complexity, beeswax nuance, and vibrant lemon-oil acidity of barrel-aged white Rioja elevates rich shellfish and caramelized garlic oil.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not required; aerate gently in glass."
  },
  {
    category: "Galician Seafood & Raw Shellfish",
    wineType: "White",
    targetWine: "Galician Albariño (DO Rías Baixas Val do Salnés)",
    dish: "Percebes (Goose Barnacles), Pulpo a la Gallega (Octopus with Pimentón & Sea Salt), Grilled Langoustines",
    note: "The saline, granite-driven sea spray minerality and razor-sharp acidity of Albariño provide the ultimate pairing for briny Galician shellfish and tender octopus.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "8–10°C (46–50°F)",
    decanting: "Not required; preserve fresh Atlantic sea-breeze aromatics."
  }
];
