"use client";

import { Activity, ArrowUpRight, Box, CircleDot, Cpu, Disc3, Droplets, Gauge, Layers3, SlidersHorizontal, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { pageContainerClassName, SectionHeading } from "./Shared";

const categories: { title: string; count: string; icon: LucideIcon }[] = [
  { title: "Engine Parts", count: "34,120 items", icon: Gauge },
  { title: "Braking Systems", count: "18,490 items", icon: Disc3 },
  { title: "Suspension & Steering", count: "22,300 items", icon: SlidersHorizontal },
  { title: "Tyres & Wheels", count: "14,800 items", icon: CircleDot },
  { title: "Lubricants & Fluids", count: "8,900 items", icon: Droplets },
  { title: "Electrical & Sensors", count: "27,150 items", icon: Cpu },
  { title: "Filters & Intake", count: "12,600 items", icon: Layers3 },
  { title: "Lighting & Bulbs", count: "15,400 items", icon: Sparkles },
  { title: "Body & Panels", count: "19,800 items", icon: Box },
  { title: "Interior & Trims", count: "10,240 items", icon: Activity },
];

export default function CategoriesSection() {
  return (
    <section className={`categories-section ${pageContainerClassName} cinematic-section`} data-cinematic-section>
      <SectionHeading eyebrow="Catalog architecture" title="Core automotive categories" description="Blueprinted OEM/OES components organized across 10 specialized functional domains." />
      <div className="category-grid grid grid-cols-5 gap-[10px] max-[760px]:grid-cols-3 max-[520px]:grid-cols-2 max-[520px]:gap-2">{categories.map(({ title, count, icon: Icon }) => <a key={title} className="category-card" href="#featured"><span className="category-icon"><Icon size={21} strokeWidth={1.7} /></span><strong>{title}</strong><small>{count}</small><ArrowUpRight className="category-arrow" size={14} /></a>)}</div>
    </section>
  );
}
