import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Covanix Clean Logo" className="h-12 w-auto rounded-full" />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">{t("footer.description")}</p>
            <div className="flex gap-3">
              {/*
                ↓↓↓ AJOUTEZ VOS LIENS DE RÉSEAUX SOCIAUX ICI ↓↓↓
              */}
              {[
                { Icon: Facebook, href: "#" }, // Remplacez "#" par votre lien Facebook
                { Icon: Instagram, href: "#" }, // Remplacez "#" par votre lien Instagram
                { Icon: Linkedin, href: "#" }, // Remplacez "#" par votre lien LinkedIn
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <div className="space-y-2.5">
              {[
                { to: "/", label: t("nav.home") },
                { to: "/services", label: t("nav.services") },
                { to: "/about", label: t("nav.about") },
                { to: "/contact", label: t("nav.contact") },
                { to: "/quote", label: t("nav.quote") },
                { to: "/legal-notice", label: t("footer.legalNotice") },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contactInfo")}</h4>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +212 779788196</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> moussagbamou6@gmail.com</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Casablanca, Maroc</div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.hours")}</h4>
            <div className="space-y-2.5 text-sm opacity-70">
              <p>{t("footer.hours.weekday")}</p>
              <p>{t("footer.hours.weekend")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Covanix Clean. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
