import CityPageTemplate from "../../components/CityPageTemplate";
export default function Weston() {
  return (
    <CityPageTemplate
      city="Weston"
      county="Broward County"
      intro="GFSCPAs is based in Weston, Florida — and has been serving individuals, families, retirees, and business owners in the Weston community for decades. Our office is located at 1920 N Commerce Pkwy, Suite 1920-3, Weston, FL 33326, making us one of the most accessible CPA firms in the area. Whether you need tax preparation, proactive tax planning, retirement planning, or business advisory services, GFSCPAs brings more than 35 years of CPA experience to every client relationship."
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
      whyGFS="Weston residents and business owners choose GFSCPAs because we are local, experienced, and genuinely invested in our clients' success. Frank Gutta, CPA, PFS has been serving the Weston community for more than 35 years — building relationships based on trust, honesty, and proactive guidance. We are not a national chain or a seasonal tax office. We are your neighbors, and we treat your financial situation with the same care we would want for our own."
    />
  );
}
