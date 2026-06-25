import { motion } from "framer-motion";
import { Blocks, Gauge, Globe2, Headset, Smartphone, Workflow } from "lucide-react";
import { Language, siteContent } from "@/content/site";

type ServicesSectionProps = {
  content: (typeof siteContent)[Language]["services"];
};

const icons = [Globe2, Smartphone, Blocks, Workflow, Gauge, Headset];

const ServicesSection = ({ content }: ServicesSectionProps) => {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent" />
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((service, i) => {
            const Icon = icons[i];
            return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-7 transition-colors duration-300 hover:border-primary/50"
            >
              <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Icon size={26} />
              </div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
