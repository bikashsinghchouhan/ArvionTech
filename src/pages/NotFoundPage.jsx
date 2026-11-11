import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Our Services' },
  { to: '/services/school-management', label: 'School Management ERP' },
  { to: '/contact', label: 'Contact Us' },
];

const NotFoundPage = () => (
  <section className="min-h-[70vh] pt-[140px] pb-20 px-4 flex flex-col items-center justify-center text-center bg-[#f8f9fa]">
    <p className="text-6xl font-black text-[#ff7f32] mb-4">404</p>
    <h1 className="text-2xl md:text-4xl font-extrabold text-[#0d1b2a] mb-4 uppercase tracking-tight">
      Page Not Found
    </h1>
    <p className="text-slate-500 max-w-md mb-8">
      The page you are looking for doesn't exist or has been moved.
    </p>
    <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-3">
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="px-5 py-2.5 rounded-full border border-[#ff7f32] text-[#ff7f32] font-semibold hover:bg-[#ff7f32] hover:text-white transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  </section>
);

export default NotFoundPage;
