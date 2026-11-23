import React from 'react';

/**
 * Editorial layout shared by the legal pages (Privacy Policy, Terms of Service).
 * Navy hero with key facts, then numbered sections separated by thin rules.
 *
 * props:
 *  - eyebrow:  small label above the title
 *  - title:    page title
 *  - intro:    one-paragraph summary under the title
 *  - meta:     [{ label, value }] facts shown beside the title
 *  - sections: [{ id, title, content }] where content is JSX
 *  - contact:  { heading, text, icon, variant: "orange" | "dark" } for the closing CTA
 */
const LegalPage = ({ eyebrow, title, intro, meta = [], sections = [], contact }) => (
  <div className="bg-white min-h-screen pt-14 font-sans">
    {/* Hero */}
    <header className="bg-[#0b1f4d] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-[72px] sm:pt-[88px] pb-10 sm:pb-14 grid gap-8 md:gap-10 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_320px] md:items-end">
        <div>
          <p className="text-sm font-semibold text-[#ffb37a]">{eyebrow}</p>
          <h1 className="mt-3 text-[25px] leading-[1.1] sm:text-4xl lg:text-5xl font-extrabold tracking-tight">{title}</h1>
          {intro && <p className="mt-4 text-[14px] sm:text-base text-white/70 max-w-xl leading-relaxed">{intro}</p>}
        </div>
        {meta.length > 0 && (
          <dl className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-x-6 gap-y-4 text-sm border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-6">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-white/50">{m.label}</dt>
                <dd className="font-semibold mt-0.5">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </header>

    {/* Sections */}
    <main className="max-w-5xl mx-auto px-5 sm:px-6 py-6 sm:py-14">
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-28 grid gap-3 md:gap-8 md:grid-cols-[110px_1fr] py-6 sm:py-10 ${i ? 'border-t border-slate-200' : ''}`}
        >
          <div aria-hidden="true" className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-[#f2700f]/90 leading-none">
            {String(i + 1).padStart(2, '0')}
          </div>
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f4d] mb-4">{s.title}</h2>
            <div className="legal-prose text-[14px] sm:text-[15px] leading-[1.75] text-[#3b4659] space-y-4 break-words [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li::marker]:text-[#f2700f] [&_strong]:text-[#0b1f4d] [&_h3]:text-[16px] sm:[&_h3]:text-[17px] [&_h3]:font-bold [&_h3]:text-[#0b1f4d] [&_h3]:pt-3 [&_a]:text-[#f2700f] [&_a]:font-semibold hover:[&_a]:underline">
              {s.content}
            </div>
          </div>
        </section>
      ))}
    </main>

    {/* Contact CTA */}
    {contact && (
      <div className="bg-white px-4 sm:px-6 pt-2 pb-12 sm:pb-16">
        <div
          className={`max-w-5xl mx-auto rounded-[28px] sm:rounded-[40px] px-6 py-10 sm:p-12 md:p-16 text-center text-white relative overflow-hidden shadow-xl ${
            contact.variant === 'dark' ? 'bg-[#0d1b2a]' : 'bg-gradient-to-r from-[#ff7f32] to-[#e66a22]'
          }`}
        >
          {contact.variant === 'dark' ? (
            <>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7f32]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            </>
          ) : (
            <>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </>
          )}

          <div className="relative z-10 flex flex-col items-center">
            {contact.icon && (
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-lg text-[21px] sm:text-[29px] ${
                  contact.variant === 'dark' ? 'bg-[#ff7f32] text-white shadow-[#ff7f32]/40' : 'bg-white text-[#ff7f32]'
                }`}
              >
                {contact.icon}
              </div>
            )}
            <h2 className="text-heading font-extrabold mb-4 sm:mb-6">{contact.heading}</h2>
            <p className={`text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 ${contact.variant === 'dark' ? 'text-slate-300' : 'text-white/90 font-medium'}`}>
              {contact.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
              <a
                href="mailto:sales@arviontechnologies.com"
                className={`px-6 sm:px-8 py-4 rounded-full font-bold hover:-translate-y-1 transition-all duration-300 shadow-lg break-all ${
                  contact.variant === 'dark' ? 'bg-[#ff7f32] text-white hover:bg-orange-600' : 'bg-[#0d1b2a] text-white hover:bg-[#1a2b3c]'
                }`}
              >
                sales@arviontechnologies.com
              </a>
              <a
                href="tel:+919535764655"
                className="bg-white/10 text-white px-6 sm:px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                +91 9535764655
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default LegalPage;
