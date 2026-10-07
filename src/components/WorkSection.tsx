import { motion } from "framer-motion";
import { Language, siteContent } from "@/content/site";

type WorkSectionProps = {
  content: (typeof siteContent)[Language]["work"];
};

const WorkSection = ({ content }: WorkSectionProps) => {
  const hasProjects = content.projects.length > 0;

  return (
    <section id="work" className="section-surface py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{content.eyebrow}</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">{content.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{content.description}</p>
        </motion.div>

        {hasProjects ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {content.projects.map((project, i) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <h3 className="mb-2 text-2xl font-semibold">{project.name}</h3>
                <p className="mb-6 text-muted-foreground">{project.summary}</p>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="mb-1 font-semibold text-foreground">{content.labels.problem}</dt>
                    <dd className="text-muted-foreground">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-foreground">{content.labels.solution}</dt>
                    <dd className="text-muted-foreground">{project.solution}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-foreground">{content.labels.services}</dt>
                    <dd className="text-muted-foreground">{project.services.join(" · ")}</dd>
                  </div>
                  {project.result ? (
                    <div>
                      <dt className="mb-1 font-semibold text-foreground">{content.labels.result}</dt>
                      <dd className="text-muted-foreground">{project.result}</dd>
                    </div>
                  ) : null}
                </dl>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-2xl border border-dashed border-border bg-background/80 p-10 text-center"
          >
            <h3 className="mb-3 text-xl font-semibold">{content.emptyTitle}</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">{content.emptyDescription}</p>
            <a
              href="#contact"
              className="btn-brand px-6 py-3 text-sm"
            >
              {content.emptyCta}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
