import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type ApproachSectionProps = {
  content: (typeof siteContent)[Language]["approach"];
};

const HowWeWorkSection = ({ content }: ApproachSectionProps) => {
  return (
    <section id="approach" className="border-b rule bg-background">
      <div className="grid-shell py-20 md:py-28">
        <SectionReveal className="mb-14">
          <p className="micro-label mb-4">{content.label}</p>
          <div className="h-px w-full bg-border" />
        </SectionReveal>

        <div className="grid gap-0 md:grid-cols-4">
          {content.steps.map((step, index) => (
            <SectionReveal key={step.number} delay={index * 0.07}>
              <div
                className={`relative flex min-h-[220px] flex-col justify-between border-border py-8 md:min-h-[280px] md:border-s md:px-6 lg:px-8 ${
                  index === 0 ? "md:border-s-0 md:ps-0" : ""
                } border-b md:border-b-0`}
              >
                <span className="font-display text-5xl font-medium tracking-tight text-muted-foreground/40 md:text-6xl">
                  {step.number}
                </span>
                <div>
                  <div className="mb-4 h-px w-8 bg-[hsl(var(--accent))]" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em]">{step.title}</h3>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
