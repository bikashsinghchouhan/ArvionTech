import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaGlobe, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  // --- CONFIGURATION ---
  // You can easily customize links, text, and paths here without digging into the JSX below.

  const contactInfo = {
    address: [
      "D-326 New Minal, Near Gate No.5,",
      "Bhopal",
      "Madhya Pradesh, India."
    ],
    phone: "+91 9535764655",
    whatsapp: "+91 9535764655",
    email: "info@arviontechnologies.com",
    website: "www.arviontechnologies.com"
  };

  const socialLinks = [
    { icon: <FaFacebookF size={14} />, path: "#", ariaLabel: "Facebook" },
    { icon: <FaInstagram size={14} />, path: "#", ariaLabel: "Instagram" },
    { icon: <FaYoutube size={14} />, path: "#", ariaLabel: "YouTube" },
    { icon: <FaWhatsapp size={15} />, path: "https://wa.me/919535764655", ariaLabel: "WhatsApp" }
  ];

  const schoolSolutions = [
    { name: "Online Admission / Enrollment", path: "#" },
    { name: "Student Management", path: "#" },
    { name: "Fees Management", path: "#" },
    { name: "Attendance Management", path: "#" },
    { name: "Exam & Results", path: "#" },
    { name: "Library Management", path: "#" }
  ];

  // const integrations = [
  //   { name: "Attendance Machine", path: "#" },
  //   { name: "Payment Gateway", path: "#" },
  //   { name: "Fee Via Dynamic QR Code", path: "#" },
  //   { name: "SMS/WhatsApp Gateway", path: "#" },
  //   { name: "Google Meet/Zoom/Webex", path: "#" }
  // ];

  const ourProducts = [
    { name: "School Managenement Software", path: "services/school-management" },
    { name: "Payroll ", path: "#" },
    { name: "Statutory Registration", path: "#" },
    { name: "Accounting Services", path: "#" },
    { name: "IT Services", path: "#" }
  ];

  return (
    <footer className="bg-[#1d222b] text-slate-300 py-8 px-6 sm:px-12 relative overflow-hidden font-sans border-t border-white/5">

      {/* Decorative background circles */}
      <div className="absolute -left-[10%] top-0 w-96 h-96 border-[40px] border-white/[0.015] rounded-full pointer-events-none" />
      <div className="absolute -right-[5%] -bottom-[20%] w-[30rem] h-[30rem] border-[60px] border-white/[0.015] rounded-full pointer-events-none" />
      <div className="absolute left-[30%] top-[20%] w-64 h-64 border-2 border-dashed border-white/[0.03] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">

        {/* Column 1: Logo & About */}
        <div className="flex flex-col space-y-6">
          <Link to="/">
            <img src={logo} alt="Arvion Technologies Logo" className="h-16 object-contain mb-2" />
          </Link>
          <p className="text-[13px] leading-relaxed text-slate-400">
            Providing innovative solutions to streamline your business operations with cutting-edge technology and expert support.
          </p>
        </div>

        {/* Column 2: School Solutions */}
        <div>
          <h4 className="text-white text-base font-semibold mb-2">School Solutions</h4>
          <div className="w-10 h-0.5 bg-[#8b5cf6] mb-6 rounded-full"></div>
          <ul className="space-y-4">
            {schoolSolutions.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="text-[13px] text-slate-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <FaChevronRight className="text-[10px] text-slate-500 group-hover:text-[#8b5cf6] transition-colors" /> {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Products */}
        <div>
          <h4 className="text-white text-base font-semibold mb-2">Our Products</h4>
          <div className="w-10 h-0.5 bg-[#8b5cf6] mb-6 rounded-full"></div>
          <ul className="space-y-4">
            {ourProducts.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="text-[13px] text-slate-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <FaChevronRight className="text-[10px] text-slate-500 group-hover:text-[#8b5cf6] transition-colors" /> {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="flex flex-col space-y-7">
          <h4 className="text-white text-base font-semibold mb-2">Contact Us</h4>
          <div className="w-10 h-0.5 bg-[#8b5cf6] mb-6 rounded-full"></div>

          <p className="text-[13px] leading-relaxed text-slate-400">
            {contactInfo.address.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < contactInfo.address.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>

          <div className="flex flex-col space-y-4 text-[13px] text-slate-400">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-slate-300" size={12} />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-slate-300" size={12} />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaGlobe className="text-slate-300" size={12} />
              <span>{contactInfo.website}</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#8b5cf6] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Bottom / Legal */}
      <div className="max-w-7xl mx-auto mt-4 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-[12px] text-slate-500 relative z-10 text-center">
        <p>© {new Date().getFullYear()} Arvion Technologies. All Rights Reserved.</p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms-of-service" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
