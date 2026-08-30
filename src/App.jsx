import React, { useState, useRef, useEffect } from 'react';
import Papa from 'papaparse';
import { 
  UploadCloud, 
  Printer, 
  RefreshCw, 
  Menu, 
  X, 
  Wine, 
  CheckCircle2, 
  MapPin, 
  Undo2, 
  Check, 
  ExternalLink,
  Clock,
  AlertCircle,
  Trash2,
  ListOrdered,
  CheckSquare,
  Sparkles,
  Send,
  Calendar,
  Layers,
  Copy,
  CheckCheck,
  Play,
  Forward,
  Share2,
  Compass,
  ChevronRight
} from 'lucide-react';
import WineRegionDetail from './components/WineRegionDetail';
import { findWineRegion } from './data/wineRegions';
import './App.css';

function App() {
  const [rawWines, setRawWines] = useState(null);
  const [activeTab, setActiveTab] = useState('Cellar');
  const [isHovering, setIsHovering] = useState(false);
  const [isLoadingDefault, setIsLoadingDefault] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isForceClosed, setIsForceClosed] = useState(false);
  const [isServiceTrayOpen, setIsServiceTrayOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null); // { id, name, country }
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

  // Detailed consumption history logs for two-way sync
  const [consumptionHistory, setConsumptionHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ct_consumption_history') || '[]');
    } catch {
      return [];
    }
  });

  const [toast, setToast] = useState(null); // { message, type, ctUrl, linkText }
  const [swipeState, setSwipeState] = useState({ key: null, deltaX: 0 });
  const touchStartRef = useRef({ x: 0, y: 0, wineKey: null, isSwiping: false, wine: null });

  const showToast = (message, type = 'info', ctUrl = null, linkText = 'Open on CellarTracker') => {
    setToast({ message, type, ctUrl, linkText });
    setTimeout(() => {
      setToast(null);
    }, 7000);
  };

  const getCellarTrackerActionUrl = (iWine, iBottle, action = 'Drink', fallbackQuery = '') => {
    const cleanBottle = iBottle ? String(iBottle).trim() : '';
    const cleanWine = iWine ? String(iWine).trim() : '';

    // If it's a barcode (like 0224178017 or has leading zeros / barcode string), search by barcode
    if (cleanBottle && cleanBottle !== '0') {
      return `https://www.cellartracker.com/search.asp?S=${encodeURIComponent(cleanBottle)}`;
    }
    // If master wine ID is available
    if (cleanWine && cleanWine !== '0') {
      return `https://www.cellartracker.com/wine.asp?iWine=${encodeURIComponent(cleanWine)}`;
    }
    // If wine name query is available
    if (fallbackQuery && fallbackQuery.trim()) {
      return `https://www.cellartracker.com/search.asp?S=${encodeURIComponent(fallbackQuery.trim())}&QTable=AllWines`;
    }
    return `https://www.cellartracker.com/list.asp?Table=Inventory`;
  };

  const fetchFromCellarTracker = async (user, pass, options = {}) => {
    const { isReconcile = false, silent = false } = options;
    if (!user || !pass) {
      if (!silent && isReconcile) {
        showToast("No connected CellarTracker credentials found. Using local cellar data.", "info");
      }
      setIsLoadingDefault(false);
      setIsRefreshing(false);
      return;
    }

    if (!silent) {
      if (isReconcile) setIsRefreshing(true);
      else setIsLoadingDefault(true);
    }

    try {
      const url = `/api/cellartracker/xlquery.asp?User=${encodeURIComponent(user)}&Password=${encodeURIComponent(pass)}&Format=csv&Table=Inventory`;
      const response = await fetch(url);

      if (response.ok) {
        const blob = await response.blob();
        const textCheck = await blob.slice(0, 1000).text();
        if (textCheck.toLowerCase().includes('<!doctype html>') || textCheck.toLowerCase().includes('<html')) {
          console.log("Failed to fetch or invalid credentials (HTML returned)");
          if (!silent) {
            showToast("Failed to connect to CellarTracker. Please check your credentials.", "error");
          }
          setIsLoadingDefault(false);
          setIsRefreshing(false);
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

              // Auto-reconciliation: Fresh inventory from CellarTracker loaded
              if (isReconcile && consumptionHistory.length > 0) {
                const updatedHistory = consumptionHistory.map(item => ({ ...item, synced: true }));
                setConsumptionHistory(updatedHistory);
                setConsumedCounts({});
                setConsumedBins({});
                localStorage.setItem('ct_consumption_history', JSON.stringify(updatedHistory));
                localStorage.setItem('ct_consumed_counts', JSON.stringify({}));
                localStorage.setItem('ct_consumed_bins', JSON.stringify({}));
                syncStateWithServer(updatedHistory, {}, {});
                showToast("Cellar synchronized! Fresh inventory loaded from CellarTracker.", "success");
              } else if (isReconcile) {
                setConsumedCounts({});
                setConsumedBins({});
                localStorage.setItem('ct_consumed_counts', JSON.stringify({}));
                localStorage.setItem('ct_consumed_bins', JSON.stringify({}));
                syncStateWithServer(consumptionHistory, {}, {});
                showToast("Cellar refreshed from CellarTracker.", "info");
              }
            } else {
              if (!silent) showToast("No wines found in your cellar, or format invalid.", "error");
            }
            setIsLoadingDefault(false);
            setIsRefreshing(false);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
            if (!silent) showToast("Failed to parse CSV file from CellarTracker.", "error");
            setIsLoadingDefault(false);
            setIsRefreshing(false);
          }
        });
      } else {
        if (!silent) showToast(`Server error ${response.status}: ${response.statusText}`, "error");
        setIsLoadingDefault(false);
        setIsRefreshing(false);
      }
    } catch (error) {
      console.log("Error fetching from CellarTracker proxy:", error);
      if (!silent) showToast(`Error connecting to CellarTracker: ${error.message || "Network issue"}`, "error");
      setIsLoadingDefault(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('ct_user');
    const savedPass = localStorage.getItem('ct_pass');

    if (savedUser && savedPass) {
      setUsername(savedUser);
      setPassword(savedPass);
      fetchFromCellarTracker(savedUser, savedPass);
    } else {
      // Auto-load default cellar sample CSV if available
      fetch('/My Cellar.csv')
        .then(res => {
          if (res.ok) return res.text();
          throw new Error('No default CSV');
        })
        .then(csvText => {
          Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
              const parsedWines = results.data;
              const validWines = parsedWines.filter(w => w.Wine || w.Vintage);
              if (validWines.length > 0) {
                setRawWines(validWines);
              }
              setIsLoadingDefault(false);
            },
            error: () => setIsLoadingDefault(false)
          });
        })
        .catch(() => {
          setIsLoadingDefault(false);
        });
    }
  }, []);

  // Hash-based region navigation listener (e.g. #region=champagne or #region=burgundy)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#region=')) {
        const slug = decodeURIComponent(hash.replace('#region=', '')).trim();
        if (slug) {
          const matched = findWineRegion(slug);
          if (matched) {
            setSelectedRegion({ id: matched.id, name: matched.name, country: matched.country });
          } else {
            setSelectedRegion({ id: slug, name: slug, country: '' });
          }
        }
      } else if (!hash || hash === '#' || hash === '#menu') {
        setSelectedRegion(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToRegion = (regionName, countryName = '') => {
    const matched = findWineRegion(regionName, countryName);
    const regionId = matched ? matched.id : regionName.toLowerCase().replace(/\s+/g, '-');
    setSelectedRegion({
      id: regionId,
      name: matched ? matched.name : regionName,
      country: matched ? matched.country : countryName
    });
    window.location.hash = `#region=${encodeURIComponent(regionId)}`;
  };

  const handleBackToMenu = () => {
    setSelectedRegion(null);
    window.location.hash = '';
  };

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
    setSelectedRegion(null);
    window.location.hash = '';
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
      encoding: "ISO-8859-1",
      complete: (results) => {
        const parsedWines = results.data;
        const validWines = parsedWines.filter(w => w.Wine || w.Vintage);
        if (validWines.length > 0) {
          setRawWines(validWines);
          showToast(`Loaded ${validWines.length} wines from CSV export.`, "success");
        } else {
          showToast("No wines found in uploaded CSV.", "error");
        }
        setIsLoadingDefault(false);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
        showToast("Failed to parse CSV file. Make sure it is a valid CellarTracker export.", "error");
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
      const iBottle = wine.iBottle || wine.BottleID || wine.IBottle || wine.Barcode || '';

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
          if (iBottle && !existingBin.iBottle) existingBin.iBottle = iBottle;
          if (iBottle) {
            existingBin.bottleIds = existingBin.bottleIds || [];
            existingBin.bottleIds.push(iBottle);
          }
        } else {
          existingWine.bins.push({
            id: `${wineKey}-${locName}-${binName}-${existingWine.bins.length}`,
            location: locName,
            bin: binName,
            quantity: rowQty,
            iWine,
            iBottle,
            bottleIds: iBottle ? [iBottle] : []
          });
        }
      } else {
        const newWineObj = {
          ...wine,
          wineKey,
          iWine,
          iBottle,
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
            iBottle,
            bottleIds: iBottle ? [iBottle] : []
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

  const locations = React.useMemo(() => {
    if (!rawWines) return [];
    const distinct = Array.from(new Set(rawWines.map(w => w.Location).filter(Boolean))).sort();
    if (distinct.length === 0) return ['All'];
    if (distinct.length === 1) return distinct;
    const hasCellar = distinct.includes('Cellar');
    const otherLocs = distinct.filter(l => l !== 'Cellar');
    return hasCellar ? ['Cellar', ...otherLocs, 'All'] : [...distinct, 'All'];
  }, [rawWines]);

  const wines = React.useMemo(() => {
    if (!rawWines) return null;
    if (activeTab === 'All') return groupWines(rawWines);
    const filtered = rawWines.filter(w => (w.Location || 'Cellar') === activeTab);
    return groupWines(filtered.length > 0 ? filtered : rawWines);
  }, [rawWines, activeTab]);

  const printMenu = () => {
    window.print();
  };

  // Server-synchronized shared service state
  const syncStateWithServer = async (history, counts, bins) => {
    try {
      await fetch('/api/service-state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history, counts, bins })
      });
    } catch (err) {
      // Silent in offline / standalone mode
    }
  };

  const loadStateFromServer = async () => {
    try {
      const res = await fetch('/api/service-state');
      if (res.ok) {
        const data = await res.json();
        if (data && data.history !== undefined) {
          setConsumptionHistory(data.history || []);
          setConsumedCounts(data.counts || {});
          setConsumedBins(data.bins || {});
          localStorage.setItem('ct_consumption_history', JSON.stringify(data.history || []));
          localStorage.setItem('ct_consumed_counts', JSON.stringify(data.counts || {}));
          localStorage.setItem('ct_consumed_bins', JSON.stringify(data.bins || {}));
        }
      }
    } catch (err) {
      // Uses local storage fallback
    }
  };

  useEffect(() => {
    loadStateFromServer();
    const interval = setInterval(loadStateFromServer, 3000);
    const handleFocus = () => loadStateFromServer();
    window.addEventListener('focus', handleFocus);
    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

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

    // Instant 1-Swipe Consumption: No confirmation modal required
    if (swipeState.key === wine.wineKey && swipeState.deltaX > 55) {
      executeInstantConsume(wine);
    }

    setSwipeState({ key: null, deltaX: 0 });
    touchStartRef.current = { x: 0, y: 0, wineKey: null, isSwiping: false, wine: null };
  };

  const executeInstantConsume = (wine) => {
    const wineKey = wine.wineKey;
    const availableBins = wine.bins.filter(bin => {
      const consumedFromBin = consumedBins[wineKey]?.[bin.id] || 0;
      return (bin.quantity - consumedFromBin) > 0;
    });

    const selectedBin = availableBins.length > 0 ? availableBins[0] : wine.bins[0];
    const selectedBinId = selectedBin?.id || '';

    const newCounts = { ...consumedCounts, [wineKey]: (consumedCounts[wineKey] || 0) + 1 };
    const wineBinMap = consumedBins[wineKey] || {};
    const newBins = {
      ...consumedBins,
      [wineKey]: {
        ...wineBinMap,
        [selectedBinId]: (wineBinMap[selectedBinId] || 0) + 1
      }
    };

    const targetIWine = selectedBin?.iWine || wine.iWine || wine.WineID || wine.IWine || wine['Wine ID'] || '';
    const targetIBottle = selectedBin?.iBottle || wine.iBottle || wine.BottleID || wine.IBottle || wine['Bottle ID'] || wine.Barcode || wine.barcode || '';
    const fallbackQuery = `${wine.Producer} ${wine.Wine} ${wine.Vintage !== 'NV' ? wine.Vintage : ''}`.trim();
    const ctActionUrl = getCellarTrackerActionUrl(targetIWine, targetIBottle, 'Drink', fallbackQuery);

    const newHistoryItem = {
      id: 'log_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      timestamp: Date.now(),
      timeStr: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      dateStr: new Date().toISOString().split('T')[0],
      wineKey,
      producer: wine.Producer,
      wine: wine.Wine,
      vintage: wine.Vintage,
      location: selectedBin ? selectedBin.location : 'Cellar',
      bin: selectedBin ? selectedBin.bin : 'Unassigned',
      binId: selectedBinId,
      iWine: targetIWine,
      iBottle: targetIBottle,
      barcode: targetIBottle || targetIWine || '',
      reason: 'Drink',
      reasonLabel: 'Drank from my cellar',
      note: '',
      ctUrl: ctActionUrl,
      synced: false
    };

    const updatedHistory = [newHistoryItem, ...consumptionHistory];

    setConsumedCounts(newCounts);
    setConsumedBins(newBins);
    setConsumptionHistory(updatedHistory);
    localStorage.setItem('ct_consumed_counts', JSON.stringify(newCounts));
    localStorage.setItem('ct_consumed_bins', JSON.stringify(newBins));
    localStorage.setItem('ct_consumption_history', JSON.stringify(updatedHistory));

    // Sync across iPad and Computer
    syncStateWithServer(updatedHistory, newCounts, newBins);

    const binLabel = selectedBin ? (selectedBin.bin !== 'Unassigned' ? selectedBin.bin : selectedBin.location) : 'Cellar';
    showToast(`🍷 Opened 1 bottle of ${wine.Producer} ${wine.Wine} (${binLabel}). Added to Service Tray.`, 'success');
  };

  const handleBulkSyncOnCellarTracker = () => {
    const pendingItems = consumptionHistory.filter(h => !h.synced);
    const targetItems = pendingItems.length > 0 ? pendingItems : consumptionHistory;
    const codes = targetItems.map(item => item.iBottle || item.barcode || item.iWine).filter(Boolean);

    if (codes.length === 0) {
      showToast("No opened bottles in Service Tray to sync.", "info");
      return;
    }

    // 1. Open CellarTracker's direct validated scan list with all opened bottles
    const scanUrl = `https://www.cellartracker.com/list.asp?Table=Scan&Validate=true&iInventoryList=${encodeURIComponent(codes.join(','))}`;

    try {
      window.open(scanUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error('Error opening CellarTracker scan list:', err);
    }

    // 2. Auto-mark as synced
    const updated = consumptionHistory.map(h => ({ ...h, synced: true }));
    setConsumptionHistory(updated);
    localStorage.setItem('ct_consumption_history', JSON.stringify(updated));
    syncStateWithServer(updated, consumedCounts, consumedBins);

    showToast(`🍷 Opened ${codes.length} bottle(s) on CellarTracker!`, 'success');
  };

  const handleCopyBarcodeList = () => {
    const pendingItems = consumptionHistory.filter(h => !h.synced);
    const targetItems = pendingItems.length > 0 ? pendingItems : consumptionHistory;
    const codes = targetItems.map(item => `${item.producer} ${item.wine} (${item.vintage}) [${item.bin !== 'Unassigned' ? item.bin : item.location}]: ${item.iBottle || item.iWine || item.barcode || 'No ID'}`);
    if (codes.length > 0 && navigator.clipboard) {
      navigator.clipboard.writeText(codes.join('\n'));
      showToast(`📋 Copied list of ${codes.length} bottle(s) to clipboard.`, 'info');
    }
  };

  const markAllAsSynced = () => {
    const updated = consumptionHistory.map(h => ({ ...h, synced: true }));
    setConsumptionHistory(updated);
    localStorage.setItem('ct_consumption_history', JSON.stringify(updated));
    syncStateWithServer(updated, consumedCounts, consumedBins);
    showToast("All bottles marked as synced with CellarTracker.", "success");
  };

  const handleUndoConsume = (e, wineKey, historyId = null) => {
    if (e) e.stopPropagation();
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

    let updatedHistory;
    if (historyId) {
      updatedHistory = consumptionHistory.filter(h => h.id !== historyId);
    } else {
      const idx = consumptionHistory.findIndex(h => h.wineKey === wineKey);
      if (idx !== -1) {
        updatedHistory = [...consumptionHistory];
        updatedHistory.splice(idx, 1);
      } else {
        updatedHistory = consumptionHistory;
      }
    }
    setConsumptionHistory(updatedHistory);
    localStorage.setItem('ct_consumption_history', JSON.stringify(updatedHistory));

    // Sync across iPad and Computer
    syncStateWithServer(updatedHistory, newCounts, newBins);

    showToast('Reverted 1 bottle consumption log.', 'info');
  };

  const clearServiceHistory = async () => {
    if (window.confirm("Are you sure you want to clear all logged consumption history and reset bottle counts?")) {
      setConsumptionHistory([]);
      setConsumedCounts({});
      setConsumedBins({});
      localStorage.removeItem('ct_consumption_history');
      localStorage.removeItem('ct_consumed_counts');
      localStorage.removeItem('ct_consumed_bins');

      try {
        await fetch('/api/service-state', { method: 'DELETE' });
      } catch (err) {}

      showToast("Service log and opened bottle counts cleared across all devices.", "info");
    }
  };

  const totalConsumed = Object.values(consumedCounts).reduce((a, b) => a + b, 0);
  const pendingSyncCount = consumptionHistory.filter(h => !h.synced).length;

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
                <Printer size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                Print Menu
              </button>

              {/* Contextual Unified Sync & Service Tray Button */}
              {pendingSyncCount > 0 ? (
                <button 
                  className="btn service-tray-btn has-pending" 
                  onClick={(e) => { 
                    e.currentTarget.blur(); 
                    setIsNavOpen(false); 
                    setIsForceClosed(true); 
                    setIsServiceTrayOpen(true); 
                  }}
                  title="Review pending bottles and update CellarTracker"
                >
                  <Wine size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                  Service Tray ({pendingSyncCount})
                  <span className="pending-indicator-dot" title={`${pendingSyncCount} pending CellarTracker update`} />
                </button>
              ) : (
                <button 
                  className="btn" 
                  onClick={(e) => { 
                    e.currentTarget.blur(); 
                    if (username && password) {
                      fetchFromCellarTracker(username, password, { isReconcile: true });
                    } else if (consumptionHistory.length > 0) {
                      setIsServiceTrayOpen(true);
                    } else {
                      showToast("No pending items. Cellar is up to date!", "info");
                    }
                  }}
                  disabled={isRefreshing}
                  title="Re-sync cellar inventory from CellarTracker"
                >
                  <RefreshCw size={16} className={isRefreshing ? 'spin-icon' : ''} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                  {isRefreshing ? 'Re-syncing...' : 'Re-sync Cellar'}
                </button>
              )}

              <button className="btn" onClick={(e) => { e.currentTarget.blur(); setIsNavOpen(false); setIsForceClosed(true); handleLogout(); }}>
                <Layers size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                Disconnect / Upload
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

        {selectedRegion ? (
          <WineRegionDetail
            key={selectedRegion.id}
            regionId={selectedRegion.id}
            regionName={selectedRegion.name}
            countryName={selectedRegion.country}
            rawWines={rawWines || []}
            onBack={handleBackToMenu}
            onSelectRegion={(newRegId) => {
              const matched = findWineRegion(newRegId);
              setSelectedRegion({
                id: newRegId,
                name: matched ? matched.name : newRegId,
                country: matched ? matched.country : ''
              });
              window.location.hash = `#region=${encodeURIComponent(newRegId)}`;
            }}
            onConsumeBottle={executeInstantConsume}
            consumedCounts={consumedCounts}
            getCellarTrackerActionUrl={getCellarTrackerActionUrl}
          />
        ) : (
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
                              <button 
                                type="button"
                                className="region-label region-clickable-label"
                                onClick={() => navigateToRegion(region, country)}
                                title={`View ${region} region & map`}
                              >
                                {region}
                              </button>
                            ) : (
                              <button 
                                type="button"
                                className="region-label region-clickable-label"
                                onClick={() => navigateToRegion(country, country)}
                                title={`View ${country} region & map`}
                              >
                                {country}
                              </button>
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

                                const consumedTotal = consumptionHistory.filter(h => h.wineKey === wine.wineKey && !h.synced).length;
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
                                              title="Bottles opened tonight (Click to undo)"
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
        )}

        {/* Service Tray & Sync Drawer */}
        {isServiceTrayOpen && (
          <div className="modal-backdrop" onClick={() => setIsServiceTrayOpen(false)}>
            <div className="service-tray-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="service-tray-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Wine size={22} className="modal-header-icon" />
                  <div>
                    <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>Service Tray & Cellar Sync</h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Track bottles opened during tonight's service and synchronize with CellarTracker.com
                    </p>
                  </div>
                </div>
                <button className="close-tray-btn" onClick={() => setIsServiceTrayOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="service-tray-stats">
                <div className="stat-card">
                  <span className="stat-value">{consumptionHistory.length}</span>
                  <span className="stat-label">Total Opened</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value" style={{ color: '#2e7d32' }}>
                    {consumptionHistory.filter(h => h.synced).length}
                  </span>
                  <span className="stat-label">Synced to CT</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value" style={{ color: pendingSyncCount > 0 ? '#b8860b' : 'var(--text-muted)' }}>
                    {pendingSyncCount}
                  </span>
                  <span className="stat-label">Pending Sync</span>
                </div>
              </div>

              <div className="service-tray-toolbar">
                {pendingSyncCount > 0 && (
                  <button 
                    className="tray-action-btn primary" 
                    onClick={handleBulkSyncOnCellarTracker}
                    title="Open CellarTracker with all opened bottles ready to consume"
                  >
                    <ExternalLink size={14} style={{ marginRight: '5px' }} />
                    Bulk Sync on CellarTracker ({pendingSyncCount}) ↗
                  </button>
                )}
                {username && (
                  <button 
                    className="tray-action-btn" 
                    onClick={() => fetchFromCellarTracker(username, password, { isReconcile: true })}
                    disabled={isRefreshing}
                    title="Pull fresh cellar inventory from CellarTracker"
                  >
                    <RefreshCw size={14} className={isRefreshing ? 'spin-icon' : ''} style={{ marginRight: '5px' }} />
                    {isRefreshing ? 'Re-syncing...' : 'Re-sync Cellar ⟳'}
                  </button>
                )}
                {consumptionHistory.length > 0 && (
                  <button className="tray-action-btn danger" onClick={clearServiceHistory} title="Clear all local service history">
                    <Trash2 size={14} style={{ marginRight: '5px' }} />
                    Clear History
                  </button>
                )}
              </div>

              <div className="service-tray-list">
                {consumptionHistory.length === 0 ? (
                  <div className="empty-tray-message">
                    <Wine size={36} style={{ opacity: 0.3, marginBottom: '8px' }} />
                    <p style={{ margin: 0, fontWeight: 600 }}>No bottles opened yet tonight</p>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Swipe right on any wine in the menu to log a bottle as consumed.
                    </p>
                  </div>
                ) : (
                  consumptionHistory.map(item => (
                    <div key={item.id} className={`service-tray-card ${item.synced ? 'is-synced' : 'is-pending'}`}>
                      <div className="tray-card-top">
                        <div>
                          <h4 className="tray-card-producer">{item.producer}</h4>
                          <p className="tray-card-title">{item.wine} ({item.vintage})</p>
                        </div>
                        <span className={`sync-status-badge ${item.synced ? 'synced' : 'pending'}`}>
                          {item.synced ? (
                            <><CheckCircle2 size={12} style={{ marginRight: '3px' }} /> Synced</>
                          ) : (
                            <><AlertCircle size={12} style={{ marginRight: '3px' }} /> Pending Sync</>
                          )}
                        </span>
                      </div>

                      <div className="tray-card-meta">
                        <span><MapPin size={12} style={{ display: 'inline', marginRight: '3px' }} /> {item.location} {item.bin !== 'Unassigned' ? `· Bin ${item.bin}` : ''}</span>
                        <span><Clock size={12} style={{ display: 'inline', marginRight: '3px' }} /> {item.timeStr}</span>
                        {(item.iBottle || item.iWine) && (
                          <span style={{ fontFamily: 'monospace', fontSize: '0.78rem', background: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '4px' }}>
                            ID: {item.iBottle || item.iWine}
                          </span>
                        )}
                        <span className="tray-reason-tag">{item.reasonLabel || 'Drank from cellar'}</span>
                      </div>

                      <div className="tray-card-actions">
                        {(() => {
                          const liveCtUrl = getCellarTrackerActionUrl(
                            item.iWine, 
                            item.iBottle || item.barcode, 
                            item.reason || 'Drink', 
                            `${item.producer} ${item.wine} ${item.vintage}`
                          );
                          return (
                            <a 
                              href={liveCtUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="tray-btn-link"
                              onClick={() => {
                                const updated = consumptionHistory.map(h => h.id === item.id ? { ...h, synced: true } : h);
                                setConsumptionHistory(updated);
                                localStorage.setItem('ct_consumption_history', JSON.stringify(updated));
                                syncStateWithServer(updated, consumedCounts, consumedBins);
                              }}
                              title="Open exact wine on CellarTracker and mark as synced"
                            >
                              <ExternalLink size={12} style={{ marginRight: '4px' }} />
                              Open on CT ↗
                            </a>
                          );
                        })()}

                        <button 
                          className="tray-btn-undo"
                          onClick={() => handleUndoConsume(null, item.wineKey, item.id)}
                          title="Return bottle back to cellar"
                        >
                          <Undo2 size={13} style={{ marginRight: '4px' }} />
                          Undo / Restore Bottle
                        </button>
                      </div>
                    </div>
                  ))
                )}
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
              {toast.ctUrl && (
                <a
                  href={toast.ctUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
                >
                  {toast.linkText || 'Complete update on CellarTracker.com'} <ExternalLink size={12} />
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
          Connect your CellarTracker account or upload a CSV export to instantly generate a Restaurant Style Wine List with real-time bottle consumption synchronization.
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
