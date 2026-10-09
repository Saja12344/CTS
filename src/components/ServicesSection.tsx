import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase, lineReveal } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type WhatWeBuildProps = {
  content: (typeof siteContent)[Language]["build"];
};

const ServicesSection = ({ content }: WhatWeBuildProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="build" className="border-b rule surface-light">
      <div className="grid-shell py-16 md:py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <p className="micro-label text-[#0B0B0C]/45">{content.label}</p>
        </div>

        <div className="relative border-y border-[#0B0B0C]/12">
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-[#0B0B0C]/55"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={lineReveal}
          />

          {content.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0.35, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.7, ease: cinematicEase, delay: index * 0.06 }}
              className="group grid gap-4 border-b border-[#0B0B0C]/12 py-10 last:border-b-0 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.2fr)] md:items-baseline md:gap-10 md:py-14"
            >
              <span className="font-display text-sm tracking-[0.2em] text-[#0B0B0C]/35 transition-colors duration-500 group-hover:text-[#0B0B0C]">
                {item.index}
              </span>
              <h2 className="type-display text-[clamp(1.75rem,4vw,3.25rem)] text-[#0B0B0C] transition-transform duration-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                {item.title}
              </h2>
              <p className="max-w-md text-sm leading-7 text-[#5a5c63] md:text-base md:justify-self-end md:text-right">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
