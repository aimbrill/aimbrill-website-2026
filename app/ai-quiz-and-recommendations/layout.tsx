import type { Viewport } from "next";
import "./landing.css";
import "./how-it-works.css";
import "./feature-showcase.css";
import "./industry-showcase.css";
import "./before-vs-after.css";
import "./footer.css";
import "./mockup-accent.css";

export const viewport: Viewport = {
  themeColor: "#fdfaf3",
};

export default function AiQuizLandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ai-quiz-landing antialiased overflow-x-hidden" data-quiz-landing="">
      {children}
    </div>
  );
}
