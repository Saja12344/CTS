import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type ProductThinkingSectionProps = {
  content: (typeof siteContent)[Language]["thinking"];
};

const ProductThinkingSection = ({ content }: ProductThinkingSectionProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="thinking" className="w-full border-b border-brand-border bg-white py-32 text-brand-charcoal">
      <div className="grid-shell">
        <div className="mb-12">
          <span className="section-label mb-3 block">{content.label}</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, ease: cinematicEase }}
            className="lg:col-span-7"
          >
            <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-brand-charcoal sm:text-5xl lg:text-[54px]">
              {content.titleBefore}{" "}
              <span className="text-brand-orange">{content.titleAccent}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, ease: cinematicEase, delay: 0.08 }}
            className="flex flex-col gap-10 lg:col-span-5 lg:pt-2"
          >
            <p className="text-base leading-relaxed text-brand-muted sm:text-lg">{content.description}</p>
            <div className="flex flex-col gap-6 border-t border-brand-border pt-8">
              {content.principles.map((principle) => (
                <div key={principle} className="flex items-center gap-4">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span className="font-heading text-lg font-semibold text-brand-charcoal sm:text-xl">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductThinkingSection;
