"use client";

import { heroCategories } from "@/components/home/hero-data";

const RADIUS_X = 40;
const RADIUS_Y = 30;

type DesktopCategoryCardsProps = {
  activeCategory: string;

};

export default function DesktopCategoryCards({
  activeCategory,
}: DesktopCategoryCardsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 hidden md:block">
      {heroCategories.map((category, index) => {
        const Icon = category.icon;
        const isActive = category.id === activeCategory;
        const angle =
          Math.PI - (Math.PI * index) / (heroCategories.length - 1);
        const x = 50 + RADIUS_X * Math.cos(angle);
        const y = 55 - RADIUS_Y * Math.sin(angle);

        return (
          <button
            key={category.id}
            type="button"
            data-active={isActive}
            data-allow-navigation="true"
  
            style={{
              left: `${x.toFixed(2)}%`,
              top: `${y.toFixed(2)}%`,
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
                  : "border-white/90 bg-white/90 text-[#62576b] shadow-[0_12px_30px_rgba(74,38,91,0.08)] backdrop-blur-xl hover:translate-y-[-55%] hover:bg-white"
              }
            `}
          >
            <Icon size={18} strokeWidth={1.7} />
            <span className="text-center text-[9px] font-medium leading-[1.15] xl:text-[10px]">
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
