import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SEOContent from "@/components/seo/SEOContent";
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

const seoOverviewContent = `AI Powered Digital Marketing Agency

Kaalamithra is an ai powered digital marketing agency built for brands that care about real business outcomes, not vanity metrics. We design connected growth systems where SEO, paid media, content, social, email, and automation operate as one strategic engine. Instead of running isolated campaigns, we build repeatable frameworks that accelerate execution, improve decision-making, and deliver sustained business impact.

Our engagement starts with strategic clarity. We define growth priorities by revenue potential, funnel stage, and conversion readiness, then align each channel to a measurable role. As an ai powered digital marketing agency, we combine senior human strategy with data intelligence so campaigns launch faster, optimize smarter, and scale with confidence.

In a highly competitive digital marketing bangalore landscape, fragmented execution is often the biggest reason brands underperform. We solve that by unifying planning, execution, and optimization into one operating model. Search intent informs content direction, landing page improvements, and social communication. The result is stronger consistency, lower budget waste, and compounding growth over time.

Digital Marketing Agency In Bangalore

As a digital marketing agency in bangalore, we design growth strategies around local intent and high-conversion audience behavior. For regional businesses, we improve visibility for service-driven searches and build conversion-focused digital journeys. For scaling brands, we run structured acquisition and retention systems that improve lead quality and long-term ROI.

When companies evaluate the best digital marketing agency in bangalore, the differentiator is not who launches faster. The differentiator is who can build a reliable growth engine. Our model is built on transparent reporting, disciplined experimentation, and weekly optimization cycles that improve outcomes consistently.

A high-performing digital marketing agency in bangalore should work as a strategic partner, not a task executor. That is how we operate. We combine senior strategy, execution depth, and analytics rigor into one workflow so teams get both clarity and momentum. Every initiative is tied to measurable business goals, not disconnected tactics.

For brands comparing options for best digital marketing in bangalore, compounding performance is the key metric. We build that compounding effect through clean tracking, strong creative systems, intent-led keyword planning, and conversion-focused execution. This creates sustainable growth instead of short-term spikes.

Our communication model is built for leadership visibility. Weekly updates cover tactical progress and immediate opportunities. Monthly reviews focus on channel contribution, conversion quality, and growth efficiency. In digital marketing bangalore engagements, this transparency helps teams make faster, better decisions.

We also prioritize message-market fit. Media buying alone cannot scale if positioning is weak. We continuously test offers, creatives, landing copy, and audience segments to strengthen conversion intent across channels. This protects budget efficiency while increasing campaign reliability.

If you are looking for a dependable digital marketing agency in bangalore, Kaalamithra brings strategy, execution, and AI-enabled optimization into one performance system. From first touchpoint to repeat conversion, every part of the journey is designed to learn, improve, and scale with your business goals.`;

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#f5f8ff_42%,#f8fcff_100%)] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200/70 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(56,189,248,0.16),transparent_36%),radial-gradient(circle_at_84%_0%,rgba(139,92,246,0.16),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(20,184,166,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">Blog</p>
          <div className="hero-float">
            <h1 className="animate-heading-float hero-animated-text shimmer mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight text-blue-700 motion-reduce:animate-none md:text-6xl">
              Insights for modern digital growth teams.
            </h1>
          </div>
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
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
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
      <SEOContent title="Detailed SEO & Growth Strategy" content={seoOverviewContent} />
    </main>
  );
}
