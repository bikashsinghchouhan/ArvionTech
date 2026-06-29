import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBuilding, FaStamp, FaGlobe, FaShieldAlt, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import TestimonialSection from '../components/TestimonialSection';
import heroImg from '../assets/service-registrations.png';

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
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-[120px] pb-24 md:pt-[160px] md:pb-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Statutory Registrations Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1b2a]/80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            Corporate Compliance
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight uppercase"
          >
            Statutory Registrations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Building your business on a solid legal foundation.
          </motion.p>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-6 uppercase tracking-tight">Navigate Compliance with Confidence</h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-medium">
            Ensure your business is built on a solid legal foundation with our expert statutory registration services. We guide you through the complexities of company incorporation, GST registration, and more, allowing you to launch and operate your business with confidence.
          </p>
        </motion.div>
      </section>

      {/* 3. FEATURES GRID */}
      <section className="py-16 px-4 bg-white">
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
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="flex-1" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-[#0d1b2a] mb-6 uppercase tracking-tight">Unlock Key Benefits</h2>
            <p className="text-slate-500 mb-8 font-medium leading-relaxed">
              We handle the paperwork and legal complexities so you can focus on scaling your business operations globally.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-bold">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="flex-1" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={heroImg} alt="Statutory Compliance" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1b2a]/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <TestimonialSection />

      {/* 6. CTA / CONTACT SECTION */}
      <section className="relative py-12 md:py-24 flex items-center justify-center overflow-hidden mt-6 md:mt-10">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Tech Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        </div>
        
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
