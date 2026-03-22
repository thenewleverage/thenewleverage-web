"use client";

import type { Registration } from "@/types/database";

export function ExportCsvButton({ registrations }: { registrations: Registration[] }) {
  function handleExport() {
    const headers = [
      "Date",
      "Name",
      "Email",
      "Company",
      "Title",
      "LinkedIn",
      "App Idea",
      "Motivation",
      "Referral",
      "Background",
      "Status",
    ];

    const rows = registrations.map((r) => [
      new Date(r.created_at).toLocaleDateString("en-SG"),
      r.full_name,
      r.email,
      r.company,
      r.job_title,
      r.linkedin_url ?? "",
      r.app_idea,
      r.motivation,
      r.referral_source ?? "",
      r.tech_background ?? "",
      r.status,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ideabuild-registrations-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={handleExport}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#3A3A35",
        background: "#FFFFFF",
        border: "1px solid #E2E0D8",
        padding: "8px 16px",
        borderRadius: "2px",
        cursor: "pointer",
      }}
    >
      Export CSV ↓
    </button>
  );
}
