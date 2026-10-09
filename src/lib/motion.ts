export const premiumEase = [0.22, 1, 0.36, 1] as const;
export const cinematicEase = [0.16, 1, 0.3, 1] as const;
export const softEase = [0.33, 1, 0.68, 1] as const;

export const heroWord = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: cinematicEase, delay: 0.55 + i * 0.08 },
  }),
};

export const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: cinematicEase },
  },
};
