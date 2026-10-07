import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type ServicesSectionProps = {
  content: (typeof siteContent)[Language]["services"];
};

const ServicesSection = ({ content }: ServicesSectionProps) => {
  return (
    <section id="services" className="section-shell bg-background py-20 md:py-28">
      <div className="container">
        <SectionReveal className="mb-14 max-w-3xl">
          <p className="micro-label mb-4">{content.eyebrow}</p>
          <h2 className="editorial-title">{content.title}</h2>
        </SectionReveal>

        <div>
          {content.items.map((item) => (
            <SectionReveal key={item.number} className="editorial-row">
              <p className="micro-label text-foreground/70">{item.number}</p>
              <h3 className="text-xl font-medium tracking-tight md:text-3xl">{item.title}</h3>
              <p className="editorial-body max-w-xl text-sm md:text-base">{item.description}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
