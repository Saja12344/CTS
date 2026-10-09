import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroMetallic from "@/assets/hero-metallic.jpg";

type MetallicVisualProps = {
  className?: string;
  compact?: boolean;
};

const MetallicVisual = ({ className = "", compact = false }: MetallicVisualProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [32, -32]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-3, 4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [1, 1, 1] : [0.96, 1, 0.98]);

  return (
    <div ref={ref} className={`relative ${className}`} aria-hidden="true">
      <motion.div
        style={{ y, rotate, scale }}
        className={`relative mx-auto ${compact ? "max-w-xs" : "aspect-[4/5] max-w-md md:max-w-xl"}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(230,230,228,0.12),transparent_55%)]" />
        <img
          src={heroMetallic}
          alt=""
          className="h-full w-full object-contain object-center"
          loading={compact ? "lazy" : "eager"}
          decoding="async"
        />
      </motion.div>
    </div>
  );
};

export default MetallicVisual;
