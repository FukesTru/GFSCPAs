import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function Payroll() {
  return (
    <ServicePageTemplate
      title="Payroll Services"
      subtitle="Reliable, accurate payroll processing for businesses of all sizes in Weston and South Florida."
      intro="Payroll is one of the most time-consuming and compliance-sensitive tasks a business owner faces. GFSCPAs provides reliable payroll processing services that keep your employees paid accurately and on time, your payroll taxes filed correctly, and your business in compliance with federal and state requirements."
      benefits={[
        "Weekly, bi-weekly, semi-monthly, or monthly payroll processing",
        "Direct deposit and paper check options",
        "Federal and state payroll tax filings (941, 940, UCT-6)",
        "W-2 and 1099 preparation and filing",
        "New hire reporting",
        "Garnishment and deduction processing",
        "Payroll reports and records management",
        "Integration with accounting and bookkeeping",
      ]}
      details={[
        { heading: "Payroll Compliance Is Not Optional", body: "Payroll tax errors are among the most common — and most costly — compliance issues businesses face. The IRS and Florida Department of Revenue assess significant penalties for late or incorrect filings. GFSCPAs handles your payroll with the same attention to detail we bring to every engagement." },
        { heading: "Accurate, On-Time, Every Time", body: "Your employees depend on being paid correctly and on time. GFSCPAs processes payroll reliably, handles all required filings, and keeps your records organized — so payroll is one less thing you have to worry about." },
        { heading: "Coordinated with Your Accounting", body: "Because GFSCPAs also handles bookkeeping and tax preparation for many of our clients, we can ensure your payroll data flows seamlessly into your financial statements and tax returns — eliminating duplicate data entry and reducing the risk of errors." },
      ]}
      relatedServices={[
        { label: "Accounting & Tax Services", href: "/services/accounting-tax" },
        { label: "Entity Structuring", href: "/services/entity-structuring" },
        { label: "Business Advisory", href: "/services/business-advisory" },
        { label: "Part-Time CFO Services", href: "/services/cfo-services" },
      ]}
      ctaHeadline="Let GFSCPAs handle your payroll so you can focus on your business."
    />
  );
}
