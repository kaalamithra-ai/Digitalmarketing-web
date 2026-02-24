"use client";

import Link from "next/link";
import Image from "next/image";
import ServiceIcon, { type ServiceKind } from "@/components/services/ServiceIcon";
import TiltCard from "@/components/TiltCard";

type ServiceCardProps = {
  title: string;
  desc: string;
  badge: string;
  kind: ServiceKind;
  gradient: string;
  accentColor: string;
  href: string;
  imageSrc?: string;
};

export default function ServiceCard({
  title,
  desc,
  badge,
  kind,
  gradient,
  accentColor,
  href,
  imageSrc,
}: ServiceCardProps) {
  return (
    <TiltCard className="group transition-all duration-300 hover:scale-[1.02]">
      <div
        className="animated-ring rounded-3xl p-[1px] transition-shadow duration-300 group-hover:shadow-[0_24px_60px_-30px_rgba(2,6,23,0.45)]"
        style={{ backgroundImage: gradient }}
      >
        <article className="relative rounded-3xl border border-white/60 bg-white/75 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)]">
          <div className="flex items-center justify-end">
            <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200/70">
              {badge}
            </span>
          </div>

          <h3 className="mt-6 text-2xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">{title}</h3>
          <p className="mt-4 text-base leading-relaxed text-slate-700">{desc}</p>

          <Link
            href={href}
            className="mt-5 inline-flex items-center text-sm font-semibold transition hover:opacity-90"
            style={{ color: accentColor }}
          >
            View details &rarr;
          </Link>

          <div className="relative mt-7 rounded-2xl bg-white/85 p-6 shadow-inner ring-1 ring-white/80 backdrop-blur-md">
            <span
              className="pointer-events-none absolute -top-3 right-3 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200/70"
              aria-hidden="true"
            >
              {badge}
            </span>
            {imageSrc ? (
              <div className="float-media relative mx-auto w-full max-w-[300px] overflow-hidden rounded-xl bg-white/70 p-3">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            ) : (
              <div className="float-media mx-auto flex w-fit items-center justify-center">
                <ServiceIcon kind={kind} accentColor={accentColor} />
              </div>
            )}
          </div>
        </article>
      </div>
    </TiltCard>
  );
}
