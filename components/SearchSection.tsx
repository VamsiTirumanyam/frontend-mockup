"use client";

import { ArrowRight, ChevronDown, Search, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { pageContainerClassName } from "./Shared";

export type SearchMode = "part" | "vin" | "vehicle";

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState<SearchMode>("part");
  const [searchQuery, setSearchQuery] = useState("#6R0615301 Ventilated Front Brake Disc");
  const [searchMessage, setSearchMessage] = useState("");

  const placeholders: Record<SearchMode, string> = {
    part: "#6R0615301 Ventilated Front Brake Disc",
    vin: "Enter VIN or registration chassis number",
    vehicle: "e.g. Volkswagen Polo GT · 2018",
  };

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchMessage(
      searchQuery.trim()
        ? `Showing verified matches for "${searchQuery.trim()}"`
        : "Enter a part, VIN, or vehicle to search the network.",
    );
  }

  return (
    <section className={`search-section ${pageContainerClassName} cinematic-section`} data-cinematic-section id="services">
      <div className="search-panel">
        <div className="search-panel-head">
          <div className="search-tabs" role="tablist" aria-label="Search type">
            {([["part", "Part Name / OEM Number"], ["vin", "VIN / Reg Chassis"], ["vehicle", "Make / Model / Year"]] as const).map(([key, label]) => (
              <button key={key} role="tab" aria-selected={activeTab === key} className={activeTab === key ? "search-tab search-tab--active" : "search-tab"} onClick={() => { setActiveTab(key); setSearchMessage(""); }}>
                {label}
              </button>
            ))}
          </div>
          <div className="vehicle-target"><span>Targeting:</span><strong>VW Polo GT 1.2 TSI</strong><ChevronDown size={14} /></div>
        </div>
        <form className="search-form" onSubmit={submit}>
          <div className="search-field">
            <Search size={19} />
            <input aria-label="Search parts network" placeholder={placeholders[activeTab]} value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
            {searchQuery && <button type="button" aria-label="Clear search" onClick={() => setSearchQuery("")}><X size={16} /></button>}
          </div>
          <button type="submit" className="button button--primary search-submit"><Search size={16} /> Search Network</button>
        </form>
        {searchMessage && <p className="search-feedback" role="status">{searchMessage}</p>}
        <div className="quick-filters">
          <span className="quick-label">Quick filters:</span>
          {["Brake Systems", "Suspension & Struts", "Electrical", "Transmission", "Lubricants"].map((item) => (
            <button key={item} onClick={() => { setSearchQuery(item); setSearchMessage(""); }}>{item}</button>
          ))}
          <a href="#footer">Request custom / unlisted part <ArrowRight size={13} /></a>
        </div>
      </div>
    </section>
  );
}
