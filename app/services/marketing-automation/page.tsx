import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/serviceDetails";

const BASE_URL = "https://dm.kaalamithra-ai.com";

export const metadata: Metadata = {
  title: "Marketing Automation Services in Bangalore | AI Automation",
  description:
    "Automate marketing workflows and leverage data analytics to scale campaigns, improve performance, and grow faster.",
  keywords: [
    "marketing automation services in bangalore",
    "marketing automation agency in bangalore",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/marketing-automation`,
  },
};

export default function MarketingAutomationPage() {
  const service = SERVICE_DETAILS["marketing-automation-analysis"];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing automation & analysis in Bangalore",
    description:
      "Automate marketing workflows and leverage data analytics to scale campaigns, improve performance, and grow faster.",
    serviceType: "Marketing automation & analysis",
    provider: {
      "@type": "Organization",
      name: "Kaalamithra",
      url: BASE_URL,
    },
    areaServed: "Bangalore",
    url: `${BASE_URL}/services/marketing-automation`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetailTemplate
        data={service}
        seo={{
          primaryKeyword: "marketing automation services in bangalore",
          secondaryKeywords: ["marketing automation agency in bangalore"],
          ctaTitle: "Marketing automation & analysis in Bangalore",
          ctaDescription:
            "If you need marketing automation services in bangalore, Kaalamithra helps you automate workflows, improve decision-making, and scale growth with data-backed execution.",
        }}
      />
    </>
  );
}
