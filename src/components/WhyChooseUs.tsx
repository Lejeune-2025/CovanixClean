import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Award, Leaf, Users, ThumbsUp } from "lucide-react";

const items = [
  { icon: Award, key: "experience", color: "from-primary to-accent" },
  { icon: Leaf, key: "eco", color: "from-emerald-500 to-teal-500" },
  { icon: Users, key: "team", color: "from-primary to-blue-500" },
  { icon: ThumbsUp, key: "satisfaction", color: "from-accent to-cyan-400" },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3"
          >
            ✦ {t("why.title")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            {t("why.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t("why.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, key }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-5 group-hover:shadow-lg transition-shadow">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t(`why.${key}`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`why.${key}.desc`)}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
