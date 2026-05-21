"use client";

import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "../ui/SocialIcons";
import { mealFlowLinks } from "../../lib/links";

type FooterLink = { label: string; href: string };

const solutions: FooterLink[] = [
  { label: "Delivery Logic", href: "#problem" },
  { label: "Subscription Flow", href: "#process" },
  { label: "Product Visibility", href: "#comparison" },
  { label: "Checkout Optimization", href: "#cta" },
];

const processLinks: FooterLink[] = [
  { label: "Logic Flow", href: "#process" },
  { label: "App Comparison", href: "#comparison" },
  { label: "Live Demo", href: mealFlowLinks.tryMealFlow },
];

export default function Footer() {
  const footerCol = (title: string, links: FooterLink[]) => (
    <div>
      <h4 className="text-[11px] font-semibold tracking-[0.14em] text-[var(--heading)]">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[14px] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--heading)]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer
      id="footer"
      className="border-t"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg)",
        paddingTop: "14px",
        paddingBottom: "14px",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href={mealFlowLinks.home} className="group flex items-center gap-3">
              <div className="flex select-none flex-col">
                <span className="text-[17px] font-black leading-none tracking-tight text-[var(--heading)]">
                  MealFlow Box
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-[280px] text-[14px] leading-[1.7] text-[var(--muted)]">
              We design and structure the architectural layer of your Shopify store so delivery,
              subscription, and product logic work together without conflicts.
            </p>
          </div>
          {footerCol("SOLUTIONS", solutions)}
          {footerCol("PROCESS", processLinks)}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.14em] text-[var(--heading)]">
              CONTACT
            </h4>
            <div className="mt-4 flex items-center gap-3">
              {[
                { icon: MessageCircle, href: mealFlowLinks.whatsapp, label: "WhatsApp" },
                { icon: Mail, href: mealFlowLinks.email, label: "Email" },
                { icon: InstagramIcon, href: mealFlowLinks.instagram, label: "Instagram" },
                { icon: LinkedInIcon, href: mealFlowLinks.linkedIn, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-[10px] border text-[var(--muted)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:bg-[var(--v-dim)] hover:text-[var(--heading)]"
                  style={{ background: "var(--card)", borderColor: "var(--border)" }}
                >
                  <Icon size={16} className="transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-[11px] font-medium tracking-[0.08em] text-[var(--subtle)] md:flex-row md:items-center"
          style={{ borderColor: "var(--border)" }}
        >
          <p>© 2026 MealFlow Box — Built for Shopify Plus.</p>
          <div>
            <Link
              href={mealFlowLinks.privacy}
              className="text-[11px] font-medium text-[var(--muted)] hover:text-[var(--heading)]"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
