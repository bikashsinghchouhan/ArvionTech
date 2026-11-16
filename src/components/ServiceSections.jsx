// Extra content sections shared by the service pages (Statutory Registrations, Accounting).
// Each section takes its own data, so a page only passes titles, items and icons.
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 } };

// Pill + heading with one highlighted word + optional description (same look as the FAQ section)
export const SectionHeading = ({ pill, title, highlight, desc }) => (
  <motion.div {...reveal} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center mb-6 sm:mb-10">
    <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#ffe9d6] border border-[#ffd3ad] text-[#e8730c] text-[11px] sm:text-[13px] font-extrabold uppercase tracking-wide">
      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#f2700f]" />
      {pill}
    </span>
    <h2 className="mt-3 text-[22px] sm:text-[32px] lg:text-[38px] font-extrabold tracking-tight leading-tight text-[#0b1f4d]">
      {title} {highlight && <span className="text-[#f2700f]">{highlight}</span>}
    </h2>
    {desc && <p className="mt-2 sm:mt-4 max-w-2xl text-[13px] sm:text-[16px] text-slate-600 leading-relaxed">{desc}</p>}
  </motion.div>
);

/* Numbered steps: how the service works from first call to delivery */
export const ProcessSteps = ({ pill = 'How It Works', title, highlight, desc, steps }) => (
  <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="max-w-7xl mx-auto">
      <SectionHeading pill={pill} title={title} highlight={highlight} desc={desc} />
      <ol className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {steps.map(({ Icon, title: stepTitle, desc: stepDesc }, idx) => (
          <motion.li
            key={stepTitle}
            {...reveal}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="relative bg-[#f8fafd] rounded-2xl border border-slate-100 p-4 sm:p-6 flex sm:flex-col gap-3 sm:gap-4 hover:border-orange-200 hover:shadow-lg transition-[box-shadow,border-color]"
          >
            <div className="relative flex-shrink-0">
              <span className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-[#1747a6] text-white flex items-center justify-center text-base sm:text-2xl shadow-md">
                {Icon && <Icon />}
              </span>
              <span className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#f2700f] text-white text-[10px] sm:text-[12px] font-black flex items-center justify-center ring-2 ring-white">
                {idx + 1}
              </span>
            </div>
            <div>
              <h3 className="text-[14px] sm:text-[17px] font-bold text-[#0b1f4d] leading-snug">{stepTitle}</h3>
              <p className="mt-1 sm:mt-2 text-[12px] sm:text-[13px] text-slate-500 leading-relaxed">{stepDesc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

/* Cards by business type, each listing the services it usually needs as chips */
export const NeedsGuide = ({ pill, title, highlight, desc, items }) => (
  <section className="w-full bg-gradient-to-b from-[#f6f9ff] to-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="max-w-7xl mx-auto">
      <SectionHeading pill={pill} title={title} highlight={highlight} desc={desc} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {items.map(({ Icon, who, note, needs }, idx) => (
          <motion.div
            key={who}
            {...reveal}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_24px_-16px_rgba(11,42,107,.3)] p-4 sm:p-6 hover:border-orange-200 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-orange-50 text-[#f2700f] flex items-center justify-center text-base sm:text-xl flex-shrink-0">
                {Icon && <Icon />}
              </span>
              <div>
                <h3 className="text-[14px] sm:text-[17px] font-bold text-[#0b1f4d] leading-snug">{who}</h3>
                {note && <p className="text-[11px] sm:text-[12px] text-slate-500 leading-snug">{note}</p>}
              </div>
            </div>
            <ul className="list-none m-0 p-0 mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
              {needs.map((n) => (
                <li key={n} className="px-2 sm:px-2.5 py-1 rounded-md bg-[#eef3fd] text-[#1747a6] text-[11px] sm:text-[12px] font-semibold">
                  {n}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* Grouped checklists (documents to keep ready, what is included, etc.) */
export const ChecklistGroups = ({ pill, title, highlight, desc, groups, note }) => (
  <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="max-w-7xl mx-auto">
      <SectionHeading pill={pill} title={title} highlight={highlight} desc={desc} />
      <div className={`grid grid-cols-1 gap-3 sm:gap-6 ${groups.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
        {groups.map(({ Icon, heading, items }, idx) => (
          <motion.div
            key={heading}
            {...reveal}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="rounded-2xl border border-slate-100 bg-[#f8fafd] p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-200/70">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1747a6] text-white flex items-center justify-center text-sm sm:text-base flex-shrink-0">
                {Icon && <Icon />}
              </span>
              <h3 className="text-[14px] sm:text-[16px] font-bold text-[#0b1f4d] leading-snug">{heading}</h3>
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[12px] sm:text-[14px] text-slate-600 leading-snug">
                  <FaCheckCircle className="text-[#16a34a] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      {note && <p className="mt-4 sm:mt-6 text-center text-[11px] sm:text-[13px] text-slate-500">{note}</p>}
    </div>
  </section>
);

/* Due-date list (compliance calendar): date badge + what is due */
export const DueDates = ({ pill, title, highlight, desc, rows, note }) => (
  <section className="w-full bg-gradient-to-b from-[#f6f9ff] to-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="max-w-5xl mx-auto">
      <SectionHeading pill={pill} title={title} highlight={highlight} desc={desc} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        {rows.map(({ when, what, detail }, idx) => (
          <motion.div
            key={what}
            {...reveal}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl border border-slate-100 shadow-[0_6px_18px_-14px_rgba(11,42,107,.35)] p-3 sm:p-4"
          >
            <span className="w-[78px] sm:w-[96px] flex-shrink-0 rounded-lg bg-[#1747a6] text-white text-center px-1.5 py-2 text-[11px] sm:text-[12px] font-bold leading-tight">
              {when}
            </span>
            <div className="min-w-0">
              <h3 className="text-[13px] sm:text-[15px] font-bold text-[#0b1f4d] leading-snug">{what}</h3>
              {detail && <p className="text-[11px] sm:text-[12px] text-slate-500 leading-snug">{detail}</p>}
            </div>
          </motion.div>
        ))}
      </div>
      {note && <p className="mt-4 sm:mt-6 text-center text-[11px] sm:text-[13px] text-slate-500">{note}</p>}
    </div>
  </section>
);

/* Common mistakes: what goes wrong (red) and how to avoid it (green tip) */
export const MistakesGrid = ({ pill = 'Avoid These', title, highlight, desc, items }) => (
  <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="max-w-7xl mx-auto">
      <SectionHeading pill={pill} title={title} highlight={highlight} desc={desc} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {items.map(({ mistake, fix }, idx) => (
          <motion.div
            key={mistake}
            {...reveal}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="rounded-2xl border border-slate-100 bg-[#f8fafd] p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3 hover:border-orange-200 hover:shadow-lg transition-[box-shadow,border-color]"
          >
            <div className="flex items-start gap-2.5">
              <FaTimesCircle className="text-[#e5484d] text-base sm:text-lg mt-0.5 flex-shrink-0" />
              <h3 className="text-[13px] sm:text-[15px] font-bold text-[#0b1f4d] leading-snug">{mistake}</h3>
            </div>
            <div className="flex items-start gap-2.5 rounded-xl bg-[#e7f8ee] px-3 py-2">
              <FaLightbulb className="text-[#16a34a] text-sm mt-0.5 flex-shrink-0" />
              <p className="text-[12px] sm:text-[13px] text-slate-700 leading-snug">{fix}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* Software and portals: labelled groups of name chips */
export const ToolsStrip = ({ pill, title, highlight, desc, groups }) => (
  <section className="w-full bg-gradient-to-b from-[#f6f9ff] to-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="max-w-5xl mx-auto">
      <SectionHeading pill={pill} title={title} highlight={highlight} desc={desc} />
      <div className="flex flex-col gap-4 sm:gap-6">
        {groups.map(({ Icon, heading, items }) => (
          <motion.div key={heading} {...reveal} transition={{ duration: 0.5 }} className="text-center">
            <h3 className="inline-flex items-center gap-2 text-[12px] sm:text-[14px] font-extrabold uppercase tracking-wide text-[#1747a6]">
              {Icon && <Icon />} {heading}
            </h3>
            <ul className="list-none m-0 p-0 mt-2.5 sm:mt-3 flex flex-wrap justify-center gap-2 sm:gap-3">
              {items.map((name) => (
                <li key={name} className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-[12px] sm:text-[15px] font-bold text-[#0b1f4d]">
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
