import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeSalon from "@/assets/before-salon.jpg";
import afterSalon from "@/assets/after-salon.jpg";
import beforeOffice from "@/assets/before-office.jpg";
import afterOffice from "@/assets/after-office.jpg";

const pairs = [
  { before: beforeKitchen, after: afterKitchen, label: "fr:Cuisine|ar:مطبخ" },
  { before: beforeSalon, after: afterSalon, label: "fr:Salon|ar:صالون" },
  { before: beforeOffice, after: afterOffice, label: "fr:Bureau|ar:مكتب" },
];

const CompareSlider = ({ before, after, label }: { before: string; after: string; label: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none card-shadow"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* After (full background) */}
      <img src={after} alt="Après" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={before}
          alt="Avant"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100vw", maxWidth: "none" }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground shadow-lg z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center shadow-xl">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
            <path d="M7 4L3 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-destructive/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md z-20 pointer-events-none">
        Avant
      </span>
      <span className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md z-20 pointer-events-none">
        Après
      </span>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-3 z-20 pointer-events-none">
        <p className="text-sm font-semibold text-primary-foreground text-center">{label}</p>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const { t, lang } = useLanguage();
  const getLang = (s: string) => s.split("|").find((p) => p.startsWith(lang + ":"))?.slice(3) || s;

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
            ✦ {t("ba.title")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            {t("ba.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t("ba.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pairs.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <CompareSlider
                before={pair.before}
                after={pair.after}
                label={getLang(pair.label)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
