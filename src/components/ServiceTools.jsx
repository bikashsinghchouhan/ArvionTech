// Comparison table and the interactive Registration Finder used on the service pages.
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { SectionHeading } from './ServiceSections';

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 } };

/* Side-by-side comparison. Table on md+ screens, one card per option on mobile.
   columns: [{ name, tag?, highlight? }], rows: [{ label, values: [...] }] (one value per column) */
export const CompareTable = ({ pill = 'Compare', title, highlight, desc, columns, rows, note }) => (
  <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="max-w-6xl mx-auto">
      <SectionHeading pill={pill} title={title} highlight={highlight} desc={desc} />

      {/* Desktop / tablet table */}
      <motion.div {...reveal} transition={{ duration: 0.5 }} className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-[0_10px_30px_-18px_rgba(11,42,107,.35)]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th scope="col" className="bg-[#0b1f4d] text-white text-[13px] font-bold px-4 py-3 w-[22%]">&nbsp;</th>
              {columns.map((c) => (
                <th key={c.name} scope="col" className={`px-4 py-3 text-[14px] font-extrabold text-white ${c.highlight ? 'bg-[#f2700f]' : 'bg-[#1747a6]'}`}>
                  {c.name}
                  {c.tag && <span className="block text-[11px] font-semibold opacity-85">{c.tag}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={r.label} className={ri % 2 ? 'bg-[#f8fafd]' : 'bg-white'}>
                <th scope="row" className="px-4 py-3 text-[13px] font-bold text-[#0b1f4d] align-top border-t border-slate-100">{r.label}</th>
                {r.values.map((v, ci) => (
                  <td key={ci} className={`px-4 py-3 text-[13px] leading-snug align-top border-t border-slate-100 ${columns[ci].highlight ? 'bg-orange-50/60 font-semibold text-[#0b1f4d]' : 'text-slate-600'}`}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-3">
        {columns.map((c, ci) => (
          <motion.div key={c.name} {...reveal} transition={{ duration: 0.4 }} className={`rounded-2xl border overflow-hidden ${c.highlight ? 'border-orange-200' : 'border-slate-200'}`}>
            <div className={`px-4 py-2.5 text-white ${c.highlight ? 'bg-[#f2700f]' : 'bg-[#1747a6]'}`}>
              <h3 className="text-[14px] font-extrabold leading-snug">{c.name}</h3>
              {c.tag && <p className="text-[11px] opacity-85">{c.tag}</p>}
            </div>
            <dl className="m-0 divide-y divide-slate-100 bg-white">
              {rows.map((r) => (
                <div key={r.label} className="px-4 py-2 grid grid-cols-[40%_60%] gap-2">
                  <dt className="text-[11px] font-bold text-[#0b1f4d]">{r.label}</dt>
                  <dd className="m-0 text-[12px] text-slate-600 leading-snug">{r.values[ci]}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        ))}
      </div>

      {note && <p className="mt-4 sm:mt-6 text-center text-[11px] sm:text-[13px] text-slate-500">{note}</p>}
    </div>
  </section>
);

/* ------------------------------------------------------------------------ */
/* Registration Finder: a few questions -> list of registrations, with reasons */

const FINDER_TYPES = [
  { value: 'startup', label: 'Startup company (may raise funds)' },
  { value: 'food', label: 'Restaurant, cafe or food business' },
  { value: 'trade', label: 'Shop, retail or wholesale trading' },
  { value: 'impex', label: 'Import or export business' },
  { value: 'mfg', label: 'Manufacturing unit' },
  { value: 'freelance', label: 'Freelancer, consultant or agency' },
];
const FINDER_SELLS = [
  { value: 'services', label: 'Services' },
  { value: 'goods', label: 'Goods (products)' },
];
const FINDER_TURNOVER = [
  { value: 'lt20', label: 'Under ₹20 lakh' },
  { value: '20to40', label: '₹20 lakh to ₹40 lakh' },
  { value: 'gt40', label: 'Above ₹40 lakh' },
];
const FINDER_STAFF = [
  { value: '0', label: 'No employees' },
  { value: '1', label: '1 to 9' },
  { value: '10', label: '10 to 19' },
  { value: '20', label: '20 or more' },
];

// Builds the result list. Uses the general central thresholds; state rules can differ.
const findRegistrations = ({ type, sells, turnover, staff, online }) => {
  const out = [];
  const add = (name, level, why) => out.push({ name, level, why });

  if (type === 'startup') {
    add('Company Incorporation', 'Required', 'A private limited company can issue shares, which investors need.');
    add('DSC & DIN', 'Required', 'Directors need these to sign incorporation and later MCA filings.');
  }
  if (type === 'freelance') add('Proprietorship Setup', 'Recommended', 'Gives you a business identity and a current account in your business name.');
  if (type === 'food') add('FSSAI Registration / Licence', 'Required', 'Every food business must hold FSSAI registration or a licence.');
  if (type === 'impex') add('Import Export Code (IEC)', 'Required', 'Needed to import or export goods and clear customs.');

  const gstByTurnover = sells === 'goods' ? turnover === 'gt40' : turnover !== 'lt20';
  if (gstByTurnover) add('GST Registration', 'Required', 'Your turnover is above the GST limit that applies in most states.');
  else if (sells === 'goods' && online) add('GST Registration', 'Required', 'Selling goods to other states or through online marketplaces needs GST, whatever the turnover.');
  else add('GST Registration', 'Optional', 'Below the limit, but registering lets you claim input tax credit and sell to GST-registered buyers.');

  if (type !== 'freelance' || staff > 0) add('Shop & Establishment', 'Required', 'Shops, offices and commercial premises register under the state Shop & Establishment Act.');
  if (['food', 'trade', 'mfg'].includes(type)) add('Trade Licence', 'Required', 'Most municipal bodies require it for commercial activity in their area.');
  if (staff > 0) add('Professional Tax', 'Required', 'Employers deduct and pay PT on salaries in states that levy it.');
  if (staff >= 10) add('ESI Registration', 'Required', 'Applies at 10 or more employees in notified areas, for employees within the wage limit.');
  if (staff >= 20) add('PF Registration', 'Required', 'Mandatory once you have 20 or more employees.');

  add('MSME / Udyam Registration', 'Recommended', 'Free, and opens priority-sector loans and protection against delayed payments.');
  if (type === 'startup') add('Startup India (DPIIT)', 'Recommended', 'Unlocks tax benefits, easier compliance and government funding schemes.');
  if (type !== 'freelance') add('Trademark Registration', 'Recommended', 'Protects your brand name and logo from being copied.');
  return out;
};

const levelStyle = {
  Required: 'bg-[#e7f8ee] text-[#15803d]',
  Recommended: 'bg-[#eef3fd] text-[#1747a6]',
  Optional: 'bg-slate-100 text-slate-600',
};

const FinderSelect = ({ id, label, value, onChange, options }) => (
  <label htmlFor={id} className="flex flex-col gap-1">
    <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wide text-slate-500">{label}</span>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 sm:py-2.5 text-[13px] sm:text-[14px] font-semibold text-[#0b1f4d] focus:outline-none focus:ring-2 focus:ring-[#1747a6]/30 cursor-pointer"
    >
      {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  </label>
);

export const RegistrationFinder = () => {
  const [type, setType] = useState('startup');
  const [sells, setSells] = useState('services');
  const [turnover, setTurnover] = useState('lt20');
  const [staff, setStaff] = useState('0');
  const [online, setOnline] = useState(false);
  const results = findRegistrations({ type, sells, turnover, staff: Number(staff), online });
  const needed = results.filter((r) => r.level !== 'Optional').length;

  return (
    <section id="registration-finder" className="scroll-mt-24 w-full bg-gradient-to-b from-[#f6f9ff] to-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          pill="Free Tool"
          title="Find Your"
          highlight="Registrations"
          desc="Answer a few quick questions to see which registrations your business needs."
        />
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr] gap-4 sm:gap-6 items-start">
          {/* Questions */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_10px_30px_-18px_rgba(11,42,107,.35)] p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
            <FinderSelect id="rf-type" label="Your business" value={type} onChange={setType} options={FINDER_TYPES} />
            <FinderSelect id="rf-sells" label="You mainly sell" value={sells} onChange={setSells} options={FINDER_SELLS} />
            <FinderSelect id="rf-turnover" label="Expected yearly turnover" value={turnover} onChange={setTurnover} options={FINDER_TURNOVER} />
            <FinderSelect id="rf-staff" label="Employees" value={staff} onChange={setStaff} options={FINDER_STAFF} />
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input type="checkbox" checked={online} onChange={(e) => setOnline(e.target.checked)} className="mt-0.5 w-4 h-4 accent-[#1747a6] cursor-pointer" />
              <span className="text-[12px] sm:text-[13px] font-semibold text-[#0b1f4d] leading-snug">I sell to other states or through online marketplaces</span>
            </label>
          </div>

          {/* Results */}
          <div className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-6" aria-live="polite">
            <h3 className="text-[14px] sm:text-[17px] font-extrabold text-[#0b1f4d]">
              You may need <span className="text-[#f2700f]">{needed} registrations</span>
            </h3>
            <ul className="list-none m-0 p-0 mt-2 sm:mt-3 flex flex-col divide-y divide-slate-100">
              {results.map((r) => (
                <li key={r.name} className="py-2 sm:py-2.5 flex items-start gap-2.5">
                  <FaCheckCircle className="text-[#16a34a] mt-0.5 flex-shrink-0 text-sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-[13px] sm:text-[14px] font-bold text-[#0b1f4d]">{r.name}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${levelStyle[r.level]}`}>{r.level}</span>
                    </div>
                    <p className="text-[11px] sm:text-[12px] text-slate-500 leading-snug mt-0.5">{r.why}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
              <p className="text-[11px] text-slate-500 leading-snug">General guidance only. Limits and rules differ by state and activity.</p>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-lg bg-[#FF7A00] hover:bg-[#E66E00] text-white text-[13px] font-bold whitespace-nowrap no-underline transition-colors">
                Get These Done <FaArrowRight className="text-[11px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
