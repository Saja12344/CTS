import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Language, siteContent } from "@/content/site";

type HeroSectionProps = {
  content: (typeof siteContent)[Language]["hero"];
  language: Language;
};

const HeroSection = ({ content, language }: HeroSectionProps) => {
  const isArabic = language === "ar";
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="section-surface relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-accent)/0.45)] to-transparent" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`mx-auto max-w-4xl ${isArabic ? "text-center md:text-right" : "text-center md:text-left"}`}
        >
          <div className={`mb-8 ${isArabic ? "md:text-right" : "md:text-left"} text-center`}>
            <p className="brand-wordmark text-base md:text-lg">Core Tech</p>
            <span className="brand-solutions mt-1">Solutions</span>
          </div>
          <h1 className="mb-6 text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-[4.25rem]">
            {content.headline}{" "}
            <span className="text-gradient-metallic">{content.headlineAccent}</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
            {content.description}
          </p>
          <div
            className={`flex flex-col items-center gap-4 sm:flex-row ${isArabic ? "md:justify-start" : "md:justify-start"} justify-center`}
          >
            <a href="#contact" className="btn-brand gap-2 text-base">
              {content.primaryCta}
              <ArrowIcon size={18} />
            </a>
            <a href="#work" className="btn-brand-outline text-base">
              {content.secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
