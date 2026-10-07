import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type AboutSectionProps = {
  content: (typeof siteContent)[Language]["about"];
};

const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <section id="about" className="section-shell bg-background py-20 md:py-28">
      <div className="container">
        <SectionReveal className="max-w-3xl">
          <p className="micro-label mb-4">{content.eyebrow}</p>
          <h2 className="editorial-title mb-6">{content.title}</h2>
          <p className="editorial-body mb-8">{content.lead}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {content.capabilities.map((item) => (
              <li key={item} className="uppercase tracking-[0.14em]">
                {item}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
