import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Language, siteContent } from "@/content/site";

type PricingSectionProps = {
  content: (typeof siteContent)[Language]["pricing"];
  language: Language;
};

const PricingSection = ({ content, language }: PricingSectionProps) => {
  const isArabic = language === "ar";
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="pricing" className="relative overflow-hidden py-24 gradient-navy">
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {content.eyebrow}
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">{content.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {content.description}
          </p>
        </motion.div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {content.packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`card-hover relative rounded-2xl p-8 ${
                pkg.popular
                  ? "border-2 border-primary bg-card glow-electric"
                  : "border border-border bg-card/80"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 right-1/2 translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold text-foreground gradient-electric">
                  {content.popular}
                </span>
              )}
              <Badge className="mb-5 border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">
                {pkg.badge}
              </Badge>
              <h3 className="mb-2 text-2xl font-bold">{pkg.name}</h3>
              <p className="mb-6 min-h-12 text-sm leading-relaxed text-muted-foreground">{pkg.subtitle}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gradient">{pkg.price}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all ${
                  pkg.popular
                    ? "text-foreground gradient-electric glow-electric hover:opacity-90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {content.cta}
                <ArrowIcon size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card/80 p-8 text-center"
        >
          <h3 className="mb-2 text-xl font-bold">{content.customTitle}</h3>
          <p className="mb-4 text-muted-foreground">{content.customDescription}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3 font-semibold text-foreground transition-opacity gradient-electric glow-electric hover:opacity-90"
          >
            {content.customCta}
            <ArrowIcon size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
