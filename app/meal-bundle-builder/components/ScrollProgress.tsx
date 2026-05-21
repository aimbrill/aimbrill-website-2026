"use client";

import React, { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const elRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let rafId = 0;
    const node = elRef.current;
    const loop = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, scrollY / max));
      if (node) node.style.transform = `scaleX(${progress})`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div aria-hidden className="scroll-progress-wrap">
      <div ref={elRef} className="scroll-progress-bar" />
    </div>
  );
}
