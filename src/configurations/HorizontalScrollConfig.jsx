import React from 'react';
import { 
  FaCalendarAlt, FaCheckCircle, FaChartBar, FaGlobe, FaPuzzlePiece, FaClock, 
  FaStamp, FaFileSignature, FaBuilding, FaBook, FaChartLine, FaCalculator 
} from 'react-icons/fa';

import schoolImg from '../assets/service-school.png';
import outsourcingImg from '../assets/service-outsourcing.png';
import registrationsImg from '../assets/service-registrations.png';
import accountingImg from '../assets/service-accounting.png';

export const services = [
  {
    title: 'School Management System',
    badge: 'ERP Solutions',
    category: 'Education & Administration',
    description: 'Transform institutional administration with an enterprise-grade academic platform. Seamlessly automate attendance protocols, optimize complex grading matrices, and elevate stakeholder communication.',
    image: schoolImg,
    path: '/services/school-management',
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
    path: '/services/outsourcing',
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
    path: '/services/registrations',
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
    path: '/services/accounting',
    stats: [
      { icon: <FaBook />, text: 'Bookkeeping Services' },
      { icon: <FaChartLine />, text: 'Financial Reporting' },
      { icon: <FaCalculator />, text: 'Expense Tracking' }
    ]
  }
];
