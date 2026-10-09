export type Language = "ar" | "en";

export const siteContent = {
  ar: {
    seo: {
      title: "Core Tech Solutions | شركة تقنية",
      description:
        "Core Tech Solutions شركة تقنية سعودية تحوّل الأفكار وتحديات التشغيل إلى منتجات وأنظمة رقمية عملية.",
    },
    nav: {
      build: "ماذا نبني",
      approach: "المنهجية",
      about: "من نحن",
      contact: "تواصل",
      cta: "ناقش مشروعك",
      menuLabel: "القائمة",
      language: "English",
    },
    hero: {
      label: "CORE TECH SOLUTIONS",
      headline: "نحوّل الأفكار إلى منتجات رقمية.",
      description: "نحدد المشكلة الصحيحة، ثم نبني الحل الرقمي المناسب.",
      primaryCta: "ناقش مشروعك",
    },
    build: {
      label: "ماذا نبني",
      items: [
        { index: "01", title: "منتجات رقمية", description: "مواقع وتطبيقات وتجارب تحل مشكلة حقيقية." },
        { index: "02", title: "أنظمة الأعمال", description: "مسارات وتكاملات وأنظمة داخلية أوضح." },
        { index: "03", title: "خدمات تقنية", description: "تقييم، تحول رقمي، وتطوير حسب السياق." },
      ],
    },
    approach: {
      label: "المنهجية",
      steps: [
        { number: "01", title: "Understand" },
        { number: "02", title: "Evaluate" },
        { number: "03", title: "Recommend" },
        { number: "04", title: "Build" },
      ],
    },
    differentiators: {
      statement: "تقنية أفضل تبدأ بقرارات أفضل.",
      support: "احتياج العمل أولاً. السياق قبل الاتجاه. غرض واضح لكل حل.",
    },
    about: {
      title: "Core Tech Solutions",
      body: "شركة تقنية تساعد المؤسسات على بناء وتحسين وربط عملياتها الرقمية — بوضوح وتنفيذ عملي.",
    },
    contact: {
      title: "لنبني ما يهم.",
      description: "صف ما تحاول حله أو بناءه.",
      primaryCta: "ابدأ محادثة",
      nameLabel: "الاسم",
      serviceLabel: "نوع الحل",
      messageLabel: "التفاصيل",
      namePlaceholder: "الاسم",
      servicePlaceholder: "نوع الحل",
      messagePlaceholder: "التفاصيل",
      options: ["منتج رقمي", "نظام أعمال", "خدمات تقنية", "تحسين", "استشارة"],
      submit: "إرسال عبر واتساب",
      whatsappIntro: "مرحباً Core Tech Solutions",
    },
    footer: {
      tagline: "Built for what's next.",
      build: "ماذا نبني",
      approach: "المنهجية",
      about: "من نحن",
      contact: "تواصل",
      linkedin: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/",
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    seo: {
      title: "Core Tech Solutions | Technology Company",
      description:
        "Core Tech Solutions is a Saudi technology company that turns ideas and operational challenges into practical digital products and systems.",
    },
    nav: {
      build: "What We Build",
      approach: "Approach",
      about: "About",
      contact: "Contact",
      cta: "Discuss Your Project",
      menuLabel: "Menu",
      language: "العربية",
    },
    hero: {
      label: "CORE TECH SOLUTIONS",
      headline: "We Turn Ideas Into Digital Products.",
      description: "We find the right problem to solve, then build the right digital solution.",
      primaryCta: "Discuss Your Project",
    },
    build: {
      label: "What We Build",
      items: [
        { index: "01", title: "Digital Products", description: "Sites, apps, and experiences that solve real problems." },
        { index: "02", title: "Business Systems", description: "Workflows, integrations, and clearer internal systems." },
        { index: "03", title: "Technology Services", description: "Assessment, transformation, and context-led development." },
      ],
    },
    approach: {
      label: "Our Approach",
      steps: [
        { number: "01", title: "Understand" },
        { number: "02", title: "Evaluate" },
        { number: "03", title: "Recommend" },
        { number: "04", title: "Build" },
      ],
    },
    differentiators: {
      statement: "Better technology starts with better decisions.",
      support: "Business need first. Context over trends. Purpose in every solution.",
    },
    about: {
      title: "Core Tech Solutions",
      body: "A technology company helping organizations build, improve, and connect digital operations — with clarity and practical execution.",
    },
    contact: {
      title: "Let's Build What Matters.",
      description: "Tell us what you're trying to solve or build.",
      primaryCta: "Start a Conversation",
      nameLabel: "Name",
      serviceLabel: "Type of solution",
      messageLabel: "Details",
      namePlaceholder: "Name",
      servicePlaceholder: "Type of solution",
      messagePlaceholder: "Details",
      options: ["Digital product", "Business system", "Technology services", "Optimization", "Consultation"],
      submit: "Send via WhatsApp",
      whatsappIntro: "Hello Core Tech Solutions",
    },
    footer: {
      tagline: "Built for what's next.",
      build: "What We Build",
      approach: "Approach",
      about: "About",
      contact: "Contact",
      linkedin: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/",
      rights: "All rights reserved",
    },
  },
} as const;
