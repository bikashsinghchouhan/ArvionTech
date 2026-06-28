import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUsers, FaCogs, FaChartBar, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import TestimonialSection from '../components/TestimonialSection';
import heroImg from '../assets/service-outsourcing.png';

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

const OutsourcingPage = () => {
  const detailedFeatures = [
    { 
      title: 'Access to a Global Talent Pool', 
      description: 'Connect with a vetted network of professionals from around the world. We provide access to specialized skills and expertise that may not be available locally, allowing you to build a world-class team without geographical limitations.', 
      icon: <FaGlobe className="text-[#ff7f32] text-3xl" /> 
    },
    { 
      title: 'Flexible and Scalable Teams', 
      description: 'Flexibly scale your team up or down to meet your project’s changing needs. Our model allows you to quickly adapt to market demands, ensuring you have the right resources at the right time without the overhead of permanent hiring.', 
      icon: <FaUsers className="text-[#ff7f32] text-3xl" /> 
    },
    { 
      title: 'Managed Services & Project Delivery', 
      description: 'We handle the administrative and operational overhead so you can focus on your core business. From recruitment and onboarding to project management, we ensure a seamless and efficient workflow for your outsourced teams.', 
      icon: <FaCogs className="text-[#ff7f32] text-3xl" /> 
    },
    { 
      title: 'Performance Analytics & Reporting', 
      description: 'Track team productivity and project milestones with our detailed reporting and analytics. We provide transparent insights into performance, ensuring your outsourced projects are on track and delivering the expected results.', 
      icon: <FaChartBar className="text-[#ff7f32] text-3xl" /> 
    },
  ];

  const benefits = [
    'Reduce Operational Costs',
    'Access Specialized Skills and Expertise',
    'Increase Business Flexibility and Scalability',
    'Improve Focus on Core Business Functions',
    'Enhance Productivity and Efficiency',
    'Mitigate Risks Associated with Hiring'
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-[120px] pb-24 md:pt-[160px] md:pb-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Payroll Outsourcing Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1b2a]/80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            Global Talent
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight uppercase"
          >
            Payroll Outsourcing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Your strategic partner for global talent and operational excellence.
          </motion.p>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-6 uppercase tracking-tight">Extend Your Team, Amplify Your Results</h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-medium">
            Leverage our global network of vetted professionals to scale your operations on demand. Whether you need to augment your existing team for a specific project or build a dedicated remote workforce, our outsourcing solutions provide the flexibility and expertise you need to succeed.
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
              Our outsourcing services provide the operational scale you need to navigate challenges and seize opportunities with confidence.
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
              <img src={heroImg} alt="Outsourcing Benefits" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
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
            className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight"
          >
            Ready to Scale Your Team?
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Let's discuss how our global talent pool can provide the momentum your business needs.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12"
          >
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <FaPhoneAlt className="text-orange-400 flex-shrink-0" />
              <span className="text-slate-200 text-sm md:text-base font-medium">+91 9535764655</span>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <FaEnvelope className="text-orange-400 flex-shrink-0" />
              <span className="text-slate-200 text-sm md:text-base font-medium">info@arviontechnologies.com</span>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <FaMapMarkerAlt className="text-orange-400 flex-shrink-0" />
              <span className="text-slate-200 text-sm md:text-base font-medium text-center md:text-left">utrahalli, bansankari, bangalore</span>
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

export default OutsourcingPage;
