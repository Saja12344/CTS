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

export const hashRoutes: Record<string, string> = {
  "#hero": siteRoutes.home,
  "#capabilities": siteRoutes.build,
  "#approach": siteRoutes.approach,
  "#thinking": siteRoutes.thinking,
  "#contact": siteRoutes.contact,
};
