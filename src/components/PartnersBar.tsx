import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import atlasLogo from "@/assets/Atlas.webp";
import addohaLogo from "@/assets/Addoha.webp";
import darnaLogo from "@/assets/darna.jpg";
import carrefourLogo from "@/assets/carrefour.webp";
import sofitelLogo from "@/assets/Sofitel.webp";
import cliniqueLogo from "@/assets/clinique.webp";

const partners = [
  { name: "Résidences Atlas", logo: atlasLogo },
  { name: "Groupe Addoha", logo: addohaLogo },
  { name: "Alliances Darna", logo: darnaLogo },
  { name: "Carrefour Maroc", logo: carrefourLogo },
  { name: "Hôtel Sofitel", logo: sofitelLogo },
  { name: "Clinique Internationale", logo: cliniqueLogo },
];

const PartnersBar = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-10">
          {lang === "ar" ? "يثقون بنا" : "Ils nous font confiance"}
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-10 gap-y-8 items-center">
          {partners.map(({ name, logo }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex justify-center"
            >
              <a title={name} className="cursor-pointer">
                <img
                  src={logo}
                  alt={name}
                  className="h-10 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBar;
