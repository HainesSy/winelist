/**
 * ============================================================================
 * NEW ZEALAND SOMMELIER DATASET (CMS LEVEL 3 / MASTER SOMMELIER STANDARD)
 * ============================================================================
 * 
 * Authoritative New Zealand fine wine catalog:
 *   - 4 Key Viticultural Regions & Sub-GIs:
 *     (Marlborough, Central Otago, Hawke's Bay, Martinborough / Wairarapa)
 *   - Geological Pedology:
 *     (Torlesse Terrane Greywacke Gravels, Haast Mica Schist,
 *      Gimblett Gravels Alluvial Shingle, Windblown Loess, Silt Loams)
 *   - Ampelography & Viticulture:
 *     (Sauvignon Blanc, Pinot Noir, Chardonnay, Syrah, Pinot Gris, Riesling;
 *      Sustainable Winegrowing New Zealand [SWNZ] Certification)
 *   - Classification Frameworks:
 *     (Geographical Indications [Wine and Spirits] Registration Act 2006/2017;
 *      85% Rule for Vintage, Cultivar, and Delimited GI Origin)
 *   - Benchmark Prestige Cuvées & Iconic Domaines
 *   - Authentic Regional Food Pairings & Sommelier Service Directives
 * ============================================================================
 */

export const NEW_ZEALAND_SUBREGIONS = [
  {
    id: 'marlborough',
    name: "Marlborough",
    district: "South Island (Northern Tip)",
    lat: -41.5140,
    lng: 173.9530,
    terroir: "A sun-drenched coastal valley framed by the Richmond Ranges to the north and the Wither Hills to the south. Exceptionally high sunshine hours, cool Pacific sea breezes, and cool nighttime temperatures preserve vibrant malic acidity while encouraging explosive pyrazine and thiol aromatic development.",
    focus: "The global benchmark for pungent, vibrant Sauvignon Blanc, pure crystalline Pinot Noir, and chiseled traditional method sparkling wines.",
    geology: "Quaternary alluvial gravel terraces made of hard Torlesse greywacke river stones, windblown loess, and marine clay silts.",
    dominantGrapes: "Sauvignon Blanc (80%), Pinot Noir (12%), Chardonnay (5%), Pinot Gris (3%)",
    microTerroirs: [
      { name: "Wairau Valley", focus: "The warm historical riverbed of stony greywacke gravels producing tropical passionfruit and ripe citrus-driven Sauvignon Blanc." },
      { name: "Awatere Valley", focus: "Cooler, windier, drier southern valley yielding flinty, herbaceous, kaffir lime and crushed-oyster-shell mineral profiles." },
      { name: "Southern Valleys", focus: "Clay-rich foothills producing structured, fleshy Pinot Noir and textured, cellar-worthy barrel-fermented whites." }
    ],
    description: "The powerhouse of New Zealand wine. Free-draining greywacke riverbeds and extreme diurnal cooling create the world's most pungent, vibrant, and celebrated Sauvignon Blancs."
  },
  {
    id: 'central-otago',
    name: "Central Otago",
    district: "South Island (Southern Interior)",
    lat: -45.0312,
    lng: 169.1944,
    terroir: "The world's southernmost commercial wine region (~45°S) and New Zealand's only true continental wine climate. Surrounded by the Southern Alps, shielded from coastal rain. Blistering summer days and frosty alpine nights create massive diurnal temperature drops that forge thick skins, deep color, and electric natural acidity in Pinot Noir.",
    focus: "Heroic, high-intensity, concentrated Pinot Noir scented with wild mountain thyme, black cherries, and crushed schist rock.",
    geology: "Ancient Haast mica schist, greywacke gravels, glacial moraine terraces, and fine windblown loess with high mineral content.",
    dominantGrapes: "Pinot Noir (78%), Pinot Gris (11%), Chardonnay (6%), Riesling (5%)",
    microTerroirs: [
      { name: "Bannockburn", focus: "The 'Heart of the Desert'; warm north-facing schist terraces producing the benchmark expressions of dark cherry, dried herbs, and plush tannins (Felton Road)." },
      { name: "Gibbston", focus: "The coolest, highest-elevation sub-zone in the Kawarau Gorge yielding delicate, floral, high-acid, and spicy Pinot Noir." },
      { name: "Bendigo", focus: "The warmest, sun-baked north-facing slopes yielding deep, dark, structured, muscular, and brooding Pinot Noirs." }
    ],
    description: "The dramatic alpine frontier of Pinot Noir. Glacial mica schist terraces and extreme continental swings produce monumental, wild-thyme-infused Pinot Noirs of breathtaking purity."
  },
  {
    id: 'hawkes-bay',
    name: "Hawke's Bay",
    district: "North Island (Eastern Coast)",
    lat: -39.6381,
    lng: 176.7725,
    terroir: "New Zealand's oldest and second-largest wine region. Located on the sunny eastern coast of the North Island, sheltered from westerly rains by the Ruahine and Kaweka ranges. Maritime-Mediterranean macroclimate with warm, long growing seasons ideal for phenolic ripening of Bordeaux varieties and Syrah.",
    focus: "Prestigious Syrah displaying northern Rhône-like cracked pepper and violet florals, alongside aristocratic Cabernet-Merlot blends.",
    geology: "The legendary Gimblett Gravels—deep beds of greywacke gravel and shingle deposited by the Ngaruroro River in 1867—acting as thermal heat radiators.",
    dominantGrapes: "Merlot (30%), Chardonnay (25%), Sauvignon Blanc (20%), Syrah (15%), Cabernet Sauvignon (10%)",
    microTerroirs: [
      { name: "Gimblett Gravels", focus: "Strictly delimited 800-hectare appellation of stony riverbed gravels yielding monumental, peppery Syrah and structured Cabernet blends." },
      { name: "Bridge Pa Triangle", focus: "Warm alluvial plains of red metal gravels producing opulent, aromatic Merlot and rich Chardonnay." },
      { name: "Te Awanga", focus: "Cool coastal strip producing vibrant, saline, sea-breeze-cooled Chardonnay and delicate Pinot Noir." }
    ],
    description: "The red wine epicenter of New Zealand. The world-renowned Gimblett Gravels capture summer warmth to craft Syrah and Cabernet-Merlot blends of aristocratic complexity and cellaring power."
  },
  {
    id: 'martinborough',
    name: "Martinborough (Wairarapa)",
    district: "North Island (Southern Valley)",
    lat: -41.2186,
    lng: 175.4594,
    terroir: "A tiny boutique enclave at the southern tip of the North Island across the Remutaka Ranges from Wellington. Swept by cool, ferocious Antarctic maritime winds funneling through the Cook Strait. Deep alluvial river terraces ensure tiny berry sizes, thick skins, and ultra-low yields.",
    focus: "Artisanal, deeply savory, complex Pinot Noir with dark plum, dried mushroom, and forest-floor complexity, alongside textured barrel-fermented Sauvignon Blanc.",
    geology: "Ancient free-draining alluvial river terraces formed by the Ruamahanga River, packed with greywacke gravels and silty loams.",
    dominantGrapes: "Pinot Noir (60%), Sauvignon Blanc (25%), Pinot Gris (8%), Syrah (7%)",
    microTerroirs: [
      { name: "Martinborough Terrace", focus: "The historic gravel river terrace home to legendary benchmark estates (Ata Rangi, Dry River) producing savory, long-lived Pinot Noir." },
      { name: "Te Muna Road", focus: "Cooler, higher-elevation stony terrace producing chiseled, aromatic Pinot Noir and flinty Riesling." }
    ],
    description: "The spiritual home of artisanal New Zealand Pinot Noir. Wind-swept gravel terraces and heritage Abel cuttings produce wines of profound savory depth, fine-grained tannins, and decades of longevity."
  }
];

export const NEW_ZEALAND_GRAND_CRUS = [
  {
    id: 'felton-road-block-3',
    name: "Felton Road 'Block 3' Pinot Noir",
    subregionId: 'central-otago',
    lat: -45.0600,
    lng: 169.1600,
    soil: "Deep glacial loess and decomposed mica schist on north-facing Bannockburn slopes",
    dominantGrape: "Pinot Noir",
    benchmarkProducers: ["Felton Road Wines (Nigel Greening / Blair Walter)"]
  },
  {
    id: 'te-mata-coleraine',
    name: "Te Mata Estate 'Coleraine'",
    subregionId: 'hawkes-bay',
    lat: -39.6700,
    lng: 176.8800,
    soil: "Havelock Hills sandy loam over red metal gravels and limestone",
    dominantGrape: "Cabernet Sauvignon (60%) & Merlot (40%)",
    benchmarkProducers: ["Te Mata Estate (Buck Family)"]
  },
  {
    id: 'cloudy-bay-te-koko',
    name: "Cloudy Bay 'Te Koko' Sauvignon Blanc",
    subregionId: 'marlborough',
    lat: -41.5000,
    lng: 173.8800,
    soil: "Wairau Valley alluvial greywacke riverstone gravels",
    dominantGrape: "Sauvignon Blanc (Wild ferment in neutral French oak)",
    benchmarkProducers: ["Cloudy Bay Vineyards"]
  },
  {
    id: 'craggy-range-le-sol',
    name: "Craggy Range 'Le Sol' Syrah",
    subregionId: 'hawkes-bay',
    lat: -39.6200,
    lng: 176.7500,
    soil: "Gimblett Gravels deep stony shingle and quartz",
    dominantGrape: "Syrah",
    benchmarkProducers: ["Craggy Range (Terry Peabody / Matt Stafford)"]
  },
  {
    id: 'ata-rangi-pinot-noir',
    name: "Ata Rangi 'McCrone Vineyard' Pinot Noir",
    subregionId: 'martinborough',
    lat: -41.2200,
    lng: 175.4600,
    soil: "Free-draining alluvial river terrace gravels mixed with clay-loam",
    dominantGrape: "Pinot Noir (Abel Clone)",
    benchmarkProducers: ["Ata Rangi (Clive Paton / Helen Masters)"]
  }
];

export const NEW_ZEALAND_TECHNICAL_REGULATIONS = {
  geology: {
    formations: [
      "Torlesse Terrane Greywacke Sandstone",
      "Haast Schist (Mica & Quartz Schist)",
      "Quaternary Glacial Moraines",
      "Gimblett Gravels Alluvial Shingle",
      "Windblown Silt Loess"
    ],
    soilTypes: [
      "Greywacke River Stones & Silt",
      "Decomposed Mica Schist",
      "Red Metal Alluvial Shingle",
      "Sedimentary River Terraces"
    ]
  },
  grapes: {
    major: ["Sauvignon Blanc", "Pinot Noir", "Chardonnay", "Syrah", "Pinot Gris", "Riesling"],
    heritage: ["Cabernet Sauvignon", "Merlot", "Gewürztraminer", "Chenin Blanc"]
  },
  classification: {
    pyramid: [
      "National Boundary (New Zealand)",
      "Regional Geographical Indication (GI - e.g. Marlborough, Central Otago)",
      "Sub-Regional Delimited GI (e.g. Bannockburn, Martinborough, Gimblett Gravels)",
      "Single Vineyard Certified Estate Designation"
    ],
    tiers: [
      "Geographical Indications (Wine and Spirits) Registration Act (2006/2017)",
      "85% Rule - Minimum 85% of grapes from stated variety, vintage, and GI",
      "Sustainable Winegrowing New Zealand (SWNZ - 96%+ national audit compliance)",
      "Organic / Biodynamic Winegrowers New Zealand Certification"
    ],
    agingRules: {
      vintageRule: "Minimum 85% of grapes harvested in the declared vintage year",
      varietyRule: "Minimum 85% of grapes from the stated grape variety",
      giOriginRule: "Minimum 85% of grapes sourced strictly within the delimited Geographical Indication boundary"
    }
  }
};

export const NEW_ZEALAND_PRESTIGE_CUVEES = [
  {
    name: "Coleraine",
    producer: "Te Mata Estate",
    village: "Hawke's Bay",
    vintage: "Current Release",
    composition: "Cabernet Sauvignon, Merlot, Cabernet Franc",
    soil: "Havelock Hills red metal gravels & limestone",
    aging: "17 months in French oak barriques (approx. 70% new)",
    flavor: "Cassis, dark cedar box, violet petals, graphite shavings, and aristocratic fine-grained tannins."
  },
  {
    name: "Block 3 Pinot Noir",
    producer: "Felton Road Wines",
    village: "Bannockburn, Central Otago",
    vintage: "Current Release",
    composition: "100% Pinot Noir (Biodynamic / Wild Ferment)",
    soil: "Deep glacial loess and decomposed mica schist",
    aging: "13 months in French oak barrels (approx. 30% new)",
    flavor: "Black cherry liqueur, wild mountain thyme, crushed schist rock, dark cocoa, and velvety tension."
  },
  {
    name: "Ata Rangi Pinot Noir",
    producer: "Ata Rangi",
    village: "Martinborough",
    vintage: "Current Release",
    composition: "100% Pinot Noir (Abel & Dijon clones, 30% whole cluster)",
    soil: "Martinborough river terrace alluvial gravels",
    aging: "11 months in French oak barriques (approx. 35% new)",
    flavor: "Redcurrant, wild mushroom, black tea leaf, dried potpourri, and savory ironstone minerality."
  },
  {
    name: "Le Sol Syrah",
    producer: "Craggy Range",
    village: "Gimblett Gravels, Hawke's Bay",
    vintage: "Current Release",
    composition: "100% Syrah",
    soil: "Deep stony greywacke shingle",
    aging: "18 months in French oak barriques (approx. 35% new)",
    flavor: "Cracked black peppercorn, boysenberry, smoked game, licorice, and seamless slate-like finish."
  },
  {
    name: "Te Koko Sauvignon Blanc",
    producer: "Cloudy Bay",
    village: "Wairau Valley, Marlborough",
    vintage: "Current Release",
    composition: "100% Sauvignon Blanc (Indigenous yeast barrel ferment)",
    soil: "Alluvial greywacke riverstone gravels",
    aging: "15 months in French oak barrels (approx. 10% new)",
    flavor: "White nectarine, lemongrass, beeswax, roasted hazelnut, and vibrating saline acidity."
  }
];

export const NEW_ZEALAND_ICONIC_DOMAINES = [
  {
    name: "Felton Road Wines",
    village: "Bannockburn, Central Otago",
    vigneron: "Nigel Greening & Blair Walter",
    philosophy: "Demeter-certified biodynamic viticulture, gravity-flow winery, wild yeast fermentations, and uncompromised terroir purity.",
    keyCuvees: ["Block 3 Pinot Noir", "Block 5 Pinot Noir", "Elms Chardonnay", "Bannockburn Riesling"]
  },
  {
    name: "Te Mata Estate",
    village: "Havelock North, Hawke's Bay",
    vigneron: "Buck Family & Peter Cowley",
    philosophy: "New Zealand's oldest continuously operating estate (established 1896), crafting classic European-structured Bordeaux blends.",
    keyCuvees: ["Coleraine", "Awatea", "Bullnose Syrah", "Elston Chardonnay"]
  },
  {
    name: "Ata Rangi",
    village: "Martinborough, Wairarapa",
    vigneron: "Clive Paton & Helen Masters",
    philosophy: "Organic viticulture, nurturing ancient Abel clone cuttings brought from Burgundy, and crafting savory, long-lived masterworks.",
    keyCuvees: ["Ata Rangi Pinot Noir", "McCrone Vineyard Pinot Noir", "Craighall Chardonnay"]
  },
  {
    name: "Craggy Range",
    village: "Gimblett Gravels, Hawke's Bay",
    vigneron: "Terry Peabody & Matt Stafford",
    philosophy: "Single-vineyard philosophy selecting the finest specialized sites across Gimblett Gravels and Te Muna Road.",
    keyCuvees: ["Le Sol Syrah", "Sophia (Bordeaux Blend)", "Aroha Pinot Noir", "Les Beaux Cailloux Chardonnay"]
  },
  {
    name: "Cloudy Bay Vineyards",
    village: "Rapaura, Marlborough",
    vigneron: "Jim White",
    philosophy: "The founding estate that placed New Zealand on the global fine-wine map in 1985, pioneering both classic and barrel-aged styles.",
    keyCuvees: ["Te Koko Sauvignon Blanc", "Cloudy Bay Sauvignon Blanc", "Te Wahi Pinot Noir", "Pelorus Brut"]
  }
];

export const NEW_ZEALAND_FOOD_PAIRINGS = [
  {
    category: "Pasture-Fed Prime Lamb",
    wineType: "Red",
    targetWine: "Felton Road 'Block 3' / Central Otago Pinot Noir",
    dish: "Canterbury Salt Marsh Rack of Lamb with Wild Thyme & Roasted Garlic",
    note: "The delicate, sweet herbal fat of prime salt-marsh lamb and fragrant mountain thyme forms an ethereal synergy with the wild bramble fruits, crushed schist, and silky tannins of Bannockburn Pinot Noir.",
    glassware: "Generous Burgundy Balloon Stem (750ml)",
    servingTemp: "14–16°C (57–61°F)",
    decanting: "Decant 30 minutes prior to service"
  },
  {
    category: "Coastal Shellfish & Broths",
    wineType: "White",
    targetWine: "Cloudy Bay Sauvignon Blanc / Marlborough",
    dish: "Steamed Marlborough Green-Lipped Mussels in Lemongrass, Ginger & Coconut Broth",
    note: "Pungent green jalapeño, lemongrass, and electric grapefruit acid cut through the creamy richness of plump steamed mussels, echoing the saline ocean freshness of the Marlborough coast.",
    glassware: "Focused White Wine Stem (450ml)",
    servingTemp: "8–10°C (46–50°F)",
    decanting: "Serve directly upon opening"
  },
  {
    category: "Charcoal-Grilled Prime Beef",
    wineType: "Red",
    targetWine: "Te Mata Estate 'Coleraine' / Hawke's Bay Red",
    dish: "Charcoal-Grilled Wagyu Ribeye with Black Truffle Butter & Pommes Anna",
    note: "Dense marbling and charcoal sear require the aristocratic spine of fine-grained Cabernet-Merlot tannins, accented by dark cassis, graphite, and cedar complexities.",
    glassware: "Large Bordeaux Grand Cru Stem (850ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 2 hours prior to service"
  },
  {
    category: "Alpine Wild Game",
    wineType: "Red",
    targetWine: "Ata Rangi Pinot Noir / Martinborough",
    dish: "Roasted Fiordland Wild Venison Loin with Chanterelles & Juniper Jus",
    note: "Lean, savory wild game and earthy forest mushrooms resonate with the dried tea leaves, damp undergrowth, and architectural savory depth of Martinborough Abel-clone Pinot Noir.",
    glassware: "Expansive Pinot Noir Stem (750ml)",
    servingTemp: "14–16°C (57–61°F)",
    decanting: "Decant 45 minutes prior to service"
  },
  {
    category: "Rich Ocean Finfish",
    wineType: "White",
    targetWine: "Kumeu River / Hawke's Bay Reserve Chardonnay",
    dish: "Pan-Seared Stewart Island King Salmon with Beurre Blanc & Crispy Skin",
    note: "Rich omega-3 salmon oils and velvety emulsion are cleansed by the laser-pure natural acidity, toasted hazelnut oak, and wet stone minerality of benchmark New Zealand Chardonnay.",
    glassware: "Generous Burgundy White Wine Stem (600ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Aeration 15 minutes in glass"
  },
  {
    category: "Raw Crustaceans & Raw Bar",
    wineType: "Sparkling",
    targetWine: "Nautilus Estate / Pelorus Marlborough Vintage Méthode",
    dish: "Kaikoura Rock Lobster (Crayfish) Sashimi with Fresh Wasabi & Citrus Ponzu",
    note: "Sweet, translucent raw crayfish meat paired with piquant ponzu is framed by the fine brioche mousse, chalky lees texture, and crisp green apple bite of traditional method sparkling.",
    glassware: "Tulip Sparkling Wine Stem (450ml)",
    servingTemp: "6–8°C (43–46°F)",
    decanting: "Serve chilled immediately upon pouring"
  }
];

export const NEW_ZEALAND_DATA = {
  id: 'new-zealand',
  name: "New Zealand (Aotearoa)",
  country: "New Zealand",
  countryCode: "NZL",
  aliases: [
    'new zealand', 'nz', 'marlborough', 'central otago',
    'hawkes bay', "hawke's bay", 'martinborough', 'wairarapa',
    'wairau', 'awatere', 'bannockburn', 'gimblett gravels'
  ],
  tagline: "Greywacke River Stones, Glacial Schist & Pacific Ocean Terroirs",
  summary: "Surrounded by the vast Pacific and Southern Oceans, New Zealand's dramatic island landscapes craft wines of unmatched purity, electric natural acidity, and intense aromatic definition—from the pungent greywacke gravels of Marlborough to the alpine schist amphitheaters of Central Otago and the gravelly warmth of Hawke's Bay.",
  
  center: [-41.5100, 173.8500],
  zoom: 6,
  bounds: [
    [-46.0000, 166.0000],
    [-36.5000, 178.5000]
  ],

  heroGradient: "linear-gradient(135deg, #0d3b66 0%, #0077b6 50%, #90e0ef 100%)",
  accentColor: "#0077b6",

  terroir: {
    climate: "Maritime cool-climate in the north and extreme continental alpine in the south, characterized by ultra-clean Antarctic air masses, high UV radiation that thickens grape skins, and vast diurnal temperature swings that preserve piercing natural acidity.",
    soil: "Dominance of Torlesse Terrane greywacke riverstone gravels, Haast metamorphic mica schist, windblown glacial loess, and free-draining alluvial shingles.",
    elevation: "20m along coastal floodplains up to 450m on dramatic alpine slopes.",
    riverInfluence: "Braid rivers including the Wairau, Awatere, Clutha, and Kawarau carving gravel terraces, moderating night temperatures, and creating deep alluvial shingle soils.",
    oceanInfluence: "No vineyard is more than 130 km (80 miles) from the sea, with constant Pacific and Tasman breezes funneling cool ocean air across all major valleys."
  },

  grapes: [
    { name: "Sauvignon Blanc", percentage: 60, type: "White", role: "New Zealand's global calling card; intensely aromatic, gooseberry, passionfruit, and crushed-stone mineral purity." },
    { name: "Pinot Noir", percentage: 20, type: "Red", role: "Central Otago and Martinborough benchmark; crystalline, wild-thyme-scented, savory, and powerfully structured." },
    { name: "Chardonnay", percentage: 8, type: "White", role: "Burgundian in finesse and longevity; toasted hazelnut, wet stones, and laser-pure acidity." },
    { name: "Syrah", percentage: 6, type: "Red", role: "Hawke's Bay and Waiheke Island revelation; peppery, floral, and reminiscent of Hermitage and Côte-Rôtie." },
    { name: "Pinot Gris & Riesling", percentage: 6, type: "White", role: "Aromatic cool-climate gems showcasing orchard fruit, lime blossom, and razor-sharp mineral tension." }
  ],

  structure: {
    body: 6.5,
    acidity: 9.5,
    tannin: 6.0,
    sweetness: 1.0,
    alcohol: 13.5,
    agingPotential: "5–20+ Years for Benchmark Central Otago & Martinborough Pinot Noir, Gimblett Gravels Syrah"
  },

  classification: {
    system: "Geographical Indications (Wine and Spirits) Registration Act (2006/2017)",
    description: "New Zealand's GI framework legally protects regional and sub-regional identities (such as Marlborough, Central Otago, Bannockburn, and Martinborough). The national 85% rule ensures integrity of vintage, variety, and declared GI sourcing.",
    tiers: [
      {
        name: "National Boundary",
        desc: "Wine produced 100% within the borders of New Zealand."
      },
      {
        name: "Regional Geographical Indication (GI)",
        desc: "Major registered winegrowing territory (e.g. Marlborough, Central Otago, Hawke's Bay)."
      },
      {
        name: "Sub-Regional Delimited GI",
        desc: "Specific, unique micro-climate and geological terroir (e.g. Bannockburn, Gimblett Gravels, Martinborough)."
      },
      {
        name: "Single Vineyard Certified Estate",
        desc: "100% harvested and vinified from a single named vineyard property."
      }
    ]
  },

  flavorProfile: {
    primary: ['Pungent Passion Fruit & Gooseberry', 'Wild Central Otago Dark Cherry & Thyme', 'Crushed Greywacke Riverstone & Saline Minerals', 'Flinty White Nectarine & Kaffir Lime', 'Blackberry & Cracked Black Pepper'],
    secondary: ['Smoked French Oak & Brioche', 'Dried Meadow Herbs & Forest Floor', 'Gunflint & Crushed Seashell', 'Balsamic Cacao & Clove', 'Subtle Lemongrass & Wet Slate'],
    palate: "Piercing laser-pure fruit concentration harnessed by soaring natural acidity, crystalline transparency, and fine-grained, persistent mineral tannins."
  },

  foodPairings: NEW_ZEALAND_FOOD_PAIRINGS,
  subRegions: NEW_ZEALAND_SUBREGIONS,
  grandCrus: NEW_ZEALAND_GRAND_CRUS,
  crus: NEW_ZEALAND_GRAND_CRUS,
  technicalRegulations: NEW_ZEALAND_TECHNICAL_REGULATIONS,
  prestigeCuvees: NEW_ZEALAND_PRESTIGE_CUVEES,
  prestigeMonopoles: NEW_ZEALAND_PRESTIGE_CUVEES,
  iconicDomaines: NEW_ZEALAND_ICONIC_DOMAINES,
  iconicGrowers: NEW_ZEALAND_ICONIC_DOMAINES,
  sommelierTip: "Serve Marlborough Sauvignon Blanc at 8–10°C (46–50°F) in focused white wine stems to concentrate aromatics. For Central Otago and Martinborough Pinot Noir, serve at 14–16°C (57–61°F) in wide-bowled Burgundy stems with gentle 30-minute aeration to showcase pure red fruit and wild mountain thyme nuances."
};
