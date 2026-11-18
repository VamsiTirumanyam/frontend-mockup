"use client";

import DesktopCategoryCards from "@/components/DesktopCategoryCards";
import MobileCategoryChips from "@/components/MobileCategoryChips";
import VehicleStageVisual from "@/components/VehicleStageVisual";

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
      <div className="relative">
        <VehicleStageVisual activeCategory={activeCategory} />
        <DesktopCategoryCards
          activeCategory={activeCategory}
          onSelect={onSelect}
        />
      </div>
      <MobileCategoryChips
        activeCategory={activeCategory}
        onSelect={onSelect}
      />
    </div>
  );
}