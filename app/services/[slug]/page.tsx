import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { services } from "@/lib/data";
import CtaBand from "@/components/cta-band";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.short } : {};
}
export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const Icon = s.icon;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <Link href="/services">Services</Link>
            <ChevronRight size={13} />
            <span>{s.title}</span>
          </div>
          <span className="eyebrow">
            <i /> TERALINK SERVICES
          </span>
          <h1>{s.title}</h1>
          <p>{s.short}</p>
        </div>
      </section>
      <section className="section">
        <div className="container detail-layout">
          <div className="detail-main">
            <div className="flex items-center gap-4 mb-7">
              <span className="service-icon !w-14 !h-14">
                <Icon size={27} />
              </span>
              <span className="eyebrow">BUILT AROUND YOUR BUSINESS</span>
            </div>
            <h2>Practical expertise. Reliable technology.</h2>
            <p>{s.description}</p>
            <h2 className="!text-2xl">What we can help with</h2>
            <div className="detail-points">
              {s.points.map((p) => (
                <div className="detail-point" key={p}>
                  <Check size={16} />
                  {p}
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-lg bg-[#F4FAF8] border border-[#DCEBE7] p-6">
              <span className="eyebrow">THE BUSINESS OUTCOME</span>
              <p className="!mb-0 !mt-3 !text-[#315b53]">{s.outcome}</p>
            </div>
            <div className="mt-9">
              <Link href="/services" className="text-link">
                ← Back to all services
              </Link>
            </div>
          </div>
          <aside className="detail-aside">
            <span className="eyebrow">LET’S TALK IT</span>
            <h3>Need help with {s.title.toLowerCase()}?</h3>
            <p>
              Tell us a little about your environment and what you need. Our
              team can help you explore the next steps.
            </p>
            <Link href="/contact" className="button button-primary">
              Discuss your requirements <ArrowUpRight size={16} />
            </Link>
            <div className="aside-note">
              No obligation. Just a practical conversation about your IT needs.
            </div>
          </aside>
        </div>
      </section>
      {/* <CtaBand /> */}
    </>
  );
}
