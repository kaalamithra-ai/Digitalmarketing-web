"use client";

import Link from "next/link";

export default function WhyUsGlow() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-white to-indigo-50" />
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 backdrop-blur sm:text-xs sm:tracking-[0.18em]">
            <span className="h-2 w-2 rounded-full bg-indigo-600" />
            Why Us
          </div>

          <h2 className="animated-gradient-text mt-10 max-w-4xl bg-[length:300%_300%] pb-2 text-3xl font-bold leading-tight tracking-tight text-transparent md:text-5xl">
            Why Businesses Choose Kaalamithra
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
            Most businesses waste <span className="font-semibold text-slate-900">20-40%</span> of their ad budget due
            to poor targeting and weak creative testing. We fix that with a clear roadmap, structured experiments, and
            performance-led execution.
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            You get a clear growth roadmap before we spend a single rupee on ads.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard
            title="A Clear Growth Roadmap First"
            desc="We map your offer, audience, and funnel gaps-then create a step-by-step plan to improve leads and conversions."
            points={["Strategy first, execution next", "Clear funnel fixes", "Simple plan you can follow"]}
          />

          <FeatureCard
            title="Better Targeting + Better Creatives"
            desc="We improve who you reach and what you show so leads cost less and sales conversion improves."
            points={["Audience refinement", "Creative testing system", "Better CTR and lower CPL"]}
          />

          <FeatureCard
            title="Weekly Tracking You Can Understand"
            desc="Weekly reports tied to leads, calls, and revenue-not confusing jargon. You see what's working and why."
            points={["Lead-quality tracking", "Budget clarity", "Next-week action plan"]}
          />
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            Book Free Strategy Call
          </Link>

          <Link
            href={{ pathname: "/contact", query: { intent: "audit" } }}
            className="btn-ghost inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:w-auto"
          >
            Get Free Audit
          </Link>

          <span className="w-full text-center text-xs text-slate-500 sm:text-left">No long contracts. Start with a free audit + roadmap.</span>
        </div>
      </div>
      <style jsx>{`
        .animated-gradient-text {
          background-image: linear-gradient(90deg, #1e3a8a, #3b82f6, #93c5fd, #3b82f6, #1e3a8a);
          background-size: 300% 300%;
          animation: gradientFlow 5s ease-in-out infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .animated-gradient-text {
            animation: none;
          }
        }

        @keyframes gradientFlow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}

function FeatureCard({
  title,
  desc,
  points,
}: {
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <article className="group relative overflow-hidden border border-[#cfe0ff] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,250,255,0.86))] p-6 shadow-[0_22px_60px_-34px_rgba(79,109,240,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-36px_rgba(79,109,240,0.32)] sm:p-7 [border-radius:2rem_5.5rem_2.4rem_5rem]">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#7ea7ff] to-transparent opacity-80" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.24),transparent_68%)] blur-2xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] rounded-tr-[5.25rem] border-l border-b border-[#dbe6ff] bg-[radial-gradient(circle_at_30%_30%,rgba(224,233,255,0.9),rgba(243,247,255,0.4)_58%,transparent_72%)]" />
      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 rounded-full bg-[radial-gradient(#9fb4f9_1.2px,transparent_1.2px)] bg-[length:8px_8px] opacity-40" />

      <h3 className="relative z-10 max-w-[15rem] pr-6 text-lg font-extrabold leading-8 text-slate-900 transition-colors duration-300 group-hover:text-[#3550bf]">
        {title}
      </h3>
      <p className="relative z-10 mt-3 max-w-[18rem] text-sm leading-7 text-slate-600">{desc}</p>

      <ul className="relative z-10 mt-5 space-y-2.5">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f6df0] shadow-[0_0_10px_rgba(79,109,240,0.55)]" />
            <span className="leading-6">{point}</span>
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#d9e4ff] to-transparent" />

      <p className="relative z-10 mt-4 text-xs leading-6 text-slate-500">Built for small businesses that want clarity + measurable growth.</p>
    </article>
  );
}
