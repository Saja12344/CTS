import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LanguageProvider, useSiteLanguage } from "@/context/LanguageContext";
import { cinematicEase } from "@/lib/motion";
import { homeSection, sectionRedirects, siteRoutes } from "@/lib/routes";
import { applyPageSeo } from "@/lib/seo";
import CareersPage from "@/pages/CareersPage";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
// TODO: فعّل قسم الأعمال بعد موافقة عميلة "ترددي"
// import WorkPage from "@/pages/WorkPage";

const SiteFrame = () => {
  const { content, dir, language } = useSiteLanguage();
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const titles: Record<string, string> = {
      [siteRoutes.home]: content.seo.title,
      [siteRoutes.build]: `${content.nav.build} — ${content.company.legalName}`,
      [siteRoutes.approach]: `${content.nav.approach} — ${content.company.legalName}`,
      [siteRoutes.about]: content.about.seo.title,
      [siteRoutes.thinking]: `${content.nav.thinking} — ${content.company.legalName}`,
      [siteRoutes.contact]: `${content.contact.label} — ${content.company.legalName}`,
      [siteRoutes.careers]: content.careers.seo.title,
    };
    const descriptions: Record<string, string> = {
      [siteRoutes.about]: content.about.seo.description,
      [siteRoutes.careers]: content.careers.seo.description,
    };
    applyPageSeo({
      language,
      pathname: location.pathname,
      title: titles[location.pathname] ?? content.seo.title,
      description: descriptions[location.pathname] ?? content.seo.description,
    });
  }, [content, language, location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div dir={dir} className="bg-brand-charcoal text-brand-offwhite">
      <Navbar />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.4, ease: cinematicEase }}
          >
            <Routes location={location}>
              <Route path={siteRoutes.home} element={<Index />} />
              {sectionRedirects.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<Navigate to={homeSection(item.hash)} replace />}
                />
              ))}
              <Route path={siteRoutes.careers} element={<CareersPage />} />
              {/* TODO: فعّل قسم الأعمال بعد موافقة عميلة "ترددي"
              <Route path={siteRoutes.work} element={<WorkPage />} />
              */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const SiteShell = () => (
  <LanguageProvider>
    <SiteFrame />
  </LanguageProvider>
);

export default SiteShell;
