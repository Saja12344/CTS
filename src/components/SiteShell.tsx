import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LanguageProvider, useSiteLanguage } from "@/context/LanguageContext";
import { cinematicEase } from "@/lib/motion";
import { hashRoutes, siteRoutes } from "@/lib/routes";
import ApproachPage from "@/pages/ApproachPage";
import BuildPage from "@/pages/BuildPage";
import ContactPage from "@/pages/ContactPage";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ThinkingPage from "@/pages/ThinkingPage";

const SiteFrame = () => {
  const { content, dir } = useSiteLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const next = hashRoutes[location.hash];
    if (next && next !== location.pathname) {
      navigate(next, { replace: true });
    }
  }, [location.hash, location.pathname, navigate]);

  useEffect(() => {
    const titles: Record<string, string> = {
      [siteRoutes.home]: content.seo.title,
      [siteRoutes.build]: `${content.nav.build} — CTS`,
      [siteRoutes.approach]: `${content.nav.approach} — CTS`,
      [siteRoutes.thinking]: `${content.nav.thinking} — CTS`,
      [siteRoutes.contact]: `${content.contact.label} — CTS`,
    };
    document.title = titles[location.pathname] ?? content.seo.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = content.seo.description;
    }
  }, [content, location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
              <Route path={siteRoutes.build} element={<BuildPage />} />
              <Route path={siteRoutes.approach} element={<ApproachPage />} />
              <Route path={siteRoutes.thinking} element={<ThinkingPage />} />
              <Route path={siteRoutes.contact} element={<ContactPage />} />
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
