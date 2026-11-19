import { BadgeCheck, LockKeyhole, ShieldCheck } from "lucide-react";
import { Wordmark } from "@/components/LandingPageShared";

export default function LandingFooter() {
  return (
    <footer className="site-footer" data-cinematic-static id="footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <Wordmark footer />
            <p>
              Sparelab sources genuine OE parts first from verified, authorised
              vendors, with fitment checked and every quote clearly classified.
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
            <a href="#customers">Fleet Operations</a>
            <a href="#vendors">Distributor Network</a>
            <a href="#workflow">Procurement Hubs</a>
            <a href="#customers">Repair Workshops</a>
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
            © 2026 SpareLab Technologies. All rights reserved. · Automotive B2B
            Network
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
  );
}
