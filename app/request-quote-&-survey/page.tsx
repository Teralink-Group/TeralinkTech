
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  Network,
  ShieldCheck,
  Video,
} from "lucide-react";
import { submitEnquiry } from "@/lib/submit-enquiry";

const services = [
  "IT Support & Annual Maintenance (AMC)",
  "Network & Wi-Fi Solutions",
  "Cybersecurity & Firewall Management",
  "Microsoft 365 & Cloud Services",
  "CCTV & Surveillance Solutions",
  "Structured Cabling & Fiber Optics",
  "IP Telephony, PABX & VoIP",
  "Server & IT Infrastructure",
  "Call Center & Contact Center Solutions",
  "IT Equipment Supply & Installation",
  "IT Consulting & Office Setup",
  "Other / Not Sure Yet",
];

const budgetOptions = [
  "Not decided yet",
  "Under AED 1,000",
  "AED 1,000 – AED 2,500",
  "AED 2,500 – AED 5,000",
  "AED 5,000 – AED 10,000",
  "AED 10,000 – AED 25,000",
  "Above AED 25,000",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-[#dcebe7] bg-white px-4 py-3 text-sm text-[#163d3a] outline-none transition placeholder:text-[#9aadaa] focus:border-[#008276] focus:ring-4 focus:ring-[#008276]/10";

const labelClass = "text-sm font-semibold text-[#163d3a]";

export default function RequestSiteSurveyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setFormError("");
    setSubmitted(false);

    if (selectedServices.length === 0) {
      setFormError("Please select at least one service requirement.");
      return;
    }

    const form = event.currentTarget;
    setIsSubmitting(true);

    try {
      await submitEnquiry(form, "site-survey");

      setSubmitted(true);
      setFormError(
        "Thank you! Your site survey request has been submitted successfully. Our team will review your requirements and contact you about the next steps."
      );

      form.reset();
      setSelectedServices([]);
    } catch (error) {
      setSubmitted(false);
      setFormError(
        error instanceof Error
          ? error.message
          : "We could not submit your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7fbfa] text-[#163d3a]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#003c3c]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#00a79a]/20 blur-3xl" />
        <div className="absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-[#008276]/20 blur-3xl" />

        <div className="relative container mx-auto grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-36">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal-100">
              <MapPin size={15} />
              IT SOLUTIONS & PROJECT ASSESSMENT
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Request a 
              <span className="text-[#70d8cd]"> Quote & Site Survey</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-teal-50/80 sm:text-lg">
              Planning a new office, upgrading your IT infrastructure or strengthening your business security? Share your requirements with Teralink Technical Solutions to receive a tailored quotation and arrange an on-site assessment when needed.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/90">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2">
                <ClipboardCheck size={16} className="text-[#70d8cd]" />
                IT Requirements Assessment
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2">
                <Network size={16} className="text-[#70d8cd]" />
                Project Planning
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Network,
                title: "Network & Wi-Fi",
                text: "Connectivity and coverage planning",
              },
              {
                icon: ShieldCheck,
                title: "IT Security",
                text: "Firewall and access requirements",
              },
              {
                icon: Video,
                title: "CCTV Systems",
                text: "Camera placement and recording needs",
              },
              {
                icon: CalendarDays,
                title: "Office Setup",
                text: "Cabling and infrastructure assessment",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm sm:p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00a79a]/20 text-[#70d8cd]">
                    <Icon size={21} strokeWidth={1.7} />
                  </span>
                  <h2 className="mt-5 text-base font-bold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-xs leading-6 text-teal-50/65 sm:text-sm">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form and sidebar */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
        <div className="rounded-2xl border border-[#dcebe7] bg-white p-5 shadow-[0_12px_45px_rgba(0,60,60,0.05)] sm:p-8 lg:p-10">
          <div className="mb-8 border-b border-[#e7f0ee] pb-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#008276]">
              Survey enquiry form
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#003c3c] sm:text-3xl">
              Tell us about your site
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#607774]">
              Share a few details so we can understand your requirements.
              Fields marked with * are required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 01. Contact details */}
            <fieldset>
              <legend className="text-lg font-bold text-[#003c3c]">
                01. Contact details
              </legend>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Full name *
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </label>

                <label className={labelClass}>
                  Company name *
                  <input
                    name="company"
                    required
                    autoComplete="organization"
                    className={inputClass}
                    placeholder="Business or organisation"
                  />
                </label>

                <label className={labelClass}>
                  Work email *
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </label>

                <label className={labelClass}>
                  Contact number *
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="Your phone number"
                  />
                </label>
              </div>
            </fieldset>

            <div className="border-t border-[#e7f0ee]" />

            {/* 02. Site information */}
            <fieldset>
              <legend className="text-lg font-bold text-[#003c3c]">
                02. Site information
              </legend>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Site / building name
                  <input
                    name="siteName"
                    className={inputClass}
                    placeholder="Office or building name"
                  />
                </label>

                <label className={labelClass}>
                  Site city *
                  <input
                    name="city"
                    required
                    className={inputClass}
                    placeholder="City"
                  />
                </label>

                <label className={`${labelClass} sm:col-span-2`}>
                  Site address *
                  <textarea
                    name="address"
                    required
                    rows={3}
                    className={`${inputClass} resize-y`}
                    placeholder="Street address, area, city and postcode"
                  />
                </label>

               
              </div>
            </fieldset>

            <div className="border-t border-[#e7f0ee]" />

            {/* 03. Services required */}
            <fieldset>
              <legend className="text-lg font-bold text-[#003c3c]">
                03. Services required *
              </legend>
              <p className="mt-2 text-sm leading-6 text-[#607774]">
                Select all areas you would like us to assess.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((service) => {
                  const checked = selectedServices.includes(service);

                  return (
                    <label
                      key={service}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm leading-6 transition ${
                        checked
                          ? "border-[#008276] bg-[#f0faf7]"
                          : "border-[#dcebe7] bg-white hover:border-[#9bcac2]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={checked}
                        onChange={() => toggleService(service)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#008276]"
                      />
                      <span className="font-medium text-[#163d3a]">
                        {service}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="border-t border-[#e7f0ee]" />

            {/* 04. Survey preferences */}
            {/* <fieldset>
              <legend className="text-lg font-bold text-[#003c3c]">
                04. Survey preferences
              </legend>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Preferred survey date
                  <input
                    name="surveyDate"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className={inputClass}
                  />
                </label>

                <label className={labelClass}>
                  Preferred time
                  <select
                    name="surveyTime"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">No preference</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Flexible</option>
                  </select>
                </label>

                <label className={labelClass}>
                  Project stage
                  <select
                    name="projectStage"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select project stage</option>
                    <option>Planning a new office</option>
                    <option>Upgrading existing infrastructure</option>
                    <option>Resolving an existing issue</option>
                    <option>Expanding to another location</option>
                    <option>Requesting a general assessment</option>
                  </select>
                </label>

                <label className={labelClass}>
                  Expected timeline
                  <select
                    name="timeline"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select timeline</option>
                    <option>As soon as possible</option>
                    <option>Within 2–4 weeks</option>
                    <option>Within 1–3 months</option>
                    <option>More than 3 months</option>
                    <option>Still planning</option>
                  </select>
                </label>

                <label className={`${labelClass} sm:col-span-2`}>
                  Describe your requirements
                  <textarea
                    name="requirements"
                    rows={5}
                    className={`${inputClass} resize-y`}
                    placeholder="Tell us about the current setup, issues, number of users, equipment or project goals."
                  />
                </label>
              </div>
            </fieldset> */}

            {/* Project details */}
            <fieldset>
              <legend className="text-lg font-bold text-[#003c3c]">
                04. Project details
              </legend>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Project type
                  <select
                    name="projectType"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select project type</option>
                    <option>New installation / deployment</option>
                    <option>Upgrade / replacement</option>
                    <option>Ongoing IT support / AMC</option>
                    <option>Equipment procurement</option>
                    <option>Migration / relocation</option>
                    <option>Consultation / assessment</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className={labelClass}>
                  Number of users / workstations
                  <select
                    name="users"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select approximate size</option>
                    <option>1–10</option>
                    <option>11–25</option>
                    <option>26–50</option>
                    <option>51–100</option>
                    <option>101–250</option>
                    <option>250+</option>
                    <option>Not applicable / unsure</option>
                  </select>
                </label>

                <label className={labelClass}>
                  Estimated budget
                  <select
                    name="budget"
                    defaultValue=""
                    className={inputClass}
                  >
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={labelClass}>
                  Preferred implementation timeline
                  <select
                    name="timeline"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select timeline</option>
                    <option>As soon as possible</option>
                    <option>Within 2–4 weeks</option>
                    <option>Within 1–3 months</option>
                    <option>More than 3 months</option>
                    <option>Still planning</option>
                  </select>
                </label>

                <label className={`${labelClass} sm:col-span-2`}>
                  Project / equipment requirements *
                  <textarea
                    name="requirements"
                    required
                    rows={6}
                    className={`${inputClass} resize-y`}
                    placeholder="Describe your requirements, equipment quantities, existing setup, number of locations, preferred brands or any specific technical needs."
                  />
                </label>
              </div>
            </fieldset>

            <label className="flex items-start gap-3 text-sm leading-6 text-[#607774]">
              <input
                name="privacyConsent"
                type="checkbox"
                value="true"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#008276]"
              />
              <span>
                I agree that Teralink Technical Solutions may use the
                information provided to respond to my enquiry, in accordance
                with its{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-[#008276] underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                . *
              </span>
            </label>

            {formError && (
              <p
                role={submitted ? "status" : "alert"}
                aria-live="polite"
                className={`rounded-xl border p-4 text-sm leading-6 ${
                  submitted
                    ? "border-[#b9dfd7] bg-[#f0faf7] text-[#005c52]"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {formError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#003c3c] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,60,60,0.12)] transition hover:-translate-y-0.5 hover:bg-[#008276] focus:outline-none focus:ring-4 focus:ring-[#008276]/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-64"
            >
              {isSubmitting ? "Submitting request..." : "Submit"}
              {!isSubmitting && <ArrowRight size={17} />}
            </button>

            <p className="text-xs leading-6 text-[#82938f]">
              Submitting a request does not confirm an appointment. Our team
              will need to review the enquiry and confirm the next steps.
            </p>
          </form>
        </div>

        {/* Sidebar */}
        <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-2xl bg-[#003c3c] p-6 text-white sm:p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#70d8cd]">
              <ClipboardCheck size={23} />
            </span>

            <h2 className="mt-5 text-xl font-bold">What happens next?</h2>

            <div className="mt-6 space-y-5">
              {[
                {
                  number: "01",
                  title: "Share your requirements",
                  text: "Tell us about your business, IT requirements, project scope and budget.",
                },
                {
                  number: "02",
                  title: "Initial review",
                  text: "Our team reviews your enquiry and clarifies your requirements, priorities and scope.",
                },
                {
                  number: "03",
                  title: "Plan your project",
                  text: "Where required, we coordinate a suitable date for an on-site assessment based on availability.",
                },
                {
                  number: "04",
                  title: "Receive your next steps",
                  text: "We discuss suitable solutions, recommendations and a tailored quotation based on your requirements.",
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-xs font-bold text-[#70d8cd]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">{step.title}</h3>
                    <p className="mt-1 text-xs leading-6 text-teal-50/65">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="rounded-2xl border border-[#dcebe7] bg-white p-6">
            <h2 className="text-lg font-bold text-[#003c3c]">
              Need a quotation instead?
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#607774]">
              If you already know what you need, send your project
              requirements directly to our quotation team.
            </p>
            <Link
              href="/request-a-quotation"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#008276] transition hover:text-[#003c3c]"
            >
              Request a quotation
              <ArrowRight size={16} />
            </Link>
          </div> */}

          <div className="rounded-2xl border border-[#dcebe7] bg-white p-6">
            <CheckCircle2 size={22} className="text-[#008276]" />
            <h2 className="mt-3 text-base font-bold text-[#003c3c]">
              Clear project requirements
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#607774]">
              Providing accurate site information helps us understand your
              needs before discussing the appropriate solution.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
