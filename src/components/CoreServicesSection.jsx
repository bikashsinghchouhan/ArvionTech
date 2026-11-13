import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSchool, FaUserTie, FaStamp, FaCalculator, FaArrowRight } from 'react-icons/fa';

import { SchoolIllustration, PayrollIllustration, StatutoryIllustration, AccountingIllustration } from './CoreServicesIllustrations';

// One colour theme per service: card tint, icon/title colour, button colours
const services = [
  {
    title: ['School', 'Management'],
    desc: 'Complete ERP platform for schools and colleges.',
    icon: FaSchool,
    Art: SchoolIllustration,
    cta: 'Explore School ERP',
    path: '/services/school-management',
    theme: {
      card: 'from-[#eaf2ff] to-[#f6f9ff] border-blue-100',
      accent: 'text-[#1747a6]',
      button: 'border-[#1747a6] text-[#1747a6] hover:bg-[#1747a6] hover:text-white',
    },
  },
  {
    title: ['Payroll', 'Outsourcing'],
    desc: 'Global-compliant payroll and employee systems.',
    icon: FaUserTie,
    Art: PayrollIllustration,
    cta: 'Explore Payroll',
    path: '/services/outsourcing',
    theme: {
      card: 'from-[#fff1e6] to-[#fff8f2] border-orange-100',
      accent: 'text-[#ea6a0c]',
      button: 'border-[#ea6a0c] text-[#ea6a0c] hover:bg-[#ea6a0c] hover:text-white',
    },
  },
  {
    title: ['Statutory', 'Registrations'],
    desc: 'Entity setups, tax registrations, & compliance.',
    icon: FaStamp,
    Art: StatutoryIllustration,
    cta: 'Explore Compliance',
    path: '/services/statutory-registrations',
    theme: {
      card: 'from-[#f1edff] to-[#f8f6ff] border-violet-100',
      accent: 'text-[#6d3fc7]',
      button: 'border-[#6d3fc7] text-[#6d3fc7] hover:bg-[#6d3fc7] hover:text-white',
    },
  },
  {
    title: ['Accounting', 'Services'],
    desc: 'Expert bookkeeping, reporting, and consulting.',
    icon: FaCalculator,
    Art: AccountingIllustration,
    cta: 'Explore Accounting',
    path: '/services/accounting',
    theme: {
      card: 'from-[#e9f8ee] to-[#f5fcf7] border-green-100',
      accent: 'text-[#178a3f]',
      button: 'border-[#178a3f] text-[#178a3f] hover:bg-[#178a3f] hover:text-white',
    },
  },
];

const CoreServicesSection = () => (
  <section id="features" className="scroll-mt-24 py-10 sm:py-14 px-4 sm:px-6 lg:px-10 bg-white">
    <div className="max-w-7xl mx-auto">
      {/* Heading with side lines */}
      <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
        <span aria-hidden="true" className="hidden sm:block h-[3px] w-16 lg:w-24 rounded-full bg-gradient-to-r from-transparent to-[#f7941d]" />
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f2a6b] text-center">
          Our Core Services
        </h2>
        <span aria-hidden="true" className="hidden sm:block h-[3px] w-16 lg:w-24 rounded-full bg-gradient-to-l from-transparent to-[#f7941d]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {services.map(({ title, desc, icon: Icon, Art, cta, path, theme }, i) => (
          <motion.article
            key={path}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className={`group flex flex-col items-center text-center rounded-2xl border bg-gradient-to-b ${theme.card} p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
          >
            <Icon aria-hidden="true" className={`text-[34px] ${theme.accent}`} />

            <h3 className="mt-3 text-[20px] sm:text-[22px] font-extrabold leading-tight text-[#0f2a6b]">
              {title[0]}<br />{title[1]}
            </h3>

            <p className="mt-2 text-[14px] text-slate-700 leading-snug max-w-[220px]">
              {desc}
            </p>

            <div className="mt-4 w-full aspect-[22/15] transition-transform duration-500 group-hover:scale-105">
              <Art />
            </div>

            <Link
              to={path}
              className={`mt-5 inline-flex items-center justify-center gap-2 w-full h-11 rounded-lg border-2 bg-white font-bold text-[14px] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 ${theme.button}`}
            >
              {cta} <FaArrowRight className="text-xs" />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CoreServicesSection;
