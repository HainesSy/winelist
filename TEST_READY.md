# TEST READY — Milestone 3: Champagne CMS Level 3 Sommelier Learning & Exploration System

**Test Suite Version**: 1.0.0  
**Test Suite Path**: `test/champagne-cms-l3-e2e.test.mjs`  
**Authoritative Standards**: Court of Master Sommeliers (CMS) Level 3 / Master Sommelier Syllabus, Comité Champagne (CIVC), INAO Cahier des Charges AOC Champagne  
**Execution Command**: `node test/champagne-cms-l3-e2e.test.mjs`  
**Build Verification**: `npm run build` (Clean 0-error Vite production build)

---

## 1. Test Execution Summary

```
================================================================
CHAMPAGNE CMS LEVEL 3 SOMMELIER E2E TEST SUMMARY
================================================================
  Tier 1 (Feature Coverage):           100 / 100 Passed
    - F01_GrandCrus             : 7 / 7 Passed
    - F02_Subregions            : 6 / 6 Passed
    - F03_PremierCrus           : 6 / 6 Passed
    - F04_Geology               : 6 / 6 Passed
    - F05_Grapes                : 7 / 7 Passed
    - F06_Pressing              : 6 / 6 Passed
    - F07_Aging                 : 6 / 6 Passed
    - F08_Dosage                : 6 / 6 Passed
    - F09_ProducerCodes         : 6 / 6 Passed
    - F10_AncillaryAocs         : 5 / 5 Passed
    - F11_PrestigeAndGrowers    : 6 / 6 Passed
    - F12_Cartography           : 5 / 5 Passed
    - F13_CruExplorer           : 5 / 5 Passed
    - F14_TechCards             : 6 / 6 Passed
    - F15_CellarMatcher         : 7 / 7 Passed
    - F16_DesignSystem          : 5 / 5 Passed
    - F17_Build                 : 5 / 5 Passed
  Tier 2 (Boundary & Corner Cases):    19 / 19 Passed
  Tier 3 (Cross-Feature Combinations): 12 / 12 Passed
  Tier 4 (Real-World Somm Scenarios):  10 / 10 Passed
----------------------------------------------------------------
  OVERALL TOTAL:                       141 / 141 PASSED (0 FAILED)
================================================================
```

---

## 2. 4-Tier Test Architecture Breakdown

### Tier 1: Feature Coverage (100 Tests across 17 Inventoried Features — >=5 tests per feature)
1. **F01 — 17 Grand Crus Catalog (7 tests)**:
   - Full 17-commune inventory count and échelle rating verification (100%).
   - Montagne de Reims 9 Grand Crus exact ID and subregion mapping.
   - Vallée de la Marne 2 Grand Crus (Aÿ & Tours-sur-Marne).
   - Côte des Blancs 6 Grand Crus (Avize, Chouilly, Cramant, Le Mesnil-sur-Oger, Oger, Oiry).
   - GPS coordinates bounded strictly within Champagne viticultural boundaries.
   - Complete technical metadata verification (aspect, soil, sensory character, benchmark producers, iconic vineyards).
   - Asymmetric Grand Cru commune rules (Tours-sur-Marne GC for PN only; Chouilly GC for Chardonnay only).

2. **F02 — 7 Subregions & Micro-Terroirs (6 tests)**:
   - All 7 subregions verified (Montagne de Reims, Vallée de la Marne, Côte des Blancs, Côte de Sézanne, Côte des Bar, Coteaux Sud d'Épernay, Vitryat).
   - Montagne de Reims 4 micro-zones (Grande Montagne, Monts de Berne, Massif de Saint-Thierry, Vesle & Ardre).
   - Vallée de la Marne 4 micro-zones (Grande Vallée, Rive Droite, Rive Gauche, Confluence/Marne Ouest).
   - Côte des Blancs 4 micro-zones and Belemnite chalk escarpment.
   - Côte des Bar Kimmeridgian marls, Exogyra virgula fossils, Barséquanais and Bar-sur-Aubois.
   - Coteaux Sud d'Épernay silex/meulière and Vitryat Turonian chalk.

3. **F03 — 16 Premier Crus Catalog (6 tests)**:
   - Full 16-commune inventory count with 90%–99% échelle scale adherence.
   - 99% Échelle top Premier Crus (Mareuil-sur-Aÿ, Tauxières-Mutry, Bisseuil).
   - 95% Échelle Premier Crus (Vertus, Trépail, Villers-Marmery, Dizy, Cuis).
   - 94%, 93%, and 90% Échelle Premier Crus (Chigny, Rilly, Ludes, Hautvillers, Cumières, Pierry, Écueil, Vrigny).
   - GPS coordinates, aspect, soils, character, and benchmark producers for every Premier Cru.

4. **F04 — Geology & Soils Stratigraphy (6 tests)**:
   - All 5 primary formations verified (Belemnite Chalk, Micraster Chalk, Kimmeridgian Marl, Sparnacian Clay, Quaternary Alluvium).
   - Belemnitella quadrata fossil, Upper Cretaceous / Campanian era, and 35–40% porosity.
   - Micraster urchin fossils and plain formations.
   - Exogyra virgula oyster fossils and Upper Jurassic Kimmeridgian layers in Aube.
   - Sparnacian Lower Eocene clays retaining water for Meunier in the Marne.
   - Quaternary silts and river gravels along the Marne terraces.

5. **F05 — 7 Authorized Grape Varieties (7 tests)**:
   - 3 Major varieties (Pinot Noir 38%, Chardonnay 31%, Meunier 31%) summing to 100%.
   - 4 Heritage varieties (Pinot Blanc / Blanc Vrai, Arbane, Petit Meslier, Pinot Gris / Fromenteau).
   - Aube epicenter and profiles for Pinot Blanc and Arbane.
   - Acid profiles and synonyms for Petit Meslier and Fromenteau.
   - Laherte Frères "Les 7" 100% co-planted complantée parcel in Chavot-Courcourt.
   - Blanc de Blancs vs Blanc de Noirs legal terminology.
   - Benchmark single-variety cuvées for major and heritage grapes.

6. **F06 — CIVC Pressing & Yield Regulations (6 tests)**:
   - Legal Marc standard: 4,000 kg whole-cluster grapes without destemming.
   - Maximum permitted AOC must extraction yield: exactly 63.75% (2,550 L / 4,000 kg).
   - La Cuvée first pressing: exactly 2,050 L (10.25 pièces of 205 L).
   - La Taille second pressing: exactly 500 L (2.5 pièces of 205 L).
   - Fractions summation rule: Cuvée (2,050 L) + Taille (500 L) = Total AOC Must (2,550 L).
   - La Rebêche mandatory distillation rate: 7% to 10% (strictly illegal for Champagne wine).

7. **F07 — Maturation & Lees Aging Mandates (6 tests)**:
   - Non-Vintage: min 15 months total maturation with min 12 months on lees.
   - Vintage (Millésimé): min 36 months total maturation from tirage.
   - Maximum vintage harvest declaration cap: strictly 80% (20% mandatory reserve wine retention).
   - Yeast autolysis chemistry and mannoprotein enrichment.
   - 100% single harvest year fruit declaration mandate.
   - Benchmark extended lees aged cuvées (6–15+ years).

8. **F08 — 7 Official Dosage Sweetness Tiers (6 tests)**:
   - All 7 official EU/CIVC dosage tiers verified.
   - Brut Nature: 0–3 g/L residual sugar with STRICTLY NO sugar addition allowed.
   - Extra Brut (0–6 g/L) and Brut (0–12 g/L).
   - Extra Dry (12–17 g/L) and Sec (17–32 g/L).
   - Demi-Sec (32–50 g/L) and Doux (50+ g/L).
   - Sommelier food pairings and sensory descriptors for each tier.

9. **F09 — 7 CIVC Producer Matriculation Codes (6 tests)**:
   - All 7 CIVC registration codes verified (NM, RM, CM, RC, SR, ND, MA).
   - NM (Négociant-Manipulant) commercial houses.
   - RM (Récoltant-Manipulant) grower-producers with >=95% estate fruit.
   - CM (Cooperative), RC (Grower-Coop), SR (Grower Union), ND (Distributor), MA (Buyer Brand).
   - Market share analysis: NM dominates exports (>85%), RM leads terroir focus in domestic market.
   - Verification that all 10 iconic growers possess valid producer codes.

10. **F10 — Ancillary AOCs (5 tests)**:
    - Coteaux Champenois (1974) and Rosé des Riceys (1947) documented.
    - Coteaux Champenois 100% still dry wine rules.
    - Rosé des Riceys strictly 100% Pinot Noir saignée from the 3 Riceys communes.
    - Benchmark Coteaux Champenois red crus (Bouzy, Ambonnay, Aÿ, Cumières).
    - Historical connection to King Louis XIV and Versailles court.

11. **F11 — 12+ Prestige Cuvées & 10 Iconic Grower Estates (6 tests)**:
    - 12 benchmark prestige cuvées and 10 iconic grower estates verified.
    - Dom Pérignon (debut 1921 / 1935 release).
    - Cristal (created 1876 for Tsar Alexander II).
    - Single-vineyard clos: Clos des Goisses (1935), Clos du Mesnil (1979), Clos d'Ambonnay (1995).
    - Ungrafted pre-phylloxera parcels: Bollinger Vieilles Vignes Françaises (VVF).
    - Iconic artisanal growers (Selosse, Péters, Egly-Ouriet, Bouchard, Agrapart, etc.).

12. **F12 — Interactive Cru Cartography & Leaflet Map Integration (5 tests)**:
    - Map layer integration with `pinViewMode` state and `selectedCruId` support.
    - Geographic bounding box and center coordinate resolution.
    - 33 Grand and Premier Crus GPS coordinates verified.
    - Top-right sommelier zoom and atlas attribution controls.
    - Visual differentiation for Grand Cru gold, Premier Cru amber, and subregion burgundy pins.

13. **F13 — Cru Village Explorer (5 tests)**:
    - Subregion filter pill bar, classification toggles, and multi-field search.
    - Subregion filter pill bar generation.
    - 33 Crus / 17 Grand Crus / 16 Premier Crus toggle counts.
    - Multi-target search (commune, producer, soil, and single vineyards).
    - Dominant grape badges (Pinot Noir, Chardonnay, Meunier).

14. **F14 — Sommelier Technical Cards in Terroir Tab (6 tests)**:
    - 7 distinct technical cards rendered in specs/terroir tab.
    - Soil Stratigraphy Card with porosity and era badges.
    - 7-Grapes Matrix with co-planted parcel card.
    - Pressing Flow Gauge with 4,000 kg Marc, 2,050 L Cuvée, 500 L Taille, 7-10% Rebêche.
    - Dosage Spectrum Card with sugar-free vs sugar-allowed badges.
    - Producer Codes Grid with market shares.

15. **F15 — Champagne Cellar Matcher (7 tests)**:
    - Integration with `public/My Cellar.csv` inventory.
    - Paul Bara Annonciade -> Bouzy Grand Cru (100%), RM, Montagne de Reims.
    - Egly-Ouriet Blanc de Noirs -> Ambonnay Grand Cru (100%), RM, Montagne de Reims.
    - Gaston Chiquet Special Club -> Dizy Premier Cru (95%), RM, Vallée de la Marne.
    - J. Lassalle Préférence -> Chigny-les-Roses Premier Cru (94%), RM, Montagne de Reims.
    - Billecart-Salmon Rosé -> Mareuil-sur-Aÿ Premier Cru (99%), NM, Vallée de la Marne.
    - Non-Champagne bottles safely return null matches without false positives.

16. **F16 — Luxury Responsive Sommelier Design & Print Isolation (5 tests)**:
    - Complete CSS rules and classes verified in `src/index.css`.
    - Champagne gold (#d4af37) and sommelier burgundy palette.
    - Responsive CSS grid architectures.
    - Mobile breakpoints (<768px and <480px).
    - `@media print` isolation suppressing UI controls and isolating technical study cards.

17. **F17 — Clean Zero-Error Compilation (5 tests)**:
    - Production build verification generating `dist/index.html`.
    - Compiled JS bundle creation.
    - Compiled CSS bundle creation.
    - Production bundle size verification (<1.5 MB).
    - Exit code 0 on `npm run build`.

---

### Tier 2: Boundary & Corner Cases (19 Tests)
- Exact mathematical dosage inflection thresholds tested: 0.0, 3.0, 3.01, 6.0, 6.01, 12.0, 12.01, 17.0, 17.01, 32.0, 32.01, 50.0, 50.01 g/L.
- Sugar-free badge validation for Brut Nature vs sugar-allowed for Extra Brut at 3.0 g/L.
- Safe navigation across all 14 non-Champagne world wine regions without null pointer exceptions.
- Regex escaping protection during search queries (`.*+?^${}()|[]\`).
- Empty strings, whitespace handling, and French diacritic variations (e.g. Péters, Épernay, Bérêche).
- Graceful handling of malformed or non-string cellar entries.

---

### Tier 3: Cross-Feature Combinations (12 Tests)
- Multi-filter combinations: Subregion + Classification + Dominant Grape.
- 0-cru boundary case in Côte des Bar (historical lack of classified crus).
- Complete 4-node relational graph traversals: Cellar Bottle ➔ Cru Commune ➔ Geological Formation ➔ Subregion.
- Business model linking: Producer Code ➔ Legal Requirements ➔ Estate Fruit %.
- Cartography synchronization: Cru Card Selection ➔ Map Pan & Zoom ➔ Popup Data Rendering.

---

### Tier 4: Real-World Sommelier Application Scenarios (10 Tests)
1. **CMS Level 3 Study Guide**: Geological comparison of Belemnite vs Micraster chalk across escarpments and valley plains.
2. **Floor Recommendation**: Sourcing bone-dry Blanc de Blancs from a Grand Cru grower in Côte des Blancs with zero dosage and oyster pairings.
3. **Table-Side Consultation**: Decoding producer matriculation codes (NM vs RM vs CM) for guest inquiries.
4. **Pressing Audit**: Must yield calculations for 12,000 kg harvest (3 marcs = 6,150 L cuvée, 1,500 L taille, 535–765 L rebêche).
5. **Exam Verification**: Distinguishing still Coteaux Champenois from Rosé des Riceys and sparkling Champagne AOC.
6. **Degustation Menu**: Pairing cellar inventory bottles (Bouzy Pinot Noir vs Le Mesnil Chardonnay) with culinary profiles.
7. **Heritage Cépage Masterclass**: Tracing all 4 rare heritage varieties in grower cuvées.
8. **Single-Vineyard Clos Guide**: Tracing Clos du Mesnil, Clos d'Ambonnay, and Clos des Goisses.
9. **Aging Regulation Audit**: Contrasting NV 15 mo / 12 mo lees with Vintage 36 mo / 80% harvest cap.
10. **Maturation Style Analysis**: Multi-vintage assemblage iterations (Grand Siècle) vs solera fractional blending (Jacques Selosse Substance).

---

## 3. How to Run the Test Suite

```bash
# Execute the full 4-Tier E2E Test Suite
node test/champagne-cms-l3-e2e.test.mjs

# Execute Production Build Verification
npm run build
```
