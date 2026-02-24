import Hero from "@/components/Hero";
import WhyUsGlow from "@/components/home/WhyUsGlow";
import ServicesGrid from "@/components/services/ServicesGrid";
import WorkingProcessWithClouds from "@/components/home/WorkingProcessWithClouds";
import Testimonials from "@/components/Testimonials";
import GlowCard from "@/components/ui/GlowCard";
import Link from "next/link";

const previewPosts = [
  {
    title: "Why SEO is Important in Today's World",
    href: "/blog/why-seo-is-important",
    category: "SEO",
  },
  {
    title: "Why Businesses Struggle with Retargeting and Remarketing",
    href: "/blog/why-retargeting-fails",
    category: "Remarketing",
  },
  {
    title: "How Companies Achieve Targets Through Performance Marketing",
    href: "/blog/performance-marketing-success",
    category: "Performance Marketing",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <WhyUsGlow />
      <ServicesGrid limit={3} />
      <WorkingProcessWithClouds />
      <Testimonials />

      <section className="bg-slate-50/70 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Blog Preview</p>
              <h2 className="hero-animated-text shimmer mt-3 text-3xl font-semibold md:text-5xl">Insights for AI-first growth teams</h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-sky-300 hover:text-sky-700"
            >
              Explore all articles
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {previewPosts.map((post) => (
              <GlowCard key={post.href} contentClassName="overflow-hidden p-0">
                <div className="p-5">
                  <span className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
                  <Link href={post.href} className="mt-4 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-800">
                    Read article &rarr;
                  </Link>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
