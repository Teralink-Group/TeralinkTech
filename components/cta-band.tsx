import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-orbit orbit-one" />
      <div className="cta-orbit orbit-two" />
      <div className="container cta-inner">
        <div>
          <span className="eyebrow eyebrow-light">
            <i /> LET’S MOVE FORWARD
          </span>
          <h2>
            Make technology
            <br />
            work better for you.
          </h2>
          <p>
            Tell us what your business needs. We’ll help you find a practical
            way forward.
          </p>
        </div>
        <Link href="/contact" className="button button-white">
          Discuss your requirements <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
