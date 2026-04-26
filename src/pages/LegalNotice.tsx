import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const LegalNotice = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-24">
      {/* Hero banner */}
      <section className="relative h-[300px] overflow-hidden bg-background">
        <img src={heroBg} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-extrabold text-foreground"
            >
              {t("legal.title")}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-10 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("legal.publisher")}</h2>
              <p><strong className="text-foreground">{t("legal.companyNameLabel")}</strong> Covanix Clean</p>
              <p><strong className="text-foreground">{t("legal.addressLabel")}</strong> Casablanca, Maroc</p>
              <p><strong className="text-foreground">{t("legal.phoneLabel")}</strong> +212779788196</p>
              <p><strong className="text-foreground">{t("legal.emailLabel")}</strong> moussagbamou6@gmail.com</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("legal.hosting")}</h2>
              <p><strong className="text-foreground">{t("legal.hostLabel")}</strong> {t("legal.hostValue")}</p>
              <p><strong className="text-foreground">{t("legal.addressLabel")}</strong> Casablanca, Maroc</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("legal.ip")}</h2>
              <p>{t("legal.ip.text")}</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("legal.personalData")}</h2>
              <p>{t("legal.personalData.text")}</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("legal.analytics")}</h2>
              <p>{t("legal.analytics.text")}</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalNotice;
