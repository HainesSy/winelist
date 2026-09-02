// Authoritative Germany (Mosel, Rheingau, Nahe, Pfalz) Master Sommelier Dataset
// VDP.Die Prädikatsweingüter Classification & German Wine Law

export const MOSEL_SUBREGIONS = [
  {
    id: 'mittelmosel',
    name: "Mittelmosel (Middle Mosel & Bernkastel)",
    lat: 49.9167,
    lng: 7.0667,
    appellations: ["Bereich Bernkastel", "Mosel Qualitätswein", "VDP.Grosse Lage Mosel"],
    grapeVarieties: ["Riesling", "Weisser Burgunder", "Elbling", "Spätburgunder"],
    soilTypes: ["Devonian Blue Slate (Devonschiefer)", "Weathered Clay Slate", "Quartzite Gravel"],
    climate: "Cool Continental with severe maritime Atlantic moderation; extreme steep river gorge microclimate.",
    terroir: "Vertiginous 50-70° steep south-facing slate slopes along the sinuous Mosel river loops. Slate fragments absorb solar heat by day and radiate warmth to vines at night, while water reflection magnifies sunlight.",
    focus: "The world benchmark for slate-driven, featherweight, high-acid Riesling: crystalline lime, white peach, green apple, wet slate, and razor-sharp mineral tension.",
    description: "The historic heart of the Mosel Valley stretching from Zell to Trier, home to the most famous Riesling vineyards on Earth including Wehlener Sonnenuhr, Berncasteler Doctor, and Erdener Prälat."
  },
  {
    id: 'saar-ruwer',
    name: "Saar & Ruwer Tributary Valleys",
    lat: 49.6500,
    lng: 6.5833,
    appellations: ["Bereich Saar", "Bereich Ruwertal", "VDP.Grosse Lage Saar/Ruwer"],
    grapeVarieties: ["Riesling", "Spätburgunder"],
    soilTypes: ["Hard Devonian Gray & Blue Slate", "Diabase Volcanic intrusion", "Quartzite"],
    climate: "Extreme marginal cool-climate; higher altitude and cold winds funneling down from the Hunsrück hills.",
    terroir: "Cooler, higher-altitude valleys with stark diurnal shifts and icy night breezes. Hard, less decomposed slate bedrock forces vine roots deep into fractures, yielding wines of piercing acidity and steeliness.",
    focus: "Laser-focused, electric Riesling of celestial lightness and unmatched aging potential (Egon Müller Scharzhofberg, Peter Lauer Ayler Kupp, Karthäuserhofberg).",
    description: "The colder tributary valleys south and east of Trier, renowned for producing the most aristocratic, long-lived, and expensive sweet and dry Rieslings in the world."
  },
  {
    id: 'rheingau',
    name: "Rheingau & Central Rhine",
    lat: 50.0000,
    lng: 8.0500,
    appellations: ["Rheingau Qualitätswein", "Bereich Johannisberg", "VDP.Grosse Lage Rheingau"],
    grapeVarieties: ["Riesling", "Spätburgunder (Pinot Noir)"],
    soilTypes: ["Taunus Quartzite", "Deep Loess & Loam", "Tertiary Marl", "Phyllite Slate (Assmannshausen)"],
    climate: "Sunny, sheltered southern river exposure backed by the protective Taunus mountain range.",
    terroir: "A unique 30km stretch where the Rhine river turns east-west, providing pure south-facing amphitheaters bathed in continuous solar exposure. Richer soils yield fuller, more structured dry Riesling and aristocratic Spätburgunder.",
    focus: "Aristocratic, powerful dry Riesling (Grosses Gewächs) and historic botrytis dessert wines; world-renowned Spätburgunder in the red slate village of Assmannshausen.",
    description: "The historical epicenter of noble German viticulture where Spätlese (late harvest) was discovered at Schloss Johannisberg in 1775."
  },
  {
    id: 'nahe-pfalz',
    name: "Nahe & Pfalz (Mittelhaardt)",
    lat: 49.8000,
    lng: 7.8500,
    appellations: ["Nahe Qualitätswein", "Pfalz Qualitätswein", "Bereich Mittelhaardt-Deutsche Weinstrasse"],
    grapeVarieties: ["Riesling", "Spätburgunder", "Grauburgunder", "Weissburgunder"],
    soilTypes: ["Rotliegend Red Sandstone", "Volcanic Rhyolite & Porphyry", "Basalt & Limestone (Forst)", "Weathered Loess"],
    climate: "Sun-drenched, Mediterranean-influenced microclimate in the Pfalz; dramatic geological kaleidoscope in the Nahe.",
    terroir: "The Nahe features over 180 soil variations in a compact valley. The Mittelhaardt in Pfalz benefits from the rain shadow of the Haardt mountains, crafting opulent, muscular, dry Rieslings of volcanic and limestone authority.",
    focus: "Dry Grosses Gewächs Riesling summits (Dönnhoff Hermannshöhle, Keller G-Max / Hubacker, Bürklin-Wolf Kirchenstück) combining power, smoky minerality, and racy acid.",
    description: "Dynamic southern regions leading Germany's dry wine revolution, home to legendary estates like Weingut Dönnhoff and Weingut Keller."
  }
];

export const MOSEL_GRAND_CRUS = [
  {
    id: 'scharzhofberg',
    name: "Scharzhofberg (VDP.Grosse Lage)",
    village: "Wiltingen",
    district: "Saar",
    areaHa: 28.10,
    dominantGrape: "Riesling (100%)",
    aspect: "South to South-Southeast (30-60% slope)",
    elevationRange: "200m - 310m",
    soil: "Weathered Devonian Gray Slate with High Iron & Quartzite Content",
    classification: "VDP.Grosse Lage (Ortsteil single-vineyard status)",
    aocDecreeYear: 1971,
    character: "Aristocratic, crystalline, unyielding mineral intensity with green apple, white peach, wild herbs, and immortal 50-100 year longevity.",
    benchmarkProducers: ["Egon Müller-Scharzhof", "Reichsgraf von Kesselstatt", "Bischöfliche Weingüter Trier", "Van Volxem"],
    legalNotes: "One of Germany's handful of historical 'Ortsteil' vineyards legally permitted to omit the village name (Wiltingen) from the label."
  },
  {
    id: 'wehlener-sonnenuhr',
    name: "Wehlener Sonnenuhr (VDP.Grosse Lage)",
    village: "Wehlen",
    district: "Mittelmosel",
    areaHa: 46.50,
    dominantGrape: "Riesling (100%)",
    aspect: "South-Southwest (up to 70% slope)",
    elevationRange: "110m - 240m",
    soil: "Pure, Fine Blue Devonian Slate (Devonschiefer) with Extreme Rock Fraction",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "The quintessential Middle Mosel archetype: delicate peach, vanilla blossom, candied lemon, wet slate, and gossamer texture balanced by electric acidity.",
    benchmarkProducers: ["Joh. Jos. Prüm", "Weingut Dr. Loosen", "Weingut S.A. Prüm", "Weingut Markus Molitor"],
    legalNotes: "Named after the historic sundial erected in the vineyard in 1842 by Jodocus Prüm."
  },
  {
    id: 'berncasteler-doctor',
    name: "Berncasteler Doctor (VDP.Grosse Lage)",
    village: "Bernkastel",
    district: "Mittelmosel",
    areaHa: 3.26,
    dominantGrape: "Riesling (100%)",
    aspect: "South to South-Southwest (60% slope)",
    elevationRange: "130m - 200m",
    soil: "Deep, Weathered Dark Blue Devonian Slate with Thermal Heat Retention",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "Powerful, spicy, smoky dark slate minerality with unctuous stone fruit and extraordinary regal presence.",
    benchmarkProducers: ["Weingut Wwe. Dr. H. Thanisch", "Weingut Wegeler", "Weingut Lauerburg"],
    legalNotes: "Legend recounts that Archbishop Boemund II of Trier was cured of a terminal fever in the 14th century by drinking wine from this hill."
  },
  {
    id: 'uerziger-wuerzgarten',
    name: "Ürziger Würzgarten (VDP.Grosse Lage)",
    village: "Ürzig",
    district: "Mittelmosel",
    areaHa: 56.40,
    dominantGrape: "Riesling (100%)",
    aspect: "South to South-Southeast (amphitheater up to 70% slope)",
    elevationRange: "110m - 260m",
    soil: "Volcanic Red Rhyolite & Iron-Rich Red Rotliegend Slate",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "Exotic, spicy, and opulent: crushed red pepper, strawberry, passionfruit, kiwi, and iron-driven volcanic earthiness.",
    benchmarkProducers: ["Weingut Dr. Loosen", "Weingut Markus Molitor", "Weingut Joh. Jos. Christoffel Erben"],
    legalNotes: "The rare red volcanic outcrop in a sea of blue slate, giving its wines an unmistakable exotic spice profile."
  },
  {
    id: 'erdener-praelat',
    name: "Erdener Prälat (VDP.Grosse Lage)",
    village: "Erden",
    district: "Mittelmosel",
    areaHa: 2.20,
    dominantGrape: "Riesling (100%)",
    aspect: "Direct South (70-80% sheer cliff slope)",
    elevationRange: "110m - 160m",
    soil: "Weathered Red Slate & Volcanic Sediments wedged between massive rock cliffs",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "The grandest jewel of the Mosel: unctuous, opulent, botrytis-kissed apricot, mango, saffron, and monumental mineral weight.",
    benchmarkProducers: ["Weingut Dr. Loosen", "Weingut Markus Molitor", "Weingut Karl Erbes"],
    legalNotes: "A micro-climat of just 2.2 hectares enjoying an almost tropical microclimate backed by sheer rock faces."
  },
  {
    id: 'hermannshoehle',
    name: "Niederhäuser Hermannshöhle (VDP.Grosse Lage)",
    village: "Niederhausen",
    district: "Nahe",
    areaHa: 8.50,
    dominantGrape: "Riesling (100%)",
    aspect: "Direct South (50-60% slope)",
    elevationRange: "130m - 220m",
    soil: "Blackish-Gray Carboniferous Slate, Volcanic Porphyry & Limestone Melange",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "The undisputed apex of dry German Riesling: crystalline grapefruit, white truffle, smoke, flint, and multidimensional structural power.",
    benchmarkProducers: ["Weingut Dönnhoff", "Weingut Jakob Schneider", "Weingut Gut Hermannsberg"],
    legalNotes: "Consistently rated the highest-scoring dry Riesling (Grosses Gewächs) in Germany for over two decades."
  },
  {
    id: 'keller-g-max',
    name: "Dalsheimer Hubacker / G-Max (VDP.Grosse Lage)",
    village: "Dalsheim",
    district: "Rheinhessen (Wonnegau)",
    areaHa: 4.00,
    dominantGrape: "Riesling (100%)",
    aspect: "East-Southeast (moderate slope)",
    elevationRange: "180m - 240m",
    soil: "Upper Jurassic Limestone & Calcareous Clay with Ancient Marine Fossil Beds",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "World's most coveted dry Riesling: limestone salinity, white peach, crushed chalk, lime blossom, and staggering tension.",
    benchmarkProducers: ["Weingut Keller"],
    legalNotes: "Sourced from a tiny parcel of ungrafted, extremely old vines within the Dalsheimer Hubacker."
  }
];

export const MOSEL_TECHNICAL_REGULATIONS = {
  geology: {
    system: "Devonian Slate Stratigraphy & Volcanic Terraces",
    formations: [
      {
        name: "Devonian Blue Slate",
        frenchName: "Devonschiefer",
        period: "Paleozoic (Devonian ~400 Ma)",
        fossil: "Marine Brachiopods & Trilobites",
        keyAreas: ["Wehlen", "Bernkastel", "Graach", "Piesport", "Brauneberg"],
        wineImpact: "Yields featherweight, crystalline wines with laser acidity, green apple, white peach, and pristine wet-stone minerality."
      },
      {
        name: "Volcanic Red Slate & Rhyolite",
        frenchName: "Rotliegend",
        period: "Permian (~280 Ma)",
        fossil: "Iron oxide mineral deposits",
        keyAreas: ["Ürziger Würzgarten", "Erdener Prälat", "Nackenheimer Rothenberg"],
        wineImpact: "Produces exotic, spicy, opulent wines with crushed red pepper, paprika, strawberry, and volcanic smoke."
      },
      {
        name: "Tertiary Marine Limestone & Marl",
        frenchName: "Kalkstein",
        period: "Mesozoic / Tertiary",
        fossil: "Fossilized oyster shells and coral reef deposits",
        keyAreas: ["Wonnegau (Keller Hubacker)", "Mittelhaardt (Bürklin-Wolf Kirchenstück)"],
        wineImpact: "Gives dry Grosses Gewächs (GG) Riesling monumental palate density, chalky grip, and hazelnut savory richness."
      }
    ]
  },
  grapes: {
    major: [
      {
        name: "Riesling",
        percentage: "62%",
        type: "White",
        epicenter: "Mosel, Saar, Rheingau, Nahe, Pfalz",
        profile: "Lime zest, green apple, white peach, petroleum, beeswax, and crushed slate.",
        role: "The undisputed King of German viticulture; transparent conduit of slate and limestone terroir with supreme natural acidity.",
        clones: ["Geisenheim 110", "Geisenheim 239", "Trier Selection"]
      },
      {
        name: "Spätburgunder (Pinot Noir)",
        percentage: "12%",
        type: "Red",
        epicenter: "Ahr, Baden, Rheingau (Assmannshausen), Pfalz",
        profile: "Wild red cherry, raspberry, forest floor, clove, and silky fine-grained tannins.",
        role: "Germany is the world's 3rd largest producer of Pinot Noir; cool climate yields ethereal, perfumed, terroir-transparent reds."
      },
      {
        name: "Weissburgunder & Grauburgunder",
        percentage: "10%",
        type: "White",
        epicenter: "Baden, Pfalz, Rheinhessen",
        profile: "Orchard pear, yellow apple, honeysuckle, hazelnut, and refreshing citrus drive.",
        role: "Pinot Blanc and Pinot Gris crafting gastronomic, textured, dry food wines."
      }
    ]
  },
  classification: {
    system: "VDP.Classification (Grosse Lage) & German Wine Law Prädikat System",
    description: "Dual quality framework: VDP terroir-based classification (Gutswein to Grosse Lage) alongside the traditional sugar-based Prädikat harvest system.",
    pyramid: [
      {
        tier: "VDP.Grosse Lage (Grand Cru) / Grosses Gewächs (GG)",
        sharePct: "3%",
        aocCount: "Top single vineyard climats",
        yieldLimits: "Max 50 hl/ha",
        minAbv: "12.0% for GG dry",
        description: "The peak of German terroir: single strictly delimited parcels. Dry wines are designated 'Grosses Gewächs' (GG); sweet wines bear traditional Prädikat labels."
      },
      {
        tier: "VDP.Erste Lage (Premier Cru)",
        sharePct: "8%",
        aocCount: "First class historical sites",
        yieldLimits: "Max 60 hl/ha",
        description: "Exceptional vineyards with distinctive character, aged to express site transparency."
      },
      {
        tier: "VDP.Ortswein (Village Level)",
        sharePct: "25%",
        aocCount: "Communal designations",
        yieldLimits: "Max 75 hl/ha",
        description: "Wines sourced from top village vineyards expressing regional soil and communal character (e.g. Wehlener, Bernkasteler)."
      },
      {
        tier: "VDP.Gutswein (Regional Estate Level)",
        sharePct: "64%",
        aocCount: "Estate entry bottlings",
        yieldLimits: "Max 75 hl/ha",
        description: "High quality estate entry-level wines setting the house standard."
      }
    ],
    sweetnessRules: [
      { category: "Kabinett (70-85° Oechsle)", details: "Light, featherweight, delicate wines picked at normal harvest; ranges from bone-dry to off-dry (8-10% ABV)." },
      { category: "Spätlese (80-95° Oechsle)", details: "Late harvest picked at full physiological ripeness; rich stone fruit, intense slate minerality." },
      { category: "Auslese (88-105° Oechsle)", details: "Select late harvest clusters with noble rot botrytis; luscious nectar balanced by searing acid." },
      { category: "Beerenauslese & TBA (110-150°+ Oechsle)", details: "Individually hand-picked botrytized berries; celestial viscosity, saffron, and apricot unctuousness." },
      { category: "Eiswein (110-128° Oechsle)", details: "Harvested and pressed while naturally frozen on the vine at -7°C (19°F) or colder." }
    ]
  }
};

export const MOSEL_PRESTIGE_ESTATES = [
  {
    name: "Scharzhofberger Trockenbeerenauslese",
    producer: "Weingut Egon Müller-Scharzhof",
    village: "Wiltingen (Saar)",
    grape: "Riesling (100%)",
    classification: "VDP.Grosse Lage TBA",
    terroir: "Iron-rich Devonian gray slate in the cold Wiltingen Saar amphitheater.",
    status: "The world's most expensive and legendary white wine; commands $15,000-$35,000+ at auction.",
    character: "Celestial balance of unctuous botrytis honey, saffron, candied lemon, and immortal laser acidity."
  },
  {
    name: "Wehlener Sonnenuhr Auslese Goldkapsel",
    producer: "Weingut Joh. Jos. Prüm",
    village: "Wehlen (Mittelmosel)",
    grape: "Riesling (100%)",
    classification: "VDP.Grosse Lage Auslese GK",
    terroir: "Pure blue slate on 70° south-facing slope beneath the historic sundial.",
    status: "The global gold standard for ageworthy, reductive, gossamer-textured sweet Mosel Riesling.",
    character: "Spontaneous wild yeast reduction, white peach, green apple, jasmine, and 50+ year longevity."
  },
  {
    name: "G-Max Riesling Trocken (Grosses Gewächs)",
    producer: "Weingut Keller",
    village: "Flörsheim-Dalsheim (Rheinhessen)",
    grape: "Riesling (100%)",
    classification: "VDP.Grosse Lage GG",
    terroir: "Upper Jurassic fossil limestone parcel of ungrafted century-old vines.",
    status: "The DRC Romanee-Conti of dry white wine, trading over $3,000-$6,000 per bottle.",
    character: "Astonishing limestone salinity, white flowers, lemon oil, smoky flint, and endless structural power."
  },
  {
    name: "Hermannshöhle Grosses Gewächs (GG)",
    producer: "Weingut Dönnhoff",
    village: "Oberhausen / Niederhausen (Nahe)",
    grape: "Riesling (100%)",
    classification: "VDP.Grosse Lage GG",
    terroir: "Carboniferous black slate, volcanic porphyry, and limestone melange.",
    status: "The benchmark dry Riesling of the Nahe Valley for over 30 consecutive vintages.",
    character: "Smoky, chiseled, pink grapefruit, white peach, crushed rock, and crystalline architectural length."
  }
];

export const MOSEL_ICONIC_DOMAINES = [
  {
    name: "Weingut Egon Müller-Scharzhof",
    village: "Wiltingen (Saar)",
    vigneron: "Egon Müller IV",
    wineType: "White",
    philosophy: "Minimal intervention, natural native yeast fermentation in traditional 1000L Fuder casks from low-yielding ungrafted vines.",
    keyCuvees: ["Scharzhofberger TBA", "Scharzhofberger Auslese GK", "Scharzhofberger Spätlese"]
  },
  {
    name: "Weingut Joh. Jos. Prüm",
    village: "Bernkastel-Wehlen (Mittelmosel)",
    vigneron: "Dr. Katharina Prüm",
    wineType: "White",
    philosophy: "Classic reductive, slow cold cellar fermentation preserving pristine vineyard transparency and gossamer lightness.",
    keyCuvees: ["Wehlener Sonnenuhr Auslese Goldkapsel", "Graacher Himmelreich Spätlese"]
  },
  {
    name: "Weingut Keller",
    village: "Flörsheim-Dalsheim (Rheinhessen)",
    vigneron: "Klaus-Peter & Julia Keller",
    wineType: "Dual",
    philosophy: "Obsessive organic viticulture on ancient limestone bedrock crafting Germany's most celebrated dry Rieslings and Pinot Noirs.",
    keyCuvees: ["G-Max", "Dalsheimer Hubacker GG", "Kirchspiel GG", "Frauenberg Spätburgunder Felix"]
  },
  {
    name: "Weingut Dönnhoff",
    village: "Oberhausen (Nahe)",
    vigneron: "Cornelius Dönnhoff",
    wineType: "White",
    philosophy: "Precision, elegance, and pure soil transparency across the Nahe's diverse volcanic and slate terroirs.",
    keyCuvees: ["Niederhäuser Hermannshöhle GG", "Felsenberg GG", "Brücke Eiswein"]
  }
];

export const MOSEL_FOOD_PAIRINGS = [
  {
    "category": "Classic German & Alpine Gastronomy",
    "wineType": "White",
    "targetWine": "Dry Riesling Grosses Gewächs (GG)",
    "dish": "Wiener Schnitzel with Lingonberries, Pan-Fried Trout with Almond Butter, Roasted Pork Knuckle",
    "note": "The electric acidity and citrus drive of dry GG Riesling cuts cleanly through crispy breading and rich veal fat.",
    "glassware": "Universal White Wine Stem (450ml)",
    "servingTemp": "10–12°C (50–54°F)",
    "decanting": "Not required; aerate gently in glass."
  },
  {
    "category": "Spicy Asian Cuisine & Thai Dishes",
    "wineType": "White",
    "targetWine": "Riesling Kabinett & Spätlese Feinherb",
    "dish": "Thai Green Curry with Prawns, Vietnamese Lemongrass Pork, Spicy Dan Dan Noodles",
    "note": "Residual sweetness cools chili heat while high natural acidity matches lime and ginger aromatics without clashing.",
    "glassware": "Universal White Wine Stem (450ml)",
    "servingTemp": "10–12°C (50–54°F)",
    "decanting": "Not required; aerate gently in glass."
  },
  {
    "category": "Pungent & Blue Cheeses",
    "wineType": "White",
    "targetWine": "Riesling Auslese & Beerenauslese (BA)",
    "dish": "Roquefort Blue, Gorgonzola Dolce, Munster with Caraway, Fourme d'Ambert",
    "note": "The unctuous noble rot sweetness and high acid create an immortal sweet-salty contrast against pungent blue veining.",
    "glassware": "Dessert / Sweet Wine Stem (350ml)",
    "servingTemp": "10–12°C (50–54°F)",
    "decanting": "Not required; aerate gently in glass."
  },
  {
    "category": "Roasted Game & Feathered Birds",
    "wineType": "Red",
    "targetWine": "German Spätburgunder (Pinot Noir)",
    "dish": "Roasted Partridge with Chanterelles, Spiced Duck Breast, Venison Medallions with Redcurrant",
    "note": "Cool-climate Spätburgunder provides bright red cherry fruit, fine tannins, and earthy forest floor nuances.",
    "glassware": "Bordeaux Grand Cru or Large Burgundy Stem (700ml)",
    "servingTemp": "16–18°C (60–64°F)",
    "decanting": "Decant 1–2 hours before service for optimal aeration."
  },
  {
    "category": "Decadent Desserts & Pâtisserie",
    "wineType": "White",
    "targetWine": "Riesling Trockenbeerenauslese (TBA) & Eiswein",
    "dish": "Apple Strudel with Vanilla Bean Sauce, Meyer Lemon Tart, Crème Brûlée with Apricot",
    "note": "Concentrated noble rot nectar and searing frozen-grape acidity elevate caramelized apples and citrus custard.",
    "glassware": "Dessert / Sweet Wine Stem (350ml)",
    "servingTemp": "10–12°C (50–54°F)",
    "decanting": "Not required; aerate gently in glass."
  }
];
