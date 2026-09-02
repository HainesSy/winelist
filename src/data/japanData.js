/**
 * ============================================================================
 * JAPAN (CHŪBU / YAMANASHI, NAGANO & HOKKAIDO) SOMMELIER DATASET
 * CMS LEVEL 3 / MASTER SOMMELIER STANDARD
 * ============================================================================
 * 
 * Comprehensive dataset covering Japan's fine wine regions:
 *   - GI Yamanashi (Katsunuma Basin, Mount Fuji Foothills, Koshu)
 *   - GI Nagano (Shinshu High Alpine Basins, Kikyogahara Merlot, Chardonnay)
 *   - GI Hokkaido (Yoichi Maritime Pinot Noir & Kerner)
 *   - Technical Regulations (Volcanic Ash, Tanadukuri Pergola, GI Protection, Sur Lie)
 *   - Benchmark Wineries, Single-Vineyard Terroirs & Cult Bottlings
 *   - Color-Coded Gastronomic Food Pairings (Sushi, Kaiseki, Tempura, Wagyu)
 * ============================================================================
 */

export const JAPAN_SUBREGIONS = [
  {
    id: 'yamanashi-katsunuma',
    name: "Katsunuma & Yamanashi Basin (GI Yamanashi)",
    district: "GI Yamanashi",
    lat: 35.6600,
    lng: 138.7300,
    terroir: "Volcanic alluvial foothills beneath Mount Fuji and the Southern Japanese Alps, with overhead Tanadukuri pergola trellising mitigating summer monsoon rains.",
    focus: "Koshu & Muscat Bailey A: Grace Wine, Katsunuma Jozo, Chateau Mercian, Marufuji Winery (Rubaiyat), Kurambon Wine, Diamond Winery, Lumiere.",
    geology: "Volcanic ash loam (Kanto Loam / Kuroboku) over fast-draining alluvial river gravels of the Fuefuki River.",
    dominantGrapes: "Koshu (primary 70%+), Muscat Bailey A, Cabernet Sauvignon, Merlot",
    microTerroirs: [
      { name: "Toriibira & Hishiyama Slopes", focus: "Steep, sun-drenched, well-draining hillside terraces producing concentrated, mineral-etched Koshu" },
      { name: "Akeno (Hokuto City)", focus: "High-elevation (700m) sunshine capital of Japan; home to Grace Wine's vertical-trellised Cuvée Misawa estate" },
      { name: "Fuefuki & Kofu Basin", focus: "Alluvial gravel plains producing fragrant, candied-berry Muscat Bailey A and fresh Koshu" }
    ],
    description: "The spiritual birthplace of Japanese wine, crafting laser-pure, mineral-kissed Koshu and silky Muscat Bailey A beneath the snow-capped peak of Mount Fuji."
  },
  {
    id: 'nagano-shinshu',
    name: "Nagano (Shinshu High Alpine Valleys / GI Nagano)",
    district: "GI Nagano",
    lat: 36.2500,
    lng: 137.9500,
    terroir: "High-altitude Alpine basins (600m to 900m) sheltered by the 3,000m Japanese Northern Alps, offering low humidity and dramatic 30–40°F diurnal shifts.",
    focus: "Chardonnay, Merlot, Pinot Noir, Cabernet Franc: Obuse Winery (Domaines Sogga), Chateau Mercian Kikyogahara, Rue de Vin, Kido Winery, Manns Wines (Solaris).",
    geology: "Alluvial gravel, decomposed granite, and volcanic ash with limestone intrusions.",
    dominantGrapes: "Merlot, Chardonnay, Pinot Noir, Cabernet Franc, Sauvignon Blanc",
    microTerroirs: [
      { name: "Kikyogahara Basin (Shiojiri)", focus: "Japan's premier terroir for Merlot; deep gravel soils and cool nights producing world-renowned structured reds" },
      { name: "Chikuma River Valley", focus: "Boutique artisan wine corridor producing laser-pure Chardonnay, Pinot Noir, and Sauvignon Blanc" },
      { name: "Matsumoto Basin", focus: "High-elevation plateau producing concentrated, aromatic white and red wines" }
    ],
    description: "Japan's high-altitude Alpine paradise. Sheltered by towering mountain ranges, producing world-beating Merlot, chiseled Chardonnay, and aromatic whites."
  },
  {
    id: 'hokkaido-yoichi',
    name: "Hokkaido (Yoichi & Sorachi / GI Hokkaido)",
    district: "GI Hokkaido",
    lat: 43.1800,
    lng: 140.7700,
    terroir: "Northern maritime island terroir overlooking the Sea of Japan, featuring cool summers, snowy winters, and long daylight hours.",
    focus: "Pinot Noir, Kerner, Zweigelt, Chardonnay: Domaine Takahiko (Nana-Tsu-Mori), Yamazaki Winery, Domaine Atsushi Suzuki, Kondo Vineyard.",
    geology: "Volcanic sandy loam, clay, and marine sedimentary subsoils.",
    dominantGrapes: "Pinot Noir, Kerner, Zweigelt, Chardonnay, Bacchus",
    microTerroirs: [
      { name: "Yoichi Town (Nobori District)", focus: "Gentle hills facing the Sea of Japan; home to Takahiko Soga's cult natural Pinot Noir (Nana-Tsu-Mori)" },
      { name: "Sorachi Valley", focus: "Inland continental basin producing crystalline, aromatic Kerner, Pinot Noir, and Chardonnay" }
    ],
    description: "The extreme northern frontier of Japanese fine wine. Producing ethereal, wild-berry Pinot Noir and aromatic, crystalline cool-climate whites."
  },
  {
    id: 'yamagata-kaminoyama',
    name: "Yamagata (Kaminoyama & Takahata / GI Yamagata)",
    district: "GI Yamagata",
    lat: 38.1500,
    lng: 140.2800,
    terroir: "Inland mountain basin in northern Honshu surrounded by the Ou Mountains, featuring dry summers and high diurnal temperature swings.",
    focus: "Muscat Bailey A, Merlot, Chardonnay, Delaware: Takeda Winery, Takahata Winery, Asahimachi Wine.",
    geology: "Volcanic ash and clay loam over decomposed granite and river gravel.",
    dominantGrapes: "Muscat Bailey A, Chardonnay, Merlot, Delaware",
    microTerroirs: [
      { name: "Kaminoyama Foothills", focus: "Warm sunny basin producing deeply colored, structured Muscat Bailey A and ripe Chardonnay" }
    ],
    description: "Historic northern basin renowned for barrel-aged Muscat Bailey A of exceptional depth and luscious, aromatic white wines."
  }
];

export const JAPAN_GRAND_CRUS = [
  // ==========================================
  // GI YAMANASHI BENCHMARK TERROIRS
  // ==========================================
  {
    id: 'japan-cru-katsunuma-toriibira',
    name: "Katsunuma Toriibira & Hishiyama (GI Yamanashi)",
    village: "Katsunuma (Koshu City)",
    commune: "Katsunuma",
    subregion: "Katsunuma & Yamanashi Basin",
    district: "GI Yamanashi",
    subregionId: 'yamanashi-katsunuma',
    districtId: 'yamanashi-katsunuma',
    lat: 35.6667,
    lng: 138.7333,
    areaHa: 450.00,
    aocDecreeYear: 2013,
    establishedYear: 1877,
    elevationRange: "400m – 600m",
    aspect: "South / South-West facing steep volcanic hillside terraces",
    dominantGrape: "Koshu (100%)",
    grapeRatio: "Koshu (100%)",
    wineType: "White",
    tier: "grandCru",
    badge: "👑 Grand Cru Koshu",
    baseYield: "35–45 hl/ha",
    minPotentialAbv: "11.0% vol.",
    soil: "Volcanic ash loam (Kuroboku) mixed with fast-draining alluvial river gravel and slate cobbles",
    character: "The spiritual summit of Koshu. Pristine yuzu citrus, white peach, jasmine floral perfume, subtle white pepper, and laser-sharp saline minerality with gentle phenolic grip.",
    legalNotes: "GI Yamanashi protected geographic indication decreed 2013 (Japan's first official wine GI).",
    historicalSignificance: "First commercial Japanese winery established in Katsunuma in 1877 (Dainihon Yamanashi Budoshu Kaisha).",
    benchmarkProducers: ["Grace Wine (Cuvée Misawa)", "Katsunuma Jozo (Aruga Branca Issehara, Brilhante)", "Chateau Mercian (Koshu Gris de Gris)", "Marufuji Winery (Rubaiyat)"],
    famousProducers: ["Grace Wine", "Katsunuma Jozo", "Chateau Mercian", "Marufuji Winery"],
    iconicVineyards: ["Toriibira Hillside (Katsunuma)", "Issehara Single Vineyard (Katsunuma Jozo)", "Hishiyama Terrace"]
  },
  {
    id: 'japan-cru-akeno-misawa',
    name: "Akeno High Mountain Estate (Hokuto City)",
    village: "Hokuto (Akeno)",
    commune: "Akeno",
    subregion: "Katsunuma & Yamanashi Basin",
    district: "GI Yamanashi",
    subregionId: 'yamanashi-katsunuma',
    districtId: 'yamanashi-katsunuma',
    lat: 35.7833,
    lng: 138.4333,
    areaHa: 30.00,
    aocDecreeYear: 2013,
    establishedYear: 2002,
    elevationRange: "700m – 800m",
    aspect: "High southern bench with Japan's longest annual sunshine hours (2,500+ hrs/yr)",
    dominantGrape: "Koshu, Cabernet Sauvignon, Merlot, Cabernet Franc",
    grapeRatio: "Koshu (50%), Cabernet Sauvignon (25%), Merlot (15%), Cabernet Franc (10%)",
    wineType: "Dual",
    tier: "grandCru",
    badge: "🏔️ High Alpine Terroir",
    baseYield: "25–35 hl/ha",
    minPotentialAbv: "12.0% vol.",
    soil: "Volcanic ash clay loam (Kanto Loam) over Mount Kayagatake volcanic bedrock",
    character: "Ethereal precision, crystalline white flowers, sudachi lime, grapefruit pith, wet river stone, and incredible natural tension from high-altitude UV radiation.",
    legalNotes: "Vertical trellis (cordon) farming rather than traditional pergola, pioneering high-density modern viticulture.",
    historicalSignificance: "Planted by Shigekazu Misawa in 2002; home of Grace Wine's multiple Platinum Decanter Award winning cuvées.",
    benchmarkProducers: ["Grace Wine (Cuvée Misawa, Grace Koshu Private Reserve)", "Sun Sun Winery"],
    famousProducers: ["Grace Wine"],
    iconicVineyards: ["Misawa Estate Vineyard (Akeno - 700m)"]
  },

  // ==========================================
  // GI NAGANO BENCHMARK TERROIRS
  // ==========================================
  {
    id: 'japan-cru-kikyogahara-merlot',
    name: "Kikyogahara Basin Merlot (GI Nagano)",
    village: "Shiojiri",
    commune: "Kikyogahara",
    subregion: "Nagano (Shinshu High Alpine Valleys)",
    district: "GI Nagano",
    subregionId: 'nagano-shinshu',
    districtId: 'nagano-shinshu',
    lat: 36.1167,
    lng: 137.9500,
    areaHa: 350.00,
    aocDecreeYear: 2021,
    establishedYear: 1976,
    elevationRange: "700m – 800m",
    aspect: "Flat-to-gently sloping alpine basin sheltered by the Northern Alps",
    dominantGrape: "Merlot (85%+)",
    grapeRatio: "Merlot (85%), Cabernet Franc (10%), Syrah (5%)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Grand Cru Merlot",
    baseYield: "30–40 hl/ha",
    minPotentialAbv: "13.0% vol.",
    soil: "Deep well-draining alluvial gravel and sand over volcanic ash with rapid water drainage",
    character: "Japan's benchmark red wine. Ripe black plum, blackcurrant, dark cocoa, sweet cedar, violet perfume, and fine, velvety, aristocratic tannins.",
    legalNotes: "GI Nagano established in 2021.",
    historicalSignificance: "Chateau Mercian's 1985 Kikyogahara Merlot won the Grand Gold at the 1989 International Wine Challenge in London, stunning global critics.",
    benchmarkProducers: ["Chateau Mercian (Kikyogahara Merlot Signature)", "Kido Winery (Project K)", "Hayashi Winery (Gohyakumangoku)", "Izutsu Wine"],
    famousProducers: ["Chateau Mercian", "Kido Winery", "Hayashi Winery"],
    iconicVineyards: ["Kikyogahara Historic Estate (Chateau Mercian)", "Kido Estate Parcel"]
  },
  {
    id: 'japan-cru-obuse-domaine-sogga',
    name: "Obuse & Chikuma River Valley (GI Nagano)",
    village: "Obuse / Takayama",
    commune: "Chikuma River",
    subregion: "Nagano (Shinshu High Alpine Valleys)",
    district: "GI Nagano",
    subregionId: 'nagano-shinshu',
    districtId: 'nagano-shinshu',
    lat: 36.7000,
    lng: 138.3167,
    areaHa: 200.00,
    aocDecreeYear: 2021,
    establishedYear: 1942,
    elevationRange: "350m – 850m",
    aspect: "Gentle slopes facing the Chikuma River and Mount Takayashiro",
    dominantGrape: "Chardonnay & Pinot Noir",
    grapeRatio: "Chardonnay (50%), Pinot Noir (30%), Sauvignon Blanc (20%)",
    wineType: "Dual",
    tier: "grandCru",
    badge: "🌿 Biodynamic Alpine Cru",
    baseYield: "25–35 hl/ha",
    minPotentialAbv: "12.5% vol.",
    soil: "Alluvial gravel, river cobbles, and volcanic ash with decomposed granite",
    character: "Laser-sharp, Burgundian-level precision. White peach, lemon oil, crushed chalk minerality, roasted hazelnut, and vibrant alpine acidity.",
    legalNotes: "Strict organic farming and un-grafted rootstock plots.",
    historicalSignificance: "Akihiko Soga (Obuse Winery / Domaines Sogga) trained in Burgundy, crafting legendary micro-cuvées with zero chaptalization.",
    benchmarkProducers: ["Obuse Winery (Domaines Sogga)", "Rue de Vin", "Vignoble Hide", "Kusuda Wine (Takayama)"],
    famousProducers: ["Obuse Winery", "Rue de Vin"],
    iconicVineyards: ["Clos Cendres (Obuse)", "Vignes Françaises Un-grafted Plot"]
  },

  // ==========================================
  // GI HOKKAIDO (YOICHI PINOT NOIR)
  // ==========================================
  {
    id: 'japan-cru-yoichi-nana-tsu-mori',
    name: "Yoichi 'Nana-Tsu-Mori' (GI Hokkaido)",
    village: "Yoichi (Nobori)",
    commune: "Yoichi",
    subregion: "Hokkaido (Yoichi & Sorachi)",
    district: "GI Hokkaido",
    subregionId: 'hokkaido-yoichi',
    districtId: 'hokkaido-yoichi',
    lat: 43.1833,
    lng: 140.7833,
    areaHa: 6.00,
    aocDecreeYear: 2018,
    establishedYear: 2010,
    elevationRange: "60m – 150m",
    aspect: "Gentle hills overlooking the Sea of Japan",
    dominantGrape: "Pinot Noir (100%)",
    grapeRatio: "Pinot Noir (100% selection massale with 5% noble rot botrytis inclusion)",
    wineType: "Red",
    tier: "grandCru",
    badge: "👑 Cult Natural Grand Cru",
    baseYield: "20–25 hl/ha",
    minPotentialAbv: "12.0% vol.",
    soil: "Volcanic ash and clay loam over marine sedimentary subsoil with high organic matter",
    character: "Mind-bending Japanese natural wine icon. Wild mountain strawberries, Japanese matsutake mushrooms, damp pine needle, incense (kyara), umami, and featherweight silken tannins.",
    legalNotes: "GI Hokkaido established in 2018.",
    historicalSignificance: "Takahiko Soga (brother of Akihiko Soga) established Domaine Takahiko in 2010, achieving global cult status (featured on Noma's wine list).",
    benchmarkProducers: ["Domaine Takahiko (Nana-Tsu-Mori)", "Domaine Mont", "Domaine Atsushi Suzuki", "Niki Hills"],
    famousProducers: ["Domaine Takahiko", "Domaine Atsushi Suzuki"],
    iconicVineyards: ["Nana-Tsu-Mori (Seven Hills - 4.5 ha)"]
  }
];

export const JAPAN_TECHNICAL_REGULATIONS = {
  geology: {
    summary: "Japan's volcanic archipelago features nutrient-rich, freely draining volcanic ash soils (Kuroboku / Kanto Loam) layered over ancient alluvial river gravels and Alpine granite.",
    formations: [
      {
        name: "Volcanic Ash Loam (Kuroboku / Kanto Loam)",
        period: "Quaternary (Pleistocene to Holocene volcanic eruptions from Mount Fuji and Yatsugatake)",
        keyAreas: ["Katsunuma (Yamanashi)", "Akeno (Hokuto)", "Shiojiri (Nagano)", "Yoichi (Hokkaido)"],
        wineImpact: "Dark, humic, porous volcanic topsoil with high phosphorus-fixing capacity and fast drainage, preventing waterlogging during typhoons and imparting delicate citrus and mineral precision."
      },
      {
        name: "Alluvial River Terrace Gravels & Granite Cobbles",
        period: "Holocene (Fuefuki, Chikuma, and Kamanashi River basins)",
        keyAreas: ["Katsunuma Basin", "Kikyogahara", "Chikuma River Valley"],
        wineImpact: "Coarse granite and slate river stones providing rapid internal drainage and deep root penetration, crucial for high-quality Merlot and Cabernet."
      }
    ]
  },

  climatology: {
    system: "East Asian Monsoon & Alpine Rain-Shadow Microclimates",
    description: "Japan experiences high summer rainfall and autumn typhoons. However, the premier wine basins of Yamanashi and Nagano are encircled by 3,000-meter Alpine peaks that create rain-shadow barriers, reducing annual precipitation to ~1,000mm (far lower than coastal Tokyo's 1,600mm) with intense sunshine.",
    winds: [
      {
        name: "Sasago Oroshi (Yamanashi Mountain Breeze)",
        effect: "Cold nocturnal mountain winds descending from the Sasago Pass into the Katsunuma basin, lowering nighttime temperatures and preserving fresh malic acidity in Koshu."
      },
      {
        name: "Monsoon Humidity Defense (Tanadukuri Pergola)",
        effect: "Overhead pergola trellising (1.8m height) elevates grape clusters above hot ground humidity, maximizing horizontal airflow and canopy ventilation to prevent mildew and botrytis."
      }
    ]
  },

  vinification: {
    system: "Japanese Enological Mastery & Koshu Vinification",
    description: "Combines ancestral overhead pergola viticulture with cutting-edge lees maturation, micro-oxygenation, and low-temperature fermentation.",
    traditions: [
      {
        name: "Tanadukuri / Tanagakuri Overhead Pergola Trellising",
        frenchTerm: "Taille en Pergola Japonaise",
        description: "Historic Japanese canopy training system where vines are trained horizontally on a 1.8-meter-high overhead wire grid, allowing heavy clusters to hang freely in breezes while protecting fruit from wet soil splash.",
        sommelierImpact: "Essential for disease prevention in humid monsoons; yields pristine, clean, delicate fruit with pure floral and citrus character."
      },
      {
        name: "Sur Lie Aging (Koshu)",
        frenchTerm: "Élevage Sur Lie",
        description: "After cool fermentation in stainless steel, Koshu wine is kept in contact with fine yeast lees for 6 to 12 months without racking, periodically stirred to release mannoproteins.",
        sommelierImpact: "Transforms delicate Koshu by adding a creamy, savory mid-palate texture, subtle bread dough nuances, and natural amino acid umami."
      },
      {
        name: "Koshu Orange / Skin-Contact (Gris de Gris)",
        frenchTerm: "Macération Pelliculaire Koshu",
        description: "Because Koshu has pink-grey skins rich in polyphenols and flavanols, modern winemakers macerate juice on skins for days or weeks to craft textured, copper-hued orange wines.",
        sommelierImpact: "Extracts pleasant tea-like tannins, dried apricot, orange zest, and deep savory structure that matches umami-rich soy and miso dishes."
      }
    ]
  },

  grapes: {
    major: [
      {
        id: 'koshu',
        name: "Koshu",
        percentage: 65,
        type: "White",
        epicenter: "GI Yamanashi (Katsunuma Basin)",
        profile: "Yuzu and sudachi citrus, white peach, jasmine floral, green apple, wet river stone, subtle white pepper, and pristine salinity",
        role: "Japan's indigenous national flagship grape, cultivated for over 1,000 years; naturally low iron content (<0.1 mg/L) ensures zero metallic clash with raw fish and sashimi",
        benchmarkCuvees: ["Grace Wine Cuvée Misawa", "Katsunuma Jozo Aruga Branca Issehara", "Chateau Mercian Koshu Gris de Gris"]
      },
      {
        id: 'muscat-bailey-a',
        name: "Muscat Bailey A",
        percentage: 20,
        type: "Red",
        epicenter: "GI Yamanashi, GI Yamagata, Okayama",
        profile: "Candied red cherry, wild strawberry, cotton candy, subtle cinnamon, and soft, velvety, low-astringency tannins",
        role: "Bred in 1927 by Zenbei Kawakami (the 'Father of Japanese Wine') at Iwanohara Winery; thrives in Japanese humidity",
        benchmarkCuvees: ["Diamond Winery Chanter Y-A", "Marufuji Rubaiyat MBA", "Takeda Winery Rouge"]
      },
      {
        id: 'merlot-chardonnay',
        name: "Merlot & Chardonnay",
        percentage: 15,
        type: "Red / White",
        epicenter: "GI Nagano (Kikyogahara, Chikuma River), GI Hokkaido",
        profile: "Black plum, dark cocoa, sweet cedar, lemon curd, hazelnut, and chiseled alpine minerality",
        role: "World-class international varieties excelling in high-altitude alpine basins",
        benchmarkCuvees: ["Chateau Mercian Kikyogahara Merlot", "Obuse Winery Clos Cendres Chardonnay", "Domaine Takahiko Nana-Tsu-Mori"]
      }
    ]
  },

  classification: {
    system: "Japanese Geographical Indication (GI) & 'Japanese Wine' (Nihon Wine) Legal Standards",
    description: "In 2018, the National Tax Agency enforced strict legal definitions distinguishing authentic 'Japanese Wine' (Nihon Wine) from imported bulk wine bottled in Japan.",
    pyramid: [
      {
        tier: "Geographical Indication (GI) Approved",
        frenchTerm: "Appellation d'Origine Contrôlée (AOC equivalent)",
        criteria: "100% of grapes must be harvested within the delimited prefecture, produced and bottled locally, meet strict sugar/acidity metrics, and pass mandatory blind tasting panels.",
        aging: "Estate choice.",
        yield: "Strict quality control.",
        examples: ["GI Yamanashi (2013)", "GI Hokkaido (2018)", "GI Nagano (2021)", "GI Yamagata (2021)"]
      },
      {
        tier: "Japanese Wine (Nihon Wine)",
        frenchTerm: "Vin 100% Raisins Domestiques",
        criteria: "Must be crafted 100% from domestically grown Japanese grapes and fermented/bottled in Japan (imported bulk wine or concentrated grape juice cannot use this term).",
        aging: "Discretionary.",
        yield: "Standard.",
        examples: ["100% Japanese Domestically Grown Varietal Bottlings"]
      }
    ],
    legalRules: [
      "Mandatory 100% Domestic Grapes: Only wines made from 100% Japanese-grown grapes can be labeled 'Japanese Wine' (Nihon Wine).",
      "Varietal Labeling: Must contain at least 85% of the stated grape variety.",
      "Vintage Labeling: Must contain at least 85% of grapes harvested in the stated vintage year.",
      "Origin Labeling: Must contain at least 85% of grapes grown in the named region or municipality."
    ]
  }
};

export const JAPAN_PRESTIGE_ESTATES = [
  {
    id: 'grace-cuvee-misawa',
    name: "Grace Wine 'Cuvée Misawa' Koshu",
    producer: "Grace Wine (Chuo Budoshu)",
    estate: "Misawa Vineyard (Akeno - 700m)",
    debutVintage: "2002",
    vintageDebut: "2002",
    appellation: "GI Yamanashi",
    village: "Hokuto (Akeno)",
    subregion: "Katsunuma & Yamanashi Basin",
    areaHa: 12.00,
    wineType: "White",
    dominantGrape: "Koshu",
    grapeComposition: "100% Koshu (Vertical Shoot Positioning Trellised)",
    blend: "Koshu (100%)",
    classification: "The Crown Jewel of Japanese Wine",
    status: "Shigekazu & Ayana Misawa's world-champion high-altitude Koshu",
    terroir: "Volcanic ash loam at 700m altitude beneath Mount Kayagatake with Japan's longest sunshine hours.",
    winemaking: "Hand-harvested, whole-cluster pressing, fermented in stainless steel, aged on fine lees (sur lie) for 6 months; crafted by Bordeaux-trained master winemaker Ayana Misawa.",
    historicalLore: "Founded in 1923; Ayana Misawa made history winning consecutive Platinum and Best in Show medals at the Decanter World Wine Awards.",
    character: "Pristine white peach, yuzu zest, jasmine blossom, white pepper, river stone salinity, and breathtaking crystalline length.",
    iconicStatus: "The undisputed global summit of Japanese fine wine.",
    prominenceRank: 1
  },
  {
    id: 'mercian-kikyogahara-merlot',
    name: "Chateau Mercian 'Kikyogahara Merlot Signature'",
    producer: "Chateau Mercian",
    estate: "Kikyogahara Historic Estate",
    debutVintage: "1985",
    vintageDebut: "1985",
    appellation: "GI Nagano",
    village: "Shiojiri (Kikyogahara)",
    subregion: "Nagano (Shinshu High Alpine Valleys)",
    areaHa: 15.00,
    wineType: "Red",
    dominantGrape: "Merlot",
    grapeComposition: "Merlot (~90%), Cabernet Franc (~10%)",
    blend: "Merlot, Cabernet Franc",
    classification: "Historic Grand Cru Merlot of Japan",
    status: "The red wine that proved Japan could produce world-class fine wine",
    terroir: "Deep alluvial gravel and sand beds at 700m altitude in the rain-shadow of the Japanese Alps.",
    winemaking: "Aged 18–20 months in 100% French oak barriques (50% new); optical sorting and precise temperature-controlled fermentation.",
    historicalLore: "The 1985 vintage won the Grand Gold Medal at the 1989 International Wine Challenge in London.",
    character: "Ripe black cherry, dark plum, bittersweet cocoa, sweet tobacco, graphite, and refined, silky, aristocratic tannins.",
    iconicStatus: "The most decorated and historic fine red wine in Japanese history.",
    prominenceRank: 2
  },
  {
    id: 'katsunuma-jozo-issehara',
    name: "Katsunuma Jyozo 'Aruga Branca Issehara' Koshu",
    producer: "Katsunuma Jyozo",
    estate: "Issehara Single Vineyard",
    debutVintage: "1995",
    vintageDebut: "1995",
    appellation: "GI Yamanashi",
    village: "Fuefuki / Katsunuma",
    subregion: "Katsunuma & Yamanashi Basin",
    areaHa: 3.50,
    wineType: "White",
    dominantGrape: "Koshu",
    grapeComposition: "100% Koshu (Single-Vineyard Terroir)",
    blend: "Koshu (100%)",
    classification: "Single-Vineyard Koshu Benchmark",
    status: "Yuji Aruga's revolutionary single-vineyard terroir statement",
    terroir: "South-facing gentle gravelly alluvial terrace with warm microclimate in Fuefuki.",
    winemaking: "Early morning harvest, gentle pneumatic pressing, cool fermentation, aged sur lie in stainless steel.",
    historicalLore: "Founded in 1937; Yuji Aruga partnered with French consultant Bernard Magrez to bring Koshu to Michelin 3-star restaurants across Paris.",
    character: "Exotic white grapefruit, passionfruit hint, yuzu peel, lemongrass, wet flint, and an unctuous yet mineral-cut palate.",
    iconicStatus: "The pioneer of single-vineyard cru Koshu in Japan.",
    prominenceRank: 3
  },
  {
    id: 'takahiko-nana-tsu-mori',
    name: "Domaine Takahiko 'Nana-Tsu-Mori' Pinot Noir",
    producer: "Domaine Takahiko",
    estate: "Nana-Tsu-Mori (Yoichi)",
    debutVintage: "2010",
    vintageDebut: "2010",
    appellation: "GI Hokkaido",
    village: "Yoichi (Nobori)",
    subregion: "Hokkaido (Yoichi & Sorachi)",
    areaHa: 4.50,
    wineType: "Red",
    dominantGrape: "Pinot Noir",
    grapeComposition: "100% Pinot Noir (Selection Massale with 5% noble rot botrytis)",
    blend: "Pinot Noir (100%)",
    classification: "Cult Natural Grand Cru",
    status: "Takahiko Soga's mythical Umami-driven natural Pinot Noir",
    terroir: "Volcanic ash and clay loam overlooking the Sea of Japan in Yoichi.",
    winemaking: "100% whole-cluster native yeast fermentation in neutral vats; 5% noble botrytized grapes included in the vat; aged 12 months in neutral used French oak; zero filtration, minimal sulfur.",
    historicalLore: "Takahiko Soga established his tiny domaine in 2010; famously selected as the house wine for Noma in Copenhagen.",
    character: "Pale translucent ruby, wild mountain strawberries, dried matsutake mushrooms, incense (kyara), damp pine needle, and profound dashi-like umami finish.",
    iconicStatus: "The most mythical, impossible-to-buy cult red wine in Japan.",
    prominenceRank: 4
  },
  {
    id: 'obuse-clos-cendres',
    name: "Obuse Winery (Domaines Sogga) 'Chardonnay Clos Cendres'",
    producer: "Obuse Winery",
    estate: "Clos Cendres (Obuse)",
    debutVintage: "1998",
    vintageDebut: "1998",
    appellation: "GI Nagano",
    village: "Obuse",
    subregion: "Nagano (Shinshu High Alpine Valleys)",
    areaHa: 2.00,
    wineType: "White",
    dominantGrape: "Chardonnay",
    grapeComposition: "100% Chardonnay (Un-grafted old vines)",
    blend: "Chardonnay (100%)",
    classification: "Alpine Un-grafted White Grand Cru",
    status: "Akihiko Soga's biodynamic, unchaptalized masterpiece",
    terroir: "Ash-gray alluvial loam ('Cendres') and gravel cobbles along the Chikuma River.",
    winemaking: "100% organic/biodynamic farming, un-grafted vines, native yeast fermentation, aged in French oak casks, zero chaptalization, zero acidification.",
    historicalLore: "Akihiko Soga studied winemaking in Meursault and Volnay before returning to transform his family's historic estate.",
    character: "Razor-sharp reduction, crushed quartz flint, Meyer lemon, white peach, toasted almond, and soaring crystalline alpine acidity.",
    iconicStatus: "The gold standard of natural artisanal Chardonnay in Japan.",
    prominenceRank: 5
  }
];

export const JAPAN_ICONIC_PRODUCERS = [
  {
    id: 'grace-wine',
    name: "Grace Wine (Chuo Budoshu)",
    village: "Katsunuma / Hokuto (Yamanashi)",
    subregion: "Katsunuma & Yamanashi Basin",
    vigneron: "Ayana Misawa & Shigekazu Misawa",
    proprietor: "Misawa Family (Founded 1923)",
    wineType: "White / Red / Sparkling",
    philosophy: "World curator of Koshu. Modern vertical trellis farming, high-altitude estate viticulture, minimal intervention, and diamond-pure terroir transparency.",
    keyCuvees: ["Cuvée Misawa Koshu", "Grace Koshu Private Reserve", "Cuvée Misawa Red", "Grace Blanc de Blancs (Traditional Method)"],
    iconicVineyards: ["Misawa Estate Vineyard (Akeno - 700m)", "Toriibira Vineyard (Katsunuma)"]
  },
  {
    id: 'chateau-mercian',
    name: "Chateau Mercian",
    village: "Katsunuma (Yamanashi) / Shiojiri (Nagano)",
    subregion: "Katsunuma & Yamanashi Basin",
    vigneron: "Mitsuhiro Anzo (Chief Winemaker)",
    proprietor: "Mercian Corporation (Kirin Group)",
    wineType: "Red / White",
    philosophy: "The historic pioneer of modern Japanese fine wine. Combining French classical techniques with cutting-edge clonal research and single-terroir site mastery.",
    keyCuvees: ["Kikyogahara Merlot Signature", "Koshu Gris de Gris", "Jonohira Cabernet Sauvignon", "Niitsuru Chardonnay"],
    iconicVineyards: ["Kikyogahara Historic Vineyard", "Jonohira Vineyard (Katsunuma)", "Niitsuru Vineyard (Yamagata)"]
  },
  {
    id: 'katsunuma-jozo',
    name: "Katsunuma Jyozo",
    village: "Katsunuma (Yamanashi)",
    subregion: "Katsunuma & Yamanashi Basin",
    vigneron: "Yuji Aruga / Hiro Aruga",
    proprietor: "Aruga Family (Founded 1937)",
    wineType: "White / Sparkling / Red",
    philosophy: "Dedicated exclusively to unlocking the gastronomic potential of Koshu. Collaborated with Bernard Magrez and Alain Ducasse to pair Koshu with global haute cuisine.",
    keyCuvees: ["Aruga Branca Issehara", "Aruga Branca Brilhante (Sparkling)", "Aruga Branca Pipa (Oak-aged)", "Aruga Branca Clareza"],
    iconicVineyards: ["Issehara Vineyard", "Katsunuma Estate Plots"]
  },
  {
    id: 'marufuji-winery',
    name: "Marufuji Winery (Rubaiyat)",
    village: "Katsunuma (Yamanashi)",
    subregion: "Katsunuma & Yamanashi Basin",
    vigneron: "Haruo Omura",
    proprietor: "Omura Family (Founded 1890)",
    wineType: "White / Red",
    philosophy: "One of Japan's oldest family wineries. Pioneered dry Koshu Sur Lie and structured, barrel-aged Muscat Bailey A.",
    keyCuvees: ["Rubaiyat Koshu Sur Lie", "Rubaiyat Muscat Bailey A Barrel Select", "Rubaiyat Petit Verdot"],
    iconicVineyards: ["Katsunuma Old Vines"]
  },
  {
    id: 'domaine-takahiko',
    name: "Domaine Takahiko",
    village: "Yoichi (Hokkaido)",
    subregion: "Hokkaido (Yoichi & Sorachi)",
    vigneron: "Takahiko Soga",
    proprietor: "Takahiko Soga (Founded 2010)",
    wineType: "Red",
    philosophy: "Radical natural purism. Whole-cluster fermentation, organic viticulture, noble rot inclusion, and Japanese umami-driven Pinot Noir.",
    keyCuvees: ["Nana-Tsu-Mori Pinot Noir", "Nana-Tsu-Mori Blanc de Noir", "Yoichi Nobori"],
    iconicVineyards: ["Nana-Tsu-Mori (Seven Hills - Yoichi)"]
  }
];

export const JAPAN_FOOD_PAIRINGS = [
  {
    category: "Sashimi & Nigiri Sushi",
    wineType: "White",
    targetWine: "GI Yamanashi Koshu (Grace Wine / Katsunuma Jozo)",
    dish: "Hon-Maguro Tuna Sashimi, Tai (Sea Bream) Crudo, Hokkaido Uni (Sea Urchin), Nigiri Sushi Flight with Wasabi",
    note: "Koshu possesses virtually zero iron (<0.1 mg/L), eliminating the metallic, fishy aftertaste caused by high-iron wines. Its delicate yuzu citrus, sudachi acidity, and wet stone salinity harmoniously elevate raw seafood.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not required; aerate gently in glass."
  },
  {
    category: "Crispy Tempura & Yakitori",
    wineType: "Sparkling",
    targetWine: "Koshu Sur Lie & Traditional Method Sparkling Koshu (Aruga Branca Brilhante)",
    dish: "Prawn & Seasonal Mountain Vegetable Tempura with Matcha Salt, Charcoal-Grilled Yakitori Shio (Salt-Grilled Free-Range Chicken Skewers)",
    note: "Vibrant effervescence and brisk citrus acidity slice cleanly through crispy tempura batter and rich chicken fats without overwhelming the delicate meat.",
    glassware: "Tulip Champagne Stem (450ml)",
    servingTemp: "8–10°C (46–50°F)",
    decanting: "Not required; aerate gently in glass."
  },
  {
    category: "Kaiseki & Dashi-Based Haute Cuisine",
    wineType: "White",
    targetWine: "Koshu Sur Lie & Orange Koshu Gris de Gris",
    dish: "Steamed Black Cod in Dashi Broth, Chawanmushi with Ginkgo Nuts, Sesame Tofu with Wasabi, Sweet Soy-Glazed Eel (Unagi)",
    note: "Extended lees aging and subtle skin tannins release natural glutamic amino acids that resonate in deep umami harmony with kombu dashi broth and mirin glazes.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not required; aerate gently in glass."
  },
  {
    category: "A5 Wagyu Beef & Sukiyaki",
    wineType: "Red",
    targetWine: "Kikyogahara Merlot (Chateau Mercian) & Muscat Bailey A Barrel Aged (Marufuji Rubaiyat)",
    dish: "A5 Miyazaki Wagyu Beef Sukiyaki with Sweet Mirin Broth and Raw Egg Dip, Grilled Wagyu Tenderloin with Grated Wasabi and Soy Sauce",
    note: "Muscat Bailey A's candied red berry aromatics and soft tannins embrace sweet sukiyaki sauce, while Kikyogahara Merlot's dark plum and cedar structure cut rich Wagyu marbling.",
    glassware: "Bordeaux Grand Cru / Large Red Stem (700ml)",
    servingTemp: "16–18°C (60–64°F)",
    decanting: "Decant 1–2 hours before service for optimal aeration."
  },
  {
    category: "Freshwater River Fish",
    wineType: "White",
    targetWine: "High-Altitude Single-Vineyard Koshu (Grace Cuvée Misawa / Aruga Branca Issehara)",
    dish: "Salt-Grilled Ayu (Sweetfish) with Fresh Sudachi Lime, Grilled Iwana (Char) with Sansho Pepper",
    note: "Gentle herbal bitterness in Koshu mirrors the delicate liver bitterness and crispy salted skin of freshly grilled mountain river fish.",
    glassware: "Universal White Wine Stem (450ml)",
    servingTemp: "10–12°C (50–54°F)",
    decanting: "Not required; aerate gently in glass."
  },
  {
    category: "Ezo Deer, Duck & Wild Mushroom Cuisine (Hokkaido)",
    wineType: "Red",
    targetWine: "Hokkaido Pinot Noir (Domaine Takahiko Nana-Tsu-Mori / Yoichi Nobori)",
    dish: "Roasted Ezo Shika (Hokkaido Sika Deer) with Haskap Berry Sauce, Grilled Duck Breast with Mountain Sansho Pepper & Sautéed Matsutake Mushrooms",
    note: "Takahiko Soga's whole-cluster fermented Pinot Noir yields wild forest berries, matsutake mushroom earthiness, and Japanese umami that seamlessly harmonize with wild game deer and duck.",
    glassware: "Burgundy Pinot Noir Stem (650ml)",
    servingTemp: "15–17°C (59–62°F)",
    decanting: "Decant 30–45 minutes."
  }
];
