import type { Language } from "@/content/site";

const SITE = "https://corets.vercel.app";

const setMeta = (selector: string, create: () => HTMLMetaElement, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  element.content = content;
};

export const pageUrl = (pathname: string, language: Language) => {
  const url = new URL(pathname === "/" ? "/" : pathname, SITE);
  if (language === "en") url.searchParams.set("lang", "en");
  return url.toString();
};

export const applyPageSeo = ({
  language,
  pathname,
  title,
  description,
}: {
  language: Language;
  pathname: string;
  title: string;
  description: string;
}) => {
  const url = pageUrl(pathname, language);
  document.title = title;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  setMeta('meta[name="description"]', () => {
    const meta = document.createElement("meta");
    meta.name = "description";
    return meta;
  }, description);
  setMeta('meta[property="og:title"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:title");
    return meta;
  }, title);
  setMeta('meta[property="og:description"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:description");
    return meta;
  }, description);
  setMeta('meta[property="og:url"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:url");
    return meta;
  }, url);
  setMeta('meta[property="og:locale"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:locale");
    return meta;
  }, language === "ar" ? "ar_SA" : "en_US");
  setMeta('meta[name="twitter:title"]', () => {
    const meta = document.createElement("meta");
    meta.name = "twitter:title";
    return meta;
  }, title);
  setMeta('meta[name="twitter:description"]', () => {
    const meta = document.createElement("meta");
    meta.name = "twitter:description";
    return meta;
  }, description);

  const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) canonical.href = url;
};
