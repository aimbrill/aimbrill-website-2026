import type { Viewport } from "next";
import ScrollProgress from "./components/ScrollProgress";
import "./landing-globals.css";

export const viewport: Viewport = {
  themeColor: "#fff8f5",
};

export default function MealSubscriptionFlowLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <div className="meal-subscription-flow-landing antialiased overflow-x-hidden">{children}</div>
    </>
  );
}
