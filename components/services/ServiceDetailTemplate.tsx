"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { ServiceDetail } from "@/data/serviceDetails";

type Props = {
  data: ServiceDetail;
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/85 shadow-sm">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-slate-900 md:text-base">{q}</span>
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden px-5 pb-4 text-sm leading-relaxed text-slate-600">{a}</div>
      </div>
    </article>
  );
}

export default function ServiceDetailTemplate({ data }: Props) {
  const glowStyle = {
    backgroundImage: `radial-gradient(circle at 0% 0%, ${data.accent.from}1f 0%, transparent 42%), radial-gradient(circle at 100% 0%, ${data.accent.to}1c 0%, transparent 40%)`,
  };

  return (
    <main className="min-h-screen bg-white py-14 text-slate-900 md:py-20" style={glowStyle}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <section className="grid gap-8 rounded-3xl border border-white/60 bg-white/70 p-7 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.38)] backdrop-blur xl:grid-cols-12">
          <div className="xl:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              {data.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {chip}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">{data.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">{data.subtitle}</p>
          </div>

          <div className="xl:col-span-5">
            <div className="float-media relative h-56 overflow-hidden rounded-3xl border border-white/80 bg-white/85 shadow-inner md:h-64">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${data.accent.from}18 0%, transparent 55%), radial-gradient(circle at 70% 80%, ${data.accent.to}16 0%, transparent 58%)`,
                }}
              />
              <div className="relative h-full w-full">
                <Image
                  src={data.imageSrc}
                  alt={`${data.title} service illustration`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 40vw"
                  className="object-contain p-8 md:p-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold md:text-3xl">What You Get</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {data.whatYouGet.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/70 bg-white/75 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Our Process</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-white/90 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Step {index + 1}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-12">
          <article className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur lg:col-span-8 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Deliverables</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {data.deliverables.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur lg:col-span-4 md:p-8">
            <div className="float-media relative h-56 overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-inner">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 75% 25%, ${data.accent.to}1a 0%, transparent 60%), radial-gradient(circle at 20% 80%, ${data.accent.from}14 0%, transparent 58%)`,
                }}
              />
              <div className="relative h-full w-full">
                <Image
                  src={data.imageSrc}
                  alt={`${data.title} deliverables illustration`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-contain p-7"
                />
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold md:text-3xl">KPI Impact</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {data.kpiImpact.map((metric) => (
              <article
                key={metric.label}
                className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                <p className="mt-2 text-3xl font-bold" style={{ color: data.accent.from }}>
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-slate-600">{metric.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
          <div className="mt-5 space-y-3">
            {data.faq.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            &larr; Back to Services
          </Link>
        </div>
      </div>
    </main>
  );
}
