# E2E Test Infra: Wine Region Encyclopedia Expansion (22 Regions)

## Test Philosophy
- Opaque-box, requirement-driven. Derived from `ORIGINAL_REQUEST.md` and sommelier standards.
- Methodology: Category-Partition + Boundary Value Analysis (BVA) + Pairwise Interaction + Real-World Sommelier Scenarios.

## Feature Inventory & Test Matrix
| # | Feature | Source (Requirement) | Tier 1 (Feature) | Tier 2 (Boundary) | Tier 3 (Pairwise) | Tier 4 (Real-World) |
|---|---|---|:---:|:---:|:---:|:---:|
| 1 | Standalone Beaujolais Dataset | ORIGINAL_REQUEST §R1 | 5 | 5 | ✓ | ✓ |
| 2 | Burgundy Decoupling & Integrity | ORIGINAL_REQUEST §R1 | 5 | 5 | ✓ | ✓ |
| 3 | Beaujolais 10 Crus & Cartography | ORIGINAL_REQUEST §R1 | 5 | 5 | ✓ | ✓ |
| 4 | Mendoza Viticulture & High Altitude | ORIGINAL_REQUEST §R2 | 5 | 5 | ✓ | ✓ |
| 5 | Mendoza Subregions & Cartography | ORIGINAL_REQUEST §R2 | 5 | 5 | ✓ | ✓ |
| 6 | Rías Baixas & Atlantic Spain Terroir | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ | ✓ |
| 7 | Rías Baixas 5 Sub-Zones & Cartography | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ | ✓ |
| 8 | South Africa Western Cape Dataset & Geo | ORIGINAL_REQUEST §R4 | 5 | 5 | ✓ | ✓ |
| 9 | New Zealand Dataset & Geo | ORIGINAL_REQUEST §R4 | 5 | 5 | ✓ | ✓ |
| 10 | Portugal (Douro/Dão/Alentejo/Vinho Verde) | ORIGINAL_REQUEST §R4 | 5 | 5 | ✓ | ✓ |
| 11 | Sommelier Gastronomy & Temperature | ORIGINAL_REQUEST §R1-R4 | 5 | 5 | ✓ | ✓ |
| 12 | Query Resolution & Alias Protection | ORIGINAL_REQUEST §R5 | 5 | 5 | ✓ | ✓ |
| 13 | GeoJSON RFC 7946 Polygon Invariants | ORIGINAL_REQUEST §R5 | 5 | 5 | ✓ | ✓ |
| 14 | Cellar Bottle Count Integration | ORIGINAL_REQUEST §R5 | 5 | 5 | ✓ | ✓ |

## Test Architecture
- **Runners**:
  - `node test/verify_all_17_regions.mjs` (or upgraded to all 22 regions)
  - `node test/empirical_domain_validation_suite.test.mjs`
  - `node test/adversarial_world_regions_stress.js`
  - `node test/e2e_expansion_validation.test.mjs` (new comprehensive E2E suite for 22 regions)
- **Invocation**: `npm test` executes the complete test suite.
- **Pass/Fail Semantics**: 0 exit code, 100% assertions green, zero uncaught errors.

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Complexity |
|---|---|---|---|
| 1 | Beaujolais Decoupling & Sommelier Query Resolution | F1, F2, F3, F12 | High |
| 2 | High-Altitude Andean Terroir & Cult Malbec Selection | F4, F5, F11, F14 | High |
| 3 | Atlantic Galicia Seafood Pairing & Xabre Pedology | F6, F7, F11 | High |
| 4 | Cape Old Bush Vine & South African Elevation | F8, F11, F13 | High |
| 5 | New Zealand Southern Latitudes & Greywacke Soils | F9, F11, F13 | High |
| 6 | Portuguese Schist Terraces & Fortified/Still Diversity | F10, F11, F13 | High |

## Coverage Thresholds
- Tier 1: ≥5 per feature (≥70 tests)
- Tier 2: ≥5 per feature (≥70 tests)
- Tier 3: Pairwise coverage across all major region features (≥15 tests)
- Tier 4: ≥6 realistic sommelier application scenarios
- **Total: >160 comprehensive verification assertions**
