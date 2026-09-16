// scripts/carve_california_overlaps.mjs
import fs from 'fs';
import pc from 'polygon-clipping';
import readline from 'readline';

const toMulti = (geom) => geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;

function cleanMulti(multi) {
  const result = [];
  for (const poly of multi) {
    const polyRings = [];
    for (const rawRing of poly) {
      // Remove consecutive duplicates
      const dedup = [rawRing[0]];
      for (let i = 1; i < rawRing.length; i++) {
        if (rawRing[i][0] !== dedup[dedup.length - 1][0] || rawRing[i][1] !== dedup[dedup.length - 1][1]) {
          dedup.push(rawRing[i]);
        }
      }
      if (dedup.length >= 4) {
        // Enforce strict RFC 7946 linear ring closure
        dedup[dedup.length - 1] = [dedup[0][0], dedup[0][1]];
        polyRings.push(dedup);
      }
    }
    if (polyRings.length > 0) {
      result.push(polyRings);
    }
  }
  return result;
}

function toGeometry(cleaned) {
  if (cleaned.length === 1) {
    return {
      type: 'Polygon',
      coordinates: cleaned[0]
    };
  } else {
    return {
      type: 'MultiPolygon',
      coordinates: cleaned
    };
  }
}

export function carveCaliforniaAVAs() {
  const uncarvedPath = 'public/data/boundaries/california.uncarved.json';
  const inputPath = fs.existsSync(uncarvedPath) ? uncarvedPath : 'public/data/boundaries/california.json';
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

  const rrvFeat = data.features.find(f => f.id === 'sonoma-coast-rrv-russian-river');
  const dcvFeat = data.features.find(f => f.id === 'sonoma-coast-rrv-dry-creek');
  const avFeat = data.features.find(f => f.id === 'sonoma-coast-rrv-alexander-valley');
  const rpFeat = data.features.find(f => f.id === 'sonoma-coast-rrv-rockpile');

  if (!rrvFeat || !dcvFeat || !avFeat || !rpFeat) {
    throw new Error('Could not find required Sonoma AVAs in California GeoJSON');
  }

  const rrvPoly = toMulti(rrvFeat.geometry);
  const dcvPoly = toMulti(dcvFeat.geometry);
  const avPoly = toMulti(avFeat.geometry);
  const rpPoly = toMulti(rpFeat.geometry);

  // 1. Zone 2: Rockpile / Dry Creek Valley Overlap Zone
  const zone2_rockpile = pc.intersection(rpPoly, dcvPoly);
  const rp_pure = pc.difference(rpPoly, zone2_rockpile);
  const dcv_minus_rp = pc.difference(dcvPoly, zone2_rockpile);

  // 2. Zone 1: Healdsburg Confluence Zone (Russian River Valley expanding into Dry Creek & Alexander Valley)
  const rrv_dcv = pc.intersection(rrvPoly, dcv_minus_rp);
  const rrv_av = pc.intersection(rrvPoly, avPoly);
  const zone1_confluence = pc.union(rrv_dcv, rrv_av);

  const rrv_pure = pc.difference(rrvPoly, zone1_confluence);
  const av_pure = pc.difference(avPoly, zone1_confluence);

  // Carve Dry Creek Valley so it has ZERO overlap with RRV, AV, Zone 1, Zone 2, and Rockpile
  let dcv_pure = pc.difference(dcv_minus_rp, zone1_confluence);
  dcv_pure = pc.difference(dcv_pure, rrv_pure);
  dcv_pure = pc.difference(dcv_pure, av_pure);

  // Clean all MultiPolygons
  const cleanedRP = cleanMulti(rp_pure);
  const cleanedZone2 = cleanMulti(zone2_rockpile);
  const cleanedDCV = cleanMulti(dcv_pure);
  const cleanedZone1 = cleanMulti(zone1_confluence);
  const cleanedRRV = cleanMulti(rrv_pure);
  const cleanedAV = cleanMulti(av_pure);

  // Update existing features with carved geometries
  rpFeat.geometry = toGeometry(cleanedRP);
  rpFeat.properties.labelCenter = [-123.175, 38.768];

  dcvFeat.geometry = toGeometry(cleanedDCV);
  dcvFeat.properties.labelCenter = [-122.990, 38.657];

  rrvFeat.geometry = toGeometry(cleanedRRV);
  rrvFeat.properties.labelCenter = [-122.880, 38.500];

  avFeat.geometry = toGeometry(cleanedAV);
  avFeat.properties.labelCenter = [-122.820, 38.680];

  // Shared Zone 1 Feature: Healdsburg Confluence
  const zone1Feature = {
    type: 'Feature',
    id: 'sonoma-coast-rrv-healdsburg-confluence',
    properties: {
      id: 'sonoma-coast-rrv-healdsburg-confluence',
      parentSubregionId: 'sonoma-coast-rrv',
      subregionId: 'sonoma-coast-rrv',
      name: 'Healdsburg Confluence (Shared AVA Zone)',
      shortName: 'Healdsburg Confluence',
      category: 'TTB Title 27 CFR Part 9 Dual-Appellation Gravel Corridor',
      dominantGrape: 'Zinfandel, Pinot Noir, Chardonnay, Cabernet Sauvignon',
      color: '#D4AF37',
      accent: '#FFD700',
      borderColor: '#FFD700',
      fillOpacity: 0.68,
      labelCenter: [-122.960, 38.557],
      source: 'US TTB Title 27 CFR Part 9 Expansion Rulings (T.D. TTB-32 / TTB-96)',
      ttbRule: 'In both expansion rulings, the TTB allowed the northern finger of Russian River Valley to cross into the existing southern borders of Dry Creek Valley and Alexander Valley so that wineries in that gravel corridor (e.g., Seghesio, J Vineyards) could use whichever AVA name they preferred.',
      sommelierNote: 'TTB Title 27 CFR Part 9 permits wines grown in this multi-AVA alluvial confluence to carry Russian River Valley, Dry Creek Valley, or Alexander Valley designations based on vineyard parcel boundary qualification.'
    },
    geometry: toGeometry(cleanedZone1)
  };

  // Shared Zone 2 Feature: Rockpile / Dry Creek Valley Overlap
  const zone2Feature = {
    type: 'Feature',
    id: 'sonoma-coast-rrv-rockpile-overlap',
    properties: {
      id: 'sonoma-coast-rrv-rockpile-overlap',
      parentSubregionId: 'sonoma-coast-rrv',
      subregionId: 'sonoma-coast-rrv',
      name: 'Rockpile / Dry Creek Valley Overlap Zone',
      shortName: 'Rockpile / Dry Creek Overlap',
      category: 'TTB Title 27 CFR § 9.173 High-Altitude Shared AVA (≥800ft)',
      dominantGrape: 'Old-Vine Zinfandel, Syrah, Petite Sirah',
      color: '#D4AF37',
      accent: '#FFD700',
      borderColor: '#FFD700',
      fillOpacity: 0.68,
      labelCenter: [-123.084, 38.728],
      source: 'US TTB Title 27 CFR § 9.173 / § 9.64 Dual-Labeling Rule',
      ttbRule: 'Under TTB Title 27 CFR § 9.173, vineyards planted at or above 800 feet elevation within this shared boundary qualify for dual appellation rights, entitled to be labeled as either Rockpile AVA or Dry Creek Valley AVA.',
      sommelierNote: 'Sun-drenched mountain ridge above Lake Sonoma inversion layer where high-altitude sites straddle both the historic 1982 Dry Creek Valley AVA and the 2002 Rockpile AVA.'
    },
    geometry: toGeometry(cleanedZone2)
  };

  // Remove any previously generated overlap features to remain idempotent
  data.features = data.features.filter(f => 
    f.id !== 'sonoma-coast-rrv-healdsburg-confluence' && 
    f.id !== 'sonoma-coast-rrv-rockpile-overlap'
  );

  // Find index of dry creek to insert adjacent
  const dcvIdx = data.features.findIndex(f => f.id === 'sonoma-coast-rrv-dry-creek');
  data.features.splice(dcvIdx + 1, 0, zone1Feature, zone2Feature);

  const jsonStr = JSON.stringify(data, null, 2);
  fs.writeFileSync('public/data/boundaries/california.json', jsonStr, 'utf8');
  console.log('Successfully updated public/data/boundaries/california.json with 2 carved shared zones!');

  if (fs.existsSync('dist/data/boundaries')) {
    fs.writeFileSync('dist/data/boundaries/california.json', jsonStr, 'utf8');
    console.log('Successfully updated dist/data/boundaries/california.json!');
  }

  return data;
}

// If run directly from CLI
if (process.argv[1].endsWith('carve_california_overlaps.mjs')) {
  carveCaliforniaAVAs();
}
