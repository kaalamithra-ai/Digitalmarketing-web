import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/serviceDetails";

const BASE_URL = "https://dm.kaalamithra-ai.com";

export const metadata: Metadata = {
  title: "WhatsApp Management Services in Bangalore | WhatsApp Growth",
  description:
    "Professional WhatsApp management for lead handling, automation, broadcasts, and customer support to improve conversion and retention outcomes.",
  keywords: [
    "whatsapp management services in bangalore",
    "whatsapp marketing services",
    "whatsapp automation services",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/whatsapp-management`,
  },
};

export default function WhatsAppManagementPage() {
  const service = SERVICE_DETAILS["whatsapp-management"];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WhatsApp Management in Bangalore",
    description:
      "Professional WhatsApp management for lead handling, automation, broadcasts, and customer support to improve conversion and retention outcomes.",
    serviceType: "WhatsApp Management",
    provider: {
      "@type": "Organization",
      name: "Kaalamithra",
      url: BASE_URL,
    },
    areaServed: "Bangalore",
    url: `${BASE_URL}/services/whatsapp-management`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetailTemplate
        data={service}
        seo={{
          primaryKeyword: "whatsapp management services in bangalore",
          secondaryKeywords: ["whatsapp marketing services", "whatsapp automation services"],
          ctaTitle: "WhatsApp Management in Bangalore",
          ctaDescription:
            "If you need whatsapp management services in bangalore, Kaalamithra helps you build a structured WhatsApp system for lead handling, automation, support, and conversion-focused engagement.",
        }}
      />
    </>
  );
}
