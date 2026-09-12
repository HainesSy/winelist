# scripts/generate_full_champagne.py
import json

# Comprehensive high-precision geometries for Champagne matching Wine Folly Champagne Map

montagne_de_reims_coords = [
  # 1. Massif de Saint-Thierry
  [
    [
      [3.842, 49.302],
      [3.845, 49.318],
      [3.852, 49.332],
      [3.865, 49.348],
      [3.878, 49.362],
      [3.896, 49.374],
      [3.918, 49.378],
      [3.936, 49.372],
      [3.948, 49.356],
      [3.955, 49.338],
      [3.968, 49.324],
      [3.979, 49.310],
      [3.988, 49.298],
      [3.984, 49.284],
      [3.966, 49.278],
      [3.945, 49.276],
      [3.922, 49.280],
      [3.898, 49.284],
      [3.872, 49.288],
      [3.855, 49.294],
      [3.842, 49.302]
    ]
  ],
  # 2. Monts de Berne (Berru & Nogent-l'Abbesse)
  [
    [
      [4.088, 49.252],
      [4.098, 49.268],
      [4.115, 49.280],
      [4.138, 49.290],
      [4.165, 49.295],
      [4.186, 49.288],
      [4.198, 49.272],
      [4.196, 49.255],
      [4.184, 49.240],
      [4.158, 49.234],
      [4.128, 49.236],
      [4.102, 49.242],
      [4.088, 49.252]
    ]
  ],
  # 3. Main Horseshoe of Montagne de Reims
  [
    [
      # Petite Montagne (Vrigny, Coulommes, Pargny, Jouy, Ville-Dommange, Sacy, Écueil, Chamery, Sermiers, Villers-Allerand)
      [3.882, 49.228],
      [3.890, 49.242],
      [3.908, 49.250],
      [3.928, 49.254],
      [3.952, 49.254],
      [3.975, 49.248],
      [3.996, 49.242],
      [4.018, 49.234],
      [4.042, 49.228],
      # Northern Front (Trois-Puits, Taissy, Sillery, Puisieulx, Beaumont, Mailly, Verzenay, Verzy)
      [4.068, 49.224],
      [4.095, 49.220],
      [4.122, 49.218],
      [4.148, 49.218],
      [4.172, 49.210],
      [4.196, 49.192],
      [4.212, 49.178],
      # Eastern Flank (Villers-Marmery, Trépail, Billy-le-Grand, Vaudemange)
      [4.226, 49.158],
      [4.232, 49.140],
      [4.230, 49.122],
      [4.226, 49.110],
      [4.238, 49.098],
      [4.238, 49.082],
      [4.225, 49.070],
      # Southern Slopes (Ambonnay, Bouzy, Louvois, Tauxières-Mutry)
      [4.202, 49.064],
      [4.176, 49.060],
      [4.148, 49.062],
      [4.122, 49.070],
      [4.092, 49.080],
      # Inner Horseshoe boundary wrapping north around the high forested plateau
      [4.084, 49.098],
      [4.102, 49.112],
      [4.124, 49.120],
      [4.140, 49.132],
      [4.138, 49.146],
      [4.112, 49.150], # south of Mailly
      [4.082, 49.146], # south of Ludes
      [4.056, 49.142], # south of Chigny
      [4.032, 49.144], # south of Rilly
      [4.008, 49.146], # south of Sermiers
      [3.974, 49.144], # south of Chamery
      [3.948, 49.158], # south of Écueil
      [3.930, 49.180], # south of Sacy
      [3.904, 49.200], # south of Ville-Dommange / Jouy
      [3.882, 49.228]
    ]
  ]
]

vallee_de_la_marne_coords = [
  [
    # West end: Charly-sur-Marne & Saulchery
    [3.226, 48.970],
    [3.242, 48.992],
    [3.268, 49.010],
    [3.305, 49.016],
    # Bonneil & Azy bend
    [3.338, 49.024],
    [3.372, 49.042],
    # Château-Thierry & Brasles
    [3.402, 49.056],
    [3.438, 49.062],
    [3.478, 49.056],
    # Jaulgonne & Barzy-sur-Marne
    [3.518, 49.076],
    [3.546, 49.096],
    [3.572, 49.098],
    [3.602, 49.090], # Passy / Trélou
    [3.632, 49.090],
    # Verneuil & Dormans
    [3.662, 49.106],
    [3.702, 49.114],
    # Châtillon-sur-Marne & Cuchery northern finger
    [3.742, 49.120],
    [3.782, 49.134],
    [3.812, 49.144], # Cuchery
    [3.842, 49.142],
    [3.872, 49.124], # Fleury-la-Rivière
    [3.894, 49.104],
    # Damery, Cumières, Hautvillers, Champillon, Dizy
    [3.916, 49.090],
    [3.934, 49.094], # Hautvillers
    [3.962, 49.094], # Champillon
    [3.982, 49.084], # Dizy
    # Aÿ, Mutigny, Avenay, Mareuil, Bisseuil, Tours-sur-Marne
    [4.004, 49.076], # Aÿ
    [4.028, 49.076], # Mutigny
    [4.054, 49.074], # Avenay
    [4.084, 49.064],
    [4.114, 49.058], # Tours-sur-Marne north
    [4.138, 49.054],
    [4.142, 49.036], # Tours-sur-Marne south
    [4.116, 49.034],
    [4.086, 49.030], # Bisseuil south
    [4.052, 49.032], # Mareuil south
    [4.022, 49.036],
    [3.996, 49.042], # Aÿ south
    # South bank of the Marne: Damery south, Boursault
    [3.966, 49.052],
    [3.926, 49.056],
    [3.882, 49.058],
    [3.842, 49.056], # Venteuil south
    # Southern tributary fingers: Leuvrigny, Festigny, Troissy
    [3.802, 49.050],
    [3.766, 49.038], # Leuvrigny south
    [3.736, 49.036], # Festigny south
    [3.696, 49.050], # Troissy south
    [3.656, 49.052], # Dormans south
    [3.602, 49.046],
    [3.548, 49.038],
    [3.488, 49.024],
    [3.438, 49.014],
    [3.376, 48.994],
    [3.306, 48.964],
    [3.256, 48.958],
    [3.226, 48.970]
  ]
]

cote_des_blancs_coords = [
  [
    # North: Cuis & Chouilly
    [3.958, 48.996],
    [3.978, 49.010],
    [4.004, 49.020], # Chouilly north
    [4.030, 49.020],
    [4.054, 49.006],
    [4.068, 48.986], # Oiry east
    [4.072, 48.970],
    # Eastern chalk cuesta cliff: Cramant, Avize, Oger, Le Mesnil-sur-Oger
    [4.062, 48.954], # Oger east
    [4.056, 48.934], # Mesnil east
    [4.066, 48.916], # Villeneuve-Renneville
    [4.052, 48.898], # Vertus east
    [4.042, 48.874], # Bergères-lès-Vertus
    [4.036, 48.848], # Val-des-Marais
    [4.006, 48.838],
    # Val du Petit Morin sweep: Soulières, Étréchy, Étoges, Congy, Villevenard
    [3.966, 48.846],
    [3.926, 48.858], # Soulières / Étréchy
    [3.876, 48.866], # Vert-Toulon
    [3.836, 48.854], # Congy south
    [3.784, 48.818], # Villevenard south
    [3.764, 48.834], # Villevenard west
    [3.794, 48.858], # Congy west
    [3.834, 48.886], # Étoges north
    [3.884, 48.894], # Étréchy north
    [3.944, 48.904], # Soulières north
    # West edge of the cuesta ridge back to Cuis
    [3.970, 48.924],
    [3.978, 48.946], # behind Mesnil
    [3.974, 48.966], # behind Avize
    [3.964, 48.984], # behind Cramant / Cuis
    [3.958, 48.996]
  ]
]

coteaux_sud_epernay_coords = [
  [
    # Pierry, Moussy, Chavot, Monthelon, Grauves
    [3.918, 49.034],
    [3.944, 49.030], # Pierry north
    [3.954, 49.020],
    [3.956, 48.998],
    [3.954, 48.978], # Grauves east
    [3.944, 48.964], # Morangis south
    [3.908, 48.958], # Moslins south
    [3.874, 48.974], # Mancy
    [3.858, 48.998], # Monthelon west
    [3.874, 49.020], # Vinay
    [3.904, 49.034],
    [3.918, 49.034]
  ]
]

cote_de_sezanne_coords = [
  [
    # Mondement, Allemant, Broyes
    [3.744, 48.778],
    [3.784, 48.780],
    [3.814, 48.764], # Allemant east
    [3.816, 48.744],
    [3.784, 48.724], # Broyes east
    # Sézanne, Vindey, Saudoy, Barbonne-Fayel
    [3.764, 48.704],
    [3.748, 48.674],
    [3.738, 48.644], # Barbonne-Fayel east
    [3.744, 48.614], # Fontaine-Denis
    [3.714, 48.600], # Chantemerle
    # Bethon, Montgenost, Villenauxe-la-Grande
    [3.658, 48.596],
    [3.614, 48.594], # Bethon south
    [3.538, 48.578], # Villenauxe south
    [3.534, 48.596], # Villenauxe north
    [3.584, 48.616], # Montgenost north
    [3.644, 48.634], # Bethon north
    [3.678, 48.664],
    [3.688, 48.698], # Sézanne west
    [3.704, 48.738],
    [3.724, 48.764],
    [3.744, 48.778]
  ]
]

vitryat_coords = [
  # Part 1: Main Turonian chalk enclave northeast of Vitry-le-François
  [
    [
      [4.544, 48.808],
      [4.564, 48.834],
      [4.614, 48.844],
      [4.674, 48.840],
      [4.734, 48.828],
      [4.784, 48.814],
      [4.808, 48.788],
      [4.784, 48.764],
      [4.734, 48.744],
      [4.668, 48.734],
      [4.604, 48.744],
      [4.558, 48.774],
      [4.544, 48.808]
    ]
  ],
  # Part 2: Northwest ribbon towards Châlons-en-Champagne (Pogny, Mairy, Chepy)
  [
    [
      [4.414, 48.848],
      [4.444, 48.878],
      [4.494, 48.908],
      [4.524, 48.914],
      [4.528, 48.894],
      [4.484, 48.864],
      [4.444, 48.838],
      [4.414, 48.848]
    ]
  ]
]

cote_des_bar_coords = [
  # Part 1: Barséquanais
  [
    [
      [4.358, 48.134],
      [4.404, 48.138],
      [4.454, 48.134],
      [4.498, 48.124],
      [4.564, 48.126], # Noé-les-Mallets
      [4.614, 48.114],
      [4.628, 48.084],
      [4.608, 48.054], # Essoyes south
      [4.558, 48.034], # Loches south
      [4.508, 48.014],
      [4.464, 47.994], # Courteron south
      [4.428, 47.964],
      [4.394, 47.938], # Les Riceys south
      [4.338, 47.928], # Channes south
      [4.284, 47.944], # Bragelogne
      [4.248, 47.968], # Bagneux-la-Fosse
      [4.258, 48.008],
      [4.294, 48.036], # Balnot-sur-Laignes
      [4.328, 48.064], # Buxeuil / Polisy
      [4.338, 48.098], # Bar-sur-Seine west
      [4.358, 48.134]
    ]
  ],
  # Part 2: Bar-sur-Aubois
  [
    [
      [4.638, 48.198],
      [4.664, 48.234],
      [4.704, 48.264], # Bar-sur-Aube north
      [4.754, 48.280], # Arrentières
      [4.804, 48.284], # Colombé-la-Fosse
      [4.844, 48.264], # Rouvres-les-Vignes east
      [4.848, 48.234],
      [4.814, 48.198], # Baroville
      [4.768, 48.164], # Arconville
      [4.718, 48.134], # Champignol south
      [4.658, 48.144], # Urville south
      [4.624, 48.168], # Bligny
      [4.638, 48.198]
    ]
  ],
  # Part 3: Montgueux (isolated chalk mound west of Troyes)
  [
    [
      [3.934, 48.304],
      [3.954, 48.320],
      [3.984, 48.318],
      [3.988, 48.300],
      [3.964, 48.294],
      [3.934, 48.304]
    ]
  ]
]

champagne_outline_coords = [
  # Northern Champagne Basin
  [
    [
      [3.220, 48.950],
      [3.230, 49.010],
      [3.340, 49.070],
      [3.620, 49.180],
      [3.820, 49.385],
      [3.950, 49.385],
      [4.100, 49.330],
      [4.220, 49.300],
      [4.260, 49.200],
      [4.280, 49.070],
      [4.420, 48.930],
      [4.820, 48.840],
      [4.820, 48.730],
      [4.540, 48.720],
      [4.120, 48.820],
      [3.840, 48.800],
      [3.820, 48.740],
      [3.740, 48.600],
      [3.520, 48.560],
      [3.440, 48.750],
      [3.220, 48.950]
    ]
  ],
  # Southern Aube Basin (Côte des Bar & Montgueux)
  [
    [
      [3.920, 48.280],
      [3.990, 48.330],
      [4.240, 48.330],
      [4.620, 48.300],
      [4.860, 48.300],
      [4.870, 48.180],
      [4.650, 48.100],
      [4.650, 48.040],
      [4.480, 47.920],
      [4.320, 47.910],
      [4.230, 47.940],
      [4.230, 48.040],
      [4.320, 48.150],
      [4.480, 48.160],
      [4.320, 48.240],
      [3.920, 48.280]
    ]
  ]
]

print("Defined all Champagne coordinate structures.")
