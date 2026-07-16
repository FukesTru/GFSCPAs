/**
 * GFSCPAs About Page
 * Frank Gutta credentials, firm story, Advisory Services team, Proactive Planning team, client success stories
 * Design: Quiet Authority — forest green, warm off-white, gold accents
 */
import PageLayout from "../components/PageLayout";
import CTASection from "../components/CTASection";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
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

const caseStudies = [
  {
    title: "A $27,800 Difference — Attending to the Details",
    story: "A foreign national had her taxes prepared by one of the largest international CPA firms in the world. On the tax deadline, she received notice that she owed $26,000. She sought a second opinion from GFSCPAs. After reviewing her returns, we found that her foreign income earned while she was a non-resident had been incorrectly included as taxable U.S. income. The result: a $1,800 refund instead of a $26,000 liability — a $27,800 swing. The questions that matter most are often the ones that never get asked.",
  },
  {
    title: "Securing a Widow's Financial Future",
    story: "A retiring schoolteacher came to us six months before leaving her career. Her late husband had handled all financial matters. She wanted to travel, spend time with grandchildren, pay off her son's mortgage, and never worry about money or the stock market again. We reviewed her portfolio, analyzed her cash flow needs, and built a plan that accomplished every goal — including long-term care coverage and an extra $1,500 per month above her needs, with sufficient liquidity for emergencies. Weeks later, she called to say she finally felt secure.",
  },
  {
    title: "$175,000 in Taxes She Did Not Owe",
    story: "A widow relocated to South Florida after selling her business. A local firm told her she owed approximately $175,000 in capital gains tax. She came to us for a second opinion. The numbers appeared correct at first — until we asked the right questions. Her late husband had started the business 30 years prior. Upon his death, the assets received a step-up in basis to their fair market value at the date of death. The value at sale and at death were nearly identical, resulting in no taxable gain. She owed nothing. The difference was knowing what questions to ask.",
  },
];

const advisoryTeam = [
  {
    name: "Frank Gutta",
    title: "CPA, PFS",
    role: "Principal — Tax & Insurance",
    photo: "/manus-storage/frank-gutta-live_47024737.png",
    fallback: "/manus-storage/frank-gutta-headshot_bc6ba522.jpg",
  },
  {
    name: "Rafael Ferrer, EA",
    title: "Enrolled Agent",
    role: "Co-Founder — Tax Strategy",
    photo: "/manus-storage/rafael-ferrer-live_7f5962c4.png",
    fallback: "/manus-storage/rafael-ferrer-live2_adb789ec.png",
  },
  {
    name: "Cris Schemidt",
    title: "CFO & Office Manager",
    role: "Operations & Coordination",
    photo: "/manus-storage/cris-schemidt-correct_ec306ebf.png",
    fallback: "/manus-storage/diverse_clients_sm_53d1ee68.jpg",
  },
];

const planningTeam = [
  {
    name: "Frank Gutta",
    title: "CPA, PFS",
    role: "Principal — Tax & Insurance",
    photo: "/manus-storage/frank-gutta-live_47024737.png",
    fallback: "/manus-storage/frank-gutta-headshot_bc6ba522.jpg",
  },
  {
    name: "Rafael Ferrer, EA",
    title: "Enrolled Agent",
    role: "Co-Founder — Tax Strategy",
    photo: "/manus-storage/rafael-ferrer-live_7f5962c4.png",
    fallback: "/manus-storage/rafael-ferrer-live2_adb789ec.png",
  },
  {
    name: "Ian Welham",
    title: "Proactive Facilitator",
    role: "Planning Process Coordinator",
    photo: "/manus-storage/ian-welham-live_be0da33d.png",
    fallback: "/manus-storage/businessman_sm_fef7cafa.jpg",
  },
];

function TeamGrid({ members, label, description }: { members: typeof advisoryTeam; label: string; description: string }) {
  return (
    <div className="mb-16">
      <FadeUp>
        <div className="text-center mb-10">
          <div className="section-label justify-center">{label}</div>
          <p className="mt-2 max-w-xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1rem", lineHeight: 1.65 }}>
            {description}
          </p>
        </div>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {members.map((member, i) => (
          <FadeUp key={member.name + member.role} delay={i * 100}>
            <div className="text-center">
              <div
                className="rounded-full overflow-hidden mx-auto mb-4"
                style={{ width: "140px", height: "140px", border: "3px solid #eef2eb", boxShadow: "0 4px 16px rgba(45,74,30,0.12)" }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                  onError={(e) => { (e.target as HTMLImageElement).src = member.fallback; }}
                />
              </div>
              <div className="font-bold text-base" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1f14" }}>{member.name}</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>{member.title}</div>
              <div className="text-sm mt-0.5" style={{ color: "#5a6b52", fontFamily: "'Source Sans 3', sans-serif" }}>{member.role}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <PageLayout
      title="About GFSCPAs"
      subtitle="GFSCPAs is the DBA for Frank Gutta & Co CPAs PA — a full-service CPA and financial advisory firm based in Weston, Florida."
    >
      {/* Frank Gutta Bio */}
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeLeft>
              <div>
                <div className="section-label">Our Principal</div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.375rem)", fontWeight: 700, color: "#1a1f14", lineHeight: 1.2 }}>
                  Frank Gutta, CPA, PFS
                </h2>
                <div className="brand-divider mt-4" />
                <p className="mt-2 mb-5" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                  Frank Gutta is a Certified Public Accountant and Personal Financial Specialist (PFS) — one of fewer than 6,000 professionals in the country to hold the prestigious PFS designation. With more than 35 years of experience serving clients as a CPA and financial professional, Frank has built a reputation for proactive, honest, and deeply personalized guidance.
                </p>
                <p className="mb-5" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                  Frank is the author of two books: <em>Your Safe Retirement Roadmap</em> and <em>Must-Know Tax Tips for Small Businesses</em>. He is a member of the AICPA and an authorized representative of Tarkenton Financial.
                </p>
                <p className="mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                  Based in Weston, Florida, Frank views his clients as family — many of whom have worked with him for more than 35 years. His approach is simple: understand your situation completely, plan ahead, and help you make better financial decisions before problems become expensive.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "CPA — Certified Public Accountant",
                    "PFS — Personal Financial Specialist",
                    "AICPA Member",
                    "35+ Years of Experience",
                    "Author of Two Published Books",
                    "Authorized Representative, Tarkenton Financial",
                    "Serving South Florida & Nationwide",
                    "Based in Weston, FL",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38" }}>
                      <CheckCircle size={15} style={{ color: "#2d4a1e", flexShrink: 0, marginTop: "2px" }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary">
                  Schedule a Consultation <ArrowRight size={15} />
                </Link>
              </div>
            </FadeLeft>

            <FadeRight>
              <div className="flex flex-col items-center lg:items-start">
                {/* Full rectangular photo with decorative border/shadow treatment */}
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  {/* Decorative offset background */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      right: "-16px",
                      bottom: "-16px",
                      background: "#2d4a1e",
                      borderRadius: "8px",
                      zIndex: 0,
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
                      border: "4px solid white",
                    }}
                  >
                    <img
                      src="/manus-storage/frank-gutta-headshot_bc6ba522.jpg"
                      alt="Frank Gutta, CPA, PFS — GFSCPAs"
                      style={{
                        width: "100%",
                        maxWidth: "420px",
                        height: "520px",
                        objectFit: "cover",
                        objectPosition: "top center",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
                <p className="text-xs mt-8 text-center lg:text-left" style={{ color: "#8a9a84", fontFamily: "'Source Sans 3', sans-serif", fontStyle: "italic" }}>
                  Frank Gutta, CPA, PFS — Principal, GFSCPAs
                </p>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* Frank Gutta Book Section */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "#1a1f14",
                letterSpacing: "-0.01em",
              }}>
                Check Out Frank's Bestselling Book!
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={80}>
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1f14 0%, #2d4a1e 60%, #3a5a28 100%)",
                boxShadow: "0 12px 48px rgba(45,74,30,0.22)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
                {/* Book Image Side */}
                <div className="flex items-center justify-center p-10 md:p-12">
                  <div style={{ position: "relative", display: "inline-block" }}>
                    {/* Best Seller Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-14px",
                        right: "-14px",
                        zIndex: 10,
                        background: "#b8922a",
                        color: "white",
                        borderRadius: "50%",
                        width: "72px",
                        height: "72px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                        border: "2px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.55rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.1, textAlign: "center" }}>
                        Amazon<br />Best<br />Seller
                      </span>
                    </div>
                    <a
                      href="https://www.amazon.com/Your-Safe-Retirement-Roadmap-Deeply-Fulfilled/dp/0578324091"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "block" }}
                    >
                      <img
                        src="/manus-storage/frank-gutta-book-cover-3d_9a20c70b.png"
                        alt="Your Safe Retirement Roadmap by Frank Gutta, CPA, PFS — Amazon Best Seller"
                        style={{
                          width: "220px",
                          height: "auto",
                          display: "block",
                          filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.45))",
                          transition: "transform 0.25s ease",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03) translateY(-4px)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1) translateY(0)")}
                      />
                    </a>
                  </div>
                </div>

                {/* Book Info Side */}
                <div className="p-10 md:p-12 md:pl-4">
                  <div
                    className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4"
                    style={{ background: "rgba(184,146,42,0.2)", color: "#d4a843", fontFamily: "'Source Sans 3', sans-serif", border: "1px solid rgba(184,146,42,0.35)" }}
                  >
                    Amazon Best Seller
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                      fontWeight: 700,
                      color: "white",
                      lineHeight: 1.25,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Your Safe Retirement Roadmap
                  </h3>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9375rem", color: "rgba(255,255,255,0.65)", marginBottom: "1rem", fontStyle: "italic" }}>
                    A Powerful Guide to Planning and Living a Deeply-Fulfilled and Prosperous Retirement
                  </p>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    Frank Gutta shares his proven 4 Bucket System for ensuring your money lasts as long as you do — covering retirement income strategy, market protection, long-term care planning, and legacy building. Foreword by Fran Tarkenton, NFL Hall of Famer and Founder of Tarkenton Financial.
                  </p>
                  <a
                    href="https://www.amazon.com/Your-Safe-Retirement-Roadmap-Deeply-Fulfilled/dp/0578324091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2"
                    style={{ textDecoration: "none" }}
                  >
                    View on Amazon
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="py-20 bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <div className="section-label justify-center">Our Firm</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.375rem)", fontWeight: 700, color: "#1a1f14" }}>
                GFSCPAs — Gutta Stewart Ferrer &amp; Schemidt
              </h2>
              <p className="text-sm mt-1 mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52" }}>
                Legal name: Frank Gutta &amp; Co CPAs PA &nbsp;|&nbsp; DBA: GFSCPAs
              </p>
              <div className="brand-divider mx-auto mt-4" />
              <p className="mt-4 mb-5" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                GFSCPAs is a full-service CPA and financial advisory firm based in Weston, Florida. The firm serves individuals, families, retirees, business owners, and corporations throughout Broward County and the greater South Florida area — as well as clients nationwide.
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                What sets GFSCPAs apart is the Virtual Family Office model — a coordinated, team-based approach that combines local CPA guidance with national expertise in wealth management, tax planning, risk mitigation, legal services, and business advisory. Rather than managing five separate advisor relationships, clients benefit from a unified team working toward the same goals.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Advisory Services Team + Proactive Planning Team */}
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-label justify-center">Our Team</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.375rem)", fontWeight: 700, color: "#1a1f14" }}>
                The People Behind GFSCPAs
              </h2>
              <p className="mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1.0625rem", lineHeight: 1.65 }}>
                Two dedicated teams work together to deliver proactive, coordinated service to every GFSCPAs client.
              </p>
            </div>
          </FadeUp>

          <TeamGrid
            members={advisoryTeam}
            label="Advisory Services Team"
            description="Your dedicated home office — the professionals who know your situation and coordinate your services day to day."
          />

          <div className="border-t border-gray-200 my-4" />

          <div className="mt-14">
            <TeamGrid
              members={planningTeam}
              label="Proactive Planning Team"
              description="Your local eyes and ears — helping you stay focused on planning priorities and identify opportunities before they pass."
            />
          </div>

          <FadeUp delay={300}>
            <div className="text-center mt-6">
              <Link href="/team" className="btn-outline">
                Meet the Full Team <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-label justify-center">Client Success Stories</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
                The Difference Proactive Planning Makes
              </h2>
              <p className="mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1.0625rem", lineHeight: 1.65 }}>
                These are real client situations — shared with permission — that illustrate the value of asking the right questions at the right time.
              </p>
            </div>
          </FadeUp>
          <div className="space-y-6">
            {caseStudies.map((cs, i) => (
              <FadeUp key={cs.title} delay={i * 100}>
                <div
                  className="p-8 rounded-lg"
                  style={{ background: "#f9f7f4", borderLeft: "3px solid #2d4a1e", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>{cs.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", lineHeight: 1.75 }}>{cs.story}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
