const particles = [
  { top: "8%", left: "6%", size: "h-2 w-2", delay: "0s", animation: "animate-float-fast" },
  { top: "18%", left: "88%", size: "h-3 w-3", delay: "0.8s", animation: "animate-float-med" },
  { top: "34%", left: "12%", size: "h-2.5 w-2.5", delay: "1.5s", animation: "animate-float-slow" },
  { top: "47%", left: "81%", size: "h-2 w-2", delay: "0.4s", animation: "animate-float-fast" },
  { top: "58%", left: "22%", size: "h-3 w-3", delay: "1.1s", animation: "animate-float-med" },
  { top: "72%", left: "92%", size: "h-2 w-2", delay: "0.6s", animation: "animate-float-slow" },
  { top: "84%", left: "10%", size: "h-2.5 w-2.5", delay: "1.7s", animation: "animate-float-med" },
  { top: "90%", left: "74%", size: "h-2 w-2", delay: "0.3s", animation: "animate-float-fast" },
];

export default function FloatingBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-100 via-teal-100 to-emerald-100 opacity-70 blur-3xl animate-float-slow" />
      <div className="absolute top-1/4 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-100 via-sky-100 to-cyan-100 opacity-60 blur-3xl animate-float-med" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-amber-100 via-indigo-100 to-orange-100 opacity-55 blur-3xl animate-float-fast" />
      <div className="absolute bottom-16 right-10 h-56 w-56 rounded-full bg-gradient-to-br from-lime-100 via-emerald-100 to-cyan-100 opacity-60 blur-3xl animate-float-slow" />

      {particles.map((particle, index) => (
        <span
          key={`${particle.top}-${particle.left}-${index}`}
          className={`absolute rounded-full bg-white/90 shadow-[0_0_25px_rgba(37,99,235,0.25)] ${particle.size} ${particle.animation}`}
          style={{ top: particle.top, left: particle.left, animationDelay: particle.delay }}
        />
      ))}
    </div>
  );
}


