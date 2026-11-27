"use client";

import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Circle,
  FileText,
  LockKeyhole,
  MessageSquare,
  PackageCheck,
  Send,
  ShieldCheck,
  ShoppingCart,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { pageContainerClassName, SectionHeading } from "./Shared";

type EnquiryItem = {
  partName: string;
  quantity: number;
  unit: "Nos" | "Set";
};

const STAGE = {
  awaiting: -1,
  enquiry: 0,
  quotation: 1,
  purchase: 2,
  delivered: 3,
} as const;

const enquiryNumber = "ENQ-SL-8842";
const requestedParts: EnquiryItem[] = [
  { partName: "Oil filter", quantity: 1, unit: "Nos" },
  { partName: "Air filter", quantity: 1, unit: "Nos" },
  { partName: "Brake pads", quantity: 1, unit: "Set" },
];

const enquiryStages = [
  {
    title: "Enquiry",
    description: "Three part requests sent to Apex Tech Autospares.",
    Icon: MessageSquare,
  },
  {
    title: "Quotation",
    description: "A quote for all three requested parts is ready.",
    Icon: FileText,
  },
  {
    title: "Purchase",
    description: "Quote accepted and purchase confirmed with the supplier.",
    Icon: ShoppingCart,
  },
  {
    title: "Delivered",
    description: "All requested parts delivered to your workshop.",
    Icon: PackageCheck,
  },
];

export default function TelemetrySection() {
  const [message, setMessage] = useState("");
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);
  const [statusIndex, setStatusIndex] = useState<number>(STAGE.awaiting);
  const certificateDialog = useRef<HTMLDialogElement>(null);

  const submitPart = useCallback((item: EnquiryItem, index: number) => {
    setEnquiryItems((current) =>
      current.some((existing) => existing.partName === item.partName)
        ? current
        : [...current, item],
    );
    setMessage("");
    if (index === requestedParts.length - 1) {
      setStatusIndex(STAGE.enquiry);
    }
  }, []);

  useEffect(() => {
    if (enquiryItems.length >= requestedParts.length) return;

    const itemIndex = enquiryItems.length;
    const item = requestedParts[itemIndex];
    let characterIndex = 0;
    let typingInterval: number | undefined;
    let sendTimeout: number | undefined;
    const startTimeout = window.setTimeout(() => {
      typingInterval = window.setInterval(() => {
        characterIndex += 1;
        setMessage(item.partName.slice(0, characterIndex));

        if (characterIndex >= item.partName.length) {
          window.clearInterval(typingInterval);
          sendTimeout = window.setTimeout(
            () => submitPart(item, itemIndex),
            500,
          );
        }
      }, 85);
    }, 450);

    return () => {
      window.clearTimeout(startTimeout);
      if (typingInterval !== undefined) window.clearInterval(typingInterval);
      if (sendTimeout !== undefined) window.clearTimeout(sendTimeout);
    };
  }, [enquiryItems.length, submitPart]);

  const enquiryCreated = statusIndex >= STAGE.enquiry;
  const quoteReady = statusIndex >= STAGE.quotation;
  const acceptedQuote = statusIndex >= STAGE.purchase;

  useEffect(() => {
    if (statusIndex !== STAGE.enquiry && statusIndex !== STAGE.purchase) {
      return;
    }

    const nextStage =
      statusIndex === STAGE.enquiry ? STAGE.quotation : STAGE.delivered;
    const timeout = window.setTimeout(() => setStatusIndex(nextStage), 2800);

    return () => window.clearTimeout(timeout);
  }, [statusIndex]);

  return (
    <section
      className={`telemetry-section ${pageContainerClassName} relative z-[1]`}
      data-cinematic-section
    >
      <SectionHeading
        eyebrow="Enterprise telemetry"
        title="Unified communication & live tracking"
        description="Operational tools designed for real-time buyer-supplier coordination and quality-audited delivery."
      />
      <div className="telemetry-grid grid grid-cols-2 items-stretch gap-[17px] max-[760px]:gap-3 max-[520px]:grid-cols-1">
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
            {enquiryItems.length > 0 && (
              <div className="enquiry-cart">
                <div className="enquiry-cart-head">
                  <span>
                    <ShoppingCart size={14} /> Enquiry cart
                  </span>
                  <strong>#{enquiryNumber}</strong>
                </div>
                <table aria-label="Enquiry cart items">
                  <thead>
                    <tr>
                      <th scope="col">Part name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Quantity type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiryItems.map((item) => (
                      <tr key={item.partName}>
                        <td>{item.partName}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {enquiryCreated && (
              <>
                <div className="chat-bubble chat-bubble--vendor">
                  <p>
                    <strong>Enquiry created.</strong> We&apos;re checking
                    availability for all three requested parts.
                  </p>
                  {quoteReady && (
                    <div className="quote-card">
                      <div className="quote-top">
                        <span>
                          <strong>
                            Oil filter, air filter &amp; brake pads
                          </strong>
                          <small>3 items · Apex Tech Autospares</small>
                        </span>
                        <span className="fit-pill">
                          <Check size={11} /> Quote
                        </span>
                      </div>
                      <div className="quote-bottom">
                        <span>
                          Total quote <strong>₹3,250</strong>{" "}
                          <small>incl. taxes</small>
                        </span>
                        <button
                          className={
                            acceptedQuote
                              ? "accept-quote accept-quote--done"
                              : "accept-quote"
                          }
                          type="button"
                          disabled={acceptedQuote}
                          onClick={() => setStatusIndex(STAGE.purchase)}
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
                  )}
                  <small>
                    {quoteReady ? "Quote ready" : "Enquiry received"}
                  </small>
                </div>
              </>
            )}
          </div>
          {!enquiryCreated && (
            <div className="message-form">
              <input
                aria-label="Automatically entering requested parts"
                value={message}
                readOnly
                placeholder="Adding requested parts..."
              />
              <button
                aria-label="Automatically sending part request"
                type="button"
                disabled
              >
                <Send size={15} />
              </button>
            </div>
          )}
        </article>
        <article className="interface-card tracking-card">
          <div className="tracking-head">
            <div>
              <span className="micro-label">Consignment telemetry</span>
              <strong>Enquiry #{enquiryNumber}</strong>
            </div>
            <span className="qa-pill">
              {enquiryCreated ? <Check size={12} /> : <Circle size={10} />}
              {enquiryCreated
                ? enquiryStages[statusIndex].title
                : "Awaiting enquiry"}
            </span>
          </div>
          <div
            className="tracking-steps"
            role="list"
            aria-label="Consignment progress"
          >
            {enquiryStages.map(({ title, description, Icon }, index) => {
              const isComplete = statusIndex > index;
              const isActive = statusIndex === index;
              const StatusIcon = isComplete ? CheckCircle2 : Icon;

              return (
                <div
                  className={`tracking-step ${
                    isComplete
                      ? "tracking-step--complete"
                      : isActive
                        ? "tracking-step--active"
                        : "tracking-step--pending"
                  }`}
                  key={title}
                  role="listitem"
                  aria-current={isActive ? "step" : undefined}
                >
                  <StatusIcon />
                  <div>
                    <span>
                      <strong>{title}</strong>
                      <small>
                        {isComplete
                          ? "Complete"
                          : isActive
                            ? "In progress"
                            : "Upcoming"}
                      </small>
                    </span>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="certificate-banner"
            type="button"
            onClick={() => certificateDialog.current?.showModal()}
          >
            <span className="certificate-icon">
              <ShieldCheck size={19} />
            </span>
            <span>
              <strong>Digital QA Certificate #QA-89104</strong>
              <small>Filter authenticity and delivery details</small>
            </span>
            <span className="certificate-link">
              View certificate <ArrowUpRight size={13} />
            </span>
          </button>
        </article>
      </div>
      <dialog
        ref={certificateDialog}
        className="certificate-modal"
        aria-labelledby="certificate-title"
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;

          const bounds = event.currentTarget.getBoundingClientRect();
          const clickedBackdrop =
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom;
          if (clickedBackdrop) event.currentTarget.close();
        }}
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Close certificate"
          onClick={() => certificateDialog.current?.close()}
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
            <CheckCircle2 size={16} /> Oil filter authenticity verified
          </span>
          <span>
            <CheckCircle2 size={16} /> Air filter specification verified
          </span>
          <span>
            <CheckCircle2 size={16} /> Brake pad set and supplier order
            confirmed
          </span>
          <span>
            <CheckCircle2 size={16} /> Delivery handoff recorded
          </span>
        </div>
        <form method="dialog">
          <button className="button button--primary modal-done">
            Done <Check size={15} />
          </button>
        </form>
      </dialog>
    </section>
  );
}
