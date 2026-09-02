// GeoJSON Boundary Polygons for Global Wine Appellations & Sub-regions
// Format strictly conforms to standard GeoJSON FeatureCollection (RFC 7946: Coordinates [Longitude, Latitude])

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
          color: "#8B0000",
          accent: "#d4af37",
          fillOpacity: 0.22,
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
          color: "#D4AF37",
          accent: "#ffd700",
          fillOpacity: 0.24,
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
          color: "#9C27B0",
          accent: "#ba68c8",
          fillOpacity: 0.20,
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
          color: "#795548",
          accent: "#a1887f",
          fillOpacity: 0.22,
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
          fillOpacity: 0.18,
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
        id: "cote-de-sezanne-val-du-petit-morin",
        properties: {
          id: "cote-de-sezanne-val-du-petit-morin",
          parentSubregionId: "cote-de-sezanne",
          subregionId: "cote-de-sezanne",
          name: "Côte de Sézanne (Val du Petit Morin)",
          category: "Chalk & Clay Micro-valley",
          dominantGrape: "Pinot Meunier & Chardonnay",
          color: "#5c6bc0",
          accent: "#9fa8da",
          fillOpacity: 0.18,
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
          fillOpacity: 0.20,
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
          fillOpacity: 0.22,
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
          color: "#800020",
          accent: "#d4af37",
          fillOpacity: 0.26,
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
          fillOpacity: 0.24,
          description: "Home of Montrachet, Corton-Charlemagne, Meursault, Puligny, Volnay, and Pommard."
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
          fillOpacity: 0.20,
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
          fillOpacity: 0.20,
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
        id: "maconnais-beaujolais",
        properties: {
          id: "maconnais-beaujolais",
          parentSubregionId: "maconnais",
          subregionId: "maconnais",
          name: "Mâconnais & Beaujolais Crus",
          category: "Granite Gamay Kingdom",
          dominantGrape: "Gamay",
          color: "#880e4f",
          accent: "#f48fb1",
          fillOpacity: 0.22,
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
  // BORDEAUX (10 Subregion & Appellation Polygons)
  // ==========================================================================
  'bordeaux': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "left-bank-medoc",
        properties: {
          id: "left-bank-medoc",
          parentSubregionId: "left-bank-medoc",
          subregionId: "left-bank-medoc",
          name: "Left Bank Médoc (Bas-Médoc)",
          category: "Northern Gravel & Alluvial Terraces",
          dominantGrape: "Cabernet Sauvignon & Merlot",
          color: "#6a1b38",
          accent: "#d4af37",
          fillOpacity: 0.24,
          description: "Northern coastal sector extending along the Gironde estuary with maritime gravel terraces."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-1.150, 45.520], [-0.950, 45.480], [-0.880, 45.360], [-0.960, 45.320],
            [-1.120, 45.380], [-1.180, 45.480], [-1.150, 45.520]
          ]]
        }
      },
      {
        type: "Feature",
        id: "left-bank-medoc-haut-medoc",
        properties: {
          id: "left-bank-medoc-haut-medoc",
          parentSubregionId: "left-bank-medoc",
          subregionId: "left-bank-medoc",
          name: "Left Bank Haut-Médoc & Communal Crus",
          category: "Günzian Gravel Croupes & 1855 1st Growths",
          dominantGrape: "Cabernet Sauvignon",
          color: "#5b0e2d",
          accent: "#d4af37",
          fillOpacity: 0.26,
          description: "Deep Pyrenean gravel mounds home to Pauillac, Margaux, Saint-Julien, Saint-Estèphe, and First Growths."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.880, 45.360], [-0.740, 45.280], [-0.640, 45.160], [-0.580, 44.960],
            [-0.680, 44.920], [-0.780, 45.080], [-0.850, 45.240], [-0.960, 45.320],
            [-0.880, 45.360]
          ]]
        }
      },
      {
        type: "Feature",
        id: "graves-pessac",
        properties: {
          id: "graves-pessac",
          parentSubregionId: "graves-pessac",
          subregionId: "graves-pessac",
          name: "Graves AOC",
          category: "Pyrenean Quartz Gravel Terraces",
          dominantGrape: "Cabernet Sauvignon & Sémillon",
          color: "#8b263e",
          accent: "#e59866",
          fillOpacity: 0.22,
          description: "Ancient quartz and jasper gravel terraces along the Garonne producing smoky reds and textured dry whites."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.560, 44.700], [-0.420, 44.640], [-0.340, 44.520], [-0.420, 44.460],
            [-0.540, 44.520], [-0.620, 44.620], [-0.560, 44.700]
          ]]
        }
      },
      {
        type: "Feature",
        id: "graves-pessac-leognan",
        properties: {
          id: "graves-pessac-leognan",
          parentSubregionId: "graves-pessac",
          subregionId: "graves-pessac",
          name: "Pessac-Léognan AOC (Graves)",
          category: "Cru Classé Gravel Benches & Haut-Brion",
          dominantGrape: "Cabernet Sauvignon & Sauvignon Blanc",
          color: "#78281f",
          accent: "#ffd54f",
          fillOpacity: 0.26,
          description: "Deep Günzian gravel benches south of Bordeaux city; home to Château Haut-Brion and all 16 classified Crus."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.640, 44.850], [-0.540, 44.840], [-0.520, 44.720], [-0.600, 44.700],
            [-0.680, 44.750], [-0.640, 44.850]
          ]]
        }
      },
      {
        type: "Feature",
        id: "sauternais",
        properties: {
          id: "sauternais",
          parentSubregionId: "sauternais",
          subregionId: "sauternais",
          name: "Sauternes & Barsac AOC (Sauternais)",
          category: "Noble Rot Botrytis Kingdom & d'Yquem",
          dominantGrape: "Sémillon & Sauvignon Blanc",
          color: "#e5a93b",
          accent: "#fff176",
          fillOpacity: 0.28,
          description: "Ciron river morning mists generate Botrytis cinerea for liquid gold (Château d'Yquem, Climens, Suduiraut)."
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
        id: "right-bank-libournais-saint-emilion",
        properties: {
          id: "right-bank-libournais-saint-emilion",
          parentSubregionId: "right-bank-libournais",
          subregionId: "right-bank-libournais",
          name: "Right Bank Saint-Émilion Grand Cru",
          category: "Starfish Limestone Plateau & Ausone",
          dominantGrape: "Merlot & Cabernet Franc",
          color: "#4a154b",
          accent: "#d4af37",
          fillOpacity: 0.26,
          description: "Historic starfish limestone plateau (Calcaire à Astéries) and clay terraces (Cheval Blanc, Ausone, Pavie, Figeac)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.220, 44.930], [-0.110, 44.930], [-0.100, 44.860], [-0.180, 44.850],
            [-0.230, 44.890], [-0.220, 44.930]
          ]]
        }
      },
      {
        type: "Feature",
        id: "right-bank-libournais-pomerol",
        properties: {
          id: "right-bank-libournais-pomerol",
          parentSubregionId: "right-bank-libournais",
          subregionId: "right-bank-libournais",
          name: "Right Bank Pomerol AOC",
          category: "Smectite Blue Clay Buttonhole & Pétrus",
          dominantGrape: "Merlot",
          color: "#380d22",
          accent: "#f48fb1",
          fillOpacity: 0.28,
          description: "High plateau buttonhole (boutonnière) of smectite blue clay over iron pan (crasse de fer); home to Château Pétrus and Le Pin."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.240, 44.950], [-0.180, 44.950], [-0.170, 44.910], [-0.230, 44.910],
            [-0.240, 44.950]
          ]]
        }
      },
      {
        type: "Feature",
        id: "right-bank-libournais-fronsac",
        properties: {
          id: "right-bank-libournais-fronsac",
          parentSubregionId: "right-bank-libournais",
          subregionId: "right-bank-libournais",
          name: "Right Bank Fronsac & Canon-Fronsac AOC",
          category: "Molasse du Fronsadais Sandstone Slopes",
          dominantGrape: "Merlot & Cabernet Franc",
          color: "#673ab7",
          accent: "#b39ddb",
          fillOpacity: 0.22,
          description: "Elevated sandstone and limestone hills overlooking the Dordogne river delivering structured, savory Right Bank reds."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.300, 44.960], [-0.240, 44.950], [-0.230, 44.900], [-0.290, 44.900],
            [-0.300, 44.960]
          ]]
        }
      },
      {
        type: "Feature",
        id: "entre-deux-mers",
        properties: {
          id: "entre-deux-mers",
          parentSubregionId: "entre-deux-mers",
          subregionId: "entre-deux-mers",
          name: "Entre-Deux-Mers AOC",
          category: "Rolling Two Rivers Heartlands",
          dominantGrape: "Sauvignon Blanc & Sémillon",
          color: "#2e7d32",
          accent: "#a5d6a7",
          fillOpacity: 0.20,
          description: "Expansive fertile rolling plateau between the Garonne and Dordogne rivers renowned for crisp, citrusy dry whites."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.450, 44.860], [-0.150, 44.850], [-0.050, 44.600], [-0.350, 44.550],
            [-0.450, 44.860]
          ]]
        }
      },
      {
        type: "Feature",
        id: "cotes-de-bordeaux",
        properties: {
          id: "cotes-de-bordeaux",
          parentSubregionId: "cotes-de-bordeaux",
          subregionId: "cotes-de-bordeaux",
          name: "Côtes de Bordeaux & Blaye/Bourg",
          category: "Sunny Limestone Escarpments & Value",
          dominantGrape: "Merlot & Cabernet Franc",
          color: "#a04000",
          accent: "#edbb99",
          fillOpacity: 0.22,
          description: "Unified hillside appellations (Blaye, Bourg, Castillon, Francs) offering dynamic terroir expressions on limestone bluffs."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-0.600, 45.180], [-0.480, 45.120], [-0.020, 44.950], [-0.050, 44.840],
            [-0.450, 45.020], [-0.600, 45.180]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // RHÔNE VALLEY (10 Subregion & Appellation Polygons)
  // ==========================================================================
  'rhone': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "northern-rhone",
        properties: {
          id: "northern-rhone",
          parentSubregionId: "northern-rhone",
          subregionId: "northern-rhone",
          name: "Northern Rhône (Rhône Septentrionale)",
          category: "Steep Granite Syrah & Viognier Terraces",
          dominantGrape: "Syrah & Viognier",
          color: "#4a154b",
          accent: "#d4af37",
          fillOpacity: 0.26,
          description: "Vertiginous granite terraces along the river corridor: Côte-Rôtie, Hermitage, Cornas, Saint-Joseph, Condrieu."
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
          parentSubregionId: "southern-rhone",
          subregionId: "southern-rhone",
          name: "Southern Rhône (Rhône Méridionale)",
          category: "Sun-Drenched Garrigue & Galets Roulés",
          dominantGrape: "Grenache, Syrah, Mourvèdre",
          color: "#b71c1c",
          accent: "#ef5350",
          fillOpacity: 0.24,
          description: "Sun-soaked Mediterranean basin and quartz galets roulés: Châteauneuf-du-Pape, Gigondas, Vacqueyras, Tavel."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.650, 44.350], [5.200, 44.300], [5.150, 43.850], [4.600, 43.900],
            [4.650, 44.350]
          ]]
        }
      },
      {
        type: "Feature",
        id: "northern-rhone-cote-rotie",
        properties: {
          id: "northern-rhone-cote-rotie",
          parentSubregionId: "northern-rhone",
          subregionId: "northern-rhone",
          name: "Northern Rhône (Côte-Rôtie AOC)",
          category: "Vertiginous Mica-Schist & Gneiss Amphitheaters",
          dominantGrape: "Syrah (+ up to 20% Viognier)",
          color: "#2b0914",
          accent: "#ffd700",
          fillOpacity: 0.30,
          description: "Steep terraced slopes of Côte Brune (micaschist) and Côte Blonde (gneiss); home of Guigal 'La-Las', Jamet, Rostaing."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.780, 45.520], [4.840, 45.510], [4.820, 45.450], [4.760, 45.460],
            [4.780, 45.520]
          ]]
        }
      },
      {
        type: "Feature",
        id: "northern-rhone-condrieu",
        properties: {
          id: "northern-rhone-condrieu",
          parentSubregionId: "northern-rhone",
          subregionId: "northern-rhone",
          name: "Northern Rhône (Condrieu & Château-Grillet AOC)",
          category: "Pure Viognier on Decomposed Granite Arzelle",
          dominantGrape: "Viognier (100%)",
          color: "#d4af37",
          accent: "#fff59d",
          fillOpacity: 0.28,
          description: "100% Viognier on decomposed granite arzelle; apricot, floral blossom, and white peach elegance (Château-Grillet monopole, Vernay)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.750, 45.460], [4.810, 45.450], [4.790, 45.380], [4.730, 45.390],
            [4.750, 45.460]
          ]]
        }
      },
      {
        type: "Feature",
        id: "northern-rhone-hermitage",
        properties: {
          id: "northern-rhone-hermitage",
          parentSubregionId: "northern-rhone",
          subregionId: "northern-rhone",
          name: "Northern Rhône (Hermitage & Crozes-Hermitage AOC)",
          category: "The Sacred Granite Hill of Tain (Les Bessards)",
          dominantGrape: "Syrah, Marsanne, Roussanne",
          color: "#5b0e2d",
          accent: "#d4af37",
          fillOpacity: 0.30,
          description: "Iconic granite promontory overlooking Tain-l'Hermitage (Les Bessards, Le Méal, L'Ermite; Jean-Louis Chave, Chapoutier)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.810, 45.100], [4.900, 45.110], [4.920, 45.040], [4.820, 45.050],
            [4.810, 45.100]
          ]]
        }
      },
      {
        type: "Feature",
        id: "northern-rhone-cornas",
        properties: {
          id: "northern-rhone-cornas",
          parentSubregionId: "northern-rhone",
          subregionId: "northern-rhone",
          name: "Northern Rhône (Cornas & Saint-Péray AOC)",
          category: "100% Syrah Granite Amphitheater (Chaillot & Reynard)",
          dominantGrape: "Syrah (100%)",
          color: "#311432",
          accent: "#ba68c8",
          fillOpacity: 0.30,
          description: "South-facing natural granite bowl yielding inky, brooding, animal-and-blackberry 100% Syrah (Auguste Clape, Thierry Allemand)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.760, 44.990], [4.820, 44.980], [4.810, 44.930], [4.750, 44.940],
            [4.760, 44.990]
          ]]
        }
      },
      {
        type: "Feature",
        id: "southern-rhone-chateauneuf-du-pape",
        properties: {
          id: "southern-rhone-chateauneuf-du-pape",
          parentSubregionId: "southern-rhone",
          subregionId: "southern-rhone",
          name: "Southern Rhône (Châteauneuf-du-Pape AOC)",
          category: "Villafranchian Galets Roulés & 13 Cépages",
          dominantGrape: "Grenache, Mourvèdre, Syrah",
          color: "#78281f",
          accent: "#ffab91",
          fillOpacity: 0.28,
          description: "Quartz galets roulés boulders (Beaucastel), sandy safres (Rayas), and limestone plateau (Clos des Papes)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.780, 44.090], [4.880, 44.100], [4.890, 44.020], [4.790, 44.010],
            [4.780, 44.090]
          ]]
        }
      },
      {
        type: "Feature",
        id: "southern-rhone-gigondas",
        properties: {
          id: "southern-rhone-gigondas",
          parentSubregionId: "southern-rhone",
          subregionId: "southern-rhone",
          name: "Southern Rhône (Gigondas AOC)",
          category: "Dentelles de Montmirail Limestone Scree Slopes",
          dominantGrape: "Grenache, Syrah, Mourvèdre",
          color: "#8e24aa",
          accent: "#e1bee7",
          fillOpacity: 0.28,
          description: "High-altitude limestone scree slopes sheltered by the jagged Dentelles de Montmirail cliffs (Château de Saint Cosme)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.980, 44.220], [5.050, 44.220], [5.040, 44.160], [4.970, 44.170],
            [4.980, 44.220]
          ]]
        }
      },
      {
        type: "Feature",
        id: "southern-rhone-vacqueyras",
        properties: {
          id: "southern-rhone-vacqueyras",
          parentSubregionId: "southern-rhone",
          subregionId: "southern-rhone",
          name: "Southern Rhône (Vacqueyras & Beaumes-de-Venise AOC)",
          category: "Plateau des Garrigues & Muscat VDN",
          dominantGrape: "Grenache & Syrah",
          color: "#c2185b",
          accent: "#f48fb1",
          fillOpacity: 0.26,
          description: "Alluvial pebble terraces of the Plateau des Garrigues alongside terraced Muscat de Beaumes-de-Venise sweet wines."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.950, 44.160], [5.040, 44.150], [5.030, 44.100], [4.940, 44.110],
            [4.950, 44.160]
          ]]
        }
      },
      {
        type: "Feature",
        id: "southern-rhone-tavel",
        properties: {
          id: "southern-rhone-tavel",
          parentSubregionId: "southern-rhone",
          subregionId: "southern-rhone",
          name: "Southern Rhône (Tavel & Lirac AOC)",
          category: "100% Dry Gastronomic Rosé & Limestone Lauses",
          dominantGrape: "Grenache, Cinsault, Clairette",
          color: "#e91e63",
          accent: "#f8bbd0",
          fillOpacity: 0.28,
          description: "The King of Rosé: deep ruby-pink, dry, age-worthy, complex gastronomic rosé crafted on limestone lauses (Domaine de la Mordorée)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [4.650, 44.040], [4.740, 44.050], [4.730, 43.980], [4.640, 43.990],
            [4.650, 44.040]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // LOIRE VALLEY (5 Sector & Appellation Polygons)
  // ==========================================================================
  'loire-valley': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "pays-nantais",
        properties: {
          id: "pays-nantais",
          parentSubregionId: "pays-nantais",
          subregionId: "pays-nantais",
          name: "Pays Nantais (Atlantic Coast)",
          category: "Atlantic Schist, Orthogneiss & Sur Lie",
          dominantGrape: "Melon de Bourgogne",
          color: "#00897b",
          accent: "#80cbc4",
          fillOpacity: 0.26,
          description: "Atlantic coastal schist and orthogneiss producing saline, sur lie Muscadet Sèvre-et-Maine and Crus Clisson/Gorges."
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
          parentSubregionId: "anjou-saumur",
          subregionId: "anjou-saumur",
          name: "Anjou-Saumur (Middle Loire)",
          category: "Dark Schist Anjou Noir & White Tuffeau Saumur",
          dominantGrape: "Chenin Blanc & Cabernet Franc",
          color: "#c5a059",
          accent: "#ffd54f",
          fillOpacity: 0.26,
          description: "Schist Anjou Noir (Savennières, Coulée de Serrant) and chalky tuffeau limestone Saumur (Saumur-Champigny, Clos Rougeard)."
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
          parentSubregionId: "touraine",
          subregionId: "touraine",
          name: "Touraine (The Garden of France)",
          category: "Craie Tuffeau Chalk & Chinon Franc",
          dominantGrape: "Cabernet Franc & Chenin Blanc",
          color: "#880e4f",
          accent: "#f48fb1",
          fillOpacity: 0.26,
          description: "Epicenter of Vouvray still/sparkling Chenin and gravelly/tuffeau Chinon & Bourgueil Cabernet Franc (Domaine Huet, Bernard Baudry)."
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
          parentSubregionId: "centre-loire",
          subregionId: "centre-loire",
          name: "Centre-Loire (Upper Loire Basin)",
          category: "Kimmeridgian Terres Blanches & Silex Flint",
          dominantGrape: "Sauvignon Blanc & Pinot Noir",
          color: "#2e7d32",
          accent: "#a5d6a7",
          fillOpacity: 0.26,
          description: "White Caillottes limestone, Kimmeridgian Terres Blanches, and flinty Silex across Sancerre, Pouilly-Fumé, Menetou-Salon, Quincy, Reuilly."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [2.300, 47.480], [3.150, 47.420], [3.100, 47.050], [2.250, 47.100],
            [2.300, 47.480]
          ]]
        }
      },
      {
        type: "Feature",
        id: "centre-loire-sancerre-pouilly",
        properties: {
          id: "centre-loire-sancerre-pouilly",
          parentSubregionId: "centre-loire",
          subregionId: "centre-loire",
          name: "Centre-Loire (Sancerre & Pouilly-Fumé AOC)",
          category: "Caillottes, Terres Blanches & Silex Apex",
          dominantGrape: "Sauvignon Blanc (100%)",
          color: "#1b5e20",
          accent: "#81c784",
          fillOpacity: 0.30,
          description: "Laser-focused limestone and flint hillsides producing world benchmark Sauvignon Blanc (Didier Dagueneau Silex, Vacheron, Cotat)."
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
  // PIEDMONT (8 Subregion & DOCG Polygons)
  // ==========================================================================
  'piedmont': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "barolo-langhe",
        properties: {
          id: "barolo-langhe",
          parentSubregionId: "barolo-langhe",
          subregionId: "barolo-langhe",
          name: "Barolo DOCG & Langhe Nebbiolo",
          category: "The King of Wines & 181 MGAs",
          dominantGrape: "Nebbiolo (100%)",
          color: "#800020",
          accent: "#d4af37",
          fillOpacity: 0.28,
          description: "Tortonian calcareous marls (La Morra, Barolo) and Helvetian sandstone (Serralunga, Monforte); home to Conterno Monfortino and Bartolo Mascarello."
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
        id: "barbaresco-langhe",
        properties: {
          id: "barbaresco-langhe",
          parentSubregionId: "barbaresco-langhe",
          subregionId: "barbaresco-langhe",
          name: "Barbaresco DOCG (4 Communes)",
          category: "The Queen of Nebbiolo & Asili/Rabajà",
          dominantGrape: "Nebbiolo (100%)",
          color: "#a93226",
          accent: "#f5b7b1",
          fillOpacity: 0.26,
          description: "Sant'Agata blue-grey marls along the Tanaro river producing silky, ethereal, perfumed Nebbiolo (Gaja, Bruno Giacosa, Produttori)."
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
        id: "roero-alto-monferrato-roero",
        properties: {
          id: "roero-alto-monferrato-roero",
          parentSubregionId: "roero-alto-monferrato",
          subregionId: "roero-alto-monferrato",
          name: "Roero, Monferrato & Gavi (Roero DOCG)",
          category: "Pliocene Marine Sands & Arneis / Nebbiolo",
          dominantGrape: "Arneis & Nebbiolo",
          color: "#e67e22",
          accent: "#f9e79f",
          fillOpacity: 0.24,
          description: "Pliocene yellow marine sands and fossil seashell cliffs (Rocche) across the northern bank of the Tanaro river."
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
        id: "roero-alto-monferrato-gavi",
        properties: {
          id: "roero-alto-monferrato-gavi",
          parentSubregionId: "roero-alto-monferrato",
          subregionId: "roero-alto-monferrato",
          name: "Roero, Monferrato & Gavi (Gavi DOCG)",
          category: "Terre Bianche Calcareous White Wine Apex",
          dominantGrape: "Cortese (100%)",
          color: "#0097a7",
          accent: "#80deea",
          fillOpacity: 0.24,
          description: "White chalky clay-limestone soils near the Ligurian Apennines producing mineral-etched, crisp Cortese (La Scolca)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [8.720, 44.740], [8.880, 44.730], [8.860, 44.640], [8.700, 44.650],
            [8.720, 44.740]
          ]]
        }
      },
      {
        type: "Feature",
        id: "roero-alto-monferrato-barbera",
        properties: {
          id: "roero-alto-monferrato-barbera",
          parentSubregionId: "roero-alto-monferrato",
          subregionId: "roero-alto-monferrato",
          name: "Roero, Monferrato & Gavi (Barbera d'Asti & Nizza DOCG)",
          category: "Astian Sandy Marls & Acid-Driven Masterpieces",
          dominantGrape: "Barbera",
          color: "#6c3483",
          accent: "#d7bde2",
          fillOpacity: 0.22,
          description: "Rolling Monferrato hills renowned for intense, dark-berried, high-acid Barbera and sweet sparkling Moscato d'Asti (Braida)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [8.080, 45.050], [8.450, 45.020], [8.500, 44.700], [8.120, 44.750],
            [8.080, 45.050]
          ]]
        }
      },
      {
        type: "Feature",
        id: "barolo-langhe-dogliani",
        properties: {
          id: "barolo-langhe-dogliani",
          parentSubregionId: "barolo-langhe",
          subregionId: "barolo-langhe",
          name: "Barolo & Langhe (Dogliani DOCG)",
          category: "High-Altitude Limestone Dolcetto Apex",
          dominantGrape: "Dolcetto (100%)",
          color: "#4a148c",
          accent: "#ba68c8",
          fillOpacity: 0.24,
          description: "High-elevation southern Langhe hills delivering dark, brooding, structured, age-worthy Dolcetto (San Fereolo)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [7.880, 44.570], [7.980, 44.560], [7.960, 44.480], [7.860, 44.490],
            [7.880, 44.570]
          ]]
        }
      },
      {
        type: "Feature",
        id: "alta-langa-sparkling",
        properties: {
          id: "alta-langa-sparkling",
          parentSubregionId: "alta-langa-sparkling",
          subregionId: "alta-langa-sparkling",
          name: "Alta Langa DOCG (Metodo Classico)",
          category: "High-Elevation Metodo Classico (250m–600m)",
          dominantGrape: "Pinot Nero & Chardonnay",
          color: "#b8860b",
          accent: "#ffd700",
          fillOpacity: 0.22,
          description: "Forested high-altitude Langhe hills dedicated to traditional method vintage sparkling wines aged 30-36+ months on lees."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [8.000, 44.600], [8.250, 44.580], [8.220, 44.420], [7.970, 44.440],
            [8.000, 44.600]
          ]]
        }
      },
      {
        type: "Feature",
        id: "roero-alto-monferrato-alto-piemonte",
        properties: {
          id: "roero-alto-monferrato-alto-piemonte",
          parentSubregionId: "roero-alto-monferrato",
          subregionId: "roero-alto-monferrato",
          name: "Roero, Monferrato & Alto Piemonte (Gattinara/Ghemme)",
          category: "Volcanic Porphyry & Alpine Nebbiolo (Spanna)",
          dominantGrape: "Nebbiolo (Spanna)",
          color: "#c0392b",
          accent: "#f5b7b1",
          fillOpacity: 0.26,
          description: "Ancient volcanic porphyry and Alpine foothills producing chiseled, mineral-driven Spanna (Antoniolo, Nervi-Conterno)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [8.150, 45.720], [8.420, 45.700], [8.400, 45.520], [8.120, 45.540],
            [8.150, 45.720]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // TUSCANY (6 Subregion & Appellation Polygons)
  // ==========================================================================
  'tuscany': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "chianti-classico",
        properties: {
          id: "chianti-classico",
          parentSubregionId: "chianti-classico",
          subregionId: "chianti-classico",
          name: "Chianti Classico DOCG (11 UGAs)",
          category: "Galestro Schist & Gallo Nero Heartland",
          dominantGrape: "Sangiovese (80-100%)",
          color: "#900C3F",
          accent: "#d4af37",
          fillOpacity: 0.26,
          description: "Stony Galestro schist and Alberese limestone hills between Florence and Siena (Panzano, Radda, Gaiole, Castellina, Castelnuovo)."
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
          parentSubregionId: "montalcino",
          subregionId: "montalcino",
          name: "Montalcino (Brunello di Montalcino DOCG)",
          category: "100% Sangiovese Grosso Sovereign Hill",
          dominantGrape: "Sangiovese Grosso (100%)",
          color: "#581845",
          accent: "#ffc300",
          fillOpacity: 0.28,
          description: "Isolated hill south of Siena producing powerful, structured 100% Sangiovese Grosso aged 5+ years (Biondi-Santi, Soldera, Poggio di Sotto)."
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
        id: "bolgheri-coastal",
        properties: {
          id: "bolgheri-coastal",
          parentSubregionId: "bolgheri-coastal",
          subregionId: "bolgheri-coastal",
          name: "Bolgheri & Coastal Maremma (Bolgheri DOC)",
          category: "Tyrrhenian Maritime Gravel & Sassicaia",
          dominantGrape: "Cabernet Sauvignon, Merlot, Cabernet Franc",
          color: "#1b4f72",
          accent: "#85c1e9",
          fillOpacity: 0.26,
          description: "Tyrrhenian coastal gravel terraces that gave birth to the Super Tuscan revolution: Sassicaia, Ornellaia, and Masseto."
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
        id: "montepulciano-carmignano",
        properties: {
          id: "montepulciano-carmignano",
          parentSubregionId: "montepulciano-carmignano",
          subregionId: "montepulciano-carmignano",
          name: "Montepulciano & Carmignano (Vino Nobile DOCG)",
          category: "Prugnolo Gentile & Historic Hillside Town",
          dominantGrape: "Sangiovese (Prugnolo Gentile)",
          color: "#7b241c",
          accent: "#f1948a",
          fillOpacity: 0.24,
          description: "Historic Renaissance hillside town producing aromatic, velvety Sangiovese blends aged in large Slavonian oak casks (Poliziano, Boscarelli)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [11.720, 43.140], [11.850, 43.130], [11.820, 43.040], [11.700, 43.050],
            [11.720, 43.140]
          ]]
        }
      },
      {
        type: "Feature",
        id: "san-gimignano-val-d-elsa",
        properties: {
          id: "san-gimignano-val-d-elsa",
          parentSubregionId: "san-gimignano-val-d-elsa",
          subregionId: "san-gimignano-val-d-elsa",
          name: "San Gimignano & Central Valleys (Vernaccia DOCG)",
          category: "Historic Medieval Towered White Wine (1966 DOC)",
          dominantGrape: "Vernaccia (85%+)",
          color: "#e67e22",
          accent: "#f9e79f",
          fillOpacity: 0.24,
          description: "Yellow Pliocene sandstone hills surrounding the medieval towered town; crisp, flinty, almond-laced Vernaccia."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [11.000, 43.520], [11.100, 43.510], [11.080, 43.420], [10.980, 43.430],
            [11.000, 43.520]
          ]]
        }
      },
      {
        type: "Feature",
        id: "bolgheri-coastal-maremma",
        properties: {
          id: "bolgheri-coastal-maremma",
          parentSubregionId: "bolgheri-coastal",
          subregionId: "bolgheri-coastal",
          name: "Bolgheri & Coastal Maremma (Maremma Toscana)",
          category: "Wild Mediterranean Maritime Hills & Volcanic Tuff",
          dominantGrape: "Sangiovese (Morellino), Vermentino, Cabernets",
          color: "#1b5e20",
          accent: "#a5d6a7",
          fillOpacity: 0.20,
          description: "Sun-drenched coastal hills and volcanic tuff producing generous, ripe Morellino di Scansano and Mediterranean blends."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [10.850, 42.950], [11.600, 42.920], [11.550, 42.450], [11.000, 42.480],
            [10.850, 42.950]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // CALIFORNIA (6 AVA Subregion Polygons)
  // ==========================================================================
  'california': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "napa-valley-floor",
        properties: {
          id: "napa-valley-floor",
          parentSubregionId: "napa-valley-floor",
          subregionId: "napa-valley-floor",
          name: "Napa Valley Floor AVAs",
          category: "Cabernet Sauvignon Sovereign & 16 Sub-AVAs",
          dominantGrape: "Cabernet Sauvignon",
          color: "#4a154b",
          accent: "#d4af37",
          fillOpacity: 0.28,
          description: "World-renowned 30-mile valley flanked by Mayacamas and Vaca ranges (Oakville, Rutherford, Stags Leap, Howell Mtn)."
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
        id: "sonoma-coast-rrv",
        properties: {
          id: "sonoma-coast-rrv",
          parentSubregionId: "sonoma-coast-rrv",
          subregionId: "sonoma-coast-rrv",
          name: "Sonoma Coast & Russian River Valley",
          category: "Goldridge Loam, Pacific Fog & Pinot/Chard",
          dominantGrape: "Pinot Noir, Chardonnay, Zinfandel",
          color: "#2e7d32",
          accent: "#a5d6a7",
          fillOpacity: 0.24,
          description: "Diverse microclimates influenced by Petaluma Gap marine fog and Goldridge sandy loam (Kistler, Rochioli, Littorai)."
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
        id: "central-coast-paso",
        properties: {
          id: "central-coast-paso",
          parentSubregionId: "central-coast-paso",
          subregionId: "central-coast-paso",
          name: "Central Coast & Paso Robles AVA",
          category: "Expansive Pacific Maritime Valleys",
          dominantGrape: "Chardonnay, Pinot Noir, Syrah, Cabernet",
          color: "#0288d1",
          accent: "#81d4fa",
          fillOpacity: 0.18,
          description: "Spanning from Monterey through San Luis Obispo and Santa Barbara cooled by direct Pacific Ocean airflow."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-122.000, 37.000], [-120.500, 36.500], [-119.500, 34.400], [-120.600, 34.500],
            [-122.000, 37.000]
          ]]
        }
      },
      {
        type: "Feature",
        id: "central-coast-paso-robles",
        properties: {
          id: "central-coast-paso-robles",
          parentSubregionId: "central-coast-paso",
          subregionId: "central-coast-paso",
          name: "Central Coast (Paso Robles AVA)",
          category: "Marine Limestone Benches & Opulent Rhône / Cabernets",
          dominantGrape: "Cabernet Sauvignon, Syrah, Zinfandel",
          color: "#c0392b",
          accent: "#f5b7b1",
          fillOpacity: 0.26,
          description: "High diurnal temperature swings and rare marine limestone benches producing opulent Cabernet and Rhône blends (Saxum, Tablas Creek)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-121.050, 35.800], [-120.450, 35.780], [-120.480, 35.480], [-121.000, 35.500],
            [-121.050, 35.800]
          ]]
        }
      },
      {
        type: "Feature",
        id: "santa-cruz-mountains",
        properties: {
          id: "santa-cruz-mountains",
          parentSubregionId: "santa-cruz-mountains",
          subregionId: "santa-cruz-mountains",
          name: "Santa Cruz Mountains AVA",
          category: "High Elevation Coastal Ridge & Ridge Monte Bello",
          dominantGrape: "Cabernet Sauvignon & Chardonnay",
          color: "#512da8",
          accent: "#b39ddb",
          fillOpacity: 0.26,
          description: "Forested coastal mountain ridge producing structured, mineral, European-style Cabernets that age for half a century (Ridge Monte Bello, Mount Eden)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-122.250, 37.350], [-121.850, 37.200], [-121.800, 36.950], [-122.200, 37.050],
            [-122.250, 37.350]
          ]]
        }
      },
      {
        type: "Feature",
        id: "central-coast-paso-sta-rita-hills",
        properties: {
          id: "central-coast-paso-sta-rita-hills",
          parentSubregionId: "central-coast-paso",
          subregionId: "central-coast-paso",
          name: "Central Coast (Sta. Rita Hills AVA)",
          category: "Transverse East-West Maritime Pacific Corridor",
          dominantGrape: "Pinot Noir & Chardonnay",
          color: "#d81b60",
          accent: "#f48fb1",
          fillOpacity: 0.28,
          description: "Rare east-west transverse maritime corridor funneling Pacific fog and winds onto diatomaceous earth slopes (Domaine de la Côte, Sea Smoke)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-120.550, 34.680], [-120.350, 34.670], [-120.340, 34.580], [-120.540, 34.590],
            [-120.550, 34.680]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // OREGON (7 Nested AVA Polygons)
  // ==========================================================================
  'oregon': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "dundee-hills-willamette",
        properties: {
          id: "dundee-hills-willamette",
          parentSubregionId: "dundee-hills",
          subregionId: "dundee-hills",
          name: "Willamette Valley (Dundee Hills & Envelope)",
          category: "45th Parallel Cool-Climate Pinot Noir Kingdom",
          dominantGrape: "Pinot Noir & Chardonnay",
          color: "#6a1b9a",
          accent: "#e1bee7",
          fillOpacity: 0.18,
          description: "Valley basin nestled between Coast Range and Cascades on the same 45th parallel as Burgundy."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-123.400, 45.450], [-122.800, 45.400], [-122.950, 44.850], [-123.450, 44.900],
            [-123.400, 45.450]
          ]]
        }
      },
      {
        type: "Feature",
        id: "dundee-hills",
        properties: {
          id: "dundee-hills",
          parentSubregionId: "dundee-hills",
          subregionId: "dundee-hills",
          name: "Dundee Hills AVA",
          category: "Red Volcanic Jory Clay Loam & Silky Red Cherry",
          dominantGrape: "Pinot Noir (100%)",
          color: "#b71c1c",
          accent: "#ef5350",
          fillOpacity: 0.30,
          description: "Iron-rich red volcanic Jory clay loam producing silky, floral red cherry and baking spice Pinot Noir (Domaine Drouhin, Eyrie, Beaux Frères)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-123.060, 45.320], [-122.960, 45.310], [-122.980, 45.240], [-123.080, 45.250],
            [-123.060, 45.320]
          ]]
        }
      },
      {
        type: "Feature",
        id: "eola-amity-hills",
        properties: {
          id: "eola-amity-hills",
          parentSubregionId: "eola-amity-hills",
          subregionId: "eola-amity-hills",
          name: "Eola-Amity Hills AVA",
          category: "Van Duzer Marine Gales & Shallow Nekia Basalt",
          dominantGrape: "Pinot Noir & Chardonnay",
          color: "#1565c0",
          accent: "#90caf9",
          fillOpacity: 0.28,
          description: "Direct path of the cool Van Duzer oceanic winds delivering piercing acidity, thick skins, and saline tension (Cristom, Walter Scott)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-123.160, 45.150], [-123.040, 45.140], [-123.060, 44.980], [-123.180, 44.990],
            [-123.160, 45.150]
          ]]
        }
      },
      {
        type: "Feature",
        id: "ribbon-ridge-yamhill",
        properties: {
          id: "ribbon-ridge-yamhill",
          parentSubregionId: "ribbon-ridge-yamhill",
          subregionId: "ribbon-ridge-yamhill",
          name: "Ribbon Ridge & Yamhill AVA",
          category: "Ancient Marine Sedimentary Willakenzie Sandstone",
          dominantGrape: "Pinot Noir & Chardonnay",
          color: "#4a148c",
          accent: "#ce93d8",
          fillOpacity: 0.30,
          description: "Smallest nested AVA; ancient ocean floor Willakenzie sandstone yielding dark, broody black fruits and crushed rock (Beaux Frères, Brick House)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-123.090, 45.370], [-123.040, 45.360], [-123.050, 45.320], [-123.100, 45.330],
            [-123.090, 45.370]
          ]]
        }
      },
      {
        type: "Feature",
        id: "ribbon-ridge-yamhill-carlton",
        properties: {
          id: "ribbon-ridge-yamhill-carlton",
          parentSubregionId: "ribbon-ridge-yamhill",
          subregionId: "ribbon-ridge-yamhill",
          name: "Ribbon Ridge & Yamhill-Carlton AVA",
          category: "Coarse Marine Sediment, Dark Fruit & Savory Spice",
          dominantGrape: "Pinot Noir",
          color: "#37474f",
          accent: "#90a4ae",
          fillOpacity: 0.26,
          description: "Horseshoe ridge of coarse marine sediment surrounding Yamhill and Carlton (Shea Vineyard, Ken Wright, Soter)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-123.240, 45.380], [-123.100, 45.370], [-123.110, 45.280], [-123.230, 45.290],
            [-123.240, 45.380]
          ]]
        }
      },
      {
        type: "Feature",
        id: "mcminnville-ava",
        properties: {
          id: "mcminnville-ava",
          parentSubregionId: "mcminnville-ava",
          subregionId: "mcminnville-ava",
          name: "McMinnville AVA",
          category: "Coast Range Rain Shadow & Uplifted Marine Basalt",
          dominantGrape: "Pinot Noir & Pinot Blanc",
          color: "#00695c",
          accent: "#80cbc4",
          fillOpacity: 0.26,
          description: "Southwestern foothills in the Coast Range rain shadow producing muscular, savory, deeply pigmented Pinot Noirs."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-123.340, 45.260], [-123.220, 45.250], [-123.240, 45.160], [-123.350, 45.170],
            [-123.340, 45.260]
          ]]
        }
      },
      {
        type: "Feature",
        id: "chehalem-mountains",
        properties: {
          id: "chehalem-mountains",
          parentSubregionId: "chehalem-mountains",
          subregionId: "chehalem-mountains",
          name: "Chehalem Mountains & Laurelwood AVA",
          category: "Highest Elevation Ridge & Windblown Loess (Laurelwood)",
          dominantGrape: "Pinot Noir & Chardonnay",
          color: "#e65100",
          accent: "#ffb74d",
          fillOpacity: 0.26,
          description: "Highest elevation range in the northern Willamette with complex geological strata of windblown silty loess and volcanic basalt (Ponzi)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-123.020, 45.440], [-122.860, 45.410], [-122.900, 45.330], [-123.040, 45.350],
            [-123.020, 45.440]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // SPAIN (Rioja Alta, Alavesa, Ribera del Duero & Priorat)
  // ==========================================================================
  'spain-rioja': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "rioja-alta",
        properties: {
          id: "rioja-alta",
          parentSubregionId: "rioja-alta",
          subregionId: "rioja-alta",
          name: "Rioja Alta (Western High Rioja)",
          category: "Atlantic Tempranillo Benchmark",
          dominantGrape: "Tempranillo",
          color: "#800020",
          accent: "#d4af37",
          fillOpacity: 0.22,
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
          parentSubregionId: "rioja-alavesa",
          subregionId: "rioja-alavesa",
          name: "Rioja Alavesa (Basque Rioja)",
          category: "Basque Chalk & Terraced Slopes",
          dominantGrape: "Tempranillo",
          color: "#6c3483",
          accent: "#d7bde2",
          fillOpacity: 0.22,
          description: "Steep terraced limestone slopes sheltered by the Sierra de Cantabria mountains (Las Beatas)."
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
        id: "ribera-del-duero",
        properties: {
          id: "ribera-del-duero",
          parentSubregionId: "ribera-del-duero",
          subregionId: "ribera-del-duero",
          name: "Ribera del Duero (Castilian High Plateau)",
          category: "High Continental Tinto Fino & Limestone",
          dominantGrape: "Tinto Fino / Tempranillo",
          color: "#4a154b",
          accent: "#ffd700",
          fillOpacity: 0.25,
          description: "Castilian high plateau along the Duero River crafting monumental, ageworthy Tinto Fino (Vega Sicilia, Pingus)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-4.350, 41.720], [-3.450, 41.700], [-3.480, 41.550], [-4.380, 41.580],
            [-4.350, 41.720]
          ]]
        }
      },
      {
        type: "Feature",
        id: "priorat",
        properties: {
          id: "priorat",
          parentSubregionId: "priorat",
          subregionId: "priorat",
          name: "Priorat (DOQ Priorat & Llicorella Slate)",
          category: "Devonian Llicorella Slate Amphitheaters",
          dominantGrape: "Garnacha Tinta & Cariñena",
          color: "#b03a2e",
          accent: "#f5b7b1",
          fillOpacity: 0.26,
          description: "Steep Llicorella slate terraces producing heroic, mineral-soaked old-vine Garnacha and Cariñena (L'Ermita, Clos Mogador)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [0.700, 41.280], [0.920, 41.260], [0.900, 41.120], [0.680, 41.140],
            [0.700, 41.280]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // GERMANY (Mosel, Saar, Rheingau & Nahe Sub-valleys)
  // ==========================================================================
  'germany-mosel': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "mittelmosel",
        properties: {
          id: "mittelmosel",
          parentSubregionId: "mittelmosel",
          subregionId: "mittelmosel",
          name: "Middle Mosel (Mittelmosel / Bernkastel)",
          category: "Blue Devonian Slate Steep Slopes",
          dominantGrape: "Riesling",
          color: "#117864",
          accent: "#76d7c4",
          fillOpacity: 0.24,
          description: "Vertiginous south-facing blue slate amphitheaters (Wehlener Sonnenuhr, Berncasteler Doctor, Ürziger Würzgarten, Erdener Prälat)."
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
        id: "saar-ruwer",
        properties: {
          id: "saar-ruwer",
          parentSubregionId: "saar-ruwer",
          subregionId: "saar-ruwer",
          name: "Saar & Ruwer Tributary Valleys",
          category: "Electric High Acidity & Grey Slate",
          dominantGrape: "Riesling",
          color: "#1f618d",
          accent: "#85c1e9",
          fillOpacity: 0.24,
          description: "Cool wind corridor producing crystalline, mineral Riesling (Scharzhofberg)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [6.500, 49.700], [6.680, 49.680], [6.650, 49.550], [6.480, 49.560],
            [6.500, 49.700]
          ]]
        }
      },
      {
        type: "Feature",
        id: "rheingau",
        properties: {
          id: "rheingau",
          parentSubregionId: "rheingau",
          subregionId: "rheingau",
          name: "Rheingau & Central Rhine",
          category: "Taunus Quartzite & South River Slopes",
          dominantGrape: "Riesling & Spätburgunder",
          color: "#b8860b",
          accent: "#ffd700",
          fillOpacity: 0.24,
          description: "Pure south-facing Rhine terraces backed by the Taunus mountains producing aristocratic dry Grosses Gewächs and late harvest botrytis wines."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [7.850, 50.060], [8.300, 50.040], [8.320, 49.950], [7.880, 49.970],
            [7.850, 50.060]
          ]]
        }
      },
      {
        type: "Feature",
        id: "nahe-pfalz",
        properties: {
          id: "nahe-pfalz",
          parentSubregionId: "nahe-pfalz",
          subregionId: "nahe-pfalz",
          name: "Nahe & Pfalz (Mittelhaardt)",
          category: "Volcanic Porphyry, Basalt & Limestone",
          dominantGrape: "Riesling",
          color: "#7b1fa2",
          accent: "#ba68c8",
          fillOpacity: 0.24,
          description: "Dynamic geological mosaic of volcanic rhyolite, porphyry, and limestone crafting powerful dry Grosses Gewächs (Dönnhoff Hermannshöhle, Keller G-Max)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [7.650, 49.920], [8.250, 49.900], [8.280, 49.300], [7.680, 49.320],
            [7.650, 49.920]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // AUSTRALIA (Barossa, Eden Valley, Margaret River, Hunter, Coonawarra)
  // ==========================================================================
  'australia': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "barossa-valley",
        properties: {
          id: "barossa-valley",
          parentSubregionId: "barossa-valley",
          subregionId: "barossa-valley",
          name: "Barossa Valley (South Australia)",
          category: "Ancient Pre-Phylloxera Shiraz (1843)",
          dominantGrape: "Shiraz & Grenache",
          color: "#800020",
          accent: "#d4af37",
          fillOpacity: 0.26,
          description: "Centenarian ungrafted Shiraz vines dating to 1843 on deep ironstone red clay (Penfolds Grange, Torbreck RunRig)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [138.800, -34.380], [139.050, -34.400], [139.080, -34.680], [138.780, -34.660],
            [138.800, -34.380]
          ]]
        }
      },
      {
        type: "Feature",
        id: "eden-valley",
        properties: {
          id: "eden-valley",
          parentSubregionId: "eden-valley",
          subregionId: "eden-valley",
          name: "Eden Valley & High Eden",
          category: "Cool-Climate Schist Riesling & Old Vine Shiraz",
          dominantGrape: "Riesling & Shiraz",
          color: "#1f618d",
          accent: "#85c1e9",
          fillOpacity: 0.24,
          description: "Elevated windswept Barossa Ranges on mica schist and quartz; home to Henschke Hill of Grace and electric dry Riesling."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [139.050, -34.420], [139.250, -34.440], [139.280, -34.780], [139.080, -34.760],
            [139.050, -34.420]
          ]]
        }
      },
      {
        type: "Feature",
        id: "margaret-river",
        properties: {
          id: "margaret-river",
          parentSubregionId: "margaret-river",
          subregionId: "margaret-river",
          name: "Margaret River (Western Australia)",
          category: "Maritime Laterite Gravel Cabernet & Chardonnay",
          dominantGrape: "Cabernet Sauvignon & Chardonnay",
          color: "#117864",
          accent: "#76d7c4",
          fillOpacity: 0.24,
          description: "Leeuwin-Naturaliste lateritic ironstone ridge cooled by the Indian and Southern Oceans (Leeuwin Art Series, Cullen)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [114.950, -33.650], [115.200, -33.680], [115.220, -34.350], [114.980, -34.320],
            [114.950, -33.650]
          ]]
        }
      },
      {
        type: "Feature",
        id: "hunter-valley",
        properties: {
          id: "hunter-valley",
          parentSubregionId: "hunter-valley",
          subregionId: "hunter-valley",
          name: "Hunter Valley (New South Wales)",
          category: "Ancient Alluvial Flats & Age-Worthy Semillon",
          dominantGrape: "Semillon & Shiraz",
          color: "#f57f17",
          accent: "#fff59d",
          fillOpacity: 0.24,
          description: "Australia's oldest wine region producing un-oaked, low-alcohol, ageworthy Semillon (Tyrrell's Vat 1)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [151.150, -32.650], [151.450, -32.680], [151.480, -32.950], [151.180, -32.920],
            [151.150, -32.650]
          ]]
        }
      },
      {
        type: "Feature",
        id: "coonawarra",
        properties: {
          id: "coonawarra",
          parentSubregionId: "coonawarra",
          subregionId: "coonawarra",
          name: "Coonawarra & Limestone Coast",
          category: "Terra Rossa Red Clay over Limestone",
          dominantGrape: "Cabernet Sauvignon",
          color: "#880e4f",
          accent: "#f48fb1",
          fillOpacity: 0.26,
          description: "Famous 15km cigar-shaped ridge of vibrant red terra rossa over Gambier limestone (Wynns John Riddoch)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [140.750, -37.200], [140.900, -37.200], [140.920, -37.420], [140.780, -37.420],
            [140.750, -37.200]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // CHILE (Alto Maipo, Colchagua Apalta, Casablanca, Peumo)
  // ==========================================================================
  'chile-maipo': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "alto-maipo",
        properties: {
          id: "alto-maipo",
          parentSubregionId: "alto-maipo",
          subregionId: "alto-maipo",
          name: "Alto Maipo (Puente Alto & Pirque)",
          category: "Andean Cabernet Sauvignon Benchmark",
          dominantGrape: "Cabernet Sauvignon & Carmenère",
          color: "#880e4f",
          accent: "#f48fb1",
          fillOpacity: 0.28,
          description: "Third alluvial gravel terrace at the base of the Andes with mint, eucalyptus, and cassis profile (Almaviva, Don Melchor, Viñedo Chadwick)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-70.750, -33.550], [-70.400, -33.600], [-70.480, -33.850], [-70.800, -33.800],
            [-70.750, -33.550]
          ]]
        }
      },
      {
        type: "Feature",
        id: "colchagua-apalta",
        properties: {
          id: "colchagua-apalta",
          parentSubregionId: "colchagua-apalta",
          subregionId: "colchagua-apalta",
          name: "Colchagua Valley & Apalta Amphitheater",
          category: "Decomposed Pink Granite & Opulent Carmenère",
          dominantGrape: "Carmenère, Cabernet Sauvignon, Syrah",
          color: "#4a154b",
          accent: "#ffd700",
          fillOpacity: 0.26,
          description: "Horseshoe-shaped granite amphitheater sheltered from coastal extremes (Clos Apalta, Montes Purple Angel)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-71.500, -34.450], [-71.150, -34.480], [-71.200, -34.750], [-71.550, -34.720],
            [-71.500, -34.450]
          ]]
        }
      },
      {
        type: "Feature",
        id: "casablanca-san-antonio",
        properties: {
          id: "casablanca-san-antonio",
          parentSubregionId: "casablanca-san-antonio",
          subregionId: "casablanca-san-antonio",
          name: "Casablanca & San Antonio / Leyda Valley",
          category: "Pacific Humboldt Current Fog & Coastal Whites",
          dominantGrape: "Sauvignon Blanc, Chardonnay, Pinot Noir",
          color: "#117864",
          accent: "#76d7c4",
          fillOpacity: 0.24,
          description: "Cool coastal valleys bathed in morning marine fog (Camanchaca) producing electric Sauvignon Blanc and mineral Chardonnay."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-71.600, -33.150], [-71.250, -33.200], [-71.300, -33.700], [-71.650, -33.650],
            [-71.600, -33.150]
          ]]
        }
      },
      {
        type: "Feature",
        id: "peumo-cachapoal",
        properties: {
          id: "peumo-cachapoal",
          parentSubregionId: "peumo-cachapoal",
          subregionId: "peumo-cachapoal",
          name: "Peumo & Cachapoal Valley",
          category: "Deep Alluvial Clay Sanctuary for Carmenère",
          dominantGrape: "Carmenère & Cabernet Sauvignon",
          color: "#c0392b",
          accent: "#f5b7b1",
          fillOpacity: 0.25,
          description: "Moisture-retaining clay river terraces where late-ripening ungrafted Carmenère reaches supreme physiological maturity (Carmín de Peumo, Terrunyo)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [-71.350, -34.100], [-70.950, -34.120], [-71.000, -34.400], [-71.400, -34.380],
            [-71.350, -34.100]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // ITALY OTHER (5 Subregion & DOCG Polygons)
  // ==========================================================================
  'italy-other': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "veneto-valpolicella",
        properties: {
          id: "veneto-valpolicella",
          parentSubregionId: "veneto-valpolicella",
          subregionId: "veneto-valpolicella",
          name: "Valpolicella & Amarone (Veneto)",
          category: "Appassimento Corvina & Basalt Garganega",
          dominantGrape: "Corvina, Corvinone, Garganega",
          color: "#4a154b",
          accent: "#ffd700",
          fillOpacity: 0.26,
          description: "Limestone valleys north of Verona producing dried-grape Amarone and basalt volcanic Soave (Quintarelli, Pieropan)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [10.820, 45.600], [11.350, 45.580], [11.300, 45.380], [10.800, 45.420],
            [10.820, 45.600]
          ]]
        }
      },
      {
        type: "Feature",
        id: "sicily-etna",
        properties: {
          id: "sicily-etna",
          parentSubregionId: "sicily-etna",
          subregionId: "sicily-etna",
          name: "Sicily & Mount Etna (Etna DOC)",
          category: "High-Altitude Volcanic Ash & Contrade Crus",
          dominantGrape: "Nerello Mascalese & Carricante",
          color: "#c0392b",
          accent: "#f5b7b1",
          fillOpacity: 0.28,
          description: "High-altitude slopes of Mount Etna volcano (up to 1,000m) with black pumice and lava Contrade (Passopisciaro, Terre Nere, Benanti)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [14.900, 37.850], [15.180, 37.820], [15.200, 37.620], [14.920, 37.650],
            [14.900, 37.850]
          ]]
        }
      },
      {
        type: "Feature",
        id: "alto-adige-sudtirol",
        properties: {
          id: "alto-adige-sudtirol",
          parentSubregionId: "alto-adige-sudtirol",
          subregionId: "alto-adige-sudtirol",
          name: "Alto Adige / Südtirol (Italian Alps)",
          category: "Alpine Dolomite Limestone & Porphyry Terraces",
          dominantGrape: "Pinot Bianco, Sauvignon, Lagrein, Pinot Nero",
          color: "#1565c0",
          accent: "#90caf9",
          fillOpacity: 0.26,
          description: "Spectacular Alpine terraced valley beneath Dolomite peaks producing crystalline Pinot Bianco and mineral whites (Cantina Terlano)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [11.150, 46.680], [11.550, 46.650], [11.500, 46.250], [11.100, 46.280],
            [11.150, 46.680]
          ]]
        }
      },
      {
        type: "Feature",
        id: "friuli-venezia-giulia",
        properties: {
          id: "friuli-venezia-giulia",
          parentSubregionId: "friuli-venezia-giulia",
          subregionId: "friuli-venezia-giulia",
          name: "Friuli-Venezia Giulia (Collio & Colli Orientali)",
          category: "Flysch Ponca Soil & Macerated Orange / White Masters",
          dominantGrape: "Friulano, Ribolla Gialla, Sauvignon",
          color: "#f57f17",
          accent: "#fff59d",
          fillOpacity: 0.26,
          description: "Layered sandstone-marl flysch (ponca) soils along the Slovenian border; world center for amphora and orange wines (Gravner, Radikon)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [13.350, 46.120], [13.650, 46.080], [13.620, 45.850], [13.300, 45.880],
            [13.350, 46.120]
          ]]
        }
      },
      {
        type: "Feature",
        id: "campania-irpinia",
        properties: {
          id: "campania-irpinia",
          parentSubregionId: "campania-irpinia",
          subregionId: "campania-irpinia",
          name: "Campania (Taurasi, Greco & Fiano)",
          category: "Ancient Volcanic Tuff & Aglianico / Fiano",
          dominantGrape: "Aglianico, Fiano di Avellino, Greco di Tufo",
          color: "#6a1b9a",
          accent: "#e1bee7",
          fillOpacity: 0.26,
          description: "High-altitude volcanic hills of Irpinia delivering the 'Barolo of the South' (Taurasi Aglianico) and age-worthy Fiano (Mastroberardino)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [14.750, 41.100], [15.180, 41.080], [15.150, 40.850], [14.700, 40.880],
            [14.750, 41.100]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // JAPAN (Yamanashi & Nagano Koshu / Alpine Polygons)
  // ==========================================================================
  'japan-chubu': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "yamanashi-katsunuma",
        properties: {
          id: "yamanashi-katsunuma",
          parentSubregionId: "yamanashi-katsunuma",
          subregionId: "yamanashi-katsunuma",
          name: "Katsunuma & Yamanashi Basin (GI Yamanashi)",
          category: "Indigenous Koshu on Mount Fuji Volcanic Alluvium",
          dominantGrape: "Koshu & Muscat Bailey A",
          color: "#1b4f72",
          accent: "#85c1e9",
          fillOpacity: 0.28,
          description: "Volcanic alluvial amphitheater beneath Mount Fuji; pergola tanazukuri trellising producing delicate yuzu-and-mineral Koshu (Grace Wine, Katsunuma Jozo)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [138.580, 35.750], [138.820, 35.740], [138.800, 35.580], [138.560, 35.600],
            [138.580, 35.750]
          ]]
        }
      },
      {
        type: "Feature",
        id: "nagano-shinshu",
        properties: {
          id: "nagano-shinshu",
          parentSubregionId: "nagano-shinshu",
          subregionId: "nagano-shinshu",
          name: "Nagano (Shinshu High Alpine Valleys / GI Nagano)",
          category: "High Alpine Valley Chardonnay & Merlot Benchmark",
          dominantGrape: "Chardonnay & Merlot",
          color: "#2e7d32",
          accent: "#a5d6a7",
          fillOpacity: 0.26,
          description: "High alpine valleys (Chikuma River and Shiojiri Kikyogahara) producing benchmark cool-climate Chardonnay and Merlot (Chateau Mercian, Domaine Sogga)."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [137.800, 36.400], [138.300, 36.650], [138.450, 36.350], [137.950, 36.050],
            [137.800, 36.400]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // ALSACE AOC & GRAND CRU AOC (Vosges Rain Shadow Mosaic)
  // ==========================================================================
  'alsace': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "haut-rhin",
        properties: {
          id: "haut-rhin",
          parentSubregionId: "haut-rhin",
          subregionId: "haut-rhin",
          name: "Haut-Rhin (Upper Rhine / Southern & Central Alsace)",
          category: "Grand Cru Kingdom (37 Grand Crus)",
          dominantGrape: "Riesling, Gewurztraminer, Pinot Gris, Pinot Noir",
          color: "#b8860b",
          accent: "#ffd700",
          fillOpacity: 0.24,
          description: "Steep Vosges foothills sheltered by the highest mountain peaks (Grand Ballon 1,424m); home to 37 Grand Crus including Rangen, Schlossberg, Brand, and Sommerberg."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [7.080, 47.780], [7.280, 47.780], [7.380, 47.950], [7.440, 48.120],
            [7.400, 48.240], [7.280, 48.240], [7.180, 48.100], [7.050, 47.880],
            [7.080, 47.780]
          ]]
        }
      },
      {
        type: "Feature",
        id: "bas-rhin",
        properties: {
          id: "bas-rhin",
          parentSubregionId: "bas-rhin",
          subregionId: "bas-rhin",
          name: "Bas-Rhin (Lower Rhine / Northern Alsace & Couronne de Strasbourg)",
          category: "Sandstone & Limestone Crus (14 Grand Crus)",
          dominantGrape: "Riesling, Sylvaner, Pinot Blanc, Auxerrois",
          color: "#2e7d32",
          accent: "#81c784",
          fillOpacity: 0.22,
          description: "Gentler northern slopes with cool nights and crystalline floral aromatics; home to Zotzenberg, Kastelberg, and Muenchberg."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [7.320, 48.240], [7.450, 48.240], [7.550, 48.450], [7.580, 48.650],
            [7.450, 48.680], [7.360, 48.500], [7.320, 48.350], [7.320, 48.240]
          ]]
        }
      }
    ]
  },

  // ==========================================================================
  // CORSICA / CORSE AOC (L'Île de Beauté)
  // ==========================================================================
  'corsica': {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "patrimonio",
        properties: {
          id: "patrimonio",
          parentSubregionId: "patrimonio",
          subregionId: "patrimonio",
          name: "Patrimonio AOC (Cru Appellation)",
          category: "Pure White Limestone Cru",
          dominantGrape: "Niellucciu (90%+) & Vermentinu",
          color: "#8b0000",
          accent: "#d4af37",
          fillOpacity: 0.26,
          description: "Corsica's first AOC (1968) on pure white chalk limestone surrounding the Gulf of Saint-Florent."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [9.280, 42.660], [9.380, 42.740], [9.450, 42.720], [9.400, 42.640],
            [9.300, 42.630], [9.280, 42.660]
          ]]
        }
      },
      {
        type: "Feature",
        id: "ajaccio",
        properties: {
          id: "ajaccio",
          parentSubregionId: "ajaccio",
          subregionId: "ajaccio",
          name: "Ajaccio AOC (Cru Appellation)",
          category: "Granitic Sciaccarellu Cru",
          dominantGrape: "Sciaccarellu (60%+) & Vermentinu",
          color: "#c2185b",
          accent: "#f48fb1",
          fillOpacity: 0.24,
          description: "Weathered granite amphitheaters in the Gulf of Ajaccio and Taravo Valley; world benchmark for peppery, aromatic Sciaccarellu."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [8.650, 41.850], [8.920, 41.950], [8.980, 41.820], [8.800, 41.720],
            [8.680, 41.780], [8.650, 41.850]
          ]]
        }
      },
      {
        type: "Feature",
        id: "corse-calvi",
        properties: {
          id: "corse-calvi",
          parentSubregionId: "corse-calvi",
          subregionId: "corse-calvi",
          name: "Corse Calvi AOC",
          category: "Balagne Maritime Amphitheater",
          dominantGrape: "Sciaccarellu, Niellucciu, Vermentinu",
          color: "#0288d1",
          accent: "#81d4fa",
          fillOpacity: 0.22,
          description: "The Garden of Corsica framed between Mount Cinto and the sea on granite and schist slopes."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [8.680, 42.500], [8.880, 42.620], [8.980, 42.580], [8.850, 42.450],
            [8.680, 42.500]
          ]]
        }
      },
      {
        type: "Feature",
        id: "coteaux-du-cap-corse",
        properties: {
          id: "coteaux-du-cap-corse",
          parentSubregionId: "coteaux-du-cap-corse",
          subregionId: "coteaux-du-cap-corse",
          name: "Cap Corse & Muscat du Cap Corse AOC",
          category: "Metamorphic Schist Terraces",
          dominantGrape: "Vermentinu & Muscat Blanc à Petits Grains",
          color: "#7b1fa2",
          accent: "#ba68c8",
          fillOpacity: 0.26,
          description: "Vertiginous schist terraces hanging over the sea at the northern tip of Corsica; dry Vermentinu and unctuous Muscat VDN."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [9.350, 42.780], [9.480, 43.020], [9.520, 42.980], [9.450, 42.780],
            [9.350, 42.780]
          ]]
        }
      },
      {
        type: "Feature",
        id: "corse-figari",
        properties: {
          id: "corse-figari",
          parentSubregionId: "corse-figari",
          subregionId: "corse-figari",
          name: "Corse Figari AOC",
          category: "Extreme Windswept Granite Plateau",
          dominantGrape: "Sciaccarellu, Niellucciu, Biancu Gentile",
          color: "#e65100",
          accent: "#ffb74d",
          fillOpacity: 0.24,
          description: "The southernmost vineyards in France; bone-dry, wind-battered granite soils delivering intense saline minerality."
        },
        geometry: {
          type: "Polygon",
          coordinates: [[
            [8.980, 41.440], [9.180, 41.540], [9.220, 41.480], [9.050, 41.400],
            [8.980, 41.440]
          ]]
        }
      }
    ]
  }
};
