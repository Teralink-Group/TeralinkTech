import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Database,
  Headphones,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Teralink Technical Solutions, including IT support, network solutions, cybersecurity, cloud and Microsoft 365, infrastructure, backup and IT consulting.",
  alternates: {
    canonical: "/faq",
  },
};

const faqGroups = [
  {
    title: "IT Support & Maintenance",
    icon: Headphones,
    questions: [
      {
        question: "What IT support services does Teralink provide?",
        answer:
          "Teralink provides business IT support covering remote and on-site technical support, troubleshooting, preventive maintenance and ongoing IT support arrangements.",
      },
      {
        question:
          "Can Teralink provide both remote and on-site IT support?",
        answer:
          "Yes. Teralink's IT support offering is designed to cover both remote assistance and on-site technical support, depending on the business requirement and nature of the issue.",
      },
      {
        question: "Do you provide ongoing IT maintenance?",
        answer:
          "Yes. Teralink can support ongoing IT maintenance and preventive technology management to help businesses keep their systems reliable and operational.",
      },
    ],
  },
  {
    title: "Network & Wi-Fi Solutions",
    icon: Network,
    questions: [
      {
        question: "What network services does Teralink offer?",
        answer:
          "Teralink provides business network solutions including router and switch setup, Wi-Fi installation, configuration and network management.",
      },
      {
        question: "Can you set up Wi-Fi for a new office?",
        answer:
          "Yes. Teralink can help plan and configure business Wi-Fi infrastructure as part of a new-office or office technology setup.",
      },
      {
        question:
          "Can Teralink troubleshoot network connectivity issues?",
        answer:
          "Yes. Network troubleshooting and technical support are part of Teralink's IT support and network services.",
      },
    ],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    questions: [
      {
        question: "What cybersecurity services do you provide?",
        answer:
          "Teralink provides cybersecurity solutions including firewall protection, endpoint protection, email security and IT security assessments.",
      },
      {
        question: "Can you assess our existing IT security?",
        answer:
          "Yes. Teralink offers IT security assessments to help organisations review their technology environment and identify areas that may require attention.",
      },
      {
        question: "Do you provide firewall and endpoint protection?",
        answer:
          "Yes. Firewall and endpoint protection are included within Teralink's cybersecurity solutions.",
      },
    ],
  },
  {
    title: "Cloud & Microsoft 365",
    icon: Cloud,
    questions: [
      {
        question:
          "What Microsoft 365 services does Teralink provide?",
        answer:
          "Teralink supports business email and Microsoft 365 deployment, administration and related cloud services.",
      },
      {
        question: "Can you help migrate our business to the cloud?",
        answer:
          "Yes. Cloud migration and administration are part of Teralink's cloud and Microsoft 365 services.",
      },
      {
        question: "Can you manage Microsoft 365 after deployment?",
        answer:
          "Yes. Teralink provides ongoing Microsoft 365 and cloud administration to support business technology environments.",
      },
    ],
  },
  {
    title: "Servers & IT Infrastructure",
    icon: Server,
    questions: [
      {
        question:
          "What server and infrastructure services do you provide?",
        answer:
          "Teralink provides server setup, virtualization, infrastructure management and IT infrastructure upgrades.",
      },
      {
        question:
          "Can Teralink help with infrastructure upgrades?",
        answer:
          "Yes. Infrastructure upgrades and technology planning are part of Teralink's server and IT infrastructure services.",
      },
    ],
  },
  {
    title: "Backup, Recovery & Equipment",
    icon: Database,
    questions: [
      {
        question:
          "Do you provide data backup and recovery solutions?",
        answer:
          "Yes. Teralink provides automated backup, data recovery and disaster recovery planning services.",
      },
      {
        question: "Can you supply and install IT equipment?",
        answer:
          "Yes. Teralink supplies and installs desktops, laptops, servers, printers and networking equipment based on business requirements.",
      },
      {
        question:
          "Can you help set up technology for a new office?",
        answer:
          "Yes. Teralink provides IT consulting, IT planning and complete technology setup for new offices and office relocations.",
      },
    ],
  },
];

const faqSchema = faqGroups.flatMap((group) =>
  group.questions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }))
);

export default function FAQPage() {
  return (
    <>
      <main className="overflow-hidden">
        {/* =========================================
            HERO
        ========================================= */}
        <section className="relative overflow-hidden bg-[#f4faf8] py-16 sm:py-20 lg:py-24">
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-56 h-[520px] w-[520px] rounded-full border border-[#d1e6df]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-36 h-[360px] w-[360px] rounded-full border border-[#e0eee9]"
          />

          <div className="relative mx-auto container">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-[11px] text-[#819590] sm:mb-10">
              <Link
                href="/"
                className="transition-colors hover:text-[#008276]"
              >
                Home
              </Link>

              <span>/</span>

              <span>FAQs</span>
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-20">
              {/* Hero copy */}
              <div>
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#008276]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00a79a]" />
                  Frequently asked questions
                </span>

                <h1 className="mt-5 max-w-[720px] text-[clamp(40px,5vw,62px)] font-semibold leading-[1.06] tracking-[-0.05em] text-[#003c3c]">
                  Answers to your business IT questions.
                </h1>

                <p className="mt-6 max-w-[650px] text-[14px] leading-[1.9] text-[#617a74] sm:text-[15px]">
                  Explore answers to common questions about IT support,
                  network infrastructure, cybersecurity, cloud and Microsoft
                  365, data protection and business technology services.
                </p>
              </div>

              {/* Contact card */}
              <div className="relative overflow-hidden rounded-2xl border border-[#dcebe7] bg-white p-6 shadow-[0_18px_55px_rgba(0,60,60,0.08)]">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full border border-[#dcebe7]"
                />

                <div className="relative">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#e8f5f1] text-[#008276]">
                    <Headphones size={24} strokeWidth={1.7} />
                  </div>

                  <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7a908b]">
                    Need a specific answer?
                  </span>

                  <strong className="mt-2 block text-[18px] font-semibold leading-[1.3] text-[#003c3c]">
                    Talk to our technical team.
                  </strong>

                  <Link
                    href="/contact"
                    className="button button-primary mt-5 inline-flex items-center gap-2 rounded-lg bg-[#003c3c] text-[12px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#008276]"
                  >
                    Contact Teralink
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            FAQ CONTENT
        ========================================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-[min(100%-32px,1180px)]">
            {/* Intro */}
            <div className="mb-12 grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#008276]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00a79a]" />
                  Teralink support
                </span>

                <h2 className="mt-4 max-w-[650px] text-[clamp(30px,4vw,45px)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#003c3c]">
                  Everything you need to know about our IT services.
                </h2>
              </div>

              <p className="text-[13px] leading-[1.85] text-[#607774]">
                If you cannot find the information you need, our team can
                discuss your requirements and recommend an appropriate
                technology approach.
              </p>
            </div>

            {/* FAQ Groups */}
            <div className="space-y-12">
              {faqGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <section
                    key={group.title}
                    className=" gap-6 border-[#dcebe7] pt-4 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-14"
                  >
                    {/* Group heading */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#dcebe7] bg-[#f1f8f5] text-[#008276]">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      <h2 className="mt-1 text-[18px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#003c3c]">
                        {group.title}
                      </h2>
                    </div>

                    {/* Questions */}
                    <div className="border-t border-[#dcebe7]">
                      {group.questions.map((item) => (
                        <details
                          key={item.question}
                          className="group border-b border-[#dcebe7]"
                        >
                          <summary className="flex min-h-[68px] cursor-pointer list-none items-center justify-between gap-5 py-4 text-[15px] font-semibold leading-[1.45] text-[#003c3c] marker:hidden [&::-webkit-details-marker]:hidden sm:text-[16px]"
                          >
                            <span>{item.question}</span>

                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#dcebe7] bg-[#f7fbfa] text-[#008276] transition-transform duration-200 group-open:rotate-180 group-open:bg-[#e8f5f1]">
                              <ChevronDown size={17} />
                            </span>
                          </summary>

                          <div className="max-w-[720px] pb-5 pr-0 sm:pr-16">
                            <p className="text-[13px] leading-[1.75] text-[#657c76] sm:text-[15px]">
                              {item.answer}
                            </p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            CTA
        ========================================= */}
        <section className="relative overflow-hidden bg-[#003c3c] py-16 sm:py-20 lg:py-[78px]">
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-64 h-[570px] w-[570px] rounded-full border border-white/[0.09] shadow-[0_0_0_55px_rgba(255,255,255,0.025),0_0_0_110px_rgba(255,255,255,0.018)]"
          />

          <div className="relative mx-auto grid w-[min(100%-32px,1180px)] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ed4c7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00a79a]" />
                Technology support
              </span>

              <h2 className="mt-4 max-w-[650px] text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] tracking-[-0.045em] text-white">
                Not sure which IT service your business needs?
              </h2>

              <p className="mt-4 max-w-[520px] text-[13px] leading-[1.85] text-[#b9d2cc]">
                Tell us about your current technology environment,
                requirements or challenges and we can discuss the right next
                step.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 text-[12px] text-[#d0e1dd]">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#7ed4c6]"
                />
                <span>Business-focused IT solutions</span>
              </div>

              <div className="flex items-center gap-3 border-b border-white/10 pb-4 text-[12px] text-[#d0e1dd]">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#7ed4c6]"
                />
                <span>
                  Support across your technology environment
                </span>
              </div>

              <div className="flex items-center gap-3 border-b border-white/10 pb-4 text-[12px] text-[#d0e1dd]">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#7ed4c6]"
                />
                <span>Practical technology planning</span>
              </div>

              <Link
                href="/contact"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-[12px] font-semibold text-[#003c3c] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e8f5f1]"
              >
                Talk to our team
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSchema,
          }),
        }}
      />
    </>
  );
}