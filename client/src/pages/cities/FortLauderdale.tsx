import CityPageTemplate from "../../components/CityPageTemplate";
export default function FortLauderdale() {
  return (
    <CityPageTemplate
      city="Fort Lauderdale"
      county="Broward County"
      intro="GFSCPAs provides proactive CPA, tax planning, retirement planning, and financial advisory services to individuals, families, retirees, and businesses in Fort Lauderdale, Florida. Our Weston office serves clients throughout Broward County and the greater Fort Lauderdale area. With more than 35 years of experience, Frank Gutta, CPA, PFS has built a reputation as one of South Florida's most trusted and proactive CPA advisors."
      services={[
        "Individual & Business Tax Preparation",
        "Proactive Tax Planning",
        "Retirement Planning & Income Strategies",
        "Estate & Trust Planning",
        "IRS Representation",
        "Business Advisory & CFO Services",
        "Payroll Services",
        "Business Valuations",
        "Entity Structuring",
        "Financial Planning",
        "Cash Flow Management",
        "Business Succession Planning",
      ]}
      whyGFS="Fort Lauderdale clients choose GFSCPAs because we offer something rare in the accounting world: a CPA who is also a Personal Financial Specialist, with more than 35 years of experience, who takes a genuinely proactive approach to every client relationship. We coordinate your accounting, tax, retirement, and financial planning as a unified whole — not as separate, disconnected services. The result is better decisions, lower taxes, and greater financial confidence."
    />
  );
}
