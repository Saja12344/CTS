import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type DifferentiatorsProps = {
  content: (typeof siteContent)[Language]["differentiators"];
};

const WhyUsSection = ({ content }: DifferentiatorsProps) => {
  return (
    <section id="differentiators" className="section-pad border-b hairline bg-secondary/30">
      <div className="grid-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <SectionReveal>
          <p className="section-index mb-6">{content.section}</p>
          <h2 className="display-statement max-w-3xl">{content.statement}</h2>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <ul className="space-y-5 border-t hairline pt-8">
            {content.themes.map((theme) => (
              <li key={theme} className="grid grid-cols-[1rem_1fr] gap-4 text-sm leading-7 text-muted-foreground md:text-base">
                <span className="mt-2 h-px w-3 bg-[hsl(var(--accent))]" aria-hidden="true" />
                <span>{theme}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
};

export default WhyUsSection;
