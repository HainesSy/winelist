// Authoritative Spain (Rioja, Ribera del Duero, Priorat) Master Sommelier Dataset
// DOCa Rioja Consejo Regulador & DO Ribera del Duero Standards

export const RIOJA_SUBREGIONS = [
  {
    id: 'rioja-alta',
    name: "Rioja Alta (Western High Rioja)",
    lat: 42.5000,
    lng: -2.8000,
    appellations: ["DOCa Rioja", "Viñedo Singular Rioja Alta"],
    grapeVarieties: ["Tempranillo", "Graciano", "Mazuelo (Cariñena)", "Garnacha", "Viura (Macabeo)"],
    soilTypes: ["Calcareous Clay (Arcillo-Calcarie)", "Ferruginous Clay (Arcillo-Ferroso)", "Alluvial Terrace Gravel"],
    climate: "Atlantic Maritime with Continental influences; cool nights and protective Cantabrian mountain ridge.",
    terroir: "Elevated rolling plateau (400-700m) south of the Ebro River. Cool Atlantic winds preserve bracing acidity and fine tannins, yielding the most aristocratic, long-lived, and elegant classical Riojas.",
    focus: "The cathedral of Classical Gran Reserva Tempranillo: cedar, dried cherry, cigar box, leather, dill, and coconut from extended American oak aging (La Rioja Alta, López de Heredia).",
    description: "Centering on the historic station district (Barrio de la Estación) in Haro, Rioja Alta is the heartland of historic centuries-old bodegas."
  },
  {
    id: 'rioja-alavesa',
    name: "Rioja Alavesa (Basque Rioja)",
    lat: 42.5500,
    lng: -2.6000,
    appellations: ["DOCa Rioja", "Viñedo Singular Rioja Alavesa"],
    grapeVarieties: ["Tempranillo", "Graciano", "Viura", "Garnacha"],
    soilTypes: ["Pure White Calcareous Clay-Limestone on terraced hillsides"],
    climate: "Cool Atlantic microclimate protected by the towering Sierra de Cantabria mountain wall.",
    terroir: "Steep terraced limestone parcels directly under the limestone cliffs of Cantabria. Highly alkaline, white chalk soils give Tempranillo electric freshness, chalky minerality, and vibrant floral perfume.",
    focus: "Modern single-vineyard and terroir-driven Tempranillo (Artadi, Telmo Rodríguez, Remelluri, Contador) showcasing pure fruit, mineral tension, and French oak refinement.",
    description: "Located within the Basque province of Álava, famous for dramatic medieval hilltop villages like Laguardia and iconic modern architecture."
  },
  {
    id: 'ribera-del-duero',
    name: "Ribera del Duero (Castilian High Plateau)",
    lat: 41.6500,
    lng: -3.7000,
    appellations: ["DO Ribera del Duero"],
    grapeVarieties: ["Tinto Fino / Tinta del País (Tempranillo 95%+)", "Cabernet Sauvignon", "Merlot", "Malbec", "Albillo Mayor"],
    soilTypes: ["White Limestone Marl (Yesos y Calizas)", "Chalky Silt & Sand", "Alluvial River Gravel"],
    climate: "Extreme High Continental (Meseta Central); 750m-1,000m altitude with dramatic 20°C+ diurnal temperature shifts.",
    terroir: "High-altitude Castilian plateau bisected by the Duero River. Extreme thermal shifts lock in natural acidity while intense UV radiation produces thick-skinned Tempranillo with ink-black color and massive tannins.",
    focus: "Monumental, muscular, aristocratic reds of legendary depth: blackberry, espresso, dark chocolate, graphite, and formidable ageability (Vega Sicilia Único, Pingus, Alión).",
    description: "The 'Golden Mile' (Milla de Oro) of Spanish fine wine stretching through Valladolid and Burgos, home to Spain's most iconic first growth, Vega Sicilia."
  },
  {
    id: 'priorat',
    name: "Priorat (DOQ Priorat & Llicorella Slate)",
    lat: 41.2000,
    lng: 0.8000,
    appellations: ["DOQ Priorat", "Gratallops Vi de Vila"],
    grapeVarieties: ["Garnacha Tinta", "Cariñena (Samsó)", "Syrah", "Cabernet Sauvignon"],
    soilTypes: ["Llicorella (Devonian Black & Golden Quartz-rich Schist Slate)"],
    climate: "Extreme Mediterranean Continental with hot, dry summers and cool mountain nights.",
    terroir: "Vertiginous terraced amphitheaters of decomposing Llicorella slate. Ancient bush vines dig 15+ meters deep to access water, producing tiny yields (less than 1 kg per vine) of intense concentration.",
    focus: "Inky, mineral-soaked, heroic reds: crushed slate, black cherry, wild rosemary, dark chocolate, and iron power (Álvaro Palacios L'Ermita, Clos Mogador).",
    description: "One of only two Qualified DOCa/DOQ regions in Spain, rescued in the late 1980s by René Barbier and Álvaro Palacios."
  }
];

export const RIOJA_GRAND_CRUS = [
  {
    id: 'las-beatas',
    name: "Las Beatas (Viñedo Singular)",
    village: "Labastida",
    district: "Rioja Alavesa",
    areaHa: 1.90,
    dominantGrape: "Field Blend of 8+ Indigenous Grapes (Tempranillo, Graciano, Garnacha, Rojal, etc.)",
    aspect: "South-Southeast terraced amphitheater",
    elevationRange: "500m - 620m",
    soil: "Tertiary Calcareous Clay & Fractured Limestone Terraces",
    classification: "Viñedo Singular (Single Vineyard DOCa)",
    aocDecreeYear: 2017,
    character: "Ethereal, weightless, crystalline red fruit, violet perfume, crushed chalk, and monumental Burgundian finesse.",
    benchmarkProducers: ["Compañía de Vinos Telmo Rodríguez"],
    legalNotes: "A historic pre-phylloxera field blend vineyard co-planted with ancient heritage varieties."
  },
  {
    id: 'vina-tondonia',
    name: "Viña Tondonia (Historic Cru Climat)",
    village: "Haro",
    district: "Rioja Alta",
    areaHa: 100.00,
    dominantGrape: "Tempranillo (75%), Garnacha (15%), Graciano & Mazuelo (10%)",
    aspect: "Alluvial river loop amphitheater along the Ebro River",
    elevationRange: "430m - 490m",
    soil: "Alluvial Terrace Gravel over Deep Calcareous Clay-Limestone",
    classification: "Historic Single Vineyard Climat",
    aocDecreeYear: 1913,
    character: "The immortal temple of classical Rioja: dried cherry, orange peel, autumn leaves, cigar tobacco, cedar, and silky melted tannins.",
    benchmarkProducers: ["R. López de Heredia Viña Tondonia"],
    legalNotes: "A continuous 100-hectare single vineyard cultivated uninterruptedly since 1877."
  },
  {
    id: 'vega-sicilia-unico',
    name: "Vega Sicilia Único (Historic Pago)",
    village: "Valbuena de Duero",
    district: "Ribera del Duero (Milla de Oro)",
    areaHa: 40.00,
    dominantGrape: "Tinto Fino / Tempranillo (95%), Cabernet Sauvignon (5%)",
    aspect: "North-facing hillside slopes above the Duero River",
    elevationRange: "700m - 800m",
    soil: "Limestone, Chalk, and Clay colluvium over Alluvial River Gravel",
    classification: "Pago Histórico / DO Ribera del Duero",
    aocDecreeYear: 1982,
    character: "Spain's undisputed first growth: black cherry, dried fig, espresso, cedar, truffle, and legendary 50-60 year aging power.",
    benchmarkProducers: ["Bodegas Vega Sicilia"],
    legalNotes: "Aged for a minimum of 10 years in oak casks and bottle before release; only produced in exceptional vintages."
  },
  {
    id: 'pingus',
    name: "Dominio de Pingus (Historic Barroso & San Cristóbal Pagos)",
    village: "La Horra / Pesquera de Duero",
    district: "Ribera del Duero",
    areaHa: 4.50,
    dominantGrape: "Tinto Fino / Tempranillo (100%)",
    aspect: "South-facing high plateau",
    elevationRange: "840m - 860m",
    soil: "Deep Calcareous Clay, Limestone Gravel, and Sand over Bedrock",
    classification: "Cult Single Vineyard Terroir",
    aocDecreeYear: 1995,
    character: "Monumental, opulent, ink-black concentration with pure blackberry, graphite, black olive tapenade, and ultra-fine velvet tannins.",
    benchmarkProducers: ["Dominio de Pingus (Peter Sisseck)"],
    legalNotes: "Crafted from un-grafted, 90+ year-old bush vines farmed under strict biodynamics with minuscule yields of 12 hl/ha."
  },
  {
    id: 'l-ermita',
    name: "L'Ermita (Gran Vinya Classificada)",
    village: "Gratallops",
    district: "DOQ Priorat",
    areaHa: 2.70,
    dominantGrape: "Garnacha Tinta (92%), Cariñena (7%), White Grapes (1%)",
    aspect: "Northeast-facing vertiginous 60° amphitheater beneath the hermitage",
    elevationRange: "400m - 500m",
    soil: "Precambrian Llicorella (Black & Silver Devonian Slate)",
    classification: "Gran Vinya Classificada (Grand Cru DOQ Priorat)",
    aocDecreeYear: 2019,
    character: "The crown jewel of Priorat: crushed slate minerality, wild mountain herbs, black raspberry, blood orange, and weightless power.",
    benchmarkProducers: ["Álvaro Palacios"],
    legalNotes: "Elevated to the top tier of Priorat's official 2019 vineyard classification (Gran Vinya Classificada)."
  }
];

export const RIOJA_TECHNICAL_REGULATIONS = {
  geology: {
    system: "Ebro Basin Limestone Terraces & Duero High Plateau",
    formations: [
      {
        name: "Arcillo-Calcarie (Calcareous Clay)",
        frenchName: "Argilo-Calcaire",
        period: "Tertiary (~25 Ma)",
        fossil: "Marine Limestone Shells",
        keyAreas: ["Rioja Alavesa", "Rioja Alta (Sonsierra)"],
        wineImpact: "Gives Tempranillo bright, energetic acidity, floral perfume, chalky fine tannins, and aristocratic longevity."
      },
      {
        name: "Duero Limestone & Marl Plateau",
        frenchName: "Calizas de la Ribera",
        period: "Miocene (~15 Ma)",
        fossil: "Lacustrine Limestone & Gypsum Deposits",
        keyAreas: ["Pesquera de Duero", "Valbuena de Duero", "La Horra"],
        wineImpact: "Produces thick-skinned, concentrated Tinto Fino with black fruit depth, iron structure, and graphite minerality."
      },
      {
        name: "Llicorella Slate",
        frenchName: "Schistes du Priorat",
        period: "Paleozoic (Devonian ~380 Ma)",
        fossil: "Foliated Quartz & Schist",
        keyAreas: ["Gratallops", "Porrera", "La Vilella Alta"],
        wineImpact: "Creates intensely concentrated, mineral-drenched Garnacha and Cariñena with smoky, crushed-rock persistence."
      }
    ]
  },
  grapes: {
    major: [
      {
        name: "Tempranillo (Tinto Fino / Tinta del País)",
        percentage: "78%",
        type: "Red",
        epicenter: "Rioja Alta, Rioja Alavesa, Ribera del Duero, Toro",
        profile: "Dried red cherry, plum, tobacco leaf, leather, vanilla, cedar, and dill.",
        role: "Spain's noble flagship red variety; versatile conduit of oak aging and limestone terroir."
      },
      {
        name: "Garnacha Tinta (Grenache)",
        percentage: "12%",
        type: "Red",
        epicenter: "Rioja Oriental, Priorat, Gredos, Aragon",
        profile: "Wild strawberry, blood orange, garrigue herbs, white pepper, and juicy mid-palate roundness.",
        role: "Adds warmth, opulent red fruit, and alcoholic body to classical blends; single-varietal star in Priorat and Gredos."
      },
      {
        name: "Graciano & Mazuelo (Cariñena)",
        percentage: "5%",
        type: "Red",
        epicenter: "Rioja (Graciano), Priorat (Cariñena)",
        profile: "Inky dark color, piercing acidity, black pepper, and intense structural tannins.",
        role: "Essential seasoning grapes providing aromatic lift, deep color, and long-term aging backbone."
      },
      {
        name: "Viura (Macabeo) & Malvasía Riojana",
        percentage: "5%",
        type: "White",
        epicenter: "Rioja Alta, Penedès",
        profile: "Dried chamomile, beeswax, toasted almond, preserved lemon, and nutty oxidative complexity.",
        role: "Crafts aristocratic, oak-aged white Riojas (López de Heredia Viña Tondonia Blanco) aged 10-20+ years."
      }
    ]
  },
  classification: {
    system: "DOCa Rioja & DO Ribera del Duero Aging Hierarchy & Viñedo Singular (2017)",
    description: "Traditional barrel aging categories combined with the modern single-vineyard (Viñedo Singular) terroir classification.",
    pyramid: [
      {
        tier: "Gran Reserva",
        sharePct: "3%",
        aocCount: "Apex traditional category",
        yieldLimits: "Max 5,000 kg/ha",
        minAbv: "12.5% ABV",
        description: "Red wines aged minimum 5 years total with at least 2 years in oak barricas and 2 years in bottle before release."
      },
      {
        tier: "Reserva",
        sharePct: "15%",
        aocCount: "Select harvest wines",
        yieldLimits: "Max 6,500 kg/ha",
        minAbv: "12.0% ABV",
        description: "Red wines aged minimum 3 years total with at least 1 year in oak barricas and 6 months in bottle."
      },
      {
        tier: "Crianza",
        sharePct: "42%",
        aocCount: "Mainstream aged tier",
        yieldLimits: "Max 6,500 kg/ha",
        minAbv: "11.5% ABV",
        description: "Red wines aged minimum 2 years total with at least 1 year in oak barricas."
      },
      {
        tier: "Viñedo Singular (Single Vineyard)",
        sharePct: "1%",
        aocCount: "Delimited single parcels",
        yieldLimits: "Max 5,000 kg/ha (35 hl/ha)",
        description: "Strict single-vineyard designation introduced in 2017; vines must be 35+ years old and hand-harvested with blind tasting verification."
      }
    ]
  }
};

export const RIOJA_PRESTIGE_ESTATES = [
  {
    name: "Castillo Ygay Gran Reserva Especial",
    producer: "Marqués de Murrieta",
    village: "Logroño (Rioja Alta)",
    grape: "Tempranillo (85%), Mazuelo (15%)",
    classification: "DOCa Rioja Gran Reserva",
    terroir: "Single historic Pago Ygay vineyard at 485m on calcareous clay.",
    status: "Consistently ranked among the greatest red wines in the world; aged 28 months in oak and 5 years in bottle.",
    character: "Truffle, black cherry, dried fig, exotic cedar, and velvety, regal architectural depth."
  },
  {
    name: "Gran Reserva 890",
    producer: "La Rioja Alta S.A.",
    village: "Haro (Rioja Alta)",
    grape: "Tempranillo (95%), Graciano (3%), Mazuelo (2%)",
    classification: "DOCa Rioja Gran Reserva",
    terroir: "Oldest vines in Briñas, Labastida, and Villalba on calcareous clay.",
    status: "The flagship monument of classical Rioja winemaking, produced only in exceptional vintages and aged 6 years in American oak.",
    character: "Cigar smoke, vanilla bean, dried cherry, balsamic herbs, leather, and melted silk texture."
  },
  {
    name: "Viña Tondonia Gran Reserva Blanco",
    producer: "R. López de Heredia",
    village: "Haro (Rioja Alta)",
    grape: "Viura (90%), Malvasía (10%)",
    classification: "DOCa Rioja Gran Reserva Blanco",
    terroir: "Alluvial gravel loop along the Ebro River.",
    status: "The world's most legendary aged white wine, matured for 10 years in American oak and 10 years in bottle.",
    character: "Beeswax, dried chamomile, toasted hazelnut, preserved lemon, dry sherry-like nuance, and shocking youthful acidity."
  },
  {
    name: "Vega Sicilia Único Reserva Especial",
    producer: "Bodegas Vega Sicilia",
    village: "Valbuena de Duero (Ribera del Duero)",
    grape: "Tinto Fino / Tempranillo (95%), Cabernet Sauvignon (5%)",
    classification: "Multi-Vintage Master Blend",
    terroir: "Limestone, clay, and gravel colluvium in the Milla de Oro.",
    status: "Spain's supreme tribute to tradition: a non-vintage blend of three distinct exceptional vintages aged up to 15 years.",
    character: "Aristocratic, multilayered, dark chocolate, tobacco leaf, black truffle, and endless aristocratic persistence."
  }
];

export const RIOJA_ICONIC_DOMAINES = [
  {
    name: "R. López de Heredia Viña Tondonia",
    village: "Haro (Rioja Alta)",
    vigneron: "María José López de Heredia",
    wineType: "Dual",
    philosophy: "Uncompromising classical artisanal traditionalism: native yeasts, ancient wooden vats, and decade-long American oak aging.",
    keyCuvees: ["Viña Tondonia Gran Reserva", "Viña Bosconia Gran Reserva", "Viña Tondonia Blanco Gran Reserva"]
  },
  {
    name: "La Rioja Alta S.A.",
    village: "Haro (Rioja Alta)",
    vigneron: "Julio Sáenz",
    wineType: "Red",
    philosophy: "Mastery of extended American oak maturation and meticulous racking by candlelight every six months.",
    keyCuvees: ["Gran Reserva 890", "Gran Reserva 904", "Viña Ardanza Reserva"]
  },
  {
    name: "Bodegas Vega Sicilia",
    village: "Valbuena de Duero (Ribera del Duero)",
    vigneron: "Gonzalo Iturriaga de Juan",
    wineType: "Red",
    philosophy: "Spain's historical first growth: obsessive viticultural selection, customized cooperage, and legendary decade-long maturation.",
    keyCuvees: ["Vega Sicilia Único", "Único Reserva Especial", "Valbuena 5°"]
  },
  {
    name: "Dominio de Pingus",
    village: "Quintanilla de Onésimo (Ribera del Duero)",
    vigneron: "Peter Sisseck",
    wineType: "Red",
    philosophy: "Micro-cuvée biodynamics with century-old ungrafted bush vines and minuscule yields.",
    keyCuvees: ["Pingus", "Flor de Pingus", "PSI"]
  }
];

export const RIOJA_FOOD_PAIRINGS = [
  {
    category: "Traditional Castilian Roasts",
    wineType: "Red",
    targetWine: "Rioja Gran Reserva & Ribera del Duero",
    dish: "Lechazo Asado (Wood-Fired Roast Suckling Lamb), Chuletillas al Sarmiento (Lamb Chops Grilled over Vine Shoots)",
    note: "The fine-grained, resolved tannins and cedar-tobacco complexity of mature Tempranillo dissolve rich lamb fat effortlessly."
  },
  {
    category: "Artisanal Charcuterie & Cured Meats",
    wineType: "Red",
    targetWine: "Rioja Reserva & Crianza",
    dish: "Jamón Ibérico de Bellota, Cecina de León, Chorizo Riojano & Aged Manchego AOP",
    note: "Bright acidity and savory red fruit slice through the unctuous acorn-fed fat of Jamón Ibérico."
  },
  {
    category: "Wood-Fired Beef & Steaks",
    wineType: "Red",
    targetWine: "Ribera del Duero (Vega Sicilia / Pingus) & Priorat",
    dish: "Chuletón de Buey (Charcoal-Grilled Dry-Aged Ribeye), Oxtail Stew (Rabo de Toro)",
    note: "The muscular, ink-black concentration and iron-driven tannins of Ribera and Priorat tame charbroiled dry-aged beef."
  },
  {
    category: "Spanish Seafood & Shellfish Tapas",
    wineType: "White",
    targetWine: "Aged White Rioja (Viña Tondonia Blanco)",
    dish: "Gambas al Ajillo (Garlic Shrimp), Grilled Turbot with Garlic Oil, Salt-Baked Sea Bass",
    note: "The waxy, nutty, oxidative complexity and lemon-oil acidity of barrel-aged white Rioja elevates rich shellfish and garlic."
  }
];
