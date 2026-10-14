
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Teralink Technical Solutions to understand how we collect, use, protect and manage personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content:
      "We may collect personal and business information when you contact us, submit a quotation request, request a site survey, or use our website. This may include your name, business name, email address, telephone number, business address, and details about your IT requirements.",
    extra:
      "We may also collect technical information such as browser type, device information, IP address, pages visited, and website usage data, where applicable.",
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to respond to enquiries, prepare quotations, arrange site surveys, provide IT support and services, communicate about projects, and manage our business relationship with you.",
    extra:
      "We may also use relevant information to maintain website security, improve our website and services, meet legal obligations, and prevent misuse or fraudulent activity.",
  },
  {
    id: "sharing-information",
    title: "3. Sharing of Information",
    content:
      "We do not sell personal information. We may share information with trusted service providers, technology vendors, or professional advisers when reasonably necessary to deliver our services, operate our website, or meet legal obligations.",
    extra:
      "Information may also be disclosed where required by law or to protect our legal rights and the security of our business, customers, or systems.",
  },
  {
    id: "cookies-analytics",
    title: "4. Cookies and Website Analytics",
    content:
      "Our website may use cookies and similar technologies to support essential functionality, understand website usage, and improve user experience. Third-party analytics or embedded services may collect information according to their own privacy policies.",
    extra:
      "You can manage cookies through your browser settings. Where required by applicable law, we will seek consent before using non-essential cookies or tracking technologies.",
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content:
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration, or disclosure.",
    extra:
      "No method of online transmission or electronic storage is completely secure. We therefore cannot guarantee absolute security of information transmitted to or stored by us.",
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content:
      "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including providing services, maintaining business records, resolving disputes, and complying with applicable legal requirements.",
  },
  {
    id: "your-rights",
    title: "7. Your Privacy Rights",
    content:
      "Depending on the laws applicable to you, you may have the right to request access to, correction of, or deletion of your personal information, withdraw consent where processing relies on consent, or raise concerns about how your information is handled.",
    extra:
      "To make a privacy-related request, contact us using the details provided below. We may need to verify your identity before processing your request.",
  },
  {
    id: "third-party-links",
    title: "8. Third-Party Websites and Services",
    content:
      "Our website may contain links to third-party websites, platforms, or services. We are not responsible for their privacy practices or content. Please review the privacy policies of those third parties before sharing information with them.",
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    content:
      "Our website and business services are intended for business customers and general professional enquiries, not specifically for children. If you believe a child has provided personal information to us inappropriately, please contact us so that we can review the matter.",
  },
  {
    id: "policy-changes",
    title: "10. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our business, website, services, or legal obligations. Updates will be published on this page along with the revised effective date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#163d3a]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f4faf8]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#00a79a]/20 blur-3xl" />
        <div className="absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-[#008276]/20 blur-3xl" />

        <div className="relative mx-auto container py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full text-[#00674F] border border-white/20 bg-white/10 py-2 text-sm font-medium">
              <span className="eyebrow">
              <i></i>
              Your privacy matters
              </span>
              
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#003c3c] sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#617a74] sm:text-lg">
              We value your trust. This policy explains how Teralink Technical
              Solutions collects, uses, stores and protects information when
              you visit our website or contact us about our services.
            </p>

            <p className="mt-8 text-sm text-[#003c3c]">
              Effective date: 9 October 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid container gap-12 py-14 sm:py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
        <aside className="h-fit rounded-2xl border border-[#dcebe7] bg-[#f4faf8] p-6 lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#008276]">
            On this page
          </p>

          <nav aria-label="Privacy policy sections">
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm leading-6 text-[#607774] transition hover:text-[#008276]"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-sm font-semibold text-[#003c3c] transition hover:text-[#008276]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="min-w-0">
          <div className="mb-10 rounded-2xl border border-[#dcebe7] bg-[#f8fbfa] p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#003c3c]">
              Our commitment to privacy
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#607774] sm:text-base">
              We aim to handle information responsibly and use it only for
              legitimate business purposes. Please read this policy carefully
              to understand our general information-handling practices.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-[#dcebe7] pb-6 last:border-0"
              >
                <h2 className="text-xl font-bold tracking-tight text-[#003c3c] sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#607774] sm:text-base">
                  {section.content}
                </p>
                {"extra" in section && section.extra && (
                  <p className="mt-3 text-sm leading-7 text-[#607774] sm:text-base">
                    {section.extra}
                  </p>
                )}
              </section>
            ))}

            <section
              id="contact"
              className="scroll-mt-28 rounded-2xl bg-[#003c3c] p-7 sm:p-9"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#70d8cd]">
                Privacy enquiries
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white">
                Contact Us
              </h2>
              <p className="mt-4 text-sm leading-7 text-teal-50/80 sm:text-base">
                If you have questions about this Privacy Policy or how your
                information is handled, please contact our team.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#00a79a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#008f84] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#003c3c]"
                >
                  Contact Teralink
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </section>
          </div>

          {/* <p className="mt-10 text-xs leading-6 text-[#607774]">
            This page provides general information about privacy practices. It
            should be reviewed and adapted to reflect Teralink&apos;s actual
            data-processing activities, contact details, applicable
            jurisdictions and legal requirements before publication.
          </p> */}
        </div>
      </section>
    </main>
  );
}
