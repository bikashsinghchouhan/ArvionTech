import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaCalendarAlt, FaCheckCircle, FaChartBar, FaGlobe, FaPuzzlePiece, FaClock, 
  FaStamp, FaFileSignature, FaBuilding, FaCalculator, FaChartLine, FaBook, 
  FaChevronLeft, FaChevronRight, FaArrowRight, FaPhone, FaWhatsapp, FaEnvelope
} from 'react-icons/fa';
import '../csssection/HorizontalScroll.css'; // Retained but not used for classes

// Import service images
import schoolImg from '../assets/service-school.png';
import outsourcingImg from '../assets/service-outsourcing.png';
import registrationsImg from '../assets/service-registrations.png';
import accountingImg from '../assets/service-accounting.png';

const services = [
  { 
    title: 'School Management System', 
    badge: 'ERP Solutions',
    category: 'Education & Administration',
    description: 'Transform institutional administration with an enterprise-grade academic platform. Seamlessly automate attendance protocols, optimize complex grading matrices, and elevate stakeholder communication.',
    image: schoolImg, 
    path: '/services/school-management', 
    stats: [ 
      { icon: <FaCalendarAlt />, text: 'Effortless Scheduling' }, 
      { icon: <FaCheckCircle />, text: 'Automated Attendance' }, 
      { icon: <FaChartBar />, text: 'Real-time Reporting' } 
    ] 
  },
  { 
    title: 'Payroll Outsourcing Services', 
    badge: 'HR & Talent Systems',
    category: 'Talent & Compliance',
    description: 'Accelerate global operations with secure, end-to-end payroll and talent management solutions. We assume the complexities of compliance, taxation, and international onboarding.',
    image: outsourcingImg, 
    path: '/services/outsourcing', 
    stats: [ 
      { icon: <FaGlobe />, text: 'Global Talent Pool' }, 
      { icon: <FaPuzzlePiece />, text: 'Seamless Integration' }, 
      { icon: <FaClock />, text: 'End-to-End Payroll Processing' } 
    ] 
  },
  { 
    title: 'Statutory Entity Registrations',  
    badge: 'Business Setup',
    category: 'Corporate Services',
    description: 'Establish your corporate footprint with precision. We orchestrate comprehensive statutory compliance, from initial entity incorporation and intellectual property protection to complex tax registrations.',
    image: registrationsImg, 
    path: '/services/registrations', 
    stats: [ 
      { icon: <FaStamp />, text: 'Business Name Approval' }, 
      { icon: <FaFileSignature />, text: 'GST & Tax ID Application' }, 
      { icon: <FaBuilding />, text: 'Company Incorporation' } 
    ] 
  },
  { 
    title: 'Professional Accounting Services',  
    badge: 'Finance & Bookkeeping',
    category: 'Finance & Accounts',
    description: 'Gain unparalleled visibility into your financial architecture. We provide rigorous ledger management, real-time analytical reporting, and strategic advisory to drive sustainable corporate growth.',
    image: accountingImg, 
    path: '/services/accounting', 
    stats: [ 
      { icon: <FaBook />, text: 'Bookkeeping Services' }, 
      { icon: <FaChartLine />, text: 'Financial Reporting' }, 
      { icon: <FaCalculator />, text: 'Expense Tracking' } 
    ] 
  },
];

const HorizontalScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoScrollInterval = useRef(null);
  const navigate = useNavigate();

  // Clone first & last for infinite scroll
  const extendedServices = [services[services.length - 1], ...services, services[0]];

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // ✅ Auto-scroll runs when not hovering
  useEffect(() => {
    let intervalId;
    if (!isHovering) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 3500);
    }
    return () => clearInterval(intervalId);
  }, [isHovering]);

  // Infinite loop reset - matches 600ms transition duration to prevent visual clipping
  useEffect(() => {
    if (currentIndex === 0 || currentIndex === extendedServices.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex === 0 ? services.length : 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, services.length, extendedServices.length]);

  useEffect(() => {
    if (!isTransitioning) {
      // Use requestAnimationFrame to guarantee instant scroll position jump is painted before re-enabling transition
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  return (
    <section 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Slider Viewport Container */}
      <div className="relative w-full overflow-hidden">
        {/* Slides Track */}
        <div 
          className="flex w-full" 
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
          }}
        >
          {extendedServices.map((service, index) => (
            <div 
              className="w-full flex-shrink-0 flex items-center justify-center bg-cover bg-center bg-no-repeat relative h-[55vh] min-h-[400px] sm:h-[70vh] sm:min-h-[500px] lg:h-screen lg:min-h-[650px] box-border" 
              style={{ backgroundImage: `url(${service.image})` }}
              key={index}
            >
              {/* Stronger gradient overlay for text readability & button contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 z-0" />

              {/* 🔹 Centered Foreground Content Panel */}
              <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 box-border text-white flex flex-col items-center text-center pt-24 pb-12 sm:py-24 lg:py-28">
                
                {/* Badge (Pill Styled) */}
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[9px] font-bold bg-[#ff7f32]/30 border border-[#ff7f32]/45 text-orange-200 uppercase tracking-widest mb-3 sm:mb-4 backdrop-blur-md">
                  {service.badge}
                </span>

                {/* Title */}
                <h1 className="text-xl sm:text-2xl md:text-3.5xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-2 sm:mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] max-w-3xl font-sans">
                  {service.title}
                </h1>

                {/* Subtitle / Category */}
                <h2 className="text-[9px] sm:text-[11px] lg:text-xs font-bold text-[#feb47b] uppercase tracking-widest mb-3 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {service.category}
                </h2>

                {/* Professional Description */}
                <p className="text-[10px] sm:text-[13px] md:text-sm text-slate-100/95 leading-relaxed mb-5 sm:mb-6 max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {service.description}
                </p>

                {/* Centered Small Stats List - Hidden on mobile for clutter-free responsive view */}
                <div className="hidden sm:flex flex-wrap justify-center gap-4 mb-6 max-w-3xl">
                  {service.stats.map((stat, statIndex) => (
                    <div 
                      className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/55 border border-white/10 hover:border-white/20 px-3.5 py-2 rounded-xl backdrop-blur-md transition-all duration-300"
                      key={statIndex}
                    >
                      <span className="text-[#ff7f32] text-xs">
                        {stat.icon}
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold text-white leading-none">
                        {stat.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Double CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <button 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff8c42] to-[#ff7f32] hover:opacity-95 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-xs sm:text-base cursor-pointer"
                    onClick={() => navigate('/contact')}
                  >
                    Get in Touch
                  </button>
                  
                  <button 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-xs sm:text-base cursor-pointer"
                    onClick={() => navigate(service.path)}
                  >
                    Our Services <FaArrowRight className="text-[10px] sm:text-xs transition-transform duration-300" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button 
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#ff7f32] text-white p-3.5 rounded-full transition-all duration-300 focus:outline-none hidden md:flex items-center justify-center shadow-md hover:scale-110 z-20 cursor-pointer backdrop-blur-sm border border-white/10"
        onClick={handlePrev}
      >
        <FaChevronLeft size={18} />
      </button>
      <button 
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#ff7f32] text-white p-3.5 rounded-full transition-all duration-300 focus:outline-none hidden md:flex items-center justify-center shadow-md hover:scale-110 z-20 cursor-pointer backdrop-blur-sm border border-white/10"
        onClick={handleNext}
      >
        <FaChevronRight size={18} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {services.map((_, idx) => {
          // Adjust index map since extendedServices has clone padding
          const activeIndex = currentIndex === 0 ? services.length - 1 : currentIndex === extendedServices.length - 1 ? 0 : currentIndex - 1;
          return (
            <button 
              key={idx}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex ? 'w-8 bg-[#ff7f32]' : 'w-2.5 bg-white/40 hover:bg-white/80'}`}
              onClick={() => setCurrentIndex(idx + 1)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HorizontalScroll;