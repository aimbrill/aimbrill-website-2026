"use client";

import type { CSSProperties, ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionShell({
  id,
  children,
  className = "",
  style = {},
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <section id={id} className={`section ${className}`} style={style}>
      <div className="mx-auto w-full min-w-0 max-w-6xl">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
