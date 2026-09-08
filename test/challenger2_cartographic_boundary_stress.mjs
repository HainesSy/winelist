import assert from 'node:assert';
import { WINE_REGION_BOUNDARIES, WINE_REGION_OUTLINES } from '../src/data/wineRegionBoundaries.js';
import { BEAUJOLAIS_DATA, BEAUJOLAIS_SUBREGIONS, BEAUJOLAIS_GRAND_CRUS } from '../src/data/beaujolaisData.js';
import { BURGUNDY_SUBREGIONS, BURGUNDY_GRAND_CRUS } from '../src/data/burgundyData.js';
import { WINE_REGIONS } from '../src/data/wineRegions.js';

console.log('🧪 Starting Challenger 2 Cartographic & Boundary Adversarial Stress Suite...');

let totalAssertions = 0;
let passedAssertions = 0;
let failedAssertions = 0;
const findings = [];

function check(desc, condition, details = '') {
  totalAssertions++;
  if (condition) {
    passedAssertions++;
    console.log(`  ✓ [PASS] ${desc}`);
  } else {
    failedAssertions++;
    const msg = `  ✗ [FAIL] ${desc} ${details ? `(${details})` : ''}`;
    console.error(msg);
    findings.push({ desc, details });
  }
}

// -------------------------------------------------------------
// Helper: signed polygon area (Shoelace)
// pts is [[x0, y0], [x1, y1], ...] where x is lng, y is lat
// -------------------------------------------------------------
function computeSignedArea(pts) {
  let area = 0;
  const n = pts.length;
  for (let i = 0; i < n - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    area += (x0 * y1 - x1 * y0);
  }
  return area / 2;
}

// -------------------------------------------------------------
// Helper: line segment intersection test
// -------------------------------------------------------------
function ccw(p1, p2, p3) {
  return (p3[1] - p1[1]) * (p2[0] - p1[0]) > (p2[1] - p1[1]) * (p3[0] - p1[0]);
}

function segmentsIntersect(a1, a2, b1, b2) {
  return ccw(a1, b1, b2) !== ccw(a2, b1, b2) && ccw(a1, a2, b1) !== ccw(a1, a2, b2);
}

function checkSelfIntersection(ring) {
  const n = ring.length;
  const intersections = [];
  // For ring of n points (n-1 edges because first == last)
  for (let i = 0; i < n - 1; i++) {
    const a1 = ring[i];
    const a2 = ring[i + 1];
    for (let j = i + 2; j < n - 1; j++) {
      if (i === 0 && j === n - 2) continue; // adjacent in closed loop
      const b1 = ring[j];
      const b2 = ring[j + 1];
      if (segmentsIntersect(a1, a2, b1, b2)) {
        intersections.push({ edge1: [a1, a2], edge2: [b1, b2], i, j });
      }
    }
  }
  return intersections;
}

// -------------------------------------------------------------
// Helper: ray casting point-in-polygon
// point is [lng, lat], ring is [[lng, lat], ...]
// -------------------------------------------------------------
function pointInPolygon(pt, ring) {
  const x = pt[0], y = pt[1];
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    const intersect = ((yi > y) !== (yj > y)) &&
      (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

// =============================================================
// CATEGORY 1: RFC 7946 Ring Closure on Beaujolais
// =============================================================
console.log('\n--- Category 1: RFC 7946 Ring Closure on Beaujolais ---');

const bjFc = WINE_REGION_BOUNDARIES['beaujolais'];
check('beaujolais boundary FeatureCollection exists', bjFc && bjFc.type === 'FeatureCollection');
check('beaujolais has exactly 3 boundary features', bjFc && bjFc.features && bjFc.features.length === 3);

for (const feature of (bjFc?.features || [])) {
  const geom = feature.geometry;
  check(`Feature ${feature.id} geometry is Polygon`, geom && geom.type === 'Polygon');
  const rings = geom.coordinates;
  check(`Feature ${feature.id} has at least 1 ring`, Array.isArray(rings) && rings.length >= 1);

  rings.forEach((ring, rIdx) => {
    check(`Feature ${feature.id} ring ${rIdx} has at least 4 coordinates`, ring.length >= 4, `length: ${ring.length}`);
    const first = ring[0];
    const last = ring[ring.length - 1];
    check(
      `Feature ${feature.id} ring ${rIdx} is strictly closed (first === last)`,
      first[0] === last[0] && first[1] === last[1],
      `first: [${first}], last: [${last}]`
    );

    // Coordinate numeric integrity
    let allValidNumbers = true;
    for (const [lng, lat] of ring) {
      if (typeof lng !== 'number' || typeof lat !== 'number' || isNaN(lng) || isNaN(lat) || !isFinite(lng) || !isFinite(lat)) {
        allValidNumbers = false;
        break;
      }
    }
    check(`Feature ${feature.id} ring ${rIdx} coordinates are finite numbers`, allValidNumbers);
  });
}

// Check beaujolais outline
const bjOutline = WINE_REGION_OUTLINES['beaujolais'];
check('beaujolais outline FeatureCollection exists', bjOutline && bjOutline.type === 'FeatureCollection');
check('beaujolais outline has 1 feature', bjOutline && bjOutline.features && bjOutline.features.length === 1);
const outlineGeom = bjOutline?.features[0]?.geometry;
check('beaujolais outline is Polygon', outlineGeom && outlineGeom.type === 'Polygon');
if (outlineGeom && outlineGeom.coordinates) {
  const oRing = outlineGeom.coordinates[0];
  check('beaujolais outline has >= 4 coordinates', oRing.length >= 4);
  check('beaujolais outline is closed', oRing[0][0] === oRing[oRing.length - 1][0] && oRing[0][1] === oRing[oRing.length - 1][1]);
}

// =============================================================
// CATEGORY 2: Coordinate Bounds Stress
// Required bounds: Lat 45.75 - 46.35, Lng 4.52 - 4.82
// =============================================================
console.log('\n--- Category 2: Coordinate Bounds Stress ---');

const MIN_LAT = 45.75;
const MAX_LAT = 46.35;
const MIN_LNG = 4.52;
const MAX_LNG = 4.82;

function testBounds(ring, name) {
  let inBounds = true;
  let minLngFound = Infinity, maxLngFound = -Infinity;
  let minLatFound = Infinity, maxLatFound = -Infinity;

  for (const [lng, lat] of ring) {
    minLngFound = Math.min(minLngFound, lng);
    maxLngFound = Math.max(maxLngFound, lng);
    minLatFound = Math.min(minLatFound, lat);
    maxLatFound = Math.max(maxLatFound, lat);

    if (lat < MIN_LAT || lat > MAX_LAT || lng < MIN_LNG || lng > MAX_LNG) {
      inBounds = false;
      findings.push({
        desc: `${name} coordinate out of bounds`,
        details: `Point [lng: ${lng}, lat: ${lat}] outside Lat [${MIN_LAT}, ${MAX_LAT}], Lng [${MIN_LNG}, ${MAX_LNG}]`
      });
    }
  }

  check(
    `${name} strictly within Latitude [${MIN_LAT}, ${MAX_LAT}] & Longitude [${MIN_LNG}, ${MAX_LNG}]`,
    inBounds,
    `Found Lng: [${minLngFound}, ${maxLngFound}], Lat: [${minLatFound}, ${maxLatFound}]`
  );
}

for (const feature of (bjFc?.features || [])) {
  feature.geometry.coordinates.forEach((ring, idx) => {
    testBounds(ring, `Feature ${feature.id} ring ${idx}`);
  });
}

if (outlineGeom?.coordinates) {
  testBounds(outlineGeom.coordinates[0], 'Beaujolais Outline');
}

// Also check BEAUJOLAIS_DATA.bounds and center
check(
  'BEAUJOLAIS_DATA.bounds match [ [45.75, 4.52], [46.35, 4.82] ]',
  BEAUJOLAIS_DATA.bounds[0][0] === 45.75 &&
  BEAUJOLAIS_DATA.bounds[0][1] === 4.52 &&
  BEAUJOLAIS_DATA.bounds[1][0] === 46.35 &&
  BEAUJOLAIS_DATA.bounds[1][1] === 4.82
);

check(
  'BEAUJOLAIS_DATA.center [46.1500, 4.6800] is within bounds',
  BEAUJOLAIS_DATA.center[0] >= MIN_LAT && BEAUJOLAIS_DATA.center[0] <= MAX_LAT &&
  BEAUJOLAIS_DATA.center[1] >= MIN_LNG && BEAUJOLAIS_DATA.center[1] <= MAX_LNG
);

// =============================================================
// CATEGORY 3: Polygon Winding Order & Signed Area
// =============================================================
console.log('\n--- Category 3: Polygon Winding Order & Signed Area ---');

for (const feature of (bjFc?.features || [])) {
  const ring = feature.geometry.coordinates[0];
  const area = computeSignedArea(ring);
  const isCCW = area > 0;
  console.log(`    Feature ${feature.id}: signedArea = ${area.toFixed(6)} (${isCCW ? 'CCW / Right-Hand' : 'CW'})`);
  // Note RFC 7946 specifies CCW for exterior rings
  check(`Feature ${feature.id} non-zero area`, Math.abs(area) > 1e-6, `area: ${area}`);
}

if (outlineGeom?.coordinates) {
  const oRing = outlineGeom.coordinates[0];
  const oArea = computeSignedArea(oRing);
  const oIsCCW = oArea > 0;
  console.log(`    Beaujolais Outline: signedArea = ${oArea.toFixed(6)} (${oIsCCW ? 'CCW / Right-Hand' : 'CW'})`);
  check('Beaujolais Outline non-zero area', Math.abs(oArea) > 1e-6, `area: ${oArea}`);
}

// =============================================================
// CATEGORY 4: Self-Intersections
// =============================================================
console.log('\n--- Category 4: Self-Intersections ---');

for (const feature of (bjFc?.features || [])) {
  const ring = feature.geometry.coordinates[0];
  const intersections = checkSelfIntersection(ring);
  check(`Feature ${feature.id} has 0 self-intersections`, intersections.length === 0, `${intersections.length} crossings`);
}

if (outlineGeom?.coordinates) {
  const oIntersections = checkSelfIntersection(outlineGeom.coordinates[0]);
  check('Beaujolais Outline has 0 self-intersections', oIntersections.length === 0, `${oIntersections.length} crossings`);
}

// =============================================================
// CATEGORY 5: Centroid & WineRegionMap Center of Mass Evaluation
// =============================================================
console.log('\n--- Category 5: Centroid & Center of Mass Evaluation ---');

for (const feature of (bjFc?.features || [])) {
  const pts = feature.geometry.coordinates[0];
  let area = 0, cx = 0, cy = 0;
  const n = pts.length;
  for (let i = 0; i < n - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const cross = (x0 * y1 - x1 * y0);
    area += cross;
    cx += (x0 + x1) * cross;
    cy += (y0 + y1) * cross;
  }
  area = area / 2;
  cx = cx / (6 * area);
  cy = cy / (6 * area);

  check(`Feature ${feature.id} Shoelace centroid is finite`, isFinite(cx) && isFinite(cy) && !isNaN(cx) && !isNaN(cy));
  
  // Calculate bounding box of this feature
  let west = Infinity, east = -Infinity, south = Infinity, north = -Infinity;
  for (const [x, y] of pts) {
    west = Math.min(west, x);
    east = Math.max(east, x);
    south = Math.min(south, y);
    north = Math.max(north, y);
  }

  // Does centroid fall within bounding box?
  const inBBox = cy >= south && cy <= north && cx >= west && cx <= east;
  check(`Feature ${feature.id} centroid [${cy.toFixed(4)}, ${cx.toFixed(4)}] is within feature BBox`, inBBox,
    `Centroid: [${cy}, ${cx}], BBox: S:${south} N:${north} W:${west} E:${east}`);

  // Point in polygon test for centroid
  const insidePoly = pointInPolygon([cx, cy], pts);
  console.log(`    Feature ${feature.id} centroid inside polygon interior: ${insidePoly}`);
}

// =============================================================
// CATEGORY 6: Zero Contamination of Beaujolais in Burgundy
// =============================================================
console.log('\n--- Category 6: Zero Contamination of Beaujolais in Burgundy ---');

const burgFc = WINE_REGION_BOUNDARIES['burgundy'];
check('burgundy boundary FeatureCollection exists', burgFc && burgFc.type === 'FeatureCollection');
check('burgundy has exactly 5 boundary features', burgFc && burgFc.features && burgFc.features.length === 5, `count: ${burgFc?.features?.length}`);

const burgIds = (burgFc?.features || []).map(f => f.id);
console.log('    Burgundy feature IDs:', burgIds);
check('burgundy does NOT contain maconnais-beaujolais', !burgIds.includes('maconnais-beaujolais'));
check('burgundy contains maconnais', burgIds.includes('maconnais'));

const forbiddenTerms = [
  'beaujolais', 'gamay', 'morgon', 'fleurie', 'moulin', 'chenas', 'chénas',
  'chiroubles', 'juliénas', 'julienas', 'regnie', 'régnié', 'brouilly', 'saint-amour'
];

for (const feature of (burgFc?.features || [])) {
  const p = feature.properties || {};
  const textBlob = `${feature.id} ${p.name || ''} ${p.category || ''} ${p.dominantGrape || ''} ${p.description || ''}`.toLowerCase();
  for (const term of forbiddenTerms) {
    check(
      `Burgundy feature ${feature.id} free of forbidden term "${term}"`,
      !textBlob.includes(term),
      `Found "${term}" in ${feature.id}`
    );
  }
}

// Check Burgundy outline
const burgOutline = WINE_REGION_OUTLINES['burgundy'];
check('burgundy outline exists', burgOutline && burgOutline.type === 'FeatureCollection');
for (const feature of (burgOutline?.features || [])) {
  const p = feature.properties || {};
  const textBlob = `${feature.id} ${p.name || ''} ${p.description || ''}`.toLowerCase();
  for (const term of forbiddenTerms) {
    check(
      `Burgundy outline free of forbidden term "${term}"`,
      !textBlob.includes(term),
      `Found "${term}" in outline`
    );
  }
}

// Check Mâconnais geographical soundness
const maconFeature = burgFc.features.find(f => f.id === 'maconnais');
check('Mâconnais feature found', Boolean(maconFeature));
if (maconFeature) {
  const mPts = maconFeature.geometry.coordinates[0];
  let mWest = Infinity, mEast = -Infinity, mSouth = Infinity, mNorth = -Infinity;
  for (const [x, y] of mPts) {
    mWest = Math.min(mWest, x);
    mEast = Math.max(mEast, x);
    mSouth = Math.min(mSouth, y);
    mNorth = Math.max(mNorth, y);
  }
  console.log(`    Mâconnais bounds: Lat [${mSouth}, ${mNorth}], Lng: [${mWest}, ${mEast}]`);
  check('Mâconnais latitude range realistic for Burgundy southern district (46.20 - 46.60)', mSouth >= 46.20 && mNorth <= 46.60);
  check('Mâconnais longitude range realistic (4.60 - 4.90)', mWest >= 4.60 && mEast <= 4.90);
  check('Mâconnais ring is closed', mPts[0][0] === mPts[mPts.length - 1][0] && mPts[0][1] === mPts[mPts.length - 1][1]);
}

// =============================================================
// CATEGORY 7: WineRegionMap Dynamic Scaling Math Stress
// =============================================================
console.log('\n--- Category 7: Dynamic Scaling Math Stress ---');

function testScaling(dLng, dLat, currentZ, baseZoom, context) {
  const geoSpan = Math.sqrt(dLng * dLat);
  const polySizeScale = Math.min(Math.max(0.70 + (geoSpan * 1.6), 0.72), 1.15).toFixed(2);
  const maxLabelWidth = Math.round(Math.min(Math.max(dLng * 420, 80), 140));
  const zoomDiff = currentZ - baseZoom;
  const zoomScaleFactor = Math.min(Math.max(Math.pow(1.24, zoomDiff), 0.45), 1.50).toFixed(3);

  const ok = !isNaN(Number(polySizeScale)) && !isNaN(maxLabelWidth) && !isNaN(Number(zoomScaleFactor)) &&
             isFinite(Number(polySizeScale)) && isFinite(maxLabelWidth) && isFinite(Number(zoomScaleFactor));

  check(`Scaling math valid for ${context}`, ok, `polySizeScale: ${polySizeScale}, maxLabelWidth: ${maxLabelWidth}, zoomScale: ${zoomScaleFactor}`);
  return { polySizeScale, maxLabelWidth, zoomScaleFactor };
}

// Test with all Beaujolais features
for (const feature of (bjFc?.features || [])) {
  const pts = feature.geometry.coordinates[0];
  let west = Infinity, east = -Infinity, south = Infinity, north = -Infinity;
  for (const [x, y] of pts) {
    west = Math.min(west, x);
    east = Math.max(east, x);
    south = Math.min(south, y);
    north = Math.max(north, y);
  }
  const dLng = Math.abs(east - west);
  const dLat = Math.abs(north - south);
  testScaling(dLng, dLat, 10, 9, `Feature ${feature.id}`);
}

// Test with stress / edge cases
testScaling(0, 0, 9, 9, 'Zero dimensions (Point)');
testScaling(1e-6, 1e-6, 9, 9, 'Micro dimensions (Tiny polygon)');
testScaling(10, 10, 9, 9, 'Macro dimensions (Continent)');
testScaling(0.2, 0.2, 0, 9, 'Zoom = 0 (Extreme zoom out)');
testScaling(0.2, 0.2, 20, 9, 'Zoom = 20 (Extreme zoom in)');

// =============================================================
// CATEGORY 8: Subregion & Cru Spatial Containment
// =============================================================
console.log('\n--- Category 8: Subregion & Cru Spatial Containment ---');

for (const sub of BEAUJOLAIS_SUBREGIONS) {
  check(
    `Subregion ${sub.name} coordinates [${sub.lat}, ${sub.lng}] within bounds`,
    sub.lat >= MIN_LAT && sub.lat <= MAX_LAT && sub.lng >= MIN_LNG && sub.lng <= MAX_LNG
  );
  // Check if inside outline
  if (outlineGeom?.coordinates) {
    const inside = pointInPolygon([sub.lng, sub.lat], outlineGeom.coordinates[0]);
    check(`Subregion ${sub.name} inside beaujolais outline`, inside, `pt: [${sub.lng}, ${sub.lat}]`);
  }
}

for (const cru of BEAUJOLAIS_GRAND_CRUS) {
  check(
    `Cru ${cru.name} coordinates [${cru.lat}, ${cru.lng}] within bounds`,
    cru.lat >= MIN_LAT && cru.lat <= MAX_LAT && cru.lng >= MIN_LNG && cru.lng <= MAX_LNG
  );
  check(`Cru ${cru.name} links to foreign key "beaujolais-crus"`, cru.subregionId === 'beaujolais-crus');
}

// =============================================================
// SUMMARY
// =============================================================
console.log('\n=============================================================');
console.log(`📊 TOTAL ASSERTIONS: ${totalAssertions}`);
console.log(`   PASSED: ${passedAssertions}`);
console.log(`   FAILED: ${failedAssertions}`);
console.log('=============================================================');

if (failedAssertions > 0) {
  console.log('\n❌ FINDINGS DETECTED:');
  findings.forEach((f, i) => console.log(`  ${i + 1}. ${f.desc} - ${f.details}`));
  process.exit(1);
} else {
  console.log('\n✅ ALL ADVERSARIAL CARTOGRAPHIC TESTS PASSED WITH 0 DEFECTS!');
  process.exit(0);
}
