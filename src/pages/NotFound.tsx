import { Link } from "react-router-dom";
import { useSiteLanguage } from "@/context/LanguageContext";
import { siteRoutes } from "@/lib/routes";

const NotFound = () => {
  const { content } = useSiteLanguage();

  return (
    <div className="flex min-h-[70vh] flex-col items-start justify-center bg-brand-charcoal px-6 py-32 lg:px-12">
      <div className="grid-shell">
        <p className="section-label mb-4">{content.notFound.code}</p>
        <h1 className="font-heading mb-8 text-4xl font-bold text-white sm:text-6xl">{content.notFound.title}</h1>
        <Link to={siteRoutes.home} className="btn-primary">
          {content.notFound.action}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
