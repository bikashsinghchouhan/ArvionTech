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
        <stop offset="0" stopColor="#bcd9fb" />
        <stop offset="1" stopColor="#93c0f3" />
      </linearGradient>
      <linearGradient id="prCoin" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#f7b733" />
        <stop offset="0.5" stopColor="#ffd665" />
        <stop offset="1" stopColor="#f2a516" />
      </linearGradient>
      <linearGradient id="prLid" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#2c56b8" />
        <stop offset="1" stopColor="#1b3a8c" />
      </linearGradient>
    </defs>

    {/* soft floor shadow */}
    <ellipse cx="110" cy="140" rx="98" ry="7" fill="#fbdcc2" />

    {/* PAYROLL checklist card */}
    <g>
      <rect x="128" y="22" width="62" height="62" rx="5" fill="#ffffff" stroke="#bcd3f3" strokeWidth="1.4" />
      <path d="M133 22 H185 Q190 22 190 27 V37 H128 V27 Q128 22 133 22 Z" fill="#5a9cf0" />
      <text x="159" y="33.2" textAnchor="middle" fontSize="8" fontWeight="800" fill="#ffffff" fontFamily="Arial, sans-serif" letterSpacing="0.5">PAYROLL</text>
      {[48, 61, 74].map((y) => (
        <g key={y}>
          <path d={`M135 ${y} l2.8 2.8 l5 -5.5`} stroke="#2d6fd6" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="148" y={y - 1.5} width="34" height="3.4" rx="1.7" fill="#cfe0f7" />
        </g>
      ))}
    </g>

    {/* gold coin stacks */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <g key={`c1${i}`}>
        <ellipse cx="197" cy={118 - i * 6} rx="12" ry="4" fill="#e09610" />
        <rect x="185" y={114 - i * 6} width="24" height="4" fill="url(#prCoin)" />
        <ellipse cx="197" cy={114 - i * 6} rx="12" ry="4" fill="#ffd665" stroke="#f2a516" strokeWidth="0.6" />
      </g>
    ))}
    {[0, 1, 2].map((i) => (
      <g key={`c2${i}`}>
        <ellipse cx="174" cy={122 - i * 6} rx="11" ry="3.8" fill="#e09610" />
        <rect x="163" y={118.2 - i * 6} width="22" height="3.8" fill="url(#prCoin)" />
        <ellipse cx="174" cy={118.2 - i * 6} rx="11" ry="3.8" fill="#ffd665" stroke="#f2a516" strokeWidth="0.6" />
      </g>
    ))}

    {/* chair back */}
    <rect x="16" y="74" width="26" height="48" rx="9" fill="#3b6fd8" />

    {/* long hair behind the shoulders */}
    <path d="M40 46 C38 22 78 16 84 40 C88 58 86 70 92 84 C80 92 52 94 34 88 C40 74 40 60 40 46 Z" fill="#23202b" />

    {/* body: light blue shirt */}
    <path d="M28 121 C26 98 40 80 62 79 C84 78 98 92 100 121 Z" fill="url(#prShirt)" />
    <path d="M52 80 L60 90 L62 80 Z M72 80 L66 90 L64 80 Z" fill="#e8f2fe" stroke="#93c0f3" strokeWidth="0.6" />
    <line x1="63" y1="90" x2="63" y2="120" stroke="#86b4ec" strokeWidth="0.8" />
    {[98, 108].map((y) => <circle key={y} cx="63" cy={y} r="0.9" fill="#6f9fdc" />)}

    {/* neck */}
    <path d="M57 62 H68 V79 C66 82 59 82 57 79 Z" fill="#eab48e" />

    {/* face (three-quarter view, turned towards the laptop) */}
    <path d="M50 44 C50 30 62 26 72 30 C80 34 81 46 79 54 C77 63 70 68 63 68 C55 67 50 59 50 44 Z" fill="#f6c9a5" />
    <ellipse cx="51" cy="49" rx="3" ry="4.2" fill="#eeb995" />

    {/* hair on top: side part with fringe swept right */}
    <path d="M47 46 C44 26 62 18 76 24 C84 28 86 38 82 46 C80 38 74 33 66 33 C60 34 56 38 53 44 C52 47 50 50 47 52 Z" fill="#23202b" />
    <path d="M47 44 C44 56 45 70 40 82 L48 82 C49 70 49 58 51 50 Z" fill="#23202b" />

    {/* glasses */}
    <rect x="57" y="42.5" width="10" height="7.5" rx="3" fill="#ffffff" fillOpacity="0.25" stroke="#1f1b24" strokeWidth="1.5" />
    <rect x="69.5" y="42.5" width="9" height="7.5" rx="3" fill="#ffffff" fillOpacity="0.25" stroke="#1f1b24" strokeWidth="1.5" />
    <path d="M67 45.5 Q68.2 44.6 69.5 45.5" stroke="#1f1b24" strokeWidth="1.3" fill="none" />
    <path d="M57 45 L52.5 46.5" stroke="#1f1b24" strokeWidth="1.3" strokeLinecap="round" />

    {/* happy eyes, brows, nose, cheeks, smile */}
    <path d="M59.5 47 Q62 44.8 64.5 47" stroke="#2b1a14" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    <path d="M71.5 47 Q73.8 44.8 76 47" stroke="#2b1a14" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    <path d="M58.5 39.6 Q62 38 65.5 39.4 M70.5 39.4 Q73.8 38 77 39.8" stroke="#23202b" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    <path d="M69.6 50 Q71.6 54 69 55" stroke="#d99a74" strokeWidth="1" fill="none" strokeLinecap="round" />
    <circle cx="59" cy="55" r="2.6" fill="#f4a39a" opacity="0.5" />
    <circle cx="76" cy="54.5" r="2.2" fill="#f4a39a" opacity="0.5" />
    <path d="M63 58.5 Q68.5 63.5 74 58.2 Q68.5 60.2 63 58.5 Z" fill="#c9524a" />
    <path d="M64.6 59.3 Q68.5 60.6 72.6 59.1 L72.2 59.9 Q68.5 61.2 65 60 Z" fill="#ffffff" />

    {/* arms reaching to the keyboard */}
    <path d="M86 92 C96 98 104 106 110 110 L106 117 C96 113 86 106 80 100 Z" fill="url(#prShirt)" stroke="#7fb0ea" strokeWidth="0.9" />
    <path d="M40 98 C46 110 62 116 84 115 L84 121 C60 123 42 117 34 106 Z" fill="url(#prShirt)" stroke="#7fb0ea" strokeWidth="0.9" />
    <ellipse cx="109" cy="113.5" rx="5.5" ry="3.2" fill="#f6c9a5" />
    <ellipse cx="86" cy="118" rx="5.5" ry="3.2" fill="#f6c9a5" />

    {/* laptop (lid seen from behind at an angle) */}
    <path d="M100 78 L144 74 Q147 74 147.4 77 L151 112 L106 116 Z" fill="url(#prLid)" />
    <circle cx="126" cy="95" r="4" fill="#4f78d1" />
    <path d="M84 117 L106 116 L151 112 L158 115 L156 119 L86 121 Z" fill="#163070" />

    {/* desk */}
    <rect x="14" y="120" width="192" height="7" rx="3" fill="#fbe7d4" stroke="#f3cfae" strokeWidth="1" />
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
