"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function WhyUs() {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-indigo-50 py-14 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="sr-only" data-debug="WHY-US-UPDATED" />
      <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />

      <span className="pointer-events-none absolute left-[6%] top-14 hidden text-6xl font-semibold text-slate-700/[0.1] md:block float-wu-fast">
        Strategy
      </span>
      <span className="pointer-events-none absolute right-[9%] top-24 hidden text-5xl font-semibold text-slate-700/[0.08] lg:block float-wu-mid">
        ROI
      </span>
      <span className="pointer-events-none absolute right-[10%] bottom-16 hidden text-5xl font-semibold text-slate-700/[0.09] lg:block float-wu-slow">
        Conversion
      </span>

      <div className="pointer-events-none absolute left-[18%] top-[26%] h-4 w-4 rounded-full bg-cyan-400/30 blur-[1px] float-wu-fast" />
      <div className="pointer-events-none absolute right-[16%] top-[38%] h-5 w-5 rounded-full bg-indigo-400/25 blur-[1px] float-wu-mid" />
      <div className="pointer-events-none absolute left-[42%] bottom-[18%] h-3.5 w-3.5 rounded-full bg-cyan-500/25 blur-[1px] float-wu-slow" />

      <Container className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Why Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Because growth shouldn&apos;t be guesswork. We don&apos;t run campaigns just to stay busy -
            every move we make has a purpose. Our focus is on understanding how your customers think,
            search, click, and buy, then building marketing systems that work consistently, not temporarily.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3 rounded-2xl border border-white/50 bg-white/70 p-4 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_-36px_rgba(15,23,42,0.5)]">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />
              We Start With Clarity, Not Tools
            </li>
            <li className="flex items-start gap-3 rounded-2xl border border-white/50 bg-white/70 p-4 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_-36px_rgba(15,23,42,0.5)]">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />
              Before ads, SEO, or content, we study your business, audience, and competitors.
            </li>
            <li className="flex items-start gap-3 rounded-2xl border border-white/50 bg-white/70 p-4 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_-36px_rgba(15,23,42,0.5)]">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />
              Clear strategy comes first - execution follows.
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 p-6 shadow-[0_24px_55px_-36px_rgba(15,23,42,0.48)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_65px_-36px_rgba(15,23,42,0.5)]">
          <span className="absolute top-4 right-5 h-2.5 w-2.5 rounded-full bg-cyan-400/60 float-wu-mid" />
          <span className="absolute bottom-5 left-6 h-2 w-2 rounded-full bg-indigo-400/55 float-wu-fast" />
          <span className="absolute top-1/2 right-10 h-1.5 w-1.5 rounded-full bg-cyan-500/70 float-wu-slow" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
            We Start With Clarity, Not Tools
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Before ads, SEO, or content, we study your business, audience, and competitors.
            Clear strategy comes first - execution follows.
          </p>
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
