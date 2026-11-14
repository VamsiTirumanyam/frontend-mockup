"use client";

import dynamic from "next/dynamic";
import { heroCategories } from "@/components/home/hero-data";

const CarScene = dynamic(() => import("@/components/home/CarScene"), {
  ssr: false,
  loading: () => (
    <div className="vehicle-stage__loading h-full w-full animate-pulse rounded-full bg-[#eadcf1]/50" />
  ),
});

const categoryRotations: Record<string, number> = {
  parts: -Math.PI / 2,
  garages: -Math.PI / 3,
  tyres: -Math.PI / 6,
  accessories: 0,
  wash: Math.PI / 6,
  insurance: Math.PI / 3,
  towing: Math.PI / 2,
};

const RADIUS_X = 40;
const RADIUS_Y = 30;

type HoldingVehicleStageProps = {
  activeCategory: string;
  onSelect: (categoryId: string) => void;
};

export default function HoldingVehicleStage({
  activeCategory,
  onSelect,
}: HoldingVehicleStageProps) {
  const targetRotation = categoryRotations[activeCategory] ?? 0;

  return (
    <div>
      <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[420px] xl:h-[480px]">
        {/* decorative arcs */}
        <div className="vehicle-stage__arc vehicle-stage__arc--outer pointer-events-none absolute left-1/2 top-[8%] h-[84%] w-[84%] -translate-x-1/2 rounded-t-[50%] border-t border-[#dfcce9]" />
        <div className="vehicle-stage__arc vehicle-stage__arc--inner pointer-events-none absolute left-1/2 top-[22%] h-[66%] w-[62%] -translate-x-1/2 rounded-t-[50%] border-t border-[#eadcf1]" />

        {/* soft glow behind the car */}
        <div className="vehicle-stage__glow pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(177,126,200,0.28),rgba(251,250,255,0)_70%)] blur-2xl" />

        {/* platform the car sits on */}
        <div className="vehicle-stage__platform pointer-events-none absolute bottom-[8%] left-1/2 z-[1] h-[18%] w-[76%] -translate-x-1/2 rounded-[50%] border border-white/90 bg-[#fbf8ff]/75 shadow-[0_24px_50px_rgba(74,38,91,0.14)] backdrop-blur-md" />

        {/* 3D car */}
        <div className="absolute inset-x-0 bottom-[6%] z-10 h-[78%]">
          <CarScene targetRotation={targetRotation} />
        </div>

        {/* floating cards: tablet and desktop only */}
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
                onClick={() => onSelect(category.id)}
                style={{
                  left: `${x.toFixed(2)}%`,
                  top: `${y.toFixed(2)}%`,
                }}
                className={`
                  vehicle-stage__category pointer-events-auto absolute flex
                  h-[64px] w-[78px]
                  -translate-x-1/2 -translate-y-1/2
                  flex-col items-center justify-center gap-1.5
                  rounded-[18px] border transition-all duration-300
                  xl:h-[76px] xl:w-[92px] xl:gap-2 xl:rounded-[22px]
                  ${
                    isActive
                      ? "scale-105 border-[#d4b8e3] bg-[#f0e4f7] text-[#3b1c5a] shadow-[0_14px_35px_rgba(74,38,91,0.13)]"
                      : "border-white/90 bg-white/90 text-[#62576b] shadow-[0_12px_30px_rgba(74,38,91,0.08)] backdrop-blur-xl hover:-translate-y-[55%] hover:bg-white"
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
      </div>

      {/* mobile: cards become chips under the car */}
      <div className="flex flex-wrap gap-2 p-3 md:hidden">
        {heroCategories.map((category) => {
          const Icon = category.icon;
          const isActive = category.id === activeCategory;

          return (
            <button
              key={category.id}
              type="button"
              data-active={isActive}
              data-allow-navigation="true"
              onClick={() => onSelect(category.id)}
              className={`vehicle-stage__category inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors ${
                isActive
                  ? "border-[#3b1c5a] bg-[#3b1c5a] text-white"
                  : "border-[#e7dceb] bg-white text-[#51445d]"
              }`}
            >
              <Icon size={13} />
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}