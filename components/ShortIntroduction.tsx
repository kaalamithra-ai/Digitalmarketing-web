"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

const cards = [
  {
    title: "Fully Gen AI-Powered.",
    description: "Built for the Next Era of Marketing.",
    badge: "01",
    className: "animate-float-slow lg:-translate-y-2",
  },
  {
    title: "simple, effective",
    description: "tailored to help your business stand out online.",
    badge: "02",
    className: "animate-float-med lg:translate-y-4",
  },
  {
    title: "strategy",
    description: "creativity, and data to drive sustainable growth.",
    badge: "03",
    className: "animate-float-fast lg:translate-y-5",
  },
  {
    title: "Built for the Next Era of Marketing.",
    description: "We integrate strategy, creativity, and data.",
    badge: "04",
    className: "animate-float-med lg:-translate-y-1",
  },
];

export default function ShortIntroduction() {
  return (
    <motion.section
      className="bg-white py-14 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-[0_30px_80px_-52px_rgba(15,23,42,0.6)] md:p-10">
          <div className="absolute -top-16 -right-8 h-36 w-36 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl" />
          <div className="absolute -bottom-14 -left-8 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-200/30 to-teal-100/30 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <h2 className="text-balance text-4xl font-semibold text-secondary md:text-5xl">
                Fully Gen AI-Powered. Built for the Next Era of Marketing.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                We make digital marketing simple, effective, and tailored to
                help your business stand out online.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 md:text-base">
                We integrate strategy, creativity, and data to drive sustainable
                growth.
              </p>
              <PrimaryButton href="/contact" className="mt-8">
                See How Gen AI Transforms Your Brand -{">"}
              </PrimaryButton>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((card) => (
                <FeatureCard
                  key={card.badge}
                  title={card.title}
                  description={card.description}
                  badge={card.badge}
                  className={card.className}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
