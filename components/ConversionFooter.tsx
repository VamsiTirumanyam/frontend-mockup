"use client";

import { ArrowRight, BadgeCheck, Check, LockKeyhole, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { pageContainerClassName, Wordmark } from "./Shared";

export default function ConversionFooter() {
  return (
    <>
      <section className={`conversion-section ${pageContainerClassName} cinematic-section`} data-cinematic-section>
        <article className="conversion-card conversion-card--customer" id="customers">
          <div className="conversion-orb" />
          <div className="conversion-content">
            <span className="conversion-label"><MapPin size={15} /> For car owners & fleets</span>
            <h2>Find the right parts.<br />Simplify your procurement.</h2>
            <p>Eliminate counterfeit risk, get instant fitment confirmation by VIN, and enjoy escrow-backed purchases with door-to-bay dispatch.</p>
            <ul><li><Check size={14} /> 100% replacement warranty on fitment errors</li><li><Check size={14} /> Direct delivery to a verified repair facility</li><li><Check size={14} /> Transparent, itemized billing</li></ul>
            <a href="#services" className="button button--primary">Get Started as a Customer <ArrowRight size={16} /></a>
          </div>
        </article>
        <article className="conversion-card conversion-card--vendor" id="vendors">
          <div className="conversion-orb" />
          <div className="conversion-content">
            <span className="conversion-label"><Wrench size={15} /> For suppliers & distributors</span>
            <h2>Your stock, in front of every serious buyer.</h2>
            <p>Sparelab connects authorised distributors and verified stockists with workshops, garages, and fleets that need genuine parts — with payments verified before you dispatch.</p>
            <ul className="vendor-benefits">
              <li><Check size={14} /> Serious, ready-to-buy demand qualified by the Sparelab team</li>
              <li><Check size={14} /> List inventory once with a simple spreadsheet; reach buyers across our cities</li>
              <li><Check size={14} /> Payment verified before an order is confirmed to you</li>
              <li><Check size={14} /> One professional counterparty: Sparelab handles the buyer relationship</li>
              <li><Check size={14} /> Structured RFQs include part number, brand, model, and trim</li>
              <li><Check size={14} /> Verified-vendor badge helps genuine stock stand apart from the grey market</li>
            </ul>
            <h3 className="vendor-onboarding-title">Become a Sparelab vendor</h3>
            <ol className="vendor-onboarding"><li><span>1</span> Write to us with your business details and brands stocked.</li><li><span>2</span> Our team verifies your business, GST, authorisations, and references.</li><li><span>3</span> Upload your inventory and start receiving RFQs.</li></ol>
            <a href="https://dev.sparelab.co.in/register?type=vendor" className="button button--primary" target="_blank" rel="noreferrer">Become a Sparelab vendor <ArrowRight size={16} /></a>
            <p className="vendor-contact">Sign up in minutes — our procurement team reviews your business before you go live. <a href="mailto:hello@sparelab.co.in?subject=Vendor%20onboarding%20on%20Sparelab">Prefer to talk first? Write to hello@sparelab.co.in</a></p>
          </div>
        </article>
      </section>
      <footer className="site-footer" data-cinematic-static id="footer">
        <div className={`${pageContainerClassName} footer-inner`}>
          <div className="footer-main">
            <div className="footer-brand"><Wordmark footer /><p>Sparelab sources genuine OE parts first from verified, authorised vendors, with fitment checked and every quote clearly classified.</p><span><BadgeCheck size={15} /> Genuine OE-first sourcing</span></div>
            <div className="footer-column"><h3>Product</h3><a href="#featured">OEM Catalogue</a><a href="#services">VIN Match Engine</a><a href="#workflow">Real-Time Tracking</a><a href="#services">B2B Integrations</a></div>
            <div className="footer-column"><h3>Solutions</h3><a href="#customers">Fleet Operations</a><a href="#vendors">Distributor Network</a><a href="#workflow">Procurement Hubs</a><a href="#customers">Repair Workshops</a></div>
            <div className="footer-column"><h3>Company</h3><a href="#about">About Sparelab</a><a href="#footer">Careers</a><a href="#footer">Press & Media</a><a href="#footer">Contact Sales</a></div>
            <div className="footer-column"><h3>Resources</h3><a href="#workflow">How it works</a><a href="#services">Parts catalogue</a><a href="#footer">Help centre</a><a href="#footer">Trust & Safety</a></div>
          </div>
          <div className="footer-compliance"><span><ShieldCheck size={15} /> Sourced through verified suppliers</span><span><LockKeyhole size={14} /> Secure procurement, protected data</span><span><BadgeCheck size={15} /> ISO 9001 aligned quality processes</span></div>
          <div className="footer-bottom"><span>© 2026 SpareLab Technologies. All rights reserved. · Automotive B2B Network</span><div><a href="#footer">Privacy</a><a href="#footer">Terms</a><a href="#footer">Compliance</a><a href="#footer">Security</a></div><span className="footer-made">Built around your vehicle <span>✳</span></span></div>
        </div>
      </footer>
    </>
  );
}
