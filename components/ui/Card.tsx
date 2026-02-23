import type { ReactNode } from "react";
import GlowCard from "@/components/ui/GlowCard";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <GlowCard className={className}>
      {children}
    </GlowCard>
  );
}
