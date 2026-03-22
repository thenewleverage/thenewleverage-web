"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { RegistrationStatus } from "@/types/database";

const STATUS_OPTIONS: { value: RegistrationStatus; label: string; color: string }[] = [
  { value: "pending", label: "Pending", color: "#B45309" },
  { value: "confirmed", label: "Confirmed", color: "#1D4ED8" },
  { value: "paid", label: "Paid", color: "#15803D" },
  { value: "cancelled", label: "Cancelled", color: "#6B7280" },
];

export function RegistrationActions({
  id,
  currentStatus,
}: {
  id: string;
  currentStatus: RegistrationStatus;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function updateStatus(status: RegistrationStatus) {
    setLoading(true);
    await fetch("/api/admin/registrations", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setLoading(false);
    router.refresh();
  }

  async function deleteRegistration() {
    if (!confirm("Delete this registration? This cannot be undone.")) return;
    setLoading(true);
    await fetch("/api/admin/registrations", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setLoading(false);
    router.refresh();
  }

  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
      {STATUS_OPTIONS.filter((s) => s.value !== currentStatus).map((s) => (
        <button
          key={s.value}
          disabled={loading}
          onClick={() => updateStatus(s.value)}
          style={{
            padding: "3px 8px",
            fontSize: "11px",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.06em",
            border: `1px solid ${s.color}`,
            borderRadius: "3px",
            background: "transparent",
            color: s.color,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.5 : 1,
            whiteSpace: "nowrap",
          }}
        >
          → {s.label}
        </button>
      ))}
      <button
        disabled={loading}
        onClick={deleteRegistration}
        style={{
          padding: "3px 8px",
          fontSize: "11px",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.06em",
          border: "1px solid #DC2626",
          borderRadius: "3px",
          background: "transparent",
          color: "#DC2626",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.5 : 1,
          whiteSpace: "nowrap",
        }}
      >
        Delete
      </button>
    </div>
  );
}
