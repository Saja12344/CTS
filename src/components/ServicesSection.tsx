import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type WhatWeBuildProps = {
  content: (typeof siteContent)[Language]["build"];
};

const ServicesSection = ({ content }: WhatWeBuildProps) => {
  return (
    <section id="build" className="section-pad border-b hairline surface-light">
      <div className="grid-shell">
        <SectionReveal className="mb-16 grid gap-6 md:grid-cols-[6rem_1fr] md:items-end">
          <p className="section-index">{content.section}</p>
          <h2 className="display-statement max-w-3xl">{content.title}</h2>
        </SectionReveal>

        <div className="grid gap-0 md:grid-cols-3 md:gap-px md:bg-[#0B0B0C]/10">
          {content.items.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.06}>
              <article className="group flex h-full flex-col justify-between bg-[#F4F2EE] p-8 transition-transform duration-500 hover:-translate-y-1 md:min-h-[320px] md:p-10 lg:p-12">
                <p className="micro-label mb-10 text-[#0B0B0C]/45">0{index + 1}</p>
                <div>
                  <h3 className="mb-4 text-2xl font-medium tracking-tight md:text-3xl">{item.title}</h3>
                  <p className="text-sm leading-7 text-[#5a5c63] md:text-base">{item.description}</p>
                </div>
                <div className="mt-10 h-px w-10 bg-[#0B0B0C]/20 transition-all duration-500 group-hover:w-full group-hover:bg-[#C8FF4D]" />
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
