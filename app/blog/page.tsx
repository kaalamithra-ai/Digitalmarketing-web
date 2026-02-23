import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Kaalamithra",
  description: "Explore strategy-led digital marketing insights, playbooks, and practical growth guides.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Kaalamithra",
    description: "Explore strategy-led digital marketing insights, playbooks, and practical growth guides.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Kaalamithra",
    description: "Explore strategy-led digital marketing insights, playbooks, and practical growth guides.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#f5f8ff_42%,#f8fcff_100%)] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200/70 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(56,189,248,0.16),transparent_36%),radial-gradient(circle_at_84%_0%,rgba(139,92,246,0.16),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(20,184,166,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">Blog</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
            Insights for modern digital growth teams.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Practical marketing insights on SEO, performance, content, social, email, branding, and conversion-focused execution.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="glass-hover-card group rounded-3xl p-[1px]"
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/70 backdrop-blur-xl">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-cyan-700">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">{post.readingTime}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-900">{post.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
                    >
                      Read More <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
