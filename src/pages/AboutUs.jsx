import React, { useState } from 'react';
import aboutImage from '../assets/about-us-team.webp';
import receptionImage from '../assets/about-reception.webp';
import { Link } from 'react-router-dom';
import { Lightbulb, UsersRound, ShieldCheck, Rocket } from 'lucide-react';
import TestimonialSection from '../components/TestimonialSection';
import { WhoWeAre, VisionMissionValues, WhatWeDo, WhyChooseArvion, Journey, Leadership, FinalCTA } from '../components/about/AboutSections';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaChartLine, FaRegClock, FaGlobe, FaCertificate, FaQuoteLeft,
  FaCalendarCheck, FaArrowRight, FaHome, FaChevronRight
} from 'react-icons/fa';
import '../csssection/AboutUs.css'; // Maintaining backward compatibility

const About = ({ isSinglePage }) => {
  // Only one <h1> per page: embedded in the home page this becomes an <h2>.
  const Heading = isSinglePage ? 'h2' : 'h1';
  const [showImgDesc, setShowImgDesc] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const stats = [
    { value: '50+', label: 'Enterprise Clients', icon: <FaGlobe /> },
    { value: '99.9%', label: 'Compliance Accuracy', icon: <FaCertificate /> },
    { value: '5M+', label: 'Transactions Audited', icon: <FaChartLine /> },
    { value: '24/7', label: 'Automated Uptime', icon: <FaRegClock /> },
  ];

  return (
    <div className={isSinglePage ? "w-full relative box-border overflow-hidden" : "w-full min-h-screen bg-[#f8f9fa] relative box-border overflow-hidden"}>

      {/* Background Radial Grid Pattern matching Features block */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:32px_32px] opacity-60 pointer-events-none z-0" />

      <div className="relative z-10 w-full">

        {/* 1. Hero (standalone About page): navy panel with curved orange edge, reception photo on the right */}
        {!isSinglePage && (
          <>
            <section className="relative w-full overflow-hidden bg-[#0b2a6b] text-white pt-16 lg:min-h-[calc(100svh-38px)] lg:flex lg:flex-col">
              {/* Reception photo: full height on the right (desktop) */}
              <div aria-hidden="true" className="hidden lg:block absolute top-16 bottom-0 right-0 w-[60%]">
                <img
                  src={receptionImage}
                  alt=""
                  width="1254"
                  height="680"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-[52%_45%]"
                />
              </div>

              {/* Navy panel with curved right edge + orange accent line (desktop) */}
              <svg aria-hidden="true" overflow="visible" className="hidden lg:block absolute top-16 bottom-0 left-0 overflow-visible h-[calc(100%-4rem)] w-[58%] xl:w-[56%]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="aboutNavy" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0a2766" />
                    <stop offset="1" stopColor="#14409a" />
                  </linearGradient>
                </defs>
                <path d="M0,0 H100 C88,26 80,52 84,74 C86,86 89,94 92,100 H0 Z" fill="url(#aboutNavy)" />
                <path d="M100,0 C88,26 80,52 84,74 C86,86 89,94 92,100" fill="none" stroke="#f7941d" strokeWidth="5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>

              {/* Soft decorative shapes on the navy */}
              <div aria-hidden="true" className="pointer-events-none absolute top-6 left-[28%] w-64 h-64 rounded-[40%] bg-white/[0.06] rotate-12" />
              <div aria-hidden="true" className="pointer-events-none absolute top-[40%] -left-20 w-48 h-64 rounded-[45%] bg-white/[0.05]" />

              <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:flex-1 lg:flex lg:flex-col">
                {/* Breadcrumb: pinned to the top of the hero */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 pt-4 sm:pt-5 text-[13px] sm:text-sm text-white/80">
                  <FaHome className="text-[13px]" aria-hidden="true" />
                  <Link to="/" className="hover:text-white focus:outline-none focus-visible:underline">Home</Link>
                  <FaChevronRight className="text-[9px] text-white/60" aria-hidden="true" />
                  <span className="font-semibold text-white" aria-current="page">About Us</span>
                </nav>

                <div className="lg:flex-1 lg:flex lg:items-center">
                <div className="w-full lg:w-[40%] pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-6 lg:pb-16 xl:pb-20 grid gap-4 sm:gap-5">
                  <motion.span
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="mt-2 inline-flex items-center gap-2 w-max max-w-full bg-white/10 border border-white/15 text-white text-xs sm:text-[13px] font-semibold px-3.5 py-1.5 rounded-full"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#f7941d]" /> About Our Company
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
                    className="text-[32px] sm:text-[44px] lg:text-[46px] xl:text-[54px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white"
                  >
                    About Arvion<br />
                    <span className="relative inline-block">
                      Technologies
                      <svg aria-hidden="true" viewBox="0 0 120 14" preserveAspectRatio="none" className="absolute right-0 -bottom-2 sm:-bottom-3 w-[42%] h-2.5 sm:h-3.5 text-[#f7941d]">
                        <path d="M3 11 C 35 3, 85 2, 117 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-2 text-[15px] sm:text-[17px] text-white/85 max-w-xl leading-relaxed"
                  >
                    Arvion Technologies Private Limited is a technology-driven company providing software products and business services for educational institutions and organisations.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex flex-wrap gap-3 sm:gap-4 mt-2"
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-5 sm:px-7 rounded-lg bg-gradient-to-b from-[#ff9c3f] to-[#f2700f] hover:brightness-105 text-white font-bold text-sm sm:text-[15px] shadow-lg shadow-orange-900/30 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
                    >
                      <FaCalendarCheck /> Book a Free Demo
                    </Link>
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-5 sm:px-7 rounded-lg bg-white hover:bg-blue-50 text-[#0f2a6b] font-bold text-sm sm:text-[15px] shadow-lg shadow-black/15 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                    >
                      Explore Our Solutions <FaArrowRight className="text-xs" />
                    </Link>
                  </motion.div>
                </div>
                </div>
              </div>

              {/* Photo for small screens, with the orange accent on top */}
              <div className="lg:hidden relative border-t-4 border-[#f7941d]">
                <img
                  src={receptionImage}
                  alt="Arvion Technologies office reception with company logo"
                  width="1254"
                  height="680"
                  className="block w-full h-auto"
                />
              </div>
            </section>

          </>
        )}

        {/* 1b. Compact hero used when embedded in the home page */}
        {isSinglePage && (
        <section className={isSinglePage ? "py-8 sm:py-10 bg-gradient-to-b from-white/95 to-slate-50/50 w-full box-border px-4 sm:px-6 lg:px-8" : "py-16 sm:py-24 bg-gradient-to-b from-white/95 to-slate-50/50 w-full box-border px-4 sm:px-6 lg:px-8"}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Hero Left Content */}
            <motion.div
              className="flex flex-col text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#ff7f32] bg-orange-50 border border-orange-100 mb-4 shadow-sm">
                About Our Company
              </span>
              <Heading className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0d1b2a] tracking-tight leading-tight mb-4 font-sans uppercase">
                About Arvion Technologies
              </Heading>
              <h2 className="text-lg font-bold text-[#ff7f32] tracking-wide mb-6 uppercase">
                Driving Innovation, Empowering Businesses.
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-4 font-semibold">
                Founded on the principle of simplifying complex business processes, Arvion Technologies is a leader in providing bespoke ERP and Outsourcing solutions. Our mission is to empower organizations by leveraging cutting-edge technology to enhance efficiency, foster growth, and ensure compliance.
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-semibold">
                Our team of dedicated experts brings together years of industry experience and a passion for problem-solving. We believe in building strong partnerships with our clients, understanding their unique challenges, and delivering solutions that not only meet but exceed their expectations.
              </p>
            </motion.div>

            {/* Hero Right Image wrapper with premium shadow */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group max-w-lg mx-auto aspect-[4/3] flex items-center justify-center bg-white cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              onClick={() => setShowImgDesc(!showImgDesc)}
            >
              <img
                src={aboutImage}
                alt="Arvion Technologies team at the Bangalore office"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />

              {/* Clickable Description Overlay */}
              <AnimatePresence>
                {showImgDesc && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm z-20"
                  >
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-3 uppercase tracking-wider">Empowering Institutions</h3>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-semibold">
                      Guided by our core pillars of Study, Discipline, Respect, and Dream—we build technologies that enable excellence today and success tomorrow.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>
        )}

        {/* 2. Stats Strip Section (Google style metrics) */}
        {/* <section className={isSinglePage ? "py-8 bg-white w-full border-y border-slate-100/80 box-border px-4 sm:px-6 lg:px-8" : "py-12 bg-white w-full border-y border-slate-100/80 box-border px-4 sm:px-6 lg:px-8"}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100/50 hover:border-orange-100 transition-colors duration-300">
                  <span className="p-3 rounded-xl bg-orange-50 text-[#ff7f32] text-lg flex-shrink-0">
                    {stat.icon}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl sm:text-3xl font-black text-[#0d1b2a] leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Standalone About page: full set of sections */}
        {!isSinglePage && (
          <>
            <WhoWeAre />
            <VisionMissionValues />
            <WhatWeDo />
            <WhyChooseArvion />
            <Journey />
            <Leadership />
            <TestimonialSection />
            <FinalCTA />
          </>
        )}

        {/* Home page embed: values and leadership quote only */}
        {isSinglePage && (
          <>
        {/* 3. Core Values Section */}
        <section className={`relative overflow-hidden w-full box-border px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f7faff] via-white to-[#f3f7ff] ${isSinglePage ? 'pt-8 sm:pt-10 pb-14 sm:pb-16' : 'pt-8 sm:pt-10 pb-14 sm:pb-16'}`}>
          {/* Background decoration: soft corner glow, dot grid, bottom waves with an orange line */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[300px] rounded-full bg-blue-100/40 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none hidden sm:block absolute top-6 right-6 lg:right-10 w-20 h-14 opacity-70 bg-[radial-gradient(#b9cdf0_1.6px,transparent_1.6px)] [background-size:14px_14px]" />
          <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 w-full h-24 sm:h-32" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path d="M0,96 C240,40 480,40 720,92 C960,144 1200,150 1440,96 L1440,160 L0,160 Z" fill="#dbe7fb" opacity="0.55" />
            <path d="M0,124 C300,84 560,92 820,126 C1060,156 1260,150 1440,118 L1440,160 L0,160 Z" fill="#c9dbf7" opacity="0.55" />
            <path d="M560,150 C860,138 1120,96 1440,38" fill="none" stroke="#f7941d" strokeWidth="2" opacity="0.85" />
          </svg>

          <div className="relative max-w-6xl mx-auto">
            {/* Heading */}
            <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
              <div className="flex items-center gap-3 sm:gap-4">
                <span aria-hidden="true" className="w-8 sm:w-12 h-px bg-[#f7941d]/70" />
                <span className="px-4 sm:px-5 py-1.5 rounded-full bg-[#ffe9d6] text-[#e8730c] text-[11px] sm:text-[13px] font-extrabold uppercase tracking-[0.12em]">
                  Our Foundations
                </span>
                <span aria-hidden="true" className="w-8 sm:w-12 h-px bg-[#f7941d]/70" />
              </div>
              <h2 className="mt-4 sm:mt-5 text-[28px] sm:text-4xl lg:text-[44px] font-extrabold text-[#0b1f4d] tracking-tight leading-tight">
                The <span className="text-[#f7861c]">Values</span> That Guide Us
              </h2>
              <p className="mt-3 sm:mt-4 max-w-2xl text-[15px] sm:text-[17px] text-slate-600 leading-relaxed">
                Our core values define who we are, how we work, and the impact we create for our clients, partners and the communities we serve.
              </p>
            </div>

            {/* Value cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { title: 'Innovation', desc: 'Continuous improvement and automated operations through cutting-edge cloud software solutions.', Icon: Lightbulb, tone: { icon: 'from-[#fff1e3] to-[#ffe2c7] text-[#f47b14]', bar: 'bg-[#f47b14]', wave: '#f47b14', glow: 'from-[#fff3e8]' } },
                { title: 'Collaboration', desc: 'We work hand-in-hand with administrative, HR, and finance leaders to craft bespoke system designs.', Icon: UsersRound, tone: { icon: 'from-[#eaf2ff] to-[#d7e6ff] text-[#2563eb]', bar: 'bg-[#2563eb]', wave: '#2563eb', glow: 'from-[#eef4ff]' } },
                { title: 'Reliability', desc: 'Consistently delivering tax-compliant, secure records that guarantee clean and audit-ready bookkeeping.', Icon: ShieldCheck, tone: { icon: 'from-[#f3edff] to-[#e6dcff] text-[#7c3aed]', bar: 'bg-[#7c3aed]', wave: '#7c3aed', glow: 'from-[#f5f0ff]' } },
                { title: 'Impact', desc: 'Empowering school and office operations with digital billing structures and automated tax calculations.', Icon: Rocket, tone: { icon: 'from-[#e8f8ee] to-[#d3f1de] text-[#16a34a]', bar: 'bg-[#22c55e]', wave: '#22c55e', glow: 'from-[#ecfaf1]' } },
              ].map(({ title, desc, Icon, tone }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200/70 shadow-[0_6px_20px_-12px_rgba(15,42,107,.18)] hover:shadow-[0_14px_30px_-16px_rgba(15,42,107,.28)] hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 pb-12 sm:pb-14"
                >
                  {/* Soft tinted curve in the top-right corner */}
                  <div aria-hidden="true" className={`pointer-events-none absolute -top-10 -right-16 w-48 h-48 rounded-full bg-gradient-to-bl ${tone.glow} to-transparent opacity-90`} />
                  {/* Coloured swoosh in the bottom-right corner */}
                  <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[62%] h-12" viewBox="0 0 200 48" preserveAspectRatio="none">
                    <path d="M0,48 C80,46 150,36 200,6 L200,48 Z" fill={tone.wave} opacity="0.12" />
                    <path d="M70,48 C130,44 172,30 200,14 L200,48 Z" fill={tone.wave} opacity="0.9" />
                  </svg>

                  <span className={`relative inline-flex items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-xl bg-gradient-to-br ${tone.icon} transition-transform duration-300 group-hover:scale-105`}>
                    <Icon size={28} strokeWidth={1.8} />
                  </span>
                  <h3 className="relative mt-5 text-xl sm:text-[22px] font-extrabold text-[#0b1f4d]">{title}</h3>
                  <span aria-hidden="true" className={`relative block mt-3 w-10 h-1 rounded-full ${tone.bar}`} />
                  <p className="relative mt-4 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. Quote / Mission Vision Section */}
        <section className={isSinglePage ? "py-8 sm:py-10 bg-white w-full box-border px-4 sm:px-6 lg:px-8 border-t border-slate-100" : "py-10 sm:py-12 bg-white w-full box-border px-4 sm:px-6 lg:px-8 border-t border-slate-100"}>
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <span className="text-[#ff7f32] opacity-25 text-5xl mb-6">
              <FaQuoteLeft />
            </span>
            <p className="text-sm sm:text-xl lg:text-2xl font-serif italic text-slate-700 leading-relaxed tracking-wide mb-8">
              "Our mission is to remove administrative overhead from dedicated teams. By combining robust automation software with expert compliance directives, we ensure your corporation scales on solid ground."
            </p>
            <div className="h-[2px] w-16 bg-[#ff7f32] mb-4" />
            <span className="text-xs font-bold text-[#0d1b2a] tracking-widest uppercase font-sans">
              -The Arvion Leadership Team
            </span>
          </div>
        </section>
          </>
        )}

      </div>
    </div>
  );
};

export default About;
