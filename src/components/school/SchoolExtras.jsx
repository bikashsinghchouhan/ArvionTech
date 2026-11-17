// Extra sections for the School ERP page: "time back" story, switching/migration guide
// and the student app. Headings reuse the shared service-page heading style.
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle, FaArrowRight, FaClipboardCheck, FaUserGraduate,
  FaFileExcel, FaExchangeAlt, FaMoneyBillWave, FaBookOpen, FaBullhorn, FaBusAlt, FaCalendarAlt, FaChartLine, FaBell,
  FaRegClock, FaGraduationCap, FaCalendarCheck, FaFileInvoice, FaChartBar, FaUsers,
} from 'react-icons/fa';
import timeBackImg from '../../assets/school-time-back.webp';
import { SectionHeading } from '../ServiceSections';
import Eyebrow from '../ui/Eyebrow';

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 } };

/* ------------------------------------------------------------------ */
/* 1. Give your staff their time back: story on the left, ERP illustration + highlights on the right */

const TIME_BACK_TILES = [
  { Icon: FaCalendarCheck, title: 'Smart Attendance', tone: 'text-[#1747a6]', bg: 'bg-[#eef4ff]' },
  { Icon: FaFileInvoice, title: 'Fee Management', tone: 'text-[#f2700f]', bg: 'bg-[#fff3e8]' },
  { Icon: FaChartBar, title: 'Instant Reports', tone: 'text-[#7c3aed]', bg: 'bg-[#f3efff]' },
  { Icon: FaUsers, title: 'Student Communication', tone: 'text-[#16a34a]', bg: 'bg-[#ecfaf1]' },
];

export const TimeBackSection = () => (
  <section id="time-back" className="relative scroll-mt-24 w-full overflow-hidden bg-gradient-to-br from-[#f3f7ff] via-[#f8fbff] to-[#fff7ef] px-4 sm:px-6 lg:px-8 py-6 sm:py-14">
    {/* soft orange arc behind the illustration */}
    <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-10 hidden lg:block w-[640px] h-[640px] rounded-full border-[56px] border-[#fde3c8]/50" />

    <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Story */}
      <motion.div {...reveal} transition={{ duration: 0.6 }}>
        <Eyebrow>More Time for Teaching</Eyebrow>

        <h2 className="relative mt-4 text-heading font-extrabold leading-[1.12] tracking-tight text-[#0b1f4d]">
          <span className="relative inline-block">
            Give Your Staff Their
            {/* spark lines */}
            <svg aria-hidden="true" viewBox="0 0 40 40" className="absolute -right-8 sm:-right-10 -top-4 sm:-top-5 w-7 h-7 sm:w-9 sm:h-9 text-[#f2700f]">
              <path d="M8 24 L4 12 M18 19 L20 5 M27 26 L37 16" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </span>
          <br />
          <span className="relative inline-block text-[#f2700f]">
            Time Back
            <svg aria-hidden="true" viewBox="0 0 200 14" preserveAspectRatio="none" className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-2.5 sm:h-3.5 text-[#f2700f]">
              <path d="M2 10 C 60 2, 140 2, 198 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h2>

        <p className="mt-6 text-[13px] sm:text-[15.5px] text-slate-600 leading-relaxed">
          Every school day, hours quietly disappear into registers, fee receipts, marks sheets and phone calls asking for updates.
          Teachers copy attendance by hand, the office types the same student details into three different places, and report
          cards swallow entire weekends at the end of every term.
        </p>

        {/* Highlight card: title row + full-width checklist (reads cleanly on phones) */}
        <div className="mt-5 rounded-2xl bg-[#eef4ff]/80 border border-[#dfe8fb] border-l-4 border-l-[#f2700f] p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[17px] sm:text-[21px] text-[#f2700f]">
              <FaGraduationCap />
            </span>
            <p className="text-[14px] sm:text-[16px] font-extrabold text-[#0b1f4d] leading-snug">
              Arvion School ERP takes that load off your team.
            </p>
          </div>
          <ul className="mt-3.5 grid gap-2.5 sm:grid-cols-2 sm:gap-x-5 list-none p-0">
            {[
              'Attendance in a few taps, reports build themselves.',
              'Fee receipts, dues and reminders generated automatically.',
              'Marks entered once, report cards ready to print or publish.',
              'Circulars reach every student instantly, no phone calls.',
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-[12.5px] sm:text-[14px] text-slate-600 leading-snug">
                <FaCheckCircle aria-hidden="true" className="mt-[2px] flex-shrink-0 text-[#22a06b]" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-[13px] sm:text-[15.5px] text-slate-600 leading-relaxed">
          The result is simple: your office runs faster, your teachers get back to teaching, and your leadership sees the whole
          school on one dashboard, in real time.
          <span className="block mt-1 font-bold text-[#f2700f]">Less paperwork. Fewer errors. More time for what truly matters: your students.</span>
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff8a1f] to-[#f26a0c] hover:from-[#f57c10] hover:to-[#e35f05] text-white text-[13px] sm:text-[14.5px] font-bold no-underline shadow-[0_10px_24px_-10px_rgba(242,112,15,.7)] transition-colors"
        >
          See It in Action <FaArrowRight className="text-[11.5px]" />
        </Link>
      </motion.div>

      {/* Illustration + highlights */}
      <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
        <img
          src={timeBackImg}
          alt="Arvion School ERP dashboard on a laptop showing students, teachers, classes and attendance"
          width={580}
          height={440}
          loading="lazy"
          className="block w-full max-w-[580px] mx-auto h-auto [mask-image:radial-gradient(ellipse_at_center,#000_70%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,#000_70%,transparent_100%)]"
        />
        <ul className="relative mt-4 sm:mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TIME_BACK_TILES.map(({ Icon, title, tone, bg }) => (
            <li key={title} className={`flex flex-col items-center justify-center gap-2 rounded-2xl ${bg} border border-white shadow-[0_8px_24px_-16px_rgba(11,42,107,.35)] px-2 py-4 text-center`}>
              <Icon className={`text-[21px] ${tone}`} />
              <span className="text-[12px] sm:text-[12.5px] font-bold text-[#0b1f4d] leading-tight">{title}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 2. Switching from Excel or another ERP                              */

const SWITCH_GROUPS = [
  {
    Icon: FaUserGraduate, heading: 'What We Move For You',
    items: ['Student records', 'Classes, sections and subjects', 'Fee structures and pending dues', 'Staff records', 'Past marks, where available'],
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
  <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
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
            <span className="absolute top-3 right-4 text-[21px] sm:text-[29px] font-black text-[#1747a6]/10 leading-none">0{idx + 1}</span>
            <div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-200/70">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1747a6] text-white flex items-center justify-center text-sm sm:text-base flex-shrink-0">
                {Icon && <Icon />}
              </span>
              <h3 className="text-[13px] sm:text-[15.5px] font-bold text-[#0b1f4d] leading-snug">{heading}</h3>
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[11.5px] sm:text-[13.5px] text-slate-600 leading-snug">
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
/* 3. Student app: feature list + phone mockup (parents use the student login) */

const STUDENT_FEATURES = [
  { Icon: FaMoneyBillWave, title: 'Fees and Online Payment', desc: 'See dues and receipts, and pay online when the payment gateway add-on is enabled.' },
  { Icon: FaClipboardCheck, title: 'Attendance', desc: 'Check daily attendance and the monthly record.' },
  { Icon: FaBookOpen, title: 'Homework', desc: 'View homework and assignments with due dates.' },
  { Icon: FaBullhorn, title: 'Circulars and Alerts', desc: 'Get notices, holiday announcements and fee reminders instantly.' },
  { Icon: FaChartLine, title: 'Results and Report Cards', desc: 'See marks and report cards as soon as the school publishes them.' },
  { Icon: FaBusAlt, title: 'Bus Tracking', desc: 'Track the school vehicle in real time.' },
];

// Illustrative notifications shown inside the phone mockup
const PHONE_ITEMS = [
  { Icon: FaClipboardCheck, tone: 'bg-green-100 text-green-600', title: 'Attendance', text: 'Marked present today' },
  { Icon: FaBookOpen, tone: 'bg-blue-100 text-blue-600', title: 'Homework', text: 'Maths: Exercise 4.2, due Friday' },
  { Icon: FaMoneyBillWave, tone: 'bg-orange-100 text-orange-600', title: 'Fee reminder', text: 'Term 2 fee due next week' },
  { Icon: FaBusAlt, tone: 'bg-purple-100 text-purple-600', title: 'School bus', text: 'Bus is 5 minutes away' },
  { Icon: FaCalendarAlt, tone: 'bg-sky-100 text-sky-600', title: 'Circular', text: 'Annual day on Saturday' },
];

export const StudentExperience = () => (
  <section className="w-full bg-gradient-to-b from-[#f6f9ff] to-white px-4 sm:px-6 lg:px-8 py-6 sm:py-12 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        pill="Student App"
        title="Students Stay Informed,"
        highlight="Without Calling the Office"
        desc="Attendance, homework, fees and results in one student login."
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-6 lg:gap-10 items-center">
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-1">
          {STUDENT_FEATURES.map(({ Icon, title, desc }, idx) => (
            <motion.div
              key={title} {...reveal} transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="flex items-start gap-3 bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(11,42,107,.05)] p-3.5 sm:p-4 hover:border-orange-200 transition-colors"
            >
              <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-orange-50 text-[#f2700f] flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                {Icon && <Icon />}
              </span>
              <div>
                <h3 className="text-[12px] sm:text-[14.5px] font-bold text-[#0b1f4d] leading-snug">{title}</h3>
                <p className="mt-0.5 text-[11px] sm:text-[12.5px] text-slate-500 leading-snug">{desc}</p>
              </div>
            </motion.div>
          ))}
          <p className="sm:col-span-2 text-[11px] sm:text-[11.5px] text-slate-500">The student mobile app is available as an add-on.</p>
        </div>

        {/* Phone mockup */}
        <motion.div {...reveal} transition={{ duration: 0.6 }} className="order-1 lg:order-2 flex justify-center" aria-hidden="true">
          <div className="relative w-[230px] sm:w-[260px] rounded-[2.2rem] bg-[#0b1f4d] p-2.5 shadow-[0_18px_30px_-22px_rgba(11,42,107,.45)]">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-[#0b1f4d] z-10" />
            <div className="rounded-[1.8rem] bg-[#f4f7fc] overflow-hidden">
              <div className="bg-gradient-to-r from-[#1747a6] to-[#0c2f79] px-4 pt-7 pb-4 text-white">
                <p className="text-[10px] text-blue-100">Good morning</p>
                <p className="text-[13px] font-extrabold leading-tight">Student Dashboard</p>
                <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center">
                  {[['96%', 'Attendance'], ['2', 'Homework'], ['1', 'Fee due']].map(([v, l]) => (
                    <div key={l} className="rounded-lg bg-white/15 py-1.5">
                      <p className="text-[12px] font-black leading-none">{v}</p>
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
