import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonialsData } from '../testimonialsConfig';

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

const TestimonialSection = () => {
  const testiScrollRef = useRef(null);

  const scrollTestimonials = (direction) => {
    if (testiScrollRef.current) {
      const { current } = testiScrollRef;
      const scrollAmount = direction * (current.clientWidth * 0.8);
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 pb-4 sm:pt-20 sm:pb-8 px-4 w-full mx-auto bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb:-8 md:mb-12">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-3xl font-bold text-slate-800 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-slate-500 max-w-2xl mx-auto"
          >
            Hear from the educators and administrators who use our ERP every day.
          </motion.p>
        </div>
        <div className="relative group">
          <button
            onClick={() => scrollTestimonials(-1)}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 bg-transparent sm:bg-white p-2 sm:p-3 rounded-full shadow-none sm:shadow-lg border-none sm:border sm:border-slate-100 text-indigo-600 hover:bg-indigo-50 hover:scale-110 transition-all focus:outline-none flex items-center justify-center cursor-pointer"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={() => scrollTestimonials(1)}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 bg-transparent sm:bg-white p-2 sm:p-3 rounded-full shadow-none sm:shadow-lg border-none sm:border sm:border-slate-100 text-indigo-600 hover:bg-indigo-50 hover:scale-110 transition-all focus:outline-none flex items-center justify-center cursor-pointer"
          >
            <FaChevronRight size={20} />
          </button>

          <motion.div
            ref={testiScrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4 px-4 sm:px-8 -mx-4 sm:-mx-8"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {testimonialsData.map((testi, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative w-full sm:w-[80%] md:w-[calc(33.333%-1rem)] flex-shrink-0 snap-center flex flex-col justify-between"
              >
                <div className="absolute top-8 right-8 flex text-yellow-400">
                  {[...Array(testi.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <div>
                  <FaQuoteLeft className="text-indigo-100 text-4xl opacity-60 mb-4" />
                  <p className="text-slate-600 italic mb-8 leading-relaxed">"{testi.text}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">{testi.name}</h4>
                  <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-1">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
