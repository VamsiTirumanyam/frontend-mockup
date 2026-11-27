"use client";

import { ArrowRight, Search, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { pageContainerClassName } from "./Shared";

export type SearchMode = "part" | "vin" | "vehicle";

const searchTabs: { id: SearchMode; label: string; placeholder: string }[] = [
  {
    id: "part",
    label: "Part Name / OEM Number",
    placeholder: "#6R0615301 Ventilated Front Brake Disc",
  },
  {
    id: "vin",
    label: "VIN / Reg Chassis",
    placeholder: "Enter VIN or registration chassis number",
  },
  {
    id: "vehicle",
    label: "Make / Model / Year",
    placeholder: "e.g. Volkswagen Polo GT · 2018",
  },
];

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState(searchTabs[0]);
  const [searchQuery, setSearchQuery] = useState(searchTabs[0].placeholder);
  const [searchMessage, setSearchMessage] = useState("");

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = searchQuery.trim();
    setSearchMessage(
      query
        ? `Showing verified matches for “${query}”`
        : "Enter a part, VIN, or vehicle to search the network.",
    );
  }

  return (
    <section
      className={`search-section ${pageContainerClassName} relative z-[1]`}
      data-cinematic-section
      id="services"
    >
      <div className="search-panel">
        <div className="search-panel-head">
          <div className="search-tabs" role="tablist" aria-label="Search type">
            {searchTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab.id === tab.id}
                className={
                  activeTab.id === tab.id
                    ? "search-tab search-tab--active"
                    : "search-tab"
                }
                onClick={() => {
                  setActiveTab(tab);
                  setSearchMessage("");
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <form
          className="search-form mt-[15px] flex gap-[9px] max-[520px]:flex-col"
          onSubmit={handleSearchSubmit}
        >
          <div className="search-field">
            <Search size={19} />
            <input
              aria-label="Search parts network"
              placeholder={activeTab.placeholder}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchQuery("")}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="button button--primary search-submit"
          >
            <Search size={16} /> Search Network
          </button>
        </form>
        {searchMessage && (
          <p className="search-feedback" role="status">
            {searchMessage}
          </p>
        )}
        <div className="quick-filters">
          <span className="quick-label">Quick filters:</span>
          {[
            "Brake Systems",
            "Suspension & Struts",
            "Electrical",
            "Transmission",
            "Lubricants",
          ].map((item) => (
            <button
              key={item}
              onClick={() => {
                setSearchQuery(item);
                setSearchMessage("");
              }}
            >
              {item}
            </button>
          ))}
          <a href="#footer">
            Request custom / unlisted part <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
