// Central SEO config: one entry per indexable route.
// Used by <Seo /> (meta tags), scripts/prerender.js (static HTML) and the sitemap.
// Keyword targets for each page are documented in docs/seo-keyword-map.md.
//
// FAQPage schema for pages that show a <FaqSection /> is emitted by FaqSection itself,
// so the schema always matches the questions on the page. Only /faqs builds it here.

import { blogPosts, faqGroups } from './ResourcesConfig';

export const SITE_URL = 'https://arviontechnologies.com';
export const SITE_NAME = 'Arvion Technologies';
export const DEFAULT_OG_IMAGE = '/og-image.jpg';

const PHONE = '+91-9535764655';
const EMAIL = 'sales@arviontechnologies.com';
const ORG_ID = `${SITE_URL}/#organization`;
const orgRef = { '@id': ORG_ID };

const areaServed = [
  { '@type': 'City', name: 'Bengaluru' },
  { '@type': 'State', name: 'Karnataka' },
  { '@type': 'Country', name: 'India' },
];

// Service pages: used for the Service schema on each page and the OfferCatalog on the organization.
const SERVICES = {
  school: {
    path: '/services/school-management',
    name: 'School Management ERP Software',
    serviceType: 'School management software',
    description:
      'Cloud school ERP for admissions, fee management, attendance, exams and report cards, timetable, transport and library, with student and teacher portals and a mobile app.',
  },
  payroll: {
    path: '/services/outsourcing',
    name: 'Payroll Outsourcing Services',
    serviceType: 'Payroll outsourcing',
    description:
      'Monthly salary processing, payslips, PF, ESI, Professional Tax, TDS and Form 16, statutory filings and an employee helpdesk for companies and schools across India.',
  },
  accounting: {
    path: '/services/accounting',
    name: 'Accounting and Bookkeeping Services',
    serviceType: 'Accounting and bookkeeping',
    description:
      'Outsourced bookkeeping, GST return filing, TDS returns, ROC annual filings, financial statements and monthly MIS reports for small businesses, startups and schools.',
  },
  registrations: {
    path: '/services/statutory-registrations',
    name: 'Statutory Registration Services',
    serviceType: 'Business registration and compliance',
    description:
      'Company, LLP and partnership registration, GST registration, PF and ESI registration, Professional Tax, Shops and Establishment licence, MSME Udyam, trade licence and FSSAI.',
  },
};

const organization = {
  '@type': ['Organization', 'LocalBusiness'],
  '@id': ORG_ID,
  name: 'Arvion Technologies Pvt Ltd',
  alternateName: SITE_NAME,
  description:
    'Bangalore company providing school management ERP software, payroll outsourcing, accounting and bookkeeping, and statutory business registration services across India.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  email: EMAIL,
  telephone: PHONE,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'IBLUE Entertainment, #62/1, New No 7, Ground Floor, 1st Cross, 2nd Main, Ganganagar',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560032',
    addressCountry: 'IN',
  },
  areaServed,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    email: EMAIL,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Kannada'],
  },
  sameAs: ['https://wa.me/919535764655'],
  knowsAbout: [
    'School management software',
    'School ERP',
    'Payroll outsourcing',
    'PF and ESI compliance',
    'Accounting and bookkeeping',
    'GST registration and returns',
    'Company registration',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Arvion Technologies services',
    itemListElement: Object.values(SERVICES).map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, url: SITE_URL + s.path },
    })),
  },
};

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  // Site name Google shows above the result (instead of the bare domain).
  name: SITE_NAME,
  alternateName: ['Arvion Technologies Pvt Ltd', 'Arvion', 'arviontechnologies.com'],
  publisher: orgRef,
  inLanguage: 'en-IN',
};

const breadcrumb = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: SITE_URL + path,
  })),
});

// Every page gets: Organization/LocalBusiness, its WebPage node, BreadcrumbList and any extra nodes.
const pageSchema = ({ path, type = 'WebPage', name, crumbs, pageProps = {}, extra = [] }) => ({
  '@context': 'https://schema.org',
  '@graph': [
    organization,
    {
      '@type': type,
      '@id': `${SITE_URL}${path}#webpage`,
      url: SITE_URL + path,
      name,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: orgRef,
      inLanguage: 'en-IN',
      ...pageProps,
    },
    ...(crumbs ? [breadcrumb(crumbs)] : []),
    ...extra,
  ],
});

const serviceNode = (s) => ({
  '@type': 'Service',
  '@id': `${SITE_URL}${s.path}#service`,
  name: s.name,
  serviceType: s.serviceType,
  description: s.description,
  url: SITE_URL + s.path,
  provider: orgRef,
  areaServed,
});

const servicePage = (key, extra = []) => {
  const s = SERVICES[key];
  return pageSchema({
    path: s.path,
    name: s.name,
    crumbs: [['Home', '/'], ['Services', '/services'], [s.name, s.path]],
    extra: [serviceNode(s), ...extra],
  });
};

// Monthly plan prices from SchoolManagementConfig.jsx (Basic, Standard, Premium). Keep in sync.
const schoolErpApp = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/services/school-management#software`,
  name: 'Arvion School ERP',
  alternateName: 'Arvion School Management Software',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'School management software',
  operatingSystem: 'Web browser, Android',
  url: `${SITE_URL}/services/school-management`,
  description: SERVICES.school.description,
  featureList: [
    'Online admission and enrollment',
    'Student information management',
    'Fee management with online payment',
    'Student and staff attendance',
    'Exams, marks entry and report cards',
    'Timetable management',
    'Library and inventory management',
    'Transport management',
    'Student and teacher portals',
    'SMS, WhatsApp and app notifications',
    'Teacher payroll processing',
  ],
  provider: orgRef,
  publisher: orgRef,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '5000',
    highPrice: '12500',
    offerCount: '3',
    description: 'Monthly plans billed annually',
  },
};

export const seoRoutes = [
  {
    path: '/',
    title: 'Arvion Technologies | School ERP, Payroll, Accounting & Registration',
    description:
      'Arvion Technologies, Bangalore: school management ERP software, payroll outsourcing, accounting and GST, PF, ESI and company registration services across India.',
    priority: '1.0',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        website,
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: 'School ERP Software & Payroll Services in Bangalore',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: orgRef,
          inLanguage: 'en-IN',
        },
      ],
    },
  },
  {
    path: '/about',
    title: 'About Arvion Technologies | School ERP & Payroll Firm, Bangalore',
    description:
      'Arvion Technologies is a Bangalore team building school ERP software and delivering payroll outsourcing, accounting and compliance services to schools and businesses.',
    priority: '0.7',
    schema: pageSchema({
      path: '/about',
      type: 'AboutPage',
      name: 'About Arvion Technologies',
      crumbs: [['Home', '/'], ['About Us', '/about']],
    }),
  },
  {
    path: '/services',
    title: 'School ERP, Payroll, Accounting & Registration Services | Arvion',
    description:
      'All Arvion services in one place: school management ERP, payroll outsourcing, bookkeeping and GST filing, and company, GST, PF and ESI registration in Bangalore.',
    priority: '0.9',
    schema: pageSchema({
      path: '/services',
      type: 'CollectionPage',
      name: 'Arvion Technologies Services',
      crumbs: [['Home', '/'], ['Services', '/services']],
      extra: [
        {
          '@type': 'ItemList',
          name: 'Services',
          itemListElement: Object.values(SERVICES).map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.name,
            url: SITE_URL + s.path,
          })),
        },
      ],
    }),
  },
  {
    path: '/services/school-management',
    title: 'School Management Software & ERP in India | Arvion School ERP',
    description:
      'Cloud school ERP software for admissions, fees, attendance, exams and report cards, with student and teacher apps. Book a free demo for your school in India.',
    priority: '0.9',
    schema: servicePage('school', [schoolErpApp]),
  },
  {
    path: '/services/outsourcing',
    title: 'Payroll Outsourcing Services in Bangalore & India | Arvion',
    description:
      'Payroll outsourcing in Bangalore: salary processing, payslips, PF, ESI, PT and TDS filing, Form 16 and an employee helpdesk. Accurate, on-time and fully compliant.',
    priority: '0.9',
    schema: servicePage('payroll'),
  },
  {
    path: '/services/statutory-registrations',
    title: 'Company, GST, PF & ESI Registration in Bangalore | Arvion',
    description:
      'Private limited, LLP, GST, PF, ESI, Professional Tax, Shops & Establishment, MSME Udyam and FSSAI registration in Bangalore. Fast, document-ready, fully online.',
    priority: '0.8',
    schema: servicePage('registrations'),
  },
  {
    path: '/services/accounting',
    title: 'Accounting & Bookkeeping Services in Bangalore | Arvion',
    description:
      'Outsourced accounting and bookkeeping in Bangalore: GST and TDS returns, ROC filings, financial statements and monthly MIS on Tally, Zoho Books or QuickBooks.',
    priority: '0.8',
    schema: servicePage('accounting'),
  },
  {
    path: '/contact',
    title: 'Contact Arvion Technologies | School ERP & Payroll, Bangalore',
    description:
      'Book a free school ERP demo or a payroll, accounting or registration consultation. Call +91 95357 64655 or email sales@arviontechnologies.com. Ganganagar, Bangalore.',
    priority: '0.8',
    schema: pageSchema({
      path: '/contact',
      type: 'ContactPage',
      name: 'Contact Arvion Technologies',
      crumbs: [['Home', '/'], ['Contact', '/contact']],
    }),
  },
  {
    path: '/blog',
    title: 'School ERP, Payroll & GST Compliance Guides | Arvion Blog',
    description:
      'Practical guides on choosing school ERP software, payroll compliance (PF, ESI, PT, TDS), GST registration and bookkeeping for schools and small businesses in India.',
    priority: '0.6',
    schema: pageSchema({
      path: '/blog',
      type: 'CollectionPage',
      name: 'Arvion Technologies Blog',
      crumbs: [['Home', '/'], ['Blog', '/blog']],
      extra: [{ '@type': 'Blog', url: `${SITE_URL}/blog`, name: 'Arvion Technologies Blog', publisher: orgRef }],
    }),
  },
  ...blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    title: `${p.title} | Arvion`,
    description: p.excerpt,
    priority: '0.5',
    schema: pageSchema({
      path: `/blog/${p.slug}`,
      name: p.title,
      crumbs: [['Home', '/'], ['Blog', '/blog'], [p.title, `/blog/${p.slug}`]],
      extra: [
        {
          '@type': 'BlogPosting',
          headline: p.title,
          description: p.excerpt,
          url: `${SITE_URL}/blog/${p.slug}`,
          mainEntityOfPage: { '@id': `${SITE_URL}/blog/${p.slug}#webpage` },
          image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
          author: orgRef,
          publisher: orgRef,
          articleSection: p.category,
          inLanguage: 'en-IN',
        },
      ],
    }),
  })),
  {
    path: '/downloads',
    title: 'School ERP Brochure, Payroll Calendar & Checklists | Arvion',
    description:
      'Download the Arvion School ERP brochure and plan comparison, a PF, ESI, PT and TDS payroll compliance calendar, and company registration and bookkeeping checklists.',
    priority: '0.4',
    schema: pageSchema({
      path: '/downloads',
      name: 'Downloads',
      crumbs: [['Home', '/'], ['Downloads', '/downloads']],
    }),
  },
  {
    path: '/faqs',
    title: 'FAQs: School ERP, Payroll, Registrations & Accounting | Arvion',
    description:
      'Answers about Arvion School ERP, payroll outsourcing, PF and ESI compliance, company and GST registration, and accounting services for schools and businesses.',
    priority: '0.6',
    schema: pageSchema({
      path: '/faqs',
      type: 'FAQPage',
      name: 'Frequently Asked Questions',
      crumbs: [['Home', '/'], ['FAQs', '/faqs']],
      pageProps: {
        mainEntity: faqGroups.flatMap((g) => g.items).map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    }),
  },
  {
    path: '/case-studies',
    title: 'Case Studies: School ERP, Payroll & Compliance Clients | Arvion',
    description:
      'How Arvion helps schools and businesses: a multi-branch school ERP rollout, payroll outsourcing for a startup, company registration and a year of books cleaned up.',
    priority: '0.5',
    schema: pageSchema({
      path: '/case-studies',
      type: 'CollectionPage',
      name: 'Case Studies',
      crumbs: [['Home', '/'], ['Case Studies', '/case-studies']],
    }),
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Arvion Technologies',
    description:
      'How Arvion Technologies Pvt Ltd collects, uses, discloses and protects your personal information when you use our website, school ERP and business services.',
    priority: '0.3',
    schema: pageSchema({
      path: '/privacy-policy',
      name: 'Privacy Policy',
      crumbs: [['Home', '/'], ['Privacy Policy', '/privacy-policy']],
    }),
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | Arvion Technologies',
    description:
      'Terms and conditions for using the Arvion Technologies website, Arvion School ERP and our payroll, accounting and statutory registration services.',
    priority: '0.3',
    schema: pageSchema({
      path: '/terms-of-service',
      name: 'Terms of Service',
      crumbs: [['Home', '/'], ['Terms of Service', '/terms-of-service']],
    }),
  },
];

export const notFoundSeo = {
  path: '/404',
  title: 'Page Not Found | Arvion Technologies',
  description: 'The page you are looking for does not exist.',
  noindex: true,
};

// Aliases that render or redirect to an existing page; canonical points to the main URL.
// /services/payroll used to render the same page as /services/outsourcing (duplicate content).
const aliases = { '/contact-us': '/contact', '/services/payroll': '/services/outsourcing' };

export const getSeoForPath = (pathname) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const path = aliases[clean] || clean;
  return seoRoutes.find((r) => r.path === path) || notFoundSeo;
};
