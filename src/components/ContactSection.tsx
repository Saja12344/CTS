import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type ContactSectionProps = {
  content: (typeof siteContent)[Language]["contact"];
};

const ContactSection = ({ content }: ContactSectionProps) => {
  const [form, setForm] = useState({ name: "", service: "", message: "" });
  const reduceMotion = useReducedMotion();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `${content.whatsappIntro}\n\n${content.nameLabel}: ${form.name}\n${content.serviceLabel}: ${form.service}\n${content.messageLabel}: ${form.message}`,
    );
    window.open(`https://wa.me/966503807517?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="border-b rule bg-background">
      <div className="grid-shell grid gap-14 py-24 md:grid-cols-[1fr_1fr] md:items-start md:gap-20 md:py-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.7, ease: cinematicEase }}
        >
          <h2 className="type-display mb-6 text-[clamp(2.5rem,6vw,5rem)]">{content.title}</h2>
          <p className="max-w-md text-base text-muted-foreground">{content.description}</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.75, ease: cinematicEase, delay: 0.08 }}
          className="space-y-5"
        >
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
              className="field-line w-full bg-transparent py-3 text-sm outline-none"
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
              className="field-line w-full bg-transparent py-3 text-sm outline-none"
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
              className="field-line w-full resize-none bg-transparent py-3 text-sm outline-none"
            />
          </div>
          <button type="submit" className="btn-solid btn-motion">
            {content.primaryCta}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
