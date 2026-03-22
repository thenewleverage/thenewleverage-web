import type { Metadata } from "next";
import { EmailCapture } from "@/components/home/email-capture";

export const metadata: Metadata = {
  title: "The New Leverage",
  description: "For professionals navigating the AI shift.",
  openGraph: {
    title: "The New Leverage",
    description: "For professionals navigating the AI shift.",
    url: "https://thenewleverage.com",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The New Leverage",
    description: "For professionals navigating the AI shift.",
    images: ["/og-image.png"],
  },
};

export default function RootHomePage() {
  return (
    <>
      {/* Minimal wordmark nav */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "60px",
          background: "rgba(250,250,247,0.96)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            height: "100%",
            padding: "0 clamp(1.5rem, 6vw, 5rem)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.12em",
              color: "var(--ink)",
            }}
          >
            THE NEW LEVERAGE
          </span>
        </div>
      </header>

      {/* Hero — two-column grid */}
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "clamp(80px, 10vw, 120px)",
          paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
          paddingRight: "clamp(1.5rem, 6vw, 5rem)",
        }}
      >
        <div
          className="home-hero-grid hero-fade-up"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* LEFT — brand + email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B8942A",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "1px",
                  background: "#B8942A",
                  flexShrink: 0,
                }}
              />
              EST. 2025 · SINGAPORE
            </div>

            {/* Display heading */}
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3.5rem, 6vw, 6rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "var(--ink)",
                margin: 0,
              }}
            >
              The New
              <br />
              Leverage.
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "18px",
                fontWeight: 300,
                color: "#3A3A35",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: "420px",
              }}
            >
              For professionals navigating the AI shift.
            </p>

            {/* Email capture */}
            <EmailCapture />
          </div>

          {/* RIGHT — product cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Section label */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7A7A72",
                marginBottom: "0.5rem",
              }}
            >
              WHAT WE BUILD
            </div>

            {/* IdeaBuild card */}
            <a
              href="https://ideabuild.thenewleverage.com"
              className="product-card"
              style={{
                display: "block",
                background: "#FFFFFF",
                border: "1px solid #E2E0D8",
                borderRadius: "2px",
                padding: "1.75rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#B8942A",
                  marginBottom: "0.75rem",
                }}
              >
                WORKSHOP
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.75rem",
                  fontWeight: 300,
                  color: "var(--ink)",
                  margin: "0 0 0.5rem 0",
                }}
              >
                IdeaBuild
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#3A3A35",
                  lineHeight: 1.65,
                  margin: "0 0 1.25rem 0",
                }}
              >
                Build your idea. Learn to build an app with zero technical
                skills.
              </p>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#B8942A",
                }}
              >
                Learn more →
              </span>
            </a>

            {/* Venlidate card */}
            <a
              href="https://venlidate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="product-card"
              style={{
                display: "block",
                background: "#FFFFFF",
                border: "1px solid #E2E0D8",
                borderRadius: "2px",
                padding: "1.75rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#B8942A",
                  marginBottom: "0.75rem",
                }}
              >
                AI TOOL
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.75rem",
                  fontWeight: 300,
                  color: "var(--ink)",
                  margin: "0 0 0.5rem 0",
                }}
              >
                Venlidate
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#3A3A35",
                  lineHeight: 1.65,
                  margin: "0 0 1.25rem 0",
                }}
              >
                AI-powered startup coach for your 0 to 1 journey.
              </p>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#B8942A",
                }}
              >
                Visit →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #E2E0D8",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
          paddingRight: "clamp(1.5rem, 6vw, 5rem)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#7A7A72",
              letterSpacing: "0.06em",
            }}
          >
            © 2025 The New Leverage
          </span>
        </div>
      </footer>
    </>
  );
}
