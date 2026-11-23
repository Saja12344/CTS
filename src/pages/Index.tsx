import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ProductThinkingSection from "@/components/ProductThinkingSection";
import SectionReveal from "@/components/SectionReveal";
import ServicesSection from "@/components/ServicesSection";
import { useSiteLanguage } from "@/context/LanguageContext";
import AboutPage from "@/pages/AboutPage";

const Index = () => {
  const { content, language } = useSiteLanguage();

  return (
    <>
      <HeroSection content={content.hero} language={language} />
      <SectionReveal>
        <ServicesSection />
      </SectionReveal>
      <SectionReveal>
        <HowWeWorkSection content={content.approach} />
      </SectionReveal>
      <SectionReveal>
        <AboutPage />
      </SectionReveal>
      <SectionReveal>
        <ProductThinkingSection content={content.thinking} />
      </SectionReveal>
      <SectionReveal>
        <FaqSection />
      </SectionReveal>
      <SectionReveal>
        <ContactSection />
      </SectionReveal>
      {/* TODO: فعّل قسم الأعمال بعد موافقة عميلة "ترددي"
      <WorkSection />
      */}
    </>
  );
};

export default Index;
