import ServicesSection from "@/components/ServicesSection";
import { useSiteLanguage } from "@/context/LanguageContext";

const BuildPage = () => {
  const { content } = useSiteLanguage();
  return <ServicesSection content={content.build} />;
};

export default BuildPage;
