import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type AudienceSectionProps = {
  content: (typeof siteContent)[Language]["audience"];
};

const IndustriesSection = ({ content }: AudienceSectionProps) => {
  return (
    <section id="audience" className="section-shell bg-background py-14 md:py-16">
      <div className="container">
        <SectionReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="micro-label">{content.eyebrow}</p>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right md:text-base">
            {content.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
};

export default IndustriesSection;
