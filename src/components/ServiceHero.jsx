// Shared hero banner for the service pages (Payroll Outsourcing, Statutory Registrations, Accounting).
// Light blue banner: text on the left, illustration in the middle, key-points card on the right
// sitting behind the illustration. Stacks to text, illustration, card on small screens.
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight, FaCalendarCheck, FaUserTie, FaClock, FaShieldAlt, FaHeadset, FaPhoneAlt } from 'react-icons/fa';

// Assurance badges shown under the buttons (same for every service page)
const badges = [
  [FaUserTie, 'Expert Team'],
  [FaClock, 'On-Time Delivery'],
  [FaShieldAlt, 'Data Security'],
  [FaHeadset, 'Dedicated Support'],
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

// Optional (used by the home page slider): showBreadcrumb, headingAs ('h1' | 'h2'),
// wideInset (extra side padding so slider arrows don't cover the text), secondary.to (router link).
const ServiceHero = ({ crumb, title, subtitle, description, image, imageAlt, imageWidth = 828, imageHeight = 568, board, primary, secondary, points, showBreadcrumb = true, headingAs: Heading = 'h1', wideInset = false }) => (
  <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#e8f1ff] via-[#f4f8ff] to-[#eef4ff] pt-16 border-b border-blue-100 lg:min-h-[calc(100svh-38px)] lg:flex lg:flex-col">
    {/* Soft background shapes */}
    <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-blue-200/40 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute bottom-[-8rem] left-[35%] w-[520px] h-60 rounded-full bg-sky-200/40 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none hidden sm:block absolute top-24 right-[30%] w-24 h-16 opacity-60 bg-[radial-gradient(#b9cdf0_1.6px,transparent_1.6px)] [background-size:14px_14px]" />

    {/* Full-height illustration on the right (large screens), fading into the banner on its left edge.
        The inner box reproduces object-cover (focus 75% / centre) so the key points can be placed
        on the board or screen drawn in the illustration, using fractions of the image size. */}
    <div aria-hidden="true" className="hidden lg:block absolute top-16 bottom-0 right-0 w-[60%] xl:w-[58%] overflow-hidden [container-type:size] [mask-image:linear-gradient(to_right,transparent_0%,#000_18%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_18%)]">
      <div
        className="absolute left-[75%] top-1/2 -translate-x-[75%] -translate-y-1/2 [container-type:inline-size]"
        style={{
          width: `max(100cqw, calc(100cqh * ${imageWidth / imageHeight}))`,
          height: `max(100cqh, calc(100cqw / ${imageWidth / imageHeight}))`,
        }}
      >
        <img src={image} alt="" width={imageWidth} height={imageHeight} fetchPriority="high" className="block w-full h-full" />
        {board && points?.length > 0 && (
          <ul
            className="absolute flex flex-col justify-evenly rounded-[0.6cqw] px-[1.2cqw] py-[0.8cqw]"
            style={{
              left: `${board.left * 100}%`,
              top: `${board.top * 100}%`,
              width: `${board.width * 100}%`,
              height: `${board.height * 100}%`,
              background: board.background || '#ffffff',
              fontSize: `${board.font}cqw`,
            }}
          >
            {points.map((pt) => (
              <li key={pt} className="flex items-center gap-[0.8em] font-semibold text-[#0f2a6b] leading-tight">
                <FaCheckCircle className="flex-shrink-0 text-[1.15em] text-[#16a34a]" /> {pt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

    <div className={`relative z-10 w-full px-4 sm:px-6 ${wideInset ? 'lg:px-24 xl:px-28' : 'lg:px-10 xl:px-16 2xl:px-24'} lg:flex-1 lg:flex lg:flex-col`}>
      {/* Breadcrumb */}
      {showBreadcrumb && (
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-4 sm:pt-5 text-[13px] sm:text-sm text-slate-500">
        <Link to="/" className="hover:text-[#0f2a6b] focus:outline-none focus-visible:underline">Home</Link>
        <span aria-hidden="true" className="text-slate-300">/</span>
        <Link to="/services" className="hover:text-[#0f2a6b] focus:outline-none focus-visible:underline">Services</Link>
        <span aria-hidden="true" className="text-slate-300">/</span>
        <span className="font-semibold text-[#0f2a6b]" aria-current="page">{crumb}</span>
      </nav>
      )}

      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:gap-6 items-center lg:flex-1 py-8 sm:py-10 lg:py-10">
        {/* Left: text */}
        <div className="min-w-0 lg:pr-8 text-center lg:text-left">
          <motion.span {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-100 px-3.5 py-1.5 text-xs sm:text-[13px] font-semibold text-[#0f2a6b] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f7941d]" /> Arvion {crumb}
          </motion.span>
          <motion.div {...fadeUp(0)} className="mt-4">
            <Heading className="text-[32px] sm:text-[42px] xl:text-[52px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0f2a6b]">
              {title}
            </Heading>
          </motion.div>
          <motion.p {...fadeUp(0.05)} className="mt-3 text-[17px] sm:text-xl xl:text-[22px] font-bold text-[#1747a6] leading-snug">
            {subtitle}
          </motion.p>
          <motion.p {...fadeUp(0.1)} className="mt-4 text-[15px] sm:text-[17px] text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {description}
          </motion.p>
          <motion.div {...fadeUp(0.15)} className="mt-6 sm:mt-7 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <Link
              to={primary.to}
              className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-7 rounded-lg bg-[#ffc727] hover:bg-[#ffb800] border border-[#f2b400] text-[#0f2a6b] font-bold text-sm sm:text-[15px] shadow-md shadow-yellow-500/20 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-200"
            >
              <FaCalendarCheck /> {primary.label}
            </Link>
            {secondary.to ? (
              <Link
                to={secondary.to}
                className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-7 rounded-lg bg-white text-[#1747a6] border-2 border-[#1747a6] hover:bg-blue-50 font-bold text-sm sm:text-[15px] shadow-sm transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                {secondary.label} <FaArrowRight className="text-xs" />
              </Link>
            ) : (
              <a
                href={secondary.href}
                className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-7 rounded-lg bg-white text-[#1747a6] border-2 border-[#1747a6] hover:bg-blue-50 font-bold text-sm sm:text-[15px] shadow-sm transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                {secondary.label} <FaArrowRight className="text-xs" />
              </a>
            )}
          </motion.div>

          {/* Assurance badges */}
          <motion.ul {...fadeUp(0.2)} className="mt-7 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-[13px] sm:text-sm font-semibold text-slate-700 max-w-md sm:max-w-none mx-auto lg:mx-0">
            {badges.map(([Icon, label]) => (
              <li key={label} className="flex items-center gap-2 justify-start">
                <span className="w-8 h-8 rounded-lg bg-white border border-blue-100 text-[#1747a6] flex items-center justify-center text-sm flex-shrink-0 shadow-sm"><Icon /></span>
                {label}
              </li>
            ))}
          </motion.ul>

          {/* Talk to an expert */}
          <motion.a
            {...fadeUp(0.25)}
            href="tel:+919535764655"
            className="mt-7 sm:mt-8 inline-flex items-center gap-3 rounded-xl bg-white/80 border border-blue-100 pl-2 pr-5 py-2 shadow-sm hover:bg-white transition-colors"
          >
            <span className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#ff9c3f] to-[#f2700f] text-white flex items-center justify-center"><FaPhoneAlt /></span>
            <span className="text-left leading-tight">
              <span className="block text-xs text-slate-500">Talk to an expert</span>
              <span className="block text-[15px] font-bold text-[#0f2a6b]">+91 95357 64655</span>
            </span>
          </motion.a>
        </div>

        {/* Right: illustration (small screens only, full-height version is the background on large screens) + key-points card */}
        <div className="relative min-w-0 grid sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:flex lg:justify-end lg:self-stretch lg:items-end gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:hidden rounded-2xl bg-white/70 p-1.5 sm:p-2 border border-white shadow-[0_24px_50px_-24px_rgba(15,42,107,.45)]"
          >
            <img src={image} alt={imageAlt} width={imageWidth} height={imageHeight} className="block w-full h-auto rounded-xl" />
          </motion.div>

          {/* Key points card: floats over the right edge of the photo on large screens.
              Skipped when no points are passed (the illustration already shows them). */}
          {points?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className={`${board ? 'lg:sr-only' : ''} rounded-2xl bg-white lg:bg-white/90 lg:backdrop-blur-md border border-white shadow-[0_18px_45px_-22px_rgba(15,42,107,.45)] p-5 sm:p-6 lg:w-[320px] xl:w-[340px] lg:mb-2 lg:-mr-4 xl:-mr-10 2xl:-mr-16`}
          >
            <ul className="grid gap-3 sm:gap-3.5">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-[14px] sm:text-[15px] font-semibold text-[#0f2a6b] leading-snug">
                  <FaCheckCircle className="flex-shrink-0 mt-0.5 text-[18px] text-[#16a34a]" /> {pt}
                </li>
              ))}
            </ul>
          </motion.div>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default ServiceHero;
