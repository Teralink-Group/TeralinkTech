
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Condition",
  description:
    "Read the Terms and Conditions governing the use of the Teralink Technical Solutions website, enquiries, quotations and IT services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    paragraphs: [
      "These Terms and Conditions govern your access to and use of the Teralink Technical Solutions website. By accessing this website, you agree to comply with these terms. If you do not agree, please discontinue use of the website.",
      "Additional terms may apply to specific services, quotations, support arrangements or projects. Where applicable, those terms will be provided separately and should be read together with this document.",
    ],
  },
  {
    id: "about-services",
    title: "2. Our Services",
    paragraphs: [
      "Teralink Technical Solutions provides business technology services that may include IT support and annual maintenance contracts (AMC), networking and Wi-Fi, cybersecurity, firewall management, Microsoft 365, cloud services, servers, IT infrastructure, CCTV and surveillance, structured cabling, fiber optics, IP telephony, equipment supply, installation and IT consultancy.",
      "The availability, scope and delivery of any service depend on the requirements agreed with the customer, technical feasibility, resource availability and any applicable service agreement.",
    ],
  },
  {
    id: "website-information",
    title: "3. Website Information",
    paragraphs: [
      "We aim to keep the information on this website accurate and up to date. However, service descriptions, technical information, product references and other website content are provided for general informational purposes and may change without notice.",
      "Website content does not constitute a binding quotation, service-level commitment, technical guarantee or contractual offer unless expressly stated in a separate written agreement.",
    ],
  },
  {
    id: "enquiries-quotations",
    title: "4. Enquiries, Site Surveys and Quotations",
    paragraphs: [
      "Submitting a contact form, requesting a site survey or asking for a quotation does not automatically create a contract or guarantee that a service can be delivered.",
      "Quotations may depend on the information provided, site conditions, equipment availability, licensing requirements, third-party pricing and other project-specific factors. Any quotation should be reviewed for its scope, pricing, validity period, payment terms, exclusions and delivery conditions.",
      "Work will commence subject to the relevant proposal or quotation being accepted and any required agreement, approvals, payments or purchase orders being completed.",
    ],
  },
  {
    id: "customer-responsibilities",
    title: "5. Customer Responsibilities",
    paragraphs: [
      "Customers are responsible for providing accurate project information, appropriate access to relevant premises and systems, and timely cooperation required for agreed services.",
      "Customers should ensure that they have the authority to request changes to the systems, accounts, networks, devices and data covered by the engagement. They should also maintain appropriate backups, authorisations and licences unless these responsibilities have expressly been included in the agreed scope.",
    ],
  },
  {
    id: "pricing-payment",
    title: "6. Pricing and Payment",
    paragraphs: [
      "Prices, taxes, payment schedules, deposits, recurring charges and other commercial terms will be specified in the applicable quotation, invoice or service agreement.",
      "Unless otherwise agreed in writing, customers are expected to make payments according to the stated payment terms. Any applicable late-payment charges, suspension rights, refunds or cancellation fees must be governed by the relevant written agreement and applicable law.",
    ],
  },
  {
    id: "third-party-products",
    title: "7. Third-Party Products and Services",
    paragraphs: [
      "Our work may involve hardware, software, cloud platforms, subscriptions, licences or services supplied by third parties. Such products and services may be subject to the relevant manufacturer's terms, licence conditions, warranty policies and support arrangements.",
      "References to brands such as Microsoft, Cisco, Dell, Fortinet, D-Link, Linksys, Avaya, Ruijie, TP-Link and Ubiquiti are for identification and informational purposes. Unless expressly confirmed in writing, their appearance on this website does not imply an authorised partnership, certification or endorsement.",
      "Third-party availability, pricing, functionality and support policies may change independently of Teralink. Applicable third-party terms will govern the relevant products and services.",
    ],
  },
  {
    id: "maintenance-support",
    title: "8. IT Support and Maintenance",
    paragraphs: [
      "The scope of IT support and annual maintenance contracts (AMC), including covered equipment, service hours, response targets, exclusions, escalation procedures and renewal arrangements, will be specified in the applicable service agreement.",
      "Unless expressly agreed, an enquiry or general service description on this website does not establish guaranteed response times, uninterrupted availability, resolution times or continuous monitoring.",
    ],
  },
  {
    id: "cybersecurity",
    title: "9. Cybersecurity and Data Protection",
    paragraphs: [
      "Cybersecurity, backup, recovery, firewall and related IT services are intended to help manage technology risks. No security measure or service can guarantee the prevention of every cyberattack, data loss, system failure or unauthorised access incident.",
      "Customers remain responsible for their business decisions, appropriate access permissions and any responsibilities assigned to them under the applicable agreement. Specific data-handling, confidentiality and security obligations should be documented in the relevant contract where required.",
    ],
  },
  {
    id: "intellectual-property",
    title: "10. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, the content of this website, including its text, design, graphics and original materials, is owned by or used with permission by Teralink Technical Solutions and may be protected by applicable intellectual property laws.",
      "You may access the website for lawful informational and business purposes. You must not reproduce, distribute, modify or commercially exploit protected website content without appropriate permission, except where permitted by law.",
      "Third-party trademarks and logos remain the property of their respective owners.",
    ],
  },
  {
    id: "acceptable-use",
    title: "11. Acceptable Use",
    paragraphs: [
      "You must not use this website for unlawful purposes, attempt to gain unauthorised access to its systems, introduce malicious code, disrupt website operations, submit misleading information or interfere with other users' access.",
      "We may take reasonable measures to protect the website and our systems from misuse, subject to applicable law.",
    ],
  },
  {
    id: "availability",
    title: "12. Website Availability",
    paragraphs: [
      "We do not guarantee that the website will always be available, uninterrupted, error-free or compatible with every device or browser. Maintenance, technical problems, security measures and circumstances beyond our reasonable control may affect availability.",
    ],
  },
  {
    id: "liability",
    title: "13. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, Teralink Technical Solutions will not be liable for indirect, incidental, special or consequential losses arising from the use of this website or reliance on general website information.",
      "Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by law. Any liability relating to contracted services will be subject to the applicable written agreement and mandatory legal requirements.",
    ],
  },
  {
    id: "indemnity",
    title: "14. Indemnity",
    paragraphs: [
      "To the extent permitted by applicable law, you are responsible for losses or claims arising from your unlawful use of the website, your violation of these terms or your infringement of another party's rights. This provision does not apply to the extent a claim results from our own acts or omissions where the law does not permit such responsibility to be excluded.",
    ],
  },
  {
    id: "privacy",
    title: "15. Privacy",
    paragraphs: [
      "Our collection and handling of personal information are described in our Privacy Policy. By using the website, you should review that policy to understand our information-handling practices.",
    ],
  },
  {
    id: "changes",
    title: "16. Changes to These Terms",
    paragraphs: [
      "We may revise these Terms and Conditions to reflect changes in our website, services, business practices or legal requirements. Revised terms will be published on this page with an updated effective date.",
      "Changes to an existing customer contract will be governed by the variation provisions of that agreement and applicable law.",
    ],
  },
  {
    id: "governing-law",
    title: "17. Governing Law and Disputes",
    paragraphs: [
      "These terms are subject to applicable law. The governing law, jurisdiction and dispute-resolution arrangements for a particular service should be confirmed in the relevant contract or proposal.",
      // "Before publication, Teralink should specify its legal business name, registered or principal business address, governing jurisdiction and any appropriate dispute-resolution provisions.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#163d3a]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f4faf8]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#00a79a]/20 blur-3xl" />
        <div className="absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-[#008276]/20 blur-3xl" />

        <div className="relative mx-auto container py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#00674F]">
            <span className="eyebrow">
              <i></i>
               Clear terms. Transparent service.
              </span>
              
             
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#003c3c] sm:text-5xl lg:text-6xl">
              Terms &amp; Conditions
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#617a74] sm:text-lg">
              These terms explain the conditions governing your use of the
              Teralink Technical Solutions website, service enquiries and
              related business interactions.
            </p>

            <p className="mt-8 text-sm text-[#003c3c]">
              Effective date: 9 October 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto grid container gap-12 py-14 sm:py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
        <aside className="h-fit rounded-2xl border border-[#dcebe7] bg-[#f4faf8] p-6 lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#008276]">
            On this page
          </p>

          <nav aria-label="Terms and conditions sections">
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
              Please read these terms carefully
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#607774] sm:text-base">
              These terms provide a general framework for website use and
              enquiries. The specific scope, pricing, responsibilities and
              obligations associated with IT services may be set out in
              separate written quotations, proposals or agreements.
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

                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mt-4 text-sm leading-7 text-[#607774] sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.id === "privacy" && (
                  <Link
                    href="/privacy-policy"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#008276] underline-offset-4 hover:underline"
                  >
                    Read our Privacy Policy
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </section>
            ))}

            <section
              id="contact"
              className="scroll-mt-28 rounded-2xl bg-[#003c3c] p-7 sm:p-9"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#70d8cd]">
                Questions about these terms?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white">
                Contact Teralink
              </h2>

              <p className="mt-4 text-sm leading-7 text-teal-50/80 sm:text-base">
                Contact our team if you need clarification about website use,
                a quotation, an IT service or the terms applicable to your
                project.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#00a79a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#008f84] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#003c3c]"
                >
                  Contact Us
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </section>
          </div>

         
        </div>
      </section>
    </main>
  );
}
