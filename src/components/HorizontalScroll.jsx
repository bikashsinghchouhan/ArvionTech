import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaCalendarAlt, FaCheckCircle, FaChartBar, FaGlobe, FaPuzzlePiece, FaClock,
  FaStamp, FaFileSignature, FaBuilding, FaCalculator, FaChartLine, FaBook,
  FaChevronLeft, FaChevronRight, FaArrowRight, FaPhone, FaWhatsapp, FaEnvelope
} from 'react-icons/fa';
import '../csssection/HorizontalScroll.css'; // Retained but not used for classes

import { services } from '../configurations/HorizontalScrollConfig';
import ServiceHero from './ServiceHero';

const HorizontalScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Swipe support states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const autoScrollInterval = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const navigate = useNavigate();

  // Preload images for faster loading and caching
  useEffect(() => {
    services.forEach((service) => {
      if (service.image) {
        const img = new Image();
        img.src = service.image;
      }
    });
  }, []);

  // Clone first & last for infinite scroll
  const extendedServices = [services[services.length - 1], ...services, services[0]];

  const pauseAutoScroll = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 30000); // 30 seconds
  };

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const handleNext = () => {
    if (!isTransitioning) return;
    pauseAutoScroll();
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, extendedServices.length - 1));
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    pauseAutoScroll();
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // ✅ Auto-scroll runs when not hovering and not paused
  useEffect(() => {
    let intervalId;
    if (!isHovering && !isPaused) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 3500);
    }
    return () => clearInterval(intervalId);
  }, [isHovering, isPaused]);

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

  // Swipe Handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    pauseAutoScroll();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
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
              className="w-full flex-shrink-0 relative box-border"
              key={index}
              onMouseEnter={() => {
                if (window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
                  setIsHovering(true);
                }
              }}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Phones & tablets: photo as background with dark overlay, text and buttons on top
                  (phones: content sits at the bottom and the long description is hidden) */}
              {/* Phones: header height + a 9:8 photo area, matching the 900x800 phone crops exactly */}
              <div className="lg:hidden relative overflow-hidden pt-16 h-[calc(4rem+88.889vw)] sm:min-h-[560px] sm:h-[82svh] max-h-[760px] flex items-end sm:items-center justify-center">
                <img
                  src={service.mobileImage || service.image}
                  alt=""
                  aria-hidden="true"
                  loading={index === 1 ? 'eager' : 'lazy'}
                  className="sm:hidden absolute inset-x-0 top-16 w-full aspect-[9/8] object-cover"
                />
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={`hidden sm:block absolute inset-0 w-full h-full object-cover ${service.imagePosition || 'object-center'}`}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent sm:from-black/90 sm:via-black/65 sm:to-black/40" />
                <div className="relative z-10 w-full max-w-xl px-6 pt-4 pb-10 sm:pt-6 sm:pb-14 flex flex-col items-center text-center text-white">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#ff7f32]/30 border border-[#ff7f32]/50 text-orange-100 mb-3 backdrop-blur-sm">
                    {service.badge}
                  </span>
                  <h2 className="text-[19px] sm:text-[25px] font-extrabold leading-tight tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-widest text-[#feb47b] mb-5 sm:mb-3">
                    {service.category}
                  </p>
                  <p className="hidden sm:block text-[14px] text-slate-100 leading-relaxed mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {service.description}
                  </p>
                  <div className="w-full max-w-[290px] sm:max-w-none grid grid-cols-2 gap-2.5 sm:gap-3">
                    <button
                      className="w-full h-9 sm:h-12 px-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#ea580c] to-[#c2410c] text-white font-bold text-[12px] sm:text-[14.5px] whitespace-nowrap shadow-lg cursor-pointer"
                      onClick={() => navigate('/contact')}
                    >
                      Contact Us
                    </button>
                    <button
                      className="w-full h-9 sm:h-12 px-2 rounded-lg sm:rounded-xl bg-white/10 border border-white/25 text-white font-bold text-[12px] sm:text-[14.5px] whitespace-nowrap backdrop-blur-sm inline-flex items-center justify-center gap-1.5 cursor-pointer"
                      onClick={() => navigate(service.path)}
                    >
                      Explore Solutions <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop: same hero section as the service page (text left, photo right) */}
              <div className="hidden lg:block">
              <ServiceHero
                crumb={service.hero.crumb}
                title={service.hero.title}
                subtitle={service.hero.subtitle}
                description={service.hero.description}
                image={service.image}
                imageAlt={service.hero.imageAlt}
                imageWidth={service.hero.imageWidth}
                imageHeight={service.hero.imageHeight}
                primary={{ label: 'Request Demo', to: '/contact' }}
                secondary={{ label: service.hero.secondaryLabel, to: service.path }}
                showBreadcrumb={false}
                headingAs="h2"
                wideInset
                featureCard={service.featureCard}
              />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        className="absolute left-6 top-[calc(50%+2rem)] -translate-y-1/2 bg-white/90 hover:bg-[#ff7f32] text-[#0f2a6b] hover:text-white p-3.5 rounded-full transition-all duration-300 focus:outline-none hidden md:flex items-center justify-center shadow-md hover:scale-110 z-20 cursor-pointer border border-blue-100"
        aria-label="Previous slide"
        onClick={handlePrev}
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        className="absolute right-6 top-[calc(50%+2rem)] -translate-y-1/2 bg-white/90 hover:bg-[#ff7f32] text-[#0f2a6b] hover:text-white p-3.5 rounded-full transition-all duration-300 focus:outline-none hidden md:flex items-center justify-center shadow-md hover:scale-110 z-20 cursor-pointer border border-blue-100"
        aria-label="Next slide"
        onClick={handleNext}
      >
        <FaChevronRight size={18} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {services.map((_, idx) => {
          // Adjust index map since extendedServices has clone padding
          const activeIndex = currentIndex === 0 ? services.length - 1 : currentIndex === extendedServices.length - 1 ? 0 : currentIndex - 1;
          return (
            <button
              key={idx}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex ? 'w-8 bg-[#ff7f32]' : 'w-2.5 bg-white/50 hover:bg-white/80 lg:bg-[#0f2a6b]/25 lg:hover:bg-[#0f2a6b]/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => {
                pauseAutoScroll();
                setCurrentIndex(idx + 1);
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HorizontalScroll;