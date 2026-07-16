/**
 * GFSCPAs Footer — Quiet Authority design
 * Dark charcoal background, organized columns, full contact info
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1f14", color: "rgba(255,255,255,0.85)" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/manus-storage/gfscpas-logo-horizontal_f0344bf5.webp"
                alt="GFSCPAs — Gutta Stewart Ferrer & Schemidt"
                style={{ height: "38px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.92 }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
              Proactive CPA, tax planning, retirement planning, and financial advisory services for individuals, families, retirees, and businesses in Weston and South Florida.
            </p>
            <div className="space-y-2">
              <a href="tel:9544829681" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Source Sans 3', sans-serif" }}>
                <Phone size={13} style={{ color: "#b8922a", flexShrink: 0 }} /> Tel: 954-482-9681
              </a>
              <a href="https://wa.me/17542613495" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Source Sans 3', sans-serif" }}>
                <Phone size={13} style={{ color: "#b8922a", flexShrink: 0 }} /> WhatsApp: 754-261-3495
              </a>
              <a href="mailto:vip@gfscpas.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Source Sans 3', sans-serif" }}>
                <Mail size={13} style={{ color: "#b8922a", flexShrink: 0 }} /> vip@gfscpas.com
              </a>
              <div className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
                <MapPin size={13} style={{ color: "#b8922a", flexShrink: 0, marginTop: "2px" }} />
                <span>1920 N Commerce Pkwy, Suite 1920-3<br />Weston, FL 33326</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Accounting & Tax Services", href: "/services/accounting-tax" },
                { label: "Tax Planning", href: "/services/tax-planning" },
                { label: "Tax Preparation", href: "/services/tax-preparation" },
                { label: "IRS Representation", href: "/services/irs-representation" },
                { label: "Estate & Trust Planning", href: "/services/estate-trust-planning" },
                { label: "Retirement Planning", href: "/services/retirement-planning" },
                { label: "Financial Planning", href: "/services/financial-planning" },
                { label: "Business Advisory", href: "/services/business-advisory" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services + Company */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Business Services
            </h4>
            <ul className="space-y-2 mb-6">
              {[
                { label: "Part-Time CFO Services", href: "/services/cfo-services" },
                { label: "Payroll Services", href: "/services/payroll" },
                { label: "Business Valuations", href: "/services/business-valuations" },
                { label: "Entity Structuring", href: "/services/entity-structuring" },
                { label: "Cash Flow Management", href: "/services/cash-flow" },
                { label: "Succession Planning", href: "/services/succession-planning" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About GFSCPAs", href: "/about" },
                { label: "Planning Process", href: "/planning-process" },
                { label: "Virtual Family Office", href: "/virtual-family-office" },
                { label: "Contact Us", href: "/contact" },
                { label: "Client Portal (TaxDome)", href: "https://gfscpas.taxdome.com/login", external: true },
              ].map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
                      {item.label} <ExternalLink size={11} />
                    </a>
                  ) : (
                    <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas + CTA */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Service Areas
            </h4>
            <ul className="space-y-2 mb-8">
              {[
                { label: "Weston, FL", href: "/weston-fl-cpa-accounting-tax-services" },
                { label: "Plantation, FL", href: "/plantation-fl-cpa-accounting-tax-services" },
                { label: "Sunrise, FL", href: "/sunrise-fl-cpa-accounting-tax-services" },
                { label: "Davie, FL", href: "/davie-fl-cpa-accounting-tax-services" },
                { label: "Fort Lauderdale, FL", href: "/fort-lauderdale-fl-cpa-accounting-tax-services" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Footer CTA */}
            <div className="p-5 rounded-lg" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-sm font-semibold text-white mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Ready to plan ahead?
              </p>
              <Link href="/contact" className="btn-primary w-full justify-center" style={{ padding: "0.625rem 1rem", fontSize: "0.875rem" }}>
                Book a Consultation
              </Link>
              <a href="tel:9544829681" className="btn-outline-white w-full justify-center mt-2" style={{ padding: "0.625rem 1rem", fontSize: "0.875rem" }}>
                <Phone size={13} /> Call 954-482-9681
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Source Sans 3', sans-serif" }}>
            &copy; {new Date().getFullYear()} Frank Gutta &amp; Co CPAs PA. All rights reserved. Frank Gutta &amp; Co CPAs PA is a licensed CPA firm in the State of Florida.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Source Sans 3', sans-serif" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Source Sans 3', sans-serif" }}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
