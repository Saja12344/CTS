import { motion } from "framer-motion";
import { Clock, Palette, HeadphonesIcon, BadgeDollarSign } from "lucide-react";

const reasons = [
  { icon: Clock, title: "تسليم بوقته", description: "نلتزم بالمواعيد المتفق عليها" },
  { icon: Palette, title: "جودة تعكس هويتك", description: "تصاميم تعبر عن علامتك التجارية" },
  { icon: HeadphonesIcon, title: "دعم ما بعد التسليم", description: "نوفر دعم فني مستمر بعد الإطلاق" },
  { icon: BadgeDollarSign, title: "أسعار تنافسية", description: "جودة عالية بأسعار مناسبة" },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا نحن؟</h2>
          <p className="text-muted-foreground text-lg">نتميز بما نقدمه لعملائنا</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-xl gradient-electric flex items-center justify-center mx-auto mb-5">
                <r.icon size={24} className="text-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
