type FloatingDotsProps = {
  className?: string;
};

export default function FloatingDots({ className = "" }: FloatingDotsProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <span className="animate-float-fast absolute left-[8%] top-[12%] h-1.5 w-1.5 rounded-full bg-primary/40" />
      <span className="animate-float-med absolute left-[88%] top-[18%] h-2 w-2 rounded-full bg-accent/35" />
      <span className="animate-float-slow absolute left-[14%] top-[74%] h-1.5 w-1.5 rounded-full bg-cyan-300/60" />
      <span className="animate-float-med absolute left-[78%] top-[80%] h-1.5 w-1.5 rounded-full bg-teal-300/60" />
    </div>
  );
}
