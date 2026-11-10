"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollTransitions() {
  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>(
      "[data-cinematic-section]:not([data-cinematic-static])",
    );
    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        compact: "(max-width: 768px) and (prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const compact = context.conditions?.compact ?? false;

        sections.forEach((section, index) => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: compact ? 0.35 : 0.65,
              invalidateOnRefresh: true,
              onEnter: () => gsap.set(section, { zIndex: 2 + index }),
              onEnterBack: () => gsap.set(section, { zIndex: 2 + index }),
              onLeave: () => gsap.set(section, { zIndex: 1 }),
              onLeaveBack: () => gsap.set(section, { zIndex: 1 }),
            },
          });

          timeline
            .fromTo(
              section,
              {
                scale: compact ? 0.96 : 0.89,
                y: compact ? 24 : 54,
                z: compact ? 0 : -110,
                opacity: compact ? 0.76 : 0.64,
                transformOrigin: "center center",
              },
              {
                scale: 1,
                y: 0,
                z: 0,
                opacity: 1,
                ease: "none",
                duration: 0.5,
                immediateRender: true,
              },
            )
            .to(section, {
              scale: compact ? 0.96 : 0.89,
              y: compact ? -18 : -42,
              z: compact ? 0 : -110,
              opacity: compact ? 0.76 : 0.58,
              ease: "none",
              duration: 0.5,
            });
        });

        return () => {
          sections.forEach((section) => gsap.set(section, { clearProps: "zIndex" }));
        };
      },
    );

    return () => media.revert();
  }, []);

  return null;
}
