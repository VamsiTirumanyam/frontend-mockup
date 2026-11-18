"use client";

import type { FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Search,
  X,
} from "lucide-react";
import {
  categories,
  products,
  type SearchMode,
} from "@/components/LandingPageData";
import { SectionHeading } from "@/components/LandingPageShared";

type ServiceSearchSectionProps = {
  activeTab: SearchMode;
  onActiveTabChange: (mode: SearchMode) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  searchMessage: string;
  onSearchMessageChange: (message: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const modePlaceholder: Record<SearchMode, string> = {
  part: "#6R0615301 Ventilated Front Brake Disc",
  vin: "Enter VIN or registration chassis number",
  vehicle: "e.g. Volkswagen Polo GT · 2018",
};

export function ServiceSearchSection({
  activeTab,
  onActiveTabChange,
  searchQuery,
  onSearchQueryChange,
  searchMessage,
  onSearchMessageChange,
  onSubmit,
}: ServiceSearchSectionProps) {
  return (
    <section
      className="search-section section-wrap cinematic-section"
      data-cinematic-section
      id="services"
    >
      <div className="search-panel">
        <div className="search-panel-head">
          <div className="search-tabs" role="tablist" aria-label="Search type">
            {(
              [
                ["part", "Part Name / OEM Number"],
                ["vin", "VIN / Reg Chassis"],
                ["vehicle", "Make / Model / Year"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                className={
                  activeTab === key
                    ? "search-tab search-tab--active"
                    : "search-tab"
                }
                onClick={() => {
                  onActiveTabChange(key);
                  onSearchMessageChange("");
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="vehicle-target">
            <span>Targeting:</span>
            <strong>VW Polo GT 1.2 TSI</strong>
            <ChevronDown size={14} />
          </div>
        </div>
        <form className="search-form" onSubmit={onSubmit}>
          <div className="search-field">
            <Search size={19} />
            <input
              aria-label="Search parts network"
              placeholder={modePlaceholder[activeTab]}
              value={searchQuery}
              onChange={(event) => onSearchQueryChange(event.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => onSearchQueryChange("")}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button type="submit" className="button button--primary search-submit">
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
                onSearchQueryChange(item);
                onSearchMessageChange("");
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

export function FeaturedProductsSection({
  onRequestProduct,
}: {
  onRequestProduct: (part: string) => void;
}) {
  return (
    <section
      className="products-section section-wrap cinematic-section"
      data-cinematic-section
      id="featured"
    >
      <div className="products-heading">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Verified inventory
          </span>
          <h2>OE first. Alternatives identified.</h2>
          <p>
            OE is our first choice. Any OEM or OES alternative is clearly
            identified on your quote.
          </p>
        </div>
        <a className="text-link" href="#services">
          View all 180,000+ parts <ArrowRight size={15} />
        </a>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.part}>
            <div className="product-image">
              <img src={product.image} alt={product.title} loading="lazy" />
              <span className="stock-tag">{product.stock}</span>
              <span className="type-tag">{product.type}</span>
            </div>
            <div className="product-info">
              <span className="part-number">PART # {product.part}</span>
              <h3>{product.title}</h3>
              <p>{product.fit}</p>
              <span className="vin-badge">
                <Check size={12} /> 100% VIN match guaranteed
              </span>
            </div>
            <div className="product-footer">
              <span>
                <small>Escrow rate</small>
                <strong>{product.price}</strong>
              </span>
              <button onClick={() => onRequestProduct(product.part)}>
                Request / Buy <ArrowRight size={13} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function LandingCategoriesSection() {
  return (
    <section
      className="categories-section section-wrap cinematic-section"
      data-cinematic-section
    >
      <SectionHeading
        eyebrow="Catalog architecture"
        title="Core automotive categories"
        description="Blueprinted OEM/OES components organized across 10 specialized functional domains."
      />
      <div className="category-grid">
        {categories.map(({ title, count, icon: Icon }) => (
          <a key={title} className="category-card" href="#featured">
            <span className="category-icon">
              <Icon size={21} strokeWidth={1.7} />
            </span>
            <strong>{title}</strong>
            <small>{count}</small>
            <ArrowUpRight className="category-arrow" size={14} />
          </a>
        ))}
      </div>
    </section>
  );
}
