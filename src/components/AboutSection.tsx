import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type AboutSectionProps = {
  content: (typeof siteContent)[Language]["about"];
};

/** Logo intentionally omitted — mark appears once in the navbar. */
const AboutSection = ({ content }: AboutSectionProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="border-b rule bg-background">
      <div className="grid-shell py-20 md:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.7, ease: cinematicEase }}
          className="panel max-w-3xl p-8 md:p-10"
        >
          <p className="micro-label mb-5">About</p>
          <h2 className="type-display mb-6 text-[clamp(1.8rem,3.5vw,2.75rem)] text-white">{content.title}</h2>
          <p className="max-w-2xl text-base leading-8 text-white/60 md:text-lg">{content.body}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
