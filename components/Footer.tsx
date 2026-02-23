import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-100 bg-gradient-to-b from-brand-50/50 to-white text-ink-700">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-100/70 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-12 h-64 w-64 rounded-full bg-brand-200/60 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-semibold text-ink-900">Kaalamithra</p>
          <p className="mt-3 max-w-xs text-sm text-ink-600">
            AI-powered digital marketing that connects creative, performance, and analytics.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="link-pink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">Contact</h3>
          <p className="mt-2 text-sm">tech@kaalamithra-ai.com</p>
          <p className="mt-2 text-sm text-ink-600">RMZ Ecoworld, Bengaluru</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">Newsletter</h3>
          <p className="mt-4 text-sm text-ink-600">Get monthly AI marketing playbooks.</p>
          <Link
            href="/contact"
            className="btn-primary mt-4 inline-flex rounded-full px-5 py-2 text-xs font-semibold"
          >
            Subscribe
          </Link>
        </div>
      </div>

      <div className="border-t border-brand-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-ink-500">
          <p>(c) 2026 Kaalamithra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
