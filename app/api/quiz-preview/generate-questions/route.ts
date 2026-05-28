import { NextRequest, NextResponse } from "next/server";
import { fetchGenerateQuestions } from "@/lib/quiz-preview/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const shop = typeof body.shop === "string" ? body.shop.trim() : "";
    const count =
      typeof body.count === "number" && body.count > 0 && body.count <= 20
        ? Math.floor(body.count)
        : 7;

    if (!shop) {
      return NextResponse.json({ success: false, error: "Shop URL is required" }, { status: 400 });
    }

    const data = await fetchGenerateQuestions({ shop, count });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to generate questions";
    return NextResponse.json({ success: false, error: message }, { status: 502 });
  }
}
