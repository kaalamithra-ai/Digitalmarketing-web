import ServicesGrid from "@/components/services/ServicesGrid";
import type { Metadata } from "next";

const BASE_URL = "https://dm.kaalamithra-ai.com";

export const metadata: Metadata = {
  title: "Best AI-Driven Digital Marketing Services in Bangalore",
  description:
    "Explore AI-driven digital marketing services including SEO, performance marketing, social media, email marketing, automation, and remarketing.",
  keywords: [
    "digital marketing services in bangalore",
    "ai powered digital marketing services bangalore",
  ],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 pb-4 pt-14 md:pt-20">
        <div className="hero-float">
          <h1 className="text-grad-blue hero-animated-text shimmer text-4xl font-bold md:text-5xl">
            Digital Marketing Services
          </h1>
        </div>
        <div className="hero-float">
          <h2 className="hero-animated-text shimmer mt-4 text-2xl font-semibold text-slate-800 md:text-3xl">
            Ai Powered Digital Marketing Services Bangalore
          </h2>
        </div>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-600">
          Explore a strategy-first portfolio spanning SEO, social media marketing, performance
          marketing, email marketing, content marketing, marketing automation, and remarketing -
          architected to deliver measurable outcomes and long-term, sustainable growth.
        </p>
      </section>
      <ServicesGrid />
    </main>
  );
}
