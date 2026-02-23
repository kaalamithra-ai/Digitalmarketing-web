import Image from "next/image";
import Link from "next/link";

type AboutCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function AboutCta({
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt = "CTA visual",
}: AboutCtaProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="relative overflow-hidden rounded-2xl border border-orange-300/40 bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white shadow-sm md:p-8">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="pointer-events-none absolute -left-8 -top-7 h-16 w-16 rounded-full bg-white/20 blur-md" />
        <div className="pointer-events-none absolute right-8 top-6 h-4 w-4 rounded-full bg-white/35" />
        <div className="pointer-events-none absolute bottom-7 right-16 h-3 w-3 rounded-full bg-white/30" />

        <div className="relative grid items-center gap-6 lg:grid-cols-[220px_1fr_auto]">
          <div className="relative h-[180px] w-full overflow-hidden rounded-2xl border border-white/30 bg-white/15 lg:h-[220px]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 220px"
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-white/35 to-transparent" />
            )}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
              {eyebrow}
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              {title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-base">
              {description}
            </p>
          </div>

          {buttonText && buttonHref ? (
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition duration-200 hover:translate-x-[1px] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {buttonText}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
