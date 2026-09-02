# Original User Request

## Initial Request — 2026-09-02T05:59:34Z

Audit and elevate all 17 world wine regions in the application to match or exceed the technical depth, geological rigor, ampelographic completeness, and gastronomic precision of the benchmark Champagne and Burgundy modules.

Key Requirements:
1. R1. Deep Quality & Completeness Parity with Champagne:
   - Ensure every wine region dataset features full sommelier-grade technical architecture:
     - Subregions & Districts: Exact coordinates, official appellations/DOCGs/AVAs, microclimates, thermal diurnal dynamics, and river/ocean corridor influences.
     - Crus, Climats & Single Vineyards: Comprehensive catalogs of Grand Crus, Premier Crus, MGAs (Piedmont), UGAs (Chianti Classico), Viñedos Singulares (Spain), Grosse Lagen (Germany), and nested AVAs (Napa/Sonoma/Willamette) with cadastral hectares, decree dates, elevation ranges, slope aspects, bedrock pedology, and benchmark producers.
     - Technical Viticulture & Regulations: Detailed geological stratigraphy (rock formations, geological eras, fossils, soil pedology), ampelography (percentages, clones, indigenous biotypes, historical heritage crossings), yield limits, and classification law frameworks.
     - Prestige Cuvées & Monopoles: Landmark bottlings, debut vintages, cépage ratios, prestige status, and flavor profiles.
     - Benchmark Cult Domaines & Producers: Vignerons, viticultural philosophy (organic/biodynamic/traditional), and key cuvées.
2. R2. Sommelier Gastronomy & Precision Service Guidelines:
   - Provide 5 to 10 structured food pairings per region categorized strictly into `Red`, `White`, `Sparkling`, and `Rosé`.
   - Include specific target wines, recommended glassware, precise serving temperatures (°C / °F), decanting windows, and flavor synergy rationales for every pairing.
3. R3. Automated Test Suite & Cartographic Validation:
   - Maintain and expand automated validation suites (`test/verify_all_17_regions.mjs` and `test/empirical_domain_validation_suite.test.mjs`) ensuring zero missing properties, 100% search alias resolution, valid GeoJSON polygons, and clean Vite builds (`npm run build`).

Acceptance Criteria:
- All 17 regions contain complete `subRegions`, `grandCrus` / `premierCrus`, `technicalRegulations` (with `geology`, `grapes`, `classification`), `prestigeCuvees` / `prestigeMonopoles`, `iconicDomaines` / `iconicGrowers`, and `foodPairings`.
- Every food pairing entry contains `wineType` (`Red`, `White`, `Sparkling`, or `Rosé`), `targetWine`, `dish`, `note`, `glassware`, and `servingTemp`.
- Zero build warnings or errors on `npm run build`.
- Automated domain test suite passes with 100% green status across all regions.
