export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #E2E0D8",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
        paddingRight: "clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#7A7A72",
            letterSpacing: "0.06em",
          }}
        >
          © 2025 The New Leverage
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#7A7A72",
            letterSpacing: "0.06em",
          }}
        >
          Singapore
        </span>
      </div>
    </footer>
  );
}
