import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "ar";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.home": { fr: "Accueil", ar: "الرئيسية" },
  "nav.services": { fr: "Services", ar: "خدماتنا" },
  "nav.about": { fr: "À propos", ar: "من نحن" },
  "nav.contact": { fr: "Contact", ar: "اتصل بنا" },
  "nav.quote": { fr: "Prendre RDV", ar: "تحديد موعد" },

  // Hero
  "hero.title": { fr: "Nettoyage professionnel de confiance", ar: "تنظيف احترافي موثوق" },
  "hero.subtitle": { fr: "Des espaces impeccables, un service irréprochable. Nous transformons vos locaux avec expertise et professionnalisme.", ar: "مساحات نظيفة، خدمة لا تشوبها شائبة. نحوّل أماكنكم بخبرة واحترافية." },
  "hero.cta": { fr: "Prendre rendez-vous", ar: "احجز موعدك" },
  "hero.cta2": { fr: "Découvrir nos services", ar: "اكتشف خدماتنا" },
  "hero.badge": { fr: "⭐ +500 clients satisfaits", ar: "⭐ +500 عميل راضٍ" },

  // Services
  "services.title": { fr: "Nos Services", ar: "خدماتنا" },
  "services.subtitle": { fr: "Des solutions de nettoyage adaptées à chaque besoin", ar: "حلول تنظيف مناسبة لكل احتياج" },
  "services.residential": { fr: "Nettoyage Résidentiel", ar: "تنظيف المنازل" },
  "services.residential.desc": { fr: "Un intérieur propre et sain pour votre famille. Nettoyage régulier ou ponctuel. À partir de 1500 Dh.", ar: "منزل نظيف وصحي لعائلتك. تنظيف منتظم أو عند الطلب. ابتداءً من 1500 د.م." },
  "services.office": { fr: "Nettoyage de Bureaux", ar: "تنظيف المكاتب" },
  "services.office.desc": { fr: "Des espaces de travail impeccables pour une productivité optimale. À partir de 1800 Dh.", ar: "مساحات عمل نظيفة لإنتاجية مثالية. ابتداءً من 1800 د.م." },
  "services.deep": { fr: "Nettoyage en Profondeur", ar: "تنظيف عميق" },
  "services.deep.desc": { fr: "Un nettoyage intensif pour redonner vie à vos espaces. À partir de 2500 Dh.", ar: "تنظيف مكثف لإعادة الحياة لمساحاتكم. ابتداءً من 2500 د.م." },
  "services.construction": { fr: "Nettoyage Après Chantier", ar: "تنظيف بعد البناء" },
  "services.construction.desc": { fr: "Élimination complète des résidus de construction.", ar: "إزالة كاملة لبقايا البناء." },
  "services.learnMore": { fr: "En savoir plus", ar: "اعرف المزيد" },

  // Why choose us
  "why.title": { fr: "Pourquoi Nous Choisir", ar: "لماذا تختارنا" },
  "why.subtitle": { fr: "La qualité et la confiance au cœur de chaque intervention", ar: "الجودة والثقة في صميم كل خدمة" },
  "why.experience": { fr: "2+ ans d'expérience", ar: "+10 سنوات خبرة" },
  "why.experience.desc": { fr: "Une expertise éprouvée dans le secteur du nettoyage professionnel.", ar: "خبرة مثبتة في قطاع التنظيف المهني." },
  "why.eco": { fr: "Produits écologiques", ar: "منتجات صديقة للبيئة" },
  "why.eco.desc": { fr: "Nous utilisons des produits respectueux de l'environnement et de votre santé.", ar: "نستخدم منتجات صديقة للبيئة وصحتكم." },
  "why.team": { fr: "Équipe qualifiée", ar: "فريق مؤهل" },
  "why.team.desc": { fr: "Des professionnels formés et assurés pour un service impeccable.", ar: "محترفون مدربون ومؤمنون لخدمة لا تشوبها شائبة." },
  "why.satisfaction": { fr: "Satisfaction garantie", ar: "رضا مضمون" },
  "why.satisfaction.desc": { fr: "Nous ne sommes satisfaits que lorsque vous l'êtes.", ar: "لا نرضى إلا عندما ترضون." },

  // Testimonials
  "testimonials.title": { fr: "Ce que disent nos clients", ar: "ماذا يقول عملاؤنا" },
  "testimonials.subtitle": { fr: "La satisfaction de nos clients est notre meilleure publicité", ar: "رضا عملائنا هو أفضل إعلان لنا" },

  // Before/After
  "ba.title": { fr: "Avant / Après", ar: "قبل / بعد" },
  "ba.subtitle": { fr: "Découvrez la transformation de nos interventions", ar: "اكتشفوا تحوّل خدماتنا" },
  "ba.before": { fr: "Avant", ar: "قبل" },
  "ba.after": { fr: "Après", ar: "بعد" },

  // FAQ
  "faq.title": { fr: "Questions Fréquentes", ar: "الأسئلة الشائعة" },
  "faq.subtitle": { fr: "Tout ce que vous devez savoir sur nos services", ar: "كل ما تحتاج معرفته عن خدماتنا" },
  "faq.q1": { fr: "Quels types de nettoyage proposez-vous ?", ar: "ما هي أنواع التنظيف التي تقدمونها؟" },
  "faq.a1": { fr: "Nous proposons le nettoyage résidentiel, de bureaux, en profondeur et après chantier. Chaque service est personnalisé selon vos besoins.", ar: "نقدم تنظيف المنازل والمكاتب والتنظيف العميق وبعد البناء. كل خدمة مخصصة حسب احتياجاتكم." },
  "faq.q2": { fr: "Vos produits sont-ils écologiques ?", ar: "هل منتجاتكم صديقة للبيئة؟" },
  "faq.a2": { fr: "Oui, nous utilisons exclusivement des produits écologiques et non toxiques, sans danger pour les enfants et les animaux.", ar: "نعم، نستخدم حصريًا منتجات صديقة للبيئة وغير سامة، آمنة للأطفال والحيوانات." },
  "faq.q3": { fr: "Comment obtenir un devis ?", ar: "كيف أحصل على عرض سعر؟" },
  "faq.a3": { fr: "Remplissez notre formulaire en ligne ou appelez-nous pour convenir d'un rendez-vous. Une visite sur site est nécessaire pour établir un devis précis.", ar: "املأ نموذجنا عبر الإنترنت أو اتصل بنا لتحديد موعد. زيارة الموقع ضرورية لتقديم عرض سعر دقيق." },
  "faq.q4": { fr: "Êtes-vous assurés ?", ar: "هل أنتم مؤمنون؟" },
  "faq.a4": { fr: "Oui, notre entreprise et tous nos employés sont entièrement assurés pour votre tranquillité d'esprit.", ar: "نعم، شركتنا وجميع موظفينا مؤمنون بالكامل لراحة بالكم." },

  // Contact
  "contact.title": { fr: "Contactez-nous", ar: "اتصل بنا" },
  "contact.subtitle": { fr: "Nous sommes à votre disposition pour toute demande", ar: "نحن في خدمتكم لأي استفسار" },
  "contact.name": { fr: "Nom complet", ar: "الاسم الكامل" },
  "contact.email": { fr: "Email", ar: "البريد الإلكتروني" },
  "contact.phone": { fr: "Téléphone", ar: "الهاتف" },
  "contact.message": { fr: "Message", ar: "الرسالة" },
  "contact.send": { fr: "Envoyer le message", ar: "إرسال الرسالة" },
  "contact.whatsapp": { fr: "Discuter sur WhatsApp", ar: "تواصل عبر واتساب" },
  "contact.call": { fr: "Appelez-nous", ar: "اتصل بنا" },
  "contact.address": { fr: "Adresse", ar: "العنوان" },

  // Quote
  "quote.title": { fr: "Prenez rendez-vous pour votre devis", ar: "حدد موعدًا لعرض السعر الخاص بك" },
  "quote.subtitle": { fr: "Un devis précis nécessite une visite. Remplissez le formulaire pour qu\'un expert vous contacte et fixe un rendez-vous.", ar: "عرض السعر الدقيق يتطلب زيارة. املأ النموذج ليتصل بك خبير ويحدد موعدًا." },
  "quote.service": { fr: "Type de service", ar: "نوع الخدمة" },
  "quote.surface": { fr: "Surface (m²)", ar: "المساحة (م²)" },
  "quote.location": { fr: "Localisation (Lien GPS / Adresse)", ar: "الموقع (رابط GPS / العنوان)" },
  "quote.date": { fr: "Date souhaitée pour la visite", ar: "التاريخ المطلوب للزيارة" },
  "quote.details": { fr: "Détails supplémentaires", ar: "تفاصيل إضافية" },
  "quote.submit": { fr: "Confirmer le rendez-vous", ar: "تأكيد الموعد" },
  "quote.select": { fr: "Sélectionner un service", ar: "اختر خدمة" },

  // About
  "about.title": { fr: "À Propos de Nous", ar: "من نحن" },
  "about.subtitle": { fr: "Votre partenaire de confiance pour des espaces impeccables", ar: "شريككم الموثوق لمساحات نظيفة" },
  "about.story": { fr: "Notre Histoire", ar: "قصتنا" },
  "about.story.text": { fr: "Depuis plus de 2 ans, nous accompagnons les particuliers et les entreprises dans l'entretien de leurs espaces. Notre passion pour la propreté et notre engagement envers l'excellence nous ont permis de devenir une référence dans le secteur.", ar: "منذ أكثر من 10 سنوات، نرافق الأفراد والشركات في صيانة مساحاتهم. شغفنا بالنظافة والتزامنا بالتميز جعلنا مرجعًا في هذا القطاع." },
  "about.mission": { fr: "Notre Mission", ar: "مهمتنا" },
  "about.mission.text": { fr: "Offrir des services de nettoyage de qualité supérieure tout en respectant l'environnement et en garantissant la satisfaction totale de nos clients.", ar: "تقديم خدمات تنظيف عالية الجودة مع احترام البيئة وضمان رضا عملائنا التام." },
  "about.values": { fr: "Nos Valeurs", ar: "قيمنا" },

  // Footer
  "footer.description": { fr: "Services de nettoyage professionnel pour particuliers et entreprises. Qualité, fiabilité et satisfaction garantie.", ar: "خدمات تنظيف احترافية للأفراد والشركات. جودة وموثوقية ورضا مضمون." },
  "footer.quickLinks": { fr: "Liens Rapides", ar: "روابط سريعة" },
  "footer.legalNotice": { fr: "Mentions légales", ar: "الإشعارات القانونية" },
  "footer.contactInfo": { fr: "Contact", ar: "اتصل بنا" },
  "footer.hours": { fr: "Horaires", ar: "أوقات العمل" },
  "footer.hours.weekday": { fr: "Lun - Ven : 8h - 18h", ar: "الاثنين - الجمعة: 8ص - 6م" },
  "footer.hours.weekend": { fr: "Sam : 9h - 14h", ar: "السبت: 9ص - 2م" },
  "footer.rights": { fr: "Tous droits réservés.", ar: "جميع الحقوق محفوظة." },

  // Legal notice
  "legal.title": { fr: "Mentions Légales", ar: "الإشعارات القانونية" },
  "legal.publisher": { fr: "Éditeur du site", ar: "ناشر الموقع" },
  "legal.companyNameLabel": { fr: "Nom de l'entreprise :", ar: "اسم الشركة:" },
  "legal.addressLabel": { fr: "Adresse :", ar: "العنوان:" },
  "legal.phoneLabel": { fr: "Téléphone :", ar: "الهاتف:" },
  "legal.emailLabel": { fr: "Email :", ar: "البريد الإلكتروني:" },
  "legal.hosting": { fr: "Hébergement", ar: "الاستضافة" },
  "legal.hostLabel": { fr: "Hébergeur :", ar: "المستضيف:" },
  "legal.hostValue": { fr: "Vercel", ar: "فيرسل" },
  "legal.ip": { fr: "Propriété intellectuelle", ar: "الملكية الفكرية" },
  "legal.ip.text": {
    fr: "L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.",
    ar: "يخضع كامل هذا الموقع للتشريعات المغربية والدولية المتعلقة بحقوق النشر والملكية الفكرية. جميع حقوق إعادة الإنتاج محفوظة، بما في ذلك الوثائق القابلة للتنزيل والتمثيلات الأيقونية والفوتوغرافية."
  },
  "legal.personalData": { fr: "Données personnelles", ar: "البيانات الشخصية" },
  "legal.personalData.text": {
    fr: "Les informations recueillies vous concernant sont indispensables pour répondre à vos demandes d'information et pour vous envoyer la Newsletter (lettre d'information). Elles sont exclusivement destinées à Covanix Clean. Vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent.",
    ar: "المعلومات التي نجمعها عنكم ضرورية للرد على طلبات المعلومات الخاصة بكم ولإرسال النشرة الإخبارية. وهي مخصصة حصريا لشركة Covanix Clean. لديكم الحق في الوصول إلى بياناتكم وتعديلها وتصحيحها وحذفها."
  },
  "legal.analytics": { fr: "Mesure d'audience", ar: "قياس الجمهور" },
  "legal.analytics.text": {
    fr: "Ce site utilise Vercel Analytics et Vercel Speed Insights afin de mesurer la frequentation (pages visitees, volume de trafic, performances techniques) et d'ameliorer l'experience utilisateur. Ces donnees sont utilisees uniquement a des fins statistiques et d'optimisation du service.",
    ar: "يستخدم هذا الموقع Vercel Analytics وVercel Speed Insights لقياس عدد الزيارات (الصفحات التي تمت زيارتها، حجم حركة المرور، والأداء التقني) وتحسين تجربة المستخدم. يتم استخدام هذه البيانات فقط لأغراض إحصائية وتحسين الخدمة."
  },

  // Cookies banner
  "cookies.accept": { fr: "J'accepte", ar: "أوافق" },
  "cookies.decline": { fr: "Je refuse", ar: "أرفض" },
  "cookies.text": { fr: "Ce site utilise des cookies pour garantir la meilleure expérience utilisateur.", ar: "يستخدم هذا الموقع ملفات تعريف الارتباط لضمان أفضل تجربة للمستخدم." },
  "cookies.learnMore": { fr: "Pour en savoir plus sur l'utilisation des cookies, consultez nos", ar: "لمعرفة المزيد حول استخدام ملفات تعريف الارتباط، راجع" },

  // CTA
  "cta.title": { fr: "Prêt pour un espace impeccable ?", ar: "مستعد لمساحة نظيفة؟" },
  "cta.subtitle": { fr: "Contactez-nous dès maintenant et obtenez votre devis gratuit en moins de 24h.", ar: "تواصل معنا الآن واحصل على عرض سعر مجاني في أقل من 24 ساعة." },
  "cta.button": { fr: "Demander un devis gratuit", ar: "طلب عرض سعر مجاني" },

  // Trust
  "trust.certified": { fr: "Certifié", ar: "معتمد" },
  "trust.insured": { fr: "Assuré", ar: "مؤمن" },
  "trust.eco": { fr: "Écologique", ar: "صديق للبيئة" },
  "trust.available": { fr: "Disponible 7j/7", ar: "متاح 7/7" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("fr");

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translations[key][lang] || key;
  };

  const value = {
    lang,
    setLang,
    t,
    dir: (lang === "ar" ? "rtl" : "ltr") as "ltr" | "rtl",
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
