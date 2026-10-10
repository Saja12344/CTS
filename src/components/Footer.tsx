import logoMark from "@/assets/logo-mark-light.png";
import { Language, siteContent } from "@/content/site";

type FooterProps = {
  content: (typeof siteContent)[Language]["footer"];
};

const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#111111] py-16 text-white">
      <div className="grid-shell">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/[0.06] pb-12 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" className="h-6 w-6 object-contain opacity-80" />
            <div className="flex flex-col">
              <span className="font-heading text-base font-bold leading-none tracking-tight">
                {content.brand}
              </span>
              <span className="font-mono-label text-[9px] uppercase tracking-wider text-brand-muted">
                {content.brandSub}
              </span>
            </div>
          </div>

          <p className="max-w-md text-sm text-brand-muted">{content.tagline}</p>

          <nav aria-label="Footer" className="flex items-center gap-8 text-sm text-brand-muted">
            <a href="#capabilities" className="transition-colors hover:text-white">
              {content.build}
            </a>
            <a href="#approach" className="transition-colors hover:text-white">
              {content.approach}
            </a>
            <a href="#thinking" className="transition-colors hover:text-white">
              {content.thinking}
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-brand-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} Core Tech Solutions. {content.rights}
          </span>
          <a
            href={`mailto:${content.email}`}
            className="font-mono-label text-brand-muted transition-colors hover:text-white"
          >
            {content.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
