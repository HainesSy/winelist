import React, { useId } from 'react';

/**
 * Standardized Cross-Platform Wavy SVG Country Flags
 * Replicates the organic waving cloth contour and 3D lighting of Android's Noto Color Emoji flags,
 * ensuring identical, crisp, beautiful rendering on Windows desktop, Mac, iOS, and Android.
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
      filter: 'drop-shadow(0 1.5px 2px rgba(0, 0, 0, 0.18))',
      flexShrink: 0,
      ...style
    }
  };

  // The organic waving flag contour path (replicating Android Noto Color Emoji flag wave)
  const wavePathD = `
    M 24,72
    C 135,15 255,30 350,80
    C 440,128 535,72 612,42
    C 624,37 628,48 626,62
    L 618,375
    C 616,390 605,398 592,405
    C 525,438 435,488 350,438
    C 255,388 135,372 26,428
    C 14,434 10,422 12,408
    L 20,88
    C 21,78 22,73 24,72 Z
  `;

  const renderFlagGraphic = () => {
    switch (c) {
      case 'FR': // France
        return (
          <>
            <rect width="213.33" height="480" fill="#002395" />
            <rect x="213.33" width="213.34" height="480" fill="#ffffff" />
            <rect x="426.67" width="213.33" height="480" fill="#ed2939" />
          </>
        );

      case 'IT': // Italy
        return (
          <>
            <rect width="213.33" height="480" fill="#009246" />
            <rect x="213.33" width="213.34" height="480" fill="#ffffff" />
            <rect x="426.67" width="213.33" height="480" fill="#ce2b37" />
          </>
        );

      case 'DE': // Germany
        return (
          <>
            <rect width="640" height="160" fill="#000000" />
            <rect y="160" width="640" height="160" fill="#dd0000" />
            <rect y="320" width="640" height="160" fill="#ffce00" />
          </>
        );

      case 'ES': // Spain
        return (
          <>
            <rect width="640" height="120" fill="#aa151b" />
            <rect y="120" width="640" height="240" fill="#f1bf00" />
            <rect y="360" width="640" height="120" fill="#aa151b" />
            <g transform="translate(140, 180)">
              <rect x="-4" y="10" width="8" height="90" fill="#c0c0c0" rx="2" />
              <rect x="86" y="10" width="8" height="90" fill="#c0c0c0" rx="2" />
              <rect x="-8" y="5" width="16" height="8" fill="#e6b800" rx="2" />
              <rect x="82" y="5" width="16" height="8" fill="#e6b800" rx="2" />
              <path d="M15,20 H75 V75 C75,98 45,115 45,115 C45,115 15,98 15,75 Z" fill="#aa151b" stroke="#ffffff" strokeWidth="2" />
              <path d="M45,20 V115 M15,65 H75" stroke="#f1bf00" strokeWidth="3" />
              <circle cx="45" cy="55" r="9" fill="#0038a8" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M22,12 C22,2 45, -2 45, -2 C45,-2 68,2 68,12 Z" fill="#e6b800" stroke="#aa151b" strokeWidth="1.5" />
            </g>
          </>
        );

      case 'US': // United States
        return (
          <>
            <rect width="640" height="480" fill="#ffffff" />
            {[0, 2, 4, 6, 8, 10, 12].map(i => (
              <rect key={i} y={i * (480 / 13)} width="640" height={480 / 13} fill="#b22234" />
            ))}
            <rect width="256" height={7 * (480 / 13)} fill="#3c3b6e" />
            <g fill="#ffffff">
              {[0, 1, 2, 3, 4].map(r => (
                <g key={`r6-${r}`}>
                  {[0, 1, 2, 3, 4, 5].map(col => (
                    <circle key={col} cx={22 + col * 42.4} cy={18 + r * 51.5} r="5.5" />
                  ))}
                </g>
              ))}
              {[0, 1, 2, 3].map(r => (
                <g key={`r5-${r}`}>
                  {[0, 1, 2, 3, 4].map(col => (
                    <circle key={col} cx={43.2 + col * 42.4} cy={43.7 + r * 51.5} r="5.5" />
                  ))}
                </g>
              ))}
            </g>
          </>
        );

      case 'JP': // Japan
        return (
          <>
            <rect width="640" height="480" fill="#ffffff" />
            <circle cx="320" cy="240" r="144" fill="#bc002d" />
          </>
        );

      case 'CL': // Chile
        return (
          <>
            <rect width="640" height="240" fill="#ffffff" />
            <rect y="240" width="640" height="240" fill="#d52b1e" />
            <rect width="240" height="240" fill="#0039a6" />
            <path d={starPath(120, 120, 5, 54, 23)} fill="#ffffff" />
          </>
        );

      case 'AR': // Argentina
        return (
          <>
            <rect width="640" height="160" fill="#74acdf" />
            <rect y="160" width="640" height="160" fill="#ffffff" />
            <rect y="320" width="640" height="160" fill="#74acdf" />
            <g transform="translate(320, 240)">
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

      case 'PT': // Portugal
        return (
          <>
            <rect width="256" height="480" fill="#046a38" />
            <rect x="256" width="384" height="480" fill="#da291c" />
            <g transform="translate(256, 240)">
              <circle r="72" fill="#ffcc00" stroke="#885500" strokeWidth="2" />
              <circle r="52" fill="none" stroke="#ffffff" strokeWidth="3" />
              <path d="M-40,-45 H40 V20 C40,45 0,65 0,65 C0,65 -40,45 -40,20 Z" fill="#ffffff" stroke="#aa151b" strokeWidth="5" />
              <path d="M-24,-30 H24 V10 C24,28 0,42 0,42 C0,42 -24,28 -24,10 Z" fill="#0038a8" />
            </g>
          </>
        );

      case 'ZA': // South Africa
        return (
          <>
            <rect width="640" height="240" fill="#e03c31" />
            <rect y="240" width="640" height="240" fill="#001489" />
            <path d="M0,0 L240,240 L0,480 H120 L320,280 H640 V200 H320 L120,0 Z" fill="#ffffff" />
            <path d="M0,35 L205,240 L0,445 H70 L275,240 L70,35 Z" fill="#ffb81c" />
            <path d="M0,60 L180,240 L0,420 Z" fill="#000000" />
            <path d="M0,15 L225,240 L0,465 H75 L290,250 H640 V230 H290 L75,15 Z" fill="#007749" />
          </>
        );

      case 'AU': // Australia
        return (
          <>
            <rect width="640" height="480" fill="#00008b" />
            <g>
              <rect width="320" height="240" fill="#00247d" />
              <path d="M0,0 L320,240 M320,0 L0,240" stroke="#ffffff" strokeWidth="36" />
              <path d="M0,0 L320,240 M320,0 L0,240" stroke="#cf142b" strokeWidth="18" />
              <path d="M160,0 V240 M0,120 H320" stroke="#ffffff" strokeWidth="60" />
              <path d="M160,0 V240 M0,120 H320" stroke="#cf142b" strokeWidth="36" />
            </g>
            <path d={starPath(160, 360, 7, 50, 22)} fill="#ffffff" />
            <path d={starPath(480, 100, 7, 24, 11)} fill="#ffffff" />
            <path d={starPath(560, 200, 7, 24, 11)} fill="#ffffff" />
            <path d={starPath(480, 380, 7, 28, 13)} fill="#ffffff" />
            <path d={starPath(400, 240, 7, 24, 11)} fill="#ffffff" />
            <path d={starPath(440, 280, 5, 14, 6)} fill="#ffffff" />
          </>
        );

      case 'NZ': // New Zealand
        return (
          <>
            <rect width="640" height="480" fill="#00247d" />
            <g>
              <rect width="320" height="240" fill="#00247d" />
              <path d="M0,0 L320,240 M320,0 L0,240" stroke="#ffffff" strokeWidth="36" />
              <path d="M0,0 L320,240 M320,0 L0,240" stroke="#cc142b" strokeWidth="18" />
              <path d="M160,0 V240 M0,120 H320" stroke="#ffffff" strokeWidth="60" />
              <path d="M160,0 V240 M0,120 H320" stroke="#cc142b" strokeWidth="36" />
            </g>
            <g>
              <path d={starPath(480, 95, 5, 26, 12)} fill="#cc142b" stroke="#ffffff" strokeWidth="4" />
              <path d={starPath(565, 200, 5, 24, 11)} fill="#cc142b" stroke="#ffffff" strokeWidth="4" />
              <path d={starPath(480, 370, 5, 30, 14)} fill="#cc142b" stroke="#ffffff" strokeWidth="4" />
              <path d={starPath(395, 230, 5, 22, 10)} fill="#cc142b" stroke="#ffffff" strokeWidth="4" />
            </g>
          </>
        );

      case 'AT': // Austria
        return (
          <>
            <rect width="640" height="160" fill="#ed2939" />
            <rect y="160" width="640" height="160" fill="#ffffff" />
            <rect y="320" width="640" height="160" fill="#ed2939" />
          </>
        );

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
        <linearGradient id={shadeId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.12" />
          <stop offset="26%" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="55%" stopColor="#000000" stopOpacity="0.25" />
          <stop offset="82%" stopColor="#ffffff" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.16" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {renderFlagGraphic()}
        <rect width="640" height="480" fill={`url(#${shadeId})`} pointerEvents="none" />
      </g>
    </svg>
  );
}

export default CountryFlag;
