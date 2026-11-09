import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoMark from "@/assets/logo-mark-light.png";
import { useSiteLanguage } from "@/context/LanguageContext";
import { siteRoutes } from "@/lib/routes";
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
    { to: siteRoutes.build, label: content.nav.build },
    { to: siteRoutes.approach, label: content.nav.approach },
    { to: siteRoutes.thinking, label: content.nav.thinking },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/[0.08] bg-[#171717]/90 backdrop-blur-md"
          : "border-white/[0.06] bg-[#171717]/80 backdrop-blur-md"
      }`}
    >
      <div className="grid-shell flex h-20 items-center justify-between">
        <Link to={siteRoutes.home} className="group flex items-center gap-3.5" aria-label="Core Tech Solutions">
          <img
            src={logoMark}
            alt=""
            className="h-7 w-7 object-contain opacity-90 transition-opacity group-hover:opacity-100"
          />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold leading-none tracking-tight text-white">
              {content.nav.brand}
            </span>
            <span className="font-mono-label mt-0.5 text-[9px] uppercase tracking-widest text-brand-muted">
              {content.nav.brandSub}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => linkClass(isActive)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            id="lang-toggle"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
            className="rounded border border-white/10 px-3 py-2 text-xs font-medium text-white/70 transition-colors hover:border-white/25 hover:text-white"
          >
            {content.nav.language}
          </button>
          <NavLink to={siteRoutes.contact} className="btn-primary-sm">
            {content.nav.cta}
          </NavLink>
        </div>

        <button
          type="button"
          id="menu-toggle"
          className="text-white md:hidden"
          aria-label={content.nav.menuLabel}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/[0.06] bg-brand-charcoal md:hidden">
          <div className="grid-shell flex min-h-[calc(100dvh-5rem)] flex-col py-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn("py-3 text-sm transition-colors", isActive ? "text-white" : "text-white/70 hover:text-white")
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to={siteRoutes.contact} className="btn-primary-sm mt-3 justify-center">
              {content.nav.cta}
            </NavLink>
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
