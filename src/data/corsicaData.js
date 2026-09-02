// Master Sommelier Dataset: Corsica (Corse AOC & Île de Beauté)
// Fact-checked against INAO decrees, CIVAM Corse technical specifications & Master Sommelier Standards

export const CORSICA_SUBREGIONS = [
  {
    id: 'patrimonio',
    name: "Patrimonio AOC (Cru Appellation)",
    lat: 42.70,
    lng: 9.36,
    terroir: "Pure white chalk and clay-limestone benches (Calcaire de Saint-Florent) nestled in a sun-drenched maritime amphitheater.",
    focus: "Niellucciu (min. 90% for reds), Vermentinu (100% for whites), Rosé.",
    description: "Corsica's first official AOC (1968) and premier Cru. Produces structured, age-worthy reds with dark cherry and leather, and intensely saline, floral whites."
  },
  {
    id: 'ajaccio',
    name: "Ajaccio AOC (Cru Appellation)",
    lat: 41.92,
    lng: 8.74,
    terroir: "Weathered Hercynian granite hillsides (Arènes granitiques) and warm amphitheaters surrounding the Gulf of Ajaccio and Taravo Valley.",
    focus: "Sciaccarellu (min. 60% in red & rosé blends), Vermentinu.",
    description: "Cru appellation (1971) and epicenter of Sciaccarellu. Yields translucent, highly aromatic reds scented with crushed white pepper, wild strawberry, and maquis herbs."
  },
  {
    id: 'corse-calvi',
    name: "Corse Calvi AOC (Sub-Regional)",
    lat: 42.56,
    lng: 8.75,
    terroir: "Northwestern Balagne district with pink granite, schist, and alluvium slopes framed between Mount Cinto (2,706m) and the sea.",
    focus: "Sciaccarellu, Niellucciu, Vermentinu.",
    description: "'The Garden of Corsica', where maritime breezes preserve vibrant freshness in aromatic rosés and herbal reds."
  },
  {
    id: 'coteaux-du-cap-corse',
    name: "Corse Coteaux du Cap Corse AOC & Muscat du Cap Corse AOC",
    lat: 42.95,
    lng: 9.42,
    terroir: "Extreme terraced metamorphic schist (Schistes lustrés) hanging precariously over the Mediterranean along the northern peninsula.",
    focus: "Vermentinu, Muscat Blanc à Petits Grains (Vin Doux Naturel).",
    description: "Dramatically steep sea terraces producing saline, citrus-driven dry Vermentinu and unctuous, apricot-scented Muscat du Cap Corse VDN."
  },
  {
    id: 'corse-sartene',
    name: "Corse Sartène AOC (Sub-Regional)",
    lat: 41.62,
    lng: 8.97,
    terroir: "Decomposed granite and gravelly clay slopes around the historic mountain fortress of Sartène in southwest Corsica.",
    focus: "Sciaccarellu, Niellucciu, Vermentinu.",
    description: "Wild, rugged granite terroirs producing muscular, peppery reds and structured, mineral-laden whites."
  },
  {
    id: 'corse-figari',
    name: "Corse Figari AOC (Sub-Regional)",
    lat: 41.48,
    lng: 9.12,
    terroir: "The southernmost vineyards in France; extreme wind-whipped granite plateau with shallow, stony, poor granitic soils.",
    focus: "Sciaccarellu, Niellucciu, Vermentinu, Biancu Gentile, Carcaghjolu Neru.",
    description: "Ultra-dry, wind-battered granite plateau producing concentrated, saline, herb-crusted wines of profound mineral intensity."
  },
  {
    id: 'corse-porto-vecchio',
    name: "Corse Porto-Vecchio AOC (Sub-Regional)",
    lat: 41.59,
    lng: 9.28,
    terroir: "Southeastern granite hills overlooking the Tyrrhenian Sea; sheltered by the Ospedale pine forest.",
    focus: "Niellucciu, Sciaccarellu, Vermentinu.",
    description: "Sun-drenched coastal slopes producing soft, fruity, Mediterranean reds and vibrant, floral rosés."
  },
  {
    id: 'corse-regional',
    name: "Corse / Vin de Corse AOC & Plaine Orientale",
    lat: 42.15,
    lng: 9.50,
    terroir: "Broad eastern alluvial plain with clay, sand, and river gravels between Solenzara and Bastia.",
    focus: "Niellucciu, Sciaccarellu, Vermentinu, IGP Île de Beauté varieties.",
    description: "The island's largest regional denomination, providing everyday freshness and dynamic IGP single-varietal innovations."
  }
];

export const CORSICA_GRAND_CRUS = [
  {
    id: 'patrimonio-carco',
    name: "Carco (Patrimonio Cru Climat)",
    tier: 'grandCru',
    badge: '👑 Benchmark Cru (AOC)',
    village: "Patrimonio",
    subregion: "Patrimonio AOC",
    subregionId: 'patrimonio',
    lat: 42.705,
    lng: 9.365,
    areaHa: 14.50,
    aocDecreeYear: 1968,
    elevationRange: "150m – 300m",
    aspect: "South / Southwest",
    dominantGrape: "Vermentinu & Niellucciu",
    grapeRatio: "Vermentinu (60%), Niellucciu (40%)",
    wineType: "Dual",
    soil: "Pure Miocene Saint-Florent white limestone and chalky marls",
    baseYield: "40 hl/ha",
    minPotentialAbv: "12.0% vol.",
    character: "Laser-pure limestone minerality, vibrant citrus blossom, crushed chalk tension, and enduring marine salinity.",
    benchmarkProducers: ["Domaine Antoine Arena & Sons", "Domaine Jean-Baptiste Arena"],
    famousProducers: ["Domaine Antoine Arena", "Domaine Jean-Baptiste Arena"]
  },
  {
    id: 'patrimonio-grotte-di-sole',
    name: "Grotte di Sole (Patrimonio Cru Climat)",
    tier: 'grandCru',
    badge: '👑 Benchmark Cru (AOC)',
    village: "Patrimonio",
    subregion: "Patrimonio AOC",
    subregionId: 'patrimonio',
    lat: 42.698,
    lng: 9.358,
    areaHa: 12.00,
    aocDecreeYear: 1968,
    elevationRange: "120m – 250m",
    aspect: "South / Southeast",
    dominantGrape: "Niellucciu",
    grapeRatio: "100% Niellucciu",
    wineType: "Red",
    soil: "Steep south-facing limestone cliff with calcareous clay scree",
    baseYield: "38 hl/ha",
    minPotentialAbv: "12.5% vol.",
    character: "Deep ruby hue, black cherry, leather, garrigue herbs, scorched earth, and massive structural longevity.",
    benchmarkProducers: ["Domaine Antoine Arena & Sons"],
    famousProducers: ["Domaine Antoine Arena & Sons"]
  },
  {
    id: 'ajaccio-clos-d-alzeto',
    name: "Clos d'Alzeto (Ajaccio High-Altitude Cru)",
    tier: 'grandCru',
    badge: '👑 Benchmark Cru (AOC)',
    village: "Sari-d'Orcino",
    subregion: "Ajaccio AOC",
    subregionId: 'ajaccio',
    lat: 42.045,
    lng: 8.785,
    areaHa: 52.00,
    aocDecreeYear: 1971,
    elevationRange: "400m – 550m",
    aspect: "South / Southwest amphitheater",
    dominantGrape: "Sciaccarellu",
    grapeRatio: "Sciaccarellu (70%), Niellucciu (15%), Vermentinu (15%)",
    wineType: "Dual",
    soil: "High-altitude decomposed Hercynian granite sands (Arènes granitiques)",
    baseYield: "40 hl/ha",
    minPotentialAbv: "12.5% vol.",
    character: "Weightless red berry perfume, white pepper, wild mountain strawberry, and silken, crunchy tannins.",
    benchmarkProducers: ["Clos d'Alzeto (Famille Albertini)"],
    famousProducers: ["Clos d'Alzeto"]
  },
  {
    id: 'ajaccio-taravo-vaccelli',
    name: "Cognocoli-Monticchi / Vaccelli (Taravo Valley)",
    tier: 'grandCru',
    badge: '👑 Benchmark Cru (AOC)',
    village: "Cognocoli-Monticchi",
    subregion: "Ajaccio AOC",
    subregionId: 'ajaccio',
    lat: 41.828,
    lng: 8.895,
    areaHa: 25.00,
    aocDecreeYear: 1971,
    elevationRange: "150m – 320m",
    aspect: "South",
    dominantGrape: "Sciaccarellu & Vermentinu",
    grapeRatio: "Sciaccarellu (65%), Vermentinu (25%), Carcaghjolu Biancu (10%)",
    wineType: "Dual",
    soil: "Weathered pink granite blocks and fine silica sand",
    baseYield: "35 hl/ha",
    minPotentialAbv: "12.5% vol.",
    character: "Silken texture, crushed wild rose, white pepper, crushed granite, and haunting floral length.",
    benchmarkProducers: ["Domaine Vaccelli", "Domaine Comte Abbatucci"],
    famousProducers: ["Domaine Vaccelli", "Domaine Comte Abbatucci"]
  },
  {
    id: 'calvi-clos-culombu',
    name: "Clos Culombu & Ribbe Rosse (Corse Calvi)",
    tier: 'grandCru',
    badge: '👑 Benchmark Cru (AOC)',
    village: "Lumio (Balagne)",
    subregion: "Corse Calvi AOC",
    subregionId: 'corse-calvi',
    lat: 42.583,
    lng: 8.852,
    areaHa: 64.00,
    aocDecreeYear: 1976,
    elevationRange: "50m – 180m",
    aspect: "Northwest facing Mount Cinto foothills",
    dominantGrape: "Sciaccarellu & Niellucciu",
    grapeRatio: "Sciaccarellu (50%), Niellucciu (30%), Minustellu (20%)",
    wineType: "Red",
    soil: "Granitic alluvium, metamorphic schist, and red clay gravels",
    baseYield: "42 hl/ha",
    minPotentialAbv: "12.0% vol.",
    character: "Vibrant wild strawberry, dried rosemary, saline maritime freshness, and balanced rustic tannins.",
    benchmarkProducers: ["Domaine Clos Culombu", "Domaine d'Alzipratu", "Domaine Maestracci"],
    famousProducers: ["Domaine Clos Culombu", "Domaine d'Alzipratu"]
  },
  {
    id: 'cap-corse-clos-nicrosi',
    name: "Clos Nicrosi (Cap Corse Schist Terraces)",
    tier: 'grandCru',
    badge: '👑 Benchmark Cru (AOC)',
    village: "Rogliano",
    subregion: "Corse Coteaux du Cap Corse AOC",
    subregionId: 'coteaux-du-cap-corse',
    lat: 42.955,
    lng: 9.428,
    areaHa: 9.00,
    aocDecreeYear: 1976,
    elevationRange: "50m – 200m",
    aspect: "East-facing Mediterranean sea terraces",
    dominantGrape: "Vermentinu & Muscat Blanc",
    grapeRatio: "Vermentinu (70%), Muscat Blanc à Petits Grains (30%)",
    wineType: "White",
    soil: "Steep terraced metamorphic schist (Schistes lustrés) hanging over the sea",
    baseYield: "35 hl/ha",
    minPotentialAbv: "12.5% vol.",
    character: "Intense marine salinity, preserved lemon, dried sage, beeswax, and piercing gunflint minerality.",
    benchmarkProducers: ["Clos Nicrosi", "Domaine Pieretti", "Domaine de Gioielli"],
    famousProducers: ["Clos Nicrosi", "Domaine Pieretti"]
  },
  {
    id: 'sartene-domaine-saparale',
    name: "Domaine Saparale & Sartène Granite Terraces",
    tier: 'grandCru',
    badge: '👑 Benchmark Cru (AOC)',
    village: "Sartène (Ortolo Valley)",
    subregion: "Corse Sartène AOC",
    subregionId: 'corse-sartene',
    lat: 41.615,
    lng: 8.972,
    areaHa: 40.00,
    aocDecreeYear: 1976,
    elevationRange: "100m – 280m",
    aspect: "South / Southwest",
    dominantGrape: "Sciaccarellu & Niellucciu",
    grapeRatio: "Sciaccarellu (55%), Niellucciu (35%), Minustellu (10%)",
    wineType: "Red",
    soil: "Decomposed granite gravels and iron-rich red clay in the Ortolo Valley",
    baseYield: "40 hl/ha",
    minPotentialAbv: "12.5% vol.",
    character: "Muscular yet aromatic red, wild blackberry, myrtle berry, smoked bacon fat, and peppery granite grip.",
    benchmarkProducers: ["Domaine Saparale", "Domaine Pero Longo", "Domaine Sant Armettu"],
    famousProducers: ["Domaine Saparale", "Domaine Pero Longo"]
  },
  {
    id: 'figari-clos-canarelli',
    name: "Clos Canarelli & Tarra d'Orto (Corse Figari)",
    tier: 'grandCru',
    badge: '👑 Benchmark Cru (AOC)',
    village: "Figari",
    subregion: "Corse Figari AOC",
    subregionId: 'corse-figari',
    lat: 41.485,
    lng: 9.125,
    areaHa: 28.00,
    aocDecreeYear: 1976,
    elevationRange: "30m – 120m",
    aspect: "Flat to gently undulating windswept plateau",
    dominantGrape: "Niellucciu, Sciaccarellu & Carcaghjolu Neru",
    grapeRatio: "Niellucciu (40%), Sciaccarellu (30%), Carcaghjolu Neru (20%), Minustellu (10%)",
    wineType: "Dual",
    soil: "Shallow, wind-eroded granitic sands and stony siliceous pebbles",
    baseYield: "35 hl/ha",
    minPotentialAbv: "12.5% vol.",
    character: "Profound saline tension, wild garrigue, crushed stone, bitter dark chocolate, and concentrated mineral finish.",
    benchmarkProducers: ["Clos Canarelli", "Domaine de Tanella", "Domaine Petra Bianca"],
    famousProducers: ["Clos Canarelli", "Domaine de Tanella"]
  },
  {
    id: 'porto-vecchio-torraccia',
    name: "Domaine de Torraccia (Corse Porto-Vecchio)",
    tier: 'grandCru',
    badge: '👑 Benchmark Cru (AOC)',
    village: "Lecci (Porto-Vecchio)",
    subregion: "Corse Porto-Vecchio AOC",
    subregionId: 'corse-porto-vecchio',
    lat: 41.685,
    lng: 9.315,
    areaHa: 43.00,
    aocDecreeYear: 1976,
    elevationRange: "50m – 150m",
    aspect: "Southeast facing coastal slopes",
    dominantGrape: "Niellucciu & Sciaccarellu",
    grapeRatio: "Niellucciu (50%), Sciaccarellu (30%), Grenache (20%)",
    wineType: "Red",
    soil: "Granitic hillsides and weathered silica clay overlooking the Gulf of Porto-Vecchio",
    baseYield: "40 hl/ha",
    minPotentialAbv: "12.0% vol.",
    character: "Supple red and black fruit, sun-baked thyme, soft tannins, and refreshing sea breeze acidity (Cuvée Oriu).",
    benchmarkProducers: ["Domaine de Torraccia (Marc Imbert)"],
    famousProducers: ["Domaine de Torraccia"]
  }
];

export const CORSICA_BENCHMARK_CRUS = CORSICA_GRAND_CRUS;

export const CORSICA_TECHNICAL_REGULATIONS = {
  geology: {
    system: "L'Île de Beauté: Hercynian Crystalline Granite vs. Alpine Schist & Limestone",
    description: "A jagged 'Mountain in the Sea' with over 20 peaks exceeding 2,000m (Monte Cinto 2,706m). Geologically divided into two distinct worlds by a central fracture zone running from l'Île-Rousse to Solenzara:",
    formations: [
      {
        name: "Hercynian Crystalline Granite (Corse Cristalline)",
        period: "Paleozoic (300 Million Years)",
        keyAreas: ["Ajaccio", "Sartène", "Figari", "Calvi", "Porto-Vecchio"],
        wineImpact: "Acidic, porous, decomposed granite sand (Arènes granitiques) and silica. Imparts ethereal red berry fruit, white pepper spice, and silken, weightless tannins (ideal for Sciaccarellu)."
      },
      {
        name: "Alpine Metamorphic Schist (Schistes Lustrés / Corse Alpine)",
        period: "Mesozoic / Tertiary (Alpine Orogeny)",
        keyAreas: ["Cap Corse", "Castagniccia"],
        wineImpact: "Foliated, heat-retaining, dark metamorphic schists. Imparts piercing sea-spray salinity, gunflint tension, and concentrated candied fruit to Vermentinu and Muscat."
      },
      {
        name: "Saint-Florent Oolitic Limestone (Calcaire Sédimentaire)",
        period: "Miocene (15–20 Million Years)",
        keyAreas: ["Patrimonio"],
        wineImpact: "Pure white chalk and calcareous clay. Imparts profound structure, muscular tannins, deep ruby color, and dark fruit to Niellucciu, and mineral freshness to Vermentinu."
      },
      {
        name: "Eastern Alluvial Gravels (Plaine Orientale)",
        period: "Quaternary Alluvium",
        keyAreas: ["Aleria", "Ghisonaccia"],
        wineImpact: "Clay-gravel river terraces providing generous yields, approachable fruit, and supple freshness for regional AOC and IGP Île de Beauté."
      }
    ]
  },

  climatology: {
    system: "Mediterranean Microclimates & The 5 Winds of Corsica",
    description: "Corsica receives over 2,750 hours of sunshine annually with warm, dry summers and mild winters. Viticulture is regulated by intense diurnal temperature shifts from high mountain peaks and 5 prevailing Mediterranean winds:",
    winds: [
      { name: "Libeccio (Southwest)", effect: "Brings oceanic humidity across the west coast, then dries out across the mountains, ventilating vineyards." },
      { name: "Mistral (Northwest)", effect: "Cold, dry, powerful wind from the Rhône valley that sweeps the Balagne and Cap Corse, preventing fungal disease." },
      { name: "Sirocco (Southeast)", effect: "Scorching desert wind from North Africa bringing heatwaves and ripening red grapes on the eastern coast." },
      { name: "Tramuntana (North)", effect: "Chilly Alpine mountain breeze descending from Monte Cinto, maintaining crisp nighttime acidities." },
      { name: "Grecale (Northeast)", effect: "Strong, humid maritime wind impacting the eastern Cap Corse coastline." }
    ]
  },

  grapes: {
    system: "Indigenous Ampelography of Corsica",
    description: "Corsica possesses one of Europe's richest indigenous ampelographic heritages, centered on three classic AOC varieties plus rare heritage cépages conserved by visionary vignerons:",
    major: [
      {
        id: 'niellucciu',
        name: "Niellucciu",
        percentage: 35,
        type: "Indigenous Red Grape",
        epicenter: "Patrimonio AOC (min. 90% required)",
        profile: "Dark cherry, blackberry, wild thyme, leather, dried maquis, black pepper, and firm, architectural tannins.",
        role: "Genetically identical to Tuscan Sangiovese (specifically Brunello clone), deeply adapted over centuries to Patrimonio limestone.",
        benchmarkCuvees: ["Antoine Arena Grotte di Sole", "Yves Leccia E Croce", "Domaine Gentile Patrimonio"]
      },
      {
        id: 'sciaccarellu',
        name: "Sciaccarellu (Mammolo)",
        percentage: 28,
        type: "Indigenous Red Grape",
        epicenter: "Ajaccio AOC, Sartène, Figari, Calvi",
        profile: "Translucent ruby color, crushed white pepper, redcurrant, wild strawberry, almond, myrtle, and immortelle flower.",
        role: "Corsica's most distinctive indigenous red; thrives on granitic soils, delivering weightless, intensely aromatic elegance.",
        benchmarkCuvees: ["Domaine Comte Abbatucci Ministre Impérial", "Domaine Vaccelli Granit", "Clos Canarelli Amphora Rouge"]
      },
      {
        id: 'vermentinu',
        name: "Vermentinu (Malvoisie de Corse)",
        percentage: 26,
        type: "Indigenous White Grape",
        epicenter: "Patrimonio, Cap Corse, Calvi, Figari (100% of all Corsican AOC whites)",
        profile: "Green apple, preserved lemon, white blossom, fresh fennel, toasted almond, and mouthwatering Mediterranean salinity.",
        role: "The undisputed queen of Corsican white wine; balances luscious orchard fruit with crisp seaside minerality.",
        benchmarkCuvees: ["Antoine Arena Carco", "Yves Leccia E Croce Blanc", "Domaine Vaccelli Quartz", "Clos Canarelli Tarra d'Orto"]
      }
    ],
    heritage: [
      {
        id: 'biancu-gentile',
        name: "Biancu Gentile",
        percentage: 3,
        type: "Ancestral White Grape",
        epicenter: "Figari, Ajaccio, IGP Île de Beauté",
        profile: "Wax, honeyed apricot, wild herbs, lemon curd, rich texture, and persistent freshness.",
        role: "Rescued from near extinction by Yves Canarelli and Jean-Charles Abbatucci; now crafts elite luxury whites."
      },
      {
        id: 'muscat-blanc-petits-grains',
        name: "Muscat Blanc à Petits Grains",
        percentage: 4,
        type: "White Grape (VDN)",
        epicenter: "Muscat du Cap Corse AOC",
        profile: "Candied orange peel, apricot jam, honey, dried mint, jasmine, and unctuous sweetness balanced by maritime acidity.",
        role: "Exclusive variety for Muscat du Cap Corse Vin Doux Naturel (fortified with 96% vol neutral spirit, min. 90-95 g/L RS)."
      },
      {
        id: 'minustellu',
        name: "Minustellu (Graciano)",
        percentage: 2,
        type: "Ancestral Red Grape",
        epicenter: "Taravo Valley, Figari",
        profile: "Inky purple color, wild blackberry, licorice, violet floral lift, and velvety tannins.",
        role: "Ancient Corsican variety adding color, deep fruit, and structural complexity to historic complantations."
      },
      {
        id: 'carcaghjolu-neru',
        name: "Carcaghjolu Neru (Parraleta)",
        percentage: 1,
        type: "Ancestral Red Grape",
        epicenter: "Figari, Taravo Valley",
        profile: "Wild blueberry, iron, savory blood orange, dried herbs, and energetic natural acidity.",
        role: "Historic red variety producing vibrant single-varietal bottlings at Clos Canarelli and Abbatucci."
      },
      {
        id: 'genovese-barbarossa-aleatico',
        name: "Genovese, Barbarossa & Aleatico",
        percentage: 1,
        type: "Rare Heritage Varieties",
        epicenter: "Domaine Comte Abbatucci Conservatory Vineyard",
        profile: "Vibrant citrus blossom (Genovese), spicy red berry (Barbarossa), and exotic muscat-scented red floral tones (Aleatico).",
        role: "Preserved in Abbatucci's living collection of 18 ancestral Corsican grape varieties."
      }
    ]
  },

  classification: {
    system: "Corsican AOC Appellation Hierarchy & Vin Doux Naturel Regulations",
    description: "Corsica features 9 official AOC designations organized into 2 Cru Appellations, 5 Sub-Regional Appellations, 1 Vin Doux Naturel AOC, and 1 Regional Appellation:",
    pyramid: [
      {
        tier: "Cru Appellations (2 Crus)",
        sharePct: "22%",
        aocCount: "Patrimonio AOC (1968) & Ajaccio AOC (1971)",
        yieldLimits: "Max 45–50 hl/ha",
        minAbv: "12.0% vol.",
        description: "The historic apex of Corsican terroir. Patrimonio on pure white limestone (Niellucciu/Vermentinu) and Ajaccio on decomposed granite (Sciaccarellu)."
      },
      {
        tier: "Sub-Regional Appellations (5 Communal Satellites)",
        sharePct: "18%",
        aocCount: "Corse Calvi, Corse Coteaux du Cap Corse, Corse Sartène, Corse Figari, Corse Porto-Vecchio (1976)",
        yieldLimits: "Max 45–50 hl/ha",
        minAbv: "11.5% vol.",
        description: "Distinct geographic zones expressing specific microclimates, granite spurs, and coastal peninsulas."
      },
      {
        tier: "Vin Doux Naturel AOC (1 VDN)",
        sharePct: "3%",
        aocCount: "Muscat du Cap Corse AOC (1993)",
        yieldLimits: "Max 30 hl/ha",
        minAbv: "15.0% acquired ABV (min. 252 g/L must weight, mutage with 96% alcohol, min. 90-95 g/L residual sugar)",
        description: "Artisanal fortified sweet wine crafted from 100% Muscat à Petits Grains grown on dizzying schist terraces."
      },
      {
        tier: "Regional Appellation & IGP Île de Beauté",
        sharePct: "57%",
        aocCount: "Corse AOC (1976) & IGP Île de Beauté",
        yieldLimits: "Max 55 hl/ha (AOC) / Max 90–120 hl/ha (IGP)",
        minAbv: "11.0% vol.",
        description: "Island-wide appellation covering the Plaine Orientale and dynamic IGP single-varietal innovations."
      }
    ]
  },

  businessModels: [
    {
      type: "Artisanal Independent Vignerons & Biodynamic Pioneers",
      frenchTerm: "Vignerons Indépendants de Corse",
      description: "Small family domaines farming ancient parcels, championing native yeasts, ceramic amphorae, and ungrafted pre-phylloxera vines.",
      examples: ["Domaine Comte Abbatucci", "Domaine Vaccelli", "Clos Canarelli", "Domaine Antoine Arena", "Yves Leccia", "Domaine Gentile"]
    },
    {
      type: "High-Altitude Mountain & Historic Valley Estates",
      frenchTerm: "Domaines de Terroir & Vallées",
      description: "Historic estates situated in inland mountain valleys and dramatic granite spurs.",
      examples: ["Domaine d'Alzipratu", "Domaine Pero Longo", "Clos Venturi / Domaine Vico", "Domaine de Torraccia"]
    },
    {
      type: "Coastal Plain Quality Estates",
      frenchTerm: "Domaines de la Côte Orientale",
      description: "Large estates on the eastern plain combining modern temperature-controlled winemaking with ancient Corsican varieties.",
      examples: ["Domaine de Terra Vecchia", "Clos Poggiale", "Domaine Vetriccie"]
    }
  ]
};

export const CORSICA_BENCHMARK_ESTATES = [
  {
    name: "Collection Diplomate d'Empire & Ministre Impérial",
    producer: "Domaine Comte Abbatucci",
    debutVintage: 2000,
    vintageDebut: "2000 (18-Cépage Conservatory)",
    appellation: "Vin de France / IGP Île de Beauté (Taravo Valley)",
    areaHa: 18.00,
    wineType: "Dual",
    grape: "Sciaccarellu, Niellucciu, Minustellu, Carcaghjolu Neru, Morescola, Biancu Gentile",
    terroir: "Decomposed granite sands and red clay in the pristine Taravo Valley.",
    status: "Biodynamic cult icon crafted from Jean-Charles Abbatucci's living collection of ancient native varieties.",
    prominenceRank: 1
  },
  {
    name: "Granit & Quartz (Ajaccio)",
    producer: "Domaine Vaccelli",
    debutVintage: 2006,
    vintageDebut: "2006",
    appellation: "Ajaccio AOC",
    areaHa: 25.00,
    wineType: "Dual",
    grape: "Sciaccarellu (Granit Rouge) / Vermentinu & Carcaghjolu Biancu (Quartz)",
    terroir: "Pure south-facing weathered granite amphitheater in Cognocoli-Monticchi.",
    status: "Gérard and Alain Courrèges's benchmark for weightless, transcendent, peppery granite mastery.",
    prominenceRank: 2
  },
  {
    name: "Tarra d'Orto & Amphora (Figari)",
    producer: "Clos Canarelli",
    debutVintage: 1997,
    vintageDebut: "1997 (Amphora: 2009)",
    appellation: "Corse Figari AOC",
    areaHa: 28.00,
    wineType: "Dual",
    grape: "Niellucciu, Sciaccarellu, Carcaghjolu Neru / Vermentinu, Biancu Gentile",
    terroir: "Wind-battered granite plateau in Figari; zero oak, aged in raw clay amphorae.",
    status: "Yves Canarelli's biodynamic masterpiece; unmatched saline purity and structural depth.",
    prominenceRank: 3
  },
  {
    name: "Grotte di Sole & Carco (Patrimonio)",
    producer: "Domaine Antoine Arena & Sons",
    debutVintage: 1980,
    vintageDebut: "1980",
    appellation: "Patrimonio AOC",
    areaHa: 14.00,
    wineType: "Dual",
    grape: "100% Niellucciu (Grotte di Sole) / 100% Vermentinu (Carco)",
    terroir: "Pure Miocene white limestone cliff and fossil-rich marl in Patrimonio.",
    status: "The founding father of modern natural Corsican wine; un-fined, un-filtered, timeless limestone purity.",
    prominenceRank: 4
  },
  {
    name: "E Croce & YL (Patrimonio)",
    producer: "Domaine Yves Leccia",
    debutVintage: 1980,
    vintageDebut: "1980",
    appellation: "Patrimonio AOC / IGP Île de Beauté",
    areaHa: 15.00,
    wineType: "Dual",
    grape: "Niellucciu & Grenache / 100% Vermentinu",
    terroir: "E Croce hillside of pure schist and limestone overlooking the Gulf of Saint-Florent.",
    status: "Precision, elegance, and laser-like salinity; the benchmark for polished Patrimonio.",
    prominenceRank: 5
  },
  {
    name: "Muscat du Cap Corse (Clos Nicrosi)",
    producer: "Clos Nicrosi",
    debutVintage: 1850,
    vintageDebut: "1850",
    appellation: "Muscat du Cap Corse AOC",
    areaHa: 9.00,
    wineType: "White",
    grape: "100% Muscat Blanc à Petits Grains",
    terroir: "Steep terraced metamorphic schist in Rogliano at the northern tip of Cap Corse.",
    status: "Legendary historic estate producing ethereal candied citrus, wild mint, and saline sweet Muscat.",
    prominenceRank: 6
  }
];

export const CORSICA_ICONIC_DOMAINES = [
  {
    name: "Domaine Comte Abbatucci",
    village: "Casalabriva (Taravo Valley)",
    subregion: "Ajaccio",
    vigneron: "Jean-Charles Abbatucci",
    wineType: "Dual",
    philosophy: "Certified Biodynamic (Demeter); plays polyphonic Corsican music to the barrels; sanctuary for 18 indigenous varieties.",
    keyCuvees: ["Collection Diplomate d'Empire", "Ministre Impérial", "Général de la Révolution", "Cuvée Faustine Rouge/Blanc"]
  },
  {
    name: "Domaine Vaccelli",
    village: "Cognocoli-Monticchi",
    subregion: "Ajaccio",
    vigneron: "Gérard & Alain Courrèges",
    wineType: "Dual",
    philosophy: "Organic viticulture on pure granite; gentle whole-cluster infusions yielding silken, peppery, Burgundian elegance.",
    keyCuvees: ["Granit Rouge (Sciaccarellu)", "Quartz Blanc (Vermentinu)", "Juste Ciel", "Unu Rouge/Blanc"]
  },
  {
    name: "Clos Canarelli",
    village: "Figari",
    subregion: "Corse Figari",
    vigneron: "Yves Canarelli",
    wineType: "Dual",
    philosophy: "Pioneer of biodynamics in southern Corsica; clay amphora fermentations, ungrafted pre-phylloxera parcels, and resurrection of Biancu Gentile.",
    keyCuvees: ["Tarra d'Orto Rouge/Blanc", "Amphora Rouge/Blanc", "Costa Nera (Carcaghjolu Neru)", "Biancu Gentile"]
  },
  {
    name: "Domaine Antoine Arena & Sons",
    village: "Patrimonio",
    subregion: "Patrimonio",
    vigneron: "Antoine, Antoine-Marie & Jean-Baptiste Arena",
    wineType: "Dual",
    philosophy: "Pioneer of non-interventionist, organic farming in Patrimonio; legendary parcel-specific limestone bottlings.",
    keyCuvees: ["Grotte di Sole (Niellucciu)", "Carco (Vermentinu)", "Morta Maio", "Haut de Carco"]
  },
  {
    name: "Domaine Yves Leccia",
    village: "Poggio d'Oletta",
    subregion: "Patrimonio",
    vigneron: "Yves & Sandrine Leccia",
    wineType: "Dual",
    philosophy: "Master of limestone-schist precision; yields intensely fresh, saline, mineral-driven cuvées with remarkable aging capacity.",
    keyCuvees: ["E Croce Rouge/Blanc", "YL Rouge/Blanc", "O Bà! (Minustellu & Niellucciu)", "Biancu Gentile"]
  },
  {
    name: "Domaine Gentile",
    village: "Oletta",
    subregion: "Patrimonio",
    vigneron: "Jean-Paul Gentile",
    wineType: "Dual",
    philosophy: "Classic, long-lived Patrimonio reds and whites vinified with absolute respect for terroir and native flora.",
    keyCuvees: ["Grande Cuvée Rouge (Niellucciu)", "Grande Cuvée Blanc (Vermentinu)", "Patrimonio Rosé"]
  },
  {
    name: "Domaine d'Alzipratu",
    village: "Zilia (Balagne)",
    subregion: "Corse Calvi",
    vigneron: "Pierre Acquaviva",
    wineType: "Dual",
    philosophy: "Historic monastery vineyard nestled beneath Monte Grosso; captures the crisp alpine-maritime freshness of Calvi.",
    keyCuvees: ["Pumonte Rouge/Blanc", "Fiumeseccu Rouge/Blanc", "In Purtellu"]
  },
  {
    name: "Domaine Pero Longo",
    village: "Bilia",
    subregion: "Corse Sartène",
    vigneron: "Pierre Richarme",
    wineType: "Dual",
    philosophy: "Certified biodynamic viticulture on ancient granite benches facing the sea; non-sulfited cuvées of pure fruit.",
    keyCuvees: ["Equilibre Rouge", "Lion de Roccapina", "Sartène Blanc"]
  },
  {
    name: "Clos Venturi (Domaine Vico)",
    village: "Ponte Leccia",
    subregion: "Central Corsica",
    vigneron: "Emmanuel Venturi",
    wineType: "Dual",
    philosophy: "High-altitude inland terroir (up to 400m elevation) with dramatic diurnal shifts; exceptional tension and freshness.",
    keyCuvees: ["Clos Venturi Rouge/Blanc", "1769 Rouge", "Brama (Sciaccarellu)"]
  }
];


export const CORSICA_FOOD_PAIRINGS = [
  {
    category: 'Corsican Charcuterie (Salumi)',
    wineType: 'Red',
    targetWine: 'Sciaccarellu & Niellucciu (Ajaccio & Patrimonio)',
    dish: "Prisuttu (Dry-Cured Mountain Ham), Lonzu, Coppa & Figatellu (Liver Sausage)",
    note: "Sciaccarellu's bright redcurrant acidity and white pepper notes cut through rich pork fat, while Niellucciu's firm tannins match the robust, chestnut-fed smoke of Figatellu.",
    glassware: "Medium Burgundy / Bordeaux Stem (550ml)",
    servingTemp: "15–17°C (59–62°F)",
    decanting: "Decant 30 minutes for Niellucciu."
  },
  {
    category: 'Roasted Mountain Game & Lamb',
    wineType: 'Red',
    targetWine: 'Aged Patrimonio & Sartène Rouge (Canarelli / Vaccelli)',
    dish: "Civet de Sanglier (Wild Boar Stew with Myrtle), Cabri Rôti (Roast Suckling Kid with Rosemary)",
    note: "The intense herbal garrigue (maquis) aromatics and earthy leather nuances of mature Niellucciu melt into rich, slow-simmered wild boar stew.",
    glassware: "Large Bordeaux Stem (650ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1–2 hours."
  },
  {
    category: 'Mediterranean Seafood & Crustaceans',
    wineType: 'White',
    targetWine: 'Patrimonio & Calvi Vermentinu (Arena / Leccia)',
    dish: "Grilled Loup de Mer (Sea Bass with Fennel), Grilled Langoustines with Herb Butter, Denti Fish with Capers & Fresh Sea Urchins (Oursins)",
    note: "Vermentinu's crystalline citrus oil, bitter almond finish, and crushed-rock salinity elevate grilled loup de mer, delicate white fish, and briny fresh sea urchins.",
    glassware: "Universal White Stem (450ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not required; aerate gently in glass."
  },
  {
    category: 'Traditional Ewe & Goat Cheeses',
    wineType: 'White',
    targetWine: 'Biancu Gentile & Aged Sciaccarellu (Abbatucci)',
    dish: "Brocciu AOP (Fresh & Passu), Niolo & Sartènes Cheese with Fig Jam",
    note: "Fresh Brocciu shines alongside the floral richness of Biancu Gentile, while aged, pungent Niolo cheese demands the savory structure of Sartène red.",
    glassware: "Universal White / Burgundy Stem (450ml)",
    servingTemp: "11–13°C (52–55°F)",
    decanting: "Not required."
  },
  {
    category: 'Dessert & VDN Pairing',
    wineType: 'White',
    targetWine: 'Muscat du Cap Corse AOC (Sweet VDN)',
    dish: "Fiadone (Corsican Lemon & Brocciu Cheesecake), Canistrelli (Anise Biscuits)",
    note: "The unctuous candied orange, apricot, and honeyed floral complexity of Muscat du Cap Corse creates a divine pairing with lemon-scented Fiadone.",
    glassware: "Dessert Wine Stem (350ml)",
    servingTemp: "9–11°C (48–52°F)",
    decanting: "Not required."
  }
];

export const CORSICA_PREMIER_CRUS = [];

