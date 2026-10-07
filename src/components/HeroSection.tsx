import { motion, useReducedMotion } from "framer-motion";
import logo from "@/assets/logo.png";
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
    <section id="hero" className="section-shell relative min-h-[88vh] overflow-hidden bg-background">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="container relative flex min-h-[88vh] flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-40">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className={`mb-10 flex items-center gap-3 ${isArabic ? "md:justify-start" : "md:justify-start"} justify-center`}
        >
          <img src={logo} alt="" className="h-8 w-auto md:h-9" aria-hidden="true" />
          <div className={isArabic ? "text-right" : "text-left"}>
            <p className="text-sm font-medium tracking-tight">Core Tech</p>
            <p className="text-[10px] font-light uppercase tracking-[0.35em] text-muted-foreground">Solutions</p>
          </div>
        </motion.div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: premiumEase, delay: 0.08 }}
          className={`editorial-title mb-8 max-w-5xl ${isArabic ? "text-center md:text-right" : "text-center md:text-left"}`}
        >
          {content.headline}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: premiumEase, delay: 0.16 }}
          className={`editorial-body mb-12 max-w-2xl ${isArabic ? "text-center md:text-right" : "text-center md:text-left"}`}
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: premiumEase, delay: 0.24 }}
          className={`flex flex-col gap-3 sm:flex-row ${isArabic ? "md:justify-start" : "md:justify-start"} justify-center`}
        >
          <a href="#contact" className="btn-primary">
            {content.primaryCta}
          </a>
          <a href="#work" className="btn-secondary">
            {content.secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
