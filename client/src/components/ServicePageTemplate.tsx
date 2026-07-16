/**
 * GFSCPAs ServicePageTemplate — Redesigned for Pass 5
 * Engaging multi-section layout: intro, photo, benefits grid, detail sections, CTA
 * Design: Quiet Authority — centered layout, forest green, warm off-white, gold accents
 */
import PageLayout from "./PageLayout";
import CTASection from "./CTASection";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let observer: IntersectionObserver;
    const raf = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => el.classList.add("visible"), delay);
            } else {
              el.classList.add("visible");
            }
            observer.unobserve(el);
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
    });
    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [delay]);
  return ref;
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal(delay);
  return <div ref={ref} className="fade-up">{children}</div>;
}

function FadeLeft({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal(delay);
  return <div ref={ref} className="fade-left">{children}</div>;
}

function FadeRight({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal(delay);
  return <div ref={ref} className="fade-right">{children}</div>;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  intro: string;
  benefits: string[];
  details: { heading: string; body: string }[];
  relatedServices: { label: string; href: string }[];
  ctaHeadline?: string;
  photoUrl?: string;
  photoAlt?: string;
}

// Map service titles to relevant Unsplash images
const serviceImages: Record<string, string> = {
  "Accounting & Tax Services": "/manus-storage/calculator_tax_lg_0d8d8e2b.jpg",
  "Tax Planning": "/manus-storage/accounting_work_lg_551dd5d5.jpg",
  "Tax Preparation": "/manus-storage/tax_documents_lg_07b4bdfe.jpg",
  "IRS Representation": "/manus-storage/legal_documents_lg_01ab651d.jpg",
  "Estate & Trust Planning": "/manus-storage/tax_documents_lg_07b4bdfe.jpg",
  "Retirement Planning": "/manus-storage/handshake_lg_6c5a401f.jpg",
  "Financial Planning": "/manus-storage/financial_charts_lg_6e8a264f.jpg",
  "Business Advisory": "/manus-storage/team_meeting_lg_0a4cc087.jpg",
  "Part-Time CFO Services": "/manus-storage/professional_man_lg_e337ef8a.jpg",
  "Payroll Services": "/manus-storage/business_meeting_lg_000e4968.jpg",
  "Business Valuations": "/manus-storage/retirement_couple_lg_461192bc.jpg",
  "Entity Structuring": "/manus-storage/office_building_lg_767ed667.jpg",
  "Cash Flow Management": "/manus-storage/finance_planning_lg_4b7eef3d.jpg",
  "Succession Planning": "/manus-storage/planning_desk_lg_dc28df27.jpg",
};

// In-section photos for the photo feature block
const serviceSectionPhotos: Record<string, string> = {
  "Accounting & Tax Services": "/manus-storage/calculator_tax_726a14e7.jpg",
  "Tax Planning": "/manus-storage/accounting_work_d4528dae.jpg",
  "Tax Preparation": "/manus-storage/tax_documents_a52bd98b.jpg",
  "IRS Representation": "/manus-storage/legal_documents_a44410a1.jpg",
  "Estate & Trust Planning": "/manus-storage/tax_documents_a52bd98b.jpg",
  "Retirement Planning": "/manus-storage/handshake_b5ae54c1.jpg",
  "Financial Planning": "/manus-storage/financial_charts_e3652381.jpg",
  "Business Advisory": "/manus-storage/team_meeting_8388d04b.jpg",
  "Part-Time CFO Services": "/manus-storage/professional_man_72ad2e36.jpg",
  "Payroll Services": "/manus-storage/business_meeting_e1552975.jpg",
  "Business Valuations": "/manus-storage/retirement_couple_4df3e8c7.jpg",
  "Entity Structuring": "/manus-storage/office_building_f1383fc5.jpg",
  "Cash Flow Management": "/manus-storage/finance_planning_f953a486.jpg",
  "Succession Planning": "/manus-storage/planning_desk_524d81af.jpg",
};

const DEFAULT_SERVICE_IMAGE = "/manus-storage/planning_desk_lg_dc28df27.jpg";
const DEFAULT_SECTION_PHOTO = "/manus-storage/planning_desk_524d81af.jpg";

export default function ServicePageTemplate({
  title,
  subtitle,
  intro,
  benefits,
  details,
  relatedServices,
  ctaHeadline,
  photoUrl,
  photoAlt,
}: ServicePageProps) {
  const heroImage = serviceImages[title] || DEFAULT_SERVICE_IMAGE;
  const sectionPhoto = photoUrl || serviceSectionPhotos[title] || DEFAULT_SECTION_PHOTO;
  const sectionPhotoAlt = photoAlt || `${title} — GFSCPAs`;

  return (
    <PageLayout title={title} subtitle={subtitle} heroImage={heroImage}>

      {/* Intro + Photo — split layout */}
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeLeft>
              <div>
                <div className="section-label">Overview</div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.125rem)", fontWeight: 700, color: "#1a1f14", lineHeight: 1.25 }}>
                  {title} at GFSCPAs
                </h2>
                <div className="brand-divider mt-4 mb-6" />
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.8 }}>
                  {intro}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-primary">
                    Schedule a Consultation <ArrowRight size={15} />
                  </Link>
                  <a href="tel:9544829681" className="btn-outline flex items-center gap-2">
                    <Phone size={14} />
                    954-482-9681
                  </a>
                </div>
              </div>
            </FadeLeft>
            <FadeRight>
              <div
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
                  border: "4px solid white",
                }}
              >
                <img
                  src={sectionPhoto}
                  alt={sectionPhotoAlt}
                  style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
                />
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="section-label justify-center">What You Can Expect</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.125rem)", fontWeight: 700, color: "#1a1f14" }}>
                How GFSCPAs Approaches {title}
              </h2>
              <p className="mt-3 max-w-xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1rem", lineHeight: 1.65 }}>
                Every service is delivered with the same commitment: proactive, thorough, and genuinely personalized to your situation.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <FadeUp key={b} delay={i * 60}>
                <div
                  className="flex items-start gap-4 p-6 rounded-lg"
                  style={{ background: "#f9f7f4", border: "1px solid rgba(45,74,30,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#eef2eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle size={16} style={{ color: "#2d4a1e" }} />
                  </div>
                  <span style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "0.9375rem", lineHeight: 1.65 }}>{b}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-10" style={{ background: "#2d4a1e" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              { num: "35+", label: "Years of CPA Experience" },
              { num: "CPA, PFS", label: "Frank Gutta's Credentials" },
              { num: "AICPA", label: "Member in Good Standing" },
              { num: "Weston, FL", label: "Serving South Florida & Nationwide" },
            ].map((stat) => (
              <div key={stat.label} className="px-6">
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.375rem", fontWeight: 700, color: "#b8922a" }}>{stat.num}</div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8125rem", color: "rgba(255,255,255,0.75)", marginTop: "2px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Sections — alternating background */}
      {details.map((d, i) => (
        <section
          key={d.heading}
          className="py-16"
          style={{ background: i % 2 === 0 ? "#f9f7f4" : "white" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp delay={80}>
              <div className="w-8 h-0.5 mx-auto mb-5" style={{ background: "#2d4a1e" }} />
              <h3 className="font-bold mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)", color: "#1a1f14" }}>
                {d.heading}
              </h3>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.8 }}>
                {d.body}
              </p>
            </FadeUp>
          </div>
        </section>
      ))}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-14" style={{ background: "white" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              <div className="section-label justify-center">Explore More Services</div>
              <h3 className="mt-2 mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)", fontWeight: 700, color: "#1a1f14" }}>
                Related Services at GFSCPAs
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedServices.map((rs) => (
                  <Link
                    key={rs.href}
                    href={rs.href}
                    className="flex items-center gap-1.5 text-sm px-5 py-2.5 rounded-lg transition-all"
                    style={{ background: "#f9f7f4", border: "1.5px solid #2d4a1e", color: "#2d4a1e", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600 }}
                  >
                    <ArrowRight size={12} />
                    {rs.label}
                  </Link>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      <CTASection headline={ctaHeadline} />
    </PageLayout>
  );
}
