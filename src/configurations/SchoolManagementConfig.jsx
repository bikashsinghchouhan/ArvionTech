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
          "Master setup", "Student management", "Class section", "Class time table",
          "Attendance management", "Admission management"
        ],
        excluded: [
          "Fee management", "Exam management", "Leave management", "Holiday Management",
          "Notification", "Library management", "Reports", "Customizable dashboard", "Face based attendance"
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
          "Master setup", "Student management", "Class section", "Class time table",
          "Attendance management", "Admission management", "Fee management", "Exam management",
          "Leave management", "Holiday Management", "Notification"
        ],
        excluded: [
          "Library management", "Reports", "Customizable dashboard", "Face based attendance"
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
          "Master setup", "Student management", "Class section", "Class time table",
          "Attendance management", "Admission management", "Fee management", "Exam management",
          "Leave management", "Holiday Management", "Notification", "Library management",
          "Reports", "Customizable dashboard", "Face based attendance"
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
    { title: "Admission Management", desc: "Automate and streamline the entire student enrollment process, from handling initial inquiries and digital application forms to document verification and final admission confirmation." },
    { title: "Comprehensive Student Profiles", desc: "Maintain a complete 360-degree view of every student, from initial admission and enrollment to academic progress, attendance records, and extracurricular activities. Our system provides a centralized, secure database, making it easy for administrators and teachers to access the information they need, when they need it." },
    { title: "Class & Section Setup", desc: "Easily organize students into specific classes and sections. Allocate class teachers, manage class-level capacities, and handle end-of-year student promotions seamlessly." },
    { title: "Automated Timetable & Scheduling", desc: "Effortlessly create, manage, and distribute complex academic schedules. Our intelligent timetabling tool helps you avoid conflicts, manage teacher allocations, and publish schedules directly to student and parent portals, saving countless hours of administrative work." },
    { title: "Attendance Management", desc: "Track student and staff daily attendance efficiently. Generate instant daily, monthly, and yearly attendance reports to easily monitor punctuality and absenteeism." },
    { title: "Face Based Attendance", desc: "Leverage advanced AI facial recognition technology for contact-less, highly accurate, and secure attendance logging, eliminating proxy attendance completely." },
    { title: "Integrated Grade & Exam Management", desc: "Streamline the entire examination process, from creating exam schedules to entering grades and generating detailed report cards. Our platform provides powerful analytics to track student performance over time, helping educators identify trends and provide targeted support." },
    { title: "Fee Management", desc: "Automate fee collections by defining custom fee structures and concessions. Generate instant receipts, track pending dues, and send automatic payment reminders to parents." },
    { title: "Library Management", desc: "Digitize your entire library inventory. Effortlessly track book issues, returns, and lost items, while automatically calculating and applying late fines for delayed returns." },
    { title: "Leave & Holiday Management", desc: "Define institutional academic calendars and holidays. Allow staff and students to apply for leaves digitally, backed by an automated multi-level approval workflow." },
    { title: "Automated Notifications", desc: "Keep parents, teachers, and students informed in real-time through automated SMS, email, and push notifications for upcoming events, fee dues, and urgent announcements." },
    { title: "Reports & Analytics", desc: "Generate exhaustive graphical and tabular reports covering academics, finances, and administration to empower school leadership to make informed, data-driven decisions." },
    { title: "Customizable Dashboard", desc: "Provide personalized, role-based dashboards for administrators, teachers, and parents, highlighting the most critical daily metrics, announcements, and pending tasks at a glance." },
    { title: "Master Setup", desc: "Configure core institutional data like academic sessions, user roles, detailed permission controls, departments, and institutional branding with a highly flexible master module." }
  ],
  contact: {
    title: "Contact Arvion Technologies",
    subtitle: "Get in touch with our ERP experts to schedule a free demo and consultation.",
    address: "utrahalli, bansankari, bangalore-560076",
    phone: "+91 9535764655",
    email: "info@arviontechnologies.com"
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
