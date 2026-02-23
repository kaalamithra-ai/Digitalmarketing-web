"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useState } from "react";
import type { MouseEvent } from "react";

type Service = {
  no: string;
  title: string;
  desc: string;
  backInfo: string;
  kind:
    | "digital"
    | "seo"
    | "performance"
    | "social"
    | "automation"
    | "mobile"
    | "email"
    | "content"
    | "remarketing";
  badge: string;
  accent: [string, string, string];
  href: string;
  details: string[];
  image: string;
};

const SERVICES: Service[] = [
  {
    no: "01",
    title: "Digital Marketing",
    desc: "Full-funnel strategy to grow awareness, leads, and revenue.",
    kind: "digital",
    badge: "AI Powered",
    accent: ["#14b8a6", "#8b5cf6", "#f97316"],
    href: "/services/digital-marketing",
    backInfo:
      "Digital marketing helps businesses connect with the right audience online using data-driven strategies.",
    details: ["Increase visibility", "Drive qualified conversions", "Grow brand with modern platforms"],
    image: "/services/service-digital-marketing-DgTBPFKC.png",
  },
  {
    no: "02",
    title: "SEO",
    desc: "Improve rankings with technical SEO, content, and authority building.",
    kind: "seo",
    badge: "SEO Boost",
    accent: ["#10b981", "#14b8a6", "#60a5fa"],
    href: "/services/seo",
    backInfo:
      "SEO is the process of optimizing your website to rank higher on search engines like Google and attract organic traffic.",
    details: ["Keyword research & strategy", "On-page and technical SEO", "Content optimization", "Link building", "Local SEO", "SEO performance tracking"],
    image: "/services/service-seo-B1t0muHw.png",
  },
  {
    no: "03",
    title: "Performance Marketing",
    desc: "ROI-focused campaigns across search, social, and display.",
    kind: "performance",
    badge: "+240% ROAS",
    accent: ["#fb923c", "#f97316", "#ef4444"],
    href: "/services/performance-marketing",
    backInfo:
      "Performance marketing focuses on measurable outcomes such as clicks, leads, and sales across paid channels.",
    details: ["Google Ads (Search, Display, YouTube)", "Social media ads (Meta, LinkedIn, etc.)", "Lead generation campaigns", "Conversion optimization"],
    image: "/services/service-performance-ktslITiU.png",
  },
  {
    no: "04",
    title: "Social Media Marketing",
    desc: "Creative + content systems that drive engagement and growth.",
    kind: "social",
    badge: "+3.2M Reach",
    accent: ["#a78bfa", "#6366f1", "#22c55e"],
    href: "/services/social-media-marketing",
    backInfo:
      "Social media marketing uses platforms like Instagram, Facebook, LinkedIn, and X to engage your audience and grow your brand.",
    details: ["Builds brand awareness", "Improves customer engagement", "Drives traffic and leads", "Strengthens brand loyalty"],
    image: "/services/service-social-media-P4dXjYOT.png",
  },
  {
    no: "05",
    title: "Marketing automation & analysis",
    desc: "Automations and insights that improve retention and LTV.",
    kind: "automation",
    badge: "AI Workflow",
    accent: ["#3b82f6", "#22d3ee", "#a78bfa"],
    href: "/services/marketing-automation-analysis",
    backInfo:
      "Marketing automation and analysis improve campaign efficiency through continuous measurement and optimization.",
    details: ["Campaign tracking & reporting", "Marketing automation tools", "Data-driven insights", "Continuous optimization"],
    image: "/services/service-automation-D9GQDyKA.png",
  },
  {
    no: "06",
    title: "Mobile Marketing",
    desc: "Reach audiences on mobile with performance-first messaging.",
    kind: "mobile",
    badge: "Mobile First",
    accent: ["#06b6d4", "#3b82f6", "#8b5cf6"],
    href: "/services/mobile-marketing",
    backInfo:
      "Mobile marketing targets users through smartphones using SMS, apps, mobile ads, and push notifications.",
    details: ["Reach users instantly", "Personalized communication", "High engagement rates", "Location-based targeting"],
    image: "/services/service-mobile-BTouDMEG.png",
  },
  {
    no: "07",
    title: "Email Marketing",
    desc: "Lifecycle emails that convert-welcome, nurture, and retention.",
    kind: "email",
    badge: "High CVR",
    accent: ["#22c55e", "#14b8a6", "#f97316"],
    href: "/services/email-marketing",
    backInfo:
      "Email marketing is a direct channel used to nurture leads, promote offers, and retain customers.",
    details: ["Builds long-term relationships", "Cost-effective marketing", "High ROI", "Personalized messaging"],
    image: "/services/service-email-ZNd5oL_I.png",
  },
  {
    no: "08",
    title: "Content Marketing",
    desc: "Content strategy that builds trust and consistent demand.",
    kind: "content",
    badge: "Content Engine",
    accent: ["#8b5cf6", "#14b8a6", "#60a5fa"],
    href: "/services/content-marketing",
    backInfo:
      "Content marketing focuses on valuable and relevant content to attract, educate, and retain the right audience.",
    details: ["Blogs & articles", "Website content", "Social media content", "Content strategy planning"],
    image: "/services/service-content-QcgO-PdB.png",
  },
  {
    no: "09",
    title: "Remarketing and Retargeting",
    desc: "Bring back warm audiences and increase conversions.",
    kind: "remarketing",
    badge: "Retarget Pro",
    accent: ["#f97316", "#8b5cf6", "#06b6d4"],
    href: "/services/remarketing-retargeting",
    backInfo:
      "Remarketing and retargeting reach users who interacted with your brand but haven't converted yet.",
    details: ["Pixel tracking", "Custom audience creation", "Personalized ads", "Cross-platform retargeting campaigns"],
    image: "/services/service-retargeting-CxO8OQYr.png",
  },
];

function isMobilePointer() {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

function ServiceFlipCard({ s }: { s: Service }) {
  const [flipped, setFlipped] = useState(false);

  const handleCardTap = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!isMobilePointer()) {
      return;
    }
    const target = e.target as HTMLElement;
    if (target.closest("a,button")) {
      return;
    }
    setFlipped((prev) => !prev);
  }, []);

  return (
    <div
      className={`flip-card group relative rounded-3xl p-[1px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_26px_70px_-38px_rgba(2,6,23,0.35)] ${
        flipped ? "is-flipped" : ""
      }`}
      style={{ background: `linear-gradient(90deg, ${s.accent[0]}, ${s.accent[1]}, ${s.accent[2]})` }}
      onClick={handleCardTap}
    >
      <div className="flip-card-inner relative min-h-[500px] overflow-hidden rounded-3xl">
        <article className="flip-card-face absolute inset-0 flex h-full flex-col rounded-3xl border border-white/70 bg-white/80 p-7 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">{s.no}</div>
            <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{s.badge}</div>
          </div>

          <h3 className="mt-6 text-xl font-bold text-slate-900">{s.title}</h3>
          <p className="mt-3 text-slate-600">{s.desc}</p>

          <button
            type="button"
            className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(true);
            }}
          >
            View details <span aria-hidden>&rarr;</span>
          </button>

          <div className="relative mt-6">
            <div
              className="pointer-events-none absolute -top-4 right-2 rounded-full bg-white/90 px-3 py-1 text-xs shadow-md"
              style={{ border: "1px solid rgba(0,0,0,.06)" }}
            >
              {s.title === "Performance Marketing" ? "+240% ROAS" : "AI Optimized"}
            </div>

            <div className="float-media rounded-2xl bg-gradient-to-br from-slate-50 to-white p-3 shadow-inner">
              <div className="relative h-40 w-full overflow-hidden rounded-xl">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </article>

        <article className="flip-card-face flip-card-back absolute inset-0 flex h-full flex-col rounded-3xl border border-white/70 bg-white/80 p-7 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">Key details</h4>
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
            >
              Back
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-700">{s.backInfo}</p>

          <ul className="mt-5 max-h-32 space-y-2 overflow-auto pr-1 text-sm text-slate-700">
            {s.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500" />
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-6">
            <Link
              href={s.href}
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              View Details &rarr;
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Get Free Audit
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold tracking-widest text-teal-600">CORE SERVICES</p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">Services built for outcomes.</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <ServiceFlipCard key={s.no} s={s} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-3 text-base font-semibold text-white transition hover:bg-orange-600"
        >
          All Services
        </Link>
      </div>
    </section>
  );
}

