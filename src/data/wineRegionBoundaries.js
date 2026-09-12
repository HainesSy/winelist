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
      },      {
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
                      "labelCenter": [
                              3.73,
                              48.72
                      ],
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
                                              3.74,
                                              48.8
                                      ],
                                      [
                                              3.8,
                                              48.78
                                      ],
                                      [
                                              3.83,
                                              48.73
                                      ],
                                      [
                                              3.82,
                                              48.68
                                      ],
                                      [
                                              3.77,
                                              48.64
                                      ],
                                      [
                                              3.71,
                                              48.63
                                      ],
                                      [
                                              3.66,
                                              48.67
                                      ],
                                      [
                                              3.64,
                                              48.72
                                      ],
                                      [
                                              3.67,
                                              48.78
                                      ]
                              ]
                      ]
              }
      },      {
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
                      "labelCenter": [
                              3.77,
                              48.86
                      ],
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
                                              3.76,
                                              48.92
                                      ],
                                      [
                                              3.83,
                                              48.91
                                      ],
                                      [
                                              3.87,
                                              48.87
                                      ],
                                      [
                                              3.86,
                                              48.82
                                      ],
                                      [
                                              3.8,
                                              48.8
                                      ],
                                      [
                                              3.73,
                                              48.8
                                      ],
                                      [
                                              3.67,
                                              48.83
                                      ],
                                      [
                                              3.66,
                                              48.86
                                      ],
                                      [
                                              3.68,
                                              48.89
                                      ]
                              ]
                      ]
              }
      },      {
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
                      "labelCenter": [
                              3.93,
                              49
                      ],
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
                                              3.94,
                                              49.04
                                      ],
                                      [
                                              3.98,
                                              49.03
                                      ],
                                      [
                                              3.99,
                                              48.99
                                      ],
                                      [
                                              3.97,
                                              48.96
                                      ],
                                      [
                                              3.92,
                                              48.96
                                      ],
                                      [
                                              3.87,
                                              48.98
                                      ],
                                      [
                                              3.86,
                                              49.01
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
                3.775,
                47.875
              ],
              [
                3.825,
                47.865
              ],
              [
                3.835,
                47.825
              ],
              [
                3.865,
                47.795
              ],
              [
                3.895,
                47.805
              ],
              [
                3.855,
                47.745
              ],
              [
                3.785,
                47.735
              ],
              [
                3.715,
                47.745
              ],
              [
                3.655,
                47.715
              ],
              [
                3.695,
                47.765
              ],
              [
                3.755,
                47.815
              ],
              [
                3.765,
                47.845
              ],
              [
                3.775,
                47.875
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
            4.945,
            47.165
          ],
          "description": "The golden slope of 24 red Grand Crus (Romanée-Conti, Chambertin, Musigny, Clos de Vougeot) etched into eastern limestone hillsides."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.985,
                47.275
              ],
              [
                4.975,
                47.245
              ],
              [
                4.995,
                47.215
              ],
              [
                4.985,
                47.195
              ],
              [
                4.975,
                47.185
              ],
              [
                4.98,
                47.175
              ],
              [
                4.975,
                47.165
              ],
              [
                4.965,
                47.155
              ],
              [
                4.96,
                47.135
              ],
              [
                4.935,
                47.105
              ],
              [
                4.92,
                47.085
              ],
              [
                4.895,
                47.105
              ],
              [
                4.905,
                47.145
              ],
              [
                4.915,
                47.185
              ],
              [
                4.935,
                47.205
              ],
              [
                4.945,
                47.225
              ],
              [
                4.965,
                47.265
              ],
              [
                4.985,
                47.275
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
            4.795,
            46.995
          ],
          "description": "Home of Montrachet, Corton-Charlemagne, Meursault, Puligny, Volnay, and Pommard spanning curving limestone slopes."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                4.895,
                47.075
              ],
              [
                4.885,
                47.05
              ],
              [
                4.855,
                47.025
              ],
              [
                4.835,
                47.005
              ],
              [
                4.815,
                46.985
              ],
              [
                4.785,
                46.965
              ],
              [
                4.765,
                46.945
              ],
              [
                4.745,
                46.935
              ],
              [
                4.705,
                46.915
              ],
              [
                4.665,
                46.905
              ],
              [
                4.685,
                46.935
              ],
              [
                4.715,
                46.955
              ],
              [
                4.735,
                46.975
              ],
              [
                4.755,
                46.995
              ],
              [
                4.775,
                47.015
              ],
              [
                4.795,
                47.045
              ],
              [
                4.825,
                47.065
              ],
              [
                4.865,
                47.075
              ],
              [
                4.895,
                47.075
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
                4.735,
                46.895
              ],
              [
                4.755,
                46.875
              ],
              [
                4.765,
                46.835
              ],
              [
                4.725,
                46.825
              ],
              [
                4.705,
                46.815
              ],
              [
                4.755,
                46.785
              ],
              [
                4.695,
                46.775
              ],
              [
                4.685,
                46.705
              ],
              [
                4.665,
                46.685
              ],
              [
                4.655,
                46.745
              ],
              [
                4.685,
                46.825
              ],
              [
                4.705,
                46.885
              ],
              [
                4.735,
                46.895
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
                4.825,
                46.545
              ],
              [
                4.815,
                46.485
              ],
              [
                4.845,
                46.435
              ],
              [
                4.835,
                46.375
              ],
              [
                4.795,
                46.325
              ],
              [
                4.765,
                46.285
              ],
              [
                4.745,
                46.245
              ],
              [
                4.735,
                46.225
              ],
              [
                4.685,
                46.265
              ],
              [
                4.695,
                46.295
              ],
              [
                4.725,
                46.315
              ],
              [
                4.705,
                46.345
              ],
              [
                4.705,
                46.385
              ],
              [
                4.745,
                46.445
              ],
              [
                4.805,
                46.515
              ],
              [
                4.825,
                46.545
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
                                "labelCenter": [
                                        -1.03,
                                        45.44
                                ],
                                "description": "Northern coastal sector extending along the Gironde estuary with maritime gravel terraces."
                        },
                        "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                        [
                                                [
                                                        -1.065,
                                                        45.571
                                                ],
                                                [
                                                        -1.047,
                                                        45.555
                                                ],
                                                [
                                                        -1.02,
                                                        45.53
                                                ],
                                                [
                                                        -1.003,
                                                        45.49
                                                ],
                                                [
                                                        -0.98,
                                                        45.45
                                                ],
                                                [
                                                        -0.96,
                                                        45.41
                                                ],
                                                [
                                                        -0.94,
                                                        45.368
                                                ],
                                                [
                                                        -0.94,
                                                        45.34
                                                ],
                                                [
                                                        -1,
                                                        45.32
                                                ],
                                                [
                                                        -1.06,
                                                        45.34
                                                ],
                                                [
                                                        -1.1,
                                                        45.38
                                                ],
                                                [
                                                        -1.12,
                                                        45.42
                                                ],
                                                [
                                                        -1.115,
                                                        45.47
                                                ],
                                                [
                                                        -1.095,
                                                        45.51
                                                ],
                                                [
                                                        -1.08,
                                                        45.545
                                                ],
                                                [
                                                        -1.065,
                                                        45.571
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
                                "labelCenter": [
                                        -0.78,
                                        45.12
                                ],
                                "description": "Deep Pyrenean gravel mounds home to Pauillac, Margaux, Saint-Julien, Saint-Estèphe, and First Growths."
                        },
                        "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                        [
                                                [
                                                        -0.94,
                                                        45.34
                                                ],
                                                [
                                                        -0.895,
                                                        45.31
                                                ],
                                                [
                                                        -0.84,
                                                        45.285
                                                ],
                                                [
                                                        -0.77,
                                                        45.26
                                                ],
                                                [
                                                        -0.755,
                                                        45.22
                                                ],
                                                [
                                                        -0.75,
                                                        45.2
                                                ],
                                                [
                                                        -0.74,
                                                        45.16
                                                ],
                                                [
                                                        -0.72,
                                                        45.12
                                                ],
                                                [
                                                        -0.695,
                                                        45.08
                                                ],
                                                [
                                                        -0.665,
                                                        45.04
                                                ],
                                                [
                                                        -0.64,
                                                        45.01
                                                ],
                                                [
                                                        -0.625,
                                                        44.99
                                                ],
                                                [
                                                        -0.595,
                                                        44.94
                                                ],
                                                [
                                                        -0.585,
                                                        44.91
                                                ],
                                                [
                                                        -0.65,
                                                        44.9
                                                ],
                                                [
                                                        -0.72,
                                                        44.92
                                                ],
                                                [
                                                        -0.78,
                                                        44.95
                                                ],
                                                [
                                                        -0.83,
                                                        44.99
                                                ],
                                                [
                                                        -0.87,
                                                        45.04
                                                ],
                                                [
                                                        -0.9,
                                                        45.09
                                                ],
                                                [
                                                        -0.92,
                                                        45.15
                                                ],
                                                [
                                                        -0.94,
                                                        45.2
                                                ],
                                                [
                                                        -0.96,
                                                        45.26
                                                ],
                                                [
                                                        -0.96,
                                                        45.31
                                                ],
                                                [
                                                        -0.94,
                                                        45.34
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
                                "category": "Historic Cradle & River Terraces",
                                "dominantGrape": "Cabernet Sauvignon, Merlot & Sémillon",
                                "color": "#7c223c",
                                "accent": "#d4af37",
                                "fillOpacity": 0.22,
                                "labelCenter": [
                                        -0.5,
                                        44.7
                                ],
                                "description": "Historic pebble-rich gravel soils along the left bank of the Garonne River south of Bordeaux."
                        },
                        "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                        [
                                                [
                                                        -0.585,
                                                        44.91
                                                ],
                                                [
                                                        -0.56,
                                                        44.88
                                                ],
                                                [
                                                        -0.54,
                                                        44.84
                                                ],
                                                [
                                                        -0.51,
                                                        44.78
                                                ],
                                                [
                                                        -0.475,
                                                        44.72
                                                ],
                                                [
                                                        -0.435,
                                                        44.66
                                                ],
                                                [
                                                        -0.38,
                                                        44.61
                                                ],
                                                [
                                                        -0.35,
                                                        44.57
                                                ],
                                                [
                                                        -0.4,
                                                        44.54
                                                ],
                                                [
                                                        -0.48,
                                                        44.56
                                                ],
                                                [
                                                        -0.55,
                                                        44.6
                                                ],
                                                [
                                                        -0.62,
                                                        44.66
                                                ],
                                                [
                                                        -0.66,
                                                        44.74
                                                ],
                                                [
                                                        -0.67,
                                                        44.8
                                                ],
                                                [
                                                        -0.65,
                                                        44.87
                                                ],
                                                [
                                                        -0.585,
                                                        44.91
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
                                "category": "Elite Pyrenean Gravel Plateau",
                                "dominantGrape": "Cabernet Sauvignon & Sauvignon Blanc",
                                "color": "#60122e",
                                "accent": "#d4af37",
                                "fillOpacity": 0.26,
                                "labelCenter": [
                                        -0.6,
                                        44.81
                                ],
                                "description": "Northern elite Graves sector right beside Bordeaux city, home to Château Haut-Brion and Cru Classé estates."
                        },
                        "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                        [
                                                [
                                                        -0.585,
                                                        44.91
                                                ],
                                                [
                                                        -0.56,
                                                        44.88
                                                ],
                                                [
                                                        -0.54,
                                                        44.84
                                                ],
                                                [
                                                        -0.51,
                                                        44.79
                                                ],
                                                [
                                                        -0.515,
                                                        44.76
                                                ],
                                                [
                                                        -0.56,
                                                        44.74
                                                ],
                                                [
                                                        -0.63,
                                                        44.73
                                                ],
                                                [
                                                        -0.67,
                                                        44.76
                                                ],
                                                [
                                                        -0.68,
                                                        44.81
                                                ],
                                                [
                                                        -0.67,
                                                        44.85
                                                ],
                                                [
                                                        -0.65,
                                                        44.88
                                                ],
                                                [
                                                        -0.585,
                                                        44.91
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
                                "category": "Botrytis Noble Rot Amphitheater",
                                "dominantGrape": "Sémillon & Sauvignon Blanc",
                                "color": "#c89d2c",
                                "accent": "#ffd700",
                                "fillOpacity": 0.28,
                                "labelCenter": [
                                        -0.34,
                                        44.54
                                ],
                                "description": "Morning mist microclimate at the confluence of the cold Ciron and warmer Garonne creating legendary botrytized golden nectars."
                        },
                        "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                        [
                                                [
                                                        -0.35,
                                                        44.59
                                                ],
                                                [
                                                        -0.32,
                                                        44.58
                                                ],
                                                [
                                                        -0.29,
                                                        44.565
                                                ],
                                                [
                                                        -0.275,
                                                        44.545
                                                ],
                                                [
                                                        -0.29,
                                                        44.52
                                                ],
                                                [
                                                        -0.32,
                                                        44.5
                                                ],
                                                [
                                                        -0.36,
                                                        44.49
                                                ],
                                                [
                                                        -0.4,
                                                        44.51
                                                ],
                                                [
                                                        -0.41,
                                                        44.545
                                                ],
                                                [
                                                        -0.385,
                                                        44.57
                                                ],
                                                [
                                                        -0.35,
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
                                "category": "Asteriated Limestone Plateau & Clay Slopes",
                                "dominantGrape": "Merlot & Cabernet Franc",
                                "color": "#5c1328",
                                "accent": "#d4af37",
                                "fillOpacity": 0.28,
                                "labelCenter": [
                                        -0.145,
                                        44.91
                                ],
                                "description": "UNESCO World Heritage limestone amphitheater and clay-limestone slopes renowned for Premier Grand Cru Classé estates."
                        },
                        "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                        [
                                                [
                                                        -0.19,
                                                        44.95
                                                ],
                                                [
                                                        -0.14,
                                                        44.96
                                                ],
                                                [
                                                        -0.09,
                                                        44.95
                                                ],
                                                [
                                                        -0.06,
                                                        44.92
                                                ],
                                                [
                                                        -0.08,
                                                        44.885
                                                ],
                                                [
                                                        -0.12,
                                                        44.87
                                                ],
                                                [
                                                        -0.165,
                                                        44.87
                                                ],
                                                [
                                                        -0.195,
                                                        44.88
                                                ],
                                                [
                                                        -0.22,
                                                        44.9
                                                ],
                                                [
                                                        -0.21,
                                                        44.93
                                                ],
                                                [
                                                        -0.19,
                                                        44.95
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
                                "category": "Blue Clay 'Boutonnière' & Caillebotte Gravel",
                                "dominantGrape": "Merlot",
                                "color": "#4a0a1f",
                                "accent": "#d4af37",
                                "fillOpacity": 0.3,
                                "labelCenter": [
                                        -0.21,
                                        44.938
                                ],
                                "description": "Legendary high plateau with unique smectite blue clay (*crasse de fer*) creating opulent, velvety Pomerols (Pétrus, Le Pin)."
                        },
                        "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                        [
                                                [
                                                        -0.23,
                                                        44.96
                                                ],
                                                [
                                                        -0.195,
                                                        44.965
                                                ],
                                                [
                                                        -0.175,
                                                        44.95
                                                ],
                                                [
                                                        -0.17,
                                                        44.93
                                                ],
                                                [
                                                        -0.19,
                                                        44.915
                                                ],
                                                [
                                                        -0.22,
                                                        44.91
                                                ],
                                                [
                                                        -0.245,
                                                        44.92
                                                ],
                                                [
                                                        -0.25,
                                                        44.94
                                                ],
                                                [
                                                        -0.23,
                                                        44.96
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
                                "category": "High Molasse Hills & Isle Confluence",
                                "dominantGrape": "Merlot & Cabernet Franc",
                                "color": "#6e1d35",
                                "accent": "#d4af37",
                                "fillOpacity": 0.22,
                                "labelCenter": [
                                        -0.285,
                                        44.938
                                ],
                                "description": "Steep dramatic hillsides of Fronsac molasse and asteriated limestone rising above the Dordogne River."
                        },
                        "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                        [
                                                [
                                                        -0.31,
                                                        44.965
                                                ],
                                                [
                                                        -0.265,
                                                        44.97
                                                ],
                                                [
                                                        -0.235,
                                                        44.955
                                                ],
                                                [
                                                        -0.235,
                                                        44.93
                                                ],
                                                [
                                                        -0.255,
                                                        44.912
                                                ],
                                                [
                                                        -0.29,
                                                        44.905
                                                ],
                                                [
                                                        -0.325,
                                                        44.915
                                                ],
                                                [
                                                        -0.34,
                                                        44.935
                                                ],
                                                [
                                                        -0.33,
                                                        44.955
                                                ],
                                                [
                                                        -0.31,
                                                        44.965
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
                                "category": "Interfluvial Rolling Limestone & Loam Plateau",
                                "dominantGrape": "Sauvignon Blanc, Sémillon & Merlot",
                                "color": "#8f4426",
                                "accent": "#e6a15c",
                                "fillOpacity": 0.2,
                                "labelCenter": [
                                        -0.15,
                                        44.74
                                ],
                                "description": "Vast undulating plateau cradled between the tidal Garonne and Dordogne rivers renowned for crisp whites and approachable reds."
                        },
                        "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                        [
                                                [
                                                        -0.49,
                                                        44.86
                                                ],
                                                [
                                                        -0.41,
                                                        44.87
                                                ],
                                                [
                                                        -0.31,
                                                        44.87
                                                ],
                                                [
                                                        -0.18,
                                                        44.86
                                                ],
                                                [
                                                        -0.05,
                                                        44.84
                                                ],
                                                [
                                                        0.05,
                                                        44.81
                                                ],
                                                [
                                                        0.08,
                                                        44.75
                                                ],
                                                [
                                                        0.04,
                                                        44.68
                                                ],
                                                [
                                                        -0.035,
                                                        44.61
                                                ],
                                                [
                                                        -0.13,
                                                        44.58
                                                ],
                                                [
                                                        -0.25,
                                                        44.585
                                                ],
                                                [
                                                        -0.35,
                                                        44.6
                                                ],
                                                [
                                                        -0.43,
                                                        44.66
                                                ],
                                                [
                                                        -0.48,
                                                        44.74
                                                ],
                                                [
                                                        -0.52,
                                                        44.8
                                                ],
                                                [
                                                        -0.49,
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
                                "category": "Sun-Drenched Limestone Slopes & Estuary Cliffs",
                                "dominantGrape": "Merlot & Cabernet Franc",
                                "color": "#541022",
                                "accent": "#d4af37",
                                "fillOpacity": 0.22,
                                "labelCenter": [
                                        -0.54,
                                        45.16
                                ],
                                "description": "Sunny south-facing hillside slopes and limestone bluffs bordering the Right Bank of the Gironde estuary and Dordogne valley."
                        },
                        "geometry": {
                                "type": "Polygon",
                                "coordinates": [
                                        [
                                                [
                                                        -0.58,
                                                        45.28
                                                ],
                                                [
                                                        -0.54,
                                                        45.29
                                                ],
                                                [
                                                        -0.49,
                                                        45.27
                                                ],
                                                [
                                                        -0.46,
                                                        45.23
                                                ],
                                                [
                                                        -0.445,
                                                        45.18
                                                ],
                                                [
                                                        -0.46,
                                                        45.13
                                                ],
                                                [
                                                        -0.48,
                                                        45.085
                                                ],
                                                [
                                                        -0.505,
                                                        45.05
                                                ],
                                                [
                                                        -0.54,
                                                        45.04
                                                ],
                                                [
                                                        -0.58,
                                                        45.05
                                                ],
                                                [
                                                        -0.615,
                                                        45.08
                                                ],
                                                [
                                                        -0.64,
                                                        45.12
                                                ],
                                                [
                                                        -0.66,
                                                        45.16
                                                ],
                                                [
                                                        -0.66,
                                                        45.2
                                                ],
                                                [
                                                        -0.64,
                                                        45.24
                                                ],
                                                [
                                                        -0.61,
                                                        45.27
                                                ],
                                                [
                                                        -0.58,
                                                        45.28
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
                    "name": "Northern Rhône (Rhône Septentrionale)",
                    "category": "Granite Gorges & Syrah/Viognier Sanctuaries",
                    "dominantGrape": "Syrah & Viognier",
                    "color": "#581845",
                    "accent": "#d4af37",
                    "fillOpacity": 0.22,
                    "labelCenter": [
                        4.84,
                        45.22
                    ],
                    "description": "Narrow, steep granitic canyon carved by the Rhône River from Vienne south to Valence, home to Côte-Rôtie, Hermitage, and Condrieu."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                4.74,
                                45.56
                            ],
                            [
                                4.82,
                                45.54
                            ],
                            [
                                4.88,
                                45.48
                            ],
                            [
                                4.85,
                                45.38
                            ],
                            [
                                4.88,
                                45.28
                            ],
                            [
                                4.93,
                                45.18
                            ],
                            [
                                4.95,
                                45.08
                            ],
                            [
                                4.92,
                                44.96
                            ],
                            [
                                4.86,
                                44.9
                            ],
                            [
                                4.8,
                                44.92
                            ],
                            [
                                4.77,
                                45.04
                            ],
                            [
                                4.75,
                                45.18
                            ],
                            [
                                4.72,
                                45.32
                            ],
                            [
                                4.7,
                                45.46
                            ],
                            [
                                4.74,
                                45.56
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
                    "name": "Southern Rhône (Rhône Méridionale)",
                    "category": "Mediterranean Galets Roulés & Grenache Blends",
                    "dominantGrape": "Grenache, Syrah & Mourvèdre",
                    "color": "#900C3F",
                    "accent": "#ff5733",
                    "fillOpacity": 0.22,
                    "labelCenter": [
                        4.9,
                        44.16
                    ],
                    "description": "Broad Mediterranean amphitheater swept by the Mistral wind, featuring garrigue, limestone terraces, and Châteauneuf-du-Pape."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                4.65,
                                44.42
                            ],
                            [
                                4.82,
                                44.44
                            ],
                            [
                                4.98,
                                44.4
                            ],
                            [
                                5.12,
                                44.3
                            ],
                            [
                                5.18,
                                44.18
                            ],
                            [
                                5.14,
                                44.04
                            ],
                            [
                                5.02,
                                43.92
                            ],
                            [
                                4.84,
                                43.86
                            ],
                            [
                                4.68,
                                43.9
                            ],
                            [
                                4.6,
                                44.02
                            ],
                            [
                                4.58,
                                44.18
                            ],
                            [
                                4.6,
                                44.32
                            ],
                            [
                                4.65,
                                44.42
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
                    "name": "Northern Rhône (Côte-Rôtie AOC)",
                    "category": "Roasted Slopes & Schist Terraces",
                    "dominantGrape": "Syrah & Viognier",
                    "color": "#4a0e2e",
                    "accent": "#d4af37",
                    "fillOpacity": 0.28,
                    "labelCenter": [
                        4.79,
                        45.5
                    ],
                    "description": "Vertiginous 60-degree terraced slopes above Ampuis with mica-schist (Côte Brune) and pale granite-schist (Côte Blonde)."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                4.77,
                                45.535
                            ],
                            [
                                4.81,
                                45.532
                            ],
                            [
                                4.84,
                                45.515
                            ],
                            [
                                4.84,
                                45.495
                            ],
                            [
                                4.82,
                                45.48
                            ],
                            [
                                4.78,
                                45.475
                            ],
                            [
                                4.75,
                                45.485
                            ],
                            [
                                4.74,
                                45.508
                            ],
                            [
                                4.75,
                                45.525
                            ],
                            [
                                4.77,
                                45.535
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
                    "name": "Northern Rhône (Condrieu & Château-Grillet AOC)",
                    "category": "Arzelle Decomposed Granite & Viognier Home",
                    "dominantGrape": "Viognier (100%)",
                    "color": "#c89d2c",
                    "accent": "#ffd700",
                    "fillOpacity": 0.28,
                    "labelCenter": [
                        4.79,
                        45.42
                    ],
                    "description": "Steep granitic river bends dedicated to exotic, apricot-scented 100% Viognier, including the 3.5 ha monopole of Château-Grillet."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                4.78,
                                45.455
                            ],
                            [
                                4.81,
                                45.452
                            ],
                            [
                                4.83,
                                45.435
                            ],
                            [
                                4.83,
                                45.415
                            ],
                            [
                                4.8,
                                45.395
                            ],
                            [
                                4.76,
                                45.39
                            ],
                            [
                                4.74,
                                45.405
                            ],
                            [
                                4.74,
                                45.428
                            ],
                            [
                                4.76,
                                45.448
                            ],
                            [
                                4.78,
                                45.455
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
                    "name": "Northern Rhône (Hermitage & Crozes-Hermitage AOC)",
                    "category": "Sacred Granite Hill & Bessards / Méal Climats",
                    "dominantGrape": "Syrah & Marsanne/Roussanne",
                    "color": "#3f0a21",
                    "accent": "#d4af37",
                    "fillOpacity": 0.3,
                    "labelCenter": [
                        4.86,
                        45.08
                    ],
                    "description": "Monumental south-facing granite hill looming over Tain-l'Hermitage, surrounded by the alluvial gravel plains of Crozes-Hermitage."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                4.83,
                                45.12
                            ],
                            [
                                4.88,
                                45.126
                            ],
                            [
                                4.93,
                                45.11
                            ],
                            [
                                4.94,
                                45.085
                            ],
                            [
                                4.91,
                                45.06
                            ],
                            [
                                4.86,
                                45.05
                            ],
                            [
                                4.82,
                                45.06
                            ],
                            [
                                4.8,
                                45.082
                            ],
                            [
                                4.81,
                                45.105
                            ],
                            [
                                4.83,
                                45.12
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
                    "name": "Northern Rhône (Cornas & Saint-Péray AOC)",
                    "category": "Chaillot Granite Amphitheater & Limestone Ridge",
                    "dominantGrape": "Syrah (100% in Cornas)",
                    "color": "#2c0617",
                    "accent": "#d4af37",
                    "fillOpacity": 0.28,
                    "labelCenter": [
                        4.84,
                        44.97
                    ],
                    "description": "Natural thermal amphitheater sheltered from the Mistral producing powerful, inky 100% Syrah, alongside sparkling Saint-Péray."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                4.82,
                                45
                            ],
                            [
                                4.86,
                                44.995
                            ],
                            [
                                4.88,
                                44.975
                            ],
                            [
                                4.88,
                                44.955
                            ],
                            [
                                4.85,
                                44.94
                            ],
                            [
                                4.81,
                                44.942
                            ],
                            [
                                4.78,
                                44.96
                            ],
                            [
                                4.78,
                                44.982
                            ],
                            [
                                4.8,
                                44.996
                            ],
                            [
                                4.82,
                                45
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
                    "name": "Southern Rhône (Châteauneuf-du-Pape AOC)",
                    "category": "Quartzite Galets Roulés & 13 Sacred Grapes",
                    "dominantGrape": "Grenache, Syrah, Mourvèdre & Roussanne",
                    "color": "#7b1129",
                    "accent": "#ffd700",
                    "fillOpacity": 0.28,
                    "labelCenter": [
                        4.84,
                        44.06
                    ],
                    "description": "Benchmark southern crus famous for sun-heated galets roulés quartzite river stones, safres sand, and complex multi-grape cuvées."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                4.8,
                                44.105
                            ],
                            [
                                4.86,
                                44.108
                            ],
                            [
                                4.9,
                                44.085
                            ],
                            [
                                4.9,
                                44.06
                            ],
                            [
                                4.88,
                                44.038
                            ],
                            [
                                4.84,
                                44.025
                            ],
                            [
                                4.79,
                                44.03
                            ],
                            [
                                4.76,
                                44.052
                            ],
                            [
                                4.76,
                                44.08
                            ],
                            [
                                4.8,
                                44.105
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
                    "name": "Southern Rhône (Gigondas AOC)",
                    "category": "Dentelles de Montmirail Limestone Cliffs",
                    "dominantGrape": "Grenache & Syrah",
                    "color": "#631327",
                    "accent": "#d4af37",
                    "fillOpacity": 0.26,
                    "labelCenter": [
                        5.02,
                        44.165
                    ],
                    "description": "High-altitude limestone scree terraces nestled under the dramatic spires of the Dentelles de Montmirail."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                4.99,
                                44.195
                            ],
                            [
                                5.03,
                                44.2
                            ],
                            [
                                5.06,
                                44.185
                            ],
                            [
                                5.07,
                                44.165
                            ],
                            [
                                5.05,
                                44.148
                            ],
                            [
                                5.01,
                                44.142
                            ],
                            [
                                4.97,
                                44.155
                            ],
                            [
                                4.96,
                                44.178
                            ],
                            [
                                4.99,
                                44.195
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
                    "name": "Southern Rhône (Vacqueyras & Beaumes-de-Venise AOC)",
                    "category": "Glacial Alluvial Plateau & Muscat VDN",
                    "dominantGrape": "Grenache, Syrah & Muscat",
                    "color": "#801d33",
                    "accent": "#d4af37",
                    "fillOpacity": 0.24,
                    "labelCenter": [
                        5.02,
                        44.115
                    ],
                    "description": "Pebbly alluvial plateau of the Ouvèze valley alongside the Triassic gypsum cliffs of Beaumes-de-Venise."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                4.98,
                                44.142
                            ],
                            [
                                5.04,
                                44.146
                            ],
                            [
                                5.07,
                                44.13
                            ],
                            [
                                5.07,
                                44.105
                            ],
                            [
                                5.03,
                                44.09
                            ],
                            [
                                4.98,
                                44.085
                            ],
                            [
                                4.95,
                                44.102
                            ],
                            [
                                4.96,
                                44.126
                            ],
                            [
                                4.98,
                                44.142
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
                    "name": "Southern Rhône (Tavel & Lirac AOC)",
                    "category": "Limestone Lauzes & 100% Saignée Rosé Kingdom",
                    "dominantGrape": "Grenache & Cinsault",
                    "color": "#b83b5e",
                    "accent": "#ffd700",
                    "fillOpacity": 0.26,
                    "labelCenter": [
                        4.71,
                        44.04
                    ],
                    "description": "Right-bank historical enclave of bone-dry, structured gastronomic rosés grown on fractured limestone slabs and white pebbles."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                4.68,
                                44.075
                            ],
                            [
                                4.73,
                                44.074
                            ],
                            [
                                4.76,
                                44.055
                            ],
                            [
                                4.76,
                                44.032
                            ],
                            [
                                4.73,
                                44.015
                            ],
                            [
                                4.68,
                                44.01
                            ],
                            [
                                4.64,
                                44.025
                            ],
                            [
                                4.64,
                                44.052
                            ],
                            [
                                4.68,
                                44.075
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
            -1.42,
            47.14
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -1.76,
                47.22
              ],
              [
                -1.64,
                47.28
              ],
              [
                -1.48,
                47.31
              ],
              [
                -1.32,
                47.35
              ],
              [
                -1.22,
                47.36
              ],
              [
                -1.16,
                47.29
              ],
              [
                -1.18,
                47.19
              ],
              [
                -1.22,
                47.08
              ],
              [
                -1.28,
                47.01
              ],
              [
                -1.38,
                46.96
              ],
              [
                -1.52,
                46.95
              ],
              [
                -1.66,
                47
              ],
              [
                -1.78,
                47.07
              ],
              [
                -1.92,
                47.14
              ],
              [
                -2.05,
                47.21
              ],
              [
                -2.02,
                47.28
              ],
              [
                -1.88,
                47.25
              ],
              [
                -1.76,
                47.22
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
            -0.42,
            47.3
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -0.96,
                47.39
              ],
              [
                -0.82,
                47.43
              ],
              [
                -0.68,
                47.45
              ],
              [
                -0.52,
                47.49
              ],
              [
                -0.38,
                47.46
              ],
              [
                -0.2,
                47.42
              ],
              [
                -0.04,
                47.35
              ],
              [
                0.08,
                47.28
              ],
              [
                0.08,
                47.18
              ],
              [
                0.02,
                47.12
              ],
              [
                -0.14,
                47.1
              ],
              [
                -0.28,
                47.14
              ],
              [
                -0.42,
                47.18
              ],
              [
                -0.56,
                47.22
              ],
              [
                -0.72,
                47.28
              ],
              [
                -0.85,
                47.32
              ],
              [
                -0.96,
                47.39
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
            0.66,
            47.32
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.06,
                47.22
              ],
              [
                0.1,
                47.31
              ],
              [
                0.22,
                47.36
              ],
              [
                0.42,
                47.38
              ],
              [
                0.62,
                47.44
              ],
              [
                0.78,
                47.46
              ],
              [
                0.96,
                47.46
              ],
              [
                1.18,
                47.5
              ],
              [
                1.38,
                47.56
              ],
              [
                1.48,
                47.5
              ],
              [
                1.44,
                47.38
              ],
              [
                1.26,
                47.3
              ],
              [
                1.08,
                47.26
              ],
              [
                0.85,
                47.22
              ],
              [
                0.6,
                47.14
              ],
              [
                0.42,
                47.1
              ],
              [
                0.24,
                47.12
              ],
              [
                0.12,
                47.16
              ],
              [
                0.06,
                47.22
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
            2.52,
            47.2
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                1.96,
                47.05
              ],
              [
                2.08,
                47.15
              ],
              [
                2.22,
                47.22
              ],
              [
                2.42,
                47.28
              ],
              [
                2.62,
                47.44
              ],
              [
                2.78,
                47.58
              ],
              [
                2.96,
                47.54
              ],
              [
                3.1,
                47.44
              ],
              [
                3.16,
                47.28
              ],
              [
                3.08,
                47.14
              ],
              [
                2.92,
                47.04
              ],
              [
                2.68,
                46.98
              ],
              [
                2.4,
                46.95
              ],
              [
                2.14,
                46.98
              ],
              [
                1.96,
                47.05
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
            2.88,
            47.33
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                2.76,
                47.38
              ],
              [
                2.84,
                47.41
              ],
              [
                2.92,
                47.39
              ],
              [
                2.98,
                47.35
              ],
              [
                3.02,
                47.29
              ],
              [
                2.98,
                47.24
              ],
              [
                2.9,
                47.23
              ],
              [
                2.82,
                47.25
              ],
              [
                2.74,
                47.29
              ],
              [
                2.72,
                47.34
              ],
              [
                2.76,
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
                    "name": "Barolo DOCG & Langhe Nebbiolo",
                    "category": "The King of Wines & Tortonian/Serravallian MGAs",
                    "dominantGrape": "Nebbiolo (Lampia, Michet, Rosé)",
                    "color": "#7B1113",
                    "accent": "#d4af37",
                    "fillOpacity": 0.28,
                    "labelCenter": [
                        7.96,
                        44.62
                    ],
                    "description": "11 historic communes structured around Tortonian blue marls (Cannubi, Brunate) and Serravallian sandstone (Bussia, Cascina Francia)."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                7.91,
                                44.665
                            ],
                            [
                                7.96,
                                44.675
                            ],
                            [
                                8.02,
                                44.66
                            ],
                            [
                                8.04,
                                44.63
                            ],
                            [
                                8.03,
                                44.595
                            ],
                            [
                                7.99,
                                44.575
                            ],
                            [
                                7.93,
                                44.57
                            ],
                            [
                                7.89,
                                44.6
                            ],
                            [
                                7.88,
                                44.635
                            ],
                            [
                                7.91,
                                44.665
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
                    "name": "Barbaresco DOCG (4 Communes)",
                    "category": "The Queen of Wines & Sant'Agata Fossili Marls",
                    "dominantGrape": "Nebbiolo",
                    "color": "#631015",
                    "accent": "#d4af37",
                    "fillOpacity": 0.28,
                    "labelCenter": [
                        8.09,
                        44.72
                    ],
                    "description": "Right bank of the Tanaro across 4 communes (Barbaresco, Neive, Treiso, San Rocco) producing elegant, aromatic Nebbiolo."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                8.06,
                                44.745
                            ],
                            [
                                8.1,
                                44.752
                            ],
                            [
                                8.14,
                                44.742
                            ],
                            [
                                8.16,
                                44.722
                            ],
                            [
                                8.14,
                                44.7
                            ],
                            [
                                8.1,
                                44.685
                            ],
                            [
                                8.06,
                                44.695
                            ],
                            [
                                8.03,
                                44.718
                            ],
                            [
                                8.06,
                                44.745
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
                    "name": "Roero, Monferrato & Gavi (Roero DOCG)",
                    "category": "Sandy Pliocene Rocche & Arneis/Nebbiolo",
                    "dominantGrape": "Arneis & Nebbiolo",
                    "color": "#94292b",
                    "accent": "#d4af37",
                    "fillOpacity": 0.22,
                    "labelCenter": [
                        7.98,
                        44.78
                    ],
                    "description": "Dramatic sandy cliffs (*rocche*) left of the Tanaro River producing perfumed Nebbiolo and crisp white Roero Arneis."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                7.93,
                                44.825
                            ],
                            [
                                7.99,
                                44.832
                            ],
                            [
                                8.04,
                                44.82
                            ],
                            [
                                8.06,
                                44.79
                            ],
                            [
                                8.04,
                                44.755
                            ],
                            [
                                7.99,
                                44.74
                            ],
                            [
                                7.94,
                                44.752
                            ],
                            [
                                7.9,
                                44.782
                            ],
                            [
                                7.93,
                                44.825
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
                    "name": "Roero, Monferrato & Gavi (Gavi DOCG)",
                    "category": "White Terre Bianche Limestone & Cortese",
                    "dominantGrape": "Cortese (100%)",
                    "color": "#a86428",
                    "accent": "#ffd700",
                    "fillOpacity": 0.24,
                    "labelCenter": [
                        8.81,
                        44.71
                    ],
                    "description": "Mineral-driven white wine sanctuary centered on the medieval fortress town of Gavi near the Ligurian border."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                8.76,
                                44.745
                            ],
                            [
                                8.81,
                                44.752
                            ],
                            [
                                8.86,
                                44.74
                            ],
                            [
                                8.88,
                                44.718
                            ],
                            [
                                8.86,
                                44.685
                            ],
                            [
                                8.81,
                                44.672
                            ],
                            [
                                8.76,
                                44.685
                            ],
                            [
                                8.74,
                                44.712
                            ],
                            [
                                8.76,
                                44.745
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
                    "name": "Roero, Monferrato & Gavi (Barbera d'Asti & Nizza DOCG)",
                    "category": "Clay Asti Sands & High-Acidity Barbera",
                    "dominantGrape": "Barbera",
                    "color": "#5e1526",
                    "accent": "#d4af37",
                    "fillOpacity": 0.22,
                    "labelCenter": [
                        8.26,
                        44.82
                    ],
                    "description": "Undulating Monferrato hills producing vibrantly fresh, dark cherry-scented Barbera d'Asti and structured Nizza DOCG."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                8.2,
                                44.895
                            ],
                            [
                                8.28,
                                44.912
                            ],
                            [
                                8.35,
                                44.895
                            ],
                            [
                                8.38,
                                44.845
                            ],
                            [
                                8.35,
                                44.78
                            ],
                            [
                                8.28,
                                44.755
                            ],
                            [
                                8.2,
                                44.762
                            ],
                            [
                                8.14,
                                44.81
                            ],
                            [
                                8.15,
                                44.862
                            ],
                            [
                                8.2,
                                44.895
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
                    "name": "Barolo & Langhe (Dogliani DOCG)",
                    "category": "Deep White Marly Hills & Dolcetto Capital",
                    "dominantGrape": "Dolcetto",
                    "color": "#4a0e1c",
                    "accent": "#d4af37",
                    "fillOpacity": 0.22,
                    "labelCenter": [
                        7.94,
                        44.53
                    ],
                    "description": "Steep south-facing calcareous slopes south of Barolo dedicated to concentrated, age-worthy Dolcetto."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                7.9,
                                44.565
                            ],
                            [
                                7.95,
                                44.572
                            ],
                            [
                                7.99,
                                44.56
                            ],
                            [
                                8,
                                44.532
                            ],
                            [
                                7.97,
                                44.505
                            ],
                            [
                                7.92,
                                44.495
                            ],
                            [
                                7.87,
                                44.515
                            ],
                            [
                                7.87,
                                44.542
                            ],
                            [
                                7.9,
                                44.565
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
                    "name": "Alta Langa DOCG (Metodo Classico)",
                    "category": "High Alpine Apennine Terraces (400-800m)",
                    "dominantGrape": "Pinot Nero & Chardonnay",
                    "color": "#b8860b",
                    "accent": "#ffd700",
                    "fillOpacity": 0.24,
                    "labelCenter": [
                        8.18,
                        44.54
                    ],
                    "description": "Chilly high-elevation limestone ridges producing vintage-dated, minimum 30-month lees-aged traditional method sparkling wines."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                8.1,
                                44.605
                            ],
                            [
                                8.18,
                                44.618
                            ],
                            [
                                8.25,
                                44.6
                            ],
                            [
                                8.28,
                                44.56
                            ],
                            [
                                8.26,
                                44.51
                            ],
                            [
                                8.2,
                                44.475
                            ],
                            [
                                8.12,
                                44.482
                            ],
                            [
                                8.06,
                                44.518
                            ],
                            [
                                8.06,
                                44.565
                            ],
                            [
                                8.1,
                                44.605
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
                    "name": "Roero, Monferrato & Alto Piemonte (Gattinara/Ghemme)",
                    "category": "Alpine Morainic & Volcanic Porphyry Soils",
                    "dominantGrape": "Spanna (Nebbiolo), Vespolina & Croatina",
                    "color": "#6e1529",
                    "accent": "#d4af37",
                    "fillOpacity": 0.24,
                    "labelCenter": [
                        8.36,
                        45.62
                    ],
                    "description": "Ancient volcanic and alpine moraine terroirs along the Sesia river producing mineral, taut, savory Spanna (Nebbiolo)."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                8.3,
                                45.665
                            ],
                            [
                                8.38,
                                45.674
                            ],
                            [
                                8.44,
                                45.655
                            ],
                            [
                                8.46,
                                45.62
                            ],
                            [
                                8.42,
                                45.58
                            ],
                            [
                                8.35,
                                45.57
                            ],
                            [
                                8.29,
                                45.588
                            ],
                            [
                                8.26,
                                45.625
                            ],
                            [
                                8.3,
                                45.665
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
                    "name": "Chianti Classico DOCG (11 UGAs)",
                    "category": "Galestro & Alberese Heartlands & Gran Selezione",
                    "dominantGrape": "Sangiovese (min 80% / 90% GS)",
                    "color": "#800020",
                    "accent": "#d4af37",
                    "fillOpacity": 0.26,
                    "labelCenter": [
                        11.31,
                        43.54
                    ],
                    "description": "Historic forested hills between Florence and Siena codified into 11 UGAs (Radda, Castellina, Gaiole, Panzano, Greve) on Galestro schist."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                11.24,
                                43.68
                            ],
                            [
                                11.34,
                                43.67
                            ],
                            [
                                11.42,
                                43.62
                            ],
                            [
                                11.46,
                                43.54
                            ],
                            [
                                11.44,
                                43.45
                            ],
                            [
                                11.38,
                                43.38
                            ],
                            [
                                11.28,
                                43.39
                            ],
                            [
                                11.2,
                                43.46
                            ],
                            [
                                11.16,
                                43.56
                            ],
                            [
                                11.2,
                                43.64
                            ],
                            [
                                11.24,
                                43.68
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
                    "name": "Montalcino (Brunello di Montalcino DOCG)",
                    "category": "Solitary Mediterranean Hill & 100% Sangiovese Grosso",
                    "dominantGrape": "Sangiovese Grosso (100%)",
                    "color": "#631015",
                    "accent": "#d4af37",
                    "fillOpacity": 0.28,
                    "labelCenter": [
                        11.49,
                        43.05
                    ],
                    "description": "Isolated high hill south of Siena framed by 4 quadrant microclimates, producing legendary 5-year aged Brunello di Montalcino."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                11.44,
                                43.105
                            ],
                            [
                                11.51,
                                43.112
                            ],
                            [
                                11.56,
                                43.095
                            ],
                            [
                                11.58,
                                43.06
                            ],
                            [
                                11.55,
                                43.015
                            ],
                            [
                                11.49,
                                42.985
                            ],
                            [
                                11.43,
                                42.995
                            ],
                            [
                                11.39,
                                43.03
                            ],
                            [
                                11.4,
                                43.075
                            ],
                            [
                                11.44,
                                43.105
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
                    "name": "Bolgheri & Coastal Maremma (Bolgheri DOC)",
                    "category": "Maritime Amphitheater & Super Tuscan Origin",
                    "dominantGrape": "Cabernet Sauvignon, Merlot & Cabernet Franc",
                    "color": "#4a0a1f",
                    "accent": "#d4af37",
                    "fillOpacity": 0.26,
                    "labelCenter": [
                        10.6,
                        43.23
                    ],
                    "description": "Tyrrhenian coastal basin sheltered by metal-bearing hills, birthplace of Sassicaia, Ornellaia, and the Super Tuscan revolution."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                10.56,
                                43.275
                            ],
                            [
                                10.61,
                                43.282
                            ],
                            [
                                10.65,
                                43.265
                            ],
                            [
                                10.66,
                                43.235
                            ],
                            [
                                10.64,
                                43.195
                            ],
                            [
                                10.59,
                                43.18
                            ],
                            [
                                10.54,
                                43.2
                            ],
                            [
                                10.53,
                                43.235
                            ],
                            [
                                10.56,
                                43.275
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
                    "name": "Montepulciano & Carmignano (Vino Nobile DOCG)",
                    "category": "Pliocene Sand Val di Chiana & Historic Medici DOCG",
                    "dominantGrape": "Prugnolo Gentile (Sangiovese) & Cabernet Blend",
                    "color": "#7c223c",
                    "accent": "#d4af37",
                    "fillOpacity": 0.22,
                    "labelCenter": [
                        11.78,
                        43.1
                    ],
                    "description": "Warm eastern Val di Chiana hills producing elegant Vino Nobile di Montepulciano, alongside the historic Medici-decreed Carmignano."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                11.73,
                                43.145
                            ],
                            [
                                11.79,
                                43.155
                            ],
                            [
                                11.84,
                                43.14
                            ],
                            [
                                11.86,
                                43.105
                            ],
                            [
                                11.82,
                                43.065
                            ],
                            [
                                11.76,
                                43.055
                            ],
                            [
                                11.71,
                                43.072
                            ],
                            [
                                11.69,
                                43.11
                            ],
                            [
                                11.73,
                                43.145
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
                    "name": "San Gimignano & Central Valleys (Vernaccia DOCG)",
                    "category": "Yellow Pliocene Sands & Italy's First White DOCG",
                    "dominantGrape": "Vernaccia di San Gimignano",
                    "color": "#c89d2c",
                    "accent": "#ffd700",
                    "fillOpacity": 0.22,
                    "labelCenter": [
                        11.05,
                        43.47
                    ],
                    "description": "Medieval towered hill town surrounded by marine fossil-rich yellow sands producing flinty, almond-scented Vernaccia."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                11,
                                43.515
                            ],
                            [
                                11.06,
                                43.522
                            ],
                            [
                                11.11,
                                43.505
                            ],
                            [
                                11.12,
                                43.47
                            ],
                            [
                                11.09,
                                43.435
                            ],
                            [
                                11.03,
                                43.425
                            ],
                            [
                                10.98,
                                43.445
                            ],
                            [
                                10.97,
                                43.48
                            ],
                            [
                                11,
                                43.515
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
                    "name": "Bolgheri & Coastal Maremma (Maremma Toscana)",
                    "category": "Wild Coastal Plains & Morellino di Scansano",
                    "dominantGrape": "Sangiovese (Morellino), Cabernet & Syrah",
                    "color": "#5b1b2f",
                    "accent": "#d4af37",
                    "fillOpacity": 0.22,
                    "labelCenter": [
                        11.15,
                        42.75
                    ],
                    "description": "Expansive southern coastal territory where maritime breezes ripen rich Sangiovese (Morellino di Scansano) and Super Maremman blends."
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                10.95,
                                42.88
                            ],
                            [
                                11.08,
                                42.91
                            ],
                            [
                                11.22,
                                42.895
                            ],
                            [
                                11.32,
                                42.84
                            ],
                            [
                                11.35,
                                42.72
                            ],
                            [
                                11.28,
                                42.64
                            ],
                            [
                                11.15,
                                42.62
                            ],
                            [
                                11.02,
                                42.645
                            ],
                            [
                                10.92,
                                42.71
                            ],
                            [
                                10.91,
                                42.8
                            ],
                            [
                                10.95,
                                42.88
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
            -122.375,
            38.365
          ],
          "description": "World-renowned 30-mile valley graben flanked by Mayacamas and Vaca ranges (Oakville, Rutherford, Stags Leap, Howell Mtn)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.592,
                38.595
              ],
              [
                -122.545,
                38.568
              ],
              [
                -122.485,
                38.515
              ],
              [
                -122.455,
                38.485
              ],
              [
                -122.415,
                38.455
              ],
              [
                -122.385,
                38.425
              ],
              [
                -122.315,
                38.41
              ],
              [
                -122.31,
                38.375
              ],
              [
                -122.285,
                38.345
              ],
              [
                -122.26,
                38.295
              ],
              [
                -122.275,
                38.245
              ],
              [
                -122.315,
                38.225
              ],
              [
                -122.375,
                38.22
              ],
              [
                -122.415,
                38.24
              ],
              [
                -122.44,
                38.265
              ],
              [
                -122.385,
                38.32
              ],
              [
                -122.395,
                38.38
              ],
              [
                -122.425,
                38.42
              ],
              [
                -122.46,
                38.45
              ],
              [
                -122.495,
                38.495
              ],
              [
                -122.535,
                38.54
              ],
              [
                -122.585,
                38.575
              ],
              [
                -122.592,
                38.595
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
            -122.915,
            38.495
          ],
          "description": "Diverse microclimates influenced by Petaluma Gap marine fog and Goldridge sandy loam (Kistler, Rochioli, Littorai)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.845,
                38.615
              ],
              [
                -122.785,
                38.545
              ],
              [
                -122.755,
                38.445
              ],
              [
                -122.825,
                38.375
              ],
              [
                -122.895,
                38.315
              ],
              [
                -122.995,
                38.31
              ],
              [
                -123.045,
                38.315
              ],
              [
                -123.065,
                38.355
              ],
              [
                -123.118,
                38.45
              ],
              [
                -123.235,
                38.515
              ],
              [
                -123.325,
                38.568
              ],
              [
                -123.365,
                38.685
              ],
              [
                -123.165,
                38.71
              ],
              [
                -123.045,
                38.685
              ],
              [
                -122.925,
                38.635
              ],
              [
                -122.845,
                38.615
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
            -121.385,
            36.415
          ],
          "description": "Spanning from Monterey through San Luis Obispo and Santa Barbara cooled by direct Pacific Ocean airflow."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -121.805,
                36.685
              ],
              [
                -121.655,
                36.665
              ],
              [
                -121.455,
                36.615
              ],
              [
                -121.325,
                36.565
              ],
              [
                -121.185,
                36.485
              ],
              [
                -121.055,
                36.185
              ],
              [
                -120.955,
                35.915
              ],
              [
                -121.125,
                35.965
              ],
              [
                -121.285,
                36.185
              ],
              [
                -121.415,
                36.385
              ],
              [
                -121.525,
                36.265
              ],
              [
                -121.565,
                36.395
              ],
              [
                -121.485,
                36.515
              ],
              [
                -121.685,
                36.485
              ],
              [
                -121.755,
                36.595
              ],
              [
                -121.805,
                36.685
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
            -120.685,
            35.625
          ],
          "description": "High diurnal temperature swings and rare marine limestone benches producing opulent Cabernet and Rhône blends (Saxum, Tablas Creek)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.715,
                35.765
              ],
              [
                -120.585,
                35.775
              ],
              [
                -120.485,
                35.745
              ],
              [
                -120.355,
                35.655
              ],
              [
                -120.415,
                35.585
              ],
              [
                -120.485,
                35.535
              ],
              [
                -120.615,
                35.515
              ],
              [
                -120.745,
                35.535
              ],
              [
                -120.845,
                35.545
              ],
              [
                -120.945,
                35.625
              ],
              [
                -120.925,
                35.685
              ],
              [
                -120.895,
                35.725
              ],
              [
                -120.765,
                35.755
              ],
              [
                -120.715,
                35.765
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
            -122.085,
            37.185
          ],
          "description": "Forested coastal mountain ridge producing structured, mineral, European-style Cabernets that age for half a century (Ridge Monte Bello, Mount Eden)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.275,
                37.395
              ],
              [
                -122.145,
                37.335
              ],
              [
                -122.065,
                37.255
              ],
              [
                -121.985,
                37.185
              ],
              [
                -121.895,
                37.105
              ],
              [
                -121.815,
                37.035
              ],
              [
                -121.825,
                36.995
              ],
              [
                -121.885,
                37.015
              ],
              [
                -121.995,
                37.065
              ],
              [
                -122.125,
                37.115
              ],
              [
                -122.215,
                37.185
              ],
              [
                -122.275,
                37.265
              ],
              [
                -122.295,
                37.345
              ],
              [
                -122.275,
                37.395
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
            -120.345,
            34.635
          ],
          "description": "Rare east-west transverse maritime corridor funneling Pacific fog and winds onto diatomaceous earth slopes (Domaine de la Côte, Sea Smoke)."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -120.455,
                34.655
              ],
              [
                -120.415,
                34.675
              ],
              [
                -120.365,
                34.675
              ],
              [
                -120.295,
                34.665
              ],
              [
                -120.215,
                34.635
              ],
              [
                -120.225,
                34.605
              ],
              [
                -120.275,
                34.59
              ],
              [
                -120.315,
                34.585
              ],
              [
                -120.375,
                34.585
              ],
              [
                -120.415,
                34.595
              ],
              [
                -120.465,
                34.625
              ],
              [
                -120.455,
                34.655
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
        "id": "dundee-hills",
        "properties": {
          "id": "dundee-hills",
          "parentSubregionId": "dundee-hills",
          "subregionId": "dundee-hills",
          "name": "Dundee Hills AVA",
          "category": "Red Volcanic Jory Clay Loam & Baseline Epicenter",
          "dominantGrape": "Pinot Noir & Chardonnay",
          "color": "#b71c1c",
          "accent": "#ef5350",
          "fillOpacity": 0.28,
          "description": "Iron-rich red volcanic Jory clay loam on south-facing hillside slopes; spiritual home of Oregon Pinot Noir (Domaine Drouhin, Eyrie, Domaine Serene).",
          "labelCenter": [
            -123.015,
            45.275
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.04,
                45.32
              ],
              [
                -123.01,
                45.31
              ],
              [
                -122.98,
                45.29
              ],
              [
                -122.98,
                45.26
              ],
              [
                -123,
                45.24
              ],
              [
                -123.03,
                45.23
              ],
              [
                -123.06,
                45.24
              ],
              [
                -123.08,
                45.27
              ],
              [
                -123.07,
                45.3
              ],
              [
                -123.04,
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
          "category": "Shallow Volcanic Nekia & Van Duzer Winds",
          "dominantGrape": "Pinot Noir & Chardonnay",
          "color": "#311b92",
          "accent": "#7e57c2",
          "fillOpacity": 0.28,
          "description": "Shallow volcanic Nekia clay loam directly aligned with Van Duzer ocean winds; high natural acidity and structured tension (Cristom, Walter Scott, Evening Land).",
          "labelCenter": [
            -123.1,
            45.05
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
                -123.1,
                45.14
              ],
              [
                -123.05,
                45.1
              ],
              [
                -123.04,
                45.02
              ],
              [
                -123.06,
                44.95
              ],
              [
                -123.11,
                44.93
              ],
              [
                -123.15,
                44.96
              ],
              [
                -123.17,
                45.03
              ],
              [
                -123.18,
                45.09
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
          "name": "Ribbon Ridge & Yamhill-Carlton",
          "category": "Ancient Marine Sedimentary Willakenzie Sandstone",
          "dominantGrape": "Pinot Noir & Chardonnay",
          "color": "#880e4f",
          "accent": "#ec407a",
          "fillOpacity": 0.26,
          "description": "Ancient marine sedimentary Willakenzie sandstone ocean beds producing dark, broody black fruit, pipe tobacco, and savory forest floor (Beaux Frères, Shea, Ken Wright).",
          "labelCenter": [
            -123.14,
            45.34
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.24,
                45.4
              ],
              [
                -123.14,
                45.4
              ],
              [
                -123.05,
                45.36
              ],
              [
                -123.04,
                45.32
              ],
              [
                -123.08,
                45.3
              ],
              [
                -123.15,
                45.28
              ],
              [
                -123.24,
                45.29
              ],
              [
                -123.28,
                45.33
              ],
              [
                -123.27,
                45.38
              ],
              [
                -123.24,
                45.4
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
          "name": "Chehalem Mountains & Laurelwood District",
          "category": "Windblown Glacial Loess & High Elevation Peaks",
          "dominantGrape": "Pinot Noir & Chardonnay",
          "color": "#004d40",
          "accent": "#26a69a",
          "fillOpacity": 0.26,
          "description": "Highest elevation in the valley (Bald Peak 1,633ft) featuring windblown glacial loess (Laurelwood) over basalt, producing floral aromatics and silken textures (Ponzi, Adelsheim, Bergström).",
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
                -123.06,
                45.42
              ],
              [
                -122.96,
                45.46
              ],
              [
                -122.86,
                45.46
              ],
              [
                -122.84,
                45.41
              ],
              [
                -122.88,
                45.36
              ],
              [
                -122.95,
                45.33
              ],
              [
                -123.02,
                45.35
              ],
              [
                -123.07,
                45.38
              ],
              [
                -123.06,
                45.42
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
          "category": "Rugged Coast Range Siltstone & Marine Basalt",
          "dominantGrape": "Pinot Noir",
          "color": "#4e342e",
          "accent": "#8d6e63",
          "fillOpacity": 0.28,
          "description": "Nestucca marine siltstone and weathered basalt against the Coast Range foothills; wind-swept, dark, iron-inflected, muscular Pinots (Brittan, Hyland, Maysara).",
          "labelCenter": [
            -123.31,
            45.18
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.38,
                45.24
              ],
              [
                -123.28,
                45.24
              ],
              [
                -123.22,
                45.2
              ],
              [
                -123.24,
                45.14
              ],
              [
                -123.3,
                45.12
              ],
              [
                -123.38,
                45.13
              ],
              [
                -123.42,
                45.17
              ],
              [
                -123.41,
                45.22
              ],
              [
                -123.38,
                45.24
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "van-duzer-corridor",
        "properties": {
          "id": "van-duzer-corridor",
          "parentSubregionId": "van-duzer-corridor",
          "subregionId": "van-duzer-corridor",
          "name": "Van Duzer Corridor AVA",
          "category": "Pacific Ocean Wind Gap & Bracing Natural Acidity",
          "dominantGrape": "Pinot Noir & Pinot Gris",
          "color": "#01579b",
          "accent": "#29b6f6",
          "fillOpacity": 0.28,
          "description": "Direct wind gap in the Coast Range funneling raw Pacific oceanic gales into the valley floor; thick grape skins, bracing acidity, and saline tension (Johan, Left Coast).",
          "labelCenter": [
            -123.26,
            45.01
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.36,
                45.06
              ],
              [
                -123.26,
                45.07
              ],
              [
                -123.18,
                45.03
              ],
              [
                -123.18,
                44.96
              ],
              [
                -123.26,
                44.94
              ],
              [
                -123.34,
                44.96
              ],
              [
                -123.38,
                45.01
              ],
              [
                -123.36,
                45.06
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "mount-pisgah-lower-long-tom",
        "properties": {
          "id": "mount-pisgah-lower-long-tom",
          "parentSubregionId": "mount-pisgah-lower-long-tom",
          "subregionId": "mount-pisgah-lower-long-tom",
          "name": "Mount Pisgah & Lower Long Tom",
          "category": "Southern Willamette Bellpine Marine Sandstone",
          "dominantGrape": "Pinot Noir & Chardonnay",
          "color": "#e65100",
          "accent": "#ffa726",
          "fillOpacity": 0.26,
          "description": "Ancient marine sedimentary Bellpine and sandstone hills in the southern Willamette Valley (Freedom Hill, Antiquum Farm, Benton-Lane).",
          "labelCenter": [
            -123.26,
            44.38
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -123.32,
                44.6
              ],
              [
                -123.22,
                44.6
              ],
              [
                -123.18,
                44.45
              ],
              [
                -123.16,
                44.28
              ],
              [
                -123.2,
                44.2
              ],
              [
                -123.3,
                44.18
              ],
              [
                -123.38,
                44.24
              ],
              [
                -123.38,
                44.42
              ],
              [
                -123.32,
                44.6
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
      },      {
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
      },      {
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
          "description": "Limestone valleys north of Verona producing dried-grape Amarone and basalt volcanic Soave (Quintarelli, Pieropan).",
          "labelCenter": [
            11.05,
            45.5
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                10.72,
                45.55
              ],
              [
                10.75,
                45.62
              ],
              [
                10.84,
                45.64
              ],
              [
                10.96,
                45.63
              ],
              [
                11.08,
                45.6
              ],
              [
                11.22,
                45.55
              ],
              [
                11.36,
                45.5
              ],
              [
                11.44,
                45.45
              ],
              [
                11.38,
                45.38
              ],
              [
                11.24,
                45.36
              ],
              [
                11.08,
                45.39
              ],
              [
                10.92,
                45.42
              ],
              [
                10.76,
                45.46
              ],
              [
                10.72,
                45.55
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "lombardia-valtellina",
        "properties": {
          "id": "lombardia-valtellina",
          "parentSubregionId": "lombardia-valtellina",
          "subregionId": "lombardia-valtellina",
          "name": "Valtellina (Lombardia Alpine Nebbiolo)",
          "category": "Alpine Granite Terraces & Chiavennasca",
          "dominantGrape": "Nebbiolo (Chiavennasca)",
          "color": "#5c0632",
          "accent": "#d4af37",
          "fillOpacity": 0.28,
          "description": "Perilous south-facing granite terraces overlooking the Adda River in the Alps (AR.PE.PE., Nino Negri, Sandro Fay).",
          "labelCenter": [
            9.87,
            46.17
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.48,
                46.14
              ],
              [
                9.62,
                46.18
              ],
              [
                9.76,
                46.2
              ],
              [
                9.88,
                46.22
              ],
              [
                10.02,
                46.21
              ],
              [
                10.16,
                46.23
              ],
              [
                10.24,
                46.2
              ],
              [
                10.2,
                46.15
              ],
              [
                10.05,
                46.13
              ],
              [
                9.86,
                46.12
              ],
              [
                9.68,
                46.12
              ],
              [
                9.52,
                46.11
              ],
              [
                9.48,
                46.14
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
          "description": "High-altitude slopes of Mount Etna volcano (up to 1,000m) with black pumice and lava Contrade (Passopisciaro, Terre Nere, Benanti).",
          "labelCenter": [
            15.05,
            37.78
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                14.92,
                37.88
              ],
              [
                15.04,
                37.91
              ],
              [
                15.15,
                37.89
              ],
              [
                15.22,
                37.82
              ],
              [
                15.24,
                37.72
              ],
              [
                15.2,
                37.64
              ],
              [
                15.12,
                37.58
              ],
              [
                15,
                37.58
              ],
              [
                14.88,
                37.62
              ],
              [
                14.82,
                37.68
              ],
              [
                14.84,
                37.76
              ],
              [
                14.88,
                37.84
              ],
              [
                14.92,
                37.88
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
          "description": "Spectacular Alpine terraced valley beneath Dolomite peaks producing crystalline Pinot Bianco and mineral whites (Cantina Terlano).",
          "labelCenter": [
            11.26,
            46.48
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                11.14,
                46.68
              ],
              [
                11.28,
                46.72
              ],
              [
                11.52,
                46.74
              ],
              [
                11.64,
                46.66
              ],
              [
                11.58,
                46.5
              ],
              [
                11.48,
                46.36
              ],
              [
                11.36,
                46.24
              ],
              [
                11.2,
                46.22
              ],
              [
                11.12,
                46.32
              ],
              [
                11.14,
                46.48
              ],
              [
                11.1,
                46.6
              ],
              [
                11.14,
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
          "color": "#6a1b9a",
          "accent": "#ce93d8",
          "fillOpacity": 0.26,
          "description": "Bordering Slovenia on layered Ponca flysch, pioneering extended skin contact orange wines and mineral whites (Gravner, Radikon).",
          "labelCenter": [
            13.48,
            46.02
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                13.34,
                46.12
              ],
              [
                13.48,
                46.18
              ],
              [
                13.62,
                46.14
              ],
              [
                13.7,
                46.04
              ],
              [
                13.72,
                45.92
              ],
              [
                13.62,
                45.82
              ],
              [
                13.48,
                45.84
              ],
              [
                13.36,
                45.92
              ],
              [
                13.28,
                46.02
              ],
              [
                13.34,
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
          "category": "High-Elevation Apennine Volcanic Ash & Limestone",
          "dominantGrape": "Aglianico, Fiano di Avellino, Greco di Tufo",
          "color": "#bf360c",
          "accent": "#ffab91",
          "fillOpacity": 0.26,
          "description": "The 'Barolo of the South' (Taurasi Aglianico) alongside laser-pure volcanic whites Fiano and Greco (Mastroberardino, Feudi).",
          "labelCenter": [
            14.92,
            40.96
          ]
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                14.74,
                41.04
              ],
              [
                14.88,
                41.08
              ],
              [
                15.06,
                41.05
              ],
              [
                15.18,
                40.98
              ],
              [
                15.16,
                40.88
              ],
              [
                15.02,
                40.82
              ],
              [
                14.86,
                40.84
              ],
              [
                14.72,
                40.92
              ],
              [
                14.74,
                41.04
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
      },      {
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
                                "description": "The monumental Atlantic wine capital defined by the Gironde estuary and the convergence of the Garonne and Dordogne rivers."
                        },
                        "geometry": {
                                "type": "MultiPolygon",
                                "coordinates": [
                                        [
                                                [
                                                        [
                                                                -1.065,
                                                                45.58
                                                        ],
                                                        [
                                                                -1.015,
                                                                45.54
                                                        ],
                                                        [
                                                                -0.985,
                                                                45.49
                                                        ],
                                                        [
                                                                -0.945,
                                                                45.43
                                                        ],
                                                        [
                                                                -0.92,
                                                                45.365
                                                        ],
                                                        [
                                                                -0.865,
                                                                45.31
                                                        ],
                                                        [
                                                                -0.79,
                                                                45.28
                                                        ],
                                                        [
                                                                -0.74,
                                                                45.26
                                                        ],
                                                        [
                                                                -0.725,
                                                                45.2
                                                        ],
                                                        [
                                                                -0.715,
                                                                45.16
                                                        ],
                                                        [
                                                                -0.69,
                                                                45.115
                                                        ],
                                                        [
                                                                -0.66,
                                                                45.075
                                                        ],
                                                        [
                                                                -0.63,
                                                                45.035
                                                        ],
                                                        [
                                                                -0.595,
                                                                44.985
                                                        ],
                                                        [
                                                                -0.565,
                                                                44.935
                                                        ],
                                                        [
                                                                -0.54,
                                                                44.875
                                                        ],
                                                        [
                                                                -0.515,
                                                                44.82
                                                        ],
                                                        [
                                                                -0.485,
                                                                44.765
                                                        ],
                                                        [
                                                                -0.435,
                                                                44.705
                                                        ],
                                                        [
                                                                -0.39,
                                                                44.65
                                                        ],
                                                        [
                                                                -0.33,
                                                                44.6
                                                        ],
                                                        [
                                                                -0.26,
                                                                44.57
                                                        ],
                                                        [
                                                                -0.245,
                                                                44.54
                                                        ],
                                                        [
                                                                -0.255,
                                                                44.48
                                                        ],
                                                        [
                                                                -0.3,
                                                                44.44
                                                        ],
                                                        [
                                                                -0.38,
                                                                44.43
                                                        ],
                                                        [
                                                                -0.45,
                                                                44.44
                                                        ],
                                                        [
                                                                -0.52,
                                                                44.48
                                                        ],
                                                        [
                                                                -0.62,
                                                                44.55
                                                        ],
                                                        [
                                                                -0.7,
                                                                44.63
                                                        ],
                                                        [
                                                                -0.73,
                                                                44.74
                                                        ],
                                                        [
                                                                -0.745,
                                                                44.84
                                                        ],
                                                        [
                                                                -0.755,
                                                                44.9
                                                        ],
                                                        [
                                                                -0.81,
                                                                44.935
                                                        ],
                                                        [
                                                                -0.87,
                                                                44.97
                                                        ],
                                                        [
                                                                -0.92,
                                                                45.03
                                                        ],
                                                        [
                                                                -0.96,
                                                                45.1
                                                        ],
                                                        [
                                                                -0.98,
                                                                45.18
                                                        ],
                                                        [
                                                                -1,
                                                                45.26
                                                        ],
                                                        [
                                                                -1.05,
                                                                45.315
                                                        ],
                                                        [
                                                                -1.11,
                                                                45.365
                                                        ],
                                                        [
                                                                -1.155,
                                                                45.415
                                                        ],
                                                        [
                                                                -1.155,
                                                                45.475
                                                        ],
                                                        [
                                                                -1.135,
                                                                45.525
                                                        ],
                                                        [
                                                                -1.065,
                                                                45.58
                                                        ]
                                                ]
                                        ],
                                        [
                                                [
                                                        [
                                                                -0.59,
                                                                45.32
                                                        ],
                                                        [
                                                                -0.51,
                                                                45.33
                                                        ],
                                                        [
                                                                -0.43,
                                                                45.285
                                                        ],
                                                        [
                                                                -0.39,
                                                                45.2
                                                        ],
                                                        [
                                                                -0.31,
                                                                45.12
                                                        ],
                                                        [
                                                                -0.19,
                                                                45.06
                                                        ],
                                                        [
                                                                -0.11,
                                                                45.035
                                                        ],
                                                        [
                                                                -0.025,
                                                                44.98
                                                        ],
                                                        [
                                                                -0.025,
                                                                44.905
                                                        ],
                                                        [
                                                                -0.04,
                                                                44.85
                                                        ],
                                                        [
                                                                -0.11,
                                                                44.84
                                                        ],
                                                        [
                                                                -0.2,
                                                                44.845
                                                        ],
                                                        [
                                                                -0.26,
                                                                44.88
                                                        ],
                                                        [
                                                                -0.36,
                                                                44.89
                                                        ],
                                                        [
                                                                -0.47,
                                                                44.97
                                                        ],
                                                        [
                                                                -0.55,
                                                                45.02
                                                        ],
                                                        [
                                                                -0.595,
                                                                45.035
                                                        ],
                                                        [
                                                                -0.645,
                                                                45.075
                                                        ],
                                                        [
                                                                -0.685,
                                                                45.13
                                                        ],
                                                        [
                                                                -0.675,
                                                                45.2
                                                        ],
                                                        [
                                                                -0.655,
                                                                45.255
                                                        ],
                                                        [
                                                                -0.59,
                                                                45.32
                                                        ]
                                                ]
                                        ],
                                        [
                                                [
                                                        [
                                                                -0.555,
                                                                44.975
                                                        ],
                                                        [
                                                                -0.43,
                                                                44.955
                                                        ],
                                                        [
                                                                -0.33,
                                                                44.935
                                                        ],
                                                        [
                                                                -0.25,
                                                                44.91
                                                        ],
                                                        [
                                                                -0.18,
                                                                44.875
                                                        ],
                                                        [
                                                                -0.11,
                                                                44.845
                                                        ],
                                                        [
                                                                -0.02,
                                                                44.855
                                                        ],
                                                        [
                                                                0.1,
                                                                44.835
                                                        ],
                                                        [
                                                                0.165,
                                                                44.75
                                                        ],
                                                        [
                                                                0.105,
                                                                44.63
                                                        ],
                                                        [
                                                                -0.01,
                                                                44.56
                                                        ],
                                                        [
                                                                -0.13,
                                                                44.545
                                                        ],
                                                        [
                                                                -0.215,
                                                                44.545
                                                        ],
                                                        [
                                                                -0.305,
                                                                44.575
                                                        ],
                                                        [
                                                                -0.37,
                                                                44.595
                                                        ],
                                                        [
                                                                -0.445,
                                                                44.655
                                                        ],
                                                        [
                                                                -0.505,
                                                                44.73
                                                        ],
                                                        [
                                                                -0.545,
                                                                44.8
                                                        ],
                                                        [
                                                                -0.56,
                                                                44.87
                                                        ],
                                                        [
                                                                -0.555,
                                                                44.975
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

export function getRegionOutline(regionId) {
  return WINE_REGION_OUTLINES[regionId] || null;
}
