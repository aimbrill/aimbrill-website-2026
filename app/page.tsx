"use client";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Apps } from "@/components/site/Apps";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Testimonials } from "@/components/site/Testimonials";
import { Brands } from "@/components/site/Brands";
import { FounderNote } from "@/components/site/FounderNote";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Brands />
      <Services />
      <Apps />
      <CaseStudy />
      <Testimonials />
      <Contact />
      <FounderNote />
      <Footer />
    </main>
  );
}
