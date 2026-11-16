// "Security & Cloud Technology" section, shared by the Home and Payroll pages.
// variant="dark": slim navy band (Home). variant="light": white section with soft cards (Payroll).
// Pass `items` to change the wording per page; the icons follow the order below.
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCog, DatabaseBackup, Cloud, KeyRound } from 'lucide-react';

const ICONS = [ShieldCheck, UserCog, DatabaseBackup, Cloud, KeyRound];

const reveal = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } };
const list = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } };

const SecurityHighlights = ({
  variant = 'light',
  eyebrow = 'Security & Cloud Technology',
  title,
  desc,
  items,
  id,
  tint = false, // light variant only: pale blue section background with white cards
}) => {
  const dark = variant === 'dark';

  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={`relative overflow-hidden w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 scroll-mt-24 ${
        dark ? 'bg-gradient-to-br from-[#0a2766] via-[#0e3480] to-[#14409a] text-white' : tint ? 'bg-[#f4f8fe] border-y border-blue-50' : 'bg-white'
      }`}
    >
      {dark && (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-[#f7861c]/10 blur-3xl" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto">
        <motion.div {...reveal} variants={item} className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
          <span
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] ${
              dark ? 'bg-white/10 text-[#ffb46b] ring-1 ring-white/15' : 'bg-blue-50 text-[#1747a6] ring-1 ring-blue-100'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> {eyebrow}
          </span>
          <h2
            id={id ? `${id}-title` : undefined}
            className={`mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight ${dark ? 'text-white' : 'text-[#0B1B3D]'}`}
          >
            {title}
          </h2>
          {desc && (
            <p className={`mt-2.5 text-[15px] sm:text-base leading-relaxed ${dark ? 'text-blue-100/85' : 'text-slate-600'}`}>{desc}</p>
          )}
        </motion.div>

        <motion.ul
          {...reveal}
          variants={list}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 list-none m-0 p-0"
        >
          {items.map(({ title: t, desc: d }, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.li
                key={t}
                variants={item}
                // Last card spans both columns on phones so the 5th item doesn't sit alone on the left
                className={`${i === items.length - 1 ? 'col-span-2 sm:col-span-1' : ''} rounded-2xl p-4 sm:p-5 transition-all duration-300 ${
                  dark
                    ? 'bg-white/[0.06] ring-1 ring-white/10 hover:bg-white/[0.1]'
                    : `${tint ? 'bg-white' : 'bg-[#f8faff]'} ring-1 ring-slate-200/80 hover:ring-blue-200 hover:shadow-[0_12px_28px_-18px_rgba(15,42,107,.35)] hover:-translate-y-0.5`
                }`}
              >
                <span
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    dark ? 'bg-[#f7861c] text-white shadow-lg shadow-orange-900/30' : 'bg-white text-[#1747a6] ring-1 ring-blue-100 shadow-sm'
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className={`mt-3 text-[15px] font-bold leading-snug ${dark ? 'text-white' : 'text-[#0B1B3D]'}`}>{t}</h3>
                <p className={`mt-1 text-[13px] leading-relaxed ${dark ? 'text-blue-100/75' : 'text-slate-600'}`}>{d}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default SecurityHighlights;
