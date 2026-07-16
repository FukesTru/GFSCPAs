import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function CFOServices() {
  return (
    <ServicePageTemplate
      title="Part-Time CFO Services"
      subtitle="Executive-level financial oversight and cash flow management for growing businesses — without the full-time cost."
      intro="Growing businesses often need more financial leadership than a bookkeeper can provide, but are not yet ready for a full-time CFO. GFSCPAs provides part-time CFO services that give you executive-level financial oversight, strategic guidance, and accountability — at a fraction of the cost of a full-time hire."
      benefits={[
        "Monthly financial statement review and analysis",
        "Cash flow forecasting and management",
        "Budget development and variance analysis",
        "Banking and lender relationship support",
        "Financial systems review and improvement",
        "Internal controls assessment",
        "Strategic planning support",
        "Board and investor reporting",
      ]}
      details={[
        { heading: "What a Part-Time CFO Does", body: "A part-time CFO from GFSCPAs acts as your financial co-pilot — reviewing your numbers each month, identifying trends and risks, helping you make better decisions, and ensuring your financial operations are running efficiently. We bring the experience of a seasoned executive without the overhead." },
        { heading: "When You Need a Part-Time CFO", body: "If you are making major financial decisions based on gut instinct rather than solid data, struggling with cash flow despite growing revenue, preparing for a bank loan or investor, or simply feeling like you do not have a clear picture of your financial position — a part-time CFO can make a significant difference." },
        { heading: "The Gap Between Bookkeeper and CFO", body: "A bookkeeper records what happened. A CFO helps you decide what to do next. GFSCPAs fills the gap between basic bookkeeping and full-time executive leadership — giving growing businesses the financial oversight they need at a cost that makes sense." },
        { heading: "Integrated with Your Accounting and Tax Work", body: "Because GFSCPAs also handles your accounting and tax compliance, your part-time CFO services are fully integrated with your books and your tax plan. There is no duplication, no miscommunication, and no lag between your financial data and your strategic decisions." },
      ]}
      relatedServices={[
        { label: "Business Advisory", href: "/services/business-advisory" },
        { label: "Cash Flow Management", href: "/services/cash-flow" },
        { label: "Accounting & Tax Services", href: "/services/accounting-tax" },
        { label: "Business Valuations", href: "/services/business-valuations" },
      ]}
      ctaHeadline="Get executive-level financial leadership without the full-time cost."
    />
  );
}
