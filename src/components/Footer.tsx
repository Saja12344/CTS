import { Linkedin, Twitter } from "lucide-react";
import logoMark from "@/assets/logo-mark-white.png";
import { Language, siteContent } from "@/content/site";

type FooterProps = {
  content: (typeof siteContent)[Language]["footer"];
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.6 5.82A4.18 4.18 0 0 1 14.3 3h-3.02v12.4a2.42 2.42 0 1 1-1.66-2.3V9.98a5.44 5.44 0 1 0 4.68 5.38V9.3a7.12 7.12 0 0 0 4.16 1.33V7.62a4.2 4.2 0 0 1-2.46-1.8Z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01Zm-7.01 15.24h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74 1.48.64 2.07.7 2.81.59.43-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z" />
  </svg>
);

const socialIcon = (name: string) => {
  const className = "h-4 w-4";
  switch (name) {
    case "WhatsApp":
      return <WhatsAppIcon className={className} />;
    case "LinkedIn":
      return <Linkedin className={className} />;
    case "X":
      return <Twitter className={className} />;
    case "TikTok":
      return <TikTokIcon className={className} />;
    default:
      return null;
  }
};

const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#111111] py-16 text-white">
      <div className="grid-shell">
        <div className="flex flex-col items-center gap-8 border-b border-white/[0.06] pb-12 text-center">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" className="h-7 w-7 object-contain opacity-90" />
            <div className="flex flex-col items-start">
              <span className="font-heading text-base font-bold leading-none tracking-tight">
                {content.brand}
              </span>
              <span className="font-mono-label text-[9px] uppercase tracking-wider text-brand-muted">
                {content.brandSub}
              </span>
            </div>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-brand-muted">{content.tagline}</p>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-brand-muted"
          >
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

        <div className="flex flex-col items-center gap-6 pt-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono-label text-[11px] uppercase tracking-wider text-white/50">
              {content.socialLabel}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
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
            <a
              href={content.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 font-mono-label text-sm text-brand-muted transition-colors hover:text-white"
              dir="ltr"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {content.phone}
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-xs text-brand-muted">
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
