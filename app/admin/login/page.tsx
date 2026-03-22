"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#FAFAF7",
  border: "1px solid #E2E0D8",
  borderRadius: "2px",
  padding: "10px 14px",
  fontFamily: "var(--font-sans)",
  fontSize: "14px",
  color: "var(--ink)",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "10px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#7A7A72",
  marginBottom: "6px",
};

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <>
      <style>{`
        .admin-login-input:focus {
          border-color: #B8942A !important;
          background: #FFFFFF !important;
          outline: none;
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          background: "#FAFAF7",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            background: "#FFFFFF",
            border: "1px solid #E2E0D8",
            borderRadius: "4px",
            padding: "2.5rem",
            boxShadow: "0 2px 24px rgba(0,0,0,0.05)",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "var(--ink)",
                marginBottom: "4px",
              }}
            >
              THE NEW LEVERAGE
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7A7A72",
              }}
            >
              Admin
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                className="admin-login-input"
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                className="admin-login-input"
                style={inputStyle}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <div
                style={{
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  borderRadius: "2px",
                  padding: "10px 14px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "#DC2626",
                  marginBottom: "1.25rem",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#FAFAF7",
                background: loading ? "#3A3A35" : "#0D0D0B",
                border: "none",
                padding: "12px",
                borderRadius: "2px",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
