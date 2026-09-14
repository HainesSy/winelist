// src/data/wineRegionBoundaries.js
// Sommelier-grade cartographic boundary polygons and regional macro outlines
// Conforms strictly to GeoJSON RFC 7946 specifications ([longitude, latitude])
import { GEO_BOUNDARIES } from './geo_boundaries.js';

export const WINE_REGION_BOUNDARIES = {
  "champagne": GEO_BOUNDARIES['champagne'],
  "burgundy": GEO_BOUNDARIES['burgundy'],
  "bordeaux": GEO_BOUNDARIES['bordeaux'],
  "rhone": GEO_BOUNDARIES['rhone'],
  "loire-valley": GEO_BOUNDARIES['loire-valley'],
  "piedmont": GEO_BOUNDARIES['piedmont'],
  "tuscany": GEO_BOUNDARIES['tuscany'],
  "california": GEO_BOUNDARIES['california'],
  "oregon": GEO_BOUNDARIES['oregon'],
  "spain-rioja": GEO_BOUNDARIES['spain-rioja'],
  "germany-mosel": GEO_BOUNDARIES['germany-mosel'],
  "australia": GEO_BOUNDARIES['australia'],
  "chile-maipo": GEO_BOUNDARIES['chile-maipo'],
  "italy-other": GEO_BOUNDARIES['italy-other'],
  "japan-chubu": GEO_BOUNDARIES['japan-chubu'],
  "alsace": GEO_BOUNDARIES['alsace'],
  "corsica": GEO_BOUNDARIES['corsica'],
  "beaujolais": GEO_BOUNDARIES['beaujolais'],
  "argentina-mendoza": GEO_BOUNDARIES['argentina-mendoza'],
  "south-africa": GEO_BOUNDARIES['south-africa'],
  "new-zealand": GEO_BOUNDARIES['new-zealand'],
  "portugal": GEO_BOUNDARIES['portugal'],
};

export { WINE_REGION_OUTLINES } from './wineRegionOutlines.js';
