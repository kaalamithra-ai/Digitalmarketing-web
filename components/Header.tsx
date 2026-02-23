"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-9 z-50 border-b border-brand-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <Image src="/logo.png" alt="Company Logo" width={150} height={50} priority />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-700 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative pb-1 transition-colors ${
                isActive(item.href) ? "text-brand-700" : "text-ink-700 hover:text-brand-700"
              }`}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-500" />
              ) : null}
            </Link>
          ))}
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
          className="inline-flex items-center justify-center rounded-lg border border-brand-100 p-2 text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700 lg:hidden"
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

      <div id="mobile-menu" className={`${menuOpen ? "block" : "hidden"} border-t border-brand-100 bg-white lg:hidden`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm font-medium text-ink-700">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-md px-2 py-2 transition-colors ${
                isActive(item.href) ? "bg-brand-50 text-brand-700" : "hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
