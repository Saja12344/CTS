import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type WhatWeBuildProps = {
  content: (typeof siteContent)[Language]["build"];
};

const ServicesSection = ({ content }: WhatWeBuildProps) => {
  return (
    <section id="build" className="border-b rule surface-light">
      <div className="grid-shell py-16 md:py-24">
        <SectionReveal className="mb-12 flex items-end justify-between gap-6">
          <p className="micro-label text-[#0B0B0C]/45">{content.label}</p>
        </SectionReveal>

        <div className="divide-y divide-[#0B0B0C]/12 border-y border-[#0B0B0C]/12">
          {content.items.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.05}>
              <article className="group grid gap-4 py-10 transition-colors duration-500 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.2fr)] md:items-baseline md:gap-10 md:py-14">
                <span className="font-display text-sm tracking-[0.2em] text-[#0B0B0C]/35 transition-colors group-hover:text-[#0B0B0C]">
                  {item.index}
                </span>
                <h2 className="type-display text-[clamp(1.75rem,4vw,3.25rem)] text-[#0B0B0C]">{item.title}</h2>
                <p className="max-w-md text-sm leading-7 text-[#5a5c63] md:text-base md:justify-self-end md:text-right">
                  {item.description}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
