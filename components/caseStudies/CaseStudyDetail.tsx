import { CaseStudyData } from "@/components/caseStudies/caseStudiesData";

type CaseStudyDetailProps = {
  data: CaseStudyData;
};

function splitParagraphs(content: string) {
  return content
    .split(/\n\s*\n/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function CaseStudyDetail({ data }: CaseStudyDetailProps) {
  const paragraphs = splitParagraphs(data.content);

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Case Study</p>
      <div className="hero-float">
        <h1 className="hero-animated-text shimmer mt-3 text-3xl font-bold leading-tight md:text-5xl">{data.title}</h1>
      </div>
      <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{data.summary}</p>

      <div className="mt-8 space-y-5">
        {paragraphs.map((paragraph, index) => (
          <p key={`${data.slug}-${index}`} className="text-base leading-relaxed text-slate-700 md:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
