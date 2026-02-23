"use client";

import type { Job } from "@/components/careers/OpenPositions";

type JobDetailsDrawerProps = {
  job: Job | null;
  onClose: () => void;
  onApplyNow: () => void;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function JobDetailsDrawer({ job, onClose, onApplyNow }: JobDetailsDrawerProps) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        aria-label="Close job details"
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <aside
        aria-label="Job details"
        className="absolute right-0 top-0 h-full w-full max-w-2xl overflow-y-auto border-l border-slate-200 bg-white p-6 shadow-2xl md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Job details
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">{job.title}</h3>
            <p className="mt-2 text-sm text-slate-600">
              {job.location} | {job.type} | {job.level}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Close
          </button>
        </div>

        <section className="mt-8">
          <h4 className="text-lg font-semibold text-slate-900">Responsibilities</h4>
          <div className="mt-3">
            <BulletList items={job.responsibilities} />
          </div>
        </section>

        <section className="mt-8">
          <h4 className="text-lg font-semibold text-slate-900">Requirements</h4>
          <div className="mt-3">
            <BulletList items={job.requirements} />
          </div>
        </section>

        <section className="mt-8">
          <h4 className="text-lg font-semibold text-slate-900">Benefits</h4>
          <div className="mt-3">
            <BulletList items={job.benefits} />
          </div>
        </section>

        <div className="mt-10">
          <button
            type="button"
            onClick={onApplyNow}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            Apply for this role
          </button>
        </div>
      </aside>
    </div>
  );
}

