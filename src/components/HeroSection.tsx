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
    <section id="hero" className="hero-vignette editorial-grid relative overflow-hidden border-b hairline section-pad pt-28 md:pt-36">
      <div className="grid-shell grid items-end gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className={isArabic ? "text-center lg:text-right" : "text-center lg:text-left"}>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: premiumEase }}
            className="micro-label mb-8 text-foreground/70"
          >
            {content.label}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: premiumEase, delay: 0.05 }}
              className="display-headline mb-8 max-w-4xl"
            >
              {content.headline}
            </motion.h1>
          </div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: premiumEase, delay: 0.14 }}
            className={`body-copy mb-12 ${isArabic ? "lg:ms-auto" : ""}`}
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: premiumEase, delay: 0.22 }}
            className={`flex flex-col gap-3 sm:flex-row ${isArabic ? "lg:justify-start" : "lg:justify-start"} justify-center`}
          >
            <a href="#contact" className="btn-solid">
              {content.primaryCta}
            </a>
            <a href="#approach" className="btn-ghost">
              {content.secondaryCta}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: premiumEase, delay: 0.12 }}
          className="lg:justify-self-end"
        >
          <MetallicVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
