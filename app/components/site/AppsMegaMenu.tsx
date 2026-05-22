"use client";

import Link from "next/link";
import { apps, AppIcon } from "./Apps";

type AppsMegaMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function AppsMegaMenu({ open, onClose }: AppsMegaMenuProps) {
  if (!open) return null;

  return (
    <div
      role="menu"
      aria-label="Our apps"
      className="absolute left-1/2 top-full z-30 mt-4 w-[min(32rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-border bg-background p-3 shadow-[0_24px_60px_-16px_rgba(15,15,15,0.18)]"
    >
      <ul className="grid gap-0.5">
        {apps.map((app) => (
          <li
            key={app.name}
            role="none"
            className="rounded-xl transition-colors hover:bg-surface-2"
          >
            <Link
              href={app.pagePath}
              role="menuitem"
              onClick={onClose}
              className="group/item flex gap-4 p-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface">
                <AppIcon app={app} size="sm" />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[15px] font-semibold leading-snug text-ink">{app.name}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                  {app.menuDesc}
                </p>
              </div>
            </Link>
            {app.secondaryMenuLink ? (
              <div className="border-t border-border/60 px-3 pb-3 pt-0">
                <Link
                  href={app.secondaryMenuLink.href}
                  onClick={onClose}
                  className="inline-flex text-[12px] font-semibold text-violet-600 hover:text-violet-700 hover:underline"
                >
                  {app.secondaryMenuLink.label} →
                </Link>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      <div className="mt-2 border-t border-border pt-2">
        <Link
          href="/#apps"
          onClick={onClose}
          className="block rounded-lg px-3 py-2 text-center text-[13px] font-semibold text-muted-foreground transition-colors hover:bg-surface-2 hover:text-ink"
        >
          View all apps on homepage →
        </Link>
      </div>
    </div>
  );
}
