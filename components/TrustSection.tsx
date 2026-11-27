"use client";

import { ArrowRight, Check, Cpu, LockKeyhole, Shield } from "lucide-react";
import { pageContainerClassName, SectionHeading } from "./Shared";

export default function TrustSection() {
  const cards = [
    { icon: Shield, tag: "Vehicle & personal privacy", title: "Customer Data Protection", text: "Vehicle details, customer service history, and enquiry data are stored securely and kept confidential.", assurance: "Confidential owner records" },
    { icon: LockKeyhole, tag: "Garage & supplier protection", title: "Secure Business Information", text: "Trade margins, client lists, vendor quotes, and commercial records remain private to your business.", assurance: "Private trade negotiations" },
    { icon: Cpu, tag: "Cloud security", title: "Encrypted Cloud Infrastructure", text: "Platform communications and sensitive records are safeguarded through encrypted cloud infrastructure.", assurance: "Protected cloud channels" },
  ];

  return (
    <section className={`trust-section ${pageContainerClassName} cinematic-section`} data-cinematic-section>
      <SectionHeading eyebrow="Your data. Your business. Protected." title={<>Customer and business data.<br className="desktop-break" /> <span>Safe, secure, and encrypted in the cloud.</span></>} description="In an industry built on trust, SpareLab protects sensitive vehicle records, confidential garage-vendor negotiations, quotes, and customer communications." />
      <div className="trust-grid grid grid-cols-3 gap-4 max-[760px]:gap-[10px] max-[520px]:grid-cols-1">
        {cards.map(({ icon: Icon, tag, title, text, assurance }) => (
          <article className="trust-card" key={title}>
            <div className="trust-card-top"><span className="icon-tile"><Icon size={20} /></span><span className="card-tag">{tag}</span></div>
            <h3>{title}</h3><p>{text}</p>
            <div className="card-assurance"><Check size={14} /> {assurance}</div>
          </article>
        ))}
      </div>
      <div className="trust-banner">
        <p><strong>Built for trust between customers and automotive businesses:</strong> SpareLab keeps information shared across the automotive marketplace safe, private, and protected.</p>
        <a href="#footer">Learn about Trust & Safety <ArrowRight size={14} /></a>
      </div>
    </section>
  );
}
