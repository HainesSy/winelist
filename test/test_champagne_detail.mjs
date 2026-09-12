// test/test_champagne_detail.mjs
import { CHAMPAGNE_GRAND_CRUS, CHAMPAGNE_PREMIER_CRUS } from '../src/data/champagneData.js';
import { WINE_REGION_BOUNDARIES } from '../src/data/wineRegionBoundaries.js';

function pointInPoly(pt, poly) {
  let [x, y] = pt;
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    let [xi, yi] = poly[i];
    let [xj, yj] = poly[j];
    let intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function featureContains(geom, lng, lat) {
  if (geom.type === 'Polygon') {
    return pointInPoly([lng, lat], geom.coordinates[0]);
  } else if (geom.type === 'MultiPolygon') {
    return geom.coordinates.some(ring => pointInPoly([lng, lat], ring[0]));
  }
  return false;
}

// Line intersection checker to detect any self-intersections in a ring
function ccw(A, B, C) {
  return (C[1] - A[1]) * (B[0] - A[0]) > (B[1] - A[1]) * (C[0] - A[0]);
}

function intersect(A, B, C, D) {
  if ((A[0] === C[0] && A[1] === C[1]) || (A[0] === D[0] && A[1] === D[1]) ||
      (B[0] === C[0] && B[1] === C[1]) || (B[0] === D[0] && B[1] === D[1])) {
    return false;
  }
  return ccw(A, C, D) !== ccw(B, C, D) && ccw(A, B, C) !== ccw(A, B, D);
}

function hasSelfIntersection(ring) {
  const n = ring.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(i - j) <= 1 || (i === 0 && j === n - 1)) continue;
      if (intersect(ring[i], ring[i+1], ring[j], ring[j+1])) {
        return { selfIntersects: true, seg1: [i, i+1, ring[i], ring[i+1]], seg2: [j, j+1, ring[j], ring[j+1]] };
      }
    }
  }
  return { selfIntersects: false };
}

// Regression runner
const featMap = {};
for (const f of WINE_REGION_BOUNDARIES['champagne'].features) {
  featMap[f.id] = f;
  const rings = f.geometry.type === 'Polygon' ? f.geometry.coordinates : f.geometry.coordinates.map(p => p[0]);
  for (let rIdx = 0; rIdx < rings.length; rIdx++) {
    const ring = rings[rIdx];
    const si = hasSelfIntersection(ring);
    if (si.selfIntersects) {
      throw new Error(`Self-intersection in feature ${f.id} ring ${rIdx}`);
    }
  }
}

const allCrus = [...CHAMPAGNE_GRAND_CRUS, ...CHAMPAGNE_PREMIER_CRUS];
let passed = 0;
for (const cru of allCrus) {
  const feat = featMap[cru.subregionId];
  if (!feat) {
    throw new Error(`Missing feature for subregion: ${cru.subregionId}`);
  }
  const inside = featureContains(feat.geometry, cru.lng, cru.lat);
  if (!inside) {
    throw new Error(`Cru ${cru.name} [${cru.lng}, ${cru.lat}] is not inside ${cru.subregionId}`);
  }
  passed++;
}

console.log(`✅ [Champagne Regression] All ${passed}/${allCrus.length} Crus strictly contained with 0 self-intersections.`);

export { pointInPoly, featureContains, hasSelfIntersection };
