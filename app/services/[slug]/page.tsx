import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import { SERVICE_DETAILS, isServiceDetailSlug } from "@/data/serviceDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = "https://dm.kaalamithra-ai.com";

const SERVICE_SEO: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    primaryKeyword: string;
    secondaryKeywords: string[];
  }
> = {
  seo: {
    title: "SEO Services Agency in Bangalore Best Company | SEO Services",
    description:
      "Improve search rankings with technical SEO, content strategy, and authority building. Data-driven SEO services to boost organic traffic and visibility.",
    keywords: [
      "seo services in bangalore",
      "seo agency in bangalore",
      "seo company in bangalore",
    ],
    primaryKeyword: "seo services in bangalore",
    secondaryKeywords: ["seo agency in bangalore", "seo company in bangalore"],
  },
  "social-media-marketing": {
    title: "Social Media Marketing Agency in Bangalore | SMM Service",
    description:
      "Strategic social media marketing to build brand awareness and drive conversions across major social platforms.",
    keywords: [
      "social media marketing agency in bangalore",
      "social media marketing company in bangalore",
      "social media marketing service in bangalore",
    ],
    primaryKeyword: "social media marketing agency in bangalore",
    secondaryKeywords: [
      "social media marketing company in bangalore",
      "social media marketing service in bangalore",
    ],
  },
  "performance-marketing": {
    title: "Best Performance Marketing Agency in Bangalore | ROI Focused",
    description:
      "ROI-focused performance marketing across search, social, and display channels. Achieve 240% ROAS with data-driven campaigns.",
    keywords: [
      "performance marketing agency in bangalore",
      "performance marketing services in bangalore",
    ],
    primaryKeyword: "performance marketing agency in bangalore",
    secondaryKeywords: ["performance marketing services in bangalore"],
  },
  "email-marketing": {
    title: "Best Email Marketing Services in Bangalore | SMS Marketing",
    description:
      "Build relationships and drive conversions with targeted email marketing, automation, and personalized campaigns.",
    keywords: [
      "email marketing services in bangalore",
      "email marketing agency in bangalore",
      "email marketing company in bangalore",
    ],
    primaryKeyword: "email marketing services in bangalore",
    secondaryKeywords: [
      "email marketing agency in bangalore",
      "email marketing company in bangalore",
    ],
  },
  "content-marketing": {
    title: "Content Marketing Services in Bangalore | Strategic Content",
    description:
      "Attract, educate, and convert with strategic content marketing including blogs, case studies, and authority content.",
    keywords: [
      "content marketing agency in bangalore",
      "content writing agencies in bangalore",
    ],
    primaryKeyword: "content marketing agency in bangalore",
    secondaryKeywords: ["content writing agencies in bangalore"],
  },
  "remarketing-retargeting": {
    title: "Retargeting Services in Bangalore | Remarketing & Retargeting",
    description:
      "Reconnect with high-intent users using strategic remarketing and retargeting campaigns to increase conversions.",
    keywords: ["remarketing services in bangalore", "retargeting services in bangalore"],
    primaryKeyword: "remarketing services in bangalore",
    secondaryKeywords: ["retargeting services in bangalore"],
  },
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
  const seo = SERVICE_SEO[slug];
  const canonicalSlug = slug === "marketing-automation-analysis" ? "marketing-automation" : slug;
  const url = `${BASE_URL}/services/${canonicalSlug}`;
  const title = seo?.title ?? `${service.title} Services | Kaalamithra`;
  const description = seo?.description ?? service.subtitle;

  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
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
  const seo = SERVICE_SEO[slug];
  const canonicalSlug = slug === "marketing-automation-analysis" ? "marketing-automation" : slug;
  const pageUrl = `${BASE_URL}/services/${canonicalSlug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in Bangalore`,
    description: seo?.description ?? service.subtitle,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "Kaalamithra",
      url: BASE_URL,
    },
    areaServed: "Bangalore",
    url: pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailTemplate
        data={service}
        seo={
          seo
            ? {
                primaryKeyword: seo.primaryKeyword,
                secondaryKeywords: seo.secondaryKeywords,
                ctaTitle: `${service.title} in Bangalore`,
                ctaDescription: `If you need ${seo.primaryKeyword}, partner with Kaalamithra for practical strategy, transparent execution, and measurable growth.`,
              }
            : undefined
        }
      />
    </>
  );
}
