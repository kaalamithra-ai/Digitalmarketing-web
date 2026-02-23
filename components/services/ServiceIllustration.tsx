import React from "react";

type Kind =
  | "digital"
  | "seo"
  | "performance"
  | "social"
  | "automation"
  | "mobile"
  | "email"
  | "content"
  | "remarketing";

const ICONS: Record<Kind, React.ReactNode> = {
  digital: (
    <>
      <rect x="26" y="28" width="148" height="96" rx="18" fill="url(#glass)" stroke="rgba(255,255,255,.55)" />
      <path d="M54 96 C 70 70, 92 112, 114 78 S 160 112, 170 64" stroke="url(#stroke)" strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="64" cy="58" r="10" fill="rgba(255,255,255,.85)" />
      <circle cx="92" cy="52" r="6" fill="rgba(255,255,255,.75)" />
    </>
  ),
  seo: (
    <>
      <rect x="26" y="34" width="148" height="90" rx="18" fill="url(#glass)" stroke="rgba(255,255,255,.55)" />
      <circle cx="92" cy="78" r="26" fill="rgba(255,255,255,.55)" />
      <circle cx="92" cy="78" r="18" fill="rgba(255,255,255,.75)" />
      <path d="M110 96 L132 118" stroke="url(#stroke)" strokeWidth="10" strokeLinecap="round" />
      <path d="M44 58 H122" stroke="rgba(255,255,255,.7)" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  performance: (
    <>
      <rect x="26" y="28" width="148" height="96" rx="18" fill="url(#glass)" stroke="rgba(255,255,255,.55)" />
      <path d="M48 110 V72" stroke="rgba(255,255,255,.8)" strokeWidth="12" strokeLinecap="round" />
      <path d="M78 110 V56" stroke="rgba(255,255,255,.8)" strokeWidth="12" strokeLinecap="round" />
      <path d="M108 110 V84" stroke="rgba(255,255,255,.8)" strokeWidth="12" strokeLinecap="round" />
      <path d="M138 110 V44" stroke="url(#stroke)" strokeWidth="12" strokeLinecap="round" />
      <path d="M52 52 C 76 40, 112 60, 152 40" stroke="url(#stroke)" strokeWidth="8" fill="none" strokeLinecap="round" />
    </>
  ),
  social: (
    <>
      <rect x="44" y="24" width="112" height="120" rx="26" fill="url(#glass)" stroke="rgba(255,255,255,.55)" />
      <circle cx="80" cy="72" r="14" fill="rgba(255,255,255,.85)" />
      <circle cx="120" cy="72" r="14" fill="rgba(255,255,255,.7)" />
      <path d="M76 112 C 92 98, 108 98, 124 112" stroke="url(#stroke)" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M64 46 H136" stroke="rgba(255,255,255,.7)" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  automation: (
    <>
      <rect x="26" y="30" width="148" height="94" rx="18" fill="url(#glass)" stroke="rgba(255,255,255,.55)" />
      <circle cx="62" cy="62" r="10" fill="rgba(255,255,255,.85)" />
      <circle cx="140" cy="62" r="10" fill="rgba(255,255,255,.85)" />
      <circle cx="100" cy="104" r="10" fill="rgba(255,255,255,.85)" />
      <path d="M62 62 L140 62 L100 104 Z" stroke="url(#stroke)" strokeWidth="8" fill="none" strokeLinejoin="round" />
      <path d="M84 50 H116" stroke="rgba(255,255,255,.7)" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  mobile: (
    <>
      <rect x="56" y="18" width="88" height="132" rx="26" fill="url(#glass)" stroke="rgba(255,255,255,.55)" />
      <rect x="72" y="44" width="56" height="64" rx="14" fill="rgba(255,255,255,.65)" />
      <path d="M78 128 H122" stroke="rgba(255,255,255,.85)" strokeWidth="10" strokeLinecap="round" />
      <path d="M76 60 H124" stroke="url(#stroke)" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  email: (
    <>
      <rect x="28" y="44" width="144" height="92" rx="18" fill="url(#glass)" stroke="rgba(255,255,255,.55)" />
      <path d="M36 56 L100 98 L164 56" stroke="url(#stroke)" strokeWidth="10" fill="none" strokeLinejoin="round" />
      <path d="M44 118 H156" stroke="rgba(255,255,255,.75)" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  content: (
    <>
      <rect x="44" y="24" width="112" height="128" rx="22" fill="url(#glass)" stroke="rgba(255,255,255,.55)" />
      <path d="M66 56 H134" stroke="url(#stroke)" strokeWidth="10" strokeLinecap="round" />
      <path d="M66 82 H124" stroke="rgba(255,255,255,.75)" strokeWidth="10" strokeLinecap="round" />
      <path d="M66 108 H138" stroke="rgba(255,255,255,.75)" strokeWidth="10" strokeLinecap="round" />
      <circle cx="128" cy="46" r="8" fill="rgba(255,255,255,.85)" />
    </>
  ),
  remarketing: (
    <>
      <rect x="26" y="28" width="148" height="96" rx="18" fill="url(#glass)" stroke="rgba(255,255,255,.55)" />
      <path
        d="M64 66 C 70 54, 86 46, 102 46 C 128 46, 150 62, 150 88"
        stroke="url(#stroke)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M150 88 L138 78" stroke="url(#stroke)" strokeWidth="10" strokeLinecap="round" />
      <path d="M150 88 L160 76" stroke="url(#stroke)" strokeWidth="10" strokeLinecap="round" />
      <circle cx="70" cy="102" r="10" fill="rgba(255,255,255,.85)" />
    </>
  ),
};

export default function ServiceIllustration({
  kind,
  accent = ["#14b8a6", "#8b5cf6", "#f97316"],
}: {
  kind: Kind;
  accent?: [string, string, string];
}) {
  const [a, b, c] = accent;

  return (
    <svg viewBox="0 0 200 170" className="h-40 w-full">
      <defs>
        <linearGradient id="stroke" x1="0" y1="0" x2="200" y2="170">
          <stop offset="0" stopColor={a} />
          <stop offset="0.5" stopColor={b} />
          <stop offset="1" stopColor={c} />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="200" y2="170">
          <stop offset="0" stopColor="rgba(255,255,255,.55)" />
          <stop offset="1" stopColor="rgba(255,255,255,.18)" />
        </linearGradient>
        <radialGradient id="glow" cx="60%" cy="40%" r="70%">
          <stop offset="0" stopColor={b} stopOpacity="0.22" />
          <stop offset="1" stopColor={a} stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="120" cy="72" rx="90" ry="70" fill="url(#glow)" />
      {ICONS[kind]}
    </svg>
  );
}
