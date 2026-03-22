import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { RegistrationStatus } from "@/types/database";

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// PATCH /api/admin/registrations — update status
export async function PATCH(request: NextRequest) {
  const { id, status } = (await request.json()) as {
    id: string;
    status: RegistrationStatus;
  };

  const valid: RegistrationStatus[] = ["pending", "confirmed", "paid", "cancelled"];
  if (!id || !valid.includes(status)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const supabase = adminClient();
  const { error } = await supabase
    .from("registrations")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("[admin] update status error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

// DELETE /api/admin/registrations — delete a registration
export async function DELETE(request: NextRequest) {
  const { id } = (await request.json()) as { id: string };

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const supabase = adminClient();
  const { error } = await supabase.from("registrations").delete().eq("id", id);

  if (error) {
    console.error("[admin] delete error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
