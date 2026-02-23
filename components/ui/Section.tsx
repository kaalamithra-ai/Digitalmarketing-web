import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section className={`relative py-14 md:py-20 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
