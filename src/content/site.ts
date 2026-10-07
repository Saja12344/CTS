export type Language = "ar" | "en";

export const siteContent = {
  ar: {
    seo: {
      title: "Core Tech Solutions | حلول تقنية للشركات",
      description:
        "Core Tech Solutions شريك تقني B2B يبني مواقع، منتجات رقمية، لوحات تحكم، وتكاملات مصممة حول احتياج العمل — بوضوح، منهجية، وهندسة قابلة للتوسع.",
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
      brand: "Core Tech Solutions",
      headline: "منتجات رقمية واضحة",
      headlineAccent: "مبنية حول عملك",
      description:
        "نصمم ونطور مواقع، أنظمة، وتجارب رقمية تساعد الشركات على تشغيل أعمالها وتحسينها — من التحليل إلى الإطلاق.",
      primaryCta: "ابدأ مشروعاً",
      secondaryCta: "استعرض أعمالنا",
    },
    services: {
      eyebrow: "ماذا نقدم",
      title: "حلول رقمية مبنية حول احتياج عملك",
      description: "خدمات أساسية نركز عليها مع فرق الأعمال — بدون تعقيد غير ضروري.",
      learnMore: "اعرف المزيد",
      items: [
        {
          title: "التحول الرقمي",
          description: "تحويل العمليات التقليدية إلى حلول رقمية أكثر كفاءة وقابلية للتوسع.",
          href: "#problems",
        },
        {
          title: "تطوير برمجيات مخصصة",
          description: "بناء مواقع، تطبيقات، ولوحات تحكم مصممة حسب سياق عملك ومتطلباتك.",
          href: "#work",
        },
        {
          title: "تدقيق وتحسين رقمي",
          description: "مراجعة المنتجات والمواقع الحالية وتحديد فرص تحسين الأداء والتجربة.",
          href: "#problems",
        },
        {
          title: "تكاملات وأتمتة",
          description: "ربط الأدوات، النماذج، قواعد البيانات، ومسارات العمل لتقليل العمل اليدوي.",
          href: "#process",
        },
      ],
    },
    problems: {
      eyebrow: "المشاكل التي نحلها",
      title: "التقنية يجب أن تحل مشكلة عمل — لا أن تخلق مشكلة أخرى",
      items: [
        {
          problem: "موقعك لم يعد يعكس شركتك",
          solution: "إعادة تصميم الواجهة وتجربة الاستخدام الرقمية",
        },
        {
          problem: "عملياتك ما زالت يدوية",
          solution: "تحول رقمي وأتمتة مسارات العمل",
        },
        {
          problem: "لديك فكرة منتج بدون فريق تقني",
          solution: "تطوير منتج مخصص من الفكرة إلى الإطلاق",
        },
        {
          problem: "منتجك الرقمي يحتاج تحسيناً",
          solution: "تدقيق تقني وتحسين الأداء والبنية",
        },
      ],
    },
    process: {
      eyebrow: "كيف نعمل",
      title: "منهجية واضحة من البداية إلى الإطلاق",
      steps: [
        { number: "01", title: "Discover", subtitle: "فهم العمل، المستخدم، والمشكلة" },
        { number: "02", title: "Define", subtitle: "تحويل المتطلبات إلى اتجاه منتج وتقني واضح" },
        { number: "03", title: "Design", subtitle: "تصميم تجربة رقمية وهيكل منتج مركز" },
        { number: "04", title: "Build", subtitle: "تطوير، ربط، اختبار، وتحسين الحل" },
        { number: "05", title: "Launch", subtitle: "إطلاق المنتج ودعم مرحلته التالية" },
      ],
    },
    work: {
      eyebrow: "أعمال مختارة",
      title: "مشاريع نفتخر بتقديمها",
      description: "كل مشروع يُعرض بسياق المشكلة والحل — وليس كصورة فقط.",
      emptyTitle: "قريباً: دراسات حالة مفصّلة",
      emptyDescription:
        "نُجهّز عرضاً لأعمال مختارة من مشاريع Core Tech. إذا لديك مشروع للعرض هنا، شاركنا التفاصيل.",
      emptyCta: "شارك تفاصيل مشروع",
      labels: {
        problem: "المشكلة",
        solution: "الحل",
        services: "الخدمات",
        result: "الأثر",
      },
      projects: [] as Array<{
        name: string;
        summary: string;
        problem: string;
        solution: string;
        services: string[];
        result?: string;
      }>,
    },
    why: {
      eyebrow: "لماذا Core Tech",
      title: "شريك تقني يركز على العمل أولاً",
      points: [
        "تقنية مرتبطة بأهداف العمل",
        "حلول رقمية مصممة حسب السياق",
        "تفكير منتج + هندسة تنفيذ",
        "بنية حديثة قابلة للتوسع",
        "عملية وتواصل واضحان",
      ],
    },
    industries: {
      eyebrow: "قطاعات نخدمها",
      title: "نركز حيث يكون للتقنية أثر تشغيلي حقيقي",
      items: [
        {
          name: "الشركات الصغيرة والمتوسطة",
          description: "حضور رقمي، منتجات مخصصة، وأنظمة تشغيل دون تعقيد زائد.",
        },
        {
          name: "شركات الخدمات",
          description: "مواقع ومسارات تواصل وتحويل تدعم المبيعات وخدمة العملاء.",
        },
        {
          name: "فرق العمليات",
          description: "لوحات تحكم، تكاملات، وأتمتة لإدارة البيانات والعمل اليومي.",
        },
      ],
    },
    about: {
      eyebrow: "من نحن",
      title: "Core Tech Solutions",
      paragraphs: [
        "Core Tech Solutions شريك تقني B2B يساعد الشركات على بناء وتحسين منتجاتها الرقمية — من المواقع والتطبيقات إلى الأنظمة الداخلية والتكاملات.",
        "نبدأ بفهم المشكلة التجارية، ثم نحوّلها إلى حل واضح قابل للبناء والتوسع. هدفنا ليس عرض تقني معقد، بل منتج يخدم فريقك وعملاءك.",
        "نعمل بمنهجية Discover → Define → Design → Build → Launch، مع تواصل مباشر ونطاق محدد في كل مرحلة.",
      ],
    },
    contact: {
      eyebrow: "تواصل",
      title: "لنناقش مشروعك",
      description: "صف ما تريد بناءه أو تحسينه، وسنرد بتصور أولي للمسار والخطوات.",
      cardTitle: "ماذا يحدث بعد الإرسال؟",
      cardDescription: "مراجعة سريعة، توضيح النطاق، ثم اقتراح خطوات عملية قبل البدء.",
      steps: ["رد أولي", "تحديد النطاق", "عرض تنفيذ واضح"],
      namePlaceholder: "اسمك أو اسم الشركة",
      servicePlaceholder: "نوع الحل المطلوب",
      messagePlaceholder: "ما الذي تحاول بناءه أو تحسينه؟",
      options: [
        "موقع أو منصة",
        "تطبيق جوال",
        "لوحة تحكم أو نظام داخلي",
        "تكاملات وأتمتة",
        "تدقيق وتحسين منتج حالي",
        "استشارة تقنية",
      ],
      submit: "إرسال عبر واتساب",
      whatsappIntro: "مرحباً Core Tech Solutions",
      nameLabel: "الاسم",
      serviceLabel: "الخدمة",
      messageLabel: "التفاصيل",
    },
    finalCta: {
      title: "هل لديك تحدٍ رقمي؟",
      description: "أخبرنا بما تحاول بناءه أو تحسينه أو تحويله.",
      cta: "ابدأ مشروعاً",
    },
    footer: {
      tagline: "حلول تقنية B2B — واضحة، قابلة للتوسع، ومبنية حول عملك.",
      services: "الخدمات",
      work: "الأعمال",
      about: "من نحن",
      contact: "تواصل",
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
      title: "Core Tech Solutions | Technology Solutions for Businesses",
      description:
        "Core Tech Solutions is a B2B technology partner building websites, digital products, dashboards, and integrations shaped around business needs — with clarity, process, and scalable engineering.",
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
      brand: "Core Tech Solutions",
      headline: "Clear digital products",
      headlineAccent: "built around your business",
      description:
        "We design and develop websites, systems, and digital experiences that help companies run and improve their operations — from discovery to launch.",
      primaryCta: "Start a Project",
      secondaryCta: "Explore Our Work",
    },
    services: {
      eyebrow: "What we do",
      title: "Digital solutions built around your business",
      description: "Core services we focus on with business teams — without unnecessary complexity.",
      learnMore: "Learn More",
      items: [
        {
          title: "Digital Transformation",
          description: "Turn traditional operations into more efficient, scalable digital workflows.",
          href: "#problems",
        },
        {
          title: "Custom Software Development",
          description: "Websites, applications, and dashboards designed for your business context.",
          href: "#work",
        },
        {
          title: "Digital Audit & Optimization",
          description: "Review existing products and websites to find performance and experience improvements.",
          href: "#problems",
        },
        {
          title: "Integrations & Automation",
          description: "Connect tools, forms, data, and workflows to reduce manual work.",
          href: "#process",
        },
      ],
    },
    problems: {
      eyebrow: "Problems we solve",
      title: "Technology should solve a business problem — not create another one",
      items: [
        {
          problem: "Your website no longer represents your business",
          solution: "Website redesign and digital experience",
        },
        {
          problem: "Your processes are still manual",
          solution: "Digital transformation and workflow solutions",
        },
        {
          problem: "You have a product idea but no technical team",
          solution: "Custom product development",
        },
        {
          problem: "Your existing digital product needs improvement",
          solution: "Technical audit and optimization",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A clear path from discovery to launch",
      steps: [
        { number: "01", title: "Discover", subtitle: "Understand the business, users, and problem" },
        { number: "02", title: "Define", subtitle: "Turn requirements into a clear product and technical direction" },
        { number: "03", title: "Design", subtitle: "Create a focused digital experience and product structure" },
        { number: "04", title: "Build", subtitle: "Develop, integrate, test, and refine the solution" },
        { number: "05", title: "Launch", subtitle: "Deploy the product and support its next stage" },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Projects we are proud to deliver",
      description: "Each project is shown with problem and solution context — not just visuals.",
      emptyTitle: "Case studies coming soon",
      emptyDescription:
        "We are preparing selected work from Core Tech projects. If you have a project to feature here, share the details with us.",
      emptyCta: "Share project details",
      labels: {
        problem: "Problem",
        solution: "Solution",
        services: "Services",
        result: "Impact",
      },
      projects: [] as Array<{
        name: string;
        summary: string;
        problem: string;
        solution: string;
        services: string[];
        result?: string;
      }>,
    },
    why: {
      eyebrow: "Why Core Tech",
      title: "A technology partner with a business-first mindset",
      points: [
        "Business-first technology",
        "Tailored digital solutions",
        "Product thinking + engineering",
        "Modern and scalable architecture",
        "Clear process and communication",
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "Where technology creates real operational impact",
      items: [
        {
          name: "SMEs",
          description: "Digital presence, custom products, and operating systems without excess complexity.",
        },
        {
          name: "Service Businesses",
          description: "Websites and conversion journeys that support sales and customer service.",
        },
        {
          name: "Operations Teams",
          description: "Dashboards, integrations, and automation for daily data and workflow management.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Core Tech Solutions",
      paragraphs: [
        "Core Tech Solutions is a B2B technology partner helping companies build and improve their digital products — from websites and apps to internal systems and integrations.",
        "We start with the business problem, then translate it into a clear solution that can be built and scaled. The goal is not technical complexity for its own sake, but a product that serves your team and customers.",
        "We work through Discover → Define → Design → Build → Launch, with direct communication and defined scope at every stage.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's discuss your project",
      description: "Tell us what you want to build or improve, and we will respond with an initial view of the path forward.",
      cardTitle: "What happens after you reach out?",
      cardDescription: "A quick review, scope clarification, then practical next steps before we start.",
      steps: ["Initial reply", "Scope alignment", "Clear proposal"],
      namePlaceholder: "Your name or company",
      servicePlaceholder: "Type of solution",
      messagePlaceholder: "What are you trying to build or improve?",
      options: [
        "Website or platform",
        "Mobile application",
        "Dashboard or internal system",
        "Integrations and automation",
        "Audit and optimization",
        "Technical consultation",
      ],
      submit: "Send via WhatsApp",
      whatsappIntro: "Hello Core Tech Solutions",
      nameLabel: "Name",
      serviceLabel: "Service",
      messageLabel: "Details",
    },
    finalCta: {
      title: "Have a digital challenge?",
      description: "Tell us what you're trying to build, improve, or transform.",
      cta: "Start a Project",
    },
    footer: {
      tagline: "B2B technology solutions — clear, scalable, and built around your business.",
      services: "Services",
      work: "Work",
      about: "About",
      contact: "Contact",
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
