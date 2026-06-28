import React from 'react';
import { FaSchool, FaUsers, FaStamp, FaBook } from 'react-icons/fa';

export const servicesData = [
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