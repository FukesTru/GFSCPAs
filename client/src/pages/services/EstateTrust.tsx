import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function EstateTrust() {
  return (
    <ServicePageTemplate
      title="Estate & Trust Planning"
      subtitle="Protect your assets and provide for your family with coordinated estate, trust, and succession planning in South Florida."
      intro="Estate and trust planning is about more than minimizing taxes — it is about making sure your wishes are carried out, your family is protected, and your assets pass to the right people in the right way. GFSCPAs works with you and your estate planning attorney to develop a coordinated plan that addresses your full financial picture."
      benefits={[
        "Estate tax analysis and minimization strategies",
        "Trust planning and trust tax return preparation",
        "Coordination with estate planning attorneys",
        "Beneficiary designation review",
        "Gifting strategies and annual exclusion planning",
        "Charitable giving and donor-advised fund strategies",
        "Business succession and buy-sell agreement review",
        "Step-up in basis planning for inherited assets",
      ]}
      details={[
        { heading: "The CPA's Role in Estate Planning", body: "While attorneys draft the legal documents, GFSCPAs provides the financial and tax analysis that makes your estate plan work. We identify tax-saving opportunities, review the tax implications of your plan, and prepare trust and estate tax returns accurately and on time." },
        { heading: "Step-Up in Basis: A Commonly Missed Opportunity", body: "When a person inherits assets, those assets often receive a step-up in basis to their fair market value at the date of death. This can eliminate significant capital gains tax on appreciated assets. GFSCPAs ensures this planning is in place — and that inherited assets are handled correctly from the start." },
        { heading: "A Real Example: $175,000 in Taxes She Did Not Owe", body: "A widow was told she owed $175,000 in capital gains tax after selling her late husband's business. GFSCPAs reviewed the situation and discovered that the assets had received a step-up in basis at her husband's death, resulting in no taxable gain. She owed nothing. Knowing what questions to ask makes all the difference." },
        { heading: "Coordinated Planning Across Your Entire Team", body: "Estate planning works best when your CPA, attorney, and financial advisor are working from the same plan. GFSCPAs coordinates with your other professionals to ensure your estate plan, tax strategy, and financial plan are aligned — not working against each other." },
      ]}
      relatedServices={[
        { label: "Tax Planning", href: "/services/tax-planning" },
        { label: "Retirement Planning", href: "/services/retirement-planning" },
        { label: "Financial Planning", href: "/services/financial-planning" },
        { label: "Business Succession Planning", href: "/services/succession-planning" },
      ]}
      ctaHeadline="Protect what you have built. Let's coordinate your estate plan."
    />
  );
}
