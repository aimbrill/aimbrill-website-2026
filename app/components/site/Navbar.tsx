import { useEffect, useState } from "react";

const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";

const links = [
  { href: "#work", label: "Work" },
  { href: "#apps", label: "Apps" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`relative grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border px-0 py-1 transition-all ${
            scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "bg-background/70"
          }`}
        >
          {/* Logo block */}
          <a
            href="#top"
            data-cursor="home"
            className="group flex items-center rounded-xl px-0 py-2 text-ink transition-transform hover:scale-[1.02]"
          >
            <img
              src="/images/aimbrill-wordmark-transparent.png"
              alt="Aimbrill"
              className="h-10 w-auto object-contain md:h-12"
            />
          </a>

          {/* Center pill nav */}
          <nav className="relative hidden items-center justify-center md:flex">
            <ul className="flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group/link relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm transition-colors hover:bg-secondary"
                  >
                    <span className="font-medium text-ink">{l.label}</span>
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full bg-[color:var(--lime)] transition-transform group-hover/link:scale-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2 justify-self-end">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="let's talk"
              className="group hidden md:inline-flex items-center gap-2 rounded-full bg-[color:var(--lime)] px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              <span>Book a free call</span>
              <span
                className="grid h-5 w-5 place-items-center rounded-full bg-ink text-background transition-transform group-hover:rotate-45"
                aria-hidden
              >
                ↗
              </span>
            </a>

            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-background/60"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-4 bg-ink transition ${open ? "translate-y-1 rotate-45" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-4 bg-ink transition ${open ? "-translate-y-1 -rotate-45" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-background/95 p-3 backdrop-blur-xl md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm hover:bg-secondary"
              >
                <span>{l.label}</span>
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-[color:var(--lime)] px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              Book a free call →
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
