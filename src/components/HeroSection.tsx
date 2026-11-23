import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import atmosphere from "@/assets/hero-atmosphere.jpg";
import { cinematicEase } from "@/lib/motion";
import { siteRoutes } from "@/lib/routes";
import { Language, siteContent } from "@/content/site";

type HeroSectionProps = {
  content: (typeof siteContent)[Language]["hero"];
  language: Language;
};

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true" fill="none">
    <path
      d="M12 3.2 5.2 6v5.3c0 4.3 2.8 7.6 6.8 9.3 4-1.7 6.8-5 6.8-9.3V6L12 3.2Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M8.8 12.1 11 14.3l4.3-4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const HeroSection = ({ content, language }: HeroSectionProps) => {
  const reduceMotion = useReducedMotion();
  const isArabic = language === "ar";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-charcoal pb-20 pt-28"
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

      <div className="grid-shell relative z-10 w-full py-12 md:py-16">
        <div className="flex max-w-4xl flex-col items-start gap-8">
          <p className="inline-flex items-center gap-2 rounded border border-white/15 px-3 py-2 text-xs text-white/80">
            <ShieldIcon />
            <span>{content.badge}</span>
          </p>

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
            className="max-w-2xl text-xl leading-relaxed text-[#C0C0B8] sm:text-2xl"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: cinematicEase, delay: 0.18 }}
            className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link to={siteRoutes.contact} className="btn-primary justify-center text-center shadow-lg shadow-brand-orange/20">
              {content.primaryCta}
            </Link>
            <Link
              to={siteRoutes.approach}
              className="inline-flex items-center justify-center px-2 py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {content.secondaryCta}
            </Link>
          </motion.div>

          <dl className="grid w-full gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
            {content.trust.map((item) => (
              <div key={item.value}>
                <dt className="font-heading text-2xl font-bold text-white">{item.value}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-[#C0C0B8]">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
