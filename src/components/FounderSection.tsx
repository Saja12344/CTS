import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type FounderSectionProps = {
  content: (typeof siteContent)[Language]["founder"];
};

const FounderSection = ({ content }: FounderSectionProps) => {
  return (
    <section id="founder" className="border-b hairline bg-background py-16 md:py-20">
      <div className="grid-shell">
        <SectionReveal className="max-w-3xl">
          <p className="section-index mb-6">{content.section}</p>
          <blockquote className="text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">&ldquo;{content.quote}&rdquo;</blockquote>
        </SectionReveal>
      </div>
    </section>
  );
};

export default FounderSection;
