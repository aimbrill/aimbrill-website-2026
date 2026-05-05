"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function GuideFaqAccordion({ children }: { children: React.ReactNode }) {
  return (
    <Accordion type="single" collapsible className="guide-faq-accordion w-full">
      {children}
    </Accordion>
  );
}

export function GuideFaqItem({
  value,
  question,
  children,
}: {
  value: string;
  question: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem
      value={value}
      id={value}
      className={cn(
        "border-0 border-b border-border last:border-b-0",
        "px-4 sm:px-5",
        "data-[state=open]:bg-surface-2/50",
      )}
    >
      <AccordionTrigger
        className={cn(
          "py-4 text-left text-base font-semibold tracking-tight text-ink hover:no-underline hover:text-ink",
          "font-display [&>svg]:text-muted-foreground",
        )}
      >
        {question}
      </AccordionTrigger>
      <AccordionContent className="guide-faq-panel text-[0.9375rem] leading-relaxed text-muted-foreground">
        <div className="space-y-3 pb-5 pr-2 pt-0">{children}</div>
      </AccordionContent>
    </AccordionItem>
  );
}
