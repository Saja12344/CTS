import { motion } from "framer-motion";
import { Language, siteContent } from "@/content/site";

type ProblemsSectionProps = {
  content: (typeof siteContent)[Language]["problems"];
};

const ProblemsSection = ({ content }: ProblemsSectionProps) => {
  return (
    <section id="problems" className="section-surface py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{content.eyebrow}</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">{content.title}</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {content.items.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-background p-6 md:p-8"
            >
              <h3 className="mb-3 text-lg font-semibold leading-snug">{item.problem}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.solution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
