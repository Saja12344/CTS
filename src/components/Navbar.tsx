import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logoMark from "@/assets/logo-mark-light.png";
import { Language, siteContent } from "@/content/site";

type NavbarProps = {
  content: (typeof siteContent)[Language]["nav"];
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const Navbar = ({ content, language, onLanguageChange }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isArabic = language === "ar";

  const links = [
    { href: "#capabilities", label: content.build },
    { href: "#approach", label: content.approach },
    { href: "#thinking", label: content.thinking },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/[0.08] bg-[#171717]/90 backdrop-blur-md"
          : "border-white/[0.06] bg-[#171717]/80 backdrop-blur-md"
      }`}
    >
      <div className="grid-shell flex h-20 items-center justify-between">
        <a href="#hero" className="group flex items-center gap-3.5" aria-label="Core Tech Solutions">
          <img
            src={logoMark}
            alt=""
            className="h-7 w-7 object-contain opacity-90 transition-opacity group-hover:opacity-100"
          />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold leading-none tracking-tight text-white">
              {content.brand}
            </span>
            <span className="font-mono-label mt-0.5 text-[9px] uppercase tracking-widest text-brand-muted">
              {content.brandSub}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-white/70 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            id="lang-toggle"
            onClick={() => onLanguageChange(isArabic ? "en" : "ar")}
            className="rounded border border-white/10 px-3 py-2 text-xs font-medium text-white/70 transition-colors hover:border-white/25 hover:text-white"
          >
            {content.language}
          </button>
          <a href="#contact" className="btn-primary-sm">
            <span>{content.cta}</span>
            <ArrowRight className={`h-3.5 w-3.5 ${isArabic ? "rotate-180" : ""}`} />
          </a>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label={content.menuLabel}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/[0.06] bg-brand-charcoal md:hidden">
          <div className="grid-shell flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary-sm mt-3 justify-center"
            >
              {content.cta}
            </a>
            <button
              type="button"
              onClick={() => {
                onLanguageChange(isArabic ? "en" : "ar");
                setMobileOpen(false);
              }}
              className="mt-3 py-3 text-center text-xs uppercase tracking-[0.2em] text-white/60"
            >
              {content.language}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
