"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

type Tone = "blue" | "violet" | "orange";

type ServiceCardItem = {
  title: string;
  slug: string;
  description: string;
  tone: Tone;
  stack: "left" | "center" | "right";
  floatClass: string;
};

const services: ServiceCardItem[] = [
  {
    title: "SEO & Content",
    slug: "seo-content",
    description: "Technical and content optimization for high-intent demand.",
    tone: "blue",
    stack: "left",
    floatClass: "animate-float-slow",
  },
  {
    title: "Marketing Automation",
    slug: "marketing-automation",
    description: "Lifecycle journeys that improve retention and LTV.",
    tone: "blue",
    stack: "left",
    floatClass: "animate-float-med",
  },
  {
    title: "Performance Marketing",
    slug: "performance-marketing",
    description: "Paid search and social built for ROI.",
    tone: "violet",
    stack: "center",
    floatClass: "animate-float-fast",
  },
  {
    title: "Analytics & Insights",
    slug: "analytics-insights",
    description: "Dashboards and reporting tied to outcomes.",
    tone: "violet",
    stack: "center",
    floatClass: "animate-float-slow",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description: "Community and content strategies for sustained growth.",
    tone: "orange",
    stack: "right",
    floatClass: "animate-float-med",
  },
  {
    title: "Web Experience",
    slug: "web-experience",
    description: "Conversion-first websites built for speed and clarity.",
    tone: "orange",
    stack: "right",
    floatClass: "animate-float-fast",
  },
];

const leftStack = services.filter((card) => card.stack === "left");
const centerStack = services.filter((card) => card.stack === "center");
const rightStack = services.filter((card) => card.stack === "right");

const stackVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const easeOutStrong: [number, number, number, number] = [0.6, 0.01, 0.05, 0.9];

function cardVariants(origin: "left" | "center" | "right", reduced: boolean): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.25 } },
    };
  }
  if (origin === "left") {
    return {
      hidden: { opacity: 0, x: -60, filter: "blur(10px)" },
      show: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.65, ease: easeOutStrong },
      },
    };
  }
  if (origin === "right") {
    return {
      hidden: { opacity: 0, x: 60, filter: "blur(10px)" },
      show: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.65, ease: easeOutStrong },
      },
    };
  }
  return {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: easeOutStrong },
    },
  };
}

function toneClasses(tone: Tone) {
  if (tone === "blue") {
    return "border-cyan-300/30 bg-gradient-to-br from-cyan-400/22 to-blue-500/10 group-hover:shadow-cyan-400/45";
  }
  if (tone === "violet") {
    return "border-fuchsia-300/30 bg-gradient-to-br from-fuchsia-400/20 to-violet-500/10 group-hover:shadow-fuchsia-400/40";
  }
  return "border-orange-300/30 bg-gradient-to-br from-orange-400/20 to-rose-500/10 group-hover:shadow-orange-300/45";
}

function Card({
  item,
  origin,
  reducedMotion,
  rotate,
}: {
  item: ServiceCardItem;
  origin: "left" | "center" | "right";
  reducedMotion: boolean;
  rotate: number;
}) {
  return (
    <motion.article variants={cardVariants(origin, reducedMotion)}>
      <motion.div
        whileHover={reducedMotion ? undefined : { y: -8, scale: 1.02, rotate }}
        transition={{ type: "spring", stiffness: 230, damping: 18 }}
      >
        <Link
          href={`/services/${item.slug}`}
          className={[
            "group relative block min-h-[248px] w-full rounded-[2rem] border p-8 md:min-h-[272px] md:p-9",
            "backdrop-blur-2xl shadow-[0_24px_95px_-40px_rgba(0,0,0,0.82)]",
            "transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
            toneClasses(item.tone),
            item.floatClass,
          ].join(" ")}
        >
          <div className="pointer-events-none absolute -inset-7 -z-10 rounded-[2.5rem] bg-white/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[1.7rem] font-semibold leading-tight text-white md:text-[1.9rem]">
              {item.title}
            </h3>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/80">
              Premium
            </span>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-white/75 md:text-base">
            {item.description}
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
            View service <span aria-hidden>&rarr;</span>
          </div>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-white/0 via-white/35 to-white/0 opacity-70" />
        </Link>
      </motion.div>
    </motion.article>
  );
}

export default function ServicesHeroDark() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[#070A14]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_0%,rgba(56,189,248,0.24),transparent_40%),radial-gradient(circle_at_84%_0%,rgba(217,70,239,0.2),transparent_38%),radial-gradient(circle_at_50%_86%,rgba(249,115,22,0.16),transparent_45%)]" />
      <div className="absolute -left-20 top-14 -z-10 h-72 w-72 rounded-full bg-cyan-500/18 blur-3xl" />
      <div className="absolute -right-16 top-10 -z-10 h-72 w-72 rounded-full bg-fuchsia-500/16 blur-3xl" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 md:px-6 md:pb-24 md:pt-28">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.38em] text-white/70">
          Services
        </p>
        <h1 className="mx-auto mt-6 max-w-5xl text-center text-4xl font-semibold leading-tight text-white md:text-6xl">
          Digital marketing services built for modern growth.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/75 md:text-lg">
          From acquisition to retention, we help teams build marketing engines that compound results.
        </p>

        <div className="relative mt-14">
          <div className="grid gap-6 md:hidden">
            {services.map((item, index) => (
              <Card
                key={item.slug}
                item={item}
                origin={index % 3 === 0 ? "left" : index % 3 === 1 ? "center" : "right"}
                reducedMotion={true}
                rotate={index % 2 === 0 ? -1 : 1}
              />
            ))}
          </div>

          <div className="hidden grid-cols-3 gap-8 md:grid">
            <motion.div variants={stackVariants} initial="hidden" animate="show" className="space-y-8 pt-20">
              {leftStack.map((item, index) => (
                <Card
                  key={item.slug}
                  item={item}
                  origin="left"
                  reducedMotion={reducedMotion}
                  rotate={index % 2 === 0 ? -1 : 1}
                />
              ))}
            </motion.div>
            <motion.div variants={stackVariants} initial="hidden" animate="show" className="space-y-8 pt-8">
              {centerStack.map((item, index) => (
                <Card
                  key={item.slug}
                  item={item}
                  origin="center"
                  reducedMotion={reducedMotion}
                  rotate={index % 2 === 0 ? 1 : -1}
                />
              ))}
            </motion.div>
            <motion.div variants={stackVariants} initial="hidden" animate="show" className="space-y-8 pt-20">
              {rightStack.map((item, index) => (
                <Card
                  key={item.slug}
                  item={item}
                  origin="right"
                  reducedMotion={reducedMotion}
                  rotate={index % 2 === 0 ? 1 : -1}
                />
              ))}
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 -bottom-8 mx-auto hidden h-28 max-w-6xl rounded-full bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-orange-500/10 blur-2xl md:block" />
        </div>

        <div className="mt-14 rounded-3xl border border-white/15 bg-gradient-to-r from-white/10 via-white/6 to-white/10 p-7 backdrop-blur-xl shadow-[0_24px_70px_-40px_rgba(15,23,42,0.8)] md:p-9">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Not sure what you need?</h2>
              <p className="mt-2 text-sm text-white/75 md:text-base">
                Share your goals and constraints, and we&apos;ll recommend the right service mix.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#070A14] transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
