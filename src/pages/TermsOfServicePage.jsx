import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle, FaUserTie, FaLightbulb,
  FaExclamationTriangle, FaEdit, FaEnvelopeOpenText
} from 'react-icons/fa';

const TermsOfServicePage = () => {
  return (
    <div className="bg-[#f0f4f8] min-h-screen pt-14 pb-20 overflow-hidden font-sans">

      {/* Vibrant Hero Section */}
      <section className="relative bg-[#ff7f32] text-white pt-24 pb-20 px-6 shadow-lg mb-16">
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-10 w-48 h-48 bg-[#0d1b2a]/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white text-[#ff7f32] mb-6 shadow-md rotate-3"
          >
            <FaCheckCircle size={40} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-md"
          >
            Terms of Service
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 inline-block bg-[#0d1b2a] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md"
          >
            Last Updated: June 27, 2026
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Intro Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg shadow-[#ff7f32]/10 border-l-8 border-[#0d1b2a] mb-6 md:mb-12"
        >
          <p className="text-lg text-slate-700 leading-relaxed">
            Welcome to Arvion Technologies. These Terms of Service ("Terms") govern your use of our website and the services we offer. By accessing or using our services, you agree to be bound by these Terms.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-2xl hover:border-[#ff7f32]/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#ff7f32] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#ff7f32] group-hover:text-white transition-all duration-300">
              <FaUserTie size={28} />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0d1b2a] mb-4">Use of Our Services</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the services. You are responsible for maintaining the confidentiality of any account information and are responsible for all activities that occur under your account.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-2xl hover:border-[#ff7f32]/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <FaLightbulb size={28} />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0d1b2a] mb-4">Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              The content, organization, graphics, design, and other matters related to our Site are protected under applicable copyrights and other proprietary laws. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited without our express written permission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-2xl hover:border-[#ff7f32]/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <FaExclamationTriangle size={28} />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0d1b2a] mb-4">Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Arvion Technologies will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use of or inability to use the service. We do not warrant that the site will be error-free or that defects will be corrected.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-2xl hover:border-[#ff7f32]/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
              <FaEdit size={28} />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0d1b2a] mb-4">Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              We reserve the right, in our sole discretion, to change these Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service on this page. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
          </motion.div>

        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="bg-[#0d1b2a] rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7f32]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#ff7f32] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#ff7f32]/40">
              <FaEnvelopeOpenText size={36} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Have Questions?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mb-10">
              If you have any questions or concerns regarding these Terms of Service, please reach out to our dedicated Client Advocacy Team. We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sales@arviontechnologies.com" className="bg-[#ff7f32] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                sales@arviontechnologies.com
              </a>
              <a href="tel:+919535764655" className="bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10">
                +91 9535764655
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TermsOfServicePage;
