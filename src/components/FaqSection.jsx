// FAQ section: pill + heading (highlighted word with underline swoosh), FAQ illustration on the left,
// accordion on the right where each question has its own icon. The first item starts open.
import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } };

/* Clipboard with "FAQ", ticks, question bubble, books, calculator and a plant */
const FaqIllustration = () => (
  <svg viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto">
    <defs>
      <linearGradient id="faqBoard" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#3b6fd8" />
        <stop offset="1" stopColor="#1f4fb5" />
      </linearGradient>
      <linearGradient id="faqBubble" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffa94d" />
        <stop offset="1" stopColor="#f2700f" />
      </linearGradient>
      <linearGradient id="faqCalc" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#3654a8" />
        <stop offset="1" stopColor="#1e3478" />
      </linearGradient>
    </defs>

    {/* soft background blob + floor shadow */}
    <circle cx="230" cy="215" r="175" fill="#e6eefc" />
    <ellipse cx="235" cy="392" rx="190" ry="16" fill="#dbe5f6" />

    {/* clipboard */}
    <rect x="118" y="78" width="210" height="270" rx="18" fill="url(#faqBoard)" transform="rotate(-6 223 213)" />
    <rect x="134" y="98" width="178" height="236" rx="10" fill="#ffffff" transform="rotate(-6 223 213)" />
    <g transform="rotate(-6 223 213)">
      <rect x="182" y="72" width="82" height="30" rx="10" fill="#2d5fc4" />
      <circle cx="223" cy="70" r="13" fill="none" stroke="#2d5fc4" strokeWidth="7" />
      <text x="168" y="168" fontSize="46" fontWeight="900" fill="#0f2a6b" fontFamily="Arial, sans-serif">FAQ</text>
      {[200, 240, 280].map((y) => (
        <g key={y}>
          <circle cx="166" cy={y} r="13" fill="#f7941d" />
          <path d={`M159 ${y} l5 5 l9 -10`} stroke="#ffffff" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="190" y={y - 9} width="96" height="7" rx="3.5" fill="#cfdbf2" />
          <rect x="190" y={y + 3} width="70" height="7" rx="3.5" fill="#dfe7f6" />
        </g>
      ))}
    </g>

    {/* question bubble */}
    <path d="M318 62 a52 52 0 1 1 22 98 l-6 22 l-16 -20 a52 52 0 0 1 0 -100 Z" fill="url(#faqBubble)" />
    <text x="336" y="134" textAnchor="middle" fontSize="64" fontWeight="900" fill="#ffffff" fontFamily="Arial, sans-serif">?</text>

    {/* plant */}
    <path d="M70 330 h56 l-7 52 h-42 Z" fill="#f1f3f6" stroke="#dde2ea" strokeWidth="2" />
    <path d="M98 330 C80 300 58 300 46 282 C70 280 92 296 98 330 Z" fill="#4caf50" />
    <path d="M98 330 C100 296 116 276 136 268 C134 294 120 316 98 330 Z" fill="#5cbf5f" />
    <path d="M98 330 C92 300 92 276 100 252 C110 276 108 304 98 330 Z" fill="#2e7d32" />
    <path d="M98 330 C86 314 70 314 56 316 C72 302 90 308 98 330 Z" fill="#43a047" />

    {/* books */}
    <rect x="150" y="352" width="140" height="26" rx="6" fill="#f7861c" />
    <rect x="156" y="358" width="128" height="14" rx="3" fill="#fff4e8" />
    <rect x="160" y="326" width="130" height="26" rx="6" fill="#2d5fc4" />
    <rect x="166" y="332" width="118" height="14" rx="3" fill="#eef3fd" />

    {/* calculator */}
    <g transform="rotate(10 350 320)">
      <rect x="300" y="250" width="100" height="134" rx="14" fill="url(#faqCalc)" />
      <rect x="314" y="264" width="72" height="26" rx="5" fill="#cfe0ff" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => (
          <rect key={`${r}${c}`} x={314 + c * 25} y={300 + r * 20} width="19" height="14" rx="3" fill={c === 2 && r > 1 ? '#f7941d' : '#5c79c9'} />
        ))
      )}
    </g>
  </svg>
);

/**
 * props:
 *  before / highlight: heading text (highlight shown in orange with an underline swoosh)
 *  desc: line under the heading
 *  items: [{ q, a, Icon }]
 */
const FaqSection = ({ before = 'Frequently Asked ', highlight = 'Questions', desc, items }) => (
  <section id="faq" className="relative w-full overflow-hidden scroll-mt-24 bg-gradient-to-b from-[#f6f9ff] to-white px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-7 sm:pb-14">
    {/* corner decorations */}
    <svg aria-hidden="true" className="pointer-events-none absolute top-0 left-0 w-[34%] max-w-[420px] h-auto" viewBox="0 0 560 170" fill="none">
      <path d="M0 0 H380 C300 40 200 70 120 110 C70 135 30 150 0 170 Z" fill="#e8f0fc" />
      <path d="M0 120 C90 115 170 80 250 40 C290 20 330 6 380 0 L330 0 C280 10 230 30 180 55 C110 92 50 108 0 112 Z" fill="#f7861c" />
    </svg>
    {/* bottom-right: same swoosh as top-left, turned 180° */}
    <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[34%] max-w-[420px] h-auto rotate-180" viewBox="0 0 560 170" fill="none">
      <path d="M0 0 H380 C300 40 200 70 120 110 C70 135 30 150 0 170 Z" fill="#e8f0fc" />
      <path d="M0 120 C90 115 170 80 250 40 C290 20 330 6 380 0 L330 0 C280 10 230 30 180 55 C110 92 50 108 0 112 Z" fill="#f7861c" />
    </svg>

    <div className="relative max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div {...reveal} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center mb-8 sm:mb-10">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="w-10 sm:w-16 h-[2px] rounded-full bg-[#f7941d]/80" />
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffe9d6] border border-[#ffd3ad] text-[#e8730c] text-[15px] font-extrabold">
            <span className="w-6 h-6 rounded-full bg-[#f2700f] text-white flex items-center justify-center text-[14px] font-black">?</span>
            FAQ
          </span>
          <span aria-hidden="true" className="w-10 sm:w-16 h-[2px] rounded-full bg-[#f7941d]/80" />
        </div>
        <h2 className="mt-4 text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold tracking-tight leading-tight text-[#0b1f4d]">
          {before}
          <span className="relative inline-block text-[#f2700f]">
            {highlight}
            <svg aria-hidden="true" viewBox="0 0 200 14" preserveAspectRatio="none" className="absolute left-[8%] -bottom-2 sm:-bottom-3 w-[92%] h-2.5 sm:h-3.5 text-[#f2700f]">
              <path d="M2 11 C 60 3, 140 2, 198 7" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
        {desc && <p className="mt-5 text-[15px] sm:text-[18px] text-slate-600">{desc}</p>}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-12 items-center">
        {/* Illustration */}
        <motion.div {...reveal} transition={{ duration: 0.6 }} className="w-full max-w-sm sm:max-w-md mx-auto">
          <FaqIllustration />
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {items.map(({ q, a, Icon }, i) => (
            <motion.details
              key={q}
              {...reveal}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              open={i === 0}
              className="group rounded-2xl bg-white border border-slate-200 shadow-[0_1px_3px_rgba(11,42,107,.06)] hover:border-slate-300 open:bg-[#fff7f0] open:border-[#f7b27a] transition-colors"
            >
              <summary className="flex items-center gap-4 cursor-pointer list-none px-4 sm:px-6 py-4 [&::-webkit-details-marker]:hidden">
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#eef3fd] text-[#1f5fbf] group-open:bg-[#ffe3c7] group-open:text-[#f2700f] transition-colors">
                  {Icon && <Icon className="text-[18px] sm:text-[20px]" />}
                </span>
                <span className="flex-1 text-[15px] sm:text-[18px] font-bold text-[#0b1f4d] leading-snug">{q}</span>
                <FaChevronDown className="flex-shrink-0 text-slate-500 group-open:text-[#f2700f] group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="mx-4 sm:mx-6 border-t border-[#f7c9a0]/70" />
              <p className="px-4 sm:px-6 pt-3 pb-5 text-[14px] sm:text-[16px] text-slate-600 leading-relaxed">{a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FaqSection;
