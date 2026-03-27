import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Heart, Target, Eye, Handshake, Users, Award, Clock, Shield, ChevronRight, CheckCircle2, Leaf, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import StatsCounter from "@/components/StatsCounter";
import aboutTeam from "@/assets/about-team.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  const { t, lang } = useLanguage();

  const values = [
    { icon: Heart, fr: "Passion", ar: "شغف", descFr: "Notre passion pour la propreté nous pousse à l'excellence chaque jour.", descAr: "شغفنا بالنظافة يدفعنا للتميز كل يوم." },
    { icon: Target, fr: "Excellence", ar: "تميز", descFr: "Nous visons la perfection dans chaque intervention.", descAr: "نسعى للكمال في كل خدمة." },
    { icon: Eye, fr: "Transparence", ar: "شفافية", descFr: "Des prix clairs et une communication honnête à chaque étape.", descAr: "أسعار واضحة وتواصل صادق في كل مرحلة." },
    { icon: Handshake, fr: "Confiance", ar: "ثقة", descFr: "Bâtir des relations durables avec nos clients est notre priorité.", descAr: "بناء علاقات دائمة مع عملائنا هو أولويتنا." },
  ];



  const timeline = [
    { year: "2024", fr: "+30 clients et équipe de 15+ professionnels", ar: "+30 عميل وفريق من +15 محترف" },
    { year: "2025", fr: "Lancement de notre gamme de produits de nettoyage écologiques", ar: "إطلاق مجموعتنا من منتجات التنظيف البيئية" },
    { year: "2026", fr: "Introduction d'une nouvelle application pour la gestion des services", ar: "إطلاق تطبيق جديد لإدارة الخدمات" },
  ];

  const team = [
    { name: "Moussa G.", role: { fr: "Fondateur & Directeur", ar: "المؤسس والمدير" }, image: "/images/moussa.jpeg" },
    { name: "Khadija B.", role: { fr: "Responsable Opérations", ar: "مسؤولة العمليات" }, image: "/images/moussa.jpeg" },
    { name: "Fernand Hatousi.", role: { fr: "Chef d'Équipe", ar: "رئيس الفريق" }, image: "/images/moussa.jpeg" },
    { name: "Amina R.", role: { fr: "Relation Client", ar: "علاقات العملاء" }, image: "/images/moussa.jpeg" },
  ];

  const commitments = [
    { icon: Leaf, fr: "Produits 100% écologiques", ar: "منتجات 100% بيئية" },
    { icon: Shield, fr: "Personnel assuré et vérifié", ar: "موظفون مؤمنون ومتحقق منهم" },
    { icon: Sparkles, fr: "Matériel professionnel de pointe", ar: "معدات مهنية متطورة" },
    { icon: CheckCircle2, fr: "Contrôle qualité systématique", ar: "مراقبة جودة منهجية" },
  ];

  return (
    <main className="pt-24">
      {/* Hero banner */}
      <section className="relative h-[380px] overflow-hidden">
        <img src={aboutTeam} alt="Équipe Covanix Clean" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-foreground/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4"
            >
              ✦ {lang === "ar" ? "من نحن" : "À propos"}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-4"
            >
              {t("about.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-foreground/80 max-w-lg mx-auto"
            >
              {t("about.subtitle")}
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path d="M0 40L60 34C120 28 240 16 360 12C480 8 600 12 720 16C840 20 960 24 1080 22C1200 20 1320 12 1380 8L1440 4V40H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Story & Mission */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="relative">
              <img src={aboutTeam} alt="Notre histoire" className="rounded-2xl w-full h-[400px] object-cover shadow-xl" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-5 -right-5 bg-card rounded-xl px-6 py-4 shadow-xl hidden sm:block"
              >
                <p className="text-2xl font-extrabold text-primary">10+</p>
                <p className="text-xs text-muted-foreground">{lang === "ar" ? "سنوات خبرة" : "ans d'expérience"}</p>
              </motion.div>
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
                ✦ {t("about.story")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">{t("about.story")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("about.story.text")}</p>
              <div className="space-y-3">
                {commitments.map(({ icon: Icon, fr, ar }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-card-foreground">{lang === "ar" ? ar : fr}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="lg:order-2 relative">
              <img src={aboutMission} alt="Notre mission" className="rounded-2xl w-full h-[400px] object-cover shadow-xl" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-5 -left-5 bg-card rounded-xl px-6 py-4 shadow-xl hidden sm:block"
              >
                <p className="text-2xl font-extrabold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">{lang === "ar" ? "رضا مضمون" : "Satisfaction"}</p>
              </motion.div>
            </div>
            <div className="lg:order-1">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
                ✦ {t("about.mission")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">{t("about.mission")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("about.mission.text")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
              ✦ {lang === "ar" ? "مسيرتنا" : "Notre parcours"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {lang === "ar" ? "المحطات الرئيسية" : "Les étapes clés"}
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border sm:-translate-x-px" />
            {timeline.map(({ year, fr, ar }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-10 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="hidden sm:block sm:w-1/2" />
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 shadow" />
                {/* Content */}
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-10" : "sm:pl-10"}`}>
                  <div className="bg-card rounded-xl p-5 card-shadow">
                    <span className="text-xs font-bold text-primary">{year}</span>
                    <p className="text-sm font-medium text-card-foreground mt-1">{lang === "ar" ? ar : fr}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
              ✦ {t("about.values")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("about.values")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, fr, ar, descFr, descAr }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl p-7 card-shadow hover:card-shadow-hover transition-all duration-300 text-center h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{lang === "ar" ? ar : fr}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{lang === "ar" ? descAr : descFr}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
              ✦ {lang === "ar" ? "فريقنا" : "Notre équipe"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {lang === "ar" ? "الأشخاص وراء النجاح" : "Les visages derrière le succès"}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, image }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 text-center"
                >
                  <img src={image} alt={name} className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg object-cover" />
                  <h3 className="font-semibold text-card-foreground">{name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{role[lang]}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default About;
