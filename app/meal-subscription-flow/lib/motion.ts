import { motion } from "framer-motion";

/** Typed alias used across sections that animate with Framer Motion. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Motion = motion as any;

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.1 } },
};
