import { Language, siteContent } from "@/content/site";

type FooterProps = {
  content: (typeof siteContent)[Language]["footer"];
  language: Language;
};

const Footer = ({ content, language }: FooterProps) => {
  const isArabic = language === "ar";

  return (
    <footer className="bg-background py-12 md:py-14">
      <div className="container">
        <div className={`flex flex-col gap-8 md:flex-row md:items-start md:justify-between ${isArabic ? "md:text-right" : "md:text-left"}`}>
          <div>
            <p className="text-sm font-medium tracking-tight">Core Tech Solutions</p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">{content.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
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
            <a href={content.linkedinUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              {content.linkedin}
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-border/80 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Core Tech Solutions. {content.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
