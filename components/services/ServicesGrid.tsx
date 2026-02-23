import Link from "next/link";
import ServiceCard from "@/components/services/ServiceCard";
import type { ServiceKind } from "@/components/services/ServiceIcon";

type ServiceItem = {
  no: string;
  title: string;
  desc: string;
  badge: string;
  kind: ServiceKind;
  gradient: string;
  accentColor: string;
  href: string;
  imageSrc: string;
};

const SERVICES: ServiceItem[] = [
  {
    no: "01",
    title: "Digital Marketing",
    desc: "Full-funnel strategy to grow awareness, leads, and revenue.",
    badge: "AI Powered",
    kind: "digital",
    gradient: "linear-gradient(135deg, #ffe5ef 0%, #ffd5e6 48%, #ffc7dd 100%)",
    accentColor: "#c2185b",
    href: "/services/digital-marketing",
    imageSrc: "/services/service-digital-marketing-DgTBPFKC.png",
  },
  {
    no: "02",
    title: "SEO",
    desc: "Improve rankings with technical SEO, content, and authority building.",
    badge: "SEO Boost",
    kind: "seo",
    gradient: "linear-gradient(135deg, #fff1f6 0%, #ffe4ef 52%, #ffd6e8 100%)",
    accentColor: "#e91e63",
    href: "/services/seo",
    imageSrc: "/services/service-seo-B1t0muHw.png",
  },
  {
    no: "03",
    title: "Performance Marketing",
    desc: "ROI-focused campaigns across search, social, and display.",
    badge: "+240% ROAS",
    kind: "performance",
    gradient: "linear-gradient(135deg, #ffe0eb 0%, #ffd0e2 56%, #ffc2da 100%)",
    accentColor: "#c2185b",
    href: "/services/performance-marketing",
    imageSrc: "/services/service-performance-ktslITiU.png",
  },
  {
    no: "04",
    title: "Social Media Marketing",
    desc: "Creative + content systems that drive engagement and growth.",
    badge: "+3.2M Reach",
    kind: "social",
    gradient: "linear-gradient(135deg, #ffeaf3 0%, #ffdced 52%, #ffd1e6 100%)",
    accentColor: "#e91e63",
    href: "/services/social-media-marketing",
    imageSrc: "/services/service-social-media-P4dXjYOT.png",
  },
  {
    no: "05",
    title: "Marketing automation & analysis",
    desc: "Automations and insights that improve retention and LTV.",
    badge: "AI Workflow",
    kind: "automation",
    gradient: "linear-gradient(135deg, #fff1f6 0%, #ffe3ef 52%, #ffd8e8 100%)",
    accentColor: "#c2185b",
    href: "/services/marketing-automation-analysis",
    imageSrc: "/services/service-automation-D9GQDyKA.png",
  },
  {
    no: "06",
    title: "Mobile Marketing",
    desc: "Reach audiences on mobile with performance-first messaging.",
    badge: "Mobile First",
    kind: "mobile",
    gradient: "linear-gradient(135deg, #fff4f8 0%, #ffe8f1 52%, #ffdae9 100%)",
    accentColor: "#e91e63",
    href: "/services/mobile-marketing",
    imageSrc: "/services/service-mobile-BTouDMEG.png",
  },
  {
    no: "07",
    title: "Email Marketing",
    desc: "Lifecycle emails that convert-welcome, nurture, and retention.",
    badge: "High CTR",
    kind: "email",
    gradient: "linear-gradient(135deg, #fff0f6 0%, #ffe3ef 48%, #ffd4e5 100%)",
    accentColor: "#c2185b",
    href: "/services/email-marketing",
    imageSrc: "/services/service-email-ZNd5oL_I.png",
  },
  {
    no: "08",
    title: "Content Marketing",
    desc: "Content strategy that builds trust and consistent demand.",
    badge: "Content Engine",
    kind: "content",
    gradient: "linear-gradient(135deg, #fff2f7 0%, #ffe5ef 52%, #ffdbe9 100%)",
    accentColor: "#e91e63",
    href: "/services/content-marketing",
    imageSrc: "/services/service-content-QcgO-PdB.png",
  },
  {
    no: "09",
    title: "Remarketing and Retargeting",
    desc: "Bring back warm audiences and increase conversions.",
    badge: "Retarget Pro",
    kind: "remarketing",
    gradient: "linear-gradient(135deg, #ffe3ee 0%, #ffd7e8 50%, #ffc9de 100%)",
    accentColor: "#c2185b",
    href: "/services/remarketing-retargeting",
    imageSrc: "/services/service-retargeting-CxO8OQYr.png",
  },
];

type ServicesGridProps = {
  limit?: number;
};

export default function ServicesGrid({ limit }: ServicesGridProps) {
  const visibleServices = typeof limit === "number" ? SERVICES.slice(0, limit) : SERVICES;
  const showAllServicesButton =
    typeof limit === "number" && limit > 0 && limit < SERVICES.length;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold tracking-widest text-brand-600">CORE SERVICES</p>
        <h2 className="text-grad-pink mt-3 text-3xl font-extrabold md:text-4xl">Services built for outcomes.</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <ServiceCard key={service.no} {...service} />
        ))}
      </div>

      {showAllServicesButton ? (
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="btn-primary inline-flex items-center justify-center rounded-xl px-10 py-3 text-base font-semibold"
          >
            All Services &raquo;
          </Link>
        </div>
      ) : null}

    </section>
  );
}
