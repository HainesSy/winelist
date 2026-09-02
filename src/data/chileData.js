// Authoritative Chile (Maipo, Colchagua, Casablanca, Peumo) Master Sommelier Dataset
// SAG National Viticultural Zoning & Chilean D.O. System

export const CHILE_SUBREGIONS = [
  {
    id: 'alto-maipo',
    name: "Alto Maipo (Andean Foothills & Puente Alto)",
    district: "Alto Maipo",
    lat: -33.6000,
    lng: -70.5800,
    coordinates: [-33.6000, -70.5800],
    elevation: "650m to 850m along the high Andean bench",
    soils: [
      "Quaternary Alluvial Gravel Terraces (Piedmont Glaciation - Terraza 3)",
      "Sandy Clay Loam with Round Andean River Stones (Piedras Redondas)"
    ],
    grapes: [
      "Cabernet Sauvignon (80%)",
      "Cabernet Franc (8%)",
      "Carmenère (5%)",
      "Petit Verdot (4%)",
      "Merlot (3%)"
    ],
    climate: "Mediterranean semi-arid climate tempered by cold katabatic nocturnal mountain downdrafts from the snow-capped Andes Mountains.",
    riverInfluence: "The Maipo River originates in the high Andean glaciers, carving deep alluvial gravel terraces (Terraza 3) that provide exceptional drainage and mineral nutrition.",
    coolingInfluence: "Dramatic Andean katabatic cooling breezes descend every evening from the 6,000m Andean peaks, dropping daytime temperatures by 20°C (diurnal shift) to preserve natural acidity and fresh eucalyptus aromatics.",
    appellations: ["D.O. Valle del Maipo", "D.O. Puente Alto", "D.O. Pirque", "Maipo Andes"],
    terroir: "Ancient third alluvial terrace (Terraza 3) of the Maipo River at 650–800m altitude. Extreme diurnal shifts (up to 20°C) and rocky, gravelly, low-fertility soils produce the world's most aromatic, minty, structured Cabernet Sauvignon.",
    focus: "The undisputed Kingdom of South American Cabernet Sauvignon: cassis, wild mint, eucalyptus, cedar, graphite, and silky aristocratic tannins (Almaviva, Don Melchor, Viñedo Chadwick, Seña).",
    description: "Located immediately south of Santiago in the high Andean foothills, Puente Alto and Pirque are the historical ground zero for Chilean fine wine.",
    microTerroirs: [
      { name: "Puente Alto Benches", focus: "Alluvial third terrace gravels producing South America's greatest 100-point Cabernet Sauvignons (Almaviva, Don Melchor, Viñedo Chadwick)." },
      { name: "Pirque & El Principal", focus: "Higher foothill slopes immediately abutting the Andean rock faces with intense eucalyptus and wild mint aromatics." },
      { name: "Alto Jahuel & Buin", focus: "Colluvial gravel slopes producing dark-fruited, structured Cabernet and Cabernet Franc." }
    ]
  },
  {
    id: 'colchagua-apalta',
    name: "Colchagua Valley & Apalta Amphitheater",
    district: "Colchagua Valley",
    lat: -34.6000,
    lng: -71.3500,
    coordinates: [-34.6000, -71.3500],
    elevation: "200m to 450m in the granite amphitheater",
    soils: [
      "Decomposed Pink Granitic Colluvium",
      "Deep Clay-Loam Foothill Benches",
      "Tinguiririca Alluvial Gravel"
    ],
    grapes: [
      "Carmenère (45%)",
      "Cabernet Sauvignon (30%)",
      "Syrah (15%)",
      "Malbec (5%)",
      "Petit Verdot (5%)"
    ],
    climate: "Warm, sunny Mediterranean climate moderated by cool maritime breezes funneled through the Tinguiririca River gap.",
    riverInfluence: "The Tinguiririca River flows through Colchagua, regulating valley humidity and cooling evening temperatures.",
    coolingInfluence: "Afternoon sea breezes drawn inland through coastal mountain breaks moderate summer heat spikes.",
    appellations: ["D.O. Valle de Colchagua", "D.O. Apalta", "Colchagua Entre Cordilleras"],
    terroir: "A horseshoe-shaped south-facing natural amphitheater sheltered from coastal extremes. Ancient decomposed granite and deep colluvial clay provide optimal water retention for late-ripening Carmenère and muscular Syrah.",
    focus: "Monumental, opulent Carmenère and luxury red blends: dark blackberry, cocoa nibs, black pepper, grilled bell pepper, and velvety chocolate tannins (Clos Apalta, Montes Folly, Neyen).",
    description: "Regarded as the 'Napa Valley of Chile', Apalta earned official D.O. status in 2018 for its world-class luxury red blends.",
    microTerroirs: [
      { name: "Apalta Horseshoe Amphitheater", focus: "South-facing pre-phylloxera granitic slopes producing iconic, opulent Carmenère and Syrah (Clos Apalta, Montes Alpha M, Purple Angel)." },
      { name: "Los Lingues (Andes Foothills)", focus: "Cooler, higher elevation northeastern corner producing fresh, aromatic Carmenère and Cabernet." },
      { name: "Marchigüe (Coastal Gap)", focus: "Maritime-influenced western sector with rolling clay hills producing vibrant, spicy Syrah and Cabernet." }
    ]
  },
  {
    id: 'casablanca-san-antonio',
    name: "Casablanca & San Antonio / Leyda Valley",
    district: "San Antonio & Casablanca",
    lat: -33.3000,
    lng: -71.4000,
    coordinates: [-33.3000, -71.4000],
    elevation: "80m to 350m on rolling coastal bluffs",
    soils: [
      "Weathered Red Clay over Decomposed Granite",
      "Calcareous Marine Silt & Sand (Leyda)",
      "Calcium Carbonate Enclaves"
    ],
    grapes: [
      "Sauvignon Blanc (45%)",
      "Chardonnay (30%)",
      "Pinot Noir (20%)",
      "Syrah (5%)"
    ],
    climate: "Cool Maritime (Costa) dominated by the freezing Humboldt Current; persistent morning coastal fog and brisk afternoon sea winds.",
    riverInfluence: "Proximity to the Pacific Ocean (10–25 km) rather than river flow dominates the regional hydrology and cooling cycle.",
    coolingInfluence: "The dense marine fog (Camanchaca) sweeps in daily from the cold Pacific Ocean, lingering until midday before giving way to brisk afternoon ocean winds.",
    appellations: ["D.O. Valle de Casablanca", "D.O. Valle de San Antonio", "D.O. Valle de Leyda", "Costa"],
    terroir: "Rolling coastal range valleys located only 10–25 km from the Pacific Ocean. Morning fog burns off by noon, giving grapes prolonged hang time while preserving crisp natural acidity and saline minerality.",
    focus: "Laser-focused, aromatic Sauvignon Blanc (grapefruit, lime, jalapeño, sea spray) and elegant, mineral-driven coastal Pinot Noir and Chardonnay.",
    description: "Pioneered in 1982 by Pablo Morandé, Casablanca transformed Chile from a purely red wine country into a world leader in cool-climate whites.",
    microTerroirs: [
      { name: "Leyda Valley Maritime Benches", focus: "Calcareous marine silt located just 12km from the Pacific, producing electric, saline Sauvignon Blanc and Pinot Noir (Garuma, Amayna)." },
      { name: "Casablanca High Hills", focus: "Decomposed granite slopes producing textured, mineral Chardonnay and cool-climate Syrah (Montes Outer Limits)." },
      { name: "Lo Abarca & Las Dichas", focus: "Extreme cold coastal parcels with direct sea exposure and intense natural salinity." }
    ]
  },
  {
    id: 'peumo-cachapoal',
    name: "Peumo & Cachapoal Valley",
    district: "Cachapoal Valley",
    lat: -34.2000,
    lng: -71.1500,
    coordinates: [-34.2000, -71.1500],
    elevation: "150m to 350m along the Cachapoal river plain",
    soils: [
      "Deep Alluvial Clay over Hard Impermeable Subsoil",
      "Moisture-Retaining River Silts (Terraza Fluvial)"
    ],
    grapes: [
      "Carmenère (65%)",
      "Cabernet Sauvignon (25%)",
      "Syrah (10%)"
    ],
    climate: "Warm Mediterranean microclimate with high solar radiation and gentle breezes from Lake Rapel.",
    riverInfluence: "The Cachapoal River creates a sheltered microclimatic basin protected from cold ocean fronts.",
    coolingInfluence: "Lake Rapel and gentle evening river winds temper afternoon heat, preventing sunburn while extending autumn hang time.",
    appellations: ["D.O. Valle del Cachapoal", "D.O. Peumo", "Cachapoal Entre Cordilleras"],
    terroir: "Deep, moisture-retaining clay soils along the Cachapoal River. Deep clay moderates soil temperature and provides slow, steady water release, allowing notoriously late-ripening Carmenère to achieve full phenolic maturity.",
    focus: "The undisputed world capital for 100% single-varietal Carmenère: silky blueberry, black plum, tobacco, dark chocolate, and sweet paprika without vegetal bitterness (Carmín de Peumo, Terrunyo).",
    description: "The historical sanctuary where Carmenère was preserved and rediscovered in 1994 by French ampelographer Jean-Michel Boursiquot.",
    microTerroirs: [
      { name: "Peumo River Terraces", focus: "Deep alluvial clay banks along the Cachapoal River where 100+ year-old ungrafted Carmenère achieves complete physiological ripeness." },
      { name: "Cachapoal Andes (Alto Cachapoal)", focus: "High-altitude gravel slopes at the Andean base producing fresh, minty Cabernet Sauvignon and Syrah." }
    ]
  }
];

export const CHILE_GRAND_CRUS = [
  {
    id: 'almaviva-puente-alto',
    name: "Almaviva (Puente Alto Grand Cru)",
    subregionId: "alto-maipo",
    subregion: "Alto Maipo (Andean Foothills & Puente Alto)",
    district: "Alto Maipo (Andes)",
    village: "Puente Alto",
    lat: -33.6050,
    lng: -70.5850,
    coordinates: [-33.6050, -70.5850],
    areaHa: 60.00,
    dominantGrape: "Cabernet Sauvignon",
    grapeRatio: "Cabernet Sauvignon (65–72%), Carmenère (20–25%), Cabernet Franc (5%), Petit Verdot (3%), Merlot (1%)",
    wineType: "Red",
    aspect: "Gentle northern slope facing the Andes Mountains",
    elevationRange: "650m – 700m",
    soil: "Third Alluvial Terrace Gravel (Terraza 3) with Round Porphyry Stones & Calcareous Loam",
    tier: "grandCru",
    badge: "Grand Cru Archetype",
    classification: "Premier Grand Cru Classé Archetype (Franco-Chilean Partnership)",
    aocDecreeYear: 1997,
    character: "The pinnacle of Franco-Chilean nobility: cassis, graphite, violet, wild herbs, mocha, and aristocratic, multidimensional length.",
    benchmarkProducers: [
      "Viña Almaviva (Baron Philippe de Rothschild & Concha y Toro)"
    ],
    famousProducers: [
      "Viña Almaviva (Baron Philippe de Rothschild & Concha y Toro)"
    ],
    legalNotes: "Historic partnership founded in 1997 between Baroness Philippine de Rothschild and Eduardo Guilisasti Tagle."
  },
  {
    id: 'don-melchor-puente-alto',
    name: "Don Melchor (Puente Alto Parcel Selection)",
    subregionId: "alto-maipo",
    subregion: "Alto Maipo (Andean Foothills & Puente Alto)",
    district: "Alto Maipo (Andes)",
    village: "Puente Alto",
    lat: -33.6080,
    lng: -70.5800,
    coordinates: [-33.6080, -70.5800],
    areaHa: 127.00,
    dominantGrape: "Cabernet Sauvignon",
    grapeRatio: "Cabernet Sauvignon (90%+), Cabernet Franc (10%)",
    wineType: "Red",
    aspect: "Alluvial river terrace along the northern bank of the Maipo River",
    elevationRange: "650m – 680m",
    soil: "Piedmont Glacial Alluvial Gravel (Terraza 3) with High Mineral Drainage & Round Stones",
    tier: "grandCru",
    badge: "Iconic Single Vineyard",
    classification: "Iconic Single Vineyard Cabernet",
    aocDecreeYear: 1987,
    character: "Blackcurrant, wild mint, crushed pencil lead, cocoa nibs, and ultra-refined, silken tannins with 30+ year aging potential.",
    benchmarkProducers: [
      "Viña Don Melchor"
    ],
    famousProducers: [
      "Viña Don Melchor"
    ],
    legalNotes: "Divided into 7 distinct parcels harvested and vinified separately under the supervision of legendary consultant Jacques Boissenot."
  },
  {
    id: 'clos-apalta',
    name: "Clos Apalta (Apalta Grand Cru Amphitheater)",
    subregionId: "colchagua-apalta",
    subregion: "Colchagua Valley & Apalta Amphitheater",
    district: "Colchagua Valley (Apalta)",
    village: "Apalta",
    lat: -34.6150,
    lng: -71.2850,
    coordinates: [-34.6150, -71.2850],
    areaHa: 60.00,
    dominantGrape: "Carmenère",
    grapeRatio: "Carmenère (64%), Cabernet Sauvignon (19%), Merlot (15%), Petit Verdot (2%)",
    wineType: "Red",
    aspect: "South-facing natural granite horseshoe amphitheater",
    elevationRange: "200m – 450m",
    soil: "Decomposed Pink Granite & Deep Colluvial Clay over Impermeable Bedrock",
    tier: "grandCru",
    badge: "Iconic Clos Single Vineyard",
    classification: "Iconic Clos Single Vineyard (D.O. Apalta)",
    aocDecreeYear: 1997,
    character: "Opulent, unctuous, and majestic: blackberry liqueur, dark chocolate, tobacco leaf, espresso, and seamless velvet tannins.",
    benchmarkProducers: [
      "Clos Apalta (Domaines Bournet-Lapostolle)"
    ],
    famousProducers: [
      "Clos Apalta (Domaines Bournet-Lapostolle)"
    ],
    legalNotes: "Ungrafted pre-phylloxera vines planted in 1920, hand-destemmed berry by berry by a dedicated team of over 100 people."
  },
  {
    id: 'vinedo-chadwick',
    name: "Viñedo Chadwick (Puente Alto)",
    subregionId: "alto-maipo",
    subregion: "Alto Maipo (Andean Foothills & Puente Alto)",
    district: "Alto Maipo (Andes)",
    village: "Puente Alto",
    lat: -33.5950,
    lng: -70.5750,
    coordinates: [-33.5950, -70.5750],
    areaHa: 15.00,
    dominantGrape: "Cabernet Sauvignon",
    grapeRatio: "100% Cabernet Sauvignon",
    wineType: "Red",
    aspect: "Flat alluvial terrace with direct Andean mountain breeze",
    elevationRange: "650m",
    soil: "Ancient Quaternary Alluvial Gravel & Clay Loam (Former Polo Field of Don Alfonso Chadwick)",
    tier: "grandCru",
    badge: "Iconic Cult Single Vineyard",
    classification: "Iconic Cult Single Vineyard",
    aocDecreeYear: 1999,
    character: "Ethereal, laser-pure, wild red cherry, cassis, cedar, graphite, and breathtaking mineral precision.",
    benchmarkProducers: [
      "Viña Errázuriz / Eduardo Chadwick"
    ],
    famousProducers: [
      "Viña Errázuriz / Eduardo Chadwick"
    ],
    legalNotes: "Winner of the famous 2004 Berlin Blind Tasting, where it scored above Château Margaux and Château Lafite Rothschild."
  }
];

export const CHILE_TECHNICAL_REGULATIONS = {
  geology: {
    system: "Andean Alluvial Terraces & Coastal Granite Cordillera",
    summary: "Chile's viticultural landscape is framed by two towering mountain systems: the Andes Mountains to the east and the older Coastal Range (Cordillera de la Costa) to the west. Glacial meltwater from the Andes deposited deep alluvial gravel terraces (Terraza 3) in Alto Maipo, while weathered Paleozoic granite defines the coastal hills and Apalta amphitheater.",
    formations: [
      {
        id: "quaternary-alluvial-terraces",
        name: "Quaternary Alluvial Terraces (Terraza 3)",
        frenchName: "Terrasses Alluviales du Maipo",
        localName: "Terraza 3 del Maipo",
        period: "Pleistocene (~1.5 Ma)",
        fossil: "Andean Igneous River Gravel & Porphyry Cobblestones",
        characteristics: "Round river stones (piedras redondas) mixed with poor clay loam, providing rapid vertical drainage.",
        porosity: "High drainage capacity forcing roots deep into water-bearing gravel beds while absorbing heat during the day.",
        keyAreas: ["Puente Alto", "Pirque", "Alto Jahuel"],
        wineImpact: "Gives Cabernet Sauvignon deep drainage, intense thermal heat capture, and signature eucalyptus/cassis tension."
      },
      {
        id: "decomposed-coastal-granite",
        name: "Decomposed Coastal Granite & Clay",
        frenchName: "Granite Décomposé",
        localName: "Granito Meteorizado",
        period: "Paleozoic / Mesozoic (~200 Ma)",
        fossil: "Quartz & Feldspar Crystals",
        characteristics: "Weathered pink and gray granite breaking down into iron-rich red clay and coarse quartz sand.",
        porosity: "Moderate moisture retention in clay with free drainage in sandy granite fractures.",
        keyAreas: ["Apalta", "Casablanca", "Leyda", "San Antonio"],
        wineImpact: "Provides low vine vigor, intense mineral tension, and supreme phenolic concentration in Carmenère and Syrah."
      },
      {
        id: "calcareous-marine-silt",
        name: "Calcareous Marine Silt & Calcium Carbonate",
        frenchName: "Sédiments Marins Calcaires",
        localName: "Calcáreo Marino",
        period: "Pliocene (~5 Ma)",
        fossil: "Fossilized Marine Mollusks & Sea Floor Deposits",
        characteristics: "Ancient marine terraces containing active calcium carbonate pockets near the Pacific coast.",
        porosity: "High capillary alkalinity giving white wines crystalline mineral salinity.",
        keyAreas: ["Leyda Valley", "Limarí Valley", "Casablanca Costa"],
        wineImpact: "Imparts saline sea-spray minerality, bright citrus tension, and linear acidity to Sauvignon Blanc and Chardonnay."
      }
    ]
  },
  grapes: {
    major: [
      {
        id: "cabernet-sauvignon",
        name: "Cabernet Sauvignon",
        percentage: 60,
        type: "Red",
        epicenter: "Alto Maipo (Puente Alto, Pirque), Cachapoal, Colchagua",
        profile: "Cassis, black cherry, wild mint, eucalyptus, cedar, and pencil lead graphite.",
        role: "The structural titan of Chile; thrives on Andean alluvial gravels with remarkable natural freshness, zero phylloxera (100% ungrafted vines), and refined tannins.",
        clones: ["Massale Selection Maipo (Pre-Phylloxera 1850s)", "Clone 169", "Clone 337"],
        benchmarkCuvees: [
          "Viña Almaviva",
          "Viña Don Melchor",
          "Viñedo Chadwick",
          "Viña Errázuriz Don Maximiano"
        ]
      },
      {
        id: "carmenere",
        name: "Carmenère",
        percentage: 20,
        type: "Red",
        epicenter: "Peumo (Cachapoal), Apalta (Colchagua)",
        profile: "Black plum, dark chocolate, sweet paprika, white pepper, wild tobacco, and sweet bell pepper (pyrazines).",
        role: "Chile's iconic signature grape; extinct in Bordeaux after phylloxera and rediscovered in Chile in 1994 by Jean-Michel Boursiquot after being mistaken for Merlot for over a century.",
        clones: ["Massale Selection Peumo", "Massale Selection Apalta"],
        benchmarkCuvees: [
          "Clos Apalta",
          "Carmín de Peumo",
          "Montes Purple Angel",
          "Terrunyo Carmenère"
        ]
      },
      {
        id: "sauvignon-blanc-chardonnay",
        name: "Sauvignon Blanc & Chardonnay",
        percentage: 10,
        type: "White",
        epicenter: "Casablanca Valley, Leyda Valley, Limarí Valley",
        profile: "Grapefruit, lime zest, jalapeño, saline minerality, white peach, and hazelnut.",
        role: "Coastal Pacific white revolution influenced by the cold Pacific Humboldt Current, delivering world-class tension and purity.",
        benchmarkCuvees: [
          "Casa Marín Sauvignon Blanc Cipreses",
          "Montes Outer Limits Sauvignon Blanc",
          "Errázuriz Las Pizarras Chardonnay"
        ]
      },
      {
        id: "syrah-cabernet-franc",
        name: "Syrah & Cabernet Franc",
        percentage: 10,
        type: "Red",
        epicenter: "Colchagua (Apalta), Alto Maipo, San Antonio",
        profile: "Blackberry, cracked black pepper, violets, smoked meat, and fine-grained graphite.",
        role: "Opulent spice, dark berry concentration, and floral lift in luxury icon blends.",
        benchmarkCuvees: [
          "Montes Folly Syrah",
          "Almaviva (Cabernet Franc component)",
          "Clos Apalta (Petit Verdot & Merlot component)"
        ]
      }
    ],
    heritage: [
      {
        name: "País (Mission / Criolla)",
        percentage: 5,
        type: "Red",
        epicenter: "Itata Valley, Maule Valley, Bío Bío",
        profile: "Rustic red cherry, pomegranate, dried herbs, and tea leaf.",
        role: "Historical heritage grape brought by 16th-century Spanish conquistadors; undergoing artisanal renaissance for fresh natural wines.",
        status: "Ancient heritage plantings on 150+ year old ungrafted bush vines."
      }
    ]
  },
  classification: {
    system: "Chilean D.O. System (1995) & 2011 Viticultural Complementary Designations (Costa, Entre Cordilleras, Andes)",
    description: "East-to-West geographical labeling based on proximity to the Andes or Pacific Ocean alongside official D.O. subregions.",
    pyramid: [
      {
        tier: "Andes (Andean Foothills)",
        sharePct: "25%",
        aocCount: "High-Altitude Foothills",
        description: "High-elevation vineyard sites on Andean alluvial fans and gravel benches (Puente Alto, Pirque, San Esteban) benefiting from extreme night cooling winds."
      },
      {
        tier: "Entre Cordilleras (Between the Mountains)",
        sharePct: "60%",
        aocCount: "Central Valley Plains & Amphitheaters",
        description: "The sheltered, warm heartland between the Coastal Range and the Andes (Apalta, Peumo, Santa Cruz) ideal for late-ripening Carmenère and Syrah."
      },
      {
        tier: "Costa (Pacific Coast)",
        sharePct: "15%",
        aocCount: "Coastal Valleys",
        description: "Vineyards located within the immediate maritime influence of the Pacific Ocean and cold Humboldt Current (Casablanca, Leyda, Paredones)."
      }
    ]
  },
  vinification: {
    barrelType: "French Oak Barriques (225L) & Large Oak Foudres",
    barrelDescription: "Top Chilean icon wines utilize tight-grain French oak barriques (typically 50–80% new) with light-to-medium toast to preserve pure cassis and graphite terroir definition without masking eucalyptus nuances.",
    traditions: [
      { practice: "100% Ungrafted Pre-Phylloxera Vines (Pie Franco)", details: "Due to natural geographical barriers (Andes, Pacific, Atacama Desert, Antarctic ice), Chile remains entirely phylloxera-free, allowing vines to grow on their own original root systems." },
      { practice: "Manual Berry Destemming", details: "At estates like Clos Apalta, over 100 people hand-destem every single grape cluster berry by berry before gravity-fed fermentation in French oak vats." }
    ]
  }
};

export const CHILE_PRESTIGE_ESTATES = [
  {
    id: "almaviva",
    name: "Almaviva",
    producer: "Viña Almaviva",
    type: "Domaine",
    village: "Puente Alto (Alto Maipo)",
    grape: "Cabernet Sauvignon (68%), Carmenère (23%), Cabernet Franc (5%), Petit Verdot (3%), Merlot (1%)",
    cepage: "Cabernet Sauvignon (68%), Carmenère (23%), Cabernet Franc (5%), Petit Verdot (3%), Merlot (1%)",
    grapeComposition: "Cabernet Sauvignon (68%), Carmenère (23%), Cabernet Franc (5%), Petit Verdot (3%), Merlot (1%)",
    classification: "Iconic Franco-Chilean Grand Cru",
    status: "Iconic Franco-Chilean Grand Cru",
    debutVintage: 1996,
    sourcing: "60-hectare single estate vineyard in the heart of Puente Alto's third alluvial gravel terrace.",
    winemaking: "Bordeaux Premier Grand Cru Classé vinification in custom gravity-flow winery; aged 16–18 months in 100% new French oak.",
    terroir: "Third Alluvial Terrace of the Maipo River with round stones and Andean mountain breezes.",
    character: "Violet perfume, cassis, dark chocolate, graphite, and seamless silky length.",
    iconicStatus: "The pioneer of luxury fine wine in South America, created by Baroness Philippine de Rothschild and Concha y Toro."
  },
  {
    id: "don-melchor",
    name: "Don Melchor Cabernet Sauvignon",
    producer: "Viña Don Melchor",
    type: "Domaine",
    village: "Puente Alto (Alto Maipo)",
    grape: "Cabernet Sauvignon (93%), Cabernet Franc (7%)",
    cepage: "Cabernet Sauvignon (93%), Cabernet Franc (7%)",
    grapeComposition: "Cabernet Sauvignon (93%), Cabernet Franc (7%)",
    classification: "Iconic Single Vineyard",
    status: "Iconic Single Vineyard Cabernet",
    debutVintage: 1987,
    sourcing: "127-hectare single vineyard in Puente Alto divided into 7 distinct parcels planted between 1979 and 1992.",
    winemaking: "Parcel-by-parcel vinification under the guidance of consultant Jacques Boissenot; aged 15 months in French oak barriques.",
    terroir: "Ancient gravel beds beneath the Andes.",
    character: "Blackcurrant, cedar, eucalyptus, pencil shavings, and aristocratic structural depth.",
    iconicStatus: "Chile's benchmark Cabernet Sauvignon for over 35 consecutive vintages."
  },
  {
    id: "clos-apalta-cuvee",
    name: "Clos Apalta",
    producer: "Domaines Bournet-Lapostolle",
    type: "Domaine",
    village: "Apalta (Colchagua)",
    grape: "Carmenère (64%), Cabernet Sauvignon (19%), Merlot (15%), Petit Verdot (2%)",
    cepage: "Carmenère (64%), Cabernet Sauvignon (19%), Merlot (15%), Petit Verdot (2%)",
    grapeComposition: "Carmenère (64%), Cabernet Sauvignon (19%), Merlot (15%), Petit Verdot (2%)",
    classification: "Iconic Clos",
    status: "Iconic Clos (Wine Spectator #1 Wine of the Year)",
    debutVintage: 1997,
    sourcing: "60-hectare biodynamic clos parcel in the Apalta granite amphitheater with ungrafted vines planted in 1920.",
    winemaking: "100% manual berry-by-berry destemming, native yeast fermentation in French oak vats, and 24 months in new French oak.",
    terroir: "Granite horseshoe amphitheater with deep moisture-retaining clay.",
    character: "Blackberry, cocoa nibs, espresso, dark plum, and velvet-wrapped power.",
    iconicStatus: "Three-time Top 100 Wine of the Year winner; monumental Carmenère-dominant blend."
  },
  {
    id: "vinedo-chadwick-cuvee",
    name: "Viñedo Chadwick",
    producer: "Viña Errázuriz / Eduardo Chadwick",
    type: "Domaine",
    village: "Puente Alto (Alto Maipo)",
    grape: "Cabernet Sauvignon (100%)",
    cepage: "100% Cabernet Sauvignon",
    grapeComposition: "100% Cabernet Sauvignon",
    classification: "Iconic Single Vineyard",
    status: "Iconic Single Vineyard (100-Point Berlin Tasting Champion)",
    debutVintage: 1999,
    sourcing: "15-hectare single vineyard on the former personal polo field of Don Alfonso Chadwick in Puente Alto.",
    winemaking: "Hand-picked at dawn, fermented in small temperature-controlled stainless steel and concrete tanks; aged 22 months in French oak.",
    terroir: "Piedmont alluvial gravel bench with intense Andean night downdrafts.",
    character: "Laser-pure cassis, red cherry, wild mint, cedar, graphite, and breathtaking finesse.",
    iconicStatus: "Achieved legendary status by winning 1st place in the landmark 2004 Berlin Blind Tasting over Château Margaux and Château Lafite."
  },
  {
    id: "sena",
    name: "Seña",
    producer: "Robert Mondavi & Eduardo Chadwick",
    type: "Domaine",
    village: "Ocoa (Aconcagua Valley)",
    grape: "Cabernet Sauvignon (55%), Carmenère (20%), Malbec (12%), Cabernet Franc (8%), Petit Verdot (5%)",
    cepage: "Cabernet Sauvignon (55%), Carmenère (20%), Malbec (12%), Cabernet Franc (8%), Petit Verdot (5%)",
    grapeComposition: "Cabernet Sauvignon (55%), Carmenère (20%), Malbec (12%), Cabernet Franc (8%), Petit Verdot (5%)",
    classification: "Iconic Biodynamic Grand Cru",
    status: "Iconic Biodynamic Grand Cru Blend",
    debutVintage: 1995,
    sourcing: "Hillside biodynamic vineyard on colluvial gravel and decomposed granite slopes in Ocoa.",
    winemaking: "100% certified biodynamic viticulture, co-fermentation of select parcels, and 22 months aging in French oak barriques and Stockinger foudres.",
    terroir: "Decomposed granite and colluvial gravel slopes in Aconcagua.",
    character: "Blackberry, redcurrant, tobacco, fresh bay leaf, and silken, polished tannins.",
    iconicStatus: "Chile's first joint-venture icon wine, created in 1995 by Robert Mondavi and Eduardo Chadwick."
  },
  {
    id: "carmin-de-peumo",
    name: "Carmín de Peumo Carmenère",
    producer: "Concha y Toro",
    type: "Domaine",
    village: "Peumo (Cachapoal Valley)",
    grape: "Carmenère (85%), Cabernet Sauvignon (10%), Cabernet Franc (5%)",
    cepage: "Carmenère (85%), Cabernet Sauvignon (10%), Cabernet Franc (5%)",
    grapeComposition: "Carmenère (85%), Cabernet Sauvignon (10%), Cabernet Franc (5%)",
    classification: "Iconic Single Vineyard Carmenère",
    status: "Pinnacle Single-Vineyard Carmenère",
    debutVintage: 2003,
    sourcing: "Block 32 of the historic Peumo vineyard on deep alluvial clay terraces along the Cachapoal River.",
    winemaking: "Harvested in late May at peak phenolic ripeness, fermented in open-top vats, and aged 18 months in French oak barriques.",
    terroir: "Deep alluvial clay terrace along the Cachapoal River.",
    character: "Blueberry liqueur, sweet paprika, crushed dark chocolate, fig, and plush fine tannins.",
    iconicStatus: "The wine that established Carmenère as a legitimate world-class luxury red variety."
  }
];

export const CHILE_ICONIC_DOMAINES = [
  {
    id: "vina-almaviva",
    name: "Viña Almaviva",
    village: "Puente Alto (Alto Maipo)",
    subregion: "Alto Maipo (Andean Foothills & Puente Alto)",
    vigneron: "Michel Friou",
    wineType: "Red",
    status: "Franco-Chilean Premier Grand Cru",
    philosophy: "Bordeaux grand cru precision applied to Chile's greatest Andean Cabernet terroir on the third alluvial terrace of the Maipo River.",
    keyCuvees: [
      "Almaviva",
      "EPU"
    ]
  },
  {
    id: "vina-errazuriz-chadwick",
    name: "Viña Errázuriz / Chadwick",
    village: "Panquehue / Puente Alto",
    subregion: "Alto Maipo (Andean Foothills & Puente Alto)",
    vigneron: "Eduardo Chadwick & Francisco Baettig",
    wineType: "Dual",
    status: "Chilean Wine Royalty",
    philosophy: "Proving Chilean terroir at the highest international level through pure single-vineyard precision, biodynamics, and linear mineral elegance.",
    keyCuvees: [
      "Viñedo Chadwick",
      "Seña",
      "Don Maximiano Founder's Reserve",
      "KAI Carmenère",
      "Las Pizarras Pinot Noir & Chardonnay"
    ]
  },
  {
    id: "clos-apalta-domaine",
    name: "Clos Apalta",
    village: "Apalta (Colchagua)",
    subregion: "Colchagua Valley & Apalta Amphitheater",
    vigneron: "Charles-Edouard Bournet & Jacques Begarie",
    wineType: "Red",
    status: "Biodynamic Grand Clos Icon",
    philosophy: "Old pre-phylloxera ungrafted vines (planted 1920) farmed under strict biodynamics with manual berry-by-berry destemming and gravity-flow vatting.",
    keyCuvees: [
      "Clos Apalta",
      "Le Petit Clos"
    ]
  },
  {
    id: "don-melchor-domaine",
    name: "Viña Don Melchor",
    village: "Puente Alto (Alto Maipo)",
    subregion: "Alto Maipo (Andean Foothills & Puente Alto)",
    vigneron: "Enrique Tirado",
    wineType: "Red",
    status: "Historic Single-Vineyard Estate",
    philosophy: "Obsessive parcel-by-parcel expression of 127 hectares of ungrafted Cabernet vines in Puente Alto, crafted with 35+ years of dedicated continuous focus.",
    keyCuvees: [
      "Don Melchor Cabernet Sauvignon"
    ]
  },
  {
    id: "montes-wines",
    name: "Viña Montes",
    village: "Apalta (Colchagua)",
    subregion: "Colchagua Valley & Apalta Amphitheater",
    vigneron: "Aurelio Montes & Aurelio Montes Jr.",
    wineType: "Dual",
    status: "Chilean Fine Wine Pioneer",
    philosophy: "Pioneering steep hillside viticulture in Apalta and extreme coastal terroirs, crafting iconic Carmenère and Syrah with Gregorian chant music in barrel cellars.",
    keyCuvees: [
      "Montes Purple Angel (Carmenère)",
      "Montes Folly (Syrah)",
      "Montes Alpha M",
      "Outer Limits Sauvignon Blanc"
    ]
  },
  {
    id: "concha-y-toro-terrunyo",
    name: "Concha y Toro (Terrunyo & Carmín de Peumo)",
    village: "Pirque / Peumo",
    subregion: "Peumo & Cachapoal Valley",
    vigneron: "Ignacio Recabarren & Marcio Ramírez",
    wineType: "Dual",
    status: "Terroir Selection Master",
    philosophy: "Dedicated parcel selection isolating Chile's finest micro-terroirs, including Block 32 in Peumo for benchmark single-vineyard Carmenère.",
    keyCuvees: [
      "Carmín de Peumo",
      "Terrunyo Carmenère (Block 27)",
      "Terrunyo Cabernet Sauvignon (Las Pirquitas)",
      "Terrunyo Sauvignon Blanc (Los Fardos)"
    ]
  },
  {
    id: "sena-estate",
    name: "Viña Seña",
    village: "Ocoa (Aconcagua)",
    subregion: "Alto Maipo (Andean Foothills & Puente Alto)",
    vigneron: "Eduardo Chadwick",
    wineType: "Red",
    status: "Biodynamic Landmark",
    philosophy: "100% biodynamic farming on granitic hill slopes creating an authentic Chilean Grand Vin that bridges classic elegance with New World vitality.",
    keyCuvees: [
      "Seña",
      "Rocas de Seña"
    ]
  }
];

export const CHILE_FOOD_PAIRINGS = [
  {
    category: "South American Asado & Grilled Steaks",
    wineType: "Red",
    targetWine: "Alto Maipo Cabernet Sauvignon (Almaviva / Don Melchor / Viñedo Chadwick)",
    dish: "Asado Criollo (Charcoal-Grilled Ribeye & Picanha), Lamb Chops with Fresh Chimichurri, Empanadas de Pino (Spiced Beef & Onion Pastries)",
    note: "The concentrated cassis fruit, wild eucalyptus freshness, and bold, muscular tannins of Andean Cabernet effortlessly dissolve rich grilled beef fats while echoing charred wood smoke and herbed chimichurri.",
    glassware: "Bordeaux Grand Cru Stem (850ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1.5–2 hours before service for optimal aeration."
  },
  {
    category: "Traditional Chilean Comfort Dishes & Earthy Stews",
    wineType: "Red",
    targetWine: "Peumo & Apalta Carmenère (Carmín de Peumo / Clos Apalta / Purple Angel)",
    dish: "Pastel de Choclo (Sweet Corn & Spiced Beef Casserole), Charquicán (Braised Beef, Pumpkin & Vegetable Stew), Slow-Cooked Short Ribs with Paprika Glaze",
    note: "Carmenère's savory sweet paprika, dark chocolate, and subtle bell pepper pyrazine notes mirror the spiced ground beef, sweet corn crust, and earthy root vegetables of traditional Chilean stews.",
    glassware: "Bordeaux Grand Cru Stem (850ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1 hour before service."
  },
  {
    category: "Slow-Roasted Andean Lamb & Game",
    wineType: "Red",
    targetWine: "Colchagua Valley Syrah & Luxury Blends (Montes Folly / Clos Apalta)",
    dish: "Cordero al Palo (Patagonian Whole Spit-Roasted Lamb), Braised Venison with Blackberry Reduction",
    note: "The opulent blackberry liqueur, cracked black pepper, smoked meat notes, and velvet tannins of hillside Colchagua Syrah seamlessly marry with wood-roasted game and crispy lamb skin.",
    glassware: "Bordeaux Grand Cru Stem (850ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1.5 hours before service."
  },
  {
    category: "Pacific Coastal Seafood & Ceviche",
    wineType: "White",
    targetWine: "Casablanca & Leyda Sauvignon Blanc (Casa Marín / Montes Outer Limits)",
    dish: "Corvina (Chilean Sea Bass) Ceviche with Lime & Cilantro, Machas a la Parmesana (Broiled Razor Clams with Parmesan Butter)",
    note: "Crisp, saline, jalapeño-kissed coastal Sauvignon Blanc complements fresh raw marinated fish and cuts cleanly through rich melted cheese over succulent razor clams.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "8–10°C (46–50°F)",
    decanting: "Not required; aerate in glass."
  },
  {
    category: "Wood-Roasted Pacific Salmon & Kingfish",
    wineType: "Red",
    targetWine: "Coastal Casablanca & Leyda Pinot Noir (Errázuriz Las Pizarras / Garuma)",
    dish: "Cedar-Plank Roasted Pacific Salmon with Wild Chanterelles, Pan-Seared Chilean Kingfish with Thyme Jus",
    note: "Cool-climate Pacific coastal Pinot Noir delivers bright red cherry fruit, damp forest floor, and silky fine tannins that enhance rich oily fish and earthy wild mushrooms.",
    glassware: "Burgundy Pinot Noir Ballon Stem (750ml)",
    servingTemp: "14–16°C (57–60°F)",
    decanting: "Decant 30 minutes before service."
  },
  {
    category: "Butter-Poached Patagonian King Crab",
    wineType: "White",
    targetWine: "Coastal Casablanca & Limarí Chardonnay (Errázuriz Las Pizarras / Amelia)",
    dish: "Centolla Patagónica (Fresh King Crab Legs with Clarified Lemon Butter), Sea Urchin (Erizos) on Toast",
    note: "Mineral-driven coastal Chardonnay with hazelnut reduction, lemon curd, and saline tension cuts through decadent clarified butter and elevates sweet king crab meat.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not required; aerate in glass."
  }
];
