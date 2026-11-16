import React from 'react';

// Flat illustrations for the "Our Core Services" cards (decorative, inline SVG so they stay crisp)
const svgProps = { viewBox: '0 0 220 150', xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': true, className: 'w-full h-full' };

/* ---------------------------------------------------------------- School */
export const SchoolIllustration = () => (
  <svg {...svgProps}>
    {/* sky glow + ground */}
    <ellipse cx="110" cy="132" rx="104" ry="12" fill="#cfe8c4" />
    <ellipse cx="110" cy="130" rx="84" ry="7" fill="#b5dca5" />

    {/* trees */}
    <rect x="22" y="96" width="5" height="34" rx="2" fill="#8a5a33" />
    <circle cx="24.5" cy="88" r="15" fill="#4caf50" />
    <circle cx="16" cy="96" r="10" fill="#5cbf5f" />
    <circle cx="33" cy="95" r="10" fill="#43a047" />
    <rect x="193" y="96" width="5" height="34" rx="2" fill="#8a5a33" />
    <circle cx="195.5" cy="88" r="15" fill="#4caf50" />
    <circle cx="187" cy="96" r="10" fill="#43a047" />
    <circle cx="204" cy="95" r="10" fill="#5cbf5f" />

    {/* wings */}
    <rect x="44" y="72" width="132" height="58" rx="3" fill="#fff5e6" stroke="#e7d3b3" strokeWidth="1.5" />
    <rect x="40" y="66" width="140" height="8" rx="2" fill="#1f5fbf" />
    {/* centre block */}
    <rect x="80" y="52" width="60" height="78" fill="#fffaf2" stroke="#e7d3b3" strokeWidth="1.5" />
    <polygon points="74,54 110,26 146,54" fill="#1747a6" />
    <polygon points="82,52 110,32 138,52" fill="#2d6fd6" />
    {/* flag */}
    <rect x="109" y="8" width="2" height="20" fill="#6b7280" />
    <polygon points="111,9 125,13 111,17" fill="#f7941d" />
    {/* sign */}
    <rect x="86" y="58" width="48" height="12" rx="2" fill="#1747a6" />
    <text x="110" y="67" textAnchor="middle" fontSize="8" fontWeight="800" fill="#ffffff" fontFamily="Arial, sans-serif" letterSpacing="1">SCHOOL</text>
    {/* door */}
    <rect x="100" y="100" width="20" height="30" rx="2" fill="#1f5fbf" />
    <line x1="110" y1="100" x2="110" y2="130" stroke="#164a99" strokeWidth="1.5" />
    {/* windows */}
    {[54, 66, 154, 166].map((x) => (
      <g key={x}>
        <rect x={x} y="82" width="9" height="11" rx="1" fill="#7fb3f5" />
        <rect x={x} y="102" width="9" height="11" rx="1" fill="#7fb3f5" />
      </g>
    ))}
    {[86, 124].map((x) => (
      <rect key={x} x={x} y="78" width="10" height="14" rx="1" fill="#7fb3f5" />
    ))}
    {/* bushes + steps */}
    <rect x="96" y="128" width="28" height="4" rx="1" fill="#d1d5db" />
    <circle cx="52" cy="128" r="6" fill="#43a047" />
    <circle cx="168" cy="128" r="6" fill="#43a047" />
  </svg>
);

/* ---------------------------------------------------------------- Payroll */
export const PayrollIllustration = () => (
  <svg {...svgProps}>
    <defs>
      <linearGradient id="prShirt" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#cbe2fc" />
        <stop offset="100%" stopColor="#9dc5f5" />
      </linearGradient>

      <linearGradient id="prCoin" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="45%" stopColor="#fde047" />
        <stop offset="70%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>

      <linearGradient id="prLid" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2d3748" />
        <stop offset="60%" stopColor="#1a202c" />
        <stop offset="100%" stopColor="#111827" />
      </linearGradient>

      <linearGradient id="prHair" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2c2438" />
        <stop offset="50%" stopColor="#1a1622" />
        <stop offset="100%" stopColor="#0d0a11" />
      </linearGradient>

      <linearGradient id="prSkin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fcdbc0" />
        <stop offset="100%" stopColor="#f0bc94" />
      </linearGradient>

      <linearGradient id="prCardHead" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>

      <filter id="prCardShadow" x="-10%" y="-8%" width="125%" height="125%">
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* soft floor shadow */}
    <ellipse cx="110" cy="140" rx="98" ry="7" fill="#fbdcc2" opacity="0.7" />

    {/* PAYROLL checklist card (Upper Right) */}
    <g filter="url(#prCardShadow)">
      <rect x="130" y="19" width="64" height="66" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
      <path d="M130 25 Q130 19 136 19 L188 19 Q194 19 194 25 L194 36 L130 36 Z" fill="url(#prCardHead)" />
      {/* Orange accent mark on card corner */}
      <path d="M186 36 L194 28 L194 36 Z" fill="#f97316" />
      
      <text x="162" y="30" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#ffffff" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="0.8">PAYROLL</text>
      
      {/* Checklist items with crisp emerald green checkmarks */}
      {[
        { y: 43, w: 37 },
        { y: 54.5, w: 32 },
        { y: 66, w: 35 },
      ].map((item, idx) => (
        <g key={idx} transform={`translate(136, ${item.y})`}>
          <circle cx="4" cy="4" r="3.4" fill="#ecfdf5" stroke="#10b981" strokeWidth="0.8" />
          <path d="M2.6 4 L3.6 5.1 L5.4 2.9" stroke="#10b981" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="11" y="2.3" width={item.w} height="3.4" rx="1.7" fill="#e2e8f0" />
        </g>
      ))}
    </g>

    {/* Modern Office Chair (Ergonomic blue back) */}
    <rect x="16" y="70" width="25" height="52" rx="8" fill="#3b6fd8" />
    <rect x="14" y="74" width="3.5" height="44" rx="1.7" fill="#2557be" />

    {/* LADY CHARACTER - Professional Indian HR/Payroll Specialist */}
    {/* 1. Flowing Hair Behind Shoulders */}
    <path d="M41 44 C39 21 75 17 83 36 C87 52 86 68 91 84 C80 91 52 93 35 87 C40 73 41 58 41 44 Z" fill="url(#prHair)" />

    {/* 2. Torso: Crisp Corporate Light-Blue Shirt */}
    <path d="M28 121 C26 97 40 79 62 78 C84 77 98 91 100 121 Z" fill="url(#prShirt)" />
    
    {/* Crisp Shirt Collar */}
    <path d="M51 79 L60 90 L62 79 Z" fill="#ffffff" stroke="#93c0f3" strokeWidth="0.6" />
    <path d="M73 79 L64 90 L62 79 Z" fill="#ffffff" stroke="#93c0f3" strokeWidth="0.6" />
    <line x1="63" y1="90" x2="63" y2="121" stroke="#86b4ec" strokeWidth="0.8" />
    <circle cx="63" cy="98" r="0.9" fill="#5b93dc" />
    <circle cx="63" cy="108" r="0.9" fill="#5b93dc" />

    {/* Corporate ID Lanyard & Badge */}
    <path d="M56 82 L63 103 L70 82" stroke="#1d4ed8" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
    <rect x="59.5" y="102" width="7" height="9.5" rx="1" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.5" />
    <rect x="61" y="103.5" width="4" height="2.8" rx="0.4" fill="#f97316" />
    <line x1="61" y1="108" x2="65" y2="108" stroke="#64748b" strokeWidth="0.5" />
    <line x1="61" y1="109.5" x2="64" y2="109.5" stroke="#94a3b8" strokeWidth="0.5" />

    {/* 3. Slender Neck */}
    <path d="M57 60 H69 V79 C67 82 59 82 57 79 Z" fill="url(#prSkin)" />
    <path d="M57 66 C61 71 65 71 69 66 V70 C65 74 61 74 57 70 Z" fill="#d99b70" opacity="0.3" />

    {/* 4. Head & Face (Natural, graceful oval contour) */}
    <path d="M51 43 C51 29 63 25 72 29 C80 33 81 44 79 53 C77 62 70 67 63 67 C55 66 51 58 51 43 Z" fill="url(#prSkin)" />

    {/* Delicate Ear + Pearl Stud Earring */}
    <ellipse cx="51.5" cy="48" rx="2.4" ry="3.6" fill="#f0bc94" />
    <circle cx="51.2" cy="49.8" r="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.3" />

    {/* 5. Front Hair: Stylish Side-Swept Volume */}
    <path d="M48 43 C45 25 64 17 77 23 C84 27 86 36 82 44 C79 36 73 31 65 31 C58 32 54 36 52 42 C51 45 49 47 48 49 Z" fill="url(#prHair)" />
    <path d="M48 41 C44 53 45 67 40 79 L48 79 C49 67 49 55 51 47 Z" fill="url(#prHair)" />
    <path d="M62 25 C69 23 75 25 79 30" stroke="#4a3b5c" strokeWidth="0.9" fill="none" opacity="0.5" strokeLinecap="round" />

    {/* Tiny graceful bindi */}
    <circle cx="68.2" cy="38" r="0.65" fill="#991b1b" />

    {/* 6. Elegant, Professional Facial Features */}
    {/* Eyebrows */}
    <path d="M58 37.5 Q62 36 66 37.2" stroke="#1a1622" strokeWidth="0.95" fill="none" strokeLinecap="round" />
    <path d="M70.5 37.2 Q74 36 77.5 37.5" stroke="#1a1622" strokeWidth="0.95" fill="none" strokeLinecap="round" />

    {/* Chic Modern Wireframe Spectacles (Soft rounded shape, ultra-sleek) */}
    <rect x="56.5" y="39.5" width="9.5" height="7" rx="3" fill="#ffffff" fillOpacity="0.18" stroke="#334155" strokeWidth="0.8" />
    <rect x="69" y="39.5" width="9" height="7" rx="3" fill="#ffffff" fillOpacity="0.18" stroke="#334155" strokeWidth="0.8" />
    <path d="M66 42 Q67.5 41.2 69 42" stroke="#334155" strokeWidth="0.8" fill="none" />
    <path d="M56.5 41.8 L52 42.8" stroke="#334155" strokeWidth="0.8" strokeLinecap="round" />

    {/* Intelligent, Friendly Almond Eyes (Warm, focused and welcoming) */}
    {/* Left Eye */}
    <ellipse cx="61.5" cy="43" rx="1.8" ry="1.3" fill="#ffffff" />
    <circle cx="61.7" cy="43.1" r="0.95" fill="#2a1810" />
    <circle cx="62" cy="42.8" r="0.32" fill="#ffffff" />
    <path d="M59.6 42.4 C60.6 41.6 62.4 41.6 63.4 42.4" stroke="#1a1622" strokeWidth="0.6" fill="none" />

    {/* Right Eye */}
    <ellipse cx="73.5" cy="43" rx="1.8" ry="1.3" fill="#ffffff" />
    <circle cx="73.7" cy="43.1" r="0.95" fill="#2a1810" />
    <circle cx="74" cy="42.8" r="0.32" fill="#ffffff" />
    <path d="M71.6 42.4 C72.6 41.6 74.4 41.6 75.4 42.4" stroke="#1a1622" strokeWidth="0.6" fill="none" />

    {/* Delicate, refined nose */}
    <path d="M68.5 43 Q69.6 46.5 68.2 48" stroke="#d99a74" strokeWidth="0.75" fill="none" strokeLinecap="round" />

    {/* Gentle healthy cheek blush */}
    <circle cx="58" cy="48" r="2.2" fill="#fb7185" opacity="0.18" />
    <circle cx="76" cy="48" r="2.2" fill="#fb7185" opacity="0.18" />

    {/* Poised, pleasant corporate smile (Warm Rose) */}
    <path d="M64 52.5 Q68 55.5 72 52.5" stroke="#be123c" strokeWidth="0.95" fill="none" strokeLinecap="round" />
    <path d="M65.2 53.2 Q68 54.8 70.8 53.2" stroke="#fda4af" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.6" />

    {/* Arms typing naturally at laptop */}
    <path d="M86 91 C96 97 104 105 110 109 L106 116 C96 112 86 105 80 99 Z" fill="url(#prShirt)" stroke="#7fb0ea" strokeWidth="0.8" />
    <path d="M40 97 C46 109 62 115 84 114 L84 120 C60 122 42 116 34 105 Z" fill="url(#prShirt)" stroke="#7fb0ea" strokeWidth="0.8" />
    {/* Graceful hands */}
    <ellipse cx="109" cy="112" rx="4.5" ry="2.8" fill="url(#prSkin)" />
    <ellipse cx="85.5" cy="116.5" rx="4.5" ry="2.8" fill="url(#prSkin)" />

    {/* Desk Surface */}
    <rect x="14" y="118" width="192" height="7" rx="3.5" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.2" />
    <rect x="18" y="123" width="184" height="2" fill="#fed7aa" opacity="0.4" />

    {/* Sleek Modern Laptop (placed on desk) */}
    <path d="M100 75 L144 71 Q147 71 147.4 74 L151 109 L106 113 Z" fill="url(#prLid)" />
    <line x1="100.5" y1="75.5" x2="144" y2="71.5" stroke="#64748b" strokeWidth="0.6" opacity="0.7" />
    {/* Arvion orange monogram on laptop lid */}
    <circle cx="125" cy="91" r="3.5" fill="#f97316" />
    <path d="M124 89.5 C125.6 89.5 126.6 90.5 126.6 92 C126.6 93.5 125 93.5 124 93.5" stroke="#ffffff" strokeWidth="0.7" fill="none" />
    {/* Laptop base & keyboard deck */}
    <path d="M84 114 L106 113 L151 109 L158 112 L156 116 L86 118 Z" fill="#0f172a" />
    <polygon points="116,115 128,114 127,116 115,117" fill="#334155" opacity="0.6" />

    {/* Minted Gold Coins Stacks (sitting ON desk at right) */}
    {/* Stack 1 (Taller, 6 coins) */}
    <g transform="translate(196, 117)">
      <ellipse cx="0" cy="1" rx="9" ry="2.8" fill="#d97706" opacity="0.4" />
      <rect x="-9" y="-2" width="18" height="2" fill="url(#prCoin)" />
      <ellipse cx="0" cy="-2" rx="9" ry="2.8" fill="#fde047" stroke="#f59e0b" strokeWidth="0.4" />
      <rect x="-9" y="-6" width="18" height="4" fill="url(#prCoin)" />
      <ellipse cx="0" cy="-6" rx="9" ry="2.8" fill="#fde047" stroke="#f59e0b" strokeWidth="0.4" />
      <rect x="-9" y="-10" width="18" height="4" fill="url(#prCoin)" />
      <ellipse cx="0" cy="-10" rx="9" ry="2.8" fill="#fde047" stroke="#f59e0b" strokeWidth="0.4" />
      <rect x="-9" y="-14" width="18" height="4" fill="url(#prCoin)" />
      <ellipse cx="0" cy="-14" rx="9" ry="2.8" fill="#fde047" stroke="#f59e0b" strokeWidth="0.4" />
      <rect x="-9" y="-18" width="18" height="4" fill="url(#prCoin)" />
      <ellipse cx="0" cy="-18" rx="9" ry="2.8" fill="#fde047" stroke="#f59e0b" strokeWidth="0.4" />
      <rect x="-9" y="-22" width="18" height="4" fill="url(#prCoin)" />
      <ellipse cx="0" cy="-22" rx="9" ry="2.8" fill="#fef08a" stroke="#f59e0b" strokeWidth="0.4" />
      <circle cx="0" cy="-22" r="4.8" fill="none" stroke="#f59e0b" strokeWidth="0.3" strokeDasharray="1.2 1.2" />
    </g>

    {/* Stack 2 (Shorter, 4 coins) */}
    <g transform="translate(178, 118)">
      <ellipse cx="0" cy="1" rx="8" ry="2.5" fill="#d97706" opacity="0.4" />
      <rect x="-8" y="-2" width="16" height="2" fill="url(#prCoin)" />
      <ellipse cx="0" cy="-2" rx="8" ry="2.5" fill="#fde047" stroke="#f59e0b" strokeWidth="0.4" />
      <rect x="-8" y="-5.8" width="16" height="3.8" fill="url(#prCoin)" />
      <ellipse cx="0" cy="-5.8" rx="8" ry="2.5" fill="#fde047" stroke="#f59e0b" strokeWidth="0.4" />
      <rect x="-8" y="-9.6" width="16" height="3.8" fill="url(#prCoin)" />
      <ellipse cx="0" cy="-9.6" rx="8" ry="2.5" fill="#fde047" stroke="#f59e0b" strokeWidth="0.4" />
      <rect x="-8" y="-13.4" width="16" height="3.8" fill="url(#prCoin)" />
      <ellipse cx="0" cy="-13.4" rx="8" ry="2.5" fill="#fef08a" stroke="#f59e0b" strokeWidth="0.4" />
      <circle cx="0" cy="-13.4" r="4.2" fill="none" stroke="#f59e0b" strokeWidth="0.3" strokeDasharray="1.2 1.2" />
    </g>
  </svg>
);

/* ------------------------------------------------------ Statutory registrations */
export const StatutoryIllustration = () => (
  <svg {...svgProps}>
    <ellipse cx="110" cy="138" rx="100" ry="8" fill="#e4dcfb" />

    {/* government building */}
    <polygon points="112,36 168,58 56,58" fill="#7c5bd6" />
    <polygon points="112,42 158,58 66,58" fill="#9b7ff0" />
    <rect x="62" y="58" width="100" height="8" rx="1" fill="#6d3fc7" />
    {[72, 90, 108, 126, 144].map((x) => (
      <rect key={x} x={x} y="68" width="8" height="52" rx="2" fill="#ede7ff" stroke="#b9a6f2" strokeWidth="1" />
    ))}
    <rect x="58" y="120" width="108" height="7" rx="1" fill="#8b6fe0" />
    <rect x="52" y="127" width="120" height="7" rx="1" fill="#6d3fc7" />

    {/* clipboard with checklist */}
    <rect x="18" y="40" width="66" height="92" rx="6" fill="#8b5a2b" />
    <rect x="24" y="48" width="54" height="78" rx="3" fill="#ffffff" />
    <rect x="36" y="34" width="30" height="12" rx="4" fill="#6d3fc7" />
    {[60, 76, 92, 108].map((y) => (
      <g key={y}>
        <circle cx="33" cy={y} r="5" fill="#22c55e" />
        <path d={`M30.5 ${y} l2 2 l3.5 -4`} stroke="#ffffff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="42" y={y - 2} width="30" height="4" rx="2" fill="#d6ccf7" />
      </g>
    ))}

    {/* rubber stamp */}
    <rect x="170" y="104" width="34" height="9" rx="2" fill="#6d3fc7" />
    <rect x="182" y="88" width="10" height="17" rx="2" fill="#8b6fe0" />
    <circle cx="187" cy="84" r="8" fill="#6d3fc7" />
    <rect x="166" y="113" width="42" height="5" rx="2" fill="#4c2a99" />
  </svg>
);

/* -------------------------------------------------------------- Accounting */
export const AccountingIllustration = () => (
  <svg {...svgProps}>
    <ellipse cx="110" cy="138" rx="100" ry="8" fill="#cfeedb" />

    {/* laptop with growth chart */}
    <rect x="46" y="28" width="118" height="78" rx="6" fill="#1f2937" />
    <rect x="52" y="34" width="106" height="66" rx="3" fill="#ffffff" />
    {[[62, 76, 18], [76, 66, 28], [90, 70, 24], [104, 56, 38], [118, 50, 44], [132, 40, 54]].map(([x, y, h]) => (
      <rect key={x} x={x} y={y} width="10" height={h} rx="1.5" fill="#34c26b" />
    ))}
    <polyline points="62,72 76,62 90,66 104,52 118,46 140,34" fill="none" stroke="#178a3f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="140,34 132,34 138,40" fill="#178a3f" />
    <path d="M36 106 L174 106 L182 116 L28 116 Z" fill="#9ca3af" />
    <rect x="92" y="108" width="26" height="3" rx="1.5" fill="#6b7280" />

    {/* plant */}
    <rect x="14" y="104" width="18" height="16" rx="3" fill="#e2e8f0" />
    <path d="M23 104 C16 92 10 92 8 86 C16 86 22 92 23 104 Z" fill="#43a047" />
    <path d="M23 104 C24 88 30 82 36 80 C36 90 30 98 23 104 Z" fill="#5cbf5f" />
    <path d="M23 104 C22 94 22 86 24 78 C28 86 27 96 23 104 Z" fill="#2e7d32" />

    {/* coin stacks */}
    {[0, 1, 2, 3].map((i) => (
      <g key={`a${i}`}>
        <ellipse cx="186" cy={124 - i * 6} rx="12" ry="4" fill="#f5a623" />
        <ellipse cx="186" cy={122 - i * 6} rx="12" ry="4" fill="#ffc94d" />
      </g>
    ))}
    {[0, 1].map((i) => (
      <g key={`b${i}`}>
        <ellipse cx="206" cy={126 - i * 6} rx="9" ry="3.4" fill="#f5a623" />
        <ellipse cx="206" cy={124 - i * 6} rx="9" ry="3.4" fill="#ffc94d" />
      </g>
    ))}
  </svg>
);
