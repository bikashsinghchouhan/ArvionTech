import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar, FaUsers } from 'react-icons/fa';
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
  // Whether there is more to scroll on each side (arrows are disabled at the ends)
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = testiScrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

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
    updateArrows();
  };

  const scrollToCard = (i) => {
    const el = testiScrollRef.current;
    const card = el?.children[i];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-12 px-4 sm:px-6 w-full mx-auto bg-gradient-to-b from-[#f4f8fe] to-[#f8fafd]">
      {/* Soft waves + orange swooshes in the corners */}
      <svg aria-hidden="true" className="pointer-events-none absolute top-0 left-0 w-[45%] max-w-[560px] h-auto" viewBox="0 0 560 170" fill="none">
        <path d="M0 0 H380 C300 40 200 70 120 110 C70 135 30 150 0 170 Z" fill="#e8f0fc" />
        <path d="M0 120 C90 115 170 80 250 40 C290 20 330 6 380 0 L330 0 C280 10 230 30 180 55 C110 92 50 108 0 112 Z" fill="#f7861c" />
      </svg>
      {/* bottom-right: same swoosh as top-left, turned 180° */}
      <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[45%] max-w-[560px] h-auto rotate-180" viewBox="0 0 560 170" fill="none">
        <path d="M0 0 H380 C300 40 200 70 120 110 C70 135 30 150 0 170 Z" fill="#e8f0fc" />
        <path d="M0 120 C90 115 170 80 250 40 C290 20 330 6 380 0 L330 0 C280 10 230 30 180 55 C110 92 50 108 0 112 Z" fill="#f7861c" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 flex flex-col items-center">
          <motion.span
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffe9d6] border border-[#ffd3ad] text-[#e8730c] text-[13px] sm:text-[14px] font-extrabold"
          >
            <FaUsers className="text-[18px]" aria-hidden="true" /> Client Testimonials
          </motion.span>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="mt-4 text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-tight text-[#0b1f4d]"
          >
            What Our{' '}
            <span className="relative inline-block text-[#f2700f]">
              Clients Say
              <svg aria-hidden="true" viewBox="0 0 200 14" preserveAspectRatio="none" className="absolute left-[18%] -bottom-2 sm:-bottom-3 w-[82%] h-2.5 sm:h-3.5 text-[#f2700f]">
                <path d="M2 11 C 60 3, 140 2, 198 7" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="mt-5 text-[15px] sm:text-[17px] text-slate-600 max-w-2xl mx-auto"
          >
            Hear from businesses and organizations that trust Arvion Technologies.
          </motion.p>
        </div>
        <div className="relative group">
          {/* Arrows from tablet up; phones swipe, so the arrows don't cover card text */}
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollTestimonials(-1)}
            disabled={!canPrev}
            className="hidden sm:flex absolute -left-2 lg:-left-6 top-[calc(50%-1rem)] -translate-y-1/2 z-20 bg-white w-12 h-12 rounded-full shadow-[0_10px_25px_-10px_rgba(11,42,107,.35)] text-[#0b1f4d] enabled:hover:text-white enabled:hover:bg-[#f2700f] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 items-center justify-center cursor-pointer"
          >
            <FaChevronLeft size={16} />
          </button>

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollTestimonials(1)}
            disabled={!canNext}
            className="hidden sm:flex absolute -right-2 lg:-right-6 top-[calc(50%-1rem)] -translate-y-1/2 z-20 bg-white w-12 h-12 rounded-full shadow-[0_10px_25px_-10px_rgba(11,42,107,.35)] text-[#0b1f4d] enabled:hover:text-white enabled:hover:bg-[#f2700f] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 items-center justify-center cursor-pointer"
          >
            <FaChevronRight size={16} />
          </button>

          {/* Phones: each card is 84vw with 8vw padding either side, so the first card starts centred */}
          <motion.div
            ref={testiScrollRef}
            onScroll={handleScroll}
            className="relative flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-3 pb-8 px-[8vw] sm:px-6 -mx-4 sm:-mx-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {testimonialsData.map((testi, idx) => (
              <motion.figure
                key={idx}
                variants={fadeUpVariant}
                className="m-0 bg-white p-5 sm:p-6 rounded-2xl border-l-[3px] border-[#f7861c] shadow-[0_10px_28px_-18px_rgba(11,42,107,.3)] hover:shadow-[0_16px_34px_-18px_rgba(11,42,107,.35)] hover:-translate-y-0.5 transition-all w-[84vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0 snap-center flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <FaQuoteLeft className="text-[#f2700f] text-2xl" aria-hidden="true" />
                  <div className="flex gap-0.5 text-[14px]" role="img" aria-label={`${testi.rating} out of 5 stars`}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <FaStar key={i} className={i <= testi.rating ? 'text-[#f5b301]' : 'text-slate-200'} />
                    ))}
                  </div>
                </div>
                <blockquote className="flex-1 text-[14px] sm:text-[15px] text-slate-700 leading-relaxed mb-4">
                  “{testi.text}”
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffe9d6] text-[#f2700f] flex items-center justify-center text-[14px] font-extrabold" aria-hidden="true">
                    {initials(testi.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-[#0b1f4d] text-[15px]">{testi.name}</span>
                    <span className="block text-[12.5px] text-slate-500 leading-snug">{testi.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>

          {/* Position dots */}
          <div className="flex justify-center gap-2 mt-2">
            {testimonialsData.map((testi, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial from ${testi.name}`}
                aria-current={activeIdx === i}
                onClick={() => scrollToCard(i)}
                className="p-1.5 -m-0.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                <span className={`block h-2.5 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-9 bg-[#f2700f]' : 'w-2.5 bg-slate-300'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
