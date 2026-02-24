"use client";

import { FormEvent, useEffect, useState } from "react";

type ApplyFormProps = {
  selectedRole?: string;
};

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  linkedIn: string;
  portfolio: string;
  coverLetter: string;
  resumeText: string;
  resumeFileName: string;
};

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  role: "",
  linkedIn: "",
  portfolio: "",
  coverLetter: "",
  resumeText: "",
  resumeFileName: "",
};

export default function ApplyForm({ selectedRole = "" }: ApplyFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValues((prev) => ({ ...prev, role: selectedRole || prev.role }));
  }, [selectedRole]);

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.fullName.trim()) nextErrors.fullName = "Full Name is required.";
    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!values.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!values.role.trim()) nextErrors.role = "Role is required.";
    if (!values.coverLetter.trim()) nextErrors.coverLetter = "Cover letter is required.";
    if (!values.resumeText.trim() && !values.resumeFileName.trim()) {
      nextErrors.resumeText = "Upload resume or paste resume text.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);

    if (!validate()) return;

    setSubmitted(true);
    setValues((prev) => ({
      ...initialValues,
      role: selectedRole || prev.role,
    }));
    setErrors({});
  }

  return (
    <section className="relative py-14 md:py-20" id="apply">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <aside className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Apply now</h2>
            <p className="mt-3 text-base text-slate-600 md:text-lg">
              Share your profile and we will get back if your experience matches this role.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Selected role
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {selectedRole || "Choose a role from Open positions"}
              </p>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_22px_55px_-35px_rgba(15,23,42,0.45)] md:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Full Name</span>
                <input
                  type="text"
                  value={values.fullName}
                  onChange={(e) => setValues((prev) => ({ ...prev, fullName: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                />
                {errors.fullName ? <p className="mt-1 text-xs text-blue-700">{errors.fullName}</p> : null}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                />
                {errors.email ? <p className="mt-1 text-xs text-blue-700">{errors.email}</p> : null}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Phone</span>
                <input
                  type="tel"
                  value={values.phone}
                  onChange={(e) => setValues((prev) => ({ ...prev, phone: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                />
                {errors.phone ? <p className="mt-1 text-xs text-blue-700">{errors.phone}</p> : null}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Role</span>
                <input
                  type="text"
                  value={values.role}
                  onChange={(e) => setValues((prev) => ({ ...prev, role: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                />
                {errors.role ? <p className="mt-1 text-xs text-blue-700">{errors.role}</p> : null}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">LinkedIn URL</span>
                <input
                  type="url"
                  value={values.linkedIn}
                  onChange={(e) => setValues((prev) => ({ ...prev, linkedIn: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Portfolio URL</span>
                <input
                  type="url"
                  value={values.portfolio}
                  onChange={(e) => setValues((prev) => ({ ...prev, portfolio: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-medium text-slate-700">Cover letter</span>
              <textarea
                value={values.coverLetter}
                onChange={(e) => setValues((prev) => ({ ...prev, coverLetter: e.target.value }))}
                rows={5}
                className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              />
              {errors.coverLetter ? <p className="mt-1 text-xs text-blue-700">{errors.coverLetter}</p> : null}
            </label>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Resume upload (optional)</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      resumeFileName: e.target.files?.[0]?.name || "",
                    }))
                  }
                  className="mt-2 block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200"
                />
                {values.resumeFileName ? (
                  <p className="mt-1 text-xs text-slate-600">{values.resumeFileName}</p>
                ) : null}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Paste resume</span>
                <textarea
                  value={values.resumeText}
                  onChange={(e) => setValues((prev) => ({ ...prev, resumeText: e.target.value }))}
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                />
                {errors.resumeText ? <p className="mt-1 text-xs text-blue-700">{errors.resumeText}</p> : null}
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                Submit application
              </button>
              {submitted ? (
                <p role="status" className="text-sm font-medium text-emerald-600">
                  Application submitted successfully. Our team will review and get back to you.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

