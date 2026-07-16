/**
 * GFSCPAs Header — Quiet Authority design
 * Uses real GFSCPAs logo image asset
 * Sticky nav with transparent→white transition on scroll
 * Slimmer nav: Call Us (no number shown), Book a Consultation
 * Mobile: hamburger menu with full-screen overlay
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const services = [
  { label: "Accounting & Tax Services", href: "/services/accounting-tax" },
  { label: "Tax Planning", href: "/services/tax-planning" },
  { label: "Tax Preparation", href: "/services/tax-preparation" },
  { label: "IRS Representation", href: "/services/irs-representation" },
  { label: "Estate & Trust Planning", href: "/services/estate-trust-planning" },
  { label: "Retirement Planning", href: "/services/retirement-planning" },
  { label: "Financial Planning", href: "/services/financial-planning" },
  { label: "Business Advisory", href: "/services/business-advisory" },
  { label: "Part-Time CFO Services", href: "/services/cfo-services" },
  { label: "Payroll Services", href: "/services/payroll" },
  { label: "Business Valuations", href: "/services/business-valuations" },
  { label: "Entity Structuring", href: "/services/entity-structuring" },
  { label: "Cash Flow Management", href: "/services/cash-flow" },
  { label: "Business Succession Planning", href: "/services/succession-planning" },
];

const serviceAreas = [
  { label: "Weston, FL", href: "/weston-fl-cpa-accounting-tax-services" },
  { label: "Plantation, FL", href: "/plantation-fl-cpa-accounting-tax-services" },
  { label: "Sunrise, FL", href: "/sunrise-fl-cpa-accounting-tax-services" },
  { label: "Davie, FL", href: "/davie-fl-cpa-accounting-tax-services" },
  { label: "Fort Lauderdale, FL", href: "/fort-lauderdale-fl-cpa-accounting-tax-services" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = location === "/";
  const navTextColor = scrolled || !isHome ? "#1a1f14" : "white";
  const navTextColorMuted = scrolled || !isHome ? "#5a6b52" : "rgba(255,255,255,0.8)";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[76px] lg:h-[96px]">

            {/* Logo — real image asset */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              {scrolled || !isHome ? (
                <img
                  src="/manus-storage/gfscpas-logo-horizontal_f0344bf5.webp"
                  alt="GFSCPAs — Gutta Stewart Ferrer & Schemidt"
                  style={{ height: "58px", width: "auto" }}
                />
              ) : (
                /* White version on transparent hero — use brightness filter */
                <img
                  src="/manus-storage/gfscpas-logo-horizontal_f0344bf5.webp"
                  alt="GFSCPAs — Gutta Stewart Ferrer & Schemidt"
                  style={{ height: "58px", width: "auto", filter: "brightness(0) invert(1)" }}
                />
              )}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0 whitespace-nowrap">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Our Team", href: "/team" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2.5 py-2 text-[1rem] font-semibold transition-colors duration-150 rounded hover:opacity-70"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", color: navTextColor }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-2.5 py-2 text-[1rem] font-semibold transition-colors duration-150 rounded hover:opacity-70"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", color: navTextColor, background: "none", border: "none" }}
                >
                  Services <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 mt-1 z-50">
                    <Link href="/services" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-800 border-b border-gray-100 mb-1">
                      All Services
                    </Link>
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-2.5 py-2 text-[1rem] font-semibold transition-colors duration-150 rounded hover:opacity-70"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", color: navTextColor, background: "none", border: "none" }}
                >
                  Areas <ChevronDown size={14} className={`transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-2 mt-1 z-50">
                    {serviceAreas.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {[
                { label: "Process", href: "/planning-process" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2.5 py-2 text-[1rem] font-semibold transition-colors duration-150 rounded hover:opacity-70"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", color: navTextColor }}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="https://gfscpas.taxdome.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-2 text-[1rem] font-semibold transition-colors duration-150 rounded hover:opacity-70"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: navTextColorMuted }}
              >
                Client Login
              </a>
            </nav>

            {/* Desktop CTAs — compact */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="tel:9544829681"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded text-[0.95rem] font-semibold transition-all duration-150 hover:opacity-80"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: scrolled || !isHome ? "#2d4a1e" : "white",
                  border: scrolled || !isHome ? "1.5px solid #2d4a1e" : "1.5px solid rgba(255,255,255,0.6)",
                }}
              >
                <Phone size={13} />
                Call Us
              </a>
              <Link href="/contact" className="btn-primary" style={{ padding: "0.6rem 1.3rem", fontSize: "0.95rem", whiteSpace: "nowrap" }}>
                Book a Consultation
              </Link>
            </div>

            {/* Mobile: phone icon + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:9544829681"
                className="flex items-center justify-center w-9 h-9 rounded-full"
                style={{ background: "#2d4a1e", color: "white" }}
                aria-label="Call GFSCPAs"
              >
                <Phone size={15} />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex items-center justify-center w-9 h-9 rounded"
                style={{ color: scrolled || !isHome ? "#1a1f14" : "white" }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto" style={{ paddingTop: "4rem" }}>
          <div className="px-6 py-6 space-y-1">
            <div className="flex gap-3 mb-6">
              <a href="tel:9544829681" className="btn-outline flex-1 justify-center" style={{ padding: "0.625rem 1rem", fontSize: "0.875rem" }}>
                <Phone size={14} /> Call Us
              </a>
              <Link href="/contact" className="btn-primary flex-1 justify-center" style={{ padding: "0.625rem 1rem", fontSize: "0.875rem" }}>
                Book Consultation
              </Link>
            </div>

            {[
              { label: "Home", href: "/" },
              { label: "About GFSCPAs", href: "/about" },
              { label: "Our Team", href: "/team" },
              { label: "Planning Process", href: "/planning-process" },
              { label: "Virtual Family Office", href: "/virtual-family-office" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "Contact", href: "/contact" },
              { label: "Client Portal (TaxDome)", href: "https://gfscpas.taxdome.com/login", external: true },
            ].map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 text-base font-semibold border-b border-gray-100"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-base font-semibold border-b border-gray-100"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}
                >
                  {item.label}
                </Link>
              )
            ))}

            {/* Mobile Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-3 text-base font-semibold"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14", background: "none", border: "none", borderBottom: "1px solid #f0f0f0" }}
              >
                Services <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 py-2 space-y-1">
                  <Link href="/services" className="block py-2 text-sm font-bold text-green-800">All Services</Link>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block py-2 text-sm text-gray-700" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Service Areas accordion */}
            <div>
              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="flex items-center justify-between w-full py-3 text-base font-semibold"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14", background: "none", border: "none", borderBottom: "1px solid #f0f0f0" }}
              >
                Service Areas <ChevronDown size={16} className={`transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAreasOpen && (
                <div className="pl-4 py-2 space-y-1">
                  {serviceAreas.map((a) => (
                    <Link key={a.href} href={a.href} className="block py-2 text-sm text-gray-700" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
