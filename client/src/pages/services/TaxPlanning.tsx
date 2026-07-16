import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function TaxPlanning() {
  return (
    <ServicePageTemplate
      title="Tax Planning"
      subtitle="Proactive, year-round tax strategies to reduce your burden before the return is due — not after."
      intro="Most people think about taxes once a year, when the deadline arrives. GFSCPAs takes a fundamentally different approach. We work with you throughout the year to identify tax-saving opportunities, structure your income and deductions strategically, and make decisions before they become expensive mistakes. The best tax outcomes are built over time — not assembled at the last minute."
      benefits={[
        "Year-round tax planning — not just year-end filing",
        "Entity structure review and optimization",
        "Income timing and deferral strategies",
        "Retirement account contribution planning",
        "Capital gains and investment tax planning",
        "Business deduction maximization",
        "Multi-year tax projections and scenario modeling",
        "Coordination with estate and retirement planning",
      ]}
      details={[
        {
          heading: "The Difference Between Tax Planning and Tax Preparation",
          body: "Tax preparation is backward-looking — it reports what already happened. Tax planning is forward-looking — it changes what will happen. GFSCPAs focuses on planning first, so that by the time we prepare your return, the most important decisions have already been made. This distinction is the difference between paying what you owe and paying less than you might have.",
        },
        {
          heading: "Who Benefits Most from Proactive Tax Planning",
          body: "Business owners, high-income earners, retirees drawing from multiple income sources, real estate investors, and anyone going through a major financial event — a business sale, inheritance, divorce, or retirement — can benefit significantly from proactive tax planning. The earlier you start, the more options you have.",
        },
        {
          heading: "Our Tax Planning Process",
          body: "We begin with a thorough review of your current tax situation, income sources, deductions, and goals. From there, we develop a written tax plan with specific recommendations. We meet with you throughout the year to review progress and adjust as your situation changes. Nothing is left to chance.",
        },
        {
          heading: "The Cost of Waiting",
          body: "Every year that passes without a proactive tax plan is a year of missed opportunities. Decisions made in January are worth far more than decisions made in April. GFSCPAs helps you stay ahead of the calendar — and ahead of the IRS.",
        },
      ]}
      relatedServices={[
        { label: "Tax Preparation", href: "/services/tax-preparation" },
        { label: "Accounting & Tax Services", href: "/services/accounting-tax" },
        { label: "Retirement Planning", href: "/services/retirement-planning" },
        { label: "Estate & Trust Planning", href: "/services/estate-trust-planning" },
        { label: "Business Advisory", href: "/services/business-advisory" },
      ]}
      ctaHeadline="Stop paying more in taxes than you have to. Let's build a proactive plan."
    />
  );
}
