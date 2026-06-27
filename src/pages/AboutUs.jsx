import React, { useState } from 'react';
import aboutImage from '../assets/about-us-team.png';
// import aboutImage from '../assets/arvion_building-1.png';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLightbulb, FaUsers, FaShieldAlt, FaRocket,
  FaChartLine, FaRegClock, FaGlobe, FaCertificate, FaQuoteLeft
} from 'react-icons/fa';
import '../csssection/AboutUs.css'; // Maintaining backward compatibility

const About = ({ isSinglePage }) => {
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
    <div className={isSinglePage ? "w-full relative box-border overflow-hidden" : "pt-[100px] sm:pt-[120px] w-full min-h-screen bg-[#f8f9fa] relative box-border overflow-hidden"}>

      {/* Background Radial Grid Pattern matching Features block */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:32px_32px] opacity-60 pointer-events-none z-0" />

      <div className="relative z-10 w-full">

        {/* 1. Hero Showcase Section */}
        <section className={isSinglePage ? "py-8 sm:py-12 bg-gradient-to-b from-white/95 to-slate-50/50 w-full box-border px-4 sm:px-6 lg:px-8" : "py-16 sm:py-24 bg-gradient-to-b from-white/95 to-slate-50/50 w-full box-border px-4 sm:px-6 lg:px-8"}>
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
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0d1b2a] tracking-tight leading-tight mb-4 font-sans uppercase">
                About Arvion Technologies
              </h1>
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
                alt="Arvion Technologies Team"
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

        {/* 3. Core Values Section (Google/Swiggy Card Grids) */}
        <section className={isSinglePage ? "py-8 sm:py-12 bg-[#f8f9fa]/50 w-full box-border px-4 sm:px-6 lg:px-8" : "py-16 sm:py-24 bg-[#f8f9fa]/50 w-full box-border px-4 sm:px-6 lg:px-8"}>
          <div className="max-w-6xl mx-auto text-center">

            <div className="flex flex-col items-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#ff7f32] bg-orange-50 border border-orange-100 mb-3 shadow-sm">
                Our Foundations
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d1b2a] tracking-tight font-sans uppercase">
                The Values That Guide Us
              </h2>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Value 1 */}
              <motion.div className="bg-white hover:bg-slate-50/10 p-6 rounded-2xl border border-slate-100 hover:border-orange-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start cursor-default group" variants={itemVariants}>
                <span className="p-3.5 rounded-xl bg-orange-50 text-[#ff7f32] group-hover:bg-[#ff7f32] group-hover:text-white transition-colors duration-300 mb-5 shadow-sm">
                  <FaLightbulb className="text-xl" />
                </span>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 font-sans">Innovation</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-semibold leading-relaxed">Continuous improvement and automated operations through cutting-edge cloud software solutions.</p>
              </motion.div>

              {/* Value 2 */}
              <motion.div className="bg-white hover:bg-slate-50/10 p-6 rounded-2xl border border-slate-100 hover:border-orange-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start cursor-default group" variants={itemVariants}>
                <span className="p-3.5 rounded-xl bg-orange-50 text-[#ff7f32] group-hover:bg-[#ff7f32] group-hover:text-white transition-colors duration-300 mb-5 shadow-sm">
                  <FaUsers className="text-xl" />
                </span>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 font-sans">Collaboration</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-semibold leading-relaxed">We work hand-in-hand with administrative, HR, and finance leaders to craft bespoke system designs.</p>
              </motion.div>

              {/* Value 3 */}
              <motion.div className="bg-white hover:bg-slate-50/10 p-6 rounded-2xl border border-slate-100 hover:border-orange-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start cursor-default group" variants={itemVariants}>
                <span className="p-3.5 rounded-xl bg-orange-50 text-[#ff7f32] group-hover:bg-[#ff7f32] group-hover:text-white transition-colors duration-300 mb-5 shadow-sm">
                  <FaShieldAlt className="text-xl" />
                </span>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 font-sans">Reliability</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-semibold leading-relaxed">Consistently delivering tax-compliant, secure records that guarantee clean and audit-ready bookkeeping.</p>
              </motion.div>

              {/* Value 4 */}
              <motion.div className="bg-white hover:bg-slate-50/10 p-6 rounded-2xl border border-slate-100 hover:border-orange-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start cursor-default group" variants={itemVariants}>
                <span className="p-3.5 rounded-xl bg-orange-50 text-[#ff7f32] group-hover:bg-[#ff7f32] group-hover:text-white transition-colors duration-300 mb-5 shadow-sm">
                  <FaRocket className="text-xl" />
                </span>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 font-sans">Impact</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-semibold leading-relaxed">Empowering school and office operations with digital billing structures and automated tax calculations.</p>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* 4. Quote / Mission Vision Section */}
        <section className={isSinglePage ? "py-8 sm:py-12 bg-white w-full box-border px-4 sm:px-6 lg:px-8 border-t border-slate-100" : "py-16 sm:py-24 bg-white w-full box-border px-4 sm:px-6 lg:px-8 border-t border-slate-100"}>
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

      </div>
    </div>
  );
};

export default About;
