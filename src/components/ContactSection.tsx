import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { CalendarCheck, MessageCircle, Send } from "lucide-react";
import { Language, siteContent } from "@/content/site";

type ContactSectionProps = {
  content: (typeof siteContent)[Language]["contact"];
};

const ContactSection = ({ content }: ContactSectionProps) => {
  const [form, setForm] = useState({ name: "", service: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `${content.whatsappIntro}\n\n${content.nameLabel}: ${form.name}\n${content.serviceLabel}: ${form.service}\n${content.messageLabel}: ${form.message}`
    );
    window.open(`https://wa.me/966503807517?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 gradient-navy">
      <div className="absolute bottom-0 right-1/2 h-80 w-80 translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {content.eyebrow}
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">{content.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {content.description}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card/80 p-8"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl gradient-electric">
              <CalendarCheck size={28} className="text-foreground" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">{content.cardTitle}</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {content.cardDescription}
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              {content.steps.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-4 py-3">
                  <MessageCircle size={16} className="text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-background/70 p-6 backdrop-blur md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder={content.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-card px-5 py-4 text-foreground transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full appearance-none rounded-xl border border-border bg-card px-5 py-4 text-foreground transition focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="" disabled>{content.servicePlaceholder}</option>
                {content.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <textarea
                placeholder={content.messagePlaceholder}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-card px-5 py-4 text-foreground transition placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-lg font-semibold text-foreground transition-opacity gradient-electric glow-electric hover:opacity-90"
              >
                <Send size={18} />
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
