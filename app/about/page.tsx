import Link from "next/link";
import type { Metadata } from "next";

const BASE_URL = "https://dm.kaalamithra-ai.com";

export const metadata: Metadata = {
  title: "AI-First Digital Marketing Agency | About Kaalamithra",
  description:
    "Meet Kaalamithra, an AI-powered digital marketing agency that values clarity, creativity, and measurable progress to help businesses grow.",
  keywords: ["ai digital marketing agency", "digital marketing company in bangalore"],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.14),transparent_45%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">About Kaalamithra</p>
          <div className="hero-float">
            <h1 className="hero-animated-text shimmer mt-4 max-w-4xl text-4xl font-bold leading-tight motion-reduce:animate-none md:text-6xl">
              Ai Digital Marketing Agency
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            We help modern businesses scale with AI-powered marketing systems built for clarity, speed, and measurable outcomes.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition"
            >
              Start Your Growth Plan
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="group relative rounded-3xl bg-gradient-to-r from-blue-200/60 via-indigo-200/50 to-cyan-200/60 p-[1px]">
            <article className="relative rounded-3xl border border-white/60 bg-white/80 p-8 backdrop-blur-xl shadow-[0_18px_60px_-40px_rgba(15,23,42,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_80px_-50px_rgba(59,130,246,0.45)]">
              <span className="absolute right-6 top-6 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_0_6px_rgba(59,130,246,0.18)]" />
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">digital marketing company in bangalore</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                At the heart of Kaalamithra is a deep commitment to helping businesses grow through trust,
                relationships, credibility, and intelligent execution. We combine strategic thinking with AI-powered
                systems so every campaign, workflow, and decision contributes to sustainable business outcomes.
              </p>
            </article>
          </div>
          <div className="group relative rounded-3xl bg-gradient-to-r from-blue-200/60 via-indigo-200/50 to-cyan-200/60 p-[1px]">
            <article className="relative rounded-3xl border border-white/60 bg-white/80 p-8 backdrop-blur-xl shadow-[0_18px_60px_-40px_rgba(15,23,42,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_80px_-50px_rgba(59,130,246,0.45)]">
              <span className="absolute right-6 top-6 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_0_6px_rgba(59,130,246,0.18)]" />
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Business Connected Model</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                We do not run disconnected activities. Our model connects audience research, campaign execution,
                performance analytics, and optimization into one operating loop, giving your business a clear growth
                engine instead of short-term tactics.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="group relative rounded-3xl bg-gradient-to-r from-blue-200/60 via-indigo-200/50 to-cyan-200/60 p-[1px]">
            <article className="relative rounded-3xl border border-white/60 bg-white/80 p-8 backdrop-blur-xl shadow-[0_18px_60px_-40px_rgba(15,23,42,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_80px_-50px_rgba(59,130,246,0.45)]">
              <span className="absolute right-6 top-6 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_0_6px_rgba(59,130,246,0.18)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500/70">MISSION</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Data Into Growth</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                We use AI to turn data into growth, optimizing marketing, operations, and decision-making for modern businesses.
              </p>
            </article>
          </div>
          <div className="group relative rounded-3xl bg-gradient-to-r from-blue-200/60 via-indigo-200/50 to-cyan-200/60 p-[1px]">
            <article className="relative rounded-3xl border border-white/60 bg-white/80 p-8 backdrop-blur-xl shadow-[0_18px_60px_-40px_rgba(15,23,42,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_80px_-50px_rgba(59,130,246,0.45)]">
              <span className="absolute right-6 top-6 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_0_6px_rgba(59,130,246,0.18)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500/70">VISION</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Intelligent Growth</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Intelligent growth through AI-powered marketing and business innovation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Core Values</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Clarity", desc: "We simplify complex growth decisions into clear action plans." },
              { title: "Credibility", desc: "We build trust with transparent execution and accountable reporting." },
              { title: "Innovation", desc: "We combine AI and strategy to unlock new opportunities faster." },
              { title: "Consistency", desc: "We focus on systems that deliver repeatable, long-term outcomes." },
            ].map((value) => (
              <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 pt-4 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="cta-float cta-animated-bg cta-neon-stroke rounded-3xl bg-slate-900 px-6 py-10 text-white md:px-10">
            <span className="cta-light-particle cta-particle-1" />
            <span className="cta-light-particle cta-particle-2" />
            <span className="cta-light-particle cta-particle-3" />
            <span className="cta-light-particle cta-particle-4" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Next Step</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Ready to build measurable growth?</h2>
            <p className="mt-4 max-w-3xl text-slate-200">
              Partner with Kaalamithra to align strategy, execution, and analytics into one AI-first growth system.
            </p>
            <Link
              href="/contact"
              className="cta-btn-glow mt-7 inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
