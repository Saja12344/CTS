import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type WhyUsSectionProps = {
  content: (typeof siteContent)[Language]["why"];
};

const WhyUsSection = ({ content }: WhyUsSectionProps) => {
  return (
    <section id="why" className="section-shell bg-secondary/20 py-20 md:py-28">
      <div className="container">
        <SectionReveal className="mb-14 max-w-3xl">
          <p className="micro-label mb-4">{content.eyebrow}</p>
          <h2 className="editorial-title">{content.title}</h2>
        </SectionReveal>

        <div className="divide-y divide-border/80 border-y border-border/80">
          {content.principles.map((principle) => (
            <SectionReveal key={principle.title} className="grid gap-3 py-8 md:grid-cols-[14rem_1fr] md:gap-10 md:py-10">
              <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-foreground">{principle.title}</h3>
              <p className="editorial-body text-sm md:text-base">{principle.description}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
