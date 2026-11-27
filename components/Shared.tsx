"use client";

import { CarFront, Wrench } from "lucide-react";
import type { ReactNode } from "react";

export const pageContainerClassName =
  "mx-auto w-[min(1192px,calc(100%_-_64px))] max-[1050px]:w-[min(900px,calc(100%_-_44px))] max-[760px]:w-[calc(100%_-_36px)] max-[520px]:w-[calc(100%_-_30px)]";

export const iconTileClassName =
  "grid shrink-0 place-items-center rounded-[10px] bg-linear-to-br from-[#faf2ff] to-[#e9ddfc] text-brand-700 ring-1 ring-inset ring-brand-600/10 theme-dark:from-[#43224f] theme-dark:to-[#2e1739] theme-dark:text-[#ebc6fb] theme-dark:ring-white/10";

export function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`wordmark${footer ? " wordmark--footer" : ""}`}
      href="#top"
      aria-label="SpareLab home"
    >
      <span className="brand-icon">
        {footer ? (
          <CarFront size={23} strokeWidth={1.9} aria-hidden="true" />
        ) : (
          <Wrench size={19} strokeWidth={2.2} aria-hidden="true" />
        )}
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

export const eyebrowDotClassName =
  "size-[7px] shrink-0 rounded-full bg-(--green)";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[9px]/[1.4] font-extrabold tracking-[0.9px] text-(--forest) uppercase theme-dark:text-[#d3a9e5] ${className}`}
    >
      <span className={eyebrowDotClassName} />
      {children}
    </span>
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
      <Eyebrow className="mb-[13px]">{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
