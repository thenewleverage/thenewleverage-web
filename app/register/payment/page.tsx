// TODO: Replace with Stripe Checkout Session redirect
// See PRD Section 9 for Stripe implementation details

import Image from "next/image";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ email?: string }>;
}

export default async function PaymentPage({ searchParams }: Props) {
  const { email } = await searchParams;
  const confirmUrl = `/register/confirm${email ? `?email=${encodeURIComponent(email)}` : ""}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 2rem 80px",
      }}
    >
      <div style={{ maxWidth: "600px", width: "100%" }}>
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B8942A",
            marginBottom: "1.25rem",
          }}
        >
          COMPLETE REGISTRATION
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--ink)",
            margin: "0 0 1.5rem 0",
          }}
        >
          Scan to secure your seat.
        </h1>

        {/* Body */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            fontWeight: 300,
            color: "#3A3A35",
            lineHeight: 1.7,
            margin: "0 0 2.5rem 0",
          }}
        >
          For the founding cohort, we are processing payments manually via PayNow. 
          Scan the QR code below using your banking app (DBS, OCBC, UOB, etc.) to complete your registration.
        </p>

        {/* Step-by-step instructions */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
            {/* QR Code */}
            <div style={{ 
              background: "#fff", 
              padding: "1rem", 
              border: "1px solid #E2E0D8",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
            }}>
              <Image 
                src="/images/paynow-qr.png" 
                alt="PayNow QR Code" 
                width={200} 
                height={200}
                style={{ display: "block" }}
              />
              <div style={{ 
                textAlign: "center", 
                marginTop: "0.75rem",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "#7A7A72",
                fontWeight: 600,
                letterSpacing: "0.05em"
              }}>
                PAYNOW
              </div>
            </div>

            {/* Instructions */}
            <div style={{ flex: "1", minWidth: "250px" }}>
              <ol style={{ 
                margin: 0, 
                padding: "0 0 0 1.25rem",
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                color: "#3A3A35",
                lineHeight: 1.8
              }}>
                <li style={{ marginBottom: "0.75rem" }}>Scan QR code with your banking app</li>
                <li style={{ marginBottom: "0.75rem" }}>Confirm payment amount: <strong>S$2,000</strong></li>
                <li style={{ marginBottom: "1.5rem" }}>
                  <span style={{ color: "#B8942A", fontWeight: 600 }}>CRITICAL:</span> Insert your <strong>email address</strong> in the reference/comments field so we can track your payment.
                </li>
              </ol>

              {/* Confirmation Button */}
              <Link
                href={confirmUrl}
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#FAFAF7",
                  background: "#0D0D0B",
                  padding: "14px 32px",
                  borderRadius: "2px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "background 0.2s"
                }}
              >
                I&apos;ve made the payment →
              </Link>
            </div>
          </div>
        </div>

        {/* Order summary box */}
        <div
          style={{
            background: "#FAF6EC",
            border: "1px solid #E8D499",
            borderRadius: "4px",
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: "0.4rem",
            }}
          >
            S$2,000 · IdeaBuild · The New Leverage
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#7A7A72",
              letterSpacing: "0.06em",
            }}
          >
            Founding cohort · 23 May 2026 · Singapore CBD
          </div>
        </div>

        {/* Note */}
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "#7A7A72",
            lineHeight: 1.6,
            margin: 0,
            padding: "1.5rem 0",
            borderTop: "1px solid #E2E0D8"
          }}
        >
          <p style={{ margin: "0 0 0.5rem 0" }}>
            Once we receive your payment, we will confirm your seat within 24 hours.
          </p>
          <p style={{ margin: 0 }}>
            Questions? Contact us at{" "}
            <a
              href="mailto:ideabuild@thenewleverage.com"
              style={{ color: "#B8942A", textDecoration: "none" }}
            >
              ideabuild@thenewleverage.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
