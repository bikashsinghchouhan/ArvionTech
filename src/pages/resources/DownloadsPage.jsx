import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import ResourceHero from '../../components/resources/ResourceHero';
import { downloads, RESOURCES_EMAIL } from '../../configurations/ResourcesConfig';

const tone = {
  'School ERP': 'bg-blue-50 text-[#1747a6]',
  Payroll: 'bg-orange-50 text-[#c2560c]',
  Compliance: 'bg-violet-50 text-violet-700',
  Accounting: 'bg-emerald-50 text-emerald-700',
  Company: 'bg-slate-100 text-slate-700',
};

const requestLink = (title) =>
  `mailto:${RESOURCES_EMAIL}?subject=${encodeURIComponent(`Request: ${title}`)}&body=${encodeURIComponent(`Hello Arvion team,\n\nPlease send me a copy of "${title}".\n\nName:\nOrganisation:\nPhone:\n`)}`;

const DownloadsPage = () => (
  <div className="w-full bg-[#f8f9fa] min-h-screen">
    <ResourceHero
      crumbs={[{ label: 'Resources' }, { label: 'Downloads' }]}
      eyebrow="Downloads"
      title="Brochures, Guides &"
      highlight="Checklists"
      description="Product brochures and practical checklists for school management, payroll, compliance and accounting."
    />

    <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {downloads.map((d, i) => (
            <motion.div
              key={d.key}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex gap-4 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-[0_6px_22px_-14px_rgba(15,42,107,.22)] hover:shadow-[0_14px_30px_-16px_rgba(15,42,107,.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-14 h-16 flex-shrink-0 rounded-xl bg-red-50 text-red-500 flex flex-col items-center justify-center">
                <FaFilePdf className="text-2xl" />
                <span className="mt-0.5 text-[10px] font-bold">{d.format}</span>
              </span>
              <div className="flex flex-col min-w-0">
                <span className={`self-start rounded-full px-2.5 py-0.5 text-[11px] font-bold ${tone[d.category] || tone.Company}`}>{d.category}</span>
                <h2 className="mt-2 text-[17px] font-extrabold text-[#0b1b3d] leading-snug">{d.title}</h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{d.desc}</p>
                {d.file ? (
                  <a href={d.file} download className="mt-4 inline-flex items-center gap-2 self-start h-10 px-4 rounded-lg bg-[#1747a6] hover:bg-[#0f2a6b] text-white font-bold text-sm transition-colors">
                    <FaDownload className="text-xs" /> Download
                  </a>
                ) : (
                  <a href={requestLink(d.title)} className="mt-4 inline-flex items-center gap-2 self-start h-10 px-4 rounded-lg border-2 border-[#1747a6] text-[#1747a6] hover:bg-[#1747a6] hover:text-white font-bold text-sm transition-colors">
                    <FaEnvelope className="text-xs" /> Request a copy
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 rounded-2xl bg-gradient-to-br from-[#0a2766] to-[#14409a] text-white px-6 py-7 sm:px-10 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold">Looking for something specific?</h2>
            <p className="mt-1 text-white/80 text-sm sm:text-base">Tell us what you need and we'll send the right material, or walk you through it on a call.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-gradient-to-b from-[#ff9c3f] to-[#f2700f] text-white font-bold text-[15px] shadow-lg shadow-orange-900/30 flex-shrink-0">
            Contact us <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default DownloadsPage;
