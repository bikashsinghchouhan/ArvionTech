import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonialsData } from '../configurations/TestimonialsConfig';

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

// "Dr. K P Sharma" -> "KS"
const initials = (name) =>
  name.replace(/^(Dr|Mr|Mrs|Ms)\.?\s+/i, '').split(/\s+/).filter(Boolean).map(w => w[0]).filter((_, i, a) => i === 0 || i === a.length - 1).join('').toUpperCase();

const TestimonialSection = () => {
  const testiScrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollTestimonials = (direction) => {
    if (testiScrollRef.current) {
      const { current } = testiScrollRef;
      const scrollAmount = direction * (current.clientWidth * 0.8);
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Track which card sits nearest the middle of the strip, for the dots
  const handleScroll = () => {
    const el = testiScrollRef.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const middle = box.left + box.width / 2;
    let nearest = 0;
    let best = Infinity;
    [...el.children].forEach((card, i) => {
      const r = card.getBoundingClientRect();
      const dist = Math.abs(r.left + r.width / 2 - middle);
      if (dist < best) { best = dist; nearest = i; }
    });
    setActiveIdx(nearest);
  };

  const scrollToCard = (i) => {
    const el = testiScrollRef.current;
    const card = el?.children[i];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' });
  };

  return (
    <section className="pt-12 pb-10 sm:pt-14 sm:pb-12 md:pt-16 lg:pt-20 md:pb-14 lg:pb-16 px-4 sm:px-6 w-full mx-auto bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-[15px] sm:text-base text-slate-500 max-w-2xl mx-auto"
          >
            Hear from the educators and administrators who use our ERP every day.
          </motion.p>
        </div>
        <div className="relative group">
          {/* Arrows from tablet up; phones swipe, so the arrows don't cover card text */}
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollTestimonials(-1)}
            className="hidden sm:flex absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white w-11 h-11 rounded-full shadow-md border border-slate-200 text-slate-700 hover:text-[#E67300] hover:border-[#FF8000] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 items-center justify-center cursor-pointer"
          >
            <FaChevronLeft size={16} />
          </button>

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollTestimonials(1)}
            className="hidden sm:flex absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white w-11 h-11 rounded-full shadow-md border border-slate-200 text-slate-700 hover:text-[#E67300] hover:border-[#FF8000] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 items-center justify-center cursor-pointer"
          >
            <FaChevronRight size={16} />
          </button>

          {/* Phones: each card is 84vw with 8vw padding either side, so the first card starts centred */}
          <motion.div
            ref={testiScrollRef}
            onScroll={handleScroll}
            className="relative flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-2 pb-6 px-[8vw] sm:px-6 -mx-4 sm:-mx-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {testimonialsData.map((testi, idx) => (
              <motion.figure
                key={idx}
                variants={fadeUpVariant}
                className="m-0 bg-white p-5 sm:p-7 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow w-[84vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0 snap-center flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <FaQuoteLeft className="text-[#FF8000]/25 text-2xl sm:text-3xl" aria-hidden="true" />
                  <div className="flex gap-0.5 text-sm" role="img" aria-label={`${testi.rating} out of 5 stars`}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <FaStar key={i} className={i <= testi.rating ? 'text-amber-400' : 'text-slate-200'} />
                    ))}
                  </div>
                </div>
                <blockquote className="flex-1 text-[15px] sm:text-base text-slate-700 leading-relaxed mb-5 sm:mb-6">
                  “{testi.text}”
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-50 text-[#E67300] flex items-center justify-center text-sm font-bold" aria-hidden="true">
                    {initials(testi.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-slate-800 text-sm sm:text-[15px]">{testi.name}</span>
                    <span className="block text-xs sm:text-[13px] text-slate-500 leading-snug">{testi.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>

          {/* Position dots */}
          <div className="flex justify-center gap-2 mt-1">
            {testimonialsData.map((testi, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial from ${testi.name}`}
                aria-current={activeIdx === i}
                onClick={() => scrollToCard(i)}
                className="p-1.5 -m-0.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                <span className={`block h-2 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-6 bg-[#FF8000]' : 'w-2 bg-slate-300'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
