// scripts/build_california_avas.mjs
import fs from 'fs';
import path from 'path';

const AVA_CONFIGS = [
  // Napa Valley Floor
  {
    file: 'oakville.geojson',
    id: 'napa-valley-floor-oakville',
    subregionId: 'napa-valley-floor',
    name: 'Oakville AVA',
    shortName: 'Oakville',
    category: 'World Benchmark Cabernet Sauvignon & To Kalon Bench',
    dominantGrape: 'Cabernet Sauvignon (80%+)',
    color: '#8B1E3F',
    labelCenter: [-122.407, 38.432]
  },
  {
    file: 'rutherford.geojson',
    id: 'napa-valley-floor-rutherford',
    subregionId: 'napa-valley-floor',
    name: 'Rutherford AVA',
    shortName: 'Rutherford',
    category: 'Signature Rutherford Dust & Alluvial Gravel Benches',
    dominantGrape: 'Cabernet Sauvignon (75%+)',
    color: '#9E2A2B',
    labelCenter: [-122.422, 38.458]
  },
  {
    file: 'stags_leap_district.geojson',
    id: 'napa-valley-floor-stags-leap',
    subregionId: 'napa-valley-floor',
    name: 'Stags Leap District AVA',
    shortName: 'Stags Leap',
    category: 'Velvet Tannins & Volcanic Palisades Colluvium',
    dominantGrape: 'Cabernet Sauvignon (80%+)',
    color: '#7A1C34',
    labelCenter: [-122.317, 38.412]
  },
  {
    file: 'yountville.geojson',
    id: 'napa-valley-floor-yountville',
    subregionId: 'napa-valley-floor',
    name: 'Yountville AVA',
    shortName: 'Yountville',
    category: 'Alluvial Silts & Historic Napa Viticultural Cradle',
    dominantGrape: 'Cabernet Sauvignon, Merlot',
    color: '#8F2D56',
    labelCenter: [-122.360, 38.398]
  },
  {
    file: 'st__helena.geojson',
    id: 'napa-valley-floor-st-helena',
    subregionId: 'napa-valley-floor',
    name: 'St. Helena AVA',
    shortName: 'St. Helena',
    category: 'Narrow Valley Heat Trap & Historic Stone Wineries',
    dominantGrape: 'Cabernet Sauvignon, Zinfandel',
    color: '#A3333D',
    labelCenter: [-122.468, 38.505]
  },
  {
    file: 'calistoga.geojson',
    id: 'napa-valley-floor-calistoga',
    subregionId: 'napa-valley-floor',
    name: 'Calistoga AVA',
    shortName: 'Calistoga',
    category: 'Thermal Geothermal Basins & Monumental Ripe Reds',
    dominantGrape: 'Cabernet Sauvignon, Petite Sirah',
    color: '#B23A48',
    labelCenter: [-122.580, 38.580]
  },
  {
    file: 'oak_knoll_district_of_napa_valley.geojson',
    id: 'napa-valley-floor-oak-knoll',
    subregionId: 'napa-valley-floor',
    name: 'Oak Knoll District AVA',
    shortName: 'Oak Knoll',
    category: 'Cool Southern Marine Silt & Refined Bordeaux Blends',
    dominantGrape: 'Cabernet Sauvignon, Merlot, Chardonnay',
    color: '#78290F',
    labelCenter: [-122.335, 38.360]
  },
  {
    file: 'coombsville.geojson',
    id: 'napa-valley-floor-coombsville',
    subregionId: 'napa-valley-floor',
    name: 'Coombsville AVA',
    shortName: 'Coombsville',
    category: 'Cool Volcanic Caldera Basin & Floral Freshness',
    dominantGrape: 'Cabernet Sauvignon, Cabernet Franc',
    color: '#5C1D24',
    labelCenter: [-122.245, 38.305]
  },
  {
    file: 'los_carneros.geojson',
    id: 'napa-valley-floor-carneros',
    subregionId: 'napa-valley-floor',
    name: 'Los Carneros AVA',
    shortName: 'Los Carneros',
    category: 'San Pablo Bay Maritime Fog & Traditional Method Sparkling',
    dominantGrape: 'Chardonnay, Pinot Noir',
    color: '#4A1942',
    labelCenter: [-122.370, 38.240]
  },
  {
    file: 'chiles_valley.geojson',
    id: 'napa-valley-floor-chiles-valley',
    subregionId: 'napa-valley-floor',
    name: 'Chiles Valley District AVA',
    shortName: 'Chiles Valley',
    category: 'Vaca Range Sunken Valley & Old-Vine Zinfandel',
    dominantGrape: 'Zinfandel, Cabernet Sauvignon',
    color: '#6B2737',
    labelCenter: [-122.345, 38.535]
  },

  // Napa Valley Mountain AVAs
  {
    file: 'howell_mountain.geojson',
    id: 'napa-mountain-avas-howell-mountain',
    subregionId: 'napa-mountain-avas',
    name: 'Howell Mountain AVA',
    shortName: 'Howell Mtn',
    category: 'High Vaca Rhyolitic Tufa & Muscular Mountain Tannins',
    dominantGrape: 'Cabernet Sauvignon, Zinfandel',
    color: '#5B0E2D',
    labelCenter: [-122.455, 38.578]
  },
  {
    file: 'mt__veeder.geojson',
    id: 'napa-mountain-avas-mount-veeder',
    subregionId: 'napa-mountain-avas',
    name: 'Mount Veeder AVA',
    shortName: 'Mt. Veeder',
    category: 'Mayacamas Uplifted Turbidite Marine Sandstone',
    dominantGrape: 'Cabernet Sauvignon, Malbec',
    color: '#4C1C24',
    labelCenter: [-122.417, 38.358]
  },
  {
    file: 'spring_mountain_district.geojson',
    id: 'napa-mountain-avas-spring-mountain',
    subregionId: 'napa-mountain-avas',
    name: 'Spring Mountain District AVA',
    shortName: 'Spring Mtn',
    category: 'Steep Forested Slopes & Long-Lived Aromatic Cabernets',
    dominantGrape: 'Cabernet Sauvignon, Cabernet Franc',
    color: '#6E1B3B',
    labelCenter: [-122.533, 38.533]
  },
  {
    file: 'diamond_mountain_district.geojson',
    id: 'napa-mountain-avas-diamond-mountain',
    subregionId: 'napa-mountain-avas',
    name: 'Diamond Mountain District AVA',
    shortName: 'Diamond Mtn',
    category: 'Porous White Volcanic Ash & Fine-Grained Tannins',
    dominantGrape: 'Cabernet Sauvignon',
    color: '#802242',
    labelCenter: [-122.583, 38.567]
  },
  {
    file: 'atlas_peak.geojson',
    id: 'napa-mountain-avas-atlas-peak',
    subregionId: 'napa-mountain-avas',
    name: 'Atlas Peak AVA',
    shortName: 'Atlas Peak',
    category: 'High-Altitude Volcanic Basalt on Southern Vaca Crest',
    dominantGrape: 'Cabernet Sauvignon, Sangiovese',
    color: '#66101F',
    labelCenter: [-122.260, 38.420]
  },

  // Sonoma Coast & Russian River Valley
  {
    file: 'russian_river_valley.geojson',
    id: 'sonoma-coast-rrv-russian-river',
    subregionId: 'sonoma-coast-rrv',
    name: 'Russian River Valley AVA',
    shortName: 'Russian River',
    category: 'Goldridge Loam Benches & Benchmark Velvety Pinot Noir',
    dominantGrape: 'Pinot Noir, Chardonnay',
    color: '#722F37',
    labelCenter: [-122.880, 38.500]
  },
  {
    file: 'sonoma_coast.geojson',
    id: 'sonoma-coast-rrv-sonoma-coast',
    subregionId: 'sonoma-coast-rrv',
    name: 'Sonoma Coast AVA',
    shortName: 'Sonoma Coast',
    category: 'Pacific Surf Maritime Fogs & High Mineral Tension',
    dominantGrape: 'Pinot Noir, Chardonnay, Syrah',
    color: '#8338EC',
    labelCenter: [-123.083, 38.517]
  },
  {
    file: 'alexander_valley.geojson',
    id: 'sonoma-coast-rrv-alexander-valley',
    subregionId: 'sonoma-coast-rrv',
    name: 'Alexander Valley AVA',
    shortName: 'Alexander Valley',
    category: 'Warm Northern Benchlands & Rich Supple Cabernets',
    dominantGrape: 'Cabernet Sauvignon, Merlot',
    color: '#9B2226',
    labelCenter: [-122.820, 38.680]
  },
  {
    file: 'dry_creek_valley.geojson',
    id: 'sonoma-coast-rrv-dry-creek',
    subregionId: 'sonoma-coast-rrv',
    name: 'Dry Creek Valley AVA',
    shortName: 'Dry Creek',
    category: 'Historic Century-Old Bush-Vine Zinfandels & Gravel Loam',
    dominantGrape: 'Zinfandel, Sauvignon Blanc',
    color: '#AE2012',
    labelCenter: [-122.950, 38.660]
  },
  {
    file: 'chalk_hill.geojson',
    id: 'sonoma-coast-rrv-chalk-hill',
    subregionId: 'sonoma-coast-rrv',
    name: 'Chalk Hill AVA',
    shortName: 'Chalk Hill',
    category: 'Volcanic White Ash Bedrock & Rich Mineral Chardonnay',
    dominantGrape: 'Chardonnay, Sauvignon Blanc',
    color: '#C59B27',
    labelCenter: [-122.780, 38.580]
  },
  {
    file: 'knights_valley.geojson',
    id: 'sonoma-coast-rrv-knights-valley',
    subregionId: 'sonoma-coast-rrv',
    name: 'Knights Valley AVA',
    shortName: 'Knights Valley',
    category: 'Mayacamas Volcanic Corridor & Bordeaux Blends',
    dominantGrape: 'Cabernet Sauvignon, Cabernet Franc',
    color: '#780000',
    labelCenter: [-122.680, 38.640]
  },
  {
    file: 'petaluma_gap.geojson',
    id: 'sonoma-coast-rrv-petaluma-gap',
    subregionId: 'sonoma-coast-rrv',
    name: 'Petaluma Gap AVA',
    shortName: 'Petaluma Gap',
    category: 'Wind Tunnel Coastal Gap & Thick-Skinned Pinot Noir',
    dominantGrape: 'Pinot Noir, Syrah, Chardonnay',
    color: '#4361EE',
    labelCenter: [-122.650, 38.250]
  },
  {
    file: 'fort_ross_seaview.geojson',
    id: 'sonoma-coast-rrv-fort-ross-seaview',
    subregionId: 'sonoma-coast-rrv',
    name: 'Fort Ross-Seaview AVA',
    shortName: 'Fort Ross-Seaview',
    category: 'Extreme Maritime High-Altitude Ridges above Fog Line',
    dominantGrape: 'Pinot Noir, Chardonnay',
    color: '#3A0CA3',
    labelCenter: [-123.230, 38.550]
  },
  {
    file: 'sonoma_valley.geojson',
    id: 'sonoma-coast-rrv-sonoma-valley',
    subregionId: 'sonoma-coast-rrv',
    name: 'Sonoma Valley AVA',
    shortName: 'Sonoma Valley',
    category: 'Historic Buena Vista & Valley of the Moon Terroir',
    dominantGrape: 'Zinfandel, Cabernet Sauvignon',
    color: '#9D4EDD',
    labelCenter: [-122.480, 38.320]
  },
  {
    file: 'rockpile.geojson',
    id: 'sonoma-coast-rrv-rockpile',
    subregionId: 'sonoma-coast-rrv',
    name: 'Rockpile AVA',
    shortName: 'Rockpile',
    category: 'High Lake Sonoma Mountain Ridge & Inky Zinfandel',
    dominantGrape: 'Zinfandel, Syrah',
    color: '#580C1F',
    labelCenter: [-123.080, 38.740]
  },

  // Santa Cruz Mountains
  {
    file: 'santa_cruz_mountains.geojson',
    id: 'santa-cruz-mountains-ava',
    subregionId: 'santa-cruz-mountains',
    name: 'Santa Cruz Mountains AVA',
    shortName: 'Santa Cruz Mtns',
    category: 'Monte Bello Limestone & High Altitude Ocean Ridge',
    dominantGrape: 'Cabernet Sauvignon, Chardonnay, Pinot Noir',
    color: '#2B580C',
    labelCenter: [-122.050, 37.150]
  },

  // Central Coast & Paso Robles
  {
    file: 'paso_robles.geojson',
    id: 'central-coast-paso-robles-ava',
    subregionId: 'central-coast-paso',
    name: 'Paso Robles AVA',
    shortName: 'Paso Robles',
    category: 'Calcareous Linne-Calodo Limestone & World-Class Rhône Blends',
    dominantGrape: 'Syrah, Grenache, Cabernet Sauvignon',
    color: '#800E13',
    labelCenter: [-120.690, 35.630]
  },
  {
    file: 'paso_robles_willow_creek_district.geojson',
    id: 'central-coast-paso-willow-creek',
    subregionId: 'central-coast-paso',
    name: 'Paso Robles Willow Creek District AVA',
    shortName: 'Willow Creek',
    category: 'Templeton Gap Ocean Breeze & Steep Calcareous Ridges',
    dominantGrape: 'Syrah, Grenache, Mourvèdre',
    color: '#640D14',
    labelCenter: [-120.760, 35.580]
  },
  {
    file: 'sta__rita_hills.geojson',
    id: 'central-coast-paso-sta-rita-hills',
    subregionId: 'central-coast-paso',
    name: 'Sta. Rita Hills AVA',
    shortName: 'Sta. Rita Hills',
    category: 'Transverse East-West Marine Valley & Pure Pinot Noir',
    dominantGrape: 'Pinot Noir, Chardonnay',
    color: '#38040E',
    labelCenter: [-120.367, 34.633]
  },
  {
    file: 'santa_maria_valley.geojson',
    id: 'central-coast-paso-santa-maria',
    subregionId: 'central-coast-paso',
    name: 'Santa Maria Valley AVA',
    shortName: 'Santa Maria',
    category: 'Transverse Coastal Valley & Bien Nacido Historic Bench',
    dominantGrape: 'Pinot Noir, Chardonnay, Syrah',
    color: '#250902',
    labelCenter: [-120.300, 34.920]
  },

  // Mendocino & Anderson Valley
  {
    file: 'anderson_valley.geojson',
    id: 'mendocino-anderson-valley-ava',
    subregionId: 'mendocino-anderson',
    name: 'Anderson Valley AVA',
    shortName: 'Anderson Valley',
    category: 'Navarro River Pacific Fog Corridor & World-Class Méthode Champenoise',
    dominantGrape: 'Pinot Noir, Chardonnay, Gewürztraminer',
    color: '#1B4332',
    labelCenter: [-123.450, 39.050]
  },

  // Sierra Foothills
  {
    file: 'california_shenandoah_valley.geojson',
    id: 'sierra-foothills-shenandoah-ava',
    subregionId: 'sierra-foothills',
    name: 'California Shenandoah Valley AVA',
    shortName: 'Shenandoah Valley',
    category: 'Mother Lode Decomposed Granite & Heritage 1860s Zinfandels',
    dominantGrape: 'Old-Vine Zinfandel, Syrah, Barbera',
    color: '#5C0099',
    labelCenter: [-120.820, 38.520]
  }
];

// Helper: Douglas-Peucker line simplification to maintain crisp shapes without point bloat
function perpendicularDistance(p, p1, p2) {
  let [x, y] = p;
  let [x1, y1] = p1;
  let [x2, y2] = p2;
  let dx = x2 - x1;
  let dy = y2 - y1;
  if (dx === 0 && dy === 0) {
    return Math.hypot(x - x1, y - y1);
  }
  let t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(x - (x1 + t * dx), y - (y1 + t * dy));
}

function douglasPeucker(points, tolerance) {
  if (points.length <= 3) return points;
  let maxDist = 0;
  let index = 0;
  let end = points.length - 1;
  for (let i = 1; i < end; i++) {
    let dist = perpendicularDistance(points[i], points[0], points[end]);
    if (dist > maxDist) {
      maxDist = dist;
      index = i;
    }
  }
  if (maxDist > tolerance) {
    let rec1 = douglasPeucker(points.slice(0, index + 1), tolerance);
    let rec2 = douglasPeucker(points.slice(index), tolerance);
    return rec1.slice(0, -1).concat(rec2);
  }
  return [points[0], points[end]];
}

function simplifyRing(ring, tolerance = 0.0003) {
  if (ring.length < 4) return ring;
  const isClosed = ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1];
  const openRing = isClosed ? ring.slice(0, -1) : ring;
  let simplified = douglasPeucker(openRing, tolerance);
  if (simplified.length < 3) simplified = openRing;
  // Re-close ring strictly
  simplified.push([simplified[0][0], simplified[0][1]]);
  // Round to 5 decimal places (~1 meter precision)
  const result = simplified.map(([x, y]) => [
    Math.round(x * 100000) / 100000,
    Math.round(y * 100000) / 100000
  ]);
  // Enforce first === last exact identity
  result[result.length - 1] = [result[0][0], result[0][1]];
  return result;
}

function simplifyGeometry(geom) {
  if (!geom || !geom.coordinates) return geom;
  if (geom.type === 'Polygon') {
    const coords = geom.coordinates.map(ring => simplifyRing(ring));
    return { type: 'Polygon', coordinates: coords };
  } else if (geom.type === 'MultiPolygon') {
    const coords = geom.coordinates.map(poly =>
      poly.map(ring => simplifyRing(ring))
    );
    return { type: 'MultiPolygon', coordinates: coords };
  }
  return geom;
}

async function run() {
  console.log(`Starting download and compilation of ${AVA_CONFIGS.length} California AVAs...`);
  const features = [];

  for (const cfg of AVA_CONFIGS) {
    const url = `https://raw.githubusercontent.com/UCDavisLibrary/ava/master/avas/${cfg.file}`;
    process.stdout.write(`Fetching ${cfg.name} (${cfg.file})... `);
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: HTTP ${res.status}`);
    }
    const fc = await res.json();
    const origFeature = fc.features ? fc.features[0] : fc;
    if (!origFeature || !origFeature.geometry) {
      throw new Error(`Invalid GeoJSON feature in ${cfg.file}`);
    }

    const simplifiedGeom = simplifyGeometry(origFeature.geometry);

    const feature = {
      type: 'Feature',
      id: cfg.id,
      properties: {
        id: cfg.id,
        parentSubregionId: cfg.subregionId,
        subregionId: cfg.subregionId,
        name: cfg.name,
        shortName: cfg.shortName,
        category: cfg.category,
        dominantGrape: cfg.dominantGrape,
        color: cfg.color,
        accent: '#ffffff',
        borderColor: '#ffffff',
        fillOpacity: 0.70,
        labelCenter: cfg.labelCenter,
        source: 'UC Davis Library / US TTB 27 CFR Part 9'
      },
      geometry: simplifiedGeom
    };

    features.push(feature);
    console.log(`OK! (Type: ${simplifiedGeom.type})`);
  }

  const californiaCollection = {
    type: 'FeatureCollection',
    features: features
  };

  const jsonStr = JSON.stringify(californiaCollection, null, 2);
  fs.writeFileSync('public/data/boundaries/california.json', jsonStr);

  // Carve shared AVA overlap puzzle pieces
  const { carveCaliforniaAVAs } = await import('./carve_california_overlaps.mjs');
  const finalCollection = carveCaliforniaAVAs();
  const finalStr = JSON.stringify(finalCollection, null, 2);

  console.log(`\nSuccessfully compiled and carved ${finalCollection.features.length} California AVAs & shared zones!`);
  console.log(`Total payload size: ${(finalStr.length / 1024).toFixed(1)} KB`);

  // Write to dist/data/boundaries/california.json
  if (fs.existsSync('dist/data/boundaries')) {
    fs.writeFileSync('dist/data/boundaries/california.json', finalStr);
    console.log(`Wrote to dist/data/boundaries/california.json`);
  }
}

run().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
