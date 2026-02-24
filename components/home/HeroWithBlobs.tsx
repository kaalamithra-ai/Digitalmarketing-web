"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";

export default function HeroWithBlobs() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24" ref={targetRef}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <span
          className="anim-drift will-change-transform absolute -left-20 -top-24 h-80 w-80 rounded-full bg-cyan-300/35 blur-3xl"
          style={{ animationDuration: "18s" }}
        />
        <span
          className="anim-drift will-change-transform absolute right-0 top-24 h-64 w-64 rounded-full bg-indigo-300/35 blur-3xl"
          style={{ animationDuration: "14s", animationDelay: "0.7s" }}
        />
        <span
          className="anim-float will-change-transform absolute bottom-8 left-20 h-36 w-36 rounded-full bg-orange-200/40 blur-3xl"
          style={{ animationDuration: "10s", animationDelay: "0.5s" }}
        />
        <span
          className="anim-float will-change-transform absolute left-[44%] top-[58%] h-24 w-24 rounded-full bg-teal-200/40 blur-2xl"
          style={{ animationDuration: "8s", animationDelay: "0.9s" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
            Digital Marketing Agency
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
            Strategy-led growth for ambitious brands.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            We make digital marketing simple, effective, and tailored to help your business
            stand out online.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="relative inline-flex overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_-12px_rgba(249,115,22,0.6)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <span
                aria-hidden
                className="anim-shine absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent"
              />
            </Link>
          </div>
        </Reveal>

        <Reveal className="relative">
          <motion.div
            style={{ y: reduceMotion ? 0 : imageY }}
            className="will-change-transform relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-4 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.45)]"
          >
            <Image
              src="/images/abbu.png"
              alt="AI hiring and analytics illustration"
              width={1536}
              height={1024}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
          </motion.div>

          <div
            className="anim-float will-change-transform absolute -left-5 top-7 hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 text-sm font-semibold text-slate-800 shadow-lg md:block"
            style={{ animationDuration: "9s" }}
          >
            Strategy-led growth
          </div>
          <div
            className="anim-float will-change-transform absolute -right-4 bottom-7 hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 text-sm font-semibold text-slate-800 shadow-lg md:block"
            style={{ animationDuration: "11s", animationDelay: "0.8s" }}
          >
            +128% pipeline momentum
          </div>
        </Reveal>
      </div>
    </section>
  );
}

