/**
 * GFSCPAs Homepage — Quiet Authority design
 * Sections: Hero, Trust Strip, Services Grid, VFO, Who We Help,
 *           Planning Process, Testimonials, Service Areas, CTA
 */
import { Link } from "wouter";
import { Phone, ArrowRight, CheckCircle, MapPin, Shield, TrendingUp, Users, Briefcase, FileText, Building2, DollarSign, Scale } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { useEffect, useRef, useState } from "react";

// Scroll reveal hook — uses rAF to ensure reliable triggering on live deployed site
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
  return (
    <div ref={ref} className="fade-up">
      {children}
    </div>
  );
}

function FadeLeft({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal(delay);
  return (
    <div ref={ref} className="fade-left">
      {children}
    </div>
  );
}

function FadeRight({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal(delay);
  return (
    <div ref={ref} className="fade-right">
      {children}
    </div>
  );
}

function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive((a: number) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);
  const t = testimonials[active];
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className="p-8 md:p-10 rounded-xl"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", minHeight: "280px", transition: "all 0.4s ease" }}
      >
        <div className="text-4xl mb-4" style={{ color: "#b8922a", fontFamily: "Georgia, serif", lineHeight: 1 }}>&ldquo;</div>
        <div className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>
          {t.title}
        </div>
        <p className="leading-relaxed mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "rgba(255,255,255,0.82)", fontStyle: "italic", fontSize: "0.9375rem" }}>
          {t.quote}
        </p>
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Source Sans 3', sans-serif" }}>
          {t.attribution}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? "28px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === active ? "#b8922a" : "rgba(255,255,255,0.25)",
              border: "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label={`View story ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const services = [
  { icon: FileText, title: "Accounting & Tax Services", desc: "Bookkeeping, financial statements, tax preparation, and compliance for individuals and businesses.", href: "/services/accounting-tax" },
  { icon: TrendingUp, title: "Tax Planning", desc: "Proactive strategies to reduce your tax burden before the return is due — not after.", href: "/services/tax-planning" },
  { icon: DollarSign, title: "Retirement Planning", desc: "Safe, structured retirement income strategies including the proven 4 Bucket System.", href: "/services/retirement-planning" },
  { icon: Scale, title: "Estate & Trust Planning", desc: "Protect your assets and provide for your family with coordinated estate and trust planning.", href: "/services/estate-trust-planning" },
  { icon: Shield, title: "IRS Representation", desc: "Experienced advocacy in IRS audits, back taxes, penalties, and tax controversy resolution.", href: "/services/irs-representation" },
  { icon: Briefcase, title: "Business Advisory", desc: "Strategic guidance for business owners on growth, operations, KPIs, and exit planning.", href: "/services/business-advisory" },
  { icon: Building2, title: "Part-Time CFO Services", desc: "Executive-level financial oversight and cash flow management without the full-time cost.", href: "/services/cfo-services" },
  { icon: Users, title: "Payroll & Entity Structuring", desc: "Reliable payroll processing and smart entity structuring to protect and grow your business.", href: "/services/payroll" },
];

const vfoDisciplines = [
  { title: "Wealth Management", desc: "Coordinated investment and wealth strategy aligned with your long-term goals and tax situation." },
  { title: "Tax Planning", desc: "Proactive tax strategies that go far beyond filing — designed to keep more money in your hands." },
  { title: "Risk Mitigation", desc: "Life insurance, property and casualty coverage, and asset protection strategies tailored to your exposure." },
  { title: "Legal Services", desc: "Access to a network of attorneys specializing in business structuring, estate planning, and asset protection." },
  { title: "Business Advisory", desc: "Hands-on support for business owners navigating growth, operations, succession, and exit planning." },
];

const testimonials = [
  {
    title: "Securing a Woman and Children's Financial Future",
    quote: "One of our clients referred a lady who needed help with planning her retirement. She was a schoolteacher retiring in 6 months. Her late husband had handled all financial affairs. She wanted to travel, spend time with grandkids, pay off her son's mortgage, and never worry about the stock market. We reviewed her portfolio, analyzed her cash flow, and accomplished every goal in a safe, secure way — including long-term care coverage and an extra $1,500 per month above her needs. A few weeks later she called to say she feels secure knowing she is getting her checks every month, for the rest of her life, without worrying about market volatility.",
    attribution: "GFSCPAs Client Story",
  },
  {
    title: "A $27,800 Difference — Attending to the Details",
    quote: "A foreign national had her taxes prepared by one of the largest international CPA firms in the world. On the tax deadline, she received notice that she owed $26,000. She sought a second opinion from our firm. We found that her foreign income earned while she was a non-resident had been incorrectly included as taxable U.S. income. The result: a $1,800 refund instead of a $26,000 liability — a $27,800 swing. There were basic questions her former firm never thought to ask.",
    attribution: "GFSCPAs Client Story",
  },
  {
    title: "$175,000 in Taxes She Did Not Owe",
    quote: "A widow relocated to South Florida after selling her business. A local firm told her she owed $175,000 in capital gains tax. She came to us for a second opinion. The numbers appeared correct — until we asked the right questions. Her late husband had started the business 30 years prior. Upon his death, the assets received a step-up in basis to their fair market value at the date of death. The value at sale and at death were nearly identical. She owed nothing. The difference was knowing what questions to ask.",
    attribution: "GFSCPAs Client Story",
  },
];

const cities = [
  { name: "Weston", href: "/weston-fl-cpa-accounting-tax-services" },
  { name: "Plantation", href: "/plantation-fl-cpa-accounting-tax-services" },
  { name: "Sunrise", href: "/sunrise-fl-cpa-accounting-tax-services" },
  { name: "Davie", href: "/davie-fl-cpa-accounting-tax-services" },
  { name: "Fort Lauderdale", href: "/fort-lauderdale-fl-cpa-accounting-tax-services" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ── HERO ── */}
      <section
        className="relative"
        style={{
          minHeight: "100vh",
          background: `linear-gradient(105deg, rgba(15,24,10,0.92) 0%, rgba(20,32,14,0.88) 40%, rgba(20,32,14,0.72) 65%, rgba(20,32,14,0.55) 100%), url(/manus-storage/hero_bg_317c54c8.jpg) center/cover no-repeat`,
        }}
      >
        <div
          className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "6rem", paddingBottom: "4rem" }}
        >
          <div className="w-full text-center">
            <FadeUp>
              <div className="section-label mb-5" style={{ color: "#b8922a" }}>
                Weston, Florida — Serving South Florida &amp; Beyond
              </div>
              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.75rem, 6vw, 4.75rem)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                }}
              >
                A Different Kind of CPA Firm
              </h1>
              <p
                className="mb-8 mx-auto"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  lineHeight: 1.75,
                  maxWidth: "680px",
                }}
              >
                GFSCPAs helps individuals, families, retirees, and business owners take a more proactive approach to accounting, tax, retirement, and financial planning. Based in Weston, FL and serving clients throughout South Florida and nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link href="/contact" className="btn-gold">
                  Book a Consultation
                </Link>
                <a href="tel:9544829681" className="btn-outline-white">
                  <Phone size={16} /> 954-482-9681
                </a>
              </div>
              {/* Credential badges */}
              <div className="flex flex-wrap gap-3 justify-center">
                {["CPA, PFS Designation", "35+ Years Experience", "AICPA Member", "Weston, FL Based"].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.8125rem",
                      color: "rgba(255,255,255,0.78)",
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: "4px",
                      padding: "0.4rem 0.85rem",
                    }}
                  >
                    <CheckCircle size={13} style={{ color: "#b8922a" }} />
                    {badge}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.45 }}>
          <div className="w-px h-7 bg-white animate-pulse" />
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ background: "#2d4a1e" }} className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "CPA-Led Planning", sub: "Frank Gutta, CPA, PFS" },
              { label: "Proactive Tax Strategy", sub: "Beyond reactive filing" },
              { label: "Holistic Financial Guidance", sub: "Virtual Family Office model" },
              { label: "South Florida Based", sub: "Weston, FL 33326" },
            ].map((item) => (
              <div key={item.label} className="py-2">
                <div className="text-white font-bold text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{item.label}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Source Sans 3', sans-serif" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUTUBE VIDEO ── */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#b8862a" }}>
                Meet Frank Gutta
              </h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#4a5568", fontFamily: "'Source Sans 3', sans-serif" }}>
                Frank Gutta, CPA, PFS explains why GFSCPAs takes a proactive approach to tax planning and financial advisory and what that means for you.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={120}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "16px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/rBf5owKLXXA?rel=0&modestbranding=1&color=white"
                title="Frank Gutta, CPA, PFS — GFSCPAs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "16px",
                }}
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-label justify-center">Our Services</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
                Comprehensive CPA &amp; Financial Planning Services
              </h2>
              <p className="mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1.0625rem", lineHeight: 1.65 }}>
                From tax preparation to retirement planning, business advisory to IRS representation, GFSCPAs provides the full range of services your financial life requires.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={i * 60}>
                <Link href={service.href} className="service-card block group h-full">
                  <div className="mb-3" style={{ color: "#2d4a1e" }}>
                    <service.icon size={22} />
                  </div>
                  <h3 className="font-bold mb-2 text-base group-hover:text-green-800 transition-colors" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52" }}>
                    {service.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{ color: "#2d4a1e" }}>
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROACTIVE PLANNING SECTION ── */}
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div>
                <div className="section-label">Our Approach</div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.375rem)", fontWeight: 700, color: "#1a1f14", lineHeight: 1.2 }}>
                  Proactive Planning. Not Just Reactive Filing.
                </h2>
                <div className="brand-divider mt-4" />
                <p className="mt-2 mb-5" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.7 }}>
                  Most accounting firms prepare your tax return after the year is over. GFSCPAs works with you throughout the year to identify opportunities, reduce your tax burden, and make smarter financial decisions before problems become expensive.
                </p>
                <p className="mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.7 }}>
                  With Frank Gutta, CPA, PFS and more than 35 years of experience, you get a trusted advisor who understands the full picture — accounting, taxes, retirement, estate planning, and business strategy — all working together.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Year-round tax planning, not just year-end filing",
                    "Holistic view of your accounting, tax, and financial situation",
                    "Proactive identification of opportunities and risk areas",
                    "Coordinated team of specialists through the Virtual Family Office",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38" }}>
                      <CheckCircle size={16} style={{ color: "#2d4a1e", flexShrink: 0, marginTop: "2px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/planning-process" className="btn-primary">
                  Our Planning Process <ArrowRight size={15} />
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="relative">
                <img
                  src="/manus-storage/planning_desk_524d81af.jpg"
                  alt="CPA reviewing financial plan with client"
                  className="rounded-lg w-full object-cover"
                  style={{ height: "420px", boxShadow: "0 20px 60px rgba(45,74,30,0.15)" }}
                />
                {/* Credential card overlay */}
                <div
                  className="absolute -bottom-6 -left-6 p-5 rounded-lg hidden md:block"
                  style={{ background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", maxWidth: "240px" }}
                >
                  <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>Frank Gutta</div>
                  <div className="font-bold text-sm" style={{ color: "#1a1f14", fontFamily: "'Source Sans 3', sans-serif" }}>CPA, PFS</div>
                  <div className="text-xs mt-1" style={{ color: "#5a6b52", fontFamily: "'Source Sans 3', sans-serif" }}>35+ Years Experience<br />AICPA Member</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── VIRTUAL FAMILY OFFICE ── */}
      <section className="py-20 bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-label justify-center">Virtual Family Office</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
                Five Disciplines. One Coordinated Team.
              </h2>
              <p className="mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.65 }}>
                The Virtual Family Office model gives GFSCPAs clients access to a coordinated network of specialists — combining local CPA guidance with national expertise across five key disciplines.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vfoDisciplines.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80}>
                <div
                  className="p-6 rounded-lg h-full"
                  style={{ background: "white", border: "1px solid rgba(45,74,30,0.1)", boxShadow: "0 2px 8px rgba(45,74,30,0.06)" }}
                >
                  <div className="w-8 h-0.5 mb-4" style={{ background: "#2d4a1e" }} />
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52" }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
            <FadeUp delay={400}>
              <div
                className="p-6 rounded-lg h-full flex flex-col justify-between"
                style={{ background: "#2d4a1e" }}
              >
                <div>
                  <div className="w-8 h-0.5 mb-4" style={{ background: "#b8922a" }} />
                  <h3 className="font-bold text-base mb-2 text-white" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>The VFO Difference</h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "rgba(255,255,255,0.75)" }}>
                    Rather than managing five separate advisor relationships, GFSCPAs coordinates the full picture so your tax, financial, legal, and business decisions work together.
                  </p>
                </div>
                <Link href="/virtual-family-office" className="btn-gold mt-5" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
                  Learn About the VFO
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <img
                src="/manus-storage/diverse_clients_1f8c19a3.jpg"
                alt="GFSCPAs serving diverse clients"
                className="rounded-lg w-full object-cover"
                style={{ height: "400px", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
              />
            </FadeUp>
            <FadeUp delay={150}>
              <div>
                <div className="section-label">Who We Serve</div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.375rem)", fontWeight: 700, color: "#1a1f14", lineHeight: 1.2 }}>
                  Serving Individuals, Families, Retirees &amp; Business Owners
                </h2>
                <div className="brand-divider mt-4" />
                <p className="mt-2 mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.7 }}>
                  GFSCPAs works with a wide range of clients across South Florida — from individuals filing their first business return to retirees protecting decades of savings.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Individuals & Families",
                    "Retirees & Pre-Retirees",
                    "Small Business Owners",
                    "Corporations & LLCs",
                    "Professionals & Executives",
                    "Aging Parents & Families",
                    "Businesses Needing CFO Support",
                    "Foreign Nationals & Expats",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38" }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2d4a1e" }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary mt-8">
                  Schedule a Consultation <ArrowRight size={15} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PLANNING PROCESS ── */}
      <section className="py-20 bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-label justify-center">How It Works</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
                A Simple, Structured Planning Process
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Schedule a Consultation", desc: "Book a free introductory call to discuss your situation and goals." },
              { step: "02", title: "Review Your Situation", desc: "We take a comprehensive look at your current accounting, tax, and financial picture." },
              { step: "03", title: "Identify Opportunities", desc: "We uncover tax savings, planning gaps, and areas where proactive action can make a difference." },
              { step: "04", title: "Build Your Plan", desc: "We develop a coordinated, proactive plan tailored to your specific needs and goals." },
              { step: "05", title: "Ongoing Support", desc: "We stay engaged throughout the year — not just at tax time — to keep your plan on track." },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 80}>
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold"
                    style={{ background: "#2d4a1e", color: "white", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {item.step}
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52" }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary">
              Get Started Today <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ background: "#1a1f14" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-label justify-center" style={{ color: "#b8922a" }}>
                Client Testimonials
              </div>
              <h2 className="text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
                What Our Clients Say
              </h2>
            </div>
          </FadeUp>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-16" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <div className="section-label justify-center">Service Areas</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.125rem)", fontWeight: 700, color: "#1a1f14" }}>
                Serving Weston, Broward County &amp; South Florida
              </h2>
              <p className="mt-3 max-w-xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1rem" }}>
                GFSCPAs is based in Weston, Florida and serves clients throughout Broward County and the greater South Florida area.
              </p>
            </div>
          </FadeUp>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="flex items-center gap-2 px-5 py-3 rounded text-sm font-semibold transition-all duration-150"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  background: "white",
                  color: "#2d4a1e",
                  border: "1.5px solid #2d4a1e",
                  boxShadow: "0 1px 4px rgba(45,74,30,0.08)",
                }}
              >
                <MapPin size={13} /> {city.name}, FL
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR TEAM ── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="section-label justify-center">Our Team</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
                The People Behind Your Plan
              </h2>
              <p className="mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1.0625rem", lineHeight: 1.65 }}>
                GFSCPAs operates through a three-layer team model — combining your dedicated home office with local planning support and a national Virtual Family Office of specialists.
              </p>
            </div>
          </FadeUp>

          {/* Team tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { num: "1", title: "Advisory Services Team", desc: "Frank Gutta, CPA, PFS, Rafael Ferrer EA, and Cris Schemidt — your dedicated home office that manages your account and coordinates your services.", href: "/team" },
              { num: "2", title: "Proactive Planning Team", desc: "Your local eyes and ears — helping you stay focused on planning priorities and identifying opportunities throughout the year.", href: "/team" },
              { num: "3", title: "Virtual Family Office", desc: "A coordinated network of 56+ national specialists in tax planning, legal, risk mitigation, wealth management, and business advisory.", href: "/team#vfo" },
            ].map((tab, i) => (
              <FadeUp key={tab.title} delay={i * 100}>
                <div
                  className="p-7 rounded-lg h-full flex flex-col"
                  style={{ background: "#f9f7f4", border: "1px solid rgba(45,74,30,0.1)", boxShadow: "0 2px 8px rgba(45,74,30,0.06)" }}
                >
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center mb-4 text-sm font-bold text-white"
                    style={{ background: "#2d4a1e", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {tab.num}
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>{tab.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52" }}>{tab.desc}</p>
                  <Link href={tab.href} className="flex items-center gap-1 text-xs font-semibold mt-4" style={{ color: "#2d4a1e" }}>
                    Meet the team <ArrowRight size={12} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200}>
            <div className="text-center">
              <Link href="/team" className="btn-primary">
                Meet the Full Team <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />

      <Footer />
    </div>
  );
}
