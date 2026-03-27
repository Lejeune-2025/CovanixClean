import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-10 sm:p-16 text-center text-white overflow-hidden"
        >
          <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
          
          {/* Decorative shapes */}
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white/10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-white/10"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            >
              {t("cta.title")}
            </motion.h2>
            <p className="opacity-90 mb-8 max-w-md mx-auto text-lg">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 text-base shadow-lg group" asChild>
                <Link to="/quote">
                  {t("cta.button")}
                  <ArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20 hover:text-white px-8 text-base backdrop-blur-sm transition-all" asChild>
                <a href="tel:+212779788196">
                  <Phone className="w-4 h-4 me-2" />
                  {lang === "ar" ? "اتصل الآن" : "Appeler maintenant"}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
