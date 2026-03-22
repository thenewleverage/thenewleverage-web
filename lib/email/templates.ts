import type { Registration } from "@/types/database";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ideabuild.thenewleverage.com";

// Shared wrapper
function emailWrapper(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The New Leverage</title>
</head>
<body style="margin:0;padding:0;background:#FAFAF7;font-family:'DM Sans',Helvetica,Arial,sans-serif;color:#0D0D0B;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAFAF7;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:32px;border-bottom:1px solid #E2E0D8;">
              <p style="margin:0;font-family:Courier New,Courier,monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#7A7A72;">
                THE NEW LEVERAGE &nbsp;·&nbsp; <span style="color:#B8942A;">IDEABUILD</span>
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding-top:32px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:40px;border-top:1px solid #E2E0D8;margin-top:40px;">
              <p style="margin:0;font-family:Courier New,Courier,monospace;font-size:10px;color:#7A7A72;letter-spacing:0.1em;">
                © 2025 THE NEW LEVERAGE &nbsp;·&nbsp; SINGAPORE
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function confirmationEmailHtml({
  firstName,
}: {
  firstName: string;
}): string {
  const paymentUrl = `${siteUrl}/register/payment`;

  const content = `
    <h1 style="margin:0 0 16px 0;font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:300;color:#0D0D0B;line-height:1.15;">
      Your registration has been received.
    </h1>

    <p style="margin:0 0 24px 0;font-size:15px;color:#3A3A35;line-height:1.7;">
      Hi ${firstName},
    </p>

    <p style="margin:0 0 24px 0;font-size:15px;color:#3A3A35;line-height:1.7;">
      You're one step away from securing your seat at IdeaBuild. For the founding cohort, we are processing payments manually via PayNow.
    </p>

    <p style="margin:0 0 24px 0;font-size:15px;color:#3A3A35;line-height:1.7;">
      Please complete your registration by clicking the button below to view the QR code and instructions.
      <strong>IMPORTANT:</strong> When paying, please include your email address in the reference field so we can track your payment.
    </p>

    <!-- CTA button -->
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 32px 0;">
      <tr>
        <td style="background:#0D0D0B;border-radius:2px;">
          <a href="${paymentUrl}"
             style="display:inline-block;padding:14px 32px;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;color:#FAFAF7;text-decoration:none;letter-spacing:0.02em;">
            Scan to Pay →
          </a>
        </td>
      </tr>
    </table>

    <!-- Details block -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
           style="background:#FAF6EC;border:1px solid #E8D499;border-radius:4px;margin-bottom:32px;">
      <tr>
        <td style="padding:20px 24px;">
          <p style="margin:0 0 6px 0;font-family:Courier New,Courier,monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#B8942A;">
            WHAT YOU'VE REGISTERED FOR
          </p>
          <ul style="margin:12px 0 0 0;padding:0;list-style:none;">
            ${[
      "IdeaBuild by The New Leverage",
      "One full day, Saturday May 2025",
      "Singapore (venue confirmed 2 weeks prior)",
      "Maximum 12 participants",
    ]
      .map(
        (item) =>
          `<li style="font-size:14px;color:#3A3A35;line-height:1.6;padding:4px 0;">
                    <span style="color:#B8942A;margin-right:8px;">—</span>${item}
                  </li>`
      )
      .join("")}
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 8px 0;font-size:14px;color:#7A7A72;line-height:1.6;">
      Questions? Reply to this email or write to
      <a href="mailto:ideabuild@thenewleverage.com" style="color:#B8942A;text-decoration:none;">ideabuild@thenewleverage.com</a>
    </p>

    <p style="margin:32px 0 0 0;font-size:14px;color:#3A3A35;line-height:1.6;">
      IdeaBuild<br />
      <span style="color:#7A7A72;">by The New Leverage</span>
    </p>
  `;

  return emailWrapper(content);
}

export function adminNotificationHtml(data: Registration): string {
  const adminUrl = `${siteUrl}/admin`;

  function row(label: string, value: string | null | undefined): string {
    if (!value) return "";
    return `
      <tr>
        <td style="padding:8px 0;font-family:Courier New,Courier,monospace;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#7A7A72;vertical-align:top;width:130px;padding-right:16px;">
          ${label}
        </td>
        <td style="padding:8px 0;font-size:14px;color:#0D0D0B;line-height:1.5;border-bottom:1px solid #E2E0D8;">
          ${value}
        </td>
      </tr>
    `;
  }

  const content = `
    <h1 style="margin:0 0 8px 0;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:300;color:#0D0D0B;">
      New registration — ${data.full_name}
    </h1>
    <p style="margin:0 0 28px 0;font-family:Courier New,Courier,monospace;font-size:11px;color:#7A7A72;letter-spacing:0.08em;">
      ${new Date(data.created_at).toLocaleString("en-SG", { timeZone: "Asia/Singapore" })}
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      ${row("Name", data.full_name)}
      ${row("Email", data.email)}
      ${row("Company", data.company)}
      ${row("Title", data.job_title)}
      ${row("LinkedIn", data.linkedin_url)}
    </table>

    <p style="margin:0 0 8px 0;font-family:Courier New,Courier,monospace;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#B8942A;">
      APP IDEA
    </p>
    <p style="margin:0 0 24px 0;font-size:14px;color:#3A3A35;line-height:1.7;padding:16px;background:#FAF6EC;border:1px solid #E8D499;border-radius:4px;">
      ${data.app_idea}
    </p>

    <p style="margin:0 0 8px 0;font-family:Courier New,Courier,monospace;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#7A7A72;">
      MOTIVATION
    </p>
    <p style="margin:0 0 24px 0;font-size:14px;color:#3A3A35;line-height:1.7;padding:16px;background:#FAFAF7;border:1px solid #E2E0D8;border-radius:4px;">
      ${data.motivation}
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      ${row("Referral", data.referral_source)}
      ${row("Background", data.tech_background)}
      ${row("Status", data.status)}
    </table>

    <!-- Admin CTA -->
    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:#0D0D0B;border-radius:2px;">
          <a href="${adminUrl}"
             style="display:inline-block;padding:12px 28px;font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:500;color:#FAFAF7;text-decoration:none;">
            View admin dashboard →
          </a>
        </td>
      </tr>
    </table>
  `;

  return emailWrapper(content);
}
