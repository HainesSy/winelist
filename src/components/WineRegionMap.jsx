import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Layers, Maximize2, Compass, MapPin } from 'lucide-react';

// Custom Wine Sommelier Tile Providers
const TILE_LAYERS = {
  parchment: {
    name: 'Sommelier Cartography',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
    className: 'sommelier-tile-parchment'
  },
  topo: {
    name: 'Terroir & Relief Topo',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: '&copy; OpenTopoMap contributors',
    className: 'sommelier-tile-topo'
  },
  satellite: {
    name: 'Vineyard Satellite',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri World Imagery',
    className: 'sommelier-tile-sat'
  }
};

export default function WineRegionMap({ 
  region, 
  activeSubRegionId, 
  onSelectSubRegion,
  cellarBottlesCountBySub = {} 
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const layerGroupRef = useRef(null);
  const onSelectSubRegionRef = useRef(onSelectSubRegion);
  onSelectSubRegionRef.current = onSelectSubRegion;

  const [currentLayerType, setCurrentLayerType] = useState('parchment'); // 'parchment' | 'topo' | 'satellite'

  // Initialize and update map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: region.center || [47.05, 4.83],
        zoom: region.zoom || 9,
        minZoom: 4,
        maxZoom: 17,
        zoomControl: false,
        attributionControl: false
      });

      // Add zoom control at bottom-right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Custom Attribution
      L.control.attribution({ position: 'bottomleft', prefix: 'Sommelier Wine Atlas' }).addTo(map);

      mapInstanceRef.current = map;
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
    const layerConfig = TILE_LAYERS[currentLayerType] || TILE_LAYERS.parchment;
    const tileLayer = L.tileLayer(layerConfig.url, {
      attribution: layerConfig.attribution,
      maxZoom: 18,
      className: layerConfig.className
    });
    tileLayer.addTo(map);

    // Clear and redraw sub-region markers
    if (layerGroupRef.current) {
      layerGroupRef.current.clearLayers();
    }
    markersRef.current = {};

    if (region.subRegions && region.subRegions.length > 0) {
      region.subRegions.forEach(sub => {
        const isSelected = activeSubRegionId === sub.id;
        const bottleCount = cellarBottlesCountBySub[sub.id] || cellarBottlesCountBySub[sub.name] || 0;

        // Custom Sommelier Marker Icon (SVG styled)
        const customHtml = `
          <div class="custom-sommelier-marker ${isSelected ? 'is-active' : ''}">
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

        const marker = L.marker([sub.lat, sub.lng], { icon });

        // Popup Content
        const popupHtml = `
          <div class="sommelier-map-popup">
            <div class="popup-header">
              <span class="popup-sub-tag">Appellation Zone</span>
              <h4 class="popup-title">${sub.name}</h4>
            </div>
            <div class="popup-body">
              <div class="popup-row">
                <strong>Terroir / Soil:</strong>
                <p>${sub.terroir || 'Limestone, clay, and gravel benches.'}</p>
              </div>
              <div class="popup-row">
                <strong>Focus:</strong>
                <p>${sub.focus || 'Signature regional cuvees.'}</p>
              </div>
              ${bottleCount > 0 ? `
                <div class="popup-cellar-count">
                  🍷 <strong>${bottleCount} bottle${bottleCount > 1 ? 's' : ''}</strong> in your cellar
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

        marker.bindPopup(popupHtml, {
          maxWidth: 300,
          className: 'sommelier-leaflet-popup'
        });

        marker.on('popupopen', () => {
          const btn = document.querySelector(`.popup-explore-btn[data-subid="${sub.id}"]`);
          if (btn) {
            btn.onclick = (e) => {
              e.stopPropagation();
              if (onSelectSubRegionRef.current) onSelectSubRegionRef.current(sub.id);
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

    return () => {
      // Keep map instance cached for seamless re-render
    };
  }, [region, currentLayerType, activeSubRegionId, cellarBottlesCountBySub]);

  // Sync active sub-region focus
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    if (activeSubRegionId && region.subRegions) {
      const targetSub = region.subRegions.find(s => s.id === activeSubRegionId);
      if (targetSub && targetSub.lat && targetSub.lng) {
        map.flyTo([targetSub.lat, targetSub.lng], Math.max(region.zoom + 1, 11), {
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
    } else if (!activeSubRegionId && region.center) {
      map.flyTo(region.center, region.zoom, { duration: 1.0 });
    }
  }, [activeSubRegionId, region]);

  const handleResetView = () => {
    if (onSelectSubRegion) onSelectSubRegion(null);
    if (mapInstanceRef.current && region.center) {
      mapInstanceRef.current.flyTo(region.center, region.zoom, { duration: 1.0 });
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
            title="Sommelier Antique Cartography View"
          >
            <Compass size={14} style={{ marginRight: '4px' }} />
            Cartography
          </button>
          <button 
            className={`map-layer-pill ${currentLayerType === 'topo' ? 'active' : ''}`}
            onClick={() => setCurrentLayerType('topo')}
            title="Terroir & Relief Elevation Contours"
          >
            <Layers size={14} style={{ marginRight: '4px' }} />
            Terroir Relief
          </button>
          <button 
            className={`map-layer-pill ${currentLayerType === 'satellite' ? 'active' : ''}`}
            onClick={() => setCurrentLayerType('satellite')}
            title="Satellite Vineyard Hillsides"
          >
            <Maximize2 size={14} style={{ marginRight: '4px' }} />
            Satellite
          </button>
        </div>

        <button 
          className="map-reset-btn" 
          onClick={handleResetView}
          title="Reset map view to whole region"
        >
          <MapPin size={14} style={{ marginRight: '4px' }} />
          Reset View
        </button>
      </div>

      {/* The Leaflet Container */}
      <div ref={mapContainerRef} className="wine-leaflet-container" />

      {/* Sub-region Quick Bar */}
      {region.subRegions && region.subRegions.length > 0 && (
        <div className="map-subregions-overlay">
          <span className="subregions-overlay-label">Key Appellations:</span>
          <div className="subregions-chips">
            <button 
              className={`subregion-chip ${!activeSubRegionId ? 'active' : ''}`}
              onClick={() => handleResetView()}
            >
              All {region.name}
            </button>
            {region.subRegions.map(sub => {
              const bottleCount = cellarBottlesCountBySub[sub.id] || cellarBottlesCountBySub[sub.name] || 0;
              return (
                <button
                  key={sub.id}
                  className={`subregion-chip ${activeSubRegionId === sub.id ? 'active' : ''}`}
                  onClick={() => onSelectSubRegion && onSelectSubRegion(sub.id)}
                >
                  {sub.name}
                  {bottleCount > 0 && <span className="sub-count">({bottleCount})</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
