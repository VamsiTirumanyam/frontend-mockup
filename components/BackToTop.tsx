"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

type ScrollPosition = {
  progress: number;
  visible: boolean;
};

export default function BackToTop() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    progress: 0,
    visible: false,
  });

  useEffect(() => {
    let frameId: number | undefined;

    const updateScrollPosition = () => {
      if (frameId !== undefined) return;

      frameId = window.requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0
            ? Math.round(
                Math.min(100, Math.max(0, window.scrollY / scrollableHeight * 100)),
              )
            : 0;
        const visible = window.scrollY > 320;

        setScrollPosition((current) =>
          current.progress === progress && current.visible === visible
            ? current
            : { progress, visible },
        );
        frameId = undefined;
      });
    };

    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition, { passive: true });
    window.addEventListener("resize", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("resize", updateScrollPosition);
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, []);

  if (!scrollPosition.visible) return null;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      title="Back to top"
      className="fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full border border-white/30 bg-brand-600 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500 max-[520px]:bottom-4 max-[520px]:right-4"
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="absolute inset-0 size-full -rotate-90"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={scrollPosition.progress}
      >
        <circle
          cx="24"
          cy="24"
          r="21.5"
          pathLength="100"
          className="fill-none stroke-white/25 stroke-[2]"
        />
        <circle
          cx="24"
          cy="24"
          r="21.5"
          pathLength="100"
          strokeDasharray="100 100"
          strokeDashoffset={100 - scrollPosition.progress}
          className="fill-none stroke-white stroke-[2] transition-[stroke-dashoffset] duration-150"
        />
      </svg>
      <ArrowUp size={19} className="relative z-10" aria-hidden="true" />
    </a>
  );
}
