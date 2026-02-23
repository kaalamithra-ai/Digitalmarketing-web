import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  breadcrumbs?: BreadcrumbItem[];
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            {breadcrumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`}>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-primary"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 ? " / " : ""}
              </span>
            ))}
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
