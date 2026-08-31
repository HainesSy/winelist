// GeoJSON Boundary Polygons for Global Wine Appellations & Sub-regions
// Format conforms to standard GeoJSON FeatureCollection (Coordinates: [Longitude, Latitude])

export const WINE_REGION_BOUNDARIES = {
  // ==========================================================================
  // CHAMPAGNE AOC (Subregion Polygons)
  // ==========================================================================
  'champagne': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "montagne-de-reims",
        properties: {
          id: "montagne-de-reims",
          name: "Montagne de Reims",
          category: "Grand Cru District",
          dominantGrape: "Pinot Noir",
          color: "#8B0000", // Deep ruby/burgundy
          accent: "#d4af37",
          fillOpacity: 0.18,
          description: "Forested chalk plateau renowned for 9 Pinot Noir Grand Crus (Ambonnay, Bouzy, Verzenay, Verzy, Mailly)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.020, 49.200], [4.160, 49.215], [4.240, 49.190], [4.260, 49.140],
            [4.220, 49.070], [4.170, 49.050], [4.120, 49.060], [4.050, 49.100],
            [3.980, 49.140], [3.970, 49.180], [4.020, 49.200]
          ]]
        }
      },
      {
        type: "Feature",
        id: "cote-des-blancs",
        properties: {
          id: "cote-des-blancs",
          name: "Côte des Blancs",
          category: "Chardonnay Grand Cru Kingdom",
          dominantGrape: "Chardonnay",
          color: "#D4AF37", // Gold
          accent: "#ffd700",
          fillOpacity: 0.22,
          description: "Pure east-facing Belemnite chalk ridge dedicated 96%+ to Chardonnay and 6 100% Grand Cru communes (Avize, Cramant, Le Mesnil-sur-Oger, Oger, Chouilly, Oiry)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [3.970, 49.040], [4.020, 49.030], [4.030, 48.960], [4.020, 48.880],
            [3.980, 48.860], [3.940, 48.890], [3.950, 48.970], [3.960, 49.020],
            [3.970, 49.040]
          ]]
        }
      },
      {
        type: "Feature",
        id: "vallee-de-la-marne",
        properties: {
          id: "vallee-de-la-marne",
          name: "Vallée de la Marne",
          category: "Meunier & Pinot Noir Valley",
          dominantGrape: "Meunier & Pinot Noir",
          color: "#9C27B0", // Purple
          accent: "#ba68c8",
          fillOpacity: 0.18,
          description: "Sprawling river corridor characterized by clay and alluvium soils where frost-hardy Meunier produces round, aromatically expressive cuvées."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [3.520, 49.090], [3.700, 49.130], [3.920, 49.080], [4.060, 49.060],
            [4.070, 49.020], [3.930, 49.010], [3.720, 49.030], [3.510, 49.040],
            [3.480, 49.060], [3.520, 49.090]
          ]]
        }
      },
      {
        type: "Feature",
        id: "cote-des-bar",
        properties: {
          id: "cote-des-bar",
          name: "Côte des Bar (Aube)",
          category: "Kimmeridgian Pinot Noir Terroir",
          dominantGrape: "Pinot Noir",
          color: "#795548", // Warm earthy bronze
          accent: "#a1887f",
          fillOpacity: 0.20,
          description: "Southern Champagne district geologically identical to Chablis with fossil-dense Kimmeridgian limestone marls yielding vinous, structured grower Pinot Noirs."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.180, 48.260], [4.420, 48.310], [4.650, 48.240], [4.680, 48.060],
            [4.580, 47.940], [4.380, 47.930], [4.200, 48.080], [4.180, 48.260]
          ]]
        }
      },
      {
        type: "Feature",
        id: "cote-de-sezanne",
        properties: {
          id: "cote-de-sezanne",
          name: "Côte de Sézanne",
          category: "Chardonnay Extension",
          dominantGrape: "Chardonnay",
          color: "#DAA520",
          accent: "#f0e68c",
          fillOpacity: 0.16,
          description: "Southwestern extension of the Côte des Blancs with chalk and clay soils producing rich, tropical, forward Chardonnays."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [3.670, 48.780], [3.780, 48.790], [3.820, 48.710], [3.750, 48.640],
            [3.680, 48.660], [3.650, 48.730], [3.670, 48.780]
          ]]
        }
      },
      {
        type: "Feature",
        id: "val-du-petit-morin",
        properties: {
          id: "val-du-petit-morin",
          name: "Val du Petit Morin",
          category: "Chalk & Clay Micro-valley",
          dominantGrape: "Pinot Meunier & Chardonnay",
          color: "#5c6bc0",
          accent: "#9fa8da",
          fillOpacity: 0.16,
          description: "Transition valley nestled between the Côte des Blancs and Sézanne, home to revered grower parcel cuvées."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [3.680, 48.890], [3.820, 48.910], [3.860, 48.820], [3.730, 48.800],
            [3.680, 48.890]
          ]]
        }
      },
      {
        type: "Feature",
        id: "coteaux-sud-epernay",
        properties: {
          id: "coteaux-sud-epernay",
          name: "Côteaux Sud d'Épernay",
          category: "Bridge Terroir",
          dominantGrape: "Chardonnay & Pinot Meunier",
          color: "#26a69a",
          accent: "#80cbc4",
          fillOpacity: 0.18,
          description: "Crucial transitional corridor south of Épernay (Pierry, Chavot) marrying flint, clay, and chalk."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [3.890, 49.030], [3.970, 49.030], [3.970, 48.970], [3.880, 48.980],
            [3.890, 49.030]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // BURGUNDY (Bourgogne Subregion Polygons)
  // ==========================================================================
  'burgundy': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "chablis",
        properties: {
          id: "chablis",
          name: "Chablis & Grand Auxerrois",
          category: "Kimmeridgian Chardonnay Apex",
          dominantGrape: "Chardonnay",
          color: "#D4AF37",
          accent: "#fff176",
          fillOpacity: 0.20,
          description: "Prehistoric Jurassic seabed of fossilized Exogyra virgula oysters yielding steely, high-acid, mineral Chardonnays."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [3.680, 47.880], [3.880, 47.890], [3.930, 47.780], [3.780, 47.730],
            [3.650, 47.770], [3.680, 47.880]
          ]]
        }
      },
      {
        type: "Feature",
        id: "cote-de-nuits",
        properties: {
          id: "cote-de-nuits",
          name: "Côte de Nuits",
          category: "Pinot Noir Grand Cru Sanctum",
          dominantGrape: "Pinot Noir",
          color: "#800020", // Deep Burgundy
          accent: "#d4af37",
          fillOpacity: 0.22,
          description: "The golden slope of 24 red Grand Crus (Romanée-Conti, Chambertin, Musigny, Clos de Vougeot)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.920, 47.280], [5.010, 47.260], [4.980, 47.100], [4.920, 47.070],
            [4.880, 47.120], [4.900, 47.230], [4.920, 47.280]
          ]]
        }
      },
      {
        type: "Feature",
        id: "cote-de-beaune",
        properties: {
          id: "cote-de-beaune",
          name: "Côte de Beaune",
          category: "White Grand Cru & Noble Red Epicenter",
          dominantGrape: "Chardonnay & Pinot Noir",
          color: "#C5A059",
          accent: "#ffd54f",
          fillOpacity: 0.20,
          description: "Home of Montrachet, Corton-Charlemagne, Meursault, Puligny, and Volnay."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.850, 47.080], [4.940, 47.060], [4.880, 46.890], [4.720, 46.880],
            [4.740, 46.990], [4.850, 47.080]
          ]]
        }
      },
      {
        type: "Feature",
        id: "cote-chalonnaise",
        properties: {
          id: "cote-chalonnaise",
          name: "Côte Chalonnaise",
          category: "Limestone Value & Crémant",
          dominantGrape: "Pinot Noir, Chardonnay, Aligoté",
          color: "#a1887f",
          accent: "#d7ccc8",
          fillOpacity: 0.18,
          description: "Rolling limestone hills featuring Mercurey, Rully, Givry, Montagny, and Bouzeron."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.650, 46.880], [4.800, 46.860], [4.750, 46.650], [4.600, 46.680],
            [4.650, 46.880]
          ]]
        }
      },
      {
        type: "Feature",
        id: "maconnais",
        properties: {
          id: "maconnais",
          name: "Mâconnais",
          category: "Sun-drenched Limestone Chardonnay",
          dominantGrape: "Chardonnay",
          color: "#D4AF37",
          accent: "#fff59d",
          fillOpacity: 0.18,
          description: "Limestone cliffs of Solutré and Vergisson producing Pouilly-Fuissé, Saint-Véran, and Viré-Clessé."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.680, 46.520], [4.840, 46.480], [4.790, 46.230], [4.650, 46.260],
            [4.680, 46.520]
          ]]
        }
      },
      {
        type: "Feature",
        id: "beaujolais",
        properties: {
          id: "beaujolais",
          name: "Beaujolais Crus",
          category: "Granite Gamay Kingdom",
          dominantGrape: "Gamay",
          color: "#880e4f",
          accent: "#f48fb1",
          fillOpacity: 0.18,
          description: "Pink granite schist terroirs producing the 10 Cru Beaujolais (Morgon, Moulin-à-Vent, Fleurie)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.600, 46.250], [4.780, 46.230], [4.740, 45.850], [4.550, 45.900],
            [4.600, 46.250]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // BORDEAUX (Left Bank, Right Bank & Graves Polygons)
  // ==========================================================================
  'bordeaux': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "medoc",
        properties: {
          id: "medoc",
          name: "Médoc & Haut-Médoc (Left Bank)",
          category: "Cabernet Sauvignon & Gravel Benches",
          dominantGrape: "Cabernet Sauvignon",
          color: "#5b0e2d",
          accent: "#d4af37",
          fillOpacity: 0.20,
          description: "Pyrenean gravel croupes home to Pauillac, Margaux, Saint-Julien, Saint-Estèphe, and 1855 First Growths."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-1.150, 45.550], [-0.850, 45.450], [-0.600, 44.950], [-0.750, 44.880],
            [-0.950, 45.150], [-1.150, 45.550]
          ]]
        }
      },
      {
        type: "Feature",
        id: "graves-pessac",
        properties: {
          id: "graves",
          name: "Graves & Pessac-Léognan",
          category: "Historic Gravel & Château Haut-Brion",
          dominantGrape: "Cabernet Sauvignon & Sauvignon Blanc",
          color: "#78281f",
          accent: "#e59866",
          fillOpacity: 0.18,
          description: "Deep gravel terraces producing aristocratic red and structured, oaked dry whites."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.620, 44.850], [-0.480, 44.750], [-0.350, 44.520], [-0.550, 44.480],
            [-0.680, 44.700], [-0.620, 44.850]
          ]]
        }
      },
      {
        type: "Feature",
        id: "sauternes-barsac",
        properties: {
          id: "sauternes",
          name: "Sauternes & Barsac",
          category: "Noble Rot Botrytis Kingdom",
          dominantGrape: "Sémillon, Sauvignon Blanc",
          color: "#e5a93b",
          accent: "#f9e79f",
          fillOpacity: 0.22,
          description: "Ciron river morning mists generate Botrytis cinerea for liquid gold (Château d'Yquem)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.380, 44.590], [-0.280, 44.560], [-0.310, 44.490], [-0.410, 44.520],
            [-0.380, 44.590]
          ]]
        }
      },
      {
        type: "Feature",
        id: "saint-emilion-pomerol",
        properties: {
          id: "saint-emilion",
          name: "Saint-Émilion & Pomerol (Right Bank)",
          category: "Clay, Limestone & Merlot Grandeur",
          dominantGrape: "Merlot & Cabernet Franc",
          color: "#4a154b",
          accent: "#d4af37",
          fillOpacity: 0.20,
          description: "Limestone plateau of Saint-Émilion and iron-rich blue clay buttonhole of Pomerol (Petrus, Cheval Blanc)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.260, 44.960], [-0.100, 44.950], [-0.110, 44.850], [-0.240, 44.870],
            [-0.260, 44.960]
          ]]
        }
      },
      {
        type: "Feature",
        id: "entre-deux-mers",
        properties: {
          id: "entre-deux-mers",
          name: "Entre-Deux-Mers",
          category: "Two Rivers Heartlands",
          dominantGrape: "Sauvignon Blanc, Merlot",
          color: "#43a047",
          accent: "#a5d6a7",
          fillOpacity: 0.16,
          description: "Fertile rolling plateau between the Garonne and Dordogne rivers."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.450, 44.860], [-0.150, 44.850], [-0.050, 44.600], [-0.350, 44.550],
            [-0.450, 44.860]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // PIEDMONT (Langhe, Barolo & Barbaresco Polygons)
  // ==========================================================================
  'piedmont': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "barolo",
        properties: {
          id: "barolo",
          name: "Barolo DOCG",
          category: "King of Wines (11 Communes)",
          dominantGrape: "Nebbiolo",
          color: "#800020",
          accent: "#d4af37",
          fillOpacity: 0.22,
          description: "Tortonian calcareous marls and Helvetian sandstone hills producing legendary, age-worthy Nebbiolo."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [7.910, 44.650], [8.010, 44.660], [8.040, 44.580], [7.930, 44.570],
            [7.910, 44.650]
          ]]
        }
      },
      {
        type: "Feature",
        id: "barbaresco",
        properties: {
          id: "barbaresco",
          name: "Barbaresco DOCG",
          category: "Queen of Nebbiolo",
          dominantGrape: "Nebbiolo",
          color: "#a93226",
          accent: "#f5b7b1",
          fillOpacity: 0.20,
          description: "Warm Tanaro river influence and Sant'Agata blue marls creating elegant, perfumed Nebbiolo (Barbaresco, Neive, Treiso)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [8.040, 44.750], [8.140, 44.740], [8.120, 44.680], [8.030, 44.690],
            [8.040, 44.750]
          ]]
        }
      },
      {
        type: "Feature",
        id: "roero",
        properties: {
          id: "roero",
          name: "Roero DOCG",
          category: "Sandy Nebbiolo & Arneis",
          dominantGrape: "Arneis & Nebbiolo",
          color: "#e67e22",
          accent: "#f9e79f",
          fillOpacity: 0.18,
          description: "Pliocene marine sands across the northern bank of the Tanaro river."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [7.880, 44.840], [8.050, 44.830], [8.020, 44.740], [7.870, 44.760],
            [7.880, 44.840]
          ]]
        }
      },
      {
        type: "Feature",
        id: "monferrato",
        properties: {
          id: "monferrato",
          name: "Barbera d'Asti & Monferrato",
          category: "Barbera & Moscato Hills",
          dominantGrape: "Barbera, Moscato Bianco",
          color: "#6c3483",
          accent: "#d7bde2",
          fillOpacity: 0.16,
          description: "Expansive rolling hills renowned for bright, juicy Barbera and sparkling Moscato d'Asti."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [8.080, 45.050], [8.450, 45.020], [8.500, 44.700], [8.120, 44.750],
            [8.080, 45.050]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // TUSCANY (Chianti Classico, Montalcino & Bolgheri)
  // ==========================================================================
  'tuscany': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "chianti-classico",
        properties: {
          id: "chianti-classico",
          name: "Chianti Classico DOCG (Gallo Nero)",
          category: "Galestro & Sangiovese Heartland",
          dominantGrape: "Sangiovese",
          color: "#900C3F",
          accent: "#d4af37",
          fillOpacity: 0.20,
          description: "Rugged galestro schist and alberese limestone hills (Radda, Gaiole, Castellina, Greve, Panzano, Castelnuovo Berardenga)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [11.180, 43.680], [11.450, 43.650], [11.520, 43.380], [11.240, 43.400],
            [11.180, 43.680]
          ]]
        }
      },
      {
        type: "Feature",
        id: "montalcino",
        properties: {
          id: "montalcino",
          name: "Brunello di Montalcino DOCG",
          category: "Sangiovese Grosso Apex",
          dominantGrape: "Sangiovese (Brunello)",
          color: "#581845",
          accent: "#ffc300",
          fillOpacity: 0.22,
          description: "Isolated sun-baked hill south of Siena producing powerful, structured 100% Sangiovese Grosso aged 5+ years."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [11.400, 43.080], [11.580, 43.070], [11.560, 42.940], [11.380, 42.950],
            [11.400, 43.080]
          ]]
        }
      },
      {
        type: "Feature",
        id: "bolgheri",
        properties: {
          id: "bolgheri",
          name: "Bolgheri DOC & Super Tuscan Coast",
          category: "Maritime Bordeaux Blends",
          dominantGrape: "Cabernet Sauvignon, Merlot, Cabernet Franc",
          color: "#1b4f72",
          accent: "#85c1e9",
          fillOpacity: 0.20,
          description: "Tyrrhenian coastal amphitheater giving birth to Sassicaia, Ornellaia, and Masseto."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [10.530, 43.280], [10.680, 43.270], [10.650, 43.140], [10.510, 43.160],
            [10.530, 43.280]
          ]]
        }
      },
      {
        type: "Feature",
        id: "montepulciano",
        properties: {
          id: "montepulciano",
          name: "Vino Nobile di Montepulciano DOCG",
          category: "Prugnolo Gentile",
          dominantGrape: "Sangiovese (Prugnolo Gentile)",
          color: "#7b241c",
          accent: "#f1948a",
          fillOpacity: 0.18,
          description: "Historic Renaissance hillside town producing aromatic, velvety Sangiovese blends."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [11.720, 43.140], [11.850, 43.130], [11.820, 43.040], [11.700, 43.050],
            [11.720, 43.140]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // CALIFORNIA (Napa Valley & Sonoma County AVAs)
  // ==========================================================================
  'california': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "napa-valley",
        properties: {
          id: "napa-valley",
          name: "Napa Valley AVA (Floor & Mountains)",
          category: "Cabernet Sauvignon Sovereign",
          dominantGrape: "Cabernet Sauvignon",
          color: "#4a154b",
          accent: "#d4af37",
          fillOpacity: 0.22,
          description: "World-renowned 30-mile valley flanked by the Mayacamas and Vaca mountain ranges (Oakville, Rutherford, Stag's Leap, Howell Mtn)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-122.650, 38.640], [-122.380, 38.620], [-122.220, 38.350], [-122.360, 38.220],
            [-122.500, 38.250], [-122.650, 38.640]
          ]]
        }
      },
      {
        type: "Feature",
        id: "sonoma-county",
        properties: {
          id: "sonoma-county",
          name: "Sonoma County & Russian River Valley",
          category: "Pacific Fog & Pinot Noir / Chardonnay",
          dominantGrape: "Pinot Noir, Chardonnay, Zinfandel",
          color: "#2e7d32",
          accent: "#a5d6a7",
          fillOpacity: 0.18,
          description: "Diverse microclimates influenced by Petaluma Gap marine fog and Goldridge sandy loam soils."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-123.350, 38.800], [-122.680, 38.750], [-122.450, 38.200], [-122.750, 38.150],
            [-123.100, 38.450], [-123.350, 38.800]
          ]]
        }
      },
      {
        type: "Feature",
        id: "paso-robles",
        properties: {
          id: "paso-robles",
          name: "Paso Robles & Central Coast",
          category: "Calcareous Limestone & Rhône Varieties",
          dominantGrape: "Cabernet Sauvignon, Syrah, Zinfandel",
          color: "#c0392b",
          accent: "#f5b7b1",
          fillOpacity: 0.18,
          description: "High diurnal swings and rare marine limestone benches producing opulent Cabernet and Rhône blends."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-121.050, 35.800], [-120.450, 35.780], [-120.480, 35.480], [-121.000, 35.500],
            [-121.050, 35.800]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // OREGON (Willamette Valley AVAs)
  // ==========================================================================
  'oregon': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "willamette-valley",
        properties: {
          id: "willamette-valley",
          name: "Willamette Valley (Dundee Hills & Sub-AVAs)",
          category: "Volcanic Jory Soil Pinot Noir",
          dominantGrape: "Pinot Noir & Chardonnay",
          color: "#6a1b9a",
          accent: "#e1bee7",
          fillOpacity: 0.20,
          description: "Ancient basalt volcanic flows (Jory) and marine sedimentary soils cooled by Van Duzer Corridor Pacific breezes."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-123.400, 45.450], [-122.800, 45.400], [-122.950, 44.850], [-123.450, 44.900],
            [-123.400, 45.450]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // SPAIN (Rioja Alta, Alavesa & Oriental)
  // ==========================================================================
  'spain-rioja': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "rioja-alta",
        properties: {
          id: "rioja-alta",
          name: "Rioja Alta",
          category: "Atlantic Tempranillo Benchmark",
          dominantGrape: "Tempranillo",
          color: "#800020",
          accent: "#d4af37",
          fillOpacity: 0.20,
          description: "High-altitude calcareous clay and alluvial terraces around Haro producing structural Gran Reservas."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-2.950, 42.600], [-2.650, 42.580], [-2.600, 42.380], [-2.920, 42.400],
            [-2.950, 42.600]
          ]]
        }
      },
      {
        type: "Feature",
        id: "rioja-alavesa",
        properties: {
          id: "rioja-alavesa",
          name: "Rioja Alavesa",
          category: "Basque Chalk & Terraced Slopes",
          dominantGrape: "Tempranillo",
          color: "#6c3483",
          accent: "#d7bde2",
          fillOpacity: 0.20,
          description: "Steep terraced limestone slopes sheltered by the Sierra de Cantabria mountains."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-2.750, 42.620], [-2.450, 42.580], [-2.480, 42.500], [-2.720, 42.520],
            [-2.750, 42.620]
          ]]
        }
      },
      {
        type: "Feature",
        id: "rioja-oriental",
        properties: {
          id: "rioja-oriental",
          name: "Rioja Oriental (Baja)",
          category: "Mediterranean Garnacha & Sun",
          dominantGrape: "Garnacha, Tempranillo",
          color: "#b03a2e",
          accent: "#f5b7b1",
          fillOpacity: 0.18,
          description: "Warmer, drier alluvial basin where Garnacha reaches rich, generous phenolic ripeness."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-2.400, 42.450], [-1.850, 42.300], [-1.900, 42.050], [-2.350, 42.200],
            [-2.400, 42.450]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // GERMANY (Mosel River Sub-valleys)
  // ==========================================================================
  'germany-mosel': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "bernkastel",
        properties: {
          id: "bernkastel",
          name: "Mittelmosel (Bernkastel)",
          category: "Blue Devonian Slate Steep Slopes",
          dominantGrape: "Riesling",
          color: "#117864",
          accent: "#76d7c4",
          fillOpacity: 0.20,
          description: "Vertiginous south-facing blue slate amphitheaters (Wehlener Sonnenuhr, Bernkasteler Doctor)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [6.900, 50.050], [7.200, 50.020], [7.180, 49.850], [6.880, 49.880],
            [6.900, 50.050]
          ]]
        }
      },
      {
        type: "Feature",
        id: "saar",
        properties: {
          id: "saar",
          name: "Saar Valley",
          category: "Electric High Acidity & Grey Slate",
          dominantGrape: "Riesling",
          color: "#1f618d",
          accent: "#85c1e9",
          fillOpacity: 0.20,
          description: "Cool wind corridor producing crystalline, mineral Riesling (Scharzhofberg)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [6.500, 49.700], [6.680, 49.680], [6.650, 49.550], [6.480, 49.560],
            [6.500, 49.700]
          ]]
        }
      }
    ]
  },
  // ==========================================================================
  // LOIRE VALLEY (Nantais, Anjou, Touraine, Centre-Loire Polygons)
  // ==========================================================================
  'loire-valley': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "pays-nantais",
        properties: {
          id: "pays-nantais",
          name: "Pays Nantais (Muscadet)",
          category: "Atlantic Melon de Bourgogne",
          dominantGrape: "Melon de Bourgogne",
          color: "#00897b",
          accent: "#80cbc4",
          fillOpacity: 0.28,
          description: "Atlantic coastal schist and gneiss producing saline, sur lie Muscadet Sèvre-et-Maine."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-1.750, 47.300], [-1.200, 47.280], [-1.150, 46.950], [-1.650, 46.980],
            [-1.750, 47.300]
          ]]
        }
      },
      {
        type: "Feature",
        id: "anjou-saumur",
        properties: {
          id: "anjou-saumur",
          name: "Anjou-Saumur",
          category: "Schist & Tuffeau Chenin Blanc",
          dominantGrape: "Chenin Blanc, Cabernet Franc",
          color: "#c5a059",
          accent: "#ffd54f",
          fillOpacity: 0.28,
          description: "Schist Anjou Noir and chalky tuffeau limestone Saumur (Savennières, Saumur-Champigny)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.850, 47.500], [-0.050, 47.400], [-0.100, 47.050], [-0.750, 47.100],
            [-0.850, 47.500]
          ]]
        }
      },
      {
        type: "Feature",
        id: "touraine",
        properties: {
          id: "touraine",
          name: "Touraine",
          category: "Chalk Tuffeau & Chinon Franc",
          dominantGrape: "Cabernet Franc & Chenin Blanc",
          color: "#880e4f",
          accent: "#f48fb1",
          fillOpacity: 0.28,
          description: "Epicenter of Vouvray sparkling/still Chenin and gravelly Chinon/Bourgueil Cabernet Franc."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [0.100, 47.480], [1.350, 47.450], [1.300, 47.050], [0.150, 47.080],
            [0.100, 47.480]
          ]]
        }
      },
      {
        type: "Feature",
        id: "centre-loire",
        properties: {
          id: "centre-loire",
          name: "Centre-Loire (Sancerre & Pouilly-Fumé)",
          category: "Kimmeridgian & Silex Sauvignon",
          dominantGrape: "Sauvignon Blanc & Pinot Noir",
          color: "#2e7d32",
          accent: "#a5d6a7",
          fillOpacity: 0.30,
          description: "White Caillottes limestone, Kimmeridgian Terres Blanches, and flinty Silex (Sancerre, Pouilly-Fumé)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [2.700, 47.420], [3.050, 47.380], [3.000, 47.200], [2.650, 47.250],
            [2.700, 47.420]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // RHÔNE VALLEY (Northern & Southern Rhône Polygons)
  // ==========================================================================
  'rhone': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "northern-rhone",
        properties: {
          id: "northern-rhone",
          name: "Northern Rhône",
          category: "Steep Granite Syrah & Viognier",
          dominantGrape: "Syrah & Viognier",
          color: "#4a154b",
          accent: "#d4af37",
          fillOpacity: 0.30,
          description: "Vertiginous granite terraces: Côte-Rôtie, Hermitage, Cornas, Saint-Joseph, Condrieu."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.750, 45.580], [4.920, 45.550], [4.900, 44.900], [4.700, 44.920],
            [4.750, 45.580]
          ]]
        }
      },
      {
        type: "Feature",
        id: "southern-rhone",
        properties: {
          id: "southern-rhone",
          name: "Southern Rhône",
          category: "Galets Roulés & Grenache Kingdom",
          dominantGrape: "Grenache, Syrah, Mourvèdre",
          color: "#b71c1c",
          accent: "#ef5350",
          fillOpacity: 0.30,
          description: "Sun-drenched garrigue and quartz galets roulés (Châteauneuf-du-Pape, Gigondas, Vacqueyras)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.650, 44.350], [5.200, 44.300], [5.150, 43.850], [4.600, 43.900],
            [4.650, 44.350]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // AUSTRALIA (Barossa, McLaren Vale, Margaret River, Yarra)
  // ==========================================================================
  'australia': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "barossa-valley",
        properties: {
          id: "barossa",
          name: "Barossa Valley & Eden Valley",
          category: "Ancient Vine Shiraz & Riesling",
          dominantGrape: "Shiraz & Riesling",
          color: "#800020",
          accent: "#d4af37",
          fillOpacity: 0.28,
          description: "Centenarian ungrafted Shiraz vines and high-altitude rocky Eden Valley Riesling."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [138.850, -34.380], [139.150, -34.400], [139.180, -34.720], [138.820, -34.700],
            [138.850, -34.380]
          ]]
        }
      },
      {
        type: "Feature",
        id: "mclaren-vale",
        properties: {
          id: "mclaren-vale",
          name: "McLaren Vale",
          category: "Maritime Gulf Grenache & Shiraz",
          dominantGrape: "Grenache & Shiraz",
          color: "#9c27b0",
          accent: "#ce93d8",
          fillOpacity: 0.28,
          description: "Precambrian geology cooled by St Vincent Gulf breezes."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [138.420, -35.150], [138.650, -35.160], [138.620, -35.350], [138.400, -35.320],
            [138.420, -35.150]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // CHILE (Maipo Valley & Colchagua)
  // ==========================================================================
  'chile-maipo': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "alto-maipo",
        properties: {
          id: "alto-maipo",
          name: "Alto Maipo (Andes Foothills)",
          category: "Andean Cabernet Sauvignon Benchmark",
          dominantGrape: "Cabernet Sauvignon",
          color: "#880e4f",
          accent: "#f48fb1",
          fillOpacity: 0.30,
          description: "Alluvial gravel cones at the base of the Andes with mint, eucalyptus, and cassis profile."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-70.750, -33.550], [-70.400, -33.600], [-70.480, -33.850], [-70.800, -33.800],
            [-70.750, -33.550]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // ITALY OTHER (Veneto - Valpolicella, Amarone & Etna)
  // ==========================================================================
  'italy-other': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "valpolicella-classica",
        properties: {
          id: "valpolicella",
          name: "Valpolicella Classica & Amarone DOCG",
          category: "Appassimento Corvina Realm",
          dominantGrape: "Corvina, Corvinone, Rondinella",
          color: "#4a154b",
          accent: "#ffd700",
          fillOpacity: 0.30,
          description: "Limestone valleys north of Verona producing dried-grape Amarone and Ripasso."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [10.820, 45.600], [11.050, 45.580], [11.020, 45.450], [10.800, 45.460],
            [10.820, 45.600]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // JAPAN (Yamanashi & Nagano Koshu / Merlot)
  // ==========================================================================
  'japan-chubu': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "koshu-valley",
        properties: {
          id: "koshu",
          name: "Yamanashi Katsunuma (Mt. Fuji Basin)",
          category: "Indigenous Koshu Terroir",
          dominantGrape: "Koshu & Muscat Bailey A",
          color: "#1b4f72",
          accent: "#85c1e9",
          fillOpacity: 0.28,
          description: "Volcanic alluvial soils in the shadow of Mount Fuji producing delicate, citrusy Koshu."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [138.600, 35.750], [138.800, 35.740], [138.780, 35.600], [138.580, 35.620],
            [138.600, 35.750]
          ]]
        }
      }
    ]
  }
};
