import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call Booked — IdeaBuild",
  robots: { index: false },
};

interface Props {
  searchParams: Promise<{ email?: string }>;
}

export default async function CallConfirmedPage({ searchParams }: Props) {
  const { email } = await searchParams;

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#FAFAF7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 2rem",
      }}
    >
      <div style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}>
        {/* Checkmark icon */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="23" stroke="#B8942A" strokeWidth="1.5" />
          <path
            d="M14 24L21 31L34 17"
            stroke="#B8942A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#B8942A",
            marginTop: "1.5rem",
            marginBottom: 0,
          }}
        >
          CALL BOOKED
        </p>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2.8rem",
            fontWeight: 300,
            color: "#1A1A15",
            marginTop: "0.5rem",
            marginBottom: 0,
            lineHeight: 1.15,
          }}
        >
          You&apos;re on the calendar.
        </h1>

        {/* Body */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            color: "#3A3A35",
            lineHeight: 1.7,
            marginTop: "1rem",
          }}
        >
          {email
            ? `A calendar invite is on its way to ${email}. We'll speak soon — come with your app idea and any questions about the programme.`
            : "A calendar invite is on its way to your inbox. We'll speak soon — come with your app idea and any questions about the programme."}
        </p>

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #E2E0D8",
            margin: "2rem 0",
          }}
        />

        {/* What happens next */}
        <div style={{ textAlign: "left" }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#7A7A72",
              marginBottom: "1rem",
              marginTop: 0,
            }}
          >
            WHAT HAPPENS NEXT
          </p>

          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              {
                n: "01",
                text: "Check your email for the calendar invite with the video call link",
              },
              {
                n: "02",
                text: "We'll speak for 30 minutes — bring your idea, I'll bring honest feedback",
              },
              {
                n: "03",
                text: "If IdeaBuild is the right fit, I'll send you the payment link to secure your seat",
              },
            ].map(({ n, text }) => (
              <li
                key={n}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    color: "#B8942A",
                    paddingTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  {n}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "#3A3A35",
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #E2E0D8",
            margin: "2rem 0",
          }}
        />

        {/* Footer note */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: "#7A7A72",
            textAlign: "center",
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          Need to reschedule? Use the link in your calendar invite.
          <br />
          Questions before the call?{" "}
          <a
            href="mailto:ideabuild@thenewleverage.com"
            style={{ color: "#7A7A72", textDecoration: "underline" }}
          >
            ideabuild@thenewleverage.com
          </a>
        </p>
      </div>
    </main>
  );
}
