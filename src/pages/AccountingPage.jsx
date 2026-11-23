import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaBookOpen, FaFileInvoiceDollar, FaChartPie, FaChartLine,
  FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight,
  FaUserTie, FaClock, FaShieldAlt, FaHeadset, FaLaptop, FaCalculator,
  FaChartBar, FaLayerGroup, FaLock, FaReceipt, FaPercent, FaFileSignature, FaLandmark,
  FaComments, FaSync, FaRocket, FaStore, FaSchool, FaLaptopCode, FaShoppingCart, FaBuilding
} from 'react-icons/fa';

// Testimonials hidden for now (kept for future use): uncomment this import and the <TestimonialSection /> below to bring them back.
// import TestimonialSection from '../components/TestimonialSection';
import FaqSection from '../components/FaqSection';
import RelatedServices from '../components/RelatedServices';
import { ProcessSteps, NeedsGuide, ChecklistGroups, DueDates, MistakesGrid } from '../components/ServiceSections';
import { CompareTable } from '../components/ServiceTools';
import heroIllustration from '../assets/service-heroes/accounting-hero.webp';
import Eyebrow from '../components/ui/Eyebrow';
import benefitsImg from '../assets/service-heroes/accounting-benefits.webp'; // sharper 2048px copy for the benefits section

const fadeUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const AccountingPage = () => {
  const detailedFeatures = [
    { 
      id: 'bookkeeping',
      title: 'Bookkeeping & General Ledger', 
      description: 'Maintain accurate and up-to-date records of all your financial transactions, including sales, purchases, and payments. Our meticulous bookkeeping ensures your general ledger is always balanced and audit-ready.', 
      icon: <FaBookOpen className="text-[#ff7f32] text-3xl" /> 
    },
    { 
      id: 'financial-statements',
      title: 'Financial Statement Preparation', 
      description: 'Generate key financial reports, including the balance sheet, income statement, and cash flow statement. These documents provide a clear and accurate picture of your company’s financial health.', 
      icon: <FaFileInvoiceDollar className="text-[#ff7f32] text-3xl" /> 
    },
    { 
      id: 'expense-management',
      title: 'Expense Management & Tracking', 
      description: 'Track and categorize all your business expenses to optimize your budget and identify potential savings. We provide tools and reports to help you manage spending and improve your bottom line.', 
      icon: <FaChartPie className="text-[#ff7f32] text-3xl" /> 
    },
    { 
      id: 'budgeting-forecasting',
      title: 'Budgeting & Financial Forecasting', 
      description: 'Plan for the future with data-driven financial forecasting and strategic budgeting. We help you set realistic financial goals and create a roadmap to achieve them, ensuring long-term stability and growth.', 
      icon: <FaChartLine className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'gst-returns',
      title: 'GST Return Filing',
      description: 'We file your GSTR-1 (outward supplies) and GSTR-3B (summary return and tax payment) every month, or quarterly under the QRMP scheme, along with the annual return where it applies. We also reconcile your purchases with GSTR-2B so you claim the correct input tax credit and avoid notices.',
      icon: <FaReceipt className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'tds-returns',
      title: 'TDS Computation & Returns',
      description: 'We calculate TDS on salaries, rent, professional fees and contractor payments, track deposit dates and file quarterly returns in Form 24Q, 26Q or 27Q. Returns are due by 31 July, 31 October, 31 January and 31 May. We also issue TDS certificates to employees and vendors.',
      icon: <FaPercent className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'income-tax-returns',
      title: 'Income Tax Return Filing',
      description: 'We prepare and file income tax returns for companies, LLPs, firms, proprietors and individuals. This covers computing taxable income, matching it with Form 26AS and AIS, paying advance tax on time and coordinating with your auditor where a tax audit applies.',
      icon: <FaFileSignature className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'roc-compliance',
      title: 'ROC Annual Compliance',
      description: 'Companies must file financial statements in Form AOC-4 within 30 days of the AGM and the annual return in Form MGT-7 within 60 days. LLPs file Form 11 and Form 8 every year. We prepare these filings and board documents so you avoid daily late fees and director disqualification.',
      icon: <FaLandmark className="text-[#ff7f32] text-3xl" />
    },
  ];

  const benefits = [
    'Gain Clear Financial Visibility',
    'Make Data-Driven Business Decisions',
    'Ensure Tax and Regulatory Compliance',
    'Improve Cash Flow Management',
    'Identify Opportunities for Growth',
    'Save Time on Financial Administration'
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
      
      {/* 1. EXACT HERO SECTION MATCHING DESIGN */}
      <section className="relative w-full overflow-hidden lg:min-h-[calc(100svh-38px)] lg:flex lg:flex-col bg-gradient-to-r from-[#eef4ff] via-[#f8fbff] to-white pt-16 border-b border-blue-50 text-[#0B1B3D]">
        {/* Photo: right side on large screens, fading into the light background on its left edge */}
        <div aria-hidden="true" className="hidden lg:block absolute top-16 bottom-0 right-0 w-[56%] xl:w-[55%]">
          <img
            src={heroIllustration}
            alt=""
            width="1376"
            height="768"
            fetchPriority="high"
            className="w-full h-full object-cover object-right [mask-image:linear-gradient(to_right,transparent_0%,#000_7%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_7%)]"
          />
        </div>

        {/* Desktop Floating ACCOUNTING Card on top of the image */}
        <div className="hidden lg:block absolute top-20 right-6 xl:right-12 2xl:right-20 w-[275px] xl:w-[295px] z-20">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md p-3.5 xl:p-4 shadow-2xl shadow-blue-950/25 border border-slate-100 ring-1 ring-slate-900/5">
            {/* Header */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1747a6] via-[#11409d] to-[#0c2f79] px-3.5 py-2 text-white shadow-md">
              <div className="relative z-10 flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/15 flex items-center justify-center flex-shrink-0">
                  <FaCalculator className="text-white text-xs" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-white font-sans">
                  Accounting
                </span>
              </div>
              {/* Orange accent curve */}
              <svg className="absolute bottom-0 right-0 w-16 h-4 pointer-events-none" viewBox="0 0 80 20" fill="none">
                <path d="M0 20 Q 50 18, 80 0 L 80 20 Z" fill="#FF7A00" />
              </svg>
            </div>

            {/* 6 Features List with Green Checkmarks */}
            <ul className="mt-2.5 space-y-1.5 sm:space-y-2">
              {[
                'Gain Clear Financial Visibility',
                'Make Data-Driven Business Decisions',
                'Ensure Tax and Regulatory Compliance',
                'Improve Cash Flow Management',
                'Identify Opportunities for Growth',
                'Save Time on Financial Administration'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <svg className="w-2 h-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-[11px] xl:text-[11px] font-semibold text-[#0B1B3D] leading-tight">
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
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 pt-5 text-[11.5px] sm:text-sm text-slate-500">
            <Link to="/" className="hover:text-[#0B1B3D] transition-colors">Home</Link>
            <span className="text-slate-300">&gt;</span>
            <Link to="/services" className="hover:text-[#0B1B3D] transition-colors">Services</Link>
            <span className="text-slate-300">&gt;</span>
            <span className="font-bold text-[#0B1B3D]">Accounting Services</span>
          </nav>

          <div className="grid lg:grid-cols-2 items-center lg:flex-1">

            {/* Left Content Column */}
            <div className="w-full flex flex-col justify-center items-center text-center lg:items-start lg:text-left pt-4 sm:pt-5 pb-8 lg:pb-14 min-w-0 lg:pr-6">



              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
                className="text-[26px] sm:text-4xl lg:text-[37px] font-extrabold text-[#0B1B3D] leading-[1.1] tracking-tight mb-3 sm:mb-4 relative"
              >
                Accounting <span className="text-[#FF7A00] relative inline-block">
                  Services
                  <svg className="absolute left-0 -bottom-2 w-full h-2.5 text-[#FF7A00]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="sr-only"> and Bookkeeping in Bangalore, India</span>
              </motion.h1>

              {/* Subheading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[16px] sm:text-2xl font-bold text-[#0B1B3D] mb-3 sm:mb-4 leading-snug text-balance"
              >
                Expert Bookkeeping, Reporting &amp; Consulting
              </motion.h2>

              {/* Description paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
                className="text-[14px] sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-6 sm:mb-7 font-normal"
              >
                Our accounting services provide the financial intelligence you need to navigate challenges and seize opportunities with confidence.
              </motion.p>


              {/* 4 Feature Badges in a Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
                className="grid grid-cols-4 gap-1.5 sm:flex sm:flex-wrap sm:justify-center lg:justify-start sm:gap-x-6 lg:gap-x-4 xl:gap-x-5 sm:gap-y-3 w-full max-w-sm sm:max-w-none mx-auto lg:mx-0 mb-6 sm:mb-8"
              >
                {[
                  { title1: 'Expert', title2: 'Team', icon: <FaLaptop />, bg: 'bg-blue-50', text: 'text-blue-600' },
                  { title1: 'On-Time', title2: 'Delivery', icon: <FaClock />, bg: 'bg-blue-50', text: 'text-blue-600' },
                  { title1: 'Data', title2: 'Security', icon: <FaShieldAlt />, bg: 'bg-blue-50', text: 'text-blue-600' },
                  { title1: 'Dedicated', title2: 'Support', icon: <FaHeadset />, bg: 'bg-orange-50', text: 'text-[#FF7A00]' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-1.5 sm:flex-row sm:text-left sm:gap-2.5">
                    <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.text} flex items-center justify-center text-sm flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <span className="text-[10.5px] leading-tight sm:leading-normal sm:text-sm font-semibold text-[#0B1B3D] sm:whitespace-nowrap">
                      {item.title1} {item.title2}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Talk to an Expert Callout (large screens only) */}
              <motion.a
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}
                href="tel:+919535764655"
                className="group hidden lg:inline-flex lg:mb-7 items-center gap-3 rounded-lg pr-2 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 ring-1 ring-orange-100 text-[#FF7A00] flex items-center justify-center text-[14px] flex-shrink-0 transition-colors group-hover:bg-[#FF7A00] group-hover:text-white">
                  <FaPhoneAlt />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] uppercase tracking-[0.08em] text-slate-500 font-semibold leading-none mb-1.5">Talk to an expert</span>
                  <span className="block text-[15px] font-semibold text-[#0B1B3D] leading-none tabular-nums transition-colors group-hover:text-[#FF7A00]">+91 95357 64655</span>
                </div>
              </motion.a>
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-nowrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 h-10 sm:h-11 px-4 sm:px-5 rounded-lg bg-[#FF7A00] hover:bg-[#E66E00] text-white font-semibold text-[12.5px] sm:text-[14px] tracking-[0.01em] whitespace-nowrap shadow-[0_6px_16px_-6px_rgba(255,122,0,.55)] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                >
                  <FaCalendarAlt className="text-[12px] sm:text-[13px]" /> Talk to an Expert
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 h-10 sm:h-11 px-4 sm:px-5 rounded-lg bg-white hover:bg-slate-50 text-[#0B1B3D] border border-slate-300 hover:border-[#0B1B3D] font-semibold text-[12.5px] sm:text-[14px] tracking-[0.01em] whitespace-nowrap transition-colors shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
                >
                  <span className="sm:hidden">Our Solutions</span><span className="hidden sm:inline">Our Accounting Solutions</span> <FaArrowRight className="text-xs" />
                </a>
              </motion.div>


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
                  alt="Accounting experts reviewing balance sheets and financial data"
                  width="1376"
                  height="768"
                  className="w-full h-auto object-cover select-none"
                />
              </div>

              {/* Mobile Features Card */}
              <div className="mt-4 w-full rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 ring-1 ring-slate-900/5">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1747a6] via-[#11409d] to-[#0c2f79] px-3.5 py-2 text-white shadow-md">
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white/15 flex items-center justify-center flex-shrink-0">
                      <FaCalculator className="text-white text-xs" />
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-white font-sans">
                      Accounting
                    </span>
                  </div>
                  <svg className="absolute bottom-0 right-0 w-16 h-4 pointer-events-none" viewBox="0 0 80 20" fill="none">
                    <path d="M0 20 Q 50 18, 80 0 L 80 20 Z" fill="#FF7A00" />
                  </svg>
                </div>
                <ul className="mt-2.5 space-y-1.5">
                  {[
                    'Gain Clear Financial Visibility',
                    'Make Data-Driven Business Decisions',
                    'Ensure Tax and Regulatory Compliance',
                    'Improve Cash Flow Management',
                    'Identify Opportunities for Growth',
                    'Save Time on Financial Administration'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                        <svg className="w-2 h-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-[11px] font-semibold text-[#0B1B3D] leading-tight">
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

      {/* 2. INTRO SECTION */}
      <section className="py-6 md:py-10 px-4 max-w-5xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <h2 className="text-heading font-extrabold text-[#0b1f4d] mb-6 tracking-tight">Your Partner in <span className="text-[#f2700f]">Financial Accuracy</span></h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-medium">
            Maintain pristine financial records and gain critical business insights with our end-to-end accounting services. From daily bookkeeping to financial forecasting, our team ensures your finances are accurate, compliant, and organized, giving you the clarity to make informed decisions.
          </p>
        </motion.div>
      </section>

      {/* 3. FEATURES GRID */}
      <section id="services" className="scroll-mt-20 py-6 md:py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-heading font-extrabold text-[#0b1f4d] tracking-tight">A Closer Look at <span className="text-[#f2700f]">Our Features</span></h2>
            <div className="w-24 h-1 bg-[#ff7f32] mx-auto mt-4 rounded-full"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {detailedFeatures.map((feat, index) => (
              <motion.div whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }} 
                key={index}
                id={feat.id}
                variants={fadeUpVariant}
                className="bg-[#f8f9fa] p-5 sm:p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-[box-shadow,border-color,background-color,color] duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
                  {feat.icon}
                </div>
                <h3 className="text-card-title font-bold text-[#0d1b2a] mb-2 sm:mb-3 leading-tight">{feat.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <ProcessSteps
        title="Getting Started is"
        highlight="Simple"
        desc="From messy spreadsheets to clean, compliant books in four steps."
        steps={[
          { Icon: FaComments, title: 'Understand Your Business', desc: 'We learn how you sell, buy and pay, and list every filing your business needs.' },
          { Icon: FaSync, title: 'Set Up or Clean Up', desc: 'We set up your books in Tally, Zoho Books, QuickBooks or Xero and catch up on any backlog.' },
          { Icon: FaBookOpen, title: 'Monthly Books and Filings', desc: 'Transactions are recorded and reconciled, and GST, TDS and other returns are filed on time.' },
          { Icon: FaChartBar, title: 'Reports You Can Use', desc: 'Every month you get a profit and loss, balance sheet and cash flow view to plan your next move.' },
        ]}
      />

      {/* COMPLIANCE CALENDAR */}
      <DueDates
        pill="Never Miss a Deadline"
        title="Your Compliance"
        highlight="Calendar"
        desc="Key due dates for most Indian businesses. We track them so you do not pay late fees."
        rows={[
          { when: '7th monthly', what: 'TDS / TCS payment', detail: 'Tax deducted in the previous month (March: by 30 April)' },
          { when: '11th monthly', what: 'GSTR-1', detail: 'Outward supplies, for monthly filers' },
          { when: '15th monthly', what: 'PF and ESI contributions', detail: 'Employer and employee share for the previous month' },
          { when: '20th monthly', what: 'GSTR-3B', detail: 'Summary return and GST payment, for monthly filers' },
          { when: '15 Jun, Sep, Dec, Mar', what: 'Advance tax instalments', detail: 'For businesses and individuals with tax above the limit' },
          { when: '31 Jul, Oct, Jan, May', what: 'TDS returns', detail: 'Quarterly Forms 24Q, 26Q and 27Q' },
          { when: '31 December', what: 'GSTR-9 annual return', detail: 'For taxpayers above the annual turnover limit' },
          { when: 'After the AGM', what: 'AOC-4 and MGT-7', detail: 'Company financial statements and annual return' },
        ]}
        note="Dates follow current rules. The government sometimes extends deadlines, and we track every change for you."
      />

      {/* 4. BENEFITS LIST */}
      <section className="relative w-full bg-[#f8fafd] px-4 sm:px-6 lg:px-8 py-6 sm:py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Pill sits above both columns so the photo lines up with the heading */}
          <Eyebrow className="mb-5">Why Choose Us</Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-14 items-center lg:items-stretch">

          {/* Left: heading + benefit cards */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-heading font-extrabold text-[#0b1f4d] tracking-tight leading-tight">
              Unlock Key <span className="text-[#f2700f]">Benefits</span>
            </h2>
            <span aria-hidden="true" className="mt-4 mb-6 block w-20 h-1 rounded-full bg-[#f2700f]" />
            <p className="text-[14px] sm:text-[16.5px] text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Our accounting services provide the financial intelligence you need to navigate challenges and seize opportunities with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {benefits.map((benefit, idx) => (
                <motion.div whileHover={{ y: -2, transition: { duration: 0.25, ease: 'easeOut' } }}
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-center gap-4 bg-white px-5 py-5 rounded-2xl shadow-[0_8px_24px_-14px_rgba(11,42,107,.25)] border border-slate-100 hover:shadow-[0_14px_30px_-14px_rgba(11,42,107,.3)] transition-[box-shadow,border-color,background-color,color]"
                >
                  <span className="w-11 h-11 rounded-full bg-[#e7f8ee] flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-[17.5px] text-[#16a34a]" />
                  </span>
                  <span className="text-[14px] sm:text-[16.5px] text-[#0b2a6b] font-bold leading-snug">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: framed photo with navy (bottom-left) and orange (top-right) accent blocks */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto px-4 pt-4 pb-4 sm:px-6 sm:pt-5 sm:pb-6 lg:py-0 lg:flex lg:flex-col"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div aria-hidden="true" className="absolute left-0 bottom-0 lg:-bottom-5 w-[42%] h-[72%] rounded-2xl sm:rounded-3xl bg-[#0b2f8f]" />
            <div aria-hidden="true" className="absolute right-0 top-0 lg:-top-5 w-[30%] h-[34%] sm:h-[42%] rounded-2xl sm:rounded-3xl bg-[#f7861c]" />
            <div className="relative rounded-2xl sm:rounded-3xl bg-white p-1.5 sm:p-2 shadow-[0_24px_50px_-20px_rgba(11,42,107,.45)] lg:flex-1 lg:flex lg:flex-col">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-[320px]">
                <img
                  src={benefitsImg}
                  alt="Accounting experts reviewing financial reports on a laptop"
                  loading="lazy"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <NeedsGuide
        pill="Who We Help"
        title="Accounting Built for"
        highlight="Your Business"
        desc="Every business has different books. Here is what we usually handle for each."
        items={[
          { Icon: FaRocket, who: 'Startups', note: 'Early and growth stage', needs: ['Bookkeeping', 'GST Returns', 'TDS', 'ROC Filings', 'Investor Reports'] },
          { Icon: FaStore, who: 'Small Businesses and Traders', note: 'Shops, distributors, services', needs: ['Bookkeeping', 'GST Returns', 'Income Tax Return', 'Cash Flow'] },
          { Icon: FaSchool, who: 'Schools and Institutions', note: 'K-12, colleges, coaching', needs: ['Fee Accounting', 'Salary TDS', 'Audit Support', 'Budgeting'] },
          { Icon: FaShoppingCart, who: 'E-commerce Sellers', note: 'Marketplaces and own store', needs: ['Settlement Reconciliation', 'GST Returns', 'TCS Credit', 'Inventory'] },
          { Icon: FaLaptopCode, who: 'Professionals and Freelancers', note: 'Consultants, doctors, creators', needs: ['Income Tax Return', 'Advance Tax', 'GST Returns', 'Expense Tracking'] },
          { Icon: FaBuilding, who: 'Companies and LLPs', note: 'Private limited, LLP, OPC', needs: ['Financial Statements', 'Statutory Audit Support', 'ROC Filings', 'TDS Returns'] },
        ]}
      />

      {/* WHAT YOU GET */}
      <ChecklistGroups
        pill="Why Arvion"
        title="What You Get"
        highlight="Every Month"
        groups={[
          { Icon: FaBookOpen, heading: 'Clean Books', items: ['Every sale, purchase and expense recorded', 'Bank and card accounts reconciled', 'Receivables and payables tracked'] },
          { Icon: FaReceipt, heading: 'Timely Filings', items: ['GST returns with input credit matched', 'TDS payments and quarterly returns', 'Reminders before every due date'] },
          { Icon: FaChartLine, heading: 'Clear Reports', items: ['Profit and loss statement', 'Balance sheet and cash flow view', 'Expense breakdown by category'] },
        ]}
      />

      {/* DIY vs IN-HOUSE vs ARVION */}
      <CompareTable
        pill="Compare Options"
        title="Do It Yourself, Hire, or"
        highlight="Outsource?"
        desc="See how outsourcing to Arvion compares with the other ways of keeping your books."
        columns={[
          { name: 'Do It Yourself', tag: 'Owner keeps the books' },
          { name: 'Full-Time Accountant', tag: 'In-house hire' },
          { name: 'Arvion Accounting', tag: 'Outsourced team', highlight: true },
        ]}
        rows={[
          { label: 'Your time', values: ['Hours every week', 'Supervising and reviewing', 'Only reviewing reports'] },
          { label: 'Tax rule updates', values: ['You track them yourself', 'Depends on one person', 'A team that tracks every change'] },
          { label: 'Deadlines', values: ['Easy to miss', 'Depends on the accountant', 'Calendar with reminders'] },
          { label: 'Leave and exits', values: ['Work stops', 'Gap until a replacement joins', 'Team-based, no gaps'] },
          { label: 'Reports', values: ['Rarely prepared', 'Varies by person', 'Monthly P&L, balance sheet and cash flow'] },
          { label: 'Cost', values: ['Your own time', 'Fixed salary and benefits', 'Monthly fee for only the services you need'] },
        ]}
      />

      {/* COMMON MISTAKES */}
      <MistakesGrid
        title="Accounting Mistakes That"
        highlight="Cost Money"
        desc="These everyday slips lead to lost credits, interest and late fees."
        items={[
          { mistake: 'Mixing personal and business spending', fix: 'Use a separate business bank account and card so every transaction is easy to classify.' },
          { mistake: 'Claiming GST credit without matching', fix: 'Reconcile purchases with GSTR-2B every month so you claim only the credit your suppliers have reported.' },
          { mistake: 'Paying TDS late', fix: 'Deposit TDS by the 7th of the next month. Late payment attracts interest for every month of delay.' },
          { mistake: 'Updating books only at year end', fix: 'Record and reconcile monthly so errors are caught early and tax filing is quick.' },
          { mistake: 'Losing bills and receipts', fix: 'Scan or photograph every bill and attach it to the entry, so expenses hold up in a tax review.' },
          { mistake: 'No backup of accounting data', fix: 'Back up your books regularly, or use cloud software that keeps copies for you.' },
        ]}
      />

      {/* FAQ SECTION */}
      <FaqSection
        desc="Common questions about our accounting services and processes."
        items={[
          { Icon: FaLaptop, q: "What accounting software do you support?", a: "We are proficient in a wide range of leading accounting platforms including QuickBooks, Xero, Zoho Books, and Tally." },
          { Icon: FaChartBar, q: "How often will I receive financial reports?", a: "We provide detailed financial reports on a monthly basis. However, we can also customize reporting frequency (weekly or quarterly) based on your specific business needs." },
          { Icon: FaShieldAlt, q: "Are your accounting services compliant with tax laws?", a: "Yes, our team of experts stays completely up-to-date with all local, state, and federal tax regulations to ensure 100% compliance and avoid any penalties." },
          { Icon: FaLayerGroup, q: "Can you help with historical cleanup of my books?", a: "Absolutely. We offer catch-up and cleanup services to organize your past financial records, reconcile accounts, and bring your books entirely up to date." },
          { Icon: FaReceipt, q: "Which GST returns does my business need to file?", a: "Most regular taxpayers file GSTR-1 for sales and GSTR-3B for the tax summary and payment, monthly or quarterly under the QRMP scheme. Composition dealers follow a separate, simpler filing cycle. We set up the right calendar for your registration type." },
          { Icon: FaPercent, q: "What happens if a TDS return is filed late?", a: "A late fee is charged for every day of delay until the return is filed, capped at the TDS amount for that quarter. Further penalties and interest can apply for late deposit or non-filing, so we file before each quarterly due date." },
          { Icon: FaLandmark, q: "Does a company with no business activity still need ROC filings?", a: "Yes. Every registered company must hold its AGM and file its financial statements and annual return with the ROC each year, even with zero revenue. Missed filings attract daily late fees and can lead to director disqualification." },
          { Icon: FaLock, q: "How secure is my financial data?", a: "We take data security very seriously. We use enterprise-grade encryption, secure servers, and strict access controls to ensure your sensitive financial information is always protected." },
        ]}
      />

      <RelatedServices current="/services/accounting" />

      {/* 5. TESTIMONIALS */}
      {/* <TestimonialSection /> (hidden for now, kept for future use) */}

      {/* 6. CTA / CONTACT SECTION */}
      <section className="relative py-6 md:py-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a2766] via-[#0e3480] to-[#14409a]">
        {/* Soft decorative shapes (same style as the "Why Arvion" section) */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-16 left-[8%] w-72 h-72 rounded-[40%] bg-white/[0.05] rotate-12" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-[6%] w-80 h-80 rounded-full bg-white/[0.04]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-heading font-extrabold text-white mb-2 md:mb-4 tracking-tight"
          >
            Ready to Take Control of Your Finances?
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Let's discuss how our accounting services can provide the clarity your business needs.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-10 mb-8"
          >
            <div className="w-full text-center flex justify-center">
              <p className="text-slate-200 text-xs md:text-sm font-medium leading-relaxed max-w-2xl text-center">
                <FaMapMarkerAlt className="text-orange-400 inline-block mr-2 -mt-1" />
                Arvion Technologies Pvt Ltd. IBLUE Entertainment, #62/1, New No 7, Ground Floor, 1st Cross, 2nd Main, Ganganagar, Bangalore-560032
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <FaPhoneAlt className="text-orange-400 flex-shrink-0" />
              <span className="text-slate-200 text-xs md:text-sm font-medium">+91 9535764655</span>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <FaEnvelope className="text-orange-400 flex-shrink-0" />
              <span className="text-slate-200 text-xs md:text-sm font-medium">sales@arviontechnologies.com</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Link 
              to="/contact-us" 
              className="inline-block px-8 py-3 md:px-10 md:py-4 bg-orange-500 text-white text-base md:text-lg rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all hover:-translate-y-1"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AccountingPage;
