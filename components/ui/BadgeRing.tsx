type BadgeRingProps = {
  value: number;
  label?: string;
  className?: string;
};

export default function BadgeRing({
  value,
  label = "%",
  className = "",
}: BadgeRingProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div
      className={`relative inline-flex h-12 w-12 items-center justify-center rounded-full ${className}`}
      style={{
        background: `conic-gradient(rgb(15 185 177) ${clamped}%, rgb(226 232 240) ${clamped}% 100%)`,
      }}
      aria-label={`${clamped}${label}`}
    >
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-slate-700">
        {clamped}
        {label}
      </div>
    </div>
  );
}
