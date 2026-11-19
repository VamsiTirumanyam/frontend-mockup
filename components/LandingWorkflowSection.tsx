import { Check, CheckCircle2 } from "lucide-react";
import { testimonials, workflow } from "@/components/LandingPageData";

export default function LandingWorkflowSection() {
  return (
    <section
      className="workflow-section section-wrap cinematic-section"
      data-cinematic-section
      id="workflow"
    >
      <div className="oe-promise-card" id="about">
        <div className="oe-promise-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            About Sparelab
          </span>
          <h2>OE first, always.</h2>
          <h3 className="oe-promise-subtitle">
            The part your vehicle left the factory with.
          </h3>
          <p>
            Every vehicle is built with Original Equipment — parts engineered
            for that exact model. The aftermarket is a maze of look-alikes, and
            the wrong part costs you twice: once to buy it, and again when it
            fails. Sparelab exists so you never have to gamble. We source{" "}
            <strong>Genuine OE parts first</strong>, from authorised, verified
            vendors, and we tell you exactly what you&apos;re getting — OE, OEM
            or OES — on every quote.
          </p>
        </div>
        <ul className="oe-promise-points">
          <li>
            <CheckCircle2 size={17} /> Classification declared on every quote
          </li>
          <li>
            <CheckCircle2 size={17} /> Verified, authorised vendors only
          </li>
          <li>
            <CheckCircle2 size={17} /> Fitment checked against your exact trim
          </li>
        </ul>
      </div>
      <div className="workflow-heading">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          The Sparelab process
        </span>
        <h2>
          From enquiry to delivery <span>in six steps.</span>
        </h2>
        <p>
          A clear journey from your first request to the right part at your
          workshop or fleet yard.
        </p>
      </div>
      <div className="workflow-grid">
        {workflow.map(({ number, title, description, note, icon: Icon }) => (
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
        ))}
      </div>
      <div className="reviews-heading">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          What buyers and sellers say
        </span>
        <h2>Trusted on both sides of every order.</h2>
      </div>
      <div className="reviews-grid">
        {testimonials.map(({ quote, name, role, initials }) => (
          <article className="review-card" key={name}>
            <div className="review-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <blockquote>“{quote}”</blockquote>
            <div className="review-author">
              <span className="review-avatar">{initials}</span>
              <span>
                <strong>{name}</strong>
                <small>{role}</small>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
