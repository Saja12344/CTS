import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type HowWeWorkSectionProps = {
  content: (typeof siteContent)[Language]["process"];
};

const HowWeWorkSection = ({ content }: HowWeWorkSectionProps) => {
  return (
    <section id="process" className="section-shell bg-background py-20 md:py-28">
      <div className="container">
        <SectionReveal className="mb-14 max-w-3xl">
          <p className="micro-label mb-4">{content.eyebrow}</p>
          <h2 className="editorial-title">{content.title}</h2>
        </SectionReveal>

        <div className="relative border-t border-border/80">
          {content.steps.map((step) => (
            <SectionReveal key={step.number}>
              <div className="grid gap-4 border-b border-border/80 py-8 md:grid-cols-[5rem_10rem_1fr] md:items-baseline md:gap-8 md:py-10">
                <p className="text-3xl font-light tracking-tight text-[hsl(var(--brand-accent))] md:text-4xl">{step.number}</p>
                <h3 className="text-lg font-medium uppercase tracking-[0.12em]">{step.title}</h3>
                <p className="editorial-body text-sm md:text-base">{step.subtitle}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
