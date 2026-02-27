"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { caseStudies, CaseStudy } from "@/lib/content/caseStudies";
import CaseStudyCard, { CaseStudyCardItem } from "@/components/caseStudies/CaseStudyCard";

type CaseStudiesListingProps = {
  items?: CaseStudy[];
};

const executiveSummaryContent =
  "An integrated search model combining SEO, GEO, and AEO helped Indian businesses increase discoverability, improve answer-engine visibility, and drive stronger qualified demand with measurable efficiency.";

const staticCaseStudies: CaseStudyCardItem[] = [
  {
    slug: "seo-geo-aeo-india",
    title: "How SEO, GEO & AEO Transformed Indian Businesses",
    tags: ["SEO", "GEO", "AEO", "AI Search"],
    summary: executiveSummaryContent,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" as const } },
};

export default function CaseStudiesListing({ items = caseStudies }: CaseStudiesListingProps) {
  const mappedItems = useMemo<CaseStudyCardItem[]>(() => {
    const fromProps = items.map((item) => ({
      slug: item.slug,
      title: item.title,
      summary: item.challenge,
      tags: item.services,
    }));

    const merged = new Map<string, CaseStudyCardItem>();
    [...staticCaseStudies, ...fromProps].forEach((item) => {
      merged.set(item.slug, item);
    });

    return Array.from(merged.values());
  }, [items]);

  return (
    <section className="space-y-8">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
        Case Studies Working ✅
      </div>

      {mappedItems.length === 0 ? (
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center text-sm text-slate-600">
          No case studies available.
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {mappedItems.map((item) => (
            <motion.div key={item.slug} variants={itemVariants}>
              <CaseStudyCard caseStudy={item} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
