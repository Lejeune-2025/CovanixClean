import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactOffice from "@/assets/contact-office.jpg";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  phone: z.string().regex(/^(?:\+212|0)([567])\d{8}$/, { message: "Numéro de téléphone marocain invalide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xbdabqae", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to send message");

      toast({ title: "✅ Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
      form.reset();
    } catch (error) {
      toast({ title: "❌ Erreur", description: "Une erreur s'est produite. Veuillez réessayer.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-24">
      {/* Hero banner */}
      <section className="relative h-[300px] overflow-hidden">
        <img src={contactOffice} alt="Contactez Covanix Clean" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              {t("contact.title")}
            </motion.h1>
            <p className="text-lg text-white/80 max-w-lg mx-auto">{t("contact.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.form
              onSubmit={form.handleSubmit(onSubmit)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card rounded-xl p-8 card-shadow space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-card-foreground mb-1.5 block">{t("contact.name")}</label>
                <Input id="name" {...form.register("name")} />
                {form.formState.errors.name && <p className="text-xs text-destructive mt-1">{form.formState.errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-card-foreground mb-1.5 block">{t("contact.email")}</label>
                <Input id="email" type="email" {...form.register("email")} />
                {form.formState.errors.email && <p className="text-xs text-destructive mt-1">{form.formState.errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-card-foreground mb-1.5 block">{t("contact.phone")}</label>
                <Input id="phone" {...form.register("phone")} />
                {form.formState.errors.phone && <p className="text-xs text-destructive mt-1">{form.formState.errors.phone.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-card-foreground mb-1.5 block">{t("contact.message")}</label>
                <Textarea id="message" rows={4} {...form.register("message")} />
                {form.formState.errors.message && <p className="text-xs text-destructive mt-1">{form.formState.errors.message.message}</p>}
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-hero-gradient text-primary-foreground hover:opacity-90">
                {loading ? "Envoi en cours..." : t("contact.send")}
              </Button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {[
                { icon: Phone, label: t("contact.call"), value: "+212 779788196" },
                { icon: Mail, label: "Email", value: "moussagbamou6@gmail.com" },
                { icon: MapPin, label: t("contact.address"), value: "Casablanca, Maroc" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 bg-card rounded-xl p-5 card-shadow">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{label}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/message/32RFLLCIAM2IL1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground mt-2">
                  <MessageCircle className="w-4 h-4 me-2" />
                  {t("contact.whatsapp")}
                </Button>
              </a>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden h-64">
                <iframe
                  title="Covanix Clean - Casablanca"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72691874782!2d-7.6824!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
