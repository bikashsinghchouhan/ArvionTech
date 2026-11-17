import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import LegalPage from '../components/legal/LegalPage';

const LAST_UPDATED = '17 November 2026';
const EMAIL = 'sales@arviontechnologies.com';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of terms',
    content: (
      <>
        <p>
          Welcome to Arvion Technologies. These Terms of Service (<strong>"Terms"</strong>) form a legal agreement
          between you and Arvion Technologies Private Limited (<strong>"Arvion"</strong>, "we", "us", "our"), a
          company incorporated in India with its office in Bangalore.
        </p>
        <p>These Terms apply to:</p>
        <ul>
          <li>our website, <strong>arviontechnologies.com</strong>;</li>
          <li>our software, including Arvion ERP and its web and mobile apps; and</li>
          <li>our professional services, including payroll outsourcing, accounting and statutory registrations.</li>
        </ul>
        <p>
          By accessing or using any of these, you agree to these Terms and to our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>. If you use our services on behalf of a school, college or
          company, you confirm that you are authorised to accept these Terms for that organisation. If you do not
          agree, please do not use our website or services.
        </p>
        <p>
          Where you have signed a separate agreement, proposal or order form with us, that document will apply
          together with these Terms. If there is a conflict, the signed document prevails.
        </p>
      </>
    ),
  },
  {
    id: 'services',
    title: 'Our services',
    content: (
      <>
        <p>Arvion provides:</p>
        <ul>
          <li><strong>School management software:</strong> modules for admissions, fees, attendance, examinations, timetables, transport, communication and related features, offered on a subscription basis.</li>
          <li><strong>Payroll outsourcing:</strong> salary processing, payslips, statutory deductions and related compliance.</li>
          <li><strong>Accounting services:</strong> bookkeeping, ledgers, reconciliation and reporting.</li>
          <li><strong>Statutory registrations:</strong> help with company, GST, PF, ESI and similar registrations.</li>
        </ul>
        <p>
          The exact scope, features, deliverables and timelines for each client are set out in the proposal or order
          form we agree with you. We may add, change or remove features over time to improve the services, but we will
          not materially reduce the core features of a paid plan during its active term.
        </p>
      </>
    ),
  },
  {
    id: 'use-of-services',
    title: 'Acceptable use',
    content: (
      <>
        <p>
          You agree to use our website and services only for lawful purposes and in line with these Terms. You must
          not:
        </p>
        <ul>
          <li>access or attempt to access accounts, systems or data that you are not authorised to use;</li>
          <li>upload viruses, malware or any code designed to harm or disrupt the services;</li>
          <li>overload, scan, probe or test the vulnerability of our systems without written permission;</li>
          <li>copy, modify, resell, sublicense or reverse-engineer any part of our software;</li>
          <li>use automated tools to scrape or extract data from the website or software;</li>
          <li>upload content that is unlawful, defamatory, obscene, or that infringes someone else's rights;</li>
          <li>enter personal data into the software without a valid legal basis or the required consent; or</li>
          <li>use the services to send spam or unsolicited messages.</li>
        </ul>
        <p>
          We may investigate suspected violations and suspend access where needed to protect the services or other
          users.
        </p>
      </>
    ),
  },
  {
    id: 'accounts',
    title: 'Accounts and responsibilities',
    content: (
      <>
        <p>To use our software, your organisation will receive one or more user accounts. You are responsible for:</p>
        <ul>
          <li>giving accurate and complete information when setting up accounts;</li>
          <li>keeping usernames and passwords confidential and not sharing them;</li>
          <li>creating accounts only for authorised staff, students and parents, and removing access when someone leaves;</li>
          <li>all activity that happens under your organisation's accounts.</li>
        </ul>
        <p>
          Tell us immediately at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> if you suspect any unauthorised access or
          security issue. We are not liable for losses caused by your failure to keep login details secure.
        </p>
      </>
    ),
  },
  {
    id: 'client-data',
    title: 'Client data',
    content: (
      <>
        <p>
          <strong>"Client Data"</strong> means all data that you or your users enter into our software, such as
          student, staff, fee, payroll and accounting records.
        </p>
        <ul>
          <li><strong>Ownership:</strong> your organisation owns its Client Data. We do not claim any ownership of it.</li>
          <li><strong>Our use:</strong> we use Client Data only to provide, support and improve the services for you, and as described in our <Link to="/privacy-policy">Privacy Policy</Link>. We never sell it or use it for our own marketing.</li>
          <li><strong>Your responsibilities:</strong> you are responsible for the accuracy of Client Data and for having the right to collect and upload it, including parental consent for students.</li>
          <li><strong>Backups and export:</strong> we take regular backups. You can request an export of your Client Data at any time during your subscription and for 30 days after it ends.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'fees',
    title: 'Fees and payment',
    content: (
      <>
        <ul>
          <li><strong>Pricing:</strong> fees are as stated in your proposal, order form or our published pricing at the time you subscribe.</li>
          <li><strong>Taxes:</strong> unless stated otherwise, fees are exclusive of GST and other applicable taxes, which will be added to your invoice.</li>
          <li><strong>Billing:</strong> subscriptions are billed in advance on a monthly, quarterly or annual basis. Professional services are billed as agreed in the proposal.</li>
          <li><strong>Due date:</strong> invoices are payable within 15 days of the invoice date unless otherwise agreed.</li>
          <li><strong>Late payment:</strong> if payment is overdue, we may send reminders and, after 30 days, suspend access until the account is settled.</li>
          <li><strong>Refunds:</strong> fees paid for a subscription period that has started are non-refundable, except where required by law or agreed in writing.</li>
          <li><strong>Price changes:</strong> we may revise prices for renewals with at least 30 days' notice.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    content: (
      <>
        <p>
          The website, software, designs, logos, text, graphics, source code and documentation are owned by Arvion or
          its licensors and are protected by copyright, trademark and other intellectual property laws.
        </p>
        <p>
          Subject to these Terms and payment of applicable fees, we grant your organisation a limited, non-exclusive,
          non-transferable licence to use the software for its internal purposes during the subscription term. No
          other rights are granted.
        </p>
        <p>
          You may not copy, redistribute, publish or create derivative works from any part of our website or software
          without our express written permission. If you send us feedback or suggestions, we may use them to improve
          our services without any obligation to you.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-party services',
    content: (
      <p>
        Our services may integrate with third-party tools, such as payment gateways, SMS and WhatsApp providers, email
        services or government portals. Your use of those tools is subject to their own terms. We are not responsible
        for their availability, accuracy or any loss caused by them.
      </p>
    ),
  },
  {
    id: 'availability',
    title: 'Service availability and support',
    content: (
      <>
        <p>
          We aim to keep our software available at all times, but we do not guarantee that it will be uninterrupted or
          error-free. Access may be temporarily limited for:
        </p>
        <ul>
          <li>scheduled maintenance, which we try to carry out outside school and business hours;</li>
          <li>urgent security fixes; or</li>
          <li>events outside our reasonable control, such as internet or power outages, natural disasters or actions of third-party providers.</li>
        </ul>
        <p>
          Support is available by email, phone and WhatsApp during business hours, as described in your plan.
        </p>
      </>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'Disclaimer and limitation of liability',
    content: (
      <>
        <p>
          Our website and services are provided on an "as is" and "as available" basis. To the maximum extent
          permitted by law:
        </p>
        <ul>
          <li>we do not give any warranty that the services will meet every specific requirement you have;</li>
          <li>we are not liable for any indirect, incidental, special, consequential or exemplary damages, including loss of profits, revenue, goodwill or data;</li>
          <li>our total liability for any claim relating to the services is limited to the fees you paid us for the affected service in the 12 months before the claim arose.</li>
        </ul>
        <p>
          Information on our website, such as articles and guides, is for general information only and is not legal,
          tax or financial advice.
        </p>
      </>
    ),
  },
  {
    id: 'indemnity',
    title: 'Indemnity',
    content: (
      <p>
        You agree to compensate and protect Arvion, its directors and employees against any claims, losses or
        expenses arising from your breach of these Terms, your misuse of the services, or Client Data that you upload
        without the required rights or consent.
      </p>
    ),
  },
  {
    id: 'termination',
    title: 'Suspension and termination',
    content: (
      <>
        <ul>
          <li><strong>By you:</strong> you may stop using the services at any time. Subscriptions can be cancelled with effect from the end of the current billing period by writing to us.</li>
          <li><strong>By us:</strong> we may suspend or terminate access if you seriously breach these Terms, fail to pay fees after reminders, or if required by law.</li>
          <li><strong>After termination:</strong> access to the software ends. You may request an export of your Client Data within 30 days, after which it will be deleted from our active systems, as described in our <Link to="/privacy-policy">Privacy Policy</Link>.</li>
        </ul>
        <p>
          Sections that by their nature should continue, such as fees owed, intellectual property, limitation of
          liability and indemnity, will survive termination.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing law and disputes',
    content: (
      <>
        <p>These Terms are governed by the laws of India.</p>
        <p>
          If a dispute arises, we will first try to resolve it in good faith through discussion. If it is not resolved
          within 30 days, it will be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    content: (
      <p>
        We may update these Terms from time to time. The "Last updated" date at the top of this page shows the latest
        version. For significant changes, we will notify active clients by email at least 15 days before they take
        effect. Continuing to use our website or services after changes take effect means you accept the updated
        Terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    content: (
      <>
        <p>If you have any questions about these Terms, please contact us:</p>
        <p>
          <strong>Arvion Technologies Pvt Ltd</strong>
          <br />
          Bangalore, Karnataka, India
          <br />
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          Phone: <a href="tel:+919535764655">+91 9535764655</a>
        </p>
      </>
    ),
  },
];

const TermsOfServicePage = () => (
  <LegalPage
    eyebrow="Arvion Technologies Pvt Ltd"
    title="Terms of Service"
    intro="These terms set out the rules for using our website, software and services. Please read them carefully."
    meta={[
      { label: 'Last updated', value: LAST_UPDATED },
      { label: 'Applies to', value: 'arviontechnologies.com & Arvion ERP' },
      { label: 'Governing law', value: 'India · Courts of Bangalore' },
    ]}
    sections={sections}
    contact={{
      variant: 'dark',
      icon: <FaEnvelopeOpenText />,
      heading: 'Have Questions?',
      text: "If you have any questions or concerns regarding these Terms of Service, please reach out to our dedicated Client Advocacy Team. We're here to help.",
    }}
  />
);

export default TermsOfServicePage;
