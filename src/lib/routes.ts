export const siteRoutes = {
  home: "/",
  build: "/build",
  approach: "/approach",
  about: "/about",
  thinking: "/thinking",
  contact: "/contact",
  careers: "/careers",
  work: "/work",
} as const;

export const homeSection = (hash: string) => ({ pathname: siteRoutes.home, hash });

export const sectionRedirects = [
  { path: siteRoutes.build, hash: "capabilities" },
  { path: siteRoutes.approach, hash: "approach" },
  { path: siteRoutes.about, hash: "about" },
  { path: siteRoutes.thinking, hash: "thinking" },
  { path: siteRoutes.contact, hash: "contact" },
] as const;
