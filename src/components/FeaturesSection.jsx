import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSchool, FaUsers, FaStamp, FaCalculator, FaCheck } from 'react-icons/fa';
import '../csssection/FeaturesSection.css';

// Import service images
import schoolImg from '../assets/service-school.png';
import outsourcingImg from '../assets/service-outsourcing.png';
import registrationsImg from '../assets/service-registrations.png';
import accountingImg from '../assets/service-accounting.png';

const featuresData = {
  school: {
    title: 'School Management System',
    icon: <FaSchool />,
    description: 'A powerful ERP solution designed to streamline school management, automate processes, and enhance productivity.',
    points: [
      { title: 'Student Portal', desc: 'Centralized database for profiles, grades, and parent communication.' },
      { title: 'Smart Attendance', desc: 'Automated real-time attendance logs and instant alerts.' },
      { title: 'Timetable Automation', desc: 'Conflict-free classroom scheduling and smart teacher assignments.' },
      { title: 'Grade Analytics', desc: 'Comprehensive digital report cards and exam analysis dashboards.' }
    ],
    image: schoolImg,
  },
  outsourcing: {
    title: 'Payroll Outsourcing',
    icon: <FaUsers />,
    description: 'Leverage our global talent pool to scale your operations and achieve your business goals.',
    points: [
      { title: 'Vetted Professionals', desc: 'Access a curated roster of business and tech specialists.' },
      { title: 'Dynamic Scaling', desc: 'Scale team capacity up or down instantly based on workload demands.' },
      { title: 'Managed Deliverables', desc: 'End-to-end task tracking, milestones, and hands-off management.' },
      { title: 'Performance Analytics', desc: 'Detailed reporting on milestone speed and output quality benchmarks.' }
    ],
    image: outsourcingImg,
  },
  registrations: {
    title: 'Statutory Registrations',
    icon: <FaStamp />,
    description: 'Navigate complex legal frameworks with our expert guidance for all your business registration needs.',
    points: [
      { title: 'Company Setup', desc: 'Hassle-free incorporation, corporate registration, and entity setup.' },
      { title: 'GST Compliance', desc: 'Direct applications for tax IDs, state GST, and digital filings.' },
      { title: 'Import Export Setup', desc: 'Complete guidance and licensing for international trade operations.' },
      { title: 'IP & Trademarks', desc: 'Secure and protect your brand assets with official trademarks.' }
    ],
    image: registrationsImg,
  },
  accounting: {
    title: 'Accounting Services',
    icon: <FaCalculator />,
    description: 'Ensure financial accuracy and gain valuable insights with our comprehensive accounting solutions.',
    points: [
      { title: 'Real-time Bookkeeping', desc: 'Secure general ledger management and continuous transaction logs.' },
      { title: 'Financial Statements', desc: 'Accurate balance sheets, cashflow reports, and income sheets.' },
      { title: 'Expense Auditing', desc: 'Automated receipt categories, invoicing, and audit trails.' },
      { title: 'Strategic Advisory', desc: 'Detailed financial forecasting dashboards and budget planning.' }
    ],
    image: accountingImg,
  },
};

const serviceOrder = ['school', 'outsourcing', 'registrations', 'accounting'];

const FeaturesSection = () => {
  const [activeService, setActiveService] = useState('school');

  const handleServiceClick = (key) => {
    setActiveService(key);

    // Scroll into view on mobile devices
    const contentSection = document.getElementById('features-content-column');
    if (window.innerWidth < 992 && contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentService = featuresData[activeService];

  return (
    <section className="features-section" id="features">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:32px_32px] opacity-75 pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Accent Badge */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#ff7f32] bg-orange-50 border border-orange-100 mb-3 shadow-sm">
            Core Modules
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1b2a] tracking-tight leading-tight max-w-2xl font-sans">
            Features That Power Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.8fr] gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Modern Interactive Tabs */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 bg-white/40 backdrop-blur-md p-3 rounded-2xl border border-slate-100/50 shadow-lg shadow-slate-100/20">
            {serviceOrder.map((key) => {
              const isActive = activeService === key;
              return (
                <button
                  key={key}
                  className={`flex items-center gap-3 w-full px-5 py-4 text-left rounded-xl transition-all duration-300 font-bold whitespace-nowrap lg:whitespace-normal cursor-pointer border ${
                    isActive 
                      ? 'bg-[#ff7f32] text-white border-[#ff7f32] shadow-lg shadow-orange-500/25 scale-[1.02]' 
                      : 'bg-white text-slate-600 hover:text-[#0d1b2a] hover:bg-slate-50 border-slate-100 shadow-sm'
                  }`}
                  onClick={() => handleServiceClick(key)}
                >
                  <span className={`p-2 rounded-lg flex-shrink-0 transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-orange-50 text-[#ff7f32]'}`}>
                    {featuresData[key].icon}
                  </span>
                  <span className="text-[13px] tracking-wide uppercase">{featuresData[key].title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Tab Details Card */}
          <div id="features-content-column" className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-6 sm:p-10 flex flex-col md:grid md:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center"
              >
                {/* Card Text Content */}
                <div className="w-full flex flex-col text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0d1b2a] mb-3 font-sans uppercase tracking-wide">
                    {currentService.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 font-semibold">
                    {currentService.description}
                  </p>
                  
                  {/* Features Bullet List */}
                  <div className="flex flex-col gap-4">
                    {currentService.points.map((point, index) => (
                      <div key={index} className="flex gap-3 items-start group/item">
                        <span className="bg-orange-50 text-[#ff7f32] p-1 rounded-full flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                          <FaCheck className="text-[10px]" />
                        </span>
                        <div className="flex flex-col leading-snug">
                          <span className="text-xs font-bold text-slate-800 tracking-wide uppercase transition-colors group-hover/item:text-[#ff7f32]">
                            {point.title}
                          </span>
                          <span className="text-[11px] text-slate-400 mt-0.5 leading-normal font-normal">
                            {point.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Graphic/Illustration */}
                <div className="w-full relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group/img aspect-[4/3] flex items-center justify-center bg-slate-55">
                  <img 
                    src={currentService.image} 
                    alt={currentService.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  {/* Subtle Gradient Shadow Ring */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
