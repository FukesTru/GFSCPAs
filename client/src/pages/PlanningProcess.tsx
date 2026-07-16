/**
 * GFSCPAs Planning Process Page — with scroll animations
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

const steps = [
  {
    number: "01",
    title: "Schedule a Consultation",
    desc: "The first step is a conversation. Book a free introductory consultation — by phone or video — to discuss your situation, your goals, and whether GFSCPAs is the right fit for you. There is no obligation and no pressure.",
    details: ["Free introductory call", "Phone or video available", "Discuss your goals and current situation", "No obligation"],
  },
  {
    number: "02",
    title: "Comprehensive Review",
    desc: "We take a thorough look at your current accounting, tax, retirement, and financial picture. This includes reviewing your prior tax returns, financial statements, investment accounts, insurance coverage, estate documents, and business structure.",
    details: ["Prior tax return review", "Financial statement analysis", "Investment and insurance review", "Estate document review", "Business structure assessment"],
  },
  {
    number: "03",
    title: "Identify Opportunities",
    desc: "Based on our review, we identify specific opportunities to reduce your taxes, improve your financial position, close planning gaps, and address risks. We present our findings clearly — without jargon — so you understand what we found and why it matters.",
    details: ["Tax savings opportunities", "Planning gaps identified", "Risk areas addressed", "Clear, jargon-free presentation"],
  },
  {
    number: "04",
    title: "Build Your Plan",
    desc: "We develop a coordinated, proactive plan tailored to your specific needs and goals. This is not a generic checklist — it is a written plan that addresses your tax situation, financial goals, retirement timeline, estate wishes, and business needs as a unified whole.",
    details: ["Written, personalized plan", "Tax and financial coordination", "Retirement and estate integration", "Business and personal alignment"],
  },
  {
    number: "05",
    title: "Implement & Execute",
    desc: "We help you implement the plan — coordinating with your attorneys, financial advisors, and other professionals as needed. We handle the accounting, tax, and financial planning work directly. For areas outside our scope, we connect you with trusted specialists through the Virtual Family Office.",
    details: ["Direct implementation support", "Coordination with other advisors", "Virtual Family Office referrals", "Accountability and follow-through"],
  },
  {
    number: "06",
    title: "Ongoing Support & Review",
    desc: "We stay engaged throughout the year — not just at tax time. We review your plan regularly, update it as your situation changes, and bring proactive recommendations to every conversation. You always know where you stand.",
    details: ["Year-round engagement", "Regular plan reviews", "Proactive recommendations", "Responsive communication"],
  },
];

export default function PlanningProcess() {
  return (
    <PageLayout
      title="How GFSCPAs Works"
      subtitle="Proactive Planning Requires a Process"
    >
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="section-label justify-center">How GFSCPAs Works</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
                Proactive Planning Requires a Process
              </h2>
              <div className="brand-divider mx-auto mt-4" />
              <p className="mt-4" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                Most accounting firms wait for you to come to them with a problem. GFSCPAs uses a structured planning process to stay ahead of problems — identifying opportunities and risks before they become expensive.
              </p>
              <p className="mt-4" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                That is the difference between reactive accounting and proactive planning.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 80}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-lg"
                  style={{ background: "white", borderLeft: "3px solid #2d4a1e", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{ background: "#2d4a1e", color: "white", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {step.number}
                      </div>
                      <h3 className="font-bold text-xl" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                      {step.desc}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38" }}>
                          <CheckCircle size={14} style={{ color: "#2d4a1e", flexShrink: 0, marginTop: "2px" }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200}>
            <div className="text-center mt-12">
              <Link href="/contact" className="btn-primary">
                Start the Process Today <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection headline="The best time to start planning was years ago. The second best time is now." />
    </PageLayout>
  );
}
