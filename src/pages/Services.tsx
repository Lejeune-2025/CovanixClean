import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Home, Building2, SprayCan, HardHat, CheckCircle2, ArrowRight, Clock, Shield, Sparkles, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import serviceResidentialFull from "@/assets/service-residential-full.jpg";
import serviceOfficeFull from "@/assets/service-office-full.jpg";
import serviceDeepFull from "@/assets/service-deep-full.jpg";
import serviceConstructionFull from "@/assets/service-construction-full.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Home,
    key: "residential",
    image: serviceResidentialFull,
    price: { fr: "À partir de 1500 DH", ar: "ابتداءً من 1500 درهم" },
    badge: { fr: "Populaire", ar: "الأكثر طلبًا" },
    features: {
      fr: [
        "Nettoyage complet de la maison",
        "Cuisine et salle de bain",
        "Dépoussiérage et aspiration",
        "Nettoyage des vitres",
        "Repassage et rangement",
        "Désinfection des surfaces",
      ],
      ar: [
        "تنظيف شامل للمنزل",
        "المطبخ والحمام",
        "إزالة الغبار والكنس",
        "تنظيف النوافذ",
        "الكي والترتيب",
        "تعقيم الأسطح",
      ],
    },
    details: {
      fr: "Notre service de nettoyage résidentiel est conçu pour offrir à votre foyer un environnement sain et accueillant. Nos équipes professionnelles utilisent des produits écologiques et des techniques modernes pour garantir un résultat impeccable dans chaque pièce de votre maison.",
      ar: "خدمة تنظيف المنازل لدينا مصممة لتوفير بيئة صحية ومرحبة لمنزلك. تستخدم فرقنا المحترفة منتجات صديقة للبيئة وتقنيات حديثة لضمان نتيجة لا تشوبها شائبة في كل غرفة.",
    },
  },
  {
    icon: Building2,
    key: "office",
    image: serviceOfficeFull,
    price: { fr: "À partir de 1800 DH", ar: "ابتداءً من 1800 درهم" },
    badge: null,
    features: {
      fr: [
        "Nettoyage quotidien des bureaux",
        "Sanitaires et espaces communs",
        "Entretien des sols",
        "Gestion des déchets",
        "Nettoyage des vitres et façades",
        "Désinfection des postes de travail",
      ],
      ar: [
        "تنظيف يومي للمكاتب",
        "المرافق الصحية والمساحات المشتركة",
        "صيانة الأرضيات",
        "إدارة النفايات",
        "تنظيف النوافذ والواجهات",
        "تعقيم محطات العمل",
      ],
    },
    details: {
      fr: "Un environnement de travail propre booste la productivité et le bien-être de vos collaborateurs. Nous proposons des formules flexibles adaptées aux horaires de votre entreprise, avec des interventions discrètes et efficaces.",
      ar: "بيئة عمل نظيفة تعزز إنتاجية ورفاهية موظفيك. نقدم خططًا مرنة تتناسب مع جدول شركتك، مع تدخلات سرية وفعالة.",
    },
  },
  {
    icon: SprayCan,
    key: "deep",
    image: serviceDeepFull,
    price: { fr: "À partir de 2500 DH", ar: "ابتداءً من 2500 درهم" },
    badge: { fr: "Recommandé", ar: "موصى به" },
    features: {
      fr: [
        "Nettoyage intensif des surfaces",
        "Désinfection complète",
        "Traitement des tapis et moquettes",
        "Nettoyage des conduits d'aération",
        "Détartrage et dégraissage",
        "Traitement anti-acariens",
      ],
      ar: [
        "تنظيف مكثف للأسطح",
        "تعقيم كامل",
        "معالجة السجاد والموكيت",
        "تنظيف مجاري التهوية",
        "إزالة الترسبات والشحوم",
        "معالجة مضادة للعث",
      ],
    },
    details: {
      fr: "Le nettoyage en profondeur va au-delà du nettoyage classique. Nous ciblons la saleté incrustée, les bactéries et les allergènes pour redonner à vos espaces un aspect neuf et une hygiène irréprochable.",
      ar: "التنظيف العميق يتجاوز التنظيف العادي. نستهدف الأوساخ المتراكمة والبكتيريا والمسببات للحساسية لإعادة مظهر جديد ونظافة لا تشوبها شائبة لمساحاتكم.",
    },
  },
  {
    icon: HardHat,
    key: "construction",
    image: serviceConstructionFull,
    price: { fr: "Sur devis", ar: "حسب العرض" },
    badge: null,
    features: {
      fr: [
        "Enlèvement des débris",
        "Nettoyage des surfaces neuves",
        "Élimination de la poussière fine",
        "Préparation à l'emménagement",
        "Nettoyage des joints et carrelages",
        "Polissage des sols",
      ],
      ar: [
        "إزالة الأنقاض",
        "تنظيف الأسطح الجديدة",
        "إزالة الغبار الدقيق",
        "التحضير للانتقال",
        "تنظيف الفواصل والبلاط",
        "تلميع الأرضيات",
      ],
    },
    details: {
      fr: "Après des travaux de construction ou de rénovation, la poussière et les résidus sont partout. Notre équipe spécialisée intervient pour éliminer chaque trace et préparer vos locaux pour une utilisation immédiate.",
      ar: "بعد أعمال البناء أو التجديد، يكون الغبار والبقايا في كل مكان. يتدخل فريقنا المتخصص لإزالة كل أثر وتحضير مبانيكم للاستخدام الفوري.",
    },
  },
];

const guarantees = [
  { icon: Shield, fr: "Satisfaction garantie ou reprise gratuite", ar: "رضا مضمون أو إعادة مجانية" },
  { icon: Star, fr: "Produits 100% écologiques et certifiés", ar: "منتجات 100% بيئية ومعتمدة" },
  { icon: Clock, fr: "Réponse et devis sous 24 heures", ar: "رد وعرض سعر خلال 24 ساعة" },
  { icon: Zap, fr: "Équipes formées et assurées", ar: "فرق مدربة ومؤمنة" },
];

const Services = () => {
  const { t, lang } = useLanguage();

  return (
    <main className="pt-24">
      {/* Hero banner */}
      <section className="relative h-[350px] overflow-hidden">
        <img src={heroBg} alt="Nos services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/70 to-foreground/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4"
            >
              ✦ {lang === "ar" ? "خدماتنا المتخصصة" : "Nos services spécialisés"}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-4"
            >
              {t("services.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
            >
              {t("services.subtitle")}
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path d="M0 40L60 34C120 28 240 16 360 12C480 8 600 12 720 16C840 20 960 24 1080 22C1200 20 1320 12 1380 8L1440 4V40H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Guarantees bar */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {guarantees.map(({ icon: Icon, fr, ar }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 card-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-card-foreground">{lang === "ar" ? ar : fr}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map(({ icon: Icon, key, image, features, details, price, badge }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-500 flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative overflow-hidden group">
                <img
                  src={image}
                  alt={t(`services.${key}`)}
                  className="w-full h-72 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-hero-gradient backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {badge && (
                    <span className="px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-bold backdrop-blur-sm">
                      {badge[lang]}
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 rounded-lg bg-card/90 backdrop-blur-md text-sm font-bold text-card-foreground shadow-lg">
                    {price[lang]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-3">
                  {t(`services.${key}`)}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {details[lang]}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {features[lang].map((f, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.05 }}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </motion.div>
                  ))}
                </div>
                <Link to="/quote">
                  <Button className="bg-hero-gradient text-primary-foreground hover:opacity-90 transition-all w-fit group shadow-md">
                    {t("hero.cta")}
                    <ArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Services;
