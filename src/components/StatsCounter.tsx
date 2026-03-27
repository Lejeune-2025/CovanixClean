import { useLanguage } from "@/contexts/LanguageContext";
import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Building2, Sparkles, CalendarCheck } from "lucide-react";

const stats = [
  { icon: Users, value: 30, suffix: "+", keyFr: "Clients satisfaits", keyAr: "عميل راضٍ" },
  { icon: Building2, value: 5, suffix: "+", keyFr: "Entreprises partenaires", keyAr: "شركة شريكة" },
  { icon: Sparkles, value: 2, suffix: "+", keyFr: "Années d'expérience", keyAr: "سنوات خبرة" },
  { icon: CalendarCheck, value: 30, suffix: "+", keyFr: "Interventions réalisées", keyAr: "خدمة منجزة" },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Durée dynamique : plus rapide pour les petits chiffres
    const duration = value < 10 ? 1 : 2;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const controls = animate(0, value, {
            duration: duration,
            ease: "easeOut",
            onUpdate: (v) => setDisplayed(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.1 } // Seuil réduit pour déclencher plus facilement
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold text-primary tabular-nums">
      {displayed}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, suffix, keyFr, keyAr }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <AnimatedNumber value={value} suffix={suffix} />
              <p className="text-sm text-muted-foreground mt-1 font-medium">
                {lang === "ar" ? keyAr : keyFr}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
