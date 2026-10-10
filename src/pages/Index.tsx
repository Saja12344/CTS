import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ProductThinkingSection from "@/components/ProductThinkingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Language, siteContent } from "@/content/site";

const STORAGE_KEY = "cts-language";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "ar";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "ar" || stored === "en") return stored;
  return "ar";
};

const Index = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const content = siteContent[language];
  const dir = language === "ar" ? "rtl" : "ltr";

  const handleLanguageChange = (next: Language) => {
    setLanguage(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    document.title = content.seo.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = content.seo.description;
    }
  }, [content.seo.description, content.seo.title, dir, language]);

  return (
    <div dir={dir} className="bg-brand-charcoal text-brand-offwhite">
      <Navbar content={content.nav} language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <HeroSection content={content.hero} language={language} />
        <ServicesSection content={content.build} />
        <HowWeWorkSection content={content.approach} />
        <ProductThinkingSection content={content.thinking} />
        <ContactSection content={content.contact} language={language} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
};

export default Index;
