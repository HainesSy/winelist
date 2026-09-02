// Authoritative Tuscany (Toscana) Wine Knowledge Base & Master Sommelier Datasets
// CMS Level 3 (Advanced Sommelier) & Master Sommelier Standards
// Comprehensive catalog: Chianti Classico DOCG (11 Official UGAs: Castellina, Gaiole, Radda, Greve, Panzano,
// Castelnuovo Berardenga, San Casciano, Montefioralle, Lamole, San Donato in Poggio, Vagliagli),
// Gran Selezione (Min 90% Sangiovese / Zero International Cépages / 30m Aging),
// Brunello di Montalcino DOCG (100% Sangiovese Grosso across 4 Quadrant Terroirs: North Montosoli, South Castelnuovo,
// East Greppo, West Tavernelle), Bolgheri DOC & Bolgheri Sassicaia DOCG (Coastal Super Tuscans),
// Vino Nobile di Montepulciano (Prugnolo Gentile & Pievi), Carmignano DOCG (Medici 1716 Decree),
// Galestro (Flaky Clay-Schist) vs. Alberese (Hard Compact Marl-Limestone) vs. Macigno (Sandstone),
// Prestige Cult Estates (Sassicaia, Masseto, Tignanello, Solaia, Biondi-Santi, Soldera, Le Pergole Torte, Flaccianello, Cepparello).

// ============================================================================
// 1. TUSCANY SUBREGIONS & VITICULTURAL DISTRICTS
// ============================================================================

export const TUSCANY_SUBREGIONS = [
  {
    id: 'chianti-classico',
    name: "Chianti Classico DOCG (11 UGAs)",
    lat: 43.5500,
    lng: 11.3000,
    appellations: ["Chianti Classico DOCG", "Chianti Classico Riserva DOCG", "Chianti Classico Gran Selezione DOCG", "Vin Santo del Chianti Classico DOC"],
    grapeVarieties: ["Sangiovese (Sangioveto)", "Canaiolo Nero", "Colorino", "Malvasia Nera", "Cabernet Sauvignon", "Merlot", "Syrah"],
    soilTypes: ["Galestro (Friable, Flaky Clay-Schist)", "Alberese (Hard, Compact Marly Limestone)", "Macigno Chiantigiano (Calcareous Sandstone)", "Argille Varicolori (Variegated Clays)"],
    climate: "Continental Mediterranean climate with hot summer days, cool alpine-influenced mountain nights, and significant diurnal temperature swings.",
    terroir: "Rolling forested mountains (250m to 650m) between Florence and Siena. The core geological bedrock of Galestro schist and Alberese limestone creates the world's most aromatic, savory, and age-worthy expressions of Sangiovese.",
    focus: "The historic cradle of Sangiovese (Gran Selezione & 11 official UGAs: Panzano, Radda, Gaiole, Castellina, Greve, Castelnuovo Berardenga): dried sour red cherry, redcurrant, blood orange, leather, dried oregano, balsamic herbs, and vibrant, food-loving acidity wrapped in chiseled limestone tannins.",
    description: "The historical heartland of Chianti, legally delimited since Cosimo III de' Medici's decree in 1716 and symbolized by the Black Rooster (Gallo Nero). In 2021, the consortium officially codified 11 Unità Geografiche Aggiuntive (UGAs)."
  },
  {
    id: 'montalcino',
    name: "Montalcino (Brunello & Rosso)",
    lat: 43.0567,
    lng: 11.4889,
    appellations: ["Brunello di Montalcino DOCG", "Brunello di Montalcino Riserva DOCG", "Rosso di Montalcino DOC", "Moscadello di Montalcino DOC", "Sant'Antimo DOC"],
    grapeVarieties: ["Sangiovese Grosso (Brunello 100%)", "Moscato Bianco (Moscadello)"],
    soilTypes: ["Galestro Schist (Northern Slopes)", "Alberese Limestone (Southern Slopes)", "Pliocene Marine Sedimentary Clays & Fossil Sands (Orcia Basin)", "Alluvial Gravels"],
    climate: "Mediterranean-influenced continental climate sheltered from Atlantic storms by Monte Amiata (1,738m) to the south, with warm, dry conditions and excellent sun radiation.",
    terroir: "An isolated mountain fortress hill rising from 120m to 650m elevation. Distinct microclimates across four quadrants: cooler, floral, high-acid northern hills (Montosoli) vs. sun-drenched, powerful southern slopes (Castelnuovo dell'Abate).",
    focus: "100% Sangiovese Grosso of monumental depth and sovereignty: dark plum, wild blackberry, leather, black tea, espresso, dried violets, and architectural tannins requiring 10-20 years to open.",
    description: "The supreme cathedral of monovarietal Sangiovese in Italy, pioneered by Clemente and Ferruccio Biondi-Santi in the 19th century and granted Italy's very first DOCG status in 1980."
  },
  {
    id: 'bolgheri-coastal',
    name: "Bolgheri & Coastal Maremma",
    lat: 43.2333,
    lng: 10.6167,
    appellations: ["Bolgheri DOC", "Bolgheri Superiore DOC", "Bolgheri Sassicaia DOC", "Maremma Toscana DOC", "Suvereto DOCG", "Val di Cornia DOCG"],
    grapeVarieties: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Petit Verdot", "Syrah", "Vermentino"],
    soilTypes: ["Alluvial Gravel Fans & River Pebbles (San Martino)", "Pliocene Blue Clays (Masseto Hill)", "Calcareous Sandy Loams", "Volcanic Colluvium"],
    climate: "Warm Mediterranean maritime climate bathed in intense luminous sunlight reflected from the Tyrrhenian Sea and cooled by constant sea breezes.",
    terroir: "Coastal gravel terraces and clay hillsides nestled between the Colline Metallifere and the Mediterranean coastline. Perfect pedological parallel to Left Bank Bordeaux gravels.",
    focus: "The birthplace of the Super Tuscan revolution (Sassicaia, Ornellaia, Masseto): opulent, velvety, polished Bordeaux blends delivering dark cassis, blackcurrant, dark chocolate, eucalyptus, graphite, and seamless cashmere tannins.",
    description: "Pioneered in the 1960s by Marchese Mario Incisa della Rocchetta (Tenuta San Guido Sassicaia), Bolgheri transformed coastal Tuscany from marshland into one of the world's most glamorous fine wine destinations."
  },
  {
    id: 'montepulciano-carmignano',
    name: "Montepulciano & Carmignano",
    lat: 43.1000,
    lng: 11.7800,
    appellations: ["Vino Nobile di Montepulciano DOCG", "Vino Nobile di Montepulciano Riserva DOCG", "Rosso di Montepulciano DOC", "Carmignano DOCG", "Barco Reale di Carmignano DOC", "Vin Santo di Montepulciano DOC"],
    grapeVarieties: ["Sangiovese (Prugnolo Gentile)", "Canaiolo Nero", "Colorino", "Cabernet Sauvignon", "Cabernet Franc", "Mammolo"],
    soilTypes: ["Sabbie Plioceniche (Pliocene Marine Sands with Fossil Shells)", "Clay-Limestone", "Schistous Galestro of Carmignano"],
    climate: "Warm inland continental climate with gentle rolling hills and wide diurnal temperature shifts.",
    terroir: "The sandy, clay-rich hills of Montepulciano south of Chianti, and the historic Medici hills of Carmignano northwest of Florence where Cabernet has been cultivated since the 16th century.",
    focus: "Aristocratic, dark-fruited Sangiovese (Prugnolo Gentile) aged in large Slavonian botti (Montepulciano) and historic Sangiovese-Cabernet blends (Carmignano).",
    description: "Home to 'The King of Wines' celebrated by poet Francesco Redi in 1685 (Vino Nobile) and the historic Medici 1716 DOCG equivalent of Carmignano."
  },
  {
    id: 'san-gimignano-val-d-elsa',
    name: "San Gimignano & Central Valleys",
    lat: 43.4678,
    lng: 11.0431,
    appellations: ["Vernaccia di San Gimignano DOCG", "Vernaccia di San Gimignano Riserva DOCG", "San Gimignano Rosso DOC", "Toscana IGT"],
    grapeVarieties: ["Vernaccia di San Gimignano", "Sangiovese", "Vermentino", "Trebbiano"],
    soilTypes: ["Yellow Pliocene Marine Clays packed with Fossil Shells and Sand"],
    climate: "Warm, dry Mediterranean climate with breezy hillside exposures.",
    terroir: "Rolling golden clay hills surrounding the medieval UNESCO Manhattan of towers (San Gimignano). High fossil shell content imparts crisp saline minerality.",
    focus: "Tuscany's noble white wine: preserved lemon, white almond, rosemary blossom, flint, and a distinctive savory, bitter almond finish.",
    description: "The historical white wine of Dante Alighieri and Renaissance Popes; decreed as Italy's very first DOC in 1966 and promoted to DOCG in 1993."
  }
];

// ============================================================================
// 2. TUSCANY GRAND CRUS, UGAs & BENCHMARK TERROIRS
// ============================================================================

export const TUSCANY_GRAND_CRUS = [
  // --------------------------------------------------------------------------
  // CHIANTI CLASSICO OFFICIAL UGAs (2021 CODIFICATION)
  // --------------------------------------------------------------------------
  {
    id: 'uga-radda-in-chianti',
    name: "Radda in Chianti (Chianti Classico UGA)",
    village: "Radda in Chianti",
    commune: "Radda in Chianti",
    subregion: "Chianti Classico DOCG (11 UGAs)",
    district: "Chianti Classico",
    subregionId: 'chianti-classico',
    districtId: 'chianti-classico',
    lat: 43.5047,
    lng: 11.3750,
    areaHa: 450.00,
    aocDecreeYear: 2021,
    establishedYear: 1200,
    elevationRange: "350m – 650m",
    aspect: "High-altitude hillside amphitheaters surrounded by oak forests",
    dominantGrape: "Sangiovese (min. 90-100% for Gran Selezione)",
    grapeRatio: "Sangiovese 100% (or min. 90% with native varieties)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Chianti Classico UGA Summit",
    baseYield: "52 hl/ha (max 45 hl/ha Gran Selezione)",
    minPotentialAbv: "13.0% vol.",
    soil: "Predominantly pure, friable Galestro (flaky clay-schist) and calcareous marl with thin, rocky topsoil.",
    character: "The pinnacle of high-altitude Sangiovese tension and purity: vibrant red cherry, cranberries, wild mint, iris, blood orange, crushed limestone, and chiseled, laser-like acidity with 25+ year longevity.",
    benchmarkProducers: ["Montevertine (Le Pergole Torte)", "Castello di Volpaia (Coltassala Gran Selezione)", "Castello di Radda", "Poggerino", "Val delle Corti", "Caparsa"],
    famousProducers: ["Montevertine", "Castello di Volpaia", "Poggerino"],
    iconicVineyards: ["Le Pergole Torte (2.5 ha 1968 parcel)", "Coltassala (Volpaia)", "Bugialla"]
  },
  {
    id: 'uga-panzano-in-chianti',
    name: "Panzano in Chianti (Chianti Classico UGA)",
    village: "Panzano in Chianti / Greve",
    commune: "Greve in Chianti",
    subregion: "Chianti Classico DOCG (11 UGAs)",
    district: "Chianti Classico",
    subregionId: 'chianti-classico',
    districtId: 'chianti-classico',
    lat: 43.5583,
    lng: 11.3167,
    areaHa: 500.00,
    aocDecreeYear: 2021,
    establishedYear: 1300,
    elevationRange: "350m – 500m",
    aspect: "Famous Conca d'Oro (Golden Shell) south-facing amphitheater",
    dominantGrape: "Sangiovese",
    grapeRatio: "Sangiovese 100% (or min. 90%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Chianti Classico UGA Summit",
    baseYield: "50 hl/ha",
    minPotentialAbv: "13.5% vol.",
    soil: "Conca d'Oro: deep, nutrient-rich Galestro schist mixed with calcareous clay on a sun-drenched natural bowl.",
    character: "The most powerful, sumptuous, and structured Sangiovese in Chianti Classico: dark sour cherry, blackberries, balsamic herbs, cocoa, leather, and lavish, deep, muscular tannins.",
    legalNotes: "First viticultural district in Europe to establish an entirely organic biodistrict (Distretto Biologico di Panzano) with over 90% organic farming.",
    benchmarkProducers: ["Fontodi (Flaccianello della Pieve & Vigna del Sorbo)", "Castello dei Rampolla (d'Alceo & Sammarco)", "Rocca di Castagnoli", "Il Molino di Grace", "Le Cinciole", "Carobbio"],
    famousProducers: ["Fontodi", "Castello dei Rampolla", "Il Molino di Grace"],
    iconicVineyards: ["Conca d'Oro Amphitheater", "Vigna del Sorbo (Fontodi)", "Flaccianello Hillside"]
  },
  {
    id: 'uga-gaiole-in-chianti',
    name: "Gaiole in Chianti (Chianti Classico UGA)",
    village: "Gaiole in Chianti",
    commune: "Gaiole in Chianti",
    subregion: "Chianti Classico DOCG (11 UGAs)",
    district: "Chianti Classico",
    subregionId: 'chianti-classico',
    districtId: 'chianti-classico',
    lat: 43.4667,
    lng: 11.4333,
    areaHa: 600.00,
    aocDecreeYear: 2021,
    establishedYear: 1141,
    elevationRange: "300m – 600m",
    aspect: "Broad, diverse valleys and dramatic rocky ridges around ancient castles",
    dominantGrape: "Sangiovese",
    grapeRatio: "Sangiovese (min. 90-100%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Chianti Classico UGA",
    baseYield: "52 hl/ha",
    minPotentialAbv: "13.0% vol.",
    soil: "Hard, compact Alberese limestone interbedded with sandstone (Macigno) and Galestro.",
    character: "Stony power, iron minerality, and profound structural longevity: dark red fruits, cedarwood, rosemary, crushed rock, and austere, aristocratic tannins.",
    historicalSignificance: "Barone Bettino Ricasoli created the original 'Chianti Formula' at Castello di Brolio in 1872.",
    benchmarkProducers: ["Castello di Brolio (Ricasoli - Colledilà Gran Selezione)", "Badia a Coltibuono", "Castello di Ama (Vigneto Bellavista & San Lorenzo)", "Riecine", "Capannelle"],
    famousProducers: ["Castello di Ama", "Barone Ricasoli", "Badia a Coltibuono", "Riecine"],
    iconicVineyards: ["Vigneto Bellavista (Ama)", "Colledilà (Brolio Alberese parcel)", "Vigneto La Casuccia"]
  },
  {
    id: 'uga-castellina-in-chianti',
    name: "Castellina in Chianti (Chianti Classico UGA)",
    village: "Castellina in Chianti",
    commune: "Castellina in Chianti",
    subregion: "Chianti Classico DOCG (11 UGAs)",
    district: "Chianti Classico",
    subregionId: 'chianti-classico',
    districtId: 'chianti-classico',
    lat: 43.4750,
    lng: 11.2861,
    areaHa: 650.00,
    aocDecreeYear: 2021,
    establishedYear: 1200,
    elevationRange: "280m – 550m",
    aspect: "Gentle rolling slopes facing west and south towards the Elsa Valley",
    dominantGrape: "Sangiovese",
    grapeRatio: "Sangiovese (min. 90-100%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Chianti Classico UGA",
    baseYield: "52 hl/ha",
    minPotentialAbv: "13.0% vol.",
    soil: "Calcareous clay-limestone marls (margas) with abundant Alberese pebbles and fine clay.",
    character: "Silky, harmonious, and approachable: ripe black cherries, redcurrant, violets, sweet tobacco, and supple, velvety tannins.",
    benchmarkProducers: ["Castello di Fonterutoli (Mazzei - Siepi & Gran Selezione)", "Castellare di Castellina (I Sodi di S. Niccolò)", "Rocca delle Macìe", "Bibbiano", "Pomona"],
    famousProducers: ["Castello di Fonterutoli", "Castellare di Castellina"],
    iconicVineyards: ["I Sodi di San Niccolò (Castellare)", "Vicoregio 36 (Fonterutoli)"]
  },
  {
    id: 'uga-castelnuovo-berardenga',
    name: "Castelnuovo Berardenga (Chianti Classico UGA)",
    village: "Castelnuovo Berardenga",
    commune: "Castelnuovo Berardenga",
    subregion: "Chianti Classico DOCG (11 UGAs)",
    district: "Chianti Classico",
    subregionId: 'chianti-classico',
    districtId: 'chianti-classico',
    lat: 43.3472,
    lng: 11.5028,
    areaHa: 700.00,
    aocDecreeYear: 2021,
    establishedYear: 1300,
    elevationRange: "250m – 450m",
    aspect: "Southernmost tip of Chianti Classico (the 'Butterfly Wings' overlooking the Crete Senesi)",
    dominantGrape: "Sangiovese",
    grapeRatio: "Sangiovese (min. 90-100%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Chianti Classico UGA",
    baseYield: "50 hl/ha",
    minPotentialAbv: "13.5% vol.",
    soil: "Warm clay-limestone with Alberese rock, alluvial sand, and silt bordering the warm southern plain.",
    character: "Dark, ripe, muscular, and Mediterranean: black plum, wild blackberry, espresso, leather, dried herbs, and bold, commanding, structured tannins.",
    benchmarkProducers: ["Fèlsina (Rancia Riserva & Colonia Gran Selezione)", "San Giusto a Rentennano (Percarlo)", "Castello di Bossi", "Tolaini", "Villa a Sesta"],
    famousProducers: ["Fèlsina", "San Giusto a Rentennano"],
    iconicVineyards: ["Rancia (historic Alberese parcel of Fèlsina)", "Colonia", "Percarlo Parcels"]
  },

  // --------------------------------------------------------------------------
  // BRUNELLO DI MONTALCINO 4-QUADRANT BENCHMARK CRUS
  // --------------------------------------------------------------------------
  {
    id: 'montalcino-north-montosoli',
    name: "Montosoli (Brunello di Montalcino Cru - North Quadrant)",
    village: "Montalcino (Northern Slope)",
    commune: "Montalcino",
    subregion: "Montalcino (Brunello & Rosso)",
    district: "Montosoli Hill",
    subregionId: 'montalcino',
    districtId: 'montalcino',
    lat: 43.0806,
    lng: 11.4889,
    areaHa: 20.00,
    aocDecreeYear: 1980,
    establishedYear: 1975,
    elevationRange: "350m – 400m",
    aspect: "Isolated south and south-east facing hill on the northern slope of Montalcino",
    dominantGrape: "Sangiovese Grosso (100%)",
    grapeRatio: "Sangiovese Grosso 100%",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Brunello Grand Cru Benchmark",
    baseYield: "54 hl/ha",
    minPotentialAbv: "13.5% vol.",
    soil: "Marly Galestro schist interbedded with limestone pebbles and clay.",
    character: "Widely considered the single greatest cru hill in Montalcino: ethereal floral bouquet of fresh violets, red cherries, crushed limestone, blood orange, and aristocratic, crystalline tannins with 30+ year longevity.",
    historicalSignificance: "First bottled as a single vineyard cru by Altesino in 1975, creating the modern cru concept in Montalcino.",
    benchmarkProducers: ["Altesino (Brunello di Montalcino Montosoli)", "Canalicchio di Sopra", "Caparzo (La Casa)", "Valdicava (Montosoli parcel)", "Baricci"],
    famousProducers: ["Altesino", "Canalicchio di Sopra", "Caparzo", "Baricci"],
    iconicVineyards: ["Collina di Montosoli (isolated northern hill)", "La Casa (Caparzo)"]
  },
  {
    id: 'montalcino-south-castelnuovo-abate',
    name: "Castelnuovo dell'Abate & Sant'Angelo (Brunello - South Quadrant)",
    village: "Castelnuovo dell'Abate / Sant'Angelo in Colle",
    commune: "Montalcino",
    subregion: "Montalcino (Brunello & Rosso)",
    district: "South Montalcino",
    subregionId: 'montalcino',
    districtId: 'montalcino',
    lat: 42.9917,
    lng: 11.5167,
    areaHa: 250.00,
    aocDecreeYear: 1980,
    establishedYear: 1980,
    elevationRange: "200m – 400m",
    aspect: "Warm south-facing amphitheaters looking towards Monte Amiata and the Orcia River",
    dominantGrape: "Sangiovese Grosso (100%)",
    grapeRatio: "Sangiovese Grosso 100%",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Brunello Grand Cru Benchmark",
    baseYield: "54 hl/ha",
    minPotentialAbv: "14.0% vol.",
    soil: "Alberese limestone mixed with volcanic tuff from Monte Amiata and river gravels.",
    character: "Opulent, sun-drenched, powerful, and voluptuous: dark plum, black cherry, dark chocolate, tobacco, leather, Mediterranean scrub, and rich, broad, velvety tannins.",
    benchmarkProducers: ["Poggio di Sotto (Brunello di Montalcino & Riserva)", "Casanova di Neri (Tenuta Nuova & Cerretalto)", "Mastrojanni (Schiena d'Asino)", "Il Poggione", "Col d'Orcia"],
    famousProducers: ["Poggio di Sotto", "Casanova di Neri", "Mastrojanni", "Il Poggione"],
    iconicVineyards: ["Poggio di Sotto Amphitheater", "Cerretalto (natural amphitheater on the Asso river)", "Tenuta Nuova", "Schiena d'Asino"]
  },
  {
    id: 'montalcino-east-il-greppo',
    name: "Il Greppo (Brunello Historic Benchmark - East Quadrant)",
    village: "Montalcino (Eastern Hillside)",
    commune: "Montalcino",
    subregion: "Montalcino (Brunello & Rosso)",
    district: "Il Greppo",
    subregionId: 'montalcino',
    districtId: 'montalcino',
    lat: 43.0500,
    lng: 11.5000,
    areaHa: 25.00,
    aocDecreeYear: 1980,
    establishedYear: 1888,
    elevationRange: "400m – 570m",
    aspect: "East and south-east facing high-altitude ridge",
    dominantGrape: "Sangiovese Grosso (BBS11 Clone)",
    grapeRatio: "Sangiovese Grosso BBS11 100%",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Historic Cradle of Brunello",
    baseYield: "45 hl/ha",
    minPotentialAbv: "13.5% vol.",
    soil: "Poor, rocky, high-altitude Galestro schist mixed with Alberese limestone.",
    character: "The historic prototype of pure classical Brunello: pale translucent garnet, dried red rose petals, sour cherry, tobacco, leather, crushed stone, and indestructible natural acidity providing 50-100+ year longevity.",
    historicalSignificance: "The birthplace of Brunello di Montalcino: Ferruccio Biondi-Santi isolated the BBS11 clone and produced the first official Brunellos in 1888 and 1891.",
    benchmarkProducers: ["Biondi-Santi (Tenuta Greppo)", "Il Marroneto (Madonna delle Grazie)", "Le Chiuse", "Costanti"],
    famousProducers: ["Biondi-Santi", "Il Marroneto", "Le Chiuse"],
    iconicVineyards: ["Tenuta Greppo (Historic 1888 parcels)", "Madonna delle Grazie (Il Marroneto)", "Le Chiuse (Historic Biondi-Santi Riserva parcel)"]
  },
  {
    id: 'montalcino-west-tavernelle',
    name: "Tavernelle & Camigliano (Brunello - West Quadrant)",
    village: "Tavernelle / Camigliano",
    commune: "Montalcino",
    subregion: "Montalcino (Brunello & Rosso)",
    district: "West Montalcino",
    subregionId: 'montalcino',
    districtId: 'montalcino',
    lat: 43.0250,
    lng: 11.4333,
    areaHa: 150.00,
    aocDecreeYear: 1980,
    establishedYear: 1972,
    elevationRange: "300m – 420m",
    aspect: "West-facing slopes open to the maritime Mediterranean breezes",
    dominantGrape: "Sangiovese Grosso (100%)",
    grapeRatio: "Sangiovese Grosso 100%",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Cult Grand Cru Benchmark",
    baseYield: "45 hl/ha",
    minPotentialAbv: "13.5% vol.",
    soil: "Marine sedimentary clay-silt and sandstone with high organic biodiversity.",
    character: "Ethereal, haunting, unmanipulated natural purity: wild red berries, orange peel, sweet tobacco, leather, forest floor, and silky, gossamer tannins.",
    benchmarkProducers: ["Case Basse di Gianfranco Soldera", "Pian dell'Orino", "Uccelliera", "Le Ragnaie (Vigna del Lago)"],
    famousProducers: ["Case Basse di Gianfranco Soldera", "Pian dell'Orino"],
    iconicVineyards: ["Case Basse (Gianfranco Soldera botanical garden estate)", "Vigna del Lago (Le Ragnaie)"]
  },

  // --------------------------------------------------------------------------
  // BOLGHERI CULT SUPER TUSCAN TERROIRS
  // --------------------------------------------------------------------------
  {
    id: 'bolgheri-sassicaia-terroir',
    name: "Bolgheri Sassicaia (DOC Monopole)",
    village: "Castagneto Carducci",
    commune: "Castagneto Carducci",
    subregion: "Bolgheri & Coastal Maremma",
    district: "Bolgheri",
    subregionId: 'bolgheri-coastal',
    districtId: 'bolgheri',
    lat: 43.2167,
    lng: 10.6000,
    areaHa: 75.00,
    aocDecreeYear: 1994,
    establishedYear: 1968,
    elevationRange: "100m – 300m",
    aspect: "Gently sloping gravel fans beneath the Castiglioncello castle",
    dominantGrape: "Cabernet Sauvignon & Cabernet Franc",
    grapeRatio: "Cabernet Sauvignon (85%), Cabernet Franc (15%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Single-Estate Monopole DOC",
    baseYield: "45 hl/ha",
    minPotentialAbv: "12.5% vol.",
    soil: "Sassicaia ('Place of many stones'): alluvial gravel fans rich in quartz pebbles, limestone marl, and clay at high elevation.",
    character: "The immortal aristocrat of Italy: cassis, wild black cherry, cedarwood, Mediterranean scrub (myrtle, rosemary), graphite, tobacco, and silken, aristocratic tannins.",
    legalNotes: "The only single-estate DOC in Italy dedicated to a single wine (established in 1994, promoted to standalone DOCG equivalent).",
    historicalSignificance: "Planted in 1944 with cuttings from Château Lafite Rothschild by Marchese Mario Incisa della Rocchetta; released commercially with the 1968 vintage, launching the Super Tuscan phenomenon.",
    benchmarkProducers: ["Tenuta San Guido (Incisa della Rocchetta Family)"],
    famousProducers: ["Tenuta San Guido"],
    iconicVineyards: ["San Martino", "Castiglioncello (original 1944 parcel, 300m)", "Mandrioli"]
  },
  {
    id: 'bolgheri-masseto-hill',
    name: "Masseto (Bolgheri Blue Clay Benchmark)",
    village: "Castagneto Carducci",
    commune: "Castagneto Carducci",
    subregion: "Bolgheri & Coastal Maremma",
    district: "Bolgheri",
    subregionId: 'bolgheri-coastal',
    districtId: 'bolgheri',
    lat: 43.2306,
    lng: 10.6278,
    areaHa: 7.00,
    aocDecreeYear: 1986,
    establishedYear: 1986,
    elevationRange: "120m – 140m",
    aspect: "South-west facing hillside overlooking the Tyrrhenian Sea",
    dominantGrape: "Merlot (100%)",
    grapeRatio: "Merlot 100%",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Cult 100% Merlot Benchmark",
    baseYield: "32 hl/ha",
    minPotentialAbv: "14.5% vol.",
    soil: "Masseto Hill: rare outcrop of dense, pliocene blue-grey marine clay (argille azzurre) rich in fossils and iron.",
    character: "The Pétrus of Italy: colossal density, black plum, dark chocolate, espresso, black truffle, cassis, and seamless, decadent, cashmere-fine tannins.",
    legalNotes: "Aged 24 months in 100% new French oak barriques inside a custom subterranean gravity-fed cellar.",
    historicalSignificance: "Conceived by Lodovico Antinori and Russian-American consultant André Tchelistcheff in 1986 against all traditional advice.",
    benchmarkProducers: ["Tenuta dell'Ornellaia (Frescobaldi Family)"],
    famousProducers: ["Masseto"],
    iconicVineyards: ["Masseto Hill (7 ha blue clay mound: Masseto Alto, Centrale, Junior)"]
  }
];

// ============================================================================
// 3. TUSCANY TECHNICAL REGULATIONS & MASTER SOMMELIER SPECIFICATIONS
// ============================================================================

export const TUSCANY_TECHNICAL_REGULATIONS = {
  geology: {
    system: "Northern Apennine Orogeny & Tyrrhenian Coastal Sediments",
    description: "The geological tapestry of Tuscany is the product of the collision between the European and Adria tectonic plates, creating the Apennine chain and exposing marine sedimentary formations from the Cretaceous, Eocene, and Pliocene epochs.",
    formations: [
      {
        name: "Galestro (Flaky Clay-Schist)",
        period: "Upper Cretaceous / Eocene (approx. 70 to 50 Million Years BP)",
        keyAreas: ["Radda in Chianti", "Panzano", "Montalcino (Northern & Eastern slopes)"],
        wineImpact: "A friable, flaky, crumbly schistous clay-marl that exfoliates into thin mineral flakes upon weathering. Regulates soil moisture, allows deep root penetration, and imparts high-toned floral aromatics (violet, iris), bright natural acidity, and fine, mineral-drenched tannins to Sangiovese."
      },
      {
        name: "Alberese (Compact Marly Limestone)",
        period: "Paleocene / Eocene (approx. 60 to 45 Million Years BP)",
        keyAreas: ["Gaiole in Chianti", "Castelnuovo Berardenga", "Montalcino (Southern slopes)"],
        wineImpact: "Hard, compact, crystalline grey-white limestone marl rich in calcium carbonate. Very poor in organic nutrients, forcing low vine yields. Imparts deep structural backbone, powerful dark fruit, firm tannins, and extraordinary 30+ year cellar longevity."
      },
      {
        name: "Macigno Chiantigiano (Tuscan Sandstone)",
        period: "Oligocene / Early Miocene (approx. 30 to 20 Million Years BP)",
        keyAreas: ["Greve in Chianti", "Lamole", "Montefioralle"],
        wineImpact: "Compact, hard quartz-feldspathic sandstone with low calcium content. Produces lighter-colored, highly perfumed, elegant, and earlier-maturing Sangiovese with delicate tannins."
      },
      {
        name: "Argille Azzurre & Alluvial Gravels (Bolgheri Coastal Basin)",
        period: "Pliocene (approx. 5 to 2 Million Years BP)",
        keyAreas: ["Bolgheri (Masseto Hill, San Martino, Castiglioncello)"],
        wineImpact: "Marine blue-grey smectite clays on hillsides and quartz pebble gravel fans on valley flats. Replicates the pedological dynamics of Pomerol and Graves, providing optimal water retention and thermal heat reflection for Bordeaux varieties."
      }
    ]
  },

  climatology: {
    system: "Mediterranean Maritime to Continental Mountainous",
    description: "Tuscany experiences a Mediterranean climate heavily modified by topography. The coastal plain of Bolgheri and the Maremma is bathed in intense luminous sunlight and cooled by Tyrrhenian sea breezes, while the inland mountains of Chianti Classico and Montalcino experience wide diurnal temperature shifts (15–20°C swings between day and night), preserving Sangiovese's vibrant natural acidity and delicate floral polyphenols.",
    winds: [
      {
        name: "Il Maestrale (North-Westerly Coastal Breeze)",
        effect: "Cooling maritime wind that sweeps across the Bolgheri vineyards, moderating extreme summer afternoon heat and preventing grape over-ripening."
      },
      {
        name: "La Tramontana (Northern Mountain Wind)",
        effect: "Crisp, dry alpine wind that flows over the Apennines into Chianti Classico and Montalcino, drying morning dew and eliminating botrytis/fungal disease."
      }
    ]
  },

  grapes: {
    system: "Tuscan Ampelography & Sangiovese Biotype Taxonomy",
    description: "Tuscany is the ancestral empire of Sangiovese, complemented by ancient indigenous blending partners (Canaiolo, Colorino) and international Bordeaux varieties.",
    major: [
      {
        id: 'sangiovese',
        name: "Sangiovese (Sangioveto / Brunello / Prugnolo Gentile)",
        percentage: 85,
        type: "Red",
        epicenter: "Chianti Classico, Montalcino, Montepulciano, Carmignano",
        profile: "Late-ripening, thin skin, translucent ruby hue, high natural tartaric acidity, formidable structural tannins. Aromas of sour red cherry, redcurrant, blood orange, dried oregano, leather, black tea, white truffle, and tobacco leaf.",
        role: "The sovereign soul of Tuscan viticulture.",
        benchmarkCuvees: ["Biondi-Santi Brunello Riserva", "Montevertine Le Pergole Torte", "Fontodi Flaccianello della Pieve"]
      },
      {
        id: 'cabernet-sauvignon',
        name: "Cabernet Sauvignon",
        percentage: 60,
        type: "Red",
        epicenter: "Bolgheri, Maremma, Carmignano, Chianti",
        profile: "Deep ruby, cassis, cedar, graphite, eucalyptus, bell pepper, and dense structural tannins.",
        role: "Foundational pillar of Bolgheri Super Tuscans; historic partner in Carmignano since 1716.",
        benchmarkCuvees: ["Tenuta San Guido Sassicaia", "Antinori Solaia"]
      },
      {
        id: 'merlot',
        name: "Merlot",
        percentage: 40,
        type: "Red",
        epicenter: "Bolgheri, Cortona, Val d'Arno",
        profile: "Opulent black plum, dark chocolate, mocha, violet, and plush, velvety texture.",
        role: "Super Tuscan star (Masseto, Redigaffi) and softening agent in coastal blends.",
        benchmarkCuvees: ["Masseto", "Tua Rita Redigaffi", "Castello di Ama L'Apparita"]
      },
      {
        id: 'vernaccia-di-san-gimignano',
        name: "Vernaccia di San Gimignano",
        percentage: 100,
        type: "White",
        epicenter: "San Gimignano DOCG",
        profile: "Crisp natural acidity, preserved lemon, flint smoke, white flowers, and classic savory bitter almond finish.",
        role: "Tuscany's noble historic white wine.",
        benchmarkCuvees: ["Montenidoli Vernaccia Fiore", "Panizzi Vernaccia Riserva"]
      }
    ],
    heritage: [
      {
        name: "Canaiolo Nero",
        type: "Red",
        epicenter: "Chianti Classico & Carmignano",
        role: "Traditional softening partner to Sangiovese, adding floral perfume, soft fruit, and velvety roundness."
      },
      {
        name: "Colorino",
        type: "Red",
        epicenter: "Chianti Classico",
        role: "Thick-skinned, dark-fleshed variety traditionally used to add deep ruby color and rustic spice."
      },
      {
        name: "Trebbiano Toscano & Malvasia Bianca Lunga",
        type: "White",
        epicenter: "Chianti Classico (Vin Santo)",
        role: "Dried on straw mats (appassimento) to create immortal Vin Santo dessert wines."
      }
    ]
  },

  classification: {
    system: "Tuscan Quality Pyramids & Official Gran Selezione Regulations",
    description: "Tuscany features three world-famous DOCG quality pyramids:",
    pyramid: [
      {
        tier: "Chianti Classico Gran Selezione DOCG (Top Tier)",
        italianTerm: "Chianti Classico Gran Selezione DOCG",
        criteria: "Introduced in 2014 and revised in 2021: strictly 100% estate-grown fruit from a single vineyard or selected estate parcels; minimum 90% Sangiovese, maximum 10% native Tuscan red grapes (no international red grapes like Cabernet or Merlot permitted under 2021 UGA rules); approved by tasting commission.",
        aging: "Minimum 30 months aging (including min. 3 months in bottle)",
        yield: "Strict yield cap: max 45 hl/ha",
        examples: ["Fontodi Vigna del Sorbo", "Castello di Ama Bellavista", "Fèlsina Colonia", "Castello di Brolio Colledilà"]
      },
      {
        tier: "Brunello di Montalcino DOCG & Riserva",
        italianTerm: "Brunello di Montalcino DOCG",
        criteria: "Strictly 100% Sangiovese Grosso grown within the delimited commune of Montalcino.",
        aging: "Annata: min. 5 years total aging (min. 2 years in oak, min. 4 months in bottle), released Jan 1 of 5th year; Riserva: min. 6 years total aging (min. 2 in oak, min. 6 months in bottle), released Jan 1 of 6th year.",
        yield: "Max 54 hl/ha (8,000 kg/ha)",
        examples: ["Biondi-Santi Riserva", "Poggio di Sotto Riserva", "Soldera Case Basse", "Casanova di Neri Cerretalto"]
      },
      {
        tier: "Bolgheri Sassicaia DOCG Equivalent",
        italianTerm: "Bolgheri Sassicaia DOC",
        criteria: "Min. 80% Cabernet Sauvignon grown exclusively within the Tenuta San Guido estate.",
        aging: "Minimum 24 months aging (min. 18 months in 225L French oak barriques).",
        yield: "Max 45 hl/ha",
        examples: ["Tenuta San Guido Sassicaia"]
      },
      {
        tier: "Vin Santo del Chianti Classico DOC",
        italianTerm: "Vin Santo del Chianti Classico",
        criteria: "Trebbiano Toscano and Malvasia grapes air-dried on straw mats (appassimento) until December/February, pressed, and fermented/aged in small sealed wooden barrels (caratelli, 50–200L) for min. 3 to 8 years.",
        aging: "Minimum 3 years (Riserva 4 years, Occhio di Pernice 8 years)",
        yield: "Extremely low (< 15 hl/ha)",
        examples: ["Badia a Coltibuono Vin Santo", "Avignonesi Vin Santo di Montepulciano"]
      }
    ]
  },

  vinification: {
    system: "Slavonian Botti Grandi vs. French Barriques & Concrete",
    description: "Tuscan cellar practices reflect a rich dialogue of traditions:",
    traditions: [
      {
        name: "Slavonian Oak Botti Grandi (Traditional Brunello & Chianti)",
        italianTerm: "Botti Grandi di Rovere di Slavonia",
        description: "Aging in massive 3,000L to 10,000L neutral Slavonian or Austrian oak casks for 2 to 5 years. Minimizes oak tannin extraction, preserves delicate floral Sangiovese perfume, and allows unhurried oxidative micro-breathing.",
        sommelierImpact: "Preserves the pure, pale garnet color and savory leather/tobacco tertiary complexity of classical Brunello."
      },
      {
        name: "225L French Oak Barriques (Super Tuscans)",
        italianTerm: "Barriques Francesi",
        description: "Introduced by Antinori (Tignanello 1971) and Sassicaia: aging Cabernet, Merlot, and modern Sangiovese in 225L Allier and Tronçais oak barrels (30–100% new) for 14–24 months.",
        sommelierImpact: "Imparts sweet vanillin, toasted cedar, espresso, and polished, supple velvet tannins."
      }
    ]
  },

  aging: {
    vintage: {
      minTotalMonths: 60,
      minWoodMonths: 24,
      declarationCapPct: 100,
      rule: "Brunello di Montalcino DOCG requires a minimum of 5 years total aging (6 years for Riserva) before commercial release.",
      description: "Great Brunello and Super Tuscans reach their initial drinking plateau after 10-15 years and evolve majestically for 30-50+ years."
    }
  }
};

// ============================================================================
// 4. TUSCANY PRESTIGE CUVÉES & CULT SUPER TUSCANS
// ============================================================================

export const TUSCANY_PRESTIGE_CUVEES = [
  {
    id: 'tenuta-san-guido-sassicaia',
    name: "Tenuta San Guido 'Sassicaia'",
    producer: "Tenuta San Guido",
    estate: "Tenuta San Guido (Incisa della Rocchetta Family)",
    debutVintage: "1968",
    vintageDebut: "1968",
    appellation: "Bolgheri Sassicaia DOC",
    village: "Castagneto Carducci",
    subregion: "Bolgheri & Coastal Maremma",
    areaHa: 75.00,
    wineType: "Red",
    dominantGrape: "Cabernet Sauvignon & Cabernet Franc",
    grapeComposition: "Cabernet Sauvignon (85%), Cabernet Franc (15%)",
    blend: "Cabernet Sauvignon (85%), Cabernet Franc (15%)",
    classification: "Single-Estate Monopole DOC / The Original Super Tuscan",
    status: "The founding father and aristocratic monarch of Italian Cabernet",
    terroir: "Alluvial gravel terraces (San Martino & Castiglioncello) on coastal hillsides.",
    winemaking: "Aged 24 months in French oak barriques (approx. 40% new).",
    historicalLore: "Planted in 1944 by Marchese Mario Incisa della Rocchetta; launched commercially in 1968 with consulting from Giacomo Tachis.",
    character: "Aristocratic, ethereal, cassis, wild black cherry, cedarwood, rosemary, graphite, tobacco, and silken, seamless, aristocratic tannins of 40+ year longevity.",
    iconicStatus: "The most legendary and iconic fine wine in modern Italian history.",
    prominenceRank: 1
  },
  {
    id: 'masseto-cuvee',
    name: "Masseto (Grand Vin)",
    producer: "Masseto",
    estate: "Tenuta dell'Ornellaia / Masseto (Frescobaldi Family)",
    debutVintage: "1986",
    vintageDebut: "1986",
    appellation: "Toscana IGT",
    village: "Castagneto Carducci",
    subregion: "Bolgheri & Coastal Maremma",
    areaHa: 7.00,
    wineType: "Red",
    dominantGrape: "Merlot (100%)",
    grapeComposition: "Merlot 100%",
    blend: "Merlot 100%",
    classification: "Cult 100% Merlot Benchmark",
    status: "The undisputed Pétrus of Italy",
    terroir: "Masseto Hill: 7-hectare outcrop of dense Pliocene blue clay overlooking the Tyrrhenian Sea.",
    winemaking: "Aged 24 months in 100% new French oak barriques inside a dedicated subterranean gravity-fed cellar.",
    historicalLore: "Created in 1986 by Lodovico Antinori and legendary oenologist André Tchelistcheff.",
    character: "Monumental, opulent, black plum, molten chocolate, espresso, black truffle, cassis, and seamless, decadent, cashmere tannins.",
    iconicStatus: "The most sought-after and valuable Merlot in Italy.",
    prominenceRank: 2
  },
  {
    id: 'marchesi-antinori-tignanello',
    name: "Marchesi Antinori 'Tignanello'",
    producer: "Marchesi Antinori",
    estate: "Tenuta Tignanello (San Casciano in Val di Pesa)",
    debutVintage: "1971",
    vintageDebut: "1971",
    appellation: "Toscana IGT",
    village: "San Casciano in Val di Pesa",
    subregion: "Chianti Classico DOCG",
    areaHa: 57.00,
    wineType: "Red",
    dominantGrape: "Sangiovese & Cabernet",
    grapeComposition: "Sangiovese (80%), Cabernet Sauvignon (15%), Cabernet Franc (5%)",
    blend: "Sangiovese (80%), Cabernet Sauvignon (15%), Cabernet Franc (5%)",
    classification: "The Pioneer of Sangiovese-Barrique Revolution",
    status: "First Sangiovese aged in barriques and blended with non-traditional varieties",
    terroir: "Tenuta Tignanello hillside: limestone-rich Galestro and Alberese rocks at 350m elevation.",
    winemaking: "Aged 14–16 months in French and Hungarian oak barriques.",
    historicalLore: "Created by Marchese Piero Antinori and Giacomo Tachis with the 1971 vintage, breaking Chianti Classico rules to spark the Super Tuscan movement.",
    character: "Red and black cherries, sweet tobacco, vanilla bean, dried violets, leather, and refined, supple, polished tannins.",
    iconicStatus: "The most famous and beloved Super Tuscan in the world.",
    prominenceRank: 3
  },
  {
    id: 'biondi-santi-tenuta-greppo-riserva',
    name: "Biondi-Santi Brunello di Montalcino Riserva",
    producer: "Biondi-Santi",
    estate: "Tenuta Greppo (Montalcino)",
    debutVintage: "1888",
    vintageDebut: "1888",
    appellation: "Brunello di Montalcino Riserva DOCG",
    village: "Montalcino",
    subregion: "Montalcino (Brunello & Rosso)",
    areaHa: 25.00,
    wineType: "Red",
    dominantGrape: "Sangiovese Grosso (BBS11 Clone)",
    grapeComposition: "Sangiovese Grosso 100%",
    blend: "Sangiovese Grosso 100%",
    classification: "The Immortal Sovereign of Brunello di Montalcino",
    status: "The original inventor of Brunello di Montalcino",
    terroir: "Tenuta Greppo: high-altitude (500m) rocky Galestro and Alberese limestone.",
    winemaking: "Sourced strictly from vines over 25 years old; aged 36 months in massive neutral Slavonian oak botti; capable of century-long aging (historic topping-up / ricolmatura ceremonies).",
    historicalLore: "Ferruccio Biondi-Santi created the first official Brunello in 1888. The 1891 Riserva remains immortal.",
    character: "Translucent garnet, haunting dried rose petals, sour cherry, leather, dried orange peel, tobacco, flint, and indestructible natural acidity of 100+ year longevity.",
    iconicStatus: "The foundational monument of Brunello di Montalcino.",
    prominenceRank: 4
  },
  {
    id: 'montevertine-le-pergole-torte',
    name: "Montevertine 'Le Pergole Torte'",
    producer: "Montevertine",
    estate: "Montevertine (Radda in Chianti)",
    debutVintage: "1977",
    vintageDebut: "1977",
    appellation: "Toscana IGT",
    village: "Radda in Chianti",
    subregion: "Chianti Classico DOCG (11 UGAs)",
    areaHa: 2.50,
    wineType: "Red",
    dominantGrape: "Sangiovese (100%)",
    grapeComposition: "Sangiovese 100%",
    blend: "Sangiovese 100%",
    classification: "The Holy Grail of Pure 100% Sangiovese",
    status: "The uncompromising artistic soul of Radda in Chianti",
    terroir: "Original 1968 vineyard planted at 425m elevation on pure friable Galestro schist in Radda.",
    winemaking: "Spontaneous fermentation in concrete vats; aged 12 months in Slavonian botti followed by 12 months in Allier barriques; iconic annual woman portrait labels by artist Alberto Manfredi.",
    historicalLore: "Sergio Manetti left the Chianti Classico consortium in 1981 because the rules then mandated white grapes and prohibited 100% pure Sangiovese.",
    character: "Sublime, crystalline purity: sour red cherry, pomegranate, dried rose, blood orange, tea leaf, crushed rock, and laser-sharp, aristocratic tannins.",
    iconicStatus: "The supreme global benchmark for 100% Sangiovese purity.",
    prominenceRank: 5
  },
  {
    id: 'fontodi-flaccianello-della-pieve',
    name: "Fontodi 'Flaccianello della Pieve'",
    producer: "Fontodi",
    estate: "Tenuta Fontodi (Panzano in Chianti)",
    debutVintage: "1981",
    vintageDebut: "1981",
    appellation: "Colli della Toscana Centrale IGT",
    village: "Panzano in Chianti",
    subregion: "Chianti Classico DOCG (11 UGAs)",
    areaHa: 10.00,
    wineType: "Red",
    dominantGrape: "Sangiovese (100%)",
    grapeComposition: "Sangiovese 100%",
    blend: "Sangiovese 100%",
    classification: "Cult 100% Sangiovese Super Tuscan",
    status: "The monumental power of Panzano's Conca d'Oro",
    terroir: "Conca d'Oro: deep Galestro schist on a south-facing amphitheater in Panzano.",
    winemaking: "Certified 100% organic/biodynamic; aged 24 months in French oak barriques (approx. 80% new).",
    historicalLore: "Created by Giovanni Manetti and legendary oenologist Franco Bernabei in 1981.",
    character: "Monumental, rich, dark cherry, blackberry, violets, graphite, espresso, dark chocolate, and massive, layered, velvety tannins.",
    iconicStatus: "The sovereign titan of Panzano Sangiovese.",
    prominenceRank: 6
  },
  {
    id: 'case-basse-soldera',
    name: "Case Basse di Gianfranco Soldera (100% Sangiovese)",
    producer: "Case Basse",
    estate: "Case Basse di Gianfranco Soldera (Montalcino)",
    debutVintage: "1975",
    vintageDebut: "1975",
    appellation: "Toscana IGT",
    village: "Tavernelle (Montalcino)",
    subregion: "Montalcino (Brunello & Rosso)",
    areaHa: 10.00,
    wineType: "Red",
    dominantGrape: "Sangiovese (100%)",
    grapeComposition: "Sangiovese 100%",
    blend: "Sangiovese 100%",
    classification: "Ultra-Rare Naturalist Cult Masterwork",
    status: "Uncompromising natural viticulture and extreme botanical biodiversity",
    terroir: "Case Basse estate: complex geological mosaic of sandstone, clay, and silt surrounded by a 2-hectare botanical ecosystem.",
    winemaking: "Zero chemical intervention; spontaneous fermentation in Slavonian oak vats without temperature control; aged 4 to 6 years in large neutral Slavonian oak botti.",
    historicalLore: "Gianfranco Soldera (1937–2019) was the uncompromising genius philosopher of pure natural Sangiovese.",
    character: "Unfathomable complexity: translucent ruby, wild strawberry, blood orange, rose hips, white truffle, balsamic herbs, and eternal, vibrating, gossamer tannins.",
    iconicStatus: "Among the most sought-after and expensive cult wines on Earth.",
    prominenceRank: 7
  },
  {
    id: 'isole-e-olena-cepparello',
    name: "Isole e Olena 'Cepparello'",
    producer: "Isole e Olena",
    estate: "Isole e Olena (San Donato in Poggio)",
    debutVintage: "1980",
    vintageDebut: "1980",
    appellation: "Toscana IGT",
    village: "San Donato in Poggio / Barberino Tavarnelle",
    subregion: "Chianti Classico DOCG (11 UGAs)",
    areaHa: 12.00,
    wineType: "Red",
    dominantGrape: "Sangiovese (100%)",
    grapeComposition: "Sangiovese 100%",
    blend: "Sangiovese 100%",
    classification: "Cult 100% Sangiovese Benchmark",
    status: "Masterpiece of balance, red fruit, and precision",
    terroir: "Galestro schist and limestone marl at 400m elevation in the western UGA of San Donato in Poggio.",
    winemaking: "Aged 18–20 months in French oak barriques (approx. 33% new).",
    historicalLore: "Masterminded by Paolo De Marchi in 1980 as one of the original 100% pure Sangiovese Super Tuscans.",
    character: "Silky, harmonious, pure red cherry, dried orange peel, sandalwood, cedar, and fine-grained, cashmere tannins.",
    iconicStatus: "A foundational cornerstone of modern Tuscan greatness.",
    prominenceRank: 8
  }
];

export const TUSCANY_PRESTIGE_ESTATES = TUSCANY_PRESTIGE_CUVEES;

// ============================================================================
// 5. TUSCANY ICONIC ESTATES & BENCHMARK PRODUCERS
// ============================================================================

export const TUSCANY_ICONIC_DOMAINES = [
  {
    id: 'tenuta-san-guido',
    name: "Tenuta San Guido",
    commune: "Castagneto Carducci",
    village: "Bolgheri",
    subregion: "Bolgheri & Coastal Maremma",
    vigneron: "Carlo Paoli & Sebastiano Rosa",
    proprietor: "Incisa della Rocchetta Family",
    wineType: "Red",
    philosophy: "Aristocratic restraint, alluvial gravel expression, and pure Cabernet Sauvignon/Franc elegance; the creator of Sassicaia.",
    keyCuvees: [
      "Bolgheri Sassicaia DOC (The Original Super Tuscan)",
      "Guidalberto (Cabernet/Merlot Blend)",
      "Le Difese (Cabernet/Sangiovese)"
    ],
    iconicVineyards: ["San Martino", "Castiglioncello (1944 original parcel)", "Mandrioli"]
  },
  {
    id: 'tenuta-dell-ornellaia',
    name: "Tenuta dell'Ornellaia & Masseto",
    commune: "Castagneto Carducci",
    village: "Bolgheri",
    subregion: "Bolgheri & Coastal Maremma",
    vigneron: "Marco Balsimelli & Lamberto Frescobaldi",
    proprietor: "Frescobaldi Family",
    wineType: "Red",
    philosophy: "World-class Bordeaux blend precision (Ornellaia) and blue clay 100% Merlot supremacy (Masseto).",
    keyCuvees: [
      "Masseto (100% Merlot Cult Icon)",
      "Ornellaia (Bolgheri Superiore DOC)",
      "Le Serre Nuove dell'Ornellaia",
      "Ornellaia Bianco (Sauvignon Blanc/Gris)"
    ],
    iconicVineyards: ["Masseto Hill (7 ha blue clay)", "Bellaria", "Ornellaia Historic Plots"]
  },
  {
    id: 'marchesi-antinori',
    name: "Marchesi Antinori",
    commune: "San Casciano in Val di Pesa / Bolgheri",
    village: "Bargino",
    subregion: "Chianti Classico & Bolgheri",
    vigneron: "Renzo Cotarella",
    proprietor: "Marchese Piero Antinori & Daughters (Albiera, Allegra, Alessia)",
    wineType: "Dual",
    philosophy: "26 generations of winemaking leadership (since 1385); created Tignanello and Solaia; pioneers of gravity-fed architecture.",
    keyCuvees: [
      "Tignanello (Tenuta Tignanello)",
      "Solaia (100% Cabernet/Sangiovese Cult Icon)",
      "Guado al Tasso (Bolgheri Superiore)",
      "Badia a Passignano (Chianti Classico Gran Selezione)",
      "Cervaro della Sala (Chardonnay/Grechetto)"
    ],
    iconicVineyards: ["Tenuta Tignanello (57 ha)", "Solaia Slope", "Tenuta Guado al Tasso"]
  },
  {
    id: 'biondi-santi',
    name: "Biondi-Santi (Tenuta Greppo)",
    commune: "Montalcino",
    village: "Montalcino",
    subregion: "Montalcino",
    vigneron: "Federico Radi",
    proprietor: "EPI Group (Descours Family)",
    wineType: "Red",
    philosophy: "The historic inventors of Brunello di Montalcino; BBS11 clone selection, long aging in large Slavonian botti, and century longevity.",
    keyCuvees: [
      "Brunello di Montalcino Riserva (Historic 1888 Legacy)",
      "Brunello di Montalcino Annata",
      "Rosso di Montalcino"
    ],
    iconicVineyards: ["Tenuta Greppo (Historic parcels 500m elevation)"]
  },
  {
    id: 'poggio-di-sotto',
    name: "Poggio di Sotto",
    commune: "Castelnuovo dell'Abate",
    village: "Montalcino",
    subregion: "Montalcino",
    vigneron: "Luca Marrone",
    proprietor: "Claudio Tipa (ColleMassari)",
    wineType: "Red",
    philosophy: "Traditionalist summit in southern Montalcino; spontaneous fermentation, very long maceration, and years in large neutral botti.",
    keyCuvees: [
      "Brunello di Montalcino Riserva",
      "Brunello di Montalcino DOCG",
      "Rosso di Montalcino"
    ],
    iconicVineyards: ["Castelnuovo dell'Abate Natural Amphitheater"]
  },
  {
    id: 'fontodi',
    name: "Tenuta Fontodi",
    commune: "Panzano in Chianti",
    village: "Panzano in Chianti",
    subregion: "Chianti Classico (Panzano UGA)",
    vigneron: "Giovanni Manetti & Franco Bernabei",
    proprietor: "Famiglia Manetti",
    wineType: "Red",
    philosophy: "100% organic and biodynamic in the Conca d'Oro; pure Sangiovese power in Flaccianello and Vigna del Sorbo Gran Selezione.",
    keyCuvees: [
      "Flaccianello della Pieve (100% Sangiovese Cult)",
      "Chianti Classico Gran Selezione 'Vigna del Sorbo'",
      "Chianti Classico Gran Selezione 'Terrazze San Leolino'",
      "Chianti Classico Filetta di Lamole"
    ],
    iconicVineyards: ["Conca d'Oro Amphitheater", "Vigna del Sorbo (old vines)", "Flaccianello Hill"]
  },
  {
    id: 'felsina',
    name: "Fèlsina",
    commune: "Castelnuovo Berardenga",
    village: "Castelnuovo Berardenga",
    subregion: "Chianti Classico (Castelnuovo Berardenga UGA)",
    vigneron: "Giovanni Poggiali",
    proprietor: "Famiglia Poggiali",
    wineType: "Red",
    philosophy: "Masters of Sangiovese on the southern frontier of Chianti Classico; Rancia limestone cru and 100% Sangiovese Fontalloro.",
    keyCuvees: [
      "Chianti Classico Gran Selezione 'Colonia'",
      "Chianti Classico Riserva 'Rancia'",
      "Fontalloro (100% Sangiovese IGT)",
      "Vin Santo del Chianti Classico"
    ],
    iconicVineyards: ["Rancia (Historic Alberese plateau)", "Colonia", "Poggio al Sole"]
  },
  {
    id: 'castello-di-ama',
    name: "Castello di Ama",
    commune: "Gaiole in Chianti",
    village: "Gaiole in Chianti",
    subregion: "Chianti Classico (Gaiole UGA)",
    vigneron: "Marco Pallanti & Lorenza Sebasti",
    proprietor: "Sebasti & Pallanti Families",
    wineType: "Dual",
    philosophy: "Pioneered single-vineyard Gran Selezione (Vigneto Bellavista) and Italy's first cult 100% Merlot (L'Apparita).",
    keyCuvees: [
      "Chianti Classico Gran Selezione 'Vigneto Bellavista'",
      "Chianti Classico Gran Selezione 'Vigneto La Casuccia'",
      "Chianti Classico Gran Selezione 'San Lorenzo'",
      "L'Apparita (100% Merlot Cult Icon)"
    ],
    iconicVineyards: ["Vigneto Bellavista (1978 parcel, 500m)", "Vigneto La Casuccia", "L'Apparita Hilltop"]
  }
];

// ============================================================================
// 6. TUSCANY GASTRONOMIC FOOD PAIRINGS (COLOR-CODED)
// ============================================================================

export const TUSCANY_FOOD_PAIRINGS = [
  {
    category: "Florentine Steaks & Oak Grilling",
    wineType: "Red",
    targetWine: "Chianti Classico Gran Selezione or Super Tuscan (Fontodi Flaccianello / Tignanello)",
    dish: "Bistecca alla Fiorentina (Thick 2-Inch Chianina T-Bone Steak Charbroiled over Oak Coals with Rosemary, Extra Virgin Olive Oil & Flaky Sea Salt)",
    note: "The quintessential pairing of Tuscany: rare beef protein and charred crust neutralize Sangiovese's firm, youthfully aggressive tannins, while olive oil highlights the wine's savory dried herbs and dark cherry fruit.",
    glassware: "Bordeaux Grand Cru stem (750-850ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1.5–2 hours before service for bottles under 15 years."
  },
  {
    category: "Wild Game Stews & Pici Pasta",
    wineType: "Red",
    targetWine: "Brunello di Montalcino DOCG (Biondi-Santi / Poggio di Sotto)",
    dish: "Handmade Sienese Pici Pasta with Slow-Braised Wild Boar Ragù (Cinghiale in Umido) & Juniper Berries",
    note: "The intense gaminess, juniper reduction, and dark meat of wild boar find a perfect match in the tobacco, leather, and black tea complexity of mature Sangiovese Grosso.",
    glassware: "Large Burgundy / Sangiovese stem (700-800ml)",
    servingTemp: "17–18°C (62–64°F)",
    decanting: "Decant 2 hours before service."
  },
  {
    category: "Tuscan Black Pepper Beef Stew",
    wineType: "Red",
    targetWine: "Carmignano DOCG or Bolgheri Superiore (Tenuta San Guido Sassicaia / Capezzana)",
    dish: "Peposo all'Imprunetina (Tuscan Beef Shank Stewed with Whole Black Peppercorns, Garlic & Red Wine in Terracotta)",
    note: "The pungent warmth of cracked black pepper and rich beef shank resonates with the spicy Cabernet-Sangiovese architecture of Carmignano and Bolgheri.",
    glassware: "Bordeaux Grand Cru stem",
    servingTemp: "16–17°C (60–63°F)",
    decanting: "Decant 1 hour before service."
  },
  {
    category: "Livornese Seafood Stew & Tuscan Whites",
    wineType: "White",
    targetWine: "Vernaccia di San Gimignano Riserva (Montenidoli Fiore / Panizzi)",
    dish: "Cacciucco alla Livornese (Spicy Tuscan Seafood Stew with Red Mullet, Squid, Mussels, Tomato & Garlic Crostini)",
    note: "The savory richness, tomato broth, and chili warmth of Cacciucco demand a structured, mineral white wine with bracing acidity and an almond finish.",
    glassware: "White Wine stem (400-500ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not required."
  },
  {
    category: "Artisanal Tuscan Almond Cantucci & Vin Santo",
    wineType: "White",
    targetWine: "Vin Santo del Chianti Classico DOC (Badia a Coltibuono / Fèlsina)",
    dish: "Cantucci di Prato (Twice-Baked Tuscan Almond Biscotti) dipped into Vin Santo del Chianti Classico",
    note: "The legendary Tuscan ritual: crunchy, twice-baked almond biscotti soften as they are dipped into the oxidative, nutty amber nectar of aged Vin Santo.",
    glassware: "Dessert / Tulip stem (250-350ml)",
    servingTemp: "12–14°C (54–57°F)",
    decanting: "Not required."
  }
];
