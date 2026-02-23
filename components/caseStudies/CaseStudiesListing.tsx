"use client";

import { useMemo, useState } from "react";
import { CaseStudy } from "@/lib/content/caseStudies";
import CaseStudyCard from "@/components/caseStudies/CaseStudyCard";

type CaseStudiesListingProps = {
  items: CaseStudy[];
};

export default function CaseStudiesListing({ items }: CaseStudiesListingProps) {
  const [industry, setIndustry] = useState("All");
  const [service, setService] = useState("All");

  const industries = useMemo(
    () => ["All", ...Array.from(new Set(items.map((item) => item.industry)))],
    [items]
  );
  const services = useMemo(
    () => [
      "All",
      ...Array.from(new Set(items.flatMap((item) => item.services))),
    ],
    [items]
  );

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const industryMatch = industry === "All" || item.industry === industry;
      const serviceMatch = service === "All" || item.services.includes(service);
      return industryMatch && serviceMatch;
    });
  }, [industry, items, service]);

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium text-slate-700">Filter by industry</span>
          <select
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400/40"
          >
            {industries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium text-slate-700">Filter by service</span>
          <select
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400/40"
          >
            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center text-sm text-slate-600">
          No case studies available for selected filters.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <CaseStudyCard key={item.slug} caseStudy={item} />
          ))}
        </div>
      )}
    </section>
  );
}
