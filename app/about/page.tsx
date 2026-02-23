import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.14),transparent_45%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600">About Kaalamithra</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            AI-First Growth. Real Business Impact.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            We help modern businesses scale with AI-powered marketing systems built for clarity, speed, and measurable outcomes.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start Your Growth Plan
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">Company Overview</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              At the heart of Kaalamithra is a deep commitment to helping businesses grow through trust,
              relationships, credibility, and intelligent execution. We combine strategic thinking with AI-powered
              systems so every campaign, workflow, and decision contributes to sustainable business outcomes.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold">Business Connected Model</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We do not run disconnected activities. Our model connects audience research, campaign execution,
              performance analytics, and optimization into one operating loop, giving your business a clear growth
              engine instead of short-term tactics.
            </p>
          </article>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <article className="rounded-3xl border border-white/60 bg-white/80 p-7 shadow-[0_16px_45px_-32px_rgba(2,6,23,0.35)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Mission</p>
            <h3 className="mt-3 text-2xl font-semibold">Data Into Growth</h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              We use AI to turn data into growth, optimizing marketing, operations, and decision-making for modern businesses.
            </p>
          </article>
          <article className="rounded-3xl border border-white/60 bg-white/80 p-7 shadow-[0_16px_45px_-32px_rgba(2,6,23,0.35)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Vision</p>
            <h3 className="mt-3 text-2xl font-semibold">Intelligent Growth</h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              Intelligent growth through AI-powered marketing and business innovation.
            </p>
          </article>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Core Values</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Clarity", desc: "We simplify complex growth decisions into clear action plans." },
              { title: "Credibility", desc: "We build trust with transparent execution and accountable reporting." },
              { title: "Innovation", desc: "We combine AI and strategy to unlock new opportunities faster." },
              { title: "Consistency", desc: "We focus on systems that deliver repeatable, long-term outcomes." },
            ].map((value) => (
              <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 pt-4 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Next Step</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Ready to build measurable growth?</h2>
            <p className="mt-4 max-w-3xl text-slate-200">
              Partner with Kaalamithra to align strategy, execution, and analytics into one AI-first growth system.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
