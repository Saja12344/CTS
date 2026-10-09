import { FormEvent, useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import MetallicVisual from "@/components/MetallicVisual";
import { Language, siteContent } from "@/content/site";

type ContactSectionProps = {
  content: (typeof siteContent)[Language]["contact"];
};

const ContactSection = ({ content }: ContactSectionProps) => {
  const [form, setForm] = useState({ name: "", service: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `${content.whatsappIntro}\n\n${content.nameLabel}: ${form.name}\n${content.serviceLabel}: ${form.service}\n${content.messageLabel}: ${form.message}`,
    );
    window.open(`https://wa.me/966503807517?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section-pad border-b hairline bg-background">
      <div className="grid-shell grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionReveal>
            <p className="section-index mb-6">{content.section}</p>
            <h2 className="display-statement mb-6">{content.title}</h2>
            <p className="body-copy mb-8">{content.description}</p>
            <a href="#contact-form" className="btn-solid mb-10 inline-flex">
              {content.primaryCta}
            </a>
          </SectionReveal>
          <SectionReveal delay={0.08} className="hidden md:block">
            <MetallicVisual compact className="max-w-sm opacity-75" />
          </SectionReveal>
        </div>

        <SectionReveal delay={0.1}>
          <form id="contact-form" onSubmit={handleSubmit} className="border hairline bg-card/20 p-6 md:p-8">
            <div className="mb-4">
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
                className="w-full border hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-[hsl(var(--accent))]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact-service" className="micro-label mb-2 block">
                {content.serviceLabel}
              </label>
              <select
                id="contact-service"
                name="service"
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full border hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-[hsl(var(--accent))]"
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
            <div className="mb-6">
              <label htmlFor="contact-message" className="micro-label mb-2 block">
                {content.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none border hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-[hsl(var(--accent))]"
              />
            </div>
            <button type="submit" className="btn-solid w-full justify-center">
              {content.submit}
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ContactSection;
