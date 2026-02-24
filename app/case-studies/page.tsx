import Link from "next/link";

const caseStudies = [
  "saas-pipeline-growth",
  "ecommerce-revenue-lift",
  "b2b-cac-improvement",
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">Case Studies</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Case Studies</h1>
        <p className="mt-4 max-w-3xl text-slate-600">Case study pages are being restored. Open placeholders below.</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((slug) => (
            <Link
              key={slug}
              href={`/case-studies/${slug}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {slug.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

