const values = [
  {
    title: "Ownership",
    description: "We take responsibility for outcomes, not just assigned tasks.",
  },
  {
    title: "Clarity",
    description: "Clear communication and focused priorities shape our pace.",
  },
  {
    title: "Learning",
    description: "Continuous experimentation and feedback drive better work.",
  },
];

const perks = [
  "Flexible work model",
  "Learning budget and mentorship",
  "Health and wellness support",
  "Performance-linked growth",
];

export default function CultureSection() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_55px_-35px_rgba(15,23,42,0.45)] backdrop-blur md:p-8">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Company culture</h2>
            <p className="mt-3 text-base text-slate-600 md:text-lg">
              We combine high standards with healthy collaboration and long-term thinking.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {values.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_18px_55px_-35px_rgba(15,23,42,0.45)] md:p-8">
            <h3 className="text-xl font-semibold text-slate-900">Perks and benefits</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                  {perk}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
