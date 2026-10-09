import { motion, useReducedMotion } from "framer-motion";
import logoMark from "@/assets/logo-mark-dark-clean.png";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type AboutSectionProps = {
  content: (typeof siteContent)[Language]["about"];
};

const AboutSection = ({ content }: AboutSectionProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="border-b rule surface-light">
      <div className="grid-shell grid gap-12 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16 md:py-28">
        <div>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, ease: cinematicEase }}
            className="type-display mb-8 text-[clamp(2rem,4vw,3.5rem)] text-[#0B0B0C]"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, ease: cinematicEase, delay: 0.08 }}
            className="max-w-xl text-base leading-8 text-[#5a5c63] md:text-lg"
          >
            {content.body}
          </motion.p>
        </div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.9, ease: cinematicEase }}
          className="justify-self-start md:justify-self-end"
        >
          <img src={logoMark} alt="" className="w-24 md:w-32" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
