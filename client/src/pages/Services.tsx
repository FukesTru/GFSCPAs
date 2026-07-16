/**
 * GFSCPAs Services Overview Page
 */
import PageLayout from "../components/PageLayout";
import CTASection from "../components/CTASection";
import { Link } from "wouter";
import { ArrowRight, FileText, TrendingUp, DollarSign, Scale, Shield, Briefcase, Building2, Users, BarChart3, Layers, GitBranch, PieChart } from "lucide-react";

const services = [
  { icon: FileText, title: "Accounting & Tax Services", desc: "Bookkeeping, financial statements, tax preparation, and compliance for individuals and businesses of all sizes.", href: "/services/accounting-tax" },
  { icon: TrendingUp, title: "Tax Planning", desc: "Proactive, year-round tax strategies designed to reduce your burden before the return is due.", href: "/services/tax-planning" },
  { icon: FileText, title: "Tax Preparation", desc: "Accurate, timely preparation of individual, business, trust, and estate tax returns.", href: "/services/tax-preparation" },
  { icon: Shield, title: "IRS Representation", desc: "Experienced advocacy in IRS audits, back taxes, penalty abatement, and tax controversy resolution.", href: "/services/irs-representation" },
  { icon: Scale, title: "Estate & Trust Planning", desc: "Protect your assets and provide for your family with coordinated estate, trust, and succession planning.", href: "/services/estate-trust-planning" },
  { icon: DollarSign, title: "Retirement Planning", desc: "Safe, structured retirement income strategies including the proven 4 Bucket System.", href: "/services/retirement-planning" },
  { icon: PieChart, title: "Financial Planning", desc: "Comprehensive financial planning that aligns your investments, tax situation, and long-term goals.", href: "/services/financial-planning" },
  { icon: Briefcase, title: "Business Advisory", desc: "Strategic guidance for business owners on growth, operations, KPIs, and exit planning.", href: "/services/business-advisory" },
  { icon: Building2, title: "Part-Time CFO Services", desc: "Executive-level financial oversight and cash flow management without the full-time cost.", href: "/services/cfo-services" },
  { icon: Users, title: "Payroll Services", desc: "Reliable, accurate payroll processing for businesses of all sizes.", href: "/services/payroll" },
  { icon: BarChart3, title: "Business Valuations", desc: "Certified business valuations for sales, mergers, estate planning, and litigation support.", href: "/services/business-valuations" },
  { icon: Layers, title: "Entity Structuring", desc: "Smart entity selection and structuring to protect your assets and minimize your tax exposure.", href: "/services/entity-structuring" },
  { icon: GitBranch, title: "Cash Flow Management", desc: "Practical cash flow analysis and management strategies to keep your business financially healthy.", href: "/services/cash-flow" },
  { icon: GitBranch, title: "Business Succession Planning", desc: "Structured planning to transition your business to the next generation or a qualified buyer.", href: "/services/succession-planning" },
];

export default function Services() {
  return (
    <PageLayout
      title="Our Services"
      subtitle="Comprehensive CPA, tax planning, and financial advisory services for individuals, families, retirees, and businesses in South Florida."
    >
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Full-Service CPA Firm</div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
              Everything Your Financial Life Requires
            </h2>
            <p className="mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1.0625rem", lineHeight: 1.65 }}>
              GFSCPAs provides the full range of accounting, tax, and financial advisory services — all coordinated by a single trusted team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="service-card block group">
                <div className="mb-3" style={{ color: "#2d4a1e" }}>
                  <service.icon size={22} />
                </div>
                <h3 className="font-bold mb-2 text-base group-hover:text-green-800 transition-colors" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52" }}>
                  {service.desc}
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#2d4a1e" }}>
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageLayout>
  );
}
