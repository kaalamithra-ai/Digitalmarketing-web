"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";

const services = [
  {
    title: "SEO & Content",
    description: "Build durable visibility and demand with intent-led SEO.",
    slug: "seo-content",
  },
  {
    title: "Performance Marketing",
    description: "ROI-focused paid media across search and social.",
    slug: "performance-marketing",
  },
  {
    title: "Social Media",
    description: "Community and content systems that scale growth.",
    slug: "social-media",
  },
  {
    title: "Marketing Automation",
    description: "Lifecycle automation that improves retention and LTV.",
    slug: "marketing-automation",
  },
  {
    title: "Analytics & Insights",
    description: "Clear dashboards for decisions that drive outcomes.",
    slug: "analytics-insights",
  },
  {
    title: "Web Experience",
    description: "Conversion-first websites built for speed and clarity.",
    slug: "web-experience",
  },
];

export default function Services() {
  return (
    <motion.section
      className="bg-slate-50/60 py-14 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-secondary md:text-4xl">
            Key Services
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            A focused mix of strategy, creative, and performance services.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_44px_-34px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/20 text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-secondary">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-0.5"
              >
                View service -{'>'}
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
