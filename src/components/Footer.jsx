import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../csssection/Footer.css';

const Footer = () => {
  const services = [
    { name: 'School Management', path: '/services/school-management' },
    { name: 'Payroll Outsourcing', path: '/services/outsourcing' },
    { name: 'Statutory Registrations', path: '/services/registrations' },
    { name: 'Accounting', path: '/services/accounting' },
  
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo + About */}
        <div className="footer-column">
          <img src={logo} alt="Arvion Logo" className="footer-logo" />
          <p>
            Providing innovative solutions to streamline your business operations
            with cutting-edge technology and expert support.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            {services.map((service) => (
              <li key={service.name}>
                <Link to={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Social */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
      {/* MODIFIED: Updated the footer-bottom section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Arvion Technologies. All Rights Reserved.</p>
        <div className="footer-legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
