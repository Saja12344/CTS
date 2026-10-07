import { motion } from "framer-motion";
import { Language, siteContent } from "@/content/site";

type AboutSectionProps = {
  content: (typeof siteContent)[Language]["about"];
};

const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <section id="about" className="section-surface-light py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider opacity-60">{content.eyebrow}</p>
          <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-5xl">{content.title}</h2>
          <div className="space-y-5 text-lg leading-relaxed opacity-80">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
