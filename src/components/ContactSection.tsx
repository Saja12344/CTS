import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useSiteLanguage } from "@/context/LanguageContext";
import { cinematicEase } from "@/lib/motion";
import { openWhatsApp } from "@/lib/whatsapp";

const ContactSection = () => {
  const { content } = useSiteLanguage();
  const contact = content.contact;
  const [form, setForm] = useState({ name: "", email: "", reason: "", project: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const reduceMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const message = [
      contact.whatsappIntro,
      `${contact.nameLabel}: ${form.name}`,
      `${contact.emailLabel}: ${form.email}`,
      `${contact.reasonLabel}: ${form.reason}`,
      `${contact.projectLabel}: ${form.project}`,
    ].join("\n");
    setStatus(openWhatsApp(message) ? "success" : "error");
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
              <span className="section-label mb-3 block">{contact.label}</span>
              <h2 className="font-heading mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                {contact.title}
              </h2>
              <p className="max-w-md text-base leading-relaxed text-[#C0C0B8] sm:text-lg">{contact.description}</p>
              <h3 className="font-heading mt-10 text-lg font-semibold">{contact.nextTitle}</h3>
              <ol className="mt-4 space-y-3">
                {contact.nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-[#C0C0B8]">
                    <span className="font-heading text-brand-orange">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-12 space-y-2 border-t border-white/[0.08] pt-12 lg:mt-0">
              <a
                href={`mailto:${contact.email}`}
                className="font-mono-label block text-base text-white transition-colors hover:text-brand-orange"
              >
                {contact.email}
              </a>
              <p className="text-xs text-[#C0C0B8]">{contact.nda}</p>
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
                  {contact.nameLabel}
                </label>
                <input
                  className="field-input"
                  id="name"
                  placeholder={contact.namePlaceholder}
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
                  {contact.emailLabel}
                </label>
                <input
                  className="field-input"
                  id="email"
                  placeholder={contact.emailPlaceholder}
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
                  {contact.reasonLabel}
                </label>
                <select
                  className="field-input"
                  id="reason"
                  required
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                >
                  <option value="" disabled>
                    {contact.reasonPlaceholder}
                  </option>
                  {contact.reasonOptions.map((option) => (
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
                  {contact.projectLabel}
                </label>
                <textarea
                  className="field-input resize-none"
                  id="project"
                  placeholder={contact.projectPlaceholder}
                  required
                  rows={4}
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                />
              </div>
              <div className="pt-2">
                <button className="btn-primary" type="submit">
                  {contact.submit}
                </button>
                {status !== "idle" ? (
                  <p className="mt-4 text-sm text-[#C0C0B8]" role="status">
                    {status === "success" ? contact.success : contact.error}
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
