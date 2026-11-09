export const siteRoutes = {
  home: "/",
  build: "/build",
  approach: "/approach",
  thinking: "/thinking",
  contact: "/contact",
} as const;

export const hashRoutes: Record<string, string> = {
  "#hero": siteRoutes.home,
  "#capabilities": siteRoutes.build,
  "#approach": siteRoutes.approach,
  "#thinking": siteRoutes.thinking,
  "#contact": siteRoutes.contact,
};
