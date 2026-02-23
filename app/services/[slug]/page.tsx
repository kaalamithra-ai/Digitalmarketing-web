import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { SERVICE_DETAILS, isServiceDetailSlug } from "@/data/serviceDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = "https://www.kaalamithra.com";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceDetailSlug(slug)) {
    return {
      title: "Service Not Found | Kaalamithra",
      description: "The requested service page is not available.",
    };
  }

  const service = SERVICE_DETAILS[slug];
  const url = `${BASE_URL}/services/${slug}`;

  return {
    title: `${service.title} Services | Kaalamithra`,
    description: service.subtitle,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} Services | Kaalamithra`,
      description: service.subtitle,
      url,
      siteName: "Kaalamithra",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isServiceDetailSlug(slug)) {
    notFound();
  }

  const service = SERVICE_DETAILS[slug];
  const pageUrl = `${BASE_URL}/services/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.subtitle,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "Kaalamithra",
      url: BASE_URL,
    },
    areaServed: "Global",
    url: pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailTemplate data={service} />
    </>
  );
}
