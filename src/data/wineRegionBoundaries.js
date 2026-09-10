// src/data/wineRegionBoundaries.js
// Sommelier-grade cartographic boundary polygons and regional macro outlines
// Conforms strictly to GeoJSON RFC 7946 specifications ([longitude, latitude])

export const WINE_REGION_BOUNDARIES = {
  "champagne": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "montagne-de-reims",
        "properties": {
          "id": "montagne-de-reims",
          "name": "Montagne de Reims",
          "category": "Grand Cru District",
          "dominantGrape": "Pinot Noir",
          "color": "#8B0000",
          "accent": "#d4af37",
          "fillOpacity": 0.22,
          "description": "Forested chalk plateau renowned for 9 Pinot Noir Grand Crus (Ambonnay, Bouzy, Verzenay, Verzy, Mailly)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.02,
                49.2
              ],
              [
                4.16,
                49.215
              ],
              [
                4.24,
                49.19
              ],
              [
                4.26,
                49.14
              ],
              [
                4.22,
                49.07
              ],
              [
                4.17,
                49.05
              ],
              [
                4.12,
                49.06
              ],
              [
                4.05,
                49.1
              ],
              [
                3.98,
                49.14
              ],
              [
                3.97,
                49.18
              ],
              [
                4.02,
                49.2
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "cote-des-blancs",
        "properties": {
          "id": "cote-des-blancs",
          "name": "Côte des Blancs",
          "category": "Chardonnay Grand Cru Kingdom",
          "dominantGrape": "Chardonnay",
          "color": "#D4AF37",
          "accent": "#ffd700",
          "fillOpacity": 0.24,
          "description": "Pure east-facing Belemnite chalk ridge dedicated 96%+ to Chardonnay and 6 100% Grand Cru communes (Avize, Cramant, Le Mesnil-sur-Oger, Oger, Chouilly, Oiry)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                3.97,
                49.04
              ],
              [
                4.02,
                49.03
              ],
              [
                4.03,
                48.96
              ],
              [
                4.02,
                48.88
              ],
              [
                3.98,
                48.86
              ],
              [
                3.94,
                48.89
              ],
              [
                3.95,
                48.97
              ],
              [
                3.96,
                49.02
              ],
              [
                3.97,
                49.04
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "vallee-de-la-marne",
        "properties": {
          "id": "vallee-de-la-marne",
          "name": "Vallée de la Marne",
          "category": "Meunier & Pinot Noir Valley",
          "dominantGrape": "Meunier & Pinot Noir",
          "color": "#9C27B0",
          "accent": "#ba68c8",
          "fillOpacity": 0.2,
          "description": "Sprawling river corridor characterized by clay and alluvium soils where frost-hardy Meunier produces round, aromatically expressive cuvées."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                3.52,
                49.09
              ],
              [
                3.7,
                49.13
              ],
              [
                3.92,
                49.08
              ],
              [
                4.06,
                49.06
              ],
              [
                4.07,
                49.02
              ],
              [
                3.93,
                49.01
              ],
              [
                3.72,
                49.03
              ],
              [
                3.51,
                49.04
              ],
              [
                3.48,
                49.06
              ],
              [
                3.52,
                49.09
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "cote-des-bar",
        "properties": {
          "id": "cote-des-bar",
          "name": "Côte des Bar (Aube)",
          "category": "Kimmeridgian Pinot Noir Terroir",
          "dominantGrape": "Pinot Noir",
          "color": "#795548",
          "accent": "#a1887f",
          "fillOpacity": 0.22,
          "description": "Southern Champagne district geologically identical to Chablis with fossil-dense Kimmeridgian limestone marls yielding vinous, structured grower Pinot Noirs."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.18,
                48.26
              ],
              [
                4.42,
                48.31
              ],
              [
                4.65,
                48.24
              ],
              [
                4.68,
                48.06
              ],
              [
                4.58,
                47.94
              ],
              [
                4.38,
                47.93
              ],
              [
                4.2,
                48.08
              ],
              [
                4.18,
                48.26
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "cote-de-sezanne",
        "properties": {
          "id": "cote-de-sezanne",
          "name": "Côte de Sézanne",
          "category": "Chardonnay Extension",
          "dominantGrape": "Chardonnay",
          "color": "#DAA520",
          "accent": "#f0e68c",
          "fillOpacity": 0.18,
          "description": "Southwestern extension of the Côte des Blancs with chalk and clay soils producing rich, tropical, forward Chardonnays."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                3.67,
                48.78
              ],
              [
                3.78,
                48.79
              ],
              [
                3.82,
                48.71
              ],
              [
                3.75,
                48.64
              ],
              [
                3.68,
                48.66
              ],
              [
                3.65,
                48.73
              ],
              [
                3.67,
                48.78
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "cote-de-sezanne-val-du-petit-morin",
        "properties": {
          "id": "cote-de-sezanne-val-du-petit-morin",
          "parentSubregionId": "cote-de-sezanne",
          "subregionId": "cote-de-sezanne",
          "name": "Côte de Sézanne (Val du Petit Morin)",
          "category": "Chalk & Clay Micro-valley",
          "dominantGrape": "Pinot Meunier & Chardonnay",
          "color": "#5c6bc0",
          "accent": "#9fa8da",
          "fillOpacity": 0.18,
          "description": "Transition valley nestled between the Côte des Blancs and Sézanne, home to revered grower parcel cuvées."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                3.68,
                48.89
              ],
              [
                3.82,
                48.91
              ],
              [
                3.86,
                48.82
              ],
              [
                3.73,
                48.8
              ],
              [
                3.68,
                48.89
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "coteaux-sud-epernay",
        "properties": {
          "id": "coteaux-sud-epernay",
          "name": "Côteaux Sud d'Épernay",
          "category": "Bridge Terroir",
          "dominantGrape": "Chardonnay & Pinot Meunier",
          "color": "#26a69a",
          "accent": "#80cbc4",
          "fillOpacity": 0.2,
          "description": "Crucial transitional corridor south of Épernay (Pierry, Chavot) marrying flint, clay, and chalk."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                3.89,
                49.03
              ],
              [
                3.97,
                49.03
              ],
              [
                3.97,
                48.97
              ],
              [
                3.88,
                48.98
              ],
              [
                3.89,
                49.03
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
        "id": "chablis",
        "properties": {
                  "id": "chablis",
                  "parentSubregionId": "chablis",
                  "subregionId": "chablis",
                  "name": "Chablis & Grand Auxerrois",
                  "category": "Kimmeridgian Chardonnay Apex",
                  "dominantGrape": "Chardonnay",
                  "color": "#D4AF37",
                  "accent": "#fff176",
                  "fillOpacity": 0.22,
                  "labelCenter": [
                            3.795,
                            47.815
                  ],
                  "description": "Prehistoric Jurassic seabed of fossilized Exogyra virgula oysters yielding steely, high-acid, mineral Chardonnays along the Serein River valley."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                3.74,
                47.88
              ],
              [
                3.77,
                47.89
              ],
              [
                3.81,
                47.885
              ],
              [
                3.85,
                47.865
              ],
              [
                3.89,
                47.85
              ],
              [
                3.92,
                47.825
              ],
              [
                3.93,
                47.795
              ],
              [
                3.9,
                47.77
              ],
              [
                3.86,
                47.75
              ],
              [
                3.82,
                47.735
              ],
              [
                3.78,
                47.73
              ],
              [
                3.73,
                47.74
              ],
              [
                3.67,
                47.755
              ],
              [
                3.64,
                47.775
              ],
              [
                3.65,
                47.81
              ],
              [
                3.68,
                47.84
              ],
              [
                3.71,
                47.865
              ],
              [
                3.74,
                47.88
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "cote-de-nuits",
        "properties": {
                  "id": "cote-de-nuits",
                  "parentSubregionId": "cote-de-nuits",
                  "subregionId": "cote-de-nuits",
                  "name": "Côte de Nuits",
                  "category": "Pinot Noir Grand Cru Sanctum",
                  "dominantGrape": "Pinot Noir",
                  "color": "#800020",
                  "accent": "#d4af37",
                  "fillOpacity": 0.26,
                  "labelCenter": [
                            4.955,
                            47.165
                  ],
                  "description": "The golden slope of 24 red Grand Crus (Romanée-Conti, Chambertin, Musigny, Clos de Vougeot) etched into eastern limestone hillsides."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.97,
                47.28
              ],
              [
                4.995,
                47.275
              ],
              [
                5.01,
                47.25
              ],
              [
                5.01,
                47.22
              ],
              [
                4.995,
                47.18
              ],
              [
                4.98,
                47.14
              ],
              [
                4.965,
                47.1
              ],
              [
                4.945,
                47.075
              ],
              [
                4.92,
                47.075
              ],
              [
                4.91,
                47.095
              ],
              [
                4.915,
                47.13
              ],
              [
                4.925,
                47.165
              ],
              [
                4.935,
                47.2
              ],
              [
                4.94,
                47.235
              ],
              [
                4.95,
                47.265
              ],
              [
                4.97,
                47.28
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "cote-de-beaune",
        "properties": {
                  "id": "cote-de-beaune",
                  "parentSubregionId": "cote-de-beaune",
                  "subregionId": "cote-de-beaune",
                  "name": "Côte de Beaune",
                  "category": "White Grand Cru & Noble Red Epicenter",
                  "dominantGrape": "Chardonnay & Pinot Noir",
                  "color": "#C5A059",
                  "accent": "#ffd54f",
                  "fillOpacity": 0.24,
                  "labelCenter": [
                            4.815,
                            47.005
                  ],
                  "description": "Home of Montrachet, Corton-Charlemagne, Meursault, Puligny, Volnay, and Pommard spanning curving limestone slopes."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.86,
                47.085
              ],
              [
                4.89,
                47.075
              ],
              [
                4.915,
                47.06
              ],
              [
                4.9,
                47.03
              ],
              [
                4.87,
                46.995
              ],
              [
                4.84,
                46.965
              ],
              [
                4.8,
                46.94
              ],
              [
                4.76,
                46.915
              ],
              [
                4.72,
                46.895
              ],
              [
                4.68,
                46.89
              ],
              [
                4.67,
                46.91
              ],
              [
                4.69,
                46.935
              ],
              [
                4.72,
                46.96
              ],
              [
                4.745,
                46.985
              ],
              [
                4.76,
                47.015
              ],
              [
                4.785,
                47.045
              ],
              [
                4.82,
                47.07
              ],
              [
                4.86,
                47.085
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "cote-chalonnaise",
        "properties": {
                  "id": "cote-chalonnaise",
                  "parentSubregionId": "cote-chalonnaise",
                  "subregionId": "cote-chalonnaise",
                  "name": "Côte Chalonnaise",
                  "category": "Limestone Value & Crémant",
                  "dominantGrape": "Pinot Noir, Chardonnay, Aligoté",
                  "color": "#a1887f",
                  "accent": "#d7ccc8",
                  "fillOpacity": 0.2,
                  "labelCenter": [
                            4.715,
                            46.805
                  ],
                  "description": "Rolling limestone hills featuring Mercurey, Rully, Givry, Montagny, and Bouzeron framed between valleys and forested ridges."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.73,
                46.9
              ],
              [
                4.765,
                46.885
              ],
              [
                4.78,
                46.85
              ],
              [
                4.77,
                46.81
              ],
              [
                4.75,
                46.77
              ],
              [
                4.73,
                46.73
              ],
              [
                4.7,
                46.685
              ],
              [
                4.66,
                46.66
              ],
              [
                4.635,
                46.67
              ],
              [
                4.63,
                46.71
              ],
              [
                4.64,
                46.76
              ],
              [
                4.66,
                46.81
              ],
              [
                4.675,
                46.855
              ],
              [
                4.7,
                46.885
              ],
              [
                4.73,
                46.9
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "maconnais",
        "properties": {
                  "id": "maconnais",
                  "parentSubregionId": "maconnais",
                  "subregionId": "maconnais",
                  "name": "Mâconnais",
                  "category": "Sun-drenched Limestone Chardonnay",
                  "dominantGrape": "Chardonnay",
                  "color": "#D4AF37",
                  "accent": "#fff59d",
                  "fillOpacity": 0.2,
                  "labelCenter": [
                            4.765,
                            46.385
                  ],
                  "description": "Limestone cliffs of Solutré and Vergisson producing Pouilly-Fuissé, Saint-Véran, and Viré-Clessé across sun-drenched amphitheatres."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.77,
                46.54
              ],
              [
                4.82,
                46.52
              ],
              [
                4.855,
                46.48
              ],
              [
                4.86,
                46.43
              ],
              [
                4.84,
                46.37
              ],
              [
                4.82,
                46.31
              ],
              [
                4.8,
                46.26
              ],
              [
                4.76,
                46.225
              ],
              [
                4.71,
                46.22
              ],
              [
                4.68,
                46.245
              ],
              [
                4.67,
                46.29
              ],
              [
                4.685,
                46.34
              ],
              [
                4.7,
                46.4
              ],
              [
                4.72,
                46.46
              ],
              [
                4.745,
                46.51
              ],
              [
                4.77,
                46.54
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
        "id": "left-bank-medoc",
        "properties": {
          "id": "left-bank-medoc",
          "parentSubregionId": "left-bank-medoc",
          "subregionId": "left-bank-medoc",
          "name": "Left Bank Médoc (Bas-Médoc)",
          "category": "Northern Gravel & Alluvial Terraces",
          "dominantGrape": "Cabernet Sauvignon & Merlot",
          "color": "#6a1b38",
          "accent": "#d4af37",
          "fillOpacity": 0.24,
          "description": "Northern coastal sector extending along the Gironde estuary with maritime gravel terraces."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -1.15,
                45.52
              ],
              [
                -0.95,
                45.48
              ],
              [
                -0.88,
                45.36
              ],
              [
                -0.96,
                45.32
              ],
              [
                -1.12,
                45.38
              ],
              [
                -1.18,
                45.48
              ],
              [
                -1.15,
                45.52
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "left-bank-medoc-haut-medoc",
        "properties": {
          "id": "left-bank-medoc-haut-medoc",
          "parentSubregionId": "left-bank-medoc",
          "subregionId": "left-bank-medoc",
          "name": "Left Bank Haut-Médoc & Communal Crus",
          "category": "Günzian Gravel Croupes & 1855 1st Growths",
          "dominantGrape": "Cabernet Sauvignon",
          "color": "#5b0e2d",
          "accent": "#d4af37",
          "fillOpacity": 0.26,
          "description": "Deep Pyrenean gravel mounds home to Pauillac, Margaux, Saint-Julien, Saint-Estèphe, and First Growths."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.88,
                45.36
              ],
              [
                -0.74,
                45.28
              ],
              [
                -0.64,
                45.16
              ],
              [
                -0.58,
                44.96
              ],
              [
                -0.68,
                44.92
              ],
              [
                -0.78,
                45.08
              ],
              [
                -0.85,
                45.24
              ],
              [
                -0.96,
                45.32
              ],
              [
                -0.88,
                45.36
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "graves-pessac",
        "properties": {
          "id": "graves-pessac",
          "parentSubregionId": "graves-pessac",
          "subregionId": "graves-pessac",
          "name": "Graves AOC",
          "category": "Pyrenean Quartz Gravel Terraces",
          "dominantGrape": "Cabernet Sauvignon & Sémillon",
          "color": "#8b263e",
          "accent": "#e59866",
          "fillOpacity": 0.22,
          "description": "Ancient quartz and jasper gravel terraces along the Garonne producing smoky reds and textured dry whites."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.56,
                44.7
              ],
              [
                -0.42,
                44.64
              ],
              [
                -0.34,
                44.52
              ],
              [
                -0.42,
                44.46
              ],
              [
                -0.54,
                44.52
              ],
              [
                -0.62,
                44.62
              ],
              [
                -0.56,
                44.7
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "graves-pessac-leognan",
        "properties": {
          "id": "graves-pessac-leognan",
          "parentSubregionId": "graves-pessac",
          "subregionId": "graves-pessac",
          "name": "Pessac-Léognan AOC (Graves)",
          "category": "Cru Classé Gravel Benches & Haut-Brion",
          "dominantGrape": "Cabernet Sauvignon & Sauvignon Blanc",
          "color": "#78281f",
          "accent": "#ffd54f",
          "fillOpacity": 0.26,
          "description": "Deep Günzian gravel benches south of Bordeaux city; home to Château Haut-Brion and all 16 classified Crus."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.64,
                44.85
              ],
              [
                -0.54,
                44.84
              ],
              [
                -0.52,
                44.72
              ],
              [
                -0.6,
                44.7
              ],
              [
                -0.68,
                44.75
              ],
              [
                -0.64,
                44.85
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "sauternais",
        "properties": {
          "id": "sauternais",
          "parentSubregionId": "sauternais",
          "subregionId": "sauternais",
          "name": "Sauternes & Barsac AOC (Sauternais)",
          "category": "Noble Rot Botrytis Kingdom & d'Yquem",
          "dominantGrape": "Sémillon & Sauvignon Blanc",
          "color": "#e5a93b",
          "accent": "#fff176",
          "fillOpacity": 0.28,
          "description": "Ciron river morning mists generate Botrytis cinerea for liquid gold (Château d'Yquem, Climens, Suduiraut)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.38,
                44.59
              ],
              [
                -0.28,
                44.56
              ],
              [
                -0.31,
                44.49
              ],
              [
                -0.41,
                44.52
              ],
              [
                -0.38,
                44.59
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "right-bank-libournais-saint-emilion",
        "properties": {
          "id": "right-bank-libournais-saint-emilion",
          "parentSubregionId": "right-bank-libournais",
          "subregionId": "right-bank-libournais",
          "name": "Right Bank Saint-Émilion Grand Cru",
          "category": "Starfish Limestone Plateau & Ausone",
          "dominantGrape": "Merlot & Cabernet Franc",
          "color": "#4a154b",
          "accent": "#d4af37",
          "fillOpacity": 0.26,
          "description": "Historic starfish limestone plateau (Calcaire à Astéries) and clay terraces (Cheval Blanc, Ausone, Pavie, Figeac)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.22,
                44.93
              ],
              [
                -0.11,
                44.93
              ],
              [
                -0.1,
                44.86
              ],
              [
                -0.18,
                44.85
              ],
              [
                -0.23,
                44.89
              ],
              [
                -0.22,
                44.93
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "right-bank-libournais-pomerol",
        "properties": {
          "id": "right-bank-libournais-pomerol",
          "parentSubregionId": "right-bank-libournais",
          "subregionId": "right-bank-libournais",
          "name": "Right Bank Pomerol AOC",
          "category": "Smectite Blue Clay Buttonhole & Pétrus",
          "dominantGrape": "Merlot",
          "color": "#380d22",
          "accent": "#f48fb1",
          "fillOpacity": 0.28,
          "description": "High plateau buttonhole (boutonnière) of smectite blue clay over iron pan (crasse de fer); home to Château Pétrus and Le Pin."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.24,
                44.95
              ],
              [
                -0.18,
                44.95
              ],
              [
                -0.17,
                44.91
              ],
              [
                -0.23,
                44.91
              ],
              [
                -0.24,
                44.95
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "right-bank-libournais-fronsac",
        "properties": {
          "id": "right-bank-libournais-fronsac",
          "parentSubregionId": "right-bank-libournais",
          "subregionId": "right-bank-libournais",
          "name": "Right Bank Fronsac & Canon-Fronsac AOC",
          "category": "Molasse du Fronsadais Sandstone Slopes",
          "dominantGrape": "Merlot & Cabernet Franc",
          "color": "#673ab7",
          "accent": "#b39ddb",
          "fillOpacity": 0.22,
          "description": "Elevated sandstone and limestone hills overlooking the Dordogne river delivering structured, savory Right Bank reds."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.3,
                44.96
              ],
              [
                -0.24,
                44.95
              ],
              [
                -0.23,
                44.9
              ],
              [
                -0.29,
                44.9
              ],
              [
                -0.3,
                44.96
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "entre-deux-mers",
        "properties": {
          "id": "entre-deux-mers",
          "parentSubregionId": "entre-deux-mers",
          "subregionId": "entre-deux-mers",
          "name": "Entre-Deux-Mers AOC",
          "category": "Rolling Two Rivers Heartlands",
          "dominantGrape": "Sauvignon Blanc & Sémillon",
          "color": "#2e7d32",
          "accent": "#a5d6a7",
          "fillOpacity": 0.2,
          "description": "Expansive fertile rolling plateau between the Garonne and Dordogne rivers renowned for crisp, citrusy dry whites."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.45,
                44.86
              ],
              [
                -0.15,
                44.85
              ],
              [
                -0.05,
                44.6
              ],
              [
                -0.35,
                44.55
              ],
              [
                -0.45,
                44.86
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "cotes-de-bordeaux",
        "properties": {
          "id": "cotes-de-bordeaux",
          "parentSubregionId": "cotes-de-bordeaux",
          "subregionId": "cotes-de-bordeaux",
          "name": "Côtes de Bordeaux & Blaye/Bourg",
          "category": "Sunny Limestone Escarpments & Value",
          "dominantGrape": "Merlot & Cabernet Franc",
          "color": "#a04000",
          "accent": "#edbb99",
          "fillOpacity": 0.22,
          "description": "Unified hillside appellations (Blaye, Bourg, Castillon, Francs) offering dynamic terroir expressions on limestone bluffs."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.6,
                45.18
              ],
              [
                -0.48,
                45.12
              ],
              [
                -0.02,
                44.95
              ],
              [
                -0.05,
                44.84
              ],
              [
                -0.45,
                45.02
              ],
              [
                -0.6,
                45.18
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
        "id": "northern-rhone",
        "properties": {
          "id": "northern-rhone",
          "parentSubregionId": "northern-rhone",
          "subregionId": "northern-rhone",
          "name": "Northern Rhône (Rhône Septentrionale)",
          "category": "Steep Granite Syrah & Viognier Terraces",
          "dominantGrape": "Syrah & Viognier",
          "color": "#4a154b",
          "accent": "#d4af37",
          "fillOpacity": 0.26,
          "description": "Vertiginous granite terraces along the river corridor: Côte-Rôtie, Hermitage, Cornas, Saint-Joseph, Condrieu.",
          "labelCenter": [
            4.82,
            45.26
          ]
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
                4.84,
                45.56
              ],
              [
                4.9,
                45.42
              ],
              [
                4.86,
                45.22
              ],
              [
                4.92,
                45.02
              ],
              [
                4.9,
                44.9
              ],
              [
                4.82,
                44.92
              ],
              [
                4.74,
                45.06
              ],
              [
                4.76,
                45.24
              ],
              [
                4.72,
                45.44
              ],
              [
                4.74,
                45.58
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "southern-rhone",
        "properties": {
          "id": "southern-rhone",
          "parentSubregionId": "southern-rhone",
          "subregionId": "southern-rhone",
          "name": "Southern Rhône (Rhône Méridionale)",
          "category": "Sun-Drenched Garrigue & Galets Roulés",
          "dominantGrape": "Grenache, Syrah, Mourvèdre",
          "color": "#b71c1c",
          "accent": "#ef5350",
          "fillOpacity": 0.24,
          "description": "Sun-soaked Mediterranean basin and quartz galets roulés: Châteauneuf-du-Pape, Gigondas, Vacqueyras, Tavel.",
          "labelCenter": [
            4.9,
            44.14
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.65,
                44.38
              ],
              [
                4.88,
                44.42
              ],
              [
                5.18,
                44.32
              ],
              [
                5.22,
                44.12
              ],
              [
                5.12,
                43.88
              ],
              [
                4.82,
                43.84
              ],
              [
                4.6,
                43.92
              ],
              [
                4.58,
                44.18
              ],
              [
                4.65,
                44.38
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "northern-rhone-cote-rotie",
        "properties": {
          "id": "northern-rhone-cote-rotie",
          "parentSubregionId": "northern-rhone",
          "subregionId": "northern-rhone",
          "name": "Northern Rhône (Côte-Rôtie AOC)",
          "category": "Vertiginous Mica-Schist & Gneiss Amphitheaters",
          "dominantGrape": "Syrah (+ up to 20% Viognier)",
          "color": "#2b0914",
          "accent": "#ffd700",
          "fillOpacity": 0.3,
          "description": "Steep terraced slopes of Côte Brune (micaschist) and Côte Blonde (gneiss); home of Guigal 'La-Las', Jamet, Rostaing.",
          "labelCenter": [
            4.8,
            45.49
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.76,
                45.53
              ],
              [
                4.83,
                45.52
              ],
              [
                4.84,
                45.47
              ],
              [
                4.8,
                45.45
              ],
              [
                4.75,
                45.47
              ],
              [
                4.76,
                45.53
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "northern-rhone-condrieu",
        "properties": {
          "id": "northern-rhone-condrieu",
          "parentSubregionId": "northern-rhone",
          "subregionId": "northern-rhone",
          "name": "Northern Rhône (Condrieu & Château-Grillet AOC)",
          "category": "Pure Viognier on Decomposed Granite Arzelle",
          "dominantGrape": "Viognier (100%)",
          "color": "#d4af37",
          "accent": "#fff59d",
          "fillOpacity": 0.28,
          "description": "100% Viognier on decomposed granite arzelle; apricot, floral blossom, and white peach elegance (Château-Grillet monopole, Vernay).",
          "labelCenter": [
            4.75,
            45.43
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.73,
                45.48
              ],
              [
                4.79,
                45.47
              ],
              [
                4.8,
                45.4
              ],
              [
                4.75,
                45.38
              ],
              [
                4.71,
                45.42
              ],
              [
                4.73,
                45.48
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "northern-rhone-hermitage",
        "properties": {
          "id": "northern-rhone-hermitage",
          "parentSubregionId": "northern-rhone",
          "subregionId": "northern-rhone",
          "name": "Northern Rhône (Hermitage & Crozes-Hermitage AOC)",
          "category": "The Sacred Granite Hill of Tain (Les Bessards)",
          "dominantGrape": "Syrah, Marsanne, Roussanne",
          "color": "#5b0e2d",
          "accent": "#d4af37",
          "fillOpacity": 0.3,
          "description": "Iconic granite promontory overlooking Tain-l'Hermitage (Les Bessards, Le Méal, L'Ermite; Jean-Louis Chave, Chapoutier).",
          "labelCenter": [
            4.84,
            45.07
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.82,
                45.09
              ],
              [
                4.87,
                45.09
              ],
              [
                4.88,
                45.06
              ],
              [
                4.83,
                45.05
              ],
              [
                4.81,
                45.07
              ],
              [
                4.82,
                45.09
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "northern-rhone-cornas",
        "properties": {
          "id": "northern-rhone-cornas",
          "parentSubregionId": "northern-rhone",
          "subregionId": "northern-rhone",
          "name": "Northern Rhône (Cornas & Saint-Péray AOC)",
          "category": "100% Syrah Granite Amphitheater (Chaillot & Reynard)",
          "dominantGrape": "Syrah (100%)",
          "color": "#311432",
          "accent": "#ba68c8",
          "fillOpacity": 0.3,
          "description": "South-facing natural granite bowl yielding inky, brooding, animal-and-blackberry 100% Syrah (Auguste Clape, Thierry Allemand).",
          "labelCenter": [
            4.84,
            44.96
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.82,
                44.98
              ],
              [
                4.86,
                44.98
              ],
              [
                4.87,
                44.94
              ],
              [
                4.83,
                44.93
              ],
              [
                4.81,
                44.95
              ],
              [
                4.82,
                44.98
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "southern-rhone-chateauneuf-du-pape",
        "properties": {
          "id": "southern-rhone-chateauneuf-du-pape",
          "parentSubregionId": "southern-rhone",
          "subregionId": "southern-rhone",
          "name": "Southern Rhône (Châteauneuf-du-Pape AOC)",
          "category": "Villafranchian Galets Roulés & 13 Cépages",
          "dominantGrape": "Grenache, Mourvèdre, Syrah",
          "color": "#78281f",
          "accent": "#ffab91",
          "fillOpacity": 0.28,
          "description": "Quartz galets roulés boulders (Beaucastel), sandy safres (Rayas), and limestone plateau (Clos des Papes).",
          "labelCenter": [
            4.83,
            44.05
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.78,
                44.09
              ],
              [
                4.87,
                44.1
              ],
              [
                4.9,
                44.03
              ],
              [
                4.85,
                43.99
              ],
              [
                4.78,
                44.01
              ],
              [
                4.76,
                44.06
              ],
              [
                4.78,
                44.09
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "southern-rhone-gigondas",
        "properties": {
          "id": "southern-rhone-gigondas",
          "parentSubregionId": "southern-rhone",
          "subregionId": "southern-rhone",
          "name": "Southern Rhône (Gigondas AOC)",
          "category": "Dentelles de Montmirail Limestone Scree Slopes",
          "dominantGrape": "Grenache, Syrah, Mourvèdre",
          "color": "#8e24aa",
          "accent": "#e1bee7",
          "fillOpacity": 0.28,
          "description": "High-altitude limestone scree slopes sheltered by the jagged Dentelles de Montmirail cliffs (Château de Saint Cosme).",
          "labelCenter": [
            5.02,
            44.16
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.98,
                44.19
              ],
              [
                5.05,
                44.19
              ],
              [
                5.06,
                44.14
              ],
              [
                5,
                44.13
              ],
              [
                4.97,
                44.16
              ],
              [
                4.98,
                44.19
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "southern-rhone-vacqueyras",
        "properties": {
          "id": "southern-rhone-vacqueyras",
          "parentSubregionId": "southern-rhone",
          "subregionId": "southern-rhone",
          "name": "Southern Rhône (Vacqueyras & Beaumes-de-Venise AOC)",
          "category": "Plateau des Garrigues & Muscat VDN",
          "dominantGrape": "Grenache & Syrah",
          "color": "#c2185b",
          "accent": "#f48fb1",
          "fillOpacity": 0.26,
          "description": "Alluvial pebble terraces of the Plateau des Garrigues alongside terraced Muscat de Beaumes-de-Venise sweet wines.",
          "labelCenter": [
            4.98,
            44.12
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.95,
                44.15
              ],
              [
                5.02,
                44.15
              ],
              [
                5.03,
                44.1
              ],
              [
                4.97,
                44.09
              ],
              [
                4.94,
                44.12
              ],
              [
                4.95,
                44.15
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "southern-rhone-tavel",
        "properties": {
          "id": "southern-rhone-tavel",
          "parentSubregionId": "southern-rhone",
          "subregionId": "southern-rhone",
          "name": "Southern Rhône (Tavel & Lirac AOC)",
          "category": "100% Dry Gastronomic Rosé & Limestone Lauses",
          "dominantGrape": "Grenache, Cinsault, Clairette",
          "color": "#e91e63",
          "accent": "#f8bbd0",
          "fillOpacity": 0.28,
          "description": "The King of Rosé: deep ruby-pink, dry, age-worthy, complex gastronomic rosé crafted on limestone lauses (Domaine de la Mordorée).",
          "labelCenter": [
            4.69,
            44
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.65,
                44.03
              ],
              [
                4.73,
                44.03
              ],
              [
                4.74,
                43.98
              ],
              [
                4.67,
                43.97
              ],
              [
                4.64,
                44
              ],
              [
                4.65,
                44.03
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
        "id": "pays-nantais",
        "properties": {
          "id": "pays-nantais",
          "parentSubregionId": "pays-nantais",
          "subregionId": "pays-nantais",
          "name": "Pays Nantais (Atlantic Coast)",
          "category": "Atlantic Schist, Orthogneiss & Sur Lie",
          "dominantGrape": "Melon de Bourgogne",
          "color": "#00897b",
          "accent": "#80cbc4",
          "fillOpacity": 0.26,
          "description": "Atlantic coastal schist and orthogneiss producing saline, sur lie Muscadet Sèvre-et-Maine and Crus Clisson/Gorges.",
          "labelCenter": [
            -1.44,
            47.14
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -1.68,
                47.24
              ],
              [
                -1.34,
                47.28
              ],
              [
                -1.18,
                47.16
              ],
              [
                -1.22,
                47.02
              ],
              [
                -1.52,
                47
              ],
              [
                -1.68,
                47.12
              ],
              [
                -1.68,
                47.24
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "anjou-saumur",
        "properties": {
          "id": "anjou-saumur",
          "parentSubregionId": "anjou-saumur",
          "subregionId": "anjou-saumur",
          "name": "Anjou-Saumur (Middle Loire)",
          "category": "Dark Schist Anjou Noir & White Tuffeau Saumur",
          "dominantGrape": "Chenin Blanc & Cabernet Franc",
          "color": "#c5a059",
          "accent": "#ffd54f",
          "fillOpacity": 0.26,
          "description": "Schist Anjou Noir (Savennières, Coulée de Serrant) and chalky tuffeau limestone Saumur (Saumur-Champigny, Clos Rougeard).",
          "labelCenter": [
            -0.44,
            47.3
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.82,
                47.46
              ],
              [
                -0.35,
                47.48
              ],
              [
                -0.02,
                47.34
              ],
              [
                -0.08,
                47.12
              ],
              [
                -0.48,
                47.1
              ],
              [
                -0.85,
                47.25
              ],
              [
                -0.82,
                47.46
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "touraine",
        "properties": {
          "id": "touraine",
          "parentSubregionId": "touraine",
          "subregionId": "touraine",
          "name": "Touraine (The Garden of France)",
          "category": "Craie Tuffeau Chalk & Chinon Franc",
          "dominantGrape": "Cabernet Franc & Chenin Blanc",
          "color": "#880e4f",
          "accent": "#f48fb1",
          "fillOpacity": 0.26,
          "description": "Epicenter of Vouvray still/sparkling Chenin and gravelly/tuffeau Chinon & Bourgueil Cabernet Franc (Domaine Huet, Bernard Baudry).",
          "labelCenter": [
            0.62,
            47.32
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.05,
                47.45
              ],
              [
                0.65,
                47.52
              ],
              [
                1.15,
                47.44
              ],
              [
                1.1,
                47.22
              ],
              [
                0.65,
                47.15
              ],
              [
                0.1,
                47.18
              ],
              [
                0.05,
                47.45
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "centre-loire",
        "properties": {
          "id": "centre-loire",
          "parentSubregionId": "centre-loire",
          "subregionId": "centre-loire",
          "name": "Centre-Loire (Upper Loire Basin)",
          "category": "Kimmeridgian Terres Blanches & Silex Flint",
          "dominantGrape": "Sauvignon Blanc & Pinot Noir",
          "color": "#2e7d32",
          "accent": "#a5d6a7",
          "fillOpacity": 0.26,
          "description": "White Caillottes limestone, Kimmeridgian Terres Blanches, and flinty Silex across Sancerre, Pouilly-Fumé, Menetou-Salon, Quincy, Reuilly.",
          "labelCenter": [
            2.86,
            47.28
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                2.62,
                47.45
              ],
              [
                3.1,
                47.42
              ],
              [
                3.18,
                47.15
              ],
              [
                2.78,
                47.08
              ],
              [
                2.58,
                47.25
              ],
              [
                2.62,
                47.45
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "centre-loire-sancerre-pouilly",
        "properties": {
          "id": "centre-loire-sancerre-pouilly",
          "parentSubregionId": "centre-loire",
          "subregionId": "centre-loire",
          "name": "Centre-Loire (Sancerre & Pouilly-Fumé AOC)",
          "category": "Caillottes, Terres Blanches & Silex Apex",
          "dominantGrape": "Sauvignon Blanc (100%)",
          "color": "#1b5e20",
          "accent": "#81c784",
          "fillOpacity": 0.3,
          "description": "Laser-focused limestone and flint hillsides producing world benchmark Sauvignon Blanc (Didier Dagueneau Silex, Vacheron, Cotat).",
          "labelCenter": [
            2.89,
            47.31
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                2.78,
                47.38
              ],
              [
                2.98,
                47.36
              ],
              [
                3.02,
                47.24
              ],
              [
                2.82,
                47.26
              ],
              [
                2.76,
                47.32
              ],
              [
                2.78,
                47.38
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
        "id": "barolo-langhe",
        "properties": {
          "id": "barolo-langhe",
          "parentSubregionId": "barolo-langhe",
          "subregionId": "barolo-langhe",
          "name": "Barolo DOCG & Langhe Nebbiolo",
          "category": "The King of Wines & 181 MGAs",
          "dominantGrape": "Nebbiolo (100%)",
          "color": "#800020",
          "accent": "#d4af37",
          "fillOpacity": 0.28,
          "description": "Tortonian calcareous marls (La Morra, Barolo) and Helvetian sandstone (Serralunga, Monforte); home to Conterno Monfortino and Bartolo Mascarello.",
          "labelCenter": [
            7.97,
            44.61
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                7.91,
                44.66
              ],
              [
                8.02,
                44.68
              ],
              [
                8.05,
                44.6
              ],
              [
                8.02,
                44.54
              ],
              [
                7.93,
                44.55
              ],
              [
                7.88,
                44.62
              ],
              [
                7.91,
                44.66
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "barbaresco-langhe",
        "properties": {
          "id": "barbaresco-langhe",
          "parentSubregionId": "barbaresco-langhe",
          "subregionId": "barbaresco-langhe",
          "name": "Barbaresco DOCG (4 Communes)",
          "category": "The Queen of Nebbiolo & Asili/Rabajà",
          "dominantGrape": "Nebbiolo (100%)",
          "color": "#a93226",
          "accent": "#f5b7b1",
          "fillOpacity": 0.26,
          "description": "Sant'Agata blue-grey marls along the Tanaro river producing silky, ethereal, perfumed Nebbiolo (Gaja, Bruno Giacosa, Produttori).",
          "labelCenter": [
            8.1,
            44.71
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                8.05,
                44.74
              ],
              [
                8.14,
                44.75
              ],
              [
                8.16,
                44.68
              ],
              [
                8.1,
                44.66
              ],
              [
                8.04,
                44.7
              ],
              [
                8.05,
                44.74
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "roero-alto-monferrato-roero",
        "properties": {
          "id": "roero-alto-monferrato-roero",
          "parentSubregionId": "roero-alto-monferrato",
          "subregionId": "roero-alto-monferrato",
          "name": "Roero, Monferrato & Gavi (Roero DOCG)",
          "category": "Pliocene Marine Sands & Arneis / Nebbiolo",
          "dominantGrape": "Arneis & Nebbiolo",
          "color": "#e67e22",
          "accent": "#f9e79f",
          "fillOpacity": 0.24,
          "description": "Pliocene yellow marine sands and fossil seashell cliffs (Rocche) across the northern bank of the Tanaro river.",
          "labelCenter": [
            7.97,
            44.78
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                7.88,
                44.82
              ],
              [
                8.04,
                44.84
              ],
              [
                8.08,
                44.76
              ],
              [
                7.96,
                44.72
              ],
              [
                7.86,
                44.76
              ],
              [
                7.88,
                44.82
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "roero-alto-monferrato-gavi",
        "properties": {
          "id": "roero-alto-monferrato-gavi",
          "parentSubregionId": "roero-alto-monferrato",
          "subregionId": "roero-alto-monferrato",
          "name": "Roero, Monferrato & Gavi (Gavi DOCG)",
          "category": "Terre Bianche Calcareous White Wine Apex",
          "dominantGrape": "Cortese (100%)",
          "color": "#0097a7",
          "accent": "#80deea",
          "fillOpacity": 0.24,
          "description": "White chalky clay-limestone soils near the Ligurian Apennines producing mineral-etched, crisp Cortese (La Scolca).",
          "labelCenter": [
            8.83,
            44.68
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                8.76,
                44.72
              ],
              [
                8.88,
                44.73
              ],
              [
                8.92,
                44.65
              ],
              [
                8.84,
                44.62
              ],
              [
                8.75,
                44.66
              ],
              [
                8.76,
                44.72
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "roero-alto-monferrato-barbera",
        "properties": {
          "id": "roero-alto-monferrato-barbera",
          "parentSubregionId": "roero-alto-monferrato",
          "subregionId": "roero-alto-monferrato",
          "name": "Roero, Monferrato & Gavi (Barbera d'Asti & Nizza DOCG)",
          "category": "Astian Sandy Marls & Acid-Driven Masterpieces",
          "dominantGrape": "Barbera",
          "color": "#6c3483",
          "accent": "#d7bde2",
          "fillOpacity": 0.22,
          "description": "Rolling Monferrato hills renowned for intense, dark-berried, high-acid Barbera and sweet sparkling Moscato d'Asti (Braida).",
          "labelCenter": [
            8.24,
            44.89
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                8.12,
                44.96
              ],
              [
                8.35,
                44.98
              ],
              [
                8.4,
                44.82
              ],
              [
                8.22,
                44.8
              ],
              [
                8.1,
                44.88
              ],
              [
                8.12,
                44.96
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "barolo-langhe-dogliani",
        "properties": {
          "id": "barolo-langhe-dogliani",
          "parentSubregionId": "barolo-langhe",
          "subregionId": "barolo-langhe",
          "name": "Barolo & Langhe (Dogliani DOCG)",
          "category": "High-Altitude Limestone Dolcetto Apex",
          "dominantGrape": "Dolcetto (100%)",
          "color": "#4a148c",
          "accent": "#ba68c8",
          "fillOpacity": 0.24,
          "description": "High-elevation southern Langhe hills delivering dark, brooding, structured, age-worthy Dolcetto (San Fereolo).",
          "labelCenter": [
            7.95,
            44.51
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                7.9,
                44.55
              ],
              [
                8,
                44.55
              ],
              [
                8.02,
                44.48
              ],
              [
                7.92,
                44.46
              ],
              [
                7.88,
                44.5
              ],
              [
                7.9,
                44.55
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "alta-langa-sparkling",
        "properties": {
          "id": "alta-langa-sparkling",
          "parentSubregionId": "alta-langa-sparkling",
          "subregionId": "alta-langa-sparkling",
          "name": "Alta Langa DOCG (Metodo Classico)",
          "category": "High-Elevation Metodo Classico (250m–600m)",
          "dominantGrape": "Pinot Nero & Chardonnay",
          "color": "#b8860b",
          "accent": "#ffd700",
          "fillOpacity": 0.22,
          "description": "Forested high-altitude Langhe hills dedicated to traditional method vintage sparkling wines aged 30-36+ months on lees.",
          "labelCenter": [
            8.18,
            44.55
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                8.08,
                44.62
              ],
              [
                8.28,
                44.64
              ],
              [
                8.3,
                44.48
              ],
              [
                8.12,
                44.46
              ],
              [
                8.05,
                44.54
              ],
              [
                8.08,
                44.62
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "roero-alto-monferrato-alto-piemonte",
        "properties": {
          "id": "roero-alto-monferrato-alto-piemonte",
          "parentSubregionId": "roero-alto-monferrato",
          "subregionId": "roero-alto-monferrato",
          "name": "Roero, Monferrato & Alto Piemonte (Gattinara/Ghemme)",
          "category": "Volcanic Porphyry & Alpine Nebbiolo (Spanna)",
          "dominantGrape": "Nebbiolo (Spanna)",
          "color": "#c0392b",
          "accent": "#f5b7b1",
          "fillOpacity": 0.26,
          "description": "Ancient volcanic porphyry and Alpine foothills producing chiseled, mineral-driven Spanna (Antoniolo, Nervi-Conterno).",
          "labelCenter": [
            8.37,
            45.61
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                8.28,
                45.68
              ],
              [
                8.46,
                45.7
              ],
              [
                8.48,
                45.54
              ],
              [
                8.34,
                45.52
              ],
              [
                8.26,
                45.6
              ],
              [
                8.28,
                45.68
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
        "id": "chianti-classico",
        "properties": {
          "id": "chianti-classico",
          "parentSubregionId": "chianti-classico",
          "subregionId": "chianti-classico",
          "name": "Chianti Classico DOCG (11 UGAs)",
          "category": "Galestro Schist & Gallo Nero Heartland",
          "dominantGrape": "Sangiovese (80-100%)",
          "color": "#900C3F",
          "accent": "#d4af37",
          "fillOpacity": 0.26,
          "description": "Stony Galestro schist and Alberese limestone hills between Florence and Siena (Panzano, Radda, Gaiole, Castellina, Castelnuovo).",
          "labelCenter": [
            11.33,
            43.52
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                11.24,
                43.64
              ],
              [
                11.44,
                43.62
              ],
              [
                11.48,
                43.46
              ],
              [
                11.38,
                43.4
              ],
              [
                11.22,
                43.45
              ],
              [
                11.18,
                43.56
              ],
              [
                11.24,
                43.64
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "montalcino",
        "properties": {
          "id": "montalcino",
          "parentSubregionId": "montalcino",
          "subregionId": "montalcino",
          "name": "Montalcino (Brunello di Montalcino DOCG)",
          "category": "100% Sangiovese Grosso Sovereign Hill",
          "dominantGrape": "Sangiovese Grosso (100%)",
          "color": "#581845",
          "accent": "#ffc300",
          "fillOpacity": 0.28,
          "description": "Isolated hill south of Siena producing powerful, structured 100% Sangiovese Grosso aged 5+ years (Biondi-Santi, Soldera, Poggio di Sotto).",
          "labelCenter": [
            11.48,
            43.02
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                11.42,
                43.08
              ],
              [
                11.56,
                43.08
              ],
              [
                11.58,
                42.96
              ],
              [
                11.46,
                42.94
              ],
              [
                11.38,
                43
              ],
              [
                11.42,
                43.08
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "bolgheri-coastal",
        "properties": {
          "id": "bolgheri-coastal",
          "parentSubregionId": "bolgheri-coastal",
          "subregionId": "bolgheri-coastal",
          "name": "Bolgheri & Coastal Maremma (Bolgheri DOC)",
          "category": "Tyrrhenian Maritime Gravel & Sassicaia",
          "dominantGrape": "Cabernet Sauvignon, Merlot, Cabernet Franc",
          "color": "#1b4f72",
          "accent": "#85c1e9",
          "fillOpacity": 0.26,
          "description": "Tyrrhenian coastal gravel terraces that gave birth to the Super Tuscan revolution: Sassicaia, Ornellaia, and Masseto.",
          "labelCenter": [
            10.59,
            43.2
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                10.54,
                43.26
              ],
              [
                10.65,
                43.26
              ],
              [
                10.66,
                43.14
              ],
              [
                10.56,
                43.14
              ],
              [
                10.52,
                43.2
              ],
              [
                10.54,
                43.26
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "montepulciano-carmignano",
        "properties": {
          "id": "montepulciano-carmignano",
          "parentSubregionId": "montepulciano-carmignano",
          "subregionId": "montepulciano-carmignano",
          "name": "Montepulciano & Carmignano (Vino Nobile DOCG)",
          "category": "Prugnolo Gentile & Historic Hillside Town",
          "dominantGrape": "Sangiovese (Prugnolo Gentile)",
          "color": "#7b241c",
          "accent": "#f1948a",
          "fillOpacity": 0.24,
          "description": "Historic Renaissance hillside town producing aromatic, velvety Sangiovese blends aged in large Slavonian oak casks (Poliziano, Boscarelli).",
          "labelCenter": [
            11.78,
            43.09
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                11.72,
                43.14
              ],
              [
                11.84,
                43.13
              ],
              [
                11.85,
                43.04
              ],
              [
                11.75,
                43.03
              ],
              [
                11.7,
                43.08
              ],
              [
                11.72,
                43.14
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "san-gimignano-val-d-elsa",
        "properties": {
          "id": "san-gimignano-val-d-elsa",
          "parentSubregionId": "san-gimignano-val-d-elsa",
          "subregionId": "san-gimignano-val-d-elsa",
          "name": "San Gimignano & Central Valleys (Vernaccia DOCG)",
          "category": "Historic Medieval Towered White Wine (1966 DOC)",
          "dominantGrape": "Vernaccia (85%+)",
          "color": "#e67e22",
          "accent": "#f9e79f",
          "fillOpacity": 0.24,
          "description": "Yellow Pliocene sandstone hills surrounding the medieval towered town; crisp, flinty, almond-laced Vernaccia.",
          "labelCenter": [
            11.04,
            43.46
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                11,
                43.5
              ],
              [
                11.09,
                43.5
              ],
              [
                11.1,
                43.42
              ],
              [
                11.02,
                43.41
              ],
              [
                10.98,
                43.46
              ],
              [
                11,
                43.5
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "bolgheri-coastal-maremma",
        "properties": {
          "id": "bolgheri-coastal-maremma",
          "parentSubregionId": "bolgheri-coastal",
          "subregionId": "bolgheri-coastal",
          "name": "Bolgheri & Coastal Maremma (Maremma Toscana)",
          "category": "Wild Mediterranean Maritime Hills & Volcanic Tuff",
          "dominantGrape": "Sangiovese (Morellino), Vermentino, Cabernets",
          "color": "#1b5e20",
          "accent": "#a5d6a7",
          "fillOpacity": 0.2,
          "description": "Sun-drenched coastal hills and volcanic tuff producing generous, ripe Morellino di Scansano and Mediterranean blends.",
          "labelCenter": [
            11.16,
            42.72
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                10.95,
                42.86
              ],
              [
                11.35,
                42.88
              ],
              [
                11.4,
                42.6
              ],
              [
                11.05,
                42.58
              ],
              [
                10.92,
                42.72
              ],
              [
                10.95,
                42.86
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
        "id": "napa-valley-floor",
        "properties": {
                  "id": "napa-valley-floor",
                  "parentSubregionId": "napa-valley-floor",
                  "subregionId": "napa-valley-floor",
                  "name": "Napa Valley Floor AVAs",
                  "category": "Cabernet Sauvignon Sovereign & 16 Sub-AVAs",
                  "dominantGrape": "Cabernet Sauvignon",
                  "color": "#4a154b",
                  "accent": "#d4af37",
                  "fillOpacity": 0.28,
                  "labelCenter": [
                            -122.39,
                            38.42
                  ],
                  "description": "World-renowned 30-mile valley graben flanked by Mayacamas and Vaca ranges (Oakville, Rutherford, Stags Leap, Howell Mtn)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.585,
                38.588
              ],
              [
                -122.555,
                38.558
              ],
              [
                -122.52,
                38.525
              ],
              [
                -122.485,
                38.49
              ],
              [
                -122.455,
                38.455
              ],
              [
                -122.425,
                38.415
              ],
              [
                -122.395,
                38.38
              ],
              [
                -122.37,
                38.345
              ],
              [
                -122.345,
                38.305
              ],
              [
                -122.325,
                38.255
              ],
              [
                -122.285,
                38.225
              ],
              [
                -122.245,
                38.25
              ],
              [
                -122.23,
                38.29
              ],
              [
                -122.245,
                38.335
              ],
              [
                -122.28,
                38.375
              ],
              [
                -122.315,
                38.415
              ],
              [
                -122.35,
                38.455
              ],
              [
                -122.385,
                38.49
              ],
              [
                -122.42,
                38.525
              ],
              [
                -122.46,
                38.555
              ],
              [
                -122.505,
                38.575
              ],
              [
                -122.55,
                38.592
              ],
              [
                -122.585,
                38.588
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "sonoma-coast-rrv",
        "properties": {
                  "id": "sonoma-coast-rrv",
                  "parentSubregionId": "sonoma-coast-rrv",
                  "subregionId": "sonoma-coast-rrv",
                  "name": "Sonoma Coast & Russian River Valley",
                  "category": "Goldridge Loam, Pacific Fog & Pinot/Chard",
                  "dominantGrape": "Pinot Noir, Chardonnay, Zinfandel",
                  "color": "#2e7d32",
                  "accent": "#a5d6a7",
                  "fillOpacity": 0.24,
                  "labelCenter": [
                            -122.92,
                            38.48
                  ],
                  "description": "Diverse microclimates influenced by Petaluma Gap marine fog and Goldridge sandy loam (Kistler, Rochioli, Littorai)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.865,
                38.625
              ],
              [
                -122.81,
                38.605
              ],
              [
                -122.765,
                38.56
              ],
              [
                -122.735,
                38.5
              ],
              [
                -122.73,
                38.435
              ],
              [
                -122.75,
                38.365
              ],
              [
                -122.79,
                38.305
              ],
              [
                -122.855,
                38.275
              ],
              [
                -122.94,
                38.27
              ],
              [
                -123.015,
                38.29
              ],
              [
                -123.065,
                38.335
              ],
              [
                -123.085,
                38.4
              ],
              [
                -123.125,
                38.48
              ],
              [
                -123.185,
                38.535
              ],
              [
                -123.265,
                38.6
              ],
              [
                -123.34,
                38.665
              ],
              [
                -123.32,
                38.715
              ],
              [
                -123.22,
                38.71
              ],
              [
                -123.12,
                38.67
              ],
              [
                -123.02,
                38.64
              ],
              [
                -122.945,
                38.63
              ],
              [
                -122.865,
                38.625
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "central-coast-paso",
        "properties": {
                  "id": "central-coast-paso",
                  "parentSubregionId": "central-coast-paso",
                  "subregionId": "central-coast-paso",
                  "name": "Central Coast & Paso Robles AVA",
                  "category": "Expansive Pacific Maritime Valleys",
                  "dominantGrape": "Chardonnay, Pinot Noir, Syrah, Cabernet",
                  "color": "#0288d1",
                  "accent": "#81d4fa",
                  "fillOpacity": 0.18,
                  "labelCenter": [
                            -120.7,
                            35.63
                  ],
                  "description": "Spanning from Monterey through San Luis Obispo and Santa Barbara cooled by direct Pacific Ocean airflow."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.92,
                35.78
              ],
              [
                -120.76,
                35.81
              ],
              [
                -120.58,
                35.8
              ],
              [
                -120.44,
                35.74
              ],
              [
                -120.36,
                35.65
              ],
              [
                -120.4,
                35.54
              ],
              [
                -120.52,
                35.43
              ],
              [
                -120.66,
                35.42
              ],
              [
                -120.78,
                35.47
              ],
              [
                -120.92,
                35.53
              ],
              [
                -121,
                35.62
              ],
              [
                -120.98,
                35.72
              ],
              [
                -120.92,
                35.78
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "central-coast-paso-robles",
        "properties": {
                  "id": "central-coast-paso-robles",
                  "parentSubregionId": "central-coast-paso",
                  "subregionId": "central-coast-paso",
                  "name": "Central Coast (Paso Robles AVA)",
                  "category": "Marine Limestone Benches & Opulent Rhône / Cabernets",
                  "dominantGrape": "Cabernet Sauvignon, Syrah, Zinfandel",
                  "color": "#c0392b",
                  "accent": "#f5b7b1",
                  "fillOpacity": 0.26,
                  "labelCenter": [
                            -120.72,
                            35.62
                  ],
                  "description": "High diurnal temperature swings and rare marine limestone benches producing opulent Cabernet and Rhône blends (Saxum, Tablas Creek)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.9,
                35.7
              ],
              [
                -120.8,
                35.71
              ],
              [
                -120.68,
                35.69
              ],
              [
                -120.59,
                35.67
              ],
              [
                -120.54,
                35.61
              ],
              [
                -120.57,
                35.54
              ],
              [
                -120.65,
                35.51
              ],
              [
                -120.74,
                35.51
              ],
              [
                -120.83,
                35.54
              ],
              [
                -120.89,
                35.59
              ],
              [
                -120.91,
                35.65
              ],
              [
                -120.9,
                35.7
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "santa-cruz-mountains",
        "properties": {
                  "id": "santa-cruz-mountains",
                  "parentSubregionId": "santa-cruz-mountains",
                  "subregionId": "santa-cruz-mountains",
                  "name": "Santa Cruz Mountains AVA",
                  "category": "High Elevation Coastal Ridge & Ridge Monte Bello",
                  "dominantGrape": "Cabernet Sauvignon & Chardonnay",
                  "color": "#512da8",
                  "accent": "#b39ddb",
                  "fillOpacity": 0.26,
                  "labelCenter": [
                            -122.08,
                            37.18
                  ],
                  "description": "Forested coastal mountain ridge producing structured, mineral, European-style Cabernets that age for half a century (Ridge Monte Bello, Mount Eden)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.3,
                37.4
              ],
              [
                -122.23,
                37.38
              ],
              [
                -122.16,
                37.35
              ],
              [
                -122.09,
                37.31
              ],
              [
                -122.02,
                37.25
              ],
              [
                -121.96,
                37.18
              ],
              [
                -121.88,
                37.12
              ],
              [
                -121.8,
                37.04
              ],
              [
                -121.8,
                36.96
              ],
              [
                -121.9,
                36.94
              ],
              [
                -122,
                36.98
              ],
              [
                -122.1,
                37.04
              ],
              [
                -122.18,
                37.12
              ],
              [
                -122.25,
                37.22
              ],
              [
                -122.28,
                37.32
              ],
              [
                -122.3,
                37.4
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "central-coast-paso-sta-rita-hills",
        "properties": {
                  "id": "central-coast-paso-sta-rita-hills",
                  "parentSubregionId": "central-coast-paso",
                  "subregionId": "central-coast-paso",
                  "name": "Central Coast (Sta. Rita Hills AVA)",
                  "category": "Transverse East-West Maritime Pacific Corridor",
                  "dominantGrape": "Pinot Noir & Chardonnay",
                  "color": "#d81b60",
                  "accent": "#f48fb1",
                  "fillOpacity": 0.28,
                  "labelCenter": [
                            -120.36,
                            34.63
                  ],
                  "description": "Rare east-west transverse maritime corridor funneling Pacific fog and winds onto diatomaceous earth slopes (Domaine de la Côte, Sea Smoke)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.485,
                34.65
              ],
              [
                -120.45,
                34.675
              ],
              [
                -120.395,
                34.69
              ],
              [
                -120.34,
                34.685
              ],
              [
                -120.275,
                34.665
              ],
              [
                -120.22,
                34.635
              ],
              [
                -120.245,
                34.595
              ],
              [
                -120.315,
                34.57
              ],
              [
                -120.385,
                34.575
              ],
              [
                -120.44,
                34.6
              ],
              [
                -120.47,
                34.625
              ],
              [
                -120.485,
                34.65
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
        "id": "dundee-hills-willamette",
        "properties": {
          "id": "dundee-hills-willamette",
          "parentSubregionId": "dundee-hills",
          "subregionId": "dundee-hills",
          "name": "Willamette Valley (Dundee Hills & Envelope)",
          "category": "45th Parallel Cool-Climate Pinot Noir Kingdom",
          "dominantGrape": "Pinot Noir & Chardonnay",
          "color": "#6a1b9a",
          "accent": "#e1bee7",
          "fillOpacity": 0.18,
          "description": "Valley basin nestled between Coast Range and Cascades on the same 45th parallel as Burgundy.",
          "labelCenter": [
            -123.14,
            45.22
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.35,
                45.42
              ],
              [
                -122.95,
                45.45
              ],
              [
                -122.9,
                45
              ],
              [
                -123.25,
                44.98
              ],
              [
                -123.4,
                45.22
              ],
              [
                -123.35,
                45.42
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "dundee-hills",
        "properties": {
          "id": "dundee-hills",
          "parentSubregionId": "dundee-hills",
          "subregionId": "dundee-hills",
          "name": "Dundee Hills AVA",
          "category": "Red Volcanic Jory Clay Loam & Silky Red Cherry",
          "dominantGrape": "Pinot Noir (100%)",
          "color": "#b71c1c",
          "accent": "#ef5350",
          "fillOpacity": 0.3,
          "description": "Iron-rich red volcanic Jory clay loam producing silky, floral red cherry and baking spice Pinot Noir (Domaine Drouhin, Eyrie, Beaux Frères).",
          "labelCenter": [
            -123.03,
            45.29
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.08,
                45.32
              ],
              [
                -122.98,
                45.33
              ],
              [
                -122.98,
                45.25
              ],
              [
                -123.06,
                45.24
              ],
              [
                -123.1,
                45.28
              ],
              [
                -123.08,
                45.32
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "eola-amity-hills",
        "properties": {
          "id": "eola-amity-hills",
          "parentSubregionId": "eola-amity-hills",
          "subregionId": "eola-amity-hills",
          "name": "Eola-Amity Hills AVA",
          "category": "Van Duzer Marine Gales & Shallow Nekia Basalt",
          "dominantGrape": "Pinot Noir & Chardonnay",
          "color": "#1565c0",
          "accent": "#90caf9",
          "fillOpacity": 0.28,
          "description": "Direct path of the cool Van Duzer oceanic winds delivering piercing acidity, thick skins, and saline tension (Cristom, Walter Scott).",
          "labelCenter": [
            -123.11,
            45.07
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.16,
                45.14
              ],
              [
                -123.06,
                45.14
              ],
              [
                -123.05,
                45.02
              ],
              [
                -123.14,
                45
              ],
              [
                -123.18,
                45.06
              ],
              [
                -123.16,
                45.14
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "ribbon-ridge-yamhill",
        "properties": {
          "id": "ribbon-ridge-yamhill",
          "parentSubregionId": "ribbon-ridge-yamhill",
          "subregionId": "ribbon-ridge-yamhill",
          "name": "Ribbon Ridge & Yamhill AVA",
          "category": "Ancient Marine Sedimentary Willakenzie Sandstone",
          "dominantGrape": "Pinot Noir & Chardonnay",
          "color": "#4a148c",
          "accent": "#ce93d8",
          "fillOpacity": 0.3,
          "description": "Smallest nested AVA; ancient ocean floor Willakenzie sandstone yielding dark, broody black fruits and crushed rock (Beaux Frères, Brick House).",
          "labelCenter": [
            -123.08,
            45.35
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.11,
                45.38
              ],
              [
                -123.05,
                45.38
              ],
              [
                -123.04,
                45.33
              ],
              [
                -123.1,
                45.33
              ],
              [
                -123.12,
                45.35
              ],
              [
                -123.11,
                45.38
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "ribbon-ridge-yamhill-carlton",
        "properties": {
          "id": "ribbon-ridge-yamhill-carlton",
          "parentSubregionId": "ribbon-ridge-yamhill",
          "subregionId": "ribbon-ridge-yamhill",
          "name": "Ribbon Ridge & Yamhill-Carlton AVA",
          "category": "Coarse Marine Sediment, Dark Fruit & Savory Spice",
          "dominantGrape": "Pinot Noir",
          "color": "#37474f",
          "accent": "#90a4ae",
          "fillOpacity": 0.26,
          "description": "Horseshoe ridge of coarse marine sediment surrounding Yamhill and Carlton (Shea Vineyard, Ken Wright, Soter).",
          "labelCenter": [
            -123.17,
            45.34
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.22,
                45.38
              ],
              [
                -123.12,
                45.38
              ],
              [
                -123.11,
                45.3
              ],
              [
                -123.2,
                45.29
              ],
              [
                -123.24,
                45.34
              ],
              [
                -123.22,
                45.38
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "mcminnville-ava",
        "properties": {
          "id": "mcminnville-ava",
          "parentSubregionId": "mcminnville-ava",
          "subregionId": "mcminnville-ava",
          "name": "McMinnville AVA",
          "category": "Coast Range Rain Shadow & Uplifted Marine Basalt",
          "dominantGrape": "Pinot Noir & Pinot Blanc",
          "color": "#00695c",
          "accent": "#80cbc4",
          "fillOpacity": 0.26,
          "description": "Southwestern foothills in the Coast Range rain shadow producing muscular, savory, deeply pigmented Pinot Noirs.",
          "labelCenter": [
            -123.27,
            45.18
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.32,
                45.22
              ],
              [
                -123.22,
                45.22
              ],
              [
                -123.2,
                45.14
              ],
              [
                -123.3,
                45.13
              ],
              [
                -123.34,
                45.18
              ],
              [
                -123.32,
                45.22
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "chehalem-mountains",
        "properties": {
          "id": "chehalem-mountains",
          "parentSubregionId": "chehalem-mountains",
          "subregionId": "chehalem-mountains",
          "name": "Chehalem Mountains & Laurelwood AVA",
          "category": "Highest Elevation Ridge & Windblown Loess (Laurelwood)",
          "dominantGrape": "Pinot Noir & Chardonnay",
          "color": "#e65100",
          "accent": "#ffb74d",
          "fillOpacity": 0.26,
          "description": "Highest elevation range in the northern Willamette with complex geological strata of windblown silty loess and volcanic basalt (Ponzi).",
          "labelCenter": [
            -122.96,
            45.39
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.05,
                45.42
              ],
              [
                -122.88,
                45.44
              ],
              [
                -122.86,
                45.36
              ],
              [
                -123,
                45.34
              ],
              [
                -123.06,
                45.38
              ],
              [
                -123.05,
                45.42
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
          "description": "Steep Llicorella slate terraces producing heroic, mineral-soaked old-vine Garnacha and Cariñena (L'Ermita, Clos Mogador).",
          "labelCenter": [
            0.82,
            41.18
          ]
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
                0.85,
                41.28
              ],
              [
                0.94,
                41.22
              ],
              [
                0.92,
                41.12
              ],
              [
                0.82,
                41.08
              ],
              [
                0.7,
                41.14
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
          "description": "Lush green Atlantic coastal fjords over decomposed granite xabre, crafting crystalline, saline, long-lived Albariño (Do Ferreiro, Pazo de Señorans).",
          "labelCenter": [
            -8.8,
            42.48
          ]
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
                -8.78,
                42.63
              ],
              [
                -8.65,
                42.52
              ],
              [
                -8.62,
                42.34
              ],
              [
                -8.82,
                42.32
              ],
              [
                -8.92,
                42.44
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
          "description": "Vertiginous south-facing blue slate amphitheaters (Wehlener Sonnenuhr, Berncasteler Doctor, Ürziger Würzgarten, Erdener Prälat).",
          "labelCenter": [
            7.05,
            49.95
          ]
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
                7.08,
                50.06
              ],
              [
                7.22,
                49.98
              ],
              [
                7.18,
                49.88
              ],
              [
                7.02,
                49.85
              ],
              [
                6.86,
                49.92
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
          "description": "Cool wind corridor producing crystalline, mineral Riesling (Scharzhofberg).",
          "labelCenter": [
            6.58,
            49.62
          ]
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
                6.64,
                49.69
              ],
              [
                6.7,
                49.6
              ],
              [
                6.66,
                49.52
              ],
              [
                6.5,
                49.53
              ],
              [
                6.46,
                49.61
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
          "description": "Pure south-facing Rhine terraces backed by the Taunus mountains producing aristocratic dry Grosses Gewächs and late harvest botrytis wines.",
          "labelCenter": [
            8.06,
            50.01
          ]
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
                8.08,
                50.06
              ],
              [
                8.28,
                50.03
              ],
              [
                8.3,
                49.96
              ],
              [
                8.1,
                49.97
              ],
              [
                7.88,
                49.98
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
          "description": "Dynamic geological mosaic of volcanic rhyolite, porphyry, and limestone crafting powerful dry Grosses Gewächs (Dönnhoff Hermannshöhle, Keller G-Max).",
          "labelCenter": [
            8.02,
            49.62
          ]
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
                7.98,
                49.9
              ],
              [
                8.24,
                49.75
              ],
              [
                8.28,
                49.38
              ],
              [
                8.12,
                49.32
              ],
              [
                7.98,
                49.46
              ],
              [
                7.72,
                49.65
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
          "category": "Ancient Pre-Phylloxera Shiraz (1843)",
          "dominantGrape": "Shiraz & Grenache",
          "color": "#800020",
          "accent": "#d4af37",
          "fillOpacity": 0.26,
          "description": "Centenarian ungrafted Shiraz vines dating to 1843 on deep ironstone red clay (Penfolds Grange, Torbreck RunRig).",
          "labelCenter": [
            138.94,
            -34.52
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                138.8,
                -34.38
              ],
              [
                139.02,
                -34.39
              ],
              [
                139.08,
                -34.56
              ],
              [
                139.04,
                -34.68
              ],
              [
                138.86,
                -34.67
              ],
              [
                138.76,
                -34.52
              ],
              [
                138.8,
                -34.38
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
          "category": "Cool-Climate Schist Riesling & Old Vine Shiraz",
          "dominantGrape": "Riesling & Shiraz",
          "color": "#1f618d",
          "accent": "#85c1e9",
          "fillOpacity": 0.24,
          "description": "Elevated windswept Barossa Ranges on mica schist and quartz; home to Henschke Hill of Grace and electric dry Riesling.",
          "labelCenter": [
            139.14,
            -34.6
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                139.06,
                -34.42
              ],
              [
                139.24,
                -34.44
              ],
              [
                139.28,
                -34.66
              ],
              [
                139.22,
                -34.78
              ],
              [
                139.06,
                -34.75
              ],
              [
                139.04,
                -34.58
              ],
              [
                139.06,
                -34.42
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
          "description": "Leeuwin-Naturaliste lateritic ironstone ridge cooled by the Indian and Southern Oceans (Leeuwin Art Series, Cullen).",
          "labelCenter": [
            115.08,
            -34
          ]
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
                115.18,
                -33.68
              ],
              [
                115.22,
                -34.02
              ],
              [
                115.2,
                -34.34
              ],
              [
                115.02,
                -34.36
              ],
              [
                114.96,
                -34.06
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
          "description": "Australia's oldest wine region producing un-oaked, low-alcohol, ageworthy Semillon (Tyrrell's Vat 1).",
          "labelCenter": [
            151.3,
            -32.8
          ]
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
                151.38,
                -32.66
              ],
              [
                151.48,
                -32.82
              ],
              [
                151.44,
                -32.96
              ],
              [
                151.22,
                -32.94
              ],
              [
                151.14,
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
          "description": "Famous 15km cigar-shaped ridge of vibrant red terra rossa over Gambier limestone (Wynns John Riddoch).",
          "labelCenter": [
            140.83,
            -37.31
          ]
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
                140.88,
                -37.2
              ],
              [
                140.92,
                -37.32
              ],
              [
                140.9,
                -37.44
              ],
              [
                140.78,
                -37.42
              ],
              [
                140.75,
                -37.3
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
          "description": "Third alluvial gravel terrace at the base of the Andes with mint, eucalyptus, and cassis profile (Almaviva, Don Melchor, Viñedo Chadwick).",
          "labelCenter": [
            -70.6,
            -33.7
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -70.74,
                -33.54
              ],
              [
                -70.42,
                -33.58
              ],
              [
                -70.45,
                -33.74
              ],
              [
                -70.52,
                -33.86
              ],
              [
                -70.78,
                -33.82
              ],
              [
                -70.78,
                -33.68
              ],
              [
                -70.74,
                -33.54
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
          "category": "Decomposed Pink Granite & Opulent Carmenère",
          "dominantGrape": "Carmenère, Cabernet Sauvignon, Syrah",
          "color": "#4a154b",
          "accent": "#ffd700",
          "fillOpacity": 0.26,
          "description": "Horseshoe-shaped granite amphitheater sheltered from coastal extremes (Clos Apalta, Montes Purple Angel).",
          "labelCenter": [
            -71.36,
            -34.6
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -71.48,
                -34.44
              ],
              [
                -71.2,
                -34.46
              ],
              [
                -71.16,
                -34.62
              ],
              [
                -71.24,
                -34.76
              ],
              [
                -71.52,
                -34.72
              ],
              [
                -71.55,
                -34.58
              ],
              [
                -71.48,
                -34.44
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
          "category": "Pacific Humboldt Current Fog & Coastal Whites",
          "dominantGrape": "Sauvignon Blanc, Chardonnay, Pinot Noir",
          "color": "#117864",
          "accent": "#76d7c4",
          "fillOpacity": 0.24,
          "description": "Cool coastal valleys bathed in morning marine fog (Camanchaca) producing electric Sauvignon Blanc and mineral Chardonnay.",
          "labelCenter": [
            -71.44,
            -33.42
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -71.58,
                -33.15
              ],
              [
                -71.28,
                -33.2
              ],
              [
                -71.26,
                -33.48
              ],
              [
                -71.32,
                -33.68
              ],
              [
                -71.64,
                -33.66
              ],
              [
                -71.62,
                -33.38
              ],
              [
                -71.58,
                -33.15
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
          "category": "Deep Alluvial Clay Sanctuary for Carmenère",
          "dominantGrape": "Carmenère & Cabernet Sauvignon",
          "color": "#c0392b",
          "accent": "#f5b7b1",
          "fillOpacity": 0.25,
          "description": "Moisture-retaining clay river terraces where late-ripening ungrafted Carmenère reaches supreme physiological maturity (Carmín de Peumo, Terrunyo).",
          "labelCenter": [
            -71.18,
            -34.25
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -71.34,
                -34.1
              ],
              [
                -70.98,
                -34.12
              ],
              [
                -70.96,
                -34.28
              ],
              [
                -71.04,
                -34.4
              ],
              [
                -71.38,
                -34.38
              ],
              [
                -71.4,
                -34.22
              ],
              [
                -71.34,
                -34.1
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
        "id": "veneto-valpolicella",
        "properties": {
          "id": "veneto-valpolicella",
          "parentSubregionId": "veneto-valpolicella",
          "subregionId": "veneto-valpolicella",
          "name": "Valpolicella & Amarone (Veneto)",
          "category": "Appassimento Corvina & Basalt Garganega",
          "dominantGrape": "Corvina, Corvinone, Garganega",
          "color": "#4a154b",
          "accent": "#ffd700",
          "fillOpacity": 0.26,
          "description": "Limestone valleys north of Verona producing dried-grape Amarone and basalt volcanic Soave (Quintarelli, Pieropan)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                10.82,
                45.6
              ],
              [
                11.35,
                45.58
              ],
              [
                11.3,
                45.38
              ],
              [
                10.8,
                45.42
              ],
              [
                10.82,
                45.6
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "sicily-etna",
        "properties": {
          "id": "sicily-etna",
          "parentSubregionId": "sicily-etna",
          "subregionId": "sicily-etna",
          "name": "Sicily & Mount Etna (Etna DOC)",
          "category": "High-Altitude Volcanic Ash & Contrade Crus",
          "dominantGrape": "Nerello Mascalese & Carricante",
          "color": "#c0392b",
          "accent": "#f5b7b1",
          "fillOpacity": 0.28,
          "description": "High-altitude slopes of Mount Etna volcano (up to 1,000m) with black pumice and lava Contrade (Passopisciaro, Terre Nere, Benanti)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                14.9,
                37.85
              ],
              [
                15.18,
                37.82
              ],
              [
                15.2,
                37.62
              ],
              [
                14.92,
                37.65
              ],
              [
                14.9,
                37.85
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "alto-adige-sudtirol",
        "properties": {
          "id": "alto-adige-sudtirol",
          "parentSubregionId": "alto-adige-sudtirol",
          "subregionId": "alto-adige-sudtirol",
          "name": "Alto Adige / Südtirol (Italian Alps)",
          "category": "Alpine Dolomite Limestone & Porphyry Terraces",
          "dominantGrape": "Pinot Bianco, Sauvignon, Lagrein, Pinot Nero",
          "color": "#1565c0",
          "accent": "#90caf9",
          "fillOpacity": 0.26,
          "description": "Spectacular Alpine terraced valley beneath Dolomite peaks producing crystalline Pinot Bianco and mineral whites (Cantina Terlano)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                11.15,
                46.68
              ],
              [
                11.55,
                46.65
              ],
              [
                11.5,
                46.25
              ],
              [
                11.1,
                46.28
              ],
              [
                11.15,
                46.68
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "friuli-venezia-giulia",
        "properties": {
          "id": "friuli-venezia-giulia",
          "parentSubregionId": "friuli-venezia-giulia",
          "subregionId": "friuli-venezia-giulia",
          "name": "Friuli-Venezia Giulia (Collio & Colli Orientali)",
          "category": "Flysch Ponca Soil & Macerated Orange / White Masters",
          "dominantGrape": "Friulano, Ribolla Gialla, Sauvignon",
          "color": "#f57f17",
          "accent": "#fff59d",
          "fillOpacity": 0.26,
          "description": "Layered sandstone-marl flysch (ponca) soils along the Slovenian border; world center for amphora and orange wines (Gravner, Radikon)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                13.35,
                46.12
              ],
              [
                13.65,
                46.08
              ],
              [
                13.62,
                45.85
              ],
              [
                13.3,
                45.88
              ],
              [
                13.35,
                46.12
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "campania-irpinia",
        "properties": {
          "id": "campania-irpinia",
          "parentSubregionId": "campania-irpinia",
          "subregionId": "campania-irpinia",
          "name": "Campania (Taurasi, Greco & Fiano)",
          "category": "Ancient Volcanic Tuff & Aglianico / Fiano",
          "dominantGrape": "Aglianico, Fiano di Avellino, Greco di Tufo",
          "color": "#6a1b9a",
          "accent": "#e1bee7",
          "fillOpacity": 0.26,
          "description": "High-altitude volcanic hills of Irpinia delivering the 'Barolo of the South' (Taurasi Aglianico) and age-worthy Fiano (Mastroberardino)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                14.75,
                41.1
              ],
              [
                15.18,
                41.08
              ],
              [
                15.15,
                40.85
              ],
              [
                14.7,
                40.88
              ],
              [
                14.75,
                41.1
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
        "id": "yamanashi-katsunuma",
        "properties": {
          "id": "yamanashi-katsunuma",
          "parentSubregionId": "yamanashi-katsunuma",
          "subregionId": "yamanashi-katsunuma",
          "name": "Katsunuma & Yamanashi Basin (GI Yamanashi)",
          "category": "Indigenous Koshu on Mount Fuji Volcanic Alluvium",
          "dominantGrape": "Koshu & Muscat Bailey A",
          "color": "#1b4f72",
          "accent": "#85c1e9",
          "fillOpacity": 0.28,
          "description": "Volcanic alluvial amphitheater beneath Mount Fuji; pergola tanazukuri trellising producing delicate yuzu-and-mineral Koshu (Grace Wine, Katsunuma Jozo)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                138.58,
                35.75
              ],
              [
                138.82,
                35.74
              ],
              [
                138.8,
                35.58
              ],
              [
                138.56,
                35.6
              ],
              [
                138.58,
                35.75
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
          "category": "High Alpine Valley Chardonnay & Merlot Benchmark",
          "dominantGrape": "Chardonnay & Merlot",
          "color": "#2e7d32",
          "accent": "#a5d6a7",
          "fillOpacity": 0.26,
          "description": "High alpine valleys (Chikuma River and Shiojiri Kikyogahara) producing benchmark cool-climate Chardonnay and Merlot (Chateau Mercian, Domaine Sogga)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                137.8,
                36.4
              ],
              [
                138.3,
                36.65
              ],
              [
                138.45,
                36.35
              ],
              [
                137.95,
                36.05
              ],
              [
                137.8,
                36.4
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
        "id": "haut-rhin",
        "properties": {
          "id": "haut-rhin",
          "parentSubregionId": "haut-rhin",
          "subregionId": "haut-rhin",
          "name": "Haut-Rhin (Upper Rhine / Southern & Central Alsace)",
          "category": "Grand Cru Kingdom (37 Grand Crus)",
          "dominantGrape": "Riesling, Gewurztraminer, Pinot Gris, Pinot Noir",
          "color": "#b8860b",
          "accent": "#ffd700",
          "fillOpacity": 0.24,
          "description": "Steep Vosges foothills sheltered by the highest mountain peaks (Grand Ballon 1,424m); home to 37 Grand Crus including Rangen, Schlossberg, Brand, and Sommerberg."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                7.08,
                47.78
              ],
              [
                7.28,
                47.78
              ],
              [
                7.38,
                47.95
              ],
              [
                7.44,
                48.12
              ],
              [
                7.4,
                48.24
              ],
              [
                7.28,
                48.24
              ],
              [
                7.18,
                48.1
              ],
              [
                7.05,
                47.88
              ],
              [
                7.08,
                47.78
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "bas-rhin",
        "properties": {
          "id": "bas-rhin",
          "parentSubregionId": "bas-rhin",
          "subregionId": "bas-rhin",
          "name": "Bas-Rhin (Lower Rhine / Northern Alsace & Couronne de Strasbourg)",
          "category": "Sandstone & Limestone Crus (14 Grand Crus)",
          "dominantGrape": "Riesling, Sylvaner, Pinot Blanc, Auxerrois",
          "color": "#2e7d32",
          "accent": "#81c784",
          "fillOpacity": 0.22,
          "description": "Gentler northern slopes with cool nights and crystalline floral aromatics; home to Zotzenberg, Kastelberg, and Muenchberg."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                7.32,
                48.24
              ],
              [
                7.45,
                48.24
              ],
              [
                7.55,
                48.45
              ],
              [
                7.58,
                48.65
              ],
              [
                7.45,
                48.68
              ],
              [
                7.36,
                48.5
              ],
              [
                7.32,
                48.35
              ],
              [
                7.32,
                48.24
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
        "id": "patrimonio",
        "properties": {
          "id": "patrimonio",
          "parentSubregionId": "patrimonio",
          "subregionId": "patrimonio",
          "name": "Patrimonio AOC",
          "category": "Miocene Limestone Amphitheater",
          "dominantGrape": "Niellucciu (90%+) & Vermentinu",
          "color": "#8b0000",
          "accent": "#d4af37",
          "fillOpacity": 0.28,
          "labelCenter": [
            9.345,
            42.678
          ],
          "description": "Corsica's first AOC (1968) and premier Cru. Defined by the Conca d'Oro amphitheater around Saint-Florent on pure white Miocene chalk and limestone (Calcaire de Saint-Florent)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.303,
                42.682
              ],
              [
                9.278,
                42.695
              ],
              [
                9.31,
                42.712
              ],
              [
                9.335,
                42.732
              ],
              [
                9.355,
                42.738
              ],
              [
                9.388,
                42.714
              ],
              [
                9.4,
                42.685
              ],
              [
                9.385,
                42.665
              ],
              [
                9.37,
                42.635
              ],
              [
                9.34,
                42.615
              ],
              [
                9.285,
                42.62
              ],
              [
                9.245,
                42.655
              ],
              [
                9.288,
                42.67
              ],
              [
                9.303,
                42.682
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "coteaux-du-cap-corse",
        "properties": {
          "id": "coteaux-du-cap-corse",
          "parentSubregionId": "coteaux-du-cap-corse",
          "subregionId": "coteaux-du-cap-corse",
          "name": "Cap Corse & Muscat AOC",
          "category": "Metamorphic Schist Spine Terraces",
          "dominantGrape": "Vermentinu & Muscat Blanc à Petits Grains",
          "color": "#7b1fa2",
          "accent": "#ba68c8",
          "fillOpacity": 0.28,
          "labelCenter": [
            9.412,
            42.869
          ],
          "description": "Dramatically steep metamorphic schist terraces (Schistes lustrés) plunging into the sea along the northern finger peninsula; dry saline Vermentinu and unctuous Muscat VDN."
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
                9.344,
                42.966
              ],
              [
                9.348,
                42.905
              ],
              [
                9.328,
                42.842
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
                9.355,
                42.748
              ],
              [
                9.42,
                42.745
              ],
              [
                9.452,
                42.75
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
                9.488,
                42.924
              ],
              [
                9.458,
                42.962
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
      },
      {
        "type": "Feature",
        "id": "corse-calvi",
        "properties": {
          "id": "corse-calvi",
          "parentSubregionId": "corse-calvi",
          "subregionId": "corse-calvi",
          "name": "Corse Calvi AOC",
          "category": "Balagne Granite & Schist Amphitheater",
          "dominantGrape": "Sciaccarellu, Niellucciu, Vermentinu",
          "color": "#0288d1",
          "accent": "#81d4fa",
          "fillOpacity": 0.26,
          "labelCenter": [
            8.816,
            42.549
          ],
          "description": "'The Garden of Corsica', framed between Mount Cinto (2,706m) and the sea. Steep granite and schist slopes around Calvi, Lumio, Calenzana, and L'Île-Rousse."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
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
                8.715,
                42.485
              ],
              [
                8.775,
                42.475
              ],
              [
                8.835,
                42.492
              ],
              [
                8.895,
                42.535
              ],
              [
                8.945,
                42.585
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
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "ajaccio",
        "properties": {
          "id": "ajaccio",
          "parentSubregionId": "ajaccio",
          "subregionId": "ajaccio",
          "name": "Ajaccio AOC",
          "category": "Granitic Sciaccarellu Amphitheater",
          "dominantGrape": "Sciaccarellu (60%+) & Vermentinu",
          "color": "#c2185b",
          "accent": "#f48fb1",
          "fillOpacity": 0.26,
          "labelCenter": [
            8.809,
            41.918
          ],
          "description": "Cru appellation surrounding the Gulf of Ajaccio and valleys of the Gravona and Taravo. Decomposed Hercynian granite slopes; world benchmark for peppery, aromatic Sciaccarellu."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                8.614,
                41.895
              ],
              [
                8.598,
                41.972
              ],
              [
                8.642,
                41.988
              ],
              [
                8.712,
                42.022
              ],
              [
                8.815,
                42.035
              ],
              [
                8.925,
                42.008
              ],
              [
                8.985,
                41.942
              ],
              [
                8.965,
                41.862
              ],
              [
                8.895,
                41.815
              ],
              [
                8.825,
                41.782
              ],
              [
                8.752,
                41.765
              ],
              [
                8.704,
                41.792
              ],
              [
                8.798,
                41.892
              ],
              [
                8.742,
                41.918
              ],
              [
                8.705,
                41.912
              ],
              [
                8.614,
                41.895
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "corse-sartene",
        "properties": {
          "id": "corse-sartene",
          "parentSubregionId": "corse-sartene",
          "subregionId": "corse-sartene",
          "name": "Corse Sartène AOC",
          "category": "Rugged Granite Valinco Slopes",
          "dominantGrape": "Sciaccarellu, Niellucciu, Vermentinu",
          "color": "#6a1b9a",
          "accent": "#ce93d8",
          "fillOpacity": 0.26,
          "labelCenter": [
            8.903,
            41.608
          ],
          "description": "Decomposed granite and gravelly clay slopes surrounding the medieval mountain fortress of Sartène and Gulf of Valinco; structured, peppery reds and mineral whites."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                8.802,
                41.642
              ],
              [
                8.814,
                41.636
              ],
              [
                8.788,
                41.562
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
                8.985,
                41.545
              ],
              [
                9.025,
                41.595
              ],
              [
                9.015,
                41.652
              ],
              [
                8.965,
                41.692
              ],
              [
                8.898,
                41.676
              ],
              [
                8.842,
                41.705
              ],
              [
                8.794,
                41.708
              ],
              [
                8.802,
                41.642
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "corse-figari",
        "properties": {
          "id": "corse-figari",
          "parentSubregionId": "corse-figari",
          "subregionId": "corse-figari",
          "name": "Corse Figari AOC",
          "category": "Windswept Granite Plateau",
          "dominantGrape": "Sciaccarellu, Niellucciu, Biancu Gentile",
          "color": "#e65100",
          "accent": "#ffb74d",
          "fillOpacity": 0.26,
          "labelCenter": [
            9.1,
            41.481
          ],
          "description": "The southernmost vineyards in France. Wind-battered granite plateau north of Bonifacio delivering saline, concentrated, herb-crusted wines of profound mineral intensity."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                8.985,
                41.545
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
                9.098,
                41.398
              ],
              [
                9.155,
                41.405
              ],
              [
                9.195,
                41.442
              ],
              [
                9.185,
                41.495
              ],
              [
                9.135,
                41.535
              ],
              [
                9.065,
                41.555
              ],
              [
                8.985,
                41.545
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "corse-porto-vecchio",
        "properties": {
          "id": "corse-porto-vecchio",
          "parentSubregionId": "corse-porto-vecchio",
          "subregionId": "corse-porto-vecchio",
          "name": "Corse Porto-Vecchio AOC",
          "category": "Coastal Tyrrhenian Granite Amphitheater",
          "dominantGrape": "Niellucciu, Sciaccarellu, Vermentinu",
          "color": "#00695c",
          "accent": "#4db6ac",
          "fillOpacity": 0.26,
          "labelCenter": [
            9.285,
            41.625
          ],
          "description": "Southeastern granite hills overlooking the turquoise Tyrrhenian Sea, sheltered by the Ospedale pine massif; supple, aromatic Mediterranean reds and floral rosés."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.205,
                41.53
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
                9.345,
                41.725
              ],
              [
                9.265,
                41.705
              ],
              [
                9.205,
                41.665
              ],
              [
                9.165,
                41.595
              ],
              [
                9.205,
                41.53
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "corse-regional",
        "properties": {
          "id": "corse-regional",
          "parentSubregionId": "corse-regional",
          "subregionId": "corse-regional",
          "name": "Corse AOC (Plaine Orientale)",
          "category": "Broad Eastern Alluvial Plain & Foothills",
          "dominantGrape": "Niellucciu, Sciaccarellu, Vermentinu, IGP Île de Beauté",
          "color": "#2e7d32",
          "accent": "#81c784",
          "fillOpacity": 0.22,
          "labelCenter": [
            9.465,
            42.26
          ],
          "description": "Expansive eastern coastal plain stretching between Solenzara and Bastia on clay, sand, and river gravels; the engine of Corsican wine production and IGP innovation."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.408,
                41.86
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
                9.508,
                42.548
              ],
              [
                9.498,
                42.618
              ],
              [
                9.452,
                42.665
              ],
              [
                9.405,
                42.625
              ],
              [
                9.39,
                42.485
              ],
              [
                9.385,
                42.345
              ],
              [
                9.37,
                42.185
              ],
              [
                9.355,
                42.045
              ],
              [
                9.365,
                41.925
              ],
              [
                9.408,
                41.86
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
        "id": "beaujolais-crus",
        "properties": {
          "id": "beaujolais-crus",
          "subregionId": "beaujolais-crus",
          "name": "Cru Beaujolais",
          "category": "Hercynian Granite & Volcanic Diorite Crus",
          "dominantGrape": "Gamay Noir à Jus Blanc",
          "color": "#722b44",
          "accent": "#d4af37",
          "fillOpacity": 0.24,
          "description": "The 10 legendary Crus of Beaujolais (Saint-Amour, Juliénas, Chénas, Moulin-à-Vent, Fleurie, Chiroubles, Morgon, Régnié, Côte de Brouilly, Brouilly) established upon pink granite (gore), blue volcanic diorite (côrnes vertes), and manganese veins."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.72,
                46.28
              ],
              [
                4.77,
                46.27
              ],
              [
                4.78,
                46.21
              ],
              [
                4.75,
                46.13
              ],
              [
                4.73,
                46.06
              ],
              [
                4.63,
                46.06
              ],
              [
                4.61,
                46.12
              ],
              [
                4.63,
                46.18
              ],
              [
                4.67,
                46.25
              ],
              [
                4.72,
                46.28
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "beaujolais-villages",
        "properties": {
          "id": "beaujolais-villages",
          "subregionId": "beaujolais-villages",
          "name": "Beaujolais-Villages",
          "category": "Granite & Porphyry Slopes (38 Communes)",
          "dominantGrape": "Gamay",
          "color": "#9c27b0",
          "accent": "#ce93d8",
          "fillOpacity": 0.2,
          "description": "38 delimited hillside communes surrounding the crus on steep granitic and porphyry slopes between 200m and 400m elevation."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.62,
                46.24
              ],
              [
                4.68,
                46.22
              ],
              [
                4.64,
                46.14
              ],
              [
                4.66,
                46.05
              ],
              [
                4.74,
                46.04
              ],
              [
                4.76,
                45.98
              ],
              [
                4.72,
                45.92
              ],
              [
                4.6,
                45.93
              ],
              [
                4.55,
                46.05
              ],
              [
                4.56,
                46.16
              ],
              [
                4.62,
                46.24
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "bas-beaujolais",
        "properties": {
          "id": "bas-beaujolais",
          "subregionId": "bas-beaujolais",
          "name": "Bas-Beaujolais (Pierres Dorées)",
          "category": "Golden Limestone & Clay Sedimentary",
          "dominantGrape": "Gamay & Chardonnay",
          "color": "#c2185b",
          "accent": "#f48fb1",
          "fillOpacity": 0.2,
          "description": "Southern Beaujolais characterized by golden ochre Jurassic limestone (Pierres Dorées) and rolling clay hills, producing joyful, fruit-forward Beaujolais and Beaujolais Nouveau."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.6,
                45.98
              ],
              [
                4.74,
                45.98
              ],
              [
                4.77,
                45.9
              ],
              [
                4.73,
                45.8
              ],
              [
                4.65,
                45.78
              ],
              [
                4.56,
                45.82
              ],
              [
                4.54,
                45.9
              ],
              [
                4.6,
                45.98
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
                -69.05,
                -33.22
              ],
              [
                -68.92,
                -33.38
              ],
              [
                -68.85,
                -33.72
              ],
              [
                -68.95,
                -33.95
              ],
              [
                -69.22,
                -34.05
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
                -68.82,
                -33.01
              ],
              [
                -68.74,
                -33.08
              ],
              [
                -68.75,
                -33.18
              ],
              [
                -68.86,
                -33.24
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
                -68.62,
                -32.94
              ],
              [
                -68.48,
                -33.02
              ],
              [
                -68.52,
                -33.18
              ],
              [
                -68.7,
                -33.19
              ],
              [
                -68.82,
                -33.12
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
          "category": "Southern Oasis & Chenin/Cabernet",
          "dominantGrape": "Cabernet Sauvignon & Bonarda",
          "color": "#B03A2E",
          "accent": "#F5B7B1",
          "fillOpacity": 0.24,
          "description": "Southern Mendoza oasis nourished by the Atuel and Diamante rivers, yielding fresh, structured, altitude-cooled reds."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -68.58,
                -34.48
              ],
              [
                -68.22,
                -34.46
              ],
              [
                -68.12,
                -34.62
              ],
              [
                -68.2,
                -34.78
              ],
              [
                -68.52,
                -34.78
              ],
              [
                -68.64,
                -34.65
              ],
              [
                -68.58,
                -34.48
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
          "category": "Pre-Cambrian Granite & Cabernet Benchmark",
          "dominantGrape": "Cabernet Sauvignon & Pinotage",
          "color": "#1B4332",
          "accent": "#D4AF37",
          "fillOpacity": 0.24,
          "description": "Aristocratic granite mountain slopes cooled by False Bay breezes, producing benchmark Cabernet Sauvignon, Pinotage, and old-vine Chenin Blanc.",
          "labelCenter": [
            18.86,
            -33.95
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                18.74,
                -33.82
              ],
              [
                18.94,
                -33.84
              ],
              [
                19.04,
                -33.94
              ],
              [
                18.98,
                -34.07
              ],
              [
                18.82,
                -34.09
              ],
              [
                18.7,
                -33.98
              ],
              [
                18.74,
                -33.82
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
          "category": "Old Bush Vine Revolution & Artisanal Syrah",
          "dominantGrape": "Chenin Blanc & Syrah",
          "color": "#2D6A4F",
          "accent": "#74C69D",
          "fillOpacity": 0.22,
          "description": "Dry-farmed old bush vines rooted in Paardeberg granite and Kasteelberg schist (The Sadie Family, Mullineux).",
          "labelCenter": [
            18.78,
            -33.42
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                18.5,
                -33.2
              ],
              [
                18.85,
                -33.18
              ],
              [
                19.08,
                -33.36
              ],
              [
                19.02,
                -33.62
              ],
              [
                18.72,
                -33.68
              ],
              [
                18.48,
                -33.48
              ],
              [
                18.5,
                -33.2
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
          "category": "Bokkeveld Shale & Benguela Ocean Air",
          "dominantGrape": "Pinot Noir & Chardonnay",
          "color": "#40916C",
          "accent": "#B7E4C7",
          "fillOpacity": 0.25,
          "description": "Narrow coastal valley chilled by Antarctic currents, crafting Burgundian-caliber Pinot Noir and mineral Chardonnay (Hamilton Russell).",
          "labelCenter": [
            19.32,
            -34.38
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                19.14,
                -34.33
              ],
              [
                19.35,
                -34.3
              ],
              [
                19.52,
                -34.36
              ],
              [
                19.48,
                -34.48
              ],
              [
                19.28,
                -34.46
              ],
              [
                19.14,
                -34.4
              ],
              [
                19.14,
                -34.33
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
          "category": "Historical 1685 Cradle & Vin de Constance",
          "dominantGrape": "Muscat de Frontignan & Sauvignon Blanc",
          "color": "#52B788",
          "accent": "#D8F3DC",
          "fillOpacity": 0.22,
          "description": "Table Mountain granite mid-slopes cooled by dual oceans, home to historic Vin de Constance since 1685.",
          "labelCenter": [
            18.42,
            -34.03
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                18.38,
                -33.99
              ],
              [
                18.44,
                -33.98
              ],
              [
                18.47,
                -34.04
              ],
              [
                18.45,
                -34.09
              ],
              [
                18.4,
                -34.08
              ],
              [
                18.37,
                -34.03
              ],
              [
                18.38,
                -33.99
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
          "category": "Huguenot Mountain Amphitheater",
          "dominantGrape": "Cabernet Sauvignon & Sémillon",
          "color": "#74C69D",
          "accent": "#2D6A4F",
          "fillOpacity": 0.2,
          "description": "Towering sandstone peaks cradling ancient 1902 bush-vine Sémillon and concentrated Syrah (Boekenhoutskloof).",
          "labelCenter": [
            19.12,
            -33.93
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                19.02,
                -33.88
              ],
              [
                19.14,
                -33.85
              ],
              [
                19.22,
                -33.92
              ],
              [
                19.18,
                -34.01
              ],
              [
                19.07,
                -33.98
              ],
              [
                19.02,
                -33.88
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
          "category": "Greywacke River Stones & Coastal Sun",
          "dominantGrape": "Sauvignon Blanc & Pinot Noir",
          "color": "#0D3B66",
          "accent": "#0077B6",
          "fillOpacity": 0.22,
          "description": "Quaternary greywacke gravels and extreme diurnal swings creating pungent passionfruit and crystalline flint expressions (Cloudy Bay).",
          "labelCenter": [
            173.9,
            -41.56
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                173.66,
                -41.42
              ],
              [
                173.98,
                -41.38
              ],
              [
                174.18,
                -41.48
              ],
              [
                174.14,
                -41.72
              ],
              [
                173.86,
                -41.82
              ],
              [
                173.58,
                -41.68
              ],
              [
                173.66,
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
          "category": "Alpine Mica Schist & Continental Swings",
          "dominantGrape": "Pinot Noir",
          "color": "#0077B6",
          "accent": "#90E0EF",
          "fillOpacity": 0.25,
          "description": "The world's southernmost commercial vineyards; glacial mica schist terraces yielding wild-thyme-infused, heroic Pinot Noir (Felton Road).",
          "labelCenter": [
            169.24,
            -45.06
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                169.04,
                -44.92
              ],
              [
                169.32,
                -44.86
              ],
              [
                169.5,
                -45.02
              ],
              [
                169.44,
                -45.18
              ],
              [
                169.18,
                -45.24
              ],
              [
                168.96,
                -45.1
              ],
              [
                169.04,
                -44.92
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
          "category": "Stony Alluvial Shingle Heat Sink",
          "dominantGrape": "Syrah & Cabernet Blends",
          "color": "#023E8A",
          "accent": "#48CAE4",
          "fillOpacity": 0.24,
          "description": "800-hectare stony greywacke riverbed gravels crafting aristocratic Syrah and Bordeaux-style icons (Te Mata Coleraine, Craggy Range Le Sol).",
          "labelCenter": [
            176.78,
            -39.62
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                176.62,
                -39.44
              ],
              [
                176.92,
                -39.46
              ],
              [
                177.04,
                -39.64
              ],
              [
                176.88,
                -39.8
              ],
              [
                176.64,
                -39.76
              ],
              [
                176.54,
                -39.58
              ],
              [
                176.62,
                -39.44
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
          "category": "Wind-Swept Alluvial Gravel Terraces",
          "dominantGrape": "Pinot Noir (Abel Clone)",
          "color": "#0096C7",
          "accent": "#ADE8F4",
          "fillOpacity": 0.22,
          "description": "Cool Antarctic winds funneling through Cook Strait onto river terraces, producing savory, earthy, ageworthy Pinot Noir (Ata Rangi).",
          "labelCenter": [
            175.46,
            -41.22
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                175.36,
                -41.14
              ],
              [
                175.54,
                -41.1
              ],
              [
                175.65,
                -41.22
              ],
              [
                175.58,
                -41.36
              ],
              [
                175.4,
                -41.34
              ],
              [
                175.32,
                -41.22
              ],
              [
                175.36,
                -41.14
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
          "description": "Chalky clay and coastal sand dunes hosting pre-phylloxera ungrafted bush vines of heroic, ageworthy Baga (Luis Pato).",
          "labelCenter": [
            -8.52,
            40.38
          ]
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
                -8.48,
                40.55
              ],
              [
                -8.36,
                40.42
              ],
              [
                -8.4,
                40.22
              ],
              [
                -8.58,
                40.2
              ],
              [
                -8.7,
                40.34
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
  }
};

export const WINE_REGION_OUTLINES = {
  "champagne": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "champagne-outline",
        "properties": {
          "id": "champagne-outline",
          "name": "Champagne AOC Delimited Wine Region",
          "frenchName": "Zone Viticole Délimitée de l'AOC Champagne",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 34300,
          "departments": [
            "Marne",
            "Aube",
            "Aisne",
            "Haute-Marne",
            "Seine-et-Marne"
          ],
          "color": "#d4af37",
          "accent": "#800020",
          "description": "Official delimited viticultural boundary of Champagne AOC (Law of 1927), encompassing 319 wine-growing communes across the Montagne de Reims, Vallée de la Marne, Côte des Blancs, Sézanne, Vitryat, and Côte des Bar."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                3.85,
                49.36
              ],
              [
                4.1,
                49.34
              ],
              [
                4.32,
                49.25
              ],
              [
                4.45,
                49.12
              ],
              [
                4.62,
                48.96
              ],
              [
                4.74,
                48.78
              ],
              [
                4.8,
                48.42
              ],
              [
                4.84,
                48.22
              ],
              [
                4.72,
                48.06
              ],
              [
                4.48,
                47.95
              ],
              [
                4.32,
                47.93
              ],
              [
                4.14,
                48.05
              ],
              [
                3.95,
                48.24
              ],
              [
                3.76,
                48.46
              ],
              [
                3.6,
                48.65
              ],
              [
                3.48,
                48.82
              ],
              [
                3.2,
                48.98
              ],
              [
                3.22,
                49.1
              ],
              [
                3.42,
                49.16
              ],
              [
                3.64,
                49.26
              ],
              [
                3.85,
                49.36
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
                3.68,
                47.92
              ],
              [
                3.76,
                47.95
              ],
              [
                3.86,
                47.96
              ],
              [
                3.98,
                47.94
              ],
              [
                4.1,
                47.9
              ],
              [
                4.25,
                47.84
              ],
              [
                4.42,
                47.76
              ],
              [
                4.58,
                47.65
              ],
              [
                4.72,
                47.53
              ],
              [
                4.86,
                47.45
              ],
              [
                4.98,
                47.4
              ],
              [
                5.08,
                47.34
              ],
              [
                5.14,
                47.26
              ],
              [
                5.15,
                47.16
              ],
              [
                5.11,
                47.06
              ],
              [
                5.05,
                46.96
              ],
              [
                4.99,
                46.86
              ],
              [
                4.95,
                46.74
              ],
              [
                4.93,
                46.6
              ],
              [
                4.91,
                46.46
              ],
              [
                4.87,
                46.32
              ],
              [
                4.82,
                46.21
              ],
              [
                4.74,
                46.17
              ],
              [
                4.66,
                46.19
              ],
              [
                4.6,
                46.25
              ],
              [
                4.57,
                46.35
              ],
              [
                4.56,
                46.48
              ],
              [
                4.58,
                46.6
              ],
              [
                4.58,
                46.72
              ],
              [
                4.6,
                46.84
              ],
              [
                4.6,
                46.94
              ],
              [
                4.63,
                47.05
              ],
              [
                4.68,
                47.16
              ],
              [
                4.73,
                47.26
              ],
              [
                4.72,
                47.36
              ],
              [
                4.62,
                47.44
              ],
              [
                4.46,
                47.52
              ],
              [
                4.28,
                47.58
              ],
              [
                4.05,
                47.62
              ],
              [
                3.85,
                47.66
              ],
              [
                3.66,
                47.68
              ],
              [
                3.54,
                47.74
              ],
              [
                3.5,
                47.82
              ],
              [
                3.56,
                47.88
              ],
              [
                3.68,
                47.92
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
                7.58,
                48.68
              ],
              [
                7.54,
                48.42
              ],
              [
                7.52,
                48.18
              ],
              [
                7.44,
                47.92
              ],
              [
                7.32,
                47.76
              ],
              [
                7.08,
                47.78
              ],
              [
                7.1,
                48.02
              ],
              [
                7.18,
                48.26
              ],
              [
                7.28,
                48.52
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
          "id": "bordeaux-outline",
          "name": "Bordeaux AOC Delimited Wine Region",
          "frenchName": "Vignoble de Bordeaux (Gironde)",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 111000,
          "color": "#4A0E17",
          "accent": "#D4AF37",
          "description": "The complete Gironde fine wine territory framing the Gironde Estuary, Garonne, and Dordogne rivers: Médoc, Graves, Sauternes, Entre-Deux-Mers, Saint-Émilion, Pomerol, Blaye and Bourg."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -1.06,
                45.56
              ],
              [
                -0.92,
                45.38
              ],
              [
                -0.48,
                45.28
              ],
              [
                -0.22,
                45.22
              ],
              [
                0.12,
                45.08
              ],
              [
                0.22,
                44.88
              ],
              [
                0.08,
                44.62
              ],
              [
                -0.18,
                44.45
              ],
              [
                -0.45,
                44.42
              ],
              [
                -0.68,
                44.52
              ],
              [
                -0.85,
                44.75
              ],
              [
                -1.02,
                45.02
              ],
              [
                -1.16,
                45.32
              ],
              [
                -1.06,
                45.56
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
          "id": "rhone-outline",
          "name": "Rhône Valley (Vallée du Rhône AOC)",
          "frenchName": "Vignoble de la Vallée du Rhône",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 71000,
          "color": "#722F37",
          "accent": "#E65100",
          "description": "The classic north-to-south Rhône river corridor linking the steep granitic amphitheaters of Northern Rhône (Côte-Rôtie, Hermitage, Cornas) with the sprawling sun-drenched galets roulés terraces of Southern Rhône (Châteauneuf-du-Pape, Gigondas)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.78,
                45.58
              ],
              [
                4.95,
                45.35
              ],
              [
                4.98,
                45.08
              ],
              [
                5.08,
                44.72
              ],
              [
                5.2,
                44.42
              ],
              [
                5.18,
                44.12
              ],
              [
                5.06,
                43.85
              ],
              [
                4.75,
                43.82
              ],
              [
                4.58,
                44.02
              ],
              [
                4.62,
                44.35
              ],
              [
                4.68,
                44.72
              ],
              [
                4.72,
                45.05
              ],
              [
                4.68,
                45.35
              ],
              [
                4.78,
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
                -1.85,
                47.18
              ],
              [
                -1.35,
                47.38
              ],
              [
                -0.85,
                47.45
              ],
              [
                -0.22,
                47.48
              ],
              [
                0.45,
                47.46
              ],
              [
                1.12,
                47.52
              ],
              [
                1.85,
                47.62
              ],
              [
                2.65,
                47.52
              ],
              [
                3.12,
                47.35
              ],
              [
                3.08,
                47.18
              ],
              [
                2.48,
                47.05
              ],
              [
                1.65,
                47.12
              ],
              [
                0.95,
                47.08
              ],
              [
                0.25,
                47.02
              ],
              [
                -0.45,
                47.05
              ],
              [
                -1.15,
                47.02
              ],
              [
                -1.75,
                47.06
              ],
              [
                -1.85,
                47.18
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
          "id": "piedmont-outline",
          "name": "Piedmont (Piemonte DOC/DOCG Wine Region)",
          "italianName": "Regione Vitivinicola del Piemonte",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 44000,
          "color": "#5C102A",
          "accent": "#D4AF37",
          "description": "The fog-kissed Langhe, Roero, and Monferrato hills sheltered by the western Alps, home to the noble Nebbiolo kingdoms of Barolo and Barbaresco."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                7.82,
                45.05
              ],
              [
                8.22,
                45.18
              ],
              [
                8.65,
                45.08
              ],
              [
                8.88,
                44.78
              ],
              [
                8.82,
                44.52
              ],
              [
                8.55,
                44.4
              ],
              [
                8.18,
                44.42
              ],
              [
                7.85,
                44.48
              ],
              [
                7.78,
                44.75
              ],
              [
                7.82,
                45.05
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
          "id": "tuscany-outline",
          "name": "Tuscany (Toscana IGT/DOCG Wine Region)",
          "italianName": "Regione Vitivinicola della Toscana",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 58000,
          "color": "#8B0000",
          "accent": "#D4AF37",
          "description": "The sun-bathed cypress hills and coastal plains of central Italy, from the historic galestro schist of Chianti Classico to Montalcino, Montepulciano, and coastal Bolgheri."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                11.15,
                43.85
              ],
              [
                11.55,
                43.78
              ],
              [
                11.85,
                43.52
              ],
              [
                11.88,
                43.15
              ],
              [
                11.72,
                42.82
              ],
              [
                11.45,
                42.48
              ],
              [
                10.98,
                42.42
              ],
              [
                10.52,
                42.65
              ],
              [
                10.45,
                43.12
              ],
              [
                10.55,
                43.48
              ],
              [
                10.82,
                43.75
              ],
              [
                11.15,
                43.85
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
                -123.53,
                38.76
              ],
              [
                -123.47,
                38.71
              ],
              [
                -123.41,
                38.68
              ],
              [
                -123.38,
                38.64
              ],
              [
                -123.35,
                38.6
              ],
              [
                -123.32,
                38.57
              ],
              [
                -123.29,
                38.54
              ],
              [
                -123.26,
                38.52
              ],
              [
                -123.23,
                38.49
              ],
              [
                -123.21,
                38.48
              ],
              [
                -123.16,
                38.46
              ],
              [
                -123.13,
                38.45
              ],
              [
                -123.11,
                38.44
              ],
              [
                -123.09,
                38.41
              ],
              [
                -123.07,
                38.36
              ],
              [
                -123.05,
                38.31
              ],
              [
                -123.03,
                38.29
              ],
              [
                -122.99,
                38.25
              ],
              [
                -122.95,
                38.22
              ],
              [
                -122.9,
                38.18
              ],
              [
                -122.82,
                38.15
              ],
              [
                -122.72,
                38.13
              ],
              [
                -122.6,
                38.12
              ],
              [
                -122.5,
                38.13
              ],
              [
                -122.4,
                38.14
              ],
              [
                -122.3,
                38.15
              ],
              [
                -122.25,
                38.18
              ],
              [
                -122.21,
                38.22
              ],
              [
                -122.18,
                38.28
              ],
              [
                -122.19,
                38.35
              ],
              [
                -122.21,
                38.42
              ],
              [
                -122.24,
                38.48
              ],
              [
                -122.26,
                38.54
              ],
              [
                -122.3,
                38.6
              ],
              [
                -122.36,
                38.65
              ],
              [
                -122.42,
                38.7
              ],
              [
                -122.48,
                38.75
              ],
              [
                -122.6,
                38.8
              ],
              [
                -122.68,
                38.83
              ],
              [
                -122.78,
                38.85
              ],
              [
                -122.86,
                38.86
              ],
              [
                -122.95,
                38.88
              ],
              [
                -123.05,
                38.86
              ],
              [
                -123.14,
                38.82
              ],
              [
                -123.22,
                38.78
              ],
              [
                -123.32,
                38.74
              ],
              [
                -123.42,
                38.73
              ],
              [
                -123.5,
                38.75
              ],
              [
                -123.53,
                38.76
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
          "areaHa": 10400,
          "color": "#33691E",
          "accent": "#D4AF37",
          "description": "The complete Willamette Valley AVA boundary stretching 150 miles between the Oregon Coast Range and Cascade Mountains, encompassing all 11 nested AVAs (Dundee Hills, Eola-Amity, Ribbon Ridge)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.75,
                45.62
              ],
              [
                -122.65,
                45.32
              ],
              [
                -122.72,
                44.92
              ],
              [
                -122.85,
                44.45
              ],
              [
                -123.02,
                44.02
              ],
              [
                -123.28,
                43.98
              ],
              [
                -123.42,
                44.45
              ],
              [
                -123.48,
                44.95
              ],
              [
                -123.38,
                45.38
              ],
              [
                -123.12,
                45.65
              ],
              [
                -122.75,
                45.62
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
        "id": "mosel-outline",
        "properties": {
          "id": "mosel-outline",
          "name": "Mosel-Saar-Ruwer & Rheingau Quality Wine Regions",
          "germanName": "Bestimmte Anbaugebiete Mosel & Rheingau",
          "category": "Official Regional Appellation Boundary",
          "areaHa": 12000,
          "color": "#0D47A1",
          "accent": "#FFD54F",
          "description": "Delimited boundaries of the dramatic Devonian slate meanders of the Mosel, Saar, and Ruwer river valleys alongside the historic south-facing quartz hillsides of the Rheingau."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  6.45,
                  49.65
                ],
                [
                  6.75,
                  49.78
                ],
                [
                  7.15,
                  50.12
                ],
                [
                  7.35,
                  50.05
                ],
                [
                  7.25,
                  49.8
                ],
                [
                  6.8,
                  49.72
                ],
                [
                  6.4,
                  49.5
                ],
                [
                  6.45,
                  49.65
                ]
              ]
            ],
            [
              [
                [
                  7.6,
                  49.95
                ],
                [
                  8.05,
                  50.1
                ],
                [
                  8.35,
                  50.05
                ],
                [
                  8.35,
                  49.25
                ],
                [
                  8.05,
                  49.2
                ],
                [
                  7.65,
                  49.5
                ],
                [
                  7.6,
                  49.95
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
        "id": "chile-outline",
        "properties": {
          "id": "chile-outline",
          "name": "Chile Central Valley Fine Wine Region",
          "category": "Official Regional DO Boundary",
          "areaHa": 32000,
          "color": "#B71C1C",
          "accent": "#00ACC1",
          "description": "The viticultural heart of Chile framed between the Coastal Range and the High Andes: Maipo Valley (Puente Alto, Pirque), Cachapoal (Peumo), and Colchagua (Apalta)."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  -70.35,
                  -33.48
                ],
                [
                  -70.38,
                  -33.95
                ],
                [
                  -70.92,
                  -34.55
                ],
                [
                  -71.65,
                  -34.85
                ],
                [
                  -71.7,
                  -34.35
                ],
                [
                  -71.2,
                  -33.95
                ],
                [
                  -70.8,
                  -33.45
                ],
                [
                  -70.35,
                  -33.48
                ]
              ]
            ],
            [
              [
                [
                  -71.68,
                  -33.1
                ],
                [
                  -71.2,
                  -33.15
                ],
                [
                  -71.22,
                  -33.72
                ],
                [
                  -71.72,
                  -33.7
                ],
                [
                  -71.68,
                  -33.1
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
          "id": "australia-outline",
          "name": "Barossa Zone & Margaret River Fine Wine Regions",
          "category": "Official Regional GI Boundary",
          "areaHa": 18000,
          "color": "#BF360C",
          "accent": "#D4AF37",
          "description": "Australia's classical fine wine pillars: the pre-phylloxera ironstone soils of the Barossa Zone (Barossa & Eden Valleys) and the maritime gravel loam of Margaret River."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  138.72,
                  -34.3
                ],
                [
                  139.3,
                  -34.32
                ],
                [
                  139.35,
                  -34.82
                ],
                [
                  138.7,
                  -34.78
                ],
                [
                  138.72,
                  -34.3
                ]
              ]
            ],
            [
              [
                [
                  114.92,
                  -33.58
                ],
                [
                  115.25,
                  -33.62
                ],
                [
                  115.28,
                  -34.38
                ],
                [
                  114.95,
                  -34.4
                ],
                [
                  114.92,
                  -33.58
                ]
              ]
            ],
            [
              [
                [
                  151.05,
                  -32.58
                ],
                [
                  151.55,
                  -32.6
                ],
                [
                  151.55,
                  -33.05
                ],
                [
                  151.05,
                  -33.02
                ],
                [
                  151.05,
                  -32.58
                ]
              ]
            ],
            [
              [
                [
                  140.7,
                  -37.15
                ],
                [
                  140.95,
                  -37.15
                ],
                [
                  140.98,
                  -37.5
                ],
                [
                  140.72,
                  -37.5
                ],
                [
                  140.7,
                  -37.15
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
          "description": "Italy's distinctive regional enclaves: the appassimento hills of Valpolicella/Amarone and Soave in Veneto alongside the active volcanic ash slopes of Mount Etna in Sicily."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  10.75,
                  45.62
                ],
                [
                  11.35,
                  45.58
                ],
                [
                  11.55,
                  45.42
                ],
                [
                  11.25,
                  45.32
                ],
                [
                  10.82,
                  45.38
                ],
                [
                  10.75,
                  45.62
                ]
              ]
            ],
            [
              [
                [
                  14.92,
                  37.85
                ],
                [
                  15.18,
                  37.88
                ],
                [
                  15.22,
                  37.65
                ],
                [
                  14.98,
                  37.62
                ],
                [
                  14.92,
                  37.85
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
        "id": "japan-outline",
        "properties": {
          "id": "japan-outline",
          "name": "GI Yamanashi & GI Nagano Wine Regions",
          "japaneseName": "山梨・長野 地理的表示(GI)ワイン産地",
          "category": "Official Regional GI Boundary",
          "areaHa": 4500,
          "color": "#3F51B5",
          "accent": "#E91E63",
          "description": "Japan's fine wine epicenters: the historic Katsunuma pergola Koshu basin of GI Yamanashi beneath Mount Fuji and the high alpine valleys of GI Nagano (Shinshu)."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  138.45,
                  35.75
                ],
                [
                  138.78,
                  35.72
                ],
                [
                  138.82,
                  35.58
                ],
                [
                  138.52,
                  35.56
                ],
                [
                  138.45,
                  35.75
                ]
              ]
            ],
            [
              [
                [
                  137.88,
                  36.65
                ],
                [
                  138.25,
                  36.62
                ],
                [
                  138.22,
                  36.12
                ],
                [
                  137.92,
                  36.15
                ],
                [
                  137.88,
                  36.65
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
                4.78,
                46.28
              ],
              [
                4.8,
                46.12
              ],
              [
                4.77,
                45.92
              ],
              [
                4.72,
                45.78
              ],
              [
                4.58,
                45.8
              ],
              [
                4.52,
                46
              ],
              [
                4.54,
                46.18
              ],
              [
                4.6,
                46.3
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
        "id": "argentina-outline",
        "properties": {
          "id": "argentina-outline",
          "name": "Mendoza & Uco Valley Wine Region",
          "spanishName": "Región Vitivinícola de Mendoza y Valle de Uco",
          "category": "Official Delimited IG Regional Boundary",
          "areaHa": 155000,
          "color": "#4A0E2E",
          "accent": "#D4AF37",
          "description": "Andean high-altitude fine wine oasis spanning Luján de Cuyo, Maipú, and the extreme calcareous alluvial terroirs of Valle de Uco (Gualtallary, Altamira)."
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
                -68.75,
                -32.8
              ],
              [
                -68.35,
                -33.1
              ],
              [
                -68.25,
                -33.5
              ],
              [
                -68.05,
                -34.4
              ],
              [
                -68.1,
                -34.85
              ],
              [
                -68.65,
                -34.88
              ],
              [
                -68.95,
                -34.5
              ],
              [
                -69.15,
                -34.15
              ],
              [
                -69.42,
                -33.8
              ],
              [
                -69.5,
                -33.35
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
          "id": "south-africa-outline",
          "name": "Western Cape Wine of Origin (WO) Region",
          "afrikaansName": "Wes-Kaap Wyn van Oorsprong Streek",
          "category": "Official Wine of Origin Regional Boundary",
          "areaHa": 92000,
          "color": "#1B4332",
          "accent": "#D4AF37",
          "description": "Premier Western Cape fine wine districts: historic Stellenbosch granites, the old-bush-vine Swartland revolution, cool maritime Hemel-en-Aarde, and 1685 Constantia."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  18.15,
                  -33.1
                ],
                [
                  18.5,
                  -32.95
                ],
                [
                  19.05,
                  -33.05
                ],
                [
                  19.25,
                  -33.3
                ],
                [
                  19.32,
                  -33.75
                ],
                [
                  19.28,
                  -34.05
                ],
                [
                  19.05,
                  -34.18
                ],
                [
                  18.75,
                  -34.18
                ],
                [
                  18.48,
                  -34.35
                ],
                [
                  18.32,
                  -34.15
                ],
                [
                  18.35,
                  -33.85
                ],
                [
                  18.15,
                  -33.5
                ],
                [
                  18.15,
                  -33.1
                ]
              ]
            ],
            [
              [
                [
                  19.08,
                  -34.25
                ],
                [
                  19.45,
                  -34.22
                ],
                [
                  19.65,
                  -34.35
                ],
                [
                  19.55,
                  -34.58
                ],
                [
                  19.25,
                  -34.55
                ],
                [
                  19.05,
                  -34.4
                ],
                [
                  19.08,
                  -34.25
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
          "id": "new-zealand-outline",
          "name": "New Zealand Fine Wine Geographical Indications",
          "maoriName": "Wāhanga Waina o Aotearoa",
          "category": "Official Delimited GI National Boundary",
          "areaHa": 42000,
          "color": "#0077B6",
          "accent": "#90E0EF",
          "description": "New Zealand's premier fine wine GIs: Marlborough greywacke gravels, alpine mica schist terraces of Central Otago, warm Gimblett Gravels in Hawke's Bay, and Martinborough terraces."
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [
                  173.55,
                  -41.32
                ],
                [
                  174.05,
                  -41.25
                ],
                [
                  174.25,
                  -41.45
                ],
                [
                  174.2,
                  -41.75
                ],
                [
                  173.9,
                  -41.88
                ],
                [
                  173.5,
                  -41.75
                ],
                [
                  173.55,
                  -41.32
                ]
              ]
            ],
            [
              [
                [
                  168.9,
                  -44.82
                ],
                [
                  169.35,
                  -44.75
                ],
                [
                  169.58,
                  -44.95
                ],
                [
                  169.52,
                  -45.28
                ],
                [
                  169.15,
                  -45.32
                ],
                [
                  168.85,
                  -45.15
                ],
                [
                  168.9,
                  -44.82
                ]
              ]
            ],
            [
              [
                [
                  176.45,
                  -39.35
                ],
                [
                  177.1,
                  -39.4
                ],
                [
                  177.12,
                  -39.85
                ],
                [
                  176.6,
                  -40.2
                ],
                [
                  175.7,
                  -41.42
                ],
                [
                  175.25,
                  -41.35
                ],
                [
                  175.25,
                  -40.85
                ],
                [
                  176.45,
                  -39.35
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

export function getRegionOutline(regionId) {
  return WINE_REGION_OUTLINES[regionId] || null;
}
