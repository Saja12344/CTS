import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroMetallic from "@/assets/hero-metallic.jpg";

type MetallicVisualProps = {
  className?: string;
};

const MetallicVisual = ({ className = "" }: MetallicVisualProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-4, 5]);

  return (
    <div ref={ref} className={`relative isolate ${className}`} aria-hidden="true">
      <div className="hero-orb pointer-events-none absolute inset-[-10%] rounded-full bg-[radial-gradient(circle_at_center,rgba(230,230,228,0.14),transparent_62%)]" />
      <motion.div style={{ y, rotate }} className="relative z-10">
        <img
          src={heroMetallic}
          alt=""
          className="mx-auto h-auto w-full max-w-xl object-contain"
          loading="eager"
          decoding="async"
        />
      </motion.div>
    </div>
  );
};

export default MetallicVisual;
