# Project: Major World Wine Regions Sommelier Expansion & Exploration System

## Architecture
- **Central Aggregator**: `src/data/wineRegions.js` imports and registers all 13 authoritative world wine regions (`WINE_REGIONS`), providing query resolution (`findWineRegion`), subregion lookups, and technical data indexing.
- **Dedicated Regional Modules**:
  - `src/data/champagneData.js` (extracted modular Champagne dataset)
  - `src/data/burgundyData.js` (existing 33 Grand Crus, 44 1er Crus, 28 Domaines)
  - `src/data/alsaceData.js` (existing 51 Grand Crus, VT/SGN, 21 Domaines)
  - `src/data/corsicaData.js` (existing 9 AOCs, 5 winds, ampelography)
  - `src/data/bordeauxData.js` (1855 Classifications, St-Émilion tiers, Graves, Pomerol, Cru Bourgeois, soils, 225L Barriques, benchmark châteaux)
  - `src/data/rhoneData.js` (Northern & Southern Rhône crus, climats, 13 grapes, soils, Mistral, Guigal La-La's, Chave, Beaucastel)
  - `src/data/loireData.js` (Pays Nantais, Anjou-Saumur, Touraine, Centre-Loire, Tuffeau, Silex, Kimmeridgian, benchmark vignerons)
  - `src/data/piedmontData.js` (Barolo 11 communes & 181 MGAs, Barbaresco 4 communes & 66 MGAs, Roero, Gavi, Barbera, Dolcetto, Conterno, Gaja)
  - `src/data/tuscanyData.js` (Chianti Classico 11 UGAs & Gran Selezione, Brunello 4 quadrants & Riserva, Bolgheri Sassicaia, Galestro/Alberese)
  - `src/data/californiaData.js` (Napa 16 AVAs Valley vs Mountain, Sonoma 19 AVAs Goldridge/Coast, Central Coast Paso 11 districts & Sta. Rita Hills, cult estates)
  - `src/data/oregonData.js` (Willamette 11 AVAs, Jory/Nekia/Willakenzie soils, Van Duzer Corridor, benchmark producers)
  - `src/data/italyOtherData.js` (Veneto Valpolicella Amarone/Soave, Sicily Etna Contrade, Alto Adige, Friuli, Campania Taurasi)
  - `src/data/japanData.js` (GI Yamanashi Koshu & GI Nagano Shinshu Chardonnay/Merlot, volcanic soils, high alpine viticulture)
- **Cartography & Boundaries**: `src/data/wineRegionBoundaries.js` GeoJSON polygon FeatureCollections for all 13 regions with polygon subregion coordinates matching `sub.id`.
- **Sommelier UI Presentation**: `src/components/WineRegionDetail.jsx` 6-tab interface (`map`, `crus`, `specs`, `prestige`, `pairings`, `cellar`) with dynamic cru badges, specs cards, and color-coded gastronomic pairing taxonomy (`All`, `🍷 Red Wine`, `🥂 White Wine`, `🍾 Sparkling`, `🌸 Rosé`).
- **Interactive Mapping**: `src/components/WineRegionMap.jsx` Leaflet map with sommelier base layers, custom HTML marker pins, and interactive cru/subregion popups.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Bordeaux Sommelier Dataset | 1855 Classifications (1st-5th growths + d'Yquem), St-Émilion tiers, Graves/Pessac-Léognan 1953/1959, Pomerol plateaus, Cru Bourgeois, Günzian gravels vs molasse, Cabernet/Merlot dynamics, 225L Barriques, botrytis Ciron mists, First Growths & benchmark estates | M1 | ORIGINAL_REQUEST §R1 |
| 2 | Rhône Valley Sommelier Dataset | Northern Rhône Crus (Côte-Rôtie Brune/Blonde, Condrieu/Château-Grillet, Hermitage 8 climats, Cornas Chaillot, St-Joseph, Crozes, St-Péray) & Southern Rhône Crus (Châteauneuf-du-Pape 13 grapes/galets roulés, Gigondas, Vacqueyras, Vinsobres, Rasteau, Cairanne, Beaumes-de-Venise, Tavel 100% Rosé), Mistral wind, benchmark estates | M1 | ORIGINAL_REQUEST §R1 |
| 3 | Loire Valley Sommelier Dataset | 4 sectors: Pays Nantais (Muscadet sur lie & Clisson/Gorges Orthogneiss/Gabbro), Anjou-Saumur (Savennières schist, Coulée de Serrant, Quarts de Chaume, Saumur-Champigny tuffeau), Touraine (Chinon, Bourgueil, Vouvray, Montlouis), Centre-Loire (Sancerre, Pouilly-Fumé, Terres Blanches, Caillottes, Silex), benchmark vignerons | M1 | ORIGINAL_REQUEST §R1 |
| 4 | Piedmont Sommelier Dataset | Barolo DOCG 11 communes & 181 MGAs (Bussia, Cannubi, Brunate, Cerequio, Monprivato, etc.), Tortonian vs Serravallian soils, Nebbiolo biotypes, 38m/62m aging, Barbaresco 4 communes & 66 MGAs (Asili, Rabajà, Ovello, Montestefano, 26m/50m aging), Roero, Gavi, Barbera, Dolcetto, Alta Langa, benchmark producers | M1 | ORIGINAL_REQUEST §R1 |
| 5 | Tuscany Sommelier Dataset | Chianti Classico 11 UGAs (2021), Gran Selezione min 90% Sangiovese / 30m aging, Galestro vs Alberese, Brunello di Montalcino 100% Sangiovese Grosso / 5yr aging / 4 quadrants, Bolgheri DOC & Sassicaia Super Tuscans, Vino Nobile, benchmark estates | M1 | ORIGINAL_REQUEST §R1 |
| 6 | California Sommelier Dataset | Napa Valley 16 nested AVAs (Valley vs Mountain, Oakville/Rutherford benchlands), Sonoma County 19 AVAs (Russian River Goldridge, Sonoma Coast fog, Alexander Valley, Dry Creek), Central Coast (Paso Robles 11 districts, Santa Cruz Mountains, Sta. Rita Hills), cult estates | M2 | ORIGINAL_REQUEST §R2 |
| 7 | Oregon Sommelier Dataset | Willamette Valley 11 nested AVAs (Dundee Hills volcanic Jory, Eola-Amity Hills Nekia & Van Duzer winds, Ribbon Ridge Willakenzie, Yamhill-Carlton, McMinnville, Chehalem, Laurelwood, Mount Pisgah, Lower Long Tom, Tualatin Hills), benchmark producers | M2 | ORIGINAL_REQUEST §R2 |
| 8 | Italy Other Sommelier Dataset | Veneto (Valpolicella Appassimento Amarone/Ripasso, Soave Classico volcanic basalt), Sicily (Etna DOC Contrade, volcanic soils, Nerello Mascalese & Carricante), Alto Adige, Friuli, Campania (Taurasi Aglianico) | M2 | ORIGINAL_REQUEST §R2 |
| 9 | Japan Sommelier Dataset | GI Yamanashi (Katsunuma pergola Koshu on volcanic alluvial soil) & GI Nagano (Shinshu high alpine Chardonnay & Merlot), benchmark estates | M2 | ORIGINAL_REQUEST §R2 |
| 10 | Master Registry Aggregation | Modular export/import architecture in `src/data/wineRegions.js` registering all 13 world wine regions with uniform schemas, query resolver, and Node ESM import compatibility | M2 | ORIGINAL_REQUEST §R1, R2 |
| 11 | Color-Coded Food Pairings & Gastronomy Taxonomy | Dedicated taxonomy (`Red`, `White`, `Sparkling/Dessert`, `Rosé`) with interactive filter pills (`All`, `🍷 Red Wine`, `🥂 White Wine`, `🍾 Sparkling`), color-coded cards, glassware, decanting, serving temps in `WineRegionDetail.jsx` | M3 | ORIGINAL_REQUEST §R3 |
| 12 | Dynamic Sommelier UI Components | Polymorphic cru badge rendering (Grand Cru, Premier Cru, 1855 Growth, MGA, UGA, AVA), dynamic subregion filter tabs, technical regulation cards, prestige cuvée indexes in `WineRegionDetail.jsx` & `WineRegionMap.jsx` | M3 | ORIGINAL_REQUEST §R3 |
| 13 | GeoJSON Cartography & Boundaries | Complete GeoJSON polygon collections in `src/data/wineRegionBoundaries.js` with matching `sub.id` keys, RFC 7946 coordinates, bounding boxes, center coordinates, and zoom levels for all target regions | M4 | ORIGINAL_REQUEST §R4 |
| 14 | E2E Automated Test Suite (Tiers 1-4) | Comprehensive opaque-box test suite (`test/test_world_wine_regions.js`) covering feature completeness, boundary edge cases, cross-feature relations, and real-world sommelier scenarios across all 13 regions | M5 | ORIGINAL_REQUEST §Acceptance Criteria |
| 15 | Adversarial Hardening & Build Verification | Tier 5 white-box adversarial stress tests, full clean `npm run build` validation with 0 errors, and forensic audit verification | M5 | ORIGINAL_REQUEST §Acceptance Criteria |

## Milestones
| # | Name | Scope | Dependencies | Status | Key Outputs |
|---|------|-------|-------------|--------|-------------|
| M1 | Classical Titans Datasets | `bordeauxData.js`, `rhoneData.js`, `loireData.js`, `piedmontData.js`, `tuscanyData.js` | none | DONE | 5 comprehensive CMS L3 datasets |
| M2 | New World & Additional Datasets | `californiaData.js`, `oregonData.js`, `italyOtherData.js`, `japanData.js`, `champagneData.js`, `wineRegions.js` | M1 | DONE | 4 regional datasets, modular Champagne, master registry |
| M3 | UI Gastronomy & Component Integration | `WineRegionDetail.jsx`, `WineRegionMap.jsx`, filter pills, color-coded pairings, polymorphic badges | M1, M2 | DONE | Color-coded cards, dynamic filter pills, polymorphic cru badges |
| M4 | Cartography & GeoJSON Boundaries | `wineRegionBoundaries.js` GeoJSON collections for all 9 target regions | M1, M2 | DONE | 87 GeoJSON polygon boundaries in RFC 7946 format |
| M5 | E2E Test Suite & Final Hardening | `test/test_world_wine_regions.js` (Tiers 1-5), `TEST_READY.md`, `npm run build` | M1, M2, M3, M4 | DONE | 5 passing test suites (211 + 180 + 3165 + 31 + 8 tests), clean Vite build |

## Interface Contracts
### Regional Dataset Module (`src/data/<region>Data.js`) ↔ `wineRegions.js`
- Export constants:
  - `<REGION>_SUBREGIONS`: Array of `{ id: string, name: string, appellations: string[], grapeVarieties: string[], soilTypes: string[], climate: string, description: string, coordinates: [lat, lng] }`
  - `<REGION>_GRAND_CRUS` / `<REGION>_CRUS`: Array of `{ id: string, name: string, subregion: string, dominantGrapes: string[], soilType: string, aspect?: string, elevation?: string, classification: string, badge?: string, coordinates: [lat, lng], profile: string }`
  - `<REGION>_PREMIER_CRUS` (optional where applicable): Array of Cru objects
  - `<REGION>_TECHNICAL_REGULATIONS`: Object with `{ geologyPedology: string, climatology: string, authorizedGrapes: Array<{ name: string, type: 'red'|'white'|'heritage', role: string, description: string }>, classificationHierarchy: Array<{ tier: string, description: string, requirements: string }>, vinificationTraditions: string, agingLaws: Array<{ category: string, minAging: string, oakRequirements: string, details: string }>, ancillaryAOCs: Array<{ name: string, type: string, description: string }> }`
  - `<REGION>_PRESTIGE_CUVEES` / `<REGION>_PRESTIGE_MONOPOLES`: Array of `{ name: string, producer: string, inauguralVintage?: string, subregion: string, composition: string, terroir: string, significance: string }`
  - `<REGION>_ICONIC_DOMAINES` / `<REGION>_BENCHMARK_ESTATES`: Array of `{ name: string, commune: string, specialty: string, benchmarkBottling: string, description: string }`
  - Food pairings attached to region object: Array of `{ dish: string, wineType: 'red' | 'white' | 'sparkling' | 'rose', pairingType: string, classicRegion: string, tastingNotes: string, recommendedGlassware: string, servingTemp: string, decanting: string, whyItWorks: string }`

### GeoJSON Boundaries (`src/data/wineRegionBoundaries.js`) ↔ `WineRegionMap.jsx`
- `WINE_REGION_BOUNDARIES[regionId]`: GeoJSON `FeatureCollection` where each feature is a `Feature` with `geometry` (`Polygon` or `MultiPolygon`, coordinates in `[lng, lat]`) and `properties` containing `id` (matching `sub.id`), `parentSubregionId`, `name`, `fillColor`, `strokeColor`.

### Gastronomy Taxonomy ↔ `WineRegionDetail.jsx`
- Filter pill options: `All`, `🍷 Red Wine` (`red`), `🥂 White Wine` (`white`), `🍾 Sparkling` (`sparkling`), `🌸 Rosé` (`rose`).
- Dynamic card header accents, sommelier service badges (Glassware, Serving Temp, Decanting), and flavor pairing rationale.

## Code Layout
- `src/data/wineRegions.js` (Master registry aggregator)
- `src/data/champagneData.js` (Champagne dataset)
- `src/data/burgundyData.js` (Burgundy dataset)
- `src/data/alsaceData.js` (Alsace dataset)
- `src/data/corsicaData.js` (Corsica dataset)
- `src/data/bordeauxData.js` (Bordeaux dataset)
- `src/data/rhoneData.js` (Rhône Valley dataset)
- `src/data/loireData.js` (Loire Valley dataset)
- `src/data/piedmontData.js` (Piedmont dataset)
- `src/data/tuscanyData.js` (Tuscany dataset)
- `src/data/californiaData.js` (California dataset)
- `src/data/oregonData.js` (Oregon dataset)
- `src/data/italyOtherData.js` (Italy Other dataset)
- `src/data/japanData.js` (Japan dataset)
- `src/data/wineRegionBoundaries.js` (Cartographic GeoJSON collections)
- `src/components/WineRegionDetail.jsx` (Sommelier regional learning & exploration UI)
- `src/components/WineRegionMap.jsx` (Interactive Leaflet cartographic map)
- `test/test_world_wine_regions.js` (Automated E2E multi-tier test suite)
- `test/adversarial_world_regions_stress.js` (Adversarial stress and query fuzzing suite)
