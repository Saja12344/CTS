import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProblemsSection from "@/components/ProblemsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WorkSection from "@/components/WorkSection";
import WhyUsSection from "@/components/WhyUsSection";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FinalCtaSection from "@/components/FinalCtaSection";
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
        <ServicesSection content={content.services} language={language} />
        <ProblemsSection content={content.problems} />
        <HowWeWorkSection content={content.process} />
        <WorkSection content={content.work} />
        <WhyUsSection content={content.why} />
        <IndustriesSection content={content.industries} />
        <AboutSection content={content.about} />
        <ContactSection content={content.contact} />
        <FinalCtaSection content={content.finalCta} />
      </main>
      <Footer content={content.footer} language={language} />
    </div>
  );
};

export default Index;
