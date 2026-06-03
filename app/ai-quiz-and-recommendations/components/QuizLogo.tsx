import Image from "next/image";

export function QuizLogo({ light = false }: { light?: boolean }) {
  return (
    <Image
      src="/ai-quiz-landing/logo.png"
      alt="AI Quiz"
      width={1536}
      height={1024}
      priority={!light}
      className={`aq-logo ${light ? "aq-logo--light" : ""}`}
    />
  );
}
