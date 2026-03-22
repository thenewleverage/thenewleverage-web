
interface Props {
  searchParams: Promise<{ email?: string }>;
}

export default async function ConfirmPage({ searchParams }: Props) {
  const { email } = await searchParams;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 2rem",
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
          REGISTRATION RECEIVED
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
          Success. <em style={{ fontStyle: "italic", color: "#B8942A" }}>You&apos;re in.</em>
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
          Thank you for your registration and payment. We have 
          {email ? (
            <>
              {" "}received your details for{" "}
              <span style={{ color: "var(--ink)", fontWeight: 500 }}>{email}</span>.
            </>
          ) : " received your details."}
        </p>

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
          Our team is now verifying the PayNow transfer. You will receive a final 
          confirmation email and your Welcome Pack once your seat is secured (usually within 24 hours).
        </p>

        {/* Secondary note */}
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "#7A7A72",
            margin: 0,
            paddingTop: "2rem",
            borderTop: "1px solid #E2E0D8"
          }}
        >
          <p style={{ margin: "0 0 0.5rem 0" }}>
            If you have any urgent questions, please contact us:
          </p>
          <a
            href="mailto:ideabuild@thenewleverage.com"
            style={{ color: "#B8942A", textDecoration: "none" }}
          >
            ideabuild@thenewleverage.com
          </a>
        </div>
      </div>
    </div>
  );
}
