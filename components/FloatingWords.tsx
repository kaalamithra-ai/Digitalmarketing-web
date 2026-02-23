"use client";

import { useMemo } from "react";

type FloatingWordsProps = {
  density?: number;
};

const WORDS = ["AI", "SEO", "ROAS", "LEADS", "CRO", "ADS", "FUNNEL", "DATA", "SMM", "EMAIL"];

type WordConfig = {
  text: string;
  top: number;
  left: number;
  fontSize: number;
  duration: number;
  delay: number;
  opacity: number;
};

function pseudoRandom(seed: number): number {
  const value = Math.sin(seed * 9999.123) * 10000;
  return value - Math.floor(value);
}

export default function FloatingWords({ density = 18 }: FloatingWordsProps) {
  const items = useMemo<WordConfig[]>(() => {
    return Array.from({ length: density }, (_, index) => {
      const word = WORDS[index % WORDS.length];
      const seed = index + density * 13;
      return {
        text: word,
        top: pseudoRandom(seed + 1) * 88 + 4,
        left: pseudoRandom(seed + 2) * 90 + 2,
        fontSize: pseudoRandom(seed + 3) * 18 + 12,
        duration: pseudoRandom(seed + 4) * 5 + 7,
        delay: pseudoRandom(seed + 5) * 6,
        opacity: pseudoRandom(seed + 6) * 0.18 + 0.1,
      };
    });
  }, [density]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      {items.map((item, index) => (
        <span
          key={`${item.text}-${index}`}
          className="absolute bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text font-semibold tracking-wide text-transparent"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            fontSize: `${item.fontSize}px`,
            opacity: item.opacity,
            animation: `floatY ${item.duration}s ease-in-out ${item.delay}s infinite`,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}
