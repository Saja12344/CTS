import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-navy">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            نحول أفكارك لمنتج{" "}
            <span className="text-gradient">رقمي حقيقي</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            مواقع احترافية وتطبيقات مخصصة تناسب احتياج عملك
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="gradient-electric text-foreground px-8 py-4 rounded-lg font-semibold text-base glow-electric hover:opacity-90 transition-opacity"
            >
              تواصل معنا
            </a>
            <a
              href="#services"
              className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-base hover:bg-secondary transition-colors"
            >
              شوف أعمالنا
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
