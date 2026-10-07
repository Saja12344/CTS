import { useState, useEffect } from "react";
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
    { label: content.home, href: "#hero" },
    { label: content.services, href: "#services" },
    { label: content.work, href: "#work" },
    { label: content.about, href: "#about" },
    { label: content.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/95 backdrop-blur-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Core Tech Solutions" className="h-7 w-auto md:h-8" />
          <span className="hidden sm:block">
            <span className="brand-wordmark">Core Tech</span>
            <span className="brand-solutions mt-0.5">Solutions</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-brand px-5 py-2.5 text-sm">
            {content.startProject}
          </a>
          <button
            type="button"
            onClick={() => onLanguageChange(isArabic ? "en" : "ar")}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-[hsl(var(--brand-accent)/0.5)] hover:text-foreground"
          >
            {content.language}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={content.menuLabel}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-b border-border bg-background md:hidden"
        >
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-brand mt-2 justify-center py-3 text-sm"
            >
              {content.startProject}
            </a>
            <button
              type="button"
              onClick={() => {
                onLanguageChange(isArabic ? "en" : "ar");
                setMobileOpen(false);
              }}
              className="rounded-xl border border-border px-5 py-3 text-center text-sm font-semibold text-muted-foreground"
            >
              {content.language}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
