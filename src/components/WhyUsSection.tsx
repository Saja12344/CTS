import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type DifferentiatorsProps = {
  content: (typeof siteContent)[Language]["differentiators"];
};

const WhyUsSection = ({ content }: DifferentiatorsProps) => {
  const reduceMotion = useReducedMotion();
  const words = content.statement.split(" ");

  return (
    <section id="differentiators" className="border-b rule bg-[#0B0B0C]">
      <div className="grid-shell flex min-h-[70vh] flex-col justify-center py-24 md:py-32">
        <h2 className="type-manifesto max-w-5xl text-[clamp(2.5rem,7vw,5.75rem)] text-[#F4F2EE]">
          {words.map((word, i) => (
            <span key={`${word}-${i}`}>
              <span className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduceMotion ? false : { y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.85, ease: cinematicEase, delay: i * 0.05 }}
                >
                  {word}
                </motion.span>
              </span>
              {i < words.length - 1 ? " " : null}
            </span>
          ))}
        </h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: cinematicEase, delay: 0.35 }}
          className="mt-10 max-w-lg text-sm leading-7 text-muted-foreground md:text-base"
        >
          {content.support}
        </motion.p>
      </div>
    </section>
  );
};

export default WhyUsSection;
