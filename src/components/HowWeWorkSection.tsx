import { motion } from "framer-motion";
import { Language, siteContent } from "@/content/site";

type HowWeWorkSectionProps = {
  content: (typeof siteContent)[Language]["process"];
};

const HowWeWorkSection = ({ content }: HowWeWorkSectionProps) => {
  return (
    <section id="process" className="section-surface-alt py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{content.eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{content.title}</h2>
        </motion.div>

        <ol className="grid gap-4 md:grid-cols-5">
          {content.steps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card/40 p-5"
            >
              <p className="mb-3 text-xs font-semibold tracking-widest text-[hsl(var(--brand-accent))]">{step.number}</p>
              <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.subtitle}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
