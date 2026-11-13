import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaPlayCircle,
  FaCheckCircle,
  FaUserFriends,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaWallet,
  FaChartPie,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaTrophy,
  FaCertificate,
  FaHeadset,
  FaChevronDown,
  FaLock,
  FaRegQuestionCircle,
  FaCogs,
  FaCheck
} from 'react-icons/fa';

import TestimonialSection from '../components/TestimonialSection';
import ServiceHero from '../components/ServiceHero';
import heroIllustration from '../assets/service-heroes/payroll.webp';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const OutsourcingPage = () => {

  const payrollServices = [
    { title: "Payroll Processing", desc: "Accurate and timely payroll processing to ensure happy employees.", icon: <FaUserFriends /> },
    { title: "Compliance & Tax Filing", desc: "Stay 100% compliant with labor laws and tax regulations.", icon: <FaShieldAlt className="text-green-500" /> },
    { title: "Employee Self Service", desc: "Empower employees with access to payslips and tax documents.", icon: <FaWallet className="text-orange-500" /> },
    { title: "Reports & Analytics", desc: "Real-time insights and analytics for better decision making.", icon: <FaChartPie className="text-purple-500" /> },
  ];

  return (
    <div className="w-full bg-white min-h-screen font-sans">

      {/* 1. HERO SECTION */}
      <ServiceHero
        crumb="Payroll Outsourcing"
        title="Payroll Outsourcing"
        subtitle="Accurate, Compliant & Hassle-Free Payroll"
        description="End-to-end payroll processing with statutory compliance, payslip distribution, tax management and detailed reports."
        image={heroIllustration}
        imageAlt="Payroll specialist processing salaries and payslips on a laptop"
        imageWidth={1178}
        imageHeight={996}
        primary={{ label: 'Request Demo', to: '/contact' }}
        secondary={{ label: 'Our Process', href: '#details' }}
      />

      {/* 3. SERVICES & STATS SECTION */}
      <section id="details" className="scroll-mt-20 py-8 md:py-10 px-4 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#0d1b2a] mb-4">Our Payroll Outsourcing Services</h2>
          <p className="text-slate-500 font-medium">Comprehensive payroll solutions tailored to your business needs.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Services Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {payrollServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 border border-slate-200 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[400px] bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-center gap-8 mt-8 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-[#194b8e] mb-1">500+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#194b8e] mb-1">250K+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Employees Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#194b8e] mb-1">99.9%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#194b8e] mb-1">10+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years of Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE OUR PAYROLL SYSTEM */}
      <section className="py-8 md:py-10 bg-slate-50 px-4 max-w-7xl mx-auto rounded-3xl mb-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#0d1b2a] mb-4">Why Choose Our Payroll System</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Experience a seamless, secure, and highly efficient payroll management process built for modern businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-2xl mb-4">
              <FaCogs />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Automated Operations</h3>
            <p className="text-slate-500 text-sm">Save hours every month with fully automated calculations and direct deposits.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-2xl mb-4">
              <FaLock />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Enterprise-Grade Security</h3>
            <p className="text-slate-500 text-sm">Your payroll data is protected by AES-256 encryption and stringent access controls.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center text-2xl mb-4">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Multi-Location Support</h3>
            <p className="text-slate-500 text-sm">Manage payroll effortlessly across multiple branches and varying tax zones.</p>
          </div>
        </div>
      </section>

      {/* CORE PAYROLL FEATURES */}
      <section className="py-8 md:py-10 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-[#0d1b2a] mb-6">Core Payroll Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs"><FaCheck /></div>
                <div>
                  <h4 className="font-bold text-slate-800">One-Click Payroll Run</h4>
                  <p className="text-sm text-slate-500">Run payroll for all your employees across departments with a single click.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs"><FaCheck /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Statutory Compliances</h4>
                  <p className="text-sm text-slate-500">Auto-calculated PF, PT, ESI, TDS, and other deductions keeping you 100% compliant.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs"><FaCheck /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Leave & Attendance Integration</h4>
                  <p className="text-sm text-slate-500">Syncs directly with biometric devices and leave management modules.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs"><FaCheck /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Bank Transfer Files</h4>
                  <p className="text-sm text-slate-500">Download formatted files ready for bank uploads for instant salary disbursement.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-inner">
            <h3 className="text-xl font-bold text-[#0d1b2a] mb-6">Security & Compliance Badges</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <FaShieldAlt className="text-3xl text-green-500 mb-2" />
                <span className="text-xs font-bold text-slate-700 text-center">ISO 27001 Certified</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <FaLock className="text-3xl text-blue-500 mb-2" />
                <span className="text-xs font-bold text-slate-700 text-center">GDPR Compliant</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <FaCertificate className="text-3xl text-purple-500 mb-2" />
                <span className="text-xs font-bold text-slate-700 text-center">SOC 2 Type II</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <FaTrophy className="text-3xl text-orange-500 mb-2" />
                <span className="text-xs font-bold text-slate-700 text-center">Best Payroll Provider</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-lg font-bold text-[#0d1b2a] mb-4">Awards & Certifications</h3>
              <p className="text-sm text-slate-500">Recognized globally for excellence in payroll accuracy and data security compliance.</p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ SECTION */}
      <section className="py-8 md:py-10 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-500 rounded-full mb-4">
            <FaRegQuestionCircle className="text-2xl" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#0d1b2a] mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500 font-medium">Got questions? We've got answers to the most common queries about our payroll system.</p>
        </div>

        <div className="space-y-4">
          {[
            { q: "How is salary calculated?", a: "Salary is calculated automatically based on attendance, predefined components, tax brackets, and any deductions or bonuses configured for the employee." },
            { q: "Can I generate bank transfer files?", a: "Yes, our system generates ready-to-upload bank transfer files (like NEFT, RTGS) compatible with most major banks." },
            { q: "Does it support biometric attendance?", a: "Absolutely. We seamlessly integrate with biometric devices and leading HRMS systems for accurate time tracking." },
            { q: "Can employees download payslips?", a: "Yes, employees have access to a self-service portal where they can view and download their monthly payslips and tax sheets." },
            { q: "Is tax calculation automatic?", a: "Yes, tax calculations (TDS, PF, PT, etc.) are 100% automated and stay compliant with the latest government regulations." },
            { q: "Does it support multiple branches?", a: "Yes, our system is designed to handle multiple branches, regions, and even different tax rules per location." }
          ].map((faq, index) => {
            return (
              <details key={index} className="group border border-slate-200 rounded-xl bg-white shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl">
                  <span className="font-bold text-slate-800">{faq.q}</span>
                  <FaChevronDown className="text-slate-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 text-slate-600 bg-white border-t border-slate-100 text-sm leading-relaxed rounded-b-xl">
                  {faq.a}
                </div>
              </details>
            );
          })}
        </div>
      </section>



      {/* 4. TESTIMONIALS */}
      <TestimonialSection />

      {/* 5. CTA / CONTACT SECTION */}
      <section className="relative py-8 md:py-10 flex items-center justify-center overflow-hidden mt-6 md:mt-8">
        <div className="absolute inset-0 z-0 bg-[#0d1b2a]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 uppercase tracking-tight"
          >
            Ready to Scale Your Team?
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-base md:text-lg text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Let's discuss how our global talent pool can provide the momentum your business needs.
          </motion.p>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-10 mb-8 md:mb-12"
          >
            <div className="w-full text-center flex justify-center">
              <p className="text-slate-200 text-xs md:text-sm font-medium leading-relaxed max-w-2xl text-center">
                <FaMapMarkerAlt className="text-orange-400 inline-block mr-2 -mt-1" />
                Arvion Technologies Pvt Ltd. IBLUE Entertainment, #62/1, New No 7, Ground Floor, 1st Cross, 2nd Main, Ganganagar, Bangalore-560032
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <FaPhoneAlt className="text-orange-400 flex-shrink-0" />
              <span className="text-slate-200 text-xs md:text-sm font-medium">+91 9535764655</span>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <FaEnvelope className="text-orange-400 flex-shrink-0" />
              <span className="text-slate-200 text-xs md:text-sm font-medium">sales@arviontechnologies.com</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Link
              to="/contact-us"
              className="inline-block px-8 py-3 md:px-10 md:py-4 bg-orange-500 text-white text-base md:text-lg rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all hover:-translate-y-1"
            >
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default OutsourcingPage;
