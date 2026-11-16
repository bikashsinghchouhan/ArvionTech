import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HorizontalScroll from '../components/HorizontalScroll';
import CoreServicesSection from '../components/CoreServicesSection';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import TestimonialSection from '../components/TestimonialSection';
import { WhyChooseArvion } from '../components/about/AboutSections';
import { HowItWorks } from '../components/home/HomeSections';
import FaqSection from '../components/FaqSection';
import SecurityHighlights from '../components/SecurityHighlights';
import { FaThLarge, FaDesktop, FaDatabase, FaShieldAlt, FaLanguage } from 'react-icons/fa';

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

      {/* Why Arvion (same section as the About page) */}
      <div id="why-arvion" className="scroll-mt-24 w-full">
        <WhyChooseArvion />
      </div>

      {/* How it works: demo to go-live */}
      <HowItWorks />

      {/* Security & cloud: trust band before the services list */}
      <SecurityHighlights
        id="security"
        variant="dark"
        title="Your Data Is Safe With Us"
        desc="The same protection across our School ERP and every service we run for you."
        items={[
          { title: 'Secure Client & Student Data', desc: 'Sensitive records kept private and protected.' },
          { title: 'Role-Based Permissions', desc: 'Each user sees only what their role allows.' },
          { title: 'Data Backups', desc: 'Automatic backups so nothing is ever lost.' },
          { title: 'Cloud Accessibility', desc: 'Work securely from any device, anywhere.' },
          { title: 'Secure Authentication', desc: 'Protected logins for every user.' },
        ]}
      />

      {/* Services Grid Section */}
      <div id="services" className="scroll-mt-24 w-full">
        <Services isSinglePage={true} />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="w-full">
        <TestimonialSection />
      </div>

      {/* FAQ */}
      <FaqSection
        desc="Quick answers about our services, onboarding and support."
        items={[
          { Icon: FaThLarge, q: 'What services does Arvion offer?', a: 'School Management ERP, Payroll Outsourcing, Statutory Registrations and Accounting Services – software and the services around it, from one team.' },
          { Icon: FaDesktop, q: 'Can we see the School ERP before we decide?', a: 'Yes. Book a free demo and we will walk you through the modules that matter for your school.' },
          { Icon: FaDatabase, q: 'Will you help us move our existing data?', a: 'Yes. Onboarding is guided: we configure the system, migrate your data and train your staff before you go live.' },
          { Icon: FaShieldAlt, q: 'Is our data secure?', a: 'Role-based access, encrypted data and automated backups keep your records safe.' },
          { Icon: FaLanguage, q: 'Which languages does your support team speak?', a: 'Our Bengaluru team answers in English, Hindi and Kannada.' },
        ]}
      />

      {/* Contact Form Section */}
      <div id="contact" className="scroll-mt-16 w-full">
        <ContactUs isSinglePage={true} />
      </div>
    </div>
  );
};

export default OnePageHome;
