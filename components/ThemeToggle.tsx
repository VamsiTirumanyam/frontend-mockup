"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${nextTheme} mode`}
      disabled={isTransitioning}
    >
      <span className={`theme-toggle-icon${theme === "light" ? " theme-toggle-icon--active" : ""}`}>
        <Moon size={16} aria-hidden="true" />
      </span>
      <span className={`theme-toggle-icon theme-toggle-icon--sun${theme === "dark" ? " theme-toggle-icon--active" : ""}`}>
        <Sun size={16} aria-hidden="true" />
      </span>
    </button>
  );
}
