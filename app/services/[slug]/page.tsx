import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { SERVICE_DETAILS, isServiceDetailSlug } from "@/data/serviceDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isServiceDetailSlug(slug)) {
    return {
      title: "Service Not Found | Kaalamithra",
      description: "The requested service page is not available.",
    };
  }

  const service = SERVICE_DETAILS[slug];

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: service.seo.canonical,
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: service.seo.canonical,
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
  const faqJsonLd =
    service.faqs.items.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}
      <ServiceDetailTemplate data={service} />
    </>
  );
}
