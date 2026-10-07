import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProblemsSection from "@/components/ProblemsSection";
import WorkSection from "@/components/WorkSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhyUsSection from "@/components/WhyUsSection";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
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
    <div dir={dir} className="font-sans">
      <Navbar content={content.nav} language={language} onLanguageChange={setLanguage} />
      <main>
        <HeroSection content={content.hero} language={language} />
        <ServicesSection content={content.services} />
        <ProblemsSection content={content.problems} />
        <WorkSection content={content.work} />
        <HowWeWorkSection content={content.process} />
        <WhyUsSection content={content.why} />
        <AboutSection content={content.about} />
        <IndustriesSection content={content.audience} />
        <ContactSection content={content.contact} />
      </main>
      <Footer content={content.footer} language={language} />
    </div>
  );
};

export default Index;
