/**
 * GFSCPAs PageLayout — wraps all pages with Header + Footer
 * Also provides a page-level hero banner for inner pages
 */
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  heroImage?: string;
}

export default function PageLayout({ children, title, subtitle, heroImage }: PageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {title && (
        <div
          className="relative flex items-end"
          style={{
            minHeight: "260px",
            background: heroImage
              ? `linear-gradient(to bottom, rgba(26,31,20,0.65) 0%, rgba(26,31,20,0.75) 100%), url(${heroImage}) center/cover no-repeat`
              : "linear-gradient(135deg, #1a1f14 0%, #2d4a1e 100%)",
            paddingTop: "80px",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full text-center">
            <div className="section-label justify-center" style={{ color: "#b8922a" }}>
              GFSCPAs
            </div>
            <h1
              className="text-white mx-auto"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="mt-3 mx-auto"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "1.0625rem",
                  maxWidth: "700px",
                  lineHeight: 1.6,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
