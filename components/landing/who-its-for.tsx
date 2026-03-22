const cards = [
  {
    title: "The frustrated VP",
    description:
      "You have an internal tool idea that's been deprioritised for 18 months. Engineering won't touch it. You've stopped asking.",
  },
  {
    title: "The accidental founder",
    description:
      "You're leaving institutional life with domain expertise and a clear idea. You need an MVP before you can hire anyone.",
  },
  {
    title: "The innovation lead",
    description:
      "Your job is to evaluate AI but you rely on vendors to explain what's possible. You want fluency, not dependency.",
  },
  {
    title: "The senior partner",
    description:
      "You want to automate repetitive work, build client tools, or test ideas fast — without writing a single line of code.",
  },
];

export function WhoItsFor() {
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
        @media (max-width: 800px) {
          .who-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .who-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div
        className="who-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: "5rem",
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
            WHO IT&apos;S FOR
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
            Built for professionals who{" "}
            <em style={{ fontStyle: "italic", color: "#B8942A" }}>
              can&apos;t afford
            </em>{" "}
            to wait.
          </h2>
        </div>

        {/* Right 2x2 card grid */}
        <div
          className="who-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {cards.map(({ title, description }) => (
            <div
              key={title}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E0D8",
                borderRadius: "4px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--ink)",
                  marginBottom: "0.5rem",
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
      </div>
    </section>
  );
}
