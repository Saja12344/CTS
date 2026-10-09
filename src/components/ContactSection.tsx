import { FormEvent, useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { Language, siteContent } from "@/content/site";

type ContactSectionProps = {
  content: (typeof siteContent)[Language]["contact"];
};

const ContactSection = ({ content }: ContactSectionProps) => {
  const [form, setForm] = useState({ name: "", service: "", message: "" });
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `${content.whatsappIntro}\n\n${content.nameLabel}: ${form.name}\n${content.serviceLabel}: ${form.service}\n${content.messageLabel}: ${form.message}`,
    );
    window.open(`https://wa.me/966503807517?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="border-b rule bg-background">
      <div className="grid-shell py-24 md:py-32">
        <SectionReveal className="max-w-3xl">
          <h2 className="type-display mb-6 text-[clamp(2.5rem,6vw,5rem)]">{content.title}</h2>
          <p className="mb-10 max-w-md text-base text-muted-foreground">{content.description}</p>
          <button type="button" className="btn-solid" onClick={() => setOpen((v) => !v)}>
            {content.primaryCta}
          </button>
        </SectionReveal>

        {open ? (
          <SectionReveal className="mt-12 max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-4 border-t rule pt-10">
              <div>
                <label htmlFor="contact-name" className="micro-label mb-2 block">
                  {content.nameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-b rule bg-transparent py-3 text-sm outline-none focus:border-[hsl(var(--accent))]"
                />
              </div>
              <div>
                <label htmlFor="contact-service" className="micro-label mb-2 block">
                  {content.serviceLabel}
                </label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border-b rule bg-transparent py-3 text-sm outline-none focus:border-[hsl(var(--accent))]"
                >
                  <option value="" disabled>
                    {content.servicePlaceholder}
                  </option>
                  {content.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="micro-label mb-2 block">
                  {content.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none border-b rule bg-transparent py-3 text-sm outline-none focus:border-[hsl(var(--accent))]"
                />
              </div>
              <button type="submit" className="btn-ghost">
                {content.submit}
              </button>
            </form>
          </SectionReveal>
        ) : null}
      </div>
    </section>
  );
};

export default ContactSection;
