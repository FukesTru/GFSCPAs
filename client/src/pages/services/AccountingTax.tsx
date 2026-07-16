import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function AccountingTax() {
  return (
    <ServicePageTemplate
      title="Accounting & Tax Services"
      subtitle="Bookkeeping, financial statements, tax preparation, and compliance for individuals and businesses in Weston and South Florida."
      intro="Accurate books and timely tax compliance are the foundation of every sound financial decision. GFSCPAs provides a full range of accounting and tax services for individuals, families, and businesses throughout South Florida — delivered with more than 35 years of CPA experience and a commitment to proactive, personalized service. We do not just process numbers. We help you understand them."
      benefits={[
        "Monthly, quarterly, or annual bookkeeping and financial statement preparation",
        "Individual, business, trust, and estate tax return preparation",
        "Tax compliance for S-Corps, C-Corps, LLCs, and partnerships",
        "Payroll tax filings and compliance",
        "QuickBooks setup, cleanup, and ongoing support",
        "Year-end tax planning to minimize your liability",
        "Coordination with your financial advisors, attorneys, and other professionals",
        "Secure document exchange via TaxDome client portal",
      ]}
      details={[
        {
          heading: "Bookkeeping & Financial Statements",
          body: "Accurate financial records are the foundation of every good business decision. GFSCPAs provides bookkeeping services tailored to your business — from basic monthly reconciliations to full-service accounting with monthly financial statements, cash flow analysis, and management reporting. When your books are clean and current, you can make decisions with confidence.",
        },
        {
          heading: "Tax Preparation for Individuals & Businesses",
          body: "We prepare individual, business, trust, and estate tax returns with accuracy and attention to detail. Our team stays current on tax law changes and looks for every legitimate deduction and credit available to you — not just what is obvious. Every return we prepare is reviewed through a planning lens, not just a compliance lens.",
        },
        {
          heading: "A Proactive Approach to Accounting",
          body: "Unlike firms that simply process returns, GFSCPAs takes a proactive approach. We review your situation throughout the year, identify opportunities before the deadline, and coordinate your accounting and tax work with your broader financial plan. The goal is not just accurate records — it is better financial outcomes.",
        },
        {
          heading: "Why GFSCPAs?",
          body: "With more than 35 years of CPA experience, Frank Gutta, CPA, PFS brings a depth of knowledge that goes well beyond basic bookkeeping. Clients trust GFSCPAs because we treat every engagement as a long-term relationship — not a transaction. Many of our clients have been with us for decades.",
        },
      ]}
      relatedServices={[
        { label: "Tax Planning", href: "/services/tax-planning" },
        { label: "Tax Preparation", href: "/services/tax-preparation" },
        { label: "Payroll Services", href: "/services/payroll" },
        { label: "Business Advisory", href: "/services/business-advisory" },
        { label: "Part-Time CFO Services", href: "/services/cfo-services" },
      ]}
      ctaHeadline="Ready for a more proactive approach to your accounting and taxes?"
    />
  );
}
