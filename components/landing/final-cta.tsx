import Link from "next/link";

export function FinalCta() {
  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
        paddingRight: "clamp(1.5rem, 6vw, 5rem)",
        textAlign: "center",
        borderTop: "1px solid #E2E0D8",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--ink)",
            margin: "0 0 1.25rem 0",
          }}
        >
          Your idea has been waiting{" "}
          <em style={{ fontStyle: "italic", color: "#B8942A" }}>long enough.</em>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "17px",
            fontWeight: 300,
            color: "#3A3A35",
            lineHeight: 1.6,
            margin: "0 0 2.5rem 0",
          }}
        >
          12 seats. One Saturday. Everything changes.
        </p>

        <Link
          href="/register"
          className="btn-primary"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-sans)",
            fontSize: "15px",
            fontWeight: 500,
            color: "#FAFAF7",
            background: "#0D0D0B",
            padding: "16px 40px",
            borderRadius: "2px",
            textDecoration: "none",
            marginBottom: "1.25rem",
          }}
        >
          Secure your seat →
        </Link>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "#7A7A72",
          }}
        >
          Founding cohort pricing · S$2,000 per seat
        </div>
      </div>
    </section>
  );
}
