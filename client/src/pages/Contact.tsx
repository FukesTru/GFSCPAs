/**
 * GFSCPAs Contact Page
 * GHL calendar placeholder, contact form placeholder, contact details
 */
import { useEffect } from "react";
import PageLayout from "../components/PageLayout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Hide the GHL chat widget on the Contact page (A2P compliance)
function useHideChatWidget() {
  useEffect(() => {
    const WIDGET_ID = "6a5465e7d166a8719fe23e2c";
    const SELECTORS = [
      `[data-widget-id="${WIDGET_ID}"]`,
      'iframe[src*="leadconnectorhq.com/chat-widget"]',
      '#LeadConnector-chat-widget',
      '.lc-chat-widget-container',
    ];

    const hideAll = () => {
      SELECTORS.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          (el as HTMLElement).style.setProperty('display', 'none', 'important');
          (el as HTMLElement).style.setProperty('visibility', 'hidden', 'important');
          (el as HTMLElement).style.setProperty('opacity', '0', 'important');
          (el as HTMLElement).style.setProperty('pointer-events', 'none', 'important');
        });
      });
    };

    // Hide immediately and on any DOM mutation
    hideAll();
    const observer = new MutationObserver(hideAll);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      // Restore visibility when leaving the page
      SELECTORS.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          (el as HTMLElement).style.removeProperty('display');
          (el as HTMLElement).style.removeProperty('visibility');
          (el as HTMLElement).style.removeProperty('opacity');
          (el as HTMLElement).style.removeProperty('pointer-events');
        });
      });
    };
  }, []);
}

export default function Contact() {
  useHideChatWidget();
  return (
    <PageLayout
      title="Contact GFSCPAs"
      subtitle="Schedule a consultation, ask a question, or reach our office directly. We are here to help."
    >
      <section className="py-20" style={{ background: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="section-label">Get in Touch</div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.875rem", fontWeight: 700, color: "#1a1f14" }}>
                  Reach Our Office
                </h2>
                <div className="brand-divider mt-3" />
              </div>

              <div className="space-y-4">
                <a href="tel:9544829681" className="flex items-start gap-3 p-4 rounded-lg bg-white hover:shadow-md transition-shadow" style={{ border: "1px solid rgba(45,74,30,0.1)" }}>
                  <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: "#2d4a1e" }}>
                    <Phone size={15} color="white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>Main Phone</div>
                    <div className="font-semibold text-sm" style={{ color: "#1a1f14", fontFamily: "'Source Sans 3', sans-serif" }}>954-482-9681</div>
                  </div>
                </a>

                <a href="https://wa.me/17542613495" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg bg-white hover:shadow-md transition-shadow" style={{ border: "1px solid rgba(45,74,30,0.1)" }}>
                  <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: "#25D366" }}>
                    <Phone size={15} color="white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>WhatsApp</div>
                    <div className="font-semibold text-sm" style={{ color: "#1a1f14", fontFamily: "'Source Sans 3', sans-serif" }}>754-261-3495</div>
                  </div>
                </a>

                <a href="mailto:vip@gfscpas.com" className="flex items-start gap-3 p-4 rounded-lg bg-white hover:shadow-md transition-shadow" style={{ border: "1px solid rgba(45,74,30,0.1)" }}>
                  <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: "#2d4a1e" }}>
                    <Mail size={15} color="white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>Email</div>
                    <div className="font-semibold text-sm" style={{ color: "#1a1f14", fontFamily: "'Source Sans 3', sans-serif" }}>vip@gfscpas.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-white" style={{ border: "1px solid rgba(45,74,30,0.1)" }}>
                  <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: "#2d4a1e" }}>
                    <MapPin size={15} color="white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>Office Address</div>
                    <div className="font-semibold text-sm" style={{ color: "#1a1f14", fontFamily: "'Source Sans 3', sans-serif" }}>
                      1920 N Commerce Pkwy<br />Suite 1920-3<br />Weston, FL 33326
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-white" style={{ border: "1px solid rgba(45,74,30,0.1)" }}>
                  <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: "#2d4a1e" }}>
                    <Clock size={15} color="white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>Office Hours</div>
                    <div className="text-sm" style={{ color: "#3d4a38", fontFamily: "'Source Sans 3', sans-serif" }}>
                      Monday – Friday<br />9:00 AM – 5:00 PM EST
                    </div>
                  </div>
                </div>
              </div>

              {/* TaxDome */}
              <div className="p-5 rounded-lg" style={{ background: "#2d4a1e" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#b8922a", fontFamily: "'Source Sans 3', sans-serif" }}>Existing Clients</div>
                <div className="font-bold text-white text-sm mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Access Your Client Portal</div>
                <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Source Sans 3', sans-serif" }}>
                  Log in to TaxDome to access your documents, messages, and tax returns.
                </p>
                <a href="https://gfscpas.taxdome.com/login" target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center" style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}>
                  Client Portal Login
                </a>
              </div>
            </div>

            {/* Booking + Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* GHL Contact Form */}
              <div className="p-8 rounded-lg" style={{ background: "white", border: "1px solid rgba(45,74,30,0.1)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#1a1f14" }}>
                  Send Us a Message
                </h3>
                <p className="text-sm mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "#5a6b52" }}>
                  Fill out the form below and we will be in touch within one business day.
                </p>
                <div style={{ width: "100%", minHeight: "542px" }}>
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/QXKArFhz1Qn4OEbBme4v"
                    style={{ width: "100%", height: "542px", border: "none", borderRadius: "10px" }}
                    id="inline-QXKArFhz1Qn4OEbBme4v"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Website Form (GFSCPAs)"
                    data-height="542"
                    data-layout-iframe-id="inline-QXKArFhz1Qn4OEbBme4v"
                    data-form-id="QXKArFhz1Qn4OEbBme4v"
                    title="Website Form (GFSCPAs)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Placeholder */}
      {/* PLACEHOLDER: Insert GHL-hosted AI chatbot widget code here */}
    </PageLayout>
  );
}
