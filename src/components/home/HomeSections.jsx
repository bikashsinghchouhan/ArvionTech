// Home page section: "How it works".
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Settings2, GraduationCap, Rocket } from 'lucide-react';
import Eyebrow from '../ui/Eyebrow';

const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } };

// Pill with side lines + title (one word highlighted) + optional line of text, same look as other home sections
const Heading = ({ eyebrow, before, highlight, after = '', desc }) => (
  <motion.div {...reveal} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-9 sm:mb-11">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="mt-4 text-heading font-extrabold tracking-tight leading-tight text-[#0b1f4d]">
      {before}<span className="text-[#f7861c]">{highlight}</span>{after}
    </h2>
    {desc && <p className="mt-3 text-[14px] sm:text-[16.5px] leading-relaxed text-slate-600">{desc}</p>}
  </motion.div>
);

/* ------------------------------------------------------------ How it works */
const steps = [
  { icon: CalendarCheck, title: 'Book a demo', desc: 'See the modules and services that fit your school or business.' },
  { icon: Settings2, title: 'Setup & data migration', desc: 'We configure the system and move your existing records.' },
  { icon: GraduationCap, title: 'Staff training', desc: 'Your team learns the system before it goes live.' },
  { icon: Rocket, title: 'Go live & support', desc: 'Start using it, with our Bengaluru team ready to help.' },
];

export const HowItWorks = () => (
  <section id="how-it-works" className="scroll-mt-24 w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 bg-[#f6f9ff]">
    <div className="max-w-6xl mx-auto">
      <Heading
        eyebrow="How It Works"
        before="From demo to "
        highlight="go live"
        after=" in 4 steps"
        desc="A guided start, so your team is comfortable from day one."
      />

      <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 list-none m-0 p-0">
        {/* connecting line behind the step numbers (large screens) */}
        <span aria-hidden="true" className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-[repeating-linear-gradient(90deg,#f7941d_0_8px,transparent_8px_16px)]" />

        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.li
            key={title}
            {...reveal}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative flex flex-col items-center text-center"
          >
            <span className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-b from-[#ff9c3f] to-[#f2700f] text-white flex items-center justify-center shadow-lg shadow-orange-500/25 ring-4 ring-[#f6f9ff]">
              <Icon size={26} strokeWidth={2} />
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0f2a6b] text-white text-[11.5px] font-extrabold flex items-center justify-center ring-2 ring-[#f6f9ff]">
                {i + 1}
              </span>
            </span>
            <div className="mt-4 w-full bg-white rounded-2xl border border-slate-200/70 shadow-[0_6px_20px_-12px_rgba(15,42,107,.18)] px-5 py-5 flex-1">
              <h3 className="text-card-title font-extrabold text-[#0f2a6b]">{title}</h3>
              <p className="mt-1.5 text-card-desc text-slate-600 leading-relaxed">{desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);
