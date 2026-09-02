// Authoritative Australia (Barossa, Margaret River, Eden Valley, Hunter Valley, Coonawarra) Master Sommelier Dataset
// Wine Australia Geographic Indications (GI) & Langton's Classification Standards

export const AUSTRALIA_SUBREGIONS = [
  {
    id: 'barossa-valley',
    name: "Barossa Valley (South Australia)",
    district: "Barossa Valley",
    lat: -34.5300,
    lng: 138.9500,
    coordinates: [-34.5300, 138.9500],
    elevation: "180m to 350m across rolling valley floor",
    soils: [
      "Deep Red Clay Loam (Terra Rossa over Pre-Cambrian Limestone)",
      "Ironstone Gravel & Quartzite",
      "Bleached White Sand over Yellow Clay (Ebenezer)"
    ],
    grapes: [
      "Shiraz / Syrah (60%)",
      "Grenache (20%)",
      "Mataro / Mourvèdre (10%)",
      "Cabernet Sauvignon (10%)"
    ],
    climate: "Warm Mediterranean climate with long, dry, sunny summers and low humidity, protected by the Barossa Ranges.",
    riverInfluence: "The North Para River cuts through the valley floor, creating diverse alluvial soils and gentle air drainage corridors.",
    coastalInfluence: "Sheltered from maritime storms by the Mt Lofty Ranges, allowing grapes to achieve monumental phenolic richness and ultra-deep color.",
    appellations: ["Barossa Valley GI", "Barossa Zone GI"],
    terroir: "Ancient, low-fertility soils supporting the world's oldest continually producing, ungrafted pre-phylloxera vines (dating back to 1843). Intense solar radiation and old bush vines deliver monumental concentration, sweet blackberry fruit, and velvety tannins.",
    focus: "The global benchmark for monumental, full-throttle Shiraz: dark blackberry liqueur, mocha, smoked meat, vanilla bean, and 40–50+ year longevity (Penfolds Grange, Torbreck RunRig, Chris Ringland, Rockford).",
    description: "Settled in the 1840s by Silesian Lutheran immigrants, the Barossa Valley is Australia's most revered fine wine treasury.",
    microTerroirs: [
      { name: "Ebenezer & Kalimna (Northern Barossa)", focus: "Ancient ironstone and red clay producing ink-black, monumental Cabernet and Shiraz (Penfolds Block 42, Grange components)." },
      { name: "Marananga & Seppeltsfield", focus: "Deep red soils and limestone bedrock delivering concentrated, plush Shiraz and historic Tawny fortifieds." },
      { name: "Lyndoch & Southern Valley", focus: "Slightly cooler, higher-rainfall sector producing fragrant, elegant Shiraz and old-vine Grenache." }
    ]
  },
  {
    id: 'eden-valley',
    name: "Eden Valley & High Eden (Barossa Ranges)",
    district: "Eden Valley",
    lat: -34.6500,
    lng: 139.1000,
    coordinates: [-34.6500, 139.1000],
    elevation: "380m to 600m in the windswept Barossa Ranges",
    soils: [
      "Weathered Mica Schist & Gneiss",
      "Ironstone Loam",
      "Quartzite Gravel over Mottled Kaolin Clay"
    ],
    grapes: [
      "Riesling (45%)",
      "Shiraz (40%)",
      "Cabernet Sauvignon (10%)",
      "Chardonnay (5%)"
    ],
    climate: "Cool Climate Maritime / Montane; 400m–600m altitude with severe diurnal temperature swings.",
    riverInfluence: "High-altitude watershed where cool night winds funnel down into the Barossa plain, locking in razor acidity.",
    coastalInfluence: "Higher elevation creates cold nighttime temperatures, slowing ripening by 2–3 weeks compared to the valley floor.",
    appellations: ["Eden Valley GI", "High Eden GI"],
    terroir: "Rolling, windswept hilltops overlooking the Barossa Valley floor. Significantly cooler temperatures and higher rainfall yield laser-precise, lime-scented dry Rieslings and perfumed, sage-scented cool-climate Shiraz.",
    focus: "Dual excellence: Bone-dry, electric, talc-and-lime Riesling (Pewsey Vale, Grosset) and ethereal, floral, five-spice old-vine Shiraz (Henschke Hill of Grace, Mount Edelstone).",
    description: "The elevated, cool-climate soul of the Barossa Ranges, celebrated for some of the longest-lived dry Rieslings and single-vineyard Shiraz on Earth.",
    microTerroirs: [
      { name: "Keyneton Amphitheater", focus: "Sheltered schist and red clay basin home to the pre-phylloxera ungrafted vines of Henschke Hill of Grace (planted 1860)." },
      { name: "High Eden Summit", focus: "Highest windswept ridges (500m+) producing laser-sharp, talc-and-lime Riesling and chiseled Chardonnay." },
      { name: "Springton & Mount Crawford", focus: "Cool, forested southern sector yielding perfumed, peppery Shiraz and vibrant sparkling base." }
    ]
  },
  {
    id: 'margaret-river',
    name: "Margaret River (Western Australia)",
    district: "Margaret River",
    lat: -33.9500,
    lng: 115.0700,
    coordinates: [-33.9500, 115.0700],
    elevation: "40m to 140m along the Leeuwin-Naturaliste Ridge",
    soils: [
      "Gravelly Sandy Loam over Clay & Laterite Ironstone (Leeuwin Ridge)",
      "Ancient Granitic Gneiss Gravel"
    ],
    grapes: [
      "Cabernet Sauvignon (40%)",
      "Chardonnay (30%)",
      "Sauvignon Blanc & Semillon (25%)",
      "Shiraz (5%)"
    ],
    climate: "Maritime Mediterranean paradise surrounded on three sides by the Indian and Southern Oceans; zero frost risk.",
    riverInfluence: "The Margaret River flows through the center of the peninsula into the Indian Ocean, facilitating airflow and maritime mist.",
    coastalInfluence: "Consistent maritime sea breezes (the 'Fremantle Doctor') moderate summer heat, providing a climate virtually identical to Bordeaux's greatest vintages.",
    appellations: ["Margaret River GI", "Wilyabrup sub-district", "Wallcliffe", "Yallingup"],
    terroir: "Ancient Precambrian granite and lateritic gravel ridges along the Leeuwin-Naturaliste Ridge. Consistent maritime sea breezes (the 'Fremantle Doctor') moderate summer heat, providing a climate virtually identical to Bordeaux's greatest vintages.",
    focus: "Aristocratic, gravel-driven Cabernet Sauvignon (cassis, bay leaf, tobacco, graphite) and world-beating, Burgundian-class Chardonnay with lemon curd and saline hazelnut reduction (Leeuwin Art Series, Cullen, Moss Wood).",
    description: "Established in 1967 following the scientific research of Dr. John Gladstones, Margaret River is Australia's supreme maritime fine wine paradise.",
    microTerroirs: [
      { name: "Wilyabrup Valley", focus: "Warm central gravel corridor producing Australia's most refined, complex, and ageworthy Cabernet Sauvignon (Cullen Diana Madeline, Moss Wood, Woodlands)." },
      { name: "Wallcliffe & Leeuwin Ridge", focus: "Cool maritime sector with ironstone gravels producing benchmark Grand Cru-class Chardonnay (Leeuwin Art Series Block 20)." },
      { name: "Karridale (Southern Corridor)", focus: "Coldest, most maritime sector producing pristine, high-tension Chardonnay, Sauvignon Blanc, and sparkling base." }
    ]
  },
  {
    id: 'hunter-valley',
    name: "Hunter Valley (New South Wales)",
    district: "Hunter Valley",
    lat: -32.8000,
    lng: 151.3000,
    coordinates: [-32.8000, 151.3000],
    elevation: "60m to 250m beneath the Brokenback Range",
    soils: [
      "Alluvial Sandy Loam over Ancient River Bed",
      "Red Volcanic Clay over Limestone (Brokenback Foothills)"
    ],
    grapes: [
      "Semillon (50%)",
      "Shiraz (30%)",
      "Chardonnay (15%)",
      "Verdelho (5%)"
    ],
    climate: "Warm, humid Subtropical-Maritime with heavy summer harvest rains and cloud cover.",
    riverInfluence: "The Hunter River alluvial plains provide moisture-wicking sandy loam soils that prevent vine waterlogging during summer monsoonal rains.",
    coastalInfluence: "Afternoon cloud cover and ocean breezes rolling in from Newcastle protect delicate Semillon clusters from sunburn.",
    appellations: ["Hunter Valley GI", "Pokolbin GI", "Broke Fordwich GI"],
    terroir: "Ancient alluvial flats and volcanic red clay slopes. Semillon is picked remarkably early (10–11% potential ABV) without oak aging, starting as crisp lemon-water and transforming over 15–25 years into honeyed, toasty, waxy perfection.",
    focus: "The unique world anomaly of Hunter Valley Semillon (Tyrrell's Vat 1, Mount Pleasant) and savory, leather-and-earth, medium-bodied Shiraz.",
    description: "Australia's oldest continuous wine region, planted in the 1820s by James Busby, the 'Father of Australian Viticulture'.",
    microTerroirs: [
      { name: "Pokolbin Flats (Short Flat & Ashmans)", focus: "Sandy alluvial creek beds yielding world-benchmark, low-alcohol, un-oaked ageworthy Semillon (Tyrrell's Vat 1)." },
      { name: "Broke Fordwich Red Slopes", focus: "Volcanic red clay soils producing savory, leather, and earthy medium-bodied Shiraz." },
      { name: "Lovedale & Black Creek", focus: "Deep alluvial loams producing floral, beeswax-scented Semillon (Mount Pleasant Lovedale)." }
    ]
  },
  {
    id: 'coonawarra',
    name: "Coonawarra & Limestone Coast",
    district: "Coonawarra",
    lat: -37.2800,
    lng: 140.8300,
    coordinates: [-37.2800, 140.8300],
    elevation: "50m to 80m on flat limestone ridge",
    soils: [
      "Terra Rossa (Vibrant Red Clay Loam over White Calcareous Gambier Limestone)"
    ],
    grapes: [
      "Cabernet Sauvignon (70%)",
      "Shiraz (20%)",
      "Merlot & Cabernet Franc (5%)",
      "Chardonnay (5%)"
    ],
    climate: "Cool Maritime moderated by the icy Southern Ocean and Antarctic currents.",
    riverInfluence: "Subterranean aquifers in porous Gambier limestone provide pure natural moisture directly to deep vine roots.",
    coastalInfluence: "Persistent Antarctic cloud cover and cold Southern Ocean sea breezes keep daytime temperatures cool during ripening.",
    appellations: ["Coonawarra GI", "Limestone Coast GI"],
    terroir: "A legendary cigar-shaped ridge of vibrant red terra rossa soil (only 1.5 km wide by 15 km long) over porous white limestone. Supreme drainage and cool ocean breezes craft Australia's benchmark cool-climate Cabernet.",
    focus: "Intense, structural Cabernet Sauvignon: blackcurrant, eucalyptus, cedar, dark chocolate, and chalky fine-grained tannins (Wynns John Riddoch, Balnaves, Parker Estate).",
    description: "The Limestone Coast's crown jewel, recognized worldwide for its striking red earth and ageworthy Cabernet Sauvignon.",
    microTerroirs: [
      { name: "Central Terra Rossa Strip", focus: "Pure 1.5km wide red clay-over-chalk ridge producing Australia's most structured, mint-and-cassis Cabernet Sauvignon." },
      { name: "Northern Black Soils", focus: "Heavier clay soils producing richer, fleshier Shiraz and Cabernet blends." }
    ]
  }
];

export const AUSTRALIA_GRAND_CRUS = [
  {
    id: 'hill-of-grace',
    name: "Henschke Hill of Grace (Grandfather Block)",
    subregionId: "eden-valley",
    subregion: "Eden Valley & High Eden (Barossa Ranges)",
    district: "Eden Valley",
    village: "Keyneton",
    lat: -34.5680,
    lng: 139.1120,
    coordinates: [-34.5680, 139.1120],
    areaHa: 8.00,
    dominantGrape: "Shiraz",
    grapeRatio: "100% Shiraz (Pre-Phylloxera Ungrafted Vines planted 1860)",
    wineType: "Red",
    aspect: "Sheltered amphitheater facing the historic Lutheran Church of Grace",
    elevationRange: "400m",
    soil: "Deep Red Clay Loam with Weathered Mica Schist & Quartz Gravel",
    tier: "grandCru",
    badge: "National Monument / Grand Cru Icon",
    classification: "Langton's 'First Classified' / Australian National Monument",
    aocDecreeYear: 1958,
    character: "Haunting, ethereal perfume of crushed blackberry, black pepper, sage, five-spice, wild thyme, and endless aristocratic silken depth.",
    benchmarkProducers: [
      "Henschke"
    ],
    famousProducers: [
      "Henschke"
    ],
    legalNotes: "Planted circa 1860 by Nicolaus Stanitzki with original un-grafted French Syrah cuttings."
  },
  {
    id: 'penfolds-block-42',
    name: "Penfolds Kalimna Block 42",
    subregionId: "barossa-valley",
    subregion: "Barossa Valley (South Australia)",
    district: "Barossa Valley",
    village: "Ebenezer",
    lat: -34.4620,
    lng: 138.9950,
    coordinates: [-34.4620, 138.9950],
    areaHa: 4.00,
    dominantGrape: "Cabernet Sauvignon",
    grapeRatio: "100% Cabernet Sauvignon (Planted 1885)",
    wineType: "Red",
    aspect: "Gently sloping northern plain",
    elevationRange: "280m",
    soil: "Red Clay Loam over Deep Pre-Cambrian Calcareous Limestone & Ironstone",
    tier: "grandCru",
    badge: "Oldest Living Cabernet Vineyard",
    classification: "World's Oldest Continuously Producing Cabernet Sauvignon Vines",
    aocDecreeYear: 1885,
    character: "Monumental, ink-black concentration: cassis, graphite, dried mint, dark mocha, and seamless architectural power.",
    benchmarkProducers: [
      "Penfolds (Bin 707 & Rare Block 42 Ampoule)"
    ],
    famousProducers: [
      "Penfolds (Bin 707 & Rare Block 42 Ampoule)"
    ],
    legalNotes: "Planted in 1885, recognized as the oldest living Cabernet Sauvignon vineyard on Earth."
  },
  {
    id: 'leeuwin-art-series-block-20',
    name: "Leeuwin Estate Art Series Chardonnay (Block 20)",
    subregionId: "margaret-river",
    subregion: "Margaret River (Western Australia)",
    district: "Margaret River",
    village: "Wallcliffe",
    lat: -34.0250,
    lng: 115.0880,
    coordinates: [-34.0250, 115.0880],
    areaHa: 10.00,
    dominantGrape: "Chardonnay",
    grapeRatio: "100% Chardonnay (Gin Gin Clone)",
    wineType: "White",
    aspect: "Gentle East-facing slope with direct Indian Ocean breeze",
    elevationRange: "60m",
    soil: "Ancient Lateritic Ironstone Gravel over Mottled Yellow Clay",
    tier: "grandCru",
    badge: "Langton's First Classified",
    classification: "Langton's 'First Classified' Icon",
    aocDecreeYear: 1980,
    character: "Pears, white peach, toasted sesame, flint, lemon curd, and breathtaking saline mineral length.",
    benchmarkProducers: [
      "Leeuwin Estate"
    ],
    famousProducers: [
      "Leeuwin Estate"
    ],
    legalNotes: "Pioneered in 1975 under the mentorship of legendary Napa Valley winemaker Robert Mondavi."
  },
  {
    id: 'tyrrells-vat-1',
    name: "Tyrrell's Vat 1 Semillon (Short Flat & Ashmans)",
    subregionId: "hunter-valley",
    subregion: "Hunter Valley (New South Wales)",
    district: "Hunter Valley",
    village: "Pokolbin",
    lat: -32.8100,
    lng: 151.3150,
    coordinates: [-32.8100, 151.3150],
    areaHa: 12.00,
    dominantGrape: "Semillon",
    grapeRatio: "100% Semillon (Dry-Grown Bush Vines planted 1908)",
    wineType: "White",
    aspect: "Alluvial valley plain",
    elevationRange: "100m",
    soil: "Deep Sandy Alluvial Loam over Ancient River Bed",
    tier: "grandCru",
    badge: "Langton's First Classified",
    classification: "Langton's 'First Classified' / Australia's Most Awarded White",
    aocDecreeYear: 1963,
    character: "Low alcohol (10–11% ABV) transforming from crisp lime and lemongrass into unctuous buttered toast, beeswax, and macadamia.",
    benchmarkProducers: [
      "Tyrrell's Wines"
    ],
    famousProducers: [
      "Tyrrell's Wines"
    ],
    legalNotes: "Sourced from dry-grown bush vines planted as early as 1908 without oak contact."
  }
];

export const AUSTRALIA_TECHNICAL_REGULATIONS = {
  geology: {
    system: "Precambrian Cratons, Barossa Ironstone & Coonawarra Terra Rossa",
    summary: "Australia possesses some of the oldest undisturbed geological soils on Earth. Un-glaciated for over 250 million years, the landscape features ancient weathered Precambrian granites in Western Australia, ironstone-rich red clay in the Barossa Valley, and the legendary Quaternary Terra Rossa clay strip over Gambier limestone in Coonawarra.",
    formations: [
      {
        id: "barossa-red-clay-ironstone",
        name: "Barossa Red Clay & Ironstone",
        frenchName: "Argile Rouge et Fer de Barossa",
        localName: "Barossa Red Brown Earth",
        period: "Precambrian (~600 Ma)",
        fossil: "Iron oxide minerals & Quartzite cobbles",
        characteristics: "Heavy red clay subsoils rich in iron and potassium, holding winter rains deep underground.",
        porosity: "High subsoil moisture retention sustaining deep ungrafted vine roots through blistering 40°C summer heat spikes without irrigation.",
        keyAreas: ["Ebenezer", "Marananga", "Seppeltsfield", "Kalimna"],
        wineImpact: "Stores moisture during scorching summer months, nourishing ungrafted vines to deliver monumental richness, plush tannins, and dark fruit power."
      },
      {
        id: "coonawarra-terra-rossa",
        name: "Coonawarra Terra Rossa",
        frenchName: "Terre Rouge sur Calcaire de Coonawarra",
        localName: "Terra Rossa Strip",
        period: "Quaternary over Tertiary Gambier Limestone (~15 Ma)",
        fossil: "Marine Bryozoan Limestone & Coral Reefs",
        characteristics: "Vibrant red topsoil rich in iron oxide (10–50cm deep) resting directly on porous, alkaline Gambier limestone.",
        porosity: "Exceptional drainage and capillary water transfer from porous subterranean limestone chalk.",
        keyAreas: ["Coonawarra Central Ridge"],
        wineImpact: "Provides free drainage and alkaline root depth, giving Cabernet Sauvignon signature mint, cassis, cedar, and structural chalkiness."
      },
      {
        id: "margaret-river-laterite-gravel",
        name: "Margaret River Laterite Gravel & Granitic Gneiss",
        frenchName: "Graves Latéritiques de Margaret River",
        localName: "Leeuwin Ironstone Gravel",
        period: "Precambrian Yilgarn Craton (~1,500 Ma)",
        fossil: "Metamorphic Gneiss & Laterite Concretions",
        characteristics: "Ironstone pea-gravel (laterite) over mottled kaolinitic clay along the Leeuwin-Naturaliste ridge.",
        porosity: "Rapid drainage in upper gravels with moisture retention in underlying clay beds.",
        keyAreas: ["Wilyabrup", "Wallcliffe", "Yallingup"],
        wineImpact: "Mirrors Bordeaux's Left Bank gravels, producing maritime Cabernet and Chardonnay of crystalline energy, saline reduction, and savory bay leaf complexity."
      },
      {
        id: "eden-valley-mica-schist",
        name: "Eden Valley Mica Schist & Quartzite",
        frenchName: "Schistes et Quartzites d'Eden Valley",
        localName: "Barossa Ranges Schist",
        period: "Precambrian (~800 Ma)",
        fossil: "Foliated Mica Schist & White Quartz",
        characteristics: "Stony, nutrient-poor metamorphic rock on elevated windswept ridges.",
        porosity: "Very low moisture retention forcing roots deep into fractured schist.",
        keyAreas: ["Keyneton", "High Eden", "Springton"],
        wineImpact: "Imparts piercing talc minerality, floral lime blossom tension, and ethereal spice to dry Riesling and Shiraz."
      }
    ]
  },
  grapes: {
    major: [
      {
        id: "shiraz",
        name: "Shiraz (Syrah)",
        percentage: 55,
        type: "Red",
        epicenter: "Barossa Valley, Eden Valley, McLaren Vale, Hunter Valley",
        profile: "Blackberry liqueur, dark plum, mocha, black pepper, smoked meat, and vanilla bean.",
        role: "Australia's national red icon; centuries-old ungrafted pre-phylloxera vines (dating to 1843) produce unparalleled vinous power and velvet texture.",
        clones: ["Barossa Massale Selection (Pre-Phylloxera 1843)", "1654", "BVRC12"],
        benchmarkCuvees: [
          "Penfolds Grange (Bin 95)",
          "Henschke Hill of Grace",
          "Torbreck RunRig",
          "Clonakilla Shiraz Viognier"
        ]
      },
      {
        id: "cabernet-sauvignon",
        name: "Cabernet Sauvignon",
        percentage: 25,
        type: "Red",
        epicenter: "Margaret River, Coonawarra, Barossa Valley (Kalimna)",
        profile: "Cassis, dark cherry, eucalyptus, bay leaf, tobacco, and graphite.",
        role: "Thrives in maritime Margaret River and cool Coonawarra terra rossa, producing wines of regal gravelly architecture.",
        clones: ["Houghton Massale Selection", "Reynella Selection", "CW44"],
        benchmarkCuvees: [
          "Penfolds Bin 707 & Block 42",
          "Cullen Diana Madeline",
          "Leeuwin Art Series Cabernet",
          "Wynns John Riddoch"
        ]
      },
      {
        id: "chardonnay-semillon",
        name: "Chardonnay & Semillon",
        percentage: 15,
        type: "White",
        epicenter: "Margaret River (Chardonnay), Hunter Valley (Semillon), Adelaide Hills",
        profile: "Lemon curd, white peach, toasted sesame, brioche, flinty reduction, lemongrass, and beeswax.",
        role: "World-class dry whites spanning ageworthy, un-oaked Hunter Semillon to Grand Cru-level Margaret River Chardonnay.",
        clones: ["Gin Gin Clone (Mendoza/OF)", "Bernard 95 & 76", "Hunter Semillon Massale"],
        benchmarkCuvees: [
          "Leeuwin Estate Art Series Chardonnay",
          "Tyrrell's Vat 1 Semillon",
          "Mount Pleasant Lovedale Semillon"
        ]
      },
      {
        id: "riesling-grenache",
        name: "Riesling & Grenache",
        percentage: 5,
        type: "Dual",
        epicenter: "Eden Valley & Clare Valley (Riesling), Barossa Valley & McLaren Vale (Grenache)",
        profile: "Lime juice, talc, green apple, wet slate, wild strawberry, and five-spice.",
        role: "Bone-dry, laser-sharp dry Rieslings of immortal longevity alongside ancient 100+ year old bush-vine Grenache.",
        benchmarkCuvees: [
          "Pewsey Vale The Contours Riesling",
          "Grosset Polish Hill Riesling",
          "Yangarra High Sands Grenache"
        ]
      }
    ],
    heritage: [
      {
        name: "Mataro (Mourvèdre)",
        percentage: 3,
        type: "Red",
        epicenter: "Barossa Valley, McLaren Vale",
        profile: "Game, earth, dark chocolate, leather, and rustic spice.",
        role: "Historical blending component in traditional GSM blends and old-vine single-varietal expressions.",
        status: "Century-old bush vine heritage variety."
      }
    ]
  },
  classification: {
    system: "Wine Australia Geographical Indications (GI) & Barossa Old Vine Charter",
    description: "Rigorous label integrity program alongside the world-famous Barossa Old Vine Charter and Langton's Classification of Australian Wine.",
    pyramid: [
      {
        tier: "Ancestor Vine (125+ Years Old)",
        sharePct: "0.1%",
        aocCount: "Living Pre-Phylloxera Treasures",
        description: "Vines planted before 1900 on their own original root systems (e.g. Henschke Hill of Grace 1860, Penfolds Kalimna Block 42 1885, Langmeil 1843 Freedom Shiraz); virtually unique in the global wine world."
      },
      {
        tier: "Centenarian Vine (100+ Years Old)",
        sharePct: "0.5%",
        aocCount: "Century-Old Heritage Vines",
        description: "Vines planted 100+ years ago that survived droughts, economic depressions, and government vine-pull schemes, yielding profound natural balance and concentration."
      },
      {
        tier: "Survivor Vine (70+ Years Old)",
        sharePct: "2%",
        aocCount: "Post-WWII Plantings",
        description: "Old vines planted during the early-to-mid 20th century delivering deeply rooted mineral extraction and natural vintage resilience."
      },
      {
        tier: "Old Vine (35+ Years Old)",
        sharePct: "5%",
        aocCount: "Established Maturity",
        description: "Mature root systems providing structural depth, consistent low yields, and intense varietal expression."
      },
      {
        tier: "Langton's First Classified",
        sharePct: "0.2%",
        aocCount: "Pinnacle Fine Wine Collectibles",
        description: "The apex tier of the secondary market Langton's Classification of Australian Wine (Penfolds Grange, Henschke Hill of Grace, Leeuwin Art Series Chardonnay, Tyrrell's Vat 1 Semillon, Mount Mary Quintet)."
      }
    ]
  },
  vinification: {
    barrelType: "American Oak Hogsheads (300L) & French Oak Barriques (225L)",
    barrelDescription: "Penfolds Grange famously utilizes 100% new American oak 300L hogsheads for monumental vanillin and mocha richness, whereas Margaret River and modern fine wine producers utilize tight-grain French oak barriques (20–40% new) to emphasize pure terroir precision.",
    traditions: [
      { practice: "Pre-Phylloxera Ungrafted Vines (Own Roots)", details: "Due to strict quarantine laws, South Australia and Western Australia have never experienced phylloxera; vines grow on their own authentic European Vitis vinifera rootstocks dating back to 1843." },
      { practice: "Un-Oaked Hunter Semillon Maturation", details: "Picked at 10–11% potential alcohol, fermented in stainless steel without oak contact or malolactic fermentation, and bottled immediately to develop unctuous toasty complexity over 20+ years." }
    ]
  }
};

export const AUSTRALIA_PRESTIGE_ESTATES = [
  {
    id: "grange",
    name: "Grange (Bin 95)",
    producer: "Penfolds",
    type: "Domaine",
    village: "Multi-District Blend (Barossa / McLaren Vale / Magill)",
    grape: "Shiraz (96–100%), Cabernet Sauvignon (0–4%)",
    cepage: "Shiraz (96–100%), Cabernet Sauvignon (0–4%)",
    grapeComposition: "Shiraz (96–100%), Cabernet Sauvignon (0–4%)",
    classification: "Heritage Icon of South Australia",
    status: "Heritage Icon of South Australia (Langton's First Classified)",
    debutVintage: 1951,
    sourcing: "Top old-vine parcels across South Australia's greatest red terroirs (Kalimna, Ebenezer, McLaren Vale, Magill Estate).",
    winemaking: "Created secretly in 1951 by Max Schubert; fermented in stainless steel with heading-down boards and aged 18–20 months in 100% new American oak hogsheads (300L).",
    terroir: "Top old-vine parcels across South Australia's greatest red terroirs.",
    character: "Monumental, ink-black concentration: blackberry liqueur, soy sauce, dark mocha, coal dust, and 50+ year longevity.",
    iconicStatus: "Australia's undisputed first growth and the most celebrated wine in the Southern Hemisphere."
  },
  {
    id: "hill-of-grace-shiraz",
    name: "Hill of Grace Shiraz",
    producer: "Henschke",
    type: "Domaine",
    village: "Keyneton (Eden Valley)",
    grape: "Shiraz (100% Pre-Phylloxera Vines)",
    cepage: "100% Shiraz",
    grapeComposition: "100% Shiraz",
    classification: "Iconic Single Vineyard Monopole",
    status: "Iconic Single Vineyard (Langton's First Classified)",
    debutVintage: 1958,
    sourcing: "8-hectare single vineyard in Keyneton planted around 1860 by Nicolaus Stanitzki on its own roots.",
    winemaking: "Organic and biodynamic viticulture, traditional open-top fermenters, and aging in seasoned French and American oak hogsheads.",
    terroir: "Mica schist, red clay, and quartz in the cool Eden Valley ranges.",
    character: "Haunting floral perfume, black pepper, sage, exotic five-spice, dark plum, and velvet silk.",
    iconicStatus: "The DRC Romanée-Conti of Australian wine, sourced exclusively from ancient ungrafted vines."
  },
  {
    id: "art-series-chardonnay",
    name: "Art Series Chardonnay",
    producer: "Leeuwin Estate",
    type: "Domaine",
    village: "Wallcliffe (Margaret River)",
    grape: "Chardonnay (100%)",
    cepage: "100% Chardonnay",
    grapeComposition: "100% Chardonnay",
    classification: "Langton's 'First Classified'",
    status: "Langton's First Classified (World White Icon)",
    debutVintage: 1980,
    sourcing: "Block 20 in Wallcliffe planted in 1975 with the Gin Gin clone on lateritic gravel.",
    winemaking: "100% whole-cluster pressed, 100% barrel fermented in new French oak barriques with regular battonage; partial malolactic fermentation.",
    terroir: "Laterite ironstone gravels in the Margaret River maritime corridor.",
    character: "Pears, white peach, toasted sesame, flinty reduction, lemon curd, and saline mineral drive.",
    iconicStatus: "Consistently rated alongside Burgundy's greatest Grand Crus (Bâtard-Montrachet)."
  },
  {
    id: "runrig-shiraz",
    name: "RunRig Shiraz",
    producer: "Torbreck Vintners",
    type: "Domaine",
    village: "Marananga / Ebenezer (Barossa Valley)",
    grape: "Shiraz (98%), Viognier (2%)",
    cepage: "Shiraz (98%), Viognier (2%)",
    grapeComposition: "Shiraz (98%), Viognier (2%)",
    classification: "Cult Old-Vine Shiraz",
    status: "Cult Old-Vine Shiraz (Multiple 100-Point Icon)",
    debutVintage: 1995,
    sourcing: "Centenarian dry-grown bush vines (120–160 years old) across Lyndoch, Rowland Flat, Moppa, Ebenezer, and Greenock.",
    winemaking: "Crafted in the style of Côte-Rôtie with a touch of Viognier; aged 30 months in French oak barriques.",
    terroir: "Centenarian dry-grown bush vines on red clay and ironstone.",
    character: "Opulent black fruit, apricot blossom, bacon fat, dark chocolate, and endless velvet texture.",
    iconicStatus: "The benchmark modern cult Barossa Shiraz, combining monumental power with aromatic lift."
  },
  {
    id: "vat-1-semillon",
    name: "Vat 1 Semillon",
    producer: "Tyrrell's Wines",
    type: "Domaine",
    village: "Pokolbin (Hunter Valley)",
    grape: "Semillon (100%)",
    cepage: "100% Semillon",
    grapeComposition: "100% Semillon",
    classification: "Langton's 'First Classified'",
    status: "Langton's First Classified / Australia's Most Awarded White",
    debutVintage: 1963,
    sourcing: "Short Flat and Ashmans vineyards in Pokolbin planted in 1908 and 1923 on sandy alluvial creek beds.",
    winemaking: "Hand-picked early at 10.5% ABV, fermented bone-dry in stainless steel, and bottled without oak aging.",
    terroir: "Ancient sandy loam over alluvial flats in Pokolbin.",
    character: "Lemon curd, beeswax, lemongrass, roasted macadamia, and astounding 20+ year evolution without oak contact.",
    iconicStatus: "Australia's most awarded white wine in history, holding over 5,500 show medals and trophies."
  },
  {
    id: "john-riddoch-cabernet",
    name: "John Riddoch Cabernet Sauvignon",
    producer: "Wynns Coonawarra Estate",
    type: "Domaine",
    village: "Coonawarra (Limestone Coast)",
    grape: "Cabernet Sauvignon (100%)",
    cepage: "100% Cabernet Sauvignon",
    grapeComposition: "100% Cabernet Sauvignon",
    classification: "Flagship Coonawarra Cabernet",
    status: "Flagship Terra Rossa Icon (Langton's Exceptional)",
    debutVintage: 1982,
    sourcing: "Top 1% of estate Cabernet fruit from the finest parcels on the central Terra Rossa strip in Coonawarra.",
    winemaking: "Vinified in small open fermenters and aged 16–18 months in tight-grain French oak barriques.",
    terroir: "Vibrant red terra rossa clay over white Gambier limestone.",
    character: "Cassis, dried eucalyptus, dark chocolate, cedar, and fine-grained, powdery limestone tannins.",
    iconicStatus: "The definitive archetype of cool-climate Australian Cabernet Sauvignon."
  }
];

export const AUSTRALIA_ICONIC_DOMAINES = [
  {
    id: "penfolds-estate",
    name: "Penfolds",
    village: "Nuriootpa / Magill (South Australia)",
    subregion: "Barossa Valley (South Australia)",
    vigneron: "Peter Gago",
    wineType: "Dual",
    status: "Historic Treasury Wine Estates Icon (1844)",
    philosophy: "The master of multi-regional assemblage and American oak maturation, crafting Australia's most collectible fine wines.",
    keyCuvees: [
      "Grange (Bin 95)",
      "Bin 707 Cabernet Sauvignon",
      "Yattarna Chardonnay",
      "RWT / Bin 798 Shiraz",
      "Bin 389 Cabernet Shiraz"
    ]
  },
  {
    id: "henschke-estate",
    name: "Henschke",
    village: "Keyneton (Eden Valley)",
    subregion: "Eden Valley & High Eden (Barossa Ranges)",
    vigneron: "Stephen & Prue Henschke",
    wineType: "Dual",
    status: "Sixth-Generation Biodynamic Family Estate",
    philosophy: "Six generations of biodynamic viticulture and single-vineyard preservation in the cool Eden Valley ranges.",
    keyCuvees: [
      "Hill of Grace Shiraz",
      "Mount Edelstone Shiraz",
      "Cyril Henschke Cabernet Sauvignon",
      "Julius Riesling",
      "Peggy's Hill Riesling"
    ]
  },
  {
    id: "leeuwin-estate",
    name: "Leeuwin Estate",
    village: "Margaret River (Western Australia)",
    subregion: "Margaret River (Western Australia)",
    vigneron: "Phil Hutchison & Tim Lovett",
    wineType: "Dual",
    status: "Margaret River Founder Estate (1973)",
    philosophy: "Pristine maritime viticulture creating benchmark Chardonnay and Cabernet Sauvignon of timeless Burgundian and Bordeaux elegance.",
    keyCuvees: [
      "Art Series Chardonnay",
      "Art Series Cabernet Sauvignon",
      "Art Series Shiraz",
      "Siblings Sauvignon Blanc"
    ]
  },
  {
    id: "tyrrells-wines",
    name: "Tyrrell's Wines",
    village: "Pokolbin (Hunter Valley)",
    subregion: "Hunter Valley (New South Wales)",
    vigneron: "Bruce Tyrrell & Chris Tyrrell",
    wineType: "Dual",
    status: "Historic Family Estate (1858)",
    philosophy: "Guardians of Australia's oldest ungrafted Semillon and Shiraz vineyards, practicing traditional basket pressing and un-oaked Semillon aging.",
    keyCuvees: [
      "Vat 1 Semillon",
      "Vat 47 Chardonnay",
      "Vat 9 Shiraz",
      "4 Acres Shiraz (Planted 1879)",
      "Johnno's Shiraz"
    ]
  },
  {
    id: "torbreck-vintners",
    name: "Torbreck Vintners",
    village: "Marananga (Barossa Valley)",
    subregion: "Barossa Valley (South Australia)",
    vigneron: "Ian Hongell",
    wineType: "Red",
    status: "Barossa Cult Icon",
    philosophy: "Rhône-inspired mastery dedicated to centenarian ungrafted Barossa bush vines on dry-farmed ironstone soils.",
    keyCuvees: [
      "RunRig Shiraz",
      "The Laird",
      "The Factor",
      "Les Amis (100% Grenache)",
      "Descendant"
    ]
  },
  {
    id: "wynns-coonawarra",
    name: "Wynns Coonawarra Estate",
    village: "Coonawarra (Limestone Coast)",
    subregion: "Coonawarra & Limestone Coast",
    vigneron: "Sue Hodder & Sarah Pidgeon",
    wineType: "Red",
    status: "Coonawarra Pioneer (1891)",
    philosophy: "Uncompromising focus on the unique Terra Rossa soil strip, producing Australia's longest-lived cool-climate Cabernet Sauvignon.",
    keyCuvees: [
      "John Riddoch Cabernet Sauvignon",
      "Michael Shiraz",
      "Black Label Cabernet Sauvignon",
      "Messenger Single Vineyard Cabernet"
    ]
  },
  {
    id: "cullen-wines",
    name: "Cullen Wines",
    village: "Wilyabrup (Margaret River)",
    subregion: "Margaret River (Western Australia)",
    vigneron: "Vanya Cullen",
    wineType: "Dual",
    status: "Certified Biodynamic Pioneer",
    philosophy: "Certified biodynamic, carbon-positive estate producing world-class Cabernet blends and Chardonnays with extreme purity.",
    keyCuvees: [
      "Diana Madeline (Cabernet Blend)",
      "Kevin John Chardonnay",
      "Vanya Cabernet Sauvignon",
      "Amber Wine (Orange Wine)"
    ]
  },
  {
    id: "mount-mary",
    name: "Mount Mary",
    village: "Coldstream (Yarra Valley)",
    subregion: "Eden Valley & High Eden (Barossa Ranges)",
    vigneron: "Sam Middleton",
    wineType: "Dual",
    status: "Australian Cult Classic",
    philosophy: "Artisanal Burgundian and Bordeaux-inspired estate founded by Dr. John Middleton, celebrated for low yields, elegance, and immense aging capacity.",
    keyCuvees: [
      "Quintet (Bordeaux Blend)",
      "Triolet (White Blend)",
      "Chardonnay",
      "Pinot Noir"
    ]
  }
];

export const AUSTRALIA_FOOD_PAIRINGS = [
  {
    category: "Wood-Fired Steaks & Barbecue",
    wineType: "Red",
    targetWine: "Barossa Valley Shiraz (Penfolds Grange / Torbreck RunRig)",
    dish: "Charbroiled Australian Wagyu Ribeye, Smoked Beef Short Ribs with Molasses-Chili Glaze, Grilled Lamb Cutlets over Vine Shoots",
    note: "Barossa Shiraz's explosive dark blackberry fruit, rich mocha oak, and cracked black pepper harmonize with charred beef crust and caramelized barbecue smoke while fine tannins slice through rich Wagyu marbling.",
    glassware: "Bordeaux Grand Cru Stem (850ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1.5–2 hours before service for optimal aeration."
  },
  {
    category: "Slow-Roasted Spring Lamb & Cutlets",
    wineType: "Red",
    targetWine: "Coonawarra & Margaret River Cabernet Sauvignon (Wynns John Riddoch / Cullen Diana Madeline)",
    dish: "Roasted Rack of Saltbush Lamb with Garlic & Rosemary Jus, Slow-Roasted Lamb Shoulder with Mint Chimichurri",
    note: "The signature eucalyptus, cassis, cedar, and fine-grained limestone tannins of cool-climate Australian Cabernet cut through succulent lamb fat while echoing fresh rosemary and mint aromatics.",
    glassware: "Bordeaux Grand Cru Stem (850ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1–2 hours before service."
  },
  {
    category: "Wild Game & Venison",
    wineType: "Red",
    targetWine: "Eden Valley Old-Vine Shiraz (Henschke Hill of Grace / Mount Edelstone)",
    dish: "Pan-Seared Kangaroo Loin with Juniper Berry Jus, Roasted Venison with Wild Mountain Berry Compote",
    note: "Lean, savory wild game meats are elevated by Eden Valley Shiraz's haunting floral perfume, wild sage, black pepper, and silken, cool-climate fine tannins.",
    glassware: "Burgundy Pinot Noir or Large Syrah Stem (750ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1 hour before service."
  },
  {
    category: "Seafood & Ocean Crustaceans",
    wineType: "White",
    targetWine: "Margaret River Chardonnay (Leeuwin Estate Art Series / Kevin John)",
    dish: "Butter-Poached Australian Marron / Crayfish with Lemon Herb Butter, Pan-Roasted Kingfish with Truffle Butter Sauce",
    note: "Margaret River Chardonnay's citrus tension, flinty reduction, saline mineral drive, and hazelnut cream elevate fresh lobster/marron and rich buttery sauces without feeling heavy.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not required; aerate gently in glass."
  },
  {
    category: "Fresh Oysters & Raw Crudo",
    wineType: "White",
    targetWine: "Aged Hunter Valley Semillon (Tyrrell's Vat 1) & Eden Valley Dry Riesling (Pewsey Vale)",
    dish: "Fresh Sydney Rock Oysters on the Half Shell, Kingfish Ceviche with Finger Lime & Sea Salt, Seared Hokkaido Scallops",
    note: "The laser-sharp lime acidity, beeswax nuance, and talc minerality of aged dry Semillon and Eden Valley Riesling cut cleanly through briny fresh oysters and delicate raw fish.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "8–10°C (46–50°F)",
    decanting: "Not required; preserve vibrant marine freshness."
  },
  {
    category: "Artisan Sharp Cheeses & Charcuterie",
    wineType: "Red",
    targetWine: "Old-Vine Barossa & McLaren Vale Grenache / GSM Blend (Torbreck The Steading / Yangarra)",
    dish: "Clothbound Aged Cheddar, Jamón Serrano, Duck Liver Pâté with Cornichons",
    note: "Vibrant wild strawberry, orange peel, and five-spice aromatics of old bush-vine Grenache cut through creamy aged cheddar and rich duck liver pâté.",
    glassware: "Bordeaux Grand Cru Stem (850ml)",
    servingTemp: "15–17°C (59–63°F)",
    decanting: "Decant 45 minutes before service."
  }
];
