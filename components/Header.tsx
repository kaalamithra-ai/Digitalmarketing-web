"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const serviceItems = [
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "SEO", href: "/services/seo" },
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Marketing Automation", href: "/services/marketing-automation" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "Content Marketing", href: "/services/content-marketing" },
  { label: "Remarketing & Retargeting", href: "/services/remarketing-and-retargeting" },
  { label: "Mobile Marketing", href: "/services/mobile-marketing" },
  { label: "WhatsApp Management", href: "/services/whatsapp-management" },
] as const;

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasArrow: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-9 z-50 border-b border-white/40 bg-white/52 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <Image src="/logo.png" alt="Company Logo" width={150} height={50} priority />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#4b5880] lg:flex">
          {navItems.map((item) =>
            item.label === "Services" ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`relative inline-flex pb-1 transition-colors ${
                    isActive(item.href) ? "text-[#4862cf]" : "text-[#4b5880] hover:text-[#4862cf]"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {item.label}
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M5.5 7.5 10 12l4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {isActive(item.href) ? (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#5b6ff0]" />
                  ) : null}
                </Link>

                <div className="pointer-events-none absolute left-1/2 top-full z-50 h-5 w-[24rem] -translate-x-1/2" />
                <div className="invisible absolute left-1/2 top-full z-50 mt-5 w-[24rem] -translate-x-1/2 rounded-[1.75rem] border border-[#d8e3ff] bg-white p-3 opacity-0 shadow-[0_28px_80px_-32px_rgba(79,109,240,0.32)] ring-1 ring-[#eef3ff] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="mb-2 px-3 pt-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6d7fb4]">
                      Explore Services
                    </p>
                  </div>
                  <div className="grid gap-1 sm:grid-cols-2">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`rounded-2xl px-4 py-3 text-sm font-semibold leading-5 transition ${
                          pathname === service.href
                            ? "bg-[#eef2ff] text-[#4862cf]"
                            : "text-[#4b5880] hover:bg-[#f3f6ff] hover:text-[#4862cf]"
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`relative pb-1 transition-colors ${
                  isActive(item.href) ? "text-[#4862cf]" : "text-[#4b5880] hover:text-[#4862cf]"
                }`}
              >
                <span className="inline-flex items-center gap-1.5">{item.label}</span>
                {isActive(item.href) ? (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#5b6ff0]" />
                ) : null}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="btn-primary rounded-full px-5 py-2 text-xs font-semibold"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/50 bg-white/35 p-2 text-[#4b5880] transition-colors hover:border-[#c7d2fe] hover:text-[#4862cf] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {menuOpen ? <path d="M6 6l12 12M18 6l-12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className={`${menuOpen ? "block" : "hidden"} border-t border-white/40 bg-white/70 backdrop-blur-2xl lg:hidden`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm font-medium text-[#4b5880]">
          {navItems.map((item) =>
            item.label === "Services" ? (
              <div key={item.label} className="rounded-xl border border-white/60 bg-white/40 px-2 py-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`rounded-md px-2 py-2 transition-colors ${
                      isActive(item.href) ? "text-[#4862cf]" : "hover:text-[#4862cf]"
                    }`}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#4b5880] transition hover:bg-[#eef2ff] hover:text-[#4862cf]"
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services-menu"
                    onClick={() => setServicesOpen((prev) => !prev)}
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M5.5 7.5 10 12l4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div id="mobile-services-menu" className={`${servicesOpen ? "mt-2 grid" : "hidden"} gap-1 pb-1`}>
                  {serviceItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`rounded-xl px-3 py-2 text-sm transition ${
                        pathname === service.href
                          ? "bg-[#eef2ff] text-[#4862cf]"
                          : "hover:bg-[#eef2ff] hover:text-[#4862cf]"
                      }`}
                      onClick={() => {
                        setServicesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-md px-2 py-2 transition-colors ${
                  isActive(item.href) ? "bg-[#eef2ff] text-[#4862cf]" : "hover:bg-[#eef2ff] hover:text-[#4862cf]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="inline-flex items-center gap-1.5">{item.label}</span>
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="btn-primary mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
