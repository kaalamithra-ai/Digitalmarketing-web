import Link from "next/link";
import { CaseStudy } from "@/lib/content/caseStudies";
import GlowCard from "@/components/ui/GlowCard";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <GlowCard contentClassName="p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {caseStudy.industry}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">{caseStudy.title}</h3>
      <p className="mt-2 text-sm text-slate-600">
        {caseStudy.clientType} | {caseStudy.duration}
      </p>
      <p className="mt-4 text-sm font-semibold text-secondary">{caseStudy.heroMetric}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {caseStudy.services.map((service) => (
          <span
            key={`${caseStudy.slug}-${service}`}
            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
          >
            {service}
          </span>
        ))}
      </div>

      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-blue-700"
      >
        View Case Study <span aria-hidden>&rarr;</span>
      </Link>
    </GlowCard>
  );
}

