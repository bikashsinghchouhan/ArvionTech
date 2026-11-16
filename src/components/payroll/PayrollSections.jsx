// Payroll page sections: statutory compliance grid and the two accordion showcases
// (HR records / documents, and employee benefits).
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Percent, Scale, HandCoins, PiggyBank, ShieldPlus,
  FolderOpen, FileText, UserPlus, HeartPulse, Landmark, Headset,
  ChevronDown, CircleCheck,
} from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const inView = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } };

// Same heading pattern as the other Payroll sections: pill, title (one part highlighted), line of text
const SectionHeading = ({ pill, pillTone = 'orange', before = '', highlight, after = '', desc }) => (
  <motion.div {...inView} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${
        pillTone === 'blue' ? 'bg-blue-100/70 border-blue-200 text-[#1747a6]' : 'bg-orange-50 border-orange-200 text-[#FF7A00]'
      }`}
    >
      {pill}
    </span>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight mb-4">
      {before}<span className="text-[#FF7A00]">{highlight}</span>{after}
    </h2>
    {desc && <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{desc}</p>}
  </motion.div>
);

/* ------------------------------------------------------------------ Compliance */
const complianceItems = [
  { Icon: Percent, title: 'Professional Tax (PT)', desc: 'State-wise PT slabs applied, deducted every month and returns filed on time in every state you operate in.' },
  { Icon: Scale, title: 'Labour Law Compliance', desc: 'Central and state labour law amendments monitored by our team and applied to your payroll before each effective date.' },
  { Icon: HandCoins, title: 'Labour Welfare Fund (LWF)', desc: 'Employee and employer LWF contributions worked out per state rules and paid by the due dates.' },
  { Icon: PiggyBank, title: 'Provident Fund (PF)', desc: 'UAN creation, monthly ECR filing and challan payment, plus help with employee PF transfers and claims.' },
  { Icon: ShieldPlus, title: 'Employee State Insurance (ESI)', desc: 'ESI registration for eligible staff, with monthly contributions and returns filed accurately and on time.' },
];

export const ComplianceGrid = () => (
  <section id="compliance" className="py-8 sm:py-10 px-4 sm:px-6 w-full bg-white scroll-mt-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        pill="Statutory Compliance"
        before="Every Statutory Rule, "
        highlight="Handled On Time"
        desc="Every statutory deduction, payment and return handled by our team, so penalties and notices never reach your desk."
      />

      {/* Flex-wrap so the second row (2 cards) stays centred under the first (3 cards) */}
      <motion.ul {...inView} variants={stagger} className="flex flex-wrap justify-center gap-4 sm:gap-5 list-none m-0 p-0">
        {complianceItems.map(({ Icon, title, desc }) => (
          <motion.li whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
            key={title}
            variants={fadeUp}
            className="group w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] rounded-2xl bg-[#f8faff] ring-1 ring-slate-200/80 p-6 sm:p-7 text-center hover:bg-white hover:ring-orange-200 hover:shadow-[0_14px_32px_-20px_rgba(15,42,107,.4)] transition-[box-shadow,border-color,background-color,color] duration-300"
          >
            <span className="mx-auto w-14 h-14 rounded-2xl bg-white ring-1 ring-orange-100 text-[#FF7A00] shadow-sm flex items-center justify-center group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
              <Icon className="w-7 h-7" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-[#0B1B3D] leading-snug">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

/* ---------------------------------------------------------- Accordion showcase */
// Left: accordion (one item open at a time). Right: a panel that shows the open item's
// icon and key points, so the visual always matches what the visitor is reading.
const AccordionShowcase = ({ id, heading, items, tint = false, panelSide = 'right' }) => {
  const [open, setOpen] = useState(0);
  const active = items[open] ?? items[0];
  const ActiveIcon = active.Icon;

  return (
    <section
      id={id}
      className={`py-8 sm:py-10 px-4 sm:px-6 w-full scroll-mt-24 ${tint ? 'bg-[#f4f8fe] border-y border-blue-50' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading {...heading} />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Accordion */}
          <motion.div {...inView} variants={fadeUp} className={panelSide === 'left' ? 'lg:order-2' : ''}>
            <ul className="list-none m-0 p-0 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_12px_32px_-24px_rgba(15,42,107,.35)] divide-y divide-slate-100 overflow-hidden">
              {items.map(({ Icon, title, desc }, i) => {
                const isOpen = open === i;
                const panelId = `${id}-panel-${i}`;
                return (
                  <li key={title}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className={`w-full flex items-center gap-3.5 px-5 sm:px-6 py-4 sm:py-5 text-left transition-colors focus:outline-none focus-visible:bg-slate-50 ${isOpen ? 'bg-[#fffaf5]' : 'hover:bg-slate-50'}`}
                    >
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-[#FF7A00] text-white' : 'bg-blue-50 text-[#1747a6]'}`}>
                        <Icon className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                      </span>
                      <span className="flex-1 text-base sm:text-lg font-bold text-[#0B1B3D]">{title}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FF7A00]' : 'text-slate-400'}`} aria-hidden="true" />
                    </button>
                    <div
                      id={panelId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 sm:px-6 pb-5 pl-[4.375rem] sm:pl-[4.625rem] text-sm sm:text-[15px] text-slate-600 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Visual panel (hidden on phones: the accordion already says it all) */}
          <motion.div {...inView} variants={fadeUp} aria-hidden="true" className={`hidden sm:block ${panelSide === 'left' ? 'lg:order-1' : ''}`}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a2766] via-[#0e3480] to-[#14409a] p-8 lg:p-10 min-h-[340px] flex items-center justify-center">
              <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full border-[28px] border-white/5" />
              <div className="pointer-events-none absolute -bottom-20 -left-12 w-56 h-56 rounded-full bg-[#FF7A00]/15 blur-2xl" />
              <div className="pointer-events-none absolute top-8 left-8 w-20 h-14 opacity-40 bg-[radial-gradient(#9fb8ea_1.5px,transparent_1.5px)] [background-size:12px_12px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative w-full max-w-sm"
                >
                  <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-black/20">
                    <div className="flex items-center gap-4">
                      <span className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF7A00] ring-1 ring-orange-100 flex items-center justify-center">
                        <ActiveIcon className="w-7 h-7" strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1747a6]">Handled by Arvion</p>
                        <p className="text-lg font-extrabold text-[#0B1B3D] leading-snug">{active.title}</p>
                      </div>
                    </div>
                    <ul className="mt-5 grid gap-2.5 list-none m-0 p-0">
                      {active.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5 rounded-lg bg-[#f8faff] px-3 py-2.5 text-sm font-medium text-slate-700">
                          <CircleCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.4} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------------------------- HR records & documents */
export const HrRecordsShowcase = () => (
  <AccordionShowcase
    id="hr-records"
    tint
    heading={{
      pill: 'HR Administration',
      pillTone: 'blue',
      before: 'Employee Records, ',
      highlight: 'Organised for You',
      desc: 'From joining day to the last working day, our payroll team keeps every employee record and document in order.',
    }}
    items={[
      {
        Icon: FolderOpen,
        title: 'HR Record Keeping',
        desc: 'One organised digital record per employee: personal details, job history, salary revisions and bank and statutory details, always up to date.',
        points: ['Personal & job details', 'Salary revision history', 'Bank, PAN, UAN & ESI numbers'],
      },
      {
        Icon: FileText,
        title: 'Document Management',
        desc: 'Offer and appointment letters, payslips, Form 16 and policy documents generated and stored securely, ready to share or download.',
        points: ['Letters & payslips generated', 'Form 16 for every employee', 'Stored securely, easy to find'],
      },
      {
        Icon: UserPlus,
        title: 'Onboarding & Exits',
        desc: 'New joiner data collection and statutory registrations on day one, and full & final settlement with relieving documents at exit.',
        points: ['Joiner data & registrations', 'Full & final settlement', 'Relieving & experience letters'],
      },
    ]}
  />
);

/* ---------------------------------------------------------- Employee benefits */
export const EmployeeBenefits = () => (
  <AccordionShowcase
    id="benefits"
    panelSide="left"
    heading={{
      pill: 'Benefits Administration',
      before: 'Happier Teams with ',
      highlight: 'Better Benefits',
      desc: 'Help your team feel looked after while we take care of the administration behind every benefit.',
    }}
    items={[
      {
        Icon: HeartPulse,
        title: 'Health Insurance Enrolment',
        desc: 'Add employees and their dependants to group health cover, and manage monthly additions, deletions and premium deductions.',
        points: ['Employee & dependant enrolment', 'Monthly additions & deletions', 'Premiums reflected in payroll'],
      },
      {
        Icon: Landmark,
        title: 'Retirement Benefits',
        desc: 'PF, gratuity and NPS contributions calculated correctly and shown clearly on payslips and in Form 16.',
        points: ['PF & NPS contributions', 'Gratuity calculation', 'Shown on payslips & Form 16'],
      },
      {
        Icon: Headset,
        title: 'Employee Support Desk',
        desc: 'A dedicated helpdesk answers employee questions on salary, tax and benefits, so your HR team is not flooded with queries.',
        points: ['Salary & tax queries answered', 'Investment proof guidance', 'Less load on your HR team'],
      },
    ]}
  />
);
