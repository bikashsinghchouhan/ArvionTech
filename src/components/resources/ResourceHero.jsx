// Compact light-blue banner used at the top of the Resources pages (Blog, Downloads, FAQs, Case Studies).
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ResourceHero = ({ crumbs, eyebrow, title, highlight, description, children }) => (
  <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#e8f1ff] via-[#f4f8ff] to-[#eef4ff] pt-16 border-b border-blue-100">
    <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-blue-200/40 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-[10%] w-[480px] h-64 rounded-full bg-orange-100/50 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none hidden sm:block absolute top-24 right-10 w-24 h-16 opacity-60 bg-[radial-gradient(#b9cdf0_1.6px,transparent_1.6px)] [background-size:14px_14px]" />

    <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-4 sm:pt-5 text-[13px] sm:text-sm text-slate-500">
        <Link to="/" className="hover:text-[#0f2a6b] focus:outline-none focus-visible:underline">Home</Link>
        {crumbs.map((c, i) => (
          <React.Fragment key={c.label}>
            <span aria-hidden="true" className="text-slate-300">/</span>
            {c.to && i < crumbs.length - 1
              ? <Link to={c.to} className="hover:text-[#0f2a6b] focus:outline-none focus-visible:underline">{c.label}</Link>
              : <span className="font-semibold text-[#0f2a6b]" aria-current="page">{c.label}</span>}
          </React.Fragment>
        ))}
      </nav>

      <div className="max-w-3xl mx-auto lg:mx-0 py-10 sm:py-12 lg:py-14 text-center lg:text-left">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-100 px-3 py-1.5 text-xs sm:text-[13px] font-semibold text-[#0f2a6b] shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#f7941d]" /> {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-4 text-[30px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0f2a6b] text-balance"
        >
          {title} {highlight && <span className="text-[#f26b0f]">{highlight}</span>}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-[15px] sm:text-lg text-slate-700 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children}
      </div>
    </div>
  </section>
);

export default ResourceHero;
