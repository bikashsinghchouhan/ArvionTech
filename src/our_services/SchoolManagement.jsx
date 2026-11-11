import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCheckCircle, FaTimesCircle, FaMobileAlt, FaMoneyBillWave, FaEnvelope, FaMapMarkerAlt,
  FaPhoneAlt, FaPlus, FaChartLine, FaClipboardCheck, FaBookOpen, FaBusAlt, FaBullhorn, FaUserCheck,
  FaChevronDown, FaPlayCircle, FaSearch, FaLock, FaUsers, FaServer, FaCodeBranch, FaCube, FaExpandArrowsAlt, FaSitemap,
  FaShieldAlt, FaSlidersH, FaHeadset, FaDesktop, FaSyncAlt, FaCalendarAlt, FaBuilding, FaChartBar, FaCrown, FaArrowRight,
  FaTimes, FaUserGraduate, FaUserTie, FaSignOutAlt, FaFolderOpen, FaThLarge, FaBook, FaFileInvoiceDollar, FaBoxes,
  FaIdBadge, FaClipboardList, FaCopy, FaLayerGroup, FaUserFriends, FaWallet, FaUserPlus, FaFileAlt, FaBell, FaReceipt, FaHourglassHalf, FaVolumeMute, FaUnlock, FaColumns
} from 'react-icons/fa';
import TestimonialSection from '../components/TestimonialSection';
import schoolErpMobile from '../assets/school-erp-mobile.webp';

// --- CONFIGURATION ---
import { pageConfig } from '../configurations/SchoolManagementConfig';
import { schoolFaqs } from '../configurations/SchoolFaqs';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const reveal = { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.15 } };

// Shared building blocks so every section uses the same header, card and button styles
const BTN_PRIMARY = "inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-lg bg-[#FF8000] hover:bg-[#E67300] text-white font-semibold text-sm sm:text-[15px] shadow-md shadow-orange-500/25 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300";
const BTN_SECONDARY = "inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-[#0B1B3D] font-semibold text-sm sm:text-[15px] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200";
const CARD = "bg-white border border-slate-200 rounded-xl sm:rounded-2xl";

// Section headings are centered across the whole page
const SectionHeader = ({ eyebrow, title, desc, center = true, className = "mb-7 sm:mb-8 md:mb-10" }) => (
  <motion.div {...reveal} variants={fadeUpVariant} className={`grid gap-2.5 sm:gap-3 max-w-2xl ${className} ${center ? 'mx-auto text-center justify-items-center' : ''}`}>
    {eyebrow && (
      <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#E67300]">
        <span className="w-5 h-0.5 rounded bg-[#FF8000]" />{eyebrow}
      </span>
    )}
    <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-[#0B1B3D] leading-tight tracking-tight text-balance">{title}</h2>
    {desc && <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed">{desc}</p>}
  </motion.div>
);

const IconBox = ({ children, tone = "orange", size = "md" }) => {
  const tones = {
    orange: "bg-orange-50 text-[#E67300]",
    blue: "bg-blue-50 text-blue-600",
    teal: "bg-teal-50 text-teal-700",
    violet: "bg-violet-50 text-violet-600",
    green: "bg-emerald-50 text-emerald-600",
    slate: "bg-slate-100 text-slate-500",
  };
  const sizes = { sm: "w-9 h-9 text-base rounded-lg", md: "w-10 h-10 sm:w-11 sm:h-11 text-lg sm:text-xl rounded-lg sm:rounded-xl" };
  return <div className={`flex-shrink-0 flex items-center justify-center ${tones[tone]} ${sizes[size]}`}>{children}</div>;
};

// Icons for the feature suite, matched by module title
const featureIcons = {
  "master setup": <FaSlidersH />, "student management": <FaUserGraduate />, "teacher management": <FaUserTie />,
  "staff management": <FaIdBadge />, "time table setup": <FaCalendarAlt />, "user management": <FaUsers />,
  "notifications": <FaBullhorn />, "holiday": <FaCalendarAlt />, "promotion": <FaUserGraduate />, "exit": <FaSignOutAlt />,
  "reports - basic level": <FaChartBar />, "doc management - basic": <FaFolderOpen />, "academic year creation": <FaCalendarAlt />,
  "data storage for future years' reference": <FaServer />, "fee management": <FaMoneyBillWave />, "access restriction": <FaLock />,
  "dashboard": <FaThLarge />, "attendance - manual marking": <FaClipboardCheck />, "examination & marks allocation": <FaClipboardList />,
  "operational logs": <FaShieldAlt />, "syllabus management": <FaBook />, "reports & analytics": <FaChartLine />,
  "reimbursement": <FaFileInvoiceDollar />, "income & expenses": <FaMoneyBillWave />, "library management": <FaBook />,
  "facial recognition attendance": <FaUserCheck />, "transport": <FaBusAlt />, "leave management": <FaCalendarAlt />,
  "self check-in & check-out": <FaMobileAlt />, "field configuration": <FaSlidersH />, "assignment management": <FaBookOpen />,
  "inventory management": <FaBoxes />, "customizable dashboard": <FaThLarge />,
};

const categoryTone = {
  "Core Administration": "blue",
  "Academics & Operations": "teal",
  "Advanced Enterprise Modules": "violet",
};

const planStyle = {
  Basic: { icon: <FaBuilding />, tone: "blue" },
  Standard: { icon: <FaChartBar />, tone: "violet" },
  Premium: { icon: <FaCrown />, tone: "orange" },
};

// Features shown first on a Summary card (the rest are in Full list). Names must match the plan config.
const planPreviewOrder = {
  Premium: [
    "Library Management",
    "Facial recognition attendance",
    "Transport",
    "Leave Management",
    "Self check-in & check-out",
    "Biometric intergartion",
    "Teacher payroll Processing",
  ],
};

// Before / After section: each everyday problem and what the ERP replaces it with
const beforeAfterRows = [
  { problem: "Manual student records", problemDesc: "Files sit in cabinets and spreadsheets. Finding one child's full history takes hours.", problemIcon: <FaFolderOpen />,
    solution: "Centralized student database", solutionDesc: "One profile per student from admission to transfer certificate: guardians, documents, class history and fees.", solutionIcon: <FaUsers /> },
  { problem: "Attendance errors", problemDesc: "Paper registers, proxy marking and monthly totals worked out by hand.", problemIcon: <FaClipboardList />,
    solution: "Digital / AI attendance", solutionDesc: "Teachers mark a class in seconds on web or phone. Facial recognition removes proxy attendance.", solutionIcon: <FaUserCheck /> },
  { problem: "Fee tracking difficulty", problemDesc: "Handwritten receipts, missed dues and long evenings reconciling the cash book.", problemIcon: <FaReceipt />,
    solution: "Automated fee management", solutionDesc: "Set fee structures, instalments and concessions once. Receipts, late fines and reminders run on their own.", solutionIcon: <FaWallet /> },
  { problem: "Delayed results", problemDesc: "Marks are collected on paper and copied into report cards by hand, which takes weeks.", problemIcon: <FaHourglassHalf />,
    solution: "Digital examination system", solutionDesc: "Teachers enter marks once. Grades, report cards and merit lists are generated automatically.", solutionIcon: <FaFileAlt /> },
  { problem: "Poor communication", problemDesc: "Circulars get lost in school diaries and scattered WhatsApp groups. Parents miss key dates.", problemIcon: <FaVolumeMute />,
    solution: "Notifications and announcements", solutionDesc: "Send circulars, holiday notices, alerts and fee reminders by SMS, email and app notification.", solutionIcon: <FaBell /> },
  { problem: "Permission issues", problemDesc: "Either everyone can see everything, or nobody can find what they need.", problemIcon: <FaUnlock />,
    solution: "Role-Based Access Control", solutionDesc: "Each person sees only what their role allows: principal, teacher, accountant, parent or student.", solutionIcon: <FaShieldAlt /> },
  { problem: "Multiple branches", problemDesc: "Each campus keeps its own records, so management has no combined view.", problemIcon: <FaColumns />,
    solution: "Centralized multi-school control", solutionDesc: "Run every branch from one dashboard while each campus's data stays separate.", solutionIcon: <FaSitemap /> },
];

const norm = (s) => s.trim().toLowerCase();

const SchoolManagement = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [featureSearch, setFeatureSearch] = useState("");
  const [activeFaq, setActiveFaq] = useState(0);
  const [planView, setPlanView] = useState("summary");
  const [emailCopied, setEmailCopied] = useState(false);
  const [showAfter, setShowAfter] = useState(true);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  const featuresEndRef = useRef(null);
  const featuresTopRef = useRef(null);
  const plansViewRef = useRef(null);

  // Switch plan view and bring the plans back into view (used by the "N more" links)
  const showPlanView = (view) => {
    setPlanView(view);
    setTimeout(() => plansViewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 10);
  };

  const toggleFeature = (title) => {
    setActiveFeature(activeFeature === title ? null : title);
  };

  const handleToggleFeatures = () => {
    if (showAllFeatures) {
      // When collapsing, bring the section top back into view
      setTimeout(() => {
        featuresTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 10);
    }
    setShowAllFeatures(!showAllFeatures);
  };

  const copyEmail = () => {
    const email = pageConfig.contact.email;
    navigator.clipboard?.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }).catch(() => {});
  };

  const categories = [
    { label: "All modules", value: "All", count: pageConfig.featureSuite.length },
    { label: "Core Administration", value: "Core Administration", count: pageConfig.featureSuite.filter(f => f.category === "Core Administration").length },
    { label: "Academics & Operations", value: "Academics & Operations", count: pageConfig.featureSuite.filter(f => f.category === "Academics & Operations").length },
    { label: "Advanced Modules", value: "Advanced Enterprise Modules", count: pageConfig.featureSuite.filter(f => f.category === "Advanced Enterprise Modules").length }
  ];

  const filteredFeatures = pageConfig.featureSuite.filter((feature) => {
    const matchesCategory = selectedCategory === "All" || feature.category === selectedCategory;
    const matchesSearch = feature.title.toLowerCase().includes(featureSearch.toLowerCase()) ||
                          feature.desc.toLowerCase().includes(featureSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isFiltering = featureSearch.trim() !== "" || selectedCategory !== "All";
  const displayedFeatures = (showAllFeatures || isFiltering)
    ? filteredFeatures
    : filteredFeatures.slice(0, 8);

  // Plans are cumulative: each card lists only what it adds over the plan before it
  const plansWithAdditions = pageConfig.plans.map((plan, i) => {
    const prev = i > 0 ? pageConfig.plans[i - 1].features.included.map(norm) : [];
    const added = plan.features.included.filter(f => !prev.includes(norm(f)));
    return { ...plan, added, prevName: i > 0 ? pageConfig.plans[i - 1].name : null };
  });

  // Comparison rows grouped by the plan that first includes them
  const comparisonGroups = plansWithAdditions.map((plan, i) => ({
    label: i === 0 ? `Included in ${plan.name}` : `Added in ${plan.name}`,
    rows: plan.added.map(f => f.trim()),
  })).filter(g => g.rows.length > 0);

  return (
    <div className="bg-slate-50 min-h-screen font-sans w-full overflow-x-clip text-[#0B1B3D]">

      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-white to-slate-50/60 pt-[78px] sm:pt-[84px] lg:pt-[88px] pb-14 sm:pb-16 lg:pb-20 border-b border-slate-200 overflow-hidden">
        {/* Decorative background: soft orange glow behind the dashboard, dot grid, small accent circle */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,#ffe9d6_0%,transparent_70%)]" />
          <div className="hidden lg:block absolute top-[22%] right-[30%] w-80 h-80 rounded-full bg-orange-100/70 blur-2xl" />
          <div className="hidden lg:block absolute bottom-[12%] right-[2%] w-56 h-56 rounded-full bg-orange-100/60 blur-2xl" />
          <div className="hidden lg:block absolute top-[30%] right-[44%] w-7 h-7 rounded-full bg-orange-200/80" />
          <div className="hidden sm:block absolute top-[18%] right-[3%] w-28 h-24 opacity-70 bg-[radial-gradient(#FF8000_1.5px,transparent_1.5px)] [background-size:18px_18px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb + in-page navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 lg:mb-10">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm sm:text-[15px] text-slate-500">
              <Link to="/" className="hover:text-[#0B1B3D] focus:outline-none focus-visible:underline">Home</Link>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <Link to="/services" className="hover:text-[#0B1B3D] focus:outline-none focus-visible:underline">Services</Link>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="font-semibold text-[#0B1B3D]" aria-current="page">School Management</span>
            </nav>
            <nav aria-label="On this page" className="hidden md:flex items-center gap-1 text-[15px] font-medium text-slate-600">
              {[["#features", "Modules"], ["#plans", "Plans"], ["#process", "Process"], ["#faq", "FAQ"]].map(([href, label]) => (
                <a key={href} href={href} className="px-3.5 py-1.5 rounded-md hover:bg-white hover:text-[#0B1B3D] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">{label}</a>
              ))}
            </nav>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 sm:gap-12 lg:gap-10 xl:gap-14 items-center">
            {/* Left Content */}
            <div className="grid gap-4 sm:gap-6 min-w-0">
              <motion.span
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 w-max max-w-full bg-orange-50 border border-orange-100 text-[#0B1B3D] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
              >
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500" /> School Management Services
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
                className="text-[clamp(24px,8.1vw,34px)] sm:text-[52px] lg:text-[46px] xl:text-[58px] font-extrabold text-[#0B1B3D] leading-[1.12] sm:leading-[1.04] tracking-[-0.025em] sm:tracking-[-0.03em]"
              >
                <span className="whitespace-nowrap">Smarter<br className="hidden sm:block" /> Management.</span><br />
                <span className="text-[#FF8000] whitespace-nowrap">
                  Stronger{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    Institution.
                    {/* hand-drawn underline */}
                    <svg aria-hidden="true" viewBox="0 0 220 14" preserveAspectRatio="none" className="absolute left-[6%] -bottom-1.5 sm:-bottom-3 w-[92%] h-2 sm:h-3.5 text-[#FF8000]">
                      <path d="M3 10 C 60 3, 150 2, 217 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-1 sm:mt-2 text-[15px] sm:text-lg lg:text-[19px] text-slate-600 max-w-xl leading-relaxed"
              >
                End-to-end school management solutions to help you save time, ensure compliance, and keep your students and staff happy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
                className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 mt-1"
              >
                <Link to="/contact" className={`${BTN_PRIMARY} !h-10 sm:!h-12 lg:!h-[52px] !px-3 sm:!px-7 !text-[13px] sm:!text-[15px] rounded-xl shadow-md shadow-orange-500/25`}>
                  Get Started <FaArrowRight className="text-xs sm:text-sm" />
                </Link>
                <a href="#process" className={`${BTN_SECONDARY} !h-10 sm:!h-12 lg:!h-[52px] !px-3 sm:!px-7 !text-[13px] sm:!text-[15px] rounded-xl shadow-sm`}>
                  <FaPlayCircle className="text-blue-600 text-base sm:text-lg" /> How It Works
                </a>
              </motion.div>

            </div>

            {/* Right: sample admin dashboard (illustrative figures) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="min-w-0"
              role="img"
              aria-label="Sample Arvion School ERP admin dashboard showing attendance, fee collection and pending tasks"
            >
              <div className="bg-white/95 backdrop-blur border border-slate-200/80 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-[0_2px_4px_rgba(11,27,61,.04),0_30px_60px_-25px_rgba(11,27,61,.28)] overflow-hidden">
                {/* Window bar */}
                <div className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100">
                  <div className="hidden min-[400px]:flex gap-1.5 sm:gap-2" aria-hidden="true">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <span className="text-[13px] sm:text-[15px] font-semibold text-[#0B1B3D] min-[400px]:ml-2">Admin Dashboard</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] sm:text-[13px] text-[#0B1B3D] bg-white border border-slate-200 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                    AY 2026–27 <span className="text-slate-300">·</span> Term 1 <FaChevronDown className="text-[9px] sm:text-[10px] text-slate-500" />
                  </span>
                </div>

                <div className="p-3 sm:p-5 grid gap-3 sm:gap-4">
                  {/* KPI cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {[
                      { label: "Today's Attendance", value: "94.2%", note: "1.8% vs last week", icon: <FaUserFriends />, tone: "bg-pink-50 text-pink-500" },
                      { label: "Fees Collected", value: "₹18.4L", note: "72% of term target", icon: <FaWallet />, tone: "bg-orange-50 text-[#FF8000]" },
                      { label: "New Admissions", value: "126", note: "14 this month", icon: <FaUserPlus />, tone: "bg-blue-50 text-blue-600" },
                    ].map((k, i) => (
                      <div key={k.label} className={`border border-slate-200/80 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 flex gap-2.5 min-w-0 ${i === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                        <span className={`hidden min-[400px]:flex w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl items-center justify-center flex-shrink-0 text-sm sm:text-base ${k.tone}`}>{k.icon}</span>
                        <div className="grid gap-0.5 min-w-0">
                          <small className="text-[11px] sm:text-xs text-slate-500 truncate">{k.label}</small>
                          <strong className="text-lg sm:text-[22px] font-extrabold leading-tight tabular-nums text-[#0B1B3D]">{k.value}</strong>
                          <span className="text-[11px] font-semibold text-emerald-600 truncate">▲ {k.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-[1.15fr_1fr] gap-2.5 sm:gap-3">
                    {/* Attendance chart */}
                    <div className="border border-slate-200/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 min-w-0">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[13px] sm:text-[15px] font-bold text-[#0B1B3D]">Attendance by Class</span>
                        <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded-md">Today <FaChevronDown className="text-[8px]" /></span>
                      </div>
                      <div className="flex items-end gap-1.5 sm:gap-2 h-[96px] sm:h-[120px]">
                        {[78, 86, 100, 86, 86, 91, 90].map((h, i) => (
                          <span key={i} className={`flex-1 rounded-md ${i === 2 ? 'bg-blue-600' : 'bg-blue-100'}`} style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <div className="flex gap-1.5 sm:gap-2 mt-2">
                        {["VI", "VII", "VIII", "IX", "X", "XI", "XII"].map(c => <span key={c} className="flex-1 text-center text-[10px] sm:text-xs text-slate-600">{c}</span>)}
                      </div>
                    </div>

                    {/* Pending tasks */}
                    <div className="border border-slate-200/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 min-w-0">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[13px] sm:text-[15px] font-bold text-[#0B1B3D]">Pending Tasks</span>
                        <span className="w-6 h-6 rounded-md bg-orange-50 text-[#FF8000] text-xs font-bold flex items-center justify-center">4</span>
                      </div>
                      <div className="grid gap-2.5 sm:gap-3 text-xs sm:text-[13px] text-[#0B1B3D]">
                        {[
                          { task: "Term 1 report cards", tag: "Exam", cls: "bg-blue-50 text-blue-600", icon: <FaFileAlt /> },
                          { task: "42 fee reminders", tag: "Due", cls: "bg-orange-50 text-[#FF8000]", icon: <FaBell /> },
                          { task: "Bus route 4 updated", tag: "Done", cls: "bg-emerald-50 text-emerald-600", icon: <FaBusAlt /> },
                          { task: "PTM circular sent", tag: "Done", cls: "bg-emerald-50 text-emerald-600", icon: <FaEnvelope /> },
                        ].map(t => (
                          <div key={t.task} className="flex items-center gap-2.5 min-w-0">
                            <span className="text-blue-600/80 text-[13px] flex-shrink-0">{t.icon}</span>
                            <span className="truncate">{t.task}</span>
                            <span className={`ml-auto text-[11px] font-semibold px-2 py-0.5 rounded-md whitespace-nowrap ${t.cls}`}>{t.tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Assurance badges: one row under both hero columns */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 sm:mt-10 lg:mt-12 pt-5 sm:pt-6 border-t border-slate-200 grid grid-cols-2 sm:flex sm:flex-wrap gap-y-3 text-[13px] sm:text-sm lg:text-[15px] font-medium text-[#0B1B3D]"
          >
            {[
              [<FaShieldAlt />, "100% Compliance"],
              [<FaLayerGroup />, "Data Security"],
              [<FaChartBar />, "Scalable Solutions"],
              [<FaHeadset />, "Expert Support"],
            ].map(([icon, label], i) => (
              <li key={label} className={`flex items-center gap-2.5 sm:pr-4 sm:mr-4 ${i < 3 ? 'sm:border-r sm:border-slate-200' : ''}`}>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-50 text-[#FF8000] flex items-center justify-center text-sm sm:text-base flex-shrink-0">{icon}</span>
                {label}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Proof strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 -mt-8 sm:-mt-10">
        <div className={`${CARD} grid grid-cols-2 md:grid-cols-4 shadow-sm sm:shadow-[0_1px_2px_rgba(11,27,61,.06),0_12px_28px_-16px_rgba(11,27,61,.25)] overflow-hidden`}>
          {[["50+", "Active schools"], ["40K+", "Students managed"], [`${pageConfig.featureSuite.length}+`, "Modules"], ["100%", "On-time compliance"]].map(([value, label], i) => (
            <div key={label} className={`px-4 py-4 sm:px-5 sm:py-5 grid gap-0.5 border-slate-200 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''}`}>
              <strong className="text-2xl sm:text-[28px] lg:text-3xl font-extrabold leading-tight tabular-nums">{value}</strong>
              <span className="text-[13px] sm:text-sm text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Why Arvion"
            title="Why Choose Our School ERP?"
            desc="We go beyond basic administration. Our platform is a comprehensive ecosystem designed to transform how your educational institution operates, empowering educators, engaging parents, and driving student success."
          />
          <motion.div variants={staggerContainer} {...reveal} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden">
            {[
              { title: "100% Cloud-Based & Secure", desc: "Access your school's data securely from anywhere. Our cloud infrastructure features enterprise-grade encryption and automated backups to ensure complete data protection.", icon: <FaServer /> },
              { title: "Intuitive & User-Friendly", desc: "Designed for effortless navigation. Teachers, admins, and parents can use the system immediately, requiring zero technical training or complex onboarding.", icon: <FaDesktop /> },
              { title: "Highly Customizable & Scalable", desc: "From small schools to large university groups, our modular architecture adapts and scales seamlessly as your educational institution expands over time.", icon: <FaExpandArrowsAlt /> },
              { title: "Real-Time Analytics & Reporting", desc: "Empower decision-making with instant, actionable insights. Monitor student performance, financial health, and staff productivity through an advanced dashboard.", icon: <FaChartLine /> },
              { title: "Dedicated 24/7 Support", desc: "Experience worry-free operations with our dedicated success team. We provide full implementation training and reliable round-the-clock technical assistance.", icon: <FaHeadset /> },
              { title: "Seamless Integration", desc: "Connect seamlessly with your existing tools. Our API-first platform integrates effortlessly with biometric devices, accounting software, and payment gateways.", icon: <FaCodeBranch /> }
            ].map((feature) => (
              <motion.article key={feature.title} variants={fadeUpVariant} className="bg-white p-5 sm:p-6 lg:p-7 grid gap-2.5 sm:gap-3 content-start hover:bg-slate-50 transition-colors">
                <IconBox>{feature.icon}</IconBox>
                <h3 className="text-base sm:text-lg font-bold">{feature.title}</h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">{feature.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BEFORE / AFTER: one switch flips all items between "Without ERP" and "With Arvion" */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 w-full bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Before and after"
            title="See the Difference in One Click"
            desc="Switch between a school running on paper and one running on Arvion School ERP."
          />

          <div className="flex justify-center mb-6 sm:mb-8">
            <div role="group" aria-label="Compare without and with the ERP" className="grid grid-cols-2 w-full max-w-[300px] sm:max-w-md bg-slate-100 border border-slate-200 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl">
              <button
                type="button"
                aria-pressed={!showAfter}
                onClick={() => setShowAfter(false)}
                className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 min-h-[36px] sm:min-h-[44px] px-2 sm:px-3 rounded-lg sm:rounded-xl text-[13px] sm:text-[15px] font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                  !showAfter ? 'bg-white text-red-500 shadow-sm' : 'text-slate-500 hover:text-[#0B1B3D]'
                }`}
              >
                <FaTimesCircle /> Without ERP
              </button>
              <button
                type="button"
                aria-pressed={showAfter}
                onClick={() => setShowAfter(true)}
                className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 min-h-[36px] sm:min-h-[44px] px-2 sm:px-3 rounded-lg sm:rounded-xl text-[13px] sm:text-[15px] font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
                  showAfter ? 'bg-[#FF8000] text-white shadow-md shadow-orange-500/30' : 'text-slate-500 hover:text-[#0B1B3D]'
                }`}
              >
                <FaCheckCircle /> With Arvion
              </button>
            </div>
          </div>

          <motion.div
            key={showAfter ? 'after' : 'before'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto"
            aria-live="polite"
          >
            {beforeAfterRows.map((row, idx) => (
              <div
                key={row.problem}
                className={`flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border transition-colors ${
                  idx === beforeAfterRows.length - 1 && beforeAfterRows.length % 2 === 1 ? 'md:col-span-2 md:w-[calc(50%-0.5rem)] md:justify-self-center' : ''
                } ${showAfter ? 'bg-white border-orange-200' : 'bg-slate-50/70 border-dashed border-slate-300'}`}
              >
                <span className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 text-base sm:text-lg ${
                  showAfter ? 'bg-orange-50 text-[#E67300]' : 'bg-red-50 text-red-500'
                }`}>
                  {showAfter ? row.solutionIcon : row.problemIcon}
                </span>
                <div className="min-w-0">
                  <h3 className={`font-bold text-[14.5px] sm:text-base leading-snug ${showAfter ? 'text-[#0B1B3D]' : 'text-slate-600'}`}>
                    {showAfter ? row.solution : row.problem}
                  </h3>
                  <p className="mt-1 text-[13px] sm:text-sm text-slate-600 leading-relaxed">
                    {showAfter ? row.solutionDesc : row.problemDesc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <p className={`mt-5 sm:mt-6 flex items-center justify-center gap-2 text-[13px] sm:text-[15px] text-center ${showAfter ? 'text-emerald-600' : 'text-red-500'}`}>
            {showAfter ? <FaCheckCircle className="flex-shrink-0" /> : <FaTimesCircle className="flex-shrink-0" />}
            <span className="text-slate-600">
              {showAfter
                ? <><b className="text-[#0B1B3D]">{beforeAfterRows.length} of {beforeAfterRows.length}</b> problems solved in one platform</>
                : <><b className="text-[#0B1B3D]">{beforeAfterRows.length}</b> separate problems, handled by hand today</>}
            </span>
          </p>
        </div>
      </section>

      {/* FEATURES OVERVIEW */}
      <section id="features" ref={featuresTopRef} className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 w-full scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={`${pageConfig.featureSuite.length}+ Powerful Modules`}
            title="Comprehensive Feature Suite"
            desc="Explore every module and tool designed to automate operations, boost academic outcomes, and streamline your institution."
          />

          {/* Category filter & search */}
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between mb-4">
            <div role="group" aria-label="Filter modules by category" className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5 bg-slate-100 border border-slate-200 p-1.5 rounded-xl">
              {categories.map((cat) => {
                const active = selectedCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setSelectedCategory(cat.value);
                      setShowAllFeatures(false);
                    }}
                    className={`inline-flex items-center justify-between sm:justify-start gap-2 min-h-[40px] px-3 py-1.5 rounded-lg text-[13px] sm:text-sm font-semibold text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                      active ? 'bg-white text-[#0B1B3D] shadow-sm' : 'text-slate-600 hover:text-[#0B1B3D]'
                    }`}
                  >
                    {cat.label}
                    <span className={`font-mono text-[11px] px-1.5 rounded ${active ? 'bg-[#FF8000] text-white' : 'bg-slate-200 text-slate-600'}`}>{cat.count}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-80 flex-shrink-0">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />
              <input
                id="feature-search"
                type="search"
                placeholder="Search modules, e.g. attendance"
                aria-label="Search modules"
                value={featureSearch}
                onChange={(e) => setFeatureSearch(e.target.value)}
                className="w-full h-11 sm:h-12 pl-10 pr-11 text-[15px] bg-white border border-slate-300 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition [&::-webkit-search-cancel-button]:hidden"
              />
              {featureSearch && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setFeatureSearch("")}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          <p className="text-sm text-slate-500 mb-4 min-h-5" aria-live="polite">
            {filteredFeatures.length > 0 && (
              <>Showing <b className="text-[#0B1B3D] tabular-nums">{displayedFeatures.length}</b> of <b className="text-[#0B1B3D] tabular-nums">{filteredFeatures.length}</b> modules
                {selectedCategory !== "All" && <> in {selectedCategory}</>}
                {featureSearch.trim() && <> matching “{featureSearch.trim()}”</>}</>
            )}
          </p>

          {/* Two independent columns from tablet up, so opening a card only pushes its own column down.
              On phones the column wrappers use display: contents and `order` keeps the original sequence. */}
          <div className="flex flex-col gap-2.5 md:grid md:grid-cols-2 md:items-start">
            {[0, 1].map((col) => (
            <div key={col} className="contents md:flex md:flex-col md:gap-2.5">
            {displayedFeatures.map((feature, idx) => {
              if (idx % 2 !== col) return null;
              const isActive = activeFeature === feature.title;
              const panelId = `feature-${feature.title.replace(/\W+/g, '-').toLowerCase()}`;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: (idx % 8) * 0.025 }}
                  style={{ order: idx }}
                  className={`bg-white border rounded-xl transition-all duration-200 ${
                    isActive ? 'border-[#FF8000] shadow-md' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFeature(feature.title)}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 flex items-center gap-3 text-left rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-300"
                  >
                    <IconBox size="sm" tone={categoryTone[feature.category] || "slate"}>
                      {featureIcons[norm(feature.title)] || <FaCube />}
                    </IconBox>
                    <span className="grid gap-0.5 min-w-0 flex-1">
                      <span className={`font-bold text-[15px] sm:text-[15.5px] ${isActive ? 'text-[#E67300]' : 'text-[#0B1B3D]'}`}>{feature.title}</span>
                      <span className="text-xs text-slate-500">{feature.category}</span>
                    </span>
                    <FaChevronDown className={`flex-shrink-0 text-sm transition-transform duration-200 ${isActive ? 'rotate-180 text-[#FF8000]' : 'text-slate-400'}`} />
                  </button>
                  <div
                    id={panelId}
                    className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-3.5 sm:px-4 pb-4 sm:pl-16 text-slate-600 leading-relaxed text-sm sm:text-[14.5px]">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </div>
            ))}

            {displayedFeatures.length === 0 && (
              <div className="md:col-span-2 text-center py-10 sm:py-12 px-5 bg-white rounded-xl sm:rounded-2xl border-2 border-dashed border-slate-300 grid gap-3 justify-items-center">
                <IconBox tone="slate"><FaSearch /></IconBox>
                <h3 className="text-lg font-bold">No modules match “{featureSearch}”</h3>
                <p className="text-slate-600">Try a different word, or clear the search and filters to see all {pageConfig.featureSuite.length} modules.</p>
                <button
                  type="button"
                  onClick={() => { setFeatureSearch(""); setSelectedCategory("All"); }}
                  className="inline-flex items-center h-10 px-4 rounded-lg border border-slate-300 bg-white hover:border-slate-400 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Clear search & filters
                </button>
              </div>
            )}
          </div>

          {!isFiltering && pageConfig.featureSuite.length > 8 && (
            <div className="mt-6 sm:mt-7 flex justify-center" ref={featuresEndRef}>
              <button type="button" onClick={handleToggleFeatures} className={BTN_SECONDARY} aria-expanded={showAllFeatures}>
                {showAllFeatures ? "Show Less" : `View All ${pageConfig.featureSuite.length} Modules`}
                <FaChevronDown className={`text-sm transition-transform ${showAllFeatures ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 w-full bg-white border-y border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            center
            eyebrow="Plans"
            title="Flexible Plans for Every Institution"
            desc="Choose the perfect package to digitize and manage your school operations effectively. Each plan includes everything in the one before it."
          />

          {/* View switch: Summary (default), Full list, Compare */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div role="group" aria-label="Choose how to view plans" className="grid grid-cols-3 w-full max-w-md gap-1 bg-slate-100 border border-slate-200 p-1 rounded-xl">
              {[["summary", "Summary"], ["full", "Full list"], ["compare", "Compare"]].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={planView === value}
                  onClick={() => setPlanView(value)}
                  className={`min-h-[40px] px-2 rounded-lg text-[13px] sm:text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                    planView === value ? 'bg-white text-[#0B1B3D] shadow-sm' : 'text-slate-600 hover:text-[#0B1B3D]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div ref={plansViewRef} className="scroll-mt-24">
          {/* SUMMARY: what each plan adds over the one before */}
          {planView === "summary" && (
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-5 xl:gap-6 items-stretch max-w-xl lg:max-w-none mx-auto">
            {plansWithAdditions.map((plan) => {
              const style = planStyle[plan.name] || { icon: <FaCube />, tone: "slate" };
              const order = (planPreviewOrder[plan.name] || []).map(norm);
              const ordered = [
                ...order.map(t => plan.added.find(f => norm(f) === t)).filter(Boolean),
                ...plan.added.filter(f => !order.includes(norm(f))),
              ];
              const preview = ordered.slice(0, 7);
              const remaining = plan.added.length - preview.length;
              return (
                <motion.article
                  key={plan.name}
                  variants={fadeUpVariant}
                  className={`relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-6 xl:p-7 flex flex-col gap-4 sm:gap-5 transition-shadow ${
                    plan.popular ? 'border-2 border-[#FF8000] shadow-md sm:shadow-xl shadow-orange-500/10' : 'border border-slate-200 hover:shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-5 sm:left-7 bg-[#FF8000] text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                  )}
                  <div className="flex items-center gap-3.5">
                    <IconBox tone={style.tone}>{style.icon}</IconBox>
                    <h3 className="text-xl sm:text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">{plan.description}</p>
                  <div className="flex items-baseline gap-2 py-3 sm:py-4 border-y border-slate-200">
                    <strong className="text-[32px] sm:text-[38px] font-extrabold leading-none tabular-nums">{plan.features.included.length}</strong>
                    <span className="text-sm text-slate-500">features included</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                    {plan.prevName ? `Everything in ${plan.prevName}, plus` : 'Includes'}
                  </span>
                  <ul className="grid gap-2 sm:gap-2.5 text-sm sm:text-[14.5px]">
                    {preview.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0 text-sm" />
                        <span>{feat.trim()}</span>
                      </li>
                    ))}
                    {remaining > 0 && (
                      <li>
                        <button type="button" onClick={() => showPlanView("full")} className="flex items-center gap-2.5 text-slate-500 hover:text-[#0B1B3D] font-medium focus:outline-none focus-visible:underline">
                          <FaPlus className="text-xs" /> {remaining} more, see full list
                        </button>
                      </li>
                    )}
                  </ul>
                  <Link to="/contact" className={`${plan.popular ? BTN_PRIMARY : BTN_SECONDARY} w-full mt-auto`}>
                    Get Started
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
          )}

          {/* FULL LIST: every feature per plan, included and not included */}
          {planView === "full" && (
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-xl md:max-w-none mx-auto">
            {pageConfig.plans.map((plan) => (
              <motion.article
                key={plan.name}
                variants={fadeUpVariant}
                className={`relative bg-white rounded-xl sm:rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-[#FF8000] shadow-md sm:shadow-xl shadow-orange-500/10 md:col-span-2 lg:col-span-1'
                    : 'border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#FF8000]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none z-10" aria-hidden="true">
                    <div className="absolute top-5 -right-10 w-40 rotate-45 bg-[#FF8000] text-white text-[10px] font-bold uppercase tracking-widest text-center py-1.5 shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-7 flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {plan.name}
                    {plan.popular && <span className="sr-only"> (most popular)</span>}
                  </h3>
                  <p className="mt-1 text-[13px] sm:text-sm text-slate-500 leading-relaxed pr-10">{plan.description}</p>
                  <div className={`h-1 w-full rounded-full bg-gradient-to-r ${plan.color} my-4 sm:my-5`} />

                  <ul className="grid gap-2 sm:gap-2.5 text-[13px] sm:text-sm">
                    {plan.features.included.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium text-slate-800">{feat.trim()}</span>
                        <span className="sr-only">included</span>
                      </li>
                    ))}
                    {plan.features.excluded.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <FaTimesCircle className="text-slate-300 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-slate-400">{feat.trim()}</span>
                        <span className="sr-only">not included</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100">
                  <Link to="/contact" className={`${BTN_PRIMARY} w-full`}>
                    Get Started
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
          )}

          {/* COMPARE: one table; no overflow clipping so the header row sticks below the fixed site header */}
          {planView === "compare" && (
            <div className={`${CARD}`}>
              <table className="w-full table-fixed text-[13px] sm:text-[14.5px] border-separate border-spacing-0">
                <colgroup>
                  <col className="w-[46%] sm:w-auto" />
                  {pageConfig.plans.map(p => <col key={p.name} className="sm:w-[18%]" />)}
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" className="sticky top-12 sm:top-16 z-10 bg-slate-50 text-left px-3 sm:px-4 py-3 text-xs min-[380px]:text-[13px] sm:text-[14.5px] font-bold border-b border-slate-200 rounded-tl-xl sm:rounded-tl-2xl">Feature</th>
                    {pageConfig.plans.map((p, i) => (
                      <th key={p.name} scope="col" className={`sticky top-12 sm:top-16 z-10 bg-slate-50 px-1 sm:px-4 py-3 text-[11px] min-[380px]:text-xs sm:text-[14.5px] font-bold text-center border-b border-slate-200 ${i === pageConfig.plans.length - 1 ? 'rounded-tr-xl sm:rounded-tr-2xl' : ''}`}>{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonGroups.map(group => (
                    <React.Fragment key={group.label}>
                      <tr className="bg-slate-100/70">
                        <td colSpan={pageConfig.plans.length + 1} className="px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-500 border-t border-slate-200">{group.label}</td>
                      </tr>
                      {group.rows.map(row => (
                        <tr key={row} className="hover:bg-slate-50">
                          <td className="px-3 sm:px-4 py-2.5 border-t border-slate-100">{row}</td>
                          {pageConfig.plans.map(p => {
                            const has = p.features.included.some(f => norm(f) === norm(row));
                            return (
                              <td key={p.name} className="px-1 sm:px-4 py-2.5 border-t border-slate-100 text-center">
                                {has
                                  ? <FaCheckCircle className="inline text-emerald-500" aria-label="Included" />
                                  : <span className="text-slate-300" aria-label="Not included">—</span>}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* APP FEATURES */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            center
            eyebrow="Mobile app"
            title="School Software Features"
            desc="Teachers, parents and students get the essentials on their phone."
          />
          {/* Same three-column layout on every screen: features | phone | features */}
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-2 sm:gap-4 lg:gap-8 xl:gap-10 items-stretch">
            <div className="relative z-10 flex flex-col justify-around gap-4 md:gap-2">
              {pageConfig.appFeaturesLeft.map((feat) => (
                <AppFeature key={feat.title} feat={feat} align="right" />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center pointer-events-none py-4 sm:py-6 w-[118px] min-[380px]:w-[136px] sm:w-[190px] md:w-[220px] lg:w-[280px] xl:w-[300px]"
            >
              <div className="absolute inset-0 m-auto w-3/4 h-3/4 bg-blue-500/15 rounded-full blur-2xl sm:blur-3xl -z-10" />
              <img src={schoolErpMobile} alt="Arvion School ERP mobile app for parents, teachers and students" loading="lazy" className="w-full mix-blend-darken scale-[1.6] sm:scale-[1.45] lg:scale-[1.35]" />
            </motion.div>

            <div className="relative z-10 flex flex-col justify-around gap-4 md:gap-2">
              {pageConfig.appFeaturesRight.map((feat) => (
                <AppFeature key={feat.title} feat={feat} align="left" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS + SECURITY */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 w-full bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.div {...reveal} variants={fadeUpVariant} className={`${CARD} p-5 sm:p-7 grid gap-4 sm:gap-5 content-start`}>
            <div className="grid gap-1.5">
              <h2 className="text-xl sm:text-[22px] font-bold">Upcoming Modules & Add-ons</h2>
              <p className="text-slate-600 text-sm sm:text-[15px]">Extend the functionality of your ERP with specialized modules.</p>
            </div>
            <div>
              {pageConfig.modules.map((mod, idx) => (
                <div key={mod.title} className={`flex items-center gap-3 sm:gap-3.5 py-3 sm:py-3.5 ${idx !== 0 ? 'border-t border-slate-100' : ''}`}>
                  <IconBox size="sm">{mod.icon}</IconBox>
                  <span className="font-semibold text-[15px] sm:text-base flex-1 min-w-0">{mod.title}</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#E67300] bg-orange-50 px-2 py-1 rounded-md whitespace-nowrap">Add-on</span>
                  {/* <span className="text-indigo-600 font-semibold">{mod.price}</span> */}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...reveal} variants={fadeUpVariant} className={`${CARD} p-5 sm:p-7 grid gap-4 sm:gap-5 content-start`}>
            <div className="grid gap-1.5">
              <h2 className="text-xl sm:text-[22px] font-bold">Built with Security at the Core</h2>
              <p className="text-slate-600 text-sm sm:text-[15px]">Your institutional data is protected by enterprise-grade security protocols and strict access controls.</p>
            </div>
            <div>
              {[
                { title: "JWT Authentication", icon: <FaLock />, desc: "Secure token-based login for all users." },
                { title: "Role-Based Access", icon: <FaUsers />, desc: "Granular permission controls (RBAC)." },
                { title: "Tenant Data Isolation", icon: <FaServer />, desc: "Strict separation of multi-school data." },
                { title: "Secure API Access", icon: <FaCodeBranch />, desc: "Encrypted data transmission." }
              ].map((sec, idx) => (
                <div key={sec.title} className={`flex items-center gap-3 sm:gap-3.5 py-3 sm:py-3.5 ${idx !== 0 ? 'border-t border-slate-100' : ''}`}>
                  <IconBox size="sm" tone="green">{sec.icon}</IconBox>
                  <div className="grid gap-0.5 min-w-0">
                    <span className="font-semibold">{sec.title}</span>
                    <span className="text-sm text-slate-500">{sec.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IMPLEMENTATION WORKS */}
      <section id="process" className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 w-full scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            center
            eyebrow="Implementation"
            title="From Demo to Digital Transformation"
            desc="A streamlined 5-step process to get your institution running on our ERP seamlessly."
          />
          {/* Circle sizes: 32px phone, 36px tablet, 44px desktop. Connector lines run through the circle centres. */}
          <motion.ol variants={staggerContainer} {...reveal} className="relative grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 md:gap-4 max-w-md md:max-w-none mx-auto">
            <span aria-hidden="true" className="hidden md:block absolute top-[17px] lg:top-[21px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#FF8000] to-slate-300" />
            <span aria-hidden="true" className="md:hidden absolute left-[15px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#FF8000] to-slate-300" />
            {[
              { title: "Consultation", desc: "We learn how your school runs today." },
              { title: "Requirement Analysis", desc: "We map your workflows, roles and reports." },
              { title: "Configuration", desc: "We set up modules, fee rules and grading." },
              { title: "Data Migration & Training", desc: "We import your records and train your staff." },
              { title: "Go Live", desc: "Your school runs on the ERP, with ongoing support." }
            ].map((item, idx, arr) => (
              <motion.li key={item.title} variants={fadeUpVariant} className="relative grid grid-cols-[32px_1fr] md:grid-cols-1 gap-x-3 sm:gap-x-4 gap-y-0.5 md:gap-2.5 lg:gap-3 md:justify-items-center md:text-center">
                <span className={`row-span-2 md:row-span-1 w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-full border-2 border-[#FF8000] flex items-center justify-center font-bold text-sm md:text-[15px] lg:text-base tabular-nums ${
                  idx === arr.length - 1 ? 'bg-[#FF8000] text-white' : 'bg-white text-[#E67300]'
                }`}>{idx + 1}</span>
                <h3 className="font-bold text-sm sm:text-[15px] lg:text-base leading-snug self-center md:self-auto">{item.title}</h3>
                <p className="text-[13px] sm:text-sm text-slate-600 md:max-w-[24ch]">{item.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* WHY SCHOOLS CHOOSE OUR ERP */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 w-full bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader center title="Why Schools Choose Our ERP" />
          <motion.div variants={staggerContainer} {...reveal} className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { title: "Complete Platform", icon: <FaCube /> },
              { title: "Scalable Architecture", icon: <FaExpandArrowsAlt /> },
              { title: "Multi-School Ready", icon: <FaSitemap /> },
              { title: "Role-Based Security", icon: <FaShieldAlt /> },
              { title: "Customizable Workflows", icon: <FaSlidersH /> },
              { title: "Dedicated Support", icon: <FaHeadset /> },
              { title: "Modern User Experience", icon: <FaDesktop /> },
              { title: "Continuous Improvements", icon: <FaSyncAlt /> }
            ].map((feature) => (
              <motion.div key={feature.title} variants={fadeUpVariant} className="flex items-center gap-3 p-3.5 sm:p-4 border border-slate-200 rounded-xl bg-white hover:border-[#FF8000] transition-colors font-semibold text-sm sm:text-[15px]">
                <span className="text-[#FF8000] text-xl">{feature.icon}</span>{feature.title}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialSection />

      {/* FAQ SECTION */}
      <section id="faq" className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 w-full bg-white border-t border-slate-200 scroll-mt-20">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" desc="Can't find your answer? Talk to our ERP team." />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-start">
          <div className="grid gap-5 sm:gap-6 content-start lg:sticky lg:top-24">
            <div className={`${CARD} p-5 sm:p-6 grid gap-4`}>
              <div className="flex gap-3 text-[14.5px] text-slate-600">
                <FaPhoneAlt className="text-[#FF8000] mt-1 flex-shrink-0" />
                <span>Phone<br /><a href={`tel:${pageConfig.contact.phone.replace(/\s/g, '')}`} className="font-semibold text-[#0B1B3D] hover:underline">{pageConfig.contact.phone}</a></span>
              </div>
              <div className="flex gap-3 text-[14.5px] text-slate-600">
                <FaEnvelope className="text-[#FF8000] mt-1 flex-shrink-0" />
                <span className="min-w-0">Email<br /><a href={`mailto:${pageConfig.contact.email}`} className="font-semibold text-[#0B1B3D] hover:underline break-all">{pageConfig.contact.email}</a></span>
              </div>
              <div className="flex gap-3 text-[14.5px] text-slate-600">
                <FaMapMarkerAlt className="text-[#FF8000] mt-1 flex-shrink-0" />
                <span>{pageConfig.contact.address}</span>
              </div>
              <button type="button" onClick={copyEmail} className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg border border-slate-300 bg-white hover:border-slate-400 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
                {emailCopied ? <><FaCheckCircle className="text-emerald-500" /> Email copied</> : <><FaCopy /> Copy email address</>}
              </button>
            </div>
          </div>

          <div className="border-t border-slate-200">
            {schoolFaqs.map((faq, idx) => {
              const isActive = activeFaq === idx;
              return (
                <div key={faq.q} className="border-b border-slate-200">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isActive}
                    aria-controls={`faq-panel-${idx}`}
                    className="w-full flex justify-between items-center gap-4 py-4 sm:py-5 px-1 text-left font-semibold text-[15px] sm:text-[16.5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-300 rounded"
                  >
                    {faq.q}
                    <FaPlus className={`flex-shrink-0 text-sm transition-transform duration-200 ${isActive ? 'rotate-45 text-[#FF8000]' : 'text-slate-400'}`} />
                  </button>
                  <div id={`faq-panel-${idx}`} className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="px-1 pb-4 sm:pb-5 text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-[62ch]">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 w-full bg-[#0B1B3D] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-6 sm:gap-8 items-center">
          <motion.div {...reveal} variants={fadeUpVariant} className="grid gap-4">
            <h2 className="text-[26px] sm:text-3xl md:text-4xl xl:text-[44px] font-bold leading-tight tracking-tight text-balance">Ready to Transform Your Institution?</h2>
            <p className="text-base sm:text-lg text-blue-200/90 max-w-[56ch] leading-relaxed">
              Talk to our team to explore how our School ERP can simplify operations, improve visibility, and create a more connected educational experience.
            </p>
          </motion.div>
          <motion.div {...reveal} variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link to="/contact" className={BTN_PRIMARY}>Request a Demo</Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-lg border border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold text-[15px] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

// Phones: title only. Tablet up: icon + title + description. Left column aligns toward the phone.
const AppFeature = ({ feat, align = "left" }) => (
  <motion.div
    {...reveal}
    variants={fadeUpVariant}
    className={`flex items-start gap-3 sm:gap-3.5 md:p-3 lg:p-3.5 rounded-xl border border-transparent md:hover:bg-white md:hover:border-slate-200 transition-colors ${
      align === "right" ? 'flex-row-reverse text-right' : 'text-left'
    }`}
  >
    <div className="hidden md:flex flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 rounded-lg lg:rounded-xl bg-blue-50 items-center justify-center [&>svg]:!text-xl">{feat.icon}</div>
    <div className="min-w-0">
      <h3 className="font-bold leading-snug text-xs min-[380px]:text-[13px] sm:text-sm md:text-[15px] lg:text-[15.5px]">{feat.title}</h3>
      <p className="hidden md:block text-sm text-slate-600 mt-0.5">{feat.desc}</p>
    </div>
  </motion.div>
);

export default SchoolManagement;
