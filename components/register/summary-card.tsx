const features = [
  "One full Saturday",
  "Maximum 12 participants",
  "Working app built and deployed",
  "The Operator Playbook included",
  "30-day follow-up office hours",
];

export function SummaryCard() {
  return (
    <>
      <style>{`
        @keyframes pulse-dot-card {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .pulse-dot-card {
          animation: pulse-dot-card 1.8s ease-in-out infinite;
        }
        @media (max-width: 900px) {
          .summary-card-desktop { display: none !important; }
          .summary-card-mobile { display: flex !important; }
        }
      `}</style>

      {/* Mobile price strip */}
      <div
        className="summary-card-mobile"
        style={{
          display: "none",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#FAF6EC",
          border: "1px solid #E8D499",
          borderRadius: "4px",
          padding: "0.875rem 1.25rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              fontWeight: 300,
              color: "var(--ink)",
            }}
          >
            S$2,000
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "#7A7A72",
              marginLeft: "0.75rem",
            }}
          >
            · 12 seats max
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            className="pulse-dot-card"
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#B8942A",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              fontWeight: 500,
              color: "#B8942A",
            }}
          >
            Seats filling
          </span>
        </div>
      </div>

      {/* Desktop sticky card */}
      <div
        className="summary-card-desktop"
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
        {/* Header */}
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
              fontSize: "2.75rem",
              fontWeight: 300,
              color: "var(--ink)",
              lineHeight: 1,
              marginBottom: "0.4rem",
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
              className="pulse-dot-card"
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

        {/* Features */}
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
          {features.map((item) => (
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

        {/* Details */}
        <div
          style={{
            borderTop: "1px solid #E2E0D8",
            paddingTop: "1.25rem",
          }}
        >
          {[
            { label: "DATE", value: "Saturday, 23 May 2026" },
            { label: "LOCATION", value: "Singapore CBD" },
            { label: "FORMAT", value: "Full day, 9am – 6pm" },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.6rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#7A7A72",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            color: "#7A7A72",
            textAlign: "center",
            margin: "1.25rem 0 0 0",
          }}
        >
          Full refund if the programme doesn&apos;t run
        </p>
      </div>
    </>
  );
}
