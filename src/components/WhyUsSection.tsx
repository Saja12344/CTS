import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type DifferentiatorsProps = {
  content: (typeof siteContent)[Language]["differentiators"];
};

const WhyUsSection = ({ content }: DifferentiatorsProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="differentiators" className="relative overflow-hidden border-b rule bg-[#08090B]">
      <div className="glow-soft pointer-events-none absolute inset-0" />
      <div className="grid-shell relative flex min-h-[60vh] flex-col justify-center py-24 md:py-32">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.8, ease: cinematicEase }}
          className="type-manifesto max-w-4xl text-[clamp(2.2rem,6vw,4.5rem)] text-white"
        >
          {content.statement}
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: cinematicEase, delay: 0.12 }}
          className="mt-8 max-w-lg text-sm leading-7 text-white/55 md:text-base"
        >
          {content.support}
        </motion.p>
      </div>
    </section>
  );
};

export default WhyUsSection;
