import CityPageTemplate from "../../components/CityPageTemplate";
export default function Davie() {
  return (
    <CityPageTemplate
      city="Davie"
      county="Broward County"
      intro="GFSCPAs serves individuals, families, retirees, and businesses in Davie, Florida with comprehensive CPA, tax planning, and financial advisory services. Located in nearby Weston, our office is easily accessible to clients throughout Broward County, including Davie. Frank Gutta, CPA, PFS has more than 35 years of experience helping clients in South Florida take a more proactive approach to their accounting, taxes, retirement, and financial planning."
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
      whyGFS="Davie clients choose GFSCPAs because we bring a level of expertise and engagement that goes well beyond what most local accounting firms offer. Frank Gutta, CPA, PFS is one of fewer than 6,000 professionals in the country to hold the Personal Financial Specialist designation — which means he is qualified to advise on the full range of financial planning issues, not just taxes. When you work with GFSCPAs, you get a trusted advisor who understands your complete financial picture."
    />
  );
}
