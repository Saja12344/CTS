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
    <section id="hero" className="relative overflow-hidden border-b border-border bg-background pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`mx-auto max-w-4xl ${isArabic ? "text-center md:text-right" : "text-center md:text-left"}`}
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-muted-foreground">{content.brand}</p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            {content.headline}{" "}
            <span className="text-gradient">{content.headlineAccent}</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
            {content.description}
          </p>
          <div className={`flex flex-col items-center gap-4 sm:flex-row ${isArabic ? "md:justify-start" : "md:justify-start"} justify-center`}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {content.primaryCta}
              <ArrowIcon size={18} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {content.secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
