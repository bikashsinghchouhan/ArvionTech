import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRight, FaCalendarAlt, FaUserTie, FaBolt, FaShieldAlt,
  FaHeadset, FaPhoneAlt, FaCheckCircle, FaFileInvoiceDollar,
  FaCalculator, FaUniversity, FaReceipt, FaChartBar, FaChevronDown,
  FaRegQuestionCircle, FaClock
} from 'react-icons/fa';

import TestimonialSection from '../components/TestimonialSection';
import heroIllustration from '../assets/service-heroes/payroll.webp';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const PayrollPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const detailedFeatures = [
    {
      title: 'Automated Gross-to-Net Computation',
      description: 'Error-free calculation of basic pay, HRA, special allowances, overtime, incentives, and attendance-based deductions based on company policies.',
      icon: <FaCalculator className="text-[#FF7A00] text-3xl" />
    },
    {
      title: 'Statutory Compliance (PF, ESI, PT, TDS)',
      description: 'End-to-end deduction and filing for Provident Fund, Employee State Insurance, Professional Tax, TDS withholding, and Labor Welfare Fund.',
      icon: <FaShieldAlt className="text-[#FF7A00] text-3xl" />
    },
    {
      title: 'Digital Payslip Generation & Distribution',
      description: 'Automated generation and encrypted delivery of branded digital payslips directly to employee inboxes and self-service portals.',
      icon: <FaFileInvoiceDollar className="text-[#FF7A00] text-3xl" />
    },
    {
      title: 'Income Tax Declarations & Form 16',
      description: 'Seamless verification of investment proofs, tax regime selection (Old vs New), quarterly TDS returns, and one-click Form 16 generation.',
      icon: <FaReceipt className="text-[#FF7A00] text-3xl" />
    },
    {
      title: 'Direct Bank Transfer Payout Files',
      description: 'Pre-formatted NEFT/RTGS bank disbursement files compatible with all major Indian banks for seamless on-time salary processing.',
      icon: <FaUniversity className="text-[#FF7A00] text-3xl" />
    },
    {
      title: 'Comprehensive MIS & Audit Reports',
      description: 'Executive dashboards, salary registers, variance analysis, head-count reports, and audit-ready compliance summaries.',
      icon: <FaChartBar className="text-[#FF7A00] text-3xl" />
    }
  ];

  const processSteps = [
    { step: '01', title: 'Input Collection', desc: 'Secure upload of monthly attendance, new joinees, exits, and one-time variable incentives.' },
    { step: '02', title: 'Computation & Audit', desc: 'Calculation of gross-to-net salaries, statutory deductions, tax withholdings, and loan recoveries.' },
    { step: '03', title: 'Management Review', desc: 'Detailed variance reports and preview registers shared with your finance team for sign-off.' },
    { step: '04', title: 'Salary Disbursement', desc: 'Bank upload files generated for single-click salary crediting into employee accounts.' },
    { step: '05', title: 'Payslips & Statutory Filing', desc: 'Digital payslip distribution and filing of monthly PF, ESI, PT, and quarterly TDS challans.' }
  ];

  const faqs = [
    {
      q: 'What types of businesses can use Arvion Payroll Outsourcing?',
      a: 'We support schools, colleges, educational trusts, startups, SMEs, and enterprise companies across India with custom pay structures and multi-state compliance.'
    },
    {
      q: 'How do you handle multi-state Professional Tax (PT) and regional labor laws?',
      a: 'Our compliance engine is updated regularly with state-specific PT slabs, LWF rates, and local statutory amendments across all Indian states and Union Territories.'
    },
    {
      q: 'Can employees access their payslips and tax computation sheets online?',
      a: 'Yes! Employees receive password-protected digital payslips via email and can view historical payslips, tax sheets, and Form 16 via our self-service portal.'
    },
    {
      q: 'How is employee salary and banking data protected?',
      a: 'We enforce enterprise-grade 256-bit SSL encryption, strict role-based access control (RBAC), daily automated backups, and non-disclosure privacy agreements.'
    },
    {
      q: 'How long does it take to transition our existing payroll to Arvion?',
      a: 'A typical migration takes between 3 to 7 working days, including historical salary data import, employee master setup, and parallel run verification.'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans text-[#0B1B3D] overflow-x-hidden">

      {/* 1. EXACT HERO SECTION MATCHING DESIGN */}
      <section className="relative w-full overflow-hidden lg:min-h-[calc(100svh-38px)] lg:flex lg:flex-col bg-gradient-to-r from-[#eef4ff] via-[#f8fbff] to-white pt-16 border-b border-blue-50">
        {/* Photo: right side on large screens, fading into the background on its left edge */}
        <div aria-hidden="true" className="hidden lg:block absolute top-16 bottom-0 right-0 w-[56%] xl:w-[55%]">
          <img
            src={heroIllustration}
            alt=""
            width="1200"
            height="896"
            fetchPriority="high"
            className="w-full h-full object-cover object-right [mask-image:linear-gradient(to_right,transparent_0%,#000_7%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_7%)]"
          />
        </div>

        {/* Desktop Floating PAYROLL Card on top of the image */}
        <div className="hidden lg:block absolute top-20 right-6 xl:right-12 2xl:right-20 w-[275px] xl:w-[295px] z-20">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md p-3.5 xl:p-4 shadow-2xl shadow-blue-950/25 border border-slate-100 ring-1 ring-slate-900/5">
            {/* Header */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1747a6] via-[#11409d] to-[#0c2f79] px-3.5 py-2 text-white shadow-md">
              <div className="relative z-10 flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 3.34 2 5s4.48 3 10 3 10-1.34 10-3-4.48-3-10-3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3V4c0 1.66-4.48 3-10 3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3V9c0 1.66-4.48 3-10 3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3v-3c0 1.66-4.48 3-10 3z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white font-sans">
                  PAYROLL
                </span>
              </div>
              {/* Orange accent curve */}
              <svg className="absolute bottom-0 right-0 w-16 h-4 pointer-events-none" viewBox="0 0 80 20" fill="none">
                <path d="M0 20 Q 50 18, 80 0 L 80 20 Z" fill="#FF7A00" />
              </svg>
            </div>

            {/* 8 Features List with Green Checkmarks */}
            <ul className="mt-2.5 space-y-1.5">
              {[
                'Payroll Processing',
                'Payslip Generation & Distribution',
                'PF, ESI, PT, TDS & LWF Compliance',
                'Income Tax & Declarations',
                'Reimbursement & Expense Processing',
                'Arrears & Recoveries',
                'MIS & Management Reports',
                'Audit Support & Data Security'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <svg className="w-2 h-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-[11px] xl:text-[11.5px] font-semibold text-[#0B1B3D] leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Soft atmospheric gradient accents */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200/35 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/4 w-[500px] h-60 rounded-full bg-sky-100/40 blur-3xl -translate-y-1/2" />

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 relative z-10 lg:flex-1 lg:flex lg:flex-col">
          <div className="grid lg:grid-cols-2 items-center lg:flex-1">

            {/* Left Content Column */}
            <div className="w-full flex flex-col justify-center items-start text-left pt-5 pb-8 lg:pb-14 min-w-0 lg:pr-6">

              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-5">
                <Link to="/" className="hover:text-[#0B1B3D] transition-colors">Home</Link>
                <span className="text-slate-300">&gt;</span>
                <Link to="/services" className="hover:text-[#0B1B3D] transition-colors">Services</Link>
                <span className="text-slate-300">&gt;</span>
                <span className="font-bold text-[#0B1B3D]">Payroll Outsourcing</span>
              </nav>

              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-800 mb-5"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                Arvion Payroll Outsourcing
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1B3D] leading-[1.1] tracking-tight mb-4"
              >
                Payroll <span className="text-[#FF7A00]">Outsourcing</span>
              </motion.h1>

              {/* Subheading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xl sm:text-2xl font-bold text-[#0B1B3D] mb-4 leading-snug"
              >
                Accurate, Compliant &amp; Hassle-Free Payroll
              </motion.h2>

              {/* Description paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7 font-normal"
              >
                End-to-end payroll processing with statutory compliance, payslip distribution, tax management and detailed reports.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5"
                >
                  <FaCalendarAlt className="text-base" /> Request Demo
                </Link>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B1B3D] border-2 border-[#0B1B3D] font-bold text-sm sm:text-base transition-colors shadow-sm"
                >
                  Our Process <FaArrowRight className="text-xs" />
                </a>
              </motion.div>

              {/* 4 Feature Badges in a Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg mb-8"
              >
                {[
                  { title1: 'Expert', title2: 'Team', icon: <FaUserTie />, bg: 'bg-blue-50', text: 'text-blue-600' },
                  { title1: 'On-Time', title2: 'Delivery', icon: <FaBolt />, bg: 'bg-orange-50', text: 'text-[#FF7A00]' },
                  { title1: 'Data', title2: 'Security', icon: <FaShieldAlt />, bg: 'bg-blue-50', text: 'text-blue-600' },
                  { title1: 'Dedicated', title2: 'Support', icon: <FaHeadset />, bg: 'bg-orange-50', text: 'text-[#FF7A00]' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-3 border border-slate-200/70 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className={`w-9 h-9 rounded-xl ${item.bg} ${item.text} flex items-center justify-center text-sm mb-2`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-[#0B1B3D] leading-tight">
                      {item.title1}<br />{item.title2}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Talk to an Expert Callout */}
              <motion.a
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}
                href="tel:+919535764655"
                className="inline-flex items-center gap-3.5 bg-white border border-slate-200/80 rounded-2xl pl-2.5 pr-6 py-2.5 shadow-sm hover:shadow-md transition-all hover:border-orange-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FF7A00] text-white flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                  <FaPhoneAlt />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] text-slate-500 font-medium leading-none mb-1">Talk to an expert</span>
                  <span className="block text-sm sm:text-base font-bold text-[#0B1B3D] leading-none">+91 95357 64655</span>
                </div>
              </motion.a>

            </div>

            {/* Photo & Features Card for small screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:hidden pb-8 w-full max-w-lg mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-blue-100 bg-white">
                <img
                  src={heroIllustration}
                  alt="Payroll Outsourcing specialist at desk with laptop"
                  width="1200"
                  height="896"
                  className="w-full h-auto object-cover select-none"
                />
              </div>

              {/* Mobile Features Card */}
              <div className="mt-4 w-full rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 ring-1 ring-slate-900/5">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1747a6] via-[#11409d] to-[#0c2f79] px-3.5 py-2 text-white shadow-md">
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white/15 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 3.34 2 5s4.48 3 10 3 10-1.34 10-3-4.48-3-10-3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3V4c0 1.66-4.48 3-10 3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3V9c0 1.66-4.48 3-10 3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3v-3c0 1.66-4.48 3-10 3z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white font-sans">
                      PAYROLL
                    </span>
                  </div>
                  <svg className="absolute bottom-0 right-0 w-16 h-4 pointer-events-none" viewBox="0 0 80 20" fill="none">
                    <path d="M0 20 Q 50 18, 80 0 L 80 20 Z" fill="#FF7A00" />
                  </svg>
                </div>
                <ul className="mt-2.5 space-y-1.5">
                  {[
                    'Payroll Processing',
                    'Payslip Generation & Distribution',
                    'PF, ESI, PT, TDS & LWF Compliance',
                    'Income Tax & Declarations',
                    'Reimbursement & Expense Processing',
                    'Arrears & Recoveries',
                    'MIS & Management Reports',
                    'Audit Support & Data Security'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                        <svg className="w-2 h-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-[11.5px] font-semibold text-[#0B1B3D] leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Elegant Bottom Wave swoosh */}
        <div className="w-full overflow-hidden leading-none relative z-10 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,30 C360,60 720,0 1080,40 C1260,60 1380,20 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
            <path d="M0,35 C360,65 720,5 1080,45 C1260,65 1380,25 1440,35" stroke="#FF7A00" strokeWidth="2" opacity="0.35" />
          </svg>
        </div>
      </section>

      {/* 2. DETAILED FEATURES GRID */}
      <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-white">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-bold uppercase tracking-wider mb-4">
            Comprehensive Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
            Everything Your Payroll Demands, Perfectly Handled
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From monthly gross-to-net calculations to complex multi-state statutory filings, our specialist team takes total ownership of your payroll administration.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {detailedFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="bg-[#f8faff] rounded-2xl p-7 border border-slate-200/70 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-5 shadow-sm">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0B1B3D] mb-3 leading-snug">{feat.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. OUR PROCESS SECTION */}
      <section id="process" className="py-16 sm:py-20 px-4 sm:px-6 w-full bg-[#f4f8fe] border-y border-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#1747a6] text-xs font-bold uppercase tracking-wider mb-4">
              Streamlined Monthly Cadence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
              How Arvion Manages Your Monthly Payroll
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              A transparent, 5-stage workflow ensuring zero errors, on-time salary credit, and verified compliance every month.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-orange-300 transition-colors"
              >
                <div>
                  <span className="text-3xl font-black text-[#FF7A00] block mb-3 font-mono">{step.step}</span>
                  <h4 className="text-base font-bold text-[#0B1B3D] mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 text-[#FF7A00] rounded-2xl mb-4 shadow-sm">
            <FaRegQuestionCircle className="text-2xl" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base font-medium">
            Everything you need to know about outsourcing your payroll to Arvion.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-bold text-[#0B1B3D] text-base sm:text-lg focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <FaChevronDown className={`flex-shrink-0 text-slate-400 text-sm ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FF7A00]' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-5 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <TestimonialSection />

      {/* 6. FINAL CTA BANNER */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 w-full bg-gradient-to-br from-[#0B1B3D] via-[#102a63] to-[#1A4B8F] text-white text-center relative overflow-hidden mt-10">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Ready for Effortless, 100% Compliant Payroll?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation with our payroll experts to explore how Arvion can simplify your salary operations, ensure compliance, and save your team valuable hours every month.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold text-base shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              <FaCalendarAlt /> Request a Free Demo
            </Link>
            <a
              href="tel:+919535764655"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all"
            >
              <FaPhoneAlt /> Call +91 95357 64655
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PayrollPage;
