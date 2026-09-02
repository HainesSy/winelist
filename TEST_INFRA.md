# E2E Test Infra: World Wine Regions Sommelier System

## Test Philosophy
- **Opaque-box & Requirement-driven**: Tests derive strictly from `ORIGINAL_REQUEST.md` and sommelier domain standards (CMS Level 3 Advanced Sommelier), independent of implementation internals.
- **Methodology**: Systematic 5-tier testing combining Category-Partition, Boundary Value Analysis (BVA), Pairwise Combinatorial Verification, Real-World Sommelier Exam Scenarios, and White-Box Adversarial Hardening.
- **Zero-Tolerance Quality**: Every feature in `PROJECT.md § Feature Inventory` has dedicated automated tests.

## Feature Inventory & Test Mapping
| # | Feature | Requirement Source | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---------|-------------------|:------:|:------:|:------:|:------:|
| 1 | Bordeaux Dataset & 1855 Classifications | ORIGINAL_REQUEST §R1 | ≥5 | ≥5 | ✓ | ✓ |
| 2 | Rhône Valley Dataset (North & South Crus) | ORIGINAL_REQUEST §R1 | ≥5 | ≥5 | ✓ | ✓ |
| 3 | Loire Valley Dataset (4 Sectors) | ORIGINAL_REQUEST §R1 | ≥5 | ≥5 | ✓ | ✓ |
| 4 | Piedmont Dataset (Barolo/Barbaresco MGAs) | ORIGINAL_REQUEST §R1 | ≥5 | ≥5 | ✓ | ✓ |
| 5 | Tuscany Dataset (Chianti UGAs & Brunello) | ORIGINAL_REQUEST §R1 | ≥5 | ≥5 | ✓ | ✓ |
| 6 | California Dataset (Napa/Sonoma/Central Coast) | ORIGINAL_REQUEST §R2 | ≥5 | ≥5 | ✓ | ✓ |
| 7 | Oregon Dataset (Willamette 11 AVAs) | ORIGINAL_REQUEST §R2 | ≥5 | ≥5 | ✓ | ✓ |
| 8 | Italy Other Dataset (Veneto/Sicily/Campania) | ORIGINAL_REQUEST §R2 | ≥5 | ≥5 | ✓ | ✓ |
| 9 | Japan Dataset (GI Yamanashi & GI Nagano) | ORIGINAL_REQUEST §R2 | ≥5 | ≥5 | ✓ | ✓ |
| 10 | Master Registry & Node ESM Resolution | ORIGINAL_REQUEST §R1, R2 | ≥5 | ≥5 | ✓ | ✓ |
| 11 | Color-Coded Pairings & Sommelier Taxonomy | ORIGINAL_REQUEST §R3 | ≥5 | ≥5 | ✓ | ✓ |
| 12 | Dynamic UI Polymorphic Badges & Cards | ORIGINAL_REQUEST §R3 | ≥5 | ≥5 | ✓ | ✓ |
| 13 | GeoJSON Cartography & Boundary Polygons | ORIGINAL_REQUEST §R4 | ≥5 | ≥5 | ✓ | ✓ |

## Test Architecture
- **Test Runner**: Node.js ESM test runner (`node test/test_world_wine_regions.js` and `npm test`).
- **Pass/Fail Semantics**: Process exits with code 0 on 100% assertions passing; non-zero exit code and detailed failure summary on any assertion failure.
- **Test Files**:
  - `test/test_world_wine_regions.js` (comprehensive multi-tier test suite)
- **Directory Layout**:
  - `src/data/` (data modules)
  - `src/components/` (React UI components)
  - `test/` (automated test suites)

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Complexity |
|---|----------|--------------------|------------|
| 1 | CMS L3 Barolo & Barbaresco MGA Terroir Quiz | Piedmont MGAs, soils, aging laws, biotypes | High |
| 2 | Bordeaux 1855 & Right Bank Sommelier Cellar Pairing | Bordeaux 1855 tiers, Pomerol plateaus, food pairings | High |
| 3 | Napa Valley Valley Floor vs. Mountain AVA Comparative Tasting | California AVAs, elevations, soils, cult estates | High |
| 4 | Loire Valley Silex vs. Kimmeridgian & Chenin Blanc Acid Balancing | Loire sectors, soils, pairing service temperatures | High |
| 5 | Etna Contrade & Chianti Classico UGA Terroir Classification | Italy Other & Tuscany UGAs, volcanic soils, Galestro | High |
| 6 | Global Sparkler & High-Acid Pairing Flight (Champagne, Alta Langa, Yamanashi) | Champagne, Piedmont, Japan gastronomy pairings | High |

## Coverage Thresholds
- **Tier 1 (Feature Coverage)**: ≥5 tests per region/feature (≥70 tests minimum).
- **Tier 2 (Boundary & Corner Cases)**: ≥5 tests per feature (≥65 tests minimum).
- **Tier 3 (Cross-Feature Combinations)**: ≥20 tests verifying relational mappings (boundaries ↔ subregions ↔ crus ↔ master registry).
- **Tier 4 (Real-World Sommelier Scenarios)**: ≥6 comprehensive application workflows.
- **Tier 5 (Adversarial Coverage Hardening)**: White-box stress tests, schema compliance, regex fuzzing, and build verification.
- **Total Suite Minimum**: ≥160 automated test assertions.
