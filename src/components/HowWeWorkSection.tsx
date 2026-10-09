import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Methodology always in English, as requested. */
const approach = {
  label: "Methodology",
  steps: [
    { number: "01", title: "Understand", detail: "Map the real problem and constraints." },
    { number: "02", title: "Evaluate", detail: "Pressure-test options against business context." },
    { number: "03", title: "Recommend", detail: "Choose the clearest path to ship value." },
    { number: "04", title: "Build", detail: "Deliver a practical digital product or system." },
  ],
} as const;

const HowWeWorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const progress = progressRef.current;
    if (!section || !progress) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const steps = Array.from(section.querySelectorAll<HTMLElement>("[data-step]"));

    if (reduce) {
      progress.style.transform = "scaleX(1)";
      steps.forEach((step) => {
        step.dataset.active = "true";
        step.style.opacity = "1";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(steps, { opacity: 0.35 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 50%",
          scrub: 0.6,
        },
      });

      tl.to(progress, { scaleX: 1, ease: "none", duration: 1 }, 0);

      steps.forEach((step, index) => {
        const at = index / Math.max(steps.length - 1, 1);
        tl.to(
          step,
          {
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
            onStart: () => {
              step.dataset.active = "true";
            },
          },
          at * 0.85,
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="approach" ref={sectionRef} className="border-b rule bg-background">
      <div className="grid-shell py-20 md:py-28">
        <div className="mb-12">
          <p className="micro-label mb-5">{approach.label}</p>
          <div className="relative h-px w-full overflow-hidden bg-white/10">
            <div ref={progressRef} className="absolute inset-y-0 left-0 w-full bg-[hsl(var(--accent))]" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {approach.steps.map((step) => (
            <div
              key={step.number}
              data-step
              data-active="false"
              className="group panel relative flex min-h-[220px] flex-col justify-between p-6 transition-opacity duration-500 data-[active=true]:border-[hsl(var(--accent))]/25"
            >
              <span className="font-display text-4xl font-semibold tracking-tight text-white/25 transition-colors duration-500 group-data-[active=true]:text-[hsl(var(--accent))] md:text-5xl">
                {step.number}
              </span>
              <div>
                <div className="mb-4 h-px w-0 bg-[hsl(var(--accent))] transition-[width] duration-500 group-data-[active=true]:w-8" />
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">{step.title}</h3>
                <p className="text-sm leading-6 text-white/50">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
