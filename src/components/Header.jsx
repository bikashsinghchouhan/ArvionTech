import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import '../csssection/Header.css'; // Retaining import but we don't use legacy classes
import {
  FaBars, FaTimes, FaChevronDown, FaChevronUp, FaHome, FaInfoCircle,
  FaPhone, FaBriefcase, FaEnvelope, FaBuilding, FaStamp, FaCalculator
} from 'react-icons/fa';
import ComingSoonModal from './ComingSoonModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll listener for height shrinking & single-page scroll highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      if (location.pathname === '/') {
        const sections = ['home', 'about', 'services', 'contact'];
        let currentActive = 'home';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            // Trigger threshold slightly above middle of the screen
            if (rect.top <= 120) {
              currentActive = section;
            }
          }
        }
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsMobileSubMenuOpen(false);
    }
  };

  // Helper to handle smooth scroll on homepage, or navigation with hash on subpages
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      name: 'School Management',
      path: '/services/school-management',
      desc: 'Complete ERP platform for schools and colleges.',
      icon: <FaBuilding />
    },
    {
      name: 'Payroll Outsourcing',
      path: '/services/outsourcing',
      desc: 'Global compliant pay & employee systems.',
      icon: <FaBriefcase />
    },
    {
      name: 'Statutory Registrations',
      path: '/services/statutory-registrations',
      desc: 'Entity setups, tax registrations, & compliance.',
      icon: <FaStamp />
    },
    {
      name: 'Accounting Services',
      path: '/services/accounting',
      desc: 'Expert bookkeeping, reporting, and consulting.',
      icon: <FaCalculator />
    },
  ];

  const toggleMobileSubMenu = (e) => {
    e.preventDefault();
    setIsMobileSubMenuOpen(!isMobileSubMenuOpen);
  };

  // Helper to compute link active classes (consistently white on orange header)
  const getNavLinkClass = (sectionId, routerActive) => {
    const isActive = (location.pathname === '/')
      ? activeSection === sectionId
      : routerActive;

    return `text-[11px] sm:text-[12px] tracking-wider uppercase font-bold transition-all duration-300 relative py-1 after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center text-white/90 hover:text-white after:bg-white ${isActive ? 'after:scale-x-100 text-white font-bold' : ''
      }`;
  };

  // Helper to compute active classes for mobile drawer links
  const getMobileLinkClass = (sectionId, routerActive) => {
    const isActive = (location.pathname === '/')
      ? activeSection === sectionId
      : routerActive;

    return `px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-all flex items-center gap-3 ${isActive ? 'bg-orange-50 text-[#ff7f32]' : 'text-slate-700 hover:bg-slate-50'
      }`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#ff7f32] shadow-md ${isScrolled ? 'py-2 sm:py-2.5 shadow-lg' : 'py-3.5 sm:py-4 shadow-md'
          }`}
      >
        {/* Removed vertical padding from inner wrapper to allow header py height changes on scroll */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">

          {/* Logo / Brand Link */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 group focus:outline-none flex-shrink-0"
          >
            <img
              src={logo}
              alt="Arvion Technologies Logo"
              className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-105 object-contain"
            />
            <span className="text-sm sm:text-base tracking-wider uppercase whitespace-nowrap transition-colors duration-300 font-sans text-white font-black">
              Arvion Technologies
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5">
            <ul className="flex items-center gap-5 list-none m-0 p-0">
              <li>
                <a
                  href="/#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className={getNavLinkClass('home', location.pathname === '/' && activeSection === 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className={getNavLinkClass('about', location.pathname.startsWith('/about'))}
                >
                  About Us
                </a>
              </li>

              {/* Dropdown Link: Modern single-column layout */}
              <li
                className="relative group py-1"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <a
                    href="/#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className={getNavLinkClass('services', location.pathname.startsWith('/services'))}
                  >
                    Services
                  </a>
                  <span className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''} text-white`}>
                    <FaChevronDown className="text-[9px]" />
                  </span>
                </div>

                {/* Dropdown Popover - Single Vertical Column list */}
                {isDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[320px] z-50">
                    <div className="bg-white rounded-sm shadow-2xl border border-slate-100 p-3 flex flex-col gap-1.5 animate-fadeIn">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex gap-3 items-center p-2 rounded-xl hover:bg-orange-50/50 transition-all duration-200 group/item cursor-pointer no-underline"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="!bg-orange-50 hover:!bg-orange-500 text-sm text-[#ff7f32] hover:text-white  p-2.5 rounded-lg flex-shrink-0 transition-transform duration-300 group-hover/item:scale-105 group-hover/item:bg-orange-100">
                            {service.icon}
                          </span>
                          <div className="flex flex-col text-left">
                            <span className="text-xs font-bold text-slate-800 transition-colors group-hover/item:text-[#ff7f32] leading-snug">
                              {service.name}
                            </span>
                            <span className="text-[10px] text-slate-400 mt-0.5 leading-normal font-normal">
                              {service.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className={getNavLinkClass('contact', location.pathname.startsWith('/contact'))}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none p-2 rounded-lg transition-colors text-white hover:bg-orange-600"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#0d1b2a]/60 backdrop-blur-md z-40 md:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'circOut' }}
              className="fixed top-0 right-0 h-full w-[250px] bg-white shadow-2xl z-50 flex flex-col px-6 py-2 md:hidden overflow-y-auto rounded-l-2xl border-l border-slate-100"
            >
              <div className="flex flex-col mb-8 pb-4 border-b border-slate-100">
                <div className="flex justify-end w-full mb-4">
                  <button
                    onClick={toggleMenu}
                    className="text-slate-400 hover:text-[#ff7f32] bg-slate-50 hover:bg-orange-50 p-2.5 rounded-full transition-all focus:outline-none cursor-pointer"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#ff7f32]">Arvion Technologies</span>
                </div>
              </div>

              <nav className="flex flex-col gap-3">
                <a
                  href="/#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className={getMobileLinkClass('home', location.pathname === '/' && activeSection === 'home')}
                >
                  <FaHome /> Home
                </a>

                <a
                  href="/#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className={getMobileLinkClass('about', location.pathname.startsWith('/about'))}
                >
                  <FaInfoCircle /> About Us
                </a>

                {/* Mobile Services Sub-menu */}
                <div>
                  <div
                    className="px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide text-slate-700 hover:bg-slate-50 flex items-center justify-between cursor-pointer"
                    onClick={toggleMobileSubMenu}
                  >
                    <span className="flex items-center gap-3"><FaBriefcase /> Services</span>
                    {isMobileSubMenuOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                  </div>

                  <AnimatePresence>
                    {isMobileSubMenuOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-orange-100 pl-1 overflow-hidden"
                      >
                        {services.map((service) => (
                          <NavLink
                            key={service.name}
                            to={service.path}
                            className={({ isActive }) =>
                              `block px-3 py-2.5 text-[11px] font-bold uppercase tracking-widest rounded-r-md transition-all ${isActive ? 'text-[#ff7f32] bg-orange-50/50' : 'text-slate-600 hover:bg-slate-50'
                              }`
                            }
                            onClick={toggleMenu}
                          >
                            {service.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className={getMobileLinkClass('contact', location.pathname.startsWith('/contact'))}
                >
                  <FaEnvelope /> Contact Us
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;