import type { RegistrationStatus } from "@/types/database";

const styles: Record<
  RegistrationStatus,
  { background: string; color: string; border: string }
> = {
  pending: { background: "#FFFBEB", color: "#B45309", border: "#FDE68A" },
  confirmed: { background: "#EFF6FF", color: "#1D4ED8", border: "#BFDBFE" },
  paid: { background: "#F0FDF4", color: "#15803D", border: "#BBF7D0" },
  cancelled: { background: "#FEF2F2", color: "#B91C1C", border: "#FECACA" },
};

export function StatusBadge({ status }: { status: RegistrationStatus }) {
  const s = styles[status];
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "3px 8px",
        borderRadius: "2px",
        background: s.background,
        color: s.color,
        border: `1px solid ${s.border}`,
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}
