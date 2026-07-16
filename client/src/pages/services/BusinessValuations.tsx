import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function BusinessValuations() {
  return (
    <ServicePageTemplate
      title="Business Valuations"
      subtitle="Certified business valuations for sales, mergers, estate planning, and litigation support in South Florida."
      intro="Knowing what your business is worth is essential — whether you are planning to sell, bringing in a partner, going through a divorce, settling an estate, or simply making better strategic decisions. GFSCPAs provides certified business valuations that are thorough, defensible, and delivered by an experienced CPA."
      benefits={[
        "Business valuations for buy-sell transactions",
        "Estate and gift tax valuations",
        "Divorce and litigation support valuations",
        "Minority interest and discount analysis",
        "Goodwill and intangible asset valuation",
        "Mergers and acquisition due diligence",
        "SBA loan and financing support",
        "Annual valuation updates for planning purposes",
      ]}
      details={[
        { heading: "Why Valuation Matters", body: "An accurate business valuation is the foundation of good exit planning, estate planning, and business transition strategy. Without one, you are making critical decisions — about price, structure, taxes, and timing — without the information you need." },
        { heading: "Common Situations That Require a Valuation", body: "Business owners need valuations in more situations than they often realize: selling the business, buying out a partner, transferring ownership to family members, settling an estate, going through a divorce, applying for SBA financing, or simply planning for the future. GFSCPAs provides valuations for all of these purposes." },
        { heading: "Defensible, Professional Reports", body: "GFSCPAs prepares valuation reports that meet professional standards and can withstand scrutiny from the IRS, courts, and opposing counsel. Our reports are thorough, well-documented, and clearly explained." },
      ]}
      relatedServices={[
        { label: "Business Advisory", href: "/services/business-advisory" },
        { label: "Business Succession Planning", href: "/services/succession-planning" },
        { label: "Estate & Trust Planning", href: "/services/estate-trust-planning" },
        { label: "Tax Planning", href: "/services/tax-planning" },
      ]}
      ctaHeadline="Know what your business is worth before you need to know."
    />
  );
}
