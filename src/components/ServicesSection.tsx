import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Language, siteContent } from "@/content/site";

type ServicesSectionProps = {
  content: (typeof siteContent)[Language]["services"];
  language: Language;
};

const ServicesSection = ({ content, language }: ServicesSectionProps) => {
  const isArabic = language === "ar";
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="section-surface-alt py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{content.eyebrow}</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">{content.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{content.description}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {content.items.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-[hsl(var(--brand-charcoal))] p-8"
            >
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">{service.description}</p>
              <a
                href={service.href}
                className="link-brand"
              >
                {content.learnMore}
                <ArrowIcon size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
