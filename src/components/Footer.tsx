import { Language, siteContent } from "@/content/site";

type FooterProps = {
  content: (typeof siteContent)[Language]["footer"];
  language: Language;
};

const Footer = ({ content, language }: FooterProps) => {
  const isArabic = language === "ar";

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container">
        <div
          className={`flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between ${
            isArabic ? "md:text-right" : "md:text-left"
          }`}
        >
          <div>
            <p className="brand-wordmark text-lg">Core Tech</p>
            <p className="brand-solutions mt-1">Solutions</p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">{content.tagline}</p>
          </div>
          <nav
            aria-label="Footer"
            className={`flex flex-wrap justify-center gap-4 text-sm text-muted-foreground ${
              isArabic ? "md:justify-end" : "md:justify-start"
            }`}
          >
            <a href="#services" className="transition-colors hover:text-foreground">
              {content.services}
            </a>
            <a href="#work" className="transition-colors hover:text-foreground">
              {content.work}
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              {content.about}
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              {content.contact}
            </a>
          </nav>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Core Tech Solutions. {content.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
