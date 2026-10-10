import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cinematicEase } from "@/lib/motion";
import { Language, siteContent } from "@/content/site";

type ContactSectionProps = {
  content: (typeof siteContent)[Language]["contact"];
  language: Language;
};

const ContactSection = ({ content }: ContactSectionProps) => {
  const [form, setForm] = useState({ name: "", email: "", reason: "", project: "" });
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `${content.whatsappIntro}\n\n${content.nameLabel}: ${form.name}\n${content.emailLabel}: ${form.email}\n${content.reasonLabel}: ${form.reason}\n${content.projectLabel}: ${form.project}`,
    );
    window.open(`https://wa.me/966503807517?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-brand-charcoal py-32 text-white">
      <div className="grid-shell relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.65, ease: cinematicEase }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <span className="section-label mb-3 block">{content.label}</span>
              <h2 className="font-heading mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                {content.title}
              </h2>
              <p className="max-w-md text-base leading-relaxed text-brand-muted sm:text-lg">
                {content.description}
              </p>
            </div>
            <div className="mt-12 space-y-2 border-t border-white/[0.08] pt-12 lg:mt-0">
              <a
                href={`mailto:${content.email}`}
                className="font-mono-label block text-base text-white transition-colors hover:text-brand-orange"
              >
                {content.email}
              </a>
              <p className="text-xs text-brand-muted">{content.nda}</p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, ease: cinematicEase, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="font-mono-label mb-2 block text-[11px] uppercase tracking-wider text-white/70"
                  htmlFor="name"
                >
                  {content.nameLabel}
                </label>
                <input
                  className="field-input"
                  id="name"
                  placeholder={content.namePlaceholder}
                  required
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label
                  className="font-mono-label mb-2 block text-[11px] uppercase tracking-wider text-white/70"
                  htmlFor="email"
                >
                  {content.emailLabel}
                </label>
                <input
                  className="field-input"
                  id="email"
                  placeholder={content.emailPlaceholder}
                  required
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label
                  className="font-mono-label mb-2 block text-[11px] uppercase tracking-wider text-white/70"
                  htmlFor="reason"
                >
                  {content.reasonLabel}
                </label>
                <select
                  className="field-input"
                  id="reason"
                  required
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                >
                  <option value="" disabled>
                    {content.reasonPlaceholder}
                  </option>
                  {content.reasonOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  className="font-mono-label mb-2 block text-[11px] uppercase tracking-wider text-white/70"
                  htmlFor="project"
                >
                  {content.projectLabel}
                </label>
                <textarea
                  className="field-input resize-none"
                  id="project"
                  placeholder={content.projectPlaceholder}
                  required
                  rows={4}
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                />
              </div>
              <div className="pt-2">
                <button className="btn-primary" type="submit">
                  {content.submit}
                </button>
                {submitted ? (
                  <p className="mt-4 text-sm text-brand-muted" role="status">
                    {content.success}
                  </p>
                ) : null}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
