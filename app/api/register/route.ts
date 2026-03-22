import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { registrationSchema } from "@/lib/validations/registration";
import { sendEmail } from "@/lib/email/resend";
import { confirmationEmailHtml, adminNotificationHtml } from "@/lib/email/templates";
import type { Registration } from "@/types/database";

export async function POST(request: NextRequest) {
  try {
    // 1. Parse and validate
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const result = registrationSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", fields: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // 2. Insert to Supabase using service role key (bypasses RLS)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient<any>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: registration, error: dbError } = await supabase
      .from("registrations")
      .insert({
        full_name: data.full_name,
        email: data.email,
        company: data.company,
        job_title: data.job_title,
        linkedin_url: data.linkedin_url || null,
        app_idea: data.app_idea,
        motivation: data.motivation,
        referral_source: data.referral_source ?? null,
        tech_background: data.tech_background ?? null,
      })
      .select()
      .single() as { data: Registration | null; error: { code: string; message: string } | null };

    if (dbError || !registration) {
      // Unique constraint on email
      if (dbError?.code === "23505") {
        return NextResponse.json(
          { error: "This email address is already registered." },
          { status: 409 }
        );
      }
      console.error("[register] DB error:", dbError);
      return NextResponse.json(
        { error: "Registration failed. Please try again." },
        { status: 500 }
      );
    }

    const firstName = data.full_name.split(" ")[0];

    // 3. Send confirmation to registrant
    const confirmResult = await sendEmail({
      to: data.email,
      subject: "Your IdeaBuild registration — The New Leverage",
      html: confirmationEmailHtml({ firstName }),
    });
    if (confirmResult.error) {
      console.error("[register] Confirmation email error:", confirmResult.error);
    }

    // 4. Send notification to admin
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail) {
      const notifyResult = await sendEmail({
        to: adminEmail,
        subject: `New IdeaBuild registration — ${data.full_name}`,
        html: adminNotificationHtml(registration),
      });
      if (notifyResult.error) {
        console.error("[register] Admin notification error:", notifyResult.error);
      }
    }

    // 5. Return success
    return NextResponse.json({ success: true, id: registration.id }, { status: 200 });
  } catch (err) {
    console.error("[register] Unexpected error:", err);
    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}
