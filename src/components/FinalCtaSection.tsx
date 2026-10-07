import { motion } from "framer-motion";
import { Language, siteContent } from "@/content/site";

type FinalCtaSectionProps = {
  content: (typeof siteContent)[Language]["finalCta"];
};

const FinalCtaSection = ({ content }: FinalCtaSectionProps) => {
  return (
    <section aria-labelledby="final-cta-heading" className="section-surface py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 id="final-cta-heading" className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {content.title}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">{content.description}</p>
          <a
            href="#contact"
            className="btn-brand text-base"
          >
            {content.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
