import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import heroBg from "@/assets/hero-bg.jpg";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceOffice from "@/assets/service-office.jpg";

const HeroSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden overflow-x-clip">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional cleaning team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Animated floating particles */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/15 blur-3xl hidden sm:block"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-accent/15 blur-3xl hidden sm:block"
        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-primary/10 blur-2xl hidden lg:block"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={lang === "ar" ? "text-right lg:order-2" : ""}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/10">
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Title */}
            <div className="mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-foreground dark:text-white leading-[1.1]"
            >
              {t("hero.title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="relative inline-block">
                <span className="text-accent">{t("hero.title").split(" ").slice(-1)}</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-primary-foreground/80 dark:text-slate-300 max-w-xl mb-10 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="lg" className="bg-hero-gradient text-primary-foreground hover:opacity-90 transition-all shadow-lg hover:shadow-xl px-8 text-base group" asChild>
                      <Link to="/quote">
                        {t("hero.cta")}
                        <ArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{lang === 'fr' ? 'Obtenez une estimation gratuite !' : 'احصل على تقدير مجاني!'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button variant="outline" size="lg" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20 backdrop-blur-sm px-8 text-base" asChild>
                <Link to="/services">
                  <Play className="w-4 h-4 me-2" />
                  {t("hero.cta2")}
                </Link>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-12"
            >
              {[
                { icon: Shield, label: t("trust.certified") },
                { icon: Star, label: t("trust.insured") },
                { icon: Clock, label: t("trust.available") },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - floating image cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px]">
              {/* Main image */}
              <motion.div
                className="absolute top-0 right-0 w-[320px] h-[380px] rounded-2xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={serviceResidential}
                  alt="Nettoyage résidentiel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </motion.div>

              {/* Secondary image */}
              <motion.div
                className="absolute bottom-0 left-0 w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-background/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img
                  src={serviceOffice}
                  alt="Nettoyage de bureaux"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute bottom-16 right-0 bg-card/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-hero-gradient flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-card-foreground">4.9/5</p>
                    <p className="text-xs text-muted-foreground">{lang === "ar" ? "تقييم العملاء" : "Note clients"}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 32C1200 28 1320 20 1380 16L1440 12V60H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
