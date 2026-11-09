import ProductThinkingSection from "@/components/ProductThinkingSection";
import { useSiteLanguage } from "@/context/LanguageContext";

const ThinkingPage = () => {
  const { content } = useSiteLanguage();
  return <ProductThinkingSection content={content.thinking} />;
};

export default ThinkingPage;
