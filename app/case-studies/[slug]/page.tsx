import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/caseStudies/CaseStudyDetail";
import { CASE_STUDIES } from "@/components/caseStudies/caseStudiesData";

type PageProps = {
  params: Promise<{ slug?: string }>;
};

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const cs = CASE_STUDIES.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  return (
    <main className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <CaseStudyDetail data={cs} />
        <Link
          href="/case-studies"
          className="mt-8 inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          &larr; Back to Case Studies
        </Link>
      </div>
    </main>
  );
}
