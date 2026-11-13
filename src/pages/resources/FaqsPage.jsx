import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown, FaSearch, FaArrowRight } from 'react-icons/fa';
import ResourceHero from '../../components/resources/ResourceHero';
import { faqGroups } from '../../configurations/ResourcesConfig';

const FaqsPage = () => {
  const [group, setGroup] = useState('all');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqGroups
      .filter((g) => group === 'all' || g.key === group)
      .map((g) => ({ ...g, items: g.items.filter((it) => !q || it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)) }))
      .filter((g) => g.items.length);
  }, [group, query]);

  const total = faqGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      <ResourceHero
        crumbs={[{ label: 'Resources' }, { label: 'FAQs' }]}
        eyebrow="FAQs"
        title="Frequently Asked"
        highlight="Questions"
        description={`Answers to the ${total} most common questions about our School ERP, payroll, registrations and accounting services.`}
      >
        <label className="mt-6 mx-auto lg:mx-0 flex items-center gap-3 max-w-xl h-12 px-4 rounded-xl bg-white border border-blue-100 shadow-sm focus-within:ring-4 focus-within:ring-blue-100">
          <FaSearch className="text-slate-400" aria-hidden="true" />
          <span className="sr-only">Search questions</span>
          <input
            type="search"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(null); }}
            placeholder="Search questions, e.g. GST or payslips"
            className="flex-1 bg-transparent outline-none text-[15px] text-[#0b1b3d] placeholder:text-slate-400"
          />
        </label>
      </ResourceHero>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[240px_minmax(0,1fr)] gap-6 lg:gap-10 items-start">
          {/* Topic filter */}
          <nav aria-label="FAQ topics" className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:sticky lg:top-24">
            {[{ key: 'all', label: 'All topics' }, ...faqGroups].map((g) => (
              <button
                key={g.key}
                type="button"
                aria-pressed={group === g.key}
                onClick={() => { setGroup(g.key); setOpen(null); }}
                className={`flex-shrink-0 text-left px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors cursor-pointer ${group === g.key ? 'bg-[#1747a6] text-white border-[#1747a6]' : 'bg-white text-[#0f2a6b] border-slate-200 hover:border-blue-300'}`}
              >
                {g.label}
              </button>
            ))}
          </nav>

          {/* Questions */}
          <div className="grid gap-8">
            {visible.length === 0 && (
              <p className="rounded-2xl bg-white border border-slate-200 p-6 text-slate-600">
                No questions match "{query}". Try another word, or <Link to="/contact" className="font-bold text-[#1747a6] underline">ask us directly</Link>.
              </p>
            )}
            {visible.map((g) => (
              <div key={g.key}>
                <h2 className="text-lg sm:text-xl font-extrabold text-[#0b1b3d] mb-3">{g.label}</h2>
                <div className="grid gap-3">
                  {g.items.map((it) => {
                    const id = `${g.key}-${it.q}`;
                    const isOpen = open === id;
                    return (
                      <div key={id} className={`bg-white rounded-xl border transition-colors ${isOpen ? 'border-blue-200 shadow-[0_8px_24px_-16px_rgba(15,42,107,.3)]' : 'border-slate-200/80'}`}>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpen(isOpen ? null : id)}
                          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                        >
                          <span className="font-bold text-[15px] sm:text-base text-[#0b1b3d]">{it.q}</span>
                          <FaChevronDown className={`flex-shrink-0 text-sm text-[#1747a6] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                              <p className="px-5 pb-5 text-[15px] text-slate-600 leading-relaxed">{it.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-gradient-to-br from-[#0a2766] to-[#14409a] text-white px-6 py-7 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold">Still have a question?</h2>
                <p className="mt-1 text-white/80 text-sm">Our team replies within one working day.</p>
              </div>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-gradient-to-b from-[#ff9c3f] to-[#f2700f] text-white font-bold text-sm flex-shrink-0">
                Ask us <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqsPage;
