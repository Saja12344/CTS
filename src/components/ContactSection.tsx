import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
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
    <section id="contact" className="section-surface-alt py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{content.eyebrow}</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">{content.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{content.description}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card/40 p-8"
          >
            <h3 className="mb-3 text-xl font-semibold">{content.cardTitle}</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">{content.cardDescription}</p>
            <ol className="space-y-3 text-sm text-muted-foreground">
              {content.steps.map((item, index) => (
                <li key={item} className="flex items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--brand-accent)/0.2)] text-xs font-semibold text-[hsl(var(--brand-accent))]">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card/30 p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  {content.nameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={content.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-5 py-4 text-foreground transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-service" className="sr-only">
                  {content.serviceLabel}
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full appearance-none rounded-xl border border-border bg-background px-5 py-4 text-foreground transition focus:outline-none focus:ring-2 focus:ring-primary"
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
                <label htmlFor="contact-message" className="sr-only">
                  {content.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder={content.messagePlaceholder}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-border bg-background px-5 py-4 text-foreground transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-brand w-full gap-2 py-4 text-lg"
              >
                <Send size={18} aria-hidden="true" />
                {content.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
