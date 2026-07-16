/**
 * GFSCPAs CTASection — reusable bottom-of-page CTA
 * Dark green background, strong headline, two buttons
 */
import { Link } from "wouter";
import { Phone } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTASection({
  headline = "Ready to take a more proactive approach to your accounting, tax, and financial planning?",
  subtext = "GFSCPAs serves individuals, families, retirees, and businesses throughout Weston and South Florida. Schedule a consultation to get started.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section style={{ background: "linear-gradient(135deg, #1a1f14 0%, #2d4a1e 100%)" }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="brand-divider-gold mx-auto" />
        <h2
          className="text-white mb-4"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
            fontWeight: 700,
            lineHeight: 1.25,
          }}
        >
          {headline}
        </h2>
        <p
          className="mb-8"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.0625rem",
            lineHeight: 1.65,
            maxWidth: "580px",
            margin: "0 auto 2rem",
          }}
        >
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={primaryHref} className="btn-gold">
            {primaryLabel}
          </Link>
          <a href="tel:9544829681" className="btn-outline-white">
            <Phone size={15} /> Call 954-482-9681
          </a>
        </div>
      </div>
    </section>
  );
}
