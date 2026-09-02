// Authoritative Australia (Barossa, Margaret River, Eden Valley, Hunter Valley, Coonawarra) Master Sommelier Dataset
// Wine Australia Geographic Indications (GI) & Langton's Classification Standards

export const AUSTRALIA_SUBREGIONS = [
  {
    id: 'barossa-valley',
    name: "Barossa Valley (South Australia)",
    lat: -34.5300,
    lng: 138.9500,
    appellations: ["Barossa Valley GI", "Barossa Zone GI"],
    grapeVarieties: ["Shiraz (Syrah)", "Grenache", "Mataro (Mourvèdre)", "Cabernet Sauvignon"],
    soilTypes: ["Deep Red Clay Loam (Terra Rossa over Limestone)", "Ironstone Gravel", "Bleached White Sand (Ebenezer)"],
    climate: "Warm Mediterranean climate with long, dry, sunny summers and low humidity, protected by the Barossa Ranges.",
    terroir: "Ancient, low-fertility soils supporting the world's oldest continually producing, ungrafted pre-phylloxera vines (dating back to 1843). Intense solar radiation and old bush vines deliver monumental concentration, sweet blackberry fruit, and velvety tannins.",
    focus: "The global benchmark for monumental, full-throttle Shiraz: dark blackberry liqueur, mocha, smoked meat, vanilla bean, and 40-50+ year longevity (Penfolds Grange, Henschke Hill of Grace, Torbreck RunRig).",
    description: "Settled in the 1840s by Silesian Lutheran immigrants, the Barossa Valley is Australia's most revered fine wine treasury."
  },
  {
    id: 'eden-valley',
    name: "Eden Valley & High Eden (Barossa Ranges)",
    lat: -34.6500,
    lng: 139.1000,
    appellations: ["Eden Valley GI", "High Eden GI"],
    grapeVarieties: ["Riesling", "Shiraz", "Cabernet Sauvignon", "Chardonnay"],
    soilTypes: ["Weathered Mica Schist", "Ironstone Loam", "Quartzite Gravel over Clay"],
    climate: "Cool Climate Maritime / Montane; 400m-600m altitude with severe diurnal temperature swings.",
    terroir: "Rolling, windswept hilltops overlooking the Barossa Valley floor. Significantly cooler temperatures and higher rainfall yield laser-precise, lime-scented dry Rieslings and perfumed, sage-scented cool-climate Shiraz.",
    focus: "Dual excellence: Bone-dry, electric, talc-and-lime Riesling (Pewsey Vale, Grosset) and ethereal, floral, five-spice old-vine Shiraz (Henschke Hill of Grace, Mount Edelstone).",
    description: "The elevated, cool-climate soul of the Barossa Ranges, celebrated for some of the longest-lived dry Rieslings and single-vineyard Shiraz on Earth."
  },
  {
    id: 'margaret-river',
    name: "Margaret River (Western Australia)",
    lat: -33.9500,
    lng: 115.0700,
    appellations: ["Margaret River GI", "Wilyabrup sub-district", "Wallcliffe", "Yallingup"],
    grapeVarieties: ["Cabernet Sauvignon", "Chardonnay", "Sauvignon Blanc", "Semillon"],
    soilTypes: ["Gravelly Sandy Loam over Clay & Laterite Ironstone (Leeuwin Ridge)"],
    climate: "Maritime Mediterranean paradise surrounded on three sides by the Indian and Southern Oceans; zero frost risk.",
    terroir: "Ancient Precambrian granite and lateritic gravel ridges along the Leeuwin-Naturaliste Ridge. Consistent maritime sea breezes (the 'Fremantle Doctor') moderate summer heat, providing a climate virtually identical to Bordeaux's greatest vintages.",
    focus: "Aristocratic, gravel-driven Cabernet Sauvignon (cassis, bay leaf, tobacco, graphite) and world-beating, Burgundian-class Chardonnay with lemon curd and saline hazelnut reduction (Leeuwin Art Series, Cullen, Moss Wood).",
    description: "Established in 1967 following the scientific research of Dr. John Gladstones, Margaret River is Australia's supreme maritime fine wine paradise."
  },
  {
    id: 'hunter-valley',
    name: "Hunter Valley (New South Wales)",
    lat: -32.8000,
    lng: 151.3000,
    appellations: ["Hunter Valley GI", "Pokolbin GI", "Broke Fordwich GI"],
    grapeVarieties: ["Semillon", "Shiraz", "Chardonnay"],
    soilTypes: ["Alluvial Sandy Loam over Red Volcanic Clay (Brokenback Range)"],
    climate: "Warm, humid Subtropical-Maritime with heavy summer harvest rains and cloud cover.",
    terroir: "Ancient alluvial flats and volcanic red clay slopes. Semillon is picked remarkably early (10-11% potential ABV) without oak aging, starting as crisp lemon-water and transforming over 15-25 years into honeyed, toasty, waxy perfection.",
    focus: "The unique world anomaly of Hunter Valley Semillon (Tyrrell's Vat 1, Mount Pleasant) and savory, leather-and-earth, medium-bodied Shiraz.",
    description: "Australia's oldest continuous wine region, planted in the 1820s by James Busby, the 'Father of Australian Viticulture'."
  },
  {
    id: 'coonawarra',
    name: "Coonawarra & Limestone Coast",
    lat: -37.2800,
    lng: 140.8300,
    appellations: ["Coonawarra GI", "Limestone Coast GI"],
    grapeVarieties: ["Cabernet Sauvignon", "Shiraz"],
    soilTypes: ["Terra Rossa (Vibrant Red Clay Loam over White Calcareous Gambier Limestone)"],
    climate: "Cool Maritime moderated by the Southern Ocean.",
    terroir: "A legendary cigar-shaped ridge of vibrant red terra rossa soil (only 1.5 km wide by 15 km long) over porous white limestone. Supreme drainage and cool ocean breezes craft Australia's benchmark cool-climate Cabernet.",
    focus: "Intense, structural Cabernet Sauvignon: blackcurrant, eucalyptus, cedar, dark chocolate, and chalky fine-grained tannins (Wynns John Riddoch, Balnaves).",
    description: "The Limestone Coast's crown jewel, recognized worldwide for its striking red earth and ageworthy Cabernet Sauvignon."
  }
];

export const AUSTRALIA_GRAND_CRUS = [
  {
    id: 'hill-of-grace',
    name: "Henschke Hill of Grace (Grandfather Block)",
    village: "Keyneton",
    district: "Eden Valley",
    areaHa: 8.00,
    dominantGrape: "Shiraz (100% Pre-Phylloxera Ungrafted Vines)",
    aspect: "Sheltered amphitheater facing the historic Lutheran Church of Grace",
    elevationRange: "400m",
    soil: "Deep Red Clay Loam with Weathered Mica Schist & Quartz Gravel",
    classification: "Langton's 'First Classified' / Australian National Monument",
    aocDecreeYear: 1958,
    character: "Haunting, ethereal perfume of crushed blackberry, black pepper, sage, five-spice, wild thyme, and endless aristocratic silken depth.",
    benchmarkProducers: ["Henschke"],
    legalNotes: "Planted circa 1860 by Nicolaus Stanitzki with original un-grafted French Syrah cuttings."
  },
  {
    id: 'penfolds-block-42',
    name: "Penfolds Kalimna Block 42",
    village: "Ebenezer",
    district: "Barossa Valley",
    areaHa: 4.00,
    dominantGrape: "Cabernet Sauvignon (100%)",
    aspect: "Gently sloping northern plain",
    elevationRange: "280m",
    soil: "Red Clay Loam over Deep Limestone",
    classification: "World's Oldest Continuously Producing Cabernet Sauvignon Vines",
    aocDecreeYear: 1885,
    character: "Monumental, ink-black concentration: cassis, graphite, dried mint, dark mocha, and seamless architectural power.",
    benchmarkProducers: ["Penfolds (Bin 707 & Rare Block 42 Ampoule)"],
    legalNotes: "Planted in 1885, recognized as the oldest living Cabernet Sauvignon vineyard on Earth."
  },
  {
    id: 'leeuwin-art-series-block-20',
    name: "Leeuwin Estate Art Series Chardonnay (Block 20)",
    village: "Wallcliffe",
    district: "Margaret River",
    areaHa: 10.00,
    dominantGrape: "Chardonnay (100% Gin Gin Clone)",
    aspect: "Gentle East-facing slope with direct Indian Ocean breeze",
    elevationRange: "60m",
    soil: "Ancient Lateritic Ironstone Gravel over Mottled Yellow Clay",
    classification: "Langton's 'First Classified' Icon",
    aocDecreeYear: 1980,
    character: "Pears, white peach, toasted sesame, flint, lemon curd, and breathtaking saline mineral length.",
    benchmarkProducers: ["Leeuwin Estate"],
    legalNotes: "Pioneered in 1975 under the mentorship of legendary Napa Valley winemaker Robert Mondavi."
  },
  {
    id: 'tyrrells-vat-1',
    name: "Tyrrell's Vat 1 Semillon (Short Flat & Ashmans)",
    village: "Pokolbin",
    district: "Hunter Valley",
    areaHa: 12.00,
    dominantGrape: "Semillon (100% Dry-Grown Bush Vines)",
    aspect: "Alluvial valley plain",
    elevationRange: "100m",
    soil: "Deep Sandy Loam over Ancient River Bed",
    classification: "Langton's 'First Classified' / Australia's Most Awarded White",
    aocDecreeYear: 1963,
    character: "Low alcohol (11% ABV) transforming from crisp lime and lemongrass into unctuous buttered toast, beeswax, and macadamia.",
    benchmarkProducers: ["Tyrrell's Wines"],
    legalNotes: "Sourced from dry-grown bush vines planted as early as 1908 without oak contact."
  }
];

export const AUSTRALIA_TECHNICAL_REGULATIONS = {
  geology: {
    system: "Precambrian Cratons, Barossa Ironstone & Coonawarra Terra Rossa",
    formations: [
      {
        name: "Barossa Red Clay & Ironstone",
        frenchName: "Argile Rouge et Fer",
        period: "Precambrian (~600 Ma)",
        fossil: "Iron oxide minerals",
        keyAreas: ["Ebenezer", "Marananga", "Seppeltsfield"],
        wineImpact: "Stores moisture during scorching summer months, nourishing ungrafted vines to deliver monumental richness."
      },
      {
        name: "Coonawarra Terra Rossa",
        frenchName: "Terre Rouge sur Calcaire",
        period: "Quaternary over Tertiary Gambier Limestone",
        fossil: "Marine Limestone & Coral",
        keyAreas: ["Coonawarra Strip"],
        wineImpact: "Provides free drainage and alkaline root depth, giving Cabernet Sauvignon signature mint, cassis, and structural chalkiness."
      },
      {
        name: "Margaret River Laterite Gravel",
        frenchName: "Graves Latéritiques",
        period: "Precambrian Shield (~1,500 Ma)",
        fossil: "Ironstone & Quartzite Gravel",
        keyAreas: ["Wilyabrup", "Wallcliffe"],
        wineImpact: "Mirrors Bordeaux's Left Bank gravels, producing maritime Cabernet and Chardonnay of crystalline energy."
      }
    ]
  },
  grapes: {
    major: [
      {
        name: "Shiraz (Syrah)",
        percentage: "28%",
        type: "Red",
        epicenter: "Barossa Valley, McLaren Vale, Eden Valley, Hunter Valley",
        profile: "Blackberry, dark plum, mocha, black pepper, smoked meat, and vanilla.",
        role: "Australia's national red icon; centuries-old ungrafted vines produce unparalleled vinous power."
      },
      {
        name: "Cabernet Sauvignon",
        percentage: "25%",
        type: "Red",
        epicenter: "Margaret River, Coonawarra, Barossa",
        profile: "Cassis, dark cherry, eucalyptus, bay leaf, tobacco, and graphite.",
        role: "Thrives in maritime Margaret River and cool Coonawarra terra rossa."
      },
      {
        name: "Chardonnay & Semillon",
        percentage: "24%",
        type: "White",
        epicenter: "Margaret River, Hunter Valley, Adelaide Hills",
        profile: "Lemon curd, white peach, toasted hazelnut, brioche, and flinty reduction.",
        role: "World-class dry whites spanning ageworthy Hunter Semillon to grand cru-level Margaret River Chardonnay."
      },
      {
        name: "Riesling",
        percentage: "5%",
        type: "White",
        epicenter: "Clare Valley, Eden Valley",
        profile: "Lime juice, talc, green apple, wet slate, and kerosene with age.",
        role: "Bone-dry, laser-sharp, pristine dry Rieslings of immortal longevity."
      }
    ]
  },
  classification: {
    system: "Wine Australia Geographical Indications (GI) & Barossa Old Vine Charter",
    description: "Rigorous label integrity program alongside the world-famous Barossa Old Vine Charter.",
    pyramid: [
      {
        tier: "Ancestor Vine (125+ Years Old)",
        sharePct: "0.1%",
        aocCount: "Living Heritage Treasures",
        description: "Vines planted before 1900 on their own roots; virtually unique in the global wine world."
      },
      {
        tier: "Centenarian Vine (100+ Years Old)",
        sharePct: "0.5%",
        aocCount: "Century-Old Vines",
        description: "Vines planted 100+ years ago that survived droughts, wars, and vine-pull schemes."
      },
      {
        tier: "Survivor Vine (70+ Years Old)",
        sharePct: "2%",
        aocCount: "Post-WWII Plantings",
        description: "Old vines planted during the early-to-mid 20th century delivering naturally balanced yields."
      },
      {
        tier: "Old Vine (35+ Years Old)",
        sharePct: "5%",
        aocCount: "Established Maturity",
        description: "Mature root systems providing deep soil mineral extraction and vintage resilience."
      }
    ]
  }
};

export const AUSTRALIA_PRESTIGE_ESTATES = [
  {
    name: "Grange (Bin 95)",
    producer: "Penfolds",
    village: "Multi-District Blend (Barossa / McLaren Vale / Magill)",
    grape: "Shiraz (96-100%), Cabernet Sauvignon (0-4%)",
    classification: "Heritage Icon of South Australia",
    terroir: "Top old-vine parcels across South Australia's greatest red terroirs.",
    status: "Australia's undisputed first growth, created by Max Schubert in 1951 and aged 18-20 months in 100% new American oak hogsheads.",
    character: "Monumental, ink-black concentration: blackberry liqueur, soy sauce, dark mocha, coal dust, and 50+ year longevity."
  },
  {
    name: "Hill of Grace Shiraz",
    producer: "Henschke",
    village: "Keyneton (Eden Valley)",
    grape: "Shiraz (100% Pre-Phylloxera Vines)",
    classification: "Iconic Single Vineyard Monopole",
    terroir: "Mica schist, red clay, and quartz in the cool Eden Valley ranges.",
    status: "The DRC Romanée-Conti of Australian wine, sourced from ungrafted vines planted in 1860.",
    character: "Haunting floral perfume, black pepper, sage, exotic five-spice, dark plum, and velvet silk."
  },
  {
    name: "Art Series Chardonnay",
    producer: "Leeuwin Estate",
    village: "Wallcliffe (Margaret River)",
    grape: "Chardonnay (100%)",
    classification: "Langton's 'First Classified'",
    terroir: "Laterite ironstone gravels in the Margaret River maritime corridor.",
    status: "Consistently rated alongside Burgundy's greatest Grand Crus (Bâtard-Montrachet).",
    character: "Pears, white peach, toasted sesame, flinty reduction, lemon curd, and saline mineral drive."
  },
  {
    name: "RunRig Shiraz",
    producer: "Torbreck Vintners",
    village: "Marananga / Ebenezer (Barossa Valley)",
    grape: "Shiraz (98%), Viognier (2%)",
    classification: "Cult Old-Vine Shiraz",
    terroir: "Centenarian dry-grown bush vines on red clay and ironstone.",
    status: "Crafted in the style of Côte-Rôtie from 120-160 year old Barossa vines.",
    character: "Opulent black fruit, apricot blossom, bacon fat, dark chocolate, and endless velvet texture."
  }
];

export const AUSTRALIA_ICONIC_DOMAINES = [
  {
    name: "Penfolds",
    village: "Nuriootpa / Magill (South Australia)",
    vigneron: "Peter Gago",
    wineType: "Dual",
    philosophy: "The master of multi-regional assemblage and American oak maturation, crafting Australia's most collectible fine wines.",
    keyCuvees: ["Grange (Bin 95)", "Bin 707 Cabernet Sauvignon", "Yattarna Chardonnay", "RWT / Bin 798 Shiraz"]
  },
  {
    name: "Henschke",
    village: "Keyneton (Eden Valley)",
    vigneron: "Stephen & Prue Henschke",
    wineType: "Dual",
    philosophy: "Six generations of biodynamic viticulture and single-vineyard preservation in the cool Eden Valley.",
    keyCuvees: ["Hill of Grace", "Mount Edelstone", "Cyril Henschke Cabernet Sauvignon", "Julius Riesling"]
  },
  {
    name: "Leeuwin Estate",
    village: "Margaret River (Western Australia)",
    vigneron: "Phil Hutchison & Tim Lovett",
    wineType: "Dual",
    philosophy: "Pristine maritime viticulture creating benchmark Chardonnay and Cabernet Sauvignon of timeless elegance.",
    keyCuvees: ["Art Series Chardonnay", "Art Series Cabernet Sauvignon", "Art Series Shiraz"]
  },
  {
    name: "Tyrrell's Wines",
    village: "Pokolbin (Hunter Valley)",
    vigneron: "Bruce Tyrrell & Chris Tyrrell",
    wineType: "Dual",
    philosophy: "Guardians of Australia's oldest ungrafted Semillon and Shiraz vineyards, practicing traditional basket pressing and un-oaked Semillon aging.",
    keyCuvees: ["Vat 1 Semillon", "Vat 47 Chardonnay", "Vat 9 Shiraz", "4 Acres Shiraz"]
  }
];

export const AUSTRALIA_FOOD_PAIRINGS = [
  {
    category: "Wood-Fired Steaks & Barbecue",
    wineType: "Red",
    targetWine: "Barossa Valley Shiraz (Grange / RunRig)",
    dish: "Charbroiled Australian Wagyu Ribeye, Smoked Beef Short Ribs with Molasses Glaze, Rosemary Roast Lamb",
    note: "Barossa Shiraz's explosive dark fruit, mocha oak, and black pepper harmonize with charred beef and caramelized barbecue smoke."
  },
  {
    category: "Wild Game & Kangaroo",
    wineType: "Red",
    targetWine: "Coonawarra & Margaret River Cabernet",
    dish: "Pan-Seared Kangaroo Loin with Juniper Berry Jus, Roasted Venison with Berry Compote",
    note: "Lean, gamey meats are elevated by Cabernet's structural cassis, minty eucalyptus, and fine-grained tannins."
  },
  {
    category: "Seafood & Crustaceans",
    wineType: "White",
    targetWine: "Margaret River Chardonnay (Leeuwin Art Series)",
    dish: "Butter-Poached Australian Marron / Lobster, Pan-Roasted Kingfish with Lemon Herbs",
    note: "Margaret River Chardonnay's citrus tension, saline mineral drive, and hazelnut cream elevate fresh lobster and rich buttery sauces."
  },
  {
    category: "Fresh Oysters & Crudo",
    wineType: "White",
    targetWine: "Aged Hunter Valley Semillon & Eden Valley Riesling",
    dish: "Fresh Sydney Rock Oysters, Kingfish Ceviche with Finger Lime, Poached Scallops",
    note: "The laser-sharp lime acidity and talc minerality of dry Semillon and Riesling cut cleanly through briny fresh oysters."
  }
];
