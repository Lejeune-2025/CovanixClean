import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Sparkles, Globe, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
    } else if (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
    }
  }, []);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Covanix Clean Logo" className="h-12 w-auto rounded-full" />
          </Link>

          {/* Desktop Nav & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 bg-card border rounded-lg p-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              
              <button
                onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Globe className="w-4 h-4" />
                {lang === "fr" ? "العربية" : "Français"}
              </button>
              <Button asChild className="bg-hero-gradient text-primary-foreground hover:opacity-90 transition-opacity shadow-md">
                <Link to="/quote">
                  {t("nav.quote")}
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              className="p-2 rounded-lg hover:bg-muted"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted"
                >
                  <Globe className="w-4 h-4" />
                  {lang === "fr" ? "العربية" : "Français"}
                </button>
              </div>
              <Button className="w-full bg-hero-gradient text-primary-foreground" asChild>
                <Link to="/quote" onClick={() => setIsOpen(false)}>
                  {t("nav.quote")}
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
