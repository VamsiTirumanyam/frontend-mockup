"use client";

import { CheckCircle2 } from "lucide-react";
import { Eyebrow, pageContainerClassName } from "./Shared";

export default function OEPromiseSection() {
  return (
    <section
      className={`oe-promise-section ${pageContainerClassName} relative z-[1]`}
      data-cinematic-section
      id="about"
    >
      <div className="oe-promise-card" data-oe-promise>
        <div className="oe-promise-copy">
          <Eyebrow className="mb-2.5">About Sparelab</Eyebrow>
          <h1>OE first, always.</h1>
          <h3 className="oe-promise-subtitle">
            The part your vehicle left the factory with.
          </h3>
          <p>
            Every vehicle is built with Original Equipment - parts engineered
            for that exact model. The aftermarket is a maze of look-alikes, and
            the wrong part costs you twice: once to buy it, and again when it
            fails. Sparelab exists so you never have to gamble. We source{" "}
            <strong>Genuine OE parts first</strong>, from authorised, verified
            vendors, and we tell you exactly what you're getting - OE, OEM or
            OES - on every quote.
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
    </section>
  );
}
