// app/api/request-talent/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const data = Object.fromEntries(formData.entries());

  // TODO: send this to email, Notion, DB, Slack, etc.
  console.log("New talent request:", data);

  return NextResponse.json({ success: true });
}
