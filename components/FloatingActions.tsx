"use client";

import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/918884014055";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
        className="group relative inline-flex"
      >
        <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          WhatsApp
        </span>
        <span className="animate-float inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-16px_rgba(37,211,102,0.9)] transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105 group-focus-visible:outline-none group-focus-visible:ring-4 group-focus-visible:ring-brand-200">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
            <path d="M19.05 4.94A9.8 9.8 0 0 0 12.06 2 9.93 9.93 0 0 0 3.5 16.96L2 22l5.18-1.36A9.95 9.95 0 0 0 12.04 22c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.95-7.1zm-7.01 15.41a8.22 8.22 0 0 1-4.2-1.16l-.3-.18-3.07.8.82-2.99-.2-.31a8.2 8.2 0 0 1-1.28-4.4c0-4.56 3.71-8.28 8.27-8.28a8.2 8.2 0 0 1 5.86 2.43 8.24 8.24 0 0 1 2.41 5.86 8.3 8.3 0 0 1-8.31 8.23zm4.54-6.23c-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.13-.16.25-.65.82-.8.98-.14.16-.29.18-.54.07-.25-.13-1.07-.39-2.03-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.38.11-.5.12-.12.25-.29.38-.43.13-.14.16-.25.25-.42.08-.16.04-.31-.02-.43-.07-.13-.57-1.37-.78-1.88-.2-.48-.41-.41-.57-.42h-.48c-.16 0-.42.07-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.33.98 2.49.13.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.46-.07 1.5-.61 1.71-1.2.21-.59.21-1.09.14-1.2-.06-.1-.23-.16-.48-.29z" />
          </svg>
        </span>
      </a>

      <Link href="/contact" aria-label="Go to contact page" className="group relative inline-flex">
        <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          Contact
        </span>
        <span className="animate-float2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-glow transition-transform duration-200 group-hover:scale-105 group-hover:shadow-glowStrong group-focus-visible:scale-105 group-focus-visible:outline-none group-focus-visible:ring-4 group-focus-visible:ring-brand-200">
          <svg viewBox="0 0 24 24" className="h-5.5 w-5.5 fill-current" aria-hidden="true">
            <path d="M6.62 10.79a15.07 15.07 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.85 21 3 13.15 3 3c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
