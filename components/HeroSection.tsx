"use client";

import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";
import HoldingVehicleStage from "@/components/holding/HoldingVehicleStage";
import { pageContainerClassName } from "./Shared";

export default function HeroSection() {
  const [activeHeroCategory, setActiveHeroCategory] = useState("parts");

  return (
    <section className={`hero ${pageContainerClassName} grid min-h-[558px] grid-cols-[1.06fr_0.94fr] items-center gap-[clamp(35px,6vw,76px)] pt-[70px] pb-[66px] max-[1050px]:grid-cols-[1fr_0.9fr] max-[1050px]:gap-8 max-[1050px]:py-[57px] min-[1500px]:pt-[82px] min-[1500px]:pb-[76px] max-[760px]:min-h-[auto] max-[760px]:grid-cols-1 max-[760px]:gap-[35px] max-[760px]:pt-[47px] max-[760px]:pb-[46px] max-[520px]:gap-[27px] max-[520px]:pt-[38px] max-[520px]:pb-[37px]`}>
      <div className="hero-copy relative z-[1]">
        <div className="hero-eyebrow">
          <span className="live-dot" />
          Genuine OE parts first <span className="eyebrow-divider">•</span> ISO 9001 sourced
        </div>
        <h1>
          Everything your vehicle needs.<br />
          <span>Connected around you.</span>
        </h1>
        <p className="hero-description">
          Tell us your vehicle and what you need. Sparelab sources genuine OE parts first from verified,
          authorised vendors, with fitment checked against your exact trim and every quote clearly classified.
        </p>
        <div className="hero-actions">
          <a href="#services" className="button button--primary button--large">
            Explore Services <ArrowRight size={17} />
          </a>
          <a href="#workflow" className="button button--outline button--large">
            <MapPin size={17} /> Find a Garage
          </a>
        </div>
        <div className="value-props">
          <div className="value-prop">
            <span className="value-icon"><ShieldCheck size={17} /></span>
            <span>Private & Protected<strong>Anonymized B2B bids</strong></span>
          </div>
          <div className="value-prop">
            <span className="value-icon"><Zap size={17} /></span>
            <span>Local Ecosystem<strong>Sub-4hr dispatch</strong></span>
          </div>
          <div className="value-prop">
            <span className="value-icon"><CheckCircle2 size={17} /></span>
            <span>Vehicle-First Match<strong>100% VIN guarantee</strong></span>
          </div>
        </div>
      </div>
      <div className="hero-car-display min-w-0">
        <HoldingVehicleStage activeCategory={activeHeroCategory} onSelect={setActiveHeroCategory} />
      </div>
    </section>
  );
}
