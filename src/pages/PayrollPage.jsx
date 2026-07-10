import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBell, FaRocket, FaChevronDown, FaRegQuestionCircle } from 'react-icons/fa';
import ComingSoonModal from '../components/ComingSoonModal';
import heroImg from '../assets/service-payroll.png';
import TestimonialSection from '../components/TestimonialSection';

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

const PayrollPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-[120px] pb-24 md:pt-[160px] md:pb-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="Payroll Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0d1b2a]/85 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <FaRocket /> Coming Soon
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight uppercase"
            >
              Payroll Processing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Get ready for the future of effortless payroll management.
            </motion.p>
          </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="py-24 px-4 max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] mb-6 uppercase tracking-tight">A Sneak Peek at What's Coming</h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-medium mb-12">
              We are working hard to bring you a state-of-the-art payroll application that will automate and simplify your entire payroll process. From accurate salary calculations to seamless compliance, our new platform is designed to save you time and empower your business. Stay tuned for the official launch!
            </p>
            
            <div className="flex justify-center">
              <motion.button 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0d1b2a] text-white text-lg rounded-full font-bold shadow-lg hover:bg-slate-800 transition-all hover:-translate-y-1"
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBell className="text-orange-400" /> Notify Me When Live
              </motion.button>
            </div>
          </motion.div>
        </section>
        
        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 text-orange-500 rounded-full mb-6">
              <FaRegQuestionCircle className="text-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1b2a] mb-4 uppercase tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium">Have questions about our upcoming payroll software? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "When will the new Payroll system be launched?", a: "We are currently in the final stages of beta testing and plan to roll out the system in the coming months. Join the waitlist to be the first to get access!" },
              { q: "Will the new system support multiple locations?", a: "Yes! Our new payroll system is built from the ground up to support multi-branch operations, handling different regional compliances seamlessly." },
              { q: "Can we migrate our existing payroll data?", a: "Absolutely. We are building robust migration tools to allow you to import all your historical payroll data and employee records safely and securely." },
              { q: "Will there be an employee self-service portal?", a: "Yes, employees will have their own dedicated portal to download payslips, view tax computations, and submit investment declarations." }
            ].map((faq, index) => {
              return (
                <details key={index} className="group border border-slate-200 rounded-2xl bg-white shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl">
                    <span className="font-bold text-slate-800 text-base">{faq.q}</span>
                    <FaChevronDown className="text-slate-400 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 py-5 text-slate-600 bg-white border-t border-slate-100 text-sm md:text-base leading-relaxed rounded-b-2xl">
                    {faq.a}
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        {/* 3. TESTIMONIALS */}
        <TestimonialSection />

        {/* 4. CTA / CONTACT SECTION */}
        <section className="relative py-12 md:py-24 flex items-center justify-center overflow-hidden mt-6 md:mt-10">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="Tech Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight"
            >
              Want to be the first to know?
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join our waitlist, and we'll notify you as soon as Payroll (Paybooks) is live.
            </motion.p>

            <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-3 md:px-10 md:py-4 bg-orange-500 text-white text-base md:text-lg rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all hover:-translate-y-1"
              >
                Join the Waitlist <FaArrowRight />
              </button>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PayrollPage;
