# Project: Wine Region Encyclopedia Expansion (22 Regions)

## Architecture
The application organizes world wine region datasets into modular files in `src/data/`, registered centrally in `src/data/wineRegions.js` (`WINE_REGIONS` object and `findWineRegion` query resolution engine), paired with GeoJSON boundary collections in `src/data/wineRegionBoundaries.js` (`WINE_REGION_BOUNDARIES` and `WINE_REGION_OUTLINES`), and presented dynamically in `src/components/WineRegionDetail.jsx` and `src/components/WineRegionMap.jsx`.

### Master Schema Definition
Every wine region dataset adheres to the benchmark standard established by Champagne (`src/data/champagneData.js`) and Burgundy (`src/data/burgundyData.js`):
- `subRegions`: `id`, `name`, `district`, `lat`, `lng`, `terroir`, `focus`, `geology`, `dominantGrapes`, `description`, `microTerroirs[]`
- `grandCrus` / `premierCrus`: `id`, `name`, `subregionId` (mandatory FK), `subregion`, `district`, `lat`, `lng`, `areaHa`, `aocDecreeYear` / `decreeYear`, `elevationRange`, `aspect`, `dominantGrape`, `grapeRatio`, `wineType`, `soil`, `character`, `benchmarkProducers[]`
- `technicalRegulations`: `geology` (with `formations[]`), `grapes` (with `major[]`, `heritage[]`), `classification` (with `pyramid[]` or `tiers[]`), `vinification` / `pressing`, `aging`, `dosageTiers` / `sweetness`, `producerCodes` / `businessModels`, `ancillaryAocs`
- `prestigeCuvees` / `prestigeMonopoles`: `id`, `name`, `producer`, `type`, `status`, `debutVintage`, `grapeComposition`, `sourcing`, `winemaking`, `character`, `iconicStatus`
- `iconicDomaines` / `iconicGrowers`: `id`, `name`, `village` / `subregion`, `vigneron`, `philosophy`, `keyCuvees[]`
- `foodPairings`: 5 to 10 entries with `category`, `wineType` (strictly `'Red' | 'White' | 'Sparkling' | 'Rosé'`), `targetWine`, `dish`, `note`, `glassware`, `servingTemp` (with both °C and °F within ±4°F consistency), `decanting`
- `structure`: Sensory metrics (0-10 scales for body, acidity, tannin, sweetness, alcohol ABV 5-25, agingPotential)
- `cartography`: Valid GeoJSON RFC 7946 coordinates `[lng, lat]`, linear rings closed, feature IDs matching subregion IDs

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---|---|---|---|
| 1 | Standalone Beaujolais Dataset & Schema | Complete standalone module `beaujolais` with 10 Crus, pink granite/gore pedology, blue volcanic diorite, manganese, Gamay ampelography, semi-carbonic vinification, Gang of Four, lieu-dits, cuvées, pairings | M1 | ORIGINAL_REQUEST §R1 |
| 2 | Burgundy Decoupling & Cleanup | Decouple Beaujolais from Burgundy dataset, aliases, query routing (`findWineRegion`), producer map, and boundary collections (`maconnais-beaujolais` removal) | M1 | ORIGINAL_REQUEST §R1 |
| 3 | Beaujolais Cartography & Boundaries | GeoJSON subregion polygons for all 10 Crus + Villages + Bas-Beaujolais and macro outline with centered typography | M1 | ORIGINAL_REQUEST §R1 |
| 4 | Mendoza viticulture dataset | Complete standalone module `argentina-mendoza` with Uco Valley, Luján de Cuyo, Maipú, San Rafael, diurnal shift, Zonda, acequia irrigation, caliche soils, Malbec massale, cult estates, pairings | M2 | ORIGINAL_REQUEST §R2 |
| 5 | Mendoza Cartography & Boundaries | GeoJSON polygons for Uco Valley, Luján de Cuyo, Maipú, San Rafael, macro outline, center `[-33.45, -68.85]` | M2 | ORIGINAL_REQUEST §R2 |
| 6 | Rías Baixas & Atlantic Galicia dataset | Expand Spanish module (`spain-rioja`) with all 5 Rías Baixas sub-zones, xabre granite pedology, pergola/emparrado, sobre lías, benchmark Albariño cuvées, Galician pairings | M3 | ORIGINAL_REQUEST §R3 |
| 7 | Rías Baixas Cartography & Boundaries | Expand Spanish GeoJSON boundary collection with 5 Rías Baixas sub-zone polygons, western boundary expansion (lngMin -10), map pins, aliases | M3 | ORIGINAL_REQUEST §R3 |
| 8 | South Africa Western Cape dataset & boundaries | Complete module `south-africa` with Stellenbosch, Swartland, Walker Bay, Constantia, Paardeberg granite, old bush vines, cult producers, pairings, GeoJSON polygons | M4 | ORIGINAL_REQUEST §R4 |
| 9 | New Zealand dataset & boundaries | Complete module `new-zealand` with Marlborough, Central Otago, Hawke's Bay, Martinborough, greywacke soils, cult producers, pairings, GeoJSON polygons | M4 | ORIGINAL_REQUEST §R4 |
| 10 | Portugal dataset & boundaries | Complete module `portugal` with Douro Valley, Dão, Alentejo, Vinho Verde, vertical schist/xisto terraces, cult producers, pairings, GeoJSON polygons | M4 | ORIGINAL_REQUEST §R4 |
| 11 | Query engine & search routing expansion | Update `findWineRegion` to route Beaujolais independently, add country mappings for Argentina, South Africa, New Zealand, Portugal, prevent substring collisions | M1, M2, M3, M4 | ORIGINAL_REQUEST §R5 |
| 12 | Test Suite Modernization (22 Regions) | Upgrade `verify_all_17_regions.mjs` (or `verify_all_22_regions.mjs`), `empirical_domain_validation_suite.test.mjs`, and `adversarial_world_regions_stress.js` to support 22 regions | E2E Testing Track | ORIGINAL_REQUEST §R5 |
| 13 | Comprehensive E2E Tier 1-4 Test Suite | Opaque-box requirement-driven tests for all 22 regions covering features, boundaries, combinations, and real-world workloads | E2E Testing Track | Dual Track Protocol |
| 14 | Global Catalog Harmonization & Quality Elevating | Ensure all 22 regions meet gold standard schema invariants, cellar inventory linking, clean Vite build, zero errors | M5 | ORIGINAL_REQUEST §R5 |
| 15 | Adversarial Coverage Hardening (Tier 5) & Audit | White-box adversarial testing and Forensic Audit verification | M5 | Dual Track Protocol |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| M1 | Standalone Beaujolais & Burgundy Decoupling | `src/data/beaujolaisData.js`, `src/data/burgundyData.js`, `src/data/wineRegions.js`, `src/data/wineRegionBoundaries.js`, `src/components/WineRegionDetail.jsx` | none | DONE |
| M2 | Mendoza & Argentine Viticulture Module | `src/data/argentinaMendozaData.js`, `src/data/wineRegions.js`, `src/data/wineRegionBoundaries.js` | M1 | IN_PROGRESS |
| M3 | Rías Baixas & Atlantic Spain Deep Integration | `src/data/spainData.js`, `src/data/wineRegions.js`, `src/data/wineRegionBoundaries.js` | M1 | PLANNED |
| M4 | New Global Titans: South Africa, New Zealand & Portugal | `src/data/southAfricaData.js`, `src/data/newZealandData.js`, `src/data/portugalData.js`, `src/data/wineRegions.js`, `src/data/wineRegionBoundaries.js` | M1 | PLANNED |
| M5 | Final Milestone: Full Catalog Harmonization, E2E Pass & Hardening | All regional data files, `npm test`, `npm run build`, Reviewers, Challengers, Forensic Auditor | M1, M2, M3, M4, TEST_READY | PLANNED |

## E2E Testing Track
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| T1 | Test Suite Modernization & Infrastructure | `test/verify_all_17_regions.mjs` -> `test/verify_all_regions.mjs` or support 22 regions, `test/empirical_domain_validation_suite.test.mjs`, `test/adversarial_world_regions_stress.js`, `package.json` | none | IN_PROGRESS |
| T2 | Tier 1-4 Test Case Generation | Category-partition, boundary, pairwise, and real-world application tests for 22 regions -> `TEST_READY.md` | T1 | PLANNED |

## Interface Contracts
### Regional Dataset ↔ Central Registry (`src/data/wineRegions.js`)
- Every regional dataset file exports named constants for subregions, crus, technicalRegulations, prestige cuvées, iconic domaines, and foodPairings.
- Master `WINE_REGIONS` dictionary aggregates these properties under each `regionId`.
- Country query routing maps:
  - Argentina -> `argentina-mendoza`
  - South Africa -> `south-africa`
  - New Zealand -> `new-zealand`
  - Portugal -> `portugal`
  - France + 'beaujolais' -> `beaujolais` (decoupled from `burgundy`)

### Regional Dataset ↔ Cartography (`src/data/wineRegionBoundaries.js`)
- Every Cru in `<REGION>_GRAND_CRUS` has a valid `subregionId` matching `subRegions[i].id`.
- `WINE_REGION_BOUNDARIES[regionId]` features have `id` matching corresponding `subRegions[i].id`.
- Coordinates strictly RFC 7946 `[longitude, latitude]` with closed linear rings (`first === last`).

### Gastronomy ↔ UI Filtering (`src/components/WineRegionDetail.jsx`)
- `foodPairings[i].wineType` is strictly one of `'Red'`, `'White'`, `'Sparkling'`, `'Rosé'`.
- `servingTemp` includes both Celsius and Fahrenheit values with `Math.abs(calcF - fActual) <= 4`.

## Code Layout
- `src/data/` — Regional wine data modules and central registry
- `src/components/` — React UI components (`WineRegionDetail.jsx`, `WineRegionMap.jsx`)
- `test/` — Validation test suites
