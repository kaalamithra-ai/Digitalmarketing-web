"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import GlowCard from "@/components/ui/GlowCard";

const caseStudies = [
  {
    title: "SaaS Pipeline Growth",
    metric: "+147% SQL growth",
    description:
      "Rebuilt paid search and landing page flows to improve lead quality and close velocity.",
    href: "/case-studies/saas-pipeline-growth",
  },
  {
    title: "Ecommerce Revenue Lift",
    metric: "2.4x ROAS",
    description:
      "Scaled creative testing and remarketing sequences to improve purchase frequency.",
    href: "/case-studies/ecommerce-revenue-lift",
  },
  {
    title: "B2B CAC Improvement",
    metric: "-34% CAC",
    description:
      "Aligned channel messaging and attribution with sales stages for higher conversion efficiency.",
    href: "/case-studies/b2b-cac-improvement",
  },
];

export default function CaseStudiesCarousel() {
  return (
    <section className="bg-slate-50/70 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Case Studies
          </p>
          <h2 className="gradient-text text-glow float-text-med mt-4 text-3xl font-semibold md:text-5xl">
            Proof of performance.
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Outcomes from growth programs engineered for measurable impact.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <StaggerItem key={item.href}>
              <GlowCard contentClassName="flex h-full flex-col p-6" badge={item.metric}>
                <span className="inline-flex w-fit rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                  {item.metric}
                </span>
                <h3 className="gradient-text text-glow float-text-med mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-teal-700 transition duration-300 group-hover:translate-x-0.5"
                >
                  View case study &rarr;
                </Link>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm md:p-8">
          <p className="text-sm text-slate-600">Need a tailored growth roadmap?</p>
          <Link
            href="/contact"
            className="relative mt-4 inline-flex overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_-12px_rgba(249,115,22,0.6)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Let&apos;s Talk</span>
            <span
              aria-hidden
              className="anim-shine absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
