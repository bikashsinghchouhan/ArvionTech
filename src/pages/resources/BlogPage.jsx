import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRegClock } from 'react-icons/fa';
import ResourceHero from '../../components/resources/ResourceHero';
import { blogPosts } from '../../configurations/ResourcesConfig';

const categoryTone = {
  'School ERP': 'bg-blue-50 text-[#1747a6]',
  Payroll: 'bg-orange-50 text-[#c2560c]',
  Compliance: 'bg-violet-50 text-violet-700',
  Accounting: 'bg-emerald-50 text-emerald-700',
};
const categoryBar = {
  'School ERP': 'from-[#1d6ff2] to-[#0f2a6b]',
  Payroll: 'from-[#ff9c3f] to-[#f26b0f]',
  Compliance: 'from-violet-500 to-violet-700',
  Accounting: 'from-emerald-500 to-emerald-700',
};

const BlogPage = () => {
  const categories = ['All', ...new Set(blogPosts.map((p) => p.category))];
  const [active, setActive] = useState('All');
  const posts = active === 'All' ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      <ResourceHero
        crumbs={[{ label: 'Resources' }, { label: 'Blog & Articles' }]}
        eyebrow="Blog & Articles"
        title="Insights for Schools &"
        highlight="Growing Businesses"
        description="Practical guides on school management, payroll, compliance and accounting from the Arvion team."
      />

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div role="tablist" aria-label="Filter articles by topic" className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${active === c ? 'bg-[#1747a6] text-white border-[#1747a6]' : 'bg-white text-[#0f2a6b] border-slate-200 hover:border-blue-300'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-[0_6px_22px_-14px_rgba(15,42,107,.22)] hover:shadow-[0_14px_30px_-16px_rgba(15,42,107,.3)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${categoryBar[post.category] || 'from-slate-300 to-slate-400'}`} />
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${categoryTone[post.category] || 'bg-slate-100 text-slate-700'}`}>{post.category}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500"><FaRegClock /> {post.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-lg font-extrabold text-[#0b1b3d] leading-snug group-hover:text-[#1747a6] transition-colors">
                    <Link to={`/blog/${post.slug}`} className="focus:outline-none focus-visible:underline">{post.title}</Link>
                  </h2>
                  <p className="mt-2 text-[14px] text-slate-600 leading-relaxed">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1747a6] w-max" aria-label={`Read: ${post.title}`}>
                    Read article <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
