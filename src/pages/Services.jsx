import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSchool, FaUsers, FaStamp, FaBook, FaFileInvoiceDollar } from 'react-icons/fa';
import '../csssection/services.css';

// This is the correct variable name
const servicesData = [
  {
    id: 'school',
    icon: <FaSchool />,
    title: 'School Management System',
    summary: 'An integrated ERP solution to manage all academic and administrative operations seamlessly.',
    path: '/services/school-management',
  },
  {
    id: 'outsourcing',
    icon: <FaUsers />,
    title: 'Payroll Outsourcing',
    summary: 'Our comprehensive Payroll Outsourcing service is designed to lift that entire burden from your shoulders.',
    path: '/services/outsourcing',
  },
  {
    id: 'registrations',
    icon: <FaStamp />,
    title: 'Statutory Registrations',
    summary: 'Navigate complex legal frameworks with our expert guidance for all your business registration needs.',
    path: '/services/registrations',
  },
  {
    id: 'accounting',
    icon: <FaBook />,
    title: 'Accounting',
    summary: 'Ensure financial accuracy and gain valuable insights with our comprehensive accounting solutions.',
    path: '/services/accounting',
  },
  // {
  //   id: 'payroll',
  //   icon: <FaFileInvoiceDollar />,
  //   title: 'Payroll  (coming soon!!!)',
  //   summary: 'An efficient and secure application to manage all aspects of your company’s payroll and compliance.',
  //   path: '/services/payroll',
  // },
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-grid-section">
        <div className="services-container">
          <h1 className="services-main-title"></h1>
          <p className="services-main-subtitle"></p>
          <div className="services-grid">
            {/* CORRECTED: Using the correct variable name 'servicesData' here */}
            {servicesData.map((service, index) => (
              <motion.div 
                className="service-card-summary" 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="summary-icon">{service.icon}</div>
                <h3 className="summary-title">{service.title}</h3>
                <p className="summary-text">{service.summary}</p>
                <Link to={service.path} className="summary-btn">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
