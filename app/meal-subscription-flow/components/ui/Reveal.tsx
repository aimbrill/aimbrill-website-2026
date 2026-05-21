"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, Variants, useInView } from "framer-motion";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Reveal({
  children,
  className = "",
  variants = defaultVariants,
  threshold = 0.12,
  once = true,
  staggerChildren = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  threshold?: number;
  once?: boolean;
  staggerChildren?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-20% 0px -10% 0px", amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const wrapperVariants: Variants = {
    hidden: { transition: { staggerChildren: 0 } },
    visible: { transition: { staggerChildren } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={wrapperVariants}
      className={className ? `${className} min-w-0` : "min-w-0"}
    >
      <motion.div variants={variants} className="min-w-0">
        {children}
      </motion.div>
    </motion.div>
  );
}
