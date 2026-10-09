import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type WhatWeBuildProps = {
  content: (typeof siteContent)[Language]["build"];
};

const ServicesSection = ({ content }: WhatWeBuildProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="build" className="relative border-y rule bg-[#090A0C]">
      <div className="glow-soft pointer-events-none absolute inset-0 opacity-40" />
      <div className="grid-shell relative py-20 md:py-28">
        <p className="micro-label mb-10">{content.label}</p>

        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.65, ease: cinematicEase, delay: index * 0.07 }}
              className="panel group p-6 md:p-7"
            >
              <span className="mb-8 block text-sm tracking-[0.18em] text-white/35">{item.index}</span>
              <h2 className="mb-3 text-xl font-semibold tracking-tight text-white md:text-2xl">{item.title}</h2>
              <p className="text-sm leading-7 text-white/55 md:text-[15px]">{item.description}</p>
              <div className="mt-8 h-px w-10 bg-[hsl(var(--accent))]/70 transition-[width] duration-500 group-hover:w-16" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
