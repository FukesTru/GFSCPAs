import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function RetirementPlanning() {
  return (
    <ServicePageTemplate
      title="Retirement Planning"
      subtitle="Safe, structured retirement income strategies for individuals and families in Weston and South Florida."
      intro="Retirement planning is one of the most important financial decisions you will ever make — and one of the most complex. GFSCPAs helps individuals and families build a retirement income plan that is safe, structured, and designed to last. Frank Gutta, CPA, PFS is the author of Your Safe Retirement Roadmap and has helped hundreds of clients retire with confidence."
      benefits={[
        "Comprehensive retirement income analysis",
        "The 4 Bucket System for safe, structured retirement income",
        "Social Security optimization strategies",
        "Required Minimum Distribution (RMD) planning",
        "Roth conversion analysis and planning",
        "Long-term care planning and insurance review",
        "Pension and annuity income analysis",
        "Coordination of retirement income with tax planning",
      ]}
      details={[
        { heading: "The 4 Bucket System", body: "GFSCPAs uses a proven 4 Bucket System to structure retirement income — separating assets by time horizon and purpose to ensure you have income when you need it, growth potential for the future, and protection against market downturns. This approach has helped clients sleep soundly even during major market corrections." },
        { heading: "A Real Example: Securing a Widow's Financial Future", body: "A retiring schoolteacher came to us six months before leaving her career. Her late husband had handled all financial matters. She wanted to travel, spend time with grandchildren, pay off her son's mortgage, and never worry about money again. We built a plan that accomplished every goal — including long-term care coverage and an extra $1,500 per month above her needs. Weeks later, she called to say she finally felt secure." },
        { heading: "Retirement Planning and Tax Planning Work Together", body: "The tax decisions you make in retirement — when to draw from which accounts, how to manage RMDs, whether to convert to a Roth — can have a significant impact on how long your money lasts. GFSCPAs coordinates your retirement income plan with your tax plan so both work together." },
        { heading: "Your Safe Retirement Roadmap", body: "Frank Gutta, CPA, PFS is the author of Your Safe Retirement Roadmap — a practical guide to building a retirement income plan that is safe, structured, and designed to last. His approach is grounded in decades of experience helping real clients navigate the transition from accumulation to distribution." },
      ]}
      relatedServices={[
        { label: "Financial Planning", href: "/services/financial-planning" },
        { label: "Tax Planning", href: "/services/tax-planning" },
        { label: "Estate & Trust Planning", href: "/services/estate-trust-planning" },
        { label: "IRS Representation", href: "/services/irs-representation" },
      ]}
      ctaHeadline="Ready to build a retirement plan you can count on?"
    />
  );
}
