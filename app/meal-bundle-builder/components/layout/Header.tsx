"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Zap, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useMarketingScroll } from "../../hooks/use-marketing-scroll";
import { mealFlowLinks } from "../../lib/links";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Motion = motion as any;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled, activeSection } = useMarketingScroll();

  const navLinks = [
    { name: "Problem", href: "#problem", id: "problem" },
    { name: "Comparison", href: "#comparison", id: "comparison" },
    { name: "Industries", href: "#industries", id: "industries" },
    { name: "Process", href: "#process", id: "process" },
    { name: "Try Meal Flow", href: mealFlowLinks.tryMealFlow, id: "try-meal-flow" },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ease-in-out ${isScrolled ? "pt-2 pb-0" : "pt-3 pb-0 sm:pt-4 sm:pb-0"}`}
    >
      <div
        className={`group/nav-box relative mx-auto max-w-7xl overflow-hidden rounded-[24px] border px-5 py-2.5 transition-all duration-700 sm:px-8 ${isMenuOpen ? "border-[var(--border)] bg-[var(--bg)] shadow-none backdrop-blur-none" : isScrolled ? "border-white/20 bg-white/85 shadow-[0_20px_60px_-12px_rgba(30,27,75,0.18)] backdrop-blur-xl" : "border-white/40 bg-white/20 shadow-[0_8px_32px_rgba(30,27,75,0.04)] backdrop-blur-md"}`}
      >
        <Motion.div
          className="absolute bottom-0 left-0 right-0 z-20 h-[1.5px] origin-[0%] bg-[var(--violet)]"
          style={{ scaleX }}
        />

        <div className="relative z-10 flex items-center justify-between">
          <Link href={mealFlowLinks.home} className="group flex items-center gap-3">
            <div className="flex select-none flex-col">
              <span className="text-[17px] font-black leading-none tracking-tight text-[var(--heading)]">
                MealFlow Box
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${isActive ? "text-[var(--violet)]" : "text-[var(--subtle)] hover:bg-white/40 hover:text-[var(--heading)]"}`}
                >
                  {/* active background removed to prevent white pill behind links */}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-6 sm:flex">
            <Link
              href={mealFlowLinks.tryMealFlow}
              className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--heading)] transition-all hover:text-[var(--heading)] lg:hidden"
            >
              TRY MEAL FLOW
            </Link>

            <Link
              href={mealFlowLinks.shopify}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2.5 whitespace-nowrap rounded-[18px] px-7 py-3 text-[12px] font-bold !text-white shadow-lg shadow-[rgba(122,58,37,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[rgba(122,58,37,0.28)] active:scale-95"
              style={{ background: "var(--btn-primary-gradient)" }}
            >
              Install on Shopify
              <ChevronRight
                size={16}
                className="text-white/80 transition-transform group-hover/btn:translate-x-1"
              />
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={`rounded-xl p-2.5 transition-all lg:hidden ${isMenuOpen ? "bg-[var(--heading)] text-white" : "text-[var(--heading)] hover:bg-[rgba(61,52,46,0.08)]"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-[210] lg:hidden"
          >
            <div className="relative min-h-[100dvh] h-[100dvh] overflow-y-auto bg-[var(--bg)] px-7 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28">
              <div className="flex flex-col gap-1 sm:gap-2">
                {navLinks.map((link, i) => (
                  <Motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="border-b border-[rgba(23,34,33,0.22)] pb-4"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-between py-1 text-[0.92rem] font-semibold uppercase leading-tight tracking-[0.035em] text-[var(--heading)] transition-colors hover:text-[var(--heading)] sm:text-[1rem]"
                    >
                      {link.name}
                      <ChevronRight
                        size={20}
                        className="opacity-70 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </Motion.div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-2.5 pt-1 sm:mt-8 sm:gap-3">
                <Link
                  href={mealFlowLinks.shopify}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-[rgba(61,52,46,0.12)] bg-white py-2.5 text-center text-[9px] font-semibold tracking-[0.07em] text-[var(--heading)] transition-colors hover:bg-white/80 sm:text-[10px]"
                >
                  Install on Shopify
                </Link>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
