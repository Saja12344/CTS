import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type WorkSectionProps = {
  content: (typeof siteContent)[Language]["work"];
};

const WorkSection = ({ content }: WorkSectionProps) => {
  return (
    <section id="work" className="section-shell bg-background py-20 md:py-28">
      <div className="container">
        <SectionReveal className="mb-16 max-w-3xl">
          <p className="micro-label mb-4">{content.eyebrow}</p>
          <h2 className="editorial-title">{content.title}</h2>
        </SectionReveal>

        <div className="space-y-20 md:space-y-28">
          {content.projects.map((project) => (
            <SectionReveal key={project.name}>
              <article className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                <div className="overflow-hidden border border-border/80 bg-secondary/30">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full min-h-[240px] w-full object-cover opacity-80 transition-transform duration-700 hover:scale-[1.02] md:min-h-[360px]"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-medium tracking-tight md:text-3xl">{project.name}</h3>
                  <p className="editorial-body mb-8">{project.summary}</p>
                  <dl className="space-y-6 border-t border-border/80 pt-6 text-sm">
                    <div>
                      <dt className="micro-label mb-2">{content.labels.challenge}</dt>
                      <dd className="leading-relaxed text-muted-foreground">{project.challenge}</dd>
                    </div>
                    <div>
                      <dt className="micro-label mb-2">{content.labels.solution}</dt>
                      <dd className="leading-relaxed text-muted-foreground">{project.solution}</dd>
                    </div>
                    <div>
                      <dt className="micro-label mb-2">{content.labels.outcome}</dt>
                      <dd className="leading-relaxed text-muted-foreground">{project.outcome}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
