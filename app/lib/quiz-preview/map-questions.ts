import type { QuizPreviewApiQuestion } from "./types";

export type DemoQuestion = {
  id: string;
  text: string;
  type: "input" | "multiple";
  options?: string[];
};

export function mapApiQuestionsToDemo(questions: QuizPreviewApiQuestion[]): DemoQuestion[] {
  if (!questions.length) return [];

  return questions.map((q, index) => {
    const isInput = q.type === "input";
    const text = (q.question ?? q.text ?? "").trim() || `Question ${index + 1}`;

    return {
      id: `q-${index + 1}`,
      text,
      type: isInput ? "input" : "multiple",
      options:
        !isInput && Array.isArray(q.answers) && q.answers.length > 0
          ? q.answers.map(String)
          : isInput
            ? undefined
            : ["Option 1", "Option 2"],
    };
  });
}

export function buildPreviewAnswers(questions: QuizPreviewApiQuestion[]): string[] {
  return questions.map((question) => {
    if (question.type === "input") {
      return question.inputType === "email" ? "preview@example.com" : "Preview User";
    }
    if (question.type === "choice" || question.type === "multiple") {
      return Array.isArray(question.answers) && question.answers.length
        ? String(question.answers[0])
        : "Answer";
    }
    return Array.isArray(question.answers) && question.answers.length
      ? String(question.answers[0])
      : "Answer";
  });
}
