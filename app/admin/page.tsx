import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import type { Registration, RegistrationStatus } from "@/types/database";
import { StatusBadge } from "@/components/admin/status-badge";
import { ExportCsvButton } from "@/components/admin/export-csv-button";
import { SignOutButton } from "@/components/admin/sign-out-button";
import { RegistrationActions } from "@/components/admin/registration-actions";
import { RegistrationDetailModal } from "@/components/admin/registration-detail-modal";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-SG", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function truncate(str: string, max: number) {
  return str.length > max ? str.slice(0, max) + "…" : str;
}

async function getRegistrations(): Promise<Registration[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const supabase = createClient<any>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error } = await supabase
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[admin] Failed to fetch registrations:", error);
    return [];
  }

  return (data ?? []) as Registration[];
}

export default async function AdminPage() {
  const registrations = await getRegistrations();

  if (registrations === null) redirect("/admin/login");

  const counts = {
    total: registrations.length,
    pending: registrations.filter((r) => r.status === "pending").length,
    confirmed: registrations.filter((r) => r.status === "confirmed").length,
    paid: registrations.filter((r) => r.status === "paid").length,
  };

  const summaryCards: { label: string; value: number; color: string }[] = [
    { label: "Total", value: counts.total, color: "var(--ink)" },
    { label: "Pending", value: counts.pending, color: "#B45309" },
    { label: "Confirmed", value: counts.confirmed, color: "#1D4ED8" },
    { label: "Paid", value: counts.paid, color: "#15803D" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAFAF7",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          height: "60px",
          background: "#FFFFFF",
          borderBottom: "1px solid #E2E0D8",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1.5rem, 4vw, 3rem)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "var(--ink)",
          }}
        >
          THE NEW LEVERAGE{" "}
          <span style={{ color: "#7A7A72", margin: "0 0.4em" }}>—</span>
          <span style={{ color: "#B8942A" }}>Admin</span>
        </span>
        <SignOutButton />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2.5rem clamp(1.5rem, 4vw, 3rem)",
        }}
      >
        {/* Summary cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {summaryCards.map(({ label, value, color }) => (
            <div
              key={label}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E0D8",
                borderRadius: "4px",
                padding: "1.25rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#7A7A72",
                  marginBottom: "0.5rem",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  color,
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Table header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              fontWeight: 500,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            Registrations
          </h2>
          <ExportCsvButton registrations={registrations} />
        </div>

        {/* Table */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E0D8",
            borderRadius: "4px",
            overflow: "hidden",
            overflowX: "auto",
          }}
        >
          {registrations.length === 0 ? (
            <div
              style={{
                padding: "3rem",
                textAlign: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "#7A7A72",
                letterSpacing: "0.08em",
              }}
            >
              No registrations yet.
            </div>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "13px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #E2E0D8", background: "#FAFAF7" }}>
                  {["Name", "Company", "Title", "App Idea", "Status", "Date", "Details", "Actions"].map(
                    (col) => (
                      <th
                        key={col}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#7A7A72",
                          fontWeight: 400,
                          textAlign: "left",
                          padding: "10px 16px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {col}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg, i) => (
                  <tr
                    key={reg.id}
                    style={{
                      borderBottom:
                        i < registrations.length - 1 ? "1px solid #E2E0D8" : "none",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontWeight: 500, whiteSpace: "nowrap" }}>
                      {reg.full_name}
                    </td>
                    <td style={{ padding: "12px 16px", color: "#3A3A35", whiteSpace: "nowrap" }}>
                      {reg.company}
                    </td>
                    <td style={{ padding: "12px 16px", color: "#3A3A35", whiteSpace: "nowrap" }}>
                      {reg.job_title}
                    </td>
                    <td
                      style={{ padding: "12px 16px", color: "#7A7A72", maxWidth: "260px" }}
                      title={reg.app_idea}
                    >
                      {truncate(reg.app_idea, 60)}
                    </td>
                    <td style={{ padding: "12px 16px", whiteSpace: "nowrap" }}>
                      <StatusBadge status={reg.status as RegistrationStatus} />
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        color: "#7A7A72",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {formatDate(reg.created_at)}
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <RegistrationDetailModal registration={reg} />
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <RegistrationActions
                        id={reg.id}
                        currentStatus={reg.status as RegistrationStatus}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
