import { Language, siteContent } from "@/content/site";

type FooterProps = {
  content: (typeof siteContent)[Language]["footer"];
  language: Language;
};

const Footer = ({ content, language }: FooterProps) => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container">
        <div className={`flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between ${language === "ar" ? "md:text-right" : "md:text-left"}`}>
          <div>
            <h2 className="text-lg font-bold text-gradient">Core Tech Solutions</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {content.tagline}
            </p>
          </div>
          <div className={`flex flex-wrap justify-center gap-4 text-sm text-muted-foreground ${language === "ar" ? "md:justify-end" : "md:justify-start"}`}>
            <a href="#services" className="transition-colors hover:text-foreground">{content.services}</a>
            <a href="#pricing" className="transition-colors hover:text-foreground">{content.pricing}</a>
            <a href="#contact" className="transition-colors hover:text-foreground">{content.contact}</a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Core Tech Solutions. {content.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
