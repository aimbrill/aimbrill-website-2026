import { useState } from "react";
import { SectionHeader } from "./Services";
import { useReveal } from "@/hooks/use-reveal";

const WHATSAPP_NUMBER = "917990488965"; // +91 79904 88965
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";

export function Contact() {
  const [waPopupOpen, setWaPopupOpen] = useState(false);
  const [waTopic, setWaTopic] = useState("custom apps");
  const [waCustomTopic, setWaCustomTopic] = useState("");
  const ref = useReveal<HTMLElement>();

  const waSelectedTopic =
    waTopic === "other" ? waCustomTopic.trim() || "something personal" : waTopic;
  const waDefaultMessage = `Hey Dharmik - I was checking out Aimbrill and had a question about ${waSelectedTopic}.`;

  const openWaPopup = (topic = "custom apps") => {
    setWaTopic(topic);
    setWaCustomTopic("");
    setWaPopupOpen(true);
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waDefaultMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const openChatbot = () => {
    window.dispatchEvent(
      new CustomEvent("desti-chatbot-query", {
        detail: {
          query: "Hi",
          hideUI: true,
        },
      }),
    );
  };

  return (
    <section id="contact" ref={ref} className="relative py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="reveal lg:col-span-5">
            <SectionHeader
              label="Get in touch"
              title={
                <span className="md:whitespace-nowrap">
                  Ready to build <span className="italic">something great?</span>
                </span>
              }
              sub="Whether you need a custom Shopify app, AI automation, or a store built from scratch — let's talk. First call is free."
            />

            <div className="mt-6">
              <button
                type="button"
                onClick={openChatbot}
                className="inline-flex items-center rounded-lg border border-white/10 bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-95"
              >
                💬 Chat with us now
              </button>
            </div>
          </div>

          {/* AI preview removed per request */}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left: Prefer a direct chat */}
          <div className="lg:col-span-5">
            <div className="w-full overflow-hidden rounded-2xl border border-border bg-ink p-4 text-background grain">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0" aria-hidden />
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-lime">
                    Prefer a direct chat?
                  </div>
                  <h4 className="mt-2 font-display text-xl font-semibold">Skip the form.</h4>
                </div>
              </div>
              <div className="mt-3 grid gap-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    openWaPopup("custom apps");
                  }}
                  className="w-full flex items-center justify-between rounded-full border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm font-medium transition hover:bg-[rgba(255,255,255,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 inline-grid place-items-center rounded-lg bg-[rgba(0,0,0,0.04)]">
                      💬
                    </div>
                    <div>
                      <div className="font-display font-semibold">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">Message us on WhatsApp</div>
                    </div>
                  </div>
                  <span className="text-muted-foreground">↗</span>
                </a>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between rounded-full border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm font-medium transition hover:bg-[rgba(255,255,255,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 inline-grid place-items-center rounded-lg bg-[rgba(0,0,0,0.04)]">
                      📅
                    </div>
                    <div>
                      <div className="font-display font-semibold">
                        Book a 30-min call on Calendly
                      </div>
                      <div className="text-sm text-muted-foreground">Schedule a meeting</div>
                    </div>
                  </div>
                  <span className="text-muted-foreground">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-6">
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
          </div>
        </div>
      </div>

      {waPopupOpen ? (
        <div className="fixed bottom-6 right-6 z-9998 w-72.5 rounded-2xl border border-border bg-card p-4 shadow-pop">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-lime text-sm font-semibold text-lime-foreground">
              D
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">Dharmik</div>
              <div className="text-xs text-lime">typically replies instantly</div>
            </div>
            <button
              type="button"
              onClick={() => setWaPopupOpen(false)}
              className="ml-auto text-lg leading-none text-muted-foreground"
              aria-label="Close WhatsApp popup"
            >
              x
            </button>
          </div>

          <div className="mb-3 rounded-lg border-l-3 border-lime bg-(--lime)/12 px-3 py-2 text-sm text-foreground">
            {waDefaultMessage}
          </div>

          <label htmlFor="wa-topic" className="sr-only">
            WhatsApp topic
          </label>
          <select
            id="wa-topic"
            value={waTopic}
            onChange={(e) => {
              setWaTopic(e.target.value);
              if (e.target.value !== "other") {
                setWaCustomTopic("");
              }
            }}
            className="mb-3 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground"
          >
            <option value="custom apps">Custom apps</option>
            <option value="WeUpsell">WeUpsell</option>
            <option value="store development">Store development</option>
            <option value="other">Other</option>
          </select>

          {waTopic === "other" ? (
            <input
              type="text"
              value={waCustomTopic}
              onChange={(e) => setWaCustomTopic(e.target.value)}
              placeholder="Type your topic..."
              className="mb-3 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
            />
          ) : null}

          <button
            type="button"
            onClick={openWhatsApp}
            className="w-full rounded-lg bg-lime px-3 py-2.5 text-sm font-semibold text-lime-foreground"
          >
            Chat on WhatsApp
          </button>
        </div>
      ) : null}
    </section>
  );
}

function Info({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="w-full rounded-3xl bg-white border border-gray-100 shadow-sm p-6">
      <div className="flex items-start gap-4">
        <div className="shrink-0 inline-grid place-items-center w-12 h-12 rounded-lg bg-[rgba(0,0,0,0.03)] text-2xl">
          {icon}
        </div>
        <div>
          <div className="text-lg font-semibold text-ink mb-1">{title}</div>
          <div className="text-sm text-muted-foreground">{text}</div>
        </div>
      </div>
    </div>
  );
}
