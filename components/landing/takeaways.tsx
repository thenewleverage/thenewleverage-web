const items = [
  {
    num: "01",
    title: "A working deployed app",
    description: "Built by you, solving a real problem you chose.",
  },
  {
    num: "02",
    title: "The Operator Playbook",
    description: "Tools, prompts, frameworks, and templates from the full day.",
  },
  {
    num: "03",
    title: "30-day office hours",
    description:
      "A follow-up session one month later to unblock whatever you've been building.",
  },
  {
    num: "04",
    title: "Alumni access",
    description:
      "Direct line to future cohort members, resources, and programme updates.",
  },
];

export function Takeaways() {
  return (
    <section
      style={{
        background: "#FAF6EC",
        borderTop: "1px solid #E8D499",
        borderBottom: "1px solid #E8D499",
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
        paddingRight: "clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <style>{`
        @media (max-width: 800px) {
          .takeaways-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div
        className="takeaways-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: "5rem",
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* Left heading */}
        <div>
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
            WHAT YOU TAKE HOME
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            You leave with more than{" "}
            <em style={{ fontStyle: "italic", color: "#B8942A" }}>an app.</em>
          </h2>
        </div>

        {/* Right numbered list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {items.map(({ num, title, description }) => (
            <div key={num} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "#B8942A",
                  flexShrink: 0,
                  paddingTop: "3px",
                }}
              >
                {num}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--ink)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {title}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "#3A3A35",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
