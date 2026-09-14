import React, { useId } from 'react';

/**
 * Standardized Cross-Platform Wavy Country Flags
 * The internal artwork (horizontal stripes, cantons, stars, emblems, suns, vertical folds)
 * physically responds to and curves with the 3D wave contour.
 * Retains 100% matte, classy sommelier-grade colors with soft cloth-fold depth.
 */

// Helper to draw 5-pointed star
function starPath(cx, cy, spikes, outerRadius, innerRadius) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;
  let path = '';

  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    path += (i === 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    path += 'L' + x.toFixed(2) + ',' + y.toFixed(2);
    rot += step;
  }
  path += 'Z';
  return path;
}

// Generates a closed waving ribbon between yTop and yBottom across x0..x1
function waveRibbon(yTop, yBottom, x0 = 0, x1 = 640) {
  const w = x1 - x0;
  return `
    M ${x0},${yTop}
    C ${x0 + w * 0.25},${yTop - 42} ${x0 + w * 0.48},${yTop + 24} ${x0 + w * 0.68},${yTop - 34}
    C ${x0 + w * 0.82},${yTop - 52} ${x0 + w * 0.92},${yTop - 30} ${x1},${yTop - 12}
    L ${x1},${yBottom - 12}
    C ${x0 + w * 0.92},${yBottom - 30} ${x0 + w * 0.82},${yBottom - 52} ${x0 + w * 0.68},${yBottom - 34}
    C ${x0 + w * 0.48},${yBottom + 24} ${x0 + w * 0.25},${yBottom - 42} ${x0},${yBottom}
    Z
  `.replace(/\s+/g, ' ');
}

// Wave displacement function for positioning stars, emblems, suns
function waveOffsetAt(x) {
  const t = x / 640;
  return -36 * Math.sin(t * Math.PI * 1.8) + 16 * Math.sin(t * Math.PI * 3.4);
}

export function CountryFlag({ code, className = '', style = {}, title = '' }) {
  const c = String(code || '').toUpperCase().trim();
  const label = title || c;
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const clipId = `wave-clip-${uid}`;
  const shadeId = `wave-shade-${uid}`;

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
      filter: 'drop-shadow(0 1.5px 2px rgba(0, 0, 0, 0.14))',
      flexShrink: 0,
      ...style
    }
  };

  // Organic waving perimeter contour matching the ribbon curves
  const wavePathD = `
    M 20,54
    C 160,12 305,78 435,20
    C 525,2 590,24 618,42
    C 625,46 626,54 624,64
    L 614,418
    C 612,428 604,436 592,440
    C 525,446 435,398 305,456
    C 160,490 80,454 22,464
    C 13,465 11,455 12,442
    L 18,72
    C 18,62 19,56 20,54 Z
  `.replace(/\s+/g, ' ');

  const renderFlagGraphic = () => {
    switch (c) {
      case 'US': { // United States: 13 waving stripes + waving canton + waving stars
        const stripeH = 480 / 13;
        const cantonPath = `
          M 0,0
          C 65,-11 125,6 177,-9
          C 213,-14 239,-8 260,-3
          L 260,${7 * stripeH - 3}
          C 239,${7 * stripeH - 8} 213,${7 * stripeH - 14} 177,${7 * stripeH - 9}
          C 125,${7 * stripeH + 6} 65,${7 * stripeH - 11} 0,${7 * stripeH}
          Z
        `.replace(/\s+/g, ' ');

        return (
          <>
            {[...Array(13)].map((_, i) => (
              <path
                key={i}
                d={waveRibbon(i * stripeH, (i + 1) * stripeH)}
                fill={i % 2 === 0 ? '#b22234' : '#ffffff'}
              />
            ))}
            <path d={cantonPath} fill="#3c3b6e" />
            <g fill="#ffffff">
              {[0, 1, 2, 3, 4].map(r =>
                [0, 1, 2, 3, 4, 5].map(col => {
                  const sx = 22 + col * 42.4;
                  const sy = 16 + r * 50 + waveOffsetAt(sx) * 0.45;
                  return <circle key={`r6-${r}-${col}`} cx={sx} cy={sy} r="5.5" />;
                })
              )}
              {[0, 1, 2, 3].map(r =>
                [0, 1, 2, 3, 4].map(col => {
                  const sx = 43.2 + col * 42.4;
                  const sy = 41 + r * 50 + waveOffsetAt(sx) * 0.45;
                  return <circle key={`r5-${r}-${col}`} cx={sx} cy={sy} r="5.5" />;
                })
              )}
            </g>
          </>
        );
      }

      case 'DE': { // Germany: 3 waving horizontal ribbons
        const h3 = 480 / 3;
        return (
          <>
            <path d={waveRibbon(0, h3)} fill="#000000" />
            <path d={waveRibbon(h3, h3 * 2)} fill="#dd0000" />
            <path d={waveRibbon(h3 * 2, 480)} fill="#ffce00" />
          </>
        );
      }

      case 'ES': { // Spain: 3 waving ribbons + heraldic emblem sitting on wave
        const crestX = 140;
        const crestY = 240 + waveOffsetAt(crestX) * 0.8;
        return (
          <>
            <path d={waveRibbon(0, 120)} fill="#aa151b" />
            <path d={waveRibbon(120, 360)} fill="#f1bf00" />
            <path d={waveRibbon(360, 480)} fill="#aa151b" />
            <g transform={`translate(${crestX}, ${crestY - 60})`}>
              <rect x="-4" y="10" width="8" height="90" fill="#c0c0c0" rx="2" />
              <rect x="86" y="10" width="8" height="90" fill="#c0c0c0" rx="2" />
              <rect x="-8" y="5" width="16" height="8" fill="#e6b800" rx="2" />
              <rect x="82" y="5" width="16" height="8" fill="#e6b800" rx="2" />
              <path d="M15,20 H75 V75 C75,98 45,115 45,115 C45,115 15,98 15,75 Z" fill="#aa151b" stroke="#ffffff" strokeWidth="2" />
              <path d="M45,20 V115 M15,65 H75" stroke="#f1bf00" strokeWidth="3" />
              <circle cx="45" cy="55" r="9" fill="#0038a8" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M22,12 C22,2 45,-2 45,-2 C45,-2 68,2 68,12 Z" fill="#e6b800" stroke="#aa151b" strokeWidth="1.5" />
            </g>
          </>
        );
      }

      case 'AR': { // Argentina: 3 waving ribbons + Sun of May in wave dip
        const h3 = 480 / 3;
        const sunX = 320;
        const sunY = 240 + waveOffsetAt(sunX);
        return (
          <>
            <path d={waveRibbon(0, h3)} fill="#74acdf" />
            <path d={waveRibbon(h3, h3 * 2)} fill="#ffffff" />
            <path d={waveRibbon(h3 * 2, 480)} fill="#74acdf" />
            <g transform={`translate(${sunX}, ${sunY})`}>
              <circle r="36" fill="#f6b40e" stroke="#85340a" strokeWidth="1.5" />
              {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
                <line
                  key={i}
                  x1="0"
                  y1="37"
                  x2="0"
                  y2="58"
                  stroke="#f6b40e"
                  strokeWidth={i % 2 === 0 ? '4' : '2.5'}
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="-10" cy="-6" r="3" fill="#85340a" />
              <circle cx="10" cy="-6" r="3" fill="#85340a" />
              <path d="M-10,12 Q0,20 10,12" stroke="#85340a" strokeWidth="2" fill="none" />
            </g>
          </>
        );
      }

      case 'CL': { // Chile: Top white & bottom red waving ribbons with blue canton & star
        const cantonPath = `
          M 0,0
          C 60,-11 120,6 170,-9
          C 200,-14 225,-8 240,-3
          L 240,${240 - 3}
          C 225,${240 - 8} 200,${240 - 14} 170,${240 - 9}
          C 120,${240 + 6} 60,${240 - 11} 0,240
          Z
        `.replace(/\s+/g, ' ');

        const starX = 120;
        const starY = 120 + waveOffsetAt(starX) * 0.45;

        return (
          <>
            <path d={waveRibbon(0, 240)} fill="#ffffff" />
            <path d={waveRibbon(240, 480)} fill="#d52b1e" />
            <path d={cantonPath} fill="#0039a6" />
            <path d={starPath(starX, starY, 5, 54, 23)} fill="#ffffff" />
          </>
        );
      }

      case 'FR': { // France: vertical stripes with perspective wave cloth flow
        const d1 = `
          M 213,0 
          C 218,120 205,240 215,360 
          C 219,410 220,450 222,480
          L 0,480 L 0,0 Z
        `.replace(/\s+/g, ' ');

        const d2 = `
          M 213,0 
          C 218,120 205,240 215,360 
          C 219,410 220,450 222,480
          L 426,480 
          C 424,410 422,360 428,240
          C 432,120 425,50 426,0 Z
        `.replace(/\s+/g, ' ');

        return (
          <>
            <rect width="640" height="480" fill="#ed2939" />
            <path d={d2} fill="#ffffff" />
            <path d={d1} fill="#002395" />
          </>
        );
      }

      case 'IT': { // Italy: vertical stripes with perspective wave cloth flow
        const d1 = `
          M 213,0 
          C 218,120 205,240 215,360 
          C 219,410 220,450 222,480
          L 0,480 L 0,0 Z
        `.replace(/\s+/g, ' ');

        const d2 = `
          M 213,0 
          C 218,120 205,240 215,360 
          C 219,410 220,450 222,480
          L 426,480 
          C 424,410 422,360 428,240
          C 432,120 425,50 426,0 Z
        `.replace(/\s+/g, ' ');

        return (
          <>
            <rect width="640" height="480" fill="#ce2b37" />
            <path d={d2} fill="#ffffff" />
            <path d={d1} fill="#009246" />
          </>
        );
      }

      case 'JP': { // Japan: crimson sun sitting in the wave fold
        const sunX = 320;
        const sunY = 240 + waveOffsetAt(sunX);
        return (
          <>
            <rect width="640" height="480" fill="#ffffff" />
            <circle cx={sunX} cy={sunY} r="140" fill="#bc002d" />
          </>
        );
      }

      case 'ZA': { // South Africa: waving bands + green Y-pall
        return (
          <>
            <path d={waveRibbon(0, 240)} fill="#e03c31" />
            <path d={waveRibbon(240, 480)} fill="#001489" />
            <path d={waveRibbon(170, 310)} fill="#ffffff" />
            <path d={waveRibbon(190, 290)} fill="#007749" />
            <path d="M 0,0 L 240,240 L 0,480 H 120 L 320,280 H 640 V 200 H 320 L 120,0 Z" fill="#ffffff" opacity="0.3" />
            <path d="M 0,35 L 205,240 L 0,445 H 70 L 275,240 L 70,35 Z" fill="#ffb81c" />
            <path d="M 0,60 L 180,240 L 0,420 Z" fill="#000000" />
            <path d="M 0,15 L 225,240 L 0,465 H 75 L 290,250 H 640 V 230 H 290 L 75,15 Z" fill="#007749" />
          </>
        );
      }

      case 'PT': { // Portugal: green/red split with gold armillary sphere on wave
        const split = `
          M 256,0
          C 260,120 250,240 258,360
          C 262,410 263,450 264,480
          L 0,480 L 0,0 Z
        `.replace(/\s+/g, ' ');

        const crestX = 256;
        const crestY = 240 + waveOffsetAt(crestX) * 0.8;

        return (
          <>
            <rect width="640" height="480" fill="#da291c" />
            <path d={split} fill="#046a38" />
            <g transform={`translate(${crestX}, ${crestY})`}>
              <circle r="72" fill="#ffcc00" stroke="#885500" strokeWidth="2" />
              <circle r="52" fill="none" stroke="#ffffff" strokeWidth="3" />
              <path d="M-40,-45 H40 V20 C40,45 0,65 0,65 C0,65 -40,45 -40,20 Z" fill="#ffffff" stroke="#aa151b" strokeWidth="5" />
              <path d="M-24,-30 H24 V10 C24,28 0,42 0,42 C0,42 -24,28 -24,10 Z" fill="#0038a8" />
            </g>
          </>
        );
      }

      case 'AU': { // Australia: waving blue field + Union Jack + waving stars
        return (
          <>
            <path d={waveRibbon(0, 480)} fill="#00008b" />
            <g>
              <rect width="320" height="240" fill="#00247d" />
              <path d="M0,0 L320,240 M320,0 L0,240" stroke="#ffffff" strokeWidth="36" />
              <path d="M0,0 L320,240 M320,0 L0,240" stroke="#cf142b" strokeWidth="18" />
              <path d="M160,0 V240 M0,120 H320" stroke="#ffffff" strokeWidth="60" />
              <path d="M160,0 V240 M0,120 H320" stroke="#cf142b" strokeWidth="36" />
            </g>
            <path d={starPath(160, 360 + waveOffsetAt(160) * 0.5, 7, 50, 22)} fill="#ffffff" />
            <path d={starPath(480, 100 + waveOffsetAt(480) * 0.8, 7, 24, 11)} fill="#ffffff" />
            <path d={starPath(560, 200 + waveOffsetAt(560) * 0.8, 7, 24, 11)} fill="#ffffff" />
            <path d={starPath(480, 380 + waveOffsetAt(480) * 0.8, 7, 28, 13)} fill="#ffffff" />
            <path d={starPath(400, 240 + waveOffsetAt(400) * 0.8, 7, 24, 11)} fill="#ffffff" />
            <path d={starPath(440, 280 + waveOffsetAt(440) * 0.8, 5, 14, 6)} fill="#ffffff" />
          </>
        );
      }

      case 'NZ': { // New Zealand: waving blue field + Union Jack + 4 red stars on wave
        return (
          <>
            <path d={waveRibbon(0, 480)} fill="#00247d" />
            <g>
              <rect width="320" height="240" fill="#00247d" />
              <path d="M0,0 L320,240 M320,0 L0,240" stroke="#ffffff" strokeWidth="36" />
              <path d="M0,0 L320,240 M320,0 L0,240" stroke="#cc142b" strokeWidth="18" />
              <path d="M160,0 V240 M0,120 H320" stroke="#ffffff" strokeWidth="60" />
              <path d="M160,0 V240 M0,120 H320" stroke="#cc142b" strokeWidth="36" />
            </g>
            <g>
              <path d={starPath(480, 95 + waveOffsetAt(480) * 0.8, 5, 26, 12)} fill="#cc142b" stroke="#ffffff" strokeWidth="4" />
              <path d={starPath(565, 200 + waveOffsetAt(565) * 0.8, 5, 24, 11)} fill="#cc142b" stroke="#ffffff" strokeWidth="4" />
              <path d={starPath(480, 370 + waveOffsetAt(480) * 0.8, 5, 30, 14)} fill="#cc142b" stroke="#ffffff" strokeWidth="4" />
              <path d={starPath(395, 230 + waveOffsetAt(395) * 0.8, 5, 22, 10)} fill="#cc142b" stroke="#ffffff" strokeWidth="4" />
            </g>
          </>
        );
      }

      case 'AT': { // Austria: 3 waving horizontal ribbons
        const h3 = 480 / 3;
        return (
          <>
            <path d={waveRibbon(0, h3)} fill="#ed2939" />
            <path d={waveRibbon(h3, h3 * 2)} fill="#ffffff" />
            <path d={waveRibbon(h3 * 2, 480)} fill="#ed2939" />
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
          <path d={wavePathD} />
        </clipPath>
        {/* Soft, natural matte cloth-fold shadow aligned with wave peaks and valleys */}
        <linearGradient id={shadeId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.06" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="50%" stopColor="#000000" stopOpacity="0.14" />
          <stop offset="76%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {renderFlagGraphic()}
        <rect width="640" height="480" fill={`url(#${shadeId})`} pointerEvents="none" />
        <path d={wavePathD} fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="8" />
      </g>
    </svg>
  );
}

export default CountryFlag;
