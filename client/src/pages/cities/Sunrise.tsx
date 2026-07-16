import CityPageTemplate from "../../components/CityPageTemplate";
export default function Sunrise() {
  return (
    <CityPageTemplate
      city="Sunrise"
      county="Broward County"
      intro="GFSCPAs provides proactive CPA, tax planning, and financial advisory services to individuals, families, retirees, and businesses in Sunrise, Florida. Our office in Weston is conveniently located to serve clients throughout Broward County, including Sunrise. With more than 35 years of experience and the CPA, PFS designation, Frank Gutta brings a level of expertise and personalization that most accounting firms simply cannot match."
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
      whyGFS="Sunrise residents and business owners choose GFSCPAs because we offer something most local accounting firms do not: a truly proactive approach. We do not wait for tax season to start thinking about your situation. We work with you throughout the year — identifying opportunities, addressing risks, and making sure your accounting, tax, and financial planning are all working together."
    />
  );
}
