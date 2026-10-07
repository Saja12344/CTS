export type Language = "ar" | "en";

export const siteContent = {
  ar: {
    seo: {
      title: "Core Tech Solutions | شركة تقنية B2B",
      description:
        "Core Tech Solutions شركة تقنية B2B تبني منتجات رقمية، أنظمة داخلية، تكاملات، وتحسيناً للعمليات الرقمية — بتقنية عملية ومنهجية واضحة.",
    },
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      work: "الأعمال",
      about: "من نحن",
      contact: "تواصل",
      startProject: "ابدأ مشروعاً",
      menuLabel: "فتح القائمة",
      language: "English",
    },
    hero: {
      headline: "نبني ما تحتاجه شركتك في خطوتها التالية.",
      description:
        "من المنتجات الرقمية والأنظمة الداخلية إلى الأتمتة والتكاملات — نحوّل الاحتياج إلى تقنية قابلة للتطبيق.",
      primaryCta: "ابدأ مشروعاً",
      secondaryCta: "استعرض أعمالنا",
    },
    services: {
      eyebrow: "ما نبنيه",
      title: "تقنية مصممة لطريقة عملك.",
      items: [
        {
          number: "01",
          title: "منتجات رقمية",
          description: "مواقع وتطبيقات ومنصات موجهة للعملاء — مبنية على احتياج حقيقي.",
        },
        {
          number: "02",
          title: "أنظمة الأعمال",
          description: "أدوات داخلية ولوحات تحكم أنظمة أوضح وأكثر كفاءة.",
        },
        {
          number: "03",
          title: "أتمتة وتكاملات",
          description: "ربط الأدوات والبيانات ومسارات العمل لتقليل التكرار اليدوي.",
        },
        {
          number: "04",
          title: "تحسين رقمي",
          description: "تدقيق وتحسين منتجات ومواقع ومسارات عمل قائمة.",
        },
      ],
    },
    problems: {
      eyebrow: "احتياجات العمل",
      title: "عندما تصبح التقنية عنق زجاجة، نعالجها.",
      items: [
        { number: "01", text: "حضورك الرقمي لم يعد يعكس شركتك كما ينبغي." },
        { number: "02", text: "جزء كبير من التشغيل ما زال يعتمد على عمل يدوي." },
        { number: "03", text: "لديك فكرة منتج وتحتاج التقنية لتحويلها إلى واقع." },
        { number: "04", text: "منتجك الرقمي الحالي يحتاج أداءً وتجربة أفضل." },
      ],
    },
    work: {
      eyebrow: "أعمال مختارة",
      title: "Selected Work",
      labels: {
        challenge: "التحدي",
        solution: "الحل",
        outcome: "النتيجة",
      },
      projects: [
        {
          name: "Core Tech Solutions — منصة الشركة",
          summary: "منصة تعريفية ثنائية اللغة لعرض قدرات Core Tech ومسار التواصل مع العملاء.",
          challenge: "توحيد رسالة الشركة التقنية B2B بلغة واضحة بالعربية والإنجليزية.",
          solution: "موقع editorial سريع الاستجابة يعرض القدرات، المنهجية، ونموذج تواصل مباشر.",
          outcome: "منصة منشورة وجاهزة للاستخدام كقناة حضور رقمي للشركة.",
          image: "/placeholder.svg",
        },
      ],
    },
    process: {
      eyebrow: "المنهجية",
      title: "من أول محادثة إلى منتج يعمل.",
      steps: [
        { number: "01", title: "Discover", subtitle: "فهم العمل، المستخدم، والمشكلة." },
        { number: "02", title: "Define", subtitle: "تحويل المتطلبات إلى اتجاه منتج وتقني واضح." },
        { number: "03", title: "Design", subtitle: "تصميم تجربة رقمية وهيكل منتج مركز." },
        { number: "04", title: "Build", subtitle: "تطوير، ربط، اختبار، وتحسين." },
        { number: "05", title: "Launch", subtitle: "إطلاق المنتج ودعم مرحلته التالية." },
      ],
    },
    why: {
      eyebrow: "لماذا Core Tech",
      title: "تقنية بدون تعقيد غير ضروري.",
      principles: [
        {
          title: "BUSINESS-FIRST",
          description: "نحل المشكلة الفعلية قبل اختيار التقنية.",
        },
        {
          title: "BUILT TO SCALE",
          description: "نصمم الحلول مع مرحلة النمو التالية في الحسبان.",
        },
        {
          title: "CLEAR FROM DAY ONE",
          description: "نطاق محدد، تواصل مباشر، وتسليم عملي.",
        },
      ],
    },
    audience: {
      eyebrow: "من نعمل معهم",
      items: ["شركات في مرحلة نمو", "شركات خدمات", "جهات تُحدّث تشغيلها الرقمي"],
    },
    about: {
      eyebrow: "من نحن",
      title: "Core Tech Solutions",
      lead: "Core Tech Solutions شركة تقنية B2B تساعد الشركات على بناء وتحسين وربط عملياتها الرقمية.",
      capabilities: ["منتجات رقمية", "أنظمة داخلية", "أتمتة", "تكاملات", "تحسين"],
    },
    contact: {
      eyebrow: "ابدأ",
      title: "هل لديك شيء يستحق البناء؟",
      description: "أخبرنا بما تريد بناءه أو تحسينه أو أتمتته.",
      whatsappNote: "أو تواصل مباشرة عبر واتساب بعد إرسال النموذج.",
      namePlaceholder: "الاسم",
      servicePlaceholder: "نوع الحل",
      messagePlaceholder: "التفاصيل",
      options: [
        "منتج رقمي",
        "نظام داخلي",
        "أتمتة وتكاملات",
        "تحسين منتج حالي",
        "استشارة",
      ],
      submit: "إرسال عبر واتساب",
      whatsappIntro: "مرحباً Core Tech Solutions",
      nameLabel: "الاسم",
      serviceLabel: "نوع الحل",
      messageLabel: "التفاصيل",
    },
    footer: {
      tagline: "حلول تقنية B2B — مبنية لما يلي.",
      services: "الخدمات",
      work: "الأعمال",
      about: "من نحن",
      contact: "تواصل",
      linkedin: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/",
      rights: "جميع الحقوق محفوظة",
    },
    pricing: {
      eyebrow: "باقات العمل",
      title: "باقات واضحة حسب هدف المشروع",
      description:
        "اختر الباقة الأقرب لاحتياجك، وإذا كان مشروعك مختلفاً نجهز لك عرضاً مخصصاً بعد الاستشارة.",
      popular: "الأنسب للنمو",
      cta: "ناقش المشروع",
      customTitle: "هل تحتاج نطاقاً مختلفاً؟",
      customDescription: "نقدر نبني عرضاً مخصصاً لتطبيقات الجوال، الأنظمة الداخلية، أو الربط مع أدوات شركتك.",
      customCta: "اطلب عرضاً مخصصاً",
      packages: [
        {
          name: "حضور رقمي",
          subtitle: "لمن يحتاج واجهة شركة جاهزة للإطلاق",
          price: "يبدأ من 1,500 ريال",
          badge: "إطلاق سريع",
          features: [
            "تحليل رسالة الشركة",
            "تصميم صفحة أو موقع تعريفي",
            "تهيئة أساسية لمحركات البحث",
            "ربط واتساب أو نموذج تواصل",
          ],
          popular: false,
        },
        {
          name: "منتج مخصص",
          subtitle: "للشركات التي تحتاج منصة أو تجربة متكاملة",
          price: "يبدأ من 4,500 ريال",
          badge: "الأكثر مناسبة للشركات",
          features: [
            "تخطيط تجربة المستخدم",
            "واجهات مخصصة متعددة الصفحات",
            "تطوير React متجاوب",
            "تكاملات أساسية ولوحة إدارة",
          ],
          popular: true,
        },
        {
          name: "حل تشغيلي",
          subtitle: "للأنظمة والتكاملات التي تخدم عمليات داخلية",
          price: "حسب النطاق",
          badge: "استشارة قبل التسعير",
          features: ["تحليل عمليات الشركة", "لوحات تحكم وتقارير", "ربط APIs وأتمتة", "دعم إطلاق وتحسينات"],
          popular: false,
        },
      ],
    },
  },
  en: {
    seo: {
      title: "Core Tech Solutions | B2B Technology Company",
      description:
        "Core Tech Solutions is a B2B technology company building digital products, internal systems, integrations, and optimization — with practical engineering and a clear process.",
    },
    nav: {
      home: "Home",
      services: "Services",
      work: "Work",
      about: "About",
      contact: "Contact",
      startProject: "Start a Project",
      menuLabel: "Open menu",
      language: "العربية",
    },
    hero: {
      headline: "We build what your business needs next.",
      description:
        "From digital products and internal systems to automation and integrations, we turn business needs into practical technology.",
      primaryCta: "Start a Project",
      secondaryCta: "View Our Work",
    },
    services: {
      eyebrow: "What we build",
      title: "Technology built for the way you work.",
      items: [
        {
          number: "01",
          title: "Digital Products",
          description: "Websites, applications, and customer-facing platforms designed around real needs.",
        },
        {
          number: "02",
          title: "Business Systems",
          description: "Internal tools, dashboards, and systems that make operations clearer and more efficient.",
        },
        {
          number: "03",
          title: "Automation & Integrations",
          description: "Connect tools, data, and workflows to reduce repetitive manual work.",
        },
        {
          number: "04",
          title: "Digital Optimization",
          description: "Audit and improve existing digital products, websites, and workflows.",
        },
      ],
    },
    problems: {
      eyebrow: "Business needs",
      title: "When technology becomes a bottleneck, we fix it.",
      items: [
        { number: "01", text: "Your digital presence no longer reflects your business." },
        { number: "02", text: "Too much of your operation still depends on manual work." },
        { number: "03", text: "You have a product idea but need the technology to bring it to life." },
        { number: "04", text: "Your existing digital product needs to perform better." },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Selected Work",
      labels: {
        challenge: "Challenge",
        solution: "Solution",
        outcome: "Outcome",
      },
      projects: [
        {
          name: "Core Tech Solutions — Company Platform",
          summary: "Bilingual company platform presenting Core Tech capabilities and a direct contact path.",
          challenge: "Unify B2B technology positioning with clear Arabic and English messaging.",
          solution: "A fast, responsive editorial site structured around capabilities, process, and contact.",
          outcome: "Published web presence used as the company's primary digital channel.",
          image: "/placeholder.svg",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "From first conversation to working product.",
      steps: [
        { number: "01", title: "Discover", subtitle: "Understand the business, users, and problem." },
        { number: "02", title: "Define", subtitle: "Turn requirements into a clear product and technical direction." },
        { number: "03", title: "Design", subtitle: "Create a focused digital experience and product structure." },
        { number: "04", title: "Build", subtitle: "Develop, integrate, test, and refine." },
        { number: "05", title: "Launch", subtitle: "Deploy the product and support its next stage." },
      ],
    },
    why: {
      eyebrow: "Why Core Tech",
      title: "Technology without the unnecessary complexity.",
      principles: [
        {
          title: "BUSINESS-FIRST",
          description: "We solve the actual problem before choosing the technology.",
        },
        {
          title: "BUILT TO SCALE",
          description: "Solutions are designed with the next stage in mind.",
        },
        {
          title: "CLEAR FROM DAY ONE",
          description: "Defined scope, direct communication, and practical delivery.",
        },
      ],
    },
    audience: {
      eyebrow: "Who we work with",
      items: ["Growing businesses", "Service businesses", "Organizations modernizing operations"],
    },
    about: {
      eyebrow: "About",
      title: "Core Tech Solutions",
      lead: "Core Tech Solutions is a B2B technology company helping businesses build, improve, and connect their digital operations.",
      capabilities: ["Digital products", "Internal systems", "Automation", "Integrations", "Optimization"],
    },
    contact: {
      eyebrow: "Start",
      title: "Have something worth building?",
      description: "Tell us what you want to build, improve, or automate.",
      whatsappNote: "Or continue the conversation on WhatsApp after submitting the form.",
      namePlaceholder: "Name",
      servicePlaceholder: "Type of solution",
      messagePlaceholder: "Details",
      options: ["Digital product", "Internal system", "Automation & integrations", "Product optimization", "Consultation"],
      submit: "Send via WhatsApp",
      whatsappIntro: "Hello Core Tech Solutions",
      nameLabel: "Name",
      serviceLabel: "Type of solution",
      messageLabel: "Details",
    },
    footer: {
      tagline: "B2B technology solutions — built for what's next.",
      services: "Services",
      work: "Work",
      about: "About",
      contact: "Contact",
      linkedin: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/",
      rights: "All rights reserved",
    },
    pricing: {
      eyebrow: "Work packages",
      title: "Clear packages based on project goals",
      description:
        "Choose the closest package to your need. If your project has a different scope, we prepare a custom proposal after consultation.",
      popular: "Best for growth",
      cta: "Discuss Project",
      customTitle: "Need a different scope?",
      customDescription:
        "We can prepare a custom proposal for mobile apps, internal systems, or integrations with your business tools.",
      customCta: "Request Custom Proposal",
      packages: [
        {
          name: "Digital Presence",
          subtitle: "For businesses that need a polished launch-ready presence",
          price: "Starts from SAR 1,500",
          badge: "Fast launch",
          features: [
            "Business messaging analysis",
            "Landing page or corporate website",
            "Basic search engine setup",
            "WhatsApp or contact form integration",
          ],
          popular: false,
        },
        {
          name: "Custom Product",
          subtitle: "For companies that need a platform or complete experience",
          price: "Starts from SAR 4,500",
          badge: "Best fit for companies",
          features: [
            "User experience planning",
            "Custom multi-page interfaces",
            "Responsive React development",
            "Basic integrations and admin panel",
          ],
          popular: true,
        },
        {
          name: "Operational Solution",
          subtitle: "For systems and integrations that serve internal operations",
          price: "Scoped after consultation",
          badge: "Consultation before pricing",
          features: [
            "Business process analysis",
            "Dashboards and reports",
            "APIs and automation",
            "Launch support and improvements",
          ],
          popular: false,
        },
      ],
    },
  },
} as const;
