export function QuizLogo({ light = false }: { light?: boolean }) {
  return <span className={`aq-logo ${light ? "aq-logo--light" : ""}`}>AI Quiz</span>;
}
