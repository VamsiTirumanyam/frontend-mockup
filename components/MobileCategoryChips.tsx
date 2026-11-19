"use client";

import { heroCategories } from "@/components/home/hero-data";

type MobileCategoryChipsProps = {
  activeCategory: string;
  onSelect: (categoryId: string) => void;
};

export default function MobileCategoryChips({
  activeCategory,
  onSelect,
}: MobileCategoryChipsProps) {
  return (
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
                ? "border-brand-800 bg-brand-800 text-white"
                : "border-[#e7dceb] bg-white text-[#51445d]"
            }`}
          >
            <Icon size={13} />
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
