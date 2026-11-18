import { ArrowRight, Check, MapPin, Wrench } from "lucide-react";

export default function LandingConversionSection() {
  return (
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
            VIN, and enjoy escrow-backed purchases with door-to-bay dispatch.
          </p>
          <ul>
            <li>
              <Check size={14} /> 100% replacement warranty on fitment errors
            </li>
            <li>
              <Check size={14} /> Direct delivery to a verified repair facility
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
          <h2>Your stock, in front of every serious buyer.</h2>
          <p>
            Sparelab connects authorised distributors and verified stockists
            with workshops, garages, and fleets that need genuine parts — with
            payments verified before you dispatch.
          </p>
          <ul className="vendor-benefits">
            <li>
              <Check size={14} /> Serious, ready-to-buy demand qualified by the
              Sparelab team
            </li>
            <li>
              <Check size={14} /> List inventory once with a simple
              spreadsheet; reach buyers across our cities
            </li>
            <li>
              <Check size={14} /> Payment verified before an order is confirmed
              to you
            </li>
            <li>
              <Check size={14} /> One professional counterparty: Sparelab
              handles the buyer relationship
            </li>
            <li>
              <Check size={14} /> Structured RFQs include part number, brand,
              model, and trim
            </li>
            <li>
              <Check size={14} /> Verified-vendor badge helps genuine stock
              stand apart from the grey market
            </li>
          </ul>
          <h3 className="vendor-onboarding-title">Become a Sparelab vendor</h3>
          <ol className="vendor-onboarding">
            <li>
              <span>1</span> Write to us with your business details and brands
              stocked.
            </li>
            <li>
              <span>2</span> Our team verifies your business, GST,
              authorisations, and references.
            </li>
            <li>
              <span>3</span> Upload your inventory and start receiving RFQs.
            </li>
          </ol>
          <a
            href="https://dev.sparelab.co.in/register?type=vendor"
            className="button button--primary"
            target="_blank"
            rel="noreferrer"
          >
            Become a Sparelab vendor <ArrowRight size={16} />
          </a>
          <p className="vendor-contact">
            Sign up in minutes — our procurement team reviews your business
            before you go live.{" "}
            <a href="mailto:hello@sparelab.co.in?subject=Vendor%20onboarding%20on%20Sparelab">
              Prefer to talk first? Write to hello@sparelab.co.in
            </a>
          </p>
        </div>
      </article>
    </section>
  );
}
