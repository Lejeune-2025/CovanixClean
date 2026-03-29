import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const LegalNotice = () => {
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
              Mentions Légales
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-10 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Éditeur du site</h2>
              <p><strong className="text-foreground">Nom de l'entreprise :</strong> Covanix Clean</p>
              <p><strong className="text-foreground">Adresse :</strong> Casablanca, Maroc</p>
              <p><strong className="text-foreground">Téléphone :</strong> +212779788196</p>
              <p><strong className="text-foreground">Email :</strong> moussagbamou6@gmail.com</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Hébergement</h2>
              <p><strong className="text-foreground">Hébergeur :</strong> GitHub Pages</p>
              <p><strong className="text-foreground">Adresse :</strong> Casablanca, Maroc</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et la propriété intellectuelle.
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Données personnelles</h2>
              <p>
                Les informations recueillies vous concernant sont indispensables pour répondre à vos demandes d'information et pour vous envoyer la Newsletter (lettre d'information). 
                Elles sont exclusivement destinées à Covanix Clean. Vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalNotice;
