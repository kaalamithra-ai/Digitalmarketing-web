import Link from "next/link";
import { CaseStudy } from "@/lib/content/caseStudies";

type CaseStudyDetailProps = {
  caseStudy: CaseStudy;
};

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Client Challenge</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {caseStudy.challenge}
        </p>
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Solution Implemented</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          {caseStudy.solution.map((step) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Results</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {caseStudy.results.map((result) => (
            <article
              key={result.label}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {result.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-secondary">{result.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Execution Timeline</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {caseStudy.timeline.map((item, index) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <span className="text-sm text-slate-700">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-gradient-to-r from-secondary to-slate-700 p-6 text-white shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold">Let&apos;s Talk</h2>
        <p className="mt-3 text-sm text-slate-100 md:text-base">
          Let&apos;s map your growth goals and build a plan tailored to your business stage.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-secondary transition hover:bg-slate-100"
        >
          Let&apos;s Talk
        </Link>
      </section>
    </div>
  );
}
