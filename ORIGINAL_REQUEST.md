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

## Follow-up — 2026-09-08T02:15:22Z

Expand and elevate the wine region encyclopedia in the application into an authoritative, sommelier-grade exploration system. Decouple Beaujolais from Burgundy into its own standalone region, build comprehensive modules for Mendoza (Argentina), South Africa (Western Cape), New Zealand, and Portugal (Douro/Dão), integrate Rías Baixas into the Spanish module with full Galician Atlantic depth, and ensure every region in the global catalog matches the geological, ampelographic, classification, and cartographic quality standard of Champagne and Burgundy.

Working directory: c:\Users\haine\Desktop\cellartracker
Integrity mode: development

## Requirements

### R1. Standalone Beaujolais Wine Region Module & Burgundy Decoupling
- Completely decouple Beaujolais from the Burgundy module into its own standalone, first-class French wine region (`beaujolais`).
- Include all **10 Cru Beaujolais** (Morgon, Moulin-à-Vent, Fleurie, Brouilly, Côte de Brouilly, Chénas, Chiroubles, Juliénas, Régnié, Saint-Amour), alongside Beaujolais-Villages and Beaujolais Supérieur.
- Detail unique geological stratigraphy (pink granite / *gore* / *arène*, blue volcanic diorite of Mont Brouilly / *côrnes vertes*, manganese deposits in Moulin-à-Vent, clay-limestone southern *Bas-Beaujolais*).
- Cover ampelography (Gamay Noir à Jus Blanc, authorized Chardonnay/Aligoté accessory grapes) and vinification methods (traditional whole-cluster semi-carbonic maceration, Beaujolais thermo-vinification vs. traditional Burgundian destemmed maceration).
- Feature benchmark vignerons (The "Gang of Four": Marcel Lapierre, Jean Foillard, Guy Breton, Jean-Paul Thévenet, plus Yvon Métras, Clos de la Roilette, Domaine Thillardon, Louis Jadot Château des Jacques), benchmark lieu-dits (Côte du Py, Corcelette, Grille-Midi, Champ de Cour), prestige cuvées, and red/white gastronomic food pairings.
- Provide GeoJSON boundary polygons with centered typography for the crus, and clean up Burgundy's dataset and boundaries to eliminate duplicate Beaujolais references while preserving Mâconnais integrity.

### R2. Mendoza & Argentine Viticulture Module
- Construct a standalone, sommelier-grade Mendoza wine region module (`argentina-mendoza`).
- Cover all premier subregions and high-altitude terroirs:
  - **Uco Valley (Valle de Uco)**: Tupungato (Gualtallary, San Pablo), Tunuyán (Los Chacayes, Vista Flores), San Carlos (Paraje Altamira, La Consulta, El Cepillo).
  - **Luján de Cuyo ("First Zone")**: Las Compuertas, Vistalba, Perdriel, Agrelo, Ugarteche.
  - **Maipú**: Barrancas, Lunlunta, Russell, Coquimbito.
  - **Southern Mendoza**: San Rafael (Valle de Atuel).
- Detail Andean rain-shadow climatology, extreme diurnal shifts (up to 20°C / 36°F), Zonda foehn winds, high-altitude UV radiation (synthesis of polyphenols and thick grape skins), snowmelt canal irrigation (*acequias*), and calcareous alluvial soils (alluvial gravels coated with calcium carbonate / *caliche*).
- Document ampelography (Malbec clones and massale selections, Cabernet Franc, Bonarda / Corbeau, Torrontés Riojano, Semillon, Chardonnay), classification (Indicación Geográfica - IG regulations), benchmark cult estates (Catena Zapata, Zuccardi Valle de Uco, Achaval-Ferrer, Cheval des Andes, Viña Cobos, Matias Riccitelli, El Enemigo), prestige cuvées (Adrianna Vineyard Mundus Bacillus Terrae, Finca Piedra Infinita, Finca Bella Vista), and authentic food pairings (Asado, Bife de Chorizo, Empanadas Mendocinas).
- Provide GeoJSON boundary polygons with centered typography and dedicated map coordinates.

### R3. Rías Baixas & Atlantic Spain Deep Integration
- Deeply expand the Spanish module (`spain-rioja` / Spain) to feature **Rías Baixas** and the Atlantic terroirs of Galicia alongside Rioja, Ribera del Duero, and Priorat.
- Include all **5 sub-zones of DO Rías Baixas**:
  - **Val do Salnés**: The coastal core, coolest and wettest, centered on Cambados; decomposed granite *xabre*.
  - **O Rosal**: Lower Miño river basin bordering Portugal; slate and alluvial deposits, blended with Loureira and Treixadura.
  - **Condado do Tea**: Warmer inland tea-river valley on granite and slate.
  - **Soutomaior**: Micro-zone at the head of Ría de Vigo on light sandy soils.
  - **Ribeira do Ulla**: Northernmost inland zone along the Ulla river on alluvial soils.
- Document the granite pedology (*xabre*), oceanic hyper-Atlantic climate (1,600mm+ precipitation, sea fogs), traditional granite *emparrado* / pergola vine training systems, and extended lees aging (*sobre lías*).
- Detail benchmark Albariño cuvées and estates: Gerardo Méndez (Do Ferreiro - *Cepas Vellas* pre-phylloxera 200+ yr vines), Pazo de Señorans (Selección de Añada), Palacio de Fefiñanes (1583 / III Año), Forjas del Salnés / Raúl Pérez (Leirana / Goliardo), Albamar, and Bodegas Zarate.
- Add authentic Galician white wine pairings (Pulpo á Feira, Percebes, Ostras de Cambados, Rodaballo a la Gallega) with proper glassware and temperature recommendations.
- Add Rías Baixas sub-zone boundaries, map pins, and search aliases.

### R4. New Global Titans: South Africa, New Zealand & Portugal Modules
- Add dedicated sommelier-grade modules for the requested premier world wine regions:
  - **South Africa (Western Cape)**: Stellenbosch (Simonsberg, Helderberg), Swartland (Paardeberg granite & iron shale, old bush vine revolution), Walker Bay (Hemel-en-Aarde Valley cooled by the Benguela Current), Constantia (historic Vin de Constance). Ampelography: Chenin Blanc (Steen), Pinotage, Syrah, Cabernet Sauvignon. Vignerons: Sadie Family, Mullineux, Kanonkop, Hamilton Russell, Klein Constantia.
  - **New Zealand**: Marlborough (Wairau Valley & Awatere Valley on greywacke river stones), Central Otago (Bannockburn, Bendigo, Gibbston - world's southernmost commercial vineyards), Hawke's Bay (Gimblett Gravels red blends), Martinborough (Wairarapa alluvial terraces). Ampelography: Sauvignon Blanc, Pinot Noir, Syrah, Chardonnay. Benchmark estates: Cloudy Bay, Felton Road, Ata Rangi, Craggy Range, Te Mata Estate.
  - **Portugal**: Douro Valley (Baixo Corgo, Cima Corgo, Douro Superior on vertical schist / *xisto* terraces), Dão (high granite plateau), Alentejo, Vinho Verde (Granite coastal terrace). Ampelography: Touriga Nacional, Touriga Franca, Tinta Roriz, Baga, Alvarinho. Benchmark estates: Barca-Velha (Ferreira), Quinta do Vale Meão, Niepoort, Quinta do Noval Nacional, Luis Pato.
- Each region must feature complete technical regulations, geological pedology, ampelography percentages, aging and classification laws, prestige cuvées, benchmark domaines, structured red/white/sparkling food pairings (with glassware, decanting, and serving temperatures), and cartographic GeoJSON polygons with centered boundary labels.

### R5. Exhaustive Quality Audit & Schema Invariants Across All Regions
- Review and elevate every wine region across the global catalog to match the gold standard established for Champagne:
  - Structured sensory metrics (0–10 scales for body, acidity, tannin, sweetness, alcohol ABV, aging potential).
  - Accurate cartographic bounds, coordinates, default zoom levels, and regional outline polygons.
  - Robust search alias resolution in `findWineRegion` avoiding substring collisions.
  - Cellar bottle counts linked seamlessly to district subregions and crus.
  - 100% test coverage across automated validation suites (`test/verify_all_17_regions.mjs` and stress tests), ensuring zero schema violations, valid GeoJSON RFC 7946 coordinates, and clean Vite builds.

## Acceptance Criteria

### Technical & Content Quality Guardrails
- [ ] Beaujolais exists as a standalone entry in `WINE_REGIONS` with its 10 Crus, full geology, ampelography, prestige cuvées, benchmark growers, and GeoJSON boundary polygons.
- [ ] Burgundy's dataset, search aliases, and boundary collections are updated to cleanly decouple Beaujolais without regressions to Côte d'Or or Mâconnais data.
- [ ] Mendoza (Argentina) exists as a standalone entry in `WINE_REGIONS` with its nested IGs (Uco Valley, Luján de Cuyo, Maipú), altitude pedology, cult producers, and boundary polygons.
- [ ] Spain's module comprehensively includes Rías Baixas and its 5 sub-zones (Val do Salnés, O Rosal, Condado do Tea, Soutomaior, Ribeira do Ulla), granite *xabre* terroir, pergola viticulture, benchmark Albariños, and coastal boundary polygons.
- [ ] South Africa, New Zealand, and Portugal are integrated as dedicated sommelier regions with complete subregions, crus, technical regulations, benchmark estates, and boundary collections.
- [ ] Every wine region in the catalog contains complete `terroir`, `grapes`, `structure`, `classification`, `prestigeCuvees` / `prestigeMonopoles`, `iconicDomaines`, and categorized `foodPairings` (with `wineType`, `targetWine`, `glassware`, and `servingTemp`).
- [ ] All boundary polygons conform to GeoJSON RFC 7946 and feature centered, dynamically scaled labels that do not collide or overflow.
- [ ] All automated test suites (`npm test`, `test/verify_all_17_regions.mjs`) pass with 100% green status.
- [ ] Production bundle compiles cleanly via `npm run build` with 0 errors.

