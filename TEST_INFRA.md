# E2E Test Infra: All 17 Wine Regions Elevation

## Test Philosophy
- Requirement-driven, opaque-box and domain-semantic validation across all 17 fine wine regions.
- Methodology: Category-Partition + Boundary Value Analysis + Pairwise Combinatorial + Empirical CMS L3 Sommelier Syllabus.

## Feature Inventory & Test Coverage Goals
| # | Feature | Source | Tier 1 (Invariants) | Tier 2 (Boundaries/FKs) | Tier 3 (Domain/CMS L3) | Tier 4 (Queries & UI) |
|---|---|---|:---:|:---:|:---:|:---:|
| 1 | Champagne Benchmark | ORIGINAL_REQUEST §R1 | 7 Subregs, 17 GC, 16 PC | 0-3g/L Brut Nature, 4000kg marc | 7 Dosage, 7 CIVC, 12 Prestige | 5+ Pairings (inc Rosé) |
| 2 | Burgundy Benchmark | ORIGINAL_REQUEST §R1 | 6 Subregs, 40 GC, 41 PC | 228L Pièce, Bathonian/Bajocian | UNESCO climats, 12 Monopoles | 9 Pairings |
| 3 | Bordeaux Elevation | ORIGINAL_REQUEST §R1 | 6 Subregs, 26 GC, 11 PC | Günzian gravels, 225L Barriques | 1855 Classif, 10 Estates | 6 Pairings |
| 4 | Rhône Elevation | ORIGINAL_REQUEST §R1 | 2 Subregs, 14 GC | Granite vs Galets roulés | Syrah vs 13 CdP Grapes | 7 Pairings (inc Rosé) |
| 5 | Loire Valley Elevation | ORIGINAL_REQUEST §R1 | 4 Subregs, 8 GC, 4 PC | Tuffeau vs Silex vs Kimmeridgian | Chenin / Cab Franc / Sancerre | 5 Pairings |
| 6 | Piedmont Elevation | ORIGINAL_REQUEST §R1 | 5 Subregs, 15 MGAs | Tortonian vs Serravallian | 181 Barolo & 66 Barbaresco MGAs | 5 Pairings |
| 7 | Tuscany Elevation | ORIGINAL_REQUEST §R1 | 5 Subregs, 11 UGAs | Galestro vs Alberese | 11 CC UGAs, Gran Selezione 90% | 5 Pairings |
| 8 | California Elevation | ORIGINAL_REQUEST §R1 | 7 Subregs, 12 Crus | Fog inversion, Franciscan | 16 Napa AVAs, 11 Cult Estates | 5 Pairings |
| 9 | Oregon Elevation | ORIGINAL_REQUEST §R1 | 7 Subregs, 5 Crus | Jory vs Willakenzie | 11 Willamette AVAs, 90% law | 5 Pairings (strict types) |
| 10 | Alsace Elevation | ORIGINAL_REQUEST §R1 | 3 Subregs, 51 GC | 13 Bedrock formations | 51 GC subregionId linking, VT/SGN | 7 Pairings |
| 11 | Corsica Elevation | ORIGINAL_REQUEST §R1 | 8 Subregs, 9 Crus | Hercynian granite vs Schist | 9 Cru AOCs & Single Vineyards | 5 Pairings |
| 12 | Italy Other Elevation | ORIGINAL_REQUEST §R1 | 6 Subregs, 5 Crus | Etna tephra, Ponca flysch | Appassimento, Taurasi, Valtellina | 5 Pairings (strict types) |
| 13 | Japan Chūbu Elevation | ORIGINAL_REQUEST §R1 | 4 Subregs, 5 Crus | Kuroboku ash, Tanadukuri | GI Yamanashi/Nagano, Koshu Sur Lie | 5 Pairings (strict types) |
| 14 | Germany Mosel Elevation | ORIGINAL_REQUEST §R1 | 4 Subregs, 7 Grosse Lagen | Blauschiefer / Rotschiefer | Prädikatswein, VDP GG, subregionId | 5 Pairings |
| 15 | Spain Rioja Elevation | ORIGINAL_REQUEST §R1 | 4 Subregs, 5 Viñedos Sing | Llicorella, Arcillo-calcaire | Crianza/Reserva/Gran Reserva oak | 5 Pairings (inc Jamón note) |
| 16 | Chile Maipo Elevation | ORIGINAL_REQUEST §R1 | 4 Subregs, 4 Crus | Maipo gravels, Katabatic cooling | Carménère pyrazine, Puente Alto | 5 Pairings |
| 17 | Australia Elevation | ORIGINAL_REQUEST §R1 | 5 Subregs, 4 Single Vyds | Pre-Cambrian ironstone, Terra Rossa | 1843 Old Vines, Gingin Chardonnay | 5 Pairings |

## Test Architecture
- Test runner commands:
  - `node test/verify_all_17_regions.mjs`
  - `node test/empirical_domain_validation_suite.test.mjs`
  - `node test/adversarial_world_regions_stress.js`
  - `node test/test_ui_gastronomy_cru_integration.js`
  - `node test/test_world_wine_regions.js`
  - `npm run build`
- All tests must pass with exit code 0.
