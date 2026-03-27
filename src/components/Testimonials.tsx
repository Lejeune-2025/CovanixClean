import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Fatima Z.", role: "fr:Particulier|ar:فرد", text: "fr:Un service exceptionnel ! Mon appartement n'a jamais été aussi propre. Je recommande vivement.|ar:خدمة استثنائية! شقتي لم تكن بهذا النظافة من قبل. أنصح بشدة.", avatar: "FZ" },
  { name: "Ahmed B.", role: "fr:Directeur de bureau|ar:مدير مكتب", text: "fr:Professionnels, ponctuels et minutieux. Nos bureaux sont impeccables chaque jour.|ar:محترفون ودقيقون. مكاتبنا نظيفة كل يوم.", avatar: "AB" },
  { name: "Sara M.", role: "fr:Propriétaire|ar:مالكة", text: "fr:Après les travaux, je ne pensais pas que ce serait possible. Résultat bluffant !|ar:بعد الأشغال، لم أتخيل أن النتيجة ستكون بهذا المستوى. مذهل!", avatar: "SM" },
];

const Testimonials = () => {
  const { lang, t } = useLanguage();
  const getLang = (s: string) => {
    const parts = s.split("|");
    const match = parts.find((p) => p.startsWith(lang + ":"));
    return match ? match.slice(3) : s;
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3"
          >
            ✦ Témoignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            {t("testimonials.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 relative h-full"
              >
                <Quote className="w-10 h-10 text-primary/8 absolute top-4 end-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">
                  "{getLang(item.text)}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-hero-gradient flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{item.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{getLang(item.role)}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
