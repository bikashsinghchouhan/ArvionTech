import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HorizontalScroll from '../components/HorizontalScroll';
import FeaturesSection from '../components/FeaturesSection';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';

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
      {/* Home Section (Slider + Stats/Features) */}
      <div id="home" className="scroll-mt-16 w-full">
        <HorizontalScroll />
        <FeaturesSection />
      </div>

      {/* About Us Section */}
      <div id="about" className="scroll-mt-16 w-full">
        <AboutUs isSinglePage={true} />
      </div>

      {/* Services Grid Section */}
      <div id="services" className="scroll-mt-24 w-full">
        <Services isSinglePage={true} />
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="scroll-mt-16 w-full">
        <ContactUs isSinglePage={true} />
      </div>
    </div>
  );
};

export default OnePageHome;
