/**
 * GFSCPAs Privacy Policy Page
 * Content: Exact text from PrivacyPolicy.docx — do not modify
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

export default function PrivacyPolicy() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="Frank Gutta &amp; Co CPAs PA d/b/a GFSCPAs"
    >
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-sm mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#8a9a84" }}>
              Effective Date: January 1, 2026
            </p>
            <p className="mb-6" style={bodyStyle}>
              Frank Gutta &amp; Co CPAs PA, doing business as GFSCPAs ("GFSCPAs," "we," "us," or "our"), respects your privacy and is committed to protecting the personal information you provide to us through our website, forms, communications, and services.
            </p>
            <p className="mb-10" style={bodyStyle}>
              This Privacy Policy explains what information we collect, how we use it, how we protect it, how we communicate with you, and the choices you have regarding your information.
            </p>
          </FadeUp>

          {/* Important Notice */}
          <FadeUp delay={50}>
            <div
              className="rounded-lg p-6 mb-10"
              style={{ background: "rgba(45,74,30,0.07)", border: "1px solid rgba(45,74,30,0.15)" }}
            >
              <p style={{ ...bodyStyle, fontWeight: 700, color: "#1a1f14", marginBottom: "0.75rem" }}>
                Important Notice Regarding SMS/Text Messaging Data
              </p>
              <p style={bodyStyle}>
                GFSCPAs does not sell, rent, trade, or share customer mobile phone numbers, SMS opt-in data, or text messaging consent records with third parties or affiliates for marketing or promotional purposes.
              </p>
              <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                Mobile information and text messaging opt-in data and consent will not be shared with third parties or affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent. This information will not be shared with any third parties, except with service providers as necessary to deliver the text messages you have requested.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-10">
            {/* Section 1 */}
            <FadeUp delay={50}>
              <div>
                <h2 style={headingStyle}>1. Information We Collect</h2>
                <p style={bodyStyle}>We may collect the following types of information:</p>

                <p style={subheadingStyle}>Personal Information</p>
                <p style={bodyStyle}>This may include:</p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Mailing address</li>
                  <li>Business name, if applicable</li>
                  <li>Information submitted through website forms</li>
                  <li>Appointment or consultation details</li>
                  <li>Service interests or requests</li>
                  <li>Communication preferences</li>
                  <li>SMS, phone, or email opt-in records and timestamps</li>
                </ul>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Because GFSCPAs provides accounting, tax, financial planning, and advisory-related services, you may also choose to provide financial, tax, business, or personal information needed to evaluate or provide services. Such information is handled with appropriate care and confidentiality.
                </p>

                <p style={subheadingStyle}>Website and Technical Information</p>
                <p style={bodyStyle}>When you visit our website, we may automatically collect certain information, including:</p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Referring website</li>
                  <li>Website usage patterns</li>
                  <li>Cookies and similar technologies</li>
                </ul>

                <p style={subheadingStyle}>Client Communication Information</p>
                <p style={bodyStyle}>We may keep records of:</p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Website inquiries</li>
                  <li>Phone, email, or SMS communications</li>
                  <li>Appointment requests</li>
                  <li>Service requests</li>
                  <li>Client feedback</li>
                  <li>Communication history and preferences</li>
                </ul>
              </div>
            </FadeUp>

            {/* Section 2 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>2. How We Use Your Information</h2>
                <p style={bodyStyle}>We may use the information we collect to:</p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Respond to your inquiries</li>
                  <li>Schedule consultations or appointments</li>
                  <li>Provide accounting, tax, financial planning, advisory, and related services</li>
                  <li>Communicate with you about requested services</li>
                  <li>Send appointment reminders and service-related updates</li>
                  <li>Process payments or service requests, when applicable</li>
                  <li>Improve our website, services, and client experience</li>
                  <li>Maintain accurate business and client records</li>
                  <li>Protect against fraud, unauthorized activity, or misuse</li>
                  <li>Comply with legal, regulatory, tax, accounting, and professional obligations</li>
                  <li>Maintain records of consent and communication preferences</li>
                </ul>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  We do not use your personal information for purposes that are incompatible with the reason it was collected unless permitted by law or with your consent.
                </p>
              </div>
            </FadeUp>

            {/* Section 3 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>3. SMS Messaging and Text Communication</h2>

                <p style={subheadingStyle}>SMS Program Terms</p>
                <p style={bodyStyle}>
                  By providing your phone number and opting in to receive text messages from GFSCPAs, you agree to receive text messages related to our services. These may include appointment reminders, consultation updates, client service communications, and important account or service-related notices.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>Message frequency may vary depending on your interactions with us.</p>
                <p style={{ ...bodyStyle, marginTop: "0.25rem" }}>Message and data rates may apply.</p>
                <p style={{ ...bodyStyle, marginTop: "0.25rem" }}>Consent to receive text messages is not a condition of purchasing any service.</p>

                <p style={subheadingStyle}>SMS Consent</p>
                <p style={bodyStyle}>
                  You will only receive SMS messages from us if you have provided consent or otherwise requested communication from us in a manner permitted by applicable law.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  We may collect and maintain records of SMS opt-ins, including your phone number, the date and time of consent, the method of opt-in, and related consent information where available.
                </p>

                <p style={subheadingStyle}>SMS Opt-Out Instructions</p>
                <p style={bodyStyle}>
                  You may opt out of SMS messages at any time by replying STOP to any text message you receive from us.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  After you opt out, you may receive one final confirmation message. After that, we will not send further text messages unless you re-opt in.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  You may also contact us directly to request that we stop sending SMS messages.
                </p>

                <p style={subheadingStyle}>SMS Help Instructions</p>
                <p style={bodyStyle}>
                  For help, reply HELP to any message you receive from us or contact us using the information listed in the "Contact Us" section below.
                </p>

                <p style={subheadingStyle}>Carrier Disclaimer</p>
                <p style={bodyStyle}>Wireless carriers are not liable for delayed or undelivered messages.</p>
                <p style={{ ...bodyStyle, marginTop: "0.25rem" }}>
                  Supported carriers may include AT&amp;T, Verizon, T-Mobile, and other major or regional carriers.
                </p>

                <p style={subheadingStyle}>SMS Data Protection Statement</p>
                <p style={bodyStyle}>
                  No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Information may be shared with service providers only as necessary to support the delivery of text messages and related services, such as messaging platforms, SMS aggregators, CRM providers, or customer support providers. These providers are authorized to use the information only as needed to perform services on our behalf.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  All other use case categories exclude text messaging originator opt-in data and consent. This information will not be shared with any third parties for marketing or promotional purposes.
                </p>
              </div>
            </FadeUp>

            {/* Section 4 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>4. How We Share Information</h2>
                <p style={bodyStyle}>We do not sell, rent, or trade your personal information.</p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>We may share information only in limited circumstances, including:</p>

                <p style={subheadingStyle}>Service Providers</p>
                <p style={bodyStyle}>
                  We may share information with trusted service providers who help us operate our business and provide services, such as:
                </p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Website hosting providers</li>
                  <li>CRM or client communication platforms</li>
                  <li>Appointment scheduling tools</li>
                  <li>Payment processors</li>
                  <li>Email service providers</li>
                  <li>SMS messaging providers and aggregators</li>
                  <li>IT support providers</li>
                  <li>Professional advisors or service vendors</li>
                </ul>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  These providers are only permitted to use your information as necessary to provide services to us and are expected to maintain appropriate confidentiality and security protections.
                </p>

                <p style={subheadingStyle}>Legal, Regulatory, or Professional Obligations</p>
                <p style={bodyStyle}>We may disclose information when necessary to:</p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Comply with applicable laws, regulations, subpoenas, court orders, or legal processes</li>
                  <li>Respond to lawful requests by government or regulatory authorities</li>
                  <li>Protect our rights, privacy, safety, property, clients, or the public</li>
                  <li>Detect, prevent, or address fraud, security, or technical issues</li>
                  <li>Meet accounting, tax, legal, or professional recordkeeping requirements</li>
                </ul>

                <p style={subheadingStyle}>Business Transfers</p>
                <p style={bodyStyle}>
                  If GFSCPAs is involved in a merger, acquisition, reorganization, sale of assets, or similar business transaction, personal information may be transferred as part of that transaction, subject to appropriate confidentiality protections.
                </p>

                <p style={subheadingStyle}>SMS Consent Data</p>
                <p style={bodyStyle}>
                  SMS opt-in data, mobile phone numbers, and text messaging consent records will not be sold, rented, traded, or shared with third parties or affiliates for marketing or promotional purposes. Such information may only be shared with service providers as necessary to deliver text messaging services requested by you.
                </p>
              </div>
            </FadeUp>

            {/* Section 5 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>5. Data Security</h2>
                <p style={bodyStyle}>
                  We use reasonable administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, loss, misuse, disclosure, alteration, or destruction.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>These safeguards may include:</p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Secure access controls</li>
                  <li>Password-protected systems</li>
                  <li>Limited access to sensitive information</li>
                  <li>Use of secure service providers</li>
                  <li>Employee and contractor confidentiality expectations</li>
                  <li>Secure data transmission where appropriate</li>
                  <li>Ongoing review of security practices</li>
                </ul>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  However, no method of transmission over the Internet or method of electronic storage is completely secure. While we work to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </FadeUp>

            {/* Section 6 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>6. Cookies and Tracking Technologies</h2>
                <p style={bodyStyle}>Our website may use cookies and similar technologies to:</p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Improve website functionality</li>
                  <li>Understand how visitors use the website</li>
                  <li>Analyze website traffic</li>
                  <li>Remember preferences</li>
                  <li>Improve user experience</li>
                  <li>Measure the performance of website content and services</li>
                </ul>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  You can control cookies through your browser settings. Disabling cookies may affect certain website features.
                </p>
              </div>
            </FadeUp>

            {/* Section 7 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>7. Your Choices and Rights</h2>
                <p style={bodyStyle}>Depending on applicable law, you may have the right to:</p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                  <li>Request access to personal information we maintain about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of certain personal information</li>
                  <li>Withdraw consent for future communications</li>
                  <li>Opt out of marketing emails</li>
                  <li>Opt out of SMS messages by replying STOP</li>
                  <li>Request information about how your data is used</li>
                </ul>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  To make a privacy-related request, please contact us using the information in the "Contact Us" section below.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  We may need to verify your identity before fulfilling certain requests.
                </p>
              </div>
            </FadeUp>

            {/* Section 8 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>8. Email Communications</h2>
                <p style={bodyStyle}>
                  If you receive marketing or promotional emails from us, you may opt out by using the unsubscribe link in the email or by contacting us directly.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Even if you opt out of marketing emails, we may still send you non-promotional communications related to services, appointments, transactions, or ongoing client matters.
                </p>
              </div>
            </FadeUp>

            {/* Section 9 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>9. Third-Party Links</h2>
                <p style={bodyStyle}>
                  Our website may contain links to third-party websites, tools, portals, or services. We are not responsible for the privacy practices, content, or security of third-party websites.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  We encourage you to review the privacy policies of any third-party websites or services you visit.
                </p>
              </div>
            </FadeUp>

            {/* Section 10 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>10. Client Portals and Third-Party Tools</h2>
                <p style={bodyStyle}>
                  GFSCPAs may use secure third-party platforms, portals, scheduling tools, forms, or communication systems to provide services and communicate with clients.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Information submitted through those tools may also be governed by the privacy policies and terms of the applicable third-party provider.
                </p>
              </div>
            </FadeUp>

            {/* Section 11 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>11. Children's Privacy</h2>
                <p style={bodyStyle}>
                  Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  If we become aware that we have collected personal information from a child under 13, we will take appropriate steps to delete it.
                </p>
              </div>
            </FadeUp>

            {/* Section 12 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>12. Changes to This Privacy Policy</h2>
                <p style={bodyStyle}>
                  We may update this Privacy Policy from time to time. The updated version will be posted on our website with a revised effective date.
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Your continued use of our website or services after any updates means you acknowledge the updated Privacy Policy.
                </p>
              </div>
            </FadeUp>

            {/* Section 13 */}
            <FadeUp delay={100}>
              <div>
                <h2 style={headingStyle}>13. Contact Us</h2>
                <p style={bodyStyle}>
                  If you have questions about this Privacy Policy or how your information is handled, please contact us:
                </p>
                <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
                  Frank Gutta &amp; Co CPAs PA d/b/a GFSCPAs<br />
                  1920 N Commerce Pkwy, Suite 1920-3<br />
                  Weston, FL 33326<br />
                  Phone: 954-482-9681<br />
                  Email: vip@gfscpas.com<br />
                  Website: gfscpas.com
                </p>
                <p style={{ ...bodyStyle, marginTop: "1.5rem", fontStyle: "italic" }}>
                  By using our website or services, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
