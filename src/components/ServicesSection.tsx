import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type WhatWeBuildProps = {
  content: (typeof siteContent)[Language]["build"];
};

const ServicesSection = ({ content }: WhatWeBuildProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="capabilities" className="w-full bg-brand-offwhite py-32 text-brand-charcoal">
      <div className="grid-shell">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <span className="section-label mb-3 block">{content.label}</span>
            <h2 className="font-heading mb-6 text-3xl font-bold leading-[1.1] tracking-tight text-brand-charcoal sm:text-5xl">
              {content.title}
            </h2>
            <p className="text-base leading-relaxed text-brand-muted sm:text-lg">{content.description}</p>
          </div>

          <div className="flex flex-col border-b border-brand-border lg:col-span-7">
            {content.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.55, ease: cinematicEase, delay: index * 0.05 }}
                className="group border-t border-brand-border py-10 transition-colors"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono-label shrink-0 pt-1.5 text-xs font-semibold tracking-widest text-brand-orange">
                    {item.index}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading mb-2 text-2xl font-semibold text-brand-charcoal transition-colors duration-200 group-hover:text-brand-orange sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="max-w-xl text-base leading-relaxed text-brand-muted">{item.description}</p>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-transparent opacity-0 transition-all group-hover:border-brand-border group-hover:bg-white group-hover:opacity-100">
                    <ArrowUpRight className="h-[18px] w-[18px] text-brand-orange" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
