export default function CareersHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="absolute -top-16 -left-14 -z-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute -top-10 -right-16 -z-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Careers
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
          Build meaningful work with a team that values clarity, craft, and growth.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          Join a culture where strategy meets creativity, ideas turn into outcomes, and every
          role has visible impact.
        </p>
      </div>
    </section>
  );
}
