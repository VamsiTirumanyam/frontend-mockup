"use client";

import dynamic from "next/dynamic";

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

type VehicleStageVisualProps = {
  activeCategory: string;
};

export default function VehicleStageVisual({
  activeCategory,
}: VehicleStageVisualProps) {
  const targetRotation = categoryRotations[activeCategory] ?? 0;

  return (
    <div className="relative h-70 w-full sm:h-90 lg:h-105 xl:h-120">
      <div className="vehicle-stage__arc vehicle-stage__arc--outer pointer-events-none absolute left-1/2 top-[8%] h-[84%] w-[84%] -translate-x-1/2 rounded-t-[50%] border-t border-[#dfcce9]" />
      <div className="vehicle-stage__arc vehicle-stage__arc--inner pointer-events-none absolute left-1/2 top-[22%] h-[66%] w-[62%] -translate-x-1/2 rounded-t-[50%] border-t border-[#eadcf1]" />

      <div className="vehicle-stage__glow pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(177,126,200,0.28),rgba(251,250,255,0)_70%)] blur-2xl" />

      <div className="vehicle-stage__platform pointer-events-none absolute bottom-[8%] left-1/2 z-1 h-[18%] w-[76%] -translate-x-1/2 rounded-[50%] border border-white/90 bg-[#fbf8ff]/75 shadow-[0_24px_50px_rgba(74,38,91,0.14)] backdrop-blur-md" />

      <div className="absolute inset-x-0 bottom-[6%] z-10 h-[78%]">
        <CarScene targetRotation={targetRotation} />
      </div>
    </div>
  );
}
