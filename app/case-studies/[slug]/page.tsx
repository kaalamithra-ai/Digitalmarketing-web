import Link from "next/link";

type PageProps = {
  params: Promise<{ slug?: string }>;
};

function toTitle(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const title = slug ? toTitle(slug) : "Case Study";

  return (
    <main className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">Case Study</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-4 text-slate-600">Detailed case study content will be restored here.</p>
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

