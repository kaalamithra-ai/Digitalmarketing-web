"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const next = Math.min(100, Math.max(0, (scrollTop / documentHeight) * 100));
      setProgress(next);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-violet-500 to-orange-500 shadow-[0_0_18px_rgba(56,189,248,0.55)] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
