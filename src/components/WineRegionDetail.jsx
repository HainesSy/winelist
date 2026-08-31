import { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, 
  Wine, 
  MapPin, 
  Compass, 
  Layers, 
  Sparkles, 
  Utensils, 
  Award, 
  ThermometerSun, 
  Mountain, 
  Droplets, 
  Search, 
  ExternalLink, 
  ChevronDown, 
  Printer,
  BookOpen,
  Crown,
  Scale,
  FlaskConical,
  Clock
} from 'lucide-react';
import WineRegionMap from './WineRegionMap';
import { WINE_REGIONS, findWineRegion } from '../data/wineRegions';

// Comprehensive Champagne producer & grower mapping dictionary
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

// Sommelier match resolver for Champagne cellar items
function matchChampagneWine(wine, region) {
  const prodLower = (wine.Producer || '').toLowerCase().trim();
  const wineLower = (wine.Wine || wine.Designation || '').toLowerCase().trim();
  const locLower = (wine.Locale || '').toLowerCase().trim();
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

  // 5. Classification tags from Locale
  if (!cruClassification) {
    if (locLower.includes('grand cru') || combinedText.includes('grand cru')) {
      cruClassification = '👑 Grand Cru (100%)';
    } else if (locLower.includes('premier cru') || combinedText.includes('premier cru') || combinedText.includes('1er cru')) {
      cruClassification = '🥇 Premier Cru';
    }
  }

  // 6. Subregion fallback from text
  if (!matchedSubId && region?.subRegions) {
    for (const sub of region.subRegions) {
      const subNameLower = sub.name.toLowerCase();
      if (combinedText.includes(subNameLower) || (sub.focus && combinedText.includes(sub.focus.toLowerCase()))) {
        matchedSubId = sub.id;
        break;
      }
    }
  }

  return {
    matchedSubId,
    matchedCruId,
    cruClassification,
    commune,
    producerCode
  };
}

// Cleanly format Debut Vintage (e.g. "1959 (Iterative MV)" or "1876 / 1945 commercial")
function renderDebutVintage(debut) {
  if (!debut) return null;
  const str = String(debut).trim();
  
  const parenMatch = str.match(/^(\d{4})\s*\((.*?)\)$/);
  if (parenMatch) {
    return (
      <div className="debut-cell-content">
        <span className="vintage-debut-tag">{parenMatch[1]}</span>
        <span className="debut-subtitle-note">{parenMatch[2]}</span>
      </div>
    );
  }

  const slashMatch = str.match(/^(\d{4})\s*\/\s*(.*)$/);
  if (slashMatch) {
    return (
      <div className="debut-cell-content">
        <span className="vintage-debut-tag">{slashMatch[1]}</span>
        <span className="debut-subtitle-note">{slashMatch[2]}</span>
      </div>
    );
  }

  return (
    <div className="debut-cell-content">
      <span className="vintage-debut-tag">{str}</span>
    </div>
  );
}

export default function WineRegionDetail({ 
  regionId, 
  regionName = '', 
  countryName = '', 
  rawWines = [], 
  onBack, 
  onSelectRegion, 
  onConsumeBottle, 
  consumedCounts = {}, 
  getCellarTrackerActionUrl 
}) {
  const [activeTab, setActiveTab] = useState('map'); // 'map' | 'crus' | 'specs' | 'prestige' | 'pairings' | 'cellar'
  const [activeSubRegionId, setActiveSubRegionId] = useState(null);
  const [selectedCruId, setSelectedCruId] = useState(null);
  const [cruDistrictFilter, setCruDistrictFilter] = useState('all');
  const [cruClassificationFilter, setCruClassificationFilter] = useState('all'); // 'all' | 'grandCrus' | 'premierCrus'
  const [cruGrapeFilter, setCruGrapeFilter] = useState('all');
  const [cruSearchQuery, setCruSearchQuery] = useState('');
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  // Resolve region data from ID or query
  const region = useMemo(() => {
    if (regionId && WINE_REGIONS[regionId]) {
      return WINE_REGIONS[regionId];
    }
    return findWineRegion(regionName || regionId, countryName);
  }, [regionId, regionName, countryName]);

  // Scroll to top upon opening new region
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [region?.id]);

  const hasGrandCrus = Boolean(region?.grandCrus && region.grandCrus.length > 0);
  const hasPremierCrus = Boolean(region?.premierCrus && region.premierCrus.length > 0);
  const hasTechnicalRegulations = Boolean(region?.technicalRegulations);
  const hasPrestigeCuvees = Boolean(region?.prestigeCuvees && region.prestigeCuvees.length > 0);

  // Filter cellar wines belonging to this region
  const cellarWines = useMemo(() => {
    if (!rawWines || !region) return [];

    const regNameLower = region.name.toLowerCase();
    const aliases = region.aliases || [region.id];

    return rawWines.filter(wine => {
      const locale = (wine.Locale || '').toLowerCase();
      const wineRegion = (wine.Region || '').toLowerCase();
      const wineCountry = (wine.Country || '').toLowerCase();
      const wineName = (wine.Wine || '').toLowerCase();

      const matchesCountry = region.country ? wineCountry.includes(region.country.toLowerCase()) || locale.includes(region.country.toLowerCase()) : true;
      
      const matchesRegion = 
        locale.includes(regNameLower) || 
        wineRegion.includes(regNameLower) || 
        aliases.some(alias => locale.includes(alias) || wineRegion.includes(alias) || wineName.includes(alias));

      return matchesRegion || (matchesCountry && regNameLower === 'other');
    });
  }, [rawWines, region]);

  // Group cellar bottles by sub-region & cru with sommelier metadata
  const { cellarBottlesBySub, cellarBottlesByCru, filteredCellarWines } = useMemo(() => {
    const subCounts = {};
    const cruCounts = {};

    const isChampagne = region?.id === 'champagne';

    const enriched = cellarWines.map(w => {
      let matchedSubId = null;
      let matchedCruId = null;
      let cruClassification = null;
      let commune = null;
      let producerCode = null;

      if (isChampagne) {
        const match = matchChampagneWine(w, region);
        matchedSubId = match.matchedSubId;
        matchedCruId = match.matchedCruId;
        cruClassification = match.cruClassification;
        commune = match.commune;
        producerCode = match.producerCode;
      } else {
        const locale = (w.Locale || '').toLowerCase();
        if (region?.subRegions) {
          for (const sub of region.subRegions) {
            const subNameLower = sub.name.toLowerCase();
            if (locale.includes(subNameLower) || (sub.focus && locale.includes(sub.focus.toLowerCase()))) {
              matchedSubId = sub.id;
              break;
            }
          }
        }
      }

      const qty = parseInt(w.Quantity, 10) || 1;

      if (matchedSubId) {
        subCounts[matchedSubId] = (subCounts[matchedSubId] || 0) + qty;
      }
      if (matchedCruId) {
        cruCounts[matchedCruId] = (cruCounts[matchedCruId] || 0) + qty;
      }

      return {
        ...w,
        _matchedSubId: matchedSubId,
        _matchedCruId: matchedCruId,
        _cruClassification: cruClassification,
        _commune: commune,
        _producerCode: producerCode
      };
    });

    let filtered = enriched;

    // Filter by active sub-region if selected
    if (activeSubRegionId) {
      filtered = filtered.filter(w => w._matchedSubId === activeSubRegionId);
    }

    // Filter by text search
    if (searchFilter.trim()) {
      const term = searchFilter.toLowerCase().trim();
      filtered = filtered.filter(w => {
        return (w.Producer || '').toLowerCase().includes(term) ||
               (w.Wine || '').toLowerCase().includes(term) ||
               (w.Vintage || '').toLowerCase().includes(term) ||
               (w.Locale || '').toLowerCase().includes(term) ||
               (w.Varietal || '').toLowerCase().includes(term) ||
               (w._commune || '').toLowerCase().includes(term) ||
               (w._cruClassification || '').toLowerCase().includes(term);
      });
    }

    return {
      cellarBottlesBySub: subCounts,
      cellarBottlesByCru: cruCounts,
      enrichedCellarWines: enriched,
      filteredCellarWines: filtered
    };
  }, [cellarWines, region, activeSubRegionId, searchFilter]);

  // Unified Filtered Crus for the Cru Directory tab (combining 17 Grand Crus + 16 Premier Crus)
  const unifiedCrus = useMemo(() => {
    const list = [];
    if (region?.grandCrus) {
      region.grandCrus.forEach(cru => {
        list.push({ ...cru, tier: 'grandCru', classification: 'Grand Cru (100%)', badge: '100% Échelle' });
      });
    }
    if (region?.premierCrus) {
      region.premierCrus.forEach(cru => {
        list.push({ ...cru, tier: 'premierCru', classification: `Premier Cru (${cru.echelleRating}%)`, badge: `${cru.echelleRating}% Échelle` });
      });
    }
    return list;
  }, [region]);

  const filteredUnifiedCrus = useMemo(() => {
    return unifiedCrus.filter(cru => {
      // Classification filter
      if (cruClassificationFilter === 'grandCrus' && cru.tier !== 'grandCru') return false;
      if (cruClassificationFilter === 'premierCru' && cru.tier !== 'premierCru') return false;
      if (cruClassificationFilter === 'premierCrus' && cru.tier !== 'premierCru') return false;

      // District filter
      if (cruDistrictFilter !== 'all') {
        const districtStr = (cru.district || cru.subregion || '').toLowerCase();
        if (!districtStr.includes(cruDistrictFilter.toLowerCase())) return false;
      }

      // Grape filter
      if (cruGrapeFilter !== 'all') {
        const grapeStr = (cru.dominantGrape || '').toLowerCase();
        if (!grapeStr.includes(cruGrapeFilter.toLowerCase())) return false;
      }

      // Search query
      if (cruSearchQuery.trim()) {
        const query = cruSearchQuery.toLowerCase().trim();
        const nameMatch = (cru.name || '').toLowerCase().includes(query);
        const charMatch = (cru.character || '').toLowerCase().includes(query);
        const soilMatch = (cru.soil || '').toLowerCase().includes(query);
        const prodsMatch = (cru.benchmarkProducers || cru.famousProducers || []).some(p => p.toLowerCase().includes(query));
        const closMatch = (cru.iconicVineyards || []).some(c => c.toLowerCase().includes(query));
        if (!nameMatch && !charMatch && !soilMatch && !prodsMatch && !closMatch) return false;
      }

      return true;
    });
  }, [unifiedCrus, cruClassificationFilter, cruDistrictFilter, cruGrapeFilter, cruSearchQuery]);

  if (!region) {
    return (
      <div className="region-detail-container">
        <div className="region-not-found">
          <h2>Region Information Not Found</h2>
          <button className="btn" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Wine Menu
          </button>
        </div>
      </div>
    );
  }

  const allWorldRegions = Object.values(WINE_REGIONS);

  return (
    <div className="region-detail-container">
      {/* Top Breadcrumb & Navigation Bar */}
      <header className="region-top-bar">
        <div className="region-top-bar-inner">
          <button className="region-back-btn" onClick={onBack} title="Return to Wine List">
            <ArrowLeft size={18} />
            <span>Back to Wine List</span>
          </button>

          <div className="region-dropdown-wrapper">
            <button 
              className="region-selector-btn"
              onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
            >
              <Compass size={16} style={{ color: 'var(--accent-gold)' }} />
              <span className="current-region-text">{region.name}</span>
              <ChevronDown size={14} className={regionDropdownOpen ? 'rotate-180' : ''} />
            </button>

            {regionDropdownOpen && (
              <div className="region-dropdown-menu">
                <div className="dropdown-header">Explore Other Wine Regions</div>
                <div className="dropdown-items-scroll">
                  {allWorldRegions.map(r => (
                    <button
                      key={r.id}
                      className={`dropdown-item ${r.id === region.id ? 'active' : ''}`}
                      onClick={() => {
                        setRegionDropdownOpen(false);
                        if (onSelectRegion) onSelectRegion(r.id);
                      }}
                    >
                      <span className="dropdown-flag">{r.countryCode === 'FR' ? '🇫🇷' : r.countryCode === 'IT' ? '🇮🇹' : r.countryCode === 'US' ? '🇺🇸' : r.countryCode === 'ES' ? '🇪🇸' : r.countryCode === 'DE' ? '🇩🇪' : r.countryCode === 'CL' ? '🇨🇱' : r.countryCode === 'AU' ? '🇦🇺' : r.countryCode === 'JP' ? '🇯🇵' : '🍷'}</span>
                      <div className="dropdown-item-info">
                        <span className="dropdown-item-name">{r.name}</span>
                        <span className="dropdown-item-country">{r.country}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="region-top-actions">
            <button className="region-action-icon-btn" onClick={() => window.print()} title="Print Region Guide">
              <Printer size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section 
        className="region-hero" 
        style={{ background: region.heroGradient || 'linear-gradient(135deg, #1c2833 0%, #b8860b 100%)' }}
      >
        <div className="region-hero-overlay"></div>
        <div className="region-hero-content">
          <div className="region-meta-badges">
            <span className="region-country-badge">
              {region.countryCode === 'FR' ? '🇫🇷 France' : 
               region.countryCode === 'IT' ? '🇮🇹 Italy' : 
               region.countryCode === 'US' ? '🇺🇸 United States' : 
               region.countryCode === 'ES' ? '🇪🇸 Spain' : 
               region.countryCode === 'DE' ? '🇩🇪 Germany' : 
               region.countryCode === 'CL' ? '🇨🇱 Chile' : 
               region.countryCode === 'AU' ? '🇦🇺 Australia' : 
               region.countryCode === 'JP' ? '🇯🇵 Japan' : region.country}
            </span>
            {hasGrandCrus && (
              <span className="region-cms-badge">
                <Crown size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} />
                Grand Cru & Premier Cru Terroirs
              </span>
            )}
            {cellarWines.length > 0 && (
              <button 
                type="button"
                className="region-cellar-badge clickable"
                onClick={() => {
                  setActiveSubRegionId(null);
                  setSearchFilter('');
                  setActiveTab('cellar');
                }}
                title="Click to view all cellar bottles from this region"
              >
                <Wine size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} />
                {cellarWines.length} Wine{cellarWines.length > 1 ? 's' : ''} in Cellar →
              </button>
            )}
          </div>

          <h1 className="region-hero-title">{region.name}</h1>
          <p className="region-hero-tagline">{region.tagline}</p>
          <p className="region-hero-summary">{region.summary}</p>
        </div>
      </section>

      {/* Main Tab Navigation */}
      <nav className="region-tabs-nav">
        <button 
          className={`region-tab-btn ${activeTab === 'map' ? 'active' : ''}`}
          onClick={() => setActiveTab('map')}
        >
          <MapPin size={16} />
          <span>Interactive Terroir Map</span>
        </button>

        {hasGrandCrus && (
          <button 
            className={`region-tab-btn ${activeTab === 'crus' ? 'active' : ''}`}
            onClick={() => setActiveTab('crus')}
          >
            <Crown size={16} />
            <span>Crus & Villages ({unifiedCrus.length})</span>
          </button>
        )}

        {hasTechnicalRegulations ? (
          <button 
            className={`region-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            <BookOpen size={16} />
            <span>Winemaking & Terroir Guide</span>
          </button>
        ) : (
          <button 
            className={`region-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            <Mountain size={16} />
            <span>Terroir & Grapes</span>
          </button>
        )}

        {hasPrestigeCuvees && (
          <button 
            className={`region-tab-btn ${activeTab === 'prestige' ? 'active' : ''}`}
            onClick={() => setActiveTab('prestige')}
          >
            <Sparkles size={16} />
            <span>Prestige Cuvées & Growers</span>
          </button>
        )}

        <button 
          className={`region-tab-btn ${activeTab === 'pairings' ? 'active' : ''}`}
          onClick={() => setActiveTab('pairings')}
        >
          <Utensils size={16} />
          <span>Food & Dining Pairings</span>
        </button>

        <button 
          className={`region-tab-btn ${activeTab === 'cellar' ? 'active' : ''}`}
          onClick={() => setActiveTab('cellar')}
        >
          <Wine size={16} />
          <span>In Our Cellar ({cellarWines.length})</span>
        </button>
      </nav>

      {/* Tab 1: Interactive Map & Appellations View */}
      {activeTab === 'map' && (
        <section className="region-tab-content map-tab">
          <div className="map-intro-bar">
            <div className="map-intro-text">
              <h3>Cartography & Cru Geography of {region.name}</h3>
              <p>Explore geological microclimates, 17 Grand Cru communes, 16 essential Premier Crus, famous river valleys, and sub-districts. Toggle between district zones, Grand Crus, and Premier Cru pins.</p>
            </div>
            {cellarWines.length > 0 && (
              <button 
                className="btn jump-to-cellar-btn"
                onClick={() => setActiveTab('cellar')}
              >
                <Wine size={16} style={{ marginRight: '6px' }} />
                View {cellarWines.length} Cellar Bottles
              </button>
            )}
          </div>

          <WineRegionMap 
            region={region} 
            activeSubRegionId={activeSubRegionId}
            onSelectSubRegion={setActiveSubRegionId}
            cellarBottlesCountBySub={cellarBottlesBySub}
            selectedCruId={selectedCruId}
            onSelectCru={(cruId) => {
              setSelectedCruId(cruId);
              setActiveTab('crus');
            }}
            onViewCellar={(subId) => {
              setActiveSubRegionId(subId);
              setSearchFilter('');
              setActiveTab('cellar');
            }}
          />

          {/* Sub-region Appellation Cards Grid */}
          {region.subRegions && region.subRegions.length > 0 && (
            <div className="appellations-grid-section">
              <h3 className="section-subtitle">
                <Layers size={18} style={{ color: 'var(--accent-gold)', marginRight: '8px' }} />
                Key Districts & Viticultural Zones
              </h3>
              <div className="appellation-cards-grid">
                {region.subRegions.map(sub => {
                  const isSelected = activeSubRegionId === sub.id;
                  const bottleCount = cellarBottlesBySub[sub.id] || 0;

                  return (
                    <div 
                      key={sub.id} 
                      className={`appellation-card ${isSelected ? 'is-focused' : ''}`}
                      onClick={() => setActiveSubRegionId(isSelected ? null : sub.id)}
                    >
                      <div className="appellation-card-header">
                        <h4 className="appellation-name">{sub.name}</h4>
                        {bottleCount > 0 ? (
                          <button 
                            type="button"
                            className="appellation-bottle-tag clickable"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveSubRegionId(sub.id);
                              setSearchFilter('');
                              setActiveTab('cellar');
                            }}
                            title={`Click to view ${bottleCount} cellar bottle${bottleCount > 1 ? 's' : ''} from ${sub.name}`}
                          >
                            🍷 {bottleCount} in Cellar →
                          </button>
                        ) : (
                          <span className="appellation-zone-tag">District</span>
                        )}
                      </div>

                      <div className="appellation-detail-row">
                        <strong>Terroir / Soil:</strong>
                        <p>{sub.terroir}</p>
                      </div>

                      <div className="appellation-detail-row">
                        <strong>Grape Focus:</strong>
                        <p>{sub.focus}</p>
                      </div>

                      <p className="appellation-desc">{sub.description}</p>

                      <div className="appellation-card-footer">
                        <span className="appellation-focus-link">
                          {isSelected ? 'Focused on Map ↑' : 'Locate on Map & Filter →'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Tab 2: 17 Grand Crus & Essential Premier Crus Directory (CMS Level 3) */}
      {activeTab === 'crus' && hasGrandCrus && (
        <section className="region-tab-content crus-tab">
          <div className="cms-section-header">
            <div>
              <div className="cms-badge-row">
                <span className="cms-level-badge">Grand Cru Classification</span>
                <span className="cru-count-badge">17 Grand Crus (100%) & 16 Essential Premier Crus (90–99%)</span>
              </div>
              <h3>Crus & Viticultural Hierarchy of Champagne</h3>
              <p>Under the historical <em>Échelle des Crus</em>, 17 villages earned 100% Grand Cru classification and 42 earned Premier Cru status (90–99%). Below are all 17 Grand Crus alongside the 16 most essential historical Premier Crus.</p>
            </div>
          </div>

          {/* Quick Subregion Filter Pills */}
          <div className="cru-filter-pill-bar">
            <span className="filter-group-label">Districts:</span>
            <button 
              className={`cru-filter-pill-btn ${cruDistrictFilter === 'all' ? 'active' : ''}`}
              onClick={() => setCruDistrictFilter('all')}
            >
              All Districts
            </button>
            <button 
              className={`cru-filter-pill-btn ${cruDistrictFilter === 'Montagne de Reims' ? 'active' : ''}`}
              onClick={() => setCruDistrictFilter('Montagne de Reims')}
            >
              Montagne de Reims (9 GC)
            </button>
            <button 
              className={`cru-filter-pill-btn ${cruDistrictFilter === 'Côte des Blancs' ? 'active' : ''}`}
              onClick={() => setCruDistrictFilter('Côte des Blancs')}
            >
              Côte des Blancs (6 GC)
            </button>
            <button 
              className={`cru-filter-pill-btn ${cruDistrictFilter === 'Vallée de la Marne' ? 'active' : ''}`}
              onClick={() => setCruDistrictFilter('Vallée de la Marne')}
            >
              Vallée de la Marne (2 GC)
            </button>
            <button 
              className={`cru-filter-pill-btn ${cruDistrictFilter === 'Côte des Bar' ? 'active' : ''}`}
              onClick={() => setCruDistrictFilter('Côte des Bar')}
            >
              Côte des Bar (Aube)
            </button>
            <button 
              className={`cru-filter-pill-btn ${cruDistrictFilter === 'Coteaux Sud d’Épernay' ? 'active' : ''}`}
              onClick={() => setCruDistrictFilter('Coteaux Sud d’Épernay')}
            >
              Coteaux Sud d’Épernay
            </button>
          </div>

          {/* Secondary Filter Controls Bar */}
          <div className="cru-controls-row">
            <div className="cru-tier-toggles">
              <button 
                className={`tier-toggle-btn ${cruClassificationFilter === 'all' ? 'active' : ''}`}
                onClick={() => setCruClassificationFilter('all')}
              >
                All Crus ({unifiedCrus.length})
              </button>
              <button 
                className={`tier-toggle-btn ${cruClassificationFilter === 'grandCrus' ? 'active' : ''}`}
                onClick={() => setCruClassificationFilter('grandCrus')}
              >
                <Crown size={14} style={{ color: 'var(--accent-gold)', marginRight: '4px' }} />
                17 Grand Crus (100%)
              </button>
              {hasPremierCrus && (
                <button 
                  className={`tier-toggle-btn ${cruClassificationFilter === 'premierCrus' ? 'active' : ''}`}
                  onClick={() => setCruClassificationFilter('premierCrus')}
                >
                  <Award size={14} style={{ color: '#d97706', marginRight: '4px' }} />
                  16 Premier Crus (90–99%)
                </button>
              )}
            </div>

            <div className="cru-filter-controls">
              <select 
                value={cruGrapeFilter} 
                onChange={(e) => setCruGrapeFilter(e.target.value)}
                className="cru-select-filter"
              >
                <option value="all">All Dominant Grapes</option>
                <option value="Pinot Noir">Pinot Noir Dominant 🍇</option>
                <option value="Chardonnay">Chardonnay Dominant 🥂</option>
                <option value="Meunier">Meunier Focus 🌿</option>
              </select>

              <div className="cru-search-wrapper">
                <Search size={14} className="cru-search-icon" />
                <input 
                  type="text"
                  placeholder="Search village, producer, soil..."
                  value={cruSearchQuery}
                  onChange={(e) => setCruSearchQuery(e.target.value)}
                  className="cru-search-input"
                />
              </div>
            </div>
          </div>

          {/* Unified Crus Grid */}
          <div className="grand-crus-grid">
            {filteredUnifiedCrus.map(cru => {
              const isPinot = cru.dominantGrape?.toLowerCase().includes('pinot');
              const isChard = cru.dominantGrape?.toLowerCase().includes('chardonnay');
              const isMeunier = cru.dominantGrape?.toLowerCase().includes('meunier');
              const isSelected = selectedCruId === cru.id;
              const isGrandCru = cru.tier === 'grandCru';
              const bottleCount = cellarBottlesByCru[cru.id] || 0;

              return (
                <div 
                  key={cru.id} 
                  className={`grand-cru-card ${isGrandCru ? 'grand-cru-tier' : 'premier-cru-tier'} ${isPinot ? 'pinot-cru' : (isChard ? 'chard-cru' : (isMeunier ? 'meunier-cru' : ''))} ${isSelected ? 'is-selected-cru' : ''}`}
                  onClick={() => setSelectedCruId(isSelected ? null : cru.id)}
                >
                  <div className="cru-card-top">
                    <div className="cru-card-title-group">
                      <span className="cru-district-pill">{cru.district || cru.subregion}</span>
                      <h4 className="cru-village-name">{cru.name}</h4>
                    </div>
                    <div className="cru-badge-stack">
                      <span className={`cru-classification-tag ${isGrandCru ? 'gold-tag' : 'amber-tag'}`}>
                        {cru.badge}
                      </span>
                      <span className={`cru-grape-badge ${isPinot ? 'pinot' : (isChard ? 'chard' : (isMeunier ? 'meunier' : 'pinot'))}`}>
                        {isPinot ? '🍇 Pinot Noir' : (isChard ? '🥂 Chardonnay' : (isMeunier ? '🌿 Meunier' : '🍇 Pinot Noir'))}
                      </span>
                    </div>
                  </div>

                  <div className="cru-meta-rows">
                    <div className="cru-meta-item">
                      <strong>Slope Aspect:</strong>
                      <span>{cru.aspect}</span>
                    </div>
                    {cru.grapeRatio && (
                      <div className="cru-meta-item">
                        <strong>Grape Ratio:</strong>
                        <span>{cru.grapeRatio}</span>
                      </div>
                    )}
                    <div className="cru-meta-item">
                      <strong>Soil Structure:</strong>
                      <span>{cru.soil}</span>
                    </div>
                  </div>

                  <p className="cru-character-text">
                    <em>Character:</em> {cru.character}
                  </p>

                  {cru.historicalSignificance && (
                    <p className="cru-history-text">
                      <em>History:</em> {cru.historicalSignificance}
                    </p>
                  )}

                  {(cru.benchmarkProducers || cru.famousProducers) && (
                    <div className="cru-producers-box">
                      <strong>Benchmark Producers:</strong>
                      <div className="producer-tag-list">
                        {(cru.benchmarkProducers || cru.famousProducers).map((prod, i) => (
                          <span key={i} className="producer-chip">{prod}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {cru.iconicVineyards && cru.iconicVineyards.length > 0 && (
                    <div className="cru-clos-box">
                      <strong>Iconic Single Vineyards / Clos:</strong>
                      <p>{cru.iconicVineyards.join(', ')}</p>
                    </div>
                  )}

                  <div className="cru-card-footer">
                    {bottleCount > 0 && (
                      <button 
                        type="button"
                        className="cru-cellar-badge clickable"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSearchFilter(cru.name);
                          setActiveTab('cellar');
                        }}
                        title={`Click to view ${bottleCount} cellar bottle${bottleCount > 1 ? 's' : ''} matching ${cru.name}`}
                      >
                        🍷 {bottleCount} in Cellar →
                      </button>
                    )}

                    <button 
                      className="btn-locate-map"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCruId(cru.id);
                        setActiveTab('map');
                      }}
                    >
                      <MapPin size={13} style={{ marginRight: '4px' }} />
                      Locate on Terroir Map
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Tab 3: CMS Level 3 Technical Regulations & Terroir Guide */}
      {activeTab === 'specs' && (
        <section className="region-tab-content specs-tab">
          {hasTechnicalRegulations ? (
            <div className="cms-specs-container">

              {/* Card 1: Geological Formations & Soil Stratigraphy */}
              {region.technicalRegulations.geology && (
                <div className="cms-tech-card geology-card">
                  <div className="tech-card-header">
                    <Mountain className="tech-icon" />
                    <div>
                      <span className="tech-tag">Pedology & Subsurface Geology</span>
                      <h4>Chalk Formations: Belemnite vs. Micraster vs. Kimmeridgian</h4>
                    </div>
                  </div>

                  <p className="tech-summary">
                    Champagne's world-renowned tension and saline minerality stem from distinct Mesozoic fossiliferous chalk, limestone marl, and clay strata:
                  </p>

                  <div className="geology-comparison-grid">
                    {region.technicalRegulations.geology.formations?.map((geo, idx) => (
                      <div key={idx} className="geo-formation-box">
                        <span className="geo-era">{geo.period || geo.era}</span>
                        <h5>{geo.name} {geo.frenchName ? `(${geo.frenchName})` : ''}</h5>
                        {geo.fossil && <p className="geo-fossil"><strong>Fossil Index:</strong> <em>{geo.fossil}</em></p>}
                        <p className="geo-locations"><strong>Key Locations:</strong> {Array.isArray(geo.keyAreas) ? geo.keyAreas.join(', ') : (geo.keyAreas || geo.locations)}</p>
                        <p className="geo-impact"><strong>Viticultural Impact:</strong> {geo.wineImpact || geo.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card 2: 7 Authorized Grapes Matrix + Complantée Highlight */}
              {region.technicalRegulations.grapes && (
                <div className="cms-tech-card grapes-tech-card">
                  <div className="tech-card-header">
                    <Wine className="tech-icon" />
                    <div>
                      <span className="tech-tag">Ampelography & Viticulture</span>
                      <h4>The 7 Authorized Grape Varieties of Champagne AOC</h4>
                    </div>
                  </div>

                  <p className="tech-summary">
                    While Pinot Noir (38%), Chardonnay (31%), and Meunier (31%) represent over 99.7% of vineyard acreage, the INAO legally authorizes four rare heritage varieties:
                  </p>

                  <div className="grapes-grid-7">
                    {[...(region.technicalRegulations.grapes.major || []), ...(region.technicalRegulations.grapes.heritage || [])].map(grape => (
                      <div key={grape.id || grape.name} className={`grape-card-cms ${grape.percentage && !String(grape.percentage).includes('<') ? 'primary-grape' : 'heritage-grape'}`}>
                        <div className="grape-card-header">
                          <span className={`grape-category-pill ${grape.percentage && !String(grape.percentage).includes('<') ? 'primary' : 'heritage'}`}>
                            {grape.percentage && !String(grape.percentage).includes('<') ? 'Primary Variety' : 'Heritage Variety'}
                          </span>
                          <span className="grape-planted-pct">{grape.percentage}%</span>
                        </div>
                        <h5 className="grape-title">{grape.name}</h5>
                        {grape.frenchSynonym && (
                          <span className="grape-synonym">Synonyms: <em>{grape.frenchSynonym}</em></span>
                        )}
                        <span className="grape-color-type">{grape.type} · {grape.epicenter || ''}</span>
                        <p className="grape-flavor-profile">{grape.profile}</p>
                        {grape.role && (
                          <p className="grape-role-text"><strong>Structural Role:</strong> {grape.role}</p>
                        )}
                        {grape.benchmarkCuvees && (
                          <div className="grape-notable-estate">
                            <em>Benchmark:</em> {grape.benchmarkCuvees.join(', ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Iconic Complantée Highlight Card */}
                  {region.technicalRegulations.grapes.iconicComplantee && (
                    <div className="complantee-card">
                      <div className="complantee-header">
                        <Sparkles size={18} style={{ color: 'var(--accent-gold)' }} />
                        <div>
                          <h5>Historic 7-Cépage Complantée: {region.technicalRegulations.grapes.iconicComplantee.name}</h5>
                          <span className="complantee-location">{region.technicalRegulations.grapes.iconicComplantee.location}</span>
                        </div>
                      </div>
                      <p className="complantee-desc">{region.technicalRegulations.grapes.iconicComplantee.description}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Card 3: CIVC Pressing Regulations & 4000kg Marc Extraction Standard */}
              {region.technicalRegulations.pressing && (
                <div className="cms-tech-card pressing-card">
                  <div className="tech-card-header">
                    <Scale className="tech-icon" />
                    <div>
                      <span className="tech-tag">CIVC Pressing Regulations</span>
                      <h4>The 4,000 kg Marc Extraction Standard & Yield Laws</h4>
                    </div>
                  </div>

                  <p className="tech-summary">
                    Traditional vertical basket presses (<em>pressoir vertical</em>) and pneumatic membrane presses operate under strict legal volumetric extraction yields calculated per 4,000 kg <em>marc</em> of whole-cluster fruit:
                  </p>

                  {/* Visual Extraction Flow Gauge */}
                  <div className="pressing-flow-gauge">
                    <div className="pressing-bar-wrapper">
                      <div className="pressing-fraction-bar">
                        <div className="fraction-segment cuvee" style={{ width: '51.25%' }} title="La Cuvée (2,050 L / 51.25%)">
                          <span>La Cuvée (2,050 L)</span>
                        </div>
                        <div className="fraction-segment taille" style={{ width: '12.5%' }} title="La Taille (500 L / 12.5%)">
                          <span>La Taille (500 L)</span>
                        </div>
                        <div className="fraction-segment rebeche" style={{ width: '8.75%' }} title="La Rebêche (7–10% Distillation)">
                          <span>Rebêche (7–10%)</span>
                        </div>
                        <div className="fraction-segment pomace" style={{ width: '27.5%' }} title="Dry Grape Pomace (Aignes)">
                          <span>Pomace</span>
                        </div>
                      </div>
                    </div>

                    <div className="pressing-metrics-grid">
                      <div className="metric-item">
                        <span className="metric-label">Total Marc Load</span>
                        <span className="metric-val">4,000 kg</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-label">Max Permitted AOC Must</span>
                        <span className="metric-val gold-val">2,550 L (63.75%)</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-label">Standard Pièce</span>
                        <span className="metric-val">205 Liters</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-label">Mandatory Distillation</span>
                        <span className="metric-val red-val">7% – 10%</span>
                      </div>
                    </div>
                  </div>

                  <div className="pressing-fraction-grid">
                    <div className="fraction-box cuvee">
                      <div className="fraction-badge">Premier Jus (Top Tier)</div>
                      <h5>La Cuvée</h5>
                      <span className="fraction-vol">2,050 Liters (10.25 pièces)</span>
                      <p>The purest free-run and first gentle press extraction. Highest in tartaric and malic acid, lowest in pH (2.95–3.10) and harsh skin phenolics. Forms 100% of top prestige cuvées and vintage Champagnes.</p>
                    </div>

                    <div className="fraction-box taille">
                      <div className="fraction-badge">Deuxième Jus</div>
                      <h5>La Taille</h5>
                      <span className="fraction-vol">500 Liters (2.5 pièces)</span>
                      <p>Second pressing extraction. Higher in potassium, higher pH (3.15–3.30), lower acidity, fruitier with more color and tannin. Used judiciously in structural blends or standard non-vintage cuvées.</p>
                    </div>

                    <div className="fraction-box rebeche">
                      <div className="fraction-badge">Mandatory Distillation</div>
                      <h5>La Rebêche</h5>
                      <span className="fraction-vol">7% – 10% Mandatory</span>
                      <p>Final hard pressings strictly forbidden from Champagne wine production; legally required to be sent to distilleries under customs supervision for Marc de Champagne, Fine, Ratafia, and industrial spirits.</p>
                    </div>
                  </div>

                  {region.technicalRegulations.pressing.rules && (
                    <div className="pressing-rules-box">
                      <h6>Official CIVC Legal Pressing Rules:</h6>
                      <ul className="pressing-rules-list">
                        {region.technicalRegulations.pressing.rules.map((rule, idx) => (
                          <li key={idx}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Card 4: CIVC Maturation & Lees Aging Requirements */}
              {region.technicalRegulations.aging && (
                <div className="cms-tech-card aging-tech-card">
                  <div className="tech-card-header">
                    <Clock className="tech-icon" />
                    <div>
                      <span className="tech-tag">CIVC Maturation & Aging Laws</span>
                      <h4>Maturation & Lees Aging Regulations (NV vs. Millésimé)</h4>
                    </div>
                  </div>

                  <p className="tech-summary">
                    Champagne legally mandates the longest minimum aging requirements of any major sparkling wine appellation in the world to ensure profound autolytic complexity:
                  </p>

                  <div className="aging-grid">
                    <div className="aging-box nv-box">
                      <div className="aging-header">
                        <span className="aging-type-tag">Non-Vintage (NV / BSA)</span>
                        <h5>15 Months Minimum Total Maturation</h5>
                      </div>
                      <div className="aging-stat-row">
                        <div className="aging-stat">
                          <span className="aging-stat-num">{region.technicalRegulations.aging.nonVintage?.minTotalMonths || 15}</span>
                          <span className="aging-stat-label">Total Months from Tirage</span>
                        </div>
                        <div className="aging-stat">
                          <span className="aging-stat-num gold-num">{region.technicalRegulations.aging.nonVintage?.minLeesMonths || 12}</span>
                          <span className="aging-stat-label">Min. Months on Lees (sur lattes)</span>
                        </div>
                      </div>
                      <p className="aging-rule">{region.technicalRegulations.aging.nonVintage?.rule}</p>
                      <p className="aging-desc">{region.technicalRegulations.aging.nonVintage?.description}</p>
                    </div>

                    <div className="aging-box vintage-box">
                      <div className="aging-header">
                        <span className="aging-type-tag vintage-tag">Vintage (Millésimé)</span>
                        <h5>36 Months (3 Years) Minimum Maturation</h5>
                      </div>
                      <div className="aging-stat-row">
                        <div className="aging-stat">
                          <span className="aging-stat-num">{region.technicalRegulations.aging.vintage?.minTotalMonths || 36}</span>
                          <span className="aging-stat-label">Total Months from Tirage</span>
                        </div>
                        <div className="aging-stat">
                          <span className="aging-stat-num gold-num">{region.technicalRegulations.aging.vintage?.declarationCapPct || 80}%</span>
                          <span className="aging-stat-label">Max Harvest Declaration Cap</span>
                        </div>
                      </div>
                      <p className="aging-rule">{region.technicalRegulations.aging.vintage?.rule}</p>
                      <p className="aging-desc">{region.technicalRegulations.aging.vintage?.description}</p>
                    </div>
                  </div>

                  {/* Yeast Autolysis Dynamics Note Box */}
                  <div className="autolysis-note">
                    <div className="autolysis-title">
                      <Sparkles size={16} style={{ color: 'var(--accent-gold)' }} />
                      <strong>Yeast Autolysis & Maturation Dynamics:</strong>
                    </div>
                    <p className="autolysis-text">
                      Following secondary fermentation (<em>prise de mousse</em>), yeasts exhaust nutrients and begin enzymatic breakdown (<strong>autolysis</strong>). Between 12 to 36+ months <em>sur lattes</em>, yeast cell walls rupture, liberating <strong>mannoproteins, amino acids, polysaccharides, and lipid compounds</strong>. This imparts signature brioche, toasted almond, hazelnut, and pastry notes, while buffering against oxidation and dramatically enhancing bubble mousse finesse and creaminess.
                    </p>
                  </div>
                </div>
              )}

              {/* Card 5: 7 Official Dosage Sweetness Tiers & Spectrum */}
              {region.technicalRegulations.dosageTiers && (
                <div className="cms-tech-card dosage-card">
                  <div className="tech-card-header">
                    <FlaskConical className="tech-icon" />
                    <div>
                      <span className="tech-tag">European Union & CIVC Labeling Standards</span>
                      <h4>Official Dosage Categories & Sweetness Spectrum (g/L)</h4>
                    </div>
                  </div>

                  {/* Visual Sweetness Spectrum Bar */}
                  <div className="dosage-spectrum-container">
                    <div className="dosage-spectrum-bar">
                      <div className="dosage-segment nature" style={{ width: '10%' }}><span>Nature (0-3)</span></div>
                      <div className="dosage-segment extra-brut" style={{ width: '12%' }}><span>Extra Brut (0-6)</span></div>
                      <div className="dosage-segment brut" style={{ width: '18%' }}><span>Brut (0-12)</span></div>
                      <div className="dosage-segment extra-dry" style={{ width: '15%' }}><span>Extra Dry (12-17)</span></div>
                      <div className="dosage-segment sec" style={{ width: '20%' }}><span>Sec (17-32)</span></div>
                      <div className="dosage-segment demi-sec" style={{ width: '15%' }}><span>Demi-Sec (32-50)</span></div>
                      <div className="dosage-segment doux" style={{ width: '10%' }}><span>Doux (50+)</span></div>
                    </div>
                  </div>

                  <div className="dosage-table-wrapper">
                    <table className="dosage-table">
                      <thead>
                        <tr>
                          <th>Dosage Category</th>
                          <th>Residual Sugar</th>
                          <th>Added Sugar Law</th>
                          <th>Palate Style & Character Profile</th>
                          <th>Food Pairings</th>
                        </tr>
                      </thead>
                      <tbody>
                        {region.technicalRegulations.dosageTiers.map((tier, idx) => (
                          <tr key={idx} className={tier.tier?.toLowerCase().includes('brut') ? 'highlight-row' : ''}>
                            <td>
                              <strong>{tier.tier || tier.name}</strong>
                              <span className="dosage-sub-term">({tier.frenchTerms || tier.frenchDesignation || ''})</span>
                            </td>
                            <td>
                              <span className="sugar-badge">{tier.sugarRange || tier.range || `${tier.gPerLMin}-${tier.gPerLMax} g/L`}</span>
                            </td>
                            <td>
                              {tier.sugarAddedAllowed === false ? (
                                <span className="sugar-free-badge">🚫 0 Sugar Added</span>
                              ) : (
                                <span className="sugar-allowed-badge">✓ Sugar Allowed</span>
                              )}
                            </td>
                            <td>
                              <p className="dosage-profile-text">{tier.profile || tier.description}</p>
                            </td>
                            <td>
                              <span className="dosage-pairings-tag">{tier.foodPairing || 'Aperitif, fine seafood'}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Card 6: Producer Registration Codes Decoder */}
              {region.technicalRegulations.producerCodes && (
                <div className="cms-tech-card codes-card">
                  <div className="tech-card-header">
                    <Award className="tech-icon" />
                    <div>
                      <span className="tech-tag">CIVC Matriculation Number Decoding</span>
                      <h4>Official Producer Registration Codes (NM, RM, CM, RC, SR, ND, MA)</h4>
                    </div>
                  </div>

                  <div className="producer-codes-grid">
                    {region.technicalRegulations.producerCodes.map(code => (
                      <div key={code.code} className="producer-code-item">
                        <div className="code-badge">{code.code}</div>
                        <div className="code-info">
                          <h6>{code.title || code.frenchName} <span className="code-translation">({code.englishTranslation})</span></h6>
                          {code.shareOfProduction && (
                            <span className="code-share-tag">Market Share: {code.shareOfProduction}</span>
                          )}
                          <p>{code.description}</p>
                          {code.exampleProducers && (
                            <span className="code-examples"><em>Benchmark Examples:</em> {code.exampleProducers.slice(0, 5).join(', ')}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card 7: Regional Ancillary Satellite Appellations */}
              {(region.technicalRegulations.ancillaryAocs || region.technicalRegulations.ancillaryAOCs) && (
                <div className="cms-tech-card ancillary-card">
                  <div className="tech-card-header">
                    <Sparkles className="tech-icon" />
                    <div>
                      <span className="tech-tag">Regional Satellite Appellations</span>
                      <h4>Coteaux Champenois & Rosé des Riceys AOC</h4>
                    </div>
                  </div>

                  <div className="ancillary-grid">
                    {(region.technicalRegulations.ancillaryAocs || region.technicalRegulations.ancillaryAOCs).map(aoc => (
                      <div key={aoc.name} className="ancillary-box">
                        <div className="ancillary-header">
                          <h5>{aoc.name}</h5>
                          {aoc.establishedYear && <span className="aoc-est-tag">Est. {aoc.establishedYear}</span>}
                        </div>
                        <span className="aoc-styles">{aoc.type || aoc.styles || aoc.style}</span>
                        <p>{aoc.description}</p>
                        <p><strong>Permitted Grapes:</strong> {Array.isArray(aoc.permittedGrapes) ? aoc.permittedGrapes.join(', ') : (aoc.permittedGrapes || aoc.authorizedGrapes)}</p>
                        {aoc.rules && (
                          <div className="aoc-rules-block">
                            <strong>AOC Winemaking Rules:</strong>
                            <ul>
                              {aoc.rules.map((rule, rIdx) => (
                                <li key={rIdx}>{rule}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {aoc.winemaking && (
                          <p><strong>Vinification:</strong> {aoc.winemaking}</p>
                        )}
                        {(aoc.benchmarkCruCommunes || aoc.benchmarkProducers) && (
                          <p><strong>Benchmark Crus & Estates:</strong> {(aoc.benchmarkCruCommunes || aoc.benchmarkProducers).join(', ')}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="terroir-cards-container">
              <div className="terroir-card">
                <div className="terroir-card-header">
                  <ThermometerSun className="terroir-icon" />
                  <h4>Climate & Atmospheric Conditions</h4>
                </div>
                <p>{region.terroir?.climate || 'Temperate climate favorable for fine wine growing with balanced sunshine and cooling breezes.'}</p>
              </div>

              <div className="terroir-card">
                <div className="terroir-card-header">
                  <Mountain className="terroir-icon" />
                  <h4>Geology & Soil Composition</h4>
                </div>
                <p>{region.terroir?.soil || 'Mineral-rich marine limestone, gravel benches, and well-draining clays.'}</p>
              </div>

              <div className="terroir-card">
                <div className="terroir-card-header">
                  <Droplets className="terroir-icon" />
                  <h4>River & Maritime Influences</h4>
                </div>
                <p>{region.terroir?.riverInfluence || 'River valleys moderate temperature extremes and provide essential humidity and air drainage.'}</p>
              </div>

              <div className="terroir-card">
                <div className="terroir-card-header">
                  <Compass className="terroir-icon" />
                  <h4>Elevation & Topography</h4>
                </div>
                <p>{region.terroir?.elevation || 'Sloping hillside amphitheaters with prime south-facing solar exposures.'}</p>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Tab 4: Prestige Cuvées & Iconic Cult Growers */}
      {activeTab === 'prestige' && hasPrestigeCuvees && (
        <section className="region-tab-content prestige-tab">
          <div className="prestige-intro">
            <div>
              <span className="cms-level-badge">Prestige Heritage & Benchmark Estates</span>
              <h3>Benchmark Prestige Cuvées of Champagne</h3>
              <p>The iconic tête de cuvées that established Champagne's global prestige, their inaugural debut vintages, terroir sourcing, and assemblage philosophies.</p>
            </div>
          </div>

          {/* 7-Column Prestige Cuvées Table (Sized for Desktop & iPad) */}
          <div className="prestige-table-wrapper">
            <table className="prestige-table">
              <colgroup>
                <col className="col-cuvee" />
                <col className="col-house" />
                <col className="col-debut" />
                <col className="col-blend" />
                <col className="col-sourcing" />
                <col className="col-winemaking" />
                <col className="col-legacy" />
              </colgroup>
              <thead>
                <tr>
                  <th>Prestige Cuvée</th>
                  <th>House / Estate</th>
                  <th>Debut</th>
                  <th>Composition</th>
                  <th>Terroir Sourcing</th>
                  <th>Winemaking & Aging</th>
                  <th>Iconic Legacy</th>
                </tr>
              </thead>
              <tbody>
                {region.prestigeCuvees.map((cuvee, idx) => (
                  <tr key={idx}>
                    <td className="col-cuvee-cell">
                      <strong className="cuvee-name-highlight">{cuvee.name}</strong>
                    </td>
                    <td className="col-house-cell">
                      <span className="house-name">{cuvee.houseOrGrower || cuvee.house}</span>
                      <span className="house-code-tag">({cuvee.producerCode || cuvee.code || 'NM'} · {cuvee.type || 'Maison'})</span>
                    </td>
                    <td className="col-debut-cell">
                      {renderDebutVintage(cuvee.debutVintage)}
                    </td>
                    <td className="col-blend-cell">
                      <span className="blend-text">{cuvee.grapeComposition || cuvee.blend}</span>
                    </td>
                    <td className="col-sourcing-cell">
                      <span className="sourcing-text">{cuvee.sourcing || 'Grand Cru Terroirs'}</span>
                    </td>
                    <td className="col-winemaking-cell">
                      <p className="vinification-note">{cuvee.winemaking || cuvee.vinification || cuvee.notes}</p>
                    </td>
                    <td className="col-legacy-cell">
                      <p className="iconic-status-note">{cuvee.iconicStatus || cuvee.character}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Iconic Grower Estates Directory */}
          {region.iconicGrowers && (
            <div className="growers-directory-section">
              <h3 className="section-subtitle">
                <Wine size={18} style={{ color: 'var(--accent-gold)', marginRight: '8px' }} />
                Iconic Grower Champagne (RM) Benchmark Estates
              </h3>
              <div className="growers-grid">
                {region.iconicGrowers.map(grower => (
                  <div key={grower.name} className="grower-card">
                    <div className="grower-card-header">
                      <h5>{grower.name}</h5>
                      <span className="grower-village">{grower.village} ({grower.subregion})</span>
                    </div>
                    <p className="grower-philosophy"><strong>Philosophy:</strong> {grower.philosophy}</p>
                    <p className="grower-key-wines"><strong>Key Cuvées:</strong> {grower.keyCuvees?.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Tab 5: Food & Dining Pairings */}
      {activeTab === 'pairings' && (
        <section className="region-tab-content pairings-tab">
          <div className="pairings-intro">
            <h3>Dining & Food Recommendations</h3>
            <p>Curated culinary pairings to elevate your dining experience when enjoying wines from {region.name}.</p>
          </div>

          <div className="pairings-grid">
            {region.foodPairings?.map((pairing, idx) => (
              <div key={idx} className="pairing-card">
                <div className="pairing-category-badge">{pairing.category}</div>
                <h4 className="pairing-dish-title">{pairing.dish}</h4>
                <div className="pairing-note">
                  <span className="pairing-note-label">Why it works:</span>
                  <p>{pairing.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sommelier-tip-box">
            <Sparkles size={20} className="tip-icon" />
            <div>
              <strong>Service & Glassware Tip:</strong>
              <p>
                When ordering fine Champagne from Grand Cru terroirs, consider serving in tulip-shaped white wine glasses rather than narrow flutes. This allows the complex brioche, hazelnut, and chalk mineral bouquet to breathe and express its true vinous character.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Tab 6: Available in Our Cellar */}
      {activeTab === 'cellar' && (
        <section className="region-tab-content cellar-tab">
          <div className="cellar-tab-header">
            <div>
              <h3>Bottles Available from {region.name}</h3>
              <p>Explore and order bottles currently in the cellar from this region.</p>
            </div>

            <div className="cellar-search-box">
              <Search size={16} className="search-icon" />
              <input 
                type="text"
                placeholder="Search producer, vintage, cuvée, village..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="cellar-search-input"
              />
            </div>
          </div>

          {/* Sub-region filter pills */}
          {region.subRegions && region.subRegions.length > 0 && (
            <div className="cellar-sub-filter-pills">
              <button 
                className={`filter-pill ${!activeSubRegionId ? 'active' : ''}`}
                onClick={() => setActiveSubRegionId(null)}
              >
                All Districts ({cellarWines.length})
              </button>
              {region.subRegions.map(sub => {
                const count = cellarBottlesBySub[sub.id] || 0;
                return (
                  <button
                    key={sub.id}
                    className={`filter-pill ${activeSubRegionId === sub.id ? 'active' : ''}`}
                    onClick={() => setActiveSubRegionId(activeSubRegionId === sub.id ? null : sub.id)}
                  >
                    {sub.name} {count > 0 && `(${count})`}
                  </button>
                );
              })}
            </div>
          )}

          {/* Wine Items List */}
          {filteredCellarWines.length === 0 ? (
            <div className="empty-cellar-message">
              <Wine size={42} style={{ opacity: 0.3, marginBottom: '10px' }} />
              <h4>No bottles found</h4>
              <p>No bottles currently in the cellar match this filter criteria.</p>
              {searchFilter && (
                <button className="btn" onClick={() => setSearchFilter('')}>Clear Search Filter</button>
              )}
            </div>
          ) : (
            <div className="region-wines-list">
              {filteredCellarWines.map((wine, idx) => {
                const vintage = wine.Vintage || 'NV';
                const producer = wine.Producer || '';
                let cleanName = wine.Wine || wine.Designation || 'Unknown Wine';

                if (producer && cleanName.startsWith(producer)) {
                  cleanName = cleanName.replace(producer, '').trim();
                }
                if (vintage !== 'NV' && cleanName.startsWith(vintage)) {
                  cleanName = cleanName.replace(vintage, '').trim();
                }
                cleanName = cleanName.replace(/^[,.\s-]+/, '').trim();

                const wineKey = `${producer}|${wine.Wine}|${vintage}`;
                const consumedCount = consumedCounts[wineKey] || 0;
                const totalQty = parseInt(wine.Quantity || '1', 10) || 1;
                const remainingQty = Math.max(0, totalQty - consumedCount);
                const price = wine.Value || wine.Valuation || wine.Price || '';

                const iWine = wine.iWine || wine.WineID || wine.IWine || '';
                const iBottle = wine.iBottle || wine.BottleID || wine.IBottle || wine.Barcode || '';
                const ctUrl = getCellarTrackerActionUrl ? getCellarTrackerActionUrl(iWine, iBottle, 'Drink', `${producer} ${wine.Wine}`) : null;

                return (
                  <div key={idx} className={`region-wine-card ${consumedCount > 0 ? 'has-consumed' : ''}`}>
                    <div className="wine-card-main">
                      <div className="wine-card-info">
                        <div className="sommelier-wine-badges">
                          {wine._cruClassification && (
                            <span className="somm-badge-cru">{wine._cruClassification}</span>
                          )}
                          {wine._commune && (
                            <span className="somm-badge-village">📍 {wine._commune}</span>
                          )}
                          {wine._producerCode && (
                            <span className="somm-badge-code">🏷️ {wine._producerCode}</span>
                          )}
                        </div>

                        <h4 className="wine-card-producer">{producer}</h4>
                        <p className="wine-card-name">
                          {cleanName} <span className="vintage-tag">{vintage}</span>
                        </p>
                        <div className="wine-card-meta">
                          <span><MapPin size={13} style={{ display: 'inline', marginRight: '3px' }} /> {wine.Locale || region.name}</span>
                          {wine.Bin && <span>· Bin: <strong>{wine.Bin}</strong></span>}
                          {wine.Location && <span>· Loc: {wine.Location}</span>}
                          {wine.Varietal && <span>· {wine.Varietal}</span>}
                        </div>
                      </div>

                      <div className="wine-card-pricing-actions">
                        {price && price !== '0' && (
                          <div className="wine-card-price">
                            ${Math.round(parseFloat(String(price).replace('$', '')))}
                          </div>
                        )}

                        <div className="wine-card-buttons">
                          {onConsumeBottle && remainingQty > 0 && (
                            <button 
                              className="btn order-bottle-btn"
                              onClick={() => onConsumeBottle(wine)}
                              title="Log 1 bottle opened tonight"
                            >
                              <Wine size={14} style={{ marginRight: '4px' }} />
                              Log Bottle ({remainingQty} left)
                            </button>
                          )}

                          {ctUrl && (
                            <a 
                              href={ctUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ct-link-btn"
                              title="View on CellarTracker"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
