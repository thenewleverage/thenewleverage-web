type BadgeType = "LEARN" | "BUILD" | "BREAK" | "SPECIAL";

interface Session {
  time: string;
  title: string;
  description: string;
  badge: BadgeType;
}

const sessions: Session[] = [
  {
    time: "09:00",
    title: "The New Leverage",
    description:
      "Why AI has permanently shifted who can build what. The operator mindset: from consumer of software to creator of it.",
    badge: "LEARN",
  },
  {
    time: "09:45",
    title: "Decompose Anything",
    description:
      "How to break any idea into buildable components. You'll define and pressure-test your app idea using a structured framework.",
    badge: "LEARN",
  },
  {
    time: "10:45",
    title: "Break",
    description: "",
    badge: "BREAK",
  },
  {
    time: "11:00",
    title: "Prompting as a Professional Skill",
    description:
      "Precision prompting for business outcomes. How to brief AI the way you'd brief a sharp analyst — and why that framing unlocks everything.",
    badge: "LEARN",
  },
  {
    time: "12:00",
    title: "Working Lunch + 60-Second Pitches",
    description:
      "Every participant pitches their app idea. Peer feedback, instructor validation, final refinement before building begins.",
    badge: "BUILD",
  },
  {
    time: "13:00",
    title: "Build Session 1",
    description:
      "First working prototype. Instructor-guided. Every participant ships something functional before 2:30pm.",
    badge: "BUILD",
  },
  {
    time: "14:30",
    title: "Break",
    description: "",
    badge: "BREAK",
  },
  {
    time: "14:45",
    title: "Debug, Design, Polish",
    description:
      "How to diagnose what's broken without knowing code. The design decisions that make your app look like you hired someone.",
    badge: "BUILD",
  },
  {
    time: "16:00",
    title: "The Ceiling",
    description:
      "A live demonstration of what operator-level thinking looks like at institutional scale. The ceiling is higher than you think.",
    badge: "SPECIAL",
  },
  {
    time: "16:30",
    title: "Ship and Present",
    description:
      "Every participant presents their finished app. What it solves, who it's for, what's next. This is the graduation moment.",
    badge: "BUILD",
  },
  {
    time: "17:30",
    title: "Close + The Operator Stack",
    description:
      "Everything you take home: tools, prompts, frameworks, playbook. What to build next week.",
    badge: "LEARN",
  },
  {
    time: "18:00",
    title: "Optional drinks",
    description: "",
    badge: "BREAK",
  },
];

const badgeStyles: Record<BadgeType, { background: string; color: string; border: string }> = {
  LEARN: { background: "#EEF2F8", color: "#3A5A8A", border: "#C5D3E8" },
  BUILD: { background: "#F5EDD6", color: "#B8942A", border: "#DFC97A" },
  BREAK: { background: "#FAFAF7", color: "#7A7A72", border: "#E2E0D8" },
  SPECIAL: { background: "#0D0D0B", color: "#F5EDD6", border: "#0D0D0B" },
};

export function Syllabus() {
  return (
    <section
      id="syllabus"
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
        .session-row:hover {
          background: #FAFAF7;
        }
        @media (max-width: 600px) {
          .session-row {
            flex-wrap: wrap;
            gap: 0.5rem !important;
          }
          .session-time {
            width: auto !important;
            min-width: 48px;
          }
        }
      `}</style>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          fontWeight: 300,
          lineHeight: 1.15,
          color: "var(--ink)",
          margin: "0 0 1.25rem 0",
        }}
      >
        One day.{" "}
        <em style={{ fontStyle: "italic", color: "#B8942A" }}>Eight sessions.</em>{" "}
        One working app.
      </h2>

      {/* Intro */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "16px",
          fontWeight: 300,
          color: "#3A3A35",
          lineHeight: 1.7,
          maxWidth: "600px",
          margin: "0 0 3rem 0",
        }}
      >
        Designed for professionals who move fast and expect results. Every session builds
        directly toward the app you present at 4:30pm.
      </p>

      {/* Session timeline */}
      <div
        style={{
          border: "1px solid #E2E0D8",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        {sessions.map((session, i) => {
          const badge = badgeStyles[session.badge];
          return (
            <div
              key={`${session.time}-${i}`}
              className="session-row"
              style={{
                display: "flex",
                alignItems: session.description ? "flex-start" : "center",
                gap: "1.5rem",
                padding: "1.25rem 1.5rem",
                borderBottom: i < sessions.length - 1 ? "1px solid #E2E0D8" : "none",
                background: "#FFFFFF",
                transition: "background 0.15s ease",
              }}
            >
              {/* Time */}
              <span
                className="session-time"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "#7A7A72",
                  flexShrink: 0,
                  width: "80px",
                  paddingTop: session.description ? "2px" : "0",
                }}
              >
                {session.time}
              </span>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--ink)",
                    marginBottom: session.description ? "0.3rem" : "0",
                  }}
                >
                  {session.title}
                </div>
                {session.description && (
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "#3A3A35",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {session.description}
                  </p>
                )}
              </div>

              {/* Badge */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: "2px",
                  background: badge.background,
                  color: badge.color,
                  border: `1px solid ${badge.border}`,
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {session.badge}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
