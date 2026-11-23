import { motion, useReducedMotion } from "framer-motion";
import { serviceCatalog } from "@/content/services";
import { useSiteLanguage } from "@/context/LanguageContext";
import { cinematicEase } from "@/lib/motion";

const ServicesSection = () => {
  const { content, language } = useSiteLanguage();
  const catalog = serviceCatalog[language];
  const reduceMotion = useReducedMotion();

  return (
    <section id="capabilities" className="w-full bg-brand-offwhite py-32 text-brand-charcoal">
      <div className="grid-shell">
        <div className="mb-16 max-w-3xl">
          <span className="section-label mb-3 block">{content.build.label}</span>
          <h2 className="font-heading mb-6 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {content.build.title}
          </h2>
          <p className="text-base leading-relaxed text-brand-ink sm:text-lg">{content.build.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {catalog.items.map((item, index) => (
            <motion.article
              key={item.index}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.55, ease: cinematicEase, delay: index * 0.05 }}
              className="flex h-full flex-col rounded border border-brand-border bg-white p-8"
            >
              <span className="font-mono-label text-xs font-semibold tracking-widest text-brand-orange">
                {item.index}
              </span>
              <h3 className="font-heading mt-3 text-2xl font-semibold sm:text-3xl">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-ink">{item.description}</p>
              <ul className="mt-6 space-y-2 text-sm leading-relaxed text-brand-ink">
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-brand-border pt-4 text-sm font-semibold text-brand-charcoal">
                {item.duration}
                <span className="mx-2 text-brand-ink">|</span>
                {item.price}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-brand-ink">{catalog.note}</p>
      </div>
    </section>
  );
};

export default ServicesSection;
