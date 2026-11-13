import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight, FaExclamationCircle, FaTrophy } from 'react-icons/fa';
import ResourceHero from '../../components/resources/ResourceHero';
import { caseStudies } from '../../configurations/ResourcesConfig';

const tone = {
  'School ERP': { tag: 'bg-blue-50 text-[#1747a6]', bar: 'from-[#1d6ff2] to-[#0f2a6b]' },
  Payroll: { tag: 'bg-orange-50 text-[#c2560c]', bar: 'from-[#ff9c3f] to-[#f26b0f]' },
  Compliance: { tag: 'bg-violet-50 text-violet-700', bar: 'from-violet-500 to-violet-700' },
  Accounting: { tag: 'bg-emerald-50 text-emerald-700', bar: 'from-emerald-500 to-emerald-700' },
};

const CaseStudiesPage = () => (
  <div className="w-full bg-[#f8f9fa] min-h-screen">
    <ResourceHero
      crumbs={[{ label: 'Resources' }, { label: 'Case Studies' }]}
      eyebrow="Case Studies"
      title="How We Help Schools &"
      highlight="Businesses"
      description="Typical challenges our clients bring to us, what we do about them, and where they end up."
    />

    <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="mb-6 text-sm text-slate-500">These are representative scenarios based on common client situations. Client names are withheld.</p>
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
          {caseStudies.map((cs, i) => {
            const t = tone[cs.category] || tone['School ERP'];
            return (
              <motion.article
                key={cs.key}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-[0_6px_22px_-14px_rgba(15,42,107,.22)]"
              >
                <div className={`h-2 bg-gradient-to-r ${t.bar}`} />
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <span className={`self-start rounded-full px-2.5 py-1 text-xs font-bold ${t.tag}`}>{cs.category}</span>
                  <h2 className="mt-3 text-xl sm:text-[22px] font-extrabold text-[#0b1b3d] leading-snug">{cs.title}</h2>
                  <p className="mt-1 text-sm text-slate-500">{cs.client}</p>

                  <div className="mt-5 rounded-xl bg-red-50/60 border border-red-100 p-4">
                    <h3 className="flex items-center gap-2 text-sm font-extrabold text-red-700"><FaExclamationCircle /> The challenge</h3>
                    <p className="mt-1.5 text-[14px] text-slate-700 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-extrabold text-[#0f2a6b]">What we did</h3>
                    <ul className="mt-2 grid gap-2">
                      {cs.solution.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                          <FaCheckCircle className="flex-shrink-0 mt-0.5 text-[#16a34a]" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 rounded-xl bg-emerald-50/70 border border-emerald-100 p-4">
                    <h3 className="flex items-center gap-2 text-sm font-extrabold text-emerald-700"><FaTrophy /> The outcome</h3>
                    <p className="mt-1.5 text-[14px] text-slate-700 leading-relaxed">{cs.outcome}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10 rounded-2xl bg-gradient-to-br from-[#0a2766] to-[#14409a] text-white px-6 py-7 sm:px-10 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold">Facing a similar challenge?</h2>
            <p className="mt-1 text-white/80 text-sm sm:text-base">Tell us about your school or business and we'll show you how we can help.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-gradient-to-b from-[#ff9c3f] to-[#f2700f] text-white font-bold text-[15px] shadow-lg shadow-orange-900/30 flex-shrink-0">
            Talk to us <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default CaseStudiesPage;
