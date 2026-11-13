import React from 'react';
import {
  FaDatabase, FaCalendarAlt, FaCheckCircle, FaChartBar, FaGlobe, FaPuzzlePiece, FaClock,
  FaStamp, FaFileSignature, FaBuilding, FaBook, FaChartLine, FaCalculator
} from 'react-icons/fa';

// Same hero photos as the service pages
import schoolImg from '../assets/school-erp-hero.webp';
import outsourcingImg from '../assets/service-heroes/payroll.webp';
import registrationsImg from '../assets/service-heroes/statutory-hero.webp';
import accountingImg from '../assets/service-heroes/accounting-hero.webp';

export const services = [
  {
    title: 'School Management System',
    badge: 'ERP Solutions',
    category: 'Education & Administration',
    description: 'Transform institutional administration with an enterprise-grade academic platform. Seamlessly automate attendance protocols, optimize complex grading matrices, and elevate stakeholder communication.',
    image: schoolImg,
    imagePosition: 'object-[70%_center]',
    path: '/services/school-management',
    // Content of the matching service page hero (used by the home slider)
    hero: { crumb: 'School ERP', title: 'School ERP Software', subtitle: 'Smarter Schools & Stronger Institutions', description: 'End-to-end school management software to run admissions, academics, attendance, fees, exams and parent communication – all in one place.', imageAlt: 'Teacher and students using Arvion School ERP on a laptop', imageWidth: 1376, imageHeight: 768, secondaryLabel: 'Explore Modules' },
    stats: [
      { icon: <FaCalendarAlt />, text: 'Effortless Scheduling' },
      { icon: <FaCheckCircle />, text: 'Automated Attendance' },
      { icon: <FaChartBar />, text: 'Real-time Reporting' }
    ]
  },
  {
    title: 'Payroll Outsourcing Services',
    badge: 'HR & Talent Systems',
    category: 'Talent & Compliance',
    description: 'Accelerate global operations with secure, end-to-end payroll and talent management solutions. We assume the complexities of compliance, taxation, and international onboarding.',
    image: outsourcingImg,
    imagePosition: 'object-right',
    path: '/services/outsourcing',
    // Content of the matching service page hero (used by the home slider)
    hero: { crumb: 'Payroll Outsourcing', title: 'Payroll Outsourcing', subtitle: 'Accurate, Compliant & Hassle-Free Payroll', description: 'End-to-end payroll processing with statutory compliance, payslip distribution, tax management and detailed reports.', imageAlt: 'Payroll specialist processing salaries and payslips on a laptop', imageWidth: 1200, imageHeight: 896, secondaryLabel: 'Our Process' },
    // Feature card shown over the photo (none on the School ERP slide)
    featureCard: { title: 'Payroll', Icon: FaDatabase, points: ['Payroll Processing', 'Payslip Generation & Distribution', 'PF, ESI, PT, TDS & LWF Compliance', 'Income Tax & Declarations', 'Reimbursement & Expense Processing', 'Arrears & Recoveries', 'MIS & Management Reports', 'Audit Support & Data Security'] },
    stats: [
      { icon: <FaGlobe />, text: 'Global Talent Pool' },
      { icon: <FaPuzzlePiece />, text: 'Seamless Integration' },
      { icon: <FaClock />, text: 'End-to-End Payroll Processing' }
    ]
  },
  {
    title: 'Statutory Registrations',
    badge: 'Business Setup',
    category: 'Corporate Services',
    description: 'Establish your corporate footprint with precision. We orchestrate comprehensive statutory compliance, from initial entity incorporation and intellectual property protection to complex tax registrations.',
    image: registrationsImg,
    imagePosition: 'object-right',
    path: '/services/statutory-registrations',
    // Content of the matching service page hero (used by the home slider)
    hero: { crumb: 'Statutory Registrations', title: 'Statutory Registrations', subtitle: 'Entity Setups, Tax Registrations & Compliance', description: 'We handle the paperwork and legal complexities so you can focus on scaling your business operations globally.', imageAlt: 'Statutory Registrations consultants assisting with legal compliance', imageWidth: 1024, imageHeight: 1024, secondaryLabel: 'View Services' },
    featureCard: { title: 'Registrations', Icon: FaFileSignature, points: ['Company Incorporation', 'GST Registration', 'PAN & TAN Registration', 'PF & ESI Registration', 'Professional Tax Registration', 'Import Export Code (IEC)', 'Trademark & IP Registration'] },
    stats: [
      { icon: <FaStamp />, text: 'Business Name Approval' },
      { icon: <FaFileSignature />, text: 'GST & Tax ID Application' },
      { icon: <FaBuilding />, text: 'Company Incorporation' }
    ]
  },
  {
    title: 'Professional Accounting Services',
    badge: 'Finance & Bookkeeping',
    category: 'Finance & Accounts',
    description: 'Gain unparalleled visibility into your financial architecture. We provide rigorous ledger management, real-time analytical reporting, and strategic advisory to drive sustainable corporate growth.',
    image: accountingImg,
    imagePosition: 'object-right',
    path: '/services/accounting',
    // Content of the matching service page hero (used by the home slider)
    hero: { crumb: 'Accounting Services', title: 'Accounting Services', subtitle: 'Expert Bookkeeping, Reporting & Consulting', description: 'Our accounting services provide the financial intelligence you need to navigate challenges and seize opportunities with confidence.', imageAlt: 'Accounting experts reviewing balance sheets and reports', imageWidth: 1024, imageHeight: 1024, secondaryLabel: 'Our Accounting Solutions' },
    featureCard: { title: 'Accounting', Icon: FaCalculator, points: ['Bookkeeping & General Ledger', 'Financial Statement Preparation', 'Expense Management & Tracking', 'Budgeting & Financial Forecasting', 'MIS Reports', 'GST Returns', 'Audit-Ready Books'] },
    stats: [
      { icon: <FaBook />, text: 'Bookkeeping Services' },
      { icon: <FaChartLine />, text: 'Financial Reporting' },
      { icon: <FaCalculator />, text: 'Expense Tracking' }
    ]
  }
];
