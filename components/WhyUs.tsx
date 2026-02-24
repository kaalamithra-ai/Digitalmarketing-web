"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function WhyUs() {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_16%_12%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_84%_18%,rgba(99,102,241,0.16),transparent_32%),linear-gradient(145deg,#f5f9ff_0%,#eef5ff_44%,#f6f9ff_100%)] py-16 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-14 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-3xl" />

      <span className="pointer-events-none absolute left-[6%] top-10 hidden text-6xl font-semibold tracking-tight text-slate-900/[0.09] md:block float-wu-fast">
        Strategy
      </span>
      <span className="pointer-events-none absolute right-[7%] top-12 hidden text-5xl font-semibold tracking-tight text-slate-900/[0.08] lg:block float-wu-mid">
        ROI
      </span>
      <span className="pointer-events-none absolute bottom-14 right-[8%] hidden text-5xl font-semibold tracking-tight text-slate-900/[0.08] lg:block float-wu-slow">
        Conversion
      </span>

      <div className="pointer-events-none absolute left-[17%] top-[24%] h-1.5 w-1.5 rounded-full bg-blue-500/50 shadow-[0_0_22px_rgba(59,130,246,0.5)] float-wu-fast" />
      <div className="pointer-events-none absolute right-[15%] top-[34%] h-2 w-2 rounded-full bg-indigo-500/45 shadow-[0_0_22px_rgba(99,102,241,0.4)] float-wu-mid" />
      <div className="pointer-events-none absolute bottom-[22%] left-[45%] h-1.5 w-1.5 rounded-full bg-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.45)] float-wu-slow" />

      <Container className="relative z-10 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-4xl font-extrabold text-[#0B1B3A] md:text-5xl">
            Why Us
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Because growth shouldn&apos;t be guesswork. We don&apos;t run campaigns just to stay busy -
            every move we make has a purpose. Our focus is on understanding how your customers think,
            search, click, and buy, then building marketing systems that work consistently, not temporarily.
          </p>
          <ul className="mt-7 space-y-4 text-sm text-slate-700 md:text-base">
            <li className="flex items-start gap-3 rounded-full border border-white/60 bg-white/60 px-5 py-4 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
              <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.85)]" />
              <span>We Start With Clarity, Not Tools</span>
            </li>
            <li className="flex items-start gap-3 rounded-full border border-white/60 bg-white/60 px-5 py-4 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
              <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.85)]" />
              <span>Before ads, SEO, or content, we study your business, audience, and competitors.</span>
            </li>
            <li className="flex items-start gap-3 rounded-full border border-white/60 bg-white/60 px-5 py-4 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
              <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.85)]" />
              <span>Clear strategy comes first - execution follows.</span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <span className="pointer-events-none absolute -left-2 top-8 h-2 w-2 rounded-full bg-blue-500/60 shadow-[0_0_18px_rgba(59,130,246,0.6)] float-wu-fast" />
          <span className="pointer-events-none absolute -right-2 bottom-10 h-1.5 w-1.5 rounded-full bg-cyan-500/65 shadow-[0_0_18px_rgba(6,182,212,0.55)] float-wu-mid" />
          <span className="pointer-events-none absolute right-16 top-1 h-1.5 w-1.5 rounded-full bg-indigo-500/60 shadow-[0_0_16px_rgba(99,102,241,0.55)] float-wu-slow" />

          <div className="rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 p-[2px] shadow-[0_24px_60px_-26px_rgba(59,130,246,0.35)] shadow-blue-500/20">
            <article className="relative overflow-hidden rounded-[22px] border border-white/50 bg-white/60 p-6 backdrop-blur-xl md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-600">
                WE START WITH CLARITY, NOT TOOLS
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                Before ads, SEO, or content, we study your business, audience, and competitors.
                <br />
                Clear strategy comes first - execution follows.
              </p>
            </article>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .float-wu-fast {
          animation: wuFloatFast 6s ease-in-out infinite;
        }

        .float-wu-mid {
          animation: wuFloatMid 9s ease-in-out infinite;
        }

        .float-wu-slow {
          animation: wuFloatSlow 12s ease-in-out infinite;
        }

        @keyframes wuFloatFast {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes wuFloatMid {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes wuFloatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </motion.section>
  );
}
