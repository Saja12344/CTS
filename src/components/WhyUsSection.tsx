import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Language, siteContent } from "@/content/site";

type WhyUsSectionProps = {
  content: (typeof siteContent)[Language]["why"];
};

const WhyUsSection = ({ content }: WhyUsSectionProps) => {
  return (
    <section id="why" className="section-surface-alt py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{content.eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{content.title}</h2>
        </motion.div>

        <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.points.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card/40 px-5 py-4"
            >
              <Check size={18} className="mt-0.5 shrink-0 text-[hsl(var(--brand-accent))]" aria-hidden="true" />
              <span className="text-sm font-medium leading-relaxed">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUsSection;
