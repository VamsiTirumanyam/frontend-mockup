"use client";

import { siBmw, siHonda, siHyundai, siKia, siMahindra, siMg, siRenault, siSkoda, siSuzuki, siTata, siToyota, siVolkswagen } from "simple-icons";
import { pageContainerClassName } from "./Shared";

const brands = [
  { name: "Maruti Suzuki", icon: siSuzuki },
  { name: "Tata Motors", icon: siTata },
  { name: "Mahindra", icon: siMahindra },
  { name: "Toyota", icon: siToyota },
  { name: "Hyundai", icon: siHyundai },
  { name: "Volkswagen", icon: siVolkswagen },
  { name: "Honda", icon: siHonda },
  { name: "Kia", icon: siKia },
  { name: "Skoda", icon: siSkoda },
  { name: "Renault", icon: siRenault },
  { name: "MG", icon: siMg },
  { name: "BMW", icon: siBmw },
];

export default function StatsBrandsSection() {
  return (
    <>
      <section className="stats-section cinematic-section" data-cinematic-section aria-label="Sparelab network at a glance">
        <div className={`${pageContainerClassName} stats-inner`}>
          <div className="stats-grid">
            {[
              ["120", "+", "Verified Vendors", "Direct Tier-1 & authorized suppliers"],
              ["24", "", "Cities Served", "Expanding across major metro hubs"],
              ["15,000", "+", "Parts in Catalogue", "Verified with 100% VIN fitment guarantee"],
              ["98", "%", "On-Time Fulfilment", "Sub-4 hour bay arrival rate"],
            ].map(([value, suffix, title, description]) => (
              <div className="stat" key={title}>
                <strong>{value}<span>{suffix}</span></strong>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="brands-section cinematic-section" data-cinematic-section aria-label="Supported automotive brands">
        <div className={`${pageContainerClassName} brands-inner`}>
          <div className="brands-pill">
            <p className="brands-eyebrow">
              <span className="eyebrow-dot" /> Supported vehicle brands & OEM networks
              <span className="brands-divider">·</span> 100% VIN fitment across 45,000+ models
            </p>
            <div className="brands-marquee" aria-label="Supported vehicle brands">
              <div className="brands-track">
                {[0, 1].map((repeat) => (
                  <div className="brands-list" key={repeat} aria-hidden={repeat === 1}>
                    {brands.map(({ name, icon }) => (
                      <span className="brand-logo" key={`${repeat}-${name}`} role="img" aria-label={repeat === 0 ? name : undefined} title={name}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
