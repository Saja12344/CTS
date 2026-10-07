import { motion } from "framer-motion";
import { Language, siteContent } from "@/content/site";

type IndustriesSectionProps = {
  content: (typeof siteContent)[Language]["industries"];
};

const IndustriesSection = ({ content }: IndustriesSectionProps) => {
  return (
    <section id="industries" className="section-surface py-20 md:py-28">
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

        <div className="grid gap-5 md:grid-cols-3">
          {content.items.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-background p-7"
            >
              <h3 className="mb-3 text-lg font-semibold">{industry.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
