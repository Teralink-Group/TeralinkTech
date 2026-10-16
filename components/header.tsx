"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Cloud,
  Network,
  Server,
  Database,
  Monitor,
  Headphones,
  BriefcaseBusiness,
} from "lucide-react";

import { services } from "@/lib/data";

/* =========================================================
   SERVICE ICONS
   ========================================================= */

const serviceIcons = [
  Headphones,
  Network,
  ShieldCheck,
  Cloud,
  Server,
  Database,
  Monitor,
  BriefcaseBusiness,
];

/* =========================================================
   HEADER
   ========================================================= */

export default function Header() {
  /* -------------------------------------------------------
     STATE
  ------------------------------------------------------- */

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);

  /* -------------------------------------------------------
     CLOSE DESKTOP SERVICES DROPDOWN WHEN CLICKING OUTSIDE
  ------------------------------------------------------- */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* -------------------------------------------------------
     ESCAPE KEY
  ------------------------------------------------------- */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* -------------------------------------------------------
     LOCK BACKGROUND SCROLL WHEN MOBILE MENU IS OPEN
  ------------------------------------------------------- */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* -------------------------------------------------------
     CLOSE MOBILE NAVIGATION
  ------------------------------------------------------- */

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  /* -------------------------------------------------------
     TOGGLE MOBILE NAVIGATION
  ------------------------------------------------------- */

  const toggleMobile = () => {
    setMobileOpen((previous) => !previous);

    /* Close desktop dropdown when mobile opens */
    setServicesOpen(false);
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <>
      {/* =====================================================
          FIXED HEADER
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-[100] w-full bg-white shadow-[0_4px_24px_rgba(0,60,60,0.06)]">
        {/* =================================================
            TOP ANNOUNCEMENT BAR
        ================================================= */}

        {/* <div className="h-[30px] bg-[#003c3c] font-medium tracking-[0.06em] text-white sm:h-[32px] sm:text-[9px]">
          <div className="mx-auto flex h-full w-[calc(100%-32px)] container items-center justify-between">
            <span className="text-[12px]">
              Technology that keeps business moving.
            </span>

            <span className="hidden text-[12px] sm:block">
              Business IT support · Infrastructure · Security
            </span>
          </div>
        </div> */}

        {/* =================================================
            MAIN NAVIGATION
        ================================================= */}

        <div className="border-b border-[#dcebe7] bg-white">
          <div className="mx-auto flex h-[70px] w-[calc(100%-32px)] container items-center justify-between gap-5 sm:h-[70px] lg:h-[78px]">
            {/* =============================================
                LOGO
            ============================================= */}

            <Link
              href="/"
              aria-label="Teralink Technical Solutions homepage"
              onClick={closeMobile}
              className="relative z-[110] flex h-full w-[146px] shrink-0 items-center sm:w-[150px] lg:w-[180px]"
            >
              <Image
                src="/logos/logo.svg"
                alt="Teralink Technical Solutions"
                width={190}
                height={136}
                priority
                className="h-auto w-full object-contain"
              />
            </Link>

            {/* =============================================
                DESKTOP NAVIGATION
            ============================================= */}

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 lg:flex"
            >
              {/* -----------------------------------------
                  HOME
              ----------------------------------------- */}

              <Link
                href="/"
                className="group relative flex h-11 items-center px-4 text-[13px] font-semibold text-[#163d3a] transition-colors duration-200 hover:text-[#008276]"
              >
                Home
                <span className="absolute bottom-1.5 left-4 right-4 h-px origin-left scale-x-0 bg-[#00a79a] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>

              {/* -----------------------------------------
                  ABOUT
              ----------------------------------------- */}

              <Link
                href="/about"
                className="group relative flex h-11 items-center px-4 text-[13px] font-semibold text-[#163d3a] transition-colors duration-200 hover:text-[#008276]"
              >
                About us
                <span className="absolute bottom-1.5 left-4 right-4 h-px origin-left scale-x-0 bg-[#00a79a] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>

              {/* =========================================
                  SERVICES MEGA MENU
              ========================================= */}

              {/* =====================================================
    SERVICES
===================================================== */}

              <div ref={servicesRef} className="relative">
                {/* Services button */}

                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((previous) => !previous)}
                  className={`group relative flex h-11 cursor-pointer items-center gap-1.5 px-4 text-[13px] font-semibold transition-colors duration-200 ${
                    servicesOpen
                      ? "text-[#008276]"
                      : "text-[#163d3a] hover:text-[#008276]"
                  }`}
                >
                  <span>Services</span>

                  <ChevronDown
                    size={15}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />

                  {/* Active underline */}

                  <span
                    className={`absolute bottom-1.5 left-4 right-4 h-px bg-[#00a79a] transition-transform duration-200 ${
                      servicesOpen ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>

                {/* ===================================================
      CLICK-OPEN MEGA MENU
  =================================================== */}

                <div
                  className={`absolute left-1/2 top-full z-[120] w-[1000px] -translate-x-1/2 pt-2 transition-all duration-200 ${
                    servicesOpen
                      ? "pointer-events-auto visible translate-y-0 opacity-100"
                      : "pointer-events-none invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-[#dcebe7] bg-white p-5 shadow-[0_25px_70px_rgba(0,60,60,0.14)]">
                    {/* Arrow */}

                    <div className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-[#dcebe7] bg-white" />

                    <div className="grid grid-cols-[220px_1fr] gap-5">
                      {/* LEFT INTRO */}

                      <div className="rounded-xl bg-[#f4faf8] p-5">
                        <span className="text-[9px] font-bold tracking-[0.14em] text-[#008276]">
                          WHAT WE DO
                        </span>

                        <h3 className="mt-3 text-[20px] font-bold leading-[1.15] tracking-[-0.03em] text-[#003c3c]">
                          Technology that works for your business.
                        </h3>

                        <p className="mt-3 text-[12px] leading-[1.7] text-[#607774]">
                          Reliable IT services, infrastructure and support to
                          help your organisation operate with confidence.
                        </p>

                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold text-[#008276] transition-colors hover:text-[#003c3c]"
                        >
                          Explore all services
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>

                      {/* RIGHT SERVICES */}

                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service, index) => {
                          const Icon = service.icon;

                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="group flex min-h-[58px] items-center gap-3 rounded-xl border border-transparent px-3 transition-all duration-200 hover:border-[#dcebe7] hover:bg-[#f4faf8]"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e8f5f2] text-[#008276] transition-colors duration-200 group-hover:bg-[#003c3c] group-hover:text-white">
                                <Icon size={18} strokeWidth={1.8} />
                              </span>

                              <span className="min-w-0 flex-1">
                                <span className="block text-[12px] font-bold leading-[1.35] text-[#163d3a]">
                                  {service.title}
                                </span>
                              </span>

                              <ArrowUpRight
                                size={14}
                                className="shrink-0 text-[#8aa19d] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#008276] group-hover:opacity-100"
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------
                  INDUSTRIES
              ----------------------------------------- */}

              <Link
                href="/industries"
                className="group relative flex h-11 items-center px-4 text-[13px] font-semibold text-[#163d3a] transition-colors duration-200 hover:text-[#008276]"
              >
                Industries
                <span className="absolute bottom-1.5 left-4 right-4 h-px origin-left scale-x-0 bg-[#00a79a] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>

              {/* -----------------------------------------
                  FAQ
              ----------------------------------------- */}

              <Link
                href="/faqs"
                className="group relative flex h-11 items-center px-4 text-[13px] font-semibold text-[#163d3a] transition-colors duration-200 hover:text-[#008276]"
              >
                FAQs
                <span className="absolute bottom-1.5 left-4 right-4 h-px origin-left scale-x-0 bg-[#00a79a] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            </nav>

            {/* =================================================
                HEADER ACTIONS
            ================================================= */}

            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <Link
                href="/request-quote-&-survey"
                className="hidden h-11 bg-[#00674F] items-center gap-2 rounded-lg border px-5 text-[12px] font-bold text-white shadow-[0_6px_18px_rgba(0,60,60,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00674F]
 hover:text-[#fff] lg:inline-flex"
              >
                Request Quote & Survey
                <ArrowUpRight size={15} />
              </Link>

              {/* <Link
                href="/request-a-quotation"
                className="hidden h-11 items-center gap-2 rounded-lg bg-[#00674F] px-5 text-[12px] font-bold text-white shadow-[0_6px_18px_rgba(0,60,60,0.12)] transition-all duration-200 hover:-translate-y-0.5 lg:inline-flex"
              >
                Request a Quotation
                <ArrowUpRight size={15} />
              </Link> */}

              {/* Mobile menu button */}

              <button
                type="button"
                aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={toggleMobile}
                className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-xl border border-[#dcebe7] bg-white text-[#003c3c] transition-all duration-200 hover:border-[#00a79a] hover:bg-[#f4faf8] hover:text-[#008276] lg:hidden"
              >
                {mobileOpen ? (
                  <X size={23} strokeWidth={1.8} />
                ) : (
                  <Menu size={23} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* =================================================
            MOBILE NAVIGATION
        ================================================= */}

        <div
          id="mobile-navigation"
          aria-hidden={!mobileOpen}
          className={`fixed inset-x-0 bottom-0 top-[70px] z-[90] overflow-y-auto bg-white transition-all duration-300 sm:top-[102px] lg:top-[110px] lg:hidden ${
            mobileOpen
              ? "pointer-events-auto visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-3 opacity-0"
          }`}
        >
          <div className="mx-auto flex min-h-full w-full max-w-[640px] flex-col px-4 pb-6 sm:px-6">
            {/* =============================================
                MOBILE NAVIGATION LINKS
            ============================================= */}

            <nav className="border-t border-[#e7f0ee]">
              {/* -----------------------------------------
                  HOME
              ----------------------------------------- */}

              <Link
                href="/"
                onClick={closeMobile}
                className="flex min-h-[55px] items-center justify-between border-b border-[#e7f0ee] px-1 text-[14px] font-semibold text-[#003c3c] transition-colors hover:text-[#008276]"
              >
                <span>Home</span>

                <ArrowUpRight size={17} className="text-[#607774]" />
              </Link>

              {/* -----------------------------------------
                  ABOUT
              ----------------------------------------- */}

              <Link
                href="/about"
                onClick={closeMobile}
                className="flex min-h-[55px] items-center justify-between border-b border-[#e7f0ee] px-1 text-[14px] font-semibold text-[#003c3c] transition-colors hover:text-[#008276]"
              >
                <span>About us</span>

                <ArrowUpRight size={17} className="text-[#607774]" />
              </Link>

              {/* =========================================
                  SERVICES ACCORDION
              ========================================= */}

              <div className="border-b border-[#e7f0ee]">
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((previous) => !previous)}
                  className="flex min-h-[55px] w-full items-center justify-between px-1 text-left text-[14px] font-semibold text-[#003c3c]"
                >
                  <span>Services</span>

                  <ChevronDown
                    size={18}
                    className={`text-[#008276] transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Services content */}

                <div
                  className={`grid transition-all duration-300 ${
                    servicesOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-3">
                      {/* All services */}

                      <Link
                        href="/services"
                        onClick={closeMobile}
                        className="mb-1 flex min-h-[43px] items-center justify-between rounded-lg bg-[#f4faf8] px-3 text-[13px] font-bold text-[#008276]"
                      >
                        <span>View all services</span>

                        <ArrowUpRight size={15} />
                      </Link>

                      {/* Individual services */}

                      <div className="space-y-0.5">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={closeMobile}
                            className="relative flex min-h-[42px] gap-2 items-center rounded-lg px-3 pl-4 text-[12.5px] font-medium text-[#607774] transition-colors hover:bg-[#f4faf8] hover:text-[#003c3c]"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#e8f5f2] text-[#008276]">
                              <service.icon size={15} strokeWidth={1.8} />
                            </span>

                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------------------
                  INDUSTRIES
              ----------------------------------------- */}

              <Link
                href="/industries"
                onClick={closeMobile}
                className="flex min-h-[55px] items-center justify-between border-b border-[#e7f0ee] px-1 text-[14px] font-semibold text-[#003c3c] transition-colors hover:text-[#008276]"
              >
                <span>Industries</span>

                <ArrowUpRight size={17} className="text-[#607774]" />
              </Link>

              {/* -----------------------------------------
                  FAQ
              ----------------------------------------- */}

              <Link
                href="/faqs"
                onClick={closeMobile}
                className="flex min-h-[55px] items-center justify-between border-b border-[#e7f0ee] px-1 text-[14px] font-semibold text-[#003c3c] transition-colors hover:text-[#008276]"
              >
                <span>FAQs</span>

                <ArrowUpRight size={17} className="text-[#607774]" />
              </Link>
            </nav>

            {/* =================================================
                MOBILE CTA
            ================================================= */}
            <Link
              href="/request-quote-&-survey"
              onClick={closeMobile}
              className="mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#003c3c] px-5 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(0,60,60,0.12)] transition-all duration-200 hover:bg-[#008276]"
            >
              Request Quote & Survey
              <ArrowUpRight size={15} />
            </Link>
            {/* <Link
                href="/request-site-survey"
                onClick={closeMobile}
                className="mt-5 flex min-h-[52px] w-full border items-center justify-center gap-2 rounded-xl bg-[#fff] px-5 text-[#163d3a] text-[13px] font-bold shadow-[0_6px_18px_rgba(0,60,60,0.12)] transition-all duration-200 hover:bg-[#00674F]"
              >
                Request a Site Survey
                <ArrowUpRight size={15} />
              </Link>

            <Link
              href="/request-a-quotation"
              onClick={closeMobile}
              className="mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#003c3c] px-5 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(0,60,60,0.12)] transition-all duration-200 hover:bg-[#008276]"
            >
              Request a Quotation
              <ArrowUpRight size={17} />
            </Link> */}

            {/* =================================================
                MOBILE FOOTER
            ================================================= */}

            <div className="mt-5 border-t border-[#e7f0ee] pt-4 text-center text-[8px] font-bold tracking-[0.1em] text-[#8a9a97]">
              BUSINESS IT SUPPORT · INFRASTRUCTURE · SECURITY
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          FIXED HEADER SPACER

          Prevents page content from going underneath the
          fixed header.
      ===================================================== */}

      <div className="h-[70px] sm:h-[12px] lg:h-[10px]" aria-hidden="true" />
    </>
  );
}
