"use client";

import { useMemo, useState } from "react";

export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  level: string;
  department: string;
  shortDesc: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

export const JOBS: Job[] = [
  {
    id: "perf-marketing-manager",
    title: "Performance Marketing Manager",
    location: "Bengaluru",
    type: "Full-time",
    level: "Mid-Senior",
    department: "Growth",
    shortDesc: "Own paid media strategy, budget allocation, and performance scaling.",
    responsibilities: [
      "Plan and manage paid campaigns across Google, Meta, and LinkedIn.",
      "Coordinate creative and landing page tests with design and content teams.",
      "Monitor CPA, ROAS, and funnel performance with weekly optimization loops.",
      "Present growth insights and recommendations to leadership and clients.",
    ],
    requirements: [
      "4+ years in performance marketing with measurable campaign outcomes.",
      "Strong grasp of attribution, tracking setup, and analytics workflows.",
      "Experience with experimentation frameworks and budget pacing.",
      "Clear communication and stakeholder management skills.",
    ],
    benefits: [
      "Performance bonus tied to growth goals.",
      "Learning stipend for advanced certifications.",
      "Hybrid flexibility and wellness support.",
    ],
  },
  {
    id: "seo-strategist",
    title: "SEO Strategist",
    location: "Remote",
    type: "Full-time",
    level: "Mid-Level",
    department: "Organic Growth",
    shortDesc: "Build scalable SEO systems across technical, content, and authority initiatives.",
    responsibilities: [
      "Run technical audits and prioritize roadmap recommendations.",
      "Partner with content teams on topical authority and publishing plans.",
      "Track rankings, traffic quality, and conversion-linked SEO KPIs.",
      "Define experiments for site structure and on-page improvements.",
    ],
    requirements: [
      "3+ years in SEO with strong technical and content fundamentals.",
      "Hands-on with GA4, Search Console, and SEO tooling.",
      "Comfortable translating data into actionable strategy.",
      "Ability to collaborate across product, engineering, and content.",
    ],
    benefits: [
      "Remote-first role with flexible schedule.",
      "Dedicated mentorship and growth plans.",
      "Quarterly team offsites.",
    ],
  },
  {
    id: "creative-copywriter",
    title: "Creative Copywriter",
    location: "Mumbai",
    type: "Full-time",
    level: "Associate-Mid",
    department: "Creative",
    shortDesc: "Craft campaign narratives and high-converting copy across channels.",
    responsibilities: [
      "Write ad, landing page, and email copy aligned to audience intent.",
      "Collaborate with designers to ship cohesive campaign assets.",
      "Iterate messaging based on performance insights and user feedback.",
      "Maintain tone consistency across brand touchpoints.",
    ],
    requirements: [
      "2+ years of copywriting in digital marketing environments.",
      "Strong portfolio of performance and brand storytelling work.",
      "Comfortable with feedback loops and rapid iteration.",
      "Excellent communication and attention to detail.",
    ],
    benefits: [
      "Creative development workshops.",
      "Portfolio-building opportunities with marquee brands.",
      "Comprehensive healthcare support.",
    ],
  },
  {
    id: "lifecycle-marketing-specialist",
    title: "Lifecycle Marketing Specialist",
    location: "Remote",
    type: "Full-time",
    level: "Mid-Level",
    department: "Automation",
    shortDesc: "Design lifecycle journeys that improve activation, retention, and LTV.",
    responsibilities: [
      "Map and build lifecycle flows across onboarding and retention stages.",
      "Create segmentation frameworks for personalized communications.",
      "Track funnel drop-offs and launch iterative improvements.",
      "Align lifecycle programs with broader growth objectives.",
    ],
    requirements: [
      "Experience with CRM and automation tooling.",
      "Strong copy + analytics understanding for lifecycle programs.",
      "Ability to run experiments and report learning clearly.",
      "Organized execution in a fast-moving environment.",
    ],
    benefits: [
      "Flexible working setup.",
      "Role-based upskilling paths.",
      "Wellness and mental health benefits.",
    ],
  },
];

type OpenPositionsProps = {
  selectedJobId: string | null;
  onSelectJob: (job: Job) => void;
};

export default function OpenPositions({ selectedJobId, onSelectJob }: OpenPositionsProps) {
  const [departmentFilter, setDepartmentFilter] = useState("All");

  const departments = useMemo(() => {
    const uniq = Array.from(new Set(JOBS.map((job) => job.department)));
    return ["All", ...uniq];
  }, []);

  const filtered = useMemo(() => {
    if (departmentFilter === "All") return JOBS;
    return JOBS.filter((job) => job.department === departmentFilter);
  }, [departmentFilter]);

  return (
    <section className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Open positions</h2>
            <p className="mt-3 text-base text-slate-600 md:text-lg">
              Find a role where your strengths can create measurable impact.
            </p>
          </div>
          <label className="inline-flex items-center gap-3 text-sm font-medium text-slate-700">
            Department
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 grid gap-5">
          {filtered.map((job) => {
            const active = selectedJobId === job.id;
            return (
              <button
                type="button"
                key={job.id}
                onClick={() => onSelectJob(job)}
                className={`w-full rounded-2xl border p-6 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                  active
                    ? "border-primary/50 bg-teal-50/60 shadow-[0_18px_45px_-28px_rgba(15,185,177,0.55)]"
                    : "border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)]"
                }`}
                aria-pressed={active}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{job.shortDesc}</p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    {job.department}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                  <span className="rounded-full bg-slate-100 px-3 py-1">{job.location}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{job.type}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{job.level}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
