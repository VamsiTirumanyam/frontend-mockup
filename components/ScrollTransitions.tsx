"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollTransitions() {
  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>(
      "[data-cinematic-section]",
    );
    const media = gsap.matchMedia();

    media.add(
      {
        desktop:
          "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        compact:
          "(max-width: 768px) and (prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const compact = context.conditions?.compact ?? false;
        const edgeScale = compact ? 0.945 : 0.91;
        const zoomDuration = 0.4;

        gsap.utils.toArray<HTMLElement>("[data-oe-promise]").forEach((card) => {
          gsap.fromTo(
            card,
            {
              autoAlpha: 0,
              y: compact ? 24 : 40,
              force3D: false,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: compact ? 0.75 : 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                end: "top 58%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        sections.forEach((section, index) => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "clamp(bottom top)",
              scrub: compact ? 0.25 : 0.35,
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
                y: compact ? 14 : 24,
                scale: edgeScale,
                force3D: false,
                opacity: 0.92,
              },
              {
                y: 0,
                scale: 1,
                opacity: 1,
                ease: "sine.inOut",
                duration: zoomDuration,
                immediateRender: true,
              },
            )
            .to(
              section,
              {
                y: compact ? -10 : -18,
                scale: edgeScale,
                opacity: 0.92,
                ease: "sine.inOut",
                duration: zoomDuration,
              },
              1 - zoomDuration,
            );
        });

        return () => {
          sections.forEach((section) =>
            gsap.set(section, { clearProps: "zIndex" }),
          );
        };
      },
    );

    return () => media.revert();
  }, []);

  return null;
}
