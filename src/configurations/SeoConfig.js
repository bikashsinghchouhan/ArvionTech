// Central SEO config: one entry per indexable route.
// Used by <Seo /> (meta tags), scripts/prerender.js (static HTML) and the sitemap.

import { schoolFaqs } from './SchoolFaqs';

export const SITE_URL = 'https://arviontechnologies.com';
export const SITE_NAME = 'Arvion Technologies';
export const DEFAULT_OG_IMAGE = '/og-image.jpg';

const PHONE = '+91-9535764655';
const EMAIL = 'sales@arviontechnologies.com';

const organization = {
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Arvion Technologies Pvt Ltd',
  alternateName: SITE_NAME,
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
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    email: EMAIL,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Kannada'],
  },
};

const orgRef = { '@id': `${SITE_URL}/#organization` };

const breadcrumb = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: SITE_URL + path,
  })),
});

const servicePage = ({ path, name, serviceType, description, extra = [] }) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name,
      serviceType,
      description,
      url: SITE_URL + path,
      provider: orgRef,
      areaServed: { '@type': 'Country', name: 'India' },
    },
    breadcrumb([['Home', '/'], ['Services', '/services'], [name, path]]),
    ...extra,
  ],
});

export const seoRoutes = [
  {
    path: '/',
    title: 'Arvion Technologies | School ERP, Payroll & Accounting Services in Bangalore',
    description:
      'Arvion Technologies offers school management ERP, payroll outsourcing, accounting and statutory registration services for schools and businesses across India.',
    priority: '1.0',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SITE_NAME,
          publisher: orgRef,
          inLanguage: 'en-IN',
        },
      ],
    },
  },
  {
    path: '/about',
    title: 'About Us | Arvion Technologies',
    description:
      'Learn about Arvion Technologies, a Bangalore-based team building school ERP software and delivering payroll, accounting and compliance services for growing businesses.',
    priority: '0.7',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'AboutPage', url: `${SITE_URL}/about`, name: 'About Arvion Technologies', about: orgRef },
        breadcrumb([['Home', '/'], ['About Us', '/about']]),
      ],
    },
  },
  {
    path: '/services',
    title: 'Our Services | School ERP, Payroll, Accounting & Compliance | Arvion',
    description:
      'Explore Arvion Technologies services: school management ERP, payroll outsourcing, accounting and bookkeeping, and statutory business registrations in India.',
    priority: '0.9',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [breadcrumb([['Home', '/'], ['Services', '/services']])],
    },
  },
  {
    path: '/services/school-management',
    title: 'School Management ERP Software | Arvion Technologies',
    description:
      'Cloud school ERP for admissions, fees, attendance, exams, library and parent communication. Role-based portals, online fee payment and mobile app for schools in India.',
    priority: '0.9',
    schema: servicePage({
      path: '/services/school-management',
      name: 'School Management ERP',
      serviceType: 'School management software',
      description: 'Cloud-based school ERP covering admissions, fees, attendance, exams, library and parent communication.',
      extra: [
        {
          '@type': 'FAQPage',
          mainEntity: schoolFaqs.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        },
      ],
    }),
  },
  {
    path: '/services/outsourcing',
    title: 'Payroll Outsourcing Services in India | Arvion Technologies',
    description:
      'End-to-end payroll outsourcing: salary processing, PF, ESI, PT and TDS compliance, payslips and employee support. Save time and stay compliant with Arvion.',
    priority: '0.9',
    schema: servicePage({
      path: '/services/outsourcing',
      name: 'Payroll Outsourcing',
      serviceType: 'Payroll outsourcing',
      description: 'End-to-end payroll outsourcing with statutory compliance, payslips and employee support.',
    }),
  },
  {
    path: '/services/statutory-registrations',
    title: 'Statutory Business Registrations in India | Arvion Technologies',
    description:
      'Get your business registered right: GST, PF, ESI, Professional Tax, Shops & Establishment, MSME and more. Fast, compliant statutory registrations by Arvion.',
    priority: '0.8',
    schema: servicePage({
      path: '/services/statutory-registrations',
      name: 'Statutory Registrations',
      serviceType: 'Business registration and compliance',
      description: 'Statutory business registrations including GST, PF, ESI, Professional Tax and Shops & Establishment.',
    }),
  },
  {
    path: '/services/accounting',
    title: 'Accounting & Bookkeeping Services | Arvion Technologies',
    description:
      'Accurate bookkeeping, financial statements, expense tracking, budgeting and forecasting. Outsourced accounting services that give you clear financial visibility.',
    priority: '0.8',
    schema: servicePage({
      path: '/services/accounting',
      name: 'Accounting Services',
      serviceType: 'Accounting and bookkeeping',
      description: 'Bookkeeping, financial statement preparation, expense management, budgeting and forecasting.',
    }),
  },
  {
    path: '/services/payroll',
    title: 'Payroll Software (Coming Soon) | Arvion Technologies',
    description:
      'Arvion payroll software is coming soon: multi-branch payroll, statutory compliance, data migration and an employee self-service portal. Join the waitlist.',
    priority: '0.6',
    schema: servicePage({
      path: '/services/payroll',
      name: 'Payroll Software',
      serviceType: 'Payroll software',
      description: 'Upcoming payroll software with multi-branch support, compliance and employee self-service.',
    }),
  },
  {
    path: '/contact',
    title: 'Contact Us | Book a Free Consultation | Arvion Technologies',
    description:
      'Talk to Arvion Technologies about school ERP, payroll, accounting or registrations. Call +91 95357 64655, email sales@arviontechnologies.com or book a consultation.',
    priority: '0.8',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'ContactPage', url: `${SITE_URL}/contact`, name: 'Contact Arvion Technologies', about: orgRef },
        breadcrumb([['Home', '/'], ['Contact', '/contact']]),
      ],
    },
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Arvion Technologies',
    description: 'How Arvion Technologies collects, uses, discloses and protects your personal information.',
    priority: '0.3',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | Arvion Technologies',
    description: 'Terms and conditions for using the Arvion Technologies website and services.',
    priority: '0.3',
  },
];

export const notFoundSeo = {
  path: '/404',
  title: 'Page Not Found | Arvion Technologies',
  description: 'The page you are looking for does not exist.',
  noindex: true,
};

// Aliases that render an existing page; canonical points to the main URL.
const aliases = { '/contact-us': '/contact' };

export const getSeoForPath = (pathname) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const path = aliases[clean] || clean;
  return seoRoutes.find((r) => r.path === path) || notFoundSeo;
};
