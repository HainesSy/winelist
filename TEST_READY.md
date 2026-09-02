# E2E Test Suite Ready

## Test Runner
- Command: `npm test`
  - Sub-commands:
    - `node test/verify_all_17_regions.mjs`
    - `node test/empirical_domain_validation_suite.test.mjs`
    - `node test/adversarial_world_regions_stress.js`
    - `node test/test_world_wine_regions.js`
    - `node test/test_ui_gastronomy_cru_integration.js`
    - `node test/validate-champagne-data.js`
- Build Command: `npm run build`
- Expected: All tests pass with exit code 0 and zero build errors.

## Coverage Summary
| Tier | Count | Description |
|------|------:|-------------|
| 1. Feature & Schema Coverage | 6,833+ | Top-level metadata, subregions, crus, tech regs, prestige cuvées, iconic domaines across all 17 regions |
| 2. Boundary, Coordinates & FKs | 223+ | Centroids, bounding boxes, numeric lat/lng, subregionId FK relationships, GeoJSON RFC 7946 closed rings |
| 3. Domain & Sommelier Rules (CMS L3) | 62 tests (19 suites) | Barolo/Barbaresco MGAs, Chianti UGAs, 1855 Bordeaux, Champagne CIVC, Alsace 51 GCs, Mosel slate, Rioja oak, Chile Maipo, Australia Old Vines, etc. |
| 4. Real-World Gastronomy & Fuzz Queries | 100+ pairings, 2,000+ fuzz | 5–10 pairings per region (strictly Red, White, Sparkling, Rosé, glassware, dual °C/°F, decanting), 70+ canonical queries |
| **Total Assertions** | **>10,000** | **100% Pass Rate** |

## Feature Checklist
| Feature | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|:---:|:---:|:---:|:---:|
| Champagne | ✓ | ✓ | ✓ | ✓ (5 pairings) |
| Burgundy | ✓ | ✓ | ✓ | ✓ (9 pairings) |
| Bordeaux | ✓ | ✓ | ✓ | ✓ (6 pairings) |
| Rhône Valley | ✓ | ✓ | ✓ | ✓ (7 pairings) |
| Loire Valley | ✓ | ✓ | ✓ | ✓ (5 pairings) |
| Piedmont | ✓ | ✓ | ✓ | ✓ (5 pairings) |
| Tuscany | ✓ | ✓ | ✓ | ✓ (5 pairings) |
| California | ✓ | ✓ | ✓ | ✓ (5 pairings) |
| Oregon | ✓ | ✓ | ✓ | ✓ (6 pairings) |
| Alsace | ✓ | ✓ | ✓ | ✓ (7 pairings) |
| Corsica | ✓ | ✓ | ✓ | ✓ (5 pairings) |
| Italy Other | ✓ | ✓ | ✓ | ✓ (6 pairings) |
| Japan Chūbu | ✓ | ✓ | ✓ | ✓ (6 pairings) |
| Germany Mosel | ✓ | ✓ | ✓ | ✓ (6 pairings) |
| Spain Rioja | ✓ | ✓ | ✓ | ✓ (6 pairings) |
| Chile Maipo | ✓ | ✓ | ✓ | ✓ (6 pairings) |
| Australia | ✓ | ✓ | ✓ | ✓ (6 pairings) |
