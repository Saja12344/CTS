"""Editorial source for the week of 8 November 2026.

Claims inside voiceover, caption, and on-screen lines are copied from the
brand pack, which is copied from src/content/site.ts. Framing lines describe
the viewer's situation. They are not results.
"""

from __future__ import annotations


def scene(number: int, t0: float, t1: float, shot_ar: str, hears: str, visual_prompt: str) -> dict:
    return {
        "scene": number,
        "t0": t0,
        "t1": t1,
        "shot_ar": shot_ar,
        "hears": hears,
        "visual_prompt": visual_prompt,
    }


def card(t0: float, t1: float, lines: list[str]) -> dict:
    return {"t0": t0, "t1": t1, "lines": lines}


END = (
    "Locked camera. Flat wall #171717, no texture and no vignette. "
    "A small white CTS in a plain grotesque, tracked wide. Under it a flat rectangle "
    "filled #F15A29, corner radius at most 2 pixels, no shadow, containing the white Arabic ابدأ مشروعًا. "
    "Under the rectangle, the digits +966 50 380 7517 in #F7F7F5, small enough to sit in one line and large enough to read. "
    "Empty around the block. No icon, no arrow, no QR code."
)

WEEK = {
    "id": "2026-11-08",
    "timezone": "Asia/Riyadh",
    "insights": {
        "status": "empty",
        "reason": "no_source",
    },
    "strategy_ar": (
        "الأسبوع مبني على صوت العلامة، لا على أداء. لا ملف أرقام ولا حساب منصة. "
        "الجمهور من يدير عملًا في السعودية. الوعد الوحيد هو جملة الموقع: "
        "نحوّل التحديات المعقدة إلى منتجات رقمية مفيدة، وهياكل برمجية قابلة للتوسع، وأدوات تشغيل سهلة الاستخدام. "
        "خمسة أفلام، كل واحد بزاوية واحدة: أنظمة الأعمال، المنتجات الرقمية، المنهجية، الويب والجوال، ثم الذكاء العملي. "
        "لا سعر، ولا عميل، ولا مقارنة. النشر ليس خطوة في هذا الإعداد."
    ),
    "promise_ar": "نحوّل التحديات المعقدة إلى منتجات رقمية مفيدة، وهياكل برمجية قابلة للتوسع، وأدوات تشغيل سهلة الاستخدام.",
}

ITEMS = [
    {
        "id": "01-operations",
        "number": "01",
        "title_ar": "العمل يمشي. النظام لا.",
        "objective": "أن يرى صاحب المنشأة أن ما تبنيه كور تيك هنا هو أدوات تشغيل مخصصة وربط لعمليات الأعمال، لا برنامجًا عامًا يُعرض في دقائق.",
        "audience_segment": "صاحب منشأة صغيرة أو متوسطة في السعودية. الطلب في محادثة، والرقم في جدول، والاعتماد في رأس شخص.",
        "pillar": "أنظمة الأعمال",
        "pillar_id": "business_systems",
        "concept": "ثلاثة انقطاعات على ورقة، ثم جملة الموقع عن أدوات التشغيل وربط العمليات، ثم السؤال الذي تبدأ به المنهجية.",
        "idea_en": "A Saudi operator's day still moves while the system does not: one request, one number, and one approval live apart. CTS builds custom operating tools, workflow automation, and connected business processes, and starts by naming the real problem.",
        "hook": "العمل يمشي.\nالنظام لا.",
        "duration_seconds": 28,
        "suggested_post_time": "2026-11-08T21:00:00+03:00",
        "suggested_post_label": "الأحد 8 نوفمبر 2026، 21:00 بتوقيت الرياض",
        "post_time_note": "اقتراح تحريري بعد نهاية دوام الأحد. لا يستند إلى قياس.",
        "claims_used": [
            "أدوات تشغيل مخصصة، أتمتة سير العمل، وربط عمليات الأعمال.",
            "نحدد المشكلة الحقيقية في العمل.",
            "ابدأ مشروعًا",
        ],
        "voiceover": (
            "العمل يمشي. النظام لا.\n"
            "الطلب في محادثة، والرقم في جدول، والاعتماد في رأس شخص.\n"
            "أدوات تشغيل مخصصة، أتمتة سير العمل، وربط عمليات الأعمال.\n"
            "نحدد المشكلة الحقيقية في العمل.\n"
            "ابدأ مشروعًا."
        ),
        "caption": (
            "العمل يمشي. النظام لا.\n"
            "أدوات تشغيل مخصصة، أتمتة سير العمل، وربط عمليات الأعمال.\n"
            "نحدد المشكلة الحقيقية في العمل.\n"
            "ابدأ مشروعًا\n"
            "+966 50 380 7517"
        ),
        "cta": "ابدأ مشروعًا",
        "hashtags": [
            "#كور_تيك",
            "#أنظمة_الأعمال",
            "#أتمتة_الأعمال",
            "#تشغيل",
            "#المنشآت_الصغيرة",
            "#السعودية",
        ],
        "edit_notes": [
            "الأسطر الثلاثة في المشهد الثاني تدخل واحدًا بعد الآخر في الموضع نفسه. العين لا تقفز.",
            "البرتقالي في هذا الفيلم: كلمة «لا»، والرقم ٠٢، وزر النهاية فقط.",
            "٠٢ هو ترتيب أنظمة الأعمال على الموقع، لا رقم حلقة.",
        ],
        "on_screen_text": [
            card(0, 2.5, ["العمل يمشي.", "النظام لا."]),
            card(2.5, 9, ["طلب في محادثة"]),
            card(4.5, 9, ["رقم في جدول"]),
            card(6.5, 9, ["اعتماد في رأس شخص"]),
            card(9, 16.5, ["أدوات تشغيل مخصصة", "أتمتة سير العمل"]),
            card(12.5, 16.5, ["ربط عمليات الأعمال"]),
            card(16.5, 22.5, ["نحدد المشكلة الحقيقية في العمل."]),
            card(22.5, 28, ["CTS", "ابدأ مشروعًا", "+966 50 380 7517"]),
        ],
        "storyboard": [
            scene(
                1, 0, 2.5,
                "حقل فحمي. سطران إلى اليمين. السطر الثاني برتقالي.",
                "العمل يمشي. النظام لا.",
                "Locked camera. Matte wall #171717, even light, no falloff. Right-aligned IBM Plex Sans Arabic. First line in #FFFFFF: العمل يمشي. Second line in flat #F15A29: النظام لا. Wide empty field to the left. No object in the room.",
            ),
            scene(
                2, 2.5, 9,
                "ورقة عاجية. ثلاثة أسطر تتراكم كفهرس، وإلى يمينها ٠٢.",
                "الطلب في محادثة، والرقم في جدول، والاعتماد في رأس شخص.",
                "Cut to a flat field #F7F7F5. Hairline rules #E5E5E1 between three accumulating Arabic lines, right-aligned, color #171717: طلب في محادثة then رقم في جدول then اعتماد في رأس شخص. Margin index ٠٢ in #F15A29, JetBrains Mono. No icons and no app marks. Lines appear on the locked times, same x-position.",
            ),
            scene(
                3, 9, 16.5,
                "عودة إلى الفحمي. جملتان عن الأداة والربط، وخط أبيض رفيع كهامش سويسري.",
                "أدوات تشغيل مخصصة، أتمتة سير العمل، وربط عمليات الأعمال.",
                "Cut to #171717. A hairline vertical rule in #FFFFFF near the right margin. White Arabic, right-aligned, with ربط عمليات الأعمال in #F15A29: أدوات تشغيل مخصصة / أتمتة سير العمل / ربط عمليات الأعمال. Nothing else.",
            ),
            scene(
                4, 16.5, 22.5,
                "حقل أبيض. جملة المنهجية الأولى وحدها، كسطر في فهرس.",
                "نحدد المشكلة الحقيقية في العمل.",
                "Cut to #FFFFFF. One Arabic line, right-aligned, #171717: نحدد المشكلة الحقيقية في العمل. A short orange rule #F15A29 above it, 48 pixels wide, 1 pixel tall. No illustration.",
            ),
            scene(
                5, 22.5, 28,
                "بطاقة النهاية. CTS، الزر، الرقم.",
                "ابدأ مشروعًا.",
                END,
            ),
        ],
    },
    {
        "id": "02-product",
        "number": "02",
        "title_ar": "عندك فكرة. ليس عندك منتج.",
        "objective": "فصل الفكرة عن المنتج، وربط كور تيك باستراتيجية المنتج وتجربة المستخدم والتطوير من البداية للنهاية.",
        "audience_segment": "مؤسس شركة ناشئة في السعودية عنده فكرة ولم يثبت بعد المستخدم ولا النطاق ولا النسخة الأولى.",
        "pillar": "منتجات رقمية",
        "pillar_id": "digital_products",
        "concept": "صفحة فارغة، ثم ثلاثة ملصقات من جملة الموقع عن المنتج، ثم جملة تفكير المنتج كما تُقرأ على الموقع.",
        "idea_en": "A founder has an idea and does not yet have a product. CTS does product strategy, UX and UI, and end-to-end digital product development, and looks for what actually needs to be built rather than only what was requested.",
        "hook": "عندك فكرة.\nليس عندك منتج.",
        "duration_seconds": 26,
        "suggested_post_time": "2026-11-09T12:45:00+03:00",
        "suggested_post_label": "الاثنين 9 نوفمبر 2026، 12:45 بتوقيت الرياض",
        "post_time_note": "اقتراح تحريري قبيل منتصف نهار الاثنين. لا يستند إلى قياس.",
        "claims_used": [
            "استراتيجية المنتج، تصميم تجربة وواجهة المستخدم، وتطوير المنتج الرقمي من البداية للنهاية.",
            "لا نبني فقط ما يُطلب منا. نكتشف ما",
            "يحتاج فعلاً إلى البناء.",
            "ابدأ مشروعًا",
        ],
        "voiceover": (
            "عندك فكرة. ليس عندك منتج.\n"
            "استراتيجية المنتج، تصميم تجربة وواجهة المستخدم، وتطوير المنتج الرقمي من البداية للنهاية.\n"
            "لا نبني فقط ما يُطلب منا. نكتشف ما يحتاج فعلاً إلى البناء.\n"
            "ابدأ مشروعًا."
        ),
        "caption": (
            "عندك فكرة. ليس عندك منتج.\n"
            "استراتيجية المنتج، تصميم تجربة وواجهة المستخدم، وتطوير المنتج الرقمي من البداية للنهاية.\n"
            "لا نبني فقط ما يُطلب منا. نكتشف ما يحتاج فعلاً إلى البناء.\n"
            "ابدأ مشروعًا\n"
            "+966 50 380 7517"
        ),
        "cta": "ابدأ مشروعًا",
        "hashtags": [
            "#كور_تيك",
            "#منتجات_رقمية",
            "#شركات_ناشئة",
            "#تجربة_المستخدم",
            "#بناء_المنتج",
            "#السعودية",
        ],
        "edit_notes": [
            "لا تظهر واجهة تطبيق متخيلة. المنتج هنا كلمات على ورقة، لا شاشة مسروقة من أداة تصميم.",
            "٠١ ترتيب المنتجات الرقمية على الموقع.",
            "جملة «يحتاج فعلاً إلى البناء» تبقى برتقالية كما يقع التأكيد على الموقع، بلا ظل.",
        ],
        "on_screen_text": [
            card(0, 3, ["عندك فكرة.", "ليس عندك منتج."]),
            card(3, 12, ["٠١", "استراتيجية المنتج"]),
            card(6, 12, ["تصميم تجربة وواجهة المستخدم"]),
            card(9, 12, ["من البداية للنهاية"]),
            card(12, 20.5, ["لا نبني فقط ما يُطلب منا."]),
            card(16, 20.5, ["يحتاج فعلاً إلى البناء."]),
            card(20.5, 26, ["CTS", "ابدأ مشروعًا", "+966 50 380 7517"]),
        ],
        "storyboard": [
            scene(
                1, 0, 3,
                "ورقة بيضاء. سطران فقط. لا رسم لفكرة.",
                "عندك فكرة. ليس عندك منتج.",
                "Locked camera. Flat #FFFFFF sheet, no paper grain, no pen, no light bulb. Right-aligned Arabic in #171717: عندك فكرة. Then ليس عندك منتج. in #F15A29. Large type, two lines, deep margin.",
            ),
            scene(
                2, 3, 12,
                "الفحمي. هامش برتقالي عمودي وثلاثة أسطر من عرض المنتجات الرقمية، مع ٠١.",
                "استراتيجية المنتج، تصميم تجربة وواجهة المستخدم، وتطوير المنتج الرقمي من البداية للنهاية.",
                "Cut to #171717. One vertical bar, 6 pixels wide, #F15A29, full height of the type block only. Index ٠١ in JetBrains Mono, #F15A29. Three white Arabic lines accumulate, right-aligned: استراتيجية المنتج / تصميم تجربة وواجهة المستخدم / من البداية للنهاية. No device.",
            ),
            scene(
                3, 12, 20.5,
                "عاجي. سطران من تفكير المنتج. السطر الثاني برتقالي.",
                "لا نبني فقط ما يُطلب منا. نكتشف ما يحتاج فعلاً إلى البناء.",
                "Cut to #F7F7F5. Two right-aligned lines. First in #171717: لا نبني فقط ما يُطلب منا. Second in #F15A29: يحتاج فعلاً إلى البناء. Wide empty left side. No quotation marks and no portrait.",
            ),
            scene(
                4, 20.5, 26,
                "بطاقة النهاية.",
                "ابدأ مشروعًا.",
                END,
            ),
        ],
    },
    {
        "id": "03-question",
        "number": "03",
        "title_ar": "الحل الصحيح يبدأ بالسؤال الصحيح.",
        "objective": "تثبيت جملة المنهجية والخطوات الأربع كما هي على الموقع، لجمهور يوشك أن يطلب بناءً قبل تسمية المشكلة.",
        "audience_segment": "مسؤول في منشأة أو جهة في السعودية طُلب منه تحوّل رقمي، والخطوة التالية على الطاولة أداة لا سؤال.",
        "pillar": "المنهجية",
        "pillar_id": "method",
        "concept": "فهرس من أربع خطوات، خطوة في كل مرة، بالنص الحرفي: افهم، حدّد، ابنِ، حسّن.",
        "idea_en": "The right solution starts with the right question. Four steps already on the site: understand the real business problem, fix scope and technical direction, design and validate, then test, improve, deploy, and keep supporting the product.",
        "hook": "الحل الصحيح يبدأ بالسؤال الصحيح.",
        "duration_seconds": 32,
        "suggested_post_time": "2026-11-10T21:10:00+03:00",
        "suggested_post_label": "الثلاثاء 10 نوفمبر 2026، 21:10 بتوقيت الرياض",
        "post_time_note": "اقتراح تحريري مساء الثلاثاء. لا يستند إلى قياس.",
        "claims_used": [
            "الحل الصحيح يبدأ بالسؤال الصحيح.",
            "نحدد المشكلة الحقيقية في العمل.",
            "نثبت نطاق المنتج والاتجاه التقني المناسب.",
            "نصمّم، ونطوّر، ونتحقق من الحل.",
            "نختبر، ونحسّن، وننشر، وندعم تطور المنتج المستمر.",
            "ابدأ مشروعًا",
        ],
        "voiceover": (
            "الحل الصحيح يبدأ بالسؤال الصحيح.\n"
            "افهم. نحدد المشكلة الحقيقية في العمل.\n"
            "حدّد. نثبت نطاق المنتج والاتجاه التقني المناسب.\n"
            "ابنِ. نصمّم، ونطوّر، ونتحقق من الحل.\n"
            "حسّن. نختبر، ونحسّن، وننشر، وندعم تطور المنتج المستمر.\n"
            "ابدأ مشروعًا."
        ),
        "caption": (
            "الحل الصحيح يبدأ بالسؤال الصحيح.\n"
            "افهم: نحدد المشكلة الحقيقية في العمل.\n"
            "حدّد: نثبت نطاق المنتج والاتجاه التقني المناسب.\n"
            "ابنِ: نصمّم، ونطوّر، ونتحقق من الحل.\n"
            "حسّن: نختبر، ونحسّن، وننشر، وندعم تطور المنتج المستمر.\n"
            "ابدأ مشروعًا\n"
            "+966 50 380 7517"
        ),
        "cta": "ابدأ مشروعًا",
        "hashtags": [
            "#كور_تيك",
            "#تحول_رقمي",
            "#تفكير_المنتج",
            "#المنهجية",
            "#أصحاب_الأعمال",
            "#السعودية",
        ],
        "edit_notes": [
            "الأرقام ٠١ إلى ٠٤ هنا خطوات المنهجية، لا خدمات الصفحة.",
            "كلمة «وننشر» في خطوة حسّن تعني إطلاق المنتج كما على الموقع، لا نشر هذا الفيلم.",
            "لا تُوضع الجملة الافتتاحية فوق مشهد أو أفق. هي سطر فهرس على ورق.",
            "بين كل خطوة وأخرى سكتة قصيرة حتى يُقرأ السطر قبل الصوت التالي.",
        ],
        "on_screen_text": [
            card(0, 3, ["الحل الصحيح يبدأ بالسؤال الصحيح."]),
            card(3, 8.5, ["٠١", "افهم", "نحدد المشكلة الحقيقية في العمل."]),
            card(8.5, 14, ["٠٢", "حدّد", "نثبت نطاق المنتج والاتجاه التقني المناسب."]),
            card(14, 19.5, ["٠٣", "ابنِ", "نصمّم، ونطوّر، ونتحقق من الحل."]),
            card(19.5, 26, ["٠٤", "حسّن", "نختبر، ونحسّن، وننشر، وندعم تطور المنتج المستمر."]),
            card(26, 32, ["CTS", "ابدأ مشروعًا", "+966 50 380 7517"]),
        ],
        "storyboard": [
            scene(
                1, 0, 3,
                "ورق عاجي. سؤال الموقع سطرًا واحدًا، وتحته مسطرة شعرية.",
                "الحل الصحيح يبدأ بالسؤال الصحيح.",
                "Locked camera. Flat #F7F7F5. One right-aligned Arabic line in #171717: الحل الصحيح يبدأ بالسؤال الصحيح. A 1 pixel rule under it in #171717, only as wide as the line. No landscape and no centered poster layout.",
            ),
            scene(
                2, 3, 8.5,
                "الخطوة ٠١ افهم على حقل أبيض.",
                "افهم. نحدد المشكلة الحقيقية في العمل.",
                "Cut to #FFFFFF. Right margin: ٠١ in #F15A29, JetBrains Mono. Under it the word افهم in #171717, then the smaller line نحدد المشكلة الحقيقية في العمل. Left two-thirds of the frame stay empty.",
            ),
            scene(
                3, 8.5, 14,
                "الخطوة ٠٢ حدّد. الحقل فحمي حتى ينكسر التتابع البصري.",
                "حدّد. نثبت نطاق المنتج والاتجاه التقني المناسب.",
                "Cut to #171717. Same grid as the previous step. ٠٢ in #F15A29. The word حدّد in #FFFFFF. The line نثبت نطاق المنتج والاتجاه التقني المناسب. in #F7F7F5. No diagram.",
            ),
            scene(
                4, 14, 19.5,
                "الخطوة ٠٣ ابنِ على الأبيض من جديد.",
                "ابنِ. نصمّم، ونطوّر، ونتحقق من الحل.",
                "Cut to #FFFFFF. ٠٣ in #F15A29. ابنِ in #171717. Then نصمّم، ونطوّر، ونتحقق من الحل. Same right edge as ٠١. No construction metaphor and no crane.",
            ),
            scene(
                5, 19.5, 26,
                "الخطوة ٠٤ حسّن على العاجي.",
                "حسّن. نختبر، ونحسّن، وننشر، وندعم تطور المنتج المستمر.",
                "Cut to #F7F7F5. ٠٤ in #F15A29. حسّن in #171717. Then نختبر، ونحسّن، وننشر، وندعم تطور المنتج المستمر. The line may wrap to two lines. It stays right-aligned. No upward arrow and no growth chart.",
            ),
            scene(
                6, 26, 32,
                "بطاقة النهاية.",
                "ابدأ مشروعًا.",
                END,
            ),
        ],
    },
    {
        "id": "04-screens",
        "number": "04",
        "title_ar": "شاشة لا يُنجَز عليها عمل",
        "objective": "توضيح أن الويب والجوال عند كور تيك يُبنيان حول مستخدمين حقيقيين وحالات استخدام فعلية، لا حول شاشة تعريف.",
        "audience_segment": "شركة في السعودية تملك شاشة تعرض الاسم، وتحتاج تطبيق ويب أو تجربة جوال تُنجز عملًا لمستخدم حقيقي.",
        "pillar": "ويب وموبايل",
        "pillar_id": "web_mobile",
        "concept": "مستطيل فارغ من حواف المتصفح، ثم جملة الموقع عن تطبيقات الويب وتجارب الجوال، ثم جملة الخطوة التقنية الصحيحة.",
        "idea_en": "A screen that does not help anyone finish work is not a product. CTS builds responsive web applications and mobile experiences around real users and real use cases, and helps a company take the right technical step whether it is launching a product or changing how it works.",
        "hook": "شاشة لا يُنجَز عليها عمل\nليست منتجًا.",
        "duration_seconds": 26,
        "suggested_post_time": "2026-11-11T13:00:00+03:00",
        "suggested_post_label": "الأربعاء 11 نوفمبر 2026، 13:00 بتوقيت الرياض",
        "post_time_note": "اقتراح تحريري بعد منتصف نهار الأربعاء. لا يستند إلى قياس.",
        "claims_used": [
            "تطبيقات ويب متجاوبة وتجارب جوال مصممة حول مستخدمين حقيقيين وحالات استخدام فعلية.",
            "سواء كنت تطلق منتجًا أو تطوّر طريقة عملك، نساعدك على اتخاذ الخطوة التقنية الصحيحة.",
            "ابدأ مشروعًا",
        ],
        "voiceover": (
            "شاشة لا يُنجَز عليها عمل، ليست منتجًا.\n"
            "تطبيقات ويب متجاوبة وتجارب جوال مصممة حول مستخدمين حقيقيين وحالات استخدام فعلية.\n"
            "سواء كنت تطلق منتجًا أو تطوّر طريقة عملك، نساعدك على اتخاذ الخطوة التقنية الصحيحة.\n"
            "ابدأ مشروعًا."
        ),
        "caption": (
            "شاشة لا يُنجَز عليها عمل، ليست منتجًا.\n"
            "تطبيقات ويب متجاوبة وتجارب جوال مصممة حول مستخدمين حقيقيين وحالات استخدام فعلية.\n"
            "سواء كنت تطلق منتجًا أو تطوّر طريقة عملك، نساعدك على اتخاذ الخطوة التقنية الصحيحة.\n"
            "ابدأ مشروعًا\n"
            "+966 50 380 7517"
        ),
        "cta": "ابدأ مشروعًا",
        "hashtags": [
            "#كور_تيك",
            "#تطبيقات_الويب",
            "#تطبيقات_الجوال",
            "#منتج_رقمي",
            "#حالات_الاستخدام",
            "#السعودية",
        ],
        "edit_notes": [
            "المستطيل ليس هاتفًا ولا متصفحًا. بلا شريط حالة وبلا زر إغلاق.",
            "٠٣ ترتيب ويب وموبايل على الموقع.",
            "لا تُملأ الشاشة بأزرار أو قوائم متخيلة. النص المقفل هو المحتوى الوحيد داخل الإطار.",
        ],
        "on_screen_text": [
            card(0, 3, ["شاشة لا يُنجَز عليها عمل", "ليست منتجًا."]),
            card(3, 12, ["٠٣", "تطبيقات ويب متجاوبة"]),
            card(7, 12, ["تجارب جوال"]),
            card(12, 20, ["مستخدمين حقيقيين", "حالات استخدام فعلية"]),
            card(16, 20, ["الخطوة التقنية الصحيحة"]),
            card(20, 26, ["CTS", "ابدأ مشروعًا", "+966 50 380 7517"]),
        ],
        "storyboard": [
            scene(
                1, 0, 3,
                "أبيض. مستطيل بخط شعري، وداخله سطران. بلا هيكل هاتف.",
                "شاشة لا يُنجَز عليها عمل، ليست منتجًا.",
                "Locked camera. Field #FFFFFF. One rectangle stroked 1 pixel #171717, sharp corners, centered, about half the frame width, tall enough for two Arabic lines and no taller. Inside, right-aligned: شاشة لا يُنجَز عليها عمل in #171717 and ليست منتجًا. in #F15A29. No status bar, no browser chrome, no bezel, no hand holding a device.",
            ),
            scene(
                2, 3, 12,
                "الفحمي. ٠٣ ثم سطران من جملة الويب والجوال.",
                "تطبيقات ويب متجاوبة وتجارب جوال مصممة حول مستخدمين حقيقيين وحالات استخدام فعلية.",
                "Cut to #171717. Index ٠٣ in #F15A29, JetBrains Mono, on the right. White Arabic accumulates: تطبيقات ويب متجاوبة then تجارب جوال. The rectangle from the first scene is gone. No mock interface.",
            ),
            scene(
                3, 12, 20,
                "عاجي. سطران عن المستخدم والحالة، ثم سطر الخطوة الصحيحة.",
                "سواء كنت تطلق منتجًا أو تطوّر طريقة عملك، نساعدك على اتخاذ الخطوة التقنية الصحيحة.",
                "Cut to #F7F7F5. Right-aligned lines: مستخدمين حقيقيين and حالات استخدام فعلية in #171717, then الخطوة التقنية الصحيحة in #F15A29. No photo of a user and no persona card.",
            ),
            scene(
                4, 20, 26,
                "بطاقة النهاية.",
                "ابدأ مشروعًا.",
                END,
            ),
        ],
    },
    {
        "id": "05-practical-ai",
        "number": "05",
        "title_ar": "ليس سطرًا في العرض",
        "objective": "حصر الوعد في قدرة ذكاء اصطناعي عملية داخل المنتج أو سير العمل، ثم فتح الحديث السري كما على صفحة التواصل.",
        "audience_segment": "قيادة في السعودية طُلب منها إضافة ذكاء اصطناعي إلى العرض، ولم يُسمَّ بعد أين تتغير خطوة العمل.",
        "pillar": "حلول مدعومة بالذكاء الاصطناعي",
        "pillar_id": "practical_ai",
        "concept": "سطر يرفض الشعار، ثم جملة الموقع عن القدرات العملية، ثم جملة السرية، ثم الدعوة.",
        "idea_en": "AI is not a line in a deck. CTS integrates practical AI into products and workflows where it creates real value. The conversation offered on the site is a direct technical discussion, with the project's confidentiality protected.",
        "hook": "ليس سطرًا في العرض.",
        "duration_seconds": 28,
        "suggested_post_time": "2026-11-12T20:30:00+03:00",
        "suggested_post_label": "الخميس 12 نوفمبر 2026، 20:30 بتوقيت الرياض",
        "post_time_note": "اقتراح تحريري مساء الخميس، آخر يوم عمل. لا يستند إلى قياس.",
        "claims_used": [
            "قدرات ذكاء اصطناعي عملية مدمجة في المنتجات وسير العمل حيث تخلق قيمة حقيقية.",
            "مناقشة تقنية مباشرة، مع الحفاظ على سرية مشروعك.",
            "ابدأ مشروعًا",
        ],
        "voiceover": (
            "الذكاء الاصطناعي ليس سطرًا في العرض.\n"
            "قدرات ذكاء اصطناعي عملية مدمجة في المنتجات وسير العمل حيث تخلق قيمة حقيقية.\n"
            "مناقشة تقنية مباشرة، مع الحفاظ على سرية مشروعك.\n"
            "ابدأ مشروعًا."
        ),
        "caption": (
            "الذكاء الاصطناعي ليس سطرًا في العرض.\n"
            "قدرات ذكاء اصطناعي عملية مدمجة في المنتجات وسير العمل حيث تخلق قيمة حقيقية.\n"
            "مناقشة تقنية مباشرة، مع الحفاظ على سرية مشروعك.\n"
            "ابدأ مشروعًا\n"
            "+966 50 380 7517"
        ),
        "cta": "ابدأ مشروعًا",
        "hashtags": [
            "#كور_تيك",
            "#ذكاء_اصطناعي",
            "#حلول_عملية",
            "#سير_العمل",
            "#المنتجات_الرقمية",
            "#السعودية",
        ],
        "edit_notes": [
            "ممنوع دماغ، وشبكة، وروبوت، ولوحة مجسمة. ٠٤ رقم الخدمة على الموقع لا أكثر.",
            "سطر السرية يُعامل كخاتمة كتاب: صغير، على ورق، بلا قفل ذهبي وبلا ختم.",
            "لا يُقال إن الصوت مُولَّد. لا ملف صوت في هذا الإعداد.",
        ],
        "on_screen_text": [
            card(0, 3, ["ليس سطرًا في العرض."]),
            card(3, 13, ["٠٤", "قدرات ذكاء اصطناعي عملية"]),
            card(7, 13, ["مدمجة في المنتجات وسير العمل"]),
            card(10, 13, ["حيث تخلق قيمة حقيقية"]),
            card(13, 22, ["مناقشة تقنية مباشرة،", "مع الحفاظ على سرية مشروعك."]),
            card(22, 28, ["CTS", "ابدأ مشروعًا", "+966 50 380 7517"]),
        ],
        "storyboard": [
            scene(
                1, 0, 3,
                "فحمي. جملة واحدة قصيرة. لا رسم لآلة.",
                "الذكاء الاصطناعي ليس سطرًا في العرض.",
                "Locked camera. Matte #171717. One right-aligned line in #FFFFFF, large: ليس سطرًا في العرض. A 1 pixel #F15A29 rule, 64 pixels wide, above the line. No object, no particle, no lattice.",
            ),
            scene(
                2, 3, 13,
                "أبيض. ٠٤ وثلاثة أسطر هي مقطع حرفي من جملة الذكاء على الموقع.",
                "قدرات ذكاء اصطناعي عملية مدمجة في المنتجات وسير العمل حيث تخلق قيمة حقيقية.",
                "Cut to #FFFFFF. Index ٠٤ in #F15A29, JetBrains Mono. Three #171717 Arabic lines accumulate, right-aligned, even leading: قدرات ذكاء اصطناعي عملية / مدمجة في المنتجات وسير العمل / حيث تخلق قيمة حقيقية. The third line is #F15A29. No chart and no sparkle.",
            ),
            scene(
                3, 13, 22,
                "عاجي. سطر السرية كحاشية، لا كشعار أمان.",
                "مناقشة تقنية مباشرة، مع الحفاظ على سرية مشروعك.",
                "Cut to #F7F7F5. Small right-aligned type, #171717, two lines: مناقشة تقنية مباشرة، then مع الحفاظ على سرية مشروعك. Lots of empty paper above the lines, like a colophon. No lock icon, no shield, no stamp.",
            ),
            scene(
                4, 22, 28,
                "بطاقة النهاية.",
                "ابدأ مشروعًا.",
                END,
            ),
        ],
    },
]
