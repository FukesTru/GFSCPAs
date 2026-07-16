import CityPageTemplate from "../../components/CityPageTemplate";
export default function Plantation() {
  return (
    <CityPageTemplate
      city="Plantation"
      county="Broward County"
      intro="GFSCPAs serves individuals, families, retirees, and businesses in Plantation, Florida with the same proactive, comprehensive approach that has made us a trusted name in South Florida CPA services. Located in nearby Weston, our office is just minutes from Plantation — and we serve clients throughout Broward County. Whether you are a business owner looking for strategic tax planning, a retiree seeking a safe income strategy, or an individual who wants more than just a tax preparer, GFSCPAs is ready to help."
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
      whyGFS="Plantation clients choose GFSCPAs for the same reason clients throughout South Florida do — because Frank Gutta, CPA, PFS brings more than 35 years of experience, a proactive planning approach, and a genuine commitment to every client's success. We do not just prepare your return and send you on your way. We work with you throughout the year to identify opportunities, reduce your tax burden, and help you make better financial decisions."
    />
  );
}
