"use client";

import { useMemo, useRef, useState } from "react";

type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  level: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

export default function CareersPageClient() {
  const applyRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<string>("performance-marketing-manager");

  const jobs: Job[] = useMemo(
    () => [
      {
        id: "performance-marketing-manager",
        title: "Performance Marketing Manager",
        location: "Bengaluru",
        type: "Full-time",
        level: "Mid-Senior",
        responsibilities: [
          "Plan and manage paid campaigns across Google, Meta, and LinkedIn.",
          "Coordinate creative and landing page tests with design and content teams.",
          "Monitor CPA, ROAS, and funnel performance with weekly optimization loops.",
          "Present growth insights and recommendations to leadership and clients.",
        ],
        requirements: [
          "4+ years in performance marketing with measurable outcomes.",
          "Strong grasp of attribution, tracking setup, and analytics workflows.",
          "Experience with experimentation frameworks and budget pacing.",
          "Clear communication and stakeholder management skills.",
        ],
        benefits: [
          "Performance bonus tied to growth goals.",
          "Learning stipend for advanced certifications.",
          "Hybrid flexibility and wellness support.",
        ],
      },
    ],
    []
  );

  const active = jobs.find((j) => j.id === selected) ?? jobs[0];

  function scrollToApply() {
    applyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-700">
            Careers
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Build your career at KaalaMithra
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
            A culture of ownership, learning, and shipping real outcomes for clients.
          </p>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Ownership", d: "Own outcomes, not tasks." },
              { t: "Learning", d: "Weekly growth + experimentation culture." },
              { t: "Teamwork", d: "High trust, clear communication." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-base font-semibold">{c.t}</p>
                <p className="mt-2 text-sm text-slate-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS + DETAILS + APPLY */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.85fr_1.15fr]">
          {/* left: positions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Open positions</h2>
            <div className="mt-4 space-y-2">
              {jobs.map((j) => (
                <button
                  key={j.id}
                  onClick={() => setSelected(j.id)}
                  className={[
                    "w-full rounded-xl border p-4 text-left transition",
                    selected === j.id
                      ? "border-teal-200 bg-teal-50"
                      : "border-slate-200 bg-white hover:bg-slate-50",
                  ].join(" ")}
                >
                  <p className="font-semibold">{j.title}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {j.location} | {j.type} | {j.level}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* right: job details + apply */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold md:text-3xl">{active.title}</h2>
              <p className="mt-2 text-sm text-slate-600">
                {active.location} | {active.type} | {active.level}
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold">Responsibilities</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {active.responsibilities.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Requirements</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {active.requirements.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold">Benefits</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {active.benefits.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={scrollToApply}
                className="mt-10 inline-flex rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Apply for this role
              </button>
            </div>

            {/* apply form */}
            <div ref={applyRef} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Apply now</h3>
              <p className="mt-2 text-sm text-slate-600">
                Share your profile and we&apos;ll get back if your experience matches this role.
              </p>

              <form className="mt-6 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="First Name" name="firstName" />
                  <Field label="Last Name" name="lastName" />
                </div>

                <Field label="Company Name" name="company" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone Number" name="phone" type="tel" />

                <div>
                  <p className="text-sm font-semibold">Services you are interested in</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      "SEO Services",
                      "Content Writing",
                      "Web Development",
                      "Mobile Marketing",
                      "Paid Social Services",
                      "PPC Services",
                      "Web Design",
                      "Display & Programmatic",
                    ].map((x) => (
                      <label key={x} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                        <input type="checkbox" className="h-4 w-4 accent-teal-600" />
                        <span className="text-slate-700">{x}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 md:w-fit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* OUR OFFICE */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-700">
                  Our Office
                </p>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Bengaluru, Karnataka, India</h2>
                <p className="mt-3 text-sm text-slate-600 md:text-base">
                  KaalaMithra Digital Marketing
                  <br />
                  Bengaluru, Karnataka, India
                </p>

                <div className="mt-5 space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-800">Working hours:</span> Monday - Friday, 9:30 AM - 6:30 PM
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Careers email:</span>{" "}
                    <a
                      href="mailto:tech@kaalamithra-ai.com"
                      className="text-teal-700 transition hover:text-teal-800"
                    >
                      tech@kaalamithra-ai.com
                    </a>
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://maps.google.com/?q=Bengaluru%20Karnataka%20India"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href="mailto:tech@kaalamithra-ai.com"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
                  >
                    Contact HR
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <iframe
                  title="KaalaMithra Office Location"
                  src="https://www.google.com/maps?q=Bengaluru%20Karnataka%20India&output=embed"
                  className="h-72 w-full md:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold">{label} *</span>
      <input
        name={name}
        type={type}
        className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-teal-300 focus:ring-2 focus:ring-teal-200"
        placeholder={`Enter your ${label.toLowerCase()}`}
        required
      />
    </label>
  );
}
