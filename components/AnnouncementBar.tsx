import React from "react";

const ANNOUNCEMENT_TEXT =
  "A SCAM ALERT: Beware of fake job offers via calls or messages in our name. NEVER pay or share details. Always verify via our official email. Management is not responsible for unauthorized actions.";

export default function AnnouncementBar() {
  return (
    <div
      role="status"
      aria-label="Scam alert announcement"
      className="fixed inset-x-0 top-0 z-[60] h-9 border-b border-sky-200/30 bg-slate-950 text-slate-100"
    >
      <div className="announcement-wrap flex h-full items-center overflow-hidden">
        <div className="announcement-track flex min-w-max items-center whitespace-nowrap pr-8 text-[11px] font-medium tracking-[0.01em] sm:text-xs">
          <span className="px-6">{ANNOUNCEMENT_TEXT}</span>
          <span className="px-6" aria-hidden="true">
            {ANNOUNCEMENT_TEXT}
          </span>
        </div>
      </div>

      <style>{`
        .announcement-track {
          animation: announcementScroll 34s linear infinite;
          will-change: transform;
        }

        .announcement-wrap:hover .announcement-track {
          animation-play-state: paused;
        }

        @keyframes announcementScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .announcement-track {
            animation: none;
            min-width: 100%;
          }

          .announcement-track span[aria-hidden="true"] {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
