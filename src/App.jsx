import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import Core Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import Seo from './components/Seo';

// Home page and the pages it embeds load eagerly (they are in the main bundle anyway)
import OnePageHome from './pages/OnePageHome';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

// Other pages load on demand to keep the first download small
const SchoolManagement = lazy(() => import('./our_services/SchoolManagement'));
const OutsourcingPage = lazy(() => import('./pages/OutsourcingPage'));
const RegistrationsPage = lazy(() => import('./pages/RegistrationsPage'));
const AccountingPage = lazy(() => import('./pages/AccountingPage'));
const PayrollPage = lazy(() => import('./pages/PayrollPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Seo />
      <Header />
      <ScrollToTop />
      <main className="main-content">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            {/* Homepage Route - Aggregates Home, About, Services, Contact into One Page */}
            <Route path="/" element={<OnePageHome />} />

            {/* Main Page Routes */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
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

            {/* Anything else: real 404 page (noindex) */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
