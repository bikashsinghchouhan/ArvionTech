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
              {/* Same hero section as the service page (text left, photo right) */}
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
              />
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
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex ? 'w-8 bg-[#ff7f32]' : 'w-2.5 bg-[#0f2a6b]/25 hover:bg-[#0f2a6b]/50'}`}
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