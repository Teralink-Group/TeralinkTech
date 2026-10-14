
"use client";

import Image from "next/image";

const brands = [
  { name: "D-Link", logo: "/brands/d-link.svg" },
  { name: "Cisco", logo: "/brands/cisco.webp" },
  { name: "Microsoft", logo: "/brands/microsoft.png" },
  { name: "Fortinet", logo: "/brands/fortinet.svg" },
  { name: "Linksys", logo: "/brands/Linksys.png" },
  { name: "Avaya", logo: "/brands/Avaya.webp" },
  { name: "Dell", logo: "/brands/Dell.png" },
  { name: "Ruijie", logo: "/brands/Ruijie.png" },
  { name: "TP-Link", logo: "/brands/tp link.png" }, 
  { name: "Ubiquiti", logo: "/brands/unifi.png" },
];

export default function TechnologyBrands() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="overflow-hidden border-y border-[#dcebe7] bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#008276]">
            Technology Ecosystem
          </span>

          

          <h2 className="text-3xl font-bold tracking-tight text-[#003c3c] sm:text-4xl">
            Technology Brands We Work With
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#607774] sm:text-base">
            Business technology solutions supported by recognised networking,
            security, communications and IT infrastructure brands.
          </p>
        </div>

        <div className="relative">
         
          <div className="brand-marquee flex w-max items-center gap-5 py-3 hover:[animation-play-state:paused] sm:gap-7">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                aria-label={brand.name}
                className="flex h-24 w-36 shrink-0 items-center justify-center px-6 transition-all duration-300 hover:border-[#00a79a]  sm:w-44"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={52}
                  unoptimized
                  className="max-h-11 w-[75%] object-contain opacity-65 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .brand-marquee {
          animation: brand-scroll 45s linear infinite;
        }

        @keyframes brand-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-marquee {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}