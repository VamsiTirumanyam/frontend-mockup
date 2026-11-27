"use client";

import dynamic from "next/dynamic";
import { iconTileClassName } from "@/components/Shared";
import { heroCategories } from "@/components/home/hero-data";

const CarScene = dynamic(() => import("@/components/home/CarScene"), {
  ssr: false,
  loading: () => (
    <div className="vehicle-stage__loading h-full w-full animate-pulse rounded-full bg-[#eadcf1]/50" />
  ),
});

const CAR_ROTATION = -Math.PI / 2;

const CATEGORY_ARC_RADIUS_X = 40;
const CATEGORY_ARC_RADIUS_Y = 30;

type HoldingVehicleStageProps = {
  activeCategory: string;
  onSelect: (categoryId: string) => void;
};

export default function HoldingVehicleStage({
  activeCategory,
  onSelect,
}: HoldingVehicleStageProps) {
  return (
    <div>
      <div className="relative h-70 w-full sm:h-90 lg:h-105 xl:h-120">
        {/* decorative arcs */}
        <div className="vehicle-stage__arc vehicle-stage__arc--outer pointer-events-none absolute left-1/2 top-[8%] h-[84%] w-[84%] -translate-x-1/2 rounded-t-[50%] border-t border-[#dfcce9]" />
        <div className="vehicle-stage__arc vehicle-stage__arc--inner pointer-events-none absolute left-1/2 top-[22%] h-[66%] w-[62%] -translate-x-1/2 rounded-t-[50%] border-t border-[#eadcf1]" />

        {/* soft glow behind the car */}
        <div className="vehicle-stage__glow pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(177,126,200,0.28),rgba(251,250,255,0)_70%)]" />

        {/* platform the car sits on */}
        <div className="vehicle-stage__platform pointer-events-none absolute bottom-[8%] left-1/2 z-1 h-[18%] w-[76%] -translate-x-1/2 rounded-[50%] border border-white/90 bg-[#fbf8ff]/75 shadow-[0_24px_50px_rgba(74,38,91,0.14)]" />

        <div className="absolute inset-x-0 bottom-[6%] z-10 h-[78%]">
          <CarScene targetRotation={CAR_ROTATION} />
        </div>

        {/* floating cards: tablet and desktop only */}
        <div className="pointer-events-none absolute inset-0 z-30 hidden md:block">
          {heroCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = category.id === activeCategory;

            const angle =
              Math.PI - (Math.PI * index) / (heroCategories.length - 1);
            const leftPercent = 50 + CATEGORY_ARC_RADIUS_X * Math.cos(angle);
            const topPercent = 55 - CATEGORY_ARC_RADIUS_Y * Math.sin(angle);

            return (
              <button
                key={category.id}
                type="button"
                data-active={isActive}
                data-allow-navigation="true"
                onClick={() => onSelect(category.id)}
                style={{
                  left: `${leftPercent.toFixed(2)}%`,
                  top: `${topPercent.toFixed(2)}%`,
                }}
                className={`
                  vehicle-stage__category pointer-events-auto absolute flex
                  h-16 w-19.5
                  -translate-x-1/2 -translate-y-1/2
                  flex-col items-center justify-center gap-1.5
                  rounded-[18px] border transition-all duration-300
                  xl:h-19 xl:w-23 xl:gap-2 xl:rounded-[22px]
                  ${
                    isActive
                      ? "scale-105 border-[#d4b8e3] bg-[#f0e4f7] text-brand-800 shadow-[0_14px_35px_rgba(74,38,91,0.13)]"
                      : "border-white/90 bg-white/90 text-[#62576b] shadow-[0_12px_30px_rgba(74,38,91,0.08)] hover:translate-y-[-55%] hover:bg-white"
                  }
                `}
              >
                <span className={`${iconTileClassName} size-8`}>
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-center text-[9px] font-medium leading-[1.15] xl:text-[10px]">
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
