import React from 'react';
import {
  FaMobileAlt, FaWhatsapp, FaGlobe, FaMoneyBillWave,
  FaChartLine, FaClipboardCheck, FaBookOpen, FaCheckCircle,
  FaMapMarker, FaBookReader, FaBusAlt, FaBullhorn, FaUserCheck
} from 'react-icons/fa';
import techImage from '../assets/techImage.png';

export const pageConfig = {
  hero: {
    title: "School Management Software",
    subtitle: "Empower your educational institution with our comprehensive ERP platform. Automate administration, engage stakeholders, and drive excellence with cutting-edge technology.",
    image: techImage
  },
  plans: [
    {
      name: "Basic",
      price: "₹5,000",
      billing: "/ month (Billed Annually)",
      description: "Essential tools for small schools starting their digital journey.",
      color: "from-blue-400 to-blue-600",
      popular: false,
      features: {
        included: [
          "Master setup",
          "Student Management",
          "Teacher Management",
          "Staff Management",
          "Time table setup",
          "User management ",
          "Notifications ",
          "Holiday ",
          "Promotion",
          "Exit",
          "Reports - basic level",
          "Doc management - basic",
          "Academic year creation",
          "Data storage for future years' reference",
          "Fee management",
          "Access restriction",
          "Dashboard"
        ],
        excluded: [

          "Attendance - Manual marking",
          "Examination & Marks allocation",
          "Operational logs",
          "Syllabus management",
          "Reports & Analytics",
          "Reimbursement",
          "Income & Expenses",


          "Library Management",
          "Facial recognition attendance",
          "Transport",
          "Leave Management",
          "Self check-in & check-out",
          "Field configuration",
          "Assignment Management",
          "Inventory Management",
          "Customizable dashboard",
          "Biometric intergartion",
          "Third party integration ",
          "Teacher payroll Processing",


        ]
      }
    },
    {
      name: "Standard",
      price: "₹7,500",
      billing: "/ month (Billed Annually)",
      description: "Advanced features for growing institutions demanding more control.",
      color: "from-purple-500 to-indigo-600",
      popular: false,
      features: {
        included: [
          "Master setup",
          "Student Management",
          "Teacher Management",
          "Staff Management",
          "Time table setup",
          "User management ",
          "Notifications ",
          "Holiday ",
          "Promotion",
          "Exit",
          "Reports - basic level",
          "Doc management - basic",
          "Academic year creation",
          "Data storage for future years' reference",
          "Fee management",
          "Access restriction",
          "Dashboard",

          "Attendance - Manual marking",
          "Examination & Marks allocation",
          "Operational logs",
          "Syllabus management",
          "Reports & Analytics",
          "Reimbursement",
          "Income & Expenses",
        ],
        excluded: [

          "Library Management",
          "Facial recognition attendance",
          "Transport",
          "Leave Management",
          "Self check-in & check-out",
          "Field configuration",
          "Assignment Management",
          "Inventory Management",
          "Customizable dashboard",
          "Biometric intergartion",
          "Third party integration ",
          "Teacher payroll Processing",
        ]
      }
    },
    {
      name: "Premium",
      price: "₹12,500",
      billing: "/ month (Billed Annually)",
      description: "The complete enterprise suite for large-scale operations.",
      color: "from-orange-400 to-red-500",
      popular: true,
      features: {
        included: [
          "Master setup",
          "Student Management",
          "Teacher Management",
          "Staff Management",
          "Time table setup",
          "User management ",
          "Notifications ",
          "Holiday ",
          "Promotion",
          "Exit",
          "Reports - basic level",
          "Doc management - basic",
          "Academic year creation",
          "Data storage for future years' reference",
          "Fee management",
          "Access restriction",
          "Dashboard",



          "Attendance - Manual marking",
          "Examination & Marks allocation",
          "Operational logs",
          "Syllabus management",
          "Reports & Analytics",
          "Reimbursement",
          "Income & Expenses",



          "Library Management",
          "Facial recognition attendance",
          "Transport",
          "Leave Management",
          "Self check-in & check-out",
          "Field configuration",
          "Assignment Management",
          "Inventory Management",
          "Customizable dashboard",
          "Biometric intergartion",
          "Third party integration ",
          "Teacher payroll Processing",
        ],
        excluded: []
      }
    }
  ],


  customErp: {
    title: "Custom ERP Solutions",
    subtitle: "(Tailored for Your Institution)",
    description: "Designed for universities, large groups of schools, and multi-branch institutions requiring specialized, dedicated server deployments.",
    plans: [
      { name: "Premium", price: "₹15,000", billing: "One-Time Setup + Server Cost", color: "bg-red-600" },
      { name: "Platinum", price: "₹30,000", billing: "One-Time Setup + Server Cost", color: "bg-red-700" },
      { name: "Enterprise", price: "₹90,000", billing: "One-Time Setup + Server Cost", color: "bg-red-800" }
    ]
  },


  modules: [
    { title: "Mobile App for Parents/student", price: "₹20/student", icon: <FaMobileAlt size={24} /> },
    { title: "Mobile App for Staff", price: "₹10,000/yr", icon: <FaMobileAlt size={24} /> },
    { title: "WhatsApp API Integration", price: "₹5,000/yr", icon: <FaWhatsapp size={24} /> },
    { title: "Payment Gateway Integration", price: "₹2,000/yr", icon: <FaMoneyBillWave size={24} /> },
    { title: "Domain Registration", price: "₹899/yr", icon: <FaGlobe size={24} /> }
  ],



  featureSuite: [
    {
      title: "Master setup",
      category: "Core Administration",
      desc: "Establish the complete operational foundation of your institution. Configure academic boards, institute profiles, multi-branch campuses, grading systems, operational rules, and system-wide default parameters that govern all software modules."
    },
    {
      title: "Student Management",
      category: "Core Administration",
      desc: "Digitize and maintain complete 360-degree student profiles from inquiry to graduation. Track personal info, guardian contacts, previous schooling, enrollment records, class-section allocations, and medical documents in a unified repository."
    },
    {
      title: "Teacher Management",
      category: "Core Administration",
      desc: "Manage faculty profiles, educational qualifications, department hierarchies, class teacher allocations, subject specializations, and daily teaching workloads with comprehensive administrative oversight."
    },
    {
      title: "Staff Management",
      category: "Core Administration",
      desc: "Maintain organized records for all non-teaching, administrative, and support staff. Track employee designations, contact details, assigned campus responsibilities, shift allocations, and employment documentation."
    },
    {
      title: "Time table setup",
      category: "Core Administration",
      desc: "Create and manage conflict-free class and teacher schedules with intelligent timetable configuration. Set period durations, breaks, subject-teacher allocations, and effortlessly assign proxy teachers for absent staff."
    },
    {
      title: "User management",
      category: "Core Administration",
      desc: "Centralize account administration for school leaders, teachers, administrative staff, students, and parents. Easily create credentials, configure login methods, manage password resets, and track active sessions."
    },
    {
      title: "Notifications",
      category: "Core Administration",
      desc: "Broadcast instant circulars, emergency alerts, holiday announcements, fee reminders, and event notices to parents, teachers, and students via SMS, automated emails, and mobile push notifications."
    },
    {
      title: "Holiday",
      category: "Core Administration",
      desc: "Plan and publish the official institutional calendar including national holidays, festive breaks, seasonal vacations, and scheduled academic closures directly visible across web portals and mobile apps."
    },
    {
      title: "Promotion",
      category: "Core Administration",
      desc: "Execute smooth academic year roll-overs. Promote eligible students in bulk to higher classes or sections based on exam performance, pass criteria, or administrative review with complete historical continuity."
    },
    {
      title: "Exit",
      category: "Core Administration",
      desc: "Streamline the student exit and staff offboarding workflow. Generate Transfer Certificates (TC), conduct multi-department fee and asset clearances, and maintain alumni archival records effortlessly."
    },
    {
      title: "Reports - basic level",
      category: "Core Administration",
      desc: "Generate day-to-day operational reports with one click, including class-wise student rolls, teacher allotment summaries, basic attendance registers, and daily fee transaction summaries."
    },
    {
      title: "Doc management - basic",
      category: "Core Administration",
      desc: "Securely store, organize, and retrieve essential school documents, student birth certificates, transfer certificates, previous marksheets, ID proofs, and staff credentials in a structured digital vault."
    },
    {
      title: "Academic year creation",
      category: "Core Administration",
      desc: "Set up upcoming academic years, terms, and semesters with defined start and end dates. Transition smoothly into new sessions while preserving complete historical data from previous years."
    },
    {
      title: "Data storage for future years' reference",
      category: "Core Administration",
      desc: "Ensure enterprise-grade, encrypted cloud archival of historical student files, grade sheets, fee transactions, and institutional logs for audits, verification, and accreditation compliance."
    },
    {
      title: "Fee management",
      category: "Core Administration",
      desc: "Configure customized fee structures, installment schedules, scholarships, and concessions. Generate instant digital receipts, calculate late fines, and track outstanding balances with automated reminders."
    },
    {
      title: "Access restriction",
      category: "Core Administration",
      desc: "Enforce strict role-based access control (RBAC). Ensure that teachers, accountants, clerks, and parents can only view and modify the exact data permitted by their specific roles and authorization levels."
    },
    {
      title: "Dashboard",
      category: "Core Administration",
      desc: "Gain an instant overview of daily campus operations with interactive summary widgets highlighting today's attendance, active admissions, collected fees, pending tasks, and urgent circulars."
    },
    {
      title: "Attendance - Manual marking",
      category: "Academics & Operations",
      desc: "Empower teachers and administrators to quickly record daily, morning/afternoon, or period-wise student and staff attendance using intuitive web or mobile interfaces with bulk status toggles."
    },
    {
      title: "Examination & Marks allocation",
      category: "Academics & Operations",
      desc: "Plan and schedule examinations, define grading schemes and subject weightages, input marks effortlessly, and generate automated, publication-ready student report cards and merit lists."
    },
    {
      title: "Operational logs",
      category: "Academics & Operations",
      desc: "Maintain detailed, tamper-resistant system audit trails that log user logins, record modifications, financial entries, and administrative actions for transparency and institutional security."
    },
    {
      title: "Syllabus management",
      category: "Academics & Operations",
      desc: "Define subject curricula, chapter breakdowns, and teaching milestones. Monitor real-time syllabus completion progress across classes to ensure teachers stay on track throughout the academic term."
    },
    {
      title: "Reports & Analytics",
      category: "Academics & Operations",
      desc: "Gain deep institutional intelligence with visual analytics and in-depth reports covering student academic progression, attendance trends, staff performance, and fee collection efficiency."
    },
    {
      title: "Reimbursement",
      category: "Academics & Operations",
      desc: "Digitize staff expense claims and official school purchases. Enable employees to upload receipt proofs, route requests through multi-level approval hierarchies, and track disbursement status."
    },
    {
      title: "Income & Expenses",
      category: "Academics & Operations",
      desc: "Maintain accurate institutional financial records. Track non-fee revenues, daily petty cash, vendor disbursements, maintenance expenditures, and generate transparent income-expense summaries."
    },
    {
      title: "Library Management",
      category: "Advanced Enterprise Modules",
      desc: "Automate your school library operations with barcode/ISBN cataloging, book issue and return tracking, lost book management, reservation queues, and automatic late return fine calculation."
    },
    {
      title: "Facial recognition attendance",
      category: "Advanced Enterprise Modules",
      desc: "Deploy AI-driven facial recognition biometric cameras or kiosks for touchless, ultra-fast, and 100% proxy-free attendance tracking for students, teachers, and school staff members."
    },
    {
      title: "Transport",
      category: "Advanced Enterprise Modules",
      desc: "Manage campus transportation logistics with ease: define bus routes, pickup and drop points, vehicle fleet records, driver allocations, student bus passes, and route-based transportation fees."
    },
    {
      title: "Leave Management",
      category: "Advanced Enterprise Modules",
      desc: "Provide a digital workflow for staff and student leave applications. Track allocated leave balances, enforce institutional leave policies, arrange substitute teachers, and manage multi-level approvals."
    },
    {
      title: "Self check-in & check-out",
      category: "Advanced Enterprise Modules",
      desc: "Enable staff members and authorized campus visitors to check in and out independently through on-premise touchscreen kiosks or geofenced mobile app verification."
    },
    {
      title: "Field configuration",
      category: "Advanced Enterprise Modules",
      desc: "Flexibly customize registration forms, student records, and staff profiles by adding custom input fields, document requirements, and dropdown options without writing custom code."
    },
    {
      title: "Assignment Management",
      category: "Advanced Enterprise Modules",
      desc: "Enable teachers to publish homework, assignments, and reading materials online with due dates. Students and parents can access tasks, submit work digitally, and receive teacher feedback."
    },
    {
      title: "Inventory Management",
      category: "Advanced Enterprise Modules",
      desc: "Track institutional physical assets, classroom furniture, science lab equipment, sports gear, uniforms, and books with low-stock alerts, purchase records, and department distribution logs."
    },
    {
      title: "Customizable dashboard",
      category: "Advanced Enterprise Modules",
      desc: "Allow principals, department heads, and teachers to personalize their dashboard view with custom widgets, graphical charts, and key operational shortcuts tailored to their specific daily priorities."
    }
  ],



  contact: {
    title: "Contact Arvion Technologies",
    subtitle: "Get in touch with our ERP experts to schedule a free demo and consultation.",
    address: "Arvion Technologies Pvt Ltd. IBLUE Entertainment, #62/1, New No 7, Ground Floor, 1st Cross, 2nd Main, Ganganagar, Bangalore-560032",
    phone: "+91 9535764655",
    email: "sales@arviontechnologies.com"
  },



  appFeaturesLeft: [
    { title: "Dashboard Management", desc: "Customize and manage different dashboard on different modules.", icon: <FaChartLine className="text-blue-500 text-3xl" /> },
    { title: "Attendance Entry", desc: "Manage and view user's attendance with a detailed report.", icon: <FaClipboardCheck className="text-blue-500 text-3xl" /> },
    { title: "Homework Entry", desc: "Add, View and Check Homework by teachers and students/Parents.", icon: <FaBookOpen className="text-blue-500 text-3xl" /> },
    { title: "Fee Management", desc: "View and Check Fee by students/parents.", icon: <FaMoneyBillWave className="text-blue-500 text-3xl" /> },
    { title: "Timetable Entry", desc: "Automated timetable for every class and sections.", icon: <FaCheckCircle className="text-blue-500 text-3xl" /> }
  ],



  appFeaturesRight: [
    { title: "Location View", desc: "Separate location entries for students, teachers and other staffs", icon: <FaMapMarker className="text-blue-500 text-3xl" /> },
    { title: "Library Management", desc: "To manage available books, its issues and returns", icon: <FaBookReader className="text-blue-500 text-3xl" /> },
    { title: "Vehicle Tracking", desc: "Parents can be worry-free by tracking their children's vehicle status", icon: <FaBusAlt className="text-blue-500 text-3xl" /> },
    { title: "Circular", desc: "Ease of communication with Student/Parent", icon: <FaBullhorn className="text-blue-500 text-3xl" /> },
    { title: "Student Tracking", desc: "Parents/Teachers can keep eye on their children activities", icon: <FaUserCheck className="text-blue-500 text-3xl" /> }
  ],






  testimonials: [
    { name: "Dr. Sharma", role: "Principal, Sunrise Public School", text: "The Arvion ERP has transformed how we manage our day-to-day operations. The attendance and fee modules are incredibly intuitive and have saved us countless hours.", rating: 5 },
    { name: "Mr. Verma", role: "Director, Excellence Academy", text: "Having a centralized dashboard for all our administrative tasks is a game changer. Our teachers can now focus more on teaching rather than paperwork.", rating: 5 },
    { name: "Mrs. Gupta", role: "Head of Administration", text: "The automated timetable and exam management features are flawless. Parents are also very happy with the real-time notifications.", rating: 4 },
    { name: "Mr. Singh", role: "IT Coordinator", text: "The face-based attendance system is incredibly accurate and fast. It completely eliminated proxy attendance in our institution.", rating: 5 },
    { name: "Ms. Patel", role: "Finance Manager", text: "Fee collection used to be a nightmare. Now, with automated reminders and instant receipts, our revenue tracking is seamless and error-free.", rating: 5 }
  ]


};
