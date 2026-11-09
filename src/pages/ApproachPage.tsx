import HowWeWorkSection from "@/components/HowWeWorkSection";
import { useSiteLanguage } from "@/context/LanguageContext";

const ApproachPage = () => {
  const { content } = useSiteLanguage();
  return <HowWeWorkSection content={content.approach} />;
};

export default ApproachPage;
