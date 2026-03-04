"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-4">
      <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_16%_24%,rgba(147,197,253,0.34),transparent_42%),radial-gradient(1000px_circle_at_82%_28%,rgba(196,181,253,0.3),transparent_46%),radial-gradient(800px_circle_at_72%_72%,rgba(125,211,252,0.18),transparent_52%),linear-gradient(135deg,#edf5ff_0%,#f8fbff_36%,#f5f3ff_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),transparent_20%,transparent_80%,rgba(255,255,255,0.35))]" />
      <div className="absolute inset-0 opacity-60">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
        <div className="bubble bubble-4" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-[-8%] w-[26rem] bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.28),transparent_62%)] blur-2xl" />
      <div className="pointer-events-none absolute right-[-8%] top-[12%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.24),transparent_62%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <div className="relative z-10 grid items-center gap-10 xl:gap-16 lg:grid-cols-2">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:pr-4 lg:text-left">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-100/80 bg-white/55 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-[#4260bf] shadow-[0_10px_30px_rgba(99,102,241,0.08)] backdrop-blur-xl sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.22em]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              AI-POWERED DIGITAL MARKETING AGENCY
            </div>

            <h1 className="ref-hero-title animated-gradient-text mt-6 max-w-5xl bg-[length:300%_300%] pb-2 text-4xl font-extrabold leading-[1.05] tracking-tight text-transparent md:mt-7 md:text-6xl">
              AI-Powered Digital Marketing That Increases Your Leads by <span className="ref-hero-highlight">30-50%</span>
            </h1>

            <p className="ref-hero-body mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg sm:leading-9 lg:mx-0">
              You get a clear growth roadmap first-then we run structured testing, improve targeting, and optimize
              creatives to scale leads and revenue.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {["Meta Ads", "Google Ads", "SEO", "Creative Testing", "Automation"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/60 bg-white/42 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#5b6da3] shadow-[0_10px_24px_-20px_rgba(99,102,241,0.3)] backdrop-blur-xl sm:text-[11px] sm:tracking-[0.12em]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <Link
                href="/contact"
                className="btn-primary inline-flex w-full items-center justify-center rounded-[1.15rem] px-6 py-3.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:w-auto sm:px-8 sm:py-4"
              >
                Book Free Strategy Call
              </Link>

              <Link
                href={{ pathname: "/contact", query: { intent: "audit" } }}
                className="btn-ghost inline-flex w-full items-center justify-center rounded-[1.15rem] px-6 py-3.5 text-sm font-semibold backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:w-auto sm:px-8 sm:py-4"
              >
                Get Free Audit
              </Link>

              <p className="ref-hero-body w-full text-center text-xs sm:text-left">No spam. Your data stays private.</p>
            </div>

            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:mx-0">
              <StatCard end={300} suffix="+" label="Campaigns" hint="Across e-commerce & lead gen industries" />
              <StatCard end={4.6} suffix="x" decimals={1} label="Avg ROAS" hint="Based on last 12 months of client data" />
              <StatCard value="24/7" label="Optimization" hint="Real-time monitoring & performance tuning" />
            </div>
          </div>

          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-x-[6%] top-[6%] h-[78%] rounded-[3rem] bg-[radial-gradient(circle_at_50%_40%,rgba(125,211,252,0.3),rgba(196,181,253,0.22)_42%,rgba(255,255,255,0.04)_72%,transparent)] blur-3xl" />
            <div className="pointer-events-none absolute inset-x-[8%] bottom-[8%] h-[30%] bg-[radial-gradient(60%_100%_at_50%_50%,rgba(224,231,255,0.75),rgba(224,231,255,0.18)_56%,transparent_78%)] blur-2xl" />
            <div className="hero-visual motion-safe:animate-none relative mx-auto w-full max-w-[860px]">
              <div className="relative aspect-[1/1] overflow-hidden rounded-[1.6rem] sm:aspect-[5/4] sm:rounded-[2rem] md:aspect-[4/3] lg:min-h-[34rem] lg:rounded-[2.4rem] lg:aspect-[6/5] xl:min-h-[38rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.72),rgba(255,255,255,0.2)_36%,rgba(196,181,253,0.1)_58%,transparent_82%),linear-gradient(135deg,rgba(237,245,255,0.92)_0%,rgba(243,241,255,0.72)_52%,rgba(233,244,255,0.84)_100%)]" />
                <Image
                  src="/hero/marketing.png"
                  alt="Digital marketing strategy and analytics team illustration"
                  fill
                  priority
                  sizes="(min-width: 1536px) 860px, (min-width: 1280px) 44vw, (min-width: 1024px) 46vw, (min-width: 768px) 82vw, 94vw"
                  className="scale-[1.03] object-cover object-center sm:scale-[1.08]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_36%,rgba(244,247,255,0.18)_62%,rgba(244,247,255,0.72)_100%)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] bg-[linear-gradient(180deg,rgba(237,245,255,0),rgba(237,245,255,0.88))]" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-[14%] bg-[linear-gradient(90deg,rgba(237,245,255,0.82),rgba(237,245,255,0))]" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[14%] bg-[linear-gradient(270deg,rgba(245,243,255,0.82),rgba(245,243,255,0))]" />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-[-6%] bottom-[-3rem] h-52 rounded-t-[100%] bg-[radial-gradient(65%_100%_at_50%_0%,rgba(196,181,253,0.24),transparent_68%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.36))] blur-[2px]" />
        <div className="pointer-events-none absolute inset-x-[-8%] bottom-[-4.5rem] h-56 rounded-t-[100%] border-t border-white/30 bg-[linear-gradient(180deg,rgba(224,231,255,0.12),rgba(255,255,255,0.3))]" />
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

        .hero-visual {
          animation: heroReveal 900ms cubic-bezier(0.22, 1, 0.36, 1) both, heroFloat 7.2s ease-in-out 900ms infinite;
          transform-origin: center right;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .animated-gradient-text {
            animation: none;
          }

          .hero-visual {
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

        @keyframes heroReveal {
          0% {
            opacity: 0;
            transform: perspective(1200px) translate3d(52px, 0, 0) rotateY(-10deg) rotateZ(-1.2deg) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: perspective(1200px) translate3d(0, 0, 0) rotateY(0deg) rotateZ(0deg) scale(1);
          }
        }

        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .stat-pulse {
          transform-origin: left center;
          animation: statPulse 2.6s ease-in-out infinite;
        }

        @keyframes statPulse {
          0%,
          100% {
            transform: scaleX(0.38);
            opacity: 0.7;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

function CountUp({
  end,
  suffix = "",
  decimals = 0,
  duration = 1400,
}: {
  end: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let startTime = 0;

    const step = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [duration, end]);

  return (
    <>
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}

function StatCard({
  value,
  end,
  suffix,
  decimals,
  label,
  hint,
}: {
  value?: string;
  end?: number;
  suffix?: string;
  decimals?: number;
  label: string;
  hint: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[1.6rem] border border-white/65 bg-white/44 p-5 shadow-[0_18px_40px_-26px_rgba(99,102,241,0.3)] backdrop-blur-xl transition hover:bg-white/58">
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#7c96ff] to-transparent opacity-80" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(93,177,246,0.22),transparent_68%)] blur-2xl transition duration-500 group-hover:scale-110" />
      <div className="pointer-events-none absolute bottom-4 left-5 h-1.5 w-16 overflow-hidden rounded-full bg-[#dbe7ff]">
        <div className="stat-pulse h-full w-full rounded-full bg-[linear-gradient(90deg,#4f6df0,#5db1f6)]" />
      </div>
      <div className="text-[2rem] font-extrabold leading-none tracking-[-0.04em] text-[#3557c6]">
        {typeof end === "number" ? <CountUp end={end} suffix={suffix} decimals={decimals} /> : value}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.04em] text-[#52638f]">{label}</div>
      <div className="mt-2 pr-3 text-[12px] leading-5 text-[#607094]">{hint}</div>
    </div>
  );
}
