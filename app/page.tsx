import Hero from "@/components/Hero";
import WhyUsGlow from "@/components/home/WhyUsGlow";
import ServicesGrid from "@/components/services/ServicesGrid";
import WorkingProcessWithClouds from "@/components/home/WorkingProcessWithClouds";
import Testimonials from "@/components/Testimonials";
import GlowCard from "@/components/ui/GlowCard";
import Link from "next/link";
import type { Metadata } from "next";

const BASE_URL = "https://dm.kaalamithra-ai.com";

export const metadata: Metadata = {
  title: "Best AI Digital Marketing Agency in Bangalore | Kaalamithra",
  description:
    "AI-powered digital marketing agency delivering smarter campaigns, faster learning, and predictable growth. 4.6x average ROAS with data-driven strategies.",
  keywords: [
    "best digital marketing agency in bangalore",
    "ai powered digital marketing agency",
    "digital marketing agency in bangalore",
    "best digital marketing in bangalore",
    "digital marketing bangalore",
  ],
  alternates: {
    canonical: `${BASE_URL}/`,
  },
};

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
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">ai powered digital marketing agency</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700">
            Kaalamithra operates as an ai powered digital marketing agency built for businesses that need predictable growth, clear strategy, and faster execution.
            Instead of running isolated campaigns, we build connected marketing systems where search, social, content, email, and automation all support one growth
            target. This model helps brands move from random experiments to measurable scale. Teams that choose us are usually trying to solve one of three problems:
            lead quality is inconsistent, paid campaigns are expensive, or organic growth is too slow. We solve these by combining strategic planning, clear audience
            mapping, and real-time optimization loops.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Our approach starts with business clarity. Before launch, we define goals by revenue potential, lifecycle stage, and conversion readiness. That structure
            allows every campaign to carry a clear job. Search campaigns can capture demand, social campaigns can build trust and improve recall, and content can increase
            visibility for high-intent discovery. As an ai powered digital marketing agency, we use automation and analytics to improve delivery speed without compromising
            creative quality. This helps growing companies operate with enterprise-level marketing discipline while maintaining flexibility.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            The market for digital marketing bangalore services is large, but most providers still work channel by channel. We work system by system. That difference is
            important because growth happens when channels reinforce each other. For example, the same keyword insights used in paid search can strengthen organic content,
            improve landing pages, and guide social messaging. As performance data accumulates, decisions become faster and campaigns become more profitable. This is how we
            turn day-to-day marketing activity into long-term business outcomes.
          </p>

          <h2 className="mt-10 text-3xl font-semibold text-slate-900 md:text-4xl">digital marketing agency in bangalore</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700">
            As a digital marketing agency in bangalore, we understand both local buyer behavior and competitive pressure across regional and national campaigns. Many companies
            reach us after trying broad plans that did not match their real audience. We replace that with precise targeting and channel alignment. For local growth, this means
            improving visibility for service-intent searches, strengthening location relevance, and creating page experiences that convert decision-stage users. For national or
            global brands operating from Bangalore, this means scaled paid acquisition, structured content growth, and lifecycle automation that improves conversion quality over time.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Being called the best digital marketing agency in bangalore is not a branding line for us. It is a delivery standard tied to execution quality. We measure campaign
            success through conversion quality, cost efficiency, and revenue impact, not just top-level vanity metrics. Our teams review performance continuously, identify friction,
            and launch practical improvements every week. This includes ad account optimization, creative testing, tracking QA, technical SEO improvements, and content upgrades.
            Clients see where money is spent, what changed, and why performance moved.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            A strong digital marketing agency in bangalore should also operate as a strategic partner, not only a vendor. That is why our model includes planning, execution,
            and reporting in one workflow. Strategy without execution creates delays, and execution without strategy creates waste. We maintain both together. Our teams define
            quarterly priorities, translate those priorities into campaign sprints, and track measurable progress against business goals. This gives leadership teams confidence
            that marketing is not only active, but directionally correct.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            For businesses evaluating options for best digital marketing in bangalore, the critical question is not only who can launch campaigns quickly. The real question is
            who can compound results over time. Compounding requires structure: clean tracking, reliable reporting, keyword intent mapping, strong creative systems, and ongoing
            experimentation. We use this structure across service categories including SEO, social media marketing, performance marketing, email marketing, automation, content
            marketing, and remarketing. The outcome is a durable growth engine rather than short-term spikes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Our client partnerships are built around transparent communication. Weekly updates focus on tactical progress and immediate opportunities. Monthly reviews focus on
            strategic performance, including channel contribution, lead quality, and conversion path health. This reporting style helps teams make decisions faster and reduces
            internal uncertainty. In digital marketing bangalore engagements, this clarity often becomes a competitive advantage because teams can react quickly while competitors
            are still diagnosing issues.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            We also prioritize creative relevance. Strong media buying alone is not enough if message-market fit is weak. Our process combines audience insight with creative testing
            so each campaign can improve response quality over time. Headlines, offers, visuals, and landing content are continuously tested and refined against clear KPIs. This
            practice protects budget efficiency and improves conversion consistency. It is one of the reasons clients looking for best digital marketing in bangalore choose our model
            for long-term growth instead of short-term experiments.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Kaalamithra is designed for teams that want measurable outcomes with responsible execution. If your business is searching for a reliable digital marketing agency in
            bangalore, our approach combines AI-assisted speed, strategic discipline, and practical growth systems. From acquisition to retention, every campaign is built to learn,
            adapt, and scale. That is the foundation of sustainable performance in modern markets, and it is why many growth-focused brands consider us among the best digital
            marketing agency in bangalore options available today.
          </p>
        </div>
      </section>

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
