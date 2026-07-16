import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function SuccessionPlanning() {
  return (
    <ServicePageTemplate
      title="Business Succession Planning"
      subtitle="Structured planning to transition your business to the next generation or a qualified buyer — on your terms."
      intro="Every business owner will eventually exit their business. Whether you plan to sell to a third party, pass it to a family member, or transition to key employees, GFSCPAs helps you plan that exit years in advance — so you maximize the value you receive, minimize the taxes you pay, and protect the legacy you have built."
      benefits={[
        "Succession plan development and documentation",
        "Business valuation for succession purposes",
        "Buy-sell agreement review and planning",
        "Family business transition planning",
        "Key employee retention and incentive planning",
        "Tax-efficient exit structure analysis",
        "Coordination with estate planning attorneys",
        "Timing and readiness assessment",
      ]}
      details={[
        { heading: "Start Planning Before You Need To", body: "The biggest mistake business owners make is waiting too long to plan their exit. A well-structured succession plan takes years to implement properly. GFSCPAs helps you start the process early, so you have options — and time to execute them." },
        { heading: "Family Business Transitions Require Special Care", body: "Transferring a business to a family member involves more than legal documents. It requires careful tax planning, fair valuation, and clear communication about roles and expectations. GFSCPAs helps families navigate these transitions in a way that protects relationships as well as assets." },
        { heading: "Tax-Efficient Transitions", body: "The structure of a business sale or transfer has enormous tax implications. Whether you are selling to a third party, gifting to family members, or transitioning to employees through an ESOP, GFSCPAs analyzes the tax impact of each option and helps you choose the most advantageous path." },
        { heading: "Protecting the Legacy You Have Built", body: "A succession plan is not just about money — it is about ensuring that what you have built continues to thrive after you step away. GFSCPAs helps you define what a successful transition looks like and builds a plan to achieve it." },
      ]}
      relatedServices={[
        { label: "Business Valuations", href: "/services/business-valuations" },
        { label: "Business Advisory", href: "/services/business-advisory" },
        { label: "Estate & Trust Planning", href: "/services/estate-trust-planning" },
        { label: "Tax Planning", href: "/services/tax-planning" },
      ]}
      ctaHeadline="Plan your exit on your terms. Let's start the conversation."
    />
  );
}
