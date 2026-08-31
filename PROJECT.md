# Project: CMS Level 3 Champagne Sommelier Learning & Exploration System

## Architecture
The application is a React 19 + Vite single-page application for sommelier-grade wine cellar exploration and regional learning.
- **Data Layer (`src/data/wineRegions.js`)**: Exports `WINE_REGIONS` dictionary containing comprehensive regional terroir, subregions, cru classifications, viticultural regulations, and prestige cuvées.
- **Cartography Layer (`src/components/WineRegionMap.jsx`)**: Leaflet-based interactive sommelier map rendering subregion polygons/centers, 17 Grand Crus, Premier Crus, and layered filtering with custom gold/amber/burgundy pins and rich terroir popups.
- **Sommelier Education & Detail View (`src/components/WineRegionDetail.jsx`)**: Comprehensive 4-tab interface (Map/Crus, Terroir & Sommelier Regulations, Pairings, Cellar inventory matching) featuring interactive technical sommelier cards.
- **Design System (`src/index.css`)**: Luxury sommelier styling with responsive CSS grid, typography, gold accents, and print stylesheet isolation.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | 17 Grand Crus Catalog | Full data for all 17 Grand Cru communes (Ambonnay, Bouzy, Verzenay, Mailly, Verzy, Beaumont-sur-Vesle, Sillery, Puisieulx, Louvois, Aÿ, Tours-sur-Marne, Avize, Chouilly, Cramant, Le Mesnil-sur-Oger, Oger, Oiry) with GPS, aspect, dominant grape, soils, character, producers | M1 | ORIGINAL_REQUEST §R1 |
| 2 | Subregions & Micro-Terroirs | Montagne de Reims (4 sub-zones), Vallée de la Marne (3 sub-zones), Côte des Blancs, Côte de Sézanne, Côte des Bar / Aube (Barséquanais & Bar-sur-Aubois), Vitryat & Coteaux Sud d'Épernay | M1 | ORIGINAL_REQUEST §R1 |
| 3 | Premier Crus Catalog | Essential Premier Crus (Mareuil-sur-Aÿ, Cumières, Vertus, Hautvillers, Trépail, Dizy, Chigny-les-Roses, Rilly-la-Montagne, Villers-Marmery, Pierry, Tauxières-Mutry) with échelle % | M1 | ORIGINAL_REQUEST §R1 |
| 4 | Geology & Soils Stratigraphy | Belemnite chalk (*Belemnitella quadrata*), Micraster chalk, Kimmeridgian marls, Sparnacian clays, alluvial soils | M1 | ORIGINAL_REQUEST §R2 |
| 5 | 7 Authorized Grape Varieties | 3 major varieties (Pinot Noir, Chardonnay, Meunier) + 4 heritage varieties (Arbane, Petit Meslier, Pinot Blanc / Blanc Vrai, Pinot Gris / Fromenteau) | M1 | ORIGINAL_REQUEST §R2 |
| 6 | CIVC Pressing & Yield Laws | 4,000 kg *marc* standards (2,050 L *cuvée*, 500 L *taille*, mandatory 7-10% *rebêche* distillation) | M1 | ORIGINAL_REQUEST §R2 |
| 7 | Aging Requirements | Non-Vintage (15 months total, 12 months on lees) vs. Vintage (36 months total from tirage); 80% declaration cap | M1 | ORIGINAL_REQUEST §R2 |
| 8 | 7 Official Dosage Sweetness Tiers | Brut Nature (0-3 g/L), Extra Brut (0-6 g/L), Brut (0-12 g/L), Extra Dry (12-17 g/L), Sec (17-32 g/L), Demi-Sec (32-50 g/L), Doux (50+ g/L) | M1 | ORIGINAL_REQUEST §R2 |
| 9 | 7 CIVC Producer Matriculation Codes | Official codes explained: NM, RM, CM, RC, SR, ND, MA with business models | M1 | ORIGINAL_REQUEST §R2 |
| 10 | Ancillary AOCs | Coteaux Champenois (still white, red, rosé) and Rosé des Riceys (100% Pinot Noir saignée) | M1 | ORIGINAL_REQUEST §R2 |
| 11 | Prestige Cuvée Compendium | Benchmark prestige cuvées, founding houses, debut vintages (Dom Pérignon 1921, Cristal 1876/1945, Comtes de Champagne 1952, Grand Siècle 1959, Churchill 1975, Clos des Goisses 1935, Clos du Mesnil, Clos d'Ambonnay) & cult growers | M1 | ORIGINAL_REQUEST §R2 |
| 12 | Interactive Cru Cartography & Popups | Leaflet map with layer filtering ([All], [17 Grand Crus], [Subregions], [Premier Crus]), custom gold pins, rich aspect/soil popups, and zoom-to-cru | M2 | ORIGINAL_REQUEST §R3 |
| 13 | Cru Village Explorer & Subregion Filters | Filterable grid of 17 Grand Crus and Premier Crus in WineRegionDetail with expandable technical profiles | M2 | ORIGINAL_REQUEST §R3 |
| 14 | Sommelier Technical Cards Component | Sommelier technical cards in Terroir tab: Soil Stratigraphy, Grape Matrix, Pressing Gauge, Aging Rules, Dosage Scale, Producer Codes, Ancillary AOCs, Prestige Cuvées | M2 | ORIGINAL_REQUEST §R3 |
| 15 | Enhanced Cellar Matching for Champagne | Smart cellar matcher linking cellar bottles to Crus/subregions via producer/village dictionaries | M2 | ORIGINAL_REQUEST §R3 |
| 16 | Luxury Responsive Sommelier Design | Refined CSS styling with gold badges, progress bars, responsive multi-column layouts, and print isolation | M2 | ORIGINAL_REQUEST §R3 |
| 17 | E2E Testing Suite & Build Verification | Comprehensive test harness covering all 17 Grand Crus, viticultural rules, UI rendering, and clean zero-error build verification (`npm run build`) | M3 | ORIGINAL_REQUEST §Acceptance Criteria |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M1: Champagne Dataset Expansion | Implement all 17 Grand Crus, subregions, premier crus, 7 grapes, CIVC pressing rules, aging laws, 7 dosage tiers, 7 producer codes, ancillary AOCs, and prestige cuvées in `src/data/wineRegions.js` | none | DONE |
| 2 | M2: Sommelier UI & Interactive Map | Implement Cru map layers, gold pin popups in `WineRegionMap.jsx`, sommelier technical cards in `WineRegionDetail.jsx`, cellar matching, and styling in `src/index.css` | M1 | DONE |
| 3 | M3: E2E Verification & Build Validation | Verification test harness (Tiers 1-4) and `npm run build` zero-error validation | M1, M2 | DONE |

## Interface Contracts

### `src/data/wineRegions.js` ↔ `src/components/WineRegionDetail.jsx` & `WineRegionMap.jsx`
- `WINE_REGIONS.champagne.grandCrus`: Array of 17 objects:
  ```javascript
  {
    id: string,
    name: string,
    subregion: string,
    subregionId: string,
    lat: number,
    lng: number,
    aspect: string,
    dominantGrape: string,
    grapeRatio: string,
    soil: string,
    echelleRating: 100,
    character: string,
    benchmarkProducers: string[],
    iconicVineyards: string[]
  }
  ```
- `WINE_REGIONS.champagne.premierCrus`: Array of objects:
  ```javascript
  {
    id: string,
    name: string,
    subregion: string,
    lat: number,
    lng: number,
    echelleRating: number, // 90-99
    dominantGrape: string,
    soil: string,
    character: string,
    benchmarkProducers: string[]
  }
  ```
- `WINE_REGIONS.champagne.technicalRegulations`: Object containing:
  ```javascript
  {
    geology: { formations: Array<{ name, period, characteristics, keyAreas, wineImpact }> },
    grapes: { major: Array<{ name, percentage, profile, role }>, heritage: Array<{ name, profile, role, status }> },
    pressing: { marcKg: 4000, cuveeL: 2050, tailleL: 500, rebecheMinPct: 7, rules: string[] },
    aging: { nonVintage: { minTotalMonths: 15, minLeesMonths: 12, description }, vintage: { minTotalMonths: 36, description, declarationCapPct: 80 } },
    dosageTiers: Array<{ tier, range, gPerLMin, gPerLMax, sugarAddedAllowed, profile, foodPairing }>,
    producerCodes: Array<{ code, title, frenchName, description, shareOfProduction, exampleProducers }>,
    ancillaryAocs: Array<{ name, type, permittedGrapes, rules, description }>
  }
  ```
- `WINE_REGIONS.champagne.prestigeCuvees`: Array of objects:
  ```javascript
  {
    name: string,
    houseOrGrower: string,
    type: 'Maison' | 'Grower / Domaine',
    debutVintage: number | string,
    grapeComposition: string,
    sourcing: string,
    winemaking: string,
    iconicStatus: string
  }
  ```

## Code Layout
- `src/data/wineRegions.js`: Complete regional data and CMS Level 3 Champagne dataset.
- `src/components/WineRegionMap.jsx`: Leaflet map with layer filtering, Cru pins, and rich popups.
- `src/components/WineRegionDetail.jsx`: Sommelier region view with technical cards, Cru village explorer, and cellar matching.
- `src/index.css`: Sommelier design system and responsive styling.
- `test/champagne-cms-l3.test.js` or standalone E2E validation script: Test harness.
