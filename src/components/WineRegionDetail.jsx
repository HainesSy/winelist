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
  Printer 
} from 'lucide-react';
import WineRegionMap from './WineRegionMap';
import { WINE_REGIONS, findWineRegion } from '../data/wineRegions';

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
  const [activeTab, setActiveTab] = useState('map'); // 'map' | 'terroir' | 'pairings' | 'cellar'
  const [activeSubRegionId, setActiveSubRegionId] = useState(null);
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

      // Check if wine belongs to this region
      const matchesCountry = region.country ? wineCountry.includes(region.country.toLowerCase()) || locale.includes(region.country.toLowerCase()) : true;
      
      const matchesRegion = 
        locale.includes(regNameLower) || 
        wineRegion.includes(regNameLower) || 
        aliases.some(alias => locale.includes(alias) || wineRegion.includes(alias) || wineName.includes(alias));

      return matchesRegion || (matchesCountry && regNameLower === 'other');
    });
  }, [rawWines, region]);

  // Group cellar bottles by sub-region for map badges and badges
  const { cellarBottlesBySub, filteredCellarWines } = useMemo(() => {
    const counts = {};
    const bySub = {};

    cellarWines.forEach(w => {
      const locale = (w.Locale || '').toLowerCase();
      let matchedSubId = null;

      if (region.subRegions) {
        for (const sub of region.subRegions) {
          const subNameLower = sub.name.toLowerCase();
          const subId = sub.id;
          if (locale.includes(subNameLower) || (sub.focus && locale.includes(sub.focus.toLowerCase()))) {
            matchedSubId = subId;
            break;
          }
        }
      }

      if (matchedSubId) {
        counts[matchedSubId] = (counts[matchedSubId] || 0) + (parseInt(w.Quantity, 10) || 1);
        if (!bySub[matchedSubId]) bySub[matchedSubId] = [];
        bySub[matchedSubId].push(w);
      }
    });

    let filtered = cellarWines;

    // Filter by active sub-region if selected
    if (activeSubRegionId && region.subRegions) {
      const activeSub = region.subRegions.find(s => s.id === activeSubRegionId);
      if (activeSub) {
        const subLower = activeSub.name.toLowerCase();
        filtered = filtered.filter(w => {
          const loc = (w.Locale || '').toLowerCase();
          return loc.includes(subLower);
        });
      }
    }

    // Filter by text search
    if (searchFilter.trim()) {
      const term = searchFilter.toLowerCase().trim();
      filtered = filtered.filter(w => {
        return (w.Producer || '').toLowerCase().includes(term) ||
               (w.Wine || '').toLowerCase().includes(term) ||
               (w.Vintage || '').toLowerCase().includes(term) ||
               (w.Locale || '').toLowerCase().includes(term) ||
               (w.Varietal || '').toLowerCase().includes(term);
      });
    }

    return {
      cellarBottlesBySub: counts,
      filteredCellarWines: filtered
    };
  }, [cellarWines, region, activeSubRegionId, searchFilter]);

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

  // All available world regions for dropdown
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
            <button className="region-action-icon-btn" onClick={() => window.print()} title="Print Region Sommelier Guide">
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
            {cellarWines.length > 0 && (
              <span className="region-cellar-badge">
                🍷 {cellarWines.length} Wine{cellarWines.length > 1 ? 's' : ''} in Cellar
              </span>
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

        <button 
          className={`region-tab-btn ${activeTab === 'terroir' ? 'active' : ''}`}
          onClick={() => setActiveTab('terroir')}
        >
          <Mountain size={16} />
          <span>Terroir, Grapes & Gifting</span>
        </button>

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
              <h3>Interactive Cartography of {region.name}</h3>
              <p>Explore geological microclimates, famous crus, river valleys, and sub-appellations. Click any marker to reveal terroir secrets and available cellar bottles.</p>
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
          />

          {/* Sub-region Appellation Cards Grid */}
          {region.subRegions && region.subRegions.length > 0 && (
            <div className="appellations-grid-section">
              <h3 className="section-subtitle">
                <Layers size={18} style={{ color: 'var(--accent-gold)', marginRight: '8px' }} />
                Key Appellations & Cru Districts
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
                          <span className="appellation-bottle-tag">
                            🍷 {bottleCount} in Cellar
                          </span>
                        ) : (
                          <span className="appellation-zone-tag">Cru Zone</span>
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

      {/* Tab 2: Terroir, Grapes & Classification */}
      {activeTab === 'terroir' && (
        <section className="region-tab-content terroir-tab">
          {/* Terroir & Geology Feature */}
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

          {/* Key Grape Varieties Breakdown */}
          {region.grapes && (
            <div className="grapes-section">
              <h3 className="section-subtitle">
                <Wine size={18} style={{ color: 'var(--accent-gold)', marginRight: '8px' }} />
                Signature Grape Varieties
              </h3>
              <div className="grapes-bars-container">
                {region.grapes.map(grape => (
                  <div key={grape.name} className="grape-bar-row">
                    <div className="grape-header">
                      <div className="grape-name-type">
                        <span className={`grape-type-dot ${grape.type.toLowerCase()}`}></span>
                        <strong>{grape.name}</strong>
                        <span className="grape-type-label">({grape.type})</span>
                      </div>
                      <span className="grape-percentage">{grape.percentage}%</span>
                    </div>

                    <div className="grape-progress-bg">
                      <div 
                        className={`grape-progress-fill ${grape.type.toLowerCase()}`}
                        style={{ width: `${grape.percentage}%` }}
                      />
                    </div>
                    <p className="grape-role-desc">{grape.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Structural Profile & Sommelier Metrics */}
          {region.structure && (
            <div className="structure-metrics-section">
              <h3 className="section-subtitle">
                <Sparkles size={18} style={{ color: 'var(--accent-gold)', marginRight: '8px' }} />
                Structural Taste Profile & Palate Architecture
              </h3>

              <div className="metrics-grid">
                <div className="metric-item">
                  <div className="metric-header">
                    <span>Body</span>
                    <strong>{region.structure.body > 7 ? 'Full-Bodied' : region.structure.body > 4 ? 'Medium-Bodied' : 'Light-Bodied'}</strong>
                  </div>
                  <div className="metric-bar-track">
                    <div className="metric-bar-fill" style={{ width: `${region.structure.body * 10}%` }} />
                  </div>
                </div>

                <div className="metric-item">
                  <div className="metric-header">
                    <span>Acidity</span>
                    <strong>{region.structure.acidity > 8 ? 'Racy & Crisp' : 'Balanced'}</strong>
                  </div>
                  <div className="metric-bar-track">
                    <div className="metric-bar-fill" style={{ width: `${region.structure.acidity * 10}%` }} />
                  </div>
                </div>

                <div className="metric-item">
                  <div className="metric-header">
                    <span>Tannins</span>
                    <strong>{region.structure.tannin > 7 ? 'Structured' : region.structure.tannin > 3 ? 'Supple' : 'Silky / Low'}</strong>
                  </div>
                  <div className="metric-bar-track">
                    <div className="metric-bar-fill" style={{ width: `${region.structure.tannin * 10}%` }} />
                  </div>
                </div>

                <div className="metric-item">
                  <div className="metric-header">
                    <span>Aging Potential</span>
                    <strong>{region.structure.agingPotential}</strong>
                  </div>
                  <div className="metric-bar-track">
                    <div className="metric-bar-fill" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>

              {/* Flavor Profile Pills */}
              {region.flavorProfile && (
                <div className="flavor-profile-box">
                  <h4>Sommelier Tasting Spectrum</h4>
                  <div className="flavor-tags">
                    {region.flavorProfile.primary.map((flavor, i) => (
                      <span key={i} className="flavor-tag primary">
                        {flavor}
                      </span>
                    ))}
                    {region.flavorProfile.secondary.map((flavor, i) => (
                      <span key={i} className="flavor-tag secondary">
                        {flavor}
                      </span>
                    ))}
                  </div>
                  <p className="palate-summary">
                    <em>Palate note:</em> {region.flavorProfile.palate}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Classification & Quality Hierarchy */}
          {region.classification && (
            <div className="classification-section">
              <h3 className="section-subtitle">
                <Award size={18} style={{ color: 'var(--accent-gold)', marginRight: '8px' }} />
                Understanding the Label: {region.classification.system}
              </h3>
              <p className="classification-intro">{region.classification.description}</p>

              <div className="classification-tiers-list">
                {region.classification.tiers.map((tier, idx) => (
                  <div key={idx} className="tier-card">
                    <div className="tier-number">{idx + 1}</div>
                    <div className="tier-content">
                      <h4 className="tier-title">{tier.name}</h4>
                      <p className="tier-detail">{tier.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Tab 3: Food & Dining Pairings */}
      {activeTab === 'pairings' && (
        <section className="region-tab-content pairings-tab">
          <div className="pairings-intro">
            <h3>Sommelier Dining Recommendations</h3>
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
              <strong>Sommelier Service Tip:</strong>
              <p>
                When ordering wines from {region.name}, ask your server or sommelier about optimal serving temperatures and decanting time. Mature vintage bottles will benefit from 20-30 minutes of gentle aeration to reveal their complex secondary bouquet.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Tab 4: Available in Our Cellar */}
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
                placeholder="Search producer, vintage, cuvee..."
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
                All Sub-Regions ({cellarWines.length})
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
                        <h4 className="wine-card-producer">{producer}</h4>
                        <p className="wine-card-name">
                          {cleanName} <span className="vintage-tag">{vintage}</span>
                        </p>
                        <div className="wine-card-meta">
                          <span><MapPin size={13} style={{ display: 'inline', marginRight: '3px' }} /> {wine.Locale || region.name}</span>
                          {wine.Bin && <span>- Bin: <strong>{wine.Bin}</strong></span>}
                          {wine.Location && <span>- Loc: {wine.Location}</span>}
                          {wine.Varietal && <span>- {wine.Varietal}</span>}
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
