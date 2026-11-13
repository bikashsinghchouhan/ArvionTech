import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCheckCircle, FaTimesCircle, FaMobileAlt, FaMoneyBillWave, FaEnvelope, FaMapMarkerAlt,
  FaPhoneAlt, FaPlus, FaChartLine, FaClipboardCheck, FaBookOpen, FaBusAlt, FaBullhorn, FaUserCheck,
  FaChevronDown, FaPlayCircle, FaSearch, FaLock, FaUsers, FaServer, FaCodeBranch, FaCube, FaExpandArrowsAlt, FaSitemap,
  FaShieldAlt, FaSlidersH, FaHeadset, FaDesktop, FaSyncAlt, FaCalendarAlt, FaBuilding, FaChartBar, FaCrown, FaArrowRight,
  FaTimes, FaUserGraduate, FaUserTie, FaSignOutAlt, FaFolderOpen, FaThLarge, FaBook, FaFileInvoiceDollar, FaBoxes,
  FaIdBadge, FaClipboardList, FaCopy, FaLayerGroup, FaUserFriends, FaWallet, FaUserPlus, FaFileAlt, FaBell, FaReceipt, FaHourglassHalf, FaVolumeMute, FaUnlock, FaColumns, FaCalendarCheck, FaShareAlt
} from 'react-icons/fa';
import TestimonialSection from '../components/TestimonialSection';
import schoolErpMobile from '../assets/school-erp-mobile.webp';
import schoolErpHero from '../assets/school-erp-hero.webp';
import portalAdmin from '../assets/portals/admin.webp';
import portalTeacher from '../assets/portals/teacher.webp';
import portalStudent from '../assets/portals/student.webp';
import portalParent from '../assets/portals/parent.webp';

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
  {
    problem: "Manual student records", problemDesc: "Files sit in cabinets and spreadsheets. Finding one child's full history takes hours.", problemIcon: <FaFolderOpen />,
    solution: "Centralized student database", solutionDesc: "One profile per student from admission to transfer certificate: guardians, documents, class history and fees.", solutionIcon: <FaUsers />
  },
  {
    problem: "Attendance errors", problemDesc: "Paper registers, proxy marking and monthly totals worked out by hand.", problemIcon: <FaClipboardList />,
    solution: "Digital / AI attendance", solutionDesc: "Teachers mark a class in seconds on web or phone. Facial recognition removes proxy attendance.", solutionIcon: <FaUserCheck />
  },
  {
    problem: "Fee tracking difficulty", problemDesc: "Handwritten receipts, missed dues and long evenings reconciling the cash book.", problemIcon: <FaReceipt />,
    solution: "Automated fee management", solutionDesc: "Set fee structures, instalments and concessions once. Receipts, late fines and reminders run on their own.", solutionIcon: <FaWallet />
  },
  {
    problem: "Delayed results", problemDesc: "Marks are collected on paper and copied into report cards by hand, which takes weeks.", problemIcon: <FaHourglassHalf />,
    solution: "Digital examination system", solutionDesc: "Teachers enter marks once. Grades, report cards and merit lists are generated automatically.", solutionIcon: <FaFileAlt />
  },
  {
    problem: "Poor communication", problemDesc: "Circulars get lost in school diaries and scattered WhatsApp groups. Parents miss key dates.", problemIcon: <FaVolumeMute />,
    solution: "Notifications and announcements", solutionDesc: "Send circulars, holiday notices, alerts and fee reminders by SMS, email and app notification.", solutionIcon: <FaBell />
  },
  {
    problem: "Permission issues", problemDesc: "Either everyone can see everything, or nobody can find what they need.", problemIcon: <FaUnlock />,
    solution: "Role-Based Access Control", solutionDesc: "Each person sees only what their role allows: principal, teacher, accountant, parent or student.", solutionIcon: <FaShieldAlt />
  },
  {
    problem: "Multiple branches", problemDesc: "Each campus keeps its own records, so management has no combined view.", problemIcon: <FaColumns />,
    solution: "Centralized multi-school control", solutionDesc: "Run every branch from one dashboard while each campus's data stays separate.", solutionIcon: <FaSitemap />
  },
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
    }).catch(() => { });
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

      {/* 1. HERO SECTION: light banner, photo on the right */}
      <section className="relative w-full overflow-hidden lg:min-h-[calc(100svh-38px)] lg:flex lg:flex-col bg-gradient-to-r from-[#e8f1ff] via-[#f4f8ff] to-white pt-16 border-b border-blue-100">
        {/* Photo: right side on large screens, fading into the light background on its left edge */}
        <div aria-hidden="true" className="hidden lg:block absolute top-16 bottom-0 right-0 w-[56%] xl:w-[55%]">
          <img
            src={schoolErpHero}
            alt=""
            width="1376"
            height="768"
            fetchPriority="high"
            className="w-full h-full object-cover object-[70%_center] [mask-image:linear-gradient(to_right,transparent_0%,#000_20%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_20%)]"
          />
        </div>
        {/* Soft light accents */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-[-6rem] left-[28%] w-96 h-48 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 lg:flex-1 lg:flex lg:flex-col">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-4 sm:pt-5 text-[13px] sm:text-sm text-slate-500">
            <Link to="/" className="hover:text-[#0f2a6b] focus:outline-none focus-visible:underline">Home</Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <Link to="/services" className="hover:text-[#0f2a6b] focus:outline-none focus-visible:underline">Services</Link>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="font-semibold text-[#0f2a6b]" aria-current="page">School ERP</span>
          </nav>

          <div className="grid lg:grid-cols-2 items-center lg:flex-1">
            {/* Left content */}
            <div className="grid gap-4 sm:gap-5 pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-8 lg:pb-14 min-w-0 lg:pr-6">
              <motion.span
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 w-max max-w-full bg-white border border-blue-100 text-[#0f2a6b] text-xs sm:text-[13px] font-semibold px-3 py-1.5 rounded-full shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#ffc727]" /> Arvion School ERP
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
                className="text-[28px] sm:text-[38px] lg:text-[38px] xl:text-[42px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0f2a6b] text-balance"
              >
                Complete School ERP for Smarter Schools &amp; Stronger Institutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[15px] sm:text-lg text-slate-800 max-w-xl leading-relaxed"
              >
                End-to-end school management software to run admissions, academics, attendance, fees, exams and parent communication &ndash; all in one place.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-wrap gap-3 sm:gap-4 mt-1"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-lg bg-[#ffc727] hover:bg-[#ffb800] border border-[#f2b400] text-[#0f2a6b] font-bold text-sm sm:text-[15px] shadow-md shadow-yellow-500/20 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-200"
                >
                  <FaCalendarCheck /> Book a Free Demo
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-lg bg-white text-[#1747a6] border-2 border-[#1747a6] hover:bg-blue-50 font-bold text-sm sm:text-[15px] shadow-sm transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  Explore Modules <FaArrowRight className="text-xs" />
                </a>
              </motion.div>

              {/* Assurance badges */}
              <motion.ul
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 sm:mt-3 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2.5 text-[13px] sm:text-sm font-medium text-slate-700"
              >
                {[
                  [<FaShieldAlt />, "100% Compliance"],
                  [<FaLayerGroup />, "Data Security"],
                  [<FaChartBar />, "Scalable Solutions"],
                  [<FaHeadset />, "Expert Support"],
                ].map(([icon, label]) => (
                  <li key={label} className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-md bg-blue-100/70 text-[#1747a6] flex items-center justify-center text-xs flex-shrink-0">{icon}</span>
                    {label}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Photo for small screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:hidden pb-10 sm:pb-12"
            >
              <img
                src={schoolErpHero}
                alt="Teacher and students using Arvion School ERP on a laptop"
                width="1376"
                height="768"
                className="w-full h-auto rounded-2xl shadow-xl ring-1 ring-blue-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES OVERVIEW */}
      <section id="features" ref={featuresTopRef} className="py-8 sm:py-10 px-4 sm:px-6 w-full scroll-mt-20">
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
                    className={`inline-flex items-center justify-between sm:justify-start gap-2 min-h-[40px] px-3 py-1.5 rounded-lg text-[13px] sm:text-sm font-semibold text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${active ? 'bg-white text-[#0B1B3D] shadow-sm' : 'text-slate-600 hover:text-[#0B1B3D]'
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
                      className={`bg-white border rounded-xl transition-all duration-200 ${isActive ? 'border-[#FF8000] shadow-md' : 'border-slate-200 hover:border-slate-300'
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

      {/* WHY CHOOSE US SECTION */}
      <section className="relative overflow-hidden py-10 sm:py-12 px-4 sm:px-6 w-full bg-gradient-to-b from-[#f5f8ff] via-white to-[#f7f9ff]">
        {/* Background decoration: soft blue waves at the top corners and bottom, thin orange curve bottom-right */}
        <svg aria-hidden="true" className="pointer-events-none absolute top-0 left-0 w-full h-40 sm:h-56" viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path d="M0,0 H460 C380,40 250,70 0,64 Z" fill="#e3ecfb" opacity="0.7" />
          <path d="M1440,0 V150 C1330,110 1260,60 1180,0 Z" fill="#e3ecfb" opacity="0.6" />
        </svg>
        <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 w-full h-20 sm:h-28" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,70 C200,50 360,90 520,120 L0,120 Z" fill="#dbe6fa" opacity="0.7" />
          <path d="M900,120 C1080,40 1260,20 1440,40 L1440,120 Z" fill="#fde7d6" opacity="0.55" />
          <path d="M760,120 C980,40 1220,10 1440,30" fill="none" stroke="#f7941d" strokeWidth="2" opacity="0.8" />
        </svg>

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div {...reveal} variants={fadeUpVariant} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-3 rounded-full bg-[#ffeadb] px-5 py-1.5 text-[12px] sm:text-[14px] font-extrabold uppercase tracking-[0.06em] text-[#f26b0f]">
              <span aria-hidden="true" className="w-4 sm:w-5 h-0.5 rounded bg-[#f26b0f]" />
              Why Arvion
              <span aria-hidden="true" className="w-4 sm:w-5 h-0.5 rounded bg-[#f26b0f]" />
            </span>
            <h2 className="mt-4 text-[26px] sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              Why Choose Our <span className="text-[#f26b0f]">School ERP?</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-[15px] sm:text-[17px] text-slate-600 leading-relaxed">
              We go beyond basic administration. Our platform is a comprehensive ecosystem designed to transform how your educational institution operates, empowering educators, engaging parents, and driving student success.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div variants={staggerContainer} {...reveal} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {[
              { title: "100% Cloud-Based & Secure", desc: "Access your school's data securely from anywhere. Our cloud infrastructure features enterprise-grade encryption and automated backups to ensure complete data protection.", icon: <FaServer />, tone: "bg-[#e3eeff] text-[#1d5fe0]", wave: "#1d6ff2" },
              { title: "Intuitive & User-Friendly", desc: "Designed for effortless navigation. Teachers, admins, and parents can use the system immediately, requiring zero technical training or complex onboarding.", icon: <FaDesktop />, tone: "bg-[#ffece0] text-[#f26b0f]", wave: "#f26b0f" },
              { title: "Highly Customizable & Scalable", desc: "From small schools to large university groups, our modular architecture adapts and scales seamlessly as your educational institution expands over time.", icon: <FaExpandArrowsAlt />, tone: "bg-[#efe9ff] text-[#8b5cf6]", wave: "#8b5cf6" },
              { title: "Real-Time Analytics & Reporting", desc: "Empower decision-making with instant, actionable insights. Monitor student performance, financial health, and staff productivity through an advanced dashboard.", icon: <FaChartBar />, tone: "bg-[#e3f7ea] text-[#22a855]", wave: "#2fbf5f" },
              { title: "Dedicated 24/7 Support", desc: "Experience worry-free operations with our dedicated success team. We provide full implementation training and reliable round-the-clock technical assistance.", icon: <FaHeadset />, tone: "bg-[#fff4d9] text-[#f5a50b]", wave: "#fbbf24" },
              { title: "Seamless Integration", desc: "Connect seamlessly with your existing tools. Our API-first platform integrates effortlessly with biometric devices, accounting software, and payment gateways.", icon: <FaShareAlt />, tone: "bg-[#ffe4ee] text-[#e83e7c]", wave: "#ec4899" },
            ].map((feature) => (
              <motion.article
                key={feature.title}
                variants={fadeUpVariant}
                className="group relative overflow-hidden bg-white/90 rounded-2xl border border-slate-200/80 shadow-[0_6px_22px_-14px_rgba(15,42,107,.22)] hover:shadow-[0_14px_30px_-16px_rgba(15,42,107,.3)] hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 pb-10 sm:pb-11"
              >
                {/* Coloured swoosh in the bottom-right corner */}
                <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[48%] h-12" viewBox="0 0 200 48" preserveAspectRatio="none">
                  <path d="M0,48 C90,47 160,38 200,0 L200,48 Z" fill={feature.wave} opacity="0.1" />
                  <path d="M60,48 C130,46 178,30 200,6 L200,48 Z" fill={feature.wave} />
                </svg>
                <span className={`relative inline-flex w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-xl items-center justify-center text-2xl sm:text-[28px] transition-transform duration-300 group-hover:scale-105 ${feature.tone}`}>
                  {feature.icon}
                </span>
                <h3 className="relative mt-4 text-[18px] sm:text-[20px] lg:text-[21px] font-extrabold text-[#0B1B3D] leading-snug">{feature.title}</h3>
                <p className="relative mt-2 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* USER PORTALS: one dedicated portal per role */}
      <section id="portals" className="relative overflow-hidden py-8 sm:py-10 px-4 sm:px-6 w-full bg-white scroll-mt-20">
        <div aria-hidden="true" className="pointer-events-none hidden sm:block absolute top-8 right-8 w-24 h-16 opacity-60 bg-[radial-gradient(#b9cdf0_1.6px,transparent_1.6px)] [background-size:14px_14px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-50 blur-2xl" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div {...reveal} variants={fadeUpVariant} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-3 rounded-full bg-[#ffeadb] px-5 py-1.5 text-[12px] sm:text-[14px] font-extrabold uppercase tracking-[0.06em] text-[#f26b0f]">
              <span aria-hidden="true" className="w-4 sm:w-5 h-0.5 rounded bg-[#f26b0f]" />
              User Portals
              <span aria-hidden="true" className="w-4 sm:w-5 h-0.5 rounded bg-[#f26b0f]" />
            </span>
            <h2 className="mt-4 text-[26px] sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              One Platform, <span className="text-[#f26b0f]">Four Portals</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-[15px] sm:text-[17px] text-slate-600 leading-relaxed">
              Dedicated interfaces for every stakeholder in the school ecosystem, on web and mobile.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} {...reveal} className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                key: 'admin', title: 'Administrator Portal', audience: 'For principals & management', image: portalAdmin,
                points: ['Complete school control', 'Configuration & settings', 'Reports & analytics'],
                card: 'from-[#eef4ff] to-[#f8fbff] border-blue-100', tag: 'bg-blue-100/70 text-[#1747a6]', check: 'text-[#1d6ff2]',
                btn: 'border-[#1d6ff2] text-[#1747a6] hover:bg-[#1d6ff2] hover:text-white', ring: 'ring-blue-100',
              },
              {
                key: 'teacher', title: 'Teacher Portal', audience: 'For teaching staff', image: portalTeacher,
                points: ['Class & attendance', 'Exams & marks entry', 'Student performance'],
                card: 'from-[#f5efff] to-[#fbf8ff] border-violet-100', tag: 'bg-violet-100/70 text-violet-700', check: 'text-violet-600',
                btn: 'border-violet-500 text-violet-700 hover:bg-violet-600 hover:text-white', ring: 'ring-violet-100',
              },
              {
                key: 'student', title: 'Student Portal', audience: 'For students', image: portalStudent,
                points: ['Timetable & attendance', 'Results & report card', 'Fee details & notices'],
                card: 'from-[#ecf9f1] to-[#f7fdf9] border-emerald-100', tag: 'bg-emerald-100/70 text-emerald-700', check: 'text-emerald-600',
                btn: 'border-emerald-500 text-emerald-700 hover:bg-emerald-600 hover:text-white', ring: 'ring-emerald-100',
              },
              {
                key: 'parent', title: 'Parent Portal', audience: 'For parents & guardians', image: portalParent,
                points: ["Child's academic progress", 'Attendance & fee status', 'School communication'],
                card: 'from-[#fff3ea] to-[#fffaf6] border-orange-100', tag: 'bg-orange-100/80 text-[#c2560c]', check: 'text-[#f26b0f]',
                btn: 'border-[#f26b0f] text-[#c2560c] hover:bg-[#f26b0f] hover:text-white', ring: 'ring-orange-100',
              },
            ].map((p) => (
              <motion.article
                key={p.key}
                variants={fadeUpVariant}
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${p.card} p-3.5 sm:p-5 flex flex-row gap-3.5 sm:gap-6 shadow-[0_6px_22px_-14px_rgba(15,42,107,.22)] hover:shadow-[0_16px_34px_-18px_rgba(15,42,107,.32)] hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`relative flex-shrink-0 w-[104px] min-[400px]:w-28 sm:w-40 lg:w-44 self-stretch rounded-xl overflow-hidden bg-white p-1 ring-2 sm:ring-4 ${p.ring} shadow-md`}>
                  <img
                    src={p.image}
                    alt={`${p.title} user`}
                    width="198"
                    height="264"
                    loading="lazy"
                    className="block w-full h-full min-h-[150px] sm:min-h-[176px] object-cover object-top rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col min-w-0 py-1">
                  <span className={`self-start rounded-full px-2.5 py-0.5 text-[11px] sm:text-xs font-bold ${p.tag}`}>{p.audience}</span>
                  <h3 className="mt-2 text-[19px] sm:text-[22px] font-extrabold text-[#0B1B3D] leading-tight">{p.title}</h3>
                  <ul className="mt-3 mb-4 grid gap-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700">
                        <FaCheckCircle className={`flex-shrink-0 ${p.check}`} /> {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-auto self-start inline-flex items-center gap-2 rounded-lg border-2 bg-white px-4 py-2 text-[14px] font-bold transition-colors ${p.btn} focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200`}
                  >
                    View Demo <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BEFORE / AFTER: one switch flips all items between "Without ERP" and "With Arvion" */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 w-full bg-white border-y border-slate-200">
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
                className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 min-h-[36px] sm:min-h-[44px] px-2 sm:px-3 rounded-lg sm:rounded-xl text-[13px] sm:text-[15px] font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${!showAfter ? 'bg-white text-red-500 shadow-sm' : 'text-slate-500 hover:text-[#0B1B3D]'
                  }`}
              >
                <FaTimesCircle /> Without ERP
              </button>
              <button
                type="button"
                aria-pressed={showAfter}
                onClick={() => setShowAfter(true)}
                className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 min-h-[36px] sm:min-h-[44px] px-2 sm:px-3 rounded-lg sm:rounded-xl text-[13px] sm:text-[15px] font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${showAfter ? 'bg-[#FF8000] text-white shadow-md shadow-orange-500/30' : 'text-slate-500 hover:text-[#0B1B3D]'
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
                className={`flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border transition-colors ${idx === beforeAfterRows.length - 1 && beforeAfterRows.length % 2 === 1 ? 'md:col-span-2 md:w-[calc(50%-0.5rem)] md:justify-self-center' : ''
                  } ${showAfter ? 'bg-white border-orange-200' : 'bg-slate-50/70 border-dashed border-slate-300'}`}
              >
                <span className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 text-base sm:text-lg ${showAfter ? 'bg-orange-50 text-[#E67300]' : 'bg-red-50 text-red-500'
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

      {/* PLANS */}
      <section id="plans" className="py-8 sm:py-10 px-4 sm:px-6 w-full bg-white border-y border-slate-200 scroll-mt-20">
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
                  className={`min-h-[40px] px-2 rounded-lg text-[13px] sm:text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${planView === value ? 'bg-white text-[#0B1B3D] shadow-sm' : 'text-slate-600 hover:text-[#0B1B3D]'
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
                      className={`relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-6 xl:p-7 flex flex-col gap-4 sm:gap-5 transition-shadow ${plan.popular ? 'border-2 border-[#FF8000] shadow-md sm:shadow-xl shadow-orange-500/10' : 'border border-slate-200 hover:shadow-lg'
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
                    className={`relative bg-white rounded-xl sm:rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${plan.popular
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
      <section className="py-8 sm:py-10 px-4 sm:px-6 w-full overflow-hidden">
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
      <section className="py-8 sm:py-10 px-4 sm:px-6 w-full bg-white border-y border-slate-200">
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
      <section id="process" className="py-8 sm:py-10 px-4 sm:px-6 w-full scroll-mt-20">
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
                <span className={`row-span-2 md:row-span-1 w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-full border-2 border-[#FF8000] flex items-center justify-center font-bold text-sm md:text-[15px] lg:text-base tabular-nums ${idx === arr.length - 1 ? 'bg-[#FF8000] text-white' : 'bg-white text-[#E67300]'
                  }`}>{idx + 1}</span>
                <h3 className="font-bold text-sm sm:text-[15px] lg:text-base leading-snug self-center md:self-auto">{item.title}</h3>
                <p className="text-[13px] sm:text-sm text-slate-600 md:max-w-[24ch]">{item.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* WHY SCHOOLS CHOOSE OUR ERP */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 w-full bg-white border-y border-slate-200">
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
      <section id="faq" className="py-8 sm:py-10 px-4 sm:px-6 w-full bg-white border-t border-slate-200 scroll-mt-20">
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
      <section className="py-8 sm:py-10 px-4 sm:px-6 w-full bg-[#0B1B3D] text-white">
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
    className={`flex items-start gap-3 sm:gap-3.5 md:p-3 lg:p-3.5 rounded-xl border border-transparent md:hover:bg-white md:hover:border-slate-200 transition-colors ${align === "right" ? 'flex-row-reverse text-right' : 'text-left'
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
