// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSchool, FaUsers, FaStamp, FaBook, FaArrowRight, FaCheck, FaCheckCircle, FaChevronRight, FaHome, FaCalendarCheck, FaPhoneAlt, FaThLarge } from 'react-icons/fa';
import '../csssection/services.css'; // Maintaining backward compatibility
import { servicesData } from "../configurations/ServicesConfig.jsx";
import { SchoolIllustration, PayrollIllustration, StatutoryIllustration, AccountingIllustration } from '../components/CoreServicesIllustrations';

// Illustration shown at the top of each card on the standalone /services page
const serviceArt = {
    school: SchoolIllustration,
    outsourcing: PayrollIllustration,
    registrations: StatutoryIllustration,
    accounting: AccountingIllustration,
};

const reveal = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } };

/* ----------------------------------------------------------------------------
   Standalone /services page: same look as the rest of the site
   (light blue hero, white cards, navy text, orange as the only accent).
---------------------------------------------------------------------------- */
const ServicesPage = () => (
    <div className="w-full bg-white">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e8f1ff] via-[#f4f8ff] to-white pt-16">
            <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-blue-200/40 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -top-10 right-[-6rem] w-[360px] h-[360px] rounded-full bg-sky-200/30 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none hidden sm:block absolute top-24 left-[8%] w-24 h-16 opacity-60 bg-[radial-gradient(#b9cdf0_1.6px,transparent_1.6px)] [background-size:14px_14px]" />

            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 pt-5 text-[11.5px] sm:text-sm text-slate-500">
                    <FaHome className="text-[12px]" aria-hidden="true" />
                    <Link to="/" className="hover:text-[#0B1B3D] transition-colors">Home</Link>
                    <FaChevronRight className="text-[9px] text-slate-400" aria-hidden="true" />
                    <span className="font-bold text-[#0B1B3D]" aria-current="page">Services</span>
                </nav>

                <motion.div
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center pt-6 sm:pt-8 pb-10 sm:pb-14"
                >
                    <span className="inline-flex items-center gap-2 text-[12px] sm:text-sm font-bold uppercase tracking-[0.08em] text-[#0B1B3D]">
                        <FaThLarge className="text-[#FF7A00] text-[13px]" aria-hidden="true" /> Our Services
                    </span>
                    <h1 className="mt-3 sm:mt-4 text-[26px] sm:text-4xl lg:text-[40px] font-extrabold text-[#0B1B3D] leading-[1.15] tracking-tight text-balance">
                        Comprehensive{' '}
                        <span className="relative inline-block text-[#FF7A00]">
                            Business Solutions
                            <svg aria-hidden="true" viewBox="0 0 200 12" preserveAspectRatio="none" className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-2 sm:h-3 text-[#FF7A00]/40">
                                <path d="M3 9 C 60 3, 140 2, 197 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>
                    <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16.5px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        School ERP software and expert payroll, registration and accounting services, so you can focus on teaching and growth instead of paperwork.
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Main service cards */}
        <section className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 -mt-2 pb-10 sm:pb-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
                {servicesData.map((service, i) => {
                    const Art = serviceArt[service.id];
                    return (
                        <motion.article
                            key={service.id}
                            {...reveal}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            className="group flex flex-col rounded-2xl bg-white border border-slate-200/80 shadow-[0_10px_30px_-18px_rgba(15,42,107,.35)] hover:shadow-[0_18px_40px_-20px_rgba(15,42,107,.45)] hover:border-blue-200 transition-[box-shadow,border-color] duration-300 overflow-hidden"
                        >
                            {/* Illustration panel */}
                            {Art && (
                                <div className="bg-gradient-to-b from-[#eef4ff] to-[#f8fbff] border-b border-slate-100 px-6 pt-5 pb-3">
                                    <div className="mx-auto w-full max-w-[200px] sm:max-w-[260px] aspect-[22/15] transition-transform duration-500 group-hover:scale-[1.03]">
                                        <Art />
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col flex-1 p-5 sm:p-6">
                                <div className="flex items-center gap-3">
                                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1747a6] text-white flex items-center justify-center text-[15px] shadow-sm">
                                        {service.icon}
                                    </span>
                                    <div className="min-w-0">
                                        <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-[#E67300]">{service.vertical}</span>
                                        <h2 className="text-[16.5px] sm:text-[17.5px] font-extrabold text-[#0B1B3D] leading-tight">{service.title}</h2>
                                    </div>
                                </div>

                                <p className="mt-3 text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">{service.summary}</p>

                                <ul className="mt-4 pt-4 border-t border-slate-100 grid gap-2.5 list-none">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] font-medium text-slate-700 leading-snug">
                                            <FaCheckCircle className="flex-shrink-0 mt-0.5 text-[14px] text-[#16a34a]" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={service.path}
                                    className="mt-auto pt-6 flex rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                                >
                                    <span className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-10 sm:h-11 px-5 rounded-lg bg-white text-[#1747a6] border-[1.5px] border-[#1747a6] font-semibold text-[13px] sm:text-[14px] group-hover:bg-[#1747a6] group-hover:text-white transition-colors">
                                        {service.cta} <FaArrowRight className="text-[11px] transition-transform duration-300 group-hover:translate-x-0.5" />
                                    </span>
                                </Link>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </section>

        {/* Closing call to action */}
        <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 py-10 sm:py-14">
            <motion.div
                {...reveal}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-[#0e3c96] via-[#1747a6] to-[#0e3c96] px-5 sm:px-10 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left"
            >
                <div>
                    <h2 className="text-[20px] sm:text-[26px] font-extrabold text-white leading-tight">Not sure which service you need?</h2>
                    <p className="mt-2 text-[13.5px] sm:text-[15px] text-white/80 max-w-xl">
                        Tell us about your school or business and we will suggest the right mix of software and services.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 flex-shrink-0">
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-4 sm:px-5 rounded-lg bg-[#FF7A00] hover:bg-[#E66E00] text-white font-semibold text-[12.5px] sm:text-[14px] whitespace-nowrap shadow-md transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
                    >
                        <FaCalendarCheck className="text-[13px]" /> Request Demo
                    </Link>
                    <a
                        href="tel:+919535764655"
                        className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-4 sm:px-5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold text-[12.5px] sm:text-[14px] whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                    >
                        <FaPhoneAlt className="text-[12px]" /> +91 95357 64655
                    </a>
                </div>
            </motion.div>
        </section>
    </div>
);

// it is define in servicesconfig.jsx file need to change if any changes here
// const servicesData = [
//     {
//         id: 'school',
//         icon: <FaSchool />,
//         title: 'School Management System',
//         summary: 'An integrated ERP solution to manage all academic, administrative, and parent-teacher communication workflows seamlessly.',
//         features: ['Student Information profiles', 'Real-time daily attendance log', 'Conflict-free scheduling algorithm', 'Digital grading report cards'],
//         path: '/services/school-management',
//     },
//     {
//         id: 'outsourcing',
//         icon: <FaUsers />,
//         title: 'Payroll Outsourcing',
//         summary: 'Scale your operations globally with secure, compliant, and hands-off talent onboarding, payroll processing, and taxes.',
//         features: ['Vetted tech & business talent', 'Flexible capacity scale-up', 'Project management dashboards', 'Milestone verification checks'],
//         path: '/services/outsourcing',
//     },
//     {
//         id: 'registrations',
//         icon: <FaStamp />,
//         title: 'Statutory Registrations',
//         summary: 'Navigate legal frameworks with ease. We streamline entity setup, tax registration filings, and trademark registrations.',
//         features: ['Legal company incorporation', 'Tax registrations & GST setup', 'Import Export IEC processing', 'Intellectual Property protection'],
//         path: '/services/statutory-registrations',
//     },
//     {
//         id: 'accounting',
//         icon: <FaBook />,
//         title: 'Accounting Services',
//         summary: 'Ensure compliance, secure general ledger management, prepare cashflows, and run strategic forecasting analysis.',
//         features: ['Continuous bookkeeping audit', 'Balance sheets & income statements', 'Automated receipt categorization', 'Financial forecasting advisory'],
//         path: '/services/accounting',
//     },
// ];

const Services = ({ isSinglePage }) => {
    // The /services route gets the full page; the home page embeds the compact grid below.
    if (!isSinglePage) return <ServicesPage />;

    // Only one <h1> per page: embedded in the home page this becomes an <h2>.
    const Heading = isSinglePage ? 'h2' : 'h1';
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <div className={isSinglePage ? "w-full box-border" : " w-full min-h-screen bg-[#f8f9fa] box-border"}>
            <section className={isSinglePage ? "py-6 sm:py-10 bg-white text-center box-border px-4 sm:px-6 lg:px-8" : "services-grid-section px-4 sm:px-6 lg:px-8"}>
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="flex flex-col items-center mb-4 md:mb-8">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#ff7f32] bg-orange-50 border border-orange-100 mb-3 shadow-sm">
                            Our Expertise
                        </span>
                        <Heading className="text-heading font-extrabold text-[#0b1f4d] tracking-tight leading-tight max-w-2xl font-sans">
                            Comprehensive Enterprise Solutions
                        </Heading>
                        <p className="text-sm text-slate-500 max-w-lg mt-3 leading-relaxed font-semibold">
                            We handle administrative complexity, compliance, and systems so you can focus on building your core business products.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {servicesData.map((service) => (
                            <motion.div whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                                className="bg-white hover:bg-slate-50/50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-md hover:border-orange-300 hover:shadow-2xl transition-[box-shadow,border-color,background-color,color] duration-300 flex flex-col justify-between group cursor-default"
                                key={service.id}
                                variants={cardVariants}
                            >
                                <div>
                                    {/* Icon */}
                                    <span className="inline-flex p-3 rounded-xl bg-orange-50 text-[#ff7f32] group-hover:bg-[#ff7f32] group-hover:text-white transition-colors duration-300 mb-5 shadow-sm border border-orange-100/50">
                                        {service.icon}
                                    </span>

                                    {/* Title & Summary */}
                                    <h3 className="text-card-title font-extrabold text-[#0b1f4d] mb-3 group-hover:text-[#ff7f32] transition-colors leading-tight font-sans">
                                        {service.title}
                                    </h3>
                                    <p className="text-card-desc text-slate-600 leading-relaxed mb-6">
                                        {service.summary}
                                    </p>

                                    {/* Quick Bullets */}
                                    <div className="flex flex-col gap-2.5 mb-8 border-t border-slate-200 pt-5">
                                        {service.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex gap-2 items-start">
                                                <span className="text-[#ff7f32] mt-[3px] text-[11px]">
                                                    <FaCheck />
                                                </span>
                                                <span className="text-[12.5px] sm:text-[13px] font-medium text-slate-700 leading-snug">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Explore Link */}
                                <Link
                                    to={service.path}
                                    className="inline-flex items-center gap-2 text-[13px] font-bold text-[#ff7f32] hover:text-[#e96e25] transition-colors self-start cursor-pointer font-sans"
                                >
                                    Explore Service
                                    <FaArrowRight className="text-[9px] transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>

                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Services;
