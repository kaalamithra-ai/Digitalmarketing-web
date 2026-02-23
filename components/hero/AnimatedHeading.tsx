"use client";

import React from "react";

export default function AnimatedHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const chars = Array.from(text);

  return (
    <h1 className={className}>
      {chars.map((ch, i) => {
        if (ch === " ") return <span key={i}>&nbsp;</span>;
        return (
          <span
            key={i}
            className="inline-block will-change-transform motion-reduce:animate-none"
            style={{
              animation: `letterFloat 2.8s ease-in-out ${i * 0.03}s infinite`,
            }}
          >
            <span className="headingGradient">{ch}</span>
          </span>
        );
      })}
    </h1>
  );
}
