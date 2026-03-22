const items = [
  "You'll learn which AI tools log your inputs — and which don't",
  "You'll understand the difference between consumer and enterprise API tiers",
  "You'll know how to build without exposing client data or firm information",
  "You'll understand data residency, storage, and what RLS means for your tools",
  "You'll leave knowing what your IT and Legal teams will ask — and how to answer",
];

export function PrivacyNote() {
  return (
    <section
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
        paddingRight: "clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <style>{`
        @media (max-width: 760px) {
          .privacy-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div
        className="privacy-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
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
            INSTITUTIONAL CONTEXTS
          </div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            Built for{" "}
            <em style={{ fontStyle: "italic", color: "#B8942A" }}>institutional</em>{" "}
            contexts.
          </h3>
        </div>

        {/* Right list */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {items.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                gap: "12px",
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                color: "#3A3A35",
                lineHeight: 1.6,
                paddingBottom: "1rem",
                borderBottom: "1px solid #E2E0D8",
              }}
            >
              <span style={{ color: "#B8942A", flexShrink: 0 }}>→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
