"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { apps, AppIcon } from "./Apps";
import { AppsMegaMenu } from "./AppsMegaMenu";
import { useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#apps", label: "Apps", isApps: true },
  { href: "/blog", label: "Blog" },
] as const;

function NavUnderline({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-lime transition-opacity duration-200 ${
        active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    />
  );
}

function NavLinkLabel({ label, active }: { label: string; active: boolean }) {
  return (
    <span className="relative inline-block">
      {label}
      <NavUnderline active={active} />
    </span>
  );
}

function navItemActive(pathname: string, hash: string, href: string) {
  if (href === "/blog") {
    return pathname === "/blog" || pathname.startsWith("/blog/");
  }
  if (href.startsWith("/#")) {
    return pathname === "/" && hash === href.slice(href.indexOf("#"));
  }
  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [hash, setHash] = useState("");
  const appsRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!appsOpen || open) return;
      const target = e.target as Node;
      if (appsRef.current && !appsRef.current.contains(target)) {
        setAppsOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [appsOpen, open]);

  useEffect(() => {
    if (!open) setAppsOpen(false);
  }, [open]);

  useEffect(() => {
    const read = () => setHash(window.location.hash);
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  useEffect(() => {
    setAppsOpen(false);
  }, [pathname]);

  const barSurface =
    "relative flex min-h-[2.75rem] w-full items-center justify-between gap-3 rounded-2xl px-4 py-2 transition-all duration-300 sm:min-h-[3rem] sm:rounded-3xl sm:px-6 sm:py-2.5 md:px-7 " +
    (scrolled
      ? "bg-background/95 shadow-[0_12px_40px_-12px_rgba(15,15,15,0.2)] backdrop-blur-xl"
      : "bg-background/90 backdrop-blur-md");

  const linkTone = (active: boolean) =>
    active ? "font-semibold text-ink" : "font-medium text-muted-foreground hover:text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-1" : "py-2"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
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
              width={720}
              height={180}
              priority
              className="h-10 w-auto object-contain sm:h-12 md:h-14"
            />
          </Link>

          <nav
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:pointer-events-auto md:block"
            aria-label="Primary"
          >
            <ul className="pointer-events-auto flex items-center gap-8 md:gap-10">
              {links.map((l) => {
                const active = navItemActive(pathname, hash, l.href);

                if ("isApps" in l && l.isApps) {
                  return (
                    <li key={l.href} ref={appsRef} className="relative">
                      <button
                        type="button"
                        onClick={() => setAppsOpen((v) => !v)}
                        aria-haspopup="menu"
                        aria-expanded={appsOpen}
                        className={`group inline-flex items-center gap-0.5 ${linkTone(active || appsOpen)}`}
                      >
                        <NavLinkLabel label={l.label} active={active || appsOpen} />
                        <ChevronDown
                          className={`relative -top-px ml-0.5 h-4 w-4 shrink-0 transition-transform duration-200 ${
                            appsOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        />
                      </button>
                      <AppsMegaMenu open={appsOpen} onClose={() => setAppsOpen(false)} />
                    </li>
                  );
                }

                return (
                  <li key={l.href}>
                    <Link href={l.href} className={`group ${linkTone(active)}`}>
                      <NavLinkLabel label={l.label} active={active} />
                    </Link>
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
              className="group hidden items-center gap-3 rounded-full bg-lime px-5 py-2.5 text-[16px] font-semibold text-ink shadow-[0_1px_0_rgba(255,255,255,0.35)_inset] transition-transform hover:scale-[1.03] md:inline-flex md:px-6"
            >
              <span>Book a free call</span>
              <span
                className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-[11px] text-background transition-transform group-hover:rotate-45"
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
                  className={`block h-0.5 w-full rounded-full bg-ink transition ${open ? "translate-y-1.25 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-ink transition ${open ? "-translate-y-1.25 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-[0_16px_48px_-20px_rgba(15,15,15,0.2)] backdrop-blur-xl md:hidden">
            <nav className="p-2" aria-label="Mobile">
              {links.map((l) => {
                const active = navItemActive(pathname, hash, l.href);

                if ("isApps" in l && l.isApps) {
                  return (
                    <div key={l.href} className="px-2">
                      <button
                        type="button"
                        onClick={() => setAppsOpen((v) => !v)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[16px] transition-colors hover:bg-secondary ${linkTone(active || appsOpen)}`}
                      >
                        <span>{l.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${appsOpen ? "rotate-180" : ""}`}
                          aria-hidden
                        />
                      </button>

                      {appsOpen && (
                        <div
                          className="mb-2 mt-1 rounded-xl border border-border bg-surface p-2"
                          onPointerDown={(e) => e.stopPropagation()}
                        >
                          <ul className="flex flex-col gap-0.5" role="menu" aria-label="Our apps">
                            {apps.map((a) => (
                              <li
                                key={a.name}
                                role="none"
                                className="rounded-lg transition-colors hover:bg-surface-2"
                              >
                                <Link
                                  href={a.pagePath}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  role="menuitem"
                                  onClick={() => {
                                    setOpen(false);
                                    setAppsOpen(false);
                                  }}
                                  className="flex gap-3 rounded-lg p-3 active:bg-surface-2"
                                >
                                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                                    <AppIcon app={a} size="sm" />
                                  </div>
                                  <div className="min-w-0 flex-1 pt-0.5">
                                    <p className="text-[15px] font-semibold leading-snug text-ink">
                                      {a.name}
                                    </p>
                                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                                      {a.menuDesc}
                                    </p>
                                  </div>
                                </Link>
                                {a.secondaryMenuLink ? (
                                  <div className="border-t border-border/60 px-3 pb-3 pt-0">
                                    <Link
                                      href={a.secondaryMenuLink.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => {
                                        setOpen(false);
                                        setAppsOpen(false);
                                      }}
                                      className="inline-flex text-[12px] font-semibold text-violet-600 hover:underline"
                                    >
                                      {a.secondaryMenuLink.label} →
                                    </Link>
                                  </div>
                                ) : null}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-1 border-t border-border pt-1">
                            <Link
                              href="/#apps"
                              onClick={() => {
                                setOpen(false);
                                setAppsOpen(false);
                              }}
                              className="block rounded-lg px-3 py-2.5 text-center text-[13px] font-semibold text-muted-foreground transition-colors active:bg-surface-2 hover:bg-surface-2 hover:text-ink"
                            >
                              View all apps →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[16px] transition-colors hover:bg-secondary ${linkTone(active)}`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mx-2 mb-2 block rounded-xl bg-lime px-5 py-3.5 text-center text-[16px] font-semibold text-ink shadow-[0_1px_0_rgba(255,255,255,0.35)_inset]"
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
