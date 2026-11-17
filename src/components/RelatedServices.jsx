// "Related services" strip shown near the end of each service page.
// Gives visitors (and search engines) descriptive internal links to the other services.
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const SERVICES = [
  {
    path: '/services/school-management',
    title: 'School Management ERP Software',
    desc: 'Admissions, fees, attendance, exams and report cards with parent, teacher and student apps.',
  },
  {
    path: '/services/outsourcing',
    title: 'Payroll Outsourcing Services',
    desc: 'Salary processing, payslips, PF, ESI, PT and TDS compliance handled every month.',
  },
  {
    path: '/services/accounting',
    title: 'Accounting & Bookkeeping Services',
    desc: 'Bookkeeping, GST and TDS returns, ROC filings and monthly financial reports.',
  },
  {
    path: '/services/statutory-registrations',
    title: 'Company, GST, PF & ESI Registration',
    desc: 'Private limited, LLP, GST, PF, ESI, Professional Tax, MSME and Shops & Establishment.',
  },
];

const RelatedServices = ({ current }) => (
  <section aria-labelledby="related-services" className="w-full bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12 border-t border-slate-200">
    <div className="max-w-7xl mx-auto">
      <h2 id="related-services" className="text-[24px] sm:text-[30px] font-extrabold tracking-tight text-[#0b1f4d] text-center">
        Related Services from Arvion Technologies
      </h2>
      <p className="mt-2 text-center text-[15px] sm:text-[16px] text-slate-600">
        One Bangalore team for your school software, payroll, accounts and compliance.
      </p>
      <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {SERVICES.filter((s) => s.path !== current).map((s) => (
          <li key={s.path}>
            <Link
              to={s.path}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f8fbff] p-5 hover:border-[#f7b27a] hover:bg-[#fff7f0] transition-colors no-underline"
            >
              <h3 className="text-[17px] font-bold text-[#0b1f4d] leading-snug">{s.title}</h3>
              <p className="mt-2 flex-1 text-[14px] text-slate-600 leading-relaxed">{s.desc}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold text-[#f2700f]">
                Learn more <FaArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default RelatedServices;
