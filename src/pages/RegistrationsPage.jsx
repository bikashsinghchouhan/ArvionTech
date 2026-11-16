import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaBuilding, FaStamp, FaGlobe, FaShieldAlt, FaCheckCircle,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaUserTie,
  FaClock, FaHeadset, FaFileAlt, FaBalanceScale, FaIndustry, FaUtensils, FaRocket, FaStore,
  FaUsers, FaHandshake, FaSignature, FaCertificate,
  FaComments, FaFileUpload, FaPaperPlane, FaCheckDouble, FaLaptopCode, FaIdCard, FaHome, FaBell, FaSearch,
  FaExchangeAlt, FaHandHoldingHeart, FaLink, FaMapMarkedAlt, FaLayerGroup, FaUsersCog, FaClipboardList, FaBook
} from 'react-icons/fa';

// Testimonials hidden for now (kept for future use): uncomment this import and the <TestimonialSection /> below to bring them back.
// import TestimonialSection from '../components/TestimonialSection';
import FaqSection from '../components/FaqSection';
import { ProcessSteps, NeedsGuide, ChecklistGroups, DueDates, MistakesGrid } from '../components/ServiceSections';
import { CompareTable, RegistrationFinder } from '../components/ServiceTools';
import heroIllustration from '../assets/service-heroes/statutory-hero.webp';
import benefitsImg from '../assets/service-heroes/statutory-benefits.webp';

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

const RegistrationsPage = () => {
  const detailedFeatures = [
    {
      title: 'Company Incorporation',
      description: 'Navigate the complete process of registering your business, whether it’s a private limited company, LLP, or one-person company. We handle all documentation, name approval, and filings to ensure a smooth and timely incorporation, setting your venture up for success from day one.',
      icon: <FaBuilding className="text-[#ff7f32] text-3xl" />
    },
    {
      title: 'GST & Tax ID Application',
      description: 'Ensure your business is fully compliant with all Goods and Services Tax (GST) regulations. We manage the entire application process for your GSTIN and other essential tax identification numbers, making sure your business is ready for seamless transactions and accurate tax filing.',
      icon: <FaStamp className="text-[#ff7f32] text-3xl" />
    },
    {
      title: 'Import Export Code (IEC)',
      description: 'Obtain the necessary codes to operate your business on a global scale. Our experts streamline the IEC application process, handling all the required documentation to enable you to participate in international trade and expand your market reach without legal hurdles.',
      icon: <FaGlobe className="text-[#ff7f32] text-3xl" />
    },
    {
      title: 'Trademark & IP Registration',
      description: 'Protect your brand identity, logos, and intellectual property with official trademarking. We manage the comprehensive search, application, and registration process to safeguard your most valuable assets from infringement and build a strong, defensible brand.',
      icon: <FaShieldAlt className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'udyam-registration',
      title: 'MSME / Udyam Registration',
      description: 'Get your business recognised as a Micro, Small or Medium Enterprise on the government Udyam portal. Registration is free and paperless, using Aadhaar, PAN and GSTIN details. It opens the door to priority-sector bank loans, collateral-free credit schemes, protection against delayed buyer payments and preference in government tenders.',
      icon: <FaIndustry className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'fssai-licence',
      title: 'FSSAI Food Licence',
      description: 'Every business that makes, stores, packs, sells or delivers food needs FSSAI registration or a licence. We assess whether you need basic registration, a state licence or a central licence based on your turnover and activity, prepare the application on the FoSCoS portal and follow up until the licence is issued.',
      icon: <FaUtensils className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'startup-india',
      title: 'Startup India (DPIIT) Recognition',
      description: 'Eligible companies, LLPs and registered partnerships up to 10 years old can apply for DPIIT recognition as a startup. We prepare your innovation write-up and supporting documents. Recognition helps you apply for tax benefits, self-certify labour and environmental compliances, and access government funding and tender relaxations.',
      icon: <FaRocket className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'shop-establishment-pt',
      title: 'Shop & Establishment and Professional Tax',
      description: 'Shops, offices and commercial establishments must register under their state’s Shop & Establishment Act, usually soon after starting operations. Employers in states that levy Professional Tax must also register to deduct and pay PT on salaries. We handle both registrations and keep your renewals and returns on time.',
      icon: <FaStore className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'pf-esi-registration',
      title: 'PF & ESI Registration',
      description: 'Establishments with 20 or more employees must register with EPFO for Provident Fund, and those with 10 or more employees in covered areas must register with ESIC for health insurance. We obtain your employer codes, link your employees and set you up for monthly contributions and returns.',
      icon: <FaUsers className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'partnership-proprietorship',
      title: 'Partnership & Proprietorship Setup',
      description: 'Starting small? We draft the partnership deed and register your firm with the state Registrar of Firms, which lets the firm enforce its contracts in court. For sole proprietors, we build your business identity through GST, Udyam or Shop Act registration and help you open a current account.',
      icon: <FaHandshake className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'dsc-din',
      title: 'Digital Signature (DSC) & DIN',
      description: 'Directors and authorised signatories need a Class 3 Digital Signature Certificate to sign MCA, GST and income tax filings online. Every company director also needs a Director Identification Number (DIN). We arrange the DSC through a licensed certifying authority and apply for the DIN.',
      icon: <FaSignature className="text-[#ff7f32] text-3xl" />
    },
    {
      id: 'trade-licence',
      title: 'Trade Licence',
      description: 'Most municipal corporations require a trade licence before you run a shop, restaurant, workshop or other commercial activity in their area. We check what your local body requires, prepare the application with your premises documents and track it until the licence is issued and renewed.',
      icon: <FaCertificate className="text-[#ff7f32] text-3xl" />
    },
  ];

  const benefits = [
    'Ensure Full Legal Compliance',
    'Protect Your Brand and Assets',
    'Build Credibility with Customers',
    'Avoid Penalties and Legal Issues',
    'Enable Business Expansion',
    'Streamline the Registration Process'
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

        {/* Desktop Floating REGISTRATIONS Card on top of the image */}
        <div className="hidden lg:block absolute top-20 right-6 xl:right-12 2xl:right-20 w-[275px] xl:w-[295px] z-20">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md p-3.5 xl:p-4 shadow-2xl shadow-blue-950/25 border border-slate-100 ring-1 ring-slate-900/5">
            {/* Header */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1747a6] via-[#11409d] to-[#0c2f79] px-3.5 py-2 text-white shadow-md">
              <div className="relative z-10 flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <path d="m9 14 2 2 4-4" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white font-sans">
                  REGISTRATIONS
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
                'Ensure Full Legal Compliance',
                'Build Credibility with Customers',
                'Enable Business Expansion',
                'Protect Your Brand and Assets',
                'Avoid Penalties and Legal Issues',
                'Streamline the Registration Process'
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
                <span className="font-bold text-[#0B1B3D]">Statutory Registrations</span>
              </nav>

              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-800 mb-5"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                Arvion Statutory Registrations
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1B3D] leading-[1.1] tracking-tight mb-4 relative"
              >
                Statutory <span className="text-[#FF7A00] relative inline-block">
                  Registrations
                  <svg className="absolute left-0 -bottom-2 w-full h-2.5 text-[#FF7A00]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xl sm:text-2xl font-bold text-[#0B1B3D] mb-4 leading-snug"
              >
                Entity Setups, Tax Registrations &amp; Compliance
              </motion.h2>

              {/* Description paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7 font-normal"
              >
                We handle the paperwork and legal complexities so you can focus on scaling your business operations globally.
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
                  <FaCalendarAlt className="text-base" /> Get Expert Guidance
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B1B3D] border-2 border-[#0B1B3D] font-bold text-sm sm:text-base transition-colors shadow-sm"
                >
                  View Services <FaArrowRight className="text-xs" />
                </a>
              </motion.div>

              {/* 4 Feature Badges in a Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
                className="flex flex-wrap gap-2 sm:gap-2.5 w-full mb-8"
              >
                {[
                  { title1: 'Expert', title2: 'Team', icon: <FaUserTie />, bg: 'bg-blue-50', text: 'text-blue-600' },
                  { title1: 'On-Time', title2: 'Delivery', icon: <FaClock />, bg: 'bg-blue-50', text: 'text-blue-600' },
                  { title1: 'Data', title2: 'Security', icon: <FaShieldAlt />, bg: 'bg-blue-50', text: 'text-blue-600' },
                  { title1: 'Dedicated', title2: 'Support', icon: <FaHeadset />, bg: 'bg-orange-50', text: 'text-[#FF7A00]' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/90 rounded-xl pl-1.5 pr-3 py-1.5 border border-slate-200/70 shadow-sm flex items-center gap-2.5 hover:shadow-md hover:border-blue-100 transition-all">
                    <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.text} flex items-center justify-center text-sm flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <span className="text-[13px] sm:text-sm font-semibold text-[#0B1B3D] whitespace-nowrap">
                      {item.title1} {item.title2}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Talk to an Expert Callout */}
              <motion.a
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}
                href="tel:+919535764655"
                className="inline-flex items-center gap-3.5 bg-white border border-slate-200/80 rounded-2xl pl-2.5 pr-6 py-2.5 shadow-sm hover:shadow-md transition-[box-shadow,border-color,background-color,color] hover:border-orange-200"
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
                  alt="Statutory Registrations consultants assisting with legal compliance"
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
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                        <path d="m9 14 2 2 4-4" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white font-sans">
                      REGISTRATIONS
                    </span>
                  </div>
                  <svg className="absolute bottom-0 right-0 w-16 h-4 pointer-events-none" viewBox="0 0 80 20" fill="none">
                    <path d="M0 20 Q 50 18, 80 0 L 80 20 Z" fill="#FF7A00" />
                  </svg>
                </div>
                <ul className="mt-2.5 space-y-1.5">
                  {[
                    'Ensure Full Legal Compliance',
                    'Build Credibility with Customers',
                    'Enable Business Expansion',
                    'Protect Your Brand and Assets',
                    'Avoid Penalties and Legal Issues',
                    'Streamline the Registration Process'
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

      {/* 2. INTRO SECTION */}
      <section className="py-8 md:py-10 px-4 max-w-5xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-6 uppercase tracking-tight">Navigate Compliance with Confidence</h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-medium">
            Ensure your business is built on a solid legal foundation with our expert statutory registration services. We guide you through the complexities of company incorporation, GST registration, and more, allowing you to launch and operate your business with confidence.
          </p>
        </motion.div>
      </section>

      {/* 3. FEATURES GRID */}
      <section id="services" className="scroll-mt-20 py-8 md:py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl font-bold text-[#0d1b2a] uppercase tracking-tight">A Closer Look at Our Features</h2>
            <div className="w-24 h-1 bg-[#ff7f32] mx-auto mt-4 rounded-full"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {detailedFeatures.map((feat, index) => (
              <motion.div whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                key={index}
                variants={fadeUpVariant}
                className="bg-[#f8f9fa] p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-[box-shadow,border-color,background-color,color] duration-300 flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0d1b2a] mb-3 leading-tight">{feat.title}</h3>
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
        title="Registered in"
        highlight="4 Simple Steps"
        desc="You focus on your business. We handle the forms, portals and follow-ups."
        steps={[
          { Icon: FaComments, title: 'Tell Us About Your Business', desc: 'Share your business type, location and plans. We tell you exactly which registrations apply to you.' },
          { Icon: FaFileUpload, title: 'Share Your Documents', desc: 'We send a checklist made for your case, then review every document before filing to avoid rejections.' },
          { Icon: FaPaperPlane, title: 'We File and Follow Up', desc: 'Our experts prepare and file the application on the government portal and respond to any queries raised.' },
          { Icon: FaCheckDouble, title: 'Receive Your Certificate', desc: 'You get your registration certificate along with reminders for renewals and the returns that follow.' },
        ]}
      />

      {/* WHICH REGISTRATIONS DO YOU NEED */}
      <NeedsGuide
        pill="Find Your Fit"
        title="Which Registrations Does"
        highlight="Your Business Need?"
        desc="Common registrations by type of business. Your exact list depends on your state, turnover and activity."
        items={[
          { Icon: FaRocket, who: 'New Startup', note: 'Tech or product company', needs: ['Company Incorporation', 'DSC & DIN', 'GST Registration', 'Startup India (DPIIT)', 'Trademark'] },
          { Icon: FaUtensils, who: 'Restaurant or Food Business', note: 'Cafe, cloud kitchen, food brand', needs: ['FSSAI Licence', 'GST Registration', 'Shop & Establishment', 'Trade Licence'] },
          { Icon: FaGlobe, who: 'Importer or Exporter', note: 'Cross-border trade', needs: ['Import Export Code (IEC)', 'GST Registration', 'Udyam Registration', 'Company or LLP'] },
          { Icon: FaStore, who: 'Retail Shop or Trader', note: 'Store, showroom, wholesale', needs: ['GST Registration', 'Shop & Establishment', 'Trade Licence', 'Udyam Registration'] },
          { Icon: FaUsers, who: 'Growing Team', note: 'Hiring employees', needs: ['PF Registration', 'ESI Registration', 'Professional Tax', 'Shop & Establishment'] },
          { Icon: FaLaptopCode, who: 'Freelancer or Consultant', note: 'Sole proprietor', needs: ['Proprietorship Setup', 'Udyam Registration', 'GST Registration', 'Professional Tax'] },
        ]}
      />

      {/* REGISTRATION FINDER (interactive) */}
      <RegistrationFinder />

      {/* 4. BENEFITS LIST */}
      <section className="py-8 md:py-10 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="flex-1" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-[#0d1b2a] mb-6 uppercase tracking-tight">Unlock Key Benefits</h2>
            <p className="text-slate-500 mb-8 font-medium leading-relaxed">
              We handle the paperwork and legal complexities so you can focus on scaling your business operations globally.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-orange-200 transition-[box-shadow,border-color,background-color,color] group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <FaCheckCircle className="text-lg" />
                  </div>
                  <span className="text-sm md:text-base text-slate-700 font-bold">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Right: framed photo with navy and orange accent blocks */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto px-4 pt-4 pb-4 sm:px-6 sm:pt-5 sm:pb-6 lg:py-0 lg:flex lg:flex-col flex-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div aria-hidden="true" className="absolute left-0 bottom-0 lg:-bottom-5 w-[42%] h-[72%] rounded-2xl sm:rounded-3xl bg-[#0b2f8f]" />
            <div aria-hidden="true" className="absolute right-0 top-0 lg:-top-5 w-[30%] h-[34%] sm:h-[42%] rounded-2xl sm:rounded-3xl bg-[#f7861c]" />
            <div className="relative rounded-2xl sm:rounded-3xl bg-white p-1.5 sm:p-2 shadow-[0_24px_50px_-20px_rgba(11,42,107,.45)] lg:flex-1 lg:flex lg:flex-col">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-[320px]">
                <img
                  src={benefitsImg}
                  alt="Business registration and statutory compliance experts advising a corporate client"
                  loading="lazy"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUSINESS STRUCTURE COMPARISON */}
      <CompareTable
        pill="Choose Right"
        title="Private Limited vs LLP vs"
        highlight="Proprietorship"
        desc="The structure you pick decides your liability, taxes, compliance and ability to raise funds."
        columns={[
          { name: 'Private Limited Company', tag: 'Best for startups raising funds' },
          { name: 'LLP', tag: 'Best for professional and service firms' },
          { name: 'Sole Proprietorship', tag: 'Best for testing a small idea' },
        ]}
        rows={[
          { label: 'Owners needed', values: ['At least 2 directors and 2 shareholders', 'At least 2 designated partners', '1 owner'] },
          { label: 'Owner liability', values: ['Limited to share capital', 'Limited to agreed contribution', 'Unlimited: personal assets are at risk'] },
          { label: 'Separate legal entity', values: ['Yes', 'Yes', 'No'] },
          { label: 'Raising investment', values: ['Easiest: can issue shares to investors', 'Harder: cannot issue shares', 'Not possible'] },
          { label: 'Income tax', values: ['Company rates, with a 22% option', 'Flat 30%', 'Individual slab rates'] },
          { label: 'Audit', values: ['Statutory audit every year', 'Only above ₹40 lakh turnover or ₹25 lakh contribution', 'Tax audit only above the turnover limit'] },
          { label: 'Yearly compliance', values: ['High: board meetings, AGM, AOC-4, MGT-7', 'Moderate: Form 8 and Form 11', 'Low: income tax and GST returns'] },
          { label: 'Governing law', values: ['Companies Act, 2013', 'LLP Act, 2008', 'No separate law'] },
        ]}
        note="Tax rates exclude surcharge and cess. We help you pick the right structure for your plans."
      />

      {/* DOCUMENTS CHECKLIST */}
      <ChecklistGroups
        pill="Be Ready"
        title="Documents to"
        highlight="Keep Ready"
        desc="Most registrations need a mix of the documents below. Having them ready can save days."
        groups={[
          { Icon: FaIdCard, heading: 'Owners, Partners or Directors', items: ['PAN card', 'Aadhaar card', 'Passport-size photograph', 'Mobile number and email ID', 'Recent bank statement or utility bill as address proof'] },
          { Icon: FaHome, heading: 'Business Premises', items: ['Rent or lease agreement, or ownership proof', 'NOC from the property owner', 'Latest electricity, water or property tax bill', 'Photos of the premises (for some licences)'] },
          { Icon: FaBuilding, heading: 'Business Entity', items: ['Incorporation certificate or partnership deed', 'PAN of the business', 'Cancelled cheque or bank statement', 'Board resolution or authorisation letter for the signatory'] },
        ]}
        note="The exact list depends on the registration. We share a checklist made for your case before we start."
      />

      {/* TYPICAL TIMELINES */}
      <DueDates
        pill="Plan Ahead"
        title="How Long Does"
        highlight="It Take?"
        desc="Typical timelines once your documents are complete."
        rows={[
          { when: 'Same day', what: 'MSME / Udyam Registration', detail: 'Online, Aadhaar-based and free' },
          { when: '1–3 days', what: 'Import Export Code (IEC)', detail: 'Applied online on the DGFT portal' },
          { when: '1–2 days', what: 'Digital Signature (DSC)', detail: 'After identity verification' },
          { when: '7–30 days', what: 'GST Registration', detail: 'Longer if the officer raises a query or visits the premises' },
          { when: '7–15 days', what: 'Company Incorporation', detail: 'Name approval, filing and certificate' },
          { when: '7–60 days', what: 'FSSAI Registration / Licence', detail: 'Basic registration is quicker than a state or central licence' },
          { when: '1–2 days', what: 'Trademark Application', detail: 'You can use the ™ symbol once filed' },
          { when: '12+ months', what: 'Trademark Registration', detail: 'Through examination, publication and approval' },
        ]}
        note="Timelines are typical, not guaranteed. Government processing times vary."
      />

      {/* CORPORATE SECRETARIAL & ROC COMPLIANCE */}
      <ChecklistGroups
        pill="After Incorporation"
        title="Corporate Secretarial and"
        highlight="ROC Compliance"
        desc="Registration is only the start. We handle the routine and event-based compliance every company faces under the Companies Act, 2013."
        groups={[
          { Icon: FaSearch, heading: 'Secretarial Audit and Due Diligence', items: ['Support in conducting secretarial audits', 'Due diligence reports for corporate transactions and compliance reviews'] },
          { Icon: FaExchangeAlt, heading: 'Corporate Actions and Restructuring', items: ['Share split and duplicate share certificates', 'Issue of bonus shares', 'Buy-back of shares', 'Strike-off of a company from the ROC'] },
          { Icon: FaHandHoldingHeart, heading: 'CSR Compliance', items: ['Calculation of CSR obligation', 'CSR reports and annual action plans', 'Filing of Form CSR-2 and ongoing support'] },
          { Icon: FaLink, heading: 'Charges and ROC Filings', items: ['Creation, modification and satisfaction of charges', 'Filing of the related e-forms with the ROC'] },
          { Icon: FaMapMarkedAlt, heading: 'Registered Office and Structural Changes', items: ['Shifting the registered office outside local limits, within the same state and ROC', 'Changes in directors, auditors, company name and registered office'] },
          { Icon: FaLayerGroup, heading: 'Share Capital and Demat', items: ['Dematerialisation of shares', 'Obtaining ISIN as per depository norms', 'PAS-6 filing and share capital reconciliation'] },
          { Icon: FaUsersCog, heading: 'Meetings and Minutes', items: ['Notices, agendas and minutes for Board and Committee meetings', 'Annual General Meetings (AGM)', 'Extraordinary General Meetings (EGM)'] },
          { Icon: FaClipboardList, heading: 'Statutory Filings and Annual Compliance', items: ['AOC-4 / AOC-4 XBRL and MGT-7', 'DPT-3, MSME-1 and MGT-14', 'ADT-1 / ADT-3, DIR-12 and INC-22', 'RUN name applications and KYC compliance'] },
          { Icon: FaBook, heading: 'Statutory Registers and Records', items: ['Register of Members', 'Register of Share Transfers', 'Register of Directors and Key Managerial Personnel', 'Other mandatory statutory records'] },
        ]}
        note="Hands-on experience with the MCA portal and ROC procedures, for timely and accurate filings. Tell us your needs and we will tailor the scope."
      />

      {/* WHAT YOU GET */}
      <ChecklistGroups
        pill="Why Arvion"
        title="What You Get"
        highlight="With Every Registration"
        groups={[
          { Icon: FaSearch, heading: 'Before Filing', items: ['A review of which registrations apply to you', 'A document checklist for your business', 'Clear timelines before we begin'] },
          { Icon: FaPaperPlane, heading: 'During Filing', items: ['Applications prepared and filed by experts', 'Replies to department queries', 'Status updates by phone and email'] },
          { Icon: FaBell, heading: 'After Approval', items: ['Digital copies of all certificates', 'Reminders for renewals and returns', 'Help with the compliances that follow'] },
        ]}
      />

      {/* COMMON MISTAKES */}
      <MistakesGrid
        title="Common Registration"
        highlight="Mistakes"
        desc="Small errors cause rejections, delays and penalties. Here is how to avoid them."
        items={[
          { mistake: 'Choosing the wrong business structure', fix: 'Compare a company, LLP and proprietorship on funding plans, liability and compliance before you register.' },
          { mistake: 'Names or addresses that do not match', fix: 'Keep your name and address the same across PAN, Aadhaar, bank records and rent agreement.' },
          { mistake: 'Picking a brand name without a search', fix: 'Run a trademark search before you print, build a website or launch.' },
          { mistake: 'Starting operations before licences', fix: 'Get mandatory licences such as FSSAI and the trade licence before you open for business.' },
          { mistake: 'Forgetting filings after registration', fix: 'GST returns are due even in months with no sales, and companies must file annual ROC returns.' },
          { mistake: 'Missing licence renewals', fix: 'Track expiry dates for FSSAI, trade licence and other renewable licences well in advance.' },
        ]}
      />

      {/* FAQ SECTION */}
      <FaqSection
        desc="Common questions about company registration and compliance."
        items={[
          { Icon: FaFileAlt, q: "What documents are required for company incorporation?", a: "Generally, you will need ID proofs (PAN, Aadhaar/Passport), address proofs, and photographs of the directors, along with proof of the registered office address." },
          { Icon: FaClock, q: "How long does it take to register a new company?", a: "With all documents in place, the entire incorporation process usually takes 7 to 15 working days, depending on government processing times." },
          { Icon: FaBuilding, q: "Do I need a commercial space to register my company?", a: "No, you can register your company at a residential address. You only need a NOC from the owner and a utility bill as proof of address." },
          { Icon: FaBalanceScale, q: "What is the difference between a Private Limited Company and an LLP?", a: "A Private Limited Company offers shares and is suitable for startups seeking funding. An LLP offers the benefits of limited liability but is structured more flexibly like a partnership, often with fewer compliance requirements." },
          { Icon: FaShieldAlt, q: "Do you handle post-incorporation compliances?", a: "Yes, we offer complete post-incorporation support including PAN/TAN applications, bank account opening assistance, GST registration, and ongoing annual compliances." },
        ]}
      />

      {/* 5. TESTIMONIALS */}
      {/* <TestimonialSection /> (hidden for now, kept for future use) */}

      {/* 6. CTA / CONTACT SECTION */}
      <section className="relative py-8 md:py-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a2766] via-[#0e3480] to-[#14409a]">
        {/* Soft decorative shapes (same style as the "Why Arvion" section) */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-16 left-[8%] w-72 h-72 rounded-[40%] bg-white/[0.05] rotate-12" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-[6%] w-80 h-80 rounded-full bg-white/[0.04]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 uppercase tracking-tight"
          >
            Ready to Formalize Your Business?
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Contact us today to ensure your corporate entity is fully compliant.
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
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default RegistrationsPage;
