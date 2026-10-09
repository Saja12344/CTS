import SectionReveal from "@/components/SectionReveal";
import logoDark from "@/assets/logo-dark.png";
import { Language, siteContent } from "@/content/site";

type AboutSectionProps = {
  content: (typeof siteContent)[Language]["about"];
};

const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <section id="about" className="border-b rule surface-light">
      <div className="grid-shell grid gap-12 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16 md:py-28">
        <SectionReveal>
          <h2 className="type-display mb-8 text-[clamp(2rem,4vw,3.5rem)] text-[#0B0B0C]">{content.title}</h2>
          <p className="max-w-xl text-base leading-8 text-[#5a5c63] md:text-lg">{content.body}</p>
        </SectionReveal>
        <SectionReveal delay={0.08} className="justify-self-start md:justify-self-end">
          <img src={logoDark} alt="" className="w-28 opacity-90 md:w-36" aria-hidden="true" />
        </SectionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
