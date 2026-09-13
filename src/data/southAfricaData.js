/**
 * ============================================================================
 * SOUTH AFRICA SOMMELIER DATASET (CMS LEVEL 3 / MASTER SOMMELIER STANDARD)
 * ============================================================================
 * 
 * Authoritative South African fine wine catalog:
 *   - 5 Key Viticultural Districts & Wards:
 *     (Stellenbosch, Swartland, Walker Bay / Hemel-en-Aarde, Constantia, Franschhoek)
 *   - Geological Pedology:
 *     (Pre-Cambrian Decomposed Cape Granite, Table Mountain Sandstone,
 *      Bokkeveld Marine Shales, Malmesbury Shales, Iron-Rich Koffieklip)
 *   - Ampelography & Viticulture:
 *     (Chenin Blanc / Steen, Cabernet Sauvignon, Syrah, Pinotage, Chardonnay,
 *      Sauvignon Blanc; Old Bush Vine Project - Certified Heritage Vineyards)
 *   - Classification Frameworks:
 *     (Wine of Origin [WO] 1973 Scheme: Geographical Unit, Region, District, Ward;
 *      Old Vine Project [OVP 35+ years], Méthode Cap Classique [MCC], Estate Wine)
 *   - Benchmark Prestige Cuvées & Iconic Domaines
 *   - Authentic Regional Food Pairings & Sommelier Service Directives
 * ============================================================================
 */

export const SOUTH_AFRICA_SUBREGIONS = [
  {
    id: 'stellenbosch',
    name: "Stellenbosch",
    district: "Coastal Region",
    lat: -33.9321,
    lng: 18.8602,
    terroir: "The historical and academic heartland of South African fine wine. Nestled between False Bay and dramatic mountain massifs (Simonsberg, Helderberg, Stellenbosch Mountain). Cooled by the maritime False Bay breezes that moderate intense Mediterranean summer sunshine over deeply weathered granite slopes.",
    focus: "Noble Cabernet Sauvignon, classical Bordeaux blends, old-vine Chenin Blanc, and aristocratic benchmark Pinotage.",
    geology: "Pre-Cambrian decomposed Cape Granite on upper slopes, weathered Table Mountain sandstone, and ancient Malmesbury shale in valley floors.",
    dominantGrapes: "Cabernet Sauvignon (35%), Chenin Blanc (20%), Syrah (15%), Pinotage (15%), Merlot (15%)",
    microTerroirs: [
      { name: "Simonsberg-Stellenbosch", focus: "North-facing weathered granite foothills producing legendary, ageworthy Cabernet Sauvignon and benchmark Pinotage (Kanonkop)." },
      { name: "Helderberg", focus: "Maritime-cooled slopes facing False Bay renowned for aristocratic Cabernet Sauvignon and chiseled Chardonnay." },
      { name: "Polkadraai Hills", focus: "Decomposed granite domes yielding electric, mineral-driven Syrah and old-bush-vine Chenin Blanc." }
    ],
    description: "The historic and academic heartland of South African viticulture, centered around the oak-lined streets of Stellenbosch and framed by dramatic mountain sentinels including the Simonsberg, Helderberg, and Stellenbosch Mountain. The climate is classic Mediterranean, moderated by maritime breezes funneling inland from nearby False Bay that mitigate midday summer heat spikes. Ancient, deeply weathered Pre-Cambrian Cape Granite on elevated hillside slopes transitions to Table Mountain sandstone and rich alluvial valley soils, providing excellent drainage and forcing vine roots deep into mineral strata. Cabernet Sauvignon serves as the undisputed king of the district, yielding structured, aristocratic reds and classical Cape Bordeaux blends with notes of cassis, pencil shavings, and fine-grained tannins. Stellenbosch is also the spiritual birthplace of Pinotage—bred at the local university by Professor A.I. Perold in 1925—with benchmark estates like Kanonkop, Meerlust (Rubicon), Rust en Vrede, and Thelema crafting cellar-worthy icons that age for decades."
  },
  {
    id: 'swartland',
    name: "Swartland",
    district: "Coastal Region",
    lat: -33.4500,
    lng: 18.7333,
    terroir: "A vast, sun-baked wheat and wine country north of Cape Town. Severe Mediterranean climate with hot dry summers and cool Atlantic nights. Non-irrigated dry-farmed bush vines dig deep roots into ancient granites and shales, yielding concentrated, low-yielding fruit with extraordinary savory depth.",
    focus: "The Swartland Revolution: Old-bush-vine Chenin Blanc, Rhône-style Syrah, Mourvèdre, Carignan, and vibrant field blends.",
    geology: "Paardeberg decomposed granite boulders, iron-rich Koffieklip gravels, and Kasteelberg Malmesbury clay-slate.",
    dominantGrapes: "Chenin Blanc (40%), Syrah (30%), Mourvèdre (10%), Grenache (10%), Cinsault (10%)",
    microTerroirs: [
      { name: "Paardeberg Mountain", focus: "Porous decomposed granite slopes creating crystalline, floral Chenin Blanc and perfumed Syrah (Sadie Family)." },
      { name: "Kasteelberg (Riebeek Valley)", focus: "Metamorphic black slate and shale soils yielding dense, inky, savory Syrah (Mullineux Schist)." },
      { name: "Malmesbury Plains", focus: "Iron-rich Koffieklip and red clay delivering earthy, fleshy, old-vine bush reds." }
    ],
    description: "A vast, sun-drenched expanse of rolling wheat fields and rugged mountain ridges north of Cape Town, the Swartland has emerged as ground zero for South Africa's dynamic artisanal fine-wine revolution. The region experiences an austere, semi-arid Mediterranean climate with hot, dry summers and cool Atlantic nights, where vines are traditionally cultivated as non-irrigated, dry-farmed bush vines. The terroir is anchored by three distinct geological formations: the crystalline decomposed granite domes of the Paardeberg, the iron-rich 'koffieklip' gravels of the plains, and the dark metamorphic Malmesbury shales of the Kasteelberg. Low-yielding old bush vines—many certified by South Africa's pioneering Old Vine Project—yield profound, mineral-charged Chenin Blanc and expressive Rhône varieties including Syrah, Mourvèdre, and Grenache. Spearheaded by visionary winemakers like Eben Sadie (Columella, Palladius) and Chris and Andrea Mullineux, the Swartland Independent movement champions minimal intervention, ambient yeast fermentations, and old large-format oak foudres."
  },
  {
    id: 'walker-bay',
    name: "Walker Bay (Hemel-en-Aarde)",
    district: "Cape South Coast",
    lat: -34.3800,
    lng: 19.2500,
    terroir: "A dramatic narrow coastal valley rising from the icy waters of Walker Bay into the Babylonstoren Mountains. Directly cooled by the frigid Antarctic Benguela Current, creating a hyper-cool maritime macroclimate with persistent sea fogs and prolonged slow grape ripening.",
    focus: "World-class cool-climate Pinot Noir and Burgundian-caliber mineral Chardonnay.",
    geology: "Weathered Bokkeveld Group marine shales with high clay content, layered over Table Mountain sandstone.",
    dominantGrapes: "Pinot Noir (50%), Chardonnay (40%), Sauvignon Blanc (10%)",
    microTerroirs: [
      { name: "Hemel-en-Aarde Valley (Lower)", focus: "Clay-rich Bokkeveld shale mid-slopes crafting structured, savory, ageworthy Pinot Noir (Hamilton Russell)." },
      { name: "Upper Hemel-en-Aarde Valley", focus: "Higher elevation granite and shale slopes producing aromatic, pure red-fruited Pinot Noir (Bouchard Finlayson)." },
      { name: "Hemel-en-Aarde Ridge", focus: "High-altitude sandstone terraces yielding laser-sharp, mineral Chardonnay and delicate Pinot Noir (Creation)." }
    ],
    description: "Situated along the rugged Cape South Coast around the whale-watching sanctuary of Hermanus, Walker Bay centers on the breathtaking Hemel-en-Aarde ('Heaven and Earth') Valley. Directly exposed to the icy Antarctic Benguela Current sweeping across Walker Bay, the region enjoys a hyper-cool maritime macroclimate blanketed by persistent morning sea fogs and brisk afternoon ocean breezes. The pedology is dominated by ancient, high-clay Bokkeveld Group marine shales layered over Table Mountain sandstone, providing superior water retention that enables dry-farming even on elevated slopes. Across its three distinct wards—Hemel-en-Aarde Valley, Upper Hemel-en-Aarde, and Hemel-en-Aarde Ridge—Pinot Noir and Chardonnay achieve an extraordinary level of cool-climate Burgundian finesse, marked by crystalline red berry fruit, savory forest floor, and flinty salinity. Pioneer Tim Hamilton Russell, alongside world-renowned estates such as Bouchard Finlayson, Creation, and Newton Johnson, has cemented Walker Bay's global reputation as South Africa's premier address for Burgundian varieties."
  },
  {
    id: 'constantia',
    name: "Constantia",
    district: "Cape Town",
    lat: -34.0200,
    lng: 18.4200,
    terroir: "The historic cradle of South African viticulture established in 1685. Nestled on the eastern slopes of the Constantiaberg mountain ridge within the Table Mountain chain. Cooled constantly by sea breezes from both False Bay and the Atlantic Ocean, preserving soaring natural acidity.",
    focus: "Legendary historic Vin de Constance natural sweet wine, crystalline Sauvignon Blanc, and aristocratic cool-climate Bordeaux reds.",
    geology: "Deeply weathered Table Mountain sandstone, decomposed granite loam, and Oakleaf clay subsoils.",
    dominantGrapes: "Sauvignon Blanc (45%), Muscat de Frontignan (25%), Cabernet Sauvignon (15%), Sémillon (15%)",
    microTerroirs: [
      { name: "Klein Constantia Mid-Slopes", focus: "East-facing amphitheater of decomposed granite dedicated to the resurrection of historic 18th-century Vin de Constance." },
      { name: "Groot Constantia Foothills", focus: "The original 1685 Simon van der Stel estate crafting refined Bordeaux-style red blends and Cape Shiraz." }
    ],
    description: "Established in 1685 by Governor Simon van der Stel on the eastern slopes of the Constantiaberg mountain ridge within the Table Mountain chain, Constantia is the oldest and most historically celebrated wine district in the Southern Hemisphere. During the 18th and 19th centuries, its unctuous, naturally sweet Muscat nectar—Vin de Constance—was coveted by European monarchs, hailed by Jane Austen and Charles Dickens, and famously requested on the deathbed of Napoleon Bonaparte on Saint Helena. The microclimate is exceptionally cool and maritime, bathed in breezes drawn simultaneously from False Bay and the open Atlantic Ocean, which preserve searing natural acidity and vibrant aromatic freshness. Vineyards cling to steep east-facing amphitheaters of deeply decomposed Pre-Cambrian granite over moisture-retentive Oakleaf red clay subsoils. Today, alongside the triumphant modern revival of Vin de Constance by Klein Constantia, estates like Groot Constantia, Buitenverwachting, and Steenberg craft some of the Cape's most electrifying, flinty Sauvignon Blancs and chiseled Bordeaux-style reds."
  },
  {
    id: 'franschhoek',
    name: "Franschhoek Valley",
    district: "Coastal Region",
    lat: -33.9100,
    lng: 19.1200,
    terroir: "A dramatic dead-end mountain valley settled by French Huguenot refugees in 1688. Surrounded on three sides by towering sandstone peaks (Franschhoek, Wemmershoek, and Groot Drakenstein Mountains) that trap winter rains while cooling afternoon mountain shadows moderate summer heat.",
    focus: "Monumental old-vine Sémillon from centenarian bush vines, refined Cabernet Sauvignon, and concentrated Syrah.",
    geology: "Alluvial valley floor sands, decomposing Table Mountain sandstone cliffs, and weathered granite benches.",
    dominantGrapes: "Cabernet Sauvignon (35%), Syrah (30%), Sémillon (20%), Chardonnay (15%)",
    microTerroirs: [
      { name: "Boekenhoutskloof Slopes", focus: "Steep north-facing slopes producing benchmark, spicy, whole-cluster Syrah and old-wood Cabernet Sauvignon." },
      { name: "Monumental Sémillon Bush Vines", focus: "Centenary ungrafted bush vines planted in 1902 producing profound, lanolin and honey-scented Sémillon." }
    ],
    description: "A dramatic, enclosed dead-end mountain valley settled in 1688 by French Huguenot refugees who brought European viticultural traditions to the Cape, Franschhoek literally translates to the 'French Corner'. The valley is framed on three sides by towering, sheer sandstone massifs—the Franschhoek, Wemmershoek, and Groot Drakenstein Mountains—which trap winter rainfall and cast cooling afternoon shadows that temper summer heat. Geological soils range from deep alluvial sands along the valley floor to weathered granite benches and decomposed Table Mountain sandstone on the upper slope colluviums. Franschhoek is globally celebrated for preserving some of South Africa's oldest living agricultural monuments: gnarled, ungrafted bush-vine Sémillon parcels planted in 1902 and 1936 that yield opulent, lanolin, wax, and beeswax-scented masterworks. Contemporary benchmark estates including Boekenhoutskloof, Bellingham, and Chamonix also excel with whole-cluster, black-pepper-inflected Syrah and muscular, age-worthy Cabernet Sauvignon."
  }
];

export const SOUTH_AFRICA_GRAND_CRUS = [
  {
    id: 'sadie-columella',
    name: "The Sadie Family 'Columella'",
    subregionId: 'swartland',
    lat: -33.5200,
    lng: 18.7800,
    soil: "Paardeberg decomposed granite and deep red Malmesbury slate",
    dominantGrape: "Syrah & Mourvèdre Blend",
    benchmarkProducers: ["The Sadie Family Wines (Eben Sadie)"]
  },
  {
    id: 'sadie-palladius',
    name: "The Sadie Family 'Palladius'",
    subregionId: 'swartland',
    lat: -33.5100,
    lng: 18.7900,
    soil: "Granite and quartz sand parcels across 17 distinct Paardeberg sites",
    dominantGrape: "Chenin Blanc Blend (11 Heritage Varieties)",
    benchmarkProducers: ["The Sadie Family Wines (Eben Sadie)"]
  },
  {
    id: 'mullineux-schist-syrah',
    name: "Mullineux 'Schist' Roundstone Syrah",
    subregionId: 'swartland',
    lat: -33.4800,
    lng: 18.8200,
    soil: "Kasteelberg iron-rich metamorphic black slate and rocky blue schist",
    dominantGrape: "Syrah",
    benchmarkProducers: ["Mullineux & Leeu Family Wines (Chris & Andrea Mullineux)"]
  },
  {
    id: 'kanonkop-black-label',
    name: "Kanonkop 'Black Label' Pinotage",
    subregionId: 'stellenbosch',
    lat: -33.8800,
    lng: 18.8600,
    soil: "Decomposed red granite and Hutton loam on Simonsberg mid-slopes",
    dominantGrape: "Pinotage (Un-trellised bush vines planted 1953)",
    benchmarkProducers: ["Kanonkop Estate (Johann Krige / Abrie Beeslaar)"]
  },
  {
    id: 'hamilton-russell-pinot',
    name: "Hamilton Russell Vineyards Pinot Noir",
    subregionId: 'walker-bay',
    lat: -34.3900,
    lng: 19.2600,
    soil: "Stony, clay-rich Bokkeveld shale mid-slopes cooled by ocean fog",
    dominantGrape: "Pinot Noir",
    benchmarkProducers: ["Hamilton Russell Vineyards (Anthony Hamilton Russell)"]
  },
  {
    id: 'vin-de-constance',
    name: "Klein Constantia 'Vin de Constance'",
    subregionId: 'constantia',
    lat: -34.0300,
    lng: 18.4200,
    soil: "Decomposed Table Mountain granite and Oakleaf clay loam",
    dominantGrape: "Muscat de Frontignan (Natural Sweet)",
    benchmarkProducers: ["Klein Constantia Estate (Hans Astrom / Matthew Day)"]
  }
];

export const SOUTH_AFRICA_TECHNICAL_REGULATIONS = {
  geology: {
    title: "Ancient Gondwana Bedrock: Decomposed Cape Granite & Bokkeveld Shales",
    summary: "The Western Cape is home to some of the oldest viticultural soils on Earth, dating back 600 to 1,000 million years. The stratigraphy is dominated by weathered Pre-Cambrian granite, Devonian marine shales, and sandstone scree.",
    formations: [
      {
        id: 'table-mountain-sandstone',
        name: "Table Mountain Sandstone (Cape Supergroup)",
        period: "Ordovician to Silurian (~500–400 Ma)",
        fossil: "Rare trace fossils in marine sandstone",
        characteristics: "Coarse quartzitic sandstone capping prominent mountain peaks, producing weathered, acidic, and well-draining sandy scree on upper slopes.",
        keyAreas: ["Table Mountain", "Simonsberg upper slopes", "Franschhoek"],
        wineImpact: "Rapid drainage and low nutrient fertility naturally restrain vine vigor, yielding energetic white wines with taut citrus acidity."
      },
      {
        id: 'cape-granite',
        name: "Pre-Cambrian Decomposed Cape Granite (Plutons)",
        period: "Late Neoproterozoic to Cambrian (~600–540 Ma)",
        fossil: "None (Plutonic igneous crystalline basement)",
        characteristics: "Coarse quartz sand and weathered feldspar clay (kaolin), rich in silica and potassium, decomposing into porous, crumbly gravels.",
        keyAreas: ["Paardeberg (Swartland)", "Polkadraai Hills (Stellenbosch)", "Darling"],
        wineImpact: "Imparts intoxicating floral aromatics, crystalline tension, flinty reduction, and chiseled vertical minerality to Syrah and Chenin Blanc."
      },
      {
        id: 'bokkeveld-shale',
        name: "Bokkeveld Group Metamorphic Marine Shales",
        period: "Early Devonian (~400–380 Ma)",
        fossil: "Devonian trilobites, brachiopods & crinoids",
        characteristics: "Weathered marine mudstones and iron-rich fissile shales with high clay content, retaining moisture deep underground through hot summers.",
        keyAreas: ["Hemel-en-Aarde Ridge & Valley", "Upper Hemel-en-Aarde", "Elgin plateau"],
        wineImpact: "Provides dense mid-palate texture, savory dried herbs, dark cherry fruit, and lingering maritime salinity to cool-climate Pinot Noir and Chardonnay."
      },
      {
        id: 'malmesbury-shale',
        name: "Malmesbury Group Metamorphic Basement",
        period: "Late Neoproterozoic (~750–550 Ma)",
        fossil: "None (Ancient metamorphic turbidites & shales)",
        characteristics: "Dark fissile metamorphic phyllite, quartzitic hornfels, and weathered clay-loam formed under immense tectonic pressure.",
        keyAreas: ["Swartland rolling hills (Malmesbury, Riebeek Kasteel)"],
        wineImpact: "Forces vine taproots deep into subterranean fissures, generating deep structural grip, black olive tapenade notes, and drought resilience."
      },
      {
        id: 'koffieklip-gravel',
        name: "Koffieklip (Ferruginous Laterite Gravel)",
        period: "Tertiary to Quaternary Deep Weathering",
        fossil: "None (Iron-rich ferricrete buckshot concretions)",
        characteristics: "Hard, rust-colored nodular iron-rich gravels resembling crushed coffee beans ('koffieklip'), resting above rich red clay subsoils.",
        keyAreas: ["Stellenbosch lower slopes", "Helderberg foothill benches"],
        wineImpact: "Concentrates dark berry fruit, sweet iron filings, and aristocratic velvety tannins in premier Cabernet Sauvignon and Pinotage."
      }
    ]
  },

  climatology: {
    system: "Mediterranean Maritime Climate with Benguela Current & Cape Doctor Winds",
    description: "Cooled by the Antarctic Benguela Current and the famous southeasterly Cape Doctor wind, the Western Cape combines warm Mediterranean sunshine with cool coastal sea breezes.",
    winds: [
      {
        name: "The Cape Doctor (Southeasterly Gale)",
        effect: "Fierce, dry wind blowing from False Bay across Cape Peninsula and Stellenbosch. Clears smog, dries morning dew instantly, and completely prevents fungal rot while suppressing excess canopy vigor."
      },
      {
        name: "Benguela Current Sea Breezes",
        effect: "Pushes cool Antarctic ocean upwelling along the western coast and Walker Bay, blanketing coastal vineyards in maritime fog and dropping night temperatures."
      }
    ]
  },

  grapes: {
    title: "South African Ampelography: Chenin Blanc, Pinotage & Old Bush Vine Cépages",
    description: "South Africa blends centuries of Huguenot viticultural heritage with cutting-edge clonal selections and precious pre-phylloxera old bush vines:",
    major: [
      {
        id: 'chenin-blanc',
        name: "Chenin Blanc (Steen)",
        percentage: 18.5,
        type: "White",
        epicenter: "Swartland, Stellenbosch & Breedekloof",
        profile: "South Africa's undisputed white benchmark. Unites crisp green apple, white peach, and lime with honeyed quince, baked pear, lanolin, and wet stone from old bush vines.",
        role: "The nation's most widely planted noble variety, crafting dry, botrytized, and sparkling masterpieces.",
        benchmarkCuvees: ["The Sadie Family 'Mev. Kirsten'", "Mullineux Old Vines White", "Alheit Vineyards 'Cartology'"]
      },
      {
        id: 'cabernet-sauvignon',
        name: "Cabernet Sauvignon",
        percentage: 11.0,
        type: "Red",
        epicenter: "Stellenbosch (Simonsberg & Helderberg slopes)",
        profile: "Cassis, blackcurrant leaf, graphite, cedar, and fine, muscular tannins that rival top Left Bank Bordeaux.",
        role: "The structural foundation of Stellenbosch's global reputation for majestic age-worthy red wines.",
        benchmarkCuvees: ["Kanonkop Cabernet Sauvignon", "Rust en Vrede Estate 1694", "Le Riche Reserve"]
      },
      {
        id: 'syrah',
        name: "Syrah (Shiraz)",
        percentage: 10.0,
        type: "Red",
        epicenter: "Swartland & Stellenbosch",
        profile: "Cracked black pepper, biltong, blackberry, fynbos mountain herbs, and savory dried meat on granitic soils.",
        role: "Superstar variety of the modern Swartland Revolution and Rhône-style blends.",
        benchmarkCuvees: ["The Sadie Family Columella", "Boekenhoutskloof Syrah", "Mullineux Schist Syrah"]
      },
      {
        id: 'pinotage',
        name: "Pinotage",
        percentage: 7.5,
        type: "Red",
        epicenter: "Stellenbosch & Swartland",
        profile: "Indigenous South African crossing of Pinot Noir × Cinsault (created in 1925 by Prof. Abraham Perold). Dark brambly plum, roasted rooibos, sweet tobacco, and velvet tannins.",
        role: "South Africa's unique indigenous red variety, celebrated in old bush vine single-vineyard bottlings.",
        benchmarkCuvees: ["Kanonkop Black Label Pinotage", "Beeslaar Pinotage", "Southern Right Pinotage"]
      },
      {
        id: 'chardonnay',
        name: "Chardonnay",
        percentage: 7.0,
        type: "White",
        epicenter: "Hemel-en-Aarde Valley, Elgin & Robertson",
        profile: "Cool maritime sites deliver Burgundian elegance with crisp green apple, white peach, toasted hazelnut, and marine oyster shell minerality.",
        role: "Benchmark cool-climate white and primary cépage for Cap Classique sparkling wines.",
        benchmarkCuvees: ["Hamilton Russell Chardonnay", "Kershaw Elgin Chardonnay", "Capensis Silene"]
      },
      {
        id: 'sauvignon-blanc',
        name: "Sauvignon Blanc",
        percentage: 10.5,
        type: "White",
        epicenter: "Durbanville, Constantia & Elgin",
        profile: "Pungent passionfruit, lemongrass, flint, blackcurrant leaf, and saline sea-breeze crispness.",
        role: "Vibrant, food-friendly white thriving in maritime wind-cooled coastal pockets.",
        benchmarkCuvees: ["Klein Constantia Sauvignon Blanc", "Iona Sauvignon Blanc"]
      }
    ],
    heritage: [
      {
        id: 'cinsault',
        name: "Cinsault (Hermitage)",
        percentage: 2.0,
        type: "Red",
        epicenter: "Swartland & Darling old vines",
        profile: "Historic blending red now reborn as pure, aromatic single-varietal wines. Translucent ruby, wild red berries, Turkish delight, and breezy freshness.",
        role: "Heritage variety providing perfumed lift and parent grape of Pinotage."
      },
      {
        id: 'semillon',
        name: "Sémillon (Groendruif)",
        percentage: 1.0,
        type: "White",
        epicenter: "Franschhoek old bush vines",
        profile: "Historic centenarian vines deliver waxy lemon curd, lanolin, beeswax, and profound cellaring potential.",
        role: "Historic white variety dating back to the earliest 19th-century Cape plantings."
      },
      {
        id: 'muscat-de-frontignan',
        name: "Muscat de Frontignan",
        percentage: 0.5,
        type: "White",
        epicenter: "Constantia",
        profile: "Grape of the historic 18th-century Vin de Constance. Dried apricot, Seville orange marmalade, honeycomb, and electric balancing acidity.",
        role: "The iconic dessert cépage celebrated across European royal courts since Napoleon."
      }
    ]
  },

  classification: {
    system: "Wine of Origin (WO) Scheme & Old Vine Project (OVP)",
    description: "Established in 1973 under the Wine and Spirit Board (SAWIS), the Wine of Origin (WO) scheme legally defines geographical boundaries and enforces strict truth-in-labeling standards.",
    pyramid: [
      {
        tier: "Single Vineyard Wine (Certified Single Parcel)",
        sharePct: "3.0%",
        aocCount: "Registered Parcels",
        yieldLimits: "Max 6 Hectares per parcel",
        description: "The apex of origin certification: wine produced from a single contiguous registered parcel under 6 hectares planted to a single grape variety."
      },
      {
        tier: "Ward (Demarcated Terroir Enclave)",
        sharePct: "12.0%",
        aocCount: "58 Official Wards",
        description: "Smallest formal district defined by homogeneous soil, topography, and meso-climate (e.g. Simonsberg-Stellenbosch, Hemel-en-Aarde Ridge, Constantia)."
      },
      {
        tier: "District (Viticultural Region)",
        sharePct: "35.0%",
        aocCount: "30 Official Districts",
        description: "Established viticultural centers sharing broader regional macroclimatic conditions (e.g. Stellenbosch, Swartland, Paarl, Walker Bay, Elgin)."
      },
      {
        tier: "Region & Geographical Unit",
        sharePct: "50.0%",
        aocCount: "6 Regions / Western Cape",
        description: "Broad overarching geographical boundaries such as Coastal Region, Cape South Coast, or Western Cape."
      }
    ],
    agingRules: [
      { tier: "Cap Classique (MCC Lees Aging)", rule: "Traditional bottle-fermented sparkling wines must spend a minimum of 12 months aging on lees (increased from 9 months in 2021); prestige cuvées often age 36 to 60+ months." },
      { tier: "Old Vine Project (Certified Heritage Vineyards)", rule: "Vines must be certified at least 35 years of age by SAWIS. Certified bottles bear the official Certified Heritage Vineyards seal on the neck." },
      { tier: "Wine of Origin 85% Rules", rule: "Minimum 85% of stated grape variety, 85% of declared vintage year, and 100% of stated geographical boundary must be present in the bottle." }
    ]
  },

  vinification: {
    title: "Swartland Revolution Cellar Craft: Old Bush Vines, Concrete Eggs & Foudres",
    summary: "South Africa's artisanal renaissance marries ancestral dry-farmed bush vines with minimal intervention, ambient fermentations, and large neutral cooperage:",
    traditions: [
      {
        practice: "Old Bush Vine Viticulture (Droëland Wingerde)",
        details: "Dry-farmed, untrellised bush vines with deep taproots that withstand summer droughts and yield naturally balanced, low-yield berries with immense concentration."
      },
      {
        practice: "Ambient Wild Yeast & Low Intervention",
        details: "Uninoculated native fermentations with zero enzyme additions or acidification, preserving natural vineyard microflora and unadorned terroir expression."
      },
      {
        practice: "Raw Concrete Tanks & Foudres",
        details: "Aging in unlined concrete tanks, ceramic amphorae, and large neutral oak foudres, eliminating aggressive new oak flavors while encouraging gentle micro-oxygenation."
      },
      {
        practice: "Cap Classique Traditional Method",
        details: "Secondary bottle fermentation with prolonged autolysis sur lattes, creating fine mousse and brioche complexity."
      }
    ]
  },

  businessModels: {
    title: "Production Models & The South African Wine Landscape",
    models: [
      {
        type: "Historic Cape Dutch Wine Estates",
        frenchTerm: "Domaines Historiques",
        description: "Centuries-old contiguous estates founded in the 17th and 18th centuries with magnificent Cape Dutch manor houses and historic gravity-fed cellars.",
        examples: ["Klein Constantia", "Vergelegen", "Kanonkop", "Meerlust"]
      },
      {
        type: "Swartland Independent Producers & Artisans",
        frenchTerm: "Vignerons Indépendants",
        description: "Dynamic cooperative of minimal-intervention winemakers celebrating old bush vines and low-intervention cellar craft.",
        examples: ["The Sadie Family", "Mullineux & Leeu Family Wines", "A.A. Badenhorst"]
      }
    ]
  },

  aging: {
    title: "Maturation Decrees & Cellar Longevity",
    summary: "South African wine regulations mandate strict standards for traditional sparkling and fine aged reserve wines:",
    vintage: {
      title: "Estate Reserve & Wood-Aged Maturation",
      minTotalMonths: 12,
      minWoodMonths: 6,
      rule: "Fine estate red wines typically undergo 12 to 24 months of oak barrel maturation followed by extensive cellar resting prior to commercial release.",
      description: "Ensures structural integration of tannins and develops complex tertiary aromas of cigar box, leather, and dried fynbos."
    },
    nonVintage: {
      title: "Cap Classique Standard",
      minTotalMonths: 12,
      minLeesMonths: 12,
      rule: "Cap Classique sparkling wines require a minimum of 12 months aging on lees from tirage to disgorgement.",
      description: "Imparts delicate yeast autolysis brioche notes and a creamy mousse texture."
    }
  }
};

export const SOUTH_AFRICA_PRESTIGE_CUVEES = [
  {
    name: "Columella",
    producer: "The Sadie Family Wines",
    village: "Swartland",
    vintage: "Current Release",
    composition: "Syrah, Mourvèdre, Grenache, Carignan, Cinsault",
    soil: "Paardeberg decomposed granite & slate",
    aging: "12 months in neutral foudres and 12 months in concrete eggs",
    flavor: "Dark wild plums, fynbos mountain herbs, cracked black pepper, and crystalline granite tension."
  },
  {
    name: "Black Label Pinotage",
    producer: "Kanonkop Estate",
    village: "Simonsberg-Stellenbosch",
    vintage: "Current Release",
    composition: "100% Pinotage (1953 Bush Vines)",
    soil: "Decomposed granite Hutton loam",
    aging: "18 months in 100% new French oak barriques",
    flavor: "Cassis, dark plum compote, smoked cedar wood, dark roasted coffee, and aristocratic velvet tannins."
  },
  {
    name: "Vin de Constance",
    producer: "Klein Constantia",
    village: "Constantia",
    vintage: "Current Release",
    composition: "100% Muscat de Frontignan",
    soil: "Decomposed Table Mountain granite",
    aging: "36 months in 500L French oak, Hungarian oak, and acacia barrels",
    flavor: "Dried apricots, orange blossom marmalade, ginger blossom, honeycomb, and electric acidity balancing residual sugar."
  },
  {
    name: "Hamilton Russell Pinot Noir",
    producer: "Hamilton Russell Vineyards",
    village: "Hemel-en-Aarde Valley",
    vintage: "Current Release",
    composition: "100% Pinot Noir",
    soil: "Stony, clay-rich Bokkeveld shale",
    aging: "10 months in French oak barriques (approx. 25% new)",
    flavor: "Wild red cherry, damp forest floor, blood orange peel, iron mineral crunch, and seamless savory tannins."
  },
  {
    name: "Mullineux 'Schist' Roundstone Syrah",
    producer: "Mullineux & Leeu Family Wines",
    village: "Swartland",
    vintage: "Current Release",
    composition: "100% Syrah (Whole-cluster natural ferment)",
    soil: "Metamorphic black slate & schist",
    aging: "12 months in 500L French oak puncheons (zero new oak)",
    flavor: "Blackberry liqueur, cured biltong, black olives, crushed iron ore, and towering mineral drive."
  }
];

export const SOUTH_AFRICA_ICONIC_DOMAINES = [
  {
    name: "The Sadie Family Wines",
    village: "Paardeberg, Swartland",
    vigneron: "Eben Sadie",
    philosophy: "Minimal intervention, organic viticulture, resurrecting ancient ungrafted bush vine parcels with amphora and foudre aging.",
    keyCuvees: ["Columella", "Palladius", "Kokerboom", "Mev. Kirsten", "Soldaat"]
  },
  {
    name: "Kanonkop Estate",
    village: "Simonsberg-Stellenbosch",
    vigneron: "Johann Krige & Abrie Beeslaar",
    philosophy: "Traditional open-top concrete kuipe punch-downs, dry-farmed bush vines, and uncompromising long-term aging potential.",
    keyCuvees: ["Black Label Pinotage", "Paul Sauer (Bordeaux Blend)", "Estate Cabernet Sauvignon"]
  },
  {
    name: "Hamilton Russell Vineyards",
    village: "Hemel-en-Aarde Valley, Walker Bay",
    vigneron: "Anthony Hamilton Russell",
    philosophy: "Single-minded dedication to terroir-driven, cool-climate estate-grown Pinot Noir and Chardonnay on high-clay Bokkeveld shale.",
    keyCuvees: ["Estate Pinot Noir", "Estate Chardonnay"]
  },
  {
    name: "Mullineux & Leeu Family Wines",
    village: "Riebeek-Kasteel, Swartland",
    vigneron: "Chris & Andrea Mullineux",
    philosophy: "Soil-specific single-terroir bottlings (Schist, Granite, Iron) celebrating Swartland's ancient geology through natural whole-cluster vinification.",
    keyCuvees: ["Schist Syrah", "Granite Chenin Blanc", "Iron Syrah", "Straw Wine"]
  },
  {
    name: "Klein Constantia Estate",
    village: "Constantia, Cape Town",
    vigneron: "Hans Astrom & Matthew Day",
    philosophy: "Preservation of historic 18th-century biodiversity, hand-selecting individual raisined berries to craft the immortal Vin de Constance.",
    keyCuvees: ["Vin de Constance", "Metis Sauvignon Blanc", "Estate Red"]
  }
];

export const SOUTH_AFRICA_FOOD_PAIRINGS = [
  {
    category: "Braised Mountain Lamb",
    wineType: "Red",
    targetWine: "Sadie Family 'Columella' / Swartland Syrah",
    dish: "Karoo Lamb Shank Potjie with Wild Rosemary & Garlic",
    note: "Slow-braised succulent mountain lamb fat and rustic rosemary marry the savory wild fynbos herbs, cracked black pepper, and firm granite tannins of old-vine Swartland Syrah.",
    glassware: "Expansive Syrah / Bordeaux Stem (750ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 90 minutes prior to service"
  },
  {
    category: "Indigenous Game & Braai",
    wineType: "Red",
    targetWine: "Kanonkop 'Black Label' / Simonsberg Pinotage",
    dish: "Braaied Springbok Loin with Rooibos-Infused Blackberry Glaze",
    note: "The lean, earthy game profile of springbok cooked over open vine embers harmonizes with the smoky cassis, dark plum fruit, and refined structural grip of old bush vine Pinotage.",
    glassware: "Large Bordeaux Grand Cru Stem (800ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 2 hours prior to service"
  },
  {
    category: "Cape Malay Spiced Fish",
    wineType: "White",
    targetWine: "Sadie Family 'Palladius' / Swartland Old Bush Vine Chenin Blanc",
    dish: "Cape Malay Curried Kingklip with Yellow Rice & Apricot Chutney",
    note: "Aromatic turmeric, coriander, and sweet-tart apricot chutney harmonize seamlessly with the ripe quince, honeyed beeswax, and crystalline mineral acidity of old-vine Chenin Blanc.",
    glassware: "Burgundian / Full White Wine Stem (600ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Decant 30 minutes in carafe"
  },
  {
    category: "Fresh Atlantic Shellfish",
    wineType: "White",
    targetWine: "Hamilton Russell Vineyards Chardonnay",
    dish: "Grilled Cape Rock Lobster (Crayfish) with Lemon-Herb Garlic Butter",
    note: "Sweet, succulent Atlantic crayfish meat matched against melted garlic butter is sliced cleanly by the crystalline maritime acidity and stony Bokkeveld shale minerality of Walker Bay Chardonnay.",
    glassware: "Generous Burgundy White Wine Stem (650ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Serve directly or brief 15-minute aeration"
  },
  {
    category: "Luxury Charcuterie & Pâté",
    wineType: "White",
    targetWine: "Klein Constantia 'Vin de Constance'",
    dish: "Torchon of Foie Gras with Spiced Poached Quince & Brioche",
    note: "The luxurious, unctuous fat of artisan duck liver is elevated by the concentrated dried apricot, Seville orange marmalade, and electric natural acidity of legendary Vin de Constance.",
    glassware: "Sauternes / White Wine Tasting Glass (350ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Serve chilled; gentle opening in glass"
  },
  {
    category: "Raw Bivalves & Sparkling",
    wineType: "Sparkling",
    targetWine: "Simonsig 'Kaapse Vonkel' Cap Classique Brut",
    dish: "Fresh Saldanha Bay Oysters with Mignonette & Fresh Lime",
    note: "Saline, plump Atlantic oysters resonate with the chalky lees maturity, crisp green apple crunch, and persistent fine bead of benchmark bottle-fermented Méthode Cap Classique.",
    glassware: "Tulip Champagne / White Wine Stem (450ml)",
    servingTemp: "6–8°C (43–46°F)",
    decanting: "Serve immediately upon bottle sabrage or uncorking"
  }
];

export const SOUTH_AFRICA_DATA = {
  id: 'south-africa',
  name: "South Africa (Western Cape)",
  country: "South Africa",
  countryCode: "ZA",
  aliases: [
    'south africa', 'western cape', 'stellenbosch', 'swartland',
    'walker bay', 'hemel-en-aarde', 'constantia', 'franschhoek',
    'simonsberg', 'paarl', 'elgin', 'cape of good hope'
  ],
  tagline: "Ancient Granites, Benguela Ocean Winds & Old Bush Vine Artisans",
  summary: "South Africa's Western Cape fine wine epicenters marry some of the planet's oldest decomposed granitic and shale terroirs with cooling Antarctic marine currents, yielding world-benchmark Chenin Blanc, ageworthy Cabernet Sauvignon, electric cool-climate Pinot Noir, and the celebrated Old Vine Project bush vine renaissance.",
  
  center: [-33.9300, 18.8600],
  zoom: 9,
  bounds: [
    [-34.6000, 18.1000],
    [-33.0000, 19.6000]
  ],

  heroGradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #d4af37 100%)",
  accentColor: "#2d6a4f",

  terroir: {
    climate: "Diverse Mediterranean maritime climate moderated by the freezing Antarctic Benguela Current and the famous 'Cape Doctor' southeasterly wind, creating huge diurnal swings and pristine vine health without chemical dependence.",
    soil: "Some of the world's most ancient geology dating back 600+ million years: Pre-Cambrian decomposed Cape Granites, Bokkeveld marine shales, Table Mountain Sandstone, and iron-bearing Koffieklip.",
    elevation: "50m to 850m above sea level along dramatic folded mountain ranges.",
    riverInfluence: "Key rivers including the Berg, Eerste, Breede, and Onrus provide alluvial drainage, valley air drainage channels, and vital irrigation resources across the Western Cape.",
    oceanInfluence: "Pivotal influence from both the cold Atlantic Ocean (Benguela Current) and the warmer Indian Ocean (False Bay), generating persistent morning mists and afternoon marine gales."
  },

  grapes: [
    { name: "Chenin Blanc (Steen)", percentage: 35, type: "White", role: "The jewel of South African viticulture; century-old dry-farmed bush vines yielding dry whites of crystalline acidity and honeyed quince depth." },
    { name: "Cabernet Sauvignon", percentage: 20, type: "Red", role: "Stellenbosch's aristocratic benchmark; structured, cedar-scented, and built for multi-decade cellar evolution." },
    { name: "Syrah", percentage: 15, type: "Red", role: "Swartland and Stellenbosch powerhouse; savory, olive-tapenade, and wild fynbos-inflected." },
    { name: "Pinotage", percentage: 15, type: "Red", role: "South Africa's indigenous crossing of Pinot Noir × Cinsault (1925), crafting concentrated, smoky, and blackberry-rich expressions." },
    { name: "Chardonnay", percentage: 8, type: "White", role: "Hemel-en-Aarde and cool coastal sites producing chiseled, mineral-driven Burgundian-level whites." },
    { name: "Sauvignon Blanc", percentage: 7, type: "White", role: "Coastal and high-elevation maritime vineyards producing pungent, passionfruit and flint-scented crisp whites." }
  ],

  structure: {
    body: 8.5,
    acidity: 8.5,
    tannin: 8.0,
    sweetness: 1.5,
    alcohol: 14.0,
    agingPotential: "10–30+ Years for Benchmark Chenin, Pinotage & Cabernet"
  },

  classification: {
    system: "Wine of Origin (WO) Scheme (1973) & Old Vine Project (OVP)",
    description: "South Africa's statutory Wine of Origin system delimits terroir from broad Geographical Units down to single registered vineyard parcels under 6 hectares. The innovative Old Vine Project certifies heritage vineyards aged 35 years or older with official provenance seals.",
    tiers: [
      {
        name: "Single Vineyard Wine",
        desc: "Certified single registered parcel under 6ha; 100% of grapes from that specific plot."
      },
      {
        name: "Ward",
        desc: "Specific, geographically distinct terroir delimitation (e.g. Simonsberg-Stellenbosch, Hemel-en-Aarde Valley, Constantia)."
      },
      {
        name: "District",
        desc: "Major viticultural district sharing common topography and climate (e.g. Stellenbosch, Swartland, Walker Bay)."
      },
      {
        name: "Certified Heritage Vineyard (OVP)",
        desc: "Special statutory seal certifying vines aged at least 35 years, protecting historic bush vine treasures."
      }
    ]
  },

  flavorProfile: {
    primary: ['Wild Fynbos Scrub & Mountain Thyme', 'Ripe Yellow Peach & Golden Quince', 'Dark Blackberry & Damson Plum', 'Smoked Rooibos & Dried Biltong', 'Crushed Granite & Quartz Minerality'],
    secondary: ['Roasted Coffee Bean & Dark Cocoa', 'Toasted Macadamia & Honeycomb', 'Cedar Wood & Cigar Box', 'Graphite & Black Olive Tapenade', 'Subtle Redcurrant & Dried Cranberry'],
    palate: "Electric dynamic tension marrying old-world mineral austerity with new-world solar phenolic ripeness, driven by vibrant natural malic-tartaric acidity and savory fynbos herbs."
  },

  foodPairings: SOUTH_AFRICA_FOOD_PAIRINGS,
  subRegions: SOUTH_AFRICA_SUBREGIONS,
  grandCrus: SOUTH_AFRICA_GRAND_CRUS,
  crus: SOUTH_AFRICA_GRAND_CRUS,
  technicalRegulations: SOUTH_AFRICA_TECHNICAL_REGULATIONS,
  prestigeCuvees: SOUTH_AFRICA_PRESTIGE_CUVEES,
  prestigeMonopoles: SOUTH_AFRICA_PRESTIGE_CUVEES,
  iconicDomaines: SOUTH_AFRICA_ICONIC_DOMAINES,
  iconicGrowers: SOUTH_AFRICA_ICONIC_DOMAINES,
  sommelierTip: "Serve Western Cape Old Bush Vine Chenin Blanc and Hemel-en-Aarde Chardonnay at 10–12°C (50–54°F) in Burgundian stems. Decant full-throttle Swartland Syrah and Simonsberg Cabernet Sauvignon for 1–2 hours and serve at 16–18°C (60–64°F) in large Bordeaux stems to unlock indigenous wild fynbos herbs and complex mineral tension."
};
