import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, ArrowRight, Home, Building2, Sparkles, HardHat, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import contactOffice from "@/assets/contact-office.jpg";

type Lang = "fr" | "ar";

const quoteSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  phone: z.string().regex(/^(?:\+212|0)([567])\d{8}$/, { message: "Numéro de téléphone marocain invalide." }),
  service: z.string({ required_error: "Veuillez sélectionner un service." }).min(1, { message: "Veuillez sélectionner un service." }),
  location: z.string().min(3, { message: "Veuillez entrer une adresse valide." }),
  surface: z.string().optional(),
  date: z.string().optional(),
  details: z.string().max(1000).optional(),
});

const Quote = () => {
  const { t, lang } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof quoteSchema>>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      surface: "",
      date: "",
      details: "",
    },
  });

  async function onSubmit(values: z.infer<typeof quoteSchema>) {
    setLoading(true);
    try {
      // Traduire la clé du service en libellé lisible
      const serviceLabel = t(`services.${values.service}`);
      
      const payload = {
        ...values, // 1. Copie tous les champs du formulaire (y compris la localisation)
        service: serviceLabel // 2. Remplace uniquement le champ "service" par sa version traduite
      };

      const res = await fetch("https://formspree.io/f/xbdabqae", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send message");

      toast({ title: "✅ Demande envoyée !", description: "Nous vous enverrons un devis détaillé sous 24h." });
      form.reset();
    } catch (error) {
      toast({ title: "❌ Erreur", description: "Une erreur s'est produite. Veuillez réessayer.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      toast({ title: "❌ Erreur", description: "La géolocalisation n'est pas supportée par votre navigateur.", variant: "destructive" });
      return;
    }

    toast({ title: "📍 Localisation en cours...", description: "Veuillez autoriser l'accès à votre position." });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        form.setValue("location", googleMapsLink);
        toast({ title: "✅ Position trouvée !", description: "Le lien GPS a été ajouté au formulaire." });
      },
      () => {
        toast({ title: "❌ Erreur", description: "Impossible de récupérer votre position. Veuillez entrer l'adresse manuellement.", variant: "destructive" });
      }
    );
  };

  return (
    <main className="pt-24">
      <section className="relative h-[300px] overflow-hidden mb-12">
        <img src={contactOffice} alt="Devis" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              {t("quote.title")}
            </motion.h1>
            <p className="text-lg text-white/90 max-w-lg mx-auto">{t("quote.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="bg-card rounded-xl p-8 card-shadow space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.name")}</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.email")}</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.phone")}</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="space-y-3 sm:col-span-2">
                          <FormLabel>{t("quote.service")}</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                              {[
                                { value: "residential", icon: Home, label: t("services.residential") },
                                { value: "office", icon: Building2, label: t("services.office") },
                                { value: "deep", icon: Sparkles, label: t("services.deep") },
                                { value: "construction", icon: HardHat, label: t("services.construction") },
                              ].map((item) => (
                                <FormItem key={item.value}>
                                  <FormControl>
                                    <RadioGroupItem value={item.value} className="peer sr-only" />
                                  </FormControl>
                                  <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all">
                                    <item.icon className="mb-3 h-6 w-6 text-muted-foreground" />
                                     <span className="text-sm font-medium text-center leading-tight">
                                       {item.label}
                                     </span>
                                   </FormLabel>
                                 </FormItem>
                               ))}
                             </RadioGroup>
                           </FormControl>
                           <FormMessage />
                         </FormItem>
                       )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("quote.location")}</FormLabel>
                          <div className="flex gap-2">
                            <FormControl>
                              <Input placeholder="Ex: https://maps.google.com/..." {...field} />
                            </FormControl>
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="icon" 
                              onClick={handleGetLocation}
                              title="Obtenir ma position actuelle"
                              className="shrink-0"
                            >
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="surface"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("quote.surface")} <span className="text-muted-foreground text-xs font-normal">(Optionnel)</span></FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("quote.date")}</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("quote.details")}</FormLabel>
                        <FormControl>
                          <Textarea rows={3} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" disabled={loading} className="w-full bg-hero-gradient text-primary-foreground hover:opacity-90">
                    {loading ? "Envoi en cours..." : t("quote.submit")}
                    {!loading && <ArrowRight className="w-4 h-4 ms-2" />}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Image Card */}
              <div className="bg-card rounded-2xl overflow-hidden card-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={contactOffice} 
                    alt="Contactez-nous" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white font-semibold text-lg">
                      {lang === "ar" ? "جاهزون لخدمتكم" : "Prêts à vous servir"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { fr: "Devis gratuit et sans engagement", ar: "عرض سعر مجاني وبدون التزام" },
                  { fr: "Réponse sous 24 heures", ar: "رد خلال 24 ساعة" },
                  { fr: "Prix transparents et compétitifs", ar: "أسعار شفافة وتنافسية" },
                  { fr: "Équipe qualifiée et assurée", ar: "فريق مؤهل ومؤمن" },
                  { fr: "Satisfaction garantie à 100%", ar: "رضا مضمون 100%" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-card rounded-xl p-4 card-shadow">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-card-foreground">{lang === "ar" ? item.ar : item.fr}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quote;
