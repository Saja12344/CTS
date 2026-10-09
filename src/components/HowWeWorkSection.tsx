import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Language, siteContent } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

type ApproachSectionProps = {
  content: (typeof siteContent)[Language]["approach"];
};

/**
 * Connected methodology narrative:
 * a progress spine advances through steps as the user scrolls.
 * No card fades — activation is the story.
 */
const HowWeWorkSection = ({ content }: ApproachSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !track || !progress) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const steps = Array.from(section.querySelectorAll<HTMLElement>("[data-step]"));

    if (reduce) {
      progress.style.transform = "scaleX(1)";
      steps.forEach((step) => step.setAttribute("data-active", "true"));
      return;
    }

    const isRtl = document.documentElement.dir === "rtl";
    const origin = isRtl ? "right center" : "left center";

    const ctx = gsap.context(() => {
      gsap.set(progress, { scaleX: 0, transformOrigin: origin });
      gsap.set(steps, { opacity: 0.28 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          end: "bottom 55%",
          scrub: 0.65,
        },
      });

      tl.to(progress, { scaleX: 1, ease: "none", duration: 1 }, 0);

      steps.forEach((step, index) => {
        const at = index / Math.max(steps.length - 1, 1);
        tl.to(
          step,
          {
            opacity: 1,
            duration: 0.18,
            ease: "power2.out",
            onStart: () => step.setAttribute("data-active", "true"),
          },
          at * 0.85,
        );
      });
    }, section);

    return () => ctx.revert();
  }, [content.steps]);

  return (
    <section id="approach" ref={sectionRef} className="border-b rule bg-background">
      <div className="grid-shell py-20 md:py-28">
        <div className="mb-14">
          <p className="micro-label mb-4">{content.label}</p>
          <div ref={trackRef} className="relative h-px w-full bg-border">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-full bg-[hsl(var(--accent))]"
            />
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-4">
          {content.steps.map((step, index) => (
            <div
              key={step.number}
              data-step
              data-active="false"
              className={`group relative flex min-h-[220px] flex-col justify-between border-border py-8 transition-[opacity,transform] duration-500 md:min-h-[280px] md:border-s md:px-6 lg:px-8 ${
                index === 0 ? "md:border-s-0 md:ps-0" : ""
              } border-b md:border-b-0 data-[active=true]:opacity-100`}
            >
              <span className="font-display text-5xl font-medium tracking-tight text-muted-foreground/35 transition-colors duration-500 group-data-[active=true]:text-[hsl(var(--accent))] md:text-6xl">
                {step.number}
              </span>
              <div>
                <div className="mb-4 h-px w-0 bg-[hsl(var(--accent))] transition-[width] duration-500 group-data-[active=true]:w-8" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em]">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
