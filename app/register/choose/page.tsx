import { redirect } from "next/navigation";

import { ChoiceCard } from "@/components/register/choice-card";

interface Props {
  searchParams: Promise<{ name?: string; email?: string }>;
}

export default async function ChoosePage({ searchParams }: Props) {
  const { name, email } = await searchParams;

  if (!email) {
    redirect("/register");
  }
  const firstName = name ? name.split(" ")[0] : null;

  const paymentHref = email
    ? `/register/payment?email=${encodeURIComponent(email)}`
    : "/register/payment";

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .choice-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 2rem",
        }}
      >
        <div style={{ maxWidth: "600px", width: "100%" }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#B8942A",
              marginBottom: "1.25rem",
            }}
          >
            REGISTRATION RECEIVED
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.25rem, 5vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--ink)",
              margin: "0 0 1rem 0",
            }}
          >
            {firstName ? `Almost there, ${firstName}.` : "Almost there."}
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              fontWeight: 300,
              color: "#3A3A35",
              margin: 0,
            }}
          >
            One last step to secure your seat. Choose how you&apos;d like to
            proceed.
          </p>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid #E2E0D8",
              margin: "2rem 0",
            }}
          />

          {/* Cards */}
          <div
            className="choice-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            <ChoiceCard
              variant="primary"
              tag="READY TO COMMIT"
              heading="Pay now"
              description="Complete your registration immediately. Your seat is secured the moment payment clears."
              features={[
                "Instant confirmation email",
                "Seat guaranteed immediately",
                "Full refund if programme doesn't run",
              ]}
              ctaText="Secure my seat — S$2,000 →"
              ctaHref={paymentHref}
            />

            <ChoiceCard
              variant="secondary"
              tag="WANT TO TALK FIRST"
              heading="Speak with Terence"
              description="Book a 30-minute call to discuss whether IdeaBuild is right for you. No pressure."
              features={[
                "30 minutes, video call",
                "Your questions answered directly",
                "Payment link sent after if you'd like to proceed",
              ]}
              ctaText="Book a 30-min call →"
              ctaHref="https://calendly.com/terencefong/ideabuild-30-mins"
              ctaExternal
              ctaNote="Your registration details have been saved."
            />
          </div>

          {/* Footer note */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              color: "#7A7A72",
              textAlign: "center",
              margin: "2rem 0 0 0",
            }}
          >
            Questions? Email{" "}
            <a
              href="mailto:ideabuild@thenewleverage.com"
              style={{ color: "#7A7A72", textDecoration: "underline" }}
            >
              ideabuild@thenewleverage.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
