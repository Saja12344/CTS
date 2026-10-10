import { motion, useReducedMotion } from "framer-motion";
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
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-brand-charcoal pb-20 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <img
          src={atmosphere}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover opacity-40 ${
            reduceMotion ? "" : "hero-atmosphere"
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isArabic
              ? "bg-gradient-to-l from-[#171717]/95 via-[#171717]/60 to-transparent"
              : "bg-gradient-to-r from-[#171717]/95 via-[#171717]/60 to-transparent"
          }`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#171717_90%)]" />
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
