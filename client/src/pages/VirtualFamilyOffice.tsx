/**
 * GFSCPAs Virtual Family Office Page
 */
import PageLayout from "../components/PageLayout";
import CTASection from "../components/CTASection";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const disciplines = [
  {
    number: "01",
    title: "Wealth Management",
    desc: "Coordinated investment and wealth strategy aligned with your long-term goals and tax situation. GFSCPAs works with wealth management specialists who understand how investment decisions interact with your tax plan — so your portfolio and your tax strategy work together.",
    services: ["Investment portfolio review", "Asset allocation analysis", "Tax-efficient investment strategies", "Coordination with retirement and estate planning"],
  },
  {
    number: "02",
    title: "Tax Planning",
    desc: "Proactive tax strategies that go far beyond filing. GFSCPAs leads the tax planning discipline — developing year-round strategies to reduce your burden, coordinate with other disciplines, and ensure every financial decision is evaluated through a tax lens.",
    services: ["Year-round tax planning", "Multi-year tax projections", "Entity structure optimization", "Coordination with all other disciplines"],
  },
  {
    number: "03",
    title: "Risk Mitigation",
    desc: "Life insurance, property and casualty coverage, disability insurance, and asset protection strategies tailored to your specific exposure. The goal is to protect what you have built — without over-insuring or under-insuring.",
    services: ["Life insurance analysis and review", "Disability income protection", "Long-term care planning", "Property and casualty review", "Asset protection strategies"],
  },
  {
    number: "04",
    title: "Legal Services",
    desc: "Access to a network of attorneys specializing in business structuring, estate planning, asset protection, and related legal matters. GFSCPAs coordinates with legal counsel to ensure your legal documents align with your financial and tax plan.",
    services: ["Estate planning attorney coordination", "Business structuring legal support", "Asset protection legal strategies", "Buy-sell agreement review"],
  },
  {
    number: "05",
    title: "Business Advisory",
    desc: "Hands-on support for business owners navigating growth, operations, succession, and exit planning. GFSCPAs provides direct business advisory services and coordinates with specialists when needed.",
    services: ["Business performance analysis", "Growth and exit planning", "Succession planning", "Acquisition and sale support"],
  },
];

export default function VirtualFamilyOffice() {
  return (
    <PageLayout
      title="Virtual Family Office"
      subtitle="Five disciplines. One coordinated team. The GFSCPAs approach to comprehensive financial guidance."
    >
      {/* Intro */}
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <div className="section-label">The VFO Model</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.375rem)", fontWeight: 700, color: "#1a1f14", lineHeight: 1.2 }}>
                What Is a Virtual Family Office?
              </h2>
              <div className="brand-divider mt-4" />
              <p className="mt-2 mb-5" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                A Family Office is a private advisory firm that manages the financial, tax, legal, and investment affairs of a wealthy family. Traditionally, only ultra-high-net-worth families could afford one.
              </p>
              <p className="mb-5" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                The Virtual Family Office model brings the same coordinated, comprehensive approach to a broader range of clients — by assembling a team of specialists who work together, led by your CPA as the central coordinator.
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1.0625rem", lineHeight: 1.75 }}>
                At GFSCPAs, Frank Gutta, CPA, PFS serves as the lead advisor — coordinating your tax, financial, legal, and business advisors so that every decision is made with the full picture in mind.
              </p>
            </div>
            <div>
              <img
                src="/manus-storage/office_team_e297134b.jpg"
                alt="Virtual Family Office team coordination"
                className="rounded-lg w-full object-cover"
                style={{ height: "400px", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
              />
            </div>
          </div>

          {/* Five Disciplines */}
          <div className="text-center mb-14">
            <div className="section-label justify-center">Five Disciplines</div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
              A Coordinated Team Across Every Area of Your Financial Life
            </h2>
          </div>

          <div className="space-y-6">
            {disciplines.map((d) => (
              <div
                key={d.number}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-lg"
                style={{ background: "white", borderLeft: "3px solid #2d4a1e", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>{d.number}</span>
                    <h3 className="font-bold text-xl" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>{d.title}</h3>
                  </div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1rem", lineHeight: 1.75 }}>{d.desc}</p>
                </div>
                <div>
                  <ul className="space-y-2">
                    {d.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38" }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#2d4a1e" }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Learn If the VFO Is Right for You <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection headline="Stop managing five separate advisor relationships. Let GFSCPAs coordinate the full picture." />
    </PageLayout>
  );
}
