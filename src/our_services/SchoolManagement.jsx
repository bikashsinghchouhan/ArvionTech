import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaMobileAlt, FaWhatsapp, FaGlobe, FaMoneyBillWave, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPlus, FaMinus, FaStar, FaQuoteLeft, FaChartLine, FaClipboardCheck, FaBookOpen, FaBusAlt, FaBullhorn, FaUserCheck, FaMapMarker, FaBookReader, FaChevronLeft, FaChevronRight, FaPlayCircle, FaSearch, FaLock, FaUsers, FaServer, FaCodeBranch, FaCube, FaExpandArrowsAlt, FaSitemap, FaShieldAlt, FaSlidersH, FaHeadset, FaDesktop, FaSyncAlt, FaChevronDown, FaCalendarCheck } from 'react-icons/fa';
import TestimonialSection from '../components/TestimonialSection';
import techImage from '../assets/techImage.png';
import schoolErpMobile from '../assets/school_erp_mobile.png';
import schoolHeroRight from '../assets/school_hero_generated.png';

// --- CONFIGURATION ---
import { pageConfig } from '../configurations/SchoolManagementConfig';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const SchoolManagement = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  const featuresEndRef = useRef(null);
  const testiScrollRef = useRef(null);

  const scrollTestimonials = (direction) => {
    if (testiScrollRef.current) {
      // scroll by one card width (approx 1/3 of the container width)
      const scrollAmount = testiScrollRef.current.offsetWidth / (window.innerWidth < 768 ? 1 : 3);
      testiScrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  const handleToggleFeatures = () => {
    if (showAllFeatures) {
      // If we are about to view less, scroll to the button to keep it in view
      setTimeout(() => {
        featuresEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 10);
    }
    setShowAllFeatures(!showAllFeatures);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans w-full overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-white pt-16  sm:pt-20 lg:pt-24 pb-8 lg:pb-16 overflow-hidden">
        {/* Background Decorative Elements - Right Side Only */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full bg-[#f4f8fe] rounded-bl-[100px] -z-20"></div>
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full opacity-[0.15] -z-10 rounded-bl-[100px]" style={{ backgroundImage: 'radial-gradient(#4285F4 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 lg:w-1/3 h-3/4 bg-[#e1edff] rounded-bl-[200px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10 ">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8 ">

            {/* Left Content */}
            <div className="w-full  lg:w-1/2 flex flex-col justify-center items-start text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase"
              >
                School Management Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] mb-6 leading-[1.1] tracking-tight"
              >
                Smarter Management.<br />
                <span className="text-[#0B1B3D]">Stronger Institution.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
              >
                End-to-end school management solutions to help you save time, ensure compliance, and keep your students and staff happy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
              >
                <Link to="/contact" className="bg-[#FF8000] hover:bg-[#E67300] text-white px-8 py-3.5 rounded-md font-semibold text-center transition-colors shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2">
                  Get Started <FaChevronRight className="text-sm" />
                </Link>
                <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-[#0B1B3D] px-8 py-3.5 rounded-md font-semibold text-center transition-colors flex items-center justify-center gap-2">
                  <FaPlayCircle className="text-blue-600 text-lg" /> How It Works
                </button>
              </motion.div>

              {/* Checkmarks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600 font-medium pt-6 border-t border-gray-100 w-full"
              >
                <div className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> 100% Compliance</div>
                <div className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Data Security</div>
                <div className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Scalable Solutions</div>
                <div className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Expert Support</div>
              </motion.div>
            </div>

            {/* Right Image/Mockup */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-lg lg:max-w-xl mx-auto lg:mr-0"
              >

                {/* Rectangular Image seamlessly blended into background with faded edges */}
                <img src={schoolHeroRight} alt="School Management Hero" className="w-full h-auto rounded-xl relative z-10 object-cover scale-x-[-1] " style={{ WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 70%, transparent 100%)', maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 70%, transparent 100%)' }} />

                {/* Floating Cards (Optional/Extra aesthetics) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-4 sm:top-8 -left-2 sm:-left-4 lg:-left-10 bg-white p-2 sm:p-4 rounded-xl shadow-xl z-20 flex items-center gap-2 sm:gap-3 scale-75 sm:scale-100 origin-top-left"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center text-sm sm:text-base"><FaBookOpen /></div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Active Schools</p>
                    <p className="text-base sm:text-lg font-bold text-gray-800">50+</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute top-1/3 -right-4 sm:-right-6 lg:-right-12 bg-white p-2 sm:p-4 rounded-xl shadow-xl z-20 flex items-center gap-2 sm:gap-3 scale-75 sm:scale-100 origin-top-right"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-sm sm:text-base"><FaUserCheck /></div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Students Managed</p>
                    <p className="text-base sm:text-lg font-bold text-gray-800">40K+</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-10 sm:bottom-16 -left-0 sm:-left-2 lg:-left-6 bg-white p-2 sm:p-4 rounded-xl shadow-xl z-20 block scale-75 sm:scale-100 origin-bottom-left"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs sm:text-sm"><FaClipboardCheck /></div>
                    <p className="text-xs sm:text-sm font-bold text-gray-800">Compliance</p>
                  </div>
                  <div className="flex items-end gap-1 sm:gap-2">
                    <p className="text-xl sm:text-2xl font-black text-green-500">100%</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 pb-0.5 sm:pb-1">On Time</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="bg-[#1A4B8F] py-8 w-full z-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-white/90 text-sm font-medium mb-6">Trusted by 500+ Educational Institutions Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale brightness-200 contrast-100">
            <div className="text-white font-bold text-xl flex items-center gap-2"><span className="text-2xl">⬢</span> company</div>
            <div className="text-white font-bold text-xl flex items-center gap-2">HEXLAB</div>
            <div className="text-white font-bold text-xl flex items-center gap-2"><span className="text-2xl">◎</span> CIRCLE</div>
            <div className="text-white font-bold text-xl flex items-center gap-2"><span className="text-2xl">〰</span> wave</div>
            <div className="text-white font-bold text-xl flex items-center gap-2"><span className="bg-white text-[#1A4B8F] px-1 rounded text-sm">M</span> Martino</div>
          </div>
        </div>
      </section> */}



      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 px-4 w-full mx-auto bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-2xl md:text-4xl font-bold text-slate-800 mb-6">
              Why Choose Our School ERP?
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-slate-500 max-w-3xl mx-auto text-base md:text-lg">
              We go beyond basic administration. Our platform is a comprehensive ecosystem designed to transform how your educational institution operates, empowering educators, engaging parents, and driving student success.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "100% Cloud-Based & Secure",
                desc: "Access your school's data securely from anywhere. Our cloud infrastructure features enterprise-grade encryption and automated backups to ensure complete data protection.",
                icon: <FaServer />
              },
              {
                title: "Intuitive & User-Friendly",
                desc: "Designed for effortless navigation. Teachers, admins, and parents can use the system immediately, requiring zero technical training or complex onboarding.",
                icon: <FaDesktop />
              },
              {
                title: "Highly Customizable & Scalable",
                desc: "From small schools to large university groups, our modular architecture adapts and scales seamlessly as your educational institution expands over time.",
                icon: <FaExpandArrowsAlt />
              },
              {
                title: "Real-Time Analytics & Reporting",
                desc: "Empower decision-making with instant, actionable insights. Monitor student performance, financial health, and staff productivity through an advanced dashboard.",
                icon: <FaChartLine />
              },
              {
                title: "Dedicated 24/7 Support",
                desc: "Experience worry-free operations with our dedicated success team. We provide full implementation training and reliable round-the-clock technical assistance.",
                icon: <FaHeadset />
              },
              {
                title: "Seamless Integration",
                desc: "Connect seamlessly with your existing tools. Our API-first platform integrates effortlessly with biometric devices, accounting software, and payment gateways.",
                icon: <FaCodeBranch />
              }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:border-orange-200 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW ERP SOLVES PROBLEMS */}
      <section className="py-20 px-4 w-full mx-auto bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            One Platform. Complete Control.
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-slate-500 mb-12">
            Our ERP directly targets the pain points of modern educational administration.
          </motion.p>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-left">
            {[
              { prob: "Manual student records", sol: "Centralized student database" },
              { prob: "Attendance errors", sol: "Digital / AI attendance" },
              { prob: "Fee tracking difficulty", sol: "Automated fee management" },
              { prob: "Delayed results", sol: "Digital examination system" },
              { prob: "Poor communication", sol: "Notifications and announcements" },
              { prob: "Permission issues", sol: "Role-Based Access Control" },
              { prob: "Multiple branches", sol: "Centralized multi-school control" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className={`grid grid-cols-1 md:grid-cols-2 gap-4 p-5 ${idx !== 6 ? 'border-b border-slate-100' : ''}`}>
                <div className="flex items-center gap-3 text-slate-600"><FaTimesCircle className="flex-shrink-0 text-red-400" /> <span>{item.prob}</span></div>
                <div className="flex items-center gap-3 text-slate-800 font-semibold md:pl-8 md:border-l border-slate-100"><FaCheckCircle className="flex-shrink-0 text-green-500" /> {item.sol}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* 1.5 FEATURES OVERVIEW */}
      <section className="py-16 bg-white px-4 max-w-full mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-2xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Comprehensive Feature Suite
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto"
          >
            Everything you need to run your institution efficiently.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {(showAllFeatures ? pageConfig.featureSuite : pageConfig.featureSuite.slice(0, 6)).map((feature, idx) => {
            const isActive = activeFeature === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (idx % 6) * 0.05 }}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${isActive ? 'border-orange-500 shadow-md bg-white' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}
              >
                <button
                  onClick={() => toggleFeature(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                >
                  <h4 className={`font-bold text-lg text-left transition-colors ${isActive ? 'text-orange-600' : 'text-slate-800'}`}>
                    {feature.title}
                  </h4>
                  <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}>
                    {isActive ? <FaMinus className="text-orange-500" /> : <FaPlus className="text-slate-400" />}
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-4">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {pageConfig.featureSuite.length > 6 && (
          <div className="max-w-4xl mx-auto mt-4 flex justify-end" ref={featuresEndRef}>
            <button
              onClick={handleToggleFeatures}
              className="text-orange-500 hover:text-orange-600 font-medium text-sm md:text-base flex items-center transition-colors focus:outline-none"
            >
              {showAllFeatures ? "View Less" : "View All Features"}
            </button>
          </div>
        )}
      </section>
      {/* 3. PLANS */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-slate-50 border-t border-slate-200">
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-2xl md:text-4xl font-bold text-slate-800 mb-6"
          >
            Flexible Plans for Every Institution
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Choose the perfect package to digitize and manage your school operations effectively.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {pageConfig.plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className={`relative bg-white rounded-2xl transition-all duration-300 overflow-hidden border-2 flex flex-col h-full ${plan.popular ? 'border-orange-500 hover:shadow-2xl' : 'border-slate-100 shadow-md hover:shadow-2xl hover:border-orange-500'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none rounded-tr-2xl z-10">
                  <div className="absolute top-6 -right-8 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest text-center py-1.5 w-40 transform rotate-45 shadow-md">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{plan.description}</p>

                <div className={`w-full h-1 bg-gradient-to-r ${plan.color} rounded-full mb-8`}></div>

                <ul className="space-y-4">
                  {plan.features.included.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                  {plan.features.excluded.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-50">
                      <FaTimesCircle className="text-slate-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-500 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="block w-full py-3 rounded-lg font-bold text-white transition-transform hover:scale-[1.02] bg-[#f97316] text-center shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 1.2 APP FEATURES */}
      <section className="py-10 px-4 w-full mx-auto bg-slate-50 overflow-hidden">
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            // className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight"
            className="text-2xl md:text-4xl font-bold text-slate-800 mb-6"
          >

            School Software Features
          </motion.h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-8 max-w-4xl mx-auto px-2">

          {/* LEFT FEATURES */}
          <div className="flex-1 space-y-8 md:space-y-12 flex flex-col justify-center h-full relative z-20">
            {pageConfig.appFeaturesLeft.map((feat, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-right flex flex-col lg:flex-row items-end lg:items-center justify-end gap-2 md:gap-4">
                <div className="lg:order-2 flex-shrink-0 bg-blue-50 p-2 lg:p-4 rounded-full hidden md:block">{feat.icon}</div>
                <div className="lg:order-1">
                  <h4 className="font-bold text-slate-800 text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight md:leading-normal">{feat.title}</h4>
                  <p className="text-slate-500 text-xs mt-1 hidden md:block">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PHONE MOCKUP */}
          <motion.div className="flex-shrink-0 w-[45%] sm:w-[35%] max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[360px] relative z-0 flex items-center justify-center pointer-events-none" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="absolute inset-0 bg-blue-500/10 md:bg-blue-500/20 rounded-full blur-xl md:blur-3xl -z-10 transform scale-110"></div>
            <img src={schoolErpMobile} alt="Mobile App Features" className="w-full mix-blend-darken scale-[1.5] md:scale-[1.8]" />
          </motion.div>

          {/* RIGHT FEATURES */}
          <div className="flex-1 space-y-8 md:space-y-12 flex flex-col justify-center h-full relative z-20">
            {pageConfig.appFeaturesRight.map((feat, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-left flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-4">
                <div className="flex-shrink-0 bg-blue-50 p-2 lg:p-4 rounded-full hidden md:block">{feat.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight md:leading-normal">{feat.title}</h4>
                  <p className="text-slate-500 text-xs mt-1 hidden md:block">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>



      {/* 4. ADD-ONS / MODULES */}
      <section className="py-20 px-4 w-full mx-auto bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="text-3xl font-bold text-slate-800 mb-4"
            >
              Upcoming Modules & Add-ons
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="text-slate-500"
            >
              Extend the functionality of your ERP with specialized modules.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {pageConfig.modules.map((mod, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-slate-50 p-6 rounded-xl shadow-md border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  {mod.icon}
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{mod.title}</h4>
                {/* <span className="text-indigo-600 font-semibold">{mod.price}</span> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECURITY SECTION */}
      <section className="py-20 px-4 w-full mx-auto bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-3xl font-bold text-slate-800 mb-4">
              Built with Security at the Core
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-slate-500 max-w-2xl mx-auto">
              Your institutional data is protected by enterprise-grade security protocols and strict access controls.
            </motion.p>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "JWT Authentication", icon: <FaLock />, desc: "Secure token-based login for all users." },
              { title: "Role-Based Access", icon: <FaUsers />, desc: "Granular permission controls (RBAC)." },
              { title: "Tenant Data Isolation", icon: <FaServer />, desc: "Strict separation of multi-school data." },
              { title: "Secure API Access", icon: <FaCodeBranch />, desc: "Encrypted data transmission." }
            ].map((sec, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-blue-500 text-3xl mb-4">{sec.icon}</div>
                <h4 className="font-bold text-slate-800 mb-2">{sec.title}</h4>
                <p className="text-sm text-slate-500">{sec.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IMPLEMENTATION WORKS */}
      <section className="py-20 px-4 w-full mx-auto bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-3xl font-bold text-slate-800 mb-4">
              From Demo to Digital Transformation
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-slate-500 max-w-2xl mx-auto">
              A streamlined 5-step process to get your institution running on our ERP seamlessly.
            </motion.p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start relative gap-12 md:gap-0 pt-4 pl-4 md:pl-0">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-1 bg-slate-200 -translate-y-1/2 z-0 overflow-hidden rounded-full">
              <motion.div
                className="w-full h-full bg-[#FF8000]"
                style={{ originX: 0 }}
                animate={{ scaleX: [0, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear", repeatDelay: 1 }}
              />
            </div>

            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute left-[40px] top-[40px] bottom-[24px] w-1 bg-slate-200 -translate-x-1/2 z-0 overflow-hidden rounded-full">
              <motion.div
                className="w-full h-full bg-[#FF8000]"
                style={{ originY: 0 }}
                animate={{ scaleY: [0, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear", repeatDelay: 1 }}
              />
            </div>
            {[
              { step: "1", title: "Consultation" },
              { step: "2", title: "Requirement Analysis" },
              { step: "3", title: "Configuration" },
              { step: "4", title: "Data Migration & Training" },
              { step: "5", title: "Go Live" }
            ].map((item, idx) => {
              const hitTime = idx * 0.25;
              const times = hitTime === 0 ? [0, 0.01, 1] :
                hitTime === 1 ? [0, 0.98, 1] :
                  [0, hitTime, hitTime + 0.05, 1];
              const colors = hitTime === 0 ? ["#ffffff", "#22c55e", "#22c55e"] :
                hitTime === 1 ? ["#ffffff", "#ffffff", "#22c55e"] :
                  ["#ffffff", "#ffffff", "#22c55e", "#22c55e"];

              return (
                <motion.div key={idx} variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 flex flex-row md:flex-col items-center px-0 md:px-4 w-full md:w-1/5 text-left md:text-center">
                  <motion.div
                    animate={{ borderColor: colors }}
                    transition={{ repeat: Infinity, duration: 5, ease: "linear", repeatDelay: 1, times: times }}
                    className="flex-shrink-0 w-12 h-12 bg-[#FF8000] text-white rounded-full flex items-center justify-center font-bold text-xl mb-0 md:mb-4 mr-6 md:mr-0 shadow-lg border-2 border-white"
                  >
                    {item.step}
                  </motion.div>
                  <h4 className="font-bold text-slate-800 text-base md:text-base">{item.title}</h4>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR ERP */}
      <section className="py-20 px-4 w-full mx-auto bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-3xl font-bold text-slate-800 mb-12">
            Why Schools Choose Our ERP
          </motion.h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Complete Platform", icon: <FaCube /> },
              { title: "Scalable Architecture", icon: <FaExpandArrowsAlt /> },
              { title: "Multi-School Ready", icon: <FaSitemap /> },
              { title: "Role-Based Security", icon: <FaShieldAlt /> },
              { title: "Customizable Workflows", icon: <FaSlidersH /> },
              { title: "Dedicated Support", icon: <FaHeadset /> },
              { title: "Modern User Experience", icon: <FaDesktop /> },
              { title: "Continuous Improvements", icon: <FaSyncAlt /> }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#FF8000] hover:shadow-md transition-all flex flex-col items-center">
                <div className="text-[#FF8000] text-3xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-slate-700 text-sm md:text-base">{feature.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 w-full mx-auto bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-3xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </motion.h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What is the School ERP?", a: "A comprehensive digital platform to manage all aspects of school administration, academics, and communication." },
              { q: "Who can use the platform?", a: "Admins, teachers, students, and parents all have dedicated portals with role-specific access." },
              { q: "Can the ERP be customized?", a: "Yes, we tailor workflows, grading systems, and reports to match your institution's specific needs." },
              { q: "Does it support multiple schools?", a: "Absolutely. Our platform is built with a multi-tenant architecture to support centralized control across multiple branches." },
              { q: "Is online fee payment supported?", a: "Yes, we integrate with popular payment gateways to allow parents to pay fees online securely." },
              { q: "Can existing data be migrated?", a: "Yes, our team assists with bulk data import from Excel or legacy systems during the configuration phase." },
              { q: "Does it support role-based access?", a: "Yes, our RBAC system ensures users only see data and features they are authorized to access." },
              { q: "Is training provided?", a: "We provide comprehensive training for your staff along with dedicated ongoing support." },
              { q: "How do we get started?", a: "Simply request a demo using the button below. Our team will contact you to analyze your requirements and set up a customized instance." }
            ].map((faq, idx) => {
              const isActive = activeFaq === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
                  <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 focus:outline-none hover:bg-slate-100 transition-colors">
                    {faq.q}
                    <FaChevronDown className={`transition-transform text-slate-400 ${isActive ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-5 pt-0 text-slate-600 border-t border-slate-100">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <TestimonialSection />

      {/* 6. FINAL CTA SECTION */}
      <section className="py-24 px-4 w-full mx-auto bg-gradient-to-br from-[#0B1B3D] to-[#1A4B8F] text-white text-center relative overflow-hidden mt-10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Institution?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-lg md:text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Talk to our team to explore how our School ERP can simplify operations, improve visibility, and create a more connected educational experience.
          </motion.p>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-[#FF8000] hover:bg-[#E67300] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              Request a Demo
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition-all border-2 border-white/30 hover:border-white">
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default SchoolManagement;
