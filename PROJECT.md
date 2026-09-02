# Project: World Wine Regions Sommelier Elevation (All 17 Regions)

## Architecture
The application organizes world wine region datasets into modular files in `src/data/`, registered centrally in `src/data/wineRegions.js` (`WINE_REGIONS` object and `findWineRegion` query resolution engine), paired with GeoJSON boundary collections in `src/data/wineRegionBoundaries.js` (`WINE_REGION_BOUNDARIES`), and presented dynamically in `src/components/WineRegionDetail.jsx` and `src/components/WineRegionMap.jsx`.

### Master Schema Definition
Every wine region dataset adheres to the benchmark standard established by Champagne (`src/data/champagneData.js`) and Burgundy (`src/data/burgundyData.js`):
- `subRegions`: `id`, `name`, `district`, `lat`, `lng`, `terroir`, `focus`, `geology`, `dominantGrapes`, `description`, `microTerroirs[]`
- `grandCrus` / `premierCrus`: `id`, `name`, `subregionId` (mandatory FK), `subregion`, `district`, `lat`, `lng`, `areaHa`, `aocDecreeYear` / `decreeYear`, `elevationRange`, `aspect`, `dominantGrape`, `grapeRatio`, `wineType`, `soil`, `character`, `benchmarkProducers[]`
- `technicalRegulations`: `geology` (with `formations[]`), `grapes` (with `major[]`, `heritage[]`), `classification` (with `pyramid[]` or `tiers[]`), `vinification` / `pressing`, `aging`, `dosageTiers` / `sweetness`, `producerCodes` / `businessModels`, `ancillaryAocs`
- `prestigeCuvees` / `prestigeMonopoles`: `id`, `name`, `producer`, `type`, `status`, `debutVintage`, `grapeComposition`, `sourcing`, `winemaking`, `character`, `iconicStatus`
- `iconicDomaines` / `iconicGrowers`: `id`, `name`, `village` / `subregion`, `vigneron`, `philosophy`, `keyCuvees[]`
- `foodPairings`: 5 to 10 entries with `category`, `wineType` (strictly `'Red' | 'White' | 'Sparkling' | 'Rosé'`), `targetWine`, `dish`, `note`, `glassware`, `servingTemp` (with both °C and °F), `decanting`

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---|---|---|---|
| 1 | Master Validation & Invariant Suite | Comprehensive validation of 17 region invariants, schema completeness, and sommelier query resolution | M1 | Survey (Explorer 3) |
| 2 | Empirical Domain Validation Suite | 31+ sommelier CMS L3 curriculum rules across all 17 regions | M1 | Survey (Explorer 3) |
| 3 | Adversarial Stress & Integration Suite | Foreign key checks, coordinate bounds, and UI map cartographic integration | M1 | Survey (Explorer 3) |
| 4 | Germany Mosel & Rheingau Elevation | Complete Grosse Lagen (lat/lng, subregionId, soil), Devonian slate geology, Prädikat laws, 5+ pairings | M2 | Survey (Explorer 2) |
| 5 | Spain Rioja & Ribera Elevation | Complete Viñedos Singulares/Pagos (lat/lng, subregionId, soil), oak aging laws, Llicorella, 5+ pairings | M2 | Survey (Explorer 2) |
| 6 | Chile Maipo & Colchagua Elevation | Complete Puente Alto/Apalta crus (lat/lng, subregionId, soil), Andean katabatic cooling, Carménère, 5+ pairings | M2 | Survey (Explorer 2) |
| 7 | Australia Barossa & Margaret River Elevation | Complete Grand Cru blocks (lat/lng, subregionId, soil), 1843 pre-phylloxera vines, Gingin clone, 5+ pairings | M2 | Survey (Explorer 2) |
| 8 | Cartographic GeoJSON Boundary Alignment | Align boundary feature IDs with subregion IDs across Mosel, Rioja, Chile, Australia | M2 | Survey (Explorer 2) |
| 9 | Alsace Grand Crus Foreign Key Linking | Link all 51 Grand Crus with `subregionId: 'haut-rhin' \| 'bas-rhin'`, add prestige debut vintages | M3 | Survey (Explorer 2) |
| 10 | Corsica Benchmark Crus & Boundaries | Populate Corsica Grand/Benchmark Crus array with 9 AOCs + coordinates, add missing subregion boundaries | M3 | Survey (Explorer 2) |
| 11 | Oregon Food Pairing & Taxonomy Normalization | Expand pairings to 5+, eliminate compound `wineType`, verify nested AVAs | M3 | Survey (Explorer 2) |
| 12 | Italy Other Classification & Pairing Normalization | Normalize compound `wineType`, add structured classification pyramid for Etna/Amarone/Valtellina | M3 | Survey (Explorer 2) |
| 13 | Japan Chūbu Pairing Normalization & Boundaries | Normalize compound `wineType` to strictly `Sparkling` / `White`, add missing GeoJSON features | M3 | Survey (Explorer 2) |
| 14 | Champagne Food Pairings & Benchmark Parity | Expand pairings to 5–6 with Rosé Champagne pairing, maintain 3,177 assertion gold standard | M4 | Survey (Explorer 1 & 2) |
| 15 | Burgundy Prestige Monopoles Standard | Add debut vintages across all 12 prestige monopoles, maintain benchmark gold standard | M4 | Survey (Explorer 1 & 2) |
| 16 | Bordeaux 1855 & Sauternes Perfection | Ensure pairings note botrytis and Sauternes, verify all 5 1855 tiers detail | M4 | Survey (Explorer 2) |
| 17 | Rhône, Loire, Piedmont, Tuscany, California Parity | Fix Rhône `Rose` -> `Rosé`, verify Sancerre pairing notes, ensure glassware & °C/°F across all pairings | M4 | Survey (Explorer 2) |
| 18 | Full Test Suite Execution & Production Build | Execute all automated suites, green status across 100% of tests, zero build errors/warnings | M5 | Survey (Explorer 3) |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| M1 | Test Suite & Validation Infrastructure | `test/verify_all_17_regions.mjs`, `test/empirical_domain_validation_suite.test.mjs`, `test/adversarial_world_regions_stress.js`, `test/test_ui_gastronomy_cru_integration.js`, `test/test_world_wine_regions.js`, `package.json` | none | DONE |
| M2 | Major Gap Regions Elevation | `src/data/moselData.js`, `src/data/riojaData.js`, `src/data/chileData.js`, `src/data/australiaData.js`, `src/data/wineRegionBoundaries.js` | M1 | DONE |
| M3 | Partially Complete Regions Elevation | `src/data/alsaceData.js`, `src/data/corsicaData.js`, `src/data/oregonData.js`, `src/data/italyOtherData.js`, `src/data/japanData.js`, `src/data/wineRegionBoundaries.js` | M1 | DONE |
| M4 | Benchmark Regions Refinement & Normalization | `src/data/champagneData.js`, `src/data/burgundyData.js`, `src/data/bordeauxData.js`, `src/data/rhoneData.js`, `src/data/loireData.js`, `src/data/piedmontData.js`, `src/data/tuscanyData.js`, `src/data/californiaData.js`, `src/data/wineRegions.js` | M1 | DONE |
| M5 | Full Verification, Hardening & Final Gate Pass | Complete test run across all 17 regions, `npm run build`, Reviewer, Challenger, Forensic Auditor | M2, M3, M4 | DONE |

## Interface Contracts
### Regional Dataset ↔ Central Registry (`src/data/wineRegions.js`)
- Every regional dataset file exports named constants for subregions, crus, technicalRegulations, prestige cuvées, iconic domaines, and foodPairings.
- Master `WINE_REGIONS` dictionary aggregates these properties under each `regionId`.

### Regional Dataset ↔ Cartography (`src/data/wineRegionBoundaries.js`)
- Every Cru in `<REGION>_GRAND_CRUS` has a valid `subregionId` matching `subRegions[i].id`.
- `WINE_REGION_BOUNDARIES[regionId]` features have `id` matching corresponding `subRegions[i].id`.

### Gastronomy ↔ UI Filtering (`src/components/WineRegionDetail.jsx`)
- `foodPairings[i].wineType` is strictly one of `'Red'`, `'White'`, `'Sparkling'`, `'Rosé'`.
- `servingTemp` includes both Celsius and Fahrenheit values (e.g. `"8–10°C (46–50°F)"`).

## Code Layout
- `src/data/` — Regional wine data modules and central registry
- `src/components/` — React UI components (`WineRegionDetail.jsx`, `WineRegionMap.jsx`)
- `test/` — Validation test suites
