import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const packages = [
  {
    name: "أساسي",
    oldPrice: "800",
    price: "500",
    discount: "وفّر 300 ريال",
    features: ["قالب جاهز", "تعديل بيانات", "تصميم متجاوب"],
    popular: false,
  },
  {
    name: "متوسط",
    oldPrice: "2,000",
    price: "1,200",
    discount: "وفّر 800 ريال",
    features: ["تصميم شبه مخصص", "5 صفحات", "تحسين محركات البحث"],
    popular: true,
  },
  {
    name: "متقدم",
    oldPrice: "5,000",
    price: "3,000",
    discount: "عرض محدود",
    features: ["تصميم كامل مخصص", "منطق متقدم", "لوحة تحكم"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 gradient-navy">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">باقات المواقع</h2>
          <p className="text-muted-foreground text-lg">اختر الباقة المناسبة لمشروعك</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-xl p-8 card-hover relative ${
                pkg.popular
                  ? "bg-card border-2 border-primary glow-electric"
                  : "bg-card border border-border"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 right-1/2 translate-x-1/2 gradient-electric text-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  🔥 الأكثر طلباً
                </span>
              )}
              <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
              <div className="mb-2">
                <span className="text-muted-foreground text-sm line-through">{pkg.oldPrice} ريال</span>
              </div>
              <div className="mb-3">
                <span className="text-3xl font-bold text-gradient">{pkg.price}</span>
                <span className="text-muted-foreground text-sm mr-1">ريال</span>
              </div>
              <Badge className="mb-6 bg-destructive/20 text-destructive border-destructive/30 hover:bg-destructive/30">
                🏷️ {pkg.discount}
              </Badge>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground">
                    <Check size={16} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  pkg.popular
                    ? "gradient-electric text-foreground glow-electric hover:opacity-90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                ابدأ الآن
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-card border border-border rounded-xl p-8"
        >
          <h3 className="text-xl font-bold mb-2">📱 تطبيقات الجوال</h3>
          <p className="text-muted-foreground mb-4">تواصل للحصول على سعر مخصص</p>
          <a
            href="#contact"
            className="inline-block gradient-electric text-foreground px-8 py-3 rounded-lg font-semibold glow-electric hover:opacity-90 transition-opacity"
          >
            تواصل معنا
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
