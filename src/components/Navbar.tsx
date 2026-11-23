import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoLockup from "@/assets/logo-lockup-light.png";
import { useSiteLanguage } from "@/context/LanguageContext";
import { homeSection, siteRoutes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const linkClass = (isActive: boolean) =>
  cn(
    "relative text-sm font-medium transition-colors after:absolute after:-bottom-2 after:inset-x-0 after:h-px after:origin-center after:bg-brand-orange after:transition-transform after:duration-300 after:content-['']",
    isActive
      ? "text-white after:scale-x-100"
      : "text-white/70 after:scale-x-0 hover:text-white hover:after:scale-x-100",
  );

const Navbar = () => {
  const { content, language, setLanguage } = useSiteLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isArabic = language === "ar";

  const links = [
    { hash: "capabilities", label: content.nav.build },
    { hash: "approach", label: content.nav.approach },
    { hash: "about", label: content.nav.about },
    { hash: "thinking", label: content.nav.thinking },
  ];
  const onHome = location.pathname === siteRoutes.home;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/[0.08] bg-[#171717]/90 backdrop-blur-md"
          : "border-white/[0.06] bg-[#171717]/80 backdrop-blur-md"
      }`}
    >
      <div className="grid-shell flex h-20 items-center justify-between">
        <Link to={siteRoutes.home} className="group flex items-center" aria-label={content.company.legalName}>
          <img
            src={logoLockup}
            alt={content.company.legalName}
            className="h-11 w-auto max-w-[200px] object-contain opacity-95 transition-opacity group-hover:opacity-100 sm:h-14 sm:max-w-[250px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.hash}
              to={homeSection(link.hash)}
              className={linkClass(onHome && location.hash === `#${link.hash}`)}
            >
              {link.label}
            </Link>
          ))}
          {/* TODO: فعّل قسم الأعمال بعد موافقة عميلة "ترددي"
          <NavLink to={siteRoutes.work} className={({ isActive }) => linkClass(isActive)}>
            {content.nav.work}
          </NavLink>
          */}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button
            type="button"
            id="lang-toggle"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
            className="rounded border border-white/10 px-3 py-2 text-xs font-medium text-white/70 transition-colors hover:border-white/25 hover:text-white"
          >
            {content.nav.language}
          </button>
          <NavLink to={siteRoutes.careers} className={({ isActive }) => linkClass(isActive)}>
            {content.nav.careers}
          </NavLink>
          <Link to={homeSection("contact")} className="btn-primary-sm">
            {content.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          id="menu-toggle"
          className="text-white xl:hidden"
          aria-label={content.nav.menuLabel}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/[0.06] bg-brand-charcoal xl:hidden">
          <div className="grid-shell flex min-h-[calc(100dvh-5rem)] flex-col py-6">
            {links.map((link) => (
              <Link
                key={link.hash}
                to={homeSection(link.hash)}
                className={cn(
                  "py-3 text-sm transition-colors",
                  onHome && location.hash === `#${link.hash}` ? "text-white" : "text-white/70 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
            <NavLink
              to={siteRoutes.careers}
              className={({ isActive }) =>
                cn("py-3 text-sm transition-colors", isActive ? "text-white" : "text-white/70 hover:text-white")
              }
            >
              {content.nav.careers}
            </NavLink>
            <Link to={homeSection("contact")} className="btn-primary-sm mt-3 justify-center">
              {content.nav.cta}
            </Link>
            <button
              type="button"
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
              className="mt-3 py-3 text-center text-xs uppercase tracking-[0.2em] text-white/60"
            >
              {content.nav.language}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
