import Link from "next/link";
import ServiceCard from "@/components/services/ServiceCard";
import type { ServiceKind } from "@/components/services/ServiceIcon";

type ServiceItem = {
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
    title: "Digital Marketing",
    desc: "Full-funnel strategy to grow awareness, leads, and revenue.",
    badge: "AI Powered",
    kind: "digital",
    gradient: "linear-gradient(135deg, #eaf2ff 0%, #dbeafe 48%, #bfdbfe 100%)",
    accentColor: "#1d4ed8",
    href: "/services/digital-marketing",
    imageSrc: "/services/service-digital-marketing-DgTBPFKC.png",
  },
  {
    title: "SEO",
    desc: "Improve rankings with technical SEO, content, and authority building.",
    badge: "SEO Boost",
    kind: "seo",
    gradient: "linear-gradient(135deg, #f0f7ff 0%, #e0ecff 52%, #cfe2ff 100%)",
    accentColor: "#2563eb",
    href: "/services/seo",
    imageSrc: "/services/service-seo-B1t0muHw.png",
  },
  {
    title: "Performance Marketing",
    desc: "ROI-focused campaigns across search, social, and display.",
    badge: "+240% ROAS",
    kind: "performance",
    gradient: "linear-gradient(135deg, #e8f3ff 0%, #d6e8ff 56%, #c3ddff 100%)",
    accentColor: "#1d4ed8",
    href: "/services/performance-marketing",
    imageSrc: "/services/service-performance-ktslITiU.png",
  },
  {
    title: "Social Media Marketing",
    desc: "Creative + content systems that drive engagement and growth.",
    badge: "+3.2M Reach",
    kind: "social",
    gradient: "linear-gradient(135deg, #edf5ff 0%, #dfeaff 52%, #d2e4ff 100%)",
    accentColor: "#2563eb",
    href: "/services/social-media-marketing",
    imageSrc: "/services/service-social-media-P4dXjYOT.png",
  },
  {
    title: "Marketing automation & analysis",
    desc: "Automations and insights that improve retention and LTV.",
    badge: "AI Workflow",
    kind: "automation",
    gradient: "linear-gradient(135deg, #f1f7ff 0%, #e2edff 52%, #d7e7ff 100%)",
    accentColor: "#1d4ed8",
    href: "/services/marketing-automation",
    imageSrc: "/services/service-automation-D9GQDyKA.png",
  },
  {
    title: "Mobile Marketing",
    desc: "Reach audiences on mobile with performance-first messaging.",
    badge: "Mobile First",
    kind: "mobile",
    gradient: "linear-gradient(135deg, #f4f9ff 0%, #e7f0ff 52%, #dae8ff 100%)",
    accentColor: "#2563eb",
    href: "/services/mobile-marketing",
    imageSrc: "/services/service-mobile-BTouDMEG.png",
  },
  {
    title: "Email Marketing",
    desc: "Lifecycle emails that convert-welcome, nurture, and retention.",
    badge: "High CTR",
    kind: "email",
    gradient: "linear-gradient(135deg, #f0f7ff 0%, #e2ecff 48%, #d3e4ff 100%)",
    accentColor: "#1d4ed8",
    href: "/services/email-marketing",
    imageSrc: "/services/service-email-ZNd5oL_I.png",
  },
  {
    title: "Content Marketing",
    desc: "Content strategy that builds trust and consistent demand.",
    badge: "Content Engine",
    kind: "content",
    gradient: "linear-gradient(135deg, #f2f8ff 0%, #e5efff 52%, #dbe8ff 100%)",
    accentColor: "#2563eb",
    href: "/services/content-marketing",
    imageSrc: "/services/service-content-QcgO-PdB.png",
  },
  {
    title: "Remarketing and Retargeting",
    desc: "Bring back warm audiences and increase conversions.",
    badge: "Retarget Pro",
    kind: "remarketing",
    gradient: "linear-gradient(135deg, #e7f3ff 0%, #d9e8ff 50%, #c9ddff 100%)",
    accentColor: "#1d4ed8",
    href: "/services/remarketing-retargeting",
    imageSrc: "/services/service-retargeting-CxO8OQYr.png",
  },
  {
    title: "WhatsApp Management",
    desc: "Lead handling, automation, broadcasts and support - all in one WhatsApp system.",
    badge: "WhatsApp Growth",
    kind: "whatsapp",
    gradient: "linear-gradient(135deg, #edf5ff 0%, #dfeaff 52%, #d2e4ff 100%)",
    accentColor: "#2563eb",
    href: "/services/whatsapp-management",
    imageSrc: "/services/whatsapp-management.png",
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
        <div className="hero-float">
          <h2 className="text-grad-blue hero-animated-text shimmer text-3xl font-extrabold md:text-4xl">Services We Offer</h2>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <ServiceCard key={service.href} {...service} />
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
