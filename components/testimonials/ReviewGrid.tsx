"use client";

import { useMemo, useState } from "react";
import { Testimonial } from "@/lib/content/testimonials";

type ReviewGridProps = {
  reviews: Testimonial[];
};

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={`review-star-${index}`} aria-hidden="true">
          {index < rating ? "\u2605" : "\u2606"}
        </span>
      ))}
    </div>
  );
}

export default function ReviewGrid({ reviews }: ReviewGridProps) {
  const [activeTag, setActiveTag] = useState<string>("All");

  const tags = useMemo(() => {
    const set = new Set<string>();
    reviews.forEach((review) => {
      review.serviceTags.forEach((tag) => set.add(tag));
    });
    return ["All", ...Array.from(set)];
  }, [reviews]);

  const filtered = useMemo(() => {
    if (activeTag === "All") return reviews;
    return reviews.filter((review) => review.serviceTags.includes(activeTag));
  }, [activeTag, reviews]);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              activeTag === tag
                ? "border-primary bg-primary text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <StarRow rating={item.rating} />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">&ldquo;{item.text}&rdquo;</p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">
                {item.role}, {item.company}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.serviceTags.map((tag) => (
                <span
                  key={`${item.id}-${tag}`}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
