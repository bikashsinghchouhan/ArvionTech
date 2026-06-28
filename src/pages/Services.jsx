// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSchool, FaUsers, FaStamp, FaBook, FaArrowRight, FaCheck } from 'react-icons/fa';
import '../csssection/services.css'; // Maintaining backward compatibility

const servicesData = [
    {
        id: 'school',
        icon: <FaSchool />,
        title: 'School Management System',
        summary: 'An integrated ERP solution to manage all academic, administrative, and parent-teacher communication workflows seamlessly.',
        features: ['Student Information profiles', 'Real-time daily attendance log', 'Conflict-free scheduling algorithm', 'Digital grading report cards'],
        path: '/services/school-management',
    },
    {
        id: 'outsourcing',
        icon: <FaUsers />,
        title: 'Payroll Outsourcing',
        summary: 'Scale your operations globally with secure, compliant, and hands-off talent onboarding, payroll processing, and taxes.',
        features: ['Vetted tech & business talent', 'Flexible capacity scale-up', 'Project management dashboards', 'Milestone verification checks'],
        path: '/services/outsourcing',
    },
    {
        id: 'registrations',
        icon: <FaStamp />,
        title: 'Statutory Registrations',
        summary: 'Navigate legal frameworks with ease. We streamline entity setup, tax registration filings, and trademark registrations.',
        features: ['Legal company incorporation', 'Tax registrations & GST setup', 'Import Export IEC processing', 'Intellectual Property protection'],
        path: '/services/statutory-registrations',
    },
    {
        id: 'accounting',
        icon: <FaBook />,
        title: 'Accounting Services',
        summary: 'Ensure compliance, secure general ledger management, prepare cashflows, and run strategic forecasting analysis.',
        features: ['Continuous bookkeeping audit', 'Balance sheets & income statements', 'Automated receipt categorization', 'Financial forecasting advisory'],
        path: '/services/accounting',
    },
];

const Services = ({ isSinglePage }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <div className={isSinglePage ? "w-full box-border" : " w-full min-h-screen bg-[#f8f9fa] box-border"}>
            <section className={isSinglePage ? "py-8 sm:py-12 bg-white text-center box-border px-4 sm:px-6 lg:px-8" : "services-grid-section px-4 sm:px-6 lg:px-8"}>
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="flex flex-col items-center mb-4 md:mb-8">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#ff7f32] bg-orange-50 border border-orange-100 mb-3 shadow-sm">
                            Our Expertise
                        </span>
                        <h1 className="text-2xl md:text-4xl font-extrabold text-[#0d1b2a] tracking-tight leading-tight max-w-2xl font-sans uppercase">
                            Comprehensive Enterprise Solutions
                        </h1>
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
                            <motion.div
                                className="bg-white hover:bg-slate-50/50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-md hover:border-orange-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-default"
                                key={service.id}
                                variants={cardVariants}
                            >
                                <div>
                                    {/* Icon */}
                                    <span className="inline-flex p-3 rounded-xl bg-orange-50 text-[#ff7f32] group-hover:bg-[#ff7f32] group-hover:text-white transition-colors duration-300 mb-5 shadow-sm border border-orange-100/50">
                                        {service.icon}
                                    </span>

                                    {/* Title & Summary */}
                                    <h3 className="text-base sm:text-lg font-black text-[#0d1b2a] mb-3 group-hover:text-[#ff7f32] transition-colors leading-tight font-sans uppercase tracking-wide">
                                        {service.title}
                                    </h3>
                                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                                        {service.summary}
                                    </p>

                                    {/* Quick Bullets */}
                                    <div className="flex flex-col gap-2.5 mb-8 border-t border-slate-200 pt-5">
                                        {service.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex gap-2 items-start">
                                                <span className="text-[#ff7f32] mt-0.5 text-[10px]">
                                                    <FaCheck />
                                                </span>
                                                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Explore Link */}
                                <Link
                                    to={service.path}
                                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#ff7f32] hover:text-[#e96e25] transition-colors self-start cursor-pointer font-sans"
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
