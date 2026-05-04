import { useState } from "react";
import { SectionHeader } from "./Services";
import { useReveal } from "@/hooks/use-reveal";

const WHATSAPP_NUMBER = "917990488965"; // +91 79904 88965
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useReveal<HTMLElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const url = String(data.get("url") || "").trim();
    const need = String(data.get("need") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text =
      `Hi Aimbrill, I'd like to get in touch.%0A%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Email:* ${encodeURIComponent(email)}%0A` +
      (url ? `*Website:* ${encodeURIComponent(url)}%0A` : "") +
      `*Need:* ${encodeURIComponent(need)}%0A` +
      (message ? `*Details:* ${encodeURIComponent(message)}` : "");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal">
          <SectionHeader
            label="Get in touch"
            title={
              <>
                Ready to build <span className="italic">something great?</span>
              </>
            }
            sub="Whether you need a custom Shopify app, AI automation, or a store built from scratch — let's talk. First call is free."
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <form
            onSubmit={handleSubmit}
            className="reveal relative overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-10 lg:col-span-7 grain shadow-soft"
          >
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[color:var(--lime)] text-2xl text-ink">
                  ✓
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">Opening WhatsApp...</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Your message is ready in a WhatsApp chat with our team. Hit send and we{"'"}ll
                  reply within 24 hours.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-background hover:scale-[1.03] transition"
                >
                  Open WhatsApp again <span>↗</span>
                </a>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Your name *" name="name" required placeholder="Jane Doe" />
                  <Field
                    label="Your email *"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@brand.com"
                  />
                </div>
                <Field
                  label="Your website or Shopify store URL"
                  name="url"
                  placeholder="https://yourstore.com"
                />

                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    What do you need help with?
                  </label>
                  <select
                    name="need"
                    defaultValue="Custom Shopify app development"
                    className="mt-2 w-full appearance-none rounded-2xl border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none focus:border-ink focus:ring-2 focus:ring-[color:var(--lime)]/40"
                  >
                    <option>Custom Shopify app development</option>
                    <option>AI automation or integration</option>
                    <option>Shopify store development</option>
                    <option>WeUpsell app setup or customisation</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Tell us more
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your project or challenge in a few sentences..."
                    className="mt-2 w-full resize-none rounded-2xl border border-input bg-background px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-ink focus:ring-2 focus:ring-[color:var(--lime)]/40"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="send"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-background transition hover:scale-[1.03]"
                >
                  Send message via WhatsApp <span>→</span>
                </button>
                <p className="text-xs text-muted-foreground">
                  Your message will open directly in WhatsApp with our team.
                </p>
              </div>
            )}
          </form>

          <aside className="lg:col-span-5">
            <div className="reveal grid gap-4">
              <Info
                icon="📍"
                title="Small team. Big results."
                text="We work with e-commerce brands globally."
              />
              <Info
                icon="⚡"
                title="Fast response"
                text="Typical response time: within 24 hours."
              />
              <Info
                icon="🔒"
                title="Private by default"
                text="Your info is never shared or sold."
              />
            </div>

            <div className="reveal mt-5 overflow-hidden rounded-3xl border border-border bg-ink p-6 text-background grain">
              <div className="font-mono text-xs uppercase tracking-widest text-[color:var(--lime)]">
                Prefer a direct chat?
              </div>
              <h4 className="mt-3 font-display text-2xl font-semibold">Skip the form.</h4>
              <div className="mt-5 grid gap-2.5">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium transition hover:bg-white/10"
                >
                  <span>💬 WhatsApp</span>
                  <span>↗</span>
                </a>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium transition hover:bg-white/10"
                >
                  <span>📅 Book a 30-min call on Calendly</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-ink focus:ring-2 focus:ring-[color:var(--lime)]/40"
      />
    </div>
  );
}

function Info({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
      <span className="text-xl">{icon}</span>
      <div>
        <div className="font-display font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}
