type FloatingBadgeProps = {
  text: string;
  className?: string;
};

export default function FloatingBadge({ text, className = "" }: FloatingBadgeProps) {
  return (
    <div
      className={`pointer-events-none absolute rounded-2xl border border-white/70 bg-white/85 px-4 py-2 text-xs font-semibold text-slate-700 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.55)] backdrop-blur ${className}`}
      aria-hidden="true"
    >
      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  );
}
