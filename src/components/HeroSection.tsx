import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, ShieldCheck, TrendingUp } from "lucide-react";
import { Language, siteContent } from "@/content/site";

type HeroSectionProps = {
  content: (typeof siteContent)[Language]["hero"];
  language: Language;
};

const HeroSection = ({ content, language }: HeroSectionProps) => {
  const isArabic = language === "ar";
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden gradient-navy">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(210_100%_50%_/_0.14),transparent_32%),linear-gradient(to_left,hsl(210_100%_50%_/_0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(210_100%_50%_/_0.05)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
      </div>

      <div className="container relative z-10 grid min-h-screen items-center gap-12 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <ShieldCheck size={16} />
            {content.badge}
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            {content.title}{" "}
            <span className="text-gradient">{content.titleAccent}</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
            {content.description}
          </p>
          <div className="mb-10 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3 lg:max-w-2xl">
            {content.proofPoints.map((point) => (
              <div key={point} className={`flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-4 py-3 ${isArabic ? "lg:justify-start" : "lg:justify-start"}`}>
                <CheckCircle2 size={16} className="text-primary" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-foreground transition-opacity hover:opacity-90 gradient-electric glow-electric"
            >
              {content.primaryCta}
              <ArrowIcon size={18} className={`transition-transform ${isArabic ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
            </a>
            <a
              href="#services"
              className="rounded-xl border border-border bg-card/40 px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {content.secondaryCta}
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-3 border-t border-border pt-8 lg:max-w-xl">
            {content.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl font-bold text-gradient">{metric.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card/70 p-5 shadow-2xl shadow-primary/10 backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{content.consoleLabel}</p>
                <h2 className="mt-1 text-xl font-bold">{content.consoleTitle}</h2>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                <Cpu size={26} />
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: content.phases[0], progress: "100%", icon: ShieldCheck },
                { title: content.phases[1], progress: "82%", icon: TrendingUp },
                { title: content.phases[2], progress: "64%", icon: Cpu },
              ].map((item, index) => (
                <div key={item.title} className="rounded-2xl border border-border bg-background/60 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-primary/10 p-2 text-primary">
                        <item.icon size={18} />
                      </div>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <span className="text-sm text-primary">{item.progress}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      className="h-full rounded-full gradient-electric"
                      initial={{ width: 0 }}
                      animate={{ width: item.progress }}
                      transition={{ duration: 0.9, delay: 0.35 + index * 0.15 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-muted-foreground">{content.readiness}</p>
                <p className="mt-2 text-3xl font-bold text-gradient">92%</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <p className="text-xs text-muted-foreground">{content.outputs}</p>
                <p className="mt-2 text-3xl font-bold text-gradient">6</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
