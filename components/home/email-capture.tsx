"use client";

import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.14em",
          color: "#B8942A",
        }}
      >
        YOU&apos;RE ON THE LIST.
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", maxWidth: "440px" }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to get notified when we launch"
          required
          style={{
            flex: 1,
            background: "#FAFAF7",
            border: "1px solid #E2E0D8",
            borderRight: "none",
            borderRadius: "2px 0 0 2px",
            padding: "10px 14px",
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            color: "var(--ink)",
            outline: "none",
            minWidth: 0,
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            background: "#0D0D0B",
            color: "#FAFAF7",
            border: "1px solid #0D0D0B",
            borderRadius: "0 2px 2px 0",
            padding: "10px 20px",
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            fontWeight: 500,
            cursor: status === "loading" ? "not-allowed" : "pointer",
            whiteSpace: "nowrap",
            transition: "background 0.15s ease",
          }}
        >
          {status === "loading" ? "···" : "Notify me"}
        </button>
      </form>
      {status === "error" && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "#DC2626",
          }}
        >
          Something went wrong. Please try again.
        </span>
      )}
    </div>
  );
}
