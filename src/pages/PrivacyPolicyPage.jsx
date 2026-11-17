import React from 'react';
import { FaHeadset } from 'react-icons/fa';
import LegalPage from '../components/legal/LegalPage';

const LAST_UPDATED = '17 November 2026';
const EMAIL = 'sales@arviontechnologies.com';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>
          Arvion Technologies Private Limited (<strong>"Arvion"</strong>, "we", "us", "our") is a company
          incorporated in India with its office in Bangalore. We build and run school management software (Arvion
          ERP) and provide payroll outsourcing, accounting and statutory registration services to schools, colleges
          and businesses.
        </p>
        <p>This Privacy Policy explains:</p>
        <ul>
          <li>what personal data we collect and why;</li>
          <li>how we use, share, store and protect it;</li>
          <li>how long we keep it; and</li>
          <li>the rights you have and how to use them.</li>
        </ul>
        <p>
          It applies to <strong>arviontechnologies.com</strong>, our web and mobile applications, and any service
          where we link to this policy. We process personal data in line with the Digital Personal Data Protection
          Act, 2023 (<strong>"DPDP Act"</strong>), the Information Technology Act, 2000 and the rules made under it.
        </p>
        <p>
          By using our website or services, you confirm that you have read and understood this policy. If you do not
          agree with it, please do not use our website or services.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    content: (
      <>
        <p>
          We collect only the information we need to respond to you and to deliver our services. Depending on how you
          interact with us, this falls into three categories.
        </p>

        <h3>a) Information you give us directly</h3>
        <p>When you fill in a contact, demo, consultation or registration form, email us, or call us, we collect:</p>
        <ul>
          <li><strong>Identity and contact details:</strong> your full name, email address, phone or WhatsApp number.</li>
          <li><strong>Organisation details:</strong> school, college or company name, your job title, city and country, and size details such as number of students, employees or monthly transactions.</li>
          <li><strong>Requirement details:</strong> the services you are interested in, your preferred plan, and the date and time you choose for a consultation.</li>
          <li><strong>Communication records:</strong> the content of emails, messages and call notes, so we can follow up accurately.</li>
          <li><strong>Billing details:</strong> for paying clients, billing name, address and GST number. Card or bank details are handled by our payment partners and are not stored by us.</li>
        </ul>

        <h3>b) Service data you upload into our software</h3>
        <p>
          When a school or business uses Arvion ERP, payroll or accounting services, its authorised users may enter
          data such as:
        </p>
        <ul>
          <li>Student and parent records: names, class, admission details, attendance, marks and fee payments.</li>
          <li>Staff and employee records: names, designations, salary, attendance, PAN and bank details needed for payroll.</li>
          <li>Business records: invoices, ledgers, vendor and statutory registration documents.</li>
        </ul>
        <p>
          This data belongs to the institution that uploads it. We act as a <strong>data processor</strong> and use it
          only to provide the services under our agreement with that institution, never for our own marketing.
        </p>

        <h3>c) Information collected automatically</h3>
        <p>When you browse our website, we and our analytics tools automatically record:</p>
        <ul>
          <li><strong>Device and browser data:</strong> IP address, browser type and version, operating system and screen size.</li>
          <li><strong>Usage data:</strong> pages visited, links clicked, time spent on pages, and the website that referred you.</li>
          <li><strong>Approximate location:</strong> city or region derived from your IP address. We do not collect precise GPS location.</li>
          <li><strong>Cookies and similar technologies:</strong> small files that remember your preferences and help us measure site performance. See the <a href="#cookies">Cookies</a> section below.</li>
        </ul>

        <p>
          We do not knowingly collect sensitive data such as religion, caste, health or biometric information through
          our website. If you choose not to provide certain information, we may not be able to respond to your request
          or provide some services.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use your information',
    content: (
      <>
        <p>We use personal data only for clear, specific purposes:</p>

        <h3>a) To respond to you</h3>
        <ul>
          <li>Reply to enquiries received through our forms, email, phone or WhatsApp.</li>
          <li>Schedule and confirm consultations and product demos, and send you a confirmation email.</li>
          <li>Prepare proposals and quotations based on your requirements.</li>
        </ul>

        <h3>b) To deliver our services</h3>
        <ul>
          <li>Set up and manage client accounts and user logins.</li>
          <li>Run the features you use, such as admissions, fee collection, attendance, payroll and accounting.</li>
          <li>Provide onboarding, training and technical support.</li>
          <li>Issue invoices, collect payments and maintain financial records.</li>
        </ul>

        <h3>c) To communicate with you</h3>
        <ul>
          <li>Send service notices, such as maintenance alerts, security updates and changes to our terms.</li>
          <li>With your consent, send newsletters, product updates and offers. You can unsubscribe at any time using the link in the email or by writing to us.</li>
        </ul>

        <h3>d) To improve and protect our services</h3>
        <ul>
          <li>Understand how visitors use our website so we can improve content and performance.</li>
          <li>Detect and prevent fraud, spam, abuse and security incidents.</li>
          <li>Comply with legal, tax and regulatory requirements, and respond to lawful requests from authorities.</li>
        </ul>

        <p>
          We do not use automated decision-making that produces legal or similarly significant effects on you.
        </p>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: 'Consent and legal basis',
    content: (
      <>
        <p>Under the DPDP Act, we process your personal data on one of these grounds:</p>
        <ul>
          <li><strong>Consent:</strong> when you submit a form and agree to be contacted, or opt in to marketing emails. You can withdraw consent at any time; this does not affect processing that already took place.</li>
          <li><strong>Legitimate uses:</strong> where you have voluntarily provided data for a specific purpose, such as asking for a quote, or where processing is needed to perform a contract with you or your institution.</li>
          <li><strong>Legal obligation:</strong> where the law requires us to keep or disclose information, for example for tax, accounting or court orders.</li>
        </ul>
        <p>
          For service data uploaded by schools and businesses, the institution is the <strong>data fiduciary</strong>{' '}
          and is responsible for having a valid basis, including parental consent for students, before entering it
          into our software.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Sharing and disclosure',
    content: (
      <>
        <p>
          We do <strong>not</strong> sell, rent or trade personal data. We share it only in the limited situations
          below:
        </p>
        <ul>
          <li><strong>Service providers:</strong> trusted vendors who help us run our business, such as cloud hosting, email delivery, SMS and WhatsApp messaging, payment gateways and analytics. They may use the data only to provide services to us and must keep it confidential and secure.</li>
          <li><strong>Your institution:</strong> if you are a student, parent or employee, your school or employer can see the data held in its account.</li>
          <li><strong>Legal requirements:</strong> when required by law, court order, or a government or regulatory authority.</li>
          <li><strong>Protection of rights:</strong> to enforce our terms, or to protect the rights, property or safety of Arvion, our clients or the public.</li>
          <li><strong>Business transfers:</strong> if Arvion is involved in a merger, acquisition or sale of assets, data may be transferred as part of that deal, subject to this policy.</li>
        </ul>
        <p>
          Some of our service providers may store or process data on servers outside India. Where this happens, we
          take steps to make sure the data is protected to the standard required by Indian law.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: (
      <>
        <p>
          Cookies are small text files placed on your device when you visit a website. We use the following types:
        </p>
        <ul>
          <li><strong>Essential cookies:</strong> needed for the website to work, for example to keep you logged in or remember form progress. These cannot be switched off.</li>
          <li><strong>Preference cookies:</strong> remember choices you make, such as language or region.</li>
          <li><strong>Analytics cookies:</strong> help us count visits and see which pages are most useful. This information is aggregated and does not identify you personally.</li>
        </ul>
        <p>
          You can block or delete cookies through your browser settings. If you block essential cookies, some parts of
          the website or our software may not work properly.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Data retention',
    content: (
      <>
        <p>We keep personal data only for as long as it is needed for the purpose it was collected:</p>
        <ul>
          <li><strong>Enquiries and leads:</strong> up to 24 months after our last contact with you, unless you become a client.</li>
          <li><strong>Client account data:</strong> for the duration of the contract. After it ends, the institution can request an export within 30 days, after which data is deleted from active systems.</li>
          <li><strong>Invoices and financial records:</strong> for at least 8 years, as required by Indian tax and accounting laws.</li>
          <li><strong>Backups:</strong> deleted data may remain in encrypted backups for up to 90 days before being overwritten.</li>
        </ul>
        <p>When data is no longer needed, we delete it securely or anonymise it so it can no longer identify you.</p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Data security',
    content: (
      <>
        <p>We use reasonable security practices, as required under the IT Act and DPDP Act, including:</p>
        <ul>
          <li>Encryption of data in transit using HTTPS/TLS.</li>
          <li>Role-based access, so staff and users only see the data they need.</li>
          <li>Strong password rules and secure login practices.</li>
          <li>Regular automated backups and monitoring of our systems.</li>
          <li>Confidentiality obligations for our employees and service providers.</li>
        </ul>
        <p>
          If a personal data breach occurs that is likely to affect you, we will inform the affected institutions,
          individuals and the Data Protection Board of India as required by law.
        </p>
        <p>
          No method of transmission over the internet or electronic storage is completely secure, so we cannot
          guarantee absolute security. Please keep your login details confidential and tell us immediately if you
          suspect unauthorised access.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    content: (
      <>
        <p>Under the DPDP Act, you have the right to:</p>
        <ul>
          <li><strong>Access:</strong> get a summary of the personal data we hold about you and how it is used.</li>
          <li><strong>Correction and update:</strong> ask us to correct inaccurate or incomplete data.</li>
          <li><strong>Erasure:</strong> ask us to delete data that is no longer needed, unless we must keep it by law.</li>
          <li><strong>Withdraw consent:</strong> stop marketing emails or other processing based on consent.</li>
          <li><strong>Nominate:</strong> name another person to exercise your rights in case of death or incapacity.</li>
          <li><strong>Grievance redressal:</strong> raise a complaint with our Grievance Officer, and if unresolved, with the Data Protection Board of India.</li>
        </ul>
        <p>
          To use any of these rights, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with the subject "Privacy
          Request". We may ask you to verify your identity, and we will respond within 30 days.
        </p>
        <p>
          If your data was entered by your school or employer, please contact them first, since they control that
          data. We will help them respond to your request.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: "Children's data",
    content: (
      <>
        <p>
          Our website is meant for adults, such as school administrators, business owners and parents. We do not
          knowingly collect personal data directly from children under 18 through our website.
        </p>
        <p>Where our school software holds student data:</p>
        <ul>
          <li>the school is responsible for obtaining verifiable consent from a parent or guardian;</li>
          <li>we process that data only on the school's documented instructions;</li>
          <li>we do not track children's behaviour or show them targeted advertising.</li>
        </ul>
        <p>
          If you believe a child has given us personal data without consent, contact us and we will delete it.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-party links and services',
    content: (
      <p>
        Our website may contain links to other websites, such as social media pages, payment gateways or partner
        sites. Those sites have their own privacy policies, and we are not responsible for their content or practices.
        Please read their policies before sharing your information with them.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    content: (
      <p>
        We may update this Privacy Policy to reflect changes in our services, technology or the law. The "Last
        updated" date at the top of this page shows the latest version. If we make significant changes, we will
        highlight them on this page and, where appropriate, notify clients by email. Continuing to use our website or
        services after an update means you accept the revised policy.
      </p>
    ),
  },
  {
    id: 'grievance-officer',
    title: 'Contact & Grievance Officer',
    content: (
      <>
        <p>
          If you have any questions, requests or complaints about this policy or how we handle your data, please
          contact our Grievance Officer:
        </p>
        <p>
          <strong>Grievance Officer</strong>
          <br />
          Arvion Technologies Pvt Ltd, Bangalore, Karnataka, India
          <br />
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          Phone: <a href="tel:+919535764655">+91 9535764655</a>
        </p>
        <p>
          We will acknowledge your complaint within 7 working days and aim to resolve it within 30 days. If you are
          not satisfied with our response, you may approach the Data Protection Board of India.
        </p>
      </>
    ),
  },
];

const PrivacyPolicyPage = () => (
  <LegalPage
    eyebrow="Arvion Technologies Pvt Ltd"
    title="Privacy Policy"
    intro="This policy explains what personal data we process when you use our website, products and services, and the choices you have."
    meta={[
      { label: 'Last updated', value: LAST_UPDATED },
      { label: 'Applies to', value: 'arviontechnologies.com & Arvion ERP' },
      { label: 'Governing law', value: 'India (DPDP Act, 2023)' },
    ]}
    sections={sections}
    contact={{
      variant: 'orange',
      icon: <FaHeadset />,
      heading: 'Need Clarification?',
      text: 'If you have any questions, comments, or concerns about this Privacy Policy or our data practices, please contact our Client Advocacy Team.',
    }}
  />
);

export default PrivacyPolicyPage;
