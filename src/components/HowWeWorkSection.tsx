import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type ApproachSectionProps = {
  content: (typeof siteContent)[Language]["approach"];
};

const HowWeWorkSection = ({ content }: ApproachSectionProps) => {
  return (
    <section id="approach" className="section-pad border-b hairline bg-background">
      <div className="grid-shell">
        <SectionReveal className="mb-10 grid gap-6 lg:grid-cols-[6rem_1fr_1fr] lg:items-end">
          <p className="section-index">{content.section}</p>
          <h2 className="display-statement">{content.title}</h2>
          <p className="body-copy lg:justify-self-end lg:text-right">{content.intro}</p>
        </SectionReveal>

        <div className="relative mt-8 border-t hairline">
          {content.steps.map((step, index) => (
            <SectionReveal key={step.number} delay={index * 0.05}>
              <div className="grid gap-4 border-b hairline py-8 md:grid-cols-[5rem_11rem_1fr] md:items-baseline md:gap-10 md:py-10">
                <span className="text-4xl font-light tabular-nums text-[hsl(var(--accent))] md:text-5xl">{step.number}</span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">{step.title}</h3>
                <p className="body-copy max-w-2xl text-sm md:text-base">{step.subtitle}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
