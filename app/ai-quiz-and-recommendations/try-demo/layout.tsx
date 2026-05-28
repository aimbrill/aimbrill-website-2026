import type { Metadata, Viewport } from "next";
import "./try-demo.css";

export const metadata: Metadata = {
  title: "Try Demo | AI Quiz",
  description: "Build and demo an AI product recommendation quiz in minutes.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#f9f7f2",
};

export default function TryDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
