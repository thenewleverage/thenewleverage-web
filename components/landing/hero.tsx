import Link from "next/link";

export function Hero() {
  return (
    <section
      style={{
        paddingTop: "160px",
        paddingBottom: "clamp(60px, 8vw, 100px)",
        paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
        paddingRight: "clamp(1.5rem, 6vw, 5rem)",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >

      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* LEFT COLUMN */}
        <div className="hero-fade-up" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
            IDEABUILD — SINGAPORE — MAY 2026
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 5.5vw, 5.2rem)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            You walk in with an <em style={{ fontStyle: "italic", color: "#B8942A" }}>idea.</em>
            <br />
            You walk out with an <em style={{ fontStyle: "italic", color: "#B8942A" }}>app.</em>
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              fontWeight: 300,
              color: "#3A3A35",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: 0,
            }}
          >
            A one-day workshop for senior professionals who have a business idea — and no time to wait for someone else to build it.
          </p>

          {/* Meta row */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { label: "DATE", value: "Saturday, 23 May 2026" },
              { label: "LOCATION", value: "Singapore CBD" },
              { label: "INVESTMENT", value: "S$2,000" },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#7A7A72",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#0D0D0B",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link
              href="/register"
              className="btn-primary"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#FAFAF7",
                background: "#0D0D0B",
                padding: "16px 36px",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Secure your seat
            </Link>
            <a
              href="#syllabus"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "#7A7A72",
                textDecoration: "none",
              }}
            >
              View the full programme ↓
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — sticky card */}
        <div
          className="hero-card"
          style={{
            position: "sticky",
            top: "80px",
            background: "#FFFFFF",
            border: "1px solid #E2E0D8",
            borderRadius: "4px",
            padding: "2rem",
            boxShadow: "0 2px 24px rgba(0,0,0,0.05)",
          }}
        >
          {/* Card header */}
          <div
            style={{
              paddingBottom: "1.5rem",
              marginBottom: "1.5rem",
              borderBottom: "1px solid #E2E0D8",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "3rem",
                fontWeight: 300,
                color: "var(--ink)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              S$2,000
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "#7A7A72",
                marginBottom: "0.75rem",
              }}
            >
              Founding cohort · 12 seats maximum
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                className="pulse-dot"
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#B8942A",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#B8942A",
                }}
              >
                Seats filling now
              </span>
            </div>
          </div>

          {/* Feature list */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1.5rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              "One full Saturday",
              "Maximum 12 participants",
              "Working app built and deployed",
              "The Operator Playbook included",
              "30-day follow-up office hours",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "#3A3A35",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#B8942A", flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <Link
            href="/register"
            className="btn-primary"
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              fontWeight: 500,
              color: "#FAFAF7",
              background: "#0D0D0B",
              padding: "14px",
              borderRadius: "2px",
              textDecoration: "none",
              marginBottom: "0.75rem",
              boxSizing: "border-box",
            }}
          >
            Register now →
          </Link>

          {/* Guarantee */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              color: "#7A7A72",
              textAlign: "center",
              margin: 0,
            }}
          >
            Full refund if the programme doesn&apos;t run
          </p>
        </div>
      </div>

      {/* Sentinel for nav scroll detection */}
      <div id="hero-sentinel" style={{ height: "1px", marginTop: "1px" }} />
    </section>
  );
}
