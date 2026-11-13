import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaArrowLeft, FaRegClock } from 'react-icons/fa';
import ResourceHero from '../../components/resources/ResourceHero';
import { blogPosts } from '../../configurations/ResourcesConfig';
import NotFoundPage from '../NotFoundPage';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <NotFoundPage />;
  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      <ResourceHero
        crumbs={[{ label: 'Blog & Articles', to: '/blog' }, { label: post.category }]}
        eyebrow={post.category}
        title={post.title}
      >
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-600"><FaRegClock /> {post.readTime} · By the Arvion team</p>
      </ResourceHero>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-10 items-start">
          <article className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-[0_6px_22px_-14px_rgba(15,42,107,.18)]">
            <p className="text-lg text-slate-700 leading-relaxed font-medium">{post.excerpt}</p>
            {post.sections.map((s) => (
              <section key={s.heading} className="mt-8">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0b1b3d]">{s.heading}</h2>
                {s.paragraphs?.map((p) => <p key={p.slice(0, 24)} className="mt-3 text-[15px] sm:text-base text-slate-700 leading-relaxed">{p}</p>)}
                {s.bullets && (
                  <ul className="mt-4 grid gap-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] sm:text-base text-slate-700">
                        <FaCheckCircle className="flex-shrink-0 mt-1 text-[#16a34a]" /> {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#1747a6]"><FaArrowLeft className="text-xs" /> All articles</Link>
              <Link to={post.cta.to} className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[#ffc727] hover:bg-[#ffb800] border border-[#f2b400] text-[#0f2a6b] font-bold text-sm transition-colors">
                {post.cta.label} <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </article>

          <aside className="grid gap-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-gradient-to-br from-[#0a2766] to-[#14409a] text-white p-6">
              <h2 className="text-lg font-extrabold">Need help with this?</h2>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">Talk to our team about your school or business. We reply within one working day.</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-gradient-to-b from-[#ff9c3f] to-[#f2700f] text-white font-bold text-sm">Contact us <FaArrowRight className="text-xs" /></Link>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200/80 p-6">
              <h2 className="text-base font-extrabold text-[#0b1b3d]">More articles</h2>
              <ul className="mt-3 grid gap-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to={`/blog/${o.slug}`} className="block text-sm font-semibold text-[#1747a6] hover:underline leading-snug">{o.title}</Link>
                    <span className="text-xs text-slate-500">{o.category}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
