import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type ProblemsSectionProps = {
  content: (typeof siteContent)[Language]["problems"];
};

const ProblemsSection = ({ content }: ProblemsSectionProps) => {
  return (
    <section id="problems" className="section-shell bg-[hsl(var(--brand-light))] py-20 text-[hsl(var(--brand-deep))] md:py-28">
      <div className="container">
        <SectionReveal className="mb-14 max-w-4xl">
          <p className="micro-label mb-4 text-[hsl(var(--brand-deep)/0.55)]">{content.eyebrow}</p>
          <h2 className="editorial-title text-[hsl(var(--brand-deep))]">{content.title}</h2>
        </SectionReveal>

        <div className="divide-y divide-[hsl(var(--brand-deep)/0.12)] border-y border-[hsl(var(--brand-deep)/0.12)]">
          {content.items.map((item) => (
            <SectionReveal key={item.number} className="grid gap-4 py-8 md:grid-cols-[4rem_1fr] md:items-start md:gap-10 md:py-10">
              <p className="micro-label text-[hsl(var(--brand-deep)/0.45)]">{item.number}</p>
              <p className="text-lg leading-relaxed md:text-2xl md:leading-snug">{item.text}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
