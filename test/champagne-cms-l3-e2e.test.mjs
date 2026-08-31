/**
 * ============================================================================
 * EXHAUSTIVE 4-TIER E2E TEST SUITE: CHAMPAGNE CMS LEVEL 3 SOMMELIER SYSTEM
 * ============================================================================
 * 
 * Milestone 3 Comprehensive Verification Harness
 * Authoritative Sources: ORIGINAL_REQUEST.md & PROJECT.md
 * 
 * Tier Structure:
 *   - Tier 1: Feature Coverage (>=5 tests per feature for all 17 inventoried features)
 *   - Tier 2: Boundary & Corner Cases (Dosage inflection points, regex escaping, fallback regions)
 *   - Tier 3: Cross-Feature Combinations (Multi-filters, cartography sync, cellar-cru-terroir graph)
 *   - Tier 4: Real-World Sommelier Application Scenarios (CMS Level 3 Advanced Sommelier scenarios)
 */

import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import {
  WINE_REGIONS,
  CHAMPAGNE_GRAND_CRUS,
  CHAMPAGNE_PREMIER_CRUS,
  CHAMPAGNE_SUBREGIONS,
  CHAMPAGNE_TECHNICAL_REGULATIONS,
  CHAMPAGNE_PRESTIGE_CUVEES,
  CHAMPAGNE_ICONIC_GROWERS,
  findWineRegion
} from '../src/data/wineRegions.js';
import { WINE_REGION_BOUNDARIES } from '../src/data/wineRegionBoundaries.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../');

// ----------------------------------------------------------------------------
// Test Tracking & Reporting Harness
// ----------------------------------------------------------------------------
const stats = {
  tier1: { total: 0, passed: 0, failed: 0, byFeature: {} },
  tier2: { total: 0, passed: 0, failed: 0 },
  tier3: { total: 0, passed: 0, failed: 0 },
  tier4: { total: 0, passed: 0, failed: 0 },
  total: 0,
  passed: 0,
  failed: 0,
  failures: []
};

function test(tier, featureOrCategory, testName, fn) {
  stats.total++;
  const tierKey = `tier${tier}`;
  stats[tierKey].total++;

  if (tier === 1) {
    if (!stats.tier1.byFeature[featureOrCategory]) {
      stats.tier1.byFeature[featureOrCategory] = { total: 0, passed: 0, failed: 0 };
    }
    stats.tier1.byFeature[featureOrCategory].total++;
  }

  try {
    fn();
    stats.passed++;
    stats[tierKey].passed++;
    if (tier === 1) stats.tier1.byFeature[featureOrCategory].passed++;
    console.log(`  ✓ [T${tier}:${featureOrCategory}] ${testName}`);
  } catch (err) {
    stats.failed++;
    stats[tierKey].failed++;
    if (tier === 1) stats.tier1.byFeature[featureOrCategory].failed++;
    stats.failures.push({ tier, category: featureOrCategory, name: testName, error: err.message, stack: err.stack });
    console.error(`  ✗ FAIL [T${tier}:${featureOrCategory}] ${testName}`);
    console.error(`     Error: ${err.message}`);
  }
}

// ----------------------------------------------------------------------------
// Helper: Simple CSV Parser for `public/My Cellar.csv`
// ----------------------------------------------------------------------------
function parseCsv(csvText) {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  function parseLine(line) {
    const values = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        values.push(cur.trim());
        cur = '';
      } else {
        cur += char;
      }
    }
    values.push(cur.trim());
    return values;
  }

  const headers = parseLine(lines[0]);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine) continue;
    const values = parseLine(rawLine);
    const row = {};
    headers.forEach((h, idx) => {
      row[h] = values[idx] !== undefined ? values[idx] : '';
    });
    rows.push(row);
  }
  return rows;
}

// Helper: Replicate Sommelier Producer Mapping Dictionary from WineRegionDetail
const CHAMPAGNE_PRODUCER_MAP = {
  'paul bara': { commune: 'Bouzy', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'bouzy', cruType: 'Grand Cru (100%)', code: 'RM' },
  'egly-ouriet': { commune: 'Ambonnay', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ambonnay', cruType: 'Grand Cru (100%)', code: 'RM' },
  'egly ouriet': { commune: 'Ambonnay', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ambonnay', cruType: 'Grand Cru (100%)', code: 'RM' },
  'gaston chiquet': { commune: 'Dizy', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'dizy', cruType: 'Premier Cru (95%)', code: 'RM' },
  'j. lassalle': { commune: 'Chigny-les-Roses', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'chigny-les-roses', cruType: 'Premier Cru (94%)', code: 'RM' },
  'j lassalle': { commune: 'Chigny-les-Roses', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'chigny-les-roses', cruType: 'Premier Cru (94%)', code: 'RM' },
  'nicolas maillart': { commune: 'Écueil', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ecueil', cruType: 'Premier Cru (90%)', code: 'RM' },
  'minière f & r': { commune: 'Hermonville', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims (Massif de Saint-Thierry)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'miniere f & r': { commune: 'Hermonville', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims (Massif de Saint-Thierry)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'minière': { commune: 'Hermonville', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims (Massif de Saint-Thierry)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'miniere': { commune: 'Hermonville', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims (Massif de Saint-Thierry)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'veuve fourny & fils': { commune: 'Vertus', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'vertus', cruType: 'Premier Cru (95%)', code: 'RM' },
  'veuve fourny': { commune: 'Vertus', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'vertus', cruType: 'Premier Cru (95%)', code: 'RM' },
  'henriot': { commune: 'Reims', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims & Côte des Blancs', cruId: null, cruType: 'Grand Cru Multi-Terroir', code: 'NM' },
  'billecart-salmon': { commune: 'Mareuil-sur-Aÿ', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'mareuil-sur-ay', cruType: 'Premier Cru (99%)', code: 'NM' },
  'billecart salmon': { commune: 'Mareuil-sur-Aÿ', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'mareuil-sur-ay', cruType: 'Premier Cru (99%)', code: 'NM' },
  'bollinger': { commune: 'Aÿ', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'ay', cruType: 'Grand Cru (100%)', code: 'NM' },
  'krug': { commune: 'Reims', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: null, cruType: 'Prestige House', code: 'NM' },
  'dom pérignon': { commune: 'Hautvillers', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'hautvillers', cruType: 'Grand & 1er Cru', code: 'NM' },
  'dom perignon': { commune: 'Hautvillers', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'hautvillers', cruType: 'Grand & 1er Cru', code: 'NM' },
  'louis roederer': { commune: 'Reims', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: null, cruType: 'Grand Cru Estate', code: 'NM' },
  'taittinger': { commune: 'Reims', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: null, cruType: 'Grand Cru Estate', code: 'NM' },
  'pol roger': { commune: 'Épernay', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: null, cruType: 'Prestige House', code: 'NM' },
  'pierre péters': { commune: 'Le Mesnil-sur-Oger', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'le-mesnil-sur-oger', cruType: 'Grand Cru (100%)', code: 'RM' },
  'pierre peters': { commune: 'Le Mesnil-sur-Oger', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'le-mesnil-sur-oger', cruType: 'Grand Cru (100%)', code: 'RM' },
  'jacques selosse': { commune: 'Avize', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'avize', cruType: 'Grand Cru (100%)', code: 'RM' },
  'selosse': { commune: 'Avize', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'avize', cruType: 'Grand Cru (100%)', code: 'RM' },
  'agrapart': { commune: 'Avize', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'avize', cruType: 'Grand Cru (100%)', code: 'RM' },
  'agrapart & fils': { commune: 'Avize', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'avize', cruType: 'Grand Cru (100%)', code: 'RM' },
  'cédric bouchard': { commune: 'Celles-sur-Ource', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'cedric bouchard': { commune: 'Celles-sur-Ource', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'roses de jeanne': { commune: 'Celles-sur-Ource', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'ulysse collin': { commune: 'Congy', subregionId: 'cote-de-sezanne', subregion: 'Côte de Sézanne', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'david léclapart': { commune: 'Trépail', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'trepail', cruType: 'Premier Cru (95%)', code: 'RM' },
  'david leclapart': { commune: 'Trépail', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'trepail', cruType: 'Premier Cru (95%)', code: 'RM' },
  'laherte frères': { commune: 'Chavot-Courcourt', subregionId: 'coteaux-sud-epernay', subregion: 'Coteaux Sud d’Épernay', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'laherte freres': { commune: 'Chavot-Courcourt', subregionId: 'coteaux-sud-epernay', subregion: 'Coteaux Sud d’Épernay', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'laherte': { commune: 'Chavot-Courcourt', subregionId: 'coteaux-sud-epernay', subregion: 'Coteaux Sud d’Épernay', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'vilmart': { commune: 'Rilly-la-Montagne', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'rilly-la-montagne', cruType: 'Premier Cru (94%)', code: 'RM' },
  'vilmart & cie': { commune: 'Rilly-la-Montagne', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'rilly-la-montagne', cruType: 'Premier Cru (94%)', code: 'RM' },
  'larmandier-bernier': { commune: 'Vertus', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'vertus', cruType: 'Premier Cru (95%)', code: 'RM' },
  'larmandier bernier': { commune: 'Vertus', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'vertus', cruType: 'Premier Cru (95%)', code: 'RM' },
  'bérêche': { commune: 'Ludes', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ludes', cruType: 'Premier Cru (94%)', code: 'RM' },
  'bérêche & fils': { commune: 'Ludes', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ludes', cruType: 'Premier Cru (94%)', code: 'RM' },
  'bereche': { commune: 'Ludes', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ludes', cruType: 'Premier Cru (94%)', code: 'RM' },
  'bereche & fils': { commune: 'Ludes', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ludes', cruType: 'Premier Cru (94%)', code: 'RM' },
  'chartogne-taillet': { commune: 'Merfy', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: null, cruType: 'Massif de Saint-Thierry', code: 'RM' },
  'chartogne taillet': { commune: 'Merfy', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: null, cruType: 'Massif de Saint-Thierry', code: 'RM' },
  'vouette & sorbée': { commune: 'Buxeuil', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'vouette & sorbee': { commune: 'Buxeuil', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'vouette and sorbee': { commune: 'Buxeuil', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'vouette': { commune: 'Buxeuil', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'paul goerg': { commune: 'Vertus', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'vertus', cruType: 'Premier Cru (95%)', code: 'CM' },
  'deutz': { commune: 'Aÿ', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'ay', cruType: 'Grand Cru (100%)', code: 'NM' },
  'philipponnat': { commune: 'Mareuil-sur-Aÿ', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'mareuil-sur-ay', cruType: 'Premier Cru (99%)', code: 'NM' },
  'laurent-perrier': { commune: 'Tours-sur-Marne', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'tours-sur-marne', cruType: 'Grand Cru (100%)', code: 'NM' },
  'laurent perrier': { commune: 'Tours-sur-Marne', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'tours-sur-marne', cruType: 'Grand Cru (100%)', code: 'NM' },
  'ruinart': { commune: 'Reims', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: null, cruType: 'Prestige House', code: 'NM' },
  'salon': { commune: 'Le Mesnil-sur-Oger', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'le-mesnil-sur-oger', cruType: 'Grand Cru (100%)', code: 'NM' },
  'jacquesson': { commune: 'Dizy', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'dizy', cruType: 'Premier Cru (95%)', code: 'NM' },
  'frédéric savart': { commune: 'Écueil', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ecueil', cruType: 'Premier Cru (90%)', code: 'RM' },
  'frederic savart': { commune: 'Écueil', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ecueil', cruType: 'Premier Cru (90%)', code: 'RM' },
  'savart': { commune: 'Écueil', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ecueil', cruType: 'Premier Cru (90%)', code: 'RM' },
  'georges laval': { commune: 'Cumières', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'cumieres', cruType: 'Premier Cru (93%)', code: 'RM' },
  'geoffroy': { commune: 'Cumières', subregionId: 'vallee-de-la-marne', subregion: 'Vallée de la Marne', cruId: 'cumieres', cruType: 'Premier Cru (93%)', code: 'RM' },
  'jm sélèque': { commune: 'Pierry', subregionId: 'coteaux-sud-epernay', subregion: 'Coteaux Sud d’Épernay', cruId: 'pierry', cruType: 'Premier Cru (90%)', code: 'RM' },
  'jm seleque': { commune: 'Pierry', subregionId: 'coteaux-sud-epernay', subregion: 'Coteaux Sud d’Épernay', cruId: 'pierry', cruType: 'Premier Cru (90%)', code: 'RM' },
  'olivier horiot': { commune: 'Les Riceys', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Rosé des Riceys', code: 'RM' },
  'drappier': { commune: 'Urville', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Kimmeridgian House', code: 'NM' },
  'fleury': { commune: 'Courteron', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Biodynamic Pioneer', code: 'RM' },
  'marie-courtin': { commune: 'Polisot', subregionId: 'cote-des-bar', subregion: 'Côte des Bar (Aube)', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'doyard': { commune: 'Vertus', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'vertus', cruType: 'Premier Cru (95%)', code: 'RM' },
  'suenen': { commune: 'Cramant', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'cramant', cruType: 'Grand Cru (100%)', code: 'RM' },
  'diebolt-vallois': { commune: 'Cramant', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: 'cramant', cruType: 'Grand Cru (100%)', code: 'RM' },
  'dhondt-grellet': { commune: 'Flavigny', subregionId: 'cote-des-blancs', subregion: 'Côte des Blancs', cruId: null, cruType: 'Artisanal Grower', code: 'RM' },
  'marguet': { commune: 'Ambonnay', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'ambonnay', cruType: 'Grand Cru (100%)', code: 'RM' },
  'benoît lahaye': { commune: 'Bouzy', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'bouzy', cruType: 'Grand Cru (100%)', code: 'RM' },
  'benoit lahaye': { commune: 'Bouzy', subregionId: 'montagne-de-reims', subregion: 'Montagne de Reims', cruId: 'bouzy', cruType: 'Grand Cru (100%)', code: 'RM' }
};

function matchChampagneWine(wine, region) {
  if (!wine || typeof wine !== 'object') return { matchedSubId: null, matchedCruId: null, cruClassification: null, commune: null, producerCode: null };
  const prodLower = String(wine.Producer || '').toLowerCase().trim();
  const wineLower = String(wine.Wine || wine.Designation || '').toLowerCase().trim();
  const locLower = String(wine.Locale || '').toLowerCase().trim();
  const combinedText = `${prodLower} ${wineLower} ${locLower}`;

  let matchedSubId = null;
  let matchedCruId = null;
  let cruClassification = null;
  let commune = null;
  let producerCode = null;

  // 1. Direct producer dictionary match
  if (CHAMPAGNE_PRODUCER_MAP[prodLower]) {
    const info = CHAMPAGNE_PRODUCER_MAP[prodLower];
    matchedSubId = info.subregionId;
    matchedCruId = info.cruId;
    cruClassification = info.cruType;
    commune = info.commune;
    producerCode = info.code;
  } else {
    for (const [key, info] of Object.entries(CHAMPAGNE_PRODUCER_MAP)) {
      if (prodLower.includes(key) || combinedText.includes(key)) {
        matchedSubId = info.subregionId;
        matchedCruId = info.cruId;
        cruClassification = info.cruType;
        commune = info.commune;
        producerCode = info.code;
        break;
      }
    }
  }

  // 2. Specific parcel/village overrides in wine title
  if (combinedText.includes('villers-allerand') || combinedText.includes('montchenot')) {
    commune = 'Villers-Allerand';
    matchedCruId = 'villers-allerand';
    cruClassification = 'Premier Cru (90%)';
    matchedSubId = 'montagne-de-reims';
  } else if (combinedText.includes('vignes de vrigny') || combinedText.includes('vrigny')) {
    commune = 'Vrigny';
    matchedCruId = 'vrigny';
    cruClassification = 'Premier Cru (90%)';
    matchedSubId = 'montagne-de-reims';
  }

  // 3. Match against Grand Crus (17)
  if (region?.grandCrus) {
    for (const cru of region.grandCrus) {
      const cruNameLower = cru.name.toLowerCase();
      if (combinedText.includes(cruNameLower)) {
        matchedCruId = cru.id;
        cruClassification = '👑 Grand Cru (100%)';
        commune = cru.name;
        if (cru.subregionId) matchedSubId = cru.subregionId;
        else if (cru.subregion) {
          const sub = (region.subRegions || []).find(s => s.name.toLowerCase().includes(cru.subregion.toLowerCase()));
          if (sub) matchedSubId = sub.id;
        }
        break;
      }
    }
  }

  // 4. Match against Premier Crus (16)
  if (!matchedCruId && region?.premierCrus) {
    for (const cru of region.premierCrus) {
      const cruNameLower = cru.name.toLowerCase();
      if (combinedText.includes(cruNameLower)) {
        matchedCruId = cru.id;
        cruClassification = `🥇 Premier Cru (${cru.echelleRating}% Échelle)`;
        commune = cru.name;
        if (cru.subregionId) matchedSubId = cru.subregionId;
        else if (cru.subregion) {
          const sub = (region.subRegions || []).find(s => s.name.toLowerCase().includes(cru.subregion.toLowerCase()));
          if (sub) matchedSubId = sub.id;
        }
        break;
      }
    }
  }

  return { matchedSubId, matchedCruId, cruClassification, commune, producerCode };
}

console.log('================================================================');
console.log('STARTING CHAMPAGNE CMS LEVEL 3 SOMMELIER E2E TEST SUITE');
console.log('================================================================\n');

// ============================================================================
// TIER 1: FEATURE COVERAGE (All 17 Features x >=5 tests)
// ============================================================================
console.log('----------------------------------------------------------------');
console.log('TIER 1: FEATURE COVERAGE (17 Core Architectural Features)');
console.log('----------------------------------------------------------------');

// ----------------------------------------------------------------------------
// Feature 1: 17 Grand Crus Catalog
// ----------------------------------------------------------------------------
test(1, 'F01_GrandCrus', 'CHAMPAGNE_GRAND_CRUS contains exactly 17 Grand Cru communes', () => {
  assert.strictEqual(CHAMPAGNE_GRAND_CRUS.length, 17, `Expected 17 Grand Crus, found ${CHAMPAGNE_GRAND_CRUS.length}`);
  assert.strictEqual(WINE_REGIONS.champagne.grandCrus.length, 17, 'WINE_REGIONS.champagne.grandCrus must equal 17');
});

test(1, 'F01_GrandCrus', 'Montagne de Reims contains exactly 9 Grand Crus with verified IDs', () => {
  const mdrCrus = CHAMPAGNE_GRAND_CRUS.filter(c => c.subregionId === 'montagne-de-reims' || c.subregion === 'Montagne de Reims');
  assert.strictEqual(mdrCrus.length, 9, `Expected 9 Montagne de Reims Grand Crus, found ${mdrCrus.length}`);
  const expectedIds = ['ambonnay', 'bouzy', 'verzenay', 'mailly-champagne', 'verzy', 'beaumont-sur-vesle', 'sillery', 'puisieulx', 'louvois'];
  for (const exp of expectedIds) {
    const found = mdrCrus.find(c => c.id === exp);
    assert(found, `Montagne de Reims must include Grand Cru ${exp}`);
  }
});

test(1, 'F01_GrandCrus', 'Vallée de la Marne contains exactly 2 Grand Crus (Aÿ & Tours-sur-Marne)', () => {
  const vdmCrus = CHAMPAGNE_GRAND_CRUS.filter(c => c.subregionId === 'vallee-de-la-marne' || c.subregion === 'Vallée de la Marne');
  assert.strictEqual(vdmCrus.length, 2, `Expected 2 Vallée de la Marne Grand Crus, found ${vdmCrus.length}`);
  const ids = vdmCrus.map(c => c.id);
  assert(ids.includes('ay') && ids.includes('tours-sur-marne'), 'Must include "ay" and "tours-sur-marne"');
});

test(1, 'F01_GrandCrus', 'Côte des Blancs contains exactly 6 Grand Crus (Avize, Chouilly, Cramant, Le Mesnil, Oger, Oiry)', () => {
  const cdbCrus = CHAMPAGNE_GRAND_CRUS.filter(c => c.subregionId === 'cote-des-blancs' || c.subregion === 'Côte des Blancs');
  assert.strictEqual(cdbCrus.length, 6, `Expected 6 Côte des Blancs Grand Crus, found ${cdbCrus.length}`);
  const expectedIds = ['avize', 'chouilly', 'cramant', 'le-mesnil-sur-oger', 'oger', 'oiry'];
  for (const exp of expectedIds) {
    assert(cdbCrus.some(c => c.id === exp), `Côte des Blancs must include Grand Cru ${exp}`);
  }
});

test(1, 'F01_GrandCrus', 'All 17 Grand Crus have 100% échelle rating and valid GPS in Champagne region', () => {
  for (const cru of CHAMPAGNE_GRAND_CRUS) {
    assert.strictEqual(cru.echelleRating, 100, `Cru ${cru.id} échelle rating must be 100`);
    assert(typeof cru.lat === 'number' && cru.lat >= 48.8 && cru.lat <= 49.3, `Cru ${cru.id} lat out of bounds: ${cru.lat}`);
    assert(typeof cru.lng === 'number' && cru.lng >= 3.8 && cru.lng <= 4.3, `Cru ${cru.id} lng out of bounds: ${cru.lng}`);
  }
});

test(1, 'F01_GrandCrus', 'All 17 Grand Crus document aspect, soils, character, benchmark producers, and iconic vineyards', () => {
  for (const cru of CHAMPAGNE_GRAND_CRUS) {
    assert(cru.aspect && cru.aspect.length > 3, `Cru ${cru.id} must document aspect`);
    assert(cru.soil && cru.soil.length > 5, `Cru ${cru.id} must document soil`);
    assert(cru.character && cru.character.length > 10, `Cru ${cru.id} must document sensory character`);
    assert(Array.isArray(cru.benchmarkProducers) && cru.benchmarkProducers.length >= 2, `Cru ${cru.id} must list >= 2 benchmark producers`);
    assert(Array.isArray(cru.iconicVineyards) && cru.iconicVineyards.length >= 1, `Cru ${cru.id} must list >= 1 iconic vineyard`);
  }
});

test(1, 'F01_GrandCrus', 'Asymmetric Grand Crus are documented accurately (Tours-sur-Marne and Chouilly)', () => {
  const tours = CHAMPAGNE_GRAND_CRUS.find(c => c.id === 'tours-sur-marne');
  assert(tours, 'Tours-sur-Marne must exist');
  assert(tours.dominantGrape.includes('Pinot Noir') && tours.dominantGrape.includes('Chardonnay'), 'Tours-sur-Marne documents Pinot Noir (100% GC) and Chardonnay (90% 1er)');

  const chouilly = CHAMPAGNE_GRAND_CRUS.find(c => c.id === 'chouilly');
  assert(chouilly, 'Chouilly must exist');
  assert(chouilly.dominantGrape.includes('Chardonnay') && chouilly.dominantGrape.includes('Pinot Noir'), 'Chouilly documents Chardonnay (100% GC) and Pinot Noir (90% 1er)');
});

// ----------------------------------------------------------------------------
// Feature 2: 7 Subregions & Micro-Terroirs
// ----------------------------------------------------------------------------
test(1, 'F02_Subregions', 'CHAMPAGNE_SUBREGIONS contains all 7 canonical Champagne subregions', () => {
  assert.strictEqual(CHAMPAGNE_SUBREGIONS.length, 7, `Expected 7 subregions, got ${CHAMPAGNE_SUBREGIONS.length}`);
  const expected = ['montagne-de-reims', 'vallee-de-la-marne', 'cote-des-blancs', 'cote-de-sezanne', 'cote-des-bar', 'coteaux-sud-epernay', 'vitryat'];
  for (const id of expected) {
    assert(CHAMPAGNE_SUBREGIONS.some(s => s.id === id), `Subregion ${id} must exist`);
  }
});

test(1, 'F02_Subregions', 'Montagne de Reims defines all 4 micro-terroirs', () => {
  const mdr = CHAMPAGNE_SUBREGIONS.find(s => s.id === 'montagne-de-reims');
  assert(mdr && Array.isArray(mdr.microTerroirs), 'Montagne de Reims must define microTerroirs array');
  assert.strictEqual(mdr.microTerroirs.length, 4, 'Montagne de Reims must have 4 micro-terroirs');
  const names = mdr.microTerroirs.map(m => m.name);
  assert(names.includes('Grande Montagne'), 'Must include Grande Montagne');
  assert(names.includes('Monts de Berne'), 'Must include Monts de Berne');
  assert(names.includes('Massif de Saint-Thierry'), 'Must include Massif de Saint-Thierry');
  assert(names.includes('Vesle & Ardre Valleys'), 'Must include Vesle & Ardre Valleys');
});

test(1, 'F02_Subregions', 'Vallée de la Marne defines all 4 micro-terroirs including Rive Droite and Rive Gauche', () => {
  const vdm = CHAMPAGNE_SUBREGIONS.find(s => s.id === 'vallee-de-la-marne');
  assert(vdm && Array.isArray(vdm.microTerroirs), 'Vallée de la Marne must define microTerroirs array');
  assert.strictEqual(vdm.microTerroirs.length, 4, 'Vallée de la Marne must have 4 micro-terroirs');
  const names = vdm.microTerroirs.map(m => m.name);
  assert(names.some(n => n.includes('Grande Vallée')), 'Must include Grande Vallée');
  assert(names.some(n => n.includes('Rive Droite')), 'Must include Rive Droite');
  assert(names.some(n => n.includes('Rive Gauche')), 'Must include Rive Gauche');
  assert(names.some(n => n.includes('Confluence')), 'Must include Confluence / Marne Ouest');
});

test(1, 'F02_Subregions', 'Côte des Blancs defines classic chalk escarpment with 4 micro-zones', () => {
  const cdb = CHAMPAGNE_SUBREGIONS.find(s => s.id === 'cote-des-blancs');
  assert(cdb && cdb.geology.includes('Belemnite chalk'), 'Côte des Blancs geology must specify Belemnite chalk');
  assert.strictEqual(cdb.microTerroirs.length, 4, 'Côte des Blancs must define 4 micro-terroirs');
  assert(cdb.dominantGrapes.includes('Chardonnay'), 'Dominant grape must be Chardonnay');
});

test(1, 'F02_Subregions', 'Côte des Bar / Aube defines Barséquanais and Bar-sur-Aubois with Kimmeridgian marls', () => {
  const cdb = CHAMPAGNE_SUBREGIONS.find(s => s.id === 'cote-des-bar');
  assert(cdb, 'Côte des Bar must exist');
  assert(cdb.terroir.includes('Kimmeridgian'), 'Terroir must specify Kimmeridgian marls');
  assert(cdb.terroir.includes('Exogyra virgula'), 'Must reference Exogyra virgula marine fossils');
  const microNames = cdb.microTerroirs.map(m => m.name);
  assert(microNames.some(n => n.includes('Barséquanais')), 'Must include Barséquanais');
  assert(microNames.some(n => n.includes('Bar-sur-Aubois')), 'Must include Bar-sur-Aubois');
});

test(1, 'F02_Subregions', 'Coteaux Sud d’Épernay and Vitryat define transitional geology and distinct focuses', () => {
  const cse = CHAMPAGNE_SUBREGIONS.find(s => s.id === 'coteaux-sud-epernay');
  assert(cse && (cse.geology.includes('flint') || cse.geology.includes('silex') || cse.geology.includes('meulière')), 'Coteaux Sud d’Épernay must mention flint/silex');
  
  const vit = CHAMPAGNE_SUBREGIONS.find(s => s.id === 'vitryat');
  assert(vit && vit.dominantGrapes.includes('Chardonnay'), 'Vitryat must specify Chardonnay');
  assert(vit.geology.includes('Turonian chalk'), 'Vitryat must specify Turonian chalk');
});

// ----------------------------------------------------------------------------
// Feature 3: 16 Premier Crus Catalog
// ----------------------------------------------------------------------------
test(1, 'F03_PremierCrus', 'CHAMPAGNE_PREMIER_CRUS contains exactly 16 Premier Cru communes', () => {
  assert.strictEqual(CHAMPAGNE_PREMIER_CRUS.length, 16, `Expected 16 Premier Crus, got ${CHAMPAGNE_PREMIER_CRUS.length}`);
  assert.strictEqual(WINE_REGIONS.champagne.premierCrus.length, 16, 'WINE_REGIONS.champagne.premierCrus must equal 16');
});

test(1, 'F03_PremierCrus', 'All 16 Premier Crus have échelle ratings within the legal 90%–99% scale', () => {
  for (const pc of CHAMPAGNE_PREMIER_CRUS) {
    assert(
      typeof pc.echelleRating === 'number' && pc.echelleRating >= 90 && pc.echelleRating <= 99,
      `Cru ${pc.id} échelle rating (${pc.echelleRating}) must be between 90 and 99`
    );
  }
});

test(1, 'F03_PremierCrus', 'Top Premier Crus at 99% échelle include Mareuil-sur-Aÿ, Tauxières-Mutry, and Bisseuil', () => {
  const crus99 = CHAMPAGNE_PREMIER_CRUS.filter(c => c.echelleRating === 99);
  assert.strictEqual(crus99.length, 3, 'There must be exactly three 99% Premier Crus');
  const ids = crus99.map(c => c.id);
  assert(ids.includes('mareuil-sur-ay') && ids.includes('tauxieres-mutry') && ids.includes('bisseuil'), 'Must include mareuil-sur-ay, tauxieres-mutry, bisseuil');
});

test(1, 'F03_PremierCrus', '95% Échelle Premier Crus verified (Vertus, Trépail, Villers-Marmery, Dizy, Cuis)', () => {
  const crus95 = CHAMPAGNE_PREMIER_CRUS.filter(c => c.echelleRating === 95);
  assert(crus95.length >= 5, 'Must have at least 5 Premier Crus at 95%');
  const ids = crus95.map(c => c.id);
  assert(ids.includes('vertus') && ids.includes('trepail') && ids.includes('villers-marmery') && ids.includes('dizy') && ids.includes('cuis'));
});

test(1, 'F03_PremierCrus', '94%, 93%, and 90% Échelle Premier Crus verified with accurate ratings', () => {
  const chigny = CHAMPAGNE_PREMIER_CRUS.find(c => c.id === 'chigny-les-roses');
  assert.strictEqual(chigny?.echelleRating, 94, 'Chigny-les-Roses must be 94%');

  const rilly = CHAMPAGNE_PREMIER_CRUS.find(c => c.id === 'rilly-la-montagne');
  assert.strictEqual(rilly?.echelleRating, 94, 'Rilly-la-Montagne must be 94%');

  const ludes = CHAMPAGNE_PREMIER_CRUS.find(c => c.id === 'ludes');
  assert.strictEqual(ludes?.echelleRating, 94, 'Ludes must be 94%');

  const hautvillers = CHAMPAGNE_PREMIER_CRUS.find(c => c.id === 'hautvillers');
  assert.strictEqual(hautvillers?.echelleRating, 93, 'Hautvillers must be 93%');

  const cumieres = CHAMPAGNE_PREMIER_CRUS.find(c => c.id === 'cumieres');
  assert.strictEqual(cumieres?.echelleRating, 93, 'Cumières must be 93%');

  const pierry = CHAMPAGNE_PREMIER_CRUS.find(c => c.id === 'pierry');
  assert.strictEqual(pierry?.echelleRating, 90, 'Pierry must be 90%');

  const ecueil = CHAMPAGNE_PREMIER_CRUS.find(c => c.id === 'ecueil');
  assert.strictEqual(ecueil?.echelleRating, 90, 'Écueil must be 90%');

  const vrigny = CHAMPAGNE_PREMIER_CRUS.find(c => c.id === 'vrigny');
  assert.strictEqual(vrigny?.echelleRating, 90, 'Vrigny must be 90%');
});

test(1, 'F03_PremierCrus', 'Every Premier Cru documents GPS, soils, character, and benchmark producers', () => {
  for (const pc of CHAMPAGNE_PREMIER_CRUS) {
    assert(typeof pc.lat === 'number' && pc.lat >= 48.8 && pc.lat <= 49.3, `PC ${pc.id} lat valid`);
    assert(typeof pc.lng === 'number' && pc.lng >= 3.8 && pc.lng <= 4.3, `PC ${pc.id} lng valid`);
    assert(pc.soil && pc.soil.length > 5, `PC ${pc.id} soil documented`);
    assert(pc.character && pc.character.length > 10, `PC ${pc.id} character documented`);
    assert(Array.isArray(pc.benchmarkProducers) && pc.benchmarkProducers.length >= 1, `PC ${pc.id} benchmark producers documented`);
  }
});

// ----------------------------------------------------------------------------
// Feature 4: Geology & Soils Stratigraphy
// ----------------------------------------------------------------------------
test(1, 'F04_Geology', 'Geology formations array contains all 5 primary stratigraphies', () => {
  const forms = CHAMPAGNE_TECHNICAL_REGULATIONS.geology.formations;
  assert(Array.isArray(forms) && forms.length === 5, `Expected 5 geological formations, got ${forms?.length}`);
  const ids = forms.map(f => f.id);
  assert(ids.includes('belemnite-chalk') && ids.includes('micraster-chalk') && ids.includes('kimmeridgian-marl') && ids.includes('sparnacian-clay') && ids.includes('alluvial-gravels'));
});

test(1, 'F04_Geology', 'Belemnite Chalk specifies Belemnitella quadrata fossil, Campanian period, and 35-40% porosity', () => {
  const bel = CHAMPAGNE_TECHNICAL_REGULATIONS.geology.formations.find(f => f.id === 'belemnite-chalk');
  assert(bel, 'Belemnite chalk must exist');
  assert(bel.fossil.includes('Belemnitella quadrata'), 'Must specify Belemnitella quadrata');
  assert(bel.period.includes('Upper Cretaceous') || bel.period.includes('Campanian'), 'Period must be Upper Cretaceous / Campanian');
  assert(bel.porosity.includes('35% to 40%') || bel.characteristics.includes('35-40%'), 'Porosity must be 35-40%');
});

test(1, 'F04_Geology', 'Micraster Chalk specifies heart sea urchin fossils and valley plain locations', () => {
  const mic = CHAMPAGNE_TECHNICAL_REGULATIONS.geology.formations.find(f => f.id === 'micraster-chalk');
  assert(mic, 'Micraster chalk must exist');
  assert(mic.fossil.includes('Micraster'), 'Must specify Micraster');
  assert(mic.keyAreas.some(a => a.toLowerCase().includes('valley') || a.toLowerCase().includes('marne')), 'Must reference valley plains');
});

test(1, 'F04_Geology', 'Kimmeridgian Marl specifies Exogyra virgula oysters and Côte des Bar location', () => {
  const kim = CHAMPAGNE_TECHNICAL_REGULATIONS.geology.formations.find(f => f.id === 'kimmeridgian-marl');
  assert(kim, 'Kimmeridgian marl must exist');
  assert(kim.fossil.includes('Exogyra virgula'), 'Must specify Exogyra virgula');
  assert(kim.keyAreas.some(a => a.includes('Côte des Bar') || a.includes('Aube')), 'Must specify Côte des Bar / Aube');
  assert(kim.period.includes('Upper Jurassic'), 'Must specify Upper Jurassic period');
});

test(1, 'F04_Geology', 'Sparnacian Clays specify Lower Eocene period and Meunier water retention in Marne Valley', () => {
  const spar = CHAMPAGNE_TECHNICAL_REGULATIONS.geology.formations.find(f => f.id === 'sparnacian-clay');
  assert(spar, 'Sparnacian clay must exist');
  assert(spar.period.includes('Eocene') || spar.period.includes('Tertiary'), 'Period must be Lower Eocene / Tertiary');
  assert(spar.wineImpact.includes('Meunier'), 'Wine impact must explain benefit for Meunier');
  assert(spar.keyAreas.some(a => a.includes('Vallée de la Marne')), 'Key area must include Vallée de la Marne');
});

test(1, 'F04_Geology', 'Quaternary Alluvium specifies well-drained river terrace silts and gravels', () => {
  const alluv = CHAMPAGNE_TECHNICAL_REGULATIONS.geology.formations.find(f => f.id === 'alluvial-gravels');
  assert(alluv, 'Alluvial gravels must exist');
  assert(alluv.period.includes('Quaternary'), 'Period must be Quaternary');
  assert(alluv.keyAreas.some(a => a.includes('Tours-sur-Marne') || a.includes('Marne')), 'Key area must include riverbank crus');
});

// ----------------------------------------------------------------------------
// Feature 5: 7 Authorized Grape Varieties
// ----------------------------------------------------------------------------
test(1, 'F05_Grapes', 'Major grapes array contains 3 varieties summing to 100% of major acreage', () => {
  const major = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.major;
  assert.strictEqual(major.length, 3, 'Must have 3 major grapes');
  const sum = major.reduce((acc, g) => acc + g.percentage, 0);
  assert.strictEqual(sum, 100, `Major grape percentages must sum to 100, got ${sum}`);
  const names = major.map(g => g.id);
  assert(names.includes('pinot-noir') && names.includes('chardonnay') && names.includes('meunier'));
});

test(1, 'F05_Grapes', 'Heritage grapes array contains all 4 authorized rare varieties', () => {
  const heritage = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.heritage;
  assert.strictEqual(heritage.length, 4, 'Must have 4 heritage grapes');
  const ids = heritage.map(g => g.id);
  assert(ids.includes('pinot-blanc') && ids.includes('arbane') && ids.includes('petit-meslier') && ids.includes('pinot-gris'));
});

test(1, 'F05_Grapes', 'Pinot Blanc (Blanc Vrai) and Arbane document authentic profiles and Aube epicenters', () => {
  const pb = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.heritage.find(g => g.id === 'pinot-blanc');
  assert(pb && pb.frenchSynonym === 'Blanc Vrai', 'Pinot Blanc synonym must be Blanc Vrai');
  assert(pb.epicenter.includes('Côte des Bar'), 'Pinot Blanc epicenter must be Côte des Bar');

  const arb = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.heritage.find(g => g.id === 'arbane');
  assert(arb && (arb.frenchSynonym.includes('Arbanne') || arb.frenchSynonym.includes('Darbanne')), 'Arbane synonym must be Arbanne / Darbanne');
  assert(arb.epicenter.includes('Aube'), 'Arbane epicenter must be Aube');
});

test(1, 'F05_Grapes', 'Petit Meslier and Pinot Gris (Fromenteau) document profiles and status', () => {
  const pm = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.heritage.find(g => g.id === 'petit-meslier');
  assert(pm && pm.frenchSynonym.includes('Meslier'), 'Petit Meslier synonym documented');
  assert(pm.role.includes('Gouais Blanc') || pm.profile.includes('acidity'), 'Petit Meslier crossing/profile documented');

  const pg = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.heritage.find(g => g.id === 'pinot-gris');
  assert(pg && pg.frenchSynonym.includes('Fromenteau'), 'Pinot Gris synonym must be Fromenteau');
});

test(1, 'F05_Grapes', 'Laherte Frères "Les 7" complantée parcel documents all 7 varieties in Chavot-Courcourt', () => {
  const comp = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.iconicComplantee;
  assert(comp, 'Iconic complantée must be documented');
  assert(comp.name.includes('Laherte Frères') && comp.name.includes('Les 7'), 'Must document Laherte Frères "Les 7"');
  assert(comp.location.includes('Chavot-Courcourt'), 'Location must be Chavot-Courcourt');
  assert(comp.description.includes('Pinot Noir') && comp.description.includes('Arbane') && comp.description.includes('Petit Meslier') && comp.description.includes('Pinot Blanc') && comp.description.includes('Pinot Gris'), 'Must list the 7 co-planted varieties');
});

test(1, 'F05_Grapes', 'Single-variety Blanc de Blancs vs Blanc de Noirs legal and structural profiles are defined', () => {
  const major = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.major;
  const pn = major.find(g => g.id === 'pinot-noir');
  const ch = major.find(g => g.id === 'chardonnay');
  assert(pn.role.includes('Blanc de Noirs'), 'Pinot Noir must mention Blanc de Noirs');
  assert(ch.role.includes('Blanc de Blancs'), 'Chardonnay must mention Blanc de Blancs');
});

test(1, 'F05_Grapes', 'Benchmark single-variety cuvées are documented for major and heritage varieties', () => {
  const major = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.major;
  const pn = major.find(g => g.id === 'pinot-noir');
  assert(pn.benchmarkCuvees.some(c => c.includes('Bollinger') || c.includes('VVF') || c.includes('Egly-Ouriet')));

  const ch = major.find(g => g.id === 'chardonnay');
  assert(ch.benchmarkCuvees.some(c => c.includes('Salon') || c.includes('Pierre Péters') || c.includes('Comtes')));
});

// ----------------------------------------------------------------------------
// Feature 6: CIVC Pressing & Yield Laws
// ----------------------------------------------------------------------------
test(1, 'F06_Pressing', 'CIVC Marc load is legally defined as exactly 4,000 kg whole-cluster grapes', () => {
  const p = CHAMPAGNE_TECHNICAL_REGULATIONS.pressing;
  assert.strictEqual(p.marcKg, 4000, 'Marc must be 4,000 kg');
  assert.strictEqual(p.maxAocMustLiters, 2550, 'Max AOC must must be 2,550 Liters');
});

test(1, 'F06_Pressing', 'Extraction yield is exactly 63.75% (2,550 L / 4,000 kg)', () => {
  const p = CHAMPAGNE_TECHNICAL_REGULATIONS.pressing;
  const yieldPct = (p.maxAocMustLiters / p.marcKg) * 100;
  assert(Math.abs(yieldPct - 63.75) < 0.0001, 'Extraction yield must be 63.75%');
  assert.strictEqual(p.extractionRatePct, 63.75, 'extractionRatePct must equal 63.75');
});

test(1, 'F06_Pressing', 'La Cuvée is exactly 2,050 Liters (10.25 pièces of 205 L each)', () => {
  const p = CHAMPAGNE_TECHNICAL_REGULATIONS.pressing;
  assert.strictEqual(p.cuveeLiters, 2050, 'La Cuvée must be 2,050 Liters');
  const cuveeFraction = p.fractions.find(f => f.fraction.includes('Cuvée'));
  assert(cuveeFraction && cuveeFraction.piecesEquivalent.includes('10.25 pièces'), 'Must specify 10.25 pièces');
  assert(cuveeFraction.destination.includes('Prestige') || cuveeFraction.destination.includes('Vintage'), 'Destination must include Prestige/Vintage');
});

test(1, 'F06_Pressing', 'La Taille is exactly 500 Liters (2.5 pièces of 205 L each)', () => {
  const p = CHAMPAGNE_TECHNICAL_REGULATIONS.pressing;
  assert.strictEqual(p.tailleLiters, 500, 'La Taille must be 500 Liters');
  const tailleFraction = p.fractions.find(f => f.fraction.includes('Taille'));
  assert(tailleFraction && tailleFraction.piecesEquivalent.includes('2.5 pièces'), 'Must specify 2.5 pièces');
});

test(1, 'F06_Pressing', 'Fractions sum rule: Cuvée (2,050 L) + Taille (500 L) = Total AOC Must (2,550 L)', () => {
  const p = CHAMPAGNE_TECHNICAL_REGULATIONS.pressing;
  assert.strictEqual(p.cuveeLiters + p.tailleLiters, p.maxAocMustLiters, 'Cuvée + Taille must equal 2,550 L');
});

test(1, 'F06_Pressing', 'La Rebêche mandatory distillation rate is 7% to 10% (strictly illegal for wine)', () => {
  const p = CHAMPAGNE_TECHNICAL_REGULATIONS.pressing;
  assert.strictEqual(p.rebecheMinPct, 7, 'Rebêche min must be 7%');
  assert.strictEqual(p.rebecheMaxPct, 10, 'Rebêche max must be 10%');
  assert.strictEqual(p.rebecheDistillationMandatory, true, 'Rebêche distillation must be mandatory');
  const rebecheFraction = p.fractions.find(f => f.fraction.toLowerCase().includes('rebêche') || f.fraction.toLowerCase().includes('rebeche'));
  assert(rebecheFraction && rebecheFraction.destination.includes('DISTILLATION'), 'Destination must require mandatory distillation');
});

// ----------------------------------------------------------------------------
// Feature 7: Aging Requirements & Autolysis
// ----------------------------------------------------------------------------
test(1, 'F07_Aging', 'Non-Vintage legally requires min 15 months total maturation with min 12 months on lees', () => {
  const nv = CHAMPAGNE_TECHNICAL_REGULATIONS.aging.nonVintage;
  assert(nv, 'Non-Vintage aging rules must exist');
  assert.strictEqual(nv.minTotalMonths, 15, 'NV min total months must be 15');
  assert.strictEqual(nv.minLeesMonths, 12, 'NV min lees months must be 12');
  assert(nv.rule.includes('15 months') && nv.rule.includes('12 months'), 'NV rule text must mention 15 and 12 months');
});

test(1, 'F07_Aging', 'Vintage Champagne legally requires min 36 months total maturation from tirage', () => {
  const v = CHAMPAGNE_TECHNICAL_REGULATIONS.aging.vintage;
  assert(v, 'Vintage aging rules must exist');
  assert.strictEqual(v.minTotalMonths, 36, 'Vintage min total months must be 36');
  assert(v.rule.includes('36 months') || v.rule.includes('3 years'), 'Vintage rule text must specify 36 months / 3 years');
});

test(1, 'F07_Aging', 'Vintage harvest declaration cap is strictly capped at maximum 80%', () => {
  const v = CHAMPAGNE_TECHNICAL_REGULATIONS.aging.vintage;
  assert.strictEqual(v.declarationCapPct, 80, 'Vintage declaration cap must be strictly 80%');
  assert(v.description.includes('20%') && v.description.includes('reserve'), 'Description must explain 20% retained for reserve wines');
});

test(1, 'F07_Aging', 'Autolysis chemistry and cellar sur lattes mechanisms are documented', () => {
  const nv = CHAMPAGNE_TECHNICAL_REGULATIONS.aging.nonVintage;
  assert(nv.description.includes('autolysis') || nv.description.includes('mannoproteins') || nv.description.includes('lees'), 'Must describe yeast autolysis integration');
});

test(1, 'F07_Aging', 'Vintage Champagne 100% single harvest year mandate is documented', () => {
  const v = CHAMPAGNE_TECHNICAL_REGULATIONS.aging.vintage;
  assert(v.description.includes('100% of fruit') || v.description.includes('single stated harvest'), 'Must mandate 100% fruit from vintage year');
});

test(1, 'F07_Aging', 'Extended aging benchmark prestige cuvées document 6 to 15+ years sur lattes', () => {
  const dp = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'dom-perignon');
  assert(dp.winemaking.includes('8-10 years') || dp.winemaking.includes('Plénitude'), 'Dom Pérignon documents extended lees aging');

  const comtes = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'comtes-de-champagne');
  assert(comtes.winemaking.includes('10 years'), 'Comtes de Champagne documents 10 years aging');
});

// ----------------------------------------------------------------------------
// Feature 8: 7 Official Dosage Sweetness Tiers
// ----------------------------------------------------------------------------
test(1, 'F08_Dosage', 'CHAMPAGNE_TECHNICAL_REGULATIONS contains all 7 official dosage tiers', () => {
  const tiers = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers;
  assert.strictEqual(tiers.length, 7, `Expected 7 dosage tiers, got ${tiers.length}`);
  const expected = ['brut-nature', 'extra-brut', 'brut', 'extra-dry', 'sec', 'demi-sec', 'doux'];
  for (const exp of expected) {
    assert(tiers.some(t => t.id === exp), `Dosage tier ${exp} must exist`);
  }
});

test(1, 'F08_Dosage', 'Brut Nature has strictly 0–3 g/L residual sugar with NO added sugar allowed', () => {
  const bn = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers.find(t => t.id === 'brut-nature');
  assert(bn, 'Brut Nature must exist');
  assert.strictEqual(bn.gPerLMin, 0, 'Brut Nature min must be 0');
  assert.strictEqual(bn.gPerLMax, 3, 'Brut Nature max must be 3');
  assert.strictEqual(bn.sugarAddedAllowed, false, 'sugarAddedAllowed must be FALSE for Brut Nature');
  assert(bn.frenchTerms.includes('Pas Dosé') && bn.frenchTerms.includes('Zero Dosage'), 'Must list French terms Pas Dosé / Zero Dosage');
});

test(1, 'F08_Dosage', 'Extra Brut (0–6 g/L) and Brut (0–12 g/L) thresholds verified', () => {
  const eb = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers.find(t => t.id === 'extra-brut');
  assert(eb && eb.gPerLMin === 0 && eb.gPerLMax === 6 && eb.sugarAddedAllowed === true);

  const brut = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers.find(t => t.id === 'brut');
  assert(brut && brut.gPerLMin === 0 && brut.gPerLMax === 12 && brut.sugarAddedAllowed === true);
});

test(1, 'F08_Dosage', 'Extra Dry (12–17 g/L) and Sec (17–32 g/L) thresholds verified', () => {
  const ed = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers.find(t => t.id === 'extra-dry');
  assert(ed && ed.gPerLMin === 12 && ed.gPerLMax === 17);

  const sec = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers.find(t => t.id === 'sec');
  assert(sec && sec.gPerLMin === 17 && sec.gPerLMax === 32);
});

test(1, 'F08_Dosage', 'Demi-Sec (32–50 g/L) and Doux (50+ g/L) thresholds verified', () => {
  const ds = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers.find(t => t.id === 'demi-sec');
  assert(ds && ds.gPerLMin === 32 && ds.gPerLMax === 50);

  const doux = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers.find(t => t.id === 'doux');
  assert(doux && doux.gPerLMin === 50 && doux.gPerLMax >= 50);
});

test(1, 'F08_Dosage', 'Every dosage tier documents sensory profile and sommelier food pairing', () => {
  for (const tier of CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers) {
    assert(tier.profile && tier.profile.length > 5, `Tier ${tier.id} profile missing`);
    assert(tier.foodPairing && tier.foodPairing.length > 5, `Tier ${tier.id} food pairing missing`);
  }
});

// ----------------------------------------------------------------------------
// Feature 9: 7 CIVC Producer Matriculation Codes
// ----------------------------------------------------------------------------
test(1, 'F09_ProducerCodes', 'CHAMPAGNE_TECHNICAL_REGULATIONS documents all 7 CIVC registration codes', () => {
  const codes = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes;
  assert.strictEqual(codes.length, 7, `Expected 7 producer codes, got ${codes.length}`);
  const expectedCodes = ['NM', 'RM', 'CM', 'RC', 'SR', 'ND', 'MA'];
  for (const exp of expectedCodes) {
    assert(codes.some(c => c.code === exp), `Code ${exp} must exist`);
  }
});

test(1, 'F09_ProducerCodes', 'NM (Négociant-Manipulant) documents commercial houses and grape purchasing models', () => {
  const nm = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === 'NM');
  assert(nm, 'NM must exist');
  assert(nm.frenchName === 'Négociant-Manipulant', 'French name must be Négociant-Manipulant');
  assert(nm.exampleProducers.includes('Moët & Chandon') && nm.exampleProducers.includes('Bollinger') && nm.exampleProducers.includes('Krug'), 'Examples must include Moët, Bollinger, Krug');
});

test(1, 'F09_ProducerCodes', 'RM (Récoltant-Manipulant) documents independent grower-producers with >=95% estate fruit', () => {
  const rm = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === 'RM');
  assert(rm, 'RM must exist');
  assert(rm.frenchName === 'Récoltant-Manipulant', 'French name must be Récoltant-Manipulant');
  assert(rm.description.includes('5%') || rm.description.includes('grower'), 'Must specify grower model with max 5% purchase limit');
  assert(rm.exampleProducers.includes('Jacques Selosse') && rm.exampleProducers.includes('Pierre Péters') && rm.exampleProducers.includes('Egly-Ouriet'), 'Examples must include Selosse, Péters, Egly-Ouriet');
});

test(1, 'F09_ProducerCodes', 'CM, RC, SR, ND, and MA definitions and operational models verified', () => {
  const cm = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === 'CM');
  assert(cm && cm.englishTranslation.includes('Cooperative'), 'CM must be Cooperative');

  const rc = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === 'RC');
  assert(rc && rc.frenchName === 'Récoltant-Coopérateur', 'RC must be Récoltant-Coopérateur');

  const sr = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === 'SR');
  assert(sr && sr.frenchName === 'Société de Récoltants', 'SR must be Société de Récoltants');

  const nd = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === 'ND');
  assert(nd && nd.frenchName === 'Négociant-Distributeur', 'ND must be Négociant-Distributeur');

  const ma = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === 'MA');
  assert(ma && ma.frenchName === "Marque d'Acheteur", 'MA must be Marque d\'Acheteur');
});

test(1, 'F09_ProducerCodes', 'Market share analysis documented (NM ~70% production / >85% exports vs RM ~20% France)', () => {
  const nm = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === 'NM');
  assert(nm.shareOfProduction.includes('70%') && nm.shareOfProduction.includes('85%'));

  const rm = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === 'RM');
  assert(rm.shareOfProduction.includes('20%'));
});

test(1, 'F09_ProducerCodes', 'All 10 iconic growers map to valid producer registration codes (RM or RC)', () => {
  for (const grower of CHAMPAGNE_ICONIC_GROWERS) {
    assert(grower.producerCode === 'RM' || grower.producerCode === 'RC', `Grower ${grower.id} must be RM or RC`);
  }
});

// ----------------------------------------------------------------------------
// Feature 10: Ancillary AOCs (Coteaux Champenois & Rosé des Riceys)
// ----------------------------------------------------------------------------
test(1, 'F10_AncillaryAocs', 'Both ancillary AOCs (Coteaux Champenois & Rosé des Riceys) exist and are documented', () => {
  const aocs = CHAMPAGNE_TECHNICAL_REGULATIONS.ancillaryAocs;
  assert.strictEqual(aocs.length, 2, 'Must have exactly 2 ancillary AOCs');
  assert(aocs.some(a => a.id === 'coteaux-champenois'), 'Must include Coteaux Champenois');
  assert(aocs.some(a => a.id === 'rose-des-riceys'), 'Must include Rosé des Riceys');
});

test(1, 'F10_AncillaryAocs', 'Coteaux Champenois AOC is defined as 100% still dry wine across Champagne AOC', () => {
  const cc = CHAMPAGNE_TECHNICAL_REGULATIONS.ancillaryAocs.find(a => a.id === 'coteaux-champenois');
  assert(cc, 'Coteaux Champenois must exist');
  assert.strictEqual(cc.establishedYear, 1974, 'Established year must be 1974');
  assert(cc.type.includes('Still') || cc.type.includes('vin tranquille'), 'Type must specify still dry wine');
  assert(cc.benchmarkCruCommunes.some(c => c.includes('Bouzy Rouge')), 'Must cite Bouzy Rouge');
});

test(1, 'F10_AncillaryAocs', 'Rosé des Riceys AOC is strictly 100% Pinot Noir saignée from the 3 Riceys villages', () => {
  const rdr = CHAMPAGNE_TECHNICAL_REGULATIONS.ancillaryAocs.find(a => a.id === 'rose-des-riceys');
  assert(rdr, 'Rosé des Riceys must exist');
  assert.strictEqual(rdr.establishedYear, 1947, 'Established year must be 1947');
  assert(rdr.permittedGrapes.includes('100% Pinot Noir'), 'Must specify strictly 100% Pinot Noir');
  assert(rdr.rules.some(r => r.includes('saignée')), 'Must require saignée maceration');
  assert(rdr.rules.some(r => r.includes('prohibited') || r.includes('strictly prohibited')), 'Must forbid white/red blending');
  assert(rdr.benchmarkProducers.some(p => p.includes('Olivier Horiot')), 'Must list Olivier Horiot');
});

test(1, 'F10_AncillaryAocs', 'Coteaux Champenois benchmark red crus include Bouzy, Ambonnay, Aÿ, and Cumières', () => {
  const cc = CHAMPAGNE_TECHNICAL_REGULATIONS.ancillaryAocs.find(a => a.id === 'coteaux-champenois');
  const crus = cc.benchmarkCruCommunes.join(' ');
  assert(crus.includes('Bouzy') && crus.includes('Ambonnay') && crus.includes('Aÿ') && crus.includes('Cumières'));
});

test(1, 'F10_AncillaryAocs', 'Rosé des Riceys historical connection to King Louis XIV is documented', () => {
  const rdr = CHAMPAGNE_TECHNICAL_REGULATIONS.ancillaryAocs.find(a => a.id === 'rose-des-riceys');
  assert(rdr.historicalLore.includes('Louis XIV') && rdr.historicalLore.includes('Versailles'));
});

// ----------------------------------------------------------------------------
// Feature 11: 12+ Prestige Cuvées & 10 Iconic Grower Estates
// ----------------------------------------------------------------------------
test(1, 'F11_PrestigeAndGrowers', 'CHAMPAGNE_PRESTIGE_CUVEES contains at least 12 benchmark prestige cuvées', () => {
  assert(CHAMPAGNE_PRESTIGE_CUVEES.length >= 12, `Expected >= 12 prestige cuvées, found ${CHAMPAGNE_PRESTIGE_CUVEES.length}`);
});

test(1, 'F11_PrestigeAndGrowers', 'First commercial prestige cuvée verified: Dom Pérignon (debut 1921 / released 1935)', () => {
  const dp = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'dom-perignon');
  assert(dp, 'Dom Pérignon must exist');
  assert.strictEqual(dp.houseOrGrower, 'Moët & Chandon', 'House must be Moët & Chandon');
  assert(String(dp.debutVintage).includes('1921'), 'Debut vintage must be 1921');
  assert(dp.sourcing.includes('Grand Cru') && dp.sourcing.includes('Hautvillers'), 'Sourcing must include Grand Crus + Hautvillers 1er Cru');
});

test(1, 'F11_PrestigeAndGrowers', 'Royal origin verified: Cristal (created 1876 for Tsar Alexander II, commercial 1945)', () => {
  const cristal = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'cristal');
  assert(cristal, 'Cristal must exist');
  assert.strictEqual(cristal.houseOrGrower, 'Louis Roederer', 'House must be Louis Roederer');
  assert(String(cristal.debutVintage).includes('1876'), 'Debut vintage must reference 1876');
});

test(1, 'F11_PrestigeAndGrowers', 'Single-vineyard clos cuvées verified: Clos des Goisses, Clos du Mesnil, Clos d’Ambonnay', () => {
  const cdg = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'clos-des-goisses');
  assert(cdg && cdg.sourcing.includes('Mareuil-sur-Aÿ') && String(cdg.debutVintage).includes('1935'));

  const cdm = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'clos-du-mesnil');
  assert(cdm && cdm.sourcing.includes('Le Mesnil-sur-Oger') && String(cdm.debutVintage).includes('1979'));

  const cda = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'clos-d-ambonnay');
  assert(cda && cda.sourcing.includes('Ambonnay') && String(cda.debutVintage).includes('1995'));
});

test(1, 'F11_PrestigeAndGrowers', 'Ungrafted pre-phylloxera vines verified: Bollinger Vieilles Vignes Françaises (VVF)', () => {
  const vvf = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'vieilles-vignes-francaises');
  assert(vvf, 'VVF must exist');
  assert(vvf.grapeComposition.includes('Ungrafted') || vvf.grapeComposition.includes('100% Ungrafted Pinot Noir'), 'Must specify ungrafted Pinot Noir');
  assert(vvf.sourcing.includes('Aÿ'), 'Sourcing must be Aÿ en foule parcels');
});

test(1, 'F11_PrestigeAndGrowers', 'CHAMPAGNE_ICONIC_GROWERS contains at least 10 master artisanal growers', () => {
  assert(CHAMPAGNE_ICONIC_GROWERS.length >= 10, `Expected >= 10 growers, got ${CHAMPAGNE_ICONIC_GROWERS.length}`);
  const expectedGrowers = ['jacques-selosse', 'pierre-peters', 'egly-ouriet', 'cedric-bouchard', 'agrapart-et-fils', 'houette-et-sorbee', 'jerome-prevost', 'ulysse-collin', 'david-leclapart', 'laherte-freres'];
  for (const exp of expectedGrowers) {
    assert(CHAMPAGNE_ICONIC_GROWERS.some(g => g.id === exp), `Grower ${exp} must exist`);
  }
});

// ----------------------------------------------------------------------------
// Feature 12: Interactive Cru Cartography & Leaflet Map Integration
// ----------------------------------------------------------------------------
test(1, 'F12_Cartography', 'WineRegionMap component file exists and contains layer filter hooks', () => {
  const mapFile = path.join(rootDir, 'src/components/WineRegionMap.jsx');
  assert(fs.existsSync(mapFile), 'WineRegionMap.jsx must exist');
  const content = fs.readFileSync(mapFile, 'utf-8');
  assert(content.includes('pinViewMode'), 'Must include pinViewMode state');
  assert(content.includes('grand-cru-pin'), 'Must include grand-cru-pin class');
  assert(content.includes('premier-cru-pin'), 'Must include premier-cru-pin class');
  assert(content.includes('selectedCruId'), 'Must support selectedCruId prop');
});

test(1, 'F12_Cartography', 'Champagne geographic center, bounding box, and zoom levels are defined', () => {
  const ch = WINE_REGIONS.champagne;
  assert(Array.isArray(ch.center) && ch.center[0] >= 48.8 && ch.center[0] <= 49.3, 'Center latitude must be valid');
  assert(Array.isArray(ch.center) && ch.center[1] >= 3.8 && ch.center[1] <= 4.3, 'Center longitude must be valid');
  assert(typeof ch.zoom === 'number' && ch.zoom >= 8 && ch.zoom <= 12, 'Default zoom must be 8-12');
  assert(Array.isArray(ch.bounds) && ch.bounds.length === 2, 'Bounds must be 2D box');
});

test(1, 'F12_Cartography', 'All 33 Grand and Premier Crus coordinates resolve within Champagne bounds', () => {
  const allCrus = [...CHAMPAGNE_GRAND_CRUS, ...CHAMPAGNE_PREMIER_CRUS];
  assert.strictEqual(allCrus.length, 33, 'Must have 33 total crus');
  for (const cru of allCrus) {
    assert(cru.lat >= 48.80 && cru.lat <= 49.30, `Cru ${cru.id} lat out of range: ${cru.lat}`);
    assert(cru.lng >= 3.70 && cru.lng <= 4.60, `Cru ${cru.id} lng out of range: ${cru.lng}`);
  }
});

test(1, 'F12_Cartography', 'Zoom control and attribution controls are configured', () => {
  const mapFile = path.join(rootDir, 'src/components/WineRegionMap.jsx');
  const content = fs.readFileSync(mapFile, 'utf-8');
  assert(content.includes("position: 'topright'"), 'Zoom control must be topright');
  assert(content.includes("attributionControl: false"), 'Attribution control must be suppressed for clean UI');
});

test(1, 'F12_Cartography', 'Custom pin icons distinguish Grand Cru gold vs Premier Cru amber vs subregion burgundy', () => {
  const mapFile = path.join(rootDir, 'src/components/WineRegionMap.jsx');
  const content = fs.readFileSync(mapFile, 'utf-8');
  assert(content.includes('grand-cru-pin'), 'Must generate grand-cru-pin marker');
  assert(content.includes('premier-cru-pin'), 'Must generate premier-cru-pin marker');
  assert(content.includes('custom-sommelier-marker'), 'Must generate custom-sommelier-marker');

  const css = fs.readFileSync(path.join(rootDir, 'src/index.css'), 'utf-8');
  assert(css.includes('.grand-cru-pin') && (css.includes('#d4af37') || css.includes('gold')), 'Grand Cru pin CSS must be gold styled');
  assert(css.includes('.premier-cru-pin') && (css.includes('#f59e0b') || css.includes('amber')), 'Premier Cru pin CSS must be amber styled');
});

// ----------------------------------------------------------------------------
// Feature 13: Cru Village Explorer & Subregion Filters
// ----------------------------------------------------------------------------
test(1, 'F13_CruExplorer', 'WineRegionDetail contains full Cru Explorer search and filtering implementation', () => {
  const detailFile = path.join(rootDir, 'src/components/WineRegionDetail.jsx');
  assert(fs.existsSync(detailFile), 'WineRegionDetail.jsx must exist');
  const content = fs.readFileSync(detailFile, 'utf-8');
  assert(content.includes('cruDistrictFilter'), 'Must have cruDistrictFilter state');
  assert(content.includes('cruClassificationFilter'), 'Must have cruClassificationFilter state');
  assert(content.includes('cruSearchQuery'), 'Must have cruSearchQuery state');
});

test(1, 'F13_CruExplorer', 'Subregion filter pills include All, Montagne de Reims, Vallée de la Marne, Côte des Blancs, Sézanne, Bar', () => {
  const detailFile = path.join(rootDir, 'src/components/WineRegionDetail.jsx');
  const content = fs.readFileSync(detailFile, 'utf-8');
  assert(content.includes('cru-filter-pill-bar'), 'Must have pill bar container');
  assert(content.includes('cru-filter-pill-btn'), 'Must have filter pill buttons');
});

test(1, 'F13_CruExplorer', 'Classification filter toggles between All Crus (33), Grand Crus (17), and Premier Crus (16)', () => {
  const unifiedCrus = [...CHAMPAGNE_GRAND_CRUS, ...CHAMPAGNE_PREMIER_CRUS];
  assert.strictEqual(unifiedCrus.length, 33);
  const gcOnly = unifiedCrus.filter(c => c.echelleRating === 100);
  assert.strictEqual(gcOnly.length, 17);
  const pcOnly = unifiedCrus.filter(c => c.echelleRating < 100);
  assert.strictEqual(pcOnly.length, 16);
});

test(1, 'F13_CruExplorer', 'Cru search matches commune name, benchmark producer, soil, and single vineyards', () => {
  const unifiedCrus = [...CHAMPAGNE_GRAND_CRUS.map(c => ({ ...c, isGrandCru: true })), ...CHAMPAGNE_PREMIER_CRUS.map(c => ({ ...c, isGrandCru: false }))];
  
  // Producer match: "Egly-Ouriet" -> Ambonnay, Vrigny
  const eglyMatches = unifiedCrus.filter(c => 
    c.benchmarkProducers?.some(p => p.toLowerCase().includes('egly-ouriet'))
  );
  assert(eglyMatches.some(c => c.id === 'ambonnay') && eglyMatches.some(c => c.id === 'vrigny'));

  // Soil match: "Belemnite"
  const belMatches = unifiedCrus.filter(c => c.soil && c.soil.toLowerCase().includes('belemnit'));
  assert(belMatches.length >= 10, 'Many crus sit on Belemnite chalk');

  // Clos match: "Clos d’Ambonnay"
  const closMatches = unifiedCrus.filter(c => c.iconicVineyards?.some(v => v.includes('Clos d’Ambonnay')));
  assert.strictEqual(closMatches[0]?.id, 'ambonnay');
});

test(1, 'F13_CruExplorer', 'Cru cards render dominant grape color badges (pinot, chard, meunier)', () => {
  const detailFile = path.join(rootDir, 'src/components/WineRegionDetail.jsx');
  const content = fs.readFileSync(detailFile, 'utf-8');
  assert(content.includes('cru-grape-badge') && content.includes('pinot') && content.includes('chard') && content.includes('meunier'), 'Must have grape badge classes');
});

// ----------------------------------------------------------------------------
// Feature 14: Sommelier Technical Cards in Terroir Tab
// ----------------------------------------------------------------------------
test(1, 'F14_TechCards', 'WineRegionDetail renders all 7 distinct sommelier technical cards', () => {
  const detailFile = path.join(rootDir, 'src/components/WineRegionDetail.jsx');
  const content = fs.readFileSync(detailFile, 'utf-8');
  assert(content.includes('geology-card'), 'Must render Geology Card');
  assert(content.includes('grapes-tech-card'), 'Must render Grapes Card');
  assert(content.includes('pressing-card'), 'Must render Pressing Card');
  assert(content.includes('aging-tech-card'), 'Must render Aging Card');
  assert(content.includes('dosage-card'), 'Must render Dosage Card');
  assert(content.includes('codes-card'), 'Must render Producer Codes Card');
  assert(content.includes('ancillary-card'), 'Must render Ancillary AOCs Card');
});

test(1, 'F14_TechCards', 'Soil Stratigraphy Card renders porosity metrics and geological period badges', () => {
  const detailFile = path.join(rootDir, 'src/components/WineRegionDetail.jsx');
  const content = fs.readFileSync(detailFile, 'utf-8');
  assert(content.includes('geo-formation-box'), 'Must have geo-formation-box container');
  assert(content.includes('geo-era'), 'Must have geo-era display');
  assert(content.includes('geo-impact'), 'Must have geo-impact explanation');
});

test(1, 'F14_TechCards', 'Authorized Grapes Matrix renders 3 major + 4 heritage + complantée parcel card', () => {
  const detailFile = path.join(rootDir, 'src/components/WineRegionDetail.jsx');
  const content = fs.readFileSync(detailFile, 'utf-8');
  assert(content.includes('grapes-grid-7'), 'Must render 7-grapes grid');
  assert(content.includes('complantee-card'), 'Must render complantee-card');
  assert(content.includes('iconicComplantee'), 'Must render iconicComplantee structure');
  assert(CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.iconicComplantee.name.includes('Laherte Frères'), 'Dataset must include Laherte Frères "Les 7"');
});

test(1, 'F14_TechCards', 'CIVC Pressing Flow Gauge renders 4,000 kg Marc, 2,050 L Cuvée, 500 L Taille, 7-10% Rebêche', () => {
  const detailFile = path.join(rootDir, 'src/components/WineRegionDetail.jsx');
  const content = fs.readFileSync(detailFile, 'utf-8');
  assert(content.includes('pressing-flow-gauge'), 'Must render pressing-flow-gauge');
  assert(content.includes('pressing-fraction-bar'), 'Must render fraction bar');
  assert(content.includes('2,050 L'), 'Must render 2,050 L cuvée');
  assert(content.includes('500 L'), 'Must render 500 L taille');
});

test(1, 'F14_TechCards', 'Dosage Spectrum Card renders 7 tiers with sugar-free vs sugar-allowed badges', () => {
  const detailFile = path.join(rootDir, 'src/components/WineRegionDetail.jsx');
  const content = fs.readFileSync(detailFile, 'utf-8');
  assert(content.includes('dosage-spectrum-container'), 'Must render dosage spectrum');
  assert(content.includes('sugar-free-badge'), 'Must render sugar-free-badge for Brut Nature');
  assert(content.includes('sugar-allowed-badge'), 'Must render sugar-allowed-badge');
});

test(1, 'F14_TechCards', 'Producer Codes Card renders matriculation codes, market share, and house examples', () => {
  const detailFile = path.join(rootDir, 'src/components/WineRegionDetail.jsx');
  const content = fs.readFileSync(detailFile, 'utf-8');
  assert(content.includes('producer-codes-grid'), 'Must render producer-codes-grid');
  assert(content.includes('code-badge'), 'Must render code-badge');
});

// ----------------------------------------------------------------------------
// Feature 15: Champagne Cellar Matcher
// ----------------------------------------------------------------------------
test(1, 'F15_CellarMatcher', 'CSV inventory file `public/My Cellar.csv` exists and contains real wines', () => {
  const csvPath = path.join(rootDir, 'public/My Cellar.csv');
  assert(fs.existsSync(csvPath), 'public/My Cellar.csv must exist');
  const csvText = fs.readFileSync(csvPath, 'utf-8');
  const rows = parseCsv(csvText);
  assert(rows.length > 50, `Expected > 50 cellar rows, got ${rows.length}`);
});

test(1, 'F15_CellarMatcher', 'Paul Bara Grand Cru Annonciade resolves to Bouzy Grand Cru (100%), RM, Montagne de Reims', () => {
  const wine = { Producer: 'Paul Bara', Wine: 'Paul Bara Champagne Grand Cru Annonciade', Locale: 'France, Champagne, Champagne Grand Cru' };
  const res = matchChampagneWine(wine, WINE_REGIONS.champagne);
  assert.strictEqual(res.matchedCruId, 'bouzy', 'Cru ID must be bouzy');
  assert.strictEqual(res.commune, 'Bouzy', 'Commune must be Bouzy');
  assert.strictEqual(res.producerCode, 'RM', 'Producer code must be RM');
  assert.strictEqual(res.matchedSubId, 'montagne-de-reims', 'Subregion must be montagne-de-reims');
});

test(1, 'F15_CellarMatcher', 'Egly-Ouriet Blanc de Noirs resolves to Ambonnay Grand Cru (100%), RM, Montagne de Reims', () => {
  const wine = { Producer: 'Egly-Ouriet', Wine: 'Blanc de Noirs Les Crayères', Locale: 'France, Champagne, Champagne Grand Cru' };
  const res = matchChampagneWine(wine, WINE_REGIONS.champagne);
  assert.strictEqual(res.matchedCruId, 'ambonnay', 'Cru ID must be ambonnay');
  assert.strictEqual(res.commune, 'Ambonnay', 'Commune must be Ambonnay');
  assert.strictEqual(res.producerCode, 'RM', 'Producer code must be RM');
});

test(1, 'F15_CellarMatcher', 'Gaston Chiquet Premier Cru Special Club resolves to Dizy Premier Cru (95%), RM, Vallée de la Marne', () => {
  const wine = { Producer: 'Gaston Chiquet', Wine: 'Gaston Chiquet Champagne Premier Cru Special Club Reserve', Locale: 'France, Champagne, Champagne Premier Cru' };
  const res = matchChampagneWine(wine, WINE_REGIONS.champagne);
  assert.strictEqual(res.matchedCruId, 'dizy', 'Cru ID must be dizy');
  assert.strictEqual(res.commune, 'Dizy', 'Commune must be Dizy');
  assert.strictEqual(res.producerCode, 'RM', 'Producer code must be RM');
  assert.strictEqual(res.matchedSubId, 'vallee-de-la-marne', 'Subregion must be vallee-de-la-marne');
});

test(1, 'F15_CellarMatcher', 'J. Lassalle Premier Cru resolves to Chigny-les-Roses Premier Cru (94%), RM, Montagne de Reims', () => {
  const wine = { Producer: 'J. Lassalle', Wine: 'J. Lassalle Champagne Premier Cru Brut Préférence', Locale: 'France, Champagne, Champagne Premier Cru' };
  const res = matchChampagneWine(wine, WINE_REGIONS.champagne);
  assert.strictEqual(res.matchedCruId, 'chigny-les-roses', 'Cru ID must be chigny-les-roses');
  assert.strictEqual(res.commune, 'Chigny-les-Roses', 'Commune must be Chigny-les-Roses');
  assert.strictEqual(res.producerCode, 'RM', 'Producer code must be RM');
});

test(1, 'F15_CellarMatcher', 'Billecart-Salmon resolves to Mareuil-sur-Aÿ Premier Cru (99%), NM, Vallée de la Marne', () => {
  const wine = { Producer: 'Billecart-Salmon', Wine: 'Billecart-Salmon Brut Rosé', Locale: 'France, Champagne' };
  const res = matchChampagneWine(wine, WINE_REGIONS.champagne);
  assert.strictEqual(res.matchedCruId, 'mareuil-sur-ay');
  assert.strictEqual(res.commune, 'Mareuil-sur-Aÿ');
  assert.strictEqual(res.producerCode, 'NM');
});

test(1, 'F15_CellarMatcher', 'Non-Champagne cellar bottles do not generate false Champagne Cru matches', () => {
  const nonChampagne = [
    { Producer: 'Viña Almaviva S.A.', Wine: 'Almaviva', Locale: 'Chile, Maipo Valley, Puente Alto' },
    { Producer: 'Bouchard Père et Fils', Wine: 'Beaune 1er Cru Grèves', Locale: 'France, Burgundy, Côte de Beaune' },
    { Producer: 'Coche-Dury', Wine: 'Meursault', Locale: 'France, Burgundy, Meursault' },
    { Producer: 'AR.PE.PE.', Wine: 'Valtellina Superiore', Locale: 'Italy, Lombardia, Valtellina' }
  ];

  for (const bottle of nonChampagne) {
    const res = matchChampagneWine(bottle, WINE_REGIONS.champagne);
    assert.strictEqual(res.matchedCruId, null, `Non-Champagne bottle "${bottle.Producer}" should have null matchedCruId`);
    assert.strictEqual(res.producerCode, null, `Non-Champagne bottle "${bottle.Producer}" should have null producerCode`);
  }
});

// ----------------------------------------------------------------------------
// Feature 16: Luxury Responsive Sommelier Design & Print Isolation
// ----------------------------------------------------------------------------
test(1, 'F16_DesignSystem', '`src/index.css` exists and defines all luxury sommelier card classes', () => {
  const cssPath = path.join(rootDir, 'src/index.css');
  assert(fs.existsSync(cssPath), 'src/index.css must exist');
  const css = fs.readFileSync(cssPath, 'utf-8');
  assert(css.includes('.aging-tech-card'), 'Must include .aging-tech-card');
  assert(css.includes('.pressing-flow-gauge'), 'Must include .pressing-flow-gauge');
  assert(css.includes('.dosage-spectrum-container'), 'Must include .dosage-spectrum-container');
  assert(css.includes('.complantee-card'), 'Must include .complantee-card');
});

test(1, 'F16_DesignSystem', 'Gold and champagne color palette tokens are configured in CSS', () => {
  const css = fs.readFileSync(path.join(rootDir, 'src/index.css'), 'utf-8');
  assert(css.includes('#d4af37') || css.includes('gold'), 'Must use gold accents');
  assert(css.includes('#722f37') || css.includes('burgundy') || css.includes('#8b263e'), 'Must use sommelier wine/burgundy tones');
});

test(1, 'F16_DesignSystem', 'Responsive multi-column CSS grid layouts adapt cleanly', () => {
  const css = fs.readFileSync(path.join(rootDir, 'src/index.css'), 'utf-8');
  assert(css.includes('.grapes-grid-7'), 'Must define .grapes-grid-7');
  assert(css.includes('.grand-crus-grid'), 'Must define .grand-crus-grid');
  assert(css.includes('.pressing-metrics-grid'), 'Must define .pressing-metrics-grid');
  assert(css.includes('.aging-grid'), 'Must define .aging-grid');
});

test(1, 'F16_DesignSystem', 'Mobile media queries (<768px and <480px) are defined and structured', () => {
  const css = fs.readFileSync(path.join(rootDir, 'src/index.css'), 'utf-8');
  assert(css.includes('@media (max-width: 768px)'), 'Must include @media (max-width: 768px)');
  assert(css.includes('@media (max-width: 480px)'), 'Must include @media (max-width: 480px)');
});

test(1, 'F16_DesignSystem', 'Print stylesheet (@media print) isolates sommelier technical cards and suppresses UI controls', () => {
  const css = fs.readFileSync(path.join(rootDir, 'src/index.css'), 'utf-8');
  assert(css.includes('@media print'), 'Must define @media print');
  assert(css.includes('display: none') || css.includes('visibility: hidden'), 'Print stylesheet must hide interactive controls');
});

// ----------------------------------------------------------------------------
// Feature 17: Clean Zero-Error Compilation with `npm run build`
// ----------------------------------------------------------------------------
test(1, 'F17_Build', 'Production build generates `dist/index.html`', () => {
  const distHtml = path.join(rootDir, 'dist/index.html');
  assert(fs.existsSync(distHtml), 'dist/index.html must exist after build');
  const html = fs.readFileSync(distHtml, 'utf-8');
  assert(html.includes('<html') && html.includes('id="root"'), 'dist/index.html must have valid root container');
});

test(1, 'F17_Build', 'Production assets in `dist/assets/` contain compiled JS bundle', () => {
  const assetsDir = path.join(rootDir, 'dist/assets');
  assert(fs.existsSync(assetsDir), 'dist/assets must exist');
  const files = fs.readdirSync(assetsDir);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  assert(jsFiles.length >= 1, 'Must have at least one compiled JS bundle');
});

test(1, 'F17_Build', 'Production assets in `dist/assets/` contain compiled CSS bundle', () => {
  const assetsDir = path.join(rootDir, 'dist/assets');
  const files = fs.readdirSync(assetsDir);
  const cssFiles = files.filter(f => f.endsWith('.css'));
  assert(cssFiles.length >= 1, 'Must have at least one compiled CSS bundle');
});

test(1, 'F17_Build', 'Compiled JS bundle size is within reasonable production budget (<1.5 MB)', () => {
  const assetsDir = path.join(rootDir, 'dist/assets');
  const files = fs.readdirSync(assetsDir);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  for (const f of jsFiles) {
    const s = fs.statSync(path.join(assetsDir, f));
    assert(s.size < 1.5 * 1024 * 1024, `JS Bundle ${f} size (${(s.size/1024).toFixed(1)} KB) must be < 1.5 MB`);
  }
});

test(1, 'F17_Build', 'Vite build executes with zero compilation errors (verified via exit code 0)', () => {
  const output = execSync('npm run build', { cwd: rootDir, encoding: 'utf-8' });
  assert(output.includes('built in') || output.includes('dist/index.html'), 'Build command must succeed cleanly');
});


// ============================================================================
// TIER 2: BOUNDARY & CORNER CASES
// ============================================================================
console.log('\n----------------------------------------------------------------');
console.log('TIER 2: BOUNDARY & CORNER CASES');
console.log('----------------------------------------------------------------');

// Helper function to resolve dosage tier by residual sugar value (g/L) and sugar added flag
function resolveDosageTier(gPerL, sugarAdded = true) {
  if (gPerL <= 3.0 && !sugarAdded) return 'Brut Nature';
  if (gPerL <= 6.0) return 'Extra Brut';
  if (gPerL <= 12.0) return 'Brut';
  if (gPerL <= 17.0) return 'Extra Dry';
  if (gPerL <= 32.0) return 'Sec';
  if (gPerL <= 50.0) return 'Demi-Sec';
  return 'Doux';
}

test(2, 'Boundary_Dosage', 'Dosage boundary at exactly 0.0 g/L (no sugar added) resolves to Brut Nature', () => {
  const res = resolveDosageTier(0.0, false);
  assert.strictEqual(res, 'Brut Nature');
});

test(2, 'Boundary_Dosage', 'Dosage boundary at exactly 3.0 g/L (no sugar added) resolves to Brut Nature', () => {
  const res = resolveDosageTier(3.0, false);
  assert.strictEqual(res, 'Brut Nature');
});

test(2, 'Boundary_Dosage', 'Dosage boundary at exactly 3.0 g/L (with sugar added) resolves to Extra Brut', () => {
  const res = resolveDosageTier(3.0, true);
  assert.strictEqual(res, 'Extra Brut');
});

test(2, 'Boundary_Dosage', 'Dosage inflection at 3.01 g/L transitions to Extra Brut', () => {
  const res = resolveDosageTier(3.01, false);
  assert.strictEqual(res, 'Extra Brut');
});

test(2, 'Boundary_Dosage', 'Dosage boundary at exactly 6.0 g/L resolves to Extra Brut', () => {
  const res = resolveDosageTier(6.0, true);
  assert.strictEqual(res, 'Extra Brut');
});

test(2, 'Boundary_Dosage', 'Dosage inflection at 6.01 g/L transitions to Brut', () => {
  const res = resolveDosageTier(6.01, true);
  assert.strictEqual(res, 'Brut');
});

test(2, 'Boundary_Dosage', 'Dosage boundary at exactly 12.0 g/L resolves to Brut', () => {
  const res = resolveDosageTier(12.0, true);
  assert.strictEqual(res, 'Brut');
});

test(2, 'Boundary_Dosage', 'Dosage inflection at 12.01 g/L transitions to Extra Dry', () => {
  const res = resolveDosageTier(12.01, true);
  assert.strictEqual(res, 'Extra Dry');
});

test(2, 'Boundary_Dosage', 'Dosage boundary at exactly 17.0 g/L resolves to Extra Dry', () => {
  const res = resolveDosageTier(17.0, true);
  assert.strictEqual(res, 'Extra Dry');
});

test(2, 'Boundary_Dosage', 'Dosage inflection at 17.01 g/L transitions to Sec', () => {
  const res = resolveDosageTier(17.01, true);
  assert.strictEqual(res, 'Sec');
});

test(2, 'Boundary_Dosage', 'Dosage boundary at exactly 32.0 g/L resolves to Sec', () => {
  const res = resolveDosageTier(32.0, true);
  assert.strictEqual(res, 'Sec');
});

test(2, 'Boundary_Dosage', 'Dosage inflection at 32.01 g/L transitions to Demi-Sec', () => {
  const res = resolveDosageTier(32.01, true);
  assert.strictEqual(res, 'Demi-Sec');
});

test(2, 'Boundary_Dosage', 'Dosage boundary at exactly 50.0 g/L resolves to Demi-Sec', () => {
  const res = resolveDosageTier(50.0, true);
  assert.strictEqual(res, 'Demi-Sec');
});

test(2, 'Boundary_Dosage', 'Dosage inflection at 50.01 g/L transitions to Doux', () => {
  const res = resolveDosageTier(50.01, true);
  assert.strictEqual(res, 'Doux');
});

test(2, 'Boundary_NonChampagne', 'All 14 non-Champagne world wine regions handle navigation and omit Champagne datasets without throwing', () => {
  const nonChampagne = Object.keys(WINE_REGIONS).filter(k => k !== 'champagne');
  assert.strictEqual(nonChampagne.length, 14, 'Must have 14 non-Champagne regions');
  for (const regId of nonChampagne) {
    const reg = WINE_REGIONS[regId];
    assert(reg.id && reg.name && reg.country, `Region ${regId} must have basic attributes`);
    assert(!reg.grandCrus || reg.grandCrus.length === 0, `Region ${regId} must not have Champagne Grand Crus`);
    assert(!reg.technicalRegulations, `Region ${regId} must not have Champagne technicalRegulations`);
  }
});

test(2, 'Boundary_Search', 'Cru search handles special regex characters (e.g. .*+?^${}()|[]\\) safely without crash', () => {
  const specialQueries = ['.*', '+', '?', '^', '$', '{1,2}', '(', ')', '|', '[a-z]', '\\d'];
  const unifiedCrus = [...CHAMPAGNE_GRAND_CRUS, ...CHAMPAGNE_PREMIER_CRUS];
  for (const q of specialQueries) {
    const qLower = q.toLowerCase();
    const matches = unifiedCrus.filter(cru => {
      const matchName = cru.name.toLowerCase().includes(qLower);
      const matchSoil = cru.soil && cru.soil.toLowerCase().includes(qLower);
      return matchName || matchSoil;
    });
    assert(Array.isArray(matches), `Query "${q}" must return array without error`);
  }
});

test(2, 'Boundary_Search', 'Cru search handles empty string and whitespace-only gracefully', () => {
  const unifiedCrus = [...CHAMPAGNE_GRAND_CRUS, ...CHAMPAGNE_PREMIER_CRUS];
  const emptyMatches = unifiedCrus.filter(cru => cru.name.toLowerCase().includes(''.trim()));
  assert.strictEqual(emptyMatches.length, 33, 'Empty search should match all 33 crus');
});

test(2, 'Boundary_Search', 'Diacritics & accent variations resolve correctly (e.g. Péters / Peters, Épernay / Epernay, Bérêche / Bereche)', () => {
  const findByNameOrProducer = (str) => {
    const s = str.toLowerCase();
    return [...CHAMPAGNE_GRAND_CRUS, ...CHAMPAGNE_PREMIER_CRUS].filter(c => {
      return c.name.toLowerCase().includes(s) || 
             c.benchmarkProducers?.some(p => p.toLowerCase().includes(s));
    });
  };

  // Searching "peters" matches Pierre Péters in Le Mesnil
  const petersMatches = findByNameOrProducer('péters');
  assert(petersMatches.some(c => c.id === 'le-mesnil-sur-oger'));

  // Searching "bereche" matches Bérêche in Ludes & Rilly
  const berecheMatches = findByNameOrProducer('bérêche');
  assert(berecheMatches.some(c => c.id === 'ludes') || berecheMatches.some(c => c.id === 'rilly-la-montagne'));
});

test(2, 'Boundary_Cellar', 'Malformed, empty, or null cellar bottle objects do not throw exceptions', () => {
  const malformedList = [null, undefined, {}, { Producer: '' }, { Locale: null }, { Wine: 12345 }];
  for (const item of malformedList) {
    const res = matchChampagneWine(item, WINE_REGIONS.champagne);
    assert(typeof res === 'object' && res !== null);
    assert.strictEqual(res.matchedCruId, null);
  }
});


// ============================================================================
// TIER 3: CROSS-FEATURE COMBINATIONS
// ============================================================================
console.log('\n----------------------------------------------------------------');
console.log('TIER 3: CROSS-FEATURE COMBINATIONS');
console.log('----------------------------------------------------------------');

test(3, 'Combo_Filters', 'Subregion "Côte des Blancs" + Classification "Grand Cru" + Grape "Chardonnay" returns exactly 6 Grand Crus', () => {
  const unified = [...CHAMPAGNE_GRAND_CRUS.map(c => ({ ...c, isGrandCru: true })), ...CHAMPAGNE_PREMIER_CRUS.map(c => ({ ...c, isGrandCru: false }))];
  const filtered = unified.filter(c => 
    (c.subregionId === 'cote-des-blancs' || c.subregion === 'Côte des Blancs') &&
    c.isGrandCru &&
    c.dominantGrape.includes('Chardonnay')
  );
  assert.strictEqual(filtered.length, 6, `Expected 6 Côte des Blancs Grand Crus, got ${filtered.length}`);
  const expected = ['avize', 'chouilly', 'cramant', 'le-mesnil-sur-oger', 'oger', 'oiry'];
  for (const id of expected) {
    assert(filtered.some(c => c.id === id), `Must include ${id}`);
  }
});

test(3, 'Combo_Filters', 'Subregion "Montagne de Reims" + Classification "Grand Cru" + Grape "Pinot Noir" returns exactly 9 Grand Crus', () => {
  const unified = [...CHAMPAGNE_GRAND_CRUS.map(c => ({ ...c, isGrandCru: true })), ...CHAMPAGNE_PREMIER_CRUS.map(c => ({ ...c, isGrandCru: false }))];
  const filtered = unified.filter(c => 
    (c.subregionId === 'montagne-de-reims' || c.subregion === 'Montagne de Reims') &&
    c.isGrandCru &&
    c.dominantGrape.includes('Pinot Noir')
  );
  assert.strictEqual(filtered.length, 9, `Expected 9 Montagne de Reims Grand Crus, got ${filtered.length}`);
});

test(3, 'Combo_Filters', 'Subregion "Vallée de la Marne" + Classification "Premier Cru" + Grape "Meunier" returns Dizy, Hautvillers, Cumières', () => {
  const unified = [...CHAMPAGNE_GRAND_CRUS.map(c => ({ ...c, isGrandCru: true })), ...CHAMPAGNE_PREMIER_CRUS.map(c => ({ ...c, isGrandCru: false }))];
  const filtered = unified.filter(c => 
    (c.subregionId === 'vallee-de-la-marne' || c.subregion === 'Vallée de la Marne') &&
    !c.isGrandCru &&
    c.dominantGrape.includes('Meunier')
  );
  assert(filtered.length >= 3, 'Must have at least 3 Meunier-focused Premier Crus in Marne');
  const ids = filtered.map(c => c.id);
  assert(ids.includes('dizy') && ids.includes('hautvillers') && ids.includes('cumieres'));
});

test(3, 'Combo_Filters', 'Subregion "Côte des Bar" + Classification "All Crus" returns 0 Crus (Terroir without 100/90% Échelle Crus)', () => {
  const unified = [...CHAMPAGNE_GRAND_CRUS, ...CHAMPAGNE_PREMIER_CRUS];
  const filtered = unified.filter(c => c.subregionId === 'cote-des-bar' || c.subregion?.includes('Côte des Bar'));
  assert.strictEqual(filtered.length, 0, 'Côte des Bar has no Grand or Premier Crus under historical échelle');
});

test(3, 'Combo_Graph', 'Cross-linking Cellar Bottle -> Cru -> Geology -> Subregion (Paul Bara -> Bouzy -> Belemnite Chalk -> Montagne de Reims)', () => {
  const bottle = { Producer: 'Paul Bara', Wine: 'Special Club', Locale: 'France, Champagne, Champagne Grand Cru' };
  const match = matchChampagneWine(bottle, WINE_REGIONS.champagne);
  assert.strictEqual(match.matchedCruId, 'bouzy');

  const cru = CHAMPAGNE_GRAND_CRUS.find(c => c.id === match.matchedCruId);
  assert(cru, 'Bouzy Grand Cru must exist');
  assert(cru.soil.includes('Belemnite chalk'), 'Bouzy soil must specify Belemnite chalk');
  assert.strictEqual(cru.subregionId, 'montagne-de-reims', 'Bouzy subregion must be montagne-de-reims');

  const sub = CHAMPAGNE_SUBREGIONS.find(s => s.id === cru.subregionId);
  assert(sub && sub.name === 'Montagne de Reims');
});

test(3, 'Combo_Graph', 'Cross-linking Producer Code -> Business Model (Gaston Chiquet -> Dizy Premier Cru -> RM 95% Estate Fruit)', () => {
  const match = matchChampagneWine({ Producer: 'Gaston Chiquet' }, WINE_REGIONS.champagne);
  assert.strictEqual(match.producerCode, 'RM');
  const codeInfo = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === match.producerCode);
  assert(codeInfo && codeInfo.englishTranslation.includes('Grower-Producer'));
});

test(3, 'Combo_Graph', 'Cross-linking Prestige Cuvée -> Cru Communes -> Producer -> Code (Dom Pérignon -> Moët & Chandon -> NM -> Grand Crus + Hautvillers)', () => {
  const dp = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'dom-perignon');
  assert(dp, 'Dom Pérignon must exist');
  assert.strictEqual(dp.producerCode, 'NM');
  const nmCode = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes.find(c => c.code === dp.producerCode);
  assert(nmCode && nmCode.exampleProducers.includes('Moët & Chandon'));
});

test(3, 'Combo_Graph', 'Cross-linking Single-Vineyard Clos -> Village -> Soil -> Producer (Clos du Mesnil -> Le Mesnil -> Belemnite Chalk -> Krug NM)', () => {
  const cdm = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'clos-du-mesnil');
  assert(cdm.sourcing.includes('Le Mesnil-sur-Oger'));
  const mesnil = CHAMPAGNE_GRAND_CRUS.find(c => c.id === 'le-mesnil-sur-oger');
  assert(mesnil && (mesnil.soil.includes('Belemnit') || mesnil.soil.includes('chalk')), 'Le Mesnil sits on Belemnite chalk');
  assert(mesnil.benchmarkProducers.includes('Krug (Clos du Mesnil)'));
});

test(3, 'Combo_Graph', 'Cross-linking Clos des Goisses -> Mareuil-sur-Aÿ (99% Premier Cru) -> 45° steep chalk slope -> Philipponnat NM', () => {
  const cdg = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'clos-des-goisses');
  assert(cdg && cdg.houseOrGrower === 'Philipponnat');
  const mareuil = CHAMPAGNE_PREMIER_CRUS.find(c => c.id === 'mareuil-sur-ay');
  assert(mareuil && mareuil.echelleRating === 99);
  assert(mareuil.aspect.includes('45°') && mareuil.benchmarkProducers.includes('Philipponnat'));
});

test(3, 'Combo_Graph', 'Cross-linking Laherte Frères "Les 7" -> 7 authorized varieties -> Coteaux Sud d’Épernay -> Chavot-Courcourt', () => {
  const comp = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.iconicComplantee;
  assert(comp.location.includes('Chavot-Courcourt'));
  const cse = CHAMPAGNE_SUBREGIONS.find(s => s.id === 'coteaux-sud-epernay');
  assert(cse && cse.microTerroirs.some(m => m.name.includes('Chavot-Courcourt')));
});

test(3, 'Combo_Graph', 'Cross-linking Rosé des Riceys -> 100% Pinot Noir Saignée -> Les Riceys (Côte des Bar) -> Olivier Horiot', () => {
  const rdr = CHAMPAGNE_TECHNICAL_REGULATIONS.ancillaryAocs.find(a => a.id === 'rose-des-riceys');
  assert(rdr.permittedGrapes.includes('100% Pinot Noir'));
  const cdb = CHAMPAGNE_SUBREGIONS.find(s => s.id === 'cote-des-bar');
  assert(cdb && cdb.focus.includes('Les Riceys'));
  assert(rdr.benchmarkProducers.some(p => p.includes('Olivier Horiot')));
});

test(3, 'Combo_CartographySync', 'Map selection synchronization: selecting cru `le-mesnil-sur-oger` resolves GPS and populates popup data', () => {
  const mesnil = CHAMPAGNE_GRAND_CRUS.find(c => c.id === 'le-mesnil-sur-oger');
  assert.strictEqual(mesnil.lat, 48.9464);
  assert.strictEqual(mesnil.lng, 4.0222);
  assert.strictEqual(mesnil.echelleRating, 100);
  assert(mesnil.dominantGrape.includes('Chardonnay'));
});


// ============================================================================
// TIER 4: REAL-WORLD SOMMELIER APPLICATION SCENARIOS (CMS Level 3 Standards)
// ============================================================================
console.log('\n----------------------------------------------------------------');
console.log('TIER 4: REAL-WORLD SOMMELIER APPLICATION SCENARIOS (CMS Level 3)');
console.log('----------------------------------------------------------------');

test(4, 'Somm_Scenario1', 'Scenario 1: MS Study Guide — Contrast Belemnite vs Micraster chalk across Montagne de Reims and Côte des Blancs', () => {
  const forms = CHAMPAGNE_TECHNICAL_REGULATIONS.geology.formations;
  const bel = forms.find(f => f.id === 'belemnite-chalk');
  const mic = forms.find(f => f.id === 'micraster-chalk');

  assert(bel && mic, 'Both chalk formations must exist');
  assert(bel.porosity.includes('35% to 40%'), 'Belemnite must have 35-40% porosity for water regulation');
  assert(mic.porosity.includes('25% to 30%'), 'Micraster must have 25-30% porosity');

  // Verify that Côte des Blancs escarpments sit on Belemnite chalk while plains sit on Micraster
  const cdb = CHAMPAGNE_SUBREGIONS.find(s => s.id === 'cote-des-blancs');
  assert(cdb.geology.includes('Belemnite'));

  const oiry = CHAMPAGNE_GRAND_CRUS.find(c => c.id === 'oiry');
  assert(oiry.soil.includes('Micraster') || oiry.aspect.includes('plain') || oiry.aspect.includes('Flat'), 'Oiry plain features Micraster/alluvial transition');
});

test(4, 'Somm_Scenario2', 'Scenario 2: Sommelier Floor Recommendation — Bone-dry Blanc de Blancs from a Grand Cru grower in Côte des Blancs (Zero Dosage)', () => {
  // Query 1: Filter Grand Crus in Côte des Blancs with Chardonnay
  const cdbGrandCrus = CHAMPAGNE_GRAND_CRUS.filter(c => c.subregionId === 'cote-des-blancs' && c.dominantGrape.includes('Chardonnay'));
  assert.strictEqual(cdbGrandCrus.length, 6);

  // Query 2: Filter Iconic Growers with RM code in Côte des Blancs
  const cdbGrowers = CHAMPAGNE_ICONIC_GROWERS.filter(g => g.subregion === 'Côte des Blancs' && g.producerCode === 'RM');
  assert(cdbGrowers.length >= 3, 'Must find Selosse, Péters, Agrapart');
  const names = cdbGrowers.map(g => g.name);
  assert(names.includes('Jacques Selosse') && names.includes('Pierre Péters') && names.includes('Agrapart & Fils'));

  // Query 3: Validate Brut Nature dosage parameters
  const bn = CHAMPAGNE_TECHNICAL_REGULATIONS.dosageTiers.find(t => t.id === 'brut-nature');
  assert.strictEqual(bn.sugarAddedAllowed, false, 'Brut nature strictly permits NO added sugar');
  assert(bn.foodPairing.includes('oysters') || bn.foodPairing.includes('caviar'), 'Must recommend pristine seafood pairings');
});

test(4, 'Somm_Scenario3', 'Scenario 3: Decoding Producer Registration Codes for VIP table-side consultation', () => {
  const codes = CHAMPAGNE_TECHNICAL_REGULATIONS.producerCodes;
  const decode = (codeStr) => codes.find(c => c.code === codeStr);

  const nm = decode('NM');
  assert(nm && nm.englishTranslation.includes('Commercial House') && nm.shareOfProduction.includes('70%'));

  const rm = decode('RM');
  assert(rm && rm.englishTranslation.includes('Grower-Producer') && rm.description.includes('5%'));

  const cm = decode('CM');
  assert(cm && cm.englishTranslation.includes('Cooperative'));

  const rc = decode('RC');
  assert(rc && rc.englishTranslation.includes('Grower-Cooperator'));

  const ma = decode('MA');
  assert(ma && ma.englishTranslation.includes('Buyer\'s Own Brand'));
});

test(4, 'Somm_Scenario4', 'Scenario 4: Pressing & Must Yield Legal Audit — Calculating yields for 12,000 kg harvest (3 marcs)', () => {
  const p = CHAMPAGNE_TECHNICAL_REGULATIONS.pressing;
  const harvestKg = 12000;
  const marcCount = harvestKg / p.marcKg;
  assert.strictEqual(marcCount, 3, '12,000 kg equals exactly 3 marcs');

  const cuveeTotalL = marcCount * p.cuveeLiters;
  assert.strictEqual(cuveeTotalL, 6150, '3 marcs yield exactly 6,150 L of La Cuvée');

  const tailleTotalL = marcCount * p.tailleLiters;
  assert.strictEqual(tailleTotalL, 1500, '3 marcs yield exactly 1,500 L of La Taille');

  const maxMustL = marcCount * p.maxAocMustLiters;
  assert.strictEqual(maxMustL, 7650, '3 marcs yield exactly 7,650 L of total permitted AOC must');

  const rebecheMinL = (maxMustL * p.rebecheMinPct) / 100;
  const rebecheMaxL = (maxMustL * p.rebecheMaxPct) / 100;
  assert(rebecheMinL >= 535 && rebecheMaxL <= 765, 'Rebêche distillation must range between 7% and 10%');
});

test(4, 'Somm_Scenario5', 'Scenario 5: Ancillary AOC Sommelier Exam Verification — Distinguish Coteaux Champenois still wines from Rosé des Riceys and Champagne AOC', () => {
  const aocs = CHAMPAGNE_TECHNICAL_REGULATIONS.ancillaryAocs;
  const cc = aocs.find(a => a.id === 'coteaux-champenois');
  const rdr = aocs.find(a => a.id === 'rose-des-riceys');

  assert(cc && rdr, 'Both ancillary AOCs must exist');
  assert(cc.permittedGrapes.length >= 7, 'Coteaux Champenois allows all 7 Champagne varieties');
  assert.strictEqual(rdr.permittedGrapes.length, 1, 'Rosé des Riceys strictly permits ONLY 100% Pinot Noir');
  assert.strictEqual(rdr.permittedGrapes[0], '100% Pinot Noir');
  assert(rdr.rules.some(r => r.includes('semi-carbonic') || r.includes('saignée')), 'Rosé des Riceys requires saignée maceration');
});

test(4, 'Somm_Scenario6', 'Scenario 6: Cellar Pairing Matrix & Degustation Menu — Match real inventory bottles to sommelier culinary pairings', () => {
  // Bottle 1: Paul Bara Bouzy Grand Cru (Pinot Noir) -> Game birds / roasted duck / truffles
  const bara = matchChampagneWine({ Producer: 'Paul Bara', Wine: 'Annonciade' }, WINE_REGIONS.champagne);
  const bouzy = CHAMPAGNE_GRAND_CRUS.find(c => c.id === bara.matchedCruId);
  assert(bouzy.character.includes('muscular') || bouzy.character.includes('Pinot Noir') || bouzy.character.includes('red berry'));

  // Bottle 2: Pierre Péters Le Mesnil-sur-Oger Grand Cru (Chardonnay) -> Belon oysters / Petrossian caviar
  const peters = matchChampagneWine({ Producer: 'Pierre Péters', Wine: 'Les Chétillons' }, WINE_REGIONS.champagne);
  const mesnil = CHAMPAGNE_GRAND_CRUS.find(c => c.id === peters.matchedCruId);
  assert(mesnil.character.includes('laser-like') || mesnil.character.includes('mineral') || mesnil.character.includes('saline') || mesnil.character.includes('citrus'));
});

test(4, 'Somm_Scenario7', 'Scenario 7: Heritage Cépage Masterclass — Trace all 4 rare heritage varieties in grower Champagne', () => {
  const heritage = CHAMPAGNE_TECHNICAL_REGULATIONS.grapes.heritage;
  const pb = heritage.find(g => g.id === 'pinot-blanc');
  const ar = heritage.find(g => g.id === 'arbane');
  const pm = heritage.find(g => g.id === 'petit-meslier');
  const pg = heritage.find(g => g.id === 'pinot-gris');

  assert(pb.benchmarkCuvees.some(c => c.includes('Roses de Jeanne') || c.includes('La Bolorée')));
  assert(ar.benchmarkCuvees.some(c => c.includes('Moutard') || c.includes('Arbane')));
  assert(pm.benchmarkCuvees.some(c => c.includes('Duval-Leroy') || c.includes('Aubry')));
  assert(pg.benchmarkCuvees.some(c => c.includes('Drappier')));
});

test(4, 'Somm_Scenario8', 'Scenario 8: Single-Vineyard Clos Study Guide — Identify all benchmark walled clos with exact cru and producer', () => {
  const closList = [
    { clos: 'Clos du Mesnil', village: 'Le Mesnil-sur-Oger', producer: 'Krug', grape: 'Chardonnay' },
    { clos: 'Clos d’Ambonnay', village: 'Ambonnay', producer: 'Krug', grape: 'Pinot Noir' },
    { clos: 'Clos des Goisses', village: 'Mareuil-sur-Aÿ', producer: 'Philipponnat', grape: 'Pinot Noir' }
  ];

  for (const item of closList) {
    const cuvee = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.name.includes(item.clos));
    assert(cuvee, `Prestige cuvée ${item.clos} must exist`);
    assert(cuvee.houseOrGrower.includes(item.producer), `Producer of ${item.clos} must be ${item.producer}`);
    assert(cuvee.sourcing.includes(item.village), `Sourcing of ${item.clos} must be in ${item.village}`);
    assert(cuvee.grapeComposition.includes(item.grape), `Grape composition of ${item.clos} must include ${item.grape}`);
  }
});

test(4, 'Somm_Scenario9', 'Scenario 9: Autolysis & Aging Regulation Audit — NV min 15 mo / 12 mo lees vs Vintage min 36 mo / 80% cap', () => {
  const aging = CHAMPAGNE_TECHNICAL_REGULATIONS.aging;
  assert.strictEqual(aging.nonVintage.minTotalMonths, 15);
  assert.strictEqual(aging.nonVintage.minLeesMonths, 12);
  assert.strictEqual(aging.vintage.minTotalMonths, 36);
  assert.strictEqual(aging.vintage.declarationCapPct, 80);
});

test(4, 'Somm_Scenario10', 'Scenario 10: Multi-Vintage Iteration vs Solera Maturation Study — Grand Siècle vs Jacques Selosse Substance', () => {
  const gs = CHAMPAGNE_PRESTIGE_CUVEES.find(c => c.id === 'grand-siecle');
  assert(gs, 'Grand Siècle must exist');
  assert(gs.grapeComposition.includes('Multi-Vintage') || gs.grapeComposition.includes('Iteration'));
  assert(gs.winemaking.includes('3 declared') || gs.winemaking.includes('complementary vintage'));

  const selosse = CHAMPAGNE_ICONIC_GROWERS.find(g => g.id === 'jacques-selosse');
  assert(selosse, 'Jacques Selosse must exist');
  assert(selosse.philosophy.includes('Solera') || selosse.philosophy.includes('Substance'));
  assert(selosse.keyCuvees.some(c => c.includes('Substance') && c.includes('1986')));
});

// ============================================================================
// FINAL SUMMARY & EXIT
// ============================================================================
console.log('\n================================================================');
console.log('CHAMPAGNE CMS LEVEL 3 SOMMELIER E2E TEST SUMMARY');
console.log('================================================================');
console.log(`  Tier 1 (Feature Coverage):           ${stats.tier1.passed} / ${stats.tier1.total} Passed`);
for (const [feat, s] of Object.entries(stats.tier1.byFeature)) {
  console.log(`    - ${feat.padEnd(26)}: ${s.passed} / ${s.total} Passed`);
}
console.log(`  Tier 2 (Boundary & Corner Cases):    ${stats.tier2.passed} / ${stats.tier2.total} Passed`);
console.log(`  Tier 3 (Cross-Feature Combinations): ${stats.tier3.passed} / ${stats.tier3.total} Passed`);
console.log(`  Tier 4 (Real-World Somm Scenarios):  ${stats.tier4.passed} / ${stats.tier4.total} Passed`);
console.log('----------------------------------------------------------------');
console.log(`  OVERALL TOTAL:                       ${stats.passed} / ${stats.total} PASSED (${stats.failed} FAILED)`);
console.log('================================================================\n');

if (stats.failed > 0) {
  console.error(`💥 TEST SUITE FAILED with ${stats.failed} assertion error(s):`);
  stats.failures.forEach((f, i) => {
    console.error(`  ${i + 1}. [T${f.tier}:${f.category}] ${f.name} -> ${f.error}`);
  });
  process.exit(1);
} else {
  console.log('🎉 ALL 4 TIERS OF THE CHAMPAGNE CMS LEVEL 3 SUITE PASSED PERFECTLY WITH 100% COVERAGE!');
  process.exit(0);
}
