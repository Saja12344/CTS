import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
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

  const navLinks = [
    { label: content.services, href: "#services" },
    { label: content.work, href: "#work" },
    { label: content.about, href: "#about" },
    { label: content.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-border/80 bg-background/95 backdrop-blur-sm" : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20" aria-label="Primary">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Core Tech Solutions" className="h-7 w-auto" />
          <span className="hidden text-[10px] uppercase tracking-[0.32em] text-muted-foreground sm:inline">Solutions</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors duration-400 hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary px-5 py-2.5 text-xs">
            {content.startProject}
          </a>
          <button
            type="button"
            onClick={() => onLanguageChange(isArabic ? "en" : "ar")}
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            {content.language}
          </button>
        </div>

        <button type="button" className="md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label={content.menuLabel} aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-border/80 bg-background md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="py-3 text-sm text-muted-foreground">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-2 justify-center text-xs">
              {content.startProject}
            </a>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
};

export default Navbar;
