// Content for the About Us page (src/pages/AboutUs.jsx + src/components/about/AboutSections.jsx).
// Edit text here; the layout picks it up automatically.

export const aboutContact = {
  phone: '+91 9535764655',
  email: 'sales@arviontechnologies.com',
};

// 1. Who we are
export const whoWeAre = {
  paragraphs: [
    'Arvion Technologies Private Limited is a Bengaluru-based technology and business services company. We build School ERP software and run payroll, statutory registration and accounting services for schools, colleges and growing businesses across India.',
    'We started with one simple idea: the people running a school or a company should spend their time on teaching and growth, not on paperwork. So we combine practical software with an expert team that handles the compliance work behind it.',
  ],
  highlights: [
    { key: 'office', title: 'Head office', text: 'Ganganagar, Bengaluru' },
    { key: 'areas', title: '4 practice areas', text: 'Education, People, Compliance, Finance' },
    { key: 'modules', title: '33+ ERP modules', text: 'From admissions to transport' },
    { key: 'languages', title: 'Local support', text: 'English, Hindi and Kannada' },
  ],
};

// 2. Vision, mission and values
export const visionMission = {
  vision: 'To create simple, reliable and compliant solutions that help organisations operate efficiently.',
  mission: 'To deliver practical and value-driven technology and outsourcing services with long-term support.',
  missionPoints: ['Easy-to-use software', 'Expert compliance team', 'Support after go-live'],
  visionPoints: ['Less paperwork', 'Fewer compliance risks', 'Better decisions with data'],
};

export const coreValues = [
  { title: 'Innovation', desc: 'Continuous improvement and automated operations through cutting-edge cloud software solutions.' },
  { title: 'Collaboration', desc: 'We work hand-in-hand with administrative, HR, and finance leaders to craft bespoke system designs.' },
  { title: 'Reliability', desc: 'Consistently delivering tax-compliant, secure records that guarantee clean and audit-ready bookkeeping.' },
  { title: 'Impact', desc: 'Empowering school and office operations with digital billing structures and automated tax calculations.' },
];

// 3. What we do
export const whatWeDo = [
  {
    key: 'school',
    vertical: 'Education',
    title: 'School ERP',
    desc: 'Cloud ERP for admissions, attendance, fees, exams, transport and parent communication, with portals for admins, teachers, students and parents.',
    points: ['33+ modules', 'Web and mobile', 'Multi-branch ready'],
    path: '/services/school-management',
  },
  {
    key: 'payroll',
    vertical: 'People',
    title: 'Payroll Outsourcing',
    desc: 'End-to-end monthly payroll: salary processing, payslips, PF, ESI, PT and TDS compliance, and employee query support.',
    points: ['Accurate payslips', 'Statutory filings', 'Employee support'],
    path: '/services/outsourcing',
  },
  {
    key: 'statutory',
    vertical: 'Compliance',
    title: 'Statutory Registrations',
    desc: 'Company incorporation, GST, PAN, TAN, PF, ESI, Professional Tax, IEC and trademark registrations handled for you.',
    points: ['Entity setup', 'Tax registrations', 'Licences and IP'],
    path: '/services/statutory-registrations',
  },
  {
    key: 'accounting',
    vertical: 'Finance',
    title: 'Accounting Services',
    desc: 'Bookkeeping, MIS reports, financial statements, GST returns and forecasting, so your books are always audit-ready.',
    points: ['Monthly bookkeeping', 'MIS reports', 'Returns and audits'],
    path: '/services/accounting',
  },
];

// 4. Why choose Arvion
export const whyChoose = [
  { key: 'partner', title: 'One partner, end to end', desc: 'Software and the services around it from one team, so nothing falls between vendors.' },
  { key: 'compliance', title: 'Built for Indian compliance', desc: 'PF, ESI, PT, TDS and GST rules are part of how we work, not an afterthought.' },
  { key: 'secure', title: 'Secure cloud platform', desc: 'Role-based access, encrypted data and automated backups keep your records safe.' },
  { key: 'scalable', title: 'Scales with you', desc: 'Start with the modules you need and add more, from one campus to many branches.' },
  { key: 'onboarding', title: 'Guided onboarding', desc: 'We configure, migrate your data and train your staff before you go live.' },
  { key: 'support', title: 'Local, responsive support', desc: 'A Bengaluru team that answers in English, Hindi and Kannada.' },
];

// 5. Journey
// TODO: add the real year for each milestone in `year` (e.g. '2021'). When `year` is empty the phase label is shown.
export const journey = [
  { year: '', label: 'The beginning', title: 'Founded in Bengaluru', desc: 'Arvion Technologies started with a goal to make school and business operations simpler.' },
  { year: '', label: 'Product', title: 'School ERP launched', desc: 'A cloud ERP for admissions, attendance, fees and exams, built with schools.' },
  { year: '', label: 'Services', title: 'Payroll and compliance', desc: 'Payroll outsourcing and statutory registrations added for growing businesses.' },
  { year: '', label: 'Finance', title: 'Accounting services', desc: 'Bookkeeping, MIS and returns so clients have one partner for their numbers.' },
  { year: '', label: 'Today', title: 'Four practice areas', desc: 'Education, People, Compliance and Finance for clients across India.' },
];

// 6. Leadership
// TODO: add real leaders here to show profile cards, e.g.
// { name: 'Full Name', role: 'Founder & CEO', photo: '/team/name.webp', linkedin: 'https://linkedin.com/in/...' }
// While this list is empty, the section shows the teams and the leadership message instead.
export const leaders = [];

export const leadershipTeams = [
  { key: 'product', title: 'Product & Engineering', desc: 'Designs and builds the School ERP and keeps it secure and fast.' },
  { key: 'payroll', title: 'Payroll & Compliance', desc: 'Runs payroll and statutory filings on time, every month.' },
  { key: 'finance', title: 'Accounting & Finance', desc: 'Keeps client books clean, reconciled and audit-ready.' },
  { key: 'success', title: 'Customer Success', desc: 'Onboards, trains and supports every client after go-live.' },
];

export const leadershipMessage = {
  quote: 'Our mission is to remove administrative overhead from dedicated teams. By combining robust automation software with expert compliance directives, we ensure your organisation scales on solid ground.',
  author: 'The Arvion Leadership Team',
};
