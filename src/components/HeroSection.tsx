import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import frame0 from "@/assets/hero-frames/frame-0.png";
import frame1 from "@/assets/hero-frames/frame-1.png";
import frame2 from "@/assets/hero-frames/frame-2.png";
import frame3 from "@/assets/hero-frames/frame-3.png";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type HeroSectionProps = {
  content: (typeof siteContent)[Language]["hero"];
  language: Language;
};

const FRAMES = [frame0, frame1, frame2, frame3];

const HeroSection = ({ content, language }: HeroSectionProps) => {
  const reduceMotion = useReducedMotion();
  const isArabic = language === "ar";
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % FRAMES.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-brand-charcoal pb-20 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        {FRAMES.map((frame, index) => (
          <img
            key={frame}
            src={frame}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out"
            style={{ opacity: activeFrame === index ? 0.9 : 0 }}
          />
        ))}
        <div
          className={`absolute inset-0 ${
            isArabic
              ? "bg-gradient-to-l from-[#171717]/85 via-[#171717]/45 to-transparent"
              : "bg-gradient-to-r from-[#171717]/85 via-[#171717]/45 to-transparent"
          }`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#171717_92%)]" />
      </div>

      <div className="grid-shell relative z-10 w-full py-12 md:py-20">
        <div className="flex max-w-4xl flex-col items-start gap-8">
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: cinematicEase }}
            className="font-heading text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-7xl lg:text-[84px]"
          >
            {content.headlineBefore}{" "}
            <span className="text-brand-orange">{content.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: cinematicEase, delay: 0.1 }}
            className="max-w-2xl font-light text-xl leading-relaxed text-[#C0C0B8] sm:text-2xl"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: cinematicEase, delay: 0.18 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <a href="#contact" className="btn-primary shadow-lg shadow-brand-orange/20">
              {content.primaryCta}
            </a>
            <a
              href="#approach"
              className="inline-flex items-center px-2 py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {content.secondaryCta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
