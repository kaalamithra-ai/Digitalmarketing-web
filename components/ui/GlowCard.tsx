import React from "react";
import clsx from "clsx";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  icon?: React.ReactNode;
  contentClassName?: string;
  as?: React.ElementType;
};

export default function GlowCard({
  children,
  badge,
  icon,
  className,
  contentClassName = "p-6",
  as: Component = "article",
}: GlowCardProps) {
  return (
    <Component
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur",
        "shadow-[0_14px_40px_rgba(2,6,23,0.08)]",
        "transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_22px_60px_rgba(2,6,23,0.14)] motion-reduce:transform-none",
        className
      )}
    >
      {/* Gradient glow border */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-teal-400/25 via-violet-400/25 to-orange-400/25 blur-xl" />
      </div>

      {/* Subtle top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />

      {badge ? (
        <div className="absolute right-4 top-4 z-20 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            {badge}
        </div>
      ) : null}

      <div className={clsx("relative", contentClassName)}>
        {icon ? (
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 shadow-sm">
            {icon}
          </div>
        ) : null}
        {children}
      </div>

      {/* Bottom shimmer line */}
      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
    </Component>
  );
}
