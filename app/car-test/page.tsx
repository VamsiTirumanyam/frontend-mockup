"use client";

import { useState } from "react";
import HoldingVehicleStage from "@/components/holding/HoldingVehicleStage";

export default function CarTestPage() {
  const [active, setActive] = useState("parts");

  return (
    <main className="mx-auto max-w-3xl p-6">
      <HoldingVehicleStage activeCategory={active} onSelect={setActive} />
    </main>
  );
}
