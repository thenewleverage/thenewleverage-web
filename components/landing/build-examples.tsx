const examples = [
  {
    title: "Client reporting dashboard",
    description:
      "Pull structured data into a clean client-facing view. Eliminate 4 hours of weekly manual work.",
  },
  {
    title: "Meeting intelligence tool",
    description:
      "Paste a transcript, get action items, owner assignments, and a draft follow-up email. Done in 30 seconds.",
  },
  {
    title: "Internal knowledge base",
    description:
      "Search your firm's documents, policies, and precedents using natural language. No more digging through shared drives.",
  },
];

export function BuildExamples() {
  return (
    <section
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
        paddingRight: "clamp(1.5rem, 6vw, 5rem)",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <style>{`
        @media (max-width: 760px) {
          .examples-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Section label */}
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
        WHAT YOU&apos;LL BUILD
      </div>

      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          fontWeight: 300,
          lineHeight: 1.15,
          color: "var(--ink)",
          margin: "0 0 3rem 0",
        }}
      >
        Real tools.{" "}
        <em style={{ fontStyle: "italic", color: "#B8942A" }}>Real problems.</em>{" "}
        Built in a day.
      </h2>

      <div
        className="examples-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {examples.map(({ title, description }) => (
          <div
            key={title}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E0D8",
              borderRadius: "4px",
              padding: "1.75rem",
              boxShadow: "0 2px 24px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 500,
                color: "var(--ink)",
                marginBottom: "0.75rem",
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
        ))}
      </div>
    </section>
  );
}
