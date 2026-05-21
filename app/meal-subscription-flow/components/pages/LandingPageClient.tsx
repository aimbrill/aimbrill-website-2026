"use client";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Hero from "../sections/hero/Hero";
import Problem from "../sections/problem/Problem";
import Comparison from "../sections/comparison/Comparison";
import Industries from "../sections/industries/Industries";
import HowItWorks from "../sections/how-it-works/HowItWorks";
import FinalCTA from "../sections/final-cta/FinalCTA";

export default function LandingPageClient() {
  return (
    <main className="page-theme bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--violet)] selection:text-white">
      <Header />
      <Hero />
      <Problem />
      <Comparison />
      <Industries />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
