"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { registrationSchema, type RegistrationValues } from "@/lib/validations/registration";
import { SummaryCard } from "@/components/register/summary-card";

// ---------- shared input styles ----------
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
  transition: "border-color 0.15s, background 0.15s",
};

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  border: "1px solid #DC2626",
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

const errorTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "12px",
  color: "#DC2626",
  marginTop: "4px",
};

const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "1.25rem",
};

// ---------- helpers ----------
function RequiredStar() {
  return <span style={{ color: "#B8942A", marginLeft: "2px" }}>*</span>;
}

function CharCounter({ count, max }: { count: number; max: number }) {
  const near = count >= max * 0.8;
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: near ? "#B8942A" : "#7A7A72",
        alignSelf: "flex-end",
        marginTop: "4px",
      }}
    >
      {count} / {max}
    </span>
  );
}

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<RegistrationValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
    defaultValues: {
      full_name: "",
      email: "",
      company: "",
      job_title: "",
      linkedin_url: "",
      app_idea: "",
      motivation: "",
    },
  });

  const appIdeaLength = (watch("app_idea") ?? "").length;
  const motivationLength = (watch("motivation") ?? "").length;

  async function handleStep1Continue() {
    const valid = await trigger(["full_name", "email", "company", "job_title", "linkedin_url"]);
    if (valid) setStep(2);
  }

  async function onSubmit(data: RegistrationValues) {
    setSubmitting(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Server error");
      }
      
      router.push("/register/payment?email=" + encodeURIComponent(data.email));
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <style>{`
        .reg-input:focus {
          border-color: #B8942A !important;
          background: #FFFFFF !important;
          outline: none;
        }
        /* Mobile summary strip: visible only below 900px */
        .mobile-summary-strip { display: none; }
        @media (max-width: 900px) {
          .mobile-summary-strip { display: block; margin-bottom: 1.5rem; }
          /* Hide the full desktop card inside the strip */
          .mobile-summary-strip .summary-card-desktop { display: none !important; }
        }
        .reg-step-slide {
          animation: stepIn 0.25s ease forwards;
        }
        @keyframes stepIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 900px) {
          .reg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          paddingLeft: "clamp(1.5rem, 6vw, 5rem)",
          paddingRight: "clamp(1.5rem, 6vw, 5rem)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Page heading */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#B8942A",
              marginBottom: "0.75rem",
            }}
          >
            IDEABUILD — REGISTER
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 300,
              color: "var(--ink)",
              margin: "0 0 2rem 0",
              lineHeight: 1.1,
            }}
          >
            Secure your seat.
          </h1>

          {/* Step indicator */}
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {[
              { num: "01", label: "About you", s: 1 },
              { num: "02", label: "Your idea", s: 2 },
            ].map(({ num, label, s }) => {
              const active = step === s;
              const done = step > s;
              return (
                <div
                  key={num}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    paddingBottom: "6px",
                    borderBottom: active ? "2px solid #B8942A" : "2px solid transparent",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: done ? "#B8942A" : active ? "#B8942A" : "#C0BCB4",
                    }}
                  >
                    {done ? "✓" : num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      fontWeight: active ? 500 : 400,
                      color: active ? "var(--ink)" : "#7A7A72",
                    }}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile-only summary strip (hidden on desktop via SummaryCard internals) */}
        <div className="mobile-summary-strip">
          <SummaryCard />
        </div>

        {/* Grid */}
        <div
          className="reg-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Form column */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="reg-step-slide">
                  <div style={fieldStyle}>
                    <label style={labelStyle}>
                      Full name <RequiredStar />
                    </label>
                    <input
                      {...register("full_name")}
                      className="reg-input"
                      style={errors.full_name ? inputErrorStyle : inputStyle}
                      placeholder="Jane Smith"
                      autoComplete="name"
                    />
                    {errors.full_name && (
                      <span style={errorTextStyle}>{errors.full_name.message}</span>
                    )}
                  </div>

                  <div style={fieldStyle}>
                    <label style={labelStyle}>
                      Email address <RequiredStar />
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="reg-input"
                      style={errors.email ? inputErrorStyle : inputStyle}
                      placeholder="jane@company.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <span style={errorTextStyle}>{errors.email.message}</span>
                    )}
                  </div>

                  <div style={fieldStyle}>
                    <label style={labelStyle}>
                      Company / Organisation <RequiredStar />
                    </label>
                    <input
                      {...register("company")}
                      className="reg-input"
                      style={errors.company ? inputErrorStyle : inputStyle}
                      placeholder="McKinsey / Goldman Sachs etc"
                      autoComplete="organization"
                    />
                    {errors.company && (
                      <span style={errorTextStyle}>{errors.company.message}</span>
                    )}
                  </div>

                  <div style={fieldStyle}>
                    <label style={labelStyle}>
                      Job title <RequiredStar />
                    </label>
                    <input
                      {...register("job_title")}
                      className="reg-input"
                      style={errors.job_title ? inputErrorStyle : inputStyle}
                      placeholder="Managing Director / VP etc"
                      autoComplete="organization-title"
                    />
                    {errors.job_title && (
                      <span style={errorTextStyle}>{errors.job_title.message}</span>
                    )}
                  </div>

                  <div style={fieldStyle}>
                    <label style={labelStyle}>LinkedIn URL</label>
                    <input
                      {...register("linkedin_url")}
                      className="reg-input"
                      style={errors.linkedin_url ? inputErrorStyle : inputStyle}
                      placeholder="https://linkedin.com/in/yourprofile"
                      autoComplete="url"
                    />
                    {errors.linkedin_url && (
                      <span style={errorTextStyle}>{errors.linkedin_url.message}</span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleStep1Continue}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#FAFAF7",
                      background: "#0D0D0B",
                      border: "none",
                      padding: "14px 32px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      marginTop: "0.5rem",
                    }}
                  >
                    Continue →
                  </button>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="reg-step-slide">
                  <div style={fieldStyle}>
                    <label style={labelStyle}>
                      What app or tool do you want to build? <RequiredStar />
                    </label>
                    <textarea
                      {...register("app_idea")}
                      className="reg-input"
                      style={{
                        ...(errors.app_idea ? inputErrorStyle : inputStyle),
                        resize: "vertical",
                        minHeight: "120px",
                        lineHeight: 1.6,
                      }}
                      maxLength={500}
                      placeholder="Describe the problem you're trying to solve and who it's for. Don't worry if it's not fully formed — that's what the workshop is for."
                    />
                    <CharCounter count={appIdeaLength} max={500} />
                    {errors.app_idea && (
                      <span style={errorTextStyle}>{errors.app_idea.message}</span>
                    )}
                  </div>

                  <div style={fieldStyle}>
                    <label style={labelStyle}>
                      What would it mean for you to have this built? <RequiredStar />
                    </label>
                    <textarea
                      {...register("motivation")}
                      className="reg-input"
                      style={{
                        ...(errors.motivation ? inputErrorStyle : inputStyle),
                        resize: "vertical",
                        minHeight: "90px",
                        lineHeight: 1.6,
                      }}
                      maxLength={300}
                      placeholder="What would change in your work or business if this existed?"
                    />
                    <CharCounter count={motivationLength} max={300} />
                    {errors.motivation && (
                      <span style={errorTextStyle}>{errors.motivation.message}</span>
                    )}
                  </div>

                  <div style={fieldStyle}>
                    <label style={labelStyle}>How did you hear about IdeaBuild?</label>
                    <select
                      {...register("referral_source")}
                      className="reg-input"
                      style={{
                        ...inputStyle,
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237A7A72' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                        paddingRight: "36px",
                        cursor: "pointer",
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Personal recommendation">Personal recommendation</option>
                      <option value="The New Leverage newsletter">The New Leverage newsletter</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div style={fieldStyle}>
                    <label style={labelStyle}>Do you have any technical background?</label>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.625rem",
                        marginTop: "0.25rem",
                      }}
                    >
                      {[
                        "None at all",
                        "I can use Excel / basic tools confidently",
                        "I've tried coding before but don't consider myself technical",
                        "I have some technical experience",
                      ].map((opt) => (
                        <label
                          key={opt}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            cursor: "pointer",
                            fontFamily: "var(--font-sans)",
                            fontSize: "14px",
                            color: "#3A3A35",
                          }}
                        >
                          <input
                            {...register("tech_background")}
                            type="radio"
                            value={opt}
                            style={{ accentColor: "#B8942A", width: "16px", height: "16px" }}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  {errorMsg && (
                    <div
                      style={{
                        background: "#FEF2F2",
                        border: "1px solid #FECACA",
                        borderRadius: "2px",
                        padding: "12px 14px",
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "#DC2626",
                        marginBottom: "1rem",
                        lineHeight: 1.5
                      }}
                    >
                      {errorMsg}
                      {errorMsg.includes("already registered") && (
                        <div style={{ marginTop: "8px" }}>
                          <button
                            type="button"
                            onClick={() => router.push("/register/payment?email=" + encodeURIComponent(watch("email")))}
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              color: "#B8942A",
                              textDecoration: "underline",
                              cursor: "pointer",
                              fontSize: "13px",
                              fontFamily: "inherit",
                              fontWeight: 500
                            }}
                          >
                            Continue to payment page →
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "0.5rem",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "#7A7A72",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#FAFAF7",
                        background: submitting ? "#3A3A35" : "#0D0D0B",
                        border: "none",
                        padding: "14px 32px",
                        borderRadius: "2px",
                        cursor: submitting ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "background 0.15s",
                      }}
                    >
                      {submitting && (
                        <span
                          style={{
                            width: "14px",
                            height: "14px",
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTopColor: "#FFFFFF",
                            borderRadius: "50%",
                            display: "inline-block",
                            animation: "spin 0.7s linear infinite",
                          }}
                        />
                      )}
                      {submitting ? "Submitting..." : "Submit registration →"}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Summary card column (desktop) */}
          <div className="summary-card-col">
            <style>{`
              @media (max-width: 900px) {
                .summary-card-col { display: none; }
              }
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
            <SummaryCard />
          </div>
        </div>
      </div>
    </>
  );
}
