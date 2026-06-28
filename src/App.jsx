import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Core Components
import Header from './components/Header';
import HorizontalScroll from "./components/HorizontalScroll";
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import All Page Components from the correct 'pages' folder
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import SchoolManagement from './our_services/SchoolManagement';
import OutsourcingPage from './pages/OutsourcingPage';
import RegistrationsPage from './pages/RegistrationsPage';
import AccountingPage from './pages/AccountingPage';
import PayrollPage from './pages/PayrollPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

import OnePageHome from './pages/OnePageHome';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <ScrollToTop />
      <main className="main-content">
        <Routes>
          {/* Homepage Route - Aggregates Home, About, Services, Contact into One Page */}
          <Route path="/" element={<OnePageHome />} />

          {/* Main Page Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />

          {/* Dedicated Service Page Routes */}
          <Route path="/services/school-management" element={<SchoolManagement />} />
          <Route path="/services/outsourcing" element={<OutsourcingPage />} />
          <Route path="/services/statutory-registrations" element={<RegistrationsPage />} />
          <Route path="/services/accounting" element={<AccountingPage />} />
          <Route path="/services/payroll" element={<PayrollPage />} />

          {/* Legal Page Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
