import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CookieConsent from "react-cookie-consent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import LegalNotice from "./pages/LegalNotice";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/CovanixClean" future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <LanguageProvider>
          <ScrollToTop />
          <div className="overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <CookieConsent
            location="bottom"
            buttonText="J'accepte"
            declineButtonText="Je refuse"
            cookieName="covanixCleanCookieConsent"
            style={{ background: "#1c1917", borderTop: "1px solid #2a2724" }}
            buttonStyle={{ background: "#a3e635", color: "#1c1917", fontSize: "14px", fontWeight: "bold", borderRadius: "6px" }}
            declineButtonStyle={{ background: "transparent", color: "#a1a1aa", fontSize: "14px", textDecoration: "underline" }}
            expires={150}
            enableDeclineButton
          >
            <span style={{ fontSize: "14px" }}>
              Ce site utilise des cookies pour garantir la meilleure expérience utilisateur. 
              Pour en savoir plus sur l'utilisation des cookies, consultez nos{" "}
              <Link to="/legal-notice" style={{ textDecoration: "underline", color: "#a3e635" }}>
                Mentions légales
              </Link>
              .
            </span>
          </CookieConsent>
          </div>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
