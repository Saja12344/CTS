import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cinematicEase } from "@/lib/motion";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Lightweight reveal — reserved for sparse use, not every block. */
const SectionReveal = ({ children, className, delay = 0 }: SectionRevealProps) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0.01, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.7, ease: cinematicEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
