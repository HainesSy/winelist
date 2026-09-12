// scripts/generate_champagne_features.mjs
import { CHAMPAGNE_GRAND_CRUS, CHAMPAGNE_PREMIER_CRUS } from '../src/data/champagneData.js';
import { pointInPoly, featureContains, hasSelfIntersection } from '../test/test_champagne_detail.mjs';

// Define the sommelier-grade organic geometries

export const CHAMPAGNE_FEATURES = [
  {
    "type": "Feature",
    "id": "montagne-de-reims",
    "properties": {
      "id": "montagne-de-reims",
      "parentSubregionId": "montagne-de-reims",
      "subregionId": "montagne-de-reims",
      "name": "Montagne de Reims",
      "shortName": "Montagne de Reims",
      "category": "Grand Cru Pinot Noir Amphitheaters & Chalk Slopes",
      "dominantGrape": "Pinot Noir",
      "color": "#E6732B",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [4.11, 49.16],
      "description": "Curved horseshoe of chalk amphitheaters wrapping around the central mountain forest plateau with Massif de Saint-Thierry and Monts de Berne satellite chalk hills, renowned for 9 Pinot Noir Grand Crus."
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [
        // 1. Massif de Saint-Thierry (Cormicy -> Hermonville -> Trigny -> Chenay -> Saint-Thierry -> Merfy)
        [
          [
            [3.845, 49.305],
            [3.848, 49.325],
            [3.860, 49.345],
            [3.875, 49.362],
            [3.895, 49.375],
            [3.920, 49.378],
            [3.938, 49.370],
            [3.952, 49.350],
            [3.960, 49.330],
            [3.978, 49.315],
            [3.988, 49.300],
            [3.985, 49.285],
            [3.968, 49.278],
            [3.945, 49.278],
            [3.920, 49.282],
            [3.890, 49.285],
            [3.865, 49.292],
            [3.845, 49.305]
          ]
        ],
        // 2. Monts de Berne (Berru & Nogent-l'Abbesse isolated chalk formation)
        [
          [
            [4.090, 49.255],
            [4.102, 49.270],
            [4.120, 49.282],
            [4.145, 49.292],
            [4.170, 49.295],
            [4.190, 49.285],
            [4.200, 49.268],
            [4.195, 49.250],
            [4.180, 49.238],
            [4.150, 49.235],
            [4.120, 49.238],
            [4.098, 49.245],
            [4.090, 49.255]
          ]
        ],
        // 3. Main Montagne de Reims Horseshoe
        // Contouring the outer vineyard slopes and inner forested plateau
        [
          [
            // Western Petite Montagne (Vrigny, Coulommes, Pargny, Jouy, Ville-Dommange, Sacy, Écueil, Chamery, Sermiers, Villers-Allerand)
            [3.885, 49.230],
            [3.895, 49.245],
            [3.918, 49.252],
            [3.940, 49.255],
            [3.968, 49.250],
            [3.990, 49.245], // Ormes / Bezannes
            [4.015, 49.235],
            [4.045, 49.228],
            // Northern Grand Cru slopes & Vesle plain (Taissy, Trois-Puits, Puisieulx, Sillery, Beaumont, Mailly, Verzenay, Verzy)
            [4.075, 49.225],
            [4.105, 49.220],
            [4.135, 49.220], // Sillery north
            [4.165, 49.210],
            [4.195, 49.190], // Beaumont-sur-Vesle north
            [4.215, 49.175],
            // Eastern Premier Cru slopes (Villers-Marmery, Trépail, Billy-le-Grand, Vaudemange)
            [4.228, 49.155], // Verzenay / Verzy east
            [4.232, 49.135], // Villers-Marmery
            [4.225, 49.115], // Trépail
            [4.238, 49.100], // Billy-le-Grand
            [4.238, 49.085], // Vaudemange
            [4.225, 49.072],
            // Southern Grand Cru & Premier Cru slopes (Ambonnay, Bouzy, Louvois, Tauxières)
            [4.195, 49.065],
            [4.172, 49.062], // Ambonnay south
            [4.145, 49.065], // Bouzy south
            [4.115, 49.072], // Louvois south
            [4.090, 49.082], // Tauxières south
            // Inner Horseshoe contour wrapping north around the central forested massif (Germaine / Ville-en-Selve)
            [4.085, 49.100],
            [4.105, 49.115],
            [4.128, 49.122],
            [4.142, 49.135],
            [4.138, 49.148],
            [4.110, 49.150], // south of Mailly
            [4.080, 49.145], // south of Ludes
            [4.055, 49.142], // south of Chigny-les-Roses
            [4.032, 49.145], // south of Rilly-la-Montagne
            [4.005, 49.148], // south of Sermiers
            [3.972, 49.145], // south of Chamery
            [3.948, 49.160], // south of Écueil
            [3.930, 49.182], // south of Sacy
            [3.905, 49.202], // south of Ville-Dommange / Jouy
            [3.885, 49.230]
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
      "parentSubregionId": "vallee-de-la-marne",
      "subregionId": "vallee-de-la-marne",
      "name": "Vallée de la Marne",
      "shortName": "Vallée de la Marne",
      "category": "Meunier & Steep River Amphitheaters",
      "dominantGrape": "Meunier & Pinot Noir",
      "color": "#9B2C78",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [3.78, 49.09],
      "description": "Serpentine river corridor tracing the true curves of the Marne River from Charly-sur-Marne through Dormans to Grand Cru Aÿ and Tours-sur-Marne, the world epicenter of Meunier."
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          // West end: Crouttes, Charly-sur-Marne, Saulchery
          [3.230, 48.972],
          [3.245, 48.995],
          [3.275, 49.012],
          [3.310, 49.018],
          // Bend around Bonneil & Azy
          [3.340, 49.025],
          [3.375, 49.045],
          // Château-Thierry & Brasles meander
          [3.405, 49.058],
          [3.445, 49.062],
          [3.485, 49.055],
          // Northward bend towards Jaulgonne & Barzy-sur-Marne
          [3.520, 49.078],
          [3.548, 49.098],
          [3.575, 49.098],
          [3.605, 49.090], // Passy / Trélou
          [3.635, 49.092],
          // Verneuil / Vincelles / Dormans north
          [3.665, 49.108],
          [3.705, 49.115],
          // Châtillon-sur-Marne & northern finger (Belval, Cuchery, Fleury-la-Rivière)
          [3.745, 49.122],
          [3.785, 49.135],
          [3.815, 49.145], // Cuchery northern reach
          [3.845, 49.142],
          [3.875, 49.125], // Fleury-la-Rivière
          [3.895, 49.105],
          // Damery, Cumières, Hautvillers, Champillon overlooking Épernay
          [3.918, 49.092],
          [3.935, 49.095], // Hautvillers
          [3.965, 49.095], // Champillon
          [3.985, 49.085], // Dizy north
          // Eastern Grand Cru & Premier Cru corridor: Aÿ, Mutigny, Avenay, Mareuil, Bisseuil, Tours-sur-Marne
          [4.005, 49.078], // Aÿ north
          [4.030, 49.078], // Mutigny
          [4.055, 49.075], // Avenay-Val-d'Or
          [4.085, 49.065],
          [4.115, 49.060], // Tours-sur-Marne north
          [4.138, 49.055],
          [4.142, 49.038], // Tours-sur-Marne south
          [4.115, 49.035],
          [4.085, 49.032], // Bisseuil south
          [4.050, 49.035], // Mareuil south
          [4.020, 49.038],
          [3.995, 49.045], // Aÿ south
          // Heading west along south bank of the Marne: Mardeuil, Damery south, Boursault
          [3.965, 49.055],
          [3.925, 49.058],
          [3.880, 49.060],
          [3.840, 49.058], // Venteuil south
          // Southern fingers into Leuvrigny, Festigny, Troissy
          [3.800, 49.052],
          [3.765, 49.040], // Leuvrigny south
          [3.735, 49.038], // Festigny south
          [3.695, 49.052], // Troissy south
          [3.655, 49.055], // Dormans south
          [3.600, 49.048],
          [3.545, 49.040],
          [3.485, 49.025], // Fossoy south
          [3.435, 49.015], // Essômes south
          [3.375, 48.995], // Bonneil south
          [3.305, 48.965], // Charly south
          [3.255, 48.960],
          [3.230, 48.972]
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "id": "cote-des-blancs",
    "properties": {
      "id": "cote-des-blancs",
      "parentSubregionId": "cote-des-blancs",
      "subregionId": "cote-des-blancs",
      "name": "Côte des Blancs",
      "shortName": "Côte des Blancs",
      "category": "Pure Chalk Cuesta & Blanc de Blancs",
      "dominantGrape": "Chardonnay",
      "color": "#199778",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [4.01, 48.95],
      "description": "The global benchmark for Blanc de Blancs Chardonnay. High-resolution eastern chalk cuesta from Chouilly through Cramant, Avize, Oger, and Le Mesnil-sur-Oger, extending south through Vertus into Val du Petit Morin."
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          // North edge: Chouilly & Cuis
          [3.960, 48.998], // Cuis west
          [3.980, 49.012],
          [4.005, 49.022], // Chouilly north
          [4.032, 49.022],
          [4.055, 49.008], // Chouilly east
          [4.068, 48.988], // Oiry east
          [4.072, 48.972],
          // Eastern chalk cuesta cliff face: Cramant, Avize, Oger, Le Mesnil-sur-Oger
          [4.060, 48.955], // Oger east
          [4.055, 48.935], // Le Mesnil-sur-Oger east
          [4.065, 48.918], // Villeneuve-Renneville
          [4.050, 48.900], // Vertus east
          [4.040, 48.875], // Bergères-lès-Vertus
          [4.035, 48.850], // Val-des-Marais
          [4.005, 48.840],
          // Sweeping west-southwest into the Val du Petit Morin (Soulières, Étréchy, Étoges, Congy, Villevenard)
          [3.965, 48.848],
          [3.925, 48.860], // Soulières / Étréchy
          [3.875, 48.868], // Beaunay / Vert-Toulon
          [3.835, 48.855], // Congy south
          [3.785, 48.820], // Villevenard south
          [3.765, 48.835], // Villevenard west
          [3.795, 48.860], // Congy west
          [3.835, 48.888], // Étoges north
          [3.885, 48.895], // Étréchy north
          [3.945, 48.905], // Soulières north
          // West edge of Côte des Blancs ridge (heading back north behind Vertus, Mesnil, Oger, Avize)
          [3.972, 48.925],
          [3.980, 48.948], // behind Mesnil
          [3.975, 48.968], // behind Avize
          [3.965, 48.985], // behind Cramant / Cuis
          [3.960, 48.998]
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "id": "coteaux-sud-epernay",
    "properties": {
      "id": "coteaux-sud-epernay",
      "parentSubregionId": "coteaux-sud-epernay",
      "subregionId": "coteaux-sud-epernay",
      "name": "Coteaux Sud d’Épernay",
      "shortName": "Coteaux Sud d'Épernay",
      "category": "Flint & Clay-Marl Rolling Slopes",
      "dominantGrape": "Meunier & Chardonnay",
      "color": "#199778",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [3.92, 49.00],
      "description": "Rolling hills south of Épernay bridging Vallée de la Marne and Côte des Blancs, including Pierry Premier Cru, Moussy, Chavot-Courcourt, and Grauves."
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          // North edge near Épernay & Pierry
          [3.920, 49.035],
          [3.945, 49.032], // Pierry north
          [3.955, 49.022],
          // East border touching Côte des Blancs
          [3.958, 49.000],
          [3.955, 48.980], // Grauves east
          [3.945, 48.965], // Morangis south
          [3.910, 48.960], // Moslins south
          // West edge: Mancy, Monthelon, Chavot, Moussy, Saint-Martin-d'Ablois, Vinay
          [3.875, 48.975],
          [3.860, 49.000],
          [3.875, 49.022], // Vinay
          [3.905, 49.035],
          [3.920, 49.035]
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "id": "cote-de-sezanne",
    "properties": {
      "id": "cote-de-sezanne",
      "parentSubregionId": "cote-de-sezanne",
      "subregionId": "cote-de-sezanne",
      "name": "Côte de Sézanne",
      "shortName": "Côte de Sézanne",
      "category": "Warm Sun-Drenched Chalk & Marl Slopes",
      "dominantGrape": "Chardonnay",
      "color": "#E8A816",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [3.71, 48.69],
      "description": "Slender north-south curving hillside strip with warm south-facing chalk slopes from Allemant and Broyes through Sézanne to Bethon and Villenauxe-la-Grande."
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          // North end: Mondement, Allemant, Broyes
          [3.745, 48.780],
          [3.785, 48.782],
          [3.815, 48.765], // Allemant east
          [3.818, 48.745],
          [3.785, 48.725], // Broyes east
          // East-facing cuesta slopes past Sézanne, Vindey, Saudoy, Barbonne-Fayel
          [3.765, 48.705],
          [3.750, 48.675],
          [3.740, 48.645], // Barbonne-Fayel east
          [3.745, 48.615], // Fontaine-Denis-Nuisy
          [3.715, 48.602], // Chantemerle
          // Curving southwest towards Bethon, Montgenost, Villenauxe-la-Grande
          [3.660, 48.598],
          [3.615, 48.595], // Bethon south
          [3.540, 48.580], // Villenauxe south
          [3.535, 48.598], // Villenauxe north
          [3.585, 48.618], // Montgenost north
          [3.645, 48.635], // Bethon north
          // West edge running back north along the plateau
          [3.680, 48.665],
          [3.690, 48.700], // Sézanne west
          [3.705, 48.740],
          [3.725, 48.765],
          [3.745, 48.780]
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "id": "vitryat",
    "properties": {
      "id": "vitryat",
      "parentSubregionId": "vitryat",
      "subregionId": "vitryat",
      "name": "Vitryat (Côtes de Vitry)",
      "shortName": "Vitryat",
      "category": "Eastern Turonian Chalk Enclave",
      "dominantGrape": "Chardonnay",
      "color": "#9BC53D",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [4.62, 48.80],
      "description": "Distinct chalk island around Vitry-le-François featuring pure white Turonian chalk hillsides producing pristine, mineral Chardonnay."
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [
        // Part 1: Main Turonian chalk enclave northeast of Vitry-le-François
        // Bassuet, Changy, Saint-Amand-sur-Fion, Vavray, Bassu, Vanault-le-Châtel, Couvrot
        [
          [
            [4.545, 48.810],
            [4.565, 48.835],
            [4.615, 48.845],
            [4.675, 48.842],
            [4.735, 48.830],
            [4.785, 48.815],
            [4.810, 48.790],
            [4.785, 48.765],
            [4.735, 48.745],
            [4.670, 48.735],
            [4.605, 48.745],
            [4.560, 48.775],
            [4.545, 48.810]
          ]
        ],
        // Part 2: Northwest ribbon along the Marne towards Châlons-en-Champagne (Pogny, Mairy, Chepy)
        [
          [
            [4.415, 48.850],
            [4.445, 48.880],
            [4.495, 48.910],
            [4.525, 48.915],
            [4.530, 48.895],
            [4.485, 48.865],
            [4.445, 48.840],
            [4.415, 48.850]
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
      "parentSubregionId": "cote-des-bar",
      "subregionId": "cote-des-bar",
      "name": "Côte des Bar (Aube)",
      "shortName": "Côte des Bar",
      "category": "Kimmeridgian Marl & Artisanal Growers",
      "dominantGrape": "Pinot Noir",
      "color": "#673482",
      "accent": "#8B7BB0",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [4.45, 48.08],
      "description": "The southern frontier of Champagne in the Aube department. Detailed dual-valley system of Barséquanais along the Seine/Ource and Bar-sur-Aubois along the Aube River, plus the Montgueux chalk mound."
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [
        // Part 1: Barséquanais (valleys of Seine, Ource, Arce, and Laignes including Les Riceys)
        [
          [
            // North: Bar-sur-Seine & Arce valley
            [4.360, 48.135],
            [4.405, 48.140],
            [4.455, 48.135],
            [4.500, 48.125],
            [4.565, 48.128], // Noé-les-Mallets
            [4.615, 48.115],
            // East: Landreville & Essoyes (Ource valley)
            [4.630, 48.085],
            [4.610, 48.055], // Essoyes south
            [4.560, 48.035], // Loches south
            [4.510, 48.015], // Mussy north
            [4.465, 47.995], // Courteron south
            // South: Gyé, Neuville, Les Riceys, Channes
            [4.430, 47.965],
            [4.395, 47.940], // Les Riceys south
            [4.340, 47.930], // Channes south
            [4.285, 47.945], // Bragelogne
            [4.250, 47.970], // Bagneux-la-Fosse
            // West: Avirey-Lingey, Balnot-sur-Laignes, Polisy, Buxeuil
            [4.260, 48.010],
            [4.295, 48.038], // Balnot-sur-Laignes
            [4.330, 48.065], // Buxeuil / Polisy
            [4.340, 48.100], // Bar-sur-Seine west
            [4.360, 48.135]
          ]
        ],
        // Part 2: Bar-sur-Aubois (valley of the Aube River: Urville, Bar-sur-Aube, Colombé, Rouvres, Baroville)
        [
          [
            // North: Colombé-la-Fosse & Rouvres-les-Vignes
            [4.640, 48.200],
            [4.665, 48.235],
            [4.705, 48.265], // Bar-sur-Aube north
            [4.755, 48.282], // Arrentières
            [4.805, 48.285], // Colombé-la-Fosse
            [4.845, 48.265], // Rouvres-les-Vignes east
            [4.850, 48.235],
            // South: Baroville, Fontaine, Champignol, Urville
            [4.815, 48.200], // Baroville
            [4.770, 48.165], // Arconville
            [4.720, 48.135], // Champignol south
            [4.660, 48.145], // Urville south
            [4.625, 48.170], // Bligny
            [4.640, 48.200]
          ]
        ],
        // Part 3: Montgueux (isolated Turonian chalk mound west of Troyes)
        [
          [
            [3.935, 48.305],
            [3.955, 48.322],
            [3.985, 48.320],
            [3.990, 48.302],
            [3.965, 48.295],
            [3.935, 48.305]
          ]
        ]
      ]
    }
  }
];

// Test containment & topology
console.log('--- VALIDATING CHAMPAGNE FEATURES ---');
let allOk = true;

const featMap = {};
CHAMPAGNE_FEATURES.forEach(f => {
  featMap[f.id] = f;
  // Check ring closure and self intersections
  if (f.geometry.type === 'Polygon') {
    f.geometry.coordinates.forEach((ring, idx) => {
      let first = ring[0];
      let last = ring[ring.length - 1];
      if (first[0] !== last[0] || first[1] !== last[1]) {
        console.error(`Ring closure FAIL in ${f.id} ring ${idx}`);
        allOk = false;
      }
      let si = hasSelfIntersection(ring);
      if (si.selfIntersects) {
        console.error(`Self-intersection in ${f.id} ring ${idx}:`, si);
        allOk = false;
      }
    });
  } else if (f.geometry.type === 'MultiPolygon') {
    f.geometry.coordinates.forEach((poly, pidx) => {
      poly.forEach((ring, idx) => {
        let first = ring[0];
        let last = ring[ring.length - 1];
        if (first[0] !== last[0] || first[1] !== last[1]) {
          console.error(`Ring closure FAIL in ${f.id} poly ${pidx} ring ${idx}`);
          allOk = false;
        }
        let si = hasSelfIntersection(ring);
        if (si.selfIntersects) {
          console.error(`Self-intersection in ${f.id} poly ${pidx} ring ${idx}:`, si);
          allOk = false;
        }
      });
    });
  }
});

const allCrus = [...CHAMPAGNE_GRAND_CRUS, ...CHAMPAGNE_PREMIER_CRUS];
allCrus.forEach(cru => {
  let feat = featMap[cru.subregionId];
  if (!feat) {
    console.error('Missing feature for:', cru.subregionId);
    allOk = false;
    return;
  }
  let inside = featureContains(feat.geometry, cru.lng, cru.lat);
  if (!inside) {
    console.error(`FAIL: ${cru.name} (${cru.id}) [${cru.lng}, ${cru.lat}] NOT inside ${cru.subregionId}`);
    allOk = false;
  } else {
    console.log(`PASS: ${cru.name} -> ${cru.subregionId}`);
  }
});

console.log('Overall validation passed:', allOk);
