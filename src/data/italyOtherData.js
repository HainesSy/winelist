/**
 * ============================================================================
 * ITALY OTHER SOMMELIER DATASET (CMS LEVEL 3 / MASTER SOMMELIER STANDARD)
 * ============================================================================
 * 
 * Comprehensive dataset covering Italy's premier regional terroirs beyond
 * Piedmont and Tuscany:
 *   - Veneto: Valpolicella Classica (Amarone Appassimento, Ripasso, Recioto),
 *             Soave Classico (Volcanic Basalt Garganega), Prosecco Superiore
 *   - Sicily: Mount Etna DOC Contrade (Nerello Mascalese, Carricante),
 *             Cerasuolo di Vittoria DOCG, Pantelleria
 *   - Lombardia: Valtellina Superiore DOCG (Alpine Chiavennasca/Nebbiolo Granite),
 *                Franciacorta DOCG (Metodo Classico)
 *   - Alto Adige / Südtirol: Dolomitic Limestone & Porphyry (Pinot Bianco, Lagrein)
 *   - Friuli-Venezia Giulia: Collio & Colli Orientali (Ponca Flysch, Macerated Ribolla)
 *   - Campania: Taurasi DOCG ("Barolo of the South" Aglianico), Fiano & Greco di Tufo
 * ============================================================================
 */

export const ITALY_OTHER_SUBREGIONS = [
  {
    id: 'veneto-valpolicella',
    name: "Valpolicella & Amarone (Veneto)",
    district: "Veneto",
    lat: 45.5200,
    lng: 10.9200,
    terroir: "Limestone valleys and dark volcanic basalt terraces stretching north from Verona toward the Lessini Mountains.",
    focus: "Amarone della Valpolicella Classico, Valpolicella Ripasso, Recioto della Valpolicella, Soave Classico: Giuseppe Quintarelli, Romano Dal Forno, Pieropan, Allegrini, Masi, Tommasi.",
    geology: "Cretaceous Scaglia Rossa limestone, Eocene marls, and dark volcanic basalt.",
    dominantGrapes: "Corvina (primary), Corvinone, Rondinella, Oseleta, Garganega (Soave)",
    microTerroirs: [
      { name: "Valpolicella Classica", focus: "5 historic valley communes: Negrar, Marano, Fumane, Sant'Ambrogio, San Pietro in Cariano" },
      { name: "Soave Classico Hillside", focus: "Dark volcanic basalt and ancient limestone hills producing laser-pure Garganega (Calvarino, La Rocca)" },
      { name: "Conegliano Valdobbiadene", focus: "Steep dramatic Rive hillsides and Cartizze producing elite Prosecco Superiore DOCG" }
    ],
    description: "The home of Appassimento mastery. Opulent dried-grape Amarone, velvety Ripasso, and flinty, almond-laced volcanic Soave Classico."
  },
  {
    id: 'sicily-etna',
    name: "Sicily & Mount Etna (Etna DOC)",
    district: "Sicily (Sicilia)",
    lat: 37.7500,
    lng: 15.0000,
    terroir: "High-altitude volcanic ash, black pumice, decomposed lava flows (sciare), and sand up to 1,000m+ elevation on Europe's highest active volcano.",
    focus: "Nerello Mascalese (Etna Rosso) & Carricante (Etna Bianco): Contrade single-vineyard crus: Passopisciaro, Calderara Sottana, Feudo di Mezzo, Rampante, Arcurìa, San Lorenzo, Guardiola, Porcaria; Tenuta delle Terre Nere, Passopisciaro (Franchetti), Pietradolce, Benanti, Donnafugata, Graci.",
    geology: "Quaternary to modern stratified volcanic basalt, tephra, pumice, and decomposed lava beds (sciare).",
    dominantGrapes: "Nerello Mascalese, Nerello Cappuccio, Carricante, Nero d'Avola, Frappato",
    microTerroirs: [
      { name: "Versante Nord (Northern Slopes)", focus: "Castiglione di Sicilia, Randazzo, Passopisciaro - the Grand Cru epicenter of Etna Rosso Contrade" },
      { name: "Versante Est (Eastern Slopes - Milo)", focus: "Cool maritime slopes dedicated to 100% Carricante Etna Bianco Superiore" },
      { name: "Vittoria (Southeastern Sicily)", focus: "Red limestone sands producing fragrant, red-berried Cerasuolo di Vittoria DOCG (Nero d'Avola + Frappato)" }
    ],
    description: "Volcanic Mediterranean summit. The 'Burgundy of the South' crafting wild strawberry, volcanic ash, iron, and blood orange reds alongside laser-pure Carricante."
  },
  {
    id: 'lombardia-valtellina',
    name: "Valtellina (Lombardia Alpine Nebbiolo)",
    district: "Lombardia",
    lat: 46.1700,
    lng: 9.8700,
    terroir: "Perilous south-facing granite terraces overlooking the Adda River in the Alps, supported by ancient dry-stone walls (muretti a secco).",
    focus: "Nebbiolo (Chiavennasca): Valtellina Superiore DOCG (Grumello, Inferno, Sassella, Valgella, Maroggia) & Sfursat / Sforzato di Valtellina DOCG: AR.PE.PE., Nino Negri, Rainoldi, Sandro Fay.",
    geology: "Metamorphic granite bedrock, mica-schist, and sandy acidic topsoil.",
    dominantGrapes: "Nebbiolo (Chiavennasca 90%+), Rossola, Pignola",
    microTerroirs: [
      { name: "Sassella Sub-Zone", focus: "Rocky, warm, sun-drenched granite cliffs producing perfumed, aristocratic, long-lived Nebbiolos (AR.PE.PE. Rocce Rosse)" },
      { name: "Inferno Sub-Zone", focus: "Steepest, scorching microclimate yielding powerful, savory, and structured Alpine wines" },
      { name: "Grumello Sub-Zone", focus: "Surrounding the medieval castle, producing balanced, floral red-fruit expressions" }
    ],
    description: "Alpine Nebbiolo of astonishing purity, dried rose petals, alpine cranberries, pine herbs, and chiseled granite tension."
  },
  {
    id: 'alto-adige-sudtirol',
    name: "Alto Adige / Südtirol (Italian Alps)",
    district: "Trentino-Alto Adige",
    lat: 46.4500,
    lng: 11.2800,
    terroir: "Steep Alpine mountain slopes between the Dolomites and the Austrian border, combining cool glacial air with intense alpine sunshine.",
    focus: "Pinot Bianco, Sauvignon Blanc, Pinot Nero, Lagrein, Gewürztraminer, Terlano: Cantina Terlano, Elena Walch, Alois Lageder, Tiefenbrunner, Cantina Tramin.",
    geology: "Dolomitic limestone, Bolzano quartz porphyry, and gravelly glacial moraine.",
    dominantGrapes: "Pinot Bianco, Lagrein, Gewürztraminer, Sauvignon Blanc, Pinot Nero",
    microTerroirs: [
      { name: "Terlano & Vorberg", focus: "Red quartz porphyry hillsides producing mineral-dusted, decades-long cellaring Pinot Bianco (Vorberg)" },
      { name: "Gries & Bolzano Basin", focus: "Warm valley floor gravels producing inky, black-fruited, velvety Lagrein" },
      { name: "Termeno / Tramin", focus: "Historical birthplace of exotic, rose-scented Gewürztraminer" }
    ],
    description: "Pristine Alpine perfection. Laser-cut, mineral Pinot Bianco, aromatic Gewürztraminer, and inky, savory Lagrein against the backdrop of the Dolomites."
  },
  {
    id: 'friuli-venezia-giulia',
    name: "Friuli-Venezia Giulia (Collio & Colli Orientali)",
    district: "Friuli-Venezia Giulia",
    lat: 46.0000,
    lng: 13.5000,
    terroir: "Layered Eocene marls and sandstones known locally as 'Ponca' (Flysch di Cormòns) bordering Slovenia.",
    focus: "Friulano, Ribolla Gialla (Macerated Orange Wines), Sauvignon Blanc, Refosco, Pignolo: Josko Gravner, Stanko Radikon, Livio Felluga, Schiopetto, Jermann, Vie di Romans.",
    geology: "Eocene Flysch (Ponca) alternating strata of calcareous marl and sandstone.",
    dominantGrapes: "Friulano, Ribolla Gialla, Sauvignon, Pinot Grigio, Refosco dal Peduncolo Rosso",
    microTerroirs: [
      { name: "Collio Goriziano (Oslavia)", focus: "Epicenter of ancestral skin-contact amber/orange wines vinified in Georgian amphorae (Gravner, Radikon)" },
      { name: "Friuli Colli Orientali", focus: "Terraced hills yielding benchmark mineral Friulano, Sauvignon, and indigenous red Pignolo" },
      { name: "Carso (Karst)", focus: "Bleached limestone plateau producing savory, saline, skin-macerated Vitovska and Malvasia" }
    ],
    description: "The intellectual capital of Italian white and orange winemaking. Home to ancestral skin-maceration amphorae and chiseled Ponca soil whites."
  },
  {
    id: 'campania-irpinia',
    name: "Campania (Taurasi, Greco & Fiano)",
    district: "Campania",
    lat: 40.9500,
    lng: 14.9500,
    terroir: "High-altitude inland Apennine mountains in Irpinia covered with volcanic ash and pumice deposits from Mount Vesuvius over limestone bedrock.",
    focus: "Taurasi DOCG (Aglianico), Fiano di Avellino DOCG, Greco di Tufo DOCG: Mastroberardino, Feudi di San Gregorio, Quintodecimo, Luigi Tecce, Pietracupa.",
    geology: "Volcanic tuff (Tufo giallo), tephra, sulfur-rich ash, and Cretaceous limestone.",
    dominantGrapes: "Aglianico, Fiano, Greco, Falanghina",
    microTerroirs: [
      { name: "Taurasi & Montemarano", focus: "High-elevation (400–700m) volcanic clay slopes yielding the muscular, 30-year aging 'Barolo of the South' (Aglianico)" },
      { name: "Tufo & Santa Paolina", focus: "Sulfur-rich volcanic tuff hillsides producing laser-acid, mineral Greco di Tufo" },
      { name: "Lapio & Montefredane", focus: "Ancient volcanic hills yielding smoky, hazelnut, age-worthy Fiano di Avellino" }
    ],
    description: "The ancient jewel of Southern Italy. Majestic Aglianico in Taurasi alongside smoky, mineral-rich, age-defying volcanic whites."
  }
];

export const ITALY_OTHER_GRAND_CRUS = [
  // ==========================================
  // VENETO (AMARONE & SOAVE CLASSICO)
  // ==========================================
  {
    id: 'veneto-amarone-classico',
    name: "Amarone della Valpolicella Classico DOCG",
    village: "Negrar / Fumane / Marano",
    commune: "Valpolicella Classica",
    subregion: "Veneto",
    district: "Veneto",
    subregionId: 'veneto-valpolicella',
    districtId: 'veneto-valpolicella',
    lat: 45.5333,
    lng: 10.9333,
    areaHa: 7500.00,
    aocDecreeYear: 2010,
    establishedYear: 1936,
    elevationRange: "150m – 500m",
    aspect: "South / South-West terraced hillsides facing Lake Garda",
    dominantGrape: "Corvina & Corvinone",
    grapeRatio: "Corvina (45-95%), Corvinone (up to 50%), Rondinella (5-30%), Oseleta (up to 10%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 DOCG Appassimento",
    baseYield: "24–30 hl/ha (after drying)",
    minPotentialAbv: "14.0% vol. (typically 15.5–16.5%)",
    soil: "Cretaceous Scaglia Rossa limestone and volcanic basalt terraces",
    character: "Monumental, opulent, and multi-layered. Dried black cherry, fig, dark chocolate, tobacco, dried herbs, and velvet, unctuous power.",
    legalNotes: "Appassimento drying mandatory for 90–120 days until grapes lose 35–40% weight. Minimum 2 years aging (4 years for Riserva).",
    historicalSignificance: "Celebrated since Roman times (Acinatico / Recioto); 'Amarone' name coined in 1936 at Villa Novare.",
    benchmarkProducers: ["Giuseppe Quintarelli", "Romano Dal Forno (Monte Lodoletta)", "Allegrini (La Poja)", "Masi (Costasera, Campolongo di Torbe)", "Tommasi", "Bertani", "Speri"],
    famousProducers: ["Giuseppe Quintarelli", "Romano Dal Forno", "Allegrini", "Masi", "Tommasi", "Bertani"],
    iconicVineyards: ["Monte Lodoletta (Dal Forno)", "Campolongo di Torbe", "Mazzano", "La Poja (100% Corvina)"]
  },
  {
    id: 'veneto-soave-classico',
    name: "Soave Classico DOC (Calvarino & La Rocca)",
    village: "Soave / Monteforte d'Alpone",
    commune: "Soave Classico",
    subregion: "Veneto",
    district: "Veneto",
    subregionId: 'veneto-valpolicella',
    districtId: 'veneto-valpolicella',
    lat: 45.4200,
    lng: 11.2500,
    areaHa: 1100.00,
    aocDecreeYear: 1968,
    establishedYear: 1931,
    elevationRange: "100m – 350m",
    aspect: "Steep volcanic hillsides around medieval Castello di Soave",
    dominantGrape: "Garganega (70–100%)",
    grapeRatio: "Garganega (85%), Trebbiano di Soave (15%)",
    wineType: "White",
    tier: "grandCru",
    badge: "👑 Volcanic Classico",
    baseYield: "60–70 hl/ha",
    minPotentialAbv: "12.0% vol.",
    soil: "Dark volcanic basalt rock (Calvarino) and Jurassic limestone (La Rocca)",
    character: "Pristine white almond, preserved Meyer lemon, elderflower blossom, wet slate minerality, and crisp, flinty salinity.",
    legalNotes: "Strictly delimited to the historic hillside communes of Soave and Monteforte d'Alpone.",
    historicalSignificance: "Pieropan established single-vineyard Calvarino in 1971, revolutionizing Italian fine white wine.",
    benchmarkProducers: ["Pieropan (Calvarino, La Rocca)", "Inama (Vigneti di Foscarino)", "Gini (La Froscà)", "Suavia (Monte Carbonare)", "Ca' Rugate"],
    famousProducers: ["Pieropan", "Inama", "Gini", "Suavia"],
    iconicVineyards: ["Calvarino Vineyard (Volcanic Basalt)", "La Rocca Vineyard (Limestone)", "Monte Carbonare", "Foscarino"]
  },

  // ==========================================
  // SICILY (MOUNT ETNA CONTRADE)
  // ==========================================
  {
    id: 'sicily-etna-rosso-contrade',
    name: "Etna Rosso DOC (Grand Cru Contrade)",
    village: "Castiglione di Sicilia / Randazzo / Passopisciaro",
    commune: "Etna Nord",
    subregion: "Sicily & Mount Etna (Etna DOC)",
    district: "Sicily (Sicilia)",
    subregionId: 'sicily-etna',
    districtId: 'sicily-etna',
    lat: 37.7833,
    lng: 15.0500,
    areaHa: 1200.00,
    aocDecreeYear: 1968,
    establishedYear: 1900,
    elevationRange: "450m – 1,000m+",
    aspect: "North / North-East volcanic terraces facing Mount Etna caldera",
    dominantGrape: "Nerello Mascalese (80%+)",
    grapeRatio: "Nerello Mascalese (~90%), Nerello Cappuccio (~10%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "🌋 Volcanic Contrade Crus",
    baseYield: "35–45 hl/ha",
    minPotentialAbv: "13.0% vol.",
    soil: "Decomposed volcanic lava flows (sciare), black pumice, basalt gravel, and iron-rich volcanic ash",
    character: "The 'Burgundy of the Mediterranean': translucent ruby hue, wild alpine strawberry, volcanic ash, iron, blood orange, tea leaf, and vibrant, crystalline tannins.",
    legalNotes: "Official recognition of 133 Contrade (single-vineyard crus) on the volcanic slopes.",
    historicalSignificance: "Andrea Franchetti (Passopisciaro) and Marco de Grazia (Tenuta delle Terre Nere) pioneered the single-Contrada crus starting in 2001.",
    benchmarkProducers: ["Tenuta delle Terre Nere", "Passopisciaro (Vini Franchetti)", "Pietradolce (Vigna Barbagalli)", "Benanti", "Graci", "Girolamo Russo", "Frank Cornelissen"],
    famousProducers: ["Tenuta delle Terre Nere", "Passopisciaro", "Pietradolce", "Benanti", "Graci"],
    iconicVineyards: ["Contrada Calderara Sottana (Prephylloxera)", "Contrada San Lorenzo", "Contrada Rampante", "Contrada Sciaranuova", "Contrada Porcaria"]
  },

  // ==========================================
  // LOMBARDIA (VALTELLINA SUPERIORE)
  // ==========================================
  {
    id: 'lombardia-valtellina-superiore',
    name: "Valtellina Superiore DOCG (Sassella / Inferno / Grumello)",
    village: "Sondrio / Chiuro",
    commune: "Valtellina",
    subregion: "Valtellina (Lombardia Alpine Nebbiolo)",
    district: "Lombardia",
    subregionId: 'lombardia-valtellina',
    districtId: 'lombardia-valtellina',
    lat: 46.1700,
    lng: 9.8700,
    areaHa: 850.00,
    aocDecreeYear: 1998,
    establishedYear: 1860,
    elevationRange: "250m – 650m",
    aspect: "Vertiginous south-facing granite terraces overlooking the Adda River",
    dominantGrape: "Nebbiolo (Chiavennasca 90%+)",
    grapeRatio: "Nebbiolo (Chiavennasca 90%+), Rossola (up to 10%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "🏔️ Alpine Granite DOCG",
    baseYield: "35–45 hl/ha",
    minPotentialAbv: "12.5% vol. (13.0% Riserva)",
    soil: "Decomposed granite, quartz, mica-schist, and thin acidic sand supported by 2,500km of dry-stone walls (muretti a secco)",
    character: "Alpine Nebbiolo of ethereal refinement. Dried rose petals, mountain cranberries, alpine herbs, pine needle, and chiseled granite tension with 30-year aging grace.",
    legalNotes: "5 official sub-zones: Sassella, Inferno, Grumello, Valgella, Maroggia. Minimum 24 months aging (12 in wood); Riserva min 36 months.",
    historicalSignificance: "Continuous terraced viticulture since the Roman era; AR.PE.PE. founded in 1860 by the Pelizzatti family.",
    benchmarkProducers: ["AR.PE.PE. (Rocce Rosse, Buon Consiglio)", "Nino Negri (Sfursat 5 Stelle)", "Rainoldi", "Sandro Fay (Carterìa, Ronco del Picchio)", "Dirupi"],
    famousProducers: ["AR.PE.PE.", "Nino Negri", "Rainoldi", "Sandro Fay", "Dirupi"],
    iconicVineyards: ["Rocce Rosse (Sassella)", "Buon Consiglio (Grumello)", "Vigna Regina", "Carterìa"]
  },

  // ==========================================
  // CAMPANIA (TAURASI DOCG)
  // ==========================================
  {
    id: 'campania-taurasi-docg',
    name: "Taurasi DOCG ('The Barolo of the South')",
    village: "Taurasi / Montemarano / Castelfranci",
    commune: "Irpinia",
    subregion: "Campania (Taurasi, Greco & Fiano)",
    district: "Campania",
    subregionId: 'campania-irpinia',
    districtId: 'campania-irpinia',
    lat: 40.9500,
    lng: 14.9667,
    areaHa: 1000.00,
    aocDecreeYear: 1993,
    establishedYear: 1878,
    elevationRange: "350m – 700m",
    aspect: "High inland volcanic hillside amphitheaters in the Southern Apennines",
    dominantGrape: "Aglianico (85–100%)",
    grapeRatio: "Aglianico (100% in top cuvées)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 DOCG Southern Titan",
    baseYield: "35–45 hl/ha",
    minPotentialAbv: "12.5% vol. (typically 14.0–15.0%)",
    soil: "Deep volcanic tephra, ash, and pumice layers over calcareous marl and limestone",
    character: "Colossal structure and dark complexity. Blackberry liqueur, black pepper, leather, pipe tobacco, scorched earth, graphite, and formidable, ageworthy tannins built for 40+ years.",
    legalNotes: "First DOCG in Southern Italy (1993). Minimum 3 years aging (1 in wood); Riserva min 4 years (18 months in wood).",
    historicalSignificance: "Mastroberardino preserved Aglianico through phylloxera and World War II, releasing legendary 1968 Radici Taurasi.",
    benchmarkProducers: ["Mastroberardino (Radici Taurasi Riserva)", "Feudi di San Gregorio (Serpico, Piano di Montevergine)", "Quintodecimo (Vigna Quintodecimo)", "Luigi Tecce (Poliphemo)", "Perillo"],
    famousProducers: ["Mastroberardino", "Feudi di San Gregorio", "Quintodecimo", "Luigi Tecce"],
    iconicVineyards: ["Montemarano High Slope (650m)", "Piano di Montevergine", "Vigna Quintodecimo", "Puro Sangue"]
  }
];

export const ITALY_OTHER_TECHNICAL_REGULATIONS = {
  geology: {
    summary: "Across northern, central, and southern Italy outside Piedmont and Tuscany, viticulture thrives on ancient tectonic fault lines: Alpine granite in Valtellina, volcanic basalt in Veneto, active volcanic lava in Mount Etna, Eocene flysch (Ponca) in Friuli, and volcanic tuff in Campania.",
    formations: [
      {
        name: "Mount Etna Stratified Volcanic Lava (Sciare) & Pumice",
        period: "Quaternary to Present (Holocene)",
        keyAreas: ["Etna DOC (Castiglione di Sicilia, Randazzo, Milo)"],
        wineImpact: "Loose volcanic ash, lapilli, black pumice, and decomposed basalt. Free drainage and potassium/magnesium richness impart wild strawberry perfume, iron backbone, and vibrant acidity."
      },
      {
        name: "Veneto Volcanic Basalt & Scaglia Rossa Limestone",
        period: "Cretaceous to Eocene",
        keyAreas: ["Soave Classico", "Valpolicella Classica (Lessini Foothills)"],
        wineImpact: "Black volcanic basalt yields smoky, flinty, almond-dusted Garganega, while Scaglia Rossa limestone delivers structural elegance and longevity."
      },
      {
        name: "Alpine Granite & Metamorphic Mica-Schist (Valtellina)",
        period: "Paleozoic to Mesozoic (Alpine Orogeny)",
        keyAreas: ["Valtellina Superiore (Sassella, Inferno, Grumello)"],
        wineImpact: "Thin, acidic granite sand on perilous terraced slopes. Forces Nebbiolo roots into bedrock fissures, yielding crystalline alpine red fruits and chiseled minerality."
      },
      {
        name: "Friuli Flysch / Ponca (Layered Marl & Sandstone)",
        period: "Eocene (~45–50 Ma)",
        keyAreas: ["Collio Goriziano", "Friuli Colli Orientali"],
        wineImpact: "Alternating friable calcareous marl and sandstone crumbling under weather to release micro-nutrients, delivering profound mineral tension to skin-contact orange and white wines."
      }
    ]
  },

  climatology: {
    system: "Alpine-to-Mediterranean Microclimatic Spectrum",
    description: "Spanning high-altitude alpine valleys cooled by mountain glaciers (Valtellina, Alto Adige) to maritime-cooled volcanic mountain peaks (Mount Etna) and sun-drenched southern hills (Campania).",
    winds: [
      {
        name: "Ora del Garda (Lake Garda)",
        effect: "Thermal lake breeze that ventilates the Valpolicella and Trentino hills, drying grapes and enabling rot-free Appassimento drying."
      },
      {
        name: "Bora Wind (Friuli & Adriatic)",
        effect: "Cold, dry, violent katabatic wind blowing from Eastern Europe across the Carso and Collio, keeping grape canopies dry and free from fungal disease."
      },
      {
        name: "Etna Thermal Altitudinal Shift",
        effect: "Extreme 35–45°F diurnal shifts at 800m+ altitude on Mount Etna, preserving high malic and tartaric acidity under intense Sicilian sunshine."
      }
    ]
  },

  vinification: {
    system: "Ancient Heritage Enological Traditions",
    description: "Italy Other is renowned for world-historic winemaking methods passed down for millennia.",
    traditions: [
      {
        name: "Appassimento Method (Valpolicella & Amarone)",
        frenchTerm: "Appassimento",
        description: "Harvested grape bunches are laid out on bamboo racks (fruttai / arelle) for 90–120 days across the winter, losing 35–40% of their water weight, concentrating sugars, dry extract, glycerin, and complex aromatics before slow winter fermentation.",
        sommelierImpact: "Creates dry red wines (Amarone) of colossal 15–16.5% ABV, layered with dried black cherries, fig, dark chocolate, and velvety unctuousness."
      },
      {
        name: "Ripasso Technique",
        frenchTerm: "Ripasso",
        description: "Standard young Valpolicella wine is re-passed / macerated over the warm, unpressed pomace (skins and seeds) of Amarone or Recioto for 10–15 days.",
        sommelierImpact: "Extracts additional tannins, color, alcohol, and dried-fruit complexity, creating a bridge between fresh Valpolicella and powerful Amarone."
      },
      {
        name: "Skin-Macerated Orange Wines in Georgian Qvevri / Oak (Friuli)",
        frenchTerm: "Macerazione sulle Bucce",
        description: "White grapes (Ribolla Gialla, Friulano) fermented on their skins for months in buried clay amphorae (qvevri) or large oak botti with zero sulfur and no filtration, pioneered by Josko Gravner and Stanko Radikon.",
        sommelierImpact: "Extracts deep amber hue, grippy tea tannins, dried apricot, orange peel, beeswax, and savory umami depth."
      }
    ]
  },

  grapes: {
    major: [
      {
        id: 'corvina',
        name: "Corvina Veronese & Corvinone",
        percentage: 35,
        type: "Red",
        epicenter: "Valpolicella Classica (Veneto)",
        profile: "Sour red cherry, dried fig, dark chocolate, sweet cinnamon, and almond finish",
        role: "The structural and aromatic soul of Amarone and Valpolicella",
        benchmarkCuvees: ["Quintarelli Amarone Riserva", "Dal Forno Amarone"]
      },
      {
        id: 'nerello-mascalese',
        name: "Nerello Mascalese",
        percentage: 25,
        type: "Red",
        epicenter: "Etna DOC (Sicily)",
        profile: "Wild strawberry, redcurrant, volcanic ash, iron, orange peel, and vibrant acidity",
        role: "The 'Pinot Noir of the Mediterranean' on active Mount Etna volcanic slopes",
        benchmarkCuvees: ["Terre Nere Calderara Sottana", "Passopisciaro Contrada Sciaranuova"]
      },
      {
        id: 'nebbiolo-chiavennasca',
        name: "Nebbiolo (Chiavennasca)",
        percentage: 20,
        type: "Red",
        epicenter: "Valtellina Superiore (Lombardia)",
        profile: "Dried rose petals, mountain cranberries, alpine herbs, tar, and granite minerality",
        role: "Alpine expression of Nebbiolo on perilous 600m granite terraces",
        benchmarkCuvees: ["AR.PE.PE. Sassella Rocce Rosse", "Nino Negri 5 Stelle"]
      },
      {
        id: 'aglianico',
        name: "Aglianico",
        percentage: 10,
        type: "Red",
        epicenter: "Taurasi DOCG (Campania)",
        profile: "Blackberry, black pepper, leather, asphalt, graphite, and colossal tannins",
        role: "The ancient 'Barolo of the South' on high-elevation volcanic Apennine slopes",
        benchmarkCuvees: ["Mastroberardino Radici Taurasi", "Feudi di San Gregorio Serpico"]
      },
      {
        id: 'garganega-carricante',
        name: "Garganega & Carricante",
        percentage: 10,
        type: "White",
        epicenter: "Soave Classico (Veneto) & Etna Bianco (Sicily)",
        profile: "White almond, preserved lemon, elderflower, wet stone, and laser-sharp volcanic salinity",
        role: "World-class indigenous volcanic white varieties with decades-long aging capacity",
        benchmarkCuvees: ["Pieropan Calvarino", "Benanti Pietramarina"]
      }
    ]
  }
};

export const ITALY_OTHER_PRESTIGE_ESTATES = [
  {
    id: 'quintarelli-amarone',
    name: "Giuseppe Quintarelli Amarone della Valpolicella Classico Riserva",
    producer: "Giuseppe Quintarelli",
    estate: "Quintarelli Estate (Negrar)",
    debutVintage: "1924 (Estate Founded)",
    vintageDebut: "1968",
    appellation: "Amarone della Valpolicella DOCG",
    village: "Negrar (Valpolicella Classica)",
    subregion: "Veneto",
    areaHa: 12.00,
    wineType: "Red",
    dominantGrape: "Corvina & Corvinone",
    grapeComposition: "Corvina & Corvinone (~75%), Rondinella (~20%), Cabernet, Nebbiolo, Croatina, Sangiovese (~5%)",
    blend: "Corvina, Corvinone, Rondinella, Oseleta",
    classification: "The Legendary Master of the Veneto",
    status: "The mythical, hand-scripted benchmark of artisan Amarone",
    terroir: "Limestone and basalt terraced hillsides overlooking the valley of Negrar.",
    winemaking: "Natural appassimento drying for 4 months on wooden arelle; wild yeast fermentation; aged 7 to 8 years in giant Slavonian oak botti grandi; hand-written labels.",
    historicalLore: "Giuseppe Quintarelli (1927–2012), known as 'Il Maestro del Veneto', established the world's most revered standard for traditional Amarone.",
    character: "Ethereal complexity, dried black cherry, fig compote, bittersweet cocoa, pipe tobacco, dried roses, and infinite, aristocratic warmth.",
    iconicStatus: "The most revered and collectible Amarone in history.",
    prominenceRank: 1
  },
  {
    id: 'dal-forno-amarone',
    name: "Romano Dal Forno Amarone della Valpolicella 'Monte Lodoletta'",
    producer: "Romano Dal Forno",
    estate: "Monte Lodoletta",
    debutVintage: "1983",
    vintageDebut: "1983",
    appellation: "Amarone della Valpolicella DOCG",
    village: "Illasi (Val d'Illasi)",
    subregion: "Veneto",
    areaHa: 25.00,
    wineType: "Red",
    dominantGrape: "Corvina & Corvinone",
    grapeComposition: "Corvina (~60%), Rondinella (~20%), Oseleta (~10%), Croatina (~10%)",
    blend: "Corvina, Rondinella, Oseleta, Croatina",
    classification: "Modern Monumental Titan",
    status: "The uncompromising perfectionist summit of modern Amarone",
    terroir: "Alluvial gravel and clay terraces at Monte Lodoletta in the Illasi valley.",
    winemaking: "Ultra-dense planting (12,800 vines/ha); computer-controlled fan-assisted drying for 3 months; aged 36 months in 100% new French oak barriques + 24 months bottle rest.",
    historicalLore: "Romano Dal Forno was mentored by Giuseppe Quintarelli before forging his own radical modern vision of hyper-concentration.",
    character: "Inky opaque color, colossal concentration, blackberry liqueur, espresso roast, dark chocolate truffle, graphite, and seamless massive tannins.",
    iconicStatus: "The most powerful, concentrated, and technically flawless modern red wine in Italy.",
    prominenceRank: 2
  },
  {
    id: 'terre-nere-calderara',
    name: "Tenuta delle Terre Nere Etna Rosso 'Calderara Sottana Prephylloxera'",
    producer: "Tenuta delle Terre Nere",
    estate: "Calderara Sottana Contrada",
    debutVintage: "2006",
    vintageDebut: "2006",
    appellation: "Etna DOC",
    village: "Randazzo (Versante Nord)",
    subregion: "Sicily & Mount Etna (Etna DOC)",
    areaHa: 2.00,
    wineType: "Red",
    dominantGrape: "Nerello Mascalese",
    grapeComposition: "Nerello Mascalese (~98%), Nerello Cappuccio (~2%)",
    blend: "Nerello Mascalese, Nerello Cappuccio",
    classification: "Etna Grand Cru Prephylloxera",
    status: "Marco de Grazia's un-grafted 140+ year-old volcanic masterpiece",
    terroir: "Pure black basalt pumice stones and volcanic ash at 650m on the northern slope of Mount Etna.",
    winemaking: "100% un-grafted pre-phylloxera vines planted in the late 19th century; native fermentation, aged in French oak tonneaux and large casks.",
    historicalLore: "Founded by American-Italian wine pioneer Marco de Grazia in 2002, championing Etna's single Contrade terroirs.",
    character: "Haunting wild strawberry, blood orange zest, volcanic ash, iron, dried violet, and razor-sharp, mineral-etched tannins.",
    iconicStatus: "The crown jewel of the Mount Etna fine wine revolution.",
    prominenceRank: 3
  },
  {
    id: 'arpepe-rocce-rosse',
    name: "AR.PE.PE. Valtellina Superiore Sassella Riserva 'Rocce Rosse'",
    producer: "AR.PE.PE. (Arturo Pelizzatti Perego)",
    estate: "Sassella Terraces (Rocce Rosse)",
    debutVintage: "1984",
    vintageDebut: "1984",
    appellation: "Valtellina Superiore DOCG",
    village: "Sondrio (Sassella)",
    subregion: "Valtellina (Lombardia Alpine Nebbiolo)",
    areaHa: 4.00,
    wineType: "Red",
    dominantGrape: "Nebbiolo (Chiavennasca)",
    grapeComposition: "100% Nebbiolo (Chiavennasca)",
    blend: "Nebbiolo (100%)",
    classification: "Alpine Nebbiolo Grand Cru",
    status: "The Pelizzatti family's historic granite terrace monument",
    terroir: "Vertiginous iron-stained red granite rock terraces (Rocce Rosse) overlooking Sondrio at 400–550m.",
    winemaking: "Long 30–40 day maceration in chestnut and oak tini; aged 4–5 years in large 50hL chestnut and Slavonian oak botti + 3 years in bottle; released only after 7–10 years.",
    historicalLore: "Arturo Pelizzatti Perego re-founded the historic family estate in 1984, preserving ancestral Alpine Nebbiolo traditions.",
    character: "Ethereal garnet-orange rim, dried roses, mountain cranberries, alpine pine, leather, balsamic herbs, and diamond-cut granite minerality.",
    iconicStatus: "The supreme benchmark for Alpine Nebbiolo longevity and finesse.",
    prominenceRank: 4
  },
  {
    id: 'mastroberardino-radici',
    name: "Mastroberardino Taurasi Riserva 'Radici'",
    producer: "Mastroberardino",
    estate: "Montemarano Estate",
    debutVintage: "1928 (First Vintage) / 1986 Radici",
    vintageDebut: "1986",
    appellation: "Taurasi DOCG",
    village: "Montemarano (Irpinia)",
    subregion: "Campania (Taurasi, Greco & Fiano)",
    areaHa: 15.00,
    wineType: "Red",
    dominantGrape: "Aglianico",
    grapeComposition: "100% Aglianico",
    blend: "Aglianico (100%)",
    classification: "The Barolo of the South Historic Benchmark",
    status: "The historical guardian of ancient Campanian viticulture",
    terroir: "High-altitude (500–650m) volcanic ash, pumice, and clay-limestone slopes in Montemarano.",
    winemaking: "Long traditional maceration, aged 30 months in French oak barriques and Slavonian oak botti + 36 months in bottle before release.",
    historicalLore: "Antonio Mastroberardino single-handedly saved Aglianico, Fiano, and Greco from extinction following WWII.",
    character: "Monumental blackberry, dark plum, black pepper, leather, pipe tobacco, scorched volcanic earth, and noble, muscular tannins that age for 50+ years.",
    iconicStatus: "The undisputed historical monument of Southern Italian fine wine.",
    prominenceRank: 5
  },
  {
    id: 'gravner-ribolla-anfora',
    name: "Josko Gravner Ribolla Gialla Anfora",
    producer: "Josko Gravner",
    estate: "Oslavia Estate",
    debutVintage: "2001 (First Qvevri Vintage)",
    vintageDebut: "2001",
    appellation: "Venezia Giulia IGT",
    village: "Oslavia (Collio Goriziano)",
    subregion: "Friuli-Venezia Giulia (Collio & Colli Orientali)",
    areaHa: 15.00,
    wineType: "White / Amber (Orange)",
    dominantGrape: "Ribolla Gialla",
    grapeComposition: "100% Ribolla Gialla",
    blend: "Ribolla Gialla (100%)",
    classification: "The Godfather of Modern Orange Wine",
    status: "Radical ancestral skin-maceration in buried Georgian clay amphorae",
    terroir: "Terraced Ponca (Eocene flysch marl/sandstone) on the border of Italy and Slovenia in Oslavia.",
    winemaking: "6–7 months skin maceration in subterranean Georgian beeswax-lined clay amphorae (qvevri), followed by 6 years aging in large oak casks; zero filtration, minimal sulfur.",
    historicalLore: "Josko Gravner shattered modern winemaking in 2001 by stripping his cellar of all technology and returning to 5,000-year-old Georgian methods.",
    character: "Deep luminous amber-orange hue, dried apricots, orange peel, beeswax, pine resin, black tea tannins, and immense savory umami salinity.",
    iconicStatus: "The global icon and philosophical catalyst of the worldwide natural and skin-contact orange wine movement.",
    prominenceRank: 6
  }
];

export const ITALY_OTHER_ICONIC_PRODUCERS = [
  {
    id: 'giuseppe-quintarelli',
    name: "Giuseppe Quintarelli",
    village: "Negrar (Valpolicella Classica)",
    subregion: "Veneto",
    vigneron: "Giuseppe Quintarelli (Founder) / Silvana Quintarelli & Lorenzo",
    proprietor: "Quintarelli Family",
    wineType: "Red / White",
    philosophy: "Uncompromising patience, traditionalism, hand-written labels, natural appassimento drying on wooden arelle, and 7–8 years maturation in giant Slavonian oak casks.",
    keyCuvees: ["Amarone della Valpolicella Classico Riserva", "Alzero (Cabernet Franc Appassimento)", "Rosso del Bepi", "Valpolicella Classico Superiore", "Primofiore"],
    iconicVineyards: ["Monte Ca' Paletta (Negrar)"]
  },
  {
    id: 'romano-dal-forno',
    name: "Romano Dal Forno",
    village: "Illasi (Val d'Illasi)",
    subregion: "Veneto",
    vigneron: "Romano Dal Forno / Michele, Marco, Luca Dal Forno",
    proprietor: "Dal Forno Family",
    wineType: "Red",
    philosophy: "Extreme viticultural density (12,800 vines/ha), ruthless yield thinning, custom-engineered drying rooms, vacuum fermentation, and 100% new French oak aging.",
    keyCuvees: ["Amarone della Valpolicella Monte Lodoletta", "Valpolicella Superiore Monte Lodoletta", "Vigna Seré (Passito)"],
    iconicVineyards: ["Monte Lodoletta Vineyard"]
  },
  {
    id: 'pieropan',
    name: "Pieropan",
    village: "Soave (Soave Classico)",
    subregion: "Veneto",
    vigneron: "Nino Pieropan (Historic Pioneer) / Andrea & Dario Pieropan",
    proprietor: "Pieropan Family",
    wineType: "White / Red",
    philosophy: "The historic quality savior of Soave. Pioneered single-vineyard bottlings (Calvarino 1971, La Rocca 1978) on volcanic and limestone hillsides; certified organic viticulture.",
    keyCuvees: ["Soave Classico Calvarino (Volcanic)", "Soave Classico La Rocca (Limestone)", "Recioto di Soave Le Colombare", "Ruberpan Valpolicella"],
    iconicVineyards: ["Calvarino (Volcanic Basalt)", "La Rocca (Jurassic Limestone)"]
  },
  {
    id: 'tenuta-delle-terre-nere',
    name: "Tenuta delle Terre Nere",
    village: "Randazzo (Mount Etna)",
    subregion: "Sicily & Mount Etna (Etna DOC)",
    vigneron: "Marco de Grazia",
    proprietor: "Marco de Grazia",
    wineType: "Red / White",
    philosophy: "The pioneer of Etna Contrade crus. Certified organic, high-altitude bush-vine (alberello) viticulture, pre-phylloxera parcels, and Burgundian elegance.",
    keyCuvees: ["Etna Rosso Prephylloxera Calderara Sottana", "Etna Rosso San Lorenzo", "Etna Rosso Calderara Sottana", "Etna Rosso Guardiola", "Etna Bianco Superiore"],
    iconicVineyards: ["Calderara Sottana (Prephylloxera 1880s)", "San Lorenzo", "Feudo di Mezzo"]
  },
  {
    id: 'cantina-terlano',
    name: "Cantina Terlano (Kellerei Terlan)",
    village: "Terlano (Alto Adige / Südtirol)",
    subregion: "Alto Adige / Südtirol (Italian Alps)",
    vigneron: "Rudi Kofler (Kellermeister)",
    proprietor: "Grower Cooperative (Founded 1893)",
    wineType: "White / Red",
    philosophy: "World masters of white wine longevity. Extended lees aging in stainless steel tanks for up to 20–30 years (Rarity Collection) on quartz porphyry soils.",
    keyCuvees: ["Terlaner I Grande Cuvée", "Vorberg Pinot Bianco Riserva", "Nova Domus Riserva", "Quarz Sauvignon Blanc", "Terlaner Rarity"],
    iconicVineyards: ["Vorberg Terraces (Quartz Porphyry)", "Winkl"]
  },
  {
    id: 'mastroberardino',
    name: "Mastroberardino",
    village: "Atripalda (Irpinia / Campania)",
    subregion: "Campania (Taurasi, Greco & Fiano)",
    vigneron: "Piero Mastroberardino",
    proprietor: "Mastroberardino Family (Founded 1878)",
    wineType: "Red / White",
    philosophy: "Historical guardians of ancient Roman and Campanian viticulture. Rescued Aglianico, Fiano di Avellino, and Greco di Tufo; authentic 50-year longevity.",
    keyCuvees: ["Radici Taurasi Riserva", "Radici Taurasi", "Radici Fiano di Avellino", "Novaserra Greco di Tufo", "Villa dei Misteri (Pompeii)"],
    iconicVineyards: ["Montemarano Estate (Taurasi)", "Manocalzati Estate (Fiano)"]
  }
];

export const ITALY_OTHER_FOOD_PAIRINGS = [
  {
    "category": "Rich Stews & Braises (Amarone)",
    "wineType": "Red",
    "targetWine": "Amarone della Valpolicella Classico DOCG (Quintarelli / Dal Forno)",
    "dish": "Slow-Braised Beef Short Ribs in Amarone Reduction with Polenta, Osso Buco alla Milanese with Saffron Risotto and Gremolata",
    "note": "Amarone's decadent dried-cherry and fig richness, high dry extract, and generous alcohol harmonize effortlessly with gelatinous braised beef and rich marrow.",
    "glassware": "Bordeaux Grand Cru or Large Burgundy Stem (700ml)",
    "servingTemp": "16–18°C (60–64°F)",
    "decanting": "Decant 1–2 hours before service for optimal aeration."
  },
  {
    "category": "Alpine Cured Meats & Cheeses (Valtellina)",
    "wineType": "Red",
    "targetWine": "Valtellina Superiore DOCG (AR.PE.PE. Sassella Rocce Rosse)",
    "dish": "Bresaola della Valtellina with Arugula & Shaved Bitto DOP Cheese, Pizzoccheri della Valtellina (Buckwheat Pasta with Savoy Cabbage, Potatoes & Casera Cheese)",
    "note": "Alpine Nebbiolo's translucent cranberry fruit, dried rose petals, and chiseled granite acidity slice through melting mountain cheese and butter in pizzoccheri.",
    "glassware": "Bordeaux Grand Cru or Large Burgundy Stem (700ml)",
    "servingTemp": "16–18°C (60–64°F)",
    "decanting": "Decant 1–2 hours before service for optimal aeration."
  },
  {
    "category": "Mediterranean Seafood & Grilled Meats (Etna)",
    "wineType": "Red / White",
    "targetWine": "Etna Rosso DOC (Nerello Mascalese) & Etna Bianco Superiore (Carricante)",
    "dish": "Grilled Mediterranean Swordfish with Capers, Olives and Cherry Tomatoes; Roasted Sicilian Lamb Chops with Oregano and Charred Eggplant",
    "note": "Nerello Mascalese's wild strawberry crunch, iron backbone, and volcanic salinity pair impeccably with swordfish and roasted lamb.",
    "glassware": "Bordeaux Grand Cru or Large Burgundy Stem (700ml)",
    "servingTemp": "16–18°C (60–64°F)",
    "decanting": "Decant 1–2 hours before service for optimal aeration."
  },
  {
    "category": "Campanian Ragù & Wild Game (Taurasi)",
    "wineType": "Red",
    "targetWine": "Taurasi DOCG (Mastroberardino Radici Riserva)",
    "dish": "Slow-Simmered Neapolitan Beef & Pork Ragù over Paccheri Pasta, Roasted Wild Boar with Juniper Berries and Polenta",
    "note": "Aglianico's formidable structural tannins, black pepper, and dark savory fruit cut through the rich tomato acidity and dense meat of authentic Neapolitan ragù.",
    "glassware": "Bordeaux Grand Cru or Large Burgundy Stem (700ml)",
    "servingTemp": "16–18°C (60–64°F)",
    "decanting": "Decant 1–2 hours before service for optimal aeration."
  },
  {
    "category": "Alpine Whites & Crudo (Alto Adige / Friuli)",
    "wineType": "White",
    "targetWine": "Cantina Terlano Vorberg Pinot Bianco & Gravner Ribolla Gialla",
    "dish": "Pan-Roasted Arctic Char with Alpine Herb Butter, San Daniele Prosciutto with Fresh Figs, Wild Mushroom Crostini",
    "note": "Mineral-dusted Pinot Bianco and amber skin-contact Ribolla Gialla provide tactile grip and alpine freshness for cured prosciutto and freshwater char.",
    "glassware": "Universal White Wine Stem (450ml)",
    "servingTemp": "10–12°C (50–54°F)",
    "decanting": "Not required; aerate gently in glass."
  }
];
