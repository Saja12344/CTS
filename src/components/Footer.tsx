import { Language, siteContent } from "@/content/site";

type FooterProps = {
  content: (typeof siteContent)[Language]["footer"];
};

const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="bg-background py-12 md:py-14">
      <div className="grid-shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium tracking-tight">Core Tech Solutions</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{content.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <a href="#build" className="hover:text-foreground">
            {content.build}
          </a>
          <a href="#approach" className="hover:text-foreground">
            {content.approach}
          </a>
          <a href="#about" className="hover:text-foreground">
            {content.about}
          </a>
          <a href="#contact" className="hover:text-foreground">
            {content.contact}
          </a>
          <a href={content.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            {content.linkedin}
          </a>
        </nav>
      </div>
      <div className="grid-shell mt-10 border-t hairline pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Core Tech Solutions. {content.rights}
      </div>
    </footer>
  );
};

export default Footer;
