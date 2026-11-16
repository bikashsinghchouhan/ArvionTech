// Illustrations for the About page "What We Do" cards (decorative inline SVG)
import React from 'react';

const svg = { viewBox: '0 0 240 180', xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': true, className: 'w-full h-auto' };

/* School ERP: laptop showing a school + module tiles, books beside it */
export const SchoolArt = () => (
  <svg {...svg}>
    <ellipse cx="130" cy="88" rx="96" ry="84" fill="#e3edfc" />
    {/* laptop screen */}
    <rect x="62" y="34" width="140" height="94" rx="8" fill="#1e3a8a" transform="rotate(-4 132 81)" />
    <rect x="70" y="42" width="124" height="78" rx="4" fill="#eef4ff" transform="rotate(-4 132 81)" />
    <g transform="rotate(-4 132 81)">
      {/* school on screen */}
      <polygon points="132,50 112,62 152,62" fill="#f7861c" />
      <rect x="114" y="62" width="36" height="22" fill="#1f5fbf" />
      <rect x="128" y="70" width="8" height="14" fill="#eef4ff" />
      {[118, 142].map((x) => <rect key={x} x={x} y="66" width="5" height="5" fill="#bcd3f3" />)}
      <rect x="80" y="62" width="24" height="4" rx="2" fill="#bcd3f3" />
      <rect x="160" y="62" width="24" height="4" rx="2" fill="#bcd3f3" />
      {/* module tiles */}
      {[['#3b82f6', 80], ['#f7a23a', 104], ['#f97316', 128], ['#e0ecff', 152]].map(([c, x]) => (
        <rect key={x} x={x} y="92" width="18" height="18" rx="3" fill={c} />
      ))}
      <path d="M155 106 v-6 M160 106 v-9 M165 106 v-4" stroke="#1f5fbf" strokeWidth="2.4" strokeLinecap="round" />
    </g>
    {/* laptop base */}
    <path d="M44 132 L196 122 L208 130 L54 142 Z" fill="#2b4fa8" />
    <path d="M54 142 L208 130 L208 134 L56 146 Z" fill="#1e3a8a" />
    {/* books */}
    <rect x="150" y="128" width="64" height="12" rx="3" fill="#f7861c" />
    <rect x="154" y="131" width="56" height="6" rx="2" fill="#fff4e8" />
    <rect x="156" y="116" width="58" height="12" rx="3" fill="#2e9f5b" />
    <rect x="160" y="119" width="50" height="6" rx="2" fill="#e9f8ef" />
  </svg>
);

/* Payroll: PAYROLL tablet with ticks, calendar, rupee coin stack */
export const PayrollArt = () => (
  <svg {...svg}>
    <ellipse cx="130" cy="90" rx="96" ry="84" fill="#ffe9d6" />
    {/* tablet */}
    <rect x="86" y="18" width="110" height="140" rx="12" fill="#1e3a8a" transform="rotate(6 141 88)" />
    <rect x="94" y="28" width="94" height="120" rx="6" fill="#ffffff" transform="rotate(6 141 88)" />
    <g transform="rotate(6 141 88)">
      <text x="141" y="50" textAnchor="middle" fontSize="13" fontWeight="900" fill="#0f2a6b" fontFamily="Arial, sans-serif">PAYROLL</text>
      {[66, 86, 106, 126].map((y) => (
        <g key={y}>
          <path d={`M104 ${y} l4 4 l7 -8`} stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="122" y={y - 3} width="56" height="5" rx="2.5" fill="#cfdbf2" />
        </g>
      ))}
    </g>
    {/* calendar */}
    <rect x="40" y="96" width="62" height="56" rx="8" fill="#ffffff" stroke="#e6ebf3" strokeWidth="2" />
    <rect x="40" y="96" width="62" height="16" rx="8" fill="#f7861c" />
    <rect x="40" y="104" width="62" height="8" fill="#f7861c" />
    {[52, 90].map((x) => <rect key={x} x={x - 3} y="90" width="6" height="12" rx="3" fill="#c2410c" />)}
    {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => (
      <rect key={`${r}${c}`} x={48 + c * 12} y={118 + r * 10} width="8" height="6" rx="1.5" fill="#d7dfec" />
    )))}
    {/* coin stack */}
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <ellipse cx="198" cy={150 - i * 8} rx="18" ry="6" fill="#e09610" />
        <ellipse cx="198" cy={146 - i * 8} rx="18" ry="6" fill="#ffd25a" stroke="#f2a516" strokeWidth="1" />
      </g>
    ))}
    <circle cx="176" cy="140" r="17" fill="#ffc23a" stroke="#e09610" strokeWidth="3" />
    <text x="176" y="147" textAnchor="middle" fontSize="19" fontWeight="900" fill="#b45309" fontFamily="Arial, sans-serif">₹</text>
  </svg>
);

/* Statutory: clipboard with ticks, a document and a gavel */
export const StatutoryArt = () => (
  <svg {...svg}>
    <ellipse cx="130" cy="90" rx="96" ry="84" fill="#efe8ff" />
    {/* document behind */}
    <rect x="150" y="70" width="60" height="80" rx="6" fill="#ffffff" stroke="#e4dcfb" strokeWidth="2" transform="rotate(10 180 110)" />
    <g transform="rotate(10 180 110)">
      {[86, 98, 110, 122, 134].map((y) => <rect key={y} x="160" y={y} width="40" height="4" rx="2" fill="#e2e8f0" />)}
    </g>
    {/* clipboard */}
    <rect x="86" y="30" width="82" height="112" rx="9" fill="#6d3fc7" />
    <rect x="93" y="40" width="68" height="96" rx="5" fill="#ffffff" />
    <rect x="110" y="24" width="34" height="14" rx="5" fill="#7c4fe0" />
    <circle cx="127" cy="24" r="6" fill="none" stroke="#7c4fe0" strokeWidth="4" />
    {[62, 86, 110].map((y) => (
      <g key={y}>
        <circle cx="106" cy={y} r="7" fill="#22c55e" />
        <path d={`M102.5 ${y} l2.5 2.5 l4.5 -5`} stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="118" y={y - 3} width="36" height="5" rx="2.5" fill="#dcd3f7" />
      </g>
    ))}
    {/* gavel */}
    <g transform="rotate(-28 72 132)">
      <rect x="40" y="118" width="54" height="22" rx="5" fill="#7c4fe0" />
      <rect x="46" y="118" width="8" height="22" fill="#6d3fc7" />
      <rect x="80" y="118" width="8" height="22" fill="#6d3fc7" />
      <rect x="62" y="138" width="9" height="40" rx="3" fill="#8b5a2b" />
    </g>
    <rect x="34" y="156" width="64" height="9" rx="4" fill="#5b2fb5" />
  </svg>
);

/* Accounting: laptop with growth chart + pie, calculator, plant */
export const AccountingArt = () => (
  <svg {...svg}>
    <ellipse cx="130" cy="90" rx="96" ry="84" fill="#e3f6ea" />
    {/* laptop */}
    <rect x="70" y="30" width="136" height="92" rx="8" fill="#1e3a8a" transform="rotate(-5 138 76)" />
    <rect x="78" y="38" width="120" height="76" rx="4" fill="#ffffff" transform="rotate(-5 138 76)" />
    <g transform="rotate(-5 138 76)">
      <rect x="86" y="46" width="44" height="5" rx="2.5" fill="#cfe7d8" />
      {[[90, 92, 14], [102, 86, 20], [114, 78, 28], [126, 70, 36]].map(([x, y, h]) => (
        <rect key={x} x={x} y={y} width="8" height={h} rx="1.5" fill="#22a058" />
      ))}
      <polyline points="88,88 104,80 116,72 132,60" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="170" cy="70" r="16" fill="#3b82f6" />
      <path d="M170 70 L170 54 A16 16 0 0 1 186 70 Z" fill="#f7861c" />
      <path d="M170 70 L186 70 A16 16 0 0 1 176 85 Z" fill="#22c55e" />
      <rect x="150" y="94" width="40" height="5" rx="2.5" fill="#e2e8f0" />
    </g>
    <path d="M52 128 L202 116 L214 124 L62 138 Z" fill="#2b4fa8" />
    {/* plant */}
    <path d="M30 128 h26 l-4 26 h-18 Z" fill="#f1f3f6" stroke="#dde2ea" strokeWidth="1.5" />
    <path d="M43 128 C34 112 22 110 18 100 C30 100 40 110 43 128 Z" fill="#4caf50" />
    <path d="M43 128 C44 110 52 100 62 96 C62 110 54 120 43 128 Z" fill="#5cbf5f" />
    <path d="M43 128 C40 112 40 100 44 88 C50 100 49 114 43 128 Z" fill="#2e7d32" />
    {/* calculator */}
    <g transform="rotate(8 196 140)">
      <rect x="172" y="108" width="50" height="64" rx="7" fill="#1e3a8a" />
      <rect x="178" y="114" width="38" height="13" rx="3" fill="#bfe7cf" />
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
        <rect key={`${r}${c}`} x={179 + c * 13} y={132 + r * 12} width="10" height="8" rx="2" fill={c === 2 && r === 2 ? '#f7861c' : '#4f6fd1'} />
      )))}
    </g>
  </svg>
);
