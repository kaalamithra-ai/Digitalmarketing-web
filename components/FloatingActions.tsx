"use client";

const WHATSAPP_URL = "https://wa.me/918884014055";
const PHONE_URL = "tel:+918884014055";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:scale-105 active:scale-95"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.2 6.42 2.2 11.83c0 1.73.45 3.42 1.3 4.9L2 22l5.43-1.42a9.8 9.8 0 0 0 4.6 1.17h.01c5.41 0 9.83-4.42 9.83-9.83 0-2.63-1.02-5.1-2.82-7.01Zm-7.02 15.18h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.22.84.86-3.14-.2-.32a8.1 8.1 0 0 1-1.25-4.33c0-4.49 3.66-8.15 8.16-8.15 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.38 5.77c0 4.5-3.66 8.15-8.15 8.15Zm4.47-6.1c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.92-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.17-.7-.63-1.18-1.41-1.32-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>

      <a
        href={PHONE_URL}
        className="grid h-12 w-12 place-items-center rounded-full bg-indigo-600 text-white shadow-lg transition hover:scale-105 active:scale-95"
        aria-label="Call"
        title="Call"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20a1 1 0 0 1-1 1C10.06 21 3 13.94 3 5a1 1 0 0 1 1-1h3.5c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
        </svg>
      </a>
    </div>
  );
}
