export type QuizPreviewApiQuestion = {
  type: string;
  question?: string;
  text?: string;
  answers?: string[];
  inputType?: string;
};

export type GenerateQuestionsData = {
  previewQuizId: string;
  previewToken: string;
  installUrl: string;
  questions: QuizPreviewApiQuestion[];
};

export type GenerateQuestionsResponse = {
  success: boolean;
  data?: GenerateQuestionsData;
  error?: string;
  message?: string;
};

export type QuizPreviewProduct = {
  id?: string | number;
  title?: string;
  name?: string;
  image?: string;
  imageUrl?: string;
  price?: string | number;
  url?: string;
  [key: string]: unknown;
};

export type RecommendationsData = {
  products: QuizPreviewProduct[];
};

export type RecommendationsResponse = {
  success: boolean;
  data?: RecommendationsData;
  error?: string;
  message?: string;
};
