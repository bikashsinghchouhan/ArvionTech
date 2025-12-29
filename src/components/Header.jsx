import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../csssection/Header.css';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ComingSoonModal from './ComingSoonModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsMobileSubMenuOpen(false);
    }
  };

  const services = [
    { name: 'School Management', path: '/services/school-management' },
    { name: 'Payroll Outsourcing', path: '/services/outsourcing' },
    { name: 'Statutory Registrations', path: '/services/registrations' },
    { name: 'Accounting', path: '/services/accounting' },
  ];

  /*
  const handlePayrollClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };
  */

  const toggleMobileSubMenu = (e) => {
    e.preventDefault();
    setIsMobileSubMenuOpen(!isMobileSubMenuOpen);
  };

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Arvion Technologies Logo" className="logo-image" />
            <span className="brand-name">Arvion Technologies</span>
          </Link>

          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><NavLink to="/" className="nav-link" onClick={toggleMenu}>Home</NavLink></li>
              <li><NavLink to="/about" className="nav-link" onClick={toggleMenu}>About Us</NavLink></li>
              <li 
                className="nav-item-dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="services-link-group">
                  <NavLink to="/services" className="nav-link" onClick={toggleMenu}>
                    Services
                  </NavLink>
                  <button className="dropdown-toggle-btn" onClick={toggleMobileSubMenu}>
                    {isMobileSubMenuOpen ? <FaChevronUp className="dropdown-arrow" /> : <FaChevronDown className="dropdown-arrow" />}
                  </button>
                </div>

                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    {services.map((service) => (
                      <Link key={service.name} to={service.path} className="dropdown-link" onClick={() => setIsDropdownOpen(false)}>
                        {service.name}
                      </Link>
                    ))}
                    {/* <a href="#" className="dropdown-link coming-soon" onClick={handlePayrollClick}>
                      Payroll <span className="coming-soon-badge">Coming Soon</span>
                    </a> */}
                  </div>
                )}
              </li>

              {isMobileSubMenuOpen && isMenuOpen && (
                <div className="mobile-submenu">
                  {services.map((service) => (
                    <NavLink key={service.name} to={service.path} className="mobile-submenu-link" onClick={toggleMenu}>
                      {service.name}
                    </NavLink>
                  ))}
                  {/* <a href="#" className="mobile-submenu-link coming-soon" onClick={handlePayrollClick}>
                    Payroll <span className="coming-soon-badge">Coming Soon</span>
                  </a> */}
                </div>
              )}

              <li><NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact Us</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;