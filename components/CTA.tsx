"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CTA() {
  return (
    <motion.section
      className="bg-white py-14 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-r from-white via-cyan-50/70 to-indigo-50/70 px-6 py-10 shadow-[0_28px_70px_-44px_rgba(15,23,42,0.6)] md:px-10">
          <span className="animate-float-med absolute top-6 right-8 h-2.5 w-2.5 rounded-full bg-primary/40" />
          <span className="animate-float-fast absolute bottom-8 left-10 h-2 w-2 rounded-full bg-accent/35" />
          <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-3xl font-semibold text-secondary md:text-4xl">
                Ready to build your next growth milestone?
              </h2>
              <p className="mt-3 text-base text-slate-600 md:text-lg">
                Let&apos;s align your strategy with results that last.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact">Let&apos;s Talk</PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
