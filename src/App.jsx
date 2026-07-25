import React, { useState, useRef, useEffect } from 'react';
import Papa from 'papaparse';
import { UploadCloud, Printer, RefreshCw, Menu, X, Wine, CheckCircle2, MapPin, Undo2, Check, ExternalLink } from 'lucide-react';
import './App.css';

function App() {
  const [rawWines, setRawWines] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [isHovering, setIsHovering] = useState(false);
  const [isLoadingDefault, setIsLoadingDefault] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isForceClosed, setIsForceClosed] = useState(false);
  const fileInputRef = useRef(null);

  // Interactive consumption tracking states
  const [consumedCounts, setConsumedCounts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ct_consumed_counts') || '{}');
    } catch {
      return {};
    }
  });

  const [consumedBins, setConsumedBins] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ct_consumed_bins') || '{}');
    } catch {
      return {};
    }
  });

  const [activeModal, setActiveModal] = useState(null); // { wine, availableBins, selectedBinId }
  const [toast, setToast] = useState(null); // { message, type, iWine }
  const [swipeState, setSwipeState] = useState({ key: null, deltaX: 0 });
  const touchStartRef = useRef({ x: 0, y: 0, wineKey: null, isSwiping: false, wine: null });

  const showToast = (message, type = 'info', iWine = null) => {
    setToast({ message, type, iWine });
    setTimeout(() => {
      setToast(null);
    }, 6000);
  };

  const fetchFromCellarTracker = async (user, pass) => {
    setIsLoadingDefault(true);
    try {
      const url = `/api/cellartracker/xlquery.asp?User=${encodeURIComponent(user)}&Password=${encodeURIComponent(pass)}&Format=csv&Table=Inventory`;
      const response = await fetch(url);

      if (response.ok) {
        const blob = await response.blob();
        const textCheck = await blob.slice(0, 1000).text();
        if (textCheck.toLowerCase().includes('<!doctype html>') || textCheck.toLowerCase().includes('<html')) {
          console.log("Failed to fetch or invalid credentials (HTML returned)");
          alert("Failed to connect to CellarTracker. Please check your credentials.");
          localStorage.removeItem('ct_user');
          localStorage.removeItem('ct_pass');
          setIsLoadingDefault(false);
          return;
        }

        Papa.parse(blob, {
          header: true,
          skipEmptyLines: true,
          encoding: "ISO-8859-1",
          complete: (results) => {
            const parsedWines = results.data;
            const validWines = parsedWines.filter(w => w.Wine || w.Vintage);
            if (validWines.length > 0) {
              setRawWines(parsedWines);
              localStorage.setItem('ct_user', user);
              localStorage.setItem('ct_pass', pass);
            } else {
              alert("No wines found in your cellar, or format invalid.");
            }
            setIsLoadingDefault(false);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
            alert("Failed to parse CSV file from CellarTracker.");
            setIsLoadingDefault(false);
          }
        });
      } else {
        alert(`Failed to connect to CellarTracker. Server responded with error ${response.status}: ${response.statusText}`);
        setIsLoadingDefault(false);
      }
    } catch (error) {
      console.log("Error fetching from CellarTracker proxy:", error);
      alert(`Error connecting to CellarTracker: ${error.message || "Unknown error"}. If you are on the website, this might be a temporary proxy issue.`);
      setIsLoadingDefault(false);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('ct_user');
    const savedPass = localStorage.getItem('ct_pass');

    if (savedUser && savedPass) {
      setUsername(savedUser);
      fetchFromCellarTracker(savedUser, savedPass);
    } else {
      setIsLoadingDefault(false);
    }
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      fetchFromCellarTracker(username, password);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ct_user');
    localStorage.removeItem('ct_pass');
    setUsername('');
    setPassword('');
    setRawWines(null);
    setActiveTab('All');
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      parseCSV(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsHovering(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      parseCSV(file);
    }
  };

  const parseCSV = (file) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      encoding: "ISO-8859-1", // Fixes question mark rendering for European wine names
      complete: (results) => {
        const parsedWines = results.data;
        // Basic filtering to ensure we only process rows that look like wines
        const validWines = parsedWines.filter(w => w.Wine || w.Vintage);
        setRawWines(validWines);
        setIsLoadingDefault(false);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
        alert("Failed to parse CSV file. Please make sure it is a valid CellarTracker export.");
        setIsLoadingDefault(false);
      }
    });
  };

  const decodeEntities = (text) => {
    if (!text) return text;
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
  };

  const groupWines = (wineList) => {
    const grouped = {};
    wineList.forEach(wine => {
      let mainType = decodeEntities(wine.Type || wine.Color || 'Other Wines');

      const searchName = (wine.Wine || '').toLowerCase();
      const searchType = (wine.Type || '').toLowerCase();
      if (searchName.includes('champagne') || searchName.includes('sparkling') || searchType.includes('sparkling')) {
        mainType = 'Sparkling';
      }

      let country = 'Other';
      let subregion = 'Other';

      if (wine.Locale) {
        const localeParts = wine.Locale.split(',');
        country = decodeEntities(localeParts[0].trim());
        if (localeParts.length > 1) {
          subregion = decodeEntities(localeParts[1].trim());
        }
      } else {
        country = decodeEntities(wine.Country || 'Other');
        subregion = decodeEntities(wine.Region || wine.Varietal || 'Other');
      }

      const localeLower = (wine.Locale || wine.Region || '').toLowerCase();
      const isBeaujolais = localeLower.includes('beaujolais') ||
        ['morgon', 'fleurie', 'moulin-à-vent', 'moulin a vent', 'brouilly', 'côte de brouilly', 'cote de brouilly', 'juliénas', 'julienas', 'régnié', 'regnie', 'saint-amour', 'saint amour', 'chiroubles', 'chénas', 'chenas']
          .some(cru => localeLower.includes(cru));

      if (isBeaujolais && country === 'France') {
        subregion = 'Beaujolais';
      }

      const cleanProducer = decodeEntities(wine.Producer || '');
      const cleanWine = decodeEntities(wine.Wine || '');
      const cleanDesignation = decodeEntities(wine.Designation || '');
      let vintage = wine.Vintage;
      if (vintage === '1001' || !vintage || vintage === '') {
        vintage = 'NV';
      }

      const wineKey = `${cleanProducer}|${cleanWine}|${vintage}`;
      const rowQty = parseInt(wine.Quantity || '1', 10) || 1;
      const binName = decodeEntities(wine.Bin || 'Unassigned');
      const locName = decodeEntities(wine.Location || 'Cellar');
      const iWine = wine.iWine || wine.WineID || wine.IWine || '';
      const iBottle = wine.iBottle || wine.BottleID || wine.IBottle || '';

      if (!grouped[mainType]) {
        grouped[mainType] = {};
      }
      if (!grouped[mainType][country]) {
        grouped[mainType][country] = {};
      }
      if (!grouped[mainType][country][subregion]) {
        grouped[mainType][country][subregion] = [];
      }

      const existingWine = grouped[mainType][country][subregion].find(w => w.wineKey === wineKey);

      if (existingWine) {
        existingWine.totalQuantity += rowQty;
        const existingBin = existingWine.bins.find(b => b.bin === binName && b.location === locName);
        if (existingBin) {
          existingBin.quantity += rowQty;
        } else {
          existingWine.bins.push({
            id: `${wineKey}-${locName}-${binName}-${existingWine.bins.length}`,
            location: locName,
            bin: binName,
            quantity: rowQty,
            iWine,
            iBottle
          });
        }
      } else {
        const newWineObj = {
          ...wine,
          wineKey,
          iWine,
          Producer: cleanProducer,
          Wine: cleanWine,
          Designation: cleanDesignation,
          Vintage: vintage,
          totalQuantity: rowQty,
          bins: [{
            id: `${wineKey}-${locName}-${binName}-0`,
            location: locName,
            bin: binName,
            quantity: rowQty,
            iWine,
            iBottle
          }]
        };
        grouped[mainType][country][subregion].push(newWineObj);
      }
    });

    const typeOrder = ['Sparkling', 'White', 'Red', 'Rosé', 'Dessert', 'Fortified', 'Other Wines'];
    const sortedGrouped = {};

    const sortHierarchy = (countriesObj) => {
      const countryPriority = {
        'France': 1, 'Italy': 2, 'USA': 3, 'Spain': 4, 'Germany': 5,
        'Austria': 6, 'Australia': 7, 'New Zealand': 8, 'Portugal': 9,
        'Argentina': 10, 'Chile': 11, 'South Africa': 12
      };

      const regionPriority = {
        'Champagne': 1, 'Burgundy': 2, 'Bordeaux': 3, 'Loire': 4,
        'Rhône': 5, 'Rhone': 5, 'Beaujolais': 6
      };

      const sortedCountries = {};
      Object.keys(countriesObj).sort((a, b) => {
        const priorityA = countryPriority[a] || 99;
        const priorityB = countryPriority[b] || 99;
        if (priorityA !== priorityB) return priorityA - priorityB;
        return a.localeCompare(b);
      }).forEach(country => {
        const sortedRegions = {};
        Object.keys(countriesObj[country]).sort((a, b) => {
          const priorityA = regionPriority[a] || 99;
          const priorityB = regionPriority[b] || 99;
          if (priorityA !== priorityB) return priorityA - priorityB;
          return a.localeCompare(b);
        }).forEach(region => {
          sortedRegions[region] = countriesObj[country][region].sort((a, b) => {
            const vA = a.Vintage === '1001' ? 'NV' : a.Vintage;
            const vB = b.Vintage === '1001' ? 'NV' : b.Vintage;
            if (vA === 'NV') return 1;
            if (vB === 'NV') return -1;
            return parseInt(vA) - parseInt(vB);
          });
        });
        sortedCountries[country] = sortedRegions;
      });
      return sortedCountries;
    };

    typeOrder.forEach(type => {
      if (grouped[type]) {
        sortedGrouped[type] = sortHierarchy(grouped[type]);
        delete grouped[type];
      }
    });

    Object.keys(grouped).sort().forEach(type => {
      sortedGrouped[type] = sortHierarchy(grouped[type]);
    });

    return sortedGrouped;
  };

  const locations = rawWines ? ['All', ...new Set(rawWines.map(w => w.Location).filter(Boolean))].sort() : [];

  const wines = React.useMemo(() => {
    if (!rawWines) return null;
    const filtered = activeTab === 'All' ? rawWines : rawWines.filter(w => w.Location === activeTab);
    return groupWines(filtered);
  }, [rawWines, activeTab]);

  const printMenu = () => {
    window.print();
  };

  // Swipe gesture handlers
  const handleTouchStart = (e, wine, remainingQty) => {
    if (e.target.closest('.undo-btn') || e.target.closest('.consumed-badge')) {
      return;
    }
    if (remainingQty <= 0) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    touchStartRef.current = {
      x: clientX,
      y: clientY,
      wineKey: wine.wineKey,
      isSwiping: false,
      wine
    };
  };

  const handleTouchMove = (e, wine) => {
    if (!touchStartRef.current.wineKey || touchStartRef.current.wineKey !== wine.wineKey) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - touchStartRef.current.x;
    const deltaY = clientY - touchStartRef.current.y;

    if (!touchStartRef.current.isSwiping) {
      if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 8) {
        touchStartRef.current.isSwiping = true;
      } else {
        return;
      }
    }

    if (deltaX > 0) {
      const clampedX = Math.min(deltaX, 150);
      setSwipeState({ key: wine.wineKey, deltaX: clampedX });
    }
  };

  const handleTouchEnd = (wine) => {
    if (!touchStartRef.current.wineKey || touchStartRef.current.wineKey !== wine.wineKey) return;

    if (swipeState.key === wine.wineKey && swipeState.deltaX > 60) {
      openConsumptionModal(wine);
    }

    setSwipeState({ key: null, deltaX: 0 });
    touchStartRef.current = { x: 0, y: 0, wineKey: null, isSwiping: false, wine: null };
  };

  const openConsumptionModal = (wine) => {
    const availableBins = wine.bins.filter(bin => {
      const consumedFromBin = consumedBins[wine.wineKey]?.[bin.id] || 0;
      return (bin.quantity - consumedFromBin) > 0;
    });

    const defaultBinId = availableBins.length > 0 ? availableBins[0].id : (wine.bins[0]?.id || '');
    setActiveModal({
      wine,
      availableBins,
      selectedBinId: defaultBinId
    });
  };

  const handleConfirmConsume = () => {
    if (!activeModal) return;
    const { wine, selectedBinId } = activeModal;
    const wineKey = wine.wineKey;
    const selectedBin = wine.bins.find(b => b.id === selectedBinId) || wine.bins[0];

    const newCounts = { ...consumedCounts, [wineKey]: (consumedCounts[wineKey] || 0) + 1 };
    const wineBinMap = consumedBins[wineKey] || {};
    const newBins = {
      ...consumedBins,
      [wineKey]: {
        ...wineBinMap,
        [selectedBinId]: (wineBinMap[selectedBinId] || 0) + 1
      }
    };

    setConsumedCounts(newCounts);
    setConsumedBins(newBins);
    localStorage.setItem('ct_consumed_counts', JSON.stringify(newCounts));
    localStorage.setItem('ct_consumed_bins', JSON.stringify(newBins));

    setActiveModal(null);

    const binLabel = selectedBin ? (selectedBin.bin !== 'Unassigned' ? selectedBin.bin : selectedBin.location) : 'Cellar';
    const targetIWine = selectedBin?.iWine || wine.iWine || '';

    showToast(`Logged 1 bottle of ${wine.Producer} ${wine.Wine} as consumed (${binLabel}).`, 'success', targetIWine);

    // Direct user to CellarTracker barcode.asp for this bottle in a new tab
    // This loads the exact bottle's action page with pre-filled details
    if (targetIWine) {
      try {
        const ctUrl = `https://www.cellartracker.com/barcode.asp?iWine=${encodeURIComponent(targetIWine)}`;
        window.open(ctUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        console.error('Error opening CellarTracker barcode page:', err);
      }
    }
  };

  const handleUndoConsume = (e, wineKey) => {
    e.stopPropagation();
    const currentCount = consumedCounts[wineKey] || 0;
    if (currentCount <= 0) return;

    const newCounts = { ...consumedCounts, [wineKey]: currentCount - 1 };
    if (newCounts[wineKey] === 0) delete newCounts[wineKey];

    const wineBinMap = { ...(consumedBins[wineKey] || {}) };
    const binKeys = Object.keys(wineBinMap);
    if (binKeys.length > 0) {
      const lastBinId = binKeys[binKeys.length - 1];
      wineBinMap[lastBinId] = Math.max(0, wineBinMap[lastBinId] - 1);
      if (wineBinMap[lastBinId] === 0) delete wineBinMap[lastBinId];
    }

    const newBins = { ...consumedBins, [wineKey]: wineBinMap };
    setConsumedCounts(newCounts);
    setConsumedBins(newBins);
    localStorage.setItem('ct_consumed_counts', JSON.stringify(newCounts));
    localStorage.setItem('ct_consumed_bins', JSON.stringify(newBins));

    showToast('Reverted 1 bottle consumption log.', 'info');
  };

  if (isLoadingDefault) {
    return (
      <div className="app-container">
        <div className="upload-container">
          <div className="upload-box" style={{ border: 'none', background: 'transparent' }}>
            <h3 style={{ color: 'var(--accent-gold)' }}>Loading your cellar...</h3>
          </div>
        </div>
      </div>
    );
  }

  if (rawWines) {
    return (
      <div className="app-container menu-view">
        <div 
          className="top-hover-trigger print-btn" 
          onMouseEnter={() => {
            if (!isForceClosed) setIsNavOpen(true);
          }}
        />

        <button
          className={`fab-menu-btn print-btn ${isNavOpen ? 'nav-open' : ''}`}
          onClick={(e) => {
            e.currentTarget.blur();
            if (isNavOpen) {
              setIsNavOpen(false);
              setIsForceClosed(true);
            } else {
              setIsNavOpen(true);
              setIsForceClosed(false);
            }
          }}
          aria-label="Toggle Menu Controls"
        >
          {isNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <header
          className={`top-nav-bar print-btn ${isNavOpen ? 'nav-open' : ''}`}
          onMouseEnter={() => {
            if (!isForceClosed) {
              setIsNavOpen(true);
            }
          }}
          onMouseLeave={() => {
            setIsNavOpen(false);
            setIsForceClosed(false);
          }}
        >
          <div className="top-nav-content">
            <div className="actions-bar">
              <button className="btn" onClick={(e) => { e.currentTarget.blur(); setIsNavOpen(false); setIsForceClosed(true); printMenu(); }}>
                <Printer size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} />
                Print Menu
              </button>
              <button className="btn" onClick={(e) => { e.currentTarget.blur(); setIsNavOpen(false); setIsForceClosed(true); handleLogout(); }}>
                <RefreshCw size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} />
                Disconnect / Upload New
              </button>
            </div>

            {locations.length > 1 && (
              <div className="tabs-container">
                {locations.map(loc => (
                  <button
                    key={loc}
                    className={`btn ${activeTab === loc ? 'active-tab' : ''}`}
                    onClick={(e) => {
                      e.currentTarget.blur();
                      setActiveTab(loc);
                    }}
                    style={{
                      backgroundColor: activeTab === loc ? 'var(--accent-gold)' : 'transparent',
                      color: activeTab === loc ? 'white' : 'var(--accent-dark-gold)'
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="menu-container">
          <table className="print-table">
            <thead><tr><td className="print-margin-spacer"></td></tr></thead>
            <tfoot><tr><td className="print-margin-spacer"></td></tr></tfoot>
            <tbody><tr><td style={{ padding: 0 }}>
              <header className="menu-header">
                <h1 className="menu-title">{username ? <><span style={{ fontFamily: "'Playfair Display SC', serif" }}>{username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()}</span>'s Wine List</> : 'Cellar'}</h1>
                <div className="menu-subtitle">{activeTab === 'All' ? 'A curated selection from the cellar' : `Wines from the ${activeTab}`}</div>
              </header>

              <div className="menu-content">
                {Object.entries(wines).map(([type, countries]) => (
                  <section key={type} className="wine-category">
                    <h2>{type}</h2>
                    {Object.entries(countries).map(([country, regions]) => (
                      <div key={country} className="country-section">
                        {Object.entries(regions).map(([region, categoryWines]) => (
                          <div key={region} className="region-section" style={{ marginBottom: '1.5rem' }}>
                            {region !== 'Other' ? (
                              <div className="region-label">
                                {region}
                              </div>
                            ) : (
                              <div className="region-label">
                                {country}
                              </div>
                            )}

                            <div className="wine-list">
                              {categoryWines.map((wine, idx) => {
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

                                const primaryText = producer || cleanName;
                                const secondaryText = producer ? (cleanName ? `${cleanName}, ${vintage}` : vintage) : vintage;

                                const getValidPrice = (...prices) => {
                                  for (const p of prices) {
                                    if (p && p !== '0' && p !== '0.00' && p !== '$0' && p !== '$0.00') {
                                      return p;
                                    }
                                  }
                                  return '';
                                };

                                const price = getValidPrice(wine.Value, wine.Valuation, wine.Price);
                                let displayPrice = price;
                                if (price && !isNaN(parseFloat(price.replace('$', '')))) {
                                  displayPrice = Math.round(parseFloat(price.replace('$', '')));
                                }

                                const consumedTotal = consumedCounts[wine.wineKey] || 0;
                                const remainingTotal = Math.max(0, wine.totalQuantity - consumedTotal);
                                const isSwipingThis = swipeState.key === wine.wineKey;
                                const currentTranslateX = isSwipingThis ? swipeState.deltaX : 0;

                                return (
                                  <div 
                                    key={idx} 
                                    className="wine-item-wrapper"
                                    onTouchStart={(e) => handleTouchStart(e, wine, remainingTotal)}
                                    onTouchMove={(e) => handleTouchMove(e, wine)}
                                    onTouchEnd={() => handleTouchEnd(wine)}
                                    onMouseDown={(e) => handleTouchStart(e, wine, remainingTotal)}
                                    onMouseMove={(e) => handleTouchMove(e, wine)}
                                    onMouseUp={() => handleTouchEnd(wine)}
                                    onMouseLeave={() => handleTouchEnd(wine)}
                                  >
                                    <div 
                                      className="swipe-action-bg"
                                      style={{ opacity: currentTranslateX > 15 ? 1 : 0 }}
                                    >
                                      <Wine size={18} className="wine-swipe-icon" />
                                      <span>Log 1 Bottle</span>
                                    </div>

                                    <div 
                                      className={`wine-item ${consumedTotal > 0 ? 'has-consumed' : ''}`}
                                      style={{
                                        transform: `translateX(${currentTranslateX}px)`,
                                        transition: isSwipingThis ? 'none' : 'transform 0.25s ease-out'
                                      }}
                                    >
                                      <div className="wine-info">
                                        <span className="producer">{primaryText}</span>
                                        <span className="vintage-region">
                                          {secondaryText}
                                          {consumedTotal > 0 && (
                                            <span 
                                              className="consumed-badge" 
                                              title="Bottles opened tonight"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleUndoConsume(e, wine.wineKey);
                                              }}
                                            >
                                              <Wine size={12} style={{ display: 'inline', marginRight: '3px', pointerEvents: 'none' }} />
                                              {consumedTotal} Opened
                                              <button 
                                                type="button"
                                                className="undo-btn" 
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  handleUndoConsume(e, wine.wineKey);
                                                }}
                                                title="Undo 1 bottle consumption"
                                              >
                                                <Undo2 size={13} style={{ pointerEvents: 'none' }} />
                                              </button>
                                            </span>
                                          )}
                                        </span>
                                      </div>
                                      {displayPrice && (
                                        <div className="price">{displayPrice}</div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </section>
                ))}
              </div>
            </td></tr></tbody>
          </table>
        </div>

        {/* Confirmation Modal */}
        {activeModal && (
          <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <Wine size={24} className="modal-header-icon" />
                <h3>Wine Service Confirmation</h3>
              </div>

              <div className="modal-body">
                <h4 className="modal-wine-producer">{activeModal.wine.Producer}</h4>
                <p className="modal-wine-title">{activeModal.wine.Wine} ({activeModal.wine.Vintage})</p>

                <div className="quantity-notice-box">
                  <span className="qty-highlight">Deducting exactly 1 bottle</span>
                  <span className="qty-remaining">
                    ({Math.max(0, activeModal.wine.totalQuantity - (consumedCounts[activeModal.wine.wineKey] || 0))} bottle{Math.max(0, activeModal.wine.totalQuantity - (consumedCounts[activeModal.wine.wineKey] || 0)) === 1 ? '' : 's'} remaining in cellar)
                  </span>
                </div>

                {activeModal.availableBins && activeModal.availableBins.length > 0 && (
                  <div className="bin-selector-section">
                    <label className="bin-label">
                      <MapPin size={14} style={{ display: 'inline', marginRight: '5px' }} />
                      Cellar Location & Bin:
                    </label>
                    <select
                      className="bin-select-dropdown"
                      value={activeModal.selectedBinId}
                      onChange={(e) => setActiveModal({ ...activeModal, selectedBinId: e.target.value })}
                    >
                      {activeModal.availableBins.map(bin => {
                        const consumedFromBin = consumedBins[activeModal.wine.wineKey]?.[bin.id] || 0;
                        const binLeft = bin.quantity - consumedFromBin;
                        const binDisplay = bin.bin !== 'Unassigned' ? `${bin.location} — Bin ${bin.bin}` : bin.location;
                        return (
                          <option key={bin.id} value={bin.id}>
                            {binDisplay} ({binLeft} available)
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}

                <p className="modal-confirm-question">
                  Would you like to log 1 bottle of this selection as opened for tonight's service?
                </p>

                {(activeModal.wine.iWine || (activeModal.availableBins[0] && activeModal.availableBins[0].iWine)) && (
                  <div style={{ marginBottom: '1.2rem', textAlign: 'center' }}>
                    <a
                      href={`https://www.cellartracker.com/wine.asp?iWine=${activeModal.wine.iWine || activeModal.availableBins[0].iWine}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ct-direct-link"
                    >
                      <ExternalLink size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} />
                      View wine details on CellarTracker.com
                    </a>
                  </div>
                )}
              </div>

              <div className="modal-actions">
                <button className="modal-btn confirm-btn" onClick={handleConfirmConsume}>
                  <Check size={16} style={{ marginRight: '6px' }} />
                  Confirm & Log 1 Bottle
                </button>
                <button className="modal-btn cancel-btn" onClick={() => setActiveModal(null)}>
                  Return to Menu
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {toast && (
          <div className={`toast-notification ${toast.type}`}>
            <CheckCircle2 size={18} className="toast-icon" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span>{toast.message}</span>
              {toast.iWine && (
                <a
                  href={`https://www.cellartracker.com/wine.asp?iWine=${toast.iWine}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  View wine on CellarTracker.com <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="upload-container">
        <h1 className="upload-title">CellarTracker</h1>
        <p className="upload-subtitle">
          Connect your CellarTracker account or upload a CSV export to instantly generate a Restaurant Style Wine List.
        </p>

        <div className="login-section" style={{ marginBottom: '2rem', textAlign: 'left', width: '100%', maxWidth: '400px', margin: '0 auto 2rem auto' }}>
          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ margin: 0, color: 'var(--text-main)', textAlign: 'center' }}>Connect Account</h3>
            <input
              type="text"
              placeholder="CellarTracker Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="btn login-btn" style={{ width: '100%', justifyContent: 'center' }}>
              Fetch Cellar
            </button>
          </form>
        </div>

        <div className="divider" style={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
          <div style={{ flex: 1, borderBottom: '1px solid var(--border-color)' }}></div>
          <span style={{ padding: '0 10px', fontSize: '0.9rem', letterSpacing: '0.05em' }}>OR</span>
          <div style={{ flex: 1, borderBottom: '1px solid var(--border-color)' }}></div>
        </div>

        <div
          className="upload-box"
          onDragOver={(e) => { e.preventDefault(); setIsHovering(true); }}
          onDragLeave={() => setIsHovering(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
          style={{ borderColor: isHovering ? 'var(--accent-burgundy)' : 'var(--accent-gold)' }}
        >
          <UploadCloud className="upload-icon" />
          <h3>Drag and drop your CSV file here</h3>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>or click to browse</p>
          <input
            type="file"
            accept=".csv"
            className="upload-input"
            ref={fileInputRef}
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
