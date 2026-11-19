import {
  ArrowRight,
  Check,
  Cpu,
  LockKeyhole,
  Shield,
} from "lucide-react";
import { brands } from "@/components/LandingPageData";
import { SectionHeading } from "@/components/LandingPageShared";

export function NetworkStats() {
  return (
    <section
      className="stats-section cinematic-section"
      data-cinematic-section
      aria-label="Sparelab network at a glance"
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
      </div>
    </section>
  );
}

export function SupportedBrands() {
  return (
    <section
      className="brands-section cinematic-section"
      data-cinematic-section
      aria-label="Supported automotive brands"
    >
      <div className="section-wrap brands-inner">
        <div className="brands-pill">
          <p className="brands-eyebrow">
            <span className="eyebrow-dot" />
            Supported vehicle brands & OEM networks
            <span className="brands-divider">·</span>
            100% VIN fitment across 45,000+ models
          </p>
          <div className="brands-marquee" aria-label="Supported vehicle brands">
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
  );
}

export function TrustSection() {
  return (
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
            Trade margins, client lists, vendor quotes, and commercial records
            remain private to your business.
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
          SpareLab keeps information shared across the automotive marketplace
          safe, private, and protected.
        </p>
        <a href="#footer">
          Learn about Trust & Safety <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
