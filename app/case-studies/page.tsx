import CaseStudiesListing from "@/components/caseStudies/CaseStudiesListing";

export default function CaseStudiesPage() {
  return (
    <main className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">Case Studies</p>
        <div className="hero-float">
          <h1 className="hero-animated-text shimmer mt-4 text-4xl font-semibold md:text-5xl">Case Studies</h1>
        </div>
        <p className="mt-4 max-w-3xl text-slate-600">
          Explore strategy-first growth case studies focused on measurable outcomes across search, performance, and automation.
        </p>

        <div className="mt-10">
          <CaseStudiesListing />
        </div>
      </div>
    </main>
  );
}
