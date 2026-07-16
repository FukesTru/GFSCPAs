import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function TaxPreparation() {
  return (
    <ServicePageTemplate
      title="Tax Preparation"
      subtitle="Accurate, timely preparation of individual, business, trust, and estate tax returns for clients in Weston and South Florida."
      intro="GFSCPAs prepares individual, business, trust, and estate tax returns with accuracy, attention to detail, and a commitment to finding every legitimate deduction available to you. With more than 35 years of experience, Frank Gutta, CPA, PFS brings a level of expertise that goes well beyond basic return preparation."
      benefits={[
        "Individual federal and state tax returns (Form 1040)",
        "Business returns: S-Corp (1120-S), C-Corp (1120), Partnership (1065)",
        "Trust and estate returns (Form 1041)",
        "Non-resident and foreign national tax returns",
        "Prior year returns and amended returns",
        "Multi-state tax returns",
        "Quarterly estimated tax calculations",
        "Secure document exchange via TaxDome client portal",
      ]}
      details={[
        { heading: "More Than Just Filing", body: "When we prepare your return, we are also reviewing it for planning opportunities. If we identify something that could have been done differently — or should be addressed before next year — we will tell you. Tax preparation at GFSCPAs is the starting point for a better financial plan, not the end of one." },
        { heading: "Accuracy You Can Count On", body: "Every return prepared by GFSCPAs is reviewed for accuracy, completeness, and planning opportunities. We do not rush. We do not miss things. And if we find something that needs attention — a missed deduction, an overlooked credit, or a potential audit risk — we address it before the return is filed." },
        { heading: "A Second Opinion Can Be Worth Thousands", body: "If you have had your taxes prepared elsewhere and want a second opinion, GFSCPAs offers return reviews. We have found significant errors — including one case where a client owed $26,000 that turned into a $1,800 refund after we identified an incorrect inclusion of foreign income. The right questions matter." },
        { heading: "Secure, Convenient Client Portal", body: "GFSCPAs uses TaxDome as our secure client portal. You can upload documents, review your return, sign electronically, and communicate with our team — all in one secure place. Access your portal at gfscpas.taxdome.com." },
      ]}
      relatedServices={[
        { label: "Tax Planning", href: "/services/tax-planning" },
        { label: "IRS Representation", href: "/services/irs-representation" },
        { label: "Accounting & Tax Services", href: "/services/accounting-tax" },
        { label: "Estate & Trust Planning", href: "/services/estate-trust-planning" },
      ]}
      ctaHeadline="Get your taxes prepared by a CPA who looks beyond the return."
    />
  );
}
