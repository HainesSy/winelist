import { WINE_REGIONS } from '../src/data/wineRegions.js';

console.log('Region Pairing Breakdown:');
for (const [id, r] of Object.entries(WINE_REGIONS)) {
  const pairings = r.foodPairings || [];
  const types = pairings.map(p => p.wineType).join(', ');
  console.log(`- ${id.padEnd(16)}: ${pairings.length} pairings [${types}]`);
}
