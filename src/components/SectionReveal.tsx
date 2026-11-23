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
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.75, ease: cinematicEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
