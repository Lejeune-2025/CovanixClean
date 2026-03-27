import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Phone, ClipboardList, Sparkles, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    fr: { title: "Contactez-nous", desc: "Appelez-nous ou remplissez le formulaire de devis en ligne." },
    ar: { title: "اتصل بنا", desc: "اتصل بنا أو املأ نموذج طلب عرض السعر." },
  },
  {
    icon: ClipboardList,
    fr: { title: "Devis personnalisé", desc: "Nous évaluons vos besoins et vous envoyons un devis gratuit sous 24h." },
    ar: { title: "عرض سعر مخصص", desc: "نقيّم احتياجاتك ونرسل لك عرض سعر مجاني خلال 24 ساعة." },
  },
  {
    icon: Sparkles,
    fr: { title: "Intervention experte", desc: "Notre équipe qualifiée intervient selon le planning convenu." },
    ar: { title: "تدخل متخصص", desc: "فريقنا المؤهل يتدخل حسب الجدول المتفق عليه." },
  },
  {
    icon: ThumbsUp,
    fr: { title: "Satisfaction garantie", desc: "Vérification finale et garantie de satisfaction à 100%." },
    ar: { title: "رضا مضمون", desc: "فحص نهائي وضمان رضا 100%." },
  },
];

const HowItWorks = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            {lang === "ar" ? "كيف نعمل" : "Comment ça marche"}
          </motion.h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {lang === "ar"
              ? "أربع خطوات بسيطة للحصول على مساحة نظيفة"
              : "Quatre étapes simples pour un espace impeccable"}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ icon: Icon, fr, ar }, i) => {
              const data = lang === "ar" ? ar : fr;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative text-center group"
                >
                  {/* Step number */}
                  <div className="relative mx-auto mb-5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow"
                    >
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{data.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {data.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
