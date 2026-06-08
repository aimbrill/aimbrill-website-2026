import Image from "next/image";

const LOGO_WIDTH = 1053;
const LOGO_HEIGHT = 303;

export function QuizLogo({ light = false, header = false }: { light?: boolean; header?: boolean }) {
  return (
    <Image
      src="/ai-quiz-landing/logo.png"
      alt="AI Quiz"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={!light || header}
      className={`aq-logo ${light ? "aq-logo--light" : ""} ${header ? "aq-logo--header" : ""}`}
      style={
        header
          ? {
              width: "auto",
              height: "56px",
              maxWidth: "none",
            }
          : undefined
      }
    />
  );
}
