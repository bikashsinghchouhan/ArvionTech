// Sections of the standalone About Us page. Content lives in src/configurations/AboutConfig.js.
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin, Layers, Boxes, Languages, Target, Rocket, Lightbulb, UsersRound, ShieldCheck, TrendingUp,
  CheckCircle2, School, Users, FileBadge, Calculator, ArrowRight, Handshake, Scale, Lock, Expand,
  GraduationCap, Headset, Code2, Wallet, Flag, Sparkles, Quote, Phone, Mail, CalendarCheck, Linkedin,
} from 'lucide-react';
import officeImage from '../../assets/about-office-hd.webp';
import {
  aboutContact, whoWeAre, visionMission, coreValues, whatWeDo, whyChoose, journey,
  leaders, leadershipTeams, leadershipMessage,
} from '../../configurations/AboutConfig';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const reveal = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.15 } };

const SECTION = 'relative overflow-hidden w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10';

// Shared heading: pill with side lines, title with one highlighted word, optional subtitle
const SectionHeading = ({ eyebrow, before, highlight, after, desc, dark = false, align = 'center' }) => (
  <motion.div
    {...reveal}
    variants={fadeUp}
    className={`flex flex-col ${align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'} max-w-3xl mb-9 sm:mb-11`}
  >
    <div className="flex items-center gap-3 sm:gap-4">
      {align === 'center' && <span aria-hidden="true" className="w-8 sm:w-12 h-px bg-[#f7941d]/70" />}
      <span className={`px-4 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-[13px] font-extrabold uppercase tracking-[0.12em] ${dark ? 'bg-white/10 text-[#ffb366] border border-white/15' : 'bg-[#ffe9d6] text-[#e8730c]'}`}>
        {eyebrow}
      </span>
      <span aria-hidden="true" className="w-8 sm:w-12 h-px bg-[#f7941d]/70" />
    </div>
    <h2 className={`mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight ${dark ? 'text-white' : 'text-[#0b1f4d]'}`}>
      {before}<span className="text-[#f7861c]">{highlight}</span>{after}
    </h2>
    {desc && (
      <p className={`mt-3 text-[15px] sm:text-[17px] leading-relaxed ${dark ? 'text-white/75' : 'text-slate-600'}`}>{desc}</p>
    )}
  </motion.div>
);

const CARD = 'bg-white rounded-2xl border border-slate-200/70 shadow-[0_6px_20px_-12px_rgba(15,42,107,.18)]';

/* ---------------------------------------------------------------- 1. Who we are */
const highlightIcons = { office: MapPin, areas: Layers, modules: Boxes, languages: Languages };

export const WhoWeAre = () => (
  <section className={`${SECTION} bg-white`}>
    <div className="max-w-7xl mx-auto grid lg:grid-cols-[48%_1fr] gap-12 sm:gap-14 lg:gap-14 xl:gap-16 items-center lg:items-stretch">
      {/* Left: office photo with layered accents (navy bottom-left, orange top-right) */}
      <motion.div {...reveal} variants={fadeUp} className="order-2 lg:order-1 relative mx-3 sm:mx-6 lg:mx-0 lg:ml-3 lg:my-3 max-w-xl lg:max-w-none w-full justify-self-center lg:flex lg:flex-col">
        <div aria-hidden="true" className="absolute -left-2 -bottom-2 sm:-left-3 sm:-bottom-3 w-[72%] h-[70%] rounded-2xl bg-gradient-to-br from-[#1747a6] to-[#0b2a6b]" />
        <div aria-hidden="true" className="absolute -right-2 -top-2 sm:-right-3 sm:-top-3 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#ff9c3f] to-[#f47b14]" />
        <div aria-hidden="true" className="hidden sm:block absolute -right-12 bottom-16 w-20 h-24 opacity-70 bg-[radial-gradient(#1747a6_1.6px,transparent_1.6px)] [background-size:14px_14px]" />

        <div className="relative rounded-2xl bg-white p-2 sm:p-2.5 border border-slate-200/70 shadow-[0_24px_50px_-24px_rgba(15,42,107,.45)] lg:flex-1 lg:min-h-[420px]">
          <img
            src={officeImage}
            alt="Arvion Technologies team working in the office"
            width="1264"
            height="848"
            loading="lazy"
            className="block w-full h-auto aspect-[1264/848] object-cover object-center rounded-xl lg:absolute lg:inset-2.5 lg:w-[calc(100%-1.25rem)] lg:h-[calc(100%-1.25rem)] lg:aspect-auto"
          />
        </div>

        {/* Floating location badge */}
        <div className="absolute -bottom-6 right-4 sm:right-8 flex items-center gap-3 bg-white rounded-xl border border-slate-200/70 shadow-[0_12px_30px_-14px_rgba(15,42,107,.45)] px-4 py-3">
          <span className="w-10 h-10 rounded-lg bg-[#fff1e3] text-[#f47b14] flex items-center justify-center"><MapPin size={19} /></span>
          <span className="leading-tight">
            <span className="block text-[14px] font-bold text-[#0b1f4d]">Made in Bengaluru</span>
            <span className="block text-xs text-slate-500">Serving clients across India</span>
          </span>
        </div>
      </motion.div>

      {/* Right: text (shown above the photo on mobile and tablet) */}
      <div className="order-1 lg:order-2 min-w-0">
        <SectionHeading
          align="left"
          eyebrow="Who We Are"
          before="Simplifying operations for "
          highlight="schools"
          after=" and businesses"
        />
        <motion.div {...reveal} variants={stagger} className="-mt-4 grid gap-4 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
          {whoWeAre.paragraphs.map((p) => <motion.p key={p.slice(0, 20)} variants={fadeUp}>{p}</motion.p>)}
        </motion.div>
        <motion.ul {...reveal} variants={stagger} className="mt-7 grid grid-cols-1 min-[440px]:grid-cols-2 gap-3 sm:gap-4">
          {whoWeAre.highlights.map(({ key, title, text }) => {
            const Icon = highlightIcons[key];
            return (
              <motion.li key={key} variants={fadeUp} className="flex items-start gap-3 rounded-xl border border-slate-200/70 bg-[#f7faff] px-4 py-3.5 shadow-[0_4px_14px_-10px_rgba(15,42,107,.25)]">
                <span className="w-10 h-10 rounded-lg bg-white text-[#1747a6] border border-blue-100 flex items-center justify-center flex-shrink-0"><Icon size={19} /></span>
                <span className="leading-snug min-w-0">
                  <span className="block text-[14px] font-bold text-[#0b1f4d]">{title}</span>
                  <span className="block text-[13px] text-slate-500">{text}</span>
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  </section>
);

/* ---------------------------------------------------- 2. Vision, mission, values */
const valueStyles = [
  { Icon: Lightbulb, icon: 'from-[#fff1e3] to-[#ffe2c7] text-[#f47b14]', bar: 'bg-[#f47b14]', wave: '#f47b14', glow: 'from-[#fff3e8]' },
  { Icon: UsersRound, icon: 'from-[#eaf2ff] to-[#d7e6ff] text-[#2563eb]', bar: 'bg-[#2563eb]', wave: '#2563eb', glow: 'from-[#eef4ff]' },
  { Icon: ShieldCheck, icon: 'from-[#f3edff] to-[#e6dcff] text-[#7c3aed]', bar: 'bg-[#7c3aed]', wave: '#7c3aed', glow: 'from-[#f5f0ff]' },
  { Icon: TrendingUp, icon: 'from-[#e8f8ee] to-[#d3f1de] text-[#16a34a]', bar: 'bg-[#22c55e]', wave: '#22c55e', glow: 'from-[#ecfaf1]' },
];

const PurposeCard = ({ Icon, label, text, points, tone }) => (
  <motion.div variants={fadeUp} className={`${CARD} relative overflow-hidden p-6 sm:p-8`}>
    <div aria-hidden="true" className={`absolute top-0 left-0 h-1 w-full ${tone.bar}`} />
    <div aria-hidden="true" className={`pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-bl ${tone.glow} to-transparent`} />
    <div className="relative flex items-center gap-4">
      <span className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tone.icon} flex items-center justify-center flex-shrink-0`}><Icon size={28} strokeWidth={1.8} /></span>
      <h3 className="text-2xl font-extrabold text-[#0b1f4d]">{label}</h3>
    </div>
    <p className="relative mt-5 text-[16px] sm:text-[17px] text-slate-700 leading-relaxed">{text}</p>
    <ul className="relative mt-5 flex flex-wrap gap-2">
      {points.map((pt) => (
        <li key={pt} className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/70 px-3 py-1 text-[13px] text-slate-700">
          <CheckCircle2 size={14} className={tone.check} /> {pt}
        </li>
      ))}
    </ul>
  </motion.div>
);

export const VisionMissionValues = () => (
  <section className={`${SECTION} bg-gradient-to-b from-[#f7faff] via-white to-[#f3f7ff] !pb-14 sm:!pb-16`}>
    <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[300px] rounded-full bg-blue-100/40 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none hidden sm:block absolute top-6 right-6 lg:right-10 w-20 h-14 opacity-70 bg-[radial-gradient(#b9cdf0_1.6px,transparent_1.6px)] [background-size:14px_14px]" />
    <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 w-full h-24 sm:h-32" viewBox="0 0 1440 160" preserveAspectRatio="none">
      <path d="M0,96 C240,40 480,40 720,92 C960,144 1200,150 1440,96 L1440,160 L0,160 Z" fill="#dbe7fb" opacity="0.55" />
      <path d="M0,124 C300,84 560,92 820,126 C1060,156 1260,150 1440,118 L1440,160 L0,160 Z" fill="#c9dbf7" opacity="0.55" />
      <path d="M560,150 C860,138 1120,96 1440,38" fill="none" stroke="#f7941d" strokeWidth="2" opacity="0.85" />
    </svg>

    <div className="relative max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Our Foundations"
        before="Vision, Mission & "
        highlight="Values"
        desc="Where we are heading, how we get there, and the principles behind every project we take on."
      />

      <motion.div {...reveal} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <PurposeCard Icon={Target} label="Our Vision" text={visionMission.vision} points={visionMission.visionPoints}
          tone={{ icon: 'from-[#fff1e3] to-[#ffe2c7] text-[#f47b14]', bar: 'bg-[#f47b14]', glow: 'from-[#fff3e8]', check: 'text-[#f47b14]' }} />
        <PurposeCard Icon={Rocket} label="Our Mission" text={visionMission.mission} points={visionMission.missionPoints}
          tone={{ icon: 'from-[#eaf2ff] to-[#d7e6ff] text-[#2563eb]', bar: 'bg-[#2563eb]', glow: 'from-[#eef4ff]', check: 'text-[#2563eb]' }} />
        <PurposeCard Icon={ShieldCheck} label="Our Values" text={visionMission.values} points={visionMission.valuesPoints}
          tone={{ icon: 'from-[#f3edff] to-[#e4d8ff] text-[#7c3aed]', bar: 'bg-[#7c3aed]', glow: 'from-[#f5f0ff]', check: 'text-[#7c3aed]' }} />
      </motion.div>

      <motion.h3 {...reveal} variants={fadeUp} className="mt-12 sm:mt-14 mb-6 text-center text-lg sm:text-xl font-extrabold text-[#0b1f4d]">
        The values that guide us
      </motion.h3>
      <motion.div {...reveal} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {coreValues.map(({ title, desc }, i) => {
          const tone = valueStyles[i % valueStyles.length];
          const Icon = tone.Icon;
          return (
            <motion.div key={title} variants={fadeUp} className={`${CARD} group relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(15,42,107,.28)] transition-all duration-300 p-6 sm:p-7 pb-12 sm:pb-14`}>
              <div aria-hidden="true" className={`pointer-events-none absolute -top-10 -right-16 w-48 h-48 rounded-full bg-gradient-to-bl ${tone.glow} to-transparent`} />
              <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[62%] h-12" viewBox="0 0 200 48" preserveAspectRatio="none">
                <path d="M0,48 C80,46 150,36 200,6 L200,48 Z" fill={tone.wave} opacity="0.12" />
                <path d="M70,48 C130,44 172,30 200,14 L200,48 Z" fill={tone.wave} opacity="0.9" />
              </svg>
              <span className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${tone.icon} transition-transform duration-300 group-hover:scale-105`}>
                <Icon size={28} strokeWidth={1.8} />
              </span>
              <h4 className="relative mt-5 text-xl font-extrabold text-[#0b1f4d]">{title}</h4>
              <span aria-hidden="true" className={`relative block mt-3 w-10 h-1 rounded-full ${tone.bar}`} />
              <p className="relative mt-4 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">{desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

/* --------------------------------------------------------------- 3. What we do */
const serviceStyles = {
  school: { Icon: School, accent: '#1747a6', soft: 'bg-blue-50 text-[#1747a6]' },
  payroll: { Icon: Users, accent: '#f47b14', soft: 'bg-[#fff1e3] text-[#f47b14]' },
  statutory: { Icon: FileBadge, accent: '#7c3aed', soft: 'bg-[#f3edff] text-[#7c3aed]' },
  accounting: { Icon: Calculator, accent: '#16a34a', soft: 'bg-[#e8f8ee] text-[#16a34a]' },
};

export const WhatWeDo = () => (
  <section className={`${SECTION} bg-white`}>
    <div className="relative max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="What We Do"
        before="Four practice areas. "
        highlight="One partner."
        desc="Software and services that cover the everyday operations of a school or a business, delivered by one team."
      />
      <motion.div {...reveal} variants={stagger} className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        {whatWeDo.map(({ key, vertical, title, desc, points, path }) => {
          const { Icon, accent, soft } = serviceStyles[key];
          return (
            <motion.div key={key} variants={fadeUp} className={`${CARD} group relative overflow-hidden p-6 sm:p-7 flex flex-col hover:-translate-y-1 hover:shadow-[0_14px_30px_-16px_rgba(15,42,107,.28)] transition-all duration-300`}>
              <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1" style={{ background: accent }} />
              <div className="flex items-start gap-4">
                <span className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${soft}`}><Icon size={26} strokeWidth={1.8} /></span>
                <div className="min-w-0">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.12em]" style={{ color: accent }}>{vertical}</span>
                  <h3 className="text-xl sm:text-[22px] font-extrabold text-[#0b1f4d] leading-tight">{title}</h3>
                </div>
              </div>
              <p className="mt-4 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">{desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {points.map((pt) => (
                  <li key={pt} className="rounded-full bg-slate-50 border border-slate-200/70 px-3 py-1 text-[12px] sm:text-[13px] text-slate-700">{pt}</li>
                ))}
              </ul>
              <Link to={path} className="mt-5 sm:mt-auto sm:pt-5 inline-flex items-center gap-1.5 text-[14px] font-bold w-max focus:outline-none focus-visible:underline" style={{ color: accent }}>
                Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

/* ------------------------------------------------------- 4. Why choose Arvion */
const whyIcons = { partner: Handshake, compliance: Scale, secure: Lock, scalable: Expand, onboarding: GraduationCap, support: Headset };

export const WhyChooseArvion = () => (
  <section className={`${SECTION} bg-gradient-to-br from-[#0a2766] via-[#0e3480] to-[#14409a] text-white`}>
    <div aria-hidden="true" className="pointer-events-none absolute -top-16 left-[8%] w-72 h-72 rounded-[40%] bg-white/[0.05] rotate-12" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-[6%] w-80 h-80 rounded-full bg-white/[0.04]" />

    <div className="relative max-w-6xl mx-auto">
      <SectionHeading
        dark
        eyebrow="Why Arvion"
        before="Why organisations "
        highlight="choose us"
        desc="The practical reasons schools and businesses trust us with their day-to-day operations."
      />
      <motion.div {...reveal} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {whyChoose.map(({ key, title, desc }) => {
          const Icon = whyIcons[key];
          return (
            <motion.div key={key} variants={fadeUp} className="group rounded-2xl bg-white/[0.06] border border-white/10 p-6 hover:bg-white/[0.1] transition-colors duration-300">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#ff9c3f] to-[#f2700f] text-white flex items-center justify-center shadow-lg shadow-orange-900/30"><Icon size={22} /></span>
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-white/75 leading-relaxed">{desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ 5. Journey */
const journeyIcons = [Flag, School, Users, Calculator, Sparkles];

export const Journey = () => (
  <section className={`${SECTION} bg-[#f7faff]`}>
    <div className="relative max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Our Journey"
        before="How we "
        highlight="got here"
        desc="From a simple idea in Bengaluru to a partner for schools and businesses across India."
      />
      <motion.ol {...reveal} variants={stagger} className="relative grid gap-6 lg:grid-cols-5 lg:gap-5">
        {/* Connecting line: vertical on small screens, horizontal on large */}
        <span aria-hidden="true" className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#f7941d] via-[#1747a6] to-[#1747a6]/20 lg:hidden" />
        <span aria-hidden="true" className="hidden lg:block absolute left-[10%] right-[10%] top-[27px] h-0.5 bg-gradient-to-r from-[#f7941d] via-[#1747a6] to-[#1747a6]/30" />
        {journey.map(({ year, label, title, desc }, i) => {
          const Icon = journeyIcons[i % journeyIcons.length];
          const last = i === journey.length - 1;
          return (
            <motion.li key={title} variants={fadeUp} className="relative grid grid-cols-[56px_1fr] gap-4 lg:grid-cols-1 lg:justify-items-center lg:text-center">
              <span className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-4 border-[#f7faff] shadow-md ${last ? 'bg-gradient-to-b from-[#ff9c3f] to-[#f2700f] text-white' : 'bg-white text-[#1747a6]'}`}>
                <Icon size={22} />
              </span>
              <div className={`${CARD} p-4 sm:p-5 lg:w-full`}>
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-[0.1em] ${last ? 'bg-[#ffe9d6] text-[#e8730c]' : 'bg-blue-50 text-[#1747a6]'}`}>
                  {year || label}
                </span>
                <h3 className="mt-2 text-[16px] sm:text-[17px] font-bold text-[#0b1f4d] leading-snug">{title}</h3>
                <p className="mt-1.5 text-[13px] sm:text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </div>
  </section>
);

/* --------------------------------------------------------------- 6. Leadership */
const teamIcons = { product: Code2, payroll: Wallet, finance: Calculator, success: Headset };

const initialsOf = (name) => name.split(/\s+/).filter(Boolean).map((w) => w[0]).slice(0, 2).join('').toUpperCase();

export const Leadership = () => (
  <section className={`${SECTION} bg-white`}>
    <div className="relative max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Leadership"
        before="The people "
        highlight="behind Arvion"
        desc={leaders.length ? 'Meet the team leading our products and services.' : 'Specialist teams, led by experienced professionals, working as one for every client.'}
      />

      {leaders.length > 0 ? (
        <motion.div {...reveal} variants={stagger} className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {leaders.map(({ name, role, photo, linkedin }) => (
            <motion.div key={name} variants={fadeUp} className={`${CARD} overflow-hidden text-center`}>
              <div className="aspect-[4/3] bg-gradient-to-br from-[#eaf2ff] to-[#d7e6ff] flex items-center justify-center">
                {photo
                  ? <img src={photo} alt={name} loading="lazy" className="w-full h-full object-cover" />
                  : <span className="w-20 h-20 rounded-full bg-[#1747a6] text-white text-2xl font-extrabold flex items-center justify-center">{initialsOf(name)}</span>}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-[#0b1f4d]">{name}</h3>
                <p className="text-sm text-slate-500">{role}</p>
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`} className="mt-3 inline-flex w-9 h-9 rounded-full bg-blue-50 text-[#1747a6] items-center justify-center hover:bg-[#1747a6] hover:text-white transition-colors">
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div {...reveal} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {leadershipTeams.map(({ key, title, desc }) => {
            const Icon = teamIcons[key];
            return (
              <motion.div key={key} variants={fadeUp} className={`${CARD} p-6 text-center`}>
                <span className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#eaf2ff] to-[#d7e6ff] text-[#1747a6] flex items-center justify-center ring-4 ring-blue-50"><Icon size={26} strokeWidth={1.8} /></span>
                <h3 className="mt-4 text-lg font-extrabold text-[#0b1f4d]">{title}</h3>
                <p className="mt-2 text-[14px] text-slate-600 leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Leadership message */}
      <motion.figure {...reveal} variants={fadeUp} className="relative mt-10 sm:mt-12 rounded-2xl bg-gradient-to-r from-[#f7faff] to-white border border-slate-200/70 px-6 py-8 sm:px-12 sm:py-10 overflow-hidden">
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#f7941d] to-[#1747a6]" />
        <Quote aria-hidden="true" size={56} className="absolute right-6 top-4 text-[#f7941d]/15" />
        <blockquote className="relative text-[17px] sm:text-xl lg:text-[22px] text-[#0b1f4d] font-semibold leading-relaxed">
          “{leadershipMessage.quote}”
        </blockquote>
        <figcaption className="mt-5 flex items-center gap-3 text-sm font-bold text-slate-600">
          <span aria-hidden="true" className="w-8 h-0.5 bg-[#f7941d]" /> {leadershipMessage.author}
        </figcaption>
      </motion.figure>
    </div>
  </section>
);

/* ----------------------------------------------------------- 8. Final call to action */
export const FinalCTA = () => (
  <section className={`${SECTION} bg-white !pt-4 sm:!pt-6`}>
    <motion.div
      {...reveal}
      variants={fadeUp}
      className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a2766] via-[#0e3480] to-[#14409a] text-white px-6 py-10 sm:px-12 sm:py-12 lg:px-14"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-white/[0.06]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-[35%] w-64 h-64 rounded-[40%] bg-white/[0.05] rotate-12" />

      <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
        <div>
          <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold leading-tight">
            Let's build something <span className="text-[#ffb366]">great together</span>
          </h2>
          <p className="mt-3 text-[15px] sm:text-[17px] text-white/80 leading-relaxed max-w-xl">
            Tell us about your school or business. We'll show you how Arvion can save your team time and keep you compliant.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2.5 h-12 px-6 sm:px-7 rounded-lg bg-gradient-to-b from-[#ff9c3f] to-[#f2700f] hover:brightness-105 text-white font-bold text-[15px] shadow-lg shadow-orange-900/30 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300">
              <CalendarCheck size={18} /> Book a Free Demo
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2.5 h-12 px-6 sm:px-7 rounded-lg bg-white hover:bg-blue-50 text-[#0f2a6b] font-bold text-[15px] shadow-lg shadow-black/15 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200">
              Contact Us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          <a href={`tel:${aboutContact.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 rounded-xl bg-white/[0.07] border border-white/10 px-5 py-4 hover:bg-white/[0.12] transition-colors">
            <span className="w-11 h-11 rounded-lg bg-white/10 text-[#ffb366] flex items-center justify-center"><Phone size={20} /></span>
            <span className="leading-tight">
              <span className="block text-xs text-white/60">Call us</span>
              <span className="block text-[15px] sm:text-base font-bold">{aboutContact.phone}</span>
            </span>
          </a>
          <a href={`mailto:${aboutContact.email}`} className="flex items-center gap-4 rounded-xl bg-white/[0.07] border border-white/10 px-5 py-4 hover:bg-white/[0.12] transition-colors">
            <span className="w-11 h-11 rounded-lg bg-white/10 text-[#ffb366] flex items-center justify-center"><Mail size={20} /></span>
            <span className="leading-tight min-w-0">
              <span className="block text-xs text-white/60">Email us</span>
              <span className="block text-[15px] sm:text-base font-bold break-all">{aboutContact.email}</span>
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);
