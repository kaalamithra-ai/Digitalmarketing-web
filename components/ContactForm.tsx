"use client";

import { useState } from "react";
import StandardLeadForm, {
  StandardLeadFormValues,
} from "@/components/forms/StandardLeadForm";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(values: StandardLeadFormValues) {
    setLoading(true);
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          message: "",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <StandardLeadForm onSubmit={handleSubmit} loading={loading} />
      {submitted ? (
        <p className="text-sm font-medium text-emerald-600" role="status">
          Form submitted successfully.
        </p>
      ) : null}
    </div>
  );
}
