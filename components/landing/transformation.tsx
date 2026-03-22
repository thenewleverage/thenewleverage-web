export function Transformation() {
  const beforeItems = [
    "Dependent on engineering resources",
    "Ideas stuck in a slide deck",
    "Waiting months for a vendor quote",
    "Asking for budget to test a concept",
    "Consumer of technology",
  ];

  const afterItems = [
    "Able to build and deploy independently",
    "Ideas shipped the same day",
    "Moving faster than your organisation",
    "Testing concepts before spending a dollar",
    "Creator of technology",
  ];

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
          .transformation-grid {
            grid-template-columns: 1fr !important;
          }
          .transformation-arrow {
            transform: rotate(90deg);
            justify-self: center;
          }
        }
      `}</style>

      {/* Section label */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#7A7A72",
          marginBottom: "2.5rem",
        }}
      >
        THE TRANSFORMATION
      </div>

      {/* Three-column grid */}
      <div
        className="transformation-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "2rem",
          alignItems: "center",
          marginBottom: "4rem",
        }}
      >
        {/* Before card */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E0D8",
            borderRadius: "4px",
            padding: "1.75rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#7A7A72",
              marginBottom: "1.25rem",
            }}
          >
            You arrive as...
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {beforeItems.map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "#3A3A35",
                  display: "flex",
                  gap: "10px",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#C0BCB4", flexShrink: 0 }}>×</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Arrow */}
        <div
          className="transformation-arrow"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "3rem",
            color: "#E2E0D8",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          →
        </div>

        {/* After card */}
        <div
          style={{
            background: "#FAF6EC",
            border: "1px solid #E8D499",
            borderRadius: "4px",
            padding: "1.75rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#B8942A",
              marginBottom: "1.25rem",
            }}
          >
            You leave as...
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {afterItems.map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "#3A3A35",
                  display: "flex",
                  gap: "10px",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#B8942A", flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Blockquote */}
      <div style={{ textAlign: "center", maxWidth: "740px", margin: "0 auto" }}>
        <blockquote
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--ink)",
            lineHeight: 1.4,
            margin: "0 0 1rem 0",
          }}
        >
          &ldquo;You walk in with an idea. You walk out with an app. You leave as someone who builds.&rdquo;
        </blockquote>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#7A7A72",
          }}
        >
          UNLOCK YOUR NEW LEVERAGE
        </div>
      </div>
    </section>
  );
}
