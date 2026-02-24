"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const pillItems = [
  "We Start With Clarity, Not Tools",
  "Before ads, SEO, or content, we study your business, audience, and competitors.",
  "Clear strategy comes first - execution follows.",
];

const sparkles = [
  { top: "12%", left: "8%" },
  { top: "18%", left: "28%" },
  { top: "24%", left: "72%" },
  { top: "34%", left: "86%" },
  { top: "44%", left: "14%" },
  { top: "50%", left: "42%" },
  { top: "58%", left: "64%" },
  { top: "66%", left: "82%" },
  { top: "74%", left: "22%" },
  { top: "82%", left: "54%" },
  { top: "88%", left: "74%" },
  { top: "92%", left: "10%" },
];

export default function WhyUsGlow() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-indigo-50 py-16 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_65%,rgba(99,102,241,0.28),transparent_55%)]" />

      <span className="pointer-events-none absolute left-[6%] top-10 hidden text-6xl font-semibold text-slate-900/5 md:block">
        Strategy
      </span>
      <span className="pointer-events-none absolute right-[8%] top-12 hidden text-5xl font-semibold text-slate-900/5 lg:block">
        ROI
      </span>
      <span className="pointer-events-none absolute bottom-14 right-[8%] hidden text-5xl font-semibold text-slate-900/5 lg:block">
        Conversion
      </span>

      {sparkles.map((item, idx) => (
        <span
          key={`${item.top}-${item.left}-${idx}`}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-sky-200/60 blur-[0.2px]"
          style={{ top: item.top, left: item.left }}
        />
      ))}

      <Container className="relative z-10 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="hero-float">
            <h2 className="hero-animated-text text-4xl font-extrabold leading-tight md:text-5xl">Why Us</h2>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Because growth shouldn&apos;t be guesswork. We don&apos;t run campaigns just to stay busy &ndash; every
            move we make has a purpose. Our focus is on understanding how your customers think, search, click, and
            buy, then building marketing systems that work consistently, not temporarily.
          </p>

          <ul className="mt-7 space-y-4">
            {pillItems.map((item) => (
              <li
                key={item}
                className="flex w-full items-start gap-3 rounded-full border border-blue-200/40 bg-white/70 px-6 py-5 text-sm text-slate-700 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(59,130,246,0.35)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] md:text-base"
              >
                <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="group relative rounded-3xl bg-gradient-to-r from-blue-200/60 via-indigo-200/50 to-cyan-200/60 p-[1px]">
          <article className="relative rounded-3xl border border-white/60 bg-white/70 p-8 backdrop-blur-xl shadow-[0_18px_60px_-40px_rgba(15,23,42,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_80px_-50px_rgba(59,130,246,0.45)]">
              <span className="pointer-events-none absolute right-6 top-6 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_0_6px_rgba(59,130,246,0.18)]" />
              <span className="pointer-events-none absolute bottom-6 left-6 h-1.5 w-1.5 rounded-full bg-indigo-400/80" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-600">
                WE START WITH CLARITY, NOT TOOLS
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                Before ads, SEO, or content, we study your business, audience, and competitors.
                <br />
                Clear strategy comes first &ndash; execution follows.
              </p>
            </article>
        </div>
      </Container>
    </motion.section>
  );
}
