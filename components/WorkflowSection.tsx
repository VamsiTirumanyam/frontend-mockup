"use client";

import {
  Activity,
  Check,
  ClipboardCheck,
  LockKeyhole,
  Search,
  Truck,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow, pageContainerClassName } from "./Shared";

const workflow: {
  number: string;
  title: string;
  description: string;
  note: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Raise an enquiry",
    description:
      "Tell us the part number, name, or send a photo, along with your vehicle brand, model, and trim. A VIN helps us confirm exact fitment.",
    note: "Part number, name, photo, or VIN",
    icon: Search,
  },
  {
    number: "02",
    title: "We source from verified vendors",
    description:
      "Our procurement team searches its network of verified, authorised vendors for genuine OE parts. No market haggling required.",
    note: "Genuine OE parts sourced first",
    icon: Zap,
  },
  {
    number: "03",
    title: "Get a clear quote",
    description:
      "Review one consolidated quote with the part, OE / OEM / OES classification, price, and delivery time. No hidden charges.",
    note: "Classification on every quote",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Accept and pay securely",
    description:
      "Accept the quote and pay by UPI QR or bank transfer. Your order is confirmed to the vendor only after payment is verified.",
    note: "Payment verified before confirmation",
    icon: LockKeyhole,
  },
  {
    number: "05",
    title: "Track your order",
    description:
      "Follow your order from confirmation through dispatch, with updates in your Sparelab chat — the same thread where your enquiry began.",
    note: "Updates in your enquiry chat",
    icon: Activity,
  },
  {
    number: "06",
    title: "Delivered to your door",
    description:
      "The right part arrives at your workshop or fleet yard. If there is a wrong part or quality issue, our team handles the return with the vendor.",
    note: "Returns handled with the vendor",
    icon: Truck,
  },
];

const testimonials = [
  {
    quote:
      "One RFQ in the morning and the genuine part is at my workshop by evening. Sparelab has replaced three phone calls and a market run.",
    name: "Ravi Kumar",
    role: "RK Auto Garage, Bengaluru",
    initials: "RK",
  },
  {
    quote:
      "For a 40-vehicle fleet, downtime is everything. Verified OE parts with a clear quote before we commit — that's why we moved our sourcing here.",
    name: "Meera Nair",
    role: "Fleet operations, Chennai",
    initials: "MN",
  },
  {
    quote:
      "As a vendor, I list my stock once and get serious, ready-to-buy demand. Payments are clean and the process is transparent.",
    name: "Imran Shaikh",
    role: "Authorised parts distributor, Pune",
    initials: "IS",
  },
];

export default function WorkflowSection() {
  return (
    <section
      className={`workflow-section ${pageContainerClassName} relative z-[1]`}
      data-cinematic-section
      id="workflow"
    >
      <div className="workflow-heading">
        <Eyebrow>The Sparelab process</Eyebrow>
        <h2>
          From enquiry to delivery <span>in six steps.</span>
        </h2>
        <p>
          A clear journey from your first request to the right part at your
          workshop or fleet yard.
        </p>
      </div>
      <div className="workflow-grid grid grid-cols-3 gap-[13px] max-[760px]:grid-cols-2 max-[520px]:grid-cols-1 max-[520px]:gap-[10px]">
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
        <Eyebrow>What buyers and sellers say</Eyebrow>
        <h2>Trusted on both sides of every order.</h2>
      </div>
      <div className="reviews-grid grid grid-cols-3 gap-[13px] max-[760px]:grid-cols-1">
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
