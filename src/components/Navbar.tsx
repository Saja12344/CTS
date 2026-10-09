import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled ? "border-b hairline bg-background/95 backdrop-blur-sm" : "bg-background/70"}`}
    >
      <nav className="grid-shell flex h-16 items-center justify-between md:h-20" aria-label="Primary">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logoLight} alt="Core Tech Solutions" className="h-8 w-auto md:h-9" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="micro-label text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-solid px-5 py-2.5 text-[10px]">
            {content.cta}
          </a>
          <button type="button" onClick={() => onLanguageChange(isArabic ? "en" : "ar")} className="micro-label text-muted-foreground hover:text-foreground">
            {content.language}
          </button>
        </div>

        <button type="button" className="md:hidden" aria-label={content.menuLabel} aria-expanded={mobileOpen} onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t hairline bg-background md:hidden">
          <div className="grid-shell flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="py-3 text-sm text-muted-foreground">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-solid mt-2 justify-center text-[10px]">
              {content.cta}
            </a>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
};

export default Navbar;
