import { motion } from "framer-motion";

const BrowserIcon = () => (
  <svg viewBox="0 0 80 60" className="w-20 h-16 mx-auto">
    <rect x="2" y="2" width="76" height="56" rx="6" fill="none" stroke="hsl(210 100% 50%)" strokeWidth="2" />
    <rect x="2" y="2" width="76" height="12" rx="6" fill="hsl(210 100% 50% / 0.15)" stroke="hsl(210 100% 50%)" strokeWidth="2" />
    <circle cx="12" cy="8" r="2" fill="hsl(0 84% 60%)" />
    <circle cx="20" cy="8" r="2" fill="hsl(45 100% 60%)" />
    <circle cx="28" cy="8" r="2" fill="hsl(120 60% 50%)" />
    {[0, 1, 2, 3].map((i) => (
      <motion.rect
        key={i}
        x="10"
        y={20 + i * 8}
        height="3"
        rx="1.5"
        fill="hsl(210 100% 50% / 0.4)"
        initial={{ width: 0 }}
        whileInView={{ width: [0, 20 + Math.random() * 35] }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
      />
    ))}
  </svg>
);

const IPhoneIcon = () => (
  <svg viewBox="0 0 44 80" className="w-12 h-20 mx-auto">
    <rect x="2" y="2" width="40" height="76" rx="8" fill="none" stroke="hsl(210 100% 50%)" strokeWidth="2" />
    <rect x="14" y="5" width="16" height="3" rx="1.5" fill="hsl(210 100% 50% / 0.3)" />
    <motion.rect
      x="8" y="14" width="28" height="10" rx="3"
      fill="hsl(210 100% 50% / 0.15)"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.5 }}
    />
    <motion.rect
      x="8" y="28" width="28" height="6" rx="2"
      fill="hsl(210 100% 50% / 0.1)"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.5 }}
    />
    <motion.rect
      x="8" y="38" width="28" height="6" rx="2"
      fill="hsl(210 100% 50% / 0.1)"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.5 }}
    />
    <motion.circle
      cx="22" cy="56" r="4"
      fill="hsl(210 100% 50% / 0.2)"
      stroke="hsl(210 100% 50%)"
      strokeWidth="1.5"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.4 }}
    />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 80 80" className="w-20 h-20 mx-auto">
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "40px 40px" }}
    >
      {[0, 60, 120].map((angle) => (
        <motion.ellipse
          key={angle}
          cx="40" cy="40" rx="30" ry="12"
          fill="none"
          stroke="hsl(210 100% 50%)"
          strokeWidth="1.5"
          transform={`rotate(${angle} 40 40)`}
        />
      ))}
    </motion.g>
    <motion.circle
      cx="40" cy="40" r="5"
      fill="hsl(210 100% 50%)"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

const services = [
  {
    Icon: BrowserIcon,
    title: "تصميم المواقع",
    description: "موقعك هو واجهتك للعالم — نصممه بدقة يعكس هويتك ويحوّل الزوار لعملاء",
    tags: ["⚡ سريع", "📱 متجاوب", "🎨 مخصص"],
  },
  {
    Icon: IPhoneIcon,
    title: "تطبيقات iOS",
    description: "تطبيقات iPhone سلسة وأنيقة مبنية بـ Swift تعطي مستخدمك تجربة ما ينساها",
    tags: ["🍎 Swift", "🔒 آمن", "✨ UI احترافي"],
  },
  {
    Icon: ReactIcon,
    title: "تطبيقات React",
    description: "تطبيقات ويب وموبايل تفاعلية بـ React تشتغل على كل جهاز بسرعة وسلاسة",
    tags: ["⚛️ React", "🌐 Cross-platform", "🚀 أداء عالي"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا</h2>
          <p className="text-muted-foreground text-lg">حلول رقمية متكاملة لنمو عملك</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px -10px hsl(210 100% 50% / 0.3)" }}
              className="bg-card border border-border rounded-xl p-8 text-center transition-colors duration-300 hover:border-primary/50"
            >
              <div className="mb-6">
                <service.Icon />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
