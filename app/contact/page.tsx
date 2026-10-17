
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Network,
  ShieldCheck,
  Video,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/lib/data";
import { submitEnquiry } from "@/lib/submit-enquiry";

const inputClass =
  "mt-2 w-full rounded-xl border border-[#dcebe7] bg-white px-4 py-3 text-sm text-[#163d3a] outline-none transition placeholder:text-[#9aadaa] focus:border-[#008276] focus:ring-4 focus:ring-[#008276]/10";

const labelClass = "text-sm font-semibold text-[#163d3a]";

type FormStatus = {
  type: "success" | "error";
  message: string;
};

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);

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

    if (selectedServices.length === 0) {
      setFormStatus({
        type: "error",
        message: "Please select at least one service requirement.",
      });
      return;
    }

    const form = event.currentTarget;

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const result = await submitEnquiry(form, "contact");

      setFormStatus({
        type: "success",
        message: result.message,
      });

      form.reset();
      setSelectedServices([]);
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't submit your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const serviceOptions = [
    ...services.map((service) => ({
      value: service.title,
      label: service.title,
    })),
    {
      value: "Other / Not sure yet",
      label: "Other / Not sure yet",
    },
  ];

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span>Contact</span>
          </div>

          <span className="eyebrow">
            <i /> CONTACT TERALINK
          </span>

          <h1>Let’s make your IT work better.</h1>

          <p>
            Have a project in mind, need ongoing support or want to arrange a
            site assessment? Tell us what your business needs and our team can
            discuss the next steps.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section">
        <div className="container contact-grid">
          {/* Left: contact information */}
          <div className="contact-info">
            <span className="eyebrow">
              <i /> START A CONVERSATION
            </span>

            <h2>Tell us what your business needs.</h2>

            <p>
              Share a few details about your organisation, site and technology
              requirements. Whether you need IT support, infrastructure
              planning, cybersecurity or a new installation, we’ll use this
              information to understand how we can help.
            </p>

            <div className="contact-card">
              <Mail size={19} />
              <div>
                <strong>General enquiries</strong>
                <a href="mailto:info@teralink.ae">info@teralink.ae</a>
              </div>
            </div>

            <div className="contact-card">
              <Phone size={19} />
              <div>
                <strong>Request a call back</strong>
                <a href="tel:+971566914197">+971 56 691 4197</a>
              </div>
            </div>

            <div className="contact-card">
              <MapPin size={19} />
              <div>
                <strong>Our location</strong>
                <span>216–217, Deira Tower, Dubai, UAE</span>
              </div>
            </div>

            {/* Service highlights */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                {
                  icon: Network,
                  title: "Networks",
                  text: "Wi-Fi, cabling and connectivity",
                },
                {
                  icon: ShieldCheck,
                  title: "Cybersecurity",
                  text: "Firewalls and access security",
                },
                {
                  icon: Video,
                  title: "CCTV",
                  text: "Surveillance and monitoring",
                },
                {
                  icon: CalendarDays,
                  title: "Site surveys",
                  text: "Plan your IT requirements",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#dcebe7] bg-[#f4faf8] p-4"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="text-[#008276]"
                    />

                    <h3 className="mt-3 text-sm font-bold text-[#003c3c]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#607774]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Dedicated forms */}
            
<div className="mt-6 rounded-xl border border-[#dcebe7] bg-[#f4faf8] p-5">
  <h3 className="font-bold text-[#003c3c]">
    Need a quote or site survey?
  </h3>

  <p className="mt-2 text-sm leading-6 text-[#607774]">
    Tell us about your project, request a quotation, or arrange a site assessment.
  </p>

  <Link
    href="/request-quote-&-survey"
    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#008276] transition hover:text-[#003c3c]"
  >
    Request a Quote &amp; Site Survey
    <ArrowUpRight size={16} />
  </Link>
</div>

          </div>

          {/* Right: functional contact form */}
          <form
            className="contact-form space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="border-b border-[#e7f0ee] pb-6">
              <span className="eyebrow">
                <i /> CONTACT FORM
              </span>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#003c3c]">
                How can we help?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#607774]">
                Complete the details below so we can better understand your
                requirements. Fields marked with * are required.
              </p>
            </div>

            {/* Submission feedback */}
            {formStatus && (
              <div
                role="status"
                aria-live="polite"
                className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                  formStatus.type === "success"
                    ? "border-[#b9dfd7] bg-[#f0faf7] text-[#005c52]"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {formStatus.type === "success" && (
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0"
                  />
                )}

                <span>{formStatus.message}</span>
              </div>
            )}

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
                    maxLength={150}
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </label>

                <label className={labelClass}>
                  Company name
                  <input
                    name="company"
                    autoComplete="organization"
                    maxLength={200}
                    className={inputClass}
                    placeholder="Business or organisation"
                  />
                </label>

                <label className={labelClass}>
                  Business email *
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={254}
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
                    maxLength={40}
                    className={inputClass}
                    placeholder="+971 ..."
                  />
                </label>

                <label className={labelClass}>
                  Company location *
                  <input
                    name="location"
                    required
                    maxLength={200}
                    className={inputClass}
                    placeholder="City, UAE"
                  />
                </label>

                {/* <label className={labelClass}>
                  Your role
                  <select
                    name="role"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select your role</option>
                    <option>Business owner / Director</option>
                    <option>IT Manager / Administrator</option>
                    <option>Operations / Facilities Manager</option>
                    <option>Procurement</option>
                    <option>Other</option>
                  </select>
                </label> */}
              </div>
            </fieldset>

   

            {/* 02. Site information */}
            {/* <fieldset>
              <legend className="text-lg font-bold text-[#003c3c]">
                02. Site information
              </legend>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Site / building name
                  <input
                    name="siteName"
                    maxLength={200}
                    className={inputClass}
                    placeholder="Office or building name"
                  />
                </label>

                <label className={labelClass}>
                  Type of premises
                  <select
                    name="premises"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select premises type</option>
                    <option>Corporate office</option>
                    <option>Retail / Commercial</option>
                    <option>Healthcare / Clinic</option>
                    <option>Warehouse / Industrial</option>
                    <option>Educational institution</option>
                    <option>Multiple locations</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className={`${labelClass} sm:col-span-2`}>
                  Site address
                  <textarea
                    name="address"
                    rows={3}
                    maxLength={2000}
                    className={`${inputClass} resize-y`}
                    placeholder="Building, street, area and postcode"
                  />
                </label>

                <label className={labelClass}>
                  Approximate site size
                  <select
                    name="siteSize"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select site size</option>
                    <option>Under 2,000 sq. ft.</option>
                    <option>2,000–5,000 sq. ft.</option>
                    <option>5,000–10,000 sq. ft.</option>
                    <option>10,000+ sq. ft.</option>
                    <option>Multiple floors / sites</option>
                    <option>Not sure</option>
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
                    <option>Not sure</option>
                  </select>
                </label>
              </div>
            </fieldset> */}

            <div className="border-t border-[#e7f0ee]" />

            {/* 02. Services required */}
            <fieldset>
              <legend className="text-lg font-bold text-[#003c3c]">
                02. Services required *
              </legend>

              <p className="mt-2 text-sm leading-6 text-[#607774]">
                Select all areas you would like us to help with.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {serviceOptions.map((service) => {
                  const checked = selectedServices.includes(service.value);

                  return (
                    <label
                      key={service.value}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm leading-6 transition ${
                        checked
                          ? "border-[#008276] bg-[#f0faf7]"
                          : "border-[#dcebe7] bg-white hover:border-[#9bcac2]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service.value}
                        checked={checked}
                        onChange={() => toggleService(service.value)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#008276]"
                      />

                      <span className="font-medium text-[#163d3a]">
                        {service.label}
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

              <p className="mt-2 text-sm leading-6 text-[#607774]">
                If your enquiry requires an on-site assessment, share your
                preferred arrangements.
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Preferred survey date
                  <input
                    name="surveyDate"
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
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
                    <option>General assessment</option>
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
              </div>
            </fieldset> */}

          

            {/* 03. Requirements */}
            <fieldset>
              <legend className="text-lg font-bold text-[#003c3c]">
                03. Tell us about your requirements *
              </legend>

              <p className="mt-2 text-sm leading-6 text-[#607774]">
                Describe your current setup, project goals, technical issues
                or the solution you are looking for.
              </p>

              <textarea
                name="message"
                required
                rows={5}
                maxLength={5000}
                className={`${inputClass} resize-y`}
                placeholder="Tell us about your business and what you need..."
              />
            </fieldset>

            {/* Privacy consent */}
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

            {/* Honeypot spam protection */}
            <div
              aria-hidden="true"
              className="absolute -left-[10000px] h-px w-px overflow-hidden"
            >
              <label>
                Leave this field empty
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#003c3c] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,60,60,0.12)] transition hover:-translate-y-0.5 hover:bg-[#008276] focus:outline-none focus:ring-4 focus:ring-[#008276]/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-64"
            >
              {isSubmitting ? "Sending enquiry..." : "Send enquiry"}
              {!isSubmitting && <ArrowUpRight size={16} />}
            </button>

            <p className="text-xs leading-6 text-[#82938f]">
              Submitting this form does not confirm a survey appointment. Our
              team will review your enquiry and discuss the next steps.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
