import { Instagram, Linkedin, Twitter } from "lucide-react";
import logoMark from "@/assets/logo-mark-light.png";
import { Language, siteContent } from "@/content/site";

type FooterProps = {
  content: (typeof siteContent)[Language]["footer"];
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.6 5.82A4.18 4.18 0 0 1 14.3 3h-3.02v12.4a2.42 2.42 0 1 1-1.66-2.3V9.98a5.44 5.44 0 1 0 4.68 5.38V9.3a7.12 7.12 0 0 0 4.16 1.33V7.62a4.2 4.2 0 0 1-2.46-1.8Z" />
  </svg>
);

const socialIcon = (name: string) => {
  const className = "h-4 w-4";
  switch (name) {
    case "LinkedIn":
      return <Linkedin className={className} />;
    case "X":
      return <Twitter className={className} />;
    case "TikTok":
      return <TikTokIcon className={className} />;
    case "Instagram":
      return <Instagram className={className} />;
    default:
      return null;
  }
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

        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-mono-label text-[11px] uppercase tracking-wider text-white/50">
              {content.socialLabel}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {content.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/10 text-brand-muted transition-colors hover:border-brand-orange/50 hover:text-white"
                >
                  {socialIcon(item.name)}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 text-xs text-brand-muted sm:items-end">
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
      </div>
    </footer>
  );
};

export default Footer;
