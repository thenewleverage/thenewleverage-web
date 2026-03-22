import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "IdeaBuild by TheNewLeverage <ideabuild@thenewleverage.com>";

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  return resend.emails.send({ from: FROM, to, subject, html });
}
