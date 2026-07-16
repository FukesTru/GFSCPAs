import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function BusinessAdvisory() {
  return (
    <ServicePageTemplate
      title="Business Advisory"
      subtitle="Strategic guidance for business owners on growth, operations, profitability, and exit planning in South Florida."
      intro="Running a business is demanding. GFSCPAs works alongside business owners as a trusted advisor — helping you understand your numbers, make better decisions, plan for growth, and build a business that is worth owning and worth selling."
      benefits={[
        "Business performance analysis and KPI development",
        "Profitability improvement strategies",
        "Cash flow forecasting and management",
        "Business structure review and optimization",
        "Growth planning and strategic advisory",
        "Exit planning and business sale preparation",
        "Acquisition due diligence support",
        "Coordination with legal and financial advisors",
      ]}
      details={[
        { heading: "A Trusted Advisor, Not Just a Tax Preparer", body: "Many business owners only hear from their CPA at tax time. GFSCPAs takes a different approach — we stay engaged throughout the year, review your financials regularly, and bring proactive recommendations to every conversation." },
        { heading: "Understanding Your Numbers", body: "You cannot manage what you do not measure. GFSCPAs helps business owners understand the financial drivers of their business — which products and services are most profitable, where cash is being consumed, and what the numbers are telling you about the health of your business." },
        { heading: "Planning for the Exit", body: "Every business owner will eventually exit their business — whether by sale, succession, or retirement. GFSCPAs helps you plan that exit years in advance, so you maximize the value you receive and minimize the tax you pay on the transaction." },
        { heading: "The Virtual Family Office Advantage", body: "Business owners often need more than a CPA. They need legal counsel, insurance review, exit planning specialists, and financial advisors — all working from the same plan. GFSCPAs coordinates a Virtual Family Office of national specialists to serve every dimension of your business and personal financial life." },
      ]}
      relatedServices={[
        { label: "Part-Time CFO Services", href: "/services/cfo-services" },
        { label: "Business Valuations", href: "/services/business-valuations" },
        { label: "Entity Structuring", href: "/services/entity-structuring" },
        { label: "Business Succession Planning", href: "/services/succession-planning" },
        { label: "Tax Planning", href: "/services/tax-planning" },
      ]}
      ctaHeadline="Your business deserves a CPA who is invested in its success."
    />
  );
}
