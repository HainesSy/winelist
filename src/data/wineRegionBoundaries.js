// src/data/wineRegionBoundaries.js
// Sommelier-grade cartographic boundary polygons and regional macro outlines
// Conforms strictly to GeoJSON RFC 7946 specifications ([longitude, latitude])
import { GEO_BOUNDARIES } from './geo_boundaries.js';

export const WINE_REGION_BOUNDARIES = {
  "champagne": GEO_BOUNDARIES['champagne'],
  "burgundy": GEO_BOUNDARIES['burgundy'],
  "bordeaux": GEO_BOUNDARIES['bordeaux'],
  "rhone": GEO_BOUNDARIES['rhone'],
  "loire-valley": GEO_BOUNDARIES['loire-valley'],
  "piedmont": GEO_BOUNDARIES['piedmont'],
  "tuscany": GEO_BOUNDARIES['tuscany'],
  "california": GEO_BOUNDARIES['california'],
  "oregon": GEO_BOUNDARIES['oregon'],
  "spain-rioja": {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "rioja-alta-alavesa",
      "properties": {
        "id": "rioja-alta-alavesa",
        "parentSubregionId": "rioja-alta-alavesa",
        "subregionId": "rioja-alta-alavesa",
        "name": "Rioja Alta & Rioja Alavesa",
        "category": "Atlantic Tempranillo & Cantabria Limestone",
        "dominantGrape": "Tempranillo",
        "color": "#800020",
        "accent": "#d4af37",
        "fillOpacity": 0.22,
        "description": "High-altitude calcareous clay-limestone terraces beneath the Sierra de Cantabria producing aristocratic Gran Reservas.",
        "labelCenter": [
          -2.68,
          42.52
        ]
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -2.95,
              42.58
            ],
            [
              -2.72,
              42.63
            ],
            [
              -2.48,
              42.58
            ],
            [
              -2.4,
              42.48
            ],
            [
              -2.55,
              42.42
            ],
            [
              -2.78,
              42.38
            ],
            [
              -2.92,
              42.46
            ],
            [
              -2.95,
              42.58
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "ribera-del-duero",
      "properties": {
        "id": "ribera-del-duero",
        "parentSubregionId": "ribera-del-duero",
        "subregionId": "ribera-del-duero",
        "name": "Ribera del Duero (Castilian High Plateau)",
        "category": "High Continental Tinto Fino & Limestone Páramos",
        "dominantGrape": "Tinto Fino / Tempranillo",
        "color": "#4a154b",
        "accent": "#ffd700",
        "fillOpacity": 0.25,
        "description": "Castilian high plateau along the Duero River crafting monumental, ageworthy Tinto Fino (Vega Sicilia, Pingus).",
        "labelCenter": [
          -3.88,
          41.64
        ]
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -4.34,
              41.68
            ],
            [
              -4.05,
              41.72
            ],
            [
              -3.75,
              41.71
            ],
            [
              -3.45,
              41.64
            ],
            [
              -3.44,
              41.54
            ],
            [
              -3.78,
              41.56
            ],
            [
              -4.12,
              41.58
            ],
            [
              -4.36,
              41.62
            ],
            [
              -4.34,
              41.68
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "priorat",
      "properties": {
        "id": "priorat",
        "parentSubregionId": "priorat",
        "subregionId": "priorat",
        "name": "Priorat (DOQ Priorat & Llicorella Slate)",
        "category": "Devonian Llicorella Slate Amphitheaters",
        "dominantGrape": "Garnacha Tinta & Cariñena",
        "color": "#b03a2e",
        "accent": "#f5b7b1",
        "fillOpacity": 0.26,
        "labelCenter": [
          0.82,
          41.18
        ],
        "description": "Steep Llicorella slate terraces producing heroic, mineral-soaked old-vine Garnacha and Cariñena (L'Ermita, Clos Mogador)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              0.72,
              41.26
            ],
            [
              0.78,
              41.28
            ],
            [
              0.85,
              41.28
            ],
            [
              0.91,
              41.26
            ],
            [
              0.94,
              41.22
            ],
            [
              0.94,
              41.16
            ],
            [
              0.91,
              41.12
            ],
            [
              0.86,
              41.09
            ],
            [
              0.8,
              41.08
            ],
            [
              0.74,
              41.1
            ],
            [
              0.69,
              41.15
            ],
            [
              0.7,
              41.21
            ],
            [
              0.72,
              41.26
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "rias-baixas",
      "properties": {
        "id": "rias-baixas",
        "parentSubregionId": "rias-baixas",
        "subregionId": "rias-baixas",
        "name": "Rías Baixas (Val do Salnés & Atlantic Galicia)",
        "category": "Granite Xabre & Coastal Pergola Albariño",
        "dominantGrape": "Albariño (96%+)",
        "color": "#00796B",
        "accent": "#80CBC4",
        "fillOpacity": 0.25,
        "labelCenter": [
          -8.8,
          42.48
        ],
        "description": "Lush green Atlantic coastal fjords over decomposed granite xabre, crafting crystalline, saline, long-lived Albariño (Do Ferreiro, Pazo de Señorans)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -8.94,
              42.6
            ],
            [
              -8.85,
              42.64
            ],
            [
              -8.76,
              42.62
            ],
            [
              -8.68,
              42.56
            ],
            [
              -8.64,
              42.48
            ],
            [
              -8.62,
              42.38
            ],
            [
              -8.65,
              42.25
            ],
            [
              -8.72,
              42.15
            ],
            [
              -8.84,
              42.18
            ],
            [
              -8.88,
              42.28
            ],
            [
              -8.82,
              42.36
            ],
            [
              -8.92,
              42.44
            ],
            [
              -8.96,
              42.52
            ],
            [
              -8.94,
              42.6
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "rioja-oriental",
      "properties": {
        "id": "rioja-oriental",
        "parentSubregionId": "rioja-oriental",
        "subregionId": "rioja-oriental",
        "name": "Rioja Oriental (Warm Ebro Lowlands)",
        "category": "Mediterranean Warmth & Old Garnacha",
        "dominantGrape": "Garnacha & Tempranillo",
        "color": "#D35400",
        "accent": "#F39C12",
        "fillOpacity": 0.22,
        "description": "Lower warmer section of the Rioja DOCa producing round, opulent Garnacha-driven reds.",
        "labelCenter": [
          -2.06,
          42.2
        ]
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -2.32,
              42.38
            ],
            [
              -2.08,
              42.32
            ],
            [
              -1.82,
              42.18
            ],
            [
              -1.78,
              42.02
            ],
            [
              -1.98,
              42.01
            ],
            [
              -2.22,
              42.14
            ],
            [
              -2.35,
              42.25
            ],
            [
              -2.32,
              42.38
            ]
          ]
        ]
      }
    }
  ]
},
  "germany-mosel": {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "mittelmosel",
      "properties": {
        "id": "mittelmosel",
        "parentSubregionId": "mittelmosel",
        "subregionId": "mittelmosel",
        "name": "Middle Mosel (Mittelmosel / Bernkastel)",
        "category": "Blue Devonian Slate Steep Slopes",
        "dominantGrape": "Riesling",
        "color": "#117864",
        "accent": "#76d7c4",
        "fillOpacity": 0.24,
        "labelCenter": [
          7.05,
          49.95
        ],
        "description": "Vertiginous south-facing blue slate amphitheaters (Wehlener Sonnenuhr, Berncasteler Doctor, Ürziger Würzgarten, Erdener Prälat)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              6.92,
              50.02
            ],
            [
              7,
              50.05
            ],
            [
              7.08,
              50.06
            ],
            [
              7.16,
              50.03
            ],
            [
              7.22,
              49.98
            ],
            [
              7.2,
              49.92
            ],
            [
              7.18,
              49.88
            ],
            [
              7.1,
              49.86
            ],
            [
              7.02,
              49.85
            ],
            [
              6.94,
              49.88
            ],
            [
              6.86,
              49.92
            ],
            [
              6.88,
              49.97
            ],
            [
              6.92,
              50.02
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "saar-ruwer",
      "properties": {
        "id": "saar-ruwer",
        "parentSubregionId": "saar-ruwer",
        "subregionId": "saar-ruwer",
        "name": "Saar & Ruwer Tributary Valleys",
        "category": "Electric High Acidity & Grey Slate",
        "dominantGrape": "Riesling",
        "color": "#1f618d",
        "accent": "#85c1e9",
        "fillOpacity": 0.24,
        "labelCenter": [
          6.58,
          49.62
        ],
        "description": "Cool wind corridor producing crystalline, mineral Riesling (Scharzhofberg)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              6.5,
              49.68
            ],
            [
              6.58,
              49.7
            ],
            [
              6.65,
              49.69
            ],
            [
              6.7,
              49.64
            ],
            [
              6.71,
              49.58
            ],
            [
              6.66,
              49.52
            ],
            [
              6.58,
              49.51
            ],
            [
              6.5,
              49.53
            ],
            [
              6.46,
              49.58
            ],
            [
              6.45,
              49.63
            ],
            [
              6.5,
              49.68
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "rheingau",
      "properties": {
        "id": "rheingau",
        "parentSubregionId": "rheingau",
        "subregionId": "rheingau",
        "name": "Rheingau & Central Rhine",
        "category": "Taunus Quartzite & South River Slopes",
        "dominantGrape": "Riesling & Spätburgunder",
        "color": "#b8860b",
        "accent": "#ffd700",
        "fillOpacity": 0.24,
        "labelCenter": [
          8.06,
          50.01
        ],
        "description": "Pure south-facing Rhine terraces backed by the Taunus mountains producing aristocratic dry Grosses Gewächs and late harvest botrytis wines."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              7.86,
              50.04
            ],
            [
              7.96,
              50.06
            ],
            [
              8.08,
              50.06
            ],
            [
              8.18,
              50.05
            ],
            [
              8.28,
              50.03
            ],
            [
              8.31,
              49.99
            ],
            [
              8.28,
              49.96
            ],
            [
              8.18,
              49.96
            ],
            [
              8.08,
              49.97
            ],
            [
              7.98,
              49.97
            ],
            [
              7.88,
              49.98
            ],
            [
              7.84,
              50.01
            ],
            [
              7.86,
              50.04
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "nahe-pfalz",
      "properties": {
        "id": "nahe-pfalz",
        "parentSubregionId": "nahe-pfalz",
        "subregionId": "nahe-pfalz",
        "name": "Nahe & Pfalz (Mittelhaardt)",
        "category": "Volcanic Porphyry, Basalt & Limestone",
        "dominantGrape": "Riesling",
        "color": "#7b1fa2",
        "accent": "#ba68c8",
        "fillOpacity": 0.24,
        "labelCenter": [
          8.02,
          49.62
        ],
        "description": "Dynamic geological mosaic of volcanic rhyolite, porphyry, and limestone crafting powerful dry Grosses Gewächs (Dönnhoff Hermannshöhle, Keller G-Max)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              7.68,
              49.88
            ],
            [
              7.82,
              49.91
            ],
            [
              7.98,
              49.9
            ],
            [
              8.14,
              49.84
            ],
            [
              8.24,
              49.75
            ],
            [
              8.28,
              49.56
            ],
            [
              8.28,
              49.38
            ],
            [
              8.2,
              49.33
            ],
            [
              8.12,
              49.32
            ],
            [
              8.04,
              49.38
            ],
            [
              7.98,
              49.46
            ],
            [
              7.85,
              49.56
            ],
            [
              7.72,
              49.65
            ],
            [
              7.66,
              49.78
            ],
            [
              7.68,
              49.88
            ]
          ]
        ]
      }
    }
  ]
},
  "australia": {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "barossa-valley",
      "properties": {
        "id": "barossa-valley",
        "parentSubregionId": "barossa-valley",
        "subregionId": "barossa-valley",
        "name": "Barossa Valley (South Australia)",
        "category": "Pre-Phylloxera 1843 Shiraz & Red Clay Loam",
        "dominantGrape": "Shiraz (Old Vine / Ancestor Vine)",
        "color": "#4a148c",
        "accent": "#ea80fc",
        "fillOpacity": 0.28,
        "labelCenter": [
          138.98,
          -34.52
        ],
        "description": "World's oldest continuously producing ungrafted Shiraz vines dating back to 1843, creating profound, full-bodied icons (Penfolds Grange, Kalimna Block 42)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              138.9,
              -34.42
            ],
            [
              138.98,
              -34.38
            ],
            [
              139.04,
              -34.42
            ],
            [
              139.08,
              -34.48
            ],
            [
              139.1,
              -34.56
            ],
            [
              139.06,
              -34.64
            ],
            [
              138.96,
              -34.66
            ],
            [
              138.86,
              -34.6
            ],
            [
              138.84,
              -34.5
            ],
            [
              138.9,
              -34.42
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "eden-valley",
      "properties": {
        "id": "eden-valley",
        "parentSubregionId": "eden-valley",
        "subregionId": "eden-valley",
        "name": "Eden Valley & High Eden",
        "category": "Cool High-Altitude Ridge & Single-Vineyard Shiraz",
        "dominantGrape": "Riesling & Shiraz",
        "color": "#00695c",
        "accent": "#80cbc4",
        "fillOpacity": 0.24,
        "labelCenter": [
          139.15,
          -34.6
        ],
        "description": "High-elevation (400-600m) rocky windswept slopes home to lime-scented dry Riesling and mythical pre-phylloxera Shiraz (Henschke Hill of Grace)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              139.08,
              -34.46
            ],
            [
              139.18,
              -34.44
            ],
            [
              139.26,
              -34.5
            ],
            [
              139.28,
              -34.65
            ],
            [
              139.24,
              -34.76
            ],
            [
              139.14,
              -34.78
            ],
            [
              139.06,
              -34.72
            ],
            [
              139.06,
              -34.58
            ],
            [
              139.08,
              -34.46
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "margaret-river",
      "properties": {
        "id": "margaret-river",
        "parentSubregionId": "margaret-river",
        "subregionId": "margaret-river",
        "name": "Margaret River (Western Australia)",
        "category": "Maritime Laterite Gravel Cabernet & Chardonnay",
        "dominantGrape": "Cabernet Sauvignon & Chardonnay",
        "color": "#117864",
        "accent": "#76d7c4",
        "fillOpacity": 0.24,
        "labelCenter": [
          115.08,
          -34
        ],
        "description": "Leeuwin-Naturaliste lateritic ironstone ridge cooled by the Indian and Southern Oceans (Leeuwin Art Series, Cullen)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              114.96,
              -33.64
            ],
            [
              115.08,
              -33.64
            ],
            [
              115.18,
              -33.72
            ],
            [
              115.22,
              -33.9
            ],
            [
              115.22,
              -34.15
            ],
            [
              115.18,
              -34.32
            ],
            [
              115.08,
              -34.36
            ],
            [
              114.98,
              -34.3
            ],
            [
              114.95,
              -34.1
            ],
            [
              114.94,
              -33.85
            ],
            [
              114.96,
              -33.64
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "hunter-valley",
      "properties": {
        "id": "hunter-valley",
        "parentSubregionId": "hunter-valley",
        "subregionId": "hunter-valley",
        "name": "Hunter Valley (New South Wales)",
        "category": "Ancient Alluvial Flats & Age-Worthy Semillon",
        "dominantGrape": "Semillon & Shiraz",
        "color": "#f57f17",
        "accent": "#fff59d",
        "fillOpacity": 0.24,
        "labelCenter": [
          151.3,
          -32.8
        ],
        "description": "Australia's oldest wine region producing un-oaked, low-alcohol, ageworthy Semillon (Tyrrell's Vat 1)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              151.15,
              -32.65
            ],
            [
              151.28,
              -32.64
            ],
            [
              151.38,
              -32.68
            ],
            [
              151.46,
              -32.76
            ],
            [
              151.48,
              -32.88
            ],
            [
              151.42,
              -32.96
            ],
            [
              151.3,
              -32.96
            ],
            [
              151.18,
              -32.92
            ],
            [
              151.13,
              -32.8
            ],
            [
              151.15,
              -32.65
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "coonawarra",
      "properties": {
        "id": "coonawarra",
        "parentSubregionId": "coonawarra",
        "subregionId": "coonawarra",
        "name": "Coonawarra & Limestone Coast",
        "category": "Terra Rossa Red Clay over Limestone",
        "dominantGrape": "Cabernet Sauvignon",
        "color": "#880e4f",
        "accent": "#f48fb1",
        "fillOpacity": 0.26,
        "labelCenter": [
          140.83,
          -37.31
        ],
        "description": "Famous 15km cigar-shaped ridge of vibrant red terra rossa over Gambier limestone (Wynns John Riddoch)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              140.76,
              -37.2
            ],
            [
              140.84,
              -37.19
            ],
            [
              140.9,
              -37.24
            ],
            [
              140.92,
              -37.34
            ],
            [
              140.9,
              -37.42
            ],
            [
              140.82,
              -37.44
            ],
            [
              140.76,
              -37.38
            ],
            [
              140.74,
              -37.28
            ],
            [
              140.76,
              -37.2
            ]
          ]
        ]
      }
    }
  ]
},
  "chile-maipo": {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "alto-maipo",
      "properties": {
        "id": "alto-maipo",
        "parentSubregionId": "alto-maipo",
        "subregionId": "alto-maipo",
        "name": "Alto Maipo (Puente Alto & Pirque)",
        "category": "Andean Cabernet Sauvignon Benchmark",
        "dominantGrape": "Cabernet Sauvignon & Carmenère",
        "color": "#880e4f",
        "accent": "#f48fb1",
        "fillOpacity": 0.28,
        "labelCenter": [
          -70.6,
          -33.68
        ],
        "description": "Third alluvial gravel terrace at the base of the Andes with mint, eucalyptus, and cassis profile (Almaviva, Don Melchor, Viñedo Chadwick)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -70.66,
              -33.56
            ],
            [
              -70.56,
              -33.56
            ],
            [
              -70.48,
              -33.62
            ],
            [
              -70.46,
              -33.72
            ],
            [
              -70.52,
              -33.8
            ],
            [
              -70.62,
              -33.82
            ],
            [
              -70.72,
              -33.78
            ],
            [
              -70.76,
              -33.68
            ],
            [
              -70.72,
              -33.6
            ],
            [
              -70.66,
              -33.56
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "colchagua-apalta",
      "properties": {
        "id": "colchagua-apalta",
        "parentSubregionId": "colchagua-apalta",
        "subregionId": "colchagua-apalta",
        "name": "Colchagua Valley & Apalta Amphitheater",
        "category": "Horseshoe Granite Amphitheater & Old-Vine Carmenère",
        "dominantGrape": "Carmenère & Cabernet Sauvignon",
        "color": "#4a148c",
        "accent": "#ce93d8",
        "fillOpacity": 0.26,
        "labelCenter": [
          -71.28,
          -34.62
        ],
        "description": "Warm Mediterranean climate sheltered by the Coastal Range, starring the south-facing Apalta horseshoe amphitheater (Clos Apalta, Montes Folly)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -71.42,
              -34.52
            ],
            [
              -71.3,
              -34.5
            ],
            [
              -71.18,
              -34.54
            ],
            [
              -71.12,
              -34.62
            ],
            [
              -71.15,
              -34.72
            ],
            [
              -71.25,
              -34.76
            ],
            [
              -71.38,
              -34.74
            ],
            [
              -71.46,
              -34.66
            ],
            [
              -71.46,
              -34.58
            ],
            [
              -71.42,
              -34.52
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "casablanca-san-antonio",
      "properties": {
        "id": "casablanca-san-antonio",
        "parentSubregionId": "casablanca-san-antonio",
        "subregionId": "casablanca-san-antonio",
        "name": "Casablanca & San Antonio / Leyda Valley",
        "category": "Pacific Camanchaca Fog & Granite Pinot / Sauvignon",
        "dominantGrape": "Sauvignon Blanc & Pinot Noir",
        "color": "#00695c",
        "accent": "#80cbc4",
        "fillOpacity": 0.24,
        "labelCenter": [
          -71.42,
          -33.32
        ],
        "description": "Maritime coastal cordillera drenched in morning Camanchaca sea fog from the Humboldt Current, yielding mineral, saline white wines."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -71.55,
              -33.2
            ],
            [
              -71.42,
              -33.18
            ],
            [
              -71.3,
              -33.24
            ],
            [
              -71.26,
              -33.34
            ],
            [
              -71.32,
              -33.44
            ],
            [
              -71.44,
              -33.48
            ],
            [
              -71.54,
              -33.42
            ],
            [
              -71.6,
              -33.32
            ],
            [
              -71.58,
              -33.24
            ],
            [
              -71.55,
              -33.2
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "peumo-cachapoal",
      "properties": {
        "id": "peumo-cachapoal",
        "parentSubregionId": "peumo-cachapoal",
        "subregionId": "peumo-cachapoal",
        "name": "Peumo & Cachapoal Valley",
        "category": "Sheltered Alluvial Basin & Carménère Capital",
        "dominantGrape": "Carmenère (100% Benchmark)",
        "color": "#b71c1c",
        "accent": "#ff8a80",
        "fillOpacity": 0.25,
        "labelCenter": [
          -71.16,
          -34.4
        ],
        "description": "Deep clay-loam river terraces sheltered from cold winds, hailed as the historic grand cru terroir of Chilean Carménère (Carmín de Peumo)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -71.28,
              -34.32
            ],
            [
              -71.16,
              -34.3
            ],
            [
              -71.05,
              -34.35
            ],
            [
              -71.02,
              -34.44
            ],
            [
              -71.08,
              -34.5
            ],
            [
              -71.2,
              -34.52
            ],
            [
              -71.28,
              -34.46
            ],
            [
              -71.32,
              -34.38
            ],
            [
              -71.28,
              -34.32
            ]
          ]
        ]
      }
    }
  ]
},
  "italy-other": GEO_BOUNDARIES['italy-other'],
  "japan-chubu": {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "yamanashi-katsunuma",
      "properties": {
        "id": "yamanashi-katsunuma",
        "parentSubregionId": "yamanashi-katsunuma",
        "subregionId": "yamanashi-katsunuma",
        "name": "Katsunuma & Yamanashi Basin (GI Yamanashi)",
        "category": "Mount Fuji Alluvial Fans & Pergola Koshu",
        "dominantGrape": "Koshu",
        "color": "#C5A059",
        "accent": "#E6C280",
        "fillOpacity": 0.28,
        "labelCenter": [
          138.72,
          35.68
        ],
        "description": "Historical cradle of Japanese viticulture in the shadow of Mount Fuji, famous for high-trellised Tanadukuri pergolas and delicate, saline Koshu."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              138.64,
              35.74
            ],
            [
              138.74,
              35.75
            ],
            [
              138.82,
              35.7
            ],
            [
              138.84,
              35.63
            ],
            [
              138.8,
              35.56
            ],
            [
              138.7,
              35.56
            ],
            [
              138.62,
              35.62
            ],
            [
              138.6,
              35.68
            ],
            [
              138.64,
              35.74
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "nagano-shinshu",
      "properties": {
        "id": "nagano-shinshu",
        "parentSubregionId": "nagano-shinshu",
        "subregionId": "nagano-shinshu",
        "name": "Nagano (Shinshu High Alpine Valleys / GI Nagano)",
        "category": "High Alpine Alps Rain-Shadow & Mineral Merlot",
        "dominantGrape": "Merlot & Chardonnay",
        "color": "#7E22CE",
        "accent": "#A855F7",
        "fillOpacity": 0.26,
        "labelCenter": [
          138.08,
          36.32
        ],
        "description": "High alpine river valleys between 500m-900m elevation sheltered by the Northern Alps (Chikuma River Valley, Kikyogahara Basin)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              137.95,
              36.42
            ],
            [
              138.08,
              36.45
            ],
            [
              138.22,
              36.4
            ],
            [
              138.26,
              36.3
            ],
            [
              138.22,
              36.18
            ],
            [
              138.1,
              36.15
            ],
            [
              137.98,
              36.2
            ],
            [
              137.92,
              36.32
            ],
            [
              137.95,
              36.42
            ]
          ]
        ]
      }
    }
  ]
},
  "alsace": GEO_BOUNDARIES['alsace'],
  "corsica": GEO_BOUNDARIES['corsica'],
  "beaujolais": GEO_BOUNDARIES['beaujolais'],
  "argentina-mendoza": {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "valle-de-uco",
      "properties": {
        "id": "valle-de-uco",
        "parentSubregionId": "valle-de-uco",
        "subregionId": "valle-de-uco",
        "name": "Valle de Uco (Gualtallary & Altamira)",
        "category": "High-Altitude Andean Calcareous Terraces",
        "dominantGrape": "Malbec & Cabernet Franc",
        "color": "#4A0E2E",
        "accent": "#D4AF37",
        "fillOpacity": 0.25,
        "labelCenter": [
          -69.15,
          -33.6
        ],
        "description": "Extreme high-altitude Andean corridor (900m-1,500m+) featuring white caliche limestone soils and Zonda winds (Catena Zapata Adrianna Vineyard, Zuccardi Piedra Infinita)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -69.38,
              -33.28
            ],
            [
              -69.2,
              -33.24
            ],
            [
              -69.05,
              -33.22
            ],
            [
              -68.96,
              -33.3
            ],
            [
              -68.92,
              -33.38
            ],
            [
              -68.88,
              -33.55
            ],
            [
              -68.85,
              -33.72
            ],
            [
              -68.9,
              -33.85
            ],
            [
              -68.95,
              -33.95
            ],
            [
              -69.1,
              -34.02
            ],
            [
              -69.22,
              -34.05
            ],
            [
              -69.3,
              -34
            ],
            [
              -69.35,
              -33.9
            ],
            [
              -69.42,
              -33.6
            ],
            [
              -69.38,
              -33.28
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "lujan-de-cuyo",
      "properties": {
        "id": "lujan-de-cuyo",
        "parentSubregionId": "lujan-de-cuyo",
        "subregionId": "lujan-de-cuyo",
        "name": "Luján de Cuyo DOC",
        "category": "Historic Old-Vine Malbec Cradle",
        "dominantGrape": "Malbec (Massale Selections)",
        "color": "#7209B7",
        "accent": "#F72585",
        "fillOpacity": 0.24,
        "labelCenter": [
          -68.9,
          -33.12
        ],
        "description": "Centenarian ungrafted Malbec bush vines rooted in Mendoza River alluvial gravel terraces in Perdriel, Agrelo, and Las Compuertas."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -69.05,
              -33.01
            ],
            [
              -68.94,
              -33
            ],
            [
              -68.82,
              -33.01
            ],
            [
              -68.76,
              -33.04
            ],
            [
              -68.74,
              -33.08
            ],
            [
              -68.74,
              -33.14
            ],
            [
              -68.75,
              -33.18
            ],
            [
              -68.8,
              -33.22
            ],
            [
              -68.86,
              -33.24
            ],
            [
              -68.95,
              -33.25
            ],
            [
              -69.02,
              -33.24
            ],
            [
              -69.08,
              -33.15
            ],
            [
              -69.05,
              -33.01
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "maipu",
      "properties": {
        "id": "maipu",
        "parentSubregionId": "maipu",
        "subregionId": "maipu",
        "name": "Maipú (Barrancas & Lunlunta)",
        "category": "Warm Alluvial Stone Terraces",
        "dominantGrape": "Malbec & Cabernet Sauvignon",
        "color": "#8B0000",
        "accent": "#FFB300",
        "fillOpacity": 0.22,
        "labelCenter": [
          -68.65,
          -33.06
        ],
        "description": "Sun-drenched rocky river terraces yielding plush, generous, blackberry-dense Malbec and historic 19th-century cellar estates."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -68.82,
              -32.95
            ],
            [
              -68.72,
              -32.93
            ],
            [
              -68.62,
              -32.94
            ],
            [
              -68.54,
              -32.98
            ],
            [
              -68.48,
              -33.02
            ],
            [
              -68.49,
              -33.1
            ],
            [
              -68.52,
              -33.18
            ],
            [
              -68.62,
              -33.19
            ],
            [
              -68.7,
              -33.19
            ],
            [
              -68.78,
              -33.16
            ],
            [
              -68.82,
              -33.12
            ],
            [
              -68.84,
              -33.04
            ],
            [
              -68.82,
              -32.95
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "san-rafael",
      "properties": {
        "id": "san-rafael",
        "parentSubregionId": "san-rafael",
        "subregionId": "san-rafael",
        "name": "San Rafael (Valle de Atuel)",
        "category": "Southern Oasis & Chenin / Cabernet",
        "dominantGrape": "Malbec & Cabernet Sauvignon",
        "color": "#1A5276",
        "accent": "#5DADE2",
        "fillOpacity": 0.22,
        "labelCenter": [
          -68.35,
          -34.62
        ],
        "description": "Independent southern oasis watered by the Diamante and Atuel rivers with lower elevation and continental warmth."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -68.55,
              -34.5
            ],
            [
              -68.42,
              -34.48
            ],
            [
              -68.28,
              -34.5
            ],
            [
              -68.18,
              -34.56
            ],
            [
              -68.16,
              -34.65
            ],
            [
              -68.22,
              -34.74
            ],
            [
              -68.34,
              -34.78
            ],
            [
              -68.46,
              -34.76
            ],
            [
              -68.56,
              -34.7
            ],
            [
              -68.58,
              -34.6
            ],
            [
              -68.55,
              -34.5
            ]
          ]
        ]
      }
    }
  ]
},
  "south-africa": {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "stellenbosch",
      "properties": {
        "id": "stellenbosch",
        "parentSubregionId": "stellenbosch",
        "subregionId": "stellenbosch",
        "name": "Stellenbosch (Simonsberg & Helderberg)",
        "category": "Decomposed Granite Mountain Slopes",
        "dominantGrape": "Cabernet Sauvignon, Pinotage & Chenin",
        "color": "#6a1b9a",
        "accent": "#e1bee7",
        "fillOpacity": 0.28,
        "labelCenter": [
          18.86,
          -33.94
        ],
        "description": "The historical heart of Cape fine wine nestled against Simonsberg and Helderberg granite peaks (Kanonkop, Meerlust Rubicon)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              18.78,
              -33.86
            ],
            [
              18.88,
              -33.85
            ],
            [
              18.96,
              -33.9
            ],
            [
              18.98,
              -34
            ],
            [
              18.94,
              -34.06
            ],
            [
              18.84,
              -34.08
            ],
            [
              18.75,
              -34.02
            ],
            [
              18.74,
              -33.92
            ],
            [
              18.78,
              -33.86
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "swartland",
      "properties": {
        "id": "swartland",
        "parentSubregionId": "swartland",
        "subregionId": "swartland",
        "name": "Swartland (Paardeberg Granite & Schist)",
        "category": "Old Bush Vines & Revolution Terroir",
        "dominantGrape": "Syrah & Chenin Blanc",
        "color": "#bf360c",
        "accent": "#ffab91",
        "fillOpacity": 0.24,
        "labelCenter": [
          18.75,
          -33.5
        ],
        "description": "Arid blackland valleys and decomposed granite of Paardeberg mountain; dry-farmed bush vines and natural winemaking movement (Sadie Family Columella, Mullineux)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              18.62,
              -33.36
            ],
            [
              18.74,
              -33.34
            ],
            [
              18.84,
              -33.36
            ],
            [
              18.92,
              -33.44
            ],
            [
              18.95,
              -33.58
            ],
            [
              18.88,
              -33.68
            ],
            [
              18.72,
              -33.7
            ],
            [
              18.58,
              -33.62
            ],
            [
              18.55,
              -33.48
            ],
            [
              18.62,
              -33.36
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "walker-bay",
      "properties": {
        "id": "walker-bay",
        "parentSubregionId": "walker-bay",
        "subregionId": "walker-bay",
        "name": "Walker Bay (Hemel-en-Aarde Valley)",
        "category": "Antarctic Benguela Current & Bokkeveld Shale",
        "dominantGrape": "Pinot Noir & Chardonnay",
        "color": "#01579b",
        "accent": "#81d4fa",
        "fillOpacity": 0.26,
        "labelCenter": [
          19.28,
          -34.38
        ],
        "description": "Heaven and Earth Valley cooled by cold Antarctic sea breezes, producing Burgundy-rivalling Pinot Noir and Chardonnay (Hamilton Russell)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              19.18,
              -34.3
            ],
            [
              19.26,
              -34.27
            ],
            [
              19.34,
              -34.28
            ],
            [
              19.42,
              -34.34
            ],
            [
              19.45,
              -34.42
            ],
            [
              19.38,
              -34.48
            ],
            [
              19.28,
              -34.48
            ],
            [
              19.2,
              -34.45
            ],
            [
              19.16,
              -34.38
            ],
            [
              19.18,
              -34.3
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "constantia",
      "properties": {
        "id": "constantia",
        "parentSubregionId": "constantia",
        "subregionId": "constantia",
        "name": "Constantia (Historic Peninsula Slopes)",
        "category": "Historic 1685 Peninsula Slopes & Muscat Blanc",
        "dominantGrape": "Muscat de Frontignan & Sauvignon Blanc",
        "color": "#e65100",
        "accent": "#ffe082",
        "fillOpacity": 0.28,
        "labelCenter": [
          18.42,
          -34.03
        ],
        "description": "Ancient east-facing Table Mountain granite amphitheater home to 18th-century royal sweet wine legend Vin de Constance (Klein Constantia)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              18.38,
              -33.98
            ],
            [
              18.44,
              -33.97
            ],
            [
              18.48,
              -34.01
            ],
            [
              18.48,
              -34.06
            ],
            [
              18.44,
              -34.1
            ],
            [
              18.38,
              -34.1
            ],
            [
              18.35,
              -34.05
            ],
            [
              18.35,
              -34
            ],
            [
              18.38,
              -33.98
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "franschhoek",
      "properties": {
        "id": "franschhoek",
        "parentSubregionId": "franschhoek",
        "subregionId": "franschhoek",
        "name": "Franschhoek Valley",
        "category": "Huguenot Valley Amphitheater & Old Semillon",
        "dominantGrape": "Cabernet Sauvignon, Syrah & Semillon",
        "color": "#b71c1c",
        "accent": "#ef9a9a",
        "fillOpacity": 0.24,
        "labelCenter": [
          19.08,
          -33.91
        ],
        "description": "Dramatic cul-de-sac mountain valley settled by French Huguenots in 1688, retaining century-old pre-phylloxera Semillon bush vines (Boekenhoutskloof)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              19,
              -33.85
            ],
            [
              19.08,
              -33.84
            ],
            [
              19.15,
              -33.88
            ],
            [
              19.18,
              -33.94
            ],
            [
              19.16,
              -33.99
            ],
            [
              19.1,
              -34.02
            ],
            [
              19.04,
              -34
            ],
            [
              18.98,
              -33.94
            ],
            [
              18.98,
              -33.88
            ],
            [
              19,
              -33.85
            ]
          ]
        ]
      }
    }
  ]
},
  "new-zealand": {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "marlborough",
      "properties": {
        "id": "marlborough",
        "parentSubregionId": "marlborough",
        "subregionId": "marlborough",
        "name": "Marlborough (Wairau & Awatere Valleys)",
        "category": "Greywacke River Stones & Pungent Sauvignon",
        "dominantGrape": "Sauvignon Blanc & Pinot Noir",
        "color": "#004d40",
        "accent": "#80cbc4",
        "fillOpacity": 0.26,
        "labelCenter": [
          173.85,
          -41.52
        ],
        "description": "Ancient glacial greywacke riverbeds bathed in extreme UV sunshine crafting world-defining gooseberry and passionfruit Sauvignon Blanc (Cloudy Bay)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              173.7,
              -41.42
            ],
            [
              173.85,
              -41.38
            ],
            [
              173.98,
              -41.42
            ],
            [
              174.08,
              -41.5
            ],
            [
              174.12,
              -41.6
            ],
            [
              174.05,
              -41.72
            ],
            [
              173.88,
              -41.7
            ],
            [
              173.75,
              -41.64
            ],
            [
              173.65,
              -41.52
            ],
            [
              173.7,
              -41.42
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "central-otago",
      "properties": {
        "id": "central-otago",
        "parentSubregionId": "central-otago",
        "subregionId": "central-otago",
        "name": "Central Otago (Bannockburn & Gibbston)",
        "category": "World's Southernmost Continental Schist Terraces",
        "dominantGrape": "Pinot Noir",
        "color": "#311b92",
        "accent": "#b388ff",
        "fillOpacity": 0.28,
        "labelCenter": [
          169.2,
          -45.06
        ],
        "description": "Semi-arid continental mountain basin framed by the Southern Alps on mica-schist soils producing muscular, wild herb-inflected Pinot Noir (Felton Road)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              169.05,
              -44.95
            ],
            [
              169.18,
              -44.92
            ],
            [
              169.3,
              -44.96
            ],
            [
              169.38,
              -45.04
            ],
            [
              169.42,
              -45.15
            ],
            [
              169.34,
              -45.24
            ],
            [
              169.22,
              -45.24
            ],
            [
              169.12,
              -45.2
            ],
            [
              169.04,
              -45.1
            ],
            [
              169.05,
              -44.95
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "hawkes-bay",
      "properties": {
        "id": "hawkes-bay",
        "parentSubregionId": "hawkes-bay",
        "subregionId": "hawkes-bay",
        "name": "Hawke's Bay (Gimblett Gravels)",
        "category": "Thermal Ancient Riverbed Gravels & Syrah",
        "dominantGrape": "Syrah & Cabernet / Merlot Blends",
        "color": "#880e4f",
        "accent": "#f48fb1",
        "fillOpacity": 0.24,
        "labelCenter": [
          176.75,
          -39.62
        ],
        "description": "Sunny North Island haven featuring the 800ha Gimblett Gravels dry riverbed producing aristocratic Syrah and Bordeaux blends (Te Mata Coleraine)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              176.62,
              -39.5
            ],
            [
              176.75,
              -39.48
            ],
            [
              176.88,
              -39.52
            ],
            [
              176.94,
              -39.6
            ],
            [
              176.95,
              -39.72
            ],
            [
              176.88,
              -39.8
            ],
            [
              176.74,
              -39.8
            ],
            [
              176.64,
              -39.74
            ],
            [
              176.58,
              -39.62
            ],
            [
              176.62,
              -39.5
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "martinborough",
      "properties": {
        "id": "martinborough",
        "parentSubregionId": "martinborough",
        "subregionId": "martinborough",
        "name": "Martinborough (Wairarapa Terrace)",
        "category": "Alluvial River Terrace & Savory Abel Clone Pinot",
        "dominantGrape": "Pinot Noir (Abel Clone)",
        "color": "#4a148c",
        "accent": "#ce93d8",
        "fillOpacity": 0.25,
        "labelCenter": [
          175.45,
          -41.22
        ],
        "description": "Free-draining alluvial river terrace swept by Cook Strait winds, cultivating complex, savory, forest-floor Pinot Noir (Ata Rangi)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              175.36,
              -41.15
            ],
            [
              175.45,
              -41.13
            ],
            [
              175.54,
              -41.16
            ],
            [
              175.58,
              -41.24
            ],
            [
              175.56,
              -41.32
            ],
            [
              175.48,
              -41.36
            ],
            [
              175.38,
              -41.34
            ],
            [
              175.3,
              -41.28
            ],
            [
              175.32,
              -41.2
            ],
            [
              175.36,
              -41.15
            ]
          ]
        ]
      }
    }
  ]
},
  "portugal": {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "douro",
      "properties": {
        "id": "douro",
        "parentSubregionId": "douro",
        "subregionId": "douro",
        "name": "Douro Valley (Cima Corgo & Douro Superior)",
        "category": "Vertical Pre-Cambrian Metamorphic Schist (Xisto)",
        "dominantGrape": "Touriga Nacional & Touriga Franca",
        "color": "#400010",
        "accent": "#D4AF37",
        "fillOpacity": 0.25,
        "description": "Steep hand-walled schist terraces along the Douro River, birthplace of legendary Vintage Ports and dry icon Barca-Velha.",
        "labelCenter": [
          -7.48,
          41.16
        ]
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -7.98,
              41.15
            ],
            [
              -7.82,
              41.24
            ],
            [
              -7.58,
              41.28
            ],
            [
              -7.35,
              41.34
            ],
            [
              -7.05,
              41.25
            ],
            [
              -6.85,
              41.15
            ],
            [
              -6.88,
              40.96
            ],
            [
              -7.15,
              41
            ],
            [
              -7.48,
              41.06
            ],
            [
              -7.78,
              41.04
            ],
            [
              -7.98,
              41.15
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "dao",
      "properties": {
        "id": "dao",
        "parentSubregionId": "dao",
        "subregionId": "dao",
        "name": "Dão (Serra da Estrela High Granite Plateau)",
        "category": "High Elevated Granite & Aristocratic Restraint",
        "dominantGrape": "Touriga Nacional & Encruzado",
        "color": "#7209B7",
        "accent": "#B5179E",
        "fillOpacity": 0.22,
        "description": "High mountain plateau sheltered by granite ranges; aristocratic, violet-perfumed reds and crystalline mineral Encruzado whites.",
        "labelCenter": [
          -7.8,
          40.52
        ]
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -8.15,
              40.65
            ],
            [
              -7.92,
              40.78
            ],
            [
              -7.65,
              40.74
            ],
            [
              -7.44,
              40.58
            ],
            [
              -7.5,
              40.35
            ],
            [
              -7.72,
              40.26
            ],
            [
              -8.02,
              40.34
            ],
            [
              -8.18,
              40.48
            ],
            [
              -8.15,
              40.65
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "alentejo",
      "properties": {
        "id": "alentejo",
        "parentSubregionId": "alentejo",
        "subregionId": "alentejo",
        "name": "Alentejo (Plains & Portalegre Mountains)",
        "category": "Sun-Drenched Plains & Ancient Amphorae (Talha)",
        "dominantGrape": "Aragonez, Trincadeira & Alicante Bouschet",
        "color": "#8B0000",
        "accent": "#FFB300",
        "fillOpacity": 0.2,
        "description": "Rolling cork-oak landscapes and high mountain enclaves producing opulent reds and ancient Roman-style Vinho de Talha.",
        "labelCenter": [
          -7.7,
          38.65
        ]
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -8.1,
              38.92
            ],
            [
              -7.75,
              39.04
            ],
            [
              -7.42,
              38.96
            ],
            [
              -7.28,
              38.74
            ],
            [
              -7.36,
              38.4
            ],
            [
              -7.62,
              38.25
            ],
            [
              -7.95,
              38.3
            ],
            [
              -8.14,
              38.6
            ],
            [
              -8.1,
              38.92
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "vinho-verde",
      "properties": {
        "id": "vinho-verde",
        "parentSubregionId": "vinho-verde",
        "subregionId": "vinho-verde",
        "name": "Vinho Verde (Monção & Melgaço Alvarinho)",
        "category": "Atlantic Granite River Terraces",
        "dominantGrape": "Alvarinho (100%)",
        "color": "#2E7D32",
        "accent": "#A5D6A7",
        "fillOpacity": 0.22,
        "description": "Lush green Atlantic microclimate along the Minho River crafting dry, saline, ageworthy Alvarinho (Anselmo Mendes).",
        "labelCenter": [
          -8.48,
          41.82
        ]
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -8.85,
              42.15
            ],
            [
              -8.52,
              42.18
            ],
            [
              -8.18,
              42.12
            ],
            [
              -8.12,
              41.8
            ],
            [
              -8.25,
              41.45
            ],
            [
              -8.55,
              41.35
            ],
            [
              -8.74,
              41.52
            ],
            [
              -8.88,
              41.72
            ],
            [
              -8.85,
              42.15
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "bairrada",
      "properties": {
        "id": "bairrada",
        "parentSubregionId": "bairrada",
        "subregionId": "bairrada",
        "name": "Bairrada (Barro Clay-Limestone & Sand)",
        "category": "Atlantic Fog & Noble High-Tannin Baga",
        "dominantGrape": "Baga",
        "color": "#5E17EB",
        "accent": "#C77DFF",
        "fillOpacity": 0.24,
        "labelCenter": [
          -8.52,
          40.38
        ],
        "description": "Chalky clay and coastal sand dunes hosting pre-phylloxera ungrafted bush vines of heroic, ageworthy Baga (Luis Pato)."
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -8.68,
              40.52
            ],
            [
              -8.58,
              40.56
            ],
            [
              -8.46,
              40.54
            ],
            [
              -8.38,
              40.48
            ],
            [
              -8.36,
              40.4
            ],
            [
              -8.38,
              40.3
            ],
            [
              -8.42,
              40.22
            ],
            [
              -8.52,
              40.19
            ],
            [
              -8.6,
              40.22
            ],
            [
              -8.68,
              40.3
            ],
            [
              -8.72,
              40.42
            ],
            [
              -8.68,
              40.52
            ]
          ]
        ]
      }
    }
  ]
},
};

export const WINE_REGION_OUTLINES = {
  "champagne": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "champagne-outline",
        "properties": {
          "name": "Champagne AOC Delimited Region",
          "description": "The historic northern and southern viticultural basins of Champagne."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  3.22,
                  48.95
                ],
                [
                  3.23,
                  49.01
                ],
                [
                  3.34,
                  49.07
                ],
                [
                  3.62,
                  49.18
                ],
                [
                  3.82,
                  49.385
                ],
                [
                  3.95,
                  49.385
                ],
                [
                  4.1,
                  49.33
                ],
                [
                  4.22,
                  49.3
                ],
                [
                  4.26,
                  49.2
                ],
                [
                  4.28,
                  49.07
                ],
                [
                  4.42,
                  48.93
                ],
                [
                  4.82,
                  48.84
                ],
                [
                  4.82,
                  48.73
                ],
                [
                  4.54,
                  48.72
                ],
                [
                  4.12,
                  48.82
                ],
                [
                  3.84,
                  48.8
                ],
                [
                  3.82,
                  48.74
                ],
                [
                  3.74,
                  48.6
                ],
                [
                  3.52,
                  48.56
                ],
                [
                  3.44,
                  48.75
                ],
                [
                  3.22,
                  48.95
                ]
              ]
            ],
            [
              [
                [
                  3.92,
                  48.28
                ],
                [
                  3.99,
                  48.33
                ],
                [
                  4.24,
                  48.33
                ],
                [
                  4.62,
                  48.3
                ],
                [
                  4.86,
                  48.3
                ],
                [
                  4.87,
                  48.18
                ],
                [
                  4.65,
                  48.1
                ],
                [
                  4.65,
                  48.04
                ],
                [
                  4.48,
                  47.92
                ],
                [
                  4.32,
                  47.91
                ],
                [
                  4.23,
                  47.94
                ],
                [
                  4.23,
                  48.04
                ],
                [
                  4.32,
                  48.15
                ],
                [
                  4.48,
                  48.16
                ],
                [
                  4.32,
                  48.24
                ],
                [
                  3.92,
                  48.28
                ]
              ]
            ]
          ]
        }
      }
    ]
  },
  "burgundy": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "burgundy-outline",
        "properties": {
          "id": "burgundy-outline",
          "name": "Burgundy (Bourgogne) AOC Delimited Wine Region",
          "frenchName": "Vignoble de Bourgogne",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 30052,
          "color": "#800020",
          "accent": "#d4af37",
          "description": "Delimited perimeter of Burgundy fine wine terroirs from Chablis and the Grand Auxerrois in the north down the limestone escarpment of the Côte d'Or, Côte Chalonnaise, and Mâconnais."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                3.715,
                47.925
              ],
              [
                3.825,
                47.915
              ],
              [
                3.965,
                47.885
              ],
              [
                4.185,
                47.835
              ],
              [
                4.425,
                47.785
              ],
              [
                4.685,
                47.625
              ],
              [
                4.915,
                47.455
              ],
              [
                5.035,
                47.365
              ],
              [
                5.085,
                47.235
              ],
              [
                5.035,
                47.125
              ],
              [
                4.935,
                47.025
              ],
              [
                4.885,
                46.815
              ],
              [
                4.905,
                46.565
              ],
              [
                4.845,
                46.335
              ],
              [
                4.765,
                46.225
              ],
              [
                4.695,
                46.285
              ],
              [
                4.635,
                46.435
              ],
              [
                4.625,
                46.615
              ],
              [
                4.605,
                46.755
              ],
              [
                4.645,
                46.905
              ],
              [
                4.695,
                47.035
              ],
              [
                4.845,
                47.225
              ],
              [
                4.935,
                47.335
              ],
              [
                4.615,
                47.415
              ],
              [
                4.485,
                47.545
              ],
              [
                4.285,
                47.625
              ],
              [
                4.015,
                47.685
              ],
              [
                3.645,
                47.725
              ],
              [
                3.565,
                47.815
              ],
              [
                3.615,
                47.895
              ],
              [
                3.715,
                47.925
              ]
            ]
          ]
        }
      }
    ]
  },
  "alsace": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "alsace-outline",
        "properties": {
          "id": "alsace-outline",
          "name": "Alsace AOC Delimited Wine Region",
          "frenchName": "Vignoble d'Alsace",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 15600,
          "color": "#2E7D32",
          "accent": "#D4AF37",
          "description": "The 120km slender sub-Vosgian fault corridor stretching from Wissembourg and Marlenheim (Bas-Rhin) south through Colmar to Thann (Haut-Rhin), sheltered between the Vosges crest and the Rhine plain."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                7.42,
                48.76
              ],
              [
                7.48,
                48.77
              ],
              [
                7.56,
                48.72
              ],
              [
                7.62,
                48.65
              ],
              [
                7.61,
                48.56
              ],
              [
                7.58,
                48.46
              ],
              [
                7.56,
                48.36
              ],
              [
                7.55,
                48.24
              ],
              [
                7.54,
                48.12
              ],
              [
                7.5,
                48
              ],
              [
                7.44,
                47.9
              ],
              [
                7.36,
                47.8
              ],
              [
                7.25,
                47.73
              ],
              [
                7.14,
                47.72
              ],
              [
                7.05,
                47.78
              ],
              [
                7.06,
                47.92
              ],
              [
                7.09,
                48.04
              ],
              [
                7.12,
                48.18
              ],
              [
                7.16,
                48.32
              ],
              [
                7.21,
                48.46
              ],
              [
                7.26,
                48.6
              ],
              [
                7.34,
                48.7
              ],
              [
                7.42,
                48.76
              ]
            ]
          ]
        }
      }
    ]
  },
  "corsica": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "corsica-outline",
        "properties": {
          "id": "corsica-outline",
          "name": "Corsica (Corse AOC & Île de Beauté)",
          "frenchName": "Vignoble de Corse",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 7000,
          "color": "#E65100",
          "accent": "#00838F",
          "description": "Maritime perimeter of the Isle of Beauty, enclosing 9 AOC appellations spanning granite slopes (Ajaccio, Sartène), Cap Corse schist, Saint-Florent limestone (Patrimonio), and coastal alluvium."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.405,
                43.018
              ],
              [
                9.387,
                43.008
              ],
              [
                9.362,
                42.988
              ],
              [
                9.344,
                42.966
              ],
              [
                9.352,
                42.943
              ],
              [
                9.348,
                42.905
              ],
              [
                9.336,
                42.875
              ],
              [
                9.328,
                42.842
              ],
              [
                9.332,
                42.812
              ],
              [
                9.342,
                42.785
              ],
              [
                9.34,
                42.756
              ],
              [
                9.335,
                42.732
              ],
              [
                9.308,
                42.712
              ],
              [
                9.303,
                42.682
              ],
              [
                9.278,
                42.695
              ],
              [
                9.245,
                42.712
              ],
              [
                9.204,
                42.724
              ],
              [
                9.145,
                42.742
              ],
              [
                9.068,
                42.724
              ],
              [
                9.012,
                42.692
              ],
              [
                8.972,
                42.662
              ],
              [
                8.932,
                42.642
              ],
              [
                8.862,
                42.61
              ],
              [
                8.818,
                42.602
              ],
              [
                8.785,
                42.572
              ],
              [
                8.761,
                42.568
              ],
              [
                8.725,
                42.583
              ],
              [
                8.682,
                42.522
              ],
              [
                8.674,
                42.478
              ],
              [
                8.643,
                42.418
              ],
              [
                8.572,
                42.392
              ],
              [
                8.544,
                42.372
              ],
              [
                8.608,
                42.348
              ],
              [
                8.618,
                42.316
              ],
              [
                8.685,
                42.268
              ],
              [
                8.612,
                42.254
              ],
              [
                8.552,
                42.238
              ],
              [
                8.574,
                42.185
              ],
              [
                8.592,
                42.132
              ],
              [
                8.652,
                42.124
              ],
              [
                8.694,
                42.115
              ],
              [
                8.728,
                42.062
              ],
              [
                8.665,
                42.022
              ],
              [
                8.642,
                41.988
              ],
              [
                8.598,
                41.972
              ],
              [
                8.614,
                41.895
              ],
              [
                8.705,
                41.912
              ],
              [
                8.742,
                41.918
              ],
              [
                8.795,
                41.928
              ],
              [
                8.798,
                41.892
              ],
              [
                8.752,
                41.838
              ],
              [
                8.704,
                41.792
              ],
              [
                8.664,
                41.748
              ],
              [
                8.718,
                41.728
              ],
              [
                8.752,
                41.72
              ],
              [
                8.794,
                41.708
              ],
              [
                8.842,
                41.705
              ],
              [
                8.898,
                41.676
              ],
              [
                8.814,
                41.636
              ],
              [
                8.802,
                41.642
              ],
              [
                8.788,
                41.562
              ],
              [
                8.818,
                41.545
              ],
              [
                8.848,
                41.532
              ],
              [
                8.928,
                41.498
              ],
              [
                9.038,
                41.462
              ],
              [
                9.068,
                41.428
              ],
              [
                9.092,
                41.424
              ],
              [
                9.098,
                41.398
              ],
              [
                9.108,
                41.388
              ],
              [
                9.144,
                41.386
              ],
              [
                9.158,
                41.387
              ],
              [
                9.184,
                41.368
              ],
              [
                9.218,
                41.372
              ],
              [
                9.228,
                41.422
              ],
              [
                9.252,
                41.412
              ],
              [
                9.278,
                41.472
              ],
              [
                9.276,
                41.532
              ],
              [
                9.308,
                41.558
              ],
              [
                9.318,
                41.582
              ],
              [
                9.288,
                41.588
              ],
              [
                9.364,
                41.594
              ],
              [
                9.352,
                41.632
              ],
              [
                9.378,
                41.682
              ],
              [
                9.404,
                41.714
              ],
              [
                9.402,
                41.776
              ],
              [
                9.408,
                41.86
              ],
              [
                9.418,
                41.918
              ],
              [
                9.444,
                42.012
              ],
              [
                9.488,
                42.058
              ],
              [
                9.538,
                42.142
              ],
              [
                9.544,
                42.188
              ],
              [
                9.554,
                42.258
              ],
              [
                9.562,
                42.318
              ],
              [
                9.548,
                42.378
              ],
              [
                9.536,
                42.448
              ],
              [
                9.53,
                42.492
              ],
              [
                9.508,
                42.548
              ],
              [
                9.498,
                42.618
              ],
              [
                9.452,
                42.698
              ],
              [
                9.448,
                42.724
              ],
              [
                9.462,
                42.748
              ],
              [
                9.478,
                42.774
              ],
              [
                9.492,
                42.812
              ],
              [
                9.496,
                42.844
              ],
              [
                9.492,
                42.878
              ],
              [
                9.488,
                42.924
              ],
              [
                9.458,
                42.962
              ],
              [
                9.452,
                42.978
              ],
              [
                9.442,
                43.002
              ],
              [
                9.405,
                43.018
              ]
            ]
          ]
        }
      }
    ]
  },
  "bordeaux": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "bordeaux-outline",
        "properties": {
          "name": "Bordeaux Wine Region",
          "frenchName": "Vignoble de Bordeaux",
          "category": "Delimited Regional Viticultural Perimeter",
          "color": "#d4af37",
          "description": "The world benchmark fine wine region structured cleanly around the Gironde estuary and the convergence of the Garonne and Dordogne rivers."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  -1.065,
                  45.57
                ],
                [
                  -1.085,
                  45.54
                ],
                [
                  -1.11,
                  45.49
                ],
                [
                  -1.125,
                  45.44
                ],
                [
                  -1.11,
                  45.38
                ],
                [
                  -1.06,
                  45.31
                ],
                [
                  -1.01,
                  45.23
                ],
                [
                  -0.95,
                  45.16
                ],
                [
                  -0.89,
                  45.08
                ],
                [
                  -0.82,
                  45.01
                ],
                [
                  -0.74,
                  44.95
                ],
                [
                  -0.67,
                  44.91
                ],
                [
                  -0.625,
                  44.82
                ],
                [
                  -0.665,
                  44.795
                ],
                [
                  -0.66,
                  44.735
                ],
                [
                  -0.625,
                  44.69
                ],
                [
                  -0.61,
                  44.63
                ],
                [
                  -0.575,
                  44.56
                ],
                [
                  -0.51,
                  44.5
                ],
                [
                  -0.44,
                  44.46
                ],
                [
                  -0.37,
                  44.445
                ],
                [
                  -0.3,
                  44.455
                ],
                [
                  -0.24,
                  44.49
                ],
                [
                  -0.22,
                  44.535
                ],
                [
                  -0.24,
                  44.545
                ],
                [
                  -0.27,
                  44.57
                ],
                [
                  -0.305,
                  44.6
                ],
                [
                  -0.34,
                  44.615
                ],
                [
                  -0.36,
                  44.64
                ],
                [
                  -0.4,
                  44.665
                ],
                [
                  -0.445,
                  44.685
                ],
                [
                  -0.49,
                  44.7
                ],
                [
                  -0.51,
                  44.74
                ],
                [
                  -0.535,
                  44.77
                ],
                [
                  -0.55,
                  44.8
                ],
                [
                  -0.575,
                  44.82
                ],
                [
                  -0.585,
                  44.91
                ],
                [
                  -0.595,
                  44.95
                ],
                [
                  -0.615,
                  44.99
                ],
                [
                  -0.655,
                  45.04
                ],
                [
                  -0.69,
                  45.09
                ],
                [
                  -0.71,
                  45.13
                ],
                [
                  -0.73,
                  45.17
                ],
                [
                  -0.745,
                  45.21
                ],
                [
                  -0.765,
                  45.26
                ],
                [
                  -0.795,
                  45.285
                ],
                [
                  -0.84,
                  45.33
                ],
                [
                  -0.89,
                  45.36
                ],
                [
                  -0.94,
                  45.38
                ],
                [
                  -0.97,
                  45.42
                ],
                [
                  -0.995,
                  45.465
                ],
                [
                  -1.02,
                  45.51
                ],
                [
                  -1.048,
                  45.55
                ],
                [
                  -1.065,
                  45.57
                ]
              ]
            ],
            [
              [
                [
                  -0.66,
                  45.3
                ],
                [
                  -0.64,
                  45.24
                ],
                [
                  -0.65,
                  45.18
                ],
                [
                  -0.665,
                  45.13
                ],
                [
                  -0.645,
                  45.1
                ],
                [
                  -0.605,
                  45.06
                ],
                [
                  -0.56,
                  45.04
                ],
                [
                  -0.51,
                  45.02
                ],
                [
                  -0.46,
                  45.01
                ],
                [
                  -0.37,
                  44.965
                ],
                [
                  -0.34,
                  44.95
                ],
                [
                  -0.3,
                  44.93
                ],
                [
                  -0.25,
                  44.915
                ],
                [
                  -0.19,
                  44.88
                ],
                [
                  -0.14,
                  44.86
                ],
                [
                  -0.1,
                  44.85
                ],
                [
                  -0.04,
                  44.853
                ],
                [
                  0.03,
                  44.855
                ],
                [
                  0.1,
                  44.86
                ],
                [
                  0.12,
                  44.92
                ],
                [
                  0.05,
                  44.96
                ],
                [
                  -0.04,
                  44.985
                ],
                [
                  -0.12,
                  45.005
                ],
                [
                  -0.18,
                  45
                ],
                [
                  -0.24,
                  45.01
                ],
                [
                  -0.29,
                  44.995
                ],
                [
                  -0.34,
                  44.995
                ],
                [
                  -0.44,
                  45.07
                ],
                [
                  -0.445,
                  45.14
                ],
                [
                  -0.47,
                  45.215
                ],
                [
                  -0.52,
                  45.275
                ],
                [
                  -0.58,
                  45.305
                ],
                [
                  -0.66,
                  45.3
                ]
              ]
            ],
            [
              [
                [
                  -0.34,
                  44.91
                ],
                [
                  -0.27,
                  44.88
                ],
                [
                  -0.21,
                  44.84
                ],
                [
                  -0.15,
                  44.82
                ],
                [
                  -0.08,
                  44.815
                ],
                [
                  -0.02,
                  44.82
                ],
                [
                  0.07,
                  44.82
                ],
                [
                  0.18,
                  44.82
                ],
                [
                  0.14,
                  44.75
                ],
                [
                  0.08,
                  44.66
                ],
                [
                  0.01,
                  44.6
                ],
                [
                  -0.04,
                  44.58
                ],
                [
                  -0.14,
                  44.575
                ],
                [
                  -0.2,
                  44.565
                ],
                [
                  -0.21,
                  44.565
                ],
                [
                  -0.24,
                  44.595
                ],
                [
                  -0.26,
                  44.615
                ],
                [
                  -0.3,
                  44.64
                ],
                [
                  -0.35,
                  44.67
                ],
                [
                  -0.4,
                  44.7
                ],
                [
                  -0.45,
                  44.74
                ],
                [
                  -0.49,
                  44.78
                ],
                [
                  -0.47,
                  44.78
                ],
                [
                  -0.46,
                  44.83
                ],
                [
                  -0.42,
                  44.88
                ],
                [
                  -0.34,
                  44.91
                ]
              ]
            ]
          ]
        }
      }
    ]
  },
  "rhone": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "rhone-outline",
        "properties": {
          "name": "Rhône Valley Wine Region",
          "description": "The dynamic river corridor from Vienne to Avignon linking steep granitic northern crus with sun-drenched southern limestone basins."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.74,
                45.58
              ],
              [
                4.86,
                45.56
              ],
              [
                4.92,
                45.42
              ],
              [
                4.9,
                45.26
              ],
              [
                4.96,
                45.12
              ],
              [
                4.95,
                44.96
              ],
              [
                4.88,
                44.82
              ],
              [
                4.82,
                44.65
              ],
              [
                4.86,
                44.48
              ],
              [
                5.08,
                44.38
              ],
              [
                5.24,
                44.24
              ],
              [
                5.22,
                44.02
              ],
              [
                5.08,
                43.86
              ],
              [
                4.86,
                43.82
              ],
              [
                4.64,
                43.86
              ],
              [
                4.54,
                44.04
              ],
              [
                4.52,
                44.25
              ],
              [
                4.62,
                44.5
              ],
              [
                4.7,
                44.75
              ],
              [
                4.74,
                45
              ],
              [
                4.68,
                45.25
              ],
              [
                4.66,
                45.45
              ],
              [
                4.74,
                45.58
              ]
            ]
          ]
        }
      }
    ]
  },
  "loire-valley": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "loire-outline",
        "properties": {
          "id": "loire-outline",
          "name": "Loire Valley (Vallée de la Loire AOC)",
          "frenchName": "Vignoble de la Vallée de la Loire",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 57200,
          "color": "#00695C",
          "accent": "#FBC02D",
          "description": "France's royal river wine axis spanning 1,000 kilometers from the Atlantic coast of Pays Nantais (Muscadet) through Anjou-Saumur, Touraine (Chinon, Vouvray), to the flinty hills of Centre-Loire (Sancerre, Pouilly-Fumé)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -2.08,
                47.24
              ],
              [
                -1.98,
                47.32
              ],
              [
                -1.76,
                47.36
              ],
              [
                -1.46,
                47.42
              ],
              [
                -1.12,
                47.48
              ],
              [
                -0.78,
                47.52
              ],
              [
                -0.42,
                47.54
              ],
              [
                -0.08,
                47.48
              ],
              [
                0.26,
                47.46
              ],
              [
                0.62,
                47.52
              ],
              [
                1.02,
                47.58
              ],
              [
                1.42,
                47.64
              ],
              [
                1.82,
                47.66
              ],
              [
                2.24,
                47.6
              ],
              [
                2.68,
                47.62
              ],
              [
                2.98,
                47.58
              ],
              [
                3.18,
                47.42
              ],
              [
                3.22,
                47.24
              ],
              [
                3.12,
                47.08
              ],
              [
                2.88,
                46.96
              ],
              [
                2.52,
                46.9
              ],
              [
                2.12,
                46.92
              ],
              [
                1.8,
                47.02
              ],
              [
                1.44,
                47.16
              ],
              [
                1.08,
                47.18
              ],
              [
                0.68,
                47.08
              ],
              [
                0.24,
                47.05
              ],
              [
                -0.18,
                47.04
              ],
              [
                -0.56,
                47.12
              ],
              [
                -0.92,
                47.18
              ],
              [
                -1.28,
                46.96
              ],
              [
                -1.62,
                46.94
              ],
              [
                -1.94,
                47.08
              ],
              [
                -2.08,
                47.24
              ]
            ]
          ]
        }
      }
    ]
  },
  "piedmont": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "piedmont-outline",
        "properties": {
          "name": "Piedmont (Piemonte) Wine Region",
          "description": "At the foot of the Alps: the hilly kingdoms of the Langhe, Roero, and Monferrato framing the Tanaro and Po valleys."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                7.85,
                44.68
              ],
              [
                7.9,
                44.76
              ],
              [
                7.92,
                44.85
              ],
              [
                8.08,
                44.92
              ],
              [
                8.28,
                44.94
              ],
              [
                8.35,
                45.15
              ],
              [
                8.32,
                45.45
              ],
              [
                8.26,
                45.68
              ],
              [
                8.48,
                45.68
              ],
              [
                8.52,
                45.5
              ],
              [
                8.45,
                45.15
              ],
              [
                8.55,
                44.95
              ],
              [
                8.9,
                44.8
              ],
              [
                8.92,
                44.65
              ],
              [
                8.75,
                44.55
              ],
              [
                8.45,
                44.52
              ],
              [
                8.32,
                44.44
              ],
              [
                8.15,
                44.42
              ],
              [
                7.98,
                44.46
              ],
              [
                7.82,
                44.5
              ],
              [
                7.78,
                44.6
              ],
              [
                7.85,
                44.68
              ]
            ]
          ]
        }
      }
    ]
  },
  "tuscany": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "tuscany-outline",
        "properties": {
          "name": "Tuscany (Toscana) Wine Region",
          "description": "The quintessential Italian wine country spanning the Chianti hills, Montalcino, Montepulciano, and the Tyrrhenian coast."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                11.15,
                43.78
              ],
              [
                11.28,
                43.79
              ],
              [
                11.42,
                43.74
              ],
              [
                11.55,
                43.65
              ],
              [
                11.6,
                43.52
              ],
              [
                11.68,
                43.42
              ],
              [
                11.88,
                43.28
              ],
              [
                11.94,
                43.15
              ],
              [
                11.92,
                43.02
              ],
              [
                11.8,
                42.92
              ],
              [
                11.62,
                42.88
              ],
              [
                11.48,
                42.72
              ],
              [
                11.42,
                42.55
              ],
              [
                11.28,
                42.44
              ],
              [
                11.1,
                42.46
              ],
              [
                10.92,
                42.58
              ],
              [
                10.82,
                42.75
              ],
              [
                10.68,
                42.92
              ],
              [
                10.52,
                43.08
              ],
              [
                10.46,
                43.26
              ],
              [
                10.48,
                43.42
              ],
              [
                10.6,
                43.6
              ],
              [
                10.85,
                43.72
              ],
              [
                11.02,
                43.76
              ],
              [
                11.15,
                43.78
              ]
            ]
          ]
        }
      }
    ]
  },
  "california": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "california-outline",
        "properties": {
          "id": "california-outline",
          "name": "California North Coast Wine Region (Napa & Sonoma)",
          "category": "Official Regional AVA Boundary",
          "areaHa": 60000,
          "color": "#1B5E20",
          "accent": "#F57F17",
          "description": "California's benchmark North Coast fine wine perimeter framing the Napa Valley floor and mountain benches, Sonoma Valley, Russian River Valley, and Pacific coastal fog corridor."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.531,
                38.756
              ],
              [
                -123.485,
                38.718
              ],
              [
                -123.402,
                38.653
              ],
              [
                -123.335,
                38.567
              ],
              [
                -123.298,
                38.552
              ],
              [
                -123.275,
                38.532
              ],
              [
                -123.244,
                38.514
              ],
              [
                -123.16,
                38.468
              ],
              [
                -123.125,
                38.448
              ],
              [
                -123.098,
                38.398
              ],
              [
                -123.07,
                38.356
              ],
              [
                -123.064,
                38.308
              ],
              [
                -123.048,
                38.305
              ],
              [
                -122.998,
                38.293
              ],
              [
                -122.965,
                38.25
              ],
              [
                -122.825,
                38.095
              ],
              [
                -122.685,
                38.165
              ],
              [
                -122.585,
                38.15
              ],
              [
                -122.505,
                38.115
              ],
              [
                -122.485,
                38.112
              ],
              [
                -122.425,
                38.125
              ],
              [
                -122.405,
                38.14
              ],
              [
                -122.285,
                38.105
              ],
              [
                -122.26,
                38.155
              ],
              [
                -122.245,
                38.21
              ],
              [
                -122.215,
                38.27
              ],
              [
                -122.205,
                38.345
              ],
              [
                -122.24,
                38.435
              ],
              [
                -122.27,
                38.495
              ],
              [
                -122.315,
                38.56
              ],
              [
                -122.385,
                38.65
              ],
              [
                -122.48,
                38.695
              ],
              [
                -122.545,
                38.61
              ],
              [
                -122.635,
                38.67
              ],
              [
                -122.765,
                38.785
              ],
              [
                -122.945,
                38.825
              ],
              [
                -123.015,
                38.835
              ],
              [
                -123.125,
                38.765
              ],
              [
                -123.325,
                38.745
              ],
              [
                -123.48,
                38.775
              ],
              [
                -123.531,
                38.756
              ]
            ]
          ]
        }
      }
    ]
  },
  "oregon": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "oregon-outline",
        "properties": {
          "id": "oregon-outline",
          "name": "Willamette Valley AVA Delimited Wine Region",
          "category": "Official Regional AVA Boundary",
          "areaHa": 1400000,
          "color": "#1B5E20",
          "accent": "#FFB300",
          "description": "Oregon's flagship cool-climate wine corridor spanning from the Columbia River near Portland south to Eugene, nestled between the Coast Range and Cascade Mountains."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.82,
                45.74
              ],
              [
                -122.68,
                45.62
              ],
              [
                -122.45,
                45.54
              ],
              [
                -122.42,
                45.36
              ],
              [
                -122.55,
                45.18
              ],
              [
                -122.62,
                44.95
              ],
              [
                -122.68,
                44.62
              ],
              [
                -122.75,
                44.32
              ],
              [
                -122.85,
                44.08
              ],
              [
                -122.98,
                43.82
              ],
              [
                -123.12,
                43.68
              ],
              [
                -123.22,
                43.76
              ],
              [
                -123.35,
                44.02
              ],
              [
                -123.42,
                44.3
              ],
              [
                -123.44,
                44.65
              ],
              [
                -123.46,
                44.98
              ],
              [
                -123.48,
                45.18
              ],
              [
                -123.42,
                45.38
              ],
              [
                -123.26,
                45.55
              ],
              [
                -123.08,
                45.68
              ],
              [
                -122.82,
                45.74
              ]
            ]
          ]
        }
      }
    ]
  },
  "germany-mosel": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "germany-mosel-outline",
        "properties": {
          "name": "Germany (Mosel & Rheingau / Nahe / Pfalz) Wine Region",
          "description": "Steep Devonian slate river valleys of the Mosel and Saar, complemented by the sunny south-facing Rhine, Nahe, and Pfalz terroirs."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  6.42,
                  49.52
                ],
                [
                  6.48,
                  49.66
                ],
                [
                  6.56,
                  49.74
                ],
                [
                  6.75,
                  49.82
                ],
                [
                  6.88,
                  49.96
                ],
                [
                  7.02,
                  50.08
                ],
                [
                  7.18,
                  50.12
                ],
                [
                  7.32,
                  50.05
                ],
                [
                  7.28,
                  49.9
                ],
                [
                  7.14,
                  49.8
                ],
                [
                  6.98,
                  49.72
                ],
                [
                  6.8,
                  49.6
                ],
                [
                  6.62,
                  49.46
                ],
                [
                  6.48,
                  49.46
                ],
                [
                  6.42,
                  49.52
                ]
              ]
            ],
            [
              [
                [
                  7.62,
                  49.92
                ],
                [
                  7.85,
                  50.08
                ],
                [
                  8.12,
                  50.1
                ],
                [
                  8.36,
                  50.06
                ],
                [
                  8.4,
                  49.85
                ],
                [
                  8.36,
                  49.55
                ],
                [
                  8.35,
                  49.28
                ],
                [
                  8.18,
                  49.24
                ],
                [
                  8.02,
                  49.32
                ],
                [
                  7.88,
                  49.48
                ],
                [
                  7.68,
                  49.65
                ],
                [
                  7.58,
                  49.78
                ],
                [
                  7.62,
                  49.92
                ]
              ]
            ]
          ]
        }
      }
    ]
  },
  "spain-rioja": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "spain-outline",
        "properties": {
          "id": "spain-outline",
          "name": "Spain Fine Wine Axis (Rioja, Ribera, Priorat & Rías Baixas)",
          "spanishName": "Eje de Calidad: Rioja, Ribera del Duero, Priorat y Rías Baixas",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 95000,
          "color": "#8B0000",
          "accent": "#FFB300",
          "description": "Spain's premier fine wine axis: the classical Rioja DOCa, high-altitude Ribera del Duero, dramatic black slate amphitheaters of Priorat, and green granite coastal fjords of Rías Baixas."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  -3.05,
                  42.65
                ],
                [
                  -2.6,
                  42.7
                ],
                [
                  -2.35,
                  42.6
                ],
                [
                  -1.75,
                  42.3
                ],
                [
                  -1.7,
                  41.95
                ],
                [
                  -2.15,
                  42
                ],
                [
                  -2.55,
                  42.25
                ],
                [
                  -3.05,
                  42.35
                ],
                [
                  -3.05,
                  42.65
                ]
              ]
            ],
            [
              [
                [
                  -4.42,
                  41.72
                ],
                [
                  -3.85,
                  41.76
                ],
                [
                  -3.35,
                  41.68
                ],
                [
                  -3.35,
                  41.48
                ],
                [
                  -3.95,
                  41.5
                ],
                [
                  -4.45,
                  41.55
                ],
                [
                  -4.42,
                  41.72
                ]
              ]
            ],
            [
              [
                [
                  0.68,
                  41.28
                ],
                [
                  0.88,
                  41.32
                ],
                [
                  0.98,
                  41.22
                ],
                [
                  0.94,
                  41.06
                ],
                [
                  0.78,
                  41.04
                ],
                [
                  0.65,
                  41.14
                ],
                [
                  0.68,
                  41.28
                ]
              ]
            ],
            [
              [
                [
                  -8.98,
                  42.65
                ],
                [
                  -8.7,
                  42.68
                ],
                [
                  -8.55,
                  42.5
                ],
                [
                  -8.55,
                  42.28
                ],
                [
                  -8.85,
                  42.25
                ],
                [
                  -8.98,
                  42.45
                ],
                [
                  -8.98,
                  42.65
                ]
              ]
            ]
          ]
        }
      }
    ]
  },
  "chile-maipo": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "chile-maipo-outline",
        "properties": {
          "name": "Chile Central Valley Wine Region",
          "description": "The Mediterranean corridor between the Andes and Coastal Range spanning Maipo, Cachapoal, Colchagua, and Casablanca."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  -71.65,
                  -33.15
                ],
                [
                  -71.48,
                  -33.1
                ],
                [
                  -71.32,
                  -33.14
                ],
                [
                  -71.2,
                  -33.26
                ],
                [
                  -71.22,
                  -33.42
                ],
                [
                  -71.36,
                  -33.52
                ],
                [
                  -71.55,
                  -33.55
                ],
                [
                  -71.68,
                  -33.42
                ],
                [
                  -71.65,
                  -33.15
                ]
              ]
            ],
            [
              [
                [
                  -70.82,
                  -33.5
                ],
                [
                  -70.55,
                  -33.48
                ],
                [
                  -70.4,
                  -33.55
                ],
                [
                  -70.38,
                  -33.75
                ],
                [
                  -70.52,
                  -33.95
                ],
                [
                  -70.78,
                  -34.18
                ],
                [
                  -70.95,
                  -34.35
                ],
                [
                  -71.02,
                  -34.6
                ],
                [
                  -71.12,
                  -34.8
                ],
                [
                  -71.36,
                  -34.85
                ],
                [
                  -71.55,
                  -34.75
                ],
                [
                  -71.56,
                  -34.5
                ],
                [
                  -71.42,
                  -34.2
                ],
                [
                  -71.24,
                  -33.95
                ],
                [
                  -71.1,
                  -33.72
                ],
                [
                  -70.82,
                  -33.5
                ]
              ]
            ]
          ]
        }
      }
    ]
  },
  "australia": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "australia-outline",
        "properties": {
          "name": "Australia Benchmark Wine Regions",
          "description": "Multi-region continent encompassing Barossa, Eden Valley, Coonawarra, Margaret River, and Hunter Valley."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  138.75,
                  -34.35
                ],
                [
                  139.1,
                  -34.3
                ],
                [
                  139.35,
                  -34.36
                ],
                [
                  139.4,
                  -34.62
                ],
                [
                  139.36,
                  -34.82
                ],
                [
                  139.08,
                  -34.86
                ],
                [
                  138.8,
                  -34.82
                ],
                [
                  138.72,
                  -34.58
                ],
                [
                  138.75,
                  -34.35
                ]
              ]
            ],
            [
              [
                [
                  114.9,
                  -33.55
                ],
                [
                  115.12,
                  -33.52
                ],
                [
                  115.28,
                  -33.62
                ],
                [
                  115.3,
                  -34
                ],
                [
                  115.26,
                  -34.4
                ],
                [
                  115.08,
                  -34.46
                ],
                [
                  114.92,
                  -34.38
                ],
                [
                  114.88,
                  -33.95
                ],
                [
                  114.9,
                  -33.55
                ]
              ]
            ],
            [
              [
                [
                  140.68,
                  -37.12
                ],
                [
                  140.85,
                  -37.1
                ],
                [
                  140.98,
                  -37.18
                ],
                [
                  141,
                  -37.38
                ],
                [
                  140.94,
                  -37.52
                ],
                [
                  140.78,
                  -37.52
                ],
                [
                  140.68,
                  -37.38
                ],
                [
                  140.66,
                  -37.22
                ],
                [
                  140.68,
                  -37.12
                ]
              ]
            ],
            [
              [
                [
                  151.05,
                  -32.55
                ],
                [
                  151.35,
                  -32.5
                ],
                [
                  151.55,
                  -32.6
                ],
                [
                  151.58,
                  -32.88
                ],
                [
                  151.48,
                  -33.05
                ],
                [
                  151.25,
                  -33.05
                ],
                [
                  151.05,
                  -32.9
                ],
                [
                  151,
                  -32.72
                ],
                [
                  151.05,
                  -32.55
                ]
              ]
            ]
          ]
        }
      }
    ]
  },
  "italy-other": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "italy-other-outline",
        "properties": {
          "id": "italy-other-outline",
          "name": "Veneto, Valtellina & Mount Etna Wine Regions",
          "italianName": "Regioni Vitivinicole del Veneto, Valtellina ed Etna",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 35000,
          "color": "#701C45",
          "accent": "#FFB300",
          "description": "Italy's distinctive regional enclaves: the appassimento hills of Valpolicella/Amarone and Soave in Veneto, the heroic alpine granite terraces of Valtellina in Lombardia, alongside the active volcanic ash slopes of Mount Etna in Sicily."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  10.68,
                  45.54
                ],
                [
                  10.72,
                  45.64
                ],
                [
                  10.84,
                  45.68
                ],
                [
                  10.98,
                  45.66
                ],
                [
                  11.14,
                  45.62
                ],
                [
                  11.32,
                  45.56
                ],
                [
                  11.48,
                  45.48
                ],
                [
                  11.45,
                  45.36
                ],
                [
                  11.28,
                  45.32
                ],
                [
                  11.06,
                  45.35
                ],
                [
                  10.88,
                  45.38
                ],
                [
                  10.72,
                  45.44
                ],
                [
                  10.68,
                  45.54
                ]
              ]
            ],
            [
              [
                [
                  9.44,
                  46.14
                ],
                [
                  9.6,
                  46.2
                ],
                [
                  9.75,
                  46.23
                ],
                [
                  9.9,
                  46.24
                ],
                [
                  10.05,
                  46.23
                ],
                [
                  10.22,
                  46.24
                ],
                [
                  10.28,
                  46.18
                ],
                [
                  10.22,
                  46.12
                ],
                [
                  10.02,
                  46.1
                ],
                [
                  9.84,
                  46.09
                ],
                [
                  9.65,
                  46.09
                ],
                [
                  9.46,
                  46.1
                ],
                [
                  9.44,
                  46.14
                ]
              ]
            ],
            [
              [
                [
                  14.9,
                  37.9
                ],
                [
                  15.06,
                  37.94
                ],
                [
                  15.18,
                  37.91
                ],
                [
                  15.26,
                  37.82
                ],
                [
                  15.28,
                  37.7
                ],
                [
                  15.24,
                  37.62
                ],
                [
                  15.14,
                  37.55
                ],
                [
                  14.98,
                  37.55
                ],
                [
                  14.84,
                  37.6
                ],
                [
                  14.78,
                  37.68
                ],
                [
                  14.8,
                  37.78
                ],
                [
                  14.86,
                  37.86
                ],
                [
                  14.9,
                  37.9
                ]
              ]
            ]
          ]
        }
      }
    ]
  },
  "japan-chubu": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "japan-chubu-outline",
        "properties": {
          "name": "Japan (Chūbu: Yamanashi & Nagano)",
          "description": "High alpine Japanese viticulture framed by Mount Fuji and the Northern Alps."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  138.52,
                  35.78
                ],
                [
                  138.74,
                  35.8
                ],
                [
                  138.88,
                  35.74
                ],
                [
                  138.9,
                  35.62
                ],
                [
                  138.82,
                  35.5
                ],
                [
                  138.65,
                  35.48
                ],
                [
                  138.52,
                  35.58
                ],
                [
                  138.5,
                  35.7
                ],
                [
                  138.52,
                  35.78
                ]
              ]
            ],
            [
              [
                [
                  137.85,
                  36.5
                ],
                [
                  138.12,
                  36.52
                ],
                [
                  138.32,
                  36.46
                ],
                [
                  138.35,
                  36.28
                ],
                [
                  138.25,
                  36.1
                ],
                [
                  138.02,
                  36.08
                ],
                [
                  137.88,
                  36.18
                ],
                [
                  137.82,
                  36.35
                ],
                [
                  137.85,
                  36.5
                ]
              ]
            ]
          ]
        }
      }
    ]
  },
  "beaujolais": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "beaujolais-outline",
        "properties": {
          "id": "beaujolais-outline",
          "name": "Beaujolais AOC Delimited Wine Region",
          "frenchName": "Vignoble du Beaujolais",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 16500,
          "color": "#c2185b",
          "accent": "#d4af37",
          "description": "Official delimited perimeter of Beaujolais viticultural territory spanning the 10 Northern Crus on Hercynian granite down through the rolling clay-limestone Pierres Dorées of Bas-Beaujolais to the northern outskirts of Lyon."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.68,
                46.33
              ],
              [
                4.74,
                46.33
              ],
              [
                4.79,
                46.28
              ],
              [
                4.81,
                46.2
              ],
              [
                4.82,
                46.12
              ],
              [
                4.82,
                46.04
              ],
              [
                4.81,
                45.96
              ],
              [
                4.79,
                45.88
              ],
              [
                4.76,
                45.82
              ],
              [
                4.73,
                45.76
              ],
              [
                4.66,
                45.75
              ],
              [
                4.59,
                45.78
              ],
              [
                4.54,
                45.84
              ],
              [
                4.52,
                45.92
              ],
              [
                4.51,
                46.02
              ],
              [
                4.51,
                46.12
              ],
              [
                4.53,
                46.2
              ],
              [
                4.56,
                46.26
              ],
              [
                4.61,
                46.31
              ],
              [
                4.65,
                46.33
              ],
              [
                4.68,
                46.33
              ]
            ]
          ]
        }
      }
    ]
  },
  "argentina-mendoza": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "argentina-mendoza-outline",
        "properties": {
          "name": "Mendoza Wine Region",
          "description": "The high-altitude Andean viticultural capital spanning Luján de Cuyo, Maipú, Uco Valley, and San Rafael."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -69.45,
                -32.85
              ],
              [
                -69.25,
                -32.82
              ],
              [
                -69.05,
                -32.8
              ],
              [
                -68.75,
                -32.84
              ],
              [
                -68.52,
                -32.88
              ],
              [
                -68.42,
                -32.96
              ],
              [
                -68.32,
                -33.15
              ],
              [
                -68.4,
                -33.32
              ],
              [
                -68.52,
                -33.55
              ],
              [
                -68.65,
                -33.8
              ],
              [
                -68.72,
                -34.15
              ],
              [
                -68.58,
                -34.35
              ],
              [
                -68.42,
                -34.45
              ],
              [
                -68.15,
                -34.5
              ],
              [
                -68.05,
                -34.62
              ],
              [
                -68.08,
                -34.75
              ],
              [
                -68.25,
                -34.88
              ],
              [
                -68.55,
                -34.9
              ],
              [
                -68.75,
                -34.82
              ],
              [
                -69.02,
                -34.55
              ],
              [
                -69.28,
                -34.2
              ],
              [
                -69.48,
                -33.85
              ],
              [
                -69.52,
                -33.45
              ],
              [
                -69.45,
                -32.85
              ]
            ]
          ]
        }
      }
    ]
  },
  "south-africa": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "south-africa-outline",
        "properties": {
          "name": "South Africa Western Cape Wine Region",
          "description": "The Cape winelands spanning Constantia, Stellenbosch, Franschhoek, Swartland, and Walker Bay."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  18.5,
                  -33.25
                ],
                [
                  18.82,
                  -33.22
                ],
                [
                  19.05,
                  -33.3
                ],
                [
                  19.22,
                  -33.62
                ],
                [
                  19.28,
                  -33.92
                ],
                [
                  19.18,
                  -34.15
                ],
                [
                  18.85,
                  -34.18
                ],
                [
                  18.6,
                  -34.12
                ],
                [
                  18.45,
                  -33.72
                ],
                [
                  18.46,
                  -33.45
                ],
                [
                  18.5,
                  -33.25
                ]
              ]
            ],
            [
              [
                [
                  18.32,
                  -33.95
                ],
                [
                  18.44,
                  -33.92
                ],
                [
                  18.52,
                  -33.98
                ],
                [
                  18.54,
                  -34.1
                ],
                [
                  18.44,
                  -34.15
                ],
                [
                  18.32,
                  -34.12
                ],
                [
                  18.3,
                  -34.02
                ],
                [
                  18.32,
                  -33.95
                ]
              ]
            ],
            [
              [
                [
                  19.1,
                  -34.22
                ],
                [
                  19.35,
                  -34.2
                ],
                [
                  19.52,
                  -34.28
                ],
                [
                  19.54,
                  -34.46
                ],
                [
                  19.38,
                  -34.56
                ],
                [
                  19.14,
                  -34.52
                ],
                [
                  19.08,
                  -34.38
                ],
                [
                  19.1,
                  -34.22
                ]
              ]
            ]
          ]
        }
      }
    ]
  },
  "new-zealand": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "new-zealand-outline",
        "properties": {
          "name": "New Zealand (Aotearoa) Wine Regions",
          "description": "Maritime islands viticulture spanning Marlborough, Central Otago, Hawke's Bay, and Martinborough."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  173.55,
                  -41.35
                ],
                [
                  173.9,
                  -41.3
                ],
                [
                  174.2,
                  -41.42
                ],
                [
                  174.22,
                  -41.68
                ],
                [
                  174.05,
                  -41.8
                ],
                [
                  173.75,
                  -41.78
                ],
                [
                  173.55,
                  -41.6
                ],
                [
                  173.55,
                  -41.35
                ]
              ]
            ],
            [
              [
                [
                  168.95,
                  -44.85
                ],
                [
                  169.3,
                  -44.82
                ],
                [
                  169.55,
                  -44.95
                ],
                [
                  169.58,
                  -45.2
                ],
                [
                  169.4,
                  -45.35
                ],
                [
                  169.12,
                  -45.32
                ],
                [
                  168.95,
                  -45.15
                ],
                [
                  168.95,
                  -44.85
                ]
              ]
            ],
            [
              [
                [
                  176.5,
                  -39.4
                ],
                [
                  176.82,
                  -39.38
                ],
                [
                  177.05,
                  -39.5
                ],
                [
                  177.08,
                  -39.75
                ],
                [
                  176.92,
                  -39.9
                ],
                [
                  176.65,
                  -39.88
                ],
                [
                  176.5,
                  -39.68
                ],
                [
                  176.5,
                  -39.4
                ]
              ]
            ],
            [
              [
                [
                  175.25,
                  -41.05
                ],
                [
                  175.52,
                  -41.02
                ],
                [
                  175.7,
                  -41.15
                ],
                [
                  175.72,
                  -41.38
                ],
                [
                  175.55,
                  -41.45
                ],
                [
                  175.32,
                  -41.42
                ],
                [
                  175.24,
                  -41.25
                ],
                [
                  175.25,
                  -41.05
                ]
              ]
            ]
          ]
        }
      }
    ]
  },
  "portugal": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "portugal-outline",
        "properties": {
          "id": "portugal-outline",
          "name": "Portugal Fine Wine DOCs & River Terraces",
          "portugueseName": "Denominações de Origem Controlada de Portugal",
          "category": "Official Regional DOC Boundary",
          "areaHa": 190000,
          "color": "#7209B7",
          "accent": "#D4AF37",
          "description": "Portugal's timeless terroirs: vertical schist canyons of the Douro, high granite plateau of Dão, sun-drenched rolling plains of Alentejo, green granite terraces of Vinho Verde, and Atlantic Bairrada."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  -8.88,
                  42.18
                ],
                [
                  -8.45,
                  42.22
                ],
                [
                  -8.05,
                  42.15
                ],
                [
                  -7.55,
                  41.95
                ],
                [
                  -6.75,
                  41.85
                ],
                [
                  -6.65,
                  41.25
                ],
                [
                  -6.75,
                  40.85
                ],
                [
                  -7.25,
                  40.75
                ],
                [
                  -7.35,
                  40.25
                ],
                [
                  -7.85,
                  40.15
                ],
                [
                  -8.55,
                  40.1
                ],
                [
                  -8.78,
                  40.35
                ],
                [
                  -8.75,
                  41.25
                ],
                [
                  -8.9,
                  41.75
                ],
                [
                  -8.88,
                  42.18
                ]
              ]
            ],
            [
              [
                [
                  -8.25,
                  39.15
                ],
                [
                  -7.55,
                  39.25
                ],
                [
                  -7.15,
                  39.05
                ],
                [
                  -7.15,
                  38.35
                ],
                [
                  -7.45,
                  37.95
                ],
                [
                  -8.05,
                  38.05
                ],
                [
                  -8.35,
                  38.55
                ],
                [
                  -8.25,
                  39.15
                ]
              ]
            ]
          ]
        }
      }
    ]
  }
};
