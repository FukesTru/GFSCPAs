/**
 * GFSCPAs Terms & Conditions Page
 * Content: Exact text from Terms&Conditions.docx — do not modify
 */
import PageLayout from "../components/PageLayout";
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
            if (delay > 0) setTimeout(() => el.classList.add("visible"), delay);
            else el.classList.add("visible");
            observer.unobserve(el);
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
    });
    return () => { cancelAnimationFrame(raf); observer?.disconnect(); };
  }, [delay]);
  return ref;
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal(delay);
  return <div ref={ref} className="fade-up">{children}</div>;
}

const bodyStyle: React.CSSProperties = {
  fontFamily: "'Source Sans 3', sans-serif",
  color: "#3d4a38",
  fontSize: "1rem",
  lineHeight: 1.8,
};

const headingStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "#1a1f14",
  marginBottom: "0.75rem",
};

const subheadingStyle: React.CSSProperties = {
  fontFamily: "'Source Sans 3', sans-serif",
  fontSize: "1rem",
  fontWeight: 700,
  color: "#1a1f14",
  marginBottom: "0.5rem",
  marginTop: "1rem",
};

export default function TermsConditions() {
  return (
    <PageLayout
      title="Terms &amp; Conditions"
      subtitle="Frank Gutta &amp; Co CPAs PA d/b/a GFSCPAs"
    >
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-sm mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#8a9a84" }}>
              Effective Date: January 1, 2026
            </p>
            <p className="mb-8" style={bodyStyle}>
              These Terms &amp; Conditions ("Terms") govern your use of the website, communications, forms, scheduling tools, text messaging services, and related services provided by Frank Gutta &amp; Co CPAs PA, doing business as GFSCPAs ("GFSCPAs," "we," "us," or "our").
            </p>
            <p className="mb-10" style={bodyStyle}>
              By using our website or services, you agree to these Terms and to our Privacy Policy.
            </p>
          </FadeUp>

          <div className="space-y-10">
            {/* Section 1 */}
            <FadeUp delay={50}>
              <div>
                <h2 style={headingStyle}>1. SMS Messaging Terms &amp; Compliance</h2>
                <p style={subheadingStyle}>Program Description</p>
                <p style={bodyStyle}>
                  GFSCPAs may send SMS/text messages to individuals who have provided their phone number and opted in to receive text communications from us.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>Our SMS messaging program may include:</p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Appointment confirmations</li>
                  <li>Appointment reminders</li>
                  <li>Consultation updates</li>
                  <li>Scheduling or rescheduling notices</li>
                  <li>Client service communications</li>
                  <li>Responses to inquiries</li>
                  <li>Important account or service-related updates</li>
                  <li>Customer support communications</li>
                </ul>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Messages are related to services you have requested, appointments you have scheduled, or communications you have initiated with GFSCPAs.
                </p>

                <p style={subheadingStyle}>SMS Opt-In Consent</p>
                <p style={bodyStyle}>
                  By providing your mobile phone number and opting in through a website form, scheduling form, contact form, checkbox, written consent, or other approved method, you agree to receive SMS/text messages from GFSCPAs.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Consent to receive text messages is not a condition of purchasing any service.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Opt-in consent must be provided through a clear and intentional action, such as checking a consent box that is not pre-selected or submitting a form that clearly discloses SMS messaging terms.
                </p>

                <p style={subheadingStyle}>Message Frequency</p>
                <p style={bodyStyle}>
                  Message frequency may vary based on your appointment schedule, service requests, and interactions with GFSCPAs.
                </p>

                <p style={subheadingStyle}>Message and Data Rates</p>
                <p style={bodyStyle}>
                  Message and data rates may apply to messages sent to you from us and to messages you send to us. Please contact your wireless provider for questions about your text or data plan.
                </p>

                <p style={subheadingStyle}>Opt-Out Instructions</p>
                <p style={bodyStyle}>
                  You may cancel SMS messages at any time by replying STOP to any text message you receive from us.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  After you reply STOP, we may send one final confirmation message to confirm that you have been unsubscribed. After that, you will no longer receive SMS messages from us unless you opt in again.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  To rejoin, you may opt in again through the same method you used originally or by otherwise providing renewed consent.
                </p>

                <p style={subheadingStyle}>Help Instructions</p>
                <p style={bodyStyle}>
                  For help, reply HELP to any text message you receive from us.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>You may also contact us directly:</p>
                <p style={{ ...bodyStyle, marginTop: "0.25rem" }}>Phone: 954-482-9681</p>
                <p style={bodyStyle}>Email: vip@gfscpas.com</p>

                <p style={subheadingStyle}>Carrier Disclaimer</p>
                <p style={bodyStyle}>Wireless carriers are not liable for delayed or undelivered messages.</p>

                <p style={subheadingStyle}>Supported Carriers</p>
                <p style={bodyStyle}>
                  Our SMS program is intended to work with major U.S. wireless carriers, including AT&amp;T, Verizon, T-Mobile, and other major or regional carriers. Carrier availability may vary.
                </p>

                <p style={subheadingStyle}>Age Restriction</p>
                <p style={bodyStyle}>You must be at least 18 years old to participate in our SMS messaging program.</p>

                <p style={subheadingStyle}>SMS Privacy and Data Sharing</p>
                <p style={bodyStyle}>
                  GFSCPAs does not sell, rent, trade, or share mobile phone numbers, SMS opt-in data, or text messaging consent records with third parties or affiliates for marketing or promotional purposes.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Mobile information and text messaging opt-in data and consent will not be shared with third parties or affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent. This information will not be shared with any third parties, except with service providers as necessary to deliver text messages you have requested.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  For more information about how we collect, use, and protect personal information, please review our Privacy Policy at: gfscpas.com/privacy-policy
                </p>
              </div>
            </FadeUp>

            {/* Section 2 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>2. General Website Terms</h2>
                <p style={bodyStyle}>
                  This website is owned and operated by Frank Gutta &amp; Co CPAs PA d/b/a GFSCPAs.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  By accessing or using this website, you agree to use the website in accordance with these Terms, our Privacy Policy, and any additional terms that may apply to specific services, forms, portals, or tools available through the website.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  We may update these Terms from time to time. Any updates will be posted on this website with a revised effective date. Your continued use of the website after changes are posted means you accept the updated Terms.
                </p>
              </div>
            </FadeUp>

            {/* Section 3 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>3. No Professional Advice Without Engagement</h2>
                <p style={bodyStyle}>
                  The information provided on this website is for general informational purposes only and should not be considered tax, accounting, legal, financial, investment, or professional advice.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Viewing this website, submitting a form, sending a message, scheduling a consultation, or communicating with GFSCPAs does not create a CPA-client, advisor-client, or other professional relationship unless and until a separate written engagement agreement has been signed by both you and GFSCPAs.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  You should not act or refrain from acting based on information on this website without seeking professional advice specific to your situation.
                </p>
              </div>
            </FadeUp>

            {/* Section 4 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>4. Services</h2>
                <p style={bodyStyle}>
                  GFSCPAs may provide accounting, tax, financial planning, retirement planning, business advisory, and related professional services.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  The availability, scope, and terms of any services will be determined separately and may be subject to a written engagement agreement, professional standards, applicable laws, and client acceptance procedures.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  We reserve the right to decline or discontinue services where appropriate or required.
                </p>
              </div>
            </FadeUp>

            {/* Section 5 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>5. No Guarantees</h2>
                <p style={bodyStyle}>
                  GFSCPAs does not guarantee any specific tax outcome, financial result, investment result, savings amount, refund amount, audit outcome, business result, or legal result.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Any examples, articles, educational content, or service descriptions on the website are for general informational purposes and should not be interpreted as guarantees or promises.
                </p>
              </div>
            </FadeUp>

            {/* Section 6 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>6. Intellectual Property Rights</h2>
                <p style={bodyStyle}>
                  This website and the materials available on it, including text, graphics, logos, images, page layouts, service descriptions, and other content, are owned by or licensed to GFSCPAs and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  You may view, download, or print individual pages from the website for personal, non-commercial use only, provided that you do not remove copyright, trademark, or proprietary notices.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  You may not copy, reproduce, modify, republish, upload, post, transmit, sell, distribute, create derivative works from, or exploit website content without prior written permission from GFSCPAs.
                </p>
              </div>
            </FadeUp>

            {/* Section 7 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>7. User Submissions</h2>
                <p style={bodyStyle}>
                  If you submit information through our website, forms, email, SMS, scheduling tools, portals, or other communication channels, you represent that the information you provide is accurate and that you have the right to submit it.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  You are responsible for ensuring that any information you provide is complete, accurate, and not misleading.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Do not submit confidential, sensitive, or time-sensitive information through general website forms unless the form or portal is specifically intended for that purpose.
                </p>
              </div>
            </FadeUp>

            {/* Section 8 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>8. Client Portals and Third-Party Tools</h2>
                <p style={bodyStyle}>
                  GFSCPAs may use third-party platforms, portals, scheduling tools, payment processors, communication systems, or other technology providers to support our services.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Your use of those third-party tools may be subject to separate terms and privacy policies provided by the applicable third party.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  GFSCPAs is not responsible for the content, security, availability, or practices of third-party websites or platforms that we do not control.
                </p>
              </div>
            </FadeUp>

            {/* Section 9 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>9. Third-Party Links</h2>
                <p style={bodyStyle}>
                  Our website may contain links to third-party websites or resources.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  These links are provided for convenience only. We do not control and are not responsible for third-party websites, content, privacy practices, products, or services.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  A link to a third-party website does not imply endorsement, sponsorship, or approval by GFSCPAs.
                </p>
              </div>
            </FadeUp>

            {/* Section 10 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>10. Online Payments and Transactions</h2>
                <p style={bodyStyle}>
                  If online payments or transactions are made available through this website or through a third-party provider, payment processing may be handled by third-party payment processors.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  GFSCPAs is not responsible for the security or performance of third-party payment systems except as required by applicable law.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  All payments, fees, refunds, and service terms may be governed by a separate agreement, invoice, engagement letter, or payment processor terms.
                </p>
              </div>
            </FadeUp>

            {/* Section 11 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>11. Account Registration and Passwords</h2>
                <p style={bodyStyle}>
                  Certain services or portals may require account registration or login credentials.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  You are responsible for maintaining the confidentiality of your username, password, and account access credentials.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  You agree to notify us promptly if you believe your account or credentials have been accessed or used without authorization.
                </p>
              </div>
            </FadeUp>

            {/* Section 12 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>12. Prohibited Uses</h2>
                <p style={bodyStyle}>You agree not to use this website or our communication systems to:</p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Violate any law or regulation</li>
                  <li>Submit false, misleading, or fraudulent information</li>
                  <li>Interfere with website security or functionality</li>
                  <li>Attempt to gain unauthorized access to systems or data</li>
                  <li>Upload or transmit malware, viruses, or harmful code</li>
                  <li>Harass, abuse, threaten, or harm others</li>
                  <li>Copy, scrape, or misuse website content</li>
                  <li>Use the website for any unlawful or unauthorized purpose</li>
                </ul>
              </div>
            </FadeUp>

            {/* Section 13 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>13. Disclaimer of Warranties</h2>
                <p style={bodyStyle}>
                  This website and its content are provided on an "as is" and "as available" basis.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  To the fullest extent permitted by law, GFSCPAs disclaims all warranties, whether express or implied, including warranties of accuracy, reliability, merchantability, fitness for a particular purpose, non-infringement, and uninterrupted website availability.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  We do not guarantee that the website will be error-free, secure, uninterrupted, or free from viruses or harmful components.
                </p>
              </div>
            </FadeUp>

            {/* Section 14 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>14. Limitation of Liability</h2>
                <p style={bodyStyle}>
                  To the fullest extent permitted by law, GFSCPAs and its owners, officers, employees, contractors, agents, affiliates, and service providers shall not be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages arising from or related to your use of the website, communications, third-party tools, or website content.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  This limitation applies even if we have been advised of the possibility of such damages.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Some jurisdictions do not allow certain limitations of liability, so some limitations may not apply to you.
                </p>
              </div>
            </FadeUp>

            {/* Section 15 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>15. Indemnification</h2>
                <p style={bodyStyle}>
                  You agree to indemnify and hold harmless GFSCPAs and its owners, officers, employees, contractors, agents, affiliates, and service providers from and against any claims, liabilities, damages, losses, costs, or expenses arising out of or related to:
                </p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Your use of the website</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any law or third-party right</li>
                  <li>Information you submit through the website or related tools</li>
                  <li>Your misuse of our services or communication systems</li>
                </ul>
              </div>
            </FadeUp>

            {/* Section 16 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>16. Termination or Restriction of Access</h2>
                <p style={bodyStyle}>
                  We reserve the right to suspend, restrict, or terminate your access to the website, forms, tools, portals, or communication channels at any time if we believe you have violated these Terms, misused the website, or engaged in unlawful or inappropriate conduct.
                </p>
              </div>
            </FadeUp>

            {/* Section 17 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>17. Governing Law</h2>
                <p style={bodyStyle}>
                  These Terms are governed by the laws of the State of Florida, without regard to conflict of law principles.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Any dispute arising from or related to these Terms, the website, or our services shall be handled in the appropriate state or federal courts located in Florida, unless otherwise required by law or agreed in writing.
                </p>
              </div>
            </FadeUp>

            {/* Section 18 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>18. Changes to These Terms</h2>
                <p style={bodyStyle}>
                  We may update these Terms from time to time. The latest version will be posted on our website with the effective date listed above.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Your continued use of the website or services after updated Terms are posted means you accept the updated Terms.
                </p>
              </div>
            </FadeUp>

            {/* Section 19 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>19. Contact Us</h2>
                <p style={bodyStyle}>If you have questions about these Terms &amp; Conditions, please contact us:</p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Frank Gutta &amp; Co CPAs PA d/b/a GFSCPAs<br />
                  1920 N Commerce Pkwy, Suite 1920-3<br />
                  Weston, FL 33326<br />
                  Phone: 954-482-9681<br />
                  Email: vip@gfscpas.com<br />
                  Website: gfscpas.com
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
