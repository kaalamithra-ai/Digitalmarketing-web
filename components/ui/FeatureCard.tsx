import type { ReactNode } from "react";
import GlowCard from "@/components/ui/GlowCard";

type FeatureCardProps = {
  title: string;
  description: string;
  badge: ReactNode;
  className?: string;
};

export default function FeatureCard({
  title,
  description,
  badge,
  className = "",
}: FeatureCardProps) {
  return (
    <GlowCard className={className} contentClassName="p-5">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/20 text-sm font-semibold text-primary">
        {badge}
      </div>
      <h3 className="text-base font-semibold text-secondary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </GlowCard>
  );
}
