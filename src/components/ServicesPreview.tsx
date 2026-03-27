import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceDeep from "@/assets/service-deep.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";

const services = [
  { key: "residential", image: serviceResidential },
  { key: "office", image: serviceOffice },
  { key: "deep", image: serviceDeep },
  { key: "construction", image: serviceConstruction },
];

const ServicesPreview = () => {
  const { t } = useLanguage();

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
            ✦ Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            {t("services.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ key, image }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link to="/services" className="block">
                <div className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 h-full flex flex-col hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={image}
                      alt={t(`services.${key}`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-base font-semibold text-primary-foreground drop-shadow-lg">
                        {t(`services.${key}`)}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-sm text-muted-foreground flex-1 mb-4 leading-relaxed">
                      {t(`services.${key}.desc`)}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      {t("services.learnMore")} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
