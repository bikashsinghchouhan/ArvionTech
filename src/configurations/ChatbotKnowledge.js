import { pageConfig } from './SchoolManagementConfig.jsx';

export const predefinedQuestions = [
  "What services do you offer?",
  "Tell me about School Management plans & features",
  "What is Master setup?",
  "What features are in Basic, Standard, or Premium plans?",
  "How does Facial recognition attendance work?",
  "How can I contact you?"
];

// Keywords mapping for all 33 individual School ERP modules
const featureKeywordsMap = {
  "Master setup": ["master setup", "master-setup", "what is master setup", "what is master", "master config", "master module"],
  "Student Management": ["student management", "student profile", "student profiles", "student records", "student admission"],
  "Teacher Management": ["teacher management", "faculty management", "teachers", "teacher allocation"],
  "Staff Management": ["staff management", "non-teaching staff", "support staff", "staff records"],
  "Time table setup": ["time table", "timetable", "time table setup", "class schedule", "teacher schedule"],
  "User management": ["user management", "user credentials", "user roles", "account administration"],
  "Notifications": ["notifications", "notification", "school circular", "announcements", "sms alerts"],
  "Holiday": ["holiday", "holidays", "academic calendar", "vacation calendar"],
  "Promotion": ["promotion", "student promotion", "academic roll-over", "promote student", "promote students"],
  "Exit": ["exit management", "student exit", "transfer certificate", "tc generation", "staff offboarding", "exit"],
  "Reports - basic level": ["reports - basic", "basic report", "basic level report", "basic reports"],
  "Doc management - basic": ["doc management", "document management", "doc vault", "student documents"],
  "Academic year creation": ["academic year creation", "academic year", "new academic year", "new session creation"],
  "Data storage for future years' reference": ["data storage", "future years", "archival", "historical data storage"],
  "Fee management": ["fee management", "fee collection", "fee receipt", "fee structure"],
  "Access restriction": ["access restriction", "rbac", "role-based access", "permissions control"],
  "Dashboard": ["dashboard", "admin dashboard", "overview dashboard", "school dashboard"],
  "Attendance - Manual marking": ["manual marking", "manual attendance", "daily attendance", "mark attendance"],
  "Examination & Marks allocation": ["examination", "marks allocation", "exam management", "report card", "grading system"],
  "Operational logs": ["operational logs", "audit logs", "audit trail", "system logs"],
  "Syllabus management": ["syllabus management", "syllabus", "curriculum tracking", "lesson plan", "lesson plans"],
  "Reports & Analytics": ["reports & analytics", "advanced analytics", "performance analytics"],
  "Reimbursement": ["reimbursement", "staff reimbursement", "expense claim", "expense claims"],
  "Income & Expenses": ["income & expenses", "income and expense", "petty cash", "school expenses"],
  "Library Management": ["library management", "library", "book issue", "books", "isbn cataloging"],
  "Facial recognition attendance": ["facial recognition", "face attendance", "face recognition", "biometric attendance", "ai attendance"],
  "Transport": ["transport", "transport management", "bus tracking", "school bus", "bus routes"],
  "Leave Management": ["leave management", "apply leave", "staff leave", "leave application"],
  "Self check-in & check-out": ["self check-in", "self checkout", "check-in & check-out", "kiosk check-in", "visitor check-in"],
  "Field configuration": ["field configuration", "custom fields", "custom form fields", "form configuration"],
  "Assignment Management": ["assignment management", "homework", "assignments", "student homework"],
  "Inventory Management": ["inventory management", "inventory", "school assets", "stock management"],
  "Customizable dashboard": ["customizable dashboard", "custom dashboard", "personalized dashboard"]
};

const getPlanBadge = (category) => {
  if (category === "Core Administration") return "Basic, Standard & Premium Plans";
  if (category === "Academics & Operations") return "Standard & Premium Plans";
  return "Premium Plan (Enterprise)";
};

const knowledgeBase = [
  // 1. General Plans Overview & Comparisons
  {
    keywords: [
      "features of plan", "feature of plan", "plan features", "plans and features",
      "what are feature in basec", "what are features in basic", "basic standard or premium",
      "basic, standard or premium", "school plans", "erp plans", "compare plans",
      "all plans", "which plan", "school plan"
    ],
    matches: (input) => {
      const hasMultiplePlans = (input.includes("basic") || input.includes("basec")) && (input.includes("standard") || input.includes("premium"));
      const hasGeneralPlanQuery = input.includes("features of plan") || input.includes("feature of plan") || input.includes("school plan") || input.includes("compare plan") || input.includes("what are the plans");
      return hasMultiplePlans || hasGeneralPlanQuery;
    },
    answer: "We offer 3 comprehensive School ERP tiers:\n\n1. Basic Plan:\n17 Core Administration modules including Master Setup, Student/Teacher/Staff Management, Time Table, Notifications, Fee Management, and Dashboard.\n\n2. Standard Plan:\n24 modules — Everything in Basic plus Manual Attendance, Examination & Marks Allocation, Syllabus Management, Operational Logs, Reports & Analytics, Reimbursement, and Income & Expenses.\n\n3. Premium Plan:\nAll 33 modules — Everything in Standard plus AI Facial Recognition Attendance, Transport Management, Library Management, Leave Management, Self Check-in/out, Field Configuration, Assignment Management, Inventory Management, and Customizable Dashboards.\n\nAsk me about any specific plan to see its full feature list, or ask about any module (e.g., 'What is Master setup?' or 'Explain Library Management')!"
  },

  // 2. Specific Plan Breakdowns
  {
    keywords: ["basic plan", "basec plan", "basic package", "features in basic", "features in basec", "basic tier"],
    matches: (input) => (input.includes("basic") || input.includes("basec")) && (input.includes("plan") || input.includes("feature") || input.includes("include")),
    answer: "Our Basic Plan is designed for schools starting their digital journey. It includes 17 essential administrative features:\n\n• Master setup\n• Student Management\n• Teacher Management\n• Staff Management\n• Time table setup\n• User management\n• Notifications\n• Holiday Management\n• Student Promotion\n• Exit / Transfer Management\n• Reports - basic level\n• Doc management - basic\n• Academic year creation\n• Data storage for future years' reference\n• Fee management\n• Access restriction\n• Dashboard"
  },
  {
    keywords: ["standard plan", "standard package", "features in standard", "standard tier"],
    matches: (input) => input.includes("standard") && (input.includes("plan") || input.includes("feature") || input.includes("include")),
    answer: "Our Standard Plan provides complete operational control for growing institutions. It includes all 17 Basic features PLUS 7 advanced academic and financial modules (24 total features):\n\n• Everything in Basic (Student, Teacher, Staff, Timetable, Fees, etc.)\n• Attendance - Manual marking (Daily & period-wise)\n• Examination & Marks allocation (Report cards & grading)\n• Operational logs (Audit trails & security)\n• Syllabus management (Curriculum pacing & lesson plans)\n• Reports & Analytics (In-depth institutional insights)\n• Reimbursement (Staff expense claims & approvals)\n• Income & Expenses (Cash flow & ledgers)"
  },
  {
    keywords: ["premium plan", "premium package", "features in premium", "premium tier"],
    matches: (input) => input.includes("premium") && (input.includes("plan") || input.includes("feature") || input.includes("include")),
    answer: "Our Premium Plan is our flagship enterprise ERP suite with all 33 features included:\n\n• Everything in Basic & Standard Plans (24 modules)\n• Facial recognition attendance (AI-driven, touchless & proxy-free)\n• Library Management (Cataloging, issue/returns, late fines)\n• Transport (Bus routes, driver tracking, vehicle passes)\n• Leave Management (Online applications, quotas, approvals)\n• Self check-in & check-out (Touchscreen kiosks / mobile)\n• Field configuration (Custom dynamic fields for forms)\n• Assignment Management (Homework, submissions & feedback)\n• Inventory Management (Campus assets, lab equipment & stocks)\n• Customizable dashboard (Personalized widgets & charts)"
  },

  // 3. Pricing
  {
    keywords: ["price", "pricing", "cost", "charge", "much", "quote"],
    answer: "Our pricing is tailored to your specific institution's size, student strength, and operational requirements. Please reach out to our team via the Contact Us page for a customized quote and live demonstration!"
  },

  // 4. Other Core Services & Inquiries
  {
    keywords: ["support", "maintenance", "help", "issue", "bug", "fix"],
    answer: "We provide comprehensive ongoing support and maintenance for all our software solutions. If you're an existing client, please reach out to your dedicated account manager."
  },
  {
    keywords: ["location", "address", "where", "based", "office", "country"],
    answer: "Arvion Technologies serves clients globally! For our specific office address and contact numbers, please visit our Contact Us page."
  },
  {
    keywords: ["service", "services", "offer", "do you do"],
    answer: "We offer 4 core services: School Management Systems, Payroll Outsourcing, Statutory Registrations, and Accounting Services. Which one would you like to know more about?"
  },
  {
    keywords: ["school", "management", "erp", "school software"],
    answer: "Our School Management System is an integrated ERP platform featuring 33+ modules across student administration, faculty tracking, AI facial recognition attendance, fee management, examination & grading, and customizable dashboards."
  },
  {
    keywords: ["payroll", "outsource", "outsourcing", "talent", "onboarding"],
    answer: "Our Payroll Outsourcing helps you scale operations globally with secure, compliant, and hands-off talent onboarding, payroll processing, and taxes."
  },
  {
    keywords: ["statutory", "registration", "tax", "gst", "incorporation", "legal"],
    answer: "We streamline legal entity setup, tax registration filings (like GST), Import Export IEC processing, and Intellectual Property protection."
  },
  {
    keywords: ["account", "accounting", "bookkeeping", "finance", "audit"],
    answer: "Our Accounting Services ensure compliance, secure ledger management, continuous bookkeeping audits, and strategic financial forecasting."
  },
  {
    keywords: ["contact", "call", "email", "phone", "reach", "touch"],
    answer: "You can reach us at sales@arviontechnologies.com, call us at +91 9535764655, or visit our Contact Us page to send a direct message."
  },
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    answer: "Hello! Welcome to Arvion Technologies. How can I help you today?"
  }
];

export const getBotResponse = (userInput) => {
  const lowerInput = userInput.toLowerCase();
  const cleanInput = lowerInput.replace(/[-&]/g, " ").replace(/\s+/g, " ").trim();

  // 1. First priority: Check if the user is asking about plans / plan comparison
  for (let item of knowledgeBase.slice(0, 4)) {
    if (item.matches && item.matches(lowerInput)) {
      return item.answer;
    }
    if (item.keywords && item.keywords.some(keyword => lowerInput.includes(keyword))) {
      return item.answer;
    }
  }

  // 2. Check if the user is asking about ANY of the 33 School ERP modules from featureSuite
  for (let feature of pageConfig.featureSuite) {
    const titleLower = feature.title.toLowerCase();
    const titleClean = titleLower.replace(/[-&]/g, " ").replace(/\s+/g, " ").trim();
    const extraKeywords = featureKeywordsMap[feature.title] || [];

    const isMatch =
      cleanInput.includes(titleClean) ||
      lowerInput.includes(titleLower) ||
      extraKeywords.some(kw => lowerInput.includes(kw));

    if (isMatch) {
      return `**${feature.title}** (${feature.category}):\n\n${feature.desc}\n\nIncluded in: **${getPlanBadge(feature.category)}**`;
    }
  }

  // 3. Check general knowledge base (pricing, services, contact, etc.)
  for (let item of knowledgeBase.slice(4)) {
    if (item.matches && item.matches(lowerInput)) {
      return item.answer;
    }
    if (item.keywords && item.keywords.some(keyword => lowerInput.includes(keyword))) {
      return item.answer;
    }
  }

  // Fallback response
  return "Thank you for your question! As an AI assistant for Arvion Technologies, my expertise is focused on our core services: School Management (including our 33 modules and plans), Payroll Outsourcing, Statutory Registrations, and Accounting. For inquiries outside these areas, please reach out to our team via the Contact Us page, and they would be happy to assist you further.";
};
