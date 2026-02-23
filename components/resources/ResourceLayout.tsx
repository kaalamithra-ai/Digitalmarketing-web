"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ResourceCategory,
  ResourceEntry,
} from "@/lib/content/resources";
import ResourceCard from "@/components/resources/ResourceCard";

type ResourceLayoutProps = {
  items: ResourceEntry[];
  activeCategory?: ResourceCategory;
};

const categories: { label: string; value: ResourceCategory }[] = [
  { label: "Blogs", value: "blogs" },
  { label: "AI Trends", value: "ai-trends" },
  { label: "Marketing Guides", value: "marketing-guides" },
];

export default function ResourceLayout({
  items,
  activeCategory,
}: ResourceLayoutProps) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "oldest">("latest");

  const filtered = useMemo(() => {
    let scoped = items;
    if (activeCategory) {
      scoped = scoped.filter((item) => item.category === activeCategory);
    }

    const normalized = query.trim().toLowerCase();
    if (normalized) {
      scoped = scoped.filter((item) => {
        const haystack = [
          item.title,
          item.excerpt,
          item.author,
          item.tags.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalized);
      });
    }

    const sorted = [...scoped].sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return sortBy === "latest" ? bTime - aTime : aTime - bTime;
    });

    return sorted;
  }, [activeCategory, items, query, sortBy]);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category.value;
          return (
            <Link
              key={category.value}
              href={`/resources/${category.value}`}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary"
              }`}
            >
              {category.label}
            </Link>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <label className="grid gap-1">
          <span className="text-sm font-medium text-slate-700">Search resources</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, author, or tag"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-medium text-slate-700">Sort</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as "latest" | "oldest")}
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400/40"
          >
            <option value="latest">Latest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center text-sm text-slate-600">
          No resources found for your current filters.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <ResourceCard key={`${item.category}-${item.slug}`} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
