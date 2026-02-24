"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import styles from "./contact.module.css";

type ServiceOption =
  | "SEO"
  | "PPC"
  | "Web Design"
  | "Web Development"
  | "Content Writing"
  | "Mobile App Development"
  | "Social Media Marketing"
  | "Paid Ads"
  | "Display & Programmatic";

const SERVICE_OPTIONS: ServiceOption[] = [
  "SEO",
  "PPC",
  "Web Design",
  "Web Development",
  "Content Writing",
  "Mobile App Development",
  "Social Media Marketing",
  "Paid Ads",
  "Display & Programmatic",
];

const FAQS = [
  {
    q: "How soon will you respond after I submit the form?",
    a: "We usually respond within 24 to 48 hours. For urgent requests, mention urgency in your message.",
  },
  {
    q: "Do you offer a free strategy call?",
    a: "Yes. We start with a free strategy call to understand goals and share practical next steps.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with B2B, D2C, SaaS, local services, and growth-stage startups across multiple sectors.",
  },
  {
    q: "Do you provide monthly retainers?",
    a: "Yes. We provide monthly retainers for SEO, paid media, content, and growth operations.",
  },
  {
    q: "Can you work with businesses outside Bengaluru?",
    a: "Absolutely. We support remote clients with structured communication and clear reporting cycles.",
  },
  {
    q: "Will my data be secure?",
    a: "Yes. Your details are used only for communication regarding your inquiry and never for spam.",
  },
  {
    q: "Do you sign NDA?",
    a: "Yes. NDA can be signed for confidential projects before strategy discussions begin.",
  },
  {
    q: "What is your onboarding process?",
    a: "Discovery call, audit, roadmap, kickoff, then weekly optimization and reporting.",
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function RevealSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cx(
        "transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}

function SocialIcon({ label }: { label: string }) {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
      {label === "LinkedIn" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.96 1.96 0 1 0 5.3 6.9 1.96 1.96 0 0 0 5.25 3zm5.07 5.5H7.08V20h3.24v-6.03c0-1.6.3-3.15 2.29-3.15 1.96 0 1.99 1.83 1.99 3.26V20h3.24v-6.58c0-3.23-.7-5.7-4.47-5.7-1.81 0-3.03 1-3.53 1.95h-.05V8.5z" />
        </svg>
      ) : null}
      {label === "Instagram" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      ) : null}
      {label === "Facebook" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M13.5 9H16V6h-2.5c-2.8 0-4.5 1.7-4.5 4.7V13H7v3h2v5h3v-5h3l.5-3H12v-2.3c0-1 .4-1.7 1.5-1.7z" />
        </svg>
      ) : null}
      {label === "YouTube" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M21.6 8.2a2.8 2.8 0 0 0-2-2c-1.8-.5-7.6-.5-7.6-.5s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 10 2 12 2 12s0 2 .4 3.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 14 22 12 22 12s0-2-.4-3.8zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      ) : null}
      {label === "X" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M18.8 3h2.9l-6.3 7.2L23 21h-6l-4.7-6.2L6.9 21H4l6.8-7.8L1 3h6.1l4.2 5.6L18.8 3zM17.9 19h1.6L6.2 4.9H4.5L17.9 19z" />
        </svg>
      ) : null}
    </span>
  );
}

function FaqItem({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="card-premium overflow-hidden rounded-2xl">
      <button
        id={buttonId}
        type="button"
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-50/40"
      >
        <span className="text-sm font-semibold text-slate-900 md:text-base">{question}</span>
        <span
          className={cx(
            "inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition",
            open && "rotate-45 border-brand-300 bg-brand-50 text-brand-700"
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cx(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden px-5 pb-4 text-sm leading-relaxed text-slate-600">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [services, setServices] = useState<ServiceOption[]>([]);
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleService = (service: ServiceOption) => {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]
    );
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.firstName.trim()) next.firstName = "First Name is required.";
    if (!form.lastName.trim()) next.lastName = "Last Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Message is required.";
    return next;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("success");
  };

  const describedBy = useMemo(
    () => ({
      firstName: errors.firstName ? "firstName-error" : undefined,
      lastName: errors.lastName ? "lastName-error" : undefined,
      email: errors.email ? "email-error" : undefined,
      message: errors.message ? "message-error" : undefined,
    }),
    [errors]
  );

  return (
    <main className="min-h-screen bg-soft py-14 text-ink-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <RevealSection>
          <section className="card-premium rounded-3xl px-6 py-10 backdrop-blur md:px-10">
            <div className="text-center">
              <p className="inline-flex rounded-full border border-brand-200 bg-brand-50/85 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700 shadow-sm">
                CONTACT
              </p>
              <div className="hero-float">
                <h1 className="text-grad-blue hero-animated-text shimmer mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  Let&apos;s Connect
                </h1>
              </div>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                Tell us about your goals. Our team responds within 24-48 hours.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                {["24-48h Response", "NDA Available", "No Spam"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-8">
          <section className="grid gap-4 md:grid-cols-3">
            <article className="card-premium rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">CALL US</p>
              <a href="tel:+918884014055" className="mt-2 block text-lg font-semibold text-slate-900">
                8884014055
              </a>
              <p className="mt-1 text-sm text-slate-600">Mon-Fri, 9:30 AM - 6:30 PM</p>
            </article>
            <article className="card-premium rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">EMAIL</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">tech@kaalamithra-ai.com</p>
              <p className="mt-1 text-sm text-slate-600">We respond within 24-48 hours.</p>
            </article>
            <article className="card-premium rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">OFFICE</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">RMZ Ecoworld, Bengaluru</p>
              <p className="mt-1 text-sm text-slate-600">Remote + on-site meetings.</p>
            </article>
          </section>
        </RevealSection>

        <RevealSection className="mt-8">
          <section className={`grid gap-6 lg:grid-cols-12 ${styles["form-glow-wrap"]}`}>
            <div className={styles["glow-blue"]} aria-hidden="true" />
            <div className={styles["glow-purple"]} aria-hidden="true" />

            <article className="card-premium rounded-3xl backdrop-blur lg:col-span-8">
              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="text-lg font-semibold text-slate-900">Tell us what you need</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Share a few details and we will recommend the best next steps.
                </p>
              </div>

              <form onSubmit={onSubmit} className="px-6 py-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-900">
                      First Name <span className="text-slate-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      value={form.firstName}
                      onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
                      aria-describedby={describedBy.firstName}
                      className={cx(
                        "input-modern",
                        errors.firstName ? "border-red-300" : "border-slate-200"
                      )}
                    />
                    {errors.firstName ? (
                      <p id="firstName-error" role="alert" className="text-xs text-red-600">
                        {errors.firstName}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-900">
                      Last Name <span className="text-slate-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      value={form.lastName}
                      onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
                      aria-describedby={describedBy.lastName}
                      className={cx(
                        "input-modern",
                        errors.lastName ? "border-red-300" : "border-slate-200"
                      )}
                    />
                    {errors.lastName ? (
                      <p id="lastName-error" role="alert" className="text-xs text-red-600">
                        {errors.lastName}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="companyName" className="text-sm font-medium text-slate-900">
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      value={form.companyName}
                      onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))}
                      className="input-modern"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-900">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                      className="input-modern"
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-slate-900">
                    Email <span className="text-slate-500">*</span>
                  </label>
                  <input
                    id="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    aria-describedby={describedBy.email}
                    className={cx(
                      "input-modern",
                      errors.email ? "border-red-300" : "border-slate-200"
                    )}
                  />
                  {errors.email ? (
                    <p id="email-error" role="alert" className="text-xs text-red-600">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-slate-900">Services Interested In</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICE_OPTIONS.map((service) => {
                      const checked = services.includes(service);
                      return (
                        <label
                          key={service}
                          className={cx(
                            "flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all duration-200",
                            checked
                              ? "border-brand-600 bg-brand-50 text-ink-900 shadow-sm"
                              : "border-slate-200 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50/50"
                          )}
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-200"
                            checked={checked}
                            onChange={() => toggleService(service)}
                          />
                          <span>{service}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-slate-900">
                    Message <span className="text-slate-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    aria-describedby={describedBy.message}
                    className={cx(
                      "input-modern min-h-[120px]",
                      errors.message ? "border-red-300" : "border-slate-200"
                    )}
                  />
                  {errors.message ? (
                    <p id="message-error" role="alert" className="text-xs text-red-600">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="submit"
                    className="btn-primary group relative inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold active:scale-[0.99]"
                  >
                    <span className="relative z-10">Let&apos;s Talk</span>
                    
                  </button>
                  <p className="text-xs text-slate-500">
                    <span aria-hidden="true">{"\u{1F512} "}</span>No spam. Your data is secure.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                    Thanks! Your message is received. We will contact you within 24-48 hours.
                  </div>
                ) : null}
              </form>
            </article>

            <aside className="space-y-4 lg:col-span-4">
              <article className="card-premium rounded-2xl p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">RESPONSE TIME</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Average reply time: 6-12 hours</p>
              </article>
              <article className="card-premium rounded-2xl p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">VALUE</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Free audit included</p>
              </article>
              <article className="card-premium rounded-2xl p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">TEAMS</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Remote + Bengaluru teams</p>
              </article>
            </aside>
          </section>
        </RevealSection>

        <RevealSection className="mt-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Our Location</h2>
                <p className="mt-1 text-sm text-slate-600">Bengaluru - meetings by appointment.</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=RMZ+Ecoworld+Bengaluru"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-blue-700 transition hover:bg-slate-50"
              >
                Get Directions
              </a>
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              {/* Replace with your exact place embed URL if needed */}
              <iframe
                title="Bengaluru Map"
                src="https://www.google.com/maps?q=Tumakuru,Karnataka&output=embed"
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-lg font-semibold text-slate-900">Business Hours</h2>
            <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:max-w-md">
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <span>Mon-Fri</span>
                <span className="font-medium text-slate-900">9:30 AM - 6:30 PM</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <span>Sat-Sun</span>
                <span className="font-medium text-slate-900">Closed</span>
              </div>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Social Media</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Follow us for marketing insights &amp; case studies.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["LinkedIn", "Instagram", "Facebook", "YouTube", "X"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <SocialIcon label={label} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-grad-blue text-lg font-semibold">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-3">
              {FAQS.map((item, idx) => (
                <FaqItem key={item.q} index={idx} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>
        </RevealSection>

      </div>
    </main>
  );
}



