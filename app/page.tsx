import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Building2,
  ShieldCheck,
  Clock3,
  Workflow,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Factory,
  CloudyIcon,
} from "lucide-react";
import { services, industries } from "@/lib/data";
import ServiceCard from "@/components/service-card";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import TechnologyBrands from "@/components/TechnologyBrands";
const benefits = [
  {
    title: "Support that stays close",
    desc: "A dependable partner for day-to-day IT needs and ongoing maintenance.",
  },
  {
    title: "Security in the plan",
    desc: "Practical safeguards considered across users, devices and infrastructure.",
  },
  {
    title: "Built around your business",
    desc: "Technology recommendations shaped by your environment and goals.",
  },
];
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <i /> BUSINESS TECHNOLOGY, MADE RELIABLE
            </span>
            <h1>
              Technology that keeps <span>business</span> moving.
            </h1>
            <p className="hero-copy">
              From IT support and network management to cybersecurity, cloud
              solutions and infrastructure, Teralink Technical Solutions helps
              businesses build, manage and maintain reliable technology
              environments.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Talk to our team <ArrowUpRight size={17} />
              </Link>
              <Link href="/services" className="button button-outline">
                Explore our services <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="hero-note">
              <span className="dot" />
              <b>One technology partner.</b> Support across your IT environment.
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-frame">
              <div className="visual-grid" />

              <div className="visual-glow glow-one" />
              <div className="visual-glow glow-two" />

              <div className="connection con-a" />
              <div className="connection con-b" />
              <div className="connection con-c" />
              <div className="connection con-d" />

              <div className="network-core">
                <div className="core-ring ring-one" />
                <div className="core-ring ring-two" />

                <div className="core-inner">
                  <Workflow size={38} strokeWidth={1.5} />
                </div>
              </div>

              <div className="orbit-node node-a">
                <ShieldCheck size={23} />
              </div>

              <div className="orbit-node node-b">
                <CloudyIcon size={23} />
              </div>

              <div className="orbit-node node-c">
                <Building2 size={23} />
              </div>

              <div className="orbit-node node-d">
                <Workflow size={23} />
              </div>

              <div className="visual-label">
                <span className="visual-eyebrow">INTELLIGENT IT ECOSYSTEM</span>
                <strong>Your IT, working as one.</strong>
                <span className="visual-subtitle">
                  Connected. Protected. Supported.
                </span>
              </div>

              {/* <div className="system-status">
                <span className="status-indicator" />
                <div>
                  <small>Infrastructure status</small>
                  <strong>All systems connected</strong>
                </div>
                <span className="status-check">✓</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <TechnologyBrands />
      <div className="proof-strip">
        <div className="container proof-grid">
          <div className="proof-item">
            <strong>End-to-end IT</strong>
            <span>From devices to infrastructure</span>
          </div>
          <div className="proof-item">
            <strong>People-first support</strong>
            <span>Technology that works for teams</span>
          </div>
          <div className="proof-item">
            <strong>Security-minded</strong>
            <span>Protection built into the plan</span>
          </div>
          <div className="proof-item">
            <strong>Ready for what’s next</strong>
            <span>Solutions that can grow with you</span>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="A complete IT partner for your business."
            description="From everyday support to the systems behind your operations, bring your technology needs together with one experienced partner."
          />
          <div className="service-grid">
            {services.slice(0, 8).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link href="/services" className="text-link">
              View all services <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
     
<section className="section section-soft">
  <div className="container split-section approach-section">
    {/* Left visual */}
    <div className="approach-visual">
      <div className="approach-visual-overlay">
        <span className="approach-visual-eyebrow">
          THE TERALINK APPROACH
        </span>

        <h3>Technology that works for your business.</h3>

        <p>
          Reliable IT, practical security and the right support
          to help your organisation move forward with confidence.
        </p>
      </div>
    </div>

    {/* Right content */}
    <div className="approach-content">
      <SectionHeading
        eyebrow="WHY TERALINK"
        title="A thoughtful approach to business technology."
        description="Good IT is more than equipment and software. It is the confidence that your systems, people and processes are working together."
      />

      <div className="feature-list">
        {benefits.map((b) => (
          <div className="feature-item" key={b.title}>
            <span className="feature-check">
              <Check size={13} />
            </span>

            <div>
              <strong>{b.title}</strong>
              <p>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Link href="/about" className="text-link">
        Get to know Teralink
        <ArrowUpRight size={16} />
      </Link>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="WHO WE SUPPORT"
            title="Technology for the way your industry works."
            description="Every organisation has different priorities. We shape IT support and infrastructure around the needs of your workplace."
          />
          <div className="industries-grid">
            {industries.map((x, i) => {
              const icons = [
                Building2,
                Stethoscope,
                GraduationCap,
                ShoppingBag,
                Factory,
                Workflow,
              ];
              const I = icons[i];
              return (
                <div className="industry-tile" key={x}>
                  <I size={19} />
                  {x}
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/industries" className="text-link">
              Explore industries <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
function CloudIcon() {
  return <Workflow />;
}
