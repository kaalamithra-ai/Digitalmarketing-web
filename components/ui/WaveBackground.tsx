type WaveBackgroundProps = {
  className?: string;
};

export default function WaveBackground({ className = "" }: WaveBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-200/55 blur-3xl" />
      <div className="absolute right-0 top-8 h-80 w-80 rounded-full bg-sky-200/55 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-indigo-200/45 blur-3xl" />

      <svg
        className="absolute inset-x-0 bottom-0 h-40 w-full text-sky-100/80"
        viewBox="0 0 1440 220"
        fill="none"
      >
        <path
          d="M0 126C92 148 184 169 276 171C368 172 460 153 552 137C644 121 736 108 828 121C920 133 1012 171 1104 175C1196 179 1288 149 1380 132C1472 115 1564 112 1656 108V220H0V126Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
