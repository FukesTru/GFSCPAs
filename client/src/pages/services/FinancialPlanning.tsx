import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function FinancialPlanning() {
  return (
    <ServicePageTemplate
      title="Financial Planning"
      subtitle="Comprehensive financial planning that aligns your investments, tax situation, and long-term goals."
      intro="GFSCPAs provides comprehensive financial planning services that go beyond investment management. We look at your complete financial picture — income, expenses, taxes, insurance, retirement, estate, and business interests — and develop a coordinated plan that helps you make better decisions and reach your goals."
      benefits={[
        "Comprehensive financial plan development",
        "Net worth analysis and goal setting",
        "Investment portfolio review and analysis",
        "Insurance needs analysis (life, disability, long-term care)",
        "Education funding planning (529 plans, Coverdell)",
        "Cash flow and budget analysis",
        "Coordination with tax and estate planning",
        "Annual plan review and updates",
      ]}
      details={[
        { heading: "The CPA Advantage in Financial Planning", body: "Most financial planners focus on investments. GFSCPAs brings a CPA's perspective — which means every financial planning recommendation is evaluated through a tax lens. The goal is not just to grow your assets, but to keep more of what you earn." },
        { heading: "A Plan That Covers Every Dimension", body: "A true financial plan addresses more than your investment portfolio. GFSCPAs reviews your income, expenses, tax situation, insurance coverage, retirement readiness, estate plan, and business interests — and develops a coordinated strategy that addresses all of them together." },
        { heading: "The Virtual Family Office Model", body: "For clients who need a broader range of services, GFSCPAs coordinates a Virtual Family Office — a team of specialists in wealth management, tax planning, risk mitigation, legal services, and business advisory. You get the benefit of a coordinated team without managing five separate advisor relationships." },
        { heading: "Planning Is Not a One-Time Event", body: "Your financial plan should evolve as your life changes. GFSCPAs reviews your plan annually — or whenever a significant event occurs — to ensure your strategy remains aligned with your goals, your tax situation, and the current economic environment." },
      ]}
      relatedServices={[
        { label: "Retirement Planning", href: "/services/retirement-planning" },
        { label: "Tax Planning", href: "/services/tax-planning" },
        { label: "Estate & Trust Planning", href: "/services/estate-trust-planning" },
        { label: "Business Advisory", href: "/services/business-advisory" },
      ]}
      ctaHeadline="Let's build a financial plan that works as hard as you do."
    />
  );
}
