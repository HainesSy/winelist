/**
 * ============================================================================
 * OREGON (WILLAMETTE VALLEY) SOMMELIER DATASET (CMS LEVEL 3 / MASTER SOMMELIER)
 * ============================================================================
 * 
 * Comprehensive dataset for Oregon:
 *   - Willamette Valley 11 Nested AVAs (Dundee Hills, Eola-Amity, Ribbon Ridge, etc.)
 *   - Triple Soil Pedology (Volcanic Jory/Nekia, Marine Willakenzie, Glacial Laurelwood)
 *   - Technical Regulations (45th Parallel, Van Duzer Winds, 90% Varietal Law, Clones)
 *   - Benchmark Single-Vineyard Prestige Bottlings & Cult Cuvées
 *   - Iconic Oregon Vignerons & Master Winemakers
 *   - Color-Coded Gastronomic Food Pairings
 * ============================================================================
 */

export const OREGON_SUBREGIONS = [
  {
    id: 'dundee-hills',
    name: "Dundee Hills AVA",
    district: "Northern Willamette",
    lat: 45.2800,
    lng: -123.0100,
    terroir: "Iron-rich red volcanic Jory clay loam over basalt bedrock; south-facing hillside slopes providing excellent drainage and heat accumulation.",
    focus: "Pinot Noir & Chardonnay: Domaine Drouhin Oregon, Eyrie Vineyards, Beaux Frères, Domaine Serene, Archery Summit, Sokol Blosser.",
    geology: "Columbia River Basalt Group overlaid with deep, highly weathered red volcanic Jory clay loam.",
    dominantGrapes: "Pinot Noir (primary), Chardonnay, Pinot Gris",
    microTerroirs: [
      { name: "Worden Hill Road", focus: "High-elevation volcanic ridge producing perfumed, silky, red-cherry Pinots (Domaine Drouhin, Archery Summit)" },
      { name: "Red Hills Core", focus: "Historic South Block of Eyrie Vineyards, the spiritual birthplace of Oregon Pinot Noir" }
    ],
    description: "The historical epicenter of Oregon fine wine. Silky, elegant, floral Pinot Noir filled with bright red Rainier cherries, wild strawberries, truffles, and warm baking spices."
  },
  {
    id: 'eola-amity-hills',
    name: "Eola-Amity Hills AVA",
    district: "Central Willamette",
    lat: 45.0500,
    lng: -123.1000,
    terroir: "Shallow volcanic Nekia and basalt soils directly aligned with the Van Duzer Corridor, catching violent late-afternoon Pacific ocean gales.",
    focus: "Pinot Noir & Chardonnay: Cristom Vineyards, Walter Scott, Lingua Franca, Evening Land, Bethel Heights, Brooks.",
    geology: "Shallow volcanic Nekia clay loam over basalt with sedimentary sand intrusions.",
    dominantGrapes: "Pinot Noir, Chardonnay, Gamay Noir",
    microTerroirs: [
      { name: "Spring Valley Slope", focus: "Cristom's single-vineyard collection (Marjorie, Louise, Jessie, Eileen) on volcanic benches" },
      { name: "Seven Springs Crest", focus: "Historic biodynamic hillside capturing cold ocean gales (Evening Land, Walter Scott)" }
    ],
    description: "Electric acidity and saline tension, dark brambly fruit, thick grape skins, citrus peel, and intense structural tension forged by daily Pacific ocean winds."
  },
  {
    id: 'ribbon-ridge-yamhill',
    name: "Ribbon Ridge & Yamhill-Carlton",
    district: "Northern Willamette",
    lat: 45.3300,
    lng: -123.1300,
    terroir: "Ancient marine sedimentary ocean floor sandstone (Willakenzie series); coarse, fast-draining soils sheltered by the Coast Range.",
    focus: "Pinot Noir & Chardonnay: Beaux Frères, Shea Vineyard, Ken Wright Cellars, Brick House, Patricia Green, Soter Vineyards, Penner-Ash.",
    geology: "Ancient Eocene and Oligocene marine sedimentary Willakenzie sandstone, siltstone, and mudstone.",
    dominantGrapes: "Pinot Noir (primary), Chardonnay",
    microTerroirs: [
      { name: "Ribbon Ridge Ridgecrest", focus: "Tiny 500-acre sandstone island producing dark black cherry, crushed violet, and refined mineral tannins" },
      { name: "Yamhill-Carlton Horseshoe", focus: "Coarse marine sandstone bowl yielding dark blackberry, licorice, tobacco, and forest floor (Shea Vineyard)" }
    ],
    description: "Darker, broody, brambly black fruits, iron minerality, pipe tobacco, savory forest floor, and fine-grained muscular tannins from ancient seabed sandstones."
  },
  {
    id: 'chehalem-mountains',
    name: "Chehalem Mountains & Laurelwood District",
    district: "Northern Willamette",
    lat: 45.3800,
    lng: -122.9800,
    terroir: "Highest elevation in Willamette Valley (Bald Peak 1,633ft) featuring a complex triple soil mosaic: volcanic Jory, marine Willakenzie, and windblown glacial loess (Laurelwood).",
    focus: "Pinot Noir & Chardonnay: Ponzi Vineyards, Adelsheim, Bergström, Rex Hill, REX HILL, Dion Vineyard.",
    geology: "Windblown loess (Laurelwood) over volcanic basalt and marine sedimentary beds.",
    dominantGrapes: "Pinot Noir, Chardonnay, Pinot Gris, Riesling",
    microTerroirs: [
      { name: "Laurelwood District", focus: "Porous windblown glacial loess over basalt producing high-toned red fruits, lavender floral lift, and silken texture" },
      { name: "Bald Peak Summit", focus: "High-elevation cool parcels yielding chiseled, mineral-driven Chardonnays" }
    ],
    description: "A diverse mountain range with the valley's highest peaks, providing layered, multi-dimensional Pinot Noirs with floral aromatics and silken textures."
  },
  {
    id: 'mcminnville-ava',
    name: "McMinnville AVA",
    district: "Western Willamette",
    lat: 45.1800,
    lng: -123.3200,
    terroir: "Shallow, stony marine sedimentary and basalt soils with severe Pacific wind exposure nestled against the Coast Range foothills.",
    focus: "Pinot Noir: Brittan Vineyards, Hyland Estates, Maysara Winery, Coeur de Terre.",
    geology: "Nestucca marine siltstone and weathered basalt with intense wind scouring.",
    dominantGrapes: "Pinot Noir (primary), Pinot Blanc, Riesling",
    microTerroirs: [
      { name: "Foothill Terraces", focus: "Stony, wind-swept slopes yielding dark, muscular, iron-driven, and structured Pinots" }
    ],
    description: "Rugged and wind-swept. Produces deeply colored, muscular, iron-inflected Pinot Noirs with firm structural grip and earthy black fruit."
  },
  {
    id: 'van-duzer-corridor',
    name: "Van Duzer Corridor AVA",
    district: "Central Willamette",
    lat: 45.0100,
    lng: -123.2500,
    terroir: "Direct wind gap in the Coast Range funneling raw Pacific oceanic gales into the Willamette Valley, driving dramatic diurnal drops.",
    focus: "Pinot Noir & Pinot Gris: Johan Vineyards, Left Coast Estate, Van Duzer Vineyards.",
    geology: "Marine sedimentary Bellpine and siltstone with volcanic basalt gravels.",
    dominantGrapes: "Pinot Noir, Chardonnay, Pinot Gris, Pinot Blanc",
    microTerroirs: [
      { name: "Corridor Floor", focus: "Wind-battered vines with thick grape skins producing electric acidity and deep phenolic depth" }
    ],
    description: "The air conditioning engine of the Willamette Valley. Extreme wind exposure produces thick grape skins, bracing natural acidity, and saline tension."
  },
  {
    id: 'mount-pisgah-lower-long-tom',
    name: "Mount Pisgah & Lower Long Tom",
    district: "Southern Willamette",
    lat: 44.2500,
    lng: -123.2800,
    terroir: "Ancient marine sedimentary Bellpine and sandstone hills in the central and southern Willamette Valley.",
    focus: "Pinot Noir & Chardonnay: Antiquum Farm, Freedom Hill Vineyard, Benton-Lane.",
    geology: "Ancient marine sedimentary seafloor formations and sandstone terraces.",
    dominantGrapes: "Pinot Noir, Pinot Gris, Chardonnay",
    microTerroirs: [
      { name: "Freedom Hill (Mt. Pisgah)", focus: "Famous sedimentary bench producing benchmark structured, dark-fruited Pinots for Ken Wright and Walter Scott" },
      { name: "Lower Long Tom", focus: "Southern Willamette Bellpine soils with grazing-based regenerative viticulture (Antiquum Farm)" }
    ],
    description: "The newest frontiers of Willamette Valley nested AVAs, celebrated for profound single-vineyard sites on ancient marine sediment."
  }
];

export const OREGON_GRAND_CRUS = [
  // ==========================================
  // WILLAMETTE VALLEY NESTED AVAs
  // ==========================================
  {
    id: 'oregon-ava-dundee-hills',
    name: "Dundee Hills AVA",
    village: "Dundee",
    commune: "Dundee",
    subregion: "Willamette Valley",
    district: "Northern Willamette",
    subregionId: 'dundee-hills',
    districtId: 'dundee-hills',
    lat: 45.2783,
    lng: -123.0117,
    areaHa: 2800.00,
    aocDecreeYear: 2004,
    establishedYear: 1965,
    elevationRange: "60m – 335m (200ft – 1,100ft)",
    aspect: "South / South-East rolling volcanic slopes",
    dominantGrape: "Pinot Noir (85%+)",
    grapeRatio: "Pinot Noir (85%), Chardonnay (12%), Pinot Gris (3%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Historic Volcanic AVA",
    baseYield: "30–40 hl/ha",
    minPotentialAbv: "13.2% vol.",
    soil: "Red volcanic Jory clay loam (iron-rich weathered basalt with excellent water retention)",
    character: "The spiritual home of Oregon Pinot Noir. Haunting perfume of bright red Rainier cherry, wild raspberry, damp truffle, cinnamon, and silky fine tannins.",
    legalNotes: "Established as Oregon's first nested AVA in 2004.",
    historicalSignificance: "David Lett ('Papa Pinot') planted the first Pinot Noir vines here in 1965 at The Eyrie Vineyards.",
    benchmarkProducers: ["Domaine Drouhin Oregon (Laurène)", "The Eyrie Vineyards (South Block)", "Beaux Frères (The Upper Terrace)", "Domaine Serene (Evenstad Reserve)", "Archery Summit", "Bergström"],
    famousProducers: ["Domaine Drouhin Oregon", "The Eyrie Vineyards", "Beaux Frères", "Domaine Serene", "Archery Summit"],
    iconicVineyards: ["Eyrie Original Vines (1965 South Block)", "Dundee Hills Estate (Drouhin)", "Evenstad Estate", "Abbey Ridge"]
  },
  {
    id: 'oregon-ava-eola-amity',
    name: "Eola-Amity Hills AVA",
    village: "Amity / Salem",
    commune: "Eola-Amity Hills",
    subregion: "Willamette Valley",
    district: "Central Willamette",
    subregionId: 'eola-amity-hills',
    districtId: 'eola-amity-hills',
    lat: 45.0500,
    lng: -123.1000,
    areaHa: 16000.00,
    aocDecreeYear: 2006,
    establishedYear: 1971,
    elevationRange: "75m – 365m (250ft – 1,200ft)",
    aspect: "East and west-facing slopes directly aligned with the Van Duzer Corridor",
    dominantGrape: "Pinot Noir & Chardonnay",
    grapeRatio: "Pinot Noir (75%), Chardonnay (20%), Gamay Noir (5%)",
    wineType: "Red / White",
    tier: "grandCru",
    badge: "🌬️ Van Duzer Marine AVA",
    baseYield: "30–35 hl/ha",
    minPotentialAbv: "13.0% vol.",
    soil: "Shallow volcanic Nekia clay loam, basalt cobbles, and marine sedimentary loam",
    character: "Electric acidity, dark black cherry, wild blueberry, crushed slate, savory herbs, and thick-skinned structural tension.",
    legalNotes: "Established 2006.",
    historicalSignificance: "Site of historic Seven Springs Vineyard, planted in 1982 by Al MacDonald.",
    benchmarkProducers: ["Cristom Vineyards (Marjorie, Jessie, Louise)", "Walter Scott (X-Novo, Koosah)", "Lingua Franca (The Plow)", "Evening Land (Seven Springs La Source)", "Bethel Heights"],
    famousProducers: ["Cristom Vineyards", "Walter Scott", "Lingua Franca", "Evening Land", "Bethel Heights"],
    iconicVineyards: ["Seven Springs Vineyard (1982)", "X-Novo Vineyard", "Marjorie Vineyard (Cristom)", "Koosah Vineyard"]
  },
  {
    id: 'oregon-ava-ribbon-ridge',
    name: "Ribbon Ridge AVA",
    village: "Newberg",
    commune: "Ribbon Ridge",
    subregion: "Willamette Valley",
    district: "Northern Willamette",
    subregionId: 'ribbon-ridge-yamhill',
    districtId: 'ribbon-ridge-yamhill',
    lat: 45.3400,
    lng: -123.0700,
    areaHa: 1350.00,
    aocDecreeYear: 2005,
    establishedYear: 1980,
    elevationRange: "60m – 205m (200ft – 680ft)",
    aspect: "Ridge island sheltered by Chehalem Mountains",
    dominantGrape: "Pinot Noir (90%+)",
    grapeRatio: "Pinot Noir (90%), Chardonnay (8%), Gamay (2%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "🪨 Marine Sandstone AVA",
    baseYield: "30–35 hl/ha",
    minPotentialAbv: "13.5% vol.",
    soil: "100% ancient marine sedimentary Willakenzie series sandstone (ocean bed uplifting)",
    character: "Dark, broody, and aristocratic. Black cherry, crushed violets, dried cardamom, crushed stone, and refined, powdery tannins.",
    legalNotes: "Smallest nested AVA in the Willamette Valley (1,350 ha total, ~250 ha under vine). Established 2005.",
    historicalSignificance: "First commercial vineyard planted by Harry Peterson-Nedry (Ridgecrest) in 1980; Beaux Frères founded in 1988.",
    benchmarkProducers: ["Beaux Frères (The Beaux Frères Vineyard)", "Brick House Vineyards", "Patricia Green Cellars", "Brambles", "Sequitur"],
    famousProducers: ["Beaux Frères", "Brick House Vineyards", "Patricia Green Cellars"],
    iconicVineyards: ["The Beaux Frères Vineyard (1988)", "Ridgecrest Vineyard (1980)", "Les Cousins"]
  },
  {
    id: 'oregon-ava-yamhill-carlton',
    name: "Yamhill-Carlton AVA",
    village: "Yamhill / Carlton",
    commune: "Yamhill-Carlton",
    subregion: "Willamette Valley",
    district: "Northern Willamette",
    subregionId: 'ribbon-ridge-yamhill',
    districtId: 'ribbon-ridge-yamhill',
    lat: 45.3500,
    lng: -123.1800,
    areaHa: 24000.00,
    aocDecreeYear: 2004,
    establishedYear: 1974,
    elevationRange: "60m – 305m (200ft – 1,000ft)",
    aspect: "Horseshoe-shaped drainage basin surrounding Yamhill and Carlton",
    dominantGrape: "Pinot Noir (90%+)",
    grapeRatio: "Pinot Noir (90%), Chardonnay (8%), Pinot Blanc (2%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "🌟 Ancient Marine AVA",
    baseYield: "30–40 hl/ha",
    minPotentialAbv: "13.5% vol.",
    soil: "Coarse, freely-draining marine sedimentary Willakenzie and Peavine sandstones",
    character: "Dark blackberry, black plum, pipe tobacco, licorice, clove, damp forest floor, and savory, muscular tannins.",
    legalNotes: "Established 2004; horseshoe-shaped ring of marine sandstone ridges.",
    historicalSignificance: "Dick Shea planted the legendary Shea Vineyard in 1989, supplying iconic fruit across Oregon and California.",
    benchmarkProducers: ["Ken Wright Cellars", "Shea Wine Cellars", "Soter Vineyards", "Penner-Ash Wine Cellars", "Gran Moraine", "Big Table Farm"],
    famousProducers: ["Ken Wright Cellars", "Shea Wine Cellars", "Soter Vineyards", "Penner-Ash Wine Cellars"],
    iconicVineyards: ["Shea Vineyard (1989)", "Abbott Claim", "Mineral Springs Ranch (Soter)", "Savoya Vineyard"]
  },
  {
    id: 'oregon-ava-chehalem-mountains',
    name: "Chehalem Mountains AVA",
    village: "Newberg / Sherwood",
    commune: "Chehalem Mountains",
    subregion: "Willamette Valley",
    district: "Northern Willamette",
    subregionId: 'chehalem-mountains',
    districtId: 'chehalem-mountains',
    lat: 45.3800,
    lng: -122.9800,
    areaHa: 27500.00,
    aocDecreeYear: 2006,
    establishedYear: 1968,
    elevationRange: "60m – 498m (200ft – 1,633ft)",
    aspect: "Highest peaks in the Willamette Valley (Bald Peak)",
    dominantGrape: "Pinot Noir & Chardonnay",
    grapeRatio: "Pinot Noir (75%), Chardonnay (15%), Pinot Gris (10%)",
    wineType: "Red / White",
    tier: "grandCru",
    badge: "🏔️ High Mountain AVA",
    baseYield: "35–45 hl/ha",
    minPotentialAbv: "13.2% vol.",
    soil: "Triple soil mosaic: volcanic Jory/Nekia, marine Willakenzie, and windblown glacial loess (Laurelwood)",
    character: "Complex, layered red and black cherry, baking spice, lavender, white tea, and silken, seamless texture.",
    legalNotes: "Established 2006; contains nested Laurelwood District AVA.",
    historicalSignificance: "Dick Erath and David Adelsheim planted the first modern vineyards here in 1968–1971.",
    benchmarkProducers: ["Ponzi Vineyards", "Adelsheim Vineyard", "Bergström Wines (Silice)", "Rex Hill", "Colene Clemens", "J. Christopher"],
    famousProducers: ["Ponzi Vineyards", "Adelsheim Vineyard", "Bergström Wines", "Rex Hill"],
    iconicVineyards: ["Adelsheim Quarter Mile Lane", "Avellana Vineyard", "Silice Vineyard", "Ponzi Madrona"]
  }
];

export const OREGON_TECHNICAL_REGULATIONS = {
  geology: {
    summary: "The Willamette Valley was formed by tectonic subduction uplifting ancient marine seabed, later capped by Columbia River basalt lava flows, and top-dressed with windblown glacial loess from the Missoula Floods.",
    formations: [
      {
        name: "Volcanic Basalt (Jory & Nekia Series)",
        period: "Miocene (Columbia River Basalt Group, ~15–17 Ma)",
        keyAreas: ["Dundee Hills", "Eola-Amity Hills (Nekia)", "Chehalem Mountains"],
        wineImpact: "Iron-rich, highly weathered red clay loam. Imparts signature high-toned red cherry, wild raspberry, damp truffle, and fine, silky tannins."
      },
      {
        name: "Ancient Marine Sedimentary Sandstone (Willakenzie Series)",
        period: "Eocene to Oligocene (Marine Uplifting, ~35–40 Ma)",
        keyAreas: ["Ribbon Ridge", "Yamhill-Carlton", "McMinnville", "Mount Pisgah"],
        wineImpact: "Ancient uplifted Pacific seabed sandstone and siltstone. Low water retention forces deep rooting, yielding dark blackberry, black tea, graphite, and savory, muscular structure."
      },
      {
        name: "Windblown Glacial Loess (Laurelwood Series)",
        period: "Pleistocene (Missoula Floods & Post-Glacial Wind Deposits, ~15,000–18,000 BP)",
        keyAreas: ["Laurelwood District", "Tualatin Hills", "Northern Chehalem Mountains"],
        wineImpact: "Fine silty windblown dust over weathered basalt with pisolite iron concretions. Delivers floral violet aromas, white pepper, and a silken, plush mouthfeel."
      }
    ]
  },

  climatology: {
    system: "Cool Maritime / Mediterranean (45th Parallel North)",
    description: "Situated on the same 45th parallel north as Burgundy, Oregon enjoys long summer daylight hours (up to 15.5 hours in July) balanced by cool nights. The Coast Range protects the valley from raw Pacific storms, while the Van Duzer Corridor acts as a natural air conditioner.",
    winds: [
      {
        name: "Van Duzer Corridor Pacific Ocean Gales",
        effect: "A break in the Oregon Coast Range that pulls chilly ocean breezes into the central valley every afternoon at 3:00 PM, plummeting vineyard temperatures by 30°F, preserving electric natural malic and tartaric acidity."
      }
    ]
  },

  grapes: {
    system: "Oregon Ampelographic Framework & Clonal Heritage",
    description: "World-class focus on Pinot Noir and Chardonnay, pioneered by clonal research from the University of Burgundy (Dijon) and historic Swiss/Alsatian heritage clones.",
    major: [
      {
        id: 'pinot-noir',
        name: "Pinot Noir",
        percentage: 70,
        type: "Red",
        epicenter: "Willamette Valley (all 11 nested AVAs)",
        profile: "Wild cranberry, red Rainier cherry, pomegranate, blood orange, damp Pacific conifer forest floor, and crushed wet stones",
        role: "The global soul of Oregon wine, transparently reflecting microscopic shifts in volcanic vs. marine soils",
        benchmarkCuvees: ["Beaux Frères Vineyard", "Eyrie South Block", "Domaine Drouhin Laurène", "Cristom Marjorie"]
      },
      {
        id: 'chardonnay',
        name: "Chardonnay",
        percentage: 20,
        type: "White",
        epicenter: "Eola-Amity Hills, Dundee Hills, Chehalem Mountains",
        profile: "Chiseled green apple, Meyer lemon, white peach, crushed oyster shell, roasted hazelnut, and vibrating saline acidity",
        role: "Oregon's white wine revolution, competing directly with Grand Cru Côte de Beaune",
        benchmarkCuvees: ["Walter Scott X-Novo", "Bergström Sigrid", "Evening Land Seven Springs La Source", "Cameron Clos Electrique"]
      },
      {
        id: 'pinot-gris',
        name: "Pinot Gris",
        percentage: 10,
        type: "White",
        epicenter: "Northern Willamette Valley",
        profile: "Crisp Asian pear, white peach, citrus zest, melon, and refreshing mineral snap",
        role: "Pioneered by David Lett in 1966 as America's first commercial Pinot Gris planting",
        benchmarkCuvees: ["Eyrie Original Vines Pinot Gris", "King Estate Domaine"]
      }
    ],
    clones: [
      {
        variety: "Pinot Noir Clones",
        details: "Heritage Pommard (UCD 4) yielding deep color and dark plum; Wädenswil (UCD 1A/2A) yielding high-toned floral and spice; Dijon Clones (115, 667, 777, 828) introduced in the late 1980s for early ripening, tight clusters, and structured tannins; Coury Clone."
      },
      {
        variety: "Chardonnay Clones",
        details: "Dijon Clones (76, 95, 96) revolutionized Oregon Chardonnay in the 1990s by ripening fully in cool autumns; Mount Eden and Draper heritage selections."
      }
    ]
  },

  classification: {
    system: "Oregon State Strictest Wine Labeling Laws",
    description: "Oregon enforces the most rigorous wine labeling standards in the United States, significantly stricter than federal TTB regulations to protect quality and authenticity.",
    pyramid: [
      {
        tier: "Single Vineyard Designation",
        frenchTerm: "Single Vineyard (Lieu-dit)",
        criteria: "Minimum 95% of grapes must come from the named single vineyard within an Oregon AVA.",
        aging: "Discretionary; typically 12–18 months in French oak (10–30% new).",
        yield: "Low yields (25–35 hl/ha).",
        examples: ["Shea Vineyard", "X-Novo Vineyard", "The Beaux Frères Vineyard"]
      },
      {
        tier: "Nested AVA (Sub-Appellation)",
        frenchTerm: "Sub-Appellation (Village equivalent)",
        criteria: "Minimum 95% of grapes must originate from the stated nested AVA boundary (e.g. Dundee Hills, Eola-Amity Hills).",
        aging: "Estate standard.",
        yield: "Strict quality control.",
        examples: ["Dundee Hills AVA", "Eola-Amity Hills AVA", "Ribbon Ridge AVA"]
      },
      {
        tier: "Willamette Valley AVA",
        frenchTerm: "Regional Appellation",
        criteria: "Minimum 95% of grapes must originate from the Willamette Valley.",
        aging: "Estate choice.",
        yield: "Standard commercial yields.",
        examples: ["Willamette Valley AVA"]
      }
    ],
    legalLabelingLaws: [
      "Strict 90% Varietal Law: Oregon law mandates that wines labeled with a single grape variety (Pinot Noir, Chardonnay, Pinot Gris, Pinot Blanc) must contain at least 90% of that variety (compared to only 75% required by federal TTB law).",
      "Strict 95% AVA Law: Any wine labeled with an Oregon AVA must contain at least 95% of grapes grown within that stated AVA (compared to 85% federally).",
      "No Generic Semi-Generic Names: Oregon prohibits the use of terms like 'Chablis' or 'Burgundy' on wine labels."
    ]
  }
};

export const OREGON_PRESTIGE_ESTATES = [
  {
    id: 'beaux-freres-vineyard',
    name: "The Beaux Frères Vineyard Pinot Noir",
    producer: "Beaux Frères",
    estate: "The Beaux Frères Vineyard",
    debutVintage: "1991",
    vintageDebut: "1991",
    appellation: "Ribbon Ridge AVA",
    village: "Newberg",
    subregion: "Ribbon Ridge & Yamhill-Carlton",
    areaHa: 10.00,
    wineType: "Red",
    dominantGrape: "Pinot Noir",
    grapeComposition: "Pinot Noir (100% Pommard, Wädenswil, and Dijon clones)",
    blend: "Pinot Noir (100%)",
    classification: "Oregon Cult Grand Cru",
    status: "Mike Etzel's un-grafted, un-fined, un-filtered ribbon ridge masterpiece",
    terroir: "Ancient marine sedimentary Willakenzie sandstone on steep 100% un-grafted hillside slope.",
    winemaking: "Native yeast fermentation, aged 12–14 months in 35–50% new French oak barrels from elite cooperages, bottled unfined and unfiltered.",
    historicalLore: "Founded in 1988 by Michael G. Etzel and his brother-in-law, wine critic Robert M. Parker Jr.",
    character: "Opulent dark cherries, black tea leaf, dried violets, star anise, wild forest mushrooms, and velvety, mineral-dusted tannins.",
    iconicStatus: "The gold standard for artisanal, unmanipulated Oregon Pinot Noir.",
    prominenceRank: 1
  },
  {
    id: 'eyrie-south-block',
    name: "The Eyrie Vineyards 'South Block Reserve'",
    producer: "The Eyrie Vineyards",
    estate: "Original Vines (Dundee Hills)",
    debutVintage: "1975",
    vintageDebut: "1975",
    appellation: "Dundee Hills AVA",
    village: "Dundee",
    subregion: "Dundee Hills AVA",
    areaHa: 3.00,
    wineType: "Red",
    dominantGrape: "Pinot Noir",
    grapeComposition: "Pinot Noir (100% un-grafted vines planted 1965)",
    blend: "Pinot Noir (100%)",
    classification: "Historic Oregon Heritage Icon",
    status: "David Lett's historic time capsule of American wine history",
    terroir: "Red volcanic Jory clay loam on the original 1965 South Block plantings in Dundee Hills.",
    winemaking: "Minimal intervention, native yeasts, aged in neutral French oak, bottled with minimal sulfur.",
    historicalLore: "Eyrie's 1975 South Block placed top 3 in the 1979 Gault-Millau Wine Olympiad in Paris, shocking French judges and establishing Oregon's global reputation.",
    character: "Hauntingly ethereal, dried rose petals, wild strawberries, orange peel, damp forest floor, and gossamer, featherweight tannins of incredible longevity.",
    iconicStatus: "The most historically important single-vineyard Pinot Noir in the United States.",
    prominenceRank: 2
  },
  {
    id: 'domaine-drouhin-laurene',
    name: "Domaine Drouhin Oregon 'Cuvée Laurène'",
    producer: "Domaine Drouhin Oregon",
    estate: "Dundee Hills Estate",
    debutVintage: "1992",
    vintageDebut: "1992",
    appellation: "Dundee Hills AVA",
    village: "Dundee",
    subregion: "Dundee Hills AVA",
    areaHa: 50.00,
    wineType: "Red",
    dominantGrape: "Pinot Noir",
    grapeComposition: "Pinot Noir (100% Estate selection)",
    blend: "Pinot Noir (100%)",
    classification: "Franco-Oregonian Landmark",
    status: "Maison Joseph Drouhin's Burgundian soul in the Red Hills of Dundee",
    terroir: "High-density (up to 7,000 vines/ha) volcanic Jory clay loam at 600–900ft in Dundee Hills.",
    winemaking: "Crafted by fourth-generation Burgundian winemaker Véronique Boss-Drouhin; native yeasts, aged 14–18 months in custom French oak barrels from the Drouhin cooperage.",
    historicalLore: "Robert Drouhin recognized the potential of Willamette in 1987, making DDO the first major Burgundy house to invest in Oregon.",
    character: "Aristocratic poise, bright Rainier cherries, red currant, lilac florals, savory truffle, and silken Burgundian finesse.",
    iconicStatus: "The supreme benchmark for Franco-Oregonian elegance.",
    prominenceRank: 3
  },
  {
    id: 'walter-scott-x-novo',
    name: "Walter Scott 'X-Novo Vineyard' Chardonnay",
    producer: "Walter Scott Wines",
    estate: "X-Novo Vineyard",
    debutVintage: "2013",
    vintageDebut: "2013",
    appellation: "Eola-Amity Hills AVA",
    village: "Amity",
    subregion: "Eola-Amity Hills AVA",
    areaHa: 2.50,
    wineType: "White",
    dominantGrape: "Chardonnay (100%)",
    grapeComposition: "Chardonnay (100% co-planted 15 distinct heritage clones)",
    blend: "Chardonnay (100%)",
    classification: "American White Grand Cru Benchmark",
    status: "Ken Pahlow & Erica Landon's laser-sharp mineral Chardonnay revelation",
    terroir: "Rocky basalt soils cooled by intense Van Duzer Corridor oceanic winds.",
    winemaking: "Pneumatic pressing without sulfur, native fermentation in 500L puncheons, no bâttonage, aged 12 months in barrel + 6 months in stainless tank.",
    historicalLore: "Propelled Oregon Chardonnay into global spotlight, rivaling the greatest Grand Crus of Puligny and Meursault.",
    character: "Laser-sharp reduction, crushed flint, lemon curd, white peach, toasted hazelnut, saline sea spray, and electrifying natural acidity.",
    iconicStatus: "The gold standard of the Oregon Chardonnay Renaissance.",
    prominenceRank: 4
  },
  {
    id: 'cristom-marjorie',
    name: "Cristom Vineyards 'Marjorie Vineyard' Pinot Noir",
    producer: "Cristom Vineyards",
    estate: "Cristom Estate (Eola-Amity Hills)",
    debutVintage: "1994",
    vintageDebut: "1994",
    appellation: "Eola-Amity Hills AVA",
    village: "Salem",
    subregion: "Eola-Amity Hills AVA",
    areaHa: 3.50,
    wineType: "Red",
    dominantGrape: "Pinot Noir",
    grapeComposition: "Pinot Noir (100% un-grafted vines planted 1982)",
    blend: "Pinot Noir (100%)",
    classification: "Whole-Cluster Eola-Amity Grand Cru",
    status: "Steve Doerner and Paul Gerrie's whole-cluster biodynamic monument",
    terroir: "Volcanic basalt and shallow volcanic Nekia clay on a steep southeast-facing slope.",
    winemaking: "Native yeast fermentation with 40–60% whole clusters in open-top wooden and stainless vats, gravity-flow, aged 18 months in French oak.",
    historicalLore: "Named in honor of founder Paul Gerrie's mother, Marjorie.",
    character: "Exotic Indian spices, black tea, dark plum, wild boysenberry, dried roses, and firm, structural tannins of immense longevity.",
    iconicStatus: "The benchmark for whole-cluster Pinot Noir mastery in Oregon.",
    prominenceRank: 5
  },
  {
    id: 'bergstrom-sigrid',
    name: "Bergström 'Sigrid' Chardonnay",
    producer: "Bergström Wines",
    estate: "Bergström Estate Selection",
    debutVintage: "2006",
    vintageDebut: "2006",
    appellation: "Willamette Valley AVA",
    village: "Dundee",
    subregion: "Dundee Hills AVA",
    areaHa: 6.00,
    wineType: "White",
    dominantGrape: "Chardonnay (100%)",
    grapeComposition: "Chardonnay (100% biodynamically farmed old-vine selection)",
    blend: "Chardonnay (100%)",
    classification: "Biodynamic White Icon",
    status: "Josh Bergström's tribute to his Scandinavian grandmother Sigrid",
    terroir: "Hand-selected micro-parcels across estate volcanic and marine sedimentary terroirs.",
    winemaking: "Demeter-certified biodynamic viticulture; slow whole-cluster pressing, native yeast fermentation in neutral and light-toast French oak, aged 18 months.",
    historicalLore: "Founded by Dr. John Bergström and son Josh in 1999.",
    character: "Sublime white peach, chamomile, salted butter, roasted hazelnut, crushed quartz minerality, and vibrating, crystalline length.",
    iconicStatus: "One of the most celebrated and collectible white wines in America.",
    prominenceRank: 6
  }
];

export const OREGON_ICONIC_PRODUCERS = [
  {
    id: 'eyrie-vineyards',
    name: "The Eyrie Vineyards",
    village: "Dundee / McMinnville",
    subregion: "Dundee Hills AVA",
    vigneron: "David Lett (Founder) / Jason Lett",
    proprietor: "Lett Family",
    wineType: "Red / White",
    philosophy: "The pioneering founding estate of Oregon wine. Gentle, non-interventional winemaking, minimal sulfur, native yeasts, and radical varietal purity.",
    keyCuvees: ["Original Vines Pinot Noir (South Block)", "Original Vines Pinot Gris", "Original Vines Chardonnay", "Dundee Hills Pinot Noir"],
    iconicVineyards: ["Eyrie Original Vines (Dundee Hills, 1965)"]
  },
  {
    id: 'domaine-drouhin-oregon',
    name: "Domaine Drouhin Oregon (DDO)",
    village: "Dundee (Dundee Hills)",
    subregion: "Dundee Hills AVA",
    vigneron: "Véronique Boss-Drouhin / Philippe Drouhin",
    proprietor: "Maison Joseph Drouhin",
    wineType: "Red / White",
    philosophy: "'French soul, Oregon soil.' Dense Burgundian planting, gentle gravity-fed vinification, and estate-crafted French oak barrels.",
    keyCuvees: ["Laurène Pinot Noir", "Louise Pinot Noir", "Édition Limitée", "Arthur Chardonnay", "Roserock Zéphirine (Eola-Amity)"],
    iconicVineyards: ["DDO Estate Vineyard (Dundee Hills)", "Roserock Vineyard (Eola-Amity)"]
  },
  {
    id: 'beaux-freres',
    name: "Beaux Frères",
    village: "Newberg (Ribbon Ridge)",
    subregion: "Ribbon Ridge & Yamhill-Carlton",
    vigneron: "Michael G. Etzel / Mike Etzel Jr.",
    proprietor: "Etzel Family & Maisons & Domaines Henriot",
    wineType: "Red / White",
    philosophy: "Unfined, unfiltered, unmanipulated Pinot Noir from un-grafted vines. Biodynamic farming, low yields, and unyielding dedication to site expression.",
    keyCuvees: ["The Beaux Frères Vineyard", "The Upper Terrace", "The Belles Sœurs", "Sequitur"],
    iconicVineyards: ["The Beaux Frères Vineyard (Ribbon Ridge, 1988)", "The Upper Terrace"]
  },
  {
    id: 'cristom-vineyards',
    name: "Cristom Vineyards",
    village: "Salem (Eola-Amity Hills)",
    subregion: "Eola-Amity Hills AVA",
    vigneron: "Steve Doerner / Paul Gerrie / Daniel Doerner",
    proprietor: "Gerrie Family",
    wineType: "Red / White",
    philosophy: "World benchmark for whole-cluster native yeast fermentation and estate single-vineyard Pinot Noirs in the wind-swept Eola-Amity Hills.",
    keyCuvees: ["Marjorie Vineyard Pinot Noir", "Jessie Vineyard", "Louise Vineyard", "Eileen Vineyard", "Mt. Jefferson Cuvée"],
    iconicVineyards: ["Marjorie Vineyard (1982)", "Jessie Vineyard", "Louise Vineyard", "Eileen Vineyard"]
  },
  {
    id: 'walter-scott',
    name: "Walter Scott Wines",
    village: "Salem (Eola-Amity Hills)",
    subregion: "Eola-Amity Hills AVA",
    vigneron: "Ken Pahlow & Erica Landon",
    proprietor: "Pahlow & Landon Families",
    wineType: "White / Red",
    philosophy: "World-renowned leaders of the Oregon Chardonnay Renaissance and crystalline, terroir-pure Pinot Noir from elite volcanic and marine vineyard sites.",
    keyCuvees: ["X-Novo Chardonnay", "Koosah Chardonnay", "Freedom Hill Chardonnay", "Seven Springs Pinot Noir", "La Combe Verte"],
    iconicVineyards: ["X-Novo Vineyard", "Koosah Vineyard", "Freedom Hill Vineyard"]
  },
  {
    id: 'ken-wright-cellars',
    name: "Ken Wright Cellars",
    village: "Carlton (Yamhill-Carlton)",
    subregion: "Ribbon Ridge & Yamhill-Carlton",
    vigneron: "Ken Wright",
    proprietor: "Ken & Karen Wright",
    wineType: "Red / White",
    philosophy: "Geological purist. Pioneered the mapping of Willamette Valley soil profiles and championed single-vineyard bottling across 13 distinct AVAs.",
    keyCuvees: ["Shea Vineyard Pinot Noir", "Tanager Vineyard", "McCrone Vineyard", "Abbott Claim Vineyard", "Canary Hill Vineyard", "Freedom Hill Vineyard"],
    iconicVineyards: ["Shea Vineyard", "Tanager Vineyard", "McCrone Vineyard", "Savoya Vineyard"]
  }
];

export const OREGON_FOOD_PAIRINGS = [
  {
    category: 'Wild Pacific Salmon',
    wineType: 'Red',
    targetWine: 'Dundee Hills & Eola-Amity Hills Pinot Noir',
    dish: "Cedar-Planked Wild Chinook Salmon with Marionberry Glaze, Pan-Crisped Steelhead Trout with Pinot Butter",
    note: "The quintessential Pacific Northwest pairing: salmon's rich omega-3 fatty oils marry Oregon Pinot Noir's singing red fruit acidity and forest-floor notes without metallic clash."
  },
  {
    category: 'Wild Foraged Mushrooms & Duck',
    wineType: 'Red',
    targetWine: 'Ribbon Ridge & Yamhill-Carlton Marine Sedimentary Pinot Noir',
    dish: "Seared Duck Breast with Marionberry Demi, Wild Morel and Chanterelle Mushroom Risotto, Roasted Quail with Oregon Black Truffles",
    note: "Marine sandstone Pinot Noirs offer dark blackberry, damp conifer needles, and sous-bois truffle earthiness that elevate wild-foraged mushrooms and tender game birds."
  },
  {
    category: 'Pacific Coast Crustaceans',
    wineType: 'White',
    targetWine: 'Eola-Amity Hills & Dundee Hills Chardonnay (Walter Scott / Bergström)',
    dish: "Fresh Oregon Dungeness Crab with Drawn Lemon Butter, Pan-Seared Weathervane Scallops with Hazelnut Brown Butter",
    note: "Laser-sharp natural acidity and crushed oyster shell minerality slice through sweet crab meat and hazelnut brown butter."
  },
  {
    category: 'Artisanal Cheeses',
    wineType: 'White / Red',
    targetWine: 'Willamette Valley Pinot Noir & Chardonnay',
    dish: "Rogue River Blue (Southern Oregon, pear-brandy soaked), Cowgirl Creamery Mt Tam, Tumalo Farms Goat Cheese",
    note: "Award-winning Oregon blue and artisanal goat cheeses find their perfect partner in bright, mineral-laced Oregon Pinot Noir and Chardonnay."
  }
];
