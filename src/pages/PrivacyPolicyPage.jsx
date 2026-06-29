import React from 'react';
import { motion } from 'framer-motion';
import {
  FaDatabase, FaChartPie, FaShareAlt, FaLock,
  FaUserSecret, FaHeadset
} from 'react-icons/fa';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-[#f0f4f8] min-h-screen pt-14 pb-20 overflow-hidden font-sans">

      {/* Vibrant Hero Section */}
      <section className="relative bg-[#0d1b2a] text-white pt-24 pb-20 px-6 shadow-lg mb-16">
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff7f32]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white text-[#0d1b2a] mb-6 shadow-xl rotate-3 border-b-4 border-[#ff7f32]"
          >
            <FaUserSecret size={40} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-md"
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md"
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
          className="bg-white p-8 rounded-2xl shadow-lg shadow-[#ff7f32]/10 border-l-8 border-[#ff7f32] mb-6 md:mb-12"
        >
          <p className="text-lg text-slate-700 leading-relaxed">
            Arvion Technologies ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </motion.div>

        {/* Brand-Heavy Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100  hover:border-blue-500/30 transition-all duration-300 group md:col-span-2"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <FaDatabase size={28} />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0d1b2a] mb-4">Collection of Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="text-slate-600 text-sm leading-relaxed space-y-3 list-disc pl-5">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, and company information that you voluntarily give to us when you fill out our contact form or register for our services.</li>
              <li><strong>Log Information:</strong> When you access our services, our servers automatically record information that your browser sends. These server logs may include information such as your web request, Internet Protocol (IP) address, browser type, and the date and time of your request.</li>
              <li><strong>Cookies:</strong> We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl  border border-slate-100  hover:border-green-500/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
              <FaChartPie size={28} />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0d1b2a] mb-4">Use of Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-3 text-sm">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
              <li>Respond to your inquiries and support needs.</li>
              <li>Send you periodic emails regarding our services or information you requested.</li>
              <li>Improve our website and service offerings.</li>
              <li>Personalize your experience on our site.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl  border border-slate-100  hover:border-orange-500/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
              <FaShareAlt size={28} />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0d1b2a] mb-4">Disclosure of Your Information</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl  border border-slate-100  hover:border-purple-500/30 transition-all duration-300 group md:col-span-2"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <FaLock size={28} />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0d1b2a] mb-4">Security of Your Information</h2>
            <p className="text-slate-600 text-sm leading-relaxed text-left">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </motion.div>

        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="bg-gradient-to-r from-[#ff7f32] to-[#e66a22] rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-white text-[#ff7f32] rounded-full flex items-center justify-center mb-8 shadow-lg">
              <FaHeadset size={36} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Need Clarification?</h2>
            <p className="text-lg text-white/90 max-w-2xl mb-10 font-medium">
              If you have any questions, comments, or concerns about this Privacy Policy or our data practices, please contact our Client Advocacy Team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sales@arviontechnologies.com" className="bg-[#0d1b2a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1a2b3c] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                sales@arviontechnologies.com
              </a>
              <a href="tel:+919535764655" className="bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20">
                +91 9535764655
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
