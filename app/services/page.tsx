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
        <h1 className="text-grad-blue text-4xl font-bold md:text-5xl">
          digital marketing services in bangalore
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-slate-800 md:text-3xl">
          ai powered digital marketing services bangalore
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-600">
          Explore strategy-first services covering SEO, social media marketing, performance marketing,
          email marketing, content marketing, marketing automation, and remarketing with a clear
          focus on measurable growth.
        </p>
      </section>
      <ServicesGrid />
    </main>
  );
}
