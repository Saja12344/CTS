import founderPhoto from "@/assets/founder-saja.png";
import { useSiteLanguage } from "@/context/LanguageContext";

const AboutPage = () => {
  const { content } = useSiteLanguage();
  const about = content.about;

  return (
    <section id="about" className="w-full scroll-mt-24 bg-brand-offwhite py-32 text-brand-charcoal">
      <div className="grid-shell">
        <span className="section-label mb-3 block">{about.label}</span>
        <h2 className="font-heading max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">{about.title}</h2>
        <div className="mt-6 max-w-3xl space-y-4">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-brand-ink">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded border border-brand-border bg-white p-8">
            <p className="section-label mb-6">{about.founderTitle}</p>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <img
                src={founderPhoto}
                alt={about.photoLabel}
                className="h-72 w-48 shrink-0 rounded object-cover object-[center_12%]"
              />
              <div>
                <h2 className="font-heading text-2xl font-semibold">{about.founderName}</h2>
                <p className="mt-1 font-semibold text-brand-charcoal">{about.founderRole}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink">{about.founderExperience}</p>
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
            <p className="mt-4 text-sm leading-relaxed text-brand-ink">{about.networkDescription}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {about.networkTags.map((tag) => (
                <li key={tag} className="rounded border border-brand-border px-3 py-2 text-sm text-brand-ink">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
