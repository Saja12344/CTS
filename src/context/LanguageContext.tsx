import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { siteContent, type Language, type SiteContent } from "@/content/site";

const STORAGE_KEY = "cts-language";

type LanguageContextValue = {
  language: Language;
  content: SiteContent;
  dir: "rtl" | "ltr";
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const readLanguage = (search: string): Language => {
  const query = new URLSearchParams(search).get("lang");
  if (query === "en" || query === "ar") return query;
  if (typeof window === "undefined") return "ar";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "ar" ? stored : "ar";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [params, setParams] = useSearchParams();
  const [language, setLanguageState] = useState<Language>(() => readLanguage(window.location.search));

  const setLanguage = useCallback(
    (next: Language) => {
      setLanguageState(next);
      window.localStorage.setItem(STORAGE_KEY, next);
      const nextParams = new URLSearchParams(params);
      if (next === "en") nextParams.set("lang", "en");
      else nextParams.delete("lang");
      setParams(nextParams, { replace: true });
    },
    [params, setParams],
  );

  const dir: "rtl" | "ltr" = language === "ar" ? "rtl" : "ltr";
  const content = siteContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [dir, language]);

  const value = useMemo(
    () => ({ language, content, dir, setLanguage }),
    [content, dir, language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useSiteLanguage = () => {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useSiteLanguage must be used within LanguageProvider");
  }
  return value;
};
