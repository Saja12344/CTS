import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroMetallic from "@/assets/hero-metallic.jpg";
import logoLight from "@/assets/logo-light.png";

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

  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-2, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);

  return (
    <div ref={ref} className={`relative ${className}`} aria-hidden="true">
      <motion.div style={{ y, rotate, opacity }} className="relative mx-auto aspect-[4/5] max-w-md md:max-w-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(72_100%_65%/0.08),transparent_55%)]" />
        <img
          src={heroMetallic}
          alt=""
          className="h-full w-full object-contain object-center mix-blend-lighten opacity-95"
          loading="eager"
        />
        <img
          src={logoLight}
          alt=""
          className="pointer-events-none absolute bottom-[8%] right-[6%] h-16 w-auto opacity-90 md:h-20"
        />
      </motion.div>
    </div>
  );
};

export default MetallicVisual;
