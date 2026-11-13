import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaBuilding, FaStamp, FaGlobe, FaShieldAlt, FaCheckCircle,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaUserTie,
  FaClock, FaHeadset, FaFileAlt, FaBalanceScale
} from 'react-icons/fa';

import TestimonialSection from '../components/TestimonialSection';
import FaqSection from '../components/FaqSection';
import heroIllustration from '../assets/service-heroes/statutory-hero.webp';
import heroImg from '../assets/service-registrations.webp';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0d1b2a] uppercase tracking-tight">A Closer Look at Our Features</h2>
            <div className="w-24 h-1 bg-[#ff7f32] mx-auto mt-4 rounded-full"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {detailedFeatures.map((feat, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="bg-[#f8f9fa] p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
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
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-orange-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <FaCheckCircle className="text-lg" />
                  </div>
                  <span className="text-sm md:text-base text-slate-700 font-bold">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="flex-1" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={heroImg} alt="Business registration documents for GST, PF, ESI and statutory compliance" loading="lazy" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1b2a]/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

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
      <TestimonialSection />

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
            className="text-base md:text-lg text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Contact us today to ensure your corporate entity is fully compliant.
          </motion.p>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-10 mb-8 md:mb-12"
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
