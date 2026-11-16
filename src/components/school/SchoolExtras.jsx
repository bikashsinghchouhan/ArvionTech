// Extra sections for the School ERP page: "time back" story, switching/migration guide
// and the parent experience. Headings reuse the shared service-page heading style.
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle, FaArrowRight, FaClipboardCheck, FaUserGraduate,
  FaFileExcel, FaExchangeAlt, FaMoneyBillWave, FaBookOpen, FaBullhorn, FaBusAlt, FaCalendarAlt, FaChartLine, FaBell,
} from 'react-icons/fa';
import { SectionHeading } from '../ServiceSections';

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 } };

/* ------------------------------------------------------------------ */
/* 1. Give your staff their time back (text only)                      */

export const TimeBackSection = () => (
  <section id="time-back" className="scroll-mt-24 w-full bg-gradient-to-b from-[#f6f9ff] to-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="max-w-4xl mx-auto">
      <SectionHeading pill="More Time for Teaching" title="Give Your Staff Their" highlight="Time Back" />
      <motion.div
        {...reveal}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl bg-white border border-slate-100 shadow-[0_14px_40px_-22px_rgba(11,42,107,.4)] p-5 sm:p-8 lg:p-10 overflow-hidden"
      >
        <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#f7941d] to-[#1747a6]" />
        <div className="flex flex-col gap-3 sm:gap-5 text-[13px] sm:text-[16px] text-slate-600 leading-relaxed">
          <p>
            Every school day, hours quietly disappear into registers, fee receipts, marks sheets and phone calls from parents.
            Teachers copy attendance by hand, the office types the same student details into three different places, and
            report cards swallow entire weekends at the end of every term.
          </p>
          <p>
            <span className="font-bold text-[#0b1f4d]">Arvion School ERP takes that load off your team.</span>{' '}
            Attendance is marked in a few taps and the reports build themselves. Fee receipts, dues and reminders are
            generated automatically. Marks are entered once, and report cards are ready to print or publish. Circulars reach
            every parent instantly, without a single phone call.
          </p>
          <p>
            The result is simple: your office runs faster, your teachers get back to teaching, and your leadership sees the
            whole school on one dashboard, in real time.{' '}
            <span className="font-bold text-[#f2700f]">Less paperwork. Fewer errors. More time for what truly matters: your students.</span>
          </p>
        </div>
        <div className="mt-5 sm:mt-7">
          <Link to="/contact" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#FF7A00] hover:bg-[#E66E00] text-white text-[13px] sm:text-[14px] font-bold no-underline transition-colors">
            See It in Action <FaArrowRight className="text-[11px]" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 2. Switching from Excel or another ERP                              */

const SWITCH_GROUPS = [
  {
    Icon: FaUserGraduate, heading: 'What We Move For You',
    items: ['Student and parent records', 'Classes, sections and subjects', 'Fee structures and pending dues', 'Staff records', 'Past marks, where available'],
  },
  {
    Icon: FaFileExcel, heading: 'What You Share',
    items: ['Excel or CSV sheets you already keep', 'An export or reports from your current software', 'Your fee structure and concessions', 'Your class and section list'],
  },
  {
    Icon: FaExchangeAlt, heading: 'How the Switch Works',
    items: ['We clean and map your data to the ERP', 'You check a sample before go-live', 'Staff training on each module', 'Ongoing support after you go live'],
  },
];

export const SwitchingSection = () => (
  <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        pill="Easy Switch"
        title="Moving From Excel or"
        highlight="Another ERP?"
        desc="Your data comes with you. Our team handles the bulk import so you do not re-type years of records."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
        {SWITCH_GROUPS.map(({ Icon, heading, items }, idx) => (
          <motion.div
            key={heading} {...reveal} transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="relative rounded-2xl border border-slate-100 bg-[#f8fafd] p-4 sm:p-6"
          >
            <span className="absolute top-3 right-4 text-[28px] sm:text-[36px] font-black text-[#1747a6]/10 leading-none">0{idx + 1}</span>
            <div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-200/70">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1747a6] text-white flex items-center justify-center text-sm sm:text-base flex-shrink-0">
                {Icon && <Icon />}
              </span>
              <h3 className="text-[14px] sm:text-[16px] font-bold text-[#0b1f4d] leading-snug">{heading}</h3>
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[12px] sm:text-[14px] text-slate-600 leading-snug">
                  <FaCheckCircle className="text-[#16a34a] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 3. Parent experience: feature list + phone mockup                    */

const PARENT_FEATURES = [
  { Icon: FaMoneyBillWave, title: 'Fees and Online Payment', desc: 'See dues and receipts, and pay online when the payment gateway add-on is enabled.' },
  { Icon: FaClipboardCheck, title: 'Attendance', desc: 'Check your child’s daily attendance and monthly record.' },
  { Icon: FaBookOpen, title: 'Homework', desc: 'View homework and assignments with due dates.' },
  { Icon: FaBullhorn, title: 'Circulars and Alerts', desc: 'Get notices, holiday announcements and fee reminders instantly.' },
  { Icon: FaChartLine, title: 'Results and Report Cards', desc: 'See marks and report cards as soon as the school publishes them.' },
  { Icon: FaBusAlt, title: 'Bus Tracking', desc: 'Track the school vehicle so you know when to step out.' },
];

// Illustrative notifications shown inside the phone mockup
const PHONE_ITEMS = [
  { Icon: FaClipboardCheck, tone: 'bg-green-100 text-green-600', title: 'Attendance', text: 'Marked present today' },
  { Icon: FaBookOpen, tone: 'bg-blue-100 text-blue-600', title: 'Homework', text: 'Maths: Exercise 4.2, due Friday' },
  { Icon: FaMoneyBillWave, tone: 'bg-orange-100 text-orange-600', title: 'Fee reminder', text: 'Term 2 fee due next week' },
  { Icon: FaBusAlt, tone: 'bg-purple-100 text-purple-600', title: 'School bus', text: 'Bus is 5 minutes away' },
  { Icon: FaCalendarAlt, tone: 'bg-sky-100 text-sky-600', title: 'Circular', text: 'Annual day on Saturday' },
];

export const ParentExperience = () => (
  <section className="w-full bg-gradient-to-b from-[#f6f9ff] to-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        pill="For Parents"
        title="Parents Stay Informed,"
        highlight="Without Calling the Office"
        desc="Everything a parent needs about their child, in one app."
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-6 lg:gap-10 items-center">
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-1">
          {PARENT_FEATURES.map(({ Icon, title, desc }, idx) => (
            <motion.div
              key={title} {...reveal} transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="flex items-start gap-3 bg-white rounded-2xl border border-slate-100 shadow-[0_8px_24px_-16px_rgba(11,42,107,.3)] p-3.5 sm:p-4 hover:border-orange-200 transition-colors"
            >
              <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-orange-50 text-[#f2700f] flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                {Icon && <Icon />}
              </span>
              <div>
                <h3 className="text-[13px] sm:text-[15px] font-bold text-[#0b1f4d] leading-snug">{title}</h3>
                <p className="mt-0.5 text-[11px] sm:text-[13px] text-slate-500 leading-snug">{desc}</p>
              </div>
            </motion.div>
          ))}
          <p className="sm:col-span-2 text-[11px] sm:text-[12px] text-slate-500">The parent and student mobile app is available as an add-on.</p>
        </div>

        {/* Phone mockup */}
        <motion.div {...reveal} transition={{ duration: 0.6 }} className="order-1 lg:order-2 flex justify-center" aria-hidden="true">
          <div className="relative w-[230px] sm:w-[260px] rounded-[2.2rem] bg-[#0b1f4d] p-2.5 shadow-[0_30px_60px_-25px_rgba(11,42,107,.6)]">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-[#0b1f4d] z-10" />
            <div className="rounded-[1.8rem] bg-[#f4f7fc] overflow-hidden">
              <div className="bg-gradient-to-r from-[#1747a6] to-[#0c2f79] px-4 pt-7 pb-4 text-white">
                <p className="text-[10px] text-blue-100">Good morning</p>
                <p className="text-[14px] font-extrabold leading-tight">Parent Dashboard</p>
                <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center">
                  {[['96%', 'Attendance'], ['2', 'Homework'], ['1', 'Fee due']].map(([v, l]) => (
                    <div key={l} className="rounded-lg bg-white/15 py-1.5">
                      <p className="text-[13px] font-black leading-none">{v}</p>
                      <p className="text-[8.5px] text-blue-100 mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-3 py-3 flex flex-col gap-2">
                <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500"><FaBell /> Today</p>
                {PHONE_ITEMS.map(({ Icon, tone, title, text }) => (
                  <div key={title} className="flex items-center gap-2 rounded-xl bg-white px-2.5 py-2 shadow-sm">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] flex-shrink-0 ${tone}`}>{Icon && <Icon />}</span>
                    <div className="min-w-0">
                      <p className="text-[10.5px] font-bold text-[#0b1f4d] leading-tight">{title}</p>
                      <p className="text-[9.5px] text-slate-500 leading-tight truncate">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
