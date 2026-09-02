/**
 * test/challenger2_exhaustive_contract_audit.mjs
 * Challenger 2: Exhaustive Contract & Schema Completeness Audit across all 17 regions
 */

import assert from 'node:assert/strict';
import { WINE_REGIONS } from '../src/data/wineRegions.js';

const REQUIRED_FIELDS_REGION = [
  'id', 'name', 'country', 'countryCode', 'tagline', 'summary', 'center', 'bounds',
  'terroir', 'grapes', 'structure', 'classification', 'flavorProfile', 'subRegions',
  'technicalRegulations', 'foodPairings'
];

let checks = 0;
let errors = 0;

function expect(cond, msg) {
  checks++;
  if (!cond) {
    errors++;
    console.error(`❌ ERROR: ${msg}`);
  }
}

console.log('Beginning Exhaustive Contract Audit of all 17 Wine Regions...\n');

for (const [regionId, region] of Object.entries(WINE_REGIONS)) {
  // Region top-level
  for (const field of REQUIRED_FIELDS_REGION) {
    expect(region[field] !== undefined && region[field] !== null, `Region "${regionId}" missing top-level field: ${field}`);
  }

  // 1. Food Pairings
  expect(Array.isArray(region.foodPairings), `Region "${regionId}" foodPairings must be an array`);
  expect(region.foodPairings.length >= 5 && region.foodPairings.length <= 10, `Region "${regionId}" foodPairings length ${region.foodPairings?.length} not in [5, 10]`);

  region.foodPairings.forEach((p, idx) => {
    const pName = `${regionId} foodPairing[${idx}] ("${p.dish}")`;
    expect(['Red', 'White', 'Sparkling', 'Rosé'].includes(p.wineType), `${pName} invalid wineType: "${p.wineType}"`);
    expect(typeof p.targetWine === 'string' && p.targetWine.trim().length > 0, `${pName} missing targetWine`);
    expect(typeof p.dish === 'string' && p.dish.trim().length > 0, `${pName} missing dish`);
    expect(typeof (p.note || p.rationale) === 'string' && (p.note || p.rationale).trim().length > 15, `${pName} missing/short note or rationale`);
    expect(typeof p.glassware === 'string' && p.glassware.trim().length > 3, `${pName} missing glassware`);
    expect(typeof p.servingTemp === 'string' && p.servingTemp.includes('°C') && p.servingTemp.includes('°F'), `${pName} servingTemp "${p.servingTemp}" missing °C or °F`);
    expect(typeof p.decanting === 'string' && p.decanting.trim().length > 2, `${pName} missing decanting`);
  });

  // 2. SubRegions
  expect(Array.isArray(region.subRegions) && region.subRegions.length >= 2, `Region "${regionId}" subRegions must have >= 2 items`);
  const subIds = new Set(region.subRegions.map(s => s.id));
  region.subRegions.forEach((s, idx) => {
    const sName = `${regionId} subRegion[${idx}] ("${s.name}")`;
    expect(typeof s.id === 'string' && s.id.length > 0, `${sName} missing id`);
    expect(typeof s.name === 'string' && s.name.length > 0, `${sName} missing name`);
    expect(typeof s.lat === 'number' && !isNaN(s.lat), `${sName} missing/invalid lat`);
    expect(typeof s.lng === 'number' && !isNaN(s.lng), `${sName} missing/invalid lng`);
  });

  // 3. Crus
  const crus = region.grandCrus || region.crus || region.benchmarkCrus || [];
  if (crus.length > 0) {
    crus.forEach((cru, idx) => {
      const cruName = `${regionId} cru[${idx}] ("${cru.name}")`;
      expect(typeof cru.id === 'string' && cru.id.length > 0, `${cruName} missing id`);
      expect(typeof cru.name === 'string' && cru.name.length > 0, `${cruName} missing name`);
      expect(typeof cru.lat === 'number' && !isNaN(cru.lat), `${cruName} missing/invalid lat`);
      expect(typeof cru.lng === 'number' && !isNaN(cru.lng), `${cruName} missing/invalid lng`);
      const fk = cru.subregionId || cru.districtId;
      expect(typeof fk === 'string' && fk.length > 0, `${cruName} missing subregionId foreign key`);
      const matchesSub = subIds.has(fk) || Array.from(subIds).some(sid => fk.includes(sid) || sid.includes(fk));
      expect(matchesSub, `${cruName} subregionId "${fk}" does not match any subRegion id [${Array.from(subIds).join(', ')}]`);
    });
  }

  // 4. Technical Regulations
  const tr = region.technicalRegulations;
  expect(typeof tr === 'object' && tr !== null, `Region "${regionId}" missing technicalRegulations`);
  if (tr) {
    expect(!!tr.geology, `Region "${regionId}" technicalRegulations missing geology`);
    expect(!!tr.grapes && Array.isArray(tr.grapes.major) && tr.grapes.major.length >= 1, `Region "${regionId}" technicalRegulations missing grapes.major`);
    expect(!!tr.classification && (Array.isArray(tr.classification.tiers) || Array.isArray(tr.classification.pyramid)), `Region "${regionId}" technicalRegulations missing classification tiers/pyramid`);
  }

  // 5. Prestige Bottlings
  const prestige = region.prestigeCuvees || region.prestigeMonopoles || region.prestigeEstates || [];
  expect(Array.isArray(prestige) && prestige.length >= 3, `Region "${regionId}" prestige collection must have >= 3 items (found ${prestige.length})`);
  prestige.forEach((p, idx) => {
    const pName = `${regionId} prestige[${idx}] ("${p.name}")`;
    expect(typeof p.name === 'string' && p.name.length > 0, `${pName} missing name`);
    const prod = p.producer || p.estate || p.house || p.domainOrHouse || p.houseOrGrower || p.domain;
    expect(typeof prod === 'string' && prod.length > 0, `${pName} missing producer/estate`);
    const debut = p.debutVintage || p.firstVintage || p.inauguralVintage;
    expect(debut !== undefined && debut !== null && `${debut}`.length >= 4, `${pName} missing debutVintage`);
  });

  // 6. Iconic Domaines
  const iconic = region.iconicDomaines || region.iconicGrowers || region.iconicProducers || region.iconicChateaux || [];
  expect(Array.isArray(iconic) && iconic.length >= 3, `Region "${regionId}" iconic collection must have >= 3 items (found ${iconic.length})`);
  iconic.forEach((d, idx) => {
    const dName = `${regionId} iconic[${idx}] ("${d.name}")`;
    expect(typeof d.name === 'string' && d.name.length > 0, `${dName} missing name`);
    const loc = d.village || d.subregion || d.commune || d.district;
    expect(typeof loc === 'string' && loc.length > 0, `${dName} missing village/subregion`);
    const vig = d.vigneron || d.winemaker || d.proprietor || d.director;
    expect(typeof vig === 'string' && vig.length > 0, `${dName} missing vigneron/winemaker`);
    expect(typeof d.philosophy === 'string' && d.philosophy.trim().length >= 10, `${dName} missing philosophy`);
    expect(Array.isArray(d.keyCuvees) && d.keyCuvees.length >= 1, `${dName} missing keyCuvees`);
  });
}

console.log(`\n================================================================`);
console.log(`Exhaustive Contract Audit Complete: ${checks - errors}/${checks} checks passed.`);
if (errors === 0) {
  console.log('✅ ALL CONTRACT REQUIREMENTS VERIFIED FLAWLESSLY!');
} else {
  console.error(`❌ ${errors} CONTRACT VIOLATIONS DETECTED!`);
  process.exitCode = 1;
}
console.log('================================================================\n');
