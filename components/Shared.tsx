"use client";

import { Wrench } from "lucide-react";
import type { ReactNode } from "react";

export const pageContainerClassName =
  "mx-auto w-[min(1192px,calc(100%_-_64px))] max-[1050px]:w-[min(900px,calc(100%_-_44px))] max-[760px]:w-[calc(100%_-_36px)] max-[520px]:w-[calc(100%_-_30px)]";

export function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`wordmark${footer ? " wordmark--footer" : ""}`}
      href="#top"
      aria-label="SpareLab home"
    >
      <span className="brand-icon">
        <Wrench size={19} strokeWidth={2.2} />
      </span>
      <span className="brand-copy">
        <span className="brand-name">
          Spare<span>Lab</span>
        </span>
        <span className="brand-tagline">Automotive procurement platform</span>
      </span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
