"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import FloatingWords from "@/components/FloatingWords";
import FloatingIllustration from "@/components/ui/FloatingIllustration";
import FloatingOrnaments from "@/components/hero/FloatingOrnaments";
import WaveBackground from "@/components/ui/WaveBackground";
import Link from "next/link";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      className="relative overflow-hidden bg-soft py-14 md:py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.12 }}
    >
      <WaveBackground />
      <FloatingWords density={18} />
      <FloatingOrnaments />
      <Container className="relative z-10">
        <section className="grid items-center gap-12 py-20 lg:grid-cols-2">
          <motion.div
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full"
          >
            <p className="inline-flex rounded-full border border-brand-200 bg-brand-50/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
              AI Powered Marketing Agency
            </p>
            <h1 className="hero-float hero-animated-text shimmer mt-6 text-balance text-5xl font-extrabold leading-tight motion-reduce:animate-none md:text-6xl">
              Smarter campaigns Faster learning Predictable growth.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Behind every campaign is a team that values clarity, creativity, and measurable progress. We help businesses grow by understanding people first - not just platforms.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold"
              >
                Start Your Growth Plan
              </Link>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-3 text-center">
              <div className="card-premium rounded-xl p-3">
                <p className="text-sm font-semibold text-slate-900">300+</p>
                <p className="mt-1 text-xs text-slate-500">Campaigns</p>
              </div>
              <div className="card-premium rounded-xl p-3">
                <p className="text-sm font-semibold text-slate-900">4.6x</p>
                <p className="mt-1 text-xs text-slate-500">Avg ROAS</p>
              </div>
              <div className="card-premium rounded-xl p-3">
                <p className="text-sm font-semibold text-slate-900">24/7</p>
                <p className="mt-1 text-xs text-slate-500">AI Signals</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="relative w-full"
          >
            <FloatingIllustration />
          </motion.div>
        </section>
      </Container>
    </motion.section>
  );
}
