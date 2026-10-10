import { motion, useReducedMotion } from "framer-motion";
import HeroShader from "@/components/HeroShader";
import NetworkField from "@/components/NetworkField";
import atmosphere from "@/assets/hero-atmosphere.jpg";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type HeroSectionProps = {
  content: (typeof siteContent)[Language]["hero"];
  language: Language;
};

const HeroSection = ({ content, language }: HeroSectionProps) => {
  const reduceMotion = useReducedMotion();
  const isArabic = language === "ar";

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={atmosphere}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        aria-hidden="true"
      />
      <HeroShader />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,9,11,0.55)_55%,rgba(8,9,11,0.92)_100%)]" />
      <div className="glow-soft absolute inset-0" />
      <NetworkField />

      <div className="grid-shell relative z-10 flex min-h-[100svh] flex-col items-center justify-center pb-20 pt-28 text-center">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: cinematicEase }}
          className="micro-label mb-7"
        >
          {content.label}
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: cinematicEase, delay: 0.08 }}
          className={`type-display mb-6 max-w-4xl text-[clamp(2.4rem,6.5vw,4.75rem)] text-white ${
            isArabic ? "font-arabic" : ""
          }`}
        >
          {content.headline}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: cinematicEase, delay: 0.18 }}
          className="mb-10 max-w-xl text-base leading-7 text-white/65 md:text-lg"
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: cinematicEase, delay: 0.28 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#contact" className="btn-solid btn-motion">
            {content.primaryCta}
          </a>
          <a href="#approach" className="btn-ghost btn-motion">
            {isArabic ? "المنهجية" : "Our Approach"}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
