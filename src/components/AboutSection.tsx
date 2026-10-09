import SectionReveal from "@/components/SectionReveal";
import logoDark from "@/assets/logo-dark.png";
import { Language, siteContent } from "@/content/site";

type AboutSectionProps = {
  content: (typeof siteContent)[Language]["about"];
};

const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <section id="about" className="section-pad border-b hairline surface-light">
      <div className="grid-shell grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start lg:gap-16">
        <SectionReveal>
          <p className="section-index mb-6 text-[#0B0B0C]/50">{content.section}</p>
          <h2 className="display-statement mb-8 text-[#0B0B0C]">{content.title}</h2>
          <p className="mb-8 max-w-2xl text-base leading-8 text-[#5a5c63] md:text-lg">{content.body}</p>
          <p className="max-w-2xl border-s-2 border-[#C8FF4D] ps-6 text-sm leading-7 text-[#5a5c63] md:text-base">{content.philosophy}</p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="hidden lg:block">
          <img src={logoDark} alt="Core Tech Solutions mark" className="w-full max-w-[220px] opacity-90" />
        </SectionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
