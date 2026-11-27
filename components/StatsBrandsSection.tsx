"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  siBmw,
  siHonda,
  siHyundai,
  siKia,
  siMahindra,
  siMg,
  siRenault,
  siSkoda,
  siSuzuki,
  siTata,
  siToyota,
  siVolkswagen,
} from "simple-icons";
import { eyebrowDotClassName, pageContainerClassName } from "./Shared";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  {
    value: 120,
    suffix: "+",
    title: "Verified Vendors",
    description: "Direct Tier-1 & authorised suppliers",
  },
  {
    value: 24,
    suffix: "",
    title: "Cities Served",
    description: "Expanding across major metro hubs",
  },
  {
    value: 15000,
    suffix: "+",
    title: "Parts in Catalogue",
    description: "Verified with 100% VIN fitment guarantee",
  },
  {
    value: 98,
    suffix: "%",
    title: "On-Time Fulfilment",
    description: "Sub-4 hour bay arrival rate",
  },
];

const brands = [
  { name: "Maruti Suzuki", icon: siSuzuki },
  { name: "Tata Motors", icon: siTata },
  { name: "Mahindra", icon: siMahindra },
  { name: "Toyota", icon: siToyota },
  { name: "Hyundai", icon: siHyundai },
  { name: "Volkswagen", icon: siVolkswagen },
  { name: "Honda", icon: siHonda },
  { name: "Kia", icon: siKia },
  { name: "Škoda", icon: siSkoda },
  { name: "Renault", icon: siRenault },
  { name: "MG", icon: siMg },
  { name: "BMW", icon: siBmw },
];

export default function StatsBrandsSection() {
  const statsRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = statsRef.current;
      if (
        !section ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      section
        .querySelectorAll<HTMLElement>("[data-counter]")
        .forEach((element) => {
          const target = Number(element.dataset.counter);
          const counter = { value: 0 };
          element.textContent = "0";

          gsap.to(counter, {
            value: target,
            duration: 1.6,
            ease: "power2.out",
            snap: { value: 1 },
            onUpdate: () => {
              element.textContent = Math.round(counter.value).toLocaleString(
                "en-US",
              );
            },
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          });
        });
    },
    { scope: statsRef },
  );

  return (
    <>
      <section
        ref={statsRef}
        className="stats-section relative z-[1]"
        data-cinematic-section
        aria-label="Sparelab network at a glance"
      >
        <div className={`${pageContainerClassName} stats-inner`}>
          <div className="stats-grid">
            {stats.map(({ value, suffix, title, description }) => (
              <div className="stat" key={title}>
                <strong
                  aria-label={`${value.toLocaleString("en-US")}${suffix}`}
                >
                  <span data-counter={value}>
                    {value.toLocaleString("en-US")}
                  </span>
                  <span aria-hidden="true">{suffix}</span>
                </strong>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="brands-section relative z-[1]"
        data-cinematic-section
        aria-label="Supported automotive brands"
      >
        <div className={`${pageContainerClassName} brands-inner`}>
          <div className="brands-pill">
            <p className="brands-eyebrow">
              <span className={eyebrowDotClassName} />
              Supported vehicle brands & OEM networks
              <span className="brands-divider">·</span>
              100% VIN fitment across 45,000+ models
            </p>
            <div
              className="brands-marquee"
              aria-label="Supported vehicle brands"
            >
              <div className="brands-track">
                {[0, 1].map((repeat) => (
                  <div
                    className="brands-list"
                    key={repeat}
                    aria-hidden={repeat === 1}
                  >
                    {brands.map(({ name, icon }) => (
                      <span
                        className="brand-logo"
                        key={`${repeat}-${name}`}
                        role="img"
                        aria-label={repeat === 0 ? name : undefined}
                        title={name}
                        style={{ color: `#${icon.hex}` }}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d={icon.path} />
                        </svg>
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
