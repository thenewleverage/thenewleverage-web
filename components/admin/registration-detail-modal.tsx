"use client";

import { useState } from "react";
import type { Registration } from "@/types/database";

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.12em",
          textTransform: "uppercase" as const,
          color: "#7A7A72",
          marginBottom: "4px",
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: "13px", color: "var(--ink)", lineHeight: 1.5 }}>
        {value || <span style={{ color: "#B0AFA8" }}>—</span>}
      </div>
    </div>
  );
}

export function RegistrationDetailModal({ registration: r }: { registration: Registration }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "3px 8px",
          fontSize: "11px",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.06em",
          border: "1px solid #7A7A72",
          borderRadius: "3px",
          background: "transparent",
          color: "#7A7A72",
          cursor: "pointer",
          whiteSpace: "nowrap" as const,
        }}
      >
        View
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "1.5rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E0D8",
              borderRadius: "6px",
              padding: "2rem",
              maxWidth: "640px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1.75rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#7A7A72",
                    marginBottom: "4px",
                  }}
                >
                  Registration Details
                </div>
                <div style={{ fontSize: "17px", fontWeight: 500, color: "var(--ink)" }}>
                  {r.full_name}
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#7A7A72",
                  lineHeight: 1,
                  padding: "2px 6px",
                }}
              >
                ✕
              </button>
            </div>

            {/* Fields grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem 2rem" }}>
              {/* Row 1 */}
              <Field label="Name" value={r.full_name} />
              <Field label="Email" value={r.email} />

              {/* Row 2 */}
              <Field label="Company" value={r.company} />
              <Field label="Job Title" value={r.job_title} />

              {/* Row 3 */}
              <Field
                label="LinkedIn"
                value={
                  r.linkedin_url ? (
                    <a
                      href={r.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1D4ED8", textDecoration: "underline" }}
                    >
                      {r.linkedin_url}
                    </a>
                  ) : null
                }
              />
              <Field label="Status" value={r.status} />

              {/* Row 4 — full width */}
              <div style={{ gridColumn: "1 / -1" }}>
                <Field label="App Idea" value={r.app_idea} />
              </div>

              {/* Row 5 — full width */}
              <div style={{ gridColumn: "1 / -1" }}>
                <Field label="Motivation" value={r.motivation} />
              </div>

              {/* Row 6 */}
              <Field label="Referral Source" value={r.referral_source} />
              <Field label="Tech Background" value={r.tech_background} />

              {/* Row 7 — conditionally rendered */}
              {(r.notes || r.payment_intent) && (
                <>
                  {r.notes && <Field label="Notes" value={r.notes} />}
                  {r.payment_intent && <Field label="Payment Intent" value={r.payment_intent} />}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
