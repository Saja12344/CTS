import { motion, useReducedMotion } from "framer-motion";
import MetallicVisual from "@/components/MetallicVisual";
import { premiumEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type HeroSectionProps = {
  content: (typeof siteContent)[Language]["hero"];
  language: Language;
};

const HeroSection = ({ content, language }: HeroSectionProps) => {
  const reduceMotion = useReducedMotion();
  const isArabic = language === "ar";

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden border-b rule">
      <div className="grid-shell grid min-h-[100svh] grid-cols-1 items-end gap-10 pb-16 pt-28 lg:grid-cols-12 lg:gap-6 lg:pb-20 lg:pt-32">
        <div className={`lg:col-span-7 lg:pb-8 ${isArabic ? "text-center lg:text-right" : "text-center lg:text-left"}`}>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: premiumEase }}
            className="micro-label mb-8"
          >
            {content.label}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={reduceMotion ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: premiumEase, delay: 0.05 }}
              className="type-display mb-8 text-[clamp(2.75rem,8vw,6.5rem)]"
            >
              {content.headline}
            </motion.h1>
          </div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: premiumEase, delay: 0.18 }}
            className={`mb-10 max-w-md text-base leading-7 text-muted-foreground md:text-lg ${isArabic ? "lg:ms-auto" : ""}`}
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: premiumEase, delay: 0.28 }}
            className={`flex ${isArabic ? "lg:justify-start" : "lg:justify-start"} justify-center`}
          >
            <a href="#contact" className="btn-solid">
              {content.primaryCta}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: premiumEase, delay: 0.12 }}
          className="lg:col-span-5 lg:self-center"
        >
          <MetallicVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
