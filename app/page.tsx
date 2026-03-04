import Hero from "@/components/Hero";
import WhyUsGlow from "@/components/home/WhyUsGlow";
import ServicesGrid from "@/components/services/ServicesGrid";
import WorkingProcessWithClouds from "@/components/home/WorkingProcessWithClouds";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

const BASE_URL = "https://dm.kaalamithra-ai.com";

export const metadata: Metadata = {
  title: "AI-Driven Digital Marketing Agency in Bangalore | Kaalamithra",
  description:
    "Get more leads and predictable revenue with an AI-driven marketing system. Free audit + growth roadmap in 24-48 hours. Strategy first, execution next.",
  keywords: [
    "digital marketing agency in bangalore",
    "best digital marketing agency in bangalore",
    "ai driven digital marketing agency",
    "lead generation agency bangalore",
    "performance marketing agency bangalore",
    "seo agency bangalore",
  ],
  alternates: {
    canonical: `${BASE_URL}/`,
  },
};

export default function HomePage() {
  return (
    <main className="home-page-theme">
      <div className="home-page-theme-sparkles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Hero />
      <WhyUsGlow />
      <ServicesGrid limit={3} />
      <WorkingProcessWithClouds />
      <Testimonials />
    </main>
  );
}
