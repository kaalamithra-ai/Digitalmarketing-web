"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import GlowCard from "@/components/ui/GlowCard";

const steps = [
  {
    title: "Discovery",
    description: "Audit your funnel, audience, and current channel performance.",
  },
  {
    title: "Strategy",
    description: "Design a plan with focused priorities tied to business outcomes.",
  },
  {
    title: "Execution",
    description: "Launch campaigns, creative, and landing pages with precision.",
  },
  {
    title: "Optimization",
    description: "Measure weekly, improve continuously, and scale what works.",
  },
];

export default function WorkingProcessWithClouds() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10">
        <svg
          viewBox="0 0 1440 120"
          className="h-20 w-full text-cyan-100/70 md:h-24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 55C73 37 146 41 220 54C293 67 366 89 440 85C513 80 586 47 660 41C733 35 806 56 880 67C953 78 1026 78 1100 65C1173 52 1246 27 1320 24C1393 21 1466 41 1540 53V120H0V55Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Process
          </p>
          <h2 className="gradient-text text-glow float-text-med mt-4 text-3xl font-semibold md:text-5xl">
            How we build momentum.
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            A structured workflow to move from clarity to measurable growth.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StaggerItem key={step.title} className="relative">
              <GlowCard contentClassName="h-full p-6" badge={`Step ${index + 1}`}>
                <div
                  className="anim-float will-change-transform mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-semibold text-teal-700 shadow-sm"
                  style={{ animationDuration: `${8 + index * 2}s` }}
                >
                  {index + 1}
                </div>
                <h3 className="gradient-text text-glow float-text-med text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </GlowCard>

              {index < steps.length - 1 ? (
                <svg
                  viewBox="0 0 120 24"
                  className="pointer-events-none absolute -right-4 top-10 hidden h-6 w-16 text-slate-300 lg:block"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 12h108" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="m98 6 10 6-10 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
