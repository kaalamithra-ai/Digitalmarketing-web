"use client";

import * as React from "react";

type Props = {
  title: string;
  content: string; // paragraphs separated by \n\n (like you're already passing)
};

function splitParagraphs(content: string) {
  return content
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);
}

export default function SEOContent({ title, content }: Props) {
  const [expanded, setExpanded] = React.useState(false);

  const paragraphs = React.useMemo(() => splitParagraphs(content), [content]);

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <div className="overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/40 to-indigo-50/30 shadow-[0_24px_60px_-38px_rgba(37,99,235,0.35)]">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-5 md:px-8 md:py-6">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
            <h2 className="hero-float text-base font-semibold text-blue-700 md:text-lg">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold text-sky-700 transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            aria-expanded={expanded}
            aria-controls="seo-content"
          >
            {expanded ? "Collapse" : "Read full strategy"}
          </button>
        </div>

        {/* Body */}
        <div className="border-t border-sky-100/80 bg-white/70 px-6 py-6 md:px-8 md:py-8">
          <div className="relative">
            {/* The content stays in DOM (SEO-friendly) but visually clipped when collapsed */}
            <div
              id="seo-content"
              className={[
                "space-y-5 text-base leading-relaxed text-slate-600 md:text-lg",
                expanded
                  ? ""
                  : "max-h-[220px] md:max-h-[280px] overflow-hidden",
                "transition-all duration-300",
              ].join(" ")}
            >
              {paragraphs.map((p, idx) => {
                // Make headings look premium if they are short + title-like
                const isHeading =
                  p.length < 70 &&
                  !p.endsWith(".") &&
                  !p.includes(",") &&
                  idx !== 0;

                if (isHeading) {
                  return (
                    <h3
                      key={idx}
                      className="pt-2 text-xl font-semibold tracking-tight text-blue-700 md:text-2xl"
                    >
                      {p}
                    </h3>
                  );
                }

                // First line can be treated as section heading too
                if (idx === 0) {
                  return (
                    <h3
                      key={idx}
                      className="pt-2 text-xl font-semibold tracking-tight text-blue-700 md:text-2xl"
                    >
                      {p}
                    </h3>
                  );
                }

                return <p key={idx}>{p}</p>;
              })}
            </div>

            {/* Fade overlay when collapsed */}
            {!expanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/95 via-white/70 to-transparent" />
            )}
          </div>

          {/* Bottom CTA (optional but premium) */}
          <div className="mt-6 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              {expanded ? "Show less" : "Continue reading"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
