import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const { t } = useLanguage();
  const faqs = [1, 2, 3, 4];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            {t("faq.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t("faq.subtitle")}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((n) => (
              <AccordionItem key={n} value={`q${n}`} className="bg-card rounded-xl px-6 card-shadow border-none">
                <AccordionTrigger className="text-sm font-medium text-card-foreground hover:no-underline">
                  {t(`faq.q${n}`)}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {t(`faq.a${n}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
