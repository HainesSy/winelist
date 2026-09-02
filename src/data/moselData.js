// Authoritative Germany (Mosel, Rheingau, Nahe, Pfalz) Master Sommelier Dataset
// VDP.Die Prädikatsweingüter Classification & German Wine Law

export const MOSEL_SUBREGIONS = [
  {
    id: 'mittelmosel',
    name: "Mittelmosel (Middle Mosel & Bernkastel)",
    district: "Mittelmosel",
    lat: 49.9167,
    lng: 7.0667,
    coordinates: [49.9167, 7.0667],
    elevation: "110m to 350m on steep south-facing river amphitheaters",
    soils: [
      "Devonian Blue Slate (Blauschiefer / Devonschiefer)",
      "Weathered Clay Slate",
      "Rotliegend Red Volcanic Slate (Ürzig)",
      "Quartzite Gravel"
    ],
    grapes: [
      "Riesling (90%+)",
      "Spätburgunder (Pinot Noir)",
      "Weissburgunder (Pinot Blanc)",
      "Elbling"
    ],
    climate: "Cool Continental with maritime Atlantic moderation; extreme steep river gorge microclimate.",
    riverInfluence: "The sinuous Mosel River loops provide essential thermal heat storage, solar water reflection, and cold air drainage, shielding vertiginous hillside parcels from frost.",
    appellations: ["Bereich Bernkastel", "Mosel Qualitätswein", "VDP.Grosse Lage Mosel"],
    terroir: "Vertiginous 50–70° steep south-facing slate slopes along the sinuous Mosel river loops. Slate fragments absorb solar heat by day and radiate warmth to vines at night, while water reflection magnifies sunlight.",
    focus: "The world benchmark for slate-driven, featherweight, high-acid Riesling: crystalline lime, white peach, green apple, wet slate, and razor-sharp mineral tension (Wehlener Sonnenuhr, Berncasteler Doctor, Ürziger Würzgarten, Erdener Prälat).",
    description: "The historic heart of the Mosel Valley stretching from Zell to Trier, home to the most famous Riesling vineyards on Earth including Wehlener Sonnenuhr, Berncasteler Doctor, and Erdener Prälat.",
    microTerroirs: [
      { name: "Bernkastel Amphitheater", focus: "Iconic steep blue slate slopes with optimal heat retention (Berncasteler Doctor, Lay, Badstube)." },
      { name: "Wehlen & Graach Sundial Slopes", focus: "Pure fractured blue Devonian slate producing gossamer, floral, ageworthy Rieslings (Wehlener Sonnenuhr, Graacher Himmelreich)." },
      { name: "Ürzig & Erden Red Slate Enclave", focus: "Unique volcanic red Permian slate (Rotliegend) yielding exotic spice, strawberry, and iron earthiness (Ürziger Würzgarten, Erdener Prälat)." },
      { name: "Piesport & Brauneberg Great Bends", focus: "Dramatic southern river loops with deep dark slate crafting opulent, concentrated stone-fruit Rieslings (Piesporter Goldtröpfchen, Brauneberger Juffer-Sonnenuhr)." }
    ]
  },
  {
    id: 'saar-ruwer',
    name: "Saar & Ruwer Tributary Valleys",
    district: "Saar-Ruwer",
    lat: 49.6500,
    lng: 6.5833,
    coordinates: [49.6500, 6.5833],
    elevation: "180m to 380m on high wind-exposed tributary slopes",
    soils: [
      "Hard Devonian Gray & Blue Slate (Grauschiefer)",
      "Diabase Volcanic intrusion",
      "Quartzite & Iron-bearing Schist"
    ],
    grapes: [
      "Riesling (95%+)",
      "Spätburgunder"
    ],
    climate: "Extreme marginal cool-climate; higher altitude and icy nocturnal downdrafts funneling down from the Hunsrück mountain forest.",
    riverInfluence: "The fast-flowing, narrow Saar and Ruwer rivers create steep thermal gradients with severe diurnal swings, preserving searing natural acidity and crystalline purity.",
    appellations: ["Bereich Saar", "Bereich Ruwertal", "VDP.Grosse Lage Saar/Ruwer"],
    terroir: "Cooler, higher-altitude valleys with stark diurnal shifts and icy night breezes. Hard, less decomposed slate bedrock forces vine roots deep into fractures, yielding wines of piercing acidity and steeliness.",
    focus: "Laser-focused, electric Riesling of celestial lightness and unmatched aging potential (Egon Müller Scharzhofberg, Peter Lauer Ayler Kupp, Karthäuserhofberg).",
    description: "The colder tributary valleys south and east of Trier, renowned for producing the most aristocratic, long-lived, and expensive sweet and dry Rieslings in the world.",
    microTerroirs: [
      { name: "Wiltingen & Scharzhofberg", focus: "Cold, wind-sheltered gray slate amphitheater producing the world's most revered white wine (Egon Müller Scharzhofberger TBA)." },
      { name: "Ayl & Ockfen", focus: "Steep slate cones producing chiseled, mineral-driven dry and off-dry Rieslings (Ayler Kupp, Ockfener Bockstein)." },
      { name: "Ruwer Valley (Eitelsbach & Kasel)", focus: "Narrow, forested valley with clay-slate soils yielding delicate, green apple, floral, and blackcurrant-scented Rieslings (Karthäuserhofberg)." }
    ]
  },
  {
    id: 'rheingau',
    name: "Rheingau & Central Rhine",
    district: "Rheingau",
    lat: 50.0000,
    lng: 8.0500,
    coordinates: [50.0000, 8.0500],
    elevation: "90m to 300m along the southern Rhine terraces",
    soils: [
      "Taunus Quartzite (Quarzit)",
      "Deep Loess & Loam",
      "Tertiary Marl",
      "Phyllite Slate (Assmannshausen Höllenberg)"
    ],
    grapes: [
      "Riesling (78%)",
      "Spätburgunder (Pinot Noir 12%)",
      "Grauburgunder"
    ],
    climate: "Sunny, sheltered southern river exposure backed by the protective Taunus mountain forest.",
    riverInfluence: "The 30km east-west Rhine stretch acts as a massive thermal heat mirror, generating morning autumnal mists for botrytis noble rot and radiant daytime heat.",
    appellations: ["Rheingau Qualitätswein", "Bereich Johannisberg", "VDP.Grosse Lage Rheingau"],
    terroir: "A unique 30km stretch where the Rhine river turns east-west, providing pure south-facing amphitheaters bathed in continuous solar exposure. Richer soils yield fuller, more structured dry Riesling and aristocratic Spätburgunder.",
    focus: "Aristocratic, powerful dry Riesling (Grosses Gewächs) and historic botrytis dessert wines; world-renowned Spätburgunder in the red slate village of Assmannshausen.",
    description: "The historical epicenter of noble German viticulture where Spätlese (late harvest) was discovered at Schloss Johannisberg in 1775.",
    microTerroirs: [
      { name: "Johannisberg & Rüdesheim", focus: "Historic heart of late-harvest noble rot and steep quartzite/slate slopes (Schloss Johannisberg, Rüdesheimer Berg Schlossberg)." },
      { name: "Assmannshausen", focus: "Steep phyllite and red slate terraces devoted exclusively to aristocratic Spätburgunder (Höllenberg)." },
      { name: "Kiedrich & Hochheim", focus: "High-altitude Taunus gravels and limestone loam crafting muscular, mineral-rich dry Grosses Gewächs (Robert Weil Kiedrich Gräfenberg)." }
    ]
  },
  {
    id: 'nahe-pfalz',
    name: "Nahe & Pfalz (Mittelhaardt)",
    district: "Nahe-Pfalz",
    lat: 49.8000,
    lng: 7.8500,
    coordinates: [49.8000, 7.8500],
    elevation: "120m to 350m across volcanic outcrops and Haardt foothill slopes",
    soils: [
      "Rotliegend Red Sandstone",
      "Volcanic Rhyolite & Porphyry",
      "Basalt & Ancient Marine Limestone (Forst & Wonnegau)",
      "Weathered Loess & Carboniferous Slate"
    ],
    grapes: [
      "Riesling (65%)",
      "Spätburgunder (Pinot Noir 15%)",
      "Weissburgunder & Grauburgunder (12%)",
      "Chardonnay"
    ],
    climate: "Sun-drenched, Mediterranean-influenced microclimate in the Pfalz; dramatic geological kaleidoscope in the Nahe.",
    riverInfluence: "The Nahe River and Rhine plain facilitate diverse microclimates, with Haardt mountain rain-shadows providing extended hang time for dry Grosses Gewächs.",
    appellations: ["Nahe Qualitätswein", "Pfalz Qualitätswein", "Bereich Mittelhaardt-Deutsche Weinstrasse", "Rheinhessen Wonnegau"],
    terroir: "The Nahe features over 180 soil variations in a compact valley. The Mittelhaardt in Pfalz benefits from the rain shadow of the Haardt mountains, crafting opulent, muscular, dry Rieslings of volcanic and limestone authority.",
    focus: "Dry Grosses Gewächs Riesling summits (Dönnhoff Hermannshöhle, Keller G-Max / Hubacker, Bürklin-Wolf Kirchenstück) combining power, smoky minerality, and racy acid.",
    description: "Dynamic southern regions leading Germany's dry wine revolution, home to legendary estates like Weingut Dönnhoff and Weingut Keller.",
    microTerroirs: [
      { name: "Niederhausen & Oberhausen (Nahe)", focus: "Volcanic porphyry, slate, and limestone amphitheater producing Germany's greatest dry Riesling (Dönnhoff Hermannshöhle GG)." },
      { name: "Forst & Deidesheim (Mittelhaardt Pfalz)", focus: "Basalt volcanic and limestone formations producing opulent, smoky, powerful dry Riesling (Kirchenstück, Pechstein)." },
      { name: "Flörsheim-Dalsheim & Westhofen (Wonnegau Rheinhessen)", focus: "Ancient Jurassic limestone reefs yielding laser-pure, chalk-saline dry Riesling and Pinot Noir (Keller G-Max, Hubacker, Morstein)." }
    ]
  }
];

export const MOSEL_GRAND_CRUS = [
  {
    id: 'scharzhofberg',
    name: "Scharzhofberg (VDP.Grosse Lage)",
    subregionId: "saar-ruwer",
    subregion: "Saar & Ruwer Tributary Valleys",
    district: "Saar",
    village: "Wiltingen",
    lat: 49.6580,
    lng: 6.6020,
    coordinates: [49.6580, 6.6020],
    areaHa: 28.10,
    dominantGrape: "Riesling",
    grapeRatio: "100% Riesling",
    wineType: "White",
    aspect: "South to South-Southeast (30–60% slope)",
    elevationRange: "200m – 310m",
    soil: "Weathered Devonian Gray Slate with High Iron & Quartzite Content (Blauschiefer / Grauschiefer)",
    tier: "grandCru",
    badge: "VDP.Grosse Lage",
    classification: "VDP.Grosse Lage (Ortsteil single-vineyard status)",
    aocDecreeYear: 1971,
    character: "Aristocratic, crystalline, unyielding mineral intensity with green apple, white peach, wild herbs, and immortal 50–100 year longevity.",
    benchmarkProducers: [
      "Weingut Egon Müller-Scharzhof",
      "Reichsgraf von Kesselstatt",
      "Bischöfliche Weingüter Trier",
      "Van Volxem"
    ],
    famousProducers: [
      "Weingut Egon Müller-Scharzhof",
      "Reichsgraf von Kesselstatt",
      "Bischöfliche Weingüter Trier",
      "Van Volxem"
    ],
    legalNotes: "One of Germany's handful of historical 'Ortsteil' vineyards legally permitted to omit the village name (Wiltingen) from the label."
  },
  {
    id: 'wehlener-sonnenuhr',
    name: "Wehlener Sonnenuhr (VDP.Grosse Lage)",
    subregionId: "mittelmosel",
    subregion: "Mittelmosel (Middle Mosel & Bernkastel)",
    district: "Mittelmosel",
    village: "Wehlen",
    lat: 49.9570,
    lng: 7.0450,
    coordinates: [49.9570, 7.0450],
    areaHa: 46.50,
    dominantGrape: "Riesling",
    grapeRatio: "100% Riesling",
    wineType: "White",
    aspect: "South-Southwest (up to 70% slope)",
    elevationRange: "110m – 240m",
    soil: "Pure, Fine Blue Devonian Slate (Blauschiefer / Devonschiefer) with Extreme Rock Fraction",
    tier: "grandCru",
    badge: "VDP.Grosse Lage",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "The quintessential Middle Mosel archetype: delicate peach, vanilla blossom, candied lemon, wet slate, and gossamer texture balanced by electric acidity.",
    benchmarkProducers: [
      "Joh. Jos. Prüm",
      "Weingut Dr. Loosen",
      "Weingut S.A. Prüm",
      "Weingut Markus Molitor"
    ],
    famousProducers: [
      "Joh. Jos. Prüm",
      "Weingut Dr. Loosen",
      "Weingut S.A. Prüm",
      "Weingut Markus Molitor"
    ],
    legalNotes: "Named after the historic sundial erected in the vineyard in 1842 by Jodocus Prüm."
  },
  {
    id: 'berncasteler-doctor',
    name: "Berncasteler Doctor (VDP.Grosse Lage)",
    subregionId: "mittelmosel",
    subregion: "Mittelmosel (Middle Mosel & Bernkastel)",
    district: "Mittelmosel",
    village: "Bernkastel",
    lat: 49.9170,
    lng: 7.0780,
    coordinates: [49.9170, 7.0780],
    areaHa: 3.26,
    dominantGrape: "Riesling",
    grapeRatio: "100% Riesling",
    wineType: "White",
    aspect: "South to South-Southwest (60% slope)",
    elevationRange: "130m – 200m",
    soil: "Deep, Weathered Dark Blue Devonian Slate (Blauschiefer) with Supreme Thermal Heat Retention",
    tier: "grandCru",
    badge: "VDP.Grosse Lage",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "Powerful, spicy, smoky dark slate minerality with unctuous stone fruit and extraordinary regal presence.",
    benchmarkProducers: [
      "Weingut Wwe. Dr. H. Thanisch",
      "Weingut Wegeler",
      "Weingut Lauerburg"
    ],
    famousProducers: [
      "Weingut Wwe. Dr. H. Thanisch",
      "Weingut Wegeler",
      "Weingut Lauerburg"
    ],
    legalNotes: "Legend recounts that Archbishop Boemund II of Trier was cured of a terminal fever in the 14th century by drinking wine from this hill."
  },
  {
    id: 'uerziger-wuerzgarten',
    name: "Ürziger Würzgarten (VDP.Grosse Lage)",
    subregionId: "mittelmosel",
    subregion: "Mittelmosel (Middle Mosel & Bernkastel)",
    district: "Mittelmosel",
    village: "Ürzig",
    lat: 49.9830,
    lng: 7.0980,
    coordinates: [49.9830, 7.0980],
    areaHa: 56.40,
    dominantGrape: "Riesling",
    grapeRatio: "100% Riesling",
    wineType: "White",
    aspect: "South to South-Southeast (amphitheater up to 70% slope)",
    elevationRange: "110m – 260m",
    soil: "Volcanic Red Rhyolite & Iron-Rich Red Rotliegend Slate (Rotschiefer)",
    tier: "grandCru",
    badge: "VDP.Grosse Lage",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "Exotic, spicy, and opulent: crushed red pepper, strawberry, passionfruit, kiwi, and iron-driven volcanic earthiness.",
    benchmarkProducers: [
      "Weingut Dr. Loosen",
      "Weingut Markus Molitor",
      "Weingut Joh. Jos. Christoffel Erben"
    ],
    famousProducers: [
      "Weingut Dr. Loosen",
      "Weingut Markus Molitor",
      "Weingut Joh. Jos. Christoffel Erben"
    ],
    legalNotes: "The rare red volcanic outcrop in a sea of blue slate, giving its wines an unmistakable exotic spice profile."
  },
  {
    id: 'erdener-praelat',
    name: "Erdener Prälat (VDP.Grosse Lage)",
    subregionId: "mittelmosel",
    subregion: "Mittelmosel (Middle Mosel & Bernkastel)",
    district: "Mittelmosel",
    village: "Erden",
    lat: 49.9850,
    lng: 7.1080,
    coordinates: [49.9850, 7.1080],
    areaHa: 2.20,
    dominantGrape: "Riesling",
    grapeRatio: "100% Riesling",
    wineType: "White",
    aspect: "Direct South (70–80% sheer cliff slope)",
    elevationRange: "110m – 160m",
    soil: "Weathered Red Slate (Rotschiefer) & Volcanic Sediments wedged between massive thermal rock cliffs",
    tier: "grandCru",
    badge: "VDP.Grosse Lage",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "The grandest jewel of the Mosel: unctuous, opulent, botrytis-kissed apricot, mango, saffron, and monumental mineral weight.",
    benchmarkProducers: [
      "Weingut Dr. Loosen",
      "Weingut Markus Molitor",
      "Weingut Karl Erbes"
    ],
    famousProducers: [
      "Weingut Dr. Loosen",
      "Weingut Markus Molitor",
      "Weingut Karl Erbes"
    ],
    legalNotes: "A micro-climat of just 2.2 hectares enjoying an almost tropical microclimate backed by sheer rock faces."
  },
  {
    id: 'hermannshoehle',
    name: "Niederhäuser Hermannshöhle (VDP.Grosse Lage)",
    subregionId: "nahe-pfalz",
    subregion: "Nahe & Pfalz (Mittelhaardt)",
    district: "Nahe",
    village: "Niederhausen",
    lat: 49.8050,
    lng: 7.8100,
    coordinates: [49.8050, 7.8100],
    areaHa: 8.50,
    dominantGrape: "Riesling",
    grapeRatio: "100% Riesling",
    wineType: "White",
    aspect: "Direct South (50–60% slope)",
    elevationRange: "130m – 220m",
    soil: "Blackish-Gray Carboniferous Slate, Volcanic Porphyry & Limestone Melange",
    tier: "grandCru",
    badge: "VDP.Grosse Lage",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "The undisputed apex of dry German Riesling: crystalline grapefruit, white truffle, smoke, flint, and multidimensional structural power.",
    benchmarkProducers: [
      "Weingut Dönnhoff",
      "Weingut Jakob Schneider",
      "Weingut Gut Hermannsberg"
    ],
    famousProducers: [
      "Weingut Dönnhoff",
      "Weingut Jakob Schneider",
      "Weingut Gut Hermannsberg"
    ],
    legalNotes: "Consistently rated the highest-scoring dry Riesling (Grosses Gewächs) in Germany for over two decades."
  },
  {
    id: 'keller-g-max',
    name: "Dalsheimer Hubacker / G-Max (VDP.Grosse Lage)",
    subregionId: "nahe-pfalz",
    subregion: "Nahe & Pfalz (Mittelhaardt)",
    district: "Rheinhessen (Wonnegau)",
    village: "Dalsheim",
    lat: 49.6670,
    lng: 8.2000,
    coordinates: [49.6670, 8.2000],
    areaHa: 4.00,
    dominantGrape: "Riesling",
    grapeRatio: "100% Riesling",
    wineType: "White",
    aspect: "East-Southeast (moderate slope)",
    elevationRange: "180m – 240m",
    soil: "Upper Jurassic Limestone & Calcareous Clay with Ancient Marine Fossil Beds (Terra Fusca)",
    tier: "grandCru",
    badge: "VDP.Grosse Lage",
    classification: "VDP.Grosse Lage",
    aocDecreeYear: 1971,
    character: "World's most coveted dry Riesling: limestone salinity, white peach, crushed chalk, lime blossom, and staggering tension.",
    benchmarkProducers: [
      "Weingut Keller"
    ],
    famousProducers: [
      "Weingut Keller"
    ],
    legalNotes: "Sourced from a tiny parcel of ungrafted, extremely old vines within the Dalsheimer Hubacker."
  }
];

export const MOSEL_TECHNICAL_REGULATIONS = {
  geology: {
    system: "Devonian Slate Stratigraphy & Volcanic Terraces",
    summary: "Over 400 million years ago in the Paleozoic era, marine sediments were compressed under tremendous tectonic pressure into metamorphic Devonian slate sheets. Fractured blue, gray, and red slate (Devonschiefer & Rotliegend) provide unmatched capillary water storage, heat retention, and intense mineral extraction.",
    formations: [
      {
        id: "devonian-blue-slate",
        name: "Devonian Blue Slate",
        frenchName: "Devonschiefer (Blauschiefer)",
        localName: "Blauschiefer",
        period: "Paleozoic (Devonian ~400 Ma)",
        fossil: "Marine Brachiopods & Trilobites",
        characteristics: "Fine-grained, fissile dark blue slate rich in potassium and magnesium; fractures into thin heat-absorbing plates.",
        porosity: "High capillary water retention (30–35% volume) sustaining deep vine roots on 70° slopes without irrigation.",
        keyAreas: ["Wehlen", "Bernkastel", "Graach", "Piesport", "Brauneberg"],
        wineImpact: "Yields featherweight, crystalline wines with laser acidity, green apple, white peach, and pristine wet-stone minerality."
      },
      {
        id: "volcanic-red-slate",
        name: "Volcanic Red Slate & Rhyolite",
        frenchName: "Rotliegend",
        localName: "Rotschiefer",
        period: "Permian (~280 Ma)",
        fossil: "Iron oxide mineral deposits",
        characteristics: "Iron-rich, decomposed red clay-slate mixed with volcanic quartz and rhyolite sediments.",
        porosity: "Medium water retention with high thermal conductivity that warms hillside soils rapidly in spring.",
        keyAreas: ["Ürziger Würzgarten", "Erdener Prälat", "Nackenheimer Rothenberg"],
        wineImpact: "Produces exotic, spicy, opulent wines with crushed red pepper, paprika, strawberry, and volcanic smoke."
      },
      {
        id: "tertiary-marine-limestone",
        name: "Tertiary Marine Limestone & Marl",
        frenchName: "Kalkstein",
        localName: "Kalkstein & Terra Fusca",
        period: "Mesozoic / Tertiary (~25 Ma)",
        fossil: "Fossilized oyster shells (Exogyra) and coral reef deposits",
        characteristics: "Heavy calcareous clay loam over dense fractured limestone rock beds.",
        porosity: "High moisture buffering capacity providing continuous alkaline nourishment during hot vintages.",
        keyAreas: ["Wonnegau (Keller Hubacker / G-Max)", "Mittelhaardt (Bürklin-Wolf Kirchenstück)"],
        wineImpact: "Gives dry Grosses Gewächs (GG) Riesling monumental palate density, chalky grip, and hazelnut savory richness."
      },
      {
        id: "taunus-quartzite",
        name: "Taunus Quartzite & Phyllite",
        frenchName: "Quarzite du Taunus",
        localName: "Taunusquarzit",
        period: "Devonian (~390 Ma)",
        fossil: "Metamorphic quartz grains",
        characteristics: "Extremely hard, nutrient-poor silicate bedrock layered with clay phyllite slate.",
        porosity: "Very low moisture retention forcing vine roots to search 15+ meters deep into rock fissures.",
        keyAreas: ["Rüdesheimer Berg", "Kiedrich Gräfenberg", "Assmannshausen Höllenberg"],
        wineImpact: "Imparts chiseled structure, grapefruit pith, smoky reduction, and profound phenolic tension to both Riesling and Spätburgunder."
      }
    ]
  },
  grapes: {
    major: [
      {
        id: "riesling",
        name: "Riesling",
        percentage: 85,
        type: "White",
        epicenter: "Mittelmosel, Saar, Ruwer, Rheingau, Nahe, Pfalz",
        profile: "Lime zest, green apple, white peach, petroleum/kerosene, beeswax, and crushed slate.",
        role: "The undisputed King of German viticulture; transparent conduit of slate and limestone terroir with supreme natural acidity (world-maximum 10.0 acidity score).",
        clones: ["Geisenheim 110", "Geisenheim 239", "Trier Selection (Old Massale)"],
        benchmarkCuvees: [
          "Egon Müller Scharzhofberger TBA",
          "JJ Prüm Wehlener Sonnenuhr Auslese GK",
          "Keller G-Max GG",
          "Dönnhoff Hermannshöhle GG"
        ]
      },
      {
        id: "spatburgunder",
        name: "Spätburgunder (Pinot Noir)",
        percentage: 10,
        type: "Red",
        epicenter: "Rheingau (Assmannshausen), Ahr, Baden, Pfalz, Wonnegau",
        profile: "Wild red cherry, raspberry, forest floor, clove, and silky fine-grained tannins.",
        role: "Germany is the world's 3rd largest producer of Pinot Noir; cool slate and limestone terroirs yield ethereal, perfumed, terroir-transparent reds.",
        clones: ["Geisenheim 1-11", "Geisenheim 20-19", "Mariafeld"],
        benchmarkCuvees: [
          "Keller Frauenberg Spätburgunder Felix GG",
          "Klostermühle Assmannshausen Höllenberg",
          "Künstler Reichestal GG"
        ]
      },
      {
        id: "weissburgunder-grauburgunder",
        name: "Weissburgunder & Grauburgunder",
        percentage: 5,
        type: "White",
        epicenter: "Baden, Pfalz, Rheinhessen, Nahe",
        profile: "Orchard pear, yellow apple, honeysuckle, hazelnut, and refreshing citrus drive.",
        role: "Pinot Blanc and Pinot Gris crafting gastronomic, textured, dry food wines.",
        clones: ["Geisenheim 212", "Freiburg Selection"],
        benchmarkCuvees: [
          "Keller Weissburgunder Reserve",
          "Dönnhoff Weissburgunder Trocken"
        ]
      }
    ],
    heritage: [
      {
        name: "Elbling",
        percentage: 2,
        type: "White",
        epicenter: "Obermosel (Upper Mosel / Limestone)",
        profile: "Green apple, lemon peel, chalk, and searing tartness.",
        role: "Ancient Roman grape surviving on shell limestone soils of the Upper Mosel; base for sparkling Mosel Sekt.",
        status: "Historical heirloom variety dating back over 2,000 years."
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
        criteria: "100% single vineyard, traditional harvest, estate-bottled, sensory tasting panel approval.",
        description: "The peak of German terroir: single strictly delimited parcels. Dry wines are designated 'Grosses Gewächs' (GG); sweet wines bear traditional Prädikat labels (Kabinett, Spätlese, Auslese, BA, TBA, Eiswein)."
      },
      {
        tier: "VDP.Erste Lage (Premier Cru)",
        sharePct: "8%",
        aocCount: "First class historical sites",
        yieldLimits: "Max 60 hl/ha",
        minAbv: "11.5% vol.",
        criteria: "Delimited premier cru vineyards with proven regional typicity.",
        description: "Exceptional vineyards with distinctive character, aged to express site transparency."
      },
      {
        tier: "VDP.Ortswein (Village Level)",
        sharePct: "25%",
        aocCount: "Communal designations",
        yieldLimits: "Max 75 hl/ha",
        minAbv: "11.0% vol.",
        criteria: "Grapes sourced exclusively from village communal borders.",
        description: "Wines sourced from top village vineyards expressing regional soil and communal character (e.g. Wehlener, Bernkasteler, Wiltinger)."
      },
      {
        tier: "VDP.Gutswein (Regional Estate Level)",
        sharePct: "64%",
        aocCount: "Estate entry bottlings",
        yieldLimits: "Max 75 hl/ha",
        minAbv: "10.5% vol.",
        criteria: "100% estate-grown fruit under member estate control.",
        description: "High quality estate entry-level wines setting the house standard."
      }
    ],
    sweetnessRules: [
      { category: "Kabinett (70–85° Oechsle)", details: "Light, featherweight, delicate wines picked at normal harvest; ranges from bone-dry to off-dry (8–10% ABV)." },
      { category: "Spätlese (80–95° Oechsle)", details: "Late harvest picked at full physiological ripeness; rich stone fruit, intense slate minerality." },
      { category: "Auslese (88–105° Oechsle)", details: "Select late harvest clusters with noble rot botrytis; luscious nectar balanced by searing acid." },
      { category: "Beerenauslese & TBA (110–150°+ Oechsle)", details: "Individually hand-picked botrytized berries; celestial viscosity, saffron, and apricot unctuousness." },
      { category: "Eiswein (110–128° Oechsle)", details: "Harvested and pressed while naturally frozen on the vine at -7°C (19°F) or colder." }
    ]
  },
  vinification: {
    barrelType: "Traditional 1000L Mosel Fuder Casks & 1200L Rheingau Stückfass",
    barrelDescription: "Neutral seasoned German oak casks allowing microscopic oxygenation without imparting oak vanilla flavors, preserving slate mineral transparency.",
    traditions: [
      { practice: "Spontaneous Fermentation", details: "Native ambient cellar yeasts fermenting slowly through cold winter temperatures in deep slate cellars." },
      { practice: "Extended Lees Aging (Sur Lie)", details: "Maturation on fine yeast lees in Fuder casks for 6–18 months to enhance textural creaminess and reductive longevity." }
    ]
  }
};

export const MOSEL_PRESTIGE_ESTATES = [
  {
    id: "scharzhofberger-tba",
    name: "Scharzhofberger Trockenbeerenauslese",
    producer: "Weingut Egon Müller-Scharzhof",
    type: "Domaine",
    village: "Wiltingen (Saar)",
    grape: "Riesling (100%)",
    cepage: "100% Riesling",
    grapeComposition: "100% Riesling",
    classification: "VDP.Grosse Lage TBA",
    status: "VDP.Grosse Lage TBA (World Auction Record)",
    debutVintage: 1921,
    sourcing: "Old ungrafted massale vines in the core iron-rich gray slate parcel of the Scharzhofberg.",
    winemaking: "Individually berry-selected botrytis harvest pressed gently and fermented in seasoned wooden Fuder casks.",
    terroir: "Iron-rich Devonian gray slate in the cold Wiltingen Saar amphitheater.",
    character: "Celestial balance of unctuous botrytis honey, saffron, candied lemon, and immortal laser acidity.",
    iconicStatus: "The world's most expensive and legendary white wine, commanding $15,000–$35,000+ per half-bottle at the Trier VDP auction."
  },
  {
    id: "wehlener-sonnenuhr-auslese-gk",
    name: "Wehlener Sonnenuhr Auslese Goldkapsel",
    producer: "Weingut Joh. Jos. Prüm",
    type: "Domaine",
    village: "Wehlen (Mittelmosel)",
    grape: "Riesling (100%)",
    cepage: "100% Riesling",
    grapeComposition: "100% Riesling",
    classification: "VDP.Grosse Lage Auslese GK",
    status: "VDP.Grosse Lage Auslese GK",
    debutVintage: 1971,
    sourcing: "Centenarian ungrafted vines immediately surrounding the historic 1842 sundial in Wehlen.",
    winemaking: "Extreme cold spontaneous fermentation preserving delicate white flowers, wild reduction, and pristine natural residual sugar.",
    terroir: "Pure blue slate on 70° south-facing slope beneath the historic sundial.",
    character: "Spontaneous wild yeast reduction, white peach, green apple, jasmine, and 50+ year longevity.",
    iconicStatus: "The global gold standard for ageworthy, reductive, gossamer-textured sweet Mosel Riesling."
  },
  {
    id: "g-max-riesling-trocken",
    name: "G-Max Riesling Trocken (Grosses Gewächs)",
    producer: "Weingut Keller",
    type: "Domaine",
    village: "Flörsheim-Dalsheim (Rheinhessen)",
    grape: "Riesling (100%)",
    cepage: "100% Riesling",
    grapeComposition: "100% Riesling",
    classification: "VDP.Grosse Lage GG",
    status: "VDP.Grosse Lage GG (Cult Dry White)",
    debutVintage: 2001,
    sourcing: "Tiny secret parcel of ungrafted century-old vines planted on ancient limestone bedrock in the Dalsheimer Hubacker.",
    winemaking: "Organic viticulture, minimal intervention, gentle basket pressing, and Fuder maturation.",
    terroir: "Upper Jurassic fossil limestone parcel of ungrafted century-old vines.",
    character: "Astonishing limestone salinity, white flowers, lemon oil, smoky flint, and endless structural power.",
    iconicStatus: "The DRC Romanée-Conti of dry white wine, trading over $3,000–$6,000 per bottle on the global secondary market."
  },
  {
    id: "hermannshoehle-gg",
    name: "Hermannshöhle Grosses Gewächs (GG)",
    producer: "Weingut Dönnhoff",
    type: "Domaine",
    village: "Oberhausen / Niederhausen (Nahe)",
    grape: "Riesling (100%)",
    cepage: "100% Riesling",
    grapeComposition: "100% Riesling",
    classification: "VDP.Grosse Lage GG",
    status: "VDP.Grosse Lage GG",
    debutVintage: 1994,
    sourcing: "Steep central south-facing terrace in the Hermannshöhle containing black slate and volcanic porphyry.",
    winemaking: "Spontaneous native yeast fermentation in neutral 1200L Stückfass casks followed by extended fine lees contact.",
    terroir: "Carboniferous black slate, volcanic porphyry, and limestone melange.",
    character: "Smoky, chiseled, pink grapefruit, white peach, crushed rock, and crystalline architectural length.",
    iconicStatus: "The benchmark dry Riesling of the Nahe Valley for over 30 consecutive vintages."
  },
  {
    id: "erdener-praelat-auslese-gk",
    name: "Erdener Prälat Auslese Goldkapsel",
    producer: "Weingut Dr. Loosen",
    type: "Domaine",
    village: "Erden (Mittelmosel)",
    grape: "Riesling (100%)",
    cepage: "100% Riesling",
    grapeComposition: "100% Riesling",
    classification: "VDP.Grosse Lage Auslese GK",
    status: "VDP.Grosse Lage Auslese GK",
    debutVintage: 1988,
    sourcing: "100+ year-old ungrafted vines growing directly out of sheer red slate cliffs in the 2.2-ha Erdener Prälat.",
    winemaking: "Strict cluster selection of botrytized berries fermented in traditional Mosel Fuder barrels.",
    terroir: "Iron-rich red slate cliff amphitheater with extreme thermal heat retention.",
    character: "Opulent apricot nectar, mango, saffron, crushed red slate, and electric acid spine.",
    iconicStatus: "Regarded as the most exotic, opulent sweet wine produced in the Mittelmosel."
  },
  {
    id: "kiedrich-graefenberg-tba",
    name: "Kiedrich Gräfenberg Trockenbeerenauslese",
    producer: "Weingut Robert Weil",
    type: "Domaine",
    village: "Kiedrich (Rheingau)",
    grape: "Riesling (100%)",
    cepage: "100% Riesling",
    grapeComposition: "100% Riesling",
    classification: "VDP.Grosse Lage TBA",
    status: "VDP.Grosse Lage TBA",
    debutVintage: 1989,
    sourcing: "Steep southwest phyllite slate slopes of the Kiedrich Gräfenberg.",
    winemaking: "Meticulous single-berry selection with sugar levels exceeding 200° Oechsle.",
    terroir: "Phyllite slate and deep loess on southwest slopes of the Taunus.",
    character: "Legendary botrytis purity, candied quince, tangerine marmalade, and infinite vibrant tension.",
    iconicStatus: "Rheingau's pinnacle dessert wine, crafted uninterruptedly across consecutive decades."
  }
];

export const MOSEL_ICONIC_DOMAINES = [
  {
    id: "egon-mueller",
    name: "Weingut Egon Müller-Scharzhof",
    village: "Wiltingen (Saar)",
    subregion: "Saar & Ruwer Tributary Valleys",
    vigneron: "Egon Müller IV",
    wineType: "White",
    status: "VDP Member / Grand Cru Icon",
    philosophy: "Minimal intervention, natural native yeast fermentation in traditional 1000L Fuder casks from low-yielding ungrafted vines in the cold Scharzhofberg amphitheater.",
    keyCuvees: [
      "Scharzhofberger TBA",
      "Scharzhofberger Auslese GK",
      "Scharzhofberger Spätlese",
      "Scharzhofberger Kabinett",
      "Scharzhof (Estate Riesling)"
    ]
  },
  {
    id: "jj-pruem",
    name: "Weingut Joh. Jos. Prüm",
    village: "Bernkastel-Wehlen (Mittelmosel)",
    subregion: "Mittelmosel (Middle Mosel & Bernkastel)",
    vigneron: "Dr. Katharina Prüm",
    wineType: "White",
    status: "VDP Member / Grand Cru Benchmark",
    philosophy: "Classic reductive, slow cold cellar fermentation preserving pristine vineyard transparency, high natural acidity, and gossamer lightness with extraordinary multi-decade longevity.",
    keyCuvees: [
      "Wehlener Sonnenuhr Auslese Goldkapsel",
      "Wehlener Sonnenuhr Spätlese",
      "Graacher Himmelreich Spätlese",
      "Bernkasteler Lay Kabinett",
      "Zeltinger Sonnenuhr Auslese"
    ]
  },
  {
    id: "keller",
    name: "Weingut Keller",
    village: "Flörsheim-Dalsheim (Rheinhessen)",
    subregion: "Nahe & Pfalz (Mittelhaardt)",
    vigneron: "Klaus-Peter & Julia Keller",
    wineType: "Dual",
    status: "VDP Member / Cult Dry Wine Pioneer",
    philosophy: "Obsessive organic viticulture on ancient limestone bedrock crafting Germany's most celebrated dry Grosses Gewächs Rieslings and ethereal Spätburgunder.",
    keyCuvees: [
      "G-Max (Trocken)",
      "Dalsheimer Hubacker GG",
      "Westhofener Morstein GG",
      "Westhofener Kirchspiel GG",
      "Frauenberg Spätburgunder Felix GG"
    ]
  },
  {
    id: "doennhoff",
    name: "Weingut Dönnhoff",
    village: "Oberhausen (Nahe)",
    subregion: "Nahe & Pfalz (Mittelhaardt)",
    vigneron: "Cornelius & Helmut Dönnhoff",
    wineType: "White",
    status: "VDP Member / Nahe Reference Standard",
    philosophy: "Precision, elegance, and pure soil transparency across the Nahe's diverse volcanic, slate, and limestone terroirs, using neutral German Stückfass casks.",
    keyCuvees: [
      "Niederhäuser Hermannshöhle GG",
      "Schlossböckelheimer Felsenberg GG",
      "Norheimer Dellchen GG",
      "Oberhäuser Brücke Eiswein",
      "Hermannshöhle Spätlese"
    ]
  },
  {
    id: "dr-loosen",
    name: "Weingut Dr. Loosen",
    village: "Bernkastel-Kues (Mittelmosel)",
    subregion: "Mittelmosel (Middle Mosel & Bernkastel)",
    vigneron: "Ernst Loosen",
    wineType: "White",
    status: "VDP Member / Global Mosel Ambassador",
    philosophy: "Preservation of centuries-old ungrafted vines on steep blue and red slate slopes, championing traditional Prädikat sweet wines alongside ageworthy Reserve dry Rieslings aged on lees.",
    keyCuvees: [
      "Erdener Prälat Auslese GK / Reserve GG",
      "Ürziger Würzgarten GG / Auslese GK",
      "Wehlener Sonnenuhr Spätlese",
      "Berncasteler Doctor Auslese"
    ]
  },
  {
    id: "fritz-haag",
    name: "Weingut Fritz Haag",
    village: "Brauneberg (Mittelmosel)",
    subregion: "Mittelmosel (Middle Mosel & Bernkastel)",
    vigneron: "Oliver Haag",
    wineType: "White",
    status: "VDP Member / Brauneberg Master",
    philosophy: "Meticulous single-vineyard focus on the steep dark slate slopes of the Brauneberger Juffer and Juffer-Sonnenuhr, producing crystalline, mineral-drenched Kabinett and GG dry wines.",
    keyCuvees: [
      "Brauneberger Juffer-Sonnenuhr GG",
      "Brauneberger Juffer-Sonnenuhr Auslese GK",
      "Brauneberger Juffer Spätlese",
      "Brauneberg Juffer Kabinett"
    ]
  },
  {
    id: "robert-weil",
    name: "Weingut Robert Weil",
    village: "Kiedrich (Rheingau)",
    subregion: "Rheingau & Central Rhine",
    vigneron: "Wilhelm Weil",
    wineType: "White",
    status: "VDP Member / Rheingau Benchmark",
    philosophy: "Pinnacle Rheingau viticulture on the stony phyllite slopes of the Kiedrich Gräfenberg, renowned for benchmark dry Grosses Gewächs and pristine noble rot Trockenbeerenauslese.",
    keyCuvees: [
      "Kiedrich Gräfenberg GG",
      "Kiedrich Gräfenberg TBA",
      "Kiedrich Gräfenberg Spätlese",
      "Kiedrich Turmberg GG"
    ]
  },
  {
    id: "markus-molitor",
    name: "Weingut Markus Molitor",
    village: "Bernkastel-Wehlen (Mittelmosel)",
    subregion: "Mittelmosel (Middle Mosel & Bernkastel)",
    vigneron: "Markus Molitor",
    wineType: "Dual",
    status: "Independent Master Vigneron",
    philosophy: "Exhaustive parcel selection across 15+ steep Mosel and Saar Grand Crus, using colored capsules (White: Dry, Green: Feinherb, Gold: Sweet) to classify pure terroir expressions.",
    keyCuvees: [
      "Zeltinger Sonnenuhr Auslese *** (Gold / White / Green)",
      "Ürziger Würzgarten Auslese ***",
      "Wehlener Sonnenuhr Auslese ***",
      "Graacher Dompropst Spätburgunder ***"
    ]
  }
];

export const MOSEL_FOOD_PAIRINGS = [
  {
    category: "Classic German & Alpine Gastronomy",
    wineType: "White",
    targetWine: "Dry Riesling Grosses Gewächs (GG) — Dönnhoff Hermannshöhle or Keller Hubacker",
    dish: "Crispy Wiener Schnitzel with Wild Lingonberry Compote, Pan-Fried Mosel River Trout with Brown Almond Butter, Roasted Bavarian Pork Knuckle with Sauerkraut",
    note: "The electric 10.0 acidity and citrus tension of dry Grosses Gewächs Riesling cuts cleanly through crispy breaded veal fat and brown butter, while slate minerality harmonizes with sweet-tart lingonberries.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Decant 30 minutes for young dry Grosses Gewächs (GG) to unlock complex reductive slate nuances."
  },
  {
    category: "Spicy Asian Cuisine & Thai Dishes",
    wineType: "White",
    targetWine: "Riesling Kabinett & Spätlese Feinherb (Joh. Jos. Prüm Wehlener Sonnenuhr)",
    dish: "Thai Green Curry with Tiger Prawns & Thai Basil, Vietnamese Lemongrass Pork Belly, Sichuan Spicy Dan Dan Noodles, Singapore Chili Crab",
    note: "Residual sweetness cools chili capsicum heat on the palate while Riesling's high natural acidity matches lime, lemongrass, and ginger aromatics without clashing.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "8–10°C (46–50°F)",
    decanting: "Not required; serve chilled and allow gentle aeration in glass."
  },
  {
    category: "Pungent & Blue Cheeses",
    wineType: "White",
    targetWine: "Riesling Auslese & Beerenauslese (BA) — Dr. Loosen Erdener Prälat",
    dish: "Roquefort AOP, Gorgonzola Dolce, Munster with Caraway Seeds, Fourme d'Ambert with Walnut Toast",
    note: "The unctuous noble rot botrytis sweetness, apricot nectar, and searing natural acid create an immortal sweet-salty contrast against pungent penicillin blue veins and washed-rind cheeses.",
    glassware: "Dessert / Sweet Wine Stem (350ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not required; aerate in dessert glass."
  },
  {
    category: "Roasted Game & Feathered Birds",
    wineType: "Red",
    targetWine: "German Spätburgunder (Pinot Noir) — Assmannshausen Höllenberg or Keller Frauenberg",
    dish: "Roasted Partridge with Sautéed Chanterelles, Spiced Duck Breast with Tart Cherry Reduction, Venison Medallions with Juniper Butter",
    note: "Cool-climate Spätburgunder provides bright sour cherry, forest floor, and delicate fine tannins that elevate lean feathered game without overpowering subtle wild bird flavors.",
    glassware: "Burgundy Pinot Noir Ballon Stem (750ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1 hour before service to expand delicate floral perfume and tertiary earth notes."
  },
  {
    category: "Decadent Desserts & Pâtisserie",
    wineType: "White",
    targetWine: "Riesling Trockenbeerenauslese (TBA) & Eiswein — Egon Müller Scharzhofberger",
    dish: "Warm Caramelized Apple Strudel with Bourbon Vanilla Sauce, Meyer Lemon Tart, Crème Brûlée with Poached Apricots",
    note: "Concentrated noble rot botrytis nectar, candied citrus, and searing frozen-grape acidity elevate caramelized apples and custard while cleansing the palate of rich pastry fats.",
    glassware: "Dessert / Sweet Wine Stem (350ml)",
    servingTemp: "8–10°C (46–50°F)",
    decanting: "Not required; pour into tulip dessert stem."
  },
  {
    category: "Smoked Salmon & Raw Bar Seafood",
    wineType: "White",
    targetWine: "Mosel Riesling Sekt Brut Nature & Dry Saar Riesling (Van Volxem / Peter Lauer)",
    dish: "House-Smoked River Trout with Horseradish Crème, Cured Salmon Gravlax with Mustard-Dill Sauce, Hamachi Crudo with Finger Lime",
    note: "Laser-sharp slate acidity and fine effervescence cut through oily smoked fish and rich cream sauces while echoing the pristine salinity of raw crudo.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "8–10°C (46–50°F)",
    decanting: "Not required; preserve vibrant freshness and effervescence."
  }
];
