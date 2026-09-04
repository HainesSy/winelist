import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Layers, Maximize2, Compass, MapPin, Award, Shapes, Crown } from 'lucide-react';
import { WINE_REGION_BOUNDARIES, WINE_REGION_OUTLINES } from '../data/wineRegionBoundaries';

// Custom Wine Sommelier Tile Providers supporting Mapbox Token, Stadia Key & Free Fallbacks
const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN || import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
const stadiaKey = import.meta.env.VITE_STADIA_API_KEY || '09a71635-6afb-419c-a272-b39c8b2654a3';

const getTileLayers = () => ({
  parchment: {
    name: 'Classic Cartography',
    url: mapboxToken 
      ? `https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/512/{z}/{x}/{y}@2x?access_token=${mapboxToken}`
      : (stadiaKey
          ? `https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png?api_key=${stadiaKey}`
          : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'),
    attribution: mapboxToken 
      ? '&copy; <a href="https://www.mapbox.com/" target="_blank" rel="noopener">Mapbox</a>' 
      : (stadiaKey ? '&copy; <a href="https://stadiamaps.com/" target="_blank" rel="noopener">Stadia Maps</a> &copy; OpenStreetMap' : '&copy; <a href="https://carto.com/" target="_blank" rel="noopener">CARTO</a> &copy; OpenStreetMap'),
    className: 'sommelier-tile-parchment',
    tileSize: mapboxToken ? 512 : 256,
    zoomOffset: mapboxToken ? -1 : 0
  },
  topo: {
    name: 'Terroir & Relief Topo',
    url: mapboxToken 
      ? `https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/512/{z}/{x}/{y}@2x?access_token=${mapboxToken}`
      : (stadiaKey 
          ? `https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.png?api_key=${stadiaKey}`
          : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'),
    attribution: mapboxToken 
      ? '&copy; <a href="https://www.mapbox.com/" target="_blank" rel="noopener">Mapbox</a>' 
      : (stadiaKey ? '&copy; <a href="https://stadiamaps.com/" target="_blank" rel="noopener">Stadia Maps</a> &copy; Stamen / OSM' : '&copy; OpenStreetMap / Esri'),
    className: 'sommelier-tile-topo',
    tileSize: mapboxToken ? 512 : 256,
    zoomOffset: mapboxToken ? -1 : 0
  },
  satellite: {
    name: 'Vineyard Satellite',
    url: mapboxToken
      ? `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/512/{z}/{x}/{y}@2x?access_token=${mapboxToken}`
      : (stadiaKey
          ? `https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}.jpg?api_key=${stadiaKey}`
          : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
    attribution: mapboxToken 
      ? '&copy; <a href="https://www.mapbox.com/" target="_blank" rel="noopener">Mapbox</a>' 
      : (stadiaKey ? '&copy; <a href="https://stadiamaps.com/" target="_blank" rel="noopener">Stadia Maps</a> &copy; CNES/Airbus' : '&copy; Esri World Imagery'),
    className: 'sommelier-tile-sat',
    tileSize: mapboxToken ? 512 : 256,
    zoomOffset: mapboxToken ? -1 : 0
  }
});

export default function WineRegionMap({ 
  region, 
  activeSubRegionId, 
  onSelectSubRegion,
  cellarBottlesCountBySub = {},
  selectedCruId = null,
  onSelectCru = null,
  onViewCellar = null
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const layerGroupRef = useRef(null);
  const outlineGroupRef = useRef(null);
  const geoJsonGroupRef = useRef(null);
  const onSelectSubRegionRef = useRef(onSelectSubRegion);
  const onSelectCruRef = useRef(onSelectCru);
  const onViewCellarRef = useRef(onViewCellar);

  const hasGrandCrus = Boolean(region.grandCrus && region.grandCrus.length > 0);
  const hasPremierCrus = Boolean(region.premierCrus && region.premierCrus.length > 0);

  const [currentLayerType, setCurrentLayerType] = useState('parchment'); // 'parchment' | 'topo' | 'satellite'
  const [pinViewMode, setPinViewMode] = useState('subregions'); // Default to 'subregions' (Districts)
  const [showBoundaries, setShowBoundaries] = useState(true);
  const [showRegionOutline, setShowRegionOutline] = useState(true);

  // Reset pin view mode to districts when navigating between regions
  useEffect(() => {
    setPinViewMode('subregions');
  }, [region.id]);

  // Sync callbacks to refs without triggering React 19 render warnings
  useEffect(() => {
    onSelectSubRegionRef.current = onSelectSubRegion;
    onSelectCruRef.current = onSelectCru;
    onViewCellarRef.current = onViewCellar;
  }, [onSelectSubRegion, onSelectCru, onViewCellar]);

  const boundaryData = WINE_REGION_BOUNDARIES[region.id];
  const outlineData = WINE_REGION_OUTLINES ? WINE_REGION_OUTLINES[region.id] : null;

  // Initialize and update map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: region.center || [49.05, 4.0],
        zoom: region.zoom || 9,
        minZoom: 4,
        maxZoom: 18,
        zoomControl: false,
        attributionControl: true
      });

      L.control.zoom({ position: 'topright' }).addTo(map);

      mapInstanceRef.current = map;
      outlineGroupRef.current = L.layerGroup().addTo(map);
      geoJsonGroupRef.current = L.layerGroup().addTo(map);
      layerGroupRef.current = L.layerGroup().addTo(map);
    }

    const map = mapInstanceRef.current;

    // Reset view to region center
    if (region.center && region.zoom) {
      map.setView(region.center, region.zoom, { animate: false });
    }

    // Clear existing tile layers
    map.eachLayer(layer => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    // Add selected base tile layer
    const tileLayers = getTileLayers();
    const layerConfig = tileLayers[currentLayerType] || tileLayers.parchment;
    const tileLayer = L.tileLayer(layerConfig.url, {
      attribution: layerConfig.attribution,
      maxZoom: 19,
      className: layerConfig.className,
      tileSize: layerConfig.tileSize || 256,
      zoomOffset: layerConfig.zoomOffset || 0
    });
    tileLayer.addTo(map);

    // Clear previous vector layers
    if (outlineGroupRef.current) {
      outlineGroupRef.current.clearLayers();
    }
    if (geoJsonGroupRef.current) {
      geoJsonGroupRef.current.clearLayers();
    }

    // 1. Draw Minimalist Regional Boundary Outline (Macro Appellation Border)
    let outlineLayer = null;
    if (showRegionOutline && outlineData) {
      const defaultOutlineColor = region.accentColor || '#d4af37';
      outlineLayer = L.geoJSON(outlineData, {
        style: (feature) => {
          const p = feature.properties || {};
          const color = p.color || defaultOutlineColor;
          return {
            color: color,
            weight: 2.4,
            dashArray: '5, 8', // elegant minimalist sommelier dashed border
            opacity: 0.90,
            fillColor: color,
            fillOpacity: 0.035, // subtle, minimalist translucent tint to frame the region
            className: 'sommelier-region-outline'
          };
        },
        onEachFeature: (feature, layer) => {
          const p = feature.properties || {};
          const nativeName = p.frenchName || p.italianName || p.germanName || p.spanishName || p.japaneseName;
          
          layer.bindTooltip(`
            <div class="sommelier-regional-outline-tooltip">
              <div class="outline-tooltip-badge">Delimited Region Border</div>
              <strong>${p.name || region.name}</strong>
              ${nativeName ? `<em class="outline-native-name">${nativeName}</em>` : ''}
              ${p.areaHa ? `<div class="outline-area">Surface: ~${Number(p.areaHa).toLocaleString()} hectares</div>` : ''}
              <p class="outline-tooltip-desc">${p.description || 'Official delimited viticultural production perimeter.'}</p>
            </div>
          `, {
            sticky: true,
            direction: 'top',
            className: 'sommelier-leaflet-outline-tooltip',
            offset: [0, -10]
          });

          layer.on({
            mouseover: (e) => {
              const target = e.target;
              target.setStyle({
                weight: 3.8,
                dashArray: null,
                opacity: 1.0,
                fillOpacity: 0.08
              });
            },
            mouseout: (e) => {
              const target = e.target;
              const p = feature.properties || {};
              const color = p.color || defaultOutlineColor;
              target.setStyle({
                color: color,
                weight: 2.4,
                dashArray: '5, 8',
                opacity: 0.90,
                fillOpacity: 0.035
              });
            },
            click: (e) => {
              L.DomEvent.stopPropagation(e);
              if (mapInstanceRef.current && e.target.getBounds) {
                mapInstanceRef.current.fitBounds(e.target.getBounds(), {
                  padding: [45, 45],
                  animate: true,
                  duration: 1.0
                });
              }
            }
          });
        }
      });
      outlineLayer.addTo(outlineGroupRef.current);
    }

    // 2. Draw GeoJSON Wine Appellation Sub-District Polygons
    let geoLayer = null;
    if (showBoundaries && boundaryData) {
      const isFeatureActive = (feat, activeId) => {
        if (!activeId) return false;
        const p = feat.properties || {};
        const fid = feat.id;
        return activeId === p.id ||
               activeId === fid ||
               activeId === p.subregionId ||
               activeId === p.parentSubregionId ||
               (p.id && typeof p.id === 'string' && p.id.startsWith(activeId)) ||
               (fid && typeof fid === 'string' && fid.startsWith(activeId));
      };

      geoLayer = L.geoJSON(boundaryData, {
        style: (feature) => {
          const props = feature.properties || {};
          const isSelected = isFeatureActive(feature, activeSubRegionId);
          const baseColor = props.color || '#d4af37';
          const strokeColor = isSelected ? '#ffffff' : (props.accent || baseColor);
          return {
            fillColor: baseColor,
            fillOpacity: isSelected ? 0.50 : (props.fillOpacity ? Math.min(props.fillOpacity + 0.16, 0.40) : 0.34),
            color: strokeColor,
            weight: isSelected ? 4.5 : 3.0,
            opacity: 1.0,
            className: `aoc-defined-boundary ${isSelected ? 'is-selected-boundary' : ''}`
          };
        },
        onEachFeature: (feature, layer) => {
          const props = feature.properties || {};

          // Clean hover-only tooltip (no clutter by default)
          layer.bindTooltip(`
            <div class="sommelier-poly-tooltip">
              <div class="poly-tooltip-header">
                <strong>${props.name}</strong>
                ${props.category ? `<span class="poly-cat-badge">${props.category}</span>` : ''}
              </div>
              ${props.dominantGrape ? `<div class="poly-grape">🍇 ${props.dominantGrape}</div>` : ''}
            </div>
          `, {
            sticky: true,
            direction: 'top',
            className: 'sommelier-leaflet-poly-tooltip',
            offset: [0, -10]
          });

          layer.on({
            mouseover: (e) => {
              const target = e.target;
              target.setStyle({
                weight: 5.0,
                fillOpacity: 0.58,
                color: '#ffffff'
              });
              if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                target.bringToFront();
              }
            },
            mouseout: (e) => {
              const target = e.target;
              const isStillSelected = isFeatureActive(feature, activeSubRegionId);
              const baseColor = props.color || '#d4af37';
              const strokeColor = isStillSelected ? '#ffffff' : (props.accent || baseColor);
              target.setStyle({
                fillColor: baseColor,
                fillOpacity: isStillSelected ? 0.50 : (props.fillOpacity ? Math.min(props.fillOpacity + 0.16, 0.40) : 0.34),
                color: strokeColor,
                weight: isStillSelected ? 4.5 : 3.0,
                opacity: 1.0
              });
            },
            click: (e) => {
              L.DomEvent.stopPropagation(e);
              const targetSubId = props.subregionId || props.parentSubregionId || props.id || feature.id;
              if (onSelectSubRegionRef.current) {
                onSelectSubRegionRef.current(targetSubId);
              }
              if (mapInstanceRef.current && e.target.getBounds) {
                mapInstanceRef.current.fitBounds(e.target.getBounds(), {
                  padding: [45, 45],
                  maxZoom: 12,
                  animate: true,
                  duration: 1.0
                });
              }
            }
          });
        }
      });
      geoLayer.addTo(geoJsonGroupRef.current);
    }

    // Frame map bounds: Prioritize regional outline for whole-region framing, then district boundaries
    if (!activeSubRegionId && !selectedCruId) {
      let targetBounds = null;
      if (showRegionOutline && outlineLayer && outlineLayer.getBounds().isValid()) {
        targetBounds = outlineLayer.getBounds();
      } else if (showBoundaries && geoLayer && geoLayer.getBounds().isValid()) {
        targetBounds = geoLayer.getBounds();
      }

      if (targetBounds) {
        const isTablet = typeof window !== 'undefined' && window.innerWidth <= 1024;
        const pad = isTablet ? [28, 28] : [50, 50];
        map.fitBounds(targetBounds, {
          padding: pad,
          maxZoom: isTablet ? 10 : 11,
          animate: false
        });
      }
    }

    // Ensure Leaflet recalculates size on iPad/tablet resize or orientation shift
    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined' && mapContainerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize({ pan: false });
        }
      });
      resizeObserver.observe(mapContainerRef.current);
    }

    // Clear and redraw markers
    if (layerGroupRef.current) {
      layerGroupRef.current.clearLayers();
    }
    markersRef.current = {};

    // 1. Draw Subregion / District Appellation Markers
    if ((pinViewMode === 'subregions' || pinViewMode === 'all') && region.subRegions && region.subRegions.length > 0) {
      region.subRegions.forEach(sub => {
        const isSelected = activeSubRegionId === sub.id;
        const bottleCount = cellarBottlesCountBySub[sub.id] || cellarBottlesCountBySub[sub.name] || 0;

        const customHtml = `
          <div class="custom-sommelier-marker subregion-marker ${isSelected ? 'is-active' : ''}">
            <div class="marker-pin">
              <span class="marker-wine-symbol">🍇</span>
              ${bottleCount > 0 ? `<span class="marker-badge">${bottleCount}</span>` : ''}
            </div>
            <div class="marker-tooltip-title">${sub.name}</div>
          </div>
        `;

        const icon = L.divIcon({
          className: 'custom-sommelier-marker-wrapper',
          html: customHtml,
          iconSize: [120, 60],
          iconAnchor: [60, 48],
          popupAnchor: [0, -45]
        });

        const marker = L.marker([sub.lat, sub.lng], { icon, zIndexOffset: 100 });

        const popupHtml = `
          <div class="sommelier-map-popup">
            <div class="popup-header">
              <span class="popup-sub-tag">Appellation District</span>
              <h4 class="popup-title">${sub.name}</h4>
            </div>
            <div class="popup-body">
              ${sub.grapeVarieties && sub.grapeVarieties.length > 0 ? `
                <div class="popup-row">
                  <strong>Grape Focus:</strong>
                  <p>🍇 ${Array.isArray(sub.grapeVarieties) ? sub.grapeVarieties.join(', ') : sub.grapeVarieties}</p>
                </div>
              ` : ''}
              <div class="popup-row">
                <strong>Terroir / Soil:</strong>
                <p>${sub.terroir || (sub.soilTypes ? (Array.isArray(sub.soilTypes) ? sub.soilTypes.join(', ') : sub.soilTypes) : 'Limestone, clay, and gravel benches.')}</p>
              </div>
              <div class="popup-row">
                <strong>Focus:</strong>
                <p>${sub.focus || 'Signature regional cuvées.'}</p>
              </div>
              ${sub.appellations && sub.appellations.length > 0 ? `
                <div class="popup-row">
                  <strong>Appellations:</strong>
                  <p>${Array.isArray(sub.appellations) ? sub.appellations.join(', ') : sub.appellations}</p>
                </div>
              ` : ''}
              ${bottleCount > 0 ? `
                <div class="popup-cellar-count popup-cellar-clickable" data-cellarsub="${sub.id}">
                  🍷 <strong>${bottleCount} bottle${bottleCount > 1 ? 's' : ''}</strong> in cellar <span style="text-decoration: underline; font-size: 0.76rem;">(View list →)</span>
                </div>
              ` : ''}
            </div>
            <div class="popup-footer">
              <button class="popup-explore-btn" data-subid="${sub.id}">
                ${isSelected ? 'Selected' : 'Focus Appellation & Wines →'}
              </button>
            </div>
          </div>
        `;

        marker.bindPopup(popupHtml, { maxWidth: 300, className: 'sommelier-leaflet-popup' });

        marker.on('popupopen', () => {
          const btn = document.querySelector(`.popup-explore-btn[data-subid="${sub.id}"]`);
          if (btn) {
            btn.onclick = (e) => {
              e.stopPropagation();
              if (onSelectSubRegionRef.current) onSelectSubRegionRef.current(sub.id);
            };
          }
          const cellarBtn = document.querySelector(`.popup-cellar-clickable[data-cellarsub="${sub.id}"]`);
          if (cellarBtn) {
            cellarBtn.onclick = (e) => {
              e.stopPropagation();
              if (onViewCellarRef.current) onViewCellarRef.current(sub.id);
            };
          }
        });

        marker.on('click', () => {
          if (onSelectSubRegionRef.current) onSelectSubRegionRef.current(sub.id);
        });

        marker.addTo(layerGroupRef.current);
        markersRef.current[sub.id] = marker;
      });
    }

    // 2. Draw Grand Cru & Classified Cru Markers (Radiant Gold aesthetic, z-index 1000)
    if ((pinViewMode === 'grandCrus' || pinViewMode === 'all') && hasGrandCrus) {
      const isBurgundy = region.id === 'burgundy';
      const isAlsace = region.id === 'alsace';
      const isChampagne = region.id === 'champagne';
      region.grandCrus.forEach(cru => {
        const isCruSelected = selectedCruId === cru.id;
        const dominantLower = (cru.dominantGrape || '').toLowerCase();
        const wineTypeLower = (cru.wineType || '').toLowerCase();
        const isWhite = wineTypeLower === 'white' || dominantLower.includes('chardonnay') || dominantLower.includes('riesling') || dominantLower.includes('gewurztraminer') || dominantLower.includes('pinot gris') || dominantLower.includes('muscat') || dominantLower.includes('sylvaner') || dominantLower.includes('sauvignon') || dominantLower.includes('chenin') || dominantLower.includes('viognier') || dominantLower.includes('vermentinu') || dominantLower.includes('koshu') || dominantLower.includes('cortese') || dominantLower.includes('garganega') || dominantLower.includes('aligoté') || dominantLower.includes('aligote') || dominantLower.includes('sémillon') || dominantLower.includes('semillon');
        const isSparkling = wineTypeLower === 'sparkling' || dominantLower.includes('champagne') || dominantLower.includes('crémant');
        const isRose = wineTypeLower === 'rose' || wineTypeLower === 'rosé' || dominantLower.includes('rose') || dominantLower.includes('rosé');
        const isAligote = dominantLower.includes('aligoté') || dominantLower.includes('aligote');

        const grapeSymbol = isRose ? '🌸' : (isSparkling ? '🍾' : (isWhite ? (isAligote ? '🌿' : '🥂') : '🍷'));
        const pinClass = isWhite ? 'chard-cru' : 'pinot-cru';

        let starBadgeText = 'GC';
        if (cru.badge) {
          starBadgeText = cru.badge.replace(/^👑\s*/, '').replace(/\s*\(.*?\)/, '').trim().slice(0, 10);
        } else if (cru.areaHa) {
          starBadgeText = `${cru.areaHa}ha`;
        } else if (isChampagne) {
          starBadgeText = '100%';
        }

        const cruClassification = cru.classification || cru.badge || ((isBurgundy || isAlsace) ? 'Grand Cru (AOC)' : (isChampagne ? 'Grand Cru (100% Échelle)' : 'Grand Cru'));
        const locationTag = cru.village || cru.commune || cru.district || cru.subregion || '';

        const cruHtml = `
          <div class="custom-sommelier-marker cru-marker grand-cru ${pinClass} ${isCruSelected ? 'is-active' : ''}">
            <div class="marker-pin grand-cru-pin">
              <span class="marker-wine-symbol">${grapeSymbol}</span>
              <span class="cru-star-badge">${starBadgeText}</span>
            </div>
            <div class="marker-tooltip-title cru-title">${cru.name}</div>
          </div>
        `;

        const cruIcon = L.divIcon({
          className: 'custom-sommelier-marker-wrapper',
          html: cruHtml,
          iconSize: [130, 60],
          iconAnchor: [65, 48],
          popupAnchor: [0, -45]
        });

        const marker = L.marker([cru.lat, cru.lng], { icon: cruIcon, zIndexOffset: 1000 });

        const cruPopupHtml = `
          <div class="sommelier-map-popup grand-cru-popup">
            <div class="popup-header">
              <span class="popup-sub-tag grand-cru-tag">👑 ${cruClassification}${locationTag ? ` · ${locationTag}` : ''}${cru.areaHa ? ` · ${cru.areaHa} ha` : ''}</span>
              <h4 class="popup-title">${cru.name}</h4>
            </div>
            <div class="popup-body">
              <div class="popup-row">
                <strong>Dominant Grape:</strong>
                <p>${grapeSymbol} <strong>${cru.dominantGrape || 'Regional Variety'}</strong> ${cru.grapeRatio ? `(${cru.grapeRatio})` : ''}</p>
              </div>
              ${cru.aocDecreeYear || cru.elevationRange ? `
                <div class="popup-row">
                  <strong>Technical Specs:</strong>
                  <p>${cru.aocDecreeYear ? `Decree Est. ${cru.aocDecreeYear}` : ''}${cru.aocDecreeYear && cru.elevationRange ? ' · ' : ''}${cru.elevationRange ? `Elevation: ${cru.elevationRange}` : ''}${cru.baseYield ? ` · Yield Cap: ${cru.baseYield}` : ''}</p>
                </div>
              ` : ''}
              ${cru.aspect ? `
                <div class="popup-row">
                  <strong>Hillside Aspect:</strong>
                  <p>${cru.aspect}</p>
                </div>
              ` : ''}
              <div class="popup-row">
                <strong>Soil & Geology:</strong>
                <p>${cru.soil || 'Calcareous limestone & mineral marl'}</p>
              </div>
              <div class="popup-row">
                <strong>Character Profile:</strong>
                <p>${cru.character || 'Profound structural complexity and cellar potential.'}</p>
              </div>
              ${cru.legalNotes ? `
                <div class="popup-row">
                  <strong>Appellation Nuance:</strong>
                  <p>${cru.legalNotes}</p>
                </div>
              ` : ''}
              ${cru.historicalSignificance ? `
                <div class="popup-row">
                  <strong>History & Lore:</strong>
                  <p>${cru.historicalSignificance}</p>
                </div>
              ` : ''}
              ${cru.benchmarkProducers && cru.benchmarkProducers.length > 0 ? `
                <div class="popup-row">
                  <strong>Benchmark Producers:</strong>
                  <p>${cru.benchmarkProducers.slice(0, 4).join(', ')}</p>
                </div>
              ` : ''}
              ${cru.iconicVineyards && cru.iconicVineyards.length > 0 ? `
                <div class="popup-row">
                  <strong>Iconic Vineyards / Clos:</strong>
                  <p>${cru.iconicVineyards.slice(0, 3).join(', ')}</p>
                </div>
              ` : ''}
            </div>
            <div class="popup-footer">
              <button class="popup-explore-btn cru-explore-btn" data-cruid="${cru.id}">
                ${isCruSelected ? 'Focused' : 'Study Cru Details →'}
              </button>
            </div>
          </div>
        `;

        marker.bindPopup(cruPopupHtml, { maxWidth: 320, className: 'sommelier-leaflet-popup' });

        marker.on('popupopen', () => {
          const btn = document.querySelector(`.popup-explore-btn[data-cruid="${cru.id}"]`);
          if (btn) {
            btn.onclick = (e) => {
              e.stopPropagation();
              if (onSelectCruRef.current) onSelectCruRef.current(cru.id);
            };
          }
        });

        marker.on('click', () => {
          if (onSelectCruRef.current) onSelectCruRef.current(cru.id);
        });

        marker.addTo(layerGroupRef.current);
        markersRef.current[`cru-${cru.id}`] = marker;
      });
    }

    // 3. Draw Premier Cru & Benchmark Cru Markers (Warm Bronze/Amber aesthetic, z-index 500)
    if ((pinViewMode === 'premierCrus' || pinViewMode === 'all') && hasPremierCrus) {
      const isBurgundy = region.id === 'burgundy';
      const isChampagne = region.id === 'champagne';
      region.premierCrus.forEach(pcru => {
        const isCruSelected = selectedCruId === pcru.id;
        const dominantLower = (pcru.dominantGrape || '').toLowerCase();
        const wineTypeLower = (pcru.wineType || '').toLowerCase();
        const isWhite = wineTypeLower === 'white' || dominantLower.includes('chardonnay') || dominantLower.includes('riesling') || dominantLower.includes('sauvignon') || dominantLower.includes('chenin') || dominantLower.includes('viognier') || dominantLower.includes('white');
        const isSparkling = wineTypeLower === 'sparkling' || dominantLower.includes('champagne') || dominantLower.includes('crémant');
        const isRose = wineTypeLower === 'rose' || wineTypeLower === 'rosé' || dominantLower.includes('rose') || dominantLower.includes('rosé');
        const isMeunier = dominantLower.includes('meunier');

        const grapeSymbol = isRose ? '🌸' : (isSparkling ? '🍾' : (isWhite ? '🥂' : (isMeunier ? '🌿' : '🍷')));
        const pinClass = isWhite ? 'chard-cru' : (isMeunier ? 'meunier-cru' : 'pinot-cru');

        let starBadgeText = '1er';
        if (pcru.badge) {
          starBadgeText = pcru.badge.replace(/^🥇\s*/, '').replace(/\s*\(.*?\)/, '').trim().slice(0, 10);
        } else if (pcru.areaHa) {
          starBadgeText = `${pcru.areaHa}ha`;
        } else if (pcru.echelleRating) {
          starBadgeText = `${pcru.echelleRating}%`;
        }

        const pcruClassification = pcru.classification || pcru.badge || (isBurgundy ? 'Premier Cru Climat' : (isChampagne ? `Premier Cru (${pcru.echelleRating || 95}% Échelle)` : 'Premier Cru'));
        const locationTag = pcru.village || pcru.commune || pcru.district || pcru.subregion || '';

        const pcruHtml = `
          <div class="custom-sommelier-marker cru-marker premier-cru ${pinClass} ${isCruSelected ? 'is-active' : ''}">
            <div class="marker-pin premier-cru-pin">
              <span class="marker-wine-symbol">${grapeSymbol}</span>
              <span class="cru-star-badge premier-badge">${starBadgeText}</span>
            </div>
            <div class="marker-tooltip-title cru-title">${pcru.name}</div>
          </div>
        `;

        const pcruIcon = L.divIcon({
          className: 'custom-sommelier-marker-wrapper',
          html: pcruHtml,
          iconSize: [130, 60],
          iconAnchor: [65, 48],
          popupAnchor: [0, -45]
        });

        const marker = L.marker([pcru.lat, pcru.lng], { icon: pcruIcon, zIndexOffset: 500 });

        const pcruPopupHtml = `
          <div class="sommelier-map-popup premier-cru-popup">
            <div class="popup-header">
              <span class="popup-sub-tag premier-cru-tag">🥇 ${pcruClassification}${locationTag ? ` · ${locationTag}` : ''}${pcru.areaHa ? ` · ${pcru.areaHa} ha` : ''}</span>
              <h4 class="popup-title">${pcru.name}</h4>
            </div>
            <div class="popup-body">
              <div class="popup-row">
                <strong>Dominant Grape:</strong>
                <p>${grapeSymbol} <strong>${pcru.dominantGrape || 'Regional Variety'}</strong> ${pcru.grapeRatio ? `(${pcru.grapeRatio})` : ''}</p>
              </div>
              ${pcru.areaHa || pcru.aspect ? `
                <div class="popup-row">
                  <strong>Terroir & Aspect:</strong>
                  <p>${pcru.aspect || 'Slope'} · ${pcru.soil || 'Limestone marl'}</p>
                </div>
              ` : ''}
              <div class="popup-row">
                <strong>Character:</strong>
                <p>${pcru.character || 'Vibrant, terroir-expressive Cru.'}</p>
              </div>
              ${pcru.historicalSignificance ? `
                <div class="popup-row">
                  <strong>History & Lore:</strong>
                  <p>${pcru.historicalSignificance}</p>
                </div>
              ` : ''}
              ${(pcru.benchmarkProducers || pcru.famousProducers) && (pcru.benchmarkProducers || pcru.famousProducers).length > 0 ? `
                <div class="popup-row">
                  <strong>Benchmark Producers:</strong>
                  <p>${(pcru.benchmarkProducers || pcru.famousProducers).slice(0, 4).join(', ')}</p>
                </div>
              ` : ''}
              ${pcru.iconicVineyards && pcru.iconicVineyards.length > 0 ? `
                <div class="popup-row">
                  <strong>Iconic Clos / Lieux-Dits:</strong>
                  <p>${pcru.iconicVineyards.slice(0, 3).join(', ')}</p>
                </div>
              ` : ''}
            </div>
            <div class="popup-footer">
              <button class="popup-explore-btn premier-explore-btn" data-cruid="${pcru.id}">
                ${isCruSelected ? 'Focused' : 'Study Cru Details →'}
              </button>
            </div>
          </div>
        `;

        marker.bindPopup(pcruPopupHtml, { maxWidth: 320, className: 'sommelier-leaflet-popup' });

        marker.on('popupopen', () => {
          const btn = document.querySelector(`.popup-explore-btn[data-cruid="${pcru.id}"]`);
          if (btn) {
            btn.onclick = (e) => {
              e.stopPropagation();
              if (onSelectCruRef.current) onSelectCruRef.current(pcru.id);
            };
          }
        });

        marker.on('click', () => {
          if (onSelectCruRef.current) onSelectCruRef.current(pcru.id);
        });

        marker.addTo(layerGroupRef.current);
        markersRef.current[`premier-${pcru.id}`] = marker;
      });
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [region, currentLayerType, pinViewMode, activeSubRegionId, selectedCruId, cellarBottlesCountBySub, showBoundaries, boundaryData, showRegionOutline, outlineData, hasGrandCrus, hasPremierCrus]);

  // Sync active sub-region focus
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    if (activeSubRegionId && region.subRegions) {
      const targetSub = region.subRegions.find(s => s.id === activeSubRegionId);
      if (targetSub && targetSub.lat && targetSub.lng) {
        map.flyTo([targetSub.lat, targetSub.lng], Math.max(region.zoom + 1, 10), {
          duration: 1.2,
          easeLinearity: 0.25
        });

        const targetMarker = markersRef.current[activeSubRegionId];
        if (targetMarker) {
          setTimeout(() => {
            targetMarker.openPopup();
          }, 600);
        }
      }
    } else if (!activeSubRegionId && !selectedCruId && region.center) {
      map.flyTo(region.center, region.zoom, { duration: 1.0 });
    }
  }, [activeSubRegionId, region, selectedCruId]);

  // Sync active Cru focus (searching in both 17 Grand Crus and 16 Premier Crus)
  useEffect(() => {
    if (!mapInstanceRef.current || !selectedCruId) return;
    const map = mapInstanceRef.current;

    const isGrand = (region.grandCrus || []).some(c => c.id === selectedCruId);
    const isPremier = (region.premierCrus || []).some(c => c.id === selectedCruId);

    if (isGrand && pinViewMode !== 'grandCrus' && pinViewMode !== 'all') {
      setPinViewMode('grandCrus');
    } else if (isPremier && pinViewMode !== 'premierCrus' && pinViewMode !== 'all') {
      setPinViewMode('premierCrus');
    }

    const targetCru = (region.grandCrus || []).find(c => c.id === selectedCruId) ||
                      (region.premierCrus || []).find(c => c.id === selectedCruId);

    if (targetCru && targetCru.lat && targetCru.lng) {
      map.flyTo([targetCru.lat, targetCru.lng], 13, {
        duration: 1.2,
        easeLinearity: 0.25
      });

      const targetMarker = markersRef.current[`cru-${selectedCruId}`] || markersRef.current[`premier-${selectedCruId}`];
      if (targetMarker) {
        setTimeout(() => {
          targetMarker.openPopup();
        }, 600);
      }
    }
  }, [selectedCruId, region]);

  const handleResetView = () => {
    if (onSelectSubRegion) onSelectSubRegion(null);
    if (onSelectCru) onSelectCru(null);
    setPinViewMode('subregions');
    if (mapInstanceRef.current) {
      if (outlineData && showRegionOutline) {
        const bounds = L.geoJSON(outlineData).getBounds();
        if (bounds.isValid()) {
          mapInstanceRef.current.fitBounds(bounds, { padding: [55, 55], animate: true, duration: 1.0 });
          return;
        }
      }
      if (boundaryData) {
        const bounds = L.geoJSON(boundaryData).getBounds();
        if (bounds.isValid()) {
          mapInstanceRef.current.fitBounds(bounds, { padding: [55, 55], animate: true, duration: 1.0 });
          return;
        }
      }
      if (region.center) {
        mapInstanceRef.current.flyTo(region.center, region.zoom, { duration: 1.0 });
      }
    }
  };

  return (
    <div className="wine-region-map-wrapper">
      {/* Map Control Toolbar */}
      <div className="map-glass-toolbar">
        <div className="map-layer-selector">
          <button 
            className={`map-layer-pill ${currentLayerType === 'parchment' ? 'active' : ''}`}
            onClick={() => setCurrentLayerType('parchment')}
            title="Classic Cartography View"
          >
            <Compass size={13} style={{ marginRight: '3px' }} />
            Cartography
          </button>
          <button 
            className={`map-layer-pill ${currentLayerType === 'topo' ? 'active' : ''}`}
            onClick={() => setCurrentLayerType('topo')}
            title="Terroir & Relief Elevation Contours"
          >
            <Layers size={13} style={{ marginRight: '3px' }} />
            Terroir
          </button>
          <button 
            className={`map-layer-pill ${currentLayerType === 'satellite' ? 'active' : ''}`}
            onClick={() => setCurrentLayerType('satellite')}
            title="Satellite Vineyard Hillsides"
          >
            <Maximize2 size={13} style={{ marginRight: '3px' }} />
            Satellite
          </button>
          {outlineData && (
            <button 
              className={`map-layer-pill ${showRegionOutline ? 'active' : ''}`}
              onClick={() => setShowRegionOutline(prev => !prev)}
              title="Toggle Minimalist Regional Border Outline"
            >
              <Compass size={13} style={{ marginRight: '3px', color: showRegionOutline ? 'var(--accent-gold)' : 'inherit' }} />
              Region Border {showRegionOutline ? 'ON' : 'OFF'}
            </button>
          )}
          {boundaryData && (
            <button 
              className={`map-layer-pill ${showBoundaries ? 'active' : ''}`}
              onClick={() => setShowBoundaries(prev => !prev)}
              title="Toggle Sub-appellation District Polygons"
            >
              <Shapes size={13} style={{ marginRight: '3px', color: showBoundaries ? 'var(--accent-gold)' : 'inherit' }} />
              Districts {showBoundaries ? 'ON' : 'OFF'}
            </button>
          )}
        </div>

        <div className="map-toolbar-group">
          {hasGrandCrus && (
            <div className="map-layer-selector">
              <button 
                className={`map-layer-pill ${pinViewMode === 'subregions' ? 'active' : ''}`}
                onClick={() => setPinViewMode('subregions')}
                title="Display Subregion Districts"
              >
                <Layers size={12} style={{ marginRight: '2px', color: pinViewMode === 'subregions' ? 'var(--accent-gold)' : 'inherit' }} />
                Districts
              </button>
              <button 
                className={`map-layer-pill ${pinViewMode === 'grandCrus' ? 'active' : ''}`}
                onClick={() => setPinViewMode('grandCrus')}
                title={`Display ${region.grandCrus?.length || 0} Classified Crus`}
              >
                <Crown size={12} style={{ marginRight: '2px', color: 'var(--accent-gold)' }} />
                {region.grandCrus?.length || ''} {(region.id === 'burgundy' || region.id === 'alsace' || region.id === 'champagne') ? 'Grand Crus' : 'Classified Crus'}
              </button>
              {hasPremierCrus && (
                <button 
                  className={`map-layer-pill ${pinViewMode === 'premierCrus' ? 'active' : ''}`}
                  onClick={() => setPinViewMode('premierCrus')}
                  title={`Display ${region.premierCrus?.length || 0} Premier Crus / Benchmarks`}
                >
                  <Award size={12} style={{ marginRight: '2px', color: '#d97706' }} />
                  {region.premierCrus?.length || ''} {(region.id === 'burgundy' || region.id === 'champagne') ? 'Premier Crus' : 'Crus / Benchmarks'}
                </button>
              )}
              <button 
                className={`map-layer-pill ${pinViewMode === 'all' ? 'active' : ''}`}
                onClick={() => setPinViewMode('all')}
                title="Display All Pins"
              >
                All Pins
              </button>
            </div>
          )}

          <button 
            className="map-reset-btn" 
            onClick={handleResetView}
            title="Reset map view to whole region"
          >
            <MapPin size={13} style={{ marginRight: '3px' }} />
            Reset
          </button>
        </div>
      </div>

      {/* The Leaflet Container */}
      <div ref={mapContainerRef} className="wine-leaflet-container" />
    </div>
  );
}
