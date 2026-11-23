import type { Language } from "@/content/site";

export type ServiceOffer = {
  index: string;
  title: string;
  description: string;
  deliverables: readonly string[];
  duration: string;
  price: string;
};

export const serviceCatalog: Record<
  Language,
  { note: string; items: readonly ServiceOffer[] }
> = {
  ar: {
    note: "الأسعار تقديرية وتختلف حسب نطاق المشروع. السعر النهائي في عرض مكتوب بعد المكالمة الأولى.",
    items: [
      {
        index: "01",
        title: "منتجات رقمية",
        description: "استراتيجية المنتج، تصميم تجربة وواجهة المستخدم، وتطوير المنتج الرقمي من البداية للنهاية.",
        deliverables: ["ورشة تحديد النطاق", "تصميم UI/UX قابل للتجربة", "نسخة أولى MVP منشورة"],
        duration: "1–3 أسابيع",
        price: "يبدأ من 1,500 ر.س",
      },
      {
        index: "02",
        title: "أنظمة الأعمال والأتمتة",
        description: "أدوات تشغيل مخصصة، أتمتة سير العمل، وربط عمليات الأعمال.",
        deliverables: ["لوحات تحكم وتقارير", "أتمتة سير العمل", "ربط الأنظمة عبر API"],
        duration: "2–4 أسابيع",
        price: "يبدأ من 2,500 ر.س",
      },
      {
        index: "03",
        title: "ويب وجوال",
        description: "مواقع شركات ومنصات، وتطبيقات مبنية حول مستخدمين حقيقيين.",
        deliverables: ["مواقع شركات ومنصات", "تطبيقات iOS", "تحسين الأداء والظهور"],
        duration: "المواقع 2–4 أسابيع · التطبيقات 4–8 أسابيع",
        price: "المواقع تبدأ من 3,000 ر.س · التطبيقات تبدأ من 6,000 ر.س",
      },
      {
        index: "04",
        title: "حلول بالذكاء الاصطناعي",
        description: "قدرات عملية مدمجة في المنتج حيث تخلق قيمة حقيقية.",
        deliverables: ["مساعد ذكي على بياناتك", "تصنيف وتلخيص المستندات", "تجربة مبدئية خلال أسبوعين"],
        duration: "2–6 أسابيع",
        price: "يبدأ من 3,500 ر.س",
      },
    ],
  },
  en: {
    note: "Prices are estimates and vary with scope. The final price is a written proposal after the first call.",
    items: [
      {
        index: "01",
        title: "Digital Products",
        description: "Product strategy, UX/UI design, and end-to-end digital product development.",
        deliverables: ["Scope workshop", "Testable UI/UX design", "A published MVP"],
        duration: "1–3 weeks",
        price: "From SAR 1,500",
      },
      {
        index: "02",
        title: "Business Systems and Automation",
        description: "Custom operational tools, workflow automation, and connected business processes.",
        deliverables: ["Dashboards and reports", "Workflow automation", "API integrations"],
        duration: "2–4 weeks",
        price: "From SAR 2,500",
      },
      {
        index: "03",
        title: "Web and Mobile",
        description: "Company sites, platforms, and iOS apps shaped around real users.",
        deliverables: ["Company sites and platforms", "iOS apps", "Performance and visibility"],
        duration: "Sites 2–4 weeks · Apps 4–8 weeks",
        price: "Sites from SAR 3,000 · Apps from SAR 6,000",
      },
      {
        index: "04",
        title: "AI Solutions",
        description: "Practical AI placed inside the product where it creates real value.",
        deliverables: ["An assistant on your data", "Document sorting and summaries", "A trial within two weeks"],
        duration: "2–6 weeks",
        price: "From SAR 3,500",
      },
    ],
  },
};
