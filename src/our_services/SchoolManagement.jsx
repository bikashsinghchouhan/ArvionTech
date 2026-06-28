import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaMobileAlt, FaWhatsapp, FaGlobe, FaMoneyBillWave, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPlus, FaMinus, FaStar, FaQuoteLeft, FaChartLine, FaClipboardCheck, FaBookOpen, FaBusAlt, FaBullhorn, FaUserCheck, FaMapMarker, FaBookReader, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TestimonialSection from '../components/TestimonialSection';
import techImage from '../assets/techImage.png';
import schoolErpMobile from '../assets/school_erp_mobile.png';

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
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={pageConfig.hero.image} alt="Tech Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            {pageConfig.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-xl text-slate-200"
          >
            {pageConfig.hero.subtitle}
          </motion.p>
        </div>
      </section>



      {/* 1.5 FEATURES OVERVIEW */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
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
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${isActive ? 'border-orange-500 shadow-md bg-white' : 'border-slate-200 bg-white hover:border-slate-300'}`}
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

      {/* 2. WHY CHOOSE US */}
      <section className="py-20 px-4 w-full mx-auto bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-2xl md:text-4xl font-bold text-slate-800 mb-6"
          >
            Why Choose Our School Management Software?
          </motion.h2>
          <motion.h3
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-xl md:text-2xl font-semibold text-orange-500 mb-6"
          >
            Transforming Education Through Technology
          </motion.h3>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-slate-600 text-left md:text-center leading-relaxed"
          >
            Our School Management ERP is a comprehensive solution designed to streamline every facet of your institution. From student admissions and attendance tracking to grade management and parent communication, our platform provides a centralized hub for all your data, empowering educators to focus on what matters most: teaching.
          </motion.p>
        </div>
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

      {/* 5. TESTIMONIALS */}
      <TestimonialSection />

      {/* 6. CTA / CONTACT SECTION */}
      <section className="relative py-12 md:py-24 flex items-center justify-center overflow-hidden mt-6 md:mt-10">
        <div className="absolute inset-0 z-0">
          <img src={pageConfig.hero.image} alt="Tech Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6"
          >
            {pageConfig.contact.title}
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {pageConfig.contact.subtitle}
          </motion.p>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-10 mb-8 md:mb-12"
          >
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <FaPhoneAlt className="text-orange-400 flex-shrink-0" />
              <span className="text-slate-200 text-sm md:text-base font-medium">{pageConfig.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <FaEnvelope className="text-orange-400 flex-shrink-0" />
              <span className="text-slate-200 text-sm md:text-base font-medium">{pageConfig.contact.email}</span>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <FaMapMarkerAlt className="text-orange-400 flex-shrink-0" />
              <span className="text-slate-200 text-sm md:text-base font-medium text-center md:text-left">{pageConfig.contact.address}</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <a
              href="/contact"
              className="inline-block px-8 py-3 md:px-10 md:py-4 bg-orange-500 text-white text-base md:text-lg rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all hover:-translate-y-1"
            >
              Contact Our Experts
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default SchoolManagement;
