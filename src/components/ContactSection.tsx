import { FormEvent, useState } from "react";
import SectionReveal from "@/components/SectionReveal";
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
    <section id="contact" className="section-shell bg-[hsl(var(--brand-light))] py-20 text-[hsl(var(--brand-deep))] md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionReveal>
            <p className="micro-label mb-4 text-[hsl(var(--brand-deep)/0.55)]">{content.eyebrow}</p>
            <h2 className="editorial-title mb-5 text-[hsl(var(--brand-deep))]">{content.title}</h2>
            <p className="editorial-body mb-6 text-[hsl(var(--brand-deep)/0.72)]">{content.description}</p>
            <a href="#contact-form" className="btn-primary">
              {content.submit}
            </a>
            <p className="mt-6 text-sm text-[hsl(var(--brand-deep)/0.55)]">{content.whatsappNote}</p>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 border border-[hsl(var(--brand-deep)/0.12)] bg-[hsl(var(--brand-light))] p-6 md:p-8">
              <div>
                <label htmlFor="contact-name" className="micro-label mb-2 block text-[hsl(var(--brand-deep)/0.55)]">
                  {content.nameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-[hsl(var(--brand-deep)/0.15)] bg-transparent px-4 py-3 text-[hsl(var(--brand-deep))] outline-none focus:border-[hsl(var(--brand-deep)/0.45)]"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-service" className="micro-label mb-2 block text-[hsl(var(--brand-deep)/0.55)]">
                  {content.serviceLabel}
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-[hsl(var(--brand-deep)/0.15)] bg-transparent px-4 py-3 text-[hsl(var(--brand-deep))] outline-none focus:border-[hsl(var(--brand-deep)/0.45)]"
                  required
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
                <label htmlFor="contact-message" className="micro-label mb-2 block text-[hsl(var(--brand-deep)/0.55)]">
                  {content.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none border border-[hsl(var(--brand-deep)/0.15)] bg-transparent px-4 py-3 text-[hsl(var(--brand-deep))] outline-none focus:border-[hsl(var(--brand-deep)/0.45)]"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center border-[hsl(var(--brand-deep))] bg-[hsl(var(--brand-deep))] text-[hsl(var(--brand-light))] hover:bg-transparent hover:text-[hsl(var(--brand-deep))]">
                {content.submit}
              </button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
