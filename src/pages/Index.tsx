import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Language, siteContent } from "@/content/site";

const Index = () => {
  const [language, setLanguage] = useState<Language>("ar");
  const content = siteContent[language];
  const dir = language === "ar" ? "rtl" : "ltr";

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
    <div dir={dir} className="font-arabic">
      <Navbar content={content.nav} language={language} onLanguageChange={setLanguage} />
      <HeroSection content={content.hero} language={language} />
      <ServicesSection content={content.services} />
      <PricingSection content={content.pricing} language={language} />
      <WhyUsSection content={content.why} />
      <ContactSection content={content.contact} />
      <Footer content={content.footer} language={language} />
    </div>
  );
};

export default Index;
