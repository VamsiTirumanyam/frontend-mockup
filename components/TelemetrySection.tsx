"use client";

import { ArrowUpRight, Check, CheckCircle2, LockKeyhole, Send, ShieldCheck, Truck, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { pageContainerClassName, SectionHeading } from "./Shared";

export default function TelemetrySection() {
  const [acceptedQuote, setAcceptedQuote] = useState(false);
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [certificateOpen, setCertificateOpen] = useState(false);

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;
    setSentMessage(message.trim());
    setMessage("");
  };

  return (
    <section className={`telemetry-section ${pageContainerClassName} cinematic-section`} data-cinematic-section>
      <SectionHeading eyebrow="Enterprise telemetry" title="Unified communication & live tracking" description="Operational tools designed for real-time buyer-supplier coordination and quality-audited delivery." />
      <div className="telemetry-grid grid grid-cols-2 items-stretch gap-[17px] max-[760px]:gap-3 max-[520px]:grid-cols-1">
        <article className="interface-card chat-card">
          <div className="interface-head"><div className="vendor-identity"><span className="vendor-avatar">AT</span><span><strong>Apex Tech Autospares</strong><small>Verified Tier-1 Distro · Bay 4 Node</small></span></div><span className="encrypted-pill"><LockKeyhole size={11} /> Encrypted RFQ</span></div>
          <div className="chat-thread">
            <div className="chat-bubble chat-bubble--buyer"><p>Checking inventory fitment for VW Polo GT (WVWZZZ6RZ...). Need front brake disc assembly with mounting bolts.</p><small>11:42 AM</small></div>
            {sentMessage && <div className="chat-bubble chat-bubble--buyer"><p>{sentMessage}</p><small>Just now</small></div>}
            <div className="chat-bubble chat-bubble--vendor"><p><strong>Exact OEM Brembo match confirmed in stock.</strong> Blueprinted 256mm ventilated spec with ceramic pads included.</p>
              <div className="quote-card"><div className="quote-top"><span><strong>Brembo 09.7011.14</strong><small>Hub: Mumbai Hub B</small></span><span className="fit-pill"><Check size={11} /> 100% Fit</span></div><div className="quote-bottom"><span>Escrow quote <strong>₹3,450</strong> <small>incl. taxes</small></span><button className={acceptedQuote ? "accept-quote accept-quote--done" : "accept-quote"} onClick={() => setAcceptedQuote(!acceptedQuote)}>{acceptedQuote ? <><Check size={12} /> Quote Accepted</> : "Accept Quote"}</button></div></div>
              <small>11:44 AM</small>
            </div>
          </div>
          <form className="message-form" onSubmit={sendMessage}><input aria-label="Message supplier" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Type a clarification or upload chassis tag..." /><button aria-label="Send message" type="submit"><Send size={15} /></button></form>
        </article>
        <article className="interface-card tracking-card">
          <div className="tracking-head"><div><span className="micro-label">Consignment telemetry</span><strong>Order #SL-8842-MH</strong></div><span className="qa-pill"><Check size={12} /> Hub QA Passed</span></div>
          <div className="tracking-steps">
            {[["Quoted & Locked", "11:45 AM", "Apex Tech vendor quote confirmed by buyer."], ["Escrow Secured", "11:47 AM", "₹3,450 secured in SpareLab Trust Escrow."], ["Hub QA Inspection Cleared", "12:15 PM", "Caliper scan: 256.00mm, 0% runout defect."]].map(([title, time, text]) => <div className="tracking-step" key={title}><CheckCircle2 /><div><span><strong>{title}</strong><small>{time}</small></span><p>{text}</p></div></div>)}
            <div className="tracking-step tracking-step--active"><Truck /><div><span><strong>Dispatched & GPS En-Route</strong><small>12:30 PM · Active</small></span><p>Van #MH-02-DN-4190 · Driver Amit K. · ETA 42 min</p></div></div>
          </div>
          <button className="certificate-banner" onClick={() => setCertificateOpen(true)}><span className="certificate-icon"><ShieldCheck size={19} /></span><span><strong>Digital QA Certificate #QA-89104</strong><small>Verified authenticity, weight & runout spec</small></span><span className="certificate-link">View certificate <ArrowUpRight size={13} /></span></button>
        </article>
      </div>
      {certificateOpen && (
        <div className="modal-backdrop" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setCertificateOpen(false); }}>
          <section className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title">
            <button className="modal-close" aria-label="Close certificate" onClick={() => setCertificateOpen(false)}><X size={18} /></button>
            <span className="modal-seal"><ShieldCheck size={30} /></span><span className="micro-label">SpareLab quality assurance</span>
            <h2 id="certificate-title">Digital QA Certificate</h2><p className="certificate-id">Certificate #QA-89104 · Order #SL-8842-MH</p>
            <div className="certificate-details"><span><CheckCircle2 size={16} /> Part authenticity verified</span><span><CheckCircle2 size={16} /> Dimensions: 256.00mm verified</span><span><CheckCircle2 size={16} /> Runout within specification</span><span><CheckCircle2 size={16} /> Tamper-proof dispatch seal applied</span></div>
            <button className="button button--primary modal-done" onClick={() => setCertificateOpen(false)}>Done <Check size={15} /></button>
          </section>
        </div>
      )}
    </section>
  );
}
