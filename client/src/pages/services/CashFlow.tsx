import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function CashFlow() {
  return (
    <ServicePageTemplate
      title="Cash Flow Management"
      subtitle="Practical cash flow analysis and management strategies to keep your business financially healthy."
      intro="Cash flow is the lifeblood of any business. Many profitable businesses fail because they run out of cash at the wrong time. GFSCPAs helps business owners understand, forecast, and manage their cash flow — so they can make confident decisions, avoid surprises, and keep their business running smoothly."
      benefits={[
        "Cash flow analysis and reporting",
        "13-week and annual cash flow forecasting",
        "Accounts receivable and payable review",
        "Working capital analysis",
        "Seasonal cash flow planning",
        "Banking and credit line strategy",
        "Cash flow improvement recommendations",
        "Integration with bookkeeping and financial statements",
      ]}
      details={[
        { heading: "Why Cash Flow Management Matters", body: "Revenue and profit are important, but cash flow determines whether you can make payroll, pay vendors, and invest in growth. GFSCPAs helps you see your cash position clearly — not just today, but 30, 60, and 90 days out — so you can act before problems arise." },
        { heading: "Forecasting: The Key to Staying Ahead", body: "A 13-week cash flow forecast gives you a real-time view of your cash position and helps you anticipate shortfalls before they become crises. GFSCPAs builds and maintains these forecasts as part of your ongoing financial management — so you are never caught off guard." },
        { heading: "Part of a Broader Financial Picture", body: "Cash flow management at GFSCPAs is not a standalone service — it is integrated with your bookkeeping, tax planning, and business advisory work. When we see a cash flow issue developing, we address it as part of your overall financial strategy." },
      ]}
      relatedServices={[
        { label: "Part-Time CFO Services", href: "/services/cfo-services" },
        { label: "Business Advisory", href: "/services/business-advisory" },
        { label: "Accounting & Tax Services", href: "/services/accounting-tax" },
        { label: "Payroll Services", href: "/services/payroll" },
      ]}
      ctaHeadline="Get a clear picture of your cash flow — and a plan to improve it."
    />
  );
}
