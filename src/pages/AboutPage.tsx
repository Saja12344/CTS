import { Link } from "react-router-dom";
import { useSiteLanguage } from "@/context/LanguageContext";
import { siteRoutes } from "@/lib/routes";

const AboutPage = () => {
  const { content } = useSiteLanguage();
  const about = content.about;

  return (
    <section id="about" className="w-full scroll-mt-24 bg-brand-offwhite py-32 text-brand-charcoal">
      <div className="grid-shell">
        <span className="section-label mb-3 block">{about.label}</span>
        <h2 className="font-heading max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">{about.title}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-ink">{about.description}</p>

        <ul className="mt-10 grid max-w-3xl gap-4">
          {about.points.map((point) => (
            <li key={point} className="flex gap-3 text-base leading-relaxed text-brand-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded border border-brand-border bg-white p-8">
            <p className="section-label mb-6">{about.founderTitle}</p>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div
                className="flex h-28 w-28 shrink-0 items-center justify-center rounded bg-brand-offwhite px-3 text-center text-xs text-brand-ink"
                role="img"
                aria-label={about.photoLabel}
              >
                {about.photoLabel}
              </div>
              <div>
                <h2 className="font-heading text-2xl font-semibold">{about.founderName}</h2>
                <p className="mt-1 text-brand-ink">{about.founderRole}</p>
                <p className="mt-2 text-sm text-brand-ink">{about.founderExperience}</p>
                <a
                  href={about.founderLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-brand-charcoal underline decoration-brand-orange underline-offset-4"
                >
                  {about.founderLinkedInLabel}
                </a>
              </div>
            </div>
          </article>

          <article className="rounded border border-brand-border bg-white p-8">
            <h2 className="font-heading text-2xl font-semibold">{about.networkTitle}</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {about.networkTags.map((tag) => (
                <li key={tag} className="rounded border border-brand-border px-3 py-2 text-sm text-brand-ink">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <Link to={siteRoutes.careers} className="btn-primary mt-12">
          {about.careersPrompt}
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
