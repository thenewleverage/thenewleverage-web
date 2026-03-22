const credentials = [
  "Executive Director, Goldman Sachs Asset & Wealth Management",
  "Former Associate Partner, McKinsey & Company (APAC/EMEA)",
  "Harvard University — ALM",
  "US & Singapore bar qualified",
  "Founder, Ghost Protocol — enterprise AI for private banking",
];

export function Instructor() {
  return (
    <section
      style={{
        background: "#0D0D0B",
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
        paddingRight: "clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <style>{`
        @media (max-width: 800px) {
          .instructor-grid { grid-template-columns: 1fr !important; }
          .instructor-stats { flex-direction: row !important; flex-wrap: wrap; }
        }
      `}</style>

      <div
        className="instructor-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: "5rem",
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* LEFT */}
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
            YOUR INSTRUCTOR
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
              fontWeight: 300,
              color: "#FFFFFF",
              lineHeight: 1.1,
              margin: "0 0 0.25rem 0",
            }}
          >
            Terence Fong
          </h2>

          <em
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "#B8942A",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            Executive Director &amp; AI Educator
          </em>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              margin: "0 0 2rem 0",
              maxWidth: "540px",
            }}
          >
            Terence is an Executive Director at Goldman Sachs Asset &amp; Wealth Management and
            the founder of The New Leverage — a platform helping senior professionals harness
            AI without depending on engineers. He holds a Harvard ALM and dual US/Singapore bar
            qualifications, and previously led digital partnerships across APAC and EMEA at
            McKinsey &amp; Company.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
            }}
          >
            {credentials.map((cred) => (
              <li
                key={cred}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#B8942A",
                    flexShrink: 0,
                  }}
                />
                {cred}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — stat cards */}
        <div
          className="instructor-stats"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {[
            { number: "15+", label: "Years across financial services and technology" },
            { number: "3", label: "Continents — Singapore, US, Europe" },
          ].map(({ number, label }) => (
            <div
              key={number}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "4px",
                padding: "1.5rem",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "3.5rem",
                  fontWeight: 300,
                  color: "#B8942A",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.4,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
