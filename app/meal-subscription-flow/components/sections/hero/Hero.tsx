"use client";

import { MessageCircle, Sparkles } from "lucide-react";
import EyebrowPill from "../../ui/EyebrowPill";
import SplitSectionHeadline from "../../ui/SplitSectionHeadline";
import { Motion, fadeUp } from "../../../lib/motion";
import { mealFlowLinks } from "../../../lib/links";

export default function Hero() {
  return (
    <section className="hero section section--xl relative flex items-start justify-center pt-24 sm:pt-28 md:pt-32">
      <Motion.div
        className="relative z-20 mt-0 flex w-full max-w-6xl flex-col items-center justify-center text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="mx-auto w-full max-w-6xl text-center">
          <div className="mx-auto inline-flex w-fit max-w-155">
            <EyebrowPill label="BUILT FOR DELIVERY & SUBSCRIPTION BRANDS" />
          </div>
          <SplitSectionHeadline
            as="h1"
            className="section-headline h1-display mx-auto mt-4 w-full max-w-[860px] text-center font-extrabold"
            lead="Your delivery date-picker, subscriptions, and bundles"
            accent="fully connected in one system."
          />
          <p className="body-copy mx-auto mt-0 max-w-[780px] text-center text-[18px]">
            Built for food, meal, and recurring delivery brands. We set up your full automated flow
            - so delivery, subscriptions, and products all work together, without manual fixes every
            week.
          </p>
          <p className="mt-4 w-full text-center text-[14px] font-semibold tracking-[0.06em] text-(--cyan)">
            ↳ Delivery · Subscription · Bundles · All connected.
          </p>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={mealFlowLinks.tryMealFlow}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Sparkles size={18} className="fill-current" />
              Try Meal Flow
            </a>
            <a
              href={mealFlowLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 bg-white"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          <div
            className="hero-media-shell mx-auto mt-10 w-full max-w-230 overflow-hidden rounded-[20px] border p-3"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="hero-media-inner overflow-hidden rounded-[14px] border border-white/70 bg-white p-2">
              <video
                className="aspect-video h-auto w-full rounded-[10px] bg-black/5"
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
              >
                <source src="/meal-subscription-flow/meal-delivery.mp4" type="video/mp4" />
                <track
                  kind="captions"
                  src="/meal-subscription-flow/meal-delivery-captions.vtt"
                  srcLang="en"
                  label="English"
                  default
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
