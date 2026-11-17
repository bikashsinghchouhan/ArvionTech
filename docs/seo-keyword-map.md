# SEO keyword map – arviontechnologies.com

Last updated: 17 Nov 2026. Titles, descriptions and schema live in `src/configurations/SeoConfig.js`.
Keyword ideas come from typical Indian search patterns (short head terms, long-tail, city / "near me", questions).
Validate volumes in Google Search Console (Performance report) and Google Keyword Planner after launch, then adjust.

## Page → keywords

| Page | Primary keyword | Secondary / long-tail keywords |
|---|---|---|
| `/` Home | school ERP software Bangalore | Arvion Technologies; school management software and payroll services; payroll, accounting and registration services Bangalore; business compliance services India |
| `/services/school-management` | school management software | school ERP software India; school ERP Bangalore; best school management software in India; school management system; cloud school ERP; school ERP with mobile app; online admission software for schools; school fee management software; student attendance management system; exam and report card software; school timetable software; library management software for schools; transport management for schools; parent portal app for school; teacher app for attendance and marks; student portal; school ERP price / cost per student in India; school ERP for CBSE / ICSE / state board; multi-branch school ERP; "what is school ERP"; "how to choose school ERP software"; school software near me |
| `/services/outsourcing` | payroll outsourcing services | payroll outsourcing Bangalore; payroll outsourcing companies in India; payroll services for small business India; salary processing services; PF ESI compliance services; PF and ESI consultant Bangalore; professional tax filing Karnataka; TDS on salary and Form 16 services; payroll services for schools; outsourced payroll near me; "what is payroll outsourcing"; "payroll outsourcing cost in India"; statutory compliance services Bangalore |
| `/services/accounting` | accounting services Bangalore | bookkeeping services Bangalore; outsourced accounting services India; accounting services for small business; GST return filing services Bangalore; GSTR-1 / GSTR-3B filing; TDS return filing services; ROC annual filing; MIS reporting services; Tally / Zoho Books / QuickBooks bookkeeping; accountant near me; "how much do bookkeeping services cost in India"; books cleanup / catch-up accounting |
| `/services/statutory-registrations` | company registration in Bangalore | GST registration Bangalore; GST registration online; PF registration; ESI registration; professional tax registration Karnataka; shops and establishment registration Bangalore / Karnataka; MSME Udyam registration; private limited company registration; LLP registration Bangalore; trade licence Bangalore (BBMP); FSSAI registration; business registration services near me; "documents required for company registration"; "how long does company registration take"; "private limited vs LLP" |
| `/services` | business services Bangalore | school ERP, payroll, accounting and registration services; compliance and software services India |
| `/about` | Arvion Technologies | Arvion Technologies Pvt Ltd Bangalore; school ERP company Bangalore; payroll company Bangalore |
| `/contact` | contact Arvion Technologies | school ERP demo; free payroll consultation; Arvion phone number / address Ganganagar |
| `/faqs` | school ERP FAQ | payroll outsourcing FAQ; PF ESI questions; company registration questions; accounting services questions |
| `/blog` | school ERP and payroll compliance guides | GST, PF, ESI, PT, TDS guides for small business India |
| `/blog/how-to-choose-a-school-erp` | how to choose school ERP | school ERP checklist; school ERP features list; school ERP modules |
| `/blog/payroll-compliance-basics-pf-esi-pt-tds` | payroll compliance India | PF ESI PT TDS explained; payroll statutory compliance checklist |
| `/blog/gst-registration-checklist` | GST registration documents | who needs GST registration; GST registration threshold; GST registration checklist |
| `/blog/monthly-bookkeeping-checklist` | monthly bookkeeping checklist | small business bookkeeping India; month-end closing checklist |
| `/downloads` | school ERP brochure | payroll compliance calendar; company registration document checklist |
| `/case-studies` | school ERP case study | payroll outsourcing case study; bookkeeping cleanup case study |
| `/privacy-policy`, `/terms-of-service` | brand only (no target) | – |

## What was applied on the site

- Unique title (~60 chars) and meta description (~155–165 chars) per route, with the primary keyword and Bangalore / India.
- One H1 per page. Service H1s carry a screen-reader-only keyword suffix (e.g. "Payroll Outsourcing Services in Bangalore, India").
- Canonical URL, Open Graph and Twitter tags on every route; new 1200×630 `public/og-image.jpg` (was missing).
- JSON-LD on every route: `Organization` + `LocalBusiness` (name, Ganganagar address, phone, email, area served, service catalog), `WebPage`/`AboutPage`/`ContactPage`/`CollectionPage`, `BreadcrumbList`.
  - `Service` on each service page; `SoftwareApplication` (with INR price range) on the school ERP page.
  - `FAQPage` wherever FAQs are shown (home, school ERP, payroll, accounting, registrations via `FaqSection`; `/faqs` via SeoConfig).
  - `BlogPosting` on each blog post; `ItemList` of services on `/services`.
- "Related Services" internal-link block on every service page; footer school module links now point to the ERP page instead of `#`.
- `/services/payroll` was a duplicate of `/services/outsourcing`: now a 301 (`public/.htaccess`) and a client redirect, and removed from the sitemap.
- `dist/sitemap.xml` is generated at build time from `seoRoutes` (18 URLs, `https://arviontechnologies.com`); `robots.txt` points to it.

## Next on-site steps (recommended)

1. Dedicated pages for high-intent ERP modules: fee management software, online admission software, attendance management system, exam/report card software, parent app. Each gets its own route in `SeoConfig.js`.
2. City landing content only if you really serve the area (e.g. "School ERP for schools in Mysuru/Hubballi"); avoid thin doorway pages.
3. One blog post per month targeting a question keyword above (e.g. "PF vs ESI registration limits", "School ERP cost in India").
4. Real social profile URLs in the footer and in `sameAs` in `SeoConfig.js` (Facebook/Instagram/YouTube links are currently `#`).
5. Add reviews/testimonials from real clients; only then add `aggregateRating` schema.

## Off-site steps for the owner

1. **Google Search Console**: add a Domain property for `arviontechnologies.com`, verify with the DNS TXT record at your domain registrar/Hostinger, submit `https://arviontechnologies.com/sitemap.xml`, then use URL Inspection → "Request indexing" for the home and four service pages.
2. **Bing Webmaster Tools**: import the site from Search Console and submit the same sitemap (also feeds ChatGPT/Copilot search).
3. **Google Business Profile**: create "Arvion Technologies Pvt Ltd" at the Ganganagar, Bangalore 560032 address; category "Software company" plus "Payroll service" and "Accounting firm"; same phone (+91 95357 64655) and website; add services, photos, opening hours; ask clients for reviews. Keep name, address and phone (NAP) identical everywhere.
4. **Directories and citations** (same NAP): Justdial, Sulekha, IndiaMART, TradeIndia, Clutch, GoodFirms, Capterra / G2 / SoftwareSuggest / Techjockey (for the school ERP), LinkedIn company page, Facebook page, Crunchbase.
5. **Backlinks**: school associations and education portals, CA/CS firm partnerships, guest articles on HR/payroll and education blogs, press release for the ERP launch, local Bangalore business listings and chambers of commerce.
6. **Monitor**: check Search Console monthly for queries, CTR and coverage errors; validate schema with Google's Rich Results Test after each deploy.
