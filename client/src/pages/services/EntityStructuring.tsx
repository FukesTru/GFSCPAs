import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function EntityStructuring() {
  return (
    <ServicePageTemplate
      title="Entity Structuring"
      subtitle="Smart entity selection and structuring to protect your assets and minimize your tax exposure in Florida."
      intro="The entity you choose for your business has significant implications for your taxes, liability protection, and long-term flexibility. GFSCPAs helps business owners select and structure the right entity — and restructure when circumstances change — to protect assets and minimize tax exposure."
      benefits={[
        "Entity selection analysis (LLC, S-Corp, C-Corp, partnership)",
        "S-Corp election and reasonable compensation analysis",
        "Multi-entity structuring for asset protection",
        "Operating agreement and shareholder agreement review",
        "State registration and compliance",
        "Conversion and restructuring planning",
        "Tax impact analysis of entity changes",
        "Coordination with business attorneys",
      ]}
      details={[
        { heading: "The Right Structure Matters", body: "Many business owners choose their entity type based on what was easiest to set up — not what is most advantageous. A sole proprietor paying self-employment tax on $200,000 of net income could save $10,000 or more per year by electing S-Corp status. GFSCPAs analyzes your specific situation and recommends the structure that makes the most sense." },
        { heading: "Asset Protection Through Proper Structuring", body: "The right entity structure does more than reduce taxes — it separates your personal assets from your business liabilities. GFSCPAs works with your business attorney to ensure your structure provides the protection you need, not just on paper, but in practice." },
        { heading: "Restructuring as You Grow", body: "The entity structure that made sense when you started may not be optimal as your business grows. GFSCPAs reviews your structure regularly and recommends changes when the tax savings or liability protection benefits justify the transition." },
      ]}
      relatedServices={[
        { label: "Business Advisory", href: "/services/business-advisory" },
        { label: "Tax Planning", href: "/services/tax-planning" },
        { label: "Payroll Services", href: "/services/payroll" },
        { label: "Accounting & Tax Services", href: "/services/accounting-tax" },
      ]}
      ctaHeadline="Is your business structured to minimize taxes and protect your assets?"
    />
  );
}
