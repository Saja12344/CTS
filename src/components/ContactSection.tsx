import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `الاسم: ${form.name}%0Aالخدمة: ${form.service}%0Aالرسالة: ${form.message}`;
    window.open(`https://wa.me/966503807517?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 gradient-navy">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-muted-foreground text-lg">جاهزين نساعدك تبدأ مشروعك</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* WhatsApp button
          <a
            href="https://wa.me/966503807517"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[hsl(142,70%,45%)] text-foreground font-semibold text-lg mb-8 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={22} />
            تواصل عبر واتساب
          </a> */}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="الاسم"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
              required
            />
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition appearance-none"
              required
            >
              <option value="" disabled>الخدمة المطلوبة</option>
              <option value="تصميم موقع">تصميم موقع</option>
              <option value="تطبيق iOS">تطبيق iOS</option>
              <option value="تطبيق React">تطبيق React</option>
              <option value="أخرى">أخرى</option>
            </select>
            <textarea
              placeholder="رسالتك"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
              required
            />
            <button
              type="submit"
              className="w-full gradient-electric text-foreground py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 glow-electric hover:opacity-90 transition-opacity"
            >
              <Send size={18} />
              أرسل
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
