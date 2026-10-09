import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LogoMark from "@/components/brand/LogoMark";
import { cinematicEase, heroWord } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type HeroSectionProps = {
  content: (typeof siteContent)[Language]["hero"];
  language: Language;
};

const HeroSection = ({ content, language }: HeroSectionProps) => {
  const reduceMotion = useReducedMotion();
  const isArabic = language === "ar";
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const markScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 0.86]);
  const markY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 48]);
  const markOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.55], [0, -24]);

  const words = content.headline.split(" ");

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden border-b rule"
    >
      <div className="grid-shell grid min-h-[100svh] grid-cols-1 items-center gap-10 pb-16 pt-28 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-32">
        <motion.div
          style={{ opacity: copyOpacity, y: copyY }}
          className={`relative z-10 lg:col-span-6 lg:pb-6 ${isArabic ? "text-center lg:text-right" : "text-center lg:text-left"}`}
        >
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: cinematicEase, delay: 0.35 }}
            className="micro-label mb-8"
          >
            {content.label}
          </motion.p>

          <h1 className="type-display mb-8 text-[clamp(2.75rem,8vw,6.5rem)]">
            {words.map((word, i) => (
              <span key={`${word}-${i}`}>
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block"
                    custom={i}
                    initial={reduceMotion ? false : "hidden"}
                    animate="visible"
                    variants={heroWord}
                  >
                    {word}
                  </motion.span>
                </span>
                {i < words.length - 1 ? " " : null}
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: cinematicEase, delay: 0.95 }}
            className={`mb-10 max-w-md text-base leading-7 text-muted-foreground md:text-lg ${isArabic ? "lg:ms-auto" : ""}`}
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: cinematicEase, delay: 1.1 }}
            className="flex justify-center lg:justify-start"
          >
            <a href="#contact" className="btn-solid btn-motion">
              {content.primaryCta}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ scale: markScale, y: markY, opacity: markOpacity }}
          className="relative z-0 flex justify-center lg:col-span-6 lg:justify-end"
        >
          <LogoMark />
        </motion.div>
      </div>

      {/* Continuity cue into the page narrative */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-transparent via-foreground/40 to-transparent"
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: cinematicEase, delay: 1.2 }}
      />
    </section>
  );
};

export default HeroSection;
