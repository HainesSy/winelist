// scripts/build_champagne_polygons.mjs
import fs from 'fs';
import { CHAMPAGNE_GRAND_CRUS, CHAMPAGNE_PREMIER_CRUS } from '../src/data/champagneData.js';
import { pointInPoly, featureContains, hasSelfIntersection } from '../test/test_champagne_detail.mjs';

// Build the detailed geometries

// 1. MONTAGNE DE REIMS
// Part 1: Massif de Saint-Thierry (Cormicy -> Trigny -> Saint-Thierry -> Merfy)
const massifSaintThierry = [
  [3.850, 49.310],
  [3.855, 49.335],
  [3.870, 49.360],
  [3.890, 49.375],
  [3.925, 49.375],
  [3.945, 49.360],
  [3.955, 49.340],
  [3.975, 49.320],
  [3.985, 49.300],
  [3.980, 49.285],
  [3.950, 49.280],
  [3.920, 49.285],
  [3.885, 49.290],
  [3.865, 49.298],
  [3.850, 49.310]
];

// Part 2: Monts de Berne (Berru & Nogent-l'Abbesse chalk mound east of Reims)
const montsDeBerne = [
  [4.095, 49.255],
  [4.110, 49.272],
  [4.135, 49.288],
  [4.165, 49.292],
  [4.185, 49.280],
  [4.195, 49.260],
  [4.185, 49.242],
  [4.150, 49.238],
  [4.115, 49.242],
  [4.095, 49.255]
];

// Part 3: Main Montagne de Reims Horseshoe
// Wrapping from Petite Montagne (Vrigny, Coulommes, Pargny, Jouy, Ville-Dommange, Sacy, Écueil, Chamery, Sermiers, Villers-Allerand, Montbré)
// through northern Grand Crus (Trois-Puits, Taissy, Sillery, Puisieulx, Beaumont, Mailly, Verzenay, Verzy)
// through eastern Premier Crus (Villers-Marmery, Trépail, Billy-le-Grand, Vaudemange)
// down to southern Grand Crus (Ambonnay, Bouzy, Louvois, Tauxières-Mutry)
// and inner horseshoe curve facing Germaine/Ville-en-Selve forest
const mainMontagneReims = [
  // West side - Petite Montagne starting near Vrigny
  [3.890, 49.230],
  [3.895, 49.245],
  [3.925, 49.250],
  [3.955, 49.248],
  [3.985, 49.240], // near Ormes / Bezannes
  [4.005, 49.230],
  [4.035, 49.225],
  // North front - Reims south edge & Vesle plain (Taissy, Sillery, Puisieulx, Beaumont)
  [4.070, 49.222], // Taissy
  [4.110, 49.215], // Puisieulx north
  [4.135, 49.215], // Sillery north
  [4.165, 49.200],
  [4.200, 49.185], // Beaumont-sur-Vesle north
  [4.215, 49.175],
  // Eastern flank - Verzenay, Verzy, Villers-Marmery, Trépail, Billy, Vaudemange
  [4.225, 49.155], // Verzenay / Verzy east
  [4.230, 49.135], // Villers-Marmery
  [4.225, 49.115], // Trépail
  [4.235, 49.100], // Billy-le-Grand / Vaudemange
  [4.230, 49.085], // Vaudemange south
  // Southern flank - Ambonnay, Bouzy, Louvois, Tauxières
  [4.205, 49.070],
  [4.175, 49.065], // Ambonnay south
  [4.145, 49.068], // Bouzy south
  [4.115, 49.078], // Louvois south
  [4.090, 49.085], // Tauxières-Mutry south
  // Inner curve / interior horseshoe heading northward around forest
  [4.085, 49.105],
  [4.105, 49.118],
  [4.125, 49.125],
  [4.140, 49.138],
  [4.135, 49.148],
  [4.105, 49.152], // south of Mailly
  [4.075, 49.148], // south of Ludes
  [4.050, 49.145], // south of Chigny
  [4.030, 49.148], // south of Rilly
  [4.000, 49.152], // south of Sermiers
  [3.970, 49.150], // south of Chamery
  [3.945, 49.165], // south of Écueil
  [3.930, 49.185], // south of Sacy
  [3.905, 49.205], // south of Ville-Dommange / Jouy
  [3.890, 49.230]
];

console.log('Montagne de Reims rings defined.');
