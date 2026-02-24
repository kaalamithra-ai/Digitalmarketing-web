import Link from "next/link";
import GlowCard from "@/components/ui/GlowCard";

type BlogCardProps = {
  title: string;
  excerpt: string;
  category: string;
  href: string;
  featured?: boolean;
};

export default function BlogCard({
  title,
  excerpt,
  category,
  href,
  featured,
}: BlogCardProps) {
  return (
    <GlowCard
      className={`${
        featured ? "lg:col-span-2" : ""
      }`}
      contentClassName="overflow-hidden p-0"
    >
      <div className="p-6">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
          {category}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-secondary">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{excerpt}</p>
        <Link
          href={href}
          className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-blue-700"
        >
          Read more &rarr;
        </Link>
      </div>
    </GlowCard>
  );
}

