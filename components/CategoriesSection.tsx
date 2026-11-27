"use client";

import {
  Armchair,
  ArrowUpRight,
  BatteryCharging,
  Car,
  CircleDot,
  Cog,
  Disc3,
  Droplets,
  Funnel,
  Lightbulb,
  SlidersHorizontal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  iconTileClassName,
  pageContainerClassName,
  SectionHeading,
} from "./Shared";

const categories: { title: string; count: string; icon: LucideIcon }[] = [
  { title: "Engine Parts", count: "34,120 items", icon: Cog },
  { title: "Braking Systems", count: "18,490 items", icon: Disc3 },
  {
    title: "Suspension & Steering",
    count: "22,300 items",
    icon: SlidersHorizontal,
  },
  { title: "Tyres & Wheels", count: "14,800 items", icon: CircleDot },
  { title: "Lubricants & Fluids", count: "8,900 items", icon: Droplets },
  {
    title: "Electrical & Sensors",
    count: "27,150 items",
    icon: BatteryCharging,
  },
  { title: "Filters & Intake", count: "12,600 items", icon: Funnel },
  { title: "Lighting & Bulbs", count: "15,400 items", icon: Lightbulb },
  { title: "Body & Panels", count: "19,800 items", icon: Car },
  { title: "Interior & Trims", count: "10,240 items", icon: Armchair },
];

export default function CategoriesSection() {
  return (
    <section
      className={`categories-section ${pageContainerClassName} relative z-[1]`}
      data-cinematic-section
    >
      <SectionHeading
        eyebrow="Catalog architecture"
        title="Core automotive categories"
        description="Blueprinted OEM/OES components organized across 10 specialized functional domains."
      />
      <div className="category-grid grid grid-cols-5 gap-[10px] max-[760px]:grid-cols-3 max-[520px]:grid-cols-2 max-[520px]:gap-2">
        {categories.map(({ title, count, icon: Icon }) => (
          <a key={title} className="category-card group" href="#featured">
            <span className={`${iconTileClassName} size-8`}>
              <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <strong>{title}</strong>
            <small>{count}</small>
            <ArrowUpRight
              className="category-arrow motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
              size={14}
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
