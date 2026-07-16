import ServicePageTemplate from "../../components/ServicePageTemplate";
export default function IRSRepresentation() {
  return (
    <ServicePageTemplate
      title="IRS Representation"
      subtitle="Experienced advocacy in IRS audits, back taxes, penalty abatement, and tax controversy resolution for South Florida taxpayers."
      intro="Receiving a notice from the IRS can be stressful and confusing. GFSCPAs provides experienced representation before the IRS and state tax authorities — protecting your rights, communicating on your behalf, and working toward the best possible resolution."
      benefits={[
        "IRS audit representation and examination support",
        "Response to IRS notices and correspondence",
        "Back tax resolution and installment agreements",
        "Penalty abatement requests",
        "Offer in Compromise negotiations",
        "Innocent spouse relief",
        "State tax authority representation",
        "Tax lien and levy resolution",
      ]}
      details={[
        { heading: "Do Not Face the IRS Alone", body: "The IRS has experienced agents and attorneys on their side. You deserve experienced representation on yours. GFSCPAs communicates directly with the IRS on your behalf, so you do not have to navigate the process alone or risk saying something that could make your situation worse." },
        { heading: "From Notices to Full Audits", body: "Whether you received a simple CP2000 notice or are facing a full field audit, GFSCPAs has the experience to handle it. We review your records, prepare a thorough response, and advocate for the most favorable outcome available under the law." },
        { heading: "Penalty Abatement and Back Tax Resolution", body: "If you owe back taxes or have accumulated penalties, there may be options available to reduce what you owe. GFSCPAs evaluates your eligibility for penalty abatement, installment agreements, and Offers in Compromise — and pursues the most favorable resolution your situation allows." },
        { heading: "What to Do When You Receive an IRS Notice", body: "Do not ignore it. Do not call the IRS without representation. Contact GFSCPAs immediately. The sooner we review the notice, the more options you have. Most IRS issues are resolvable — but they become harder to resolve the longer they are left unaddressed." },
      ]}
      relatedServices={[
        { label: "Tax Planning", href: "/services/tax-planning" },
        { label: "Tax Preparation", href: "/services/tax-preparation" },
        { label: "Accounting & Tax Services", href: "/services/accounting-tax" },
      ]}
      ctaHeadline="Facing an IRS issue? Let GFSCPAs handle it on your behalf."
    />
  );
}
