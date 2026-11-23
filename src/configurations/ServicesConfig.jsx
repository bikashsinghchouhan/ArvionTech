import React from 'react';
import { FaSchool, FaUsers, FaStamp, FaBook } from 'react-icons/fa';

// The four main services: shown as cards on /services (and on the home page when it embeds Services).
// `vertical` is the business vertical from the header; `features` are the four highlights on each card.
export const servicesData = [
    {
        id: 'school',
        vertical: 'Education',
        icon: <FaSchool />,
        title: 'School Management System',
        summary: 'A cloud School ERP that runs admissions, academics, attendance, fees, exams and school communication in one place.',
        features: ['Admissions & student records', 'Attendance & timetables', 'Fees & online payments', 'Exams & report cards'],
        path: '/services/school-management',
        cta: 'Explore School ERP',
    },
    {
        id: 'outsourcing',
        vertical: 'People',
        icon: <FaUsers />,
        title: 'Payroll Outsourcing',
        summary: 'End-to-end monthly payroll with statutory compliance, payslips, tax management and detailed reports.',
        features: ['Monthly payroll processing', 'Payslips & employee services', 'PF, ESI, PT & TDS compliance', 'Payroll reports & MIS'],
        path: '/services/outsourcing',
        cta: 'Explore Payroll',
    },
    {
        id: 'registrations',
        vertical: 'Compliance',
        icon: <FaStamp />,
        title: 'Statutory Registrations',
        summary: 'Company setup, tax registrations and licences handled end to end, so your business starts and stays compliant.',
        features: ['Company incorporation', 'GST & tax registrations', 'PF, ESI & professional tax', 'Trademark & IP registration'],
        path: '/services/statutory-registrations',
        cta: 'Explore Registrations',
    },
    {
        id: 'accounting',
        vertical: 'Finance',
        icon: <FaBook />,
        title: 'Accounting Services',
        summary: 'Bookkeeping, financial statements and tax filings done on time, with monthly reports you can plan with.',
        features: ['Bookkeeping & general ledger', 'Financial statements', 'GST, TDS & income tax returns', 'ROC annual compliance'],
        path: '/services/accounting',
        cta: 'Explore Accounting',
    },
];
