/**
 * ============================================================================
 * PORTUGAL SOMMELIER DATASET (CMS LEVEL 3 / MASTER SOMMELIER STANDARD)
 * ============================================================================
 * 
 * Authoritative Portuguese fine wine catalog:
 *   - 5 Key Viticultural Regions & DOCs:
 *     (Douro Valley, Dão, Alentejo, Vinho Verde / Monção e Melgaço, Bairrada)
 *   - Geological Pedology:
 *     (Pre-Cambrian Metamorphic Schist [Xisto], Decomposed Hercynian Granite,
 *      Jurassic Calcareous Clay-Limestone, Coastal Sand Dunes)
 *   - Ampelography & Viticulture:
 *     (Touriga Nacional, Touriga Franca, Tinta Roriz / Aragonez, Baga, Alvarinho,
 *      Encruzado; Ancient Field Blends & Pre-Phylloxera Ungrafted Bush Vines)
 *   - Classification Frameworks:
 *     (DOC / DOP, Vinho Regional / IGP, Douro Benefício System [A to F],
 *      Garrafeira Aging Decrees, Colheita & Vintage Port Classifications)
 *   - Benchmark Prestige Cuvées & Iconic Domaines
 *   - Authentic Regional Food Pairings & Sommelier Service Directives
 * ============================================================================
 */

export const PORTUGAL_SUBREGIONS = [
  {
    id: 'douro',
    name: "Douro Valley (DOC)",
    district: "Norte (Douro River)",
    lat: 41.1600,
    lng: -7.5300,
    terroir: "The world's oldest demarcated and regulated wine region (founded in 1756 by the Marquês de Pombal). A UNESCO World Heritage landscape carved by the Douro River into vertical metamorphic schist canyons. Extreme continental climate with scorching summers and bitter winters, shielded from Atlantic rains by the Serra do Marão mountains.",
    focus: "Immortal Vintage Ports, single-quinta tawny masterworks, and monumental, cellar-worthy dry Douro reds (Barca-Velha).",
    geology: "Vertical pre-Cambrian crystalline metamorphic schist (xisto) fracturing along vertical planes, allowing vine roots to plunge up to 20 meters deep in search of subterranean moisture.",
    dominantGrapes: "Touriga Nacional (35%), Touriga Franca (30%), Tinta Roriz (15%), Tinta Barroca (10%), Tinto Cão (10%)",
    microTerroirs: [
      { name: "Cima Corgo", focus: "The historical heartland centered around Pinhão; steep terraced schist amphitheaters producing the greatest benchmark Vintage Ports and balanced dry reds." },
      { name: "Douro Superior", focus: "The wild, arid eastern frontier bordering Spain; scorching heat and flat alluvial/schist benches yielding monumental dry red icons (Barca-Velha, Quinta do Vale Meão)." },
      { name: "Baixo Corgo", focus: "The westernmost, cooler and wettest sector producing fresh, early-drinking ruby ports and lively dry table wines." }
    ],
    description: "The crown jewel of Portuguese viticulture. Monumental hand-built schist stone terraces rising vertically above the Douro River forge wines of timeless architectural majesty and power."
  },
  {
    id: 'dao',
    name: "Dão (DOC)",
    district: "Centro (Serra da Estrela Plateau)",
    lat: 40.5500,
    lng: -7.7500,
    terroir: "Often called 'The Burgundy of Portugal'. A high elevated granite plateau (400m–700m elevation) completely encircled and sheltered by high mountain ranges (Serra da Estrela, Caramulo, and Buçaco). Mediterranean sunshine is balanced by cool alpine nights, producing reds of noble restraint, floral perfume, and towering natural acidity.",
    focus: "Aristocratic, floral Touriga Nacional, savory Jaen and Alfrocheiro reds, and electric, mineral-soaked Encruzado whites.",
    geology: "Deep, coarse decomposed Hercynian granite sands (saibro) with quartz and occasional clay-shale pockets, poor in organic matter.",
    dominantGrapes: "Touriga Nacional (40%), Alfrocheiro (20%), Jaen / Mencia (20%), Encruzado (15%), Bical (5%)",
    microTerroirs: [
      { name: "Serra da Estrela Slopes", focus: "The highest granite foothills producing crystalline, high-acid Touriga Nacional and ethereal Encruzado." },
      { name: "Silgueiros", focus: "Warm central granite bowl yielding concentrated, fleshy, and perfumed classical Dão reds." }
    ],
    description: "Portugal's most aristocratic terroir. Cool granite plateaus sheltered by granite mountain walls yield reds of exceptional elegance, perfumed violets, and white Encruzado of Grand Cru mineral pedigree."
  },
  {
    id: 'alentejo',
    name: "Alentejo (DOC)",
    district: "Southern Plains & Portalegre Mountains",
    lat: 38.6000,
    lng: -7.6500,
    terroir: "A vast, sun-drenched landscape of rolling wheat plains, ancient cork oak forests (montado), and olive groves covering nearly a third of Portugal. Scorching continental summers tempered in the north by the dramatic Serra de São Mamede mountains (reaching 1,000m), preserving freshness and vitality.",
    focus: "Opulent, plush, dark-fruited red blends, ancient Roman-style clay amphora wines (Vinho de Talha DOC), and high-altitude field blends.",
    geology: "Heterogeneous tapestry of crystalline schists, marble bedrock around Estremoz, granite uplands in Portalegre, and clay-limestone plains.",
    dominantGrapes: "Aragonez / Tempranillo (35%), Trincadeira (25%), Alicante Bouschet (25%), Antão Vaz (15%)",
    microTerroirs: [
      { name: "Portalegre", focus: "Cool, rainy, high-altitude northern granite and schist mountain slopes home to centenarian field blend bush vines." },
      { name: "Borba & Estremoz", focus: "Rich marble and limestone soils producing aristocratic, structured, and age-worthy red blends." }
    ],
    description: "The soul of southern Portugal. Golden sun-baked landscapes and high mountain enclaves craft opulent red wines and ancient clay-amphora Talha traditions dating back two millennia."
  },
  {
    id: 'vinho-verde',
    name: "Vinho Verde (Monção & Melgaço)",
    district: "Minho (Atlantic Northwest)",
    lat: 42.0800,
    lng: -8.4500,
    terroir: "Lush, verdant northwestern Atlantic Portugal along the Spanish border. High rainfall (over 1,500mm), ocean breezes, and deep granite river valleys. While southern sectors produce effervescent light wines, the northern sub-region of Monção e Melgaço is sheltered from rain by coastal mountains, creating microclimates of pure mineral grandeur.",
    focus: "World-benchmark 100% Alvarinho: bone-dry, concentrated, textured, and deeply mineral with incredible cellar potential.",
    geology: "Decomposed Hercynian granite sands (saibro) mixed with quartz and alluvial river pebbles along the southern bank of the Minho River.",
    dominantGrapes: "Alvarinho (90%), Loureiro (5%), Trajadura (5%)",
    microTerroirs: [
      { name: "Monção e Melgaço", focus: "The historic cradle of Alvarinho; south-facing granite river terraces sheltered from heavy Atlantic storms." },
      { name: "Lima Valley", focus: "Coastal granite terraces producing highly aromatic, citrusy, and floral Loureiro whites." }
    ],
    description: "Portugal's green Atlantic sanctuary. Ancient granite amphitheaters along the Minho River craft dry Alvarinhos of piercing saline minerality, white peach purity, and decades of cellaring power."
  },
  {
    id: 'bairrada',
    name: "Bairrada (DOC)",
    district: "Beira Litoral (Atlantic Coast)",
    lat: 40.3800,
    lng: -8.5200,
    terroir: "A coastal Atlantic wine region situated between the Serra do Buçaco mountains and the Atlantic Ocean. Dominated by maritime ocean winds, high humidity, and morning sea fogs that moderate summer heat and prolong grape maturation.",
    focus: "Heroic, high-tannin, high-acid Baga reds from ancient bush vines, alongside benchmark traditional-method bottle-fermented sparkling wines.",
    geology: "Jurassic chalky clay-limestone marls (barro) alternating with coastal silica sand dunes (areias).",
    dominantGrapes: "Baga (70%), Bical (15%), Maria Gomes / Fernão Pires (10%), Cercial (5%)",
    microTerroirs: [
      { name: "Clay-Limestone Hills (Barro)", focus: "Heavy chalky clay slopes producing monumental, tannic, ageworthy Baga that requires decades of cellar maturation (Luis Pato)." },
      { name: "Sandy Plains (Areias)", focus: "Coastal sand dunes hosting pre-phylloxera ungrafted bush vines producing perfumed, earlier-drinking reds." }
    ],
    description: "The home of the legendary Baga grape. Cool Atlantic breezes and chalky clay soils craft one of Europe's most uncompromising, structured, and long-lived noble red varieties."
  }
];

export const PORTUGAL_GRAND_CRUS = [
  {
    id: 'barca-velha',
    name: "Barca-Velha (Casa Ferreirinha)",
    subregionId: 'douro',
    lat: 41.1000,
    lng: -7.1000,
    soil: "Steep vertical xisto schist terraces at Quinta da Leda (Douro Superior)",
    dominantGrape: "Touriga Nacional & Touriga Franca",
    benchmarkProducers: ["Casa Ferreirinha / Sogrape (Luís Sottomayor)"]
  },
  {
    id: 'quinta-do-noval-nacional',
    name: "Quinta do Noval 'Nacional' Vintage Port",
    subregionId: 'douro',
    lat: 41.1800,
    lng: -7.5600,
    soil: "Steep stone-walled schist terraces with ungrafted pre-phylloxera bush vines",
    dominantGrape: "Touriga Nacional & Field Blend",
    benchmarkProducers: ["Quinta do Noval (Christian Seely)"]
  },
  {
    id: 'quinta-do-vale-meao',
    name: "Quinta do Vale Meão",
    subregionId: 'douro',
    lat: 41.0500,
    lng: -7.0800,
    soil: "Unique geological fold of schist, granite, and river gravels in Douro Superior",
    dominantGrape: "Touriga Nacional (60%) & Touriga Franca (35%)",
    benchmarkProducers: ["Quinta do Vale Meão (Francisco Olazabal)"]
  },
  {
    id: 'luis-pato-pe-franco',
    name: "Luis Pato 'Pé Franco' Quinta do Ribeirinho",
    subregionId: 'bairrada',
    lat: 40.3900,
    lng: -8.5000,
    soil: "Pure coastal silica sandy soils preventing phylloxera, allowing ungrafted vines",
    dominantGrape: "Baga (100% Ungrafted Bush Vines)",
    benchmarkProducers: ["Luis Pato"]
  },
  {
    id: 'anselmo-mendes-parreiras',
    name: "Anselmo Mendes 'Parreiras Velhas' Alvarinho",
    subregionId: 'vinho-verde',
    lat: 42.0800,
    lng: -8.2700,
    soil: "Deep decomposed Hercynian granite sands on Monção river terraces",
    dominantGrape: "Alvarinho (100% Fermented in Old French Oak)",
    benchmarkProducers: ["Anselmo Mendes"]
  }
];

export const PORTUGAL_TECHNICAL_REGULATIONS = {
  geology: {
    title: "Hercynian Metamorphic Schist (Xisto) & Granite Terroirs",
    summary: "Portugal's viticultural landscape is founded upon ancient Iberian Massif crystalline metamorphic schists in the Douro, Hercynian granite batholiths in Dão and Minho, and Jurassic marine clay-limestone in Bairrada.",
    formations: [
      {
        id: 'douro-schist',
        name: "Pre-Cambrian Crystalline Metamorphic Schist (Xisto)",
        period: "Pre-Cambrian to Cambrian (~600–500 Ma)",
        fossil: "None (High-pressure crystalline metamorphic slate)",
        characteristics: "Vertical, fissile metamorphic slate and schist strata fractured vertically, allowing vine roots to burrow 10–20 meters deep for moisture during scorching Mediterranean summers.",
        keyAreas: ["Douro Valley (Cima Corgo & Douro Superior)", "Portalegre (Northern Alentejo)"],
        wineImpact: "Concentrates intense black fruit, balsamic nuances, slatey minerality, and profound structural longevity in benchmark dry Douro reds and Vintage Ports."
      },
      {
        id: 'hercynian-granite',
        name: "Hercynian Granite Batholiths & Saibro Sands",
        period: "Late Carboniferous to Permian (~320–280 Ma)",
        fossil: "None (Plutonic crystalline igneous rock)",
        characteristics: "Coarse-grained intrusive plutonic granite decomposing into acidic, quartz-rich sandy grus ('saibro') with low organic matter and excellent drainage.",
        keyAreas: ["Dão high plateau", "Vinho Verde (Monção e Melgaço)", "Beira Interior"],
        wineImpact: "Delivers laser-like natural acidity, crystalline citrus, white flower aromatics, and refined, silky, fine-grained tannins."
      },
      {
        id: 'bairrada-barro',
        name: "Jurassic Marine Clay-Limestone (Barro)",
        period: "Middle to Late Jurassic (~160–140 Ma)",
        fossil: "Marine ammonites, belemnites & bivalves",
        characteristics: "Dense, calcareous clays ('barro') interbedded with fossiliferous limestone marls, providing high water retention and calcium-rich alkaline soils.",
        keyAreas: ["Bairrada AOC", "Lisboa (Colares, Bucelas)"],
        wineImpact: "Provides powerful structured tannins, blood orange, plum, and incredible 30+ year longevity to 100% Baga wines."
      },
      {
        id: 'alentejo-marble',
        name: "Paleozoic Metamorphic Marble & Red Calcareous Soils",
        period: "Paleozoic Era (~400–300 Ma)",
        fossil: "Metamorphosed ancient coral reefs",
        characteristics: "Crystalline limestone and metamorphic marble beds weathering into alkaline, mineral-rich red clays over hard rock basements.",
        keyAreas: ["Alentejo (Estremoz, Borba, Vila Viçosa)"],
        wineImpact: "Imparts plush, velvety dark fruit, Mediterranean garrigue herbs, and supple rounded tannins with generous mouthfeel."
      }
    ]
  },

  climatology: {
    system: "Atlantic Maritime to Continental Mediterranean Climates",
    description: "Portugal transitions rapidly from hyper-humid Atlantic conditions in the northwest (Vinho Verde) through rain-shadowed continental heat in the Douro, to dry Mediterranean baking sun in Alentejo.",
    winds: [
      {
        name: "Atlantic Maritime Westerlies",
        effect: "Brings humid ocean mists and rainfall up to 1,500mm in Minho and Bairrada, buffering against extreme heat spikes and fostering crisp natural acidity."
      },
      {
        name: "Marão Mountain Rain Shadow",
        effect: "The Serra do Marão mountain range blocks Atlantic moisture from penetrating the Douro Valley, creating scorching continental summers exceeding 42°C (108°F)."
      }
    ]
  },

  grapes: {
    title: "Portuguese Ampelography: Touriga Nacional, Baga, Alvarinho & Indigenous Cépages",
    description: "Portugal possesses over 250 indigenous grape varieties, forming one of the most unique and genetically preserved ampelographic treasures in world viticulture:",
    major: [
      {
        id: 'touriga-nacional',
        name: "Touriga Nacional",
        percentage: 22.0,
        type: "Red",
        epicenter: "Douro & Dão",
        profile: "Noble flagship variety. Tiny thick-skinned berries producing opaque violet-black wine with bergamot, earl grey tea, violet florals, dark blackberry, rockrose (esteva), and muscular, aristocratic tannins.",
        role: "The soul of benchmark dry Douro reds and Vintage Ports.",
        benchmarkCuvees: ["Barca-Velha", "Quinta do Noval Nacional", "Quinta do Vale Meão"]
      },
      {
        id: 'touriga-franca',
        name: "Touriga Franca",
        percentage: 20.0,
        type: "Red",
        epicenter: "Douro Valley (warm mid-slopes)",
        profile: "Floral elegance, wild rose petals, pomegranate, black cherry, and velvety textured tannins.",
        role: "Workhorse noble blending variety supplying aromatics and seamless balance to Douro assemblages.",
        benchmarkCuvees: ["Chryseia", "Pintas", "Quinta do Crasto Reserva"]
      },
      {
        id: 'tinta-roriz',
        name: "Tinta Roriz (Aragonez / Tempranillo)",
        percentage: 16.0,
        type: "Red",
        epicenter: "Douro, Dão & Alentejo",
        profile: "The Portuguese Tempranillo. Ripe plum, leather, sweet tobacco, dried fig, and fine-grained structural tannins.",
        role: "Essential component providing aromatic complexity and mid-palate weight."
      },
      {
        id: 'baga',
        name: "Baga",
        percentage: 8.0,
        type: "Red",
        epicenter: "Bairrada",
        profile: "Late-ripening, high-acid red grape with sour cherry, damson plum, dried pine needles, black olive, and profound Nebbiolo-like aging power.",
        role: "Bairrada's legendary single-varietal icon, yielding immortal cellar wines.",
        benchmarkCuvees: ["Luis Pato Quinta do Ribeirinho Pé Franco", "Filipa Pato Post-Quercus Baga"]
      },
      {
        id: 'alvarinho',
        name: "Alvarinho (Albariño)",
        percentage: 7.0,
        type: "White",
        epicenter: "Vinho Verde (Monção e Melgaço sub-region)",
        profile: "Peach skin, orange blossom, green apple, crushed granite, and mouthwatering mineral salinity with vibrant natural acidity.",
        role: "Portugal's premier fine dry white grape.",
        benchmarkCuvees: ["Anselmo Mendes Contacto", "Soalheiro Primeiras Vinhas"]
      },
      {
        id: 'encruzado',
        name: "Encruzado",
        percentage: 5.0,
        type: "White",
        epicenter: "Dão high granite slopes",
        profile: "Burgundian weight, lemon zest, white pear, toasted hazelnut, wet stone, and superb 15+ year cellaring potential.",
        role: "Dão's premier noble white variety.",
        benchmarkCuvees: ["Quinta dos Carvalhais Encruzado", "Ribeiro Santo Encruzado"]
      }
    ],
    heritage: [
      {
        id: 'tinta-barroca',
        name: "Tinta Barroca",
        percentage: 4.0,
        type: "Red",
        epicenter: "Douro Valley",
        profile: "Plush sweet fruit, baked cherry, chocolate, and soft round tannins, adding generosity to Port blends.",
        role: "Traditional Port blending grape favored on cooler north-facing Douro slopes."
      },
      {
        id: 'tinto-cao',
        name: "Tinto Cão",
        percentage: 2.0,
        type: "Red",
        epicenter: "Douro Valley",
        profile: "Ancient late-ripening variety with high acidity, floral spice, and stubborn longevity.",
        role: "Provides acidity and finesse to long-aged Tawny and Vintage Ports."
      },
      {
        id: 'arinto',
        name: "Arinto (Pedernã)",
        percentage: 3.0,
        type: "White",
        epicenter: "Bucelas & Alentejo",
        profile: "The 'Riesling of Portugal', celebrated for preserving razor-sharp natural acidity in hot Mediterranean climates.",
        role: "Essential blending and single-varietal white grape."
      }
    ]
  },

  classification: {
    system: "Denominação de Origem Controlada (DOC) & Douro Benefício System",
    description: "Portugal created the world's first officially demarcated wine region (the Douro in 1756 by the Marquês de Pombal). Modern wine law is governed by the Instituto da Vinha e do Vinho (IVV).",
    pyramid: [
      {
        tier: "DOC (Denominação de Origem Controlada)",
        sharePct: "28.0%",
        aocCount: "31 Official DOCs",
        description: "Top statutory appellation tier strictly regulating geographical boundaries, authorized grape varieties, maximum yields, minimum alcohol, and aging decrees."
      },
      {
        tier: "Vinho Regional / IGP (Indicação Geográfica Protegida)",
        sharePct: "52.0%",
        aocCount: "14 Regional IGPs",
        description: "Flexible regional denominations (e.g. Alentejano, Duriense, Beira Atlântico) allowing international varieties and creative assemblage styles."
      },
      {
        tier: "Vinho (Table Wine)",
        sharePct: "20.0%",
        aocCount: "National Classification",
        description: "Entry-level wine classification without geographical boundary mandates."
      }
    ],
    agingRules: [
      { tier: "Garrafeira Red Decree", rule: "Must undergo a minimum of 30 months total aging, with at least 12 months in glass bottles following wooden cask aging, and achieve superior natural ABV." },
      { tier: "Garrafeira White / Rosé Decree", rule: "Must undergo a minimum of 12 months total aging, with at least 6 months resting in glass bottles prior to commercial release." },
      { tier: "Reserva DOC Decree", rule: "Must achieve minimum natural alcohol at least 0.5% ABV above the statutory DOC baseline and pass strict blind panel analysis by the regional commission." },
      { tier: "Vintage Port Bottling Window", rule: "Must be bottled between July 1 of the second year and December 31 of the third year following the declared harvest, following IVDP certification." }
    ]
  },

  vinification: {
    title: "Traditional Portuguese Cellar Craft: Granite Lagares & Amphorae (Talhas)",
    summary: "Portugal preserves some of the world's most historic artisanal vinification techniques alongside modern precision temperature control:",
    traditions: [
      {
        practice: "Foot Treading in Granite Lagares (Pisa a Pé)",
        details: "Hand-picked grape clusters are trodden by human foot in shallow open granite stone troughs (lagares). The human sole gently extracts deep color, anthocyanins, and skins without crushing bitter grape seeds."
      },
      {
        practice: "Vinho de Talha (Clay Amphora Fermentation)",
        details: "Centuries-old Roman winemaking tradition in Alentejo. Grape must ferments in giant porous clay vessels (talhas) coated inside with resin and beeswax, maturing on skins until Saint Martin's Day."
      },
      {
        practice: "Pipe (Pipa) Maturation in Vila Nova de Gaia",
        details: "Port wines age in traditional 550L–600L oak pipes in the cool maritime lodges of Vila Nova de Gaia, where ocean humidity minimizes evaporative losses over decades."
      }
    ]
  },

  businessModels: {
    title: "Production Models & Commercial Landscape",
    models: [
      {
        type: "Historic Douro Shippers & Dynastic Lodges",
        frenchTerm: "Maisons de Porto",
        description: "British and Portuguese merchant houses established in the 17th and 18th centuries controlling historic aging lodges in Vila Nova de Gaia.",
        examples: ["Symington Family Estates", "The Fladgate Partnership", "Ferreira", "Ramos Pinto"]
      },
      {
        type: "Quinta Single-Estate Producers",
        frenchTerm: "Quintas Indépendantes",
        description: "Estate-grown viticultural movement sparked in the 1990s focusing on unfortified dry terroir-driven DOC table wines.",
        examples: ["Quinta do Vale Meão", "Niepoort", "Quinta do Crasto", "Wine & Soul"]
      }
    ]
  },

  aging: {
    title: "Maturation Decrees & Cellar Longevity",
    summary: "Portuguese wine law enforces some of the world's most rigorous bottle-aging mandates (Garrafeira):",
    vintage: {
      title: "Garrafeira & Vintage Maturation Decrees",
      minTotalMonths: 30,
      minWoodMonths: 18,
      rule: "Garrafeira red wines require a mandatory minimum of 30 months total maturation, including at least 12 months in glass bottles after wooden cask aging.",
      description: "Guarantees complete integration of tannins, giving silky texture, balsamic complexity, and decades of cellaring power."
    },
    nonVintage: {
      title: "Colheita & Aged Tawny Port (10, 20, 30, 40+ Years)",
      minTotalMonths: 84,
      minWoodMonths: 84,
      rule: "Colheita Ports require a minimum of 7 years maturation in wooden pipas before bottling; age-indicated Tawnies represent master assemblages averaging 10, 20, 30, or 40+ years in cask.",
      description: "Develops oxidative golden-amber hues and tertiary flavors of dried fig, toasted walnut, toffee, and orange peel."
    }
  }
};

export const PORTUGAL_PRESTIGE_CUVEES = [
  {
    name: "Barca-Velha",
    producer: "Casa Ferreirinha",
    village: "Douro Superior",
    vintage: "Current Release",
    composition: "Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão",
    soil: "Steep vertical metamorphic schist (xisto)",
    aging: "16 months in French oak barriques followed by 8–10 years in bottle prior to release",
    flavor: "Blackberry liqueur, dried fig, balsamic cedar, cigar box, violet florals, and immortal aristocratic structure."
  },
  {
    name: "Nacional Vintage Port",
    producer: "Quinta do Noval",
    village: "Pinhão, Cima Corgo",
    vintage: "Current Release",
    composition: "Ungrafted pre-phylloxera field blend dominated by Touriga Nacional",
    soil: "Steep hand-walled metamorphic schist terraces",
    aging: "2 years in neutral wooden casks prior to bottling unfined and unfiltered",
    flavor: "Cassis, dark chocolate, crushed violets, roasted espresso, molten graphite, and monumental life expectancy."
  },
  {
    name: "Quinta do Vale Meão",
    producer: "Quinta do Vale Meão",
    village: "Vila Nova de Foz Côa, Douro Superior",
    vintage: "Current Release",
    composition: "Touriga Nacional (55%), Touriga Franca (35%), Tinta Roriz, Tinta Barroca",
    soil: "Unique confluence of schist, granite, and river stones",
    aging: "16–18 months in French oak barriques (approx. 80% new)",
    flavor: "Dark blueberries, mountain rockrose (esteva), smoked meats, crushed gravel, and velvet tannins."
  },
  {
    name: "Pé Franco Quinta do Ribeirinho",
    producer: "Luis Pato",
    village: "Ois do Bairro, Bairrada",
    vintage: "Current Release",
    composition: "100% Baga (Ungrafted pre-phylloxera bush vines on sand)",
    soil: "Pure silica sand dunes over deep limestone",
    aging: "24 months in French oak barriques (all new)",
    flavor: "Dried damson plum, sour Morello cherry, wet tobacco, pine needles, and razor-sharp noble tannins."
  },
  {
    name: "Parreiras Velhas Alvarinho",
    producer: "Anselmo Mendes",
    village: "Monção e Melgaço, Vinho Verde",
    vintage: "Current Release",
    composition: "100% Alvarinho (Centenary pergola bush vines)",
    soil: "Deep decomposed Hercynian granite sands",
    aging: "Fermented and aged 9 months in seasoned 400L French oak with batonnage",
    flavor: "White peach, lemon curd, crushed sea granite, flint smoke, and vibrating saline persistence."
  }
];

export const PORTUGAL_ICONIC_DOMAINES = [
  {
    name: "Casa Ferreirinha / Sogrape",
    village: "Vila Nova de Gaia & Douro Superior",
    vigneron: "Luís Sottomayor",
    philosophy: "Founded in 1952 by Fernando Nicolau de Almeida, crafting Portugal's most revered dry red wine icon (Barca-Velha).",
    keyCuvees: ["Barca-Velha", "Reserva Especial", "Quinta da Leda", "Callabriga"]
  },
  {
    name: "Quinta do Noval",
    village: "Pinhão, Cima Corgo",
    vigneron: "Christian Seely",
    philosophy: "Historic Douro estate famous for its ungrafted 'Nacional' parcel and revolutionary Single Quinta Vintage Port declarations.",
    keyCuvees: ["Quinta do Noval Nacional", "Quinta do Noval Vintage Port", "Cedro do Noval", "Noval Black"]
  },
  {
    name: "Quinta do Vale Meão",
    village: "Vila Nova de Foz Côa, Douro Superior",
    vigneron: "Francisco Olazabal & Xito Olazabal",
    philosophy: "Built by Dona Antónia Adelaide Ferreira in 1877; traditional granite lagar foot-treading combined with modern precision.",
    keyCuvees: ["Quinta do Vale Meão", "Meandro do Vale Meão", "Monte Meão Touriga Nacional"]
  },
  {
    name: "Niepoort Vinhos",
    village: "Cima Corgo, Douro",
    vigneron: "Dirk van der Niepoort",
    philosophy: "Iconoclastic pioneer of fresh, low-extraction, high-acid terroir wines from ancient field blends and traditional Ports.",
    keyCuvees: ["Batuta", "Charme", "Redoma Branco", "Bioma Vintage Port", "Robustus"]
  },
  {
    name: "Anselmo Mendes",
    village: "Melgaço, Vinho Verde",
    vigneron: "Anselmo Mendes",
    philosophy: "The undisputed 'Master of Alvarinho', exploring skin contact, barrel fermentation, and whole-bunch vinification on granite soils.",
    keyCuvees: ["Parreiras Velhas", "Curtimenta Alvarinho", "Contacto Alvarinho", "Expressões"]
  }
];

export const PORTUGAL_FOOD_PAIRINGS = [
  {
    category: "Wood-Fired Mountain Roast",
    wineType: "Red",
    targetWine: "Barca-Velha / Douro Superior Reserva Red",
    dish: "Cabrito Assado no Forno a Lenha (Wood-Fired Roast Kid with Roasted Potatoes)",
    note: "Slow-roasted milk-fed mountain kid with crisp garlic skin pairs gloriously with the aristocratic, mature, cedar-balsamic complexity, ripe dark plums, and melted schist tannins of Barca-Velha.",
    glassware: "Large Bordeaux Grand Cru Stem (800ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 2 hours prior to service"
  },
  {
    category: "Crisp Suckling Pig & Pork",
    wineType: "Red",
    targetWine: "Luis Pato 'Pé Franco' / Bairrada Baga",
    dish: "Leitão Assado da Bairrada (Crispy-Skinned Roast Suckling Pig with Pepper Paste)",
    note: "The crackling, gelatinous, pepper-infused pork fat of authentic Bairrada suckling pig is sliced cleanly by the searing natural acidity and formidable chalky tannins of old-vine Baga.",
    glassware: "Generous Burgundy / Nebbiolo Stem (750ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1 hour prior to service"
  },
  {
    category: "Baked Game Rice & Poultry",
    wineType: "Red",
    targetWine: "Quinta dos Roques / Dão Touriga Nacional Reserva",
    dish: "Arroz de Pato à Antiga (Traditional Duck Rice with Smoky Chouriço & Orange Zest)",
    note: "Rich shredded duck baked in duck broth with smoky smoked chouriço mirrors the wild bergamot, dark forest fruits, and savory granite minerality of high-altitude Dão Touriga Nacional.",
    glassware: "Expansive Red Wine Stem (650ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 45 minutes prior to service"
  },
  {
    category: "Roasted Atlantic Seafood",
    wineType: "White",
    targetWine: "Anselmo Mendes 'Parreiras Velhas' / Monção e Melgaço Alvarinho",
    dish: "Polvo à Lagareiro (Tender Roasted Octopus with Crushed Garlic Potatoes & Olive Oil)",
    note: "Sweet, charred roasted Atlantic octopus drenched in rich olive oil is elevated by the tactile granite minerality, lemon curd acidity, and saline persistence of oak-aged Alvarinho.",
    glassware: "Focused Burgundy White Wine Stem (600ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Serve directly or 15-minute aeration"
  },
  {
    category: "Artisanal Raw Milk Cheese",
    wineType: "Red",
    targetWine: "Quinta do Noval / Benchmark Vintage Port",
    dish: "Queijo Serra da Estrela (Raw Sheep's Milk Soft Cheese) with Walnuts & Broa Bread",
    note: "The unctuous, pungent, herbal creaminess of aged raw sheep's milk cheese melds immortally with the lush dark cassis fruit, fiery warmth, and towering structure of Vintage Port.",
    glassware: "Traditional Port Tasting Glass (300ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant with fine filter off heavy crust 2 hours prior to service"
  },
  {
    category: "Wild Atlantic Seafood",
    wineType: "Sparkling",
    targetWine: "Quinta das Bágeiras / Bairrada Bruto Natural Sparkling",
    dish: "Percebes das Berlengas (Gooseneck Barnacles Steamed in Sea Water)",
    note: "Intensely saline, iodine-rich barnacles fresh from crashing Atlantic waves find an electric mirror in zero-dosage, high-acid, chalky Bairrada sparkling wine.",
    glassware: "Tulip Champagne Glass (450ml)",
    servingTemp: "6–8°C (43–46°F)",
    decanting: "Serve chilled immediately upon bottle opening"
  }
];

export const PORTUGAL_DATA = {
  id: 'portugal',
  name: "Portugal (Douro, Dão, Alentejo & Atlantic Coast)",
  country: "Portugal",
  countryCode: "PRT",
  aliases: [
    'portugal', 'douro', 'dao', 'dão', 'alentejo',
    'vinho verde', 'bairrada', 'moncao', 'melgaco',
    'port', 'porto', 'madeira', 'cima corgo', 'douro superior'
  ],
  tagline: "Vertical Metamorphic Schist, Granite Terraces & Indigenous Field Blends",
  summary: "Portugal's ancient wine civilization is defined by an unparalleled treasure trove of over 250 indigenous grape varieties, dramatic vertical schist gorges along the Douro, granite mountain amphitheaters in Dão, and chalky Atlantic coastal marls in Bairrada—producing legendary Vintage Ports, immortal Barca-Velha reds, and electrifying mineral whites.",
  
  center: [41.1500, -7.5500],
  zoom: 8,
  bounds: [
    [37.0000, -9.5000],
    [42.2000, -6.5000]
  ],

  heroGradient: "linear-gradient(135deg, #400010 0%, #7209b7 50%, #d4af37 100%)",
  accentColor: "#7209b7",

  terroir: {
    climate: "Extremely diverse climate transitions: fierce continental heat and arid rain-shadow in the interior Douro Valley, cool high-elevation alpine plateaus in Dão, sun-drenched Mediterranean plains in Alentejo, and maritime Atlantic fog in Bairrada and Vinho Verde.",
    soil: "Pre-Cambrian and Hercynian vertical metamorphic schist (xisto), decomposed granite sands (saibro), Jurassic marine chalky clay-limestone (barro), and silica beach sands.",
    elevation: "Sea level along the Minho and Atlantic coast up to 800m in the Serra da Estrela and Serra de São Mamede.",
    riverInfluence: "Dominated by the great Douro River slicing through schist gorges, alongside the Tejo, Mondego, and Minho rivers providing drainage and morning mist."
  },

  grapes: [
    { name: "Touriga Nacional", percentage: 30, type: "Red", role: "Portugal's noble standard-bearer; explosive violet floral perfume, dark bergamot citrus, and immense structured longevity." },
    { name: "Touriga Franca", percentage: 25, type: "Red", role: "The backbone of Douro reds and Ports; velvety texture, dark blackberry fruit, rockrose, and firm fine tannins." },
    { name: "Tinta Roriz (Aragonez)", percentage: 15, type: "Red", role: "Portuguese Tempranillo; adds savory spice, redcurrant, and tobacco complexity to field blends." },
    { name: "Baga", percentage: 10, type: "Red", role: "The noble grape of Bairrada; high acid, fierce tannins, sour cherry, and Barolo-like longevity." },
    { name: "Alvarinho", percentage: 10, type: "White", role: "The pride of Monção e Melgaço; concentrated, saline, peach-scented, and electric mineral drive." },
    { name: "Encruzado", percentage: 10, type: "White", role: "The Grand Cru white grape of Dão; crystalline acidity, hazelnut, wet granite, and Burgundian cellaring capacity." }
  ],

  structure: {
    body: 9.0,
    acidity: 8.5,
    tannin: 9.0,
    sweetness: 2.0,
    alcohol: 14.5,
    agingPotential: "15–50+ Years for Barca-Velha, Vintage Ports & High-Altitude Dão/Bairrada Crus"
  },

  classification: {
    system: "Denominação de Origem Controlada (DOC) & Douro Benefício",
    description: "Portugal's statutory classification system features 31 official DOCs governed by rigorous yield, grape variety, and aging laws. The historic Douro Benefício system rates vineyards from A to F based on 12 cadastral criteria to determine Port production quotas.",
    tiers: [
      {
        name: "Denominação de Origem Controlada (DOC)",
        desc: "Highest quality classification strictly delimiting origin, grape varieties, and minimum aging requirements."
      },
      {
        name: "Indicação Geográfica Protegida (IGP / Vinho Regional)",
        desc: "Regional designation offering winemakers broader flexibility in varietal composition."
      },
      {
        name: "Douro Benefício System",
        desc: "Cadastral matrix rating vineyards from A (highest) to F based on altitude, slope, soil, exposure, and age."
      },
      {
        name: "Garrafeira",
        desc: "Prestigious aging tier requiring minimum 30 months aging with at least 12 months in glass bottles for reds."
      }
    ]
  },

  flavorProfile: {
    primary: ['Wild Violets & Bergamot Citrus', 'Crushed Black Cherry & Damson Plum', 'Warm Metamorphic Slate & Schist Rock', 'Dried Fig & Medjool Date', 'Pine Resin & Forest Eucalyptus'],
    secondary: ['Cigar Tobacco & Old Tawny Oak', 'Dark Cocoa & Espresso Bean', 'Balsamic Cedar & Cured Leather', 'Crushed White Granite & Flint', 'Orange Blossom Honey & Toasted Almond'],
    palate: "Profound architectural grip built on dense, mineral-drenched schist tannins, bursting with explosive floral perfume, dried stone fruits, and an endless, warm balsamic finish."
  },

  foodPairings: PORTUGAL_FOOD_PAIRINGS,
  subRegions: PORTUGAL_SUBREGIONS,
  grandCrus: PORTUGAL_GRAND_CRUS,
  crus: PORTUGAL_GRAND_CRUS,
  technicalRegulations: PORTUGAL_TECHNICAL_REGULATIONS,
  prestigeCuvees: PORTUGAL_PRESTIGE_CUVEES,
  prestigeMonopoles: PORTUGAL_PRESTIGE_CUVEES,
  iconicDomaines: PORTUGAL_ICONIC_DOMAINES,
  iconicGrowers: PORTUGAL_ICONIC_DOMAINES,
  sommelierTip: "Serve crisp Monção e Melgaço Alvarinho and mineral Dão Encruzado at 10–12°C (50–54°F) in tulip white wine glasses. Monumental Douro reds like Barca-Velha require 1–2 hours of aeration and should be served at 16–18°C (60–64°F) in large Bordeaux stems. For Vintage Port, decant off heavy sediment using a funnel and serve at 16–18°C in dedicated Port stems."
};
