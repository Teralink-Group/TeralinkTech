import type { Metadata } from "next";
import { services } from "@/lib/data";
import ServiceCard from "@/components/service-card";
import CtaBand from "@/components/cta-band";
import { ChevronRight } from "lucide-react";
export const metadata: Metadata = {
  title: "IT Services",
  description:
    "Explore Teralink's business IT support, networking, cybersecurity, cloud and infrastructure services.",
};
export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <span>Home</span>
            <ChevronRight size={13} />
            <span>Services</span>
          </div>
          <span className="eyebrow">
            <i /> OUR SERVICES
          </span>
          <h1>Technology services for every layer of your business.</h1>
          <p>
            From the devices your team uses every day to the infrastructure that
            powers your operations, we help make your IT environment dependable,
            secure and ready to evolve.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
