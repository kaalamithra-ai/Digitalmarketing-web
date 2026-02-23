import type { ReactNode } from "react";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function PrimaryButton({
  href,
  children,
  variant = "solid",
  className = "",
}: PrimaryButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2";

  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white/90 text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
      : "bg-gradient-to-r from-primary to-accent text-white shadow-[0_10px_30px_-14px_rgba(15,185,177,0.9)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)]";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
