"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#apps", label: "Apps" },
  { href: "/#contact", label: "Contact" },
];

function navLinkActive(currentHash: string, href: string) {
  const hashFromHref = href.includes("#") ? href.slice(href.indexOf("#")) : "";
  return currentHash === hashFromHref;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const read = () => setHash(window.location.hash);
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const barSurface =
    "relative flex min-h-[3.25rem] w-full items-center justify-between gap-3 rounded-2xl px-4 py-2.5 transition-all duration-300 sm:min-h-[3.5rem] sm:rounded-3xl sm:px-6 sm:py-3 md:px-7 " +
    (scrolled
      ? "bg-background/95 shadow-[0_12px_40px_-12px_rgba(15,15,15,0.2)] backdrop-blur-xl"
      : "bg-background/90 backdrop-blur-md");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        {/* Single floating bar — logo | nav (centered) | CTA / menu */}
        <div className={barSurface}>
          <Link
            href="/"
            data-cursor="home"
            className="group relative z-10 flex shrink-0 items-center py-1 text-ink transition-transform hover:scale-[1.02]"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                if (window.location.hash) {
                  window.history.replaceState(null, "", "/");
                  setHash("");
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/images/aimbrill-wordmark-transparent.png"
              alt="Aimbrill"
              width={480}
              height={120}
              priority
              className="h-9 w-auto object-contain sm:h-10 md:h-11"
            />
          </Link>

          <nav
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:pointer-events-auto md:block"
            aria-label="Primary"
          >
            <ul className="pointer-events-auto flex items-center gap-8 md:gap-10">
              {links.map((l) => {
                const active = navLinkActive(hash, l.href);
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={`text-sm transition-colors ${
                        active
                          ? "font-semibold text-ink"
                          : "font-medium text-muted-foreground hover:text-ink"
                      }`}
                    >
                      <span className="relative inline-block pb-1">
                        {l.label}
                        <span
                          aria-hidden
                          className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[color:var(--lime)] transition-opacity ${
                            active ? "opacity-100" : "opacity-0 hover:opacity-60"
                          }`}
                        />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative z-10 flex shrink-0 items-center justify-end gap-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="let's talk"
              className="group hidden items-center gap-2 rounded-full bg-[color:var(--lime)] px-4 py-2 text-sm font-semibold text-ink shadow-[0_1px_0_rgba(255,255,255,0.35)_inset] transition-transform hover:scale-[1.03] md:inline-flex md:px-5"
            >
              <span>Book a free call</span>
              <span
                className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-[11px] text-background transition-transform group-hover:rotate-45"
                aria-hidden
              >
                ↗
              </span>
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background/80 text-ink backdrop-blur-sm transition-colors hover:bg-surface md:hidden"
            >
              <div className="flex h-3.5 w-4 flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-full rounded-full bg-ink transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-ink transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-[0_16px_48px_-20px_rgba(15,15,15,0.2)] backdrop-blur-xl md:hidden">
            <nav className="p-2" aria-label="Mobile">
              {links.map((l) => {
                const active = navLinkActive(hash, l.href);
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] transition-colors hover:bg-secondary ${
                      active ? "font-semibold text-ink" : "font-medium text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                );
              })}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mx-2 mb-2 block rounded-xl bg-[color:var(--lime)] px-4 py-3.5 text-center text-sm font-semibold text-ink shadow-[0_1px_0_rgba(255,255,255,0.35)_inset]"
              >
                Book a free call →
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
