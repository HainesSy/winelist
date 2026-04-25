import React, { useState, useRef, useEffect } from 'react';
import Papa from 'papaparse';
import { UploadCloud, Printer, RefreshCw } from 'lucide-react';
import './App.css';

function App() {
  const [rawWines, setRawWines] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [isHovering, setIsHovering] = useState(false);
  const [isLoadingDefault, setIsLoadingDefault] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const fileInputRef = useRef(null);

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
              setRawWines(validWines);
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
        alert("Failed to connect to CellarTracker. Server responded with an error.");
        setIsLoadingDefault(false);
      }
    } catch (error) {
      console.log("Error fetching from CellarTracker proxy:", error);
      alert("Error connecting to CellarTracker. Make sure the Vite development server is running.");
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
      // Group first by Type (Red, White, etc.), then by Country, then Region
      let mainType = decodeEntities(wine.Type || wine.Color || 'Other Wines');

      // Ensure Champagne and Sparkling wines are properly categorized even if their color is 'White' or 'Rosé'
      const searchName = (wine.Wine || '').toLowerCase();
      const searchType = (wine.Type || '').toLowerCase();
      if (searchName.includes('champagne') || searchName.includes('sparkling') || searchType.includes('sparkling')) {
        mainType = 'Sparkling';
      }

      let country = 'Other';
      let subregion = 'Other';

      // CellarTracker uses 'Locale' formatted as "Country, Region, Subregion"
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

      // Separate Beaujolais (and its Crus) from the broader Burgundy region
      const localeLower = (wine.Locale || wine.Region || '').toLowerCase();
      const isBeaujolais = localeLower.includes('beaujolais') ||
        ['morgon', 'fleurie', 'moulin-à-vent', 'moulin a vent', 'brouilly', 'côte de brouilly', 'cote de brouilly', 'juliénas', 'julienas', 'régnié', 'regnie', 'saint-amour', 'saint amour', 'chiroubles', 'chénas', 'chenas']
          .some(cru => localeLower.includes(cru));

      if (isBeaujolais && country === 'France') {
        subregion = 'Beaujolais';
      }

      // Also pre-decode the wine name and producer to avoid doing it on every render
      wine.Wine = decodeEntities(wine.Wine);
      wine.Designation = decodeEntities(wine.Designation);
      wine.Producer = decodeEntities(wine.Producer);

      // Handle Non-Vintage (CellarTracker uses 1001 for NV)
      if (wine.Vintage === '1001' || !wine.Vintage || wine.Vintage === '') {
        wine.Vintage = 'NV';
      }

      if (!grouped[mainType]) {
        grouped[mainType] = {};
      }
      if (!grouped[mainType][country]) {
        grouped[mainType][country] = {};
      }
      if (!grouped[mainType][country][subregion]) {
        grouped[mainType][country][subregion] = [];
      }

      const uniqueKey = `${wine.Producer}|${wine.Wine}|${wine.Vintage}`;
      const existingWine = grouped[mainType][country][subregion].find(w => `${w.Producer}|${w.Wine}|${w.Vintage}` === uniqueKey);

      if (!existingWine) {
        grouped[mainType][country][subregion].push(wine);
      }
    });

    // Define a custom order for wine types based on user preference
    const typeOrder = ['Sparkling', 'White', 'Red', 'Rosé', 'Dessert', 'Fortified', 'Other Wines'];

    const sortedGrouped = {};

    // Helper to sort countries and their regions
    const sortHierarchy = (countriesObj) => {
      const countryPriority = {
        'France': 1,
        'Italy': 2,
        'USA': 3,
        'Spain': 4,
        'Germany': 5,
        'Austria': 6,
        'Australia': 7,
        'New Zealand': 8,
        'Portugal': 9,
        'Argentina': 10,
        'Chile': 11,
        'South Africa': 12
      };

      const regionPriority = {
        'Champagne': 1,
        'Burgundy': 2,
        'Bordeaux': 3,
        'Loire': 4,
        'Rhône': 5,
        'Rhone': 5,
        'Beaujolais': 6
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
          // Sort wines within region by Vintage
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

    // First, add types in our custom order if they exist
    typeOrder.forEach(type => {
      if (grouped[type]) {
        sortedGrouped[type] = sortHierarchy(grouped[type]);
        delete grouped[type];
      }
    });

    // Then add any remaining types
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

  const resetData = () => {
    setRawWines(null);
    setActiveTab('All');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const printMenu = () => {
    window.print();
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
        <div className="actions-bar print-btn" style={{ marginTop: '2rem' }}>
          <button className="btn" onClick={printMenu}>
            <Printer size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} />
            Print Menu
          </button>
          <button className="btn" onClick={handleLogout}>
            <RefreshCw size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} />
            Disconnect / Upload New
          </button>
        </div>

        {locations.length > 1 && (
          <div className="tabs-container print-btn" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {locations.map(loc => (
              <button
                key={loc}
                className={`btn ${activeTab === loc ? 'active-tab' : ''}`}
                onClick={() => setActiveTab(loc)}
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

        <div className="menu-container">
          <table className="print-table">
            <thead><tr><td className="print-margin-spacer"></td></tr></thead>
            <tfoot><tr><td className="print-margin-spacer"></td></tr></tfoot>
            <tbody><tr><td style={{ padding: 0 }}>
              <header className="menu-header">
                <h1 className="menu-title">{username ? <><span style={{ fontFamily: "'Playfair Display SC', serif" }}>{username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()}</span>'s Wine List</> : 'Grand Cru Reserve'}</h1>
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
                                const name = wine.Wine || wine.Designation || 'Unknown Wine';
                                const producer = wine.Producer || '';

                                // Helper to get the first valid, non-zero price
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

                                const primaryText = producer || name;
                                const secondaryText = producer ? `${name}, ${vintage}` : vintage;

                                return (
                                  <div key={idx} className="wine-item">
                                    <div className="wine-info">
                                      <span className="producer">{primaryText}</span>
                                      <span className="vintage-region">{secondaryText}</span>
                                    </div>
                                    {displayPrice && (
                                      <div className="price">{displayPrice}</div>
                                    )}
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
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="upload-container">
        <h1 className="upload-title">CellarTracker</h1>
        <p className="upload-subtitle">
          Connect your CellarTracker account or upload a CSV export to instantly generate a 3 Michelin star wine list.
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
