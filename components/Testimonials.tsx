"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "Clear strategy, fast execution, and measurable results within the first quarter.",
    name: "Aarti Sharma",
    company: "FinEdge",
  },
  {
    quote:
      "A thoughtful partner who cares about outcomes, not just activity.",
    name: "Vikram Iyer",
    company: "UrbanHive",
  },
  {
    quote:
      "We finally have reporting we trust and a pipeline we can forecast.",
    name: "Neha Kapoor",
    company: "Purely",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      className="bg-transparent py-14 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <div className="rounded-[2rem] border border-white/65 bg-white/24 p-8 backdrop-blur-2xl shadow-[0_30px_90px_-50px_rgba(99,102,241,0.36)] md:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-grad-blue text-glow float-text-med text-3xl font-semibold md:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Trusted by teams who value clarity and measurable growth.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="card-premium relative overflow-hidden rounded-2xl p-6"
            >
              <span className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-gradient-to-br from-brand-200/40 to-brand-400/25 blur-2xl" />
              <p className="text-sm leading-relaxed text-slate-600">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold text-secondary">
                {item.name}
              </p>
              <p className="text-xs text-slate-500">{item.company}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </Container>
    </motion.section>
  );
}
