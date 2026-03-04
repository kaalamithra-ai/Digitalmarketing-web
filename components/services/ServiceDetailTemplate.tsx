"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ServiceDetail, ServiceContentItem, ServiceFaqItem } from "@/data/serviceDetails";

type Props = {
  data: ServiceDetail;
};

function FaqItem({ index, item }: { index: number; item: ServiceFaqItem }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <article
      className={`rounded-[1.6rem] border p-5 backdrop-blur-xl transition duration-300 md:p-6 ${
        open
          ? "border-[#bfd1ff] bg-white/85 shadow-[0_24px_60px_-34px_rgba(83,109,214,0.34)]"
          : "border-white/70 bg-white/72 shadow-[0_18px_44px_-34px_rgba(99,102,241,0.22)] hover:bg-white/82 hover:shadow-[0_22px_52px_-34px_rgba(99,102,241,0.28)]"
      }`}
    >
      <button type="button" aria-expanded={open} onClick={() => setOpen((prev) => !prev)} className="flex w-full items-start justify-between gap-4 text-left">
        <div className="flex items-start gap-4">
          <span
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${
              open ? "bg-gradient-to-br from-[#4f6df0] to-[#5db1f6] text-white" : "bg-[#eef3ff] text-[#4f64bf]"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={`text-base font-semibold leading-7 md:text-lg ${open ? "text-[#3550bf]" : "text-slate-900"}`}>{item.question}</h3>
        </div>
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border text-lg transition ${
            open ? "rotate-45 border-[#bfd1ff] bg-[#eef3ff] text-[#3550bf]" : "border-slate-200 bg-white text-slate-600"
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {open ? (
        <div className="mt-4 border-t border-slate-200/70 pt-4 md:ml-14">
          <p className="max-w-3xl text-sm leading-8 text-slate-600 md:text-[15px]">{item.answer}</p>
        </div>
      ) : null}
    </article>
  );
}

function StructuredSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: ServiceContentItem[];
}) {
  const gridClassName = items.length === 3 ? "lg:grid-cols-3" : items.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2";

  return (
    <section className="mt-10 rounded-[2rem] border border-white/70 bg-white/52 p-6 shadow-[0_24px_70px_-42px_rgba(99,102,241,0.24)] backdrop-blur-2xl md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h2>
      <div className={`mt-6 grid gap-4 ${gridClassName}`}>
        {items.map((item) => (
          <article key={item.title} className="rounded-[1.4rem] border border-white/80 bg-white/78 p-5 shadow-[0_18px_42px_-34px_rgba(99,102,241,0.24)]">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ServiceDetailTemplate({ data }: Props) {
  const structureSection = data.pillars
    ? { eyebrow: "Core Pillars", title: data.pillars.title, items: data.pillars.items }
    : data.process
      ? { eyebrow: "Our Process", title: data.process.title, items: data.process.items }
      : data.framework
        ? { eyebrow: "Framework", title: data.framework.title, items: data.framework.items }
        : null;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#edf4ff_0%,#f8fbff_34%,#f5f3ff_68%,#eef6ff_100%)] py-14 text-slate-900 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/46 p-7 shadow-[0_30px_90px_-50px_rgba(99,102,241,0.3)] backdrop-blur-2xl md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(125,211,252,0.22),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(196,181,253,0.26),transparent_30%),radial-gradient(circle_at_52%_100%,rgba(224,231,255,0.28),transparent_36%)]" />

          <div className="relative grid gap-8 xl:grid-cols-12 xl:items-center">
            <div className="xl:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">{data.hero.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl bg-gradient-to-r from-[#2f4298] via-[#3f59c8] to-[#5eaaf6] bg-clip-text text-4xl font-extrabold leading-tight tracking-[-0.04em] text-transparent md:text-5xl xl:text-6xl">
                {data.hero.h1}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{data.hero.subtitle}</p>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 md:text-base">{data.overview.text}</p>
            </div>

            <div className="xl:col-span-5">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-4 shadow-[0_26px_70px_-40px_rgba(99,102,241,0.36)] backdrop-blur-2xl">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(125,211,252,0.28),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(196,181,253,0.28),transparent_28%)]" />
                <div className="relative h-64 overflow-hidden rounded-[1.5rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,255,0.78))] md:h-72">
                  <Image
                    src={data.imageSrc}
                    alt={`${data.hero.h1} illustration`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 40vw"
                    className="object-contain p-6 md:p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-white/70 bg-white/52 p-6 shadow-[0_24px_70px_-42px_rgba(99,102,241,0.24)] backdrop-blur-2xl md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Overview</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">{data.overview.title}</h2>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600 md:text-base">
            {data.seo.supportingKeywords[0]} and {data.seo.supportingKeywords[1]} are integrated naturally into planning, execution, and review so the page stays search-aware without sounding forced.
          </p>
        </section>

        {structureSection ? <StructuredSection eyebrow={structureSection.eyebrow} title={structureSection.title} items={structureSection.items} /> : null}

        <section className="mt-10 rounded-[2rem] border border-white/70 bg-white/54 p-6 shadow-[0_24px_70px_-42px_rgba(99,102,241,0.24)] backdrop-blur-2xl md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Deliverables</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">{data.deliverables.title}</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {data.deliverables.items.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-white/80 bg-white/78 px-4 py-3 text-sm leading-7 text-slate-700 shadow-[0_16px_36px_-30px_rgba(99,102,241,0.24)]">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-500">
            Any performance projections are directional only. Actual outcomes depend on market conditions, offer strength, sales process, and execution consistency.
          </p>
        </section>

        <section className="mt-10 rounded-[2rem] border border-white/70 bg-white/50 p-6 shadow-[0_24px_70px_-42px_rgba(99,102,241,0.24)] backdrop-blur-2xl md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">FAQ</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">{data.faqs.title}</h2>
          <div className="mt-6 space-y-4">
            {data.faqs.items.map((item, index) => (
              <FaqItem key={item.question} index={index} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-white/70 bg-white/54 p-6 shadow-[0_24px_70px_-42px_rgba(99,102,241,0.24)] backdrop-blur-2xl md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Next Step</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">Plan the next growth sprint with Kaalamithra</h2>
              <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">
                If you need a team that can connect strategy, execution, and commercial reporting, we can review your current funnel and outline the highest-impact next steps.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#3557c6,#5eaaf6)] px-6 py-3 text-sm font-semibold text-white shadow-[0_24px_50px_-26px_rgba(53,87,198,0.6)] transition hover:-translate-y-0.5"
              >
                Book Free Strategy Call
              </Link>
              <Link
                href="/contact?intent=audit"
                className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/78 px-6 py-3 text-sm font-semibold text-slate-800 shadow-[0_16px_36px_-30px_rgba(99,102,241,0.24)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
