"use client";

import { useState, type FormEvent } from "react";
import ScrollTransitions from "@/components/ScrollTransitions";
import LandingConversionSection from "@/components/LandingConversionSection";
import LandingFooter from "@/components/LandingFooter";
import LandingHeader from "@/components/LandingHeader";
import LandingHero from "@/components/LandingHero";
import {
  NetworkStats,
  SupportedBrands,
  TrustSection,
} from "@/components/LandingInformationSections";
import LandingTelemetrySection from "@/components/LandingTelemetrySection";
import LandingWorkflowSection from "@/components/LandingWorkflowSection";
import {
  FeaturedProductsSection,
  LandingCategoriesSection,
  ServiceSearchSection,
} from "@/components/LandingSearchSections";
import { type SearchMode } from "@/components/LandingPageData";

export default function SpareLabLandingPage() {
  const [activeTab, setActiveTab] = useState<SearchMode>("part");
  const [searchQuery, setSearchQuery] = useState(
    "#6R0615301 Ventilated Front Brake Disc",
  );
  const [searchMessage, setSearchMessage] = useState("");

  const runSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchMessage(
      searchQuery.trim()
        ? `Showing verified matches for “${searchQuery.trim()}”`
        : "Enter a part, VIN, or vehicle to search the network.",
    );
  };

  const requestProduct = (part: string) => {
    setSearchQuery(part);
    setSearchMessage(`Request started for ${part}`);
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="page-backdrop" aria-hidden="true" />
      <main id="top">
        <ScrollTransitions />
        <LandingHeader />
        <LandingHero />
        <NetworkStats />
        <SupportedBrands />
        <TrustSection />
        <ServiceSearchSection
          activeTab={activeTab}
          onActiveTabChange={setActiveTab}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          searchMessage={searchMessage}
          onSearchMessageChange={setSearchMessage}
          onSubmit={runSearch}
        />
        <FeaturedProductsSection onRequestProduct={requestProduct} />
        <LandingWorkflowSection />
        <LandingTelemetrySection />
        <LandingCategoriesSection />
        <LandingConversionSection />
        <LandingFooter />
      </main>
    </>
  );
}
