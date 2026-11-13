import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HorizontalScroll from '../components/HorizontalScroll';
import CoreServicesSection from '../components/CoreServicesSection';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import TestimonialSection from '../components/TestimonialSection';

const OnePageHome = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Small delay to ensure rendering and avoid layout calculation race conditions
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="w-full flex flex-col">
      {/* Page's main heading for search engines and screen readers (slider titles are h2) */}
      <h1 className="sr-only">
        Arvion Technologies – School Management ERP, Payroll Outsourcing, Accounting and Statutory Registration Services in Bangalore, India
      </h1>
      {/* Home Section (Slider + Stats/Features) */}
      <div id="home" className="scroll-mt-16 w-full">
        <HorizontalScroll />
        <CoreServicesSection />
      </div>

      {/* About Us Section */}
      <div id="about" className="scroll-mt-16 w-full">
        <AboutUs isSinglePage={true} />
      </div>

      {/* Services Grid Section */}
      <div id="services" className="scroll-mt-24 w-full">
        <Services isSinglePage={true} />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="w-full">
        <TestimonialSection />
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="scroll-mt-16 w-full">
        <ContactUs isSinglePage={true} />
      </div>
    </div>
  );
};

export default OnePageHome;
