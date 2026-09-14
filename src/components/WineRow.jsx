import { useRef, memo } from 'react';
import { Wine, Undo2 } from 'lucide-react';

const WineRow = memo(function WineRow({
  wine,
  consumedTotal = 0,
  onConsume,
  onUndoConsume
}) {
  const itemRef = useRef(null);
  const bgRef = useRef(null);
  const touchStateRef = useRef({
    startX: 0,
    startY: 0,
    currentDeltaX: 0,
    isSwiping: false,
    isActive: false
  });

  const remainingTotal = Math.max(0, wine.totalQuantity - consumedTotal);

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

  const handleStart = (e) => {
    if (e.target.closest('.undo-btn') || e.target.closest('.consumed-badge')) {
      return;
    }
    if (remainingTotal <= 0) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    touchStateRef.current = {
      startX: clientX,
      startY: clientY,
      currentDeltaX: 0,
      isSwiping: false,
      isActive: true
    };
  };

  const handleMove = (e) => {
    const s = touchStateRef.current;
    if (!s.isActive) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaX = clientX - s.startX;
    const deltaY = clientY - s.startY;

    if (!s.isSwiping) {
      if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 8) {
        s.isSwiping = true;
      } else {
        return;
      }
    }

    if (deltaX > 0) {
      const clampedX = Math.min(deltaX, 150);
      s.currentDeltaX = clampedX;
      // Direct DOM manipulation - zero React re-renders while dragging
      if (itemRef.current) {
        itemRef.current.style.transition = 'none';
        itemRef.current.style.transform = `translateX(${clampedX}px)`;
      }
      if (bgRef.current) {
        bgRef.current.style.opacity = clampedX > 15 ? '1' : '0';
      }
    }
  };

  const handleEnd = () => {
    const s = touchStateRef.current;
    if (!s.isActive) return;
    const shouldConsume = s.isSwiping && s.currentDeltaX > 55;

    s.isActive = false;
    s.isSwiping = false;
    s.currentDeltaX = 0;

    // Reset styles smoothly via CSS transition
    if (itemRef.current) {
      itemRef.current.style.transition = 'transform 0.25s ease-out';
      itemRef.current.style.transform = 'translateX(0px)';
    }
    if (bgRef.current) {
      bgRef.current.style.opacity = '0';
    }

    if (shouldConsume && onConsume) {
      onConsume(wine);
    }
  };

  return (
    <div 
      className="wine-item-wrapper"
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div 
        ref={bgRef}
        className="swipe-action-bg"
        style={{ opacity: 0 }}
      >
        <Wine size={18} className="wine-swipe-icon" />
        <span>Log 1 Bottle</span>
      </div>

      <div 
        ref={itemRef}
        className={`wine-item ${consumedTotal > 0 ? 'has-consumed' : ''}`}
        style={{
          transform: 'translateX(0px)',
          transition: 'transform 0.25s ease-out'
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
                  if (onUndoConsume) onUndoConsume(e, wine.wineKey);
                }}
              >
                <Wine size={12} style={{ display: 'inline', marginRight: '3px', pointerEvents: 'none' }} />
                {consumedTotal} Opened
                <button 
                  type="button"
                  className="undo-btn" 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onUndoConsume) onUndoConsume(e, wine.wineKey);
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
});

export default WineRow;
