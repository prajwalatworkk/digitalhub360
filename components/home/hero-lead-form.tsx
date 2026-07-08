"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { countries } from "@/content/countries";
import { sendLead } from "@/lib/send-lead";

const serviceOptions = [
  "Digital Marketing",
  "Website Development",
  "Social Media Management",
  "Performance Marketing",
  "AI Video Creation",
  "SEO & Content",
  "App Development",
  "Marketing Automation & CRM"
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Errors = { name?: string; phone?: string; email?: string };

function validatePhone(digits: string, lengths: number[]): string | undefined {
  if (!digits) return "Phone number is required.";
  if (!/^\d+$/.test(digits)) return "Digits only — no spaces or symbols.";
  if (lengths.length > 0) {
    if (!lengths.includes(digits.length)) {
      return `Enter a valid ${lengths.join(" or ")}-digit number.`;
    }
  } else if (digits.length < 6 || digits.length > 14) {
    return "Enter a valid phone number.";
  }
  return undefined;
}

export function HeroLeadForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [countryCode, setCountryCode] = useState(countries[0].code);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const uid = useId();
  const fid = (field: string) => `${uid}-${field}`;

  const options = useMemo(
    () =>
      defaultService && !serviceOptions.includes(defaultService)
        ? [defaultService, ...serviceOptions]
        : serviceOptions,
    [defaultService]
  );

  const activeCountry = countries.find((c) => c.code === countryCode) ?? countries[0];

  const validate = (): Errors => {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    const phoneErr = validatePhone(phone.replace(/\D/g, ""), activeCountry.lengths);
    if (phoneErr) next.phone = phoneErr;
    if (!EMAIL_RE.test(email.trim())) next.email = "Enter a valid email address.";
    return next;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (formData.get("company")) {
      setStatus("success");
      return;
    }

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstField = Object.keys(found)[0];
      document.getElementById(fid(firstField))?.focus();
      return;
    }

    const service = formData.get("service");
    const payload = {
      name: name.trim(),
      phone: `${countryCode} ${phone.replace(/\D/g, "")}`,
      email: email.trim(),
      goal: service,
      budget: "",
      message: `Service requested: ${service}`
    };

    try {
      setStatus("loading");
      await sendLead(payload);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="gradient-border glass flex min-h-[420px] flex-col items-center justify-center gap-4 p-8 text-center shadow-soft"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500"
        >
          <CheckCircle2 size={36} />
        </motion.div>
        <h3 className="font-display text-2xl text-foreground">Request received!</h3>
        <p className="max-w-xs text-sm text-muted">
          Our team will call you within one working day with a plan tailored to your goal.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setName("");
            setPhone("");
            setEmail("");
            setErrors({});
          }}
          className="mt-2 text-xs uppercase tracking-[0.3em] text-accent-primary"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  const inputBase =
    "mt-2 w-full rounded-2xl border bg-background/40 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1";
  const inputState = (hasError?: string) =>
    hasError
      ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/40"
      : "border-border focus:border-accent-primary focus:ring-accent-primary/50";

  return (
    <div className="gradient-border glass p-6 shadow-soft sm:p-8">
      <p className="text-xs uppercase tracking-[0.4em] text-muted">Free Strategy Session</p>
      <h3 className="mt-2 font-display text-xl text-foreground sm:text-2xl">Get your growth plan</h3>
      <p className="mt-1 text-sm text-muted">Tell us what you need — we respond within 24 hours.</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor={fid("name")} className="text-xs uppercase tracking-[0.3em] text-muted">
            Name
          </label>
          <input
            id={fid("name")}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setErrors((prev) => ({ ...prev, name: validate().name }))}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            className={`${inputBase} ${inputState(errors.name)}`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={fid("phone")} className="text-xs uppercase tracking-[0.3em] text-muted">
            Phone
          </label>
          <div className="mt-2 flex gap-2">
            <select
              aria-label="Country code"
              value={countryCode}
              onChange={(e) => {
                setCountryCode(e.target.value);
                setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              className={`w-[104px] shrink-0 rounded-2xl border bg-background/40 px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-1 ${inputState(
                errors.phone
              )}`}
            >
              {countries.map((c) => (
                <option key={c.iso} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
            <input
              id={fid("phone")}
              name="phone"
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))}
              onBlur={() => setErrors((prev) => ({ ...prev, phone: validate().phone }))}
              autoComplete="tel"
              placeholder="Phone number"
              aria-invalid={Boolean(errors.phone)}
              className={`w-full rounded-2xl border bg-background/40 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 ${inputState(
                errors.phone
              )}`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-500" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={fid("email")} className="text-xs uppercase tracking-[0.3em] text-muted">
            Email
          </label>
          <input
            id={fid("email")}
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setErrors((prev) => ({ ...prev, email: validate().email }))}
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            className={`${inputBase} ${inputState(errors.email)}`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={fid("service")} className="text-xs uppercase tracking-[0.3em] text-muted">
            What do you need?
          </label>
          <select
            id={fid("service")}
            name="service"
            required
            defaultValue={defaultService ?? options[0]}
            key={defaultService}
            className="mt-2 w-full cursor-pointer rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary/50"
          >
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3.5 font-semibold text-white shadow-glow transition hover:scale-[1.02] disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send size={16} /> Get My Free Plan
            </>
          )}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-500" role="alert">
            Something went wrong. Call us at +91 78922 18476 or email info@digitalhub360.in
          </p>
        )}
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-muted">
          No spam. No obligation. Free consultation.
        </p>
      </form>
    </div>
  );
}
