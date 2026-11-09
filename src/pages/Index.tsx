import HeroSection from "@/components/HeroSection";
import { useSiteLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { content, language } = useSiteLanguage();

  return (
    <HeroSection content={content.hero} language={language} />
  );
};

export default Index;
