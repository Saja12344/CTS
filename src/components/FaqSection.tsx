import { useSiteLanguage } from "@/context/LanguageContext";

const FaqSection = () => {
  const { content } = useSiteLanguage();

  return (
    <section id="faq" className="w-full bg-brand-offwhite py-24 text-brand-charcoal">
      <div className="grid-shell max-w-4xl">
        <span className="section-label mb-3 block">{content.faq.label}</span>
        <h2 className="font-heading mb-10 text-3xl font-bold tracking-tight sm:text-5xl">{content.faq.title}</h2>
        <div className="border-b border-brand-border">
          {content.faq.items.map((item) => (
            <details key={item.q} className="group border-t border-brand-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="text-brand-orange group-open:hidden" aria-hidden="true">
                  +
                </span>
                <span className="hidden text-brand-orange group-open:inline" aria-hidden="true">
                  –
                </span>
              </summary>
              <p className="pb-5 text-base leading-relaxed text-brand-ink">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
