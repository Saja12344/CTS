import { motion } from "framer-motion";
import { Language, siteContent } from "@/content/site";

type AboutSectionProps = {
  content: (typeof siteContent)[Language]["about"];
};

const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <section id="about" className="border-b border-border bg-background py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{content.eyebrow}</p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">{content.title}</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
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
