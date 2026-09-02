// Authoritative Chile (Maipo, Colchagua, Casablanca, Peumo) Master Sommelier Dataset
// SAG National Viticultural Zoning & Chilean D.O. System

export const CHILE_SUBREGIONS = [
  {
    id: 'alto-maipo',
    name: "Alto Maipo (Andean Foothills & Puente Alto)",
    lat: -33.6000,
    lng: -70.5800,
    appellations: ["D.O. Valle del Maipo", "D.O. Puente Alto", "D.O. Pirque", "Maipo Andes"],
    grapeVarieties: ["Cabernet Sauvignon", "Cabernet Franc", "Merlot", "Petit Verdot", "Carmenère"],
    soilTypes: ["Quaternary Alluvial Gravel Terraces (Piedmont Glaciation)", "Sandy Clay Loam with Round River Stones"],
    climate: "Mediterranean semi-arid climate tempered by cold katabatic nocturnal mountain downdrafts from the Andes.",
    terroir: "Ancient third alluvial terrace (Terraza 3) of the Maipo River at 650-800m altitude. Extreme diurnal shifts (up to 20°C) and rocky, gravelly, low-fertility soils produce the world's most aromatic, minty, structured Cabernet Sauvignon.",
    focus: "The undisputed Kingdom of South American Cabernet Sauvignon: cassis, wild mint, eucalyptus, cedar, graphite, and silky aristocratic tannins (Almaviva, Don Melchor, Viñedo Chadwick, Sena).",
    description: "Located immediately south of Santiago in the high Andean foothills, Puente Alto and Pirque are the historical ground zero for Chilean fine wine."
  },
  {
    id: 'colchagua-apalta',
    name: "Colchagua Valley & Apalta Amphitheater",
    lat: -34.6000,
    lng: -71.3500,
    appellations: ["D.O. Valle de Colchagua", "D.O. Apalta", "Colchagua Entre Cordilleras"],
    grapeVarieties: ["Carmenère", "Cabernet Sauvignon", "Syrah", "Malbec", "Petit Verdot"],
    soilTypes: ["Decomposed Granitic Colluvium", "Deep Clay-Loam Benches", "Alluvial Gravel"],
    climate: "Warm, sunny Mediterranean climate with cool maritime breezes funneled through the Tinguiririca River gap.",
    terroir: "A horseshoe-shaped south-facing natural amphitheater sheltered from coastal extremes. Ancient decomposed granite and deep colluvial clay provide optimal water retention for late-ripening Carmenère and muscular Syrah.",
    focus: "Monumental, opulent Carmenère and luxury red blends: dark blackberry, cocoa nibs, black pepper, grilled bell pepper, and velvety chocolate tannins (Clos Apalta, Montes Folly, Neyen).",
    description: "Regarded as the 'Napa Valley of Chile', Apalta earned official D.O. status in 2018 for its world-class luxury red blends."
  },
  {
    id: 'casablanca-san-antonio',
    name: "Casablanca & San Antonio / Leyda Valley",
    lat: -33.3000,
    lng: -71.4000,
    appellations: ["D.O. Valle de Casablanca", "D.O. Valle de San Antonio", "D.O. Valle de Leyda", "Costa"],
    grapeVarieties: ["Sauvignon Blanc", "Chardonnay", "Pinot Noir", "Syrah"],
    soilTypes: ["Weathered Red Clay over Decomposed Granite", "Calcareous Marine Silt (Leyda)"],
    climate: "Cool Maritime (Costa) dominated by the cold Humboldt Current; persistent morning coastal fog and brisk afternoon sea winds.",
    terroir: "Rolling coastal range valleys located only 10-25 km from the Pacific Ocean. Morning fog burns off by noon, giving grapes prolonged hang time while preserving crisp natural acidity and saline minerality.",
    focus: "Laser-focused, aromatic Sauvignon Blanc (grapefruit, lime, jalapeño, sea spray) and elegant, mineral-driven coastal Pinot Noir and Chardonnay.",
    description: "Pioneered in 1982 by Pablo Morandé, Casablanca transformed Chile from a purely red wine country into a world leader in cool-climate whites."
  },
  {
    id: 'peumo-cachapoal',
    name: "Peumo & Cachapoal Valley",
    lat: -34.2000,
    lng: -71.1500,
    appellations: ["D.O. Valle del Cachapoal", "D.O. Peumo", "Cachapoal Entre Cordilleras"],
    grapeVarieties: ["Carmenère", "Cabernet Sauvignon", "Syrah"],
    soilTypes: ["Deep Alluvial Clay over Hard Impermeable Subsoil"],
    climate: "Warm Mediterranean microclimate with high solar radiation and gentle breezes from Lake Rapel.",
    terroir: "Deep, moisture-retaining clay soils along the Cachapoal River. Deep clay moderates soil temperature and provides slow, steady water release, allowing notoriously late-ripening Carmenère to achieve full phenolic maturity.",
    focus: "The undisputed world capital for 100% single-varietal Carmenère: silky blueberry, black plum, tobacco, dark chocolate, and sweet paprika without vegetal bitterness (Carmín de Peumo, Terrunyo).",
    description: "The historical sanctuary where Carmenère was preserved and rediscovered in 1994 by French ampelographer Jean-Michel Boursiquot."
  }
];

export const CHILE_GRAND_CRUS = [
  {
    id: 'almaviva-puente-alto',
    name: "Almaviva (Puente Alto Grand Cru)",
    village: "Puente Alto",
    district: "Alto Maipo (Andes)",
    areaHa: 60.00,
    dominantGrape: "Cabernet Sauvignon (65-72%), Carmenère (20-25%), Cabernet Franc, Petit Verdot",
    aspect: "Gentle northern slope facing the Andes Mountains",
    elevationRange: "650m - 700m",
    soil: "Third Alluvial Terrace Gravel with Round Porphyry Stones & Calcareous Loam",
    classification: "Premier Grand Cru Classé Archetype (Bordeaux Joint Venture)",
    aocDecreeYear: 1997,
    character: "The pinnacle of Franco-Chilean nobility: cassis, graphite, violet, wild herbs, mocha, and aristocratic, multidimensional length.",
    benchmarkProducers: ["Viña Almaviva (Baron Philippe de Rothschild & Concha y Toro)"],
    legalNotes: "Historic partnership founded in 1997 between Baroness Philippine de Rothschild and Eduardo Guilisasti Tagle."
  },
  {
    id: 'don-melchor-puente-alto',
    name: "Don Melchor (Puente Alto Parcel Selection)",
    village: "Puente Alto",
    district: "Alto Maipo (Andes)",
    areaHa: 127.00,
    dominantGrape: "Cabernet Sauvignon (90%+), Cabernet Franc",
    aspect: "Alluvial river terrace along the northern bank of the Maipo River",
    elevationRange: "650m - 680m",
    soil: "Piedmont Alluvial Gravel (Terraza 3) with High Mineral Drainage",
    classification: "Iconic Single Vineyard Cabernet",
    aocDecreeYear: 1987,
    character: "Blackcurrant, wild mint, crushed pencil lead, cocoa nibs, and ultra-refined, silken tannins with 30+ year aging potential.",
    benchmarkProducers: ["Viña Don Melchor"],
    legalNotes: "Divided into 7 distinct parcels harvested and vinified separately under the supervision of legendary consultant Jacques Boissenot."
  },
  {
    id: 'clos-apalta',
    name: "Clos Apalta (Apalta Grand Cru Amphitheater)",
    village: "Apalta",
    district: "Colchagua Valley",
    areaHa: 60.00,
    dominantGrape: "Carmenère (64%), Cabernet Sauvignon (19%), Merlot (15%), Petit Verdot (2%)",
    aspect: "South-facing natural granite horseshoe amphitheater",
    elevationRange: "200m - 450m",
    soil: "Decomposed Pink Granite & Deep Colluvial Clay over Bedrock",
    classification: "Iconic Clos Single Vineyard (D.O. Apalta)",
    aocDecreeYear: 1997,
    character: "Opulent, unctuous, and majestic: blackberry liqueur, dark chocolate, tobacco leaf, espresso, and seamless velvet tannins.",
    benchmarkProducers: ["Clos Apalta (Domaines Bournet-Lapostolle)"],
    legalNotes: "Ungrafted pre-phylloxera vines planted in 1920, hand-destemmed berry by berry by a dedicated team of over 100 people."
  },
  {
    id: 'vinedo-chadwick',
    name: "Viñedo Chadwick (Puente Alto)",
    village: "Puente Alto",
    district: "Alto Maipo (Andes)",
    areaHa: 15.00,
    dominantGrape: "Cabernet Sauvignon (100%)",
    aspect: "Flat alluvial terrace with direct Andean mountain breeze",
    elevationRange: "650m",
    soil: "Ancient Gravel & Clay Loam (Former Polo Field of Don Alfonso Chadwick)",
    classification: "Iconic Cult Single Vineyard",
    aocDecreeYear: 1999,
    character: "Ethereal, laser-pure, wild red cherry, cassis, cedar, graphite, and breathtaking mineral precision.",
    benchmarkProducers: ["Viña Errázuriz / Eduardo Chadwick"],
    legalNotes: "Winner of the famous 2004 Berlin Tasting, where it beat Château Margaux and Château Lafite Rothschild in blind tasting."
  }
];

export const CHILE_TECHNICAL_REGULATIONS = {
  geology: {
    system: "Andean Alluvial Terraces & Coastal Granite Cordillera",
    formations: [
      {
        name: "Quaternary Alluvial Terraces (Terraza 3)",
        frenchName: "Terrasses Alluviales du Maipo",
        period: "Pleistocene (~1.5 Ma)",
        fossil: "Andean Igneous River Gravel & Porphyry Stones",
        keyAreas: ["Puente Alto", "Pirque", "Alto Jahuel"],
        wineImpact: "Gives Cabernet Sauvignon deep drainage, intense thermal heat capture, and signature eucalyptus/cassis tension."
      },
      {
        name: "Decomposed Coastal Granite",
        frenchName: "Granite Décomposé",
        period: "Paleozoic / Mesozoic (~200 Ma)",
        fossil: "Quartz & Feldspar Crystals",
        keyAreas: ["Apalta", "Casablanca", "Leyda"],
        wineImpact: "Provides low vine vigor, intense mineral tension, and supreme phenolic concentration in Carmenère and Syrah."
      }
    ]
  },
  grapes: {
    major: [
      {
        name: "Cabernet Sauvignon",
        percentage: "32%",
        type: "Red",
        epicenter: "Alto Maipo, Cachapoal, Colchagua",
        profile: "Cassis, blackberry, wild mint, eucalyptus, cedar, and graphite.",
        role: "The structural titan of Chile; thrives on Andean alluvial gravels with remarkable natural freshness and zero phylloxera."
      },
      {
        name: "Carmenère",
        percentage: "12%",
        type: "Red",
        epicenter: "Peumo (Cachapoal), Apalta (Colchagua)",
        profile: "Black plum, dark chocolate, sweet paprika, white pepper, and tobacco.",
        role: "Chile's iconic signature grape; extinct in Bordeaux after phylloxera and rediscovered in Chile in 1994."
      },
      {
        name: "Sauvignon Blanc & Chardonnay",
        percentage: "20%",
        type: "White",
        epicenter: "Casablanca, Leyda, Limarí",
        profile: "Grapefruit, lime zest, jalapeño, saline minerality, and hazelnut.",
        role: "Coastal white revolution influenced by the cold Pacific Humboldt Current."
      }
    ]
  },
  classification: {
    system: "Chilean D.O. System (1995) & 2011 Viticultural Complementary Designations",
    description: "East-to-West geographical labeling based on proximity to the Andes or Pacific Ocean alongside D.O. subregions.",
    pyramid: [
      {
        tier: "Costa (Coast)",
        sharePct: "15%",
        aocCount: "Coastal Valleys",
        description: "Vineyards located within the maritime influence of the Pacific Ocean and Humboldt Current (Casablanca, Leyda, Paredones)."
      },
      {
        tier: "Entre Cordilleras (Between the Mountains)",
        sharePct: "60%",
        aocCount: "Central Valley Plains",
        description: "The fertile, warm agricultural heartland between the Coastal Range and the Andes (Peumo, Santa Cruz, Talca)."
      },
      {
        tier: "Andes (Andean Foothills)",
        sharePct: "25%",
        aocCount: "High-Altitude Foothills",
        description: "High-elevation vineyard sites on Andean alluvial fans and gravel benches (Puente Alto, Pirque, San Esteban)."
      }
    ]
  }
};

export const CHILE_PRESTIGE_ESTATES = [
  {
    name: "Almaviva",
    producer: "Viña Almaviva",
    village: "Puente Alto (Alto Maipo)",
    grape: "Cabernet Sauvignon (68%), Carmenère (23%), Cabernet Franc (5%), Petit Verdot (3%), Merlot (1%)",
    classification: "Iconic Franco-Chilean Grand Cru",
    terroir: "Third Alluvial Terrace of the Maipo River.",
    status: "The pioneer of luxury fine wine in South America, created by Baroness Philippine de Rothschild and Concha y Toro in 1997.",
    character: "Violet perfume, cassis, dark chocolate, graphite, and seamless silky length."
  },
  {
    name: "Don Melchor Cabernet Sauvignon",
    producer: "Viña Don Melchor",
    village: "Puente Alto (Alto Maipo)",
    grape: "Cabernet Sauvignon (93%), Cabernet Franc (7%)",
    classification: "Iconic Single Vineyard",
    terroir: "Ancient gravel beds beneath the Andes.",
    status: "Chile's benchmark Cabernet Sauvignon for over 35 consecutive vintages.",
    character: "Blackcurrant, cedar, eucalyptus, pencil shavings, and aristocratic structural depth."
  },
  {
    name: "Clos Apalta",
    producer: "Domaines Bournet-Lapostolle",
    village: "Apalta (Colchagua)",
    grape: "Carmenère (64%), Cabernet Sauvignon (19%), Merlot (15%), Petit Verdot (2%)",
    classification: "Iconic Clos",
    terroir: "Granite horseshoe amphitheater.",
    status: "Three-time Top 100 Wine of the Year winner; monumental Carmenère blend.",
    character: "Blackberry, cocoa nibs, espresso, dark plum, and velvet-wrapped power."
  }
];

export const CHILE_ICONIC_DOMAINES = [
  {
    name: "Viña Almaviva",
    village: "Puente Alto (Alto Maipo)",
    vigneron: "Michel Friou",
    wineType: "Red",
    philosophy: "Bordeaux grand cru precision applied to Chile's greatest Andean Cabernet terroir.",
    keyCuvees: ["Almaviva", "EPU"]
  },
  {
    name: "Viña Errázuriz / Chadwick",
    village: "Panquehue / Puente Alto",
    vigneron: "Eduardo Chadwick & Francisco Baettig",
    wineType: "Red",
    philosophy: "Proving Chilean terroir at the highest international level through pure single-vineyard precision.",
    keyCuvees: ["Viñedo Chadwick", "Seña", "Don Maximiano Founder's Reserve", "KAI Carmenère"]
  },
  {
    name: "Clos Apalta",
    village: "Apalta (Colchagua)",
    vigneron: "Charles-Edouard Bournet & Jacques Begarie",
    wineType: "Red",
    philosophy: "Old pre-phylloxera ungrafted vines farmed under strict biodynamics with manual berry selection.",
    keyCuvees: ["Clos Apalta", "Le Petit Clos"]
  }
];

export const CHILE_FOOD_PAIRINGS = [
  {
    "category": "South American Asado & Grilled Steaks",
    "wineType": "Red",
    "targetWine": "Alto Maipo Cabernet Sauvignon (Almaviva / Don Melchor)",
    "dish": "Asado Criollo (Charcoal-Grilled Ribeye & Picanha), Lamb Chops with Chimichurri, Empanadas de Pino",
    "note": "The cassis fruit, eucalyptus freshness, and bold tannins of Andean Cabernet effortlessly cut through rich grilled beef.",
    "glassware": "Bordeaux Grand Cru or Large Burgundy Stem (700ml)",
    "servingTemp": "16–18°C (60–64°F)",
    "decanting": "Decant 1–2 hours before service for optimal aeration."
  },
  {
    "category": "Traditional Chilean Comfort Dishes",
    "wineType": "Red",
    "targetWine": "Peumo & Apalta Carmenère",
    "dish": "Pastel de Choclo (Sweet Corn & Beef Casserole), Charquicán (Beef & Vegetable Stew), Braised Pork Belly",
    "note": "Carmenère's savory paprika and sweet tobacco notes mirror the spiced ground beef and sweet corn crust of Pastel de Choclo.",
    "glassware": "Bordeaux Grand Cru or Large Burgundy Stem (700ml)",
    "servingTemp": "16–18°C (60–64°F)",
    "decanting": "Decant 1–2 hours before service for optimal aeration."
  },
  {
    "category": "Pacific Coastal Seafood & Ceviche",
    "wineType": "White",
    "targetWine": "Casablanca & Leyda Sauvignon Blanc",
    "dish": "Chilean Sea Bass (Corvina) Ceviche with Lime & Coriander, Grilled Machas (Razor Clams) a la Parmesana",
    "note": "Crisp, saline, jalapeño-kissed Sauvignon Blanc complements raw marinated fish and cuts rich melted cheese over razor clams.",
    "glassware": "Universal White Wine Stem (450ml)",
    "servingTemp": "10–12°C (50–54°F)",
    "decanting": "Not required; aerate gently in glass."
  }
];
