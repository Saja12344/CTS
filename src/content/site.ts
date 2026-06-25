export type Language = "ar" | "en";

export const siteContent = {
  ar: {
    seo: {
      title: "Core Tech Solutions | حلول تقنية للشركات",
      description:
        "Core Tech Solutions شركة حلول تقنية تبني مواقع احترافية، تطبيقات جوال، لوحات تحكم، تكاملات وأتمتة تساعد الشركات على النمو.",
    },
    nav: {
      home: "الرئيسية",
      services: "الحلول",
      pricing: "الباقات",
      whyUs: "لماذا نحن",
      contact: "ابدأ مشروعك",
      menuLabel: "فتح القائمة",
      language: "English",
    },
    hero: {
      badge: "شريك تقني لنمو الشركات",
      title: "نبني حلول تقنية",
      titleAccent: "تخدم أهداف عملك",
      description:
        "من واجهات الشركات إلى التطبيقات ولوحات التحكم والربط الآلي، نصمم ونطور منتجات رقمية واضحة، موثوقة، وقابلة للتوسع.",
      proofPoints: ["تحليل احتياج قبل التنفيذ", "تجربة مستخدم مرتبطة بالتحويل", "تسليم قابل للتوسع والدعم"],
      primaryCta: "احجز استشارة",
      secondaryCta: "استعرض الحلول",
      metrics: [
        { value: "4+", label: "مسارات حلول" },
        { value: "30 يوم", label: "إطلاق أول نسخة" },
        { value: "24/7", label: "قنوات تواصل" },
      ],
      consoleLabel: "CTS Operating Console",
      consoleTitle: "خارطة إطلاق الحل التقني",
      phases: ["اكتشاف المتطلبات", "تصميم تجربة العميل", "بناء المنتج والربط"],
      readiness: "مؤشر الجاهزية",
      outputs: "المخرجات",
    },
    services: {
      eyebrow: "حلول تقنية متكاملة",
      title: "كل ما تحتاجه شركتك رقمياً",
      description:
        "نربط التصميم، التطوير، والتحسين في مسار واحد يبدأ من فهم الهدف التجاري وينتهي بإطلاق منتج قابل للنمو.",
      items: [
        {
          title: "مواقع ومنصات شركات",
          description: "واجهات احترافية تعرّف بخدماتك، تقود العميل للقرار، وتعمل بسلاسة على كل الأجهزة.",
          tags: ["Landing Pages", "Corporate Websites", "SEO Ready"],
        },
        {
          title: "تطبيقات جوال",
          description: "تطبيقات iOS وتجارب موبايل مخصصة للعمليات، الطلبات، الحجوزات، وخدمة العملاء.",
          tags: ["iOS", "UX Flow", "App Launch"],
        },
        {
          title: "أنظمة ولوحات تحكم",
          description: "حلول داخلية تساعد فريقك على إدارة البيانات، العملاء، الطلبات، والتقارير من مكان واحد.",
          tags: ["Dashboards", "CRM", "Admin Panels"],
        },
        {
          title: "تكاملات وأتمتة",
          description: "ربط واتساب، الدفع، النماذج، قواعد البيانات، وأدوات العمل لتقليل التكرار اليدوي.",
          tags: ["APIs", "Automation", "Integrations"],
        },
        {
          title: "تحسين الأداء والتحويل",
          description: "تحسين سرعة الموقع، وضوح الرحلة، وقياس النتائج حتى تتحول الواجهة لأداة مبيعات.",
          tags: ["Performance", "Conversion", "Analytics"],
        },
        {
          title: "دعم وتشغيل",
          description: "متابعة بعد الإطلاق، تحسينات دورية، ومعالجة المشاكل التقنية لضمان استمرارية الخدمة.",
          tags: ["Care Plans", "Monitoring", "Updates"],
        },
      ],
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
          features: ["تحليل رسالة الشركة", "تصميم صفحة أو موقع تعريفي", "تهيئة أساسية لمحركات البحث", "ربط واتساب أو نموذج تواصل"],
          popular: false,
        },
        {
          name: "منتج مخصص",
          subtitle: "للشركات التي تحتاج منصة أو تجربة متكاملة",
          price: "يبدأ من 4,500 ريال",
          badge: "الأكثر مناسبة للشركات",
          features: ["تخطيط تجربة المستخدم", "واجهات مخصصة متعددة الصفحات", "تطوير React متجاوب", "تكاملات أساسية ولوحة إدارة"],
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
    why: {
      eyebrow: "لماذا CTS؟",
      title: "لأن المشروع التقني الناجح يبدأ بقرار تجاري صحيح",
      description:
        "نشتغل معك كشريك يفهم الهدف، يرتب الأولويات، ثم يحولها إلى منتج رقمي متين وواضح للمستخدم.",
      standardTitle: "معيارنا في كل مشروع",
      standardDescription: "وضوح، جودة، وقابلية تشغيل بعد الإطلاق.",
      steps: ["اكتشاف", "تنفيذ", "تحسين"],
      reasons: [
        { title: "نطاق واضح", description: "نبدأ بتحويل الفكرة إلى متطلبات ومخرجات قابلة للقياس قبل التصميم أو البرمجة." },
        { title: "تنفيذ قابل للتوسع", description: "نبني الواجهة والمنطق بطريقة تسمح بإضافة خدمات وخصائص لاحقاً بدون إعادة بناء كاملة." },
        { title: "تركيز على النتائج", description: "كل صفحة أو ميزة ترتبط بهدف: طلب استشارة، تقليل وقت، تحسين تجربة، أو زيادة تحويل." },
        { title: "دعم بعد الإطلاق", description: "نرافقك بعد التسليم لمعالجة الملاحظات، تحسين الأداء، وتطوير الإصدارات القادمة." },
      ],
      highlightTitle: "نحوّل التقنية إلى أصل تجاري",
      highlightDescription:
        "الهدف ليس إطلاق واجهة جميلة فقط، بل بناء قناة بيع، خدمة، أو تشغيل تساعد شركتك على النمو بثقة.",
    },
    contact: {
      eyebrow: "ابدأ من هنا",
      title: "خلنا نفهم مشروعك ونقترح المسار الأنسب",
      description: "اكتب لنا الهدف والتحدي الحالي، ونرد عليك بتصور أولي للنطاق والخطوات القادمة.",
      cardTitle: "ماذا يحدث بعد الإرسال؟",
      cardDescription:
        "نراجع احتياجك، نحدد أفضل مسار تقني، ثم نشاركك تصوراً مختصراً للتكلفة والمدة والمخرجات.",
      steps: ["رد أولي عبر واتساب", "تحديد النطاق والأولويات", "عرض تنفيذ واضح قبل البدء"],
      namePlaceholder: "اسمك أو اسم الشركة",
      servicePlaceholder: "نوع الحل المطلوب",
      messagePlaceholder: "صف هدف المشروع، الجمهور، وأي ميزة مهمة بالنسبة لك",
      options: ["موقع شركة", "تطبيق جوال", "لوحة تحكم أو نظام داخلي", "تكاملات وأتمتة", "استشارة تقنية"],
      submit: "إرسال عبر واتساب",
      whatsappIntro: "مرحباً Core Tech Solutions",
      nameLabel: "الاسم",
      serviceLabel: "الخدمة المطلوبة",
      messageLabel: "تفاصيل المشروع",
    },
    footer: {
      tagline: "حلول تقنية مصممة لتخدم نمو الشركات وتشغيلها.",
      services: "الحلول",
      pricing: "الباقات",
      contact: "تواصل معنا",
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    seo: {
      title: "Core Tech Solutions | Technology Solutions for Businesses",
      description:
        "Core Tech Solutions builds professional websites, mobile apps, dashboards, integrations, and automation solutions that help businesses grow.",
    },
    nav: {
      home: "Home",
      services: "Solutions",
      pricing: "Packages",
      whyUs: "Why Us",
      contact: "Start Your Project",
      menuLabel: "Open menu",
      language: "العربية",
    },
    hero: {
      badge: "Technology partner for business growth",
      title: "We build technology solutions",
      titleAccent: "that serve your business goals",
      description:
        "From corporate websites to apps, dashboards, and integrations, we design and develop clear, reliable, scalable digital products.",
      proofPoints: ["Discovery before execution", "Conversion-focused user experience", "Scalable delivery and support"],
      primaryCta: "Book a Consultation",
      secondaryCta: "Explore Solutions",
      metrics: [
        { value: "4+", label: "Solution tracks" },
        { value: "30 days", label: "First launch" },
        { value: "24/7", label: "Contact channels" },
      ],
      consoleLabel: "CTS Operating Console",
      consoleTitle: "Technology launch roadmap",
      phases: ["Requirement discovery", "Customer experience design", "Product build and integrations"],
      readiness: "Readiness score",
      outputs: "Outputs",
    },
    services: {
      eyebrow: "Integrated technology solutions",
      title: "Everything your business needs digitally",
      description:
        "We connect design, development, and optimization in one path that starts with business goals and ends with a scalable product.",
      items: [
        {
          title: "Corporate Websites & Platforms",
          description: "Professional interfaces that explain your services, guide customers to action, and work smoothly on every device.",
          tags: ["Landing Pages", "Corporate Websites", "SEO Ready"],
        },
        {
          title: "Mobile Applications",
          description: "Custom iOS and mobile experiences for operations, orders, bookings, and customer service.",
          tags: ["iOS", "UX Flow", "App Launch"],
        },
        {
          title: "Systems & Dashboards",
          description: "Internal tools that help your team manage data, customers, orders, and reporting from one place.",
          tags: ["Dashboards", "CRM", "Admin Panels"],
        },
        {
          title: "Integrations & Automation",
          description: "WhatsApp, payments, forms, databases, and workflow tools connected to reduce manual work.",
          tags: ["APIs", "Automation", "Integrations"],
        },
        {
          title: "Performance & Conversion",
          description: "Speed, journey clarity, and measurement improvements that turn your interface into a sales asset.",
          tags: ["Performance", "Conversion", "Analytics"],
        },
        {
          title: "Support & Operations",
          description: "Post-launch support, recurring improvements, and technical fixes to keep your service reliable.",
          tags: ["Care Plans", "Monitoring", "Updates"],
        },
      ],
    },
    pricing: {
      eyebrow: "Work packages",
      title: "Clear packages based on project goals",
      description:
        "Choose the closest package to your need. If your project has a different scope, we prepare a custom proposal after consultation.",
      popular: "Best for growth",
      cta: "Discuss Project",
      customTitle: "Need a different scope?",
      customDescription: "We can prepare a custom proposal for mobile apps, internal systems, or integrations with your business tools.",
      customCta: "Request Custom Proposal",
      packages: [
        {
          name: "Digital Presence",
          subtitle: "For businesses that need a polished launch-ready presence",
          price: "Starts from SAR 1,500",
          badge: "Fast launch",
          features: ["Business messaging analysis", "Landing page or corporate website", "Basic search engine setup", "WhatsApp or contact form integration"],
          popular: false,
        },
        {
          name: "Custom Product",
          subtitle: "For companies that need a platform or complete experience",
          price: "Starts from SAR 4,500",
          badge: "Best fit for companies",
          features: ["User experience planning", "Custom multi-page interfaces", "Responsive React development", "Basic integrations and admin panel"],
          popular: true,
        },
        {
          name: "Operational Solution",
          subtitle: "For systems and integrations that serve internal operations",
          price: "Scoped after consultation",
          badge: "Consultation before pricing",
          features: ["Business process analysis", "Dashboards and reports", "APIs and automation", "Launch support and improvements"],
          popular: false,
        },
      ],
    },
    why: {
      eyebrow: "Why CTS?",
      title: "Successful technology projects start with the right business decision",
      description:
        "We work as a partner who understands the goal, prioritizes the work, then turns it into a solid and clear digital product.",
      standardTitle: "Our standard in every project",
      standardDescription: "Clarity, quality, and operational readiness after launch.",
      steps: ["Discover", "Build", "Improve"],
      reasons: [
        { title: "Clear scope", description: "We turn the idea into measurable requirements and deliverables before design or development." },
        { title: "Scalable execution", description: "We build interfaces and logic in a way that allows future features without rebuilding from scratch." },
        { title: "Results focused", description: "Every page or feature supports a goal: consultation requests, time saving, better experience, or conversion." },
        { title: "Post-launch support", description: "We stay with you after delivery to handle feedback, improve performance, and plan future releases." },
      ],
      highlightTitle: "We turn technology into a business asset",
      highlightDescription:
        "The goal is not only a beautiful interface, but a sales, service, or operations channel that helps your company grow confidently.",
    },
    contact: {
      eyebrow: "Start here",
      title: "Tell us about your project and we will suggest the right path",
      description: "Share the goal and current challenge, and we will respond with an initial view of scope and next steps.",
      cardTitle: "What happens after sending?",
      cardDescription:
        "We review your need, identify the best technical path, then share a short view of cost, timeline, and deliverables.",
      steps: ["Initial WhatsApp reply", "Scope and priorities alignment", "Clear proposal before starting"],
      namePlaceholder: "Your name or company name",
      servicePlaceholder: "Required solution",
      messagePlaceholder: "Describe the goal, audience, and any key feature",
      options: ["Corporate website", "Mobile app", "Dashboard or internal system", "Integrations and automation", "Technical consultation"],
      submit: "Send via WhatsApp",
      whatsappIntro: "Hello Core Tech Solutions",
      nameLabel: "Name",
      serviceLabel: "Required service",
      messageLabel: "Project details",
    },
    footer: {
      tagline: "Technology solutions designed to support business growth and operations.",
      services: "Solutions",
      pricing: "Packages",
      contact: "Contact",
      rights: "All rights reserved",
    },
  },
} as const;
