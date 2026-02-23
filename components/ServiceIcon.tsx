import { useId } from "react";

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

export default function ServiceIcon({
  kind,
  accent,
}: {
  kind: Kind;
  accent: [string, string, string];
}) {
  const id = useId().replace(/:/g, "");
  const strokeId = `stroke-${id}`;
  const glassId = `glass-${id}`;
  const glowId = `glow-${id}`;
  const [a, b, c] = accent;

  return (
    <svg viewBox="0 0 200 170" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={strokeId} x1="0" y1="0" x2="200" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={a} />
          <stop offset="50%" stopColor={b} />
          <stop offset="100%" stopColor={c} />
        </linearGradient>
        <linearGradient id={glassId} x1="0" y1="0" x2="200" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.58)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.18)" />
        </linearGradient>
        <radialGradient id={glowId} cx="64%" cy="38%" r="72%">
          <stop offset="0%" stopColor={b} stopOpacity="0.2" />
          <stop offset="100%" stopColor={a} stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="120" cy="74" rx="88" ry="68" fill={`url(#${glowId})`} />

      {kind === "digital" ? (
        <>
          <rect x="22" y="26" width="156" height="102" rx="20" fill={`url(#${glassId})`} stroke={`url(#${strokeId})`} strokeWidth="3" />
          <path d="M46 98 C64 74, 88 112, 114 80 S160 108, 172 62" stroke={`url(#${strokeId})`} strokeWidth="8" fill="none" strokeLinecap="round" />
          <rect x="40" y="44" width="48" height="10" rx="5" fill="rgba(255,255,255,0.78)" />
          <circle cx="58" cy="74" r="8" fill="rgba(255,255,255,0.82)" />
        </>
      ) : null}

      {kind === "seo" ? (
        <>
          <rect x="24" y="30" width="152" height="96" rx="18" fill={`url(#${glassId})`} stroke={`url(#${strokeId})`} strokeWidth="3" />
          <circle cx="90" cy="78" r="24" fill="rgba(255,255,255,0.6)" />
          <circle cx="90" cy="78" r="16" fill="rgba(255,255,255,0.8)" />
          <path d="M106 94 L132 120" stroke={`url(#${strokeId})`} strokeWidth="9" strokeLinecap="round" />
          <path d="M42 52 H124" stroke="rgba(255,255,255,0.76)" strokeWidth="8" strokeLinecap="round" />
          <path d="M42 66 H112" stroke="rgba(255,255,255,0.65)" strokeWidth="6" strokeLinecap="round" />
        </>
      ) : null}

      {kind === "performance" ? (
        <>
          <rect x="22" y="24" width="156" height="104" rx="20" fill={`url(#${glassId})`} stroke={`url(#${strokeId})`} strokeWidth="3" />
          <path d="M46 108 V72M76 108 V58M106 108 V84M136 108 V48" stroke="rgba(255,255,255,0.78)" strokeWidth="12" strokeLinecap="round" />
          <path d="M44 58 C76 44, 108 68, 156 42" stroke={`url(#${strokeId})`} strokeWidth="7" fill="none" strokeLinecap="round" />
        </>
      ) : null}

      {kind === "social" ? (
        <>
          <rect x="46" y="20" width="108" height="126" rx="26" fill={`url(#${glassId})`} stroke={`url(#${strokeId})`} strokeWidth="3" />
          <circle cx="80" cy="74" r="14" fill="rgba(255,255,255,0.84)" />
          <circle cx="120" cy="74" r="14" fill="rgba(255,255,255,0.7)" />
          <path d="M74 112 C90 98, 110 98, 126 112" stroke={`url(#${strokeId})`} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M62 46 H138" stroke="rgba(255,255,255,0.75)" strokeWidth="8" strokeLinecap="round" />
        </>
      ) : null}

      {kind === "automation" ? (
        <>
          <rect x="24" y="30" width="152" height="96" rx="18" fill={`url(#${glassId})`} stroke={`url(#${strokeId})`} strokeWidth="3" />
          <circle cx="60" cy="60" r="10" fill="rgba(255,255,255,0.85)" />
          <circle cx="140" cy="60" r="10" fill="rgba(255,255,255,0.85)" />
          <circle cx="100" cy="106" r="10" fill="rgba(255,255,255,0.85)" />
          <path d="M60 60 L140 60 L100 106 Z" stroke={`url(#${strokeId})`} strokeWidth="8" fill="none" strokeLinejoin="round" />
          <path d="M84 46 H116" stroke="rgba(255,255,255,0.78)" strokeWidth="7" strokeLinecap="round" />
        </>
      ) : null}

      {kind === "mobile" ? (
        <>
          <rect x="56" y="16" width="88" height="136" rx="26" fill={`url(#${glassId})`} stroke={`url(#${strokeId})`} strokeWidth="3" />
          <rect x="72" y="44" width="56" height="64" rx="14" fill="rgba(255,255,255,0.66)" />
          <path d="M78 128 H122" stroke="rgba(255,255,255,0.85)" strokeWidth="10" strokeLinecap="round" />
          <path d="M76 60 H124" stroke={`url(#${strokeId})`} strokeWidth="8" strokeLinecap="round" />
          <circle cx="104" cy="82" r="8" fill="rgba(255,255,255,0.8)" />
        </>
      ) : null}

      {kind === "email" ? (
        <>
          <rect x="26" y="44" width="148" height="92" rx="18" fill={`url(#${glassId})`} stroke={`url(#${strokeId})`} strokeWidth="3" />
          <path d="M34 56 L100 98 L166 56" stroke={`url(#${strokeId})`} strokeWidth="9" fill="none" strokeLinejoin="round" />
          <path d="M44 118 H156" stroke="rgba(255,255,255,0.74)" strokeWidth="8" strokeLinecap="round" />
          <path d="M58 72 H92" stroke="rgba(255,255,255,0.68)" strokeWidth="6" strokeLinecap="round" />
        </>
      ) : null}

      {kind === "content" ? (
        <>
          <rect x="44" y="22" width="112" height="128" rx="22" fill={`url(#${glassId})`} stroke={`url(#${strokeId})`} strokeWidth="3" />
          <path d="M66 56 H136" stroke={`url(#${strokeId})`} strokeWidth="10" strokeLinecap="round" />
          <path d="M66 82 H126" stroke="rgba(255,255,255,0.76)" strokeWidth="10" strokeLinecap="round" />
          <path d="M66 108 H138" stroke="rgba(255,255,255,0.76)" strokeWidth="10" strokeLinecap="round" />
          <circle cx="128" cy="44" r="8" fill="rgba(255,255,255,0.84)" />
        </>
      ) : null}

      {kind === "remarketing" ? (
        <>
          <rect x="24" y="28" width="152" height="98" rx="18" fill={`url(#${glassId})`} stroke={`url(#${strokeId})`} strokeWidth="3" />
          <path d="M64 66 C72 52, 88 44, 106 44 C130 44, 150 60, 150 86" stroke={`url(#${strokeId})`} strokeWidth="9" fill="none" strokeLinecap="round" />
          <path d="M150 86 L138 76M150 86 L160 74" stroke={`url(#${strokeId})`} strokeWidth="9" strokeLinecap="round" />
          <circle cx="72" cy="102" r="10" fill="rgba(255,255,255,0.84)" />
        </>
      ) : null}
    </svg>
  );
}
