import Link from "next/link";
import { ResourceEntry } from "@/lib/content/resources";
import GlowCard from "@/components/ui/GlowCard";

type ResourceCardProps = {
  item: ResourceEntry;
};

export default function ResourceCard({ item }: ResourceCardProps) {
  return (
    <GlowCard contentClassName="p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {item.category.replace("-", " ")}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.excerpt}</p>

      <p className="mt-4 text-xs text-slate-500">
        {item.author} | {item.date} | {item.readingTime}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={`${item.slug}-${tag}`}
            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/resources/${item.category}/${item.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-teal-700"
      >
        Read Article <span aria-hidden>&rarr;</span>
      </Link>
    </GlowCard>
  );
}
