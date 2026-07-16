/**
 * GFSCPAs CityPageTemplate — reusable for all local SEO city pages
 * Design: Quiet Authority — forest green, warm off-white, gold accent
 * Upgraded: richer sections, scroll animations, trust strip, FAQ
 */
import PageLayout from "./PageLayout";
import CTASection from "./CTASection";
import { Link } from "wouter";
import { MapPin, CheckCircle, ArrowRight, Phone, Clock, Shield, Award, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const CITY_HERO_IMAGE = "/manus-storage/city_office_810e0467.jpg";

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

interface CityPageProps {
  city: string;
  state?: string;
  county?: string;
  intro: string;
  services: string[];
  whyGFS: string;
  localContext?: string;
}

const trustStats = [
  { icon: Award, label: "35+ Years", sub: "of CPA Experience" },
  { icon: Users, label: "Hundreds", sub: "of South Florida Clients" },
  { icon: Shield, label: "CPA, PFS", sub: "Certified Designations" },
  { icon: Clock, label: "Year-Round", sub: "Proactive Planning" },
];

export default function CityPageTemplate({
  city,
  state = "FL",
  county = "Broward County",
  intro,
  services,
  whyGFS,
  localContext,
}: CityPageProps) {
  return (
    <PageLayout
      title={`CPA, Accounting & Tax Services in ${city}, ${state}`}
      subtitle={`GFSCPAs serves individuals, families, retirees, and businesses in ${city}, ${state} with proactive CPA, tax planning, and financial advisory services.`}
      heroImage={CITY_HERO_IMAGE}
    >

      {/* ── TRUST STRIP ── */}
      <section style={{ background: "#2d4a1e", padding: "2rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon size={22} style={{ color: "#b8922a", flexShrink: 0 }} />
                <div>
                  <div className="font-bold text-white text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{stat.label}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              <FadeUp>
                <div>
                  <div className="section-label">Your Local CPA Firm</div>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.125rem)", fontWeight: 700, color: "#1a1f14", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                    Serving {city}, {state} with Proactive CPA &amp; Tax Services
                  </h2>
                  <div className="brand-divider mb-5" />
                  <p className="leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.8 }}>
                    {intro}
                  </p>
                </div>
              </FadeUp>

              {localContext && (
                <FadeUp delay={80}>
                  <div
                    className="p-6 rounded-lg"
                    style={{ background: "white", border: "1px solid rgba(45,74,30,0.08)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                  >
                    <p className="leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1rem", lineHeight: 1.8 }}>
                      {localContext}
                    </p>
                  </div>
                </FadeUp>
              )}

              <FadeUp delay={100}>
                <div>
                  <h3 className="font-bold text-xl mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>
                    Services Available in {city}, {state}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((s, i) => (
                      <FadeUp key={s} delay={i * 40}>
                        <div
                          className="flex items-start gap-3 p-4 rounded-lg"
                          style={{ background: "white", border: "1px solid rgba(45,74,30,0.08)", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
                        >
                          <CheckCircle size={16} style={{ color: "#2d4a1e", flexShrink: 0, marginTop: "2px" }} />
                          <span className="text-sm font-medium" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>{s}</span>
                        </div>
                      </FadeUp>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={120}>
                <div
                  className="p-8 rounded-xl"
                  style={{ background: "#2d4a1e" }}
                >
                  <div className="section-label" style={{ color: "#b8922a" }}>Why {city} Chooses GFSCPAs</div>
                  <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    A Firm That Knows Your Community
                  </h3>
                  <p className="leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "rgba(255,255,255,0.82)", fontSize: "1rem", lineHeight: 1.8 }}>
                    {whyGFS}
                  </p>
                  <Link href="/contact" className="btn-gold mt-6 inline-flex">
                    Schedule a Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </FadeUp>

              {/* FAQ */}
              <FadeUp delay={140}>
                <div>
                  <h3 className="font-bold text-xl mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>
                    Common Questions from {city} Clients
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        q: `Do you serve clients in ${city}, FL?`,
                        a: `Yes. GFSCPAs serves individuals, families, retirees, and business owners throughout ${city} and the broader ${county} area. Our office is located in Weston, FL — just minutes away.`,
                      },
                      {
                        q: "What types of clients do you work with?",
                        a: "We work with individuals, married couples, retirees, small business owners, entrepreneurs, real estate investors, and professionals who want a more proactive approach to their accounting, tax, and financial planning.",
                      },
                      {
                        q: "Do you offer year-round service or just tax season?",
                        a: "GFSCPAs is a year-round firm. We provide ongoing tax planning, financial advisory, retirement planning, and business support throughout the year — not just during tax season.",
                      },
                      {
                        q: "How do I get started?",
                        a: "The easiest way is to schedule a free consultation. You can call us at 954-482-9681, email vip@gfscpas.com, or use the booking form on our Contact page.",
                      },
                    ].map((faq) => (
                      <div
                        key={faq.q}
                        className="p-5 rounded-lg"
                        style={{ background: "white", border: "1px solid rgba(45,74,30,0.08)" }}
                      >
                        <div className="font-bold text-sm mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>{faq.q}</div>
                        <p className="text-sm leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", lineHeight: 1.7 }}>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeUp delay={60}>
                <div className="p-6 rounded-xl" style={{ background: "#2d4a1e", boxShadow: "0 8px 32px rgba(45,74,30,0.18)" }}>
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>
                    Serving {city}, {state}
                  </div>
                  <h4 className="font-bold text-white text-base mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Book a Free Consultation
                  </h4>
                  <p className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Source Sans 3', sans-serif", lineHeight: 1.65 }}>
                    Speak with Frank Gutta, CPA, PFS about your specific situation. No obligation. No pressure.
                  </p>
                  <Link href="/contact" className="btn-gold w-full justify-center" style={{ padding: "0.625rem 1rem", fontSize: "0.875rem" }}>
                    Book a Consultation
                  </Link>
                  <a href="tel:9544829681" className="btn-outline-white w-full justify-center mt-2" style={{ padding: "0.625rem 1rem", fontSize: "0.875rem" }}>
                    Call 954-482-9681
                  </a>
                </div>
              </FadeUp>

              <FadeUp delay={100}>
                <div className="p-6 rounded-lg" style={{ background: "white", border: "1px solid rgba(45,74,30,0.1)" }}>
                  <h4 className="font-bold text-sm mb-3 uppercase tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>
                    Office Location
                  </h4>
                  <p className="text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", lineHeight: 1.65 }}>
                    1920 N Commerce Pkwy<br />Suite 1920-3<br />Weston, FL 33326
                  </p>
                  <p className="text-xs mt-3" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52" }}>
                    Conveniently located to serve clients throughout {county}, including {city}.
                  </p>
                  <a
                    href="https://maps.google.com/?q=1920+N+Commerce+Pkwy+Suite+1920-3+Weston+FL+33326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold mt-3"
                    style={{ color: "#2d4a1e" }}
                  >
                    <MapPin size={12} /> Get Directions
                  </a>
                </div>
              </FadeUp>

              <FadeUp delay={130}>
                <div className="p-6 rounded-lg" style={{ background: "#eef2eb", border: "1px solid rgba(45,74,30,0.1)" }}>
                  <h4 className="font-bold text-sm mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>
                    Other Service Areas
                  </h4>
                  <ul className="space-y-2">
                    {[
                      { label: "Weston, FL", href: "/weston-fl-cpa-accounting-tax-services" },
                      { label: "Plantation, FL", href: "/plantation-fl-cpa-accounting-tax-services" },
                      { label: "Sunrise, FL", href: "/sunrise-fl-cpa-accounting-tax-services" },
                      { label: "Davie, FL", href: "/davie-fl-cpa-accounting-tax-services" },
                      { label: "Fort Lauderdale, FL", href: "/fort-lauderdale-fl-cpa-accounting-tax-services" },
                    ]
                      .filter((a) => !a.label.startsWith(city))
                      .map((a) => (
                        <li key={a.href}>
                          <Link href={a.href} className="flex items-center gap-2 text-sm transition-colors" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38" }}>
                            <MapPin size={12} style={{ color: "#2d4a1e" }} /> {a.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={160}>
                <div className="p-6 rounded-lg" style={{ background: "white", border: "1px solid rgba(45,74,30,0.1)" }}>
                  <h4 className="font-bold text-sm mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>
                    Contact GFSCPAs
                  </h4>
                  <div className="space-y-2 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38" }}>
                    <div><span className="font-semibold">Phone:</span> <a href="tel:9544829681" style={{ color: "#2d4a1e" }}>954-482-9681</a></div>
                    <div><span className="font-semibold">Email:</span> <a href="mailto:vip@gfscpas.com" style={{ color: "#2d4a1e" }}>vip@gfscpas.com</a></div>
                    <div><span className="font-semibold">Hours:</span> Mon–Fri, 9am–5pm</div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline={`Looking for a trusted CPA in ${city}, ${state}? GFSCPAs is ready to help.`} />
    </PageLayout>
  );
}
