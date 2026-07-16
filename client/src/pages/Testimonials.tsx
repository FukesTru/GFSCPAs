/**
 * Testimonials / Endorsements Page
 * Design: Quiet Luxury — deep forest green, warm gold, cream
 * Sections: Hero, Intro, Video Section 1 (Fran Tarkenton), Video Section 2 (Frank Gutta),
 *           Tarkenton Written Endorsement, Client Stories, CTA
 */

import { useEffect, useRef } from "react";
import PageLayout from "../components/PageLayout";
import CTASection from "../components/CTASection";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/** Responsive 16:9 YouTube embed */
function VideoEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        borderRadius: "14px",
        boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
        border: "1px solid rgba(0,0,0,0.07)",
        background: "#000",
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&color=white`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "14px",
        }}
      />
    </div>
  );
}

const clientStories = [
  {
    headline: "A $27,800 Difference — By Attending to the Details",
    story:
      "A foreign national who had her taxes prepared by one of the largest international CPA firms was told she owed $26,000 in taxes. She sought a second opinion from Frank Gutta. After reviewing her returns, Frank found that her foreign income — earned while she was a non-resident of the U.S. — had been incorrectly included. The result: a refund of $1,800 instead of a $26,000 liability. The difference came down to asking the right questions.",
    initials: "J.S.",
    label: "Foreign National Client",
  },
  {
    headline: "Securing a Widow's Financial Future",
    story:
      "A schoolteacher referred to Frank needed help planning her retirement after her husband passed. She wanted to travel, spend time with grandchildren, pay off her son's mortgage, and never worry about money again. Frank reviewed her portfolio, analyzed her cash flow, and built a plan that accomplished every goal — providing long-term care coverage, full liquidity, and an extra $1,500 per month above what she needed. She later called to say she finally felt secure knowing her checks would arrive every month for the rest of her life.",
    initials: "Client",
    label: "Retired Schoolteacher",
  },
  {
    headline: "$175,000 in Taxes She Did Not Owe",
    story:
      "A widow who had sold her business was told by a Boca Raton firm that she owed $175,000 in capital gains tax. Referred to Frank for a second opinion, he discovered that because her husband had started the business 30 years ago and passed away the prior year, the property received a step-up in basis at the date of death. The value at the date of sale and the date of death were nearly identical — resulting in no taxable gain. She owed nothing.",
    initials: "A.H.",
    label: "Business Owner, South Florida",
  },
];

export default function Testimonials() {
  return (
    <PageLayout
      title="Trusted Endorsements & Client Testimonials"
      subtitle="Real words from real people, including a trusted endorsement from NFL Hall of Famer Fran Tarkenton."
    >

      {/* ── VIDEO SECTION 1: FRAN TARKENTON ENDORSEMENT ── */}
      <section className="py-24" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="section-label justify-center mb-2">Trusted Endorsement</div>
          </FadeUp>

          {/* Card */}
          <div
            style={{
              background: "#f9f7f4",
              borderRadius: "20px",
              border: "1px solid rgba(26,46,20,0.08)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
              overflow: "hidden",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-0">

              {/* Left: description */}
              <div
                className="flex flex-col justify-center"
                style={{ padding: "60px 56px 60px 56px" }}
              >
                <FadeUp>
                  {/* Gold accent bar */}
                  <div
                    style={{
                      width: "56px",
                      height: "4px",
                      background: "#b8922a",
                      borderRadius: "2px",
                      marginBottom: "28px",
                    }}
                  />
                  <h2
                    className="text-4xl lg:text-5xl font-bold mb-6"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#1a2e14", lineHeight: 1.15 }}
                  >
                    Fran Tarkenton on Frank Gutta
                  </h2>
                  <p
                    className="text-lg lg:text-xl leading-relaxed mb-6"
                    style={{ color: "#4a5568", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    NFL Hall of Famer and Founder of Tarkenton Financial, Fran Tarkenton, has worked alongside
                    Frank Gutta for more than a decade. In this video, Tarkenton speaks directly to Frank's
                    integrity, his commitment to educating clients, and the trust he has placed in Frank as
                    an authorized representative of Tarkenton Financial.
                  </p>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "#4a5568", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    This is not a scripted endorsement. It is a direct, personal statement from one of the
                    most recognized names in American business — about a CPA he has chosen to stand behind.
                  </p>

                  {/* Attribution */}
                  <div
                    className="flex items-center gap-3 mt-8 pt-6"
                    style={{ borderTop: "1px solid rgba(26,46,20,0.1)" }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#1a2e14",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          color: "#b8922a",
                          fontWeight: 700,
                          fontSize: "14px",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        FT
                      </span>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontWeight: 700,
                          color: "#1a2e14",
                          fontSize: "0.9rem",
                        }}
                      >
                        Fran Tarkenton
                      </div>
                      <div
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "#6b7280",
                          fontSize: "0.8rem",
                        }}
                      >
                        NFL Hall of Famer &amp; Founder, Tarkenton Financial
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Right: video */}
              <div
                className="flex items-center w-full"
                style={{
                  padding: "56px 56px 56px 40px",
                  background: "linear-gradient(135deg, #f9f7f4 0%, #f0ece4 100%)",
                  minWidth: 0,
                }}
              >
                <div style={{ width: "100%" }}>
                  <VideoEmbed
                    id="GezhpGmBz3Q"
                    title="Fran Tarkenton Endorsement of Frank Gutta, CPA, PFS"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION 2: FRANK GUTTA — STRATEGY & CLIENT SUCCESS ── */}
      <section className="py-24" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="section-label justify-center mb-2">In Frank's Own Words</div>
          </FadeUp>

          {/* Card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              border: "1px solid rgba(26,46,20,0.08)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
              overflow: "hidden",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-0">

              {/* Left: description */}
              <div
                className="flex flex-col justify-center"
                style={{ padding: "60px 56px 60px 56px" }}
              >
                <FadeUp>
                  {/* Gold accent bar */}
                  <div
                    style={{
                      width: "56px",
                      height: "4px",
                      background: "#b8922a",
                      borderRadius: "2px",
                      marginBottom: "28px",
                    }}
                  />
                  <h2
                    className="text-4xl lg:text-5xl font-bold mb-6"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#1a2e14", lineHeight: 1.15 }}
                  >
                    Frank Gutta's Approach to Client Success
                  </h2>
                  <p
                    className="text-lg lg:text-xl leading-relaxed mb-6"
                    style={{ color: "#4a5568", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    In this video, Frank Gutta speaks directly about his philosophy and process — how he helps
                    clients make more informed decisions around retirement, tax planning, and long-term financial
                    security. His approach is built on education, transparency, and a proactive planning
                    framework that goes well beyond traditional tax preparation.
                  </p>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "#4a5568", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Hear Frank explain the strategies that have helped clients protect their wealth, reduce
                    unnecessary tax burdens, and build confidence in their financial future — in his own words.
                  </p>

                  {/* Attribution */}
                  <div
                    className="flex items-center gap-3 mt-8 pt-6"
                    style={{ borderTop: "1px solid rgba(26,46,20,0.1)" }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#1a2e14",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          color: "#b8922a",
                          fontWeight: 700,
                          fontSize: "14px",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        FG
                      </span>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontWeight: 700,
                          color: "#1a2e14",
                          fontSize: "0.9rem",
                        }}
                      >
                        Frank Gutta, CPA, PFS
                      </div>
                      <div
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "#6b7280",
                          fontSize: "0.8rem",
                        }}
                      >
                        Founder, GFSCPAs — Weston, FL
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Right: video */}
              <div
                className="flex items-center w-full"
                style={{
                  padding: "56px 56px 56px 40px",
                  background: "linear-gradient(135deg, #fff 0%, #f5f0e8 100%)",
                  minWidth: 0,
                }}
              >
                <div style={{ width: "100%" }}>
                  <VideoEmbed
                    id="mX2H8u8TvaU"
                    title="Frank Gutta, CPA, PFS — Strategy and Client Success"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── TARKENTON WRITTEN ENDORSEMENT ── */}
      <section className="py-20" style={{ background: "#1a2e14" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="section-label justify-center" style={{ color: "#b8922a" }}>Written Endorsement</div>
            <h2
              className="text-3xl md:text-4xl font-bold mt-3 mb-12 text-center"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f5f0e8" }}
            >
              Fran Tarkenton Endorsement
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp delay={80}>
              <div className="relative">
                <img
                  src="/manus-storage/gutta-tarkenton-photo_6f014453.jpg"
                  alt="Frank Gutta with Fran Tarkenton"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-12px",
                    right: "-12px",
                    background: "#b8922a",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    fontFamily: "'Source Sans 3', sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  Frank Gutta &amp; Fran Tarkenton
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={160}>
              <div>
                <div
                  style={{
                    fontSize: "64px",
                    lineHeight: 1,
                    color: "#b8922a",
                    fontFamily: "Georgia, serif",
                    marginBottom: "8px",
                  }}
                >
                  &ldquo;
                </div>
                <blockquote
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    lineHeight: "1.8",
                    color: "#e8e0d0",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  I've been proud to call Frank an authorized representative of Tarkenton Financial for more
                  than a decade. I've seen his integrity and his commitment to educating clients on their
                  options, something to which we are deeply committed. If you're seeking a sound retirement
                  strategy, I believe Frank's experience and knowledge may be a great asset to you. His work
                  embodies our philosophy at Tarkenton Financial that the mission of business is to help people.
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div
                    style={{
                      width: "3px",
                      height: "48px",
                      background: "#b8922a",
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 700,
                        color: "#f5f0e8",
                        fontSize: "1rem",
                      }}
                    >
                      Fran Tarkenton
                    </div>
                    <div
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "rgba(245,240,232,0.6)",
                        fontSize: "0.875rem",
                      }}
                    >
                      NFL Hall of Famer &amp; Founder of Tarkenton Financial
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <img
                    src="/manus-storage/tarkenton-financial-logo_5a916abe.jpg"
                    alt="Tarkenton Financial — Authorized Representative"
                    style={{ height: "52px", objectFit: "contain", opacity: 0.85 }}
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CLIENT SUCCESS STORIES ── */}
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-label justify-center">Client Experiences</div>
              <h2
                className="text-3xl md:text-4xl font-bold mt-3 mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "#1a2e14" }}
              >
                Real Results for Real Clients
              </h2>
              <p
                className="text-base md:text-lg max-w-2xl mx-auto"
                style={{ color: "#4a5568", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                These are real client situations — shared with permission — that illustrate the kind of
                detailed, proactive work Frank Gutta brings to every engagement.
              </p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            {clientStories.map((story, i) => (
              <FadeUp key={story.headline} delay={i * 100}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "32px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#2d4a1e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "14px",
                      fontFamily: "'Source Sans 3', sans-serif",
                      flexShrink: 0,
                      marginBottom: "16px",
                    }}
                  >
                    {story.initials.replace(/\./g, "").slice(0, 2).toUpperCase()}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#1a2e14",
                      marginBottom: "12px",
                      lineHeight: "1.4",
                    }}
                  >
                    {story.headline}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.9rem",
                      color: "#4a5568",
                      lineHeight: "1.7",
                      flex: 1,
                    }}
                  >
                    {story.story}
                  </p>
                  <div
                    style={{
                      marginTop: "20px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(0,0,0,0.07)",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.8rem",
                      color: "#b8922a",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {story.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ── */}
      <section className="py-14" style={{ background: "#2d4a1e" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
                fontStyle: "italic",
                color: "rgba(245,240,232,0.85)",
                maxWidth: "680px",
                margin: "0 auto 24px",
                lineHeight: "1.7",
              }}
            >
              Frank Gutta is one of fewer than 6,000 professionals nationwide to hold the prestigious CPA, PFS
              (Personal Financial Specialist) designation — combining deep tax expertise with comprehensive
              financial planning credentials.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              {[
                "CPA, PFS Designation",
                "35+ Years Experience",
                "AICPA Member",
                "Tarkenton Financial Authorized Representative",
                "Author — 2 Published Books",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#f5f0e8",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    padding: "6px 14px",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
