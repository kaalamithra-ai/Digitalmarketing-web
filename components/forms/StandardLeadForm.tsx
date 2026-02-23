"use client";

import { FormEvent, useState } from "react";
import {
  checkboxGrid,
  checkboxRow,
  errorText,
  formCard,
  formStack,
  input,
  label,
  nameGrid,
  requiredStar,
  servicesGrid,
  submitButton,
} from "@/components/forms/formStyles";

export type LeadService =
  | "SEO Services"
  | "Content Writing"
  | "Web Development"
  | "iOS App Development"
  | "Amazon Marketing"
  | "Display and Programmatic"
  | "PPC Services"
  | "Web Design"
  | "Android App Development"
  | "Mobile Marketing"
  | "Paid Social Services";

export type StandardLeadFormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  services: LeadService[];
};

export type StandardLeadFormProps = {
  title?: string;
  defaultServices?: LeadService[];
  loading?: boolean;
  onSubmit: (values: StandardLeadFormValues) => void | Promise<void>;
  showCompany?: boolean;
  showEmail?: boolean;
  showPhone?: boolean;
};

type FormErrors = Partial<Record<keyof StandardLeadFormValues, string>>;

const LEFT_COLUMN_SERVICES: LeadService[] = [
  "SEO Services",
  "Content Writing",
  "Web Development",
  "iOS App Development",
  "Amazon Marketing",
  "Display and Programmatic",
];

const RIGHT_COLUMN_SERVICES: LeadService[] = [
  "PPC Services",
  "Web Design",
  "Android App Development",
  "Mobile Marketing",
  "Paid Social Services",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function StandardLeadForm({
  title,
  defaultServices = [],
  loading = false,
  onSubmit,
  showCompany = true,
  showEmail = true,
  showPhone = true,
}: StandardLeadFormProps) {
  const [values, setValues] = useState<StandardLeadFormValues>({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    services: defaultServices,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  function toggleService(service: LeadService) {
    setValues((prev) => {
      const exists = prev.services.includes(service);
      const nextServices = exists
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service];
      return { ...prev, services: nextServices };
    });
    setErrors((prev) => ({ ...prev, services: undefined }));
  }

  function validate(): boolean {
    const nextErrors: FormErrors = {};

    if (!values.firstName.trim()) nextErrors.firstName = "First Name is required.";
    if (!values.lastName.trim()) nextErrors.lastName = "Last Name is required.";
    if (showCompany && !values.companyName.trim()) {
      nextErrors.companyName = "Company Name is required.";
    }
    if (showEmail) {
      if (!values.email.trim()) {
        nextErrors.email = "Email is required.";
      } else if (!EMAIL_REGEX.test(values.email)) {
        nextErrors.email = "Enter a valid email.";
      }
    }
    if (showPhone && !values.phone.trim()) {
      nextErrors.phone = "Phone is required.";
    }
    if (values.services.length === 0) {
      nextErrors.services = "Please select at least 1 service.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    await onSubmit(values);
  }

  function renderLabel(text: string, required = true) {
    return (
      <span className={label}>
        {text}
        {required ? <span className={requiredStar}>*</span> : null}
      </span>
    );
  }

  return (
    <form className={`${formCard} ${formStack}`} onSubmit={handleSubmit} noValidate>
      {title ? <h2 className="text-xl font-semibold text-neutral-900">{title}</h2> : null}

      <div className={nameGrid}>
        <label className="grid gap-2">
          {renderLabel("First Name")}
          <input
            type="text"
            value={values.firstName}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, firstName: event.target.value }))
            }
            className={input}
            placeholder="Enter your first name"
          />
          {errors.firstName ? <p className={errorText}>{errors.firstName}</p> : null}
        </label>

        <label className="grid gap-2">
          {renderLabel("Last Name")}
          <input
            type="text"
            value={values.lastName}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, lastName: event.target.value }))
            }
            className={input}
            placeholder="Enter your last name"
          />
          {errors.lastName ? <p className={errorText}>{errors.lastName}</p> : null}
        </label>
      </div>

      {showCompany ? (
        <label className="grid gap-2">
          {renderLabel("Company Name")}
          <input
            type="text"
            value={values.companyName}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, companyName: event.target.value }))
            }
            className={input}
            placeholder="Enter your company name"
          />
          {errors.companyName ? <p className={errorText}>{errors.companyName}</p> : null}
        </label>
      ) : null}

      {showEmail ? (
        <label className="grid gap-2">
          {renderLabel("Email")}
          <input
            type="email"
            value={values.email}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            className={input}
            placeholder="Enter your email"
          />
          {errors.email ? <p className={errorText}>{errors.email}</p> : null}
        </label>
      ) : null}

      {showPhone ? (
        <label className="grid gap-2">
          {renderLabel("Phone")}
          <input
            type="tel"
            value={values.phone}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, phone: event.target.value }))
            }
            className={input}
            placeholder="Enter your phone"
          />
          {errors.phone ? <p className={errorText}>{errors.phone}</p> : null}
        </label>
      ) : null}

      <div className="grid gap-2">
        {renderLabel("Services you are interested in")}
        <div className={servicesGrid}>
          <div className={checkboxGrid}>
            {LEFT_COLUMN_SERVICES.map((service) => (
              <label key={service} className={checkboxRow}>
                <input
                  type="checkbox"
                  checked={values.services.includes(service)}
                  onChange={() => toggleService(service)}
                  className="h-4 w-4 rounded border-neutral-300 accent-emerald-500"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
          <div className={checkboxGrid}>
            {RIGHT_COLUMN_SERVICES.map((service) => (
              <label key={service} className={checkboxRow}>
                <input
                  type="checkbox"
                  checked={values.services.includes(service)}
                  onChange={() => toggleService(service)}
                  className="h-4 w-4 rounded border-neutral-300 accent-emerald-500"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>
        {errors.services ? <p className={errorText}>{errors.services}</p> : null}
      </div>

      <div>
        <button type="submit" disabled={loading} className={submitButton}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
