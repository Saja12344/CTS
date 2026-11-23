import { useSiteLanguage } from "@/context/LanguageContext";

const WorkSection = () => {
  const { content } = useSiteLanguage();
  const work = content.work;

  return (
    <section id="work" className="w-full bg-brand-charcoal py-32 text-white">
      <div className="grid-shell">
        <span className="section-label mb-3 block">{work.label}</span>
        <h2 className="font-heading mb-12 text-3xl font-bold sm:text-5xl">{work.title}</h2>

        <article className="grid grid-cols-1 gap-10 border border-white/10 p-6 md:p-10 lg:grid-cols-2">
          <div
            className="flex min-h-[240px] items-center justify-center rounded border border-dashed border-white/20 text-sm text-[#C0C0B8]"
            role="img"
            aria-label={work.imageLabel}
          >
            {work.imageLabel}
          </div>
          <div>
            <h3 className="font-heading text-3xl font-semibold">{work.featuredName}</h3>
            <dl className="mt-6 space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="text-[#C0C0B8]">{work.problemLabel}</dt>
                <dd>{work.problem}</dd>
              </div>
              <div>
                <dt className="text-[#C0C0B8]">{work.builtLabel}</dt>
                <dd>{work.built}</dd>
              </div>
              <div>
                <dt className="text-[#C0C0B8]">{work.resultLabel}</dt>
                <dd>{work.result}</dd>
              </div>
            </dl>
            <blockquote className="mt-8 border-t border-white/10 pt-6">
              <p className="text-lg">{work.quote}</p>
              <footer className="mt-3 text-sm text-[#C0C0B8]">
                {work.quoteName} · {work.quoteRole}
              </footer>
            </blockquote>
          </div>
        </article>

        <h3 className="font-heading mt-16 text-2xl font-semibold">{work.sharedTitle}</h3>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {work.shared.map((project) => (
            <article key={project.name + project.sector} className="rounded border border-white/10 p-6">
              <p className="text-xs uppercase tracking-wider text-[#C0C0B8]">{project.sector}</p>
              <h4 className="font-heading mt-3 text-xl font-semibold">{project.name}</h4>
              <p className="mt-3 text-sm text-[#C0C0B8]">
                {work.roleLabel}: {project.role}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#C0C0B8]">{work.sharedNote}</p>
      </div>
    </section>
  );
};

export default WorkSection;
