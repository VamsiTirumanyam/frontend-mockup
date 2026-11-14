"use client";

import { useState, type FormEvent } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Box,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  Cpu,
  Disc3,
  Droplets,
  Gauge,
  Layers3,
  LockKeyhole,
  MapPin,
  Menu,
  Search,
  Send,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Truck,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import ScrollTransitions from "@/components/ScrollTransitions";
import ThemeToggle from "@/components/ThemeToggle";
import HoldingVehicleStage from "@/components/holding/HoldingVehicleStage";

type SearchMode = "part" | "vin" | "vehicle";

const brands = [
  "Maruti Suzuki",
  "TATA MOTORS",
  "mahindra",
  "TOYOTA",
  "Hyundai",
  "Volkswagen",
  "HONDA",
  "Kia",
  "ŠKODA",
  "RENAULT",
  "MG",
  "BMW",
];

const workflow: {
  number: string;
  title: string;
  description: string;
  note: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Request",
    description:
      "Share a part number or vehicle VIN. We verify the fitment against your vehicle before sourcing begins.",
    note: "One-click fitment verification",
    icon: Search,
  },
  {
    number: "02",
    title: "Source",
    description:
      "Your request is matched with verified OEM and Tier-1 distributor inventories across our network.",
    note: "120+ authenticated suppliers",
    icon: Zap,
  },
  {
    number: "03",
    title: "Confirm",
    description:
      "Compare transparent live quotations, select your supplier, and approve a protected purchase order.",
    note: "Escrow-backed procurement",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Every part is hub-checked, securely sealed, and dispatched with GPS tracking to your workshop bay.",
    note: "Quality checked, door to bay",
    icon: Truck,
  },
];

const categories: { title: string; count: string; icon: LucideIcon }[] = [
  { title: "Engine Parts", count: "34,120 items", icon: Gauge },
  { title: "Braking Systems", count: "18,490 items", icon: Disc3 },
  {
    title: "Suspension & Steering",
    count: "22,300 items",
    icon: SlidersHorizontal,
  },
  { title: "Tyres & Wheels", count: "14,800 items", icon: CircleDot },
  { title: "Lubricants & Fluids", count: "8,900 items", icon: Droplets },
  { title: "Electrical & Sensors", count: "27,150 items", icon: Cpu },
  { title: "Filters & Intake", count: "12,600 items", icon: Layers3 },
  { title: "Lighting & Bulbs", count: "15,400 items", icon: Sparkles },
  { title: "Body & Panels", count: "19,800 items", icon: Box },
  { title: "Interior & Trims", count: "10,240 items", icon: Activity },
];

const products = [
  {
    title: "Brembo 256mm Ventilated Front Disc",
    fit: "VW Polo, Vento, Skoda Rapid · 1.2 TSI / 1.6 MPI",
    price: "₹3,450",
    part: "09.7011.14",
    stock: "14 in stock",
    type: "OEM / OES",
    image:
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Monroe Front Gas Strut Damper",
    fit: "Hyundai Creta, Kia Seltos · 2019–2024",
    price: "₹4,890",
    part: "G8164-MN",
    stock: "8 in stock",
    type: "TIER-1 OEM",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Bosch Common Rail Injector",
    fit: "Tata Nexon 1.5 Revotorq Diesel, Altroz",
    price: "₹8,950",
    part: "0445110-CR",
    stock: "Low stock · 3",
    type: "GENUINE OES",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Gates PowerGrip Timing Kit + Pump",
    fit: "Maruti Suzuki Swift, Baleno, Dzire · K-Series",
    price: "₹5,120",
    part: "KP15669XS",
    stock: "19 in stock",
    type: "TIER-1 KIT",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=85",
  },
];

function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`wordmark${footer ? " wordmark--footer" : ""}`}
      href="#top"
      aria-label="SpareLab home"
    >
      <span className="brand-icon">
        <Wrench size={19} strokeWidth={2.2} />
      </span>
      <span className="brand-copy">
        <span className="brand-name">
          Spare<span>Lab</span>
        </span>
        <span className="brand-tagline">Automotive procurement platform</span>
      </span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function SpareLabLandingPage() {
  const [activeTab, setActiveTab] = useState<SearchMode>("part");
  const [searchQuery, setSearchQuery] = useState(
    "#6R0615301 Ventilated Front Brake Disc",
  );
  const [searchMessage, setSearchMessage] = useState("");
  const [acceptedQuote, setAcceptedQuote] = useState(false);
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [certificateOpen, setCertificateOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHeroCategory, setActiveHeroCategory] = useState("parts");

  const runSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchMessage(
      searchQuery.trim()
        ? `Showing verified matches for “${searchQuery.trim()}”`
        : "Enter a part, VIN, or vehicle to search the network.",
    );
  };

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;
    setSentMessage(message.trim());
    setMessage("");
  };

  const modePlaceholder: Record<SearchMode, string> = {
    part: "#6R0615301 Ventilated Front Brake Disc",
    vin: "Enter VIN or registration chassis number",
    vehicle: "e.g. Volkswagen Polo GT · 2018",
  };

  return (
    <>
      <div className="page-backdrop" aria-hidden="true" />
      <main id="top">
        <ScrollTransitions />
        <header className="site-header">
          <div className="nav-shell">
            <Wordmark />
            <button
              className="mobile-menu-button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
            <nav
              className={`main-nav${menuOpen ? " main-nav--open" : ""}`}
              aria-label="Main navigation"
            >
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Products & Services
              </a>
              <a href="#workflow" onClick={() => setMenuOpen(false)}>
                How It Works
              </a>
              <a href="#customers" onClick={() => setMenuOpen(false)}>
                For Customers
              </a>
              <a href="#vendors" onClick={() => setMenuOpen(false)}>
                For Vendors
              </a>
            </nav>
            <div className="nav-actions">
              <a className="sign-in" href="#footer">
                Sign In
              </a>
              <a
                className="button button--primary button--nav"
                href="#customers"
              >
                Get Started <span className="avatar-icon">↗</span>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="live-dot" />
              Next-gen automotive orchestration{" "}
              <span className="eyebrow-divider">•</span> ISO 9001 sourced
            </div>
            <h1>
              Everything your vehicle needs.
              <br />
              <span>Connected around you.</span>
            </h1>
            <p className="hero-description">
              Tell us your vehicle and what you need. SpareLab connects verified
              workshop garages, Tier-1 OEM suppliers, genuine components, and
              on-demand recovery services into one unified procurement stream.
            </p>
            <div className="hero-actions">
              <a
                href="#services"
                className="button button--primary button--large"
              >
                Explore Services <ArrowRight size={17} />
              </a>
              <a
                href="#workflow"
                className="button button--outline button--large"
              >
                <MapPin size={17} /> Find a Garage
              </a>
            </div>
            <div className="value-props">
              <div className="value-prop">
                <span className="value-icon">
                  <ShieldCheck size={17} />
                </span>
                <span>
                  Private & Protected<strong>Anonymized B2B bids</strong>
                </span>
              </div>
              <div className="value-prop">
                <span className="value-icon">
                  <Zap size={17} />
                </span>
                <span>
                  Local Ecosystem<strong>Sub-4hr dispatch</strong>
                </span>
              </div>
              <div className="value-prop">
                <span className="value-icon">
                  <CheckCircle2 size={17} />
                </span>
                <span>
                  Vehicle-First Match<strong>100% VIN guarantee</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="hero-car-display">
            <HoldingVehicleStage
              activeCategory={activeHeroCategory}
              onSelect={setActiveHeroCategory}
            />
          </div>
        </section>

        <section
          className="stats-section cinematic-section"
          data-cinematic-section
        >
          <div className="stats-inner">
            <div className="stats-grid">
              <div className="stat">
                <strong>
                  120<span>+</span>
                </strong>
                <h3>Verified Vendors</h3>
                <p>Direct Tier-1 & authorized suppliers</p>
              </div>
              <div className="stat">
                <strong>24</strong>
                <h3>Cities Served</h3>
                <p>Expanding across major metro hubs</p>
              </div>
              <div className="stat">
                <strong>
                  15,000<span>+</span>
                </strong>
                <h3>Parts in Catalogue</h3>
                <p>Verified with 100% VIN fitment guarantee</p>
              </div>
              <div className="stat">
                <strong>
                  98<span>%</span>
                </strong>
                <h3>On-Time Fulfilment</h3>
                <p>Sub-4 hour bay arrival rate</p>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-avatar">VR</div>
              <div className="testimonial-body">
                <div className="testimonial-rating">
                  <span aria-label="5 out of 5 stars">★★★★★</span>
                  <span className="verified-label">
                    <BadgeCheck size={14} /> Verified Workshop Partner
                  </span>
                </div>
                <blockquote>
                  “SpareLab cut our procurement idle-time by 75%. Instead of
                  calling 14 unverified wholesalers, we input the vehicle
                  chassis code once and receive guaranteed quotes with sealed QA
                  tags within the hour.”
                </blockquote>
                <p>
                  <strong>Vikram Rathore</strong>
                  <span>
                    {" "}
                    · Managing Director, AutoKraft Premium Garages (Mumbai &
                    Pune)
                  </span>
                </p>
              </div>
              <a className="button button--light" href="#customers">
                Read Case Study <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="brands-section cinematic-section"
          data-cinematic-section
          aria-label="Supported automotive brands"
        >
          <div className="section-wrap brands-inner">
            <p className="brands-eyebrow">
              <span className="eyebrow-dot" />
              Supported vehicle brands & OEM networks <span>·</span> 100% VIN
              specification match across 45,000+ models
            </p>
            <div className="brands-track">
              <div className="brands-list">
                {brands.map((brand) => (
                  <span key={brand}>{brand}</span>
                ))}
              </div>
              <div className="brands-list" aria-hidden="true">
                {brands.map((brand) => (
                  <span key={`repeat-${brand}`}>{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="trust-section section-wrap cinematic-section"
          data-cinematic-section
        >
          <SectionHeading
            eyebrow="Your data. Your business. Protected."
            title={
              <>
                Customer and business data.
                <br className="desktop-break" />{" "}
                <span>Safe, secure, and encrypted in the cloud.</span>
              </>
            }
            description="In an industry built on trust, SpareLab protects sensitive vehicle records, confidential garage-vendor negotiations, quotes, and customer communications."
          />
          <div className="trust-grid">
            <article className="trust-card">
              <div className="trust-card-top">
                <span className="icon-tile">
                  <Shield size={20} />
                </span>
                <span className="card-tag">Vehicle & personal privacy</span>
              </div>
              <h3>Customer Data Protection</h3>
              <p>
                Vehicle details, customer service history, and enquiry data are
                stored securely and kept confidential.
              </p>
              <div className="card-assurance">
                <Check size={14} /> Confidential owner records
              </div>
            </article>
            <article className="trust-card">
              <div className="trust-card-top">
                <span className="icon-tile">
                  <LockKeyhole size={20} />
                </span>
                <span className="card-tag">Garage & supplier protection</span>
              </div>
              <h3>Secure Business Information</h3>
              <p>
                Trade margins, client lists, vendor quotes, and commercial
                records remain private to your business.
              </p>
              <div className="card-assurance">
                <Check size={14} /> Private trade negotiations
              </div>
            </article>
            <article className="trust-card">
              <div className="trust-card-top">
                <span className="icon-tile">
                  <Cpu size={20} />
                </span>
                <span className="card-tag">Cloud security</span>
              </div>
              <h3>Encrypted Cloud Infrastructure</h3>
              <p>
                Platform communications and sensitive records are safeguarded
                through encrypted cloud infrastructure.
              </p>
              <div className="card-assurance">
                <Check size={14} /> Protected cloud channels
              </div>
            </article>
          </div>
          <div className="trust-banner">
            <p>
              <strong>
                Built for trust between customers and automotive businesses:
              </strong>{" "}
              SpareLab keeps information shared across the automotive
              marketplace safe, private, and protected.
            </p>
            <a href="#footer">
              Learn about Trust & Safety <ArrowRight size={14} />
            </a>
          </div>
        </section>

        <section
          className="search-section section-wrap cinematic-section"
          data-cinematic-section
          id="services"
        >
          <div className="search-panel">
            <div className="search-panel-head">
              <div
                className="search-tabs"
                role="tablist"
                aria-label="Search type"
              >
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
                      setActiveTab(key);
                      setSearchMessage("");
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
            <form className="search-form" onSubmit={runSearch}>
              <div className="search-field">
                <Search size={19} />
                <input
                  aria-label="Search parts network"
                  placeholder={modePlaceholder[activeTab]}
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

        <section
          className="workflow-section section-wrap cinematic-section"
          data-cinematic-section
          id="workflow"
        >
          <SectionHeading
            eyebrow="Streamlined orchestration"
            title={
              <>
                From sourcing to delivery.
                <br />
                <span>All connected.</span>
              </>
            }
            description="A clear, quality-controlled journey from your first enquiry to parts arriving at your bay."
          />
          <div className="workflow-grid">
            {workflow.map(
              ({ number, title, description, note, icon: Icon }) => (
                <article key={number} className="workflow-card">
                  <div className="workflow-card-head">
                    <span className="step-number">{number}</span>
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="workflow-note">
                    <Check size={13} />
                    {note}
                  </span>
                </article>
              ),
            )}
          </div>
        </section>

        <section
          className="telemetry-section section-wrap cinematic-section"
          data-cinematic-section
        >
          <SectionHeading
            eyebrow="Enterprise telemetry"
            title="Unified communication & live tracking"
            description="Operational tools designed for real-time buyer-supplier coordination and quality-audited delivery."
          />
          <div className="telemetry-grid">
            <article className="interface-card chat-card">
              <div className="interface-head">
                <div className="vendor-identity">
                  <span className="vendor-avatar">AT</span>
                  <span>
                    <strong>Apex Tech Autospares</strong>
                    <small>Verified Tier-1 Distro · Bay 4 Node</small>
                  </span>
                </div>
                <span className="encrypted-pill">
                  <LockKeyhole size={11} /> Encrypted RFQ
                </span>
              </div>
              <div className="chat-thread">
                <div className="chat-bubble chat-bubble--buyer">
                  <p>
                    Checking inventory fitment for VW Polo GT (WVWZZZ6RZ...).
                    Need front brake disc assembly with mounting bolts.
                  </p>
                  <small>11:42 AM</small>
                </div>
                {sentMessage && (
                  <div className="chat-bubble chat-bubble--buyer">
                    <p>{sentMessage}</p>
                    <small>Just now</small>
                  </div>
                )}
                <div className="chat-bubble chat-bubble--vendor">
                  <p>
                    <strong>Exact OEM Brembo match confirmed in stock.</strong>{" "}
                    Blueprinted 256mm ventilated spec with ceramic pads
                    included.
                  </p>
                  <div className="quote-card">
                    <div className="quote-top">
                      <span>
                        <strong>Brembo 09.7011.14</strong>
                        <small>Hub: Mumbai Hub B</small>
                      </span>
                      <span className="fit-pill">
                        <Check size={11} /> 100% Fit
                      </span>
                    </div>
                    <div className="quote-bottom">
                      <span>
                        Escrow quote <strong>₹3,450</strong>{" "}
                        <small>incl. taxes</small>
                      </span>
                      <button
                        className={
                          acceptedQuote
                            ? "accept-quote accept-quote--done"
                            : "accept-quote"
                        }
                        onClick={() => setAcceptedQuote(!acceptedQuote)}
                      >
                        {acceptedQuote ? (
                          <>
                            <Check size={12} /> Quote Accepted
                          </>
                        ) : (
                          "Accept Quote"
                        )}
                      </button>
                    </div>
                  </div>
                  <small>11:44 AM</small>
                </div>
              </div>
              <form className="message-form" onSubmit={sendMessage}>
                <input
                  aria-label="Message supplier"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Type a clarification or upload chassis tag..."
                />
                <button aria-label="Send message" type="submit">
                  <Send size={15} />
                </button>
              </form>
            </article>
            <article className="interface-card tracking-card">
              <div className="tracking-head">
                <div>
                  <span className="micro-label">Consignment telemetry</span>
                  <strong>Order #SL-8842-MH</strong>
                </div>
                <span className="qa-pill">
                  <Check size={12} /> Hub QA Passed
                </span>
              </div>
              <div className="tracking-steps">
                <div className="tracking-step">
                  <CheckCircle2 />
                  <div>
                    <span>
                      <strong>Quoted & Locked</strong>
                      <small>11:45 AM</small>
                    </span>
                    <p>Apex Tech vendor quote confirmed by buyer.</p>
                  </div>
                </div>
                <div className="tracking-step">
                  <CheckCircle2 />
                  <div>
                    <span>
                      <strong>Escrow Secured</strong>
                      <small>11:47 AM</small>
                    </span>
                    <p>₹3,450 secured in SpareLab Trust Escrow.</p>
                  </div>
                </div>
                <div className="tracking-step">
                  <CheckCircle2 />
                  <div>
                    <span>
                      <strong>Hub QA Inspection Cleared</strong>
                      <small>12:15 PM</small>
                    </span>
                    <p>Caliper scan: 256.00mm, 0% runout defect.</p>
                  </div>
                </div>
                <div className="tracking-step tracking-step--active">
                  <Truck />
                  <div>
                    <span>
                      <strong>Dispatched & GPS En-Route</strong>
                      <small>12:30 PM · Active</small>
                    </span>
                    <p>Van #MH-02-DN-4190 · Driver Amit K. · ETA 42 min</p>
                  </div>
                </div>
              </div>
              <button
                className="certificate-banner"
                onClick={() => setCertificateOpen(true)}
              >
                <span className="certificate-icon">
                  <ShieldCheck size={19} />
                </span>
                <span>
                  <strong>Digital QA Certificate #QA-89104</strong>
                  <small>Verified authenticity, weight & runout spec</small>
                </span>
                <span className="certificate-link">
                  View certificate <ArrowUpRight size={13} />
                </span>
              </button>
            </article>
          </div>
        </section>

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
              <h2>Featured OEM & OES components</h2>
              <p>Verified parts. Transparent pricing. Delivered to your bay.</p>
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
                  <button
                    onClick={() => {
                      setSearchQuery(product.part);
                      setSearchMessage(`Request started for ${product.part}`);
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Request / Buy <ArrowRight size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="conversion-section section-wrap cinematic-section"
          data-cinematic-section
        >
          <article
            className="conversion-card conversion-card--customer"
            id="customers"
          >
            <div className="conversion-orb" />
            <div className="conversion-content">
              <span className="conversion-label">
                <MapPin size={15} /> For car owners & fleets
              </span>
              <h2>
                Find the right parts.
                <br />
                Simplify your procurement.
              </h2>
              <p>
                Eliminate counterfeit risk, get instant fitment confirmation by
                VIN, and enjoy escrow-backed purchases with door-to-bay
                dispatch.
              </p>
              <ul>
                <li>
                  <Check size={14} /> 100% replacement warranty on fitment
                  errors
                </li>
                <li>
                  <Check size={14} /> Direct delivery to a verified repair
                  facility
                </li>
                <li>
                  <Check size={14} /> Transparent, itemized billing
                </li>
              </ul>
              <a href="#services" className="button button--primary">
                Get Started as a Customer <ArrowRight size={16} />
              </a>
            </div>
          </article>
          <article
            className="conversion-card conversion-card--vendor"
            id="vendors"
          >
            <div className="conversion-orb" />
            <div className="conversion-content">
              <span className="conversion-label">
                <Wrench size={15} /> For suppliers & distributors
              </span>
              <h2>
                Connect with SpareLab’s
                <br />
                procurement network.
              </h2>
              <p>
                Grow your distributor footprint with direct access to commercial
                RFQs from workshops, fleets, and vehicle owners.
              </p>
              <ul>
                <li>
                  <Check size={14} /> Verified RFQs with vehicle data
                </li>
                <li>
                  <Check size={14} /> Escrow-secured settlements
                </li>
                <li>
                  <Check size={14} /> Automated inventory integrations
                </li>
              </ul>
              <a href="#footer" className="button button--primary">
                Join as a Vendor <ArrowRight size={16} />
              </a>
            </div>
          </article>
        </section>

        <footer className="site-footer" data-cinematic-static id="footer">
          <div className="footer-inner">
            <div className="footer-main">
              <div className="footer-brand">
                <Wordmark footer />
                <p>
                  The enterprise procurement network for automotive parts
                  sourcing, OEM cross-cataloguing, and connected supply chains.
                </p>
                <span>
                  <BadgeCheck size={15} /> Verified OEM/OES supply network
                </span>
              </div>
              <div className="footer-column">
                <h3>Product</h3>
                <a href="#featured">OEM Catalogue</a>
                <a href="#services">VIN Match Engine</a>
                <a href="#workflow">Real-Time Tracking</a>
                <a href="#services">B2B Integrations</a>
              </div>
              <div className="footer-column">
                <h3>Solutions</h3>
                <a href="#customers">Fleet Operations</a>
                <a href="#vendors">Distributor Network</a>
                <a href="#workflow">Procurement Hubs</a>
                <a href="#customers">Repair Workshops</a>
              </div>
              <div className="footer-column">
                <h3>Company</h3>
                <a href="#top">About SpareLab</a>
                <a href="#footer">Careers</a>
                <a href="#footer">Press & Media</a>
                <a href="#footer">Contact Sales</a>
              </div>
              <div className="footer-column">
                <h3>Resources</h3>
                <a href="#workflow">How it works</a>
                <a href="#services">Parts catalogue</a>
                <a href="#footer">Help centre</a>
                <a href="#footer">Trust & Safety</a>
              </div>
            </div>
            <div className="footer-compliance">
              <span>
                <ShieldCheck size={15} /> Sourced through verified suppliers
              </span>
              <span>
                <LockKeyhole size={14} /> Secure procurement, protected data
              </span>
              <span>
                <BadgeCheck size={15} /> ISO 9001 aligned quality processes
              </span>
            </div>
            <div className="footer-bottom">
              <span>
                © 2026 SpareLab Technologies. All rights reserved. · Automotive
                B2B Network
              </span>
              <div>
                <a href="#footer">Privacy</a>
                <a href="#footer">Terms</a>
                <a href="#footer">Compliance</a>
                <a href="#footer">Security</a>
              </div>
              <span className="footer-made">
                Built around your vehicle <span>✳</span>
              </span>
            </div>
          </div>
        </footer>

        {certificateOpen && (
          <div
            className="modal-backdrop"
            role="presentation"
            onClick={(event) => {
              if (event.target === event.currentTarget)
                setCertificateOpen(false);
            }}
          >
            <section
              className="certificate-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-title"
            >
              <button
                className="modal-close"
                aria-label="Close certificate"
                onClick={() => setCertificateOpen(false)}
              >
                <X size={18} />
              </button>
              <span className="modal-seal">
                <ShieldCheck size={30} />
              </span>
              <span className="micro-label">SpareLab quality assurance</span>
              <h2 id="certificate-title">Digital QA Certificate</h2>
              <p className="certificate-id">
                Certificate #QA-89104 · Order #SL-8842-MH
              </p>
              <div className="certificate-details">
                <span>
                  <CheckCircle2 size={16} /> Part authenticity verified
                </span>
                <span>
                  <CheckCircle2 size={16} /> Dimensions: 256.00mm verified
                </span>
                <span>
                  <CheckCircle2 size={16} /> Runout within specification
                </span>
                <span>
                  <CheckCircle2 size={16} /> Tamper-proof dispatch seal applied
                </span>
              </div>
              <button
                className="button button--primary modal-done"
                onClick={() => setCertificateOpen(false)}
              >
                Done <Check size={15} />
              </button>
            </section>
          </div>
        )}
      </main>
    </>
  );
}
