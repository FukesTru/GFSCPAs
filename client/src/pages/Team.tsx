/**
 * GFSCPAs Team Page
 * Advisory Services Team + Virtual Family Office Team (57 entries, 56 unique people)
 * Design: Quiet Authority — forest green, warm off-white, gold accents
 */
import PageLayout from "../components/PageLayout";
import CTASection from "../components/CTASection";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let observer: IntersectionObserver;
    const raf = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => el.classList.add("visible"), delay);
            } else {
              el.classList.add("visible");
            }
            observer.unobserve(el);
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
    });
    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [delay]);
  return ref;
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal(delay);
  return <div ref={ref} className="fade-up">{children}</div>;
}

const advisoryTeam = [
  {
    name: "Frank Gutta",
    title: "CPA, PFS",
    role: "Principal — Tax & Insurance",
    photo: "/manus-storage/frank-gutta-live_47024737.png",
    fallback: "/manus-storage/frank-gutta-headshot_bc6ba522.jpg",
    bio: "Frank Gutta is a nationally-known and highly-respected Certified Public Accountant and Personal Financial Specialist. With more than 35 years of experience, Frank helps his clients safely achieve financial success, reduce their taxes, invest wisely, and prepare for a long, happy, and prosperous retirement. He is the author of two books — Your Safe Retirement Roadmap and Must-Know Tax Tips for Small Businesses — and is an authorized representative of Tarkenton Financial.",
    credentials: ["CPA — Certified Public Accountant", "PFS — Personal Financial Specialist", "AICPA Member", "35+ Years of Experience", "Author of Two Published Books"],
  },
  {
    name: "Rafael Ferrer, EA",
    title: "Enrolled Agent",
    role: "Co-Founder — Tax Strategy",
    photo: "/manus-storage/rafael-ferrer-live_7f5962c4.png",
    fallback: "/manus-storage/rafael-ferrer-live2_adb789ec.png",
    bio: "Rafael Ferrer is an Enrolled Agent specializing in tax strategy, business planning, and business valuation. With more than 20 years of experience, Rafael helps entrepreneurs and closely held businesses make informed financial decisions, optimize their tax positions, and plan strategically for growth, transactions, and long-term value creation.",
    credentials: ["Enrolled Agent (EA)", "20+ Years of Experience", "Tax Strategy & Business Planning", "IRS Representation", "Business Valuations"],
  },
  {
    name: "Cris Schemidt",
    title: "CFO & Office Manager",
    role: "Operations & Coordination",
    photo: "/manus-storage/cris-schemidt-correct_ec306ebf.png",
    fallback: "/manus-storage/diverse_clients_sm_53d1ee68.jpg",
    bio: "Cris Schemidt serves as Chief Financial Officer and Office Manager at GFSCPAs. Cris oversees the firm's administrative, financial, and internal coordination functions, ensuring that day-to-day operations run efficiently and that clients receive timely, consistent service.",
    credentials: ["Chief Financial Officer", "Office Manager", "Internal Controls & Compliance", "Firm Operations & Coordination"],
  },
];

const planningTeam = [
  {
    name: "Frank Gutta",
    title: "CPA, PFS",
    role: "Principal — Tax & Insurance",
    photo: "/manus-storage/frank-gutta-live_47024737.png",
    fallback: "/manus-storage/frank-gutta-headshot_bc6ba522.jpg",
    bio: "Frank Gutta is a nationally-known and highly-respected Certified Public Accountant and Personal Financial Specialist. With more than 35 years of experience, Frank helps his clients safely achieve financial success, reduce their taxes, invest wisely, and prepare for a long, happy, and prosperous retirement.",
    credentials: ["CPA — Certified Public Accountant", "PFS — Personal Financial Specialist", "AICPA Member", "35+ Years of Experience"],
  },
  {
    name: "Rafael Ferrer, EA",
    title: "Enrolled Agent",
    role: "Co-Founder — Tax Strategy",
    photo: "/manus-storage/rafael-ferrer-live_7f5962c4.png",
    fallback: "/manus-storage/rafael-ferrer-live2_adb789ec.png",
    bio: "Rafael Ferrer is an Enrolled Agent specializing in tax strategy, business planning, and business valuation. With more than 20 years of experience, Rafael helps entrepreneurs and closely held businesses make informed financial decisions and plan strategically for growth.",
    credentials: ["Enrolled Agent (EA)", "20+ Years of Experience", "Tax Strategy & Business Planning", "Business Valuations"],
  },
  {
    name: "Ian Welham",
    title: "Proactive Facilitator",
    role: "Planning Process Coordinator",
    photo: "/manus-storage/ian-welham-live_be0da33d.png",
    fallback: "/manus-storage/businessman_sm_fef7cafa.jpg",
    bio: "Ian Welham serves as the Proactive Facilitator at GFSCPAs — the local coordinator who keeps the planning process moving forward. Ian works directly with clients to identify planning priorities, schedule reviews, and ensure that nothing falls through the cracks between meetings.",
    credentials: ["Proactive Facilitator", "Planning Process Coordinator", "Client Relationship Management"],
  },
];

// VFO Team — 57 entries (56 unique; Darren Sugiyama listed twice with two specialties)
// Photo URLs scraped from live gfscpas.com/team/virtual-family-office
const vfoMembers = [
  { name: "Whitney Coon", specialty: "Accounting & Advisory Services", photo: "https://biz-diagnostic.com/img/expert/20260302103801_Whitney%20Coon.png" },
  { name: "Frank Gutta", specialty: "Tax and Insurance", photo: "https://biz-diagnostic.com/img/expert/20220127100206_Frank%20Gutta.png" },
  { name: "Andrew Lassise", specialty: "Technology and Cyber Security Specialist", photo: "https://biz-diagnostic.com/img/expert/20220208094100_Andrew%20Lassise.png" },
  { name: "Ashley Lupiani", specialty: "Life Insurance Solutions", photo: "https://biz-diagnostic.com/img/expert/20251002024623_Ashley%20Lupiani.png" },
  { name: "Bill Lloyd", specialty: "P3 Method: Better Retirement, Lasting Legacy", photo: "https://biz-diagnostic.com/img/expert/20251029023601_Bill%20Lloyd.png" },
  { name: "Boris Piskun", specialty: "Tax Mitigation Specialist using Solar Investment Strategies", photo: "https://biz-diagnostic.com/img/expert/20240229101207_Screenshot%202024-02-29%20100622.png" },
  { name: "Charles Riggs", specialty: "Research and Development Tax Credits", photo: "https://biz-diagnostic.com/img/expert/20230719101450_Charles%20Riggs.png" },
  { name: "Chase Ravsten", specialty: "Leveraged Deductions (Fee Simple)", photo: "https://biz-diagnostic.com/img/expert/20241203022315_Chase%20Ravsten.png" },
  { name: "Dan Zimanski", specialty: "Business Growth Consultant", photo: "https://biz-diagnostic.com/img/expert/20230115093825_Dan%20Zimanski.png" },
  { name: "Darren Sugiyama", specialty: "Premium Financing", photo: "https://biz-diagnostic.com/img/expert/20251002021002_Darren%20Sugiyama%20(150%20x%20150%20px)%20(1).png" },
  { name: "Darren Sugiyama", specialty: "The IRA Bailout Plan", photo: "https://biz-diagnostic.com/img/expert/20251002021036_Darren%20Sugiyama%20(150%20x%20150%20px)%20(1).png" },
  { name: "Deborah Snyder", specialty: "Increasing Enterprise Value and Small Business Growth, Scaling", photo: "https://biz-diagnostic.com/img/expert/20251002045833_Deb%20Snyder.png" },
  { name: "Frank Caputo", specialty: "ESOP Sell Side Advisory Services", photo: "https://biz-diagnostic.com/img/expert/20250718075746_Frank%20Caputo.png" },
  { name: "Jeff Stolper", specialty: "Cost Remediation Specialist", photo: "https://biz-diagnostic.com/img/expert/20230325025854_Jeff%20Stolper.png" },
  { name: "Jim Carlisle", specialty: "General Corporate Legal Work", photo: "https://biz-diagnostic.com/img/expert/20251210023744_Jim%20Carlisle.png" },
  { name: "Josh Malancuk", specialty: "Cost Remediation - Property Tax Reduction and Economic Incentives", photo: "https://biz-diagnostic.com/img/expert/20220804095421_Josh%20Malancuk.png" },
  { name: "Josh Yager", specialty: "Trust and Estate Settlement", photo: "https://biz-diagnostic.com/img/expert/20240326080125_Josh%20Yager.png" },
  { name: "Julian Movsesian", specialty: "Premium Financing and Advanced Life Insurance Solutions", photo: "https://biz-diagnostic.com/img/expert/20240625083355_Julian%20Movsesian.png" },
  { name: "Julio Gonzalez", specialty: "Cost Segregation plus Advanced Tax Incentives", photo: "https://biz-diagnostic.com/img/expert/20241123102958_Julio%20Gonzalez.png" },
  { name: "Keith Conway", specialty: "Real Estate Advisory Services", photo: "https://biz-diagnostic.com/img/expert/20240809085202_Keith%20Conway.png" },
  { name: "Loren Hollingsworth", specialty: "Structured Ownership Program", photo: "https://biz-diagnostic.com/img/expert/20220510014533_Loren%20Hollingsworth.png" },
  { name: "Marie Askew", specialty: "Specialist in SBA Lending in Mergers and Acquisitions and Owner-Occupied Real Estate", photo: "https://biz-diagnostic.com/img/expert/20250626084237_Marie%20Askew.png" },
  { name: "Mark Goodman", specialty: "Premium Financing - Premium Funding", photo: "https://biz-diagnostic.com/img/expert/20220413082731_Mark%20S.%20Goodman.png" },
  { name: "Mark Mrky", specialty: "Life Settlements", photo: "https://biz-diagnostic.com/img/expert/20240516071850_Mark%20Mrky.png" },
  { name: "Matt Miller", specialty: "Tax Incentives for Export Businesses", photo: "https://biz-diagnostic.com/img/expert/20220413082000_Matt%20Miller.png" },
  { name: "Michael Wessels", specialty: "Cryptocurrency & Digital Assets", photo: "https://biz-diagnostic.com/img/expert/20240226035653_Michael%20Wessels.png" },
  { name: "Mitch Nelson", specialty: "Disability Insurance Specialist", photo: "https://biz-diagnostic.com/img/expert/20240119033437_Mitch%20Nelson.png" },
  { name: "Patrick Lam", specialty: "Transformative Intangibles", photo: "https://biz-diagnostic.com/img/expert/20250926012528_Patrick%20Lam.png" },
  { name: "Reid Limpert", specialty: "Section 105 Voluntary Group Benefits Plans", photo: "https://biz-diagnostic.com/img/expert/20240410083419_Reid%20Limpert.png" },
  { name: "Timothy Gervais", specialty: "Energy Asset Tax Mitigation Strategies", photo: "https://biz-diagnostic.com/img/expert/20260311103458_Tim%20Gervais.png" },
  { name: "Scott Phillips", specialty: "Oil & Gas Developmental Drilling Programs", photo: "https://biz-diagnostic.com/img/expert/20230510084212_Scott-Phillips.png" },
  { name: "Steve DeTray", specialty: "Business Exit Planning & Certified Business Valuation", photo: "https://biz-diagnostic.com/img/expert/20240104121255_Steve%20DeTray.png" },
  { name: "Ted Jenkin", specialty: "Sell Side M&A/Exit Consulting For Founder Led Businesses", photo: "https://biz-diagnostic.com/img/expert/20240625084747_Ted%20Jenkin.png" },
  { name: "Ted Landgraf", specialty: "Project Financing Specialist", photo: "https://biz-diagnostic.com/img/expert/20251002022406_Ted%20Landgraf.png" },
  { name: "Tim Goering", specialty: "Sales Tactics Coach", photo: "https://biz-diagnostic.com/img/expert/20240326014838_Tim%20Goering.png" },
  { name: "Todd Lofgren", specialty: "Oil & Gas Drilling Funds", photo: "https://biz-diagnostic.com/img/expert/20251203090045_Todd%20Lofgren.png" },
  { name: "Tracy Armstrong", specialty: "Certified College Funding Specialist", photo: "https://biz-diagnostic.com/img/expert/20240226034518_Tracy%20Armstrong.png" },
  { name: "Van Carlson", specialty: "Tax code: 831(b)", photo: "https://biz-diagnostic.com/img/expert/20250819083031_Van%20Carlson.png" },
  { name: "Wilton White", specialty: "Digital Employees: Robotic Process Automation (RPA) and Artificial Intelligence (AI) Solutions", photo: "https://biz-diagnostic.com/img/expert/20250513090454_Wilton%20White.png" },
  { name: "Aleks Dyo", specialty: "Charitable Gift Financing / Advanced Pension Plans", photo: "https://biz-diagnostic.com/img/expert/20251002032446_Aleks%20Dyo.png" },
  { name: "Ami Kassar", specialty: "Business Financing Specialist", photo: "https://biz-diagnostic.com/img/expert/20220123101223_Ami%20Kassar.png" },
  { name: "Andy Ruhland", specialty: "Employee Benefits Specialist", photo: "https://biz-diagnostic.com/img/expert/20240315113459_Andy%20Ruhland%20(2).png" },
  { name: "Ben Golden", specialty: "Tax Resolution & Tax Planning, Cinematic Returns", photo: "https://biz-diagnostic.com/img/expert/20251002031141_Ben%20Golden%20(1).png" },
  { name: "Bruce Gendein", specialty: "Advanced Qualified Plans", photo: "https://biz-diagnostic.com/img/expert/20220123115940_Bruce%20Gendein.png" },
  { name: "Chris Hall", specialty: "Estate Planning", photo: "https://biz-diagnostic.com/img/expert/20251003025509_Chris%20Hall.png" },
  { name: "Christi Horan", specialty: "Annuity Solutions", photo: "https://biz-diagnostic.com/img/expert/20251002024437_Christi%20Horan.png" },
  { name: "Craig Stone", specialty: "Advanced Tax and Estate Planning", photo: "https://biz-diagnostic.com/img/expert/20220123122620_Craig%20Stone.png" },
  { name: "Derek Spitzer", specialty: "Captive Insurance Companies", photo: "https://biz-diagnostic.com/img/expert/20220123090830_Derek%20Spitzer.png" },
  { name: "Don Feldman", specialty: "Business Exit Planning", photo: "https://biz-diagnostic.com/img/expert/20251002032148_Don%20Feldman%20(1).png" },
  { name: "James Duggan", specialty: "Advanced Tax and Estate Planning", photo: "https://biz-diagnostic.com/img/expert/20220123124954_James%20Duggan.png" },
  { name: "Jeff Deckman", specialty: "Leadership, Cultural and Business Growth Expert", photo: "https://biz-diagnostic.com/img/expert/20251002030643_Jeff%20Deckman%20(1).png" },
  { name: "Joel Grushkin", specialty: "Cost Segregation", photo: "https://biz-diagnostic.com/img/expert/20220123010341_Joel%20Grushkin.png" },
  { name: "John Frazier", specialty: "Charitable and Legacy Planning Specialist", photo: "https://biz-diagnostic.com/img/expert/20220123010501_John%20Frazier.png" },
  { name: "Jon Randall", specialty: "Advisor Growth Coach", photo: "https://biz-diagnostic.com/img/expert/20220124081624_Jon%20Randall.png" },
  { name: "Noel Ciambotti", specialty: "Merchant Processing Specialist - Credit Cards and ACH", photo: "https://biz-diagnostic.com/img/expert/20251003025434_Noel%20Ciambotti.png" },
  { name: "Randy Fox", specialty: "Advanced Tax and Estate Planning", photo: "https://biz-diagnostic.com/img/expert/20251002025543_Randy%20Fox.png" },
  { name: "Ron Elwood", specialty: "Outsourced CFO Specialist", photo: "https://biz-diagnostic.com/img/expert/20251002045613_Ron%20Elwood.png" },
];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return parts[0][0].toUpperCase();
}

export default function Team() {
  return (
    <PageLayout
      title="Our Team"
      subtitle="GFSCPAs — Gutta Stewart Ferrer & Schemidt. A dedicated team of CPAs, Enrolled Agents, and financial professionals serving clients throughout South Florida and beyond."
    >
      {/* Advisory Services Team */}
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-label justify-center">Advisory Services Team</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
                The Advisory Services Team
              </h2>
              <p className="mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1.0625rem", lineHeight: 1.65 }}>
                The Advisory Services Team is your primary point of contact — the professionals who know your situation, manage your account, and coordinate your services day to day.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-10">
            {advisoryTeam.map((member, i) => (
              <FadeUp key={member.name} delay={i * 100}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start p-8 rounded-lg"
                  style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", borderLeft: "3px solid #2d4a1e" }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="rounded-full overflow-hidden mb-4"
                      style={{ width: "160px", height: "160px", border: "3px solid #eef2eb", boxShadow: "0 4px 16px rgba(45,74,30,0.12)" }}
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center top" }}
                        onError={(e) => { (e.target as HTMLImageElement).src = member.fallback; }}
                      />
                    </div>
                    <div className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1f14" }}>{member.name}</div>
                    <div className="text-xs font-bold uppercase tracking-wider mt-1" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>{member.role}</div>
                    <div className="text-sm mt-1" style={{ color: "#5a6b52", fontFamily: "'Source Sans 3', sans-serif" }}>{member.title}</div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="leading-relaxed mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1rem", lineHeight: 1.75 }}>
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.credentials.map((c) => (
                        <span key={c} className="text-xs px-3 py-1 rounded" style={{ background: "#eef2eb", color: "#2d4a1e", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600 }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Proactive Planning Team */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-label justify-center">Proactive Planning Team</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
                Your Local Eyes and Ears
              </h2>
              <p className="mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1.0625rem", lineHeight: 1.65 }}>
                The Proactive Planning Team keeps you focused on priorities and identifies opportunities before they pass.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-10">
            {planningTeam.map((member, i) => (
              <FadeUp key={member.name + "-planning"} delay={i * 100}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start p-8 rounded-lg"
                  style={{ background: "#f9f7f4", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", borderLeft: "3px solid #b8922a" }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="rounded-full overflow-hidden mb-4"
                      style={{ width: "160px", height: "160px", border: "3px solid #eef2eb", boxShadow: "0 4px 16px rgba(45,74,30,0.12)" }}
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center top" }}
                        onError={(e) => { (e.target as HTMLImageElement).src = member.fallback; }}
                      />
                    </div>
                    <div className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1f14" }}>{member.name}</div>
                    <div className="text-xs font-bold uppercase tracking-wider mt-1" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>{member.role}</div>
                    <div className="text-sm mt-1" style={{ color: "#5a6b52", fontFamily: "'Source Sans 3', sans-serif" }}>{member.title}</div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="leading-relaxed mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#3d4a38", fontSize: "1rem", lineHeight: 1.75 }}>
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.credentials.map((c) => (
                        <span key={c} className="text-xs px-3 py-1 rounded" style={{ background: "#fdf6e3", color: "#7a5c1e", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600 }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Family Office Team */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-label justify-center">Virtual Family Office Team</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#1a1f14" }}>
                National Specialists. Local Coordination.
              </h2>
              <p className="mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1.0625rem", lineHeight: 1.65 }}>
                GFSCPAs coordinates a Virtual Family Office of national specialists — each an expert in their field, working alongside your GFSCPAs team to address every dimension of your financial life.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {vfoMembers.map((member, i) => (
              <FadeUp key={`${member.name}-${i}`} delay={Math.min((i % 10) * 40, 350)}>
                <div
                  className="text-center p-4 rounded-lg flex flex-col items-center gap-2"
                  style={{
                    background: "#f9f7f4",
                    border: "1px solid rgba(45,74,30,0.08)",
                    minHeight: "180px",
                  }}
                >
                  <div
                    className="rounded-full overflow-hidden"
                    style={{
                      width: "64px",
                      height: "64px",
                      border: "2px solid #eef2eb",
                      boxShadow: "0 2px 8px rgba(45,74,30,0.10)",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center top" }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = "#2d4a1e";
                          parent.style.display = "flex";
                          parent.style.alignItems = "center";
                          parent.style.justifyContent = "center";
                          const span = document.createElement("span");
                          span.style.color = "white";
                          span.style.fontWeight = "700";
                          span.style.fontSize = "1rem";
                          span.textContent = getInitials(member.name);
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: "0.8125rem", color: "#1a1f14", lineHeight: 1.3 }}>
                    {member.name}
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.6875rem", color: "#5a6b52", lineHeight: 1.4, textAlign: "center" }}>
                    {member.specialty}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200}>
            <div className="text-center mt-14">
              <p className="mb-6 max-w-xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52", fontSize: "1rem", lineHeight: 1.65 }}>
                The Virtual Family Office model means your GFSCPAs team coordinates these specialists on your behalf — so you get the right expertise at the right time, without managing multiple advisor relationships.
              </p>
              <Link href="/virtual-family-office" className="btn-primary">
                Learn About the VFO Model <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
