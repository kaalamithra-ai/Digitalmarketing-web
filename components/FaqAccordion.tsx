"use client";

import { useState } from "react";
import Link from "next/link";

type Item = {
  q: string;
  a: string;
};

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-transparent py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-[2rem] border border-white/70 bg-white/40 p-6 shadow-[0_30px_90px_-52px_rgba(99,102,241,0.28)] backdrop-blur-2xl md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">FAQ</p>
              <h2 className="mt-3 bg-gradient-to-r from-[#2f4298] via-[#3f59c8] to-[#5eaaf6] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
                Questions serious growth teams ask before they commit budget
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                Clear process, realistic timelines, and outcome-focused answers for brands that want measurable growth.
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/55 px-4 py-3 shadow-[0_16px_40px_-28px_rgba(99,102,241,0.3)] backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Response Style</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Numbers, timelines, ownership, next step</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {items.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={`${item.q}-${idx}`}
                  className={`rounded-[1.6rem] border p-5 backdrop-blur-xl transition duration-300 ${
                    isOpen
                      ? "border-[#bfd1ff] bg-white/82 shadow-[0_24px_60px_-34px_rgba(83,109,214,0.36)]"
                      : "border-white/70 bg-white/62 shadow-[0_18px_44px_-34px_rgba(99,102,241,0.24)] hover:bg-white/78 hover:shadow-[0_22px_52px_-34px_rgba(99,102,241,0.3)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${
                          isOpen
                            ? "bg-gradient-to-br from-[#4f6df0] to-[#5db1f6] text-white shadow-[0_14px_34px_-18px_rgba(79,109,240,0.8)]"
                            : "bg-[#eef3ff] text-[#4f64bf]"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <span className={`block text-base font-semibold leading-7 ${isOpen ? "text-[#3550bf]" : "text-slate-900"}`}>
                          {item.q}
                        </span>
                        <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-slate-400">
                          Strategy / Execution / Reporting
                        </span>
                      </div>
                    </div>

                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border text-lg transition ${
                        isOpen
                          ? "rotate-45 border-[#bfd1ff] bg-[#eef3ff] text-[#3550bf]"
                          : "border-slate-200 bg-white text-slate-600"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="ml-14 mt-4 border-t border-slate-200/70 pt-4">
                      <p className="max-w-3xl text-sm leading-7 text-slate-600 md:text-[15px]">{item.a}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.6rem] border border-white/70 bg-gradient-to-r from-white/70 to-white/50 p-5 shadow-[0_20px_50px_-34px_rgba(99,102,241,0.28)] backdrop-blur-xl md:flex md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Next Step</p>
              <p className="mt-2 text-sm font-semibold text-slate-800 md:text-base">
                Start with a free strategy call or download the growth audit checklist.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 md:mt-0 md:justify-end">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                Book Free Strategy Call
              </Link>

              <Link
                href={{ pathname: "/contact", query: { intent: "checklist" } }}
                className="btn-ghost inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                Download Growth Audit Checklist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
