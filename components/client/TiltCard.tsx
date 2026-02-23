"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function TiltCard({ children, className, style }: TiltCardProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reducedMotion) {
    return (
      <div className={clsx("tilt-card", className)} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={clsx("tilt-card", className)}
      style={style}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        const rx = Math.max(-6, Math.min(6, -dy * 6));
        const ry = Math.max(-6, Math.min(6, dx * 6));
        el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
        el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      }}
    >
      {children}
    </div>
  );
}
