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
// Payroll specialist at her laptop: floating payslip card, "Salary Paid" chip, plant, mug and coins.
export const PayrollIllustration = () => (
  <svg {...svgProps}>
    <defs>
      <linearGradient id="pyShirt" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#dbeafe" />
        <stop offset="100%" stopColor="#a5c8f6" />
      </linearGradient>
      <linearGradient id="pySkin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fbd9bd" />
        <stop offset="100%" stopColor="#efb88f" />
      </linearGradient>
      <linearGradient id="pyHair" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3a2d45" />
        <stop offset="100%" stopColor="#14101a" />
      </linearGradient>
      <linearGradient id="pyChair" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4f7fe6" />
        <stop offset="100%" stopColor="#2f5fc4" />
      </linearGradient>
      <linearGradient id="pyLid" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <linearGradient id="pyHead" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="pyCoin" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="50%" stopColor="#fcd34d" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <filter id="pyShadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#0f172a" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* backdrop: soft glow + sparkles */}
    <circle cx="110" cy="70" r="54" fill="#ffe2c8" opacity="0.75" />
    <circle cx="110" cy="70" r="40" fill="#ffd3ad" opacity="0.35" />
    <circle cx="142" cy="20" r="1.8" fill="#fb923c" />
    <circle cx="76" cy="14" r="1.4" fill="#60a5fa" />
    <path d="M86 30 l1.2 3 3 1.2 -3 1.2 -1.2 3 -1.2 -3 -3 -1.2 3 -1.2 Z" fill="#fbbf24" />

    {/* floor shadow */}
    <ellipse cx="110" cy="140" rx="96" ry="6" fill="#f6c9a4" opacity="0.55" />

    {/* chair back */}
    <rect x="82" y="58" width="56" height="58" rx="13" fill="url(#pyChair)" />
    <rect x="86" y="62" width="48" height="6" rx="3" fill="#ffffff" opacity="0.18" />

    {/* hair behind shoulders (soft waves at the ends) */}
    <path d="M91 47 C89 27 101 20 111 20 C124 20 132 29 130 48 C129 60 132 70 136 80 C132 84 128 82 125 84 C120 86 100 86 95 84 C92 82 88 84 84 80 C88 70 92 60 91 47 Z" fill="url(#pyHair)" />

    {/* torso: light-blue shirt */}
    <path d="M72 116 C72 90 86 74 110 74 C134 74 148 90 148 116 Z" fill="url(#pyShirt)" />
    <path d="M98 76 C104 80 116 80 122 76 L120 81 C114 84 106 84 100 81 Z" fill="#8fb6ec" opacity="0.35" />
    <rect x="121" y="92" width="9" height="7" rx="1.4" fill="none" stroke="#8fb6ec" strokeWidth="0.8" />

    {/* arms reaching to the keyboard */}
    <path d="M80 84 C72 92 68 104 68 113 L78 113 C78 104 81 95 86 89 Z" fill="url(#pyShirt)" stroke="#8fb6ec" strokeWidth="0.7" />
    <path d="M140 84 C148 92 152 104 152 113 L142 113 C142 104 139 95 134 89 Z" fill="url(#pyShirt)" stroke="#8fb6ec" strokeWidth="0.7" />

    {/* neck */}
    <path d="M104 58 H116 V74 C113 78 107 78 104 74 Z" fill="url(#pySkin)" />
    <path d="M104 64 C108 68 112 68 116 64 V68 C112 72 108 72 104 68 Z" fill="#d9946a" opacity="0.35" />

    {/* collar + lanyard */}
    <path d="M101 73 L109 83 L105 71 Z" fill="#ffffff" stroke="#9cc0ee" strokeWidth="0.6" />
    <path d="M119 73 L111 83 L115 71 Z" fill="#ffffff" stroke="#9cc0ee" strokeWidth="0.6" />
    <path d="M103 75 L110 92 L117 75" stroke="#1d4ed8" strokeWidth="1.6" fill="none" strokeLinejoin="round" />

    {/* face */}
    <ellipse cx="110" cy="46" rx="13.5" ry="15.5" fill="url(#pySkin)" />
    <ellipse cx="96.8" cy="48" rx="2.2" ry="3.2" fill="#efb88f" />
    <ellipse cx="123.2" cy="48" rx="2.2" ry="3.2" fill="#efb88f" />
    <circle cx="96.6" cy="52" r="1.2" fill="#fbbf24" stroke="#d97706" strokeWidth="0.3" />
    <circle cx="123.4" cy="52" r="1.2" fill="#fbbf24" stroke="#d97706" strokeWidth="0.3" />

    {/* front hair: side part, lighter fringe, long locks over the shoulders */}
    <path d="M95.5 46 C94 29 105 23 113 24 C123 25 128.5 33 127.5 44 C124 37 118 32.5 111 31.5 C106 33 101 37 98.5 42 C97.5 44 96.5 45 95.5 46 Z" fill="url(#pyHair)" />
    <path d="M96 41 C92 52 94 64 90 76 C92 82 96 86 99 92 C100 86 97.5 80 97.5 74 C97.5 62 97.5 52 99.5 44 Z" fill="url(#pyHair)" />
    <path d="M124.5 41 C128.5 52 126.5 64 130.5 76 C128.5 82 124.5 86 121 92 C120 86 122.5 80 122.5 74 C122.5 62 122.5 52 120.5 44 Z" fill="url(#pyHair)" />
    <path d="M103 28.5 C109 25.5 117 26 122 30.5" stroke="#7a6690" strokeWidth="1.2" fill="none" opacity="0.55" strokeLinecap="round" />
    <path d="M93.5 56 C93 64 92.5 70 91.5 75" stroke="#5b4a6b" strokeWidth="0.8" fill="none" opacity="0.5" strokeLinecap="round" />

    {/* eyebrows */}
    <path d="M101.5 41.2 Q105 39.4 108.2 40.8" stroke="#231a2b" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    <path d="M111.8 40.8 Q115 39.4 118.5 41.2" stroke="#231a2b" strokeWidth="1.1" fill="none" strokeLinecap="round" />

    {/* eyes with lash line */}
    <ellipse cx="105" cy="46.4" rx="1.7" ry="2" fill="#2a1a12" />
    <ellipse cx="115" cy="46.4" rx="1.7" ry="2" fill="#2a1a12" />
    <circle cx="105.6" cy="45.7" r="0.6" fill="#ffffff" />
    <circle cx="115.6" cy="45.7" r="0.6" fill="#ffffff" />
    <path d="M102.7 45 Q105 43.4 107.3 45" stroke="#1a1220" strokeWidth="0.8" fill="none" strokeLinecap="round" />
    <path d="M112.7 45 Q115 43.4 117.3 45" stroke="#1a1220" strokeWidth="0.8" fill="none" strokeLinecap="round" />

    {/* glasses with a small glint */}
    <rect x="100.3" y="42.6" width="9.4" height="7.6" rx="3.2" fill="#e0f2fe" fillOpacity="0.25" stroke="#1f2937" strokeWidth="0.9" />
    <rect x="110.3" y="42.6" width="9.4" height="7.6" rx="3.2" fill="#e0f2fe" fillOpacity="0.25" stroke="#1f2937" strokeWidth="0.9" />
    <path d="M109.7 45.4 Q110 44.8 110.3 45.4" stroke="#1f2937" strokeWidth="0.9" fill="none" />
    <path d="M107.4 44 L108.4 45.2" stroke="#ffffff" strokeWidth="0.6" strokeLinecap="round" opacity="0.9" />
    <path d="M117.4 44 L118.4 45.2" stroke="#ffffff" strokeWidth="0.6" strokeLinecap="round" opacity="0.9" />

    {/* nose, blush, smile, bindi */}
    <path d="M110.2 48.8 Q111.4 51.6 109.6 52.6" stroke="#d48c63" strokeWidth="0.8" fill="none" strokeLinecap="round" />
    <circle cx="102.3" cy="53.2" r="2.5" fill="#fb7185" opacity="0.22" />
    <circle cx="117.7" cy="53.2" r="2.5" fill="#fb7185" opacity="0.22" />
    <path d="M106 55.2 Q110 59.4 114 55.2 Q110 56.6 106 55.2 Z" fill="#c2185b" />
    <path d="M107.6 56.6 Q110 57.8 112.4 56.6" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.8" />
    <circle cx="110" cy="39.8" r="0.75" fill="#b91c1c" />

    {/* desk */}
    <rect x="16" y="115" width="188" height="6" rx="3" fill="#ffffff" stroke="#f3cfae" strokeWidth="1.2" />
    <rect x="26" y="121" width="168" height="10" rx="2" fill="#fde6d1" opacity="0.7" />

    {/* laptop (back of the lid faces us) */}
    <path d="M82 85 H138 Q141 85 141.3 88 L143.5 114 H76.5 L78.7 88 Q79 85 82 85 Z" fill="url(#pyLid)" />
    <path d="M82 86.5 H138" stroke="#94a3b8" strokeWidth="0.6" opacity="0.6" />
    <path d="M81 89 L79.6 111" stroke="#ffffff" strokeWidth="0.8" opacity="0.18" strokeLinecap="round" />
    <circle cx="110" cy="99.5" r="5.2" fill="#f97316" />
    <text x="110" y="101.6" textAnchor="middle" fontSize="5.6" fontWeight="800" fill="#ffffff" fontFamily="Arial, sans-serif">at</text>
    <rect x="64" y="113" width="92" height="3.4" rx="1.7" fill="#0f172a" />
    {/* hands resting on the keyboard */}
    <ellipse cx="73" cy="113" rx="5.2" ry="2.8" fill="url(#pySkin)" />
    <ellipse cx="147" cy="113" rx="5.2" ry="2.8" fill="url(#pySkin)" />

    {/* plant */}
    <path d="M23 104 H41 L39 115 H25 Z" fill="#fb923c" />
    <rect x="22" y="102" width="20" height="4" rx="2" fill="#f97316" />
    <path d="M32 102 C25 96 20 96 17 89 C25 89 31 94 32 102 Z" fill="#22a06b" />
    <path d="M32 102 C33 92 38 86 45 84 C45 93 39 99 32 102 Z" fill="#34c27e" />
    <path d="M32 102 C30 93 30 85 33 78 C37 86 36 95 32 102 Z" fill="#178a54" />

    {/* mug */}
    <rect x="49" y="104" width="11" height="11" rx="2.2" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
    <path d="M60 106.5 C64 106.5 64 112 60 112" stroke="#e2e8f0" strokeWidth="1.4" fill="none" />
    <rect x="49" y="107" width="11" height="2.4" fill="#f97316" opacity="0.9" />

    {/* coin stacks */}
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={`c1${i}`}>
        <rect x="153" y={110 - i * 3.6} width="16" height="3.6" fill="url(#pyCoin)" />
        <ellipse cx="161" cy={110 - i * 3.6} rx="8" ry="2.4" fill="#fde68a" stroke="#f59e0b" strokeWidth="0.4" />
      </g>
    ))}
    {[0, 1, 2].map((i) => (
      <g key={`c2${i}`}>
        <rect x="171" y={111 - i * 3.6} width="14" height="3.6" fill="url(#pyCoin)" />
        <ellipse cx="178" cy={111 - i * 3.6} rx="7" ry="2.1" fill="#fde68a" stroke="#f59e0b" strokeWidth="0.4" />
      </g>
    ))}

    {/* floating payslip card */}
    <g filter="url(#pyShadow)">
      <rect x="148" y="14" width="56" height="64" rx="7" fill="#ffffff" />
      <path d="M148 21 Q148 14 155 14 H197 Q204 14 204 21 V28 H148 Z" fill="url(#pyHead)" />
      <text x="176" y="24" textAnchor="middle" fontSize="6.4" fontWeight="800" fill="#ffffff" fontFamily="Arial, sans-serif" letterSpacing="0.8">PAYSLIP</text>
      <circle cx="157" cy="37" r="4.2" fill="#dbeafe" />
      <circle cx="157" cy="35.8" r="1.6" fill="#3b82f6" />
      <path d="M154 39.6 Q157 37.4 160 39.6" stroke="#3b82f6" strokeWidth="1.2" fill="none" />
      <rect x="164" y="33.5" width="30" height="3" rx="1.5" fill="#cbd5e1" />
      <rect x="164" y="38.5" width="20" height="2.6" rx="1.3" fill="#e2e8f0" />
      <rect x="154" y="46" width="44" height="0.8" fill="#eef2f7" />
      <text x="154" y="51.5" fontSize="4.6" fill="#64748b" fontFamily="Arial, sans-serif">Net Pay</text>
      <text x="154" y="59.5" fontSize="7.6" fontWeight="800" fill="#0f2a6b" fontFamily="Arial, sans-serif">₹52,000</text>
      <rect x="154" y="63.5" width="44" height="8" rx="4" fill="#ecfdf5" />
      <text x="176" y="69.3" textAnchor="middle" fontSize="4.8" fontWeight="700" fill="#059669" fontFamily="Arial, sans-serif">CREDITED</text>
    </g>
    <circle cx="203" cy="15" r="6" fill="#10b981" stroke="#ffffff" strokeWidth="1.6" />
    <path d="M200.3 15 L202.3 17 L205.8 13" stroke="#ffffff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

    {/* "Salary Paid" chip */}
    <g filter="url(#pyShadow)">
      <rect x="14" y="26" width="56" height="18" rx="9" fill="#ffffff" />
      <circle cx="24" cy="35" r="5" fill="#fff1e6" />
      <text x="24" y="37.2" textAnchor="middle" fontSize="6.4" fontWeight="800" fill="#f97316" fontFamily="Arial, sans-serif">₹</text>
      <text x="32" y="37.4" fontSize="6.2" fontWeight="700" fill="#0f2a6b" fontFamily="Arial, sans-serif">Salary Paid</text>
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
