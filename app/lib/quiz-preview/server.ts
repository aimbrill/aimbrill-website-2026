import type {
  GenerateQuestionsData,
  GenerateQuestionsResponse,
  QuizPreviewApiQuestion,
  RecommendationsData,
  RecommendationsResponse,
} from "./types";

const DEFAULT_BASE_URL = "https://ai-quiz-weupsell.onrender.com";
const DEFAULT_ALLOWED_ORIGIN = "https://www.weupsell.com";

function getBaseUrl() {
  return process.env.QUIZ_PREVIEW_API_BASE_URL?.trim() || DEFAULT_BASE_URL;
}

function getAllowedOrigin() {
  return process.env.QUIZ_PREVIEW_ALLOWED_ORIGIN?.trim() || DEFAULT_ALLOWED_ORIGIN;
}

function previewHeaders(): HeadersInit {
  const origin = getAllowedOrigin();
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Origin: origin,
    Referer: `${origin}/`,
  };
}

async function parseJsonResponse<T>(res: Response): Promise<T> {
  const text = await res.text();
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error(res.ok ? "Invalid response from quiz preview API" : text || res.statusText);
  }
}

export async function fetchGenerateQuestions({
  shop,
  count = 7,
}: {
  shop: string;
  count?: number;
}): Promise<GenerateQuestionsData> {
  const res = await fetch(`${getBaseUrl()}/api/public/generate-questions`, {
    method: "POST",
    headers: previewHeaders(),
    body: JSON.stringify({ shop, count }),
    cache: "no-store",
  });

  const payload = await parseJsonResponse<GenerateQuestionsResponse>(res);

  if (!res.ok || !payload.success || !payload.data) {
    const message = payload.error || payload.message || `Generate questions failed (${res.status})`;
    throw new Error(message);
  }

  return payload.data;
}

export async function fetchRecommendations({
  shop,
  previewQuizId,
  previewToken,
  questions,
  answers,
}: {
  shop: string;
  previewQuizId?: string;
  previewToken?: string;
  questions: QuizPreviewApiQuestion[];
  answers: string[];
}): Promise<RecommendationsData> {
  const payloadBody: {
    shop: string;
    questions: QuizPreviewApiQuestion[];
    answers: string[];
    previewQuizId?: string;
    previewToken?: string;
  } = {
    shop,
    questions,
    answers,
  };
  if (previewQuizId) payloadBody.previewQuizId = previewQuizId;
  if (previewToken) payloadBody.previewToken = previewToken;

  const res = await fetch(`${getBaseUrl()}/api/public/recommendations`, {
    method: "POST",
    headers: previewHeaders(),
    body: JSON.stringify(payloadBody),
    cache: "no-store",
  });

  const payload = await parseJsonResponse<RecommendationsResponse>(res);

  if (!res.ok || !payload.success || !payload.data) {
    const message = payload.error || payload.message || `Recommendations failed (${res.status})`;
    throw new Error(message);
  }

  return payload.data;
}

export function buildBrandWizardUrl(shop: string): string {
  const storeUrl = shop.startsWith("http") ? shop : `https://${shop}`;
  return `https://app.weupsell.com/brand-wizard/run?url=${encodeURIComponent(storeUrl)}`;
}
