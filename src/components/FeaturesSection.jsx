import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../csssection/FeaturesSection.css';

// Import your service images
import schoolImg from '../assets/service-school.png';
import outsourcingImg from '../assets/service-outsourcing.png';
import registrationsImg from '../assets/service-registrations.png';
import accountingImg from '../assets/service-accounting.png';
import payrollImg from '../assets/service-payroll.png';

const featuresData = {
  school: {
    title: 'School Management System',
    description: 'A powerful ERP solution designed to streamline school management, automate processes, and enhance productivity.',
    points: ['Student information management', 'Attendance tracking', 'Timetable automation', 'Grade & exam management'],
    image: schoolImg,
  },
  outsourcing: {
    title: 'Payroll Outsourcing',
    description: 'Leverage our global talent pool to scale your operations and achieve your business goals.',
    points: ['Access to vetted professionals', 'Flexible team scaling', 'Managed project delivery', 'Performance analytics'],
    image: outsourcingImg,
  },
  registrations: {
    title: 'Statutory Registrations',
    description: 'Navigate complex legal frameworks with our expert guidance for all your business registration needs.',
    points: ['Company Incorporation', 'GST & Tax ID Application', 'Import Export Code (IEC)', 'Trademark Registration'],
    image: registrationsImg,
  },
  accounting: {
    title: 'Accounting Services',
    description: 'Ensure financial accuracy and gain valuable insights with our comprehensive accounting solutions.',
    points: ['Bookkeeping & General Ledger', 'Financial Statement Preparation', 'Expense Management', 'Budgeting & Forecasting'],
    image: accountingImg,
  },

  // payroll: {
  //   title: 'Payroll (Coming Soon!!!)',
  //   description: 'An efficient and secure application to manage all aspects of your company’s payroll and compliance.',
  //   points: ['Automated salary calculation', 'Secure data handling', 'Effortless compliance reporting', 'Employee self-service portal'],
  //   image: payrollImg,
  // },
};

const serviceOrder = ['school', 'outsourcing', 'registrations', 'accounting' ]; //,'payroll'
//
const FeaturesSection = () => {
  const [activeService, setActiveService] = useState('school');

  const handleServiceClick = (key) => {
    setActiveService(key);

    // Scroll into view only for mobile
    const contentSection = document.getElementById('features-content-column');
    if (window.innerWidth < 992 && contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentService = featuresData[activeService];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-main-title">Features That Power Your Business</h2>

        <div className="features-content-wrapper">
          {/* Left Side: Vertical Tabs */}
          <div className="vertical-tabs-column">
            {serviceOrder.map((key) => (
              <button
                key={key}
                className={`vertical-tab-btn ${activeService === key ? 'active' : ''}`}
                onClick={() => handleServiceClick(key)} // ✅ fixed here
              >
                {featuresData[key].title}
              </button>
            ))}
          </div>

          {/* Right Side: Content Display */}
          <div id="features-content-column" className="features-content-column">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="service-content-display"
              >
                <div className="service-content-text">
                  <h3>{currentService.title}</h3>
                  <p>{currentService.description}</p>
                  <ul>
                    {currentService.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-content-image">
                  <img src={currentService.image} alt={currentService.title} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
