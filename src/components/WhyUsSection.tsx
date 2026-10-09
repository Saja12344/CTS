import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type DifferentiatorsProps = {
  content: (typeof siteContent)[Language]["differentiators"];
};

const WhyUsSection = ({ content }: DifferentiatorsProps) => {
  return (
    <section id="differentiators" className="border-b rule bg-[#0B0B0C]">
      <div className="grid-shell flex min-h-[70vh] flex-col justify-center py-24 md:py-32">
        <SectionReveal>
          <h2 className="type-manifesto max-w-5xl text-[clamp(2.5rem,7vw,5.75rem)] text-[#F4F2EE]">
            {content.statement}
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="mt-10 max-w-lg text-sm leading-7 text-muted-foreground md:text-base">{content.support}</p>
        </SectionReveal>
      </div>
    </section>
  );
};

export default WhyUsSection;
