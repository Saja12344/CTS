import { motion } from "framer-motion";
import { ClipboardCheck, Layers3, LifeBuoy, LineChart, Shield, Sparkles } from "lucide-react";
import { Language, siteContent } from "@/content/site";

type WhyUsSectionProps = {
  content: (typeof siteContent)[Language]["why"];
};

const icons = [ClipboardCheck, Layers3, LineChart, LifeBuoy];

const WhyUsSection = ({ content }: WhyUsSectionProps) => {
  return (
    <section id="why-us" className="bg-background py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              {content.eyebrow}
            </span>
            <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
              {content.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {content.description}
            </p>
            <div className="rounded-3xl border border-primary/20 bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-bold">{content.standardTitle}</h3>
                  <p className="text-sm text-muted-foreground">{content.standardDescription}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {content.steps.map((step) => (
                  <div key={step} className="rounded-2xl bg-secondary/60 px-3 py-4 text-sm font-semibold">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {content.reasons.map((r, i) => {
              const Icon = icons[i];
              return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card/80 p-6"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gradient-electric">
                  <Icon size={24} className="text-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{r.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.description}</p>
              </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:col-span-2"
            >
              <div className="mb-4 flex items-center gap-3 text-primary">
                <Sparkles size={22} />
                <h3 className="text-lg font-bold">{content.highlightTitle}</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {content.highlightDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
