import ContactSection from "@/components/ContactSection";
import { useSiteLanguage } from "@/context/LanguageContext";

const ContactPage = () => {
  const { content, language } = useSiteLanguage();
  return <ContactSection content={content.contact} language={language} />;
};

export default ContactPage;
