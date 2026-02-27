"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export type CaseStudyCardItem = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

type CaseStudyCardProps = {
  caseStudy: CaseStudyCardItem;
};

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group h-full rounded-xl bg-gradient-to-br from-blue-200/70 via-cyan-200/40 to-indigo-200/70 p-[1px]"
    >
      <div className="flex h-full flex-col rounded-xl border border-white/60 bg-white/75 p-6 shadow-[0_12px_42px_-26px_rgba(30,64,175,0.45)] backdrop-blur-sm transition-shadow duration-300 group-hover:shadow-[0_22px_56px_-28px_rgba(30,64,175,0.55)]">
        <h3 className="text-xl font-semibold leading-snug text-slate-900">{caseStudy.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{caseStudy.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={`${caseStudy.slug}-${tag}`}
              className="rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors duration-200 group-hover:text-blue-900"
        >
          Read Case Study <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </motion.article>
  );
}
