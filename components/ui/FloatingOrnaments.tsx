"use client";

import React from "react";

type Item = {
  kind: "ball" | "ring" | "star";
  left: string;
  top: string;
  size: number;
  opacity: number;
  floatDur: number;
  delay: number;
  depth: number;
  rotate?: boolean;
};

const ITEMS: Item[] = [
  { kind: "ball", left: "12%", top: "18%", size: 52, opacity: 0.45, floatDur: 10, delay: 0.2, depth: 0.4 },
  { kind: "ring", left: "72%", top: "20%", size: 64, opacity: 0.28, floatDur: 13, delay: 0.8, depth: 0.6, rotate: true },
  { kind: "star", left: "86%", top: "34%", size: 30, opacity: 0.35, floatDur: 9, delay: 0.4, depth: 0.35, rotate: true },
  { kind: "ball", left: "86%", top: "62%", size: 40, opacity: 0.35, floatDur: 12, delay: 0.6, depth: 0.5 },
  { kind: "ring", left: "18%", top: "72%", size: 54, opacity: 0.22, floatDur: 14, delay: 0.3, depth: 0.7, rotate: true },
  { kind: "star", left: "30%", top: "30%", size: 22, opacity: 0.32, floatDur: 11, delay: 1.2, depth: 0.3, rotate: true },
  { kind: "ball", left: "58%", top: "70%", size: 60, opacity: 0.22, floatDur: 16, delay: 0.1, depth: 0.85 },
  { kind: "ring", left: "48%", top: "10%", size: 42, opacity: 0.2, floatDur: 15, delay: 0.5, depth: 0.5, rotate: true },
];

export default function FloatingOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {ITEMS.map((it, idx) => {
        const base =
          "absolute -translate-x-1/2 -translate-y-1/2 will-change-transform " +
          "motion-reduce:animate-none motion-reduce:transform-none";

        const anim = it.rotate
          ? `floatSoft ${it.floatDur}s ease-in-out ${it.delay}s infinite alternate, spinSlow 24s linear infinite`
          : `floatSoft ${it.floatDur}s ease-in-out ${it.delay}s infinite alternate`;

        if (it.kind === "ball") {
          return (
            <span
              key={idx}
              className={base + " rounded-full"}
              style={{
                left: it.left,
                top: it.top,
                width: it.size,
                height: it.size,
                opacity: it.opacity,
                animation: anim,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,.95), rgba(99,102,241,.35), rgba(20,184,166,.18))",
                boxShadow:
                  "0 18px 55px rgba(99,102,241,.12), 0 18px 55px rgba(20,184,166,.10)",
              }}
            />
          );
        }

        if (it.kind === "ring") {
          return (
            <span
              key={idx}
              className={base + " rounded-full"}
              style={{
                left: it.left,
                top: it.top,
                width: it.size,
                height: it.size,
                opacity: it.opacity,
                animation: anim,
                border: "2px solid rgba(99,102,241,.28)",
                boxShadow: "0 0 0 6px rgba(20,184,166,.08)",
              }}
            />
          );
        }

        return (
          <span
            key={idx}
            className={base}
            style={{
              left: it.left,
              top: it.top,
              width: it.size,
              height: it.size,
              opacity: it.opacity,
              animation: anim,
            }}
          >
            <svg viewBox="0 0 24 24" className="h-full w-full">
              <path
                d="M12 2l2.2 6.7H21l-5.4 3.9 2.1 6.6-5.7-4.1-5.7 4.1 2.1-6.6L3 8.7h6.8L12 2z"
                fill="rgba(99,102,241,.22)"
                stroke="rgba(20,184,166,.25)"
                strokeWidth="0.8"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
}
