"use client";

import {
  ArrowRight,
  BadgeCheck,
  Check,
  LockKeyhole,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { pageContainerClassName, Wordmark } from "./Shared";

export default function ConversionFooter() {
  return (
    <>
      <section
        className={`conversion-section ${pageContainerClassName} relative z-[1] grid grid-cols-1 gap-[15px] pb-[74px] max-[760px]:pb-[55px] max-[520px]:gap-[10px]`}
        data-cinematic-section
      >
        <article
          className="conversion-card conversion-card--vendor"
          id="vendors"
        >
          <div className="conversion-orb" />
          <div className="conversion-content">
            <div className="vendor-layout grid grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)] items-stretch gap-[clamp(28px,5vw,64px)] max-[760px]:grid-cols-1 max-[760px]:gap-6">
              <div className="vendor-main">
                <span className="conversion-label">
                  <Wrench size={15} /> For suppliers & distributors
                </span>
                <h2>
                  Your inventory deserves
                  <br />a better marketplace.
                </h2>
                <p className="vendor-intro">
                  Connect your genuine parts inventory with serious workshops,
                  garages, and fleets — through one trusted, professionally
                  managed channel.
                </p>
                <ul className="vendor-benefits grid max-w-[700px] grid-cols-2 gap-x-[22px] gap-y-[10px] mt-6 max-[520px]:grid-cols-1 max-[520px]:gap-y-[7px]">
                  <li>
                    <Check size={14} /> Qualified buyers ready to purchase
                  </li>
                  <li>
                    <Check size={14} /> One simple inventory upload
                  </li>
                  <li>
                    <Check size={14} /> Verified payment before dispatch
                  </li>
                  <li>
                    <Check size={14} /> Sparelab manages the relationship
                  </li>
                  <li>
                    <Check size={14} /> Detailed VIN and fitment requests
                  </li>
                  <li>
                    <Check size={14} /> A badge that distinguishes genuine stock
                  </li>
                </ul>
              </div>
              <aside className="vendor-onboarding-panel">
                <h3 className="vendor-onboarding-title">
                  Become a Sparelab vendor
                </h3>
                <ol className="vendor-onboarding">
                  <li>
                    <span>1</span>
                    <div>
                      <strong>Share your business</strong>
                      <small>Tell us your brands and inventory</small>
                    </div>
                  </li>
                  <li>
                    <span>2</span>
                    <div>
                      <strong>Complete verification</strong>
                      <small>GST, authorisations, and references</small>
                    </div>
                  </li>
                  <li>
                    <span>3</span>
                    <div>
                      <strong>Go live</strong>
                      <small>Upload stock and receive qualified RFQs</small>
                    </div>
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
                  Prefer to talk first?{" "}
                  <a href="mailto:hello@sparelab.co.in?subject=Vendor%20onboarding%20on%20Sparelab">
                    hello@sparelab.co.in
                  </a>
                </p>
              </aside>
            </div>
          </div>
        </article>
      </section>
      <footer className="site-footer" data-cinematic-static id="footer">
        <div className={`${pageContainerClassName} footer-inner`}>
          <div className="footer-main grid grid-cols-[1.7fr_repeat(4,1fr)] gap-[30px] pb-[28px] max-[1050px]:gap-[19px] max-[760px]:grid-cols-[1.5fr_repeat(2,1fr)] max-[760px]:gap-y-6 max-[520px]:grid-cols-2 max-[520px]:gap-x-[15px] max-[520px]:gap-y-[23px]">
            <div className="footer-brand max-[760px]:col-span-3 max-[520px]:col-span-2">
              <Wordmark footer />
              <p>
                Sparelab sources genuine OE parts first from verified,
                authorised vendors, with fitment checked and every quote clearly
                classified.
              </p>
              <span>
                <BadgeCheck size={15} /> Genuine OE-first sourcing
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
              <a href="#featured">OEM Catalogue</a>
              <a href="#vendors">Distributor Network</a>
              <a href="#workflow">Procurement Hubs</a>
              <a href="#about">About OE-first Sourcing</a>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <a href="#about">About Sparelab</a>
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
    </>
  );
}
