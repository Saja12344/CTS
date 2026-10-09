import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoLight from "@/assets/logo-light.png";
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
    { href: "#build", label: content.build },
    { href: "#approach", label: content.approach },
    { href: "#about", label: content.about },
    { href: "#contact", label: content.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] pointer-events-auto transition-colors duration-500 ${
        scrolled ? "border-b rule bg-background/95 backdrop-blur-sm" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="grid-shell relative z-[101] flex h-16 items-center justify-between md:h-[4.5rem]" aria-label="Primary">
        <a href="#hero" className="flex items-center">
          <img src={logoLight} alt="Core Tech Solutions" className="h-7 w-auto md:h-8" />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="micro-label transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-solid px-5 py-2.5 text-[10px]">
            {content.cta}
          </a>
          <button
            type="button"
            id="lang-toggle"
            onClick={() => onLanguageChange(isArabic ? "en" : "ar")}
            className="relative z-[60] cursor-pointer border border-border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            {content.language}
          </button>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={content.menuLabel}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t rule bg-background md:hidden">
          <div className="grid-shell flex flex-col py-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="py-3 text-sm text-muted-foreground">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-solid mt-3 justify-center text-[10px]">
              {content.cta}
            </a>
            <button
              type="button"
              onClick={() => {
                onLanguageChange(isArabic ? "en" : "ar");
                setMobileOpen(false);
              }}
              className="mt-3 py-3 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground"
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
