import { useId } from "react";

export type ServiceKind =
  | "digital"
  | "seo"
  | "performance"
  | "social"
  | "automation"
  | "mobile"
  | "email"
  | "content"
  | "remarketing";

type ServiceIconProps = {
  kind: ServiceKind;
  accentColor: string;
};

export default function ServiceIcon({ kind, accentColor }: ServiceIconProps) {
  const id = useId().replace(/:/g, "");
  const glowId = `glow-${id}`;
  const strokeId = `stroke-${id}`;

  const common = {
    stroke: `url(#${strokeId})`,
    strokeWidth: 2.2,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 96 96" className="h-24 w-24" role="img" aria-hidden="true">
      <defs>
        <radialGradient id={glowId} cx="50%" cy="45%" r="62%">
          <stop offset="0%" stopColor={accentColor} stopOpacity="0.22" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={strokeId} x1="0" y1="0" x2="96" y2="96">
          <stop offset="0%" stopColor={accentColor} stopOpacity="1" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0.78" />
        </linearGradient>
      </defs>
      <ellipse cx="48" cy="48" rx="34" ry="28" fill={`url(#${glowId})`} />

      {kind === "digital" ? (
        <>
          <rect x="16" y="18" width="64" height="42" rx="10" {...common} />
          <path d="M24 48c8-7 14 4 22-6 6-8 12 2 24-9" {...common} />
          <path d="M34 74h28" {...common} />
          <path d="M48 60v14" {...common} />
          <circle cx="30" cy="30" r="2.5" fill={accentColor} stroke="none" />
          <circle cx="40" cy="28" r="2.5" fill={accentColor} stroke="none" />
        </>
      ) : null}

      {kind === "seo" ? (
        <>
          <circle cx="40" cy="40" r="16" {...common} />
          <path d="m52 52 16 16" {...common} />
          <path d="M32 40h16" {...common} />
          <path d="m48 30 8 10-8 10" {...common} />
        </>
      ) : null}

      {kind === "performance" ? (
        <>
          <path d="M22 68V48" {...common} />
          <path d="M34 68V40" {...common} />
          <path d="M46 68V52" {...common} />
          <path d="M58 68V34" {...common} />
          <path d="M70 68V28" {...common} />
          <path d="M22 34c10-8 20 0 30-8 8-6 14 2 22-6" {...common} />
        </>
      ) : null}

      {kind === "social" ? (
        <>
          <rect x="30" y="16" width="36" height="64" rx="10" {...common} />
          <circle cx="48" cy="72" r="2.2" fill={accentColor} stroke="none" />
          <circle cx="24" cy="38" r="3.2" fill={accentColor} stroke="none" />
          <circle cx="74" cy="34" r="3.2" fill={accentColor} stroke="none" />
          <circle cx="74" cy="52" r="2.6" fill={accentColor} stroke="none" />
          <path d="M30 40h-6m42-8h8m-8 20h8" {...common} />
        </>
      ) : null}

      {kind === "automation" ? (
        <>
          <circle cx="24" cy="28" r="5.5" {...common} />
          <circle cx="72" cy="28" r="5.5" {...common} />
          <circle cx="48" cy="48" r="5.5" {...common} />
          <circle cx="24" cy="68" r="5.5" {...common} />
          <circle cx="72" cy="68" r="5.5" {...common} />
          <path d="M29 31 43 45M67 31 53 45M29 65 43 51M67 65 53 51" {...common} />
        </>
      ) : null}

      {kind === "mobile" ? (
        <>
          <rect x="30" y="14" width="36" height="68" rx="10" {...common} />
          <path d="M41 24h14" {...common} />
          <circle cx="48" cy="72" r="2.2" fill={accentColor} stroke="none" />
          <path d="M38 54c5-5 13-5 20-11" {...common} />
        </>
      ) : null}

      {kind === "email" ? (
        <>
          <rect x="16" y="24" width="64" height="44" rx="8" {...common} />
          <path d="m20 30 28 20 28-20" {...common} />
          <path d="M26 58h44" {...common} />
        </>
      ) : null}

      {kind === "content" ? (
        <>
          <rect x="28" y="14" width="40" height="66" rx="8" {...common} />
          <path d="M36 28h24M36 40h24M36 52h18M36 64h22" {...common} />
          <rect x="58" y="18" width="6" height="6" rx="2" fill={accentColor} stroke="none" />
        </>
      ) : null}

      {kind === "remarketing" ? (
        <>
          <path d="M28 34a22 22 0 0 1 36-6" {...common} />
          <path d="m62 22 8 1-2 8" {...common} />
          <path d="M68 60a22 22 0 0 1-36 6" {...common} />
          <path d="m34 72-8-1 2-8" {...common} />
        </>
      ) : null}
    </svg>
  );
}
