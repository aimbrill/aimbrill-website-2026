import { NextRequest, NextResponse } from "next/server";
import { fetchRecommendations } from "@/lib/quiz-preview/server";
import type { QuizPreviewApiQuestion } from "@/lib/quiz-preview/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const shop = typeof body.shop === "string" ? body.shop.trim() : "";
    const previewQuizId =
      typeof body.previewQuizId === "string" ? body.previewQuizId.trim() : undefined;
    const previewToken =
      typeof body.previewToken === "string" ? body.previewToken.trim() : undefined;
    const questions = Array.isArray(body.questions)
      ? (body.questions as QuizPreviewApiQuestion[])
      : [];
    const answers = Array.isArray(body.answers) ? body.answers.map((a: unknown) => String(a)) : [];

    if (!shop) {
      return NextResponse.json({ success: false, error: "Shop URL is required" }, { status: 400 });
    }

    if (!questions.length || answers.length !== questions.length) {
      return NextResponse.json(
        { success: false, error: "Questions and answers are required" },
        { status: 400 },
      );
    }

    const data = await fetchRecommendations({
      shop,
      previewQuizId,
      previewToken,
      questions,
      answers,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch recommendations";
    return NextResponse.json({ success: false, error: message }, { status: 502 });
  }
}
