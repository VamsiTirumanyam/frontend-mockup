"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { CarFront } from "lucide-react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [transitionDirection, setTransitionDirection] = useState<Theme | null>(null);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTransitioning = transitionDirection !== null;

  useEffect(() => {
    const root = document.documentElement;
    const getTheme = () => (root.dataset.theme === "dark" ? "dark" : "light");
    const storedTheme = localStorage.getItem("sparelab-theme");
    setTheme(getTheme());

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = (event: MediaQueryListEvent) => {
      if (localStorage.getItem("sparelab-theme")) return;
      const nextTheme = event.matches ? "dark" : "light";
      root.dataset.theme = nextTheme;
      setTheme(nextTheme);
    };

    if (!storedTheme) mediaQuery.addEventListener("change", syncSystemTheme);
    return () => {
      mediaQuery.removeEventListener("change", syncSystemTheme);
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    if (transitionTimer.current) return;
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reducedMotion) {
        setTransitionDirection(nextTheme);
        transitionTimer.current = setTimeout(() => {
          setTransitionDirection(null);
          transitionTimer.current = null;
        }, 1050);
      }
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("sparelab-theme", nextTheme);
      return nextTheme;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, isTransitioning }),
    [theme, toggleTheme, isTransitioning],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
      {transitionDirection && (
        <div
          className={`theme-drive theme-drive--${transitionDirection}`}
          role="presentation"
          aria-hidden="true"
        >
          <span className="theme-drive-car"><CarFront size={82} strokeWidth={1.5} /></span>
        </div>
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
