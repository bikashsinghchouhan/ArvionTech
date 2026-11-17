import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRight, FaCalendarAlt, FaUserTie, FaBolt, FaShieldAlt,
  FaHeadset, FaPhoneAlt, FaCheckCircle, FaClock,
  FaBuilding, FaMapMarkedAlt, FaFileInvoice, FaLock, FaExchangeAlt
} from 'react-icons/fa';

import {
  Factory, Laptop, GraduationCap, Hospital, Store, Building2, Building,
  Users, CalendarDays, ShieldCheck, FileText, Network, BarChart3,
  Calculator, ClipboardCheck, Stamp, ReceiptIndianRupee, Landmark, ChevronRight,
} from 'lucide-react';

// Testimonials hidden for now (kept for future use): uncomment this import and the <TestimonialSection /> below to bring them back.
// import TestimonialSection from '../components/TestimonialSection';
import SecurityHighlights from '../components/SecurityHighlights';
import FaqSection from '../components/FaqSection';
import RelatedServices from '../components/RelatedServices';
import { ComplianceGrid, HrRecordsShowcase } from '../components/payroll/PayrollSections';
import heroIllustration from '../assets/service-heroes/payroll.webp';
import modEmployee from '../assets/payroll-modules/employee-payroll.webp';
import modProcessing from '../assets/payroll-modules/monthly-processing.webp';
import modCompliance from '../assets/payroll-modules/statutory-compliance.webp';
import modPayslip from '../assets/payroll-modules/payslip-services.webp';
import modLifecycle from '../assets/payroll-modules/lifecycle.webp';
import modReports from '../assets/payroll-modules/reports-mis.webp';
import Eyebrow from '../components/ui/Eyebrow';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

// "Coverage Includes": everything handled in a monthly payroll cycle, shown as a two-column checklist
const coverageItems = [
  'Salary Structure & Component Setup',
  'Attendance, Leave & LOP Calculation',
  'Arrear, Recovery & Revisions',
  'Bonus, Incentive & Reimbursements',
  'Full & Final Settlement',
  'PF, ESI, PT, LWF & TDS Compliance',
  'Income Tax Declaration & Form 16',
  'Payroll Reconciliation & Audit Support',
  'Payroll Registers & Statutory Reports',
  'Employee Helpdesk & Query Resolution',
];

// "Who Can Use Our Service?": each industry with the payroll need we solve for it
const industries = [
  { Icon: Factory, name: 'Manufacturing', desc: 'Shift wages, overtime, contract labour and factory compliance (PF, ESI, LWF) calculated accurately every month.', tone: 'bg-orange-50 text-[#e8730c] ring-orange-100' },
  { Icon: Laptop, name: 'IT & Software', desc: 'Flexible CTC structures, variable pay, flexi benefits and investment declarations for TDS handled end to end.', tone: 'bg-blue-50 text-[#1d6ff2] ring-blue-100' },
  { Icon: GraduationCap, name: 'Educational Institutions', desc: 'Payroll for teaching and non-teaching staff, grade-wise pay scales, arrears and contract staff.', tone: 'bg-violet-50 text-violet-600 ring-violet-100' },
  { Icon: Hospital, name: 'Healthcare & Hospitals', desc: 'Rotating shifts, night and on-call allowances for doctors, nurses and support staff.', tone: 'bg-rose-50 text-rose-600 ring-rose-100' },
  { Icon: Store, name: 'Retail & Services', desc: 'Staff across many outlets and states, frequent joiners and exits, sales incentives and state-wise PT.', tone: 'bg-amber-50 text-amber-600 ring-amber-100' },
  { Icon: Building2, name: 'SMEs & Startups', desc: 'Compliant payroll from your first hire, without building an in-house payroll team.', tone: 'bg-emerald-50 text-emerald-600 ring-emerald-100' },
  { Icon: Building, name: 'Corporate Organisations', desc: 'Multi-entity, multi-state payroll with approvals, audit-ready registers and management reports.', tone: 'bg-sky-50 text-sky-600 ring-sky-100' },
];

const PayrollPage = () => {
  // "Our End-to-End Payroll Service Modules": six modules, each with four inclusions
  const serviceModules = [
    {
      Icon: Users, title: 'Employee Payroll Management', tone: 'bg-blue-600', image: modEmployee,
      points: ['Employee master creation and maintenance', 'Salary structure, CTC and component setup', 'New joining, updates and exits', 'Salary revisions and history management'],
    },
    {
      Icon: CalendarDays, title: 'Monthly Payroll Processing', tone: 'bg-emerald-600', image: modProcessing,
      points: ['Monthly salary calculation and processing', 'Attendance, leave, overtime and LOP calculation', 'Incentives, bonus, arrears and recovery', 'Full & final settlement on exit'],
    },
    {
      Icon: ShieldCheck, title: 'Statutory Compliance', tone: 'bg-violet-600', image: modCompliance,
      points: ['PF, ESI, PT, LWF and other applicable compliance', 'TDS on salary and income tax compliance', 'Income tax declarations, investment proofs and Form 16', 'Preparation of statutory returns and filing support'],
    },
    {
      Icon: FileText, title: 'Payslip & Employee Services', tone: 'bg-[#FF7A00]', image: modPayslip,
      points: ['Monthly payslip generation and distribution', 'Form 16 and annual salary statements', 'Reimbursement processing and settlements', 'Employee payroll query and support'],
    },
    {
      Icon: Network, title: 'Employee Lifecycle Management', tone: 'bg-[#1747a6]', image: modLifecycle,
      points: ['End-to-end employee lifecycle support', 'Promotions, transfers and role changes', 'Salary structure and component updates', 'Resignation, exit and full & final settlement'],
    },
    {
      Icon: BarChart3, title: 'Payroll Reports & MIS', tone: 'bg-indigo-600', image: modReports,
      points: ['Monthly salary register and payroll statements', 'Department-wise and employee-wise reports', 'PF, ESI, PT, TDS and statutory reports', 'Payroll cost analysis and management MIS'],
    },
  ];

  // "Our Payroll Process": the 8-step monthly cycle, in order
  const processSteps = [
    { Icon: FileText, title: 'Collect & Validate Employee Data', desc: 'New joiners, exits and employee master data checked before the cycle starts.', tone: 'bg-blue-50 text-blue-600 ring-blue-100' },
    { Icon: CalendarDays, title: 'Receive Attendance & Payroll Inputs', desc: 'Attendance, leave, overtime and one-time variable pay collected securely.', tone: 'bg-emerald-50 text-emerald-600 ring-emerald-100' },
    { Icon: Calculator, title: 'Calculate Salary & Statutory Dues', desc: 'Gross-to-net pay worked out with PF, ESI, PT, LWF and TDS.', tone: 'bg-orange-50 text-[#e8730c] ring-orange-100' },
    { Icon: ClipboardCheck, title: 'Verify & Review Payroll', desc: 'Variance checks and a preview register prepared by our team.', tone: 'bg-violet-50 text-violet-600 ring-violet-100' },
    { Icon: Stamp, title: 'Client Approval', desc: 'Your finance team reviews the register and signs off before payout.', tone: 'bg-rose-50 text-rose-600 ring-rose-100' },
    { Icon: ReceiptIndianRupee, title: 'Generate Payslip & Process Payment', desc: 'Bank transfer files and payslips issued on schedule.', tone: 'bg-green-50 text-green-600 ring-green-100' },
    { Icon: Landmark, title: 'Statutory Filing & Compliance', desc: 'Monthly challans and returns filed by their due dates.', tone: 'bg-sky-50 text-sky-700 ring-sky-100' },
    { Icon: BarChart3, title: 'Deliver Reports & MIS', desc: 'Salary register, statutory reports and MIS shared every month.', tone: 'bg-indigo-50 text-indigo-600 ring-indigo-100' },
  ];

  const faqs = [
    {
      Icon: FaBuilding,
      q: 'What types of businesses can use Arvion Payroll Outsourcing?',
      a: 'We support schools, colleges, educational trusts, startups, SMEs, and enterprise companies across India with custom pay structures and multi-state compliance.'
    },
    {
      Icon: FaMapMarkedAlt,
      q: 'How do you handle multi-state Professional Tax (PT) and regional labor laws?',
      a: 'Our compliance engine is updated regularly with state-specific PT slabs, LWF rates, and local statutory amendments across all Indian states and Union Territories.'
    },
    {
      Icon: FaFileInvoice,
      q: 'Can employees access their payslips and tax computation sheets online?',
      a: 'Yes! Employees receive password-protected digital payslips via email and can view historical payslips, tax sheets, and Form 16 via our self-service portal.'
    },
    {
      Icon: FaLock,
      q: 'How is employee salary and banking data protected?',
      a: 'We enforce enterprise-grade 256-bit SSL encryption, strict role-based access control (RBAC), daily automated backups, and non-disclosure privacy agreements.'
    },
    {
      Icon: FaExchangeAlt,
      q: 'How long does it take to transition our existing payroll to Arvion?',
      a: 'A typical migration takes between 3 to 7 working days, including historical salary data import, employee master setup, and parallel run verification.'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans text-[#0B1B3D] overflow-x-hidden">

      {/* 1. EXACT HERO SECTION MATCHING DESIGN */}
      <section className="relative w-full overflow-hidden lg:min-h-[calc(100svh-38px)] lg:flex lg:flex-col bg-gradient-to-r from-[#eef4ff] via-[#f8fbff] to-white pt-16 border-b border-blue-50">
        {/* Photo: right side on large screens, fading into the background on its left edge */}
        <div aria-hidden="true" className="hidden lg:block absolute top-16 bottom-0 right-0 w-[56%] xl:w-[55%]">
          <img
            src={heroIllustration}
            alt=""
            width="1200"
            height="896"
            fetchPriority="high"
            className="w-full h-full object-cover object-right [mask-image:linear-gradient(to_right,transparent_0%,#000_7%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_7%)]"
          />
        </div>

        {/* Desktop Floating PAYROLL Card on top of the image */}
        <div className="hidden lg:block absolute top-20 right-6 xl:right-12 2xl:right-20 w-[275px] xl:w-[295px] z-20">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md p-3.5 xl:p-4 shadow-2xl shadow-blue-950/25 border border-slate-100 ring-1 ring-slate-900/5">
            {/* Header */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1747a6] via-[#11409d] to-[#0c2f79] px-3.5 py-2 text-white shadow-md">
              <div className="relative z-10 flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 3.34 2 5s4.48 3 10 3 10-1.34 10-3-4.48-3-10-3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3V4c0 1.66-4.48 3-10 3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3V9c0 1.66-4.48 3-10 3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3v-3c0 1.66-4.48 3-10 3z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white font-sans">
                  PAYROLL
                </span>
              </div>
              {/* Orange accent curve */}
              <svg className="absolute bottom-0 right-0 w-16 h-4 pointer-events-none" viewBox="0 0 80 20" fill="none">
                <path d="M0 20 Q 50 18, 80 0 L 80 20 Z" fill="#FF7A00" />
              </svg>
            </div>

            {/* 8 Features List with Green Checkmarks */}
            <ul className="mt-2.5 space-y-1.5">
              {[
                'Payroll Processing',
                'Payslip Generation & Distribution',
                'PF, ESI, PT, TDS & LWF Compliance',
                'Income Tax & Declarations',
                'Reimbursement & Expense Processing',
                'Arrears & Recoveries',
                'MIS & Management Reports',
                'Audit Support & Data Security'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                    <svg className="w-2 h-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-[11px] xl:text-[11px] font-semibold text-[#0B1B3D] leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Soft atmospheric gradient accents */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200/35 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/4 w-[500px] h-60 rounded-full bg-sky-100/40 blur-3xl -translate-y-1/2" />

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 relative z-10 lg:flex-1 lg:flex lg:flex-col">
          <div className="grid lg:grid-cols-2 items-center lg:flex-1">

            {/* Left Content Column */}
            <div className="w-full flex flex-col justify-center items-start text-left pt-5 pb-8 lg:pb-14 min-w-0 lg:pr-6">

              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-5">
                <Link to="/" className="hover:text-[#0B1B3D] transition-colors">Home</Link>
                <span className="text-slate-300">&gt;</span>
                <Link to="/services" className="hover:text-[#0B1B3D] transition-colors">Services</Link>
                <span className="text-slate-300">&gt;</span>
                <span className="font-bold text-[#0B1B3D]">Payroll Outsourcing</span>
              </nav>

              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-800 mb-5"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                Arvion Payroll Outsourcing
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-[37px] font-extrabold text-[#0B1B3D] leading-[1.1] tracking-tight mb-4"
              >
                Payroll <span className="text-[#FF7A00]">Outsourcing</span>
                <span className="sr-only"> Services in Bangalore, India</span>
              </motion.h1>

              {/* Subheading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xl sm:text-2xl font-bold text-[#0B1B3D] mb-4 leading-snug"
              >
                Accurate, Compliant &amp; Hassle-Free Payroll
              </motion.h2>

              {/* Description paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7 font-normal"
              >
                End-to-end payroll processing with statutory compliance, payslip distribution, tax management and detailed reports.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5"
                >
                  <FaCalendarAlt className="text-base" /> Request Demo
                </Link>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B1B3D] border-2 border-[#0B1B3D] font-bold text-sm sm:text-base transition-colors shadow-sm"
                >
                  Our Process <FaArrowRight className="text-xs" />
                </a>
              </motion.div>

              {/* 4 Feature Badges in a Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg mb-8"
              >
                {[
                  { title1: 'Expert', title2: 'Team', icon: <FaUserTie />, bg: 'bg-blue-50', text: 'text-blue-600' },
                  { title1: 'On-Time', title2: 'Delivery', icon: <FaBolt />, bg: 'bg-orange-50', text: 'text-[#FF7A00]' },
                  { title1: 'Data', title2: 'Security', icon: <FaShieldAlt />, bg: 'bg-blue-50', text: 'text-blue-600' },
                  { title1: 'Dedicated', title2: 'Support', icon: <FaHeadset />, bg: 'bg-orange-50', text: 'text-[#FF7A00]' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-3 border border-slate-200/70 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className={`w-9 h-9 rounded-xl ${item.bg} ${item.text} flex items-center justify-center text-sm mb-2`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-[#0B1B3D] leading-tight">
                      {item.title1}<br />{item.title2}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Talk to an Expert Callout */}
              <motion.a
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}
                href="tel:+919535764655"
                className="inline-flex items-center gap-3.5 bg-white border border-slate-200/80 rounded-2xl pl-2.5 pr-6 py-2.5 shadow-sm hover:shadow-md transition-[box-shadow,border-color,background-color,color] hover:border-orange-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FF7A00] text-white flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                  <FaPhoneAlt />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] text-slate-500 font-medium leading-none mb-1">Talk to an expert</span>
                  <span className="block text-sm sm:text-base font-bold text-[#0B1B3D] leading-none">+91 95357 64655</span>
                </div>
              </motion.a>

            </div>

            {/* Photo & Features Card for small screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:hidden pb-8 w-full max-w-lg mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-blue-100 bg-white">
                <img
                  src={heroIllustration}
                  alt="Payroll Outsourcing specialist at desk with laptop"
                  width="1200"
                  height="896"
                  className="w-full h-auto object-cover select-none"
                />
              </div>

              {/* Mobile Features Card */}
              <div className="mt-4 w-full rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 ring-1 ring-slate-900/5">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1747a6] via-[#11409d] to-[#0c2f79] px-3.5 py-2 text-white shadow-md">
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white/15 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 3.34 2 5s4.48 3 10 3 10-1.34 10-3-4.48-3-10-3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3V4c0 1.66-4.48 3-10 3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3V9c0 1.66-4.48 3-10 3zm0 5c-5.52 0-10-1.34-10-3v3c0 1.66 4.48 3 10 3s10-1.34 10-3v-3c0 1.66-4.48 3-10 3z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white font-sans">
                      PAYROLL
                    </span>
                  </div>
                  <svg className="absolute bottom-0 right-0 w-16 h-4 pointer-events-none" viewBox="0 0 80 20" fill="none">
                    <path d="M0 20 Q 50 18, 80 0 L 80 20 Z" fill="#FF7A00" />
                  </svg>
                </div>
                <ul className="mt-2.5 space-y-1.5">
                  {[
                    'Payroll Processing',
                    'Payslip Generation & Distribution',
                    'PF, ESI, PT, TDS & LWF Compliance',
                    'Income Tax & Declarations',
                    'Reimbursement & Expense Processing',
                    'Arrears & Recoveries',
                    'MIS & Management Reports',
                    'Audit Support & Data Security'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                        <svg className="w-2 h-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-[11px] font-semibold text-[#0B1B3D] leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Elegant Bottom Wave swoosh */}
        <div className="w-full overflow-hidden leading-none relative z-10 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,30 C360,60 720,0 1080,40 C1260,60 1380,20 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
            <path d="M0,35 C360,65 720,5 1080,45 C1260,65 1380,25 1440,35" stroke="#FF7A00" strokeWidth="2" opacity="0.35" />
          </svg>
        </div>
      </section>

      {/* 2. DETAILED FEATURES GRID */}
      <section id="features" className="py-6 sm:py-10 px-4 sm:px-6 w-full bg-white">
        <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <Eyebrow className="mb-4">Service Modules</Eyebrow>
          <h2 className="text-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight text-balance mb-4">
            Our End-to-End <span className="text-[#FF7A00]">Payroll Service Modules</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed">
            A complete, integrated payroll outsourcing service that manages the entire employee lifecycle, payroll processing and compliance.
          </p>
        </div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 list-none m-0 p-0"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          {serviceModules.map(({ Icon, title, tone, points, image }) => (
            <motion.li
              key={title}
              variants={fadeUpVariant}
              className="group flex flex-col rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_10px_30px_-24px_rgba(15,42,107,.45)] hover:ring-orange-200 hover:shadow-[0_18px_40px_-24px_rgba(15,42,107,.45)] transition-[box-shadow,border-color,background-color,color] duration-300 overflow-hidden"
            >
              <div className="relative aspect-[523/186] overflow-hidden bg-[#f4f8fe]">
                <img
                  src={image}
                  alt={`${title} – Arvion payroll outsourcing`}
                  loading="lazy"
                  decoding="async"
                  width="523"
                  height="186"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center gap-3.5 px-5 sm:px-6 py-4 bg-gradient-to-r from-[#f4f8fe] to-white border-b border-slate-100">
                <span className={`w-11 h-11 rounded-xl ${tone} text-white flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="w-[22px] h-[22px]" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="text-card-title font-bold text-[#0B1B3D] leading-snug">{title}</h3>
              </div>
              <ul className="px-5 sm:px-6 py-4 sm:py-5 grid gap-2.5 list-none m-0">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm sm:text-[14.5px] text-slate-700 leading-snug">
                    <FaCheckCircle className="mt-0.5 flex-shrink-0 text-emerald-500" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
        </div>
      </section>

      {/* COVERAGE INCLUDES: two-column checklist of everything in the monthly cycle */}
      <section id="coverage" className="py-6 sm:py-10 px-4 sm:px-6 w-full bg-[#f4f8fe] border-y border-blue-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <Eyebrow className="mb-4">End-to-End Payroll</Eyebrow>
            <h2 className="text-heading font-extrabold text-[#0B1B3D] tracking-tight mb-4">
              Coverage <span className="text-[#f2700f]">Includes</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed">
              Every part of your monthly payroll, from salary setup to statutory filing and employee queries.
            </p>
          </div>

          <motion.ul
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            // Column flow from sm: items 1-5 fill the left column, 6-10 the right (same order as the list)
            className="grid sm:grid-cols-2 sm:grid-rows-5 sm:grid-flow-col gap-x-8 gap-y-1 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-[0_12px_32px_-22px_rgba(15,42,107,.35)] p-5 sm:p-8 list-none m-0"
          >
            {coverageItems.map((label) => (
              <motion.li
                key={label}
                variants={fadeUpVariant}
                className="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-b-0 sm:[&:nth-child(5)]:border-b-0"
              >
                <FaCheckCircle className="flex-shrink-0 text-emerald-500 text-lg" aria-hidden="true" />
                <span className="text-[14px] sm:text-base font-semibold text-[#0B1B3D]">{label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* WHO CAN USE OUR SERVICE: industries and the payroll need we solve for each */}
      <section id="industries" className="py-6 sm:py-10 px-4 sm:px-6 w-full bg-white scroll-mt-24">
        {/* Editorial layout, no cards: intro on the left, industries as an open list on the right
            separated by hairlines. The 8th cell is a "don't see yours?" prompt so the grid is even. */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] gap-8 lg:gap-14">
          <div className="lg:sticky lg:top-28 self-start text-center lg:text-left">
            <Eyebrow className="mb-4">Industries We Serve</Eyebrow>
            <h2 className="text-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight text-balance mb-4">
              Who Can Use Our <span className="text-[#FF7A00]">Service?</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Every industry pays its people differently. We handle the payroll rules that matter to yours.
            </p>
            <div aria-hidden="true" className="hidden lg:block mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#ffb36b]" />
          </div>

          <motion.ul
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
            className="grid sm:grid-cols-2 gap-x-10 list-none m-0 p-0 border-t border-slate-200"
          >
            {industries.map(({ Icon, name, desc, tone }) => (
              <motion.li
                key={name}
                variants={fadeUpVariant}
                className="group flex gap-4 py-5 sm:py-6 border-b border-slate-200"
              >
                <span className={`w-11 h-11 rounded-xl ring-1 ${tone} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5`}>
                  <Icon className="w-[22px] h-[22px]" strokeWidth={1.9} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-card-title font-bold text-[#0B1B3D] leading-snug">{name}</h3>
                  <p className="mt-1 text-card-desc text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </motion.li>
            ))}
            <motion.li variants={fadeUpVariant} className="flex items-center py-5 sm:py-6 border-b border-slate-200">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 text-[#1747a6] font-bold focus:outline-none focus-visible:underline"
              >
                <span className="w-11 h-11 rounded-xl border-2 border-dashed border-blue-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#1747a6] transition-colors">
                  <FaArrowRight className="text-sm" aria-hidden="true" />
                </span>
                <span>
                  Don&apos;t see your industry?
                  <span className="block text-sm font-medium text-slate-500 group-hover:text-[#1747a6] transition-colors">Talk to our payroll team</span>
                </span>
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </section>

      {/* 3. OUR PAYROLL PROCESS: 8 steps. One row with arrows on large screens,
          4 + 4 on tablets, a numbered vertical list on phones. */}
      <section id="process" className="py-6 sm:py-10 px-4 sm:px-6 w-full bg-[#f4f8fe] border-y border-blue-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <Eyebrow className="mb-4">Our Payroll Process</Eyebrow>
            <h2 className="text-heading font-extrabold text-[#0B1B3D] tracking-tight leading-tight text-balance mb-4">
              How Arvion Runs Your Payroll, <span className="text-[#FF7A00]">Every Month</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed">
              A transparent 8-step cycle, from employee data to final reports, with your approval before any salary is paid.
            </p>
          </div>

          <motion.ol
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 gap-y-6 sm:gap-y-8 gap-x-4 list-none m-0 p-0"
          >
            {processSteps.map(({ Icon, title, desc, tone }, i) => (
              <motion.li
                key={title}
                variants={fadeUpVariant}
                className="relative flex sm:flex-col items-start sm:items-center gap-4 sm:gap-0 sm:text-center"
              >
                {/* Arrow to the next step (tablet: within each row of 4; desktop: whole row) */}
                {i < processSteps.length - 1 && (
                  <ChevronRight
                    aria-hidden="true"
                    className={`hidden ${i % 4 === 3 ? 'lg:block' : 'sm:block'} absolute top-[22px] -right-[14px] w-5 h-5 text-slate-400`}
                  />
                )}
                <span className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full ring-4 ${tone} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.9} aria-hidden="true" />
                  <span className="absolute -bottom-1.5 -right-1.5 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 sm:-bottom-3 w-6 h-6 rounded-full bg-[#1747a6] text-white text-[11.5px] font-extrabold flex items-center justify-center ring-2 ring-[#f4f8fe]">
                    {i + 1}
                  </span>
                </span>
                <div className="min-w-0 sm:mt-5">
                  <h3 className="text-[14px] sm:text-sm font-bold text-[#0B1B3D] leading-snug">{title}</h3>
                  <p className="mt-1 text-[12px] sm:text-xs text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* STATUTORY COMPLIANCE: PT, labour laws, LWF, PF, ESI */}
      <ComplianceGrid />

      {/* HR RECORDS & DOCUMENTS (accordion, visual on the right) */}
      <HrRecordsShowcase />

      {/* SECURITY & CLOUD: payroll data protection */}
      <SecurityHighlights
        id="security"
        variant="light"
        tint
        title="Your Payroll Data, Secured"
        desc="Salary and employee records are confidential. Here is how we keep them safe."
        items={[
          { title: 'Secure Employee & Salary Data', desc: 'Payroll records kept private and protected.' },
          { title: 'Role-Based Permissions', desc: 'Only authorised people see salary details.' },
          { title: 'Data Backups', desc: 'Regular backups so no payroll record is lost.' },
          { title: 'Cloud Accessibility', desc: 'Registers, payslips and reports on any device.' },
          { title: 'Secure Authentication', desc: 'Protected logins for your HR and finance team.' },
        ]}
      />

      {/* 4. FAQ (shared design: illustration left, accordion right) */}
      <FaqSection
        desc="Everything you need to know about outsourcing your payroll to Arvion."
        items={faqs}
      />

      <RelatedServices current="/services/outsourcing" />

      {/* 5. TESTIMONIALS */}
      {/* <TestimonialSection /> (hidden for now, kept for future use) */}

      {/* 6. FINAL CTA BANNER */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 w-full bg-gradient-to-br from-[#0B1B3D] via-[#102a63] to-[#1A4B8F] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-heading font-extrabold mb-6 tracking-tight">
            Ready for Effortless, <span className="text-[#ffb366]">100% Compliant Payroll?</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-100/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation with our payroll experts to explore how Arvion can simplify your salary operations, ensure compliance, and save your team valuable hours every month.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold text-base shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              <FaCalendarAlt /> Request a Free Demo
            </Link>
            <a
              href="tel:+919535764655"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all"
            >
              <FaPhoneAlt /> Call +91 95357 64655
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PayrollPage;
