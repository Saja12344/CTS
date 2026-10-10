import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type HowWeWorkSectionProps = {
  content: (typeof siteContent)[Language]["approach"];
};

const HowWeWorkSection = ({ content }: HowWeWorkSectionProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="approach" className="w-full border-t border-white/[0.06] bg-[#121212] py-32 text-white">
      <div className="grid-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.65, ease: cinematicEase }}
          className="mb-24 max-w-3xl"
        >
          <span className="section-label mb-3 block">{content.label}</span>
          <h2 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {content.title}
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {content.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, ease: cinematicEase, delay: index * 0.06 }}
              className="group flex flex-col"
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono-label text-3xl font-light text-white/30 transition-colors group-hover:text-brand-orange sm:text-4xl">
                  {step.number}
                </span>
                <div className="h-px flex-1 bg-white/10 transition-colors group-hover:bg-brand-orange/40" />
              </div>
              <h3 className="font-heading mb-3 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted sm:text-base">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
