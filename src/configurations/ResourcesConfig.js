// Content for the Resources pages: Blog, Downloads, FAQs and Case Studies.
// Edit text here; the pages and SEO entries pick it up automatically.
import { schoolFaqs } from './SchoolFaqs';

export const RESOURCES_EMAIL = 'sales@arviontechnologies.com';

/* ------------------------------------------------------------------ Blog */
// Each post gets its own page at /blog/<slug>.
export const blogPosts = [
  {
    slug: 'how-to-choose-a-school-erp',
    category: 'School ERP',
    title: 'How to Choose the Right School ERP: A Practical Checklist',
    excerpt: 'Modules, roles, data security, training and support: what to check before your school signs up for an ERP.',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Start with the problems you want to solve',
        paragraphs: [
          'Before comparing vendors, list the tasks that take your staff the most time today: fee collection and reminders, attendance registers, report cards, timetables or parent communication. A good ERP should remove those first.',
          'Ask each vendor to demo your real workflows, not a generic tour. If a module cannot handle your fee structure or grading pattern, it will create work instead of saving it.',
        ],
      },
      {
        heading: 'Check the core modules',
        bullets: [
          'Admissions and student profiles from enquiry to transfer certificate',
          'Attendance for students and staff, on web and mobile',
          'Fee management with instalments, concessions, late fines and online payment',
          'Examinations, marks entry, grading and report cards',
          'Timetable, transport, library and inventory if your school needs them',
          'Notices and alerts to parents by SMS, email and app',
        ],
      },
      {
        heading: 'Look at roles and data security',
        paragraphs: [
          'Principals, teachers, accountants, parents and students should each see only what their role allows. Ask how access is controlled, how data is backed up, and who can export student records.',
          'For multi-branch schools, confirm that each campus keeps its own data while management gets a combined view.',
        ],
      },
      {
        heading: 'Plan the rollout, not just the purchase',
        paragraphs: [
          'Ask who will import your existing data, how teachers and office staff will be trained, and what support looks like after go-live. A phased rollout, starting with admissions, attendance and fees, usually works better than switching everything on at once.',
        ],
      },
    ],
    cta: { label: 'See Arvion School ERP', to: '/services/school-management' },
  },
  {
    slug: 'payroll-compliance-basics-pf-esi-pt-tds',
    category: 'Payroll',
    title: 'Payroll Compliance Basics: PF, ESI, PT and TDS Explained',
    excerpt: 'A plain-language overview of the statutory deductions every growing Indian business needs to manage each month.',
    readTime: '7 min read',
    sections: [
      {
        heading: 'Why payroll compliance matters',
        paragraphs: [
          'Running payroll is more than paying salaries. Each month an employer has to calculate statutory deductions correctly, deposit them on time and file returns. Late or wrong filings can lead to interest, penalties and unhappy employees.',
        ],
      },
      {
        heading: 'Provident Fund (PF)',
        paragraphs: [
          'EPF generally applies to establishments with 20 or more employees. Both employer and employee contribute a share of basic wages plus dearness allowance, and the money is deposited with the EPFO through monthly challans and returns.',
        ],
      },
      {
        heading: "Employees' State Insurance (ESI)",
        paragraphs: [
          'ESI covers employees earning up to the notified wage limit (currently ₹21,000 a month) in establishments that fall under the scheme, typically those with 10 or more employees. It provides medical and cash benefits, funded by employer and employee contributions.',
        ],
      },
      {
        heading: 'Professional Tax (PT) and TDS',
        paragraphs: [
          'Professional Tax is a state tax on employment. Rates and slabs differ from state to state, and some states do not levy it at all.',
          'TDS on salary is the income tax an employer deducts every month based on each employee’s projected annual income, chosen tax regime and declared investments. It is deposited monthly and reported in quarterly returns, with Form 16 issued to employees after the year ends.',
        ],
      },
      {
        heading: 'Keeping it under control',
        bullets: [
          'Keep employee master data (PAN, UAN, bank details) complete and up to date',
          'Lock attendance and leave before running payroll',
          'Use a compliance calendar for every due date',
          'Reconcile deposits with returns every month',
        ],
        paragraphs: [
          'Rules and thresholds change from time to time, so always check the latest notifications or speak to a payroll specialist before acting.',
        ],
      },
    ],
    cta: { label: 'Explore Payroll Outsourcing', to: '/services/outsourcing' },
  },
  {
    slug: 'gst-registration-checklist',
    category: 'Compliance',
    title: 'GST Registration: Who Needs It and What Documents to Keep Ready',
    excerpt: 'Turnover thresholds, common document checklists and the mistakes that delay GST registration.',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Who needs to register',
        paragraphs: [
          'A business must register for GST once its aggregate turnover crosses the threshold for its state and type of supply. For most states the limit is ₹40 lakh for suppliers of goods and ₹20 lakh for suppliers of services, with lower limits in some special category states.',
          'Some businesses must register regardless of turnover, for example those making inter-state taxable supplies of goods or selling through e-commerce operators.',
        ],
      },
      {
        heading: 'Documents usually required',
        bullets: [
          'PAN of the business and of the proprietor, partners or directors',
          'Aadhaar and photographs of the promoters',
          'Proof of business constitution (partnership deed, incorporation certificate)',
          'Proof of principal place of business and an NOC from the owner if rented',
          'Bank account details such as a cancelled cheque or statement',
        ],
      },
      {
        heading: 'Common reasons for delays',
        paragraphs: [
          'Mismatched names or addresses across documents, unclear address proofs and incomplete authorisation letters are the most common reasons applications are queried. Checking every document before filing saves weeks.',
        ],
      },
    ],
    cta: { label: 'Explore Statutory Registrations', to: '/services/statutory-registrations' },
  },
  {
    slug: 'monthly-bookkeeping-checklist',
    category: 'Accounting',
    title: 'A Monthly Bookkeeping Checklist for Small Businesses',
    excerpt: 'Ten tasks that keep your books clean, your cash flow visible and your year-end stress-free.',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Why a monthly routine works',
        paragraphs: [
          'Small errors pile up quickly when books are updated only at year end. A short monthly routine keeps records accurate, makes tax filing easier and gives you numbers you can actually use to run the business.',
        ],
      },
      {
        heading: 'The checklist',
        bullets: [
          'Record every sale and purchase invoice',
          'Reconcile each bank and card account with its statement',
          'Follow up on unpaid customer invoices',
          'Schedule supplier payments by due date',
          'Categorise expenses and attach receipts',
          'Run payroll entries and statutory deductions',
          'Reconcile GST input credit with your purchase records',
          'Review the profit and loss statement against last month',
          'Check cash flow for the next 30 to 60 days',
          'Back up your accounting data',
        ],
      },
      {
        heading: 'When to get help',
        paragraphs: [
          'If reconciliations are months behind or you spend more time on books than on customers, outsourcing bookkeeping is usually cheaper than the mistakes and delays it prevents.',
        ],
      },
    ],
    cta: { label: 'Explore Accounting Services', to: '/services/accounting' },
  },
];

/* --------------------------------------------------------------- Downloads */
// No files are hosted yet, so each item is requested by email.
// To offer a direct download, add `file: '/downloads/name.pdf'` (put the file in public/downloads).
export const downloads = [
  { key: 'erp-brochure', category: 'School ERP', title: 'School ERP Brochure', desc: 'Overview of modules, portals and how onboarding works.', format: 'PDF' },
  { key: 'erp-plans', category: 'School ERP', title: 'Plans & Feature Comparison', desc: 'What each plan includes, side by side.', format: 'PDF' },
  { key: 'payroll-calendar', category: 'Payroll', title: 'Payroll Compliance Calendar', desc: 'Monthly and quarterly due dates for PF, ESI, PT and TDS.', format: 'PDF' },
  { key: 'incorporation-checklist', category: 'Compliance', title: 'Company Registration Document Checklist', desc: 'Documents to keep ready for incorporation and GST.', format: 'PDF' },
  { key: 'bookkeeping-checklist', category: 'Accounting', title: 'Monthly Bookkeeping Checklist', desc: 'A printable version of our monthly bookkeeping routine.', format: 'PDF' },
  { key: 'company-profile', category: 'Company', title: 'Arvion Company Profile', desc: 'Who we are, what we do and how we work.', format: 'PDF' },
];

/* -------------------------------------------------------------------- FAQs */
export const faqGroups = [
  {
    key: 'general',
    label: 'General',
    items: [
      { q: 'What does Arvion Technologies do?', a: 'We build School ERP software and provide payroll outsourcing, statutory registration and accounting services for schools, colleges and businesses across India.' },
      { q: 'Where are you located?', a: 'Our office is in Ganganagar, Bengaluru, and we work with clients across India.' },
      { q: 'How is pricing decided?', a: 'Pricing depends on your institution or business size and the services you need. Contact us for a quote tailored to your requirements.' },
      { q: 'Which languages does your support team speak?', a: 'Our team supports clients in English, Hindi and Kannada.' },
      { q: 'How do I book a demo or consultation?', a: 'Use the Request Demo button or the Contact Us page. Our team will get back to you within one working day.' },
    ],
  },
  { key: 'school', label: 'School ERP', items: schoolFaqs },
  {
    key: 'payroll',
    label: 'Payroll',
    items: [
      { q: 'How is salary calculated?', a: 'Salary is calculated automatically based on attendance, predefined components, tax brackets, and any deductions or bonuses configured for the employee.' },
      { q: 'Can I generate bank transfer files?', a: 'Yes, our system generates ready-to-upload bank transfer files (like NEFT, RTGS) compatible with most major banks.' },
      { q: 'Does it support biometric attendance?', a: 'Absolutely. We seamlessly integrate with biometric devices and leading HRMS systems for accurate time tracking.' },
      { q: 'Can employees download payslips?', a: 'Yes, employees have access to a self-service portal where they can view and download their monthly payslips and tax sheets.' },
      { q: 'Is tax calculation automatic?', a: 'Yes, tax calculations (TDS, PF, PT, etc.) are 100% automated and stay compliant with the latest government regulations.' },
      { q: 'Does it support multiple branches?', a: 'Yes, our system is designed to handle multiple branches, regions, and even different tax rules per location.' },
    ],
  },
  {
    key: 'statutory',
    label: 'Statutory Registrations',
    items: [
      { q: 'What documents are required for company incorporation?', a: 'Generally, you will need ID proofs (PAN, Aadhaar/Passport), address proofs, and photographs of the directors, along with proof of the registered office address.' },
      { q: 'How long does it take to register a new company?', a: 'With all documents in place, the entire incorporation process usually takes 7 to 15 working days, depending on government processing times.' },
      { q: 'Do I need a commercial space to register my company?', a: 'No, you can register your company at a residential address. You only need a NOC from the owner and a utility bill as proof of address.' },
      { q: 'What is the difference between a Private Limited Company and an LLP?', a: 'A Private Limited Company offers shares and is suitable for startups seeking funding. An LLP offers the benefits of limited liability but is structured more flexibly like a partnership, often with fewer compliance requirements.' },
      { q: 'Do you handle post-incorporation compliances?', a: 'Yes, we offer complete post-incorporation support including PAN/TAN applications, bank account opening assistance, GST registration, and ongoing annual compliances.' },
    ],
  },
  {
    key: 'accounting',
    label: 'Accounting',
    items: [
      { q: 'What accounting software do you support?', a: 'We are proficient in a wide range of leading accounting platforms including QuickBooks, Xero, Zoho Books, and Tally.' },
      { q: 'How often will I receive financial reports?', a: 'We provide detailed financial reports on a monthly basis. However, we can also customize reporting frequency (weekly or quarterly) based on your specific business needs.' },
      { q: 'Are your accounting services compliant with tax laws?', a: 'Yes, our team of experts stays completely up-to-date with all local, state, and federal tax regulations to ensure 100% compliance and avoid any penalties.' },
      { q: 'Can you help with historical cleanup of my books?', a: 'Absolutely. We offer catch-up and cleanup services to organize your past financial records, reconcile accounts, and bring your books entirely up to date.' },
      { q: 'How secure is my financial data?', a: 'We take data security very seriously. We use enterprise-grade encryption, secure servers, and strict access controls to ensure your sensitive financial information is always protected.' },
    ],
  },
];

/* ------------------------------------------------------------ Case studies */
// These are illustrative scenarios based on common client situations, not named client stories.
// Replace them with real case studies (with client permission) when available.
export const caseStudies = [
  {
    key: 'multi-branch-school',
    category: 'School ERP',
    title: 'Bringing a multi-branch school group onto one system',
    client: 'K-12 school group with several campuses',
    challenge: 'Each campus kept its own spreadsheets for admissions, fees and attendance. Management had no combined view, and month-end fee reconciliation took days.',
    solution: [
      'Configured one ERP with a separate data space for every campus',
      'Migrated student records and fee structures from spreadsheets',
      'Set up online fee payment with automatic receipts and reminders',
      'Trained office staff and teachers campus by campus',
    ],
    outcome: 'Management sees admissions, collections and attendance across all campuses on one dashboard, and parents receive fee reminders and notices automatically.',
  },
  {
    key: 'startup-payroll',
    category: 'Payroll',
    title: 'Taking payroll off a growing startup’s plate',
    client: 'Technology startup with a fast-growing team',
    challenge: 'The founders ran payroll in spreadsheets. As headcount grew, PF and TDS calculations, payslips and investment declarations started to slip.',
    solution: [
      'Set up salary structures and statutory registrations',
      'Monthly payroll run with payslips and bank transfer files',
      'PF, ESI, PT and TDS deposits and returns on a compliance calendar',
      'Employee query support and year-end Form 16',
    ],
    outcome: 'Payroll runs on a fixed monthly schedule, filings are on time, and the founders no longer spend evenings on salary sheets.',
  },
  {
    key: 'new-company-setup',
    category: 'Compliance',
    title: 'From idea to registered company, ready to trade',
    client: 'First-time founders setting up a private limited company',
    challenge: 'The founders were unsure which entity type to choose and which registrations they needed before opening a bank account and invoicing customers.',
    solution: [
      'Advised on Private Limited vs LLP for their funding plans',
      'Handled name approval and incorporation',
      'Applied for PAN, TAN and GST registration',
      'Set up a calendar for annual compliances',
    ],
    outcome: 'The company was incorporated and GST-registered with a clear list of what to file and when.',
  },
  {
    key: 'books-cleanup',
    category: 'Accounting',
    title: 'Cleaning up a year of overdue books',
    client: 'Trading business with months of unreconciled accounts',
    challenge: 'Bank statements had not been reconciled for months, GST input credit did not match purchase records, and the annual filing deadline was close.',
    solution: [
      'Catch-up bookkeeping and bank reconciliation',
      'Matched GST input credit with purchase invoices',
      'Prepared financial statements for filing',
      'Moved the business to a monthly bookkeeping routine with MIS reports',
    ],
    outcome: 'The books were brought up to date before the deadline, and the owner now gets a monthly report on profit, receivables and cash flow.',
  },
];
