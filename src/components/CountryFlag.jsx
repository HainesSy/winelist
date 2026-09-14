import React, { useId } from 'react';

/**
 * Standardized Cross-Platform Mathematically Unified Wavy Country Flags
 * All stripes, cantons, and borders share the exact same bezier wave curves,
 * guaranteeing ZERO cut-offs, perfectly uniform stripe thicknesses from hoist to fly,
 * and classy matte colors with natural cloth depth.
 */

const x0 = 30;
const x1 = 610;
const y0 = 65;
const H = 350;

function waveFwd(y) {
  return `M ${x0},${y} C 175,${y - 22} 315,${y + 20} 445,${y - 14} C 515,${y - 30} 570,${y - 12} ${x1},${y}`;
}

function waveRev(y) {
  return `L ${x1},${y} C 570,${y - 12} 515,${y - 30} 445,${y - 14} C 315,${y + 20} 175,${y - 22} ${x0},${y}`;
}

function fullRibbon(y1, y2) {
  return `${waveFwd(y1)} ${waveRev(y2)} Z`;
}

const xCanton = 280;
function cantonWaveFwd(y) {
  return `M ${x0},${y} C 120,${y - 18} 200,${y + 4} ${xCanton},${y + 12}`;
}

function cantonWaveRev(y) {
  return `L ${xCanton},${y + 12} C 200,${y + 4} 120,${y - 18} ${x0},${y}`;
}

const flagPerimeter = `${waveFwd(y0)} ${waveRev(y0 + H)} Z`;

// Helper to draw n-pointed star
function starPath(cx, cy, spikes, outerRadius, innerRadius) {
  let rot = (Math.PI / 2) * 3;
  let p = '';
  const step = Math.PI / spikes;

  for (let i = 0; i < spikes; i++) {
    const x1 = cx + Math.cos(rot) * outerRadius;
    const y1 = cy + Math.sin(rot) * outerRadius;
    p += (i === 0 ? 'M' : 'L') + x1.toFixed(2) + ',' + y1.toFixed(2);
    rot += step;

    const x2 = cx + Math.cos(rot) * innerRadius;
    const y2 = cy + Math.sin(rot) * innerRadius;
    p += 'L' + x2.toFixed(2) + ',' + y2.toFixed(2);
    rot += step;
  }
  return p + 'Z';
}

/**
 * Convert 2-letter ISO country code into standard Unicode Flag Emoji
 * E.g. 'FR' -> 🇫🇷, 'US' -> 🇺🇸, 'JP' -> 🇯🇵
 */
export function getCountryEmoji(code) {
  const c = String(code || '').toUpperCase().trim();
  if (c.length !== 2) return '';
  const codePoints = [...c].map(char => 0x1F1E6 + char.charCodeAt(0) - 65);
  return String.fromCodePoint(...codePoints);
}

/**
 * Detect platforms where native Unicode flag emojis are beautifully supported:
 * Android, iOS (iPhone & iPad), mobile browsers, and Apple macOS.
 * Desktop Windows & Linux (which lack native flag emojis and only render "FR" / "US")
 * will use the custom waving SVG fallbacks.
 */
function shouldDefaultToEmoji() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  const isMobile = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(ua);
  const isIpadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  const isMac = /Macintosh|Mac OS X/i.test(ua) && !isIpadOS;
  return isMobile || isIpadOS || isMac;
}

export function CountryFlag({ code, className = '', style = {}, title = '', forceSvg = false, forceEmoji = false }) {
  const c = String(code || '').toUpperCase().trim();
  const label = title || c;
  const emoji = getCountryEmoji(c);

  // If on mobile/tablet (Android, iPad, iPhone, etc.) or explicitly requested, use native emoji encoding!
  if (emoji && (forceEmoji || (!forceSvg && shouldDefaultToEmoji()))) {
    return (
      <span
        className={`country-flag-emoji ${className}`.trim()}
        role="img"
        aria-label={label}
        style={{
          display: 'inline-block',
          fontFamily: '"Apple Color Emoji", "Noto Color Emoji", "Twemoji", "Segoe UI Emoji", sans-serif',
          lineHeight: 1,
          verticalAlign: '-0.08em',
          fontSize: '1.2em',
          flexShrink: 0,
          ...style
        }}
      >
        {emoji}
      </span>
    );
  }

  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const clipId = `wave-clip-${uid}`;
  const shadeId = `wave-shade-${uid}`;
  const cantonClipId = `canton-clip-${uid}`;

  const baseSvgProps = {
    className: `country-flag-svg ${className}`.trim(),
    viewBox: '0 0 640 480',
    width: '1.3em',
    height: '0.97em',
    role: 'img',
    'aria-label': label,
    style: {
      display: 'inline-block',
      verticalAlign: '-0.14em',
      filter: 'drop-shadow(0 1.5px 2px rgba(0, 0, 0, 0.16))',
      flexShrink: 0,
      ...style
    }
  };

  const renderFlagGraphic = () => {
    switch (c) {
      case 'US': { // United States: 13 waving ribbons with zero cut-off + waving canton + stars
        const stripeH = H / 13;
        const cantonBottomY = y0 + 7 * stripeH;
        const canton = `${cantonWaveFwd(y0)} L ${xCanton},${cantonBottomY + 12} ${cantonWaveRev(cantonBottomY)} Z`;

        return (
          <>
            {[...Array(13)].map((_, i) => (
              <path
                key={i}
                d={fullRibbon(y0 + i * stripeH, y0 + (i + 1) * stripeH)}
                fill={i % 2 === 0 ? '#b22234' : '#ffffff'}
              />
            ))}
            <path d={canton} fill="#3c3b6e" />
            <g fill="#ffffff">
              {[0, 1, 2, 3, 4].map(r =>
                [0, 1, 2, 3, 4, 5].map(col => {
                  const sx = 46 + col * 38;
                  const sy = y0 + 18 + r * 37 + (col === 0 ? 0 : col === 1 ? -4 : col === 2 ? -2 : col === 3 ? 3 : 6);
                  return <circle key={`r6-${r}-${col}`} cx={sx} cy={sy} r="4.5" />;
                })
              )}
              {[0, 1, 2, 3].map(r =>
                [0, 1, 2, 3, 4].map(col => {
                  const sx = 65 + col * 38;
                  const sy = y0 + 36 + r * 37 + (col === 0 ? -3 : col === 1 ? -2 : col === 2 ? 1 : 5);
                  return <circle key={`r5-${r}-${col}`} cx={sx} cy={sy} r="4.8" />;
                })
              )}
            </g>
          </>
        );
      }

      case 'DE': { // Germany: 3 waving horizontal ribbons
        const h3 = H / 3;
        return (
          <>
            <path d={fullRibbon(y0, y0 + h3)} fill="#000000" />
            <path d={fullRibbon(y0 + h3, y0 + h3 * 2)} fill="#dd0000" />
            <path d={fullRibbon(y0 + h3 * 2, y0 + H)} fill="#ffce00" />
          </>
        );
      }

      case 'ES': { // Spain: 3 waving ribbons with royal emblem centered on wave
        const yTopYellow = y0 + H * 0.25;
        const yBottomYellow = y0 + H * 0.75;
        const crestX = 150;
        const crestY = y0 + H * 0.5 - 12;
        return (
          <>
            <path d={fullRibbon(y0, yTopYellow)} fill="#aa151b" />
            <path d={fullRibbon(yTopYellow, yBottomYellow)} fill="#f1bf00" />
            <path d={fullRibbon(yBottomYellow, y0 + H)} fill="#aa151b" />
            <g transform={`translate(${crestX}, ${crestY})`}>
              <rect x="-4" y="-35" width="8" height="75" fill="#c0c0c0" rx="2" />
              <rect x="76" y="-35" width="8" height="75" fill="#c0c0c0" rx="2" />
              <path d="M14,-25 H66 V25 C66,45 40,60 40,60 C40,60 14,45 14,25 Z" fill="#aa151b" stroke="#ffffff" strokeWidth="2" />
              <path d="M40,-25 V60 M14,15 H66" stroke="#f1bf00" strokeWidth="2.5" />
              <circle cx="40" cy="8" r="8" fill="#0038a8" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M20,-32 C20,-40 40,-44 40,-44 C40,-44 60,-40 60,-32 Z" fill="#e6b800" stroke="#aa151b" strokeWidth="1.5" />
            </g>
          </>
        );
      }

      case 'AR': { // Argentina: 3 waving ribbons + authentic Sol de Mayo with 16 radiant sun rays
        const h3 = H / 3;
        const sunX = 320;
        const sunY = y0 + H * 0.5 + 16;
        const rDisc = 24;
        const rRay = 42;

        return (
          <>
            <path d={fullRibbon(y0, y0 + h3)} fill="#74acdf" />
            <path d={fullRibbon(y0 + h3, y0 + h3 * 2)} fill="#ffffff" />
            <path d={fullRibbon(y0 + h3 * 2, y0 + H)} fill="#74acdf" />
            <g>
              {/* 16 radiant sun rays alternating around the disc */}
              {[...Array(16)].map((_, i) => {
                const angle = (i * 2 * Math.PI) / 16 - Math.PI / 2;
                const xTip = sunX + Math.cos(angle) * rRay;
                const yTip = sunY + Math.sin(angle) * rRay;
                const a1 = angle - 0.14;
                const a2 = angle + 0.14;
                const xBase1 = sunX + Math.cos(a1) * (rDisc - 1);
                const yBase1 = sunY + Math.sin(a1) * (rDisc - 1);
                const xBase2 = sunX + Math.cos(a2) * (rDisc - 1);
                const yBase2 = sunY + Math.sin(a2) * (rDisc - 1);
                return (
                  <polygon
                    key={i}
                    points={`${xBase1.toFixed(1)},${yBase1.toFixed(1)} ${xTip.toFixed(1)},${yTip.toFixed(1)} ${xBase2.toFixed(1)},${yBase2.toFixed(1)}`}
                    fill="#f6b40e"
                  />
                );
              })}
              {/* Central golden sun disc with regal double ring */}
              <circle cx={sunX} cy={sunY} r={rDisc} fill="#f6b40e" stroke="#d48806" strokeWidth="2" />
              <circle cx={sunX} cy={sunY} r="16" fill="none" stroke="#d48806" strokeWidth="1.2" opacity="0.6" />
              {/* Dignified classical solar face */}
              <circle cx={sunX - 7} cy={sunY - 4} r="2" fill="#85340a" />
              <circle cx={sunX + 7} cy={sunY - 4} r="2" fill="#85340a" />
              <path d={`M ${sunX - 1},${sunY - 1} L ${sunX},${sunY + 4} L ${sunX - 2},${sunY + 4}`} stroke="#85340a" strokeWidth="1.2" fill="none" />
              <path d={`M ${sunX - 6},${sunY + 7} Q ${sunX},${sunY + 11} ${sunX + 6},${sunY + 7}`} stroke="#85340a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </g>
          </>
        );
      }

      case 'CL': { // Chile: Top white & bottom red waving ribbons with blue canton & star
        const yMid = y0 + H * 0.5;
        const canton = `${cantonWaveFwd(y0)} L ${xCanton},${yMid + 12} ${cantonWaveRev(yMid)} Z`;

        return (
          <>
            <path d={fullRibbon(y0, yMid)} fill="#ffffff" />
            <path d={fullRibbon(yMid, y0 + H)} fill="#d52b1e" />
            <path d={canton} fill="#0039a6" />
            <path d={starPath(155, y0 + 85, 5, 42, 18)} fill="#ffffff" />
          </>
        );
      }

      case 'FR': { // France: vertical stripes with perspective wave cloth flow
        const d1 = `
          M 225,${y0 - 30}
          C 230,${y0 + 100} 220,${y0 + 200} 228,${y0 + 300}
          C 232,${y0 + 350} 234,${y0 + 380} 235,${y0 + H + 30}
          L ${x0 - 20},${y0 + H + 30} L ${x0 - 20},${y0 - 30} Z
        `.replace(/\s+/g, ' ');
        const d2 = `
          M 225,${y0 - 30}
          C 230,${y0 + 100} 220,${y0 + 200} 228,${y0 + 300}
          C 232,${y0 + 350} 234,${y0 + 380} 235,${y0 + H + 30}
          L 425,${y0 + H + 30}
          C 422,${y0 + 350} 420,${y0 + 200} 426,${y0 + 100}
          L 425,${y0 - 30} Z
        `.replace(/\s+/g, ' ');

        return (
          <>
            <path d={fullRibbon(y0, y0 + H)} fill="#ed2939" />
            <path d={d2} fill="#ffffff" />
            <path d={d1} fill="#002395" />
          </>
        );
      }

      case 'IT': { // Italy: vertical stripes with perspective wave cloth flow
        const d1 = `
          M 225,${y0 - 30}
          C 230,${y0 + 100} 220,${y0 + 200} 228,${y0 + 300}
          C 232,${y0 + 350} 234,${y0 + 380} 235,${y0 + H + 30}
          L ${x0 - 20},${y0 + H + 30} L ${x0 - 20},${y0 - 30} Z
        `.replace(/\s+/g, ' ');
        const d2 = `
          M 225,${y0 - 30}
          C 230,${y0 + 100} 220,${y0 + 200} 228,${y0 + 300}
          C 232,${y0 + 350} 234,${y0 + 380} 235,${y0 + H + 30}
          L 425,${y0 + H + 30}
          C 422,${y0 + 350} 420,${y0 + 200} 426,${y0 + 100}
          L 425,${y0 - 30} Z
        `.replace(/\s+/g, ' ');

        return (
          <>
            <path d={fullRibbon(y0, y0 + H)} fill="#ce2b37" />
            <path d={d2} fill="#ffffff" />
            <path d={d1} fill="#009246" />
          </>
        );
      }

      case 'JP': { // Japan: Pristine white waving silk + crimson sun disc
        return (
          <>
            <path d={fullRibbon(y0, y0 + H)} fill="#ffffff" />
            <circle cx="320" cy={y0 + H * 0.5 + 16} r="100" fill="#bc002d" />
          </>
        );
      }

      case 'AT': { // Austria: 3 waving horizontal ribbons
        const h3 = H / 3;
        return (
          <>
            <path d={fullRibbon(y0, y0 + h3)} fill="#ed2939" />
            <path d={fullRibbon(y0 + h3, y0 + h3 * 2)} fill="#ffffff" />
            <path d={fullRibbon(y0 + h3 * 2, y0 + H)} fill="#ed2939" />
          </>
        );
      }

      case 'ZA': { // South Africa: waving bands + Y-pall
        return (
          <>
            <path d={fullRibbon(y0, y0 + H * 0.5)} fill="#e03c31" />
            <path d={fullRibbon(y0 + H * 0.5, y0 + H)} fill="#001489" />
            <path d={fullRibbon(y0 + H * 0.35, y0 + H * 0.65)} fill="#ffffff" />
            <path d={fullRibbon(y0 + H * 0.40, y0 + H * 0.60)} fill="#007749" />
            <path d={`M ${x0},${y0} L 240,${y0 + H * 0.5} L ${x0},${y0 + H} H 120 L 320,${y0 + H * 0.58} H 640 V ${y0 + H * 0.42} H 320 L 120,${y0} Z`} fill="#ffffff" opacity="0.3" />
            <path d={`M ${x0},${y0 + 35} L 205,${y0 + H * 0.5} L ${x0},${y0 + H - 35} H 70 L 275,${y0 + H * 0.5} L 70,${y0 + 35} Z`} fill="#ffb81c" />
            <path d={`M ${x0},${y0 + 60} L 180,${y0 + H * 0.5} L ${x0},${y0 + H - 60} Z`} fill="#000000" />
            <path d={`M ${x0},${y0 + 15} L 225,${y0 + H * 0.5} L ${x0},${y0 + H - 15} H 75 L 290,${y0 + H * 0.52} H 640 V ${y0 + H * 0.48} H 290 L 75,${y0 + 15} Z`} fill="#007749" />
          </>
        );
      }

      case 'PT': { // Portugal: green/red split with gold armillary sphere on wave
        const split = `
          M 256,${y0 - 30}
          C 260,${y0 + 100} 250,${y0 + 200} 258,${y0 + 300}
          C 262,${y0 + 350} 263,${y0 + 380} 264,${y0 + H + 30}
          L ${x0 - 20},${y0 + H + 30} L ${x0 - 20},${y0 - 30} Z
        `.replace(/\s+/g, ' ');
        const crestX = 256;
        const crestY = y0 + H * 0.5 + 14;

        return (
          <>
            <path d={fullRibbon(y0, y0 + H)} fill="#da291c" />
            <path d={split} fill="#046a38" />
            <g transform={`translate(${crestX}, ${crestY})`}>
              <circle r="60" fill="#ffcc00" stroke="#885500" strokeWidth="2" />
              <circle r="44" fill="none" stroke="#ffffff" strokeWidth="2.5" />
              <path d="M-34,-36 H34 V16 C34,38 0,54 0,54 C0,54 -34,38 -34,16 Z" fill="#ffffff" stroke="#aa151b" strokeWidth="4" />
              <path d="M-20,-24 H20 V8 C20,24 0,36 0,36 C0,36 -20,24 -20,8 Z" fill="#0038a8" />
            </g>
          </>
        );
      }

      case 'AU': { // Australia: Waving blue field + Wavy Union Jack Canton + accurate Southern Cross
        const yMid = y0 + H * 0.5;
        const cantonPath = `${cantonWaveFwd(y0)} L ${xCanton},${yMid + 12} ${cantonWaveRev(yMid)} Z`;

        return (
          <>
            <path d={fullRibbon(y0, y0 + H)} fill="#001d68" />
            <defs>
              <clipPath id={cantonClipId}>
                <path d={cantonPath} />
              </clipPath>
            </defs>
            <g clipPath={`url(#${cantonClipId})`}>
              <path d={cantonPath} fill="#00247d" />
              <path d={`M ${x0},${y0} L ${xCanton},${yMid + 12} M ${xCanton},${y0} L ${x0},${yMid + 12}`} stroke="#ffffff" strokeWidth="26" />
              <path d={`M ${x0},${y0} L ${xCanton},${yMid + 12} M ${xCanton},${y0} L ${x0},${yMid + 12}`} stroke="#cf142b" strokeWidth="13" />
              <path d={`M ${(x0 + xCanton) / 2},${y0 - 20} V ${yMid + 30} M ${x0 - 20},${(y0 + yMid) / 2 + 6} H ${xCanton + 20}`} stroke="#ffffff" strokeWidth="42" />
              <path d={`M ${(x0 + xCanton) / 2},${y0 - 20} V ${yMid + 30} M ${x0 - 20},${(y0 + yMid) / 2 + 6} H ${xCanton + 20}`} stroke="#cf142b" strokeWidth="24" />
            </g>
            <path d={cantonPath} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />

            {/* Commonwealth Star (7-pointed) under the canton */}
            <path d={starPath(155, y0 + H * 0.76, 7, 38, 17)} fill="#ffffff" />

            {/* Southern Cross constellation (Fly half) */}
            <path d={starPath(475, y0 + H * 0.20, 7, 20, 9)} fill="#ffffff" />
            <path d={starPath(545, y0 + H * 0.44, 7, 20, 9)} fill="#ffffff" />
            <path d={starPath(405, y0 + H * 0.50, 7, 20, 9)} fill="#ffffff" />
            <path d={starPath(500, y0 + H * 0.62, 5, 12, 5.5)} fill="#ffffff" />
            <path d={starPath(475, y0 + H * 0.82, 7, 24, 11)} fill="#ffffff" />
          </>
        );
      }

      case 'NZ': { // New Zealand: Waving blue field + Wavy Union Jack Canton + 4 red stars with white borders
        const yMid = y0 + H * 0.5;
        const cantonPath = `${cantonWaveFwd(y0)} L ${xCanton},${yMid + 12} ${cantonWaveRev(yMid)} Z`;

        return (
          <>
            <path d={fullRibbon(y0, y0 + H)} fill="#001d68" />
            <defs>
              <clipPath id={cantonClipId}>
                <path d={cantonPath} />
              </clipPath>
            </defs>
            <g clipPath={`url(#${cantonClipId})`}>
              <path d={cantonPath} fill="#00247d" />
              <path d={`M ${x0},${y0} L ${xCanton},${yMid + 12} M ${xCanton},${y0} L ${x0},${yMid + 12}`} stroke="#ffffff" strokeWidth="26" />
              <path d={`M ${x0},${y0} L ${xCanton},${yMid + 12} M ${xCanton},${y0} L ${x0},${yMid + 12}`} stroke="#cc142b" strokeWidth="13" />
              <path d={`M ${(x0 + xCanton) / 2},${y0 - 20} V ${yMid + 30} M ${x0 - 20},${(y0 + yMid) / 2 + 6} H ${xCanton + 20}`} stroke="#ffffff" strokeWidth="42" />
              <path d={`M ${(x0 + xCanton) / 2},${y0 - 20} V ${yMid + 30} M ${x0 - 20},${(y0 + yMid) / 2 + 6} H ${xCanton + 20}`} stroke="#cc142b" strokeWidth="24" />
            </g>
            <path d={cantonPath} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />

            {/* 4 red stars with white border (Southern Cross) */}
            <path d={starPath(475, y0 + H * 0.20, 5, 24, 11)} fill="#cc142b" stroke="#ffffff" strokeWidth="3.5" />
            <path d={starPath(545, y0 + H * 0.44, 5, 22, 10)} fill="#cc142b" stroke="#ffffff" strokeWidth="3.5" />
            <path d={starPath(405, y0 + H * 0.50, 5, 20, 9)} fill="#cc142b" stroke="#ffffff" strokeWidth="3.5" />
            <path d={starPath(475, y0 + H * 0.82, 5, 26, 12)} fill="#cc142b" stroke="#ffffff" strokeWidth="3.5" />
          </>
        );
      }

      default:
        return (
          <g>
            <circle cx="320" cy="240" r="180" stroke="#b8860b" strokeWidth="14" fill="#faf8f5" />
            <path d="M320 60a260 260 0 0 0 0 360M320 60a260 260 0 0 1 0 360M140 240h360" stroke="#b8860b" strokeWidth="14" />
          </g>
        );
    }
  };

  return (
    <svg {...baseSvgProps}>
      <defs>
        <clipPath id={clipId}>
          <path d={flagPerimeter} />
        </clipPath>
        {/* Soft matte cloth-fold shadow aligned with wave peaks and valleys */}
        <linearGradient id={shadeId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" stopOpacity={c === 'JP' ? 0.04 : 0.08} />
          <stop offset="25%" stopColor="#ffffff" stopOpacity={c === 'JP' ? 0.16 : 0.12} />
          <stop offset="50%" stopColor="#000000" stopOpacity={c === 'JP' ? 0.07 : 0.15} />
          <stop offset="78%" stopColor="#ffffff" stopOpacity={c === 'JP' ? 0.18 : 0.13} />
          <stop offset="100%" stopColor="#000000" stopOpacity={c === 'JP' ? 0.05 : 0.10} />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {renderFlagGraphic()}
        <rect width="640" height="480" fill={`url(#${shadeId})`} pointerEvents="none" />
      </g>
      {/* Outer border drawn on top of flag to guarantee crisp edges and no cut-off stripes */}
      <path d={flagPerimeter} fill="none" stroke="rgba(0, 0, 0, 0.22)" strokeWidth="9" />
    </svg>
  );
}

export default CountryFlag;
