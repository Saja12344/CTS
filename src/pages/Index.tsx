import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ProductThinkingSection from "@/components/ProductThinkingSection";
import ServicesSection from "@/components/ServicesSection";
import { useSiteLanguage } from "@/context/LanguageContext";
import AboutPage from "@/pages/AboutPage";

const Index = () => {
  const { content, language } = useSiteLanguage();

  return (
    <>
      <HeroSection content={content.hero} language={language} />
      <ServicesSection />
      <HowWeWorkSection content={content.approach} />
      <AboutPage />
      <ProductThinkingSection content={content.thinking} />
      <FaqSection />
      <ContactSection />
      {/* TODO: فعّل قسم الأعمال بعد موافقة عميلة "ترددي"
      <WorkSection />
      */}
    </>
  );
};

export default Index;
