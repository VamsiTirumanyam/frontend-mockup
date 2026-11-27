"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Wordmark } from "./Shared";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Wordmark />
        <button
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          className={`main-nav${menuOpen ? " main-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={() => setMenuOpen(false)}>Products & Services</a>
          <a href="#workflow" onClick={() => setMenuOpen(false)}>How It Works</a>
          {/* <a href="#customers" onClick={() => setMenuOpen(false)}>For Customers</a> */}
          <a href="#vendors" onClick={() => setMenuOpen(false)}>For Vendors</a>
        </nav>
        <div className="nav-actions">
          <a className="sign-in" href="#footer">Sign In</a>
          <a className="button button--primary button--nav" href="#customers">
            Get Started <span className="avatar-icon">↗</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
