import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calculator, ChevronLeft, ChevronRight } from "lucide-react";

const projectTypes = [
  { id: "web-basic", label: "موقع أساسي", price: 500, emoji: "🌐" },
  { id: "web-medium", label: "موقع متوسط", price: 1200, emoji: "🌐" },
  { id: "web-advanced", label: "موقع متقدم", price: 3000, emoji: "🌐" },
  { id: "ios", label: "تطبيق iOS", price: 5000, emoji: "📱" },
  { id: "react", label: "تطبيق React", price: 4000, emoji: "⚛️" },
];

const addOns = [
  { id: "dashboard", label: "لوحة تحكم", price: 800, emoji: "📊" },
  { id: "ecommerce", label: "متجر إلكتروني", price: 1500, emoji: "🛒" },
  { id: "whatsapp", label: "ربط واتساب", price: 300, emoji: "💬" },
  { id: "extra-pages", label: "صفحات إضافية (5)", price: 400, emoji: "📄" },
];

const PriceCalculator = () => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const totalPrice = useMemo(() => {
    const base = projectTypes.find((t) => t.id === selectedType)?.price ?? 0;
    const extras = addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    return base + extras;
  }, [selectedType, selectedAddOns]);

  const selectedTypeObj = projectTypes.find((t) => t.id === selectedType);

  const whatsappMessage = useMemo(() => {
    if (!selectedTypeObj) return "";
    const addOnLabels = addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .map((a) => a.label)
      .join("، ");
    let msg = `مرحباً، أبي أستفسر عن:\n\nنوع المشروع: ${selectedTypeObj.label}\n`;
    if (addOnLabels) msg += `إضافات: ${addOnLabels}\n`;
    msg += `\nالسعر التقديري: يبدأ من ${totalPrice.toLocaleString("ar-SA")} ريال`;
    return encodeURIComponent(msg);
  }, [selectedTypeObj, selectedAddOns, totalPrice]);

  return (
    <section id="calculator" className="py-24 gradient-navy">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator size={16} />
            حاسبة الأسعار
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">احسب تكلفة مشروعك</h2>
          <p className="text-muted-foreground text-lg">اختر نوع المشروع والإضافات وشوف السعر التقديري</p>
        </motion.div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <button
                onClick={() => s === 1 || (s === 2 && selectedType) || (s === 3 && selectedType) ? setStep(s) : null}
                className={`w-9 h-9 rounded-full text-sm font-bold flex items-center justify-center transition-all duration-300 ${
                  step === s
                    ? "gradient-electric text-foreground glow-electric"
                    : step > s
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {step > s ? <Check size={16} /> : s}
              </button>
              {s < 3 && (
                <div className={`w-12 h-0.5 transition-colors duration-300 ${step > s ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        <motion.div
          className="bg-card border border-border rounded-2xl p-6 md:p-8"
          layout
        >
          <AnimatePresence mode="wait">
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-lg font-bold mb-6">١. اختر نوع المشروع</h3>
                <div className="grid gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => { setSelectedType(type.id); setStep(2); }}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 text-right ${
                        selectedType === type.id
                          ? "border-primary bg-primary/10 glow-electric"
                          : "border-border hover:border-primary/40 hover:bg-secondary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{type.emoji}</span>
                        <span className="font-medium">{type.label}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        يبدأ من <span className="text-gradient font-bold">{type.price.toLocaleString("ar-SA")}</span> ريال
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-lg font-bold mb-6">٢. اختر الإضافات <span className="text-muted-foreground text-sm font-normal">(اختياري)</span></h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {addOns.map((addon) => {
                    const active = selectedAddOns.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 text-right ${
                          active
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/40 hover:bg-secondary/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {active ? (
                            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                              <Check size={14} className="text-primary-foreground" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded border border-border" />
                          )}
                          <span className="text-lg">{addon.emoji}</span>
                          <span className="font-medium text-sm">{addon.label}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">+{addon.price.toLocaleString("ar-SA")} ريال</span>
                      </button>
                    );
                  })}
                </div>
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChevronRight size={16} /> رجوع
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="mr-auto flex items-center gap-1 gradient-electric text-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    التالي <ChevronLeft size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <h3 className="text-lg font-bold mb-6">٣. ملخص التكلفة التقديرية</h3>

                <div className="bg-secondary/50 rounded-xl p-6 mb-6 space-y-3 text-right">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">نوع المشروع</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{selectedTypeObj?.label}</span>
                      <span className="text-xs text-muted-foreground">{selectedTypeObj?.price.toLocaleString("ar-SA")} ريال</span>
                    </div>
                  </div>
                  {addOns
                    .filter((a) => selectedAddOns.includes(a.id))
                    .map((a) => (
                      <div key={a.id} className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">إضافة</span>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{a.label}</span>
                          <span className="text-xs text-muted-foreground">+{a.price.toLocaleString("ar-SA")} ريال</span>
                        </div>
                      </div>
                    ))}
                  <div className="border-t border-border pt-3 flex justify-between items-center">
                    <span className="font-bold">الإجمالي يبدأ من</span>
                    <motion.span
                      key={totalPrice}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-2xl font-bold text-gradient"
                    >
                      {totalPrice.toLocaleString("ar-SA")} ريال
                    </motion.span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/966500000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gradient-electric text-foreground px-8 py-4 rounded-lg font-semibold glow-electric hover:opacity-90 transition-opacity"
                >
                  تواصل عبر واتساب 💬
                </a>

                <div className="mt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← تعديل الاختيارات
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Live price preview */}
        {selectedType && step < 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center"
          >
            <span className="text-muted-foreground text-sm">الإجمالي التقديري: </span>
            <motion.span
              key={totalPrice}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="text-gradient font-bold"
            >
              يبدأ من {totalPrice.toLocaleString("ar-SA")} ريال
            </motion.span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PriceCalculator;
