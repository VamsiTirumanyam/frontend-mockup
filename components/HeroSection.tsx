"use client";

import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";
import HoldingVehicleStage from "@/components/holding/HoldingVehicleStage";
import { pageContainerClassName } from "./Shared";

export default function HeroSection() {
  const [activeHeroCategory, setActiveHeroCategory] = useState("parts");

  return (
    <section className={`hero ${pageContainerClassName}`}>
      <div className="hero-copy">
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
      <div className="hero-car-display">
        <HoldingVehicleStage activeCategory={activeHeroCategory} onSelect={setActiveHeroCategory} />
      </div>
    </section>
  );
}
